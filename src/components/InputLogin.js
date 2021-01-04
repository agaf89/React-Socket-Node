export const InputLogin = ({formHandler, registerHandler, loading}) => {
    return (
        <>
             <div className="card-content">
                <div id='test1' className='mt-card'>
                    <div className="input-field">
                        <input 
                            id="email"
                            type="text"
                            name='email'
                            className='green-input'
                            onChange={formHandler}
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field">
                        <input 
                            id="password"
                            type="password"
                            name='password'
                            className='green-input'
                            onChange={formHandler}
                        />
                        <label htmlFor="password">Пароль</label>
                    </div>
                </div>
            </div>
            <div className="card-action center-align">
                <button disabled={loading} onClick={registerHandler} className='btn green accent-3 black-text z-depth-2 waves-effect'>Войти</button>
{/*                 <button  className='btn yellow black-text'>Регистрация</button>
 */}        </div>
        </>
    )
}