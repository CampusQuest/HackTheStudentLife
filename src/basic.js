window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);

            const entity = document.createElement("a-image");
            entity.setAttribute("src", "assets/images/foodsample.png"); 

            entity.setAttribute("look-at", "[gps-camera]");
            entity.setAttribute("scale", "30 34 25");

            entity.setAttribute('gps-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity);
        }
        testEntityAdded = true;
    });
};