export const FetchGetStarted = data => {
  const countries = [
    { label: "Afghanistan", value: "af" },
    { label: "Åland Islands", value: "ax" },
    { label: "Albania", value: "al" },
    { label: "Algeria", value: "dz" },
    { label: "American Samoa", value: "as" },
    { label: "Andorra", value: "ad" },
    { label: "Angola", value: "ao" },
    { label: "Anguilla", value: "ai" },
    { label: "Antarctica", value: "aq" },
    { label: "Antigua and Barbuda", value: "ag" },
    { label: "Argentina", value: "ar" },
    { label: "Armenia", value: "am" },
    { label: "Aruba", value: "aw" },
    { label: "Australia", value: "au" },
    { label: "Austria", value: "at" },
    { label: "Azerbaijan", value: "az" },
    { label: "Bahamas", value: "bs" },
    { label: "Bahrain", value: "bh" },
    { label: "Bangladesh", value: "bd" },
    { label: "Barbados", value: "bb" },
    { label: "Belarus", value: "by" },
    { label: "Belgium", value: "be" },
    { label: "Belize", value: "bz" },
    { label: "Benin", value: "bj" },
    { label: "Bermuda", value: "bm" },
    { label: "Bhutan", value: "bt" },
    { label: "Bolivia", value: "bo" },
    { label: "Bosnia and Herzegovina", value: "ba" },
    { label: "Botswana", value: "bw" },
    { label: "Bouvet Island", value: "bv" },
    { label: "Brazil", value: "br" },
    // { label: "British Indian Ocean Territory", value: "io" },
    { label: "Brunei Darussalam", value: "bn" },
    { label: "Bulgaria", value: "bg" },
    { label: "Burkina Faso", value: "bf" },
    { label: "Burundi", value: "bi" },
    { label: "Cambodia", value: "kh" },
    { label: "Cameroon", value: "cm" },
    { label: "Canada", value: "ca" },
    { label: "Cape Verde", value: "cv" },
    { label: "Cayman Islands", value: "ky" },
    { label: "Central African Republic", value: "cf" },
    { label: "Chad", value: "td" },
    { label: "Chile", value: "cl" },
    { label: "China", value: "cn" },
    { label: "Christmas Island", value: "cx" },
    { label: "Cocos (Keeling) Islands", value: "cc" },
    { label: "Colombia", value: "co" },
    { label: "Comoros", value: "km" },
    { label: "Congo", value: "cg" },
    { label: "Congo, The Democratic Republic of the", value: "cd" },
    { label: "Cook Islands", value: "ck" },
    { label: "Costa Rica", value: "cr" },
    { label: "Cote D'Ivoire", value: "ci" },
    { label: "Croatia", value: "hr" },
    { label: "Cuba", value: "cu" },
    { label: "Cyprus", value: "cy" },
    { label: "Czech Republic", value: "cz" },
    { label: "Denmark", value: "dk" },
    { label: "Djibouti", value: "dj" },
    { label: "Dominica", value: "dm" },
    { label: "Dominican Republic", value: "do" },
    { label: "Ecuador", value: "ec" },
    { label: "Egypt", value: "eg" },
    { label: "El Salvador", value: "sv" },
    { label: "Equatorial Guinea", value: "gq" },
    { label: "Eritrea", value: "er" },
    { label: "Estonia", value: "ee" },
    { label: "Ethiopia", value: "et" },
    { label: "Falkland Islands (Malvinas)", value: "fk" },
    { label: "Faroe Islands", value: "fo" },
    { label: "Fiji", value: "fj" },
    { label: "Finland", value: "fi" },
    { label: "France", value: "fr" },
    { label: "French Guiana", value: "gf" },
    { label: "French Polynesia", value: "pf" },
    { label: "French Southern Territories", value: "tf" },
    { label: "Gabon", value: "ga" },
    { label: "Gambia", value: "gm" },
    { label: "Georgia", value: "ge" },
    { label: "Germany", value: "de" },
    { label: "Ghana", value: "gh" },
    { label: "Gibraltar", value: "gi" },
    { label: "Greece", value: "gr" },
    { label: "Greenland", value: "gl" },
    { label: "Grenada", value: "gd" },
    { label: "Guadeloupe", value: "gp" },
    { label: "Guam", value: "gu" },
    { label: "Guatemala", value: "gt" },
    { label: "Guernsey", value: "gg" },
    { label: "Guinea", value: "gn" },
    { label: "Guinea-Bissau", value: "gw" },
    { label: "Guyana", value: "gy" },
    { label: "Haiti", value: "ht" },
    { label: "Heard Island and Mcdonald Islands", value: "hm" },
    { label: "Holy See (Vatican City State)", value: "va" },
    { label: "Honduras", value: "hn" },
    { label: "Hong Kong", value: "hk" },
    { label: "Hungary", value: "hu" },
    { label: "Iceland", value: "is" },
    { label: "India", value: "in" },
    { label: "Indonesia", value: "id" },
    { label: "Iran, Islamic Republic of", value: "ir" },
    { label: "Iraq", value: "iq" },
    { label: "Ireland", value: "ie" },
    { label: "Isle of Man", value: "im" },
    { label: "Israel", value: "il" },
    { label: "Italy", value: "it" },
    { label: "Jamaica", value: "jm" },
    { label: "Japan", value: "jp" },
    { label: "Jersey", value: "je" },
    { label: "Jordan", value: "jo" },
    { label: "Kazakhstan", value: "kz" },
    { label: "Kenya", value: "ke" },
    { label: "Kiribati", value: "ki" },
    { label: "Korea, Democratic People's Republic of", value: "kp" },
    { label: "Korea, Republic of", value: "kr" },
    { label: "Kuwait", value: "kw" },
    { label: "Kyrgyzstan", value: "kg" },
    { label: "Lao People's Democratic Republic", value: "la" },
    { label: "Latvia", value: "lv" },
    { label: "Lebanon", value: "lb" },
    { label: "Lesotho", value: "ls" },
    { label: "Liberia", value: "lr" },
    { label: "Libyan Arab Jamahiriya", value: "ly" },
    { label: "Liechtenstein", value: "li" },
    { label: "Lithuania", value: "lt" },
    { label: "Luxembourg", value: "lu" },
    { label: "Macao", value: "mo" },
    { label: "Macedonia, The Former Yugoslav Republic of", value: "mk" },
    { label: "Madagascar", value: "mg" },
    { label: "Malawi", value: "mw" },
    { label: "Malaysia", value: "my" },
    { label: "Maldives", value: "mv" },
    { label: "Mali", value: "ml" },
    { label: "Malta", value: "mt" },
    { label: "Marshall Islands", value: "mh" },
    { label: "Martinique", value: "mq" },
    { label: "Mauritania", value: "mr" },
    { label: "Mauritius", value: "mu" },
    { label: "Mayotte", value: "yt" },
    { label: "Mexico", value: "mx" },
    { label: "Micronesia, Federated States of", value: "fm" },
    { label: "Moldova, Republic of", value: "md" },
    { label: "Monaco", value: "mc" },
    { label: "Mongolia", value: "mn" },
    { label: "Montserrat", value: "ms" },
    { label: "Morocco", value: "ma" },
    { label: "Mozambique", value: "mz" },
    { label: "Myanmar", value: "mm" },
    { label: "Namibia", value: "na" },
    { label: "Nauru", value: "nr" },
    { label: "Nepal", value: "np" },
    { label: "Netherlands", value: "nl" },
    { label: "Netherlands Antilles", value: "an" },
    { label: "New Caledonia", value: "nc" },
    { label: "New Zealand", value: "nz" },
    { label: "Nicaragua", value: "ni" },
    { label: "Niger", value: "ne" },
    { label: "Nigeria", value: "ng" },
    { label: "Niue", value: "nu" },
    { label: "Norfolk Island", value: "nf" },
    { label: "Northern Mariana Islands", value: "mp" },
    { label: "Norway", value: "no" },
    { label: "Oman", value: "om" },
    { label: "Pakistan", value: "pk" },
    { label: "Palau", value: "pw" },
    { label: "Palestinian Territory, Occupied", value: "ps" },
    { label: "Panama", value: "pa" },
    { label: "Papua New Guinea", value: "pg" },
    { label: "Paraguay", value: "py" },
    { label: "Peru", value: "pe" },
    { label: "Philippines", value: "ph" },
    { label: "Pitcairn", value: "pn" },
    { label: "Poland", value: "pl" },
    { label: "Portugal", value: "pt" },
    { label: "Puerto Rico", value: "pr" },
    { label: "Qatar", value: "qa" },
    { label: "Reunion", value: "re" },
    { label: "Romania", value: "ro" },
    { label: "Russian Federation", value: "ru" },
    { label: "Rwanda", value: "rw" },
    { label: "Saint Helena", value: "sh" },
    { label: "Saint Kitts and Nevis", value: "kn" },
    { label: "Saint Lucia", value: "lc" },
    { label: "Saint Pierre and Miquelon", value: "pm" },
    { label: "Saint Vincent and the Grenadines", value: "vc" },
    { label: "Samoa", value: "ws" },
    { label: "San Marino", value: "sm" },
    { label: "Sao Tome and Principe", value: "st" },
    { label: "Saudi Arabia", value: "sa" },
    { label: "Senegal", value: "sn" },
    { label: "Serbia and Montenegro", value: "cs" },
    { label: "Seychelles", value: "sc" },
    { label: "Sierra Leone", value: "sl" },
    { label: "Singapore", value: "sg" },
    { label: "Slovakia", value: "sk" },
    { label: "Slovenia", value: "si" },
    { label: "Solomon Islands", value: "sb" },
    { label: "Somalia", value: "so" },
    { label: "South Africa", value: "za" },
  ]
  return { countries }
}

export const FetchedHomePageData = data => {
  let allHomePageObj = data
  let homePageObj = {}
  for (let i = 0; i < allHomePageObj.length; i++) {
    let cmpname = allHomePageObj[i].attributes.cmpname;
    let headers = allHomePageObj[i].attributes.headers;
    let header3 = allHomePageObj[i].attributes?.header3;
    let imageUrl = allHomePageObj[i].attributes?.imageUrl;
    let paragraph = allHomePageObj[i].attributes?.paragraph;
    let dynamicCmpLength = allHomePageObj[i].attributes?.dynamicCmp.length;
    let dynamicCmp = allHomePageObj[i].attributes?.dynamicCmp;
    homePageObj[`${cmpname}`] =  headers
    if (header3) {
      homePageObj[`${`${cmpname}` + `-header3`}`] =  header3
    }
    if (imageUrl) {
      homePageObj[`${`${cmpname}` + `-imageUrl`}`] =  imageUrl
    }
    if (paragraph) {
      homePageObj[`${`${cmpname}` + "-paragraph"}`] = paragraph
    }
    if(dynamicCmpLength>0){
      let dynamicArr = [];
      for(let j = 0; j<dynamicCmpLength;j++){
        let dynamicObj = {};
        if(dynamicCmp[j]?.Text){
          dynamicObj['text'] = dynamicCmp[j]?.Text;
        }
        if(dynamicCmp[j]?.description){
          dynamicObj['description'] = dynamicCmp[j]?.description;
        }
        if(dynamicCmp[j]?.imageUrl){
          dynamicObj['imageUrl'] = dynamicCmp[j]?.imageUrl;
        }
        dynamicArr.push(dynamicObj);
      }
      homePageObj[`${`${cmpname}` + "-dynamicCmp"}`] = dynamicArr;
    }
  }
  const financialServices = [
    {
      header: homePageObj["section-03-banking-header3"],
      paragraph: homePageObj["section-03-banking-paragraph"],
    },
    {
      header: homePageObj["section-03-insurance-header3"],
      paragraph: homePageObj["section-03-insurance-paragraph"],
    },
    {
      header: homePageObj["section-03-Capital-Markets-header3"],
      paragraph: homePageObj["section-03-Capital-Markets-paragraph"],
    },
    {
      header: homePageObj["section-03-Asset-Management-header3"],
      paragraph: homePageObj["section-03-Asset-Management-paragraph"],
    },
  ]
  const cardMap = [0, 1, 2,3];
  const cardData = [
    "The team demonstrated their deep understanding of the business, data and Al technology to deliver many successful projects in our Collections and Risk Control departments. We benefitted from their consistent data management support.",
    "Crisp Analytics (LUMIQ) excels in futuristic solution architecture, leveraging strong data science and engineering expertise for efficient, effective data solutions. They smartly utilize Amazon services for tailored solutions.",
    "LUMIQ's Data Engineering team established a unified system, storing deduplicated customer profiles and loan applications, enabling instant identification for Moratorium, streamlining customer servicing and personalized loan journeys.",
    "LUMIQ stands out in a data-centric landscape. Their deep expertise in cloud technology and insurance, coupled with their extensive experience and remarkable speed help us to surpass customer and partner expectations."
  ]
  const cardClient = ["TVS Credit","HDFC Life","CLIX","HDFC ERGO"]
  const lumiqProduct = ["foundation", "pryzm", "fsi", "managed","Custom"]
  const testimonialSlider = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return {
    homePageObj,
    financialServices,
    cardMap,
    cardData,
    cardClient,
    lumiqProduct,
    testimonialSlider,
  }
}
export const FetchedPlatformPageData = data => {
  let allPlatformPageObj = data
  let platformPageObj = {}
  let moduleObj = {};
  
  for (let i = 0; i < allPlatformPageObj.length; i++) {
    let cmpname = allPlatformPageObj[i].attributes.cmpname
    platformPageObj[`${cmpname}` + `-cmpname` ] = cmpname
    platformPageObj[`${cmpname}` + `-header`] =  allPlatformPageObj[i].attributes?.header
    platformPageObj[`${cmpname}` + `-subHeader` ] = allPlatformPageObj[i].attributes?.subHeader
    platformPageObj[`${cmpname}` + `-paragraph` ] = allPlatformPageObj[i].attributes?.paragraph
    platformPageObj[`${cmpname}` + `-images`] = allPlatformPageObj[i].attributes.dynamicCmp[0]?.imageUrl

    //module-object
    if (cmpname.includes("section-03-emPower")) {
      moduleObj[`${cmpname}-cmpname`] =  cmpname
      moduleObj[`${cmpname}-header`] = allPlatformPageObj[i].attributes?.header
      moduleObj[`${cmpname}-subHeader`] = allPlatformPageObj[i].attributes?.subHeader
      moduleObj[`${cmpname}-paragraph`] = allPlatformPageObj[i].attributes?.paragraph
      moduleObj[`${cmpname}-images`] = allPlatformPageObj[i].attributes.dynamicCmp[0]?.imageUrl
      moduleObj[`${cmpname}-imagesDesc`] = allPlatformPageObj[i].attributes.dynamicCmp[0]?.description
    }
  }

  const foundationArray = [];
  const pryzmArray = [];

  for (const key in moduleObj) {
    if (key.startsWith("section-03-emPower-Foundation")) {
      foundationArray[key] = moduleObj[key];
    } else if (key.startsWith("section-03-emPower-Pryzm")) {
      pryzmArray[key] = moduleObj[key];
    }
  }
  const mergedArray = [
    foundationArray,
    pryzmArray
  ];
  const moduleData = [
    {
      "cmpname": "Foundation",
      "header": "emPower Foundation",
      "subHeader": "Data Ingestion & Unification",
      "paragraph": "Scalable and seamless data ingestion & transformation from any data source",
      "images": "/uploads/emp_Foundation_cf831e17c6.png",
      "imagesDesc": "MODULE 1 - emPower Foundation",
    },
    {
        "cmpname": "Pryzm",
    "header": "emPower Pryzm",
    "subHeader": "For Data Observability",
    "paragraph": "Timely delivery of trusted data with proactive identification of incidents",
    "images": "/uploads/emp_Pryzm_162d1f8f3a.png",
    "imagesDesc": "MODULE 2 - emPower Pryzm"
    }
  ]


  
  // const foundationArray = [];
  // const pryzmArray = [];
  // for (const key in moduleObj) {
  //   const prefix = key.startsWith("section-03-emPower-Foundation")
  //   ? "Foundation"
  //   : key.startsWith("section-03-emPower-Pryzm")
  //   ? "Pryzm"
  //   : "";

  //   if (prefix) {
  //     const newKey = key.replace(`section-03-emPower-${prefix}-`, "");
  //     const newObj = {[`${newKey}`]: moduleObj[key] };
  //     if (prefix === "Foundation") {
  //       foundationArray.push(newObj);
  //     } else if (prefix === "Pryzm") {
  //       pryzmArray.push(newObj);
  //     }
  //   }
  // }
  // let obj1 = foundationArray;
  // let obj2 = pryzmArray;
  const moduleArray = [];
  let moduleArrayObj = {};


  const platformDataProducts = [
    {
      imageSrc: platformPageObj["section-02-img-01-images"],
      header: platformPageObj["section-02-img-01-header"],
    },
    {
      imageSrc: platformPageObj["section-02-img-02-images"],
      header: platformPageObj["section-02-img-02-header"],
    },
    {
      imageSrc: platformPageObj["section-02-img-03-images"],
      header: platformPageObj["section-02-img-03-header"],
    },
    {
      imageSrc: platformPageObj["section-02-img-04-images"],
      header: platformPageObj["section-02-img-04-header"],
    },
    {
      imageSrc: platformPageObj["section-02-img-05-images"],
      header: platformPageObj["section-02-img-05-header"],
    },
    {
      imageSrc: platformPageObj["section-02-img-06-images"],
      header: platformPageObj["section-02-img-06-header"],
    },
  ]
  return { platformPageObj, moduleObj, moduleArray, platformDataProducts, moduleData}
}
export const FetchedPartnerPageData = data => {
  let allPartnerPageObj = data
  let partnerPageObj = {}
  for (let i = 0; i < allPartnerPageObj.length; i++) {
    let cmpname = allPartnerPageObj[i].attributes.cmpname
    partnerPageObj[`${cmpname}` + `-cmpname`] = cmpname
    partnerPageObj[`${cmpname}` + `-header`] = allPartnerPageObj[i].attributes.header
    partnerPageObj[`${cmpname}` + `-subHeader` ] = allPartnerPageObj[i].attributes.subHeader
    partnerPageObj[`${cmpname}` + `-paragraph`] = allPartnerPageObj[i].attributes.paragraph
    if (allPartnerPageObj[i].attributes.dynamicCmp.length > 1) {
      for (let j = 0; j < allPartnerPageObj[i].attributes.dynamicCmp.length;  j++ ) {
        partnerPageObj[`${cmpname}` + `-images${j + 1}`] = allPartnerPageObj[i].attributes.dynamicCmp[j]?.imageUrl
      }
    } else {
      partnerPageObj[`${cmpname}` + `-images`] = allPartnerPageObj[i].attributes.dynamicCmp[0]?.imageUrl
    }
  }
  let cloudImages = [
    partnerPageObj["cloud-partners-images1"],
    partnerPageObj["cloud-partners-images2"],
    partnerPageObj["cloud-partners-images3"],
  ]
  let partnerImages = [
    partnerPageObj["technology-Partners-images1"],
    partnerPageObj["technology-Partners-images2"],
    partnerPageObj["technology-Partners-images3"],
    partnerPageObj["technology-Partners-images4"],
    partnerPageObj["technology-Partners-images5"],
    partnerPageObj["technology-Partners-images6"],
    partnerPageObj["technology-Partners-images7"],
    partnerPageObj["technology-Partners-images8"],
  ]
  let channelImages = [
    partnerPageObj["channel-partners-images1"],
    partnerPageObj["channel-partners-images2"],
    partnerPageObj["channel-partners-images3"],
  ]
  const imageAlt = "Image"

  return { partnerPageObj, cloudImages, partnerImages, channelImages, imageAlt }
}

export const FetchedCompanyPageData = data => {
  let allCompanyPageObj = data
  let companyPageObj = {}
  for (let i = 0; i < allCompanyPageObj.length; i++) {
    let cmpname = allCompanyPageObj[i].attributes.cmpname
    companyPageObj[`${cmpname}` + `-cmpname`] =   cmpname
    companyPageObj[`${cmpname}` + `-header`] =  allCompanyPageObj[i].attributes.headers
    companyPageObj[`${cmpname}` + `-paragraph` ] = allCompanyPageObj[i].attributes.paragraph
    if (allCompanyPageObj[i].attributes.dynamicCmp.length > 1) {
      for ( let j = 0; j < allCompanyPageObj[i].attributes.dynamicCmp.length; j++ ) {
        companyPageObj[`${cmpname}` + `-images${j + 1}`] = allCompanyPageObj[i].attributes.dynamicCmp[j]?.imageUrl
      }
    } else {
      companyPageObj[`${cmpname}` + `-images`] = allCompanyPageObj[i].attributes.dynamicCmp[0]?.imageUrl
    }
  }
  return companyPageObj
}

export const FetchedCareerPageData = data => {
  let allCareerPageObj = data
  let careerPageObj = {}
  for (let i = 0; i < allCareerPageObj.length; i++) {
    let cmpname = allCareerPageObj[i].attributes.cmpname
    careerPageObj[`${cmpname}` + `-cmpname`] =  cmpname
    careerPageObj[`${cmpname}` + `-header`] = allCareerPageObj[i].attributes.headers
    careerPageObj[`${cmpname}` + `-subHeader`] = allCareerPageObj[i].attributes.subHeader
    careerPageObj[`${cmpname}` + `-paragraph`] = allCareerPageObj[i].attributes.paragraph
    if (allCareerPageObj[i].attributes.dynamicCmp.length > 1) {
      for (let j = 0;j < allCareerPageObj[i].attributes.dynamicCmp.length;j++) {
        careerPageObj[`${cmpname}` + `-images${j + 1}`] = allCareerPageObj[i].attributes.dynamicCmp[j]?.imageUrl
      }
    } else {
        careerPageObj[`${cmpname}` + `-images`] = allCareerPageObj[i].attributes.dynamicCmp[0]?.imageUrl
    }
  }
  return careerPageObj
}
export const FetchedResourcePageData = data => {
  const options = [
    // { value: "latest", label: "Latest" },
    { value: "Blogs", label: "Blogs" },
    { value: "Case-Studies", label: "Case Studies" },
    { value: "data-sheets", label: "Brochures" },
    { value: "videos", label: "Videos" },
    { value: "media-releases", label: "Media Releases" },
    { value: "webinars", label: "Events" },
  ]
  const style = {
    control: base => ({
      ...base,
      border: "1px solid #000",
      fontFamily: "Helvicta",
      // This line disable the blue border
      boxShadow: "none",
    }),
  }
  const tabs = [
    // { id: "latest", label: "Latest" },
    { id: "Blogs", label: "Blogs" },
    { id: "Case-Studies", label: "Case Studies" },
    { id: "data-sheets", label: "Brochures" },
    { id: "videos", label: "Videos" },
    { id: "media-releases", label: "Media Releases" },
    { id: "webinars", label: "Events" },
  ]
  return { options, style, tabs }
}

export const FetchedEmpowerFoundationPageData = data => {
  // let dat = data
  if (data) {
    const empHeader = data[0]
    const empProducts = data[1]
    const empModules = data[2]
    const empModuleArray = empModules?.modules
    return { empHeader, empProducts, empModules, empModuleArray }
  }
  return {}
}

export const FetchedAwsPartnerPageData = data => {

  let sections = []
  for (let i = 0; i < data?.length; i++) {
    let sectionNumber = i.toString().padStart(2, "0")
    sections.push({ [`section-${sectionNumber}`]: data[i].attributes })
  }

  const cardMap = [0, 1, 2,3];
  const cardData = [
    "The team demonstrated their deep understanding of the business, data and Al technology to deliver many successful projects in our Collections and Risk Control departments. We benefitted from their consistent data management support.",
    "Crisp Analytics (LUMIQ) excels in futuristic solution architecture, leveraging strong data science and engineering expertise for efficient, effective data solutions. They smartly utilize Amazon services for tailored solutions.",
    "LUMIQ's Data Engineering team established a unified system, storing deduplicated customer profiles and loan applications, enabling instant identification for Moratorium, streamlining customer servicing and personalized loan journeys.",
    "LUMIQ stands out in a data-centric landscape. Their deep expertise in cloud technology and insurance, coupled with their extensive experience and remarkable speed help us to surpass customer and partner expectations."
      ]
  const cardClient = ["TVS Credit","HDFC Life","CLIX","HDFC ERGO"];

  const blogMap = [0, 1, 2,3];
  const blogData = [
   "<strong>Continuous Deployment: Accelerating Software Delivery and Improving Agility</strong><p>Continuous Deployment (CD) has emerged as a game-changing practice that enables organizations to streamline software delivery, increase agility, and reduce time-to-market.</p>",
   "<strong>The Agile, the Fragile, and the Iron Fist of Branching Strategies</strong><p>Whether you're navigating the treacherous waters of large-scale projects or sprinting toward rapid innovation, understanding branching strategies is essential.</p>",
   "<strong>Building a Secure CI/CD Pipeline on AWS for the Financial Sector</strong><p> Continuous Integration and Continuous Deployment (CI/CD) pipelines play a pivotal role in accelerating delivery, enhancing collaboration, and maintaining code quality.</p>",
   "<strong>Getting Started with AWS DevOps on Amazon EKS</strong><p>The integration of development and operations aims to streamline processes, accelerate delivery, and enhance collaboration, ultimately leading to the creation of high-quality software products.</p>",
  ]
  const blogClient = ["Read More","Read More","Read More","Read More"];
  const blogLinks = [
    "https://lumiq.ai/resources/detailedBlog/continuous-deployment-speeding-software-delivery-and-agility",
  "https://lumiq.ai/resources/detailedBlog/agile-fragile-and-iron-fist-mastering-branching-strategies",
  "https://lumiq.ai/resources/detailedBlog/secure-ci-cd-on-aws-building-financial-sector-pipelines",
  "https://lumiq.ai/resources/detailedBlog/getting-started-with-aws-dev-ops-on-amazon-eks",];
  
  let cards = sections[3]["section-03"]?.dynamicCmp
  let iconArr = [0, 1]
  let awsSlider = sections[5]["section-05"]?.dynamicCmp
  let tabs = []
  let allCaseStudy = []
  let awsIcon = []
  for (let i = 0; i < sections[6]["section-06"].dynamicCmp.length; i++) {
    tabs.push({
      id: i,
      label: sections[6]["section-06"].dynamicCmp[i].statement,
    })
    allCaseStudy.push({
      contextParagraph:sections[6]["section-06"].dynamicCmp[i].contextParagraph,
      Problem: sections[6]["section-06"].dynamicCmp[i].Problem,
      Solution: sections[6]["section-06"].dynamicCmp[i].Solution,
      Impact: sections[6]["section-06"].dynamicCmp[i].Impact,
    })
  }
  for (let i = 0; i < sections[2]["section-02"]?.dynamicCmp.length; i++) {
    awsIcon.push({ icon: sections[2]["section-02"]?.dynamicCmp[i].imageUrl })
  }


  var settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const testimonialSlider = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return {
    settings,
    testimonialSlider,
    cardMap,
    cardData,
    cardClient,
    blogMap,
    blogData,
    blogClient,
    blogLinks,
    sections,
    cards,
    iconArr,
    awsSlider,
    tabs,
    allCaseStudy,
    awsIcon,
  }
}


export const FetchedGCPPartnerPageData = data => {

  let sections = []
  for (let i = 0; i < data?.length; i++) {
    let sectionNumber = i.toString().padStart(2, "0")
    sections.push({ [`section-${sectionNumber}`]: data[i].attributes })
  }

  const cardMap = [0, 1, 2,3];
  const cardData = [
    "The team demonstrated their deep understanding of the business, data and Al technology to deliver many successful projects in our Collections and Risk Control departments. We benefitted from their consistent data management support.",
    "Crisp Analytics (LUMIQ) excels in futuristic solution architecture, leveraging strong data science and engineering expertise for efficient, effective data solutions. They smartly utilize Amazon services for tailored solutions.",
    "LUMIQ's Data Engineering team established a unified system, storing deduplicated customer profiles and loan applications, enabling instant identification for Moratorium, streamlining customer servicing and personalized loan journeys.",
    "LUMIQ stands out in a data-centric landscape. Their deep expertise in cloud technology and insurance, coupled with their extensive experience and remarkable speed help us to surpass customer and partner expectations."
      ]
  const cardClient = ["TVS Credit","HDFC Life","CLIX","HDFC ERGO"];

  const blogMap = [0, 1, 2,3];
  const blogData = [
   "<strong>Continuous Deployment: Accelerating Software Delivery and Improving Agility</strong><p>Continuous Deployment (CD) has emerged as a game-changing practice that enables organizations to streamline software delivery, increase agility, and reduce time-to-market.</p>",
   "<strong>The Agile, the Fragile, and the Iron Fist of Branching Strategies</strong><p>Whether you're navigating the treacherous waters of large-scale projects or sprinting toward rapid innovation, understanding branching strategies is essential.</p>",
   "<strong>Building a Secure CI/CD Pipeline on AWS for the Financial Sector</strong><p> Continuous Integration and Continuous Deployment (CI/CD) pipelines play a pivotal role in accelerating delivery, enhancing collaboration, and maintaining code quality.</p>",
   "<strong>Getting Started with AWS DevOps on Amazon EKS</strong><p>The integration of development and operations aims to streamline processes, accelerate delivery, and enhance collaboration, ultimately leading to the creation of high-quality software products.</p>",
  ]
  const blogClient = ["Read More","Read More","Read More","Read More"];
  const blogLinks = [
    "https://lumiq.ai/resources/detailedBlog/continuous-deployment-speeding-software-delivery-and-agility",
  "https://lumiq.ai/resources/detailedBlog/agile-fragile-and-iron-fist-mastering-branching-strategies",
  "https://lumiq.ai/resources/detailedBlog/secure-ci-cd-on-aws-building-financial-sector-pipelines",
  "https://lumiq.ai/resources/detailedBlog/getting-started-with-aws-dev-ops-on-amazon-eks",];
  
  // let cards = sections[3]["section-03"]?.dynamicCmp
  let iconArr = [0, 1]
  // let awsSlider = sections[5]["section-05"]?.dynamicCmp
  let tabs = []
  let allCaseStudy = []
  let awsIcon = []
  console.log(sections,"hello")
  for (let i = 0; i < sections[6]["section-06"]?.dynamicCmp?.length; i++) {
    tabs.push({
      id: i,
      label: sections[6]["section-06"].dynamicCmp[i].statement,
    })
    allCaseStudy.push({
      Problem: sections[6]["section-06"].dynamicCmp[i].Problem,
      Solution: sections[6]["section-06"].dynamicCmp[i].Solution,
      Impact: sections[6]["section-06"].dynamicCmp[i].Impact,
    })
  }
  for (let i = 0; i < sections[2]["section-02"]?.dynamicCmp.length; i++) {
    awsIcon.push({ icon: sections[2]["section-02"]?.dynamicCmp[i].imageUrl })
  }


  var settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const testimonialSlider = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return {
    settings,
    testimonialSlider,
    cardMap,
    cardData,
    cardClient,
    blogMap,
    blogData,
    blogClient,
    blogLinks,
    sections,
    // cards,
    iconArr,
    // awsSlider,
    tabs,
    allCaseStudy,
    awsIcon,
  }
}

///added by akib

export const FetchedGcpPartnerPageData = data => {

  let sections = []
  for (let i = 0; i < data?.length; i++) {
    let sectionNumber = i.toString().padStart(2, "0")
    sections.push({ [`section-${sectionNumber}`]: data[i].attributes })
  }

  const cardMap = [0, 1, 2,3];
  const cardData = [
    "The team demonstrated their deep understanding of the business, data and Al technology to deliver many successful projects in our Collections and Risk Control departments. We benefitted from their consistent data management support.",
    "Crisp Analytics (LUMIQ) excels in futuristic solution architecture, leveraging strong data science and engineering expertise for efficient, effective data solutions. They smartly utilize Amazon services for tailored solutions.",
    "LUMIQ's Data Engineering team established a unified system, storing deduplicated customer profiles and loan applications, enabling instant identification for Moratorium, streamlining customer servicing and personalized loan journeys.",
    "LUMIQ stands out in a data-centric landscape. Their deep expertise in cloud technology and insurance, coupled with their extensive experience and remarkable speed help us to surpass customer and partner expectations."
      ]
  const cardClient = ["TVS Credit","HDFC Life","CLIX","HDFC ERGO"];

  const blogMap = [0, 1, 2,3];
  const blogData = [
   "<strong>Continuous Deployment: Accelerating Software Delivery and Improving Agility</strong><p>Continuous Deployment (CD) has emerged as a game-changing practice that enables organizations to streamline software delivery, increase agility, and reduce time-to-market.</p>",
   "<strong>The Agile, the Fragile, and the Iron Fist of Branching Strategies</strong><p>Whether you're navigating the treacherous waters of large-scale projects or sprinting toward rapid innovation, understanding branching strategies is essential.</p>",
   "<strong>Building a Secure CI/CD Pipeline on AWS for the Financial Sector</strong><p> Continuous Integration and Continuous Deployment (CI/CD) pipelines play a pivotal role in accelerating delivery, enhancing collaboration, and maintaining code quality.</p>",
   "<strong>Getting Started with AWS DevOps on Amazon EKS</strong><p>The integration of development and operations aims to streamline processes, accelerate delivery, and enhance collaboration, ultimately leading to the creation of high-quality software products.</p>",
  ]
  const blogClient = ["Read More","Read More","Read More","Read More"];
  const blogLinks = [
    "https://lumiq.ai/resources/detailedBlog/continuous-deployment-speeding-software-delivery-and-agility",
  "https://lumiq.ai/resources/detailedBlog/agile-fragile-and-iron-fist-mastering-branching-strategies",
  "https://lumiq.ai/resources/detailedBlog/secure-ci-cd-on-aws-building-financial-sector-pipelines",
  "https://lumiq.ai/resources/detailedBlog/getting-started-with-aws-dev-ops-on-amazon-eks",];
  
  let cards = sections[2]["section-02"]?.dynamicCmp
  let iconArr = [0, 1]
  let awsSlider = sections[5]["section-05"]?.dynamicCmp
  let tabs = []
  let allCaseStudy = []
  let awsIcon = []
  for (let i = 0; i < sections[4]["section-04"].dynamicCmp.length; i++) {
    tabs.push({
      id: i,
      label: sections[4]["section-04"].dynamicCmp[i].statement,
    })
    allCaseStudy.push({
      Problem: sections[4]["section-04"].dynamicCmp[i].Problem,
      Solution: sections[4]["section-04"].dynamicCmp[i].Solution,
      Impact: sections[4]["section-04"].dynamicCmp[i].Impact,
    })
  }
  // for (let i = 0; i < sections[2]["section-02"]?.dynamicCmp.length; i++) {
  //   awsIcon.push({ icon: sections[2]["section-02"]?.dynamicCmp[i].imageUrl })
  // }


  var settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const testimonialSlider = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return {
    settings,
    testimonialSlider,
    cardMap,
    cardData,
    cardClient,
    blogMap,
    blogData,
    blogClient,
    blogLinks,
    sections,
    cards,
    iconArr,
    awsSlider,
    tabs,
    allCaseStudy,
    awsIcon,
  }
}

export const empPryzmData=data=>{
   const banner={};
  //  data?.empPage?.empPage?.journey[1]?.attributes?.dynamicCmp
   const temp=data?.allPryzm?.nodes[0]?.journey[0]?.attributes;
   const dynamicTemp=data?.allPryzm?.nodes[0]?.journey[0]?.attributes?.dynamicCmp[0];


   banner.heading=temp?.heading;
   banner.subheading=temp?.subheading;
   
   banner.imageUrl=temp?.imageUrl;

   banner.paragraph=dynamicTemp?.heading;
   banner.subparagraph=dynamicTemp?.paragraph;

   const section2=data?.allPryzm?.nodes[0]?.journey[1]?.attributes;
   const section3=data?.allPryzm?.nodes[0]?.journey[2]?.attributes;
   const section4=data?.allPryzm?.nodes[0]?.journey[3]?.attributes;
   const section5=data?.allPryzm?.nodes[0]?.journey[4]?.attributes;
  return {banner,section2,section3,section4,section5};
}

export const genaiData=data=>{
  const banner=data?.genai?.genai?.journey[0]?.attributes;
  const section2=data?.genai?.genai?.journey[1]?.attributes;
  const section3=data?.genai?.genai?.journey[2]?.attributes;
  const section4=data?.genai?.genai?.journey[3]?.attributes;
  const section5=data?.genai?.genai?.journey[4]?.attributes;
  const section6=data?.genai?.genai?.journey[5]?.attributes;
  const section7=data?.genai?.genai?.journey[6]?.attributes;


  return {banner,section2,section3,section4,section5,section6,section7};
}
export const FetchedDevopsPageData = data => {
  var settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  }

  const testimonialSlider = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  let sections = []
  let tabs = []
  
  for (let i = 0; i < data?.length; i++) {
    sections.push({ [`cmpname-${data[i].attributes?.cmpName}`]: data[i].attributes })
  }
  // console.log(sections,'devopsPage')
  let allCaseStudy = []
  for (let i = 0; i < sections[6]["cmpname-caseStudies"].dynamicCmp.length; i++) {
    tabs.push({
      id: i,
      label: sections[6]["cmpname-caseStudies"].dynamicCmp[i].statement,
    })
    allCaseStudy.push({
      Problem: sections[6]["cmpname-caseStudies"].dynamicCmp[i].Problem,
      Solution: sections[6]["cmpname-caseStudies"].dynamicCmp[i].Solution,
      Impact: sections[6]["cmpname-caseStudies"].dynamicCmp[i].Impact,
    })
  }
  // console.log(allCaseStudy,'devopsPage')
  const cardMap = [0, 1, 2];
  const cardData = [
    "The team demonstrated their deep understanding of the business, data and Al technology to deliver many successful projects in our Collections and Risk Control departments. We benefitted from their consistent data management support.",
    "Crisp Analytics (LUMIQ) excels in futuristic solution architecture, leveraging strong data science and engineering expertise for efficient, effective data solutions. They smartly utilize Amazon services for tailored solutions.",
    "LUMIQ's Data Engineering team established a unified system, storing deduplicated customer profiles and loan applications, enabling instant identification for Moratorium, streamlining customer servicing and personalized loan journeys.",
  ]
  const cardClient = ["TVS Credit","HDFC Life","CLIX"];
  const banner = sections[0]['cmpname-banner'];
  const cloud = sections[1]['cmpname-cloud-driven']
  const ourDevops = sections[2]['cmpname-our-devOps']
  const lumiqDevops = sections[3]['cmpname-lumiq-devOps']
  const pillers = sections[4]['cmpname-pillers']
  const whatWeUse = sections[5]['cmpname-what-we-use']
  const successStories = sections[7]['cmpname-our-success-stories'];
  const workWithUs = sections[8]['cmpname-work-with-us'];
  return {sections,banner,cloud,ourDevops,lumiqDevops,pillers,whatWeUse,successStories,workWithUs,settings,testimonialSlider,cardMap,cardData,cardClient,allCaseStudy,tabs}
}
// function seperateCamelCaseWords(a) {
//     a= a.replace(/[^\w\s]/g, ' ');
//     const mySentence = a;
//     let words = a.split(' ');
//     for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     let capitalizedSentence = words.join(' ');

//      return capitalizedSentence;
//   }
export const YouTubeVideo = (data) => {
  var video = [

    ///life at lumiq
    {
      src: "https://www.youtube.com/embed/DuW0hAOiBbc?si=pe3rxwEkR29FIpRx?controls=0&showinfo=0&modestbranding=1",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: "allowfullscreen",
      category: "life-at-lumiq",
      heading:"Welcome To LUMIQ | Our Culture",
      description:"LUMIQ's culture defines passion meets purpose, where every challenge drives innovative solutions in data and insurance.",
      fullDescription:"LUMIQ's culture is a dynamic fusion of passion and purpose, propelling innovation in data analytics and insurance solutions that are designed for the future. This unique environment fosters creativity and encourages team members to think outside the box, enabling them to develop cutting-edge solutions that meet the evolving needs of clients. At LUMIQ, the commitment to driving innovation is not just a goal—it's a shared mission that inspires every employee to contribute their best work.LUMIQ's culture is a dynamic fusion of passion and purpose, propelling innovation in data analytics and insurance solutions that are designed for the future. This unique environment fosters creativity and encourages team members to think outside the box, enabling them to develop cutting-edge solutions that meet the evolving needs of clients. At LUMIQ, the commitment to driving innovation is not just a goal—it's a shared mission that inspires every employee to contribute their best work.",
      slug:"life-at-lumiq-1",
      tags:" Our Culture"
    },
    {
      src:
        "https://www.youtube.com/embed/mqOGVL2rIxo?si:su0MKs46vjlMGx1l?controls=0&showinfo=0&modestbranding=1",
      title: "",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: "allowfullscreen",
      category: "life-at-lumiq",
      heading:"CHALE CHALO: Experience LUMIQ's Culture Code",
      description:"Experience CHALE CHALO: Passion, innovation, and unity in redefining workplace excellence and our vibrant ethos.",
      fullDescription:
      "Explore CHALE CHALO, a guiding principle at LUMIQ that embodies the values of passion, unity, and excellence. This ethos lies at the core of our vibrant workplace culture, where collaboration is encouraged, and diverse perspectives are valued. By fostering a sense of belonging and camaraderie, LUMIQers are empowered to work together towards common goals, creating an environment where everyone feels motivated to excel.",
       slug:"life-at-lumiq-2",
       tags:"LUMIQ's Culture Code"
    },
    {
      src:
        "https://www.youtube.com/embed/4JrilMiCW5Y?si=2HU9-9m2h6Uyz-q7?controls=0&showinfo=0&modestbranding=1",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: "allowfullscreen",
      category: "life-at-lumiq",
      heading:"Where Work Feels Wow",
      description:"A vibrant community of LUMIQers where innovation thrives, collaboration soars, and every day is a 'Wow' moment.",
      fullDescription:"At LUMIQ, employees thrive in an innovative and collaborative atmosphere where each day presents opportunities for 'Wow' moments. These moments arise from the synergy of teamwork, creativity, and a shared commitment to excellence, ensuring that every contribution is recognized and celebrated. LUMIQers are inspired to push boundaries, embrace challenges, and celebrate achievements, making it a truly fulfilling place to work.",
      slug:"life-at-lumiq-3",
      tags:'Life at LUMIQ'
    },
    {
      src:
        "https://www.youtube.com/embed/yv1bnFYWQag?si=u1KA-QjYNVVhI-_U?controls=0&showinfo=0&modestbranding=1",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: "allowfullscreen",
      category: "life-at-lumiq",
      heading:"A Seed Of Hope: LUMIQ's CSR Impact Through Computer Literacy",
      description:"An effort to empower kids at a local school with computer literacy, spreading knowledge, and shaping a brighter future.",
      fullDescription:"LUMIQ is dedicated to empowering children through computer literacy programs, recognizing that digital skills are essential for success in today’s technology-driven world. By providing access to technology and hands-on training, we aim to equip young minds with the tools they need to thrive in the future. Our impactful Corporate Social Responsibility (CSR) initiatives focus on fostering a love for learning and encouraging creativity among children from underserved communities.",
      slug:"life-at-lumiq-4",
      tags:"CSR I"
    },
    {
      src:
        "https://www.youtube.com/embed/WrWHgUoUSM8?si=-hMtGC_zjEZ8XZHq?controls=0&showinfo=0&modestbranding=1",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: "allowfullscreen",
      category: "life-at-lumiq",
      heading:"Social Impact - A Collective Responsibility",
      description:"Discover CSR 2's impact on sustainability and social responsibility initiatives in this insightful video.",
      fullDescription:"Discover how our Corporate Social Responsibility (CSR) initiatives are making a significant impact on communities and organizations. By engaging in sustainable practices and promoting social responsibility, we strive to create a positive change that resonates beyond our business. Watch the video to learn more about CSR 2, which highlights our commitment to sustainability and the various programs we have implemented to uplift and empower those around us. Through these initiatives, we aim to foster a culture of giving back and making a lasting difference.",
      slug:"life-at-lumiq-5",
      tags:"CSR II"
    },
    {
      src:
        "https://www.youtube.com/embed/A_ozwfZ5FQo?si=0uXUVv_I2ORROuOH?controls=0&showinfo=0&modestbranding=1",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: "allowfullscreen",
      category: "life-at-lumiq",
      heading:"Go Beyond - Teaser",
      description:"Teaser of the Go Beyond campaign, highlighting innovation and excellence over 11 remarkable years.",
      fullDescription:"Get a sneak peek into our Go Beyond campaign, which celebrates 11 years of innovation and excellence at LUMIQ. This campaign not only honors our achievements but also inspires our team and stakeholders to push beyond their limits in terms of performance and success. Watch the teaser that encapsulates the spirit of this celebration, motivating everyone to embrace challenges and strive for new heights. Together, we are committed to exceeding expectations and driving continuous improvement in all our endeavors.",
      slug:"life-at-lumiq-6",
      tags:"Theme Teaser"
    },
    {
      src:
        "https://www.youtube.com/embed/ttZuBt_2Vk0?si=XjaCyEr3CAMZZtIP?controls=0&showinfo=0&modestbranding=1",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: "allowfullscreen",
      category: "life-at-lumiq",
      heading:"Go Beyond Theme - Excellence",
      description:"Go Beyond theme video celebrating 11 years of growth and excellence, setting new standards in performance.",
      fullDescription:"Experience the journey of growth and success with the Go Beyond theme video. This inspiring story celebrates 11 years of delivering excellence and setting new standards in performance.",
      slug:"life-at-lumiq-7",
      tags:"Theme Video"
    },

    ///product
    {
      src:
        "https://www.youtube.com/embed/f5EEFk6Znw4?si=r-HTIrbYT2ig7C81?controls=0&showinfo=0&modestbranding=1",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: "allowfullscreen",
      category: "product",
      heading:"Redefining Possibilities With GenAI",
      description:"LUMIQ's GenAI: Transforming ideas into reality with tech.",
      slug:"product-1",
      fullDescription:"At LUMIQ, the fusion of imagination and technology takes center stage. Our GenAI solutions bridge the gap between conceptual thinking and practical implementation, allowing businesses to breathe life into their most ambitious ideas. From natural language processing to computer vision and beyond, LUMIQ's suite of GenAI tools provides a robust framework for innovation.",
      tags:"GenAI Solution",
    },
    {
      src:"https://www.youtube.com/embed/z3bcrQzqSEM?si=ex3IFcurh1efZEQE",
      title:"YouTube video player",
      frameborder:"0",
      allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", 
      allowfullscreen: "allowfullscreen",
      category: "product",
      heading:"Unlocking Data Potential with PRYZM: Bridging the Data Maturity Gap at AWS Data Day",
      description:"Discover PRYZM’s key features and benefits for data maturity.",
      slug:"product-2",
      tags:""
    },
    {
      src:"https://www.youtube.com/embed/H3287R7xmBU?si=g_Us6hYszkGqavs_",
      title:"YouTube video player",
      frameborder:"0",
      allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", 
      allowfullscreen: "allowfullscreen",
      category: "product",
      heading:"Game Changer Summit - Data Innovation",
      description:"Highlights of the 5th Elets Summit showcasing the future of business through data innovation.",
      fullDescription:"Watch the highlights from the 5th Elets Game Changer Summit, focusing on data innovation and digital transformation. Learn how data is driving the future of business, with themes aligned with AWS Data Day.",
      slug:"product-3",
      tags:" Summit Highlights"
    },


    ////podcast
    {
      src: "https://www.youtube.com/embed/ZjP3Efuvzi8?si=zR80Qb5SJrNkM20u",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: "allowfullscreen",
      category: "podcast",
      heading:"Beyond The Business | In Conversation with Dobi, Co-founder & CPO",
      description:"EP01- Beyond The Business | Dobi's journey, insights, and industry experience.",
      slug: "podcast-1",
      fullDescription:"In this exclusive interview, Dobi shares insights into the philosophy driving LUMIQ's innovation, the challenges of bringing GenAI to the mainstream, and his personal journey in the world of artificial intelligence. Gain a rare glimpse into the future of AI as envisioned by one of the industry's leading figures, and discover how LUMIQ is working to create technology that not only serves businesses but also contributes to the greater good of society.",
      tags:"PRYZM Overview"
    },
    {
      src: "https://www.youtube.com/embed/3ujWZ4pgOO8?si=ozEumj2TkZnDn0S2",
      title: "YouTube video player",
      frameborder: "0",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: "allowfullscreen",
      category: "podcast",
      heading:"Business Insights Ep 1 Part 2",
      description:"Part 2 of Beyond The Business, featuring in-depth business strategies and leadership growth stories.",
      slug: "podcast-2",
      fullDescription:
      "Dive deeper into business strategies, leadership insights, and growth stories in Part 2 of Beyond The Business. Join the conversation as we explore the dynamics of successful enterprises.",
      tags:"Beyond The Business "
    },
    {
      src:"https://www.youtube.com/embed/vQv3ZNlwIR0?si=Nh3aC_wufZrOipwi",
      title:"YouTube video player",
      frameborder:"0",
      allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy:"strict-origin-when-cross-origin",
      allowfullscreen:"allowfullscreen",
      category: "podcast",
      heading:"What is Data Observability? | Data Dialogues",
      description:"Explore Data Observability and its impact on enterprises",
      slug: "podcast-3",
      fullDescription:"Explore how Data Observability empowers enterprises to gain real-time insights into data pipelines, ensure data reliability, and proactively address issues. Discover its role in improving operational efficiency and informed decision-making.",
      tags:"Data Dialogues 1"
    },
    {
      src:"https://www.youtube.com/embed/fD-VTsSGpbU?si=DStFr3EtIGhMFysX",
      title:"YouTube video player",
      frameborder:"0",
      allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy:"strict-origin-when-cross-origin",
      allowfullscreen:"allowfullscreen",
      category: "podcast",
      heading:"Data Dialogue Ep 2 - Innovation",
      description:"Explore data-driven innovation in Data Dialogue Ep 2, uncovering insights that drive business results.",
      slug: "podcast-4",
      fullDescription:"Explore the power of data in Episode 2 of Data Dialogue. Learn how businesses harness the potential of data analytics to drive innovation and achieve results beyond expectations.",
      tags:"Data Dialogues 2"
    },
  ]
  return {video};
}

export const SheetsData=()=>{
  var sheets=[
    {
      imageUrl:"empFoundationImg",
      title:"emPower Foundation Data Sheet",
      pdf:"emPOWER_DataSheet.pdf"
    },
    {
      imageUrl:"pryzmImg",
      title:"Pryzm Data Sheet",
      pdf:"PRYZM_Datasheet.pdf"
    }
  ]
  return {sheets}
};

export const destructureData=(data)=> {
  let objResult={};

  // Extract the journey array
  const journeyArray = data?.allAwsFoundation?.nodes[0]?.journey || [];

  journeyArray.forEach((item,index) => {
    const { attributes } = item;

    if (attributes) {
      const cmpName = attributes?.cmpName;
      const header = attributes?.Header;
      const paragraph = attributes?.paragraph;
      const imageUrl = attributes?.imageUrl;
      
      // Extract dynamic components if available
      const dynamicComponents = attributes?.dynamicCmp?.map((dynamicItem) => ({
        cardHeading: dynamicItem?.cardHeading,
        content: dynamicItem?.content,
        iconUrl: dynamicItem?.iconUrl,
        id: dynamicItem?.id,
        imageUrl:dynamicItem?.imageUrl
      })) || [];

      if(index===0){
        objResult["banner"]={
          cmpName,
          header,
          paragraph,
          imageUrl,
          dynamicComponents,
        }
      }else{
        objResult[`cmp${index}`]={
          cmpName,
          header,
          paragraph,
          imageUrl,
          dynamicComponents,
        }
      }
    }
  });

  return objResult;
}