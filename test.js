class Eloadas {
    constructor(sorokSzama, helyekSzama) {
      if (sorokSzama <= 0 || helyekSzama <= 0) {
        throw new Error("Az argumentumoknak 0-nál nagyobbnak kell lenniük.");
      }
      this.foglalasok = new Array(sorokSzama);
      for (let i = 0; i < sorokSzama; i++) {
        this.foglalasok[i] = new Array(helyekSzama).fill(false);
      }
    }
  
    lefoglal() {
      for (let i = 0; i < this.foglalasok.length; i++) {
        for (let j = 0; j < this.foglalasok[i].length; j++) {
          if (!this.foglalasok[i][j]) {
            this.foglalasok[i][j] = true;
            return true;
          }
        }
      }
      return false;
    }
  
    SzabadHelyek() {
      let szabadHelyek = 0;
      for (let i = 0; i < this.foglalasok.length; i++) {
        for (let j = 0; j < this.foglalasok[i].length; j++) {
          if (!this.foglalasok[i][j]) {
            szabadHelyek++;
          }
        }
      }
      return szabadHelyek;
    }
  
    get Teli() {
      for (let i = 0; i < this.foglalasok.length; i++) {
        for (let j = 0; j < this.foglalasok[i].length; j++) {
          if (!this.foglalasok[i][j]) {
            return false;
          }
        }
      }
      return true;
    }
  
    Foglalt(sorSzam, helySzam) {
      if (sorSzam <= 0 || helySzam <= 0 || sorSzam > this.foglalasok.length || helySzam > this.foglalasok[0].length) {
        throw new Error("Érvénytelen sorSzam vagy helySzam.");
      }
      return this.foglalasok[sorSzam - 1][helySzam - 1];
    }
  }
  