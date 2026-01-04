
class ReviewBlock{
    constructor(
        public name : string,
        public review : string,
        public star : number,
        public from : string
    ){}
}

export const reviewsHere : ReviewBlock[] = [
    new ReviewBlock(
        "Sreekanth",
        "Amazing product",
        4,
        "Google"
    ),
    new ReviewBlock(
        "Shalini",
        "Nice",
        5,
        "Google"
    ),
    new ReviewBlock(
        "Prashanthi",
        "Good",
        3,
        "Foodhub"
    ),
        new ReviewBlock(
        "Stephen",
        "Can do better",
        3,
        "Google"
    ),
        new ReviewBlock(
        "Adi",
        "Amazing",
        4,
        "Foodhub"
    ),
        new ReviewBlock(
        "Ardit",
        "Fantastasticccc",
        5,
        "Foodhub"
    ),
]


