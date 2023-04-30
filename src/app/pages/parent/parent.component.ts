import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
contactDetails:any=[]
  constructor() { }
  tableHeaders =  [
    {
      "key": "label",
      "value": "Quote Type",
      "topHeader": true,
      "subHeader": false,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "premium",
      "value": "Total Annual Premium",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "",
      "value": "Coverage",
      "topHeader": false,
      "subHeader": false,
      "mainHeader": true,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "coverageA",
      "value": "Coverage A - Dwelling",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "coverageB",
      "value": "Coverage B - Other Structures",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": false,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "coverageC",
      "value": "Coverage C - Contents",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "coverageD",
      "value": "Coverage D - Loss of Use",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "coverageE",
      "value": "Coverage E - Personal Liability",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "coverageF",
      "value": "Coverage F - Medical Payments",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "specialCoverageA",
      "value": "Special Coverage A",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": false,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": false
    },
    {
      "key": "specialCoverageC",
      "value": "Special Coverage C",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": false,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": false
    },
    {
      "key": "",
      "value": "Deductible",
      "topHeader": false,
      "subHeader": false,
      "mainHeader": true,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "allOtherPerilsDeductible",
      "value": "All Other Perils Deductible",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "hurricaneDeductibile",
      "value": "Hurricane Deductible Percentage",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "hurricaneDeductibileAmt",
      "value": "Hurricane Deductible Dollar Amount",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": false,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "",
      "value": "Essential Coverage",
      "topHeader": false,
      "subHeader": false,
      "mainHeader": true,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "waterDamageResp",
      "value": "Water Damage Coverage",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "contentsValuationResp",
      "value": "Contents Valuation",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": false
    },
    {
      "key": "",
      "value": "Additional Coverage",
      "topHeader": false,
      "subHeader": false,
      "mainHeader": true,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "addLawOrdinance",
      "value": "Ordinance or Law",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": false,
      "DP-3 Dwelling Fire/Renters": false
    },
    {
      "key": "poolScreenedEnclosureAmt",
      "value": "Screened Enclosure Coverage",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": false,
      "DP-3 Dwelling Fire/Renters": true
    },
    {
      "key": "waterBackup",
      "value": "Water Back Up and Sump Overflow",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": false
    },
    {
      "key": "personalInjury",
      "value": "Personal Injury",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": false
    },
    {
      "key": "animalLiability",
      "value": "Animal Liability",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": false
    },
    {
      "key": "equipmentBreakdown",
      "value": "Equipment Breakdown",
      "topHeader": false,
      "subHeader": true,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": false
    },
    {
      "key": "leadID",
      "value": "QuoteRush Id",
      "topHeader": false,
      "subHeader": false,
      "mainHeader": false,
      "HO-3: Home Owners Policy": true,
      "HO-6: Condo Owners Policy": true,
      "DP-3 Dwelling Fire/Renters": true
    }
  ]
  quoteData = [
    {
      "proposal0": [
        {
          "personalInjury": "Not Available",
          "animalLiability": "Available - $25 ; Sublimit - $25,000",
          "hurricaneDeductibileAmt": "$3,118",
          "specialCoverageA": "Included",
          "label": "Low Deductible",
          "specialCoverageC": "Not Available",
          "waterDamageResp": "Full",
          "equipmentBreakdown": "Not Available",
          "quoteType": "Low Deductible",
          "addLawOrdinance": "",
          "contentsValuationResp": "Replacement Cost",
          "carrier": "Edison",
          "premium": "$20,000",
          "hurricaneDeductibile": "5%",
          "coverageF": "$1,000",
          "poolScreenedEnclosureAmt": "",
          "coverageD": "$6,236",
          "coverageE": "$300,000",
          "allOtherPerilsDeductible": "$1,000",
          "coverageB": "$1,247",
          "coverageC": "Not available",
          "waterBackup": "Not Available",
          "leadID": "23",
          "coverageA": "$62,362"
        },
        {
          "personalInjury": "Available - $15",
          "animalLiability": "Available - $25 ; Sublimit - $50,000",
          "hurricaneDeductibileAmt": "$234",
          "specialCoverageA": "Included",
          "label": "Basic",
          "specialCoverageC": "Available",
          "waterDamageResp": "Full",
          "equipmentBreakdown": "Not Available",
          "quoteType": "Basic",
          "addLawOrdinance": "",
          "contentsValuationResp": "Actual Cash Value",
          "carrier": "Cabrillo",
          "premium": "$5,364",
          "hurricaneDeductibile": "5%",
          "coverageF": "$1,000",
          "poolScreenedEnclosureAmt": "",
          "coverageD": "$468",
          "coverageE": "$100,000",
          "allOtherPerilsDeductible": "$2,500",
          "coverageB": "$94",
          "coverageC": "Not available",
          "waterBackup": "Available - $25 ; Sublimit - $5,000 ; Deductible - $1,000",
          "leadID": "67",
          "coverageA": "$4,675"
        },
        {
          "personalInjury": "Available - $25 ",
          "animalLiability": "Available - $25 ; Sublimit - $5,000 ; Deductible - $1,000",
          "hurricaneDeductibileAmt": "",
          "specialCoverageA": "555",
          "label": "HH",
          "specialCoverageC": "Available",
          "waterDamageResp": "Full",
          "equipmentBreakdown": "Not Available",
          "quoteType": "Other",
          "addLawOrdinance": "",
          "contentsValuationResp": "Actual Cash Value",
          "carrier": "St. Johns",
          "premium": "$43,664",
          "hurricaneDeductibile": "5%",
          "coverageF": "$77877",
          "poolScreenedEnclosureAmt": "",
          "coverageD": "$468",
          "coverageE": "$7777",
          "allOtherPerilsDeductible": "$8634",
          "coverageB": "",
          "coverageC": "55555",
          "waterBackup": "Available - $25 ; Sublimit - $5,000 ; Deductible - $1,000",
          "leadID": "36",
          "coverageA": "$62,362"
        },
        {
          "personalInjury": "Available - $15",
          "animalLiability": "Available - $25 ; Sublimit - $50,000",
          "hurricaneDeductibileAmt": "$311,814",
          "specialCoverageA": "Included",
          "label": "High Deductible",
          "specialCoverageC": "Available",
          "waterDamageResp": "Full",
          "equipmentBreakdown": "Available - $40 ; Sublimit - $50,000 ; Deductible - $500",
          "quoteType": "High Deductible",
          "addLawOrdinance": "",
          "contentsValuationResp": "Replacement Cost",
          "carrier": "United",
          "premium": "$43,664",
          "hurricaneDeductibile": "5%",
          "coverageF": "$1,000",
          "poolScreenedEnclosureAmt": "",
          "coverageD": "$623,628",
          "coverageE": "$300,000",
          "allOtherPerilsDeductible": "$1,000",
          "coverageB": "$124,726",
          "coverageC": "Not available",
          "waterBackup": "Available - $25 ; Sublimit - $5,000 ; Deductible - AOP Deductible Applies",
          "leadID": "44",
          "coverageA": "$6,236,284"
        },
        {
          "personalInjury": "Available - $15",
          "animalLiability": "Available - $25 ; Sublimit - $25,000",
          "hurricaneDeductibileAmt": "$1,497,995",
          "specialCoverageA": "Included",
          "label": "Low Deductible",
          "specialCoverageC": "Available",
          "waterDamageResp": "Full",
          "equipmentBreakdown": "Available - $50 ; Sublimit - $100,000 ; Deductible - $500",
          "quoteType": "Low Deductible",
          "addLawOrdinance": "",
          "contentsValuationResp": "Replacement Cost",
          "carrier": "Centauri",
          "premium": "$787,868",
          "hurricaneDeductibile": "5%",
          "coverageF": "$1,000",
          "poolScreenedEnclosureAmt": "",
          "coverageD": "$2,995,990",
          "coverageE": "$300,000",
          "allOtherPerilsDeductible": "$1,000",
          "coverageB": "$599,198",
          "coverageC": "Not available",
          "waterBackup": "Available - $25 ; Sublimit - $5,000 ; Deductible - $1,000",
          "leadID": "665",
          "coverageA": "$29,959,898"
        }
      ]
    },
    {
      "proposal1": [
        {
          "personalInjury": "Not Available",
          "animalLiability": "Available - $25 ; Sublimit - $25,000",
          "hurricaneDeductibileAmt": "$3,118",
          "specialCoverageA": "Included",
          "label": "Low Deductible",
          "specialCoverageC": "Not Available",
          "waterDamageResp": "Full",
          "equipmentBreakdown": "Not Available",
          "quoteType": "Low Deductible",
          "addLawOrdinance": "",
          "contentsValuationResp": "Replacement Cost",
          "carrier": "Edison",
          "premium": "$20,000",
          "hurricaneDeductibile": "5%",
          "coverageF": "$1,000",
          "poolScreenedEnclosureAmt": "",
          "coverageD": "$6,236",
          "coverageE": "$300,000",
          "allOtherPerilsDeductible": "$1,000",
          "coverageB": "$1,247",
          "coverageC": "Not available",
          "waterBackup": "Not Available",
          "leadID": "23",
          "coverageA": "$62,362"
        },
        {
          "personalInjury": "Available - $15",
          "animalLiability": "Available - $25 ; Sublimit - $50,000",
          "hurricaneDeductibileAmt": "$234",
          "specialCoverageA": "Included",
          "label": "Basic",
          "specialCoverageC": "Available",
          "waterDamageResp": "Full",
          "equipmentBreakdown": "Not Available",
          "quoteType": "Basic",
          "addLawOrdinance": "",
          "contentsValuationResp": "Actual Cash Value",
          "carrier": "Cabrillo",
          "premium": "$5,364",
          "hurricaneDeductibile": "5%",
          "coverageF": "$1,000",
          "poolScreenedEnclosureAmt": "",
          "coverageD": "$468",
          "coverageE": "$100,000",
          "allOtherPerilsDeductible": "$2,500",
          "coverageB": "$94",
          "coverageC": "Not available",
          "waterBackup": "Available - $25 ; Sublimit - $5,000 ; Deductible - $1,000",
          "leadID": "67",
          "coverageA": "$4,675"
        },
        {
          "personalInjury": "Available - $25 ",
          "animalLiability": "Available - $25 ; Sublimit - $5,000 ; Deductible - $1,000",
          "hurricaneDeductibileAmt": "",
          "specialCoverageA": "555",
          "label": "HH",
          "specialCoverageC": "Available",
          "waterDamageResp": "Full",
          "equipmentBreakdown": "Not Available",
          "quoteType": "Other",
          "addLawOrdinance": "",
          "contentsValuationResp": "Actual Cash Value",
          "carrier": "St. Johns",
          "premium": "$43,664",
          "hurricaneDeductibile": "5%",
          "coverageF": "$77877",
          "poolScreenedEnclosureAmt": "",
          "coverageD": "$468",
          "coverageE": "$7777",
          "allOtherPerilsDeductible": "$8634",
          "coverageB": "",
          "coverageC": "55555",
          "waterBackup": "Available - $25 ; Sublimit - $5,000 ; Deductible - $1,000",
          "leadID": "36",
          "coverageA": "$62,362"
        },
        {
          "personalInjury": "Available - $15",
          "animalLiability": "Available - $25 ; Sublimit - $50,000",
          "hurricaneDeductibileAmt": "$311,814",
          "specialCoverageA": "Included",
          "label": "High Deductible",
          "specialCoverageC": "Available",
          "waterDamageResp": "Full",
          "equipmentBreakdown": "Available - $40 ; Sublimit - $50,000 ; Deductible - $500",
          "quoteType": "High Deductible",
          "addLawOrdinance": "",
          "contentsValuationResp": "Replacement Cost",
          "carrier": "United",
          "premium": "$43,664",
          "hurricaneDeductibile": "5%",
          "coverageF": "$1,000",
          "poolScreenedEnclosureAmt": "",
          "coverageD": "$623,628",
          "coverageE": "$300,000",
          "allOtherPerilsDeductible": "$1,000",
          "coverageB": "$124,726",
          "coverageC": "Not available",
          "waterBackup": "Available - $25 ; Sublimit - $5,000 ; Deductible - AOP Deductible Applies",
          "leadID": "44",
          "coverageA": "$6,236,284"
        },
        {
          "personalInjury": "Available - $15",
          "animalLiability": "Available - $25 ; Sublimit - $25,000",
          "hurricaneDeductibileAmt": "$1,497,995",
          "specialCoverageA": "Included",
          "label": "Low Deductible",
          "specialCoverageC": "Available",
          "waterDamageResp": "Full",
          "equipmentBreakdown": "Available - $50 ; Sublimit - $100,000 ; Deductible - $500",
          "quoteType": "Low Deductible",
          "addLawOrdinance": "",
          "contentsValuationResp": "Replacement Cost",
          "carrier": "Centauri",
          "premium": "$787,868",
          "hurricaneDeductibile": "5%",
          "coverageF": "$1,000",
          "poolScreenedEnclosureAmt": "",
          "coverageD": "$2,995,990",
          "coverageE": "$300,000",
          "allOtherPerilsDeductible": "$1,000",
          "coverageB": "$599,198",
          "coverageC": "Not available",
          "waterBackup": "Available - $25 ; Sublimit - $5,000 ; Deductible - $1,000",
          "leadID": "665",
          "coverageA": "$29,959,898"
        }
      ]
    }
  ]
  async ngOnInit(): Promise<void> {

    let htmlData = `<html>
    <body>
       <form>
          <div>
             <p><img style="width:75px;height:55px;" align="left" src="logo-2.png"></p>
    
             <h1 style="width:100%;text-align:center">Homeowners Insurance Proposal</h1>
             <br>
             <table class="table table-bordered text-center" style="width:100%;">
                <tbody>
                   <tr>
                      <td class="table-light" scope="col" style="width: 50%;"><a href="quotepresentationLink"> Click
                            Here</a> to proceed with quote selection</td>
                   </tr>
                   <tr>
                      <td class="table-light" scope="col" style="width: 50%;">Prepared For : $First_Name$Last_Name
                         <br>Property Address : $Property_Address
                      </td>
                      <!--  <td class="table-light" scope="col" style="width: 25%;"> </td> -->
                      <td class="table-light" scope="col" style="width: 50%;">Presented by : HH Insurance Group<br>Phone
                         Number : (727) 498-5551<br>Email Address : sales@hhinsgroup.com </td>
                   </tr>
                   ${'coApplicant'}
                </tbody>
             </table>
          </div>
          <div class="pt-5 mb-5 container">
             <div class="row">
                <div class="col-sm-10 offset-md-1 col-md-10" style="background-color:rgb(218, 218, 218);" id="canvas">
                   <div id="tableOne" #screen class="presentation container" style="margin-top: 33px;margin-bottom: 26px;">
                      <small style="align:center">`
    
    
        let proposalTableData = await this.getProposalData();
        for (let index = 0; index < proposalTableData.length; index++) {
          if (proposalTableData.length > 1) {
            htmlData = htmlData + `<h2 style="padding-top:33px; padding-bottom:33px;background-color:rgb(255, 255, 255);margin: 0;">Proposal ${index + 1}</h2>` + proposalTableData[index];
          } else {
            htmlData += proposalTableData[index];
          }
        }
        htmlData = htmlData + `<br>
        <div style="font-size: 10px">
           *This proposal is designed to summarize the coverage and policy terms being provided. The actual
           coverage definitions will need to be found in your full policy jacket and form. A copy of the
           policy jacket and form can be provided prior to binding coverage with HH Insurance Group, LLC
           upon your request.
        </div>
     </small>
    </div>
    </div>
    </div>
    </div></form></body></html>`
    
  console.log(htmlData,'htmlData')
  }
  // receiveData(e:any){
  //   console.log(e,"test")
  //   this.contactDetails.push(e)
  // }
  async getProposalData() {
    let array = [];
    for (let i = 0; i < this.quoteData.length; i++) {
      const data = await this.getTableData(this.quoteData[i], i)
      array.push(data)
    }
    return array;
  }


  getTableData(val: any, index: number) {
    const formHeaders = this.tableHeaders.filter((x) => x['HO-3: Home Owners Policy'] == true)
    console.log('form Head', formHeaders)
    let data = `<table class="table table-bordered text-center">`;
    for (let i = 0; i < formHeaders.length; i++) {
      if (formHeaders[i]['subHeader']) {
        let subHead = data.includes('<tbody>') ? `` : `<tbody>`;
        subHead += `<tr style="text-align:center">
          <td class="firstCol" scope="row"
             style="height: 55px; width: 20%; background-color: rgb(30, 88, 167);color: white;border: 1px solid rgb(242, 242, 242);text-align:center;bPerils">
             ${formHeaders[i]['value']}</td>`
        for (let j = 0; j < val[`proposal${index}`].length; j++) {
          subHead += `<td class="table-light"
            style="border: 1px solid rgb(242, 242, 242);height: 80px;width: 20%;">${val[`proposal${index}`][j][formHeaders[i]['key']]}</td>`;
        }
        subHead += `</tr>`;
        data += subHead;
      } else if (formHeaders[i]['topHeader']) {
        let topHead = `<thead style="font-weight: normal;">
          <tr>
             <th class="border-0" scope="col" style="border: 1px solid rgb(242, 242, 242);">${formHeaders[i]['value']}</th>`
        for (let j = 0; j < val[`proposal${index}`].length; j++) {
          topHead += `<th class="table-light" scope="col"
            style="border: 1px solid rgb(242, 242, 242);font-weight: normal;height: 80px;">
            <p style='font-size: 20px;'>${val[`proposal${index}`][j][formHeaders[i]['key']]}</p></th>`;
        }
        topHead += `</tr>
          </thead>`
        data += topHead;
      } else if (formHeaders[i]['mainHeader']) {
        data += `<tr><td><h2>${formHeaders[i]['value']}</h2></td></tr>`
      } else {
        let hiddenRow = `<tr style="text-align:center;">
                              <td class="firstCol" scope="row"
                                 style="height: 55px; width: 20%; background-color: rgb(30, 88, 167);color: rgb(30, 88, 167);border: 1px solid rgb(242, 242, 242);text-align:center">
                                 ${formHeaders[i]['value']}</td>`
        for (let j = 0; j < val[`proposal${index}`].length; j++) {
          hiddenRow += `<td class="table-light"
          style="border: 1px solid rgb(242, 242, 242);height: 55px;width: 20%; color:rgb(218, 218, 218);">
          ${val[`proposal${index}`][j][formHeaders[i]['key']]}</td>`;
        }
        hiddenRow += `</tr>`
        data += hiddenRow;
      }
    }
    data += `</tbody></table>`
    console.log(data)
    return data;

  }
}