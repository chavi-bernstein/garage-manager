export interface Garage {
  id: string;
  number: number;
  name: string;
  typeCode?: number;
  type?: string;
  address?: string;
  settlement?: string;
  phone?: string;
  postalCode?: number;
  professionCode?: number;
  profession?: string;
  professionManager?: string;
  registrationNumber?: number;
  testTime?: string;

  toJson?(): any;
}

export class GarageModel implements Garage {
  id: string;
  number: number;
  name: string;
  typeCode?: number;
  type?: string;
  address?: string;
  settlement?: string;
  phone?: string;
  postalCode?: number;
  professionCode?: number;
  profession?: string;
  professionManager?: string;
  registrationNumber?: number;
  testTime?: string;

  constructor(garage: Garage) {
    this.id = garage.id;
    this.number = garage.number;
    this.name = garage.name;
    this.typeCode = garage.typeCode;
    this.type = garage.type;
    this.address = garage.address;
    this.settlement = garage.settlement;
    this.phone = garage.phone;
    this.postalCode = garage.postalCode;
    this.professionCode = garage.professionCode;
    this.profession = garage.profession;
    this.professionManager = garage.professionManager;
    this.registrationNumber = garage.registrationNumber;
    this.testTime = garage.testTime;
  }

  toJson(): any {
    return {
      mispar_mosah: this.number,
      shem_mosah: this.name,
      cod_sug_mosah: this.typeCode || null,
      sug_mosah: this.type || null,
      ktovet: this.address || null,
      yishuv: this.settlement || null,
      telephone: this.phone || null,
      mikud: this.postalCode || null,
      cod_miktzoa: this.professionCode || null,
      miktzoa: this.profession || null,
      menahel_miktzoa: this.professionManager || null,
      rasham_havarot: this.registrationNumber || null,
      TESTIME: this.testTime || ""
    };
  }
}