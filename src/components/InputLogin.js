export const InputLogin = ({formHandler, registerHandler}) => {
    return (
        <>
             <div className="card-content">
                <div id='test1' className='mt-card'>
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
                <button onClick={registerHandler} className='btn green accent-3 black-text' style={{marginRight: '10px'}}>Войти</button>
{/*                 <button  className='btn yellow black-text'>Регистрация</button>
 */}        </div>
        </>
    )
}