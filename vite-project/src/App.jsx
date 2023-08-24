import './app.css'
import Foto1 from './assets/Foto1.png'
import Foto2 from './assets/Foto2.png'
import Foto3 from './assets/Foto3.png'
import Foto4 from './assets/Foto4.png'

function App() {
  

  return (
    <>
      <div className='Container'>
        <h1 className='Title'>Itens mais vendidos</h1>
        <div className='ContainerDiv'>
          <div>
            <img className='Img' src={Foto1} alt="img camisa2" />
            <div className='ContainerDescricao'>
              <span className='Camisa'>Camisa I</span>
              <span className='Preco'>R$ 299</span>
            </div>
            <span className='Cor'>Branca</span>
          </div>
          <div>
            <img className='Img' src={Foto2} alt="img camisa" />
            <div className='ContainerDescricao'>
              <span className='Camisa'>Camisa Outubro Rosa</span>
              <span className='Preco'>R$ 249</span>
            </div>
            <span className='Cor'>Rosa</span>
          </div>
          <div>
            <img className='Img' src={Foto3} alt="img camisa" />
            <div className='ContainerDescricao'>
              <span className='Camisa'>Camisa III</span>
              <span className='Preco'>R$ 399</span>
            </div>
            <span className='Cor'>Preto</span>
          </div>
          <div>
            <img className='Img' src={Foto4} alt="img camisa" />
            <div className='ContainerDescricao'>
              <span className='Camisa'>Camisa II</span>
              <span className='Preco'>R$ 149</span>
            </div>
            <span className='Cor'>Tricolor</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
