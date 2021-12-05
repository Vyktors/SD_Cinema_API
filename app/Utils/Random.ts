export default class RandomUtil {
  public seed: number
  public modulus: number
  public a: number
  public c: number

  constructor(seed: number, modulus: number, a: number, c: number) {
    this.seed = seed
    this.modulus = modulus
    this.a = a
    this.c = c
  }

  public getRandom() {
    var returnVal = this.seed / this.modulus
    this.seed = (this.a * this.seed + this.c) % this.modulus
    return returnVal
  }

  public getRandom2(min: number, max: number) {
    var returnVal = this.seed / this.modulus
    this.seed = (this.a * this.seed + this.c) % this.modulus
    return Math.floor(returnVal * (max - min) + min)
  }
}
