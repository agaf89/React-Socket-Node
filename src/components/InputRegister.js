export const InputRegister = ({formHandler, registerHandler, loading}) => {
    return (
        <>
             <div className="card-content">
                <div id='test2' className='mt-card register'>
                    <div className="input-field">
                        <input 
                            id="name"
                            type="text"
                            name='nameUser'
                            className='yellow-input'
                            onChange={formHandler}
                        />
                        <label htmlFor="email">Никнейм</label>
                    </div>
                    <div className="input-field">
                        <input 
                            id="email"
                            type="text"
                            name='email'
                            className='yellow-input'
                            onChange={formHandler}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input 
                            id="password"
                            type="password"
                            name='password'
                            className='yellow-input'
                            onChange={formHandler}
                        />
                        <label htmlFor="password">Пароль</label>
                    </div>
                </div>
            </div>
            <div className="card-action center-align">
                <button disabled={loading} onClick={registerHandler} className='btn waves-effect yellow black-text z-depth-2'>Регистрация</button>
            </div>
        </>
    )
}