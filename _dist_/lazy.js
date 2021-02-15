
let renderedImages = 0
const isIntersecting = entry => entry.isIntersecting

const observer = new IntersectionObserver( entries => {

    // console.log(entries);
    entries.filter( isIntersecting ).forEach( entry => {
        
        const node = entry.target

        // CARGAMOS LA IMAGEN

        entry.target.src = node.dataset.src

        // console.log(node);

        observer.unobserve(node)

        renderedImages+=1
        console.log(`🟣 Se han cargado ${renderedImages} imágenes`);

    })

})

// REGISTRAR IMAGEN
export const registrarImagen = img => 
{
    observer.observe(img)
}