export class Match {
  guid: string;
  wedID: string;
  tTGUID: string;
  tTNaam: string;
  tUGUID: string;
  tUNaam: string;
  datumString: string;
  jsDTCode: number;
  accGUID: string;
  accNaam: string;
  pouleGUID: string;
  pouleNaam: string;
  uitslag: string;
  beginTijd: string;

  constructor(){
    this.guid = '';
    this.wedID = '';
    this.tTGUID = '';
    this.tTNaam = '';
    this.tUGUID = '';
    this.tUNaam = '';
    this.datumString = '';
    this.jsDTCode = 0;
    this.accGUID = '';
    this.accNaam = '';
    this.pouleGUID = '';
    this.pouleNaam = '';
    this.uitslag = '';
    this.beginTijd = '';
  }
}
