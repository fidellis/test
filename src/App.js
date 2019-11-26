import React, { Component } from 'react';
import DataTable from './data-table/DataTable';
import { Button, DateInput, NumberInput, Radio, Select, SelectAsync, Switch, TextArea, TextInput } from 'form';
import Form from './form/Form';

const columns = {};
Array(10).fill().forEach((n, i) => {
  columns[i + 1] = {
    label: `Teste label teste label teste ${i + 1}`,
    search: i < 3,
    // align: i < 3 ? 'center' : 'right',
    type: i >= 3 ? 'NUMBER' : '',
    cellRenderer: ({ row, column }) => row[column.key],
    footer: ({ columnKey, rows }) => columnKey,
  };
});
// const rows = Array(10).fill().map((k, i) => {
//   const c = {};
//   Object.keys(columns).forEach((key) => {
//     const column = columns[key];
//     c[key] = `${key} - ${i + 1}`;
//   });
//   return c;
// });
const rows = [{"PRF_DRTA":9220,"NM_DRTA":"URV-NEG.PF,PJ E AGRO","PRF_SPCA":9942,"NM_SPCA":"SUPER PJ II","PRF_SPCA_RGNL":8771,"NM_SPCA_RGNL":"SUPER PJ C O II","PRF_AG":4042,"NM_AG":"EMPRESA MATO GROSSO","NR_SEQL_CTRA":5028,"SPCA_CSH":"9730","CD_CTRA_CSH":1001,"MTC_GCSH":"F0026518","NM_GCSH":"ABILENE DAS DORES DUARTE CARVALHO TREJAN","ID_CLI":"M514509953_4042","NM_CLI":"SERGIO LUIS CALMON MONTEIRO DA SILVA EIRELI","MCI":514509953,"FLAG":1,"CLSC":1,"RZSC":"SERGIO LUIS CALMON MONTEIRO DA SILVA EIRELI","NM_AREA_ECNC":"SERVICO","NM_STR_ECNC":"SERV DE ADM, LOC E ARREND DE BENS E SERV, LOTEA E INCORPOR DE BENS E IMÓVEIS","QT_VST_MCI":0,"DT_PRMA_VST_MCI":null,"DT_ULT_VST_MCI":null,"FATM":741450,"ANOMES_REF_FATM":201903,"MC_TOTAL":2878.93,"MC_CASH":213.87,"MC_CBR":19.43,"MC_DBT":0,"MC_GUIAS":0,"MC_PAG_FORNECEDOR":0,"MC_PAG_SALARIO":0,"MC_PAG_DIVERSOS":0,"TARF_TOTAL":1030.32,"TARF_CASH":229.5,"VL_SFN_BB":0,"VL_SFN_OTR_BCO":0,"VL_SFN_TTL":0,"IN_USO_CNL_GFN":0,"IN_USO_CNL_MOBILE":0,"IN_USO_BB_CODE":0,"TAGS":"  #EvasaoCBR      #TresDescontos  #VemPraFOPAGBB #VemProPAGBoleto","MATRICULA_GEREL":"F3869407","NOME_GEREL":"GUILHERME TIMM PEDROLLO","ENDERECO":"AV RUI BARBOSA - PRQ UNIVERSITARIO - 1044 SL 16 A","BAIRRO":"PRQ UNIVERSITARIO","CIDADE":"CUIABA","UF":"MT"},{"PRF_DRTA":9220,"NM_DRTA":"URV-NEG.PF,PJ E AGRO","PRF_SPCA":9942,"NM_SPCA":"SUPER PJ II","PRF_SPCA_RGNL":8771,"NM_SPCA_RGNL":"SUPER PJ C O II","PRF_AG":4042,"NM_AG":"EMPRESA MATO GROSSO","NR_SEQL_CTRA":5028,"SPCA_CSH":"9730","CD_CTRA_CSH":1001,"MTC_GCSH":"F0026518","NM_GCSH":"ABILENE DAS DORES DUARTE CARVALHO TREJAN","ID_CLI":"G000482093_4042","NM_CLI":"MDC SERVICOS NAUTICOS LTDA","MCI":913143106,"FLAG":0,"CLSC":2,"RZSC":"MORRO DO CHAPEU EMPREENDIMENTOS E PARTICIPACAO LTDA","NM_AREA_ECNC":"SERVICO","NM_STR_ECNC":"SERV DE ADM, LOC E ARREND DE BENS E SERV, LOTEA E INCORPOR DE BENS E IMÓVEIS","QT_VST_MCI":1,"DT_PRMA_VST_MCI":"2019-01-21T02:00:00.000Z","DT_ULT_VST_MCI":"2019-01-21T02:00:00.000Z","FATM":2800700,"ANOMES_REF_FATM":201611,"MC_TOTAL":156.71,"MC_CASH":150.44,"MC_CBR":0,"MC_DBT":0,"MC_GUIAS":0,"MC_PAG_FORNECEDOR":0,"MC_PAG_SALARIO":0,"MC_PAG_DIVERSOS":0,"TARF_TOTAL":171.5,"TARF_CASH":166.5,"VL_SFN_BB":0,"VL_SFN_OTR_BCO":0,"VL_SFN_TTL":0,"IN_USO_CNL_GFN":0,"IN_USO_CNL_MOBILE":0,"IN_USO_BB_CODE":0,"TAGS":"  #EvasaoCBR  #FlexTfaVencer    #TresDescontos   #VemProPAGBoleto","MATRICULA_GEREL":"F3869407","NOME_GEREL":"GUILHERME TIMM PEDROLLO","ENDERECO":"FAZ MORRO DO CHAPEU - ZONA RURAL - SN","BAIRRO":"ZONA RURAL","CIDADE":"CHAPADA DOS GUIMARAES","UF":"MT"},{"PRF_DRTA":9220,"NM_DRTA":"URV-NEG.PF,PJ E AGRO","PRF_SPCA":9942,"NM_SPCA":"SUPER PJ II","PRF_SPCA_RGNL":8771,"NM_SPCA_RGNL":"SUPER PJ C O II","PRF_AG":7139,"NM_AG":"EMPRESA VARZEA GRAND","NR_SEQL_CTRA":5029,"SPCA_CSH":"9730","CD_CTRA_CSH":1001,"MTC_GCSH":"F0026518","NM_GCSH":"ABILENE DAS DORES DUARTE CARVALHO TREJAN","ID_CLI":"G000490711_7139","NM_CLI":"RECIVAG PROCESSAMENTO DE INSUMOS LTDA","MCI":104539791,"FLAG":1,"CLSC":3,"RZSC":"INPLAST IND E COMERCIO DE EMBALAGENS PLASTICAS LTDA EPP","NM_AREA_ECNC":"INDUSTRIA","NM_STR_ECNC":"INDÚSTRIA DE PROD DE MATÉRIAS PLÁSTICAS","QT_VST_MCI":1,"DT_PRMA_VST_MCI":"2019-02-14T02:00:00.000Z","DT_ULT_VST_MCI":"2019-02-14T02:00:00.000Z","FATM":5438491.02,"ANOMES_REF_FATM":201906,"MC_TOTAL":3239.48,"MC_CASH":706.02,"MC_CBR":346.96,"MC_DBT":0,"MC_GUIAS":0,"MC_PAG_FORNECEDOR":0,"MC_PAG_SALARIO":53.76,"MC_PAG_DIVERSOS":0,"TARF_TOTAL":1810.54,"TARF_CASH":774.95,"VL_SFN_BB":0,"VL_SFN_OTR_BCO":0,"VL_SFN_TTL":0,"IN_USO_CNL_GFN":0,"IN_USO_CNL_MOBILE":0,"IN_USO_BB_CODE":0,"TAGS":"  #EvasaoCBR         #VemProPAGBoleto","MATRICULA_GEREL":"F0720682","NOME_GEREL":"ANA CAROLINA ROMITTI SARAIVA","ENDERECO":"AV. GOV. JULIO CAMPOS - MAPIM - 5220","BAIRRO":"MAPIM","CIDADE":"VARZEA GRANDE","UF":"MT"},{"PRF_DRTA":9220,"NM_DRTA":"URV-NEG.PF,PJ E AGRO","PRF_SPCA":9942,"NM_SPCA":"SUPER PJ II","PRF_SPCA_RGNL":8771,"NM_SPCA_RGNL":"SUPER PJ C O II","PRF_AG":7139,"NM_AG":"EMPRESA VARZEA GRAND","NR_SEQL_CTRA":5017,"SPCA_CSH":"9730","CD_CTRA_CSH":1001,"MTC_GCSH":"F0026518","NM_GCSH":"ABILENE DAS DORES DUARTE CARVALHO TREJAN","ID_CLI":"M925445374_7139","NM_CLI":"RECAPADORA TREVAO EIRELI ME","MCI":925445374,"FLAG":1,"CLSC":4,"RZSC":"RECAPADORA TREVAO EIRELI ME","NM_AREA_ECNC":"INDUSTRIA","NM_STR_ECNC":"INDÚSTRIA DA BORRACHA","QT_VST_MCI":1,"DT_PRMA_VST_MCI":"2019-01-24T02:00:00.000Z","DT_ULT_VST_MCI":"2019-01-24T02:00:00.000Z","FATM":2054199.25,"ANOMES_REF_FATM":201905,"MC_TOTAL":6708.53,"MC_CASH":928.66,"MC_CBR":676.1,"MC_DBT":0,"MC_GUIAS":0,"MC_PAG_FORNECEDOR":0,"MC_PAG_SALARIO":0,"MC_PAG_DIVERSOS":0,"TARF_TOTAL":1621.38,"TARF_CASH":1105.8,"VL_SFN_BB":0,"VL_SFN_OTR_BCO":0,"VL_SFN_TTL":0,"IN_USO_CNL_GFN":0,"IN_USO_CNL_MOBILE":0,"IN_USO_BB_CODE":0,"TAGS":"  #EvasaoCBR        #VemPraFOPAGBB #VemProPAGBoleto","MATRICULA_GEREL":"F2018084","NOME_GEREL":"CHRISTIANE SALETE MARTINS FERREIRA","ENDERECO":"AV GOV JULIO J DE CAMPOS - MAPIM - 7300 B","BAIRRO":"MAPIM","CIDADE":"VARZEA GRANDE","UF":"MT"},{"PRF_DRTA":9220,"NM_DRTA":"URV-NEG.PF,PJ E AGRO","PRF_SPCA":9942,"NM_SPCA":"SUPER PJ II","PRF_SPCA_RGNL":8771,"NM_SPCA_RGNL":"SUPER PJ C O II","PRF_AG":4042,"NM_AG":"EMPRESA MATO GROSSO","NR_SEQL_CTRA":5027,"SPCA_CSH":"9730","CD_CTRA_CSH":1001,"MTC_GCSH":"F0026518","NM_GCSH":"ABILENE DAS DORES DUARTE CARVALHO TREJAN","ID_CLI":"G000025108_4042","NM_CLI":"MULTICOPIA MEDPRESS","MCI":925297062,"FLAG":1,"CLSC":5,"RZSC":"MULTIPRESS IMPRESSAO DIGITAL LTDA","NM_AREA_ECNC":"INDUSTRIA","NM_STR_ECNC":"INDÚSTRIA EDITORIAL E GRÁFICA","QT_VST_MCI":0,"DT_PRMA_VST_MCI":null,"DT_ULT_VST_MCI":null,"FATM":2342084.93,"ANOMES_REF_FATM":201908,"MC_TOTAL":9243.86,"MC_CASH":1022.59,"MC_CBR":85.51,"MC_DBT":0,"MC_GUIAS":0,"MC_PAG_FORNECEDOR":0,"MC_PAG_SALARIO":0,"MC_PAG_DIVERSOS":0,"TARF_TOTAL":979.95,"TARF_CASH":267.52,"VL_SFN_BB":0,"VL_SFN_OTR_BCO":0,"VL_SFN_TTL":0,"IN_USO_CNL_GFN":0,"IN_USO_CNL_MOBILE":0,"IN_USO_BB_CODE":0,"TAGS":"  #EvasaoCBR        #VemPraFOPAGBB #VemProPAGBoleto","MATRICULA_GEREL":"F1366999","NOME_GEREL":"ARTHUR LEANDRO NAKANIWA ORTIZ","ENDERECO":"R ESTEVAO DE MENDONCA - POPULAR - 686","BAIRRO":"POPULAR","CIDADE":"CUIABA","UF":"MT"},{"PRF_DRTA":9220,"NM_DRTA":"URV-NEG.PF,PJ E AGRO","PRF_SPCA":9942,"NM_SPCA":"SUPER PJ II","PRF_SPCA_RGNL":8771,"NM_SPCA_RGNL":"SUPER PJ C O II","PRF_AG":7139,"NM_AG":"EMPRESA VARZEA GRAND","NR_SEQL_CTRA":5028,"SPCA_CSH":"9730","CD_CTRA_CSH":1001,"MTC_GCSH":"F0026518","NM_GCSH":"ABILENE DAS DORES DUARTE CARVALHO TREJAN","ID_CLI":"M514115970_7139","NM_CLI":"COMERCIO E REPRESENTACOES GIACOMELLI LTDA ME","MCI":514115970,"FLAG":1,"CLSC":6,"RZSC":"COMERCIO E REPRESENTACOES GIACOMELLI LTDA ME","NM_AREA_ECNC":"COMERCIO","NM_STR_ECNC":"COMÉRCIO ATACADISTA","QT_VST_MCI":9,"DT_PRMA_VST_MCI":"2018-10-31T03:00:00.000Z","DT_ULT_VST_MCI":"2019-01-18T02:00:00.000Z","FATM":2691215.57,"ANOMES_REF_FATM":201902,"MC_TOTAL":1529.55,"MC_CASH":273.16,"MC_CBR":117.86,"MC_DBT":0,"MC_GUIAS":0,"MC_PAG_FORNECEDOR":0,"MC_PAG_SALARIO":0,"MC_PAG_DIVERSOS":0,"TARF_TOTAL":451.04,"TARF_CASH":382.78,"VL_SFN_BB":0,"VL_SFN_OTR_BCO":0,"VL_SFN_TTL":0,"IN_USO_CNL_GFN":0,"IN_USO_CNL_MOBILE":0,"IN_USO_BB_CODE":0,"TAGS":"  #EvasaoCBR        #VemPraFOPAGBB #VemProPAGBoleto","MATRICULA_GEREL":"F9155171","NOME_GEREL":"SILVANA TELMA FERREIRA SOUZA","ENDERECO":"RUA CLOVIS HUGNEY (LOT CENTRO) - CENTRO NORTE - N 30 SALA 10","BAIRRO":"CENTRO NORTE","CIDADE":"VARZEA GRANDE","UF":"MT"},{"PRF_DRTA":9220,"NM_DRTA":"URV-NEG.PF,PJ E AGRO","PRF_SPCA":9942,"NM_SPCA":"SUPER PJ II","PRF_SPCA_RGNL":8771,"NM_SPCA_RGNL":"SUPER PJ C O II","PRF_AG":7139,"NM_AG":"EMPRESA VARZEA GRAND","NR_SEQL_CTRA":5027,"SPCA_CSH":"9730","CD_CTRA_CSH":1001,"MTC_GCSH":"F0026518","NM_GCSH":"ABILENE DAS DORES DUARTE CARVALHO TREJAN","ID_CLI":"G000408028_7139","NM_CLI":"OLIFER COMERCIO DE FERRAGENS LTDA EPP","MCI":411432252,"FLAG":1,"CLSC":7,"RZSC":"OLIFER COMERCIO DE FERRAGENS LTDA EPP","NM_AREA_ECNC":"COMERCIO","NM_STR_ECNC":"COMERCIO VAREJISTA","QT_VST_MCI":0,"DT_PRMA_VST_MCI":null,"DT_ULT_VST_MCI":null,"FATM":3224550.92,"ANOMES_REF_FATM":201908,"MC_TOTAL":4421.37,"MC_CASH":348.83,"MC_CBR":261.05,"MC_DBT":0,"MC_GUIAS":0,"MC_PAG_FORNECEDOR":0,"MC_PAG_SALARIO":0,"MC_PAG_DIVERSOS":0,"TARF_TOTAL":4770.22,"TARF_CASH":461.6,"VL_SFN_BB":0,"VL_SFN_OTR_BCO":0,"VL_SFN_TTL":0,"IN_USO_CNL_GFN":0,"IN_USO_CNL_MOBILE":0,"IN_USO_BB_CODE":0,"TAGS":"  #EvasaoCBR        #VemPraFOPAGBB #VemProPAGBoleto","MATRICULA_GEREL":"F0733805","NOME_GEREL":"ANDERSON MAYKO MUNDT GIM","ENDERECO":"AV ULISSES POMPEU DE CAMPOS (LOT CENTRO) - CENTRO - 417","BAIRRO":"CENTRO","CIDADE":"VARZEA GRANDE","UF":"MT"},{"PRF_DRTA":9220,"NM_DRTA":"URV-NEG.PF,PJ E AGRO","PRF_SPCA":9942,"NM_SPCA":"SUPER PJ II","PRF_SPCA_RGNL":8771,"NM_SPCA_RGNL":"SUPER PJ C O II","PRF_AG":4042,"NM_AG":"EMPRESA MATO GROSSO","NR_SEQL_CTRA":5053,"SPCA_CSH":"9730","CD_CTRA_CSH":1001,"MTC_GCSH":"F0026518","NM_GCSH":"ABILENE DAS DORES DUARTE CARVALHO TREJAN","ID_CLI":"G000438083_4042","NM_CLI":"JOSE DIVINO DA SILVA & CIA LTDA","MCI":835738071,"FLAG":1,"CLSC":8,"RZSC":"JOSE DIVINO DA SILVA & CIA LTDA","NM_AREA_ECNC":"COMERCIO","NM_STR_ECNC":"COMERCIO VAREJISTA","QT_VST_MCI":1,"DT_PRMA_VST_MCI":"2019-01-04T02:00:00.000Z","DT_ULT_VST_MCI":"2019-01-04T02:00:00.000Z","FATM":2382383.9,"ANOMES_REF_FATM":201904,"MC_TOTAL":2303.78,"MC_CASH":375.42,"MC_CBR":106.03,"MC_DBT":0,"MC_GUIAS":0,"MC_PAG_FORNECEDOR":0,"MC_PAG_SALARIO":0,"MC_PAG_DIVERSOS":0,"TARF_TOTAL":476.85,"TARF_CASH":287,"VL_SFN_BB":0,"VL_SFN_OTR_BCO":0,"VL_SFN_TTL":0,"IN_USO_CNL_GFN":0,"IN_USO_CNL_MOBILE":0,"IN_USO_BB_CODE":0,"TAGS":"  #EvasaoCBR        #VemPraFOPAGBB #VemProPAGBoleto","MATRICULA_GEREL":"F8936266","NOME_GEREL":"SAMUEL ADMIS DO PRADO","ENDERECO":"AV CARMINDO DE CAMPOS - CAMPO VELHO - 1617","BAIRRO":"CAMPO VELHO","CIDADE":"CUIABA","UF":"MT"},{"PRF_DRTA":9220,"NM_DRTA":"URV-NEG.PF,PJ E AGRO","PRF_SPCA":9942,"NM_SPCA":"SUPER PJ II","PRF_SPCA_RGNL":8771,"NM_SPCA_RGNL":"SUPER PJ C O II","PRF_AG":7139,"NM_AG":"EMPRESA VARZEA GRAND","NR_SEQL_CTRA":5027,"SPCA_CSH":"9730","CD_CTRA_CSH":1001,"MTC_GCSH":"F0026518","NM_GCSH":"ABILENE DAS DORES DUARTE CARVALHO TREJAN","ID_CLI":"M510626978_7139","NM_CLI":"CAMILE CONTABILIDADE EIRELI - ME","MCI":510626978,"FLAG":1,"CLSC":9,"RZSC":"CAMILE CONTABILIDADE EIRELI - ME","NM_AREA_ECNC":"SERVICO","NM_STR_ECNC":"SERVIÇOS AUXILIARES DIVERSOS","QT_VST_MCI":0,"DT_PRMA_VST_MCI":null,"DT_ULT_VST_MCI":null,"FATM":1874689.22,"ANOMES_REF_FATM":201908,"MC_TOTAL":3006.62,"MC_CASH":417.26,"MC_CBR":285.21,"MC_DBT":0,"MC_GUIAS":0,"MC_PAG_FORNECEDOR":0,"MC_PAG_SALARIO":0,"MC_PAG_DIVERSOS":0,"TARF_TOTAL":692.08,"TARF_CASH":483,"VL_SFN_BB":0,"VL_SFN_OTR_BCO":0,"VL_SFN_TTL":0,"IN_USO_CNL_GFN":0,"IN_USO_CNL_MOBILE":0,"IN_USO_BB_CODE":0,"TAGS":"  #EvasaoCBR        #VemPraFOPAGBB #VemProPAGBoleto","MATRICULA_GEREL":"F0733805","NOME_GEREL":"ANDERSON MAYKO MUNDT GIM","ENDERECO":"AV. DOM ORLANDO CHAVES - CRISTO REI - 2848","BAIRRO":"CRISTO REI","CIDADE":"VARZEA GRANDE","UF":"MT"},{"PRF_DRTA":9220,"NM_DRTA":"URV-NEG.PF,PJ E AGRO","PRF_SPCA":9942,"NM_SPCA":"SUPER PJ II","PRF_SPCA_RGNL":8771,"NM_SPCA_RGNL":"SUPER PJ C O II","PRF_AG":4042,"NM_AG":"EMPRESA MATO GROSSO","NR_SEQL_CTRA":5027,"SPCA_CSH":"9730","CD_CTRA_CSH":1001,"MTC_GCSH":"F0026518","NM_GCSH":"ABILENE DAS DORES DUARTE CARVALHO TREJAN","ID_CLI":"M923413964_4042","NM_CLI":"MILAN TURRA & TURRA LTDA-ME","MCI":923413964,"FLAG":1,"CLSC":10,"RZSC":"MILAN TURRA & TURRA LTDA-ME","NM_AREA_ECNC":"COMERCIO","NM_STR_ECNC":"COMÉRCIO ATACADISTA","QT_VST_MCI":0,"DT_PRMA_VST_MCI":null,"DT_ULT_VST_MCI":null,"FATM":1738805,"ANOMES_REF_FATM":201803,"MC_TOTAL":1930.54,"MC_CASH":468.72,"MC_CBR":45.8,"MC_DBT":0,"MC_GUIAS":0,"MC_PAG_FORNECEDOR":0,"MC_PAG_SALARIO":0,"MC_PAG_DIVERSOS":0,"TARF_TOTAL":356.35,"TARF_CASH":328.4,"VL_SFN_BB":0,"VL_SFN_OTR_BCO":0,"VL_SFN_TTL":0,"IN_USO_CNL_GFN":0,"IN_USO_CNL_MOBILE":0,"IN_USO_BB_CODE":0,"TAGS":"  #EvasaoCBR        #VemPraFOPAGBB #VemProPAGBoleto","MATRICULA_GEREL":"F1366999","NOME_GEREL":"ARTHUR LEANDRO NAKANIWA ORTIZ","ENDERECO":"AVENIDA AGRICOLA PAES DE BARROS - VERDAO - 1516","BAIRRO":"VERDAO","CIDADE":"CUIABA","UF":"MT"}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        //text: 'teste'
      },
    };

    this.onSubmit = this.onSubmit.bind(this);

    this.columns = {
      CLSC: {
        label: 'Ordem',
        width: 50,
        fixed: true,
        align: 'center',
      },


      MCI: {
        label: 'MCI',
        search: true,
        width: 90,
        // fixed: true,
        align: 'center',
      },
      // RZSC: {
      //   label: 'Razão Social',
      //   search: true,
      //   width: 250,
      //   fixed: true,
      // },     
     
      // ID_CLI: {
      //   label: 'Grupo',
      //   search: true,
      //   width: 130,
      //   // fixed: true,
      // },
      // NM_CLI: {
      //   label: 'Nome Grupo',
      //   search: true,
      //   width: 250,
      //   // fixed: true,
      // },

      // ENDERECO: {
      //   label: 'Endereço',
      //   search: true,
      //   width: 350,
      // },
      // BAIRRO: {
      //   label: 'Bairro',
      //   search: true,
      //   width: 200,
      // },
      // CIDADE: {
      //   label: 'Cidade',
      //   search: true,
      //   width: 200,
      // },
      // UF: {
      //   label: 'UF',
      //   search: true,
      //   width: 50,
      // },


      // PRF_AG: {
      //   label: 'Prefixo Agência',
      //   search: true,
      //   width: 80,
      //   align: 'center',
      // },

      // NM_AG: {
      //   label: 'Agência',
      //   search: true,
      //   width: 200,
      // },

      // NR_SEQL_CTRA: {
      //   label: 'Carteira',
      //   search: true,
      //   width: 80,
      //   align: 'center',
      // },
      // NOME_GEREL: {
      //   label: 'Gerente Relacionamento',
      //   search: true,
      //   width: 200,
      //   cellRenderer: ({ row }) => <a href={`https://humanograma.intranet.bb.com.br/${row.MATRICULA_GEREL}`} target="_blank">{row.NOME_GEREL}</a>,
      // },
      // NM_AREA_ECNC: {
      //   label: 'Área Econômica',
      //   search: true,
      //   width: 150,
      // },
      // NM_STR_ECNC: {
      //   label: 'Setor Econômico',
      //   search: true,
      //   width: 250,
      // },
      // QT_VST_MCI: {
      //   label: 'Qtde Visitas no MCI',
      //   type: 'INTEGER',
      //   width: 80,
      //   align: 'center',
      // },
      DT_PRMA_VST_MCI: {
        label: 'Data primeira visita no MCI',
        width: 80,
        type: 'DATE',
      },
      DT_ULT_VST_MCI: {
        label: 'Data última visita no MCI',
        width: 80,
        type: 'DATE',
      },
      FATM: {
        label: 'Faturamento',
        type: 'DECIMAL',
        width: 150,

      },
      ANOMES_REF_FATM: {
        label: 'Ano mês Ref Faturamento',
        width: 100,
        align: 'center',
      },
      MC_TOTAL: {
        label: 'MC Total',
        type: 'INTEGER',
        width: 80,

      },
      MC_CASH: {
        label: 'MC Cash',
        type: 'INTEGER',
        width: 80,

      },
      MC_CBR: {
        label: 'MC Cobrança',
        type: 'INTEGER',
        width: 80,

      },
      MC_DBT: {
        label: 'MC DBT',
        width: 80,
        type: 'INTEGER',

      },
      MC_GUIAS: {
        label: 'MC Guias',
        width: 80,
        type: 'INTEGER',

      },
      MC_PAG_FORNECEDOR: {
        label: 'MC PAG Fornecedor',
        width: 80,
        type: 'INTEGER',

      },
      NM_CMC_PAG_SALARIO: {
        label: 'MC PAG Salário ',
        type: 'INTEGER',
        width: 80,

      },
      MC_PAG_DIVERSOS: {
        label: 'MC PAG Diversos',
        type: 'INTEGER',
        width: 80,

      },
      TARF_TOTAL: {
        label: 'Tarifas Total',
        width: 80,
        type: 'INTEGER',

      },
      TARF_CASH: {
        label: 'Tarifas Cash',
        width: 80,
        type: 'INTEGER',

      },

    };
  }

  onSubmit(p) {
    console.log('onSubmit')
  }

  onChange({ id, value }) {
    this.setState(({ data }) => ({ data: { ...data, [id]: value } }));
  }

  render() {
    return (
      <div className="teste">
        {/* <Form
          onSubmit={this.onSubmit}          
          >
          
          <TextInput
            id="text"
            label="TextInput"
            onChange={this.onChange.bind(this)}
            value={this.state.data.text}
            //error="erro"
            required
          />
          <DateInput
            id="date"
            label="DateInput"
            onChange={this.onChange.bind(this)}
            value={this.state.data.date}
            // required
          />
          <NumberInput
            id="number"
            label="NumberInput"
            onChange={this.onChange.bind(this)}
            value={this.state.data.number}
          />
          <Radio
            id="radio"
            label="Radio"
            onChange={this.onChange.bind(this)}
            value={this.state.data.radio}
            options={[{
              label: 'Sim',
              value: true,
            }, {
              label: 'Não',
              value: false,
            }]}
          />
          <Select
            isMulti
            id="select"
            label="Select"
            onChange={this.onChange.bind(this)}
            options={[{ value: 1, label: 'Testando' }, { value: 2, label: 'Testando 2' }, { value: 3, label: 'Testando 3' }]}
            value={this.state.data.select}
          />
          <SelectAsync id="selectAsync" label="SelectAsync" />
          <Switch
            id="switch"
            label="Switch"
            checked={this.state.data.switch}
            onChange={this.onChange.bind(this)}
          />
          <TextArea
            id="textarea"
            label="TextArea"
            onChange={this.onChange.bind(this)}
            value={this.state.data.textarea}
          />
       
        </Form> */}
        <DataTable
          rows={rows}
          columns={this.columns}
          exportCsv
          rowsCount
          title="Teste"
          width="80%"
          footerHeight={50}
        />


      </div>
    );
  }
}


export default App;
