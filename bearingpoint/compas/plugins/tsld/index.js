/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bn = globalThis, lo = bn.ShadowRoot && (bn.ShadyCSS === void 0 || bn.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, co = Symbol(), Ho = /* @__PURE__ */ new WeakMap();
let Ac = class {
  constructor(e, t, a) {
    if (this._$cssResult$ = !0, a !== co)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (lo && e === void 0) {
      const a = t !== void 0 && t.length === 1;
      a && (e = Ho.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), a && Ho.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ov = (r) => new Ac(typeof r == "string" ? r : r + "", void 0, co), Nv = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((a, n, i) => a + ((s) => {
    if (s._$cssResult$ === !0)
      return s.cssText;
    if (typeof s == "number")
      return s;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n) + r[i + 1], r[0]);
  return new Ac(t, r, co);
}, zv = (r, e) => {
  if (lo)
    r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else
    for (const t of e) {
      const a = document.createElement("style"), n = bn.litNonce;
      n !== void 0 && a.setAttribute("nonce", n), a.textContent = t.cssText, r.appendChild(a);
    }
}, Uo = lo ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const a of e.cssRules)
    t += a.cssText;
  return Ov(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Fv, defineProperty: $v, getOwnPropertyDescriptor: Vv, getOwnPropertyNames: qv, getOwnPropertySymbols: _v, getPrototypeOf: Hv } = Object, nr = globalThis, Go = nr.trustedTypes, Uv = Go ? Go.emptyScript : "", gi = nr.reactiveElementPolyfillSupport, Ea = (r, e) => r, Ln = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Uv : null;
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
} }, fo = (r, e) => !Fv(r, e), Ko = { attribute: !0, type: String, converter: Ln, reflect: !1, hasChanged: fo };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), nr.litPropertyMetadata ?? (nr.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let _r = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ko) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const a = Symbol(), n = this.getPropertyDescriptor(e, a, t);
      n !== void 0 && $v(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, a) {
    const { get: n, set: i } = Vv(this.prototype, e) ?? { get() {
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
    return this.elementProperties.get(e) ?? Ko;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ea("elementProperties")))
      return;
    const e = Hv(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ea("finalized")))
      return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ea("properties"))) {
      const t = this.properties, a = [...qv(t), ..._v(t)];
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
        t.unshift(Uo(n));
    } else
      e !== void 0 && t.push(Uo(e));
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
    return zv(e, this.constructor.elementStyles), e;
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
      const s = (((i = a.converter) == null ? void 0 : i.toAttribute) !== void 0 ? a.converter : Ln).toAttribute(t, a.type);
      this._$Em = e, s == null ? this.removeAttribute(n) : this.setAttribute(n, s), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var i;
    const a = this.constructor, n = a._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const s = a.getPropertyOptions(n), o = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((i = s.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? s.converter : Ln;
      this._$Em = n, this[n] = o.fromAttribute(t, s.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, a) {
    if (e !== void 0) {
      if (a ?? (a = this.constructor.getPropertyOptions(e)), !(a.hasChanged ?? fo)(this[e], t))
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
_r.elementStyles = [], _r.shadowRootOptions = { mode: "open" }, _r[Ea("elementProperties")] = /* @__PURE__ */ new Map(), _r[Ea("finalized")] = /* @__PURE__ */ new Map(), gi == null || gi({ ReactiveElement: _r }), (nr.reactiveElementVersions ?? (nr.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ca = globalThis, Rn = Ca.trustedTypes, Wo = Rn ? Rn.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, kc = "$lit$", tr = `lit$${Math.random().toFixed(9).slice(2)}$`, Dc = "?" + tr, Gv = `<${Dc}>`, Sr = document, Da = () => Sr.createComment(""), Pa = (r) => r === null || typeof r != "object" && typeof r != "function", vo = Array.isArray, Kv = (r) => vo(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", pi = `[ 	
\f\r]`, fa = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Zo = /-->/g, Yo = />/g, yr = RegExp(`>|${pi}(?:([^\\s"'>=/]+)(${pi}*=${pi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Xo = /'/g, Qo = /"/g, Pc = /^(?:script|style|textarea|title)$/i, Bc = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ot = Bc(1), Fe = Bc(2), Qr = Symbol.for("lit-noChange"), tt = Symbol.for("lit-nothing"), Jo = /* @__PURE__ */ new WeakMap(), Cr = Sr.createTreeWalker(Sr, 129);
function Lc(r, e) {
  if (!vo(r) || !r.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return Wo !== void 0 ? Wo.createHTML(e) : e;
}
const Wv = (r, e) => {
  const t = r.length - 1, a = [];
  let n, i = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", s = fa;
  for (let o = 0; o < t; o++) {
    const u = r[o];
    let l, c, f = -1, v = 0;
    for (; v < u.length && (s.lastIndex = v, c = s.exec(u), c !== null); )
      v = s.lastIndex, s === fa ? c[1] === "!--" ? s = Zo : c[1] !== void 0 ? s = Yo : c[2] !== void 0 ? (Pc.test(c[2]) && (n = RegExp("</" + c[2], "g")), s = yr) : c[3] !== void 0 && (s = yr) : s === yr ? c[0] === ">" ? (s = n ?? fa, f = -1) : c[1] === void 0 ? f = -2 : (f = s.lastIndex - c[2].length, l = c[1], s = c[3] === void 0 ? yr : c[3] === '"' ? Qo : Xo) : s === Qo || s === Xo ? s = yr : s === Zo || s === Yo ? s = fa : (s = yr, n = void 0);
    const h = s === yr && r[o + 1].startsWith("/>") ? " " : "";
    i += s === fa ? u + Gv : f >= 0 ? (a.push(l), u.slice(0, f) + kc + u.slice(f) + tr + h) : u + tr + (f === -2 ? o : h);
  }
  return [Lc(r, i + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), a];
};
class Ba {
  constructor({ strings: e, _$litType$: t }, a) {
    let n;
    this.parts = [];
    let i = 0, s = 0;
    const o = e.length - 1, u = this.parts, [l, c] = Wv(e, t);
    if (this.el = Ba.createElement(l, a), Cr.currentNode = this.el.content, t === 2 || t === 3) {
      const f = this.el.content.firstChild;
      f.replaceWith(...f.childNodes);
    }
    for (; (n = Cr.nextNode()) !== null && u.length < o; ) {
      if (n.nodeType === 1) {
        if (n.hasAttributes())
          for (const f of n.getAttributeNames())
            if (f.endsWith(kc)) {
              const v = c[s++], h = n.getAttribute(f).split(tr), d = /([.?@])?(.*)/.exec(v);
              u.push({ type: 1, index: i, name: d[2], strings: h, ctor: d[1] === "." ? Yv : d[1] === "?" ? Xv : d[1] === "@" ? Qv : Kn }), n.removeAttribute(f);
            } else
              f.startsWith(tr) && (u.push({ type: 6, index: i }), n.removeAttribute(f));
        if (Pc.test(n.tagName)) {
          const f = n.textContent.split(tr), v = f.length - 1;
          if (v > 0) {
            n.textContent = Rn ? Rn.emptyScript : "";
            for (let h = 0; h < v; h++)
              n.append(f[h], Da()), Cr.nextNode(), u.push({ type: 2, index: ++i });
            n.append(f[v], Da());
          }
        }
      } else if (n.nodeType === 8)
        if (n.data === Dc)
          u.push({ type: 2, index: i });
        else {
          let f = -1;
          for (; (f = n.data.indexOf(tr, f + 1)) !== -1; )
            u.push({ type: 7, index: i }), f += tr.length - 1;
        }
      i++;
    }
  }
  static createElement(e, t) {
    const a = Sr.createElement("template");
    return a.innerHTML = e, a;
  }
}
function Jr(r, e, t = r, a) {
  var s, o;
  if (e === Qr)
    return e;
  let n = a !== void 0 ? (s = t._$Co) == null ? void 0 : s[a] : t._$Cl;
  const i = Pa(e) ? void 0 : e._$litDirective$;
  return (n == null ? void 0 : n.constructor) !== i && ((o = n == null ? void 0 : n._$AO) == null || o.call(n, !1), i === void 0 ? n = void 0 : (n = new i(r), n._$AT(r, t, a)), a !== void 0 ? (t._$Co ?? (t._$Co = []))[a] = n : t._$Cl = n), n !== void 0 && (e = Jr(r, n._$AS(r, e.values), n, a)), e;
}
class Zv {
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
    const { el: { content: t }, parts: a } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? Sr).importNode(t, !0);
    Cr.currentNode = n;
    let i = Cr.nextNode(), s = 0, o = 0, u = a[0];
    for (; u !== void 0; ) {
      if (s === u.index) {
        let l;
        u.type === 2 ? l = new qa(i, i.nextSibling, this, e) : u.type === 1 ? l = new u.ctor(i, u.name, u.strings, this, e) : u.type === 6 && (l = new Jv(i, this, e)), this._$AV.push(l), u = a[++o];
      }
      s !== (u == null ? void 0 : u.index) && (i = Cr.nextNode(), s++);
    }
    return Cr.currentNode = Sr, n;
  }
  p(e) {
    let t = 0;
    for (const a of this._$AV)
      a !== void 0 && (a.strings !== void 0 ? (a._$AI(e, a, t), t += a.strings.length - 2) : a._$AI(e[t])), t++;
  }
}
class qa {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, a, n) {
    this.type = 2, this._$AH = tt, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = a, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
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
    e = Jr(this, e, t), Pa(e) ? e === tt || e == null || e === "" ? (this._$AH !== tt && this._$AR(), this._$AH = tt) : e !== this._$AH && e !== Qr && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Kv(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== tt && Pa(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Sr.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var i;
    const { values: t, _$litType$: a } = e, n = typeof a == "number" ? this._$AC(e) : (a.el === void 0 && (a.el = Ba.createElement(Lc(a.h, a.h[0]), this.options)), a);
    if (((i = this._$AH) == null ? void 0 : i._$AD) === n)
      this._$AH.p(t);
    else {
      const s = new Zv(n, this), o = s.u(this.options);
      s.p(t), this.T(o), this._$AH = s;
    }
  }
  _$AC(e) {
    let t = Jo.get(e.strings);
    return t === void 0 && Jo.set(e.strings, t = new Ba(e)), t;
  }
  k(e) {
    vo(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let a, n = 0;
    for (const i of e)
      n === t.length ? t.push(a = new qa(this.O(Da()), this.O(Da()), this, this.options)) : a = t[n], a._$AI(i), n++;
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
class Kn {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, a, n, i) {
    this.type = 1, this._$AH = tt, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = i, a.length > 2 || a[0] !== "" || a[1] !== "" ? (this._$AH = Array(a.length - 1).fill(new String()), this.strings = a) : this._$AH = tt;
  }
  _$AI(e, t = this, a, n) {
    const i = this.strings;
    let s = !1;
    if (i === void 0)
      e = Jr(this, e, t, 0), s = !Pa(e) || e !== this._$AH && e !== Qr, s && (this._$AH = e);
    else {
      const o = e;
      let u, l;
      for (e = i[0], u = 0; u < i.length - 1; u++)
        l = Jr(this, o[a + u], t, u), l === Qr && (l = this._$AH[u]), s || (s = !Pa(l) || l !== this._$AH[u]), l === tt ? e = tt : e !== tt && (e += (l ?? "") + i[u + 1]), this._$AH[u] = l;
    }
    s && !n && this.j(e);
  }
  j(e) {
    e === tt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Yv extends Kn {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === tt ? void 0 : e;
  }
}
class Xv extends Kn {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== tt);
  }
}
class Qv extends Kn {
  constructor(e, t, a, n, i) {
    super(e, t, a, n, i), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Jr(this, e, t, 0) ?? tt) === Qr)
      return;
    const a = this._$AH, n = e === tt && a !== tt || e.capture !== a.capture || e.once !== a.once || e.passive !== a.passive, i = e !== tt && (a === tt || n);
    n && this.element.removeEventListener(this.name, this, a), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Jv {
  constructor(e, t, a) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = a;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Jr(this, e);
  }
}
const yi = Ca.litHtmlPolyfillSupport;
yi == null || yi(Ba, qa), (Ca.litHtmlVersions ?? (Ca.litHtmlVersions = [])).push("3.2.1");
const jv = (r, e, t) => {
  const a = (t == null ? void 0 : t.renderBefore) ?? e;
  let n = a._$litPart$;
  if (n === void 0) {
    const i = (t == null ? void 0 : t.renderBefore) ?? null;
    a._$litPart$ = n = new qa(e.insertBefore(Da(), i), i, void 0, t ?? {});
  }
  return n._$AI(r), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Ta = class extends _r {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = jv(t, this.renderRoot, this.renderOptions);
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
    return Qr;
  }
};
var Sc;
Ta._$litElement$ = !0, Ta.finalized = !0, (Sc = globalThis.litElementHydrateSupport) == null || Sc.call(globalThis, { LitElement: Ta });
const mi = globalThis.litElementPolyfillSupport;
mi == null || mi({ LitElement: Ta });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ed = { attribute: !0, type: String, converter: Ln, reflect: !1, hasChanged: fo }, td = (r = ed, e, t) => {
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
function Wn(r) {
  return (e, t) => typeof t == "object" ? td(r, e, t) : ((a, n, i) => {
    const s = n.hasOwnProperty(i);
    return n.constructor.createProperty(i, s ? { ...a, wrapped: !0 } : a), s ? Object.getOwnPropertyDescriptor(n, i) : void 0;
  })(r, e, t);
}
function Us(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, a = Array(e); t < e; t++)
    a[t] = r[t];
  return a;
}
function rd(r) {
  if (Array.isArray(r))
    return r;
}
function ad(r) {
  if (Array.isArray(r))
    return Us(r);
}
function dr(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function nd(r, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(r, Ic(a.key), a);
  }
}
function hr(r, e, t) {
  return e && nd(r.prototype, e), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Lt(r, e) {
  var t = typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = ho(r)) || e) {
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
function Rc(r, e, t) {
  return (e = Ic(e)) in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function id(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function sd(r, e) {
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
function od() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ud() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function et(r, e) {
  return rd(r) || sd(r, e) || ho(r, e) || od();
}
function Mc(r) {
  return ad(r) || id(r) || ho(r) || ud();
}
function ld(r, e) {
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
function Ic(r) {
  var e = ld(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function We(r) {
  "@babel/helpers - typeof";
  return We = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, We(r);
}
function ho(r, e) {
  if (r) {
    if (typeof r == "string")
      return Us(r, e);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Us(r, e) : void 0;
  }
}
var Ge = typeof window > "u" ? null : window, jo = Ge ? Ge.navigator : null;
Ge && Ge.document;
var cd = We(""), Oc = We({}), fd = We(function() {
}), vd = typeof HTMLElement > "u" ? "undefined" : We(HTMLElement), _a = function(e) {
  return e && e.instanceString && _e(e.instanceString) ? e.instanceString() : null;
}, fe = function(e) {
  return e != null && We(e) == cd;
}, _e = function(e) {
  return e != null && We(e) === fd;
}, Ie = function(e) {
  return !Et(e) && (Array.isArray ? Array.isArray(e) : e != null && e instanceof Array);
}, ke = function(e) {
  return e != null && We(e) === Oc && !Ie(e) && e.constructor === Object;
}, dd = function(e) {
  return e != null && We(e) === Oc;
}, ae = function(e) {
  return e != null && We(e) === We(1) && !isNaN(e);
}, hd = function(e) {
  return ae(e) && Math.floor(e) === e;
}, Mn = function(e) {
  if (vd !== "undefined")
    return e != null && e instanceof HTMLElement;
}, Et = function(e) {
  return Ha(e) || Nc(e);
}, Ha = function(e) {
  return _a(e) === "collection" && e._private.single;
}, Nc = function(e) {
  return _a(e) === "collection" && !e._private.single;
}, go = function(e) {
  return _a(e) === "core";
}, zc = function(e) {
  return _a(e) === "stylesheet";
}, gd = function(e) {
  return _a(e) === "event";
}, or = function(e) {
  return e == null ? !0 : !!(e === "" || e.match(/^\s+$/));
}, pd = function(e) {
  return typeof HTMLElement > "u" ? !1 : e instanceof HTMLElement;
}, yd = function(e) {
  return ke(e) && ae(e.x1) && ae(e.x2) && ae(e.y1) && ae(e.y2);
}, md = function(e) {
  return dd(e) && _e(e.then);
}, bd = function() {
  return jo && jo.userAgent.match(/msie|trident|edge/i);
}, La = function(e, t) {
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
}, po = La(function(r) {
  return r.replace(/([A-Z])/g, function(e) {
    return "-" + e.toLowerCase();
  });
}), Zn = La(function(r) {
  return r.replace(/(-\w)/g, function(e) {
    return e[1].toUpperCase();
  });
}), Fc = La(function(r, e) {
  return r + e[0].toUpperCase() + e.substring(1);
}, function(r, e) {
  return r + "$" + e;
}), eu = function(e) {
  return or(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
}, Ke = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", wd = "rgb[a]?\\((" + Ke + "[%]?)\\s*,\\s*(" + Ke + "[%]?)\\s*,\\s*(" + Ke + "[%]?)(?:\\s*,\\s*(" + Ke + "))?\\)", xd = "rgb[a]?\\((?:" + Ke + "[%]?)\\s*,\\s*(?:" + Ke + "[%]?)\\s*,\\s*(?:" + Ke + "[%]?)(?:\\s*,\\s*(?:" + Ke + "))?\\)", Ed = "hsl[a]?\\((" + Ke + ")\\s*,\\s*(" + Ke + "[%])\\s*,\\s*(" + Ke + "[%])(?:\\s*,\\s*(" + Ke + "))?\\)", Cd = "hsl[a]?\\((?:" + Ke + ")\\s*,\\s*(?:" + Ke + "[%])\\s*,\\s*(?:" + Ke + "[%])(?:\\s*,\\s*(?:" + Ke + "))?\\)", Td = "\\#[0-9a-fA-F]{3}", Sd = "\\#[0-9a-fA-F]{6}", $c = function(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}, Ad = function(e, t) {
  return -1 * $c(e, t);
}, pe = Object.assign != null ? Object.assign.bind(Object) : function(r) {
  for (var e = arguments, t = 1; t < e.length; t++) {
    var a = e[t];
    if (a != null)
      for (var n = Object.keys(a), i = 0; i < n.length; i++) {
        var s = n[i];
        r[s] = a[s];
      }
  }
  return r;
}, kd = function(e) {
  if (!(!(e.length === 4 || e.length === 7) || e[0] !== "#")) {
    var t = e.length === 4, a, n, i, s = 16;
    return t ? (a = parseInt(e[1] + e[1], s), n = parseInt(e[2] + e[2], s), i = parseInt(e[3] + e[3], s)) : (a = parseInt(e[1] + e[2], s), n = parseInt(e[3] + e[4], s), i = parseInt(e[5] + e[6], s)), [a, n, i];
  }
}, Dd = function(e) {
  var t, a, n, i, s, o, u, l;
  function c(d, y, g) {
    return g < 0 && (g += 1), g > 1 && (g -= 1), g < 1 / 6 ? d + (y - d) * 6 * g : g < 1 / 2 ? y : g < 2 / 3 ? d + (y - d) * (2 / 3 - g) * 6 : d;
  }
  var f = new RegExp("^" + Ed + "$").exec(e);
  if (f) {
    if (a = parseInt(f[1]), a < 0 ? a = (360 - -1 * a % 360) % 360 : a > 360 && (a = a % 360), a /= 360, n = parseFloat(f[2]), n < 0 || n > 100 || (n = n / 100, i = parseFloat(f[3]), i < 0 || i > 100) || (i = i / 100, s = f[4], s !== void 0 && (s = parseFloat(s), s < 0 || s > 1)))
      return;
    if (n === 0)
      o = u = l = Math.round(i * 255);
    else {
      var v = i < 0.5 ? i * (1 + n) : i + n - i * n, h = 2 * i - v;
      o = Math.round(255 * c(h, v, a + 1 / 3)), u = Math.round(255 * c(h, v, a)), l = Math.round(255 * c(h, v, a - 1 / 3));
    }
    t = [o, u, l, s];
  }
  return t;
}, Pd = function(e) {
  var t, a = new RegExp("^" + wd + "$").exec(e);
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
}, Bd = function(e) {
  return Ld[e.toLowerCase()];
}, Vc = function(e) {
  return (Ie(e) ? e : null) || Bd(e) || kd(e) || Pd(e) || Dd(e);
}, Ld = {
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
}, qc = function(e) {
  for (var t = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var s = a[i];
    if (ke(s))
      throw Error("Tried to set map with object key");
    i < a.length - 1 ? (t[s] == null && (t[s] = {}), t = t[s]) : t[s] = e.value;
  }
}, _c = function(e) {
  for (var t = e.map, a = e.keys, n = a.length, i = 0; i < n; i++) {
    var s = a[i];
    if (ke(s))
      throw Error("Tried to get map with object key");
    if (t = t[s], t == null)
      return t;
  }
  return t;
}, nn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ua(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var bi, tu;
function Ga() {
  if (tu)
    return bi;
  tu = 1;
  function r(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  return bi = r, bi;
}
var wi, ru;
function Rd() {
  if (ru)
    return wi;
  ru = 1;
  var r = typeof nn == "object" && nn && nn.Object === Object && nn;
  return wi = r, wi;
}
var xi, au;
function Yn() {
  if (au)
    return xi;
  au = 1;
  var r = Rd(), e = typeof self == "object" && self && self.Object === Object && self, t = r || e || Function("return this")();
  return xi = t, xi;
}
var Ei, nu;
function Md() {
  if (nu)
    return Ei;
  nu = 1;
  var r = Yn(), e = function() {
    return r.Date.now();
  };
  return Ei = e, Ei;
}
var Ci, iu;
function Id() {
  if (iu)
    return Ci;
  iu = 1;
  var r = /\s/;
  function e(t) {
    for (var a = t.length; a-- && r.test(t.charAt(a)); )
      ;
    return a;
  }
  return Ci = e, Ci;
}
var Ti, su;
function Od() {
  if (su)
    return Ti;
  su = 1;
  var r = Id(), e = /^\s+/;
  function t(a) {
    return a && a.slice(0, r(a) + 1).replace(e, "");
  }
  return Ti = t, Ti;
}
var Si, ou;
function yo() {
  if (ou)
    return Si;
  ou = 1;
  var r = Yn(), e = r.Symbol;
  return Si = e, Si;
}
var Ai, uu;
function Nd() {
  if (uu)
    return Ai;
  uu = 1;
  var r = yo(), e = Object.prototype, t = e.hasOwnProperty, a = e.toString, n = r ? r.toStringTag : void 0;
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
  return Ai = i, Ai;
}
var ki, lu;
function zd() {
  if (lu)
    return ki;
  lu = 1;
  var r = Object.prototype, e = r.toString;
  function t(a) {
    return e.call(a);
  }
  return ki = t, ki;
}
var Di, cu;
function Hc() {
  if (cu)
    return Di;
  cu = 1;
  var r = yo(), e = Nd(), t = zd(), a = "[object Null]", n = "[object Undefined]", i = r ? r.toStringTag : void 0;
  function s(o) {
    return o == null ? o === void 0 ? n : a : i && i in Object(o) ? e(o) : t(o);
  }
  return Di = s, Di;
}
var Pi, fu;
function Fd() {
  if (fu)
    return Pi;
  fu = 1;
  function r(e) {
    return e != null && typeof e == "object";
  }
  return Pi = r, Pi;
}
var Bi, vu;
function Ka() {
  if (vu)
    return Bi;
  vu = 1;
  var r = Hc(), e = Fd(), t = "[object Symbol]";
  function a(n) {
    return typeof n == "symbol" || e(n) && r(n) == t;
  }
  return Bi = a, Bi;
}
var Li, du;
function $d() {
  if (du)
    return Li;
  du = 1;
  var r = Od(), e = Ga(), t = Ka(), a = NaN, n = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, s = /^0o[0-7]+$/i, o = parseInt;
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
    var f = i.test(l);
    return f || s.test(l) ? o(l.slice(2), f ? 2 : 8) : n.test(l) ? a : +l;
  }
  return Li = u, Li;
}
var Ri, hu;
function Vd() {
  if (hu)
    return Ri;
  hu = 1;
  var r = Ga(), e = Md(), t = $d(), a = "Expected a function", n = Math.max, i = Math.min;
  function s(o, u, l) {
    var c, f, v, h, d, y, g = 0, p = !1, m = !1, b = !0;
    if (typeof o != "function")
      throw new TypeError(a);
    u = t(u) || 0, r(l) && (p = !!l.leading, m = "maxWait" in l, v = m ? n(t(l.maxWait) || 0, u) : v, b = "trailing" in l ? !!l.trailing : b);
    function w(k) {
      var L = c, M = f;
      return c = f = void 0, g = k, h = o.apply(M, L), h;
    }
    function C(k) {
      return g = k, d = setTimeout(T, u), p ? w(k) : h;
    }
    function E(k) {
      var L = k - y, M = k - g, I = u - L;
      return m ? i(I, v - M) : I;
    }
    function x(k) {
      var L = k - y, M = k - g;
      return y === void 0 || L >= u || L < 0 || m && M >= v;
    }
    function T() {
      var k = e();
      if (x(k))
        return D(k);
      d = setTimeout(T, E(k));
    }
    function D(k) {
      return d = void 0, b && c ? w(k) : (c = f = void 0, h);
    }
    function P() {
      d !== void 0 && clearTimeout(d), g = 0, c = y = f = d = void 0;
    }
    function A() {
      return d === void 0 ? h : D(e());
    }
    function B() {
      var k = e(), L = x(k);
      if (c = arguments, f = this, y = k, L) {
        if (d === void 0)
          return C(y);
        if (m)
          return clearTimeout(d), d = setTimeout(T, u), w(y);
      }
      return d === void 0 && (d = setTimeout(T, u)), h;
    }
    return B.cancel = P, B.flush = A, B;
  }
  return Ri = s, Ri;
}
var qd = Vd(), Wa = /* @__PURE__ */ Ua(qd), Mi = Ge ? Ge.performance : null, Uc = Mi && Mi.now ? function() {
  return Mi.now();
} : function() {
  return Date.now();
}, _d = function() {
  if (Ge) {
    if (Ge.requestAnimationFrame)
      return function(r) {
        Ge.requestAnimationFrame(r);
      };
    if (Ge.mozRequestAnimationFrame)
      return function(r) {
        Ge.mozRequestAnimationFrame(r);
      };
    if (Ge.webkitRequestAnimationFrame)
      return function(r) {
        Ge.webkitRequestAnimationFrame(r);
      };
    if (Ge.msRequestAnimationFrame)
      return function(r) {
        Ge.msRequestAnimationFrame(r);
      };
  }
  return function(r) {
    r && setTimeout(function() {
      r(Uc());
    }, 1e3 / 60);
  };
}(), In = function(e) {
  return _d(e);
}, Zt = Uc, Hr = 9261, Gc = 65599, ma = 5381, Kc = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Hr, a = t, n; n = e.next(), !n.done; )
    a = a * Gc + n.value | 0;
  return a;
}, Ra = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Hr;
  return t * Gc + e | 0;
}, Ma = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ma;
  return (t << 5) + t + e | 0;
}, Hd = function(e, t) {
  return e * 2097152 + t;
}, Jt = function(e) {
  return e[0] * 2097152 + e[1];
}, sn = function(e, t) {
  return [Ra(e[0], t[0]), Ma(e[1], t[1])];
}, Ud = function(e, t) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, s = {
    next: function() {
      return n < i ? a.value = e[n++] : a.done = !0, a;
    }
  };
  return Kc(s, t);
}, ur = function(e, t) {
  var a = {
    value: 0,
    done: !1
  }, n = 0, i = e.length, s = {
    next: function() {
      return n < i ? a.value = e.charCodeAt(n++) : a.done = !0, a;
    }
  };
  return Kc(s, t);
}, Wc = function() {
  return Gd(arguments);
}, Gd = function(e) {
  for (var t, a = 0; a < e.length; a++) {
    var n = e[a];
    a === 0 ? t = ur(n) : t = ur(n, t);
  }
  return t;
}, gu = !0, Kd = console.warn != null, Wd = console.trace != null, mo = Number.MAX_SAFE_INTEGER || 9007199254740991, Zc = function() {
  return !0;
}, On = function() {
  return !1;
}, pu = function() {
  return 0;
}, bo = function() {
}, qe = function(e) {
  throw new Error(e);
}, Yc = function(e) {
  if (e !== void 0)
    gu = !!e;
  else
    return gu;
}, Re = function(e) {
  Yc() && (Kd ? console.warn(e) : (console.log(e), Wd && console.trace()));
}, Zd = function(e) {
  return pe({}, e);
}, Vt = function(e) {
  return e == null ? e : Ie(e) ? e.slice() : ke(e) ? Zd(e) : e;
}, Yd = function(e) {
  return e.slice();
}, Xc = function(e, t) {
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
}, Xd = {}, Qc = function() {
  return Xd;
}, Ze = function(e) {
  var t = Object.keys(e);
  return function(a) {
    for (var n = {}, i = 0; i < t.length; i++) {
      var s = t[i], o = a == null ? void 0 : a[s];
      n[s] = o === void 0 ? e[s] : o;
    }
    return n;
  };
}, lr = function(e, t, a) {
  for (var n = e.length - 1; n >= 0; n--)
    e[n] === t && e.splice(n, 1);
}, wo = function(e) {
  e.splice(0, e.length);
}, Qd = function(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    e.push(n);
  }
}, Bt = function(e, t, a) {
  return a && (t = Fc(a, t)), e[t];
}, rr = function(e, t, a, n) {
  a && (t = Fc(a, t)), e[t] = n;
}, Jd = /* @__PURE__ */ function() {
  function r() {
    dr(this, r), this._obj = {};
  }
  return hr(r, [{
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
}(), Wt = typeof Map < "u" ? Map : Jd, jd = "undefined", eh = /* @__PURE__ */ function() {
  function r(e) {
    if (dr(this, r), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, e != null) {
      var t;
      e.instanceString != null && e.instanceString() === this.instanceString() ? t = e.toArray() : t = e;
      for (var a = 0; a < t.length; a++)
        this.add(t[a]);
    }
  }
  return hr(r, [{
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
}(), ra = (typeof Set > "u" ? "undefined" : We(Set)) !== jd ? Set : eh, Xn = function(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (e === void 0 || t === void 0 || !go(e)) {
    qe("An element must have a core reference and parameters set");
    return;
  }
  var n = t.group;
  if (n == null && (t.data && t.data.source != null && t.data.target != null ? n = "edges" : n = "nodes"), n !== "nodes" && n !== "edges") {
    qe("An element must be of type `nodes` or `edges`; you specified `" + n + "`");
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
    classes: new ra(),
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
  Ie(t.classes) ? l = t.classes : fe(t.classes) && (l = t.classes.split(/\s+/));
  for (var c = 0, f = l.length; c < f; c++) {
    var v = l[c];
    !v || v === "" || i.classes.add(v);
  }
  this.createEmitter(), (a === void 0 || a) && this.restore();
  var h = t.style || t.css;
  h && (Re("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(h));
}, yu = function(e) {
  return e = {
    bfs: e.bfs || !e.dfs,
    dfs: e.dfs || !e.bfs
  }, function(a, n, i) {
    var s;
    ke(a) && !Et(a) && (s = a, a = s.roots || s.root, n = s.visit, i = s.directed), i = arguments.length === 2 && !_e(n) ? n : i, n = _e(n) ? n : function() {
    };
    for (var o = this._private.cy, u = a = fe(a) ? this.filter(a) : a, l = [], c = [], f = {}, v = {}, h = {}, d = 0, y, g = this.byGroup(), p = g.nodes, m = g.edges, b = 0; b < u.length; b++) {
      var w = u[b], C = w.id();
      w.isNode() && (l.unshift(w), e.bfs && (h[C] = !0, c.push(w)), v[C] = 0);
    }
    for (var E = function() {
      var k = e.bfs ? l.shift() : l.pop(), L = k.id();
      if (e.dfs) {
        if (h[L])
          return 0;
        h[L] = !0, c.push(k);
      }
      var M = v[L], I = f[L], R = I != null ? I.source() : null, O = I != null ? I.target() : null, _ = I == null ? void 0 : k.same(R) ? O[0] : R[0], U;
      if (U = n(k, I, _, d++, M), U === !0)
        return y = k, 1;
      if (U === !1)
        return 1;
      for (var z = k.connectedEdges().filter(function(X) {
        return (!i || X.source().same(k)) && m.has(X);
      }), H = 0; H < z.length; H++) {
        var G = z[H], Q = G.connectedNodes().filter(function(X) {
          return !X.same(k) && p.has(X);
        }), W = Q.id();
        Q.length !== 0 && !h[W] && (Q = Q[0], l.push(Q), e.bfs && (h[W] = !0, c.push(Q)), f[W] = G, v[W] = v[L] + 1);
      }
    }, x; l.length !== 0 && (x = E(), !(x !== 0 && x === 1)); )
      ;
    for (var T = o.collection(), D = 0; D < c.length; D++) {
      var P = c[D], A = f[P.id()];
      A != null && T.push(A), T.push(P);
    }
    return {
      path: o.collection(T),
      found: o.collection(y)
    };
  };
}, Ia = {
  breadthFirstSearch: yu({
    bfs: !0
  }),
  depthFirstSearch: yu({
    dfs: !0
  })
};
Ia.bfs = Ia.breadthFirstSearch;
Ia.dfs = Ia.depthFirstSearch;
var wn = { exports: {} }, th = wn.exports, mu;
function rh() {
  return mu || (mu = 1, function(r, e) {
    (function() {
      var t, a, n, i, s, o, u, l, c, f, v, h, d, y, g;
      n = Math.floor, f = Math.min, a = function(p, m) {
        return p < m ? -1 : p > m ? 1 : 0;
      }, c = function(p, m, b, w, C) {
        var E;
        if (b == null && (b = 0), C == null && (C = a), b < 0)
          throw new Error("lo must be non-negative");
        for (w == null && (w = p.length); b < w; )
          E = n((b + w) / 2), C(m, p[E]) < 0 ? w = E : b = E + 1;
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
        var b, w, C, E, x, T;
        for (m == null && (m = a), E = (function() {
          T = [];
          for (var D = 0, P = n(p.length / 2); 0 <= P ? D < P : D > P; 0 <= P ? D++ : D--)
            T.push(D);
          return T;
        }).apply(this).reverse(), x = [], w = 0, C = E.length; w < C; w++)
          b = E[w], x.push(g(p, b, m));
        return x;
      }, d = function(p, m, b) {
        var w;
        if (b == null && (b = a), w = p.indexOf(m), w !== -1)
          return y(p, 0, w, b), g(p, w, b);
      }, v = function(p, m, b) {
        var w, C, E, x, T;
        if (b == null && (b = a), C = p.slice(0, m), !C.length)
          return C;
        for (i(C, b), T = p.slice(m), E = 0, x = T.length; E < x; E++)
          w = T[E], u(C, w, b);
        return C.sort(b).reverse();
      }, h = function(p, m, b) {
        var w, C, E, x, T, D, P, A, B;
        if (b == null && (b = a), m * 10 <= p.length) {
          if (E = p.slice(0, m).sort(b), !E.length)
            return E;
          for (C = E[E.length - 1], P = p.slice(m), x = 0, D = P.length; x < D; x++)
            w = P[x], b(w, C) < 0 && (c(E, w, 0, null, b), E.pop(), C = E[E.length - 1]);
          return E;
        }
        for (i(p, b), B = [], T = 0, A = f(m, p.length); 0 <= A ? T < A : T > A; 0 <= A ? ++T : --T)
          B.push(s(p, b));
        return B;
      }, y = function(p, m, b, w) {
        var C, E, x;
        for (w == null && (w = a), C = p[b]; b > m; ) {
          if (x = b - 1 >> 1, E = p[x], w(C, E) < 0) {
            p[b] = E, b = x;
            continue;
          }
          break;
        }
        return p[b] = C;
      }, g = function(p, m, b) {
        var w, C, E, x, T;
        for (b == null && (b = a), C = p.length, T = m, E = p[m], w = 2 * m + 1; w < C; )
          x = w + 1, x < C && !(b(p[w], p[x]) < 0) && (w = x), p[m] = p[w], m = w, w = 2 * m + 1;
        return p[m] = E, y(p, T, m, b);
      }, t = function() {
        p.push = o, p.pop = s, p.replace = l, p.pushpop = u, p.heapify = i, p.updateItem = d, p.nlargest = v, p.nsmallest = h;
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
    }).call(th);
  }(wn)), wn.exports;
}
var Ii, bu;
function ah() {
  return bu || (bu = 1, Ii = rh()), Ii;
}
var nh = ah(), Za = /* @__PURE__ */ Ua(nh), ih = Ze({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1
}), sh = {
  dijkstra: function(e) {
    if (!ke(e)) {
      var t = arguments;
      e = {
        root: t[0],
        weight: t[1],
        directed: t[2]
      };
    }
    var a = ih(e), n = a.root, i = a.weight, s = a.directed, o = this, u = i, l = fe(n) ? this.filter(n)[0] : n[0], c = {}, f = {}, v = {}, h = this.byGroup(), d = h.nodes, y = h.edges;
    y.unmergeBy(function(M) {
      return M.isLoop();
    });
    for (var g = function(I) {
      return c[I.id()];
    }, p = function(I, R) {
      c[I.id()] = R, m.updateItem(I);
    }, m = new Za(function(M, I) {
      return g(M) - g(I);
    }), b = 0; b < d.length; b++) {
      var w = d[b];
      c[w.id()] = w.same(l) ? 0 : 1 / 0, m.push(w);
    }
    for (var C = function(I, R) {
      for (var O = (s ? I.edgesTo(R) : I.edgesWith(R)).intersect(y), _ = 1 / 0, U, z = 0; z < O.length; z++) {
        var H = O[z], G = u(H);
        (G < _ || !U) && (_ = G, U = H);
      }
      return {
        edge: U,
        dist: _
      };
    }; m.size() > 0; ) {
      var E = m.pop(), x = g(E), T = E.id();
      if (v[T] = x, x !== 1 / 0)
        for (var D = E.neighborhood().intersect(d), P = 0; P < D.length; P++) {
          var A = D[P], B = A.id(), k = C(E, A), L = x + k.dist;
          L < g(A) && (p(A, L), f[B] = {
            node: E,
            edge: k.edge
          });
        }
    }
    return {
      distanceTo: function(I) {
        var R = fe(I) ? d.filter(I)[0] : I[0];
        return v[R.id()];
      },
      pathTo: function(I) {
        var R = fe(I) ? d.filter(I)[0] : I[0], O = [], _ = R, U = _.id();
        if (R.length > 0)
          for (O.unshift(R); f[U]; ) {
            var z = f[U];
            O.unshift(z.edge), O.unshift(z.node), _ = z.node, U = _.id();
          }
        return o.spawn(O);
      }
    };
  }
}, oh = {
  // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
  // implemented from pseudocode from wikipedia
  kruskal: function(e) {
    e = e || function(b) {
      return 1;
    };
    for (var t = this.byGroup(), a = t.nodes, n = t.edges, i = a.length, s = new Array(i), o = a, u = function(w) {
      for (var C = 0; C < s.length; C++) {
        var E = s[C];
        if (E.has(w))
          return C;
      }
    }, l = 0; l < i; l++)
      s[l] = this.spawn(a[l]);
    for (var c = n.sort(function(b, w) {
      return e(b) - e(w);
    }), f = 0; f < c.length; f++) {
      var v = c[f], h = v.source()[0], d = v.target()[0], y = u(h), g = u(d), p = s[y], m = s[g];
      y !== g && (o.merge(v), p.merge(m), s.splice(g, 1));
    }
    return o;
  }
}, uh = Ze({
  root: null,
  goal: null,
  weight: function(e) {
    return 1;
  },
  heuristic: function(e) {
    return 0;
  },
  directed: !1
}), lh = {
  // Implemented from pseudocode from wikipedia
  aStar: function(e) {
    var t = this.cy(), a = uh(e), n = a.root, i = a.goal, s = a.heuristic, o = a.directed, u = a.weight;
    n = t.collection(n)[0], i = t.collection(i)[0];
    var l = n.id(), c = i.id(), f = {}, v = {}, h = {}, d = new Za(function(U, z) {
      return v[U.id()] - v[z.id()];
    }), y = new ra(), g = {}, p = {}, m = function(z, H) {
      d.push(z), y.add(H);
    }, b, w, C = function() {
      b = d.pop(), w = b.id(), y.delete(w);
    }, E = function(z) {
      return y.has(z);
    };
    m(n, l), f[l] = 0, v[l] = s(n);
    for (var x = 0; d.size() > 0; ) {
      if (C(), x++, w === c) {
        for (var T = [], D = i, P = c, A = p[P]; T.unshift(D), A != null && T.unshift(A), D = g[P], D != null; )
          P = D.id(), A = p[P];
        return {
          found: !0,
          distance: f[w],
          path: this.spawn(T),
          steps: x
        };
      }
      h[w] = !0;
      for (var B = b._private.edges, k = 0; k < B.length; k++) {
        var L = B[k];
        if (this.hasElementWithId(L.id()) && !(o && L.data("source") !== w)) {
          var M = L.source(), I = L.target(), R = M.id() !== w ? M : I, O = R.id();
          if (this.hasElementWithId(O) && !h[O]) {
            var _ = f[w] + u(L);
            if (!E(O)) {
              f[O] = _, v[O] = _ + s(R), m(R, O), g[O] = b, p[O] = L;
              continue;
            }
            _ < f[O] && (f[O] = _, v[O] = _ + s(R), g[O] = b, p[O] = L);
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
}, ch = Ze({
  weight: function(e) {
    return 1;
  },
  directed: !1
}), fh = {
  // Implemented from pseudocode from wikipedia
  floydWarshall: function(e) {
    for (var t = this.cy(), a = ch(e), n = a.weight, i = a.directed, s = n, o = this.byGroup(), u = o.nodes, l = o.edges, c = u.length, f = c * c, v = function(G) {
      return u.indexOf(G);
    }, h = function(G) {
      return u[G];
    }, d = new Array(f), y = 0; y < f; y++) {
      var g = y % c, p = (y - g) / c;
      p === g ? d[y] = 0 : d[y] = 1 / 0;
    }
    for (var m = new Array(f), b = new Array(f), w = 0; w < l.length; w++) {
      var C = l[w], E = C.source()[0], x = C.target()[0];
      if (E !== x) {
        var T = v(E), D = v(x), P = T * c + D, A = s(C);
        if (d[P] > A && (d[P] = A, m[P] = D, b[P] = C), !i) {
          var B = D * c + T;
          !i && d[B] > A && (d[B] = A, m[B] = T, b[B] = C);
        }
      }
    }
    for (var k = 0; k < c; k++)
      for (var L = 0; L < c; L++)
        for (var M = L * c + k, I = 0; I < c; I++) {
          var R = L * c + I, O = k * c + I;
          d[M] + d[O] < d[R] && (d[R] = d[M] + d[O], m[R] = m[M]);
        }
    var _ = function(G) {
      return (fe(G) ? t.filter(G) : G)[0];
    }, U = function(G) {
      return v(_(G));
    }, z = {
      distance: function(G, Q) {
        var W = U(G), X = U(Q);
        return d[W * c + X];
      },
      path: function(G, Q) {
        var W = U(G), X = U(Q), Y = h(W);
        if (W === X)
          return Y.collection();
        if (m[W * c + X] == null)
          return t.collection();
        var ee = t.collection(), V = W, N;
        for (ee.merge(Y); W !== X; )
          V = W, W = m[W * c + X], N = b[V * c + W], ee.merge(N), ee.merge(h(W));
        return ee;
      }
    };
    return z;
  }
  // floydWarshall
}, vh = Ze({
  weight: function(e) {
    return 1;
  },
  directed: !1,
  root: null
}), dh = {
  // Implemented from pseudocode from wikipedia
  bellmanFord: function(e) {
    var t = this, a = vh(e), n = a.weight, i = a.directed, s = a.root, o = n, u = this, l = this.cy(), c = this.byGroup(), f = c.edges, v = c.nodes, h = v.length, d = new Wt(), y = !1, g = [];
    s = l.collection(s)[0], f.unmergeBy(function(Be) {
      return Be.isLoop();
    });
    for (var p = f.length, m = function(oe) {
      var le = d.get(oe.id());
      return le || (le = {}, d.set(oe.id(), le)), le;
    }, b = function(oe) {
      return (fe(oe) ? l.$(oe) : oe)[0];
    }, w = function(oe) {
      return m(b(oe)).dist;
    }, C = function(oe) {
      for (var le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s, he = b(oe), me = [], ge = he; ; ) {
        if (ge == null)
          return t.spawn();
        var be = m(ge), Ce = be.edge, Se = be.pred;
        if (me.unshift(ge[0]), ge.same(le) && me.length > 0)
          break;
        Ce != null && me.unshift(Ce), ge = Se;
      }
      return u.spawn(me);
    }, E = 0; E < h; E++) {
      var x = v[E], T = m(x);
      x.same(s) ? T.dist = 0 : T.dist = 1 / 0, T.pred = null, T.edge = null;
    }
    for (var D = !1, P = function(oe, le, he, me, ge, be) {
      var Ce = me.dist + be;
      Ce < ge.dist && !he.same(me.edge) && (ge.dist = Ce, ge.pred = oe, ge.edge = he, D = !0);
    }, A = 1; A < h; A++) {
      D = !1;
      for (var B = 0; B < p; B++) {
        var k = f[B], L = k.source(), M = k.target(), I = o(k), R = m(L), O = m(M);
        P(L, M, k, R, O, I), i || P(M, L, k, O, R, I);
      }
      if (!D)
        break;
    }
    if (D)
      for (var _ = [], U = 0; U < p; U++) {
        var z = f[U], H = z.source(), G = z.target(), Q = o(z), W = m(H).dist, X = m(G).dist;
        if (W + Q < X || !i && X + Q < W)
          if (y || (Re("Graph contains a negative weight cycle for Bellman-Ford"), y = !0), e.findNegativeWeightCycles !== !1) {
            var Y = [];
            W + Q < X && Y.push(H), !i && X + Q < W && Y.push(G);
            for (var ee = Y.length, V = 0; V < ee; V++) {
              var N = Y[V], K = [N];
              K.push(m(N).edge);
              for (var j = m(N).pred; K.indexOf(j) === -1; )
                K.push(j), K.push(m(j).edge), j = m(j).pred;
              K = K.slice(K.indexOf(j));
              for (var te = K[0].id(), se = 0, de = 2; de < K.length; de += 2)
                K[de].id() < te && (te = K[de].id(), se = de);
              K = K.slice(se).concat(K.slice(0, se)), K.push(K[0]);
              var De = K.map(function(Be) {
                return Be.id();
              }).join(",");
              _.indexOf(De) === -1 && (g.push(u.spawn(K)), _.push(De));
            }
          } else
            break;
      }
    return {
      distanceTo: w,
      pathTo: C,
      hasNegativeWeightCycle: y,
      negativeWeightCycles: g
    };
  }
  // bellmanFord
}, hh = Math.sqrt(2), gh = function(e, t, a) {
  a.length === 0 && qe("Karger-Stein must be run on a connected (sub)graph");
  for (var n = a[e], i = n[1], s = n[2], o = t[i], u = t[s], l = a, c = l.length - 1; c >= 0; c--) {
    var f = l[c], v = f[1], h = f[2];
    (t[v] === o && t[h] === u || t[v] === u && t[h] === o) && l.splice(c, 1);
  }
  for (var d = 0; d < l.length; d++) {
    var y = l[d];
    y[1] === u ? (l[d] = y.slice(), l[d][1] = o) : y[2] === u && (l[d] = y.slice(), l[d][2] = o);
  }
  for (var g = 0; g < t.length; g++)
    t[g] === u && (t[g] = o);
  return l;
}, Oi = function(e, t, a, n) {
  for (; a > n; ) {
    var i = Math.floor(Math.random() * t.length);
    t = gh(i, e, t), a--;
  }
  return t;
}, ph = {
  // Computes the minimum cut of an undirected graph
  // Returns the correct answer with high probability
  kargerStein: function() {
    var e = this, t = this.byGroup(), a = t.nodes, n = t.edges;
    n.unmergeBy(function(O) {
      return O.isLoop();
    });
    var i = a.length, s = n.length, o = Math.ceil(Math.pow(Math.log(i) / Math.LN2, 2)), u = Math.floor(i / hh);
    if (i < 2) {
      qe("At least 2 nodes are required for Karger-Stein algorithm");
      return;
    }
    for (var l = [], c = 0; c < s; c++) {
      var f = n[c];
      l.push([c, a.indexOf(f.source()), a.indexOf(f.target())]);
    }
    for (var v = 1 / 0, h = [], d = new Array(i), y = new Array(i), g = new Array(i), p = function(_, U) {
      for (var z = 0; z < i; z++)
        U[z] = _[z];
    }, m = 0; m <= o; m++) {
      for (var b = 0; b < i; b++)
        y[b] = b;
      var w = Oi(y, l.slice(), i, u), C = w.slice();
      p(y, g);
      var E = Oi(y, w, u, 2), x = Oi(g, C, u, 2);
      E.length <= x.length && E.length < v ? (v = E.length, h = E, p(y, d)) : x.length <= E.length && x.length < v && (v = x.length, h = x, p(g, d));
    }
    for (var T = this.spawn(h.map(function(O) {
      return n[O[0]];
    })), D = this.spawn(), P = this.spawn(), A = d[0], B = 0; B < d.length; B++) {
      var k = d[B], L = a[B];
      k === A ? D.merge(L) : P.merge(L);
    }
    var M = function(_) {
      var U = e.spawn();
      return _.forEach(function(z) {
        U.merge(z), z.connectedEdges().forEach(function(H) {
          e.contains(H) && !T.contains(H) && U.merge(H);
        });
      }), U;
    }, I = [M(D), M(P)], R = {
      cut: T,
      components: I,
      // n.b. partitions are included to be compatible with the old api spec
      // (could be removed in a future major version)
      partition1: D,
      partition2: P
    };
    return R;
  }
}, yh = function(e) {
  return {
    x: e.x,
    y: e.y
  };
}, Qn = function(e, t, a) {
  return {
    x: e.x * t + a.x,
    y: e.y * t + a.y
  };
}, Jc = function(e, t, a) {
  return {
    x: (e.x - a.x) / t,
    y: (e.y - a.y) / t
  };
}, Ur = function(e) {
  return {
    x: e[0],
    y: e[1]
  };
}, mh = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 1 / 0, i = t; i < a; i++) {
    var s = e[i];
    isFinite(s) && (n = Math.min(s, n));
  }
  return n;
}, bh = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = -1 / 0, i = t; i < a; i++) {
    var s = e[i];
    isFinite(s) && (n = Math.max(s, n));
  }
  return n;
}, wh = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = 0, i = 0, s = t; s < a; s++) {
    var o = e[s];
    isFinite(o) && (n += o, i++);
  }
  return n / i;
}, xh = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.length, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
  n ? e = e.slice(t, a) : (a < e.length && e.splice(a, e.length - a), t > 0 && e.splice(0, t));
  for (var o = 0, u = e.length - 1; u >= 0; u--) {
    var l = e[u];
    s ? isFinite(l) || (e[u] = -1 / 0, o++) : e.splice(u, 1);
  }
  i && e.sort(function(v, h) {
    return v - h;
  });
  var c = e.length, f = Math.floor(c / 2);
  return c % 2 !== 0 ? e[f + 1 + o] : (e[f - 1 + o] + e[f + o]) / 2;
}, Eh = function(e) {
  return Math.PI * e / 180;
}, on = function(e, t) {
  return Math.atan2(t, e) - Math.PI / 2;
}, xo = Math.log2 || function(r) {
  return Math.log(r) / Math.log(2);
}, jc = function(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}, Ar = function(e, t) {
  return Math.sqrt(br(e, t));
}, br = function(e, t) {
  var a = t.x - e.x, n = t.y - e.y;
  return a * a + n * n;
}, Ch = function(e) {
  for (var t = e.length, a = 0, n = 0; n < t; n++)
    a += e[n];
  for (var i = 0; i < t; i++)
    e[i] = e[i] / a;
  return e;
}, je = function(e, t, a, n) {
  return (1 - n) * (1 - n) * e + 2 * (1 - n) * n * t + n * n * a;
}, Wr = function(e, t, a, n) {
  return {
    x: je(e.x, t.x, a.x, n),
    y: je(e.y, t.y, a.y, n)
  };
}, Th = function(e, t, a, n) {
  var i = {
    x: t.x - e.x,
    y: t.y - e.y
  }, s = Ar(e, t), o = {
    x: i.x / s,
    y: i.y / s
  };
  return a = a ?? 0, n = n ?? a * s, {
    x: e.x + o.x * n,
    y: e.y + o.y * n
  };
}, Oa = function(e, t, a) {
  return Math.max(e, Math.min(a, t));
}, bt = function(e) {
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
}, Sh = function(e) {
  return {
    x1: e.x1,
    x2: e.x2,
    w: e.w,
    y1: e.y1,
    y2: e.y2,
    h: e.h
  };
}, Ah = function(e) {
  e.x1 = 1 / 0, e.y1 = 1 / 0, e.x2 = -1 / 0, e.y2 = -1 / 0, e.w = 0, e.h = 0;
}, kh = function(e, t, a) {
  return {
    x1: e.x1 + t,
    x2: e.x2 + t,
    y1: e.y1 + a,
    y2: e.y2 + a,
    w: e.w,
    h: e.h
  };
}, ef = function(e, t) {
  e.x1 = Math.min(e.x1, t.x1), e.x2 = Math.max(e.x2, t.x2), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, t.y1), e.y2 = Math.max(e.y2, t.y2), e.h = e.y2 - e.y1;
}, Dh = function(e, t, a) {
  e.x1 = Math.min(e.x1, t), e.x2 = Math.max(e.x2, t), e.w = e.x2 - e.x1, e.y1 = Math.min(e.y1, a), e.y2 = Math.max(e.y2, a), e.h = e.y2 - e.y1;
}, xn = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return e.x1 -= t, e.x2 += t, e.y1 -= t, e.y2 += t, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, En = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [0], a, n, i, s;
  if (t.length === 1)
    a = n = i = s = t[0];
  else if (t.length === 2)
    a = i = t[0], s = n = t[1];
  else if (t.length === 4) {
    var o = et(t, 4);
    a = o[0], n = o[1], i = o[2], s = o[3];
  }
  return e.x1 -= s, e.x2 += n, e.y1 -= a, e.y2 += i, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1, e;
}, wu = function(e, t) {
  e.x1 = t.x1, e.y1 = t.y1, e.x2 = t.x2, e.y2 = t.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1;
}, Eo = function(e, t) {
  return !(e.x1 > t.x2 || t.x1 > e.x2 || e.x2 < t.x1 || t.x2 < e.x1 || e.y2 < t.y1 || t.y2 < e.y1 || e.y1 > t.y2 || t.y1 > e.y2);
}, jr = function(e, t, a) {
  return e.x1 <= t && t <= e.x2 && e.y1 <= a && a <= e.y2;
}, Ph = function(e, t) {
  return jr(e, t.x, t.y);
}, tf = function(e, t) {
  return jr(e, t.x1, t.y1) && jr(e, t.x2, t.y2);
}, rf = function(e, t, a, n, i, s, o) {
  var u = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "auto", l = u === "auto" ? kr(i, s) : u, c = i / 2, f = s / 2;
  l = Math.min(l, c, f);
  var v = l !== c, h = l !== f, d;
  if (v) {
    var y = a - c + l - o, g = n - f - o, p = a + c - l + o, m = g;
    if (d = ar(e, t, a, n, y, g, p, m, !1), d.length > 0)
      return d;
  }
  if (h) {
    var b = a + c + o, w = n - f + l - o, C = b, E = n + f - l + o;
    if (d = ar(e, t, a, n, b, w, C, E, !1), d.length > 0)
      return d;
  }
  if (v) {
    var x = a - c + l - o, T = n + f + o, D = a + c - l + o, P = T;
    if (d = ar(e, t, a, n, x, T, D, P, !1), d.length > 0)
      return d;
  }
  if (h) {
    var A = a - c - o, B = n - f + l - o, k = A, L = n + f - l + o;
    if (d = ar(e, t, a, n, A, B, k, L, !1), d.length > 0)
      return d;
  }
  var M;
  {
    var I = a - c + l, R = n - f + l;
    if (M = ba(e, t, a, n, I, R, l + o), M.length > 0 && M[0] <= I && M[1] <= R)
      return [M[0], M[1]];
  }
  {
    var O = a + c - l, _ = n - f + l;
    if (M = ba(e, t, a, n, O, _, l + o), M.length > 0 && M[0] >= O && M[1] <= _)
      return [M[0], M[1]];
  }
  {
    var U = a + c - l, z = n + f - l;
    if (M = ba(e, t, a, n, U, z, l + o), M.length > 0 && M[0] >= U && M[1] >= z)
      return [M[0], M[1]];
  }
  {
    var H = a - c + l, G = n + f - l;
    if (M = ba(e, t, a, n, H, G, l + o), M.length > 0 && M[0] <= H && M[1] >= G)
      return [M[0], M[1]];
  }
  return [];
}, Bh = function(e, t, a, n, i, s, o) {
  var u = o, l = Math.min(a, i), c = Math.max(a, i), f = Math.min(n, s), v = Math.max(n, s);
  return l - u <= e && e <= c + u && f - u <= t && t <= v + u;
}, Lh = function(e, t, a, n, i, s, o, u, l) {
  var c = {
    x1: Math.min(a, o, i) - l,
    x2: Math.max(a, o, i) + l,
    y1: Math.min(n, u, s) - l,
    y2: Math.max(n, u, s) + l
  };
  return !(e < c.x1 || e > c.x2 || t < c.y1 || t > c.y2);
}, Rh = function(e, t, a, n) {
  a -= n;
  var i = t * t - 4 * e * a;
  if (i < 0)
    return [];
  var s = Math.sqrt(i), o = 2 * e, u = (-t + s) / o, l = (-t - s) / o;
  return [u, l];
}, Mh = function(e, t, a, n, i) {
  var s = 1e-5;
  e === 0 && (e = s), t /= e, a /= e, n /= e;
  var o, u, l, c, f, v, h, d;
  if (u = (3 * a - t * t) / 9, l = -(27 * n) + t * (9 * a - 2 * (t * t)), l /= 54, o = u * u * u + l * l, i[1] = 0, h = t / 3, o > 0) {
    f = l + Math.sqrt(o), f = f < 0 ? -Math.pow(-f, 1 / 3) : Math.pow(f, 1 / 3), v = l - Math.sqrt(o), v = v < 0 ? -Math.pow(-v, 1 / 3) : Math.pow(v, 1 / 3), i[0] = -h + f + v, h += (f + v) / 2, i[4] = i[2] = -h, h = Math.sqrt(3) * (-v + f) / 2, i[3] = h, i[5] = -h;
    return;
  }
  if (i[5] = i[3] = 0, o === 0) {
    d = l < 0 ? -Math.pow(-l, 1 / 3) : Math.pow(l, 1 / 3), i[0] = -h + 2 * d, i[4] = i[2] = -(d + h);
    return;
  }
  u = -u, c = u * u * u, c = Math.acos(l / Math.sqrt(c)), d = 2 * Math.sqrt(u), i[0] = -h + d * Math.cos(c / 3), i[2] = -h + d * Math.cos((c + 2 * Math.PI) / 3), i[4] = -h + d * Math.cos((c + 4 * Math.PI) / 3);
}, Ih = function(e, t, a, n, i, s, o, u) {
  var l = 1 * a * a - 4 * a * i + 2 * a * o + 4 * i * i - 4 * i * o + o * o + n * n - 4 * n * s + 2 * n * u + 4 * s * s - 4 * s * u + u * u, c = 1 * 9 * a * i - 3 * a * a - 3 * a * o - 6 * i * i + 3 * i * o + 9 * n * s - 3 * n * n - 3 * n * u - 6 * s * s + 3 * s * u, f = 1 * 3 * a * a - 6 * a * i + a * o - a * e + 2 * i * i + 2 * i * e - o * e + 3 * n * n - 6 * n * s + n * u - n * t + 2 * s * s + 2 * s * t - u * t, v = 1 * a * i - a * a + a * e - i * e + n * s - n * n + n * t - s * t, h = [];
  Mh(l, c, f, v, h);
  for (var d = 1e-7, y = [], g = 0; g < 6; g += 2)
    Math.abs(h[g + 1]) < d && h[g] >= 0 && h[g] <= 1 && y.push(h[g]);
  y.push(1), y.push(0);
  for (var p = -1, m, b, w, C = 0; C < y.length; C++)
    m = Math.pow(1 - y[C], 2) * a + 2 * (1 - y[C]) * y[C] * i + y[C] * y[C] * o, b = Math.pow(1 - y[C], 2) * n + 2 * (1 - y[C]) * y[C] * s + y[C] * y[C] * u, w = Math.pow(m - e, 2) + Math.pow(b - t, 2), p >= 0 ? w < p && (p = w) : p = w;
  return p;
}, Oh = function(e, t, a, n, i, s) {
  var o = [e - a, t - n], u = [i - a, s - n], l = u[0] * u[0] + u[1] * u[1], c = o[0] * o[0] + o[1] * o[1], f = o[0] * u[0] + o[1] * u[1], v = f * f / l;
  return f < 0 ? c : v > l ? (e - i) * (e - i) + (t - s) * (t - s) : c - v;
}, mt = function(e, t, a) {
  for (var n, i, s, o, u, l = 0, c = 0; c < a.length / 2; c++)
    if (n = a[c * 2], i = a[c * 2 + 1], c + 1 < a.length / 2 ? (s = a[(c + 1) * 2], o = a[(c + 1) * 2 + 1]) : (s = a[(c + 1 - a.length / 2) * 2], o = a[(c + 1 - a.length / 2) * 2 + 1]), !(n == e && s == e))
      if (n >= e && e >= s || n <= e && e <= s)
        u = (e - n) / (s - n) * (o - i) + i, u > t && l++;
      else
        continue;
  return l % 2 !== 0;
}, Yt = function(e, t, a, n, i, s, o, u, l) {
  var c = new Array(a.length), f;
  u[0] != null ? (f = Math.atan(u[1] / u[0]), u[0] < 0 ? f = f + Math.PI / 2 : f = -f - Math.PI / 2) : f = u;
  for (var v = Math.cos(-f), h = Math.sin(-f), d = 0; d < c.length / 2; d++)
    c[d * 2] = s / 2 * (a[d * 2] * v - a[d * 2 + 1] * h), c[d * 2 + 1] = o / 2 * (a[d * 2 + 1] * v + a[d * 2] * h), c[d * 2] += n, c[d * 2 + 1] += i;
  var y;
  if (l > 0) {
    var g = zn(c, -l);
    y = Nn(g);
  } else
    y = c;
  return mt(e, t, y);
}, Nh = function(e, t, a, n, i, s, o, u) {
  for (var l = new Array(a.length * 2), c = 0; c < u.length; c++) {
    var f = u[c];
    l[c * 4 + 0] = f.startX, l[c * 4 + 1] = f.startY, l[c * 4 + 2] = f.stopX, l[c * 4 + 3] = f.stopY;
    var v = Math.pow(f.cx - e, 2) + Math.pow(f.cy - t, 2);
    if (v <= Math.pow(f.radius, 2))
      return !0;
  }
  return mt(e, t, l);
}, Nn = function(e) {
  for (var t = new Array(e.length / 2), a, n, i, s, o, u, l, c, f = 0; f < e.length / 4; f++) {
    a = e[f * 4], n = e[f * 4 + 1], i = e[f * 4 + 2], s = e[f * 4 + 3], f < e.length / 4 - 1 ? (o = e[(f + 1) * 4], u = e[(f + 1) * 4 + 1], l = e[(f + 1) * 4 + 2], c = e[(f + 1) * 4 + 3]) : (o = e[0], u = e[1], l = e[2], c = e[3]);
    var v = ar(a, n, i, s, o, u, l, c, !0);
    t[f * 2] = v[0], t[f * 2 + 1] = v[1];
  }
  return t;
}, zn = function(e, t) {
  for (var a = new Array(e.length * 2), n, i, s, o, u = 0; u < e.length / 2; u++) {
    n = e[u * 2], i = e[u * 2 + 1], u < e.length / 2 - 1 ? (s = e[(u + 1) * 2], o = e[(u + 1) * 2 + 1]) : (s = e[0], o = e[1]);
    var l = o - i, c = -(s - n), f = Math.sqrt(l * l + c * c), v = l / f, h = c / f;
    a[u * 4] = n + v * t, a[u * 4 + 1] = i + h * t, a[u * 4 + 2] = s + v * t, a[u * 4 + 3] = o + h * t;
  }
  return a;
}, zh = function(e, t, a, n, i, s) {
  var o = a - e, u = n - t;
  o /= i, u /= s;
  var l = Math.sqrt(o * o + u * u), c = l - 1;
  if (c < 0)
    return [];
  var f = c / l;
  return [(a - e) * f + e, (n - t) * f + t];
}, Tr = function(e, t, a, n, i, s, o) {
  return e -= i, t -= s, e /= a / 2 + o, t /= n / 2 + o, e * e + t * t <= 1;
}, ba = function(e, t, a, n, i, s, o) {
  var u = [a - e, n - t], l = [e - i, t - s], c = u[0] * u[0] + u[1] * u[1], f = 2 * (l[0] * u[0] + l[1] * u[1]), v = l[0] * l[0] + l[1] * l[1] - o * o, h = f * f - 4 * c * v;
  if (h < 0)
    return [];
  var d = (-f + Math.sqrt(h)) / (2 * c), y = (-f - Math.sqrt(h)) / (2 * c), g = Math.min(d, y), p = Math.max(d, y), m = [];
  if (g >= 0 && g <= 1 && m.push(g), p >= 0 && p <= 1 && m.push(p), m.length === 0)
    return [];
  var b = m[0] * u[0] + e, w = m[0] * u[1] + t;
  if (m.length > 1) {
    if (m[0] == m[1])
      return [b, w];
    var C = m[1] * u[0] + e, E = m[1] * u[1] + t;
    return [b, w, C, E];
  } else
    return [b, w];
}, Ni = function(e, t, a) {
  return t <= e && e <= a || a <= e && e <= t ? e : e <= t && t <= a || a <= t && t <= e ? t : a;
}, ar = function(e, t, a, n, i, s, o, u, l) {
  var c = e - i, f = a - e, v = o - i, h = t - s, d = n - t, y = u - s, g = v * h - y * c, p = f * h - d * c, m = y * f - v * d;
  if (m !== 0) {
    var b = g / m, w = p / m, C = 1e-3, E = 0 - C, x = 1 + C;
    return E <= b && b <= x && E <= w && w <= x ? [e + b * f, t + b * d] : l ? [e + b * f, t + b * d] : [];
  } else
    return g === 0 || p === 0 ? Ni(e, a, o) === o ? [o, u] : Ni(e, a, i) === i ? [i, s] : Ni(i, o, a) === a ? [a, n] : [] : [];
}, Na = function(e, t, a, n, i, s, o, u) {
  var l = [], c, f = new Array(a.length), v = !0;
  s == null && (v = !1);
  var h;
  if (v) {
    for (var d = 0; d < f.length / 2; d++)
      f[d * 2] = a[d * 2] * s + n, f[d * 2 + 1] = a[d * 2 + 1] * o + i;
    if (u > 0) {
      var y = zn(f, -u);
      h = Nn(y);
    } else
      h = f;
  } else
    h = a;
  for (var g, p, m, b, w = 0; w < h.length / 2; w++)
    g = h[w * 2], p = h[w * 2 + 1], w < h.length / 2 - 1 ? (m = h[(w + 1) * 2], b = h[(w + 1) * 2 + 1]) : (m = h[0], b = h[1]), c = ar(e, t, n, i, g, p, m, b), c.length !== 0 && l.push(c[0], c[1]);
  return l;
}, Fh = function(e, t, a, n, i, s, o, u, l) {
  var c = [], f, v = new Array(a.length * 2);
  l.forEach(function(m, b) {
    b === 0 ? (v[v.length - 2] = m.startX, v[v.length - 1] = m.startY) : (v[b * 4 - 2] = m.startX, v[b * 4 - 1] = m.startY), v[b * 4] = m.stopX, v[b * 4 + 1] = m.stopY, f = ba(e, t, n, i, m.cx, m.cy, m.radius), f.length !== 0 && c.push(f[0], f[1]);
  });
  for (var h = 0; h < v.length / 4; h++)
    f = ar(e, t, n, i, v[h * 4], v[h * 4 + 1], v[h * 4 + 2], v[h * 4 + 3], !1), f.length !== 0 && c.push(f[0], f[1]);
  if (c.length > 2) {
    for (var d = [c[0], c[1]], y = Math.pow(d[0] - e, 2) + Math.pow(d[1] - t, 2), g = 1; g < c.length / 2; g++) {
      var p = Math.pow(c[g * 2] - e, 2) + Math.pow(c[g * 2 + 1] - t, 2);
      p <= y && (d[0] = c[g * 2], d[1] = c[g * 2 + 1], y = p);
    }
    return d;
  }
  return c;
}, un = function(e, t, a) {
  var n = [e[0] - t[0], e[1] - t[1]], i = Math.sqrt(n[0] * n[0] + n[1] * n[1]), s = (i - a) / i;
  return s < 0 && (s = 1e-5), [t[0] + s * n[0], t[1] + s * n[1]];
}, gt = function(e, t) {
  var a = Gs(e, t);
  return a = af(a), a;
}, af = function(e) {
  for (var t, a, n = e.length / 2, i = 1 / 0, s = 1 / 0, o = -1 / 0, u = -1 / 0, l = 0; l < n; l++)
    t = e[2 * l], a = e[2 * l + 1], i = Math.min(i, t), o = Math.max(o, t), s = Math.min(s, a), u = Math.max(u, a);
  for (var c = 2 / (o - i), f = 2 / (u - s), v = 0; v < n; v++)
    t = e[2 * v] = e[2 * v] * c, a = e[2 * v + 1] = e[2 * v + 1] * f, i = Math.min(i, t), o = Math.max(o, t), s = Math.min(s, a), u = Math.max(u, a);
  if (s < -1)
    for (var h = 0; h < n; h++)
      a = e[2 * h + 1] = e[2 * h + 1] + (-1 - s);
  return e;
}, Gs = function(e, t) {
  var a = 1 / e * 2 * Math.PI, n = e % 2 === 0 ? Math.PI / 2 + a / 2 : Math.PI / 2;
  n += t;
  for (var i = new Array(e * 2), s, o = 0; o < e; o++)
    s = o * a + n, i[2 * o] = Math.cos(s), i[2 * o + 1] = Math.sin(-s);
  return i;
}, kr = function(e, t) {
  return Math.min(e / 4, t / 4, 8);
}, nf = function(e, t) {
  return Math.min(e / 10, t / 10, 8);
}, Co = function() {
  return 8;
}, $h = function(e, t, a) {
  return [e - 2 * t + a, 2 * (t - e), e];
}, Ks = function(e, t) {
  return {
    heightOffset: Math.min(15, 0.05 * t),
    widthOffset: Math.min(100, 0.25 * e),
    ctrlPtOffsetPct: 0.05
  };
}, Vh = Ze({
  dampingFactor: 0.8,
  precision: 1e-6,
  iterations: 200,
  weight: function(e) {
    return 1;
  }
}), qh = {
  pageRank: function(e) {
    for (var t = Vh(e), a = t.dampingFactor, n = t.precision, i = t.iterations, s = t.weight, o = this._private.cy, u = this.byGroup(), l = u.nodes, c = u.edges, f = l.length, v = f * f, h = c.length, d = new Array(v), y = new Array(f), g = (1 - a) / f, p = 0; p < f; p++) {
      for (var m = 0; m < f; m++) {
        var b = p * f + m;
        d[b] = 0;
      }
      y[p] = 0;
    }
    for (var w = 0; w < h; w++) {
      var C = c[w], E = C.data("source"), x = C.data("target");
      if (E !== x) {
        var T = l.indexOfId(E), D = l.indexOfId(x), P = s(C), A = D * f + T;
        d[A] += P, y[T] += P;
      }
    }
    for (var B = 1 / f + g, k = 0; k < f; k++)
      if (y[k] === 0)
        for (var L = 0; L < f; L++) {
          var M = L * f + k;
          d[M] = B;
        }
      else
        for (var I = 0; I < f; I++) {
          var R = I * f + k;
          d[R] = d[R] / y[k] + g;
        }
    for (var O = new Array(f), _ = new Array(f), U, z = 0; z < f; z++)
      O[z] = 1;
    for (var H = 0; H < i; H++) {
      for (var G = 0; G < f; G++)
        _[G] = 0;
      for (var Q = 0; Q < f; Q++)
        for (var W = 0; W < f; W++) {
          var X = Q * f + W;
          _[Q] += d[X] * O[W];
        }
      Ch(_), U = O, O = _, _ = U;
      for (var Y = 0, ee = 0; ee < f; ee++) {
        var V = U[ee] - O[ee];
        Y += V * V;
      }
      if (Y < n)
        break;
    }
    var N = {
      rank: function(j) {
        return j = o.collection(j)[0], O[l.indexOf(j)];
      }
    };
    return N;
  }
  // pageRank
}, xu = Ze({
  root: null,
  weight: function(e) {
    return 1;
  },
  directed: !1,
  alpha: 0
}), Zr = {
  degreeCentralityNormalized: function(e) {
    e = xu(e);
    var t = this.cy(), a = this.nodes(), n = a.length;
    if (e.directed) {
      for (var c = {}, f = {}, v = 0, h = 0, d = 0; d < n; d++) {
        var y = a[d], g = y.id();
        e.root = y;
        var p = this.degreeCentrality(e);
        v < p.indegree && (v = p.indegree), h < p.outdegree && (h = p.outdegree), c[g] = p.indegree, f[g] = p.outdegree;
      }
      return {
        indegree: function(b) {
          return v == 0 ? 0 : (fe(b) && (b = t.filter(b)), c[b.id()] / v);
        },
        outdegree: function(b) {
          return h === 0 ? 0 : (fe(b) && (b = t.filter(b)), f[b.id()] / h);
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
          return s === 0 ? 0 : (fe(b) && (b = t.filter(b)), i[b.id()] / s);
        }
      };
    }
  },
  // degreeCentralityNormalized
  // Implemented from the algorithm in Opsahl's paper
  // "Node centrality in weighted networks: Generalizing degree and shortest paths"
  // check the heading 2 "Degree"
  degreeCentrality: function(e) {
    e = xu(e);
    var t = this.cy(), a = this, n = e, i = n.root, s = n.weight, o = n.directed, u = n.alpha;
    if (i = t.collection(i)[0], o) {
      for (var h = i.connectedEdges(), d = h.filter(function(E) {
        return E.target().same(i) && a.has(E);
      }), y = h.filter(function(E) {
        return E.source().same(i) && a.has(E);
      }), g = d.length, p = y.length, m = 0, b = 0, w = 0; w < d.length; w++)
        m += s(d[w]);
      for (var C = 0; C < y.length; C++)
        b += s(y[C]);
      return {
        indegree: Math.pow(g, 1 - u) * Math.pow(m, u),
        outdegree: Math.pow(p, 1 - u) * Math.pow(b, u)
      };
    } else {
      for (var l = i.connectedEdges().intersection(a), c = l.length, f = 0, v = 0; v < l.length; v++)
        f += s(l[v]);
      return {
        degree: Math.pow(c, 1 - u) * Math.pow(f, u)
      };
    }
  }
  // degreeCentrality
};
Zr.dc = Zr.degreeCentrality;
Zr.dcn = Zr.degreeCentralityNormalised = Zr.degreeCentralityNormalized;
var Eu = Ze({
  harmonic: !0,
  weight: function() {
    return 1;
  },
  directed: !1,
  root: null
}), Yr = {
  closenessCentralityNormalized: function(e) {
    for (var t = Eu(e), a = t.harmonic, n = t.weight, i = t.directed, s = this.cy(), o = {}, u = 0, l = this.nodes(), c = this.floydWarshall({
      weight: n,
      directed: i
    }), f = 0; f < l.length; f++) {
      for (var v = 0, h = l[f], d = 0; d < l.length; d++)
        if (f !== d) {
          var y = c.distance(h, l[d]);
          a ? v += 1 / y : v += y;
        }
      a || (v = 1 / v), u < v && (u = v), o[h.id()] = v;
    }
    return {
      closeness: function(p) {
        return u == 0 ? 0 : (fe(p) ? p = s.filter(p)[0].id() : p = p.id(), o[p] / u);
      }
    };
  },
  // Implemented from pseudocode from wikipedia
  closenessCentrality: function(e) {
    var t = Eu(e), a = t.root, n = t.weight, i = t.directed, s = t.harmonic;
    a = this.filter(a)[0];
    for (var o = this.dijkstra({
      root: a,
      weight: n,
      directed: i
    }), u = 0, l = this.nodes(), c = 0; c < l.length; c++) {
      var f = l[c];
      if (!f.same(a)) {
        var v = o.distanceTo(f);
        s ? u += 1 / v : u += v;
      }
    }
    return s ? u : 1 / u;
  }
  // closenessCentrality
};
Yr.cc = Yr.closenessCentrality;
Yr.ccn = Yr.closenessCentralityNormalised = Yr.closenessCentralityNormalized;
var _h = Ze({
  weight: null,
  directed: !1
}), Ws = {
  // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
  betweennessCentrality: function(e) {
    for (var t = _h(e), a = t.directed, n = t.weight, i = n != null, s = this.cy(), o = this.nodes(), u = {}, l = {}, c = 0, f = {
      set: function(b, w) {
        l[b] = w, w > c && (c = w);
      },
      get: function(b) {
        return l[b];
      }
    }, v = 0; v < o.length; v++) {
      var h = o[v], d = h.id();
      a ? u[d] = h.outgoers().nodes() : u[d] = h.openNeighborhood().nodes(), f.set(d, 0);
    }
    for (var y = function() {
      for (var b = o[g].id(), w = [], C = {}, E = {}, x = {}, T = new Za(function(Q, W) {
        return x[Q] - x[W];
      }), D = 0; D < o.length; D++) {
        var P = o[D].id();
        C[P] = [], E[P] = 0, x[P] = 1 / 0;
      }
      for (E[b] = 1, x[b] = 0, T.push(b); !T.empty(); ) {
        var A = T.pop();
        if (w.push(A), i)
          for (var B = 0; B < u[A].length; B++) {
            var k = u[A][B], L = s.getElementById(A), M = void 0;
            L.edgesTo(k).length > 0 ? M = L.edgesTo(k)[0] : M = k.edgesTo(L)[0];
            var I = n(M);
            k = k.id(), x[k] > x[A] + I && (x[k] = x[A] + I, T.nodes.indexOf(k) < 0 ? T.push(k) : T.updateItem(k), E[k] = 0, C[k] = []), x[k] == x[A] + I && (E[k] = E[k] + E[A], C[k].push(A));
          }
        else
          for (var R = 0; R < u[A].length; R++) {
            var O = u[A][R].id();
            x[O] == 1 / 0 && (T.push(O), x[O] = x[A] + 1), x[O] == x[A] + 1 && (E[O] = E[O] + E[A], C[O].push(A));
          }
      }
      for (var _ = {}, U = 0; U < o.length; U++)
        _[o[U].id()] = 0;
      for (; w.length > 0; ) {
        for (var z = w.pop(), H = 0; H < C[z].length; H++) {
          var G = C[z][H];
          _[G] = _[G] + E[G] / E[z] * (1 + _[z]);
        }
        z != o[g].id() && f.set(z, f.get(z) + _[z]);
      }
    }, g = 0; g < o.length; g++)
      y();
    var p = {
      betweenness: function(b) {
        var w = s.collection(b).id();
        return f.get(w);
      },
      betweennessNormalized: function(b) {
        if (c == 0)
          return 0;
        var w = s.collection(b).id();
        return f.get(w) / c;
      }
    };
    return p.betweennessNormalised = p.betweennessNormalized, p;
  }
  // betweennessCentrality
};
Ws.bc = Ws.betweennessCentrality;
var Hh = Ze({
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
}), Uh = function(e) {
  return Hh(e);
}, Gh = function(e, t) {
  for (var a = 0, n = 0; n < t.length; n++)
    a += t[n](e);
  return a;
}, Kh = function(e, t, a) {
  for (var n = 0; n < t; n++)
    e[n * t + n] = a;
}, sf = function(e, t) {
  for (var a, n = 0; n < t; n++) {
    a = 0;
    for (var i = 0; i < t; i++)
      a += e[i * t + n];
    for (var s = 0; s < t; s++)
      e[s * t + n] = e[s * t + n] / a;
  }
}, Wh = function(e, t, a) {
  for (var n = new Array(a * a), i = 0; i < a; i++) {
    for (var s = 0; s < a; s++)
      n[i * a + s] = 0;
    for (var o = 0; o < a; o++)
      for (var u = 0; u < a; u++)
        n[i * a + u] += e[i * a + o] * t[o * a + u];
  }
  return n;
}, Zh = function(e, t, a) {
  for (var n = e.slice(0), i = 1; i < a; i++)
    e = Wh(e, n, t);
  return e;
}, Yh = function(e, t, a) {
  for (var n = new Array(t * t), i = 0; i < t * t; i++)
    n[i] = Math.pow(e[i], a);
  return sf(n, t), n;
}, Xh = function(e, t, a, n) {
  for (var i = 0; i < a; i++) {
    var s = Math.round(e[i] * Math.pow(10, n)) / Math.pow(10, n), o = Math.round(t[i] * Math.pow(10, n)) / Math.pow(10, n);
    if (s !== o)
      return !1;
  }
  return !0;
}, Qh = function(e, t, a, n) {
  for (var i = [], s = 0; s < t; s++) {
    for (var o = [], u = 0; u < t; u++)
      Math.round(e[s * t + u] * 1e3) / 1e3 > 0 && o.push(a[u]);
    o.length !== 0 && i.push(n.collection(o));
  }
  return i;
}, Jh = function(e, t) {
  for (var a = 0; a < e.length; a++)
    if (!t[a] || e[a].id() !== t[a].id())
      return !1;
  return !0;
}, jh = function(e) {
  for (var t = 0; t < e.length; t++)
    for (var a = 0; a < e.length; a++)
      t != a && Jh(e[t], e[a]) && e.splice(a, 1);
  return e;
}, Cu = function(e) {
  for (var t = this.nodes(), a = this.edges(), n = this.cy(), i = Uh(e), s = {}, o = 0; o < t.length; o++)
    s[t[o].id()] = o;
  for (var u = t.length, l = u * u, c = new Array(l), f, v = 0; v < l; v++)
    c[v] = 0;
  for (var h = 0; h < a.length; h++) {
    var d = a[h], y = s[d.source().id()], g = s[d.target().id()], p = Gh(d, i.attributes);
    c[y * u + g] += p, c[g * u + y] += p;
  }
  Kh(c, u, i.multFactor), sf(c, u);
  for (var m = !0, b = 0; m && b < i.maxIterations; )
    m = !1, f = Zh(c, u, i.expandFactor), c = Yh(f, u, i.inflateFactor), Xh(c, f, l, 4) || (m = !0), b++;
  var w = Qh(c, u, t, n);
  return w = jh(w), w;
}, eg = {
  markovClustering: Cu,
  mcl: Cu
}, tg = function(e) {
  return e;
}, of = function(e, t) {
  return Math.abs(t - e);
}, Tu = function(e, t, a) {
  return e + of(t, a);
}, Su = function(e, t, a) {
  return e + Math.pow(a - t, 2);
}, rg = function(e) {
  return Math.sqrt(e);
}, ag = function(e, t, a) {
  return Math.max(e, of(t, a));
}, va = function(e, t, a, n, i) {
  for (var s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : tg, o = n, u, l, c = 0; c < e; c++)
    u = t(c), l = a(c), o = i(o, u, l);
  return s(o);
}, ea = {
  euclidean: function(e, t, a) {
    return e >= 2 ? va(e, t, a, 0, Su, rg) : va(e, t, a, 0, Tu);
  },
  squaredEuclidean: function(e, t, a) {
    return va(e, t, a, 0, Su);
  },
  manhattan: function(e, t, a) {
    return va(e, t, a, 0, Tu);
  },
  max: function(e, t, a) {
    return va(e, t, a, -1 / 0, ag);
  }
};
ea["squared-euclidean"] = ea.squaredEuclidean;
ea.squaredeuclidean = ea.squaredEuclidean;
function Jn(r, e, t, a, n, i) {
  var s;
  return _e(r) ? s = r : s = ea[r] || ea.euclidean, e === 0 && _e(r) ? s(n, i) : s(e, t, a, n, i);
}
var ng = Ze({
  k: 2,
  m: 2,
  sensitivityThreshold: 1e-4,
  distance: "euclidean",
  maxIterations: 10,
  attributes: [],
  testMode: !1,
  testCentroids: null
}), To = function(e) {
  return ng(e);
}, Fn = function(e, t, a, n, i) {
  var s = i !== "kMedoids", o = s ? function(f) {
    return a[f];
  } : function(f) {
    return n[f](a);
  }, u = function(v) {
    return n[v](t);
  }, l = a, c = t;
  return Jn(e, n.length, o, u, l, c);
}, zi = function(e, t, a) {
  for (var n = a.length, i = new Array(n), s = new Array(n), o = new Array(t), u = null, l = 0; l < n; l++)
    i[l] = e.min(a[l]).value, s[l] = e.max(a[l]).value;
  for (var c = 0; c < t; c++) {
    u = [];
    for (var f = 0; f < n; f++)
      u[f] = Math.random() * (s[f] - i[f]) + i[f];
    o[c] = u;
  }
  return o;
}, uf = function(e, t, a, n, i) {
  for (var s = 1 / 0, o = 0, u = 0; u < t.length; u++) {
    var l = Fn(a, e, t[u], n, i);
    l < s && (s = l, o = u);
  }
  return o;
}, lf = function(e, t, a) {
  for (var n = [], i = null, s = 0; s < t.length; s++)
    i = t[s], a[i.id()] === e && n.push(i);
  return n;
}, ig = function(e, t, a) {
  return Math.abs(t - e) <= a;
}, sg = function(e, t, a) {
  for (var n = 0; n < e.length; n++)
    for (var i = 0; i < e[n].length; i++) {
      var s = Math.abs(e[n][i] - t[n][i]);
      if (s > a)
        return !1;
    }
  return !0;
}, og = function(e, t, a) {
  for (var n = 0; n < a; n++)
    if (e === t[n])
      return !0;
  return !1;
}, Au = function(e, t) {
  var a = new Array(t);
  if (e.length < 50)
    for (var n = 0; n < t; n++) {
      for (var i = e[Math.floor(Math.random() * e.length)]; og(i, a, n); )
        i = e[Math.floor(Math.random() * e.length)];
      a[n] = i;
    }
  else
    for (var s = 0; s < t; s++)
      a[s] = e[Math.floor(Math.random() * e.length)];
  return a;
}, ku = function(e, t, a) {
  for (var n = 0, i = 0; i < t.length; i++)
    n += Fn("manhattan", t[i], e, a, "kMedoids");
  return n;
}, ug = function(e) {
  var t = this.cy(), a = this.nodes(), n = null, i = To(e), s = new Array(i.k), o = {}, u;
  i.testMode ? typeof i.testCentroids == "number" ? (i.testCentroids, u = zi(a, i.k, i.attributes)) : We(i.testCentroids) === "object" ? u = i.testCentroids : u = zi(a, i.k, i.attributes) : u = zi(a, i.k, i.attributes);
  for (var l = !0, c = 0; l && c < i.maxIterations; ) {
    for (var f = 0; f < a.length; f++)
      n = a[f], o[n.id()] = uf(n, u, i.distance, i.attributes, "kMeans");
    l = !1;
    for (var v = 0; v < i.k; v++) {
      var h = lf(v, a, o);
      if (h.length !== 0) {
        for (var d = i.attributes.length, y = u[v], g = new Array(d), p = new Array(d), m = 0; m < d; m++) {
          p[m] = 0;
          for (var b = 0; b < h.length; b++)
            n = h[b], p[m] += i.attributes[m](n);
          g[m] = p[m] / h.length, ig(g[m], y[m], i.sensitivityThreshold) || (l = !0);
        }
        u[v] = g, s[v] = t.collection(h);
      }
    }
    c++;
  }
  return s;
}, lg = function(e) {
  var t = this.cy(), a = this.nodes(), n = null, i = To(e), s = new Array(i.k), o, u = {}, l, c = new Array(i.k);
  i.testMode ? typeof i.testCentroids == "number" || (We(i.testCentroids) === "object" ? o = i.testCentroids : o = Au(a, i.k)) : o = Au(a, i.k);
  for (var f = !0, v = 0; f && v < i.maxIterations; ) {
    for (var h = 0; h < a.length; h++)
      n = a[h], u[n.id()] = uf(n, o, i.distance, i.attributes, "kMedoids");
    f = !1;
    for (var d = 0; d < o.length; d++) {
      var y = lf(d, a, u);
      if (y.length !== 0) {
        c[d] = ku(o[d], y, i.attributes);
        for (var g = 0; g < y.length; g++)
          l = ku(y[g], y, i.attributes), l < c[d] && (c[d] = l, o[d] = y[g], f = !0);
        s[d] = t.collection(y);
      }
    }
    v++;
  }
  return s;
}, cg = function(e, t, a, n, i) {
  for (var s, o, u = 0; u < t.length; u++)
    for (var l = 0; l < e.length; l++)
      n[u][l] = Math.pow(a[u][l], i.m);
  for (var c = 0; c < e.length; c++)
    for (var f = 0; f < i.attributes.length; f++) {
      s = 0, o = 0;
      for (var v = 0; v < t.length; v++)
        s += n[v][c] * i.attributes[f](t[v]), o += n[v][c];
      e[c][f] = s / o;
    }
}, fg = function(e, t, a, n, i) {
  for (var s = 0; s < e.length; s++)
    t[s] = e[s].slice();
  for (var o, u, l, c = 2 / (i.m - 1), f = 0; f < a.length; f++)
    for (var v = 0; v < n.length; v++) {
      o = 0;
      for (var h = 0; h < a.length; h++)
        u = Fn(i.distance, n[v], a[f], i.attributes, "cmeans"), l = Fn(i.distance, n[v], a[h], i.attributes, "cmeans"), o += Math.pow(u / l, c);
      e[v][f] = 1 / o;
    }
}, vg = function(e, t, a, n) {
  for (var i = new Array(a.k), s = 0; s < i.length; s++)
    i[s] = [];
  for (var o, u, l = 0; l < t.length; l++) {
    o = -1 / 0, u = -1;
    for (var c = 0; c < t[0].length; c++)
      t[l][c] > o && (o = t[l][c], u = c);
    i[u].push(e[l]);
  }
  for (var f = 0; f < i.length; f++)
    i[f] = n.collection(i[f]);
  return i;
}, Du = function(e) {
  var t = this.cy(), a = this.nodes(), n = To(e), i, s, o, u, l;
  u = new Array(a.length);
  for (var c = 0; c < a.length; c++)
    u[c] = new Array(n.k);
  o = new Array(a.length);
  for (var f = 0; f < a.length; f++)
    o[f] = new Array(n.k);
  for (var v = 0; v < a.length; v++) {
    for (var h = 0, d = 0; d < n.k; d++)
      o[v][d] = Math.random(), h += o[v][d];
    for (var y = 0; y < n.k; y++)
      o[v][y] = o[v][y] / h;
  }
  s = new Array(n.k);
  for (var g = 0; g < n.k; g++)
    s[g] = new Array(n.attributes.length);
  l = new Array(a.length);
  for (var p = 0; p < a.length; p++)
    l[p] = new Array(n.k);
  for (var m = !0, b = 0; m && b < n.maxIterations; )
    m = !1, cg(s, a, o, l, n), fg(o, u, s, a, n), sg(o, u, n.sensitivityThreshold) || (m = !0), b++;
  return i = vg(a, o, n, t), {
    clusters: i,
    degreeOfMembership: o
  };
}, dg = {
  kMeans: ug,
  kMedoids: lg,
  fuzzyCMeans: Du,
  fcm: Du
}, hg = Ze({
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
}), gg = {
  single: "min",
  complete: "max"
}, pg = function(e) {
  var t = hg(e), a = gg[t.linkage];
  return a != null && (t.linkage = a), t;
}, Pu = function(e, t, a, n, i) {
  for (var s = 0, o = 1 / 0, u, l = i.attributes, c = function(D, P) {
    return Jn(i.distance, l.length, function(A) {
      return l[A](D);
    }, function(A) {
      return l[A](P);
    }, D, P);
  }, f = 0; f < e.length; f++) {
    var v = e[f].key, h = a[v][n[v]];
    h < o && (s = v, o = h);
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
      for (var C = w, E = 0; E < e.length; E++) {
        var x = e[E].key;
        a[w][x] < a[w][C] && (C = x);
      }
      n[w] = C;
    }
    e[b].index = b;
  }
  return d.key = y.key = d.index = y.index = null, !0;
}, Gr = function(e, t, a) {
  e && (e.value ? t.push(e.value) : (e.left && Gr(e.left, t), e.right && Gr(e.right, t)));
}, Zs = function(e, t) {
  if (!e)
    return "";
  if (e.left && e.right) {
    var a = Zs(e.left, t), n = Zs(e.right, t), i = t.add({
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
}, Ys = function(e, t, a) {
  if (!e)
    return [];
  var n = [], i = [], s = [];
  return t === 0 ? (e.left && Gr(e.left, n), e.right && Gr(e.right, i), s = n.concat(i), [a.collection(s)]) : t === 1 ? e.value ? [a.collection(e.value)] : (e.left && Gr(e.left, n), e.right && Gr(e.right, i), [a.collection(n), a.collection(i)]) : e.value ? [a.collection(e.value)] : (e.left && (n = Ys(e.left, t - 1, a)), e.right && (i = Ys(e.right, t - 1, a)), n.concat(i));
}, Bu = function(e) {
  for (var t = this.cy(), a = this.nodes(), n = pg(e), i = n.attributes, s = function(b, w) {
    return Jn(n.distance, i.length, function(C) {
      return i[C](b);
    }, function(C) {
      return i[C](w);
    }, b, w);
  }, o = [], u = [], l = [], c = [], f = 0; f < a.length; f++) {
    var v = {
      value: n.mode === "dendrogram" ? a[f] : [a[f]],
      key: f,
      index: f
    };
    o[f] = v, c[f] = v, u[f] = [], l[f] = 0;
  }
  for (var h = 0; h < o.length; h++)
    for (var d = 0; d <= h; d++) {
      var y = void 0;
      n.mode === "dendrogram" ? y = h === d ? 1 / 0 : s(o[h].value, o[d].value) : y = h === d ? 1 / 0 : s(o[h].value[0], o[d].value[0]), u[h][d] = y, u[d][h] = y, y < u[h][l[h]] && (l[h] = d);
    }
  for (var g = Pu(o, c, u, l, n); g; )
    g = Pu(o, c, u, l, n);
  var p;
  return n.mode === "dendrogram" ? (p = Ys(o[0], n.dendrogramDepth, t), n.addDendrogram && Zs(o[0], t)) : (p = new Array(o.length), o.forEach(function(m, b) {
    m.key = m.index = null, p[b] = t.collection(m.value);
  })), p;
}, yg = {
  hierarchicalClustering: Bu,
  hca: Bu
}, mg = Ze({
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
}), bg = function(e) {
  var t = e.damping, a = e.preference;
  0.5 <= t && t < 1 || qe("Damping must range on [0.5, 1).  Got: ".concat(t));
  var n = ["median", "mean", "min", "max"];
  return n.some(function(i) {
    return i === a;
  }) || ae(a) || qe("Preference must be one of [".concat(n.map(function(i) {
    return "'".concat(i, "'");
  }).join(", "), "] or a number.  Got: ").concat(a)), mg(e);
}, wg = function(e, t, a, n) {
  var i = function(o, u) {
    return n[u](o);
  };
  return -Jn(e, n.length, function(s) {
    return i(t, s);
  }, function(s) {
    return i(a, s);
  }, t, a);
}, xg = function(e, t) {
  var a = null;
  return t === "median" ? a = xh(e) : t === "mean" ? a = wh(e) : t === "min" ? a = mh(e) : t === "max" ? a = bh(e) : a = t, a;
}, Eg = function(e, t, a) {
  for (var n = [], i = 0; i < e; i++)
    t[i * e + i] + a[i * e + i] > 0 && n.push(i);
  return n;
}, Lu = function(e, t, a) {
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
}, Cg = function(e, t, a) {
  for (var n = Lu(e, t, a), i = 0; i < a.length; i++) {
    for (var s = [], o = 0; o < n.length; o++)
      n[o] === a[i] && s.push(o);
    for (var u = -1, l = -1 / 0, c = 0; c < s.length; c++) {
      for (var f = 0, v = 0; v < s.length; v++)
        f += t[s[v] * e + s[c]];
      f > l && (u = c, l = f);
    }
    a[i] = s[u];
  }
  return n = Lu(e, t, a), n;
}, Ru = function(e) {
  for (var t = this.cy(), a = this.nodes(), n = bg(e), i = {}, s = 0; s < a.length; s++)
    i[a[s].id()] = s;
  var o, u, l, c, f, v;
  o = a.length, u = o * o, l = new Array(u);
  for (var h = 0; h < u; h++)
    l[h] = -1 / 0;
  for (var d = 0; d < o; d++)
    for (var y = 0; y < o; y++)
      d !== y && (l[d * o + y] = wg(n.distance, a[d], a[y], n.attributes));
  c = xg(l, n.preference);
  for (var g = 0; g < o; g++)
    l[g * o + g] = c;
  f = new Array(u);
  for (var p = 0; p < u; p++)
    f[p] = 0;
  v = new Array(u);
  for (var m = 0; m < u; m++)
    v[m] = 0;
  for (var b = new Array(o), w = new Array(o), C = new Array(o), E = 0; E < o; E++)
    b[E] = 0, w[E] = 0, C[E] = 0;
  for (var x = new Array(o * n.minIterations), T = 0; T < x.length; T++)
    x[T] = 0;
  var D;
  for (D = 0; D < n.maxIterations; D++) {
    for (var P = 0; P < o; P++) {
      for (var A = -1 / 0, B = -1 / 0, k = -1, L = 0, M = 0; M < o; M++)
        b[M] = f[P * o + M], L = v[P * o + M] + l[P * o + M], L >= A ? (B = A, A = L, k = M) : L > B && (B = L);
      for (var I = 0; I < o; I++)
        f[P * o + I] = (1 - n.damping) * (l[P * o + I] - A) + n.damping * b[I];
      f[P * o + k] = (1 - n.damping) * (l[P * o + k] - B) + n.damping * b[k];
    }
    for (var R = 0; R < o; R++) {
      for (var O = 0, _ = 0; _ < o; _++)
        b[_] = v[_ * o + R], w[_] = Math.max(0, f[_ * o + R]), O += w[_];
      O -= w[R], w[R] = f[R * o + R], O += w[R];
      for (var U = 0; U < o; U++)
        v[U * o + R] = (1 - n.damping) * Math.min(0, O - w[U]) + n.damping * b[U];
      v[R * o + R] = (1 - n.damping) * (O - w[R]) + n.damping * b[R];
    }
    for (var z = 0, H = 0; H < o; H++) {
      var G = v[H * o + H] + f[H * o + H] > 0 ? 1 : 0;
      x[D % n.minIterations * o + H] = G, z += G;
    }
    if (z > 0 && (D >= n.minIterations - 1 || D == n.maxIterations - 1)) {
      for (var Q = 0, W = 0; W < o; W++) {
        C[W] = 0;
        for (var X = 0; X < n.minIterations; X++)
          C[W] += x[X * o + W];
        (C[W] === 0 || C[W] === n.minIterations) && Q++;
      }
      if (Q === o)
        break;
    }
  }
  for (var Y = Eg(o, f, v), ee = Cg(o, l, Y), V = {}, N = 0; N < Y.length; N++)
    V[Y[N]] = [];
  for (var K = 0; K < a.length; K++) {
    var j = i[a[K].id()], te = ee[j];
    te != null && V[te].push(a[K]);
  }
  for (var se = new Array(Y.length), de = 0; de < Y.length; de++)
    se[de] = t.collection(V[Y[de]]);
  return se;
}, Tg = {
  affinityPropagation: Ru,
  ap: Ru
}, Sg = Ze({
  root: void 0,
  directed: !1
}), Ag = {
  hierholzer: function(e) {
    if (!ke(e)) {
      var t = arguments;
      e = {
        root: t[0],
        directed: t[1]
      };
    }
    var a = Sg(e), n = a.root, i = a.directed, s = this, o = !1, u, l, c;
    n && (c = fe(n) ? this.filter(n)[0].id() : n[0].id());
    var f = {}, v = {};
    i ? s.forEach(function(m) {
      var b = m.id();
      if (m.isNode()) {
        var w = m.indegree(!0), C = m.outdegree(!0), E = w - C, x = C - w;
        E == 1 ? u ? o = !0 : u = b : x == 1 ? l ? o = !0 : l = b : (x > 1 || E > 1) && (o = !0), f[b] = [], m.outgoers().forEach(function(T) {
          T.isEdge() && f[b].push(T.id());
        });
      } else
        v[b] = [void 0, m.target().id()];
    }) : s.forEach(function(m) {
      var b = m.id();
      if (m.isNode()) {
        var w = m.degree(!0);
        w % 2 && (u ? l ? o = !0 : l = b : u = b), f[b] = [], m.connectedEdges().forEach(function(C) {
          return f[b].push(C.id());
        });
      } else
        v[b] = [m.source().id(), m.target().id()];
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
      for (var w = b, C = [b], E, x, T; f[w].length; )
        E = f[w].shift(), x = v[E][0], T = v[E][1], w != T ? (f[T] = f[T].filter(function(D) {
          return D != E;
        }), w = T) : !i && w != x && (f[x] = f[x].filter(function(D) {
          return D != E;
        }), w = x), C.unshift(E), C.unshift(w);
      return C;
    }, y = [], g = [];
    for (g = d(c); g.length != 1; )
      f[g[0]].length == 0 ? (y.unshift(s.getElementById(g.shift())), y.unshift(s.getElementById(g.shift()))) : g = d(g.shift()).concat(g);
    y.unshift(s.getElementById(g.shift()));
    for (var p in f)
      if (f[p].length)
        return h;
    return h.found = !0, h.trail = this.spawn(y, !0), h;
  }
}, ln = function() {
  var e = this, t = {}, a = 0, n = 0, i = [], s = [], o = {}, u = function(v, h) {
    for (var d = s.length - 1, y = [], g = e.spawn(); s[d].x != v || s[d].y != h; )
      y.push(s.pop().edge), d--;
    y.push(s.pop().edge), y.forEach(function(p) {
      var m = p.connectedNodes().intersection(e);
      g.merge(p), m.forEach(function(b) {
        var w = b.id(), C = b.connectedEdges().intersection(e);
        g.merge(b), t[w].cutVertex ? g.merge(C.filter(function(E) {
          return E.isLoop();
        })) : g.merge(C);
      });
    }), i.push(g);
  }, l = function(v, h, d) {
    v === d && (n += 1), t[h] = {
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
        })), m in t ? t[h].low = Math.min(t[h].low, t[m].id) : (l(v, m, h), t[h].low = Math.min(t[h].low, t[m].low), t[h].id <= t[m].low && (t[h].cutVertex = !0, u(h, m))));
      });
    }
  };
  e.forEach(function(f) {
    if (f.isNode()) {
      var v = f.id();
      v in t || (n = 0, l(v, v), t[v].cutVertex = n > 1);
    }
  });
  var c = Object.keys(t).filter(function(f) {
    return t[f].cutVertex;
  }).map(function(f) {
    return e.getElementById(f);
  });
  return {
    cut: e.spawn(c),
    components: i
  };
}, kg = {
  hopcroftTarjanBiconnected: ln,
  htbc: ln,
  htb: ln,
  hopcroftTarjanBiconnectedComponents: ln
}, cn = function() {
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
      for (var f = e.spawn(); ; ) {
        var v = i.pop();
        if (f.merge(e.getElementById(v)), t[v].low = t[l].index, t[v].explored = !0, v === l)
          break;
      }
      var h = f.edgesWith(f), d = f.merge(h);
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
}, Dg = {
  tarjanStronglyConnected: cn,
  tsc: cn,
  tscc: cn,
  tarjanStronglyConnectedComponents: cn
}, cf = {};
[Ia, sh, oh, lh, fh, dh, ph, qh, Zr, Yr, Ws, eg, dg, yg, Tg, Ag, kg, Dg].forEach(function(r) {
  pe(cf, r);
});
/*!
Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
Licensed under The MIT License (http://opensource.org/licenses/MIT)
*/
var ff = 0, vf = 1, df = 2, Mt = function(e) {
  if (!(this instanceof Mt))
    return new Mt(e);
  this.id = "Thenable/1.0.7", this.state = ff, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
    then: this.then.bind(this)
  }, typeof e == "function" && e.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
Mt.prototype = {
  /*  promise resolving methods  */
  fulfill: function(e) {
    return Mu(this, vf, "fulfillValue", e);
  },
  reject: function(e) {
    return Mu(this, df, "rejectReason", e);
  },
  /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
  then: function(e, t) {
    var a = this, n = new Mt();
    return a.onFulfilled.push(Ou(e, n, "fulfill")), a.onRejected.push(Ou(t, n, "reject")), hf(a), n.proxy;
  }
};
var Mu = function(e, t, a, n) {
  return e.state === ff && (e.state = t, e[a] = n, hf(e)), e;
}, hf = function(e) {
  e.state === vf ? Iu(e, "onFulfilled", e.fulfillValue) : e.state === df && Iu(e, "onRejected", e.rejectReason);
}, Iu = function(e, t, a) {
  if (e[t].length !== 0) {
    var n = e[t];
    e[t] = [];
    var i = function() {
      for (var o = 0; o < n.length; o++)
        n[o](a);
    };
    typeof setImmediate == "function" ? setImmediate(i) : setTimeout(i, 0);
  }
}, Ou = function(e, t, a) {
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
      gf(t, i);
    }
  };
}, gf = function(e, t) {
  if (e === t || e.proxy === t) {
    e.reject(new TypeError("cannot resolve promise with itself"));
    return;
  }
  var a;
  if (We(t) === "object" && t !== null || typeof t == "function")
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
          n || (n = !0, i === t ? e.reject(new TypeError("circular thenable chain")) : gf(e, i));
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
Mt.all = function(r) {
  return new Mt(function(e, t) {
    for (var a = new Array(r.length), n = 0, i = function(u, l) {
      a[u] = l, n++, n === r.length && e(a);
    }, s = 0; s < r.length; s++)
      (function(o) {
        var u = r[o], l = u != null && u.then != null;
        if (l)
          u.then(function(f) {
            i(o, f);
          }, function(f) {
            t(f);
          });
        else {
          var c = u;
          i(o, c);
        }
      })(s);
  });
};
Mt.resolve = function(r) {
  return new Mt(function(e, t) {
    e(r);
  });
};
Mt.reject = function(r) {
  return new Mt(function(e, t) {
    t(r);
  });
};
var aa = typeof Promise < "u" ? Promise : Mt, Xs = function(e, t, a) {
  var n = go(e), i = !n, s = this._private = pe({
    duration: 1e3
  }, t, a);
  if (s.target = e, s.style = s.style || s.css, s.started = !1, s.playing = !1, s.hooked = !1, s.applying = !1, s.progress = 0, s.completes = [], s.frames = [], s.complete && _e(s.complete) && s.completes.push(s.complete), i) {
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
}, Dr = Xs.prototype;
pe(Dr, {
  instanceString: function() {
    return "animation";
  },
  hook: function() {
    var e = this._private;
    if (!e.hooked) {
      var t, a = e.target._private.animation;
      e.queue ? t = a.queue : t = a.current, t.push(this), Et(e.target) && e.target.cy().addToAnimationPool(e.target), e.hooked = !0;
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
      var f = e[l];
      f != null && (e[l] = e[c], e[c] = f);
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
    return new aa(function(n, i) {
      a.push(function() {
        n();
      });
    });
  }
});
Dr.complete = Dr.completed;
Dr.run = Dr.play;
Dr.running = Dr.playing;
var Pg = {
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
      t = pe({}, t, a);
      var f = Object.keys(t).length === 0;
      if (f)
        return new Xs(s[0], t);
      switch (t.duration === void 0 && (t.duration = 400), t.duration) {
        case "slow":
          t.duration = 600;
          break;
        case "fast":
          t.duration = 200;
          break;
      }
      if (l && (t.style = c.getPropsList(t.style || t.css), t.css = void 0), l && t.renderedPosition != null) {
        var v = t.renderedPosition, h = o.pan(), d = o.zoom();
        t.position = Jc(v, d, h);
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
      if (u && ke(t.zoom)) {
        var C = o.getZoomedViewport(t.zoom);
        C != null ? (C.zoomed && (t.zoom = C.zoom), C.panned && (t.pan = C.pan)) : t.zoom = null;
      }
      return new Xs(s[0], t);
    };
  },
  // animate
  animate: function() {
    return function(t, a) {
      var n = this, i = n.length !== void 0, s = i ? n : [n], o = this._private.cy || this;
      if (!o.styleEnabled())
        return this;
      a && (t = pe({}, t, a));
      for (var u = 0; u < s.length; u++) {
        var l = s[u], c = l.animated() && (t.queue === void 0 || t.queue), f = l.animation(t, c ? {
          queue: !0
        } : void 0);
        f.play();
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
        for (var l = s[u], c = l._private, f = c.animation.current, v = 0; v < f.length; v++) {
          var h = f[v], d = h._private;
          a && (d.duration = 0);
        }
        t && (c.animation.queue = []), a || (c.animation.current = []);
      }
      return o.notify("draw"), this;
    };
  }
  // stop
}, Fi, Nu;
function jn() {
  if (Nu)
    return Fi;
  Nu = 1;
  var r = Array.isArray;
  return Fi = r, Fi;
}
var $i, zu;
function Bg() {
  if (zu)
    return $i;
  zu = 1;
  var r = jn(), e = Ka(), t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
  function n(i, s) {
    if (r(i))
      return !1;
    var o = typeof i;
    return o == "number" || o == "symbol" || o == "boolean" || i == null || e(i) ? !0 : a.test(i) || !t.test(i) || s != null && i in Object(s);
  }
  return $i = n, $i;
}
var Vi, Fu;
function Lg() {
  if (Fu)
    return Vi;
  Fu = 1;
  var r = Hc(), e = Ga(), t = "[object AsyncFunction]", a = "[object Function]", n = "[object GeneratorFunction]", i = "[object Proxy]";
  function s(o) {
    if (!e(o))
      return !1;
    var u = r(o);
    return u == a || u == n || u == t || u == i;
  }
  return Vi = s, Vi;
}
var qi, $u;
function Rg() {
  if ($u)
    return qi;
  $u = 1;
  var r = Yn(), e = r["__core-js_shared__"];
  return qi = e, qi;
}
var _i, Vu;
function Mg() {
  if (Vu)
    return _i;
  Vu = 1;
  var r = Rg(), e = function() {
    var a = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  }();
  function t(a) {
    return !!e && e in a;
  }
  return _i = t, _i;
}
var Hi, qu;
function Ig() {
  if (qu)
    return Hi;
  qu = 1;
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
  return Hi = t, Hi;
}
var Ui, _u;
function Og() {
  if (_u)
    return Ui;
  _u = 1;
  var r = Lg(), e = Mg(), t = Ga(), a = Ig(), n = /[\\^$.*+?()[\]{}|]/g, i = /^\[object .+?Constructor\]$/, s = Function.prototype, o = Object.prototype, u = s.toString, l = o.hasOwnProperty, c = RegExp(
    "^" + u.call(l).replace(n, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function f(v) {
    if (!t(v) || e(v))
      return !1;
    var h = r(v) ? c : i;
    return h.test(a(v));
  }
  return Ui = f, Ui;
}
var Gi, Hu;
function Ng() {
  if (Hu)
    return Gi;
  Hu = 1;
  function r(e, t) {
    return e == null ? void 0 : e[t];
  }
  return Gi = r, Gi;
}
var Ki, Uu;
function So() {
  if (Uu)
    return Ki;
  Uu = 1;
  var r = Og(), e = Ng();
  function t(a, n) {
    var i = e(a, n);
    return r(i) ? i : void 0;
  }
  return Ki = t, Ki;
}
var Wi, Gu;
function ei() {
  if (Gu)
    return Wi;
  Gu = 1;
  var r = So(), e = r(Object, "create");
  return Wi = e, Wi;
}
var Zi, Ku;
function zg() {
  if (Ku)
    return Zi;
  Ku = 1;
  var r = ei();
  function e() {
    this.__data__ = r ? r(null) : {}, this.size = 0;
  }
  return Zi = e, Zi;
}
var Yi, Wu;
function Fg() {
  if (Wu)
    return Yi;
  Wu = 1;
  function r(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  return Yi = r, Yi;
}
var Xi, Zu;
function $g() {
  if (Zu)
    return Xi;
  Zu = 1;
  var r = ei(), e = "__lodash_hash_undefined__", t = Object.prototype, a = t.hasOwnProperty;
  function n(i) {
    var s = this.__data__;
    if (r) {
      var o = s[i];
      return o === e ? void 0 : o;
    }
    return a.call(s, i) ? s[i] : void 0;
  }
  return Xi = n, Xi;
}
var Qi, Yu;
function Vg() {
  if (Yu)
    return Qi;
  Yu = 1;
  var r = ei(), e = Object.prototype, t = e.hasOwnProperty;
  function a(n) {
    var i = this.__data__;
    return r ? i[n] !== void 0 : t.call(i, n);
  }
  return Qi = a, Qi;
}
var Ji, Xu;
function qg() {
  if (Xu)
    return Ji;
  Xu = 1;
  var r = ei(), e = "__lodash_hash_undefined__";
  function t(a, n) {
    var i = this.__data__;
    return this.size += this.has(a) ? 0 : 1, i[a] = r && n === void 0 ? e : n, this;
  }
  return Ji = t, Ji;
}
var ji, Qu;
function _g() {
  if (Qu)
    return ji;
  Qu = 1;
  var r = zg(), e = Fg(), t = $g(), a = Vg(), n = qg();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, ji = i, ji;
}
var es, Ju;
function Hg() {
  if (Ju)
    return es;
  Ju = 1;
  function r() {
    this.__data__ = [], this.size = 0;
  }
  return es = r, es;
}
var ts, ju;
function pf() {
  if (ju)
    return ts;
  ju = 1;
  function r(e, t) {
    return e === t || e !== e && t !== t;
  }
  return ts = r, ts;
}
var rs, el;
function ti() {
  if (el)
    return rs;
  el = 1;
  var r = pf();
  function e(t, a) {
    for (var n = t.length; n--; )
      if (r(t[n][0], a))
        return n;
    return -1;
  }
  return rs = e, rs;
}
var as, tl;
function Ug() {
  if (tl)
    return as;
  tl = 1;
  var r = ti(), e = Array.prototype, t = e.splice;
  function a(n) {
    var i = this.__data__, s = r(i, n);
    if (s < 0)
      return !1;
    var o = i.length - 1;
    return s == o ? i.pop() : t.call(i, s, 1), --this.size, !0;
  }
  return as = a, as;
}
var ns, rl;
function Gg() {
  if (rl)
    return ns;
  rl = 1;
  var r = ti();
  function e(t) {
    var a = this.__data__, n = r(a, t);
    return n < 0 ? void 0 : a[n][1];
  }
  return ns = e, ns;
}
var is, al;
function Kg() {
  if (al)
    return is;
  al = 1;
  var r = ti();
  function e(t) {
    return r(this.__data__, t) > -1;
  }
  return is = e, is;
}
var ss, nl;
function Wg() {
  if (nl)
    return ss;
  nl = 1;
  var r = ti();
  function e(t, a) {
    var n = this.__data__, i = r(n, t);
    return i < 0 ? (++this.size, n.push([t, a])) : n[i][1] = a, this;
  }
  return ss = e, ss;
}
var os, il;
function Zg() {
  if (il)
    return os;
  il = 1;
  var r = Hg(), e = Ug(), t = Gg(), a = Kg(), n = Wg();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, os = i, os;
}
var us, sl;
function Yg() {
  if (sl)
    return us;
  sl = 1;
  var r = So(), e = Yn(), t = r(e, "Map");
  return us = t, us;
}
var ls, ol;
function Xg() {
  if (ol)
    return ls;
  ol = 1;
  var r = _g(), e = Zg(), t = Yg();
  function a() {
    this.size = 0, this.__data__ = {
      hash: new r(),
      map: new (t || e)(),
      string: new r()
    };
  }
  return ls = a, ls;
}
var cs, ul;
function Qg() {
  if (ul)
    return cs;
  ul = 1;
  function r(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  return cs = r, cs;
}
var fs, ll;
function ri() {
  if (ll)
    return fs;
  ll = 1;
  var r = Qg();
  function e(t, a) {
    var n = t.__data__;
    return r(a) ? n[typeof a == "string" ? "string" : "hash"] : n.map;
  }
  return fs = e, fs;
}
var vs, cl;
function Jg() {
  if (cl)
    return vs;
  cl = 1;
  var r = ri();
  function e(t) {
    var a = r(this, t).delete(t);
    return this.size -= a ? 1 : 0, a;
  }
  return vs = e, vs;
}
var ds, fl;
function jg() {
  if (fl)
    return ds;
  fl = 1;
  var r = ri();
  function e(t) {
    return r(this, t).get(t);
  }
  return ds = e, ds;
}
var hs, vl;
function ep() {
  if (vl)
    return hs;
  vl = 1;
  var r = ri();
  function e(t) {
    return r(this, t).has(t);
  }
  return hs = e, hs;
}
var gs, dl;
function tp() {
  if (dl)
    return gs;
  dl = 1;
  var r = ri();
  function e(t, a) {
    var n = r(this, t), i = n.size;
    return n.set(t, a), this.size += n.size == i ? 0 : 1, this;
  }
  return gs = e, gs;
}
var ps, hl;
function rp() {
  if (hl)
    return ps;
  hl = 1;
  var r = Xg(), e = Jg(), t = jg(), a = ep(), n = tp();
  function i(s) {
    var o = -1, u = s == null ? 0 : s.length;
    for (this.clear(); ++o < u; ) {
      var l = s[o];
      this.set(l[0], l[1]);
    }
  }
  return i.prototype.clear = r, i.prototype.delete = e, i.prototype.get = t, i.prototype.has = a, i.prototype.set = n, ps = i, ps;
}
var ys, gl;
function ap() {
  if (gl)
    return ys;
  gl = 1;
  var r = rp(), e = "Expected a function";
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
  return t.Cache = r, ys = t, ys;
}
var ms, pl;
function np() {
  if (pl)
    return ms;
  pl = 1;
  var r = ap(), e = 500;
  function t(a) {
    var n = r(a, function(s) {
      return i.size === e && i.clear(), s;
    }), i = n.cache;
    return n;
  }
  return ms = t, ms;
}
var bs, yl;
function yf() {
  if (yl)
    return bs;
  yl = 1;
  var r = np(), e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, a = r(function(n) {
    var i = [];
    return n.charCodeAt(0) === 46 && i.push(""), n.replace(e, function(s, o, u, l) {
      i.push(u ? l.replace(t, "$1") : o || s);
    }), i;
  });
  return bs = a, bs;
}
var ws, ml;
function mf() {
  if (ml)
    return ws;
  ml = 1;
  function r(e, t) {
    for (var a = -1, n = e == null ? 0 : e.length, i = Array(n); ++a < n; )
      i[a] = t(e[a], a, e);
    return i;
  }
  return ws = r, ws;
}
var xs, bl;
function ip() {
  if (bl)
    return xs;
  bl = 1;
  var r = yo(), e = mf(), t = jn(), a = Ka(), n = r ? r.prototype : void 0, i = n ? n.toString : void 0;
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
  return xs = s, xs;
}
var Es, wl;
function bf() {
  if (wl)
    return Es;
  wl = 1;
  var r = ip();
  function e(t) {
    return t == null ? "" : r(t);
  }
  return Es = e, Es;
}
var Cs, xl;
function wf() {
  if (xl)
    return Cs;
  xl = 1;
  var r = jn(), e = Bg(), t = yf(), a = bf();
  function n(i, s) {
    return r(i) ? i : e(i, s) ? [i] : t(a(i));
  }
  return Cs = n, Cs;
}
var Ts, El;
function Ao() {
  if (El)
    return Ts;
  El = 1;
  var r = Ka();
  function e(t) {
    if (typeof t == "string" || r(t))
      return t;
    var a = t + "";
    return a == "0" && 1 / t == -1 / 0 ? "-0" : a;
  }
  return Ts = e, Ts;
}
var Ss, Cl;
function sp() {
  if (Cl)
    return Ss;
  Cl = 1;
  var r = wf(), e = Ao();
  function t(a, n) {
    n = r(n, a);
    for (var i = 0, s = n.length; a != null && i < s; )
      a = a[e(n[i++])];
    return i && i == s ? a : void 0;
  }
  return Ss = t, Ss;
}
var As, Tl;
function op() {
  if (Tl)
    return As;
  Tl = 1;
  var r = sp();
  function e(t, a, n) {
    var i = t == null ? void 0 : r(t, a);
    return i === void 0 ? n : i;
  }
  return As = e, As;
}
var up = op(), lp = /* @__PURE__ */ Ua(up), ks, Sl;
function cp() {
  if (Sl)
    return ks;
  Sl = 1;
  var r = So(), e = function() {
    try {
      var t = r(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch {
    }
  }();
  return ks = e, ks;
}
var Ds, Al;
function fp() {
  if (Al)
    return Ds;
  Al = 1;
  var r = cp();
  function e(t, a, n) {
    a == "__proto__" && r ? r(t, a, {
      configurable: !0,
      enumerable: !0,
      value: n,
      writable: !0
    }) : t[a] = n;
  }
  return Ds = e, Ds;
}
var Ps, kl;
function vp() {
  if (kl)
    return Ps;
  kl = 1;
  var r = fp(), e = pf(), t = Object.prototype, a = t.hasOwnProperty;
  function n(i, s, o) {
    var u = i[s];
    (!(a.call(i, s) && e(u, o)) || o === void 0 && !(s in i)) && r(i, s, o);
  }
  return Ps = n, Ps;
}
var Bs, Dl;
function dp() {
  if (Dl)
    return Bs;
  Dl = 1;
  var r = 9007199254740991, e = /^(?:0|[1-9]\d*)$/;
  function t(a, n) {
    var i = typeof a;
    return n = n ?? r, !!n && (i == "number" || i != "symbol" && e.test(a)) && a > -1 && a % 1 == 0 && a < n;
  }
  return Bs = t, Bs;
}
var Ls, Pl;
function hp() {
  if (Pl)
    return Ls;
  Pl = 1;
  var r = vp(), e = wf(), t = dp(), a = Ga(), n = Ao();
  function i(s, o, u, l) {
    if (!a(s))
      return s;
    o = e(o, s);
    for (var c = -1, f = o.length, v = f - 1, h = s; h != null && ++c < f; ) {
      var d = n(o[c]), y = u;
      if (d === "__proto__" || d === "constructor" || d === "prototype")
        return s;
      if (c != v) {
        var g = h[d];
        y = l ? l(g, d, h) : void 0, y === void 0 && (y = a(g) ? g : t(o[c + 1]) ? [] : {});
      }
      r(h, d, y), h = h[d];
    }
    return s;
  }
  return Ls = i, Ls;
}
var Rs, Bl;
function gp() {
  if (Bl)
    return Rs;
  Bl = 1;
  var r = hp();
  function e(t, a, n) {
    return t == null ? t : r(t, a, n);
  }
  return Rs = e, Rs;
}
var pp = gp(), yp = /* @__PURE__ */ Ua(pp), Ms, Ll;
function mp() {
  if (Ll)
    return Ms;
  Ll = 1;
  function r(e, t) {
    var a = -1, n = e.length;
    for (t || (t = Array(n)); ++a < n; )
      t[a] = e[a];
    return t;
  }
  return Ms = r, Ms;
}
var Is, Rl;
function bp() {
  if (Rl)
    return Is;
  Rl = 1;
  var r = mf(), e = mp(), t = jn(), a = Ka(), n = yf(), i = Ao(), s = bf();
  function o(u) {
    return t(u) ? r(u, i) : a(u) ? [u] : e(n(s(u)));
  }
  return Is = o, Is;
}
var wp = bp(), xp = /* @__PURE__ */ Ua(wp), Ep = {
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
    return e = pe({}, t, e), function(n, i) {
      var s = e, o = this, u = o.length !== void 0, l = u ? o : [o], c = u ? o[0] : o;
      if (fe(n)) {
        var f = n.indexOf(".") !== -1, v = f && xp(n);
        if (s.allowGetting && i === void 0) {
          var h;
          return c && (s.beforeGet(c), v && c._private[s.field][n] === void 0 ? h = lp(c._private[s.field], v) : h = c._private[s.field][n]), h;
        } else if (s.allowSetting && i !== void 0) {
          var d = !s.immutableKeys[n];
          if (d) {
            var y = Rc({}, n, i);
            s.beforeSet(o, y);
            for (var g = 0, p = l.length; g < p; g++) {
              var m = l[g];
              s.canSet(m) && (v && c._private[s.field][n] === void 0 ? yp(m._private[s.field], v, i) : m._private[s.field][n] = i);
            }
            s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
          }
        }
      } else if (s.allowSetting && ke(n)) {
        var b = n, w, C, E = Object.keys(b);
        s.beforeSet(o, b);
        for (var x = 0; x < E.length; x++) {
          w = E[x], C = b[w];
          var T = !s.immutableKeys[w];
          if (T)
            for (var D = 0; D < l.length; D++) {
              var P = l[D];
              s.canSet(P) && (P._private[s.field][w] = C);
            }
        }
        s.updateStyle && o.updateStyle(), s.onSet(o), s.settingTriggersEvent && o[s.triggerFnName](s.settingEvent);
      } else if (s.allowBinding && _e(n)) {
        var A = n;
        o.on(s.bindingEvent, A);
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
    return e = pe({}, t, e), function(n) {
      var i = e, s = this, o = s.length !== void 0, u = o ? s : [s];
      if (fe(n)) {
        for (var l = n.split(/\s+/), c = l.length, f = 0; f < c; f++) {
          var v = l[f];
          if (!or(v)) {
            var h = !i.immutableKeys[v];
            if (h)
              for (var d = 0, y = u.length; d < y; d++)
                u[d]._private[i.field][v] = void 0;
          }
        }
        i.triggerEvent && s[i.triggerFnName](i.event);
      } else if (n === void 0) {
        for (var g = 0, p = u.length; g < p; g++)
          for (var m = u[g]._private[i.field], b = Object.keys(m), w = 0; w < b.length; w++) {
            var C = b[w], E = !i.immutableKeys[C];
            E && (m[C] = void 0);
          }
        i.triggerEvent && s[i.triggerFnName](i.event);
      }
      return s;
    };
  }
  // removeData
}, Cp = {
  eventAliasesOn: function(e) {
    var t = e;
    t.addListener = t.listen = t.bind = t.on, t.unlisten = t.unbind = t.off = t.removeListener, t.trigger = t.emit, t.pon = t.promiseOn = function(a, n) {
      var i = this, s = Array.prototype.slice.call(arguments, 0);
      return new aa(function(o, u) {
        var l = function(h) {
          i.off.apply(i, f), o(h);
        }, c = s.concat([l]), f = c.concat([]);
        i.on.apply(i, c);
      });
    };
  }
}, Le = {};
[Pg, Ep, Cp].forEach(function(r) {
  pe(Le, r);
});
var Tp = {
  animate: Le.animate(),
  animation: Le.animation(),
  animated: Le.animated(),
  clearQueue: Le.clearQueue(),
  delay: Le.delay(),
  delayAnimation: Le.delayAnimation(),
  stop: Le.stop()
}, Cn = {
  classes: function(e) {
    var t = this;
    if (e === void 0) {
      var a = [];
      return t[0]._private.classes.forEach(function(d) {
        return a.push(d);
      }), a;
    } else
      Ie(e) || (e = (e || "").match(/\S+/g) || []);
    for (var n = [], i = new ra(e), s = 0; s < t.length; s++) {
      for (var o = t[s], u = o._private, l = u.classes, c = !1, f = 0; f < e.length; f++) {
        var v = e[f], h = l.has(v);
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
    Ie(e) || (e = e.match(/\S+/g) || []);
    for (var a = this, n = t === void 0, i = [], s = 0, o = a.length; s < o; s++)
      for (var u = a[s], l = u._private.classes, c = !1, f = 0; f < e.length; f++) {
        var v = e[f], h = l.has(v), d = !1;
        t || n && !h ? (l.add(v), d = !0) : (!t || n && h) && (l.delete(v), d = !0), !c && d && (i.push(u), c = !0);
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
Cn.className = Cn.classNames = Cn.classes;
var Ae = {
  metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
  // chars we need to escape in let names, etc
  comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
  // binary comparison op (used in data selectors)
  boolOp: "\\?|\\!|\\^",
  // boolean (unary) operators (used in data selectors)
  string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`,
  // string literals (used in data selectors) -- doublequotes | singlequotes
  number: Ke,
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
Ae.variable = "(?:[\\w-.]|(?:\\\\" + Ae.metaChar + "))+";
Ae.className = "(?:[\\w-]|(?:\\\\" + Ae.metaChar + "))+";
Ae.value = Ae.string + "|" + Ae.number;
Ae.id = Ae.variable;
(function() {
  var r, e, t;
  for (r = Ae.comparatorOp.split("|"), t = 0; t < r.length; t++)
    e = r[t], Ae.comparatorOp += "|@" + e;
  for (r = Ae.comparatorOp.split("|"), t = 0; t < r.length; t++)
    e = r[t], !(e.indexOf("!") >= 0) && e !== "=" && (Ae.comparatorOp += "|\\!" + e);
})();
var Me = function() {
  return {
    checks: []
  };
}, ue = {
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
}, Qs = [{
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
  return Ad(r.selector, e.selector);
}), Sp = function() {
  for (var r = {}, e, t = 0; t < Qs.length; t++)
    e = Qs[t], r[e.selector] = e.matches;
  return r;
}(), Ap = function(e, t) {
  return Sp[e](t);
}, kp = "(" + Qs.map(function(r) {
  return r.selector;
}).join("|") + ")", Ir = function(e) {
  return e.replace(new RegExp("\\\\(" + Ae.metaChar + ")", "g"), function(t, a) {
    return a;
  });
}, jt = function(e, t, a) {
  e[e.length - 1] = a;
}, Js = [{
  name: "group",
  // just used for identifying when debugging
  query: !0,
  regex: "(" + Ae.group + ")",
  populate: function(e, t, a) {
    var n = et(a, 1), i = n[0];
    t.checks.push({
      type: ue.GROUP,
      value: i === "*" ? i : i + "s"
    });
  }
}, {
  name: "state",
  query: !0,
  regex: kp,
  populate: function(e, t, a) {
    var n = et(a, 1), i = n[0];
    t.checks.push({
      type: ue.STATE,
      value: i
    });
  }
}, {
  name: "id",
  query: !0,
  regex: "\\#(" + Ae.id + ")",
  populate: function(e, t, a) {
    var n = et(a, 1), i = n[0];
    t.checks.push({
      type: ue.ID,
      value: Ir(i)
    });
  }
}, {
  name: "className",
  query: !0,
  regex: "\\.(" + Ae.className + ")",
  populate: function(e, t, a) {
    var n = et(a, 1), i = n[0];
    t.checks.push({
      type: ue.CLASS,
      value: Ir(i)
    });
  }
}, {
  name: "dataExists",
  query: !0,
  regex: "\\[\\s*(" + Ae.variable + ")\\s*\\]",
  populate: function(e, t, a) {
    var n = et(a, 1), i = n[0];
    t.checks.push({
      type: ue.DATA_EXIST,
      field: Ir(i)
    });
  }
}, {
  name: "dataCompare",
  query: !0,
  regex: "\\[\\s*(" + Ae.variable + ")\\s*(" + Ae.comparatorOp + ")\\s*(" + Ae.value + ")\\s*\\]",
  populate: function(e, t, a) {
    var n = et(a, 3), i = n[0], s = n[1], o = n[2], u = new RegExp("^" + Ae.string + "$").exec(o) != null;
    u ? o = o.substring(1, o.length - 1) : o = parseFloat(o), t.checks.push({
      type: ue.DATA_COMPARE,
      field: Ir(i),
      operator: s,
      value: o
    });
  }
}, {
  name: "dataBool",
  query: !0,
  regex: "\\[\\s*(" + Ae.boolOp + ")\\s*(" + Ae.variable + ")\\s*\\]",
  populate: function(e, t, a) {
    var n = et(a, 2), i = n[0], s = n[1];
    t.checks.push({
      type: ue.DATA_BOOL,
      field: Ir(s),
      operator: i
    });
  }
}, {
  name: "metaCompare",
  query: !0,
  regex: "\\[\\[\\s*(" + Ae.meta + ")\\s*(" + Ae.comparatorOp + ")\\s*(" + Ae.number + ")\\s*\\]\\]",
  populate: function(e, t, a) {
    var n = et(a, 3), i = n[0], s = n[1], o = n[2];
    t.checks.push({
      type: ue.META_COMPARE,
      field: Ir(i),
      operator: s,
      value: parseFloat(o)
    });
  }
}, {
  name: "nextQuery",
  separator: !0,
  regex: Ae.separator,
  populate: function(e, t) {
    var a = e.currentSubject, n = e.edgeCount, i = e.compoundCount, s = e[e.length - 1];
    a != null && (s.subject = a, e.currentSubject = null), s.edgeCount = n, s.compoundCount = i, e.edgeCount = 0, e.compoundCount = 0;
    var o = e[e.length++] = Me();
    return o;
  }
}, {
  name: "directedEdge",
  separator: !0,
  regex: Ae.directedEdge,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = Me(), n = t, i = Me();
      return a.checks.push({
        type: ue.DIRECTED_EDGE,
        source: n,
        target: i
      }), jt(e, t, a), e.edgeCount++, i;
    } else {
      var s = Me(), o = t, u = Me();
      return s.checks.push({
        type: ue.NODE_SOURCE,
        source: o,
        target: u
      }), jt(e, t, s), e.edgeCount++, u;
    }
  }
}, {
  name: "undirectedEdge",
  separator: !0,
  regex: Ae.undirectedEdge,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = Me(), n = t, i = Me();
      return a.checks.push({
        type: ue.UNDIRECTED_EDGE,
        nodes: [n, i]
      }), jt(e, t, a), e.edgeCount++, i;
    } else {
      var s = Me(), o = t, u = Me();
      return s.checks.push({
        type: ue.NODE_NEIGHBOR,
        node: o,
        neighbor: u
      }), jt(e, t, s), u;
    }
  }
}, {
  name: "child",
  separator: !0,
  regex: Ae.child,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = Me(), n = Me(), i = e[e.length - 1];
      return a.checks.push({
        type: ue.CHILD,
        parent: i,
        child: n
      }), jt(e, t, a), e.compoundCount++, n;
    } else if (e.currentSubject === t) {
      var s = Me(), o = e[e.length - 1], u = Me(), l = Me(), c = Me(), f = Me();
      return s.checks.push({
        type: ue.COMPOUND_SPLIT,
        left: o,
        right: u,
        subject: l
      }), l.checks = t.checks, t.checks = [{
        type: ue.TRUE
      }], f.checks.push({
        type: ue.TRUE
      }), u.checks.push({
        type: ue.PARENT,
        // type is swapped on right side queries
        parent: f,
        child: c
        // empty for now
      }), jt(e, o, s), e.currentSubject = l, e.compoundCount++, c;
    } else {
      var v = Me(), h = Me(), d = [{
        type: ue.PARENT,
        parent: v,
        child: h
      }];
      return v.checks = t.checks, t.checks = d, e.compoundCount++, h;
    }
  }
}, {
  name: "descendant",
  separator: !0,
  regex: Ae.descendant,
  populate: function(e, t) {
    if (e.currentSubject == null) {
      var a = Me(), n = Me(), i = e[e.length - 1];
      return a.checks.push({
        type: ue.DESCENDANT,
        ancestor: i,
        descendant: n
      }), jt(e, t, a), e.compoundCount++, n;
    } else if (e.currentSubject === t) {
      var s = Me(), o = e[e.length - 1], u = Me(), l = Me(), c = Me(), f = Me();
      return s.checks.push({
        type: ue.COMPOUND_SPLIT,
        left: o,
        right: u,
        subject: l
      }), l.checks = t.checks, t.checks = [{
        type: ue.TRUE
      }], f.checks.push({
        type: ue.TRUE
      }), u.checks.push({
        type: ue.ANCESTOR,
        // type is swapped on right side queries
        ancestor: f,
        descendant: c
        // empty for now
      }), jt(e, o, s), e.currentSubject = l, e.compoundCount++, c;
    } else {
      var v = Me(), h = Me(), d = [{
        type: ue.ANCESTOR,
        ancestor: v,
        descendant: h
      }];
      return v.checks = t.checks, t.checks = d, e.compoundCount++, h;
    }
  }
}, {
  name: "subject",
  modifier: !0,
  regex: Ae.subject,
  populate: function(e, t) {
    if (e.currentSubject != null && e.currentSubject !== t)
      return Re("Redefinition of subject in selector `" + e.toString() + "`"), !1;
    e.currentSubject = t;
    var a = e[e.length - 1], n = a.checks[0], i = n == null ? null : n.type;
    i === ue.DIRECTED_EDGE ? n.type = ue.NODE_TARGET : i === ue.UNDIRECTED_EDGE && (n.type = ue.NODE_NEIGHBOR, n.node = n.nodes[1], n.neighbor = n.nodes[0], n.nodes = null);
  }
}];
Js.forEach(function(r) {
  return r.regexObj = new RegExp("^" + r.regex);
});
var Dp = function(e) {
  for (var t, a, n, i = 0; i < Js.length; i++) {
    var s = Js[i], o = s.name, u = e.match(s.regexObj);
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
}, Pp = function(e) {
  var t = e.match(/^\s+/);
  if (t) {
    var a = t[0];
    e = e.substring(a.length);
  }
  return e;
}, Bp = function(e) {
  var t = this, a = t.inputText = e, n = t[0] = Me();
  for (t.length = 1, a = Pp(a); ; ) {
    var i = Dp(a);
    if (i.expr == null)
      return Re("The selector `" + e + "`is invalid"), !1;
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
      return Re("The selector `" + e + "` is invalid because it uses both a compound selector and an edge selector"), !1;
    if (c.edgeCount > 1)
      return Re("The selector `" + e + "` is invalid because it uses multiple edge selectors"), !1;
    c.edgeCount === 1 && Re("The selector `" + e + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
  }
  return !0;
}, Lp = function() {
  if (this.toStringCache != null)
    return this.toStringCache;
  for (var e = function(c) {
    return c ?? "";
  }, t = function(c) {
    return fe(c) ? '"' + c + '"' : e(c);
  }, a = function(c) {
    return " " + c + " ";
  }, n = function(c, f) {
    var v = c.type, h = c.value;
    switch (v) {
      case ue.GROUP: {
        var d = e(h);
        return d.substring(0, d.length - 1);
      }
      case ue.DATA_COMPARE: {
        var y = c.field, g = c.operator;
        return "[" + y + a(e(g)) + t(h) + "]";
      }
      case ue.DATA_BOOL: {
        var p = c.operator, m = c.field;
        return "[" + e(p) + m + "]";
      }
      case ue.DATA_EXIST: {
        var b = c.field;
        return "[" + b + "]";
      }
      case ue.META_COMPARE: {
        var w = c.operator, C = c.field;
        return "[[" + C + a(e(w)) + t(h) + "]]";
      }
      case ue.STATE:
        return h;
      case ue.ID:
        return "#" + h;
      case ue.CLASS:
        return "." + h;
      case ue.PARENT:
      case ue.CHILD:
        return i(c.parent, f) + a(">") + i(c.child, f);
      case ue.ANCESTOR:
      case ue.DESCENDANT:
        return i(c.ancestor, f) + " " + i(c.descendant, f);
      case ue.COMPOUND_SPLIT: {
        var E = i(c.left, f), x = i(c.subject, f), T = i(c.right, f);
        return E + (E.length > 0 ? " " : "") + x + T;
      }
      case ue.TRUE:
        return "";
    }
  }, i = function(c, f) {
    return c.checks.reduce(function(v, h, d) {
      return v + (f === c && d === 0 ? "$" : "") + n(h, f);
    }, "");
  }, s = "", o = 0; o < this.length; o++) {
    var u = this[o];
    s += i(u, u.subject), this.length > 1 && o < this.length - 1 && (s += ", ");
  }
  return this.toStringCache = s, s;
}, Rp = {
  parse: Bp,
  toString: Lp
}, xf = function(e, t, a) {
  var n, i = fe(e), s = ae(e), o = fe(a), u, l, c = !1, f = !1, v = !1;
  switch (t.indexOf("!") >= 0 && (t = t.replace("!", ""), f = !0), t.indexOf("@") >= 0 && (t = t.replace("@", ""), c = !0), (i || o || c) && (u = !i && !s ? "" : "" + e, l = "" + a), c && (e = u = u.toLowerCase(), a = l = l.toLowerCase()), t) {
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
      v = !0, n = e > a;
      break;
    case ">=":
      v = !0, n = e >= a;
      break;
    case "<":
      v = !0, n = e < a;
      break;
    case "<=":
      v = !0, n = e <= a;
      break;
    default:
      n = !1;
      break;
  }
  return f && (e != null || !v) && (n = !n), n;
}, Mp = function(e, t) {
  switch (t) {
    case "?":
      return !!e;
    case "!":
      return !e;
    case "^":
      return e === void 0;
  }
}, Ip = function(e) {
  return e !== void 0;
}, ko = function(e, t) {
  return e.data(t);
}, Op = function(e, t) {
  return e[t]();
}, He = [], $e = function(e, t) {
  return e.checks.every(function(a) {
    return He[a.type](a, t);
  });
};
He[ue.GROUP] = function(r, e) {
  var t = r.value;
  return t === "*" || t === e.group();
};
He[ue.STATE] = function(r, e) {
  var t = r.value;
  return Ap(t, e);
};
He[ue.ID] = function(r, e) {
  var t = r.value;
  return e.id() === t;
};
He[ue.CLASS] = function(r, e) {
  var t = r.value;
  return e.hasClass(t);
};
He[ue.META_COMPARE] = function(r, e) {
  var t = r.field, a = r.operator, n = r.value;
  return xf(Op(e, t), a, n);
};
He[ue.DATA_COMPARE] = function(r, e) {
  var t = r.field, a = r.operator, n = r.value;
  return xf(ko(e, t), a, n);
};
He[ue.DATA_BOOL] = function(r, e) {
  var t = r.field, a = r.operator;
  return Mp(ko(e, t), a);
};
He[ue.DATA_EXIST] = function(r, e) {
  var t = r.field;
  return r.operator, Ip(ko(e, t));
};
He[ue.UNDIRECTED_EDGE] = function(r, e) {
  var t = r.nodes[0], a = r.nodes[1], n = e.source(), i = e.target();
  return $e(t, n) && $e(a, i) || $e(a, n) && $e(t, i);
};
He[ue.NODE_NEIGHBOR] = function(r, e) {
  return $e(r.node, e) && e.neighborhood().some(function(t) {
    return t.isNode() && $e(r.neighbor, t);
  });
};
He[ue.DIRECTED_EDGE] = function(r, e) {
  return $e(r.source, e.source()) && $e(r.target, e.target());
};
He[ue.NODE_SOURCE] = function(r, e) {
  return $e(r.source, e) && e.outgoers().some(function(t) {
    return t.isNode() && $e(r.target, t);
  });
};
He[ue.NODE_TARGET] = function(r, e) {
  return $e(r.target, e) && e.incomers().some(function(t) {
    return t.isNode() && $e(r.source, t);
  });
};
He[ue.CHILD] = function(r, e) {
  return $e(r.child, e) && $e(r.parent, e.parent());
};
He[ue.PARENT] = function(r, e) {
  return $e(r.parent, e) && e.children().some(function(t) {
    return $e(r.child, t);
  });
};
He[ue.DESCENDANT] = function(r, e) {
  return $e(r.descendant, e) && e.ancestors().some(function(t) {
    return $e(r.ancestor, t);
  });
};
He[ue.ANCESTOR] = function(r, e) {
  return $e(r.ancestor, e) && e.descendants().some(function(t) {
    return $e(r.descendant, t);
  });
};
He[ue.COMPOUND_SPLIT] = function(r, e) {
  return $e(r.subject, e) && $e(r.left, e) && $e(r.right, e);
};
He[ue.TRUE] = function() {
  return !0;
};
He[ue.COLLECTION] = function(r, e) {
  var t = r.value;
  return t.has(e);
};
He[ue.FILTER] = function(r, e) {
  var t = r.value;
  return t(e);
};
var Np = function(e) {
  var t = this;
  if (t.length === 1 && t[0].checks.length === 1 && t[0].checks[0].type === ue.ID)
    return e.getElementById(t[0].checks[0].value).collection();
  var a = function(i) {
    for (var s = 0; s < t.length; s++) {
      var o = t[s];
      if ($e(o, i))
        return !0;
    }
    return !1;
  };
  return t.text() == null && (a = function() {
    return !0;
  }), e.filter(a);
}, zp = function(e) {
  for (var t = this, a = 0; a < t.length; a++) {
    var n = t[a];
    if ($e(n, e))
      return !0;
  }
  return !1;
}, Fp = {
  matches: zp,
  filter: Np
}, cr = function(e) {
  this.inputText = e, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, e == null || fe(e) && e.match(/^\s*$/) || (Et(e) ? this.addQuery({
    checks: [{
      type: ue.COLLECTION,
      value: e.collection()
    }]
  }) : _e(e) ? this.addQuery({
    checks: [{
      type: ue.FILTER,
      value: e
    }]
  }) : fe(e) ? this.parse(e) || (this.invalid = !0) : qe("A selector must be created from a string; found "));
}, fr = cr.prototype;
[Rp, Fp].forEach(function(r) {
  return pe(fr, r);
});
fr.text = function() {
  return this.inputText;
};
fr.size = function() {
  return this.length;
};
fr.eq = function(r) {
  return this[r];
};
fr.sameText = function(r) {
  return !this.invalid && !r.invalid && this.text() === r.text();
};
fr.addQuery = function(r) {
  this[this.length++] = r;
};
fr.selector = fr.toString;
var ir = {
  allAre: function(e) {
    var t = new cr(e);
    return this.every(function(a) {
      return t.matches(a);
    });
  },
  is: function(e) {
    var t = new cr(e);
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
ir.allAreNeighbours = ir.allAreNeighbors;
ir.has = ir.contains;
ir.equal = ir.equals = ir.same;
var At = function(e, t) {
  return function(n, i, s, o) {
    var u = n, l = this, c;
    if (u == null ? c = "" : Et(u) && u.length === 1 && (c = u.id()), l.length === 1 && c) {
      var f = l[0]._private, v = f.traversalCache = f.traversalCache || {}, h = v[t] = v[t] || [], d = ur(c), y = h[d];
      return y || (h[d] = e.call(l, n, i, s, o));
    } else
      return e.call(l, n, i, s, o);
  };
}, ta = {
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
  children: At(function(r) {
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
function Do(r, e, t, a) {
  for (var n = [], i = new ra(), s = r.cy(), o = s.hasCompoundNodes(), u = 0; u < r.length; u++) {
    var l = r[u];
    t ? n.push(l) : o && a(n, i, l);
  }
  for (; n.length > 0; ) {
    var c = n.shift();
    e(c), i.add(c.id()), o && a(n, i, c);
  }
  return r;
}
function Ef(r, e, t) {
  if (t.isParent())
    for (var a = t._private.children, n = 0; n < a.length; n++) {
      var i = a[n];
      e.has(i.id()) || r.push(i);
    }
}
ta.forEachDown = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Do(this, r, e, Ef);
};
function Cf(r, e, t) {
  if (t.isChild()) {
    var a = t._private.parent;
    e.has(a.id()) || r.push(a);
  }
}
ta.forEachUp = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Do(this, r, e, Cf);
};
function $p(r, e, t) {
  Cf(r, e, t), Ef(r, e, t);
}
ta.forEachUpAndDown = function(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return Do(this, r, e, $p);
};
ta.ancestors = ta.parents;
var za, Tf;
za = Tf = {
  data: Le.data({
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
  removeData: Le.removeData({
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
  scratch: Le.data({
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
  removeScratch: Le.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  rscratch: Le.data({
    field: "rscratch",
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !0
  }),
  removeRscratch: Le.removeData({
    field: "rscratch",
    triggerEvent: !1
  }),
  id: function() {
    var e = this[0];
    if (e)
      return e._private.data.id;
  }
};
za.attr = za.data;
za.removeAttr = za.removeData;
var Vp = Tf, ai = {};
function Os(r) {
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
pe(ai, {
  degree: Os(function(r, e) {
    return e.source().same(e.target()) ? 2 : 1;
  }),
  indegree: Os(function(r, e) {
    return e.target().same(r) ? 1 : 0;
  }),
  outdegree: Os(function(r, e) {
    return e.source().same(r) ? 1 : 0;
  })
});
function Or(r, e) {
  return function(t) {
    for (var a, n = this.nodes(), i = 0; i < n.length; i++) {
      var s = n[i], o = s[r](t);
      o !== void 0 && (a === void 0 || e(o, a)) && (a = o);
    }
    return a;
  };
}
pe(ai, {
  minDegree: Or("degree", function(r, e) {
    return r < e;
  }),
  maxDegree: Or("degree", function(r, e) {
    return r > e;
  }),
  minIndegree: Or("indegree", function(r, e) {
    return r < e;
  }),
  maxIndegree: Or("indegree", function(r, e) {
    return r > e;
  }),
  minOutdegree: Or("outdegree", function(r, e) {
    return r < e;
  }),
  maxOutdegree: Or("outdegree", function(r, e) {
    return r > e;
  })
});
pe(ai, {
  totalDegree: function(e) {
    for (var t = 0, a = this.nodes(), n = 0; n < a.length; n++)
      t += a[n].degree(e);
    return t;
  }
});
var Rt, Sf, Af = function(e, t, a) {
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
}, Ml = {
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
    Af(e, t, !1);
  },
  onSet: function(e) {
    e.dirtyCompoundBoundsCache();
  },
  canSet: function(e) {
    return !e.locked();
  }
};
Rt = Sf = {
  position: Le.data(Ml),
  // position but no notification to renderer
  silentPosition: Le.data(pe({}, Ml, {
    allowBinding: !1,
    allowSetting: !0,
    settingTriggersEvent: !1,
    allowGetting: !1,
    beforeSet: function(e, t) {
      Af(e, t, !0);
    },
    onSet: function(e) {
      e.dirtyCompoundBoundsCache();
    }
  })),
  positions: function(e, t) {
    if (ke(e))
      t ? this.silentPosition(e) : this.position(e);
    else if (_e(e)) {
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
    if (ke(e) ? (n = {
      x: ae(e.x) ? e.x : 0,
      y: ae(e.y) ? e.y : 0
    }, a = t) : fe(e) && ae(t) && (n = {
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
    return ke(e) ? this.shift(e, !0) : fe(e) && ae(t) && this.shift(e, t, !0), this;
  },
  // get/set the rendered (i.e. on screen) positon of the element
  renderedPosition: function(e, t) {
    var a = this[0], n = this.cy(), i = n.zoom(), s = n.pan(), o = ke(e) ? e : void 0, u = o !== void 0 || t !== void 0 && fe(e);
    if (a && a.isNode())
      if (u)
        for (var l = 0; l < this.length; l++) {
          var c = this[l];
          t !== void 0 ? c.position(e, (t - s[e]) / i) : o !== void 0 && c.position(Jc(o, i, s));
        }
      else {
        var f = a.position();
        return o = Qn(f, i, s), e === void 0 ? o : o[e];
      }
    else if (!u)
      return;
    return this;
  },
  // get/set the position relative to the parent
  relativePosition: function(e, t) {
    var a = this[0], n = this.cy(), i = ke(e) ? e : void 0, s = i !== void 0 || t !== void 0 && fe(e), o = n.hasCompoundNodes();
    if (a && a.isNode())
      if (s)
        for (var u = 0; u < this.length; u++) {
          var l = this[u], c = o ? l.parent() : null, f = c && c.length > 0, v = f;
          f && (c = c[0]);
          var h = v ? c.position() : {
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
Rt.modelPosition = Rt.point = Rt.position;
Rt.modelPositions = Rt.points = Rt.positions;
Rt.renderedPoint = Rt.renderedPosition;
Rt.relativePoint = Rt.relativePosition;
var qp = Sf, Xr, gr;
Xr = gr = {};
gr.renderedBoundingBox = function(r) {
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
gr.dirtyCompoundBoundsCache = function() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, e = this.cy();
  return !e.styleEnabled() || !e.hasCompoundNodes() ? this : (this.forEachUp(function(t) {
    if (t.isParent()) {
      var a = t._private;
      a.compoundBoundsClean = !1, a.bbCache = null, r || t.emitAndNotify("bounds");
    }
  }), this);
};
gr.updateCompoundBounds = function() {
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
    }, f = u.boundingBox({
      includeLabels: l,
      includeOverlays: !1,
      // updating the compound bounds happens outside of the regular
      // cache cycle (i.e. before fired events)
      useCache: !1
    }), v = o.position;
    (f.w === 0 || f.h === 0) && (f = {
      w: s.pstyle("width").pfValue,
      h: s.pstyle("height").pfValue
    }, f.x1 = v.x - f.w / 2, f.x2 = v.x + f.w / 2, f.y1 = v.y - f.h / 2, f.y2 = v.y + f.h / 2);
    function h(D, P, A) {
      var B = 0, k = 0, L = P + A;
      return D > 0 && L > 0 && (B = P / L * D, k = A / L * D), {
        biasDiff: B,
        biasComplementDiff: k
      };
    }
    function d(D, P, A, B) {
      if (A.units === "%")
        switch (B) {
          case "width":
            return D > 0 ? A.pfValue * D : 0;
          case "height":
            return P > 0 ? A.pfValue * P : 0;
          case "average":
            return D > 0 && P > 0 ? A.pfValue * (D + P) / 2 : 0;
          case "min":
            return D > 0 && P > 0 ? D > P ? A.pfValue * P : A.pfValue * D : 0;
          case "max":
            return D > 0 && P > 0 ? D > P ? A.pfValue * D : A.pfValue * P : 0;
          default:
            return 0;
        }
      else
        return A.units === "px" ? A.pfValue : 0;
    }
    var y = c.width.left.value;
    c.width.left.units === "px" && c.width.val > 0 && (y = y * 100 / c.width.val);
    var g = c.width.right.value;
    c.width.right.units === "px" && c.width.val > 0 && (g = g * 100 / c.width.val);
    var p = c.height.top.value;
    c.height.top.units === "px" && c.height.val > 0 && (p = p * 100 / c.height.val);
    var m = c.height.bottom.value;
    c.height.bottom.units === "px" && c.height.val > 0 && (m = m * 100 / c.height.val);
    var b = h(c.width.val - f.w, y, g), w = b.biasDiff, C = b.biasComplementDiff, E = h(c.height.val - f.h, p, m), x = E.biasDiff, T = E.biasComplementDiff;
    o.autoPadding = d(f.w, f.h, s.pstyle("padding"), s.pstyle("padding-relative-to").value), o.autoWidth = Math.max(f.w, c.width.val), v.x = (-w + f.x1 + f.x2 + C) / 2, o.autoHeight = Math.max(f.h, c.height.val), v.y = (-x + f.y1 + f.y2 + T) / 2;
  }
  for (var a = 0; a < this.length; a++) {
    var n = this[a], i = n._private;
    (!i.compoundBoundsClean || r) && (t(n), e.batching() || (i.compoundBoundsClean = !0));
  }
  return this;
};
var St = function(e) {
  return e === 1 / 0 || e === -1 / 0 ? 0 : e;
}, Pt = function(e, t, a, n, i) {
  n - t === 0 || i - a === 0 || t == null || a == null || n == null || i == null || (e.x1 = t < e.x1 ? t : e.x1, e.x2 = n > e.x2 ? n : e.x2, e.y1 = a < e.y1 ? a : e.y1, e.y2 = i > e.y2 ? i : e.y2, e.w = e.x2 - e.x1, e.h = e.y2 - e.y1);
}, wr = function(e, t) {
  return t == null ? e : Pt(e, t.x1, t.y1, t.x2, t.y2);
}, da = function(e, t, a) {
  return Bt(e, t, a);
}, fn = function(e, t, a) {
  if (!t.cy().headless()) {
    var n = t._private, i = n.rstyle, s = i.arrowWidth / 2, o = t.pstyle(a + "-arrow-shape").value, u, l;
    if (o !== "none") {
      a === "source" ? (u = i.srcX, l = i.srcY) : a === "target" ? (u = i.tgtX, l = i.tgtY) : (u = i.midX, l = i.midY);
      var c = n.arrowBounds = n.arrowBounds || {}, f = c[a] = c[a] || {};
      f.x1 = u - s, f.y1 = l - s, f.x2 = u + s, f.y2 = l + s, f.w = f.x2 - f.x1, f.h = f.y2 - f.y1, xn(f, 1), Pt(e, f.x1, f.y1, f.x2, f.y2);
    }
  }
}, Ns = function(e, t, a) {
  if (!t.cy().headless()) {
    var n;
    a ? n = a + "-" : n = "";
    var i = t._private, s = i.rstyle, o = t.pstyle(n + "label").strValue;
    if (o) {
      var u = t.pstyle("text-halign"), l = t.pstyle("text-valign"), c = da(s, "labelWidth", a), f = da(s, "labelHeight", a), v = da(s, "labelX", a), h = da(s, "labelY", a), d = t.pstyle(n + "text-margin-x").pfValue, y = t.pstyle(n + "text-margin-y").pfValue, g = t.isEdge(), p = t.pstyle(n + "text-rotation"), m = t.pstyle("text-outline-width").pfValue, b = t.pstyle("text-border-width").pfValue, w = b / 2, C = t.pstyle("text-background-padding").pfValue, E = 2, x = f, T = c, D = T / 2, P = x / 2, A, B, k, L;
      if (g)
        A = v - D, B = v + D, k = h - P, L = h + P;
      else {
        switch (u.value) {
          case "left":
            A = v - T, B = v;
            break;
          case "center":
            A = v - D, B = v + D;
            break;
          case "right":
            A = v, B = v + T;
            break;
        }
        switch (l.value) {
          case "top":
            k = h - x, L = h;
            break;
          case "center":
            k = h - P, L = h + P;
            break;
          case "bottom":
            k = h, L = h + x;
            break;
        }
      }
      var M = d - Math.max(m, w) - C - E, I = d + Math.max(m, w) + C + E, R = y - Math.max(m, w) - C - E, O = y + Math.max(m, w) + C + E;
      A += M, B += I, k += R, L += O;
      var _ = a || "main", U = i.labelBounds, z = U[_] = U[_] || {};
      z.x1 = A, z.y1 = k, z.x2 = B, z.y2 = L, z.w = B - A, z.h = L - k, z.leftPad = M, z.rightPad = I, z.topPad = R, z.botPad = O;
      var H = g && p.strValue === "autorotate", G = p.pfValue != null && p.pfValue !== 0;
      if (H || G) {
        var Q = H ? da(i.rstyle, "labelAngle", a) : p.pfValue, W = Math.cos(Q), X = Math.sin(Q), Y = (A + B) / 2, ee = (k + L) / 2;
        if (!g) {
          switch (u.value) {
            case "left":
              Y = B;
              break;
            case "right":
              Y = A;
              break;
          }
          switch (l.value) {
            case "top":
              ee = L;
              break;
            case "bottom":
              ee = k;
              break;
          }
        }
        var V = function(Be, oe) {
          return Be = Be - Y, oe = oe - ee, {
            x: Be * W - oe * X + Y,
            y: Be * X + oe * W + ee
          };
        }, N = V(A, k), K = V(A, L), j = V(B, k), te = V(B, L);
        A = Math.min(N.x, K.x, j.x, te.x), B = Math.max(N.x, K.x, j.x, te.x), k = Math.min(N.y, K.y, j.y, te.y), L = Math.max(N.y, K.y, j.y, te.y);
      }
      var se = _ + "Rot", de = U[se] = U[se] || {};
      de.x1 = A, de.y1 = k, de.x2 = B, de.y2 = L, de.w = B - A, de.h = L - k, Pt(e, A, k, B, L), Pt(i.labelBounds.all, A, k, B, L);
    }
    return e;
  }
}, _p = function(e, t) {
  if (!t.cy().headless()) {
    var a = t.pstyle("outline-opacity").value, n = t.pstyle("outline-width").value;
    if (a > 0 && n > 0) {
      var i = t.pstyle("outline-offset").value, s = t.pstyle("shape").value, o = n + i, u = (e.w + o * 2) / e.w, l = (e.h + o * 2) / e.h, c = 0, f = 0;
      ["diamond", "pentagon", "round-triangle"].includes(s) ? (u = (e.w + o * 2.4) / e.w, f = -o / 3.6) : ["concave-hexagon", "rhomboid", "right-rhomboid"].includes(s) ? u = (e.w + o * 2.4) / e.w : s === "star" ? (u = (e.w + o * 2.8) / e.w, l = (e.h + o * 2.6) / e.h, f = -o / 3.8) : s === "triangle" ? (u = (e.w + o * 2.8) / e.w, l = (e.h + o * 2.4) / e.h, f = -o / 1.4) : s === "vee" && (u = (e.w + o * 4.4) / e.w, l = (e.h + o * 3.8) / e.h, f = -o * 0.5);
      var v = e.h * l - e.h, h = e.w * u - e.w;
      if (En(e, [Math.ceil(v / 2), Math.ceil(h / 2)]), c != 0 || f !== 0) {
        var d = kh(e, c, f);
        ef(e, d);
      }
    }
  }
}, Hp = function(e, t) {
  var a = e._private.cy, n = a.styleEnabled(), i = a.headless(), s = bt(), o = e._private, u = e.isNode(), l = e.isEdge(), c, f, v, h, d, y, g = o.rstyle, p = u && n ? e.pstyle("bounds-expansion").pfValue : [0], m = function(De) {
    return De.pstyle("display").value !== "none";
  }, b = !n || m(e) && (!l || m(e.source()) && m(e.target()));
  if (b) {
    var w = 0, C = 0;
    n && t.includeOverlays && (w = e.pstyle("overlay-opacity").value, w !== 0 && (C = e.pstyle("overlay-padding").value));
    var E = 0, x = 0;
    n && t.includeUnderlays && (E = e.pstyle("underlay-opacity").value, E !== 0 && (x = e.pstyle("underlay-padding").value));
    var T = Math.max(C, x), D = 0, P = 0;
    if (n && (D = e.pstyle("width").pfValue, P = D / 2), u && t.includeNodes) {
      var A = e.position();
      d = A.x, y = A.y;
      var B = e.outerWidth(), k = B / 2, L = e.outerHeight(), M = L / 2;
      c = d - k, f = d + k, v = y - M, h = y + M, Pt(s, c, v, f, h), n && t.includeOutlines && _p(s, e);
    } else if (l && t.includeEdges)
      if (n && !i) {
        var I = e.pstyle("curve-style").strValue;
        if (c = Math.min(g.srcX, g.midX, g.tgtX), f = Math.max(g.srcX, g.midX, g.tgtX), v = Math.min(g.srcY, g.midY, g.tgtY), h = Math.max(g.srcY, g.midY, g.tgtY), c -= P, f += P, v -= P, h += P, Pt(s, c, v, f, h), I === "haystack") {
          var R = g.haystackPts;
          if (R && R.length === 2) {
            if (c = R[0].x, v = R[0].y, f = R[1].x, h = R[1].y, c > f) {
              var O = c;
              c = f, f = O;
            }
            if (v > h) {
              var _ = v;
              v = h, h = _;
            }
            Pt(s, c - P, v - P, f + P, h + P);
          }
        } else if (I === "bezier" || I === "unbundled-bezier" || I.endsWith("segments") || I.endsWith("taxi")) {
          var U;
          switch (I) {
            case "bezier":
            case "unbundled-bezier":
              U = g.bezierPts;
              break;
            case "segments":
            case "taxi":
            case "round-segments":
            case "round-taxi":
              U = g.linePts;
              break;
          }
          if (U != null)
            for (var z = 0; z < U.length; z++) {
              var H = U[z];
              c = H.x - P, f = H.x + P, v = H.y - P, h = H.y + P, Pt(s, c, v, f, h);
            }
        }
      } else {
        var G = e.source(), Q = G.position(), W = e.target(), X = W.position();
        if (c = Q.x, f = X.x, v = Q.y, h = X.y, c > f) {
          var Y = c;
          c = f, f = Y;
        }
        if (v > h) {
          var ee = v;
          v = h, h = ee;
        }
        c -= P, f += P, v -= P, h += P, Pt(s, c, v, f, h);
      }
    if (n && t.includeEdges && l && (fn(s, e, "mid-source"), fn(s, e, "mid-target"), fn(s, e, "source"), fn(s, e, "target")), n) {
      var V = e.pstyle("ghost").value === "yes";
      if (V) {
        var N = e.pstyle("ghost-offset-x").pfValue, K = e.pstyle("ghost-offset-y").pfValue;
        Pt(s, s.x1 + N, s.y1 + K, s.x2 + N, s.y2 + K);
      }
    }
    var j = o.bodyBounds = o.bodyBounds || {};
    wu(j, s), En(j, p), xn(j, 1), n && (c = s.x1, f = s.x2, v = s.y1, h = s.y2, Pt(s, c - T, v - T, f + T, h + T));
    var te = o.overlayBounds = o.overlayBounds || {};
    wu(te, s), En(te, p), xn(te, 1);
    var se = o.labelBounds = o.labelBounds || {};
    se.all != null ? Ah(se.all) : se.all = bt(), n && t.includeLabels && (t.includeMainLabels && Ns(s, e, null), l && (t.includeSourceLabels && Ns(s, e, "source"), t.includeTargetLabels && Ns(s, e, "target")));
  }
  return s.x1 = St(s.x1), s.y1 = St(s.y1), s.x2 = St(s.x2), s.y2 = St(s.y2), s.w = St(s.x2 - s.x1), s.h = St(s.y2 - s.y1), s.w > 0 && s.h > 0 && b && (En(s, p), xn(s, 1)), s;
}, kf = function(e) {
  var t = 0, a = function(s) {
    return (s ? 1 : 0) << t++;
  }, n = 0;
  return n += a(e.incudeNodes), n += a(e.includeEdges), n += a(e.includeLabels), n += a(e.includeMainLabels), n += a(e.includeSourceLabels), n += a(e.includeTargetLabels), n += a(e.includeOverlays), n += a(e.includeOutlines), n;
}, Df = function(e) {
  if (e.isEdge()) {
    var t = e.source().position(), a = e.target().position(), n = function(s) {
      return Math.round(s);
    };
    return Ud([n(t.x), n(t.y), n(a.x), n(a.y)]);
  } else
    return 0;
}, Il = function(e, t) {
  var a = e._private, n, i = e.isEdge(), s = t == null ? Ol : kf(t), o = s === Ol, u = Df(e), l = a.bbCachePosKey === u, c = t.useCache, f = function(y) {
    return y._private.bbCache == null || y._private.styleDirty;
  }, v = !c || f(e) || i && (f(e.source()) || f(e.target()));
  if (v ? (l || e.recalculateRenderedStyle(c), n = Hp(e, Fa), a.bbCache = n, a.bbCachePosKey = u) : n = a.bbCache, !o) {
    var h = e.isNode();
    n = bt(), (t.includeNodes && h || t.includeEdges && !h) && (t.includeOverlays ? wr(n, a.overlayBounds) : wr(n, a.bodyBounds)), t.includeLabels && (t.includeMainLabels && (!i || t.includeSourceLabels && t.includeTargetLabels) ? wr(n, a.labelBounds.all) : (t.includeMainLabels && wr(n, a.labelBounds.mainRot), t.includeSourceLabels && wr(n, a.labelBounds.sourceRot), t.includeTargetLabels && wr(n, a.labelBounds.targetRot))), n.w = n.x2 - n.x1, n.h = n.y2 - n.y1;
  }
  return n;
}, Fa = {
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
}, Ol = kf(Fa), Nl = Ze(Fa);
gr.boundingBox = function(r) {
  var e;
  if (this.length === 1 && this[0]._private.bbCache != null && !this[0]._private.styleDirty && (r === void 0 || r.useCache === void 0 || r.useCache === !0))
    r === void 0 ? r = Fa : r = Nl(r), e = Il(this[0], r);
  else {
    e = bt(), r = r || Fa;
    var t = Nl(r), a = this, n = a.cy(), i = n.styleEnabled();
    if (i)
      for (var s = 0; s < a.length; s++) {
        var o = a[s], u = o._private, l = Df(o), c = u.bbCachePosKey === l, f = t.useCache && c && !u.styleDirty;
        o.recalculateRenderedStyle(f);
      }
    this.updateCompoundBounds(!r.useCache);
    for (var v = 0; v < a.length; v++) {
      var h = a[v];
      wr(e, Il(h, t));
    }
  }
  return e.x1 = St(e.x1), e.y1 = St(e.y1), e.x2 = St(e.x2), e.y2 = St(e.y2), e.w = St(e.x2 - e.x1), e.h = St(e.y2 - e.y1), e;
};
gr.dirtyBoundingBoxCache = function() {
  for (var r = 0; r < this.length; r++) {
    var e = this[r]._private;
    e.bbCache = null, e.bbCachePosKey = null, e.bodyBounds = null, e.overlayBounds = null, e.labelBounds.all = null, e.labelBounds.source = null, e.labelBounds.target = null, e.labelBounds.main = null, e.labelBounds.sourceRot = null, e.labelBounds.targetRot = null, e.labelBounds.mainRot = null, e.arrowBounds.source = null, e.arrowBounds.target = null, e.arrowBounds["mid-source"] = null, e.arrowBounds["mid-target"] = null;
  }
  return this.emitAndNotify("bounds"), this;
};
gr.boundingBoxAt = function(r) {
  var e = this.nodes(), t = this.cy(), a = t.hasCompoundNodes(), n = t.collection();
  if (a && (n = e.filter(function(l) {
    return l.isParent();
  }), e = e.not(n)), ke(r)) {
    var i = r;
    r = function() {
      return i;
    };
  }
  var s = function(c, f) {
    return c._private.bbAtOldPos = r(c, f);
  }, o = function(c) {
    return c._private.bbAtOldPos;
  };
  t.startBatch(), e.forEach(s).silentPositions(r), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0));
  var u = Sh(this.boundingBox({
    useCache: !1
  }));
  return e.silentPositions(o), a && (n.dirtyCompoundBoundsCache(), n.dirtyBoundingBoxCache(), n.updateCompoundBounds(!0)), t.endBatch(), u;
};
Xr.boundingbox = Xr.bb = Xr.boundingBox;
Xr.renderedBoundingbox = Xr.renderedBoundingBox;
var Up = gr, wa, Ya;
wa = Ya = {};
var Pf = function(e) {
  e.uppercaseName = eu(e.name), e.autoName = "auto" + e.uppercaseName, e.labelName = "label" + e.uppercaseName, e.outerName = "outer" + e.uppercaseName, e.uppercaseOuterName = eu(e.outerName), wa[e.name] = function() {
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
  }, wa["outer" + e.uppercaseName] = function() {
    var a = this[0], n = a._private, i = n.cy, s = i._private.styleEnabled;
    if (a)
      if (s) {
        var o = a[e.name](), u = a.pstyle("border-width").pfValue, l = 2 * a.padding();
        return o + u + l;
      } else
        return 1;
  }, wa["rendered" + e.uppercaseName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.name]();
      return n * this.cy().zoom();
    }
  }, wa["rendered" + e.uppercaseOuterName] = function() {
    var a = this[0];
    if (a) {
      var n = a[e.outerName]();
      return n * this.cy().zoom();
    }
  };
};
Pf({
  name: "width"
});
Pf({
  name: "height"
});
Ya.padding = function() {
  var r = this[0], e = r._private;
  return r.isParent() ? (r.updateCompoundBounds(), e.autoPadding !== void 0 ? e.autoPadding : r.pstyle("padding").pfValue) : r.pstyle("padding").pfValue;
};
Ya.paddedHeight = function() {
  var r = this[0];
  return r.height() + 2 * r.padding();
};
Ya.paddedWidth = function() {
  var r = this[0];
  return r.width() + 2 * r.padding();
};
var Gp = Ya, Kp = function(e, t) {
  if (e.isEdge() && e.takesUpSpace())
    return t(e);
}, Wp = function(e, t) {
  if (e.isEdge() && e.takesUpSpace()) {
    var a = e.cy();
    return Qn(t(e), a.zoom(), a.pan());
  }
}, Zp = function(e, t) {
  if (e.isEdge() && e.takesUpSpace()) {
    var a = e.cy(), n = a.pan(), i = a.zoom();
    return t(e).map(function(s) {
      return Qn(s, i, n);
    });
  }
}, Yp = function(e) {
  return e.renderer().getControlPoints(e);
}, Xp = function(e) {
  return e.renderer().getSegmentPoints(e);
}, Qp = function(e) {
  return e.renderer().getSourceEndpoint(e);
}, Jp = function(e) {
  return e.renderer().getTargetEndpoint(e);
}, jp = function(e) {
  return e.renderer().getEdgeMidpoint(e);
}, zl = {
  controlPoints: {
    get: Yp,
    mult: !0
  },
  segmentPoints: {
    get: Xp,
    mult: !0
  },
  sourceEndpoint: {
    get: Qp
  },
  targetEndpoint: {
    get: Jp
  },
  midpoint: {
    get: jp
  }
}, ey = function(e) {
  return "rendered" + e[0].toUpperCase() + e.substr(1);
}, ty = Object.keys(zl).reduce(function(r, e) {
  var t = zl[e], a = ey(e);
  return r[e] = function() {
    return Kp(this, t.get);
  }, t.mult ? r[a] = function() {
    return Zp(this, t.get);
  } : r[a] = function() {
    return Wp(this, t.get);
  }, r;
}, {}), ry = pe({}, qp, Up, Gp, ty);
/*!
Event object based on jQuery events, MIT license

https://jquery.org/license/
https://tldrlegal.com/license/mit-license
https://github.com/jquery/jquery/blob/master/src/event.js
*/
var Bf = function(e, t) {
  this.recycle(e, t);
};
function ha() {
  return !1;
}
function vn() {
  return !0;
}
Bf.prototype = {
  instanceString: function() {
    return "event";
  },
  recycle: function(e, t) {
    if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = ha, e != null && e.preventDefault ? (this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? vn : ha) : e != null && e.type ? t = e : this.type = e, t != null && (this.originalEvent = t.originalEvent, this.type = t.type != null ? t.type : this.type, this.cy = t.cy, this.target = t.target, this.position = t.position, this.renderedPosition = t.renderedPosition, this.namespace = t.namespace, this.layout = t.layout), this.cy != null && this.position != null && this.renderedPosition == null) {
      var a = this.position, n = this.cy.zoom(), i = this.cy.pan();
      this.renderedPosition = {
        x: a.x * n + i.x,
        y: a.y * n + i.y
      };
    }
    this.timeStamp = e && e.timeStamp || Date.now();
  },
  preventDefault: function() {
    this.isDefaultPrevented = vn;
    var e = this.originalEvent;
    e && e.preventDefault && e.preventDefault();
  },
  stopPropagation: function() {
    this.isPropagationStopped = vn;
    var e = this.originalEvent;
    e && e.stopPropagation && e.stopPropagation();
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = vn, this.stopPropagation();
  },
  isDefaultPrevented: ha,
  isPropagationStopped: ha,
  isImmediatePropagationStopped: ha
};
var Lf = /^([^.]+)(\.(?:[^.]+))?$/, ay = ".*", Rf = {
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
}, Fl = Object.keys(Rf), ny = {};
function ni() {
  for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ny, e = arguments.length > 1 ? arguments[1] : void 0, t = 0; t < Fl.length; t++) {
    var a = Fl[t];
    this[a] = r[a] || Rf[a];
  }
  this.context = e || this.context, this.listeners = [], this.emitting = 0;
}
var vr = ni.prototype, Mf = function(e, t, a, n, i, s, o) {
  _e(n) && (i = n, n = null), o && (s == null ? s = o : s = pe({}, s, o));
  for (var u = Ie(a) ? a : a.split(/\s+/), l = 0; l < u.length; l++) {
    var c = u[l];
    if (!or(c)) {
      var f = c.match(Lf);
      if (f) {
        var v = f[1], h = f[2] ? f[2] : null, d = t(e, c, v, h, n, i, s);
        if (d === !1)
          break;
      }
    }
  }
}, $l = function(e, t) {
  return e.addEventFields(e.context, t), new Bf(t.type, t);
}, iy = function(e, t, a) {
  if (gd(a)) {
    t(e, a);
    return;
  } else if (ke(a)) {
    t(e, $l(e, a));
    return;
  }
  for (var n = Ie(a) ? a : a.split(/\s+/), i = 0; i < n.length; i++) {
    var s = n[i];
    if (!or(s)) {
      var o = s.match(Lf);
      if (o) {
        var u = o[1], l = o[2] ? o[2] : null, c = $l(e, {
          type: u,
          namespace: l,
          target: e.context
        });
        t(e, c);
      }
    }
  }
};
vr.on = vr.addListener = function(r, e, t, a, n) {
  return Mf(this, function(i, s, o, u, l, c, f) {
    _e(c) && i.listeners.push({
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
      conf: f
      // additional configuration
    });
  }, r, e, t, a, n), this;
};
vr.one = function(r, e, t, a) {
  return this.on(r, e, t, a, {
    one: !0
  });
};
vr.removeListener = vr.off = function(r, e, t, a) {
  var n = this;
  this.emitting !== 0 && (this.listeners = Yd(this.listeners));
  for (var i = this.listeners, s = function(l) {
    var c = i[l];
    Mf(n, function(f, v, h, d, y, g) {
      if ((c.type === h || r === "*") && (!d && c.namespace !== ".*" || c.namespace === d) && (!y || f.qualifierCompare(c.qualifier, y)) && (!g || c.callback === g))
        return i.splice(l, 1), !1;
    }, r, e, t, a);
  }, o = i.length - 1; o >= 0; o--)
    s(o);
  return this;
};
vr.removeAllListeners = function() {
  return this.removeListener("*");
};
vr.emit = vr.trigger = function(r, e, t) {
  var a = this.listeners, n = a.length;
  return this.emitting++, Ie(e) || (e = [e]), iy(this, function(i, s) {
    t != null && (a = [{
      event: s.event,
      type: s.type,
      namespace: s.namespace,
      callback: t
    }], n = a.length);
    for (var o = function() {
      var c = a[u];
      if (c.type === s.type && (!c.namespace || c.namespace === s.namespace || c.namespace === ay) && i.eventMatches(i.context, c, s)) {
        var f = [s];
        e != null && Qd(f, e), i.beforeEmit(i.context, c, s), c.conf && c.conf.one && (i.listeners = i.listeners.filter(function(d) {
          return d !== c;
        }));
        var v = i.callbackContext(i.context, c, s), h = c.callback.apply(v, f);
        i.afterEmit(i.context, c, s), h === !1 && (s.stopPropagation(), s.preventDefault());
      }
    }, u = 0; u < n; u++)
      o();
    i.bubble(i.context) && !s.isPropagationStopped() && i.parent(i.context).emit(s, e);
  }, r), this.emitting--, this;
};
var sy = {
  qualifierCompare: function(e, t) {
    return e == null || t == null ? e == null && t == null : e.sameText(t);
  },
  eventMatches: function(e, t, a) {
    var n = t.qualifier;
    return n != null ? e !== a.target && Ha(a.target) && n.matches(a.target) : !0;
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
}, dn = function(e) {
  return fe(e) ? new cr(e) : e;
}, If = {
  createEmitter: function() {
    for (var e = 0; e < this.length; e++) {
      var t = this[e], a = t._private;
      a.emitter || (a.emitter = new ni(sy, t));
    }
    return this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, t, a) {
    for (var n = dn(t), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().on(e, n, a);
    }
    return this;
  },
  removeListener: function(e, t, a) {
    for (var n = dn(t), i = 0; i < this.length; i++) {
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
    for (var n = dn(t), i = 0; i < this.length; i++) {
      var s = this[i];
      s.emitter().one(e, n, a);
    }
    return this;
  },
  once: function(e, t, a) {
    for (var n = dn(t), i = 0; i < this.length; i++) {
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
Le.eventAliasesOn(If);
var Of = {
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
    if (fe(e) || Et(e))
      return new cr(e).filter(this);
    if (_e(e)) {
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
      fe(e) && (e = this.filter(e));
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
    if (fe(e)) {
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
    fe(e) && (e = t.$(e));
    var a = this.spawn(), n = this, i = e, s = function(u, l) {
      for (var c = 0; c < u.length; c++) {
        var f = u[c], v = f._private.data.id, h = l.hasElementWithId(v);
        h || a.push(f);
      }
    };
    return s(n, i), s(i, n), a;
  },
  diff: function(e) {
    var t = this._private.cy;
    fe(e) && (e = t.$(e));
    var a = this.spawn(), n = this.spawn(), i = this.spawn(), s = this, o = e, u = function(c, f, v) {
      for (var h = 0; h < c.length; h++) {
        var d = c[h], y = d._private.data.id, g = f.hasElementWithId(y);
        g ? i.merge(d) : v.push(d);
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
    if (fe(e)) {
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
    if (e && fe(e)) {
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
    if (e && fe(e)) {
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
}, Pe = Of;
Pe.u = Pe["|"] = Pe["+"] = Pe.union = Pe.or = Pe.add;
Pe["\\"] = Pe["!"] = Pe["-"] = Pe.difference = Pe.relativeComplement = Pe.subtract = Pe.not;
Pe.n = Pe["&"] = Pe["."] = Pe.and = Pe.intersection = Pe.intersect;
Pe["^"] = Pe["(+)"] = Pe["(-)"] = Pe.symmetricDifference = Pe.symdiff = Pe.xor;
Pe.fnFilter = Pe.filterFn = Pe.stdFilter = Pe.filter;
Pe.complement = Pe.abscomp = Pe.absoluteComplement;
var oy = {
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
}, Nf = function(e, t) {
  var a = e.cy(), n = a.hasCompoundNodes();
  function i(c) {
    var f = c.pstyle("z-compound-depth");
    return f.value === "auto" ? n ? c.zDepth() : 0 : f.value === "bottom" ? -1 : f.value === "top" ? mo : 0;
  }
  var s = i(e) - i(t);
  if (s !== 0)
    return s;
  function o(c) {
    var f = c.pstyle("z-index-compare");
    return f.value === "auto" && c.isNode() ? 1 : 0;
  }
  var u = o(e) - o(t);
  if (u !== 0)
    return u;
  var l = e.pstyle("z-index").value - t.pstyle("z-index").value;
  return l !== 0 ? l : e.poolIndex() - t.poolIndex();
}, $n = {
  forEach: function(e, t) {
    if (_e(e))
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
    if (!_e(e))
      return this;
    var t = this.toArray().sort(e);
    return this.spawn(t);
  },
  sortByZIndex: function() {
    return this.sort(Nf);
  },
  zDepth: function() {
    var e = this[0];
    if (e) {
      var t = e._private, a = t.group;
      if (a === "nodes") {
        var n = t.data.parent ? e.parents().size() : 0;
        return e.isParent() ? n : mo - 1;
      } else {
        var i = t.source, s = t.target, o = i.zDepth(), u = s.zDepth();
        return Math.max(o, u, 0);
      }
    }
  }
};
$n.each = $n.forEach;
var uy = function() {
  var e = "undefined", t = (typeof Symbol > "u" ? "undefined" : We(Symbol)) != e && We(Symbol.iterator) != e;
  t && ($n[Symbol.iterator] = function() {
    var a = this, n = {
      value: void 0,
      done: !1
    }, i = 0, s = this.length;
    return Rc({
      next: function() {
        return i < s ? n.value = a[i++] : (n.value = void 0, n.done = !0), n;
      }
    }, Symbol.iterator, function() {
      return this;
    });
  });
};
uy();
var ly = Ze({
  nodeDimensionsIncludeLabels: !1
}), Tn = {
  // Calculates and returns node dimensions { x, y } based on options given
  layoutDimensions: function(e) {
    e = ly(e);
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
    var n = this.nodes().filter(function(C) {
      return !C.isParent();
    }), i = this.cy(), s = t.eles, o = function(E) {
      return E.id();
    }, u = La(a, o);
    e.emit({
      type: "layoutstart",
      layout: e
    }), e.animations = [];
    var l = function(E, x, T) {
      var D = {
        x: x.x1 + x.w / 2,
        y: x.y1 + x.h / 2
      }, P = {
        // scale from center of bounding box (not necessarily 0,0)
        x: (T.x - D.x) * E,
        y: (T.y - D.y) * E
      };
      return {
        x: D.x + P.x,
        y: D.y + P.y
      };
    }, c = t.spacingFactor && t.spacingFactor !== 1, f = function() {
      if (!c)
        return null;
      for (var E = bt(), x = 0; x < n.length; x++) {
        var T = n[x], D = u(T, x);
        Dh(E, D.x, D.y);
      }
      return E;
    }, v = f(), h = La(function(C, E) {
      var x = u(C, E);
      if (c) {
        var T = Math.abs(t.spacingFactor);
        x = l(T, v, x);
      }
      return t.transform != null && (x = t.transform(C, x)), x;
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
      e.animations.forEach(function(C) {
        return C.play();
      }), e.one("layoutready", t.ready), e.emit({
        type: "layoutready",
        layout: e
      }), aa.all(e.animations.map(function(C) {
        return C.promise();
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
    return t.makeLayout(pe({}, e, {
      eles: this
    }));
  }
};
Tn.createLayout = Tn.makeLayout = Tn.layout;
function zf(r, e, t) {
  var a = t._private, n = a.styleCache = a.styleCache || [], i;
  return (i = n[r]) != null || (i = n[r] = e(t)), i;
}
function ii(r, e) {
  return r = ur(r), function(a) {
    return zf(r, e, a);
  };
}
function si(r, e) {
  r = ur(r);
  var t = function(n) {
    return e.call(n);
  };
  return function() {
    var n = this[0];
    if (n)
      return zf(r, t, n);
  };
}
var it = {
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
    if (ke(e)) {
      var s = e;
      i.applyBypass(this, s, n), this.emitAndNotify("style");
    } else if (fe(e))
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
function zs(r, e) {
  var t = r._private, a = t.data.parent ? r.parents() : null;
  if (a)
    for (var n = 0; n < a.length; n++) {
      var i = a[n];
      if (!e(i))
        return !1;
    }
  return !0;
}
function Po(r) {
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
        return !s || zs(i, a);
      var u = o.source, l = o.target;
      return t(u) && (!s || zs(u, t)) && (u === l || t(l) && (!s || zs(l, t)));
    }
  };
}
var na = ii("eleTakesUpSpace", function(r) {
  return r.pstyle("display").value === "element" && r.width() !== 0 && (r.isNode() ? r.height() !== 0 : !0);
});
it.takesUpSpace = si("takesUpSpace", Po({
  ok: na
}));
var cy = ii("eleInteractive", function(r) {
  return r.pstyle("events").value === "yes" && r.pstyle("visibility").value === "visible" && na(r);
}), fy = ii("parentInteractive", function(r) {
  return r.pstyle("visibility").value === "visible" && na(r);
});
it.interactive = si("interactive", Po({
  ok: cy,
  parentOk: fy,
  edgeOkViaNode: na
}));
it.noninteractive = function() {
  var r = this[0];
  if (r)
    return !r.interactive();
};
var vy = ii("eleVisible", function(r) {
  return r.pstyle("visibility").value === "visible" && r.pstyle("opacity").pfValue !== 0 && na(r);
}), dy = na;
it.visible = si("visible", Po({
  ok: vy,
  edgeOkViaNode: dy
}));
it.hidden = function() {
  var r = this[0];
  if (r)
    return !r.visible();
};
it.isBundledBezier = si("isBundledBezier", function() {
  return this.cy().styleEnabled() ? !this.removed() && this.pstyle("curve-style").value === "bezier" && this.takesUpSpace() : !1;
});
it.bypass = it.css = it.style;
it.renderedCss = it.renderedStyle;
it.removeBypass = it.removeCss = it.removeStyle;
it.pstyle = it.parsedStyle;
var sr = {};
function Vl(r) {
  return function() {
    var e = arguments, t = [];
    if (e.length === 2) {
      var a = e[0], n = e[1];
      this.on(r.event, a, n);
    } else if (e.length === 1 && _e(e[0])) {
      var i = e[0];
      this.on(r.event, i);
    } else if (e.length === 0 || e.length === 1 && Ie(e[0])) {
      for (var s = e.length === 1 ? e[0] : null, o = 0; o < this.length; o++) {
        var u = this[o], l = !r.ableField || u._private[r.ableField], c = u._private[r.field] != r.value;
        if (r.overrideAble) {
          var f = r.overrideAble(u);
          if (f !== void 0 && (l = f, !f))
            return this;
        }
        l && (u._private[r.field] = r.value, c && t.push(u));
      }
      var v = this.spawn(t);
      v.updateStyle(), v.emit(r.event), s && v.emit(s);
    }
    return this;
  };
}
function ia(r) {
  sr[r.field] = function() {
    var e = this[0];
    if (e) {
      if (r.overrideField) {
        var t = r.overrideField(e);
        if (t !== void 0)
          return t;
      }
      return e._private[r.field];
    }
  }, sr[r.on] = Vl({
    event: r.on,
    field: r.field,
    ableField: r.ableField,
    overrideAble: r.overrideAble,
    value: !0
  }), sr[r.off] = Vl({
    event: r.off,
    field: r.field,
    ableField: r.ableField,
    overrideAble: r.overrideAble,
    value: !1
  });
}
ia({
  field: "locked",
  overrideField: function(e) {
    return e.cy().autolock() ? !0 : void 0;
  },
  on: "lock",
  off: "unlock"
});
ia({
  field: "grabbable",
  overrideField: function(e) {
    return e.cy().autoungrabify() || e.pannable() ? !1 : void 0;
  },
  on: "grabify",
  off: "ungrabify"
});
ia({
  field: "selected",
  ableField: "selectable",
  overrideAble: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "select",
  off: "unselect"
});
ia({
  field: "selectable",
  overrideField: function(e) {
    return e.cy().autounselectify() ? !1 : void 0;
  },
  on: "selectify",
  off: "unselectify"
});
sr.deselect = sr.unselect;
sr.grabbed = function() {
  var r = this[0];
  if (r)
    return r._private.grabbed;
};
ia({
  field: "active",
  on: "activate",
  off: "unactivate"
});
ia({
  field: "pannable",
  on: "panify",
  off: "unpanify"
});
sr.inactive = function() {
  var r = this[0];
  if (r)
    return !r._private.active;
};
var ct = {}, ql = function(e) {
  return function(a) {
    for (var n = this, i = [], s = 0; s < n.length; s++) {
      var o = n[s];
      if (o.isNode()) {
        for (var u = !1, l = o.connectedEdges(), c = 0; c < l.length; c++) {
          var f = l[c], v = f.source(), h = f.target();
          if (e.noIncomingEdges && h === o && v !== o || e.noOutgoingEdges && v === o && h !== o) {
            u = !0;
            break;
          }
        }
        u || i.push(o);
      }
    }
    return this.spawn(i, !0).filter(a);
  };
}, _l = function(e) {
  return function(t) {
    for (var a = this, n = [], i = 0; i < a.length; i++) {
      var s = a[i];
      if (s.isNode())
        for (var o = s.connectedEdges(), u = 0; u < o.length; u++) {
          var l = o[u], c = l.source(), f = l.target();
          e.outgoing && c === s ? (n.push(l), n.push(f)) : e.incoming && f === s && (n.push(l), n.push(c));
        }
    }
    return this.spawn(n, !0).filter(t);
  };
}, Hl = function(e) {
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
ct.clearTraversalCache = function() {
  for (var r = 0; r < this.length; r++)
    this[r]._private.traversalCache = null;
};
pe(ct, {
  // get the root nodes in the DAG
  roots: ql({
    noIncomingEdges: !0
  }),
  // get the leaf nodes in the DAG
  leaves: ql({
    noOutgoingEdges: !0
  }),
  // normally called children in graph theory
  // these nodes =edges=> outgoing nodes
  outgoers: At(_l({
    outgoing: !0
  }), "outgoers"),
  // aka DAG descendants
  successors: Hl({
    outgoing: !0
  }),
  // normally called parents in graph theory
  // these nodes <=edges= incoming nodes
  incomers: At(_l({
    incoming: !0
  }), "incomers"),
  // aka DAG ancestors
  predecessors: Hl({})
});
pe(ct, {
  neighborhood: At(function(r) {
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
ct.neighbourhood = ct.neighborhood;
ct.closedNeighbourhood = ct.closedNeighborhood;
ct.openNeighbourhood = ct.openNeighborhood;
pe(ct, {
  source: At(function(e) {
    var t = this[0], a;
    return t && (a = t._private.source || t.cy().collection()), a && e ? a.filter(e) : a;
  }, "source"),
  target: At(function(e) {
    var t = this[0], a;
    return t && (a = t._private.target || t.cy().collection()), a && e ? a.filter(e) : a;
  }, "target"),
  sources: Ul({
    attr: "source"
  }),
  targets: Ul({
    attr: "target"
  })
});
function Ul(r) {
  return function(t) {
    for (var a = [], n = 0; n < this.length; n++) {
      var i = this[n], s = i._private[r.attr];
      s && a.push(s);
    }
    return this.spawn(a, !0).filter(t);
  };
}
pe(ct, {
  edgesWith: At(Gl(), "edgesWith"),
  edgesTo: At(Gl({
    thisIsSrc: !0
  }), "edgesTo")
});
function Gl(r) {
  return function(t) {
    var a = [], n = this._private.cy, i = r || {};
    fe(t) && (t = n.$(t));
    for (var s = 0; s < t.length; s++)
      for (var o = t[s]._private.edges, u = 0; u < o.length; u++) {
        var l = o[u], c = l._private.data, f = this.hasElementWithId(c.source) && t.hasElementWithId(c.target), v = t.hasElementWithId(c.source) && this.hasElementWithId(c.target), h = f || v;
        h && ((i.thisIsSrc || i.thisIsTgt) && (i.thisIsSrc && !f || i.thisIsTgt && !v) || a.push(l));
      }
    return this.spawn(a, !0);
  };
}
pe(ct, {
  connectedEdges: At(function(r) {
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
  connectedNodes: At(function(r) {
    for (var e = [], t = this, a = 0; a < t.length; a++) {
      var n = t[a];
      n.isEdge() && (e.push(n.source()[0]), e.push(n.target()[0]));
    }
    return this.spawn(e, !0).filter(r);
  }, "connectedNodes"),
  parallelEdges: At(Kl(), "parallelEdges"),
  codirectedEdges: At(Kl({
    codirected: !0
  }), "codirectedEdges")
});
function Kl(r) {
  var e = {
    codirected: !1
  };
  return r = pe({}, e, r), function(a) {
    for (var n = [], i = this.edges(), s = r, o = 0; o < i.length; o++)
      for (var u = i[o], l = u._private, c = l.source, f = c._private.data.id, v = l.data.target, h = c._private.edges, d = 0; d < h.length; d++) {
        var y = h[d], g = y._private.data, p = g.target, m = g.source, b = p === v && m === f, w = f === p && v === m;
        (s.codirected && b || !s.codirected && (b || w)) && n.push(y);
      }
    return this.spawn(n, !0).filter(a);
  };
}
pe(ct, {
  components: function(e) {
    var t = this, a = t.cy(), n = a.collection(), i = e == null ? t.nodes() : e.nodes(), s = [];
    e != null && i.empty() && (i = e.sources());
    var o = function(c, f) {
      n.merge(c), i.unmerge(c), f.merge(c);
    };
    if (i.empty())
      return t.spawn();
    var u = function() {
      var c = a.collection();
      s.push(c);
      var f = i[0];
      o(f, c), t.bfs({
        directed: !1,
        roots: f,
        visit: function(h) {
          return o(h, c);
        }
      }), c.forEach(function(v) {
        v.connectedEdges().forEach(function(h) {
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
ct.componentsOf = ct.components;
var st = function(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (e === void 0) {
    qe("A collection must have a reference to the core");
    return;
  }
  var i = new Wt(), s = !1;
  if (!t)
    t = [];
  else if (t.length > 0 && ke(t[0]) && !Ha(t[0])) {
    s = !0;
    for (var o = [], u = new ra(), l = 0, c = t.length; l < c; l++) {
      var f = t[l];
      f.data == null && (f.data = {});
      var v = f.data;
      if (v.id == null)
        v.id = Xc();
      else if (e.hasElementWithId(v.id) || u.has(v.id))
        continue;
      var h = new Xn(e, f, !1);
      o.push(h), u.add(v.id);
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
      for (var b = this.lazyMap = new Wt(), w = this.eles, C = 0; C < w.length; C++) {
        var E = w[C];
        b.set(E.id(), {
          index: C,
          ele: E
        });
      }
    }
  }, a && (this._private.map = i), s && !n && this.restore();
}, ze = Xn.prototype = st.prototype = Object.create(Array.prototype);
ze.instanceString = function() {
  return "collection";
};
ze.spawn = function(r, e) {
  return new st(this.cy(), r, e);
};
ze.spawnSelf = function() {
  return this.spawn(this);
};
ze.cy = function() {
  return this._private.cy;
};
ze.renderer = function() {
  return this._private.cy.renderer();
};
ze.element = function() {
  return this[0];
};
ze.collection = function() {
  return Nc(this) ? this : new st(this._private.cy, [this]);
};
ze.unique = function() {
  return new st(this._private.cy, this, !0);
};
ze.hasElementWithId = function(r) {
  return r = "" + r, this._private.map.has(r);
};
ze.getElementById = function(r) {
  r = "" + r;
  var e = this._private.cy, t = this._private.map.get(r);
  return t ? t.ele : new st(e);
};
ze.$id = ze.getElementById;
ze.poolIndex = function() {
  var r = this._private.cy, e = r._private.elements, t = this[0]._private.data.id;
  return e._private.map.get(t).index;
};
ze.indexOf = function(r) {
  var e = r[0]._private.data.id;
  return this._private.map.get(e).index;
};
ze.indexOfId = function(r) {
  return r = "" + r, this._private.map.get(r).index;
};
ze.json = function(r) {
  var e = this.element(), t = this.cy();
  if (e == null && r)
    return this;
  if (e != null) {
    var a = e._private;
    if (ke(r)) {
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
      var f = function(y, g, p) {
        var m = r[y];
        m != null && m !== a[y] && (m ? e[g]() : e[p]());
      };
      return f("removed", "remove", "restore"), f("selected", "select", "unselect"), f("selectable", "selectify", "unselectify"), f("locked", "lock", "unlock"), f("grabbable", "grabify", "ungrabify"), f("pannable", "panify", "unpanify"), r.classes != null && e.classes(r.classes), t.endBatch(), this;
    } else if (r === void 0) {
      var v = {
        data: Vt(a.data),
        position: Vt(a.position),
        group: a.group,
        removed: a.removed,
        selected: a.selected,
        selectable: a.selectable,
        locked: a.locked,
        grabbable: a.grabbable,
        pannable: a.pannable,
        classes: null
      };
      v.classes = "";
      var h = 0;
      return a.classes.forEach(function(d) {
        return v.classes += h++ === 0 ? d : " " + d;
      }), v;
    }
  }
};
ze.jsons = function() {
  for (var r = [], e = 0; e < this.length; e++) {
    var t = this[e], a = t.json();
    r.push(a);
  }
  return r;
};
ze.clone = function() {
  for (var r = this.cy(), e = [], t = 0; t < this.length; t++) {
    var a = this[t], n = a.json(), i = new Xn(r, n, !1);
    e.push(i);
  }
  return new st(r, e);
};
ze.copy = ze.clone;
ze.restore = function() {
  for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t = this, a = t.cy(), n = a._private, i = [], s = [], o, u = 0, l = t.length; u < l; u++) {
    var c = t[u];
    e && !c.removed() || (c.isNode() ? i.push(c) : s.push(c));
  }
  o = i.concat(s);
  var f, v = function() {
    o.splice(f, 1), f--;
  };
  for (f = 0; f < o.length; f++) {
    var h = o[f], d = h._private, y = d.data;
    if (h.clearTraversalCache(), !(!e && !d.removed)) {
      if (y.id === void 0)
        y.id = Xc();
      else if (ae(y.id))
        y.id = "" + y.id;
      else if (or(y.id) || !fe(y.id)) {
        qe("Can not create element with invalid string ID `" + y.id + "`"), v();
        continue;
      } else if (a.hasElementWithId(y.id)) {
        qe("Can not create second element with ID `" + y.id + "`"), v();
        continue;
      }
    }
    var g = y.id;
    if (h.isNode()) {
      var p = d.position;
      p.x == null && (p.x = 0), p.y == null && (p.y = 0);
    }
    if (h.isEdge()) {
      for (var m = h, b = ["source", "target"], w = b.length, C = !1, E = 0; E < w; E++) {
        var x = b[E], T = y[x];
        ae(T) && (T = y[x] = "" + y[x]), T == null || T === "" ? (qe("Can not create edge `" + g + "` with unspecified " + x), C = !0) : a.hasElementWithId(T) || (qe("Can not create edge `" + g + "` with nonexistant " + x + " `" + T + "`"), C = !0);
      }
      if (C) {
        v();
        continue;
      }
      var D = a.getElementById(y.source), P = a.getElementById(y.target);
      D.same(P) ? D._private.edges.push(m) : (D._private.edges.push(m), P._private.edges.push(m)), m._private.source = D, m._private.target = P;
    }
    d.map = new Wt(), d.map.set(g, {
      ele: h,
      index: 0
    }), d.removed = !1, e && a.addToPool(h);
  }
  for (var A = 0; A < i.length; A++) {
    var B = i[A], k = B._private.data;
    ae(k.parent) && (k.parent = "" + k.parent);
    var L = k.parent, M = L != null;
    if (M || B._private.parent) {
      var I = B._private.parent ? a.collection().merge(B._private.parent) : a.getElementById(L);
      if (I.empty())
        k.parent = void 0;
      else if (I[0].removed())
        Re("Node added with missing parent, reference to parent removed"), k.parent = void 0, B._private.parent = null;
      else {
        for (var R = !1, O = I; !O.empty(); ) {
          if (B.same(O)) {
            R = !0, k.parent = void 0;
            break;
          }
          O = O.parent();
        }
        R || (I[0]._private.children.push(B), B._private.parent = I[0], n.hasCompoundNodes = !0);
      }
    }
  }
  if (o.length > 0) {
    for (var _ = o.length === t.length ? t : new st(a, o), U = 0; U < _.length; U++) {
      var z = _[U];
      z.isNode() || (z.parallelEdges().clearTraversalCache(), z.source().clearTraversalCache(), z.target().clearTraversalCache());
    }
    var H;
    n.hasCompoundNodes ? H = a.collection().merge(_).merge(_.connectedNodes()).merge(_.parent()) : H = _, H.dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(r), r ? _.emitAndNotify("add") : e && _.emit("add");
  }
  return t;
};
ze.removed = function() {
  var r = this[0];
  return r && r._private.removed;
};
ze.inside = function() {
  var r = this[0];
  return r && !r._private.removed;
};
ze.remove = function() {
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
    var f = t[l];
    u(f);
  }
  function v(L, M) {
    var I = L._private.edges;
    lr(I, M), L.clearTraversalCache();
  }
  function h(L) {
    L.clearTraversalCache();
  }
  var d = [];
  d.ids = {};
  function y(L, M) {
    M = M[0], L = L[0];
    var I = L._private.children, R = L.id();
    lr(I, M), M._private.parent = null, d.ids[R] || (d.ids[R] = !0, d.push(L));
  }
  t.dirtyCompoundBoundsCache(), e && i.removeFromPool(a);
  for (var g = 0; g < a.length; g++) {
    var p = a[g];
    if (p.isEdge()) {
      var m = p.source()[0], b = p.target()[0];
      v(m, p), v(b, p);
      for (var w = p.parallelEdges(), C = 0; C < w.length; C++) {
        var E = w[C];
        h(E), E.isBundledBezier() && E.dirtyBoundingBoxCache();
      }
    } else {
      var x = p.parent();
      x.length !== 0 && y(x, p);
    }
    e && (p._private.removed = !0);
  }
  var T = i._private.elements;
  i._private.hasCompoundNodes = !1;
  for (var D = 0; D < T.length; D++) {
    var P = T[D];
    if (P.isParent()) {
      i._private.hasCompoundNodes = !0;
      break;
    }
  }
  var A = new st(this.cy(), a);
  A.size() > 0 && (r ? A.emitAndNotify("remove") : e && A.emit("remove"));
  for (var B = 0; B < d.length; B++) {
    var k = d[B];
    (!e || !k.removed()) && k.updateStyle();
  }
  return A;
};
ze.move = function(r) {
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
    var c = i(r.parent), f = c === null || e.hasElementWithId(c);
    if (f) {
      var v = c === null ? void 0 : c;
      e.batch(function() {
        var h = t.remove(a, n);
        h.emitAndNotify("moveout");
        for (var d = 0; d < t.length; d++) {
          var y = t[d], g = y._private.data;
          y.isNode() && (g.parent = v);
        }
        h.restore(a, n);
      }), t.emitAndNotify("move");
    }
  }
  return this;
};
[cf, Tp, Cn, ir, ta, Vp, ai, ry, If, Of, oy, $n, Tn, it, sr, ct].forEach(function(r) {
  pe(ze, r);
});
var hy = {
  add: function(e) {
    var t, a = this;
    if (Et(e)) {
      var n = e;
      if (n._private.cy === a)
        t = n.restore();
      else {
        for (var i = [], s = 0; s < n.length; s++) {
          var o = n[s];
          i.push(o.json());
        }
        t = new st(a, i);
      }
    } else if (Ie(e)) {
      var u = e;
      t = new st(a, u);
    } else if (ke(e) && (Ie(e.nodes) || Ie(e.edges))) {
      for (var l = e, c = [], f = ["nodes", "edges"], v = 0, h = f.length; v < h; v++) {
        var d = f[v], y = l[d];
        if (Ie(y))
          for (var g = 0, p = y.length; g < p; g++) {
            var m = pe({
              group: d
            }, y[g]);
            c.push(m);
          }
      }
      t = new st(a, c);
    } else {
      var b = e;
      t = new Xn(a, b).collection();
    }
    return t;
  },
  remove: function(e) {
    if (!Et(e)) {
      if (fe(e)) {
        var t = e;
        e = this.$(t);
      }
    }
    return e.remove();
  }
};
/*! Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function gy(r, e, t, a) {
  var n = 4, i = 1e-3, s = 1e-7, o = 10, u = 11, l = 1 / (u - 1), c = typeof Float32Array < "u";
  if (arguments.length !== 4)
    return !1;
  for (var f = 0; f < 4; ++f)
    if (typeof arguments[f] != "number" || isNaN(arguments[f]) || !isFinite(arguments[f]))
      return !1;
  r = Math.min(r, 1), t = Math.min(t, 1), r = Math.max(r, 0), t = Math.max(t, 0);
  var v = c ? new Float32Array(u) : new Array(u);
  function h(P, A) {
    return 1 - 3 * A + 3 * P;
  }
  function d(P, A) {
    return 3 * A - 6 * P;
  }
  function y(P) {
    return 3 * P;
  }
  function g(P, A, B) {
    return ((h(A, B) * P + d(A, B)) * P + y(A)) * P;
  }
  function p(P, A, B) {
    return 3 * h(A, B) * P * P + 2 * d(A, B) * P + y(A);
  }
  function m(P, A) {
    for (var B = 0; B < n; ++B) {
      var k = p(A, r, t);
      if (k === 0)
        return A;
      var L = g(A, r, t) - P;
      A -= L / k;
    }
    return A;
  }
  function b() {
    for (var P = 0; P < u; ++P)
      v[P] = g(P * l, r, t);
  }
  function w(P, A, B) {
    var k, L, M = 0;
    do
      L = A + (B - A) / 2, k = g(L, r, t) - P, k > 0 ? B = L : A = L;
    while (Math.abs(k) > s && ++M < o);
    return L;
  }
  function C(P) {
    for (var A = 0, B = 1, k = u - 1; B !== k && v[B] <= P; ++B)
      A += l;
    --B;
    var L = (P - v[B]) / (v[B + 1] - v[B]), M = A + L * l, I = p(M, r, t);
    return I >= i ? m(P, M) : I === 0 ? M : w(P, A, A + l);
  }
  var E = !1;
  function x() {
    E = !0, (r !== e || t !== a) && b();
  }
  var T = function(A) {
    return E || x(), r === e && t === a ? A : A === 0 ? 0 : A === 1 ? 1 : g(C(A), e, a);
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
  var D = "generateBezier(" + [r, e, t, a] + ")";
  return T.toString = function() {
    return D;
  }, T;
}
/*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
var py = /* @__PURE__ */ function() {
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
    }, u = [0], l = 0, c = 1 / 1e4, f = 16 / 1e3, v, h, d;
    for (n = parseFloat(n) || 500, i = parseFloat(i) || 20, s = s || null, o.tension = n, o.friction = i, v = s !== null, v ? (l = a(n, i), h = l / s * f) : h = f; d = t(d || o, h), u.push(1 + d.x), l += 16, Math.abs(d.x) > c && Math.abs(d.v) > c; )
      ;
    return v ? function(y) {
      return u[y * (u.length - 1) | 0];
    } : l;
  };
}(), Ne = function(e, t, a, n) {
  var i = gy(e, t, a, n);
  return function(s, o, u) {
    return s + (o - s) * i(u);
  };
}, Sn = {
  linear: function(e, t, a) {
    return e + (t - e) * a;
  },
  // default easings
  ease: Ne(0.25, 0.1, 0.25, 1),
  "ease-in": Ne(0.42, 0, 1, 1),
  "ease-out": Ne(0, 0, 0.58, 1),
  "ease-in-out": Ne(0.42, 0, 0.58, 1),
  // sine
  "ease-in-sine": Ne(0.47, 0, 0.745, 0.715),
  "ease-out-sine": Ne(0.39, 0.575, 0.565, 1),
  "ease-in-out-sine": Ne(0.445, 0.05, 0.55, 0.95),
  // quad
  "ease-in-quad": Ne(0.55, 0.085, 0.68, 0.53),
  "ease-out-quad": Ne(0.25, 0.46, 0.45, 0.94),
  "ease-in-out-quad": Ne(0.455, 0.03, 0.515, 0.955),
  // cubic
  "ease-in-cubic": Ne(0.55, 0.055, 0.675, 0.19),
  "ease-out-cubic": Ne(0.215, 0.61, 0.355, 1),
  "ease-in-out-cubic": Ne(0.645, 0.045, 0.355, 1),
  // quart
  "ease-in-quart": Ne(0.895, 0.03, 0.685, 0.22),
  "ease-out-quart": Ne(0.165, 0.84, 0.44, 1),
  "ease-in-out-quart": Ne(0.77, 0, 0.175, 1),
  // quint
  "ease-in-quint": Ne(0.755, 0.05, 0.855, 0.06),
  "ease-out-quint": Ne(0.23, 1, 0.32, 1),
  "ease-in-out-quint": Ne(0.86, 0, 0.07, 1),
  // expo
  "ease-in-expo": Ne(0.95, 0.05, 0.795, 0.035),
  "ease-out-expo": Ne(0.19, 1, 0.22, 1),
  "ease-in-out-expo": Ne(1, 0, 0, 1),
  // circ
  "ease-in-circ": Ne(0.6, 0.04, 0.98, 0.335),
  "ease-out-circ": Ne(0.075, 0.82, 0.165, 1),
  "ease-in-out-circ": Ne(0.785, 0.135, 0.15, 0.86),
  // user param easings...
  spring: function(e, t, a) {
    if (a === 0)
      return Sn.linear;
    var n = py(e, t, a);
    return function(i, s, o) {
      return i + (s - i) * n(o);
    };
  },
  "cubic-bezier": Ne
};
function Wl(r, e, t, a, n) {
  if (a === 1 || e === t)
    return t;
  var i = n(e, t, a);
  return r == null || ((r.roundValue || r.color) && (i = Math.round(i)), r.min !== void 0 && (i = Math.max(i, r.min)), r.max !== void 0 && (i = Math.min(i, r.max))), i;
}
function Zl(r, e) {
  return r.pfValue != null || r.value != null ? r.pfValue != null && (e == null || e.type.units !== "%") ? r.pfValue : r.value : r;
}
function Nr(r, e, t, a, n) {
  var i = n != null ? n.type : null;
  t < 0 ? t = 0 : t > 1 && (t = 1);
  var s = Zl(r, n), o = Zl(e, n);
  if (ae(s) && ae(o))
    return Wl(i, s, o, t, a);
  if (Ie(s) && Ie(o)) {
    for (var u = [], l = 0; l < o.length; l++) {
      var c = s[l], f = o[l];
      if (c != null && f != null) {
        var v = Wl(i, c, f, t, a);
        u.push(v);
      } else
        u.push(f);
    }
    return u;
  }
}
function yy(r, e, t, a) {
  var n = !a, i = r._private, s = e._private, o = s.easing, u = s.startTime, l = a ? r : r.cy(), c = l.style();
  if (!s.easingImpl)
    if (o == null)
      s.easingImpl = Sn.linear;
    else {
      var f;
      if (fe(o)) {
        var v = c.parse("transition-timing-function", o);
        f = v.value;
      } else
        f = o;
      var h, d;
      fe(f) ? (h = f, d = []) : (h = f[1], d = f.slice(2).map(function(_) {
        return +_;
      })), d.length > 0 ? (h === "spring" && d.push(s.duration), s.easingImpl = Sn[h].apply(null, d)) : s.easingImpl = Sn[h];
    }
  var y = s.easingImpl, g;
  if (s.duration === 0 ? g = 1 : g = (t - u) / s.duration, s.applying && (g = s.progress), g < 0 ? g = 0 : g > 1 && (g = 1), s.delay == null) {
    var p = s.startPosition, m = s.position;
    if (m && n && !r.locked()) {
      var b = {};
      ga(p.x, m.x) && (b.x = Nr(p.x, m.x, g, y)), ga(p.y, m.y) && (b.y = Nr(p.y, m.y, g, y)), r.position(b);
    }
    var w = s.startPan, C = s.pan, E = i.pan, x = C != null && a;
    x && (ga(w.x, C.x) && (E.x = Nr(w.x, C.x, g, y)), ga(w.y, C.y) && (E.y = Nr(w.y, C.y, g, y)), r.emit("pan"));
    var T = s.startZoom, D = s.zoom, P = D != null && a;
    P && (ga(T, D) && (i.zoom = Oa(i.minZoom, Nr(T, D, g, y), i.maxZoom)), r.emit("zoom")), (x || P) && r.emit("viewport");
    var A = s.style;
    if (A && A.length > 0 && n) {
      for (var B = 0; B < A.length; B++) {
        var k = A[B], L = k.name, M = k, I = s.startStyle[L], R = c.properties[I.name], O = Nr(I, M, g, y, R);
        c.overrideBypass(r, L, O);
      }
      r.emit("style");
    }
  }
  return s.progress = g, g;
}
function ga(r, e) {
  return r == null || e == null ? !1 : ae(r) && ae(e) ? !0 : !!(r && e);
}
function my(r, e, t, a) {
  var n = e._private;
  n.started = !0, n.startTime = t - n.progress * n.duration;
}
function Yl(r, e) {
  var t = e._private.aniEles, a = [];
  function n(c, f) {
    var v = c._private, h = v.animation.current, d = v.animation.queue, y = !1;
    if (h.length === 0) {
      var g = d.shift();
      g && h.push(g);
    }
    for (var p = function(E) {
      for (var x = E.length - 1; x >= 0; x--) {
        var T = E[x];
        T();
      }
      E.splice(0, E.length);
    }, m = h.length - 1; m >= 0; m--) {
      var b = h[m], w = b._private;
      if (w.stopped) {
        h.splice(m, 1), w.hooked = !1, w.playing = !1, w.started = !1, p(w.frames);
        continue;
      }
      !w.playing && !w.applying || (w.playing && w.applying && (w.applying = !1), w.started || my(c, b, r), yy(c, b, r, f), w.applying && (w.applying = !1), p(w.frames), w.step != null && w.step(r), b.completed() && (h.splice(m, 1), w.hooked = !1, w.playing = !1, w.started = !1, p(w.completes)), y = !0);
    }
    return !f && h.length === 0 && d.length === 0 && a.push(c), y;
  }
  for (var i = !1, s = 0; s < t.length; s++) {
    var o = t[s], u = n(o);
    i = i || u;
  }
  var l = n(e, !0);
  (i || l) && (t.length > 0 ? e.notify("draw", t) : e.notify("draw")), t.unmerge(a), e.emit("step");
}
var by = {
  // pull in animation functions
  animate: Le.animate(),
  animation: Le.animation(),
  animated: Le.animated(),
  clearQueue: Le.clearQueue(),
  delay: Le.delay(),
  delayAnimation: Le.delayAnimation(),
  stop: Le.stop(),
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
      e._private.animationsRunning && In(function(i) {
        Yl(i, e), t();
      });
    }
    var a = e.renderer();
    a && a.beforeRender ? a.beforeRender(function(i, s) {
      Yl(s, e);
    }, a.beforeRenderPriorities.animations) : t();
  }
}, wy = {
  qualifierCompare: function(e, t) {
    return e == null || t == null ? e == null && t == null : e.sameText(t);
  },
  eventMatches: function(e, t, a) {
    var n = t.qualifier;
    return n != null ? e !== a.target && Ha(a.target) && n.matches(a.target) : !0;
  },
  addEventFields: function(e, t) {
    t.cy = e, t.target = e;
  },
  callbackContext: function(e, t, a) {
    return t.qualifier != null ? a.target : e;
  }
}, hn = function(e) {
  return fe(e) ? new cr(e) : e;
}, Ff = {
  createEmitter: function() {
    var e = this._private;
    return e.emitter || (e.emitter = new ni(wy, this)), this;
  },
  emitter: function() {
    return this._private.emitter;
  },
  on: function(e, t, a) {
    return this.emitter().on(e, hn(t), a), this;
  },
  removeListener: function(e, t, a) {
    return this.emitter().removeListener(e, hn(t), a), this;
  },
  removeAllListeners: function() {
    return this.emitter().removeAllListeners(), this;
  },
  one: function(e, t, a) {
    return this.emitter().one(e, hn(t), a), this;
  },
  once: function(e, t, a) {
    return this.emitter().one(e, hn(t), a), this;
  },
  emit: function(e, t) {
    return this.emitter().emit(e, t), this;
  },
  emitAndNotify: function(e, t) {
    return this.emit(e), this.notify(e, t), this;
  }
};
Le.eventAliasesOn(Ff);
var js = {
  png: function(e) {
    var t = this._private.renderer;
    return e = e || {}, t.png(e);
  },
  jpg: function(e) {
    var t = this._private.renderer;
    return e = e || {}, e.bg = e.bg || "#fff", t.jpg(e);
  }
};
js.jpeg = js.jpg;
var An = {
  layout: function(e) {
    var t = this;
    if (e == null) {
      qe("Layout options must be specified to make a layout");
      return;
    }
    if (e.name == null) {
      qe("A `name` must be specified to make a layout");
      return;
    }
    var a = e.name, n = t.extension("layout", a);
    if (n == null) {
      qe("No such layout `" + a + "` found.  Did you forget to import it and `cytoscape.use()` it?");
      return;
    }
    var i;
    fe(e.eles) ? i = t.$(e.eles) : i = e.eles != null ? e.eles : t.$();
    var s = new n(pe({}, e, {
      cy: t,
      eles: i
    }));
    return s;
  }
};
An.createLayout = An.makeLayout = An.layout;
var xy = {
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
}, Ey = Ze({
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
}), eo = {
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
      qe("Can not initialise: No such renderer `".concat(e.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
      return;
    }
    e.wheelSensitivity !== void 0 && Re("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
    var n = Ey(e);
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
eo.invalidateDimensions = eo.resize;
var kn = {
  // get a collection
  // - empty collection on no args
  // - collection of elements in the graph on selector arg
  // - guarantee a returned collection when elements or collection specified
  collection: function(e, t) {
    return fe(e) ? this.$(e) : Et(e) ? e.collection() : Ie(e) ? (t || (t = {}), new st(this, e, t.unique, t.removed)) : new st(this);
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
kn.elements = kn.filter = kn.$;
var at = {}, Sa = "t", Cy = "f";
at.apply = function(r) {
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
at.getPropertiesDiff = function(r, e) {
  var t = this, a = t._private.propDiffs = t._private.propDiffs || {}, n = r + "-" + e, i = a[n];
  if (i)
    return i;
  for (var s = [], o = {}, u = 0; u < t.length; u++) {
    var l = t[u], c = r[u] === Sa, f = e[u] === Sa, v = c !== f, h = l.mappedProperties.length > 0;
    if (v || f && h) {
      var d = void 0;
      v && h || v ? d = l.properties : h && (d = l.mappedProperties);
      for (var y = 0; y < d.length; y++) {
        for (var g = d[y], p = g.name, m = !1, b = u + 1; b < t.length; b++) {
          var w = t[b], C = e[b] === Sa;
          if (C && (m = w.properties[g.name] != null, m))
            break;
        }
        !o[p] && !m && (o[p] = !0, s.push(p));
      }
    }
  }
  return a[n] = s, s;
};
at.getContextMeta = function(r) {
  for (var e = this, t = "", a, n = r._private.styleCxtKey || "", i = 0; i < e.length; i++) {
    var s = e[i], o = s.selector && s.selector.matches(r);
    o ? t += Sa : t += Cy;
  }
  return a = e.getPropertiesDiff(n, t), r._private.styleCxtKey = t, {
    key: t,
    diffPropNames: a,
    empty: a.length === 0
  };
};
at.getContextStyle = function(r) {
  var e = r.key, t = this, a = this._private.contextStyles = this._private.contextStyles || {};
  if (a[e])
    return a[e];
  for (var n = {
    _private: {
      key: e
    }
  }, i = 0; i < t.length; i++) {
    var s = t[i], o = e[i] === Sa;
    if (o)
      for (var u = 0; u < s.properties.length; u++) {
        var l = s.properties[u];
        n[l.name] = l;
      }
  }
  return a[e] = n, n;
};
at.applyContextStyle = function(r, e, t) {
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
        var f = c.mapping, v = f.fnValue = l.value(t);
        if (v === f.prevFnValue)
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
at.updateStyleHints = function(r) {
  var e = r._private, t = this, a = t.propertyGroupNames, n = t.propertyGroupKeys, i = function(K, j, te) {
    return t.getPropertiesHash(K, j, te);
  }, s = e.styleKey;
  if (r.removed())
    return !1;
  var o = e.group === "nodes", u = r._private.style;
  a = Object.keys(u);
  for (var l = 0; l < n.length; l++) {
    var c = n[l];
    e.styleKeys[c] = [Hr, ma];
  }
  for (var f = function(K, j) {
    return e.styleKeys[j][0] = Ra(K, e.styleKeys[j][0]);
  }, v = function(K, j) {
    return e.styleKeys[j][1] = Ma(K, e.styleKeys[j][1]);
  }, h = function(K, j) {
    f(K, j), v(K, j);
  }, d = function(K, j) {
    for (var te = 0; te < K.length; te++) {
      var se = K.charCodeAt(te);
      f(se, j), v(se, j);
    }
  }, y = 2e9, g = function(K) {
    return -128 < K && K < 128 && Math.floor(K) !== K ? y - (K * 1024 | 0) : K;
  }, p = 0; p < a.length; p++) {
    var m = a[p], b = u[m];
    if (b != null) {
      var w = this.properties[m], C = w.type, E = w.groupKey, x = void 0;
      w.hashOverride != null ? x = w.hashOverride(r, b) : b.pfValue != null && (x = b.pfValue);
      var T = w.enums == null ? b.value : null, D = x != null, P = T != null, A = D || P, B = b.units;
      if (C.number && A && !C.multiple) {
        var k = D ? x : T;
        h(g(k), E), !D && B != null && d(B, E);
      } else
        d(b.strValue, E);
    }
  }
  for (var L = [Hr, ma], M = 0; M < n.length; M++) {
    var I = n[M], R = e.styleKeys[I];
    L[0] = Ra(R[0], L[0]), L[1] = Ma(R[1], L[1]);
  }
  e.styleKey = Hd(L[0], L[1]);
  var O = e.styleKeys;
  e.labelDimsKey = Jt(O.labelDimensions);
  var _ = i(r, ["label"], O.labelDimensions);
  if (e.labelKey = Jt(_), e.labelStyleKey = Jt(sn(O.commonLabel, _)), !o) {
    var U = i(r, ["source-label"], O.labelDimensions);
    e.sourceLabelKey = Jt(U), e.sourceLabelStyleKey = Jt(sn(O.commonLabel, U));
    var z = i(r, ["target-label"], O.labelDimensions);
    e.targetLabelKey = Jt(z), e.targetLabelStyleKey = Jt(sn(O.commonLabel, z));
  }
  if (o) {
    var H = e.styleKeys, G = H.nodeBody, Q = H.nodeBorder, W = H.nodeOutline, X = H.backgroundImage, Y = H.compound, ee = H.pie, V = [G, Q, W, X, Y, ee].filter(function(N) {
      return N != null;
    }).reduce(sn, [Hr, ma]);
    e.nodeKey = Jt(V), e.hasPie = ee != null && ee[0] !== Hr && ee[1] !== ma;
  }
  return s !== e.styleKey;
};
at.clearStyleHints = function(r) {
  var e = r._private;
  e.styleCxtKey = "", e.styleKeys = {}, e.styleKey = null, e.labelKey = null, e.labelStyleKey = null, e.sourceLabelKey = null, e.sourceLabelStyleKey = null, e.targetLabelKey = null, e.targetLabelStyleKey = null, e.nodeKey = null, e.hasPie = null;
};
at.applyParsedProperty = function(r, e) {
  var t = this, a = e, n = r._private.style, i, s = t.types, o = t.properties[a.name].type, u = a.bypass, l = n[a.name], c = l && l.bypass, f = r._private, v = "mapping", h = function(G) {
    return G == null ? null : G.pfValue != null ? G.pfValue : G.value;
  }, d = function() {
    var G = h(l), Q = h(a);
    t.checkTriggers(r, a.name, G, Q);
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
    Re("Do not assign mappings to elements without corresponding data (i.e. ele `" + r.id() + "` has no mapping for property `" + a.name + "` with data field `" + a.field + "`); try a `[" + a.field + "]` selector to limit scope to elements with `" + a.field + "` defined");
  };
  switch (a.mapped) {
    case s.mapData: {
      for (var g = a.field.split("."), p = f.data, m = 0; m < g.length && p; m++) {
        var b = g[m];
        p = p[b];
      }
      if (p == null)
        return y(), !1;
      var w;
      if (ae(p)) {
        var C = a.fieldMax - a.fieldMin;
        C === 0 ? w = 0 : w = (p - a.fieldMin) / C;
      } else
        return Re("Do not use continuous mappers without specifying numeric data (i.e. `" + a.field + ": " + p + "` for `" + r.id() + "` is non-numeric)"), !1;
      if (w < 0 ? w = 0 : w > 1 && (w = 1), o.color) {
        var E = a.valueMin[0], x = a.valueMax[0], T = a.valueMin[1], D = a.valueMax[1], P = a.valueMin[2], A = a.valueMax[2], B = a.valueMin[3] == null ? 1 : a.valueMin[3], k = a.valueMax[3] == null ? 1 : a.valueMax[3], L = [Math.round(E + (x - E) * w), Math.round(T + (D - T) * w), Math.round(P + (A - P) * w), Math.round(B + (k - B) * w)];
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
        i = this.parse(a.name, M, a.bypass, v);
      } else
        return !1;
      if (!i)
        return y(), !1;
      i.mapping = a, a = i;
      break;
    }
    case s.data: {
      for (var I = a.field.split("."), R = f.data, O = 0; O < I.length && R; O++) {
        var _ = I[O];
        R = R[_];
      }
      if (R != null && (i = this.parse(a.name, R, a.bypass, v)), !i)
        return y(), !1;
      i.mapping = a, a = i;
      break;
    }
    case s.fn: {
      var U = a.value, z = a.fnValue != null ? a.fnValue : U(r);
      if (a.prevFnValue = z, z == null)
        return Re("Custom function mappers may not return null (i.e. `" + a.name + "` for ele `" + r.id() + "` is null)"), !1;
      if (i = this.parse(a.name, z, a.bypass, v), !i)
        return Re("Custom function mappers may not return invalid values for the property type (i.e. `" + a.name + "` for ele `" + r.id() + "` is invalid)"), !1;
      i.mapping = Vt(a), a = i;
      break;
    }
    case void 0:
      break;
    default:
      return !1;
  }
  return u ? (c ? a.bypassed = l.bypassed : a.bypassed = l, n[a.name] = a) : c ? l.bypassed = a : n[a.name] = a, d(), !0;
};
at.cleanElements = function(r, e) {
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
at.update = function() {
  var r = this._private.cy, e = r.mutableElements();
  e.updateStyle();
};
at.updateTransitions = function(r, e) {
  var t = this, a = r._private, n = r.pstyle("transition-property").value, i = r.pstyle("transition-duration").pfValue, s = r.pstyle("transition-delay").pfValue;
  if (n.length > 0 && i > 0) {
    for (var o = {}, u = !1, l = 0; l < n.length; l++) {
      var c = n[l], f = r.pstyle(c), v = e[c];
      if (v) {
        var h = v.prev, d = h, y = v.next != null ? v.next : f, g = !1, p = void 0, m = 1e-6;
        d && (ae(d.pfValue) && ae(y.pfValue) ? (g = y.pfValue - d.pfValue, p = d.pfValue + m * g) : ae(d.value) && ae(y.value) ? (g = y.value - d.value, p = d.value + m * g) : Ie(d.value) && Ie(y.value) && (g = d.value[0] !== y.value[0] || d.value[1] !== y.value[1] || d.value[2] !== y.value[2], p = d.strValue), g && (o[c] = y.strValue, this.applyBypass(r, c, p), u = !0));
      }
    }
    if (!u)
      return;
    a.transitioning = !0, new aa(function(b) {
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
at.checkTrigger = function(r, e, t, a, n, i) {
  var s = this.properties[e], o = n(s);
  r.removed() || o != null && o(t, a, r) && i(s);
};
at.checkZOrderTrigger = function(r, e, t, a) {
  var n = this;
  this.checkTrigger(r, e, t, a, function(i) {
    return i.triggersZOrder;
  }, function() {
    n._private.cy.notify("zorder", r);
  });
};
at.checkBoundsTrigger = function(r, e, t, a) {
  this.checkTrigger(r, e, t, a, function(n) {
    return n.triggersBounds;
  }, function(n) {
    r.dirtyCompoundBoundsCache(), r.dirtyBoundingBoxCache();
  });
};
at.checkConnectedEdgesBoundsTrigger = function(r, e, t, a) {
  this.checkTrigger(r, e, t, a, function(n) {
    return n.triggersBoundsOfConnectedEdges;
  }, function(n) {
    r.connectedEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
at.checkParallelEdgesBoundsTrigger = function(r, e, t, a) {
  this.checkTrigger(r, e, t, a, function(n) {
    return n.triggersBoundsOfParallelEdges;
  }, function(n) {
    r.parallelEdges().forEach(function(i) {
      i.dirtyBoundingBoxCache();
    });
  });
};
at.checkTriggers = function(r, e, t, a) {
  r.dirtyStyleCache(), this.checkZOrderTrigger(r, e, t, a), this.checkBoundsTrigger(r, e, t, a), this.checkConnectedEdgesBoundsTrigger(r, e, t, a), this.checkParallelEdgesBoundsTrigger(r, e, t, a);
};
var Xa = {};
Xa.applyBypass = function(r, e, t, a) {
  var n = this, i = [], s = !0;
  if (e === "*" || e === "**") {
    if (t !== void 0)
      for (var o = 0; o < n.properties.length; o++) {
        var u = n.properties[o], l = u.name, c = this.parse(l, t, !0);
        c && i.push(c);
      }
  } else if (fe(e)) {
    var f = this.parse(e, t, !0);
    f && i.push(f);
  } else if (ke(e)) {
    var v = e;
    a = t;
    for (var h = Object.keys(v), d = 0; d < h.length; d++) {
      var y = h[d], g = v[y];
      if (g === void 0 && (g = v[Zn(y)]), g !== void 0) {
        var p = this.parse(y, g, !0);
        p && i.push(p);
      }
    }
  } else
    return !1;
  if (i.length === 0)
    return !1;
  for (var m = !1, b = 0; b < r.length; b++) {
    for (var w = r[b], C = {}, E = void 0, x = 0; x < i.length; x++) {
      var T = i[x];
      if (a) {
        var D = w.pstyle(T.name);
        E = C[T.name] = {
          prev: D
        };
      }
      m = this.applyParsedProperty(w, Vt(T)) || m, a && (E.next = w.pstyle(T.name));
    }
    m && this.updateStyleHints(w), a && this.updateTransitions(w, C, s);
  }
  return m;
};
Xa.overrideBypass = function(r, e, t) {
  e = po(e);
  for (var a = 0; a < r.length; a++) {
    var n = r[a], i = n._private.style[e], s = this.properties[e].type, o = s.color, u = s.mutiple, l = i ? i.pfValue != null ? i.pfValue : i.value : null;
    !i || !i.bypass ? this.applyBypass(n, e, t) : (i.value = t, i.pfValue != null && (i.pfValue = t), o ? i.strValue = "rgb(" + t.join(",") + ")" : u ? i.strValue = t.join(" ") : i.strValue = "" + t, this.updateStyleHints(n)), this.checkTriggers(n, e, l, t);
  }
};
Xa.removeAllBypasses = function(r, e) {
  return this.removeBypasses(r, this.propertyNames, e);
};
Xa.removeBypasses = function(r, e, t) {
  for (var a = !0, n = 0; n < r.length; n++) {
    for (var i = r[n], s = {}, o = 0; o < e.length; o++) {
      var u = e[o], l = this.properties[u], c = i.pstyle(l.name);
      if (!(!c || !c.bypass)) {
        var f = "", v = this.parse(u, f, !0), h = s[l.name] = {
          prev: c
        };
        this.applyParsedProperty(i, v), h.next = i.pstyle(l.name);
      }
    }
    this.updateStyleHints(i), t && this.updateTransitions(i, s, a);
  }
};
var Bo = {};
Bo.getEmSizeInPixels = function() {
  var r = this.containerCss("font-size");
  return r != null ? parseFloat(r) : 1;
};
Bo.containerCss = function(r) {
  var e = this._private.cy, t = e.container(), a = e.window();
  if (a && t && a.getComputedStyle)
    return a.getComputedStyle(t).getPropertyValue(r);
};
var qt = {};
qt.getRenderedStyle = function(r, e) {
  return e ? this.getStylePropertyValue(r, e, !0) : this.getRawStyle(r, !0);
};
qt.getRawStyle = function(r, e) {
  var t = this;
  if (r = r[0], r) {
    for (var a = {}, n = 0; n < t.properties.length; n++) {
      var i = t.properties[n], s = t.getStylePropertyValue(r, i.name, e);
      s != null && (a[i.name] = s, a[Zn(i.name)] = s);
    }
    return a;
  }
};
qt.getIndexedStyle = function(r, e, t, a) {
  var n = r.pstyle(e)[t][a];
  return n ?? r.cy().style().getDefaultProperty(e)[t][0];
};
qt.getStylePropertyValue = function(r, e, t) {
  var a = this;
  if (r = r[0], r) {
    var n = a.properties[e];
    n.alias && (n = n.pointsTo);
    var i = n.type, s = r.pstyle(n.name);
    if (s) {
      var o = s.value, u = s.units, l = s.strValue;
      if (t && i.number && o != null && ae(o)) {
        var c = r.cy().zoom(), f = function(g) {
          return g * c;
        }, v = function(g, p) {
          return f(g) + p;
        }, h = Ie(o), d = h ? u.every(function(y) {
          return y != null;
        }) : u != null;
        return d ? h ? o.map(function(y, g) {
          return v(y, u[g]);
        }).join(" ") : v(o, u) : h ? o.map(function(y) {
          return fe(y) ? y : "" + f(y);
        }).join(" ") : "" + f(o);
      } else if (l != null)
        return l;
    }
    return null;
  }
};
qt.getAnimationStartStyle = function(r, e) {
  for (var t = {}, a = 0; a < e.length; a++) {
    var n = e[a], i = n.name, s = r.pstyle(i);
    s !== void 0 && (ke(s) ? s = this.parse(i, s.strValue) : s = this.parse(i, s)), s && (t[i] = s);
  }
  return t;
};
qt.getPropsList = function(r) {
  var e = this, t = [], a = r, n = e.properties;
  if (a)
    for (var i = Object.keys(a), s = 0; s < i.length; s++) {
      var o = i[s], u = a[o], l = n[o] || n[po(o)], c = this.parse(l.name, u);
      c && t.push(c);
    }
  return t;
};
qt.getNonDefaultPropertiesHash = function(r, e, t) {
  var a = t.slice(), n, i, s, o, u, l;
  for (u = 0; u < e.length; u++)
    if (n = e[u], i = r.pstyle(n, !1), i != null)
      if (i.pfValue != null)
        a[0] = Ra(o, a[0]), a[1] = Ma(o, a[1]);
      else
        for (s = i.strValue, l = 0; l < s.length; l++)
          o = s.charCodeAt(l), a[0] = Ra(o, a[0]), a[1] = Ma(o, a[1]);
  return a;
};
qt.getPropertiesHash = qt.getNonDefaultPropertiesHash;
var oi = {};
oi.appendFromJson = function(r) {
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
oi.fromJson = function(r) {
  var e = this;
  return e.resetToDefault(), e.appendFromJson(r), e;
};
oi.json = function() {
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
var Lo = {};
Lo.appendFromString = function(r) {
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
      Re("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + a);
      break;
    }
    n = c[0];
    var f = c[1];
    if (f !== "core") {
      var v = new cr(f);
      if (v.invalid) {
        Re("Skipping parsing of block: Invalid selector found in string stylesheet: " + f), o();
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
        Re("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + h), d = !0;
        break;
      }
      s = p[0];
      var m = p[1], b = p[2], w = e.properties[m];
      if (!w) {
        Re("Skipping property: Invalid property name in: " + s), u();
        continue;
      }
      var C = t.parse(m, b);
      if (!C) {
        Re("Skipping property: Invalid property definition in: " + s), u();
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
    t.selector(f);
    for (var E = 0; E < y.length; E++) {
      var x = y[E];
      t.css(x.name, x.val);
    }
    o();
  }
  return t;
};
Lo.fromString = function(r) {
  var e = this;
  return e.resetToDefault(), e.appendFromString(r), e;
};
var nt = {};
(function() {
  var r = Ke, e = xd, t = Cd, a = Td, n = Sd, i = function(V) {
    return "^" + V + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
  }, s = function(V) {
    var N = r + "|\\w+|" + e + "|" + t + "|" + a + "|" + n;
    return "^" + V + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + r + ")\\s*\\,\\s*(" + r + ")\\s*,\\s*(" + N + ")\\s*\\,\\s*(" + N + ")\\)$";
  }, o = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
  nt.types = {
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
      enums: ["rectangle", "roundrectangle", "round-rectangle"]
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
      validate: function(V, N) {
        switch (V.length) {
          case 2:
            return N[0] !== "deg" && N[0] !== "rad" && N[1] !== "deg" && N[1] !== "rad";
          case 1:
            return fe(V[0]) || N[0] === "deg" || N[0] === "rad";
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
        var N = V.length;
        return N === 1 || N === 2 || N === 4;
      }
    }
  };
  var u = {
    zeroNonZero: function(V, N) {
      return (V == null || N == null) && V !== N || V == 0 && N != 0 ? !0 : V != 0 && N == 0;
    },
    any: function(V, N) {
      return V != N;
    },
    emptyNonEmpty: function(V, N) {
      var K = or(V), j = or(N);
      return K && !j || !K && j;
    }
  }, l = nt.types, c = [{
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
  }], f = [{
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
  }], v = [{
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
  }], y = [{
    name: "events",
    type: l.bool,
    triggersZOrder: u.any
  }, {
    name: "text-events",
    type: l.bool,
    triggersZOrder: u.any
  }], g = [{
    name: "display",
    type: l.display,
    triggersZOrder: u.any,
    triggersBounds: u.any,
    triggersBoundsOfConnectedEdges: u.any,
    triggersBoundsOfParallelEdges: function(V, N, K) {
      return V === N ? !1 : K.pstyle("curve-style").value === "bezier";
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
  }], w = function(V, N) {
    return N.value === "label" ? -V.poolIndex() : N.pfValue;
  }, C = [{
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
  }], E = [{
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
  }], D = [{
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
  }], P = [{
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
    triggersBoundsOfParallelEdges: function(V, N) {
      return V === N ? !1 : V === "bezier" || // remove from bundle
      N === "bezier";
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
  }], A = [{
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
  }], k = [];
  nt.pieBackgroundN = 16, k.push({
    name: "pie-size",
    type: l.sizeMaybePercent
  });
  for (var L = 1; L <= nt.pieBackgroundN; L++)
    k.push({
      name: "pie-" + L + "-background-color",
      type: l.color
    }), k.push({
      name: "pie-" + L + "-background-size",
      type: l.percent
    }), k.push({
      name: "pie-" + L + "-background-opacity",
      type: l.zeroOneNumber
    });
  var M = [], I = nt.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
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
  }].forEach(function(ee) {
    I.forEach(function(V) {
      var N = V + "-" + ee.name, K = ee.type, j = ee.triggersBounds;
      M.push({
        name: N,
        type: K,
        triggersBounds: j
      });
    });
  }, {});
  var R = nt.properties = [].concat(y, b, g, p, m, A, d, h, c, f, v, C, E, x, T, k, D, P, M, B), O = nt.propertyGroups = {
    // common to all eles
    behavior: y,
    transition: b,
    visibility: g,
    overlay: p,
    underlay: m,
    ghost: A,
    // labels
    commonLabel: d,
    labelDimensions: h,
    mainLabel: c,
    sourceLabel: f,
    targetLabel: v,
    // node props
    nodeBody: C,
    nodeBorder: E,
    nodeOutline: x,
    backgroundImage: T,
    pie: k,
    compound: D,
    // edge props
    edgeLine: P,
    edgeArrow: M,
    core: B
  }, _ = nt.propertyGroupNames = {}, U = nt.propertyGroupKeys = Object.keys(O);
  U.forEach(function(ee) {
    _[ee] = O[ee].map(function(V) {
      return V.name;
    }), O[ee].forEach(function(V) {
      return V.groupKey = ee;
    });
  });
  var z = nt.aliases = [{
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
  nt.propertyNames = R.map(function(ee) {
    return ee.name;
  });
  for (var H = 0; H < R.length; H++) {
    var G = R[H];
    R[G.name] = G;
  }
  for (var Q = 0; Q < z.length; Q++) {
    var W = z[Q], X = R[W.pointsTo], Y = {
      name: W.name,
      alias: !0,
      pointsTo: X
    };
    R.push(Y), R[W.name] = Y;
  }
})();
nt.getDefaultProperty = function(r) {
  return this.getDefaultProperties()[r];
};
nt.getDefaultProperties = function() {
  var r = this._private;
  if (r.defaultProperties != null)
    return r.defaultProperties;
  for (var e = pe({
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
    "pie-size": "100%"
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
    for (var c = 1; c <= nt.pieBackgroundN; c++) {
      var f = l.name.replace("{{i}}", c), v = l.value;
      u[f] = v;
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
    return nt.arrowPrefixes.forEach(function(c) {
      var f = c + "-" + l.name, v = l.value;
      u[f] = v;
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
nt.addDefaultStylesheet = function() {
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
var ui = {};
ui.parse = function(r, e, t, a) {
  var n = this;
  if (_e(e))
    return n.parseImplWarn(r, e, t, a);
  var i = a === "mapping" || a === !0 || a === !1 || a == null ? "dontcare" : a, s = t ? "t" : "f", o = "" + e, u = Wc(r, o, s, i), l = n.propCache = n.propCache || [], c;
  return (c = l[u]) || (c = l[u] = n.parseImplWarn(r, e, t, a)), (t || a === "mapping") && (c = Vt(c), c && (c.value = Vt(c.value))), c;
};
ui.parseImplWarn = function(r, e, t, a) {
  var n = this.parseImpl(r, e, t, a);
  return !n && e != null && Re("The style property `".concat(r, ": ").concat(e, "` is invalid")), n && (n.name === "width" || n.name === "height") && e === "label" && Re("The style value of `label` is deprecated for `" + n.name + "`"), n;
};
ui.parseImpl = function(r, e, t, a) {
  var n = this;
  r = po(r);
  var i = n.properties[r], s = e, o = n.types;
  if (!i || e === void 0)
    return null;
  i.alias && (i = i.pointsTo, r = i.name);
  var u = fe(e);
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
  if (_e(e))
    return {
      name: r,
      value: e,
      strValue: "fn",
      mapped: o.fn,
      bypass: t
    };
  var c, f;
  if (!(!u || a || e.length < 7 || e[1] !== "a")) {
    if (e.length >= 7 && e[0] === "d" && (c = new RegExp(o.data.regex).exec(e))) {
      if (t)
        return !1;
      var v = o.data;
      return {
        name: r,
        value: c,
        strValue: "" + e,
        mapped: v,
        field: c[1],
        bypass: t
      };
    } else if (e.length >= 10 && e[0] === "m" && (f = new RegExp(o.mapData.regex).exec(e))) {
      if (t || l.multiple)
        return !1;
      var h = o.mapData;
      if (!(l.color || l.number))
        return !1;
      var d = this.parse(r, f[4]);
      if (!d || d.mapped)
        return !1;
      var y = this.parse(r, f[5]);
      if (!y || y.mapped)
        return !1;
      if (d.pfValue === y.pfValue || d.strValue === y.strValue)
        return Re("`" + r + ": " + e + "` is not a valid mapper because the output range is zero; converting to `" + r + ": " + d.strValue + "`"), this.parse(r, d.strValue);
      if (l.color) {
        var g = d.value, p = y.value, m = g[0] === p[0] && g[1] === p[1] && g[2] === p[2] && // optional alpha
        (g[3] === p[3] || (g[3] == null || g[3] === 1) && (p[3] == null || p[3] === 1));
        if (m)
          return !1;
      }
      return {
        name: r,
        value: f,
        strValue: "" + e,
        mapped: h,
        field: f[1],
        fieldMin: parseFloat(f[2]),
        // min & max are numeric
        fieldMax: parseFloat(f[3]),
        valueMin: d.value,
        valueMax: y.value,
        bypass: t
      };
    }
  }
  if (l.multiple && a !== "multiple") {
    var b;
    if (u ? b = e.split(/\s+/) : Ie(e) ? b = e : b = [e], l.evenMultiple && b.length % 2 !== 0)
      return null;
    for (var w = [], C = [], E = [], x = "", T = !1, D = 0; D < b.length; D++) {
      var P = n.parse(r, b[D], t, "multiple");
      T = T || fe(P.value), w.push(P.value), E.push(P.pfValue != null ? P.pfValue : P.value), C.push(P.units), x += (D > 0 ? " " : "") + P.strValue;
    }
    return l.validate && !l.validate(w, C) ? null : l.singleEnum && T ? w.length === 1 && fe(w[0]) ? {
      name: r,
      value: w[0],
      strValue: w[0],
      bypass: t
    } : null : {
      name: r,
      value: w,
      pfValue: E,
      strValue: x,
      bypass: t,
      units: C
    };
  }
  var A = function() {
    for (var V = 0; V < l.enums.length; V++) {
      var N = l.enums[V];
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
    var B, k = "px";
    if (l.units && (B = l.units), l.implicitUnits && (k = l.implicitUnits), !l.unitless)
      if (u) {
        var L = "px|em" + (l.allowPercent ? "|\\%" : "");
        B && (L = B);
        var M = e.match("^(" + Ke + ")(" + L + ")?$");
        M && (e = M[1], B = M[2] || k);
      } else
        (!B || l.implicitUnits) && (B = k);
    if (e = parseFloat(e), isNaN(e) && l.enums === void 0)
      return null;
    if (isNaN(e) && l.enums !== void 0)
      return e = s, A();
    if (l.integer && !hd(e) || l.min !== void 0 && (e < l.min || l.strictMin && e === l.min) || l.max !== void 0 && (e > l.max || l.strictMax && e === l.max))
      return null;
    var I = {
      name: r,
      value: e,
      strValue: "" + e + (B || ""),
      units: B,
      bypass: t
    };
    return l.unitless || B !== "px" && B !== "em" ? I.pfValue = e : I.pfValue = B === "px" || !B ? e : this.getEmSizeInPixels() * e, (B === "ms" || B === "s") && (I.pfValue = B === "ms" ? e : 1e3 * e), (B === "deg" || B === "rad") && (I.pfValue = B === "rad" ? e : Eh(e)), B === "%" && (I.pfValue = e / 100), I;
  } else if (l.propList) {
    var R = [], O = "" + e;
    if (O !== "none") {
      for (var _ = O.split(/\s*,\s*|\s+/), U = 0; U < _.length; U++) {
        var z = _[U].trim();
        n.properties[z] ? R.push(z) : Re("`" + z + "` is not a valid property name");
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
    var H = Vc(e);
    return H ? {
      name: r,
      value: H,
      pfValue: H,
      strValue: "rgb(" + H[0] + "," + H[1] + "," + H[2] + ")",
      // n.b. no spaces b/c of multiple support
      bypass: t
    } : null;
  } else if (l.regex || l.regexes) {
    if (l.enums) {
      var G = A();
      if (G)
        return G;
    }
    for (var Q = l.regexes ? l.regexes : [l.regex], W = 0; W < Q.length; W++) {
      var X = new RegExp(Q[W]), Y = X.exec(e);
      if (Y)
        return {
          name: r,
          value: l.singleRegexMatchValue ? Y[1] : Y,
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
    } : l.enums ? A() : null;
};
var rt = function(e) {
  if (!(this instanceof rt))
    return new rt(e);
  if (!go(e)) {
    qe("A style must have a core reference");
    return;
  }
  this._private = {
    cy: e,
    coreStyle: {}
  }, this.length = 0, this.resetToDefault();
}, ft = rt.prototype;
ft.instanceString = function() {
  return "style";
};
ft.clear = function() {
  for (var r = this._private, e = r.cy, t = e.elements(), a = 0; a < this.length; a++)
    this[a] = void 0;
  return this.length = 0, r.contextStyles = {}, r.propDiffs = {}, this.cleanElements(t, !0), t.forEach(function(n) {
    var i = n[0]._private;
    i.styleDirty = !0, i.appliedInitStyle = !1;
  }), this;
};
ft.resetToDefault = function() {
  return this.clear(), this.addDefaultStylesheet(), this;
};
ft.core = function(r) {
  return this._private.coreStyle[r] || this.getDefaultProperty(r);
};
ft.selector = function(r) {
  var e = r === "core" ? null : new cr(r), t = this.length++;
  return this[t] = {
    selector: e,
    properties: [],
    mappedProperties: [],
    index: t
  }, this;
};
ft.css = function() {
  var r = this, e = arguments;
  if (e.length === 1)
    for (var t = e[0], a = 0; a < r.properties.length; a++) {
      var n = r.properties[a], i = t[n.name];
      i === void 0 && (i = t[Zn(n.name)]), i !== void 0 && this.cssRule(n.name, i);
    }
  else
    e.length === 2 && this.cssRule(e[0], e[1]);
  return this;
};
ft.style = ft.css;
ft.cssRule = function(r, e) {
  var t = this.parse(r, e);
  if (t) {
    var a = this.length - 1;
    this[a].properties.push(t), this[a].properties[t.name] = t, t.name.match(/pie-(\d+)-background-size/) && t.value && (this._private.hasPie = !0), t.mapped && this[a].mappedProperties.push(t);
    var n = !this[a].selector;
    n && (this._private.coreStyle[t.name] = t);
  }
  return this;
};
ft.append = function(r) {
  return zc(r) ? r.appendToStyle(this) : Ie(r) ? this.appendFromJson(r) : fe(r) && this.appendFromString(r), this;
};
rt.fromJson = function(r, e) {
  var t = new rt(r);
  return t.fromJson(e), t;
};
rt.fromString = function(r, e) {
  return new rt(r).fromString(e);
};
[at, Xa, Bo, qt, oi, Lo, nt, ui].forEach(function(r) {
  pe(ft, r);
});
rt.types = ft.types;
rt.properties = ft.properties;
rt.propertyGroups = ft.propertyGroups;
rt.propertyGroupNames = ft.propertyGroupNames;
rt.propertyGroupKeys = ft.propertyGroupKeys;
var Ty = {
  style: function(e) {
    if (e) {
      var t = this.setStyle(e);
      t.update();
    }
    return this._private.style;
  },
  setStyle: function(e) {
    var t = this._private;
    return zc(e) ? t.style = e.generateStyle(this) : Ie(e) ? t.style = rt.fromJson(this, e) : fe(e) ? t.style = rt.fromString(this, e) : t.style = rt(this), t.style;
  },
  // e.g. cy.data() changed => recalc ele mappers
  updateStyle: function() {
    this.mutableElements().updateStyle();
  }
}, Sy = "single", Pr = {
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
    if (t.selectionType == null && (t.selectionType = Sy), e !== void 0)
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
        if (fe(e[0]))
          return a = e[0], t[a];
        if (ke(e[0])) {
          if (!this._private.panningEnabled)
            return this;
          i = e[0], s = i.x, o = i.y, ae(s) && (t.x = s), ae(o) && (t.y = o), this.emit("pan viewport");
        }
        break;
      case 2:
        if (!this._private.panningEnabled)
          return this;
        a = e[0], n = e[1], (a === "x" || a === "y") && ae(n) && (t[a] = n), this.emit("pan viewport");
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
        ke(e) && (o = a[0], u = o.x, l = o.y, ae(u) && (n.x += u), ae(l) && (n.y += l), this.emit("pan viewport"));
        break;
      case 2:
        i = e, s = t, (i === "x" || i === "y") && ae(s) && (n[i] += s), this.emit("pan viewport");
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
    if (ae(e) && t === void 0 && (t = e, e = void 0), !(!this._private.panningEnabled || !this._private.zoomingEnabled)) {
      var a;
      if (fe(e)) {
        var n = e;
        e = this.$(n);
      } else if (yd(e)) {
        var i = e;
        a = {
          x1: i.x1,
          y1: i.y1,
          x2: i.x2,
          y2: i.y2
        }, a.w = a.x2 - a.x1, a.h = a.y2 - a.y1;
      } else
        Et(e) || (e = this.mutableElements());
      if (!(Et(e) && e.empty())) {
        a = a || e.boundingBox();
        var s = this.width(), o = this.height(), u;
        if (t = ae(t) ? t : 0, !isNaN(s) && !isNaN(o) && s > 0 && o > 0 && !isNaN(a.w) && !isNaN(a.h) && a.w > 0 && a.h > 0) {
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
    return ae(e) && ae(t) && e <= t ? (a.minZoom = e, a.maxZoom = t) : ae(e) && t === void 0 && e <= a.maxZoom ? a.minZoom = e : ae(t) && e === void 0 && t >= a.minZoom && (a.maxZoom = t), this;
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
    if (t.zoomingEnabled || (o = !0), ae(e) ? s = e : ke(e) && (s = e.level, e.position != null ? i = Qn(e.position, n, a) : e.renderedPosition != null && (i = e.renderedPosition), i != null && !t.panningEnabled && (o = !0)), s = s > t.maxZoom ? t.maxZoom : s, s = s < t.minZoom ? t.minZoom : s, o || !ae(s) || s === n || i != null && (!ae(i.x) || !ae(i.y)))
      return null;
    if (i != null) {
      var u = a, l = n, c = s, f = {
        x: -c / l * (i.x - u.x) + i.x,
        y: -c / l * (i.y - u.y) + i.y
      };
      return {
        zoomed: !0,
        panned: !0,
        zoom: c,
        pan: f
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
    if (ae(e.zoom) || (a = !1), ke(e.pan) || (n = !1), !a && !n)
      return this;
    if (a) {
      var u = e.zoom;
      u < t.minZoom || u > t.maxZoom || !t.zoomingEnabled ? s = !0 : (t.zoom = u, i.push("zoom"));
    }
    if (n && (!s || !e.cancelOnFailedZoom) && t.panningEnabled) {
      var l = e.pan;
      ae(l.x) && (t.pan.x = l.x, o = !1), ae(l.y) && (t.pan.y = l.y, o = !1), o || i.push("pan");
    }
    return i.length > 0 && (i.push("viewport"), this.emit(i.join(" ")), this.notify("viewport")), this;
  },
  center: function(e) {
    var t = this.getCenterPan(e);
    return t && (this._private.pan = t, this.emit("pan viewport"), this.notify("viewport")), this;
  },
  getCenterPan: function(e, t) {
    if (this._private.panningEnabled) {
      if (fe(e)) {
        var a = e;
        e = this.mutableElements().filter(a);
      } else
        Et(e) || (e = this.mutableElements());
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
Pr.centre = Pr.center;
Pr.autolockNodes = Pr.autolock;
Pr.autoungrabifyNodes = Pr.autoungrabify;
var $a = {
  data: Le.data({
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
  removeData: Le.removeData({
    field: "data",
    event: "data",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  }),
  scratch: Le.data({
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
  removeScratch: Le.removeData({
    field: "scratch",
    event: "scratch",
    triggerFnName: "trigger",
    triggerEvent: !0,
    updateStyle: !0
  })
};
$a.attr = $a.data;
$a.removeAttr = $a.removeData;
var Va = function(e) {
  var t = this;
  e = pe({}, e);
  var a = e.container;
  a && !Mn(a) && Mn(a[0]) && (a = a[0]);
  var n = a ? a._cyreg : null;
  n = n || {}, n && n.cy && (n.cy.destroy(), n = {});
  var i = n.readies = n.readies || [];
  a && (a._cyreg = n), n.cy = t;
  var s = Ge !== void 0 && a !== void 0 && !e.headless, o = e;
  o.layout = pe({
    name: s ? "grid" : "null"
  }, o.layout), o.renderer = pe({
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
    elements: new st(this),
    // elements in the graph
    listeners: [],
    // list of listeners
    aniEles: new st(this),
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
    zoom: ae(o.zoom) ? o.zoom : 1,
    pan: {
      x: ke(o.pan) && ae(o.pan.x) ? o.pan.x : 0,
      y: ke(o.pan) && ae(o.pan.y) ? o.pan.y : 0
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
    var g = d.some(md);
    if (g)
      return aa.all(d).then(y);
    y(d);
  };
  l.styleEnabled && t.setStyle([]);
  var f = pe({}, o, o.renderer);
  t.initRenderer(f);
  var v = function(d, y, g) {
    t.notifications(!1);
    var p = t.mutableElements();
    p.length > 0 && p.remove(), d != null && (ke(d) || Ie(d)) && t.add(d), t.one("layoutready", function(b) {
      t.notifications(!0), t.emit(b), t.one("load", y), t.emitAndNotify("load");
    }).one("layoutstop", function() {
      t.one("done", g), t.emit("done");
    });
    var m = pe({}, t._private.options.layout);
    m.eles = t.elements(), t.layout(m).run();
  };
  c([o.style, o.elements], function(h) {
    var d = h[0], y = h[1];
    l.styleEnabled && t.style().append(d), v(y, function() {
      t.startAnimationLoop(), l.ready = !0, _e(o.ready) && t.on("ready", o.ready);
      for (var g = 0; g < i.length; g++) {
        var p = i[g];
        t.on("ready", p);
      }
      n && (n.readies = []), t.emit("ready");
    }, o.done);
  });
}, Vn = Va.prototype;
pe(Vn, {
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
      return Ge;
    var t = this._private.container.ownerDocument;
    return t === void 0 || t == null ? Ge : t.defaultView || Ge;
  },
  mount: function(e) {
    if (e != null) {
      var t = this, a = t._private, n = a.options;
      return !Mn(e) && Mn(e[0]) && (e = e[0]), t.stopAnimationLoop(), t.destroyRenderer(), a.container = e, a.styleEnabled = !0, t.invalidateSize(), t.initRenderer(pe({}, n, n.renderer, {
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
    return Vt(this._private.options);
  },
  json: function(e) {
    var t = this, a = t._private, n = t.mutableElements(), i = function(w) {
      return t.getElementById(w.id());
    };
    if (ke(e)) {
      if (t.startBatch(), e.elements) {
        var s = {}, o = function(w, C) {
          for (var E = [], x = [], T = 0; T < w.length; T++) {
            var D = w[T];
            if (!D.data.id) {
              Re("cy.json() cannot handle elements without an ID attribute");
              continue;
            }
            var P = "" + D.data.id, A = t.getElementById(P);
            s[P] = !0, A.length !== 0 ? x.push({
              ele: A,
              json: D
            }) : (C && (D.group = C), E.push(D));
          }
          t.add(E);
          for (var B = 0; B < x.length; B++) {
            var k = x[B], L = k.ele, M = k.json;
            L.json(M);
          }
        };
        if (Ie(e.elements))
          o(e.elements);
        else
          for (var u = ["nodes", "edges"], l = 0; l < u.length; l++) {
            var c = u[l], f = e.elements[c];
            Ie(f) && o(f, c);
          }
        var v = t.collection();
        n.filter(function(b) {
          return !s[b.id()];
        }).forEach(function(b) {
          b.isParent() ? v.merge(b) : b.remove();
        }), v.forEach(function(b) {
          return b.children().move({
            parent: null
          });
        }), v.forEach(function(b) {
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
      })), this._private.styleEnabled && (p.style = t.style().json()), p.data = Vt(t.data());
      var m = a.options;
      return p.zoomingEnabled = a.zoomingEnabled, p.userZoomingEnabled = a.userZoomingEnabled, p.zoom = a.zoom, p.minZoom = a.minZoom, p.maxZoom = a.maxZoom, p.panningEnabled = a.panningEnabled, p.userPanningEnabled = a.userPanningEnabled, p.pan = Vt(a.pan), p.boxSelectionEnabled = a.boxSelectionEnabled, p.renderer = Vt(m.renderer), p.hideEdgesOnViewport = m.hideEdgesOnViewport, p.textureOnViewport = m.textureOnViewport, p.wheelSensitivity = m.wheelSensitivity, p.motionBlur = m.motionBlur, p.multiClickDebounceTime = m.multiClickDebounceTime, p;
    }
  }
});
Vn.$id = Vn.getElementById;
[hy, by, Ff, js, An, xy, eo, kn, Ty, Pr, $a].forEach(function(r) {
  pe(Vn, r);
});
var Ay = {
  fit: !0,
  // whether to fit the viewport to the graph
  directed: !1,
  // whether the tree is directed downwards (or edges can point in any direction if false)
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
}, ky = {
  maximal: !1,
  // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only); setting acyclic to true sets maximal to true also
  acyclic: !1
  // whether the tree is acyclic and thus a node could be shifted (due to the maximal option) multiple times without causing an infinite loop; setting to true sets maximal to true also; if you are uncertain whether a tree is acyclic, set to false to avoid potential infinite loops
}, zr = function(e) {
  return e.scratch("breadthfirst");
}, Xl = function(e, t) {
  return e.scratch("breadthfirst", t);
};
function $f(r) {
  this.options = pe({}, Ay, ky, r);
}
$f.prototype.run = function() {
  var r = this.options, e = r.cy, t = r.eles, a = t.nodes().filter(function(oe) {
    return oe.isChildless();
  }), n = t, i = r.directed, s = r.acyclic || r.maximal || r.maximalAdjustments > 0, o = !!r.boundingBox, u = e.extent(), l = bt(o ? r.boundingBox : {
    x1: u.x1,
    y1: u.y1,
    w: u.w,
    h: u.h
  }), c;
  if (Et(r.roots))
    c = r.roots;
  else if (Ie(r.roots)) {
    for (var f = [], v = 0; v < r.roots.length; v++) {
      var h = r.roots[v], d = e.getElementById(h);
      f.push(d);
    }
    c = e.collection(f);
  } else if (fe(r.roots))
    c = e.$(r.roots);
  else if (i)
    c = a.roots();
  else {
    var y = t.components();
    c = e.collection();
    for (var g = function() {
      var le = y[p], he = le.maxDegree(!1), me = le.filter(function(ge) {
        return ge.degree(!1) === he;
      });
      c = c.add(me);
    }, p = 0; p < y.length; p++)
      g();
  }
  var m = [], b = {}, w = function(le, he) {
    m[he] == null && (m[he] = []);
    var me = m[he].length;
    m[he].push(le), Xl(le, {
      index: me,
      depth: he
    });
  }, C = function(le, he) {
    var me = zr(le), ge = me.depth, be = me.index;
    m[ge][be] = null, le.isChildless() && w(le, he);
  };
  n.bfs({
    roots: c,
    directed: r.directed,
    visit: function(le, he, me, ge, be) {
      var Ce = le[0], Se = Ce.id();
      Ce.isChildless() && w(Ce, be), b[Se] = !0;
    }
  });
  for (var E = [], x = 0; x < a.length; x++) {
    var T = a[x];
    b[T.id()] || E.push(T);
  }
  var D = function(le) {
    for (var he = m[le], me = 0; me < he.length; me++) {
      var ge = he[me];
      if (ge == null) {
        he.splice(me, 1), me--;
        continue;
      }
      Xl(ge, {
        depth: le,
        index: me
      });
    }
  }, P = function(le, he) {
    for (var me = zr(le), ge = le.incomers().filter(function(Z) {
      return Z.isNode() && t.has(Z);
    }), be = -1, Ce = le.id(), Se = 0; Se < ge.length; Se++) {
      var re = ge[Se], S = zr(re);
      be = Math.max(be, S.depth);
    }
    if (me.depth <= be) {
      if (!r.acyclic && he[Ce])
        return null;
      var $ = be + 1;
      return C(le, $), he[Ce] = $, !0;
    }
    return !1;
  };
  if (i && s) {
    var A = [], B = {}, k = function(le) {
      return A.push(le);
    }, L = function() {
      return A.shift();
    };
    for (a.forEach(function(oe) {
      return A.push(oe);
    }); A.length > 0; ) {
      var M = L(), I = P(M, B);
      if (I)
        M.outgoers().filter(function(oe) {
          return oe.isNode() && t.has(oe);
        }).forEach(k);
      else if (I === null) {
        Re("Detected double maximal shift for node `" + M.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
        break;
      }
    }
  }
  var R = 0;
  if (r.avoidOverlap)
    for (var O = 0; O < a.length; O++) {
      var _ = a[O], U = _.layoutDimensions(r), z = U.w, H = U.h;
      R = Math.max(R, z, H);
    }
  var G = {}, Q = function(le) {
    if (G[le.id()])
      return G[le.id()];
    for (var he = zr(le).depth, me = le.neighborhood(), ge = 0, be = 0, Ce = 0; Ce < me.length; Ce++) {
      var Se = me[Ce];
      if (!(Se.isEdge() || Se.isParent() || !a.has(Se))) {
        var re = zr(Se);
        if (re != null) {
          var S = re.index, $ = re.depth;
          if (!(S == null || $ == null)) {
            var Z = m[$].length;
            $ < he && (ge += S / Z, be++);
          }
        }
      }
    }
    return be = Math.max(1, be), ge = ge / be, be === 0 && (ge = 0), G[le.id()] = ge, ge;
  }, W = function(le, he) {
    var me = Q(le), ge = Q(he), be = me - ge;
    return be === 0 ? $c(le.id(), he.id()) : be;
  };
  r.depthSort !== void 0 && (W = r.depthSort);
  for (var X = m.length, Y = 0; Y < X; Y++)
    m[Y].sort(W), D(Y);
  for (var ee = [], V = 0; V < E.length; V++)
    ee.push(E[V]);
  var N = function() {
    for (var le = 0; le < X; le++)
      D(le);
  };
  ee.length && (m.unshift(ee), X = m.length, N());
  for (var K = 0, j = 0; j < X; j++)
    K = Math.max(m[j].length, K);
  var te = {
    x: l.x1 + l.w / 2,
    y: l.y1 + l.h / 2
  }, se = a.reduce(function(oe, le) {
    return function(he) {
      return {
        w: oe.w === -1 ? he.w : (oe.w + he.w) / 2,
        h: oe.h === -1 ? he.h : (oe.h + he.h) / 2
      };
    }(le.boundingBox({
      includeLabels: r.nodeDimensionsIncludeLabels
    }));
  }, {
    w: -1,
    h: -1
  }), de = Math.max(
    // only one depth
    X === 1 ? 0 : (
      // inside a bounding box, no need for top & bottom padding
      o ? (l.h - r.padding * 2 - se.h) / (X - 1) : (l.h - r.padding * 2 - se.h) / (X + 1)
    ),
    R
  ), De = m.reduce(function(oe, le) {
    return Math.max(oe, le.length);
  }, 0), Be = function(le) {
    var he = zr(le), me = he.depth, ge = he.index;
    if (r.circle) {
      var be = Math.min(l.w / 2 / X, l.h / 2 / X);
      be = Math.max(be, R);
      var Ce = be * me + be - (X > 0 && m[0].length <= 3 ? be / 2 : 0), Se = 2 * Math.PI / m[me].length * ge;
      return me === 0 && m[0].length === 1 && (Ce = 1), {
        x: te.x + Ce * Math.cos(Se),
        y: te.y + Ce * Math.sin(Se)
      };
    } else {
      var re = m[me].length, S = Math.max(
        // only one depth
        re === 1 ? 0 : (
          // inside a bounding box, no need for left & right padding
          o ? (l.w - r.padding * 2 - se.w) / ((r.grid ? De : re) - 1) : (l.w - r.padding * 2 - se.w) / ((r.grid ? De : re) + 1)
        ),
        R
      ), $ = {
        x: te.x + (ge + 1 - (re + 1) / 2) * S,
        y: te.y + (me + 1 - (X + 1) / 2) * de
      };
      return $;
    }
  };
  return t.nodes().layoutPositions(this, r, Be), this;
};
var Dy = {
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
function Vf(r) {
  this.options = pe({}, Dy, r);
}
Vf.prototype.run = function() {
  var r = this.options, e = r, t = r.cy, a = e.eles, n = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, i = a.nodes().not(":parent");
  e.sort && (i = i.sort(e.sort));
  for (var s = bt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: t.width(),
    h: t.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, u = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / i.length : e.sweep, l = u / Math.max(1, i.length - 1), c, f = 0, v = 0; v < i.length; v++) {
    var h = i[v], d = h.layoutDimensions(e), y = d.w, g = d.h;
    f = Math.max(f, y, g);
  }
  if (ae(e.radius) ? c = e.radius : i.length <= 1 ? c = 0 : c = Math.min(s.h, s.w) / 2 - f, i.length > 1 && e.avoidOverlap) {
    f *= 1.75;
    var p = Math.cos(l) - Math.cos(0), m = Math.sin(l) - Math.sin(0), b = Math.sqrt(f * f / (p * p + m * m));
    c = Math.max(b, c);
  }
  var w = function(E, x) {
    var T = e.startAngle + x * l * (n ? 1 : -1), D = c * Math.cos(T), P = c * Math.sin(T), A = {
      x: o.x + D,
      y: o.y + P
    };
    return A;
  };
  return a.nodes().layoutPositions(this, e, w), this;
};
var Py = {
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
function qf(r) {
  this.options = pe({}, Py, r);
}
qf.prototype.run = function() {
  for (var r = this.options, e = r, t = e.counterclockwise !== void 0 ? !e.counterclockwise : e.clockwise, a = r.cy, n = e.eles, i = n.nodes().not(":parent"), s = bt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: a.width(),
    h: a.height()
  }), o = {
    x: s.x1 + s.w / 2,
    y: s.y1 + s.h / 2
  }, u = [], l = 0, c = 0; c < i.length; c++) {
    var f = i[c], v = void 0;
    v = e.concentric(f), u.push({
      value: v,
      node: f
    }), f._private.scratch.concentric = v;
  }
  i.updateStyle();
  for (var h = 0; h < i.length; h++) {
    var d = i[h], y = d.layoutDimensions(e);
    l = Math.max(l, y.w, y.h);
  }
  u.sort(function(se, de) {
    return de.value - se.value;
  });
  for (var g = e.levelWidth(i), p = [[]], m = p[0], b = 0; b < u.length; b++) {
    var w = u[b];
    if (m.length > 0) {
      var C = Math.abs(m[0].value - w.value);
      C >= g && (m = [], p.push(m));
    }
    m.push(w);
  }
  var E = l + e.minNodeSpacing;
  if (!e.avoidOverlap) {
    var x = p.length > 0 && p[0].length > 1, T = Math.min(s.w, s.h) / 2 - E, D = T / (p.length + x ? 1 : 0);
    E = Math.min(E, D);
  }
  for (var P = 0, A = 0; A < p.length; A++) {
    var B = p[A], k = e.sweep === void 0 ? 2 * Math.PI - 2 * Math.PI / B.length : e.sweep, L = B.dTheta = k / Math.max(1, B.length - 1);
    if (B.length > 1 && e.avoidOverlap) {
      var M = Math.cos(L) - Math.cos(0), I = Math.sin(L) - Math.sin(0), R = Math.sqrt(E * E / (M * M + I * I));
      P = Math.max(R, P);
    }
    B.r = P, P += E;
  }
  if (e.equidistant) {
    for (var O = 0, _ = 0, U = 0; U < p.length; U++) {
      var z = p[U], H = z.r - _;
      O = Math.max(O, H);
    }
    _ = 0;
    for (var G = 0; G < p.length; G++) {
      var Q = p[G];
      G === 0 && (_ = Q.r), Q.r = _, _ += O;
    }
  }
  for (var W = {}, X = 0; X < p.length; X++)
    for (var Y = p[X], ee = Y.dTheta, V = Y.r, N = 0; N < Y.length; N++) {
      var K = Y[N], j = e.startAngle + (t ? 1 : -1) * ee * N, te = {
        x: o.x + V * Math.cos(j),
        y: o.y + V * Math.sin(j)
      };
      W[K.node.id()] = te;
    }
  return n.nodes().layoutPositions(this, e, function(se) {
    var de = se.id();
    return W[de];
  }), this;
};
var Fs, By = {
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
function li(r) {
  this.options = pe({}, By, r), this.options.layout = this;
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
li.prototype.run = function() {
  var r = this.options, e = r.cy, t = this;
  t.stopped = !1, (r.animate === !0 || r.animate === !1) && t.emit({
    type: "layoutstart",
    layout: t
  }), r.debug === !0 ? Fs = !0 : Fs = !1;
  var a = Ly(e, t, r);
  Fs && My(a), r.randomize && Iy(a);
  var n = Zt(), i = function() {
    Oy(a, e, r), r.fit === !0 && e.fit(r.padding);
  }, s = function(v) {
    return !(t.stopped || v >= r.numIter || (Ny(a, r), a.temperature = a.temperature * r.coolingFactor, a.temperature < r.minTemp));
  }, o = function() {
    if (r.animate === !0 || r.animate === !1)
      i(), t.one("layoutstop", r.stop), t.emit({
        type: "layoutstop",
        layout: t
      });
    else {
      var v = r.eles.nodes(), h = Hf(a, r, v);
      v.layoutPositions(t, r, h);
    }
  }, u = 0, l = !0;
  if (r.animate === !0) {
    var c = function() {
      for (var v = 0; l && v < r.refresh; )
        l = s(u), u++, v++;
      if (!l)
        Jl(a, r), o();
      else {
        var h = Zt();
        h - n >= r.animationThreshold && i(), In(c);
      }
    };
    c();
  } else {
    for (; l; )
      l = s(u), u++;
    Jl(a, r), o();
  }
  return this;
};
li.prototype.stop = function() {
  return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
};
li.prototype.destroy = function() {
  return this.thread && this.thread.stop(), this;
};
var Ly = function(e, t, a) {
  for (var n = a.eles.edges(), i = a.eles.nodes(), s = bt(a.boundingBox ? a.boundingBox : {
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
    for (var f = u[c], v = 0; v < f.length; v++) {
      var h = f[v];
      l[h.id()] = c;
    }
  for (var c = 0; c < o.nodeSize; c++) {
    var d = i[c], y = d.layoutDimensions(a), g = {};
    g.isLocked = d.locked(), g.id = d.data("id"), g.parentId = d.data("parent"), g.cmptId = l[d.id()], g.children = [], g.positionX = d.position("x"), g.positionY = d.position("y"), g.offsetX = 0, g.offsetY = 0, g.height = y.w, g.width = y.h, g.maxX = g.positionX + g.width / 2, g.minX = g.positionX - g.width / 2, g.maxY = g.positionY + g.height / 2, g.minY = g.positionY - g.height / 2, g.padLeft = parseFloat(d.style("padding")), g.padRight = parseFloat(d.style("padding")), g.padTop = parseFloat(d.style("padding")), g.padBottom = parseFloat(d.style("padding")), g.nodeRepulsion = _e(a.nodeRepulsion) ? a.nodeRepulsion(d) : a.nodeRepulsion, o.layoutNodes.push(g), o.idToIndex[g.id] = c;
  }
  for (var p = [], m = 0, b = -1, w = [], c = 0; c < o.nodeSize; c++) {
    var d = o.layoutNodes[c], C = d.parentId;
    C != null ? o.layoutNodes[o.idToIndex[C]].children.push(d.id) : (p[++b] = d.id, w.push(d.id));
  }
  for (o.graphSet.push(w); m <= b; ) {
    var E = p[m++], x = o.idToIndex[E], h = o.layoutNodes[x], T = h.children;
    if (T.length > 0) {
      o.graphSet.push(T);
      for (var c = 0; c < T.length; c++)
        p[++b] = T[c];
    }
  }
  for (var c = 0; c < o.graphSet.length; c++)
    for (var D = o.graphSet[c], v = 0; v < D.length; v++) {
      var P = o.idToIndex[D[v]];
      o.indexToGraph[P] = c;
    }
  for (var c = 0; c < o.edgeSize; c++) {
    var A = n[c], B = {};
    B.id = A.data("id"), B.sourceId = A.data("source"), B.targetId = A.data("target");
    var k = _e(a.idealEdgeLength) ? a.idealEdgeLength(A) : a.idealEdgeLength, L = _e(a.edgeElasticity) ? a.edgeElasticity(A) : a.edgeElasticity, M = o.idToIndex[B.sourceId], I = o.idToIndex[B.targetId], R = o.indexToGraph[M], O = o.indexToGraph[I];
    if (R != O) {
      for (var _ = Ry(B.sourceId, B.targetId, o), U = o.graphSet[_], z = 0, g = o.layoutNodes[M]; U.indexOf(g.id) === -1; )
        g = o.layoutNodes[o.idToIndex[g.parentId]], z++;
      for (g = o.layoutNodes[I]; U.indexOf(g.id) === -1; )
        g = o.layoutNodes[o.idToIndex[g.parentId]], z++;
      k *= z * a.nestingFactor;
    }
    B.idealLength = k, B.elasticity = L, o.layoutEdges.push(B);
  }
  return o;
}, Ry = function(e, t, a) {
  var n = _f(e, t, 0, a);
  return 2 > n.count ? 0 : n.graph;
}, _f = function(e, t, a, n) {
  var i = n.graphSet[a];
  if (-1 < i.indexOf(e) && -1 < i.indexOf(t))
    return {
      count: 2,
      graph: a
    };
  for (var s = 0, o = 0; o < i.length; o++) {
    var u = i[o], l = n.idToIndex[u], c = n.layoutNodes[l].children;
    if (c.length !== 0) {
      var f = n.indexToGraph[n.idToIndex[c[0]]], v = _f(e, t, f, n);
      if (v.count !== 0)
        if (v.count === 1) {
          if (s++, s === 2)
            break;
        } else
          return v;
    }
  }
  return {
    count: s,
    graph: a
  };
}, My, Iy = function(e, t) {
  for (var a = e.clientWidth, n = e.clientHeight, i = 0; i < e.nodeSize; i++) {
    var s = e.layoutNodes[i];
    s.children.length === 0 && !s.isLocked && (s.positionX = Math.random() * a, s.positionY = Math.random() * n);
  }
}, Hf = function(e, t, a) {
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
      var l = (u.positionX - i.x1) / i.w, c = (u.positionY - i.y1) / i.h;
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
}, Oy = function(e, t, a) {
  var n = a.layout, i = a.eles.nodes(), s = Hf(e, a, i);
  i.positions(s), e.ready !== !0 && (e.ready = !0, n.one("layoutready", a.ready), n.emit({
    type: "layoutready",
    layout: this
  }));
}, Ny = function(e, t, a) {
  zy(e, t), Vy(e), qy(e, t), _y(e), Hy(e);
}, zy = function(e, t) {
  for (var a = 0; a < e.graphSet.length; a++)
    for (var n = e.graphSet[a], i = n.length, s = 0; s < i; s++)
      for (var o = e.layoutNodes[e.idToIndex[n[s]]], u = s + 1; u < i; u++) {
        var l = e.layoutNodes[e.idToIndex[n[u]]];
        Fy(o, l, e, t);
      }
}, Ql = function(e) {
  return -1 + 2 * e * Math.random();
}, Fy = function(e, t, a, n) {
  var i = e.cmptId, s = t.cmptId;
  if (!(i !== s && !a.isCompound)) {
    var o = t.positionX - e.positionX, u = t.positionY - e.positionY, l = 1;
    o === 0 && u === 0 && (o = Ql(l), u = Ql(l));
    var c = $y(e, t, o, u);
    if (c > 0)
      var f = n.nodeOverlap * c, v = Math.sqrt(o * o + u * u), h = f * o / v, d = f * u / v;
    else
      var y = qn(e, o, u), g = qn(t, -1 * o, -1 * u), p = g.x - y.x, m = g.y - y.y, b = p * p + m * m, v = Math.sqrt(b), f = (e.nodeRepulsion + t.nodeRepulsion) / b, h = f * p / v, d = f * m / v;
    e.isLocked || (e.offsetX -= h, e.offsetY -= d), t.isLocked || (t.offsetX += h, t.offsetY += d);
  }
}, $y = function(e, t, a, n) {
  if (a > 0)
    var i = e.maxX - t.minX;
  else
    var i = t.maxX - e.minX;
  if (n > 0)
    var s = e.maxY - t.minY;
  else
    var s = t.maxY - e.minY;
  return i >= 0 && s >= 0 ? Math.sqrt(i * i + s * s) : 0;
}, qn = function(e, t, a) {
  var n = e.positionX, i = e.positionY, s = e.height || 1, o = e.width || 1, u = a / t, l = s / o, c = {};
  return t === 0 && 0 < a || t === 0 && 0 > a ? (c.x = n, c.y = i + s / 2, c) : 0 < t && -1 * l <= u && u <= l ? (c.x = n + o / 2, c.y = i + o * a / 2 / t, c) : 0 > t && -1 * l <= u && u <= l ? (c.x = n - o / 2, c.y = i - o * a / 2 / t, c) : 0 < a && (u <= -1 * l || u >= l) ? (c.x = n + s * t / 2 / a, c.y = i + s / 2, c) : (0 > a && (u <= -1 * l || u >= l) && (c.x = n - s * t / 2 / a, c.y = i - s / 2), c);
}, Vy = function(e, t) {
  for (var a = 0; a < e.edgeSize; a++) {
    var n = e.layoutEdges[a], i = e.idToIndex[n.sourceId], s = e.layoutNodes[i], o = e.idToIndex[n.targetId], u = e.layoutNodes[o], l = u.positionX - s.positionX, c = u.positionY - s.positionY;
    if (!(l === 0 && c === 0)) {
      var f = qn(s, l, c), v = qn(u, -1 * l, -1 * c), h = v.x - f.x, d = v.y - f.y, y = Math.sqrt(h * h + d * d), g = Math.pow(n.idealLength - y, 2) / n.elasticity;
      if (y !== 0)
        var p = g * h / y, m = g * d / y;
      else
        var p = 0, m = 0;
      s.isLocked || (s.offsetX += p, s.offsetY += m), u.isLocked || (u.offsetX -= p, u.offsetY -= m);
    }
  }
}, qy = function(e, t) {
  if (t.gravity !== 0)
    for (var a = 1, n = 0; n < e.graphSet.length; n++) {
      var i = e.graphSet[n], s = i.length;
      if (n === 0)
        var o = e.clientHeight / 2, u = e.clientWidth / 2;
      else
        var l = e.layoutNodes[e.idToIndex[i[0]]], c = e.layoutNodes[e.idToIndex[l.parentId]], o = c.positionX, u = c.positionY;
      for (var f = 0; f < s; f++) {
        var v = e.layoutNodes[e.idToIndex[i[f]]];
        if (!v.isLocked) {
          var h = o - v.positionX, d = u - v.positionY, y = Math.sqrt(h * h + d * d);
          if (y > a) {
            var g = t.gravity * h / y, p = t.gravity * d / y;
            v.offsetX += g, v.offsetY += p;
          }
        }
      }
    }
}, _y = function(e, t) {
  var a = [], n = 0, i = -1;
  for (a.push.apply(a, e.graphSet[0]), i += e.graphSet[0].length; n <= i; ) {
    var s = a[n++], o = e.idToIndex[s], u = e.layoutNodes[o], l = u.children;
    if (0 < l.length && !u.isLocked) {
      for (var c = u.offsetX, f = u.offsetY, v = 0; v < l.length; v++) {
        var h = e.layoutNodes[e.idToIndex[l[v]]];
        h.offsetX += c, h.offsetY += f, a[++i] = l[v];
      }
      u.offsetX = 0, u.offsetY = 0;
    }
  }
}, Hy = function(e, t) {
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && (n.maxX = void 0, n.minX = void 0, n.maxY = void 0, n.minY = void 0);
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    if (!(0 < n.children.length || n.isLocked)) {
      var i = Uy(n.offsetX, n.offsetY, e.temperature);
      n.positionX += i.x, n.positionY += i.y, n.offsetX = 0, n.offsetY = 0, n.minX = n.positionX - n.width, n.maxX = n.positionX + n.width, n.minY = n.positionY - n.height, n.maxY = n.positionY + n.height, Uf(n, e);
    }
  }
  for (var a = 0; a < e.nodeSize; a++) {
    var n = e.layoutNodes[a];
    0 < n.children.length && !n.isLocked && (n.positionX = (n.maxX + n.minX) / 2, n.positionY = (n.maxY + n.minY) / 2, n.width = n.maxX - n.minX, n.height = n.maxY - n.minY);
  }
}, Uy = function(e, t, a) {
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
}, Uf = function(e, t) {
  var a = e.parentId;
  if (a != null) {
    var n = t.layoutNodes[t.idToIndex[a]], i = !1;
    if ((n.maxX == null || e.maxX + n.padRight > n.maxX) && (n.maxX = e.maxX + n.padRight, i = !0), (n.minX == null || e.minX - n.padLeft < n.minX) && (n.minX = e.minX - n.padLeft, i = !0), (n.maxY == null || e.maxY + n.padBottom > n.maxY) && (n.maxY = e.maxY + n.padBottom, i = !0), (n.minY == null || e.minY - n.padTop < n.minY) && (n.minY = e.minY - n.padTop, i = !0), i)
      return Uf(n, t);
  }
}, Jl = function(e, t) {
  for (var a = e.layoutNodes, n = [], i = 0; i < a.length; i++) {
    var s = a[i], o = s.cmptId, u = n[o] = n[o] || [];
    u.push(s);
  }
  for (var l = 0, i = 0; i < n.length; i++) {
    var c = n[i];
    if (c) {
      c.x1 = 1 / 0, c.x2 = -1 / 0, c.y1 = 1 / 0, c.y2 = -1 / 0;
      for (var f = 0; f < c.length; f++) {
        var v = c[f];
        c.x1 = Math.min(c.x1, v.positionX - v.width / 2), c.x2 = Math.max(c.x2, v.positionX + v.width / 2), c.y1 = Math.min(c.y1, v.positionY - v.height / 2), c.y2 = Math.max(c.y2, v.positionY + v.height / 2);
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
      for (var f = 0; f < c.length; f++) {
        var v = c[f];
        v.isLocked || (v.positionX += h - c.x1, v.positionY += d - c.y1);
      }
      h += c.w + t.componentSpacing, y += c.w + t.componentSpacing, g = Math.max(g, c.h), y > p && (d += g + t.componentSpacing, h = 0, y = 0, g = 0);
    }
  }
}, Gy = {
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
function Gf(r) {
  this.options = pe({}, Gy, r);
}
Gf.prototype.run = function() {
  var r = this.options, e = r, t = r.cy, a = e.eles, n = a.nodes().not(":parent");
  e.sort && (n = n.sort(e.sort));
  var i = bt(e.boundingBox ? e.boundingBox : {
    x1: 0,
    y1: 0,
    w: t.width(),
    h: t.height()
  });
  if (i.h === 0 || i.w === 0)
    a.nodes().layoutPositions(this, e, function(G) {
      return {
        x: i.x1,
        y: i.y1
      };
    });
  else {
    var s = n.size(), o = Math.sqrt(s * i.h / i.w), u = Math.round(o), l = Math.round(i.w / i.h * o), c = function(Q) {
      if (Q == null)
        return Math.min(u, l);
      var W = Math.min(u, l);
      W == u ? u = Q : l = Q;
    }, f = function(Q) {
      if (Q == null)
        return Math.max(u, l);
      var W = Math.max(u, l);
      W == u ? u = Q : l = Q;
    }, v = e.rows, h = e.cols != null ? e.cols : e.columns;
    if (v != null && h != null)
      u = v, l = h;
    else if (v != null && h == null)
      u = v, l = Math.ceil(s / u);
    else if (v == null && h != null)
      l = h, u = Math.ceil(s / l);
    else if (l * u > s) {
      var d = c(), y = f();
      (d - 1) * y >= s ? c(d - 1) : (y - 1) * d >= s && f(y - 1);
    } else
      for (; l * u < s; ) {
        var g = c(), p = f();
        (p + 1) * g >= s ? f(p + 1) : c(g + 1);
      }
    var m = i.w / l, b = i.h / u;
    if (e.condense && (m = 0, b = 0), e.avoidOverlap)
      for (var w = 0; w < n.length; w++) {
        var C = n[w], E = C._private.position;
        (E.x == null || E.y == null) && (E.x = 0, E.y = 0);
        var x = C.layoutDimensions(e), T = e.avoidOverlapPadding, D = x.w + T, P = x.h + T;
        m = Math.max(m, D), b = Math.max(b, P);
      }
    for (var A = {}, B = function(Q, W) {
      return !!A["c-" + Q + "-" + W];
    }, k = function(Q, W) {
      A["c-" + Q + "-" + W] = !0;
    }, L = 0, M = 0, I = function() {
      M++, M >= l && (M = 0, L++);
    }, R = {}, O = 0; O < n.length; O++) {
      var _ = n[O], U = e.position(_);
      if (U && (U.row !== void 0 || U.col !== void 0)) {
        var z = {
          row: U.row,
          col: U.col
        };
        if (z.col === void 0)
          for (z.col = 0; B(z.row, z.col); )
            z.col++;
        else if (z.row === void 0)
          for (z.row = 0; B(z.row, z.col); )
            z.row++;
        R[_.id()] = z, k(z.row, z.col);
      }
    }
    var H = function(Q, W) {
      var X, Y;
      if (Q.locked() || Q.isParent())
        return !1;
      var ee = R[Q.id()];
      if (ee)
        X = ee.col * m + m / 2 + i.x1, Y = ee.row * b + b / 2 + i.y1;
      else {
        for (; B(L, M); )
          I();
        X = M * m + m / 2 + i.x1, Y = L * b + b / 2 + i.y1, k(L, M), I();
      }
      return {
        x: X,
        y: Y
      };
    };
    n.layoutPositions(this, e, H);
  }
  return this;
};
var Ky = {
  ready: function() {
  },
  // on layoutready
  stop: function() {
  }
  // on layoutstop
};
function Ro(r) {
  this.options = pe({}, Ky, r);
}
Ro.prototype.run = function() {
  var r = this.options, e = r.eles, t = this;
  return r.cy, t.emit("layoutstart"), e.nodes().positions(function() {
    return {
      x: 0,
      y: 0
    };
  }), t.one("layoutready", r.ready), t.emit("layoutready"), t.one("layoutstop", r.stop), t.emit("layoutstop"), this;
};
Ro.prototype.stop = function() {
  return this;
};
var Wy = {
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
function Kf(r) {
  this.options = pe({}, Wy, r);
}
Kf.prototype.run = function() {
  var r = this.options, e = r.eles, t = e.nodes(), a = _e(r.positions);
  function n(i) {
    if (r.positions == null)
      return yh(i.position());
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
var Zy = {
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
function Wf(r) {
  this.options = pe({}, Zy, r);
}
Wf.prototype.run = function() {
  var r = this.options, e = r.cy, t = r.eles, a = bt(r.boundingBox ? r.boundingBox : {
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
var Yy = [{
  name: "breadthfirst",
  impl: $f
}, {
  name: "circle",
  impl: Vf
}, {
  name: "concentric",
  impl: qf
}, {
  name: "cose",
  impl: li
}, {
  name: "grid",
  impl: Gf
}, {
  name: "null",
  impl: Ro
}, {
  name: "preset",
  impl: Kf
}, {
  name: "random",
  impl: Wf
}];
function Zf(r) {
  this.options = r, this.notifications = 0;
}
var jl = function() {
}, ec = function() {
  throw new Error("A headless instance can not render images");
};
Zf.prototype = {
  recalculateRenderedStyle: jl,
  notify: function() {
    this.notifications++;
  },
  init: jl,
  isHeadless: function() {
    return !0;
  },
  png: ec,
  jpg: ec
};
var Mo = {};
Mo.arrowShapeWidth = 0.3;
Mo.registerArrowShapes = function() {
  var r = this.arrowShapes = {}, e = this, t = function(l, c, f, v, h, d, y) {
    var g = h.x - f / 2 - y, p = h.x + f / 2 + y, m = h.y - f / 2 - y, b = h.y + f / 2 + y, w = g <= l && l <= p && m <= c && c <= b;
    return w;
  }, a = function(l, c, f, v, h) {
    var d = l * Math.cos(v) - c * Math.sin(v), y = l * Math.sin(v) + c * Math.cos(v), g = d * f, p = y * f, m = g + h.x, b = p + h.y;
    return {
      x: m,
      y: b
    };
  }, n = function(l, c, f, v) {
    for (var h = [], d = 0; d < l.length; d += 2) {
      var y = l[d], g = l[d + 1];
      h.push(a(y, g, c, f, v));
    }
    return h;
  }, i = function(l) {
    for (var c = [], f = 0; f < l.length; f++) {
      var v = l[f];
      c.push(v.x, v.y);
    }
    return c;
  }, s = function(l) {
    return l.pstyle("width").pfValue * l.pstyle("arrow-scale").pfValue * 2;
  }, o = function(l, c) {
    fe(c) && (c = r[c]), r[l] = pe({
      name: l,
      points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3],
      collide: function(v, h, d, y, g, p) {
        var m = i(n(this.points, d + 2 * p, y, g)), b = mt(v, h, m);
        return b;
      },
      roughCollide: t,
      draw: function(v, h, d, y) {
        var g = n(this.points, h, d, y);
        e.arrowShapeImpl("polygon")(v, g);
      },
      spacing: function(v) {
        return 0;
      },
      gap: s
    }, c);
  };
  o("none", {
    collide: On,
    roughCollide: On,
    draw: bo,
    spacing: pu,
    gap: pu
  }), o("triangle", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3]
  }), o("arrow", "triangle"), o("triangle-backcurve", {
    points: r.triangle.points,
    controlPoint: [0, -0.15],
    roughCollide: t,
    draw: function(l, c, f, v, h) {
      var d = n(this.points, c, f, v), y = this.controlPoint, g = a(y[0], y[1], c, f, v);
      e.arrowShapeImpl(this.name)(l, d, g);
    },
    gap: function(l) {
      return s(l) * 0.8;
    }
  }), o("triangle-tee", {
    points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
    pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
    collide: function(l, c, f, v, h, d, y) {
      var g = i(n(this.points, f + 2 * y, v, h)), p = i(n(this.pointsTee, f + 2 * y, v, h)), m = mt(l, c, g) || mt(l, c, p);
      return m;
    },
    draw: function(l, c, f, v, h) {
      var d = n(this.points, c, f, v), y = n(this.pointsTee, c, f, v);
      e.arrowShapeImpl(this.name)(l, d, y);
    }
  }), o("circle-triangle", {
    radius: 0.15,
    pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
    collide: function(l, c, f, v, h, d, y) {
      var g = h, p = Math.pow(g.x - l, 2) + Math.pow(g.y - c, 2) <= Math.pow((f + 2 * y) * this.radius, 2), m = i(n(this.points, f + 2 * y, v, h));
      return mt(l, c, m) || p;
    },
    draw: function(l, c, f, v, h) {
      var d = n(this.pointsTr, c, f, v);
      e.arrowShapeImpl(this.name)(l, d, v.x, v.y, this.radius * c);
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
      var f = this.baseCrossLinePts.slice(), v = c / l, h = 3, d = 5;
      return f[h] = f[h] - v, f[d] = f[d] - v, f;
    },
    collide: function(l, c, f, v, h, d, y) {
      var g = i(n(this.points, f + 2 * y, v, h)), p = i(n(this.crossLinePts(f, d), f + 2 * y, v, h)), m = mt(l, c, g) || mt(l, c, p);
      return m;
    },
    draw: function(l, c, f, v, h) {
      var d = n(this.points, c, f, v), y = n(this.crossLinePts(c, h), c, f, v);
      e.arrowShapeImpl(this.name)(l, d, y);
    }
  }), o("vee", {
    points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
    gap: function(l) {
      return s(l) * 0.525;
    }
  }), o("circle", {
    radius: 0.15,
    collide: function(l, c, f, v, h, d, y) {
      var g = h, p = Math.pow(g.x - l, 2) + Math.pow(g.y - c, 2) <= Math.pow((f + 2 * y) * this.radius, 2);
      return p;
    },
    draw: function(l, c, f, v, h) {
      e.arrowShapeImpl(this.name)(l, v.x, v.y, this.radius * c);
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
var Rr = {};
Rr.projectIntoViewport = function(r, e) {
  var t = this.cy, a = this.findContainerClientCoords(), n = a[0], i = a[1], s = a[4], o = t.pan(), u = t.zoom(), l = ((r - n) / s - o.x) / u, c = ((e - i) / s - o.y) / u;
  return [l, c];
};
Rr.findContainerClientCoords = function() {
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
  }, s = r.clientWidth, o = r.clientHeight, u = n.left + n.right, l = n.top + n.bottom, c = i.left + i.right, f = e.width / (s + c), v = s - u, h = o - l, d = e.left + n.left + i.left, y = e.top + n.top + i.top;
  return this.containerBB = [d, y, v, h, f];
};
Rr.invalidateContainerClientCoordsCache = function() {
  this.containerBB = null;
};
Rr.findNearestElement = function(r, e, t, a) {
  return this.findNearestElements(r, e, t, a)[0];
};
Rr.findNearestElements = function(r, e, t, a) {
  var n = this, i = this, s = i.getCachedZSortedEles(), o = [], u = i.cy.zoom(), l = i.cy.hasCompoundNodes(), c = (a ? 24 : 8) / u, f = (a ? 8 : 2) / u, v = (a ? 8 : 2) / u, h = 1 / 0, d, y;
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
          for (var D = 0; D < o.length; D++)
            if (o[D].isEdge()) {
              o[D] = x, d = x, h = T ?? h;
              break;
            }
        }
      } else
        o.push(x), d = x, h = T ?? h;
  }
  function p(x) {
    var T = x.outerWidth() + 2 * f, D = x.outerHeight() + 2 * f, P = T / 2, A = D / 2, B = x.position(), k = x.pstyle("corner-radius").value === "auto" ? "auto" : x.pstyle("corner-radius").pfValue, L = x._private.rscratch;
    if (B.x - P <= r && r <= B.x + P && B.y - A <= e && e <= B.y + A) {
      var M = i.nodeShapes[n.getNodeShape(x)];
      if (M.checkPoint(r, e, 0, T, D, B.x, B.y, k, L))
        return g(x, 0), !0;
    }
  }
  function m(x) {
    var T = x._private, D = T.rscratch, P = x.pstyle("width").pfValue, A = x.pstyle("arrow-scale").value, B = P / 2 + c, k = B * B, L = B * 2, O = T.source, _ = T.target, M;
    if (D.edgeType === "segments" || D.edgeType === "straight" || D.edgeType === "haystack") {
      for (var I = D.allpts, R = 0; R + 3 < I.length; R += 2)
        if (Bh(r, e, I[R], I[R + 1], I[R + 2], I[R + 3], L) && k > (M = Oh(r, e, I[R], I[R + 1], I[R + 2], I[R + 3])))
          return g(x, M), !0;
    } else if (D.edgeType === "bezier" || D.edgeType === "multibezier" || D.edgeType === "self" || D.edgeType === "compound") {
      for (var I = D.allpts, R = 0; R + 5 < D.allpts.length; R += 4)
        if (Lh(r, e, I[R], I[R + 1], I[R + 2], I[R + 3], I[R + 4], I[R + 5], L) && k > (M = Ih(r, e, I[R], I[R + 1], I[R + 2], I[R + 3], I[R + 4], I[R + 5])))
          return g(x, M), !0;
    }
    for (var O = O || T.source, _ = _ || T.target, U = n.getArrowWidth(P, A), z = [{
      name: "source",
      x: D.arrowStartX,
      y: D.arrowStartY,
      angle: D.srcArrowAngle
    }, {
      name: "target",
      x: D.arrowEndX,
      y: D.arrowEndY,
      angle: D.tgtArrowAngle
    }, {
      name: "mid-source",
      x: D.midX,
      y: D.midY,
      angle: D.midsrcArrowAngle
    }, {
      name: "mid-target",
      x: D.midX,
      y: D.midY,
      angle: D.midtgtArrowAngle
    }], R = 0; R < z.length; R++) {
      var H = z[R], G = i.arrowShapes[x.pstyle(H.name + "-arrow-shape").value], Q = x.pstyle("width").pfValue;
      if (G.roughCollide(r, e, U, H.angle, {
        x: H.x,
        y: H.y
      }, Q, c) && G.collide(r, e, U, H.angle, {
        x: H.x,
        y: H.y
      }, Q, c))
        return g(x), !0;
    }
    l && o.length > 0 && (p(O), p(_));
  }
  function b(x, T, D) {
    return Bt(x, T, D);
  }
  function w(x, T) {
    var D = x._private, P = v, A;
    T ? A = T + "-" : A = "", x.boundingBox();
    var B = D.labelBounds[T || "main"], k = x.pstyle(A + "label").value, L = x.pstyle("text-events").strValue === "yes";
    if (!(!L || !k)) {
      var M = b(D.rscratch, "labelX", T), I = b(D.rscratch, "labelY", T), R = b(D.rscratch, "labelAngle", T), O = x.pstyle(A + "text-margin-x").pfValue, _ = x.pstyle(A + "text-margin-y").pfValue, U = B.x1 - P - O, z = B.x2 + P - O, H = B.y1 - P - _, G = B.y2 + P - _;
      if (R) {
        var Q = Math.cos(R), W = Math.sin(R), X = function(te, se) {
          return te = te - M, se = se - I, {
            x: te * Q - se * W + M,
            y: te * W + se * Q + I
          };
        }, Y = X(U, H), ee = X(U, G), V = X(z, H), N = X(z, G), K = [
          // with the margin added after the rotation is applied
          Y.x + O,
          Y.y + _,
          V.x + O,
          V.y + _,
          N.x + O,
          N.y + _,
          ee.x + O,
          ee.y + _
        ];
        if (mt(r, e, K))
          return g(x), !0;
      } else if (jr(B, r, e))
        return g(x), !0;
    }
  }
  for (var C = s.length - 1; C >= 0; C--) {
    var E = s[C];
    E.isNode() ? p(E) || w(E) : m(E) || w(E) || w(E, "source") || w(E, "target");
  }
  return o;
};
Rr.getAllInBox = function(r, e, t, a) {
  var n = this.getCachedZSortedEles().interactive, i = [], s = Math.min(r, t), o = Math.max(r, t), u = Math.min(e, a), l = Math.max(e, a);
  r = s, t = o, e = u, a = l;
  for (var c = bt({
    x1: r,
    y1: e,
    x2: t,
    y2: a
  }), f = 0; f < n.length; f++) {
    var v = n[f];
    if (v.isNode()) {
      var h = v, d = h.boundingBox({
        includeNodes: !0,
        includeEdges: !1,
        includeLabels: !1
      });
      Eo(c, d) && !tf(d, c) && i.push(h);
    } else {
      var y = v, g = y._private, p = g.rscratch;
      if (p.startX != null && p.startY != null && !jr(c, p.startX, p.startY) || p.endX != null && p.endY != null && !jr(c, p.endX, p.endY))
        continue;
      if (p.edgeType === "bezier" || p.edgeType === "multibezier" || p.edgeType === "self" || p.edgeType === "compound" || p.edgeType === "segments" || p.edgeType === "haystack") {
        for (var m = g.rstyle.bezierPts || g.rstyle.linePts || g.rstyle.haystackPts, b = !0, w = 0; w < m.length; w++)
          if (!Ph(c, m[w])) {
            b = !1;
            break;
          }
        b && i.push(y);
      } else
        (p.edgeType === "haystack" || p.edgeType === "straight") && i.push(y);
    }
  }
  return i;
};
var _n = {};
_n.calculateArrowAngles = function(r) {
  var e = r._private.rscratch, t = e.edgeType === "haystack", a = e.edgeType === "bezier", n = e.edgeType === "multibezier", i = e.edgeType === "segments", s = e.edgeType === "compound", o = e.edgeType === "self", u, l, c, f, v, h, p, m;
  if (t ? (c = e.haystackPts[0], f = e.haystackPts[1], v = e.haystackPts[2], h = e.haystackPts[3]) : (c = e.arrowStartX, f = e.arrowStartY, v = e.arrowEndX, h = e.arrowEndY), p = e.midX, m = e.midY, i)
    u = c - e.segpts[0], l = f - e.segpts[1];
  else if (n || s || o || a) {
    var d = e.allpts, y = je(d[0], d[2], d[4], 0.1), g = je(d[1], d[3], d[5], 0.1);
    u = c - y, l = f - g;
  } else
    u = c - p, l = f - m;
  e.srcArrowAngle = on(u, l);
  var p = e.midX, m = e.midY;
  if (t && (p = (c + v) / 2, m = (f + h) / 2), u = v - c, l = h - f, i) {
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
    var d = e.allpts, C = e.ctrlpts, E, x, T, D;
    if (C.length / 2 % 2 === 0) {
      var P = d.length / 2 - 1, A = P + 2, B = A + 2;
      E = je(d[P], d[A], d[B], 0), x = je(d[P + 1], d[A + 1], d[B + 1], 0), T = je(d[P], d[A], d[B], 1e-4), D = je(d[P + 1], d[A + 1], d[B + 1], 1e-4);
    } else {
      var A = d.length / 2 - 1, P = A - 2, B = A + 2;
      E = je(d[P], d[A], d[B], 0.4999), x = je(d[P + 1], d[A + 1], d[B + 1], 0.4999), T = je(d[P], d[A], d[B], 0.5), D = je(d[P + 1], d[A + 1], d[B + 1], 0.5);
    }
    u = T - E, l = D - x;
  }
  if (e.midtgtArrowAngle = on(u, l), e.midDispX = u, e.midDispY = l, u *= -1, l *= -1, i) {
    var d = e.allpts;
    if (d.length / 2 % 2 !== 0) {
      if (!e.isRound) {
        var b = d.length / 2 - 1, k = b + 2;
        u = -(d[k] - d[b]), l = -(d[k + 1] - d[b + 1]);
      }
    }
  }
  if (e.midsrcArrowAngle = on(u, l), i)
    u = v - e.segpts[e.segpts.length - 2], l = h - e.segpts[e.segpts.length - 1];
  else if (n || s || o || a) {
    var d = e.allpts, L = d.length, y = je(d[L - 6], d[L - 4], d[L - 2], 0.9), g = je(d[L - 5], d[L - 3], d[L - 1], 0.9);
    u = v - y, l = h - g;
  } else
    u = v - p, l = h - m;
  e.tgtArrowAngle = on(u, l);
};
_n.getArrowWidth = _n.getArrowHeight = function(r, e) {
  var t = this.arrowWidthCache = this.arrowWidthCache || {}, a = t[r + ", " + e];
  return a || (a = Math.max(Math.pow(r * 13.37, 0.9), 29) * e, t[r + ", " + e] = a, a);
};
var to, ro, Ft = {}, Tt = {}, tc, rc, Er, Dn, Kt, mr, xr, zt, Fr, gn, Yf, Xf, ao, no, ac, nc = function(e, t, a) {
  a.x = t.x - e.x, a.y = t.y - e.y, a.len = Math.sqrt(a.x * a.x + a.y * a.y), a.nx = a.x / a.len, a.ny = a.y / a.len, a.ang = Math.atan2(a.ny, a.nx);
}, Xy = function(e, t) {
  t.x = e.x * -1, t.y = e.y * -1, t.nx = e.nx * -1, t.ny = e.ny * -1, t.ang = e.ang > 0 ? -(Math.PI - e.ang) : Math.PI + e.ang;
}, Qy = function(e, t, a, n, i) {
  if (e !== ac ? nc(t, e, Ft) : Xy(Tt, Ft), nc(t, a, Tt), tc = Ft.nx * Tt.ny - Ft.ny * Tt.nx, rc = Ft.nx * Tt.nx - Ft.ny * -Tt.ny, Kt = Math.asin(Math.max(-1, Math.min(1, tc))), Math.abs(Kt) < 1e-6) {
    to = t.x, ro = t.y, xr = Fr = 0;
    return;
  }
  Er = 1, Dn = !1, rc < 0 ? Kt < 0 ? Kt = Math.PI + Kt : (Kt = Math.PI - Kt, Er = -1, Dn = !0) : Kt > 0 && (Er = -1, Dn = !0), t.radius !== void 0 ? Fr = t.radius : Fr = n, mr = Kt / 2, gn = Math.min(Ft.len / 2, Tt.len / 2), i ? (zt = Math.abs(Math.cos(mr) * Fr / Math.sin(mr)), zt > gn ? (zt = gn, xr = Math.abs(zt * Math.sin(mr) / Math.cos(mr))) : xr = Fr) : (zt = Math.min(gn, Fr), xr = Math.abs(zt * Math.sin(mr) / Math.cos(mr))), ao = t.x + Tt.nx * zt, no = t.y + Tt.ny * zt, to = ao - Tt.ny * xr * Er, ro = no + Tt.nx * xr * Er, Yf = t.x + Ft.nx * zt, Xf = t.y + Ft.ny * zt, ac = t;
};
function Qf(r, e) {
  e.radius === 0 ? r.lineTo(e.cx, e.cy) : r.arc(e.cx, e.cy, e.radius, e.startAngle, e.endAngle, e.counterClockwise);
}
function Io(r, e, t, a) {
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
  } : (Qy(r, e, t, a, n), {
    cx: to,
    cy: ro,
    radius: xr,
    startX: Yf,
    startY: Xf,
    stopX: ao,
    stopY: no,
    startAngle: Ft.ang + Math.PI / 2 * Er,
    endAngle: Tt.ang - Math.PI / 2 * Er,
    counterClockwise: Dn
  });
}
var vt = {};
vt.findMidptPtsEtc = function(r, e) {
  var t = e.posPts, a = e.intersectionPts, n = e.vectorNormInverse, i, s = r.pstyle("source-endpoint"), o = r.pstyle("target-endpoint"), u = s.units != null && o.units != null, l = function(C, E, x, T) {
    var D = T - E, P = x - C, A = Math.sqrt(P * P + D * D);
    return {
      x: -D / A,
      y: P / A
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
        var f = this.manualEndptToPx(r.source()[0], s), v = et(f, 2), h = v[0], d = v[1], y = this.manualEndptToPx(r.target()[0], o), g = et(y, 2), p = g[0], m = g[1], b = {
          x1: h,
          y1: d,
          x2: p,
          y2: m
        };
        n = l(h, d, p, m), i = b;
      } else
        Re("Edge ".concat(r.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), i = a;
      break;
    }
  }
  return {
    midptPts: i,
    vectorNormInverse: n
  };
};
vt.findHaystackPoints = function(r) {
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
    var s = a.source, o = a.target, u = s.position(), l = o.position(), c = s.width(), f = o.width(), v = s.height(), h = o.height(), d = t.pstyle("haystack-radius").value, y = d / 2;
    n.haystackPts = n.allpts = [n.source.x * c * y + u.x, n.source.y * v * y + u.y, n.target.x * f * y + l.x, n.target.y * h * y + l.y], n.midX = (n.allpts[0] + n.allpts[2]) / 2, n.midY = (n.allpts[1] + n.allpts[3]) / 2, n.edgeType = "haystack", n.haystack = !0, this.storeEdgeProjections(t), this.calculateArrowAngles(t), this.recalculateEdgeLabelProjections(t), this.calculateLabelAngles(t);
  }
};
vt.findSegmentsPoints = function(r, e) {
  var t = r._private.rscratch, a = r.pstyle("segment-weights"), n = r.pstyle("segment-distances"), i = r.pstyle("segment-radii"), s = r.pstyle("radius-type"), o = Math.min(a.pfValue.length, n.pfValue.length), u = i.pfValue[i.pfValue.length - 1], l = s.pfValue[s.pfValue.length - 1];
  t.edgeType = "segments", t.segpts = [], t.radii = [], t.isArcRadius = [];
  for (var c = 0; c < o; c++) {
    var f = a.pfValue[c], v = n.pfValue[c], h = 1 - f, d = f, y = this.findMidptPtsEtc(r, e), g = y.midptPts, p = y.vectorNormInverse, m = {
      x: g.x1 * h + g.x2 * d,
      y: g.y1 * h + g.y2 * d
    };
    t.segpts.push(m.x + p.x * v, m.y + p.y * v), t.radii.push(i.pfValue[c] !== void 0 ? i.pfValue[c] : u), t.isArcRadius.push((s.pfValue[c] !== void 0 ? s.pfValue[c] : l) === "arc-radius");
  }
};
vt.findLoopPoints = function(r, e, t, a) {
  var n = r._private.rscratch, i = e.dirCounts, s = e.srcPos, o = r.pstyle("control-point-distances"), u = o ? o.pfValue[0] : void 0, l = r.pstyle("loop-direction").pfValue, c = r.pstyle("loop-sweep").pfValue, f = r.pstyle("control-point-step-size").pfValue;
  n.edgeType = "self";
  var v = t, h = f;
  a && (v = 0, h = u);
  var d = l - Math.PI / 2, y = d - c / 2, g = d + c / 2, p = l + "_" + c;
  v = i[p] === void 0 ? i[p] = 0 : ++i[p], n.ctrlpts = [s.x + Math.cos(y) * 1.4 * h * (v / 3 + 1), s.y + Math.sin(y) * 1.4 * h * (v / 3 + 1), s.x + Math.cos(g) * 1.4 * h * (v / 3 + 1), s.y + Math.sin(g) * 1.4 * h * (v / 3 + 1)];
};
vt.findCompoundLoopPoints = function(r, e, t, a) {
  var n = r._private.rscratch;
  n.edgeType = "compound";
  var i = e.srcPos, s = e.tgtPos, o = e.srcW, u = e.srcH, l = e.tgtW, c = e.tgtH, f = r.pstyle("control-point-step-size").pfValue, v = r.pstyle("control-point-distances"), h = v ? v.pfValue[0] : void 0, d = t, y = f;
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
  }, w = 0.5, C = Math.max(w, Math.log(o * 0.01)), E = Math.max(w, Math.log(l * 0.01));
  n.ctrlpts = [b.x, b.y - (1 + Math.pow(g, 1.12) / 100) * y * (d / 3 + 1) * C, b.x - (1 + Math.pow(g, 1.12) / 100) * y * (d / 3 + 1) * E, b.y];
};
vt.findStraightEdgePoints = function(r) {
  r._private.rscratch.edgeType = "straight";
};
vt.findBezierPoints = function(r, e, t, a, n) {
  var i = r._private.rscratch, s = r.pstyle("control-point-step-size").pfValue, o = r.pstyle("control-point-distances"), u = r.pstyle("control-point-weights"), l = o && u ? Math.min(o.value.length, u.value.length) : 1, c = o ? o.pfValue[0] : void 0, f = u.value[0], v = a;
  i.edgeType = v ? "multibezier" : "bezier", i.ctrlpts = [];
  for (var h = 0; h < l; h++) {
    var d = (0.5 - e.eles.length / 2 + t) * s * (n ? -1 : 1), y = void 0, g = jc(d);
    v && (c = o ? o.pfValue[h] : s, f = u.value[h]), a ? y = c : y = c !== void 0 ? g * c : void 0;
    var p = y !== void 0 ? y : d, m = 1 - f, b = f, w = this.findMidptPtsEtc(r, e), C = w.midptPts, E = w.vectorNormInverse, x = {
      x: C.x1 * m + C.x2 * b,
      y: C.y1 * m + C.y2 * b
    };
    i.ctrlpts.push(x.x + E.x * p, x.y + E.y * p);
  }
};
vt.findTaxiPoints = function(r, e) {
  var t = r._private.rscratch;
  t.edgeType = "segments";
  var a = "vertical", n = "horizontal", i = "leftward", s = "rightward", o = "downward", u = "upward", l = "auto", c = e.posPts, f = e.srcW, v = e.srcH, h = e.tgtW, d = e.tgtH, y = r.pstyle("edge-distances").value, g = y !== "node-position", p = r.pstyle("taxi-direction").value, m = p, b = r.pstyle("taxi-turn"), w = b.units === "%", C = b.pfValue, E = C < 0, x = r.pstyle("taxi-turn-min-distance").pfValue, T = g ? (f + h) / 2 : 0, D = g ? (v + d) / 2 : 0, P = c.x2 - c.x1, A = c.y2 - c.y1, B = function(J, ie) {
    return J > 0 ? Math.max(J - ie, 0) : Math.min(J + ie, 0);
  }, k = B(P, T), L = B(A, D), M = !1;
  m === l ? p = Math.abs(k) > Math.abs(L) ? n : a : m === u || m === o ? (p = a, M = !0) : (m === i || m === s) && (p = n, M = !0);
  var I = p === a, R = I ? L : k, O = I ? A : P, _ = jc(O), U = !1;
  !(M && (w || E)) && (m === o && O < 0 || m === u && O > 0 || m === i && O > 0 || m === s && O < 0) && (_ *= -1, R = _ * Math.abs(R), U = !0);
  var z;
  if (w) {
    var H = C < 0 ? 1 + C : C;
    z = H * R;
  } else {
    var G = C < 0 ? R : 0;
    z = G + C * _;
  }
  var Q = function(J) {
    return Math.abs(J) < x || Math.abs(J) >= Math.abs(R);
  }, W = Q(z), X = Q(Math.abs(R) - Math.abs(z)), Y = W || X;
  if (Y && !U)
    if (I) {
      var ee = Math.abs(O) <= v / 2, V = Math.abs(P) <= h / 2;
      if (ee) {
        var N = (c.x1 + c.x2) / 2, K = c.y1, j = c.y2;
        t.segpts = [N, K, N, j];
      } else if (V) {
        var te = (c.y1 + c.y2) / 2, se = c.x1, de = c.x2;
        t.segpts = [se, te, de, te];
      } else
        t.segpts = [c.x1, c.y2];
    } else {
      var De = Math.abs(O) <= f / 2, Be = Math.abs(A) <= d / 2;
      if (De) {
        var oe = (c.y1 + c.y2) / 2, le = c.x1, he = c.x2;
        t.segpts = [le, oe, he, oe];
      } else if (Be) {
        var me = (c.x1 + c.x2) / 2, ge = c.y1, be = c.y2;
        t.segpts = [me, ge, me, be];
      } else
        t.segpts = [c.x2, c.y1];
    }
  else if (I) {
    var Ce = c.y1 + z + (g ? v / 2 * _ : 0), Se = c.x1, re = c.x2;
    t.segpts = [Se, Ce, re, Ce];
  } else {
    var S = c.x1 + z + (g ? f / 2 * _ : 0), $ = c.y1, Z = c.y2;
    t.segpts = [S, $, S, Z];
  }
  if (t.isRound) {
    var F = r.pstyle("taxi-radius").value, q = r.pstyle("radius-type").value[0] === "arc-radius";
    t.radii = new Array(t.segpts.length / 2).fill(F), t.isArcRadius = new Array(t.segpts.length / 2).fill(q);
  }
};
vt.tryToCorrectInvalidPoints = function(r, e) {
  var t = r._private.rscratch;
  if (t.edgeType === "bezier") {
    var a = e.srcPos, n = e.tgtPos, i = e.srcW, s = e.srcH, o = e.tgtW, u = e.tgtH, l = e.srcShape, c = e.tgtShape, f = e.srcCornerRadius, v = e.tgtCornerRadius, h = e.srcRs, d = e.tgtRs, y = !ae(t.startX) || !ae(t.startY), g = !ae(t.arrowStartX) || !ae(t.arrowStartY), p = !ae(t.endX) || !ae(t.endY), m = !ae(t.arrowEndX) || !ae(t.arrowEndY), b = 3, w = this.getArrowWidth(r.pstyle("width").pfValue, r.pstyle("arrow-scale").value) * this.arrowShapeWidth, C = b * w, E = Ar({
      x: t.ctrlpts[0],
      y: t.ctrlpts[1]
    }, {
      x: t.startX,
      y: t.startY
    }), x = E < C, T = Ar({
      x: t.ctrlpts[0],
      y: t.ctrlpts[1]
    }, {
      x: t.endX,
      y: t.endY
    }), D = T < C, P = !1;
    if (y || g || x) {
      P = !0;
      var A = {
        // delta
        x: t.ctrlpts[0] - a.x,
        y: t.ctrlpts[1] - a.y
      }, B = Math.sqrt(A.x * A.x + A.y * A.y), k = {
        // normalised delta
        x: A.x / B,
        y: A.y / B
      }, L = Math.max(i, s), M = {
        // *2 radius guarantees outside shape
        x: t.ctrlpts[0] + k.x * 2 * L,
        y: t.ctrlpts[1] + k.y * 2 * L
      }, I = l.intersectLine(a.x, a.y, i, s, M.x, M.y, 0, f, h);
      x ? (t.ctrlpts[0] = t.ctrlpts[0] + k.x * (C - E), t.ctrlpts[1] = t.ctrlpts[1] + k.y * (C - E)) : (t.ctrlpts[0] = I[0] + k.x * C, t.ctrlpts[1] = I[1] + k.y * C);
    }
    if (p || m || D) {
      P = !0;
      var R = {
        // delta
        x: t.ctrlpts[0] - n.x,
        y: t.ctrlpts[1] - n.y
      }, O = Math.sqrt(R.x * R.x + R.y * R.y), _ = {
        // normalised delta
        x: R.x / O,
        y: R.y / O
      }, U = Math.max(i, s), z = {
        // *2 radius guarantees outside shape
        x: t.ctrlpts[0] + _.x * 2 * U,
        y: t.ctrlpts[1] + _.y * 2 * U
      }, H = c.intersectLine(n.x, n.y, o, u, z.x, z.y, 0, v, d);
      D ? (t.ctrlpts[0] = t.ctrlpts[0] + _.x * (C - T), t.ctrlpts[1] = t.ctrlpts[1] + _.y * (C - T)) : (t.ctrlpts[0] = H[0] + _.x * C, t.ctrlpts[1] = H[1] + _.y * C);
    }
    P && this.findEndpoints(r);
  }
};
vt.storeAllpts = function(r) {
  var e = r._private.rscratch;
  if (e.edgeType === "multibezier" || e.edgeType === "bezier" || e.edgeType === "self" || e.edgeType === "compound") {
    e.allpts = [], e.allpts.push(e.startX, e.startY);
    for (var t = 0; t + 1 < e.ctrlpts.length; t += 2)
      e.allpts.push(e.ctrlpts[t], e.ctrlpts[t + 1]), t + 3 < e.ctrlpts.length && e.allpts.push((e.ctrlpts[t] + e.ctrlpts[t + 2]) / 2, (e.ctrlpts[t + 1] + e.ctrlpts[t + 3]) / 2);
    e.allpts.push(e.endX, e.endY);
    var a, n;
    e.ctrlpts.length / 2 % 2 === 0 ? (a = e.allpts.length / 2 - 1, e.midX = e.allpts[a], e.midY = e.allpts[a + 1]) : (a = e.allpts.length / 2 - 3, n = 0.5, e.midX = je(e.allpts[a], e.allpts[a + 2], e.allpts[a + 4], n), e.midY = je(e.allpts[a + 1], e.allpts[a + 3], e.allpts[a + 5], n));
  } else if (e.edgeType === "straight")
    e.allpts = [e.startX, e.startY, e.endX, e.endY], e.midX = (e.startX + e.endX + e.arrowStartX + e.arrowEndX) / 4, e.midY = (e.startY + e.endY + e.arrowStartY + e.arrowEndY) / 4;
  else if (e.edgeType === "segments") {
    if (e.allpts = [], e.allpts.push(e.startX, e.startY), e.allpts.push.apply(e.allpts, e.segpts), e.allpts.push(e.endX, e.endY), e.isRound) {
      e.roundCorners = [];
      for (var i = 2; i + 3 < e.allpts.length; i += 2) {
        var s = e.radii[i / 2 - 1], o = e.isArcRadius[i / 2 - 1];
        e.roundCorners.push(Io({
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
        var f = {
          x: e.segpts[c],
          y: e.segpts[c + 1]
        }, v = e.roundCorners[c / 2];
        if (v.radius === 0) {
          var h = {
            x: e.segpts[c + 2],
            y: e.segpts[c + 3]
          };
          e.midX = f.x, e.midY = f.y, e.midVector = [f.y - h.y, h.x - f.x];
        } else {
          var d = [f.x - v.cx, f.y - v.cy], y = v.radius / Math.sqrt(Math.pow(d[0], 2) + Math.pow(d[1], 2));
          d = d.map(function(g) {
            return g * y;
          }), e.midX = v.cx + d[0], e.midY = v.cy + d[1], e.midVector = d;
        }
      }
    }
  }
};
vt.checkForInvalidEdgeWarning = function(r) {
  var e = r[0]._private.rscratch;
  e.nodesOverlap || ae(e.startX) && ae(e.startY) && ae(e.endX) && ae(e.endY) ? e.loggedErr = !1 : e.loggedErr || (e.loggedErr = !0, Re("Edge `" + r.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
};
vt.findEdgeControlPoints = function(r) {
  var e = this;
  if (!(!r || r.length === 0)) {
    for (var t = this, a = t.cy, n = a.hasCompoundNodes(), i = new Wt(), s = function(D, P) {
      return [].concat(Mc(D), [P ? 1 : 0]).join("-");
    }, o = [], u = [], l = 0; l < r.length; l++) {
      var c = r[l], f = c._private, v = c.pstyle("curve-style").value;
      if (!(c.removed() || !c.takesUpSpace())) {
        if (v === "haystack") {
          u.push(c);
          continue;
        }
        var h = v === "unbundled-bezier" || v.endsWith("segments") || v === "straight" || v === "straight-triangle" || v.endsWith("taxi"), d = v === "unbundled-bezier" || v === "bezier", y = f.source, g = f.target, p = y.poolIndex(), m = g.poolIndex(), b = [p, m].sort(), w = s(b, h), C = i.get(w);
        C == null && (C = {
          eles: []
        }, o.push({
          pairId: b,
          edgeIsUnbundled: h
        }), i.set(w, C)), C.eles.push(c), h && (C.hasUnbundled = !0), d && (C.hasBezier = !0);
      }
    }
    for (var E = function() {
      var D = o[x], P = D.pairId, A = D.edgeIsUnbundled, B = s(P, A), k = i.get(B), L;
      if (!k.hasUnbundled) {
        var M = k.eles[0].parallelEdges().filter(function(q) {
          return q.isBundledBezier();
        });
        wo(k.eles), M.forEach(function(q) {
          return k.eles.push(q);
        }), k.eles.sort(function(q, ne) {
          return q.poolIndex() - ne.poolIndex();
        });
      }
      var I = k.eles[0], R = I.source(), O = I.target();
      if (R.poolIndex() > O.poolIndex()) {
        var _ = R;
        R = O, O = _;
      }
      var U = k.srcPos = R.position(), z = k.tgtPos = O.position(), H = k.srcW = R.outerWidth(), G = k.srcH = R.outerHeight(), Q = k.tgtW = O.outerWidth(), W = k.tgtH = O.outerHeight(), X = k.srcShape = t.nodeShapes[e.getNodeShape(R)], Y = k.tgtShape = t.nodeShapes[e.getNodeShape(O)], ee = k.srcCornerRadius = R.pstyle("corner-radius").value === "auto" ? "auto" : R.pstyle("corner-radius").pfValue, V = k.tgtCornerRadius = O.pstyle("corner-radius").value === "auto" ? "auto" : O.pstyle("corner-radius").pfValue, N = k.tgtRs = O._private.rscratch, K = k.srcRs = R._private.rscratch;
      k.dirCounts = {
        north: 0,
        west: 0,
        south: 0,
        east: 0,
        northwest: 0,
        southwest: 0,
        northeast: 0,
        southeast: 0
      };
      for (var j = 0; j < k.eles.length; j++) {
        var te = k.eles[j], se = te[0]._private.rscratch, de = te.pstyle("curve-style").value, De = de === "unbundled-bezier" || de.endsWith("segments") || de.endsWith("taxi"), Be = !R.same(te.source());
        if (!k.calculatedIntersection && R !== O && (k.hasBezier || k.hasUnbundled)) {
          k.calculatedIntersection = !0;
          var oe = X.intersectLine(U.x, U.y, H, G, z.x, z.y, 0, ee, K), le = k.srcIntn = oe, he = Y.intersectLine(z.x, z.y, Q, W, U.x, U.y, 0, V, N), me = k.tgtIntn = he, ge = k.intersectionPts = {
            x1: oe[0],
            x2: he[0],
            y1: oe[1],
            y2: he[1]
          }, be = k.posPts = {
            x1: U.x,
            x2: z.x,
            y1: U.y,
            y2: z.y
          }, Ce = he[1] - oe[1], Se = he[0] - oe[0], re = Math.sqrt(Se * Se + Ce * Ce), S = k.vector = {
            x: Se,
            y: Ce
          }, $ = k.vectorNorm = {
            x: S.x / re,
            y: S.y / re
          }, Z = {
            x: -$.y,
            y: $.x
          };
          k.nodesOverlap = !ae(re) || Y.checkPoint(oe[0], oe[1], 0, Q, W, z.x, z.y, V, N) || X.checkPoint(he[0], he[1], 0, H, G, U.x, U.y, ee, K), k.vectorNormInverse = Z, L = {
            nodesOverlap: k.nodesOverlap,
            dirCounts: k.dirCounts,
            calculatedIntersection: !0,
            hasBezier: k.hasBezier,
            hasUnbundled: k.hasUnbundled,
            eles: k.eles,
            srcPos: z,
            srcRs: N,
            tgtPos: U,
            tgtRs: K,
            srcW: Q,
            srcH: W,
            tgtW: H,
            tgtH: G,
            srcIntn: me,
            tgtIntn: le,
            srcShape: Y,
            tgtShape: X,
            posPts: {
              x1: be.x2,
              y1: be.y2,
              x2: be.x1,
              y2: be.y1
            },
            intersectionPts: {
              x1: ge.x2,
              y1: ge.y2,
              x2: ge.x1,
              y2: ge.y1
            },
            vector: {
              x: -S.x,
              y: -S.y
            },
            vectorNorm: {
              x: -$.x,
              y: -$.y
            },
            vectorNormInverse: {
              x: -Z.x,
              y: -Z.y
            }
          };
        }
        var F = Be ? L : k;
        se.nodesOverlap = F.nodesOverlap, se.srcIntn = F.srcIntn, se.tgtIntn = F.tgtIntn, se.isRound = de.startsWith("round"), n && (R.isParent() || R.isChild() || O.isParent() || O.isChild()) && (R.parents().anySame(O) || O.parents().anySame(R) || R.same(O) && R.isParent()) ? e.findCompoundLoopPoints(te, F, j, De) : R === O ? e.findLoopPoints(te, F, j, De) : de.endsWith("segments") ? e.findSegmentsPoints(te, F) : de.endsWith("taxi") ? e.findTaxiPoints(te, F) : de === "straight" || !De && k.eles.length % 2 === 1 && j === Math.floor(k.eles.length / 2) ? e.findStraightEdgePoints(te) : e.findBezierPoints(te, F, j, De, Be), e.findEndpoints(te), e.tryToCorrectInvalidPoints(te, F), e.checkForInvalidEdgeWarning(te), e.storeAllpts(te), e.storeEdgeProjections(te), e.calculateArrowAngles(te), e.recalculateEdgeLabelProjections(te), e.calculateLabelAngles(te);
      }
    }, x = 0; x < o.length; x++)
      E();
    this.findHaystackPoints(u);
  }
};
function Jf(r) {
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
vt.getSegmentPoints = function(r) {
  var e = r[0]._private.rscratch;
  this.recalculateRenderedStyle(r);
  var t = e.edgeType;
  if (t === "segments")
    return Jf(e.segpts);
};
vt.getControlPoints = function(r) {
  var e = r[0]._private.rscratch;
  this.recalculateRenderedStyle(r);
  var t = e.edgeType;
  if (t === "bezier" || t === "multibezier" || t === "self" || t === "compound")
    return Jf(e.ctrlpts);
};
vt.getEdgeMidpoint = function(r) {
  var e = r[0]._private.rscratch;
  return this.recalculateRenderedStyle(r), {
    x: e.midX,
    y: e.midY
  };
};
var Qa = {};
Qa.manualEndptToPx = function(r, e) {
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
Qa.findEndpoints = function(r) {
  var e = this, t, a = r.source()[0], n = r.target()[0], i = a.position(), s = n.position(), o = r.pstyle("target-arrow-shape").value, u = r.pstyle("source-arrow-shape").value, l = r.pstyle("target-distance-from-node").pfValue, c = r.pstyle("source-distance-from-node").pfValue, f = a._private.rscratch, v = n._private.rscratch, h = r.pstyle("curve-style").value, d = r._private.rscratch, y = d.edgeType, g = h === "taxi", p = y === "self" || y === "compound", m = y === "bezier" || y === "multibezier" || p, b = y !== "bezier", w = y === "straight" || y === "segments", C = y === "segments", E = m || b || w, x = p || g, T = r.pstyle("source-endpoint"), D = x ? "outside-to-node" : T.value, P = a.pstyle("corner-radius").value === "auto" ? "auto" : a.pstyle("corner-radius").pfValue, A = r.pstyle("target-endpoint"), B = x ? "outside-to-node" : A.value, k = n.pstyle("corner-radius").value === "auto" ? "auto" : n.pstyle("corner-radius").pfValue;
  d.srcManEndpt = T, d.tgtManEndpt = A;
  var L, M, I, R;
  if (m) {
    var O = [d.ctrlpts[0], d.ctrlpts[1]], _ = b ? [d.ctrlpts[d.ctrlpts.length - 2], d.ctrlpts[d.ctrlpts.length - 1]] : O;
    L = _, M = O;
  } else if (w) {
    var U = C ? d.segpts.slice(0, 2) : [s.x, s.y], z = C ? d.segpts.slice(d.segpts.length - 2) : [i.x, i.y];
    L = z, M = U;
  }
  if (B === "inside-to-node")
    t = [s.x, s.y];
  else if (A.units)
    t = this.manualEndptToPx(n, A);
  else if (B === "outside-to-line")
    t = d.tgtIntn;
  else if (B === "outside-to-node" || B === "outside-to-node-or-label" ? I = L : (B === "outside-to-line" || B === "outside-to-line-or-label") && (I = [i.x, i.y]), t = e.nodeShapes[this.getNodeShape(n)].intersectLine(s.x, s.y, n.outerWidth(), n.outerHeight(), I[0], I[1], 0, k, v), B === "outside-to-node-or-label" || B === "outside-to-line-or-label") {
    var H = n._private.rscratch, G = H.labelWidth, Q = H.labelHeight, W = H.labelX, X = H.labelY, Y = G / 2, ee = Q / 2, V = n.pstyle("text-valign").value;
    V === "top" ? X -= ee : V === "bottom" && (X += ee);
    var N = n.pstyle("text-halign").value;
    N === "left" ? W -= Y : N === "right" && (W += Y);
    var K = Na(I[0], I[1], [W - Y, X - ee, W + Y, X - ee, W + Y, X + ee, W - Y, X + ee], s.x, s.y);
    if (K.length > 0) {
      var j = i, te = br(j, Ur(t)), se = br(j, Ur(K)), de = te;
      if (se < te && (t = K, de = se), K.length > 2) {
        var De = br(j, {
          x: K[2],
          y: K[3]
        });
        De < de && (t = [K[2], K[3]]);
      }
    }
  }
  var Be = un(t, L, e.arrowShapes[o].spacing(r) + l), oe = un(t, L, e.arrowShapes[o].gap(r) + l);
  if (d.endX = oe[0], d.endY = oe[1], d.arrowEndX = Be[0], d.arrowEndY = Be[1], D === "inside-to-node")
    t = [i.x, i.y];
  else if (T.units)
    t = this.manualEndptToPx(a, T);
  else if (D === "outside-to-line")
    t = d.srcIntn;
  else if (D === "outside-to-node" || D === "outside-to-node-or-label" ? R = M : (D === "outside-to-line" || D === "outside-to-line-or-label") && (R = [s.x, s.y]), t = e.nodeShapes[this.getNodeShape(a)].intersectLine(i.x, i.y, a.outerWidth(), a.outerHeight(), R[0], R[1], 0, P, f), D === "outside-to-node-or-label" || D === "outside-to-line-or-label") {
    var le = a._private.rscratch, he = le.labelWidth, me = le.labelHeight, ge = le.labelX, be = le.labelY, Ce = he / 2, Se = me / 2, re = a.pstyle("text-valign").value;
    re === "top" ? be -= Se : re === "bottom" && (be += Se);
    var S = a.pstyle("text-halign").value;
    S === "left" ? ge -= Ce : S === "right" && (ge += Ce);
    var $ = Na(R[0], R[1], [ge - Ce, be - Se, ge + Ce, be - Se, ge + Ce, be + Se, ge - Ce, be + Se], i.x, i.y);
    if ($.length > 0) {
      var Z = s, F = br(Z, Ur(t)), q = br(Z, Ur($)), ne = F;
      if (q < F && (t = [$[0], $[1]], ne = q), $.length > 2) {
        var J = br(Z, {
          x: $[2],
          y: $[3]
        });
        J < ne && (t = [$[2], $[3]]);
      }
    }
  }
  var ie = un(t, M, e.arrowShapes[u].spacing(r) + c), ve = un(t, M, e.arrowShapes[u].gap(r) + c);
  d.startX = ve[0], d.startY = ve[1], d.arrowStartX = ie[0], d.arrowStartY = ie[1], E && (!ae(d.startX) || !ae(d.startY) || !ae(d.endX) || !ae(d.endY) ? d.badLine = !0 : d.badLine = !1);
};
Qa.getSourceEndpoint = function(r) {
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
Qa.getTargetEndpoint = function(r) {
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
var Oo = {};
function Jy(r, e, t) {
  for (var a = function(l, c, f, v) {
    return je(l, c, f, v);
  }, n = e._private, i = n.rstyle.bezierPts, s = 0; s < r.bezierProjPcts.length; s++) {
    var o = r.bezierProjPcts[s];
    i.push({
      x: a(t[0], t[2], t[4], o),
      y: a(t[1], t[3], t[5], o)
    });
  }
}
Oo.storeEdgeProjections = function(r) {
  var e = r._private, t = e.rscratch, a = t.edgeType;
  if (e.rstyle.bezierPts = null, e.rstyle.linePts = null, e.rstyle.haystackPts = null, a === "multibezier" || a === "bezier" || a === "self" || a === "compound") {
    e.rstyle.bezierPts = [];
    for (var n = 0; n + 5 < t.allpts.length; n += 4)
      Jy(this, r, t.allpts.slice(n, n + 6));
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
Oo.recalculateEdgeProjections = function(r) {
  this.findEdgeControlPoints(r);
};
var _t = {};
_t.recalculateNodeLabelProjection = function(r) {
  var e = r.pstyle("label").strValue;
  if (!or(e)) {
    var t, a, n = r._private, i = r.width(), s = r.height(), o = r.padding(), u = r.position(), l = r.pstyle("text-halign").strValue, c = r.pstyle("text-valign").strValue, f = n.rscratch, v = n.rstyle;
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
    f.labelX = t, f.labelY = a, v.labelX = t, v.labelY = a, this.calculateLabelAngles(r), this.applyLabelDimensions(r);
  }
};
var jf = function(e, t) {
  var a = Math.atan(t / e);
  return e === 0 && a < 0 && (a = a * -1), a;
}, ev = function(e, t) {
  var a = t.x - e.x, n = t.y - e.y;
  return jf(a, n);
}, jy = function(e, t, a, n) {
  var i = Oa(0, n - 1e-3, 1), s = Oa(0, n + 1e-3, 1), o = Wr(e, t, a, i), u = Wr(e, t, a, s);
  return ev(o, u);
};
_t.recalculateEdgeLabelProjections = function(r) {
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
    var s = function(f, v, h) {
      rr(t.rscratch, f, v, h), rr(t.rstyle, f, v, h);
    };
    s("labelX", null, e.x), s("labelY", null, e.y);
    var o = jf(a.midDispX, a.midDispY);
    s("labelAutoAngle", null, o);
    var u = function() {
      if (u.cache)
        return u.cache;
      for (var f = [], v = 0; v + 5 < a.allpts.length; v += 4) {
        var h = {
          x: a.allpts[v],
          y: a.allpts[v + 1]
        }, d = {
          x: a.allpts[v + 2],
          y: a.allpts[v + 3]
        }, y = {
          x: a.allpts[v + 4],
          y: a.allpts[v + 5]
        };
        f.push({
          p0: h,
          p1: d,
          p2: y,
          startDist: 0,
          length: 0,
          segments: []
        });
      }
      var g = t.rstyle.bezierPts, p = n.bezierProjPcts.length;
      function m(x, T, D, P, A) {
        var B = Ar(T, D), k = x.segments[x.segments.length - 1], L = {
          p0: T,
          p1: D,
          t0: P,
          t1: A,
          startDist: k ? k.startDist + k.length : 0,
          length: B
        };
        x.segments.push(L), x.length += B;
      }
      for (var b = 0; b < f.length; b++) {
        var w = f[b], C = f[b - 1];
        C && (w.startDist = C.startDist + C.length), m(w, w.p0, g[b * p], 0, n.bezierProjPcts[0]);
        for (var E = 0; E < p - 1; E++)
          m(w, g[b * p + E], g[b * p + E + 1], n.bezierProjPcts[E], n.bezierProjPcts[E + 1]);
        m(w, g[b * p + p - 1], w.p2, n.bezierProjPcts[p - 1], 1);
      }
      return u.cache = f;
    }, l = function(f) {
      var v, h = f === "source";
      if (i[f]) {
        var d = r.pstyle(f + "-text-offset").pfValue;
        switch (a.edgeType) {
          case "self":
          case "compound":
          case "bezier":
          case "multibezier": {
            for (var y = u(), g, p = 0, m = 0, b = 0; b < y.length; b++) {
              for (var w = y[h ? b : y.length - 1 - b], C = 0; C < w.segments.length; C++) {
                var E = w.segments[h ? C : w.segments.length - 1 - C], x = b === y.length - 1 && C === w.segments.length - 1;
                if (p = m, m += E.length, m >= d || x) {
                  g = {
                    cp: w,
                    segment: E
                  };
                  break;
                }
              }
              if (g)
                break;
            }
            var T = g.cp, D = g.segment, P = (d - p) / D.length, A = D.t1 - D.t0, B = h ? D.t0 + A * P : D.t1 - A * P;
            B = Oa(0, B, 1), e = Wr(T.p0, T.p1, T.p2, B), v = jy(T.p0, T.p1, T.p2, B);
            break;
          }
          case "straight":
          case "segments":
          case "haystack": {
            for (var k = 0, L, M, I, R, O = a.allpts.length, _ = 0; _ + 3 < O && (h ? (I = {
              x: a.allpts[_],
              y: a.allpts[_ + 1]
            }, R = {
              x: a.allpts[_ + 2],
              y: a.allpts[_ + 3]
            }) : (I = {
              x: a.allpts[O - 2 - _],
              y: a.allpts[O - 1 - _]
            }, R = {
              x: a.allpts[O - 4 - _],
              y: a.allpts[O - 3 - _]
            }), L = Ar(I, R), M = k, k += L, !(k >= d)); _ += 2)
              ;
            var U = d - M, z = U / L;
            z = Oa(0, z, 1), e = Th(I, R, z), v = ev(I, R);
            break;
          }
        }
        s("labelX", f, e.x), s("labelY", f, e.y), s("labelAutoAngle", f, v);
      }
    };
    l("source"), l("target"), this.applyLabelDimensions(r);
  }
};
_t.applyLabelDimensions = function(r) {
  this.applyPrefixedLabelDimensions(r), r.isEdge() && (this.applyPrefixedLabelDimensions(r, "source"), this.applyPrefixedLabelDimensions(r, "target"));
};
_t.applyPrefixedLabelDimensions = function(r, e) {
  var t = r._private, a = this.getLabelText(r, e), n = this.calculateLabelDimensions(r, a), i = r.pstyle("line-height").pfValue, s = r.pstyle("text-wrap").strValue, o = Bt(t.rscratch, "labelWrapCachedLines", e) || [], u = s !== "wrap" ? 1 : Math.max(o.length, 1), l = n.height / u, c = l * i, f = n.width, v = n.height + (u - 1) * (i - 1) * l;
  rr(t.rstyle, "labelWidth", e, f), rr(t.rscratch, "labelWidth", e, f), rr(t.rstyle, "labelHeight", e, v), rr(t.rscratch, "labelHeight", e, v), rr(t.rscratch, "labelLineHeight", e, c);
};
_t.getLabelText = function(r, e) {
  var t = r._private, a = e ? e + "-" : "", n = r.pstyle(a + "label").strValue, i = r.pstyle("text-transform").value, s = function(G, Q) {
    return Q ? (rr(t.rscratch, G, e, Q), Q) : Bt(t.rscratch, G, e);
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
`), f = r.pstyle("text-max-width").pfValue, v = r.pstyle("text-overflow-wrap").value, h = v === "anywhere", d = [], y = /[\s\u200b]+|$/g, g = 0; g < c.length; g++) {
      var p = c[g], m = this.calculateLabelDimensions(r, p), b = m.width;
      if (h) {
        var w = p.split("").join(l);
        p = w;
      }
      if (b > f) {
        var C = p.matchAll(y), E = "", x = 0, T = Lt(C), D;
        try {
          for (T.s(); !(D = T.n()).done; ) {
            var P = D.value, A = P[0], B = p.substring(x, P.index);
            x = P.index + A.length;
            var k = E.length === 0 ? B : E + B + A, L = this.calculateLabelDimensions(r, k), M = L.width;
            M <= f ? E += B + A : (E && d.push(E), E = B + A);
          }
        } catch (H) {
          T.e(H);
        } finally {
          T.f();
        }
        E.match(/^[\s\u200b]+$/) || d.push(E);
      } else
        d.push(p);
    }
    s("labelWrapCachedLines", d), n = s("labelWrapCachedText", d.join(`
`)), s("labelWrapKey", u);
  } else if (o === "ellipsis") {
    var I = r.pstyle("text-max-width").pfValue, R = "", O = "…", _ = !1;
    if (this.calculateLabelDimensions(r, n).width < I)
      return n;
    for (var U = 0; U < n.length; U++) {
      var z = this.calculateLabelDimensions(r, R + n[U] + O).width;
      if (z > I)
        break;
      R += n[U], U === n.length - 1 && (_ = !0);
    }
    return _ || (R += O), R;
  }
  return n;
};
_t.getLabelJustification = function(r) {
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
_t.calculateLabelDimensions = function(r, e) {
  var t = this, a = t.cy.window(), n = a.document, i = ur(e, r._private.labelDimsKey), s = t.labelDimCache || (t.labelDimCache = []), o = s[i];
  if (o != null)
    return o;
  var u = 0, l = r.pstyle("font-style").strValue, c = r.pstyle("font-size").pfValue, f = r.pstyle("font-family").strValue, v = r.pstyle("font-weight").strValue, h = this.labelCalcCanvas, d = this.labelCalcCanvasContext;
  if (!h) {
    h = this.labelCalcCanvas = n.createElement("canvas"), d = this.labelCalcCanvasContext = h.getContext("2d");
    var y = h.style;
    y.position = "absolute", y.left = "-9999px", y.top = "-9999px", y.zIndex = "-1", y.visibility = "hidden", y.pointerEvents = "none";
  }
  d.font = "".concat(l, " ").concat(v, " ").concat(c, "px ").concat(f);
  for (var g = 0, p = 0, m = e.split(`
`), b = 0; b < m.length; b++) {
    var w = m[b], C = d.measureText(w), E = Math.ceil(C.width), x = c;
    g = Math.max(E, g), p += x;
  }
  return g += u, p += u, s[i] = {
    width: g,
    height: p
  };
};
_t.calculateLabelAngle = function(r, e) {
  var t = r._private, a = t.rscratch, n = r.isEdge(), i = e ? e + "-" : "", s = r.pstyle(i + "text-rotation"), o = s.strValue;
  return o === "none" ? 0 : n && o === "autorotate" ? a.labelAutoAngle : o === "autorotate" ? 0 : s.pfValue;
};
_t.calculateLabelAngles = function(r) {
  var e = this, t = r.isEdge(), a = r._private, n = a.rscratch;
  n.labelAngle = e.calculateLabelAngle(r), t && (n.sourceLabelAngle = e.calculateLabelAngle(r, "source"), n.targetLabelAngle = e.calculateLabelAngle(r, "target"));
};
var tv = {}, ic = 28, sc = !1;
tv.getNodeShape = function(r) {
  var e = this, t = r.pstyle("shape").value;
  if (t === "cutrectangle" && (r.width() < ic || r.height() < ic))
    return sc || (Re("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), sc = !0), "rectangle";
  if (r.isParent())
    return t === "rectangle" || t === "roundrectangle" || t === "round-rectangle" || t === "cutrectangle" || t === "cut-rectangle" || t === "barrel" ? t : "rectangle";
  if (t === "polygon") {
    var a = r.pstyle("shape-polygon-points").value;
    return e.nodeShapes.makePolygon(a).name;
  }
  return t;
};
var ci = {};
ci.registerCalculationListeners = function() {
  var r = this.cy, e = r.collection(), t = this, a = function(s) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    if (e.merge(s), o)
      for (var u = 0; u < s.length; u++) {
        var l = s[u], c = l._private, f = c.rstyle;
        f.clean = !1, f.cleanConnected = !1;
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
        for (var f = 0; f < o.length; f++) {
          var v = o[f];
          v(s, e);
        }
      t.recalculateRenderedStyle(e), e = r.collection();
    }
  };
  t.flushRenderedStyleQueue = function() {
    n(!0);
  }, t.beforeRender(n, t.beforeRenderPriorities.eleCalcs);
};
ci.onUpdateEleCalcs = function(r) {
  var e = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];
  e.push(r);
};
ci.recalculateRenderedStyle = function(r, e) {
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
        var c = n[l], f = c._private, v = f.rstyle, h = c.position();
        this.recalculateNodeLabelProjection(c), v.nodeX = h.x, v.nodeY = h.y, v.nodeW = c.pstyle("width").pfValue, v.nodeH = c.pstyle("height").pfValue;
      }
      this.recalculateEdgeProjections(a);
      for (var d = 0; d < a.length; d++) {
        var y = a[d], g = y._private, p = g.rstyle, m = g.rscratch;
        p.srcX = m.arrowStartX, p.srcY = m.arrowStartY, p.tgtX = m.arrowEndX, p.tgtY = m.arrowEndY, p.midX = m.midX, p.midY = m.midY, p.labelAngle = m.labelAngle, p.sourceLabelAngle = m.sourceLabelAngle, p.targetLabelAngle = m.targetLabelAngle;
      }
    }
  }
};
var fi = {};
fi.updateCachedGrabbedEles = function() {
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
fi.invalidateCachedZSortedEles = function() {
  this.cachedZSortedEles = null;
};
fi.getCachedZSortedEles = function(r) {
  if (r || !this.cachedZSortedEles) {
    var e = this.cy.mutableElements().toArray();
    e.sort(Nf), e.interactive = e.filter(function(t) {
      return t.interactive();
    }), this.cachedZSortedEles = e, this.updateCachedGrabbedEles();
  } else
    e = this.cachedZSortedEles;
  return e;
};
var rv = {};
[Rr, _n, vt, Qa, Oo, _t, tv, ci, fi].forEach(function(r) {
  pe(rv, r);
});
var av = {};
av.getCachedImage = function(r, e, t) {
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
var sa = {};
sa.registerBinding = function(r, e, t, a) {
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
sa.binder = function(r) {
  var e = this, t = e.cy.window(), a = r === t || r === t.document || r === t.document.body || pd(r);
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
    var f = Array.prototype.slice.call(arguments);
    return a && e.supportsPassiveEvents && (f[2] = {
      capture: c ?? !1,
      passive: !1,
      once: !1
    }), e.bindings.push({
      target: r,
      args: f
    }), (r.addEventListener || r.on).apply(r, f), this;
  };
  return {
    on: s,
    addEventListener: s,
    addListener: s,
    bind: s
  };
};
sa.nodeIsDraggable = function(r) {
  return r && r.isNode() && !r.locked() && r.grabbable();
};
sa.nodeIsGrabbable = function(r) {
  return this.nodeIsDraggable(r) && r.interactive();
};
sa.load = function() {
  var r = this, e = r.cy.window(), t = function(S) {
    return S.selected();
  }, a = function(S) {
    var $ = S.getRootNode();
    if ($ && $.nodeType === 11 && $.host !== void 0)
      return $;
  }, n = function(S, $, Z, F) {
    S == null && (S = r.cy);
    for (var q = 0; q < $.length; q++) {
      var ne = $[q];
      S.emit({
        originalEvent: Z,
        type: ne,
        position: F
      });
    }
  }, i = function(S) {
    return S.shiftKey || S.metaKey || S.ctrlKey;
  }, s = function(S, $) {
    var Z = !0;
    if (r.cy.hasCompoundNodes() && S && S.pannable())
      for (var F = 0; $ && F < $.length; F++) {
        var S = $[F];
        if (S.isNode() && S.isParent() && !S.pannable()) {
          Z = !1;
          break;
        }
      }
    else
      Z = !0;
    return Z;
  }, o = function(S) {
    S[0]._private.grabbed = !0;
  }, u = function(S) {
    S[0]._private.grabbed = !1;
  }, l = function(S) {
    S[0]._private.rscratch.inDragLayer = !0;
  }, c = function(S) {
    S[0]._private.rscratch.inDragLayer = !1;
  }, f = function(S) {
    S[0]._private.rscratch.isGrabTarget = !0;
  }, v = function(S) {
    S[0]._private.rscratch.isGrabTarget = !1;
  }, h = function(S, $) {
    var Z = $.addToList, F = Z.has(S);
    !F && S.grabbable() && !S.locked() && (Z.merge(S), o(S));
  }, d = function(S, $) {
    if (S.cy().hasCompoundNodes() && !($.inDragLayer == null && $.addToList == null)) {
      var Z = S.descendants();
      $.inDragLayer && (Z.forEach(l), Z.connectedEdges().forEach(l)), $.addToList && h(Z, $);
    }
  }, y = function(S, $) {
    $ = $ || {};
    var Z = S.cy().hasCompoundNodes();
    $.inDragLayer && (S.forEach(l), S.neighborhood().stdFilter(function(F) {
      return !Z || F.isEdge();
    }).forEach(l)), $.addToList && S.forEach(function(F) {
      h(F, $);
    }), d(S, $), m(S, {
      inDragLayer: $.inDragLayer
    }), r.updateCachedGrabbedEles();
  }, g = y, p = function(S) {
    S && (r.getCachedZSortedEles().forEach(function($) {
      u($), c($), v($);
    }), r.updateCachedGrabbedEles());
  }, m = function(S, $) {
    if (!($.inDragLayer == null && $.addToList == null) && S.cy().hasCompoundNodes()) {
      var Z = S.ancestors().orphans();
      if (!Z.same(S)) {
        var F = Z.descendants().spawnSelf().merge(Z).unmerge(S).unmerge(S.descendants()), q = F.connectedEdges();
        $.inDragLayer && (q.forEach(l), F.forEach(l)), $.addToList && F.forEach(function(ne) {
          h(ne, $);
        });
      }
    }
  }, b = function() {
    document.activeElement != null && document.activeElement.blur != null && document.activeElement.blur();
  }, w = typeof MutationObserver < "u", C = typeof ResizeObserver < "u";
  w ? (r.removeObserver = new MutationObserver(function(re) {
    for (var S = 0; S < re.length; S++) {
      var $ = re[S], Z = $.removedNodes;
      if (Z)
        for (var F = 0; F < Z.length; F++) {
          var q = Z[F];
          if (q === r.container) {
            r.destroy();
            break;
          }
        }
    }
  }), r.container.parentNode && r.removeObserver.observe(r.container.parentNode, {
    childList: !0
  })) : r.registerBinding(r.container, "DOMNodeRemoved", function(re) {
    r.destroy();
  });
  var E = Wa(function() {
    r.cy.resize();
  }, 100);
  w && (r.styleObserver = new MutationObserver(E), r.styleObserver.observe(r.container, {
    attributes: !0
  })), r.registerBinding(e, "resize", E), C && (r.resizeObserver = new ResizeObserver(E), r.resizeObserver.observe(r.container));
  var x = function(S, $) {
    for (; S != null; )
      $(S), S = S.parentNode;
  }, T = function() {
    r.invalidateContainerClientCoordsCache();
  };
  x(r.container, function(re) {
    r.registerBinding(re, "transitionend", T), r.registerBinding(re, "animationend", T), r.registerBinding(re, "scroll", T);
  }), r.registerBinding(r.container, "contextmenu", function(re) {
    re.preventDefault();
  });
  var D = function() {
    return r.selection[4] !== 0;
  }, P = function(S) {
    for (var $ = r.findContainerClientCoords(), Z = $[0], F = $[1], q = $[2], ne = $[3], J = S.touches ? S.touches : [S], ie = !1, ve = 0; ve < J.length; ve++) {
      var Ee = J[ve];
      if (Z <= Ee.clientX && Ee.clientX <= Z + q && F <= Ee.clientY && Ee.clientY <= F + ne) {
        ie = !0;
        break;
      }
    }
    if (!ie)
      return !1;
    for (var ce = r.container, we = S.target, xe = we.parentNode, ye = !1; xe; ) {
      if (xe === ce) {
        ye = !0;
        break;
      }
      xe = xe.parentNode;
    }
    return !!ye;
  };
  r.registerBinding(r.container, "mousedown", function(S) {
    if (P(S) && !(r.hoverData.which === 1 && S.which !== 1)) {
      S.preventDefault(), b(), r.hoverData.capture = !0, r.hoverData.which = S.which;
      var $ = r.cy, Z = [S.clientX, S.clientY], F = r.projectIntoViewport(Z[0], Z[1]), q = r.selection, ne = r.findNearestElements(F[0], F[1], !0, !1), J = ne[0], ie = r.dragData.possibleDragElements;
      r.hoverData.mdownPos = F, r.hoverData.mdownGPos = Z;
      var ve = function() {
        r.hoverData.tapholdCancelled = !1, clearTimeout(r.hoverData.tapholdTimeout), r.hoverData.tapholdTimeout = setTimeout(function() {
          if (!r.hoverData.tapholdCancelled) {
            var Oe = r.hoverData.down;
            Oe ? Oe.emit({
              originalEvent: S,
              type: "taphold",
              position: {
                x: F[0],
                y: F[1]
              }
            }) : $.emit({
              originalEvent: S,
              type: "taphold",
              position: {
                x: F[0],
                y: F[1]
              }
            });
          }
        }, r.tapholdDuration);
      };
      if (S.which == 3) {
        r.hoverData.cxtStarted = !0;
        var Ee = {
          originalEvent: S,
          type: "cxttapstart",
          position: {
            x: F[0],
            y: F[1]
          }
        };
        J ? (J.activate(), J.emit(Ee), r.hoverData.down = J) : $.emit(Ee), r.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), r.hoverData.cxtDragged = !1;
      } else if (S.which == 1) {
        J && J.activate();
        {
          if (J != null && r.nodeIsGrabbable(J)) {
            var ce = function(Oe) {
              return {
                originalEvent: S,
                type: Oe,
                position: {
                  x: F[0],
                  y: F[1]
                }
              };
            }, we = function(Oe) {
              Oe.emit(ce("grab"));
            };
            if (f(J), !J.selected())
              ie = r.dragData.possibleDragElements = $.collection(), g(J, {
                addToList: ie
              }), J.emit(ce("grabon")).emit(ce("grab"));
            else {
              ie = r.dragData.possibleDragElements = $.collection();
              var xe = $.$(function(ye) {
                return ye.isNode() && ye.selected() && r.nodeIsGrabbable(ye);
              });
              y(xe, {
                addToList: ie
              }), J.emit(ce("grabon")), xe.forEach(we);
            }
            r.redrawHint("eles", !0), r.redrawHint("drag", !0);
          }
          r.hoverData.down = J, r.hoverData.downs = ne, r.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime();
        }
        n(J, ["mousedown", "tapstart", "vmousedown"], S, {
          x: F[0],
          y: F[1]
        }), J == null ? (q[4] = 1, r.data.bgActivePosistion = {
          x: F[0],
          y: F[1]
        }, r.redrawHint("select", !0), r.redraw()) : J.pannable() && (q[4] = 1), ve();
      }
      q[0] = q[2] = F[0], q[1] = q[3] = F[1];
    }
  }, !1);
  var A = a(r.container);
  r.registerBinding([e, A], "mousemove", function(S) {
    var $ = r.hoverData.capture;
    if (!(!$ && !P(S))) {
      var Z = !1, F = r.cy, q = F.zoom(), ne = [S.clientX, S.clientY], J = r.projectIntoViewport(ne[0], ne[1]), ie = r.hoverData.mdownPos, ve = r.hoverData.mdownGPos, Ee = r.selection, ce = null;
      !r.hoverData.draggingEles && !r.hoverData.dragging && !r.hoverData.selecting && (ce = r.findNearestElement(J[0], J[1], !0, !1));
      var we = r.hoverData.last, xe = r.hoverData.down, ye = [J[0] - Ee[2], J[1] - Ee[3]], Oe = r.dragData.possibleDragElements, Ve;
      if (ve) {
        var wt = ne[0] - ve[0], xt = wt * wt, Ue = ne[1] - ve[1], Xe = Ue * Ue, Qe = xt + Xe;
        r.hoverData.isOverThresholdDrag = Ve = Qe >= r.desktopTapThreshold2;
      }
      var dt = i(S);
      Ve && (r.hoverData.tapholdCancelled = !0);
      var ht = function() {
        var Nt = r.hoverData.dragDelta = r.hoverData.dragDelta || [];
        Nt.length === 0 ? (Nt.push(ye[0]), Nt.push(ye[1])) : (Nt[0] += ye[0], Nt[1] += ye[1]);
      };
      Z = !0, n(ce, ["mousemove", "vmousemove", "tapdrag"], S, {
        x: J[0],
        y: J[1]
      });
      var It = function() {
        r.data.bgActivePosistion = void 0, r.hoverData.selecting || F.emit({
          originalEvent: S,
          type: "boxstart",
          position: {
            x: J[0],
            y: J[1]
          }
        }), Ee[4] = 1, r.hoverData.selecting = !0, r.redrawHint("select", !0), r.redraw();
      };
      if (r.hoverData.which === 3) {
        if (Ve) {
          var Ct = {
            originalEvent: S,
            type: "cxtdrag",
            position: {
              x: J[0],
              y: J[1]
            }
          };
          xe ? xe.emit(Ct) : F.emit(Ct), r.hoverData.cxtDragged = !0, (!r.hoverData.cxtOver || ce !== r.hoverData.cxtOver) && (r.hoverData.cxtOver && r.hoverData.cxtOver.emit({
            originalEvent: S,
            type: "cxtdragout",
            position: {
              x: J[0],
              y: J[1]
            }
          }), r.hoverData.cxtOver = ce, ce && ce.emit({
            originalEvent: S,
            type: "cxtdragover",
            position: {
              x: J[0],
              y: J[1]
            }
          }));
        }
      } else if (r.hoverData.dragging) {
        if (Z = !0, F.panningEnabled() && F.userPanningEnabled()) {
          var Ot;
          if (r.hoverData.justStartedPan) {
            var Ut = r.hoverData.mdownPos;
            Ot = {
              x: (J[0] - Ut[0]) * q,
              y: (J[1] - Ut[1]) * q
            }, r.hoverData.justStartedPan = !1;
          } else
            Ot = {
              x: ye[0] * q,
              y: ye[1] * q
            };
          F.panBy(Ot), F.emit("dragpan"), r.hoverData.dragged = !0;
        }
        J = r.projectIntoViewport(S.clientX, S.clientY);
      } else if (Ee[4] == 1 && (xe == null || xe.pannable())) {
        if (Ve) {
          if (!r.hoverData.dragging && F.boxSelectionEnabled() && (dt || !F.panningEnabled() || !F.userPanningEnabled()))
            It();
          else if (!r.hoverData.selecting && F.panningEnabled() && F.userPanningEnabled()) {
            var Gt = s(xe, r.hoverData.downs);
            Gt && (r.hoverData.dragging = !0, r.hoverData.justStartedPan = !0, Ee[4] = 0, r.data.bgActivePosistion = Ur(ie), r.redrawHint("select", !0), r.redraw());
          }
          xe && xe.pannable() && xe.active() && xe.unactivate();
        }
      } else {
        if (xe && xe.pannable() && xe.active() && xe.unactivate(), (!xe || !xe.grabbed()) && ce != we && (we && n(we, ["mouseout", "tapdragout"], S, {
          x: J[0],
          y: J[1]
        }), ce && n(ce, ["mouseover", "tapdragover"], S, {
          x: J[0],
          y: J[1]
        }), r.hoverData.last = ce), xe)
          if (Ve) {
            if (F.boxSelectionEnabled() && dt)
              xe && xe.grabbed() && (p(Oe), xe.emit("freeon"), Oe.emit("free"), r.dragData.didDrag && (xe.emit("dragfreeon"), Oe.emit("dragfree"))), It();
            else if (xe && xe.grabbed() && r.nodeIsDraggable(xe)) {
              var lt = !r.dragData.didDrag;
              lt && r.redrawHint("eles", !0), r.dragData.didDrag = !0, r.hoverData.draggingEles || y(Oe, {
                inDragLayer: !0
              });
              var Je = {
                x: 0,
                y: 0
              };
              if (ae(ye[0]) && ae(ye[1]) && (Je.x += ye[0], Je.y += ye[1], lt)) {
                var yt = r.hoverData.dragDelta;
                yt && ae(yt[0]) && ae(yt[1]) && (Je.x += yt[0], Je.y += yt[1]);
              }
              r.hoverData.draggingEles = !0, Oe.silentShift(Je).emit("position drag"), r.redrawHint("drag", !0), r.redraw();
            }
          } else
            ht();
        Z = !0;
      }
      if (Ee[2] = J[0], Ee[3] = J[1], Z)
        return S.stopPropagation && S.stopPropagation(), S.preventDefault && S.preventDefault(), !1;
    }
  }, !1);
  var B, k, L;
  r.registerBinding(e, "mouseup", function(S) {
    if (!(r.hoverData.which === 1 && S.which !== 1 && r.hoverData.capture)) {
      var $ = r.hoverData.capture;
      if ($) {
        r.hoverData.capture = !1;
        var Z = r.cy, F = r.projectIntoViewport(S.clientX, S.clientY), q = r.selection, ne = r.findNearestElement(F[0], F[1], !0, !1), J = r.dragData.possibleDragElements, ie = r.hoverData.down, ve = i(S);
        if (r.data.bgActivePosistion && (r.redrawHint("select", !0), r.redraw()), r.hoverData.tapholdCancelled = !0, r.data.bgActivePosistion = void 0, ie && ie.unactivate(), r.hoverData.which === 3) {
          var Ee = {
            originalEvent: S,
            type: "cxttapend",
            position: {
              x: F[0],
              y: F[1]
            }
          };
          if (ie ? ie.emit(Ee) : Z.emit(Ee), !r.hoverData.cxtDragged) {
            var ce = {
              originalEvent: S,
              type: "cxttap",
              position: {
                x: F[0],
                y: F[1]
              }
            };
            ie ? ie.emit(ce) : Z.emit(ce);
          }
          r.hoverData.cxtDragged = !1, r.hoverData.which = null;
        } else if (r.hoverData.which === 1) {
          if (n(ne, ["mouseup", "tapend", "vmouseup"], S, {
            x: F[0],
            y: F[1]
          }), !r.dragData.didDrag && // didn't move a node around
          !r.hoverData.dragged && // didn't pan
          !r.hoverData.selecting && // not box selection
          !r.hoverData.isOverThresholdDrag && (n(ie, ["click", "tap", "vclick"], S, {
            x: F[0],
            y: F[1]
          }), k = !1, S.timeStamp - L <= Z.multiClickDebounceTime() ? (B && clearTimeout(B), k = !0, L = null, n(ie, ["dblclick", "dbltap", "vdblclick"], S, {
            x: F[0],
            y: F[1]
          })) : (B = setTimeout(function() {
            k || n(ie, ["oneclick", "onetap", "voneclick"], S, {
              x: F[0],
              y: F[1]
            });
          }, Z.multiClickDebounceTime()), L = S.timeStamp)), ie == null && !r.dragData.didDrag && !r.hoverData.selecting && !r.hoverData.dragged && !i(S) && (Z.$(t).unselect(["tapunselect"]), J.length > 0 && r.redrawHint("eles", !0), r.dragData.possibleDragElements = J = Z.collection()), ne == ie && !r.dragData.didDrag && !r.hoverData.selecting && ne != null && ne._private.selectable && (r.hoverData.dragging || (Z.selectionType() === "additive" || ve ? ne.selected() ? ne.unselect(["tapunselect"]) : ne.select(["tapselect"]) : ve || (Z.$(t).unmerge(ne).unselect(["tapunselect"]), ne.select(["tapselect"]))), r.redrawHint("eles", !0)), r.hoverData.selecting) {
            var we = Z.collection(r.getAllInBox(q[0], q[1], q[2], q[3]));
            r.redrawHint("select", !0), we.length > 0 && r.redrawHint("eles", !0), Z.emit({
              type: "boxend",
              originalEvent: S,
              position: {
                x: F[0],
                y: F[1]
              }
            });
            var xe = function(Ve) {
              return Ve.selectable() && !Ve.selected();
            };
            Z.selectionType() === "additive" || ve || Z.$(t).unmerge(we).unselect(), we.emit("box").stdFilter(xe).select().emit("boxselect"), r.redraw();
          }
          if (r.hoverData.dragging && (r.hoverData.dragging = !1, r.redrawHint("select", !0), r.redrawHint("eles", !0), r.redraw()), !q[4]) {
            r.redrawHint("drag", !0), r.redrawHint("eles", !0);
            var ye = ie && ie.grabbed();
            p(J), ye && (ie.emit("freeon"), J.emit("free"), r.dragData.didDrag && (ie.emit("dragfreeon"), J.emit("dragfree")));
          }
        }
        q[4] = 0, r.hoverData.down = null, r.hoverData.cxtStarted = !1, r.hoverData.draggingEles = !1, r.hoverData.selecting = !1, r.hoverData.isOverThresholdDrag = !1, r.dragData.didDrag = !1, r.hoverData.dragged = !1, r.hoverData.dragDelta = [], r.hoverData.mdownPos = null, r.hoverData.mdownGPos = null, r.hoverData.which = null;
      }
    }
  }, !1);
  var M = function(S) {
    if (!r.scrollingPage) {
      var $ = r.cy, Z = $.zoom(), F = $.pan(), q = r.projectIntoViewport(S.clientX, S.clientY), ne = [q[0] * Z + F.x, q[1] * Z + F.y];
      if (r.hoverData.draggingEles || r.hoverData.dragging || r.hoverData.cxtStarted || D()) {
        S.preventDefault();
        return;
      }
      if ($.panningEnabled() && $.userPanningEnabled() && $.zoomingEnabled() && $.userZoomingEnabled()) {
        S.preventDefault(), r.data.wheelZooming = !0, clearTimeout(r.data.wheelTimeout), r.data.wheelTimeout = setTimeout(function() {
          r.data.wheelZooming = !1, r.redrawHint("eles", !0), r.redraw();
        }, 150);
        var J;
        S.deltaY != null ? J = S.deltaY / -250 : S.wheelDeltaY != null ? J = S.wheelDeltaY / 1e3 : J = S.wheelDelta / 1e3, J = J * r.wheelSensitivity;
        var ie = S.deltaMode === 1;
        ie && (J *= 33);
        var ve = $.zoom() * Math.pow(10, J);
        S.type === "gesturechange" && (ve = r.gestureStartZoom * S.scale), $.zoom({
          level: ve,
          renderedPosition: {
            x: ne[0],
            y: ne[1]
          }
        }), $.emit(S.type === "gesturechange" ? "pinchzoom" : "scrollzoom");
      }
    }
  };
  r.registerBinding(r.container, "wheel", M, !0), r.registerBinding(e, "scroll", function(S) {
    r.scrollingPage = !0, clearTimeout(r.scrollingPageTimeout), r.scrollingPageTimeout = setTimeout(function() {
      r.scrollingPage = !1;
    }, 250);
  }, !0), r.registerBinding(r.container, "gesturestart", function(S) {
    r.gestureStartZoom = r.cy.zoom(), r.hasTouchStarted || S.preventDefault();
  }, !0), r.registerBinding(r.container, "gesturechange", function(re) {
    r.hasTouchStarted || M(re);
  }, !0), r.registerBinding(r.container, "mouseout", function(S) {
    var $ = r.projectIntoViewport(S.clientX, S.clientY);
    r.cy.emit({
      originalEvent: S,
      type: "mouseout",
      position: {
        x: $[0],
        y: $[1]
      }
    });
  }, !1), r.registerBinding(r.container, "mouseover", function(S) {
    var $ = r.projectIntoViewport(S.clientX, S.clientY);
    r.cy.emit({
      originalEvent: S,
      type: "mouseover",
      position: {
        x: $[0],
        y: $[1]
      }
    });
  }, !1);
  var I, R, O, _, U, z, H, G, Q, W, X, Y, ee, V = function(S, $, Z, F) {
    return Math.sqrt((Z - S) * (Z - S) + (F - $) * (F - $));
  }, N = function(S, $, Z, F) {
    return (Z - S) * (Z - S) + (F - $) * (F - $);
  }, K;
  r.registerBinding(r.container, "touchstart", K = function(S) {
    if (r.hasTouchStarted = !0, !!P(S)) {
      b(), r.touchData.capture = !0, r.data.bgActivePosistion = void 0;
      var $ = r.cy, Z = r.touchData.now, F = r.touchData.earlier;
      if (S.touches[0]) {
        var q = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
        Z[0] = q[0], Z[1] = q[1];
      }
      if (S.touches[1]) {
        var q = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
        Z[2] = q[0], Z[3] = q[1];
      }
      if (S.touches[2]) {
        var q = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
        Z[4] = q[0], Z[5] = q[1];
      }
      if (S.touches[1]) {
        r.touchData.singleTouchMoved = !0, p(r.dragData.touchDragEles);
        var ne = r.findContainerClientCoords();
        Q = ne[0], W = ne[1], X = ne[2], Y = ne[3], I = S.touches[0].clientX - Q, R = S.touches[0].clientY - W, O = S.touches[1].clientX - Q, _ = S.touches[1].clientY - W, ee = 0 <= I && I <= X && 0 <= O && O <= X && 0 <= R && R <= Y && 0 <= _ && _ <= Y;
        var J = $.pan(), ie = $.zoom();
        U = V(I, R, O, _), z = N(I, R, O, _), H = [(I + O) / 2, (R + _) / 2], G = [(H[0] - J.x) / ie, (H[1] - J.y) / ie];
        var ve = 200, Ee = ve * ve;
        if (z < Ee && !S.touches[2]) {
          var ce = r.findNearestElement(Z[0], Z[1], !0, !0), we = r.findNearestElement(Z[2], Z[3], !0, !0);
          ce && ce.isNode() ? (ce.activate().emit({
            originalEvent: S,
            type: "cxttapstart",
            position: {
              x: Z[0],
              y: Z[1]
            }
          }), r.touchData.start = ce) : we && we.isNode() ? (we.activate().emit({
            originalEvent: S,
            type: "cxttapstart",
            position: {
              x: Z[0],
              y: Z[1]
            }
          }), r.touchData.start = we) : $.emit({
            originalEvent: S,
            type: "cxttapstart",
            position: {
              x: Z[0],
              y: Z[1]
            }
          }), r.touchData.start && (r.touchData.start._private.grabbed = !1), r.touchData.cxt = !0, r.touchData.cxtDragged = !1, r.data.bgActivePosistion = void 0, r.redraw();
          return;
        }
      }
      if (S.touches[2])
        $.boxSelectionEnabled() && S.preventDefault();
      else if (!S.touches[1]) {
        if (S.touches[0]) {
          var xe = r.findNearestElements(Z[0], Z[1], !0, !0), ye = xe[0];
          if (ye != null && (ye.activate(), r.touchData.start = ye, r.touchData.starts = xe, r.nodeIsGrabbable(ye))) {
            var Oe = r.dragData.touchDragEles = $.collection(), Ve = null;
            r.redrawHint("eles", !0), r.redrawHint("drag", !0), ye.selected() ? (Ve = $.$(function(Qe) {
              return Qe.selected() && r.nodeIsGrabbable(Qe);
            }), y(Ve, {
              addToList: Oe
            })) : g(ye, {
              addToList: Oe
            }), f(ye);
            var wt = function(dt) {
              return {
                originalEvent: S,
                type: dt,
                position: {
                  x: Z[0],
                  y: Z[1]
                }
              };
            };
            ye.emit(wt("grabon")), Ve ? Ve.forEach(function(Qe) {
              Qe.emit(wt("grab"));
            }) : ye.emit(wt("grab"));
          }
          n(ye, ["touchstart", "tapstart", "vmousedown"], S, {
            x: Z[0],
            y: Z[1]
          }), ye == null && (r.data.bgActivePosistion = {
            x: q[0],
            y: q[1]
          }, r.redrawHint("select", !0), r.redraw()), r.touchData.singleTouchMoved = !1, r.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(r.touchData.tapholdTimeout), r.touchData.tapholdTimeout = setTimeout(function() {
            r.touchData.singleTouchMoved === !1 && !r.pinching && !r.touchData.selecting && n(r.touchData.start, ["taphold"], S, {
              x: Z[0],
              y: Z[1]
            });
          }, r.tapholdDuration);
        }
      }
      if (S.touches.length >= 1) {
        for (var xt = r.touchData.startPosition = [null, null, null, null, null, null], Ue = 0; Ue < Z.length; Ue++)
          xt[Ue] = F[Ue] = Z[Ue];
        var Xe = S.touches[0];
        r.touchData.startGPosition = [Xe.clientX, Xe.clientY];
      }
    }
  }, !1);
  var j;
  r.registerBinding(e, "touchmove", j = function(S) {
    var $ = r.touchData.capture;
    if (!(!$ && !P(S))) {
      var Z = r.selection, F = r.cy, q = r.touchData.now, ne = r.touchData.earlier, J = F.zoom();
      if (S.touches[0]) {
        var ie = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
        q[0] = ie[0], q[1] = ie[1];
      }
      if (S.touches[1]) {
        var ie = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
        q[2] = ie[0], q[3] = ie[1];
      }
      if (S.touches[2]) {
        var ie = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
        q[4] = ie[0], q[5] = ie[1];
      }
      var ve = r.touchData.startGPosition, Ee;
      if ($ && S.touches[0] && ve) {
        for (var ce = [], we = 0; we < q.length; we++)
          ce[we] = q[we] - ne[we];
        var xe = S.touches[0].clientX - ve[0], ye = xe * xe, Oe = S.touches[0].clientY - ve[1], Ve = Oe * Oe, wt = ye + Ve;
        Ee = wt >= r.touchTapThreshold2;
      }
      if ($ && r.touchData.cxt) {
        S.preventDefault();
        var xt = S.touches[0].clientX - Q, Ue = S.touches[0].clientY - W, Xe = S.touches[1].clientX - Q, Qe = S.touches[1].clientY - W, dt = N(xt, Ue, Xe, Qe), ht = dt / z, It = 150, Ct = It * It, Ot = 1.5, Ut = Ot * Ot;
        if (ht >= Ut || dt >= Ct) {
          r.touchData.cxt = !1, r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
          var Gt = {
            originalEvent: S,
            type: "cxttapend",
            position: {
              x: q[0],
              y: q[1]
            }
          };
          r.touchData.start ? (r.touchData.start.unactivate().emit(Gt), r.touchData.start = null) : F.emit(Gt);
        }
      }
      if ($ && r.touchData.cxt) {
        var Gt = {
          originalEvent: S,
          type: "cxtdrag",
          position: {
            x: q[0],
            y: q[1]
          }
        };
        r.data.bgActivePosistion = void 0, r.redrawHint("select", !0), r.touchData.start ? r.touchData.start.emit(Gt) : F.emit(Gt), r.touchData.start && (r.touchData.start._private.grabbed = !1), r.touchData.cxtDragged = !0;
        var lt = r.findNearestElement(q[0], q[1], !0, !0);
        (!r.touchData.cxtOver || lt !== r.touchData.cxtOver) && (r.touchData.cxtOver && r.touchData.cxtOver.emit({
          originalEvent: S,
          type: "cxtdragout",
          position: {
            x: q[0],
            y: q[1]
          }
        }), r.touchData.cxtOver = lt, lt && lt.emit({
          originalEvent: S,
          type: "cxtdragover",
          position: {
            x: q[0],
            y: q[1]
          }
        }));
      } else if ($ && S.touches[2] && F.boxSelectionEnabled())
        S.preventDefault(), r.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), r.touchData.selecting || F.emit({
          originalEvent: S,
          type: "boxstart",
          position: {
            x: q[0],
            y: q[1]
          }
        }), r.touchData.selecting = !0, r.touchData.didSelect = !0, Z[4] = 1, !Z || Z.length === 0 || Z[0] === void 0 ? (Z[0] = (q[0] + q[2] + q[4]) / 3, Z[1] = (q[1] + q[3] + q[5]) / 3, Z[2] = (q[0] + q[2] + q[4]) / 3 + 1, Z[3] = (q[1] + q[3] + q[5]) / 3 + 1) : (Z[2] = (q[0] + q[2] + q[4]) / 3, Z[3] = (q[1] + q[3] + q[5]) / 3), r.redrawHint("select", !0), r.redraw();
      else if ($ && S.touches[1] && !r.touchData.didSelect && F.zoomingEnabled() && F.panningEnabled() && F.userZoomingEnabled() && F.userPanningEnabled()) {
        S.preventDefault(), r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
        var Je = r.dragData.touchDragEles;
        if (Je) {
          r.redrawHint("drag", !0);
          for (var yt = 0; yt < Je.length; yt++) {
            var rn = Je[yt]._private;
            rn.grabbed = !1, rn.rscratch.inDragLayer = !1;
          }
        }
        var Nt = r.touchData.start, xt = S.touches[0].clientX - Q, Ue = S.touches[0].clientY - W, Xe = S.touches[1].clientX - Q, Qe = S.touches[1].clientY - W, $o = V(xt, Ue, Xe, Qe), Av = $o / U;
        if (ee) {
          var kv = xt - I, Dv = Ue - R, Pv = Xe - O, Bv = Qe - _, Lv = (kv + Pv) / 2, Rv = (Dv + Bv) / 2, la = F.zoom(), di = la * Av, an = F.pan(), Vo = G[0] * la + an.x, qo = G[1] * la + an.y, Mv = {
            x: -di / la * (Vo - an.x - Lv) + Vo,
            y: -di / la * (qo - an.y - Rv) + qo
          };
          if (Nt && Nt.active()) {
            var Je = r.dragData.touchDragEles;
            p(Je), r.redrawHint("drag", !0), r.redrawHint("eles", !0), Nt.unactivate().emit("freeon"), Je.emit("free"), r.dragData.didDrag && (Nt.emit("dragfreeon"), Je.emit("dragfree"));
          }
          F.viewport({
            zoom: di,
            pan: Mv,
            cancelOnFailedZoom: !0
          }), F.emit("pinchzoom"), U = $o, I = xt, R = Ue, O = Xe, _ = Qe, r.pinching = !0;
        }
        if (S.touches[0]) {
          var ie = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
          q[0] = ie[0], q[1] = ie[1];
        }
        if (S.touches[1]) {
          var ie = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
          q[2] = ie[0], q[3] = ie[1];
        }
        if (S.touches[2]) {
          var ie = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
          q[4] = ie[0], q[5] = ie[1];
        }
      } else if (S.touches[0] && !r.touchData.didSelect) {
        var kt = r.touchData.start, hi = r.touchData.last, lt;
        if (!r.hoverData.draggingEles && !r.swipePanning && (lt = r.findNearestElement(q[0], q[1], !0, !0)), $ && kt != null && S.preventDefault(), $ && kt != null && r.nodeIsDraggable(kt))
          if (Ee) {
            var Je = r.dragData.touchDragEles, _o = !r.dragData.didDrag;
            _o && y(Je, {
              inDragLayer: !0
            }), r.dragData.didDrag = !0;
            var ca = {
              x: 0,
              y: 0
            };
            if (ae(ce[0]) && ae(ce[1]) && (ca.x += ce[0], ca.y += ce[1], _o)) {
              r.redrawHint("eles", !0);
              var Dt = r.touchData.dragDelta;
              Dt && ae(Dt[0]) && ae(Dt[1]) && (ca.x += Dt[0], ca.y += Dt[1]);
            }
            r.hoverData.draggingEles = !0, Je.silentShift(ca).emit("position drag"), r.redrawHint("drag", !0), r.touchData.startPosition[0] == ne[0] && r.touchData.startPosition[1] == ne[1] && r.redrawHint("eles", !0), r.redraw();
          } else {
            var Dt = r.touchData.dragDelta = r.touchData.dragDelta || [];
            Dt.length === 0 ? (Dt.push(ce[0]), Dt.push(ce[1])) : (Dt[0] += ce[0], Dt[1] += ce[1]);
          }
        if (n(kt || lt, ["touchmove", "tapdrag", "vmousemove"], S, {
          x: q[0],
          y: q[1]
        }), (!kt || !kt.grabbed()) && lt != hi && (hi && hi.emit({
          originalEvent: S,
          type: "tapdragout",
          position: {
            x: q[0],
            y: q[1]
          }
        }), lt && lt.emit({
          originalEvent: S,
          type: "tapdragover",
          position: {
            x: q[0],
            y: q[1]
          }
        })), r.touchData.last = lt, $)
          for (var yt = 0; yt < q.length; yt++)
            q[yt] && r.touchData.startPosition[yt] && Ee && (r.touchData.singleTouchMoved = !0);
        if ($ && (kt == null || kt.pannable()) && F.panningEnabled() && F.userPanningEnabled()) {
          var Iv = s(kt, r.touchData.starts);
          Iv && (S.preventDefault(), r.data.bgActivePosistion || (r.data.bgActivePosistion = Ur(r.touchData.startPosition)), r.swipePanning ? (F.panBy({
            x: ce[0] * J,
            y: ce[1] * J
          }), F.emit("dragpan")) : Ee && (r.swipePanning = !0, F.panBy({
            x: xe * J,
            y: Oe * J
          }), F.emit("dragpan"), kt && (kt.unactivate(), r.redrawHint("select", !0), r.touchData.start = null)));
          var ie = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
          q[0] = ie[0], q[1] = ie[1];
        }
      }
      for (var we = 0; we < q.length; we++)
        ne[we] = q[we];
      $ && S.touches.length > 0 && !r.hoverData.draggingEles && !r.swipePanning && r.data.bgActivePosistion != null && (r.data.bgActivePosistion = void 0, r.redrawHint("select", !0), r.redraw());
    }
  }, !1);
  var te;
  r.registerBinding(e, "touchcancel", te = function(S) {
    var $ = r.touchData.start;
    r.touchData.capture = !1, $ && $.unactivate();
  });
  var se, de, De, Be;
  if (r.registerBinding(e, "touchend", se = function(S) {
    var $ = r.touchData.start, Z = r.touchData.capture;
    if (Z)
      S.touches.length === 0 && (r.touchData.capture = !1), S.preventDefault();
    else
      return;
    var F = r.selection;
    r.swipePanning = !1, r.hoverData.draggingEles = !1;
    var q = r.cy, ne = q.zoom(), J = r.touchData.now, ie = r.touchData.earlier;
    if (S.touches[0]) {
      var ve = r.projectIntoViewport(S.touches[0].clientX, S.touches[0].clientY);
      J[0] = ve[0], J[1] = ve[1];
    }
    if (S.touches[1]) {
      var ve = r.projectIntoViewport(S.touches[1].clientX, S.touches[1].clientY);
      J[2] = ve[0], J[3] = ve[1];
    }
    if (S.touches[2]) {
      var ve = r.projectIntoViewport(S.touches[2].clientX, S.touches[2].clientY);
      J[4] = ve[0], J[5] = ve[1];
    }
    $ && $.unactivate();
    var Ee;
    if (r.touchData.cxt) {
      if (Ee = {
        originalEvent: S,
        type: "cxttapend",
        position: {
          x: J[0],
          y: J[1]
        }
      }, $ ? $.emit(Ee) : q.emit(Ee), !r.touchData.cxtDragged) {
        var ce = {
          originalEvent: S,
          type: "cxttap",
          position: {
            x: J[0],
            y: J[1]
          }
        };
        $ ? $.emit(ce) : q.emit(ce);
      }
      r.touchData.start && (r.touchData.start._private.grabbed = !1), r.touchData.cxt = !1, r.touchData.start = null, r.redraw();
      return;
    }
    if (!S.touches[2] && q.boxSelectionEnabled() && r.touchData.selecting) {
      r.touchData.selecting = !1;
      var we = q.collection(r.getAllInBox(F[0], F[1], F[2], F[3]));
      F[0] = void 0, F[1] = void 0, F[2] = void 0, F[3] = void 0, F[4] = 0, r.redrawHint("select", !0), q.emit({
        type: "boxend",
        originalEvent: S,
        position: {
          x: J[0],
          y: J[1]
        }
      });
      var xe = function(Ct) {
        return Ct.selectable() && !Ct.selected();
      };
      we.emit("box").stdFilter(xe).select().emit("boxselect"), we.nonempty() && r.redrawHint("eles", !0), r.redraw();
    }
    if ($ != null && $.unactivate(), S.touches[2])
      r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
    else if (!S.touches[1]) {
      if (!S.touches[0]) {
        if (!S.touches[0]) {
          r.data.bgActivePosistion = void 0, r.redrawHint("select", !0);
          var ye = r.dragData.touchDragEles;
          if ($ != null) {
            var Oe = $._private.grabbed;
            p(ye), r.redrawHint("drag", !0), r.redrawHint("eles", !0), Oe && ($.emit("freeon"), ye.emit("free"), r.dragData.didDrag && ($.emit("dragfreeon"), ye.emit("dragfree"))), n($, ["touchend", "tapend", "vmouseup", "tapdragout"], S, {
              x: J[0],
              y: J[1]
            }), $.unactivate(), r.touchData.start = null;
          } else {
            var Ve = r.findNearestElement(J[0], J[1], !0, !0);
            n(Ve, ["touchend", "tapend", "vmouseup", "tapdragout"], S, {
              x: J[0],
              y: J[1]
            });
          }
          var wt = r.touchData.startPosition[0] - J[0], xt = wt * wt, Ue = r.touchData.startPosition[1] - J[1], Xe = Ue * Ue, Qe = xt + Xe, dt = Qe * ne * ne;
          r.touchData.singleTouchMoved || ($ || q.$(":selected").unselect(["tapunselect"]), n($, ["tap", "vclick"], S, {
            x: J[0],
            y: J[1]
          }), de = !1, S.timeStamp - Be <= q.multiClickDebounceTime() ? (De && clearTimeout(De), de = !0, Be = null, n($, ["dbltap", "vdblclick"], S, {
            x: J[0],
            y: J[1]
          })) : (De = setTimeout(function() {
            de || n($, ["onetap", "voneclick"], S, {
              x: J[0],
              y: J[1]
            });
          }, q.multiClickDebounceTime()), Be = S.timeStamp)), $ != null && !r.dragData.didDrag && $._private.selectable && dt < r.touchTapThreshold2 && !r.pinching && (q.selectionType() === "single" ? (q.$(t).unmerge($).unselect(["tapunselect"]), $.select(["tapselect"])) : $.selected() ? $.unselect(["tapunselect"]) : $.select(["tapselect"]), r.redrawHint("eles", !0)), r.touchData.singleTouchMoved = !0;
        }
      }
    }
    for (var ht = 0; ht < J.length; ht++)
      ie[ht] = J[ht];
    r.dragData.didDrag = !1, S.touches.length === 0 && (r.touchData.dragDelta = [], r.touchData.startPosition = [null, null, null, null, null, null], r.touchData.startGPosition = null, r.touchData.didSelect = !1), S.touches.length < 2 && (S.touches.length === 1 && (r.touchData.startGPosition = [S.touches[0].clientX, S.touches[0].clientY]), r.pinching = !1, r.redrawHint("eles", !0), r.redraw());
  }, !1), typeof TouchEvent > "u") {
    var oe = [], le = function(S) {
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
    }, he = function(S) {
      return {
        event: S,
        touch: le(S)
      };
    }, me = function(S) {
      oe.push(he(S));
    }, ge = function(S) {
      for (var $ = 0; $ < oe.length; $++) {
        var Z = oe[$];
        if (Z.event.pointerId === S.pointerId) {
          oe.splice($, 1);
          return;
        }
      }
    }, be = function(S) {
      var $ = oe.filter(function(Z) {
        return Z.event.pointerId === S.pointerId;
      })[0];
      $.event = S, $.touch = le(S);
    }, Ce = function(S) {
      S.touches = oe.map(function($) {
        return $.touch;
      });
    }, Se = function(S) {
      return S.pointerType === "mouse" || S.pointerType === 4;
    };
    r.registerBinding(r.container, "pointerdown", function(re) {
      Se(re) || (re.preventDefault(), me(re), Ce(re), K(re));
    }), r.registerBinding(r.container, "pointerup", function(re) {
      Se(re) || (ge(re), Ce(re), se(re));
    }), r.registerBinding(r.container, "pointercancel", function(re) {
      Se(re) || (ge(re), Ce(re), te(re));
    }), r.registerBinding(r.container, "pointermove", function(re) {
      Se(re) || (re.preventDefault(), be(re), Ce(re), j(re));
    });
  }
};
var Xt = {};
Xt.generatePolygon = function(r, e) {
  return this.nodeShapes[r] = {
    renderer: this,
    name: r,
    points: e,
    draw: function(a, n, i, s, o, u) {
      this.renderer.nodeShapeImpl("polygon", a, n, i, s, o, this.points);
    },
    intersectLine: function(a, n, i, s, o, u, l, c) {
      return Na(o, u, this.points, a, n, i / 2, s / 2, l);
    },
    checkPoint: function(a, n, i, s, o, u, l, c) {
      return Yt(a, n, this.points, u, l, s, o, [0, -1], i);
    }
  };
};
Xt.generateEllipse = function() {
  return this.nodeShapes.ellipse = {
    renderer: this,
    name: "ellipse",
    draw: function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    },
    intersectLine: function(e, t, a, n, i, s, o, u) {
      return zh(i, s, e, t, a / 2 + o, n / 2 + o);
    },
    checkPoint: function(e, t, a, n, i, s, o, u) {
      return Tr(e, t, n, i, s, o, a);
    }
  };
};
Xt.generateRoundPolygon = function(r, e) {
  return this.nodeShapes[r] = {
    renderer: this,
    name: r,
    points: e,
    getOrCreateCorners: function(a, n, i, s, o, u, l) {
      if (u[l] !== void 0 && u[l + "-cx"] === a && u[l + "-cy"] === n)
        return u[l];
      u[l] = new Array(e.length / 2), u[l + "-cx"] = a, u[l + "-cy"] = n;
      var c = i / 2, f = s / 2;
      o = o === "auto" ? nf(i, s) : o;
      for (var v = new Array(e.length / 2), h = 0; h < e.length / 2; h++)
        v[h] = {
          x: a + c * e[h * 2],
          y: n + f * e[h * 2 + 1]
        };
      var d, y, g, p, m = v.length;
      for (y = v[m - 1], d = 0; d < m; d++)
        g = v[d % m], p = v[(d + 1) % m], u[l][d] = Io(y, g, p, o), y = g, g = p;
      return u[l];
    },
    draw: function(a, n, i, s, o, u, l) {
      this.renderer.nodeShapeImpl("round-polygon", a, n, i, s, o, this.points, this.getOrCreateCorners(n, i, s, o, u, l, "drawCorners"));
    },
    intersectLine: function(a, n, i, s, o, u, l, c, f) {
      return Fh(o, u, this.points, a, n, i, s, l, this.getOrCreateCorners(a, n, i, s, c, f, "corners"));
    },
    checkPoint: function(a, n, i, s, o, u, l, c, f) {
      return Nh(a, n, this.points, u, l, s, o, this.getOrCreateCorners(u, l, s, o, c, f, "corners"));
    }
  };
};
Xt.generateRoundRectangle = function() {
  return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
    renderer: this,
    name: "round-rectangle",
    points: gt(4, 0),
    draw: function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, this.points, s);
    },
    intersectLine: function(e, t, a, n, i, s, o, u) {
      return rf(i, s, e, t, a, n, o, u);
    },
    checkPoint: function(e, t, a, n, i, s, o, u) {
      var l = n / 2, c = i / 2;
      u = u === "auto" ? kr(n, i) : u, u = Math.min(l, c, u);
      var f = u * 2;
      return !!(Yt(e, t, this.points, s, o, n, i - f, [0, -1], a) || Yt(e, t, this.points, s, o, n - f, i, [0, -1], a) || Tr(e, t, f, f, s - l + u, o - c + u, a) || Tr(e, t, f, f, s + l - u, o - c + u, a) || Tr(e, t, f, f, s + l - u, o + c - u, a) || Tr(e, t, f, f, s - l + u, o + c - u, a));
    }
  };
};
Xt.generateCutRectangle = function() {
  return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
    renderer: this,
    name: "cut-rectangle",
    cornerLength: Co(),
    points: gt(4, 0),
    draw: function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, null, s);
    },
    generateCutTrianglePts: function(e, t, a, n, i) {
      var s = i === "auto" ? this.cornerLength : i, o = t / 2, u = e / 2, l = a - u, c = a + u, f = n - o, v = n + o;
      return {
        topLeft: [l, f + s, l + s, f, l + s, f + s],
        topRight: [c - s, f, c, f + s, c - s, f + s],
        bottomRight: [c, v - s, c - s, v, c - s, v - s],
        bottomLeft: [l + s, v, l, v - s, l + s, v - s]
      };
    },
    intersectLine: function(e, t, a, n, i, s, o, u) {
      var l = this.generateCutTrianglePts(a + 2 * o, n + 2 * o, e, t, u), c = [].concat.apply([], [l.topLeft.splice(0, 4), l.topRight.splice(0, 4), l.bottomRight.splice(0, 4), l.bottomLeft.splice(0, 4)]);
      return Na(i, s, c, e, t);
    },
    checkPoint: function(e, t, a, n, i, s, o, u) {
      var l = u === "auto" ? this.cornerLength : u;
      if (Yt(e, t, this.points, s, o, n, i - 2 * l, [0, -1], a) || Yt(e, t, this.points, s, o, n - 2 * l, i, [0, -1], a))
        return !0;
      var c = this.generateCutTrianglePts(n, i, s, o);
      return mt(e, t, c.topLeft) || mt(e, t, c.topRight) || mt(e, t, c.bottomRight) || mt(e, t, c.bottomLeft);
    }
  };
};
Xt.generateBarrel = function() {
  return this.nodeShapes.barrel = {
    renderer: this,
    name: "barrel",
    points: gt(4, 0),
    draw: function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i);
    },
    intersectLine: function(e, t, a, n, i, s, o, u) {
      var l = 0.15, c = 0.5, f = 0.85, v = this.generateBarrelBezierPts(a + 2 * o, n + 2 * o, e, t), h = function(g) {
        var p = Wr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, l), m = Wr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, c), b = Wr({
          x: g[0],
          y: g[1]
        }, {
          x: g[2],
          y: g[3]
        }, {
          x: g[4],
          y: g[5]
        }, f);
        return [g[0], g[1], p.x, p.y, m.x, m.y, b.x, b.y, g[4], g[5]];
      }, d = [].concat(h(v.topLeft), h(v.topRight), h(v.bottomRight), h(v.bottomLeft));
      return Na(i, s, d, e, t);
    },
    generateBarrelBezierPts: function(e, t, a, n) {
      var i = t / 2, s = e / 2, o = a - s, u = a + s, l = n - i, c = n + i, f = Ks(e, t), v = f.heightOffset, h = f.widthOffset, d = f.ctrlPtOffsetPct * e, y = {
        topLeft: [o, l + v, o + d, l, o + h, l],
        topRight: [u - h, l, u - d, l, u, l + v],
        bottomRight: [u, c - v, u - d, c, u - h, c],
        bottomLeft: [o + h, c, o + d, c, o, c - v]
      };
      return y.topLeft.isTop = !0, y.topRight.isTop = !0, y.bottomLeft.isBottom = !0, y.bottomRight.isBottom = !0, y;
    },
    checkPoint: function(e, t, a, n, i, s, o, u) {
      var l = Ks(n, i), c = l.heightOffset, f = l.widthOffset;
      if (Yt(e, t, this.points, s, o, n, i - 2 * c, [0, -1], a) || Yt(e, t, this.points, s, o, n - 2 * f, i, [0, -1], a))
        return !0;
      for (var v = this.generateBarrelBezierPts(n, i, s, o), h = function(T, D, P) {
        var A = P[4], B = P[2], k = P[0], L = P[5], M = P[1], I = Math.min(A, k), R = Math.max(A, k), O = Math.min(L, M), _ = Math.max(L, M);
        if (I <= T && T <= R && O <= D && D <= _) {
          var U = $h(A, B, k), z = Rh(U[0], U[1], U[2], T), H = z.filter(function(G) {
            return 0 <= G && G <= 1;
          });
          if (H.length > 0)
            return H[0];
        }
        return null;
      }, d = Object.keys(v), y = 0; y < d.length; y++) {
        var g = d[y], p = v[g], m = h(e, t, p);
        if (m != null) {
          var b = p[5], w = p[3], C = p[1], E = je(b, w, C, m);
          if (p.isTop && E <= t || p.isBottom && t <= E)
            return !0;
        }
      }
      return !1;
    }
  };
};
Xt.generateBottomRoundrectangle = function() {
  return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
    renderer: this,
    name: "bottom-round-rectangle",
    points: gt(4, 0),
    draw: function(e, t, a, n, i, s) {
      this.renderer.nodeShapeImpl(this.name, e, t, a, n, i, this.points, s);
    },
    intersectLine: function(e, t, a, n, i, s, o, u) {
      var l = e - (a / 2 + o), c = t - (n / 2 + o), f = c, v = e + (a / 2 + o), h = ar(i, s, e, t, l, c, v, f, !1);
      return h.length > 0 ? h : rf(i, s, e, t, a, n, o, u);
    },
    checkPoint: function(e, t, a, n, i, s, o, u) {
      u = u === "auto" ? kr(n, i) : u;
      var l = 2 * u;
      if (Yt(e, t, this.points, s, o, n, i - l, [0, -1], a) || Yt(e, t, this.points, s, o, n - l, i, [0, -1], a))
        return !0;
      var c = n / 2 + 2 * a, f = i / 2 + 2 * a, v = [s - c, o - f, s - c, o, s + c, o, s + c, o - f];
      return !!(mt(e, t, v) || Tr(e, t, l, l, s + n / 2 - u, o + i / 2 - u, a) || Tr(e, t, l, l, s - n / 2 + u, o + i / 2 - u, a));
    }
  };
};
Xt.registerNodeShapes = function() {
  var r = this.nodeShapes = {}, e = this;
  this.generateEllipse(), this.generatePolygon("triangle", gt(3, 0)), this.generateRoundPolygon("round-triangle", gt(3, 0)), this.generatePolygon("rectangle", gt(4, 0)), r.square = r.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
  {
    var t = [0, 1, 1, 0, 0, -1, -1, 0];
    this.generatePolygon("diamond", t), this.generateRoundPolygon("round-diamond", t);
  }
  this.generatePolygon("pentagon", gt(5, 0)), this.generateRoundPolygon("round-pentagon", gt(5, 0)), this.generatePolygon("hexagon", gt(6, 0)), this.generateRoundPolygon("round-hexagon", gt(6, 0)), this.generatePolygon("heptagon", gt(7, 0)), this.generateRoundPolygon("round-heptagon", gt(7, 0)), this.generatePolygon("octagon", gt(8, 0)), this.generateRoundPolygon("round-octagon", gt(8, 0));
  var a = new Array(20);
  {
    var n = Gs(5, 0), i = Gs(5, Math.PI / 5), s = 0.5 * (3 - Math.sqrt(5));
    s *= 1.57;
    for (var o = 0; o < i.length / 2; o++)
      i[o * 2] *= s, i[o * 2 + 1] *= s;
    for (var o = 0; o < 20 / 4; o++)
      a[o * 4] = n[o * 2], a[o * 4 + 1] = n[o * 2 + 1], a[o * 4 + 2] = i[o * 2], a[o * 4 + 3] = i[o * 2 + 1];
  }
  a = af(a), this.generatePolygon("star", a), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
  {
    var u = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
    this.generatePolygon("tag", u), this.generateRoundPolygon("round-tag", u);
  }
  r.makePolygon = function(l) {
    var c = l.join("$"), f = "polygon-" + c, v;
    return (v = this[f]) ? v : e.generatePolygon(f, l);
  };
};
var Ja = {};
Ja.timeToRender = function() {
  return this.redrawTotalTime / this.redrawCount;
};
Ja.redraw = function(r) {
  r = r || Qc();
  var e = this;
  e.averageRedrawTime === void 0 && (e.averageRedrawTime = 0), e.lastRedrawTime === void 0 && (e.lastRedrawTime = 0), e.lastDrawTime === void 0 && (e.lastDrawTime = 0), e.requestedFrame = !0, e.renderOptions = r;
};
Ja.beforeRender = function(r, e) {
  if (!this.destroyed) {
    e == null && qe("Priority is not optional for beforeRender");
    var t = this.beforeRenderCallbacks;
    t.push({
      fn: r,
      priority: e
    }), t.sort(function(a, n) {
      return n.priority - a.priority;
    });
  }
};
var oc = function(e, t, a) {
  for (var n = e.beforeRenderCallbacks, i = 0; i < n.length; i++)
    n[i].fn(t, a);
};
Ja.startRenderLoop = function() {
  var r = this, e = r.cy;
  if (!r.renderLoopStarted) {
    r.renderLoopStarted = !0;
    var t = function(n) {
      if (!r.destroyed) {
        if (!e.batching())
          if (r.requestedFrame && !r.skipFrame) {
            oc(r, !0, n);
            var i = Zt();
            r.render(r.renderOptions);
            var s = r.lastDrawTime = Zt();
            r.averageRedrawTime === void 0 && (r.averageRedrawTime = s - i), r.redrawCount === void 0 && (r.redrawCount = 0), r.redrawCount++, r.redrawTotalTime === void 0 && (r.redrawTotalTime = 0);
            var o = s - i;
            r.redrawTotalTime += o, r.lastRedrawTime = o, r.averageRedrawTime = r.averageRedrawTime / 2 + o / 2, r.requestedFrame = !1;
          } else
            oc(r, !1, n);
        r.skipFrame = !1, In(t);
      }
    };
    In(t);
  }
};
var e0 = function(e) {
  this.init(e);
}, nv = e0, oa = nv.prototype;
oa.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"];
oa.init = function(r) {
  var e = this;
  e.options = r, e.cy = r.cy;
  var t = e.container = r.cy.container(), a = e.cy.window();
  if (a) {
    var n = a.document, i = n.head, s = "__________cytoscape_stylesheet", o = "__________cytoscape_container", u = n.getElementById(s) != null;
    if (t.className.indexOf(o) < 0 && (t.className = (t.className || "") + " " + o), !u) {
      var l = n.createElement("style");
      l.id = s, l.textContent = "." + o + " { position: relative; }", i.insertBefore(l, i.children[0]);
    }
    var c = a.getComputedStyle(t), f = c.getPropertyValue("position");
    f === "static" && Re("A Cytoscape container has style position:static and so can not use UI extensions properly");
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
  }, e.redraws = 0, e.showFps = r.showFps, e.debug = r.debug, e.webgl = r.webgl, e.hideEdgesOnViewport = r.hideEdgesOnViewport, e.textureOnViewport = r.textureOnViewport, e.wheelSensitivity = r.wheelSensitivity, e.motionBlurEnabled = r.motionBlur, e.forcedPixelRatio = ae(r.pixelRatio) ? r.pixelRatio : null, e.motionBlur = r.motionBlur, e.motionBlurOpacity = r.motionBlurOpacity, e.motionBlurTransparency = 1 - e.motionBlurOpacity, e.motionBlurPxRatio = 1, e.mbPxRBlurry = 1, e.minMbLowQualFrames = 4, e.fullQualityMb = !1, e.clearedForMotionBlur = [], e.desktopTapThreshold = r.desktopTapThreshold, e.desktopTapThreshold2 = r.desktopTapThreshold * r.desktopTapThreshold, e.touchTapThreshold = r.touchTapThreshold, e.touchTapThreshold2 = r.touchTapThreshold * r.touchTapThreshold, e.tapholdDuration = 500, e.bindings = [], e.beforeRenderCallbacks = [], e.beforeRenderPriorities = {
    // higher priority execs before lower one
    animations: 400,
    eleCalcs: 300,
    eleTxrDeq: 200,
    lyrTxrDeq: 150,
    lyrTxrSkip: 100
  }, e.registerNodeShapes(), e.registerArrowShapes(), e.registerCalculationListeners();
};
oa.notify = function(r, e) {
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
oa.destroy = function() {
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
oa.isHeadless = function() {
  return !1;
};
[Mo, rv, av, sa, Xt, Ja].forEach(function(r) {
  pe(oa, r);
});
var $s = 1e3 / 60, iv = {
  setupDequeueing: function(e) {
    return function() {
      var a = this, n = this.renderer;
      if (!a.dequeueingSetup) {
        a.dequeueingSetup = !0;
        var i = Wa(function() {
          n.redrawHint("eles", !0), n.redrawHint("drag", !0), n.redraw();
        }, e.deqRedrawThreshold), s = function(l, c) {
          var f = Zt(), v = n.averageRedrawTime, h = n.lastRedrawTime, d = [], y = n.cy.extent(), g = n.getPixelRatio();
          for (l || n.flushRenderedStyleQueue(); ; ) {
            var p = Zt(), m = p - f, b = p - c;
            if (h < $s) {
              var w = $s - (l ? v : 0);
              if (b >= e.deqFastCost * w)
                break;
            } else if (l) {
              if (m >= e.deqCost * h || m >= e.deqAvgCost * v)
                break;
            } else if (b >= e.deqNoDrawCost * $s)
              break;
            var C = e.deq(a, g, y);
            if (C.length > 0)
              for (var E = 0; E < C.length; E++)
                d.push(C[E]);
            else
              break;
          }
          d.length > 0 && (e.onDeqd(a, d), !l && e.shouldRedraw(a, d, g, y) && i());
        }, o = e.priority || bo;
        n.beforeRender(s, o(a));
      }
    };
  }
}, t0 = /* @__PURE__ */ function() {
  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : On;
    dr(this, r), this.idsByKey = new Wt(), this.keyForId = new Wt(), this.cachesByLvl = new Wt(), this.lvls = [], this.getKey = e, this.doesEleInvalidateKey = t;
  }
  return hr(r, [{
    key: "getIdsFor",
    value: function(t) {
      t == null && qe("Can not get id list for null key");
      var a = this.idsByKey, n = this.idsByKey.get(t);
      return n || (n = new ra(), a.set(t, n)), n;
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
      return i || (i = new Wt(), a.set(t, i), n.push(t)), i;
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
}(), uc = 25, pn = 50, Pn = -4, io = 3, sv = 7.99, r0 = 8, a0 = 1024, n0 = 1024, i0 = 1024, s0 = 0.2, o0 = 0.8, u0 = 10, l0 = 0.15, c0 = 0.1, f0 = 0.9, v0 = 0.9, d0 = 100, h0 = 1, Kr = {
  dequeue: "dequeue",
  downscale: "downscale",
  highQuality: "highQuality"
}, g0 = Ze({
  getKey: null,
  doesEleInvalidateKey: On,
  drawElement: null,
  getBoundingBox: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: Zc,
  allowEdgeTxrCaching: !0,
  allowParentTxrCaching: !0
}), xa = function(e, t) {
  var a = this;
  a.renderer = e, a.onDequeues = [];
  var n = g0(t);
  pe(a, n), a.lookup = new t0(n.getKey, n.doesEleInvalidateKey), a.setupDequeueing();
}, Ye = xa.prototype;
Ye.reasons = Kr;
Ye.getTextureQueue = function(r) {
  var e = this;
  return e.eleImgCaches = e.eleImgCaches || {}, e.eleImgCaches[r] = e.eleImgCaches[r] || [];
};
Ye.getRetiredTextureQueue = function(r) {
  var e = this, t = e.eleImgCaches.retired = e.eleImgCaches.retired || {}, a = t[r] = t[r] || [];
  return a;
};
Ye.getElementQueue = function() {
  var r = this, e = r.eleCacheQueue = r.eleCacheQueue || new Za(function(t, a) {
    return a.reqs - t.reqs;
  });
  return e;
};
Ye.getElementKeyToQueue = function() {
  var r = this, e = r.eleKeyToCacheQueue = r.eleKeyToCacheQueue || {};
  return e;
};
Ye.getElement = function(r, e, t, a, n) {
  var i = this, s = this.renderer, o = s.cy.zoom(), u = this.lookup;
  if (!e || e.w === 0 || e.h === 0 || isNaN(e.w) || isNaN(e.h) || !r.visible() || r.removed() || !i.allowEdgeTxrCaching && r.isEdge() || !i.allowParentTxrCaching && r.isParent())
    return null;
  if (a == null && (a = Math.ceil(xo(o * t))), a < Pn)
    a = Pn;
  else if (o >= sv || a > io)
    return null;
  var l = Math.pow(2, a), c = e.h * l, f = e.w * l, v = s.eleTextBiggerThanMin(r, l);
  if (!this.isVisible(r, v))
    return null;
  var h = u.get(r, a);
  if (h && h.invalidated && (h.invalidated = !1, h.texture.invalidatedWidth -= h.width), h)
    return h;
  var d;
  if (c <= uc ? d = uc : c <= pn ? d = pn : d = Math.ceil(c / pn) * pn, c > i0 || f > n0)
    return null;
  var y = i.getTextureQueue(d), g = y[y.length - 2], p = function() {
    return i.recycleTexture(d, f) || i.addTexture(d, f);
  };
  g || (g = y[y.length - 1]), g || (g = p()), g.width - g.usedWidth < f && (g = p());
  for (var m = function(I) {
    return I && I.scaledLabelShown === v;
  }, b = n && n === Kr.dequeue, w = n && n === Kr.highQuality, C = n && n === Kr.downscale, E, x = a + 1; x <= io; x++) {
    var T = u.get(r, x);
    if (T) {
      E = T;
      break;
    }
  }
  var D = E && E.level === a + 1 ? E : null, P = function() {
    g.context.drawImage(D.texture.canvas, D.x, 0, D.width, D.height, g.usedWidth, 0, f, c);
  };
  if (g.context.setTransform(1, 0, 0, 1, 0, 0), g.context.clearRect(g.usedWidth, 0, f, d), m(D))
    P();
  else if (m(E))
    if (w) {
      for (var A = E.level; A > a; A--)
        D = i.getElement(r, e, t, A, Kr.downscale);
      P();
    } else
      return i.queueElement(r, E.level - 1), E;
  else {
    var B;
    if (!b && !w && !C)
      for (var k = a - 1; k >= Pn; k--) {
        var L = u.get(r, k);
        if (L) {
          B = L;
          break;
        }
      }
    if (m(B))
      return i.queueElement(r, a), B;
    g.context.translate(g.usedWidth, 0), g.context.scale(l, l), this.drawElement(g.context, r, e, v, !1), g.context.scale(1 / l, 1 / l), g.context.translate(-g.usedWidth, 0);
  }
  return h = {
    x: g.usedWidth,
    texture: g,
    level: a,
    scale: l,
    width: f,
    height: c,
    scaledLabelShown: v
  }, g.usedWidth += Math.ceil(f + r0), g.eleCaches.push(h), u.set(r, a, h), i.checkTextureFullness(g), h;
};
Ye.invalidateElements = function(r) {
  for (var e = 0; e < r.length; e++)
    this.invalidateElement(r[e]);
};
Ye.invalidateElement = function(r) {
  var e = this, t = e.lookup, a = [], n = t.isInvalid(r);
  if (n) {
    for (var i = Pn; i <= io; i++) {
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
Ye.checkTextureUtility = function(r) {
  r.invalidatedWidth >= s0 * r.width && this.retireTexture(r);
};
Ye.checkTextureFullness = function(r) {
  var e = this, t = e.getTextureQueue(r.height);
  r.usedWidth / r.width > o0 && r.fullnessChecks >= u0 ? lr(t, r) : r.fullnessChecks++;
};
Ye.retireTexture = function(r) {
  var e = this, t = r.height, a = e.getTextureQueue(t), n = this.lookup;
  lr(a, r), r.retired = !0;
  for (var i = r.eleCaches, s = 0; s < i.length; s++) {
    var o = i[s];
    n.deleteCache(o.key, o.level);
  }
  wo(i);
  var u = e.getRetiredTextureQueue(t);
  u.push(r);
};
Ye.addTexture = function(r, e) {
  var t = this, a = t.getTextureQueue(r), n = {};
  return a.push(n), n.eleCaches = [], n.height = r, n.width = Math.max(a0, e), n.usedWidth = 0, n.invalidatedWidth = 0, n.fullnessChecks = 0, n.canvas = t.renderer.makeOffscreenCanvas(n.width, n.height), n.context = n.canvas.getContext("2d"), n;
};
Ye.recycleTexture = function(r, e) {
  for (var t = this, a = t.getTextureQueue(r), n = t.getRetiredTextureQueue(r), i = 0; i < n.length; i++) {
    var s = n[i];
    if (s.width >= e)
      return s.retired = !1, s.usedWidth = 0, s.invalidatedWidth = 0, s.fullnessChecks = 0, wo(s.eleCaches), s.context.setTransform(1, 0, 0, 1, 0, 0), s.context.clearRect(0, 0, s.width, s.height), lr(n, s), a.push(s), s;
  }
};
Ye.queueElement = function(r, e) {
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
Ye.dequeue = function(r) {
  for (var e = this, t = e.getElementQueue(), a = e.getElementKeyToQueue(), n = [], i = e.lookup, s = 0; s < h0 && t.size() > 0; s++) {
    var o = t.pop(), u = o.key, l = o.eles[0], c = i.hasCache(l, o.level);
    if (a[u] = null, c)
      continue;
    n.push(o);
    var f = e.getBoundingBox(l);
    e.getElement(l, f, r, o.level, Kr.dequeue);
  }
  return n;
};
Ye.removeFromQueue = function(r) {
  var e = this, t = e.getElementQueue(), a = e.getElementKeyToQueue(), n = this.getKey(r), i = a[n];
  i != null && (i.eles.length === 1 ? (i.reqs = mo, t.updateItem(i), t.pop(), a[n] = null) : i.eles.unmerge(r));
};
Ye.onDequeue = function(r) {
  this.onDequeues.push(r);
};
Ye.offDequeue = function(r) {
  lr(this.onDequeues, r);
};
Ye.setupDequeueing = iv.setupDequeueing({
  deqRedrawThreshold: d0,
  deqCost: l0,
  deqAvgCost: c0,
  deqNoDrawCost: f0,
  deqFastCost: v0,
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
        if (Eo(u, n))
          return !0;
      }
    return !1;
  },
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.eleTxrDeq;
  }
});
var p0 = 1, Aa = -4, Hn = 2, y0 = 3.99, m0 = 50, b0 = 50, w0 = 0.15, x0 = 0.1, E0 = 0.9, C0 = 0.9, T0 = 1, lc = 250, S0 = 4e3 * 4e3, cc = 32767, A0 = !0, ov = function(e) {
  var t = this, a = t.renderer = e, n = a.cy;
  t.layersByLevel = {}, t.firstGet = !0, t.lastInvalidationTime = Zt() - 2 * lc, t.skipping = !1, t.eleTxrDeqs = n.collection(), t.scheduleElementRefinement = Wa(function() {
    t.refineElementTextures(t.eleTxrDeqs), t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
  }, b0), a.beforeRender(function(s, o) {
    o - t.lastInvalidationTime <= lc ? t.skipping = !0 : t.skipping = !1;
  }, a.beforeRenderPriorities.lyrTxrSkip);
  var i = function(o, u) {
    return u.reqs - o.reqs;
  };
  t.layersQueue = new Za(i), t.setupDequeueing();
}, ut = ov.prototype, fc = 0, k0 = Math.pow(2, 53) - 1;
ut.makeLayer = function(r, e) {
  var t = Math.pow(2, e), a = Math.ceil(r.w * t), n = Math.ceil(r.h * t), i = this.renderer.makeOffscreenCanvas(a, n), s = {
    id: fc = ++fc % k0,
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
ut.getLayers = function(r, e, t) {
  var a = this, n = a.renderer, i = n.cy, s = i.zoom(), o = a.firstGet;
  if (a.firstGet = !1, t == null) {
    if (t = Math.ceil(xo(s * e)), t < Aa)
      t = Aa;
    else if (s >= y0 || t > Hn)
      return null;
  }
  a.validateLayersElesOrdering(t, r);
  var u = a.layersByLevel, l = Math.pow(2, t), c = u[t] = u[t] || [], f, v = a.levelIsComplete(t, r), h, d = function() {
    var P = function(M) {
      if (a.validateLayersElesOrdering(M, r), a.levelIsComplete(M, r))
        return h = u[M], !0;
    }, A = function(M) {
      if (!h)
        for (var I = t + M; Aa <= I && I <= Hn && !P(I); I += M)
          ;
    };
    A(1), A(-1);
    for (var B = c.length - 1; B >= 0; B--) {
      var k = c[B];
      k.invalid && lr(c, k);
    }
  };
  if (!v)
    d();
  else
    return c;
  var y = function() {
    if (!f) {
      f = bt();
      for (var P = 0; P < r.length; P++)
        ef(f, r[P].boundingBox());
    }
    return f;
  }, g = function(P) {
    P = P || {};
    var A = P.after;
    y();
    var B = Math.ceil(f.w * l), k = Math.ceil(f.h * l);
    if (B > cc || k > cc)
      return null;
    var L = B * k;
    if (L > S0)
      return null;
    var M = a.makeLayer(f, t);
    if (A != null) {
      var I = c.indexOf(A) + 1;
      c.splice(I, 0, M);
    } else
      (P.insert === void 0 || P.insert) && c.unshift(M);
    return M;
  };
  if (a.skipping && !o)
    return null;
  for (var p = null, m = r.length / p0, b = !o, w = 0; w < r.length; w++) {
    var C = r[w], E = C._private.rscratch, x = E.imgLayerCaches = E.imgLayerCaches || {}, T = x[t];
    if (T) {
      p = T;
      continue;
    }
    if ((!p || p.eles.length >= m || !tf(p.bb, C.boundingBox())) && (p = g({
      insert: !0,
      after: p
    }), !p))
      return null;
    h || b ? a.queueLayer(p, C) : a.drawEleInLayer(p, C, t, e), p.eles.push(C), x[t] = p;
  }
  return h || (b ? null : c);
};
ut.getEleLevelForLayerLevel = function(r, e) {
  return r;
};
ut.drawEleInLayer = function(r, e, t, a) {
  var n = this, i = this.renderer, s = r.context, o = e.boundingBox();
  o.w === 0 || o.h === 0 || !e.visible() || (t = n.getEleLevelForLayerLevel(t, a), i.setImgSmoothing(s, !1), i.drawCachedElement(s, e, null, null, t, A0), i.setImgSmoothing(s, !0));
};
ut.levelIsComplete = function(r, e) {
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
ut.validateLayersElesOrdering = function(r, e) {
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
ut.updateElementsInLayers = function(r, e) {
  for (var t = this, a = Ha(r[0]), n = 0; n < r.length; n++)
    for (var i = a ? null : r[n], s = a ? r[n] : r[n].ele, o = s._private.rscratch, u = o.imgLayerCaches = o.imgLayerCaches || {}, l = Aa; l <= Hn; l++) {
      var c = u[l];
      c && (i && t.getEleLevelForLayerLevel(c.level) !== i.level || e(c, s, i));
    }
};
ut.haveLayers = function() {
  for (var r = this, e = !1, t = Aa; t <= Hn; t++) {
    var a = r.layersByLevel[t];
    if (a && a.length > 0) {
      e = !0;
      break;
    }
  }
  return e;
};
ut.invalidateElements = function(r) {
  var e = this;
  r.length !== 0 && (e.lastInvalidationTime = Zt(), !(r.length === 0 || !e.haveLayers()) && e.updateElementsInLayers(r, function(a, n, i) {
    e.invalidateLayer(a);
  }));
};
ut.invalidateLayer = function(r) {
  if (this.lastInvalidationTime = Zt(), !r.invalid) {
    var e = r.level, t = r.eles, a = this.layersByLevel[e];
    lr(a, r), r.elesQueue = [], r.invalid = !0, r.replacement && (r.replacement.invalid = !0);
    for (var n = 0; n < t.length; n++) {
      var i = t[n]._private.rscratch.imgLayerCaches;
      i && (i[e] = null);
    }
  }
};
ut.refineElementTextures = function(r) {
  var e = this;
  e.updateElementsInLayers(r, function(a, n, i) {
    var s = a.replacement;
    if (s || (s = a.replacement = e.makeLayer(a.bb, a.level), s.replaces = a, s.eles = a.eles), !s.reqs)
      for (var o = 0; o < s.eles.length; o++)
        e.queueLayer(s, s.eles[o]);
  });
};
ut.enqueueElementRefinement = function(r) {
  this.eleTxrDeqs.merge(r), this.scheduleElementRefinement();
};
ut.queueLayer = function(r, e) {
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
ut.dequeue = function(r) {
  for (var e = this, t = e.layersQueue, a = [], n = 0; n < T0 && t.size() !== 0; ) {
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
ut.applyLayerReplacement = function(r) {
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
ut.requestRedraw = Wa(function() {
  var r = this.renderer;
  r.redrawHint("eles", !0), r.redrawHint("drag", !0), r.redraw();
}, 100);
ut.setupDequeueing = iv.setupDequeueing({
  deqRedrawThreshold: m0,
  deqCost: w0,
  deqAvgCost: x0,
  deqNoDrawCost: E0,
  deqFastCost: C0,
  deq: function(e, t) {
    return e.dequeue(t);
  },
  onDeqd: bo,
  shouldRedraw: Zc,
  priority: function(e) {
    return e.renderer.beforeRenderPriorities.lyrTxrDeq;
  }
});
var uv = {}, vc;
function D0(r, e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    r.lineTo(a.x, a.y);
  }
}
function P0(r, e, t) {
  for (var a, n = 0; n < e.length; n++) {
    var i = e[n];
    n === 0 && (a = i), r.lineTo(i.x, i.y);
  }
  r.quadraticCurveTo(t.x, t.y, a.x, a.y);
}
function dc(r, e, t) {
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
function B0(r, e, t, a, n) {
  r.beginPath && r.beginPath(), r.arc(t, a, n, 0, Math.PI * 2, !1);
  var i = e, s = i[0];
  r.moveTo(s.x, s.y);
  for (var o = 0; o < i.length; o++) {
    var u = i[o];
    r.lineTo(u.x, u.y);
  }
  r.closePath && r.closePath();
}
function L0(r, e, t, a) {
  r.arc(e, t, a, 0, Math.PI * 2, !1);
}
uv.arrowShapeImpl = function(r) {
  return (vc || (vc = {
    polygon: D0,
    "triangle-backcurve": P0,
    "triangle-tee": dc,
    "circle-triangle": B0,
    "triangle-cross": dc,
    circle: L0
  }))[r];
};
var Ht = {};
Ht.drawElement = function(r, e, t, a, n, i) {
  var s = this;
  e.isNode() ? s.drawNode(r, e, t, a, n, i) : s.drawEdge(r, e, t, a, n, i);
};
Ht.drawElementOverlay = function(r, e) {
  var t = this;
  e.isNode() ? t.drawNodeOverlay(r, e) : t.drawEdgeOverlay(r, e);
};
Ht.drawElementUnderlay = function(r, e) {
  var t = this;
  e.isNode() ? t.drawNodeUnderlay(r, e) : t.drawEdgeUnderlay(r, e);
};
Ht.drawCachedElementPortion = function(r, e, t, a, n, i, s, o) {
  var u = this, l = t.getBoundingBox(e);
  if (!(l.w === 0 || l.h === 0)) {
    var c = t.getElement(e, l, a, n, i);
    if (c != null) {
      var f = o(u, e);
      if (f === 0)
        return;
      var v = s(u, e), h = l.x1, d = l.y1, y = l.w, g = l.h, p, m, b, w, C;
      if (v !== 0) {
        var E = t.getRotationPoint(e);
        b = E.x, w = E.y, r.translate(b, w), r.rotate(v), C = u.getImgSmoothing(r), C || u.setImgSmoothing(r, !0);
        var x = t.getRotationOffset(e);
        p = x.x, m = x.y;
      } else
        p = h, m = d;
      var T;
      f !== 1 && (T = r.globalAlpha, r.globalAlpha = T * f), r.drawImage(c.texture.canvas, c.x, 0, c.width, c.height, p, m, y, g), f !== 1 && (r.globalAlpha = T), v !== 0 && (r.rotate(-v), r.translate(-b, -w), C || u.setImgSmoothing(r, !1));
    } else
      t.drawElement(r, e);
  }
};
var R0 = function() {
  return 0;
}, M0 = function(e, t) {
  return e.getTextAngle(t, null);
}, I0 = function(e, t) {
  return e.getTextAngle(t, "source");
}, O0 = function(e, t) {
  return e.getTextAngle(t, "target");
}, N0 = function(e, t) {
  return t.effectiveOpacity();
}, Vs = function(e, t) {
  return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
};
Ht.drawCachedElement = function(r, e, t, a, n, i) {
  var s = this, o = s.data, u = o.eleTxrCache, l = o.lblTxrCache, c = o.slbTxrCache, f = o.tlbTxrCache, v = e.boundingBox(), h = i === !0 ? u.reasons.highQuality : null;
  if (!(v.w === 0 || v.h === 0 || !e.visible()) && (!a || Eo(v, a))) {
    var d = e.isEdge(), y = e.element()._private.rscratch.badLine;
    s.drawElementUnderlay(r, e), s.drawCachedElementPortion(r, e, u, t, n, h, R0, N0), (!d || !y) && s.drawCachedElementPortion(r, e, l, t, n, h, M0, Vs), d && !y && (s.drawCachedElementPortion(r, e, c, t, n, h, I0, Vs), s.drawCachedElementPortion(r, e, f, t, n, h, O0, Vs)), s.drawElementOverlay(r, e);
  }
};
Ht.drawElements = function(r, e) {
  for (var t = this, a = 0; a < e.length; a++) {
    var n = e[a];
    t.drawElement(r, n);
  }
};
Ht.drawCachedElements = function(r, e, t, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var s = e[i];
    n.drawCachedElement(r, s, t, a);
  }
};
Ht.drawCachedNodes = function(r, e, t, a) {
  for (var n = this, i = 0; i < e.length; i++) {
    var s = e[i];
    s.isNode() && n.drawCachedElement(r, s, t, a);
  }
};
Ht.drawLayeredElements = function(r, e, t, a) {
  var n = this, i = n.data.lyrTxrCache.getLayers(e, t);
  if (i)
    for (var s = 0; s < i.length; s++) {
      var o = i[s], u = o.bb;
      u.w === 0 || u.h === 0 || r.drawImage(o.canvas, u.x1, u.y1, u.w, u.h);
    }
  else
    n.drawCachedElements(r, e, t, a);
};
var Qt = {};
Qt.drawEdge = function(r, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o = e._private.rscratch;
  if (!(i && !e.visible()) && !(o.badLine || o.allpts == null || isNaN(o.allpts[0]))) {
    var u;
    t && (u = t, r.translate(-u.x1, -u.y1));
    var l = i ? e.pstyle("opacity").value : 1, c = i ? e.pstyle("line-opacity").value : 1, f = e.pstyle("curve-style").value, v = e.pstyle("line-style").value, h = e.pstyle("width").pfValue, d = e.pstyle("line-cap").value, y = e.pstyle("line-outline-width").value, g = e.pstyle("line-outline-color").value, p = l * c, m = l * c, b = function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
      f === "straight-triangle" ? (s.eleStrokeStyle(r, e, M), s.drawEdgeTrianglePath(e, r, o.allpts)) : (r.lineWidth = h, r.lineCap = d, s.eleStrokeStyle(r, e, M), s.drawEdgePath(e, r, o.allpts, v), r.lineCap = "butt");
    }, w = function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : p;
      if (r.lineWidth = h + y, r.lineCap = d, y > 0)
        s.colorStrokeStyle(r, g[0], g[1], g[2], M);
      else {
        r.lineCap = "butt";
        return;
      }
      f === "straight-triangle" ? s.drawEdgeTrianglePath(e, r, o.allpts) : (s.drawEdgePath(e, r, o.allpts, v), r.lineCap = "butt");
    }, C = function() {
      n && s.drawEdgeOverlay(r, e);
    }, E = function() {
      n && s.drawEdgeUnderlay(r, e);
    }, x = function() {
      var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : m;
      s.drawArrowheads(r, e, M);
    }, T = function() {
      s.drawElementText(r, e, null, a);
    };
    r.lineJoin = "round";
    var D = e.pstyle("ghost").value === "yes";
    if (D) {
      var P = e.pstyle("ghost-offset-x").pfValue, A = e.pstyle("ghost-offset-y").pfValue, B = e.pstyle("ghost-opacity").value, k = p * B;
      r.translate(P, A), b(k), x(k), r.translate(-P, -A);
    } else
      w();
    E(), b(), x(), C(), T(), t && r.translate(u.x1, u.y1);
  }
};
var lv = function(e) {
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
Qt.drawEdgeOverlay = lv("overlay");
Qt.drawEdgeUnderlay = lv("underlay");
Qt.drawEdgePath = function(r, e, t, a) {
  var n = r._private.rscratch, i = e, s, o = !1, u = this.usePaths(), l = r.pstyle("line-dash-pattern").pfValue, c = r.pstyle("line-dash-offset").pfValue;
  if (u) {
    var f = t.join("$"), v = n.pathCacheKey && n.pathCacheKey === f;
    v ? (s = e = n.pathCache, o = !0) : (s = e = new Path2D(), n.pathCacheKey = f, n.pathCache = s);
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
          var y = Lt(n.roundCorners), g;
          try {
            for (y.s(); !(g = y.n()).done; ) {
              var p = g.value;
              Qf(e, p);
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
Qt.drawEdgeTrianglePath = function(r, e, t) {
  e.fillStyle = e.strokeStyle;
  for (var a = r.pstyle("width").pfValue, n = 0; n + 1 < t.length; n += 2) {
    var i = [t[n + 2] - t[n], t[n + 3] - t[n + 1]], s = Math.sqrt(i[0] * i[0] + i[1] * i[1]), o = [i[1] / s, -i[0] / s], u = [o[0] * a / 2, o[1] * a / 2];
    e.beginPath(), e.moveTo(t[n] - u[0], t[n + 1] - u[1]), e.lineTo(t[n] + u[0], t[n + 1] + u[1]), e.lineTo(t[n + 2], t[n + 3]), e.closePath(), e.fill();
  }
};
Qt.drawArrowheads = function(r, e, t) {
  var a = e._private.rscratch, n = a.edgeType === "haystack";
  n || this.drawArrowhead(r, e, "source", a.arrowStartX, a.arrowStartY, a.srcArrowAngle, t), this.drawArrowhead(r, e, "mid-target", a.midX, a.midY, a.midtgtArrowAngle, t), this.drawArrowhead(r, e, "mid-source", a.midX, a.midY, a.midsrcArrowAngle, t), n || this.drawArrowhead(r, e, "target", a.arrowEndX, a.arrowEndY, a.tgtArrowAngle, t);
};
Qt.drawArrowhead = function(r, e, t, a, n, i, s) {
  if (!(isNaN(a) || a == null || isNaN(n) || n == null || isNaN(i) || i == null)) {
    var o = this, u = e.pstyle(t + "-arrow-shape").value;
    if (u !== "none") {
      var l = e.pstyle(t + "-arrow-fill").value === "hollow" ? "both" : "filled", c = e.pstyle(t + "-arrow-fill").value, f = e.pstyle("width").pfValue, v = e.pstyle(t + "-arrow-width"), h = v.value === "match-line" ? f : v.pfValue;
      v.units === "%" && (h *= f);
      var d = e.pstyle("opacity").value;
      s === void 0 && (s = d);
      var y = r.globalCompositeOperation;
      (s !== 1 || c === "hollow") && (r.globalCompositeOperation = "destination-out", o.colorFillStyle(r, 255, 255, 255, 1), o.colorStrokeStyle(r, 255, 255, 255, 1), o.drawArrowShape(e, r, l, f, u, h, a, n, i), r.globalCompositeOperation = y);
      var g = e.pstyle(t + "-arrow-color").value;
      o.colorFillStyle(r, g[0], g[1], g[2], s), o.colorStrokeStyle(r, g[0], g[1], g[2], s), o.drawArrowShape(e, r, c, f, u, h, a, n, i);
    }
  }
};
Qt.drawArrowShape = function(r, e, t, a, n, i, s, o, u) {
  var l = this, c = this.usePaths() && n !== "triangle-cross", f = !1, v, h = e, d = {
    x: s,
    y: o
  }, y = r.pstyle("arrow-scale").value, g = this.getArrowWidth(a, y), p = l.arrowShapes[n];
  if (c) {
    var m = l.arrowPathCache = l.arrowPathCache || [], b = ur(n), w = m[b];
    w != null ? (v = e = w, f = !0) : (v = e = new Path2D(), m[b] = v);
  }
  f || (e.beginPath && e.beginPath(), c ? p.draw(e, 1, 0, {
    x: 0,
    y: 0
  }, 1) : p.draw(e, g, u, d, a), e.closePath && e.closePath()), e = h, c && (e.translate(s, o), e.rotate(u), e.scale(g, g)), (t === "filled" || t === "both") && (c ? e.fill(v) : e.fill()), (t === "hollow" || t === "both") && (e.lineWidth = i / (c ? g : 1), e.lineJoin = "miter", c ? e.stroke(v) : e.stroke()), c && (e.scale(1 / g, 1 / g), e.rotate(-u), e.translate(-s, -o));
};
var No = {};
No.safeDrawImage = function(r, e, t, a, n, i, s, o, u, l) {
  if (!(n <= 0 || i <= 0 || u <= 0 || l <= 0))
    try {
      r.drawImage(e, t, a, n, i, s, o, u, l);
    } catch (c) {
      Re(c);
    }
};
No.drawInscribedImage = function(r, e, t, a, n) {
  var i = this, s = t.position(), o = s.x, u = s.y, l = t.cy().style(), c = l.getIndexedStyle.bind(l), f = c(t, "background-fit", "value", a), v = c(t, "background-repeat", "value", a), h = t.width(), d = t.height(), y = t.padding() * 2, g = h + (c(t, "background-width-relative-to", "value", a) === "inner" ? 0 : y), p = d + (c(t, "background-height-relative-to", "value", a) === "inner" ? 0 : y), m = t._private.rscratch, b = c(t, "background-clip", "value", a), w = b === "node", C = c(t, "background-image-opacity", "value", a) * n, E = c(t, "background-image-smoothing", "value", a), x = t.pstyle("corner-radius").value;
  x !== "auto" && (x = t.pstyle("corner-radius").pfValue);
  var T = e.width || e.cachedW, D = e.height || e.cachedH;
  (T == null || D == null) && (document.body.appendChild(e), T = e.cachedW = e.width || e.offsetWidth, D = e.cachedH = e.height || e.offsetHeight, document.body.removeChild(e));
  var P = T, A = D;
  if (c(t, "background-width", "value", a) !== "auto" && (c(t, "background-width", "units", a) === "%" ? P = c(t, "background-width", "pfValue", a) * g : P = c(t, "background-width", "pfValue", a)), c(t, "background-height", "value", a) !== "auto" && (c(t, "background-height", "units", a) === "%" ? A = c(t, "background-height", "pfValue", a) * p : A = c(t, "background-height", "pfValue", a)), !(P === 0 || A === 0)) {
    if (f === "contain") {
      var B = Math.min(g / P, p / A);
      P *= B, A *= B;
    } else if (f === "cover") {
      var B = Math.max(g / P, p / A);
      P *= B, A *= B;
    }
    var k = o - g / 2, L = c(t, "background-position-x", "units", a), M = c(t, "background-position-x", "pfValue", a);
    L === "%" ? k += (g - P) * M : k += M;
    var I = c(t, "background-offset-x", "units", a), R = c(t, "background-offset-x", "pfValue", a);
    I === "%" ? k += (g - P) * R : k += R;
    var O = u - p / 2, _ = c(t, "background-position-y", "units", a), U = c(t, "background-position-y", "pfValue", a);
    _ === "%" ? O += (p - A) * U : O += U;
    var z = c(t, "background-offset-y", "units", a), H = c(t, "background-offset-y", "pfValue", a);
    z === "%" ? O += (p - A) * H : O += H, m.pathCache && (k -= o, O -= u, o = 0, u = 0);
    var G = r.globalAlpha;
    r.globalAlpha = C;
    var Q = i.getImgSmoothing(r), W = !1;
    if (E === "no" && Q ? (i.setImgSmoothing(r, !1), W = !0) : E === "yes" && !Q && (i.setImgSmoothing(r, !0), W = !0), v === "no-repeat")
      w && (r.save(), m.pathCache ? r.clip(m.pathCache) : (i.nodeShapes[i.getNodeShape(t)].draw(r, o, u, g, p, x, m), r.clip())), i.safeDrawImage(r, e, 0, 0, T, D, k, O, P, A), w && r.restore();
    else {
      var X = r.createPattern(e, v);
      r.fillStyle = X, i.nodeShapes[i.getNodeShape(t)].draw(r, o, u, g, p, x, m), r.translate(k, O), r.fill(), r.translate(-k, -O);
    }
    r.globalAlpha = G, W && i.setImgSmoothing(r, Q);
  }
};
var Mr = {};
Mr.eleTextBiggerThanMin = function(r, e) {
  if (!e) {
    var t = r.cy().zoom(), a = this.getPixelRatio(), n = Math.ceil(xo(t * a));
    e = Math.pow(2, n);
  }
  var i = r.pstyle("font-size").pfValue * e, s = r.pstyle("min-zoomed-font-size").pfValue;
  return !(i < s);
};
Mr.drawElementText = function(r, e, t, a, n) {
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
    var l = e.element()._private.rscratch.badLine, c = e.pstyle("label"), f = e.pstyle("source-label"), v = e.pstyle("target-label");
    if (l || (!c || !c.value) && (!f || !f.value) && (!v || !v.value))
      return;
    r.textAlign = "center", r.textBaseline = "bottom";
  }
  var h = !t, d;
  t && (d = t, r.translate(-d.x1, -d.y1)), n == null ? (s.drawText(r, e, null, h, i), e.isEdge() && (s.drawText(r, e, "source", h, i), s.drawText(r, e, "target", h, i))) : s.drawText(r, e, n, h, i), t && r.translate(d.x1, d.y1);
};
Mr.getFontCache = function(r) {
  var e;
  this.fontCaches = this.fontCaches || [];
  for (var t = 0; t < this.fontCaches.length; t++)
    if (e = this.fontCaches[t], e.context === r)
      return e;
  return e = {
    context: r
  }, this.fontCaches.push(e), e;
};
Mr.setupTextStyle = function(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = e.pstyle("font-style").strValue, n = e.pstyle("font-size").pfValue + "px", i = e.pstyle("font-family").strValue, s = e.pstyle("font-weight").strValue, o = t ? e.effectiveOpacity() * e.pstyle("text-opacity").value : 1, u = e.pstyle("text-outline-opacity").value * o, l = e.pstyle("color").value, c = e.pstyle("text-outline-color").value;
  r.font = a + " " + s + " " + n + " " + i, r.lineJoin = "round", this.colorFillStyle(r, l[0], l[1], l[2], o), this.colorStrokeStyle(r, c[0], c[1], c[2], u);
};
function qs(r, e, t, a, n) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 5, s = arguments.length > 6 ? arguments[6] : void 0;
  r.beginPath(), r.moveTo(e + i, t), r.lineTo(e + a - i, t), r.quadraticCurveTo(e + a, t, e + a, t + i), r.lineTo(e + a, t + n - i), r.quadraticCurveTo(e + a, t + n, e + a - i, t + n), r.lineTo(e + i, t + n), r.quadraticCurveTo(e, t + n, e, t + n - i), r.lineTo(e, t + i), r.quadraticCurveTo(e, t, e + i, t), r.closePath(), s ? r.stroke() : r.fill();
}
Mr.getTextAngle = function(r, e) {
  var t, a = r._private, n = a.rscratch, i = e ? e + "-" : "", s = r.pstyle(i + "text-rotation");
  if (s.strValue === "autorotate") {
    var o = Bt(n, "labelAngle", e);
    t = r.isEdge() ? o : 0;
  } else
    s.strValue === "none" ? t = 0 : t = s.pfValue;
  return t;
};
Mr.drawText = function(r, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = e._private, s = i.rscratch, o = n ? e.effectiveOpacity() : 1;
  if (!(n && (o === 0 || e.pstyle("text-opacity").value === 0))) {
    t === "main" && (t = null);
    var u = Bt(s, "labelX", t), l = Bt(s, "labelY", t), c, f, v = this.getLabelText(e, t);
    if (v != null && v !== "" && !isNaN(u) && !isNaN(l)) {
      this.setupTextStyle(r, e, n);
      var h = t ? t + "-" : "", d = Bt(s, "labelWidth", t), y = Bt(s, "labelHeight", t), g = e.pstyle(h + "text-margin-x").pfValue, p = e.pstyle(h + "text-margin-y").pfValue, m = e.isEdge(), b = e.pstyle("text-halign").value, w = e.pstyle("text-valign").value;
      m && (b = "center", w = "center"), u += g, l += p;
      var C;
      switch (a ? C = this.getTextAngle(e, t) : C = 0, C !== 0 && (c = u, f = l, r.translate(c, f), r.rotate(C), u = 0, l = 0), w) {
        case "top":
          break;
        case "center":
          l += y / 2;
          break;
        case "bottom":
          l += y;
          break;
      }
      var E = e.pstyle("text-background-opacity").value, x = e.pstyle("text-border-opacity").value, T = e.pstyle("text-border-width").pfValue, D = e.pstyle("text-background-padding").pfValue, P = e.pstyle("text-background-shape").strValue, A = P.indexOf("round") === 0, B = 2;
      if (E > 0 || T > 0 && x > 0) {
        var k = u - D;
        switch (b) {
          case "left":
            k -= d;
            break;
          case "center":
            k -= d / 2;
            break;
        }
        var L = l - y - D, M = d + 2 * D, I = y + 2 * D;
        if (E > 0) {
          var R = r.fillStyle, O = e.pstyle("text-background-color").value;
          r.fillStyle = "rgba(" + O[0] + "," + O[1] + "," + O[2] + "," + E * o + ")", A ? qs(r, k, L, M, I, B) : r.fillRect(k, L, M, I), r.fillStyle = R;
        }
        if (T > 0 && x > 0) {
          var _ = r.strokeStyle, U = r.lineWidth, z = e.pstyle("text-border-color").value, H = e.pstyle("text-border-style").value;
          if (r.strokeStyle = "rgba(" + z[0] + "," + z[1] + "," + z[2] + "," + x * o + ")", r.lineWidth = T, r.setLineDash)
            switch (H) {
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
                r.setLineDash([]);
                break;
            }
          if (A ? qs(r, k, L, M, I, B, "stroke") : r.strokeRect(k, L, M, I), H === "double") {
            var G = T / 2;
            A ? qs(r, k + G, L + G, M - G * 2, I - G * 2, B, "stroke") : r.strokeRect(k + G, L + G, M - G * 2, I - G * 2);
          }
          r.setLineDash && r.setLineDash([]), r.lineWidth = U, r.strokeStyle = _;
        }
      }
      var Q = 2 * e.pstyle("text-outline-width").pfValue;
      if (Q > 0 && (r.lineWidth = Q), e.pstyle("text-wrap").value === "wrap") {
        var W = Bt(s, "labelWrapCachedLines", t), X = Bt(s, "labelLineHeight", t), Y = d / 2, ee = this.getLabelJustification(e);
        switch (ee === "auto" || (b === "left" ? ee === "left" ? u += -d : ee === "center" && (u += -Y) : b === "center" ? ee === "left" ? u += -Y : ee === "right" && (u += Y) : b === "right" && (ee === "center" ? u += Y : ee === "right" && (u += d))), w) {
          case "top":
            l -= (W.length - 1) * X;
            break;
          case "center":
          case "bottom":
            l -= (W.length - 1) * X;
            break;
        }
        for (var V = 0; V < W.length; V++)
          Q > 0 && r.strokeText(W[V], u, l), r.fillText(W[V], u, l), l += X;
      } else
        Q > 0 && r.strokeText(v, u, l), r.fillText(v, u, l);
      C !== 0 && (r.rotate(-C), r.translate(-c, -f));
    }
  }
};
var ua = {};
ua.drawNode = function(r, e, t) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0, s = this, o, u, l = e._private, c = l.rscratch, f = e.position();
  if (!(!ae(f.x) || !ae(f.y)) && !(i && !e.visible())) {
    var v = i ? e.effectiveOpacity() : 1, h = s.usePaths(), d, y = !1, g = e.padding();
    o = e.width() + 2 * g, u = e.height() + 2 * g;
    var p;
    t && (p = t, r.translate(-p.x1, -p.y1));
    for (var m = e.pstyle("background-image"), b = m.value, w = new Array(b.length), C = new Array(b.length), E = 0, x = 0; x < b.length; x++) {
      var T = b[x], D = w[x] = T != null && T !== "none";
      if (D) {
        var P = e.cy().style().getIndexedStyle(e, "background-image-crossorigin", "value", x);
        E++, C[x] = s.getCachedImage(T, P, function() {
          l.backgroundTimestamp = Date.now(), e.emitAndNotify("background");
        });
      }
    }
    var A = e.pstyle("background-blacken").value, B = e.pstyle("border-width").pfValue, k = e.pstyle("background-opacity").value * v, L = e.pstyle("border-color").value, M = e.pstyle("border-style").value, I = e.pstyle("border-join").value, R = e.pstyle("border-cap").value, O = e.pstyle("border-position").value, _ = e.pstyle("border-dash-pattern").pfValue, U = e.pstyle("border-dash-offset").pfValue, z = e.pstyle("border-opacity").value * v, H = e.pstyle("outline-width").pfValue, G = e.pstyle("outline-color").value, Q = e.pstyle("outline-style").value, W = e.pstyle("outline-opacity").value * v, X = e.pstyle("outline-offset").value, Y = e.pstyle("corner-radius").value;
    Y !== "auto" && (Y = e.pstyle("corner-radius").pfValue);
    var ee = function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : k;
      s.eleFillStyle(r, e, F);
    }, V = function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : z;
      s.colorStrokeStyle(r, L[0], L[1], L[2], F);
    }, N = function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : W;
      s.colorStrokeStyle(r, G[0], G[1], G[2], F);
    }, K = function(F, q, ne, J) {
      var ie = s.nodePathCache = s.nodePathCache || [], ve = Wc(ne === "polygon" ? ne + "," + J.join(",") : ne, "" + q, "" + F, "" + Y), Ee = ie[ve], ce, we = !1;
      return Ee != null ? (ce = Ee, we = !0, c.pathCache = ce) : (ce = new Path2D(), ie[ve] = c.pathCache = ce), {
        path: ce,
        cacheHit: we
      };
    }, j = e.pstyle("shape").strValue, te = e.pstyle("shape-polygon-points").pfValue;
    if (h) {
      r.translate(f.x, f.y);
      var se = K(o, u, j, te);
      d = se.path, y = se.cacheHit;
    }
    var de = function() {
      if (!y) {
        var F = f;
        h && (F = {
          x: 0,
          y: 0
        }), s.nodeShapes[s.getNodeShape(e)].draw(d || r, F.x, F.y, o, u, Y, c);
      }
      h ? r.fill(d) : r.fill();
    }, De = function() {
      for (var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : v, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ne = l.backgrounding, J = 0, ie = 0; ie < C.length; ie++) {
        var ve = e.cy().style().getIndexedStyle(e, "background-image-containment", "value", ie);
        if (q && ve === "over" || !q && ve === "inside") {
          J++;
          continue;
        }
        w[ie] && C[ie].complete && !C[ie].error && (J++, s.drawInscribedImage(r, C[ie], e, ie, F));
      }
      l.backgrounding = J !== E, ne !== l.backgrounding && e.updateStyle(!1);
    }, Be = function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : v;
      s.hasPie(e) && (s.drawPie(r, e, q), F && (h || s.nodeShapes[s.getNodeShape(e)].draw(r, f.x, f.y, o, u, Y, c)));
    }, oe = function() {
      var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : v, q = (A > 0 ? A : -A) * F, ne = A > 0 ? 0 : 255;
      A !== 0 && (s.colorFillStyle(r, ne, ne, ne, q), h ? r.fill(d) : r.fill());
    }, le = function() {
      if (B > 0) {
        if (r.lineWidth = B, r.lineCap = R, r.lineJoin = I, r.setLineDash)
          switch (M) {
            case "dotted":
              r.setLineDash([1, 1]);
              break;
            case "dashed":
              r.setLineDash(_), r.lineDashOffset = U;
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
            var F = new Path2D();
            F.rect(-o / 2 - B, -u / 2 - B, o + 2 * B, u + 2 * B), F.addPath(d), r.clip(F, "evenodd");
          }
          h ? r.stroke(d) : r.stroke(), r.restore();
        } else
          h ? r.stroke(d) : r.stroke();
        if (M === "double") {
          r.lineWidth = B / 3;
          var q = r.globalCompositeOperation;
          r.globalCompositeOperation = "destination-out", h ? r.stroke(d) : r.stroke(), r.globalCompositeOperation = q;
        }
        r.setLineDash && r.setLineDash([]);
      }
    }, he = function() {
      if (H > 0) {
        if (r.lineWidth = H, r.lineCap = "butt", r.setLineDash)
          switch (Q) {
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
        var F = f;
        h && (F = {
          x: 0,
          y: 0
        });
        var q = s.getNodeShape(e), ne = B;
        O === "inside" && (ne = 0), O === "outside" && (ne *= 2);
        var J = (o + ne + (H + X)) / o, ie = (u + ne + (H + X)) / u, ve = o * J, Ee = u * ie, ce = s.nodeShapes[q].points, we;
        if (h) {
          var xe = K(ve, Ee, q, ce);
          we = xe.path;
        }
        if (q === "ellipse")
          s.drawEllipsePath(we || r, F.x, F.y, ve, Ee);
        else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(q)) {
          var ye = 0, Oe = 0, Ve = 0;
          q === "round-diamond" ? ye = (ne + X + H) * 1.4 : q === "round-heptagon" ? (ye = (ne + X + H) * 1.075, Ve = -(ne / 2 + X + H) / 35) : q === "round-hexagon" ? ye = (ne + X + H) * 1.12 : q === "round-pentagon" ? (ye = (ne + X + H) * 1.13, Ve = -(ne / 2 + X + H) / 15) : q === "round-tag" ? (ye = (ne + X + H) * 1.12, Oe = (ne / 2 + H + X) * 0.07) : q === "round-triangle" && (ye = (ne + X + H) * (Math.PI / 2), Ve = -(ne + X / 2 + H) / Math.PI), ye !== 0 && (J = (o + ye) / o, ve = o * J, ["round-hexagon", "round-tag"].includes(q) || (ie = (u + ye) / u, Ee = u * ie)), Y = Y === "auto" ? nf(ve, Ee) : Y;
          for (var wt = ve / 2, xt = Ee / 2, Ue = Y + (ne + H + X) / 2, Xe = new Array(ce.length / 2), Qe = new Array(ce.length / 2), dt = 0; dt < ce.length / 2; dt++)
            Xe[dt] = {
              x: F.x + Oe + wt * ce[dt * 2],
              y: F.y + Ve + xt * ce[dt * 2 + 1]
            };
          var ht, It, Ct, Ot, Ut = Xe.length;
          for (It = Xe[Ut - 1], ht = 0; ht < Ut; ht++)
            Ct = Xe[ht % Ut], Ot = Xe[(ht + 1) % Ut], Qe[ht] = Io(It, Ct, Ot, Ue), It = Ct, Ct = Ot;
          s.drawRoundPolygonPath(we || r, F.x + Oe, F.y + Ve, o * J, u * ie, ce, Qe);
        } else if (["roundrectangle", "round-rectangle"].includes(q))
          Y = Y === "auto" ? kr(ve, Ee) : Y, s.drawRoundRectanglePath(we || r, F.x, F.y, ve, Ee, Y + (ne + H + X) / 2);
        else if (["cutrectangle", "cut-rectangle"].includes(q))
          Y = Y === "auto" ? Co() : Y, s.drawCutRectanglePath(we || r, F.x, F.y, ve, Ee, null, Y + (ne + H + X) / 4);
        else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(q))
          Y = Y === "auto" ? kr(ve, Ee) : Y, s.drawBottomRoundRectanglePath(we || r, F.x, F.y, ve, Ee, Y + (ne + H + X) / 2);
        else if (q === "barrel")
          s.drawBarrelPath(we || r, F.x, F.y, ve, Ee);
        else if (q.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(q)) {
          var Gt = (ne + H + X) / o;
          ce = Nn(zn(ce, Gt)), s.drawPolygonPath(we || r, F.x, F.y, o, u, ce);
        } else {
          var lt = (ne + H + X) / o;
          ce = Nn(zn(ce, -lt)), s.drawPolygonPath(we || r, F.x, F.y, o, u, ce);
        }
        if (h ? r.stroke(we) : r.stroke(), Q === "double") {
          r.lineWidth = ne / 3;
          var Je = r.globalCompositeOperation;
          r.globalCompositeOperation = "destination-out", h ? r.stroke(we) : r.stroke(), r.globalCompositeOperation = Je;
        }
        r.setLineDash && r.setLineDash([]);
      }
    }, me = function() {
      n && s.drawNodeOverlay(r, e, f, o, u);
    }, ge = function() {
      n && s.drawNodeUnderlay(r, e, f, o, u);
    }, be = function() {
      s.drawElementText(r, e, null, a);
    }, Ce = e.pstyle("ghost").value === "yes";
    if (Ce) {
      var Se = e.pstyle("ghost-offset-x").pfValue, re = e.pstyle("ghost-offset-y").pfValue, S = e.pstyle("ghost-opacity").value, $ = S * v;
      r.translate(Se, re), N(), he(), ee(S * k), de(), De($, !0), V(S * z), le(), Be(A !== 0 || B !== 0), De($, !1), oe($), r.translate(-Se, -re);
    }
    h && r.translate(-f.x, -f.y), ge(), h && r.translate(f.x, f.y), N(), he(), ee(), de(), De(v, !0), V(), le(), Be(A !== 0 || B !== 0), De(v, !1), oe(), h && r.translate(-f.x, -f.y), be(), me(), t && r.translate(p.x1, p.y1);
  }
};
var cv = function(e) {
  if (!["overlay", "underlay"].includes(e))
    throw new Error("Invalid state");
  return function(t, a, n, i, s) {
    var o = this;
    if (a.visible()) {
      var u = a.pstyle("".concat(e, "-padding")).pfValue, l = a.pstyle("".concat(e, "-opacity")).value, c = a.pstyle("".concat(e, "-color")).value, f = a.pstyle("".concat(e, "-shape")).value, v = a.pstyle("".concat(e, "-corner-radius")).value;
      if (l > 0) {
        if (n = n || a.position(), i == null || s == null) {
          var h = a.padding();
          i = a.width() + 2 * h, s = a.height() + 2 * h;
        }
        o.colorFillStyle(t, c[0], c[1], c[2], l), o.nodeShapes[f].draw(t, n.x, n.y, i + u * 2, s + u * 2, v), t.fill();
      }
    }
  };
};
ua.drawNodeOverlay = cv("overlay");
ua.drawNodeUnderlay = cv("underlay");
ua.hasPie = function(r) {
  return r = r[0], r._private.hasPie;
};
ua.drawPie = function(r, e, t, a) {
  e = e[0], a = a || e.position();
  var n = e.cy().style(), i = e.pstyle("pie-size"), s = a.x, o = a.y, u = e.width(), l = e.height(), c = Math.min(u, l) / 2, f = 0, v = this.usePaths();
  v && (s = 0, o = 0), i.units === "%" ? c = c * i.pfValue : i.pfValue !== void 0 && (c = i.pfValue / 2);
  for (var h = 1; h <= n.pieBackgroundN; h++) {
    var d = e.pstyle("pie-" + h + "-background-size").value, y = e.pstyle("pie-" + h + "-background-color").value, g = e.pstyle("pie-" + h + "-background-opacity").value * t, p = d / 100;
    p + f > 1 && (p = 1 - f);
    var m = 1.5 * Math.PI + 2 * Math.PI * f, b = 2 * Math.PI * p, w = m + b;
    d === 0 || f >= 1 || f + p > 1 || (r.beginPath(), r.moveTo(s, o), r.arc(s, o, c, m, w), r.closePath(), this.colorFillStyle(r, y[0], y[1], y[2], g), r.fill(), f += p);
  }
};
var pt = {}, z0 = 100;
pt.getPixelRatio = function() {
  var r = this.data.contexts[0];
  if (this.forcedPixelRatio != null)
    return this.forcedPixelRatio;
  var e = this.cy.window(), t = r.backingStorePixelRatio || r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
  return (e.devicePixelRatio || 1) / t;
};
pt.paintCache = function(r) {
  for (var e = this.paintCaches = this.paintCaches || [], t = !0, a, n = 0; n < e.length; n++)
    if (a = e[n], a.context === r) {
      t = !1;
      break;
    }
  return t && (a = {
    context: r
  }, e.push(a)), a;
};
pt.createGradientStyleFor = function(r, e, t, a, n) {
  var i, s = this.usePaths(), o = t.pstyle(e + "-gradient-stop-colors").value, u = t.pstyle(e + "-gradient-stop-positions").pfValue;
  if (a === "radial-gradient")
    if (t.isEdge()) {
      var l = t.sourceEndpoint(), c = t.targetEndpoint(), f = t.midpoint(), v = Ar(l, f), h = Ar(c, f);
      i = r.createRadialGradient(f.x, f.y, 0, f.x, f.y, Math.max(v, h));
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
    } : t.position(), w = t.paddedWidth(), C = t.paddedHeight(), E = w / 2, x = C / 2, T = t.pstyle("background-gradient-direction").value;
    switch (T) {
      case "to-bottom":
        i = r.createLinearGradient(b.x, b.y - x, b.x, b.y + x);
        break;
      case "to-top":
        i = r.createLinearGradient(b.x, b.y + x, b.x, b.y - x);
        break;
      case "to-left":
        i = r.createLinearGradient(b.x + E, b.y, b.x - E, b.y);
        break;
      case "to-right":
        i = r.createLinearGradient(b.x - E, b.y, b.x + E, b.y);
        break;
      case "to-bottom-right":
      case "to-right-bottom":
        i = r.createLinearGradient(b.x - E, b.y - x, b.x + E, b.y + x);
        break;
      case "to-top-right":
      case "to-right-top":
        i = r.createLinearGradient(b.x - E, b.y + x, b.x + E, b.y - x);
        break;
      case "to-bottom-left":
      case "to-left-bottom":
        i = r.createLinearGradient(b.x + E, b.y - x, b.x - E, b.y + x);
        break;
      case "to-top-left":
      case "to-left-top":
        i = r.createLinearGradient(b.x + E, b.y + x, b.x - E, b.y - x);
        break;
    }
  }
  if (!i)
    return null;
  for (var D = u.length === o.length, P = o.length, A = 0; A < P; A++)
    i.addColorStop(D ? u[A] : A / (P - 1), "rgba(" + o[A][0] + "," + o[A][1] + "," + o[A][2] + "," + n + ")");
  return i;
};
pt.gradientFillStyle = function(r, e, t, a) {
  var n = this.createGradientStyleFor(r, "background", e, t, a);
  if (!n)
    return null;
  r.fillStyle = n;
};
pt.colorFillStyle = function(r, e, t, a, n) {
  r.fillStyle = "rgba(" + e + "," + t + "," + a + "," + n + ")";
};
pt.eleFillStyle = function(r, e, t) {
  var a = e.pstyle("background-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientFillStyle(r, e, a, t);
  else {
    var n = e.pstyle("background-color").value;
    this.colorFillStyle(r, n[0], n[1], n[2], t);
  }
};
pt.gradientStrokeStyle = function(r, e, t, a) {
  var n = this.createGradientStyleFor(r, "line", e, t, a);
  if (!n)
    return null;
  r.strokeStyle = n;
};
pt.colorStrokeStyle = function(r, e, t, a, n) {
  r.strokeStyle = "rgba(" + e + "," + t + "," + a + "," + n + ")";
};
pt.eleStrokeStyle = function(r, e, t) {
  var a = e.pstyle("line-fill").value;
  if (a === "linear-gradient" || a === "radial-gradient")
    this.gradientStrokeStyle(r, e, a, t);
  else {
    var n = e.pstyle("line-color").value;
    this.colorStrokeStyle(r, n[0], n[1], n[2], t);
  }
};
pt.matchCanvasSize = function(r) {
  var e = this, t = e.data, a = e.findContainerClientCoords(), n = a[2], i = a[3], s = e.getPixelRatio(), o = e.motionBlurPxRatio;
  (r === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE] || r === e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG]) && (s = o);
  var u = n * s, l = i * s, c;
  if (!(u === e.canvasWidth && l === e.canvasHeight)) {
    e.fontCaches = null;
    var f = t.canvasContainer;
    f.style.width = n + "px", f.style.height = i + "px";
    for (var v = 0; v < e.CANVAS_LAYERS; v++)
      c = t.canvases[v], c.width = u, c.height = l, c.style.width = n + "px", c.style.height = i + "px";
    for (var v = 0; v < e.BUFFER_COUNT; v++)
      c = t.bufferCanvases[v], c.width = u, c.height = l, c.style.width = n + "px", c.style.height = i + "px";
    e.textureMult = 1, s <= 1 && (c = t.bufferCanvases[e.TEXTURE_BUFFER], e.textureMult = 2, c.width = u * e.textureMult, c.height = l * e.textureMult), e.canvasWidth = u, e.canvasHeight = l, e.pixelRatio = s;
  }
};
pt.renderTo = function(r, e, t, a) {
  this.render({
    forcedContext: r,
    forcedZoom: e,
    forcedPan: t,
    drawAllLayers: !0,
    forcedPxRatio: a
  });
};
pt.clearCanvas = function() {
  var r = this, e = r.data;
  function t(a) {
    a.clearRect(0, 0, r.canvasWidth, r.canvasHeight);
  }
  t(e.contexts[r.NODE]), t(e.contexts[r.DRAG]);
};
pt.render = function(r) {
  var e = this;
  r = r || Qc();
  var t = e.cy, a = r.forcedContext, n = r.drawAllLayers, i = r.drawOnlyNodeLayer, s = r.forcedZoom, o = r.forcedPan, u = r.forcedPxRatio === void 0 ? this.getPixelRatio() : r.forcedPxRatio, l = e.data, c = l.canvasNeedsRedraw, f = e.textureOnViewport && !a && (e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming), v = r.motionBlur !== void 0 ? r.motionBlur : e.motionBlur, h = e.motionBlurPxRatio, d = t.hasCompoundNodes(), y = e.hoverData.draggingEles, g = !!(e.hoverData.selecting || e.touchData.selecting);
  v = v && !a && e.motionBlurEnabled && !g;
  var p = v;
  a || (e.prevPxRatio !== u && (e.invalidateContainerClientCoordsCache(), e.matchCanvasSize(e.container), e.redrawHint("eles", !0), e.redrawHint("drag", !0)), e.prevPxRatio = u), !a && e.motionBlurTimeout && clearTimeout(e.motionBlurTimeout), v && (e.mbFrames == null && (e.mbFrames = 0), e.mbFrames++, e.mbFrames < 3 && (p = !1), e.mbFrames > e.minMbLowQualFrames && (e.motionBlurPxRatio = e.mbPxRBlurry)), e.clearingMotionBlur && (e.motionBlurPxRatio = 1), e.textureDrawLastFrame && !f && (c[e.NODE] = !0, c[e.SELECT_BOX] = !0);
  var m = t.style(), b = t.zoom(), w = s !== void 0 ? s : b, C = t.pan(), E = {
    x: C.x,
    y: C.y
  }, x = {
    zoom: b,
    pan: {
      x: C.x,
      y: C.y
    }
  }, T = e.prevViewport, D = T === void 0 || x.zoom !== T.zoom || x.pan.x !== T.pan.x || x.pan.y !== T.pan.y;
  !D && !(y && !d) && (e.motionBlurPxRatio = 1), o && (E = o), w *= u, E.x *= u, E.y *= u;
  var P = e.getCachedZSortedEles();
  function A(V, N, K, j, te) {
    var se = V.globalCompositeOperation;
    V.globalCompositeOperation = "destination-out", e.colorFillStyle(V, 255, 255, 255, e.motionBlurTransparency), V.fillRect(N, K, j, te), V.globalCompositeOperation = se;
  }
  function B(V, N) {
    var K, j, te, se;
    !e.clearingMotionBlur && (V === l.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] || V === l.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG]) ? (K = {
      x: C.x * h,
      y: C.y * h
    }, j = b * h, te = e.canvasWidth * h, se = e.canvasHeight * h) : (K = E, j = w, te = e.canvasWidth, se = e.canvasHeight), V.setTransform(1, 0, 0, 1, 0, 0), N === "motionBlur" ? A(V, 0, 0, te, se) : !a && (N === void 0 || N) && V.clearRect(0, 0, te, se), n || (V.translate(K.x, K.y), V.scale(j, j)), o && V.translate(o.x, o.y), s && V.scale(s, s);
  }
  if (f || (e.textureDrawLastFrame = !1), f) {
    if (e.textureDrawLastFrame = !0, !e.textureCache) {
      e.textureCache = {}, e.textureCache.bb = t.mutableElements().boundingBox(), e.textureCache.texture = e.data.bufferCanvases[e.TEXTURE_BUFFER];
      var k = e.data.bufferContexts[e.TEXTURE_BUFFER];
      k.setTransform(1, 0, 0, 1, 0, 0), k.clearRect(0, 0, e.canvasWidth * e.textureMult, e.canvasHeight * e.textureMult), e.render({
        forcedContext: k,
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
    L.setTransform(1, 0, 0, 1, 0, 0), v ? A(L, 0, 0, x.width, x.height) : L.clearRect(0, 0, x.width, x.height);
    var I = m.core("outside-texture-bg-color").value, R = m.core("outside-texture-bg-opacity").value;
    e.colorFillStyle(L, I[0], I[1], I[2], R), L.fillRect(0, 0, x.width, x.height);
    var b = t.zoom();
    B(L, !1), L.clearRect(x.mpan.x, x.mpan.y, x.width / x.zoom / u, x.height / x.zoom / u), L.drawImage(M, x.mpan.x, x.mpan.y, x.width / x.zoom / u, x.height / x.zoom / u);
  } else
    e.textureOnViewport && !a && (e.textureCache = null);
  var O = t.extent(), _ = e.pinching || e.hoverData.dragging || e.swipePanning || e.data.wheelZooming || e.hoverData.draggingEles || e.cy.animated(), U = e.hideEdgesOnViewport && _, z = [];
  if (z[e.NODE] = !c[e.NODE] && v && !e.clearedForMotionBlur[e.NODE] || e.clearingMotionBlur, z[e.NODE] && (e.clearedForMotionBlur[e.NODE] = !0), z[e.DRAG] = !c[e.DRAG] && v && !e.clearedForMotionBlur[e.DRAG] || e.clearingMotionBlur, z[e.DRAG] && (e.clearedForMotionBlur[e.DRAG] = !0), c[e.NODE] || n || i || z[e.NODE]) {
    var H = v && !z[e.NODE] && h !== 1, L = a || (H ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_NODE] : l.contexts[e.NODE]), G = v && !H ? "motionBlur" : void 0;
    B(L, G), U ? e.drawCachedNodes(L, P.nondrag, u, O) : e.drawLayeredElements(L, P.nondrag, u, O), e.debug && e.drawDebugPoints(L, P.nondrag), !n && !v && (c[e.NODE] = !1);
  }
  if (!i && (c[e.DRAG] || n || z[e.DRAG])) {
    var H = v && !z[e.DRAG] && h !== 1, L = a || (H ? e.data.bufferContexts[e.MOTIONBLUR_BUFFER_DRAG] : l.contexts[e.DRAG]);
    B(L, v && !H ? "motionBlur" : void 0), U ? e.drawCachedNodes(L, P.drag, u, O) : e.drawCachedElements(L, P.drag, u, O), e.debug && e.drawDebugPoints(L, P.drag), !n && !v && (c[e.DRAG] = !1);
  }
  if (this.drawSelectionRectangle(r, B), v && h !== 1) {
    var Q = l.contexts[e.NODE], W = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_NODE], X = l.contexts[e.DRAG], Y = e.data.bufferCanvases[e.MOTIONBLUR_BUFFER_DRAG], ee = function(N, K, j) {
      N.setTransform(1, 0, 0, 1, 0, 0), j || !p ? N.clearRect(0, 0, e.canvasWidth, e.canvasHeight) : A(N, 0, 0, e.canvasWidth, e.canvasHeight);
      var te = h;
      N.drawImage(
        K,
        // img
        0,
        0,
        // sx, sy
        e.canvasWidth * te,
        e.canvasHeight * te,
        // sw, sh
        0,
        0,
        // x, y
        e.canvasWidth,
        e.canvasHeight
        // w, h
      );
    };
    (c[e.NODE] || z[e.NODE]) && (ee(Q, W, z[e.NODE]), c[e.NODE] = !1), (c[e.DRAG] || z[e.DRAG]) && (ee(X, Y, z[e.DRAG]), c[e.DRAG] = !1);
  }
  e.prevViewport = x, e.clearingMotionBlur && (e.clearingMotionBlur = !1, e.motionBlurCleared = !0, e.motionBlur = !0), v && (e.motionBlurTimeout = setTimeout(function() {
    e.motionBlurTimeout = null, e.clearedForMotionBlur[e.NODE] = !1, e.clearedForMotionBlur[e.DRAG] = !1, e.motionBlur = !1, e.clearingMotionBlur = !f, e.mbFrames = 0, c[e.NODE] = !0, c[e.DRAG] = !0, e.redraw();
  }, z0)), a || t.emit("render");
};
var pa;
pt.drawSelectionRectangle = function(r, e) {
  var t = this, a = t.cy, n = t.data, i = a.style(), s = r.drawOnlyNodeLayer, o = r.drawAllLayers, u = n.canvasNeedsRedraw, l = r.forcedContext;
  if (t.showFps || !s && u[t.SELECT_BOX] && !o) {
    var c = l || n.contexts[t.SELECT_BOX];
    if (e(c), t.selection[4] == 1 && (t.hoverData.selecting || t.touchData.selecting)) {
      var f = t.cy.zoom(), v = i.core("selection-box-border-width").value / f;
      c.lineWidth = v, c.fillStyle = "rgba(" + i.core("selection-box-color").value[0] + "," + i.core("selection-box-color").value[1] + "," + i.core("selection-box-color").value[2] + "," + i.core("selection-box-opacity").value + ")", c.fillRect(t.selection[0], t.selection[1], t.selection[2] - t.selection[0], t.selection[3] - t.selection[1]), v > 0 && (c.strokeStyle = "rgba(" + i.core("selection-box-border-color").value[0] + "," + i.core("selection-box-border-color").value[1] + "," + i.core("selection-box-border-color").value[2] + "," + i.core("selection-box-opacity").value + ")", c.strokeRect(t.selection[0], t.selection[1], t.selection[2] - t.selection[0], t.selection[3] - t.selection[1]));
    }
    if (n.bgActivePosistion && !t.hoverData.selecting) {
      var f = t.cy.zoom(), h = n.bgActivePosistion;
      c.fillStyle = "rgba(" + i.core("active-bg-color").value[0] + "," + i.core("active-bg-color").value[1] + "," + i.core("active-bg-color").value[2] + "," + i.core("active-bg-opacity").value + ")", c.beginPath(), c.arc(h.x, h.y, i.core("active-bg-size").pfValue / f, 0, 2 * Math.PI), c.fill();
    }
    var d = t.lastRedrawTime;
    if (t.showFps && d) {
      d = Math.round(d);
      var y = Math.round(1e3 / d), g = "1 frame = " + d + " ms = " + y + " fps";
      if (c.setTransform(1, 0, 0, 1, 0, 0), c.fillStyle = "rgba(255, 0, 0, 0.75)", c.strokeStyle = "rgba(255, 0, 0, 0.75)", c.font = "30px Arial", !pa) {
        var p = c.measureText(g);
        pa = p.actualBoundingBoxAscent;
      }
      c.fillText(g, 0, pa);
      var m = 60;
      c.strokeRect(0, pa + 10, 250, 20), c.fillRect(0, pa + 10, 250 * Math.min(y / m, 1), 20);
    }
    o || (u[t.SELECT_BOX] = !1);
  }
};
function hc(r, e, t) {
  var a = r.createShader(e);
  if (r.shaderSource(a, t), r.compileShader(a), !r.getShaderParameter(a, r.COMPILE_STATUS))
    throw new Error(r.getShaderInfoLog(a));
  return a;
}
function F0(r, e, t) {
  var a = hc(r, r.VERTEX_SHADER, e), n = hc(r, r.FRAGMENT_SHADER, t), i = r.createProgram();
  if (r.attachShader(i, a), r.attachShader(i, n), r.linkProgram(i), !r.getProgramParameter(i, r.LINK_STATUS))
    throw new Error("Could not initialize shaders");
  return i;
}
function $0(r, e, t) {
  t === void 0 && (t = e);
  var a = r.makeOffscreenCanvas(e, t), n = a.context = a.getContext("2d");
  return a.clear = function() {
    return n.clearRect(0, 0, a.width, a.height);
  }, a.clear(), a;
}
function zo(r) {
  var e = r.pixelRatio, t = r.cy.zoom(), a = r.cy.pan();
  return {
    zoom: t * e,
    pan: {
      x: a.x * e,
      y: a.y * e
    }
  };
}
function V0(r, e, t, a, n) {
  var i = a * t + e.x, s = n * t + e.y;
  return s = Math.round(r.canvasHeight - s), [i, s];
}
function ya(r, e, t) {
  var a = r[0] / 255, n = r[1] / 255, i = r[2] / 255, s = e, o = t || new Array(4);
  return o[0] = a * s, o[1] = n * s, o[2] = i * s, o[3] = s, o;
}
function $r(r, e) {
  var t = e || new Array(4);
  return t[0] = (r >> 0 & 255) / 255, t[1] = (r >> 8 & 255) / 255, t[2] = (r >> 16 & 255) / 255, t[3] = (r >> 24 & 255) / 255, t;
}
function q0(r) {
  return r[0] + (r[1] << 8) + (r[2] << 16) + (r[3] << 24);
}
function _0(r, e) {
  var t = r.createTexture();
  return t.buffer = function(a) {
    r.bindTexture(r.TEXTURE_2D, t), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_NEAREST), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, a), r.generateMipmap(r.TEXTURE_2D), r.bindTexture(r.TEXTURE_2D, null);
  }, t.deleteTexture = function() {
    r.deleteTexture(t);
  }, t;
}
function fv(r, e) {
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
function vv(r, e, t) {
  switch (e) {
    case r.FLOAT:
      return new Float32Array(t);
    case r.INT:
      return new Int32Array(t);
  }
}
function H0(r, e, t, a, n, i) {
  switch (e) {
    case r.FLOAT:
      return new Float32Array(t.buffer, i * a, n);
    case r.INT:
      return new Int32Array(t.buffer, i * a, n);
  }
}
function U0(r, e, t, a) {
  var n = fv(r, e), i = et(n, 2), s = i[0], o = i[1], u = vv(r, o, a), l = r.createBuffer();
  return r.bindBuffer(r.ARRAY_BUFFER, l), r.bufferData(r.ARRAY_BUFFER, u, r.STATIC_DRAW), o === r.FLOAT ? r.vertexAttribPointer(t, s, o, !1, 0, 0) : o === r.INT && r.vertexAttribIPointer(t, s, o, 0, 0), r.enableVertexAttribArray(t), r.bindBuffer(r.ARRAY_BUFFER, null), l;
}
function er(r, e, t, a) {
  var n = fv(r, t), i = et(n, 3), s = i[0], o = i[1], u = i[2], l = vv(r, o, e * s), c = s * u, f = r.createBuffer();
  r.bindBuffer(r.ARRAY_BUFFER, f), r.bufferData(r.ARRAY_BUFFER, e * c, r.DYNAMIC_DRAW), r.enableVertexAttribArray(a), o === r.FLOAT ? r.vertexAttribPointer(a, s, o, !1, c, 0) : o === r.INT && r.vertexAttribIPointer(a, s, o, c, 0), r.vertexAttribDivisor(a, 1), r.bindBuffer(r.ARRAY_BUFFER, null);
  for (var v = new Array(e), h = 0; h < e; h++)
    v[h] = H0(r, o, l, c, s, h);
  return f.dataArray = l, f.stride = c, f.size = s, f.getView = function(d) {
    return v[d];
  }, f.setPoint = function(d, y, g) {
    var p = v[d];
    p[0] = y, p[1] = g;
  }, f.bufferSubData = function(d) {
    r.bindBuffer(r.ARRAY_BUFFER, f), d ? r.bufferSubData(r.ARRAY_BUFFER, 0, l, 0, d * s) : r.bufferSubData(r.ARRAY_BUFFER, 0, l);
  }, f;
}
function G0(r, e, t) {
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
  return r.bindBuffer(r.ARRAY_BUFFER, null), u.getMatrixView = function(f) {
    return i[f];
  }, u.setData = function(f, v) {
    i[v].set(f, 0);
  }, u.bufferSubData = function() {
    r.bindBuffer(r.ARRAY_BUFFER, u), r.bufferSubData(r.ARRAY_BUFFER, 0, n);
  }, u;
}
function K0(r) {
  var e = r.createFramebuffer();
  r.bindFramebuffer(r.FRAMEBUFFER, e);
  var t = r.createTexture();
  return r.bindTexture(r.TEXTURE_2D, t), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, t, 0), r.bindFramebuffer(r.FRAMEBUFFER, null), e.setFramebufferAttachmentSizes = function(a, n) {
    r.bindTexture(r.TEXTURE_2D, t), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, a, n, 0, r.RGBA, r.UNSIGNED_BYTE, null);
  }, e;
}
var gc = typeof Float32Array < "u" ? Float32Array : Array;
Math.hypot || (Math.hypot = function() {
  for (var r = 0, e = arguments.length; e--; )
    r += arguments[e] * arguments[e];
  return Math.sqrt(r);
});
function Bn() {
  var r = new gc(9);
  return gc != Float32Array && (r[1] = 0, r[2] = 0, r[3] = 0, r[5] = 0, r[6] = 0, r[7] = 0), r[0] = 1, r[4] = 1, r[8] = 1, r;
}
function dv(r) {
  return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = 1, r[5] = 0, r[6] = 0, r[7] = 0, r[8] = 1, r;
}
function W0(r, e, t) {
  var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], u = e[5], l = e[6], c = e[7], f = e[8], v = t[0], h = t[1], d = t[2], y = t[3], g = t[4], p = t[5], m = t[6], b = t[7], w = t[8];
  return r[0] = v * a + h * s + d * l, r[1] = v * n + h * o + d * c, r[2] = v * i + h * u + d * f, r[3] = y * a + g * s + p * l, r[4] = y * n + g * o + p * c, r[5] = y * i + g * u + p * f, r[6] = m * a + b * s + w * l, r[7] = m * n + b * o + w * c, r[8] = m * i + b * u + w * f, r;
}
function Un(r, e, t) {
  var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], u = e[5], l = e[6], c = e[7], f = e[8], v = t[0], h = t[1];
  return r[0] = a, r[1] = n, r[2] = i, r[3] = s, r[4] = o, r[5] = u, r[6] = v * a + h * s + l, r[7] = v * n + h * o + c, r[8] = v * i + h * u + f, r;
}
function hv(r, e, t) {
  var a = e[0], n = e[1], i = e[2], s = e[3], o = e[4], u = e[5], l = e[6], c = e[7], f = e[8], v = Math.sin(t), h = Math.cos(t);
  return r[0] = h * a + v * s, r[1] = h * n + v * o, r[2] = h * i + v * u, r[3] = h * s - v * a, r[4] = h * o - v * n, r[5] = h * u - v * i, r[6] = l, r[7] = c, r[8] = f, r;
}
function Fo(r, e, t) {
  var a = t[0], n = t[1];
  return r[0] = a * e[0], r[1] = a * e[1], r[2] = a * e[2], r[3] = n * e[3], r[4] = n * e[4], r[5] = n * e[5], r[6] = e[6], r[7] = e[7], r[8] = e[8], r;
}
function Z0(r, e, t) {
  return r[0] = 2 / e, r[1] = 0, r[2] = 0, r[3] = 0, r[4] = -2 / t, r[5] = 0, r[6] = -1, r[7] = 1, r[8] = 1, r;
}
var ka = {
  SCREEN: {
    name: "screen",
    screen: !0
  },
  PICKING: {
    name: "picking",
    picking: !0
  }
}, pc = Ze({
  texRows: 24
}), Vr = Ze({
  collection: "default",
  getKey: null,
  // since render types (eg node-body, node-overlay) can share an atlas collection, its importeant their style keys don't collide
  drawElement: null,
  getBoundingBox: null,
  getRotation: null,
  getRotationPoint: null,
  getRotationOffset: null,
  isVisible: function() {
    return !0;
  },
  // this is an extra check for visibility in addition to ele.visible()
  getPadding: 0
}), Y0 = /* @__PURE__ */ function() {
  function r(e, t, a, n) {
    dr(this, r), this.debugID = Math.floor(Math.random() * 1e4), this.r = e, this.texSize = t, this.texRows = a, this.texHeight = Math.floor(t / a), this.enableWrapping = !0, this.locked = !1, this.texture = null, this.needsBuffer = !0, this.freePointer = {
      x: 0,
      row: 0
    }, this.keyToLocation = /* @__PURE__ */ new Map(), this.canvas = n(e, t, t), this.scratch = n(e, t, this.texHeight, "scratch");
  }
  return hr(r, [{
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
      var s = this.texSize, o = this.texRows, u = this.texHeight, l = this.getScale(a), c = l.scale, f = l.texW, v = l.texH, h = [null, null], d = function(b, w) {
        if (n && w) {
          var C = w.context, E = b.x, x = b.row, T = E, D = u * x;
          C.save(), C.translate(T, D), C.scale(c, c), n(C, a), C.restore();
        }
      }, y = function() {
        d(i.freePointer, i.canvas), h[0] = {
          x: i.freePointer.x,
          y: i.freePointer.row * u,
          w: f,
          h: v
        }, h[1] = {
          // indlude a second location with a width of 0, for convenience
          x: i.freePointer.x + f,
          y: i.freePointer.row * u,
          w: 0,
          h: v
        }, i.freePointer.x += f, i.freePointer.x == s && (i.freePointer.x = 0, i.freePointer.row++);
      }, g = function() {
        var b = i.scratch, w = i.canvas;
        b.clear(), d({
          x: 0,
          row: 0
        }, b);
        var C = s - i.freePointer.x, E = f - C, x = u;
        {
          var T = i.freePointer.x, D = i.freePointer.row * u, P = C;
          w.context.drawImage(b, 0, 0, P, x, T, D, P, x), h[0] = {
            x: T,
            y: D,
            w: P,
            h: v
          };
        }
        {
          var A = C, B = (i.freePointer.row + 1) * u, k = E;
          w && w.context.drawImage(b, A, 0, k, x, 0, B, k, x), h[1] = {
            x: 0,
            y: B,
            w: k,
            h: v
          };
        }
        i.freePointer.x = E, i.freePointer.row++;
      }, p = function() {
        i.freePointer.x = 0, i.freePointer.row++;
      };
      if (this.freePointer.x + f <= s)
        y();
      else {
        if (this.freePointer.row >= o - 1)
          return !1;
        this.freePointer.x === s ? (p(), y()) : this.enableWrapping ? g() : (p(), y());
      }
      return this.keyToLocation.set(t, h), this.needsBuffer = !0, h;
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
      this.texture || (this.texture = _0(t, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = !1, this.locked && (this.canvas = null, this.scratch = null));
    }
  }, {
    key: "dispose",
    value: function() {
      this.texture && (this.texture.deleteTexture(), this.texture = null), this.canvas = null, this.scratch = null, this.locked = !0;
    }
  }]);
}(), X0 = /* @__PURE__ */ function() {
  function r(e, t, a, n) {
    dr(this, r), this.r = e, this.texSize = t, this.texRows = a, this.createTextureCanvas = n, this.atlases = [], this.styleKeyToAtlas = /* @__PURE__ */ new Map(), this.markedKeys = /* @__PURE__ */ new Set();
  }
  return hr(r, [{
    key: "getKeys",
    value: function() {
      return new Set(this.styleKeyToAtlas.keys());
    }
  }, {
    key: "_createAtlas",
    value: function() {
      var t = this.r, a = this.texSize, n = this.texRows, i = this.createTextureCanvas;
      return new Y0(t, a, n, i);
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
      var n = [], i = /* @__PURE__ */ new Map(), s = null, o = Lt(this.atlases), u;
      try {
        var l = function() {
          var f = u.value, v = f.getKeys(), h = Q0(a, v);
          if (h.size === 0)
            return n.push(f), v.forEach(function(C) {
              return i.set(C, f);
            }), 1;
          s || (s = t._createAtlas(), n.push(s));
          var d = Lt(v), y;
          try {
            for (d.s(); !(y = d.n()).done; ) {
              var g = y.value;
              if (!h.has(g)) {
                var p = f.getOffsets(g), m = et(p, 2), b = m[0], w = m[1];
                s.canFit({
                  w: b.w + w.w,
                  h: b.h
                }) || (s.lock(), s = t._createAtlas(), n.push(s)), t._copyTextureToNewAtlas(g, f, s), i.set(g, s);
              }
            }
          } catch (C) {
            d.e(C);
          } finally {
            d.f();
          }
          f.dispose();
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
      var i = a.getOffsets(t), s = et(i, 2), o = s[0], u = s[1];
      if (u.w === 0)
        n.draw(t, o, function(v) {
          v.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h);
        });
      else {
        var l = this._getScratchCanvas();
        l.clear(), l.context.drawImage(a.canvas, o.x, o.y, o.w, o.h, 0, 0, o.w, o.h), l.context.drawImage(a.canvas, u.x, u.y, u.w, u.h, o.w, 0, u.w, u.h);
        var c = o.w + u.w, f = o.h;
        n.draw(t, {
          w: c,
          h: f
        }, function(v) {
          v.drawImage(
            l,
            0,
            0,
            c,
            f,
            0,
            0,
            c,
            f
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
function Q0(r, e) {
  return r.intersection ? r.intersection(e) : new Set(Mc(r).filter(function(t) {
    return e.has(t);
  }));
}
var J0 = /* @__PURE__ */ function() {
  function r(e, t) {
    dr(this, r), this.r = e, this.globalOptions = t, this.atlasSize = t.webglTexSize, this.maxAtlasesPerBatch = t.webglTexPerBatch, this.renderTypes = /* @__PURE__ */ new Map(), this.collections = /* @__PURE__ */ new Map(), this.typeAndIdToKey = /* @__PURE__ */ new Map(), this.batchAtlases = [];
  }
  return hr(r, [{
    key: "getAtlasSize",
    value: function() {
      return this.atlasSize;
    }
  }, {
    key: "getMaxAtlasesPerBatch",
    value: function() {
      return this.maxAtlasesPerBatch;
    }
  }, {
    key: "addAtlasCollection",
    value: function(t, a) {
      var n = this.globalOptions, i = n.webglTexSize, s = n.createTextureCanvas, o = a.texRows, u = this._cacheScratchCanvas(s), l = new X0(this.r, i, o, u);
      this.collections.set(t, l);
    }
  }, {
    key: "addRenderType",
    value: function(t, a) {
      var n = a.collection;
      if (!this.collections.has(n))
        throw new Error("invalid atlas collection name '".concat(n, "'"));
      var i = this.collections.get(n), s = pe({
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
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.forceRedraw, i = n === void 0 ? !1 : n, s = a.filterEle, o = s === void 0 ? function() {
        return !0;
      } : s, u = a.filterType, l = u === void 0 ? function() {
        return !0;
      } : u, c = !1, f = !1, v = Lt(t), h;
      try {
        for (v.s(); !(h = v.n()).done; ) {
          var d = h.value;
          if (o(d)) {
            var y = Lt(this.renderTypes.values()), g;
            try {
              for (y.s(); !(g = y.n()).done; ) {
                var p = g.value, m = p.type;
                if (l(m)) {
                  var b = p.getKey(d), w = this.collections.get(p.collection);
                  if (i)
                    w.markKeyForGC(b), f = !0;
                  else {
                    var C = p.getID ? p.getID(d) : d.id(), E = this._key(m, C), x = this.typeAndIdToKey.get(E);
                    x !== void 0 && x !== b && (this.typeAndIdToKey.delete(E), w.markKeyForGC(x), c = !0);
                  }
                }
              }
            } catch (T) {
              y.e(T);
            } finally {
              y.f();
            }
          }
        }
      } catch (T) {
        v.e(T);
      } finally {
        v.f();
      }
      return f && (this.gc(), c = !1), c;
    }
    /** Garbage collect */
  }, {
    key: "gc",
    value: function() {
      var t = Lt(this.collections.values()), a;
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
    value: function(t, a, n) {
      var i = this.renderTypes.get(a), s = i.getKey(t);
      n || (n = i.getBoundingBox(t));
      var o = this.collections.get(i.collection), u = !1, l = o.draw(s, n, function(v) {
        i.drawElement(v, t, n, !0, !0), u = !0;
      });
      if (u) {
        var c = i.getID ? i.getID(t) : t.id(), f = this._key(a, c);
        this.typeAndIdToKey.set(f, s);
      }
      return l;
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
    value: function(t, a) {
      if (this.batchAtlases.length === this.maxAtlasesPerBatch) {
        var n = this.renderTypes.get(a), i = n.getKey(t), s = this.collections.get(n.collection), o = s.getAtlas(i);
        return !!o && this.batchAtlases.includes(o);
      }
      return !0;
    }
  }, {
    key: "getAtlasIndexForBatch",
    value: function(t) {
      var a = this.batchAtlases.indexOf(t);
      if (a < 0) {
        if (this.batchAtlases.length === this.maxAtlasesPerBatch)
          return;
        this.batchAtlases.push(t), a = this.batchAtlases.length - 1;
      }
      return a;
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
    key: "getAtlasInfo",
    value: function(t, a) {
      var n = this.renderTypes.get(a), i = n.getBoundingBox(t), s = this.getOrCreateAtlas(t, a, i), o = this.getAtlasIndexForBatch(s);
      if (o !== void 0) {
        var u = n.getKey(t), l = s.getOffsets(u), c = et(l, 2), f = c[0], v = c[1];
        return {
          index: o,
          tex1: f,
          tex2: v,
          bb: i
        };
      }
    }
    /**
     * matrix is expected to be a 9 element array
     * this function follows same pattern as CRp.drawCachedElementPortion(...)
     */
  }, {
    key: "setTransformMatrix",
    value: function(t, a, n, i) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = this.getRenderTypeOpts(n), u = o.getPadding ? o.getPadding(t) : 0;
      if (i) {
        var l = i.bb, c = i.tex1, f = i.tex2, v = c.w / (c.w + f.w);
        s || (v = 1 - v);
        var h = this.getAdjustedBB(l, u, s, v);
        this._applyTransformMatrix(a, h, o, t);
      } else {
        var d = o.getBoundingBox(t), y = this.getAdjustedBB(d, u, !0, 1);
        this._applyTransformMatrix(a, y, o, t);
      }
    }
  }, {
    key: "_applyTransformMatrix",
    value: function(t, a, n, i) {
      var s, o;
      dv(t);
      var u = n.getRotation ? n.getRotation(i) : 0;
      if (u !== 0) {
        var l = n.getRotationPoint(i), c = l.x, f = l.y;
        Un(t, t, [c, f]), hv(t, t, u);
        var v = n.getRotationOffset(i);
        s = v.x + a.xOffset, o = v.y;
      } else
        s = a.x1, o = a.y1;
      Un(t, t, [s, o]), Fo(t, t, [a.w, a.h]);
    }
    /**
     * Adjusts a node or label BB to accomodate padding and split for wrapped textures.
     * @param bb - the original bounding box
     * @param padding - the padding to add to the bounding box
     * @param first - whether this is the first part of a wrapped texture
     * @param ratio - the ratio of the texture width of part of the text to the entire texture
     */
  }, {
    key: "getAdjustedBB",
    value: function(t, a, n, i) {
      var s = t.x1, o = t.y1, u = t.w, l = t.h;
      a && (s -= a, o -= a, u += 2 * a, l += 2 * a);
      var c = 0, f = u * i;
      return n && i < 1 ? u = f : !n && i < 1 && (c = u - f, s += c, u = f), {
        x1: s,
        y1: o,
        w: u,
        h: l,
        xOffset: c
      };
    }
  }, {
    key: "getDebugInfo",
    value: function() {
      var t = [], a = Lt(this.collections), n;
      try {
        for (a.s(); !(n = a.n()).done; ) {
          var i = et(n.value, 2), s = i[0], o = i[1], u = o.getCounts(), l = u.keyCount, c = u.atlasCount;
          t.push({
            type: s,
            keyCount: l,
            atlasCount: c
          });
        }
      } catch (f) {
        a.e(f);
      } finally {
        a.f();
      }
      return t;
    }
  }]);
}(), yn = 0, yc = 1, mc = 2, _s = 3, bc = 4, j0 = /* @__PURE__ */ function() {
  function r(e, t, a) {
    dr(this, r), this.r = e, this.gl = t, this.maxInstances = a.webglBatchSize, this.atlasSize = a.webglTexSize, this.bgColor = a.bgColor, this.debug = a.webglDebug, this.batchDebugInfo = [], a.enableWrapping = !0, a.createTextureCanvas = $0, this.atlasManager = new J0(e, a), this.program = this.createShaderProgram(ka.SCREEN), this.pickingProgram = this.createShaderProgram(ka.PICKING), this.vao = this.createVAO();
  }
  return hr(r, [{
    key: "addAtlasCollection",
    value: function(t, a) {
      this.atlasManager.addAtlasCollection(t, a);
    }
  }, {
    key: "addAtlasRenderType",
    value: function(t, a) {
      this.atlasManager.addRenderType(t, a);
    }
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
  }, {
    key: "gc",
    value: function() {
      this.atlasManager.gc();
    }
  }, {
    key: "createShaderProgram",
    value: function(t) {
      var a = this.gl, n = `#version 300 es
      precision highp float;

      uniform mat3 uPanZoomMatrix;
      uniform int  uAtlasSize;
      
      // instanced
      in vec2 aPosition; 

      in mat3 aTransform;

      // what are we rendering?
      in int aVertType;

      // for picking
      in vec4 aIndex;
      
      // For textures
      in int aAtlasId; // which shader unit/atlas to use
      in vec4 aTex; // x/y/w/h of texture in atlas

      // for edges
      in vec4 aPointAPointB;
      in vec4 aPointCPointD;
      in float aLineWidth;
      in vec4 aColor;

      out vec2 vTexCoord;
      out vec4 vColor;
      flat out int vAtlasId;
      flat out vec4 vIndex;
      flat out int vVertType;

      void main(void) {
        int vid = gl_VertexID;
        vec2 position = aPosition;

        if(aVertType == `.concat(yn, `) {
          float texX = aTex.x;
          float texY = aTex.y;
          float texW = aTex.z;
          float texH = aTex.w;

          int vid = gl_VertexID;

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
        else if(aVertType == `).concat(bc, `) {
          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else if(aVertType == `).concat(yc, `) {
          vec2 source = aPointAPointB.xy;
          vec2 target = aPointAPointB.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 xBasis = target - source;
          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));
          vec2 point = source + xBasis * position.x + yBasis * aLineWidth * position.y;

          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);
          vColor = aColor;
        } 
        else if(aVertType == `).concat(mc, `) {
          vec2 pointA = aPointAPointB.xy;
          vec2 pointB = aPointAPointB.zw;
          vec2 pointC = aPointCPointD.xy;
          vec2 pointD = aPointCPointD.zw;

          // adjust the geometry so that the line is centered on the edge
          position.y = position.y - 0.5;

          vec2 p0 = pointA;
          vec2 p1 = pointB;
          vec2 p2 = pointC;
          vec2 pos = position;
          if(position.x == 1.0) {
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
          float width = aLineWidth;

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
        else if(aVertType == `).concat(_s, ` && vid < 3) {
          // massage the first triangle into an edge arrow
          if(vid == 0)
            position = vec2(-0.15, -0.3);
          if(vid == 1)
            position = vec2( 0.0,   0.0);
          if(vid == 2)
            position = vec2( 0.15, -0.3);

          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);
          vColor = aColor;
        }
        else {
          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space
        }

        vAtlasId = aAtlasId;
        vIndex = aIndex;
        vVertType = aVertType;
      }
    `), i = this.atlasManager.getIndexArray(), s = `#version 300 es
      precision highp float;

      // define texture unit for each node in the batch
      `.concat(i.map(function(l) {
        return "uniform sampler2D uTexture".concat(l, ";");
      }).join(`
	`), `

      uniform vec4 uBGColor;

      in vec2 vTexCoord;
      in vec4 vColor;
      flat in int vAtlasId;
      flat in vec4 vIndex;
      flat in int vVertType;

      out vec4 outColor;

      void main(void) {
        if(vVertType == `).concat(yn, `) {
          `).concat(i.map(function(l) {
        return "if(vAtlasId == ".concat(l, ") outColor = texture(uTexture").concat(l, ", vTexCoord);");
      }).join(`
	else `), `
        } else if(vVertType == `).concat(_s, `) {
          // blend arrow color with background (using premultiplied alpha)
          outColor.rgb = vColor.rgb + (uBGColor.rgb * (1.0 - vColor.a)); 
          outColor.a = 1.0; // make opaque, masks out line under arrow
        } else {
          outColor = vColor;
        }

        `).concat(t.picking ? `if(outColor.a == 0.0) discard;
             else outColor = vIndex;` : "", `
      }
    `), o = F0(a, n, s);
      o.aPosition = a.getAttribLocation(o, "aPosition"), o.aIndex = a.getAttribLocation(o, "aIndex"), o.aVertType = a.getAttribLocation(o, "aVertType"), o.aTransform = a.getAttribLocation(o, "aTransform"), o.aAtlasId = a.getAttribLocation(o, "aAtlasId"), o.aTex = a.getAttribLocation(o, "aTex"), o.aPointAPointB = a.getAttribLocation(o, "aPointAPointB"), o.aPointCPointD = a.getAttribLocation(o, "aPointCPointD"), o.aLineWidth = a.getAttribLocation(o, "aLineWidth"), o.aColor = a.getAttribLocation(o, "aColor"), o.uPanZoomMatrix = a.getUniformLocation(o, "uPanZoomMatrix"), o.uAtlasSize = a.getUniformLocation(o, "uAtlasSize"), o.uBGColor = a.getUniformLocation(o, "uBGColor"), o.uTextures = [];
      for (var u = 0; u < this.atlasManager.getMaxAtlasesPerBatch(); u++)
        o.uTextures.push(a.getUniformLocation(o, "uTexture".concat(u)));
      return o;
    }
  }, {
    key: "createVAO",
    value: function() {
      var t = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
      this.vertexCount = t.length / 2;
      var a = this.maxInstances, n = this.gl, i = this.program, s = n.createVertexArray();
      return n.bindVertexArray(s), U0(n, "vec2", i.aPosition, t), this.transformBuffer = G0(n, a, i.aTransform), this.indexBuffer = er(n, a, "vec4", i.aIndex), this.vertTypeBuffer = er(n, a, "int", i.aVertType), this.atlasIdBuffer = er(n, a, "int", i.aAtlasId), this.texBuffer = er(n, a, "vec4", i.aTex), this.pointAPointBBuffer = er(n, a, "vec4", i.aPointAPointB), this.pointCPointDBuffer = er(n, a, "vec4", i.aPointCPointD), this.lineWidthBuffer = er(n, a, "float", i.aLineWidth), this.colorBuffer = er(n, a, "vec4", i.aColor), n.bindVertexArray(null), s;
    }
  }, {
    key: "buffers",
    get: function() {
      var t = this;
      return this._buffers || (this._buffers = Object.keys(this).filter(function(a) {
        return a.endsWith("Buffer");
      }).map(function(a) {
        return t[a];
      })), this._buffers;
    }
  }, {
    key: "startFrame",
    value: function(t) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ka.SCREEN;
      this.panZoomMatrix = t, this.renderTarget = a, this.batchDebugInfo = [], this.wrappedCount = 0, this.rectangleCount = 0, this.startBatch();
    }
  }, {
    key: "startBatch",
    value: function() {
      this.instanceCount = 0, this.atlasManager.startBatch();
    }
  }, {
    key: "endFrame",
    value: function() {
      this.endBatch();
    }
  }, {
    key: "getTempMatrix",
    value: function() {
      return this.tempMatrix = this.tempMatrix || Bn();
    }
  }, {
    key: "drawTexture",
    value: function(t, a, n) {
      var i = this.atlasManager;
      if (t.visible() && i.getRenderTypeOpts(n).isVisible(t)) {
        i.canAddToCurrentBatch(t, n) || this.endBatch(), this.instanceCount + 1 >= this.maxInstances && this.endBatch();
        var s = this.instanceCount;
        this.vertTypeBuffer.getView(s)[0] = yn;
        var o = this.indexBuffer.getView(s);
        $r(a, o);
        var u = i.getAtlasInfo(t, n), l = u.index, c = u.tex1, f = u.tex2;
        f.w > 0 && this.wrappedCount++;
        for (var v = !0, h = 0, d = [c, f]; h < d.length; h++) {
          var y = d[h];
          if (y.w != 0) {
            var g = this.instanceCount;
            this.vertTypeBuffer.getView(g)[0] = yn;
            var p = this.indexBuffer.getView(g);
            $r(a, p);
            var m = this.atlasIdBuffer.getView(g);
            m[0] = l;
            var b = this.texBuffer.getView(g);
            b[0] = y.x, b[1] = y.y, b[2] = y.w, b[3] = y.h;
            var w = this.transformBuffer.getMatrixView(g);
            i.setTransformMatrix(t, w, n, u, v), this.instanceCount++;
          }
          v = !1;
        }
        this.instanceCount >= this.maxInstances && this.endBatch();
      }
    }
  }, {
    key: "drawSimpleRectangle",
    value: function(t, a, n) {
      if (t.visible()) {
        var i = this.atlasManager, s = this.instanceCount;
        this.vertTypeBuffer.getView(s)[0] = bc;
        var o = this.indexBuffer.getView(s);
        $r(a, o);
        var u = t.pstyle("background-color").value, l = t.pstyle("background-opacity").value, c = this.colorBuffer.getView(s);
        ya(u, l, c);
        var f = this.transformBuffer.getMatrixView(s);
        i.setTransformMatrix(t, f, n), this.rectangleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
      }
    }
  }, {
    key: "drawEdgeArrow",
    value: function(t, a, n) {
      if (t.visible()) {
        var i = t._private.rscratch, s, o, u;
        if (n === "source" ? (s = i.arrowStartX, o = i.arrowStartY, u = i.srcArrowAngle) : (s = i.arrowEndX, o = i.arrowEndY, u = i.tgtArrowAngle), !(isNaN(s) || s == null || isNaN(o) || o == null || isNaN(u) || u == null)) {
          var l = t.pstyle(n + "-arrow-shape").value;
          if (l !== "none") {
            var c = t.pstyle(n + "-arrow-color").value, f = t.pstyle("opacity").value, v = t.pstyle("line-opacity").value, h = f * v, d = t.pstyle("width").pfValue, y = t.pstyle("arrow-scale").value, g = this.r.getArrowWidth(d, y), p = this.instanceCount, m = this.transformBuffer.getMatrixView(p);
            dv(m), Un(m, m, [s, o]), Fo(m, m, [g, g]), hv(m, m, u), this.vertTypeBuffer.getView(p)[0] = _s;
            var b = this.indexBuffer.getView(p);
            $r(a, b);
            var w = this.colorBuffer.getView(p);
            ya(c, h, w), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
          }
        }
      }
    }
  }, {
    key: "drawEdgeLine",
    value: function(t, a) {
      if (t.visible()) {
        var n = this.getEdgePoints(t);
        if (n) {
          var i = t.pstyle("opacity").value, s = t.pstyle("line-opacity").value, o = t.pstyle("width").pfValue, u = t.pstyle("line-color").value, l = i * s;
          if (n.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), n.length == 4) {
            var c = this.instanceCount;
            this.vertTypeBuffer.getView(c)[0] = yc;
            var f = this.indexBuffer.getView(c);
            $r(a, f);
            var v = this.colorBuffer.getView(c);
            ya(u, l, v);
            var h = this.lineWidthBuffer.getView(c);
            h[0] = o;
            var d = this.pointAPointBBuffer.getView(c);
            d[0] = n[0], d[1] = n[1], d[2] = n[2], d[3] = n[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
          } else
            for (var y = 0; y < n.length - 2; y += 2) {
              var g = this.instanceCount;
              this.vertTypeBuffer.getView(g)[0] = mc;
              var p = this.indexBuffer.getView(g);
              $r(a, p);
              var m = this.colorBuffer.getView(g);
              ya(u, l, m);
              var b = this.lineWidthBuffer.getView(g);
              b[0] = o;
              var w = n[y - 2], C = n[y - 1], E = n[y], x = n[y + 1], T = n[y + 2], D = n[y + 3], P = n[y + 4], A = n[y + 5];
              y == 0 && (w = 2 * E - T + 1e-3, C = 2 * x - D + 1e-3), y == n.length - 4 && (P = 2 * T - E + 1e-3, A = 2 * D - x + 1e-3);
              var B = this.pointAPointBBuffer.getView(g);
              B[0] = w, B[1] = C, B[2] = E, B[3] = x;
              var k = this.pointCPointDBuffer.getView(g);
              k[0] = T, k[1] = D, k[2] = P, k[3] = A, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
            }
        }
      }
    }
  }, {
    key: "getEdgePoints",
    value: function(t) {
      var a = t._private.rscratch;
      if (!(a.badLine || a.allpts == null || isNaN(a.allpts[0]))) {
        var n = a.allpts;
        if (n.length == 4)
          return n;
        var i = this.getNumSegments(t);
        return this.getCurveSegmentPoints(n, i);
      }
    }
  }, {
    key: "getNumSegments",
    value: function(t) {
      var a = 15;
      return Math.min(Math.max(a, 5), this.maxInstances);
    }
  }, {
    key: "getCurveSegmentPoints",
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
          this.setCurvePoint(t, s, n, i * 2);
        }
      return n;
    }
  }, {
    key: "setCurvePoint",
    value: function(t, a, n, i) {
      if (t.length <= 2)
        n[i] = t[0], n[i + 1] = t[1];
      else {
        for (var s = Array(t.length - 2), o = 0; o < s.length; o += 2) {
          var u = (1 - a) * t[o] + a * t[o + 2], l = (1 - a) * t[o + 1] + a * t[o + 3];
          s[o] = u, s[o + 1] = l;
        }
        return this.setCurvePoint(s, a, n, i);
      }
    }
  }, {
    key: "endBatch",
    value: function() {
      var t = this.gl, a = this.vao, n = this.vertexCount, i = this.instanceCount;
      if (i !== 0) {
        var s = this.renderTarget.picking ? this.pickingProgram : this.program;
        t.useProgram(s), t.bindVertexArray(a);
        var o = Lt(this.buffers), u;
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
        for (var c = this.atlasManager.getAtlases(), f = 0; f < c.length; f++)
          c[f].bufferIfNeeded(t);
        for (var v = 0; v < c.length; v++)
          t.activeTexture(t.TEXTURE0 + v), t.bindTexture(t.TEXTURE_2D, c[v].texture), t.uniform1i(s.uTextures[v], v);
        t.uniformMatrix3fv(s.uPanZoomMatrix, !1, this.panZoomMatrix), t.uniform1i(s.uAtlasSize, this.atlasManager.getAtlasSize());
        var h = ya(this.bgColor, 1);
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
        rectangleCount: this.rectangleCount,
        batchCount: n.length,
        batchInfo: n,
        totalInstances: i
      };
    }
  }]);
}();
function wc(r, e) {
  return "rgba(".concat(r[0], ", ").concat(r[1], ", ").concat(r[2], ", ").concat(e, ")");
}
var em = /* @__PURE__ */ function() {
  function r(e) {
    dr(this, r), this.r = e;
  }
  return hr(r, [{
    key: "getStyleKey",
    value: function(t, a) {
      var n = this.getStyle(t, a), i = n.shape, s = n.opacity, o = n.color;
      if (!i)
        return null;
      var u = a.width(), l = a.height(), c = wc(o, s);
      return ur("".concat(i, "-").concat(u, "-").concat(l, "-").concat(c));
    }
  }, {
    key: "isVisible",
    value: function(t, a) {
      var n = a.pstyle("".concat(t, "-opacity")).value;
      return n > 0;
    }
  }, {
    key: "getStyle",
    value: function(t, a) {
      var n = a.pstyle("".concat(t, "-opacity")).value, i = a.pstyle("".concat(t, "-color")).value, s = a.pstyle("".concat(t, "-shape")).value;
      return {
        opacity: n,
        color: i,
        shape: s
      };
    }
  }, {
    key: "getPadding",
    value: function(t, a) {
      return a.pstyle("".concat(t, "-padding")).pfValue;
    }
  }, {
    key: "draw",
    value: function(t, a, n, i) {
      if (this.isVisible(t, n)) {
        var s = this.r, o = i.w, u = i.h, l = o / 2, c = u / 2, f = this.getStyle(t, n), v = f.shape, h = f.color, d = f.opacity;
        a.save(), a.fillStyle = wc(h, d), v === "round-rectangle" || v === "roundrectangle" ? s.drawRoundRectanglePath(a, l, c, o, u, "auto") : v === "ellipse" && s.drawEllipsePath(a, l, c, o, u), a.fill(), a.restore();
      }
    }
  }]);
}(), gv = {};
gv.initWebgl = function(r, e) {
  var t = this, a = t.data.contexts[t.WEBGL];
  r.bgColor = tm(t), r.webglTexSize = Math.min(r.webglTexSize, a.getParameter(a.MAX_TEXTURE_SIZE)), r.webglTexRows = Math.min(r.webglTexRows, 54), r.webglTexRowsNodes = Math.min(r.webglTexRowsNodes, 54), r.webglBatchSize = Math.min(r.webglBatchSize, 16384), r.webglTexPerBatch = Math.min(r.webglTexPerBatch, a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS)), t.webglDebug = r.webglDebug, t.webglDebugShowAtlases = r.webglDebugShowAtlases, t.pickingFrameBuffer = K0(a), t.pickingFrameBuffer.needsDraw = !0;
  var n = function(l) {
    return function(c) {
      return t.getTextAngle(c, l);
    };
  }, i = function(l) {
    return function(c) {
      var f = c.pstyle(l);
      return f && f.value;
    };
  };
  t.drawing = new j0(t, a, r);
  var s = new em(t);
  t.drawing.addAtlasCollection("node", pc({
    texRows: r.webglTexRowsNodes
  })), t.drawing.addAtlasCollection("label", pc({
    texRows: r.webglTexRows
  })), t.drawing.addAtlasRenderType("node-body", Vr({
    collection: "node",
    getKey: e.getStyleKey,
    getBoundingBox: e.getElementBox,
    drawElement: e.drawElement
  })), t.drawing.addAtlasRenderType("label", Vr({
    // node label or edge mid label
    collection: "label",
    getKey: e.getLabelKey,
    getBoundingBox: e.getLabelBox,
    drawElement: e.drawLabel,
    getRotation: n(null),
    getRotationPoint: e.getLabelRotationPoint,
    getRotationOffset: e.getLabelRotationOffset,
    isVisible: i("label")
  })), t.drawing.addAtlasRenderType("node-overlay", Vr({
    collection: "node",
    getBoundingBox: e.getElementBox,
    getKey: function(l) {
      return s.getStyleKey("overlay", l);
    },
    drawElement: function(l, c, f) {
      return s.draw("overlay", l, c, f);
    },
    isVisible: function(l) {
      return s.isVisible("overlay", l);
    },
    getPadding: function(l) {
      return s.getPadding("overlay", l);
    }
  })), t.drawing.addAtlasRenderType("node-underlay", Vr({
    collection: "node",
    getBoundingBox: e.getElementBox,
    getKey: function(l) {
      return s.getStyleKey("underlay", l);
    },
    drawElement: function(l, c, f) {
      return s.draw("underlay", l, c, f);
    },
    isVisible: function(l) {
      return s.isVisible("underlay", l);
    },
    getPadding: function(l) {
      return s.getPadding("underlay", l);
    }
  })), t.drawing.addAtlasRenderType("edge-source-label", Vr({
    collection: "label",
    getKey: e.getSourceLabelKey,
    getBoundingBox: e.getSourceLabelBox,
    drawElement: e.drawSourceLabel,
    getRotation: n("source"),
    getRotationPoint: e.getSourceLabelRotationPoint,
    getRotationOffset: e.getSourceLabelRotationOffset,
    isVisible: i("source-label")
  })), t.drawing.addAtlasRenderType("edge-target-label", Vr({
    collection: "label",
    getKey: e.getTargetLabelKey,
    getBoundingBox: e.getTargetLabelBox,
    drawElement: e.drawTargetLabel,
    getRotation: n("target"),
    getRotationPoint: e.getTargetLabelRotationPoint,
    getRotationOffset: e.getTargetLabelRotationOffset,
    isVisible: i("target-label")
  }));
  var o = Wa(function() {
    console.log("garbage collect flag set"), t.data.gc = !0;
  }, 1e4);
  t.onUpdateEleCalcs(function(u, l) {
    var c = !1;
    l && l.length > 0 && (c |= t.drawing.invalidate(l)), c && o();
  }), rm(t);
};
function tm(r) {
  var e = r.cy.container(), t = e && e.style && e.style.backgroundColor || "white";
  return Vc(t);
}
function rm(r) {
  {
    var e = r.render;
    r.render = function(i) {
      i = i || {};
      var s = r.cy;
      r.webgl && (s.zoom() > sv ? (am(r), e.call(r, i)) : (nm(r), yv(r, i, ka.SCREEN)));
    };
  }
  {
    var t = r.matchCanvasSize;
    r.matchCanvasSize = function(i) {
      t.call(r, i), r.pickingFrameBuffer.setFramebufferAttachmentSizes(r.canvasWidth, r.canvasHeight), r.pickingFrameBuffer.needsDraw = !0;
    };
  }
  r.findNearestElements = function(i, s, o, u) {
    return cm(r, i, s);
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
function am(r) {
  var e = r.data.contexts[r.WEBGL];
  e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
}
function nm(r) {
  var e = function(a) {
    a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, r.canvasWidth, r.canvasHeight), a.restore();
  };
  e(r.data.contexts[r.NODE]), e(r.data.contexts[r.DRAG]);
}
function im(r) {
  var e = r.canvasWidth, t = r.canvasHeight, a = zo(r), n = a.pan, i = a.zoom, s = Bn();
  Un(s, s, [n.x, n.y]), Fo(s, s, [i, i]);
  var o = Bn();
  Z0(o, e, t);
  var u = Bn();
  return W0(u, o, s), u;
}
function pv(r, e) {
  var t = r.canvasWidth, a = r.canvasHeight, n = zo(r), i = n.pan, s = n.zoom;
  e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, t, a), e.translate(i.x, i.y), e.scale(s, s);
}
function sm(r, e) {
  r.drawSelectionRectangle(e, function(t) {
    return pv(r, t);
  });
}
function om(r) {
  var e = r.data.contexts[r.NODE];
  e.save(), pv(r, e), e.strokeStyle = "rgba(0, 0, 0, 0.3)", e.beginPath(), e.moveTo(-1e3, 0), e.lineTo(1e3, 0), e.stroke(), e.beginPath(), e.moveTo(0, -1e3), e.lineTo(0, 1e3), e.stroke(), e.restore();
}
function um(r) {
  var e = function(n, i, s) {
    for (var o = n.atlasManager.getAtlasCollection(i), u = r.data.contexts[r.NODE], l = 0.125, c = o.atlases, f = 0; f < c.length; f++) {
      var v = c[f], h = v.canvas;
      if (h) {
        var d = h.width, y = h.height, g = d * f, p = h.height * s;
        u.save(), u.scale(l, l), u.drawImage(h, g, p), u.strokeStyle = "black", u.rect(g, p, d, y), u.stroke(), u.restore();
      }
    }
  }, t = 0;
  e(r.drawing, "node", t++), e(r.drawing, "label", t++);
}
function lm(r, e, t, a, n) {
  var i, s, o, u, l = zo(r), c = l.pan, f = l.zoom;
  {
    var v = V0(r, c, f, e, t), h = et(v, 2), d = h[0], y = h[1], g = 6;
    i = d - g / 2, s = y - g / 2, o = g, u = g;
  }
  if (o === 0 || u === 0)
    return [];
  var p = r.data.contexts[r.WEBGL];
  p.bindFramebuffer(p.FRAMEBUFFER, r.pickingFrameBuffer), r.pickingFrameBuffer.needsDraw && (p.viewport(0, 0, p.canvas.width, p.canvas.height), yv(r, null, ka.PICKING), r.pickingFrameBuffer.needsDraw = !1);
  var m = o * u, b = new Uint8Array(m * 4);
  p.readPixels(i, s, o, u, p.RGBA, p.UNSIGNED_BYTE, b), p.bindFramebuffer(p.FRAMEBUFFER, null);
  for (var w = /* @__PURE__ */ new Set(), C = 0; C < m; C++) {
    var E = b.slice(C * 4, C * 4 + 4), x = q0(E) - 1;
    x >= 0 && w.add(x);
  }
  return w;
}
function cm(r, e, t) {
  var a = lm(r, e, t), n = r.getCachedZSortedEles(), i, s, o = Lt(a), u;
  try {
    for (o.s(); !(u = o.n()).done; ) {
      var l = u.value, c = n[l];
      if (!i && c.isNode() && (i = c), !s && c.isEdge() && (s = c), i && s)
        break;
    }
  } catch (f) {
    o.e(f);
  } finally {
    o.f();
  }
  return [i, s].filter(Boolean);
}
function fm(r) {
  return r.pstyle("shape").value === "rectangle" && r.pstyle("background-fill").value === "solid" && r.pstyle("border-width").pfValue === 0 && r.pstyle("background-image").strValue === "none";
}
function Hs(r, e, t) {
  var a = r.drawing;
  e += 1, t.isNode() ? (a.drawTexture(t, e, "node-underlay"), fm(t) ? a.drawSimpleRectangle(t, e, "node-body") : a.drawTexture(t, e, "node-body"), a.drawTexture(t, e, "label"), a.drawTexture(t, e, "node-overlay")) : (a.drawEdgeLine(t, e), a.drawEdgeArrow(t, e, "source"), a.drawEdgeArrow(t, e, "target"), a.drawTexture(t, e, "label"), a.drawTexture(t, e, "edge-source-label"), a.drawTexture(t, e, "edge-target-label"));
}
function yv(r, e, t) {
  var a;
  r.webglDebug && (a = performance.now());
  var n = r.drawing, i = 0;
  if (t.screen && r.data.canvasNeedsRedraw[r.SELECT_BOX] && sm(r, e), r.data.canvasNeedsRedraw[r.NODE] || t.picking) {
    var s = r.data.contexts[r.WEBGL];
    t.screen ? (s.clearColor(0, 0, 0, 0), s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA)) : s.disable(s.BLEND), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT), s.viewport(0, 0, s.canvas.width, s.canvas.height);
    var o = im(r), u = r.getCachedZSortedEles();
    if (i = u.length, n.startFrame(o, t), t.screen) {
      for (var l = 0; l < u.nondrag.length; l++)
        Hs(r, l, u.nondrag[l]);
      for (var c = 0; c < u.drag.length; c++)
        Hs(r, c, u.drag[c]);
    } else if (t.picking)
      for (var f = 0; f < u.length; f++)
        Hs(r, f, u[f]);
    n.endFrame(), t.screen && r.webglDebugShowAtlases && (om(r), um(r)), r.data.canvasNeedsRedraw[r.NODE] = !1, r.data.canvasNeedsRedraw[r.DRAG] = !1;
  }
  if (r.webglDebug) {
    var v = performance.now(), h = !1, d = Math.ceil(v - a), y = n.getDebugInfo(), g = ["".concat(i, " elements"), "".concat(y.totalInstances, " instances"), "".concat(y.batchCount, " batches"), "".concat(y.totalAtlases, " atlases"), "".concat(y.wrappedCount, " wrapped textures"), "".concat(y.rectangleCount, " simple rectangles")].join(", ");
    if (h)
      console.log("WebGL (".concat(t.name, ") - time ").concat(d, "ms, ").concat(g));
    else {
      console.log("WebGL (".concat(t.name, ") - frame time ").concat(d, "ms")), console.log("Totals:"), console.log("  ".concat(g)), console.log("Texture Atlases Used:");
      var p = y.atlasInfo, m = Lt(p), b;
      try {
        for (m.s(); !(b = m.n()).done; ) {
          var w = b.value;
          console.log("  ".concat(w.type, ": ").concat(w.keyCount, " keys, ").concat(w.atlasCount, " atlases"));
        }
      } catch (C) {
        m.e(C);
      } finally {
        m.f();
      }
      console.log("");
    }
  }
  r.data.gc && (console.log("Garbage Collect!"), r.data.gc = !1, n.gc());
}
var pr = {};
pr.drawPolygonPath = function(r, e, t, a, n, i) {
  var s = a / 2, o = n / 2;
  r.beginPath && r.beginPath(), r.moveTo(e + s * i[0], t + o * i[1]);
  for (var u = 1; u < i.length / 2; u++)
    r.lineTo(e + s * i[u * 2], t + o * i[u * 2 + 1]);
  r.closePath();
};
pr.drawRoundPolygonPath = function(r, e, t, a, n, i, s) {
  s.forEach(function(o) {
    return Qf(r, o);
  }), r.closePath();
};
pr.drawRoundRectanglePath = function(r, e, t, a, n, i) {
  var s = a / 2, o = n / 2, u = i === "auto" ? kr(a, n) : Math.min(i, o, s);
  r.beginPath && r.beginPath(), r.moveTo(e, t - o), r.arcTo(e + s, t - o, e + s, t, u), r.arcTo(e + s, t + o, e, t + o, u), r.arcTo(e - s, t + o, e - s, t, u), r.arcTo(e - s, t - o, e, t - o, u), r.lineTo(e, t - o), r.closePath();
};
pr.drawBottomRoundRectanglePath = function(r, e, t, a, n, i) {
  var s = a / 2, o = n / 2, u = i === "auto" ? kr(a, n) : i;
  r.beginPath && r.beginPath(), r.moveTo(e, t - o), r.lineTo(e + s, t - o), r.lineTo(e + s, t), r.arcTo(e + s, t + o, e, t + o, u), r.arcTo(e - s, t + o, e - s, t, u), r.lineTo(e - s, t - o), r.lineTo(e, t - o), r.closePath();
};
pr.drawCutRectanglePath = function(r, e, t, a, n, i, s) {
  var o = a / 2, u = n / 2, l = s === "auto" ? Co() : s;
  r.beginPath && r.beginPath(), r.moveTo(e - o + l, t - u), r.lineTo(e + o - l, t - u), r.lineTo(e + o, t - u + l), r.lineTo(e + o, t + u - l), r.lineTo(e + o - l, t + u), r.lineTo(e - o + l, t + u), r.lineTo(e - o, t + u - l), r.lineTo(e - o, t - u + l), r.closePath();
};
pr.drawBarrelPath = function(r, e, t, a, n) {
  var i = a / 2, s = n / 2, o = e - i, u = e + i, l = t - s, c = t + s, f = Ks(a, n), v = f.widthOffset, h = f.heightOffset, d = f.ctrlPtOffsetPct * v;
  r.beginPath && r.beginPath(), r.moveTo(o, l + h), r.lineTo(o, c - h), r.quadraticCurveTo(o + d, c, o + v, c), r.lineTo(u - v, c), r.quadraticCurveTo(u - d, c, u, c - h), r.lineTo(u, l + h), r.quadraticCurveTo(u - d, l, u - v, l), r.lineTo(o + v, l), r.quadraticCurveTo(o + d, l, o, l + h), r.closePath();
};
var xc = Math.sin(0), Ec = Math.cos(0), so = {}, oo = {}, mv = Math.PI / 40;
for (var qr = 0 * Math.PI; qr < 2 * Math.PI; qr += mv)
  so[qr] = Math.sin(qr), oo[qr] = Math.cos(qr);
pr.drawEllipsePath = function(r, e, t, a, n) {
  if (r.beginPath && r.beginPath(), r.ellipse)
    r.ellipse(e, t, a / 2, n / 2, 0, 0, 2 * Math.PI);
  else
    for (var i, s, o = a / 2, u = n / 2, l = 0 * Math.PI; l < 2 * Math.PI; l += mv)
      i = e - o * so[l] * xc + o * oo[l] * Ec, s = t + u * oo[l] * xc + u * so[l] * Ec, l === 0 ? r.moveTo(i, s) : r.lineTo(i, s);
  r.closePath();
};
var ja = {};
ja.createBuffer = function(r, e) {
  var t = document.createElement("canvas");
  return t.width = r, t.height = e, [t, t.getContext("2d")];
};
ja.bufferCanvasImage = function(r) {
  var e = this.cy, t = e.mutableElements(), a = t.boundingBox(), n = this.findContainerClientCoords(), i = r.full ? Math.ceil(a.w) : n[2], s = r.full ? Math.ceil(a.h) : n[3], o = ae(r.maxWidth) || ae(r.maxHeight), u = this.getPixelRatio(), l = 1;
  if (r.scale !== void 0)
    i *= r.scale, s *= r.scale, l = r.scale;
  else if (o) {
    var c = 1 / 0, f = 1 / 0;
    ae(r.maxWidth) && (c = l * r.maxWidth / i), ae(r.maxHeight) && (f = l * r.maxHeight / s), l = Math.min(c, f), i *= l, s *= l;
  }
  o || (i *= u, s *= u, l *= u);
  var v = document.createElement("canvas");
  v.width = i, v.height = s, v.style.width = i + "px", v.style.height = s + "px";
  var h = v.getContext("2d");
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
  return v;
};
function vm(r, e) {
  for (var t = atob(r), a = new ArrayBuffer(t.length), n = new Uint8Array(a), i = 0; i < t.length; i++)
    n[i] = t.charCodeAt(i);
  return new Blob([a], {
    type: e
  });
}
function Cc(r) {
  var e = r.indexOf(",");
  return r.substr(e + 1);
}
function bv(r, e, t) {
  var a = function() {
    return e.toDataURL(t, r.quality);
  };
  switch (r.output) {
    case "blob-promise":
      return new aa(function(n, i) {
        try {
          e.toBlob(function(s) {
            s != null ? n(s) : i(new Error("`canvas.toBlob()` sent a null value in its callback"));
          }, t, r.quality);
        } catch (s) {
          i(s);
        }
      });
    case "blob":
      return vm(Cc(a()), t);
    case "base64":
      return Cc(a());
    case "base64uri":
    default:
      return a();
  }
}
ja.png = function(r) {
  return bv(r, this.bufferCanvasImage(r), "image/png");
};
ja.jpg = function(r) {
  return bv(r, this.bufferCanvasImage(r), "image/jpeg");
};
var wv = {};
wv.nodeShapeImpl = function(r, e, t, a, n, i, s, o) {
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
var dm = xv, Te = xv.prototype;
Te.CANVAS_LAYERS = 3;
Te.SELECT_BOX = 0;
Te.DRAG = 1;
Te.NODE = 2;
Te.WEBGL = 3;
Te.CANVAS_TYPES = ["2d", "2d", "2d", "webgl2"];
Te.BUFFER_COUNT = 3;
Te.TEXTURE_BUFFER = 0;
Te.MOTIONBLUR_BUFFER_NODE = 1;
Te.MOTIONBLUR_BUFFER_DRAG = 2;
function xv(r) {
  var e = this, t = e.cy.window(), a = t.document;
  r.webgl && (Te.CANVAS_LAYERS = e.CANVAS_LAYERS = 4, console.log("webgl rendering enabled")), e.data = {
    canvases: new Array(Te.CANVAS_LAYERS),
    contexts: new Array(Te.CANVAS_LAYERS),
    canvasNeedsRedraw: new Array(Te.CANVAS_LAYERS),
    bufferCanvases: new Array(Te.BUFFER_COUNT),
    bufferContexts: new Array(Te.CANVAS_LAYERS)
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
  bd() && (u["-ms-touch-action"] = "none", u["touch-action"] = "none");
  for (var l = 0; l < Te.CANVAS_LAYERS; l++) {
    var c = e.data.canvases[l] = a.createElement("canvas"), f = Te.CANVAS_TYPES[l];
    e.data.contexts[l] = c.getContext(f), e.data.contexts[l] || qe("Could not create canvas of type " + f), Object.keys(u).forEach(function(V) {
      c.style[V] = u[V];
    }), c.style.position = "absolute", c.setAttribute("data-id", "layer" + l), c.style.zIndex = String(Te.CANVAS_LAYERS - l), e.data.canvasContainer.appendChild(c), e.data.canvasNeedsRedraw[l] = !1;
  }
  e.data.topCanvas = e.data.canvases[0], e.data.canvases[Te.NODE].setAttribute("data-id", "layer" + Te.NODE + "-node"), e.data.canvases[Te.SELECT_BOX].setAttribute("data-id", "layer" + Te.SELECT_BOX + "-selectbox"), e.data.canvases[Te.DRAG].setAttribute("data-id", "layer" + Te.DRAG + "-drag"), e.data.canvases[Te.WEBGL] && e.data.canvases[Te.WEBGL].setAttribute("data-id", "layer" + Te.WEBGL + "-webgl");
  for (var l = 0; l < Te.BUFFER_COUNT; l++)
    e.data.bufferCanvases[l] = a.createElement("canvas"), e.data.bufferContexts[l] = e.data.bufferCanvases[l].getContext("2d"), e.data.bufferCanvases[l].style.position = "absolute", e.data.bufferCanvases[l].setAttribute("data-id", "buffer" + l), e.data.bufferCanvases[l].style.zIndex = String(-l - 1), e.data.bufferCanvases[l].style.visibility = "hidden";
  e.pathsEnabled = !0;
  var v = bt(), h = function(N) {
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
    var K = N[0]._private, j = K.oldBackgroundTimestamp === K.backgroundTimestamp;
    return !j;
  }, g = function(N) {
    return N[0]._private.nodeKey;
  }, p = function(N) {
    return N[0]._private.labelStyleKey;
  }, m = function(N) {
    return N[0]._private.sourceLabelStyleKey;
  }, b = function(N) {
    return N[0]._private.targetLabelStyleKey;
  }, w = function(N, K, j, te, se) {
    return e.drawElement(N, K, j, !1, !1, se);
  }, C = function(N, K, j, te, se) {
    return e.drawElementText(N, K, j, te, "main", se);
  }, E = function(N, K, j, te, se) {
    return e.drawElementText(N, K, j, te, "source", se);
  }, x = function(N, K, j, te, se) {
    return e.drawElementText(N, K, j, te, "target", se);
  }, T = function(N) {
    return N.boundingBox(), N[0]._private.bodyBounds;
  }, D = function(N) {
    return N.boundingBox(), N[0]._private.labelBounds.main || v;
  }, P = function(N) {
    return N.boundingBox(), N[0]._private.labelBounds.source || v;
  }, A = function(N) {
    return N.boundingBox(), N[0]._private.labelBounds.target || v;
  }, B = function(N, K) {
    return K;
  }, k = function(N) {
    return h(T(N));
  }, L = function(N, K, j) {
    var te = N ? N + "-" : "";
    return {
      x: K.x + j.pstyle(te + "text-margin-x").pfValue,
      y: K.y + j.pstyle(te + "text-margin-y").pfValue
    };
  }, M = function(N, K, j) {
    var te = N[0]._private.rscratch;
    return {
      x: te[K],
      y: te[j]
    };
  }, I = function(N) {
    return L("", M(N, "labelX", "labelY"), N);
  }, R = function(N) {
    return L("source", M(N, "sourceLabelX", "sourceLabelY"), N);
  }, O = function(N) {
    return L("target", M(N, "targetLabelX", "targetLabelY"), N);
  }, _ = function(N) {
    return d(T(N));
  }, U = function(N) {
    return d(P(N));
  }, z = function(N) {
    return d(A(N));
  }, H = function(N) {
    var K = D(N), j = d(D(N));
    if (N.isNode()) {
      switch (N.pstyle("text-halign").value) {
        case "left":
          j.x = -K.w - (K.leftPad || 0);
          break;
        case "right":
          j.x = -(K.rightPad || 0);
          break;
      }
      switch (N.pstyle("text-valign").value) {
        case "top":
          j.y = -K.h - (K.topPad || 0);
          break;
        case "bottom":
          j.y = -(K.botPad || 0);
          break;
      }
    }
    return j;
  }, G = e.data.eleTxrCache = new xa(e, {
    getKey: g,
    doesEleInvalidateKey: y,
    drawElement: w,
    getBoundingBox: T,
    getRotationPoint: k,
    getRotationOffset: _,
    allowEdgeTxrCaching: !1,
    allowParentTxrCaching: !1
  }), Q = e.data.lblTxrCache = new xa(e, {
    getKey: p,
    drawElement: C,
    getBoundingBox: D,
    getRotationPoint: I,
    getRotationOffset: H,
    isVisible: B
  }), W = e.data.slbTxrCache = new xa(e, {
    getKey: m,
    drawElement: E,
    getBoundingBox: P,
    getRotationPoint: R,
    getRotationOffset: U,
    isVisible: B
  }), X = e.data.tlbTxrCache = new xa(e, {
    getKey: b,
    drawElement: x,
    getBoundingBox: A,
    getRotationPoint: O,
    getRotationOffset: z,
    isVisible: B
  }), Y = e.data.lyrTxrCache = new ov(e);
  e.onUpdateEleCalcs(function(N, K) {
    G.invalidateElements(K), Q.invalidateElements(K), W.invalidateElements(K), X.invalidateElements(K), Y.invalidateElements(K);
    for (var j = 0; j < K.length; j++) {
      var te = K[j]._private;
      te.oldBackgroundTimestamp = te.backgroundTimestamp;
    }
  });
  var ee = function(N) {
    for (var K = 0; K < N.length; K++)
      Y.enqueueElementRefinement(N[K].ele);
  };
  G.onDequeue(ee), Q.onDequeue(ee), W.onDequeue(ee), X.onDequeue(ee), r.webgl && e.initWebgl(r, {
    getStyleKey: g,
    getLabelKey: p,
    getSourceLabelKey: m,
    getTargetLabelKey: b,
    drawElement: w,
    drawLabel: C,
    drawSourceLabel: E,
    drawTargetLabel: x,
    getElementBox: T,
    getLabelBox: D,
    getSourceLabelBox: P,
    getTargetLabelBox: A,
    getElementRotationPoint: k,
    getElementRotationOffset: _,
    getLabelRotationPoint: I,
    getSourceLabelRotationPoint: R,
    getTargetLabelRotationPoint: O,
    getLabelRotationOffset: H,
    getSourceLabelRotationOffset: U,
    getTargetLabelRotationOffset: z
  });
}
Te.redrawHint = function(r, e) {
  var t = this;
  switch (r) {
    case "eles":
      t.data.canvasNeedsRedraw[Te.NODE] = e;
      break;
    case "drag":
      t.data.canvasNeedsRedraw[Te.DRAG] = e;
      break;
    case "select":
      t.data.canvasNeedsRedraw[Te.SELECT_BOX] = e;
      break;
    case "gc":
      t.data.gc = !0;
      break;
  }
};
var hm = typeof Path2D < "u";
Te.path2dEnabled = function(r) {
  if (r === void 0)
    return this.pathsEnabled;
  this.pathsEnabled = !!r;
};
Te.usePaths = function() {
  return hm && this.pathsEnabled;
};
Te.setImgSmoothing = function(r, e) {
  r.imageSmoothingEnabled != null ? r.imageSmoothingEnabled = e : (r.webkitImageSmoothingEnabled = e, r.mozImageSmoothingEnabled = e, r.msImageSmoothingEnabled = e);
};
Te.getImgSmoothing = function(r) {
  return r.imageSmoothingEnabled != null ? r.imageSmoothingEnabled : r.webkitImageSmoothingEnabled || r.mozImageSmoothingEnabled || r.msImageSmoothingEnabled;
};
Te.makeOffscreenCanvas = function(r, e) {
  var t;
  if ((typeof OffscreenCanvas > "u" ? "undefined" : We(OffscreenCanvas)) !== "undefined")
    t = new OffscreenCanvas(r, e);
  else {
    var a = this.cy.window(), n = a.document;
    t = n.createElement("canvas"), t.width = r, t.height = e;
  }
  return t;
};
[uv, Ht, Qt, No, Mr, ua, pt, gv, pr, ja, wv].forEach(function(r) {
  pe(Te, r);
});
var gm = [{
  name: "null",
  impl: Zf
}, {
  name: "base",
  impl: nv
}, {
  name: "canvas",
  impl: dm
}], pm = [{
  type: "layout",
  extensions: Yy
}, {
  type: "renderer",
  extensions: gm
}], Ev = {}, Cv = {};
function Tv(r, e, t) {
  var a = t, n = function(T) {
    Re("Can not register `" + e + "` for `" + r + "` since `" + T + "` already exists in the prototype and can not be overridden");
  };
  if (r === "core") {
    if (Va.prototype[e])
      return n(e);
    Va.prototype[e] = t;
  } else if (r === "collection") {
    if (st.prototype[e])
      return n(e);
    st.prototype[e] = t;
  } else if (r === "layout") {
    for (var i = function(T) {
      this.options = T, t.call(this, T), ke(this._private) || (this._private = {}), this._private.cy = T.cy, this._private.listeners = [], this.createEmitter();
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
          for (var D = 0; D < T.length; D++)
            T[D].stop();
      }
      return c ? c.call(this) : this.emit("layoutstop"), this;
    }, s.destroy || (s.destroy = function() {
      return this;
    }), s.cy = function() {
      return this._private.cy;
    };
    var f = function(T) {
      return T._private.cy;
    }, v = {
      addEventFields: function(T, D) {
        D.layout = T, D.cy = f(T), D.target = T;
      },
      bubble: function() {
        return !0;
      },
      parent: function(T) {
        return f(T);
      }
    };
    pe(s, {
      createEmitter: function() {
        return this._private.emitter = new ni(v, this), this;
      },
      emitter: function() {
        return this._private.emitter;
      },
      on: function(T, D) {
        return this.emitter().on(T, D), this;
      },
      one: function(T, D) {
        return this.emitter().one(T, D), this;
      },
      once: function(T, D) {
        return this.emitter().one(T, D), this;
      },
      removeListener: function(T, D) {
        return this.emitter().removeListener(T, D), this;
      },
      removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
      },
      emit: function(T, D) {
        return this.emitter().emit(T, D), this;
      }
    }), Le.eventAliasesOn(s), a = i;
  } else if (r === "renderer" && e !== "null" && e !== "base") {
    var h = Sv("renderer", "base"), d = h.prototype, y = t, g = t.prototype, p = function() {
      h.apply(this, arguments), y.apply(this, arguments);
    }, m = p.prototype;
    for (var b in d) {
      var w = d[b], C = g[b] != null;
      if (C)
        return n(b);
      m[b] = w;
    }
    for (var E in g)
      m[E] = g[E];
    d.clientFunctions.forEach(function(x) {
      m[x] = m[x] || function() {
        qe("Renderer does not implement `renderer." + x + "()` on its prototype");
      };
    }), a = p;
  } else if (r === "__proto__" || r === "constructor" || r === "prototype")
    return qe(r + " is an illegal type to be registered, possibly lead to prototype pollutions");
  return qc({
    map: Ev,
    keys: [r, e],
    value: a
  });
}
function Sv(r, e) {
  return _c({
    map: Ev,
    keys: [r, e]
  });
}
function ym(r, e, t, a, n) {
  return qc({
    map: Cv,
    keys: [r, e, t, a],
    value: n
  });
}
function mm(r, e, t, a) {
  return _c({
    map: Cv,
    keys: [r, e, t, a]
  });
}
var uo = function() {
  if (arguments.length === 2)
    return Sv.apply(null, arguments);
  if (arguments.length === 3)
    return Tv.apply(null, arguments);
  if (arguments.length === 4)
    return mm.apply(null, arguments);
  if (arguments.length === 5)
    return ym.apply(null, arguments);
  qe("Invalid extension access syntax");
};
Va.prototype.extension = uo;
pm.forEach(function(r) {
  r.extensions.forEach(function(e) {
    Tv(r.type, e.name, e.impl);
  });
});
var Gn = function() {
  if (!(this instanceof Gn))
    return new Gn();
  this.length = 0;
}, Br = Gn.prototype;
Br.instanceString = function() {
  return "stylesheet";
};
Br.selector = function(r) {
  var e = this.length++;
  return this[e] = {
    selector: r,
    properties: []
  }, this;
};
Br.css = function(r, e) {
  var t = this.length - 1;
  if (fe(r))
    this[t].properties.push({
      name: r,
      value: e
    });
  else if (ke(r))
    for (var a = r, n = Object.keys(a), i = 0; i < n.length; i++) {
      var s = n[i], o = a[s];
      if (o != null) {
        var u = rt.properties[s] || rt.properties[Zn(s)];
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
Br.style = Br.css;
Br.generateStyle = function(r) {
  var e = new rt(r);
  return this.appendToStyle(e);
};
Br.appendToStyle = function(r) {
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
var bm = "3.31.1", Lr = function(e) {
  if (e === void 0 && (e = {}), ke(e))
    return new Va(e);
  if (fe(e))
    return uo.apply(uo, arguments);
};
Lr.use = function(r) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.unshift(Lr), r.apply(null, e), this;
};
Lr.warnings = function(r) {
  return Yc(r);
};
Lr.version = bm;
Lr.stylesheet = Lr.Stylesheet = Gn;
ot`<svg
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
const en = {
  action: Fe`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: Fe`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: Fe`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: Fe`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: Fe`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: Fe`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: Fe`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: Fe`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: Fe`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: Fe`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: Fe`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: Fe`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
Fe`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${en.gooseIcon}</svg>`;
Fe`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${en.reportIcon}</svg>`;
Fe`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${en.smvIcon}</svg>`;
Fe`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${en.logIcon}</svg>`;
Fe`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
Fe`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
Fe`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const Tc = {
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
mn("dAIcon"), mn("dOIcon"), mn("enumIcon"), mn("lNIcon");
function mn(r) {
  var a, n;
  if (r === "reset")
    return ot``;
  const e = ((a = Tc[r]) == null ? void 0 : a.height) ?? 24, t = ((n = Tc[r]) == null ? void 0 : n.width) ?? 24;
  return ot`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${t} ${e}"
    width="${t}"
  >
    ${en[r]}
  </svg> `;
}
ot`<svg
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
ot`<svg
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
ot`<svg
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
ot`<svg
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
const wm = ot`<svg
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
</svg>`, xm = ot`<svg
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
</svg>`, Em = ot`<svg
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
</svg>`, Cm = ot`<svg
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
</svg>`, Tm = ot`<svg
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
</svg>`, Sm = ot`<svg
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
ot`<svg
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
ot`<svg
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
ot` <svg
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
Fe`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
Fe`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
Fe`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
Fe`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
Fe`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
Fe`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
var Am = Object.defineProperty, vi = (r, e, t, a) => {
  for (var n = void 0, i = r.length - 1, s; i >= 0; i--)
    (s = r[i]) && (n = s(e, t, n) || n);
  return n && Am(e, t, n), n;
};
const km = {
  CBR: xm,
  DIS: wm,
  CTR: Em,
  VTR: Cm,
  ERS: Tm
};
var $t;
const tn = ($t = class extends Ta {
  constructor() {
    super(), this.header = "oscd-tsld-editor", this.namespace = "";
  }
  static getIcon(e) {
    return km[e] ?? Sm;
  }
  firstUpdated() {
    this.initializeCytoscape();
  }
  initializeCytoscape() {
    var n;
    const e = this.createNodesEdges(), { nodes: t } = e, { edges: a } = e;
    this.cy = Lr({
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
    const e = this.doc.querySelectorAll("Substation"), t = this.doc.querySelectorAll("IED"), a = e.item(0), n = $t.findCordAttribute(a);
    this.namespace = this.doc.lookupNamespaceURI(n);
    const i = this.namespace, s = [], o = [];
    let u = 0, l = 0;
    return e.forEach((c) => {
      const f = c.getAttribute("name");
      s.push({
        data: {
          id: f,
          label: f,
          nodeType: "sbsNode"
        },
        locked: !0
      });
      const v = c.getAttributeNS(
        i,
        "x"
      ), h = c.getAttributeNS(
        i,
        "y"
      );
      u += +v, l += +h, c.querySelectorAll("VoltageLevel").forEach((y) => {
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
          const E = (+u + +m) * 50, x = (+l + +b) * 50;
          s.push({
            data: {
              id: p,
              label: p,
              parent: f,
              nodeType: "vlNode"
            },
            position: { x: E, y: x },
            locked: !0
          });
        } else
          s.push({
            data: {
              id: p,
              label: p,
              parent: f,
              nodeType: "vlNode"
            },
            locked: !0
          });
        u += +m, l += +b;
        let C;
        w.forEach((E, x) => {
          const T = E.getAttribute("name"), D = E.querySelectorAll("ConductingEquipment"), P = E.getAttributeNS(i, "x"), A = E.getAttributeNS(i, "y");
          u += +P, l += +A;
          let B = 0, k = 0;
          const L = $t.lookupBaseX(
            D,
            i,
            u,
            B
          );
          if (D && D.length === 0) {
            const G = u + P + B + x * 100;
            s.push({
              data: {
                id: T,
                label: T,
                parent: p,
                nodeType: "bayNode"
              },
              locked: !0,
              position: { x: G, y: g }
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
            E.querySelectorAll("ConnectivityNode").forEach((Q) => {
              let W = E.getAttributeNS(
                i,
                "x"
              ), X = E.getAttributeNS(
                i,
                "y"
              );
              const Y = Q.getAttribute("name");
              W = (+W + +u) * 50, X = (+X + +l) * 50, s.push({
                data: {
                  id: Y,
                  label: "",
                  parent: T,
                  nodeType: "cnNode"
                },
                position: { x: W, y: X },
                locked: !0
              }), C = Y;
            });
            return;
          }
          const M = {}, I = [], R = [];
          D.forEach((G) => {
            const Q = `${G.getAttribute("name")}_${T}`, W = G.getAttribute("name"), X = G.getAttribute("type"), Y = $t.getIcon(X);
            let ee, V = G.getAttributeNS(i, "x"), N = G.getAttributeNS(i, "y");
            V = (+V + +u) * 50 + B, N = (+N + +l) * 50, (V === L && g === 0 || g > N) && (g = N), L > V ? ee = `data:image/svg+xml;utf8,${encodeURIComponent(
              // SVGs need explicit height and with for zoom to work
              Y.strings[0].replace(
                "<svg",
                '<svg transform="rotate(90)" width="24" height="24"'
              ).replace(`
`, "")
            )}` : L < V ? ee = `data:image/svg+xml;utf8,${encodeURIComponent(
              // SVGs need explicit height and with for zoom to work
              Y.strings[0].replace(
                "<svg",
                '<svg transform="rotate(90)" width="24" height="24"'
              ).replace(`
`, "")
            )}` : ee = `data:image/svg+xml;utf8,${encodeURIComponent(
              // SVGs need explicit height and with for zoom to work
              Y.strings[0].replace(
                "<svg",
                '<svg transform="rotate(0)" width="24" height="24"'
              ).replace(`
`, "")
            )}`, s.push({
              data: {
                id: Q,
                label: W,
                backgroundImage: ee,
                parent: T,
                nodeType: "ceNode"
              },
              position: { x: V, y: N },
              locked: !0
            }), G.querySelectorAll("Terminal").forEach((j) => {
              let te = j.getAttribute("cNodeName");
              if (te === "grounded")
                te = `${te}-${Object.keys(M).length}`, L < V ? V += 50 : L > V ? V -= 50 : N += 50, M[te] = [V, N], o.push({
                  data: { source: Q, target: te, type: "ceEdge" }
                });
              else if (te.includes("Busbar")) {
                let se = G.getAttributeNS(
                  i,
                  "y"
                );
                se = +se + +l, I.push(se), R.push(Q);
              } else
                o.push({
                  data: { source: Q, target: te, type: "ceEdge" }
                });
            });
          });
          let O = 0;
          I.forEach((G) => {
            (+G * 50 < O || O === 0) && (O = +G * 50);
          }), s.push({
            data: {
              id: `busBarConnector-${T}`,
              label: "",
              nodeType: "cnNode",
              parent: T
            },
            position: { x: L, y: O },
            locked: !0
          }), R.forEach((G) => {
            o.push({
              data: {
                source: `busBarConnector-${T}`,
                target: G,
                type: "ceEdge"
              }
            });
          }), o.push({
            data: {
              source: `busBarConnector-${T}`,
              target: C,
              type: "busBarEdge"
            }
          }), E.querySelectorAll("ConnectivityNode").forEach((G) => {
            const Q = G.getAttribute("name");
            let W = 0, X = 0;
            if (Q !== "grounded") {
              const Y = [], ee = [];
              E.querySelectorAll("Terminal").forEach((V) => {
                if (V.getAttribute("cNodeName") === Q) {
                  const N = V.parentElement;
                  if (N === null)
                    throw new Error();
                  {
                    const K = N.getAttributeNS(i, "x"), j = N.getAttributeNS(i, "y");
                    Y.push(K), ee.push(j);
                  }
                }
              }), Y.length > 2 ? (X += +Y.filter(
                (V, N) => Y.some(
                  (K, j) => K === V && j !== N
                )
              )[0], ee.forEach((V) => {
                W += +V;
              })) : (Y.forEach((V) => {
                X += +V;
              }), ee.forEach((V) => {
                W += +V;
              }), X /= Y.length), W /= ee.length, X = (+X + +u) * 50, W = (+W + +l) * 50, X > k && (k = X), s.push({
                data: {
                  id: Q,
                  label: "",
                  nodeType: "cnNode",
                  parent: T
                },
                position: { x: X, y: W },
                locked: !0
              });
            } else
              Object.keys(M).forEach((Y) => {
                s.push({
                  data: {
                    id: Y,
                    label: "",
                    nodeType: "cnNode",
                    parent: T
                  },
                  position: {
                    x: M[Y].at(0),
                    y: M[Y].at(1)
                  },
                  locked: !0
                }), M[Y][0] > k && (k = M[Y].at(0));
              });
          }), k += 300;
          const U = E.querySelectorAll("LNode"), z = $t.createIEDDict(
            U,
            t
          ), H = $t.createLDDict(
            U,
            t
          );
          Object.keys(z).forEach((G, Q) => {
            s.push({
              data: {
                id: G,
                label: G,
                nodeType: "iedNode",
                parent: T
              }
            }), z[G].forEach((W, X) => {
              s.push({
                data: {
                  id: W,
                  label: W,
                  nodeType: "iedNode",
                  parent: G
                }
              }), t.forEach((Y) => {
                Y.getAttribute("name") === G && Y.querySelectorAll("LDevice").forEach((V) => {
                  Object.keys(H).includes(W) && H[W].forEach((N, K) => {
                    V.querySelectorAll("LN").forEach((te) => {
                      const se = `${te.getAttribute("lnClass")} ${te.getAttribute("inst")}`;
                      if (N === se) {
                        let de, De;
                        te.getAttributeNS(i, "x") !== null && te.getAttributeNS(i, "y") !== null ? (de = te.getAttributeNS(
                          i,
                          "x"
                        ), de = +de, De = te.getAttributeNS(
                          i,
                          "y"
                        ), De = +De) : (de = k, De = g + K * 30 + X * 70 + Q * 200), B < de && (B = de), s.push({
                          data: {
                            id: `${se}-${W}`,
                            label: se,
                            nodeType: "iedLnNode",
                            parent: W
                          },
                          position: { x: de, y: De }
                        });
                      }
                    });
                  });
                });
              });
            });
          }), B += 200, U.forEach((G) => {
            const Q = G.parentElement, W = `${G.getAttribute("lnClass")} ${G.getAttribute("lnInst")}`;
            this.doc.querySelectorAll("LN").forEach((Y) => {
              if (`${Y.getAttribute("lnClass")} ${Y.getAttribute("inst")}` === W) {
                const N = Y.parentElement.getAttribute("inst"), K = `${W}-${N}`, j = `${Q.getAttribute("name")}_${T}`;
                o.push({
                  data: {
                    source: j,
                    target: K,
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
            const f = c.querySelectorAll("LN"), v = c.getAttribute("inst");
            i === v && f.forEach((h) => {
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
            l.querySelectorAll("LN").forEach((v) => {
              `${v.getAttribute("lnClass")} ${v.getAttribute("inst")}` === s && !a[i].includes(c) && a[i].push(c);
            });
          });
        });
      else {
        const o = [];
        t.forEach((u) => {
          u.getAttribute("name") === i && u.querySelectorAll("LDevice").forEach((c) => {
            const f = c.getAttribute("inst");
            c.querySelectorAll("LN").forEach((h) => {
              `${h.getAttribute("lnClass")} ${h.getAttribute("inst")}` === s && !o.includes(f) && o.push(f);
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
          const f = c.getAttribute("inst");
          c.querySelectorAll("LN").forEach((h) => {
            const d = `${h.getAttribute("lnClass")} ${h.getAttribute("inst")}`;
            d === s && (Object.keys(a).includes(f) ? a[f].push(d) : a[f] = [d]);
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
      const c = l.getAttributeNS(t, "x"), f = l.getAttribute("name");
      Object.keys(s).includes(c) ? s[c].push(f) : s[c] = [f];
    });
    let o = 0, u = Object.keys(s);
    return Object.keys(s).forEach((l) => {
      if (o < s[l].length)
        o = s[l].length, i = +l;
      else if (o === s[l].length) {
        u = u.sort();
        const c = (+u[0] + +u[-1]) / 2;
        let f = 0;
        u.forEach((v) => {
          f > (+v - +c) ** 2 && (f = (+v - +c) ** 2, i = +v);
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
    return ot`
      <div>
        <div
          id="cy"
          style="height: calc(calc(100vh - var(--mdc-tab-height, 48px) - 64px)); position: relative;"
        ></div>
      </div>`;
  }
}, $t.styles = Nv`
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
  `, $t);
vi([
  Wn({ type: Object })
], tn.prototype, "doc");
vi([
  Wn({ type: String })
], tn.prototype, "header");
vi([
  Wn()
], tn.prototype, "cy");
vi([
  Wn({ type: String })
], tn.prototype, "namespace");
let Lm = tn;
export {
  Lm as default
};
