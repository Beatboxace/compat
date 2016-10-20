const envs = {
  'Traceur': {
    'tr': {
      'full': 'Traceur',
      'short': 'Traceur',
      'obsolete': false,
      'platformtype': 'compiler'
    }
  },
  'Babel 6.5 + core-js 2.2': {
    'babel': {
      'full': 'Babel 6.5 + core-js 2.2',
      'short': 'Babel +<br><nobr>core-js</nobr>',
      'obsolete': false,
      'platformtype': 'compiler',
      'note_id': 'babel-optional',
      'note_html': 'Flagged features require an optional transformer setting.'
    }
  },
  'ES6 Transpiler': {
    'es6tr': {
      'full': 'ES6 Transpiler',
      'short': 'ES6<br>Trans-<br>piler',
      'obsolete': true,
      'platformtype': 'compiler'
    }
  },
  'Closure Compiler v20160822': {
    'closure': {
      'full': 'Closure Compiler v20160822',
      'short': 'Closure',
      'obsolete': false,
      'platformtype': 'compiler'
    }
  },
  'JSX': {
    'jsx': {
      'full': 'JSX',
      'short': 'JSX',
      'obsolete': true,
      'platformtype': 'compiler',
      'note_id': 'jsx-flag',
      'note_html': 'Have to be enabled via <code>harmony</code> option'
    }
  },
  'TypeScript 1.8 + core-js 2.2': {
    'typescript': {
      'full': 'TypeScript 1.8 + core-js 2.2',
      'short': 'Type-<br />Script +<br /><nobr>core-js</nobr>',
      'obsolete': false,
      'platformtype': 'compiler'
    }
  },
  'es6-shim': {
    'es6shim': {
      'full': 'es6-shim',
      'short': 'es6-<br>shim',
      'obsolete': false,
      'platformtype': 'compiler'
    }
  },
  'Internet Explorer': {
    'ie10': {
      'full': 'Internet Explorer',
      'family': 'Chakra',
      'short': 'IE 10',
      'obsolete': true
    },
    'ie11': {
      'full': 'Internet Explorer',
      'family': 'Chakra',
      'short': 'IE 11',
      'obsolete': false
    }
  },
  'Microsoft Edge': {
    'edge12': {
      'full': 'Microsoft Edge',
      'family': 'Chakra',
      'short': 'Edge 12',
      'note_id': 'edge-experimental-flag',
      'note_html': 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags',
      'obsolete': true
    },
    'edge13': {
      'full': 'Microsoft Edge',
      'family': 'Chakra',
      'short': 'Edge 13',
      'note_id': 'edge-experimental-flag',
      'note_html': 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags'
    },
    'edge14': {
      'full': 'Microsoft Edge',
      'family': 'Chakra',
      'short': 'Edge 14',
      'note_id': 'edge-experimental-flag',
      'note_html': 'Flagged features have to be enabled via "Enable experimental Javascript features" setting under about:flags'
    }
  },
  'Firefox': {
    'firefox2': {
      'full': 'Firefox',
      'short': 'FF 2',
      'obsolete': 'very'
    },
    'firefox3': {
      'full': 'Firefox',
      'short': 'FF 3',
      'obsolete': 'very'
    },
    'firefox3_5': {
      'full': 'Firefox',
      'short': 'FF 3.5',
      'obsolete': 'very'
    },
    'firefox3_6': {
      'full': 'Firefox',
      'short': 'FF 3.6',
      'obsolete': 'very'
    },
    'firefox4': {
      'full': 'Firefox',
      'short': 'FF 4',
      'obsolete': 'very'
    },
    'firefox6': {
      'full': 'Firefox',
      'short': 'FF 6',
      'obsolete': 'very'
    },
    'firefox7': {
      'full': 'Firefox',
      'short': 'FF 7',
      'obsolete': 'very'
    },
    'firefox10': {
      'full': 'Firefox',
      'short': 'FF 10<br> ESR',
      'obsolete': 'very'
    },
    'firefox13': {
      'full': 'Firefox',
      'short': 'FF 13',
      'obsolete': 'very'
    },
    'firefox15': {
      'full': 'Firefox',
      'short': 'FF 15',
      'obsolete': 'very'
    },
    'firefox16': {
      'full': 'Firefox',
      'short': 'FF 16',
      'obsolete': 'very'
    },
    'firefox17': {
      'full': 'Firefox',
      'short': 'FF 17<br> ESR',
      'obsolete': 'very'
    },
    'firefox18': {
      'full': 'Firefox',
      'short': 'FF 18',
      'obsolete': 'very'
    },
    'firefox19': {
      'full': 'Firefox',
      'short': 'FF 19',
      'obsolete': 'very'
    },
    'firefox20': {
      'full': 'Firefox',
      'short': 'FF 20',
      'obsolete': 'very'
    },
    'firefox21': {
      'full': 'Firefox',
      'short': 'FF 21',
      'obsolete': 'very'
    },
    'firefox22': {
      'full': 'Firefox',
      'short': 'FF 22',
      'obsolete': 'very'
    },
    'firefox23': {
      'full': 'Firefox',
      'short': 'FF 23',
      'obsolete': 'very'
    },
    'firefox24': {
      'full': 'Firefox',
      'short': 'FF 24<br> ESR',
      'obsolete': 'very'
    },
    'firefox25': {
      'full': 'Firefox',
      'short': 'FF 25',
      'obsolete': 'very'
    },
    'firefox26': {
      'full': 'Firefox',
      'short': 'FF 26',
      'obsolete': 'very'
    },
    'firefox27': {
      'full': 'Firefox',
      'short': 'FF 27',
      'obsolete': 'very'
    },
    'firefox28': {
      'full': 'Firefox',
      'short': 'FF 28',
      'obsolete': 'very'
    },
    'firefox29': {
      'full': 'Firefox',
      'short': 'FF 29',
      'obsolete': 'very'
    },
    'firefox30': {
      'full': 'Firefox',
      'short': 'FF 30',
      'obsolete': 'very'
    },
    'firefox31': {
      'full': 'Firefox',
      'short': 'FF 31<br> ESR',
      'obsolete': true
    },
    'firefox32': {
      'full': 'Firefox',
      'short': 'FF 32',
      'obsolete': 'very'
    },
    'firefox33': {
      'full': 'Firefox',
      'short': 'FF 33',
      'obsolete': 'very'
    },
    'firefox34': {
      'full': 'Firefox',
      'short': 'FF 34',
      'obsolete': 'very'
    },
    'firefox35': {
      'full': 'Firefox',
      'short': 'FF 35',
      'obsolete': 'very'
    },
    'firefox36': {
      'full': 'Firefox',
      'short': 'FF 36',
      'obsolete': 'very'
    },
    'firefox37': {
      'full': 'Firefox',
      'short': 'FF 37',
      'obsolete': 'very'
    },
    'firefox38': {
      'full': 'Firefox',
      'short': 'FF 38<br> ESR',
      'obsolete': true
    },
    'firefox39': {
      'full': 'Firefox',
      'short': 'FF 39',
      'obsolete': 'very'
    },
    'firefox40': {
      'full': 'Firefox',
      'short': 'FF 40',
      'obsolete': true
    },
    'firefox41': {
      'full': 'Firefox',
      'short': 'FF 41',
      'obsolete': true
    },
    'firefox42': {
      'full': 'Firefox',
      'short': 'FF 42',
      'obsolete': true
    },
    'firefox43': {
      'full': 'Firefox',
      'short': 'FF 43',
      'obsolete': true
    },
    'firefox44': {
      'full': 'Firefox',
      'short': 'FF 44',
      'obsolete': true
    },
    'firefox45': {
      'full': 'Firefox',
      'short': 'FF 45 ESR',
      'obsolete': false
    },
    'firefox46': {
      'full': 'Firefox',
      'short': 'FF 46',
      'obsolete': true
    },
    'firefox47': {
      'full': 'Firefox',
      'short': 'FF 47',
      'obsolete': true
    },
    'firefox48': {
      'full': 'Firefox',
      'short': 'FF 48',
      'obsolete': true
    },
    'firefox49': {
      'full': 'Firefox',
      'short': 'FF 49'
    },
    'firefox50': {
      'full': 'Firefox',
      'short': 'FF 50 Beta',
      'unstable': true
    },
    'firefox51': {
      'full': 'Firefox',
      'short': 'FF 51 Aurora',
      'unstable': true
    },
    'firefox52': {
      'full': 'Firefox',
      'short': 'FF 52 Nightly',
      'unstable': true
    }
  },
  'Chrome': {
    'chrome': {
      'full': 'Chrome',
      'short': 'CH &lt;19',
      'obsolete': true
    },
    'chrome19dev': {
      'full': 'Chrome',
      'short': 'CH 19',
      'obsolete': 'very',
      'note_id': 'experimental-flag',
      'note_html': 'Flagged features have to be enabled via "Experimental Javascript features" flag'
    },
    'chrome21dev': {
      'full': 'Chrome',
      'short': 'CH 21-29',
      'obsolete': 'very',
      'note_id': 'experimental-flag'
    }
  },
  'Chrome, Opera': {
    'chrome30': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;30,<br>OP&nbsp;17',
      'obsolete': 'very',
      'note_id': 'experimental-flag'
    },
    'chrome31': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;31,<br>OP&nbsp;18',
      'obsolete': 'very',
      'note_id': 'experimental-flag'
    },
    'chrome33': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;32-33,<br>OP&nbsp;19-20',
      'obsolete': 'very',
      'note_id': 'experimental-flag'
    },
    'chrome34': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;34,<br>OP&nbsp;21',
      'obsolete': 'very',
      'note_id': 'experimental-flag'
    },
    'chrome35': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;35,<br>OP&nbsp;22',
      'obsolete': 'very',
      'note_id': 'experimental-flag'
    },
    'chrome36': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;36,<br>OP&nbsp;23',
      'obsolete': 'very',
      'note_id': 'experimental-flag'
    },
    'chrome37': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;37,<br>OP&nbsp;24',
      'obsolete': 'very',
      'note_id': 'experimental-flag'
    },
    'chrome38': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;38,<br>OP&nbsp;25',
      'obsolete': 'very',
      'note_id': 'experimental-flag'
    },
    'chrome39': {
      'full': 'Chrome, Opera',
      'short': 'CH 39,<br>OP&nbsp;26',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome40': {
      'full': 'Chrome, Opera',
      'short': 'CH 40,<br>OP&nbsp;27',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome41': {
      'full': 'Chrome, Opera',
      'short': 'CH 41,<br>OP&nbsp;28',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome42': {
      'full': 'Chrome, Opera',
      'short': 'CH 42,<br>OP&nbsp;29',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome43': {
      'full': 'Chrome, Opera',
      'short': 'CH 43,<br>OP&nbsp;30',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome44': {
      'full': 'Chrome, Opera',
      'short': 'CH 44,<br>OP&nbsp;31',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome45': {
      'full': 'Chrome, Opera',
      'short': 'CH 45,<br>OP&nbsp;32',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome46': {
      'full': 'Chrome, Opera',
      'short': 'CH 46,<br>OP&nbsp;33',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome47': {
      'full': 'Chrome, Opera',
      'short': 'CH 47,<br>OP&nbsp;34',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome48': {
      'full': 'Chrome, Opera',
      'short': 'CH 48,<br>OP&nbsp;35',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome49': {
      'full': 'Chrome, Opera',
      'short': 'CH 49,<br>OP&nbsp;36',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome50': {
      'full': 'Chrome, Opera',
      'short': 'CH 50,<br>OP&nbsp;37',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome51': {
      'full': 'Chrome, Opera',
      'short': 'CH 51,<br>OP&nbsp;38',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome52': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;52,<br>OP&nbsp;39',
      'obsolete': true,
      'note_id': 'experimental-flag'
    },
    'chrome53': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;53,<br>OP&nbsp;40',
      'note_id': 'experimental-flag',
      'obsolete': true
    },
    'chrome54': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;54,<br>OP&nbsp;41',
      'note_id': 'experimental-flag',
      'obsolete': false
    },
    'chrome55': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;55,<br>OP&nbsp;42',
      'note_id': 'experimental-flag',
      'unstable': true
    },
    'chrome56': {
      'full': 'Chrome, Opera',
      'short': 'CH&nbsp;56,<br>OP&nbsp;43',
      'note_id': 'experimental-flag',
      'unstable': true
    }
  },
  'Safari': {
    'safari51': {
      'full': 'Safari',
      'short': 'SF 5.1',
      'obsolete': true
    },
    'safari6': {
      'full': 'Safari',
      'short': 'SF 6',
      'obsolete': true
    },
    'safari7': {
      'full': 'Safari',
      'short': 'SF 6.1,<br>SF 7',
      'obsolete': true
    },
    'safari71_8': {
      'full': 'Safari',
      'short': 'SF 7.1,<br>SF 8',
      'obsolete': true
    },
    'safari9': {
      'full': 'Safari',
      'short': 'SF 9',
      'obsolete': false
    },
    'safari10': {
      'full': 'Safari',
      'short': 'SF 10',
      'obsolete': false
    }
  },
  'Safari Technology Preview Release 14': {
    'safaritp': {
      'full': 'Safari Technology Preview Release 14',
      'short': 'SF TP',
      'unstable': true
    }
  },
  'WebKit r204915 (August 24, 2016)': {
    'webkit': {
      'full': 'WebKit r204915 (August 24, 2016)',
      'short': 'WK',
      'unstable': true
    }
  },
  'Opera 12.16': {
    'opera': {
      'full': 'Opera 12.16',
      'short': 'OP 12',
      'obsolete': true
    }
  },
  'Konqueror 4.14': {
    'konq49': {
      'full': 'Konqueror 4.14',
      'short': 'KQ<br>4.14',
      'note_id': 'khtml',
      'note_html': 'Results are only applicable for the KHTML rendering engine.'
    }
  },
  'Rhino 1.7': {
    'rhino17': {
      'full': 'Rhino 1.7',
      'short': 'RH',
      'platformtype': 'engine',
      'obsolete': true
    }
  },
  'PhantomJS 2.0': {
    'phantom': {
      'full': 'PhantomJS 2.0',
      'short': 'PJS',
      'platformtype': 'engine',
      'equals': 'safari6',
      'needs_annex_b': true
    }
  },
  'Node.js': {
    'node012': {
      'full': 'Node.js',
      'family': 'Node.js',
      'short': 'Node<br>0.12',
      'platformtype': 'engine',
      'note_id': 'harmony-flag',
      'note_html': 'Flagged features have to be enabled via <code>--harmony</code> or <code>--es_staging</code> flag',
      'obsolete': false
    },
    'node4': {
      'full': 'Node.js',
      'family': 'Node.js',
      'short': 'Node<br>4',
      'platformtype': 'engine',
      'note_id': 'harmony-flag',
      'obsolete': false
    },
    'node5': {
      'full': 'Node.js',
      'family': 'Node.js',
      'short': 'Node<br>5',
      'platformtype': 'engine',
      'note_id': 'harmony-flag',
      'obsolete': true
    },
    'node64': {
      'full': 'Node.js',
      'family': 'Node.js',
      'short': 'Node<br>6.0-6.4',
      'platformtype': 'engine',
      'note_id': 'harmony-flag',
      'equals': 'chrome50',
      'obsolete': true
    },
    'node65': {
      'full': 'Node.js',
      'family': 'Node.js',
      'short': 'Node<br>6.5',
      'platformtype': 'engine',
      'note_id': 'harmony-flag',
      'equals': 'chrome51',
      'obsolete': false
    }
  },
  'io.js': {
    'iojs': {
      'full': 'io.js',
      'family': 'Node.js',
      'short': 'io.js<br>3.3',
      'platformtype': 'engine',
      'note_id': 'harmony-flag',
      'equals': 'chrome44',
      'obsolete': true
    }
  },
  'Echo JS': {
    'ejs': {
      'full': 'Echo JS',
      'short': 'Echo JS',
      'unstable': true,
      'platformtype': 'engine'
    }
  },
  'Kinoma XS6': {
    'xs6': {
      'full': 'Kinoma XS6',
      'short': 'XS6',
      'platformtype': 'engine'
    }
  },
  'JavaScript Automation for OS X': {
    'jxa': {
      'full': 'JavaScript Automation for OS X',
      'short': 'JXA',
      'platformtype': 'engine'
    }
  },
  'Android Browser': {
    'android40': {
      'full': 'Android Browser',
      'short': 'AN 4.0',
      'platformtype': 'mobile',
      'obsolete': true
    },
    'android41': {
      'full': 'Android Browser',
      'short': 'AN 4.1',
      'platformtype': 'mobile',
      'obsolete': true
    },
    'android42': {
      'full': 'Android Browser',
      'short': 'AN 4.2',
      'platformtype': 'mobile',
      'obsolete': true
    },
    'android43': {
      'full': 'Android Browser',
      'short': 'AN 4.3',
      'platformtype': 'mobile',
      'obsolete': true
    },
    'android44': {
      'full': 'Android Browser',
      'short': 'AN 4.4',
      'platformtype': 'mobile',
      'equals': 'chrome30',
      'ignore_flagged': true
    },
    'android50': {
      'full': 'Android Browser',
      'short': 'AN 5.0',
      'platformtype': 'mobile',
      'equals': 'chrome37',
      'ignore_flagged': true
    },
    'android51': {
      'full': 'Android Browser',
      'short': 'AN 5.1',
      'platformtype': 'mobile',
      'equals': 'chrome39',
      'ignore_flagged': true
    }
  },
  'iOS Safari': {
    'ios7': {
      'full': 'iOS Safari',
      'short': 'iOS 7',
      'platformtype': 'mobile',
      'equals': 'safari7',
      'obsolete': true
    },
    'ios8': {
      'full': 'iOS Safari',
      'short': 'iOS 8',
      'platformtype': 'mobile',
      'equals': 'safari71_8',
      'obsolete': true
    },
    'ios9': {
      'full': 'iOS Safari',
      'short': 'iOS 9',
      'platformtype': 'mobile',
      'equals': 'safari9'
    },
    'ios10': {
      'full': 'iOS Safari',
      'short': 'iOS 10',
      'platformtype': 'mobile',
      'equals': 'safari10'
    }
  }
}

module.exports.envs = envs

module.exports.isEnvDefined = (envId) => {
  return Object.keys(envs).some((envGroupId) => {
    return Object.keys(envs[envGroupId]).some((definedEnvId) => envId === definedEnvId)
  })
}
