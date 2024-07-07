export const formatDate = (date) => {
    const formattedDate = date.split(' ')[0].replace(/-/g, '/');
    return formattedDate;
}