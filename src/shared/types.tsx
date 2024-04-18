export enum Selectedpage{
    Home="home",
    Benefits="benefits",
    OurClasses="ourclasses",
    Contact="contact"
  }
 

  export interface BenefitType{
    icon:JSX.Element;
     title:string;
     description:string;
  }


  export interface ClassType{
    name:string;
    description:string;
     image:string;
     
  }