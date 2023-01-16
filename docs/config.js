var respecConfig = {
  // this template doesn't use all possible config parameters
  // see https://github.com/stichting-crow/respec/wiki for all options
  specStatus: "DRAFT",
  postProcess: [], //-- Deze roept de postprocessor aan


  specType: "handreiking",
  imprint: "bimloket",

  // subtitle will be shown below title, can be omitted
  // subtitle: "Hier komt een subtitle",

  // specify format: "markdown" when multiple markdown files are included
  // format: "markdown",

  // The specification's "short name", which is the name used in NL_Respec URLs
  shortName: "bimloket/areaalgegevens-uitwisselen",

  // license can be one of the following: cc0, cc-by or cc-by-nd((default)) (see https://github.com/Geonovum/respec/wiki/license )
  license: "cc0",

  // An array of person objects describing the editors of the document
  // this can be simple or more elaborated
  editors: [
    {
      name: "Elisabeth Klören",
      company: "BIM loket",
      companyURL: "https://www.bimloket.nl",
    },
  ],
  // An array of person objects describing the authors of the document
  // this can be simple or more elaborated
  authors: [
    {
      name: "Lucas Verhelst",
      company: "BIM-Connected",
      companyURL: "https://www.bim-connected.com/",
    },
    {
      name: "Rakesh Kalpoe",
      company: "Arcadis",
      companyURL: "https://www.arcadis.com/",
    },
  ],
  // The github option allows you associate your specification with a repository on GitHub.
  github: "https://github.com/bimloket/areaalgegevens-uitwisselen",

  // If you need to include a one-off reference that isn't in the SpecRef database or
  // if you need to override an existing reference with specific content, then you can use this configuration option.
  localBiblio: {
  ISO19650_2: {
    title: "ISO 19650-2:2018 Organization and digitization of information about buildings and civil engineering works, including building information modelling (BIM) — Information management using building information modelling — Part 2: Delivery phase of the assets",
    href: "https://www.iso.org/standard/68080.html",
    status: "Actueel",
    publisher: "ISO",
  },
  RACI: {
    title: "ISO RACI-model",
    href: "https://nl.wikipedia.org/wiki/RACI-model",
    status: "Actueel",
    publisher: "Wikipedia",
  },
  },
};
