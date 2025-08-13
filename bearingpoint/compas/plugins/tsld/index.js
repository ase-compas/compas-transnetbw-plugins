/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pn = globalThis, Do = Pn.ShadowRoot && (Pn.ShadyCSS === void 0 || Pn.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Bo = Symbol(), ou = /* @__PURE__ */ new WeakMap();
let Kc = class {
  constructor(e, t, a) {
    if (this._$cssResult$ = !0, a !== Bo)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (Do && e === void 0) {
      const a = t !== void 0 && t.length === 1;
      a && (e = ou.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), a && ou.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const td = (r) => new Kc(typeof r == "string" ? r : r + "", void 0, Bo), rd = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((a, n, i) => a + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + r[i + 1], r[0]);
  return new Kc(t, r, Bo);
}, ad = (r, e) => {
  if (Do)
    r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else
    for (const t of e) {
      const a = document.createElement("style"), n = Pn.litNonce;
      n !== void 0 && a.setAttribute("nonce", n), a.textContent = t.cssText, r.appendChild(a);
    }
}, uu = Do ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const a of e.cssRules)
    t += a.cssText;
  return td(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: nd, defineProperty: id, getOwnPropertyDescriptor: sd, getOwnPropertyNames: od, getOwnPropertySymbols: ud, getPrototypeOf: ld } = Object, vr = globalThis, lu = vr.trustedTypes, cd = lu ? lu.emptyScript : "", ki = vr.reactiveElementPolyfillSupport, Ma = (r, e) => r, qn = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? cd : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, Po = (r, e) => !nd(r, e), cu = { attribute: !0, type: String, converter: qn, reflect: !1, hasChanged: Po };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), vr.litPropertyMetadata ?? (vr.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let jr = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = cu) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const a = Symbol(), n = this.getPropertyDescriptor(e, a, t);
      n !== void 0 && id(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, a) {
    const { get: n, set: i } = sd(this.prototype, e) ?? { get() {
      return this[t];
    }, set(s) {
      this[t] = s;
    } };
    return { get() {
      return n == null ? void 0 : n.call(this);
    }, set(s) {
      const o = n == null ? void 0 : n.call(this);
      i.call(this, s), this.requestUpdate(e, o, a);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? cu;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ma("elementProperties")))
      return;
    const e = ld(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ma("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ma("properties"))) {
      const t = this.properties, a = [...od(t), ...ud(t)];
      for (const n of a)
        this.createProperty(n, t[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0)
        for (const [a, n] of t)
          this.elementProperties.set(a, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, a] of this.elementProperties) {
      const n = this._$Eu(t, a);
      n !== void 0 && this._$Eh.set(n, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const a = new Set(e.flat(1 / 0).reverse());
      for (const n of a)
        t.unshift(uu(n));
    } else
      e !== void 0 && t.push(uu(e));
    return t;
  }
  static _$Eu(e, t) {
    const a = t.attribute;
    return a === !1 ? void 0 : typeof a == "string" ? a : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const a of t.keys())
      this.hasOwnProperty(a) && (e.set(a, this[a]), delete this[a]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return ad(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var a;
      return (a = t.hostConnected) == null ? void 0 : a.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var a;
      return (a = t.hostDisconnected) == null ? void 0 : a.call(t);
    });
  }
  attributeChangedCallback(e, t, a) {
    this._$AK(e, a);
  }
  _$EC(e, t) {
    var i;
    const a = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, a);
    if (n !== void 0 && a.reflect === !0) {
      const s = (((i = a.converter) == null ? void 0 : i.toAttribute) !== void 0 ? a.converter : qn).toAttribute(t, a.type);
      this._$Em = e, s == null ? this.removeAttribute(n) : this.setAttribute(n, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var i;
    const a = this.constructor, n = a._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const s = a.getPropertyOptions(n), o = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((i = s.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? s.converter : qn;
      this._$Em = n, this[n] = o.fromAttribute(t, s.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, a) {
    if (e !== void 0) {
      if (a ?? (a = this.constructor.getPropertyOptions(e)), !(a.hasChanged ?? Po)(this[e], t))
        return;
      this.P(e, t, a);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, a) {
    this._$AL.has(e) || this._$AL.set(e, t), a.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var a;
    if (!this.isUpdatePending)
      return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, s] of this._$Ep)
          this[i] = s;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0)
        for (const [i, s] of n)
          s.wrapped !== !0 || this._$AL.has(i) || this[i] === void 0 || this.P(i, this[i], s);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (a = this._$EO) == null || a.forEach((n) => {
        var i;
        return (i = n.hostUpdate) == null ? void 0 : i.call(n);
      }), this.update(t)) : this._$EU();
    } catch (n) {
      throw e = !1, this._$EU(), n;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((a) => {
      var n;
      return (n = a.hostUpdated) == null ? void 0 : n.call(a);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
jr.elementStyles = [], jr.shadowRootOptions = { mode: "open" }, jr[Ma("elementProperties")] = /* @__PURE__ */ new Map(), jr[Ma("finalized")] = /* @__PURE__ */ new Map(), ki == null || ki({ ReactiveElement: jr }), (vr.reactiveElementVersions ?? (vr.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ia = globalThis, Hn = Ia.trustedTypes, vu = Hn ? Hn.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Xc = "$lit$", or = `lit$${Math.random().toFixed(9).slice(2)}$`, Yc = "?" + or, vd = `<${Yc}>`, Or = document, Va = () => Or.createComment(""), $a = (r) => r === null || typeof r != "object" && typeof r != "function", Lo = Array.isArray, fd = (r) => Lo(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", Di = `[ 	
\f\r]`, Ea = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, fu = /-->/g, du = />/g, Ar = RegExp(`>|${Di}(?:([^\\s"'>=/]+)(${Di}*=${Di}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), hu = /'/g, gu = /"/g, Zc = /^(?:script|style|textarea|title)$/i, Qc = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ht = Qc(1), Ue = Qc(2), ua = Symbol.for("lit-noChange"), ut = Symbol.for("lit-nothing"), pu = /* @__PURE__ */ new WeakMap(), Mr = Or.createTreeWalker(Or, 129);
function Jc(r, e) {
  if (!Lo(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return vu !== void 0 ? vu.createHTML(e) : e;
}
const dd = (r, e) => {
  const t = r.length - 1, a = [];
  let n, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = Ea;
  for (let o = 0; o < t; o++) {
    const u = r[o];
    let l, c, v = -1, f = 0;
    for (; f < u.length && (s.lastIndex = f, c = s.exec(u), c !== null); )
      f = s.lastIndex, s === Ea ? c[1] === "!--" ? s = fu : c[1] !== void 0 ? s = du : c[2] !== void 0 ? (Zc.test(c[2]) && (n = RegExp("</" + c[2], "g")), s = Ar) : c[3] !== void 0 && (s = Ar) : s === Ar ? c[0] === ">" ? (s = n ?? Ea, v = -1) : c[1] === void 0 ? v = -2 : (v = s.lastIndex - c[2].length, l = c[1], s = c[3] === void 0 ? Ar : c[3] === '"' ? gu : hu) : s === gu || s === hu ? s = Ar : s === fu || s === du ? s = Ea : (s = Ar, n = void 0);
    const h = s === Ar && r[o + 1].startsWith("/>") ? " " : "";
    i += s === Ea ? u + vd : v >= 0 ? (a.push(l), u.slice(0, v) + Xc + u.slice(v) + or + h) : u + or + (v === -2 ? o : h);
  }
  return [Jc(r, i + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), a];
};
class _a {
  constructor({ strings: e, _$litType$: t }, a) {
    let n;
    this.parts = [];
    let i = 0, s = 0;
    const o = e.length - 1, u = this.parts, [l, c] = dd(e, t);
    if (this.el = _a.createElement(l, a), Mr.currentNode = this.el.content, t === 2 || t === 3) {
      const v = this.el.content.firstChild;
      v.replaceWith(...v.childNodes);
    }
    for (; (n = Mr.nextNode()) !== null && u.length < o; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes())
          for (const v of n.getAttributeNames())
            if (v.endsWith(Xc)) {
              const f = c[s++], h = n.getAttribute(v).split(or), d = /([.?@])?(.*)/.exec(f);
              u.push({ type: 1, index: i, name: d[2], strings: h, ctor: d[1] === "." ? gd : d[1] === "?" ? pd : d[1] === "@" ? yd : ni }), n.removeAttribute(v);
            } else
              v.startsWith(or) && (u.push({ type: 6, index: i }), n.removeAttribute(v));
        if (Zc.test(n.tagName)) {
          const v = n.textContent.split(or), f = v.length - 1;
          if (f > 0) {
            n.textContent = Hn ? Hn.emptyScript : "";
            for (let h = 0; h < f; h++)
              n.append(v[h], Va()), Mr.nextNode(), u.push({ type: 2, index: ++i });
            n.append(v[f], Va());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === Yc)
          u.push({ type: 2, index: i });
        else {
          let v = -1;
          for (; (v = n.data.indexOf(or, v + 1)) !== -1; )
            u.push({ type: 7, index: i }), v += or.length - 1;
        }
      i++;
    }
  }
  static createElement(e, t) {
    const a = Or.createElement("template");
    return a.innerHTML = e, a;
  }
}
function la(r, e, t = r, a) {
  var s, o;
  if (e === ua)
    return e;
  let n = a !== void 0 ? (s = t._$Co) == null ? void 0 : s[a] : t._$Cl;
  const i = $a(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== i && ((o = n == null ? void 0 : n._$AO) == null || o.call(n, !1), i === void 0 ? n = void 0 : (n = new i(r), n._$AT(r, t, a)), a !== void 0 ? (t._$Co ?? (t._$Co = []))[a] = n : t._$Cl = n), n !== void 0 && (e = la(r, n._$AS(r, e.values), n, a)), e;
}
class hd {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: a } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? Or).importNode(t, !0);
    Mr.currentNode = n;
    let i = Mr.nextNode(), s = 0, o = 0, u = a[0];
    for (; u !== void 0; ) {
      if (s === u.index) {
        let l;
        u.type === 2 ? l = new Ja(i, i.nextSibling, this, e) : u.type === 1 ? l = new u.ctor(i, u.name, u.strings, this, e) : u.type === 6 && (l = new md(i, this, e)), this._$AV.push(l), u = a[++o];
      }
      s !== (u == null ? void 0 : u.index) && (i = Mr.nextNode(), s++);
    }
    return Mr.currentNode = Or, n;
  }
  p(e) {
    let t = 0;
    for (const a of this._$AV)
      a !== void 0 && (a.strings !== void 0 ? (a._$AI(e, a, t), t += a.strings.length - 2) : a._$AI(e[t])), t++;
  }
}
class Ja {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, a, n) {
    this.type = 2, this._$AH = ut, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = a, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = la(this, e, t), $a(e) ? e === ut || e == null || e === "" ? (this._$AH !== ut && this._$AR(), this._$AH = ut) : e !== this._$AH && e !== ua && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : fd(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== ut && $a(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Or.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var i;
    const { values: t, _$litType$: a } = e, n = typeof a == "number" ? this._$AC(e) : (a.el === void 0 && (a.el = _a.createElement(Jc(a.h, a.h[0]), this.options)), a);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === n)
      this._$AH.p(t);
    else {
      const s = new hd(n, this), o = s.u(this.options);
      s.p(t), this.T(o), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = pu.get(e.strings);
    return t === void 0 && pu.set(e.strings, t = new _a(e)), t;
  }
  k(e) {
    Lo(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let a, n = 0;
    for (const i of e)
      n === t.length ? t.push(a = new Ja(this.O(Va()), this.O(Va()), this, this.options)) : a = t[n], a._$AI(i), n++;
    n < t.length && (this._$AR(a && a._$AB.nextSibling, n), t.length = n);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var a;
    for ((a = this._$AP) == null ? void 0 : a.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const n = e.nextSibling;
      e.remove(), e = n;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ni {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, a, n, i) {
    this.type = 1, this._$AH = ut, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = i, a.length > 2 || a[0] !== "" || a[1] !== "" ? (this._$AH = Array(a.length - 1).fill(new String()), this.strings = a) : this._$AH = ut;
  }
  _$AI(e, t = this, a, n) {
    const i = this.strings;
    let s = !1;
    if (i === void 0)
      e = la(this, e, t, 0), s = !$a(e) || e !== this._$AH && e !== ua, s && (this._$AH = e);
    else {
      const o = e;
      let u, l;
      for (e = i[0], u = 0; u < i.length - 1; u++)
        l = la(this, o[a + u], t, u), l === ua && (l = this._$AH[u]), s || (s = !$a(l) || l !== this._$AH[u]), l === ut ? e = ut : e !== ut && (e += (l ?? "") + i[u + 1]), this._$AH[u] = l;
    }
    s && !n && this.j(e);
  }
  j(e) {
    e === ut ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class gd extends ni {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === ut ? void 0 : e;
  }
}
class pd extends ni {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== ut);
  }
}
class yd extends ni {
  constructor(e, t, a, n, i) {
    super(e, t, a, n, i), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = la(this, e, t, 0) ?? ut) === ua)
      return;
    const a = this._$AH, n = e === ut && a !== ut || e.capture !== a.capture || e.once !== a.once || e.passive !== a.passive, i = e !== ut && (a === ut || n);
    n && this.element.removeEventListener(this.name, this, a), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class md {
  constructor(e, t, a) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = a;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    la(this, e);
  }
}
const Bi = Ia.litHtmlPolyfillSupport;
Bi == null || Bi(_a, Ja), (Ia.litHtmlVersions ?? (Ia.litHtmlVersions = [])).push("3.2.1");
const bd = (r, e, t) => {
  const a = (t == null ? void 0 : t.renderBefore) ?? e;
  let n = a._$litPart$;
  if (n === void 0) {
    const i = (t == null ? void 0 : t.renderBefore) ?? null;
    a._$litPart$ = n = new Ja(e.insertBefore(Va(), i), i, void 0, t ?? {});
  }
  return n._$AI(r), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Oa = class extends jr {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = bd(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return ua;
  }
};
var Wc;
Oa._$litElement$ = !0, Oa.finalized = !0, (Wc = globalThis.litElementHydrateSupport) == null || Wc.call(globalThis, { LitElement: Oa });
const Pi = globalThis.litElementPolyfillSupport;
Pi == null || Pi({ LitElement: Oa });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wd = { attribute: !0, type: String, converter: qn, reflect: !1, hasChanged: Po }, xd = (r = wd, e, t) => {
  const { kind: a, metadata: n } = t;
  let i = globalThis.litPropertyMetadata.get(n);
  if (i === void 0 && globalThis.litPropertyMetadata.set(n, i = /* @__PURE__ */ new Map()), i.set(t.name, r), a === "accessor") {
    const { name: s } = t;
    return { set(o) {
      const u = e.get.call(this);
      e.set.call(this, o), this.requestUpdate(s, u, r);
    }, init(o) {
      return o !== void 0 && this.P(s, void 0, r), o;
    } };
  }
  if (a === "setter") {
    const { name: s } = t;
    return function(o) {
      const u = this[s];
      e.call(this, o), this.requestUpdate(s, u, r);
    };
  }
  throw Error("Unsupported decorator location: " + a);
};
function ii(r) {
  return (e, t) => typeof t == "object" ? xd(r, e, t) : ((a, n, i) => {
    const s = n.hasOwnProperty(i);
    return n.constructor.createProperty(i, s ? { ...a, wrapped: !0 } : a), s ? Object.getOwnPropertyDescriptor(n, i) : void 0;
  })(r, e, t);
}
function oo(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, a = Array(e); t < e; t++)
    a[t] = r[t];
  return a;
}
function Ed(r) {
  if (Array.isArray(r))
    return r;
}
function Cd(r) {
  if (Array.isArray(r))
    return oo(r);
}
function wr(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Td(r, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(r, ev(a.key), a);
  }
}
function xr(r, e, t) {
  return e && Td(r.prototype, e), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Bt(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = Ro(r)) || e) {
      t && (r = t);
      var a = 0, n = function() {
      };
      return {
        s: n,
        n: function() {
          return a >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[a++]
          };
        },
        e: function(u) {
          throw u;
        },
        f: n
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i, s = !0, o = !1;
  return {
    s: function() {
      t = t.call(r);
    },
    n: function() {
      var u = t.next();
      return s = u.done, u;
    },
    e: function(u) {
      o = !0, i = u;
    },
    f: function() {
      try {
        s || t.return == null || t.return();
      } finally {
        if (o)
          throw i;
      }
    }
  };
}
function jc(r, e, t) {
  return (e = ev(e)) in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function Sd(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function Ad(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var a, n, i, s, o = [], u = !0, l = !1;
    try {
      if (i = (t = t.call(r)).next, e === 0) {
        if (Object(t) !== t)
          return;
        u = !1;
      } else
        for (; !(u = (a = i.call(t)).done) && (o.push(a.value), o.length !== e); u = !0)
          ;
    } catch (c) {
      l = !0, n = c;
    } finally {
      try {
        if (!u && t.return != null && (s = t.return(), Object(s) !== s))
          return;
      } finally {
        if (l)
          throw n;
      }
    }
    return o;
  }
}
function kd() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function je(r, e) {
  return Ed(r) || Ad(r, e) || Ro(r, e) || kd();
}
function Un(r) {
  return Cd(r) || Sd(r) || Ro(r) || Dd();
}
function Bd(r, e) {
  if (typeof r != "object" || !r)
    return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var a = t.call(r, e);
    if (typeof a != "object")
      return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function ev(r) {
  var e = Bd(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function nt(r) {
  "@babel/helpers - typeof";
  return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, nt(r);
}
function Ro(r, e) {
  if (r) {
    if (typeof r == "string")
      return oo(r, e);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? oo(r, e) : void 0;
  }
}
var rt = typeof window > "u" ? null : window, yu = rt ? rt.navigator : null;
rt && rt.document;
var Pd = nt(""), tv = nt({}), Ld = nt(function() {
}), Rd = typeof HTMLElement > "u" ? "undefined" : nt(HTMLElement), ja = function(e) {
  return e && e.instanceString && Ke(e.instanceString) ? e.instanceString() : null;
}, ge = function(e) {
  return e != null && nt(e) == Pd;
}, Ke = function(e) {
  return e != null && nt(e) === Ld;
}, _e = function(e) {
  return !Pt(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, Me = function(e) {
  return e != null && nt(e) === tv && !_e(e) && e.constructor === Object;
}, Md = function(e) {
  return e != null && nt(e) === tv;
}, ne = function(e) {
  return e != null && nt(e) === nt(1) && !isNaN(e);
}, Id = function(e) {
  return ne(e) && Math.floor(e) === e;
}, Gn = function(e) {
  if (Rd !== "undefined")
    return e != null && e instanceof HTMLElement;
}, Pt = function(e) {
  return en(e) || rv(e);
}, en = function(e) {
  return ja(e) === "collection" && e._private.single;
}, rv = function(e) {
  return ja(e) === "collection" && !e._private.single;
}, Mo = function(e) {
  return ja(e) === "core";
}, av = function(e) {
  return ja(e) === "stylesheet";
}, Od = function(e) {
  return ja(e) === "event";
}, hr = function(e) {
  return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
}, Nd = function(e) {
  return typeof HTMLElement > "u" ? !1 : e instanceof HTMLElement;
}, zd = function(e) {
  return Me(e) && ne(e.x1) && ne(e.x2) && ne(e.y1) && ne(e.y2);
}, Fd = function(e) {
  return Md(e) && Ke(e.then);
}, Vd = function() {
  return yu && yu.userAgent.match(/msie|trident|edge/i);
}, ca = function(e, t) {
  t || (t = function() {
    if (arguments.length === 1)
      return arguments[0];
    if (arguments.length === 0)
      return "undefined";
    for (var i = [], s = 0; s < arguments.length; s++)
      i.push(arguments[s]);
    return i.join("$");
  });
  var a = function() {
    var i = this, s = arguments, o, u = t.apply(i, s), l = a.cache;
    return (o = l[u]) || (o = l[u] = e.apply(i, s)), o;
  };
  return a.cache = {}, a;
}, Io = ca(function(r) {
  return r.replace(/([A-Z])/g, function(e) {
    return "-" + e.toLowerCase();
  });
}), si = ca(function(r) {
  return r.replace(/(-\w)/g, function(e) {
    return e[1].toUpperCase();
  });
}), nv = ca(function(r, e) {
  return r + e[0].toUpperCase() + e.substring(1);
}, function(r, e) {
  return r + "$" + e;
}), mu = function(e) {
  return hr(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, ur = function(e, t) {
  return e.slice(-1 * t.length) === t;
}, at = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", $d = "rgb[a]?\\((" + at + "[%]?)\\s*,\\s*(" + at + "[%]?)\\s*,\\s*(" + at + "[%]?)(?:\\s*,\\s*(" + at + "))?\\)", _d = "rgb[a]?\\((?:" + at + "[%]?)\\s*,\\s*(?:" + at + "[%]?)\\s*,\\s*(?:" + at + "[%]?)(?:\\s*,\\s*(?:" + at + "))?\\)", qd = "hsl[a]?\\((" + at + ")\\s*,\\s*(" + at + "[%])\\s*,\\s*(" + at + "[%])(?:\\s*,\\s*(" + at + "))?\\)", Hd = "hsl[a]?\\((?:" + at + ")\\s*,\\s*(?:" + at + "[%])\\s*,\\s*(?:" + at + "[%])(?:\\s*,\\s*(?:" + at + "))?\\)", Ud = "\\#[0-9a-fA-F]{3}", Gd = "\\#[0-9a-fA-F]{6}", iv = function(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}, Wd = function(e, t) {
  return -1 * iv(e, t);
}, be = Object.assign != null ? Object.assign.bind(Object) : function(r) {
  for (var e = arguments, t = 1; t < e.length; t++) {
    var a = e[t];
    if (a != null)
      for (var n = Object.keys(a), i = 0; i < n.length; i++) {
        var s = n[i];
        r[s] = a[s];
      }
  }
  return r;
}, Kd = function(e) {
  if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
    var t = e.length === 4, a, n, i, s = 16;
    return t ? (a = parseInt(e[1] + e[1], s), n = parseInt(e[2] + e[2], s), i = parseInt(e[3] + e[3], s)) : (a = parseInt(e[1] + e[2], s), n = parseInt(e[3] + e[4], s), i = parseInt(e[5] + e[6], s)), [a, n, i];
  }
}, Xd = function(e) {
  var t, a, n, i, s, o, u, l;
  function c(d, y, g) {
    return g < 0 && (g += 1), g > 1 && (g -= 1), g < 1 / 6 ? d + (y - d) * 6 * g : g < 1 / 2 ? y : g < 2 / 3 ? d + (y - d) * (2 / 3 - g) * 6 : d;
  }
  var v = new RegExp("^" + qd + "$").exec(e);
  if (v) {
    if (a = parseInt(v[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = parseFloat(v[2]), n < 0 || n > 100 || (n = n / 100, i = parseFloat(v[3]), i < 0 || i > 100) || (i = i / 100, s = v[4], s !== void 0 && (s = parseFloat(s), s < 0 || s > 1)))
      return;
    if (n === 0)
      o = u = l = Math.round(i * 255);
    else {
      var f = i < 0.5 ? i * (1 + n) : i + n - i * n, h = 2 * i - f;
      o = Math.round(255 * c(h, f, a + 1 / 3)), u = Math.round(255 * c(h, f, a)), l = Math.round(255 * c(h, f, a - 1 / 3));
    }
    t = [o, u, l, s];
  }
  return t;
}, Yd = function(e) {
  var t, a = new RegExp("^" + $d + "$").exec(e);
  if (a) {
    t = [];
    for (var n = [], i = 1; i <= 3; i++) {
      var s = a[i];
      if (s[s.length - 1] === "%" && (n[i] = !0), s = parseFloat(s), n[i] && (s = s / 100 * 255), s < 0 || s > 255)
        return;
      t.push(Math.floor(s));
    }
    var o = n[1] || n[2] || n[3], u = n[1] && n[2] && n[3];
    if (o && !u)
      return;
    var l = a[4];
    if (l !== void 0) {
      if (l = parseFloat(l), l < 0 || l > 1)
        return;
      t.push(l);
    }
  }
  return t;
}, Zd = function(e) {
  return Qd[e.toLowerCase()];
}, sv = function(e) {
  return (_e(e) ? e : null) || Zd(e) || Kd(e) || Yd(e) || Xd(e);
}, Qd = {
  // special colour names
  transparent: [0, 0, 0, 0],
  // NB alpha === 0
  // regular colours
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 134, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 250, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  grey: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 221],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [112, 128, 144],
  slategrey: [112, 128, 144],
  snow: [255, 250, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 50]
}, ov = function(e) {
  for (var t = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var s = a[i];
    if (Me(s))
      throw Error("Tried to set map with object key");
    i < a.length - 1 ? (t[s] == null && (t[s] = {}), t = t[s]) : t[s] = e.value;
  }
}, uv = function(e) {
  for (var t = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var s = a[i];
    if (Me(s))
      throw Error("Tried to get map with object key");
    if (t = t[s], t == null)
      return t;
  }
  return t;
}, pn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tn(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Li, bu;
function rn() {
  if (bu)
    return Li;
  bu = 1;
  function r(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  return Li = r, Li;
}
var Ri, wu;
function Jd() {
  if (wu)
    return Ri;
  wu = 1;
  var r = typeof pn == "object" && pn && pn.Object === Object && pn;
  return Ri = r, Ri;
}
var Mi, xu;
function oi() {
  if (xu)
    return Mi;
  xu = 1;
  var r = Jd(), e = typeof self == "object" && self && self.Object === Object && self, t = r || e || Function("return this")();
  return Mi = t, Mi;
}
var Ii, Eu;
function jd() {
  if (Eu)
    return Ii;
  Eu = 1;
  var r = oi(), e = function() {
    return r.Date.now();
  };
  return Ii = e, Ii;
}
var Oi, Cu;
function eh() {
  if (Cu)
    return Oi;
  Cu = 1;
  var r = /\s/;
  function e(t) {
    for (var a = t.length; a-- && r.test(t.charAt(a)); )
      ;
    return a;
  }
  return Oi = e, Oi;
}
var Ni, Tu;
function th() {
  if (Tu)
    return Ni;
  Tu = 1;
  var r = eh(), e = /^\s+/;
  function t(a) {
    return a && a.slice(0, r(a) + 1).replace(e, "");
  }
  return Ni = t, Ni;
}
var zi, Su;
function Oo() {
  if (Su)
    return zi;
  Su = 1;
  var r = oi(), e = r.Symbol;
  return zi = e, zi;
}
var Fi, Au;
function rh() {
  if (Au)
    return Fi;
  Au = 1;
  var r = Oo(), e = Object.prototype, t = e.hasOwnProperty, a = e.toString, n = r ? r.toStringTag : void 0;
  function i(s) {
    var o = t.call(s, n), u = s[n];
    try {
      s[n] = void 0;
      var l = !0;
    } catch {
    }
    var c = a.call(s);
    return l && (o ? s[n] = u : delete s[n]), c;
  }
  return Fi = i, Fi;
}
var Vi, ku;
function ah() {
  if (ku)
    return Vi;
  ku = 1;
  var r = Object.prototype, e = r.toString;
  function t(a) {
    return e.call(a);
  }
  return Vi = t, Vi;
}
var $i, Du;
function lv() {
  if (Du)
    return $i;
  Du = 1;
  var r = Oo(), e = rh(), t = ah(), a = "[object Null]", n = "[object Undefined]", i = r ? r.toStringTag : void 0;
  function s(o) {
    return o == null ? o === void 0 ? n : a : i && i in Object(o) ? e(o) : t(o);
  }
  return $i = s, $i;
}
var _i, Bu;
function nh() {
  if (Bu)
    return _i;
  Bu = 1;
  function r(e) {
    return e != null && typeof e == "object";
  }
  return _i = r, _i;
}
var qi, Pu;
function an() {
  if (Pu)
    return qi;
  Pu = 1;
  var r = lv(), e = nh(), t = "[object Symbol]";
  function a(n) {
    return typeof n == "symbol" || e(n) && r(n) == t;
  }
  return qi = a, qi;
}
var Hi, Lu;
function ih() {
  if (Lu)
    return Hi;
  Lu = 1;
  var r = th(), e = rn(), t = an(), a = NaN, n = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, o = parseInt;
  function u(l) {
    if (typeof l == "number")
      return l;
    if (t(l))
      return a;
    if (e(l)) {
      var c = typeof l.valueOf == "function" ? l.valueOf() : l;
      l = e(c) ? c + "" : c;
    }
    if (typeof l != "string")
      return l === 0 ? l : +l;
    l = r(l);
    var v = i.test(l);
    return v || s.test(l) ? o(l.slice(2), v ? 2 : 8) : n.test(l) ? a : +l;
  }
  return Hi = u, Hi;
}
var Ui, Ru;
function sh() {
  if (Ru)
    return Ui;
  Ru = 1;
  var r = rn(), e = jd(), t = ih(), a = "Expected a function", n = Math.max, i = Math.min;
  function s(o, u, l) {
    var c, v, f, h, d, y, g = 0, p = !1, m = !1, b = !0;
    if (typeof o != "function")
      throw new TypeError(a);
    u = t(u) || 0, r(l) && (p = !!l.leading, m = "maxWait" in l, f = m ? n(t(l.maxWait) || 0, u) : f, b = "trailing" in l ? !!l.trailing : b);
    function w(P) {
      var L = c, M = v;
      return c = v = void 0, g = P, h = o.apply(M, L), h;
    }
    function E(P) {
      return g = P, d = setTimeout(T, u), p ? w(P) : h;
    }
    function C(P) {
      var L = P - y, M = P - g, I = u - L;
      return m ? i(I, f - M) : I;
    }
    function x(P) {
      var L = P - y, M = P - g;
      return y === void 0 || L >= u || L < 0 || m && M >= f;
    }
    function T() {
      var P = e();
      if (x(P))
        return A(P);
      d = setTimeout(T, C(P));
    }
    function A(P) {
      return d = void 0, b && c ? w(P) : (c = v = void 0, h);
    }
    function k() {
      d !== void 0 && clearTimeout(d), g = 0, c = y = v = d = void 0;
    }
    function D() {
      return d === void 0 ? h : A(e());
    }
    function B() {
      var P = e(), L = x(P);
      if (c = arguments, v = this, y = P, L) {
        if (d === void 0)
          return E(y);
        if (m)
          return clearTimeout(d), d = setTimeout(T, u), w(y);
      }
      return d === void 0 && (d = setTimeout(T, u)), h;
    }
    return B.cancel = k, B.flush = D, B;
  }
  return Ui = s, Ui;
}
var oh = sh(), nn = /* @__PURE__ */ tn(oh), Gi = rt ? rt.performance : null, cv = Gi && Gi.now ? function() {
  return Gi.now();
} : function() {
  return Date.now();
}, uh = function() {
  if (rt) {
    if (rt.requestAnimationFrame)
      return function(r) {
        rt.requestAnimationFrame(r);
      };
    if (rt.mozRequestAnimationFrame)
      return function(r) {
        rt.mozRequestAnimationFrame(r);
      };
    if (rt.webkitRequestAnimationFrame)
      return function(r) {
        rt.webkitRequestAnimationFrame(r);
      };
    if (rt.msRequestAnimationFrame)
      return function(r) {
        rt.msRequestAnimationFrame(r);
      };
  }
  return function(r) {
    r && setTimeout(function() {
      r(cv());
    }, 1e3 / 60);
  };
}(), Wn = function(e) {
  return uh(e);
}, jt = cv, Lr = 9261, vv = 65599, ea = 5381, fv = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lr, a = t, n; n = e.next(), !n.done; )
    a = a * vv + n.value | 0;
  return a;
}, qa = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lr;
  return t * vv + e | 0;
}, Ha = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ea;
  return (t << 5) + t + e | 0;
}, lh = function(e, t) {
  return e * 2097152 + t;
}, nr = function(e) {
  return e[0] * 2097152 + e[1];
}, yn = function(e, t) {
  return [qa(e[0], t[0]), Ha(e[1], t[1])];
}, Mu = function(e, t) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, s = {
    next: function() {
      return n < i ? a.value = e[n++] : a.done = !0, a;
    }
  };
  return fv(s, t);
}, Nr = function(e, t) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, s = {
    next: function() {
      return n < i ? a.value = e.charCodeAt(n++) : a.done = !0, a;
    }
  };
  return fv(s, t);
}, dv = function() {
  return ch(arguments);
}, ch = function(e) {
  for (var t, a = 0; a < e.length; a++) {
    var n = e[a];
    a === 0 ? t = Nr(n) : t = Nr(n, t);
  }
  return t;
};
function vh(r, e, t, a, n) {
  var i = n * Math.PI / 180, s = Math.cos(i) * (r - t) - Math.sin(i) * (e - a) + t, o = Math.sin(i) * (r - t) + Math.cos(i) * (e - a) + a;
  return {
    x: s,
    y: o
  };
}
var fh = function(e, t, a, n, i, s) {
  return {
    x: (e - a) * i + a,
    y: (t - n) * s + n
  };
};
function dh(r, e, t) {
  if (t === 0)
    return r;
  var a = (e.x1 + e.x2) / 2, n = (e.y1 + e.y2) / 2, i = e.w / e.h, s = 1 / i, o = vh(r.x, r.y, a, n, t), u = fh(o.x, o.y, a, n, i, s);
  return {
    x: u.x,
    y: u.y
  };
}
var Iu = !0, hh = console.warn != null, gh = console.trace != null, No = Number.MAX_SAFE_INTEGER || 9007199254740991, hv = function() {
  return !0;
}, Kn = function() {
  return !1;
}, Ou = function() {
  return 0;
}, zo = function() {
}, We = function(e) {
  throw new Error(e);
}, gv = function(e) {
  if (e !== void 0)
    Iu = !!e;
  else
    return Iu;
}, Ve = function(e) {
  gv() && (hh ? console.warn(e) : (console.log(e), gh && console.trace()));
}, ph = function(e) {
  return be({}, e);
}, Ut = function(e) {
  return e == null ? e : _e(e) ? e.slice() : Me(e) ? ph(e) : e;
}, yh = function(e) {
  return e.slice();
}, pv = function(e, t) {
  for (
    // loop :)
    t = e = "";
    // b - result , a - numeric letiable
    e++ < 36;
    //
    t += e * 51 & 52 ? (
      //  return a random number or 4
      (e ^ 15 ? (
        // generate a random number from 0 to 15
        8 ^ Math.random() * (e ^ 20 ? 16 : 4)
      ) : 4).toString(16)
    ) : "-"
  )
    ;
  return t;
}, mh = {}, yv = function() {
  return mh;
}, gt = function(e) {
  var t = Object.keys(e);
  return function(a) {
    for (var n = {}, i = 0; i < t.length; i++) {
      var s = t[i], o = a == null ? void 0 : a[s];
      n[s] = o === void 0 ? e[s] : o;
    }
    return n;
  };
}, gr = function(e, t, a) {
  for (var n = e.length - 1; n >= 0; n--)
    e[n] === t && e.splice(n, 1);
}, Fo = function(e) {
  e.splice(0, e.length);
}, bh = function(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    e.push(n);
  }
}, kt = function(e, t, a) {
  return a && (t = nv(a, t)), e[t];
}, Qt = function(e, t, a, n) {
  a && (t = nv(a, t)), e[t] = n;
}, wh = /* @__PURE__ */ function() {
  function r() {
    wr(this, r), this._obj = {};
  }
  return xr(r, [{
    key: "set",
    value: function(t, a) {
      return this._obj[t] = a, this;
    }
  }, {
    key: "delete",
    value: function(t) {
      return this._obj[t] = void 0, this;
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = {};
    }
  }, {
    key: "has",
    value: function(t) {
      return this._obj[t] !== void 0;
    }
  }, {
    key: "get",
    value: function(t) {
      return this._obj[t];
    }
  }]);
}(), Jt = typeof Map < "u" ? Map : wh, xh = "undefined", Eh = /* @__PURE__ */ function() {
  function r(e) {
    if (wr(this, r), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
      var t;
      e.instanceString != null && e.instanceString() === this.instanceString() ? t = e.toArray() : t = e;
      for (var a = 0; a < t.length; a++)
        this.add(t[a]);
    }
  }
  return xr(r, [{
    key: "instanceString",
    value: function() {
      return "set";
    }
  }, {
    key: "add",
    value: function(t) {
      var a = this._obj;
      a[t] !== 1 && (a[t] = 1, this.size++);
    }
  }, {
    key: "delete",
    value: function(t) {
      var a = this._obj;
      a[t] === 1 && (a[t] = 0, this.size--);
    }
  }, {
    key: "clear",
    value: function() {
      this._obj = /* @__PURE__ */ Object.create(null);
    }
  }, {
    key: "has",
    value: function(t) {
      return this._obj[t] === 1;
    }
  }, {
    key: "toArray",
    value: function() {
      var t = this;
      return Object.keys(this._obj).filter(function(a) {
        return t.has(a);
      });
    }
  }, {
    key: "forEach",
    value: function(t, a) {
      return this.toArray().forEach(t, a);
    }
  }]);
}(), da = (typeof Set > "u" ? "undefined" : nt(Set)) !== xh ? Set : Eh, ui = function(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (e === void 0 || t === void 0 || !Mo(e)) {
    We("An element must have a core reference and parameters set");
    return;
  }
  var n = t.group;
  if (n == null && (t.data && t.data.source != null && t.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
    We("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
    return;
  }
  this.length = 1, this[0] = this;
  var i = this._private = {
    cy: e,
    single: !0,
    // indicates this is an element
    data: t.data || {},
    // data object
    position: t.position || {
      x: 0,
      y: 0
    },
    // (x, y) position pair
    autoWidth: void 0,
    // width and height of nodes calculated by the renderer when set to special 'auto' value
    autoHeight: void 0,
    autoPadding: void 0,
    compoundBoundsClean: !1,
    // whether the compound dimensions need to be recalculated the next time dimensions are read
    listeners: [],
    // array of bound listeners
    group: n,
    // string; 'nodes' or 'edges'
    style: {},
    // properties as set by the style
    rstyle: {},
    // properties for style sent from the renderer to the core
    styleCxts: [],
    // applied style contexts from the styler
    styleKeys: {},
    // per-group keys of style property values
    removed: !0,
    // whether it's inside the vis; true if removed (set true here since we call restore)
    selected: !!t.selected,
    // whether it's selected
    selectable: t.selectable === void 0 ? !0 : !!t.selectable,
    // whether it's selectable
    locked: !!t.locked,
    // whether the element is locked (cannot be moved)
    grabbed: !1,
    // whether the element is grabbed by the mouse; renderer sets this privately
    grabbable: t.grabbable === void 0 ? !0 : !!t.grabbable,
    // whether the element can be grabbed
    pannable: t.pannable === void 0 ? n === "edges" : !!t.pannable,
    // whether the element has passthrough panning enabled
    active: !1,
    // whether the element is active from user interaction
    classes: new da(),
    // map ( className => true )
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    rscratch: {},
    // object in which the renderer can store information
    scratch: t.scratch || {},
    // scratch objects
    edges: [],
    // array of connected edges
    children: [],
    // array of children
    parent: t.parent && t.parent.isNode() ? t.parent : null,
    // parent ref
    traversalCache: {},
    // cache of output of traversal functions
    backgrounding: !1,
    // whether background images are loading
    bbCache: null,
    // cache of the current bounding box
    bbCacheShift: {
      x: 0,
      y: 0
    },
    // shift applied to cached bb to be applied on next get
    bodyBounds: null,
    // bounds cache of element body, w/o overlay
    overlayBounds: null,
    // bounds cache of element body, including overlay
    labelBounds: {
      // bounds cache of labels
      all: null,
      source: null,
      target: null,
      main: null
    },
    arrowBounds: {
      // bounds cache of edge arrows
      source: null,
      target: null,
      "mid-source": null,
      "mid-target": null
    }
  };
  if (i.position.x == null && (i.position.x = 0), i.position.y == null && (i.position.y = 0), t.renderedPosition) {
    var s = t.renderedPosition, o = e.pan(), u = e.zoom();
    i.position = {
      x: (s.x - o.x) / u,
      y: (s.y - o.y) / u
    };
  }
  var l = [];
  _e(t.classes) ? l = t.classes : ge(t.classes) && (l = t.classes.split(/\s+/));
  for (var c = 0, v = l.length; c < v; c++) {
    var f = l[c];
    !f || f === "" || i.classes.add(f);
  }
  this.createEmitter(), (a === void 0 || a) && this.restore();
  var h = t.style || t.css;
  h && (Ve("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(h));
}, Nu = function(e) {
  return e = {
    bfs: e.bfs || !e.dfs,
    dfs: e.dfs || !e.bfs
  }, function(a, n, i) {
    var s;
    Me(a) && !Pt(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !Ke(n) ? n : i, n = Ke(n) ? n : function() {
    };
    for (var o = this._private.cy, u = a = ge(a) ? this.filter(a) : a, l = [], c = [], v = {}, f = {}, h = {}, d = 0, y, g = this.byGroup(), p = g.nodes, m = g.edges, b = 0; b < u.length; b++) {
      var w = u[b], E = w.id();
      w.isNode() && (l.unshift(w), e.bfs && (h[E] = !0, c.push(w)), f[E] = 0);
    }
    for (var C = function() {
      var P = e.bfs ? l.shift() : l.pop(), L = P.id();
      if (e.dfs) {
        if (h[L])
          return 0;
        h[L] = !0, c.push(P);
      }
      var M = f[L], I = v[L], R = I != null ? I.source() : null, O = I != null ? I.target() : null, $ = I == null ? void 0 : P.same(R) ? O[0] : R[0], H;
      if (H = n(P, I, $, d++, M), H === !0)
        return y = P, 1;
      if (H === !1)
        return 1;
      for (var z = P.connectedEdges().filter(function(Q) {
        return (!i || Q.source().same(P)) && m.has(Q);
      }), F = 0; F < z.length; F++) {
        var U = z[F], Y = U.connectedNodes().filter(function(Q) {
          return !Q.same(P) && p.has(Q);
        }), G = Y.id();
        Y.length !== 0 && !h[G] && (Y = Y[0], l.push(Y), e.bfs && (h[G] = !0, c.push(Y)), v[G] = U, f[G] = f[L] + 1);
      }
    }, x; l.length !== 0 && (x = C(), !(x !== 0 && x === 1)); )
      ;
    for (var T = o.collection(), A = 0; A < c.length; A++) {
      var k = c[A], D = v[k.id()];
      D != null && T.push(D), T.push(k);
    }
    return {
      path: o.collection(T),
      found: o.collection(y)
    };
  };
}, Ua = {
  breadthFirstSearch: Nu({
    bfs: !0
  }),
  depthFirstSearch: Nu({
    dfs: !0
  })
};
Ua.bfs = Ua.breadthFirstSearch;
Ua.dfs = Ua.depthFirstSearch;
var Ln = { exports: {} }, Ch = Ln.exports, zu;
function Th() {
  return zu || (zu = 1, function(r, e) {
    (function() {
      var t, a, n, i, s, o, u, l, c, v, f, h, d, y, g;
      n = Math.floor, v = Math.min, a = function(p, m) {
        return p < m ? -1 : p > m ? 1 : 0;
      }, c = function(p, m, b, w, E) {
        var C;
        if (b == null && (b = 0), E == null && (E = a), b < 0)
          throw new Error("lo must be non-negative");
        for (w == null && (w = p.length); b < w; )
          C = n((b + w) / 2), E(m, p[C]) < 0 ? w = C : b = C + 1;
        return [].splice.apply(p, [b, b - b].concat(m)), m;
      }, o = function(p, m, b) {
        return b == null && (b = a), p.push(m), y(p, 0, p.length - 1, b);
      }, s = function(p, m) {
        var b, w;
        return m == null && (m = a), b = p.pop(), p.length ? (w = p[0], p[0] = b, g(p, 0, m)) : w = b, w;
      }, l = function(p, m, b) {
        var w;
        return b == null && (b = a), w = p[0], p[0] = m, g(p, 0, b), w;
      }, u = function(p, m, b) {
        var w;
        return b == null && (b = a), p.length && b(p[0], m) < 0 && (w = [p[0], m], m = w[0], p[0] = w[1], g(p, 0, b)), m;
      }, i = function(p, m) {
        var b, w, E, C, x, T;
        for (m == null && (m = a), C = (function() {
          T = [];
          for (var A = 0, k = n(p.length / 2); 0 <= k ? A < k : A > k; 0 <= k ? A++ : A--)
            T.push(A);
          return T;
        }).apply(this).reverse(), x = [], w = 0, E = C.length; w < E; w++)
          b = C[w], x.push(g(p, b, m));
        return x;
      }, d = function(p, m, b) {
        var w;
        if (b == null && (b = a), w = p.indexOf(m), w !== -1)
          return y(p, 0, w, b), g(p, w, b);
      }, f = function(p, m, b) {
        var w, E, C, x, T;
        if (b == null && (b = a), E = p.slice(0, m), !E.length)
          return E;
        for (i(E, b), T = p.slice(m), C = 0, x = T.length; C < x; C++)
          w = T[C], u(E, w, b);
        return E.sort(b).reverse();
      }, h = function(p, m, b) {
        var w, E, C, x, T, A, k, D, B;
        if (b == null && (b = a), m * 10 <= p.length) {
          if (C = p.slice(0, m).sort(b), !C.length)
            return C;
          for (E = C[C.length - 1], k = p.slice(m), x = 0, A = k.length; x < A; x++)
            w = k[x], b(w, E) < 0 && (c(C, w, 0, null, b), C.pop(), E = C[C.length - 1]);
          return C;
        }
        for (i(p, b), B = [], T = 0, D = v(m, p.length); 0 <= D ? T < D : T > D; 0 <= D ? ++T : --T)
          B.push(s(p, b));
        return B;
      }, y = function(p, m, b, w) {
        var E, C, x;
        for (w == null && (w = a), E = p[b]; b > m; ) {
          if (x = b - 1 >> 1, C = p[x], w(E, C) < 0) {
            p[b] = C, b = x;
            continue;
          }
          break;
        }
        return p[b] = E;
      }, g = function(p, m, b) {
        var w, E, C, x, T;
        for (b == null && (b = a), E = p.length, T = m, C = p[m], w = 2 * m + 1; w < E; )
          x = w + 1, x < E && !(b(p[w], p[x]) < 0) && (w = x), p[m] = p[w], m = w, w = 2 * m + 1;
        return p[m] = C, y(p, T, m, b);
      }, t = function() {
        p.push = o, p.pop = s, p.replace = l, p.pushpop = u, p.heapify = i, p.updateItem = d, p.nlargest = f, p.nsmallest = h;
        function p(m) {
          this.cmp = m ?? a, this.nodes = [];
        }
        return p.prototype.push = function(m) {
          return o(this.nodes, m, this.cmp);
        }, p.prototype.pop = function() {
          return s(this.nodes, this.cmp);
        }, p.prototype.peek = function() {
          return this.nodes[0];
        }, p.prototype.contains = function(m) {
          return this.nodes.indexOf(m) !== -1;
        }, p.prototype.replace = function(m) {
          return l(this.nodes, m, this.cmp);
        }, p.prototype.pushpop = function(m) {
          return u(this.nodes, m, this.cmp);
        }, p.prototype.heapify = function() {
          return i(this.nodes, this.cmp);
        }, p.prototype.updateItem = function(m) {
          return d(this.nodes, m, this.cmp);
        }, p.prototype.clear = function() {
          return this.nodes = [];
        }, p.prototype.empty = function() {
          return this.nodes.length === 0;
        }, p.prototype.size = function() {
          return this.nodes.length;
        }, p.prototype.clone = function() {
          var m;
          return m = new p(), m.nodes = this.nodes.slice(0), m;
        }, p.prototype.toArray = function() {
          return this.nodes.slice(0);
        }, p.prototype.insert = p.prototype.push, p.prototype.top = p.prototype.peek, p.prototype.front = p.prototype.peek, p.prototype.has = p.prototype.contains, p.prototype.copy = p.prototype.clone, p;
      }(), function(p, m) {
        return r.exports = m();
      }(this, function() {
        return t;
      });
    }).call(Ch);
  }(Ln)), Ln.exports;
}
var Wi, Fu;
function Sh() {
  return Fu || (Fu = 1, Wi = Th()), Wi;
}
var Ah = Sh(), sn = /* @__PURE__ */ tn(Ah), kh = gt({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1
}), Dh = {
  dijkstra: function(e) {
    if (!Me(e)) {
      var t = arguments;
      e = {
        root: t[0],
        weight: t[1],
        directed: t[2]
      };
    }
    var a = kh(e), n = a.root, i = a.weight, s = a.directed, o = this, u = i, l = ge(n) ? this.filter(n)[0] : n[0], c = {}, v = {}, f = {}, h = this.byGroup(), d = h.nodes, y = h.edges;
    y.unmergeBy(function(M) {
      return M.isLoop();
    });
    for (var g = function(I) {
      return c[I.id()];
    }, p = function(I, R) {
      c[I.id()] = R, m.updateItem(I);
    }, m = new sn(function(M, I) {
      return g(M) - g(I);
    }), b = 0; b < d.length; b++) {
      var w = d[b];
      c[w.id()] = w.same(l) ? 0 : 1 / 0, m.push(w);
    }
    for (var E = function(I, R) {
      for (var O = (s ? I.edgesTo(R) : I.edgesWith(R)).intersect(y), $ = 1 / 0, H, z = 0; z < O.length; z++) {
        var F = O[z], U = u(F);
        (U < $ || !H) && ($ = U, H = F);
      }
      return {
        edge: H,
        dist: $
      };
    }; m.size() > 0; ) {
      var C = m.pop(), x = g(C), T = C.id();
      if (f[T] = x, x !== 1 / 0)
        for (var A = C.neighborhood().intersect(d), k = 0; k < A.length; k++) {
          var D = A[k], B = D.id(), P = E(C, D), L = x + P.dist;
          L < g(D) && (p(D, L), v[B] = {
            node: C,
            edge: P.edge
          });
        }
    }
    return {
      distanceTo: function(I) {
        var R = ge(I) ? d.filter(I)[0] : I[0];
        return f[R.id()];
      },
      pathTo: function(I) {
        var R = ge(I) ? d.filter(I)[0] : I[0], O = [], $ = R, H = $.id();
        if (R.length > 0)
          for (O.unshift(R); v[H]; ) {
            var z = v[H];
            O.unshift(z.edge), O.unshift(z.node), $ = z.node, H = $.id();
          }
        return o.spawn(O);
      }
    };
  }
}, Bh = {
  // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
  // implemented from pseudocode from wikipedia
  kruskal: function(e) {
    e = e || function(b) {
      return 1;
    };
    for (var t = this.byGroup(), a = t.nodes, n = t.edges, i = a.length, s = new Array(i), o = a, u = function(w) {
      for (var E = 0; E < s.length; E++) {
        var C = s[E];
        if (C.has(w))
          return E;
      }
    }, l = 0; l < i; l++)
      s[l] = this.spawn(a[l]);
    for (var c = n.sort(function(b, w) {
      return e(b) - e(w);
    }), v = 0; v < c.length; v++) {
      var f = c[v], h = f.source()[0], d = f.target()[0], y = u(h), g = u(d), p = s[y], m = s[g];
      y !== g && (o.merge(f), p.merge(m), s.splice(g, 1));
    }
    return o;
  }
}, Ph = gt({
  root: null,
  goal: null,
  weight: function(e) {
    return 1;
  },
  heuristic: function(e) {
    return 0;
  },
  directed: !1
}), Lh = {
  // Implemented from pseudocode from wikipedia
  aStar: function(e) {
    var t = this.cy(), a = Ph(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, u = a.weight;
    n = t.collection(n)[0], i = t.collection(i)[0];
    var l = n.id(), c = i.id(), v = {}, f = {}, h = {}, d = new sn(function(H, z) {
      return f[H.id()] - f[z.id()];
    }), y = new da(), g = {}, p = {}, m = function(z, F) {
      d.push(z), y.add(F);
    }, b, w, E = function() {
      b = d.pop(), w = b.id(), y.delete(w);
    }, C = function(z) {
      return y.has(z);
    };
    m(n, l), v[l] = 0, f[l] = s(n);
    for (var x = 0; d.size() > 0; ) {
      if (E(), x++, w === c) {
        for (var T = [], A = i, k = c, D = p[k]; T.unshift(A), D != null && T.unshift(D), A = g[k], A != null; )
          k = A.id(), D = p[k];
        return {
          found: !0,
          distance: v[w],
          path: this.spawn(T),
          steps: x
        };
      }
      h[w] = !0;
      for (var B = b._private.edges, P = 0; P < B.length; P++) {
        var L = B[P];
        if (this.hasElementWithId(L.id()) && !(o && L.data("source") !== w)) {
          var M = L.source(), I = L.target(), R = M.id() !== w ? M : I, O = R.id();
          if (this.hasElementWithId(O) && !h[O]) {
            var $ = v[w] + u(L);
            if (!C(O)) {
              v[O] = $, f[O] = $ + s(R), m(R, O), g[O] = b, p[O] = L;
              continue;
            }
            $ < v[O] && (v[O] = $, f[O] = $ + s(R), g[O] = b, p[O] = L);
          }
        }
      }
    }
    return {
      found: !1,
      distance: void 0,
      path: void 0,
      steps: x
    };
  }
}, Rh = gt({
  weight: function(e) {
    return 1;
  },
  directed: !1
}), Mh = {
  // Implemented from pseudocode from wikipedia
  floydWarshall: function(e) {
    for (var t = this.cy(), a = Rh(e), n = a.weight, i = a.directed, s = n, o = this.byGroup(), u = o.nodes, l = o.edges, c = u.length, v = c * c, f = function(U) {
      return u.indexOf(U);
    }, h = function(U) {
      return u[U];
    }, d = new Array(v), y = 0; y < v; y++) {
      var g = y % c, p = (y - g) / c;
      p === g ? d[y] = 0 : d[y] = 1 / 0;
    }
    for (var m = new Array(v), b = new Array(v), w = 0; w < l.length; w++) {
      var E = l[w], C = E.source()[0], x = E.target()[0];
      if (C !== x) {
        var T = f(C), A = f(x), k = T * c + A, D = s(E);
        if (d[k] > D && (d[k] = D, m[k] = A, b[k] = E), !i) {
          var B = A * c + T;
          !i && d[B] > D && (d[B] = D, m[B] = T, b[B] = E);
        }
      }
    }
    for (var P = 0; P < c; P++)
      for (var L = 0; L < c; L++)
        for (var M = L * c + P, I = 0; I < c; I++) {
          var R = L * c + I, O = P * c + I;
          d[M] + d[O] < d[R] && (d[R] = d[M] + d[O], m[R] = m[M]);
        }
    var $ = function(U) {
      return (ge(U) ? t.filter(U) : U)[0];
    }, H = function(U) {
      return f($(U));
    }, z = {
      distance: function(U, Y) {
        var G = H(U), Q = H(Y);
        return d[G * c + Q];
      },
      path: function(U, Y) {
        var G = H(U), Q = H(Y), J = h(G);
        if (G === Q)
          return J.collection();
        if (m[G * c + Q] == null)
          return t.collection();
        var ae = t.collection(), W = G, N;
        for (ae.merge(J); G !== Q; )
          W = G, G = m[G * c + Q], N = b[W * c + G], ae.merge(N), ae.merge(h(G));
        return ae;
      }
    };
    return z;
  }
  // floydWarshall
}, Ih = gt({
  weight: function(e) {
    return 1;
  },
  directed: !1,
  root: null
}), Oh = {
  // Implemented from pseudocode from wikipedia
  bellmanFord: function(e) {
    var t = this, a = Ih(e), n = a.weight, i = a.directed, s = a.root, o = n, u = this, l = this.cy(), c = this.byGroup(), v = c.edges, f = c.nodes, h = f.length, d = new Jt(), y = !1, g = [];
    s = l.collection(s)[0], v.unmergeBy(function(Ce) {
      return Ce.isLoop();
    });
    for (var p = v.length, m = function(we) {
      var ye = d.get(we.id());
      return ye || (ye = {}, d.set(we.id(), ye)), ye;
    }, b = function(we) {
      return (ge(we) ? l.$(we) : we)[0];
    }, w = function(we) {
      return m(b(we)).dist;
    }, E = function(we) {
      for (var ye = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, ie = b(we), de = [], he = ie; ; ) {
        if (he == null)
          return t.spawn();
        var Ee = m(he), pe = Ee.edge, Ae = Ee.pred;
        if (de.unshift(he[0]), he.same(ye) && de.length > 0)
          break;
        pe != null && de.unshift(pe), he = Ae;
      }
      return u.spawn(de);
    }, C = 0; C < h; C++) {
      var x = f[C], T = m(x);
      x.same(s) ? T.dist = 0 : T.dist = 1 / 0, T.pred = null, T.edge = null;
    }
    for (var A = !1, k = function(we, ye, ie, de, he, Ee) {
      var pe = de.dist + Ee;
      pe < he.dist && !ie.same(de.edge) && (he.dist = pe, he.pred = we, he.edge = ie, A = !0);
    }, D = 1; D < h; D++) {
      A = !1;
      for (var B = 0; B < p; B++) {
        var P = v[B], L = P.source(), M = P.target(), I = o(P), R = m(L), O = m(M);
        k(L, M, P, R, O, I), i || k(M, L, P, O, R, I);
      }
      if (!A)
        break;
    }
    if (A)
      for (var $ = [], H = 0; H < p; H++) {
        var z = v[H], F = z.source(), U = z.target(), Y = o(z), G = m(F).dist, Q = m(U).dist;
        if (G + Y < Q || !i && Q + Y < G)
          if (y || (Ve("Graph contains a negative weight cycle for Bellman-Ford"), y = !0), e.findNegativeWeightCycles !== !1) {
            var J = [];
            G + Y < Q && J.push(F), !i && Q + Y < G && J.push(U);
            for (var ae = J.length, W = 0; W < ae; W++) {
              var N = J[W], V = [N];
              V.push(m(N).edge);
              for (var _ = m(N).pred; V.indexOf(_) === -1; )
                V.push(_), V.push(m(_).edge), _ = m(_).pred;
              V = V.slice(V.indexOf(_));
              for (var K = V[0].id(), re = 0, se = 2; se < V.length; se += 2)
                V[se].id() < K && (K = V[se].id(), re = se);
              V = V.slice(re).concat(V.slice(0, re)), V.push(V[0]);
              var Te = V.map(function(Ce) {
                return Ce.id();
              }).join(",");
              $.indexOf(Te) === -1 && (g.push(u.spawn(V)), $.push(Te));
            }
          } else
            break;
      }
    return {
      distanceTo: w,
      pathTo: E,
      hasNegativeWeightCycle: y,
      negativeWeightCycles: g
    };
  }
  // bellmanFord
}, Nh = Math.sqrt(2), zh = function(e, t, a) {
  a.length === 0 && We("Karger-Stein must be run on a connected (sub)graph");
  for (var n = a[e], i = n[1], s = n[2], o = t[i], u = t[s], l = a, c = l.length - 1; c >= 0; c--) {
    var v = l[c], f = v[1], h = v[2];
    (t[f] === o && t[h] === u || t[f] === u && t[h] === o) && l.splice(c, 1);
  }
  for (var d = 0; d < l.length; d++) {
    var y = l[d];
    y[1] === u ? (l[d] = y.slice(), l[d][1] = o) : y[2] === u && (l[d] = y.slice(), l[d][2] = o);
  }
  for (var g = 0; g < t.length; g++)
    t[g] === u && (t[g] = o);
  return l;
}, Ki = function(e, t, a, n) {
  for (; a > n; ) {
    var i = Math.floor(Math.random() * t.length);
    t = zh(i, e, t), a--;
  }
  return t;
}, Fh = {
  // Computes the minimum cut of an undirected graph
  // Returns the correct answer with high probability
  kargerStein: function() {
    var e = this, t = this.byGroup(), a = t.nodes, n = t.edges;
    n.unmergeBy(function(O) {
      return O.isLoop();
    });
    var i = a.length, s = n.length, o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), u = Math.floor(i / Nh);
    if (i < 2) {
      We("At least 2 nodes are required for Karger-Stein algorithm");
      return;
    }
    for (var l = [], c = 0; c < s; c++) {
      var v = n[c];
      l.push([c, a.indexOf(v.source()), a.indexOf(v.target())]);
    }
    for (var f = 1 / 0, h = [], d = new Array(i), y = new Array(i), g = new Array(i), p = function($, H) {
      for (var z = 0; z < i; z++)
        H[z] = $[z];
    }, m = 0; m <= o; m++) {
      for (var b = 0; b < i; b++)
        y[b] = b;
      var w = Ki(y, l.slice(), i, u), E = w.slice();
      p(y, g);
      var C = Ki(y, w, u, 2), x = Ki(g, E, u, 2);
      C.length <= x.length && C.length < f ? (f = C.length, h = C, p(y, d)) : x.length <= C.length && x.length < f && (f = x.length, h = x, p(g, d));
    }
    for (var T = this.spawn(h.map(function(O) {
      return n[O[0]];
    })), A = this.spawn(), k = this.spawn(), D = d[0], B = 0; B < d.length; B++) {
      var P = d[B], L = a[B];
      P === D ? A.merge(L) : k.merge(L);
    }
    var M = function($) {
      var H = e.spawn();
      return $.forEach(function(z) {
        H.merge(z), z.connectedEdges().forEach(function(F) {
          e.contains(F) && !T.contains(F) && H.merge(F);
        });
      }), H;
    }, I = [M(A), M(k)], R = {
      cut: T,
      components: I,
      // n.b. partitions are included to be compatible with the old api spec
      // (could be removed in a future major version)
      partition1: A,
      partition2: k
    };
    return R;
  }
}, Xi, Vh = function(e) {
  return {
    x: e.x,
    y: e.y
  };
}, li = function(e, t, a) {
  return {
    x: e.x * t + a.x,
    y: e.y * t + a.y
  };
}, mv = function(e, t, a) {
  return {
    x: (e.x - a.x) / t,
    y: (e.y - a.y) / t
  };
}, ta = function(e) {
  return {
    x: e[0],
    y: e[1]
  };
}, $h = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = t; i < a; i++) {
    var s = e[i];
    isFinite(s) && (n = Math.min(s, n));
  }
  return n;
}, _h = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = t; i < a; i++) {
    var s = e[i];
    isFinite(s) && (n = Math.max(s, n));
  }
  return n;
}, qh = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = t; s < a; s++) {
    var o = e[s];
    isFinite(o) && (n += o, i++);
  }
  return n / i;
}, Hh = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
  n ? e = e.slice(t, a) : (a < e.length && e.splice(a, e.length - a), t > 0 && e.splice(0, t));
  for (var o = 0, u = e.length - 1; u >= 0; u--) {
    var l = e[u];
    s ? isFinite(l) || (e[u] = -1 / 0, o++) : e.splice(u, 1);
  }
  i && e.sort(function(f, h) {
    return f - h;
  });
  var c = e.length, v = Math.floor(c / 2);
  return c % 2 !== 0 ? e[v + 1 + o] : (e[v - 1 + o] + e[v + o]) / 2;
}, Uh = function(e) {
  return Math.PI * e / 180;
}, mn = function(e, t) {
  return Math.atan2(t, e) - Math.PI / 2;
}, Vo = Math.log2 || function(r) {
  return Math.log(r) / Math.log(2);
}, $o = function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, zr = function(e, t) {
  return Math.sqrt(Br(e, t));
}, Br = function(e, t) {
  var a = t.x - e.x, n = t.y - e.y;
  return a * a + n * n;
}, Gh = function(e) {
  for (var t = e.length, a = 0, n = 0; n < t; n++)
    a += e[n];
  for (var i = 0; i < t; i++)
    e[i] = e[i] / a;
  return e;
}, ot = function(e, t, a, n) {
  return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * t + n * n * a;
}, na = function(e, t, a, n) {
  return {
    x: ot(e.x, t.x, a.x, n),
    y: ot(e.y, t.y, a.y, n)
  };
}, Wh = function(e, t, a, n) {
  var i = {
    x: t.x - e.x,
    y: t.y - e.y
  }, s = zr(e, t), o = {
    x: i.x / s,
    y: i.y / s
  };
  return a = a ?? 0, n = n ?? a * s, {
    x: e.x + o.x * n,
    y: e.y + o.y * n
  };
}, Ga = function(e, t, a) {
  return Math.max(e, Math.min(a, t));
}, Ct = function(e) {
  if (e == null)
    return {
      x1: 1 / 0,
      y1: 1 / 0,
      x2: -1 / 0,
      y2: -1 / 0,
      w: 0,
      h: 0
    };
  if (e.x1 != null && e.y1 != null) {
    if (e.x2 != null && e.y2 != null && e.x2 >= e.x1 && e.y2 >= e.y1)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x2,
        y2: e.y2,
        w: e.x2 - e.x1,
        h: e.y2 - e.y1
      };
    if (e.w != null && e.h != null && e.w >= 0 && e.h >= 0)
      return {
        x1: e.x1,
        y1: e.y1,
        x2: e.x1 + e.w,
        y2: e.y1 + e.h,
        w: e.w,
        h: e.h
      };
  }
}, Kh = function(e) {
  return {
    x1: e.x1,
    x2: e.x2,
    w: e.w,
    y1: e.y1,
    y2: e.y2,
    h: e.h
  };
}, Xh = function(e) {
  e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
}, Yh = function(e, t) {
  e.x1 = Math.min(e.x1, t.x1), e.x2 = Math.max(e.x2, t.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, t.y1), e.y2 = Math.max(e.y2, t.y2), e.h = e.y2 - e.y1;
}, bv = function(e, t, a) {
  e.x1 = Math.min(e.x1, t), e.x2 = Math.max(e.x2, t), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, a), e.y2 = Math.max(e.y2, a), e.h = e.y2 - e.y1;
}, Rn = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.x1 -= t, e.x2 += t, e.y1 -= t, e.y2 += t, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, Mn = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], a, n, i, s;
  if (t.length === 1)
    a = n = i = s = t[0];
  else if (t.length === 2)
    a = i = t[0], s = n = t[1];
  else if (t.length === 4) {
    var o = je(t, 4);
    a = o[0], n = o[1], i = o[2], s = o[3];
  }
  return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, Vu = function(e, t) {
  e.x1 = t.x1, e.y1 = t.y1, e.x2 = t.x2, e.y2 = t.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, _o = function(e, t) {
  return !(e.x1 > t.x2 || t.x1 > e.x2 || e.x2 < t.x1 || t.x2 < e.x1 || e.y2 < t.y1 || t.y2 < e.y1 || e.y1 > t.y2 || t.y1 > e.y2);
}, lr = function(e, t, a) {
  return e.x1 <= t && t <= e.x2 && e.y1 <= a && a <= e.y2;
}, $u = function(e, t) {
  return lr(e, t.x, t.y);
}, wv = function(e, t) {
  return lr(e, t.x1, t.y1) && lr(e, t.x2, t.y2);
}, Zh = (Xi = Math.hypot) !== null && Xi !== void 0 ? Xi : function(r, e) {
  return Math.sqrt(r * r + e * e);
};
function Qh(r, e) {
  if (r.length < 3)
    throw new Error("Need at least 3 vertices");
  var t = function(T, A) {
    return {
      x: T.x + A.x,
      y: T.y + A.y
    };
  }, a = function(T, A) {
    return {
      x: T.x - A.x,
      y: T.y - A.y
    };
  }, n = function(T, A) {
    return {
      x: T.x * A,
      y: T.y * A
    };
  }, i = function(T, A) {
    return T.x * A.y - T.y * A.x;
  }, s = function(T) {
    var A = Zh(T.x, T.y);
    return A === 0 ? {
      x: 0,
      y: 0
    } : {
      x: T.x / A,
      y: T.y / A
    };
  }, o = function(T) {
    for (var A = 0, k = 0; k < T.length; k++) {
      var D = T[k], B = T[(k + 1) % T.length];
      A += D.x * B.y - B.x * D.y;
    }
    return A / 2;
  }, u = function(T, A, k, D) {
    var B = a(A, T), P = a(D, k), L = i(B, P);
    if (Math.abs(L) < 1e-9)
      return t(T, n(B, 0.5));
    var M = i(a(k, T), P) / L;
    return t(T, n(B, M));
  }, l = r.map(function(x) {
    return {
      x: x.x,
      y: x.y
    };
  });
  o(l) < 0 && l.reverse();
  for (var c = l.length, v = [], f = 0; f < c; f++) {
    var h = l[f], d = l[(f + 1) % c], y = a(d, h), g = s({
      x: y.y,
      y: -y.x
    });
    v.push(g);
  }
  for (var p = v.map(function(x, T) {
    var A = t(l[T], n(x, e)), k = t(l[(T + 1) % c], n(x, e));
    return {
      p1: A,
      p2: k
    };
  }), m = [], b = 0; b < c; b++) {
    var w = p[(b - 1 + c) % c], E = p[b], C = u(w.p1, w.p2, E.p1, E.p2);
    m.push(C);
  }
  return m;
}
function Jh(r, e, t, a, n, i) {
  var s = og(r, e, t, a, n), o = Qh(s, i), u = Ct();
  return o.forEach(function(l) {
    return bv(u, l.x, l.y);
  }), u;
}
var xv = function(e, t, a, n, i, s, o) {
  var u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", l = u === "auto" ? pr(i, s) : u, c = i / 2, v = s / 2;
  l = Math.min(l, c, v);
  var f = l !== c, h = l !== v, d;
  if (f) {
    var y = a - c + l - o, g = n - v - o, p = a + c - l + o, m = g;
    if (d = cr(e, t, a, n, y, g, p, m, !1), d.length > 0)
      return d;
  }
  if (h) {
    var b = a + c + o, w = n - v + l - o, E = b, C = n + v - l + o;
    if (d = cr(e, t, a, n, b, w, E, C, !1), d.length > 0)
      return d;
  }
  if (f) {
    var x = a - c + l - o, T = n + v + o, A = a + c - l + o, k = T;
    if (d = cr(e, t, a, n, x, T, A, k, !1), d.length > 0)
      return d;
  }
  if (h) {
    var D = a - c - o, B = n - v + l - o, P = D, L = n + v - l + o;
    if (d = cr(e, t, a, n, D, B, P, L, !1), d.length > 0)
      return d;
  }
  var M;
  {
    var I = a - c + l, R = n - v + l;
    if (M = Pa(e, t, a, n, I, R, l + o), M.length > 0 && M[0] <= I && M[1] <= R)
      return [M[0], M[1]];
  }
  {
    var O = a + c - l, $ = n - v + l;
    if (M = Pa(e, t, a, n, O, $, l + o), M.length > 0 && M[0] >= O && M[1] <= $)
      return [M[0], M[1]];
  }
  {
    var H = a + c - l, z = n + v - l;
    if (M = Pa(e, t, a, n, H, z, l + o), M.length > 0 && M[0] >= H && M[1] >= z)
      return [M[0], M[1]];
  }
  {
    var F = a - c + l, U = n + v - l;
    if (M = Pa(e, t, a, n, F, U, l + o), M.length > 0 && M[0] <= F && M[1] >= U)
      return [M[0], M[1]];
  }
  return [];
}, jh = function(e, t, a, n, i, s, o) {
  var u = o, l = Math.min(a, i), c = Math.max(a, i), v = Math.min(n, s), f = Math.max(n, s);
  return l - u <= e && e <= c + u && v - u <= t && t <= f + u;
}, eg = function(e, t, a, n, i, s, o, u, l) {
  var c = {
    x1: Math.min(a, o, i) - l,
    x2: Math.max(a, o, i) + l,
    y1: Math.min(n, u, s) - l,
    y2: Math.max(n, u, s) + l
  };
  return !(e < c.x1 || e > c.x2 || t < c.y1 || t > c.y2);
}, tg = function(e, t, a, n) {
  a -= n;
  var i = t * t - 4 * e * a;
  if (i < 0)
    return [];
  var s = Math.sqrt(i), o = 2 * e, u = (-t + s) / o, l = (-t - s) / o;
  return [u, l];
}, rg = function(e, t, a, n, i) {
  var s = 1e-5;
  e === 0 && (e = s), t /= e, a /= e, n /= e;
  var o, u, l, c, v, f, h, d;
  if (u = (3 * a - t * t) / 9, l = -(27 * n) + t * (9 * a - 2 * (t * t)), l /= 54, o = u * u * u + l * l, i[1] = 0, h = t / 3, o > 0) {
    v = l + Math.sqrt(o), v = v < 0 ? -Math.pow(-v, 1 / 3) : Math.pow(v, 1 / 3), f = l - Math.sqrt(o), f = f < 0 ? -Math.pow(-f, 1 / 3) : Math.pow(f, 1 / 3), i[0] = -h + v + f, h += (v + f) / 2, i[4] = i[2] = -h, h = Math.sqrt(3) * (-f + v) / 2, i[3] = h, i[5] = -h;
    return;
  }
  if (i[5] = i[3] = 0, o === 0) {
    d = l < 0 ? -Math.pow(-l, 1 / 3) : Math.pow(l, 1 / 3), i[0] = -h + 2 * d, i[4] = i[2] = -(d + h);
    return;
  }
  u = -u, c = u * u * u, c = Math.acos(l / Math.sqrt(c)), d = 2 * Math.sqrt(u), i[0] = -h + d * Math.cos(c / 3), i[2] = -h + d * Math.cos((c + 2 * Math.PI) / 3), i[4] = -h + d * Math.cos((c + 4 * Math.PI) / 3);
}, ag = function(e, t, a, n, i, s, o, u) {
  var l = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * u + 4 * s * s - 4 * s * u + u * u, c = 1 * 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * u - 6 * s * s + 3 * s * u, v = 1 * 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * u - n * t + 2 * s * s + 2 * s * t - u * t, f = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * t - s * t, h = [];
  rg(l, c, v, f, h);
  for (var d = 1e-7, y = [], g = 0; g < 6; g += 2)
    Math.abs(h[g + 1]) < d && h[g] >= 0 && h[g] <= 1 && y.push(h[g]);
  y.push(1), y.push(0);
  for (var p = -1, m, b, w, E = 0; E < y.length; E++)
    m = Math.pow(1 - y[E], 2) * a + 2 * (1 - y[E]) * y[E] * i + y[E] * y[E] * o, b = Math.pow(1 - y[E], 2) * n + 2 * (1 - y[E]) * y[E] * s + y[E] * y[E] * u, w = Math.pow(m - e, 2) + Math.pow(b - t, 2), p >= 0 ? w < p && (p = w) : p = w;
  return p;
}, ng = function(e, t, a, n, i, s) {
  var o = [e - a, t - n], u = [i - a, s - n], l = u[0] * u[0] + u[1] * u[1], c = o[0] * o[0] + o[1] * o[1], v = o[0] * u[0] + o[1] * u[1], f = v * v / l;
  return v < 0 ? c : f > l ? (e - i) * (e - i) + (t - s) * (t - s) : c - f;
}, Dt = function(e, t, a) {
  for (var n, i, s, o, u, l = 0, c = 0; c < a.length / 2; c++)
    if (n = a[c * 2], i = a[c * 2 + 1], c + 1 < a.length / 2 ? (s = a[(c + 1) * 2], o = a[(c + 1) * 2 + 1]) : (s = a[(c + 1 - a.length / 2) * 2], o = a[(c + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e))
      if (n >= e && e >= s || n <= e && e <= s)
        u = (e - n) / (s - n) * (o - i) + i, u > t && l++;
      else
        continue;
  return l % 2 !== 0;
}, er = function(e, t, a, n, i, s, o, u, l) {
  var c = new Array(a.length), v;
  u[0] != null ? (v = Math.atan(u[1] / u[0]), u[0] < 0 ? v = v + Math.PI / 2 : v = -v - Math.PI / 2) : v = u;
  for (var f = Math.cos(-v), h = Math.sin(-v), d = 0; d < c.length / 2; d++)
    c[d * 2] = s / 2 * (a[d * 2] * f - a[d * 2 + 1] * h), c[d * 2 + 1] = o / 2 * (a[d * 2 + 1] * f + a[d * 2] * h), c[d * 2] += n, c[d * 2 + 1] += i;
  var y;
  if (l > 0) {
    var g = Yn(c, -l);
    y = Xn(g);
  } else
    y = c;
  return Dt(e, t, y);
}, ig = function(e, t, a, n, i, s, o, u) {
  for (var l = new Array(a.length * 2), c = 0; c < u.length; c++) {
    var v = u[c];
    l[c * 4 + 0] = v.startX, l[c * 4 + 1] = v.startY, l[c * 4 + 2] = v.stopX, l[c * 4 + 3] = v.stopY;
    var f = Math.pow(v.cx - e, 2) + Math.pow(v.cy - t, 2);
    if (f <= Math.pow(v.radius, 2))
      return !0;
  }
  return Dt(e, t, l);
}, Xn = function(e) {
  for (var t = new Array(e.length / 2), a, n, i, s, o, u, l, c, v = 0; v < e.length / 4; v++) {
    a = e[v * 4], n = e[v * 4 + 1], i = e[v * 4 + 2], s = e[v * 4 + 3], v < e.length / 4 - 1 ? (o = e[(v + 1) * 4], u = e[(v + 1) * 4 + 1], l = e[(v + 1) * 4 + 2], c = e[(v + 1) * 4 + 3]) : (o = e[0], u = e[1], l = e[2], c = e[3]);
    var f = cr(a, n, i, s, o, u, l, c, !0);
    t[v * 2] = f[0], t[v * 2 + 1] = f[1];
  }
  return t;
}, Yn = function(e, t) {
  for (var a = new Array(e.length * 2), n, i, s, o, u = 0; u < e.length / 2; u++) {
    n = e[u * 2], i = e[u * 2 + 1], u < e.length / 2 - 1 ? (s = e[(u + 1) * 2], o = e[(u + 1) * 2 + 1]) : (s = e[0], o = e[1]);
    var l = o - i, c = -(s - n), v = Math.sqrt(l * l + c * c), f = l / v, h = c / v;
    a[u * 4] = n + f * t, a[u * 4 + 1] = i + h * t, a[u * 4 + 2] = s + f * t, a[u * 4 + 3] = o + h * t;
  }
  return a;
}, sg = function(e, t, a, n, i, s) {
  var o = a - e, u = n - t;
  o /= i, u /= s;
  var l = Math.sqrt(o * o + u * u), c = l - 1;
  if (c < 0)
    return [];
  var v = c / l;
  return [(a - e) * v + e, (n - t) * v + t];
}, Ir = function(e, t, a, n, i, s, o) {
  return e -= i, t -= s, e /= a / 2 + o, t /= n / 2 + o, e * e + t * t <= 1;
}, Pa = function(e, t, a, n, i, s, o) {
  var u = [a - e, n - t], l = [e - i, t - s], c = u[0] * u[0] + u[1] * u[1], v = 2 * (l[0] * u[0] + l[1] * u[1]), f = l[0] * l[0] + l[1] * l[1] - o * o, h = v * v - 4 * c * f;
  if (h < 0)
    return [];
  var d = (-v + Math.sqrt(h)) / (2 * c), y = (-v - Math.sqrt(h)) / (2 * c), g = Math.min(d, y), p = Math.max(d, y), m = [];
  if (g >= 0 && g <= 1 && m.push(g), p >= 0 && p <= 1 && m.push(p), m.length === 0)
    return [];
  var b = m[0] * u[0] + e, w = m[0] * u[1] + t;
  if (m.length > 1) {
    if (m[0] == m[1])
      return [b, w];
    var E = m[1] * u[0] + e, C = m[1] * u[1] + t;
    return [b, w, E, C];
  } else
    return [b, w];
}, Yi = function(e, t, a) {
  return t <= e && e <= a || a <= e && e <= t ? e : e <= t && t <= a || a <= t && t <= e ? t : a;
}, cr = function(e, t, a, n, i, s, o, u, l) {
  var c = e - i, v = a - e, f = o - i, h = t - s, d = n - t, y = u - s, g = f * h - y * c, p = v * h - d * c, m = y * v - f * d;
  if (m !== 0) {
    var b = g / m, w = p / m, E = 1e-3, C = 0 - E, x = 1 + E;
    return C <= b && b <= x && C <= w && w <= x ? [e + b * v, t + b * d] : l ? [e + b * v, t + b * d] : [];
  } else
    return g === 0 || p === 0 ? Yi(e, a, o) === o ? [o, u] : Yi(e, a, i) === i ? [i, s] : Yi(i, o, a) === a ? [a, n] : [] : [];
}, og = function(e, t, a, n, i) {
  var s = [], o = n / 2, u = i / 2, l = t, c = a;
  s.push({
    x: l + o * e[0],
    y: c + u * e[1]
  });
  for (var v = 1; v < e.length / 2; v++)
    s.push({
      x: l + o * e[v * 2],
      y: c + u * e[v * 2 + 1]
    });
  return s;
}, Wa = function(e, t, a, n, i, s, o, u) {
  var l = [], c, v = new Array(a.length), f = !0;
  s == null && (f = !1);
  var h;
  if (f) {
    for (var d = 0; d < v.length / 2; d++)
      v[d * 2] = a[d * 2] * s + n, v[d * 2 + 1] = a[d * 2 + 1] * o + i;
    if (u > 0) {
      var y = Yn(v, -u);
      h = Xn(y);
    } else
      h = v;
  } else
    h = a;
  for (var g, p, m, b, w = 0; w < h.length / 2; w++)
    g = h[w * 2], p = h[w * 2 + 1], w < h.length / 2 - 1 ? (m = h[(w + 1) * 2], b = h[(w + 1) * 2 + 1]) : (m = h[0], b = h[1]), c = cr(e, t, n, i, g, p, m, b), c.length !== 0 && l.push(c[0], c[1]);
  return l;
}, ug = function(e, t, a, n, i, s, o, u, l) {
  var c = [], v, f = new Array(a.length * 2);
  l.forEach(function(m, b) {
    b === 0 ? (f[f.length - 2] = m.startX, f[f.length - 1] = m.startY) : (f[b * 4 - 2] = m.startX, f[b * 4 - 1] = m.startY), f[b * 4] = m.stopX, f[b * 4 + 1] = m.stopY, v = Pa(e, t, n, i, m.cx, m.cy, m.radius), v.length !== 0 && c.push(v[0], v[1]);
  });
  for (var h = 0; h < f.length / 4; h++)
    v = cr(e, t, n, i, f[h * 4], f[h * 4 + 1], f[h * 4 + 2], f[h * 4 + 3], !1), v.length !== 0 && c.push(v[0], v[1]);
  if (c.length > 2) {
    for (var d = [c[0], c[1]], y = Math.pow(d[0] - e, 2) + Math.pow(d[1] - t, 2), g = 1; g < c.length / 2; g++) {
      var p = Math.pow(c[g * 2] - e, 2) + Math.pow(c[g * 2 + 1] - t, 2);
      p <= y && (d[0] = c[g * 2], d[1] = c[g * 2 + 1], y = p);
    }
    return d;
  }
  return c;
}, bn = function(e, t, a) {
  var n = [e[0] - t[0], e[1] - t[1]], i = Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
  return s < 0 && (s = 1e-5), [t[0] + s * n[0], t[1] + s * n[1]];
}, Et = function(e, t) {
  var a = uo(e, t);
  return a = Ev(a), a;
}, Ev = function(e) {
  for (var t, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, u = -1 / 0, l = 0; l < n; l++)
    t = e[2 * l], a = e[2 * l + 1], i = Math.min(i, t), o = Math.max(o, t), s = Math.min(s, a), u = Math.max(u, a);
  for (var c = 2 / (o - i), v = 2 / (u - s), f = 0; f < n; f++)
    t = e[2 * f] = e[2 * f] * c, a = e[2 * f + 1] = e[2 * f + 1] * v, i = Math.min(i, t), o = Math.max(o, t), s = Math.min(s, a), u = Math.max(u, a);
  if (s < -1)
    for (var h = 0; h < n; h++)
      a = e[2 * h + 1] = e[2 * h + 1] + (-1 - s);
  return e;
}, uo = function(e, t) {
  var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
  n += t;
  for (var i = new Array(e * 2), s, o = 0; o < e; o++)
    s = o * a + n, i[2 * o] = Math.cos(s), i[2 * o + 1] = Math.sin(-s);
  return i;
}, pr = function(e, t) {
  return Math.min(e / 4, t / 4, 8);
}, Cv = function(e, t) {
  return Math.min(e / 10, t / 10, 8);
}, qo = function() {
  return 8;
}, lg = function(e, t, a) {
  return [e - 2 * t + a, 2 * (t - e), e];
}, lo = function(e, t) {
  return {
    heightOffset: Math.min(15, 0.05 * t),
    widthOffset: Math.min(100, 0.25 * e),
    ctrlPtOffsetPct: 0.05
  };
};
function Zi(r, e) {
  function t(v) {
    for (var f = [], h = 0; h < v.length; h++) {
      var d = v[h], y = v[(h + 1) % v.length], g = {
        x: y.x - d.x,
        y: y.y - d.y
      }, p = {
        x: -g.y,
        y: g.x
      }, m = Math.sqrt(p.x * p.x + p.y * p.y);
      f.push({
        x: p.x / m,
        y: p.y / m
      });
    }
    return f;
  }
  function a(v, f) {
    var h = 1 / 0, d = -1 / 0, y = Bt(v), g;
    try {
      for (y.s(); !(g = y.n()).done; ) {
        var p = g.value, m = p.x * f.x + p.y * f.y;
        h = Math.min(h, m), d = Math.max(d, m);
      }
    } catch (b) {
      y.e(b);
    } finally {
      y.f();
    }
    return {
      min: h,
      max: d
    };
  }
  function n(v, f) {
    return !(v.max < f.min || f.max < v.min);
  }
  var i = [].concat(Un(t(r)), Un(t(e))), s = Bt(i), o;
  try {
    for (s.s(); !(o = s.n()).done; ) {
      var u = o.value, l = a(r, u), c = a(e, u);
      if (!n(l, c))
        return !1;
    }
  } catch (v) {
    s.e(v);
  } finally {
    s.f();
  }
  return !0;
}
var cg = gt({
  dampingFactor: 0.8,
  precision: 1e-6,
  iterations: 200,
  weight: function(e) {
    return 1;
  }
}), vg = {
  pageRank: function(e) {
    for (var t = cg(e), a = t.dampingFactor, n = t.precision, i = t.iterations, s = t.weight, o = this._private.cy, u = this.byGroup(), l = u.nodes, c = u.edges, v = l.length, f = v * v, h = c.length, d = new Array(f), y = new Array(v), g = (1 - a) / v, p = 0; p < v; p++) {
      for (var m = 0; m < v; m++) {
        var b = p * v + m;
        d[b] = 0;
      }
      y[p] = 0;
    }
    for (var w = 0; w < h; w++) {
      var E = c[w], C = E.data("source"), x = E.data("target");
      if (C !== x) {
        var T = l.indexOfId(C), A = l.indexOfId(x), k = s(E), D = A * v + T;
        d[D] += k, y[T] += k;
      }
    }
    for (var B = 1 / v + g, P = 0; P < v; P++)
      if (y[P] === 0)
        for (var L = 0; L < v; L++) {
          var M = L * v + P;
          d[M] = B;
        }
      else
        for (var I = 0; I < v; I++) {
          var R = I * v + P;
          d[R] = d[R] / y[P] + g;
        }
    for (var O = new Array(v), $ = new Array(v), H, z = 0; z < v; z++)
      O[z] = 1;
    for (var F = 0; F < i; F++) {
      for (var U = 0; U < v; U++)
        $[U] = 0;
      for (var Y = 0; Y < v; Y++)
        for (var G = 0; G < v; G++) {
          var Q = Y * v + G;
          $[Y] += d[Q] * O[G];
        }
      Gh($), H = O, O = $, $ = H;
      for (var J = 0, ae = 0; ae < v; ae++) {
        var W = H[ae] - O[ae];
        J += W * W;
      }
      if (J < n)
        break;
    }
    var N = {
      rank: function(_) {
        return _ = o.collection(_)[0], O[l.indexOf(_)];
      }
    };
    return N;
  }
  // pageRank
}, _u = gt({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1,
  alpha: 0
}), ia = {
  degreeCentralityNormalized: function(e) {
    e = _u(e);
    var t = this.cy(), a = this.nodes(), n = a.length;
    if (e.directed) {
      for (var c = {}, v = {}, f = 0, h = 0, d = 0; d < n; d++) {
        var y = a[d], g = y.id();
        e.root = y;
        var p = this.degreeCentrality(e);
        f < p.indegree && (f = p.indegree), h < p.outdegree && (h = p.outdegree), c[g] = p.indegree, v[g] = p.outdegree;
      }
      return {
        indegree: function(b) {
          return f == 0 ? 0 : (ge(b) && (b = t.filter(b)), c[b.id()] / f);
        },
        outdegree: function(b) {
          return h === 0 ? 0 : (ge(b) && (b = t.filter(b)), v[b.id()] / h);
        }
      };
    } else {
      for (var i = {}, s = 0, o = 0; o < n; o++) {
        var u = a[o];
        e.root = u;
        var l = this.degreeCentrality(e);
        s < l.degree && (s = l.degree), i[u.id()] = l.degree;
      }
      return {
        degree: function(b) {
          return s === 0 ? 0 : (ge(b) && (b = t.filter(b)), i[b.id()] / s);
        }
      };
    }
  },
  // degreeCentralityNormalized
  // Implemented from the algorithm in Opsahl's paper
  // "Node centrality in weighted networks: Generalizing degree and shortest paths"
  // check the heading 2 "Degree"
  degreeCentrality: function(e) {
    e = _u(e);
    var t = this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, u = n.alpha;
    if (i = t.collection(i)[0], o) {
      for (var h = i.connectedEdges(), d = h.filter(function(C) {
        return C.target().same(i) && a.has(C);
      }), y = h.filter(function(C) {
        return C.source().same(i) && a.has(C);
      }), g = d.length, p = y.length, m = 0, b = 0, w = 0; w < d.length; w++)
        m += s(d[w]);
      for (var E = 0; E < y.length; E++)
        b += s(y[E]);
      return {
        indegree: Math.pow(g, 1 - u) * Math.pow(m, u),
        outdegree: Math.pow(p, 1 - u) * Math.pow(b, u)
      };
    } else {
      for (var l = i.connectedEdges().intersection(a), c = l.length, v = 0, f = 0; f < l.length; f++)
        v += s(l[f]);
      return {
        degree: Math.pow(c, 1 - u) * Math.pow(v, u)
      };
    }
  }
  // degreeCentrality
};
ia.dc = ia.degreeCentrality;
ia.dcn = ia.degreeCentralityNormalised = ia.degreeCentralityNormalized;
var qu = gt({
  harmonic: !0,
  weight: function() {
    return 1;
  },
  directed: !1,
  root: null
}), sa = {
  closenessCentralityNormalized: function(e) {
    for (var t = qu(e), a = t.harmonic, n = t.weight, i = t.directed, s = this.cy(), o = {}, u = 0, l = this.nodes(), c = this.floydWarshall({
      weight: n,
      directed: i
    }), v = 0; v < l.length; v++) {
      for (var f = 0, h = l[v], d = 0; d < l.length; d++)
        if (v !== d) {
          var y = c.distance(h, l[d]);
          a ? f += 1 / y : f += y;
        }
      a || (f = 1 / f), u < f && (u = f), o[h.id()] = f;
    }
    return {
      closeness: function(p) {
        return u == 0 ? 0 : (ge(p) ? p = s.filter(p)[0].id() : p = p.id(), o[p] / u);
      }
    };
  },
  // Implemented from pseudocode from wikipedia
  closenessCentrality: function(e) {
    var t = qu(e), a = t.root, n = t.weight, i = t.directed, s = t.harmonic;
    a = this.filter(a)[0];
    for (var o = this.dijkstra({
      root: a,
      weight: n,
      directed: i
    }), u = 0, l = this.nodes(), c = 0; c < l.length; c++) {
      var v = l[c];
      if (!v.same(a)) {
        var f = o.distanceTo(v);
        s ? u += 1 / f : u += f;
      }
    }
    return s ? u : 1 / u;
  }
  // closenessCentrality
};
sa.cc = sa.closenessCentrality;
sa.ccn = sa.closenessCentralityNormalised = sa.closenessCentralityNormalized;
var fg = gt({
  weight: null,
  directed: !1
}), co = {
  // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
  betweennessCentrality: function(e) {
    for (var t = fg(e), a = t.directed, n = t.weight, i = n != null, s = this.cy(), o = this.nodes(), u = {}, l = {}, c = 0, v = {
      set: function(b, w) {
        l[b] = w, w > c && (c = w);
      },
      get: function(b) {
        return l[b];
      }
    }, f = 0; f < o.length; f++) {
      var h = o[f], d = h.id();
      a ? u[d] = h.outgoers().nodes() : u[d] = h.openNeighborhood().nodes(), v.set(d, 0);
    }
    for (var y = function() {
      for (var b = o[g].id(), w = [], E = {}, C = {}, x = {}, T = new sn(function(Y, G) {
        return x[Y] - x[G];
      }), A = 0; A < o.length; A++) {
        var k = o[A].id();
        E[k] = [], C[k] = 0, x[k] = 1 / 0;
      }
      for (C[b] = 1, x[b] = 0, T.push(b); !T.empty(); ) {
        var D = T.pop();
        if (w.push(D), i)
          for (var B = 0; B < u[D].length; B++) {
            var P = u[D][B], L = s.getElementById(D), M = void 0;
            L.edgesTo(P).length > 0 ? M = L.edgesTo(P)[0] : M = P.edgesTo(L)[0];
            var I = n(M);
            P = P.id(), x[P] > x[D] + I && (x[P] = x[D] + I, T.nodes.indexOf(P) < 0 ? T.push(P) : T.updateItem(P), C[P] = 0, E[P] = []), x[P] == x[D] + I && (C[P] = C[P] + C[D], E[P].push(D));
          }
        else
          for (var R = 0; R < u[D].length; R++) {
            var O = u[D][R].id();
            x[O] == 1 / 0 && (T.push(O), x[O] = x[D] + 1), x[O] == x[D] + 1 && (C[O] = C[O] + C[D], E[O].push(D));
          }
      }
      for (var $ = {}, H = 0; H < o.length; H++)
        $[o[H].id()] = 0;
      for (; w.length > 0; ) {
        for (var z = w.pop(), F = 0; F < E[z].length; F++) {
          var U = E[z][F];
          $[U] = $[U] + C[U] / C[z] * (1 + $[z]);
        }
        z != o[g].id() && v.set(z, v.get(z) + $[z]);
      }
    }, g = 0; g < o.length; g++)
      y();
    var p = {
      betweenness: function(b) {
        var w = s.collection(b).id();
        return v.get(w);
      },
      betweennessNormalized: function(b) {
        if (c == 0)
          return 0;
        var w = s.collection(b).id();
        return v.get(w) / c;
      }
    };
    return p.betweennessNormalised = p.betweennessNormalized, p;
  }
  // betweennessCentrality
};
co.bc = co.betweennessCentrality;
var dg = gt({
  expandFactor: 2,
  // affects time of computation and cluster granularity to some extent: M * M
  inflateFactor: 2,
  // affects cluster granularity (the greater the value, the more clusters): M(i,j) / E(j)
  multFactor: 1,
  // optional self loops for each node. Use a neutral value to improve cluster computations.
  maxIterations: 20,
  // maximum number of iterations of the MCL algorithm in a single run
  attributes: [
    // attributes/features used to group nodes, ie. similarity values between nodes
    function(r) {
      return 1;
    }
  ]
}), hg = function(e) {
  return dg(e);
}, gg = function(e, t) {
  for (var a = 0, n = 0; n < t.length; n++)
    a += t[n](e);
  return a;
}, pg = function(e, t, a) {
  for (var n = 0; n < t; n++)
    e[n * t + n] = a;
}, Tv = function(e, t) {
  for (var a, n = 0; n < t; n++) {
    a = 0;
    for (var i = 0; i < t; i++)
      a += e[i * t + n];
    for (var s = 0; s < t; s++)
      e[s * t + n] = e[s * t + n] / a;
  }
}, yg = function(e, t, a) {
  for (var n = new Array(a * a), i = 0; i < a; i++) {
    for (var s = 0; s < a; s++)
      n[i * a + s] = 0;
    for (var o = 0; o < a; o++)
      for (var u = 0; u < a; u++)
        n[i * a + u] += e[i * a + o] * t[o * a + u];
  }
  return n;
}, mg = function(e, t, a) {
  for (var n = e.slice(0), i = 1; i < a; i++)
    e = yg(e, n, t);
  return e;
}, bg = function(e, t, a) {
  for (var n = new Array(t * t), i = 0; i < t * t; i++)
    n[i] = Math.pow(e[i], a);
  return Tv(n, t), n;
}, wg = function(e, t, a, n) {
  for (var i = 0; i < a; i++) {
    var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(t[i] * Math.pow(10, n)) / Math.pow(10, n);
    if (s !== o)
      return !1;
  }
  return !0;
}, xg = function(e, t, a, n) {
  for (var i = [], s = 0; s < t; s++) {
    for (var o = [], u = 0; u < t; u++)
      Math.round(e[s * t + u] * 1e3) / 1e3 > 0 && o.push(a[u]);
    o.length !== 0 && i.push(n.collection(o));
  }
  return i;
}, Eg = function(e, t) {
  for (var a = 0; a < e.length; a++)
    if (!t[a] || e[a].id() !== t[a].id())
      return !1;
  return !0;
}, Cg = function(e) {
  for (var t = 0; t < e.length; t++)
    for (var a = 0; a < e.length; a++)
      t != a && Eg(e[t], e[a]) && e.splice(a, 1);
  return e;
}, Hu = function(e) {
  for (var t = this.nodes(), a = this.edges(), n = this.cy(), i = hg(e), s = {}, o = 0; o < t.length; o++)
    s[t[o].id()] = o;
  for (var u = t.length, l = u * u, c = new Array(l), v, f = 0; f < l; f++)
    c[f] = 0;
  for (var h = 0; h < a.length; h++) {
    var d = a[h], y = s[d.source().id()], g = s[d.target().id()], p = gg(d, i.attributes);
    c[y * u + g] += p, c[g * u + y] += p;
  }
  pg(c, u, i.multFactor), Tv(c, u);
  for (var m = !0, b = 0; m && b < i.maxIterations; )
    m = !1, v = mg(c, u, i.expandFactor), c = bg(v, u, i.inflateFactor), wg(c, v, l, 4) || (m = !0), b++;
  var w = xg(c, u, t, n);
  return w = Cg(w), w;
}, Tg = {
  markovClustering: Hu,
  mcl: Hu
}, Sg = function(e) {
  return e;
}, Sv = function(e, t) {
  return Math.abs(t - e);
}, Uu = function(e, t, a) {
  return e + Sv(t, a);
}, Gu = function(e, t, a) {
  return e + Math.pow(a - t, 2);
}, Ag = function(e) {
  return Math.sqrt(e);
}, kg = function(e, t, a) {
  return Math.max(e, Sv(t, a));
}, Ca = function(e, t, a, n, i) {
  for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Sg, o = n, u, l, c = 0; c < e; c++)
    u = t(c), l = a(c), o = i(o, u, l);
  return s(o);
}, va = {
  euclidean: function(e, t, a) {
    return e >= 2 ? Ca(e, t, a, 0, Gu, Ag) : Ca(e, t, a, 0, Uu);
  },
  squaredEuclidean: function(e, t, a) {
    return Ca(e, t, a, 0, Gu);
  },
  manhattan: function(e, t, a) {
    return Ca(e, t, a, 0, Uu);
  },
  max: function(e, t, a) {
    return Ca(e, t, a, -1 / 0, kg);
  }
};
va["squared-euclidean"] = va.squaredEuclidean;
va.squaredeuclidean = va.squaredEuclidean;
function ci(r, e, t, a, n, i) {
  var s;
  return Ke(r) ? s = r : s = va[r] || va.euclidean, e === 0 && Ke(r) ? s(n, i) : s(e, t, a, n, i);
}
var Dg = gt({
  k: 2,
  m: 2,
  sensitivityThreshold: 1e-4,
  distance: "euclidean",
  maxIterations: 10,
  attributes: [],
  testMode: !1,
  testCentroids: null
}), Ho = function(e) {
  return Dg(e);
}, Zn = function(e, t, a, n, i) {
  var s = i !== "kMedoids", o = s ? function(v) {
    return a[v];
  } : function(v) {
    return n[v](a);
  }, u = function(f) {
    return n[f](t);
  }, l = a, c = t;
  return ci(e, n.length, o, u, l, c);
}, Qi = function(e, t, a) {
  for (var n = a.length, i = new Array(n), s = new Array(n), o = new Array(t), u = null, l = 0; l < n; l++)
    i[l] = e.min(a[l]).value, s[l] = e.max(a[l]).value;
  for (var c = 0; c < t; c++) {
    u = [];
    for (var v = 0; v < n; v++)
      u[v] = Math.random() * (s[v] - i[v]) + i[v];
    o[c] = u;
  }
  return o;
}, Av = function(e, t, a, n, i) {
  for (var s = 1 / 0, o = 0, u = 0; u < t.length; u++) {
    var l = Zn(a, e, t[u], n, i);
    l < s && (s = l, o = u);
  }
  return o;
}, kv = function(e, t, a) {
  for (var n = [], i = null, s = 0; s < t.length; s++)
    i = t[s], a[i.id()] === e && n.push(i);
  return n;
}, Bg = function(e, t, a) {
  return Math.abs(t - e) <= a;
}, Pg = function(e, t, a) {
  for (var n = 0; n < e.length; n++)
    for (var i = 0; i < e[n].length; i++) {
      var s = Math.abs(e[n][i] - t[n][i]);
      if (s > a)
        return !1;
    }
  return !0;
}, Lg = function(e, t, a) {
  for (var n = 0; n < a; n++)
    if (e === t[n])
      return !0;
  return !1;
}, Wu = function(e, t) {
  var a = new Array(t);
  if (e.length < 50)
    for (var n = 0; n < t; n++) {
      for (var i = e[Math.floor(Math.random() * e.length)]; Lg(i, a, n); )
        i = e[Math.floor(Math.random() * e.length)];
      a[n] = i;
    }
  else
    for (var s = 0; s < t; s++)
      a[s] = e[Math.floor(Math.random() * e.length)];
  return a;
}, Ku = function(e, t, a) {
  for (var n = 0, i = 0; i < t.length; i++)
    n += Zn("manhattan", t[i], e, a, "kMedoids");
  return n;
}, Rg = function(e) {
  var t = this.cy(), a = this.nodes(), n = null, i = Ho(e), s = new Array(i.k), o = {}, u;
  i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, u = Qi(a, i.k, i.attributes)) : nt(i.testCentroids) === "object" ? u = i.testCentroids : u = Qi(a, i.k, i.attributes) : u = Qi(a, i.k, i.attributes);
  for (var l = !0, c = 0; l && c < i.maxIterations; ) {
    for (var v = 0; v < a.length; v++)
      n = a[v], o[n.id()] = Av(n, u, i.distance, i.attributes, "kMeans");
    l = !1;
    for (var f = 0; f < i.k; f++) {
      var h = kv(f, a, o);
      if (h.length !== 0) {
        for (var d = i.attributes.length, y = u[f], g = new Array(d), p = new Array(d), m = 0; m < d; m++) {
          p[m] = 0;
          for (var b = 0; b < h.length; b++)
            n = h[b], p[m] += i.attributes[m](n);
          g[m] = p[m] / h.length, Bg(g[m], y[m], i.sensitivityThreshold) || (l = !0);
        }
        u[f] = g, s[f] = t.collection(h);
      }
    }
    c++;
  }
  return s;
}, Mg = function(e) {
  var t = this.cy(), a = this.nodes(), n = null, i = Ho(e), s = new Array(i.k), o, u = {}, l, c = new Array(i.k);
  i.testMode ? typeof i.testCentroids == "number" || (nt(i.testCentroids) === "object" ? o = i.testCentroids : o = Wu(a, i.k)) : o = Wu(a, i.k);
  for (var v = !0, f = 0; v && f < i.maxIterations; ) {
    for (var h = 0; h < a.length; h++)
      n = a[h], u[n.id()] = Av(n, o, i.distance, i.attributes, "kMedoids");
    v = !1;
    for (var d = 0; d < o.length; d++) {
      var y = kv(d, a, u);
      if (y.length !== 0) {
        c[d] = Ku(o[d], y, i.attributes);
        for (var g = 0; g < y.length; g++)
          l = Ku(y[g], y, i.attributes), l < c[d] && (c[d] = l, o[d] = y[g], v = !0);
        s[d] = t.collection(y);
      }
    }
    f++;
  }
  return s;
}, Ig = function(e, t, a, n, i) {
  for (var s, o, u = 0; u < t.length; u++)
    for (var l = 0; l < e.length; l++)
      n[u][l] = Math.pow(a[u][l], i.m);
  for (var c = 0; c < e.length; c++)
    for (var v = 0; v < i.attributes.length; v++) {
      s = 0, o = 0;
      for (var f = 0; f < t.length; f++)
        s += n[f][c] * i.attributes[v](t[f]), o += n[f][c];
      e[c][v] = s / o;
    }
}, Og = function(e, t, a, n, i) {
  for (var s = 0; s < e.length; s++)
    t[s] = e[s].slice();
  for (var o, u, l, c = 2 / (i.m - 1), v = 0; v < a.length; v++)
    for (var f = 0; f < n.length; f++) {
      o = 0;
      for (var h = 0; h < a.length; h++)
        u = Zn(i.distance, n[f], a[v], i.attributes, "cmeans"), l = Zn(i.distance, n[f], a[h], i.attributes, "cmeans"), o += Math.pow(u / l, c);
      e[f][v] = 1 / o;
    }
}, Ng = function(e, t, a, n) {
  for (var i = new Array(a.k), s = 0; s < i.length; s++)
    i[s] = [];
  for (var o, u, l = 0; l < t.length; l++) {
    o = -1 / 0, u = -1;
    for (var c = 0; c < t[0].length; c++)
      t[l][c] > o && (o = t[l][c], u = c);
    i[u].push(e[l]);
  }
  for (var v = 0; v < i.length; v++)
    i[v] = n.collection(i[v]);
  return i;
}, Xu = function(e) {
  var t = this.cy(), a = this.nodes(), n = Ho(e), i, s, o, u, l;
  u = new Array(a.length);
  for (var c = 0; c < a.length; c++)
    u[c] = new Array(n.k);
  o = new Array(a.length);
  for (var v = 0; v < a.length; v++)
    o[v] = new Array(n.k);
  for (var f = 0; f < a.length; f++) {
    for (var h = 0, d = 0; d < n.k; d++)
      o[f][d] = Math.random(), h += o[f][d];
    for (var y = 0; y < n.k; y++)
      o[f][y] = o[f][y] / h;
  }
  s = new Array(n.k);
  for (var g = 0; g < n.k; g++)
    s[g] = new Array(n.attributes.length);
  l = new Array(a.length);
  for (var p = 0; p < a.length; p++)
    l[p] = new Array(n.k);
  for (var m = !0, b = 0; m && b < n.maxIterations; )
    m = !1, Ig(s, a, o, l, n), Og(o, u, s, a, n), Pg(o, u, n.sensitivityThreshold) || (m = !0), b++;
  return i = Ng(a, o, n, t), {
    clusters: i,
    degreeOfMembership: o
  };
}, zg = {
  kMeans: Rg,
  kMedoids: Mg,
  fuzzyCMeans: Xu,
  fcm: Xu
}, Fg = gt({
  distance: "euclidean",
  // distance metric to compare nodes
  linkage: "min",
  // linkage criterion : how to determine the distance between clusters of nodes
  mode: "threshold",
  // mode:'threshold' => clusters must be threshold distance apart
  threshold: 1 / 0,
  // the distance threshold
  // mode:'dendrogram' => the nodes are organised as leaves in a tree (siblings are close), merging makes clusters
  addDendrogram: !1,
  // whether to add the dendrogram to the graph for viz
  dendrogramDepth: 0,
  // depth at which dendrogram branches are merged into the returned clusters
  attributes: []
  // array of attr functions
}), Vg = {
  single: "min",
  complete: "max"
}, $g = function(e) {
  var t = Fg(e), a = Vg[t.linkage];
  return a != null && (t.linkage = a), t;
}, Yu = function(e, t, a, n, i) {
  for (var s = 0, o = 1 / 0, u, l = i.attributes, c = function(A, k) {
    return ci(i.distance, l.length, function(D) {
      return l[D](A);
    }, function(D) {
      return l[D](k);
    }, A, k);
  }, v = 0; v < e.length; v++) {
    var f = e[v].key, h = a[f][n[f]];
    h < o && (s = f, o = h);
  }
  if (i.mode === "threshold" && o >= i.threshold || i.mode === "dendrogram" && e.length === 1)
    return !1;
  var d = t[s], y = t[n[s]], g;
  i.mode === "dendrogram" ? g = {
    left: d,
    right: y,
    key: d.key
  } : g = {
    value: d.value.concat(y.value),
    key: d.key
  }, e[d.index] = g, e.splice(y.index, 1), t[d.key] = g;
  for (var p = 0; p < e.length; p++) {
    var m = e[p];
    d.key === m.key ? u = 1 / 0 : i.linkage === "min" ? (u = a[d.key][m.key], a[d.key][m.key] > a[y.key][m.key] && (u = a[y.key][m.key])) : i.linkage === "max" ? (u = a[d.key][m.key], a[d.key][m.key] < a[y.key][m.key] && (u = a[y.key][m.key])) : i.linkage === "mean" ? u = (a[d.key][m.key] * d.size + a[y.key][m.key] * y.size) / (d.size + y.size) : i.mode === "dendrogram" ? u = c(m.value, d.value) : u = c(m.value[0], d.value[0]), a[d.key][m.key] = a[m.key][d.key] = u;
  }
  for (var b = 0; b < e.length; b++) {
    var w = e[b].key;
    if (n[w] === d.key || n[w] === y.key) {
      for (var E = w, C = 0; C < e.length; C++) {
        var x = e[C].key;
        a[w][x] < a[w][E] && (E = x);
      }
      n[w] = E;
    }
    e[b].index = b;
  }
  return d.key = y.key = d.index = y.index = null, !0;
}, ra = function(e, t, a) {
  e && (e.value ? t.push(e.value) : (e.left && ra(e.left, t), e.right && ra(e.right, t)));
}, vo = function(e, t) {
  if (!e)
    return "";
  if (e.left && e.right) {
    var a = vo(e.left, t), n = vo(e.right, t), i = t.add({
      group: "nodes",
      data: {
        id: a + "," + n
      }
    });
    return t.add({
      group: "edges",
      data: {
        source: a,
        target: i.id()
      }
    }), t.add({
      group: "edges",
      data: {
        source: n,
        target: i.id()
      }
    }), i.id();
  } else if (e.value)
    return e.value.id();
}, fo = function(e, t, a) {
  if (!e)
    return [];
  var n = [], i = [], s = [];
  return t === 0 ? (e.left && ra(e.left, n), e.right && ra(e.right, i), s = n.concat(i), [a.collection(s)]) : t === 1 ? e.value ? [a.collection(e.value)] : (e.left && ra(e.left, n), e.right && ra(e.right, i), [a.collection(n), a.collection(i)]) : e.value ? [a.collection(e.value)] : (e.left && (n = fo(e.left, t - 1, a)), e.right && (i = fo(e.right, t - 1, a)), n.concat(i));
}, Zu = function(e) {
  for (var t = this.cy(), a = this.nodes(), n = $g(e), i = n.attributes, s = function(b, w) {
    return ci(n.distance, i.length, function(E) {
      return i[E](b);
    }, function(E) {
      return i[E](w);
    }, b, w);
  }, o = [], u = [], l = [], c = [], v = 0; v < a.length; v++) {
    var f = {
      value: n.mode === "dendrogram" ? a[v] : [a[v]],
      key: v,
      index: v
    };
    o[v] = f, c[v] = f, u[v] = [], l[v] = 0;
  }
  for (var h = 0; h < o.length; h++)
    for (var d = 0; d <= h; d++) {
      var y = void 0;
      n.mode === "dendrogram" ? y = h === d ? 1 / 0 : s(o[h].value, o[d].value) : y = h === d ? 1 / 0 : s(o[h].value[0], o[d].value[0]), u[h][d] = y, u[d][h] = y, y < u[h][l[h]] && (l[h] = d);
    }
  for (var g = Yu(o, c, u, l, n); g; )
    g = Yu(o, c, u, l, n);
  var p;
  return n.mode === "dendrogram" ? (p = fo(o[0], n.dendrogramDepth, t), n.addDendrogram && vo(o[0], t)) : (p = new Array(o.length), o.forEach(function(m, b) {
    m.key = m.index = null, p[b] = t.collection(m.value);
  })), p;
}, _g = {
  hierarchicalClustering: Zu,
  hca: Zu
}, qg = gt({
  distance: "euclidean",
  // distance metric to compare attributes between two nodes
  preference: "median",
  // suitability of a data point to serve as an exemplar
  damping: 0.8,
  // damping factor between [0.5, 1)
  maxIterations: 1e3,
  // max number of iterations to run
  minIterations: 100,
  // min number of iterations to run in order for clustering to stop
  attributes: [
    // functions to quantify the similarity between any two points
    // e.g. node => node.data('weight')
  ]
}), Hg = function(e) {
  var t = e.damping, a = e.preference;
  0.5 <= t && t < 1 || We("Damping must range on [0.5, 1).  Got: ".concat(t));
  var n = ["median", "mean", "min", "max"];
  return n.some(function(i) {
    return i === a;
  }) || ne(a) || We("Preference must be one of [".concat(n.map(function(i) {
    return "'".concat(i, "'");
  }).join(", "), "] or a number.  Got: ").concat(a)), qg(e);
}, Ug = function(e, t, a, n) {
  var i = function(o, u) {
    return n[u](o);
  };
  return -ci(e, n.length, function(s) {
    return i(t, s);
  }, function(s) {
    return i(a, s);
  }, t, a);
}, Gg = function(e, t) {
  var a = null;
  return t === "median" ? a = Hh(e) : t === "mean" ? a = qh(e) : t === "min" ? a = $h(e) : t === "max" ? a = _h(e) : a = t, a;
}, Wg = function(e, t, a) {
  for (var n = [], i = 0; i < e; i++)
    t[i * e + i] + a[i * e + i] > 0 && n.push(i);
  return n;
}, Qu = function(e, t, a) {
  for (var n = [], i = 0; i < e; i++) {
    for (var s = -1, o = -1 / 0, u = 0; u < a.length; u++) {
      var l = a[u];
      t[i * e + l] > o && (s = l, o = t[i * e + l]);
    }
    s > 0 && n.push(s);
  }
  for (var c = 0; c < a.length; c++)
    n[a[c]] = a[c];
  return n;
}, Kg = function(e, t, a) {
  for (var n = Qu(e, t, a), i = 0; i < a.length; i++) {
    for (var s = [], o = 0; o < n.length; o++)
      n[o] === a[i] && s.push(o);
    for (var u = -1, l = -1 / 0, c = 0; c < s.length; c++) {
      for (var v = 0, f = 0; f < s.length; f++)
        v += t[s[f] * e + s[c]];
      v > l && (u = c, l = v);
    }
    a[i] = s[u];
  }
  return n = Qu(e, t, a), n;
}, Ju = function(e) {
  for (var t = this.cy(), a = this.nodes(), n = Hg(e), i = {}, s = 0; s < a.length; s++)
    i[a[s].id()] = s;
  var o, u, l, c, v, f;
  o = a.length, u = o * o, l = new Array(u);
  for (var h = 0; h < u; h++)
    l[h] = -1 / 0;
  for (var d = 0; d < o; d++)
    for (var y = 0; y < o; y++)
      d !== y && (l[d * o + y] = Ug(n.distance, a[d], a[y], n.attributes));
  c = Gg(l, n.preference);
  for (var g = 0; g < o; g++)
    l[g * o + g] = c;
  v = new Array(u);
  for (var p = 0; p < u; p++)
    v[p] = 0;
  f = new Array(u);
  for (var m = 0; m < u; m++)
    f[m] = 0;
  for (var b = new Array(o), w = new Array(o), E = new Array(o), C = 0; C < o; C++)
    b[C] = 0, w[C] = 0, E[C] = 0;
  for (var x = new Array(o * n.minIterations), T = 0; T < x.length; T++)
    x[T] = 0;
  var A;
  for (A = 0; A < n.maxIterations; A++) {
    for (var k = 0; k < o; k++) {
      for (var D = -1 / 0, B = -1 / 0, P = -1, L = 0, M = 0; M < o; M++)
        b[M] = v[k * o + M], L = f[k * o + M] + l[k * o + M], L >= D ? (B = D, D = L, P = M) : L > B && (B = L);
      for (var I = 0; I < o; I++)
        v[k * o + I] = (1 - n.damping) * (l[k * o + I] - D) + n.damping * b[I];
      v[k * o + P] = (1 - n.damping) * (l[k * o + P] - B) + n.damping * b[P];
    }
    for (var R = 0; R < o; R++) {
      for (var O = 0, $ = 0; $ < o; $++)
        b[$] = f[$ * o + R], w[$] = Math.max(0, v[$ * o + R]), O += w[$];
      O -= w[R], w[R] = v[R * o + R], O += w[R];
      for (var H = 0; H < o; H++)
        f[H * o + R] = (1 - n.damping) * Math.min(0, O - w[H]) + n.damping * b[H];
      f[R * o + R] = (1 - n.damping) * (O - w[R]) + n.damping * b[R];
    }
    for (var z = 0, F = 0; F < o; F++) {
      var U = f[F * o + F] + v[F * o + F] > 0 ? 1 : 0;
      x[A % n.minIterations * o + F] = U, z += U;
    }
    if (z > 0 && (A >= n.minIterations - 1 || A == n.maxIterations - 1)) {
      for (var Y = 0, G = 0; G < o; G++) {
        E[G] = 0;
        for (var Q = 0; Q < n.minIterations; Q++)
          E[G] += x[Q * o + G];
        (E[G] === 0 || E[G] === n.minIterations) && Y++;
      }
      if (Y === o)
        break;
    }
  }
  for (var J = Wg(o, v, f), ae = Kg(o, l, J), W = {}, N = 0; N < J.length; N++)
    W[J[N]] = [];
  for (var V = 0; V < a.length; V++) {
    var _ = i[a[V].id()], K = ae[_];
    K != null && W[K].push(a[V]);
  }
  for (var re = new Array(J.length), se = 0; se < J.length; se++)
    re[se] = t.collection(W[J[se]]);
  return re;
}, Xg = {
  affinityPropagation: Ju,
  ap: Ju
}, Yg = gt({
  root: void 0,
  directed: !1
}), Zg = {
  hierholzer: function(e) {
    if (!Me(e)) {
      var t = arguments;
      e = {
        root: t[0],
        directed: t[1]
      };
    }
    var a = Yg(e), n = a.root, i = a.directed, s = this, o = !1, u, l, c;
    n && (c = ge(n) ? this.filter(n)[0].id() : n[0].id());
    var v = {}, f = {};
    i ? s.forEach(function(m) {
      var b = m.id();
      if (m.isNode()) {
        var w = m.indegree(!0), E = m.outdegree(!0), C = w - E, x = E - w;
        C == 1 ? u ? o = !0 : u = b : x == 1 ? l ? o = !0 : l = b : (x > 1 || C > 1) && (o = !0), v[b] = [], m.outgoers().forEach(function(T) {
          T.isEdge() && v[b].push(T.id());
        });
      } else
        f[b] = [void 0, m.target().id()];
    }) : s.forEach(function(m) {
      var b = m.id();
      if (m.isNode()) {
        var w = m.degree(!0);
        w % 2 && (u ? l ? o = !0 : l = b : u = b), v[b] = [], m.connectedEdges().forEach(function(E) {
          return v[b].push(E.id());
        });
      } else
        f[b] = [m.source().id(), m.target().id()];
    });
    var h = {
      found: !1,
      trail: void 0
    };
    if (o)
      return h;
    if (l && u)
      if (i) {
        if (c && l != c)
          return h;
        c = l;
      } else {
        if (c && l != c && u != c)
          return h;
        c || (c = l);
      }
    else
      c || (c = s[0].id());
    var d = function(b) {
      for (var w = b, E = [b], C, x, T; v[w].length; )
        C = v[w].shift(), x = f[C][0], T = f[C][1], w != T ? (v[T] = v[T].filter(function(A) {
          return A != C;
        }), w = T) : !i && w != x && (v[x] = v[x].filter(function(A) {
          return A != C;
        }), w = x), E.unshift(C), E.unshift(w);
      return E;
    }, y = [], g = [];
    for (g = d(c); g.length != 1; )
      v[g[0]].length == 0 ? (y.unshift(s.getElementById(g.shift())), y.unshift(s.getElementById(g.shift()))) : g = d(g.shift()).concat(g);
    y.unshift(s.getElementById(g.shift()));
    for (var p in v)
      if (v[p].length)
        return h;
    return h.found = !0, h.trail = this.spawn(y, !0), h;
  }
}, wn = function() {
  var e = this, t = {}, a = 0, n = 0, i = [], s = [], o = {}, u = function(f, h) {
    for (var d = s.length - 1, y = [], g = e.spawn(); s[d].x != f || s[d].y != h; )
      y.push(s.pop().edge), d--;
    y.push(s.pop().edge), y.forEach(function(p) {
      var m = p.connectedNodes().intersection(e);
      g.merge(p), m.forEach(function(b) {
        var w = b.id(), E = b.connectedEdges().intersection(e);
        g.merge(b), t[w].cutVertex ? g.merge(E.filter(function(C) {
          return C.isLoop();
        })) : g.merge(E);
      });
    }), i.push(g);
  }, l = function(f, h, d) {
    f === d && (n += 1), t[h] = {
      id: a,
      low: a++,
      cutVertex: !1
    };
    var y = e.getElementById(h).connectedEdges().intersection(e);
    if (y.size() === 0)
      i.push(e.spawn(e.getElementById(h)));
    else {
      var g, p, m, b;
      y.forEach(function(w) {
        g = w.source().id(), p = w.target().id(), m = g === h ? p : g, m !== d && (b = w.id(), o[b] || (o[b] = !0, s.push({
          x: h,
          y: m,
          edge: w
        })), m in t ? t[h].low = Math.min(t[h].low, t[m].id) : (l(f, m, h), t[h].low = Math.min(t[h].low, t[m].low), t[h].id <= t[m].low && (t[h].cutVertex = !0, u(h, m))));
      });
    }
  };
  e.forEach(function(v) {
    if (v.isNode()) {
      var f = v.id();
      f in t || (n = 0, l(f, f), t[f].cutVertex = n > 1);
    }
  });
  var c = Object.keys(t).filter(function(v) {
    return t[v].cutVertex;
  }).map(function(v) {
    return e.getElementById(v);
  });
  return {
    cut: e.spawn(c),
    components: i
  };
}, Qg = {
  hopcroftTarjanBiconnected: wn,
  htbc: wn,
  htb: wn,
  hopcroftTarjanBiconnectedComponents: wn
}, xn = function() {
  var e = this, t = {}, a = 0, n = [], i = [], s = e.spawn(e), o = function(l) {
    i.push(l), t[l] = {
      index: a,
      low: a++,
      explored: !1
    };
    var c = e.getElementById(l).connectedEdges().intersection(e);
    if (c.forEach(function(y) {
      var g = y.target().id();
      g !== l && (g in t || o(g), t[g].explored || (t[l].low = Math.min(t[l].low, t[g].low)));
    }), t[l].index === t[l].low) {
      for (var v = e.spawn(); ; ) {
        var f = i.pop();
        if (v.merge(e.getElementById(f)), t[f].low = t[l].index, t[f].explored = !0, f === l)
          break;
      }
      var h = v.edgesWith(v), d = v.merge(h);
      n.push(d), s = s.difference(d);
    }
  };
  return e.forEach(function(u) {
    if (u.isNode()) {
      var l = u.id();
      l in t || o(l);
    }
  }), {
    cut: s,
    components: n
  };
}, Jg = {
  tarjanStronglyConnected: xn,
  tsc: xn,
  tscc: xn,
  tarjanStronglyConnectedComponents: xn
}, Dv = {};
[Ua, Dh, Bh, Lh, Mh, Oh, Fh, vg, ia, sa, co, Tg, zg, _g, Xg, Zg, Qg, Jg].forEach(function(r) {
  be(Dv, r);
});
/*!
Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
Licensed under The MIT License (http://opensource.org/licenses/MIT)
*/
var Bv = 0, Pv = 1, Lv = 2, Vt = function(e) {
  if (!(this instanceof Vt))
    return new Vt(e);
  this.id = "Thenable/1.0.7", this.state = Bv, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
    then: this.then.bind(this)
  }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
Vt.prototype = {
  /*  promise resolving methods  */
  fulfill: function(e) {
    return ju(this, Pv, "fulfillValue", e);
  },
  reject: function(e) {
    return ju(this, Lv, "rejectReason", e);
  },
  /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
  then: function(e, t) {
    var a = this, n = new Vt();
    return a.onFulfilled.push(tl(e, n, "fulfill")), a.onRejected.push(tl(t, n, "reject")), Rv(a), n.proxy;
  }
};
var ju = function(e, t, a, n) {
  return e.state === Bv && (e.state = t, e[a] = n, Rv(e)), e;
}, Rv = function(e) {
  e.state === Pv ? el(e, "onFulfilled", e.fulfillValue) : e.state === Lv && el(e, "onRejected", e.rejectReason);
}, el = function(e, t, a) {
  if (e[t].length !== 0) {
    var n = e[t];
    e[t] = [];
    var i = function() {
      for (var o = 0; o < n.length; o++)
        n[o](a);
    };
    typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
  }
}, tl = function(e, t, a) {
  return function(n) {
    if (typeof e != "function")
      t[a].call(t, n);
    else {
      var i;
      try {
        i = e(n);
      } catch (s) {
        t.reject(s);
        return;
      }
      Mv(t, i);
    }
  };
}, Mv = function(e, t) {
  if (e === t || e.proxy === t) {
    e.reject(new TypeError("cannot resolve promise with itself"));
    return;
  }
  var a;
  if (nt(t) === "object" && t !== null || typeof t == "function")
    try {
      a = t.then;
    } catch (i) {
      e.reject(i);
      return;
    }
  if (typeof a == "function") {
    var n = !1;
    try {
      a.call(
        t,
        /*  resolvePromise  */
        /*  [Promises/A+ 2.3.3.3.1]  */
        function(i) {
          n || (n = !0, i === t ? e.reject(new TypeError("circular thenable chain")) : Mv(e, i));
        },
        /*  rejectPromise  */
        /*  [Promises/A+ 2.3.3.3.2]  */
        function(i) {
          n || (n = !0, e.reject(i));
        }
      );
    } catch (i) {
      n || e.reject(i);
    }
    return;
  }
  e.fulfill(t);
};
Vt.all = function(r) {
  return new Vt(function(e, t) {
    for (var a = new Array(r.length), n = 0, i = function(u, l) {
      a[u] = l, n++, n === r.length && e(a);
    }, s = 0; s < r.length; s++)
      (function(o) {
        var u = r[o], l = u != null && u.then != null;
        if (l)
          u.then(function(v) {
            i(o, v);
          }, function(v) {
            t(v);
          });
        else {
          var c = u;
          i(o, c);
        }
      })(s);
  });
};
Vt.resolve = function(r) {
  return new Vt(function(e, t) {
    e(r);
  });
};
Vt.reject = function(r) {
  return new Vt(function(e, t) {
    t(r);
  });
};
var ha = typeof Promise < "u" ? Promise : Vt, ho = function(e, t, a) {
  var n = Mo(e), i = !n, s = this._private = be({
    duration: 1e3
  }, t, a);
  if (s.target = e, s.style = s.style || s.css, s.started = !1, s.playing = !1, s.hooked = !1, s.applying = !1, s.progress = 0, s.completes = [], s.frames = [], s.complete && Ke(s.complete) && s.completes.push(s.complete), i) {
    var o = e.position();
    s.startPosition = s.startPosition || {
      x: o.x,
      y: o.y
    }, s.startStyle = s.startStyle || e.cy().style().getAnimationStartStyle(e, s.style);
  }
  if (n) {
    var u = e.pan();
    s.startPan = {
      x: u.x,
      y: u.y
    }, s.startZoom = e.zoom();
  }
  this.length = 1, this[0] = this;
}, Fr = ho.prototype;
be(Fr, {
  instanceString: function() {
    return "animation";
  },
  hook: function() {
    var e = this._private;
    if (!e.hooked) {
      var t, a = e.target._private.animation;
      e.queue ? t = a.queue : t = a.current, t.push(this), Pt(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
    }
    return this;
  },
  play: function() {
    var e = this._private;
    return e.progress === 1 && (e.progress = 0), e.playing = !0, e.started = !1, e.stopped = !1, this.hook(), this;
  },
  playing: function() {
    return this._private.playing;
  },
  apply: function() {
    var e = this._private;
    return e.applying = !0, e.started = !1, e.stopped = !1, this.hook(), this;
  },
  applying: function() {
    return this._private.applying;
  },
  pause: function() {
    var e = this._private;
    return e.playing = !1, e.started = !1, this;
  },
  stop: function() {
    var e = this._private;
    return e.playing = !1, e.started = !1, e.stopped = !0, this;
  },
  rewind: function() {
    return this.progress(0);
  },
  fastforward: function() {
    return this.progress(1);
  },
  time: function(e) {
    var t = this._private;
    return e === void 0 ? t.progress * t.duration : this.progress(e / t.duration);
  },
  progress: function(e) {
    var t = this._private, a = t.playing;
    return e === void 0 ? t.progress : (a && this.pause(), t.progress = e, t.started = !1, a && this.play(), this);
  },
  completed: function() {
    return this._private.progress === 1;
  },
  reverse: function() {
    var e = this._private, t = e.playing;
    t && this.pause(), e.progress = 1 - e.progress, e.started = !1;
    var a = function(l, c) {
      var v = e[l];
      v != null && (e[l] = e[c], e[c] = v);
    };
    if (a("zoom", "startZoom"), a("pan", "startPan"), a("position", "startPosition"), e.style)
      for (var n = 0; n < e.style.length; n++) {
        var i = e.style[n], s = i.name, o = e.startStyle[s];
        e.startStyle[s] = i, e.style[n] = o;
      }
    return t && this.play(), this;
  },
  promise: function(e) {
    var t = this._private, a;
    switch (e) {
      case "frame":
        a = t.frames;
        break;
      default:
      case "complete":
      case "completed":
        a = t.completes;
    }
    return new ha(function(n, i) {
      a.push(function() {
        n();
      });
    });
  }
});
Fr.complete = Fr.completed;
Fr.run = Fr.play;
Fr.running = Fr.playing;
var jg = {
  animated: function() {
    return function() {
      var t = this, a = t.length !== void 0, n = a ? t : [t], i = this._private.cy || this;
      if (!i.styleEnabled())
        return !1;
      var s = n[0];
      if (s)
        return s._private.animation.current.length > 0;
    };
  },
  // animated
  clearQueue: function() {
    return function() {
      var t = this, a = t.length !== void 0, n = a ? t : [t], i = this._private.cy || this;
      if (!i.styleEnabled())
        return this;
      for (var s = 0; s < n.length; s++) {
        var o = n[s];
        o._private.animation.queue = [];
      }
      return this;
    };
  },
  // clearQueue
  delay: function() {
    return function(t, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animate({
        delay: t,
        duration: t,
        complete: a
      }) : this;
    };
  },
  // delay
  delayAnimation: function() {
    return function(t, a) {
      var n = this._private.cy || this;
      return n.styleEnabled() ? this.animation({
        delay: t,
        duration: t,
        complete: a
      }) : this;
    };
  },
  // delay
  animation: function() {
    return function(t, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this, u = !i, l = !u;
      if (!o.styleEnabled())
        return this;
      var c = o.style();
      t = be({}, t, a);
      var v = Object.keys(t).length === 0;
      if (v)
        return new ho(s[0], t);
      switch (t.duration === void 0 && (t.duration = 400), t.duration) {
        case "slow":
          t.duration = 600;
          break;
        case "fast":
          t.duration = 200;
          break;
      }
      if (l && (t.style = c.getPropsList(t.style || t.css), t.css = void 0), l && t.renderedPosition != null) {
        var f = t.renderedPosition, h = o.pan(), d = o.zoom();
        t.position = mv(f, d, h);
      }
      if (u && t.panBy != null) {
        var y = t.panBy, g = o.pan();
        t.pan = {
          x: g.x + y.x,
          y: g.y + y.y
        };
      }
      var p = t.center || t.centre;
      if (u && p != null) {
        var m = o.getCenterPan(p.eles, t.zoom);
        m != null && (t.pan = m);
      }
      if (u && t.fit != null) {
        var b = t.fit, w = o.getFitViewport(b.eles || b.boundingBox, b.padding);
        w != null && (t.pan = w.pan, t.zoom = w.zoom);
      }
      if (u && Me(t.zoom)) {
        var E = o.getZoomedViewport(t.zoom);
        E != null ? (E.zoomed && (t.zoom = E.zoom), E.panned && (t.pan = E.pan)) : t.zoom = null;
      }
      return new ho(s[0], t);
    };
  },
  // animate
  animate: function() {
    return function(t, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
      if (!o.styleEnabled())
        return this;
      a && (t = be({}, t, a));
      for (var u = 0; u < s.length; u++) {
        var l = s[u], c = l.animated() && (t.queue === void 0 || t.queue), v = l.animation(t, c ? {
          queue: !0
        } : void 0);
        v.play();
      }
      return this;
    };
  },
  // animate
  stop: function() {
    return function(t, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
      if (!o.styleEnabled())
        return this;
      for (var u = 0; u < s.length; u++) {
        for (var l = s[u], c = l._private, v = c.animation.current, f = 0; f < v.length; f++) {
          var h = v[f], d = h._private;
          a && (d.duration = 0);
        }
        t && (c.animation.queue = []), a || (c.animation.current = []);
      }
      return o.notify("draw"), this;
    };
  }
  // stop
}, Ji, rl;
function vi() {
  if (rl)
    return Ji;
  rl = 1;
  var r = Array.isArray;
  return Ji = r, Ji;
}
var ji, al;
function ep() {
  if (al)
    return ji;
  al = 1;
  var r = vi(), e = an(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
  function n(i, s) {
    if (r(i))
      return !1;
    var o = typeof i;
    return o == "number" || o == "symbol" || o == "boolean" || i == null || e(i) ? !0 : a.test(i) || !t.test(i) || s != null && i in Object(s);
  }
  return ji = n, ji;
}
var es, nl;
function tp() {
  if (nl)
    return es;
  nl = 1;
  var r = lv(), e = rn(), t = "[object AsyncFunction]", a = "[object Function]", n = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(o) {
    if (!e(o))
      return !1;
    var u = r(o);
    return u == a || u == n || u == t || u == i;
  }
  return es = s, es;
}
var ts, il;
function rp() {
  if (il)
    return ts;
  il = 1;
  var r = oi(), e = r["__core-js_shared__"];
  return ts = e, ts;
}
var rs, sl;
function ap() {
  if (sl)
    return rs;
  sl = 1;
  var r = rp(), e = function() {
    var a = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  }();
  function t(a) {
    return !!e && e in a;
  }
  return rs = t, rs;
}
var as, ol;
function np() {
  if (ol)
    return as;
  ol = 1;
  var r = Function.prototype, e = r.toString;
  function t(a) {
    if (a != null) {
      try {
        return e.call(a);
      } catch {
      }
      try {
        return a + "";
      } catch {
      }
    }
    return "";
  }
  return as = t, as;
}
var ns, ul;
function ip() {
  if (ul)
    return ns;
  ul = 1;
  var r = tp(), e = ap(), t = rn(), a = np(), n = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, u = s.toString, l = o.hasOwnProperty, c = RegExp(
    "^" + u.call(l).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function v(f) {
    if (!t(f) || e(f))
      return !1;
    var h = r(f) ? c : i;
    return h.test(a(f));
  }
  return ns = v, ns;
}
var is, ll;
function sp() {
  if (ll)
    return is;
  ll = 1;
  function r(e, t) {
    return e == null ? void 0 : e[t];
  }
  return is = r, is;
}
var ss, cl;
function Uo() {
  if (cl)
    return ss;
  cl = 1;
  var r = ip(), e = sp();
  function t(a, n) {
    var i = e(a, n);
    return r(i) ? i : void 0;
  }
  return ss = t, ss;
}
var os, vl;
function fi() {
  if (vl)
    return os;
  vl = 1;
  var r = Uo(), e = r(Object, "create");
  return os = e, os;
}
var us, fl;
function op() {
  if (fl)
    return us;
  fl = 1;
  var r = fi();
  function e() {
    this.__data__ = r ? r(null) : {}, this.size = 0;
  }
  return us = e, us;
}
var ls, dl;
function up() {
  if (dl)
    return ls;
  dl = 1;
  function r(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  return ls = r, ls;
}
var cs, hl;
function lp() {
  if (hl)
    return cs;
  hl = 1;
  var r = fi(), e = "__lodash_hash_undefined__", t = Object.prototype, a = t.hasOwnProperty;
  function n(i) {
    var s = this.__data__;
    if (r) {
      var o = s[i];
      return o === e ? void 0 : o;
    }
    return a.call(s, i) ? s[i] : void 0;
  }
  return cs = n, cs;
}
var vs, gl;
function cp() {
  if (gl)
    return vs;
  gl = 1;
  var r = fi(), e = Object.prototype, t = e.hasOwnProperty;
  function a(n) {
    var i = this.__data__;
    return r ? i[n] !== void 0 : t.call(i, n);
  }
  return vs = a, vs;
}
var fs, pl;
function vp() {
  if (pl)
    return fs;
  pl = 1;
  var r = fi(), e = "__lodash_hash_undefined__";
  function t(a, n) {
    var i = this.__data__;
    return this.size += this.has(a) ? 0 : 1, i[a] = r && n === void 0 ? e : n, this;
  }
  return fs = t, fs;
}
var ds, yl;
function fp() {
  if (yl)
    return ds;
  yl = 1;
  var r = op(), e = up(), t = lp(), a = cp(), n = vp();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, ds = i, ds;
}
var hs, ml;
function dp() {
  if (ml)
    return hs;
  ml = 1;
  function r() {
    this.__data__ = [], this.size = 0;
  }
  return hs = r, hs;
}
var gs, bl;
function Iv() {
  if (bl)
    return gs;
  bl = 1;
  function r(e, t) {
    return e === t || e !== e && t !== t;
  }
  return gs = r, gs;
}
var ps, wl;
function di() {
  if (wl)
    return ps;
  wl = 1;
  var r = Iv();
  function e(t, a) {
    for (var n = t.length; n--; )
      if (r(t[n][0], a))
        return n;
    return -1;
  }
  return ps = e, ps;
}
var ys, xl;
function hp() {
  if (xl)
    return ys;
  xl = 1;
  var r = di(), e = Array.prototype, t = e.splice;
  function a(n) {
    var i = this.__data__, s = r(i, n);
    if (s < 0)
      return !1;
    var o = i.length - 1;
    return s == o ? i.pop() : t.call(i, s, 1), --this.size, !0;
  }
  return ys = a, ys;
}
var ms, El;
function gp() {
  if (El)
    return ms;
  El = 1;
  var r = di();
  function e(t) {
    var a = this.__data__, n = r(a, t);
    return n < 0 ? void 0 : a[n][1];
  }
  return ms = e, ms;
}
var bs, Cl;
function pp() {
  if (Cl)
    return bs;
  Cl = 1;
  var r = di();
  function e(t) {
    return r(this.__data__, t) > -1;
  }
  return bs = e, bs;
}
var ws, Tl;
function yp() {
  if (Tl)
    return ws;
  Tl = 1;
  var r = di();
  function e(t, a) {
    var n = this.__data__, i = r(n, t);
    return i < 0 ? (++this.size, n.push([t, a])) : n[i][1] = a, this;
  }
  return ws = e, ws;
}
var xs, Sl;
function mp() {
  if (Sl)
    return xs;
  Sl = 1;
  var r = dp(), e = hp(), t = gp(), a = pp(), n = yp();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, xs = i, xs;
}
var Es, Al;
function bp() {
  if (Al)
    return Es;
  Al = 1;
  var r = Uo(), e = oi(), t = r(e, "Map");
  return Es = t, Es;
}
var Cs, kl;
function wp() {
  if (kl)
    return Cs;
  kl = 1;
  var r = fp(), e = mp(), t = bp();
  function a() {
    this.size = 0, this.__data__ = {
      hash: new r(),
      map: new (t || e)(),
      string: new r()
    };
  }
  return Cs = a, Cs;
}
var Ts, Dl;
function xp() {
  if (Dl)
    return Ts;
  Dl = 1;
  function r(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  return Ts = r, Ts;
}
var Ss, Bl;
function hi() {
  if (Bl)
    return Ss;
  Bl = 1;
  var r = xp();
  function e(t, a) {
    var n = t.__data__;
    return r(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
  }
  return Ss = e, Ss;
}
var As, Pl;
function Ep() {
  if (Pl)
    return As;
  Pl = 1;
  var r = hi();
  function e(t) {
    var a = r(this, t).delete(t);
    return this.size -= a ? 1 : 0, a;
  }
  return As = e, As;
}
var ks, Ll;
function Cp() {
  if (Ll)
    return ks;
  Ll = 1;
  var r = hi();
  function e(t) {
    return r(this, t).get(t);
  }
  return ks = e, ks;
}
var Ds, Rl;
function Tp() {
  if (Rl)
    return Ds;
  Rl = 1;
  var r = hi();
  function e(t) {
    return r(this, t).has(t);
  }
  return Ds = e, Ds;
}
var Bs, Ml;
function Sp() {
  if (Ml)
    return Bs;
  Ml = 1;
  var r = hi();
  function e(t, a) {
    var n = r(this, t), i = n.size;
    return n.set(t, a), this.size += n.size == i ? 0 : 1, this;
  }
  return Bs = e, Bs;
}
var Ps, Il;
function Ap() {
  if (Il)
    return Ps;
  Il = 1;
  var r = wp(), e = Ep(), t = Cp(), a = Tp(), n = Sp();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, Ps = i, Ps;
}
var Ls, Ol;
function kp() {
  if (Ol)
    return Ls;
  Ol = 1;
  var r = Ap(), e = "Expected a function";
  function t(a, n) {
    if (typeof a != "function" || n != null && typeof n != "function")
      throw new TypeError(e);
    var i = function() {
      var s = arguments, o = n ? n.apply(this, s) : s[0], u = i.cache;
      if (u.has(o))
        return u.get(o);
      var l = a.apply(this, s);
      return i.cache = u.set(o, l) || u, l;
    };
    return i.cache = new (t.Cache || r)(), i;
  }
  return t.Cache = r, Ls = t, Ls;
}
var Rs, Nl;
function Dp() {
  if (Nl)
    return Rs;
  Nl = 1;
  var r = kp(), e = 500;
  function t(a) {
    var n = r(a, function(s) {
      return i.size === e && i.clear(), s;
    }), i = n.cache;
    return n;
  }
  return Rs = t, Rs;
}
var Ms, zl;
function Ov() {
  if (zl)
    return Ms;
  zl = 1;
  var r = Dp(), e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, a = r(function(n) {
    var i = [];
    return n.charCodeAt(0) === 46 && i.push(""), n.replace(e, function(s, o, u, l) {
      i.push(u ? l.replace(t, "$1") : o || s);
    }), i;
  });
  return Ms = a, Ms;
}
var Is, Fl;
function Nv() {
  if (Fl)
    return Is;
  Fl = 1;
  function r(e, t) {
    for (var a = -1, n = e == null ? 0 : e.length, i = Array(n); ++a < n; )
      i[a] = t(e[a], a, e);
    return i;
  }
  return Is = r, Is;
}
var Os, Vl;
function Bp() {
  if (Vl)
    return Os;
  Vl = 1;
  var r = Oo(), e = Nv(), t = vi(), a = an(), n = r ? r.prototype : void 0, i = n ? n.toString : void 0;
  function s(o) {
    if (typeof o == "string")
      return o;
    if (t(o))
      return e(o, s) + "";
    if (a(o))
      return i ? i.call(o) : "";
    var u = o + "";
    return u == "0" && 1 / o == -1 / 0 ? "-0" : u;
  }
  return Os = s, Os;
}
var Ns, $l;
function zv() {
  if ($l)
    return Ns;
  $l = 1;
  var r = Bp();
  function e(t) {
    return t == null ? "" : r(t);
  }
  return Ns = e, Ns;
}
var zs, _l;
function Fv() {
  if (_l)
    return zs;
  _l = 1;
  var r = vi(), e = ep(), t = Ov(), a = zv();
  function n(i, s) {
    return r(i) ? i : e(i, s) ? [i] : t(a(i));
  }
  return zs = n, zs;
}
var Fs, ql;
function Go() {
  if (ql)
    return Fs;
  ql = 1;
  var r = an();
  function e(t) {
    if (typeof t == "string" || r(t))
      return t;
    var a = t + "";
    return a == "0" && 1 / t == -1 / 0 ? "-0" : a;
  }
  return Fs = e, Fs;
}
var Vs, Hl;
function Pp() {
  if (Hl)
    return Vs;
  Hl = 1;
  var r = Fv(), e = Go();
  function t(a, n) {
    n = r(n, a);
    for (var i = 0, s = n.length; a != null && i < s; )
      a = a[e(n[i++])];
    return i && i == s ? a : void 0;
  }
  return Vs = t, Vs;
}
var $s, Ul;
function Lp() {
  if (Ul)
    return $s;
  Ul = 1;
  var r = Pp();
  function e(t, a, n) {
    var i = t == null ? void 0 : r(t, a);
    return i === void 0 ? n : i;
  }
  return $s = e, $s;
}
var Rp = Lp(), Mp = /* @__PURE__ */ tn(Rp), _s, Gl;
function Ip() {
  if (Gl)
    return _s;
  Gl = 1;
  var r = Uo(), e = function() {
    try {
      var t = r(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return _s = e, _s;
}
var qs, Wl;
function Op() {
  if (Wl)
    return qs;
  Wl = 1;
  var r = Ip();
  function e(t, a, n) {
    a == "__proto__" && r ? r(t, a, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : t[a] = n;
  }
  return qs = e, qs;
}
var Hs, Kl;
function Np() {
  if (Kl)
    return Hs;
  Kl = 1;
  var r = Op(), e = Iv(), t = Object.prototype, a = t.hasOwnProperty;
  function n(i, s, o) {
    var u = i[s];
    (!(a.call(i, s) && e(u, o)) || o === void 0 && !(s in i)) && r(i, s, o);
  }
  return Hs = n, Hs;
}
var Us, Xl;
function zp() {
  if (Xl)
    return Us;
  Xl = 1;
  var r = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function t(a, n) {
    var i = typeof a;
    return n = n ?? r, !!n && (i == "number" || i != "symbol" && e.test(a)) && a > -1 && a % 1 == 0 && a < n;
  }
  return Us = t, Us;
}
var Gs, Yl;
function Fp() {
  if (Yl)
    return Gs;
  Yl = 1;
  var r = Np(), e = Fv(), t = zp(), a = rn(), n = Go();
  function i(s, o, u, l) {
    if (!a(s))
      return s;
    o = e(o, s);
    for (var c = -1, v = o.length, f = v - 1, h = s; h != null && ++c < v; ) {
      var d = n(o[c]), y = u;
      if (d === "__proto__" || d === "constructor" || d === "prototype")
        return s;
      if (c != f) {
        var g = h[d];
        y = l ? l(g, d, h) : void 0, y === void 0 && (y = a(g) ? g : t(o[c + 1]) ? [] : {});
      }
      r(h, d, y), h = h[d];
    }
    return s;
  }
  return Gs = i, Gs;
}
var Ws, Zl;
function Vp() {
  if (Zl)
    return Ws;
  Zl = 1;
  var r = Fp();
  function e(t, a, n) {
    return t == null ? t : r(t, a, n);
  }
  return Ws = e, Ws;
}
var $p = Vp(), _p = /* @__PURE__ */ tn($p), Ks, Ql;
function qp() {
  if (Ql)
    return Ks;
  Ql = 1;
  function r(e, t) {
    var a = -1, n = e.length;
    for (t || (t = Array(n)); ++a < n; )
      t[a] = e[a];
    return t;
  }
  return Ks = r, Ks;
}
var Xs, Jl;
function Hp() {
  if (Jl)
    return Xs;
  Jl = 1;
  var r = Nv(), e = qp(), t = vi(), a = an(), n = Ov(), i = Go(), s = zv();
  function o(u) {
    return t(u) ? r(u, i) : a(u) ? [u] : e(n(s(u)));
  }
  return Xs = o, Xs;
}
var Up = Hp(), Gp = /* @__PURE__ */ tn(Up), Wp = {
  // access data field
  data: function(e) {
    var t = {
      field: "data",
      bindingEvent: "data",
      allowBinding: !1,
      allowSetting: !1,
      allowGetting: !1,
      settingEvent: "data",
      settingTriggersEvent: !1,
      triggerFnName: "trigger",
      immutableKeys: {},
      // key => true if immutable
      updateStyle: !1,
      beforeGet: function(n) {
      },
      beforeSet: function(n, i) {
      },
      onSet: function(n) {
      },
      canSet: function(n) {
        return !0;
      }
    };
    return e = be({}, t, e), function(n, i) {
      var s = e, o = this, u = o.length !== void 0, l = u ? o : [o], c = u ? o[0] : o;
      if (ge(n)) {
        var v = n.indexOf(".") !== -1, f = v && Gp(n);
        if (s.allowGetting && i === void 0) {
          var h;
          return c && (s.beforeGet(c), f && c._private[s.field][n] === void 0 ? h = Mp(c._private[s.field], f) : h = c._private[s.field][n]), h;
        } else if (s.allowSetting && i !== void 0) {
          var d = !s.immutableKeys[n];
          if (d) {
            var y = jc({}, n, i);
            s.beforeSet(o, y);
            for (var g = 0, p = l.length; g < p; g++) {
              var m = l[g];
              s.canSet(m) && (f && c._private[s.field][n] === void 0 ? _p(m._private[s.field], f, i) : m._private[s.field][n] = i);
            }
            s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
          }
        }
      } else if (s.allowSetting && Me(n)) {
        var b = n, w, E, C = Object.keys(b);
        s.beforeSet(o, b);
        for (var x = 0; x < C.length; x++) {
          w = C[x], E = b[w];
          var T = !s.immutableKeys[w];
          if (T)
            for (var A = 0; A < l.length; A++) {
              var k = l[A];
              s.canSet(k) && (k._private[s.field][w] = E);
            }
        }
        s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
      } else if (s.allowBinding && Ke(n)) {
        var D = n;
        o.on(s.bindingEvent, D);
      } else if (s.allowGetting && n === void 0) {
        var B;
        return c && (s.beforeGet(c), B = c._private[s.field]), B;
      }
      return o;
    };
  },
  // data
  // remove data field
  removeData: function(e) {
    var t = {
      field: "data",
      event: "data",
      triggerFnName: "trigger",
      triggerEvent: !1,
      immutableKeys: {}
      // key => true if immutable
    };
    return e = be({}, t, e), function(n) {
      var i = e, s = this, o = s.length !== void 0, u = o ? s : [s];
      if (ge(n)) {
        for (var l = n.split(/\s+/), c = l.length, v = 0; v < c; v++) {
          var f = l[v];
          if (!hr(f)) {
            var h = !i.immutableKeys[f];
            if (h)
              for (var d = 0, y = u.length; d < y; d++)
                u[d]._private[i.field][f] = void 0;
          }
        }
        i.triggerEvent && s[i.triggerFnName](i.event);
      } else if (n === void 0) {
        for (var g = 0, p = u.length; g < p; g++)
          for (var m = u[g]._private[i.field], b = Object.keys(m), w = 0; w < b.length; w++) {
            var E = b[w], C = !i.immutableKeys[E];
            C && (m[E] = void 0);
          }
        i.triggerEvent && s[i.triggerFnName](i.event);
      }
      return s;
    };
  }
  // removeData
}, Kp = {
  eventAliasesOn: function(e) {
    var t = e;
    t.addListener = t.listen = t.bind = t.on, t.unlisten = t.unbind = t.off = t.removeListener, t.trigger = t.emit, t.pon = t.promiseOn = function(a, n) {
      var i = this, s = Array.prototype.slice.call(arguments, 0);
      return new ha(function(o, u) {
        var l = function(h) {
          i.off.apply(i, v), o(h);
        }, c = s.concat([l]), v = c.concat([]);
        i.on.apply(i, c);
      });
    };
  }
}, Fe = {};
[jg, Wp, Kp].forEach(function(r) {
  be(Fe, r);
});
var Xp = {
  animate: Fe.animate(),
  animation: Fe.animation(),
  animated: Fe.animated(),
  clearQueue: Fe.clearQueue(),
  delay: Fe.delay(),
  delayAnimation: Fe.delayAnimation(),
  stop: Fe.stop()
}, In = {
  classes: function(e) {
    var t = this;
    if (e === void 0) {
      var a = [];
      return t[0]._private.classes.forEach(function(d) {
        return a.push(d);
      }), a;
    } else
      _e(e) || (e = (e || "").match(/\S+/g) || []);
    for (var n = [], i = new da(e), s = 0; s < t.length; s++) {
      for (var o = t[s], u = o._private, l = u.classes, c = !1, v = 0; v < e.length; v++) {
        var f = e[v], h = l.has(f);
        if (!h) {
          c = !0;
          break;
        }
      }
      c || (c = l.size !== e.length), c && (u.classes = i, n.push(o));
    }
    return n.length > 0 && this.spawn(n).updateStyle().emit("class"), t;
  },
  addClass: function(e) {
    return this.toggleClass(e, !0);
  },
  hasClass: function(e) {
    var t = this[0];
    return t != null && t._private.classes.has(e);
  },
  toggleClass: function(e, t) {
    _e(e) || (e = e.match(/\S+/g) || []);
    for (var a = this, n = t === void 0, i = [], s = 0, o = a.length; s < o; s++)
      for (var u = a[s], l = u._private.classes, c = !1, v = 0; v < e.length; v++) {
        var f = e[v], h = l.has(f), d = !1;
        t || n && !h ? (l.add(f), d = !0) : (!t || n && h) && (l.delete(f), d = !0), !c && d && (i.push(u), c = !0);
      }
    return i.length > 0 && this.spawn(i).updateStyle().emit("class"), a;
  },
  removeClass: function(e) {
    return this.toggleClass(e, !1);
  },
  flashClass: function(e, t) {
    var a = this;
    if (t == null)
      t = 250;
    else if (t === 0)
      return a;
    return a.addClass(e), setTimeout(function() {
      a.removeClass(e);
    }, t), a;
  }
};
In.className = In.classNames = In.classes;
var Re = {
  metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
  // chars we need to escape in let names, etc
  comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
  // binary comparison op (used in data selectors)
  boolOp: "\\?|\\!|\\^",
  // boolean (unary) operators (used in data selectors)
  string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
  // string literals (used in data selectors) -- doublequotes | singlequotes
  number: at,
  // number literal (used in data selectors) --- e.g. 0.1234, 1234, 12e123
  meta: "degree|indegree|outdegree",
  // allowed metadata fields (i.e. allowed functions to use from Collection)
  separator: "\\s*,\\s*",
  // queries are separated by commas, e.g. edge[foo = 'bar'], node.someClass
  descendant: "\\s+",
  child: "\\s+>\\s+",
  subject: "\\$",
  group: "node|edge|\\*",
  directedEdge: "\\s+->\\s+",
  undirectedEdge: "\\s+<->\\s+"
};
Re.variable = "(?:[\\w-.]|(?:\\\\" + Re.metaChar + "))+";
Re.className = "(?:[\\w-]|(?:\\\\" + Re.metaChar + "))+";
Re.value = Re.string + "|" + Re.number;
Re.id = Re.variable;
(function() {
  var r, e, t;
  for (r = Re.comparatorOp.split("|"), t = 0; t < r.length; t++)
    e = r[t], Re.comparatorOp += "|@" + e;
  for (r = Re.comparatorOp.split("|"), t = 0; t < r.length; t++)
    e = r[t], !(e.indexOf("!") >= 0) && e !== "=" && (Re.comparatorOp += "|\\!" + e);
})();
var $e = function() {
  return {
    checks: []
  };
}, oe = {
  /** E.g. node */
  GROUP: 0,
  /** A collection of elements */
  COLLECTION: 1,
  /** A filter(ele) function */
  FILTER: 2,
  /** E.g. [foo > 1] */
  DATA_COMPARE: 3,
  /** E.g. [foo] */
  DATA_EXIST: 4,
  /** E.g. [?foo] */
  DATA_BOOL: 5,
  /** E.g. [[degree > 2]] */
  META_COMPARE: 6,
  /** E.g. :selected */
  STATE: 7,
  /** E.g. #foo */
  ID: 8,
  /** E.g. .foo */
  CLASS: 9,
  /** E.g. #foo <-> #bar */
  UNDIRECTED_EDGE: 10,
  /** E.g. #foo -> #bar */
  DIRECTED_EDGE: 11,
  /** E.g. $#foo -> #bar */
  NODE_SOURCE: 12,
  /** E.g. #foo -> $#bar */
  NODE_TARGET: 13,
  /** E.g. $#foo <-> #bar */
  NODE_NEIGHBOR: 14,
  /** E.g. #foo > #bar */
  CHILD: 15,
  /** E.g. #foo #bar */
  DESCENDANT: 16,
  /** E.g. $#foo > #bar */
  PARENT: 17,
  /** E.g. $#foo #bar */
  ANCESTOR: 18,
  /** E.g. #foo > $bar > #baz */
  COMPOUND_SPLIT: 19,
  /** Always matches, useful placeholder for subject in `COMPOUND_SPLIT` */
  TRUE: 20
}, go = [{
  selector: ":selected",
  matches: function(e) {
    return e.selected();
  }
}, {
  selector: ":unselected",
  matches: function(e) {
    return !e.selected();
  }
}, {
  selector: ":selectable",
  matches: function(e) {
    return e.selectable();
  }
}, {
  selector: ":unselectable",
  matches: function(e) {
    return !e.selectable();
  }
}, {
  selector: ":locked",
  matches: function(e) {
    return e.locked();
  }
}, {
  selector: ":unlocked",
  matches: function(e) {
    return !e.locked();
  }
}, {
  selector: ":visible",
  matches: function(e) {
    return e.visible();
  }
}, {
  selector: ":hidden",
  matches: function(e) {
    return !e.visible();
  }
}, {
  selector: ":transparent",
  matches: function(e) {
    return e.transparent();
  }
}, {
  selector: ":grabbed",
  matches: function(e) {
    return e.grabbed();
  }
}, {
  selector: ":free",
  matches: function(e) {
    return !e.grabbed();
  }
}, {
  selector: ":removed",
  matches: function(e) {
    return e.removed();
  }
}, {
  selector: ":inside",
  matches: function(e) {
    return !e.removed();
  }
}, {
  selector: ":grabbable",
  matches: function(e) {
    return e.grabbable();
  }
}, {
  selector: ":ungrabbable",
  matches: function(e) {
    return !e.grabbable();
  }
}, {
  selector: ":animated",
  matches: function(e) {
    return e.animated();
  }
}, {
  selector: ":unanimated",
  matches: function(e) {
    return !e.animated();
  }
}, {
  selector: ":parent",
  matches: function(e) {
    return e.isParent();
  }
}, {
  selector: ":childless",
  matches: function(e) {
    return e.isChildless();
  }
}, {
  selector: ":child",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":orphan",
  matches: function(e) {
    return e.isOrphan();
  }
}, {
  selector: ":nonorphan",
  matches: function(e) {
    return e.isChild();
  }
}, {
  selector: ":compound",
  matches: function(e) {
    return e.isNode() ? e.isParent() : e.source().isParent() || e.target().isParent();
  }
}, {
  selector: ":loop",
  matches: function(e) {
    return e.isLoop();
  }
}, {
  selector: ":simple",
  matches: function(e) {
    return e.isSimple();
  }
}, {
  selector: ":active",
  matches: function(e) {
    return e.active();
  }
}, {
  selector: ":inactive",
  matches: function(e) {
    return !e.active();
  }
}, {
  selector: ":backgrounding",
  matches: function(e) {
    return e.backgrounding();
  }
}, {
  selector: ":nonbackgrounding",
  matches: function(e) {
    return !e.backgrounding();
  }
}].sort(function(r, e) {
  return Wd(r.selector, e.selector);
}), Yp = function() {
  for (var r = {}, e, t = 0; t < go.length; t++)
    e = go[t], r[e.selector] = e.matches;
  return r;
}(), Zp = function(e, t) {
  return Yp[e](t);
}, Qp = "(" + go.map(function(r) {
  return r.selector;
}).join("|") + ")", Gr = function(e) {
  return e.replace(new RegExp("\\\\(" + Re.metaChar + ")", "g"), function(t, a) {
    return a;
  });
}, ir = function(e, t, a) {
  e[e.length - 1] = a;
}, po = [{
  name: "group",
  // just used for identifying when debugging
  query: !0,
  regex: "(" + Re.group + ")",
  populate: function(e, t, a) {
    var n = je(a, 1), i = n[0];
    t.checks.push({
      type: oe.GROUP,
      value: i === "*" ? i : i + "s"
    });
  }
}, {
  name: "state",
  query: !0,
  regex: Qp,
  populate: function(e, t, a) {
    var n = je(a, 1), i = n[0];
    t.checks.push({
      type: oe.STATE,
      value: i
    });
  }
}, {
  name: "id",
  query: !0,
  regex: "\\#(" + Re.id + ")",
  populate: function(e, t, a) {
    var n = je(a, 1), i = n[0];
    t.checks.push({
      type: oe.ID,
      value: Gr(i)
    });
  }
}, {
  name: "className",
  query: !0,
  regex: "\\.(" + Re.className + ")",
  populate: function(e, t, a) {
    var n = je(a, 1), i = n[0];
    t.checks.push({
      type: oe.CLASS,
      value: Gr(i)
    });
  }
}, {
  name: "dataExists",
  query: !0,
  regex: "\\[\\s*(" + Re.variable + ")\\s*\\]",
  populate: function(e, t, a) {
    var n = je(a, 1), i = n[0];
    t.checks.push({
      type: oe.DATA_EXIST,
      field: Gr(i)
    });
  }
}, {
  name: "dataCompare",
  query: !0,
  regex: "\\[\\s*(" + Re.variable + ")\\s*(" + Re.comparatorOp + ")\\s*(" + Re.value + ")\\s*\\]",
  populate: function(e, t, a) {
    var n = je(a, 3), i = n[0], s = n[1], o = n[2], u = new RegExp("^" + Re.string + "$").exec(o) != null;
    u ? o = o.substring(1, o.length - 1) : o = parseFloat(o), t.checks.push({
      type: oe.DATA_COMPARE,
      field: Gr(i),
      operator: s,
      value: o
    });
  }
}, {
  name: "dataBool",
  query: !0,
  regex: "\\[\\s*(" + Re.boolOp + ")\\s*(" + Re.variable + ")\\s*\\]",
  populate: function(e, t, a) {
    var n = je(a, 2), i = n[0], s = n[1];
    t.checks.push({
      type: oe.DATA_BOOL,
      field: Gr(s),
      operator: i
    });
  }
}, {
  name: "metaCompare",
  query: !0,
  regex: "\\[\\[\\s*(" + Re.meta + ")\\s*(" + Re.comparatorOp + ")\\s*(" + Re.number + ")\\s*\\]\\]",
  populate: function(e, t, a) {
    var n = je(a, 3), i = n[0], s = n[1], o = n[2];
    t.checks.push({
      type: oe.META_COMPARE,
      field: Gr(i),
      operator: s,
      value: parseFloat(o)
    });
  }
}, {
  name: "nextQuery",
  separator: !0,
  regex: Re.separator,
  populate: function(e, t) {
    var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
    a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
    var o = e[e.length++] = $e();
    return o;
  }
}, {
  name: "directedEdge",
  separator: !0,
  regex: Re.directedEdge,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = $e(), n = t, i = $e();
      return a.checks.push({
        type: oe.DIRECTED_EDGE,
        source: n,
        target: i
      }), ir(e, t, a), e.edgeCount++, i;
    } else {
      var s = $e(), o = t, u = $e();
      return s.checks.push({
        type: oe.NODE_SOURCE,
        source: o,
        target: u
      }), ir(e, t, s), e.edgeCount++, u;
    }
  }
}, {
  name: "undirectedEdge",
  separator: !0,
  regex: Re.undirectedEdge,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = $e(), n = t, i = $e();
      return a.checks.push({
        type: oe.UNDIRECTED_EDGE,
        nodes: [n, i]
      }), ir(e, t, a), e.edgeCount++, i;
    } else {
      var s = $e(), o = t, u = $e();
      return s.checks.push({
        type: oe.NODE_NEIGHBOR,
        node: o,
        neighbor: u
      }), ir(e, t, s), u;
    }
  }
}, {
  name: "child",
  separator: !0,
  regex: Re.child,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = $e(), n = $e(), i = e[e.length - 1];
      return a.checks.push({
        type: oe.CHILD,
        parent: i,
        child: n
      }), ir(e, t, a), e.compoundCount++, n;
    } else if (e.currentSubject === t) {
      var s = $e(), o = e[e.length - 1], u = $e(), l = $e(), c = $e(), v = $e();
      return s.checks.push({
        type: oe.COMPOUND_SPLIT,
        left: o,
        right: u,
        subject: l
      }), l.checks = t.checks, t.checks = [{
        type: oe.TRUE
      }], v.checks.push({
        type: oe.TRUE
      }), u.checks.push({
        type: oe.PARENT,
        // type is swapped on right side queries
        parent: v,
        child: c
        // empty for now
      }), ir(e, o, s), e.currentSubject = l, e.compoundCount++, c;
    } else {
      var f = $e(), h = $e(), d = [{
        type: oe.PARENT,
        parent: f,
        child: h
      }];
      return f.checks = t.checks, t.checks = d, e.compoundCount++, h;
    }
  }
}, {
  name: "descendant",
  separator: !0,
  regex: Re.descendant,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = $e(), n = $e(), i = e[e.length - 1];
      return a.checks.push({
        type: oe.DESCENDANT,
        ancestor: i,
        descendant: n
      }), ir(e, t, a), e.compoundCount++, n;
    } else if (e.currentSubject === t) {
      var s = $e(), o = e[e.length - 1], u = $e(), l = $e(), c = $e(), v = $e();
      return s.checks.push({
        type: oe.COMPOUND_SPLIT,
        left: o,
        right: u,
        subject: l
      }), l.checks = t.checks, t.checks = [{
        type: oe.TRUE
      }], v.checks.push({
        type: oe.TRUE
      }), u.checks.push({
        type: oe.ANCESTOR,
        // type is swapped on right side queries
        ancestor: v,
        descendant: c
        // empty for now
      }), ir(e, o, s), e.currentSubject = l, e.compoundCount++, c;
    } else {
      var f = $e(), h = $e(), d = [{
        type: oe.ANCESTOR,
        ancestor: f,
        descendant: h
      }];
      return f.checks = t.checks, t.checks = d, e.compoundCount++, h;
    }
  }
}, {
  name: "subject",
  modifier: !0,
  regex: Re.subject,
  populate: function(e, t) {
    if (e.currentSubject != null && e.currentSubject !== t)
      return Ve("Redefinition of subject in selector `" + e.toString() + "`"), !1;
    e.currentSubject = t;
    var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
    i === oe.DIRECTED_EDGE ? n.type = oe.NODE_TARGET : i === oe.UNDIRECTED_EDGE && (n.type = oe.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
  }
}];
po.forEach(function(r) {
  return r.regexObj = new RegExp("^" + r.regex);
});
var Jp = function(e) {
  for (var t, a, n, i = 0; i < po.length; i++) {
    var s = po[i], o = s.name, u = e.match(s.regexObj);
    if (u != null) {
      a = u, t = s, n = o;
      var l = u[0];
      e = e.substring(l.length);
      break;
    }
  }
  return {
    expr: t,
    match: a,
    name: n,
    remaining: e
  };
}, jp = function(e) {
  var t = e.match(/^\s+/);
  if (t) {
    var a = t[0];
    e = e.substring(a.length);
  }
  return e;
}, ey = function(e) {
  var t = this, a = t.inputText = e, n = t[0] = $e();
  for (t.length = 1, a = jp(a); ; ) {
    var i = Jp(a);
    if (i.expr == null)
      return Ve("The selector `" + e + "`is invalid"), !1;
    var s = i.match.slice(1), o = i.expr.populate(t, n, s);
    if (o === !1)
      return !1;
    if (o != null && (n = o), a = i.remaining, a.match(/^\s*$/))
      break;
  }
  var u = t[t.length - 1];
  t.currentSubject != null && (u.subject = t.currentSubject), u.edgeCount = t.edgeCount, u.compoundCount = t.compoundCount;
  for (var l = 0; l < t.length; l++) {
    var c = t[l];
    if (c.compoundCount > 0 && c.edgeCount > 0)
      return Ve("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
    if (c.edgeCount > 1)
      return Ve("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
    c.edgeCount === 1 && Ve("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return !0;
}, ty = function() {
  if (this.toStringCache != null)
    return this.toStringCache;
  for (var e = function(c) {
    return c ?? "";
  }, t = function(c) {
    return ge(c) ? '"' + c + '"' : e(c);
  }, a = function(c) {
    return " " + c + " ";
  }, n = function(c, v) {
    var f = c.type, h = c.value;
    switch (f) {
      case oe.GROUP: {
        var d = e(h);
        return d.substring(0, d.length - 1);
      }
      case oe.DATA_COMPARE: {
        var y = c.field, g = c.operator;
        return "[" + y + a(e(g)) + t(h) + "]";
      }
      case oe.DATA_BOOL: {
        var p = c.operator, m = c.field;
        return "[" + e(p) + m + "]";
      }
      case oe.DATA_EXIST: {
        var b = c.field;
        return "[" + b + "]";
      }
      case oe.META_COMPARE: {
        var w = c.operator, E = c.field;
        return "[[" + E + a(e(w)) + t(h) + "]]";
      }
      case oe.STATE:
        return h;
      case oe.ID:
        return "#" + h;
      case oe.CLASS:
        return "." + h;
      case oe.PARENT:
      case oe.CHILD:
        return i(c.parent, v) + a(">") + i(c.child, v);
      case oe.ANCESTOR:
      case oe.DESCENDANT:
        return i(c.ancestor, v) + " " + i(c.descendant, v);
      case oe.COMPOUND_SPLIT: {
        var C = i(c.left, v), x = i(c.subject, v), T = i(c.right, v);
        return C + (C.length > 0 ? " " : "") + x + T;
      }
      case oe.TRUE:
        return "";
    }
  }, i = function(c, v) {
    return c.checks.reduce(function(f, h, d) {
      return f + (v === c && d === 0 ? "$" : "") + n(h, v);
    }, "");
  }, s = "", o = 0; o < this.length; o++) {
    var u = this[o];
    s += i(u, u.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
  }
  return this.toStringCache = s, s;
}, ry = {
  parse: ey,
  toString: ty
}, Vv = function(e, t, a) {
  var n, i = ge(e), s = ne(e), o = ge(a), u, l, c = !1, v = !1, f = !1;
  switch (t.indexOf("!") >= 0 && (t = t.replace("!", ""), v = !0), t.indexOf("@") >= 0 && (t = t.replace("@", ""), c = !0), (i || o || c) && (u = !i && !s ? "" : "" + e, l = "" + a), c && (e = u = u.toLowerCase(), a = l = l.toLowerCase()), t) {
    case "*=":
      n = u.indexOf(l) >= 0;
      break;
    case "$=":
      n = u.indexOf(l, u.length - l.length) >= 0;
      break;
    case "^=":
      n = u.indexOf(l) === 0;
      break;
    case "=":
      n = e === a;
      break;
    case ">":
      f = !0, n = e > a;
      break;
    case ">=":
      f = !0, n = e >= a;
      break;
    case "<":
      f = !0, n = e < a;
      break;
    case "<=":
      f = !0, n = e <= a;
      break;
    default:
      n = !1;
      break;
  }
  return v && (e != null || !f) && (n = !n), n;
}, ay = function(e, t) {
  switch (t) {
    case "?":
      return !!e;
    case "!":
      return !e;
    case "^":
      return e === void 0;
  }
}, ny = function(e) {
  return e !== void 0;
}, Wo = function(e, t) {
  return e.data(t);
}, iy = function(e, t) {
  return e[t]();
}, Ye = [], Ge = function(e, t) {
  return e.checks.every(function(a) {
    return Ye[a.type](a, t);
  });
};
Ye[oe.GROUP] = function(r, e) {
  var t = r.value;
  return t === "*" || t === e.group();
};
Ye[oe.STATE] = function(r, e) {
  var t = r.value;
  return Zp(t, e);
};
Ye[oe.ID] = function(r, e) {
  var t = r.value;
  return e.id() === t;
};
Ye[oe.CLASS] = function(r, e) {
  var t = r.value;
  return e.hasClass(t);
};
Ye[oe.META_COMPARE] = function(r, e) {
  var t = r.field, a = r.operator, n = r.value;
  return Vv(iy(e, t), a, n);
};
Ye[oe.DATA_COMPARE] = function(r, e) {
  var t = r.field, a = r.operator, n = r.value;
  return Vv(Wo(e, t), a, n);
};
Ye[oe.DATA_BOOL] = function(r, e) {
  var t = r.field, a = r.operator;
  return ay(Wo(e, t), a);
};
Ye[oe.DATA_EXIST] = function(r, e) {
  var t = r.field;
  return r.operator, ny(Wo(e, t));
};
Ye[oe.UNDIRECTED_EDGE] = function(r, e) {
  var t = r.nodes[0], a = r.nodes[1], n = e.source(), i = e.target();
  return Ge(t, n) && Ge(a, i) || Ge(a, n) && Ge(t, i);
};
Ye[oe.NODE_NEIGHBOR] = function(r, e) {
  return Ge(r.node, e) && e.neighborhood().some(function(t) {
    return t.isNode() && Ge(r.neighbor, t);
  });
};
Ye[oe.DIRECTED_EDGE] = function(r, e) {
  return Ge(r.source, e.source()) && Ge(r.target, e.target());
};
Ye[oe.NODE_SOURCE] = function(r, e) {
  return Ge(r.source, e) && e.outgoers().some(function(t) {
    return t.isNode() && Ge(r.target, t);
  });
};
Ye[oe.NODE_TARGET] = function(r, e) {
  return Ge(r.target, e) && e.incomers().some(function(t) {
    return t.isNode() && Ge(r.source, t);
  });
};
Ye[oe.CHILD] = function(r, e) {
  return Ge(r.child, e) && Ge(r.parent, e.parent());
};
Ye[oe.PARENT] = function(r, e) {
  return Ge(r.parent, e) && e.children().some(function(t) {
    return Ge(r.child, t);
  });
};
Ye[oe.DESCENDANT] = function(r, e) {
  return Ge(r.descendant, e) && e.ancestors().some(function(t) {
    return Ge(r.ancestor, t);
  });
};
Ye[oe.ANCESTOR] = function(r, e) {
  return Ge(r.ancestor, e) && e.descendants().some(function(t) {
    return Ge(r.descendant, t);
  });
};
Ye[oe.COMPOUND_SPLIT] = function(r, e) {
  return Ge(r.subject, e) && Ge(r.left, e) && Ge(r.right, e);
};
Ye[oe.TRUE] = function() {
  return !0;
};
Ye[oe.COLLECTION] = function(r, e) {
  var t = r.value;
  return t.has(e);
};
Ye[oe.FILTER] = function(r, e) {
  var t = r.value;
  return t(e);
};
var sy = function(e) {
  var t = this;
  if (t.length === 1 && t[0].checks.length === 1 && t[0].checks[0].type === oe.ID)
    return e.getElementById(t[0].checks[0].value).collection();
  var a = function(i) {
    for (var s = 0; s < t.length; s++) {
      var o = t[s];
      if (Ge(o, i))
        return !0;
    }
    return !1;
  };
  return t.text() == null && (a = function() {
    return !0;
  }), e.filter(a);
}, oy = function(e) {
  for (var t = this, a = 0; a < t.length; a++) {
    var n = t[a];
    if (Ge(n, e))
      return !0;
  }
  return !1;
}, uy = {
  matches: oy,
  filter: sy
}, yr = function(e) {
  this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || ge(e) && e.match(/^\s*$/) || (Pt(e) ? this.addQuery({
    checks: [{
      type: oe.COLLECTION,
      value: e.collection()
    }]
  }) : Ke(e) ? this.addQuery({
    checks: [{
      type: oe.FILTER,
      value: e
    }]
  }) : ge(e) ? this.parse(e) || (this.invalid = !0) : We("A selector must be created from a string; found "));
}, mr = yr.prototype;
[ry, uy].forEach(function(r) {
  return be(mr, r);
});
mr.text = function() {
  return this.inputText;
};
mr.size = function() {
  return this.length;
};
mr.eq = function(r) {
  return this[r];
};
mr.sameText = function(r) {
  return !this.invalid && !r.invalid && this.text() === r.text();
};
mr.addQuery = function(r) {
  this[this.length++] = r;
};
mr.selector = mr.toString;
var fr = {
  allAre: function(e) {
    var t = new yr(e);
    return this.every(function(a) {
      return t.matches(a);
    });
  },
  is: function(e) {
    var t = new yr(e);
    return this.some(function(a) {
      return t.matches(a);
    });
  },
  some: function(e, t) {
    for (var a = 0; a < this.length; a++) {
      var n = t ? e.apply(t, [this[a], a, this]) : e(this[a], a, this);
      if (n)
        return !0;
    }
    return !1;
  },
  every: function(e, t) {
    for (var a = 0; a < this.length; a++) {
      var n = t ? e.apply(t, [this[a], a, this]) : e(this[a], a, this);
      if (!n)
        return !1;
    }
    return !0;
  },
  same: function(e) {
    if (this === e)
      return !0;
    e = this.cy().collection(e);
    var t = this.length, a = e.length;
    return t !== a ? !1 : t === 1 ? this[0] === e[0] : this.every(function(n) {
      return e.hasElementWithId(n.id());
    });
  },
  anySame: function(e) {
    return e = this.cy().collection(e), this.some(function(t) {
      return e.hasElementWithId(t.id());
    });
  },
  allAreNeighbors: function(e) {
    e = this.cy().collection(e);
    var t = this.neighborhood();
    return e.every(function(a) {
      return t.hasElementWithId(a.id());
    });
  },
  contains: function(e) {
    e = this.cy().collection(e);
    var t = this;
    return e.every(function(a) {
      return t.hasElementWithId(a.id());
    });
  }
};
fr.allAreNeighbours = fr.allAreNeighbors;
fr.has = fr.contains;
fr.equal = fr.equals = fr.same;
var It = function(e, t) {
  return function(n, i, s, o) {
    var u = n, l = this, c;
    if (u == null ? c = "" : Pt(u) && u.length === 1 && (c = u.id()), l.length === 1 && c) {
      var v = l[0]._private, f = v.traversalCache = v.traversalCache || {}, h = f[t] = f[t] || [], d = Nr(c), y = h[d];
      return y || (h[d] = e.call(l, n, i, s, o));
    } else
      return e.call(l, n, i, s, o);
  };
}, fa = {
  parent: function(e) {
    var t = [];
    if (this.length === 1) {
      var a = this[0]._private.parent;
      if (a)
        return a;
    }
    for (var n = 0; n < this.length; n++) {
      var i = this[n], s = i._private.parent;
      s && t.push(s);
    }
    return this.spawn(t, !0).filter(e);
  },
  parents: function(e) {
    for (var t = [], a = this.parent(); a.nonempty(); ) {
      for (var n = 0; n < a.length; n++) {
        var i = a[n];
        t.push(i);
      }
      a = a.parent();
    }
    return this.spawn(t, !0).filter(e);
  },
  commonAncestors: function(e) {
    for (var t, a = 0; a < this.length; a++) {
      var n = this[a], i = n.parents();
      t = t || i, t = t.intersect(i);
    }
    return t.filter(e);
  },
  orphans: function(e) {
    return this.stdFilter(function(t) {
      return t.isOrphan();
    }).filter(e);
  },
  nonorphans: function(e) {
    return this.stdFilter(function(t) {
      return t.isChild();
    }).filter(e);
  },
  children: It(function(r) {
    for (var e = [], t = 0; t < this.length; t++)
      for (var a = this[t], n = a._private.children, i = 0; i < n.length; i++)
        e.push(n[i]);
    return this.spawn(e, !0).filter(r);
  }, "children"),
  siblings: function(e) {
    return this.parent().children().not(this).filter(e);
  },
  isParent: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length !== 0;
  },
  isChildless: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.children.length === 0;
  },
  isChild: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent != null;
  },
  isOrphan: function() {
    var e = this[0];
    if (e)
      return e.isNode() && e._private.parent == null;
  },
  descendants: function(e) {
    var t = [];
    function a(n) {
      for (var i = 0; i < n.length; i++) {
        var s = n[i];
        t.push(s), s.children().nonempty() && a(s.children());
      }
    }
    return a(this.children()), this.spawn(t, !0).filter(e);
  }
};
function Ko(r, e, t, a) {
  for (var n = [], i = new da(), s = r.cy(), o = s.hasCompoundNodes(), u = 0; u < r.length; u++) {
    var l = r[u];
    t ? n.push(l) : o && a(n, i, l);
  }
  for (; n.length > 0; ) {
    var c = n.shift();
    e(c), i.add(c.id()), o && a(n, i, c);
  }
  return r;
}
function $v(r, e, t) {
  if (t.isParent())
    for (var a = t._private.children, n = 0; n < a.length; n++) {
      var i = a[n];
      e.has(i.id()) || r.push(i);
    }
}
fa.forEachDown = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Ko(this, r, e, $v);
};
function _v(r, e, t) {
  if (t.isChild()) {
    var a = t._private.parent;
    e.has(a.id()) || r.push(a);
  }
}
fa.forEachUp = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Ko(this, r, e, _v);
};
function ly(r, e, t) {
  _v(r, e, t), $v(r, e, t);
}
fa.forEachUpAndDown = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Ko(this, r, e, ly);
};
fa.ancestors = fa.parents;
var Ka, qv;
Ka = qv = {
  data: Fe.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "data",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    immutableKeys: {
      id: !0,
      source: !0,
      target: !0,
      parent: !0
    },
    updateStyle: !0
  }),
  removeData: Fe.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    immutableKeys: {
      id: !0,
      source: !0,
      target: !0,
      parent: !0
    },
    updateStyle: !0
  }),
  scratch: Fe.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "scratch",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeScratch: Fe.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  rscratch: Fe.data({
    field: "rscratch",
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !0
  }),
  removeRscratch: Fe.removeData({
    field: "rscratch",
    triggerEvent: !1
  }),
  id: function() {
    var e = this[0];
    if (e)
      return e._private.data.id;
  }
};
Ka.attr = Ka.data;
Ka.removeAttr = Ka.removeData;
var cy = qv, gi = {};
function Ys(r) {
  return function(e) {
    var t = this;
    if (e === void 0 && (e = !0), t.length !== 0)
      if (t.isNode() && !t.removed()) {
        for (var a = 0, n = t[0], i = n._private.edges, s = 0; s < i.length; s++) {
          var o = i[s];
          !e && o.isLoop() || (a += r(n, o));
        }
        return a;
      } else
        return;
  };
}
be(gi, {
  degree: Ys(function(r, e) {
    return e.source().same(e.target()) ? 2 : 1;
  }),
  indegree: Ys(function(r, e) {
    return e.target().same(r) ? 1 : 0;
  }),
  outdegree: Ys(function(r, e) {
    return e.source().same(r) ? 1 : 0;
  })
});
function Wr(r, e) {
  return function(t) {
    for (var a, n = this.nodes(), i = 0; i < n.length; i++) {
      var s = n[i], o = s[r](t);
      o !== void 0 && (a === void 0 || e(o, a)) && (a = o);
    }
    return a;
  };
}
be(gi, {
  minDegree: Wr("degree", function(r, e) {
    return r < e;
  }),
  maxDegree: Wr("degree", function(r, e) {
    return r > e;
  }),
  minIndegree: Wr("indegree", function(r, e) {
    return r < e;
  }),
  maxIndegree: Wr("indegree", function(r, e) {
    return r > e;
  }),
  minOutdegree: Wr("outdegree", function(r, e) {
    return r < e;
  }),
  maxOutdegree: Wr("outdegree", function(r, e) {
    return r > e;
  })
});
be(gi, {
  totalDegree: function(e) {
    for (var t = 0, a = this.nodes(), n = 0; n < a.length; n++)
      t += a[n].degree(e);
    return t;
  }
});
var Ft, Hv, Uv = function(e, t, a) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    if (!i.locked()) {
      var s = i._private.position, o = {
        x: t.x != null ? t.x - s.x : 0,
        y: t.y != null ? t.y - s.y : 0
      };
      i.isParent() && !(o.x === 0 && o.y === 0) && i.children().shift(o, a), i.dirtyBoundingBoxCache();
    }
  }
}, jl = {
  field: "position",
  bindingEvent: "position",
  allowBinding: !0,
  allowSetting: !0,
  settingEvent: "position",
  settingTriggersEvent: !0,
  triggerFnName: "emitAndNotify",
  allowGetting: !0,
  validKeys: ["x", "y"],
  beforeGet: function(e) {
    e.updateCompoundBounds();
  },
  beforeSet: function(e, t) {
    Uv(e, t, !1);
  },
  onSet: function(e) {
    e.dirtyCompoundBoundsCache();
  },
  canSet: function(e) {
    return !e.locked();
  }
};
Ft = Hv = {
  position: Fe.data(jl),
  // position but no notification to renderer
  silentPosition: Fe.data(be({}, jl, {
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !1,
    beforeSet: function(e, t) {
      Uv(e, t, !0);
    },
    onSet: function(e) {
      e.dirtyCompoundBoundsCache();
    }
  })),
  positions: function(e, t) {
    if (Me(e))
      t ? this.silentPosition(e) : this.position(e);
    else if (Ke(e)) {
      var a = e, n = this.cy();
      n.startBatch();
      for (var i = 0; i < this.length; i++) {
        var s = this[i], o = void 0;
        (o = a(s, i)) && (t ? s.silentPosition(o) : s.position(o));
      }
      n.endBatch();
    }
    return this;
  },
  silentPositions: function(e) {
    return this.positions(e, !0);
  },
  shift: function(e, t, a) {
    var n;
    if (Me(e) ? (n = {
      x: ne(e.x) ? e.x : 0,
      y: ne(e.y) ? e.y : 0
    }, a = t) : ge(e) && ne(t) && (n = {
      x: 0,
      y: 0
    }, n[e] = t), n != null) {
      var i = this.cy();
      i.startBatch();
      for (var s = 0; s < this.length; s++) {
        var o = this[s];
        if (!(i.hasCompoundNodes() && o.isChild() && o.ancestors().anySame(this))) {
          var u = o.position(), l = {
            x: u.x + n.x,
            y: u.y + n.y
          };
          a ? o.silentPosition(l) : o.position(l);
        }
      }
      i.endBatch();
    }
    return this;
  },
  silentShift: function(e, t) {
    return Me(e) ? this.shift(e, !0) : ge(e) && ne(t) && this.shift(e, t, !0), this;
  },
  // get/set the rendered (i.e. on screen) positon of the element
  renderedPosition: function(e, t) {
    var a = this[0], n = this.cy(), i = n.zoom(), s = n.pan(), o = Me(e) ? e : void 0, u = o !== void 0 || t !== void 0 && ge(e);
    if (a && a.isNode())
      if (u)
        for (var l = 0; l < this.length; l++) {
          var c = this[l];
          t !== void 0 ? c.position(e, (t - s[e]) / i) : o !== void 0 && c.position(mv(o, i, s));
        }
      else {
        var v = a.position();
        return o = li(v, i, s), e === void 0 ? o : o[e];
      }
    else if (!u)
      return;
    return this;
  },
  // get/set the position relative to the parent
  relativePosition: function(e, t) {
    var a = this[0], n = this.cy(), i = Me(e) ? e : void 0, s = i !== void 0 || t !== void 0 && ge(e), o = n.hasCompoundNodes();
    if (a && a.isNode())
      if (s)
        for (var u = 0; u < this.length; u++) {
          var l = this[u], c = o ? l.parent() : null, v = c && c.length > 0, f = v;
          v && (c = c[0]);
          var h = f ? c.position() : {
            x: 0,
            y: 0
          };
          t !== void 0 ? l.position(e, t + h[e]) : i !== void 0 && l.position({
            x: i.x + h.x,
            y: i.y + h.y
          });
        }
      else {
        var d = a.position(), y = o ? a.parent() : null, g = y && y.length > 0, p = g;
        g && (y = y[0]);
        var m = p ? y.position() : {
          x: 0,
          y: 0
        };
        return i = {
          x: d.x - m.x,
          y: d.y - m.y
        }, e === void 0 ? i : i[e];
      }
    else if (!s)
      return;
    return this;
  }
};
Ft.modelPosition = Ft.point = Ft.position;
Ft.modelPositions = Ft.points = Ft.positions;
Ft.renderedPoint = Ft.renderedPosition;
Ft.relativePoint = Ft.relativePosition;
var vy = Hv, oa, Er;
oa = Er = {};
Er.renderedBoundingBox = function(r) {
  var e = this.boundingBox(r), t = this.cy(), a = t.zoom(), n = t.pan(), i = e.x1 * a + n.x, s = e.x2 * a + n.x, o = e.y1 * a + n.y, u = e.y2 * a + n.y;
  return {
    x1: i,
    x2: s,
    y1: o,
    y2: u,
    w: s - i,
    h: u - o
  };
};
Er.dirtyCompoundBoundsCache = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(t) {
    if (t.isParent()) {
      var a = t._private;
      a.compoundBoundsClean = !1, a.bbCache = null, r || t.emitAndNotify("bounds");
    }
  }), this);
};
Er.updateCompoundBounds = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  if (!e.styleEnabled() || !e.hasCompoundNodes())
    return this;
  if (!r && e.batching())
    return this;
  function t(s) {
    if (!s.isParent())
      return;
    var o = s._private, u = s.children(), l = s.pstyle("compound-sizing-wrt-labels").value === "include", c = {
      width: {
        val: s.pstyle("min-width").pfValue,
        left: s.pstyle("min-width-bias-left"),
        right: s.pstyle("min-width-bias-right")
      },
      height: {
        val: s.pstyle("min-height").pfValue,
        top: s.pstyle("min-height-bias-top"),
        bottom: s.pstyle("min-height-bias-bottom")
      }
    }, v = u.boundingBox({
      includeLabels: l,
      includeOverlays: !1,
      // updating the compound bounds happens outside of the regular
      // cache cycle (i.e. before fired events)
      useCache: !1
    }), f = o.position;
    (v.w === 0 || v.h === 0) && (v = {
      w: s.pstyle("width").pfValue,
      h: s.pstyle("height").pfValue
    }, v.x1 = f.x - v.w / 2, v.x2 = f.x + v.w / 2, v.y1 = f.y - v.h / 2, v.y2 = f.y + v.h / 2);
    function h(A, k, D) {
      var B = 0, P = 0, L = k + D;
      return A > 0 && L > 0 && (B = k / L * A, P = D / L * A), {
        biasDiff: B,
        biasComplementDiff: P
      };
    }
    function d(A, k, D, B) {
      if (D.units === "%")
        switch (B) {
          case "width":
            return A > 0 ? D.pfValue * A : 0;
          case "height":
            return k > 0 ? D.pfValue * k : 0;
          case "average":
            return A > 0 && k > 0 ? D.pfValue * (A + k) / 2 : 0;
          case "min":
            return A > 0 && k > 0 ? A > k ? D.pfValue * k : D.pfValue * A : 0;
          case "max":
            return A > 0 && k > 0 ? A > k ? D.pfValue * A : D.pfValue * k : 0;
          default:
            return 0;
        }
      else
        return D.units === "px" ? D.pfValue : 0;
    }
    var y = c.width.left.value;
    c.width.left.units === "px" && c.width.val > 0 && (y = y * 100 / c.width.val);
    var g = c.width.right.value;
    c.width.right.units === "px" && c.width.val > 0 && (g = g * 100 / c.width.val);
    var p = c.height.top.value;
    c.height.top.units === "px" && c.height.val > 0 && (p = p * 100 / c.height.val);
    var m = c.height.bottom.value;
    c.height.bottom.units === "px" && c.height.val > 0 && (m = m * 100 / c.height.val);
    var b = h(c.width.val - v.w, y, g), w = b.biasDiff, E = b.biasComplementDiff, C = h(c.height.val - v.h, p, m), x = C.biasDiff, T = C.biasComplementDiff;
    o.autoPadding = d(v.w, v.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = Math.max(v.w, c.width.val), f.x = (-w + v.x1 + v.x2 + E) / 2, o.autoHeight = Math.max(v.h, c.height.val), f.y = (-x + v.y1 + v.y2 + T) / 2;
  }
  for (var a = 0; a < this.length; a++) {
    var n = this[a], i = n._private;
    (!i.compoundBoundsClean || r) && (t(n), e.batching() || (i.compoundBoundsClean = !0));
  }
  return this;
};
var Mt = function(e) {
  return e === 1 / 0 || e === -1 / 0 ? 0 : e;
}, zt = function(e, t, a, n, i) {
  n - t === 0 || i - a === 0 || t == null || a == null || n == null || i == null || (e.x1 = t < e.x1 ? t : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, sr = function(e, t) {
  return t == null ? e : zt(e, t.x1, t.y1, t.x2, t.y2);
}, Ta = function(e, t, a) {
  return kt(e, t, a);
}, En = function(e, t, a) {
  if (!t.cy().headless()) {
    var n = t._private, i = n.rstyle, s = i.arrowWidth / 2, o = t.pstyle(a + "-arrow-shape").value, u, l;
    if (o !== "none") {
      a === "source" ? (u = i.srcX, l = i.srcY) : a === "target" ? (u = i.tgtX, l = i.tgtY) : (u = i.midX, l = i.midY);
      var c = n.arrowBounds = n.arrowBounds || {}, v = c[a] = c[a] || {};
      v.x1 = u - s, v.y1 = l - s, v.x2 = u + s, v.y2 = l + s, v.w = v.x2 - v.x1, v.h = v.y2 - v.y1, Rn(v, 1), zt(e, v.x1, v.y1, v.x2, v.y2);
    }
  }
}, Zs = function(e, t, a) {
  if (!t.cy().headless()) {
    var n;
    a ? n = a + "-" : n = "";
    var i = t._private, s = i.rstyle, o = t.pstyle(n + "label").strValue;
    if (o) {
      var u = t.pstyle("text-halign"), l = t.pstyle("text-valign"), c = Ta(s, "labelWidth", a), v = Ta(s, "labelHeight", a), f = Ta(s, "labelX", a), h = Ta(s, "labelY", a), d = t.pstyle(n + "text-margin-x").pfValue, y = t.pstyle(n + "text-margin-y").pfValue, g = t.isEdge(), p = t.pstyle(n + "text-rotation"), m = t.pstyle("text-outline-width").pfValue, b = t.pstyle("text-border-width").pfValue, w = b / 2, E = t.pstyle("text-background-padding").pfValue, C = 2, x = v, T = c, A = T / 2, k = x / 2, D, B, P, L;
      if (g)
        D = f - A, B = f + A, P = h - k, L = h + k;
      else {
        switch (u.value) {
          case "left":
            D = f - T, B = f;
            break;
          case "center":
            D = f - A, B = f + A;
            break;
          case "right":
            D = f, B = f + T;
            break;
        }
        switch (l.value) {
          case "top":
            P = h - x, L = h;
            break;
          case "center":
            P = h - k, L = h + k;
            break;
          case "bottom":
            P = h, L = h + x;
            break;
        }
      }
      var M = d - Math.max(m, w) - E - C, I = d + Math.max(m, w) + E + C, R = y - Math.max(m, w) - E - C, O = y + Math.max(m, w) + E + C;
      D += M, B += I, P += R, L += O;
      var $ = a || "main", H = i.labelBounds, z = H[$] = H[$] || {};
      z.x1 = D, z.y1 = P, z.x2 = B, z.y2 = L, z.w = B - D, z.h = L - P, z.leftPad = M, z.rightPad = I, z.topPad = R, z.botPad = O;
      var F = g && p.strValue === "autorotate", U = p.pfValue != null && p.pfValue !== 0;
      if (F || U) {
        var Y = F ? Ta(i.rstyle, "labelAngle", a) : p.pfValue, G = Math.cos(Y), Q = Math.sin(Y), J = (D + B) / 2, ae = (P + L) / 2;
        if (!g) {
          switch (u.value) {
            case "left":
              J = B;
              break;
            case "right":
              J = D;
              break;
          }
          switch (l.value) {
            case "top":
              ae = L;
              break;
            case "bottom":
              ae = P;
              break;
          }
        }
        var W = function(Ce, we) {
          return Ce = Ce - J, we = we - ae, {
            x: Ce * G - we * Q + J,
            y: Ce * Q + we * G + ae
          };
        }, N = W(D, P), V = W(D, L), _ = W(B, P), K = W(B, L);
        D = Math.min(N.x, V.x, _.x, K.x), B = Math.max(N.x, V.x, _.x, K.x), P = Math.min(N.y, V.y, _.y, K.y), L = Math.max(N.y, V.y, _.y, K.y);
      }
      var re = $ + "Rot", se = H[re] = H[re] || {};
      se.x1 = D, se.y1 = P, se.x2 = B, se.y2 = L, se.w = B - D, se.h = L - P, zt(e, D, P, B, L), zt(i.labelBounds.all, D, P, B, L);
    }
    return e;
  }
}, ec = function(e, t) {
  if (!t.cy().headless()) {
    var a = t.pstyle("outline-opacity").value, n = t.pstyle("outline-width").value, i = t.pstyle("outline-offset").value, s = n + i;
    Gv(e, t, a, s, "outside", s / 2);
  }
}, Gv = function(e, t, a, n, i, s) {
  if (!(a === 0 || n <= 0 || i === "inside")) {
    var o = t.cy(), u = t.pstyle("shape").value, l = o.renderer().nodeShapes[u], c = t.position(), v = c.x, f = c.y, h = t.width(), d = t.height();
    if (l.hasMiterBounds) {
      i === "center" && (n /= 2);
      var y = l.miterBounds(v, f, h, d, n);
      sr(e, y);
    } else
      s != null && s > 0 && Mn(e, [s, s, s, s]);
  }
}, fy = function(e, t) {
  if (!t.cy().headless()) {
    var a = t.pstyle("border-opacity").value, n = t.pstyle("border-width").pfValue, i = t.pstyle("border-position").value;
    Gv(e, t, a, n, i);
  }
}, dy = function(e, t) {
  var a = e._private.cy, n = a.styleEnabled(), i = a.headless(), s = Ct(), o = e._private, u = e.isNode(), l = e.isEdge(), c, v, f, h, d, y, g = o.rstyle, p = u && n ? e.pstyle("bounds-expansion").pfValue : [0], m = function(Te) {
    return Te.pstyle("display").value !== "none";
  }, b = !n || m(e) && (!l || m(e.source()) && m(e.target()));
  if (b) {
    var w = 0, E = 0;
    n && t.includeOverlays && (w = e.pstyle("overlay-opacity").value, w !== 0 && (E = e.pstyle("overlay-padding").value));
    var C = 0, x = 0;
    n && t.includeUnderlays && (C = e.pstyle("underlay-opacity").value, C !== 0 && (x = e.pstyle("underlay-padding").value));
    var T = Math.max(E, x), A = 0, k = 0;
    if (n && (A = e.pstyle("width").pfValue, k = A / 2), u && t.includeNodes) {
      var D = e.position();
      d = D.x, y = D.y;
      var B = e.outerWidth(), P = B / 2, L = e.outerHeight(), M = L / 2;
      c = d - P, v = d + P, f = y - M, h = y + M, zt(s, c, f, v, h), n && ec(s, e), n && t.includeOutlines && !i && ec(s, e), n && fy(s, e);
    } else if (l && t.includeEdges)
      if (n && !i) {
        var I = e.pstyle("curve-style").strValue;
        if (c = Math.min(g.srcX, g.midX, g.tgtX), v = Math.max(g.srcX, g.midX, g.tgtX), f = Math.min(g.srcY, g.midY, g.tgtY), h = Math.max(g.srcY, g.midY, g.tgtY), c -= k, v += k, f -= k, h += k, zt(s, c, f, v, h), I === "haystack") {
          var R = g.haystackPts;
          if (R && R.length === 2) {
            if (c = R[0].x, f = R[0].y, v = R[1].x, h = R[1].y, c > v) {
              var O = c;
              c = v, v = O;
            }
            if (f > h) {
              var $ = f;
              f = h, h = $;
            }
            zt(s, c - k, f - k, v + k, h + k);
          }
        } else if (I === "bezier" || I === "unbundled-bezier" || ur(I, "segments") || ur(I, "taxi")) {
          var H;
          switch (I) {
            case "bezier":
            case "unbundled-bezier":
              H = g.bezierPts;
              break;
            case "segments":
            case "taxi":
            case "round-segments":
            case "round-taxi":
              H = g.linePts;
              break;
          }
          if (H != null)
            for (var z = 0; z < H.length; z++) {
              var F = H[z];
              c = F.x - k, v = F.x + k, f = F.y - k, h = F.y + k, zt(s, c, f, v, h);
            }
        }
      } else {
        var U = e.source(), Y = U.position(), G = e.target(), Q = G.position();
        if (c = Y.x, v = Q.x, f = Y.y, h = Q.y, c > v) {
          var J = c;
          c = v, v = J;
        }
        if (f > h) {
          var ae = f;
          f = h, h = ae;
        }
        c -= k, v += k, f -= k, h += k, zt(s, c, f, v, h);
      }
    if (n && t.includeEdges && l && (En(s, e, "mid-source"), En(s, e, "mid-target"), En(s, e, "source"), En(s, e, "target")), n) {
      var W = e.pstyle("ghost").value === "yes";
      if (W) {
        var N = e.pstyle("ghost-offset-x").pfValue, V = e.pstyle("ghost-offset-y").pfValue;
        zt(s, s.x1 + N, s.y1 + V, s.x2 + N, s.y2 + V);
      }
    }
    var _ = o.bodyBounds = o.bodyBounds || {};
    Vu(_, s), Mn(_, p), Rn(_, 1), n && (c = s.x1, v = s.x2, f = s.y1, h = s.y2, zt(s, c - T, f - T, v + T, h + T));
    var K = o.overlayBounds = o.overlayBounds || {};
    Vu(K, s), Mn(K, p), Rn(K, 1);
    var re = o.labelBounds = o.labelBounds || {};
    re.all != null ? Xh(re.all) : re.all = Ct(), n && t.includeLabels && (t.includeMainLabels && Zs(s, e, null), l && (t.includeSourceLabels && Zs(s, e, "source"), t.includeTargetLabels && Zs(s, e, "target")));
  }
  return s.x1 = Mt(s.x1), s.y1 = Mt(s.y1), s.x2 = Mt(s.x2), s.y2 = Mt(s.y2), s.w = Mt(s.x2 - s.x1), s.h = Mt(s.y2 - s.y1), s.w > 0 && s.h > 0 && b && (Mn(s, p), Rn(s, 1)), s;
}, Wv = function(e) {
  var t = 0, a = function(s) {
    return (s ? 1 : 0) << t++;
  }, n = 0;
  return n += a(e.incudeNodes), n += a(e.includeEdges), n += a(e.includeLabels), n += a(e.includeMainLabels), n += a(e.includeSourceLabels), n += a(e.includeTargetLabels), n += a(e.includeOverlays), n += a(e.includeOutlines), n;
}, Kv = function(e) {
  var t = function(o) {
    return Math.round(o);
  };
  if (e.isEdge()) {
    var a = e.source().position(), n = e.target().position();
    return Mu([t(a.x), t(a.y), t(n.x), t(n.y)]);
  } else {
    var i = e.position();
    return Mu([t(i.x), t(i.y)]);
  }
}, tc = function(e, t) {
  var a = e._private, n, i = e.isEdge(), s = t == null ? rc : Wv(t), o = s === rc;
  if (a.bbCache == null ? (n = dy(e, Xa), a.bbCache = n, a.bbCachePosKey = Kv(e)) : n = a.bbCache, !o) {
    var u = e.isNode();
    n = Ct(), (t.includeNodes && u || t.includeEdges && !u) && (t.includeOverlays ? sr(n, a.overlayBounds) : sr(n, a.bodyBounds)), t.includeLabels && (t.includeMainLabels && (!i || t.includeSourceLabels && t.includeTargetLabels) ? sr(n, a.labelBounds.all) : (t.includeMainLabels && sr(n, a.labelBounds.mainRot), t.includeSourceLabels && sr(n, a.labelBounds.sourceRot), t.includeTargetLabels && sr(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
  }
  return n;
}, Xa = {
  includeNodes: !0,
  includeEdges: !0,
  includeLabels: !0,
  includeMainLabels: !0,
  includeSourceLabels: !0,
  includeTargetLabels: !0,
  includeOverlays: !0,
  includeUnderlays: !0,
  includeOutlines: !0,
  useCache: !0
}, rc = Wv(Xa), ac = gt(Xa);
Er.boundingBox = function(r) {
  var e, t = r === void 0 || r.useCache === void 0 || r.useCache === !0, a = ca(function(c) {
    var v = c._private;
    return v.bbCache == null || v.styleDirty || v.bbCachePosKey !== Kv(c);
  }, function(c) {
    return c.id();
  });
  if (t && this.length === 1 && !a(this[0]))
    r === void 0 ? r = Xa : r = ac(r), e = tc(this[0], r);
  else {
    e = Ct(), r = r || Xa;
    var n = ac(r), i = this, s = i.cy(), o = s.styleEnabled();
    this.edges().forEach(a), this.nodes().forEach(a), o && this.recalculateRenderedStyle(t), this.updateCompoundBounds(!t);
    for (var u = 0; u < i.length; u++) {
      var l = i[u];
      a(l) && l.dirtyBoundingBoxCache(), sr(e, tc(l, n));
    }
  }
  return e.x1 = Mt(e.x1), e.y1 = Mt(e.y1), e.x2 = Mt(e.x2), e.y2 = Mt(e.y2), e.w = Mt(e.x2 - e.x1), e.h = Mt(e.y2 - e.y1), e;
};
Er.dirtyBoundingBoxCache = function() {
  for (var r = 0; r < this.length; r++) {
    var e = this[r]._private;
    e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
  }
  return this.emitAndNotify("bounds"), this;
};
Er.boundingBoxAt = function(r) {
  var e = this.nodes(), t = this.cy(), a = t.hasCompoundNodes(), n = t.collection();
  if (a && (n = e.filter(function(l) {
    return l.isParent();
  }), e = e.not(n)), Me(r)) {
    var i = r;
    r = function() {
      return i;
    };
  }
  var s = function(c, v) {
    return c._private.bbAtOldPos = r(c, v);
  }, o = function(c) {
    return c._private.bbAtOldPos;
  };
  t.startBatch(), e.forEach(s).silentPositions(r), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0));
  var u = Kh(this.boundingBox({
    useCache: !1
  }));
  return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0)), t.endBatch(), u;
};
oa.boundingbox = oa.bb = oa.boundingBox;
oa.renderedBoundingbox = oa.renderedBoundingBox;
var hy = Er, La, on;
La = on = {};
var Xv = function(e) {
  e.uppercaseName = mu(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = mu(e.outerName), La[e.name] = function() {
    var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
    if (a)
      if (s) {
        if (a.isParent())
          return a.updateCompoundBounds(), n[e.autoName] || 0;
        var o = a.pstyle(e.name);
        switch (o.strValue) {
          case "label":
            return a.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0;
          default:
            return o.pfValue;
        }
      } else
        return 1;
  }, La["outer" + e.uppercaseName] = function() {
    var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
    if (a)
      if (s) {
        var o = a[e.name](), u = a.pstyle("border-position").value, l;
        u === "center" ? l = a.pstyle("border-width").pfValue : u === "outside" ? l = 2 * a.pstyle("border-width").pfValue : l = 0;
        var c = 2 * a.padding();
        return o + l + c;
      } else
        return 1;
  }, La["rendered" + e.uppercaseName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.name]();
      return n * this.cy().zoom();
    }
  }, La["rendered" + e.uppercaseOuterName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.outerName]();
      return n * this.cy().zoom();
    }
  };
};
Xv({
  name: "width"
});
Xv({
  name: "height"
});
on.padding = function() {
  var r = this[0], e = r._private;
  return r.isParent() ? (r.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : r.pstyle("padding").pfValue) : r.pstyle("padding").pfValue;
};
on.paddedHeight = function() {
  var r = this[0];
  return r.height() + 2 * r.padding();
};
on.paddedWidth = function() {
  var r = this[0];
  return r.width() + 2 * r.padding();
};
var gy = on, py = function(e, t) {
  if (e.isEdge() && e.takesUpSpace())
    return t(e);
}, yy = function(e, t) {
  if (e.isEdge() && e.takesUpSpace()) {
    var a = e.cy();
    return li(t(e), a.zoom(), a.pan());
  }
}, my = function(e, t) {
  if (e.isEdge() && e.takesUpSpace()) {
    var a = e.cy(), n = a.pan(), i = a.zoom();
    return t(e).map(function(s) {
      return li(s, i, n);
    });
  }
}, by = function(e) {
  return e.renderer().getControlPoints(e);
}, wy = function(e) {
  return e.renderer().getSegmentPoints(e);
}, xy = function(e) {
  return e.renderer().getSourceEndpoint(e);
}, Ey = function(e) {
  return e.renderer().getTargetEndpoint(e);
}, Cy = function(e) {
  return e.renderer().getEdgeMidpoint(e);
}, nc = {
  controlPoints: {
    get: by,
    mult: !0
  },
  segmentPoints: {
    get: wy,
    mult: !0
  },
  sourceEndpoint: {
    get: xy
  },
  targetEndpoint: {
    get: Ey
  },
  midpoint: {
    get: Cy
  }
}, Ty = function(e) {
  return "rendered" + e[0].toUpperCase() + e.substr(1);
}, Sy = Object.keys(nc).reduce(function(r, e) {
  var t = nc[e], a = Ty(e);
  return r[e] = function() {
    return py(this, t.get);
  }, t.mult ? r[a] = function() {
    return my(this, t.get);
  } : r[a] = function() {
    return yy(this, t.get);
  }, r;
}, {}), Ay = be({}, vy, hy, gy, Sy);
/*!
Event object based on jQuery events, MIT license

https://jquery.org/license/
https://tldrlegal.com/license/mit-license
https://github.com/jquery/jquery/blob/master/src/event.js
*/
var Yv = function(e, t) {
  this.recycle(e, t);
};
function Sa() {
  return !1;
}
function Cn() {
  return !0;
}
Yv.prototype = {
  instanceString: function() {
    return "event";
  },
  recycle: function(e, t) {
    if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = Sa, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? Cn : Sa) : e != null && e.type ? t = e : this.type = e, t != null && (this.originalEvent = t.originalEvent, this.type = t.type != null ? t.type : this.type, this.cy = t.cy, this.target = t.target, this.position = t.position, this.renderedPosition = t.renderedPosition, this.namespace = t.namespace, this.layout = t.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
      var a = this.position, n = this.cy.zoom(), i = this.cy.pan();
      this.renderedPosition = {
        x: a.x * n + i.x,
        y: a.y * n + i.y
      };
    }
    this.timeStamp = e && e.timeStamp || Date.now();
  },
  preventDefault: function() {
    this.isDefaultPrevented = Cn;
    var e = this.originalEvent;
    e && e.preventDefault && e.preventDefault();
  },
  stopPropagation: function() {
    this.isPropagationStopped = Cn;
    var e = this.originalEvent;
    e && e.stopPropagation && e.stopPropagation();
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = Cn, this.stopPropagation();
  },
  isDefaultPrevented: Sa,
  isPropagationStopped: Sa,
  isImmediatePropagationStopped: Sa
};
var Zv = /^([^.]+)(\.(?:[^.]+))?$/, ky = ".*", Qv = {
  qualifierCompare: function(e, t) {
    return e === t;
  },
  eventMatches: function() {
    return !0;
  },
  addEventFields: function() {
  },
  callbackContext: function(e) {
    return e;
  },
  beforeEmit: function() {
  },
  afterEmit: function() {
  },
  bubble: function() {
    return !1;
  },
  parent: function() {
    return null;
  },
  context: null
}, ic = Object.keys(Qv), Dy = {};
function pi() {
  for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Dy, e = arguments.length > 1 ? arguments[1] : void 0, t = 0; t < ic.length; t++) {
    var a = ic[t];
    this[a] = r[a] || Qv[a];
  }
  this.context = e || this.context, this.listeners = [], this.emitting = 0;
}
var br = pi.prototype, Jv = function(e, t, a, n, i, s, o) {
  Ke(n) && (i = n, n = null), o && (s == null ? s = o : s = be({}, s, o));
  for (var u = _e(a) ? a : a.split(/\s+/), l = 0; l < u.length; l++) {
    var c = u[l];
    if (!hr(c)) {
      var v = c.match(Zv);
      if (v) {
        var f = v[1], h = v[2] ? v[2] : null, d = t(e, c, f, h, n, i, s);
        if (d === !1)
          break;
      }
    }
  }
}, sc = function(e, t) {
  return e.addEventFields(e.context, t), new Yv(t.type, t);
}, By = function(e, t, a) {
  if (Od(a)) {
    t(e, a);
    return;
  } else if (Me(a)) {
    t(e, sc(e, a));
    return;
  }
  for (var n = _e(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
    var s = n[i];
    if (!hr(s)) {
      var o = s.match(Zv);
      if (o) {
        var u = o[1], l = o[2] ? o[2] : null, c = sc(e, {
          type: u,
          namespace: l,
          target: e.context
        });
        t(e, c);
      }
    }
  }
};
br.on = br.addListener = function(r, e, t, a, n) {
  return Jv(this, function(i, s, o, u, l, c, v) {
    Ke(c) && i.listeners.push({
      event: s,
      // full event string
      callback: c,
      // callback to run
      type: o,
      // the event type (e.g. 'click')
      namespace: u,
      // the event namespace (e.g. ".foo")
      qualifier: l,
      // a restriction on whether to match this emitter
      conf: v
      // additional configuration
    });
  }, r, e, t, a, n), this;
};
br.one = function(r, e, t, a) {
  return this.on(r, e, t, a, {
    one: !0
  });
};
br.removeListener = br.off = function(r, e, t, a) {
  var n = this;
  this.emitting !== 0 && (this.listeners = yh(this.listeners));
  for (var i = this.listeners, s = function(l) {
    var c = i[l];
    Jv(n, function(v, f, h, d, y, g) {
      if ((c.type === h || r === "*") && (!d && c.namespace !== ".*" || c.namespace === d) && (!y || v.qualifierCompare(c.qualifier, y)) && (!g || c.callback === g))
        return i.splice(l, 1), !1;
    }, r, e, t, a);
  }, o = i.length - 1; o >= 0; o--)
    s(o);
  return this;
};
br.removeAllListeners = function() {
  return this.removeListener("*");
};
br.emit = br.trigger = function(r, e, t) {
  var a = this.listeners, n = a.length;
  return this.emitting++, _e(e) || (e = [e]), By(this, function(i, s) {
    t != null && (a = [{
      event: s.event,
      type: s.type,
      namespace: s.namespace,
      callback: t
    }], n = a.length);
    for (var o = function() {
      var c = a[u];
      if (c.type === s.type && (!c.namespace || c.namespace === s.namespace || c.namespace === ky) && i.eventMatches(i.context, c, s)) {
        var v = [s];
        e != null && bh(v, e), i.beforeEmit(i.context, c, s), c.conf && c.conf.one && (i.listeners = i.listeners.filter(function(d) {
          return d !== c;
        }));
        var f = i.callbackContext(i.context, c, s), h = c.callback.apply(f, v);
        i.afterEmit(i.context, c, s), h === !1 && (s.stopPropagation(), s.preventDefault());
      }
    }, u = 0; u < n; u++)
      o();
    i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
  }, r), this.emitting--, this;
};
var Py = {
  qualifierCompare: function(e, t) {
    return e == null || t == null ? e == null && t == null : e.sameText(t);
  },
  eventMatches: function(e, t, a) {
    var n = t.qualifier;
    return n != null ? e !== a.target && en(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, t) {
    t.cy = e.cy(), t.target = e;
  },
  callbackContext: function(e, t, a) {
    return t.qualifier != null ? a.target : e;
  },
  beforeEmit: function(e, t) {
    t.conf && t.conf.once && t.conf.onceCollection.removeListener(t.event, t.qualifier, t.callback);
  },
  bubble: function() {
    return !0;
  },
  parent: function(e) {
    return e.isChild() ? e.parent() : e.cy();
  }
}, Tn = function(e) {
  return ge(e) ? new yr(e) : e;
}, jv = {
  createEmitter: function() {
    for (var e = 0; e < this.length; e++) {
      var t = this[e], a = t._private;
      a.emitter || (a.emitter = new pi(Py, t));
    }
    return this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, t, a) {
    for (var n = Tn(t), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, n, a);
    }
    return this;
  },
  removeListener: function(e, t, a) {
    for (var n = Tn(t), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().removeListener(e, n, a);
    }
    return this;
  },
  removeAllListeners: function() {
    for (var e = 0; e < this.length; e++) {
      var t = this[e];
      t.emitter().removeAllListeners();
    }
    return this;
  },
  one: function(e, t, a) {
    for (var n = Tn(t), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().one(e, n, a);
    }
    return this;
  },
  once: function(e, t, a) {
    for (var n = Tn(t), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, n, a, {
        once: !0,
        onceCollection: this
      });
    }
  },
  emit: function(e, t) {
    for (var a = 0; a < this.length; a++) {
      var n = this[a];
      n.emitter().emit(e, t);
    }
    return this;
  },
  emitAndNotify: function(e, t) {
    if (this.length !== 0)
      return this.cy().notify(e, this), this.emit(e, t), this;
  }
};
Fe.eventAliasesOn(jv);
var ef = {
  nodes: function(e) {
    return this.filter(function(t) {
      return t.isNode();
    }).filter(e);
  },
  edges: function(e) {
    return this.filter(function(t) {
      return t.isEdge();
    }).filter(e);
  },
  // internal helper to get nodes and edges as separate collections with single iteration over elements
  byGroup: function() {
    for (var e = this.spawn(), t = this.spawn(), a = 0; a < this.length; a++) {
      var n = this[a];
      n.isNode() ? e.push(n) : t.push(n);
    }
    return {
      nodes: e,
      edges: t
    };
  },
  filter: function(e, t) {
    if (e === void 0)
      return this;
    if (ge(e) || Pt(e))
      return new yr(e).filter(this);
    if (Ke(e)) {
      for (var a = this.spawn(), n = this, i = 0; i < n.length; i++) {
        var s = n[i], o = t ? e.apply(t, [s, i, n]) : e(s, i, n);
        o && a.push(s);
      }
      return a;
    }
    return this.spawn();
  },
  not: function(e) {
    if (e) {
      ge(e) && (e = this.filter(e));
      for (var t = this.spawn(), a = 0; a < this.length; a++) {
        var n = this[a], i = e.has(n);
        i || t.push(n);
      }
      return t;
    } else
      return this;
  },
  absoluteComplement: function() {
    var e = this.cy();
    return e.mutableElements().not(this);
  },
  intersect: function(e) {
    if (ge(e)) {
      var t = e;
      return this.filter(t);
    }
    for (var a = this.spawn(), n = this, i = e, s = this.length < e.length, o = s ? n : i, u = s ? i : n, l = 0; l < o.length; l++) {
      var c = o[l];
      u.has(c) && a.push(c);
    }
    return a;
  },
  xor: function(e) {
    var t = this._private.cy;
    ge(e) && (e = t.$(e));
    var a = this.spawn(), n = this, i = e, s = function(u, l) {
      for (var c = 0; c < u.length; c++) {
        var v = u[c], f = v._private.data.id, h = l.hasElementWithId(f);
        h || a.push(v);
      }
    };
    return s(n, i), s(i, n), a;
  },
  diff: function(e) {
    var t = this._private.cy;
    ge(e) && (e = t.$(e));
    var a = this.spawn(), n = this.spawn(), i = this.spawn(), s = this, o = e, u = function(c, v, f) {
      for (var h = 0; h < c.length; h++) {
        var d = c[h], y = d._private.data.id, g = v.hasElementWithId(y);
        g ? i.merge(d) : f.push(d);
      }
    };
    return u(s, o, a), u(o, s, n), {
      left: a,
      right: n,
      both: i
    };
  },
  add: function(e) {
    var t = this._private.cy;
    if (!e)
      return this;
    if (ge(e)) {
      var a = e;
      e = t.mutableElements().filter(a);
    }
    for (var n = this.spawnSelf(), i = 0; i < e.length; i++) {
      var s = e[i], o = !this.has(s);
      o && n.push(s);
    }
    return n;
  },
  // in place merge on calling collection
  merge: function(e) {
    var t = this._private, a = t.cy;
    if (!e)
      return this;
    if (e && ge(e)) {
      var n = e;
      e = a.mutableElements().filter(n);
    }
    for (var i = t.map, s = 0; s < e.length; s++) {
      var o = e[s], u = o._private.data.id, l = !i.has(u);
      if (l) {
        var c = this.length++;
        this[c] = o, i.set(u, {
          ele: o,
          index: c
        });
      }
    }
    return this;
  },
  unmergeAt: function(e) {
    var t = this[e], a = t.id(), n = this._private, i = n.map;
    this[e] = void 0, i.delete(a);
    var s = e === this.length - 1;
    if (this.length > 1 && !s) {
      var o = this.length - 1, u = this[o], l = u._private.data.id;
      this[o] = void 0, this[e] = u, i.set(l, {
        ele: u,
        index: e
      });
    }
    return this.length--, this;
  },
  // remove single ele in place in calling collection
  unmergeOne: function(e) {
    e = e[0];
    var t = this._private, a = e._private.data.id, n = t.map, i = n.get(a);
    if (!i)
      return this;
    var s = i.index;
    return this.unmergeAt(s), this;
  },
  // remove eles in place on calling collection
  unmerge: function(e) {
    var t = this._private.cy;
    if (!e)
      return this;
    if (e && ge(e)) {
      var a = e;
      e = t.mutableElements().filter(a);
    }
    for (var n = 0; n < e.length; n++)
      this.unmergeOne(e[n]);
    return this;
  },
  unmergeBy: function(e) {
    for (var t = this.length - 1; t >= 0; t--) {
      var a = this[t];
      e(a) && this.unmergeAt(t);
    }
    return this;
  },
  map: function(e, t) {
    for (var a = [], n = this, i = 0; i < n.length; i++) {
      var s = n[i], o = t ? e.apply(t, [s, i, n]) : e(s, i, n);
      a.push(o);
    }
    return a;
  },
  reduce: function(e, t) {
    for (var a = t, n = this, i = 0; i < n.length; i++)
      a = e(a, n[i], i, n);
    return a;
  },
  max: function(e, t) {
    for (var a = -1 / 0, n, i = this, s = 0; s < i.length; s++) {
      var o = i[s], u = t ? e.apply(t, [o, s, i]) : e(o, s, i);
      u > a && (a = u, n = o);
    }
    return {
      value: a,
      ele: n
    };
  },
  min: function(e, t) {
    for (var a = 1 / 0, n, i = this, s = 0; s < i.length; s++) {
      var o = i[s], u = t ? e.apply(t, [o, s, i]) : e(o, s, i);
      u < a && (a = u, n = o);
    }
    return {
      value: a,
      ele: n
    };
  }
}, Ie = ef;
Ie.u = Ie["|"] = Ie["+"] = Ie.union = Ie.or = Ie.add;
Ie["\\"] = Ie["!"] = Ie["-"] = Ie.difference = Ie.relativeComplement = Ie.subtract = Ie.not;
Ie.n = Ie["&"] = Ie["."] = Ie.and = Ie.intersection = Ie.intersect;
Ie["^"] = Ie["(+)"] = Ie["(-)"] = Ie.symmetricDifference = Ie.symdiff = Ie.xor;
Ie.fnFilter = Ie.filterFn = Ie.stdFilter = Ie.filter;
Ie.complement = Ie.abscomp = Ie.absoluteComplement;
var Ly = {
  isNode: function() {
    return this.group() === "nodes";
  },
  isEdge: function() {
    return this.group() === "edges";
  },
  isLoop: function() {
    return this.isEdge() && this.source()[0] === this.target()[0];
  },
  isSimple: function() {
    return this.isEdge() && this.source()[0] !== this.target()[0];
  },
  group: function() {
    var e = this[0];
    if (e)
      return e._private.group;
  }
}, tf = function(e, t) {
  var a = e.cy(), n = a.hasCompoundNodes();
  function i(c) {
    var v = c.pstyle("z-compound-depth");
    return v.value === "auto" ? n ? c.zDepth() : 0 : v.value === "bottom" ? -1 : v.value === "top" ? No : 0;
  }
  var s = i(e) - i(t);
  if (s !== 0)
    return s;
  function o(c) {
    var v = c.pstyle("z-index-compare");
    return v.value === "auto" && c.isNode() ? 1 : 0;
  }
  var u = o(e) - o(t);
  if (u !== 0)
    return u;
  var l = e.pstyle("z-index").value - t.pstyle("z-index").value;
  return l !== 0 ? l : e.poolIndex() - t.poolIndex();
}, Qn = {
  forEach: function(e, t) {
    if (Ke(e))
      for (var a = this.length, n = 0; n < a; n++) {
        var i = this[n], s = t ? e.apply(t, [i, n, this]) : e(i, n, this);
        if (s === !1)
          break;
      }
    return this;
  },
  toArray: function() {
    for (var e = [], t = 0; t < this.length; t++)
      e.push(this[t]);
    return e;
  },
  slice: function(e, t) {
    var a = [], n = this.length;
    t == null && (t = n), e == null && (e = 0), e < 0 && (e = n + e), t < 0 && (t = n + t);
    for (var i = e; i >= 0 && i < t && i < n; i++)
      a.push(this[i]);
    return this.spawn(a);
  },
  size: function() {
    return this.length;
  },
  eq: function(e) {
    return this[e] || this.spawn();
  },
  first: function() {
    return this[0] || this.spawn();
  },
  last: function() {
    return this[this.length - 1] || this.spawn();
  },
  empty: function() {
    return this.length === 0;
  },
  nonempty: function() {
    return !this.empty();
  },
  sort: function(e) {
    if (!Ke(e))
      return this;
    var t = this.toArray().sort(e);
    return this.spawn(t);
  },
  sortByZIndex: function() {
    return this.sort(tf);
  },
  zDepth: function() {
    var e = this[0];
    if (e) {
      var t = e._private, a = t.group;
      if (a === "nodes") {
        var n = t.data.parent ? e.parents().size() : 0;
        return e.isParent() ? n : No - 1;
      } else {
        var i = t.source, s = t.target, o = i.zDepth(), u = s.zDepth();
        return Math.max(o, u, 0);
      }
    }
  }
};
Qn.each = Qn.forEach;
var Ry = function() {
  var e = "undefined", t = (typeof Symbol > "u" ? "undefined" : nt(Symbol)) != e && nt(Symbol.iterator) != e;
  t && (Qn[Symbol.iterator] = function() {
    var a = this, n = {
      value: void 0,
      done: !1
    }, i = 0, s = this.length;
    return jc({
      next: function() {
        return i < s ? n.value = a[i++] : (n.value = void 0, n.done = !0), n;
      }
    }, Symbol.iterator, function() {
      return this;
    });
  });
};
Ry();
var My = gt({
  nodeDimensionsIncludeLabels: !1
}), On = {
  // Calculates and returns node dimensions { x, y } based on options given
  layoutDimensions: function(e) {
    e = My(e);
    var t;
    if (!this.takesUpSpace())
      t = {
        w: 0,
        h: 0
      };
    else if (e.nodeDimensionsIncludeLabels) {
      var a = this.boundingBox();
      t = {
        w: a.w,
        h: a.h
      };
    } else
      t = {
        w: this.outerWidth(),
        h: this.outerHeight()
      };
    return (t.w === 0 || t.h === 0) && (t.w = t.h = 1), t;
  },
  // using standard layout options, apply position function (w/ or w/o animation)
  layoutPositions: function(e, t, a) {
    var n = this.nodes().filter(function(E) {
      return !E.isParent();
    }), i = this.cy(), s = t.eles, o = function(C) {
      return C.id();
    }, u = ca(a, o);
    e.emit({
      type: "layoutstart",
      layout: e
    }), e.animations = [];
    var l = function(C, x, T) {
      var A = {
        x: x.x1 + x.w / 2,
        y: x.y1 + x.h / 2
      }, k = {
        // scale from center of bounding box (not necessarily 0,0)
        x: (T.x - A.x) * C,
        y: (T.y - A.y) * C
      };
      return {
        x: A.x + k.x,
        y: A.y + k.y
      };
    }, c = t.spacingFactor && t.spacingFactor !== 1, v = function() {
      if (!c)
        return null;
      for (var C = Ct(), x = 0; x < n.length; x++) {
        var T = n[x], A = u(T, x);
        bv(C, A.x, A.y);
      }
      return C;
    }, f = v(), h = ca(function(E, C) {
      var x = u(E, C);
      if (c) {
        var T = Math.abs(t.spacingFactor);
        x = l(T, f, x);
      }
      return t.transform != null && (x = t.transform(E, x)), x;
    }, o);
    if (t.animate) {
      for (var d = 0; d < n.length; d++) {
        var y = n[d], g = h(y, d), p = t.animateFilter == null || t.animateFilter(y, d);
        if (p) {
          var m = y.animation({
            position: g,
            duration: t.animationDuration,
            easing: t.animationEasing
          });
          e.animations.push(m);
        } else
          y.position(g);
      }
      if (t.fit) {
        var b = i.animation({
          fit: {
            boundingBox: s.boundingBoxAt(h),
            padding: t.padding
          },
          duration: t.animationDuration,
          easing: t.animationEasing
        });
        e.animations.push(b);
      } else if (t.zoom !== void 0 && t.pan !== void 0) {
        var w = i.animation({
          zoom: t.zoom,
          pan: t.pan,
          duration: t.animationDuration,
          easing: t.animationEasing
        });
        e.animations.push(w);
      }
      e.animations.forEach(function(E) {
        return E.play();
      }), e.one("layoutready", t.ready), e.emit({
        type: "layoutready",
        layout: e
      }), ha.all(e.animations.map(function(E) {
        return E.promise();
      })).then(function() {
        e.one("layoutstop", t.stop), e.emit({
          type: "layoutstop",
          layout: e
        });
      });
    } else
      n.positions(h), t.fit && i.fit(t.eles, t.padding), t.zoom != null && i.zoom(t.zoom), t.pan && i.pan(t.pan), e.one("layoutready", t.ready), e.emit({
        type: "layoutready",
        layout: e
      }), e.one("layoutstop", t.stop), e.emit({
        type: "layoutstop",
        layout: e
      });
    return this;
  },
  layout: function(e) {
    var t = this.cy();
    return t.makeLayout(be({}, e, {
      eles: this
    }));
  }
};
On.createLayout = On.makeLayout = On.layout;
function rf(r, e, t) {
  var a = t._private, n = a.styleCache = a.styleCache || [], i;
  return (i = n[r]) != null || (i = n[r] = e(t)), i;
}
function yi(r, e) {
  return r = Nr(r), function(a) {
    return rf(r, e, a);
  };
}
function mi(r, e) {
  r = Nr(r);
  var t = function(n) {
    return e.call(n);
  };
  return function() {
    var n = this[0];
    if (n)
      return rf(r, t, n);
  };
}
var ft = {
  recalculateRenderedStyle: function(e) {
    var t = this.cy(), a = t.renderer(), n = t.styleEnabled();
    return a && n && a.recalculateRenderedStyle(this, e), this;
  },
  dirtyStyleCache: function() {
    var e = this.cy(), t = function(i) {
      return i._private.styleCache = null;
    };
    if (e.hasCompoundNodes()) {
      var a;
      a = this.spawnSelf().merge(this.descendants()).merge(this.parents()), a.merge(a.connectedEdges()), a.forEach(t);
    } else
      this.forEach(function(n) {
        t(n), n.connectedEdges().forEach(t);
      });
    return this;
  },
  // fully updates (recalculates) the style for the elements
  updateStyle: function(e) {
    var t = this._private.cy;
    if (!t.styleEnabled())
      return this;
    if (t.batching()) {
      var a = t._private.batchStyleEles;
      return a.merge(this), this;
    }
    var n = t.hasCompoundNodes(), i = this;
    e = !!(e || e === void 0), n && (i = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
    var s = i;
    return e ? s.emitAndNotify("style") : s.emit("style"), i.forEach(function(o) {
      return o._private.styleDirty = !0;
    }), this;
  },
  // private: clears dirty flag and recalculates style
  cleanStyle: function() {
    var e = this.cy();
    if (e.styleEnabled())
      for (var t = 0; t < this.length; t++) {
        var a = this[t];
        a._private.styleDirty && (a._private.styleDirty = !1, e.style().apply(a));
      }
  },
  // get the internal parsed style object for the specified property
  parsedStyle: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, a = this[0], n = a.cy();
    if (n.styleEnabled() && a) {
      a._private.styleDirty && (a._private.styleDirty = !1, n.style().apply(a));
      var i = a._private.style[e];
      return i ?? (t ? n.style().getDefaultProperty(e) : null);
    }
  },
  numericStyle: function(e) {
    var t = this[0];
    if (t.cy().styleEnabled() && t) {
      var a = t.pstyle(e);
      return a.pfValue !== void 0 ? a.pfValue : a.value;
    }
  },
  numericStyleUnits: function(e) {
    var t = this[0];
    if (t.cy().styleEnabled() && t)
      return t.pstyle(e).units;
  },
  // get the specified css property as a rendered value (i.e. on-screen value)
  // or get the whole rendered style if no property specified (NB doesn't allow setting)
  renderedStyle: function(e) {
    var t = this.cy();
    if (!t.styleEnabled())
      return this;
    var a = this[0];
    if (a)
      return t.style().getRenderedStyle(a, e);
  },
  // read the calculated css style of the element or override the style (via a bypass)
  style: function(e, t) {
    var a = this.cy();
    if (!a.styleEnabled())
      return this;
    var n = !1, i = a.style();
    if (Me(e)) {
      var s = e;
      i.applyBypass(this, s, n), this.emitAndNotify("style");
    } else if (ge(e))
      if (t === void 0) {
        var o = this[0];
        return o ? i.getStylePropertyValue(o, e) : void 0;
      } else
        i.applyBypass(this, e, t, n), this.emitAndNotify("style");
    else if (e === void 0) {
      var u = this[0];
      return u ? i.getRawStyle(u) : void 0;
    }
    return this;
  },
  removeStyle: function(e) {
    var t = this.cy();
    if (!t.styleEnabled())
      return this;
    var a = !1, n = t.style(), i = this;
    if (e === void 0)
      for (var s = 0; s < i.length; s++) {
        var o = i[s];
        n.removeAllBypasses(o, a);
      }
    else {
      e = e.split(/\s+/);
      for (var u = 0; u < i.length; u++) {
        var l = i[u];
        n.removeBypasses(l, e, a);
      }
    }
    return this.emitAndNotify("style"), this;
  },
  show: function() {
    return this.css("display", "element"), this;
  },
  hide: function() {
    return this.css("display", "none"), this;
  },
  effectiveOpacity: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return 1;
    var t = e.hasCompoundNodes(), a = this[0];
    if (a) {
      var n = a._private, i = a.pstyle("opacity").value;
      if (!t)
        return i;
      var s = n.data.parent ? a.parents() : null;
      if (s)
        for (var o = 0; o < s.length; o++) {
          var u = s[o], l = u.pstyle("opacity").value;
          i = l * i;
        }
      return i;
    }
  },
  transparent: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return !1;
    var t = this[0], a = t.cy().hasCompoundNodes();
    if (t)
      return a ? t.effectiveOpacity() === 0 : t.pstyle("opacity").value === 0;
  },
  backgrounding: function() {
    var e = this.cy();
    if (!e.styleEnabled())
      return !1;
    var t = this[0];
    return !!t._private.backgrounding;
  }
};
function Qs(r, e) {
  var t = r._private, a = t.data.parent ? r.parents() : null;
  if (a)
    for (var n = 0; n < a.length; n++) {
      var i = a[n];
      if (!e(i))
        return !1;
    }
  return !0;
}
function Xo(r) {
  var e = r.ok, t = r.edgeOkViaNode || r.ok, a = r.parentOk || r.ok;
  return function() {
    var n = this.cy();
    if (!n.styleEnabled())
      return !0;
    var i = this[0], s = n.hasCompoundNodes();
    if (i) {
      var o = i._private;
      if (!e(i))
        return !1;
      if (i.isNode())
        return !s || Qs(i, a);
      var u = o.source, l = o.target;
      return t(u) && (!s || Qs(u, t)) && (u === l || t(l) && (!s || Qs(l, t)));
    }
  };
}
var ga = yi("eleTakesUpSpace", function(r) {
  return r.pstyle("display").value === "element" && r.width() !== 0 && (r.isNode() ? r.height() !== 0 : !0);
});
ft.takesUpSpace = mi("takesUpSpace", Xo({
  ok: ga
}));
var Iy = yi("eleInteractive", function(r) {
  return r.pstyle("events").value === "yes" && r.pstyle("visibility").value === "visible" && ga(r);
}), Oy = yi("parentInteractive", function(r) {
  return r.pstyle("visibility").value === "visible" && ga(r);
});
ft.interactive = mi("interactive", Xo({
  ok: Iy,
  parentOk: Oy,
  edgeOkViaNode: ga
}));
ft.noninteractive = function() {
  var r = this[0];
  if (r)
    return !r.interactive();
};
var Ny = yi("eleVisible", function(r) {
  return r.pstyle("visibility").value === "visible" && r.pstyle("opacity").pfValue !== 0 && ga(r);
}), zy = ga;
ft.visible = mi("visible", Xo({
  ok: Ny,
  edgeOkViaNode: zy
}));
ft.hidden = function() {
  var r = this[0];
  if (r)
    return !r.visible();
};
ft.isBundledBezier = mi("isBundledBezier", function() {
  return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
});
ft.bypass = ft.css = ft.style;
ft.renderedCss = ft.renderedStyle;
ft.removeBypass = ft.removeCss = ft.removeStyle;
ft.pstyle = ft.parsedStyle;
var dr = {};
function oc(r) {
  return function() {
    var e = arguments, t = [];
    if (e.length === 2) {
      var a = e[0], n = e[1];
      this.on(r.event, a, n);
    } else if (e.length === 1 && Ke(e[0])) {
      var i = e[0];
      this.on(r.event, i);
    } else if (e.length === 0 || e.length === 1 && _e(e[0])) {
      for (var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++) {
        var u = this[o], l = !r.ableField || u._private[r.ableField], c = u._private[r.field] != r.value;
        if (r.overrideAble) {
          var v = r.overrideAble(u);
          if (v !== void 0 && (l = v, !v))
            return this;
        }
        l && (u._private[r.field] = r.value, c && t.push(u));
      }
      var f = this.spawn(t);
      f.updateStyle(), f.emit(r.event), s && f.emit(s);
    }
    return this;
  };
}
function pa(r) {
  dr[r.field] = function() {
    var e = this[0];
    if (e) {
      if (r.overrideField) {
        var t = r.overrideField(e);
        if (t !== void 0)
          return t;
      }
      return e._private[r.field];
    }
  }, dr[r.on] = oc({
    event: r.on,
    field: r.field,
    ableField: r.ableField,
    overrideAble: r.overrideAble,
    value: !0
  }), dr[r.off] = oc({
    event: r.off,
    field: r.field,
    ableField: r.ableField,
    overrideAble: r.overrideAble,
    value: !1
  });
}
pa({
  field: "locked",
  overrideField: function(e) {
    return e.cy().autolock() ? !0 : void 0;
  },
  on: "lock",
  off: "unlock"
});
pa({
  field: "grabbable",
  overrideField: function(e) {
    return e.cy().autoungrabify() || e.pannable() ? !1 : void 0;
  },
  on: "grabify",
  off: "ungrabify"
});
pa({
  field: "selected",
  ableField: "selectable",
  overrideAble: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "select",
  off: "unselect"
});
pa({
  field: "selectable",
  overrideField: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "selectify",
  off: "unselectify"
});
dr.deselect = dr.unselect;
dr.grabbed = function() {
  var r = this[0];
  if (r)
    return r._private.grabbed;
};
pa({
  field: "active",
  on: "activate",
  off: "unactivate"
});
pa({
  field: "pannable",
  on: "panify",
  off: "unpanify"
});
dr.inactive = function() {
  var r = this[0];
  if (r)
    return !r._private.active;
};
var mt = {}, uc = function(e) {
  return function(a) {
    for (var n = this, i = [], s = 0; s < n.length; s++) {
      var o = n[s];
      if (o.isNode()) {
        for (var u = !1, l = o.connectedEdges(), c = 0; c < l.length; c++) {
          var v = l[c], f = v.source(), h = v.target();
          if (e.noIncomingEdges && h === o && f !== o || e.noOutgoingEdges && f === o && h !== o) {
            u = !0;
            break;
          }
        }
        u || i.push(o);
      }
    }
    return this.spawn(i, !0).filter(a);
  };
}, lc = function(e) {
  return function(t) {
    for (var a = this, n = [], i = 0; i < a.length; i++) {
      var s = a[i];
      if (s.isNode())
        for (var o = s.connectedEdges(), u = 0; u < o.length; u++) {
          var l = o[u], c = l.source(), v = l.target();
          e.outgoing && c === s ? (n.push(l), n.push(v)) : e.incoming && v === s && (n.push(l), n.push(c));
        }
    }
    return this.spawn(n, !0).filter(t);
  };
}, cc = function(e) {
  return function(t) {
    for (var a = this, n = [], i = {}; ; ) {
      var s = e.outgoing ? a.outgoers() : a.incomers();
      if (s.length === 0)
        break;
      for (var o = !1, u = 0; u < s.length; u++) {
        var l = s[u], c = l.id();
        i[c] || (i[c] = !0, n.push(l), o = !0);
      }
      if (!o)
        break;
      a = s;
    }
    return this.spawn(n, !0).filter(t);
  };
};
mt.clearTraversalCache = function() {
  for (var r = 0; r < this.length; r++)
    this[r]._private.traversalCache = null;
};
be(mt, {
  // get the root nodes in the DAG
  roots: uc({
    noIncomingEdges: !0
  }),
  // get the leaf nodes in the DAG
  leaves: uc({
    noOutgoingEdges: !0
  }),
  // normally called children in graph theory
  // these nodes =edges=> outgoing nodes
  outgoers: It(lc({
    outgoing: !0
  }), "outgoers"),
  // aka DAG descendants
  successors: cc({
    outgoing: !0
  }),
  // normally called parents in graph theory
  // these nodes <=edges= incoming nodes
  incomers: It(lc({
    incoming: !0
  }), "incomers"),
  // aka DAG ancestors
  predecessors: cc({})
});
be(mt, {
  neighborhood: It(function(r) {
    for (var e = [], t = this.nodes(), a = 0; a < t.length; a++)
      for (var n = t[a], i = n.connectedEdges(), s = 0; s < i.length; s++) {
        var o = i[s], u = o.source(), l = o.target(), c = n === u ? l : u;
        c.length > 0 && e.push(c[0]), e.push(o[0]);
      }
    return this.spawn(e, !0).filter(r);
  }, "neighborhood"),
  closedNeighborhood: function(e) {
    return this.neighborhood().add(this).filter(e);
  },
  openNeighborhood: function(e) {
    return this.neighborhood(e);
  }
});
mt.neighbourhood = mt.neighborhood;
mt.closedNeighbourhood = mt.closedNeighborhood;
mt.openNeighbourhood = mt.openNeighborhood;
be(mt, {
  source: It(function(e) {
    var t = this[0], a;
    return t && (a = t._private.source || t.cy().collection()), a && e ? a.filter(e) : a;
  }, "source"),
  target: It(function(e) {
    var t = this[0], a;
    return t && (a = t._private.target || t.cy().collection()), a && e ? a.filter(e) : a;
  }, "target"),
  sources: vc({
    attr: "source"
  }),
  targets: vc({
    attr: "target"
  })
});
function vc(r) {
  return function(t) {
    for (var a = [], n = 0; n < this.length; n++) {
      var i = this[n], s = i._private[r.attr];
      s && a.push(s);
    }
    return this.spawn(a, !0).filter(t);
  };
}
be(mt, {
  edgesWith: It(fc(), "edgesWith"),
  edgesTo: It(fc({
    thisIsSrc: !0
  }), "edgesTo")
});
function fc(r) {
  return function(t) {
    var a = [], n = this._private.cy, i = r || {};
    ge(t) && (t = n.$(t));
    for (var s = 0; s < t.length; s++)
      for (var o = t[s]._private.edges, u = 0; u < o.length; u++) {
        var l = o[u], c = l._private.data, v = this.hasElementWithId(c.source) && t.hasElementWithId(c.target), f = t.hasElementWithId(c.source) && this.hasElementWithId(c.target), h = v || f;
        h && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !v || i.thisIsTgt && !f) || a.push(l));
      }
    return this.spawn(a, !0);
  };
}
be(mt, {
  connectedEdges: It(function(r) {
    for (var e = [], t = this, a = 0; a < t.length; a++) {
      var n = t[a];
      if (n.isNode())
        for (var i = n._private.edges, s = 0; s < i.length; s++) {
          var o = i[s];
          e.push(o);
        }
    }
    return this.spawn(e, !0).filter(r);
  }, "connectedEdges"),
  connectedNodes: It(function(r) {
    for (var e = [], t = this, a = 0; a < t.length; a++) {
      var n = t[a];
      n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
    }
    return this.spawn(e, !0).filter(r);
  }, "connectedNodes"),
  parallelEdges: It(dc(), "parallelEdges"),
  codirectedEdges: It(dc({
    codirected: !0
  }), "codirectedEdges")
});
function dc(r) {
  var e = {
    codirected: !1
  };
  return r = be({}, e, r), function(a) {
    for (var n = [], i = this.edges(), s = r, o = 0; o < i.length; o++)
      for (var u = i[o], l = u._private, c = l.source, v = c._private.data.id, f = l.data.target, h = c._private.edges, d = 0; d < h.length; d++) {
        var y = h[d], g = y._private.data, p = g.target, m = g.source, b = p === f && m === v, w = v === p && f === m;
        (s.codirected && b || !s.codirected && (b || w)) && n.push(y);
      }
    return this.spawn(n, !0).filter(a);
  };
}
be(mt, {
  components: function(e) {
    var t = this, a = t.cy(), n = a.collection(), i = e == null ? t.nodes() : e.nodes(), s = [];
    e != null && i.empty() && (i = e.sources());
    var o = function(c, v) {
      n.merge(c), i.unmerge(c), v.merge(c);
    };
    if (i.empty())
      return t.spawn();
    var u = function() {
      var c = a.collection();
      s.push(c);
      var v = i[0];
      o(v, c), t.bfs({
        directed: !1,
        roots: v,
        visit: function(h) {
          return o(h, c);
        }
      }), c.forEach(function(f) {
        f.connectedEdges().forEach(function(h) {
          t.has(h) && c.has(h.source()) && c.has(h.target()) && c.merge(h);
        });
      });
    };
    do
      u();
    while (i.length > 0);
    return s;
  },
  component: function() {
    var e = this[0];
    return e.cy().mutableElements().components(e)[0];
  }
});
mt.componentsOf = mt.components;
var dt = function(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === void 0) {
    We("A collection must have a reference to the core");
    return;
  }
  var i = new Jt(), s = !1;
  if (!t)
    t = [];
  else if (t.length > 0 && Me(t[0]) && !en(t[0])) {
    s = !0;
    for (var o = [], u = new da(), l = 0, c = t.length; l < c; l++) {
      var v = t[l];
      v.data == null && (v.data = {});
      var f = v.data;
      if (f.id == null)
        f.id = pv();
      else if (e.hasElementWithId(f.id) || u.has(f.id))
        continue;
      var h = new ui(e, v, !1);
      o.push(h), u.add(f.id);
    }
    t = o;
  }
  this.length = 0;
  for (var d = 0, y = t.length; d < y; d++) {
    var g = t[d][0];
    if (g != null) {
      var p = g._private.data.id;
      (!a || !i.has(p)) && (a && i.set(p, {
        index: this.length,
        ele: g
      }), this[this.length] = g, this.length++);
    }
  }
  this._private = {
    eles: this,
    cy: e,
    get map() {
      return this.lazyMap == null && this.rebuildMap(), this.lazyMap;
    },
    set map(m) {
      this.lazyMap = m;
    },
    rebuildMap: function() {
      for (var b = this.lazyMap = new Jt(), w = this.eles, E = 0; E < w.length; E++) {
        var C = w[E];
        b.set(C.id(), {
          index: E,
          ele: C
        });
      }
    }
  }, a && (this._private.map = i), s && !n && this.restore();
}, He = ui.prototype = dt.prototype = Object.create(Array.prototype);
He.instanceString = function() {
  return "collection";
};
He.spawn = function(r, e) {
  return new dt(this.cy(), r, e);
};
He.spawnSelf = function() {
  return this.spawn(this);
};
He.cy = function() {
  return this._private.cy;
};
He.renderer = function() {
  return this._private.cy.renderer();
};
He.element = function() {
  return this[0];
};
He.collection = function() {
  return rv(this) ? this : new dt(this._private.cy, [this]);
};
He.unique = function() {
  return new dt(this._private.cy, this, !0);
};
He.hasElementWithId = function(r) {
  return r = "" + r, this._private.map.has(r);
};
He.getElementById = function(r) {
  r = "" + r;
  var e = this._private.cy, t = this._private.map.get(r);
  return t ? t.ele : new dt(e);
};
He.$id = He.getElementById;
He.poolIndex = function() {
  var r = this._private.cy, e = r._private.elements, t = this[0]._private.data.id;
  return e._private.map.get(t).index;
};
He.indexOf = function(r) {
  var e = r[0]._private.data.id;
  return this._private.map.get(e).index;
};
He.indexOfId = function(r) {
  return r = "" + r, this._private.map.get(r).index;
};
He.json = function(r) {
  var e = this.element(), t = this.cy();
  if (e == null && r)
    return this;
  if (e != null) {
    var a = e._private;
    if (Me(r)) {
      if (t.startBatch(), r.data) {
        e.data(r.data);
        var n = a.data;
        if (e.isEdge()) {
          var i = !1, s = {}, o = r.data.source, u = r.data.target;
          o != null && o != n.source && (s.source = "" + o, i = !0), u != null && u != n.target && (s.target = "" + u, i = !0), i && (e = e.move(s));
        } else {
          var l = "parent" in r.data, c = r.data.parent;
          l && (c != null || n.parent != null) && c != n.parent && (c === void 0 && (c = null), c != null && (c = "" + c), e = e.move({
            parent: c
          }));
        }
      }
      r.position && e.position(r.position);
      var v = function(y, g, p) {
        var m = r[y];
        m != null && m !== a[y] && (m ? e[g]() : e[p]());
      };
      return v("removed", "remove", "restore"), v("selected", "select", "unselect"), v("selectable", "selectify", "unselectify"), v("locked", "lock", "unlock"), v("grabbable", "grabify", "ungrabify"), v("pannable", "panify", "unpanify"), r.classes != null && e.classes(r.classes), t.endBatch(), this;
    } else if (r === void 0) {
      var f = {
        data: Ut(a.data),
        position: Ut(a.position),
        group: a.group,
        removed: a.removed,
        selected: a.selected,
        selectable: a.selectable,
        locked: a.locked,
        grabbable: a.grabbable,
        pannable: a.pannable,
        classes: null
      };
      f.classes = "";
      var h = 0;
      return a.classes.forEach(function(d) {
        return f.classes += h++ === 0 ? d : " " + d;
      }), f;
    }
  }
};
He.jsons = function() {
  for (var r = [], e = 0; e < this.length; e++) {
    var t = this[e], a = t.json();
    r.push(a);
  }
  return r;
};
He.clone = function() {
  for (var r = this.cy(), e = [], t = 0; t < this.length; t++) {
    var a = this[t], n = a.json(), i = new ui(r, n, !1);
    e.push(i);
  }
  return new dt(r, e);
};
He.copy = He.clone;
He.restore = function() {
  for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = this, a = t.cy(), n = a._private, i = [], s = [], o, u = 0, l = t.length; u < l; u++) {
    var c = t[u];
    e && !c.removed() || (c.isNode() ? i.push(c) : s.push(c));
  }
  o = i.concat(s);
  var v, f = function() {
    o.splice(v, 1), v--;
  };
  for (v = 0; v < o.length; v++) {
    var h = o[v], d = h._private, y = d.data;
    if (h.clearTraversalCache(), !(!e && !d.removed)) {
      if (y.id === void 0)
        y.id = pv();
      else if (ne(y.id))
        y.id = "" + y.id;
      else if (hr(y.id) || !ge(y.id)) {
        We("Can not create element with invalid string ID `" + y.id + "`"), f();
        continue;
      } else if (a.hasElementWithId(y.id)) {
        We("Can not create second element with ID `" + y.id + "`"), f();
        continue;
      }
    }
    var g = y.id;
    if (h.isNode()) {
      var p = d.position;
      p.x == null && (p.x = 0), p.y == null && (p.y = 0);
    }
    if (h.isEdge()) {
      for (var m = h, b = ["source", "target"], w = b.length, E = !1, C = 0; C < w; C++) {
        var x = b[C], T = y[x];
        ne(T) && (T = y[x] = "" + y[x]), T == null || T === "" ? (We("Can not create edge `" + g + "` with unspecified " + x), E = !0) : a.hasElementWithId(T) || (We("Can not create edge `" + g + "` with nonexistant " + x + " `" + T + "`"), E = !0);
      }
      if (E) {
        f();
        continue;
      }
      var A = a.getElementById(y.source), k = a.getElementById(y.target);
      A.same(k) ? A._private.edges.push(m) : (A._private.edges.push(m), k._private.edges.push(m)), m._private.source = A, m._private.target = k;
    }
    d.map = new Jt(), d.map.set(g, {
      ele: h,
      index: 0
    }), d.removed = !1, e && a.addToPool(h);
  }
  for (var D = 0; D < i.length; D++) {
    var B = i[D], P = B._private.data;
    ne(P.parent) && (P.parent = "" + P.parent);
    var L = P.parent, M = L != null;
    if (M || B._private.parent) {
      var I = B._private.parent ? a.collection().merge(B._private.parent) : a.getElementById(L);
      if (I.empty())
        P.parent = void 0;
      else if (I[0].removed())
        Ve("Node added with missing parent, reference to parent removed"), P.parent = void 0, B._private.parent = null;
      else {
        for (var R = !1, O = I; !O.empty(); ) {
          if (B.same(O)) {
            R = !0, P.parent = void 0;
            break;
          }
          O = O.parent();
        }
        R || (I[0]._private.children.push(B), B._private.parent = I[0], n.hasCompoundNodes = !0);
      }
    }
  }
  if (o.length > 0) {
    for (var $ = o.length === t.length ? t : new dt(a, o), H = 0; H < $.length; H++) {
      var z = $[H];
      z.isNode() || (z.parallelEdges().clearTraversalCache(), z.source().clearTraversalCache(), z.target().clearTraversalCache());
    }
    var F;
    n.hasCompoundNodes ? F = a.collection().merge($).merge($.connectedNodes()).merge($.parent()) : F = $, F.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(r), r ? $.emitAndNotify("add") : e && $.emit("add");
  }
  return t;
};
He.removed = function() {
  var r = this[0];
  return r && r._private.removed;
};
He.inside = function() {
  var r = this[0];
  return r && !r._private.removed;
};
He.remove = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = this, a = [], n = {}, i = t._private.cy;
  function s(L) {
    for (var M = L._private.edges, I = 0; I < M.length; I++)
      u(M[I]);
  }
  function o(L) {
    for (var M = L._private.children, I = 0; I < M.length; I++)
      u(M[I]);
  }
  function u(L) {
    var M = n[L.id()];
    e && L.removed() || M || (n[L.id()] = !0, L.isNode() ? (a.push(L), s(L), o(L)) : a.unshift(L));
  }
  for (var l = 0, c = t.length; l < c; l++) {
    var v = t[l];
    u(v);
  }
  function f(L, M) {
    var I = L._private.edges;
    gr(I, M), L.clearTraversalCache();
  }
  function h(L) {
    L.clearTraversalCache();
  }
  var d = [];
  d.ids = {};
  function y(L, M) {
    M = M[0], L = L[0];
    var I = L._private.children, R = L.id();
    gr(I, M), M._private.parent = null, d.ids[R] || (d.ids[R] = !0, d.push(L));
  }
  t.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
  for (var g = 0; g < a.length; g++) {
    var p = a[g];
    if (p.isEdge()) {
      var m = p.source()[0], b = p.target()[0];
      f(m, p), f(b, p);
      for (var w = p.parallelEdges(), E = 0; E < w.length; E++) {
        var C = w[E];
        h(C), C.isBundledBezier() && C.dirtyBoundingBoxCache();
      }
    } else {
      var x = p.parent();
      x.length !== 0 && y(x, p);
    }
    e && (p._private.removed = !0);
  }
  var T = i._private.elements;
  i._private.hasCompoundNodes = !1;
  for (var A = 0; A < T.length; A++) {
    var k = T[A];
    if (k.isParent()) {
      i._private.hasCompoundNodes = !0;
      break;
    }
  }
  var D = new dt(this.cy(), a);
  D.size() > 0 && (r ? D.emitAndNotify("remove") : e && D.emit("remove"));
  for (var B = 0; B < d.length; B++) {
    var P = d[B];
    (!e || !P.removed()) && P.updateStyle();
  }
  return D;
};
He.move = function(r) {
  var e = this._private.cy, t = this, a = !1, n = !1, i = function(d) {
    return d == null ? d : "" + d;
  };
  if (r.source !== void 0 || r.target !== void 0) {
    var s = i(r.source), o = i(r.target), u = s != null && e.hasElementWithId(s), l = o != null && e.hasElementWithId(o);
    (u || l) && (e.batch(function() {
      t.remove(a, n), t.emitAndNotify("moveout");
      for (var h = 0; h < t.length; h++) {
        var d = t[h], y = d._private.data;
        d.isEdge() && (u && (y.source = s), l && (y.target = o));
      }
      t.restore(a, n);
    }), t.emitAndNotify("move"));
  } else if (r.parent !== void 0) {
    var c = i(r.parent), v = c === null || e.hasElementWithId(c);
    if (v) {
      var f = c === null ? void 0 : c;
      e.batch(function() {
        var h = t.remove(a, n);
        h.emitAndNotify("moveout");
        for (var d = 0; d < t.length; d++) {
          var y = t[d], g = y._private.data;
          y.isNode() && (g.parent = f);
        }
        h.restore(a, n);
      }), t.emitAndNotify("move");
    }
  }
  return this;
};
[Dv, Xp, In, fr, fa, cy, gi, Ay, jv, ef, Ly, Qn, On, ft, dr, mt].forEach(function(r) {
  be(He, r);
});
var Fy = {
  add: function(e) {
    var t, a = this;
    if (Pt(e)) {
      var n = e;
      if (n._private.cy === a)
        t = n.restore();
      else {
        for (var i = [], s = 0; s < n.length; s++) {
          var o = n[s];
          i.push(o.json());
        }
        t = new dt(a, i);
      }
    } else if (_e(e)) {
      var u = e;
      t = new dt(a, u);
    } else if (Me(e) && (_e(e.nodes) || _e(e.edges))) {
      for (var l = e, c = [], v = ["nodes", "edges"], f = 0, h = v.length; f < h; f++) {
        var d = v[f], y = l[d];
        if (_e(y))
          for (var g = 0, p = y.length; g < p; g++) {
            var m = be({
              group: d
            }, y[g]);
            c.push(m);
          }
      }
      t = new dt(a, c);
    } else {
      var b = e;
      t = new ui(a, b).collection();
    }
    return t;
  },
  remove: function(e) {
    if (!Pt(e)) {
      if (ge(e)) {
        var t = e;
        e = this.$(t);
      }
    }
    return e.remove();
  }
};
/*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function Vy(r, e, t, a) {
  var n = 4, i = 1e-3, s = 1e-7, o = 10, u = 11, l = 1 / (u - 1), c = typeof Float32Array < "u";
  if (arguments.length !== 4)
    return !1;
  for (var v = 0; v < 4; ++v)
    if (typeof arguments[v] != "number" || isNaN(arguments[v]) || !isFinite(arguments[v]))
      return !1;
  r = Math.min(r, 1), t = Math.min(t, 1), r = Math.max(r, 0), t = Math.max(t, 0);
  var f = c ? new Float32Array(u) : new Array(u);
  function h(k, D) {
    return 1 - 3 * D + 3 * k;
  }
  function d(k, D) {
    return 3 * D - 6 * k;
  }
  function y(k) {
    return 3 * k;
  }
  function g(k, D, B) {
    return ((h(D, B) * k + d(D, B)) * k + y(D)) * k;
  }
  function p(k, D, B) {
    return 3 * h(D, B) * k * k + 2 * d(D, B) * k + y(D);
  }
  function m(k, D) {
    for (var B = 0; B < n; ++B) {
      var P = p(D, r, t);
      if (P === 0)
        return D;
      var L = g(D, r, t) - k;
      D -= L / P;
    }
    return D;
  }
  function b() {
    for (var k = 0; k < u; ++k)
      f[k] = g(k * l, r, t);
  }
  function w(k, D, B) {
    var P, L, M = 0;
    do
      L = D + (B - D) / 2, P = g(L, r, t) - k, P > 0 ? B = L : D = L;
    while (Math.abs(P) > s && ++M < o);
    return L;
  }
  function E(k) {
    for (var D = 0, B = 1, P = u - 1; B !== P && f[B] <= k; ++B)
      D += l;
    --B;
    var L = (k - f[B]) / (f[B + 1] - f[B]), M = D + L * l, I = p(M, r, t);
    return I >= i ? m(k, M) : I === 0 ? M : w(k, D, D + l);
  }
  var C = !1;
  function x() {
    C = !0, (r !== e || t !== a) && b();
  }
  var T = function(D) {
    return C || x(), r === e && t === a ? D : D === 0 ? 0 : D === 1 ? 1 : g(E(D), e, a);
  };
  T.getControlPoints = function() {
    return [{
      x: r,
      y: e
    }, {
      x: t,
      y: a
    }];
  };
  var A = "generateBezier(" + [r, e, t, a] + ")";
  return T.toString = function() {
    return A;
  }, T;
}
/*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
var $y = /* @__PURE__ */ function() {
  function r(a) {
    return -a.tension * a.x - a.friction * a.v;
  }
  function e(a, n, i) {
    var s = {
      x: a.x + i.dx * n,
      v: a.v + i.dv * n,
      tension: a.tension,
      friction: a.friction
    };
    return {
      dx: s.v,
      dv: r(s)
    };
  }
  function t(a, n) {
    var i = {
      dx: a.v,
      dv: r(a)
    }, s = e(a, n * 0.5, i), o = e(a, n * 0.5, s), u = e(a, n, o), l = 1 / 6 * (i.dx + 2 * (s.dx + o.dx) + u.dx), c = 1 / 6 * (i.dv + 2 * (s.dv + o.dv) + u.dv);
    return a.x = a.x + l * n, a.v = a.v + c * n, a;
  }
  return function a(n, i, s) {
    var o = {
      x: -1,
      v: 0,
      tension: null,
      friction: null
    }, u = [0], l = 0, c = 1 / 1e4, v = 16 / 1e3, f, h, d;
    for (n = parseFloat(n) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = n, o.friction = i, f = s !== null, f ? (l = a(n, i), h = l / s * v) : h = v; d = t(d || o, h), u.push(1 + d.x), l += 16, Math.abs(d.x) > c && Math.abs(d.v) > c; )
      ;
    return f ? function(y) {
      return u[y * (u.length - 1) | 0];
    } : l;
  };
}(), qe = function(e, t, a, n) {
  var i = Vy(e, t, a, n);
  return function(s, o, u) {
    return s + (o - s) * i(u);
  };
}, Nn = {
  linear: function(e, t, a) {
    return e + (t - e) * a;
  },
  // default easings
  ease: qe(0.25, 0.1, 0.25, 1),
  "ease-in": qe(0.42, 0, 1, 1),
  "ease-out": qe(0, 0, 0.58, 1),
  "ease-in-out": qe(0.42, 0, 0.58, 1),
  // sine
  "ease-in-sine": qe(0.47, 0, 0.745, 0.715),
  "ease-out-sine": qe(0.39, 0.575, 0.565, 1),
  "ease-in-out-sine": qe(0.445, 0.05, 0.55, 0.95),
  // quad
  "ease-in-quad": qe(0.55, 0.085, 0.68, 0.53),
  "ease-out-quad": qe(0.25, 0.46, 0.45, 0.94),
  "ease-in-out-quad": qe(0.455, 0.03, 0.515, 0.955),
  // cubic
  "ease-in-cubic": qe(0.55, 0.055, 0.675, 0.19),
  "ease-out-cubic": qe(0.215, 0.61, 0.355, 1),
  "ease-in-out-cubic": qe(0.645, 0.045, 0.355, 1),
  // quart
  "ease-in-quart": qe(0.895, 0.03, 0.685, 0.22),
  "ease-out-quart": qe(0.165, 0.84, 0.44, 1),
  "ease-in-out-quart": qe(0.77, 0, 0.175, 1),
  // quint
  "ease-in-quint": qe(0.755, 0.05, 0.855, 0.06),
  "ease-out-quint": qe(0.23, 1, 0.32, 1),
  "ease-in-out-quint": qe(0.86, 0, 0.07, 1),
  // expo
  "ease-in-expo": qe(0.95, 0.05, 0.795, 0.035),
  "ease-out-expo": qe(0.19, 1, 0.22, 1),
  "ease-in-out-expo": qe(1, 0, 0, 1),
  // circ
  "ease-in-circ": qe(0.6, 0.04, 0.98, 0.335),
  "ease-out-circ": qe(0.075, 0.82, 0.165, 1),
  "ease-in-out-circ": qe(0.785, 0.135, 0.15, 0.86),
  // user param easings...
  spring: function(e, t, a) {
    if (a === 0)
      return Nn.linear;
    var n = $y(e, t, a);
    return function(i, s, o) {
      return i + (s - i) * n(o);
    };
  },
  "cubic-bezier": qe
};
function hc(r, e, t, a, n) {
  if (a === 1 || e === t)
    return t;
  var i = n(e, t, a);
  return r == null || ((r.roundValue || r.color) && (i = Math.round(i)), r.min !== void 0 && (i = Math.max(i, r.min)), r.max !== void 0 && (i = Math.min(i, r.max))), i;
}
function gc(r, e) {
  return r.pfValue != null || r.value != null ? r.pfValue != null && (e == null || e.type.units !== "%") ? r.pfValue : r.value : r;
}
function Kr(r, e, t, a, n) {
  var i = n != null ? n.type : null;
  t < 0 ? t = 0 : t > 1 && (t = 1);
  var s = gc(r, n), o = gc(e, n);
  if (ne(s) && ne(o))
    return hc(i, s, o, t, a);
  if (_e(s) && _e(o)) {
    for (var u = [], l = 0; l < o.length; l++) {
      var c = s[l], v = o[l];
      if (c != null && v != null) {
        var f = hc(i, c, v, t, a);
        u.push(f);
      } else
        u.push(v);
    }
    return u;
  }
}
function _y(r, e, t, a) {
  var n = !a, i = r._private, s = e._private, o = s.easing, u = s.startTime, l = a ? r : r.cy(), c = l.style();
  if (!s.easingImpl)
    if (o == null)
      s.easingImpl = Nn.linear;
    else {
      var v;
      if (ge(o)) {
        var f = c.parse("transition-timing-function", o);
        v = f.value;
      } else
        v = o;
      var h, d;
      ge(v) ? (h = v, d = []) : (h = v[1], d = v.slice(2).map(function($) {
        return +$;
      })), d.length > 0 ? (h === "spring" && d.push(s.duration), s.easingImpl = Nn[h].apply(null, d)) : s.easingImpl = Nn[h];
    }
  var y = s.easingImpl, g;
  if (s.duration === 0 ? g = 1 : g = (t - u) / s.duration, s.applying && (g = s.progress), g < 0 ? g = 0 : g > 1 && (g = 1), s.delay == null) {
    var p = s.startPosition, m = s.position;
    if (m && n && !r.locked()) {
      var b = {};
      Aa(p.x, m.x) && (b.x = Kr(p.x, m.x, g, y)), Aa(p.y, m.y) && (b.y = Kr(p.y, m.y, g, y)), r.position(b);
    }
    var w = s.startPan, E = s.pan, C = i.pan, x = E != null && a;
    x && (Aa(w.x, E.x) && (C.x = Kr(w.x, E.x, g, y)), Aa(w.y, E.y) && (C.y = Kr(w.y, E.y, g, y)), r.emit("pan"));
    var T = s.startZoom, A = s.zoom, k = A != null && a;
    k && (Aa(T, A) && (i.zoom = Ga(i.minZoom, Kr(T, A, g, y), i.maxZoom)), r.emit("zoom")), (x || k) && r.emit("viewport");
    var D = s.style;
    if (D && D.length > 0 && n) {
      for (var B = 0; B < D.length; B++) {
        var P = D[B], L = P.name, M = P, I = s.startStyle[L], R = c.properties[I.name], O = Kr(I, M, g, y, R);
        c.overrideBypass(r, L, O);
      }
      r.emit("style");
    }
  }
  return s.progress = g, g;
}
function Aa(r, e) {
  return r == null || e == null ? !1 : ne(r) && ne(e) ? !0 : !!(r && e);
}
function qy(r, e, t, a) {
  var n = e._private;
  n.started = !0, n.startTime = t - n.progress * n.duration;
}
function pc(r, e) {
  var t = e._private.aniEles, a = [];
  function n(c, v) {
    var f = c._private, h = f.animation.current, d = f.animation.queue, y = !1;
    if (h.length === 0) {
      var g = d.shift();
      g && h.push(g);
    }
    for (var p = function(C) {
      for (var x = C.length - 1; x >= 0; x--) {
        var T = C[x];
        T();
      }
      C.splice(0, C.length);
    }, m = h.length - 1; m >= 0; m--) {
      var b = h[m], w = b._private;
      if (w.stopped) {
        h.splice(m, 1), w.hooked = !1, w.playing = !1, w.started = !1, p(w.frames);
        continue;
      }
      !w.playing && !w.applying || (w.playing && w.applying && (w.applying = !1), w.started || qy(c, b, r), _y(c, b, r, v), w.applying && (w.applying = !1), p(w.frames), w.step != null && w.step(r), b.completed() && (h.splice(m, 1), w.hooked = !1, w.playing = !1, w.started = !1, p(w.completes)), y = !0);
    }
    return !v && h.length === 0 && d.length === 0 && a.push(c), y;
  }
  for (var i = !1, s = 0; s < t.length; s++) {
    var o = t[s], u = n(o);
    i = i || u;
  }
  var l = n(e, !0);
  (i || l) && (t.length > 0 ? e.notify("draw", t) : e.notify("draw")), t.unmerge(a), e.emit("step");
}
var Hy = {
  // pull in animation functions
  animate: Fe.animate(),
  animation: Fe.animation(),
  animated: Fe.animated(),
  clearQueue: Fe.clearQueue(),
  delay: Fe.delay(),
  delayAnimation: Fe.delayAnimation(),
  stop: Fe.stop(),
  addToAnimationPool: function(e) {
    var t = this;
    t.styleEnabled() && t._private.aniEles.merge(e);
  },
  stopAnimationLoop: function() {
    this._private.animationsRunning = !1;
  },
  startAnimationLoop: function() {
    var e = this;
    if (e._private.animationsRunning = !0, !e.styleEnabled())
      return;
    function t() {
      e._private.animationsRunning && Wn(function(i) {
        pc(i, e), t();
      });
    }
    var a = e.renderer();
    a && a.beforeRender ? a.beforeRender(function(i, s) {
      pc(s, e);
    }, a.beforeRenderPriorities.animations) : t();
  }
}, Uy = {
  qualifierCompare: function(e, t) {
    return e == null || t == null ? e == null && t == null : e.sameText(t);
  },
  eventMatches: function(e, t, a) {
    var n = t.qualifier;
    return n != null ? e !== a.target && en(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, t) {
    t.cy = e, t.target = e;
  },
  callbackContext: function(e, t, a) {
    return t.qualifier != null ? a.target : e;
  }
}, Sn = function(e) {
  return ge(e) ? new yr(e) : e;
}, af = {
  createEmitter: function() {
    var e = this._private;
    return e.emitter || (e.emitter = new pi(Uy, this)), this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, t, a) {
    return this.emitter().on(e, Sn(t), a), this;
  },
  removeListener: function(e, t, a) {
    return this.emitter().removeListener(e, Sn(t), a), this;
  },
  removeAllListeners: function() {
    return this.emitter().removeAllListeners(), this;
  },
  one: function(e, t, a) {
    return this.emitter().one(e, Sn(t), a), this;
  },
  once: function(e, t, a) {
    return this.emitter().one(e, Sn(t), a), this;
  },
  emit: function(e, t) {
    return this.emitter().emit(e, t), this;
  },
  emitAndNotify: function(e, t) {
    return this.emit(e), this.notify(e, t), this;
  }
};
Fe.eventAliasesOn(af);
var yo = {
  png: function(e) {
    var t = this._private.renderer;
    return e = e || {}, t.png(e);
  },
  jpg: function(e) {
    var t = this._private.renderer;
    return e = e || {}, e.bg = e.bg || "#fff", t.jpg(e);
  }
};
yo.jpeg = yo.jpg;
var zn = {
  layout: function(e) {
    var t = this;
    if (e == null) {
      We("Layout options must be specified to make a layout");
      return;
    }
    if (e.name == null) {
      We("A `name` must be specified to make a layout");
      return;
    }
    var a = e.name, n = t.extension("layout", a);
    if (n == null) {
      We("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
      return;
    }
    var i;
    ge(e.eles) ? i = t.$(e.eles) : i = e.eles != null ? e.eles : t.$();
    var s = new n(be({}, e, {
      cy: t,
      eles: i
    }));
    return s;
  }
};
zn.createLayout = zn.makeLayout = zn.layout;
var Gy = {
  notify: function(e, t) {
    var a = this._private;
    if (this.batching()) {
      a.batchNotifications = a.batchNotifications || {};
      var n = a.batchNotifications[e] = a.batchNotifications[e] || this.collection();
      t != null && n.merge(t);
      return;
    }
    if (a.notificationsEnabled) {
      var i = this.renderer();
      this.destroyed() || !i || i.notify(e, t);
    }
  },
  notifications: function(e) {
    var t = this._private;
    return e === void 0 ? t.notificationsEnabled : (t.notificationsEnabled = !!e, this);
  },
  noNotifications: function(e) {
    this.notifications(!1), e(), this.notifications(!0);
  },
  batching: function() {
    return this._private.batchCount > 0;
  },
  startBatch: function() {
    var e = this._private;
    return e.batchCount == null && (e.batchCount = 0), e.batchCount === 0 && (e.batchStyleEles = this.collection(), e.batchNotifications = {}), e.batchCount++, this;
  },
  endBatch: function() {
    var e = this._private;
    if (e.batchCount === 0)
      return this;
    if (e.batchCount--, e.batchCount === 0) {
      e.batchStyleEles.updateStyle();
      var t = this.renderer();
      Object.keys(e.batchNotifications).forEach(function(a) {
        var n = e.batchNotifications[a];
        n.empty() ? t.notify(a) : t.notify(a, n);
      });
    }
    return this;
  },
  batch: function(e) {
    return this.startBatch(), e(), this.endBatch(), this;
  },
  // for backwards compatibility
  batchData: function(e) {
    var t = this;
    return this.batch(function() {
      for (var a = Object.keys(e), n = 0; n < a.length; n++) {
        var i = a[n], s = e[i], o = t.getElementById(i);
        o.data(s);
      }
    });
  }
}, Wy = gt({
  hideEdgesOnViewport: !1,
  textureOnViewport: !1,
  motionBlur: !1,
  motionBlurOpacity: 0.05,
  pixelRatio: void 0,
  desktopTapThreshold: 4,
  touchTapThreshold: 8,
  wheelSensitivity: 1,
  debug: !1,
  showFps: !1,
  // webgl options
  webgl: !1,
  webglDebug: !1,
  webglDebugShowAtlases: !1,
  // defaults good for mobile
  webglTexSize: 2048,
  webglTexRows: 36,
  webglTexRowsNodes: 18,
  webglBatchSize: 2048,
  webglTexPerBatch: 14,
  webglBgColor: [255, 255, 255]
}), mo = {
  renderTo: function(e, t, a, n) {
    var i = this._private.renderer;
    return i.renderTo(e, t, a, n), this;
  },
  renderer: function() {
    return this._private.renderer;
  },
  forceRender: function() {
    return this.notify("draw"), this;
  },
  resize: function() {
    return this.invalidateSize(), this.emitAndNotify("resize"), this;
  },
  initRenderer: function(e) {
    var t = this, a = t.extension("renderer", e.name);
    if (a == null) {
      We("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
      return;
    }
    e.wheelSensitivity !== void 0 && Ve("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
    var n = Wy(e);
    n.cy = t, t._private.renderer = new a(n), this.notify("init");
  },
  destroyRenderer: function() {
    var e = this;
    e.notify("destroy");
    var t = e.container();
    if (t)
      for (t._cyreg = null; t.childNodes.length > 0; )
        t.removeChild(t.childNodes[0]);
    e._private.renderer = null, e.mutableElements().forEach(function(a) {
      var n = a._private;
      n.rscratch = {}, n.rstyle = {}, n.animation.current = [], n.animation.queue = [];
    });
  },
  onRender: function(e) {
    return this.on("render", e);
  },
  offRender: function(e) {
    return this.off("render", e);
  }
};
mo.invalidateDimensions = mo.resize;
var Fn = {
  // get a collection
  // - empty collection on no args
  // - collection of elements in the graph on selector arg
  // - guarantee a returned collection when elements or collection specified
  collection: function(e, t) {
    return ge(e) ? this.$(e) : Pt(e) ? e.collection() : _e(e) ? (t || (t = {}), new dt(this, e, t.unique, t.removed)) : new dt(this);
  },
  nodes: function(e) {
    var t = this.$(function(a) {
      return a.isNode();
    });
    return e ? t.filter(e) : t;
  },
  edges: function(e) {
    var t = this.$(function(a) {
      return a.isEdge();
    });
    return e ? t.filter(e) : t;
  },
  // search the graph like jQuery
  $: function(e) {
    var t = this._private.elements;
    return e ? t.filter(e) : t.spawnSelf();
  },
  mutableElements: function() {
    return this._private.elements;
  }
};
Fn.elements = Fn.filter = Fn.$;
var ct = {}, Na = "t", Ky = "f";
ct.apply = function(r) {
  for (var e = this, t = e._private, a = t.cy, n = a.collection(), i = 0; i < r.length; i++) {
    var s = r[i], o = e.getContextMeta(s);
    if (!o.empty) {
      var u = e.getContextStyle(o), l = e.applyContextStyle(o, u, s);
      s._private.appliedInitStyle ? e.updateTransitions(s, l.diffProps) : s._private.appliedInitStyle = !0;
      var c = e.updateStyleHints(s);
      c && n.push(s);
    }
  }
  return n;
};
ct.getPropertiesDiff = function(r, e) {
  var t = this, a = t._private.propDiffs = t._private.propDiffs || {}, n = r + "-" + e, i = a[n];
  if (i)
    return i;
  for (var s = [], o = {}, u = 0; u < t.length; u++) {
    var l = t[u], c = r[u] === Na, v = e[u] === Na, f = c !== v, h = l.mappedProperties.length > 0;
    if (f || v && h) {
      var d = void 0;
      f && h || f ? d = l.properties : h && (d = l.mappedProperties);
      for (var y = 0; y < d.length; y++) {
        for (var g = d[y], p = g.name, m = !1, b = u + 1; b < t.length; b++) {
          var w = t[b], E = e[b] === Na;
          if (E && (m = w.properties[g.name] != null, m))
            break;
        }
        !o[p] && !m && (o[p] = !0, s.push(p));
      }
    }
  }
  return a[n] = s, s;
};
ct.getContextMeta = function(r) {
  for (var e = this, t = "", a, n = r._private.styleCxtKey || "", i = 0; i < e.length; i++) {
    var s = e[i], o = s.selector && s.selector.matches(r);
    o ? t += Na : t += Ky;
  }
  return a = e.getPropertiesDiff(n, t), r._private.styleCxtKey = t, {
    key: t,
    diffPropNames: a,
    empty: a.length === 0
  };
};
ct.getContextStyle = function(r) {
  var e = r.key, t = this, a = this._private.contextStyles = this._private.contextStyles || {};
  if (a[e])
    return a[e];
  for (var n = {
    _private: {
      key: e
    }
  }, i = 0; i < t.length; i++) {
    var s = t[i], o = e[i] === Na;
    if (o)
      for (var u = 0; u < s.properties.length; u++) {
        var l = s.properties[u];
        n[l.name] = l;
      }
  }
  return a[e] = n, n;
};
ct.applyContextStyle = function(r, e, t) {
  for (var a = this, n = r.diffPropNames, i = {}, s = a.types, o = 0; o < n.length; o++) {
    var u = n[o], l = e[u], c = t.pstyle(u);
    if (!l)
      if (c)
        c.bypass ? l = {
          name: u,
          deleteBypassed: !0
        } : l = {
          name: u,
          delete: !0
        };
      else
        continue;
    if (c !== l) {
      if (l.mapped === s.fn && c != null && c.mapping != null && c.mapping.value === l.value) {
        var v = c.mapping, f = v.fnValue = l.value(t);
        if (f === v.prevFnValue)
          continue;
      }
      var h = i[u] = {
        prev: c
      };
      a.applyParsedProperty(t, l), h.next = t.pstyle(u), h.next && h.next.bypass && (h.next = h.next.bypassed);
    }
  }
  return {
    diffProps: i
  };
};
ct.updateStyleHints = function(r) {
  var e = r._private, t = this, a = t.propertyGroupNames, n = t.propertyGroupKeys, i = function(_, K, re) {
    return t.getPropertiesHash(_, K, re);
  }, s = e.styleKey;
  if (r.removed())
    return !1;
  var o = e.group === "nodes", u = r._private.style;
  a = Object.keys(u);
  for (var l = 0; l < n.length; l++) {
    var c = n[l];
    e.styleKeys[c] = [Lr, ea];
  }
  for (var v = function(_, K) {
    return e.styleKeys[K][0] = qa(_, e.styleKeys[K][0]);
  }, f = function(_, K) {
    return e.styleKeys[K][1] = Ha(_, e.styleKeys[K][1]);
  }, h = function(_, K) {
    v(_, K), f(_, K);
  }, d = function(_, K) {
    for (var re = 0; re < _.length; re++) {
      var se = _.charCodeAt(re);
      v(se, K), f(se, K);
    }
  }, y = 2e9, g = function(_) {
    return -128 < _ && _ < 128 && Math.floor(_) !== _ ? y - (_ * 1024 | 0) : _;
  }, p = 0; p < a.length; p++) {
    var m = a[p], b = u[m];
    if (b != null) {
      var w = this.properties[m], E = w.type, C = w.groupKey, x = void 0;
      w.hashOverride != null ? x = w.hashOverride(r, b) : b.pfValue != null && (x = b.pfValue);
      var T = w.enums == null ? b.value : null, A = x != null, k = T != null, D = A || k, B = b.units;
      if (E.number && D && !E.multiple) {
        var P = A ? x : T;
        h(g(P), C), !A && B != null && d(B, C);
      } else
        d(b.strValue, C);
    }
  }
  for (var L = [Lr, ea], M = 0; M < n.length; M++) {
    var I = n[M], R = e.styleKeys[I];
    L[0] = qa(R[0], L[0]), L[1] = Ha(R[1], L[1]);
  }
  e.styleKey = lh(L[0], L[1]);
  var O = e.styleKeys;
  e.labelDimsKey = nr(O.labelDimensions);
  var $ = i(r, ["label"], O.labelDimensions);
  if (e.labelKey = nr($), e.labelStyleKey = nr(yn(O.commonLabel, $)), !o) {
    var H = i(r, ["source-label"], O.labelDimensions);
    e.sourceLabelKey = nr(H), e.sourceLabelStyleKey = nr(yn(O.commonLabel, H));
    var z = i(r, ["target-label"], O.labelDimensions);
    e.targetLabelKey = nr(z), e.targetLabelStyleKey = nr(yn(O.commonLabel, z));
  }
  if (o) {
    var F = e.styleKeys, U = F.nodeBody, Y = F.nodeBorder, G = F.nodeOutline, Q = F.backgroundImage, J = F.compound, ae = F.pie, W = F.stripe, N = [U, Y, G, Q, J, ae, W].filter(function(V) {
      return V != null;
    }).reduce(yn, [Lr, ea]);
    e.nodeKey = nr(N), e.hasPie = ae != null && ae[0] !== Lr && ae[1] !== ea, e.hasStripe = W != null && W[0] !== Lr && W[1] !== ea;
  }
  return s !== e.styleKey;
};
ct.clearStyleHints = function(r) {
  var e = r._private;
  e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null, e.hasStripe = null;
};
ct.applyParsedProperty = function(r, e) {
  var t = this, a = e, n = r._private.style, i, s = t.types, o = t.properties[a.name].type, u = a.bypass, l = n[a.name], c = l && l.bypass, v = r._private, f = "mapping", h = function(U) {
    return U == null ? null : U.pfValue != null ? U.pfValue : U.value;
  }, d = function() {
    var U = h(l), Y = h(a);
    t.checkTriggers(r, a.name, U, Y);
  };
  if (e.name === "curve-style" && r.isEdge() && // loops must be bundled beziers
  (e.value !== "bezier" && r.isLoop() || // edges connected to compound nodes can not be haystacks
  e.value === "haystack" && (r.source().isParent() || r.target().isParent())) && (a = e = this.parse(e.name, "bezier", u)), a.delete)
    return n[a.name] = void 0, d(), !0;
  if (a.deleteBypassed)
    return l ? l.bypass ? (l.bypassed = void 0, d(), !0) : !1 : (d(), !0);
  if (a.deleteBypass)
    return l ? l.bypass ? (n[a.name] = l.bypassed, d(), !0) : !1 : (d(), !0);
  var y = function() {
    Ve("Do not assign mappings to elements without corresponding data (i.e. ele `" + r.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
  };
  switch (a.mapped) {
    case s.mapData: {
      for (var g = a.field.split("."), p = v.data, m = 0; m < g.length && p; m++) {
        var b = g[m];
        p = p[b];
      }
      if (p == null)
        return y(), !1;
      var w;
      if (ne(p)) {
        var E = a.fieldMax - a.fieldMin;
        E === 0 ? w = 0 : w = (p - a.fieldMin) / E;
      } else
        return Ve("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + p + "` for `" + r.id() + "` is non-numeric)"), !1;
      if (w < 0 ? w = 0 : w > 1 && (w = 1), o.color) {
        var C = a.valueMin[0], x = a.valueMax[0], T = a.valueMin[1], A = a.valueMax[1], k = a.valueMin[2], D = a.valueMax[2], B = a.valueMin[3] == null ? 1 : a.valueMin[3], P = a.valueMax[3] == null ? 1 : a.valueMax[3], L = [Math.round(C + (x - C) * w), Math.round(T + (A - T) * w), Math.round(k + (D - k) * w), Math.round(B + (P - B) * w)];
        i = {
          // colours are simple, so just create the flat property instead of expensive string parsing
          bypass: a.bypass,
          // we're a bypass if the mapping property is a bypass
          name: a.name,
          value: L,
          strValue: "rgb(" + L[0] + ", " + L[1] + ", " + L[2] + ")"
        };
      } else if (o.number) {
        var M = a.valueMin + (a.valueMax - a.valueMin) * w;
        i = this.parse(a.name, M, a.bypass, f);
      } else
        return !1;
      if (!i)
        return y(), !1;
      i.mapping = a, a = i;
      break;
    }
    case s.data: {
      for (var I = a.field.split("."), R = v.data, O = 0; O < I.length && R; O++) {
        var $ = I[O];
        R = R[$];
      }
      if (R != null && (i = this.parse(a.name, R, a.bypass, f)), !i)
        return y(), !1;
      i.mapping = a, a = i;
      break;
    }
    case s.fn: {
      var H = a.value, z = a.fnValue != null ? a.fnValue : H(r);
      if (a.prevFnValue = z, z == null)
        return Ve("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + r.id() + "` is null)"), !1;
      if (i = this.parse(a.name, z, a.bypass, f), !i)
        return Ve("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + r.id() + "` is invalid)"), !1;
      i.mapping = Ut(a), a = i;
      break;
    }
    case void 0:
      break;
    default:
      return !1;
  }
  return u ? (c ? a.bypassed = l.bypassed : a.bypassed = l, n[a.name] = a) : c ? l.bypassed = a : n[a.name] = a, d(), !0;
};
ct.cleanElements = function(r, e) {
  for (var t = 0; t < r.length; t++) {
    var a = r[t];
    if (this.clearStyleHints(a), a.dirtyCompoundBoundsCache(), a.dirtyBoundingBoxCache(), !e)
      a._private.style = {};
    else
      for (var n = a._private.style, i = Object.keys(n), s = 0; s < i.length; s++) {
        var o = i[s], u = n[o];
        u != null && (u.bypass ? u.bypassed = null : n[o] = null);
      }
  }
};
ct.update = function() {
  var r = this._private.cy, e = r.mutableElements();
  e.updateStyle();
};
ct.updateTransitions = function(r, e) {
  var t = this, a = r._private, n = r.pstyle("transition-property").value, i = r.pstyle("transition-duration").pfValue, s = r.pstyle("transition-delay").pfValue;
  if (n.length > 0 && i > 0) {
    for (var o = {}, u = !1, l = 0; l < n.length; l++) {
      var c = n[l], v = r.pstyle(c), f = e[c];
      if (f) {
        var h = f.prev, d = h, y = f.next != null ? f.next : v, g = !1, p = void 0, m = 1e-6;
        d && (ne(d.pfValue) && ne(y.pfValue) ? (g = y.pfValue - d.pfValue, p = d.pfValue + m * g) : ne(d.value) && ne(y.value) ? (g = y.value - d.value, p = d.value + m * g) : _e(d.value) && _e(y.value) && (g = d.value[0] !== y.value[0] || d.value[1] !== y.value[1] || d.value[2] !== y.value[2], p = d.strValue), g && (o[c] = y.strValue, this.applyBypass(r, c, p), u = !0));
      }
    }
    if (!u)
      return;
    a.transitioning = !0, new ha(function(b) {
      s > 0 ? r.delayAnimation(s).play().promise().then(b) : b();
    }).then(function() {
      return r.animation({
        style: o,
        duration: i,
        easing: r.pstyle("transition-timing-function").value,
        queue: !1
      }).play().promise();
    }).then(function() {
      t.removeBypasses(r, n), r.emitAndNotify("style"), a.transitioning = !1;
    });
  } else
    a.transitioning && (this.removeBypasses(r, n), r.emitAndNotify("style"), a.transitioning = !1);
};
ct.checkTrigger = function(r, e, t, a, n, i) {
  var s = this.properties[e], o = n(s);
  r.removed() || o != null && o(t, a, r) && i(s);
};
ct.checkZOrderTrigger = function(r, e, t, a) {
  var n = this;
  this.checkTrigger(r, e, t, a, function(i) {
    return i.triggersZOrder;
  }, function() {
    n._private.cy.notify("zorder", r);
  });
};
ct.checkBoundsTrigger = function(r, e, t, a) {
  this.checkTrigger(r, e, t, a, function(n) {
    return n.triggersBounds;
  }, function(n) {
    r.dirtyCompoundBoundsCache(), r.dirtyBoundingBoxCache();
  });
};
ct.checkConnectedEdgesBoundsTrigger = function(r, e, t, a) {
  this.checkTrigger(r, e, t, a, function(n) {
    return n.triggersBoundsOfConnectedEdges;
  }, function(n) {
    r.connectedEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
ct.checkParallelEdgesBoundsTrigger = function(r, e, t, a) {
  this.checkTrigger(r, e, t, a, function(n) {
    return n.triggersBoundsOfParallelEdges;
  }, function(n) {
    r.parallelEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
ct.checkTriggers = function(r, e, t, a) {
  r.dirtyStyleCache(), this.checkZOrderTrigger(r, e, t, a), this.checkBoundsTrigger(r, e, t, a), this.checkConnectedEdgesBoundsTrigger(r, e, t, a), this.checkParallelEdgesBoundsTrigger(r, e, t, a);
};
var un = {};
un.applyBypass = function(r, e, t, a) {
  var n = this, i = [], s = !0;
  if (e === "*" || e === "**") {
    if (t !== void 0)
      for (var o = 0; o < n.properties.length; o++) {
        var u = n.properties[o], l = u.name, c = this.parse(l, t, !0);
        c && i.push(c);
      }
  } else if (ge(e)) {
    var v = this.parse(e, t, !0);
    v && i.push(v);
  } else if (Me(e)) {
    var f = e;
    a = t;
    for (var h = Object.keys(f), d = 0; d < h.length; d++) {
      var y = h[d], g = f[y];
      if (g === void 0 && (g = f[si(y)]), g !== void 0) {
        var p = this.parse(y, g, !0);
        p && i.push(p);
      }
    }
  } else
    return !1;
  if (i.length === 0)
    return !1;
  for (var m = !1, b = 0; b < r.length; b++) {
    for (var w = r[b], E = {}, C = void 0, x = 0; x < i.length; x++) {
      var T = i[x];
      if (a) {
        var A = w.pstyle(T.name);
        C = E[T.name] = {
          prev: A
        };
      }
      m = this.applyParsedProperty(w, Ut(T)) || m, a && (C.next = w.pstyle(T.name));
    }
    m && this.updateStyleHints(w), a && this.updateTransitions(w, E, s);
  }
  return m;
};
un.overrideBypass = function(r, e, t) {
  e = Io(e);
  for (var a = 0; a < r.length; a++) {
    var n = r[a], i = n._private.style[e], s = this.properties[e].type, o = s.color, u = s.mutiple, l = i ? i.pfValue != null ? i.pfValue : i.value : null;
    !i || !i.bypass ? this.applyBypass(n, e, t) : (i.value = t, i.pfValue != null && (i.pfValue = t), o ? i.strValue = "rgb(" + t.join(",") + ")" : u ? i.strValue = t.join(" ") : i.strValue = "" + t, this.updateStyleHints(n)), this.checkTriggers(n, e, l, t);
  }
};
un.removeAllBypasses = function(r, e) {
  return this.removeBypasses(r, this.propertyNames, e);
};
un.removeBypasses = function(r, e, t) {
  for (var a = !0, n = 0; n < r.length; n++) {
    for (var i = r[n], s = {}, o = 0; o < e.length; o++) {
      var u = e[o], l = this.properties[u], c = i.pstyle(l.name);
      if (!(!c || !c.bypass)) {
        var v = "", f = this.parse(u, v, !0), h = s[l.name] = {
          prev: c
        };
        this.applyParsedProperty(i, f), h.next = i.pstyle(l.name);
      }
    }
    this.updateStyleHints(i), t && this.updateTransitions(i, s, a);
  }
};
var Yo = {};
Yo.getEmSizeInPixels = function() {
  var r = this.containerCss("font-size");
  return r != null ? parseFloat(r) : 1;
};
Yo.containerCss = function(r) {
  var e = this._private.cy, t = e.container(), a = e.window();
  if (a && t && a.getComputedStyle)
    return a.getComputedStyle(t).getPropertyValue(r);
};
var Gt = {};
Gt.getRenderedStyle = function(r, e) {
  return e ? this.getStylePropertyValue(r, e, !0) : this.getRawStyle(r, !0);
};
Gt.getRawStyle = function(r, e) {
  var t = this;
  if (r = r[0], r) {
    for (var a = {}, n = 0; n < t.properties.length; n++) {
      var i = t.properties[n], s = t.getStylePropertyValue(r, i.name, e);
      s != null && (a[i.name] = s, a[si(i.name)] = s);
    }
    return a;
  }
};
Gt.getIndexedStyle = function(r, e, t, a) {
  var n = r.pstyle(e)[t][a];
  return n ?? r.cy().style().getDefaultProperty(e)[t][0];
};
Gt.getStylePropertyValue = function(r, e, t) {
  var a = this;
  if (r = r[0], r) {
    var n = a.properties[e];
    n.alias && (n = n.pointsTo);
    var i = n.type, s = r.pstyle(n.name);
    if (s) {
      var o = s.value, u = s.units, l = s.strValue;
      if (t && i.number && o != null && ne(o)) {
        var c = r.cy().zoom(), v = function(g) {
          return g * c;
        }, f = function(g, p) {
          return v(g) + p;
        }, h = _e(o), d = h ? u.every(function(y) {
          return y != null;
        }) : u != null;
        return d ? h ? o.map(function(y, g) {
          return f(y, u[g]);
        }).join(" ") : f(o, u) : h ? o.map(function(y) {
          return ge(y) ? y : "" + v(y);
        }).join(" ") : "" + v(o);
      } else if (l != null)
        return l;
    }
    return null;
  }
};
Gt.getAnimationStartStyle = function(r, e) {
  for (var t = {}, a = 0; a < e.length; a++) {
    var n = e[a], i = n.name, s = r.pstyle(i);
    s !== void 0 && (Me(s) ? s = this.parse(i, s.strValue) : s = this.parse(i, s)), s && (t[i] = s);
  }
  return t;
};
Gt.getPropsList = function(r) {
  var e = this, t = [], a = r, n = e.properties;
  if (a)
    for (var i = Object.keys(a), s = 0; s < i.length; s++) {
      var o = i[s], u = a[o], l = n[o] || n[Io(o)], c = this.parse(l.name, u);
      c && t.push(c);
    }
  return t;
};
Gt.getNonDefaultPropertiesHash = function(r, e, t) {
  var a = t.slice(), n, i, s, o, u, l;
  for (u = 0; u < e.length; u++)
    if (n = e[u], i = r.pstyle(n, !1), i != null)
      if (i.pfValue != null)
        a[0] = qa(o, a[0]), a[1] = Ha(o, a[1]);
      else
        for (s = i.strValue, l = 0; l < s.length; l++)
          o = s.charCodeAt(l), a[0] = qa(o, a[0]), a[1] = Ha(o, a[1]);
  return a;
};
Gt.getPropertiesHash = Gt.getNonDefaultPropertiesHash;
var bi = {};
bi.appendFromJson = function(r) {
  for (var e = this, t = 0; t < r.length; t++) {
    var a = r[t], n = a.selector, i = a.style || a.css, s = Object.keys(i);
    e.selector(n);
    for (var o = 0; o < s.length; o++) {
      var u = s[o], l = i[u];
      e.css(u, l);
    }
  }
  return e;
};
bi.fromJson = function(r) {
  var e = this;
  return e.resetToDefault(), e.appendFromJson(r), e;
};
bi.json = function() {
  for (var r = [], e = this.defaultLength; e < this.length; e++) {
    for (var t = this[e], a = t.selector, n = t.properties, i = {}, s = 0; s < n.length; s++) {
      var o = n[s];
      i[o.name] = o.strValue;
    }
    r.push({
      selector: a ? a.toString() : "core",
      style: i
    });
  }
  return r;
};
var Zo = {};
Zo.appendFromString = function(r) {
  var e = this, t = this, a = "" + r, n, i, s;
  a = a.replace(/[/][*](\s|.)+?[*][/]/g, "");
  function o() {
    a.length > n.length ? a = a.substr(n.length) : a = "";
  }
  function u() {
    i.length > s.length ? i = i.substr(s.length) : i = "";
  }
  for (; ; ) {
    var l = a.match(/^\s*$/);
    if (l)
      break;
    var c = a.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
    if (!c) {
      Ve("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
      break;
    }
    n = c[0];
    var v = c[1];
    if (v !== "core") {
      var f = new yr(v);
      if (f.invalid) {
        Ve("Skipping parsing of block: Invalid selector found in string stylesheet: " + v), o();
        continue;
      }
    }
    var h = c[2], d = !1;
    i = h;
    for (var y = []; ; ) {
      var g = i.match(/^\s*$/);
      if (g)
        break;
      var p = i.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
      if (!p) {
        Ve("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + h), d = !0;
        break;
      }
      s = p[0];
      var m = p[1], b = p[2], w = e.properties[m];
      if (!w) {
        Ve("Skipping property: Invalid property name in: " + s), u();
        continue;
      }
      var E = t.parse(m, b);
      if (!E) {
        Ve("Skipping property: Invalid property definition in: " + s), u();
        continue;
      }
      y.push({
        name: m,
        val: b
      }), u();
    }
    if (d) {
      o();
      break;
    }
    t.selector(v);
    for (var C = 0; C < y.length; C++) {
      var x = y[C];
      t.css(x.name, x.val);
    }
    o();
  }
  return t;
};
Zo.fromString = function(r) {
  var e = this;
  return e.resetToDefault(), e.appendFromString(r), e;
};
var Je = {};
(function() {
  var r = at, e = _d, t = Hd, a = Ud, n = Gd, i = function(V) {
    return "^" + V + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
  }, s = function(V) {
    var _ = r + "|\\w+|" + e + "|" + t + "|" + a + "|" + n;
    return "^" + V + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + r + ")\\s*\\,\\s*(" + r + ")\\s*,\\s*(" + _ + ")\\s*\\,\\s*(" + _ + ")\\)$";
  }, o = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
  Je.types = {
    time: {
      number: !0,
      min: 0,
      units: "s|ms",
      implicitUnits: "ms"
    },
    percent: {
      number: !0,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%"
    },
    percentages: {
      number: !0,
      min: 0,
      max: 100,
      units: "%",
      implicitUnits: "%",
      multiple: !0
    },
    zeroOneNumber: {
      number: !0,
      min: 0,
      max: 1,
      unitless: !0
    },
    zeroOneNumbers: {
      number: !0,
      min: 0,
      max: 1,
      unitless: !0,
      multiple: !0
    },
    nOneOneNumber: {
      number: !0,
      min: -1,
      max: 1,
      unitless: !0
    },
    nonNegativeInt: {
      number: !0,
      min: 0,
      integer: !0,
      unitless: !0
    },
    nonNegativeNumber: {
      number: !0,
      min: 0,
      unitless: !0
    },
    position: {
      enums: ["parent", "origin"]
    },
    nodeSize: {
      number: !0,
      min: 0,
      enums: ["label"]
    },
    number: {
      number: !0,
      unitless: !0
    },
    numbers: {
      number: !0,
      unitless: !0,
      multiple: !0
    },
    positiveNumber: {
      number: !0,
      unitless: !0,
      min: 0,
      strictMin: !0
    },
    size: {
      number: !0,
      min: 0
    },
    bidirectionalSize: {
      number: !0
    },
    // allows negative
    bidirectionalSizeMaybePercent: {
      number: !0,
      allowPercent: !0
    },
    // allows negative
    bidirectionalSizes: {
      number: !0,
      multiple: !0
    },
    // allows negative
    sizeMaybePercent: {
      number: !0,
      min: 0,
      allowPercent: !0
    },
    axisDirection: {
      enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"]
    },
    axisDirectionExplicit: {
      enums: ["leftward", "rightward", "upward", "downward"]
    },
    axisDirectionPrimary: {
      enums: ["horizontal", "vertical"]
    },
    paddingRelativeTo: {
      enums: ["width", "height", "average", "min", "max"]
    },
    bgWH: {
      number: !0,
      min: 0,
      allowPercent: !0,
      enums: ["auto"],
      multiple: !0
    },
    bgPos: {
      number: !0,
      allowPercent: !0,
      multiple: !0
    },
    bgRelativeTo: {
      enums: ["inner", "include-padding"],
      multiple: !0
    },
    bgRepeat: {
      enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
      multiple: !0
    },
    bgFit: {
      enums: ["none", "contain", "cover"],
      multiple: !0
    },
    bgCrossOrigin: {
      enums: ["anonymous", "use-credentials", "null"],
      multiple: !0
    },
    bgClip: {
      enums: ["none", "node"],
      multiple: !0
    },
    bgContainment: {
      enums: ["inside", "over"],
      multiple: !0
    },
    boxSelection: {
      enums: ["contain", "overlap", "none"]
    },
    color: {
      color: !0
    },
    colors: {
      color: !0,
      multiple: !0
    },
    fill: {
      enums: ["solid", "linear-gradient", "radial-gradient"]
    },
    bool: {
      enums: ["yes", "no"]
    },
    bools: {
      enums: ["yes", "no"],
      multiple: !0
    },
    lineStyle: {
      enums: ["solid", "dotted", "dashed"]
    },
    lineCap: {
      enums: ["butt", "round", "square"]
    },
    linePosition: {
      enums: ["center", "inside", "outside"]
    },
    lineJoin: {
      enums: ["round", "bevel", "miter"]
    },
    borderStyle: {
      enums: ["solid", "dotted", "dashed", "double"]
    },
    curveStyle: {
      enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi", "round-segments", "round-taxi"]
    },
    radiusType: {
      enums: ["arc-radius", "influence-radius"],
      multiple: !0
    },
    fontFamily: {
      regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
    },
    fontStyle: {
      enums: ["italic", "normal", "oblique"]
    },
    fontWeight: {
      enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    textDecoration: {
      enums: ["none", "underline", "overline", "line-through"]
    },
    textTransform: {
      enums: ["none", "uppercase", "lowercase"]
    },
    textWrap: {
      enums: ["none", "wrap", "ellipsis"]
    },
    textOverflowWrap: {
      enums: ["whitespace", "anywhere"]
    },
    textBackgroundShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "circle"]
    },
    nodeShape: {
      enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "right-rhomboid", "polygon"]
    },
    overlayShape: {
      enums: ["roundrectangle", "round-rectangle", "ellipse"]
    },
    cornerRadius: {
      number: !0,
      min: 0,
      units: "px|em",
      implicitUnits: "px",
      enums: ["auto"]
    },
    compoundIncludeLabels: {
      enums: ["include", "exclude"]
    },
    arrowShape: {
      enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"]
    },
    arrowFill: {
      enums: ["filled", "hollow"]
    },
    arrowWidth: {
      number: !0,
      units: "%|px|em",
      implicitUnits: "px",
      enums: ["match-line"]
    },
    display: {
      enums: ["element", "none"]
    },
    visibility: {
      enums: ["hidden", "visible"]
    },
    zCompoundDepth: {
      enums: ["bottom", "orphan", "auto", "top"]
    },
    zIndexCompare: {
      enums: ["auto", "manual"]
    },
    valign: {
      enums: ["top", "center", "bottom"]
    },
    halign: {
      enums: ["left", "center", "right"]
    },
    justification: {
      enums: ["left", "center", "right", "auto"]
    },
    text: {
      string: !0
    },
    data: {
      mapping: !0,
      regex: i("data")
    },
    layoutData: {
      mapping: !0,
      regex: i("layoutData")
    },
    scratch: {
      mapping: !0,
      regex: i("scratch")
    },
    mapData: {
      mapping: !0,
      regex: s("mapData")
    },
    mapLayoutData: {
      mapping: !0,
      regex: s("mapLayoutData")
    },
    mapScratch: {
      mapping: !0,
      regex: s("mapScratch")
    },
    fn: {
      mapping: !0,
      fn: !0
    },
    url: {
      regexes: o,
      singleRegexMatchValue: !0
    },
    urls: {
      regexes: o,
      singleRegexMatchValue: !0,
      multiple: !0
    },
    propList: {
      propList: !0
    },
    angle: {
      number: !0,
      units: "deg|rad",
      implicitUnits: "rad"
    },
    textRotation: {
      number: !0,
      units: "deg|rad",
      implicitUnits: "rad",
      enums: ["none", "autorotate"]
    },
    polygonPointList: {
      number: !0,
      multiple: !0,
      evenMultiple: !0,
      min: -1,
      max: 1,
      unitless: !0
    },
    edgeDistances: {
      enums: ["intersection", "node-position", "endpoints"]
    },
    edgeEndpoint: {
      number: !0,
      multiple: !0,
      units: "%|px|em|deg|rad",
      implicitUnits: "px",
      enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"],
      singleEnum: !0,
      validate: function(V, _) {
        switch (V.length) {
          case 2:
            return _[0] !== "deg" && _[0] !== "rad" && _[1] !== "deg" && _[1] !== "rad";
          case 1:
            return ge(V[0]) || _[0] === "deg" || _[0] === "rad";
          default:
            return !1;
        }
      }
    },
    easing: {
      regexes: ["^(spring)\\s*\\(\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*,\\s*(" + r + ")\\s*\\)$"],
      enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"]
    },
    gradientDirection: {
      enums: [
        "to-bottom",
        "to-top",
        "to-left",
        "to-right",
        "to-bottom-right",
        "to-bottom-left",
        "to-top-right",
        "to-top-left",
        "to-right-bottom",
        "to-left-bottom",
        "to-right-top",
        "to-left-top"
        // different order
      ]
    },
    boundsExpansion: {
      number: !0,
      multiple: !0,
      min: 0,
      validate: function(V) {
        var _ = V.length;
        return _ === 1 || _ === 2 || _ === 4;
      }
    }
  };
  var u = {
    zeroNonZero: function(V, _) {
      return (V == null || _ == null) && V !== _ || V == 0 && _ != 0 ? !0 : V != 0 && _ == 0;
    },
    any: function(V, _) {
      return V != _;
    },
    emptyNonEmpty: function(V, _) {
      var K = hr(V), re = hr(_);
      return K && !re || !K && re;
    }
  }, l = Je.types, c = [{
    name: "label",
    type: l.text,
    triggersBounds: u.any,
    triggersZOrder: u.emptyNonEmpty
  }, {
    name: "text-rotation",
    type: l.textRotation,
    triggersBounds: u.any
  }, {
    name: "text-margin-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "text-margin-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }], v = [{
    name: "source-label",
    type: l.text,
    triggersBounds: u.any
  }, {
    name: "source-text-rotation",
    type: l.textRotation,
    triggersBounds: u.any
  }, {
    name: "source-text-margin-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "source-text-margin-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "source-text-offset",
    type: l.size,
    triggersBounds: u.any
  }], f = [{
    name: "target-label",
    type: l.text,
    triggersBounds: u.any
  }, {
    name: "target-text-rotation",
    type: l.textRotation,
    triggersBounds: u.any
  }, {
    name: "target-text-margin-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "target-text-margin-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "target-text-offset",
    type: l.size,
    triggersBounds: u.any
  }], h = [{
    name: "font-family",
    type: l.fontFamily,
    triggersBounds: u.any
  }, {
    name: "font-style",
    type: l.fontStyle,
    triggersBounds: u.any
  }, {
    name: "font-weight",
    type: l.fontWeight,
    triggersBounds: u.any
  }, {
    name: "font-size",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-transform",
    type: l.textTransform,
    triggersBounds: u.any
  }, {
    name: "text-wrap",
    type: l.textWrap,
    triggersBounds: u.any
  }, {
    name: "text-overflow-wrap",
    type: l.textOverflowWrap,
    triggersBounds: u.any
  }, {
    name: "text-max-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-outline-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "line-height",
    type: l.positiveNumber,
    triggersBounds: u.any
  }], d = [{
    name: "text-valign",
    type: l.valign,
    triggersBounds: u.any
  }, {
    name: "text-halign",
    type: l.halign,
    triggersBounds: u.any
  }, {
    name: "color",
    type: l.color
  }, {
    name: "text-outline-color",
    type: l.color
  }, {
    name: "text-outline-opacity",
    type: l.zeroOneNumber
  }, {
    name: "text-background-color",
    type: l.color
  }, {
    name: "text-background-opacity",
    type: l.zeroOneNumber
  }, {
    name: "text-background-padding",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-border-opacity",
    type: l.zeroOneNumber
  }, {
    name: "text-border-color",
    type: l.color
  }, {
    name: "text-border-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "text-border-style",
    type: l.borderStyle,
    triggersBounds: u.any
  }, {
    name: "text-background-shape",
    type: l.textBackgroundShape,
    triggersBounds: u.any
  }, {
    name: "text-justification",
    type: l.justification
  }, {
    name: "box-select-labels",
    type: l.bool,
    triggersBounds: u.any
  }], y = [{
    name: "events",
    type: l.bool,
    triggersZOrder: u.any
  }, {
    name: "text-events",
    type: l.bool,
    triggersZOrder: u.any
  }, {
    name: "box-selection",
    type: l.boxSelection,
    triggersZOrder: u.any
  }], g = [{
    name: "display",
    type: l.display,
    triggersZOrder: u.any,
    triggersBounds: u.any,
    triggersBoundsOfConnectedEdges: u.any,
    triggersBoundsOfParallelEdges: function(V, _, K) {
      return V === _ ? !1 : K.pstyle("curve-style").value === "bezier";
    }
  }, {
    name: "visibility",
    type: l.visibility,
    triggersZOrder: u.any
  }, {
    name: "opacity",
    type: l.zeroOneNumber,
    triggersZOrder: u.zeroNonZero
  }, {
    name: "text-opacity",
    type: l.zeroOneNumber
  }, {
    name: "min-zoomed-font-size",
    type: l.size
  }, {
    name: "z-compound-depth",
    type: l.zCompoundDepth,
    triggersZOrder: u.any
  }, {
    name: "z-index-compare",
    type: l.zIndexCompare,
    triggersZOrder: u.any
  }, {
    name: "z-index",
    type: l.number,
    triggersZOrder: u.any
  }], p = [{
    name: "overlay-padding",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "overlay-color",
    type: l.color
  }, {
    name: "overlay-opacity",
    type: l.zeroOneNumber,
    triggersBounds: u.zeroNonZero
  }, {
    name: "overlay-shape",
    type: l.overlayShape,
    triggersBounds: u.any
  }, {
    name: "overlay-corner-radius",
    type: l.cornerRadius
  }], m = [{
    name: "underlay-padding",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "underlay-color",
    type: l.color
  }, {
    name: "underlay-opacity",
    type: l.zeroOneNumber,
    triggersBounds: u.zeroNonZero
  }, {
    name: "underlay-shape",
    type: l.overlayShape,
    triggersBounds: u.any
  }, {
    name: "underlay-corner-radius",
    type: l.cornerRadius
  }], b = [{
    name: "transition-property",
    type: l.propList
  }, {
    name: "transition-duration",
    type: l.time
  }, {
    name: "transition-delay",
    type: l.time
  }, {
    name: "transition-timing-function",
    type: l.easing
  }], w = function(V, _) {
    return _.value === "label" ? -V.poolIndex() : _.pfValue;
  }, E = [{
    name: "height",
    type: l.nodeSize,
    triggersBounds: u.any,
    hashOverride: w
  }, {
    name: "width",
    type: l.nodeSize,
    triggersBounds: u.any,
    hashOverride: w
  }, {
    name: "shape",
    type: l.nodeShape,
    triggersBounds: u.any
  }, {
    name: "shape-polygon-points",
    type: l.polygonPointList,
    triggersBounds: u.any
  }, {
    name: "corner-radius",
    type: l.cornerRadius
  }, {
    name: "background-color",
    type: l.color
  }, {
    name: "background-fill",
    type: l.fill
  }, {
    name: "background-opacity",
    type: l.zeroOneNumber
  }, {
    name: "background-blacken",
    type: l.nOneOneNumber
  }, {
    name: "background-gradient-stop-colors",
    type: l.colors
  }, {
    name: "background-gradient-stop-positions",
    type: l.percentages
  }, {
    name: "background-gradient-direction",
    type: l.gradientDirection
  }, {
    name: "padding",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "padding-relative-to",
    type: l.paddingRelativeTo,
    triggersBounds: u.any
  }, {
    name: "bounds-expansion",
    type: l.boundsExpansion,
    triggersBounds: u.any
  }], C = [{
    name: "border-color",
    type: l.color
  }, {
    name: "border-opacity",
    type: l.zeroOneNumber
  }, {
    name: "border-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "border-style",
    type: l.borderStyle
  }, {
    name: "border-cap",
    type: l.lineCap
  }, {
    name: "border-join",
    type: l.lineJoin
  }, {
    name: "border-dash-pattern",
    type: l.numbers
  }, {
    name: "border-dash-offset",
    type: l.number
  }, {
    name: "border-position",
    type: l.linePosition
  }], x = [{
    name: "outline-color",
    type: l.color
  }, {
    name: "outline-opacity",
    type: l.zeroOneNumber
  }, {
    name: "outline-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "outline-style",
    type: l.borderStyle
  }, {
    name: "outline-offset",
    type: l.size,
    triggersBounds: u.any
  }], T = [{
    name: "background-image",
    type: l.urls
  }, {
    name: "background-image-crossorigin",
    type: l.bgCrossOrigin
  }, {
    name: "background-image-opacity",
    type: l.zeroOneNumbers
  }, {
    name: "background-image-containment",
    type: l.bgContainment
  }, {
    name: "background-image-smoothing",
    type: l.bools
  }, {
    name: "background-position-x",
    type: l.bgPos
  }, {
    name: "background-position-y",
    type: l.bgPos
  }, {
    name: "background-width-relative-to",
    type: l.bgRelativeTo
  }, {
    name: "background-height-relative-to",
    type: l.bgRelativeTo
  }, {
    name: "background-repeat",
    type: l.bgRepeat
  }, {
    name: "background-fit",
    type: l.bgFit
  }, {
    name: "background-clip",
    type: l.bgClip
  }, {
    name: "background-width",
    type: l.bgWH
  }, {
    name: "background-height",
    type: l.bgWH
  }, {
    name: "background-offset-x",
    type: l.bgPos
  }, {
    name: "background-offset-y",
    type: l.bgPos
  }], A = [{
    name: "position",
    type: l.position,
    triggersBounds: u.any
  }, {
    name: "compound-sizing-wrt-labels",
    type: l.compoundIncludeLabels,
    triggersBounds: u.any
  }, {
    name: "min-width",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "min-width-bias-left",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "min-width-bias-right",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "min-height",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "min-height-bias-top",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "min-height-bias-bottom",
    type: l.sizeMaybePercent,
    triggersBounds: u.any
  }], k = [{
    name: "line-style",
    type: l.lineStyle
  }, {
    name: "line-color",
    type: l.color
  }, {
    name: "line-fill",
    type: l.fill
  }, {
    name: "line-cap",
    type: l.lineCap
  }, {
    name: "line-opacity",
    type: l.zeroOneNumber
  }, {
    name: "line-dash-pattern",
    type: l.numbers
  }, {
    name: "line-dash-offset",
    type: l.number
  }, {
    name: "line-outline-width",
    type: l.size
  }, {
    name: "line-outline-color",
    type: l.color
  }, {
    name: "line-gradient-stop-colors",
    type: l.colors
  }, {
    name: "line-gradient-stop-positions",
    type: l.percentages
  }, {
    name: "curve-style",
    type: l.curveStyle,
    triggersBounds: u.any,
    triggersBoundsOfParallelEdges: function(V, _) {
      return V === _ ? !1 : V === "bezier" || // remove from bundle
      _ === "bezier";
    }
  }, {
    name: "haystack-radius",
    type: l.zeroOneNumber,
    triggersBounds: u.any
  }, {
    name: "source-endpoint",
    type: l.edgeEndpoint,
    triggersBounds: u.any
  }, {
    name: "target-endpoint",
    type: l.edgeEndpoint,
    triggersBounds: u.any
  }, {
    name: "control-point-step-size",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "control-point-distances",
    type: l.bidirectionalSizes,
    triggersBounds: u.any
  }, {
    name: "control-point-weights",
    type: l.numbers,
    triggersBounds: u.any
  }, {
    name: "segment-distances",
    type: l.bidirectionalSizes,
    triggersBounds: u.any
  }, {
    name: "segment-weights",
    type: l.numbers,
    triggersBounds: u.any
  }, {
    name: "segment-radii",
    type: l.numbers,
    triggersBounds: u.any
  }, {
    name: "radius-type",
    type: l.radiusType,
    triggersBounds: u.any
  }, {
    name: "taxi-turn",
    type: l.bidirectionalSizeMaybePercent,
    triggersBounds: u.any
  }, {
    name: "taxi-turn-min-distance",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "taxi-direction",
    type: l.axisDirection,
    triggersBounds: u.any
  }, {
    name: "taxi-radius",
    type: l.number,
    triggersBounds: u.any
  }, {
    name: "edge-distances",
    type: l.edgeDistances,
    triggersBounds: u.any
  }, {
    name: "arrow-scale",
    type: l.positiveNumber,
    triggersBounds: u.any
  }, {
    name: "loop-direction",
    type: l.angle,
    triggersBounds: u.any
  }, {
    name: "loop-sweep",
    type: l.angle,
    triggersBounds: u.any
  }, {
    name: "source-distance-from-node",
    type: l.size,
    triggersBounds: u.any
  }, {
    name: "target-distance-from-node",
    type: l.size,
    triggersBounds: u.any
  }], D = [{
    name: "ghost",
    type: l.bool,
    triggersBounds: u.any
  }, {
    name: "ghost-offset-x",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "ghost-offset-y",
    type: l.bidirectionalSize,
    triggersBounds: u.any
  }, {
    name: "ghost-opacity",
    type: l.zeroOneNumber
  }], B = [{
    name: "selection-box-color",
    type: l.color
  }, {
    name: "selection-box-opacity",
    type: l.zeroOneNumber
  }, {
    name: "selection-box-border-color",
    type: l.color
  }, {
    name: "selection-box-border-width",
    type: l.size
  }, {
    name: "active-bg-color",
    type: l.color
  }, {
    name: "active-bg-opacity",
    type: l.zeroOneNumber
  }, {
    name: "active-bg-size",
    type: l.size
  }, {
    name: "outside-texture-bg-color",
    type: l.color
  }, {
    name: "outside-texture-bg-opacity",
    type: l.zeroOneNumber
  }], P = [];
  Je.pieBackgroundN = 16, P.push({
    name: "pie-size",
    type: l.sizeMaybePercent
  }), P.push({
    name: "pie-hole",
    type: l.sizeMaybePercent
  }), P.push({
    name: "pie-start-angle",
    type: l.angle
  });
  for (var L = 1; L <= Je.pieBackgroundN; L++)
    P.push({
      name: "pie-" + L + "-background-color",
      type: l.color
    }), P.push({
      name: "pie-" + L + "-background-size",
      type: l.percent
    }), P.push({
      name: "pie-" + L + "-background-opacity",
      type: l.zeroOneNumber
    });
  var M = [];
  Je.stripeBackgroundN = 16, M.push({
    name: "stripe-size",
    type: l.sizeMaybePercent
  }), M.push({
    name: "stripe-direction",
    type: l.axisDirectionPrimary
  });
  for (var I = 1; I <= Je.stripeBackgroundN; I++)
    M.push({
      name: "stripe-" + I + "-background-color",
      type: l.color
    }), M.push({
      name: "stripe-" + I + "-background-size",
      type: l.percent
    }), M.push({
      name: "stripe-" + I + "-background-opacity",
      type: l.zeroOneNumber
    });
  var R = [], O = Je.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
  [{
    name: "arrow-shape",
    type: l.arrowShape,
    triggersBounds: u.any
  }, {
    name: "arrow-color",
    type: l.color
  }, {
    name: "arrow-fill",
    type: l.arrowFill
  }, {
    name: "arrow-width",
    type: l.arrowWidth
  }].forEach(function(N) {
    O.forEach(function(V) {
      var _ = V + "-" + N.name, K = N.type, re = N.triggersBounds;
      R.push({
        name: _,
        type: K,
        triggersBounds: re
      });
    });
  }, {});
  var $ = Je.properties = [].concat(y, b, g, p, m, D, d, h, c, v, f, E, C, x, T, P, M, A, k, R, B), H = Je.propertyGroups = {
    // common to all eles
    behavior: y,
    transition: b,
    visibility: g,
    overlay: p,
    underlay: m,
    ghost: D,
    // labels
    commonLabel: d,
    labelDimensions: h,
    mainLabel: c,
    sourceLabel: v,
    targetLabel: f,
    // node props
    nodeBody: E,
    nodeBorder: C,
    nodeOutline: x,
    backgroundImage: T,
    pie: P,
    stripe: M,
    compound: A,
    // edge props
    edgeLine: k,
    edgeArrow: R,
    core: B
  }, z = Je.propertyGroupNames = {}, F = Je.propertyGroupKeys = Object.keys(H);
  F.forEach(function(N) {
    z[N] = H[N].map(function(V) {
      return V.name;
    }), H[N].forEach(function(V) {
      return V.groupKey = N;
    });
  });
  var U = Je.aliases = [{
    name: "content",
    pointsTo: "label"
  }, {
    name: "control-point-distance",
    pointsTo: "control-point-distances"
  }, {
    name: "control-point-weight",
    pointsTo: "control-point-weights"
  }, {
    name: "segment-distance",
    pointsTo: "segment-distances"
  }, {
    name: "segment-weight",
    pointsTo: "segment-weights"
  }, {
    name: "segment-radius",
    pointsTo: "segment-radii"
  }, {
    name: "edge-text-rotation",
    pointsTo: "text-rotation"
  }, {
    name: "padding-left",
    pointsTo: "padding"
  }, {
    name: "padding-right",
    pointsTo: "padding"
  }, {
    name: "padding-top",
    pointsTo: "padding"
  }, {
    name: "padding-bottom",
    pointsTo: "padding"
  }];
  Je.propertyNames = $.map(function(N) {
    return N.name;
  });
  for (var Y = 0; Y < $.length; Y++) {
    var G = $[Y];
    $[G.name] = G;
  }
  for (var Q = 0; Q < U.length; Q++) {
    var J = U[Q], ae = $[J.pointsTo], W = {
      name: J.name,
      alias: !0,
      pointsTo: ae
    };
    $.push(W), $[J.name] = W;
  }
})();
Je.getDefaultProperty = function(r) {
  return this.getDefaultProperties()[r];
};
Je.getDefaultProperties = function() {
  var r = this._private;
  if (r.defaultProperties != null)
    return r.defaultProperties;
  for (var e = be({
    // core props
    "selection-box-color": "#ddd",
    "selection-box-opacity": 0.65,
    "selection-box-border-color": "#aaa",
    "selection-box-border-width": 1,
    "active-bg-color": "black",
    "active-bg-opacity": 0.15,
    "active-bg-size": 30,
    "outside-texture-bg-color": "#000",
    "outside-texture-bg-opacity": 0.125,
    // common node/edge props
    events: "yes",
    "text-events": "no",
    "text-valign": "top",
    "text-halign": "center",
    "text-justification": "auto",
    "line-height": 1,
    color: "#000",
    "box-selection": "contain",
    "text-outline-color": "#000",
    "text-outline-width": 0,
    "text-outline-opacity": 1,
    "text-opacity": 1,
    "text-decoration": "none",
    "text-transform": "none",
    "text-wrap": "none",
    "text-overflow-wrap": "whitespace",
    "text-max-width": 9999,
    "text-background-color": "#000",
    "text-background-opacity": 0,
    "text-background-shape": "rectangle",
    "text-background-padding": 0,
    "text-border-opacity": 0,
    "text-border-width": 0,
    "text-border-style": "solid",
    "text-border-color": "#000",
    "font-family": "Helvetica Neue, Helvetica, sans-serif",
    "font-style": "normal",
    "font-weight": "normal",
    "font-size": 16,
    "min-zoomed-font-size": 0,
    "text-rotation": "none",
    "source-text-rotation": "none",
    "target-text-rotation": "none",
    visibility: "visible",
    display: "element",
    opacity: 1,
    "z-compound-depth": "auto",
    "z-index-compare": "auto",
    "z-index": 0,
    label: "",
    "text-margin-x": 0,
    "text-margin-y": 0,
    "source-label": "",
    "source-text-offset": 0,
    "source-text-margin-x": 0,
    "source-text-margin-y": 0,
    "target-label": "",
    "target-text-offset": 0,
    "target-text-margin-x": 0,
    "target-text-margin-y": 0,
    "overlay-opacity": 0,
    "overlay-color": "#000",
    "overlay-padding": 10,
    "overlay-shape": "round-rectangle",
    "overlay-corner-radius": "auto",
    "underlay-opacity": 0,
    "underlay-color": "#000",
    "underlay-padding": 10,
    "underlay-shape": "round-rectangle",
    "underlay-corner-radius": "auto",
    "transition-property": "none",
    "transition-duration": 0,
    "transition-delay": 0,
    "transition-timing-function": "linear",
    "box-select-labels": "no",
    // node props
    "background-blacken": 0,
    "background-color": "#999",
    "background-fill": "solid",
    "background-opacity": 1,
    "background-image": "none",
    "background-image-crossorigin": "anonymous",
    "background-image-opacity": 1,
    "background-image-containment": "inside",
    "background-image-smoothing": "yes",
    "background-position-x": "50%",
    "background-position-y": "50%",
    "background-offset-x": 0,
    "background-offset-y": 0,
    "background-width-relative-to": "include-padding",
    "background-height-relative-to": "include-padding",
    "background-repeat": "no-repeat",
    "background-fit": "none",
    "background-clip": "node",
    "background-width": "auto",
    "background-height": "auto",
    "border-color": "#000",
    "border-opacity": 1,
    "border-width": 0,
    "border-style": "solid",
    "border-dash-pattern": [4, 2],
    "border-dash-offset": 0,
    "border-cap": "butt",
    "border-join": "miter",
    "border-position": "center",
    "outline-color": "#999",
    "outline-opacity": 1,
    "outline-width": 0,
    "outline-offset": 0,
    "outline-style": "solid",
    height: 30,
    width: 30,
    shape: "ellipse",
    "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
    "corner-radius": "auto",
    "bounds-expansion": 0,
    // node gradient
    "background-gradient-direction": "to-bottom",
    "background-gradient-stop-colors": "#999",
    "background-gradient-stop-positions": "0%",
    // ghost props
    ghost: "no",
    "ghost-offset-y": 0,
    "ghost-offset-x": 0,
    "ghost-opacity": 0,
    // compound props
    padding: 0,
    "padding-relative-to": "width",
    position: "origin",
    "compound-sizing-wrt-labels": "include",
    "min-width": 0,
    "min-width-bias-left": 0,
    "min-width-bias-right": 0,
    "min-height": 0,
    "min-height-bias-top": 0,
    "min-height-bias-bottom": 0
  }, {
    // node pie bg
    "pie-size": "100%",
    "pie-hole": 0,
    "pie-start-angle": "0deg"
  }, [{
    name: "pie-{{i}}-background-color",
    value: "black"
  }, {
    name: "pie-{{i}}-background-size",
    value: "0%"
  }, {
    name: "pie-{{i}}-background-opacity",
    value: 1
  }].reduce(function(u, l) {
    for (var c = 1; c <= Je.pieBackgroundN; c++) {
      var v = l.name.replace("{{i}}", c), f = l.value;
      u[v] = f;
    }
    return u;
  }, {}), {
    // node stripes bg
    "stripe-size": "100%",
    "stripe-direction": "horizontal"
  }, [{
    name: "stripe-{{i}}-background-color",
    value: "black"
  }, {
    name: "stripe-{{i}}-background-size",
    value: "0%"
  }, {
    name: "stripe-{{i}}-background-opacity",
    value: 1
  }].reduce(function(u, l) {
    for (var c = 1; c <= Je.stripeBackgroundN; c++) {
      var v = l.name.replace("{{i}}", c), f = l.value;
      u[v] = f;
    }
    return u;
  }, {}), {
    // edge props
    "line-style": "solid",
    "line-color": "#999",
    "line-fill": "solid",
    "line-cap": "butt",
    "line-opacity": 1,
    "line-outline-width": 0,
    "line-outline-color": "#000",
    "line-gradient-stop-colors": "#999",
    "line-gradient-stop-positions": "0%",
    "control-point-step-size": 40,
    "control-point-weights": 0.5,
    "segment-weights": 0.5,
    "segment-distances": 20,
    "segment-radii": 15,
    "radius-type": "arc-radius",
    "taxi-turn": "50%",
    "taxi-radius": 15,
    "taxi-turn-min-distance": 10,
    "taxi-direction": "auto",
    "edge-distances": "intersection",
    "curve-style": "haystack",
    "haystack-radius": 0,
    "arrow-scale": 1,
    "loop-direction": "-45deg",
    "loop-sweep": "-90deg",
    "source-distance-from-node": 0,
    "target-distance-from-node": 0,
    "source-endpoint": "outside-to-node",
    "target-endpoint": "outside-to-node",
    "line-dash-pattern": [6, 3],
    "line-dash-offset": 0
  }, [{
    name: "arrow-shape",
    value: "none"
  }, {
    name: "arrow-color",
    value: "#999"
  }, {
    name: "arrow-fill",
    value: "filled"
  }, {
    name: "arrow-width",
    value: 1
  }].reduce(function(u, l) {
    return Je.arrowPrefixes.forEach(function(c) {
      var v = c + "-" + l.name, f = l.value;
      u[v] = f;
    }), u;
  }, {})), t = {}, a = 0; a < this.properties.length; a++) {
    var n = this.properties[a];
    if (!n.pointsTo) {
      var i = n.name, s = e[i], o = this.parse(i, s);
      t[i] = o;
    }
  }
  return r.defaultProperties = t, r.defaultProperties;
};
Je.addDefaultStylesheet = function() {
  this.selector(":parent").css({
    shape: "rectangle",
    padding: 10,
    "background-color": "#eee",
    "border-color": "#ccc",
    "border-width": 1
  }).selector("edge").css({
    width: 3
  }).selector(":loop").css({
    "curve-style": "bezier"
  }).selector("edge:compound").css({
    "curve-style": "bezier",
    "source-endpoint": "outside-to-line",
    "target-endpoint": "outside-to-line"
  }).selector(":selected").css({
    "background-color": "#0169D9",
    "line-color": "#0169D9",
    "source-arrow-color": "#0169D9",
    "target-arrow-color": "#0169D9",
    "mid-source-arrow-color": "#0169D9",
    "mid-target-arrow-color": "#0169D9"
  }).selector(":parent:selected").css({
    "background-color": "#CCE1F9",
    "border-color": "#aec8e5"
  }).selector(":active").css({
    "overlay-color": "black",
    "overlay-padding": 10,
    "overlay-opacity": 0.25
  }), this.defaultLength = this.length;
};
var wi = {};
wi.parse = function(r, e, t, a) {
  var n = this;
  if (Ke(e))
    return n.parseImplWarn(r, e, t, a);
  var i = a === "mapping" || a === !0 || a === !1 || a == null ? "dontcare" : a, s = t ? "t" : "f", o = "" + e, u = dv(r, o, s, i), l = n.propCache = n.propCache || [], c;
  return (c = l[u]) || (c = l[u] = n.parseImplWarn(r, e, t, a)), (t || a === "mapping") && (c = Ut(c), c && (c.value = Ut(c.value))), c;
};
wi.parseImplWarn = function(r, e, t, a) {
  var n = this.parseImpl(r, e, t, a);
  return !n && e != null && Ve("The style property `".concat(r, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && Ve("The style value of `label` is deprecated for `" + n.name + "`"), n;
};
wi.parseImpl = function(r, e, t, a) {
  var n = this;
  r = Io(r);
  var i = n.properties[r], s = e, o = n.types;
  if (!i || e === void 0)
    return null;
  i.alias && (i = i.pointsTo, r = i.name);
  var u = ge(e);
  u && (e = e.trim());
  var l = i.type;
  if (!l)
    return null;
  if (t && (e === "" || e === null))
    return {
      name: r,
      value: e,
      bypass: !0,
      deleteBypass: !0
    };
  if (Ke(e))
    return {
      name: r,
      value: e,
      strValue: "fn",
      mapped: o.fn,
      bypass: t
    };
  var c, v;
  if (!(!u || a || e.length < 7 || e[1] !== "a")) {
    if (e.length >= 7 && e[0] === "d" && (c = new RegExp(o.data.regex).exec(e))) {
      if (t)
        return !1;
      var f = o.data;
      return {
        name: r,
        value: c,
        strValue: "" + e,
        mapped: f,
        field: c[1],
        bypass: t
      };
    } else if (e.length >= 10 && e[0] === "m" && (v = new RegExp(o.mapData.regex).exec(e))) {
      if (t || l.multiple)
        return !1;
      var h = o.mapData;
      if (!(l.color || l.number))
        return !1;
      var d = this.parse(r, v[4]);
      if (!d || d.mapped)
        return !1;
      var y = this.parse(r, v[5]);
      if (!y || y.mapped)
        return !1;
      if (d.pfValue === y.pfValue || d.strValue === y.strValue)
        return Ve("`" + r + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + r + ": " + d.strValue + "`"), this.parse(r, d.strValue);
      if (l.color) {
        var g = d.value, p = y.value, m = g[0] === p[0] && g[1] === p[1] && g[2] === p[2] && // optional alpha
        (g[3] === p[3] || (g[3] == null || g[3] === 1) && (p[3] == null || p[3] === 1));
        if (m)
          return !1;
      }
      return {
        name: r,
        value: v,
        strValue: "" + e,
        mapped: h,
        field: v[1],
        fieldMin: parseFloat(v[2]),
        // min & max are numeric
        fieldMax: parseFloat(v[3]),
        valueMin: d.value,
        valueMax: y.value,
        bypass: t
      };
    }
  }
  if (l.multiple && a !== "multiple") {
    var b;
    if (u ? b = e.split(/\s+/) : _e(e) ? b = e : b = [e], l.evenMultiple && b.length % 2 !== 0)
      return null;
    for (var w = [], E = [], C = [], x = "", T = !1, A = 0; A < b.length; A++) {
      var k = n.parse(r, b[A], t, "multiple");
      T = T || ge(k.value), w.push(k.value), C.push(k.pfValue != null ? k.pfValue : k.value), E.push(k.units), x += (A > 0 ? " " : "") + k.strValue;
    }
    return l.validate && !l.validate(w, E) ? null : l.singleEnum && T ? w.length === 1 && ge(w[0]) ? {
      name: r,
      value: w[0],
      strValue: w[0],
      bypass: t
    } : null : {
      name: r,
      value: w,
      pfValue: C,
      strValue: x,
      bypass: t,
      units: E
    };
  }
  var D = function() {
    for (var W = 0; W < l.enums.length; W++) {
      var N = l.enums[W];
      if (N === e)
        return {
          name: r,
          value: e,
          strValue: "" + e,
          bypass: t
        };
    }
    return null;
  };
  if (l.number) {
    var B, P = "px";
    if (l.units && (B = l.units), l.implicitUnits && (P = l.implicitUnits), !l.unitless)
      if (u) {
        var L = "px|em" + (l.allowPercent ? "|\\%" : "");
        B && (L = B);
        var M = e.match("^(" + at + ")(" + L + ")?$");
        M && (e = M[1], B = M[2] || P);
      } else
        (!B || l.implicitUnits) && (B = P);
    if (e = parseFloat(e), isNaN(e) && l.enums === void 0)
      return null;
    if (isNaN(e) && l.enums !== void 0)
      return e = s, D();
    if (l.integer && !Id(e) || l.min !== void 0 && (e < l.min || l.strictMin && e === l.min) || l.max !== void 0 && (e > l.max || l.strictMax && e === l.max))
      return null;
    var I = {
      name: r,
      value: e,
      strValue: "" + e + (B || ""),
      units: B,
      bypass: t
    };
    return l.unitless || B !== "px" && B !== "em" ? I.pfValue = e : I.pfValue = B === "px" || !B ? e : this.getEmSizeInPixels() * e, (B === "ms" || B === "s") && (I.pfValue = B === "ms" ? e : 1e3 * e), (B === "deg" || B === "rad") && (I.pfValue = B === "rad" ? e : Uh(e)), B === "%" && (I.pfValue = e / 100), I;
  } else if (l.propList) {
    var R = [], O = "" + e;
    if (O !== "none") {
      for (var $ = O.split(/\s*,\s*|\s+/), H = 0; H < $.length; H++) {
        var z = $[H].trim();
        n.properties[z] ? R.push(z) : Ve("`" + z + "` is not a valid property name");
      }
      if (R.length === 0)
        return null;
    }
    return {
      name: r,
      value: R,
      strValue: R.length === 0 ? "none" : R.join(" "),
      bypass: t
    };
  } else if (l.color) {
    var F = sv(e);
    return F ? {
      name: r,
      value: F,
      pfValue: F,
      strValue: "rgb(" + F[0] + "," + F[1] + "," + F[2] + ")",
      // n.b. no spaces b/c of multiple support
      bypass: t
    } : null;
  } else if (l.regex || l.regexes) {
    if (l.enums) {
      var U = D();
      if (U)
        return U;
    }
    for (var Y = l.regexes ? l.regexes : [l.regex], G = 0; G < Y.length; G++) {
      var Q = new RegExp(Y[G]), J = Q.exec(e);
      if (J)
        return {
          name: r,
          value: l.singleRegexMatchValue ? J[1] : J,
          strValue: "" + e,
          bypass: t
        };
    }
    return null;
  } else
    return l.string ? {
      name: r,
      value: "" + e,
      strValue: "" + e,
      bypass: t
    } : l.enums ? D() : null;
};
var lt = function(e) {
  if (!(this instanceof lt))
    return new lt(e);
  if (!Mo(e)) {
    We("A style must have a core reference");
    return;
  }
  this._private = {
    cy: e,
    coreStyle: {}
  }, this.length = 0, this.resetToDefault();
}, bt = lt.prototype;
bt.instanceString = function() {
  return "style";
};
bt.clear = function() {
  for (var r = this._private, e = r.cy, t = e.elements(), a = 0; a < this.length; a++)
    this[a] = void 0;
  return this.length = 0, r.contextStyles = {}, r.propDiffs = {}, this.cleanElements(t, !0), t.forEach(function(n) {
    var i = n[0]._private;
    i.styleDirty = !0, i.appliedInitStyle = !1;
  }), this;
};
bt.resetToDefault = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
};
bt.core = function(r) {
  return this._private.coreStyle[r] || this.getDefaultProperty(r);
};
bt.selector = function(r) {
  var e = r === "core" ? null : new yr(r), t = this.length++;
  return this[t] = {
    selector: e,
    properties: [],
    mappedProperties: [],
    index: t
  }, this;
};
bt.css = function() {
  var r = this, e = arguments;
  if (e.length === 1)
    for (var t = e[0], a = 0; a < r.properties.length; a++) {
      var n = r.properties[a], i = t[n.name];
      i === void 0 && (i = t[si(n.name)]), i !== void 0 && this.cssRule(n.name, i);
    }
  else
    e.length === 2 && this.cssRule(e[0], e[1]);
  return this;
};
bt.style = bt.css;
bt.cssRule = function(r, e) {
  var t = this.parse(r, e);
  if (t) {
    var a = this.length - 1;
    this[a].properties.push(t), this[a].properties[t.name] = t, t.name.match(/pie-(\d+)-background-size/) && t.value && (this._private.hasPie = !0), t.name.match(/stripe-(\d+)-background-size/) && t.value && (this._private.hasStripe = !0), t.mapped && this[a].mappedProperties.push(t);
    var n = !this[a].selector;
    n && (this._private.coreStyle[t.name] = t);
  }
  return this;
};
bt.append = function(r) {
  return av(r) ? r.appendToStyle(this) : _e(r) ? this.appendFromJson(r) : ge(r) && this.appendFromString(r), this;
};
lt.fromJson = function(r, e) {
  var t = new lt(r);
  return t.fromJson(e), t;
};
lt.fromString = function(r, e) {
  return new lt(r).fromString(e);
};
[ct, un, Yo, Gt, bi, Zo, Je, wi].forEach(function(r) {
  be(bt, r);
});
lt.types = bt.types;
lt.properties = bt.properties;
lt.propertyGroups = bt.propertyGroups;
lt.propertyGroupNames = bt.propertyGroupNames;
lt.propertyGroupKeys = bt.propertyGroupKeys;
var Xy = {
  style: function(e) {
    if (e) {
      var t = this.setStyle(e);
      t.update();
    }
    return this._private.style;
  },
  setStyle: function(e) {
    var t = this._private;
    return av(e) ? t.style = e.generateStyle(this) : _e(e) ? t.style = lt.fromJson(this, e) : ge(e) ? t.style = lt.fromString(this, e) : t.style = lt(this), t.style;
  },
  // e.g. cy.data() changed => recalc ele mappers
  updateStyle: function() {
    this.mutableElements().updateStyle();
  }
}, Yy = "single", Vr = {
  autolock: function(e) {
    if (e !== void 0)
      this._private.autolock = !!e;
    else
      return this._private.autolock;
    return this;
  },
  autoungrabify: function(e) {
    if (e !== void 0)
      this._private.autoungrabify = !!e;
    else
      return this._private.autoungrabify;
    return this;
  },
  autounselectify: function(e) {
    if (e !== void 0)
      this._private.autounselectify = !!e;
    else
      return this._private.autounselectify;
    return this;
  },
  selectionType: function(e) {
    var t = this._private;
    if (t.selectionType == null && (t.selectionType = Yy), e !== void 0)
      (e === "additive" || e === "single") && (t.selectionType = e);
    else
      return t.selectionType;
    return this;
  },
  panningEnabled: function(e) {
    if (e !== void 0)
      this._private.panningEnabled = !!e;
    else
      return this._private.panningEnabled;
    return this;
  },
  userPanningEnabled: function(e) {
    if (e !== void 0)
      this._private.userPanningEnabled = !!e;
    else
      return this._private.userPanningEnabled;
    return this;
  },
  zoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.zoomingEnabled = !!e;
    else
      return this._private.zoomingEnabled;
    return this;
  },
  userZoomingEnabled: function(e) {
    if (e !== void 0)
      this._private.userZoomingEnabled = !!e;
    else
      return this._private.userZoomingEnabled;
    return this;
  },
  boxSelectionEnabled: function(e) {
    if (e !== void 0)
      this._private.boxSelectionEnabled = !!e;
    else
      return this._private.boxSelectionEnabled;
    return this;
  },
  pan: function() {
    var e = arguments, t = this._private.pan, a, n, i, s, o;
    switch (e.length) {
      case 0:
        return t;
      case 1:
        if (ge(e[0]))
          return a = e[0], t[a];
        if (Me(e[0])) {
          if (!this._private.panningEnabled)
            return this;
          i = e[0], s = i.x, o = i.y, ne(s) && (t.x = s), ne(o) && (t.y = o), this.emit("pan viewport");
        }
        break;
      case 2:
        if (!this._private.panningEnabled)
          return this;
        a = e[0], n = e[1], (a === "x" || a === "y") && ne(n) && (t[a] = n), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  panBy: function(e, t) {
    var a = arguments, n = this._private.pan, i, s, o, u, l;
    if (!this._private.panningEnabled)
      return this;
    switch (a.length) {
      case 1:
        Me(e) && (o = a[0], u = o.x, l = o.y, ne(u) && (n.x += u), ne(l) && (n.y += l), this.emit("pan viewport"));
        break;
      case 2:
        i = e, s = t, (i === "x" || i === "y") && ne(s) && (n[i] += s), this.emit("pan viewport");
        break;
    }
    return this.notify("viewport"), this;
  },
  gc: function() {
    this.notify("gc");
  },
  fit: function(e, t) {
    var a = this.getFitViewport(e, t);
    if (a) {
      var n = this._private;
      n.zoom = a.zoom, n.pan = a.pan, this.emit("pan zoom viewport"), this.notify("viewport");
    }
    return this;
  },
  getFitViewport: function(e, t) {
    if (ne(e) && t === void 0 && (t = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
      var a;
      if (ge(e)) {
        var n = e;
        e = this.$(n);
      } else if (zd(e)) {
        var i = e;
        a = {
          x1: i.x1,
          y1: i.y1,
          x2: i.x2,
          y2: i.y2
        }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
      } else
        Pt(e) || (e = this.mutableElements());
      if (!(Pt(e) && e.empty())) {
        a = a || e.boundingBox();
        var s = this.width(), o = this.height(), u;
        if (t = ne(t) ? t : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
          u = Math.min((s - 2 * t) / a.w, (o - 2 * t) / a.h), u = u > this._private.maxZoom ? this._private.maxZoom : u, u = u < this._private.minZoom ? this._private.minZoom : u;
          var l = {
            // now pan to middle
            x: (s - u * (a.x1 + a.x2)) / 2,
            y: (o - u * (a.y1 + a.y2)) / 2
          };
          return {
            zoom: u,
            pan: l
          };
        }
      }
    }
  },
  zoomRange: function(e, t) {
    var a = this._private;
    if (t == null) {
      var n = e;
      e = n.min, t = n.max;
    }
    return ne(e) && ne(t) && e <= t ? (a.minZoom = e, a.maxZoom = t) : ne(e) && t === void 0 && e <= a.maxZoom ? a.minZoom = e : ne(t) && e === void 0 && t >= a.minZoom && (a.maxZoom = t), this;
  },
  minZoom: function(e) {
    return e === void 0 ? this._private.minZoom : this.zoomRange({
      min: e
    });
  },
  maxZoom: function(e) {
    return e === void 0 ? this._private.maxZoom : this.zoomRange({
      max: e
    });
  },
  getZoomedViewport: function(e) {
    var t = this._private, a = t.pan, n = t.zoom, i, s, o = !1;
    if (t.zoomingEnabled || (o = !0), ne(e) ? s = e : Me(e) && (s = e.level, e.position != null ? i = li(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !t.panningEnabled && (o = !0)), s = s > t.maxZoom ? t.maxZoom : s, s = s < t.minZoom ? t.minZoom : s, o || !ne(s) || s === n || i != null && (!ne(i.x) || !ne(i.y)))
      return null;
    if (i != null) {
      var u = a, l = n, c = s, v = {
        x: -c / l * (i.x - u.x) + i.x,
        y: -c / l * (i.y - u.y) + i.y
      };
      return {
        zoomed: !0,
        panned: !0,
        zoom: c,
        pan: v
      };
    } else
      return {
        zoomed: !0,
        panned: !1,
        zoom: s,
        pan: a
      };
  },
  zoom: function(e) {
    if (e === void 0)
      return this._private.zoom;
    var t = this.getZoomedViewport(e), a = this._private;
    return t == null || !t.zoomed ? this : (a.zoom = t.zoom, t.panned && (a.pan.x = t.pan.x, a.pan.y = t.pan.y), this.emit("zoom" + (t.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this);
  },
  viewport: function(e) {
    var t = this._private, a = !0, n = !0, i = [], s = !1, o = !1;
    if (!e)
      return this;
    if (ne(e.zoom) || (a = !1), Me(e.pan) || (n = !1), !a && !n)
      return this;
    if (a) {
      var u = e.zoom;
      u < t.minZoom || u > t.maxZoom || !t.zoomingEnabled ? s = !0 : (t.zoom = u, i.push("zoom"));
    }
    if (n && (!s || !e.cancelOnFailedZoom) && t.panningEnabled) {
      var l = e.pan;
      ne(l.x) && (t.pan.x = l.x, o = !1), ne(l.y) && (t.pan.y = l.y, o = !1), o || i.push("pan");
    }
    return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
  },
  center: function(e) {
    var t = this.getCenterPan(e);
    return t && (this._private.pan = t, this.emit("pan viewport"), this.notify("viewport")), this;
  },
  getCenterPan: function(e, t) {
    if (this._private.panningEnabled) {
      if (ge(e)) {
        var a = e;
        e = this.mutableElements().filter(a);
      } else
        Pt(e) || (e = this.mutableElements());
      if (e.length !== 0) {
        var n = e.boundingBox(), i = this.width(), s = this.height();
        t = t === void 0 ? this._private.zoom : t;
        var o = {
          // middle
          x: (i - t * (n.x1 + n.x2)) / 2,
          y: (s - t * (n.y1 + n.y2)) / 2
        };
        return o;
      }
    }
  },
  reset: function() {
    return !this._private.panningEnabled || !this._private.zoomingEnabled ? this : (this.viewport({
      pan: {
        x: 0,
        y: 0
      },
      zoom: 1
    }), this);
  },
  invalidateSize: function() {
    this._private.sizeCache = null;
  },
  size: function() {
    var e = this._private, t = e.container, a = this;
    return e.sizeCache = e.sizeCache || (t ? function() {
      var n = a.window().getComputedStyle(t), i = function(o) {
        return parseFloat(n.getPropertyValue(o));
      };
      return {
        width: t.clientWidth - i("padding-left") - i("padding-right"),
        height: t.clientHeight - i("padding-top") - i("padding-bottom")
      };
    }() : {
      // fallback if no container (not 0 b/c can be used for dividing etc)
      width: 1,
      height: 1
    });
  },
  width: function() {
    return this.size().width;
  },
  height: function() {
    return this.size().height;
  },
  extent: function() {
    var e = this._private.pan, t = this._private.zoom, a = this.renderedExtent(), n = {
      x1: (a.x1 - e.x) / t,
      x2: (a.x2 - e.x) / t,
      y1: (a.y1 - e.y) / t,
      y2: (a.y2 - e.y) / t
    };
    return n.w = n.x2 - n.x1, n.h = n.y2 - n.y1, n;
  },
  renderedExtent: function() {
    var e = this.width(), t = this.height();
    return {
      x1: 0,
      y1: 0,
      x2: e,
      y2: t,
      w: e,
      h: t
    };
  },
  multiClickDebounceTime: function(e) {
    if (e)
      this._private.multiClickDebounceTime = e;
    else
      return this._private.multiClickDebounceTime;
    return this;
  }
};
Vr.centre = Vr.center;
Vr.autolockNodes = Vr.autolock;
Vr.autoungrabifyNodes = Vr.autoungrabify;
var Ya = {
  data: Fe.data({
    field: "data",
    bindingEvent: "data",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "data",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeData: Fe.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  scratch: Fe.data({
    field: "scratch",
    bindingEvent: "scratch",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "scratch",
    settingTriggersEvent: !0,
    triggerFnName: "trigger",
    allowGetting: !0,
    updateStyle: !0
  }),
  removeScratch: Fe.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  })
};
Ya.attr = Ya.data;
Ya.removeAttr = Ya.removeData;
var Za = function(e) {
  var t = this;
  e = be({}, e);
  var a = e.container;
  a && !Gn(a) && Gn(a[0]) && (a = a[0]);
  var n = a ? a._cyreg : null;
  n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
  var i = n.readies = n.readies || [];
  a && (a._cyreg = n), n.cy = t;
  var s = rt !== void 0 && a !== void 0 && !e.headless, o = e;
  o.layout = be({
    name: s ? "grid" : "null"
  }, o.layout), o.renderer = be({
    name: s ? "canvas" : "null"
  }, o.renderer);
  var u = function(d, y, g) {
    return y !== void 0 ? y : g !== void 0 ? g : d;
  }, l = this._private = {
    container: a,
    // html dom ele container
    ready: !1,
    // whether ready has been triggered
    options: o,
    // cached options
    elements: new dt(this),
    // elements in the graph
    listeners: [],
    // list of listeners
    aniEles: new dt(this),
    // elements being animated
    data: o.data || {},
    // data for the core
    scratch: {},
    // scratch object for core
    layout: null,
    renderer: null,
    destroyed: !1,
    // whether destroy was called
    notificationsEnabled: !0,
    // whether notifications are sent to the renderer
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: u(!0, o.zoomingEnabled),
    userZoomingEnabled: u(!0, o.userZoomingEnabled),
    panningEnabled: u(!0, o.panningEnabled),
    userPanningEnabled: u(!0, o.userPanningEnabled),
    boxSelectionEnabled: u(!0, o.boxSelectionEnabled),
    autolock: u(!1, o.autolock, o.autolockNodes),
    autoungrabify: u(!1, o.autoungrabify, o.autoungrabifyNodes),
    autounselectify: u(!1, o.autounselectify),
    styleEnabled: o.styleEnabled === void 0 ? s : o.styleEnabled,
    zoom: ne(o.zoom) ? o.zoom : 1,
    pan: {
      x: Me(o.pan) && ne(o.pan.x) ? o.pan.x : 0,
      y: Me(o.pan) && ne(o.pan.y) ? o.pan.y : 0
    },
    animation: {
      // object for currently-running animations
      current: [],
      queue: []
    },
    hasCompoundNodes: !1,
    multiClickDebounceTime: u(250, o.multiClickDebounceTime)
  };
  this.createEmitter(), this.selectionType(o.selectionType), this.zoomRange({
    min: o.minZoom,
    max: o.maxZoom
  });
  var c = function(d, y) {
    var g = d.some(Fd);
    if (g)
      return ha.all(d).then(y);
    y(d);
  };
  l.styleEnabled && t.setStyle([]);
  var v = be({}, o, o.renderer);
  t.initRenderer(v);
  var f = function(d, y, g) {
    t.notifications(!1);
    var p = t.mutableElements();
    p.length > 0 && p.remove(), d != null && (Me(d) || _e(d)) && t.add(d), t.one("layoutready", function(b) {
      t.notifications(!0), t.emit(b), t.one("load", y), t.emitAndNotify("load");
    }).one("layoutstop", function() {
      t.one("done", g), t.emit("done");
    });
    var m = be({}, t._private.options.layout);
    m.eles = t.elements(), t.layout(m).run();
  };
  c([o.style, o.elements], function(h) {
    var d = h[0], y = h[1];
    l.styleEnabled && t.style().append(d), f(y, function() {
      t.startAnimationLoop(), l.ready = !0, Ke(o.ready) && t.on("ready", o.ready);
      for (var g = 0; g < i.length; g++) {
        var p = i[g];
        t.on("ready", p);
      }
      n && (n.readies = []), t.emit("ready");
    }, o.done);
  });
}, Jn = Za.prototype;
be(Jn, {
  instanceString: function() {
    return "core";
  },
  isReady: function() {
    return this._private.ready;
  },
  destroyed: function() {
    return this._private.destroyed;
  },
  ready: function(e) {
    return this.isReady() ? this.emitter().emit("ready", [], e) : this.on("ready", e), this;
  },
  destroy: function() {
    var e = this;
    if (!e.destroyed())
      return e.stopAnimationLoop(), e.destroyRenderer(), this.emit("destroy"), e._private.destroyed = !0, e;
  },
  hasElementWithId: function(e) {
    return this._private.elements.hasElementWithId(e);
  },
  getElementById: function(e) {
    return this._private.elements.getElementById(e);
  },
  hasCompoundNodes: function() {
    return this._private.hasCompoundNodes;
  },
  headless: function() {
    return this._private.renderer.isHeadless();
  },
  styleEnabled: function() {
    return this._private.styleEnabled;
  },
  addToPool: function(e) {
    return this._private.elements.merge(e), this;
  },
  removeFromPool: function(e) {
    return this._private.elements.unmerge(e), this;
  },
  container: function() {
    return this._private.container || null;
  },
  window: function() {
    var e = this._private.container;
    if (e == null)
      return rt;
    var t = this._private.container.ownerDocument;
    return t === void 0 || t == null ? rt : t.defaultView || rt;
  },
  mount: function(e) {
    if (e != null) {
      var t = this, a = t._private, n = a.options;
      return !Gn(e) && Gn(e[0]) && (e = e[0]), t.stopAnimationLoop(), t.destroyRenderer(), a.container = e, a.styleEnabled = !0, t.invalidateSize(), t.initRenderer(be({}, n, n.renderer, {
        // allow custom renderer name to be re-used, otherwise use canvas
        name: n.renderer.name === "null" ? "canvas" : n.renderer.name
      })), t.startAnimationLoop(), t.style(n.style), t.emit("mount"), t;
    }
  },
  unmount: function() {
    var e = this;
    return e.stopAnimationLoop(), e.destroyRenderer(), e.initRenderer({
      name: "null"
    }), e.emit("unmount"), e;
  },
  options: function() {
    return Ut(this._private.options);
  },
  json: function(e) {
    var t = this, a = t._private, n = t.mutableElements(), i = function(w) {
      return t.getElementById(w.id());
    };
    if (Me(e)) {
      if (t.startBatch(), e.elements) {
        var s = {}, o = function(w, E) {
          for (var C = [], x = [], T = 0; T < w.length; T++) {
            var A = w[T];
            if (!A.data.id) {
              Ve("cy.json() cannot handle elements without an ID attribute");
              continue;
            }
            var k = "" + A.data.id, D = t.getElementById(k);
            s[k] = !0, D.length !== 0 ? x.push({
              ele: D,
              json: A
            }) : (E && (A.group = E), C.push(A));
          }
          t.add(C);
          for (var B = 0; B < x.length; B++) {
            var P = x[B], L = P.ele, M = P.json;
            L.json(M);
          }
        };
        if (_e(e.elements))
          o(e.elements);
        else
          for (var u = ["nodes", "edges"], l = 0; l < u.length; l++) {
            var c = u[l], v = e.elements[c];
            _e(v) && o(v, c);
          }
        var f = t.collection();
        n.filter(function(b) {
          return !s[b.id()];
        }).forEach(function(b) {
          b.isParent() ? f.merge(b) : b.remove();
        }), f.forEach(function(b) {
          return b.children().move({
            parent: null
          });
        }), f.forEach(function(b) {
          return i(b).remove();
        });
      }
      e.style && t.style(e.style), e.zoom != null && e.zoom !== a.zoom && t.zoom(e.zoom), e.pan && (e.pan.x !== a.pan.x || e.pan.y !== a.pan.y) && t.pan(e.pan), e.data && t.data(e.data);
      for (var h = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"], d = 0; d < h.length; d++) {
        var y = h[d];
        e[y] != null && t[y](e[y]);
      }
      return t.endBatch(), this;
    } else {
      var g = !!e, p = {};
      g ? p.elements = this.elements().map(function(b) {
        return b.json();
      }) : (p.elements = {}, n.forEach(function(b) {
        var w = b.group();
        p.elements[w] || (p.elements[w] = []), p.elements[w].push(b.json());
      })), this._private.styleEnabled && (p.style = t.style().json()), p.data = Ut(t.data());
      var m = a.options;
      return p.zoomingEnabled = a.zoomingEnabled, p.userZoomingEnabled = a.userZoomingEnabled, p.zoom = a.zoom, p.minZoom = a.minZoom, p.maxZoom = a.maxZoom, p.panningEnabled = a.panningEnabled, p.userPanningEnabled = a.userPanningEnabled, p.pan = Ut(a.pan), p.boxSelectionEnabled = a.boxSelectionEnabled, p.renderer = Ut(m.renderer), p.hideEdgesOnViewport = m.hideEdgesOnViewport, p.textureOnViewport = m.textureOnViewport, p.wheelSensitivity = m.wheelSensitivity, p.motionBlur = m.motionBlur, p.multiClickDebounceTime = m.multiClickDebounceTime, p;
    }
  }
});
Jn.$id = Jn.getElementById;
[Fy, Hy, af, yo, zn, Gy, mo, Fn, Xy, Vr, Ya].forEach(function(r) {
  be(Jn, r);
});
var Zy = {
  fit: !0,
  // whether to fit the viewport to the graph
  directed: !1,
  // whether the tree is directed downwards (or edges can point in any direction if false)
  direction: "downward",
  // determines the direction in which the tree structure is drawn.  The possible values are 'downward', 'upward', 'rightward', or 'leftward'.
  padding: 30,
  // padding on fit
  circle: !1,
  // put depths in concentric circles if true, put depths top down if false
  grid: !1,
  // whether to create an even grid into which the DAG is placed (circle:false only)
  spacingFactor: 1.75,
  // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: void 0,
  // the roots of the trees
  depthSort: void 0,
  // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled,
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
}, Qy = {
  maximal: !1,
  // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only); setting acyclic to true sets maximal to true also
  acyclic: !1
  // whether the tree is acyclic and thus a node could be shifted (due to the maximal option) multiple times without causing an infinite loop; setting to true sets maximal to true also; if you are uncertain whether a tree is acyclic, set to false to avoid potential infinite loops
}, Xr = function(e) {
  return e.scratch("breadthfirst");
}, yc = function(e, t) {
  return e.scratch("breadthfirst", t);
};
function nf(r) {
  this.options = be({}, Zy, Qy, r);
}
nf.prototype.run = function() {
  var r = this.options, e = r.cy, t = r.eles, a = t.nodes().filter(function(ye) {
    return ye.isChildless();
  }), n = t, i = r.directed, s = r.acyclic || r.maximal || r.maximalAdjustments > 0, o = !!r.boundingBox, u = Ct(o ? r.boundingBox : structuredClone(e.extent())), l;
  if (Pt(r.roots))
    l = r.roots;
  else if (_e(r.roots)) {
    for (var c = [], v = 0; v < r.roots.length; v++) {
      var f = r.roots[v], h = e.getElementById(f);
      c.push(h);
    }
    l = e.collection(c);
  } else if (ge(r.roots))
    l = e.$(r.roots);
  else if (i)
    l = a.roots();
  else {
    var d = t.components();
    l = e.collection();
    for (var y = function() {
      var ie = d[g], de = ie.maxDegree(!1), he = ie.filter(function(Ee) {
        return Ee.degree(!1) === de;
      });
      l = l.add(he);
    }, g = 0; g < d.length; g++)
      y();
  }
  var p = [], m = {}, b = function(ie, de) {
    p[de] == null && (p[de] = []);
    var he = p[de].length;
    p[de].push(ie), yc(ie, {
      index: he,
      depth: de
    });
  }, w = function(ie, de) {
    var he = Xr(ie), Ee = he.depth, pe = he.index;
    p[Ee][pe] = null, ie.isChildless() && b(ie, de);
  };
  n.bfs({
    roots: l,
    directed: r.directed,
    visit: function(ie, de, he, Ee, pe) {
      var Ae = ie[0], Le = Ae.id();
      Ae.isChildless() && b(Ae, pe), m[Le] = !0;
    }
  });
  for (var E = [], C = 0; C < a.length; C++) {
    var x = a[C];
    m[x.id()] || E.push(x);
  }
  var T = function(ie) {
    for (var de = p[ie], he = 0; he < de.length; he++) {
      var Ee = de[he];
      if (Ee == null) {
        de.splice(he, 1), he--;
        continue;
      }
      yc(Ee, {
        depth: ie,
        index: he
      });
    }
  }, A = function(ie, de) {
    for (var he = Xr(ie), Ee = ie.incomers().filter(function(xe) {
      return xe.isNode() && t.has(xe);
    }), pe = -1, Ae = ie.id(), Le = 0; Le < Ee.length; Le++) {
      var Oe = Ee[Le], Ne = Xr(Oe);
      pe = Math.max(pe, Ne.depth);
    }
    if (he.depth <= pe) {
      if (!r.acyclic && de[Ae])
        return null;
      var ze = pe + 1;
      return w(ie, ze), de[Ae] = ze, !0;
    }
    return !1;
  };
  if (i && s) {
    var k = [], D = {}, B = function(ie) {
      return k.push(ie);
    }, P = function() {
      return k.shift();
    };
    for (a.forEach(function(ye) {
      return k.push(ye);
    }); k.length > 0; ) {
      var L = P(), M = A(L, D);
      if (M)
        L.outgoers().filter(function(ye) {
          return ye.isNode() && t.has(ye);
        }).forEach(B);
      else if (M === null) {
        Ve("Detected double maximal shift for node `" + L.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  var I = 0;
  if (r.avoidOverlap)
    for (var R = 0; R < a.length; R++) {
      var O = a[R], $ = O.layoutDimensions(r), H = $.w, z = $.h;
      I = Math.max(I, H, z);
    }
  var F = {}, U = function(ie) {
    if (F[ie.id()])
      return F[ie.id()];
    for (var de = Xr(ie).depth, he = ie.neighborhood(), Ee = 0, pe = 0, Ae = 0; Ae < he.length; Ae++) {
      var Le = he[Ae];
      if (!(Le.isEdge() || Le.isParent() || !a.has(Le))) {
        var Oe = Xr(Le);
        if (Oe != null) {
          var Ne = Oe.index, ze = Oe.depth;
          if (!(Ne == null || ze == null)) {
            var xe = p[ze].length;
            ze < de && (Ee += Ne / xe, pe++);
          }
        }
      }
    }
    return pe = Math.max(1, pe), Ee = Ee / pe, pe === 0 && (Ee = 0), F[ie.id()] = Ee, Ee;
  }, Y = function(ie, de) {
    var he = U(ie), Ee = U(de), pe = he - Ee;
    return pe === 0 ? iv(ie.id(), de.id()) : pe;
  };
  r.depthSort !== void 0 && (Y = r.depthSort);
  for (var G = p.length, Q = 0; Q < G; Q++)
    p[Q].sort(Y), T(Q);
  for (var J = [], ae = 0; ae < E.length; ae++)
    J.push(E[ae]);
  var W = function() {
    for (var ie = 0; ie < G; ie++)
      T(ie);
  };
  J.length && (p.unshift(J), G = p.length, W());
  for (var N = 0, V = 0; V < G; V++)
    N = Math.max(p[V].length, N);
  var _ = {
    x: u.x1 + u.w / 2,
    y: u.y1 + u.h / 2
  }, K = a.reduce(function(ye, ie) {
    return function(de) {
      return {
        w: ye.w === -1 ? de.w : (ye.w + de.w) / 2,
        h: ye.h === -1 ? de.h : (ye.h + de.h) / 2
      };
    }(ie.boundingBox({
      includeLabels: r.nodeDimensionsIncludeLabels
    }));
  }, {
    w: -1,
    h: -1
  }), re = Math.max(
    // only one depth
    G === 1 ? 0 : (
      // inside a bounding box, no need for top & bottom padding
      o ? (u.h - r.padding * 2 - K.h) / (G - 1) : (u.h - r.padding * 2 - K.h) / (G + 1)
    ),
    I
  ), se = p.reduce(function(ye, ie) {
    return Math.max(ye, ie.length);
  }, 0), Te = function(ie) {
    var de = Xr(ie), he = de.depth, Ee = de.index;
    if (r.circle) {
      var pe = Math.min(u.w / 2 / G, u.h / 2 / G);
      pe = Math.max(pe, I);
      var Ae = pe * he + pe - (G > 0 && p[0].length <= 3 ? pe / 2 : 0), Le = 2 * Math.PI / p[he].length * Ee;
      return he === 0 && p[0].length === 1 && (Ae = 1), {
        x: _.x + Ae * Math.cos(Le),
        y: _.y + Ae * Math.sin(Le)
      };
    } else {
      var Oe = p[he].length, Ne = Math.max(
        // only one depth
        Oe === 1 ? 0 : (
          // inside a bounding box, no need for left & right padding
          o ? (u.w - r.padding * 2 - K.w) / ((r.grid ? se : Oe) - 1) : (u.w - r.padding * 2 - K.w) / ((r.grid ? se : Oe) + 1)
        ),
        I
      ), ze = {
        x: _.x + (Ee + 1 - (Oe + 1) / 2) * Ne,
        y: _.y + (he + 1 - (G + 1) / 2) * re
      };
      return ze;
    }
  }, Ce = {
    downward: 0,
    leftward: 90,
    upward: 180,
    rightward: -90
  };
  Object.keys(Ce).indexOf(r.direction) === -1 && We("Invalid direction '".concat(r.direction, "' specified for breadthfirst layout. Valid values are: ").concat(Object.keys(Ce).join(", ")));
  var we = function(ie) {
    return dh(Te(ie), u, Ce[r.direction]);
  };
  return t.nodes().layoutPositions(this, r, we), this;
};
var Jy = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox and radius if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  radius: void 0,
  // the radius of the circle
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: !0,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function sf(r) {
  this.options = be({}, Jy, r);
}
sf.prototype.run = function() {
  var r = this.options, e = r, t = r.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = a.nodes().not(":parent");
  e.sort && (i = i.sort(e.sort));
  for (var s = Ct(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: t.width(),
    h: t.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, u = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, l = u / Math.max(1, i.length - 1), c, v = 0, f = 0; f < i.length; f++) {
    var h = i[f], d = h.layoutDimensions(e), y = d.w, g = d.h;
    v = Math.max(v, y, g);
  }
  if (ne(e.radius) ? c = e.radius : i.length <= 1 ? c = 0 : c = Math.min(s.h, s.w) / 2 - v, i.length > 1 && e.avoidOverlap) {
    v *= 1.75;
    var p = Math.cos(l) - Math.cos(0), m = Math.sin(l) - Math.sin(0), b = Math.sqrt(v * v / (p * p + m * m));
    c = Math.max(b, c);
  }
  var w = function(C, x) {
    var T = e.startAngle + x * l * (n ? 1 : -1), A = c * Math.cos(T), k = c * Math.sin(T), D = {
      x: o.x + A,
      y: o.y + k
    };
    return D;
  };
  return a.nodes().layoutPositions(this, e, w), this;
};
var jy = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // the padding on fit
  startAngle: 3 / 2 * Math.PI,
  // where nodes start in radians
  sweep: void 0,
  // how many radians should be between the first and last node (defaults to full circle)
  clockwise: !0,
  // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  equidistant: !1,
  // whether levels have an equal radial distance betwen them, may cause bounding box overflow
  minNodeSpacing: 10,
  // min spacing between outside of nodes (used for radius adjustment)
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  height: void 0,
  // height of layout area (overrides container height)
  width: void 0,
  // width of layout area (overrides container width)
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  concentric: function(e) {
    return e.degree();
  },
  levelWidth: function(e) {
    return e.maxDegree() / 4;
  },
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function of(r) {
  this.options = be({}, jy, r);
}
of.prototype.run = function() {
  for (var r = this.options, e = r, t = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = r.cy, n = e.eles, i = n.nodes().not(":parent"), s = Ct(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: a.width(),
    h: a.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, u = [], l = 0, c = 0; c < i.length; c++) {
    var v = i[c], f = void 0;
    f = e.concentric(v), u.push({
      value: f,
      node: v
    }), v._private.scratch.concentric = f;
  }
  i.updateStyle();
  for (var h = 0; h < i.length; h++) {
    var d = i[h], y = d.layoutDimensions(e);
    l = Math.max(l, y.w, y.h);
  }
  u.sort(function(re, se) {
    return se.value - re.value;
  });
  for (var g = e.levelWidth(i), p = [[]], m = p[0], b = 0; b < u.length; b++) {
    var w = u[b];
    if (m.length > 0) {
      var E = Math.abs(m[0].value - w.value);
      E >= g && (m = [], p.push(m));
    }
    m.push(w);
  }
  var C = l + e.minNodeSpacing;
  if (!e.avoidOverlap) {
    var x = p.length > 0 && p[0].length > 1, T = Math.min(s.w, s.h) / 2 - C, A = T / (p.length + x ? 1 : 0);
    C = Math.min(C, A);
  }
  for (var k = 0, D = 0; D < p.length; D++) {
    var B = p[D], P = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / B.length : e.sweep, L = B.dTheta = P / Math.max(1, B.length - 1);
    if (B.length > 1 && e.avoidOverlap) {
      var M = Math.cos(L) - Math.cos(0), I = Math.sin(L) - Math.sin(0), R = Math.sqrt(C * C / (M * M + I * I));
      k = Math.max(R, k);
    }
    B.r = k, k += C;
  }
  if (e.equidistant) {
    for (var O = 0, $ = 0, H = 0; H < p.length; H++) {
      var z = p[H], F = z.r - $;
      O = Math.max(O, F);
    }
    $ = 0;
    for (var U = 0; U < p.length; U++) {
      var Y = p[U];
      U === 0 && ($ = Y.r), Y.r = $, $ += O;
    }
  }
  for (var G = {}, Q = 0; Q < p.length; Q++)
    for (var J = p[Q], ae = J.dTheta, W = J.r, N = 0; N < J.length; N++) {
      var V = J[N], _ = e.startAngle + (t ? 1 : -1) * ae * N, K = {
        x: o.x + W * Math.cos(_),
        y: o.y + W * Math.sin(_)
      };
      G[V.node.id()] = K;
    }
  return n.nodes().layoutPositions(this, e, function(re) {
    var se = re.id();
    return G[se];
  }), this;
};
var Js, e0 = {
  // Called on `layoutready`
  ready: function() {
  },
  // Called on `layoutstop`
  stop: function() {
  },
  // Whether to animate while running the layout
  // true : Animate continuously as the layout is running
  // false : Just show the end result
  // 'end' : Animate with the end result, from the initial positions to the end positions
  animate: !0,
  // Easing of the animation for animate:'end'
  animationEasing: void 0,
  // The duration of the animation for animate:'end'
  animationDuration: void 0,
  // A function that determines whether the node should be animated
  // All nodes animated by default on animate enabled
  // Non-animated nodes are positioned immediately when the layout starts
  animateFilter: function(e, t) {
    return !0;
  },
  // The layout animates only after this many milliseconds for animate:true
  // (prevents flashing on fast runs)
  animationThreshold: 250,
  // Number of iterations between consecutive screen positions update
  refresh: 20,
  // Whether to fit the network view after when done
  fit: !0,
  // Padding on fit
  padding: 30,
  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: void 0,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  nodeDimensionsIncludeLabels: !1,
  // Randomize the initial positions of the nodes (true) or use existing positions (false)
  randomize: !1,
  // Extra spacing between components in non-compound graphs
  componentSpacing: 40,
  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: function(e) {
    return 2048;
  },
  // Node repulsion (overlapping) multiplier
  nodeOverlap: 4,
  // Ideal edge (non nested) length
  idealEdgeLength: function(e) {
    return 32;
  },
  // Divisor to compute edge forces
  edgeElasticity: function(e) {
    return 32;
  },
  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 1.2,
  // Gravity force (constant)
  gravity: 1,
  // Maximum number of iterations to perform
  numIter: 1e3,
  // Initial temperature (maximum node displacement)
  initialTemp: 1e3,
  // Cooling factor (how the temperature is reduced between consecutive iterations
  coolingFactor: 0.99,
  // Lower temperature threshold (below this point the layout will end)
  minTemp: 1
};
function xi(r) {
  this.options = be({}, e0, r), this.options.layout = this;
  var e = this.options.eles.nodes(), t = this.options.eles.edges(), a = t.filter(function(n) {
    var i = n.source().data("id"), s = n.target().data("id"), o = e.some(function(l) {
      return l.data("id") === i;
    }), u = e.some(function(l) {
      return l.data("id") === s;
    });
    return !o || !u;
  });
  this.options.eles = this.options.eles.not(a);
}
xi.prototype.run = function() {
  var r = this.options, e = r.cy, t = this;
  t.stopped = !1, (r.animate === !0 || r.animate === !1) && t.emit({
    type: "layoutstart",
    layout: t
  }), r.debug === !0 ? Js = !0 : Js = !1;
  var a = t0(e, t, r);
  Js && a0(a), r.randomize && n0(a);
  var n = jt(), i = function() {
    i0(a, e, r), r.fit === !0 && e.fit(r.padding);
  }, s = function(f) {
    return !(t.stopped || f >= r.numIter || (s0(a, r), a.temperature = a.temperature * r.coolingFactor, a.temperature < r.minTemp));
  }, o = function() {
    if (r.animate === !0 || r.animate === !1)
      i(), t.one("layoutstop", r.stop), t.emit({
        type: "layoutstop",
        layout: t
      });
    else {
      var f = r.eles.nodes(), h = lf(a, r, f);
      f.layoutPositions(t, r, h);
    }
  }, u = 0, l = !0;
  if (r.animate === !0) {
    var c = function() {
      for (var f = 0; l && f < r.refresh; )
        l = s(u), u++, f++;
      if (!l)
        bc(a, r), o();
      else {
        var h = jt();
        h - n >= r.animationThreshold && i(), Wn(c);
      }
    };
    c();
  } else {
    for (; l; )
      l = s(u), u++;
    bc(a, r), o();
  }
  return this;
};
xi.prototype.stop = function() {
  return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
xi.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var t0 = function(e, t, a) {
  for (var n = a.eles.edges(), i = a.eles.nodes(), s = Ct(a.boundingBox ? a.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), o = {
    isCompound: e.hasCompoundNodes(),
    layoutNodes: [],
    idToIndex: {},
    nodeSize: i.size(),
    graphSet: [],
    indexToGraph: [],
    layoutEdges: [],
    edgeSize: n.size(),
    temperature: a.initialTemp,
    clientWidth: s.w,
    clientHeight: s.h,
    boundingBox: s
  }, u = a.eles.components(), l = {}, c = 0; c < u.length; c++)
    for (var v = u[c], f = 0; f < v.length; f++) {
      var h = v[f];
      l[h.id()] = c;
    }
  for (var c = 0; c < o.nodeSize; c++) {
    var d = i[c], y = d.layoutDimensions(a), g = {};
    g.isLocked = d.locked(), g.id = d.data("id"), g.parentId = d.data("parent"), g.cmptId = l[d.id()], g.children = [], g.positionX = d.position("x"), g.positionY = d.position("y"), g.offsetX = 0, g.offsetY = 0, g.height = y.w, g.width = y.h, g.maxX = g.positionX + g.width / 2, g.minX = g.positionX - g.width / 2, g.maxY = g.positionY + g.height / 2, g.minY = g.positionY - g.height / 2, g.padLeft = parseFloat(d.style("padding")), g.padRight = parseFloat(d.style("padding")), g.padTop = parseFloat(d.style("padding")), g.padBottom = parseFloat(d.style("padding")), g.nodeRepulsion = Ke(a.nodeRepulsion) ? a.nodeRepulsion(d) : a.nodeRepulsion, o.layoutNodes.push(g), o.idToIndex[g.id] = c;
  }
  for (var p = [], m = 0, b = -1, w = [], c = 0; c < o.nodeSize; c++) {
    var d = o.layoutNodes[c], E = d.parentId;
    E != null ? o.layoutNodes[o.idToIndex[E]].children.push(d.id) : (p[++b] = d.id, w.push(d.id));
  }
  for (o.graphSet.push(w); m <= b; ) {
    var C = p[m++], x = o.idToIndex[C], h = o.layoutNodes[x], T = h.children;
    if (T.length > 0) {
      o.graphSet.push(T);
      for (var c = 0; c < T.length; c++)
        p[++b] = T[c];
    }
  }
  for (var c = 0; c < o.graphSet.length; c++)
    for (var A = o.graphSet[c], f = 0; f < A.length; f++) {
      var k = o.idToIndex[A[f]];
      o.indexToGraph[k] = c;
    }
  for (var c = 0; c < o.edgeSize; c++) {
    var D = n[c], B = {};
    B.id = D.data("id"), B.sourceId = D.data("source"), B.targetId = D.data("target");
    var P = Ke(a.idealEdgeLength) ? a.idealEdgeLength(D) : a.idealEdgeLength, L = Ke(a.edgeElasticity) ? a.edgeElasticity(D) : a.edgeElasticity, M = o.idToIndex[B.sourceId], I = o.idToIndex[B.targetId], R = o.indexToGraph[M], O = o.indexToGraph[I];
    if (R != O) {
      for (var $ = r0(B.sourceId, B.targetId, o), H = o.graphSet[$], z = 0, g = o.layoutNodes[M]; H.indexOf(g.id) === -1; )
        g = o.layoutNodes[o.idToIndex[g.parentId]], z++;
      for (g = o.layoutNodes[I]; H.indexOf(g.id) === -1; )
        g = o.layoutNodes[o.idToIndex[g.parentId]], z++;
      P *= z * a.nestingFactor;
    }
    B.idealLength = P, B.elasticity = L, o.layoutEdges.push(B);
  }
  return o;
}, r0 = function(e, t, a) {
  var n = uf(e, t, 0, a);
  return 2 > n.count ? 0 : n.graph;
}, uf = function(e, t, a, n) {
  var i = n.graphSet[a];
  if (-1 < i.indexOf(e) && -1 < i.indexOf(t))
    return {
      count: 2,
      graph: a
    };
  for (var s = 0, o = 0; o < i.length; o++) {
    var u = i[o], l = n.idToIndex[u], c = n.layoutNodes[l].children;
    if (c.length !== 0) {
      var v = n.indexToGraph[n.idToIndex[c[0]]], f = uf(e, t, v, n);
      if (f.count !== 0)
        if (f.count === 1) {
          if (s++, s === 2)
            break;
        } else
          return f;
    }
  }
  return {
    count: s,
    graph: a
  };
}, a0, n0 = function(e, t) {
  for (var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++) {
    var s = e.layoutNodes[i];
    s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * a, s.positionY = Math.random() * n);
  }
}, lf = function(e, t, a) {
  var n = e.boundingBox, i = {
    x1: 1 / 0,
    x2: -1 / 0,
    y1: 1 / 0,
    y2: -1 / 0
  };
  return t.boundingBox && (a.forEach(function(s) {
    var o = e.layoutNodes[e.idToIndex[s.data("id")]];
    i.x1 = Math.min(i.x1, o.positionX), i.x2 = Math.max(i.x2, o.positionX), i.y1 = Math.min(i.y1, o.positionY), i.y2 = Math.max(i.y2, o.positionY);
  }), i.w = i.x2 - i.x1, i.h = i.y2 - i.y1), function(s, o) {
    var u = e.layoutNodes[e.idToIndex[s.data("id")]];
    if (t.boundingBox) {
      var l = i.w === 0 ? 0.5 : (u.positionX - i.x1) / i.w, c = i.h === 0 ? 0.5 : (u.positionY - i.y1) / i.h;
      return {
        x: n.x1 + l * n.w,
        y: n.y1 + c * n.h
      };
    } else
      return {
        x: u.positionX,
        y: u.positionY
      };
  };
}, i0 = function(e, t, a) {
  var n = a.layout, i = a.eles.nodes(), s = lf(e, a, i);
  i.positions(s), e.ready !== !0 && (e.ready = !0, n.one("layoutready", a.ready), n.emit({
    type: "layoutready",
    layout: this
  }));
}, s0 = function(e, t, a) {
  o0(e, t), c0(e), v0(e, t), f0(e), d0(e);
}, o0 = function(e, t) {
  for (var a = 0; a < e.graphSet.length; a++)
    for (var n = e.graphSet[a], i = n.length, s = 0; s < i; s++)
      for (var o = e.layoutNodes[e.idToIndex[n[s]]], u = s + 1; u < i; u++) {
        var l = e.layoutNodes[e.idToIndex[n[u]]];
        u0(o, l, e, t);
      }
}, mc = function(e) {
  return -1 + 2 * e * Math.random();
}, u0 = function(e, t, a, n) {
  var i = e.cmptId, s = t.cmptId;
  if (!(i !== s && !a.isCompound)) {
    var o = t.positionX - e.positionX, u = t.positionY - e.positionY, l = 1;
    o === 0 && u === 0 && (o = mc(l), u = mc(l));
    var c = l0(e, t, o, u);
    if (c > 0)
      var v = n.nodeOverlap * c, f = Math.sqrt(o * o + u * u), h = v * o / f, d = v * u / f;
    else
      var y = jn(e, o, u), g = jn(t, -1 * o, -1 * u), p = g.x - y.x, m = g.y - y.y, b = p * p + m * m, f = Math.sqrt(b), v = (e.nodeRepulsion + t.nodeRepulsion) / b, h = v * p / f, d = v * m / f;
    e.isLocked || (e.offsetX -= h, e.offsetY -= d), t.isLocked || (t.offsetX += h, t.offsetY += d);
  }
}, l0 = function(e, t, a, n) {
  if (a > 0)
    var i = e.maxX - t.minX;
  else
    var i = t.maxX - e.minX;
  if (n > 0)
    var s = e.maxY - t.minY;
  else
    var s = t.maxY - e.minY;
  return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
}, jn = function(e, t, a) {
  var n = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, u = a / t, l = s / o, c = {};
  return t === 0 && 0 < a || t === 0 && 0 > a ? (c.x = n, c.y = i + s / 2, c) : 0 < t && -1 * l <= u && u <= l ? (c.x = n + o / 2, c.y = i + o * a / 2 / t, c) : 0 > t && -1 * l <= u && u <= l ? (c.x = n - o / 2, c.y = i - o * a / 2 / t, c) : 0 < a && (u <= -1 * l || u >= l) ? (c.x = n + s * t / 2 / a, c.y = i + s / 2, c) : (0 > a && (u <= -1 * l || u >= l) && (c.x = n - s * t / 2 / a, c.y = i - s / 2), c);
}, c0 = function(e, t) {
  for (var a = 0; a < e.edgeSize; a++) {
    var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], s = e.layoutNodes[i], o = e.idToIndex[n.targetId], u = e.layoutNodes[o], l = u.positionX - s.positionX, c = u.positionY - s.positionY;
    if (!(l === 0 && c === 0)) {
      var v = jn(s, l, c), f = jn(u, -1 * l, -1 * c), h = f.x - v.x, d = f.y - v.y, y = Math.sqrt(h * h + d * d), g = Math.pow(n.idealLength - y, 2) / n.elasticity;
      if (y !== 0)
        var p = g * h / y, m = g * d / y;
      else
        var p = 0, m = 0;
      s.isLocked || (s.offsetX += p, s.offsetY += m), u.isLocked || (u.offsetX -= p, u.offsetY -= m);
    }
  }
}, v0 = function(e, t) {
  if (t.gravity !== 0)
    for (var a = 1, n = 0; n < e.graphSet.length; n++) {
      var i = e.graphSet[n], s = i.length;
      if (n === 0)
        var o = e.clientHeight / 2, u = e.clientWidth / 2;
      else
        var l = e.layoutNodes[e.idToIndex[i[0]]], c = e.layoutNodes[e.idToIndex[l.parentId]], o = c.positionX, u = c.positionY;
      for (var v = 0; v < s; v++) {
        var f = e.layoutNodes[e.idToIndex[i[v]]];
        if (!f.isLocked) {
          var h = o - f.positionX, d = u - f.positionY, y = Math.sqrt(h * h + d * d);
          if (y > a) {
            var g = t.gravity * h / y, p = t.gravity * d / y;
            f.offsetX += g, f.offsetY += p;
          }
        }
      }
    }
}, f0 = function(e, t) {
  var a = [], n = 0, i = -1;
  for (a.push.apply(a, e.graphSet[0]), i += e.graphSet[0].length; n <= i; ) {
    var s = a[n++], o = e.idToIndex[s], u = e.layoutNodes[o], l = u.children;
    if (0 < l.length && !u.isLocked) {
      for (var c = u.offsetX, v = u.offsetY, f = 0; f < l.length; f++) {
        var h = e.layoutNodes[e.idToIndex[l[f]]];
        h.offsetX += c, h.offsetY += v, a[++i] = l[f];
      }
      u.offsetX = 0, u.offsetY = 0;
    }
  }
}, d0 = function(e, t) {
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    if (!(0 < n.children.length || n.isLocked)) {
      var i = h0(n.offsetX, n.offsetY, e.temperature);
      n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, cf(n, e);
    }
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
  }
}, h0 = function(e, t, a) {
  var n = Math.sqrt(e * e + t * t);
  if (n > a)
    var i = {
      x: a * e / n,
      y: a * t / n
    };
  else
    var i = {
      x: e,
      y: t
    };
  return i;
}, cf = function(e, t) {
  var a = e.parentId;
  if (a != null) {
    var n = t.layoutNodes[t.idToIndex[a]], i = !1;
    if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = !0), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = !0), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = !0), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = !0), i)
      return cf(n, t);
  }
}, bc = function(e, t) {
  for (var a = e.layoutNodes, n = [], i = 0; i < a.length; i++) {
    var s = a[i], o = s.cmptId, u = n[o] = n[o] || [];
    u.push(s);
  }
  for (var l = 0, i = 0; i < n.length; i++) {
    var c = n[i];
    if (c) {
      c.x1 = 1 / 0, c.x2 = -1 / 0, c.y1 = 1 / 0, c.y2 = -1 / 0;
      for (var v = 0; v < c.length; v++) {
        var f = c[v];
        c.x1 = Math.min(c.x1, f.positionX - f.width / 2), c.x2 = Math.max(c.x2, f.positionX + f.width / 2), c.y1 = Math.min(c.y1, f.positionY - f.height / 2), c.y2 = Math.max(c.y2, f.positionY + f.height / 2);
      }
      c.w = c.x2 - c.x1, c.h = c.y2 - c.y1, l += c.w * c.h;
    }
  }
  n.sort(function(m, b) {
    return b.w * b.h - m.w * m.h;
  });
  for (var h = 0, d = 0, y = 0, g = 0, p = Math.sqrt(l) * e.clientWidth / e.clientHeight, i = 0; i < n.length; i++) {
    var c = n[i];
    if (c) {
      for (var v = 0; v < c.length; v++) {
        var f = c[v];
        f.isLocked || (f.positionX += h - c.x1, f.positionY += d - c.y1);
      }
      h += c.w + t.componentSpacing, y += c.w + t.componentSpacing, g = Math.max(g, c.h), y > p && (d += g + t.componentSpacing, h = 0, y = 0, g = 0);
    }
  }
}, g0 = {
  fit: !0,
  // whether to fit the viewport to the graph
  padding: 30,
  // padding used on fit
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: !0,
  // prevents node overlap, may overflow boundingBox if not enough space
  avoidOverlapPadding: 10,
  // extra spacing around nodes when avoidOverlap: true
  nodeDimensionsIncludeLabels: !1,
  // Excludes the label when calculating node bounding boxes for the layout algorithm
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  condense: !1,
  // uses all available space on false, uses minimal space on true
  rows: void 0,
  // force num of rows in the grid
  cols: void 0,
  // force num of columns in the grid
  position: function(e) {
  },
  // returns { row, col } for element
  sort: void 0,
  // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function vf(r) {
  this.options = be({}, g0, r);
}
vf.prototype.run = function() {
  var r = this.options, e = r, t = r.cy, a = e.eles, n = a.nodes().not(":parent");
  e.sort && (n = n.sort(e.sort));
  var i = Ct(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: t.width(),
    h: t.height()
  });
  if (i.h === 0 || i.w === 0)
    a.nodes().layoutPositions(this, e, function(U) {
      return {
        x: i.x1,
        y: i.y1
      };
    });
  else {
    var s = n.size(), o = Math.sqrt(s * i.h / i.w), u = Math.round(o), l = Math.round(i.w / i.h * o), c = function(Y) {
      if (Y == null)
        return Math.min(u, l);
      var G = Math.min(u, l);
      G == u ? u = Y : l = Y;
    }, v = function(Y) {
      if (Y == null)
        return Math.max(u, l);
      var G = Math.max(u, l);
      G == u ? u = Y : l = Y;
    }, f = e.rows, h = e.cols != null ? e.cols : e.columns;
    if (f != null && h != null)
      u = f, l = h;
    else if (f != null && h == null)
      u = f, l = Math.ceil(s / u);
    else if (f == null && h != null)
      l = h, u = Math.ceil(s / l);
    else if (l * u > s) {
      var d = c(), y = v();
      (d - 1) * y >= s ? c(d - 1) : (y - 1) * d >= s && v(y - 1);
    } else
      for (; l * u < s; ) {
        var g = c(), p = v();
        (p + 1) * g >= s ? v(p + 1) : c(g + 1);
      }
    var m = i.w / l, b = i.h / u;
    if (e.condense && (m = 0, b = 0), e.avoidOverlap)
      for (var w = 0; w < n.length; w++) {
        var E = n[w], C = E._private.position;
        (C.x == null || C.y == null) && (C.x = 0, C.y = 0);
        var x = E.layoutDimensions(e), T = e.avoidOverlapPadding, A = x.w + T, k = x.h + T;
        m = Math.max(m, A), b = Math.max(b, k);
      }
    for (var D = {}, B = function(Y, G) {
      return !!D["c-" + Y + "-" + G];
    }, P = function(Y, G) {
      D["c-" + Y + "-" + G] = !0;
    }, L = 0, M = 0, I = function() {
      M++, M >= l && (M = 0, L++);
    }, R = {}, O = 0; O < n.length; O++) {
      var $ = n[O], H = e.position($);
      if (H && (H.row !== void 0 || H.col !== void 0)) {
        var z = {
          row: H.row,
          col: H.col
        };
        if (z.col === void 0)
          for (z.col = 0; B(z.row, z.col); )
            z.col++;
        else if (z.row === void 0)
          for (z.row = 0; B(z.row, z.col); )
            z.row++;
        R[$.id()] = z, P(z.row, z.col);
      }
    }
    var F = function(Y, G) {
      var Q, J;
      if (Y.locked() || Y.isParent())
        return !1;
      var ae = R[Y.id()];
      if (ae)
        Q = ae.col * m + m / 2 + i.x1, J = ae.row * b + b / 2 + i.y1;
      else {
        for (; B(L, M); )
          I();
        Q = M * m + m / 2 + i.x1, J = L * b + b / 2 + i.y1, P(L, M), I();
      }
      return {
        x: Q,
        y: J
      };
    };
    n.layoutPositions(this, e, F);
  }
  return this;
};
var p0 = {
  ready: function() {
  },
  // on layoutready
  stop: function() {
  }
  // on layoutstop
};
function Qo(r) {
  this.options = be({}, p0, r);
}
Qo.prototype.run = function() {
  var r = this.options, e = r.eles, t = this;
  return r.cy, t.emit("layoutstart"), e.nodes().positions(function() {
    return {
      x: 0,
      y: 0
    };
  }), t.one("layoutready", r.ready), t.emit("layoutready"), t.one("layoutstop", r.stop), t.emit("layoutstop"), this;
};
Qo.prototype.stop = function() {
  return this;
};
var y0 = {
  positions: void 0,
  // map of (node id) => (position obj); or function(node){ return somPos; }
  zoom: void 0,
  // the zoom level to set (prob want fit = false if set)
  pan: void 0,
  // the pan level to set (prob want fit = false if set)
  fit: !0,
  // whether to fit to viewport
  padding: 30,
  // padding on fit
  spacingFactor: void 0,
  // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts
};
function ff(r) {
  this.options = be({}, y0, r);
}
ff.prototype.run = function() {
  var r = this.options, e = r.eles, t = e.nodes(), a = Ke(r.positions);
  function n(i) {
    if (r.positions == null)
      return Vh(i.position());
    if (a)
      return r.positions(i);
    var s = r.positions[i._private.data.id];
    return s ?? null;
  }
  return t.layoutPositions(this, r, function(i, s) {
    var o = n(i);
    return i.locked() || o == null ? !1 : o;
  }), this;
};
var m0 = {
  fit: !0,
  // whether to fit to viewport
  padding: 30,
  // fit padding
  boundingBox: void 0,
  // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  animate: !1,
  // whether to transition the node positions
  animationDuration: 500,
  // duration of animation in ms if enabled
  animationEasing: void 0,
  // easing of animation if enabled
  animateFilter: function(e, t) {
    return !0;
  },
  // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: void 0,
  // callback on layoutready
  stop: void 0,
  // callback on layoutstop
  transform: function(e, t) {
    return t;
  }
  // transform a given node position. Useful for changing flow direction in discrete layouts 
};
function df(r) {
  this.options = be({}, m0, r);
}
df.prototype.run = function() {
  var r = this.options, e = r.cy, t = r.eles, a = Ct(r.boundingBox ? r.boundingBox : {
    x1: 0,
    y1: 0,
    w: e.width(),
    h: e.height()
  }), n = function(s, o) {
    return {
      x: a.x1 + Math.round(Math.random() * a.w),
      y: a.y1 + Math.round(Math.random() * a.h)
    };
  };
  return t.nodes().layoutPositions(this, r, n), this;
};
var b0 = [{
  name: "breadthfirst",
  impl: nf
}, {
  name: "circle",
  impl: sf
}, {
  name: "concentric",
  impl: of
}, {
  name: "cose",
  impl: xi
}, {
  name: "grid",
  impl: vf
}, {
  name: "null",
  impl: Qo
}, {
  name: "preset",
  impl: ff
}, {
  name: "random",
  impl: df
}];
function hf(r) {
  this.options = r, this.notifications = 0;
}
var wc = function() {
}, xc = function() {
  throw new Error("A headless instance can not render images");
};
hf.prototype = {
  recalculateRenderedStyle: wc,
  notify: function() {
    this.notifications++;
  },
  init: wc,
  isHeadless: function() {
    return !0;
  },
  png: xc,
  jpg: xc
};
var Jo = {};
Jo.arrowShapeWidth = 0.3;
Jo.registerArrowShapes = function() {
  var r = this.arrowShapes = {}, e = this, t = function(l, c, v, f, h, d, y) {
    var g = h.x - v / 2 - y, p = h.x + v / 2 + y, m = h.y - v / 2 - y, b = h.y + v / 2 + y, w = g <= l && l <= p && m <= c && c <= b;
    return w;
  }, a = function(l, c, v, f, h) {
    var d = l * Math.cos(f) - c * Math.sin(f), y = l * Math.sin(f) + c * Math.cos(f), g = d * v, p = y * v, m = g + h.x, b = p + h.y;
    return {
      x: m,
      y: b
    };
  }, n = function(l, c, v, f) {
    for (var h = [], d = 0; d < l.length; d += 2) {
      var y = l[d], g = l[d + 1];
      h.push(a(y, g, c, v, f));
    }
    return h;
  }, i = function(l) {
    for (var c = [], v = 0; v < l.length; v++) {
      var f = l[v];
      c.push(f.x, f.y);
    }
    return c;
  }, s = function(l) {
    return l.pstyle("width").pfValue * l.pstyle("arrow-scale").pfValue * 2;
  }, o = function(l, c) {
    ge(c) && (c = r[c]), r[l] = be({
      name: l,
      points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
      collide: function(f, h, d, y, g, p) {
        var m = i(n(this.points, d + 2 * p, y, g)), b = Dt(f, h, m);
        return b;
      },
      roughCollide: t,
      draw: function(f, h, d, y) {
        var g = n(this.points, h, d, y);
        e.arrowShapeImpl("polygon")(f, g);
      },
      spacing: function(f) {
        return 0;
      },
      gap: s
    }, c);
  };
  o("none", {
    collide: Kn,
    roughCollide: Kn,
    draw: zo,
    spacing: Ou,
    gap: Ou
  }), o("triangle", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
  }), o("arrow", "triangle"), o("triangle-backcurve", {
    points: r.triangle.points,
    controlPoint: [0, -0.15],
    roughCollide: t,
    draw: function(l, c, v, f, h) {
      var d = n(this.points, c, v, f), y = this.controlPoint, g = a(y[0], y[1], c, v, f);
      e.arrowShapeImpl(this.name)(l, d, g);
    },
    gap: function(l) {
      return s(l) * 0.8;
    }
  }), o("triangle-tee", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
    collide: function(l, c, v, f, h, d, y) {
      var g = i(n(this.points, v + 2 * y, f, h)), p = i(n(this.pointsTee, v + 2 * y, f, h)), m = Dt(l, c, g) || Dt(l, c, p);
      return m;
    },
    draw: function(l, c, v, f, h) {
      var d = n(this.points, c, v, f), y = n(this.pointsTee, c, v, f);
      e.arrowShapeImpl(this.name)(l, d, y);
    }
  }), o("circle-triangle", {
    radius: 0.15,
    pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
    collide: function(l, c, v, f, h, d, y) {
      var g = h, p = Math.pow(g.x - l, 2) + Math.pow(g.y - c, 2) <= Math.pow((v + 2 * y) * this.radius, 2), m = i(n(this.points, v + 2 * y, f, h));
      return Dt(l, c, m) || p;
    },
    draw: function(l, c, v, f, h) {
      var d = n(this.pointsTr, c, v, f);
      e.arrowShapeImpl(this.name)(l, d, f.x, f.y, this.radius * c);
    },
    spacing: function(l) {
      return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
    }
  }), o("triangle-cross", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    baseCrossLinePts: [
      -0.15,
      -0.4,
      // first half of the rectangle
      -0.15,
      -0.4,
      0.15,
      -0.4,
      // second half of the rectangle
      0.15,
      -0.4
    ],
    crossLinePts: function(l, c) {
      var v = this.baseCrossLinePts.slice(), f = c / l, h = 3, d = 5;
      return v[h] = v[h] - f, v[d] = v[d] - f, v;
    },
    collide: function(l, c, v, f, h, d, y) {
      var g = i(n(this.points, v + 2 * y, f, h)), p = i(n(this.crossLinePts(v, d), v + 2 * y, f, h)), m = Dt(l, c, g) || Dt(l, c, p);
      return m;
    },
    draw: function(l, c, v, f, h) {
      var d = n(this.points, c, v, f), y = n(this.crossLinePts(c, h), c, v, f);
      e.arrowShapeImpl(this.name)(l, d, y);
    }
  }), o("vee", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
    gap: function(l) {
      return s(l) * 0.525;
    }
  }), o("circle", {
    radius: 0.15,
    collide: function(l, c, v, f, h, d, y) {
      var g = h, p = Math.pow(g.x - l, 2) + Math.pow(g.y - c, 2) <= Math.pow((v + 2 * y) * this.radius, 2);
      return p;
    },
    draw: function(l, c, v, f, h) {
      e.arrowShapeImpl(this.name)(l, f.x, f.y, this.radius * c);
    },
    spacing: function(l) {
      return e.getArrowWidth(l.pstyle("width").pfValue, l.pstyle("arrow-scale").value) * this.radius;
    }
  }), o("tee", {
    points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
    spacing: function(l) {
      return 1;
    },
    gap: function(l) {
      return 1;
    }
  }), o("square", {
    points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3]
  }), o("diamond", {
    points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
    gap: function(l) {
      return l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
    }
  }), o("chevron", {
    points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15],
    gap: function(l) {
      return 0.95 * l.pstyle("width").pfValue * l.pstyle("arrow-scale").value;
    }
  });
};
var qr = {};
qr.projectIntoViewport = function(r, e) {
  var t = this.cy, a = this.findContainerClientCoords(), n = a[0], i = a[1], s = a[4], o = t.pan(), u = t.zoom(), l = ((r - n) / s - o.x) / u, c = ((e - i) / s - o.y) / u;
  return [l, c];
};
qr.findContainerClientCoords = function() {
  if (this.containerBB)
    return this.containerBB;
  var r = this.container, e = r.getBoundingClientRect(), t = this.cy.window().getComputedStyle(r), a = function(p) {
    return parseFloat(t.getPropertyValue(p));
  }, n = {
    left: a("padding-left"),
    right: a("padding-right"),
    top: a("padding-top"),
    bottom: a("padding-bottom")
  }, i = {
    left: a("border-left-width"),
    right: a("border-right-width"),
    top: a("border-top-width"),
    bottom: a("border-bottom-width")
  }, s = r.clientWidth, o = r.clientHeight, u = n.left + n.right, l = n.top + n.bottom, c = i.left + i.right, v = e.width / (s + c), f = s - u, h = o - l, d = e.left + n.left + i.left, y = e.top + n.top + i.top;
  return this.containerBB = [d, y, f, h, v];
};
qr.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
};
qr.findNearestElement = function(r, e, t, a) {
  return this.findNearestElements(r, e, t, a)[0];
};
qr.findNearestElements = function(r, e, t, a) {
  var n = this, i = this, s = i.getCachedZSortedEles(), o = [], u = i.cy.zoom(), l = i.cy.hasCompoundNodes(), c = (a ? 24 : 8) / u, v = (a ? 8 : 2) / u, f = (a ? 8 : 2) / u, h = 1 / 0, d, y;
  t && (s = s.interactive);
  function g(x, T) {
    if (x.isNode()) {
      if (y)
        return;
      y = x, o.push(x);
    }
    if (x.isEdge() && (T == null || T < h))
      if (d) {
        if (d.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value && d.pstyle("z-compound-depth").value === x.pstyle("z-compound-depth").value) {
          for (var A = 0; A < o.length; A++)
            if (o[A].isEdge()) {
              o[A] = x, d = x, h = T ?? h;
              break;
            }
        }
      } else
        o.push(x), d = x, h = T ?? h;
  }
  function p(x) {
    var T = x.outerWidth() + 2 * v, A = x.outerHeight() + 2 * v, k = T / 2, D = A / 2, B = x.position(), P = x.pstyle("corner-radius").value === "auto" ? "auto" : x.pstyle("corner-radius").pfValue, L = x._private.rscratch;
    if (B.x - k <= r && r <= B.x + k && B.y - D <= e && e <= B.y + D) {
      var M = i.nodeShapes[n.getNodeShape(x)];
      if (M.checkPoint(r, e, 0, T, A, B.x, B.y, P, L))
        return g(x, 0), !0;
    }
  }
  function m(x) {
    var T = x._private, A = T.rscratch, k = x.pstyle("width").pfValue, D = x.pstyle("arrow-scale").value, B = k / 2 + c, P = B * B, L = B * 2, O = T.source, $ = T.target, M;
    if (A.edgeType === "segments" || A.edgeType === "straight" || A.edgeType === "haystack") {
      for (var I = A.allpts, R = 0; R + 3 < I.length; R += 2)
        if (jh(r, e, I[R], I[R + 1], I[R + 2], I[R + 3], L) && P > (M = ng(r, e, I[R], I[R + 1], I[R + 2], I[R + 3])))
          return g(x, M), !0;
    } else if (A.edgeType === "bezier" || A.edgeType === "multibezier" || A.edgeType === "self" || A.edgeType === "compound") {
      for (var I = A.allpts, R = 0; R + 5 < A.allpts.length; R += 4)
        if (eg(r, e, I[R], I[R + 1], I[R + 2], I[R + 3], I[R + 4], I[R + 5], L) && P > (M = ag(r, e, I[R], I[R + 1], I[R + 2], I[R + 3], I[R + 4], I[R + 5])))
          return g(x, M), !0;
    }
    for (var O = O || T.source, $ = $ || T.target, H = n.getArrowWidth(k, D), z = [{
      name: "source",
      x: A.arrowStartX,
      y: A.arrowStartY,
      angle: A.srcArrowAngle
    }, {
      name: "target",
      x: A.arrowEndX,
      y: A.arrowEndY,
      angle: A.tgtArrowAngle
    }, {
      name: "mid-source",
      x: A.midX,
      y: A.midY,
      angle: A.midsrcArrowAngle
    }, {
      name: "mid-target",
      x: A.midX,
      y: A.midY,
      angle: A.midtgtArrowAngle
    }], R = 0; R < z.length; R++) {
      var F = z[R], U = i.arrowShapes[x.pstyle(F.name + "-arrow-shape").value], Y = x.pstyle("width").pfValue;
      if (U.roughCollide(r, e, H, F.angle, {
        x: F.x,
        y: F.y
      }, Y, c) && U.collide(r, e, H, F.angle, {
        x: F.x,
        y: F.y
      }, Y, c))
        return g(x), !0;
    }
    l && o.length > 0 && (p(O), p($));
  }
  function b(x, T, A) {
    return kt(x, T, A);
  }
  function w(x, T) {
    var A = x._private, k = f, D;
    T ? D = T + "-" : D = "", x.boundingBox();
    var B = A.labelBounds[T || "main"], P = x.pstyle(D + "label").value, L = x.pstyle("text-events").strValue === "yes";
    if (!(!L || !P)) {
      var M = b(A.rscratch, "labelX", T), I = b(A.rscratch, "labelY", T), R = b(A.rscratch, "labelAngle", T), O = x.pstyle(D + "text-margin-x").pfValue, $ = x.pstyle(D + "text-margin-y").pfValue, H = B.x1 - k - O, z = B.x2 + k - O, F = B.y1 - k - $, U = B.y2 + k - $;
      if (R) {
        var Y = Math.cos(R), G = Math.sin(R), Q = function(K, re) {
          return K = K - M, re = re - I, {
            x: K * Y - re * G + M,
            y: K * G + re * Y + I
          };
        }, J = Q(H, F), ae = Q(H, U), W = Q(z, F), N = Q(z, U), V = [
          // with the margin added after the rotation is applied
          J.x + O,
          J.y + $,
          W.x + O,
          W.y + $,
          N.x + O,
          N.y + $,
          ae.x + O,
          ae.y + $
        ];
        if (Dt(r, e, V))
          return g(x), !0;
      } else if (lr(B, r, e))
        return g(x), !0;
    }
  }
  for (var E = s.length - 1; E >= 0; E--) {
    var C = s[E];
    C.isNode() ? p(C) || w(C) : m(C) || w(C) || w(C, "source") || w(C, "target");
  }
  return o;
};
qr.getAllInBox = function(r, e, t, a) {
  var n = this.getCachedZSortedEles().interactive, i = this.cy.zoom(), s = 2 / i, o = [], u = Math.min(r, t), l = Math.max(r, t), c = Math.min(e, a), v = Math.max(e, a);
  r = u, t = l, e = c, a = v;
  var f = Ct({
    x1: r,
    y1: e,
    x2: t,
    y2: a
  }), h = [{
    x: f.x1,
    y: f.y1
  }, {
    x: f.x2,
    y: f.y1
  }, {
    x: f.x2,
    y: f.y2
  }, {
    x: f.x1,
    y: f.y2
  }], d = [[h[0], h[1]], [h[1], h[2]], [h[2], h[3]], [h[3], h[0]]];
  function y(K, re, se) {
    return kt(K, re, se);
  }
  function g(K, re) {
    var se = K._private, Te = s, Ce = "";
    K.boundingBox();
    var we = se.labelBounds.main;
    if (!we)
      return null;
    var ye = y(se.rscratch, "labelX", re), ie = y(se.rscratch, "labelY", re), de = y(se.rscratch, "labelAngle", re), he = K.pstyle(Ce + "text-margin-x").pfValue, Ee = K.pstyle(Ce + "text-margin-y").pfValue, pe = we.x1 - Te - he, Ae = we.x2 + Te - he, Le = we.y1 - Te - Ee, Oe = we.y2 + Te - Ee;
    if (de) {
      var Ne = Math.cos(de), ze = Math.sin(de), xe = function(j, S) {
        return j = j - ye, S = S - ie, {
          x: j * Ne - S * ze + ye,
          y: j * ze + S * Ne + ie
        };
      };
      return [xe(pe, Le), xe(Ae, Le), xe(Ae, Oe), xe(pe, Oe)];
    } else
      return [{
        x: pe,
        y: Le
      }, {
        x: Ae,
        y: Le
      }, {
        x: Ae,
        y: Oe
      }, {
        x: pe,
        y: Oe
      }];
  }
  function p(K, re, se, Te) {
    function Ce(we, ye, ie) {
      return (ie.y - we.y) * (ye.x - we.x) > (ye.y - we.y) * (ie.x - we.x);
    }
    return Ce(K, se, Te) !== Ce(re, se, Te) && Ce(K, re, se) !== Ce(K, re, Te);
  }
  for (var m = 0; m < n.length; m++) {
    var b = n[m];
    if (b.isNode()) {
      var w = b, E = w.pstyle("text-events").strValue === "yes", C = w.pstyle("box-selection").strValue, x = w.pstyle("box-select-labels").strValue === "yes";
      if (C === "none")
        continue;
      var T = (C === "overlap" || x) && E, A = w.boundingBox({
        includeNodes: !0,
        includeEdges: !1,
        includeLabels: T
      });
      if (C === "contain") {
        var k = !1;
        if (x && E) {
          var D = g(w);
          D && Zi(D, h) && (o.push(w), k = !0);
        }
        !k && wv(f, A) && o.push(w);
      } else if (C === "overlap" && _o(f, A)) {
        var B = w.boundingBox({
          includeNodes: !0,
          includeEdges: !0,
          includeLabels: !1,
          includeMainLabels: !1,
          includeSourceLabels: !1,
          includeTargetLabels: !1
        }), P = [{
          x: B.x1,
          y: B.y1
        }, {
          x: B.x2,
          y: B.y1
        }, {
          x: B.x2,
          y: B.y2
        }, {
          x: B.x1,
          y: B.y2
        }];
        if (Zi(P, h))
          o.push(w);
        else {
          var L = g(w);
          L && Zi(L, h) && o.push(w);
        }
      }
    } else {
      var M = b, I = M._private, R = I.rscratch, O = M.pstyle("box-selection").strValue;
      if (O === "none")
        continue;
      if (O === "contain") {
        if (R.startX != null && R.startY != null && !lr(f, R.startX, R.startY) || R.endX != null && R.endY != null && !lr(f, R.endX, R.endY))
          continue;
        if (R.edgeType === "bezier" || R.edgeType === "multibezier" || R.edgeType === "self" || R.edgeType === "compound" || R.edgeType === "segments" || R.edgeType === "haystack") {
          for (var $ = I.rstyle.bezierPts || I.rstyle.linePts || I.rstyle.haystackPts, H = !0, z = 0; z < $.length; z++)
            if (!$u(f, $[z])) {
              H = !1;
              break;
            }
          H && o.push(M);
        } else
          R.edgeType === "straight" && o.push(M);
      } else if (O === "overlap") {
        var F = !1;
        if (R.startX != null && R.startY != null && R.endX != null && R.endY != null && (lr(f, R.startX, R.startY) || lr(f, R.endX, R.endY)))
          o.push(M), F = !0;
        else if (!F && R.edgeType === "haystack") {
          for (var U = I.rstyle.haystackPts, Y = 0; Y < U.length; Y++)
            if ($u(f, U[Y])) {
              o.push(M), F = !0;
              break;
            }
        }
        if (!F) {
          var G = I.rstyle.bezierPts || I.rstyle.linePts || I.rstyle.haystackPts;
          if ((!G || G.length < 2) && R.edgeType === "straight" && R.startX != null && R.startY != null && R.endX != null && R.endY != null && (G = [{
            x: R.startX,
            y: R.startY
          }, {
            x: R.endX,
            y: R.endY
          }]), !G || G.length < 2)
            continue;
          for (var Q = 0; Q < G.length - 1; Q++) {
            for (var J = G[Q], ae = G[Q + 1], W = 0; W < d.length; W++) {
              var N = je(d[W], 2), V = N[0], _ = N[1];
              if (p(J, ae, V, _)) {
                o.push(M), F = !0;
                break;
              }
            }
            if (F)
              break;
          }
        }
      }
    }
  }
  return o;
};
var ei = {};
ei.calculateArrowAngles = function(r) {
  var e = r._private.rscratch, t = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", u, l, c, v, f, h, p, m;
  if (t ? (c = e.haystackPts[0], v = e.haystackPts[1], f = e.haystackPts[2], h = e.haystackPts[3]) : (c = e.arrowStartX, v = e.arrowStartY, f = e.arrowEndX, h = e.arrowEndY), p = e.midX, m = e.midY, i)
    u = c - e.segpts[0], l = v - e.segpts[1];
  else if (n || s || o || a) {
    var d = e.allpts, y = ot(d[0], d[2], d[4], 0.1), g = ot(d[1], d[3], d[5], 0.1);
    u = c - y, l = v - g;
  } else
    u = c - p, l = v - m;
  e.srcArrowAngle = mn(u, l);
  var p = e.midX, m = e.midY;
  if (t && (p = (c + f) / 2, m = (v + h) / 2), u = f - c, l = h - v, i) {
    var d = e.allpts;
    if (d.length / 2 % 2 === 0) {
      var b = d.length / 2, w = b - 2;
      u = d[b] - d[w], l = d[b + 1] - d[w + 1];
    } else if (e.isRound)
      u = e.midVector[1], l = -e.midVector[0];
    else {
      var b = d.length / 2 - 1, w = b - 2;
      u = d[b] - d[w], l = d[b + 1] - d[w + 1];
    }
  } else if (n || s || o) {
    var d = e.allpts, E = e.ctrlpts, C, x, T, A;
    if (E.length / 2 % 2 === 0) {
      var k = d.length / 2 - 1, D = k + 2, B = D + 2;
      C = ot(d[k], d[D], d[B], 0), x = ot(d[k + 1], d[D + 1], d[B + 1], 0), T = ot(d[k], d[D], d[B], 1e-4), A = ot(d[k + 1], d[D + 1], d[B + 1], 1e-4);
    } else {
      var D = d.length / 2 - 1, k = D - 2, B = D + 2;
      C = ot(d[k], d[D], d[B], 0.4999), x = ot(d[k + 1], d[D + 1], d[B + 1], 0.4999), T = ot(d[k], d[D], d[B], 0.5), A = ot(d[k + 1], d[D + 1], d[B + 1], 0.5);
    }
    u = T - C, l = A - x;
  }
  if (e.midtgtArrowAngle = mn(u, l), e.midDispX = u, e.midDispY = l, u *= -1, l *= -1, i) {
    var d = e.allpts;
    if (d.length / 2 % 2 !== 0) {
      if (!e.isRound) {
        var b = d.length / 2 - 1, P = b + 2;
        u = -(d[P] - d[b]), l = -(d[P + 1] - d[b + 1]);
      }
    }
  }
  if (e.midsrcArrowAngle = mn(u, l), i)
    u = f - e.segpts[e.segpts.length - 2], l = h - e.segpts[e.segpts.length - 1];
  else if (n || s || o || a) {
    var d = e.allpts, L = d.length, y = ot(d[L - 6], d[L - 4], d[L - 2], 0.9), g = ot(d[L - 5], d[L - 3], d[L - 1], 0.9);
    u = f - y, l = h - g;
  } else
    u = f - p, l = h - m;
  e.tgtArrowAngle = mn(u, l);
};
ei.getArrowWidth = ei.getArrowHeight = function(r, e) {
  var t = this.arrowWidthCache = this.arrowWidthCache || {}, a = t[r + ", " + e];
  return a || (a = Math.max(Math.pow(r * 13.37, 0.9), 29) * e, t[r + ", " + e] = a, a);
};
var bo, wo, qt = {}, Rt = {}, Ec, Cc, Rr, Vn, Zt, kr, Pr, $t, Yr, An, gf, pf, xo, Eo, Tc, Sc = function(e, t, a) {
  a.x = t.x - e.x, a.y = t.y - e.y, a.len = Math.sqrt(a.x * a.x + a.y * a.y), a.nx = a.x / a.len, a.ny = a.y / a.len, a.ang = Math.atan2(a.ny, a.nx);
}, w0 = function(e, t) {
  t.x = e.x * -1, t.y = e.y * -1, t.nx = e.nx * -1, t.ny = e.ny * -1, t.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
}, x0 = function(e, t, a, n, i) {
  if (e !== Tc ? Sc(t, e, qt) : w0(Rt, qt), Sc(t, a, Rt), Ec = qt.nx * Rt.ny - qt.ny * Rt.nx, Cc = qt.nx * Rt.nx - qt.ny * -Rt.ny, Zt = Math.asin(Math.max(-1, Math.min(1, Ec))), Math.abs(Zt) < 1e-6) {
    bo = t.x, wo = t.y, Pr = Yr = 0;
    return;
  }
  Rr = 1, Vn = !1, Cc < 0 ? Zt < 0 ? Zt = Math.PI + Zt : (Zt = Math.PI - Zt, Rr = -1, Vn = !0) : Zt > 0 && (Rr = -1, Vn = !0), t.radius !== void 0 ? Yr = t.radius : Yr = n, kr = Zt / 2, An = Math.min(qt.len / 2, Rt.len / 2), i ? ($t = Math.abs(Math.cos(kr) * Yr / Math.sin(kr)), $t > An ? ($t = An, Pr = Math.abs($t * Math.sin(kr) / Math.cos(kr))) : Pr = Yr) : ($t = Math.min(An, Yr), Pr = Math.abs($t * Math.sin(kr) / Math.cos(kr))), xo = t.x + Rt.nx * $t, Eo = t.y + Rt.ny * $t, bo = xo - Rt.ny * Pr * Rr, wo = Eo + Rt.nx * Pr * Rr, gf = t.x + qt.nx * $t, pf = t.y + qt.ny * $t, Tc = t;
};
function yf(r, e) {
  e.radius === 0 ? r.lineTo(e.cx, e.cy) : r.arc(e.cx, e.cy, e.radius, e.startAngle, e.endAngle, e.counterClockwise);
}
function jo(r, e, t, a) {
  var n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0;
  return a === 0 || e.radius === 0 ? {
    cx: e.x,
    cy: e.y,
    radius: 0,
    startX: e.x,
    startY: e.y,
    stopX: e.x,
    stopY: e.y,
    startAngle: void 0,
    endAngle: void 0,
    counterClockwise: void 0
  } : (x0(r, e, t, a, n), {
    cx: bo,
    cy: wo,
    radius: Pr,
    startX: gf,
    startY: pf,
    stopX: xo,
    stopY: Eo,
    startAngle: qt.ang + Math.PI / 2 * Rr,
    endAngle: Rt.ang - Math.PI / 2 * Rr,
    counterClockwise: Vn
  });
}
var Qa = 0.01, E0 = Math.sqrt(2 * Qa), wt = {};
wt.findMidptPtsEtc = function(r, e) {
  var t = e.posPts, a = e.intersectionPts, n = e.vectorNormInverse, i, s = r.pstyle("source-endpoint"), o = r.pstyle("target-endpoint"), u = s.units != null && o.units != null, l = function(E, C, x, T) {
    var A = T - C, k = x - E, D = Math.sqrt(k * k + A * A);
    return {
      x: -A / D,
      y: k / D
    };
  }, c = r.pstyle("edge-distances").value;
  switch (c) {
    case "node-position":
      i = t;
      break;
    case "intersection":
      i = a;
      break;
    case "endpoints": {
      if (u) {
        var v = this.manualEndptToPx(r.source()[0], s), f = je(v, 2), h = f[0], d = f[1], y = this.manualEndptToPx(r.target()[0], o), g = je(y, 2), p = g[0], m = g[1], b = {
          x1: h,
          y1: d,
          x2: p,
          y2: m
        };
        n = l(h, d, p, m), i = b;
      } else
        Ve("Edge ".concat(r.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = a;
      break;
    }
  }
  return {
    midptPts: i,
    vectorNormInverse: n
  };
};
wt.findHaystackPoints = function(r) {
  for (var e = 0; e < r.length; e++) {
    var t = r[e], a = t._private, n = a.rscratch;
    if (!n.haystack) {
      var i = Math.random() * 2 * Math.PI;
      n.source = {
        x: Math.cos(i),
        y: Math.sin(i)
      }, i = Math.random() * 2 * Math.PI, n.target = {
        x: Math.cos(i),
        y: Math.sin(i)
      };
    }
    var s = a.source, o = a.target, u = s.position(), l = o.position(), c = s.width(), v = o.width(), f = s.height(), h = o.height(), d = t.pstyle("haystack-radius").value, y = d / 2;
    n.haystackPts = n.allpts = [n.source.x * c * y + u.x, n.source.y * f * y + u.y, n.target.x * v * y + l.x, n.target.y * h * y + l.y], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = !0, this.storeEdgeProjections(t), this.calculateArrowAngles(t), this.recalculateEdgeLabelProjections(t), this.calculateLabelAngles(t);
  }
};
wt.findSegmentsPoints = function(r, e) {
  var t = r._private.rscratch, a = r.pstyle("segment-weights"), n = r.pstyle("segment-distances"), i = r.pstyle("segment-radii"), s = r.pstyle("radius-type"), o = Math.min(a.pfValue.length, n.pfValue.length), u = i.pfValue[i.pfValue.length - 1], l = s.pfValue[s.pfValue.length - 1];
  t.edgeType = "segments", t.segpts = [], t.radii = [], t.isArcRadius = [];
  for (var c = 0; c < o; c++) {
    var v = a.pfValue[c], f = n.pfValue[c], h = 1 - v, d = v, y = this.findMidptPtsEtc(r, e), g = y.midptPts, p = y.vectorNormInverse, m = {
      x: g.x1 * h + g.x2 * d,
      y: g.y1 * h + g.y2 * d
    };
    t.segpts.push(m.x + p.x * f, m.y + p.y * f), t.radii.push(i.pfValue[c] !== void 0 ? i.pfValue[c] : u), t.isArcRadius.push((s.pfValue[c] !== void 0 ? s.pfValue[c] : l) === "arc-radius");
  }
};
wt.findLoopPoints = function(r, e, t, a) {
  var n = r._private.rscratch, i = e.dirCounts, s = e.srcPos, o = r.pstyle("control-point-distances"), u = o ? o.pfValue[0] : void 0, l = r.pstyle("loop-direction").pfValue, c = r.pstyle("loop-sweep").pfValue, v = r.pstyle("control-point-step-size").pfValue;
  n.edgeType = "self";
  var f = t, h = v;
  a && (f = 0, h = u);
  var d = l - Math.PI / 2, y = d - c / 2, g = d + c / 2, p = l + "_" + c;
  f = i[p] === void 0 ? i[p] = 0 : ++i[p], n.ctrlpts = [s.x + Math.cos(y) * 1.4 * h * (f / 3 + 1), s.y + Math.sin(y) * 1.4 * h * (f / 3 + 1), s.x + Math.cos(g) * 1.4 * h * (f / 3 + 1), s.y + Math.sin(g) * 1.4 * h * (f / 3 + 1)];
};
wt.findCompoundLoopPoints = function(r, e, t, a) {
  var n = r._private.rscratch;
  n.edgeType = "compound";
  var i = e.srcPos, s = e.tgtPos, o = e.srcW, u = e.srcH, l = e.tgtW, c = e.tgtH, v = r.pstyle("control-point-step-size").pfValue, f = r.pstyle("control-point-distances"), h = f ? f.pfValue[0] : void 0, d = t, y = v;
  a && (d = 0, y = h);
  var g = 50, p = {
    x: i.x - o / 2,
    y: i.y - u / 2
  }, m = {
    x: s.x - l / 2,
    y: s.y - c / 2
  }, b = {
    x: Math.min(p.x, m.x),
    y: Math.min(p.y, m.y)
  }, w = 0.5, E = Math.max(w, Math.log(o * Qa)), C = Math.max(w, Math.log(l * Qa));
  n.ctrlpts = [b.x, b.y - (1 + Math.pow(g, 1.12) / 100) * y * (d / 3 + 1) * E, b.x - (1 + Math.pow(g, 1.12) / 100) * y * (d / 3 + 1) * C, b.y];
};
wt.findStraightEdgePoints = function(r) {
  r._private.rscratch.edgeType = "straight";
};
wt.findBezierPoints = function(r, e, t, a, n) {
  var i = r._private.rscratch, s = r.pstyle("control-point-step-size").pfValue, o = r.pstyle("control-point-distances"), u = r.pstyle("control-point-weights"), l = o && u ? Math.min(o.value.length, u.value.length) : 1, c = o ? o.pfValue[0] : void 0, v = u.value[0], f = a;
  i.edgeType = f ? "multibezier" : "bezier", i.ctrlpts = [];
  for (var h = 0; h < l; h++) {
    var d = (0.5 - e.eles.length / 2 + t) * s * (n ? -1 : 1), y = void 0, g = $o(d);
    f && (c = o ? o.pfValue[h] : s, v = u.value[h]), a ? y = c : y = c !== void 0 ? g * c : void 0;
    var p = y !== void 0 ? y : d, m = 1 - v, b = v, w = this.findMidptPtsEtc(r, e), E = w.midptPts, C = w.vectorNormInverse, x = {
      x: E.x1 * m + E.x2 * b,
      y: E.y1 * m + E.y2 * b
    };
    i.ctrlpts.push(x.x + C.x * p, x.y + C.y * p);
  }
};
wt.findTaxiPoints = function(r, e) {
  var t = r._private.rscratch;
  t.edgeType = "segments";
  var a = "vertical", n = "horizontal", i = "leftward", s = "rightward", o = "downward", u = "upward", l = "auto", c = e.posPts, v = e.srcW, f = e.srcH, h = e.tgtW, d = e.tgtH, y = r.pstyle("edge-distances").value, g = y !== "node-position", p = r.pstyle("taxi-direction").value, m = p, b = r.pstyle("taxi-turn"), w = b.units === "%", E = b.pfValue, C = E < 0, x = r.pstyle("taxi-turn-min-distance").pfValue, T = g ? (v + h) / 2 : 0, A = g ? (f + d) / 2 : 0, k = c.x2 - c.x1, D = c.y2 - c.y1, B = function(S, q) {
    return S > 0 ? Math.max(S - q, 0) : Math.min(S + q, 0);
  }, P = B(k, T), L = B(D, A), M = !1;
  m === l ? p = Math.abs(P) > Math.abs(L) ? n : a : m === u || m === o ? (p = a, M = !0) : (m === i || m === s) && (p = n, M = !0);
  var I = p === a, R = I ? L : P, O = I ? D : k, $ = $o(O), H = !1;
  !(M && (w || C)) && (m === o && O < 0 || m === u && O > 0 || m === i && O > 0 || m === s && O < 0) && ($ *= -1, R = $ * Math.abs(R), H = !0);
  var z;
  if (w) {
    var F = E < 0 ? 1 + E : E;
    z = F * R;
  } else {
    var U = E < 0 ? R : 0;
    z = U + E * $;
  }
  var Y = function(S) {
    return Math.abs(S) < x || Math.abs(S) >= Math.abs(R);
  }, G = Y(z), Q = Y(Math.abs(R) - Math.abs(z)), J = G || Q;
  if (J && !H)
    if (I) {
      var ae = Math.abs(O) <= f / 2, W = Math.abs(k) <= h / 2;
      if (ae) {
        var N = (c.x1 + c.x2) / 2, V = c.y1, _ = c.y2;
        t.segpts = [N, V, N, _];
      } else if (W) {
        var K = (c.y1 + c.y2) / 2, re = c.x1, se = c.x2;
        t.segpts = [re, K, se, K];
      } else
        t.segpts = [c.x1, c.y2];
    } else {
      var Te = Math.abs(O) <= v / 2, Ce = Math.abs(D) <= d / 2;
      if (Te) {
        var we = (c.y1 + c.y2) / 2, ye = c.x1, ie = c.x2;
        t.segpts = [ye, we, ie, we];
      } else if (Ce) {
        var de = (c.x1 + c.x2) / 2, he = c.y1, Ee = c.y2;
        t.segpts = [de, he, de, Ee];
      } else
        t.segpts = [c.x2, c.y1];
    }
  else if (I) {
    var pe = c.y1 + z + (g ? f / 2 * $ : 0), Ae = c.x1, Le = c.x2;
    t.segpts = [Ae, pe, Le, pe];
  } else {
    var Oe = c.x1 + z + (g ? v / 2 * $ : 0), Ne = c.y1, ze = c.y2;
    t.segpts = [Oe, Ne, Oe, ze];
  }
  if (t.isRound) {
    var xe = r.pstyle("taxi-radius").value, le = r.pstyle("radius-type").value[0] === "arc-radius";
    t.radii = new Array(t.segpts.length / 2).fill(xe), t.isArcRadius = new Array(t.segpts.length / 2).fill(le);
  }
};
wt.tryToCorrectInvalidPoints = function(r, e) {
  var t = r._private.rscratch;
  if (t.edgeType === "bezier") {
    var a = e.srcPos, n = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, u = e.tgtH, l = e.srcShape, c = e.tgtShape, v = e.srcCornerRadius, f = e.tgtCornerRadius, h = e.srcRs, d = e.tgtRs, y = !ne(t.startX) || !ne(t.startY), g = !ne(t.arrowStartX) || !ne(t.arrowStartY), p = !ne(t.endX) || !ne(t.endY), m = !ne(t.arrowEndX) || !ne(t.arrowEndY), b = 3, w = this.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.arrowShapeWidth, E = b * w, C = zr({
      x: t.ctrlpts[0],
      y: t.ctrlpts[1]
    }, {
      x: t.startX,
      y: t.startY
    }), x = C < E, T = zr({
      x: t.ctrlpts[0],
      y: t.ctrlpts[1]
    }, {
      x: t.endX,
      y: t.endY
    }), A = T < E, k = !1;
    if (y || g || x) {
      k = !0;
      var D = {
        // delta
        x: t.ctrlpts[0] - a.x,
        y: t.ctrlpts[1] - a.y
      }, B = Math.sqrt(D.x * D.x + D.y * D.y), P = {
        // normalised delta
        x: D.x / B,
        y: D.y / B
      }, L = Math.max(i, s), M = {
        // *2 radius guarantees outside shape
        x: t.ctrlpts[0] + P.x * 2 * L,
        y: t.ctrlpts[1] + P.y * 2 * L
      }, I = l.intersectLine(a.x, a.y, i, s, M.x, M.y, 0, v, h);
      x ? (t.ctrlpts[0] = t.ctrlpts[0] + P.x * (E - C), t.ctrlpts[1] = t.ctrlpts[1] + P.y * (E - C)) : (t.ctrlpts[0] = I[0] + P.x * E, t.ctrlpts[1] = I[1] + P.y * E);
    }
    if (p || m || A) {
      k = !0;
      var R = {
        // delta
        x: t.ctrlpts[0] - n.x,
        y: t.ctrlpts[1] - n.y
      }, O = Math.sqrt(R.x * R.x + R.y * R.y), $ = {
        // normalised delta
        x: R.x / O,
        y: R.y / O
      }, H = Math.max(i, s), z = {
        // *2 radius guarantees outside shape
        x: t.ctrlpts[0] + $.x * 2 * H,
        y: t.ctrlpts[1] + $.y * 2 * H
      }, F = c.intersectLine(n.x, n.y, o, u, z.x, z.y, 0, f, d);
      A ? (t.ctrlpts[0] = t.ctrlpts[0] + $.x * (E - T), t.ctrlpts[1] = t.ctrlpts[1] + $.y * (E - T)) : (t.ctrlpts[0] = F[0] + $.x * E, t.ctrlpts[1] = F[1] + $.y * E);
    }
    k && this.findEndpoints(r);
  }
};
wt.storeAllpts = function(r) {
  var e = r._private.rscratch;
  if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
    e.allpts = [], e.allpts.push(e.startX, e.startY);
    for (var t = 0; t + 1 < e.ctrlpts.length; t += 2)
      e.allpts.push(e.ctrlpts[t], e.ctrlpts[t + 1]), t + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[t] + e.ctrlpts[t + 2]) / 2, (e.ctrlpts[t + 1] + e.ctrlpts[t + 3]) / 2);
    e.allpts.push(e.endX, e.endY);
    var a, n;
    e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = 0.5, e.midX = ot(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = ot(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
  } else if (e.edgeType === "straight")
    e.allpts = [e.startX, e.startY, e.endX, e.endY], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
  else if (e.edgeType === "segments") {
    if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.isRound) {
      e.roundCorners = [];
      for (var i = 2; i + 3 < e.allpts.length; i += 2) {
        var s = e.radii[i / 2 - 1], o = e.isArcRadius[i / 2 - 1];
        e.roundCorners.push(jo({
          x: e.allpts[i - 2],
          y: e.allpts[i - 1]
        }, {
          x: e.allpts[i],
          y: e.allpts[i + 1],
          radius: s
        }, {
          x: e.allpts[i + 2],
          y: e.allpts[i + 3]
        }, s, o));
      }
    }
    if (e.segpts.length % 4 === 0) {
      var u = e.segpts.length / 2, l = u - 2;
      e.midX = (e.segpts[l] + e.segpts[u]) / 2, e.midY = (e.segpts[l + 1] + e.segpts[u + 1]) / 2;
    } else {
      var c = e.segpts.length / 2 - 1;
      if (!e.isRound)
        e.midX = e.segpts[c], e.midY = e.segpts[c + 1];
      else {
        var v = {
          x: e.segpts[c],
          y: e.segpts[c + 1]
        }, f = e.roundCorners[c / 2];
        if (f.radius === 0) {
          var h = {
            x: e.segpts[c + 2],
            y: e.segpts[c + 3]
          };
          e.midX = v.x, e.midY = v.y, e.midVector = [v.y - h.y, h.x - v.x];
        } else {
          var d = [v.x - f.cx, v.y - f.cy], y = f.radius / Math.sqrt(Math.pow(d[0], 2) + Math.pow(d[1], 2));
          d = d.map(function(g) {
            return g * y;
          }), e.midX = f.cx + d[0], e.midY = f.cy + d[1], e.midVector = d;
        }
      }
    }
  }
};
wt.checkForInvalidEdgeWarning = function(r) {
  var e = r[0]._private.rscratch;
  e.nodesOverlap || ne(e.startX) && ne(e.startY) && ne(e.endX) && ne(e.endY) ? e.loggedErr = !1 : e.loggedErr || (e.loggedErr = !0, Ve("Edge `" + r.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
wt.findEdgeControlPoints = function(r) {
  var e = this;
  if (!(!r || r.length === 0)) {
    for (var t = this, a = t.cy, n = a.hasCompoundNodes(), i = new Jt(), s = function(A, k) {
      return [].concat(Un(A), [k ? 1 : 0]).join("-");
    }, o = [], u = [], l = 0; l < r.length; l++) {
      var c = r[l], v = c._private, f = c.pstyle("curve-style").value;
      if (!(c.removed() || !c.takesUpSpace())) {
        if (f === "haystack") {
          u.push(c);
          continue;
        }
        var h = f === "unbundled-bezier" || ur(f, "segments") || f === "straight" || f === "straight-triangle" || ur(f, "taxi"), d = f === "unbundled-bezier" || f === "bezier", y = v.source, g = v.target, p = y.poolIndex(), m = g.poolIndex(), b = [p, m].sort(), w = s(b, h), E = i.get(w);
        E == null && (E = {
          eles: []
        }, o.push({
          pairId: b,
          edgeIsUnbundled: h
        }), i.set(w, E)), E.eles.push(c), h && (E.hasUnbundled = !0), d && (E.hasBezier = !0);
      }
    }
    for (var C = function() {
      var A = o[x], k = A.pairId, D = A.edgeIsUnbundled, B = s(k, D), P = i.get(B), L;
      if (!P.hasUnbundled) {
        var M = P.eles[0].parallelEdges().filter(function(le) {
          return le.isBundledBezier();
        });
        Fo(P.eles), M.forEach(function(le) {
          return P.eles.push(le);
        }), P.eles.sort(function(le, j) {
          return le.poolIndex() - j.poolIndex();
        });
      }
      var I = P.eles[0], R = I.source(), O = I.target();
      if (R.poolIndex() > O.poolIndex()) {
        var $ = R;
        R = O, O = $;
      }
      var H = P.srcPos = R.position(), z = P.tgtPos = O.position(), F = P.srcW = R.outerWidth(), U = P.srcH = R.outerHeight(), Y = P.tgtW = O.outerWidth(), G = P.tgtH = O.outerHeight(), Q = P.srcShape = t.nodeShapes[e.getNodeShape(R)], J = P.tgtShape = t.nodeShapes[e.getNodeShape(O)], ae = P.srcCornerRadius = R.pstyle("corner-radius").value === "auto" ? "auto" : R.pstyle("corner-radius").pfValue, W = P.tgtCornerRadius = O.pstyle("corner-radius").value === "auto" ? "auto" : O.pstyle("corner-radius").pfValue, N = P.tgtRs = O._private.rscratch, V = P.srcRs = R._private.rscratch;
      P.dirCounts = {
        north: 0,
        west: 0,
        south: 0,
        east: 0,
        northwest: 0,
        southwest: 0,
        northeast: 0,
        southeast: 0
      };
      for (var _ = 0; _ < P.eles.length; _++) {
        var K = P.eles[_], re = K[0]._private.rscratch, se = K.pstyle("curve-style").value, Te = se === "unbundled-bezier" || ur(se, "segments") || ur(se, "taxi"), Ce = !R.same(K.source());
        if (!P.calculatedIntersection && R !== O && (P.hasBezier || P.hasUnbundled)) {
          P.calculatedIntersection = !0;
          var we = Q.intersectLine(H.x, H.y, F, U, z.x, z.y, 0, ae, V), ye = P.srcIntn = we, ie = J.intersectLine(z.x, z.y, Y, G, H.x, H.y, 0, W, N), de = P.tgtIntn = ie, he = P.intersectionPts = {
            x1: we[0],
            x2: ie[0],
            y1: we[1],
            y2: ie[1]
          }, Ee = P.posPts = {
            x1: H.x,
            x2: z.x,
            y1: H.y,
            y2: z.y
          }, pe = ie[1] - we[1], Ae = ie[0] - we[0], Le = Math.sqrt(Ae * Ae + pe * pe);
          ne(Le) && Le >= E0 || (Le = Math.sqrt(Math.max(Ae * Ae, Qa) + Math.max(pe * pe, Qa)));
          var Oe = P.vector = {
            x: Ae,
            y: pe
          }, Ne = P.vectorNorm = {
            x: Oe.x / Le,
            y: Oe.y / Le
          }, ze = {
            x: -Ne.y,
            y: Ne.x
          };
          P.nodesOverlap = !ne(Le) || J.checkPoint(we[0], we[1], 0, Y, G, z.x, z.y, W, N) || Q.checkPoint(ie[0], ie[1], 0, F, U, H.x, H.y, ae, V), P.vectorNormInverse = ze, L = {
            nodesOverlap: P.nodesOverlap,
            dirCounts: P.dirCounts,
            calculatedIntersection: !0,
            hasBezier: P.hasBezier,
            hasUnbundled: P.hasUnbundled,
            eles: P.eles,
            srcPos: z,
            srcRs: N,
            tgtPos: H,
            tgtRs: V,
            srcW: Y,
            srcH: G,
            tgtW: F,
            tgtH: U,
            srcIntn: de,
            tgtIntn: ye,
            srcShape: J,
            tgtShape: Q,
            posPts: {
              x1: Ee.x2,
              y1: Ee.y2,
              x2: Ee.x1,
              y2: Ee.y1
            },
            intersectionPts: {
              x1: he.x2,
              y1: he.y2,
              x2: he.x1,
              y2: he.y1
            },
            vector: {
              x: -Oe.x,
              y: -Oe.y
            },
            vectorNorm: {
              x: -Ne.x,
              y: -Ne.y
            },
            vectorNormInverse: {
              x: -ze.x,
              y: -ze.y
            }
          };
        }
        var xe = Ce ? L : P;
        re.nodesOverlap = xe.nodesOverlap, re.srcIntn = xe.srcIntn, re.tgtIntn = xe.tgtIntn, re.isRound = se.startsWith("round"), n && (R.isParent() || R.isChild() || O.isParent() || O.isChild()) && (R.parents().anySame(O) || O.parents().anySame(R) || R.same(O) && R.isParent()) ? e.findCompoundLoopPoints(K, xe, _, Te) : R === O ? e.findLoopPoints(K, xe, _, Te) : se.endsWith("segments") ? e.findSegmentsPoints(K, xe) : se.endsWith("taxi") ? e.findTaxiPoints(K, xe) : se === "straight" || !Te && P.eles.length % 2 === 1 && _ === Math.floor(P.eles.length / 2) ? e.findStraightEdgePoints(K) : e.findBezierPoints(K, xe, _, Te, Ce), e.findEndpoints(K), e.tryToCorrectInvalidPoints(K, xe), e.checkForInvalidEdgeWarning(K), e.storeAllpts(K), e.storeEdgeProjections(K), e.calculateArrowAngles(K), e.recalculateEdgeLabelProjections(K), e.calculateLabelAngles(K);
      }
    }, x = 0; x < o.length; x++)
      C();
    this.findHaystackPoints(u);
  }
};
function mf(r) {
  var e = [];
  if (r != null) {
    for (var t = 0; t < r.length; t += 2) {
      var a = r[t], n = r[t + 1];
      e.push({
        x: a,
        y: n
      });
    }
    return e;
  }
}
wt.getSegmentPoints = function(r) {
  var e = r[0]._private.rscratch;
  this.recalculateRenderedStyle(r);
  var t = e.edgeType;
  if (t === "segments")
    return mf(e.segpts);
};
wt.getControlPoints = function(r) {
  var e = r[0]._private.rscratch;
  this.recalculateRenderedStyle(r);
  var t = e.edgeType;
  if (t === "bezier" || t === "multibezier" || t === "self" || t === "compound")
    return mf(e.ctrlpts);
};
wt.getEdgeMidpoint = function(r) {
  var e = r[0]._private.rscratch;
  return this.recalculateRenderedStyle(r), {
    x: e.midX,
    y: e.midY
  };
};
var ln = {};
ln.manualEndptToPx = function(r, e) {
  var t = this, a = r.position(), n = r.outerWidth(), i = r.outerHeight(), s = r._private.rscratch;
  if (e.value.length === 2) {
    var o = [e.pfValue[0], e.pfValue[1]];
    return e.units[0] === "%" && (o[0] = o[0] * n), e.units[1] === "%" && (o[1] = o[1] * i), o[0] += a.x, o[1] += a.y, o;
  } else {
    var u = e.pfValue[0];
    u = -Math.PI / 2 + u;
    var l = 2 * Math.max(n, i), c = [a.x + Math.cos(u) * l, a.y + Math.sin(u) * l];
    return t.nodeShapes[this.getNodeShape(r)].intersectLine(a.x, a.y, n, i, c[0], c[1], 0, r.pstyle("corner-radius").value === "auto" ? "auto" : r.pstyle("corner-radius").pfValue, s);
  }
};
ln.findEndpoints = function(r) {
  var e, t, a, n, i = this, s, o = r.source()[0], u = r.target()[0], l = o.position(), c = u.position(), v = r.pstyle("target-arrow-shape").value, f = r.pstyle("source-arrow-shape").value, h = r.pstyle("target-distance-from-node").pfValue, d = r.pstyle("source-distance-from-node").pfValue, y = o._private.rscratch, g = u._private.rscratch, p = r.pstyle("curve-style").value, m = r._private.rscratch, b = m.edgeType, w = ur(p, "taxi"), E = b === "self" || b === "compound", C = b === "bezier" || b === "multibezier" || E, x = b !== "bezier", T = b === "straight" || b === "segments", A = b === "segments", k = C || x || T, D = E || w, B = r.pstyle("source-endpoint"), P = D ? "outside-to-node" : B.value, L = o.pstyle("corner-radius").value === "auto" ? "auto" : o.pstyle("corner-radius").pfValue, M = r.pstyle("target-endpoint"), I = D ? "outside-to-node" : M.value, R = u.pstyle("corner-radius").value === "auto" ? "auto" : u.pstyle("corner-radius").pfValue;
  m.srcManEndpt = B, m.tgtManEndpt = M;
  var O, $, H, z, F = (e = (M == null || (t = M.pfValue) === null || t === void 0 ? void 0 : t.length) === 2 ? M.pfValue : null) !== null && e !== void 0 ? e : [0, 0], U = (a = (B == null || (n = B.pfValue) === null || n === void 0 ? void 0 : n.length) === 2 ? B.pfValue : null) !== null && a !== void 0 ? a : [0, 0];
  if (C) {
    var Y = [m.ctrlpts[0], m.ctrlpts[1]], G = x ? [m.ctrlpts[m.ctrlpts.length - 2], m.ctrlpts[m.ctrlpts.length - 1]] : Y;
    O = G, $ = Y;
  } else if (T) {
    var Q = A ? m.segpts.slice(0, 2) : [c.x + F[0], c.y + F[1]], J = A ? m.segpts.slice(m.segpts.length - 2) : [l.x + U[0], l.y + U[1]];
    O = J, $ = Q;
  }
  if (I === "inside-to-node")
    s = [c.x, c.y];
  else if (M.units)
    s = this.manualEndptToPx(u, M);
  else if (I === "outside-to-line")
    s = m.tgtIntn;
  else if (I === "outside-to-node" || I === "outside-to-node-or-label" ? H = O : (I === "outside-to-line" || I === "outside-to-line-or-label") && (H = [l.x, l.y]), s = i.nodeShapes[this.getNodeShape(u)].intersectLine(c.x, c.y, u.outerWidth(), u.outerHeight(), H[0], H[1], 0, R, g), I === "outside-to-node-or-label" || I === "outside-to-line-or-label") {
    var ae = u._private.rscratch, W = ae.labelWidth, N = ae.labelHeight, V = ae.labelX, _ = ae.labelY, K = W / 2, re = N / 2, se = u.pstyle("text-valign").value;
    se === "top" ? _ -= re : se === "bottom" && (_ += re);
    var Te = u.pstyle("text-halign").value;
    Te === "left" ? V -= K : Te === "right" && (V += K);
    var Ce = Wa(H[0], H[1], [V - K, _ - re, V + K, _ - re, V + K, _ + re, V - K, _ + re], c.x, c.y);
    if (Ce.length > 0) {
      var we = l, ye = Br(we, ta(s)), ie = Br(we, ta(Ce)), de = ye;
      if (ie < ye && (s = Ce, de = ie), Ce.length > 2) {
        var he = Br(we, {
          x: Ce[2],
          y: Ce[3]
        });
        he < de && (s = [Ce[2], Ce[3]]);
      }
    }
  }
  var Ee = bn(s, O, i.arrowShapes[v].spacing(r) + h), pe = bn(s, O, i.arrowShapes[v].gap(r) + h);
  if (m.endX = pe[0], m.endY = pe[1], m.arrowEndX = Ee[0], m.arrowEndY = Ee[1], P === "inside-to-node")
    s = [l.x, l.y];
  else if (B.units)
    s = this.manualEndptToPx(o, B);
  else if (P === "outside-to-line")
    s = m.srcIntn;
  else if (P === "outside-to-node" || P === "outside-to-node-or-label" ? z = $ : (P === "outside-to-line" || P === "outside-to-line-or-label") && (z = [c.x, c.y]), s = i.nodeShapes[this.getNodeShape(o)].intersectLine(l.x, l.y, o.outerWidth(), o.outerHeight(), z[0], z[1], 0, L, y), P === "outside-to-node-or-label" || P === "outside-to-line-or-label") {
    var Ae = o._private.rscratch, Le = Ae.labelWidth, Oe = Ae.labelHeight, Ne = Ae.labelX, ze = Ae.labelY, xe = Le / 2, le = Oe / 2, j = o.pstyle("text-valign").value;
    j === "top" ? ze -= le : j === "bottom" && (ze += le);
    var S = o.pstyle("text-halign").value;
    S === "left" ? Ne -= xe : S === "right" && (Ne += xe);
    var q = Wa(z[0], z[1], [Ne - xe, ze - le, Ne + xe, ze - le, Ne + xe, ze + le, Ne - xe, ze + le], l.x, l.y);
    if (q.length > 0) {
      var X = c, Z = Br(X, ta(s)), ee = Br(X, ta(q)), ue = Z;
      if (ee < Z && (s = [q[0], q[1]], ue = ee), q.length > 2) {
        var te = Br(X, {
          x: q[2],
          y: q[3]
        });
        te < ue && (s = [q[2], q[3]]);
      }
    }
  }
  var ve = bn(s, $, i.arrowShapes[f].spacing(r) + d), ce = bn(s, $, i.arrowShapes[f].gap(r) + d);
  m.startX = ce[0], m.startY = ce[1], m.arrowStartX = ve[0], m.arrowStartY = ve[1], k && (!ne(m.startX) || !ne(m.startY) || !ne(m.endX) || !ne(m.endY) ? m.badLine = !0 : m.badLine = !1);
};
ln.getSourceEndpoint = function(r) {
  var e = r[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(r), e.edgeType) {
    case "haystack":
      return {
        x: e.haystackPts[0],
        y: e.haystackPts[1]
      };
    default:
      return {
        x: e.arrowStartX,
        y: e.arrowStartY
      };
  }
};
ln.getTargetEndpoint = function(r) {
  var e = r[0]._private.rscratch;
  switch (this.recalculateRenderedStyle(r), e.edgeType) {
    case "haystack":
      return {
        x: e.haystackPts[2],
        y: e.haystackPts[3]
      };
    default:
      return {
        x: e.arrowEndX,
        y: e.arrowEndY
      };
  }
};
var eu = {};
function C0(r, e, t) {
  for (var a = function(l, c, v, f) {
    return ot(l, c, v, f);
  }, n = e._private, i = n.rstyle.bezierPts, s = 0; s < r.bezierProjPcts.length; s++) {
    var o = r.bezierProjPcts[s];
    i.push({
      x: a(t[0], t[2], t[4], o),
      y: a(t[1], t[3], t[5], o)
    });
  }
}
eu.storeEdgeProjections = function(r) {
  var e = r._private, t = e.rscratch, a = t.edgeType;
  if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
    e.rstyle.bezierPts = [];
    for (var n = 0; n + 5 < t.allpts.length; n += 4)
      C0(this, r, t.allpts.slice(n, n + 6));
  } else if (a === "segments")
    for (var i = e.rstyle.linePts = [], n = 0; n + 1 < t.allpts.length; n += 2)
      i.push({
        x: t.allpts[n],
        y: t.allpts[n + 1]
      });
  else if (a === "haystack") {
    var s = t.haystackPts;
    e.rstyle.haystackPts = [{
      x: s[0],
      y: s[1]
    }, {
      x: s[2],
      y: s[3]
    }];
  }
  e.rstyle.arrowWidth = this.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.arrowShapeWidth;
};
eu.recalculateEdgeProjections = function(r) {
  this.findEdgeControlPoints(r);
};
var Wt = {};
Wt.recalculateNodeLabelProjection = function(r) {
  var e = r.pstyle("label").strValue;
  if (!hr(e)) {
    var t, a, n = r._private, i = r.width(), s = r.height(), o = r.padding(), u = r.position(), l = r.pstyle("text-halign").strValue, c = r.pstyle("text-valign").strValue, v = n.rscratch, f = n.rstyle;
    switch (l) {
      case "left":
        t = u.x - i / 2 - o;
        break;
      case "right":
        t = u.x + i / 2 + o;
        break;
      default:
        t = u.x;
    }
    switch (c) {
      case "top":
        a = u.y - s / 2 - o;
        break;
      case "bottom":
        a = u.y + s / 2 + o;
        break;
      default:
        a = u.y;
    }
    v.labelX = t, v.labelY = a, f.labelX = t, f.labelY = a, this.calculateLabelAngles(r), this.applyLabelDimensions(r);
  }
};
var bf = function(e, t) {
  var a = Math.atan(t / e);
  return e === 0 && a < 0 && (a = a * -1), a;
}, wf = function(e, t) {
  var a = t.x - e.x, n = t.y - e.y;
  return bf(a, n);
}, T0 = function(e, t, a, n) {
  var i = Ga(0, n - 1e-3, 1), s = Ga(0, n + 1e-3, 1), o = na(e, t, a, i), u = na(e, t, a, s);
  return wf(o, u);
};
Wt.recalculateEdgeLabelProjections = function(r) {
  var e, t = r._private, a = t.rscratch, n = this, i = {
    mid: r.pstyle("label").strValue,
    source: r.pstyle("source-label").strValue,
    target: r.pstyle("target-label").strValue
  };
  if (i.mid || i.source || i.target) {
    e = {
      x: a.midX,
      y: a.midY
    };
    var s = function(v, f, h) {
      Qt(t.rscratch, v, f, h), Qt(t.rstyle, v, f, h);
    };
    s("labelX", null, e.x), s("labelY", null, e.y);
    var o = bf(a.midDispX, a.midDispY);
    s("labelAutoAngle", null, o);
    var u = function() {
      if (u.cache)
        return u.cache;
      for (var v = [], f = 0; f + 5 < a.allpts.length; f += 4) {
        var h = {
          x: a.allpts[f],
          y: a.allpts[f + 1]
        }, d = {
          x: a.allpts[f + 2],
          y: a.allpts[f + 3]
        }, y = {
          x: a.allpts[f + 4],
          y: a.allpts[f + 5]
        };
        v.push({
          p0: h,
          p1: d,
          p2: y,
          startDist: 0,
          length: 0,
          segments: []
        });
      }
      var g = t.rstyle.bezierPts, p = n.bezierProjPcts.length;
      function m(x, T, A, k, D) {
        var B = zr(T, A), P = x.segments[x.segments.length - 1], L = {
          p0: T,
          p1: A,
          t0: k,
          t1: D,
          startDist: P ? P.startDist + P.length : 0,
          length: B
        };
        x.segments.push(L), x.length += B;
      }
      for (var b = 0; b < v.length; b++) {
        var w = v[b], E = v[b - 1];
        E && (w.startDist = E.startDist + E.length), m(w, w.p0, g[b * p], 0, n.bezierProjPcts[0]);
        for (var C = 0; C < p - 1; C++)
          m(w, g[b * p + C], g[b * p + C + 1], n.bezierProjPcts[C], n.bezierProjPcts[C + 1]);
        m(w, g[b * p + p - 1], w.p2, n.bezierProjPcts[p - 1], 1);
      }
      return u.cache = v;
    }, l = function(v) {
      var f, h = v === "source";
      if (i[v]) {
        var d = r.pstyle(v + "-text-offset").pfValue;
        switch (a.edgeType) {
          case "self":
          case "compound":
          case "bezier":
          case "multibezier": {
            for (var y = u(), g, p = 0, m = 0, b = 0; b < y.length; b++) {
              for (var w = y[h ? b : y.length - 1 - b], E = 0; E < w.segments.length; E++) {
                var C = w.segments[h ? E : w.segments.length - 1 - E], x = b === y.length - 1 && E === w.segments.length - 1;
                if (p = m, m += C.length, m >= d || x) {
                  g = {
                    cp: w,
                    segment: C
                  };
                  break;
                }
              }
              if (g)
                break;
            }
            var T = g.cp, A = g.segment, k = (d - p) / A.length, D = A.t1 - A.t0, B = h ? A.t0 + D * k : A.t1 - D * k;
            B = Ga(0, B, 1), e = na(T.p0, T.p1, T.p2, B), f = T0(T.p0, T.p1, T.p2, B);
            break;
          }
          case "straight":
          case "segments":
          case "haystack": {
            for (var P = 0, L, M, I, R, O = a.allpts.length, $ = 0; $ + 3 < O && (h ? (I = {
              x: a.allpts[$],
              y: a.allpts[$ + 1]
            }, R = {
              x: a.allpts[$ + 2],
              y: a.allpts[$ + 3]
            }) : (I = {
              x: a.allpts[O - 2 - $],
              y: a.allpts[O - 1 - $]
            }, R = {
              x: a.allpts[O - 4 - $],
              y: a.allpts[O - 3 - $]
            }), L = zr(I, R), M = P, P += L, !(P >= d)); $ += 2)
              ;
            var H = d - M, z = H / L;
            z = Ga(0, z, 1), e = Wh(I, R, z), f = wf(I, R);
            break;
          }
        }
        s("labelX", v, e.x), s("labelY", v, e.y), s("labelAutoAngle", v, f);
      }
    };
    l("source"), l("target"), this.applyLabelDimensions(r);
  }
};
Wt.applyLabelDimensions = function(r) {
  this.applyPrefixedLabelDimensions(r), r.isEdge() && (this.applyPrefixedLabelDimensions(r, "source"), this.applyPrefixedLabelDimensions(r, "target"));
};
Wt.applyPrefixedLabelDimensions = function(r, e) {
  var t = r._private, a = this.getLabelText(r, e), n = Nr(a, r._private.labelDimsKey);
  if (kt(t.rscratch, "prefixedLabelDimsKey", e) !== n) {
    Qt(t.rscratch, "prefixedLabelDimsKey", e, n);
    var i = this.calculateLabelDimensions(r, a), s = r.pstyle("line-height").pfValue, o = r.pstyle("text-wrap").strValue, u = kt(t.rscratch, "labelWrapCachedLines", e) || [], l = o !== "wrap" ? 1 : Math.max(u.length, 1), c = i.height / l, v = c * s, f = i.width, h = i.height + (l - 1) * (s - 1) * c;
    Qt(t.rstyle, "labelWidth", e, f), Qt(t.rscratch, "labelWidth", e, f), Qt(t.rstyle, "labelHeight", e, h), Qt(t.rscratch, "labelHeight", e, h), Qt(t.rscratch, "labelLineHeight", e, v);
  }
};
Wt.getLabelText = function(r, e) {
  var t = r._private, a = e ? e + "-" : "", n = r.pstyle(a + "label").strValue, i = r.pstyle("text-transform").value, s = function(U, Y) {
    return Y ? (Qt(t.rscratch, U, e, Y), Y) : kt(t.rscratch, U, e);
  };
  if (!n)
    return "";
  i == "none" || (i == "uppercase" ? n = n.toUpperCase() : i == "lowercase" && (n = n.toLowerCase()));
  var o = r.pstyle("text-wrap").value;
  if (o === "wrap") {
    var u = s("labelKey");
    if (u != null && s("labelWrapKey") === u)
      return s("labelWrapCachedText");
    for (var l = "​", c = n.split(`
`), v = r.pstyle("text-max-width").pfValue, f = r.pstyle("text-overflow-wrap").value, h = f === "anywhere", d = [], y = /[\s\u200b]+|$/g, g = 0; g < c.length; g++) {
      var p = c[g], m = this.calculateLabelDimensions(r, p), b = m.width;
      if (h) {
        var w = p.split("").join(l);
        p = w;
      }
      if (b > v) {
        var E = p.matchAll(y), C = "", x = 0, T = Bt(E), A;
        try {
          for (T.s(); !(A = T.n()).done; ) {
            var k = A.value, D = k[0], B = p.substring(x, k.index);
            x = k.index + D.length;
            var P = C.length === 0 ? B : C + B + D, L = this.calculateLabelDimensions(r, P), M = L.width;
            M <= v ? C += B + D : (C && d.push(C), C = B + D);
          }
        } catch (F) {
          T.e(F);
        } finally {
          T.f();
        }
        C.match(/^[\s\u200b]+$/) || d.push(C);
      } else
        d.push(p);
    }
    s("labelWrapCachedLines", d), n = s("labelWrapCachedText", d.join(`
`)), s("labelWrapKey", u);
  } else if (o === "ellipsis") {
    var I = r.pstyle("text-max-width").pfValue, R = "", O = "…", $ = !1;
    if (this.calculateLabelDimensions(r, n).width < I)
      return n;
    for (var H = 0; H < n.length; H++) {
      var z = this.calculateLabelDimensions(r, R + n[H] + O).width;
      if (z > I)
        break;
      R += n[H], H === n.length - 1 && ($ = !0);
    }
    return $ || (R += O), R;
  }
  return n;
};
Wt.getLabelJustification = function(r) {
  var e = r.pstyle("text-justification").strValue, t = r.pstyle("text-halign").strValue;
  if (e === "auto")
    if (r.isNode())
      switch (t) {
        case "left":
          return "right";
        case "right":
          return "left";
        default:
          return "center";
      }
    else
      return "center";
  else
    return e;
};
Wt.calculateLabelDimensions = function(r, e) {
  var t = this, a = t.cy.window(), n = a.document, i = 0, s = r.pstyle("font-style").strValue, o = r.pstyle("font-size").pfValue, u = r.pstyle("font-family").strValue, l = r.pstyle("font-weight").strValue, c = this.labelCalcCanvas, v = this.labelCalcCanvasContext;
  if (!c) {
    c = this.labelCalcCanvas = n.createElement("canvas"), v = this.labelCalcCanvasContext = c.getContext("2d");
    var f = c.style;
    f.position = "absolute", f.left = "-9999px", f.top = "-9999px", f.zIndex = "-1", f.visibility = "hidden", f.pointerEvents = "none";
  }
  v.font = "".concat(s, " ").concat(l, " ").concat(o, "px ").concat(u);
  for (var h = 0, d = 0, y = e.split(`
`), g = 0; g < y.length; g++) {
    var p = y[g], m = v.measureText(p), b = Math.ceil(m.width), w = o;
    h = Math.max(b, h), d += w;
  }
  return h += i, d += i, {
    width: h,
    height: d
  };
};
Wt.calculateLabelAngle = function(r, e) {
  var t = r._private, a = t.rscratch, n = r.isEdge(), i = e ? e + "-" : "", s = r.pstyle(i + "text-rotation"), o = s.strValue;
  return o === "none" ? 0 : n && o === "autorotate" ? a.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
};
Wt.calculateLabelAngles = function(r) {
  var e = this, t = r.isEdge(), a = r._private, n = a.rscratch;
  n.labelAngle = e.calculateLabelAngle(r), t && (n.sourceLabelAngle = e.calculateLabelAngle(r, "source"), n.targetLabelAngle = e.calculateLabelAngle(r, "target"));
};
var xf = {}, Ac = 28, kc = !1;
xf.getNodeShape = function(r) {
  var e = this, t = r.pstyle("shape").value;
  if (t === "cutrectangle" && (r.width() < Ac || r.height() < Ac))
    return kc || (Ve("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), kc = !0), "rectangle";
  if (r.isParent())
    return t === "rectangle" || t === "roundrectangle" || t === "round-rectangle" || t === "cutrectangle" || t === "cut-rectangle" || t === "barrel" ? t : "rectangle";
  if (t === "polygon") {
    var a = r.pstyle("shape-polygon-points").value;
    return e.nodeShapes.makePolygon(a).name;
  }
  return t;
};
var Ei = {};
Ei.registerCalculationListeners = function() {
  var r = this.cy, e = r.collection(), t = this, a = function(s) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (e.merge(s), o)
      for (var u = 0; u < s.length; u++) {
        var l = s[u], c = l._private, v = c.rstyle;
        v.clean = !1, v.cleanConnected = !1;
      }
  };
  t.binder(r).on("bounds.* dirty.*", function(s) {
    var o = s.target;
    a(o);
  }).on("style.* background.*", function(s) {
    var o = s.target;
    a(o, !1);
  });
  var n = function(s) {
    if (s) {
      var o = t.onUpdateEleCalcsFns;
      e.cleanStyle();
      for (var u = 0; u < e.length; u++) {
        var l = e[u], c = l._private.rstyle;
        l.isNode() && !c.cleanConnected && (a(l.connectedEdges()), c.cleanConnected = !0);
      }
      if (o)
        for (var v = 0; v < o.length; v++) {
          var f = o[v];
          f(s, e);
        }
      t.recalculateRenderedStyle(e), e = r.collection();
    }
  };
  t.flushRenderedStyleQueue = function() {
    n(!0);
  }, t.beforeRender(n, t.beforeRenderPriorities.eleCalcs);
};
Ei.onUpdateEleCalcs = function(r) {
  var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
  e.push(r);
};
Ei.recalculateRenderedStyle = function(r, e) {
  var t = function(w) {
    return w._private.rstyle.cleanConnected;
  };
  if (r.length !== 0) {
    var a = [], n = [];
    if (!this.destroyed) {
      e === void 0 && (e = !0);
      for (var i = 0; i < r.length; i++) {
        var s = r[i], o = s._private, u = o.rstyle;
        s.isEdge() && (!t(s.source()) || !t(s.target())) && (u.clean = !1), s.isEdge() && s.isBundledBezier() && s.parallelEdges().some(function(b) {
          return !b._private.rstyle.clean && b.isBundledBezier();
        }) && (u.clean = !1), !(e && u.clean || s.removed()) && s.pstyle("display").value !== "none" && (o.group === "nodes" ? n.push(s) : a.push(s), u.clean = !0);
      }
      for (var l = 0; l < n.length; l++) {
        var c = n[l], v = c._private, f = v.rstyle, h = c.position();
        this.recalculateNodeLabelProjection(c), f.nodeX = h.x, f.nodeY = h.y, f.nodeW = c.pstyle("width").pfValue, f.nodeH = c.pstyle("height").pfValue;
      }
      this.recalculateEdgeProjections(a);
      for (var d = 0; d < a.length; d++) {
        var y = a[d], g = y._private, p = g.rstyle, m = g.rscratch;
        p.srcX = m.arrowStartX, p.srcY = m.arrowStartY, p.tgtX = m.arrowEndX, p.tgtY = m.arrowEndY, p.midX = m.midX, p.midY = m.midY, p.labelAngle = m.labelAngle, p.sourceLabelAngle = m.sourceLabelAngle, p.targetLabelAngle = m.targetLabelAngle;
      }
    }
  }
};
var Ci = {};
Ci.updateCachedGrabbedEles = function() {
  var r = this.cachedZSortedEles;
  if (r) {
    r.drag = [], r.nondrag = [];
    for (var e = [], t = 0; t < r.length; t++) {
      var a = r[t], n = a._private.rscratch;
      a.grabbed() && !a.isParent() ? e.push(a) : n.inDragLayer ? r.drag.push(a) : r.nondrag.push(a);
    }
    for (var t = 0; t < e.length; t++) {
      var a = e[t];
      r.drag.push(a);
    }
  }
};
Ci.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
};
Ci.getCachedZSortedEles = function(r) {
  if (r || !this.cachedZSortedEles) {
    var e = this.cy.mutableElements().toArray();
    e.sort(tf), e.interactive = e.filter(function(t) {
      return t.interactive();
    }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
  } else
    e = this.cachedZSortedEles;
  return e;
};
var Ef = {};
[qr, ei, wt, ln, eu, Wt, xf, Ei, Ci].forEach(function(r) {
  be(Ef, r);
});
var Cf = {};
Cf.getCachedImage = function(r, e, t) {
  var a = this, n = a.imageCache = a.imageCache || {}, i = n[r];
  if (i)
    return i.image.complete || i.image.addEventListener("load", t), i.image;
  i = n[r] = n[r] || {};
  var s = i.image = new Image();
  s.addEventListener("load", t), s.addEventListener("error", function() {
    s.error = !0;
  });
  var o = "data:", u = r.substring(0, o.length).toLowerCase() === o;
  return u || (e = e === "null" ? null : e, s.crossOrigin = e), s.src = r, s;
};
var ya = {};
ya.registerBinding = function(r, e, t, a) {
  var n = Array.prototype.slice.apply(arguments, [1]);
  if (Array.isArray(r)) {
    for (var i = [], s = 0; s < r.length; s++) {
      var o = r[s];
      if (o !== void 0) {
        var u = this.binder(o);
        i.push(u.on.apply(u, n));
      }
    }
    return i;
  }
  var u = this.binder(r);
  return u.on.apply(u, n);
};
ya.binder = function(r) {
  var e = this, t = e.cy.window(), a = r === t || r === t.document || r === t.document.body || Nd(r);
  if (e.supportsPassiveEvents == null) {
    var n = !1;
    try {
      var i = Object.defineProperty({}, "passive", {
        get: function() {
          return n = !0, !0;
        }
      });
      t.addEventListener("test", null, i);
    } catch {
    }
    e.supportsPassiveEvents = n;
  }
  var s = function(u, l, c) {
    var v = Array.prototype.slice.call(arguments);
    return a && e.supportsPassiveEvents && (v[2] = {
      capture: c ?? !1,
      passive: !1,
      once: !1
    }), e.bindings.push({
      target: r,
      args: v
    }), (r.addEventListener || r.on).apply(r, v), this;
  };
  return {
    on: s,
    addEventListener: s,
    addListener: s,
    bind: s
  };
};
ya.nodeIsDraggable = function(r) {
  return r && r.isNode() && !r.locked() && r.grabbable();
};
ya.nodeIsGrabbable = function(r) {
  return this.nodeIsDraggable(r) && r.interactive();
};
ya.load = function() {
  var r = this, e = r.cy.window(), t = function(S) {
    return S.selected();
  }, a = function(S) {
    var q = S.getRootNode();
    if (q && q.nodeType === 11 && q.host !== void 0)
      return q;
  }, n = function(S, q, X, Z) {
    S == null && (S = r.cy);
    for (var ee = 0; ee < q.length; ee++) {
      var ue = q[ee];
      S.emit({
        originalEvent: X,
        type: ue,
        position: Z
      });
    }
  }, i = function(S) {
    return S.shiftKey || S.metaKey || S.ctrlKey;
  }, s = function(S, q) {
    var X = !0;
    if (r.cy.hasCompoundNodes() && S && S.pannable())
      for (var Z = 0; q && Z < q.length; Z++) {
        var S = q[Z];
        if (S.isNode() && S.isParent() && !S.pannable()) {
          X = !1;
          break;
        }
      }
    else
      X = !0;
    return X;
  }, o = function(S) {
    S[0]._private.grabbed = !0;
  }, u = function(S) {
    S[0]._private.grabbed = !1;
  }, l = function(S) {
    S[0]._private.rscratch.inDragLayer = !0;
  }, c = function(S) {
    S[0]._private.rscratch.inDragLayer = !1;
  }, v = function(S) {
    S[0]._private.rscratch.isGrabTarget = !0;
  }, f = function(S) {
    S[0]._private.rscratch.isGrabTarget = !1;
  }, h = function(S, q) {
    var X = q.addToList, Z = X.has(S);
    !Z && S.grabbable() && !S.locked() && (X.merge(S), o(S));
  }, d = function(S, q) {
    if (S.cy().hasCompoundNodes() && !(q.inDragLayer == null && q.addToList == null)) {
      var X = S.descendants();
      q.inDragLayer && (X.forEach(l), X.connectedEdges().forEach(l)), q.addToList && h(X, q);
    }
  }, y = function(S, q) {
    q = q || {};
    var X = S.cy().hasCompoundNodes();
    q.inDragLayer && (S.forEach(l), S.neighborhood().stdFilter(function(Z) {
      return !X || Z.isEdge();
    }).forEach(l)), q.addToList && S.forEach(function(Z) {
      h(Z, q);
    }), d(S, q), m(S, {
      inDragLayer: q.inDragLayer
    }), r.updateCachedGrabbedEles();
  }, g = y, p = function(S) {
    S && (r.getCachedZSortedEles().forEach(function(q) {
      u(q), c(q), f(q);
    }), r.updateCachedGrabbedEles());
  }, m = function(S, q) {
    if (!(q.inDragLayer == null && q.addToList == null) && S.cy().hasCompoundNodes()) {
      var X = S.ancestors().orphans();
      if (!X.same(S)) {
        var Z = X.descendants().spawnSelf().merge(X).unmerge(S).unmerge(S.descendants()), ee = Z.connectedEdges();
        q.inDragLayer && (ee.forEach(l), Z.forEach(l)), q.addToList && Z.forEach(function(ue) {
          h(ue, q);
        });
      }
    }
  }, b = function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, w = typeof MutationObserver < "u", E = typeof ResizeObserver < "u";
  w ? (r.removeObserver = new MutationObserver(function(j) {
    for (var S = 0; S < j.length; S++) {
      var q = j[S], X = q.removedNodes;
      if (X)
        for (var Z = 0; Z < X.length; Z++) {
          var ee = X[Z];
          if (ee === r.container) {
            r.destroy();
            break;
          }
        }
    }
  }), r.container.parentNode && r.removeObserver.observe(r.container.parentNode, {
    childList: !0
  })) : r.registerBinding(r.container, "DOMNodeRemoved", function(j) {
    r.destroy();
  });
  var C = nn(function() {
    r.cy.resize();
  }, 100);
  w && (r.styleObserver = new MutationObserver(C), r.styleObserver.observe(r.container, {
    attributes: !0
  })), r.registerBinding(e, "resize", C), E && (r.resizeObserver = new ResizeObserver(C), r.resizeObserver.observe(r.container));
  var x = function(S, q) {
    for (; S != null; )
      q(S), S = S.parentNode;
  }, T = function() {
    r.invalidateContainerClientCoordsCache();
  };
  x(r.container, function(j) {
    r.registerBinding(j, "transitionend", T), r.registerBinding(j, "animationend", T), r.registerBinding(j, "scroll", T);
  }), r.registerBinding(r.container, "contextmenu", function(j) {
    j.preventDefault();
  });
  var A = function() {
    return r.selection[4] !== 0;
  }, k = function(S) {
    for (var q = r.findContainerClientCoords(), X = q[0], Z = q[1], ee = q[2], ue = q[3], te = S.touches ? S.touches : [S], ve = !1, ce = 0; ce < te.length; ce++) {
      var me = te[ce];
      if (X <= me.clientX && me.clientX <= X + ee && Z <= me.clientY && me.clientY <= Z + ue) {
        ve = !0;
        break;
      }
    }
    if (!ve)
      return !1;
    for (var De = r.container, Se = S.target, fe = Se.parentNode, Pe = !1; fe; ) {
      if (fe === De) {
        Pe = !0;
        break;
      }
      fe = fe.parentNode;
    }
    return !!Pe;
  };
  r.registerBinding(r.container, "mousedown", function(S) {
    if (k(S) && !(r.hoverData.which === 1 && S.which !== 1)) {
      S.preventDefault(), b(), r.hoverData.capture = !0, r.hoverData.which = S.which;
      var q = r.cy, X = [S.clientX, S.clientY], Z = r.projectIntoViewport(X[0], X[1]), ee = r.selection, ue = r.findNearestElements(Z[0], Z[1], !0, !1), te = ue[0], ve = r.dragData.possibleDragElements;
      r.hoverData.mdownPos = Z, r.hoverData.mdownGPos = X;
      var ce = function(Be) {
        return {
          originalEvent: S,
          type: Be,
          position: {
            x: Z[0],
            y: Z[1]
          }
        };
      }, me = function() {
        r.hoverData.tapholdCancelled = !1, clearTimeout(r.hoverData.tapholdTimeout), r.hoverData.tapholdTimeout = setTimeout(function() {
          if (!r.hoverData.tapholdCancelled) {
            var Be = r.hoverData.down;
            Be ? Be.emit(ce("taphold")) : q.emit(ce("taphold"));
          }
        }, r.tapholdDuration);
      };
      if (S.which == 3) {
        r.hoverData.cxtStarted = !0;
        var De = {
          originalEvent: S,
          type: "cxttapstart",
          position: {
            x: Z[0],
            y: Z[1]
          }
        };
        te ? (te.activate(), te.emit(De), r.hoverData.down = te) : q.emit(De), r.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), r.hoverData.cxtDragged = !1;
      } else if (S.which == 1) {
        te && te.activate();
        {
          if (te != null && r.nodeIsGrabbable(te)) {
            var Se = function(Be) {
              Be.emit(ce("grab"));
            };
            if (v(te), !te.selected())
              ve = r.dragData.possibleDragElements = q.collection(), g(te, {
                addToList: ve
              }), te.emit(ce("grabon")).emit(ce("grab"));
            else {
              ve = r.dragData.possibleDragElements = q.collection();
              var fe = q.$(function(Pe) {
                return Pe.isNode() && Pe.selected() && r.nodeIsGrabbable(Pe);
              });
              y(fe, {
                addToList: ve
              }), te.emit(ce("grabon")), fe.forEach(Se);
            }
            r.redrawHint("eles", !0), r.redrawHint("drag", !0);
          }
          r.hoverData.down = te, r.hoverData.downs = ue, r.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime();
        }
        n(te, ["mousedown", "tapstart", "vmousedown"], S, {
          x: Z[0],
          y: Z[1]
        }), te == null ? (ee[4] = 1, r.data.bgActivePosistion = {
          x: Z[0],
          y: Z[1]
        }, r.redrawHint("select", !0), r.redraw()) : te.pannable() && (ee[4] = 1), me();
      }
      ee[0] = ee[2] = Z[0], ee[1] = ee[3] = Z[1];
    }
  }, !1);
  var D = a(r.container);
  r.registerBinding([e, D], "mousemove", function(S) {
    var q = r.hoverData.capture;
    if (!(!q && !k(S))) {
      var X = !1, Z = r.cy, ee = Z.zoom(), ue = [S.clientX, S.clientY], te = r.projectIntoViewport(ue[0], ue[1]), ve = r.hoverData.mdownPos, ce = r.hoverData.mdownGPos, me = r.selection, De = null;
      !r.hoverData.draggingEles && !r.hoverData.dragging && !r.hoverData.selecting && (De = r.findNearestElement(te[0], te[1], !0, !1));
      var Se = r.hoverData.last, fe = r.hoverData.down, Pe = [te[0] - me[2], te[1] - me[3]], Be = r.dragData.possibleDragElements, et;
      if (ce) {
        var Xe = ue[0] - ce[0], xt = Xe * Xe, Ze = ue[1] - ce[1], st = Ze * Ze, tt = xt + st;
        r.hoverData.isOverThresholdDrag = et = tt >= r.desktopTapThreshold2;
      }
      var vt = i(S);
      et && (r.hoverData.tapholdCancelled = !0);
      var ar = function() {
        var Lt = r.hoverData.dragDelta = r.hoverData.dragDelta || [];
        Lt.length === 0 ? (Lt.push(Pe[0]), Lt.push(Pe[1])) : (Lt[0] += Pe[0], Lt[1] += Pe[1]);
      };
      X = !0, n(De, ["mousemove", "vmousemove", "tapdrag"], S, {
        x: te[0],
        y: te[1]
      });
      var Qe = function(Lt) {
        return {
          originalEvent: S,
          type: Lt,
          position: {
            x: te[0],
            y: te[1]
          }
        };
      }, Xt = function() {
        r.data.bgActivePosistion = void 0, r.hoverData.selecting || Z.emit(Qe("boxstart")), me[4] = 1, r.hoverData.selecting = !0, r.redrawHint("select", !0), r.redraw();
      };
      if (r.hoverData.which === 3) {
        if (et) {
          var Yt = Qe("cxtdrag");
          fe ? fe.emit(Yt) : Z.emit(Yt), r.hoverData.cxtDragged = !0, (!r.hoverData.cxtOver || De !== r.hoverData.cxtOver) && (r.hoverData.cxtOver && r.hoverData.cxtOver.emit(Qe("cxtdragout")), r.hoverData.cxtOver = De, De && De.emit(Qe("cxtdragover")));
        }
      } else if (r.hoverData.dragging) {
        if (X = !0, Z.panningEnabled() && Z.userPanningEnabled()) {
          var Ur;
          if (r.hoverData.justStartedPan) {
            var hn = r.hoverData.mdownPos;
            Ur = {
              x: (te[0] - hn[0]) * ee,
              y: (te[1] - hn[1]) * ee
            }, r.hoverData.justStartedPan = !1;
          } else
            Ur = {
              x: Pe[0] * ee,
              y: Pe[1] * ee
            };
          Z.panBy(Ur), Z.emit(Qe("dragpan")), r.hoverData.dragged = !0;
        }
        te = r.projectIntoViewport(S.clientX, S.clientY);
      } else if (me[4] == 1 && (fe == null || fe.pannable())) {
        if (et) {
          if (!r.hoverData.dragging && Z.boxSelectionEnabled() && (vt || !Z.panningEnabled() || !Z.userPanningEnabled()))
            Xt();
          else if (!r.hoverData.selecting && Z.panningEnabled() && Z.userPanningEnabled()) {
            var Sr = s(fe, r.hoverData.downs);
            Sr && (r.hoverData.dragging = !0, r.hoverData.justStartedPan = !0, me[4] = 0, r.data.bgActivePosistion = ta(ve), r.redrawHint("select", !0), r.redraw());
          }
          fe && fe.pannable() && fe.active() && fe.unactivate();
        }
      } else {
        if (fe && fe.pannable() && fe.active() && fe.unactivate(), (!fe || !fe.grabbed()) && De != Se && (Se && n(Se, ["mouseout", "tapdragout"], S, {
          x: te[0],
          y: te[1]
        }), De && n(De, ["mouseover", "tapdragover"], S, {
          x: te[0],
          y: te[1]
        }), r.hoverData.last = De), fe)
          if (et) {
            if (Z.boxSelectionEnabled() && vt)
              fe && fe.grabbed() && (p(Be), fe.emit(Qe("freeon")), Be.emit(Qe("free")), r.dragData.didDrag && (fe.emit(Qe("dragfreeon")), Be.emit(Qe("dragfree")))), Xt();
            else if (fe && fe.grabbed() && r.nodeIsDraggable(fe)) {
              var St = !r.dragData.didDrag;
              St && r.redrawHint("eles", !0), r.dragData.didDrag = !0, r.hoverData.draggingEles || y(Be, {
                inDragLayer: !0
              });
              var yt = {
                x: 0,
                y: 0
              };
              if (ne(Pe[0]) && ne(Pe[1]) && (yt.x += Pe[0], yt.y += Pe[1], St)) {
                var At = r.hoverData.dragDelta;
                At && ne(At[0]) && ne(At[1]) && (yt.x += At[0], yt.y += At[1]);
              }
              r.hoverData.draggingEles = !0, Be.silentShift(yt).emit(Qe("position")).emit(Qe("drag")), r.redrawHint("drag", !0), r.redraw();
            }
          } else
            ar();
        X = !0;
      }
      if (me[2] = te[0], me[3] = te[1], X)
        return S.stopPropagation && S.stopPropagation(), S.preventDefault && S.preventDefault(), !1;
    }
  }, !1);
  var B, P, L;
  r.registerBinding(e, "mouseup", function(S) {
    if (!(r.hoverData.which === 1 && S.which !== 1 && r.hoverData.capture)) {
      var q = r.hoverData.capture;
      if (q) {
        r.hoverData.capture = !1;
        var X = r.cy, Z = r.projectIntoViewport(S.clientX, S.clientY), ee = r.selection, ue = r.findNearestElement(Z[0], Z[1], !0, !1), te = r.dragData.possibleDragElements, ve = r.hoverData.down, ce = i(S);
        r.data.bgActivePosistion && (r.redrawHint("select", !0), r.redraw()), r.hoverData.tapholdCancelled = !0, r.data.bgActivePosistion = void 0, ve && ve.unactivate();
        var me = function(Xe) {
          return {
            originalEvent: S,
            type: Xe,
            position: {
              x: Z[0],
              y: Z[1]
            }
          };
        };
        if (r.hoverData.which === 3) {
          var De = me("cxttapend");
          if (ve ? ve.emit(De) : X.emit(De), !r.hoverData.cxtDragged) {
            var Se = me("cxttap");
            ve ? ve.emit(Se) : X.emit(Se);
          }
          r.hoverData.cxtDragged = !1, r.hoverData.which = null;
        } else if (r.hoverData.which === 1) {
          if (n(ue, ["mouseup", "tapend", "vmouseup"], S, {
            x: Z[0],
            y: Z[1]
          }), !r.dragData.didDrag && // didn't move a node around
          !r.hoverData.dragged && // didn't pan
          !r.hoverData.selecting && // not box selection
          !r.hoverData.isOverThresholdDrag && (n(ve, ["click", "tap", "vclick"], S, {
            x: Z[0],
            y: Z[1]
          }), P = !1, S.timeStamp - L <= X.multiClickDebounceTime() ? (B && clearTimeout(B), P = !0, L = null, n(ve, ["dblclick", "dbltap", "vdblclick"], S, {
            x: Z[0],
            y: Z[1]
          })) : (B = setTimeout(function() {
            P || n(ve, ["oneclick", "onetap", "voneclick"], S, {
              x: Z[0],
              y: Z[1]
            });
          }, X.multiClickDebounceTime()), L = S.timeStamp)), ve == null && !r.dragData.didDrag && !r.hoverData.selecting && !r.hoverData.dragged && !i(S) && (X.$(t).unselect(["tapunselect"]), te.length > 0 && r.redrawHint("eles", !0), r.dragData.possibleDragElements = te = X.collection()), ue == ve && !r.dragData.didDrag && !r.hoverData.selecting && ue != null && ue._private.selectable && (r.hoverData.dragging || (X.selectionType() === "additive" || ce ? ue.selected() ? ue.unselect(["tapunselect"]) : ue.select(["tapselect"]) : ce || (X.$(t).unmerge(ue).unselect(["tapunselect"]), ue.select(["tapselect"]))), r.redrawHint("eles", !0)), r.hoverData.selecting) {
            var fe = X.collection(r.getAllInBox(ee[0], ee[1], ee[2], ee[3]));
            r.redrawHint("select", !0), fe.length > 0 && r.redrawHint("eles", !0), X.emit(me("boxend"));
            var Pe = function(Xe) {
              return Xe.selectable() && !Xe.selected();
            };
            X.selectionType() === "additive" || ce || X.$(t).unmerge(fe).unselect(), fe.emit(me("box")).stdFilter(Pe).select().emit(me("boxselect")), r.redraw();
          }
          if (r.hoverData.dragging && (r.hoverData.dragging = !1, r.redrawHint("select", !0), r.redrawHint("eles", !0), r.redraw()), !ee[4]) {
            r.redrawHint("drag", !0), r.redrawHint("eles", !0);
            var Be = ve && ve.grabbed();
            p(te), Be && (ve.emit(me("freeon")), te.emit(me("free")), r.dragData.didDrag && (ve.emit(me("dragfreeon")), te.emit(me("dragfree"))));
          }
        }
        ee[4] = 0, r.hoverData.down = null, r.hoverData.cxtStarted = !1, r.hoverData.draggingEles = !1, r.hoverData.selecting = !1, r.hoverData.isOverThresholdDrag = !1, r.dragData.didDrag = !1, r.hoverData.dragged = !1, r.hoverData.dragDelta = [], r.hoverData.mdownPos = null, r.hoverData.mdownGPos = null, r.hoverData.which = null;
      }
    }
  }, !1);
  var M = [], I = 4, R, O = 1e5, $ = function(S, q) {
    for (var X = 0; X < S.length; X++)
      if (S[X] % q !== 0)
        return !1;
    return !0;
  }, H = function(S) {
    for (var q = Math.abs(S[0]), X = 1; X < S.length; X++)
      if (Math.abs(S[X]) !== q)
        return !1;
    return !0;
  }, z = function(S) {
    var q = !1, X = S.deltaY;
    if (X == null && (S.wheelDeltaY != null ? X = S.wheelDeltaY / 4 : S.wheelDelta != null && (X = S.wheelDelta / 4)), X !== 0) {
      if (R == null)
        if (M.length >= I) {
          var Z = M;
          if (R = $(Z, 5), !R) {
            var ee = Math.abs(Z[0]);
            R = H(Z) && ee > 5;
          }
          if (R)
            for (var ue = 0; ue < Z.length; ue++)
              O = Math.min(Math.abs(Z[ue]), O);
        } else
          M.push(X), q = !0;
      else
        R && (O = Math.min(Math.abs(X), O));
      if (!r.scrollingPage) {
        var te = r.cy, ve = te.zoom(), ce = te.pan(), me = r.projectIntoViewport(S.clientX, S.clientY), De = [me[0] * ve + ce.x, me[1] * ve + ce.y];
        if (r.hoverData.draggingEles || r.hoverData.dragging || r.hoverData.cxtStarted || A()) {
          S.preventDefault();
          return;
        }
        if (te.panningEnabled() && te.userPanningEnabled() && te.zoomingEnabled() && te.userZoomingEnabled()) {
          S.preventDefault(), r.data.wheelZooming = !0, clearTimeout(r.data.wheelTimeout), r.data.wheelTimeout = setTimeout(function() {
            r.data.wheelZooming = !1, r.redrawHint("eles", !0), r.redraw();
          }, 150);
          var Se;
          q && Math.abs(X) > 5 && (X = $o(X) * 5), Se = X / -250, R && (Se /= O, Se *= 3), Se = Se * r.wheelSensitivity;
          var fe = S.deltaMode === 1;
          fe && (Se *= 33);
          var Pe = te.zoom() * Math.pow(10, Se);
          S.type === "gesturechange" && (Pe = r.gestureStartZoom * S.scale), te.zoom({
            level: Pe,
            renderedPosition: {
              x: De[0],
              y: De[1]
            }
          }), te.emit({
            type: S.type === "gesturechange" ? "pinchzoom" : "scrollzoom",
            originalEvent: S,
            position: {
              x: me[0],
              y: me[1]
            }
          });
        }
      }
    }
  };
  r.registerBinding(r.container, "wheel", z, !0), r.registerBinding(e, "scroll", function(S) {
    r.scrollingPage = !0, clearTimeout(r.scrollingPageTimeout), r.scrollingPageTimeout = setTimeout(function() {
      r.scrollingPage = !1;
    }, 250);
  }, !0), r.registerBinding(r.container, "gesturestart", function(S) {
    r.gestureStartZoom = r.cy.zoom(), r.hasTouchStarted || S.preventDefault();
  }, !0), r.registerBinding(r.container, "gesturechange", function(j) {
    r.hasTouchStarted || z(j);
  }, !0), r.registerBinding(r.container, "mouseout", function(S) {
    var q = r.projectIntoViewport(S.clientX, S.clientY);
    r.cy.emit({
      originalEvent: S,
      type: "mouseout",
      position: {
        x: q[0],
        y: q[1]
      }
    });
  }, !1), r.registerBinding(r.container, "mouseover", function(S) {
    var q = r.projectIntoViewport(S.clientX, S.clientY);
    r.cy.emit({
      originalEvent: S,
      type: "mouseover",
      position: {
        x: q[0],
        y: q[1]
      }
    });
  }, !1);
  var F, U, Y, G, Q, J, ae, W, N, V, _, K, re, se = function(S, q, X, Z) {
    return Math.sqrt((X - S) * (X - S) + (Z - q) * (Z - q));
  }, Te = function(S, q, X, Z) {
    return (X - S) * (X - S) + (Z - q) * (Z - q);
  }, Ce;
  r.registerBinding(r.container, "touchstart", Ce = function(S) {
    if (r.hasTouchStarted = !0, !!k(S)) {
      b(), r.touchData.capture = !0, r.data.bgActivePosistion = void 0;
      var q = r.cy, X = r.touchData.now, Z = r.touchData.earlier;
      if (S.touches[0]) {
        var ee = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
        X[0] = ee[0], X[1] = ee[1];
      }
      if (S.touches[1]) {
        var ee = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
        X[2] = ee[0], X[3] = ee[1];
      }
      if (S.touches[2]) {
        var ee = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
        X[4] = ee[0], X[5] = ee[1];
      }
      var ue = function(vt) {
        return {
          originalEvent: S,
          type: vt,
          position: {
            x: X[0],
            y: X[1]
          }
        };
      };
      if (S.touches[1]) {
        r.touchData.singleTouchMoved = !0, p(r.dragData.touchDragEles);
        var te = r.findContainerClientCoords();
        N = te[0], V = te[1], _ = te[2], K = te[3], F = S.touches[0].clientX - N, U = S.touches[0].clientY - V, Y = S.touches[1].clientX - N, G = S.touches[1].clientY - V, re = 0 <= F && F <= _ && 0 <= Y && Y <= _ && 0 <= U && U <= K && 0 <= G && G <= K;
        var ve = q.pan(), ce = q.zoom();
        Q = se(F, U, Y, G), J = Te(F, U, Y, G), ae = [(F + Y) / 2, (U + G) / 2], W = [(ae[0] - ve.x) / ce, (ae[1] - ve.y) / ce];
        var me = 200, De = me * me;
        if (J < De && !S.touches[2]) {
          var Se = r.findNearestElement(X[0], X[1], !0, !0), fe = r.findNearestElement(X[2], X[3], !0, !0);
          Se && Se.isNode() ? (Se.activate().emit(ue("cxttapstart")), r.touchData.start = Se) : fe && fe.isNode() ? (fe.activate().emit(ue("cxttapstart")), r.touchData.start = fe) : q.emit(ue("cxttapstart")), r.touchData.start && (r.touchData.start._private.grabbed = !1), r.touchData.cxt = !0, r.touchData.cxtDragged = !1, r.data.bgActivePosistion = void 0, r.redraw();
          return;
        }
      }
      if (S.touches[2])
        q.boxSelectionEnabled() && S.preventDefault();
      else if (!S.touches[1]) {
        if (S.touches[0]) {
          var Pe = r.findNearestElements(X[0], X[1], !0, !0), Be = Pe[0];
          if (Be != null && (Be.activate(), r.touchData.start = Be, r.touchData.starts = Pe, r.nodeIsGrabbable(Be))) {
            var et = r.dragData.touchDragEles = q.collection(), Xe = null;
            r.redrawHint("eles", !0), r.redrawHint("drag", !0), Be.selected() ? (Xe = q.$(function(tt) {
              return tt.selected() && r.nodeIsGrabbable(tt);
            }), y(Xe, {
              addToList: et
            })) : g(Be, {
              addToList: et
            }), v(Be), Be.emit(ue("grabon")), Xe ? Xe.forEach(function(tt) {
              tt.emit(ue("grab"));
            }) : Be.emit(ue("grab"));
          }
          n(Be, ["touchstart", "tapstart", "vmousedown"], S, {
            x: X[0],
            y: X[1]
          }), Be == null && (r.data.bgActivePosistion = {
            x: ee[0],
            y: ee[1]
          }, r.redrawHint("select", !0), r.redraw()), r.touchData.singleTouchMoved = !1, r.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(r.touchData.tapholdTimeout), r.touchData.tapholdTimeout = setTimeout(function() {
            r.touchData.singleTouchMoved === !1 && !r.pinching && !r.touchData.selecting && n(r.touchData.start, ["taphold"], S, {
              x: X[0],
              y: X[1]
            });
          }, r.tapholdDuration);
        }
      }
      if (S.touches.length >= 1) {
        for (var xt = r.touchData.startPosition = [null, null, null, null, null, null], Ze = 0; Ze < X.length; Ze++)
          xt[Ze] = Z[Ze] = X[Ze];
        var st = S.touches[0];
        r.touchData.startGPosition = [st.clientX, st.clientY];
      }
    }
  }, !1);
  var we;
  r.registerBinding(e, "touchmove", we = function(S) {
    var q = r.touchData.capture;
    if (!(!q && !k(S))) {
      var X = r.selection, Z = r.cy, ee = r.touchData.now, ue = r.touchData.earlier, te = Z.zoom();
      if (S.touches[0]) {
        var ve = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
        ee[0] = ve[0], ee[1] = ve[1];
      }
      if (S.touches[1]) {
        var ve = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
        ee[2] = ve[0], ee[3] = ve[1];
      }
      if (S.touches[2]) {
        var ve = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
        ee[4] = ve[0], ee[5] = ve[1];
      }
      var ce = function(ed) {
        return {
          originalEvent: S,
          type: ed,
          position: {
            x: ee[0],
            y: ee[1]
          }
        };
      }, me = r.touchData.startGPosition, De;
      if (q && S.touches[0] && me) {
        for (var Se = [], fe = 0; fe < ee.length; fe++)
          Se[fe] = ee[fe] - ue[fe];
        var Pe = S.touches[0].clientX - me[0], Be = Pe * Pe, et = S.touches[0].clientY - me[1], Xe = et * et, xt = Be + Xe;
        De = xt >= r.touchTapThreshold2;
      }
      if (q && r.touchData.cxt) {
        S.preventDefault();
        var Ze = S.touches[0].clientX - N, st = S.touches[0].clientY - V, tt = S.touches[1].clientX - N, vt = S.touches[1].clientY - V, ar = Te(Ze, st, tt, vt), Qe = ar / J, Xt = 150, Yt = Xt * Xt, Ur = 1.5, hn = Ur * Ur;
        if (Qe >= hn || ar >= Yt) {
          r.touchData.cxt = !1, r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
          var Sr = ce("cxttapend");
          r.touchData.start ? (r.touchData.start.unactivate().emit(Sr), r.touchData.start = null) : Z.emit(Sr);
        }
      }
      if (q && r.touchData.cxt) {
        var Sr = ce("cxtdrag");
        r.data.bgActivePosistion = void 0, r.redrawHint("select", !0), r.touchData.start ? r.touchData.start.emit(Sr) : Z.emit(Sr), r.touchData.start && (r.touchData.start._private.grabbed = !1), r.touchData.cxtDragged = !0;
        var St = r.findNearestElement(ee[0], ee[1], !0, !0);
        (!r.touchData.cxtOver || St !== r.touchData.cxtOver) && (r.touchData.cxtOver && r.touchData.cxtOver.emit(ce("cxtdragout")), r.touchData.cxtOver = St, St && St.emit(ce("cxtdragover")));
      } else if (q && S.touches[2] && Z.boxSelectionEnabled())
        S.preventDefault(), r.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), r.touchData.selecting || Z.emit(ce("boxstart")), r.touchData.selecting = !0, r.touchData.didSelect = !0, X[4] = 1, !X || X.length === 0 || X[0] === void 0 ? (X[0] = (ee[0] + ee[2] + ee[4]) / 3, X[1] = (ee[1] + ee[3] + ee[5]) / 3, X[2] = (ee[0] + ee[2] + ee[4]) / 3 + 1, X[3] = (ee[1] + ee[3] + ee[5]) / 3 + 1) : (X[2] = (ee[0] + ee[2] + ee[4]) / 3, X[3] = (ee[1] + ee[3] + ee[5]) / 3), r.redrawHint("select", !0), r.redraw();
      else if (q && S.touches[1] && !r.touchData.didSelect && Z.zoomingEnabled() && Z.panningEnabled() && Z.userZoomingEnabled() && Z.userPanningEnabled()) {
        S.preventDefault(), r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
        var yt = r.dragData.touchDragEles;
        if (yt) {
          r.redrawHint("drag", !0);
          for (var At = 0; At < yt.length; At++) {
            var ba = yt[At]._private;
            ba.grabbed = !1, ba.rscratch.inDragLayer = !1;
          }
        }
        var Lt = r.touchData.start, Ze = S.touches[0].clientX - N, st = S.touches[0].clientY - V, tt = S.touches[1].clientX - N, vt = S.touches[1].clientY - V, au = se(Ze, st, tt, vt), Gf = au / Q;
        if (re) {
          var Wf = Ze - F, Kf = st - U, Xf = tt - Y, Yf = vt - G, Zf = (Wf + Xf) / 2, Qf = (Kf + Yf) / 2, wa = Z.zoom(), Si = wa * Gf, gn = Z.pan(), nu = W[0] * wa + gn.x, iu = W[1] * wa + gn.y, Jf = {
            x: -Si / wa * (nu - gn.x - Zf) + nu,
            y: -Si / wa * (iu - gn.y - Qf) + iu
          };
          if (Lt && Lt.active()) {
            var yt = r.dragData.touchDragEles;
            p(yt), r.redrawHint("drag", !0), r.redrawHint("eles", !0), Lt.unactivate().emit(ce("freeon")), yt.emit(ce("free")), r.dragData.didDrag && (Lt.emit(ce("dragfreeon")), yt.emit(ce("dragfree")));
          }
          Z.viewport({
            zoom: Si,
            pan: Jf,
            cancelOnFailedZoom: !0
          }), Z.emit(ce("pinchzoom")), Q = au, F = Ze, U = st, Y = tt, G = vt, r.pinching = !0;
        }
        if (S.touches[0]) {
          var ve = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
          ee[0] = ve[0], ee[1] = ve[1];
        }
        if (S.touches[1]) {
          var ve = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
          ee[2] = ve[0], ee[3] = ve[1];
        }
        if (S.touches[2]) {
          var ve = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
          ee[4] = ve[0], ee[5] = ve[1];
        }
      } else if (S.touches[0] && !r.touchData.didSelect) {
        var Ot = r.touchData.start, Ai = r.touchData.last, St;
        if (!r.hoverData.draggingEles && !r.swipePanning && (St = r.findNearestElement(ee[0], ee[1], !0, !0)), q && Ot != null && S.preventDefault(), q && Ot != null && r.nodeIsDraggable(Ot))
          if (De) {
            var yt = r.dragData.touchDragEles, su = !r.dragData.didDrag;
            su && y(yt, {
              inDragLayer: !0
            }), r.dragData.didDrag = !0;
            var xa = {
              x: 0,
              y: 0
            };
            if (ne(Se[0]) && ne(Se[1]) && (xa.x += Se[0], xa.y += Se[1], su)) {
              r.redrawHint("eles", !0);
              var Nt = r.touchData.dragDelta;
              Nt && ne(Nt[0]) && ne(Nt[1]) && (xa.x += Nt[0], xa.y += Nt[1]);
            }
            r.hoverData.draggingEles = !0, yt.silentShift(xa).emit(ce("position")).emit(ce("drag")), r.redrawHint("drag", !0), r.touchData.startPosition[0] == ue[0] && r.touchData.startPosition[1] == ue[1] && r.redrawHint("eles", !0), r.redraw();
          } else {
            var Nt = r.touchData.dragDelta = r.touchData.dragDelta || [];
            Nt.length === 0 ? (Nt.push(Se[0]), Nt.push(Se[1])) : (Nt[0] += Se[0], Nt[1] += Se[1]);
          }
        if (n(Ot || St, ["touchmove", "tapdrag", "vmousemove"], S, {
          x: ee[0],
          y: ee[1]
        }), (!Ot || !Ot.grabbed()) && St != Ai && (Ai && Ai.emit(ce("tapdragout")), St && St.emit(ce("tapdragover"))), r.touchData.last = St, q)
          for (var At = 0; At < ee.length; At++)
            ee[At] && r.touchData.startPosition[At] && De && (r.touchData.singleTouchMoved = !0);
        if (q && (Ot == null || Ot.pannable()) && Z.panningEnabled() && Z.userPanningEnabled()) {
          var jf = s(Ot, r.touchData.starts);
          jf && (S.preventDefault(), r.data.bgActivePosistion || (r.data.bgActivePosistion = ta(r.touchData.startPosition)), r.swipePanning ? (Z.panBy({
            x: Se[0] * te,
            y: Se[1] * te
          }), Z.emit(ce("dragpan"))) : De && (r.swipePanning = !0, Z.panBy({
            x: Pe * te,
            y: et * te
          }), Z.emit(ce("dragpan")), Ot && (Ot.unactivate(), r.redrawHint("select", !0), r.touchData.start = null)));
          var ve = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
          ee[0] = ve[0], ee[1] = ve[1];
        }
      }
      for (var fe = 0; fe < ee.length; fe++)
        ue[fe] = ee[fe];
      q && S.touches.length > 0 && !r.hoverData.draggingEles && !r.swipePanning && r.data.bgActivePosistion != null && (r.data.bgActivePosistion = void 0, r.redrawHint("select", !0), r.redraw());
    }
  }, !1);
  var ye;
  r.registerBinding(e, "touchcancel", ye = function(S) {
    var q = r.touchData.start;
    r.touchData.capture = !1, q && q.unactivate();
  });
  var ie, de, he, Ee;
  if (r.registerBinding(e, "touchend", ie = function(S) {
    var q = r.touchData.start, X = r.touchData.capture;
    if (X)
      S.touches.length === 0 && (r.touchData.capture = !1), S.preventDefault();
    else
      return;
    var Z = r.selection;
    r.swipePanning = !1, r.hoverData.draggingEles = !1;
    var ee = r.cy, ue = ee.zoom(), te = r.touchData.now, ve = r.touchData.earlier;
    if (S.touches[0]) {
      var ce = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
      te[0] = ce[0], te[1] = ce[1];
    }
    if (S.touches[1]) {
      var ce = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
      te[2] = ce[0], te[3] = ce[1];
    }
    if (S.touches[2]) {
      var ce = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
      te[4] = ce[0], te[5] = ce[1];
    }
    var me = function(Yt) {
      return {
        originalEvent: S,
        type: Yt,
        position: {
          x: te[0],
          y: te[1]
        }
      };
    };
    q && q.unactivate();
    var De;
    if (r.touchData.cxt) {
      if (De = me("cxttapend"), q ? q.emit(De) : ee.emit(De), !r.touchData.cxtDragged) {
        var Se = me("cxttap");
        q ? q.emit(Se) : ee.emit(Se);
      }
      r.touchData.start && (r.touchData.start._private.grabbed = !1), r.touchData.cxt = !1, r.touchData.start = null, r.redraw();
      return;
    }
    if (!S.touches[2] && ee.boxSelectionEnabled() && r.touchData.selecting) {
      r.touchData.selecting = !1;
      var fe = ee.collection(r.getAllInBox(Z[0], Z[1], Z[2], Z[3]));
      Z[0] = void 0, Z[1] = void 0, Z[2] = void 0, Z[3] = void 0, Z[4] = 0, r.redrawHint("select", !0), ee.emit(me("boxend"));
      var Pe = function(Yt) {
        return Yt.selectable() && !Yt.selected();
      };
      fe.emit(me("box")).stdFilter(Pe).select().emit(me("boxselect")), fe.nonempty() && r.redrawHint("eles", !0), r.redraw();
    }
    if (q != null && q.unactivate(), S.touches[2])
      r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
    else if (!S.touches[1]) {
      if (!S.touches[0]) {
        if (!S.touches[0]) {
          r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
          var Be = r.dragData.touchDragEles;
          if (q != null) {
            var et = q._private.grabbed;
            p(Be), r.redrawHint("drag", !0), r.redrawHint("eles", !0), et && (q.emit(me("freeon")), Be.emit(me("free")), r.dragData.didDrag && (q.emit(me("dragfreeon")), Be.emit(me("dragfree")))), n(q, ["touchend", "tapend", "vmouseup", "tapdragout"], S, {
              x: te[0],
              y: te[1]
            }), q.unactivate(), r.touchData.start = null;
          } else {
            var Xe = r.findNearestElement(te[0], te[1], !0, !0);
            n(Xe, ["touchend", "tapend", "vmouseup", "tapdragout"], S, {
              x: te[0],
              y: te[1]
            });
          }
          var xt = r.touchData.startPosition[0] - te[0], Ze = xt * xt, st = r.touchData.startPosition[1] - te[1], tt = st * st, vt = Ze + tt, ar = vt * ue * ue;
          r.touchData.singleTouchMoved || (q || ee.$(":selected").unselect(["tapunselect"]), n(q, ["tap", "vclick"], S, {
            x: te[0],
            y: te[1]
          }), de = !1, S.timeStamp - Ee <= ee.multiClickDebounceTime() ? (he && clearTimeout(he), de = !0, Ee = null, n(q, ["dbltap", "vdblclick"], S, {
            x: te[0],
            y: te[1]
          })) : (he = setTimeout(function() {
            de || n(q, ["onetap", "voneclick"], S, {
              x: te[0],
              y: te[1]
            });
          }, ee.multiClickDebounceTime()), Ee = S.timeStamp)), q != null && !r.dragData.didDrag && q._private.selectable && ar < r.touchTapThreshold2 && !r.pinching && (ee.selectionType() === "single" ? (ee.$(t).unmerge(q).unselect(["tapunselect"]), q.select(["tapselect"])) : q.selected() ? q.unselect(["tapunselect"]) : q.select(["tapselect"]), r.redrawHint("eles", !0)), r.touchData.singleTouchMoved = !0;
        }
      }
    }
    for (var Qe = 0; Qe < te.length; Qe++)
      ve[Qe] = te[Qe];
    r.dragData.didDrag = !1, S.touches.length === 0 && (r.touchData.dragDelta = [], r.touchData.startPosition = [null, null, null, null, null, null], r.touchData.startGPosition = null, r.touchData.didSelect = !1), S.touches.length < 2 && (S.touches.length === 1 && (r.touchData.startGPosition = [S.touches[0].clientX, S.touches[0].clientY]), r.pinching = !1, r.redrawHint("eles", !0), r.redraw());
  }, !1), typeof TouchEvent > "u") {
    var pe = [], Ae = function(S) {
      return {
        clientX: S.clientX,
        clientY: S.clientY,
        force: 1,
        identifier: S.pointerId,
        pageX: S.pageX,
        pageY: S.pageY,
        radiusX: S.width / 2,
        radiusY: S.height / 2,
        screenX: S.screenX,
        screenY: S.screenY,
        target: S.target
      };
    }, Le = function(S) {
      return {
        event: S,
        touch: Ae(S)
      };
    }, Oe = function(S) {
      pe.push(Le(S));
    }, Ne = function(S) {
      for (var q = 0; q < pe.length; q++) {
        var X = pe[q];
        if (X.event.pointerId === S.pointerId) {
          pe.splice(q, 1);
          return;
        }
      }
    }, ze = function(S) {
      var q = pe.filter(function(X) {
        return X.event.pointerId === S.pointerId;
      })[0];
      q.event = S, q.touch = Ae(S);
    }, xe = function(S) {
      S.touches = pe.map(function(q) {
        return q.touch;
      });
    }, le = function(S) {
      return S.pointerType === "mouse" || S.pointerType === 4;
    };
    r.registerBinding(r.container, "pointerdown", function(j) {
      le(j) || (j.preventDefault(), Oe(j), xe(j), Ce(j));
    }), r.registerBinding(r.container, "pointerup", function(j) {
      le(j) || (Ne(j), xe(j), ie(j));
    }), r.registerBinding(r.container, "pointercancel", function(j) {
      le(j) || (Ne(j), xe(j), ye(j));
    }), r.registerBinding(r.container, "pointermove", function(j) {
      le(j) || (j.preventDefault(), ze(j), xe(j), we(j));
    });
  }
};
var tr = {};
tr.generatePolygon = function(r, e) {
  return this.nodeShapes[r] = {
    renderer: this,
    name: r,
    points: e,
    draw: function(a, n, i, s, o, u) {
      this.renderer.nodeShapeImpl("polygon", a, n, i, s, o, this.points);
    },
    intersectLine: function(a, n, i, s, o, u, l, c) {
      return Wa(o, u, this.points, a, n, i / 2, s / 2, l);
    },
    checkPoint: function(a, n, i, s, o, u, l, c) {
      return er(a, n, this.points, u, l, s, o, [0, -1], i);
    },
    hasMiterBounds: r !== "rectangle",
    miterBounds: function(a, n, i, s, o, u) {
      return Jh(this.points, a, n, i, s, o);
    }
  };
};
tr.generateEllipse = function() {
  return this.nodeShapes.ellipse = {
    renderer: this,
    name: "ellipse",
    draw: function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    },
    intersectLine: function(e, t, a, n, i, s, o, u) {
      return sg(i, s, e, t, a / 2 + o, n / 2 + o);
    },
    checkPoint: function(e, t, a, n, i, s, o, u) {
      return Ir(e, t, n, i, s, o, a);
    }
  };
};
tr.generateRoundPolygon = function(r, e) {
  return this.nodeShapes[r] = {
    renderer: this,
    name: r,
    points: e,
    getOrCreateCorners: function(a, n, i, s, o, u, l) {
      if (u[l] !== void 0 && u[l + "-cx"] === a && u[l + "-cy"] === n)
        return u[l];
      u[l] = new Array(e.length / 2), u[l + "-cx"] = a, u[l + "-cy"] = n;
      var c = i / 2, v = s / 2;
      o = o === "auto" ? Cv(i, s) : o;
      for (var f = new Array(e.length / 2), h = 0; h < e.length / 2; h++)
        f[h] = {
          x: a + c * e[h * 2],
          y: n + v * e[h * 2 + 1]
        };
      var d, y, g, p, m = f.length;
      for (y = f[m - 1], d = 0; d < m; d++)
        g = f[d % m], p = f[(d + 1) % m], u[l][d] = jo(y, g, p, o), y = g, g = p;
      return u[l];
    },
    draw: function(a, n, i, s, o, u, l) {
      this.renderer.nodeShapeImpl("round-polygon", a, n, i, s, o, this.points, this.getOrCreateCorners(n, i, s, o, u, l, "drawCorners"));
    },
    intersectLine: function(a, n, i, s, o, u, l, c, v) {
      return ug(o, u, this.points, a, n, i, s, l, this.getOrCreateCorners(a, n, i, s, c, v, "corners"));
    },
    checkPoint: function(a, n, i, s, o, u, l, c, v) {
      return ig(a, n, this.points, u, l, s, o, this.getOrCreateCorners(u, l, s, o, c, v, "corners"));
    }
  };
};
tr.generateRoundRectangle = function() {
  return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
    renderer: this,
    name: "round-rectangle",
    points: Et(4, 0),
    draw: function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, this.points, s);
    },
    intersectLine: function(e, t, a, n, i, s, o, u) {
      return xv(i, s, e, t, a, n, o, u);
    },
    checkPoint: function(e, t, a, n, i, s, o, u) {
      var l = n / 2, c = i / 2;
      u = u === "auto" ? pr(n, i) : u, u = Math.min(l, c, u);
      var v = u * 2;
      return !!(er(e, t, this.points, s, o, n, i - v, [0, -1], a) || er(e, t, this.points, s, o, n - v, i, [0, -1], a) || Ir(e, t, v, v, s - l + u, o - c + u, a) || Ir(e, t, v, v, s + l - u, o - c + u, a) || Ir(e, t, v, v, s + l - u, o + c - u, a) || Ir(e, t, v, v, s - l + u, o + c - u, a));
    }
  };
};
tr.generateCutRectangle = function() {
  return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
    renderer: this,
    name: "cut-rectangle",
    cornerLength: qo(),
    points: Et(4, 0),
    draw: function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, null, s);
    },
    generateCutTrianglePts: function(e, t, a, n, i) {
      var s = i === "auto" ? this.cornerLength : i, o = t / 2, u = e / 2, l = a - u, c = a + u, v = n - o, f = n + o;
      return {
        topLeft: [l, v + s, l + s, v, l + s, v + s],
        topRight: [c - s, v, c, v + s, c - s, v + s],
        bottomRight: [c, f - s, c - s, f, c - s, f - s],
        bottomLeft: [l + s, f, l, f - s, l + s, f - s]
      };
    },
    intersectLine: function(e, t, a, n, i, s, o, u) {
      var l = this.generateCutTrianglePts(a + 2 * o, n + 2 * o, e, t, u), c = [].concat.apply([], [l.topLeft.splice(0, 4), l.topRight.splice(0, 4), l.bottomRight.splice(0, 4), l.bottomLeft.splice(0, 4)]);
      return Wa(i, s, c, e, t);
    },
    checkPoint: function(e, t, a, n, i, s, o, u) {
      var l = u === "auto" ? this.cornerLength : u;
      if (er(e, t, this.points, s, o, n, i - 2 * l, [0, -1], a) || er(e, t, this.points, s, o, n - 2 * l, i, [0, -1], a))
        return !0;
      var c = this.generateCutTrianglePts(n, i, s, o);
      return Dt(e, t, c.topLeft) || Dt(e, t, c.topRight) || Dt(e, t, c.bottomRight) || Dt(e, t, c.bottomLeft);
    }
  };
};
tr.generateBarrel = function() {
  return this.nodeShapes.barrel = {
    renderer: this,
    name: "barrel",
    points: Et(4, 0),
    draw: function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    },
    intersectLine: function(e, t, a, n, i, s, o, u) {
      var l = 0.15, c = 0.5, v = 0.85, f = this.generateBarrelBezierPts(a + 2 * o, n + 2 * o, e, t), h = function(g) {
        var p = na({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, l), m = na({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, c), b = na({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, v);
        return [g[0], g[1], p.x, p.y, m.x, m.y, b.x, b.y, g[4], g[5]];
      }, d = [].concat(h(f.topLeft), h(f.topRight), h(f.bottomRight), h(f.bottomLeft));
      return Wa(i, s, d, e, t);
    },
    generateBarrelBezierPts: function(e, t, a, n) {
      var i = t / 2, s = e / 2, o = a - s, u = a + s, l = n - i, c = n + i, v = lo(e, t), f = v.heightOffset, h = v.widthOffset, d = v.ctrlPtOffsetPct * e, y = {
        topLeft: [o, l + f, o + d, l, o + h, l],
        topRight: [u - h, l, u - d, l, u, l + f],
        bottomRight: [u, c - f, u - d, c, u - h, c],
        bottomLeft: [o + h, c, o + d, c, o, c - f]
      };
      return y.topLeft.isTop = !0, y.topRight.isTop = !0, y.bottomLeft.isBottom = !0, y.bottomRight.isBottom = !0, y;
    },
    checkPoint: function(e, t, a, n, i, s, o, u) {
      var l = lo(n, i), c = l.heightOffset, v = l.widthOffset;
      if (er(e, t, this.points, s, o, n, i - 2 * c, [0, -1], a) || er(e, t, this.points, s, o, n - 2 * v, i, [0, -1], a))
        return !0;
      for (var f = this.generateBarrelBezierPts(n, i, s, o), h = function(T, A, k) {
        var D = k[4], B = k[2], P = k[0], L = k[5], M = k[1], I = Math.min(D, P), R = Math.max(D, P), O = Math.min(L, M), $ = Math.max(L, M);
        if (I <= T && T <= R && O <= A && A <= $) {
          var H = lg(D, B, P), z = tg(H[0], H[1], H[2], T), F = z.filter(function(U) {
            return 0 <= U && U <= 1;
          });
          if (F.length > 0)
            return F[0];
        }
        return null;
      }, d = Object.keys(f), y = 0; y < d.length; y++) {
        var g = d[y], p = f[g], m = h(e, t, p);
        if (m != null) {
          var b = p[5], w = p[3], E = p[1], C = ot(b, w, E, m);
          if (p.isTop && C <= t || p.isBottom && t <= C)
            return !0;
        }
      }
      return !1;
    }
  };
};
tr.generateBottomRoundrectangle = function() {
  return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
    renderer: this,
    name: "bottom-round-rectangle",
    points: Et(4, 0),
    draw: function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, this.points, s);
    },
    intersectLine: function(e, t, a, n, i, s, o, u) {
      var l = e - (a / 2 + o), c = t - (n / 2 + o), v = c, f = e + (a / 2 + o), h = cr(i, s, e, t, l, c, f, v, !1);
      return h.length > 0 ? h : xv(i, s, e, t, a, n, o, u);
    },
    checkPoint: function(e, t, a, n, i, s, o, u) {
      u = u === "auto" ? pr(n, i) : u;
      var l = 2 * u;
      if (er(e, t, this.points, s, o, n, i - l, [0, -1], a) || er(e, t, this.points, s, o, n - l, i, [0, -1], a))
        return !0;
      var c = n / 2 + 2 * a, v = i / 2 + 2 * a, f = [s - c, o - v, s - c, o, s + c, o, s + c, o - v];
      return !!(Dt(e, t, f) || Ir(e, t, l, l, s + n / 2 - u, o + i / 2 - u, a) || Ir(e, t, l, l, s - n / 2 + u, o + i / 2 - u, a));
    }
  };
};
tr.registerNodeShapes = function() {
  var r = this.nodeShapes = {}, e = this;
  this.generateEllipse(), this.generatePolygon("triangle", Et(3, 0)), this.generateRoundPolygon("round-triangle", Et(3, 0)), this.generatePolygon("rectangle", Et(4, 0)), r.square = r.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
  {
    var t = [0, 1, 1, 0, 0, -1, -1, 0];
    this.generatePolygon("diamond", t), this.generateRoundPolygon("round-diamond", t);
  }
  this.generatePolygon("pentagon", Et(5, 0)), this.generateRoundPolygon("round-pentagon", Et(5, 0)), this.generatePolygon("hexagon", Et(6, 0)), this.generateRoundPolygon("round-hexagon", Et(6, 0)), this.generatePolygon("heptagon", Et(7, 0)), this.generateRoundPolygon("round-heptagon", Et(7, 0)), this.generatePolygon("octagon", Et(8, 0)), this.generateRoundPolygon("round-octagon", Et(8, 0));
  var a = new Array(20);
  {
    var n = uo(5, 0), i = uo(5, Math.PI / 5), s = 0.5 * (3 - Math.sqrt(5));
    s *= 1.57;
    for (var o = 0; o < i.length / 2; o++)
      i[o * 2] *= s, i[o * 2 + 1] *= s;
    for (var o = 0; o < 20 / 4; o++)
      a[o * 4] = n[o * 2], a[o * 4 + 1] = n[o * 2 + 1], a[o * 4 + 2] = i[o * 2], a[o * 4 + 3] = i[o * 2 + 1];
  }
  a = Ev(a), this.generatePolygon("star", a), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  {
    var u = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
    this.generatePolygon("tag", u), this.generateRoundPolygon("round-tag", u);
  }
  r.makePolygon = function(l) {
    var c = l.join("$"), v = "polygon-" + c, f;
    return (f = this[v]) ? f : e.generatePolygon(v, l);
  };
};
var cn = {};
cn.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
};
cn.redraw = function(r) {
  r = r || yv();
  var e = this;
  e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = !0, e.renderOptions = r;
};
cn.beforeRender = function(r, e) {
  if (!this.destroyed) {
    e == null && We("Priority is not optional for beforeRender");
    var t = this.beforeRenderCallbacks;
    t.push({
      fn: r,
      priority: e
    }), t.sort(function(a, n) {
      return n.priority - a.priority;
    });
  }
};
var Dc = function(e, t, a) {
  for (var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++)
    n[i].fn(t, a);
};
cn.startRenderLoop = function() {
  var r = this, e = r.cy;
  if (!r.renderLoopStarted) {
    r.renderLoopStarted = !0;
    var t = function(n) {
      if (!r.destroyed) {
        if (!e.batching())
          if (r.requestedFrame && !r.skipFrame) {
            Dc(r, !0, n);
            var i = jt();
            r.render(r.renderOptions);
            var s = r.lastDrawTime = jt();
            r.averageRedrawTime === void 0 && (r.averageRedrawTime = s - i), r.redrawCount === void 0 && (r.redrawCount = 0), r.redrawCount++, r.redrawTotalTime === void 0 && (r.redrawTotalTime = 0);
            var o = s - i;
            r.redrawTotalTime += o, r.lastRedrawTime = o, r.averageRedrawTime = r.averageRedrawTime / 2 + o / 2, r.requestedFrame = !1;
          } else
            Dc(r, !1, n);
        r.skipFrame = !1, Wn(t);
      }
    };
    Wn(t);
  }
};
var S0 = function(e) {
  this.init(e);
}, Tf = S0, ma = Tf.prototype;
ma.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
ma.init = function(r) {
  var e = this;
  e.options = r, e.cy = r.cy;
  var t = e.container = r.cy.container(), a = e.cy.window();
  if (a) {
    var n = a.document, i = n.head, s = "__________cytoscape_stylesheet", o = "__________cytoscape_container", u = n.getElementById(s) != null;
    if (t.className.indexOf(o) < 0 && (t.className = (t.className || "") + " " + o), !u) {
      var l = n.createElement("style");
      l.id = s, l.textContent = "." + o + " { position: relative; }", i.insertBefore(l, i.children[0]);
    }
    var c = a.getComputedStyle(t), v = c.getPropertyValue("position");
    v === "static" && Ve("A Cytoscape container has style position:static and so can not use UI extensions properly");
  }
  e.selection = [void 0, void 0, void 0, void 0, 0], e.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], e.hoverData = {
    down: null,
    last: null,
    downTime: null,
    triggerMode: null,
    dragging: !1,
    initialPan: [null, null],
    capture: !1
  }, e.dragData = {
    possibleDragElements: []
  }, e.touchData = {
    start: null,
    capture: !1,
    // These 3 fields related to tap, taphold events
    startPosition: [null, null, null, null, null, null],
    singleTouchStartTime: null,
    singleTouchMoved: !0,
    now: [null, null, null, null, null, null],
    earlier: [null, null, null, null, null, null]
  }, e.redraws = 0, e.showFps = r.showFps, e.debug = r.debug, e.webgl = r.webgl, e.hideEdgesOnViewport = r.hideEdgesOnViewport, e.textureOnViewport = r.textureOnViewport, e.wheelSensitivity = r.wheelSensitivity, e.motionBlurEnabled = r.motionBlur, e.forcedPixelRatio = ne(r.pixelRatio) ? r.pixelRatio : null, e.motionBlur = r.motionBlur, e.motionBlurOpacity = r.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = !1, e.clearedForMotionBlur = [], e.desktopTapThreshold = r.desktopTapThreshold, e.desktopTapThreshold2 = r.desktopTapThreshold * r.desktopTapThreshold, e.touchTapThreshold = r.touchTapThreshold, e.touchTapThreshold2 = r.touchTapThreshold * r.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
    // higher priority execs before lower one
    animations: 400,
    eleCalcs: 300,
    eleTxrDeq: 200,
    lyrTxrDeq: 150,
    lyrTxrSkip: 100
  }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
};
ma.notify = function(r, e) {
  var t = this, a = t.cy;
  if (!this.destroyed) {
    if (r === "init") {
      t.load();
      return;
    }
    if (r === "destroy") {
      t.destroy();
      return;
    }
    (r === "add" || r === "remove" || r === "move" && a.hasCompoundNodes() || r === "load" || r === "zorder" || r === "mount") && t.invalidateCachedZSortedEles(), r === "viewport" && t.redrawHint("select", !0), r === "gc" && t.redrawHint("gc", !0), (r === "load" || r === "resize" || r === "mount") && (t.invalidateContainerClientCoordsCache(), t.matchCanvasSize(t.container)), t.redrawHint("eles", !0), t.redrawHint("drag", !0), this.startRenderLoop(), this.redraw();
  }
};
ma.destroy = function() {
  var r = this;
  r.destroyed = !0, r.cy.stopAnimationLoop();
  for (var e = 0; e < r.bindings.length; e++) {
    var t = r.bindings[e], a = t, n = a.target;
    (n.off || n.removeEventListener).apply(n, a.args);
  }
  if (r.bindings = [], r.beforeRenderCallbacks = [], r.onUpdateEleCalcsFns = [], r.removeObserver && r.removeObserver.disconnect(), r.styleObserver && r.styleObserver.disconnect(), r.resizeObserver && r.resizeObserver.disconnect(), r.labelCalcDiv)
    try {
      document.body.removeChild(r.labelCalcDiv);
    } catch {
    }
};
ma.isHeadless = function() {
  return !1;
};
[Jo, Ef, Cf, ya, tr, cn].forEach(function(r) {
  be(ma, r);
});
var js = 1e3 / 60, Sf = {
  setupDequeueing: function(e) {
    return function() {
      var a = this, n = this.renderer;
      if (!a.dequeueingSetup) {
        a.dequeueingSetup = !0;
        var i = nn(function() {
          n.redrawHint("eles", !0), n.redrawHint("drag", !0), n.redraw();
        }, e.deqRedrawThreshold), s = function(l, c) {
          var v = jt(), f = n.averageRedrawTime, h = n.lastRedrawTime, d = [], y = n.cy.extent(), g = n.getPixelRatio();
          for (l || n.flushRenderedStyleQueue(); ; ) {
            var p = jt(), m = p - v, b = p - c;
            if (h < js) {
              var w = js - (l ? f : 0);
              if (b >= e.deqFastCost * w)
                break;
            } else if (l) {
              if (m >= e.deqCost * h || m >= e.deqAvgCost * f)
                break;
            } else if (b >= e.deqNoDrawCost * js)
              break;
            var E = e.deq(a, g, y);
            if (E.length > 0)
              for (var C = 0; C < E.length; C++)
                d.push(E[C]);
            else
              break;
          }
          d.length > 0 && (e.onDeqd(a, d), !l && e.shouldRedraw(a, d, g, y) && i());
        }, o = e.priority || zo;
        n.beforeRender(s, o(a));
      }
    };
  }
}, A0 = /* @__PURE__ */ function() {
  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Kn;
    wr(this, r), this.idsByKey = new Jt(), this.keyForId = new Jt(), this.cachesByLvl = new Jt(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = t;
  }
  return xr(r, [{
    key: "getIdsFor",
    value: function(t) {
      t == null && We("Can not get id list for null key");
      var a = this.idsByKey, n = this.idsByKey.get(t);
      return n || (n = new da(), a.set(t, n)), n;
    }
  }, {
    key: "addIdForKey",
    value: function(t, a) {
      t != null && this.getIdsFor(t).add(a);
    }
  }, {
    key: "deleteIdForKey",
    value: function(t, a) {
      t != null && this.getIdsFor(t).delete(a);
    }
  }, {
    key: "getNumberOfIdsForKey",
    value: function(t) {
      return t == null ? 0 : this.getIdsFor(t).size;
    }
  }, {
    key: "updateKeyMappingFor",
    value: function(t) {
      var a = t.id(), n = this.keyForId.get(a), i = this.getKey(t);
      this.deleteIdForKey(n, a), this.addIdForKey(i, a), this.keyForId.set(a, i);
    }
  }, {
    key: "deleteKeyMappingFor",
    value: function(t) {
      var a = t.id(), n = this.keyForId.get(a);
      this.deleteIdForKey(n, a), this.keyForId.delete(a);
    }
  }, {
    key: "keyHasChangedFor",
    value: function(t) {
      var a = t.id(), n = this.keyForId.get(a), i = this.getKey(t);
      return n !== i;
    }
  }, {
    key: "isInvalid",
    value: function(t) {
      return this.keyHasChangedFor(t) || this.doesEleInvalidateKey(t);
    }
  }, {
    key: "getCachesAt",
    value: function(t) {
      var a = this.cachesByLvl, n = this.lvls, i = a.get(t);
      return i || (i = new Jt(), a.set(t, i), n.push(t)), i;
    }
  }, {
    key: "getCache",
    value: function(t, a) {
      return this.getCachesAt(a).get(t);
    }
  }, {
    key: "get",
    value: function(t, a) {
      var n = this.getKey(t), i = this.getCache(n, a);
      return i != null && this.updateKeyMappingFor(t), i;
    }
  }, {
    key: "getForCachedKey",
    value: function(t, a) {
      var n = this.keyForId.get(t.id()), i = this.getCache(n, a);
      return i;
    }
  }, {
    key: "hasCache",
    value: function(t, a) {
      return this.getCachesAt(a).has(t);
    }
  }, {
    key: "has",
    value: function(t, a) {
      var n = this.getKey(t);
      return this.hasCache(n, a);
    }
  }, {
    key: "setCache",
    value: function(t, a, n) {
      n.key = t, this.getCachesAt(a).set(t, n);
    }
  }, {
    key: "set",
    value: function(t, a, n) {
      var i = this.getKey(t);
      this.setCache(i, a, n), this.updateKeyMappingFor(t);
    }
  }, {
    key: "deleteCache",
    value: function(t, a) {
      this.getCachesAt(a).delete(t);
    }
  }, {
    key: "delete",
    value: function(t, a) {
      var n = this.getKey(t);
      this.deleteCache(n, a);
    }
  }, {
    key: "invalidateKey",
    value: function(t) {
      var a = this;
      this.lvls.forEach(function(n) {
        return a.deleteCache(t, n);
      });
    }
    // returns true if no other eles reference the invalidated cache (n.b. other eles may need the cache with the same key)
  }, {
    key: "invalidate",
    value: function(t) {
      var a = t.id(), n = this.keyForId.get(a);
      this.deleteKeyMappingFor(t);
      var i = this.doesEleInvalidateKey(t);
      return i && this.invalidateKey(n), i || this.getNumberOfIdsForKey(n) === 0;
    }
  }]);
}(), Bc = 25, kn = 50, $n = -4, Co = 3, Af = 7.99, k0 = 8, D0 = 1024, B0 = 1024, P0 = 1024, L0 = 0.2, R0 = 0.8, M0 = 10, I0 = 0.15, O0 = 0.1, N0 = 0.9, z0 = 0.9, F0 = 100, V0 = 1, aa = {
  dequeue: "dequeue",
  downscale: "downscale",
  highQuality: "highQuality"
}, $0 = gt({
  getKey: null,
  doesEleInvalidateKey: Kn,
  drawElement: null,
  getBoundingBox: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: hv,
  allowEdgeTxrCaching: !0,
  allowParentTxrCaching: !0
}), Ra = function(e, t) {
  var a = this;
  a.renderer = e, a.onDequeues = [];
  var n = $0(t);
  be(a, n), a.lookup = new A0(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
}, it = Ra.prototype;
it.reasons = aa;
it.getTextureQueue = function(r) {
  var e = this;
  return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[r] = e.eleImgCaches[r] || [];
};
it.getRetiredTextureQueue = function(r) {
  var e = this, t = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = t[r] = t[r] || [];
  return a;
};
it.getElementQueue = function() {
  var r = this, e = r.eleCacheQueue = r.eleCacheQueue || new sn(function(t, a) {
    return a.reqs - t.reqs;
  });
  return e;
};
it.getElementKeyToQueue = function() {
  var r = this, e = r.eleKeyToCacheQueue = r.eleKeyToCacheQueue || {};
  return e;
};
it.getElement = function(r, e, t, a, n) {
  var i = this, s = this.renderer, o = s.cy.zoom(), u = this.lookup;
  if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !r.visible() || r.removed() || !i.allowEdgeTxrCaching && r.isEdge() || !i.allowParentTxrCaching && r.isParent())
    return null;
  if (a == null && (a = Math.ceil(Vo(o * t))), a < $n)
    a = $n;
  else if (o >= Af || a > Co)
    return null;
  var l = Math.pow(2, a), c = e.h * l, v = e.w * l, f = s.eleTextBiggerThanMin(r, l);
  if (!this.isVisible(r, f))
    return null;
  var h = u.get(r, a);
  if (h && h.invalidated && (h.invalidated = !1, h.texture.invalidatedWidth -= h.width), h)
    return h;
  var d;
  if (c <= Bc ? d = Bc : c <= kn ? d = kn : d = Math.ceil(c / kn) * kn, c > P0 || v > B0)
    return null;
  var y = i.getTextureQueue(d), g = y[y.length - 2], p = function() {
    return i.recycleTexture(d, v) || i.addTexture(d, v);
  };
  g || (g = y[y.length - 1]), g || (g = p()), g.width - g.usedWidth < v && (g = p());
  for (var m = function(I) {
    return I && I.scaledLabelShown === f;
  }, b = n && n === aa.dequeue, w = n && n === aa.highQuality, E = n && n === aa.downscale, C, x = a + 1; x <= Co; x++) {
    var T = u.get(r, x);
    if (T) {
      C = T;
      break;
    }
  }
  var A = C && C.level === a + 1 ? C : null, k = function() {
    g.context.drawImage(A.texture.canvas, A.x, 0, A.width, A.height, g.usedWidth, 0, v, c);
  };
  if (g.context.setTransform(1, 0, 0, 1, 0, 0), g.context.clearRect(g.usedWidth, 0, v, d), m(A))
    k();
  else if (m(C))
    if (w) {
      for (var D = C.level; D > a; D--)
        A = i.getElement(r, e, t, D, aa.downscale);
      k();
    } else
      return i.queueElement(r, C.level - 1), C;
  else {
    var B;
    if (!b && !w && !E)
      for (var P = a - 1; P >= $n; P--) {
        var L = u.get(r, P);
        if (L) {
          B = L;
          break;
        }
      }
    if (m(B))
      return i.queueElement(r, a), B;
    g.context.translate(g.usedWidth, 0), g.context.scale(l, l), this.drawElement(g.context, r, e, f, !1), g.context.scale(1 / l, 1 / l), g.context.translate(-g.usedWidth, 0);
  }
  return h = {
    x: g.usedWidth,
    texture: g,
    level: a,
    scale: l,
    width: v,
    height: c,
    scaledLabelShown: f
  }, g.usedWidth += Math.ceil(v + k0), g.eleCaches.push(h), u.set(r, a, h), i.checkTextureFullness(g), h;
};
it.invalidateElements = function(r) {
  for (var e = 0; e < r.length; e++)
    this.invalidateElement(r[e]);
};
it.invalidateElement = function(r) {
  var e = this, t = e.lookup, a = [], n = t.isInvalid(r);
  if (n) {
    for (var i = $n; i <= Co; i++) {
      var s = t.getForCachedKey(r, i);
      s && a.push(s);
    }
    var o = t.invalidate(r);
    if (o)
      for (var u = 0; u < a.length; u++) {
        var l = a[u], c = l.texture;
        c.invalidatedWidth += l.width, l.invalidated = !0, e.checkTextureUtility(c);
      }
    e.removeFromQueue(r);
  }
};
it.checkTextureUtility = function(r) {
  r.invalidatedWidth >= L0 * r.width && this.retireTexture(r);
};
it.checkTextureFullness = function(r) {
  var e = this, t = e.getTextureQueue(r.height);
  r.usedWidth / r.width > R0 && r.fullnessChecks >= M0 ? gr(t, r) : r.fullnessChecks++;
};
it.retireTexture = function(r) {
  var e = this, t = r.height, a = e.getTextureQueue(t), n = this.lookup;
  gr(a, r), r.retired = !0;
  for (var i = r.eleCaches, s = 0; s < i.length; s++) {
    var o = i[s];
    n.deleteCache(o.key, o.level);
  }
  Fo(i);
  var u = e.getRetiredTextureQueue(t);
  u.push(r);
};
it.addTexture = function(r, e) {
  var t = this, a = t.getTextureQueue(r), n = {};
  return a.push(n), n.eleCaches = [], n.height = r, n.width = Math.max(D0, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = t.renderer.makeOffscreenCanvas(n.width, n.height), n.context = n.canvas.getContext("2d"), n;
};
it.recycleTexture = function(r, e) {
  for (var t = this, a = t.getTextureQueue(r), n = t.getRetiredTextureQueue(r), i = 0; i < n.length; i++) {
    var s = n[i];
    if (s.width >= e)
      return s.retired = !1, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, Fo(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), gr(n, s), a.push(s), s;
  }
};
it.queueElement = function(r, e) {
  var t = this, a = t.getElementQueue(), n = t.getElementKeyToQueue(), i = this.getKey(r), s = n[i];
  if (s)
    s.level = Math.max(s.level, e), s.eles.merge(r), s.reqs++, a.updateItem(s);
  else {
    var o = {
      eles: r.spawn().merge(r),
      level: e,
      reqs: 1,
      key: i
    };
    a.push(o), n[i] = o;
  }
};
it.dequeue = function(r) {
  for (var e = this, t = e.getElementQueue(), a = e.getElementKeyToQueue(), n = [], i = e.lookup, s = 0; s < V0 && t.size() > 0; s++) {
    var o = t.pop(), u = o.key, l = o.eles[0], c = i.hasCache(l, o.level);
    if (a[u] = null, c)
      continue;
    n.push(o);
    var v = e.getBoundingBox(l);
    e.getElement(l, v, r, o.level, aa.dequeue);
  }
  return n;
};
it.removeFromQueue = function(r) {
  var e = this, t = e.getElementQueue(), a = e.getElementKeyToQueue(), n = this.getKey(r), i = a[n];
  i != null && (i.eles.length === 1 ? (i.reqs = No, t.updateItem(i), t.pop(), a[n] = null) : i.eles.unmerge(r));
};
it.onDequeue = function(r) {
  this.onDequeues.push(r);
};
it.offDequeue = function(r) {
  gr(this.onDequeues, r);
};
it.setupDequeueing = Sf.setupDequeueing({
  deqRedrawThreshold: F0,
  deqCost: I0,
  deqAvgCost: O0,
  deqNoDrawCost: N0,
  deqFastCost: z0,
  deq: function(e, t, a) {
    return e.dequeue(t, a);
  },
  onDeqd: function(e, t) {
    for (var a = 0; a < e.onDequeues.length; a++) {
      var n = e.onDequeues[a];
      n(t);
    }
  },
  shouldRedraw: function(e, t, a, n) {
    for (var i = 0; i < t.length; i++)
      for (var s = t[i].eles, o = 0; o < s.length; o++) {
        var u = s[o].boundingBox();
        if (_o(u, n))
          return !0;
      }
    return !1;
  },
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.eleTxrDeq;
  }
});
var _0 = 1, za = -4, ti = 2, q0 = 3.99, H0 = 50, U0 = 50, G0 = 0.15, W0 = 0.1, K0 = 0.9, X0 = 0.9, Y0 = 1, Pc = 250, Z0 = 4e3 * 4e3, Lc = 32767, Q0 = !0, kf = function(e) {
  var t = this, a = t.renderer = e, n = a.cy;
  t.layersByLevel = {}, t.firstGet = !0, t.lastInvalidationTime = jt() - 2 * Pc, t.skipping = !1, t.eleTxrDeqs = n.collection(), t.scheduleElementRefinement = nn(function() {
    t.refineElementTextures(t.eleTxrDeqs), t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
  }, U0), a.beforeRender(function(s, o) {
    o - t.lastInvalidationTime <= Pc ? t.skipping = !0 : t.skipping = !1;
  }, a.beforeRenderPriorities.lyrTxrSkip);
  var i = function(o, u) {
    return u.reqs - o.reqs;
  };
  t.layersQueue = new sn(i), t.setupDequeueing();
}, pt = kf.prototype, Rc = 0, J0 = Math.pow(2, 53) - 1;
pt.makeLayer = function(r, e) {
  var t = Math.pow(2, e), a = Math.ceil(r.w * t), n = Math.ceil(r.h * t), i = this.renderer.makeOffscreenCanvas(a, n), s = {
    id: Rc = ++Rc % J0,
    bb: r,
    level: e,
    width: a,
    height: n,
    canvas: i,
    context: i.getContext("2d"),
    eles: [],
    elesQueue: [],
    reqs: 0
  }, o = s.context, u = -s.bb.x1, l = -s.bb.y1;
  return o.scale(t, t), o.translate(u, l), s;
};
pt.getLayers = function(r, e, t) {
  var a = this, n = a.renderer, i = n.cy, s = i.zoom(), o = a.firstGet;
  if (a.firstGet = !1, t == null) {
    if (t = Math.ceil(Vo(s * e)), t < za)
      t = za;
    else if (s >= q0 || t > ti)
      return null;
  }
  a.validateLayersElesOrdering(t, r);
  var u = a.layersByLevel, l = Math.pow(2, t), c = u[t] = u[t] || [], v, f = a.levelIsComplete(t, r), h, d = function() {
    var k = function(M) {
      if (a.validateLayersElesOrdering(M, r), a.levelIsComplete(M, r))
        return h = u[M], !0;
    }, D = function(M) {
      if (!h)
        for (var I = t + M; za <= I && I <= ti && !k(I); I += M)
          ;
    };
    D(1), D(-1);
    for (var B = c.length - 1; B >= 0; B--) {
      var P = c[B];
      P.invalid && gr(c, P);
    }
  };
  if (!f)
    d();
  else
    return c;
  var y = function() {
    if (!v) {
      v = Ct();
      for (var k = 0; k < r.length; k++)
        Yh(v, r[k].boundingBox());
    }
    return v;
  }, g = function(k) {
    k = k || {};
    var D = k.after;
    y();
    var B = Math.ceil(v.w * l), P = Math.ceil(v.h * l);
    if (B > Lc || P > Lc)
      return null;
    var L = B * P;
    if (L > Z0)
      return null;
    var M = a.makeLayer(v, t);
    if (D != null) {
      var I = c.indexOf(D) + 1;
      c.splice(I, 0, M);
    } else
      (k.insert === void 0 || k.insert) && c.unshift(M);
    return M;
  };
  if (a.skipping && !o)
    return null;
  for (var p = null, m = r.length / _0, b = !o, w = 0; w < r.length; w++) {
    var E = r[w], C = E._private.rscratch, x = C.imgLayerCaches = C.imgLayerCaches || {}, T = x[t];
    if (T) {
      p = T;
      continue;
    }
    if ((!p || p.eles.length >= m || !wv(p.bb, E.boundingBox())) && (p = g({
      insert: !0,
      after: p
    }), !p))
      return null;
    h || b ? a.queueLayer(p, E) : a.drawEleInLayer(p, E, t, e), p.eles.push(E), x[t] = p;
  }
  return h || (b ? null : c);
};
pt.getEleLevelForLayerLevel = function(r, e) {
  return r;
};
pt.drawEleInLayer = function(r, e, t, a) {
  var n = this, i = this.renderer, s = r.context, o = e.boundingBox();
  o.w === 0 || o.h === 0 || !e.visible() || (t = n.getEleLevelForLayerLevel(t, a), i.setImgSmoothing(s, !1), i.drawCachedElement(s, e, null, null, t, Q0), i.setImgSmoothing(s, !0));
};
pt.levelIsComplete = function(r, e) {
  var t = this, a = t.layersByLevel[r];
  if (!a || a.length === 0)
    return !1;
  for (var n = 0, i = 0; i < a.length; i++) {
    var s = a[i];
    if (s.reqs > 0 || s.invalid)
      return !1;
    n += s.eles.length;
  }
  return n === e.length;
};
pt.validateLayersElesOrdering = function(r, e) {
  var t = this.layersByLevel[r];
  if (t)
    for (var a = 0; a < t.length; a++) {
      for (var n = t[a], i = -1, s = 0; s < e.length; s++)
        if (n.eles[0] === e[s]) {
          i = s;
          break;
        }
      if (i < 0) {
        this.invalidateLayer(n);
        continue;
      }
      for (var o = i, s = 0; s < n.eles.length; s++)
        if (n.eles[s] !== e[o + s]) {
          this.invalidateLayer(n);
          break;
        }
    }
};
pt.updateElementsInLayers = function(r, e) {
  for (var t = this, a = en(r[0]), n = 0; n < r.length; n++)
    for (var i = a ? null : r[n], s = a ? r[n] : r[n].ele, o = s._private.rscratch, u = o.imgLayerCaches = o.imgLayerCaches || {}, l = za; l <= ti; l++) {
      var c = u[l];
      c && (i && t.getEleLevelForLayerLevel(c.level) !== i.level || e(c, s, i));
    }
};
pt.haveLayers = function() {
  for (var r = this, e = !1, t = za; t <= ti; t++) {
    var a = r.layersByLevel[t];
    if (a && a.length > 0) {
      e = !0;
      break;
    }
  }
  return e;
};
pt.invalidateElements = function(r) {
  var e = this;
  r.length !== 0 && (e.lastInvalidationTime = jt(), !(r.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(r, function(a, n, i) {
    e.invalidateLayer(a);
  }));
};
pt.invalidateLayer = function(r) {
  if (this.lastInvalidationTime = jt(), !r.invalid) {
    var e = r.level, t = r.eles, a = this.layersByLevel[e];
    gr(a, r), r.elesQueue = [], r.invalid = !0, r.replacement && (r.replacement.invalid = !0);
    for (var n = 0; n < t.length; n++) {
      var i = t[n]._private.rscratch.imgLayerCaches;
      i && (i[e] = null);
    }
  }
};
pt.refineElementTextures = function(r) {
  var e = this;
  e.updateElementsInLayers(r, function(a, n, i) {
    var s = a.replacement;
    if (s || (s = a.replacement = e.makeLayer(a.bb, a.level), s.replaces = a, s.eles = a.eles), !s.reqs)
      for (var o = 0; o < s.eles.length; o++)
        e.queueLayer(s, s.eles[o]);
  });
};
pt.enqueueElementRefinement = function(r) {
  this.eleTxrDeqs.merge(r), this.scheduleElementRefinement();
};
pt.queueLayer = function(r, e) {
  var t = this, a = t.layersQueue, n = r.elesQueue, i = n.hasId = n.hasId || {};
  if (!r.replacement) {
    if (e) {
      if (i[e.id()])
        return;
      n.push(e), i[e.id()] = !0;
    }
    r.reqs ? (r.reqs++, a.updateItem(r)) : (r.reqs = 1, a.push(r));
  }
};
pt.dequeue = function(r) {
  for (var e = this, t = e.layersQueue, a = [], n = 0; n < Y0 && t.size() !== 0; ) {
    var i = t.peek();
    if (i.replacement) {
      t.pop();
      continue;
    }
    if (i.replaces && i !== i.replaces.replacement) {
      t.pop();
      continue;
    }
    if (i.invalid) {
      t.pop();
      continue;
    }
    var s = i.elesQueue.shift();
    s && (e.drawEleInLayer(i, s, i.level, r), n++), a.length === 0 && a.push(!0), i.elesQueue.length === 0 && (t.pop(), i.reqs = 0, i.replaces && e.applyLayerReplacement(i), e.requestRedraw());
  }
  return a;
};
pt.applyLayerReplacement = function(r) {
  var e = this, t = e.layersByLevel[r.level], a = r.replaces, n = t.indexOf(a);
  if (!(n < 0 || a.invalid)) {
    t[n] = r;
    for (var i = 0; i < r.eles.length; i++) {
      var s = r.eles[i]._private, o = s.imgLayerCaches = s.imgLayerCaches || {};
      o && (o[r.level] = r);
    }
    e.requestRedraw();
  }
};
pt.requestRedraw = nn(function() {
  var r = this.renderer;
  r.redrawHint("eles", !0), r.redrawHint("drag", !0), r.redraw();
}, 100);
pt.setupDequeueing = Sf.setupDequeueing({
  deqRedrawThreshold: H0,
  deqCost: G0,
  deqAvgCost: W0,
  deqNoDrawCost: K0,
  deqFastCost: X0,
  deq: function(e, t) {
    return e.dequeue(t);
  },
  onDeqd: zo,
  shouldRedraw: hv,
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.lyrTxrDeq;
  }
});
var Df = {}, Mc;
function j0(r, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    r.lineTo(a.x, a.y);
  }
}
function em(r, e, t) {
  for (var a, n = 0; n < e.length; n++) {
    var i = e[n];
    n === 0 && (a = i), r.lineTo(i.x, i.y);
  }
  r.quadraticCurveTo(t.x, t.y, a.x, a.y);
}
function Ic(r, e, t) {
  r.beginPath && r.beginPath();
  for (var a = e, n = 0; n < a.length; n++) {
    var i = a[n];
    r.lineTo(i.x, i.y);
  }
  var s = t, o = t[0];
  r.moveTo(o.x, o.y);
  for (var n = 1; n < s.length; n++) {
    var i = s[n];
    r.lineTo(i.x, i.y);
  }
  r.closePath && r.closePath();
}
function tm(r, e, t, a, n) {
  r.beginPath && r.beginPath(), r.arc(t, a, n, 0, Math.PI * 2, !1);
  var i = e, s = i[0];
  r.moveTo(s.x, s.y);
  for (var o = 0; o < i.length; o++) {
    var u = i[o];
    r.lineTo(u.x, u.y);
  }
  r.closePath && r.closePath();
}
function rm(r, e, t, a) {
  r.arc(e, t, a, 0, Math.PI * 2, !1);
}
Df.arrowShapeImpl = function(r) {
  return (Mc || (Mc = {
    polygon: j0,
    "triangle-backcurve": em,
    "triangle-tee": Ic,
    "circle-triangle": tm,
    "triangle-cross": Ic,
    circle: rm
  }))[r];
};
var Kt = {};
Kt.drawElement = function(r, e, t, a, n, i) {
  var s = this;
  e.isNode() ? s.drawNode(r, e, t, a, n, i) : s.drawEdge(r, e, t, a, n, i);
};
Kt.drawElementOverlay = function(r, e) {
  var t = this;
  e.isNode() ? t.drawNodeOverlay(r, e) : t.drawEdgeOverlay(r, e);
};
Kt.drawElementUnderlay = function(r, e) {
  var t = this;
  e.isNode() ? t.drawNodeUnderlay(r, e) : t.drawEdgeUnderlay(r, e);
};
Kt.drawCachedElementPortion = function(r, e, t, a, n, i, s, o) {
  var u = this, l = t.getBoundingBox(e);
  if (!(l.w === 0 || l.h === 0)) {
    var c = t.getElement(e, l, a, n, i);
    if (c != null) {
      var v = o(u, e);
      if (v === 0)
        return;
      var f = s(u, e), h = l.x1, d = l.y1, y = l.w, g = l.h, p, m, b, w, E;
      if (f !== 0) {
        var C = t.getRotationPoint(e);
        b = C.x, w = C.y, r.translate(b, w), r.rotate(f), E = u.getImgSmoothing(r), E || u.setImgSmoothing(r, !0);
        var x = t.getRotationOffset(e);
        p = x.x, m = x.y;
      } else
        p = h, m = d;
      var T;
      v !== 1 && (T = r.globalAlpha, r.globalAlpha = T * v), r.drawImage(c.texture.canvas, c.x, 0, c.width, c.height, p, m, y, g), v !== 1 && (r.globalAlpha = T), f !== 0 && (r.rotate(-f), r.translate(-b, -w), E || u.setImgSmoothing(r, !1));
    } else
      t.drawElement(r, e);
  }
};
var am = function() {
  return 0;
}, nm = function(e, t) {
  return e.getTextAngle(t, null);
}, im = function(e, t) {
  return e.getTextAngle(t, "source");
}, sm = function(e, t) {
  return e.getTextAngle(t, "target");
}, om = function(e, t) {
  return t.effectiveOpacity();
}, eo = function(e, t) {
  return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
};
Kt.drawCachedElement = function(r, e, t, a, n, i) {
  var s = this, o = s.data, u = o.eleTxrCache, l = o.lblTxrCache, c = o.slbTxrCache, v = o.tlbTxrCache, f = e.boundingBox(), h = i === !0 ? u.reasons.highQuality : null;
  if (!(f.w === 0 || f.h === 0 || !e.visible()) && (!a || _o(f, a))) {
    var d = e.isEdge(), y = e.element()._private.rscratch.badLine;
    s.drawElementUnderlay(r, e), s.drawCachedElementPortion(r, e, u, t, n, h, am, om), (!d || !y) && s.drawCachedElementPortion(r, e, l, t, n, h, nm, eo), d && !y && (s.drawCachedElementPortion(r, e, c, t, n, h, im, eo), s.drawCachedElementPortion(r, e, v, t, n, h, sm, eo)), s.drawElementOverlay(r, e);
  }
};
Kt.drawElements = function(r, e) {
  for (var t = this, a = 0; a < e.length; a++) {
    var n = e[a];
    t.drawElement(r, n);
  }
};
Kt.drawCachedElements = function(r, e, t, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var s = e[i];
    n.drawCachedElement(r, s, t, a);
  }
};
Kt.drawCachedNodes = function(r, e, t, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var s = e[i];
    s.isNode() && n.drawCachedElement(r, s, t, a);
  }
};
Kt.drawLayeredElements = function(r, e, t, a) {
  var n = this, i = n.data.lyrTxrCache.getLayers(e, t);
  if (i)
    for (var s = 0; s < i.length; s++) {
      var o = i[s], u = o.bb;
      u.w === 0 || u.h === 0 || r.drawImage(o.canvas, u.x1, u.y1, u.w, u.h);
    }
  else
    n.drawCachedElements(r, e, t, a);
};
var rr = {};
rr.drawEdge = function(r, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o = e._private.rscratch;
  if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
    var u;
    t && (u = t, r.translate(-u.x1, -u.y1));
    var l = i ? e.pstyle("opacity").value : 1, c = i ? e.pstyle("line-opacity").value : 1, v = e.pstyle("curve-style").value, f = e.pstyle("line-style").value, h = e.pstyle("width").pfValue, d = e.pstyle("line-cap").value, y = e.pstyle("line-outline-width").value, g = e.pstyle("line-outline-color").value, p = l * c, m = l * c, b = function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
      v === "straight-triangle" ? (s.eleStrokeStyle(r, e, M), s.drawEdgeTrianglePath(e, r, o.allpts)) : (r.lineWidth = h, r.lineCap = d, s.eleStrokeStyle(r, e, M), s.drawEdgePath(e, r, o.allpts, f), r.lineCap = "butt");
    }, w = function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
      if (r.lineWidth = h + y, r.lineCap = d, y > 0)
        s.colorStrokeStyle(r, g[0], g[1], g[2], M);
      else {
        r.lineCap = "butt";
        return;
      }
      v === "straight-triangle" ? s.drawEdgeTrianglePath(e, r, o.allpts) : (s.drawEdgePath(e, r, o.allpts, f), r.lineCap = "butt");
    }, E = function() {
      n && s.drawEdgeOverlay(r, e);
    }, C = function() {
      n && s.drawEdgeUnderlay(r, e);
    }, x = function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : m;
      s.drawArrowheads(r, e, M);
    }, T = function() {
      s.drawElementText(r, e, null, a);
    };
    r.lineJoin = "round";
    var A = e.pstyle("ghost").value === "yes";
    if (A) {
      var k = e.pstyle("ghost-offset-x").pfValue, D = e.pstyle("ghost-offset-y").pfValue, B = e.pstyle("ghost-opacity").value, P = p * B;
      r.translate(k, D), b(P), x(P), r.translate(-k, -D);
    } else
      w();
    C(), b(), x(), E(), T(), t && r.translate(u.x1, u.y1);
  }
};
var Bf = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(t, a) {
    if (a.visible()) {
      var n = a.pstyle("".concat(e, "-opacity")).value;
      if (n !== 0) {
        var i = this, s = i.usePaths(), o = a._private.rscratch, u = a.pstyle("".concat(e, "-padding")).pfValue, l = 2 * u, c = a.pstyle("".concat(e, "-color")).value;
        t.lineWidth = l, o.edgeType === "self" && !s ? t.lineCap = "butt" : t.lineCap = "round", i.colorStrokeStyle(t, c[0], c[1], c[2], n), i.drawEdgePath(a, t, o.allpts, "solid");
      }
    }
  };
};
rr.drawEdgeOverlay = Bf("overlay");
rr.drawEdgeUnderlay = Bf("underlay");
rr.drawEdgePath = function(r, e, t, a) {
  var n = r._private.rscratch, i = e, s, o = !1, u = this.usePaths(), l = r.pstyle("line-dash-pattern").pfValue, c = r.pstyle("line-dash-offset").pfValue;
  if (u) {
    var v = t.join("$"), f = n.pathCacheKey && n.pathCacheKey === v;
    f ? (s = e = n.pathCache, o = !0) : (s = e = new Path2D(), n.pathCacheKey = v, n.pathCache = s);
  }
  if (i.setLineDash)
    switch (a) {
      case "dotted":
        i.setLineDash([1, 1]);
        break;
      case "dashed":
        i.setLineDash(l), i.lineDashOffset = c;
        break;
      case "solid":
        i.setLineDash([]);
        break;
    }
  if (!o && !n.badLine)
    switch (e.beginPath && e.beginPath(), e.moveTo(t[0], t[1]), n.edgeType) {
      case "bezier":
      case "self":
      case "compound":
      case "multibezier":
        for (var h = 2; h + 3 < t.length; h += 4)
          e.quadraticCurveTo(t[h], t[h + 1], t[h + 2], t[h + 3]);
        break;
      case "straight":
      case "haystack":
        for (var d = 2; d + 1 < t.length; d += 2)
          e.lineTo(t[d], t[d + 1]);
        break;
      case "segments":
        if (n.isRound) {
          var y = Bt(n.roundCorners), g;
          try {
            for (y.s(); !(g = y.n()).done; ) {
              var p = g.value;
              yf(e, p);
            }
          } catch (b) {
            y.e(b);
          } finally {
            y.f();
          }
          e.lineTo(t[t.length - 2], t[t.length - 1]);
        } else
          for (var m = 2; m + 1 < t.length; m += 2)
            e.lineTo(t[m], t[m + 1]);
        break;
    }
  e = i, u ? e.stroke(s) : e.stroke(), e.setLineDash && e.setLineDash([]);
};
rr.drawEdgeTrianglePath = function(r, e, t) {
  e.fillStyle = e.strokeStyle;
  for (var a = r.pstyle("width").pfValue, n = 0; n + 1 < t.length; n += 2) {
    var i = [t[n + 2] - t[n], t[n + 3] - t[n + 1]], s = Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [i[1] / s, -i[0] / s], u = [o[0] * a / 2, o[1] * a / 2];
    e.beginPath(), e.moveTo(t[n] - u[0], t[n + 1] - u[1]), e.lineTo(t[n] + u[0], t[n + 1] + u[1]), e.lineTo(t[n + 2], t[n + 3]), e.closePath(), e.fill();
  }
};
rr.drawArrowheads = function(r, e, t) {
  var a = e._private.rscratch, n = a.edgeType === "haystack";
  n || this.drawArrowhead(r, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, t), this.drawArrowhead(r, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, t), this.drawArrowhead(r, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, t), n || this.drawArrowhead(r, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, t);
};
rr.drawArrowhead = function(r, e, t, a, n, i, s) {
  if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
    var o = this, u = e.pstyle(t + "-arrow-shape").value;
    if (u !== "none") {
      var l = e.pstyle(t + "-arrow-fill").value === "hollow" ? "both" : "filled", c = e.pstyle(t + "-arrow-fill").value, v = e.pstyle("width").pfValue, f = e.pstyle(t + "-arrow-width"), h = f.value === "match-line" ? v : f.pfValue;
      f.units === "%" && (h *= v);
      var d = e.pstyle("opacity").value;
      s === void 0 && (s = d);
      var y = r.globalCompositeOperation;
      (s !== 1 || c === "hollow") && (r.globalCompositeOperation = "destination-out", o.colorFillStyle(r, 255, 255, 255, 1), o.colorStrokeStyle(r, 255, 255, 255, 1), o.drawArrowShape(e, r, l, v, u, h, a, n, i), r.globalCompositeOperation = y);
      var g = e.pstyle(t + "-arrow-color").value;
      o.colorFillStyle(r, g[0], g[1], g[2], s), o.colorStrokeStyle(r, g[0], g[1], g[2], s), o.drawArrowShape(e, r, c, v, u, h, a, n, i);
    }
  }
};
rr.drawArrowShape = function(r, e, t, a, n, i, s, o, u) {
  var l = this, c = this.usePaths() && n !== "triangle-cross", v = !1, f, h = e, d = {
    x: s,
    y: o
  }, y = r.pstyle("arrow-scale").value, g = this.getArrowWidth(a, y), p = l.arrowShapes[n];
  if (c) {
    var m = l.arrowPathCache = l.arrowPathCache || [], b = Nr(n), w = m[b];
    w != null ? (f = e = w, v = !0) : (f = e = new Path2D(), m[b] = f);
  }
  v || (e.beginPath && e.beginPath(), c ? p.draw(e, 1, 0, {
    x: 0,
    y: 0
  }, 1) : p.draw(e, g, u, d, a), e.closePath && e.closePath()), e = h, c && (e.translate(s, o), e.rotate(u), e.scale(g, g)), (t === "filled" || t === "both") && (c ? e.fill(f) : e.fill()), (t === "hollow" || t === "both") && (e.lineWidth = i / (c ? g : 1), e.lineJoin = "miter", c ? e.stroke(f) : e.stroke()), c && (e.scale(1 / g, 1 / g), e.rotate(-u), e.translate(-s, -o));
};
var tu = {};
tu.safeDrawImage = function(r, e, t, a, n, i, s, o, u, l) {
  if (!(n <= 0 || i <= 0 || u <= 0 || l <= 0))
    try {
      r.drawImage(e, t, a, n, i, s, o, u, l);
    } catch (c) {
      Ve(c);
    }
};
tu.drawInscribedImage = function(r, e, t, a, n) {
  var i = this, s = t.position(), o = s.x, u = s.y, l = t.cy().style(), c = l.getIndexedStyle.bind(l), v = c(t, "background-fit", "value", a), f = c(t, "background-repeat", "value", a), h = t.width(), d = t.height(), y = t.padding() * 2, g = h + (c(t, "background-width-relative-to", "value", a) === "inner" ? 0 : y), p = d + (c(t, "background-height-relative-to", "value", a) === "inner" ? 0 : y), m = t._private.rscratch, b = c(t, "background-clip", "value", a), w = b === "node", E = c(t, "background-image-opacity", "value", a) * n, C = c(t, "background-image-smoothing", "value", a), x = t.pstyle("corner-radius").value;
  x !== "auto" && (x = t.pstyle("corner-radius").pfValue);
  var T = e.width || e.cachedW, A = e.height || e.cachedH;
  (T == null || A == null) && (document.body.appendChild(e), T = e.cachedW = e.width || e.offsetWidth, A = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
  var k = T, D = A;
  if (c(t, "background-width", "value", a) !== "auto" && (c(t, "background-width", "units", a) === "%" ? k = c(t, "background-width", "pfValue", a) * g : k = c(t, "background-width", "pfValue", a)), c(t, "background-height", "value", a) !== "auto" && (c(t, "background-height", "units", a) === "%" ? D = c(t, "background-height", "pfValue", a) * p : D = c(t, "background-height", "pfValue", a)), !(k === 0 || D === 0)) {
    if (v === "contain") {
      var B = Math.min(g / k, p / D);
      k *= B, D *= B;
    } else if (v === "cover") {
      var B = Math.max(g / k, p / D);
      k *= B, D *= B;
    }
    var P = o - g / 2, L = c(t, "background-position-x", "units", a), M = c(t, "background-position-x", "pfValue", a);
    L === "%" ? P += (g - k) * M : P += M;
    var I = c(t, "background-offset-x", "units", a), R = c(t, "background-offset-x", "pfValue", a);
    I === "%" ? P += (g - k) * R : P += R;
    var O = u - p / 2, $ = c(t, "background-position-y", "units", a), H = c(t, "background-position-y", "pfValue", a);
    $ === "%" ? O += (p - D) * H : O += H;
    var z = c(t, "background-offset-y", "units", a), F = c(t, "background-offset-y", "pfValue", a);
    z === "%" ? O += (p - D) * F : O += F, m.pathCache && (P -= o, O -= u, o = 0, u = 0);
    var U = r.globalAlpha;
    r.globalAlpha = E;
    var Y = i.getImgSmoothing(r), G = !1;
    if (C === "no" && Y ? (i.setImgSmoothing(r, !1), G = !0) : C === "yes" && !Y && (i.setImgSmoothing(r, !0), G = !0), f === "no-repeat")
      w && (r.save(), m.pathCache ? r.clip(m.pathCache) : (i.nodeShapes[i.getNodeShape(t)].draw(r, o, u, g, p, x, m), r.clip())), i.safeDrawImage(r, e, 0, 0, T, A, P, O, k, D), w && r.restore();
    else {
      var Q = r.createPattern(e, f);
      r.fillStyle = Q, i.nodeShapes[i.getNodeShape(t)].draw(r, o, u, g, p, x, m), r.translate(P, O), r.fill(), r.translate(-P, -O);
    }
    r.globalAlpha = U, G && i.setImgSmoothing(r, Y);
  }
};
var Hr = {};
Hr.eleTextBiggerThanMin = function(r, e) {
  if (!e) {
    var t = r.cy().zoom(), a = this.getPixelRatio(), n = Math.ceil(Vo(t * a));
    e = Math.pow(2, n);
  }
  var i = r.pstyle("font-size").pfValue * e, s = r.pstyle("min-zoomed-font-size").pfValue;
  return !(i < s);
};
Hr.drawElementText = function(r, e, t, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this;
  if (a == null) {
    if (i && !s.eleTextBiggerThanMin(e))
      return;
  } else if (a === !1)
    return;
  if (e.isNode()) {
    var o = e.pstyle("label");
    if (!o || !o.value)
      return;
    var u = s.getLabelJustification(e);
    r.textAlign = u, r.textBaseline = "bottom";
  } else {
    var l = e.element()._private.rscratch.badLine, c = e.pstyle("label"), v = e.pstyle("source-label"), f = e.pstyle("target-label");
    if (l || (!c || !c.value) && (!v || !v.value) && (!f || !f.value))
      return;
    r.textAlign = "center", r.textBaseline = "bottom";
  }
  var h = !t, d;
  t && (d = t, r.translate(-d.x1, -d.y1)), n == null ? (s.drawText(r, e, null, h, i), e.isEdge() && (s.drawText(r, e, "source", h, i), s.drawText(r, e, "target", h, i))) : s.drawText(r, e, n, h, i), t && r.translate(d.x1, d.y1);
};
Hr.getFontCache = function(r) {
  var e;
  this.fontCaches = this.fontCaches || [];
  for (var t = 0; t < this.fontCaches.length; t++)
    if (e = this.fontCaches[t], e.context === r)
      return e;
  return e = {
    context: r
  }, this.fontCaches.push(e), e;
};
Hr.setupTextStyle = function(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = t ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, u = e.pstyle("text-outline-opacity").value * o, l = e.pstyle("color").value, c = e.pstyle("text-outline-color").value;
  r.font = a + " " + s + " " + n + " " + i, r.lineJoin = "round", this.colorFillStyle(r, l[0], l[1], l[2], o), this.colorStrokeStyle(r, c[0], c[1], c[2], u);
};
function um(r, e, t, a, n) {
  var i = Math.min(a, n), s = i / 2, o = e + a / 2, u = t + n / 2;
  r.beginPath(), r.arc(o, u, s, 0, Math.PI * 2), r.closePath();
}
function Oc(r, e, t, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = Math.min(i, a / 2, n / 2);
  r.beginPath(), r.moveTo(e + s, t), r.lineTo(e + a - s, t), r.quadraticCurveTo(e + a, t, e + a, t + s), r.lineTo(e + a, t + n - s), r.quadraticCurveTo(e + a, t + n, e + a - s, t + n), r.lineTo(e + s, t + n), r.quadraticCurveTo(e, t + n, e, t + n - s), r.lineTo(e, t + s), r.quadraticCurveTo(e, t, e + s, t), r.closePath();
}
Hr.getTextAngle = function(r, e) {
  var t, a = r._private, n = a.rscratch, i = e ? e + "-" : "", s = r.pstyle(i + "text-rotation");
  if (s.strValue === "autorotate") {
    var o = kt(n, "labelAngle", e);
    t = r.isEdge() ? o : 0;
  } else
    s.strValue === "none" ? t = 0 : t = s.pfValue;
  return t;
};
Hr.drawText = function(r, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = e._private, s = i.rscratch, o = n ? e.effectiveOpacity() : 1;
  if (!(n && (o === 0 || e.pstyle("text-opacity").value === 0))) {
    t === "main" && (t = null);
    var u = kt(s, "labelX", t), l = kt(s, "labelY", t), c, v, f = this.getLabelText(e, t);
    if (f != null && f !== "" && !isNaN(u) && !isNaN(l)) {
      this.setupTextStyle(r, e, n);
      var h = t ? t + "-" : "", d = kt(s, "labelWidth", t), y = kt(s, "labelHeight", t), g = e.pstyle(h + "text-margin-x").pfValue, p = e.pstyle(h + "text-margin-y").pfValue, m = e.isEdge(), b = e.pstyle("text-halign").value, w = e.pstyle("text-valign").value;
      m && (b = "center", w = "center"), u += g, l += p;
      var E;
      switch (a ? E = this.getTextAngle(e, t) : E = 0, E !== 0 && (c = u, v = l, r.translate(c, v), r.rotate(E), u = 0, l = 0), w) {
        case "top":
          break;
        case "center":
          l += y / 2;
          break;
        case "bottom":
          l += y;
          break;
      }
      var C = e.pstyle("text-background-opacity").value, x = e.pstyle("text-border-opacity").value, T = e.pstyle("text-border-width").pfValue, A = e.pstyle("text-background-padding").pfValue, k = e.pstyle("text-background-shape").strValue, D = k === "round-rectangle" || k === "roundrectangle", B = k === "circle", P = 2;
      if (C > 0 || T > 0 && x > 0) {
        var L = r.fillStyle, M = r.strokeStyle, I = r.lineWidth, R = e.pstyle("text-background-color").value, O = e.pstyle("text-border-color").value, $ = e.pstyle("text-border-style").value, H = C > 0, z = T > 0 && x > 0, F = u - A;
        switch (b) {
          case "left":
            F -= d;
            break;
          case "center":
            F -= d / 2;
            break;
        }
        var U = l - y - A, Y = d + 2 * A, G = y + 2 * A;
        if (H && (r.fillStyle = "rgba(".concat(R[0], ",").concat(R[1], ",").concat(R[2], ",").concat(C * o, ")")), z && (r.strokeStyle = "rgba(".concat(O[0], ",").concat(O[1], ",").concat(O[2], ",").concat(x * o, ")"), r.lineWidth = T, r.setLineDash))
          switch ($) {
            case "dotted":
              r.setLineDash([1, 1]);
              break;
            case "dashed":
              r.setLineDash([4, 2]);
              break;
            case "double":
              r.lineWidth = T / 4, r.setLineDash([]);
              break;
            case "solid":
            default:
              r.setLineDash([]);
              break;
          }
        if (D ? (r.beginPath(), Oc(r, F, U, Y, G, P)) : B ? (r.beginPath(), um(r, F, U, Y, G)) : (r.beginPath(), r.rect(F, U, Y, G)), H && r.fill(), z && r.stroke(), z && $ === "double") {
          var Q = T / 2;
          r.beginPath(), D ? Oc(r, F + Q, U + Q, Y - 2 * Q, G - 2 * Q, P) : r.rect(F + Q, U + Q, Y - 2 * Q, G - 2 * Q), r.stroke();
        }
        r.fillStyle = L, r.strokeStyle = M, r.lineWidth = I, r.setLineDash && r.setLineDash([]);
      }
      var J = 2 * e.pstyle("text-outline-width").pfValue;
      if (J > 0 && (r.lineWidth = J), e.pstyle("text-wrap").value === "wrap") {
        var ae = kt(s, "labelWrapCachedLines", t), W = kt(s, "labelLineHeight", t), N = d / 2, V = this.getLabelJustification(e);
        switch (V === "auto" || (b === "left" ? V === "left" ? u += -d : V === "center" && (u += -N) : b === "center" ? V === "left" ? u += -N : V === "right" && (u += N) : b === "right" && (V === "center" ? u += N : V === "right" && (u += d))), w) {
          case "top":
            l -= (ae.length - 1) * W;
            break;
          case "center":
          case "bottom":
            l -= (ae.length - 1) * W;
            break;
        }
        for (var _ = 0; _ < ae.length; _++)
          J > 0 && r.strokeText(ae[_], u, l), r.fillText(ae[_], u, l), l += W;
      } else
        J > 0 && r.strokeText(f, u, l), r.fillText(f, u, l);
      E !== 0 && (r.rotate(-E), r.translate(-c, -v));
    }
  }
};
var Cr = {};
Cr.drawNode = function(r, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o, u, l = e._private, c = l.rscratch, v = e.position();
  if (!(!ne(v.x) || !ne(v.y)) && !(i && !e.visible())) {
    var f = i ? e.effectiveOpacity() : 1, h = s.usePaths(), d, y = !1, g = e.padding();
    o = e.width() + 2 * g, u = e.height() + 2 * g;
    var p;
    t && (p = t, r.translate(-p.x1, -p.y1));
    for (var m = e.pstyle("background-image"), b = m.value, w = new Array(b.length), E = new Array(b.length), C = 0, x = 0; x < b.length; x++) {
      var T = b[x], A = w[x] = T != null && T !== "none";
      if (A) {
        var k = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", x);
        C++, E[x] = s.getCachedImage(T, k, function() {
          l.backgroundTimestamp = Date.now(), e.emitAndNotify("background");
        });
      }
    }
    var D = e.pstyle("background-blacken").value, B = e.pstyle("border-width").pfValue, P = e.pstyle("background-opacity").value * f, L = e.pstyle("border-color").value, M = e.pstyle("border-style").value, I = e.pstyle("border-join").value, R = e.pstyle("border-cap").value, O = e.pstyle("border-position").value, $ = e.pstyle("border-dash-pattern").pfValue, H = e.pstyle("border-dash-offset").pfValue, z = e.pstyle("border-opacity").value * f, F = e.pstyle("outline-width").pfValue, U = e.pstyle("outline-color").value, Y = e.pstyle("outline-style").value, G = e.pstyle("outline-opacity").value * f, Q = e.pstyle("outline-offset").value, J = e.pstyle("corner-radius").value;
    J !== "auto" && (J = e.pstyle("corner-radius").pfValue);
    var ae = function() {
      var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : P;
      s.eleFillStyle(r, e, le);
    }, W = function() {
      var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : z;
      s.colorStrokeStyle(r, L[0], L[1], L[2], le);
    }, N = function() {
      var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : G;
      s.colorStrokeStyle(r, U[0], U[1], U[2], le);
    }, V = function(le, j, S, q) {
      var X = s.nodePathCache = s.nodePathCache || [], Z = dv(S === "polygon" ? S + "," + q.join(",") : S, "" + j, "" + le, "" + J), ee = X[Z], ue, te = !1;
      return ee != null ? (ue = ee, te = !0, c.pathCache = ue) : (ue = new Path2D(), X[Z] = c.pathCache = ue), {
        path: ue,
        cacheHit: te
      };
    }, _ = e.pstyle("shape").strValue, K = e.pstyle("shape-polygon-points").pfValue;
    if (h) {
      r.translate(v.x, v.y);
      var re = V(o, u, _, K);
      d = re.path, y = re.cacheHit;
    }
    var se = function() {
      if (!y) {
        var le = v;
        h && (le = {
          x: 0,
          y: 0
        }), s.nodeShapes[s.getNodeShape(e)].draw(d || r, le.x, le.y, o, u, J, c);
      }
      h ? r.fill(d) : r.fill();
    }, Te = function() {
      for (var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, S = l.backgrounding, q = 0, X = 0; X < E.length; X++) {
        var Z = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", X);
        if (j && Z === "over" || !j && Z === "inside") {
          q++;
          continue;
        }
        w[X] && E[X].complete && !E[X].error && (q++, s.drawInscribedImage(r, E[X], e, X, le));
      }
      l.backgrounding = q !== C, S !== l.backgrounding && e.updateStyle(!1);
    }, Ce = function() {
      var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
      s.hasPie(e) && (s.drawPie(r, e, j), le && (h || s.nodeShapes[s.getNodeShape(e)].draw(r, v.x, v.y, o, u, J, c)));
    }, we = function() {
      var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f;
      s.hasStripe(e) && (r.save(), h ? r.clip(c.pathCache) : (s.nodeShapes[s.getNodeShape(e)].draw(r, v.x, v.y, o, u, J, c), r.clip()), s.drawStripe(r, e, j), r.restore(), le && (h || s.nodeShapes[s.getNodeShape(e)].draw(r, v.x, v.y, o, u, J, c)));
    }, ye = function() {
      var le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f, j = (D > 0 ? D : -D) * le, S = D > 0 ? 0 : 255;
      D !== 0 && (s.colorFillStyle(r, S, S, S, j), h ? r.fill(d) : r.fill());
    }, ie = function() {
      if (B > 0) {
        if (r.lineWidth = B, r.lineCap = R, r.lineJoin = I, r.setLineDash)
          switch (M) {
            case "dotted":
              r.setLineDash([1, 1]);
              break;
            case "dashed":
              r.setLineDash($), r.lineDashOffset = H;
              break;
            case "solid":
            case "double":
              r.setLineDash([]);
              break;
          }
        if (O !== "center") {
          if (r.save(), r.lineWidth *= 2, O === "inside")
            h ? r.clip(d) : r.clip();
          else {
            var le = new Path2D();
            le.rect(-o / 2 - B, -u / 2 - B, o + 2 * B, u + 2 * B), le.addPath(d), r.clip(le, "evenodd");
          }
          h ? r.stroke(d) : r.stroke(), r.restore();
        } else
          h ? r.stroke(d) : r.stroke();
        if (M === "double") {
          r.lineWidth = B / 3;
          var j = r.globalCompositeOperation;
          r.globalCompositeOperation = "destination-out", h ? r.stroke(d) : r.stroke(), r.globalCompositeOperation = j;
        }
        r.setLineDash && r.setLineDash([]);
      }
    }, de = function() {
      if (F > 0) {
        if (r.lineWidth = F, r.lineCap = "butt", r.setLineDash)
          switch (Y) {
            case "dotted":
              r.setLineDash([1, 1]);
              break;
            case "dashed":
              r.setLineDash([4, 2]);
              break;
            case "solid":
            case "double":
              r.setLineDash([]);
              break;
          }
        var le = v;
        h && (le = {
          x: 0,
          y: 0
        });
        var j = s.getNodeShape(e), S = B;
        O === "inside" && (S = 0), O === "outside" && (S *= 2);
        var q = (o + S + (F + Q)) / o, X = (u + S + (F + Q)) / u, Z = o * q, ee = u * X, ue = s.nodeShapes[j].points, te;
        if (h) {
          var ve = V(Z, ee, j, ue);
          te = ve.path;
        }
        if (j === "ellipse")
          s.drawEllipsePath(te || r, le.x, le.y, Z, ee);
        else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(j)) {
          var ce = 0, me = 0, De = 0;
          j === "round-diamond" ? ce = (S + Q + F) * 1.4 : j === "round-heptagon" ? (ce = (S + Q + F) * 1.075, De = -(S / 2 + Q + F) / 35) : j === "round-hexagon" ? ce = (S + Q + F) * 1.12 : j === "round-pentagon" ? (ce = (S + Q + F) * 1.13, De = -(S / 2 + Q + F) / 15) : j === "round-tag" ? (ce = (S + Q + F) * 1.12, me = (S / 2 + F + Q) * 0.07) : j === "round-triangle" && (ce = (S + Q + F) * (Math.PI / 2), De = -(S + Q / 2 + F) / Math.PI), ce !== 0 && (q = (o + ce) / o, Z = o * q, ["round-hexagon", "round-tag"].includes(j) || (X = (u + ce) / u, ee = u * X)), J = J === "auto" ? Cv(Z, ee) : J;
          for (var Se = Z / 2, fe = ee / 2, Pe = J + (S + F + Q) / 2, Be = new Array(ue.length / 2), et = new Array(ue.length / 2), Xe = 0; Xe < ue.length / 2; Xe++)
            Be[Xe] = {
              x: le.x + me + Se * ue[Xe * 2],
              y: le.y + De + fe * ue[Xe * 2 + 1]
            };
          var xt, Ze, st, tt, vt = Be.length;
          for (Ze = Be[vt - 1], xt = 0; xt < vt; xt++)
            st = Be[xt % vt], tt = Be[(xt + 1) % vt], et[xt] = jo(Ze, st, tt, Pe), Ze = st, st = tt;
          s.drawRoundPolygonPath(te || r, le.x + me, le.y + De, o * q, u * X, ue, et);
        } else if (["roundrectangle", "round-rectangle"].includes(j))
          J = J === "auto" ? pr(Z, ee) : J, s.drawRoundRectanglePath(te || r, le.x, le.y, Z, ee, J + (S + F + Q) / 2);
        else if (["cutrectangle", "cut-rectangle"].includes(j))
          J = J === "auto" ? qo() : J, s.drawCutRectanglePath(te || r, le.x, le.y, Z, ee, null, J + (S + F + Q) / 4);
        else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(j))
          J = J === "auto" ? pr(Z, ee) : J, s.drawBottomRoundRectanglePath(te || r, le.x, le.y, Z, ee, J + (S + F + Q) / 2);
        else if (j === "barrel")
          s.drawBarrelPath(te || r, le.x, le.y, Z, ee);
        else if (j.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(j)) {
          var ar = (S + F + Q) / o;
          ue = Xn(Yn(ue, ar)), s.drawPolygonPath(te || r, le.x, le.y, o, u, ue);
        } else {
          var Qe = (S + F + Q) / o;
          ue = Xn(Yn(ue, -Qe)), s.drawPolygonPath(te || r, le.x, le.y, o, u, ue);
        }
        if (h ? r.stroke(te) : r.stroke(), Y === "double") {
          r.lineWidth = S / 3;
          var Xt = r.globalCompositeOperation;
          r.globalCompositeOperation = "destination-out", h ? r.stroke(te) : r.stroke(), r.globalCompositeOperation = Xt;
        }
        r.setLineDash && r.setLineDash([]);
      }
    }, he = function() {
      n && s.drawNodeOverlay(r, e, v, o, u);
    }, Ee = function() {
      n && s.drawNodeUnderlay(r, e, v, o, u);
    }, pe = function() {
      s.drawElementText(r, e, null, a);
    }, Ae = e.pstyle("ghost").value === "yes";
    if (Ae) {
      var Le = e.pstyle("ghost-offset-x").pfValue, Oe = e.pstyle("ghost-offset-y").pfValue, Ne = e.pstyle("ghost-opacity").value, ze = Ne * f;
      r.translate(Le, Oe), N(), de(), ae(Ne * P), se(), Te(ze, !0), W(Ne * z), ie(), Ce(D !== 0 || B !== 0), we(D !== 0 || B !== 0), Te(ze, !1), ye(ze), r.translate(-Le, -Oe);
    }
    h && r.translate(-v.x, -v.y), Ee(), h && r.translate(v.x, v.y), N(), de(), ae(), se(), Te(f, !0), W(), ie(), Ce(D !== 0 || B !== 0), we(D !== 0 || B !== 0), Te(f, !1), ye(), h && r.translate(-v.x, -v.y), pe(), he(), t && r.translate(p.x1, p.y1);
  }
};
var Pf = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(t, a, n, i, s) {
    var o = this;
    if (a.visible()) {
      var u = a.pstyle("".concat(e, "-padding")).pfValue, l = a.pstyle("".concat(e, "-opacity")).value, c = a.pstyle("".concat(e, "-color")).value, v = a.pstyle("".concat(e, "-shape")).value, f = a.pstyle("".concat(e, "-corner-radius")).value;
      if (l > 0) {
        if (n = n || a.position(), i == null || s == null) {
          var h = a.padding();
          i = a.width() + 2 * h, s = a.height() + 2 * h;
        }
        o.colorFillStyle(t, c[0], c[1], c[2], l), o.nodeShapes[v].draw(t, n.x, n.y, i + u * 2, s + u * 2, f), t.fill();
      }
    }
  };
};
Cr.drawNodeOverlay = Pf("overlay");
Cr.drawNodeUnderlay = Pf("underlay");
Cr.hasPie = function(r) {
  return r = r[0], r._private.hasPie;
};
Cr.hasStripe = function(r) {
  return r = r[0], r._private.hasStripe;
};
Cr.drawPie = function(r, e, t, a) {
  e = e[0], a = a || e.position();
  var n = e.cy().style(), i = e.pstyle("pie-size"), s = e.pstyle("pie-hole"), o = e.pstyle("pie-start-angle").pfValue, u = a.x, l = a.y, c = e.width(), v = e.height(), f = Math.min(c, v) / 2, h, d = 0, y = this.usePaths();
  if (y && (u = 0, l = 0), i.units === "%" ? f = f * i.pfValue : i.pfValue !== void 0 && (f = i.pfValue / 2), s.units === "%" ? h = f * s.pfValue : s.pfValue !== void 0 && (h = s.pfValue / 2), !(h >= f))
    for (var g = 1; g <= n.pieBackgroundN; g++) {
      var p = e.pstyle("pie-" + g + "-background-size").value, m = e.pstyle("pie-" + g + "-background-color").value, b = e.pstyle("pie-" + g + "-background-opacity").value * t, w = p / 100;
      w + d > 1 && (w = 1 - d);
      var E = 1.5 * Math.PI + 2 * Math.PI * d;
      E += o;
      var C = 2 * Math.PI * w, x = E + C;
      p === 0 || d >= 1 || d + w > 1 || (h === 0 ? (r.beginPath(), r.moveTo(u, l), r.arc(u, l, f, E, x), r.closePath()) : (r.beginPath(), r.arc(u, l, f, E, x), r.arc(u, l, h, x, E, !0), r.closePath()), this.colorFillStyle(r, m[0], m[1], m[2], b), r.fill(), d += w);
    }
};
Cr.drawStripe = function(r, e, t, a) {
  e = e[0], a = a || e.position();
  var n = e.cy().style(), i = a.x, s = a.y, o = e.width(), u = e.height(), l = 0, c = this.usePaths();
  r.save();
  var v = e.pstyle("stripe-direction").value, f = e.pstyle("stripe-size");
  switch (v) {
    case "vertical":
      break;
    case "righward":
      r.rotate(-Math.PI / 2);
      break;
  }
  var h = o, d = u;
  f.units === "%" ? (h = h * f.pfValue, d = d * f.pfValue) : f.pfValue !== void 0 && (h = f.pfValue, d = f.pfValue), c && (i = 0, s = 0), s -= h / 2, i -= d / 2;
  for (var y = 1; y <= n.stripeBackgroundN; y++) {
    var g = e.pstyle("stripe-" + y + "-background-size").value, p = e.pstyle("stripe-" + y + "-background-color").value, m = e.pstyle("stripe-" + y + "-background-opacity").value * t, b = g / 100;
    b + l > 1 && (b = 1 - l), !(g === 0 || l >= 1 || l + b > 1) && (r.beginPath(), r.rect(i, s + d * l, h, d * b), r.closePath(), this.colorFillStyle(r, p[0], p[1], p[2], m), r.fill(), l += b);
  }
  r.restore();
};
var Tt = {}, lm = 100;
Tt.getPixelRatio = function() {
  var r = this.data.contexts[0];
  if (this.forcedPixelRatio != null)
    return this.forcedPixelRatio;
  var e = this.cy.window(), t = r.backingStorePixelRatio || r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
  return (e.devicePixelRatio || 1) / t;
};
Tt.paintCache = function(r) {
  for (var e = this.paintCaches = this.paintCaches || [], t = !0, a, n = 0; n < e.length; n++)
    if (a = e[n], a.context === r) {
      t = !1;
      break;
    }
  return t && (a = {
    context: r
  }, e.push(a)), a;
};
Tt.createGradientStyleFor = function(r, e, t, a, n) {
  var i, s = this.usePaths(), o = t.pstyle(e + "-gradient-stop-colors").value, u = t.pstyle(e + "-gradient-stop-positions").pfValue;
  if (a === "radial-gradient")
    if (t.isEdge()) {
      var l = t.sourceEndpoint(), c = t.targetEndpoint(), v = t.midpoint(), f = zr(l, v), h = zr(c, v);
      i = r.createRadialGradient(v.x, v.y, 0, v.x, v.y, Math.max(f, h));
    } else {
      var d = s ? {
        x: 0,
        y: 0
      } : t.position(), y = t.paddedWidth(), g = t.paddedHeight();
      i = r.createRadialGradient(d.x, d.y, 0, d.x, d.y, Math.max(y, g));
    }
  else if (t.isEdge()) {
    var p = t.sourceEndpoint(), m = t.targetEndpoint();
    i = r.createLinearGradient(p.x, p.y, m.x, m.y);
  } else {
    var b = s ? {
      x: 0,
      y: 0
    } : t.position(), w = t.paddedWidth(), E = t.paddedHeight(), C = w / 2, x = E / 2, T = t.pstyle("background-gradient-direction").value;
    switch (T) {
      case "to-bottom":
        i = r.createLinearGradient(b.x, b.y - x, b.x, b.y + x);
        break;
      case "to-top":
        i = r.createLinearGradient(b.x, b.y + x, b.x, b.y - x);
        break;
      case "to-left":
        i = r.createLinearGradient(b.x + C, b.y, b.x - C, b.y);
        break;
      case "to-right":
        i = r.createLinearGradient(b.x - C, b.y, b.x + C, b.y);
        break;
      case "to-bottom-right":
      case "to-right-bottom":
        i = r.createLinearGradient(b.x - C, b.y - x, b.x + C, b.y + x);
        break;
      case "to-top-right":
      case "to-right-top":
        i = r.createLinearGradient(b.x - C, b.y + x, b.x + C, b.y - x);
        break;
      case "to-bottom-left":
      case "to-left-bottom":
        i = r.createLinearGradient(b.x + C, b.y - x, b.x - C, b.y + x);
        break;
      case "to-top-left":
      case "to-left-top":
        i = r.createLinearGradient(b.x + C, b.y + x, b.x - C, b.y - x);
        break;
    }
  }
  if (!i)
    return null;
  for (var A = u.length === o.length, k = o.length, D = 0; D < k; D++)
    i.addColorStop(A ? u[D] : D / (k - 1), "rgba(" + o[D][0] + "," + o[D][1] + "," + o[D][2] + "," + n + ")");
  return i;
};
Tt.gradientFillStyle = function(r, e, t, a) {
  var n = this.createGradientStyleFor(r, "background", e, t, a);
  if (!n)
    return null;
  r.fillStyle = n;
};
Tt.colorFillStyle = function(r, e, t, a, n) {
  r.fillStyle = "rgba(" + e + "," + t + "," + a + "," + n + ")";
};
Tt.eleFillStyle = function(r, e, t) {
  var a = e.pstyle("background-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientFillStyle(r, e, a, t);
  else {
    var n = e.pstyle("background-color").value;
    this.colorFillStyle(r, n[0], n[1], n[2], t);
  }
};
Tt.gradientStrokeStyle = function(r, e, t, a) {
  var n = this.createGradientStyleFor(r, "line", e, t, a);
  if (!n)
    return null;
  r.strokeStyle = n;
};
Tt.colorStrokeStyle = function(r, e, t, a, n) {
  r.strokeStyle = "rgba(" + e + "," + t + "," + a + "," + n + ")";
};
Tt.eleStrokeStyle = function(r, e, t) {
  var a = e.pstyle("line-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientStrokeStyle(r, e, a, t);
  else {
    var n = e.pstyle("line-color").value;
    this.colorStrokeStyle(r, n[0], n[1], n[2], t);
  }
};
Tt.matchCanvasSize = function(r) {
  var e = this, t = e.data, a = e.findContainerClientCoords(), n = a[2], i = a[3], s = e.getPixelRatio(), o = e.motionBlurPxRatio;
  (r === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || r === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
  var u = n * s, l = i * s, c;
  if (!(u === e.canvasWidth && l === e.canvasHeight)) {
    e.fontCaches = null;
    var v = t.canvasContainer;
    v.style.width = n + "px", v.style.height = i + "px";
    for (var f = 0; f < e.CANVAS_LAYERS; f++)
      c = t.canvases[f], c.width = u, c.height = l, c.style.width = n + "px", c.style.height = i + "px";
    for (var f = 0; f < e.BUFFER_COUNT; f++)
      c = t.bufferCanvases[f], c.width = u, c.height = l, c.style.width = n + "px", c.style.height = i + "px";
    e.textureMult = 1, s <= 1 && (c = t.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, c.width = u * e.textureMult, c.height = l * e.textureMult), e.canvasWidth = u, e.canvasHeight = l, e.pixelRatio = s;
  }
};
Tt.renderTo = function(r, e, t, a) {
  this.render({
    forcedContext: r,
    forcedZoom: e,
    forcedPan: t,
    drawAllLayers: !0,
    forcedPxRatio: a
  });
};
Tt.clearCanvas = function() {
  var r = this, e = r.data;
  function t(a) {
    a.clearRect(0, 0, r.canvasWidth, r.canvasHeight);
  }
  t(e.contexts[r.NODE]), t(e.contexts[r.DRAG]);
};
Tt.render = function(r) {
  var e = this;
  r = r || yv();
  var t = e.cy, a = r.forcedContext, n = r.drawAllLayers, i = r.drawOnlyNodeLayer, s = r.forcedZoom, o = r.forcedPan, u = r.forcedPxRatio === void 0 ? this.getPixelRatio() : r.forcedPxRatio, l = e.data, c = l.canvasNeedsRedraw, v = e.textureOnViewport && !a && (e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming), f = r.motionBlur !== void 0 ? r.motionBlur : e.motionBlur, h = e.motionBlurPxRatio, d = t.hasCompoundNodes(), y = e.hoverData.draggingEles, g = !!(e.hoverData.selecting || e.touchData.selecting);
  f = f && !a && e.motionBlurEnabled && !g;
  var p = f;
  a || (e.prevPxRatio !== u && (e.invalidateContainerClientCoordsCache(), e.matchCanvasSize(e.container), e.redrawHint("eles", !0), e.redrawHint("drag", !0)), e.prevPxRatio = u), !a && e.motionBlurTimeout && clearTimeout(e.motionBlurTimeout), f && (e.mbFrames == null && (e.mbFrames = 0), e.mbFrames++, e.mbFrames < 3 && (p = !1), e.mbFrames > e.minMbLowQualFrames && (e.motionBlurPxRatio = e.mbPxRBlurry)), e.clearingMotionBlur && (e.motionBlurPxRatio = 1), e.textureDrawLastFrame && !v && (c[e.NODE] = !0, c[e.SELECT_BOX] = !0);
  var m = t.style(), b = t.zoom(), w = s !== void 0 ? s : b, E = t.pan(), C = {
    x: E.x,
    y: E.y
  }, x = {
    zoom: b,
    pan: {
      x: E.x,
      y: E.y
    }
  }, T = e.prevViewport, A = T === void 0 || x.zoom !== T.zoom || x.pan.x !== T.pan.x || x.pan.y !== T.pan.y;
  !A && !(y && !d) && (e.motionBlurPxRatio = 1), o && (C = o), w *= u, C.x *= u, C.y *= u;
  var k = e.getCachedZSortedEles();
  function D(W, N, V, _, K) {
    var re = W.globalCompositeOperation;
    W.globalCompositeOperation = "destination-out", e.colorFillStyle(W, 255, 255, 255, e.motionBlurTransparency), W.fillRect(N, V, _, K), W.globalCompositeOperation = re;
  }
  function B(W, N) {
    var V, _, K, re;
    !e.clearingMotionBlur && (W === l.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] || W === l.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG]) ? (V = {
      x: E.x * h,
      y: E.y * h
    }, _ = b * h, K = e.canvasWidth * h, re = e.canvasHeight * h) : (V = C, _ = w, K = e.canvasWidth, re = e.canvasHeight), W.setTransform(1, 0, 0, 1, 0, 0), N === "motionBlur" ? D(W, 0, 0, K, re) : !a && (N === void 0 || N) && W.clearRect(0, 0, K, re), n || (W.translate(V.x, V.y), W.scale(_, _)), o && W.translate(o.x, o.y), s && W.scale(s, s);
  }
  if (v || (e.textureDrawLastFrame = !1), v) {
    if (e.textureDrawLastFrame = !0, !e.textureCache) {
      e.textureCache = {}, e.textureCache.bb = t.mutableElements().boundingBox(), e.textureCache.texture = e.data.bufferCanvases[e.TEXTURE_BUFFER];
      var P = e.data.bufferContexts[e.TEXTURE_BUFFER];
      P.setTransform(1, 0, 0, 1, 0, 0), P.clearRect(0, 0, e.canvasWidth * e.textureMult, e.canvasHeight * e.textureMult), e.render({
        forcedContext: P,
        drawOnlyNodeLayer: !0,
        forcedPxRatio: u * e.textureMult
      });
      var x = e.textureCache.viewport = {
        zoom: t.zoom(),
        pan: t.pan(),
        width: e.canvasWidth,
        height: e.canvasHeight
      };
      x.mpan = {
        x: (0 - x.pan.x) / x.zoom,
        y: (0 - x.pan.y) / x.zoom
      };
    }
    c[e.DRAG] = !1, c[e.NODE] = !1;
    var L = l.contexts[e.NODE], M = e.textureCache.texture, x = e.textureCache.viewport;
    L.setTransform(1, 0, 0, 1, 0, 0), f ? D(L, 0, 0, x.width, x.height) : L.clearRect(0, 0, x.width, x.height);
    var I = m.core("outside-texture-bg-color").value, R = m.core("outside-texture-bg-opacity").value;
    e.colorFillStyle(L, I[0], I[1], I[2], R), L.fillRect(0, 0, x.width, x.height);
    var b = t.zoom();
    B(L, !1), L.clearRect(x.mpan.x, x.mpan.y, x.width / x.zoom / u, x.height / x.zoom / u), L.drawImage(M, x.mpan.x, x.mpan.y, x.width / x.zoom / u, x.height / x.zoom / u);
  } else
    e.textureOnViewport && !a && (e.textureCache = null);
  var O = t.extent(), $ = e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming || e.hoverData.draggingEles || e.cy.animated(), H = e.hideEdgesOnViewport && $, z = [];
  if (z[e.NODE] = !c[e.NODE] && f && !e.clearedForMotionBlur[e.NODE] || e.clearingMotionBlur, z[e.NODE] && (e.clearedForMotionBlur[e.NODE] = !0), z[e.DRAG] = !c[e.DRAG] && f && !e.clearedForMotionBlur[e.DRAG] || e.clearingMotionBlur, z[e.DRAG] && (e.clearedForMotionBlur[e.DRAG] = !0), c[e.NODE] || n || i || z[e.NODE]) {
    var F = f && !z[e.NODE] && h !== 1, L = a || (F ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] : l.contexts[e.NODE]), U = f && !F ? "motionBlur" : void 0;
    B(L, U), H ? e.drawCachedNodes(L, k.nondrag, u, O) : e.drawLayeredElements(L, k.nondrag, u, O), e.debug && e.drawDebugPoints(L, k.nondrag), !n && !f && (c[e.NODE] = !1);
  }
  if (!i && (c[e.DRAG] || n || z[e.DRAG])) {
    var F = f && !z[e.DRAG] && h !== 1, L = a || (F ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG] : l.contexts[e.DRAG]);
    B(L, f && !F ? "motionBlur" : void 0), H ? e.drawCachedNodes(L, k.drag, u, O) : e.drawCachedElements(L, k.drag, u, O), e.debug && e.drawDebugPoints(L, k.drag), !n && !f && (c[e.DRAG] = !1);
  }
  if (this.drawSelectionRectangle(r, B), f && h !== 1) {
    var Y = l.contexts[e.NODE], G = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE], Q = l.contexts[e.DRAG], J = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG], ae = function(N, V, _) {
      N.setTransform(1, 0, 0, 1, 0, 0), _ || !p ? N.clearRect(0, 0, e.canvasWidth, e.canvasHeight) : D(N, 0, 0, e.canvasWidth, e.canvasHeight);
      var K = h;
      N.drawImage(
        V,
        // img
        0,
        0,
        // sx, sy
        e.canvasWidth * K,
        e.canvasHeight * K,
        // sw, sh
        0,
        0,
        // x, y
        e.canvasWidth,
        e.canvasHeight
        // w, h
      );
    };
    (c[e.NODE] || z[e.NODE]) && (ae(Y, G, z[e.NODE]), c[e.NODE] = !1), (c[e.DRAG] || z[e.DRAG]) && (ae(Q, J, z[e.DRAG]), c[e.DRAG] = !1);
  }
  e.prevViewport = x, e.clearingMotionBlur && (e.clearingMotionBlur = !1, e.motionBlurCleared = !0, e.motionBlur = !0), f && (e.motionBlurTimeout = setTimeout(function() {
    e.motionBlurTimeout = null, e.clearedForMotionBlur[e.NODE] = !1, e.clearedForMotionBlur[e.DRAG] = !1, e.motionBlur = !1, e.clearingMotionBlur = !v, e.mbFrames = 0, c[e.NODE] = !0, c[e.DRAG] = !0, e.redraw();
  }, lm)), a || t.emit("render");
};
var ka;
Tt.drawSelectionRectangle = function(r, e) {
  var t = this, a = t.cy, n = t.data, i = a.style(), s = r.drawOnlyNodeLayer, o = r.drawAllLayers, u = n.canvasNeedsRedraw, l = r.forcedContext;
  if (t.showFps || !s && u[t.SELECT_BOX] && !o) {
    var c = l || n.contexts[t.SELECT_BOX];
    if (e(c), t.selection[4] == 1 && (t.hoverData.selecting || t.touchData.selecting)) {
      var v = t.cy.zoom(), f = i.core("selection-box-border-width").value / v;
      c.lineWidth = f, c.fillStyle = "rgba(" + i.core("selection-box-color").value[0] + "," + i.core("selection-box-color").value[1] + "," + i.core("selection-box-color").value[2] + "," + i.core("selection-box-opacity").value + ")", c.fillRect(t.selection[0], t.selection[1], t.selection[2] - t.selection[0], t.selection[3] - t.selection[1]), f > 0 && (c.strokeStyle = "rgba(" + i.core("selection-box-border-color").value[0] + "," + i.core("selection-box-border-color").value[1] + "," + i.core("selection-box-border-color").value[2] + "," + i.core("selection-box-opacity").value + ")", c.strokeRect(t.selection[0], t.selection[1], t.selection[2] - t.selection[0], t.selection[3] - t.selection[1]));
    }
    if (n.bgActivePosistion && !t.hoverData.selecting) {
      var v = t.cy.zoom(), h = n.bgActivePosistion;
      c.fillStyle = "rgba(" + i.core("active-bg-color").value[0] + "," + i.core("active-bg-color").value[1] + "," + i.core("active-bg-color").value[2] + "," + i.core("active-bg-opacity").value + ")", c.beginPath(), c.arc(h.x, h.y, i.core("active-bg-size").pfValue / v, 0, 2 * Math.PI), c.fill();
    }
    var d = t.lastRedrawTime;
    if (t.showFps && d) {
      d = Math.round(d);
      var y = Math.round(1e3 / d), g = "1 frame = " + d + " ms = " + y + " fps";
      if (c.setTransform(1, 0, 0, 1, 0, 0), c.fillStyle = "rgba(255, 0, 0, 0.75)", c.strokeStyle = "rgba(255, 0, 0, 0.75)", c.font = "30px Arial", !ka) {
        var p = c.measureText(g);
        ka = p.actualBoundingBoxAscent;
      }
      c.fillText(g, 0, ka);
      var m = 60;
      c.strokeRect(0, ka + 10, 250, 20), c.fillRect(0, ka + 10, 250 * Math.min(y / m, 1), 20);
    }
    o || (u[t.SELECT_BOX] = !1);
  }
};
function Nc(r, e, t) {
  var a = r.createShader(e);
  if (r.shaderSource(a, t), r.compileShader(a), !r.getShaderParameter(a, r.COMPILE_STATUS))
    throw new Error(r.getShaderInfoLog(a));
  return a;
}
function cm(r, e, t) {
  var a = Nc(r, r.VERTEX_SHADER, e), n = Nc(r, r.FRAGMENT_SHADER, t), i = r.createProgram();
  if (r.attachShader(i, a), r.attachShader(i, n), r.linkProgram(i), !r.getProgramParameter(i, r.LINK_STATUS))
    throw new Error("Could not initialize shaders");
  return i;
}
function vm(r, e, t) {
  t === void 0 && (t = e);
  var a = r.makeOffscreenCanvas(e, t), n = a.context = a.getContext("2d");
  return a.clear = function() {
    return n.clearRect(0, 0, a.width, a.height);
  }, a.clear(), a;
}
function ru(r) {
  var e = r.pixelRatio, t = r.cy.zoom(), a = r.cy.pan();
  return {
    zoom: t * e,
    pan: {
      x: a.x * e,
      y: a.y * e
    }
  };
}
function fm(r) {
  var e = r.pixelRatio, t = r.cy.zoom();
  return t * e;
}
function dm(r, e, t, a, n) {
  var i = a * t + e.x, s = n * t + e.y;
  return s = Math.round(r.canvasHeight - s), [i, s];
}
function hm(r) {
  return r.pstyle("background-fill").value !== "solid" || r.pstyle("background-image").strValue !== "none" ? !1 : r.pstyle("border-width").value === 0 || r.pstyle("border-opacity").value === 0 ? !0 : r.pstyle("border-style").value === "solid";
}
function gm(r, e) {
  if (r.length !== e.length)
    return !1;
  for (var t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Dr(r, e, t) {
  var a = r[0] / 255, n = r[1] / 255, i = r[2] / 255, s = e, o = t || new Array(4);
  return o[0] = a * s, o[1] = n * s, o[2] = i * s, o[3] = s, o;
}
function Zr(r, e) {
  var t = e || new Array(4);
  return t[0] = (r >> 0 & 255) / 255, t[1] = (r >> 8 & 255) / 255, t[2] = (r >> 16 & 255) / 255, t[3] = (r >> 24 & 255) / 255, t;
}
function pm(r) {
  return r[0] + (r[1] << 8) + (r[2] << 16) + (r[3] << 24);
}
function ym(r, e) {
  var t = r.createTexture();
  return t.buffer = function(a) {
    r.bindTexture(r.TEXTURE_2D, t), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_NEAREST), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, a), r.generateMipmap(r.TEXTURE_2D), r.bindTexture(r.TEXTURE_2D, null);
  }, t.deleteTexture = function() {
    r.deleteTexture(t);
  }, t;
}
function Lf(r, e) {
  switch (e) {
    case "float":
      return [1, r.FLOAT, 4];
    case "vec2":
      return [2, r.FLOAT, 4];
    case "vec3":
      return [3, r.FLOAT, 4];
    case "vec4":
      return [4, r.FLOAT, 4];
    case "int":
      return [1, r.INT, 4];
    case "ivec2":
      return [2, r.INT, 4];
  }
}
function Rf(r, e, t) {
  switch (e) {
    case r.FLOAT:
      return new Float32Array(t);
    case r.INT:
      return new Int32Array(t);
  }
}
function mm(r, e, t, a, n, i) {
  switch (e) {
    case r.FLOAT:
      return new Float32Array(t.buffer, i * a, n);
    case r.INT:
      return new Int32Array(t.buffer, i * a, n);
  }
}
function bm(r, e, t, a) {
  var n = Lf(r, e), i = je(n, 2), s = i[0], o = i[1], u = Rf(r, o, a), l = r.createBuffer();
  return r.bindBuffer(r.ARRAY_BUFFER, l), r.bufferData(r.ARRAY_BUFFER, u, r.STATIC_DRAW), o === r.FLOAT ? r.vertexAttribPointer(t, s, o, !1, 0, 0) : o === r.INT && r.vertexAttribIPointer(t, s, o, 0, 0), r.enableVertexAttribArray(t), r.bindBuffer(r.ARRAY_BUFFER, null), l;
}
function _t(r, e, t, a) {
  var n = Lf(r, t), i = je(n, 3), s = i[0], o = i[1], u = i[2], l = Rf(r, o, e * s), c = s * u, v = r.createBuffer();
  r.bindBuffer(r.ARRAY_BUFFER, v), r.bufferData(r.ARRAY_BUFFER, e * c, r.DYNAMIC_DRAW), r.enableVertexAttribArray(a), o === r.FLOAT ? r.vertexAttribPointer(a, s, o, !1, c, 0) : o === r.INT && r.vertexAttribIPointer(a, s, o, c, 0), r.vertexAttribDivisor(a, 1), r.bindBuffer(r.ARRAY_BUFFER, null);
  for (var f = new Array(e), h = 0; h < e; h++)
    f[h] = mm(r, o, l, c, s, h);
  return v.dataArray = l, v.stride = c, v.size = s, v.getView = function(d) {
    return f[d];
  }, v.setPoint = function(d, y, g) {
    var p = f[d];
    p[0] = y, p[1] = g;
  }, v.bufferSubData = function(d) {
    r.bindBuffer(r.ARRAY_BUFFER, v), d ? r.bufferSubData(r.ARRAY_BUFFER, 0, l, 0, d * s) : r.bufferSubData(r.ARRAY_BUFFER, 0, l);
  }, v;
}
function wm(r, e, t) {
  for (var a = 9, n = new Float32Array(e * a), i = new Array(e), s = 0; s < e; s++) {
    var o = s * a * 4;
    i[s] = new Float32Array(n.buffer, o, a);
  }
  var u = r.createBuffer();
  r.bindBuffer(r.ARRAY_BUFFER, u), r.bufferData(r.ARRAY_BUFFER, n.byteLength, r.DYNAMIC_DRAW);
  for (var l = 0; l < 3; l++) {
    var c = t + l;
    r.enableVertexAttribArray(c), r.vertexAttribPointer(c, 3, r.FLOAT, !1, 3 * 12, l * 12), r.vertexAttribDivisor(c, 1);
  }
  return r.bindBuffer(r.ARRAY_BUFFER, null), u.getMatrixView = function(v) {
    return i[v];
  }, u.setData = function(v, f) {
    i[f].set(v, 0);
  }, u.bufferSubData = function() {
    r.bindBuffer(r.ARRAY_BUFFER, u), r.bufferSubData(r.ARRAY_BUFFER, 0, n);
  }, u;
}
function xm(r) {
  var e = r.createFramebuffer();
  r.bindFramebuffer(r.FRAMEBUFFER, e);
  var t = r.createTexture();
  return r.bindTexture(r.TEXTURE_2D, t), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, t, 0), r.bindFramebuffer(r.FRAMEBUFFER, null), e.setFramebufferAttachmentSizes = function(a, n) {
    r.bindTexture(r.TEXTURE_2D, t), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, a, n, 0, r.RGBA, r.UNSIGNED_BYTE, null);
  }, e;
}
var zc = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var r = 0, e = arguments.length; e--; )
    r += arguments[e] * arguments[e];
  return Math.sqrt(r);
});
function to() {
  var r = new zc(9);
  return zc != Float32Array && (r[1] = 0, r[2] = 0, r[3] = 0, r[5] = 0, r[6] = 0, r[7] = 0), r[0] = 1, r[4] = 1, r[8] = 1, r;
}
function Fc(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 1, r[5] = 0, r[6] = 0, r[7] = 0, r[8] = 1, r;
}
function Em(r, e, t) {
  var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], u = e[5], l = e[6], c = e[7], v = e[8], f = t[0], h = t[1], d = t[2], y = t[3], g = t[4], p = t[5], m = t[6], b = t[7], w = t[8];
  return r[0] = f * a + h * s + d * l, r[1] = f * n + h * o + d * c, r[2] = f * i + h * u + d * v, r[3] = y * a + g * s + p * l, r[4] = y * n + g * o + p * c, r[5] = y * i + g * u + p * v, r[6] = m * a + b * s + w * l, r[7] = m * n + b * o + w * c, r[8] = m * i + b * u + w * v, r;
}
function _n(r, e, t) {
  var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], u = e[5], l = e[6], c = e[7], v = e[8], f = t[0], h = t[1];
  return r[0] = a, r[1] = n, r[2] = i, r[3] = s, r[4] = o, r[5] = u, r[6] = f * a + h * s + l, r[7] = f * n + h * o + c, r[8] = f * i + h * u + v, r;
}
function Vc(r, e, t) {
  var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], u = e[5], l = e[6], c = e[7], v = e[8], f = Math.sin(t), h = Math.cos(t);
  return r[0] = h * a + f * s, r[1] = h * n + f * o, r[2] = h * i + f * u, r[3] = h * s - f * a, r[4] = h * o - f * n, r[5] = h * u - f * i, r[6] = l, r[7] = c, r[8] = v, r;
}
function To(r, e, t) {
  var a = t[0], n = t[1];
  return r[0] = a * e[0], r[1] = a * e[1], r[2] = a * e[2], r[3] = n * e[3], r[4] = n * e[4], r[5] = n * e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r;
}
function Cm(r, e, t) {
  return r[0] = 2 / e, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = -2 / t, r[5] = 0, r[6] = -1, r[7] = 1, r[8] = 1, r;
}
var Tm = /* @__PURE__ */ function() {
  function r(e, t, a, n) {
    wr(this, r), this.debugID = Math.floor(Math.random() * 1e4), this.r = e, this.texSize = t, this.texRows = a, this.texHeight = Math.floor(t / a), this.enableWrapping = !0, this.locked = !1, this.texture = null, this.needsBuffer = !0, this.freePointer = {
      x: 0,
      row: 0
    }, this.keyToLocation = /* @__PURE__ */ new Map(), this.canvas = n(e, t, t), this.scratch = n(e, t, this.texHeight, "scratch");
  }
  return xr(r, [{
    key: "lock",
    value: function() {
      this.locked = !0;
    }
  }, {
    key: "getKeys",
    value: function() {
      return new Set(this.keyToLocation.keys());
    }
  }, {
    key: "getScale",
    value: function(t) {
      var a = t.w, n = t.h, i = this.texHeight, s = this.texSize, o = i / n, u = a * o, l = n * o;
      return u > s && (o = s / a, u = a * o, l = n * o), {
        scale: o,
        texW: u,
        texH: l
      };
    }
  }, {
    key: "draw",
    value: function(t, a, n) {
      var i = this;
      if (this.locked)
        throw new Error("can't draw, atlas is locked");
      var s = this.texSize, o = this.texRows, u = this.texHeight, l = this.getScale(a), c = l.scale, v = l.texW, f = l.texH, h = function(b, w) {
        if (n && w) {
          var E = w.context, C = b.x, x = b.row, T = C, A = u * x;
          E.save(), E.translate(T, A), E.scale(c, c), n(E, a), E.restore();
        }
      }, d = [null, null], y = function() {
        h(i.freePointer, i.canvas), d[0] = {
          x: i.freePointer.x,
          y: i.freePointer.row * u,
          w: v,
          h: f
        }, d[1] = {
          // create a second location with a width of 0, for convenience
          x: i.freePointer.x + v,
          y: i.freePointer.row * u,
          w: 0,
          h: f
        }, i.freePointer.x += v, i.freePointer.x == s && (i.freePointer.x = 0, i.freePointer.row++);
      }, g = function() {
        var b = i.scratch, w = i.canvas;
        b.clear(), h({
          x: 0,
          row: 0
        }, b);
        var E = s - i.freePointer.x, C = v - E, x = u;
        {
          var T = i.freePointer.x, A = i.freePointer.row * u, k = E;
          w.context.drawImage(b, 0, 0, k, x, T, A, k, x), d[0] = {
            x: T,
            y: A,
            w: k,
            h: f
          };
        }
        {
          var D = E, B = (i.freePointer.row + 1) * u, P = C;
          w && w.context.drawImage(b, D, 0, P, x, 0, B, P, x), d[1] = {
            x: 0,
            y: B,
            w: P,
            h: f
          };
        }
        i.freePointer.x = C, i.freePointer.row++;
      }, p = function() {
        i.freePointer.x = 0, i.freePointer.row++;
      };
      if (this.freePointer.x + v <= s)
        y();
      else {
        if (this.freePointer.row >= o - 1)
          return !1;
        this.freePointer.x === s ? (p(), y()) : this.enableWrapping ? g() : (p(), y());
      }
      return this.keyToLocation.set(t, d), this.needsBuffer = !0, d;
    }
  }, {
    key: "getOffsets",
    value: function(t) {
      return this.keyToLocation.get(t);
    }
  }, {
    key: "isEmpty",
    value: function() {
      return this.freePointer.x === 0 && this.freePointer.row === 0;
    }
  }, {
    key: "canFit",
    value: function(t) {
      if (this.locked)
        return !1;
      var a = this.texSize, n = this.texRows, i = this.getScale(t), s = i.texW;
      return this.freePointer.x + s > a ? this.freePointer.row < n - 1 : !0;
    }
    // called on every frame
  }, {
    key: "bufferIfNeeded",
    value: function(t) {
      this.texture || (this.texture = ym(t, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = !1, this.locked && (this.canvas = null, this.scratch = null));
    }
  }, {
    key: "dispose",
    value: function() {
      this.texture && (this.texture.deleteTexture(), this.texture = null), this.canvas = null, this.scratch = null, this.locked = !0;
    }
  }]);
}(), Sm = /* @__PURE__ */ function() {
  function r(e, t, a, n) {
    wr(this, r), this.r = e, this.texSize = t, this.texRows = a, this.createTextureCanvas = n, this.atlases = [], this.styleKeyToAtlas = /* @__PURE__ */ new Map(), this.markedKeys = /* @__PURE__ */ new Set();
  }
  return xr(r, [{
    key: "getKeys",
    value: function() {
      return new Set(this.styleKeyToAtlas.keys());
    }
  }, {
    key: "_createAtlas",
    value: function() {
      var t = this.r, a = this.texSize, n = this.texRows, i = this.createTextureCanvas;
      return new Tm(t, a, n, i);
    }
  }, {
    key: "_getScratchCanvas",
    value: function() {
      if (!this.scratch) {
        var t = this.r, a = this.texSize, n = this.texRows, i = this.createTextureCanvas, s = Math.floor(a / n);
        this.scratch = i(t, a, s, "scratch");
      }
      return this.scratch;
    }
  }, {
    key: "draw",
    value: function(t, a, n) {
      var i = this.styleKeyToAtlas.get(t);
      return i || (i = this.atlases[this.atlases.length - 1], (!i || !i.canFit(a)) && (i && i.lock(), i = this._createAtlas(), this.atlases.push(i)), i.draw(t, a, n), this.styleKeyToAtlas.set(t, i)), i;
    }
  }, {
    key: "getAtlas",
    value: function(t) {
      return this.styleKeyToAtlas.get(t);
    }
  }, {
    key: "hasAtlas",
    value: function(t) {
      return this.styleKeyToAtlas.has(t);
    }
  }, {
    key: "markKeyForGC",
    value: function(t) {
      this.markedKeys.add(t);
    }
  }, {
    key: "gc",
    value: function() {
      var t = this, a = this.markedKeys;
      if (a.size === 0) {
        console.log("nothing to garbage collect");
        return;
      }
      var n = [], i = /* @__PURE__ */ new Map(), s = null, o = Bt(this.atlases), u;
      try {
        var l = function() {
          var v = u.value, f = v.getKeys(), h = Am(a, f);
          if (h.size === 0)
            return n.push(v), f.forEach(function(E) {
              return i.set(E, v);
            }), 1;
          s || (s = t._createAtlas(), n.push(s));
          var d = Bt(f), y;
          try {
            for (d.s(); !(y = d.n()).done; ) {
              var g = y.value;
              if (!h.has(g)) {
                var p = v.getOffsets(g), m = je(p, 2), b = m[0], w = m[1];
                s.canFit({
                  w: b.w + w.w,
                  h: b.h
                }) || (s.lock(), s = t._createAtlas(), n.push(s)), v.canvas && (t._copyTextureToNewAtlas(g, v, s), i.set(g, s));
              }
            }
          } catch (E) {
            d.e(E);
          } finally {
            d.f();
          }
          v.dispose();
        };
        for (o.s(); !(u = o.n()).done; )
          l();
      } catch (c) {
        o.e(c);
      } finally {
        o.f();
      }
      this.atlases = n, this.styleKeyToAtlas = i, this.markedKeys = /* @__PURE__ */ new Set();
    }
  }, {
    key: "_copyTextureToNewAtlas",
    value: function(t, a, n) {
      var i = a.getOffsets(t), s = je(i, 2), o = s[0], u = s[1];
      if (u.w === 0)
        n.draw(t, o, function(f) {
          f.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h);
        });
      else {
        var l = this._getScratchCanvas();
        l.clear(), l.context.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h), l.context.drawImage(a.canvas, u.x, u.y, u.w, u.h, o.w, 0, u.w, u.h);
        var c = o.w + u.w, v = o.h;
        n.draw(t, {
          w: c,
          h: v
        }, function(f) {
          f.drawImage(
            l,
            0,
            0,
            c,
            v,
            0,
            0,
            c,
            v
            // the destination context has already been translated to the correct position
          );
        });
      }
    }
  }, {
    key: "getCounts",
    value: function() {
      return {
        keyCount: this.styleKeyToAtlas.size,
        atlasCount: new Set(this.styleKeyToAtlas.values()).size
      };
    }
  }]);
}();
function Am(r, e) {
  return r.intersection ? r.intersection(e) : new Set(Un(r).filter(function(t) {
    return e.has(t);
  }));
}
var km = /* @__PURE__ */ function() {
  function r(e, t) {
    wr(this, r), this.r = e, this.globalOptions = t, this.atlasSize = t.webglTexSize, this.maxAtlasesPerBatch = t.webglTexPerBatch, this.renderTypes = /* @__PURE__ */ new Map(), this.collections = /* @__PURE__ */ new Map(), this.typeAndIdToKey = /* @__PURE__ */ new Map();
  }
  return xr(r, [{
    key: "getAtlasSize",
    value: function() {
      return this.atlasSize;
    }
  }, {
    key: "addAtlasCollection",
    value: function(t, a) {
      var n = this.globalOptions, i = n.webglTexSize, s = n.createTextureCanvas, o = a.texRows, u = this._cacheScratchCanvas(s), l = new Sm(this.r, i, o, u);
      this.collections.set(t, l);
    }
  }, {
    key: "addRenderType",
    value: function(t, a) {
      var n = a.collection;
      if (!this.collections.has(n))
        throw new Error("invalid atlas collection name '".concat(n, "'"));
      var i = this.collections.get(n), s = be({
        type: t,
        atlasCollection: i
      }, a);
      this.renderTypes.set(t, s);
    }
  }, {
    key: "getRenderTypeOpts",
    value: function(t) {
      return this.renderTypes.get(t);
    }
  }, {
    key: "getAtlasCollection",
    value: function(t) {
      return this.collections.get(t);
    }
  }, {
    key: "_cacheScratchCanvas",
    value: function(t) {
      var a = -1, n = -1, i = null;
      return function(s, o, u, l) {
        return l ? ((!i || o != a || u != n) && (a = o, n = u, i = t(s, o, u)), i) : t(s, o, u);
      };
    }
  }, {
    key: "_key",
    value: function(t, a) {
      return "".concat(t, "-").concat(a);
    }
    /** Marks textues associated with the element for garbage collection. */
  }, {
    key: "invalidate",
    value: function(t) {
      var a = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.forceRedraw, s = i === void 0 ? !1 : i, o = n.filterEle, u = o === void 0 ? function() {
        return !0;
      } : o, l = n.filterType, c = l === void 0 ? function() {
        return !0;
      } : l, v = !1, f = !1, h = Bt(t), d;
      try {
        for (h.s(); !(d = h.n()).done; ) {
          var y = d.value;
          if (u(y)) {
            var g = Bt(this.renderTypes.values()), p;
            try {
              var m = function() {
                var w = p.value, E = w.type;
                if (c(E)) {
                  var C = a.collections.get(w.collection), x = w.getKey(y), T = Array.isArray(x) ? x : [x];
                  if (s)
                    T.forEach(function(B) {
                      return C.markKeyForGC(B);
                    }), f = !0;
                  else {
                    var A = w.getID ? w.getID(y) : y.id(), k = a._key(E, A), D = a.typeAndIdToKey.get(k);
                    D !== void 0 && !gm(T, D) && (v = !0, a.typeAndIdToKey.delete(k), D.forEach(function(B) {
                      return C.markKeyForGC(B);
                    }));
                  }
                }
              };
              for (g.s(); !(p = g.n()).done; )
                m();
            } catch (b) {
              g.e(b);
            } finally {
              g.f();
            }
          }
        }
      } catch (b) {
        h.e(b);
      } finally {
        h.f();
      }
      return f && (this.gc(), v = !1), v;
    }
    /** Garbage collect */
  }, {
    key: "gc",
    value: function() {
      var t = Bt(this.collections.values()), a;
      try {
        for (t.s(); !(a = t.n()).done; ) {
          var n = a.value;
          n.gc();
        }
      } catch (i) {
        t.e(i);
      } finally {
        t.f();
      }
    }
  }, {
    key: "getOrCreateAtlas",
    value: function(t, a, n, i) {
      var s = this.renderTypes.get(a), o = this.collections.get(s.collection), u = !1, l = o.draw(i, n, function(f) {
        s.drawClipped ? (f.save(), f.beginPath(), f.rect(0, 0, n.w, n.h), f.clip(), s.drawElement(f, t, n, !0, !0), f.restore()) : s.drawElement(f, t, n, !0, !0), u = !0;
      });
      if (u) {
        var c = s.getID ? s.getID(t) : t.id(), v = this._key(a, c);
        this.typeAndIdToKey.has(v) ? this.typeAndIdToKey.get(v).push(i) : this.typeAndIdToKey.set(v, [i]);
      }
      return l;
    }
  }, {
    key: "getAtlasInfo",
    value: function(t, a) {
      var n = this, i = this.renderTypes.get(a), s = i.getKey(t), o = Array.isArray(s) ? s : [s];
      return o.map(function(u) {
        var l = i.getBoundingBox(t, u), c = n.getOrCreateAtlas(t, a, l, u), v = c.getOffsets(u), f = je(v, 2), h = f[0], d = f[1];
        return {
          atlas: c,
          tex: h,
          tex1: h,
          tex2: d,
          bb: l
        };
      });
    }
  }, {
    key: "getDebugInfo",
    value: function() {
      var t = [], a = Bt(this.collections), n;
      try {
        for (a.s(); !(n = a.n()).done; ) {
          var i = je(n.value, 2), s = i[0], o = i[1], u = o.getCounts(), l = u.keyCount, c = u.atlasCount;
          t.push({
            type: s,
            keyCount: l,
            atlasCount: c
          });
        }
      } catch (v) {
        a.e(v);
      } finally {
        a.f();
      }
      return t;
    }
  }]);
}(), Dm = /* @__PURE__ */ function() {
  function r(e) {
    wr(this, r), this.globalOptions = e, this.atlasSize = e.webglTexSize, this.maxAtlasesPerBatch = e.webglTexPerBatch, this.batchAtlases = [];
  }
  return xr(r, [{
    key: "getMaxAtlasesPerBatch",
    value: function() {
      return this.maxAtlasesPerBatch;
    }
  }, {
    key: "getAtlasSize",
    value: function() {
      return this.atlasSize;
    }
  }, {
    key: "getIndexArray",
    value: function() {
      return Array.from({
        length: this.maxAtlasesPerBatch
      }, function(t, a) {
        return a;
      });
    }
  }, {
    key: "startBatch",
    value: function() {
      this.batchAtlases = [];
    }
  }, {
    key: "getAtlasCount",
    value: function() {
      return this.batchAtlases.length;
    }
  }, {
    key: "getAtlases",
    value: function() {
      return this.batchAtlases;
    }
  }, {
    key: "canAddToCurrentBatch",
    value: function(t) {
      return this.batchAtlases.length === this.maxAtlasesPerBatch ? this.batchAtlases.includes(t) : !0;
    }
  }, {
    key: "getAtlasIndexForBatch",
    value: function(t) {
      var a = this.batchAtlases.indexOf(t);
      if (a < 0) {
        if (this.batchAtlases.length === this.maxAtlasesPerBatch)
          throw new Error("cannot add more atlases to batch");
        this.batchAtlases.push(t), a = this.batchAtlases.length - 1;
      }
      return a;
    }
  }]);
}(), Bm = `
  float circleSD(vec2 p, float r) {
    return distance(vec2(0), p) - r; // signed distance
  }
`, Pm = `
  float rectangleSD(vec2 p, vec2 b) {
    vec2 d = abs(p)-b;
    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);
  }
`, Lm = `
  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {
    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;
    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;
    vec2 q = abs(p) - b + cr.x;
    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;
  }
`, Rm = `
  float ellipseSD(vec2 p, vec2 ab) {
    p = abs( p ); // symmetry

    // find root with Newton solver
    vec2 q = ab*(p-ab);
    float w = (q.x<q.y)? 1.570796327 : 0.0;
    for( int i=0; i<5; i++ ) {
      vec2 cs = vec2(cos(w),sin(w));
      vec2 u = ab*vec2( cs.x,cs.y);
      vec2 v = ab*vec2(-cs.y,cs.x);
      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));
    }
    
    // compute final point and distance
    float d = length(p-ab*vec2(cos(w),sin(w)));
    
    // return signed distance
    return (dot(p/ab,p/ab)>1.0) ? d : -d;
  }
`, Fa = {
  SCREEN: {
    name: "screen",
    screen: !0
  },
  PICKING: {
    name: "picking",
    picking: !0
  }
}, ri = {
  // render the texture just like in RENDER_TARGET.SCREEN mode
  IGNORE: 1,
  // don't render the texture at all
  USE_BB: 2
  // render the bounding box as an opaque rectangle
}, ro = 0, $c = 1, _c = 2, ao = 3, Qr = 4, Dn = 5, Da = 6, Ba = 7, Mm = /* @__PURE__ */ function() {
  function r(e, t, a) {
    wr(this, r), this.r = e, this.gl = t, this.maxInstances = a.webglBatchSize, this.atlasSize = a.webglTexSize, this.bgColor = a.bgColor, this.debug = a.webglDebug, this.batchDebugInfo = [], a.enableWrapping = !0, a.createTextureCanvas = vm, this.atlasManager = new km(e, a), this.batchManager = new Dm(a), this.simpleShapeOptions = /* @__PURE__ */ new Map(), this.program = this._createShaderProgram(Fa.SCREEN), this.pickingProgram = this._createShaderProgram(Fa.PICKING), this.vao = this._createVAO();
  }
  return xr(r, [{
    key: "addAtlasCollection",
    value: function(t, a) {
      this.atlasManager.addAtlasCollection(t, a);
    }
    /**
     * @typedef { Object } TextureRenderTypeOpts
     * @property { string } collection - name of atlas collection to render textures to
     * @property { function } getKey - returns the "style key" for an element, may be a single value or an array for multi-line lables
     * @property { function } drawElement - uses a canvas renderer to draw the element to the texture atlas
     * @property { boolean  } drawClipped - if true the context will be clipped to the bounding box before drawElement() is called, may affect performance
     * @property { function } getBoundingBox - returns the bounding box for an element
     * @property { function } getRotation
     * @property { function } getRotationPoint
     * @property { function } getRotationOffset
     * @property { function } isVisible - an extra check for visibility in addition to ele.visible()
     * @property { function } getTexPickingMode - returns a value from the TEX_PICKING_MODE enum
     */
    /**
     * @param { string } typeName
     * @param { TextureRenderTypeOpts } opts
     */
  }, {
    key: "addTextureAtlasRenderType",
    value: function(t, a) {
      this.atlasManager.addRenderType(t, a);
    }
    /**
     * @typedef { Object } SimpleShapeRenderTypeOpts
     * @property { function } getBoundingBox - returns the bounding box for an element
     * @property { function } isVisible - this is an extra check for visibility in addition to ele.visible()
     * @property { function } isSimple - check if element is a simple shape, or if it needs to fall back to texture rendering
     * @property { ShapeVisualProperties } shapeProps
     */
    /**
     * @typedef { Object } ShapeVisualProperties
     * @property { string } shape
     * @property { string } color
     * @property { string } opacity
     * @property { string } padding
     * @property { string } radius
     * @property { boolean } border
    */
    /**
     * @param { string } typeName
     * @param { SimpleShapeRenderTypeOpts } opts
     */
  }, {
    key: "addSimpleShapeRenderType",
    value: function(t, a) {
      this.simpleShapeOptions.set(t, a);
    }
    /**
     * Inform the atlasManager when element style keys may have changed.
     * The atlasManager can then mark unused textures for "garbage collection".
     */
  }, {
    key: "invalidate",
    value: function(t) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.type, i = this.atlasManager;
      return n ? i.invalidate(t, {
        filterType: function(o) {
          return o === n;
        },
        forceRedraw: !0
      }) : i.invalidate(t);
    }
    /**
     * Run texture garbage collection.
     */
  }, {
    key: "gc",
    value: function() {
      this.atlasManager.gc();
    }
  }, {
    key: "_createShaderProgram",
    value: function(t) {
      var a = this.gl, n = `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; // a vertex from the unit square
      
      in mat3 aTransform; // used to transform verticies, eg into a bounding box
      in int aVertType; // the type of thing we are rendering

      // the z-index that is output when using picking mode
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in vec2 aLineWidth; // also used for node border width

      // simple shapes
      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]
      in vec4 aColor; // also used for edges
      in vec4 aBorderColor; // aLineWidth is used for border width

      // output values passed to the fragment shader
      out vec2 vTexCoord;
      out vec4 vColor;
      out vec2 vPosition;
      // flat values are not interpolated
      flat out int vAtlasId; 
      flat out int vVertType;
      flat out vec2 vTopRight;
      flat out vec2 vBotLeft;
      flat out vec4 vCornerRadius;
      flat out vec4 vBorderColor;
      flat out vec2 vBorderWidth;
      flat out vec4 vIndex;
      
      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below

        if(aVertType == `.concat(ro, `) {
          float texX = aTex.x; // texture coordinates
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          if(vid == 1 || vid == 2 || vid == 4) {
            texX += texW;
          }
          if(vid == 2 || vid == 4 || vid == 5) {
            texY += texH;
          }

          float d = float(uAtlasSize);
          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat(Qr, " || aVertType == ").concat(Ba, ` 
             || aVertType == `).concat(Dn, " || aVertType == ").concat(Da, `) { // simple shapes

          // the bounding box is needed by the fragment shader
          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat
          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat
          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated

          // calculations are done in the fragment shader, just pass these along
          vColor = aColor;
          vCornerRadius = aCornerRadius;
          vBorderColor = aBorderColor;
          vBorderWidth = aLineWidth;

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
        }
        else if(aVertType == `).concat($c, `) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          // stretch the unit square into a long skinny rectangle
          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == `).concat(_c, `) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0, p1, p2, pos;
          if(position.x == 0.0) { // The left side of the unit square
            p0 = pointA;
            p1 = pointB;
            p2 = pointC;
            pos = position;
          } else { // The right side of the unit square, use same approach but flip the geometry upside down
            p0 = pointD;
            p1 = pointC;
            p2 = pointB;
            pos = vec2(0.0, -position.y);
          }

          vec2 p01 = p1 - p0;
          vec2 p12 = p2 - p1;
          vec2 p21 = p1 - p2;

          // Find the normal vector.
          vec2 tangent = normalize(normalize(p12) + normalize(p01));
          vec2 normal = vec2(-tangent.y, tangent.x);

          // Find the vector perpendicular to p0 -> p1.
          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));

          // Determine the bend direction.
          float sigma = sign(dot(p01 + p21, normal));
          float width = aLineWidth[0];

          if(sign(pos.y) == -sigma) {
            // This is an intersecting vertex. Adjust the position so that there's no overlap.
            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          } else {
            // This is a non-intersecting vertex. Treat it like a mitre join.
            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);
            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);
          }

          vColor = aColor;
        } 
        else if(aVertType == `).concat(ao, ` && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2(  0.0,  0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vVertType = aVertType;
        vIndex = aIndex;
      }
    `), i = this.batchManager.getIndexArray(), s = `#version 300 es
      precision highp float;

      // declare texture unit for each texture atlas in the batch
      `.concat(i.map(function(l) {
        return "uniform sampler2D uTexture".concat(l, ";");
      }).join(`
	`), `

      uniform vec4 uBGColor;
      uniform float uZoom;

      in vec2 vTexCoord;
      in vec4 vColor;
      in vec2 vPosition; // model coordinates

      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;
      flat in vec2 vTopRight;
      flat in vec2 vBotLeft;
      flat in vec4 vCornerRadius;
      flat in vec4 vBorderColor;
      flat in vec2 vBorderWidth;

      out vec4 outColor;

      `).concat(Bm, `
      `).concat(Pm, `
      `).concat(Lm, `
      `).concat(Rm, `

      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha
        return vec4( 
          top.rgb + (bot.rgb * (1.0 - top.a)),
          top.a   + (bot.a   * (1.0 - top.a)) 
        );
      }

      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance
        // scale to the zoom level so that borders don't look blurry when zoomed in
        // note 1.5 is an aribitrary value chosen because it looks good
        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); 
      }

      void main(void) {
        if(vVertType == `).concat(ro, `) {
          // look up the texel from the texture unit
          `).concat(i.map(function(l) {
        return "if(vAtlasId == ".concat(l, ") outColor = texture(uTexture").concat(l, ", vTexCoord);");
      }).join(`
	else `), `
        } 
        else if(vVertType == `).concat(ao, `) {
          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';
          outColor = blend(vColor, uBGColor);
          outColor.a = 1.0; // make opaque, masks out line under arrow
        }
        else if(vVertType == `).concat(Qr, ` && vBorderWidth == vec2(0.0)) { // simple rectangle with no border
          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done
        }
        else if(vVertType == `).concat(Qr, " || vVertType == ").concat(Ba, ` 
          || vVertType == `).concat(Dn, " || vVertType == ").concat(Da, `) { // use SDF

          float outerBorder = vBorderWidth[0];
          float innerBorder = vBorderWidth[1];
          float borderPadding = outerBorder * 2.0;
          float w = vTopRight.x - vBotLeft.x - borderPadding;
          float h = vTopRight.y - vBotLeft.y - borderPadding;
          vec2 b = vec2(w/2.0, h/2.0); // half width, half height
          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center

          float d; // signed distance
          if(vVertType == `).concat(Qr, `) {
            d = rectangleSD(p, b);
          } else if(vVertType == `).concat(Ba, ` && w == h) {
            d = circleSD(p, b.x); // faster than ellipse
          } else if(vVertType == `).concat(Ba, `) {
            d = ellipseSD(p, b);
          } else {
            d = roundRectangleSD(p, b, vCornerRadius.wzyx);
          }

          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling
          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box
          if(d > 0.0) {
            if(d > outerBorder) {
              discard;
            } else {
              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);
            }
          } else {
            if(d > innerBorder) {
              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;
              vec4 innerBorderColor = blend(vBorderColor, vColor);
              outColor = distInterp(innerBorderColor, outerColor, d);
            } 
            else {
              vec4 outerColor;
              if(innerBorder == 0.0 && outerBorder == 0.0) {
                outerColor = vec4(0);
              } else if(innerBorder == 0.0) {
                outerColor = vBorderColor;
              } else {
                outerColor = blend(vBorderColor, vColor);
              }
              outColor = distInterp(vColor, outerColor, d - innerBorder);
            }
          }
        }
        else {
          outColor = vColor;
        }

        `).concat(t.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : "", `
      }
    `), o = cm(a, n, s);
      o.aPosition = a.getAttribLocation(o, "aPosition"), o.aIndex = a.getAttribLocation(o, "aIndex"), o.aVertType = a.getAttribLocation(o, "aVertType"), o.aTransform = a.getAttribLocation(o, "aTransform"), o.aAtlasId = a.getAttribLocation(o, "aAtlasId"), o.aTex = a.getAttribLocation(o, "aTex"), o.aPointAPointB = a.getAttribLocation(o, "aPointAPointB"), o.aPointCPointD = a.getAttribLocation(o, "aPointCPointD"), o.aLineWidth = a.getAttribLocation(o, "aLineWidth"), o.aColor = a.getAttribLocation(o, "aColor"), o.aCornerRadius = a.getAttribLocation(o, "aCornerRadius"), o.aBorderColor = a.getAttribLocation(o, "aBorderColor"), o.uPanZoomMatrix = a.getUniformLocation(o, "uPanZoomMatrix"), o.uAtlasSize = a.getUniformLocation(o, "uAtlasSize"), o.uBGColor = a.getUniformLocation(o, "uBGColor"), o.uZoom = a.getUniformLocation(o, "uZoom"), o.uTextures = [];
      for (var u = 0; u < this.batchManager.getMaxAtlasesPerBatch(); u++)
        o.uTextures.push(a.getUniformLocation(o, "uTexture".concat(u)));
      return o;
    }
  }, {
    key: "_createVAO",
    value: function() {
      var t = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
      this.vertexCount = t.length / 2;
      var a = this.maxInstances, n = this.gl, i = this.program, s = n.createVertexArray();
      return n.bindVertexArray(s), bm(n, "vec2", i.aPosition, t), this.transformBuffer = wm(n, a, i.aTransform), this.indexBuffer = _t(n, a, "vec4", i.aIndex), this.vertTypeBuffer = _t(n, a, "int", i.aVertType), this.atlasIdBuffer = _t(n, a, "int", i.aAtlasId), this.texBuffer = _t(n, a, "vec4", i.aTex), this.pointAPointBBuffer = _t(n, a, "vec4", i.aPointAPointB), this.pointCPointDBuffer = _t(n, a, "vec4", i.aPointCPointD), this.lineWidthBuffer = _t(n, a, "vec2", i.aLineWidth), this.colorBuffer = _t(n, a, "vec4", i.aColor), this.cornerRadiusBuffer = _t(n, a, "vec4", i.aCornerRadius), this.borderColorBuffer = _t(n, a, "vec4", i.aBorderColor), n.bindVertexArray(null), s;
    }
  }, {
    key: "buffers",
    get: function() {
      var t = this;
      return this._buffers || (this._buffers = Object.keys(this).filter(function(a) {
        return ur(a, "Buffer");
      }).map(function(a) {
        return t[a];
      })), this._buffers;
    }
  }, {
    key: "startFrame",
    value: function(t) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fa.SCREEN;
      this.panZoomMatrix = t, this.renderTarget = a, this.batchDebugInfo = [], this.wrappedCount = 0, this.simpleCount = 0, this.startBatch();
    }
  }, {
    key: "startBatch",
    value: function() {
      this.instanceCount = 0, this.batchManager.startBatch();
    }
  }, {
    key: "endFrame",
    value: function() {
      this.endBatch();
    }
  }, {
    key: "_isVisible",
    value: function(t, a) {
      return t.visible() ? a && a.isVisible ? a.isVisible(t) : !0 : !1;
    }
    /**
     * Draws a texture using the texture atlas.
     */
  }, {
    key: "drawTexture",
    value: function(t, a, n) {
      var i = this.atlasManager, s = this.batchManager, o = i.getRenderTypeOpts(n);
      if (this._isVisible(t, o)) {
        if (this.renderTarget.picking && o.getTexPickingMode) {
          var u = o.getTexPickingMode(t);
          if (u === ri.IGNORE)
            return;
          if (u == ri.USE_BB) {
            this.drawPickingRectangle(t, a, n);
            return;
          }
        }
        var l = i.getAtlasInfo(t, n), c = Bt(l), v;
        try {
          for (c.s(); !(v = c.n()).done; ) {
            var f = v.value, h = f.atlas, d = f.tex1, y = f.tex2;
            s.canAddToCurrentBatch(h) || this.endBatch();
            for (var g = s.getAtlasIndexForBatch(h), p = 0, m = [[d, !0], [y, !1]]; p < m.length; p++) {
              var b = je(m[p], 2), w = b[0], E = b[1];
              if (w.w != 0) {
                var C = this.instanceCount;
                this.vertTypeBuffer.getView(C)[0] = ro;
                var x = this.indexBuffer.getView(C);
                Zr(a, x);
                var T = this.atlasIdBuffer.getView(C);
                T[0] = g;
                var A = this.texBuffer.getView(C);
                A[0] = w.x, A[1] = w.y, A[2] = w.w, A[3] = w.h;
                var k = this.transformBuffer.getMatrixView(C);
                this.setTransformMatrix(t, k, o, f, E), this.instanceCount++, E || this.wrappedCount++, this.instanceCount >= this.maxInstances && this.endBatch();
              }
            }
          }
        } catch (D) {
          c.e(D);
        } finally {
          c.f();
        }
      }
    }
    /**
     * matrix is expected to be a 9 element array
     * this function follows same pattern as CRp.drawCachedElementPortion(...)
     */
  }, {
    key: "setTransformMatrix",
    value: function(t, a, n, i) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = 0;
      if (n.shapeProps && n.shapeProps.padding && (o = t.pstyle(n.shapeProps.padding).pfValue), i) {
        var u = i.bb, l = i.tex1, c = i.tex2, v = l.w / (l.w + c.w);
        s || (v = 1 - v);
        var f = this._getAdjustedBB(u, o, s, v);
        this._applyTransformMatrix(a, f, n, t);
      } else {
        var h = n.getBoundingBox(t), d = this._getAdjustedBB(h, o, !0, 1);
        this._applyTransformMatrix(a, d, n, t);
      }
    }
  }, {
    key: "_applyTransformMatrix",
    value: function(t, a, n, i) {
      var s, o;
      Fc(t);
      var u = n.getRotation ? n.getRotation(i) : 0;
      if (u !== 0) {
        var l = n.getRotationPoint(i), c = l.x, v = l.y;
        _n(t, t, [c, v]), Vc(t, t, u);
        var f = n.getRotationOffset(i);
        s = f.x + (a.xOffset || 0), o = f.y + (a.yOffset || 0);
      } else
        s = a.x1, o = a.y1;
      _n(t, t, [s, o]), To(t, t, [a.w, a.h]);
    }
    /**
     * Adjusts a node or label BB to accomodate padding and split for wrapped textures.
     * @param bb - the original bounding box
     * @param padding - the padding to add to the bounding box
     * @param first - whether this is the first part of a wrapped texture
     * @param ratio - the ratio of the texture width of part of the text to the entire texture
     */
  }, {
    key: "_getAdjustedBB",
    value: function(t, a, n, i) {
      var s = t.x1, o = t.y1, u = t.w, l = t.h, c = t.yOffset;
      a && (s -= a, o -= a, u += 2 * a, l += 2 * a);
      var v = 0, f = u * i;
      return n && i < 1 ? u = f : !n && i < 1 && (v = u - f, s += v, u = f), {
        x1: s,
        y1: o,
        w: u,
        h: l,
        xOffset: v,
        yOffset: c
      };
    }
    /**
     * Draw a solid opaque rectangle matching the element's Bounding Box.
     * Used by the PICKING mode to make the entire BB of a label clickable.
     */
  }, {
    key: "drawPickingRectangle",
    value: function(t, a, n) {
      var i = this.atlasManager.getRenderTypeOpts(n), s = this.instanceCount;
      this.vertTypeBuffer.getView(s)[0] = Qr;
      var o = this.indexBuffer.getView(s);
      Zr(a, o);
      var u = this.colorBuffer.getView(s);
      Dr([0, 0, 0], 1, u);
      var l = this.transformBuffer.getMatrixView(s);
      this.setTransformMatrix(t, l, i), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
    }
    /**
     * Draw a node using either a texture or a "simple shape".
     */
  }, {
    key: "drawNode",
    value: function(t, a, n) {
      var i = this.simpleShapeOptions.get(n);
      if (this._isVisible(t, i)) {
        var s = i.shapeProps, o = this._getVertTypeForShape(t, s.shape);
        if (o === void 0 || i.isSimple && !i.isSimple(t)) {
          this.drawTexture(t, a, n);
          return;
        }
        var u = this.instanceCount;
        if (this.vertTypeBuffer.getView(u)[0] = o, o === Dn || o === Da) {
          var l = i.getBoundingBox(t), c = this._getCornerRadius(t, s.radius, l), v = this.cornerRadiusBuffer.getView(u);
          v[0] = c, v[1] = c, v[2] = c, v[3] = c, o === Da && (v[0] = 0, v[2] = 0);
        }
        var f = this.indexBuffer.getView(u);
        Zr(a, f);
        var h = t.pstyle(s.color).value, d = t.pstyle(s.opacity).value, y = this.colorBuffer.getView(u);
        Dr(h, d, y);
        var g = this.lineWidthBuffer.getView(u);
        if (g[0] = 0, g[1] = 0, s.border) {
          var p = t.pstyle("border-width").value;
          if (p > 0) {
            var m = t.pstyle("border-color").value, b = t.pstyle("border-opacity").value, w = this.borderColorBuffer.getView(u);
            Dr(m, b, w);
            var E = t.pstyle("border-position").value;
            if (E === "inside")
              g[0] = 0, g[1] = -p;
            else if (E === "outside")
              g[0] = p, g[1] = 0;
            else {
              var C = p / 2;
              g[0] = C, g[1] = -C;
            }
          }
        }
        var x = this.transformBuffer.getMatrixView(u);
        this.setTransformMatrix(t, x, i), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
      }
    }
  }, {
    key: "_getVertTypeForShape",
    value: function(t, a) {
      var n = t.pstyle(a).value;
      switch (n) {
        case "rectangle":
          return Qr;
        case "ellipse":
          return Ba;
        case "roundrectangle":
        case "round-rectangle":
          return Dn;
        case "bottom-round-rectangle":
          return Da;
        default:
          return;
      }
    }
  }, {
    key: "_getCornerRadius",
    value: function(t, a, n) {
      var i = n.w, s = n.h;
      if (t.pstyle(a).value === "auto")
        return pr(i, s);
      var o = t.pstyle(a).pfValue, u = i / 2, l = s / 2;
      return Math.min(o, l, u);
    }
    /**
     * Only supports drawing triangles at the moment.
     */
  }, {
    key: "drawEdgeArrow",
    value: function(t, a, n) {
      if (t.visible()) {
        var i = t._private.rscratch, s, o, u;
        if (n === "source" ? (s = i.arrowStartX, o = i.arrowStartY, u = i.srcArrowAngle) : (s = i.arrowEndX, o = i.arrowEndY, u = i.tgtArrowAngle), !(isNaN(s) || s == null || isNaN(o) || o == null || isNaN(u) || u == null)) {
          var l = t.pstyle(n + "-arrow-shape").value;
          if (l !== "none") {
            var c = t.pstyle(n + "-arrow-color").value, v = t.pstyle("opacity").value, f = t.pstyle("line-opacity").value, h = v * f, d = t.pstyle("width").pfValue, y = t.pstyle("arrow-scale").value, g = this.r.getArrowWidth(d, y), p = this.instanceCount, m = this.transformBuffer.getMatrixView(p);
            Fc(m), _n(m, m, [s, o]), To(m, m, [g, g]), Vc(m, m, u), this.vertTypeBuffer.getView(p)[0] = ao;
            var b = this.indexBuffer.getView(p);
            Zr(a, b);
            var w = this.colorBuffer.getView(p);
            Dr(c, h, w), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
          }
        }
      }
    }
    /**
     * Draw straight-line or bezier curve edges.
     */
  }, {
    key: "drawEdgeLine",
    value: function(t, a) {
      if (t.visible()) {
        var n = this._getEdgePoints(t);
        if (n) {
          var i = t.pstyle("opacity").value, s = t.pstyle("line-opacity").value, o = t.pstyle("width").pfValue, u = t.pstyle("line-color").value, l = i * s;
          if (n.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), n.length == 4) {
            var c = this.instanceCount;
            this.vertTypeBuffer.getView(c)[0] = $c;
            var v = this.indexBuffer.getView(c);
            Zr(a, v);
            var f = this.colorBuffer.getView(c);
            Dr(u, l, f);
            var h = this.lineWidthBuffer.getView(c);
            h[0] = o;
            var d = this.pointAPointBBuffer.getView(c);
            d[0] = n[0], d[1] = n[1], d[2] = n[2], d[3] = n[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
          } else
            for (var y = 0; y < n.length - 2; y += 2) {
              var g = this.instanceCount;
              this.vertTypeBuffer.getView(g)[0] = _c;
              var p = this.indexBuffer.getView(g);
              Zr(a, p);
              var m = this.colorBuffer.getView(g);
              Dr(u, l, m);
              var b = this.lineWidthBuffer.getView(g);
              b[0] = o;
              var w = n[y - 2], E = n[y - 1], C = n[y], x = n[y + 1], T = n[y + 2], A = n[y + 3], k = n[y + 4], D = n[y + 5];
              y == 0 && (w = 2 * C - T + 1e-3, E = 2 * x - A + 1e-3), y == n.length - 4 && (k = 2 * T - C + 1e-3, D = 2 * A - x + 1e-3);
              var B = this.pointAPointBBuffer.getView(g);
              B[0] = w, B[1] = E, B[2] = C, B[3] = x;
              var P = this.pointCPointDBuffer.getView(g);
              P[0] = T, P[1] = A, P[2] = k, P[3] = D, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
            }
        }
      }
    }
  }, {
    key: "_getEdgePoints",
    value: function(t) {
      var a = t._private.rscratch;
      if (!(a.badLine || a.allpts == null || isNaN(a.allpts[0]))) {
        var n = a.allpts;
        if (n.length == 4)
          return n;
        var i = this._getNumSegments(t);
        return this._getCurveSegmentPoints(n, i);
      }
    }
  }, {
    key: "_getNumSegments",
    value: function(t) {
      var a = 15;
      return Math.min(Math.max(a, 5), this.maxInstances);
    }
  }, {
    key: "_getCurveSegmentPoints",
    value: function(t, a) {
      if (t.length == 4)
        return t;
      for (var n = Array((a + 1) * 2), i = 0; i <= a; i++)
        if (i == 0)
          n[0] = t[0], n[1] = t[1];
        else if (i == a)
          n[i * 2] = t[t.length - 2], n[i * 2 + 1] = t[t.length - 1];
        else {
          var s = i / a;
          this._setCurvePoint(t, s, n, i * 2);
        }
      return n;
    }
  }, {
    key: "_setCurvePoint",
    value: function(t, a, n, i) {
      if (t.length <= 2)
        n[i] = t[0], n[i + 1] = t[1];
      else {
        for (var s = Array(t.length - 2), o = 0; o < s.length; o += 2) {
          var u = (1 - a) * t[o] + a * t[o + 2], l = (1 - a) * t[o + 1] + a * t[o + 3];
          s[o] = u, s[o + 1] = l;
        }
        return this._setCurvePoint(s, a, n, i);
      }
    }
  }, {
    key: "endBatch",
    value: function() {
      var t = this.gl, a = this.vao, n = this.vertexCount, i = this.instanceCount;
      if (i !== 0) {
        var s = this.renderTarget.picking ? this.pickingProgram : this.program;
        t.useProgram(s), t.bindVertexArray(a);
        var o = Bt(this.buffers), u;
        try {
          for (o.s(); !(u = o.n()).done; ) {
            var l = u.value;
            l.bufferSubData(i);
          }
        } catch (d) {
          o.e(d);
        } finally {
          o.f();
        }
        for (var c = this.batchManager.getAtlases(), v = 0; v < c.length; v++)
          c[v].bufferIfNeeded(t);
        for (var f = 0; f < c.length; f++)
          t.activeTexture(t.TEXTURE0 + f), t.bindTexture(t.TEXTURE_2D, c[f].texture), t.uniform1i(s.uTextures[f], f);
        t.uniform1f(s.uZoom, fm(this.r)), t.uniformMatrix3fv(s.uPanZoomMatrix, !1, this.panZoomMatrix), t.uniform1i(s.uAtlasSize, this.batchManager.getAtlasSize());
        var h = Dr(this.bgColor, 1);
        t.uniform4fv(s.uBGColor, h), t.drawArraysInstanced(t.TRIANGLES, 0, n, i), t.bindVertexArray(null), t.bindTexture(t.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({
          count: i,
          // instance count
          atlasCount: c.length
        }), this.startBatch();
      }
    }
  }, {
    key: "getDebugInfo",
    value: function() {
      var t = this.atlasManager.getDebugInfo(), a = t.reduce(function(s, o) {
        return s + o.atlasCount;
      }, 0), n = this.batchDebugInfo, i = n.reduce(function(s, o) {
        return s + o.count;
      }, 0);
      return {
        atlasInfo: t,
        totalAtlases: a,
        wrappedCount: this.wrappedCount,
        simpleCount: this.simpleCount,
        batchCount: n.length,
        batchInfo: n,
        totalInstances: i
      };
    }
  }]);
}(), Mf = {};
Mf.initWebgl = function(r, e) {
  var t = this, a = t.data.contexts[t.WEBGL];
  r.bgColor = Im(t), r.webglTexSize = Math.min(r.webglTexSize, a.getParameter(a.MAX_TEXTURE_SIZE)), r.webglTexRows = Math.min(r.webglTexRows, 54), r.webglTexRowsNodes = Math.min(r.webglTexRowsNodes, 54), r.webglBatchSize = Math.min(r.webglBatchSize, 16384), r.webglTexPerBatch = Math.min(r.webglTexPerBatch, a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), t.webglDebug = r.webglDebug, t.webglDebugShowAtlases = r.webglDebugShowAtlases, t.pickingFrameBuffer = xm(a), t.pickingFrameBuffer.needsDraw = !0, t.drawing = new Mm(t, a, r);
  var n = function(v) {
    return function(f) {
      return t.getTextAngle(f, v);
    };
  }, i = function(v) {
    return function(f) {
      var h = f.pstyle(v);
      return h && h.value;
    };
  }, s = function(v) {
    return function(f) {
      return f.pstyle("".concat(v, "-opacity")).value > 0;
    };
  }, o = function(v) {
    var f = v.pstyle("text-events").strValue === "yes";
    return f ? ri.USE_BB : ri.IGNORE;
  }, u = function(v) {
    var f = v.position(), h = f.x, d = f.y, y = v.outerWidth(), g = v.outerHeight();
    return {
      w: y,
      h: g,
      x1: h - y / 2,
      y1: d - g / 2
    };
  };
  t.drawing.addAtlasCollection("node", {
    texRows: r.webglTexRowsNodes
  }), t.drawing.addAtlasCollection("label", {
    texRows: r.webglTexRows
  }), t.drawing.addTextureAtlasRenderType("node-body", {
    collection: "node",
    getKey: e.getStyleKey,
    getBoundingBox: e.getElementBox,
    drawElement: e.drawElement
  }), t.drawing.addSimpleShapeRenderType("node-body", {
    getBoundingBox: u,
    isSimple: hm,
    shapeProps: {
      shape: "shape",
      color: "background-color",
      opacity: "background-opacity",
      radius: "corner-radius",
      border: !0
    }
  }), t.drawing.addSimpleShapeRenderType("node-overlay", {
    getBoundingBox: u,
    isVisible: s("overlay"),
    shapeProps: {
      shape: "overlay-shape",
      color: "overlay-color",
      opacity: "overlay-opacity",
      padding: "overlay-padding",
      radius: "overlay-corner-radius"
    }
  }), t.drawing.addSimpleShapeRenderType("node-underlay", {
    getBoundingBox: u,
    isVisible: s("underlay"),
    shapeProps: {
      shape: "underlay-shape",
      color: "underlay-color",
      opacity: "underlay-opacity",
      padding: "underlay-padding",
      radius: "underlay-corner-radius"
    }
  }), t.drawing.addTextureAtlasRenderType("label", {
    // node label or edge mid label
    collection: "label",
    getTexPickingMode: o,
    getKey: no(e.getLabelKey, null),
    getBoundingBox: io(e.getLabelBox, null),
    drawClipped: !0,
    drawElement: e.drawLabel,
    getRotation: n(null),
    getRotationPoint: e.getLabelRotationPoint,
    getRotationOffset: e.getLabelRotationOffset,
    isVisible: i("label")
  }), t.drawing.addTextureAtlasRenderType("edge-source-label", {
    collection: "label",
    getTexPickingMode: o,
    getKey: no(e.getSourceLabelKey, "source"),
    getBoundingBox: io(e.getSourceLabelBox, "source"),
    drawClipped: !0,
    drawElement: e.drawSourceLabel,
    getRotation: n("source"),
    getRotationPoint: e.getSourceLabelRotationPoint,
    getRotationOffset: e.getSourceLabelRotationOffset,
    isVisible: i("source-label")
  }), t.drawing.addTextureAtlasRenderType("edge-target-label", {
    collection: "label",
    getTexPickingMode: o,
    getKey: no(e.getTargetLabelKey, "target"),
    getBoundingBox: io(e.getTargetLabelBox, "target"),
    drawClipped: !0,
    drawElement: e.drawTargetLabel,
    getRotation: n("target"),
    getRotationPoint: e.getTargetLabelRotationPoint,
    getRotationOffset: e.getTargetLabelRotationOffset,
    isVisible: i("target-label")
  });
  var l = nn(function() {
    console.log("garbage collect flag set"), t.data.gc = !0;
  }, 1e4);
  t.onUpdateEleCalcs(function(c, v) {
    var f = !1;
    v && v.length > 0 && (f |= t.drawing.invalidate(v)), f && l();
  }), Om(t);
};
function Im(r) {
  var e = r.cy.container(), t = e && e.style && e.style.backgroundColor || "white";
  return sv(t);
}
function If(r, e) {
  var t = r._private.rscratch;
  return kt(t, "labelWrapCachedLines", e) || [];
}
var no = function(e, t) {
  return function(a) {
    var n = e(a), i = If(a, t);
    return i.length > 1 ? i.map(function(s, o) {
      return "".concat(n, "_").concat(o);
    }) : n;
  };
}, io = function(e, t) {
  return function(a, n) {
    var i = e(a);
    if (typeof n == "string") {
      var s = n.indexOf("_");
      if (s > 0) {
        var o = Number(n.substring(s + 1)), u = If(a, t), l = i.h / u.length, c = l * o, v = i.y1 + c;
        return {
          x1: i.x1,
          w: i.w,
          y1: v,
          h: l,
          yOffset: c
        };
      }
    }
    return i;
  };
};
function Om(r) {
  {
    var e = r.render;
    r.render = function(i) {
      i = i || {};
      var s = r.cy;
      r.webgl && (s.zoom() > Af ? (Nm(r), e.call(r, i)) : (zm(r), Nf(r, i, Fa.SCREEN)));
    };
  }
  {
    var t = r.matchCanvasSize;
    r.matchCanvasSize = function(i) {
      t.call(r, i), r.pickingFrameBuffer.setFramebufferAttachmentSizes(r.canvasWidth, r.canvasHeight), r.pickingFrameBuffer.needsDraw = !0;
    };
  }
  r.findNearestElements = function(i, s, o, u) {
    return Hm(r, i, s);
  };
  {
    var a = r.invalidateCachedZSortedEles;
    r.invalidateCachedZSortedEles = function() {
      a.call(r), r.pickingFrameBuffer.needsDraw = !0;
    };
  }
  {
    var n = r.notify;
    r.notify = function(i, s) {
      n.call(r, i, s), i === "viewport" || i === "bounds" ? r.pickingFrameBuffer.needsDraw = !0 : i === "background" && r.drawing.invalidate(s, {
        type: "node-body"
      });
    };
  }
}
function Nm(r) {
  var e = r.data.contexts[r.WEBGL];
  e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
}
function zm(r) {
  var e = function(a) {
    a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, r.canvasWidth, r.canvasHeight), a.restore();
  };
  e(r.data.contexts[r.NODE]), e(r.data.contexts[r.DRAG]);
}
function Fm(r) {
  var e = r.canvasWidth, t = r.canvasHeight, a = ru(r), n = a.pan, i = a.zoom, s = to();
  _n(s, s, [n.x, n.y]), To(s, s, [i, i]);
  var o = to();
  Cm(o, e, t);
  var u = to();
  return Em(u, o, s), u;
}
function Of(r, e) {
  var t = r.canvasWidth, a = r.canvasHeight, n = ru(r), i = n.pan, s = n.zoom;
  e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t, a), e.translate(i.x, i.y), e.scale(s, s);
}
function Vm(r, e) {
  r.drawSelectionRectangle(e, function(t) {
    return Of(r, t);
  });
}
function $m(r) {
  var e = r.data.contexts[r.NODE];
  e.save(), Of(r, e), e.strokeStyle = "rgba(0, 0, 0, 0.3)", e.beginPath(), e.moveTo(-1e3, 0), e.lineTo(1e3, 0), e.stroke(), e.beginPath(), e.moveTo(0, -1e3), e.lineTo(0, 1e3), e.stroke(), e.restore();
}
function _m(r) {
  var e = function(n, i, s) {
    for (var o = n.atlasManager.getAtlasCollection(i), u = r.data.contexts[r.NODE], l = o.atlases, c = 0; c < l.length; c++) {
      var v = l[c], f = v.canvas;
      if (f) {
        var h = f.width, d = f.height, y = h * c, g = f.height * s, p = 0.4;
        u.save(), u.scale(p, p), u.drawImage(f, y, g), u.strokeStyle = "black", u.rect(y, g, h, d), u.stroke(), u.restore();
      }
    }
  }, t = 0;
  e(r.drawing, "node", t++), e(r.drawing, "label", t++);
}
function qm(r, e, t, a, n) {
  var i, s, o, u, l = ru(r), c = l.pan, v = l.zoom;
  {
    var f = dm(r, c, v, e, t), h = je(f, 2), d = h[0], y = h[1], g = 6;
    i = d - g / 2, s = y - g / 2, o = g, u = g;
  }
  if (o === 0 || u === 0)
    return [];
  var p = r.data.contexts[r.WEBGL];
  p.bindFramebuffer(p.FRAMEBUFFER, r.pickingFrameBuffer), r.pickingFrameBuffer.needsDraw && (p.viewport(0, 0, p.canvas.width, p.canvas.height), Nf(r, null, Fa.PICKING), r.pickingFrameBuffer.needsDraw = !1);
  var m = o * u, b = new Uint8Array(m * 4);
  p.readPixels(i, s, o, u, p.RGBA, p.UNSIGNED_BYTE, b), p.bindFramebuffer(p.FRAMEBUFFER, null);
  for (var w = /* @__PURE__ */ new Set(), E = 0; E < m; E++) {
    var C = b.slice(E * 4, E * 4 + 4), x = pm(C) - 1;
    x >= 0 && w.add(x);
  }
  return w;
}
function Hm(r, e, t) {
  var a = qm(r, e, t), n = r.getCachedZSortedEles(), i, s, o = Bt(a), u;
  try {
    for (o.s(); !(u = o.n()).done; ) {
      var l = u.value, c = n[l];
      if (!i && c.isNode() && (i = c), !s && c.isEdge() && (s = c), i && s)
        break;
    }
  } catch (v) {
    o.e(v);
  } finally {
    o.f();
  }
  return [i, s].filter(Boolean);
}
function so(r, e, t) {
  var a = r.drawing;
  e += 1, t.isNode() ? (a.drawNode(t, e, "node-underlay"), a.drawNode(t, e, "node-body"), a.drawTexture(t, e, "label"), a.drawNode(t, e, "node-overlay")) : (a.drawEdgeLine(t, e), a.drawEdgeArrow(t, e, "source"), a.drawEdgeArrow(t, e, "target"), a.drawTexture(t, e, "label"), a.drawTexture(t, e, "edge-source-label"), a.drawTexture(t, e, "edge-target-label"));
}
function Nf(r, e, t) {
  var a;
  r.webglDebug && (a = performance.now());
  var n = r.drawing, i = 0;
  if (t.screen && r.data.canvasNeedsRedraw[r.SELECT_BOX] && Vm(r, e), r.data.canvasNeedsRedraw[r.NODE] || t.picking) {
    var s = r.data.contexts[r.WEBGL];
    t.screen ? (s.clearColor(0, 0, 0, 0), s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA)) : s.disable(s.BLEND), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.viewport(0, 0, s.canvas.width, s.canvas.height);
    var o = Fm(r), u = r.getCachedZSortedEles();
    if (i = u.length, n.startFrame(o, t), t.screen) {
      for (var l = 0; l < u.nondrag.length; l++)
        so(r, l, u.nondrag[l]);
      for (var c = 0; c < u.drag.length; c++)
        so(r, c, u.drag[c]);
    } else if (t.picking)
      for (var v = 0; v < u.length; v++)
        so(r, v, u[v]);
    n.endFrame(), t.screen && r.webglDebugShowAtlases && ($m(r), _m(r)), r.data.canvasNeedsRedraw[r.NODE] = !1, r.data.canvasNeedsRedraw[r.DRAG] = !1;
  }
  if (r.webglDebug) {
    var f = performance.now(), h = !1, d = Math.ceil(f - a), y = n.getDebugInfo(), g = ["".concat(i, " elements"), "".concat(y.totalInstances, " instances"), "".concat(y.batchCount, " batches"), "".concat(y.totalAtlases, " atlases"), "".concat(y.wrappedCount, " wrapped textures"), "".concat(y.simpleCount, " simple shapes")].join(", ");
    if (h)
      console.log("WebGL (".concat(t.name, ") - time ").concat(d, "ms, ").concat(g));
    else {
      console.log("WebGL (".concat(t.name, ") - frame time ").concat(d, "ms")), console.log("Totals:"), console.log("  ".concat(g)), console.log("Texture Atlases Used:");
      var p = y.atlasInfo, m = Bt(p), b;
      try {
        for (m.s(); !(b = m.n()).done; ) {
          var w = b.value;
          console.log("  ".concat(w.type, ": ").concat(w.keyCount, " keys, ").concat(w.atlasCount, " atlases"));
        }
      } catch (E) {
        m.e(E);
      } finally {
        m.f();
      }
      console.log("");
    }
  }
  r.data.gc && (console.log("Garbage Collect!"), r.data.gc = !1, n.gc());
}
var Tr = {};
Tr.drawPolygonPath = function(r, e, t, a, n, i) {
  var s = a / 2, o = n / 2;
  r.beginPath && r.beginPath(), r.moveTo(e + s * i[0], t + o * i[1]);
  for (var u = 1; u < i.length / 2; u++)
    r.lineTo(e + s * i[u * 2], t + o * i[u * 2 + 1]);
  r.closePath();
};
Tr.drawRoundPolygonPath = function(r, e, t, a, n, i, s) {
  s.forEach(function(o) {
    return yf(r, o);
  }), r.closePath();
};
Tr.drawRoundRectanglePath = function(r, e, t, a, n, i) {
  var s = a / 2, o = n / 2, u = i === "auto" ? pr(a, n) : Math.min(i, o, s);
  r.beginPath && r.beginPath(), r.moveTo(e, t - o), r.arcTo(e + s, t - o, e + s, t, u), r.arcTo(e + s, t + o, e, t + o, u), r.arcTo(e - s, t + o, e - s, t, u), r.arcTo(e - s, t - o, e, t - o, u), r.lineTo(e, t - o), r.closePath();
};
Tr.drawBottomRoundRectanglePath = function(r, e, t, a, n, i) {
  var s = a / 2, o = n / 2, u = i === "auto" ? pr(a, n) : i;
  r.beginPath && r.beginPath(), r.moveTo(e, t - o), r.lineTo(e + s, t - o), r.lineTo(e + s, t), r.arcTo(e + s, t + o, e, t + o, u), r.arcTo(e - s, t + o, e - s, t, u), r.lineTo(e - s, t - o), r.lineTo(e, t - o), r.closePath();
};
Tr.drawCutRectanglePath = function(r, e, t, a, n, i, s) {
  var o = a / 2, u = n / 2, l = s === "auto" ? qo() : s;
  r.beginPath && r.beginPath(), r.moveTo(e - o + l, t - u), r.lineTo(e + o - l, t - u), r.lineTo(e + o, t - u + l), r.lineTo(e + o, t + u - l), r.lineTo(e + o - l, t + u), r.lineTo(e - o + l, t + u), r.lineTo(e - o, t + u - l), r.lineTo(e - o, t - u + l), r.closePath();
};
Tr.drawBarrelPath = function(r, e, t, a, n) {
  var i = a / 2, s = n / 2, o = e - i, u = e + i, l = t - s, c = t + s, v = lo(a, n), f = v.widthOffset, h = v.heightOffset, d = v.ctrlPtOffsetPct * f;
  r.beginPath && r.beginPath(), r.moveTo(o, l + h), r.lineTo(o, c - h), r.quadraticCurveTo(o + d, c, o + f, c), r.lineTo(u - f, c), r.quadraticCurveTo(u - d, c, u, c - h), r.lineTo(u, l + h), r.quadraticCurveTo(u - d, l, u - f, l), r.lineTo(o + f, l), r.quadraticCurveTo(o + d, l, o, l + h), r.closePath();
};
var qc = Math.sin(0), Hc = Math.cos(0), So = {}, Ao = {}, zf = Math.PI / 40;
for (var Jr = 0 * Math.PI; Jr < 2 * Math.PI; Jr += zf)
  So[Jr] = Math.sin(Jr), Ao[Jr] = Math.cos(Jr);
Tr.drawEllipsePath = function(r, e, t, a, n) {
  if (r.beginPath && r.beginPath(), r.ellipse)
    r.ellipse(e, t, a / 2, n / 2, 0, 0, 2 * Math.PI);
  else
    for (var i, s, o = a / 2, u = n / 2, l = 0 * Math.PI; l < 2 * Math.PI; l += zf)
      i = e - o * So[l] * qc + o * Ao[l] * Hc, s = t + u * Ao[l] * qc + u * So[l] * Hc, l === 0 ? r.moveTo(i, s) : r.lineTo(i, s);
  r.closePath();
};
var vn = {};
vn.createBuffer = function(r, e) {
  var t = document.createElement("canvas");
  return t.width = r, t.height = e, [t, t.getContext("2d")];
};
vn.bufferCanvasImage = function(r) {
  var e = this.cy, t = e.mutableElements(), a = t.boundingBox(), n = this.findContainerClientCoords(), i = r.full ? Math.ceil(a.w) : n[2], s = r.full ? Math.ceil(a.h) : n[3], o = ne(r.maxWidth) || ne(r.maxHeight), u = this.getPixelRatio(), l = 1;
  if (r.scale !== void 0)
    i *= r.scale, s *= r.scale, l = r.scale;
  else if (o) {
    var c = 1 / 0, v = 1 / 0;
    ne(r.maxWidth) && (c = l * r.maxWidth / i), ne(r.maxHeight) && (v = l * r.maxHeight / s), l = Math.min(c, v), i *= l, s *= l;
  }
  o || (i *= u, s *= u, l *= u);
  var f = document.createElement("canvas");
  f.width = i, f.height = s, f.style.width = i + "px", f.style.height = s + "px";
  var h = f.getContext("2d");
  if (i > 0 && s > 0) {
    h.clearRect(0, 0, i, s), h.globalCompositeOperation = "source-over";
    var d = this.getCachedZSortedEles();
    if (r.full)
      h.translate(-a.x1 * l, -a.y1 * l), h.scale(l, l), this.drawElements(h, d), h.scale(1 / l, 1 / l), h.translate(a.x1 * l, a.y1 * l);
    else {
      var y = e.pan(), g = {
        x: y.x * l,
        y: y.y * l
      };
      l *= e.zoom(), h.translate(g.x, g.y), h.scale(l, l), this.drawElements(h, d), h.scale(1 / l, 1 / l), h.translate(-g.x, -g.y);
    }
    r.bg && (h.globalCompositeOperation = "destination-over", h.fillStyle = r.bg, h.rect(0, 0, i, s), h.fill());
  }
  return f;
};
function Um(r, e) {
  for (var t = atob(r), a = new ArrayBuffer(t.length), n = new Uint8Array(a), i = 0; i < t.length; i++)
    n[i] = t.charCodeAt(i);
  return new Blob([a], {
    type: e
  });
}
function Uc(r) {
  var e = r.indexOf(",");
  return r.substr(e + 1);
}
function Ff(r, e, t) {
  var a = function() {
    return e.toDataURL(t, r.quality);
  };
  switch (r.output) {
    case "blob-promise":
      return new ha(function(n, i) {
        try {
          e.toBlob(function(s) {
            s != null ? n(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
          }, t, r.quality);
        } catch (s) {
          i(s);
        }
      });
    case "blob":
      return Um(Uc(a()), t);
    case "base64":
      return Uc(a());
    case "base64uri":
    default:
      return a();
  }
}
vn.png = function(r) {
  return Ff(r, this.bufferCanvasImage(r), "image/png");
};
vn.jpg = function(r) {
  return Ff(r, this.bufferCanvasImage(r), "image/jpeg");
};
var Vf = {};
Vf.nodeShapeImpl = function(r, e, t, a, n, i, s, o) {
  switch (r) {
    case "ellipse":
      return this.drawEllipsePath(e, t, a, n, i);
    case "polygon":
      return this.drawPolygonPath(e, t, a, n, i, s);
    case "round-polygon":
      return this.drawRoundPolygonPath(e, t, a, n, i, s, o);
    case "roundrectangle":
    case "round-rectangle":
      return this.drawRoundRectanglePath(e, t, a, n, i, o);
    case "cutrectangle":
    case "cut-rectangle":
      return this.drawCutRectanglePath(e, t, a, n, i, s, o);
    case "bottomroundrectangle":
    case "bottom-round-rectangle":
      return this.drawBottomRoundRectanglePath(e, t, a, n, i, o);
    case "barrel":
      return this.drawBarrelPath(e, t, a, n, i);
  }
};
var Gm = $f, ke = $f.prototype;
ke.CANVAS_LAYERS = 3;
ke.SELECT_BOX = 0;
ke.DRAG = 1;
ke.NODE = 2;
ke.WEBGL = 3;
ke.CANVAS_TYPES = ["2d", "2d", "2d", "webgl2"];
ke.BUFFER_COUNT = 3;
ke.TEXTURE_BUFFER = 0;
ke.MOTIONBLUR_BUFFER_NODE = 1;
ke.MOTIONBLUR_BUFFER_DRAG = 2;
function $f(r) {
  var e = this, t = e.cy.window(), a = t.document;
  r.webgl && (ke.CANVAS_LAYERS = e.CANVAS_LAYERS = 4, console.log("webgl rendering enabled")), e.data = {
    canvases: new Array(ke.CANVAS_LAYERS),
    contexts: new Array(ke.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(ke.CANVAS_LAYERS),
    bufferCanvases: new Array(ke.BUFFER_COUNT),
    bufferContexts: new Array(ke.CANVAS_LAYERS)
  };
  var n = "-webkit-tap-highlight-color", i = "rgba(0,0,0,0)";
  e.data.canvasContainer = a.createElement("div");
  var s = e.data.canvasContainer.style;
  e.data.canvasContainer.style[n] = i, s.position = "relative", s.zIndex = "0", s.overflow = "hidden";
  var o = r.cy.container();
  o.appendChild(e.data.canvasContainer), o.style[n] = i;
  var u = {
    "-webkit-user-select": "none",
    "-moz-user-select": "-moz-none",
    "user-select": "none",
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
    "outline-style": "none"
  };
  Vd() && (u["-ms-touch-action"] = "none", u["touch-action"] = "none");
  for (var l = 0; l < ke.CANVAS_LAYERS; l++) {
    var c = e.data.canvases[l] = a.createElement("canvas"), v = ke.CANVAS_TYPES[l];
    e.data.contexts[l] = c.getContext(v), e.data.contexts[l] || We("Could not create canvas of type " + v), Object.keys(u).forEach(function(W) {
      c.style[W] = u[W];
    }), c.style.position = "absolute", c.setAttribute("data-id", "layer" + l), c.style.zIndex = String(ke.CANVAS_LAYERS - l), e.data.canvasContainer.appendChild(c), e.data.canvasNeedsRedraw[l] = !1;
  }
  e.data.topCanvas = e.data.canvases[0], e.data.canvases[ke.NODE].setAttribute("data-id", "layer" + ke.NODE + "-node"), e.data.canvases[ke.SELECT_BOX].setAttribute("data-id", "layer" + ke.SELECT_BOX + "-selectbox"), e.data.canvases[ke.DRAG].setAttribute("data-id", "layer" + ke.DRAG + "-drag"), e.data.canvases[ke.WEBGL] && e.data.canvases[ke.WEBGL].setAttribute("data-id", "layer" + ke.WEBGL + "-webgl");
  for (var l = 0; l < ke.BUFFER_COUNT; l++)
    e.data.bufferCanvases[l] = a.createElement("canvas"), e.data.bufferContexts[l] = e.data.bufferCanvases[l].getContext("2d"), e.data.bufferCanvases[l].style.position = "absolute", e.data.bufferCanvases[l].setAttribute("data-id", "buffer" + l), e.data.bufferCanvases[l].style.zIndex = String(-l - 1), e.data.bufferCanvases[l].style.visibility = "hidden";
  e.pathsEnabled = !0;
  var f = Ct(), h = function(N) {
    return {
      x: (N.x1 + N.x2) / 2,
      y: (N.y1 + N.y2) / 2
    };
  }, d = function(N) {
    return {
      x: -N.w / 2,
      y: -N.h / 2
    };
  }, y = function(N) {
    var V = N[0]._private, _ = V.oldBackgroundTimestamp === V.backgroundTimestamp;
    return !_;
  }, g = function(N) {
    return N[0]._private.nodeKey;
  }, p = function(N) {
    return N[0]._private.labelStyleKey;
  }, m = function(N) {
    return N[0]._private.sourceLabelStyleKey;
  }, b = function(N) {
    return N[0]._private.targetLabelStyleKey;
  }, w = function(N, V, _, K, re) {
    return e.drawElement(N, V, _, !1, !1, re);
  }, E = function(N, V, _, K, re) {
    return e.drawElementText(N, V, _, K, "main", re);
  }, C = function(N, V, _, K, re) {
    return e.drawElementText(N, V, _, K, "source", re);
  }, x = function(N, V, _, K, re) {
    return e.drawElementText(N, V, _, K, "target", re);
  }, T = function(N) {
    return N.boundingBox(), N[0]._private.bodyBounds;
  }, A = function(N) {
    return N.boundingBox(), N[0]._private.labelBounds.main || f;
  }, k = function(N) {
    return N.boundingBox(), N[0]._private.labelBounds.source || f;
  }, D = function(N) {
    return N.boundingBox(), N[0]._private.labelBounds.target || f;
  }, B = function(N, V) {
    return V;
  }, P = function(N) {
    return h(T(N));
  }, L = function(N, V, _) {
    var K = N ? N + "-" : "";
    return {
      x: V.x + _.pstyle(K + "text-margin-x").pfValue,
      y: V.y + _.pstyle(K + "text-margin-y").pfValue
    };
  }, M = function(N, V, _) {
    var K = N[0]._private.rscratch;
    return {
      x: K[V],
      y: K[_]
    };
  }, I = function(N) {
    return L("", M(N, "labelX", "labelY"), N);
  }, R = function(N) {
    return L("source", M(N, "sourceLabelX", "sourceLabelY"), N);
  }, O = function(N) {
    return L("target", M(N, "targetLabelX", "targetLabelY"), N);
  }, $ = function(N) {
    return d(T(N));
  }, H = function(N) {
    return d(k(N));
  }, z = function(N) {
    return d(D(N));
  }, F = function(N) {
    var V = A(N), _ = d(A(N));
    if (N.isNode()) {
      switch (N.pstyle("text-halign").value) {
        case "left":
          _.x = -V.w - (V.leftPad || 0);
          break;
        case "right":
          _.x = -(V.rightPad || 0);
          break;
      }
      switch (N.pstyle("text-valign").value) {
        case "top":
          _.y = -V.h - (V.topPad || 0);
          break;
        case "bottom":
          _.y = -(V.botPad || 0);
          break;
      }
    }
    return _;
  }, U = e.data.eleTxrCache = new Ra(e, {
    getKey: g,
    doesEleInvalidateKey: y,
    drawElement: w,
    getBoundingBox: T,
    getRotationPoint: P,
    getRotationOffset: $,
    allowEdgeTxrCaching: !1,
    allowParentTxrCaching: !1
  }), Y = e.data.lblTxrCache = new Ra(e, {
    getKey: p,
    drawElement: E,
    getBoundingBox: A,
    getRotationPoint: I,
    getRotationOffset: F,
    isVisible: B
  }), G = e.data.slbTxrCache = new Ra(e, {
    getKey: m,
    drawElement: C,
    getBoundingBox: k,
    getRotationPoint: R,
    getRotationOffset: H,
    isVisible: B
  }), Q = e.data.tlbTxrCache = new Ra(e, {
    getKey: b,
    drawElement: x,
    getBoundingBox: D,
    getRotationPoint: O,
    getRotationOffset: z,
    isVisible: B
  }), J = e.data.lyrTxrCache = new kf(e);
  e.onUpdateEleCalcs(function(N, V) {
    U.invalidateElements(V), Y.invalidateElements(V), G.invalidateElements(V), Q.invalidateElements(V), J.invalidateElements(V);
    for (var _ = 0; _ < V.length; _++) {
      var K = V[_]._private;
      K.oldBackgroundTimestamp = K.backgroundTimestamp;
    }
  });
  var ae = function(N) {
    for (var V = 0; V < N.length; V++)
      J.enqueueElementRefinement(N[V].ele);
  };
  U.onDequeue(ae), Y.onDequeue(ae), G.onDequeue(ae), Q.onDequeue(ae), r.webgl && e.initWebgl(r, {
    getStyleKey: g,
    getLabelKey: p,
    getSourceLabelKey: m,
    getTargetLabelKey: b,
    drawElement: w,
    drawLabel: E,
    drawSourceLabel: C,
    drawTargetLabel: x,
    getElementBox: T,
    getLabelBox: A,
    getSourceLabelBox: k,
    getTargetLabelBox: D,
    getElementRotationPoint: P,
    getElementRotationOffset: $,
    getLabelRotationPoint: I,
    getSourceLabelRotationPoint: R,
    getTargetLabelRotationPoint: O,
    getLabelRotationOffset: F,
    getSourceLabelRotationOffset: H,
    getTargetLabelRotationOffset: z
  });
}
ke.redrawHint = function(r, e) {
  var t = this;
  switch (r) {
    case "eles":
      t.data.canvasNeedsRedraw[ke.NODE] = e;
      break;
    case "drag":
      t.data.canvasNeedsRedraw[ke.DRAG] = e;
      break;
    case "select":
      t.data.canvasNeedsRedraw[ke.SELECT_BOX] = e;
      break;
    case "gc":
      t.data.gc = !0;
      break;
  }
};
var Wm = typeof Path2D < "u";
ke.path2dEnabled = function(r) {
  if (r === void 0)
    return this.pathsEnabled;
  this.pathsEnabled = !!r;
};
ke.usePaths = function() {
  return Wm && this.pathsEnabled;
};
ke.setImgSmoothing = function(r, e) {
  r.imageSmoothingEnabled != null ? r.imageSmoothingEnabled = e : (r.webkitImageSmoothingEnabled = e, r.mozImageSmoothingEnabled = e, r.msImageSmoothingEnabled = e);
};
ke.getImgSmoothing = function(r) {
  return r.imageSmoothingEnabled != null ? r.imageSmoothingEnabled : r.webkitImageSmoothingEnabled || r.mozImageSmoothingEnabled || r.msImageSmoothingEnabled;
};
ke.makeOffscreenCanvas = function(r, e) {
  var t;
  if ((typeof OffscreenCanvas > "u" ? "undefined" : nt(OffscreenCanvas)) !== "undefined")
    t = new OffscreenCanvas(r, e);
  else {
    var a = this.cy.window(), n = a.document;
    t = n.createElement("canvas"), t.width = r, t.height = e;
  }
  return t;
};
[Df, Kt, rr, tu, Hr, Cr, Tt, Mf, Tr, vn, Vf].forEach(function(r) {
  be(ke, r);
});
var Km = [{
  name: "null",
  impl: hf
}, {
  name: "base",
  impl: Tf
}, {
  name: "canvas",
  impl: Gm
}], Xm = [{
  type: "layout",
  extensions: b0
}, {
  type: "renderer",
  extensions: Km
}], _f = {}, qf = {};
function Hf(r, e, t) {
  var a = t, n = function(T) {
    Ve("Can not register `" + e + "` for `" + r + "` since `" + T + "` already exists in the prototype and can not be overridden");
  };
  if (r === "core") {
    if (Za.prototype[e])
      return n(e);
    Za.prototype[e] = t;
  } else if (r === "collection") {
    if (dt.prototype[e])
      return n(e);
    dt.prototype[e] = t;
  } else if (r === "layout") {
    for (var i = function(T) {
      this.options = T, t.call(this, T), Me(this._private) || (this._private = {}), this._private.cy = T.cy, this._private.listeners = [], this.createEmitter();
    }, s = i.prototype = Object.create(t.prototype), o = [], u = 0; u < o.length; u++) {
      var l = o[u];
      s[l] = s[l] || function() {
        return this;
      };
    }
    s.start && !s.run ? s.run = function() {
      return this.start(), this;
    } : !s.start && s.run && (s.start = function() {
      return this.run(), this;
    });
    var c = t.prototype.stop;
    s.stop = function() {
      var x = this.options;
      if (x && x.animate) {
        var T = this.animations;
        if (T)
          for (var A = 0; A < T.length; A++)
            T[A].stop();
      }
      return c ? c.call(this) : this.emit("layoutstop"), this;
    }, s.destroy || (s.destroy = function() {
      return this;
    }), s.cy = function() {
      return this._private.cy;
    };
    var v = function(T) {
      return T._private.cy;
    }, f = {
      addEventFields: function(T, A) {
        A.layout = T, A.cy = v(T), A.target = T;
      },
      bubble: function() {
        return !0;
      },
      parent: function(T) {
        return v(T);
      }
    };
    be(s, {
      createEmitter: function() {
        return this._private.emitter = new pi(f, this), this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(T, A) {
        return this.emitter().on(T, A), this;
      },
      one: function(T, A) {
        return this.emitter().one(T, A), this;
      },
      once: function(T, A) {
        return this.emitter().one(T, A), this;
      },
      removeListener: function(T, A) {
        return this.emitter().removeListener(T, A), this;
      },
      removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
      },
      emit: function(T, A) {
        return this.emitter().emit(T, A), this;
      }
    }), Fe.eventAliasesOn(s), a = i;
  } else if (r === "renderer" && e !== "null" && e !== "base") {
    var h = Uf("renderer", "base"), d = h.prototype, y = t, g = t.prototype, p = function() {
      h.apply(this, arguments), y.apply(this, arguments);
    }, m = p.prototype;
    for (var b in d) {
      var w = d[b], E = g[b] != null;
      if (E)
        return n(b);
      m[b] = w;
    }
    for (var C in g)
      m[C] = g[C];
    d.clientFunctions.forEach(function(x) {
      m[x] = m[x] || function() {
        We("Renderer does not implement `renderer." + x + "()` on its prototype");
      };
    }), a = p;
  } else if (r === "__proto__" || r === "constructor" || r === "prototype")
    return We(r + " is an illegal type to be registered, possibly lead to prototype pollutions");
  return ov({
    map: _f,
    keys: [r, e],
    value: a
  });
}
function Uf(r, e) {
  return uv({
    map: _f,
    keys: [r, e]
  });
}
function Ym(r, e, t, a, n) {
  return ov({
    map: qf,
    keys: [r, e, t, a],
    value: n
  });
}
function Zm(r, e, t, a) {
  return uv({
    map: qf,
    keys: [r, e, t, a]
  });
}
var ko = function() {
  if (arguments.length === 2)
    return Uf.apply(null, arguments);
  if (arguments.length === 3)
    return Hf.apply(null, arguments);
  if (arguments.length === 4)
    return Zm.apply(null, arguments);
  if (arguments.length === 5)
    return Ym.apply(null, arguments);
  We("Invalid extension access syntax");
};
Za.prototype.extension = ko;
Xm.forEach(function(r) {
  r.extensions.forEach(function(e) {
    Hf(r.type, e.name, e.impl);
  });
});
var ai = function() {
  if (!(this instanceof ai))
    return new ai();
  this.length = 0;
}, $r = ai.prototype;
$r.instanceString = function() {
  return "stylesheet";
};
$r.selector = function(r) {
  var e = this.length++;
  return this[e] = {
    selector: r,
    properties: []
  }, this;
};
$r.css = function(r, e) {
  var t = this.length - 1;
  if (ge(r))
    this[t].properties.push({
      name: r,
      value: e
    });
  else if (Me(r))
    for (var a = r, n = Object.keys(a), i = 0; i < n.length; i++) {
      var s = n[i], o = a[s];
      if (o != null) {
        var u = lt.properties[s] || lt.properties[si(s)];
        if (u != null) {
          var l = u.name, c = o;
          this[t].properties.push({
            name: l,
            value: c
          });
        }
      }
    }
  return this;
};
$r.style = $r.css;
$r.generateStyle = function(r) {
  var e = new lt(r);
  return this.appendToStyle(e);
};
$r.appendToStyle = function(r) {
  for (var e = 0; e < this.length; e++) {
    var t = this[e], a = t.selector, n = t.properties;
    r.selector(a);
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      r.css(s.name, s.value);
    }
  }
  return r;
};
var Qm = "3.33.0", _r = function(e) {
  if (e === void 0 && (e = {}), Me(e))
    return new Za(e);
  if (ge(e))
    return ko.apply(ko, arguments);
};
_r.use = function(r) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.unshift(_r), r.apply(null, e), this;
};
_r.warnings = function(r) {
  return gv(r);
};
_r.version = Qm;
_r.stylesheet = _r.Stylesheet = ai;
ht`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <path
    d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
const fn = {
  action: Ue`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: Ue`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: Ue`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: Ue`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: Ue`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: Ue`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: Ue`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: Ue`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: Ue`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: Ue`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: Ue`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: Ue`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
Ue`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${fn.gooseIcon}</svg>`;
Ue`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${fn.reportIcon}</svg>`;
Ue`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${fn.smvIcon}</svg>`;
Ue`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${fn.logIcon}</svg>`;
Ue`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
Ue`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
Ue`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const Gc = {
  dAIcon: {
    width: 26.5,
    height: 24
  },
  dOIcon: {
    width: 26.5,
    height: 24
  },
  enumIcon: {
    width: 26.5,
    height: 24
  },
  lNIcon: {
    width: 26.5,
    height: 24
  }
};
Bn("dAIcon"), Bn("dOIcon"), Bn("enumIcon"), Bn("lNIcon");
function Bn(r) {
  var a, n;
  if (r === "reset")
    return ht``;
  const e = ((a = Gc[r]) == null ? void 0 : a.height) ?? 24, t = ((n = Gc[r]) == null ? void 0 : n.width) ?? 24;
  return ht`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${t} ${e}"
    width="${t}"
  >
    ${fn[r]}
  </svg> `;
}
ht`<svg
  xmlns="http://www.w3.org/2000/svg"
  slot="icon"
  width="25px"
  height="25px"
  style="margin-bottom:0px;"
>
  <rect
    width="8"
    height="8"
    x="8.5"
    y="2"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <rect
    width="8"
    height="8"
    x="2.5"
    y="15"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <rect
    width="8"
    height="8"
    x="15"
    y="15"
    rx="1"
    ry="1"
    fill="transparent"
    stroke="currentColor"
    stroke-width="1.5"
  />

  <line
    x1="2"
    y1="12.5"
    x2="23"
    y2="12.5"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="1.5"
  />
  <line
    x1="12.5"
    y1="10"
    x2="12.5"
    y2="12.5"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <line
    x1="6.5"
    y1="12.5"
    x2="6.5"
    y2="15"
    stroke="currentColor"
    stroke-width="1.5"
  />
  <line
    x1="19"
    y1="12.5"
    x2="19"
    y2="15"
    stroke="currentColor"
    stroke-width="1.5"
  />
</svg>`;
ht`<svg
  xmlns="http://www.w3.org/2000/svg"
  slot="icon"
  viewBox="0 0 25 25"
>
  <path
    d="M 2 9 L 12.5 2 L 23 9 L 21 9 L 21 21 L 4 21 L 4 9 Z"
    fill="transparent"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
  />
  <path
    d="M 11 7 L 17.5 7 L 13.5 11 L 16.5 11 L 10 19 L 11.5 13 L 8.5 13 Z "
    fill="currentColor"
  />
</svg>`;
ht`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: currentColor;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M11.13,20.06L3.63,6.93c-.27-.48-.11-1.09.37-1.36h0c.48-.27,1.09-.11,1.36.37l6.64,11.61,6.64-11.61c.27-.48.88-.65,1.36-.37h0c.48.27.65.88.37,1.36l-7.5,13.13c-.38.67-1.35.67-1.74,0Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`;
ht`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M7.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M12.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M17.75,8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-1.25c0,.84.52,1.55,1.25,1.85v8.65h1.5v-8.65c.73-.3,1.25-1.01,1.25-1.85h-1.25v-1.5Z"
  />
  <path
    class="cls-1"
    d="M20,4H4c-1.1,0-2,.9-2,2v4c0,1.1.9,2,2,2v-6h16v6c1.1,0,2-.9,2-2v-4c0-1.1-.9-2-2-2Z"
  />
</svg>`;
const Jm = ht`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M12.71,15.29l-6.79-6.79c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59c0,.55.45,1,1,1s1-.45,1-1v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33Z"
    />
    <path
      class="cls-1"
      d="M14,6h-1v-3c0-.55-.45-1-1-1s-1,.45-1,1v3h-1c-.55,0-1,.45-1,1s.45,1,1,1h4c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`, jm = ht`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M12.71,15.29l-6.79-6.79c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59c0,.55.45,1,1,1s1-.45,1-1v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33Z"
    />
    <path
      class="cls-1"
      d="M13.41,7l1.29-1.29c.39-.39.39-1.02,0-1.41s-1.02-.39-1.41,0l-1.29,1.29-1.29-1.29c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l1.29,1.29-1.29,1.29c-.39.39-.39,1.02,0,1.41.2.2.45.29.71.29s.51-.1.71-.29l1.29-1.29,1.29,1.29c.2.2.45.29.71.29s.51-.1.71-.29c.39-.39.39-1.02,0-1.41l-1.29-1.29Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`, e1 = ht`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M19,12c0-3.53-2.61-6.43-6-6.92v-2.08c0-.55-.45-1-1-1s-1,.45-1,1v2.08c-3.39.49-6,3.39-6,6.92s2.61,6.43,6,6.92v2.08c0,.55.45,1,1,1s1-.45,1-1v-2.08c3.39-.49,6-3.39,6-6.92ZM7,12c0-2.42,1.72-4.44,4-4.9v9.8c-2.28-.46-4-2.48-4-4.9ZM13,16.9V7.1c2.28.46,4,2.48,4,4.9s-1.72,4.44-4,4.9Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`, t1 = ht`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M17,10c0-2.42-1.72-4.44-4-4.9v-2.1s0-1-1-1-1,1-1,1v2.1c-2.28.46-4,2.48-4,4.9,0,.71.15,1.39.42,2-.27.61-.42,1.29-.42,2,0,2.42,1.72,4.44,4,4.9v1.1h-1c-.55,0-1,.45-1,1s.45,1,1,1h4c.55,0,1-.45,1-1s-.45-1-1-1h-1v-1.1c2.28-.46,4-2.48,4-4.9,0-.71-.15-1.39-.42-2,.27-.61.42-1.29.42-2ZM12,7c1.66,0,3,1.34,3,3,0,0,0,.01,0,.02-.84-.63-1.87-1.02-3-1.02s-2.16.39-3,1.02c0,0,0-.01,0-.02,0-1.66,1.34-3,3-3ZM14.22,12c-.55.61-1.34,1-2.22,1s-1.67-.39-2.22-1c.55-.61,1.34-1,2.22-1s1.67.39,2.22,1ZM12,17c-1.66,0-3-1.34-3-3,0,0,0-.01,0-.02.84.63,1.87,1.02,3,1.02s2.16-.39,3-1.02c0,0,0,.01,0,.02,0,1.66-1.34,3-3,3Z"
  />
  <rect class="cls-2" width="24" height="24" />
</svg>`, r1 = ht`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
      }

      .cls-1,
      .cls-2 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #fff;
        opacity: 0;
      }
    </style>
  </defs>
  <g>
    <path
      class="cls-1"
      d="M13,20h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
    <path
      class="cls-1"
      d="M15,16h-2v-5c0-.13-.03-.26-.08-.38-.05-.12-.12-.23-.22-.33L5.91,3.5c-.39-.39-1.02-.39-1.41,0-.39.39-.39,1.02,0,1.41l6.5,6.5v4.59h-2c-.55,0-1,.45-1,1s.45,1,1,1h6c.55,0,1-.45,1-1s-.45-1-1-1Z"
    />
    <path
      class="cls-1"
      d="M10,4h4c.55,0,1-.45,1-1s-.45-1-1-1h-4c-.55,0-1,.45-1,1s.45,1,1,1Z"
    />
  </g>
  <rect class="cls-2" width="24" height="24" />
</svg>`, a1 = ht`<svg
  id="Laag_1"
  data-name="Laag 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <defs>
    <style>
      .cls-1 {
        fill: currentColor;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path
    class="cls-1"
    d="M20.41,3.59c-.78-.78-2.05-.78-2.83,0-.59.59-.73,1.47-.43,2.19l-1.49,1.49c-1.02-.79-2.29-1.27-3.67-1.27-3.31,0-6,2.69-6,6,0,1.38.48,2.66,1.27,3.67l-1.49,1.49c-.73-.31-1.6-.17-2.19.43-.78.78-.78,2.05,0,2.83.78.78,2.05.78,2.83,0,.59-.59.73-1.47.43-2.19l1.49-1.49c1.02.79,2.29,1.27,3.67,1.27,3.31,0,6-2.69,6-6,0-1.38-.48-2.66-1.27-3.67l1.49-1.49c.73.31,1.6.17,2.19-.43.78-.78.78-2.05,0-2.83ZM12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"
  />
</svg>`;
ht`<svg
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    stroke="currentColor"
    fill="currentColor"
    stroke-width="1"
    cx="12.5"
    cy="12.5"
    r="5"
  />
</svg>`;
ht`<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 25 25"
>
  <line
    x1="12.5"
    y1="2"
    x2="12.5"
    y2="5"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="10"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <circle
    cx="12.5"
    cy="15"
    r="5"
    stroke="currentColor"
    fill="transparent"
    stroke-width="1.5"
    stroke-linecap="round"
  />
  <line
    x1="12.5"
    y1="20"
    x2="12.5"
    y2="23"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
  />
</svg>`;
ht` <svg
  xmlns="http://www.w3.org/2000/svg"
  style="width:100px;height:100px"
  viewBox="0 0 25 25"
>
  <path
    d="M 2 9 L 12.5 2 L 23 9 L 21 9 L 21 21 L 4 21 L 4 9 Z"
    fill="#eee8d5"
    stroke="#6c71c4"
    stroke-width="2"
    stroke-linejoin="round"
  />
  <path
    d="M 11 7 L 17.5 7 L 13.5 11 L 16.5 11 L 10 19 L 11.5 13 L 8.5 13 Z "
    fill="#2aa198"
  />
</svg>`;
Ue`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
Ue`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
Ue`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<g>
  <path class="cls-1" d="M19.3,7.94l-6-5.14c-.75-.64-1.85-.65-2.6,0l-6,5.14c-.44.38-.7.93-.7,1.52v9.54c0,1.1.9,2,2,2h12c1.1,0,2-.9,2-2v-9.54c0-.58-.25-1.14-.7-1.52ZM18,19H6v-9.54l6-5.14,6,5.14v9.54Z"/>
  <path class="cls-1" d="M11.57,7.74l-3,5c-.09.15-.09.35,0,.5.09.16.26.25.44.25h2v3.5c0,.22.15.42.37.48.04.01.09.02.13.02.17,0,.34-.09.43-.24l3-5c.09-.15.09-.35,0-.5-.09-.16-.26-.25-.44-.25h-2v-3.5c0-.22-.15-.42-.37-.48-.22-.06-.45.03-.56.22Z"/>
</g>
<rect class="cls-2" y="0" width="24" height="24"/>
</svg>`;
Ue`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<path class="cls-1" d="M14.39,11.93l-1.39.58v-1.84l2.15-.89c.51-.21.75-.8.54-1.31-.21-.51-.8-.75-1.31-.54l-1.39.58V3c0-.55-.45-1-1-1s-1,.45-1,1v6.33l-2.15.89c-.51.21-.75.8-.54,1.31.21.51.8.75,1.31.54l1.39-.58v1.84l-2.15.89c-.51.21-.75.8-.54,1.31.21.51.8.75,1.31.54l1.39-.58v5.5c0,.55.45,1,1,1s1-.45,1-1v-6.33l2.15-.89c.51-.21.75-.8.54-1.31-.21-.51-.8-.75-1.31-.54Z"/>
<rect class="cls-2" width="24" height="24"/>
</svg>`;
Ue`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<path class="cls-1" d="M18.71,15.29c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l.29.29h-5.59c0-1.1-.9-2-2-2h-2c-1.01,0-1.84.76-1.97,1.74-.61-.34-1.03-.99-1.03-1.74,0-1.1.9-2,2-2h5c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2v-.14c1.72-.45,3-2,3-3.86,0-2.21-1.79-4-4-4h-5c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2h5c1.1,0,2,.9,2,2,0,.75-.42,1.39-1.03,1.74-.13-.98-.96-1.74-1.97-1.74h-2c-1.1,0-2,.9-2,2h-5c-2.21,0-4,1.79-4,4,0,1.86,1.28,3.41,3,3.86v.14c0,1.1.9,2,2,2h2c1.1,0,2-.9,2-2h5.59l-.29.29c-.39.39-.39,1.02,0,1.41.2.2.45.29.71.29s.51-.1.71-.29l2-2c.39-.39.39-1.02,0-1.41l-2-2ZM8,7v-2h2v2s-2,0-2,0ZM14,11h2v2s-2,0-2,0v-2ZM8,19v-2h2v2s-2,0-2,0Z"/>
<rect class="cls-2" y="0" width="24" height="24"/>
</svg>`;
Ue`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<defs>
  <style>
    .cls-1 {
      fill: currentColor;
    }

    .cls-1, .cls-2 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: currentColor;
      opacity: 0;
    }
  </style>
</defs>
<g>
  <path class="cls-1" d="M19,20h-2c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h-.11c.55,0,1-.45,1-1s-.42-.96-.95-.99c.04,0,.08-.01.12-.01h-.17c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h-.11c.55,0,1-.45,1-1s-.42-.96-.95-.99c.04,0,.08-.01.12-.01h-.17c-1.21,0-2.18-1.09-1.97-2.34.16-.98,1.09-1.66,2.08-1.66h1.89c.55,0,1-.45,1-1s-.45-1-1-1h-1.83c-2.09,0-3.95,1.53-4.15,3.61-.13,1.37.44,2.59,1.38,3.41-.76.64-1.28,1.55-1.38,2.59-.13,1.37.44,2.59,1.38,3.41-.76.64-1.28,1.55-1.38,2.59-.23,2.39,1.64,4.39,3.98,4.39h2c.55,0,1-.45,1-1s-.45-1-1-1Z"/>
  <path class="cls-1" d="M10.98,6.39c.23-2.39-1.64-4.39-3.98-4.39h-2c-.55,0-1,.45-1,1s.45,1,1,1h2c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h.11c-.55,0-1,.45-1,1s.42.96.95.99c-.04,0-.08.01-.12.01h.17c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h.11c-.55,0-1,.45-1,1,0,.28.11.53.29.71.17.17.4.27.65.28h0s.03.01.05.01c1.21,0,2.18,1.09,1.97,2.34-.16.98-1.09,1.66-2.08,1.66h-1.89c-.55,0-1,.45-1,1s.45,1,1,1h1.83c2.09,0,3.95-1.53,4.15-3.61.13-1.37-.44-2.59-1.38-3.41.76-.64,1.28-1.55,1.38-2.59.13-1.37-.44-2.59-1.38-3.41.76-.64,1.28-1.55,1.38-2.59Z"/>
  <path class="cls-1" d="M6.83,16h.17s-.03,0-.05-.01c-.04,0-.08.01-.12.01Z"/>
</g>
<rect class="cls-2" width="24" height="24"/>
</svg>`;
var n1 = Object.defineProperty, Ti = (r, e, t, a) => {
  for (var n = void 0, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (n = s(e, t, n) || n);
  return n && n1(e, t, n), n;
};
const i1 = {
  CBR: jm,
  DIS: Jm,
  CTR: e1,
  VTR: t1,
  ERS: r1
};
var Ht;
const dn = (Ht = class extends Oa {
  constructor() {
    super(), this.header = "oscd-tsld-editor", this.namespace = "";
  }
  static getIcon(e) {
    return i1[e] ?? a1;
  }
  firstUpdated() {
    this.initializeCytoscape();
  }
  initializeCytoscape() {
    var n;
    const e = this.createNodesEdges(), { nodes: t } = e, { edges: a } = e;
    this.cy = _r({
      container: (n = this.shadowRoot) == null ? void 0 : n.getElementById("cy"),
      elements: {
        nodes: t,
        edges: a
      },
      style: [
        {
          selector: "node",
          style: {
            label: "data(label)",
            "text-valign": "top",
            "text-halign": "center"
          }
        },
        {
          selector: "node[backgroundImage]",
          style: {
            shape: "rectangle",
            "background-image": "data(backgroundImage)",
            "background-opacity": 0,
            "background-height": "42px",
            "background-width": "42px",
            "text-valign": "top",
            "text-halign": "left"
          }
        },
        {
          selector: 'node[nodeType = "cnNode"]',
          style: {
            height: "10px",
            width: "10px",
            "background-color": "#000"
          }
        },
        {
          selector: 'node[nodeType = "iedNode"]',
          style: {
            shape: "rectangle"
          }
        },
        {
          selector: 'node[nodeType = "iedLnNode"]',
          style: {
            shape: "rectangle",
            height: "30px",
            width: "80px",
            "text-valign": "center",
            "text-halign": "center"
          }
        },
        {
          selector: "edge",
          style: {
            width: 4,
            "line-color": "#000"
          }
        },
        {
          selector: 'edge[type = "ceEdge"]',
          style: {
            width: 4,
            "curve-style": "taxi",
            "line-style": "solid",
            "line-color": "#000",
            "source-endpoint": "outside-to-node",
            "target-endpoint": "outside-to-node"
          }
        },
        {
          selector: 'edge[type = "busBarEdge"]',
          style: {
            width: 4,
            "curve-style": "taxi",
            "line-style": "solid",
            "line-color": "#000",
            "taxi-turn": "0%"
          }
        },
        {
          selector: 'edge[type = "iedEdge"]',
          style: {
            width: 4,
            "curve-style": "taxi",
            "line-style": "dashed",
            "line-color": "#000",
            "taxi-direction": "horizontal"
          }
        }
      ],
      layout: {
        name: "preset"
      }
    }), this.cy.on(
      "free",
      "node",
      (i) => {
        i.target.data("nodeType") === "iedNode" && this.saveIEDPositions();
      }
    );
  }
  createNodesEdges() {
    const e = this.doc.querySelectorAll("Substation"), t = this.doc.querySelectorAll("IED"), a = e.item(0), n = Ht.findCordAttribute(a);
    this.namespace = this.doc.lookupNamespaceURI(n);
    const i = this.namespace, s = [], o = [];
    let u = 0, l = 0;
    return e.forEach((c) => {
      const v = c.getAttribute("name");
      s.push({
        data: {
          id: v,
          label: v,
          nodeType: "sbsNode"
        },
        locked: !0
      });
      const f = c.getAttributeNS(
        i,
        "x"
      ), h = c.getAttributeNS(
        i,
        "y"
      );
      u += +f, l += +h, c.querySelectorAll("VoltageLevel").forEach((y) => {
        let g = 0;
        const p = y.getAttribute(
          "name"
        ), m = y.getAttributeNS(
          i,
          "x"
        ), b = y.getAttributeNS(
          i,
          "y"
        ), w = y.querySelectorAll("Bay");
        if (w && w.length === 0) {
          const C = (+u + +m) * 50, x = (+l + +b) * 50;
          s.push({
            data: {
              id: p,
              label: p,
              parent: v,
              nodeType: "vlNode"
            },
            position: { x: C, y: x },
            locked: !0
          });
        } else
          s.push({
            data: {
              id: p,
              label: p,
              parent: v,
              nodeType: "vlNode"
            },
            locked: !0
          });
        u += +m, l += +b;
        let E;
        w.forEach((C, x) => {
          const T = C.getAttribute("name"), A = C.querySelectorAll("ConductingEquipment"), k = C.getAttributeNS(i, "x"), D = C.getAttributeNS(i, "y");
          u += +k, l += +D;
          let B = 0, P = 0;
          const L = Ht.lookupBaseX(
            A,
            i,
            u,
            B
          );
          if (A && A.length === 0) {
            const U = u + k + B + x * 100;
            s.push({
              data: {
                id: T,
                label: T,
                parent: p,
                nodeType: "bayNode"
              },
              locked: !0,
              position: { x: U, y: g }
            });
          } else
            s.push({
              data: {
                id: T,
                label: T,
                parent: p,
                nodeType: "bayNode"
              },
              locked: !0
            });
          if (T.toLowerCase().includes("bb")) {
            C.querySelectorAll("ConnectivityNode").forEach((Y) => {
              let G = C.getAttributeNS(
                i,
                "x"
              ), Q = C.getAttributeNS(
                i,
                "y"
              );
              const J = Y.getAttribute("name");
              G = (+G + +u) * 50, Q = (+Q + +l) * 50, s.push({
                data: {
                  id: J,
                  label: "",
                  parent: T,
                  nodeType: "cnNode"
                },
                position: { x: G, y: Q },
                locked: !0
              }), E = J;
            });
            return;
          }
          const M = {}, I = [], R = [];
          A.forEach((U) => {
            const Y = `${U.getAttribute("name")}_${T}`, G = U.getAttribute("name"), Q = U.getAttribute("type"), J = Ht.getIcon(Q);
            let ae, W = U.getAttributeNS(i, "x"), N = U.getAttributeNS(i, "y");
            W = (+W + +u) * 50 + B, N = (+N + +l) * 50, (W === L && g === 0 || g > N) && (g = N), L > W ? ae = `data:image/svg+xml;utf8,${encodeURIComponent(
              // SVGs need explicit height and with for zoom to work
              J.strings[0].replace(
                "<svg",
                '<svg transform="rotate(90)" width="24" height="24"'
              ).replace(`
`, "")
            )}` : L < W ? ae = `data:image/svg+xml;utf8,${encodeURIComponent(
              // SVGs need explicit height and with for zoom to work
              J.strings[0].replace(
                "<svg",
                '<svg transform="rotate(90)" width="24" height="24"'
              ).replace(`
`, "")
            )}` : ae = `data:image/svg+xml;utf8,${encodeURIComponent(
              // SVGs need explicit height and with for zoom to work
              J.strings[0].replace(
                "<svg",
                '<svg transform="rotate(0)" width="24" height="24"'
              ).replace(`
`, "")
            )}`, s.push({
              data: {
                id: Y,
                label: G,
                backgroundImage: ae,
                parent: T,
                nodeType: "ceNode"
              },
              position: { x: W, y: N },
              locked: !0
            }), U.querySelectorAll("Terminal").forEach((_) => {
              let K = _.getAttribute("cNodeName");
              if (K === "grounded")
                K = `${K}-${Object.keys(M).length}`, L < W ? W += 50 : L > W ? W -= 50 : N += 50, M[K] = [W, N], o.push({
                  data: { source: Y, target: K, type: "ceEdge" }
                });
              else if (K.includes("Busbar")) {
                let re = U.getAttributeNS(
                  i,
                  "y"
                );
                re = +re + +l, I.push(re), R.push(Y);
              } else
                o.push({
                  data: { source: Y, target: K, type: "ceEdge" }
                });
            });
          });
          let O = 0;
          I.forEach((U) => {
            (+U * 50 < O || O === 0) && (O = +U * 50);
          }), s.push({
            data: {
              id: `busBarConnector-${T}`,
              label: "",
              nodeType: "cnNode",
              parent: T
            },
            position: { x: L, y: O },
            locked: !0
          }), R.forEach((U) => {
            o.push({
              data: {
                source: `busBarConnector-${T}`,
                target: U,
                type: "ceEdge"
              }
            });
          }), o.push({
            data: {
              source: `busBarConnector-${T}`,
              target: E,
              type: "busBarEdge"
            }
          }), C.querySelectorAll("ConnectivityNode").forEach((U) => {
            const Y = U.getAttribute("name");
            let G = 0, Q = 0;
            if (Y !== "grounded") {
              const J = [], ae = [];
              C.querySelectorAll("Terminal").forEach((W) => {
                if (W.getAttribute("cNodeName") === Y) {
                  const N = W.parentElement;
                  if (N === null)
                    throw new Error();
                  {
                    const V = N.getAttributeNS(i, "x"), _ = N.getAttributeNS(i, "y");
                    J.push(V), ae.push(_);
                  }
                }
              }), J.length > 2 ? (Q += +J.filter(
                (W, N) => J.some(
                  (V, _) => V === W && _ !== N
                )
              )[0], ae.forEach((W) => {
                G += +W;
              })) : (J.forEach((W) => {
                Q += +W;
              }), ae.forEach((W) => {
                G += +W;
              }), Q /= J.length), G /= ae.length, Q = (+Q + +u) * 50, G = (+G + +l) * 50, Q > P && (P = Q), s.push({
                data: {
                  id: Y,
                  label: "",
                  nodeType: "cnNode",
                  parent: T
                },
                position: { x: Q, y: G },
                locked: !0
              });
            } else
              Object.keys(M).forEach((J) => {
                s.push({
                  data: {
                    id: J,
                    label: "",
                    nodeType: "cnNode",
                    parent: T
                  },
                  position: {
                    x: M[J].at(0),
                    y: M[J].at(1)
                  },
                  locked: !0
                }), M[J][0] > P && (P = M[J].at(0));
              });
          }), P += 300;
          const H = C.querySelectorAll("LNode"), z = Ht.createIEDDict(
            H,
            t
          ), F = Ht.createLDDict(
            H,
            t
          );
          Object.keys(z).forEach((U, Y) => {
            s.push({
              data: {
                id: U,
                label: U,
                nodeType: "iedNode",
                parent: T
              }
            }), z[U].forEach((G, Q) => {
              s.push({
                data: {
                  id: G,
                  label: G,
                  nodeType: "iedNode",
                  parent: U
                }
              }), t.forEach((J) => {
                J.getAttribute("name") === U && J.querySelectorAll("LDevice").forEach((W) => {
                  Object.keys(F).includes(G) && F[G].forEach((N, V) => {
                    W.querySelectorAll("LN").forEach((K) => {
                      const re = `${K.getAttribute("lnClass")} ${K.getAttribute("inst")}`;
                      if (N === re) {
                        let se, Te;
                        K.getAttributeNS(i, "x") !== null && K.getAttributeNS(i, "y") !== null ? (se = K.getAttributeNS(
                          i,
                          "x"
                        ), se = +se, Te = K.getAttributeNS(
                          i,
                          "y"
                        ), Te = +Te) : (se = P, Te = g + V * 30 + Q * 70 + Y * 200), B < se && (B = se), s.push({
                          data: {
                            id: `${re}-${G}`,
                            label: re,
                            nodeType: "iedLnNode",
                            parent: G
                          },
                          position: { x: se, y: Te }
                        });
                      }
                    });
                  });
                });
              });
            });
          }), B += 200, H.forEach((U) => {
            const Y = U.parentElement, G = `${U.getAttribute("lnClass")} ${U.getAttribute("lnInst")}`;
            this.doc.querySelectorAll("LN").forEach((J) => {
              if (`${J.getAttribute("lnClass")} ${J.getAttribute("inst")}` === G) {
                const N = J.parentElement.getAttribute("inst"), V = `${G}-${N}`, _ = `${Y.getAttribute("name")}_${T}`;
                o.push({
                  data: {
                    source: _,
                    target: V,
                    type: "iedEdge"
                  }
                });
              }
            });
          });
        });
      });
    }), { nodes: s, edges: o };
  }
  saveIEDPositions() {
    var e;
    (e = this.cy) == null || e.nodes().forEach((t) => {
      if (t.data("nodeType") === "iedLnNode") {
        const a = t.position(), n = t.data("id"), i = n.split("-")[1], s = n.split("-")[0];
        this.doc.querySelectorAll("IED").forEach((u) => {
          u.querySelectorAll("LDevice").forEach((c) => {
            const v = c.querySelectorAll("LN"), f = c.getAttribute("inst");
            i === f && v.forEach((h) => {
              const d = `${h.getAttribute("lnClass")} ${h.getAttribute("inst")}`;
              s === d && (h.setAttributeNS(this.namespace, "x", `${a.x}`), h.setAttributeNS(this.namespace, "y", `${a.y}`));
            });
          });
        });
      }
    });
  }
  static createIEDDict(e, t) {
    const a = {};
    return e.forEach((n) => {
      const i = n.getAttribute("iedName"), s = `${n.getAttribute("lnClass")} ${n.getAttribute("lnInst")}`;
      if (Object.keys(a).includes(i))
        t.forEach((o) => {
          o.getAttribute("name") === i && o.querySelectorAll("LDevice").forEach((l) => {
            const c = l.getAttribute("inst");
            l.querySelectorAll("LN").forEach((f) => {
              `${f.getAttribute("lnClass")} ${f.getAttribute("inst")}` === s && !a[i].includes(c) && a[i].push(c);
            });
          });
        });
      else {
        const o = [];
        t.forEach((u) => {
          u.getAttribute("name") === i && u.querySelectorAll("LDevice").forEach((c) => {
            const v = c.getAttribute("inst");
            c.querySelectorAll("LN").forEach((h) => {
              `${h.getAttribute("lnClass")} ${h.getAttribute("inst")}` === s && !o.includes(v) && o.push(v);
            });
          });
        }), a[i] = o;
      }
    }), a;
  }
  static createLDDict(e, t) {
    const a = {};
    return e.forEach((n) => {
      const i = n.getAttribute("iedName"), s = `${n.getAttribute("lnClass")} ${n.getAttribute("lnInst")}`;
      t.forEach((o) => {
        o.getAttribute("name") === i && o.querySelectorAll("LDevice").forEach((c) => {
          const v = c.getAttribute("inst");
          c.querySelectorAll("LN").forEach((h) => {
            const d = `${h.getAttribute("lnClass")} ${h.getAttribute("inst")}`;
            d === s && (Object.keys(a).includes(v) ? a[v].push(d) : a[v] = [d]);
          });
        });
      });
    }), Object.keys(a).forEach((n) => {
      a[n].sort();
    }), a;
  }
  static lookupBaseX(e, t, a, n) {
    let i = 0;
    const s = {};
    e.forEach((l) => {
      const c = l.getAttributeNS(t, "x"), v = l.getAttribute("name");
      Object.keys(s).includes(c) ? s[c].push(v) : s[c] = [v];
    });
    let o = 0, u = Object.keys(s);
    return Object.keys(s).forEach((l) => {
      if (o < s[l].length)
        o = s[l].length, i = +l;
      else if (o === s[l].length) {
        u = u.sort();
        const c = (+u[0] + +u[-1]) / 2;
        let v = 0;
        u.forEach((f) => {
          v > (+f - +c) ** 2 && (v = (+f - +c) ** 2, i = +f);
        });
      }
    }), (+i + +a + +n) * 50;
  }
  static findCordAttribute(e) {
    const t = /[se](xy|sld):x|x/y, a = /[se](xy|sld):y|y/y, n = Array.from(e.attributes).find(
      (s) => t.test(s.name)
    ), i = Array.from(e.attributes).find(
      (s) => a.test(s.name)
    );
    if (n === void 0 || i === void 0)
      throw new Error("one of the x/y attributes is undefined");
    return n.name.split(":")[0];
  }
  render() {
    return ht`
      <div>
        <div
          id="cy"
          style="height: calc(calc(100vh - var(--mdc-tab-height, 48px) - 64px)); position: relative;"
        ></div>
      </div>`;
  }
}, Ht.styles = rd`
    :host {
      display: block;
      padding: 25px;
      color: var(--oscd-tsld-editor-text-color, #000);
    }

  ,
  #cy {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
  }
  `, Ht);
Ti([
  ii({ type: Object })
], dn.prototype, "doc");
Ti([
  ii({ type: String })
], dn.prototype, "header");
Ti([
  ii()
], dn.prototype, "cy");
Ti([
  ii({ type: String })
], dn.prototype, "namespace");
let c1 = dn;
export {
  c1 as default
};
