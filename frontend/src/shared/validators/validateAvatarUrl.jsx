
export const validationAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/

    return regex.test(url)
}

export const avatarValidationMessage = 'Esta no es una URL válida';
