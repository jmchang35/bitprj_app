function running_late(date) {
    date = new Date(date);

    if (date.getHours() >= 22) {
        return "It is late!"
    }
    return "It is still early!"
}

exports.running_late = running_late 
