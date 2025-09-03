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
                    type: "verde",
                    items: [
                        "1) Dieta oral zero",
                        "2) AAS 100 mg/cp - 3 cp (300 mg), VO (mastigar), imediatamente",
                        "3) Clopidogrel 75 mg/cp - 8 cp (600 mg), VO, imediatamente",
                        "4) *Dinitrato de Isossorbida 5 mg/cp - 1 cp, SL, a cada 5 min, se dor (Máx.: 3 cp)",
                        "5) *Nitroglicerina 25mg/5mL - diluir em SG5% 240 mL e administrar em BIC se dor refratária",
                        "6) *Morfina 10 mg/ml - diluir e administrar 2ml a cada 5 min, se dor refratária",
                        "7) Rosuvastatina 40 mg/cp - 1 cp VO 1x/dia",
                        "8) *Enalapril 10 mg/cp - 1 cp VO 12/12h",
                        "9) Monitorização contínua"
                    ]
                },
                {
                    title: "Prescrição no PS - Trombólise",
                    type: "verde",
                    items: [
                        "1) Dieta oral zero",
                        "2) AAS 100 mg/cp - 3 cp (300 mg), VO (mastigar), imediatamente",
                        "3) *Clopidogrel 75 mg/cp - 4 cp (300 mg), VO, imediatamente (se < 75 anos)",
                        "4) *Enoxaparina 60 mg/0,6mL - 0,3 mL (30 mg), via EV, imediatamente",
                        "5) *Enoxaparina - 1 mg/kg, SC, de 12/12h (iniciar 15 min após item 4)",
                        "6) *TROMBOLÍTICO via EV (conforme protocolo)",
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
                    type: "verde",
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
        "Anafilaxia": {
             content: `
                <h3 class="text-2xl font-bold mb-4 text-white">Tratamento Imediato</h3>
                <p class="mb-4"><strong>Adrenalina 1 mg/mL</strong> - administrar 0,5 mL via IM (pode repetir a cada 5-15 min por até 3 vezes)</p>
            `,
            prescricoes: [
                {
                    title: "Prescrição no Pronto Socorro",
                    type: "verde",
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
                            <li><strong>Oxigênio:</strong> Suplementar se necessário.</li>
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
                        "4) Dipirona 500 mg/mL - 2 mL + 18 mL AD EV se dor ou febre",
                        "5) Glicose 50% - 40 mL EV, se glicemia ≤60 mg/dL",
                        "6) Insulina Regular SC conforme Glicemia Capilar",
                        "7) Suplementação de O2, se SatO2<92%",
                        "8) Monitorização contínua"
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
                <p class="mb-4"><strong>Paciente Instável (5Ds):</strong></p>
                <ol class="list-decimal pl-5 space-y-2">
                    <li>Internação hospitalar.</li>
                    <li><strong>Atropina 1 mg</strong>, EV bolus, repetir a cada 3-5 min (Máx: 3mg).</li>
                    <li>Se refratário: <strong>Marca-passo transcutâneo</strong>.</li>
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
                        "4) Marca-passo transcutâneo",
                        "5) Monitorização cardíaca contínua"
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
                        <tr><td>AVC Hemorrágico</td><td>Nitroprussiato</td><td>Redução da PAM até 25% em 6-12h</td></tr>
                        <tr><td>Dissecção Aguda de Aorta</td><td>Esmolol + Nitroprussiato</td><td>FC<60bpm + PAS 100-120 mmHg em 20 min</td></tr>
                        <tr><td>Eclampsia</td><td>Hidralazina</td><td>PAD ≤ 90-100 mmHg</td></tr>
                    </tbody>
                </table>
            `,
            prescricoes: []
        },
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
                            <li><strong>Anticoagulação:</strong> Heparina Não Fracionada.</li>
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
        }
    }
  }
};
