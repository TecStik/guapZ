const  FV=(rate, nper, pmt, pv, type)=>{
    var pow = Math.pow(1 + rate, nper),
       fv;
   
     multiplier=(pow-1)/rate
     fv=pmt*multiplier;
    
     
    return fv.toFixed(2);
  }
  const  annuity=(rate, nper, fv, pv, type)=>{
    var pow = Math.pow(1 + rate, nper),
       pmt;
   
     multiplier=(pow-1)/rate
     pmt=fv/multiplier;
    
     
    return pmt.toFixed(2);
  }
  // calculate annuity of FV
  export const AnnuityofFV=( rate, freq,n,fv)=>{
    var nper=n*freq;
    var r=(rate/100)/freq;
    const pmt= annuity(r,nper,fv,0,0);
    
    return pmt;
    
  } 
 
  export const FVofAnnuity=( rate, freq,n,pmt)=>{
  //  console.log("Inputs in FV of Annuity",rate, freq,n,pmt);
    var nper=n*freq;
    var r=(rate/100)/freq;
    const fValue= FV(r,nper,pmt,0,0);

  // console.log("FV of Annuity",r,nper,pmt,0,0)
    return fValue;
    
  }
  const  CF=( rate, freq,n,pmt)=>{
    var data=[];
    var nper=n*freq;
    var r=(rate/100)/freq;
  for ( var i=0; i<=nper;i++){
   data.push(FV(r,i,pmt,0,0));
  }
  console.log("CF",data);
  return data;
    
  }
  const  dataset= (start,end,freq,n,pmt)=>{
     var dataset=[];
    for(var i=start; i<=end; i+=2){
      const cf=CF(i,freq,n,pmt);
     var item= {
        data:cf, 
        strokeWidth: 5,
        
  color: (opacity = 1) => `rgba(72, 181, 255, ${opacity})`,
  };
  
  dataset.push(item);
  
  
    }
   consp;end.log("Dataset",dataset);
  return dataset;
  }