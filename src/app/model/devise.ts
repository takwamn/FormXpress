import { Pays } from "./pays";

export class Devise {
    public static fromJson(json: any): Devise {
      return new Devise(
          json['id'],         
          json['dvsCode'],          
          json["dvsDes"],
          json["prmPaysByDvsUid"]  
      );
  }  
  constructor(public id: number,             
              public dvsCode: string,              
              public dvsDes:string,
              public prmPaysByDvsUid: Pays[]) {
              }
  }
