const getCurrentDateInFormat = () => {
    const cdo = new Date();
    return `${cdo.getFullYear()}-${cdo.getMonth() + 1}-${cdo.getDate()} ${cdo.getHours()}:${cdo.getMinutes()}:${cdo.getSeconds()}`;
}

module.exports = getCurrentDateInFormat;