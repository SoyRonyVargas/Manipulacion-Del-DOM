import { registrarImagen } from "./lazy.js"

const maximum = 122
const minimum = 1

let totalImages = 0

const get = select => document.querySelector(select)
const crear = select => document.createElement(select)
const getRandom = () => Math.floor(Math.random() * ( maximum - minimum )) + minimum
const buttonAdd = get('button')
const app = get('#images')
const Limpiar = get('#limpiar')

const AddImage = () => app.append( createImageComponent() )
const CleanDOM = () => 
{
    let i = 0
    while ( i < app.childElementCount ){
        app.lastChild.remove()
    }
}

buttonAdd.addEventListener( 'click' , AddImage )
Limpiar.addEventListener( 'click' , CleanDOM )

const createImageComponent = () => 
{

    const imagen = crear('img')
    imagen.className = 'mx-auto'
    imagen.width = '320'
    // imagen.src = url
    imagen.dataset.src = `https://randomfox.ca/images/${getRandom()}.jpg`
    registrarImagen(imagen )

    const container = crear('div')
    container.className = "p-4 bg-gray-300 border border-transparent rounded-md"
    container.style.minHeight = "100px";
    container.style.maxWidth = "350px";
    container.style.margin = "auto";
    container.style.marginBottom = "30px";
    // container.style.display = "inline-block";
    container.append( imagen  )
    
    // LE APLICAMOS EL INTERSECTION OBSERVER
    totalImages+=1
    
    console.log(`⚪ Se han agregado ${totalImages} imágenes`);

    return container

}

const RenderDOM = () => {
    
    app.append( createImageComponent() )
    
}

RenderDOM()