const prescrevendoData = {
  verde: {
    "Analgesia": {
      "Analgesia Geral": {
        content: `
          <h3 class="text-2xl font-bold mb-4 text-white">Escala da Dor</h3>
          <p class="mb-4">Para analgesia adequada, avalie a intensidade da dor e prescreva o tratamento mais adequado:</p>
          <div class="bg-gray-900 p-4 rounded-lg text-center mb-4 border border-gray-700">
            <p class="font-semibold text-gray-300">SEM DOR - 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 - DOR INSUPORTÁVEL</p>
            <div class="flex justify-around mt-2">
              <span class="text-green-400 font-medium">DOR LEVE</span>
              <span class="text-yellow-400 font-medium">DOR MODERADA</span>
              <span class="text-red-400 font-medium">DOR FORTE</span>
            </div>
          </div>
          <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>DOR LEVE:</strong> Analgésico e/ou AINE</li>
            <li><strong>DOR MODERADA:</strong> Analgésico e/ou AINE + Opioide Fraco</li>
            <li><strong>DOR FORTE:</strong> Analgésico e/ou AINE + Opioide Forte</li>
          </ul>
          <h4 class="text-xl font-semibold mb-2 text-white">Exemplos de Medicamentos por Classe</h4>
          <table>
            <thead><tr><th>Analgésico</th><th>AINE</th><th>Opioide Fraco</th><th>Opioide Forte</th></tr></thead>
            <tbody>
              <tr><td>Dipirona</td><td>Diclofenaco</td><td>Tramadol</td><td>Morfina</td></tr>
              <tr><td>Paracetamol</td><td>Ibuprofeno</td><td>Codeína</td><td></td></tr>
            </tbody>
          </table>
        `,
        prescricoes: [
          {
            title: "Prescrição no Pronto Socorro - DOR AGUDA LEVE",
            type: "verde",
            items: [
              "Dipirona 1000 mg/2mL - 2 mL + 18 mL AD via EV",
              "<strong>OU</strong>",
              "Dipirona 1000 mg/2mL - 2 mL + 18 mL AD via EV",
              "Dexametasona 4 mg/mL - 2,5 mL + 17,5 mL AD via EV"
            ]
          },
          {
            title: "Prescrição no Pronto Socorro - DOR AGUDA MODERADA",
            type: "verde",
            items: [
              "Dipirona 1000 mg/2mL - 2 mL + 18 mL AD via EV",
              "Dexametasona 10mg/2,5mL - 2,5 mL + 17,5 mL AD via EV",
              "Diclofenaco 75 mg/3ml - 3 mL via IM"
            ]
          },
          {
            title: "Prescrição no Pronto Socorro - DOR AGUDA INTENSA",
            type: "verde",
            items: [
              "Dipirona 1000 mg/2mL - 2 mL + 18 mL AD via EV",
              "Tramadol 50 mg/mL - 1 a 2 mL + SF0,9% 100 mL via EV",
              "<strong>OU</strong>",
              "Dipirona 1000 mg/2mL - 2 mL + 18 mL AD via EV",
              "Morfina 10 mg/mL - 1 mL + SF0,9% 9 mL, administrar 3 mL via EV"
            ]
          },
          {
            title: "Prescrição Ambulatorial - DOR LEVE/MODERADA",
            type: "verde",
            items: [
              "<strong>1) Dipirona 500 mg (1 cx)</strong><br>Tomar 1 a 2 comprimido(s), via oral, de 6/6h, se dor.",
              "<i>Se necessário, associar com AINE:</i>",
              "<strong>2) Diclofenaco 50 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, por até 5 dias seguidos, se dor intensa."
            ]
          },
          {
            title: "Prescrição Ambulatorial - DOR MODERADA/INTENSA",
            type: "verde",
            items: [
              "<strong>1) Dipirona 500 mg (1 cx)</strong><br>Tomar 1 a 2 comprimido(s), via oral, de 6/6h, se dor.",
              "<strong>2) Diclofenaco 50 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, por até 5 dias seguidos, se dor intensa.",
              "<strong>3) *Tramadol 50 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 6/6h, se dor intensa refratária.<br><i>*Receita de controle especial em duas vias</i>"
            ]
          }
        ]
      }
    },
    "Cardiologia": {
        "Edema Agudo de Pulmão Hipertensivo": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Esquema de Tratamento (Perfil B)</h3>
                <ol class="list-decimal pl-5 space-y-3">
                    <li><strong>Vasodilatador endovenoso:</strong>
                        <ul class="list-disc pl-5 mt-1">
                            <li>Nitroprussiato 50 mg/2mL EV em BIC.</li>
                            <li>Titular BIC de 2 em 2 mL/h a cada 3-5 min (MÁX: 45 mL/h).</li>
                            <li>PAS Alvo: 110-130 mmHg.</li>
                        </ul>
                    </li>
                    <li><strong>Diurético de alça (Furosemida 20 mg/2mL EV):</strong>
                        <ul class="list-disc pl-5 mt-1">
                            <li>Dose inicial: 0,5-1 mg/kg.</li>
                            <li>Dose para usuário crônico: 1-2x dose usual (1cp VO 40mg = 1 amp EV 20mg).</li>
                            <li>Reavaliar após 20 min e repetir, se necessário.</li>
                        </ul>
                    </li>
                    <li><strong>VNI (Ventilação Não Invasiva):</strong>
                        <ul class="list-disc pl-5 mt-1">
                            <li>CPAP, se satO2 < 90%.</li>
                            <li>Pressão: 5-10 cmH2O.</li>
                            <li>SatO2 alvo: 90-94%.</li>
                        </ul>
                    </li>
                </ol>`,
            prescricoes: [
                {
                    title: "Prescrição no Pronto Socorro (Sem uso crônico de Furosemida)",
                    type: "verde",
                    items: [
                        "1) Nitroprussiato 50 mg/2mL - Diluir 2 mL em SG5% 248 mL e infundir via EV em BIC a 2 mL/h",
                        "2) Furosemida 20 mg/2mL - administrar 4 mL via EV em bolus",
                        "3) Oxigênio suplementar com VNI CPAP - 5 cmH2O, se SATO2<90%"
                    ]
                },
                {
                    title: "Prescrição no Pronto Socorro (Em uso crônico de Furosemida - 80mg/dia)",
                    type: "verde",
                    items: [
                        "1) Nitroprussiato 50 mg/2mL - Diluir 2 mL em SG5% 248 mL e infundir via EV em BIC a 2 mL/h",
                        "2) Furosemida 20 mg/2 mL - administrar 8 mL via EV em bolus",
                        "3) Oxigênio suplementar com VNI CPAP - 5 cmH2O, se SATO2<90%"
                    ]
                }
            ]
        },
        "Fibrilação Atrial e Flutter Estável": {
          content: `
            <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico - Paciente Estável</h3>
            <p class="mb-2"><strong>Cardioversão Química (FA < 48h):</strong></p>
            <ul class="list-disc pl-5 mb-4">
              <li>Amiodarona 150mg/3ml: Fazer dose de ataque de 5-7 mg/kg + SG 5% 100 ml EV em 30-60 min.</li>
              <li>Dose de manutenção: 18ml (6 ampolas) + SG 5% 482 ml em BIC, 1 mg/min (33 ml/h) nas primeiras 6h e após 0,5 mg/min (16,6 ml/h) nas próximas 18h.</li>
            </ul>
            <p class="mb-2"><strong>Controle de Frequência Cardíaca:</strong></p>
            <ul class="list-disc pl-5 mb-4">
              <li><strong>Betabloqueadores:</strong> Metoprolol 5mg/5ml - Fazer 1 ampola EV em 2 min; pode ser repetida a cada 5 min, até a dose máxima de 20 mg (4 ampolas).</li>
              <li><strong>Bloqueadores de Canal de Cálcio:</strong> Verapamil 5mg/2ml - Fazer 1-2 ampolas EV em 2-5 min; pode ser repetida após 30 min, até a dose máxima de 20 mg (4 ampolas).</li>
              <li><strong>Digitais:</strong> Deslanosídeo 0,4mg/2ml - Fazer 1 a 2 ampolas EV lentamente em 24h.</li>
            </ul>
            <div class="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-500 text-yellow-300 p-4 mb-4 rounded-md" role="alert">
                <p class="font-bold">Atenção</p>
                <p>Lembrar da anticoagulação. Não proceder cardioversão em pacientes com FA crônica (>48h) sem realizar exclusão de trombo atrial.</p>
            </div>
          `,
          prescricoes: [
            {
                title: "Prescrição - Cardioversão Química (FA < 48h)",
                type: "verde",
                items: [
                    "1) Dieta zero",
                    "2) Amiodarona 150mg/3mL - diluir 3 mL em SG 5% 100 mL e infundir via EV em 10 minutos",
                    "3) Amiodarona 150mg/3mL - diluir 18 mL em SG 5% 232 mL e infundir via EV a 16 mL/h nas primeiras 6 horas, seguido de 8 mL/h durante as 18 horas seguintes",
                    "4) Monitorização contínua"
                ]
            },
            {
                title: "Prescrição - Controle de Frequência (FA > 48h)",
                type: "verde",
                items: [
                    "1) Dieta branda",
                    "2) Metoprolol 1 mg/mL - administrar 5 mL EV bolus sem diluição a 1 mL/min - Repetir a cada 5-10 minutos, se necessário (máx 15 mg)",
                    "3) Monitorização contínua"
                ]
            },
            {
                title: "Prescrição Ambulatorial Pós-Cardioversão",
                type: "verde",
                items: [
                    "<strong>1) Rivaroxabana 20 mg (Uso contínuo)</strong><br>Tomar 1 comprimido, via oral, uma vez por dia.",
                    "<i>Será reavaliado em consulta com Cardiologista em menos de 30 dias.</i>"
                ]
            },
            {
                title: "Prescrição Ambulatorial - Controle de Frequência",
                type: "verde",
                items: [
                    "<strong>1) Rivaroxabana 20 mg (Uso contínuo)</strong><br>Tomar 1 comprimido, via oral, uma vez por dia.",
                    "<strong>2) Succinato de Metoprolol 50 mg (Uso contínuo)</strong><br>Tomar 1 comprimido, via oral, uma vez por dia.",
                    "<i>Será reavaliado em consulta com Cardiologista.</i>"
                ]
            }
          ]
        },
        "Taquicardia Supraventricular Estável": {
            content: `
              <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico - Paciente Estável</h3>
              <p class="mb-2"><strong>1. Manobras Vasovagais:</strong> Podem reverter o quadro sem necessidade de medicações.</p>
              <p class="mb-2"><strong>2. Adenosina:</strong> Se ausência de resposta às manobras.</p>
              <ul class="list-disc pl-5 mb-4">
                  <li>Dose inicial: 6mg (1 ampola de 6mg/2ml) em bolus rápido, seguido de flush de 20ml de SF 0,9%.</li>
                  <li>Se ausência de resposta, dobrar a dose para 12mg (2 ampolas).</li>
                  <li><strong>Atenção:</strong> Evitar em pacientes com doenças pulmonares descompensadas. Casos extremos podem cursar com assistolia.</li>
              </ul>
              <p class="mb-2"><strong>3. Opções:</strong> Metoprolol ou Verapamil.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição - Pós Manobra Vagal sem Sucesso",
                    type: "verde",
                    items: [
                        "1) Adenosina 3 mg/mL - administrar 2mL via EV bolus (em Y ou torneira de 3 vias) seguido de flush de 20 mL de SF0,9%",
                        "2) Suplementação de O2, se SatO2 < 94%",
                        "3) Monitorização contínua"
                    ]
                }
            ]
        }
    },
    "Dermatologia": {
         "Alergia Leve/Moderada": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento</h3>
                <p class="mb-2"><strong>Processo Alérgico Leve (1ª escolha não sedantes):</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Loratadina 10 mg/cp - 1 cp, VO, 1x/dia</li>
                    <li>Desloratadina 5 mg/cp - 1 cp, VO, 1x/dia</li>
                </ul>
                <p class="mb-2"><strong>Anti-histamínicos Sedantes:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Parenteral:</strong> Prometazina 50mg/2mL - 2 mL via IM (MÁX: 100mg/dia)</li>
                </ul>`,
            prescricoes: [
                {
                    title: "Prescrição no PS - Alergia Moderada",
                    type: "verde",
                    items: [
                        "1) Prometazina injetável 50 mg/2ml - administrar 2mL, via IM profundo",
                        "2) Hidrocortisona injetável 100 mg/fr - diluir 2 fr em 50 mL de SF0,9% e administrar via EV em 15 minutos",
                    ]
                },
                {
                    title: "Prescrição Ambulatorial - Alergia Leve",
                    type: "verde",
                    items: [
                        "<strong>1) Loratadina 10 mg (1 cx)</strong><br>Tomar 1 comprimido, VO, 1x/dia, se alergia."
                    ]
                },
                {
                    title: "Prescrição Ambulatorial - Alergia Moderada",
                    type: "verde",
                    items: [
                        "<strong>1) Loratadina 10 mg (1 cx)</strong><br>Tomar 1 cp, VO, 1x/dia, por 5 dias.",
                        "<strong>2) Prednisona 20 mg (1 cx)</strong><br>Tomar 1 cp, VO, 1x/dia, pela manhã, por 5 dias."
                    ]
                }
            ]
        },
        "Celulite/Erisipela": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento (Monoterapia)</h3>
                <p class="mb-2"><strong>Via Oral:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Amoxicilina + Clavulanato 875+125mg/cp - 1 cp, VO, 12/12h por 7 dias</li>
                    <li>Cefalexina 500 mg/cp - 1 cp, VO, 6/6h, por 7 dias</li>
                </ul>
                <p class="mb-2"><strong>Via Parenteral:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Oxacilina 500 mg/fr - 2 g via EV, 4/4h, por 7 dias</li>
                    <li>Ceftriaxona 1 g/fr - 2 g, via EV, 24/24h, por 7 dias</li>
                    <li>Clindamicina 600 mg/4mL - 600 mg, via EV, 8/8h, por 7 dias</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Hospitalar",
                    type: "verde",
                    items: [
                        "1) Oxacilina 500 mg/fr - reconstituir 4 fr em 5 mL AD cada frasco e diluir em SF0,9% 100 mL - administrar via endovenosa, em 30 minutos, de 4/4h, por 7 dias"
                    ]
                },
                {
                    title: "Prescrição Hospital Dia",
                    type: "verde",
                    items: [
                        "1) Ceftriaxona 1 g/fr - reconstituir 2 fr em 10 mL AD cada e diluir em SF0,9% 100 mL - administrar via endovenosa, em 30 minutos, 1 vez por dia, por 7 dias"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Cefalexina 500 mg (28 cp)</strong><br>Tomar 1 comprimido, via oral, de 6/6h, por 7 dias"
                    ]
                }
            ]
        }
    },
    "Neurologia": {
        "Cefaleia Primária - Migrânea (Enxaqueca)": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Esquema de Tratamento</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li>Analgésico simples, podendo ser associado a AINE.</li>
                    <li>Dexametasona, se duração do quadro >48h.</li>
                    <li>Antiemético, se náusea.</li>
                    <li>Triptano, se refratariedade.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS - Dor Moderada/Intensa",
                    type: "verde",
                    items: [
                       "1) Dipirona 1g/2mL - 2 mL + 18 mL AD EV",
                       "2) Cetoprofeno 100 mg/fr - 1 fr + SF0,9% 100 mL EV em 30 min",
                       "3) Dexametasona 4 mg/mL - 2,5 mL + 17,5 mL AD EV",
                       "<strong>Se náusea:</strong> 4) Bromoprida 10 mg/2mL - 2 mL + 18 mL AD EV"
                    ]
                },
                {
                    title: "Prescrição no PS - Dor Refratária",
                    type: "verde",
                    items: [
                        "1) Sumatriptano 6 mg/0,5mL - Administrar 0,5 mL via SC",
                        "<strong>OU</strong>",
                        "1) Clorpromazina 25 mg/5mL - Administrar 2 mL via IM"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Dipirona 500 mg (1 cx)</strong><br>Tomar 1 a 2 comprimidos, via oral, de 6/6h se dor.",
                        "<strong>2) Ibuprofeno 400 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, por até 5 dias, se dor intensa.",
                        "<strong>3) Ondansetrona 4 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h se náusea ou vômito.",
                        "<strong>4) Sumatriptano 50 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, a cada 2h (máx: 4 cp/dia), se dor refratária."
                    ]
                }
            ]
        },
        "Cefaleia Primária - Tensional": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Esquema de Tratamento</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li>Analgésico simples + AINE.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS",
                    type: "verde",
                    items: [
                        "1) Dipirona 1g/2mL - 2 mL + 18 mL AD EV",
                        "2) Cetoprofeno 100 mg/fr - 1 fr + SF0,9% 100 mL EV em 30 min"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Paracetamol 750 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 6/6h, se dor.",
                        "<strong>2) Diclofenaco 50 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, por até 5 dias seguidos, se dor intensa."
                    ]
                }
            ]
        },
        "Vertigem": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p>Medicamentos que podem ser usados para suprimir o sistema vestibular: anti-histamínicos, benzodiazepínicos e antieméticos.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS",
                    type: "verde",
                    items: [
                        "1) Dimenidrato + Piridoxina [Dramin B6] 50mg - Fazer EV de 6/6h"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Dimenidrato 50mg</strong><br>Tomar 1 comprimido de 4/4 ou 6/6h.",
                        "<strong>OU</strong>",
                        "<strong>1) Cinarizina [Fluxon] 25mg</strong><br>Tomar 1 comprimido de 8/8h.",
                        "<strong>OU</strong>",
                        "<strong>1) Meclozina [Meclin] 50mg</strong><br>Tomar 1 comprimido de 8/8h."
                    ]
                }
            ]
        },
        "Paralisia de Bell": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Esquema de Tratamento</h3>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Corticoterapia:</strong> Prednisona ou Prednisolona 60 mg/dia por 5 dias, seguido de desmame.</li>
                    <li><strong>Lubrificação ocular:</strong> Carmelose sódica 0,5% (Ecofilm) colírio.</li>
                    <li><strong>Antiviral (se sintomas severos):</strong> Aciclovir 400 mg VO 5x/dia por 10 dias.</li>
                </ol>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Prednisona 20 mg (25 cp)</strong><br>Tomar 3 comprimidos, via oral, por 5 dias, seguido de 1/2 comprimido, via oral, por mais 5 dias.",
                        "<strong>2) Carmelose sódica 0,5% (1 fr)</strong><br>Pingar 1 gota em olho afetado 4 a 6 vezes por dia.",
                        "<strong>3) Aciclovir 400 mg (50 cp)</strong><br>Tomar 1 comprimido, via oral, de 4/4h (exceto madrugada), por 10 dias.<br><i>Sugestão de horário: 6h, 10h, 14h, 18h, 22h</i>"
                    ]
                }
            ]
        }
    },
    // INICIO DAS NOVAS ESPECIALIDADES
    "Gastroenterologia": {
        "Cólica Abdominal": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento</h3>
                <p class="mb-2"><strong>Analgésico + Antiespasmódico.</strong></p>
                <p class="mb-2"><strong>Via Parenteral:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Dipirona 1000 mg/2mL - 2 mL + 18 mL AD EV</li>
                    <li>Escopolamina 20 mg/mL - 1 a 2 mL + 9 a 18mL AD EV</li>
                    <li>Escopolamina + Dipirona 20mg+2,5g/5mL - 5 mL + 15 mL AD EV</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS - Cólica Leve",
                    type: "verde",
                    items: [
                        "1) Dipirona 1000 mg/2mL - Diluir 2 mL em 18 mL de AD e administrar via EV",
                        "2) Escopolamina 20mg/mL - Diluir 1 mL em 9 mL de AD e administrar via EV"
                    ]
                },
                {
                    title: "Prescrição no PS - Cólica Moderada/Intensa",
                    type: "verde",
                    items: [
                        "1) Escopolamina + Dipirona 20mg+2,5g/5mL - Diluir 5 mL em 15 mL de AD e administrar via EV"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Buscopan composto (1 cx)</strong><br>Tomar 1 a 2 comprimido(s), via oral, de 8/8h, se cólica abdominal."
                    ]
                }
            ]
        },
        "Constipação": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento</h3>
                <p class="mb-2"><strong>Via Oral:</strong> Psyllium, Lactulose, Bisacodil.</p>
                <p class="mb-2"><strong>Via Retal:</strong> Minilax (Sorbitol + Laurilsulfato de sódio), Enema de glicerina.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS",
                    type: "verde",
                    items: [
                        "1) Enema de glicerina 12% - aplicar o conteúdo de 1 frasco via retal"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Lactulose 667 mg/mL (1 fr)</strong><br>Tomar 15 mL, via oral, de 8/8h, se constipação."
                    ]
                }
            ]
        },
        "Diarreia Aguda (GECA)": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Esquema de Tratamento</h3>
                <p class="mb-2"><strong>Hidratação:</strong> Líquidos caseiros ou Sais de Reidratação Oral (SRO) - pelo menos 200 mL a cada evacuação.</p>
                <p class="mb-2"><strong>Antidiarreicos (Sintomáticos):</strong> Loperamida ou Racecadotrila (evitar se disenteria).</p>
                <p class="mb-2"><strong>Antimicrobianos (se disenteria):</strong> Ciprofloxacino.</p>
                <p class="mb-2"><strong>Se Giardíase/Amebíase:</strong> Metronidazol.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Hidraplex pó para solução oral (1 cx)</strong><br>Diluir o conteúdo de 1 sachê em 1 litro de água e tomar pelo menos 200 mL, via oral, a cada evacuação.",
                        "<strong>2) Ondansetrona 4 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, se náusea ou vômito.",
                        "<strong>3) Buscopan composto (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, se cólica abdominal.",
                        "<strong># Se sinais de disenteria:</strong><br><strong>4) Ciprofloxacino 500 mg (6 cp)</strong><br>Tomar 1 comprimido, via oral, de 12/12h, por 3 dias.",
                        "<strong># Se sinais de giardíase:</strong><br><strong>5) Metronidazol 250 mg (30 cp)</strong><br>Tomar 2 comprimidos, via oral, de 8/8h, por 5 dias."
                    ]
                }
            ]
        },
        "Dispepsia/Epigastralgia": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p>O tratamento visa aliviar os sintomas com uma combinação de antiespasmódicos, analgésicos e procinéticos.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS",
                    type: "verde",
                    items: [
                        "1) Buscopan composto (20 mg + 2,5 g/5 mL) - diluir 5 mL em 15 mL de AD e administrar via EV",
                        "2) Bromoprida 10 mg/2mL - diluir 2 mL em 18 mL de AD e administrar via EV"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Omeprazol 20 mg (1 cx)</strong><br>Tomar 1 cp, via oral, 30 minutos antes do café, por 1 mês.",
                        "<strong>2) Domperidona 10 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, 30 minutos antes das refeições, se epigastralgia ou sensação de plenitude gástrica."
                    ]
                }
            ]
        },
        "Náusea/Vômito": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento</h3>
                <p class="mb-2"><strong>Via Oral:</strong> Metoclopramida, Bromoprida, Ondansetrona, Dimenidrinato.</p>
                <p class="mb-2"><strong>Via Parenteral:</strong> Metoclopramida, Bromoprida, Ondansetrona, Dramin B6 DL.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS",
                    type: "verde",
                    items: [
                        "1) Bromoprida 10mg/2mL - diluir 2 mL em 18 mL de AD e administrar via EV lento"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Metoclopramida 10 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, se náusea ou vômito."
                    ]
                }
            ]
        },
        "Pirose": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento</h3>
                <p>Antiácidos como Hidróxido de alumínio ou Hidróxido de magnésio são a base do tratamento sintomático.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Hidróxido de alumínio 61,5 mg/mL (1 cx)</strong><br>Agitar bem o frasco e tomar 10 a 15 mL, diluído em meio copo de água, 1 hora após as refeições, se azia."
                    ]
                }
            ]
        },
        "Refluxo Gastroesofágico": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Tratamento Empírico (4-12 semanas)</h3>
                <p>Uso de Inibidores de Bomba de Prótons (IBP) e procinéticos, associado a mudanças no estilo de vida.</p>
                <h4 class="text-xl font-semibold mb-2 text-white">Orientações:</h4>
                <ul class="list-disc pl-5 mb-4">
                    <li>Elevar cabeceira ao deitar.</li>
                    <li>Não se alimentar antes de dormir.</li>
                    <li>Perda de peso, se indicado.</li>
                    <li>Cessar tabagismo.</li>
                    <li>Evitar refeições volumosas e alimentos que agravam os sintomas.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Omeprazol 20 mg</strong><br>Tomar 1 comprimido, 24/24h, pela manhã em jejum, ao menos 30min antes de se alimentar.",
                        "<strong>2) Domperidona 10mg</strong><br>Tomar 1 comprimido, de 8/8 horas."
                    ]
                }
            ]
        }
    },
    "Endocrinologia": {
        "Hipoglicemia": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Tratamento</h3>
                <p class="mb-2"><strong>Hipoglicemia Leve (DX < 70 mg/dL) com paciente responsivo:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Oferecer 15g de carboidrato (1 colher de sopa de açúcar, 150ml de refrigerante comum ou suco de laranja).</li>
                </ul>
                <p class="mb-2"><strong>Hipoglicemia Grave (DX < 54 mg/dL) ou sem condições de deglutir:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Endovenoso:</strong> Glicose 50% - 40 mL EV + SG 5% 100 mL/h EV.</li>
                    <li><strong>Intramuscular:</strong> Glucagon 1 mg/fr - 1 ml via IM.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS - Hipoglicemia Grave",
                    type: "verde",
                    items: [
                        "1) Glicose 50% - administrar 40 mL, via EV, agora",
                        "2) SG 5% 500 mL - administrar via EV a 33 gts/min",
                        "3) Monitorar glicemia capilar a cada 15 min."
                    ]
                }
            ]
        },
        "Hiperglicemia Assintomática": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li>Considerar ajuste do tratamento ambulatorial e orientar sobre a importância da adesão.</li>
                    <li>Encaminhar para a Atenção Primária à Saúde (APS).</li>
                    <li>Orientar sobre sinais de alarme para emergências hiperglicêmicas (CAD/EHH).</li>
                    <li>A administração de insulina no pronto socorro não é recomendada para casos de descompensação crônica.</li>
                </ul>
            `,
            prescricoes: []
        }
    },
    "Infectologia": {
      "Profilaxia Pós Exposição (PEP)": {
        content: `
            <h3 class="text-2xl font-bold mb-4 text-white">Esquema de Tratamento</h3>
            <div class="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-500 text-yellow-300 p-4 mb-4 rounded-md" role="alert">
                <p class="font-bold">Atenção</p>
                <p>A PEP deve ser iniciada o mais precoce possível, tendo como limite as 72 horas subsequentes à exposição de risco.</p>
            </div>
            <p>O tratamento padrão consiste na associação de Tenofovir/Lamivudina com Dolutegravir por 28 dias.</p>
        `,
        prescricoes: [
            {
                title: "Prescrição (PS e Ambulatório)",
                type: "verde",
                items: [
                    "<strong>1) Tenofovir/Lamivudina (TDF/3TC) 300 mg/300 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, 1 vez por dia, por 28 dias.",
                    "<strong>2) Dolutegravir (DTG) 50 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, 1 vez por dia, por 28 dias.",
                    "<i>OBS: Os comprimidos devem ser tomados juntos.</i>"
                ]
            }
        ]
      },
      "Tuberculose": {
        content: `
            <h3 class="text-2xl font-bold mb-4 text-white">Esquema de Tratamento Padrão</h3>
            <p class="mb-2"><strong>FASE INTENSIVA (2 MESES):</strong></p>
            <ul class="list-disc pl-5 mb-4">
                <li>RHZE (Rifampicina, Isoniazida, Pirazinamida, Etambutol) 150/75/400/275 mg</li>
            </ul>
            <p class="mb-2"><strong>FASE DE MANUTENÇÃO (4 MESES):</strong></p>
            <ul class="list-disc pl-5 mb-4">
                <li>RH (Rifampicina, Isoniazida) 150/75 mg</li>
            </ul>
            <p>A dose é ajustada de acordo com o peso do paciente.</p>
        `,
        prescricoes: [
            {
                title: "Prescrição (PS e Ambulatório) - Paciente 55 kg",
                type: "verde",
                items: [
                    "<strong>FASE INTENSIVA (2 meses):</strong>",
                    "<strong>1) RHZE 150/75/400/275 mg</strong><br>Tomar 4 comprimidos, via oral, 1 vez por dia em jejum (30 minutos antes do café), por 2 meses.",
                    "<strong>FASE DE MANUTENÇÃO (4 meses):</strong>",
                    "<strong>2) RH 150/75 mg</strong><br>Tomar 4 comprimidos, via oral, 1 vez por dia em jejum (30 minutos antes do café), por 4 meses.",
                    "<i>Tempo total do tratamento: 6 meses</i>"
                ]
            }
        ]
      },
      "Dengue (Grupos A e B)": {
          content: `
              <h3 class="text-2xl font-bold mb-4 text-white">Manejo Ambulatorial</h3>
              <p class="mb-2"><strong>Hidratação Oral:</strong> É a base do tratamento. O volume é calculado em 60 mL/kg/dia para adultos.</p>
              <ul class="list-disc pl-5 mb-4">
                  <li>1/3 com Sais de Reidratação Oral (SRO).</li>
                  <li>2/3 com líquidos caseiros (água, suco, água de coco, etc.).</li>
              </ul>
              <div class="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-500 text-yellow-300 p-4 mb-4 rounded-md" role="alert">
                  <p class="font-bold">Atenção</p>
                  <p>Não prescrever salicilatos (AAS) e AINEs.</p>
              </div>
          `,
          prescricoes: [
              {
                  title: "Prescrição Ambulatorial (Paciente 70 kg)",
                  type: "verde",
                  items: [
                      "<strong>1) Dipirona 500 mg (1 cx)</strong><br>Tomar 1 cp, via oral, de 6/6h, se dor ou febre.",
                      "<strong>2) Bromoprida 10 mg (1 cx)</strong><br>Tomar 1 cp, via oral, de 8/8h, se náusea ou vômito.",
                      "<strong># Orientações de Hidratação:</strong>",
                      "<i>Ingerir 4200 mL de líquido por dia, sendo:</i>",
                      "<i>- 1400 mL de Soro de Reidratação Oral</i>",
                      "<i>- 2800 mL com líquidos caseiros (água, soro caseiro, sucos, etc)</i>",
                      "<strong># Procurar imediatamente o serviço de urgência na presença de sinais de alarme.</strong>"
                  ]
              }
          ]
      },
      "Resfriado Comum": {
          content: `
              <h3 class="text-2xl font-bold mb-4 text-white">Tratamento Sintomático</h3>
              <p>O tratamento é focado no alívio dos sintomas, utilizando analgésicos, antitérmicos, descongestionantes e, se necessário, antitussígenos ou expectorantes.</p>
          `,
          prescricoes: [
              {
                  title: "Prescrição Ambulatorial - Sintomas Gerais",
                  type: "verde",
                  items: [
                      "<strong>1) Cimegripe (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 6/6h se sintomas de resfriado (febre, dor, congestão nasal)."
                  ]
              },
              {
                  title: "Prescrição Ambulatorial - Tosse Seca",
                  type: "verde",
                  items: [
                      "<strong>1) Dropropizina 3mg/mL (1 fr)</strong><br>Tomar 10 mL, via oral, de 8/8h, se tosse seca."
                  ]
              },
              {
                  title: "Prescrição Ambulatorial - Tosse Produtiva",
                  type: "verde",
                  items: [
                      "<strong>1) Ambroxol 30 mg/5mL (1 fr)</strong><br>Tomar 5 mL, via oral, de 8/8h, se tosse produtiva."
                  ]
              }
          ]
      },
      "Herpes Simples": {
          content: `
              <h3 class="text-2xl font-bold mb-4 text-white">Tratamento</h3>
              <p class="mb-2"><strong>Primoinfecção ou Recorrência:</strong></p>
              <ul class="list-disc pl-5 mb-4">
                  <li>Aciclovir 400 mg - 1 comprimido VO de 8/8h, por 5-10 dias.</li>
                  <li>Aciclovir 200 mg - 1 comprimido VO 5x ao dia, por 5-10 dias.</li>
              </ul>
              <p class="mb-2"><strong>Terapia Supressiva Crônica (>5 episódios/ano):</strong></p>
              <ul class="list-disc pl-5 mb-4">
                  <li>Aciclovir 400 mg - 1 comprimido VO de 12/12h, por 4-6 meses.</li>
              </ul>
          `,
          prescricoes: [
              {
                  title: "Prescrição Ambulatorial - Recorrência",
                  type: "verde",
                  items: [
                      "<strong>1) Aciclovir 400 mg (30 comprimidos)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, por 7 dias."
                  ]
              }
          ]
      },
      "Sífilis": {
          content: `
              <h3 class="text-2xl font-bold mb-4 text-white">Tratamento</h3>
              <p class="mb-2"><strong>Recente (primária e secundária):</strong></p>
              <ul class="list-disc pl-5 mb-4">
                  <li>Penicilina Benzatina 2.400.000 U, via IM, dose única.</li>
              </ul>
              <p class="mb-2"><strong>Tardia (duração ignorada, terciária ou latente tardia):</strong></p>
              <ul class="list-disc pl-5 mb-4">
                  <li>Penicilina Benzatina 2.400.000 U, via IM, 1x/semana, por 3 semanas.</li>
              </ul>
          `,
          prescricoes: [
              {
                  title: "Prescrição - Sífilis Recente",
                  type: "verde",
                  items: [
                      "<strong>1) Penicilina Benzatina 1.200.000 U (2 ampolas)</strong><br>Aplicar via IM 1 ampola em cada nádega, dose única."
                  ]
              },
              {
                  title: "Prescrição - Sífilis Tardia",
                  type: "verde",
                  items: [
                      "<strong>1) Penicilina Benzatina 1.200.000 U (2 ampolas por semana)</strong><br>Aplicar via IM 1 ampola em cada nádega, a cada 7 dias, por 3 semanas (total 7.200.000 U)."
                  ]
              }
          ]
      }
    },
    "Oftalmologia": {
        "Hordéolo": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Esquema de Tratamento</h3>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Pomada oftálmica:</strong> Associação de antibiótico e corticoide (Ex: Tobramicina + Dexametasona).</li>
                    <li><strong>Compressa morna:</strong> Aplicar calor úmido por 5 a 10 minutos, 3 a 5 vezes por dia.</li>
                    <li><strong>Massagem:</strong> Realizar leve massagem local após a compressa para drenar a lesão.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Tobradex pomada oftálmica (1 bisnaga)</strong><br>Aplicar fina camada em saco conjuntival, 3 vezes por dia, por 5 dias.",
                        "<strong># Orientações:</strong><br>Aplicar compressa morna por 5-10 min, 3-5x/dia, seguida de massagem suave no local."
                    ]
                }
            ]
        },
        "Conjuntivite Viral": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p>O tratamento é de suporte, com foco no alívio dos sintomas.</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Lubrificante ocular:</strong> Colírios como Hialuronato de sódio ou Carmelose sódica.</li>
                    <li><strong>Compressas geladas:</strong> Por 15 minutos, 4 vezes por dia.</li>
                    <li><strong>Lavagem:</strong> Com SF 0,9% gelado.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Ecofilm colírio (1 fr)</strong><br>Aplicar 1 a 2 gotas em olho afetado, 3 a 4 vezes por dia. Manter colírio em geladeira.",
                        "<strong># Orientações:</strong><br>Aplicar compressa gelada por 15 minutos, 4 vezes por dia e lavar os olhos com SF 0,9% gelado."
                    ]
                }
            ]
        },
        "Conjuntivite Bacteriana": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento</h3>
                <p>Uso de colírios antibióticos.</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Ofloxacina 0,3% solução oftálmica - 1 gota em olho afetado, de 6/6h, por 7 dias.</li>
                    <li>Tobramicina 0,3% solução oftálmica - 1 gota em olho afetado, de 6/6h, por 7 dias.</li>
                    <li>Moxifloxacino Colírio 0.5% - 1 gota em olho afetado de 4/4h, por 7-14 dias.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Ofloxacina 0,3% solução oftálmica (1 bisnaga)</strong><br>Aplicar 1 gota em olho afetado, de 6/6h, por 7 dias.",
                        "<strong># Orientações:</strong><br>Lavar os olhos com SF 0,9% gelado para higiene das pálpebras e dos cílios."
                    ]
                }
            ]
        }
    },
    "Ortopedia": {
        "Dor Lombar Mecânica e Torcicolo": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Esquema de Tratamento</h3>
                <p>Associação de analgésico comum, anti-inflamatório não esteroidal (AINE) e relaxante muscular.</p>
                <h4 class="text-xl font-semibold mb-2 text-white">Orientações Gerais:</h4>
                <ul class="list-disc pl-5 mb-4">
                    <li>Aplicar calor local de 8/8 horas.</li>
                    <li>Realizar repouso relativo.</li>
                    <li>Retirar fator de piora (ex: má postura).</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS",
                    type: "verde",
                    items: [
                        "1) Dipirona 1000 mg/2mL - 2 mL + 18 mL AD via EV",
                        "2) Diclofenaco 75 mg/3mL - 3 mL via IM",
                        "3) Tiocolchicosídeo 4 mg/2mL - 2 mL via IM"
                    ]
                },
                {
                    title: "Prescrição no PS - Dor Intensa/Refratária",
                    type: "verde",
                    items: [
                        "1) Tramadol 50 mg/mL - 2 mL + SF0,9% 100 mL via EV"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Paracetamol 750 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 6/6h, se dor.",
                        "<strong>2) Ibuprofeno 400 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, por até 5 dias seguidos, se dor intensa.",
                        "<strong>3) Ciclobenzaprina 5 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, por até 5 dias."
                    ]
                }
            ]
        }
    },
    "Otorrinolaringologia": {
        "Cerume Impactado": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento</h3>
                <p>Uso de agentes ceruminolíticos para amolecer o cerume antes da lavagem otológica.</p>
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Cerumin:</strong> 5 gotas em ouvido afetado, de 8/8h por 5-7 dias.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Cerumin (1 cx)</strong><br>Pingar 5 gotas em ouvido afetado e deixar agir por 5 minutos. Aplicar de 8/8h por 5-7 dias.",
                        "<strong># Orientações:</strong><br>Após 5-7 dias, retornar para reavaliação médica e lavagem otológica."
                    ]
                }
            ]
        },
        "Faringoamigdalite Estreptocócica": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Tratamento</h3>
                <p>O tratamento de escolha é a Penicilina G benzatina em dose única para garantir a erradicação do estreptococo e prevenir a febre reumática.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS",
                    type: "verde",
                    items: [
                        "1) Penicilina G benzatina 1.200.000 unidades - reconstituir 1 fr em 4 mL de AD e administrar via IM, dose única. (Para ≤ 27 kg: 600.000 unidades)"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial (Alternativa)",
                    type: "verde",
                    items: [
                        "<strong>1) Amoxicilina 500 mg (30 cp)</strong><br>Tomar 1 comprimido, via oral, de 8/8h por 10 dias."
                    ]
                }
            ]
        },
        "Otite Externa": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento</h3>
                <p>Uso de gotas otológicas com associação de antibiótico, anti-inflamatório e, por vezes, anestésico.</p>
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Otociriax (ciprofloxacino + hidrocortisona):</strong> 3 gotas no canal auditivo, de 12/12h, por 7 dias.</li>
                    <li><strong>Elotin (fluocinolona + neomicina + polimixina B + lidocaína):</strong> 3 gotas no canal auditivo, de 8/8h, por 7 dias.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Elotin solução otológica (1 fr)</strong><br>Instilar 3 gotas no canal auditivo afetado, de 8/8h, por 7 dias.",
                        "<strong># Orientações:</strong><br>Manter canal auditivo limpo e seco. Proteger ouvido com algodão embebido em óleo durante o banho."
                    ]
                }
            ]
        },
        "Otite Média Aguda": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Tratamento</h3>
                <p class="mb-2"><strong>Primeira Linha:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Amoxicilina+Clavulanato (875+125 mg) - 1 comprimido de 12/12h por 10 dias.</li>
                </ul>
                <p class="mb-2"><strong>Falha Terapêutica (persistência de febre, otalgia após 48-72h):</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Cefuroxima 500 mg - 1 comprimido de 12/12 horas, por 10 dias.</li>
                </ul>
                 <p class="mb-2"><strong>Alergia a Penicilinas:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Azitromicina, Claritromicina ou Levofloxacino.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Amoxicilina+Clavulanato 875+125 mg (20 cp)</strong><br>Tomar 1 comprimido de 12/12h por 10 dias."
                    ]
                }
            ]
        },
        "Rinite Alérgica": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p class="mb-2"><strong>Intermitente:</strong> Anti-histamínico oral não sedativo e lavagem nasal.</p>
                <p class="mb-2"><strong>Persistente:</strong> Anti-histamínico oral, corticoide nasal e lavagem nasal.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial - Intermitente",
                    type: "verde",
                    items: [
                        "<strong>1) Bilastina 20 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, uma vez por dia, enquanto persistirem os sintomas.",
                        "<strong>2) SF 0,9% (1 fr)</strong><br>Realizar lavagem nasal com solução fisiológica 3 vezes ao dia."
                    ]
                },
                {
                    title: "Prescrição Ambulatorial - Persistente",
                    type: "verde",
                    items: [
                        "<strong>1) Bilastina 20 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, uma vez por dia, enquanto persistirem os sintomas.",
                        "<strong>2) Mometasona 50 mcg spray (1 un)</strong><br>Aplicar 1 a 2 jatos em cada narina, 1 vez por dia, por 30 dias.",
                        "<strong>3) SF 0,9% (1 fr)</strong><br>Realizar lavagem nasal com 20 mL de solução fisiológica 3 vezes ao dia."
                    ]
                }
            ]
        },
        "Rinossinusite Bacteriana": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento e Diagnóstico</h3>
                <p class="mb-2"><strong>Critérios para sinusite bacteriana (3 dos seguintes):</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Muco com coloração alterada.</li>
                    <li>Dor local intensa.</li>
                    <li>Febre > 38°C.</li>
                    <li>PCR/VHS elevado.</li>
                    <li>Piora de sintomas.</li>
                </ul>
                <p class="mb-2"><strong>Antibióticos:</strong> Amoxicilina-Clavulanato é a primeira linha.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Amoxicilina-Clavulanato 875/125mg (14 cp)</strong><br>Tomar 1 comprimido, via oral, de 12/12h, por 7 dias."
                    ]
                }
            ]
        }
    },
    "Pneumologia": {
        "Pneumonia": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Tratamento Ambulatorial</h3>
                <p class="mb-2"><strong>Paciente sem comorbidades:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Amoxicilina-Clavulanato 875/125mg - 1 cp VO 12/12h por 7 dias.</li>
                    <li>OU Levofloxacino 750 mg - 1 cp VO 1x/dia por 5 dias.</li>
                </ul>
                <p class="mb-2"><strong>Paciente com comorbidades:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Associação:</strong> Amoxicilina-Clavulanato 875/125mg + Azitromicina 500 mg.</li>
                    <li><strong>Monoterapia:</strong> Levofloxacino 750 mg.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial - Paciente sem Comorbidades",
                    type: "verde",
                    items: [
                        "<strong>1) Amoxicilina-Clavulanato 875/125mg (14 cp)</strong><br>Tomar 1 comprimido, via oral, de 12/12h, por 7 dias."
                    ]
                },
                {
                    title: "Prescrição Ambulatorial - Paciente com Comorbidades",
                    type: "verde",
                    items: [
                        "<strong>1) Amoxicilina-Clavulanato 875/125mg (14 cp)</strong><br>Tomar 1 comprimido, via oral, de 12/12h, por 7 dias.",
                        "<strong>2) Azitromicina 500 mg (5 cp)</strong><br>Tomar 1 comprimido, via oral, 1 vez por dia, por 5 dias."
                    ]
                }
            ]
        },
        "DPOC - Manejo Ambulatorial": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo da Exacerbação (Pós-Alta)</h3>
                <p class="mb-2"><strong>Corticóide Oral:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Prednisolona 20mg - Tomar 2 comprimidos (40mg) de manhã por 7 dias.</li>
                </ul>
                <p class="mb-2"><strong>Broncodilatadores:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Salbutamol spray [Aerolin] 100mcg/jato - Fazer 2 jatos de 4/4h ou 6/6h por 7 dias.</li>
                    <li>Ipratrópio spray [Atrovent] 25mcg/jato - Fazer 2 jatos de 6/6h por 7 dias.</li>
                </ul>
                <p class="mb-2"><strong>Antibióticos (se indicado):</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Amoxicilina+Clavulanato ou Azitromicina.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial - Exacerbação",
                    type: "verde",
                    items: [
                        "<strong>1) Prednisolona 20mg</strong><br>Tomar 2 comprimidos de manhã por 7 dias.",
                        "<strong>2) Salbutamol spray 100mcg/jato</strong><br>Fazer 2 jatos de 6/6h por 7 dias.",
                        "<strong>3) Ipratrópio spray 25mcg/jato</strong><br>Fazer 2 jatos de 6/6h por 7 dias.",
                        "<strong>4) Amoxicilina+Clavulanato 875+125mg</strong><br>Tomar 1 comprimido de 12/12h por 7 dias."
                    ]
                }
            ]
        },
        "Crise Asmática Leve/Moderada": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Pós-Alta do PS</h3>
                <p class="mb-2">O tratamento após a alta de uma crise leve a moderada visa manter o controle e prevenir novas exacerbações.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial (Após Alta do PS)",
                    type: "verde",
                    items: [
                        "<strong>1) Salbutamol aerossol 100 mcg/dose (1 un)</strong><br>Inalar 8 jatos a cada 20 minutos, se exacerbação. Utilizar por até 7 dias. Procurar serviço de urgência se não houver melhora.",
                        "<strong>2) Prednisona 20 mg (10 cp)</strong><br>Tomar 2 comprimidos, via oral, 1 vez por dia, pela manhã, por 5 dias.",
                        "<strong># Orientações:</strong> Manter medicações de controle e retornar ao ambulatório para reavaliação."
                    ]
                }
            ]
        }
    },
    "Psiquiatria": {
        "Crise de Ansiedade e Pânico": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento</h3>
                <p>O manejo agudo visa a sedação leve e o controle dos sintomas com benzodiazepínicos de curta ação.</p>
                <ul class="list-disc pl-5 mb-4">
                    <li><strong>Alprazolam:</strong> 0,25-0,5mg VO</li>
                    <li><strong>Clonazepam:</strong> 0,25-0,5mg VO (ou gotas)</li>
                    <li><strong>Diazepam:</strong> 5 mg VO</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS",
                    type: "verde",
                    items: [
                        "1) Clonazepam 2,5 mg/mL - administrar 5 gotas via oral"
                    ]
                }
            ]
        },
        "Acatisia": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p>O tratamento envolve o uso de betabloqueadores e/ou benzodiazepínicos.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Propranolol 10 mg</strong><br>Tomar 1 comprimido, via oral, 2 vezes ao dia (Dose máxima 60 mg em 3 tomadas diárias).",
                        "<strong>Associar se necessário:</strong>",
                        "<strong>2) Clonazepam 0,5 mg</strong><br>Tomar 1 comprimido, via oral, até 2,5 mg/dia."
                    ]
                }
            ]
        }
    },
    "Urologia": {
        "Cólica Nefrética (Ureterolitíase)": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p class="mb-2"><strong>Analgesia:</strong> A base do tratamento é a analgesia potente com AINEs e, se necessário, opioides.</p>
                <p class="mb-2"><strong>Terapia Médica Expulsiva:</strong> Para cálculos menores (<10mm), pode-se usar alfabloqueadores como a Tansulosina.</p>
                 <div class="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-500 text-yellow-300 p-4 mb-4 rounded-md" role="alert">
                    <p class="font-bold">Sinais de Alarme</p>
                    <p>Orientar retorno se sinais de infecção, refratariedade ao tratamento ou piora da dor.</p>
                </div>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS",
                    type: "verde",
                    items: [
                        "1) Dipirona 1 g/2mL - diluir 2 mL em 18 mL AD e administrar via EV",
                        "2) Cetoprofeno 100 mg/fr - reconstituir 1 fr em SF 0,9% 100 mL e administrar via EV em 30 minutos"
                    ]
                },
                 {
                    title: "Prescrição no PS - Se Refratariedade",
                    type: "verde",
                    items: [
                        "1) Tramadol 50mg/mL - 2 mL + SF0,9% 100mL via EV em 30 minutos"
                    ]
                },
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Dipirona 1g</strong><br>Tomar 1 comprimido de 6/6h, se dor.",
                        "<strong>2) Diclofenaco 50mg</strong><br>Tomar 1 comprimido de 12/12h, por no máximo 5 dias.",
                        "<strong>3) Tansulosina 0,4mg</strong><br>Tomar 1 comprimido à noite por até 10 dias."
                    ]
                }
            ]
        },
        "Cistite (ITU Baixa)": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento</h3>
                <p class="mb-2"><strong>Antibióticos (escolha 1):</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Nitrofurantoína 100mg - 1 cp, VO, 6/6h por 5 dias</li>
                    <li>Fosfomicina 3g - 1 envelope, VO, dose única</li>
                    <li>Cefalexina 500mg - 1 cp, VO, 6/6h, por 7 dias</li>
                </ul>
                <p class="mb-2"><strong>Analgesia para Disúria:</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Fenazopiridina (Pyridium) 200mg - 1 cp, VO, 8/8h, por até 2 dias.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Nitrofurantoína 100 mg (20 cp)</strong><br>Tomar 1 comprimido, via oral, de 6/6h, por 5 dias.",
                        "<strong>2) Fenazopiridina 200 mg (1 cx)</strong><br>Tomar 1 comprimido, via oral, de 8/8h, por até 2 dias, se dor ao urinar."
                    ]
                }
            ]
        },
        "Pielonefrite (ITU Alta) - Tratamento Ambulatorial": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Opções de Tratamento (Via Oral)</h3>
                <p>Para casos não complicados, sem sepse, o tratamento ambulatorial com fluoroquinolonas é uma opção.</p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Ciprofloxacino 500mg - 1 cp VO 12/12h por 7 dias</li>
                    <li>Levofloxacino 750mg - 1 cp VO 1x/dia por 7 dias</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Ciprofloxacino 500 mg (14 cp)</strong><br>Tomar 1 comprimido, via oral, de 12/12h, por 7 dias."
                    ]
                }
            ]
        },
        "Candidíase Vaginal": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p class="mb-2"><strong>Intravaginal:</strong> Clotrimazol ou Miconazol em creme.</p>
                <p class="mb-2"><strong>Monoterapia Oral:</strong> Fluconazol 150mg dose única.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial - Monoterapia Oral",
                    type: "verde",
                    items: [
                        "<strong>1) Fluconazol 150mg (1 cp)</strong><br>Tomar 1 comprimido, via oral, dose única."
                    ]
                },
                 {
                    title: "Prescrição Ambulatorial - Intravaginal",
                    type: "verde",
                    items: [
                        "<strong>1) Clotrimazol 50mg/5g (creme)</strong><br>Aplicar 1 aplicador cheio endovaginal, ao deitar, durante 6 dias consecutivos."
                    ]
                }
            ]
        },
        "Vaginose Bacteriana": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p>O tratamento de escolha é com Metronidazol oral.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial",
                    type: "verde",
                    items: [
                        "<strong>1) Metronidazol 250 mg (28 cp)</strong><br>Tomar 2 comprimidos (500mg), de 12/12h, por 7 dias."
                    ]
                }
            ]
        },
        "Tricomoníase": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p>Tratamento com Metronidazol em dose única ou por 7 dias. É fundamental tratar os parceiros sexuais.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial - Dose Única",
                    type: "verde",
                    items: [
                        "<strong>1) Metronidazol 400 mg (5 cp)</strong><br>Tomar 5 comprimidos (total de 2g), via oral, em dose única."
                    ]
                }
            ]
        },
        "Uretrites": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p class="mb-2"><strong>Gonocócica:</strong> Terapia dupla com Ceftriaxona IM e Azitromicina oral.</p>
                <p class="mb-2"><strong>Não Gonocócica:</strong> Monoterapia com Azitromicina ou Doxiciclina.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição - Uretrite Gonocócica",
                    type: "verde",
                    items: [
                        "1) Ceftriaxona 500mg - Aplicar 1 ampola, via IM, dose única.",
                        "<strong>+</strong>",
                        "<strong>2) Azitromicina 500mg (2 cp)</strong><br>Tomar 2 comprimidos (1g), via oral, em dose única."
                    ]
                },
                {
                    title: "Prescrição - Uretrite Não Gonocócica",
                    type: "verde",
                    items: [
                        "<strong>1) Azitromicina 500mg (2 cp)</strong><br>Tomar 2 comprimidos (1g), via oral, em dose única."
                    ]
                }
            ]
        }
    },
    "Hematologia": {
        "Anemia Ferropriva": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p class="mb-2"><strong>Via Oral:</strong> Sulfato ferroso, preferencialmente com alimentos ácidos e evitando laticínios.</p>
                <p class="mb-2"><strong>Via Parenteral (Noripurum):</strong> Indicado em casos de intolerância oral ou necessidade de reposição mais rápida.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição Ambulatorial (Via Oral)",
                    type: "verde",
                    items: [
                        "<strong>1) Sulfato ferroso 300 mg (60mg Ferro elementar)</strong><br>Tomar 1 comprimido, via oral, 3 vezes ao dia (antes do café, almoço e jantar)."
                    ]
                },
                {
                    title: "Prescrição Hospital Dia (Via Parenteral)",
                    type: "verde",
                    items: [
                        "1) Hidróxido Férrico [Noripurum] 100mg/5ml - Diluir 5-10ml em 250ml de SF 0,9% e infundir em no mínimo 30 minutos.<br><i>Frequência: 1 a 3 vezes por semana, conforme cálculo de deficiência de ferro.</i>"
                    ]
                }
            ]
        }
    }
  },
  vermelha: {
    "Admitindo Paciente Grave": {
        "Paciente na Sala Vermelha": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico: MOV + ABCDE</h3>
                <p class="mb-4">Ao admitir um paciente grave, avalie responsividade e pulso. Se sem pulso, inicie protocolo de PCR. Caso contrário, proceda com MOV e ABCDE simultaneamente.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h4 class="text-xl font-semibold mb-2 text-white">MOV (Monitorização + Oxigênio + Veia)</h4>
                        <ul class="list-disc pl-5">
                            <li><strong>Monitorização:</strong> PA, PAM, Oximetria, Temperatura, Cardioscopia, Glicemia capilar.</li>
                            <li><strong>Oxigênio:</strong> Suplementar se necessário (Alvo SatO2 > 92%).</li>
                            <li><strong>Veia:</strong> Obter dois acessos calibrosos (≥ 18G).</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-xl font-semibold mb-2 text-white">ABCDE</h4>
                        <ul class="list-disc pl-5">
                            <li><strong>A (Airway):</strong> Vias aéreas pérvias.</li>
                            <li><strong>B (Breathing):</strong> Ventilação e sinais de insuficiência respiratória.</li>
                            <li><strong>C (Circulation):</strong> Pulsos, PA, perfusão.</li>
                            <li><strong>D (Disability):</strong> Nível de consciência (Glasgow).</li>
                            <li><strong>E (Exposure):</strong> Exposição completa, controle de temperatura.</li>
                        </ul>
                    </div>
                </div>
            `,
            prescricoes: [
                {
                    title: "Prescrição Prática Inicial",
                    type: "vermelha",
                    items: [
                        "1) Dieta zero",
                        "2) SF0,9% 500 mL - EV aberto, se hipovolemia",
                        "3) Noradrenalina 4 mg/4mL - diluir 16 mL em SG5% 234 mL e administrar em BIC a 10 mL/h - titular se PAM<65mmHg",
                        "4) Dipirona 500 mg/mL - 2 mL + 18 mL AD EV se dor ou febre (TAX > 37,5°C)",
                        "5) Glicose 50% - 40 mL EV, se glicemia ≤60 mg/dL",
                        "6) Insulina Regular SC conforme Glicemia Capilar (181-200: 2UI, 201-250: 4UI, etc.)",
                        "7) Suplementação de O2, se SatO2<92%",
                        "8) Monitorização contínua",
                        "9) Registrar débito urinário 1/1h, considerar SVD."
                    ]
                }
            ]
        }
    },
    "Cardiologia": {
        "Bradiarritmia": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico</h3>
                <p class="mb-2"><strong>Paciente Estável:</strong> Monitorar e solicitar avaliação da cardiologia.</p>
                <p class="mb-4"><strong>Paciente Instável (5Ds: Dor torácica, Dispneia, Diminuição do nível de consciência, Desmaio, Diminuição da PA):</strong></p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li>Internação hospitalar.</li>
                    <li><strong>Atropina 1 mg</strong>, EV bolus, repetir a cada 3-5 min (Máx: 3mg).</li>
                    <li>Se refratário: <strong>Marca-passo transcutâneo</strong> ou drogas de segunda linha (epinefrina, dopamina).</li>
                </ol>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS - Paciente Instável",
                    type: "vermelha",
                    items: [
                        "1) Dieta zero",
                        "2) Atropina 0,5 mg/mL - administrar 2 mL, via EV, bolus",
                        "3) Monitorização cardíaca contínua"
                    ]
                },
                {
                    title: "Prescrição no PS - Refratário à Atropina (Marca-Passo)",
                    type: "vermelha",
                    items: [
                        "1) Dieta zero",
                        "2) Fentanil 50mcg/mL - 2 mL + SF0,9% 8 mL EV, bolus lento",
                        "3) Midazolam 5 mg/mL - 0,5 mL + SF0,9% 9 mL EV, bolus lento",
                        "4) Instalar Marca-passo transcutâneo",
                        "5) Monitorização cardíaca contínua"
                    ]
                }
            ]
        },
        "Taquiarritmia Instável": {
            content: `
              <h3 class="text-2xl font-bold mb-4 text-white">Manejo da Taquiarritmia Instável</h3>
              <p class="mb-4"><strong>Sinais de instabilidade:</strong> confusão, hipotensão, precordialgia, dispneia.</p>
              <p class="mb-2">A conduta é <strong>Cardioversão Elétrica Sincronizada</strong> imediata com o paciente sedado. A carga varia conforme o ritmo:</p>
              <table>
                  <thead><tr><th>Ritmo</th><th>Carga (Bifásico)</th><th>Modo</th></tr></thead>
                  <tbody>
                      <tr><td>QRS Estreito e Regular</td><td>50-100 J</td><td>Cardioversão</td></tr>
                      <tr><td>QRS Estreito e Irregular</td><td>120-200 J</td><td>Cardioversão</td></tr>
                      <tr><td>QRS Largo e Regular</td><td>100 J</td><td>Cardioversão</td></tr>
                      <tr><td>QRS Largo e Irregular (TV Polimórfica)</td><td>200 J</td><td><strong>Desfibrilação</strong></td></tr>
                  </tbody>
              </table>
              <p class="mt-4"><strong>Sedação Pré-procedimento:</strong> Utilizar Fentanil + Midazolam ou Fentanil + Propofol.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição para Cardioversão Elétrica",
                    type: "vermelha",
                    items: [
                        "1) Dieta zero",
                        "2) Midazolam 5 mg/mL - diluir 1 mL em 4 mL AD e administrar 1 mL via EV lento.",
                        "3) Fentanil 50 mcg/mL - administrar 1 mL via EV lento.",
                        "4) Suplementação de O2 (desligar durante o choque).",
                        "5) Monitorização contínua.",
                        "<strong>APÓS REVERSÃO:</strong>",
                        "6) Amiodarona 150mg/3mL - diluir 18 mL em SG5% 232 mL e administrar via EV a 16 mL/h (6h), seguido de 8 mL/h (18h)."
                    ]
                }
            ]
        },
        "Taquicardia Ventricular Estável": {
            content: `
              <h3 class="text-2xl font-bold mb-4 text-white">Manejo da TV Monomórfica Estável</h3>
              <p>A primeira linha é a <strong>Cardioversão Química</strong> com Amiodarona. Se não houver reversão, proceder com Cardioversão Elétrica Sincronizada (100 J).</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição - Cardioversão Química",
                    type: "vermelha",
                    items: [
                        "1) Amiodarona 150mg/3mL - diluir 3 mL em SG 5% 100 mL e infundir via EV em 10 minutos (Dose de Ataque)",
                        "2) Amiodarona 150mg/3mL - diluir 18 mL em SG 5% 232 mL e infundir via EV a 11 mL/h por 24h (Dose de Manutenção, iniciar após ataque)",
                        "3) Suplementação de O2, se SatO2 < 94%",
                        "4) Monitorização contínua"
                    ]
                }
            ]
        },
        "Emergências Hipertensivas": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo dos Anti-Hipertensivos</h3>
                <p class="mb-4">Objetivo geral: reduzir a PAM em 10-20% na primeira hora. O manejo específico varia conforme a condição clínica.</p>
                <table>
                    <thead><tr><th>Condição Clínica</th><th>Fármaco de Escolha</th><th>Meta de Tratamento</th></tr></thead>
                    <tbody>
                        <tr><td>Encefalopatia Hipertensiva</td><td>Nitroprussiato</td><td>Redução da PAM até 25% em 2-3h</td></tr>
                        <tr><td>AVC Hemorrágico</td><td>Nitroprussiato</td><td>Redução da PAS para 140 mmHg na primeira hora (se PAS 150-220)</td></tr>
                        <tr><td>Dissecção Aguda de Aorta</td><td>Esmolol + Nitroprussiato</td><td>FC<60bpm + PAS 100-120 mmHg em 20 min</td></tr>
                        <tr><td>Eclampsia</td><td>Hidralazina</td><td>PAD ≤ 90-100 mmHg</td></tr>
                    </tbody>
                </table>
            `,
            prescricoes: [
                 {
                    title: "Prescrição - Encefalopatia Hipertensiva",
                    type: "vermelha",
                    items: [
                        "1) Nitroprussiato de sódio 50 mg/2mL - Diluir 2 mL em SG5% 248 mL e infundir via EV em BIC a 2 mL/h (Titular para meta)"
                    ]
                },
                 {
                    title: "Prescrição - Dissecção Aguda de Aorta",
                    type: "vermelha",
                    items: [
                        "1) Esmolol 2500mg/10mL - Diluir 10 mL em SF 0,9% 240 mL e administrar 5 mL via EV em 1 minuto (ataque), seguido de infusão em BIC a 20 mL/h (manutenção).",
                        "2) Nitroprussiato de sódio 50 mg/2mL - Diluir 2 mL em SG5% 248 mL e infundir via EV em BIC a 5-10 mL/h (iniciar após FC < 60 bpm)."
                    ]
                }
            ]
        },
        "Infarto Agudo do Miocárdio com Supra de ST": {
            content: `
                <div class="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-500 text-yellow-300 p-4 mb-4 rounded-md" role="alert">
                    <p class="font-bold">Atenção</p>
                    <p>Seguir sempre o protocolo adotado pela instituição. As sugestões a seguir são norteadoras.</p>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-white">Orientações Gerais</h3>
                <p class="mb-2"><strong>*Nitrato:</strong> Contraindicado com uso de Tadalafil/Sildenafil nas últimas 24h, IAM de VD associado, e hipotensão (PAS < 110 mmHg).</p>
                <p class="mb-2"><strong>*Morfina:</strong> Usar apenas se dor refratária ao nitrato. Não usar rotineiramente.</p>
                <p class="mb-2"><strong>*IECA:</strong> Administrar em todos os pacientes com DM, HAS e/ou ICFER.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS - Angioplastia Primária",
                    type: "vermelha",
                    items: [
                        "1) Dieta oral zero",
                        "2) AAS 100 mg/cp - 3 cp (300 mg), VO (mastigar), imediatamente",
                        "3) Clopidogrel 75 mg/cp - 8 cp (600 mg), VO, imediatamente",
                        "4) *Dinitrato de Isossorbida 5 mg/cp - 1 cp, SL, a cada 5 min, se dor (Máx.: 3 cp)",
                        "5) *Nitroglicerina 25mg/5mL - diluir em SG5% 240 mL e administrar em BIC se dor refratária",
                        "6) *Morfina 10 mg/ml - diluir 1 mL em 9 mL de SF0,9%, administrar 2ml a cada 5 min, se dor refratária",
                        "7) Rosuvastatina 40 mg/cp - 1 cp VO 1x/dia",
                        "8) *Enalapril 10 mg/cp - 1 cp VO 12/12h",
                        "9) Monitorização contínua"
                    ]
                },
                {
                    title: "Prescrição no PS - Trombólise",
                    type: "vermelha",
                    items: [
                        "1) Dieta oral zero",
                        "2) AAS 100 mg/cp - 3 cp (300 mg), VO (mastigar), imediatamente",
                        "3) *Clopidogrel 75 mg/cp - 4 cp (300 mg), VO, imediatamente (se < 75 anos, senão 75mg)",
                        "4) *Enoxaparina 60 mg/0,6mL - 0,3 mL (30 mg), via EV, imediatamente (se < 75 anos)",
                        "5) *Enoxaparina - 1 mg/kg, SC, de 12/12h (iniciar 15 min após item 4)",
                        "6) *TROMBOLÍTICO (Alteplase ou Tenecteplase) via EV (conforme protocolo)",
                        "7) Demais medidas de suporte."
                    ]
                }
            ]
        },
        "Infarto Agudo do Miocárdio sem Supra de ST": {
            content: `
                <div class="bg-yellow-900 bg-opacity-20 border-l-4 border-yellow-500 text-yellow-300 p-4 mb-4 rounded-md" role="alert">
                    <p class="font-bold">Atenção</p>
                    <p>Seguir sempre o protocolo da instituição.</p>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-white">Orientações Gerais</h3>
                <p class="mb-2"><strong>*Clopidogrel:</strong> Não administrar se CATE for em menos de 24h.</p>
                <p class="mb-2"><strong>*Enoxaparina:</strong> Ajustar dose para idade ≥75 anos ou TFG ≤30.</p>
                <p class="mb-2"><strong>*Betabloqueador:</strong> Não administrar se bradicardia, hipotensão ou risco de choque.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição no Pronto Socorro",
                    type: "vermelha",
                    items: [
                        "1) Dieta oral branda (Zero, se CATE < 12h)",
                        "2) AAS 100 mg/cp - 3 cp (300 mg) VO (mastigar), imediatamente",
                        "3) *Clopidogrel 75 mg/cp - 4 cp (300 mg) VO, imediatamente",
                        "4) *Enoxaparina - 1 mg/kg, SC, de 12/12H",
                        "5) *Dinitrato de Isossorbida 5 mg/cp - 1 cp, SL, a cada 5 min, se dor (Máx.: 3 cp)",
                        "6) *Nitroglicerina 25mg/5mL - em BIC se dor refratária",
                        "7) *Atenolol 25 mg/cp - 1 cp, VO, de 12/12h",
                        "8) *Enalapril 10 mg/cp - 1 cp, VO, de 12/12h",
                        "9) Rosuvastatina 40 mg/cp - 1 cp, VO, 1x/dia",
                        "10) Monitorização contínua"
                    ]
                }
            ]
        }
    },
    "Pneumologia": {
        "Tromboembolismo Pulmonar (TEP)": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo Clínico Baseado no Risco (Escore PESI)</h3>
                <div class="space-y-4">
                     <div>
                        <h4 class="text-xl font-semibold ficha-vermelha-text">Risco Alto (Choque/Hipotensão)</h4>
                        <p>Tratamento em UTI com suporte, trombólise e anticoagulação.</p>
                        <ul class="list-disc pl-5 mt-1">
                            <li><strong>Suporte:</strong> O2, fluidos (cautela), vasopressores.</li>
                            <li><strong>Trombólise:</strong> Alteplase 100 mg EV em 2 horas.</li>
                            <li><strong>Anticoagulação:</strong> Heparina Não Fracionada ou Enoxaparina.</li>
                        </ul>
                    </div>
                </div>
            `,
            prescricoes: [
                {
                    title: "Prescrição - Risco Alto/Choque (Paciente 80kg)",
                    type: "vermelha",
                    items: [
                        "1) Dieta zero",
                        "2) SF 0,9% 250 mL - administrar via EV",
                        "3) Alteplase 50 mg/50mL - administrar 100 mL, via EV, em 2h",
                        "4) Noradrenalina (em BIC se PAS<90mmHg)",
                        "5) Enoxaparina 80mg/0,8mL - 0,8 mL, SC, de 12/12h",
                        "6) Suplementação de O2",
                        "7) Monitorização contínua"
                    ]
                },
                {
                    title: "Prescrição - Risco Intermediário (Paciente 80kg)",
                    type: "vermelha",
                    items: [
                        "1) Dieta oral branda",
                        "2) Enoxaparina 80mg/0,8mL - administrar 0,8 mL, via SC, de 12/12h"
                    ]
                }
            ]
        },
        "Crise Asmática Grave/Exacerbada": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo da Crise Grave</h3>
                <ol class="list-decimal pl-5 space-y-2">
                    <li><strong>Oxigênio Suplementar:</strong> Manter SatO2 entre 93-95%.</li>
                    <li><strong>Broncodilatador Inalatório:</strong> Salbutamol + Ipratrópio em nebulização contínua ou a cada 20 min na primeira hora.</li>
                    <li><strong>Corticoide Sistêmico:</strong> Prednisona (VO) ou Hidrocortisona/Metilprednisolona (EV).</li>
                    <li><strong>Sulfato de Magnésio EV:</strong> Considerar em casos refratários à terapia inicial.</li>
                </ol>
            `,
            prescricoes: [
                {
                    title: "Prescrição no PS - Crise Grave",
                    type: "vermelha",
                    items: [
                        "1) Dieta zero",
                        "2) Salbutamol 2,5mg/mL 20 gotas + Ipratropio 0,25 mg/mL 40 gotas + SF0,9% 3 mL - administrar via nebulização a cada 20 minutos na primeira hora.",
                        "3) Metilprednisolona 125 mg/2mL - diluir 1 mL em SF0,9% 50 mL e administrar via EV em 20 minutos.",
                        "4) Oxigênio suplementar para manter SatO2 93-95%.",
                        "5) <strong>Se refratário:</strong> MgSO4 10% - Diluir 10 mL em SF0,9% 100 mL e administrar EV em 20-30 minutos."
                    ]
                }
            ]
        }
    },
    "Paciente Crítico": {
        "Sepse e Choque Séptico": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Condutas na Primeira Hora (Bundle)</h3>
                <ol class="list-decimal pl-5 space-y-3">
                    <li><strong>Coletar Exames e Culturas.</strong></li>
                    <li><strong>Administrar Antibiótico de Amplo Espectro.</strong></li>
                    <li><strong>Expansão Volêmica:</strong> 30 mL/kg de cristaloide se hipotensão (PAM < 65) ou hipoperfusão.</li>
                </ol>
                <h3 class="text-2xl font-bold mt-6 mb-4 text-white">Choque Séptico Refratário</h3>
                 <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Drogas Vasoativas:</strong> Iniciar Noradrenalina se hipotensão persistir.</li>
                    <li><strong>Corticoterapia:</strong> Considerar Hidrocortisona se choque refratário.</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição Sepse - Primeira Hora (70kg, Foco Pulmonar)",
                    type: "vermelha",
                    items: [
                        "1) Dieta zero",
                        "2) Ringer Lactato 500 mL - infundir EV aberto, repetir se necessário (total 2L)",
                        "3) Ceftriaxona 1 g - 2 fr + SF0,9% 100 mL EV em 30 min, depois 24/24h",
                        "4) Claritromicina 500 mg - 1 fr + SF0,9% 250 mL EV em 60 min, depois 12/12h",
                        "5) Monitorização contínua"
                    ]
                },
                {
                    title: "Prescrição Choque Séptico Refratário (70kg)",
                    type: "vermelha",
                    items: [
                        "1) Noradrenalina 4 mg/4mL – diluir 16 mL em SG5% 234 mL e administrar em BIC (titular para PAM ≥ 65)",
                        "2) Hidrocortisona 100 mg/fr - 1 fr + SF0,9% 20 mL EV de 8/8h",
                    ]
                }
            ]
        },
        "Intubação Orotraqueal (Sequência Rápida)": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Sequência Rápida de Intubação (7 Ps)</h3>
                <p>O processo envolve <strong>Preparação</strong>, <strong>Pré-oxigenação</strong>, <strong>Pré-tratamento</strong> (otimização), <strong>Paralisia com indução</strong>, <strong>Posicionamento</strong>, <strong>Passagem do tubo</strong> e cuidados <strong>Pós-intubação</strong>.</p>
                <h4 class="text-xl font-semibold mb-2 text-white">Agentes Indutores (Sedativos):</h4>
                <ul class="list-disc pl-5 mb-2">
                    <li><strong>Etomidato:</strong> 0,3 mg/kg (Cardioestável)</li>
                    <li><strong>Quetamina:</strong> 1-2 mg/kg (Cardioestável)</li>
                    <li><strong>Propofol:</strong> 1,5-3 mg/kg</li>
                    <li><strong>Midazolam:</strong> 0,1-0,3 mg/kg</li>
                </ul>
                <h4 class="text-xl font-semibold mb-2 text-white">Bloqueadores Neuromusculares:</h4>
                <ul class="list-disc pl-5">
                    <li><strong>Succinilcolina:</strong> 1,5 mg/kg</li>
                    <li><strong>Rocurônio:</strong> 1,5 mg/kg</li>
                </ul>
            `,
            prescricoes: [
                {
                    title: "Prescrição - Indução e Bloqueio (Paciente 70kg)",
                    type: "vermelha",
                    items: [
                        "1) Etomidato 2 mg/mL - administrar 10 mL via EV",
                        "2) Rocurônio 10 mg/mL - administrar 10 mL via EV",
                        "3) Monitorização contínua"
                    ]
                },
                {
                    title: "Prescrição - Sedação Contínua Pós-IOT",
                    type: "vermelha",
                    items: [
                        "1) Fentanil 50 mcg/mL - diluir 20 mL em SF0,9% 80 mL e administrar via EV a 5 mL/h",
                        "2) Midazolam 5 mg/mL - diluir 20 mL em SF0,9% 80 mL e administrar via EV a 5 mL/h"
                    ]
                }
            ]
        },
        "Parada Cardiorrespiratória (PCR)": {
            content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Manejo da PCR</h3>
                <p class="mb-2">Iniciar compressões (100-120/min, 5-6cm profundidade) e ventilações (30:2). Avaliar o ritmo a cada 2 minutos.</p>
                <p class="mb-2"><strong>Ritmo Chocável (FV/TV sem pulso):</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Choque (200J bifásico) -> RCP 2 min -> Checar ritmo.</li>
                    <li>Após 2º choque: Adrenalina 1mg a cada 3-5 min.</li>
                    <li>Após 3º choque: Amiodarona 300mg (depois 150mg) ou Lidocaína.</li>
                </ul>
                <p class="mb-2"><strong>Ritmo Não Chocável (AESP/Assistolia):</strong></p>
                <ul class="list-disc pl-5 mb-4">
                    <li>Adrenalina 1mg o mais rápido possível, a cada 3-5 min.</li>
                    <li>RCP 2 min -> Checar ritmo.</li>
                </ul>
                <p class="font-bold">Investigar e tratar causas reversíveis (5Hs e 5Ts).</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição - Cuidados Pós-PCR",
                    type: "vermelha",
                    items: [
                        "1) Dieta zero",
                        "2) Ringer Lactato 500 mL - infundir EV aberto (20-30 mL/kg)",
                        "3) Noradrenalina 4 mg/4mL – diluir 16 mL em SG5% 234 mL e administrar em BIC para PAM ≥ 65 mmHg",
                        "4) Monitorização contínua",
                        "5) Controle de temperatura (Hipotermia Terapêutica, se indicado)"
                    ]
                }
            ]
        }
    },
    // INICIO DAS NOVAS ESPECIALIDADES VERMELHAS
    "Dermatologia": {
        "Anafilaxia": {
             content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Tratamento Imediato</h3>
                <p class="mb-4"><strong>Adrenalina 1 mg/mL</strong> - administrar 0,5 mL via IM na face anterolateral da coxa. Pode repetir a cada 5-15 min por até 3 vezes.</p>
                <p>Realizar expansão volêmica com cristaloides e considerar anti-histamínicos e corticoides como adjuvantes.</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição no Pronto Socorro",
                    type: "vermelha",
                    items: [
                       "1) Dieta oral zero",
                       "2) Adrenalina 1 mg/mL - aplicar 0,5 mL via IM em face anterolateral da coxa",
                       "3) SF 0,9% 1000 mL - correr via EV em 1 hora"
                    ]
                }
            ]
        }
    },
    "Neurologia": {
      "Crise Convulsiva / Estado de Mal Epiléptico": {
          content: `
              <h3 class="text-2xl font-bold mb-4 text-white">Manejo da Crise Aguda</h3>
              <p class="mb-2"><strong>1ª Linha (Benzodiazepínicos):</strong></p>
              <ul class="list-disc pl-5 mb-4">
                  <li><strong>Diazepam:</strong> 10mg EV lento. Repetir se necessário.</li>
                  <li><strong>Midazolam:</strong> 10mg IM ou intranasal (se sem acesso venoso).</li>
              </ul>
              <p class="mb-2"><strong>Estado de Mal Epiléptico (Crise > 5 min ou refratária):</strong></p>
              <ul class="list-disc pl-5 mb-4">
                  <li><strong>Fenitoína (Hidantalização):</strong> 20 mg/kg EV em infusão lenta.</li>
              </ul>
          `,
          prescricoes: [
              {
                  title: "Prescrição no PS - Crise Convulsiva",
                  type: "vermelha",
                  items: [
                      "1) Diazepam 10 mg/2mL - administrar 2 mL via EV lento",
                      "2) Glicose 50% – Administrar 40 mL via EV, se glicemia capilar ≤ 70 mg/dL",
                      "3) Monitorização contínua"
                  ]
              },
              {
                  title: "Prescrição no PS - Estado de Mal Epiléptico (Paciente 70kg)",
                  type: "vermelha",
                  items: [
                      "1) Fenitoína 250 mg/5mL - diluir 28 mL em SF0,9% 250 mL e administrar via EV em 30-60 min."
                  ]
              }
          ]
      }
    }
  }
};
