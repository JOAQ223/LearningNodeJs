
class Item {
    constructor(title, description, location, date, time, contact, reward, image) {
        this.title = title;
        this.description = description
    }
}

class lostItem extends Item {
    constructor(title, description, location, date, time, contact, reward, image) {
        super();
        this.title = title;
        this.description = description
    }
}
class foundItem extends Item {
    constructor(title, description, location, date, time, contact, reward, image) {
        super();
        this.title = title;
        this.description = description
    }
} 