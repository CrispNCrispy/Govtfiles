'use strict';

const {Contract} = require('fabric-contract-api');

class referral extends Contract {

async queryData(ctx,patientId) {

    let recordAsBytes = await ctx.stub.getState(patientId); 

    if (!recordAsBytes || recordAsBytes.toString().length <= 0) {

      throw new Error('Patient with this Id does not exist: ');

       }

      let data=JSON.parse(recordAsBytes.toString());
      return JSON.stringify(data);

  }

async addData(ctx,patientId,data1) {
   
   let data={

       dat1:data1,

       };

    await ctx.stub.putState(patientId,Buffer.from(JSON.stringify(data))); 

    console.log('Patient-PHC Request added To the ledger Succesfully..');
    
  }

async deleteData(ctx,patientId) {
   
    await ctx.stub.deleteState(patientId); 
    console.log('Patient Data deleted from the ledger Succesfully..');

    }

   
}

module.exports=request;