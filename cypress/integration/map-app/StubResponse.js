const StubResponses = {
  noResponse: {"numberOfHits": 0, "results": [] },
  speciesResponse: [{"doc_count":19,"key":"rattus norvegicus"},{"doc_count":9,"key":"sus scrofa domesticus"},
    {"doc_count":7,"key":"mus musculus"},{"doc_count":6,"ke y":"homo sapiens"},{"doc_count":2,"key":"sus scrofa"},
    {"doc_count":1,"key":"canis familiaris"},{"doc_count":1,"key":"felis catus"},{"doc_count":1,"key":"mustela putorius furo"},
    {"doc_count":9,"key":"rattus norvegicus"},{"doc_count":6,"key":"mus musculus"},{"doc_count":5,"key":"homo sapiens"},
    {"doc_count":5,"key":"sus scrofa domesticus"},{"doc_count":1,"key":"sus scrofa"}],
  genderResponse: [{"doc_count":44,"key":"male"},{"doc_count":25,"key":"female"}],
  organResponse: [{"doc_count":13,"key":"heart"},{"doc_count":12,"key":"vagus nerve"},{"doc_count":10,"key":"stomach"},
    {"doc_count":7,"key":"colon"},{"doc_count":3,"key":"brown adipose tissue"},{"doc_count":2,"key":"pancreas"},
    {"doc_count":2,"key":"peripheral nervous system"},{"doc_count":1,"key":"autonomic nervous system"},
    {"doc_count":1,"key":"brainstem"},{"doc_count":1,"key":"spinal cord"}],
  resultResponse: {"numberOfHits": 1, "results": [{"scaffolds": [{"anatomy": {"curie": "UBERON:0000948"}, 
    "file": {"name": "scaffold"}, "dataset": {"id": "dataset:111111111", "path": "derivative/H-4/scaffold/metadata.json"}, 
    "description": "Test dataset", "organism": {"species": {"curie": "NCBITaxon:10090"}}, "remote": {"id": "collection:111111"},
    "distributions": {"api": [{"uri": "https://api.blackfynn.io/collections/N:collection:111111"}],
    "current": [{"uri": "https://app.blackfynn.io/N:organization:111111/datasets/N:dataset:1111111111/files/N:collection:111111111"}]},
    "mimetype": "inode/vnd.abi.scaffold+file"}], "samples": [{"sex": {"value": "male"}, "ageCategory": {"value": "prime adult stage"}}],
    "name": "Test this", 
    "identifier": "N:dataset:1111111", "uri": [{"uri": "https://app.blackfynn.io/N:organization:11111/datasets/N:dataset:1111111111"}],
    "updated": [{"timestamp": "2021-06-02"}], "organs": [{"name": "heart", "matchingStatus": "approved", "curie": "ilx:0732254", 
    "parents": [{"term1_ilx": "ilx:0777104", "term1_label": "crux cordis", "curie": "ilx:0732254", "name": "heart"}]}], 
    "contributors": [{"name": "Tester, Iam", "curie": "ORCID:0000-1234-5678-9012", "uri": "https://orcid.org/0000-1234-5678-9012"}],
    "doi": "https://doi.org/1111/11111", "csvFiles": [],
    "abi-scaffold-metadata-file": [
        {
          "name": "ratHeart_metadata.json",
          "description": "3d scaffolds metadata file",
          "distributions": {
            "api": [
              {
                "uri": "https://api.pennsieve.io/packages/N:package:719c952e-85a5-4eda-9afe-53bd018b13ff/files/1231759"
              }
            ],
            "current": [
              {
                "uri": "https://app.pennsieve.io/N:organization:618e8dd9-f8d2-4dc4-9abb-c6aaab2e78a0/datasets/N:dataset:47225c7d-8fb9-4e32-b46a-152d06069bf4/files/v/N:package:719c952e-85a5-4eda-9afe-53bd018b13ff"
              }
            ]
          },
          "mimetype": {
            "name": "application/json"
          },
          "checksums": [
            {
              "hex": "71471eccc7b6f85f25fc77918305dbf2063d400e32d4e47be5e646787ac6a649",
              "cypher": "sha256"
            }
          ],
          "dataset": {
            "path": "derivative/H-4/scaffold/metadata.json",
            "identifier": "dataset:47225c7d-8fb9-4e32-b46a-152d06069bf4"
          },
          "additional_mimetype": {
            "name": "inode/vnd.abi.scaffold+file"
          },
          "file_type": {
            "name": "json"
          },
          "identifier": "package:719c952e-85a5-4eda-9afe-53bd018b13ff",
          "updated": {
            "timestamp": "2021-05-26T05:30:35,714317Z"
          },
          "bytes": {
            "count": "2630"
          }
        }
      ],}]}
    ,
  datasetResult: {"id":32,"sourceDatasetId":98,
    "name":"Test dataset",
    "description":"Test description",
    "ownerId":1111111,"ownerFirstName":"Iam","ownerLastName":"Tester","ownerOrcid":"0000-0001-1213-1111",
    "organizationName":"SPARC Consortium","organizationId":367,"license":"Creative Commons Attribution",
    "tags":["noradrenergic","mus musculus","cardiac autonomic nervous system","cholinergic","peripheral nervous system"],
    "version":3,"revision":null,"size":14270138557,"modelCount":[{"modelName":"researcher","count":16},{"modelName":"term","count":4},
    {"modelName":"award","count":1},{"modelName":"animal_subject","count":1},{"modelName":"sample","count":0},{"modelName":"protocol","count":2},
    {"modelName":"summary","count":1}],"fileCount":57,"recordCount":25, "status":"PUBLISH_SUCCEEDED","doi":"1111/11111",
    "banner":"https://assets.discover.pennsieve.io/dataset-assets/32/3/banner.jpg",
    "contributors":[{"firstName":"Iam","middleInitial":null,"lastName":"Tester",
    "degree":null,"orcid":"0000-0001-1213-1111"}],
    "collections":[{"id":5,"name":"Test this"}],
    "externalPublications":[],"sponsorship":{"title":"NIH SPARC Program",
    "markup":"This is a test"},
    "pennsieveSchemaVersion":"4.0","createdAt":"2021-06-02",
    "updatedAt":"2021-06-02","firstPublishedAt":"2021-06-02",
    "versionPublishedAt":"2021-06-02","revisedAt":null,"embargo":false,"embargoReleaseDate":null,"embargoAccess":null},
  curiesResponse: {
    "uberon": {
      "array": [
        {
          "id":"UBERON:0000948",
          "name":"heart"
        },
        {
          "id": "UBERON:0001155",
          "name": "colon"
        }
      ]
    }
  } 
};

exports.StubResponses = StubResponses;