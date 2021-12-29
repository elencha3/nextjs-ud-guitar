export const formatDate = date => {
    const dateFormated = new Date (date)

    const options = {
        year:'numeric',
        month: 'long',
        day:'2-digit'
    }

    return dateFormated.toLocaleDateString('es-ES', options)
}