import Illustration from '../../assets/illustration.png'
import { Header } from '../../components/Header'

export const Register = () => {
  return (
    <div className="container-fluid vh-100 background-primary">
      <Header secondary />
      <div className="row">
        <div className="col-6 my-auto text-center">
          <img src={Illustration} alt="Mulher brincando com seu cachorro" className='img-fluid' /> 
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className='text-center mb-3'>Falta pouco para fazer o seu pet feliz</h2>
            <input type="text" placeholder='Nome completo' className="form-control form-control-lg mb-3" />
            <input type="email" placeholder='E-mail' className="form-control form-control-lg mb-3" />
            <input type="text" placeholder='Telefone' className="form-control form-control-lg mb-3" />
            <input type="text" placeholder='CPF' className="form-control form-control-lg mb-3" />
            <input type="date" placeholder='Data de Nascimento' className="form-control form-control-lg mb-3" />

            <button className='btn btn-lg btn-secondary w-100 button-secondary'>
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
