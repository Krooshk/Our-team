function Registration() {
  return (
    <div className="form">
      <h1>Регистрация</h1>
      <div className="formFields">
        <div className="formField">
          <input type="text" placeholder="Артур" />
        </div>
        <div className="formField">
          <input type="email" placeholder="example@mail.ru" />
        </div>
        <div className="formField">
          <input type="text" placeholder="" />
        </div>
        <div className="formField">
          <input type="text" placeholder="" />
        </div>
      </div>
	  <button>Зарегистрироваться</button>
    </div>
  );
}

export default Registration;
