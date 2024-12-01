import * as React from 'react';
import "./profile.scss";

export default function TransitionsModal({ open, onClose }) {
  const [isRegister, setIsRegister] = React.useState(false);
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      // Регистрация
      if (password.length < 6) {
        setError('Пароль должен содержать не менее 6 символов');
        return;
      }
      const newUser = { login, password };
      localStorage.setItem('user', JSON.stringify(newUser));
      setError('Регистрация прошла успешно');
      setIsRegister(false);
    } else {
      // Авторизация
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.login === login && user.password === password) {
        setError('Авторизация прошла успешно');
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        // Очистка данных о избранном и корзине для других пользователей
        clearOtherUsersData(login);
      } else {
        setError('Неверный логин или пароль');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    onClose();
  };

  const clearOtherUsersData = (currentUserLogin) => {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('favourites_') || key.startsWith('basket_')) {
        const userLogin = key.split('_')[1];
        if (userLogin !== currentUserLogin) {
          localStorage.removeItem(key);
        }
      }
    }
  };

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setIsLoggedIn(true);
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setLogin(user.login);
      }
    }
  }, []);

  return (
    <div className="modal-parent">
      <div className="modal">
        {isLoggedIn ? (
          <>
            <div className="modal-header">
              <span>Профиль</span>
              <button className="close" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
                  <path d="M18.24 6.22a.75.75 0 0 1 0 1.06l-4.95 4.95 4.95 4.95a.75.75 0 0 1-1.06 1.06l-4.95-4.95-4.95 4.95a.75.75 0 1 1-1.06-1.06l4.95-4.95-4.95-4.95a.75.75 0 1 1 1.06-1.06l4.95 4.95 4.95-4.95a.75.75 0 0 1 1.06 0z" fill="#1B1B1B"></path>
                </svg>
              </button>
            </div>
            <div className="modal-content">
              <p>Вы вошли как {login}</p>
              <button onClick={handleLogout}>Выйти</button>
            </div>
          </>
        ) : (
          <>
            <div className="modal-header">
              <span>{isRegister ? 'РЕГИСТРАЦИЯ' : 'УКАЖИТЕ ТЕЛЕФОН'}</span>
              <button className="close" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
                  <path d="M18.24 6.22a.75.75 0 0 1 0 1.06l-4.95 4.95 4.95 4.95a.75.75 0 0 1-1.06 1.06l-4.95-4.95-4.95 4.95a.75.75 0 1 1-1.06-1.06l4.95-4.95-4.95-4.95a.75.75 0 1 1 1.06-1.06l4.95 4.95 4.95-4.95a.75.75 0 0 1 1.06 0z" fill="#1B1B1B"></path>
                </svg>
              </button>
            </div>
            <div className="modal-content">
              <p>Продолжая, вы даете <a href="#">согласие на обработку</a> персональных данных.</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="phone-input"
                  placeholder="Login"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
                <input
                  type="password"
                  className="password-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="register">
                  <p onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? 'Уже есть аккаунт? Войти' : 'Зарегистрироваться'}
                  </p>
                </div>
                <button type="submit">{isRegister ? 'Зарегистрироваться' : 'Войти'}</button>
              </form>
              {error && <p className="error">{error}</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}