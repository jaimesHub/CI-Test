class Destination {
    name;
    images; // các hình ảnh (dưới dạng url) review về địa điểm đó (mảng các url của image)
    dateModified;

    constructor(name) {
        this.name = name;
        this.images = [];
        this.dateModified = new Date().toISOString();
    }

    set newImage(image) {
        this.images.push(image);
    }

    get info() {
        return `
            Địa điểm: ${this.name}
            Review địa điểm: ${this.images}
            Được câp nhật vào lúc: ${this.dateModified}
        `;
    }
}

export { Destination };