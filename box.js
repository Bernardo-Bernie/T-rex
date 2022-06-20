// método = function
class Box
{
    constructor(posX, posY, width, height, velocityX)
    {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.velocityX = velocityX;
    }

    show()
    {
        rect(this.posX, this.posY, this.width, this.height);
    }

    move()
    {
        this.posX = this.posX + this.velocityX;
    }
}