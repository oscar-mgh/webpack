import '../css/components.css'
import webpacklogo from '../assets/img/webpack-logo.png'

export const createTitle = () => {

  const title = document.createElement('h1')
  title.innerText = 'Hello!'
  document.body.append(title)

  const img = document.createElement('img')
  img.src = webpacklogo;
  document.body.append(img)

}