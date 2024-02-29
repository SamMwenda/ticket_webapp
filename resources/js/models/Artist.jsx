import alanImage from "@/images/alan.png";
import alessoImage from "@/images/alesso.png";
import davidImage from "@/images/david.png";
import garrixImage from "@/images/garrix.png";
import hardwellImage from "@/images/hardwell.png";
import harrisImage from "@/images/harris.png";
import kshmrImage from "@/images/kshmr.png";
import ninaImage from "@/images/nina.png";
import sabrinaImage from "@/images/sabrina.png";
import tiestoImage from "@/images/tiesto.png";

class Artist {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

const listArtist = [
    new Artist('Alan', alanImage),
    new Artist('Alesso', alessoImage),
    new Artist('David', davidImage),
    new Artist('Garrix', garrixImage),
    new Artist('Hardwell', hardwellImage),
    new Artist('Harris', harrisImage),
    new Artist('KSHMR', kshmrImage),
    new Artist('Nina', ninaImage),
    new Artist('Sabrina', sabrinaImage),
    new Artist('Tiesto', tiestoImage),
];

export default listArtist;
