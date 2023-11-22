import { Devise } from "./devise";


export class Pays {
    public static fromJson(json: any): Pays {
      return new Pays(
          json['id'],
          json['dvsUid'],
          json['paysCod'],
          json['paysDesc'],
          json['paysAbr'],
          json['paysStatus'],
          json["prmDeviseByDvsUid"] ,

      );
  }

  constructor(public id: number,
              public dvsUid: number,
              public paysCod: string,
              public paysDesc:string,
              public paysAbr:string,
              public paysStatus: string  ,
              public prmDeviseByDvsUid: Devise,

              ){ }
  }
