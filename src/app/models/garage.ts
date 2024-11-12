export class Garage {
  id: number;
  garageNumber: number;
  garageName: string;
  garageTypeCode?: number;
  garageType?: string;
  address?: string;
  settlement?: string;
  phone?: string;
  postalCode?: number;
  professionCode?: number;
  profession?: string;
  professionManager?: string;
  registrationNumber?: number;
  testTime?: string;

  constructor(
    id: number,
    garageNumber: number,
    garageName: string,
    garageTypeCode?: number,
    garageType?: string,
    address?: string,
    settlement?: string,
    phone?: string,
    postalCode?: number,
    professionCode?: number,
    profession?: string,
    professionManager?: string,
    registrationNumber?: number,
    testTime?: string
  ) {
    if (!id || !garageNumber || !garageName) {
      throw new Error("id, garageNumber, and garageName cannot be null or undefined");
    }
    this.id = id;
    this.garageNumber = garageNumber;
    this.garageName = garageName;
    this.garageTypeCode = garageTypeCode;
    this.garageType = garageType;
    this.address = address;
    this.settlement = settlement;
    this.phone = phone;
    this.postalCode = postalCode;
    this.professionCode = professionCode;
    this.profession = profession;
    this.professionManager = professionManager;
    this.registrationNumber = registrationNumber;
    this.testTime = testTime;
  }

  // Static factory method to create a Garage instance from JSON
  static fromJson(json: any): Garage {
    return new Garage(
      json._id,
      json.mispar_mosah,
      json.shem_mosah,
      json.cod_sug_mosah,
      json.sug_mosah,
      json.ktovet,
      json.yishuv,
      json.telephone,
      json.mikud,
      json.cod_miktzoa,
      json.miktzoa,
      json.menahel_miktzoa,
      json.rasham_havarot,
      json.TESTIME
    );
  }

}
