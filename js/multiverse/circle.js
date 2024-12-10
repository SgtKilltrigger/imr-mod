const SPELL = {
    getCycle() {
        if (tmp.mv_time.gte(tmp.mv.cycleTime)) {
            if (hasElement(51,1)) {
                let chance = Math.random()
                if (player.mv.durability==0 && chance > 0.75 && hasElement(51,1)) player.mv.durability = player.mv.durability.add(tmp.mv.maxDurability.div(2).floor())
            }
            player.mv.totalCycles = player.mv.totalCycles.add(1)
            player.mv.points = player.mv.points.add(tmp.mv.cycleGain)
            player.mv.durability = player.mv.durability.sub(1).max(0)
            player.mv.currentCount = player.mv.currentCount.add(1)
            if (player.mv.currentCount.gte(tmp.mv.addOrbit_req)) {
                player.mv.currentCount = E(0)
                player.mv.orbits = player.mv.orbits.add(1)
                if (hasElement(333)) player.mv.durability = player.mv.durability.add(tmp.mv.maxDurability.div(10).floor())
            }
            if (player.mv.firstReset == false) {
                player.mv.durability = tmp.mv.maxDurability
                player.dark.shadow = E(0)
                player.dark.abyssalBlot = E(0)
        
                player.dark.run.active = false
                player.dark.run.glyphs = [0,0,0,0,0,0]
                player.dark.run.upg = []
                let darkerSave = getDarkSave()
                player.dark.matters = darkerSave.matters
                player.dark.am_mass = E(0)
                player.dark.am = E(0)
                player.dark.c16.shard = E(0)
                player.mv.firstReset = true
                player.dark.c16.bestBH = E(0)
                let keep = ["qu_qol1", "qu_qol2", "qu_qol3", "qu_qol4", "qu_qol5", "qu_qol6", "qu_qol7", "qu_qol8", "qu_qol9", "qu_qol8a", "unl1", "unl2", "unl3", "unl4",
                "qol1", "qol2", "qol3", "qol4", "qol5", "qol6", "qol7", "qol8", "qol9", 'qu_qol10', 'qu_qol11', 'qu_qol12', 'qu0']
                player.supernova.tree = keep
                player.atom.elements = []
                player.inf.upg = []
            for (let x = 0; x < 5; x++) player.galaxy.grade.type[x] = E(0)
            player.galaxy.grade.theorems = E(0)
        player.galaxy.stars = E(0)
            player.galaxy.times = E(0)
            let me = []
            for (let i = 0; i > 43; i++) {
                let u = MUONIC_ELEM.upgs[player.atom.muonic_el[i]]
                if (u.mlt) me.push(player.atom.muonic_el[i])
            }
            player.md.break.active = false
           for (let x = 1; x <= 20; x++) player.chal.comps[x] = E(0)
           for (let x = 0; x < ASCENSIONS.names.length; x++) player.ascensions[x] = E(0)
           player.ranks.beyond = E(0)
           tmp.beyond_pres.max_tier = E(0)
           tmp.beyond_pres.latestRank = E(0)
           player.pres.beyond = E(0)
            player.inf.points = E(0)
            player.inf.pe = E(0)
            player.inf.dim_mass = E(0)
            player.inf.total = E(0)
            player.inf.nm = E(0)
            player.inf.pm = E(0)
            player.inf.dm = E(0)
            player.inf.hm = E(0)
            player.inf.em = E(0)
            player.inf.nm_base = E(0)
            player.inf.pm_base = E(0)
            player.inf.dm_base = E(0)
            player.inf.hm_base = E(0)
            player.inf.em_base = E(0)
            resetTheorems()
            player.inf.theorem = E(0)
            player.inf.theorem_max = E(1) 
            player.inf.reached = false
            player.mass = E(0)
    
            // QoL
    
            let iu11 = hasInfUpgrade(11), iu15 = hasInfUpgrade(15)
    
            resetMainUpgs(1,[3])
            resetMainUpgs(2,[5,6])
            resetMainUpgs(3,[2,6])
            if (!iu11) resetMainUpgs(4,[8])
            for (let x = 0; x < PRESTIGES.names.length; x++) player.prestiges[x] = E(0)
    
            // Reset
    
            player.ranks[RANKS.names[RANKS.names.length-1]] = E(0)
            RANKS.doReset[RANKS.names[RANKS.names.length-1]]()
    
            player.rp.points = E(0)
            player.tickspeed = E(0)
            player.accelerator = E(0)
            player.bh.mass = E(0)
    
            player.atom.atomic = E(0)
            player.bh.dm = E(0)
            player.bh.condenser = E(0)
    
            tmp.supernova.time = 0
    
            player.atom.points = E(0)
            player.atom.quarks = E(0)
            player.atom.particles = [E(0),E(0),E(0)]
            player.atom.powers = [E(0),E(0),E(0)]
            player.atom.atomic = E(0)
            player.atom.gamma_ray = E(0)
    
            player.md.active = false
            player.md.particles = E(0)
            player.md.mass = E(0)
            for (let x = 0; x < MASS_DILATION.upgs.ids.length; x++) player.md.upgs[x] = E(0)
            player.stars.unls = 0
            player.stars.generators = [E(0),E(0),E(0),E(0),E(0)]
            player.stars.points = E(0)
            player.stars.boost = E(0)
    
            player.supernova.chal.noTick = true
            player.supernova.chal.noBHC = true
    
            player.supernova.times = E(0)
            player.supernova.stars = E(0)
    
            player.supernova.bosons = {
                pos_w: E(0),
                neg_w: E(0),
                z_boson: E(0),
                photon: E(0),
                gluon: E(0),
                graviton: E(0),
                hb: E(0),
            }
            for (let x in BOSONS.upgs.ids) for (let y in BOSONS.upgs[BOSONS.upgs.ids[x]]) player.supernova.b_upgs[BOSONS.upgs.ids[x]][y] = E(0)
    
            player.supernova.fermions.points = [E(0),E(0)]
    
            for (let x = 0; x < 2; x++) for (let y = 0; y < 7; y++) player.supernova.fermions.tiers[x][y] = E(0)
    
            player.supernova.radiation.hz = hasUpgrade('br',6)?E(1e50):E(0)
            for (let x = 0; x < 7; x++) {
                player.supernova.radiation.ds[x] = E(0)
                for (let y = 0; y < 2; y++) player.supernova.radiation.bs[2*x+y] = E(0)
            }
            // Quantum
    
            let qu = player.qu
            let bmd = player.md.break
            let quSave = getQUSave()
    
            qu.times = E(10)
            qu.points = E(0)
            qu.bp = E(0)
            qu.chroma = [E(0),E(0),E(0)]
            qu.cosmic_str = E(0)
    
            qu.prim.theorems = E(0)
            qu.prim.particles = [E(0),E(0),E(0),E(0),E(0),E(0),E(0),E(0)]
    
            qu.en.amt = E(0)
            qu.en.eth = quSave.en.eth
            qu.en.hr = quSave.en.hr
            qu.en.rewards = quSave.en.rewards
    
            qu.rip.active = false
            qu.rip.amt = E(0)
    
            if (!iu11) bmd.active = false
            bmd.energy = E(0)
            bmd.mass = E(0)
            for (let x = 0; x < 12; x++) if (x != 10) bmd.upgs[x] = E(0)
    
            // Dark Reset
    
            let dark = player.dark
            let darkSave = getDarkSave()
            dark.rays = (hasInfUpgrade(7))?E(1e12):E(0)
            dark.shadow = E(0)
            dark.abyssalBlot = E(0)
    
            dark.run.active = false
            dark.run.upg = [null,10,10,5,1,10,100,1,10,5,10]
    
            dark.matters = darkSave.matters
    
            if (iu15) {
                darkSave.c16.first = true
                darkSave.c16.bestBH = dark.c16.bestBH
                darkSave.c16.charger = dark.c16.charger
            }
    
        dark.matters.am_mass = E(dark.matters.am_mass)
    dark.matters.am = E(0)
            dark.c16 = darkSave.c16

            dark.exotic_atom = darkSave.exotic_atom
    
            player.bh.fvm = E(0)
            player.bh.unstable = E(0)
    
            // Other
    
            if (!hasInfUpgrade(11)) {
                tmp.rank_tab = 0
                tmp.stab[4] = 0
            }
            
            tmp.stab[7] = 0
    
            if (!iu15) {
                player.atom.elemTier[0] = 1
                player.atom.elemLayer = 0
            }
            // Infinity
    
            player.inf.dim_mass = E(0)
    
            updateMuonSymbol()
    
            updateTemp()
    
            player.inf.pt_choosed=-1
    
            generatePreTheorems()
    
            tmp.pass = 2
            }
            tmp.mv_time = E(0)
        }
    },
    maxDurability() {
        let x = E(15)
        if (hasElement(43,1)) x = x.add(muElemEff(43))
        return x  
    },
    cyclesToOrbit() {
        let x = E(tmp.mv.cycleTime)
        x = x.pow(0.5).mul(1.5).floor()
if (hasElement(52,1)) x = x.add(muElemEff(52))
        return x
    },
    coreLvlUp() {
        let x = E(15)
        x = x.mul(player.mv.coreLvl.pow(1.35))
        return x.floor()
    },
    cycleTime() {
        let time = E(3)
        if (tmp.inf_unl) time= time.mul(theoremEff('mv',6))
        time = time.add(tmp.mv.timeScale)
        if (CHALS.inChal(23)) time=time.mul(player.mass.add(1).log10().add(1).log10().add(1).log(2).pow(2.25))
        return time
    },
    timeScale() {
        let x = E(1)
       x = player.mv.upgs[0].add(1).mul(spellEff(2).div(5).add(1)).mul(player.mv.orbits.sub(player.mv.upgs[1]).div(20).add(1)).mul(player.mv.totalCycles.pow(0.15).root(2))
       if (tmp.inf_unl) x= x.mul(theoremEff('mv',3))
       return x
    },
    cycleGain() {
        let eff = E(1)
        eff = E(tmp.mv.ringEff).mul(tmp.mv.coreEff).div(tmp.mv.orbitNerf)
        if (hasElement(44,1)) eff = eff.mul(muElemEff(44))
        if (tmp.inf_unl) eff = eff.mul(theoremEff("mv",7))
        return eff
    },
    ringEff() {
        let x = E(1)
        if (player.mv.durability==0) return x = player.mv.upgs[0].add(1).pow(0.85)
        x = player.mv.upgs[0].add(1).pow(1.5).mul(2)
        return x
    },
    coreEff() {
        let step = player.mv.coreLvl.add(0.15)
      let x = step.mul(spellEff(2))
       return x
    },
    orbitNerf() {
        let x = E(1)
     x = player.mv.orbits.sub(player.mv.upgs[1]).max(1).pow(0.3)
     return x
    },
    upgs: {
        buy(x) {
                player.mv.points = player.mv.points.sub(this.ids[x].cost(tmp.mv.upgs[x].bulk.sub(1))).max(0)
                player.mv.upgs[x] = player.mv.upgs[x].max(tmp.mv.upgs[x].bulk)
                if (x==0) player.mv.durability = tmp.mv.maxDurability
        },
    ids : [
        {
            desc: `Increase the length of Spell Circle' Ring and repair the ring.`,
            cost(x) { return Decimal.pow(7,Decimal.pow(2,x)).floor() },
            bulk() { return player.mv.points.max(1).log(7).max(1).log(2).add(1).floor() },
            effect(x) {
                return x.pow(1.25)
            },
            effDesc(x) { return "+"+format(x)+" mm " },
        },
        {
            desc: `Remove one of Spell Circle' orbits.`,
            cost(x) { return Decimal.pow(1.5,Decimal.pow(2,x)).floor() },
            bulk() { return player.mv.points.max(1).log(1.5).max(1).log(2).add(1).floor() },
            effect(x) {
                return x
            },
            effDesc(x) { return "-"+format(x)+" orbits in total" },
        },
        {
            desc: `Increase the Spell Circle' Core Power.`,
            cost(x) { return Decimal.pow(10,Decimal.pow(2,x)).floor() },
            bulk() { return player.mv.points.max(1).log10().max(1).log(2).add(1).floor() },
            effect(x) {
                return x.pow(0.75).mul(2).max(1)
            },
            effDesc(x) { return "x"+format(x) },
        },
    ],
},
    }

    function circleEffects() {
        let a = E(tmp.mv.cycleGain), eff = {}
        eff.cs = E(1e100).pow(a).add(1).log10().pow(1.85)
        if (player.mainUpg.bh.includes(22)) eff.cs = E(`e1e8`).pow(a).add(1).root(1000).pow(1.15)
       if (hasElement(46,1)) eff.theoremLvl = a.add(1).root(2).floor().softcap(150,0.5,0)
        if (hasElement(341)) eff.theoremLvl = a.add(1).pow(0.75).floor().softcap(300,0.5,0)
        return eff
    }
function spellEff(id,def=E(1)) { return tmp.mv.upgs[id].eff??def }
    function calcMv(dt) {
        let c23_gs= player.chal.active==23?player.bh.mass.add(1).log10().add(1).log10().pow(0.5).mul(dt):dt
        player.mv.durability = player.mv.durability.max(0)
        player.mv.orbits = player.mv.orbits.max(0)
        if (player.mv.totalCycles.gte(tmp.mv.coreLvl_req)) player.mv.coreLvl = player.mv.coreLvl.add(1)
        tmp.mv_time = tmp.mv_time.add(c23_gs).min(tmp.mv.cycleTime)
        player.mv.best = Math.max(player.mv.points)
    }
    function updateSpellTemp() {
        tmp.mv.addOrbit_req = SPELL.cyclesToOrbit()
        tmp.mv.coreLvl_req = SPELL.coreLvlUp()
        tmp.mv.maxDurability = SPELL.maxDurability()
        tmp.mv.cycleTime = SPELL.cycleTime()
        tmp.mv.circleEff = circleEffects()
        tmp.mv.cycleGain = SPELL.cycleGain()
        tmp.mv.ringEff = SPELL.ringEff()
        tmp.mv.orbitNerf = SPELL.orbitNerf()
        tmp.mv.coreEff = SPELL.coreEff()
        tmp.mv.timeScale = SPELL.timeScale()
        if (!tmp.mv.upgs) {
            tmp.mv.upgs = []
            for (let x = 0; x < SPELL.upgs.ids.length; x++) tmp.mv.upgs[x] = {}
        }
        for (let x = 0; x < SPELL.upgs.ids.length; x++) {
            let upg = SPELL.upgs.ids[x]
            tmp.mv.upgs[x].cost = upg.cost(player.mv.upgs[x])
            tmp.mv.upgs[x].bulk = upg.bulk().min(upg.maxLvl||1/0)
            tmp.mv.upgs[x].can = player.mv.points.gte(tmp.mv.upgs[x].cost) && player.mv.upgs[x].lt(upg.maxLvl||1/0)
            if (upg.effect) tmp.mv.upgs[x].eff = upg.effect(player.mv.upgs[x])
        }
    }
    function setupSpellHTML() {
        let circle_upg_table = new Element("circle_upg_table")
        let table = ""
        for (let i = 0; i < SPELL.upgs.ids.length; i++) {
            let upg = SPELL.upgs.ids[i]
            table += `
            <button onclick="SPELL.upgs.buy(${i})" class="btn full circle" id="circle_upg${i}_div" style="font-size: 11px;">
            <div style="min-height: 80px">
                ${((upg.maxLvl||1/0) > 1)?`[Level <span id="circle_upg${i}_lvl"></span>]<br>`:""}
                ${upg.desc}<br>
                ${upg.effDesc?`Currently: <span id="circle_upg${i}_eff"></span>`:""}
            </div>
            <span id="circle_upg${i}_cost"></span>
            </button>
            `
        }
        circle_upg_table.setHTML(table)
    }
    function getCircleHTML(sub=false) {
        let s = ""
        let data=player.mv
        let w = `
        <div class="c_ring">${format(spellEff(0))} mm</div>
        <div class="c_lvl">${format(data.coreLvl,0)}</div>
        <div>${s}</div>
        `
        return sub?w:`
        <div class="circle_div">
            ${w}
        </div>
        `
    }
    function updateSpellHTML() {
        tmp.el.addOrbit_req.setHTML(format(tmp.mv.addOrbit_req,0))
        tmp.el.currentCount.setHTML(format(player.mv.currentCount,0))
        tmp.el.total.setHTML(format(player.mv.totalCycles,0))
        tmp.el.coreLvl_req.setHTML(format(tmp.mv.coreLvl_req,0))
        tmp.el.orbitNerf.setHTML(formatMult(tmp.mv.orbitNerf))
        tmp.el.orbitAmt.setHTML(format(player.mv.orbits.sub(player.mv.upgs[1]).max(0),0))
        tmp.el.durability.setHTML(format(player.mv.durability,0)+'/'+format(tmp.mv.maxDurability,0))
        tmp.el.ringLength.setHTML(format(spellEff(0),0)+' mm')
        tmp.el.coreLvl.setHTML('Lv. '+format(player.mv.coreLvl,0))
        tmp.el.corePower.setHTML(format(spellEff(2),2))
        tmp.el.ringEff.setHTML(formatMult(tmp.mv.ringEff))
        tmp.el.coreEff.setHTML(formatMult(tmp.mv.coreEff))
        tmp.el.timeScale.setHTML(format(tmp.mv.timeScale))
        tmp.el.cycleGain.setHTML(format(tmp.mv.cycleGain))
        tmp.el.cycleTime.setHTML(formatTime(tmp.mv_time)+'s / '+formatTime(tmp.mv.cycleTime)+'s')
        for (let x = 0; x < SPELL.upgs.ids.length; x++) {
            let upg = SPELL.upgs.ids[x]
            let unl = upg.unl?upg.unl():true
            tmp.el["circle_upg"+x+"_div"].setVisible(unl)
            if (unl) {
                tmp.el["circle_upg"+x+"_div"].setClasses({btn: true, full: true,circle: true, locked: !tmp.mv.upgs[x].can })
                if ((upg.maxLvl||1/0) > 1) tmp.el["circle_upg"+x+"_lvl"].setTxt(format(player.mv.upgs[x],0)+(upg.maxLvl!==undefined?" / "+format(upg.maxLvl,0):""))
                if (upg.effDesc) {
                    tmp.el["circle_upg"+x+"_eff"].setHTML(upg.effDesc(tmp.mv.upgs[x].eff))
                }
                tmp.el["circle_upg"+x+"_cost"].setTxt("Cost: "+format(tmp.mv.upgs[x].cost)+" Multiversal Fragments")
            }
        }
        let h = ``, eff = tmp.mv.circleEff
        if (eff.cs) h += `<br>${formatMult(eff.cs,2)} to Corrupted Shards`
        if (eff.theoremLvl) h += `<br>+${format(eff.theoremLvl,2)} to Theorem's Level.`

        tmp.el.circleEffects.setHTML(`<b class='sky'>${h}</b>`)
    }