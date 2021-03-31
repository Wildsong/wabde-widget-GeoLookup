define({
  root: ({
    _widgetLabel : "Geo Lookup",
    description : "Browse to or Drag a <a href='./widgets/GeoLookup/data/sample.csv' tooltip='Download an example sheet' target='_blank'> spreadsheet </a> here to visualize, and append map data to it.",
    selectCSV : "Select a CSV",
    loadingCSV : "Loading CSV",
    savingCSV: "CSVExport",
    clearResults : "Clear",
    downloadResults : "Download",
    plotOnly : "Only Plot Points",
    plottingRows : "Ploting rows",
    projectionChoice: "CSV in",
    projectionLat: "Lat/Lon",
    projectionMap: "Map Projection",
    messages : "Messages",
    error : {
      fetchingCSV : 'Error fetching items from CSV store: ${0}',
      fileIssue : 'File could not be processed.',
      notCSVFile : 'Only comma delimited files (.csv) are supported at this time.',
      invalidCoord : 'Location fields are invalid. Please check the CSV file.',
      tooManyRecords : 'Sorry, no more than ${0} records at this time.',
      CSVNoRecords : 'The file does not contain any records.',
      CSVEmptyFile : 'No content in the file.'
    },
    results : {
      csvLoaded : "${0} records from the CSV file have been loaded",
      recordsPlotted : "${0}/${1} records have been located on the map",
      recordsEnriched : "${0}/${1} processed, ${2} enriched against ${3}",
      recordsError : "${0} records had errors",
      recordsErrorList : "Row ${0} has an issue",
      label: "CSV Results"
    }
  }),
  "ar": 1,
  "bs": 1,
  "ca": 1,
  "cs": 1,
  "da": 1,
  "de": 1,
  "el": 1,
  "es": 1,
  "et": 1,
  "fi": 1,
  "fr": 1,
  "he": 1,
  "hr": 1,
  "hu": 1,
  "it": 1,
  "id": 1,
  "ja": 1,
  "ko": 1,
  "lt": 1,
  "lv": 1,
  "nb": 1,
  "nl": 1,
  "pl": 1,
  "pt-br": 1,
  "pt-pt": 1,
  "ro": 1,
  "ru": 1,
  "sk": 1,
  "sl": 1,
  "sr": 1,
  "sv": 1,
  "th": 1,
  "tr": 1,
  "uk": 1,
  "vi": 1,
  "zh-cn": 1,
  "zh-hk": 1,
  "zh-tw": 1
});
