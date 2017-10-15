module.exports = {
    transactions: {
        minimumEntry: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresden.M.W.607.200.Brown.Arson.05022016......'
            }
        },
        olnOnly: {
            //the 'key' for the fields should match the key of the selectors in css_selectors
            fields: {
                hdr: '123456789',
                mke: 'MKE',
                oai: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '12345',
                ols: '',
                oly: '',
                lic: '',
                lis: '',
                liy: ''
            },
            results: {
                header: 'Errors Received:',
                errorList: {
                    oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
                },
                queryTitle: 'No results generated due to error.',
                assembledQuery: ''
            }
        },
          
        fullEntry: {
                //the 'key' for the fields should match the key of the selectors in css_selectors
                fields: {
                    hdr: '123456789',
                    mke: 'MKE',
                    oai: 'CHI1234SI',
                    nam: 'Harry Dresden',
                    sex: 'M',
                    rac: 'W',
                    hgt: '607',
                    wgt: '200',
                    hai: 'Brown',
                    off: 'Arson',
                    dow: '05022016',
                    oln: '',
                    ols: '',
                    oly: '',
                    lic: 'W493GK',
                    lis: 'UT',
                    liy: '2016'
                },
                results: {
                    header: 'Valid',
                    errorList: {},
                    queryTitle: 'Assembled Query:',
                    assembledQuery: '123456789.MKE.CHI1234SI.Harry Dresden.M.W.607.200.Brown.Arson.05022016....W493GK.UT.2016'
                }
            },
   
            maximumCharacterEntry: {
                //the 'key' for the fields should match the key of the selectors in css_selectors
                fields: {
                    hdr: '1234567891234567891',
                    mke: 'MKES',
                    oai: 'CHI1234SI',
                    nam: 'Harry ABCDEFGHIJKLMNOP Dresden',
                    sex: 'M',
                    rac: 'W',
                    hgt: '607',
                    wgt: '200',
                    hai: 'Brownbrown',
                    off: 'Serial arsonist',
                    dow: '05022016',
                    oln: '',
                    ols: '',
                    oly: '',
                    lic: 'W493GKSS',
                    lis: 'UT',
                    liy: '2016'
                },
                results: {
                    header: 'Valid',
                    errorList: {},
                    queryTitle: 'Assembled Query:',
                    assembledQuery: '1234567891234567891.MKES.CHI1234SI.Harry ABCDEFGHIJKLMNOP Dresden.M.W.607.200.Brownbrown.Serial arsonist.05022016....W493GKSS.UT.2016'
                }
            },

            minimumCharacterEntry: {
                //the 'key' for the fields should match the key of the selectors in css_selectors
                fields: {
                    hdr: '123456789',
                    mke: 'MK',
                    oai: 'CHI1234SI',
                    nam: 'Ron',
                    sex: 'M',
                    rac: 'W',
                    hgt: '607',
                    wgt: '200',
                    hai: 'Red',
                    off: 'Arson',
                    dow: '05022016',
                    oln: '',
                    ols: '',
                    oly: '',
                    lic: 'W493G',
                    lis: 'UT',
                    liy: '2016'
                },
                results: {
                    header: 'Valid',
                    errorList: {},
                    queryTitle: 'Assembled Query:',
                    assembledQuery: '123456789.MK.CHI1234SI.Ron.M.W.607.200.Red.Arson.05022016....W493G.UT.2016'
                }
            },

            dateBefore1900: {
                //the 'key' for the fields should match the key of the selectors in css_selectors
                fields: {
                    hdr: '123456789',
                    mke: 'MKE',
                    oai: 'CHI1234SI',
                    nam: 'Harry Dresden',
                    sex: 'M',
                    rac: 'W',
                    hgt: '607',
                    wgt: '200',
                    hai: 'Brown',
                    off: 'Arson',
                    dow: '05021899',
                    oln: '',
                    ols: '',
                    oly: '',
                    lic: '',
                    lis: '',
                    liy: ''
                },
                results: {
                    header: 'Errors Received:',
                    errorList: {
                        dow: `The "Date of Warrant/Violation" field must be entered as a date, MMDDYYYY, no earlier than 01011900 and no later than today's date.`
                    },
                    queryTitle: 'No results generated due to error.',
                    assembledQuery: ''
                }
            },

            dateInFuture: {
                //the 'key' for the fields should match the key of the selectors in css_selectors
                fields: {
                    hdr: '123456789',
                    mke: 'MKE',
                    oai: 'CHI1234SI',
                    nam: 'Harry Dresden',
                    sex: 'M',
                    rac: 'W',
                    hgt: '607',
                    wgt: '200',
                    hai: 'Brown',
                    off: 'Arson',
                    dow: '05022020',
                    oln: '',
                    ols: '',
                    oly: '',
                    lic: '',
                    lis: '',
                    liy: ''
                },
                results: {
                    header: 'Errors Received:',
                    errorList: {
                        dow: `The "Date of Warrant/Violation" field must be entered as a date, MMDDYYYY, no earlier than 01011900 and no later than today's date.`
                    },
                    queryTitle: 'No results generated due to error.',
                    assembledQuery: ''
                }
            },

            sexCharacterError: {
                //the 'key' for the fields should match the key of the selectors in css_selectors
                fields: {
                    hdr: '123456789',
                    mke: 'MKE',
                    oai: 'CHI1234SI',
                    nam: 'Harry Dresden',
                    sex: 'x',
                    rac: 'W',
                    hgt: '607',
                    wgt: '200',
                    hai: 'Brown',
                    off: 'Arson',
                    dow: '05022016',
                    oln: '',
                    ols: '',
                    oly: '',
                    lic: '',
                    lis: '',
                    liy: ''
                },
                results: {
                    header: 'Errors Received:',
                    errorList: {
                        sex: `The "Sex" field must be entered in as a single character, M for male, F for female, U for unknown.`
                    },
                    queryTitle: 'No results generated due to error.',
                    assembledQuery: ''
                }
            },

            missingRequiredField: {
                //the 'key' for the fields should match the key of the selectors in css_selectors
                fields: {
                    hdr: '123456789',
                    mke: 'MKE',
                    oai: 'CHI1234SI',
                    nam: 'Harry Dresden',
                    sex: 'M',
                    rac: 'W',
                    hgt: '607',
                    wgt: '',
                    hai: 'Brown',
                    off: 'Arson',
                    dow: '05022016',
                    oln: '12345',
                    ols: '',
                    oly: '',
                    lic: '',
                    lis: '',
                    liy: ''
                },
                results: {
                    header: 'Errors Received:',
                    errorList: {
                        wgt: `The field named "Weight" must be included.`
                    },
                    queryTitle: 'No results generated due to error.',
                    assembledQuery: ''
                }
            },
            
    }
}