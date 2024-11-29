import "./mailing.scss";

const Mailing = () => {
  return (
    <div className="mailing">
      <div>
        <h3>Подпишитесь на рассылку</h3>
        <p>
          Чтобы первыми узнавать об эксклюзивных новинках и специальных
          предложениях
        </p>
      </div>
      <div>
        <input type="text" placeholder="Ваш email" />
      </div>
    </div>
  );
};

export default Mailing;
