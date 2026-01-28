var Hd = Object.defineProperty;
var cl = (t) => {
  throw TypeError(t);
};
var Pd = (t, e, n) => e in t ? Hd(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var bi = (t, e, n) => Pd(t, typeof e != "symbol" ? e + "" : e, n), Bs = (t, e, n) => e.has(t) || cl("Cannot " + n);
var ne = (t, e, n) => (Bs(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Je = (t, e, n) => e.has(t) ? cl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Me = (t, e, n, r) => (Bs(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), zt = (t, e, n) => (Bs(t, e, "access private method"), n);
const Ht = Symbol(), Nd = "http://www.w3.org/1999/xhtml", Ud = "http://www.w3.org/2000/svg", Fd = "@attach", Au = !1;
var Ts = Array.isArray, kd = Array.prototype.indexOf, Ho = Array.from, is = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, Cu = Object.getOwnPropertyDescriptors, Bd = Object.prototype, Vd = Array.prototype, Po = Object.getPrototypeOf, dl = Object.isExtensible;
function Ci(t) {
  return typeof t == "function";
}
const fe = () => {
};
function Gd(t) {
  return t();
}
function as(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function xu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const nn = 2, No = 4, ws = 8, Or = 16, dr = 32, li = 64, Uo = 128, Cn = 256, ss = 512, Xt = 1024, gn = 2048, Lr = 4096, Hn = 8192, ui = 16384, Os = 32768, Rr = 65536, fl = 1 << 17, jd = 1 << 18, Yi = 1 << 19, Tu = 1 << 20, lo = 1 << 21, Ls = 1 << 22, ei = 1 << 23, zn = Symbol("$state"), wu = Symbol("legacy props"), qd = Symbol(""), xi = new class extends Error {
  constructor() {
    super(...arguments);
    bi(this, "name", "StaleReactionError");
    bi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Fo(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function zd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Wd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Xd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Kd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Zd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Yd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Qd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Jd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function $d() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ef() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function tf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function nf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let rf = !1;
function Ou(t) {
  return t === this.v;
}
function ko(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Lu(t) {
  return !ko(t, this.v);
}
let Qi = !1, af = !1;
function sf() {
  Qi = !0;
}
let st = null;
function Bi(t) {
  st = t;
}
function he(t) {
  return (
    /** @type {T} */
    Ru().get(t)
  );
}
function oe(t, e) {
  return Ru().set(t, e), e;
}
function xe(t, e = !1, n) {
  st = {
    p: st,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Qi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Te(t) {
  var e = (
    /** @type {ComponentContext} */
    st
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ku(r);
  }
  return t !== void 0 && (e.x = t), st = e.p, t ?? /** @type {T} */
  {};
}
function La() {
  return !Qi || st !== null && st.l === null;
}
function Ru(t) {
  return st === null && Fo(), st.c ?? (st.c = new Map(of(st) || void 0));
}
function of(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Kr = [];
function Du() {
  var t = Kr;
  Kr = [], as(t);
}
function cr(t) {
  if (Kr.length === 0 && !ba) {
    var e = Kr;
    queueMicrotask(() => {
      e === Kr && Du();
    });
  }
  Kr.push(t);
}
function lf() {
  for (; Kr.length > 0; )
    Du();
}
const uf = /* @__PURE__ */ new WeakMap();
function Mu(t) {
  var e = Ve;
  if (e === null)
    return Be.f |= ei, t;
  if (e.f & Os)
    Vi(t, e);
  else {
    if (!(e.f & Uo))
      throw !e.parent && t instanceof Error && Hu(t), t;
    e.b.error(t);
  }
}
function Vi(t, e) {
  for (; e !== null; ) {
    if (e.f & Uo)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Hu(t), t;
}
function Hu(t) {
  const e = uf.get(t);
  e && (is(t, "message", {
    value: e.message
  }), is(t, "stack", {
    value: e.stack
  }));
}
const Ba = /* @__PURE__ */ new Set();
let it = null, Qa = null, Bt = null, uo = /* @__PURE__ */ new Set(), qn = [], Rs = null, co = !1, ba = !1;
var Hi, Pi, Zr, Ta, Ni, Ui, Yr, Fi, wa, Oa, xn, fo, Ja, ho;
const As = class As {
  constructor() {
    Je(this, xn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    bi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Je(this, Hi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Je(this, Pi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Je(this, Zr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Je(this, Ta, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Je(this, Ni, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Je(this, Ui, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Je(this, Yr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Je(this, Fi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Je(this, wa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Je(this, Oa, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    bi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    qn = [], Qa = null, this.apply();
    for (const s of e)
      zt(this, xn, fo).call(this, s);
    if (ne(this, Zr) === 0) {
      var n = Bt;
      zt(this, xn, ho).call(this);
      var r = ne(this, Ui), i = ne(this, Yr);
      Me(this, Ui, []), Me(this, Yr, []), Me(this, Fi, []), Qa = this, it = null, Bt = n, hl(r), hl(i), Qa = null, (a = ne(this, Ta)) == null || a.resolve();
    } else
      zt(this, xn, Ja).call(this, ne(this, Ui)), zt(this, xn, Ja).call(this, ne(this, Yr)), zt(this, xn, Ja).call(this, ne(this, Fi));
    Bt = null;
    for (const s of ne(this, Ni))
      Ia(s);
    Me(this, Ni, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    ne(this, Hi).has(e) || ne(this, Hi).set(e, n), this.current.set(e, e.v), Bt == null || Bt.set(e, e.v);
  }
  activate() {
    it = this;
  }
  deactivate() {
    it = null, Bt = null;
  }
  flush() {
    if (qn.length > 0) {
      if (this.activate(), Pu(), it !== null && it !== this)
        return;
    } else ne(this, Zr) === 0 && zt(this, xn, ho).call(this);
    this.deactivate();
    for (const e of uo)
      if (uo.delete(e), e(), it !== null)
        break;
  }
  increment() {
    Me(this, Zr, ne(this, Zr) + 1);
  }
  decrement() {
    Me(this, Zr, ne(this, Zr) - 1);
    for (const e of ne(this, wa))
      en(e, gn), ai(e);
    for (const e of ne(this, Oa))
      en(e, Lr), ai(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ne(this, Pi).add(e);
  }
  settled() {
    return (ne(this, Ta) ?? Me(this, Ta, xu())).promise;
  }
  static ensure() {
    if (it === null) {
      const e = it = new As();
      Ba.add(it), ba || As.enqueue(() => {
        it === e && e.flush();
      });
    }
    return it;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    cr(e);
  }
  apply() {
  }
};
Hi = new WeakMap(), Pi = new WeakMap(), Zr = new WeakMap(), Ta = new WeakMap(), Ni = new WeakMap(), Ui = new WeakMap(), Yr = new WeakMap(), Fi = new WeakMap(), wa = new WeakMap(), Oa = new WeakMap(), xn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
fo = function(e) {
  var c;
  e.f ^= Xt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (dr | li)) !== 0, a = i && (r & Xt) !== 0, s = a || (r & Hn) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      i ? n.f ^= Xt : r & No ? ne(this, Yr).push(n) : r & Xt || (r & Ls && ((c = n.b) != null && c.is_pending()) ? ne(this, Ni).push(n) : Hs(n) && (n.f & Or && ne(this, Fi).push(n), Ia(n)));
      var u = n.first;
      if (u !== null) {
        n = u;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      n = l.next, l = l.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Ja = function(e) {
  for (const n of e)
    (n.f & gn ? ne(this, wa) : ne(this, Oa)).push(n), en(n, Xt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ho = function() {
  var e;
  for (const n of ne(this, Pi))
    n();
  if (ne(this, Pi).clear(), Ba.size > 1) {
    ne(this, Hi).clear();
    let n = !0;
    for (const r of Ba) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [s, u] of this.current) {
        if (r.current.has(s))
          if (n && u !== r.current.get(s))
            r.current.set(s, u);
          else
            continue;
        i.push(s);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((s) => !this.current.has(s));
      if (a.length > 0) {
        for (const s of i)
          Nu(s, a);
        if (qn.length > 0) {
          it = r, r.apply();
          for (const s of qn)
            zt(e = r, xn, fo).call(e, s);
          qn = [], r.deactivate();
        }
      }
    }
    it = null;
  }
  Ba.delete(this);
};
let or = As;
function cf(t) {
  var e = ba;
  ba = !0;
  try {
    for (var n; ; ) {
      if (lf(), qn.length === 0 && (it == null || it.flush(), qn.length === 0))
        return Rs = null, /** @type {T} */
        n;
      Pu();
    }
  } finally {
    ba = e;
  }
}
function Pu() {
  var t = Ri;
  co = !0;
  try {
    var e = 0;
    for (gl(!0); qn.length > 0; ) {
      var n = or.ensure();
      if (e++ > 1e3) {
        var r, i;
        df();
      }
      n.process(qn), xr.clear();
    }
  } finally {
    co = !1, gl(t), Rs = null;
  }
}
function df() {
  try {
    Zd();
  } catch (t) {
    Vi(t, Rs);
  }
}
let nr = null;
function hl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ui | Hn)) && Hs(r) && (nr = [], Ia(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Qu(r) : r.fn = null), (nr == null ? void 0 : nr.length) > 0)) {
        xr.clear();
        for (const i of nr)
          Ia(i);
        nr = [];
      }
    }
    nr = null;
  }
}
function Nu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & nn ? Nu(
        /** @type {Derived} */
        n,
        e
      ) : r & (Ls | Or) && Uu(n, e) && (en(n, gn), ai(
        /** @type {Effect} */
        n
      ));
    }
}
function Uu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & nn && Uu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ai(t) {
  for (var e = Rs = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (co && e === Ve && n & Or)
      return;
    if (n & (li | dr)) {
      if (!(n & Xt)) return;
      e.f ^= Xt;
    }
  }
  qn.push(e);
}
function ff(t) {
  let e = 0, n = si(0), r;
  return () => {
    wf() && (o(n), Ma(() => (e === 0 && (r = Nn(() => t(() => _a(n)))), e += 1, () => {
      cr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, _a(n));
      });
    })));
  };
}
var hf = Rr | Yi | Uo;
function vf(t, e, n) {
  new mf(t, e, n);
}
var Rn, Sn, Mo, Vn, Qr, Gn, An, on, jn, _r, Jr, yr, $r, Ir, Cs, xs, tn, gf, pf, $a, es, vo;
class mf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Je(this, tn);
    /** @type {Boundary | null} */
    bi(this, "parent");
    Je(this, Rn, !1);
    /** @type {TemplateNode} */
    Je(this, Sn);
    /** @type {TemplateNode | null} */
    Je(this, Mo, null);
    /** @type {BoundaryProps} */
    Je(this, Vn);
    /** @type {((anchor: Node) => void)} */
    Je(this, Qr);
    /** @type {Effect} */
    Je(this, Gn);
    /** @type {Effect | null} */
    Je(this, An, null);
    /** @type {Effect | null} */
    Je(this, on, null);
    /** @type {Effect | null} */
    Je(this, jn, null);
    /** @type {DocumentFragment | null} */
    Je(this, _r, null);
    Je(this, Jr, 0);
    Je(this, yr, 0);
    Je(this, $r, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Je(this, Ir, null);
    Je(this, Cs, () => {
      ne(this, Ir) && Gi(ne(this, Ir), ne(this, Jr));
    });
    Je(this, xs, ff(() => (Me(this, Ir, si(ne(this, Jr))), () => {
      Me(this, Ir, null);
    })));
    Me(this, Sn, e), Me(this, Vn, n), Me(this, Qr, r), this.parent = /** @type {Effect} */
    Ve.b, Me(this, Rn, !!ne(this, Vn).pending), Me(this, Gn, Mr(() => {
      Ve.b = this;
      {
        try {
          Me(this, An, Wt(() => r(ne(this, Sn))));
        } catch (i) {
          this.error(i);
        }
        ne(this, yr) > 0 ? zt(this, tn, es).call(this) : Me(this, Rn, !1);
      }
    }, hf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ne(this, Rn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ne(this, Vn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    zt(this, tn, vo).call(this, e), Me(this, Jr, ne(this, Jr) + e), uo.add(ne(this, Cs));
  }
  get_effect_pending() {
    return ne(this, xs).call(this), o(
      /** @type {Source<number>} */
      ne(this, Ir)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = ne(this, Vn).onerror;
    let r = ne(this, Vn).failed;
    if (ne(this, $r) || !n && !r)
      throw e;
    ne(this, An) && (Vt(ne(this, An)), Me(this, An, null)), ne(this, on) && (Vt(ne(this, on)), Me(this, on, null)), ne(this, jn) && (Vt(ne(this, jn)), Me(this, jn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        nf();
        return;
      }
      i = !0, a && ef(), or.ensure(), Me(this, Jr, 0), ne(this, jn) !== null && Tr(ne(this, jn), () => {
        Me(this, jn, null);
      }), Me(this, Rn, this.has_pending_snippet()), Me(this, An, zt(this, tn, $a).call(this, () => (Me(this, $r, !1), Wt(() => ne(this, Qr).call(this, ne(this, Sn)))))), ne(this, yr) > 0 ? zt(this, tn, es).call(this) : Me(this, Rn, !1);
    };
    var u = Be;
    try {
      ln(null), a = !0, n == null || n(e, s), a = !1;
    } catch (l) {
      Vi(l, ne(this, Gn) && ne(this, Gn).parent);
    } finally {
      ln(u);
    }
    r && cr(() => {
      Me(this, jn, zt(this, tn, $a).call(this, () => {
        Me(this, $r, !0);
        try {
          return Wt(() => {
            r(
              ne(this, Sn),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Vi(
            l,
            /** @type {Effect} */
            ne(this, Gn).parent
          ), null;
        } finally {
          Me(this, $r, !1);
        }
      }));
    });
  }
}
Rn = new WeakMap(), Sn = new WeakMap(), Mo = new WeakMap(), Vn = new WeakMap(), Qr = new WeakMap(), Gn = new WeakMap(), An = new WeakMap(), on = new WeakMap(), jn = new WeakMap(), _r = new WeakMap(), Jr = new WeakMap(), yr = new WeakMap(), $r = new WeakMap(), Ir = new WeakMap(), Cs = new WeakMap(), xs = new WeakMap(), tn = new WeakSet(), gf = function() {
  try {
    Me(this, An, Wt(() => ne(this, Qr).call(this, ne(this, Sn))));
  } catch (e) {
    this.error(e);
  }
  Me(this, Rn, !1);
}, pf = function() {
  const e = ne(this, Vn).pending;
  e && (Me(this, on, Wt(() => e(ne(this, Sn)))), or.enqueue(() => {
    Me(this, An, zt(this, tn, $a).call(this, () => (or.ensure(), Wt(() => ne(this, Qr).call(this, ne(this, Sn)))))), ne(this, yr) > 0 ? zt(this, tn, es).call(this) : (Tr(
      /** @type {Effect} */
      ne(this, on),
      () => {
        Me(this, on, null);
      }
    ), Me(this, Rn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
$a = function(e) {
  var n = Ve, r = Be, i = st;
  Wn(ne(this, Gn)), ln(ne(this, Gn)), Bi(ne(this, Gn).ctx);
  try {
    return e();
  } catch (a) {
    return Mu(a), null;
  } finally {
    Wn(n), ln(r), Bi(i);
  }
}, es = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ne(this, Vn).pending
  );
  ne(this, An) !== null && (Me(this, _r, document.createDocumentFragment()), bf(ne(this, An), ne(this, _r))), ne(this, on) === null && Me(this, on, Wt(() => e(ne(this, Sn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
vo = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && zt(n = this.parent, tn, vo).call(n, e);
    return;
  }
  Me(this, yr, ne(this, yr) + e), ne(this, yr) === 0 && (Me(this, Rn, !1), ne(this, on) && Tr(ne(this, on), () => {
    Me(this, on, null);
  }), ne(this, _r) && (ne(this, Sn).before(ne(this, _r)), Me(this, _r, null)), cr(() => {
    or.ensure().flush();
  }));
};
function bf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Da(n)
    );
    e.append(n), n = i;
  }
}
function Fu(t, e, n) {
  const r = La() ? Ra : Bo;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = it, a = (
    /** @type {Effect} */
    Ve
  ), s = _f();
  Promise.all(e.map((u) => /* @__PURE__ */ yf(u))).then((u) => {
    s();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & ui || Vi(l, a);
    }
    i == null || i.deactivate(), mo();
  }).catch((u) => {
    Vi(u, a);
  });
}
function _f() {
  var t = Ve, e = Be, n = st, r = it;
  return function() {
    Wn(t), ln(e), Bi(n), r == null || r.activate();
  };
}
function mo() {
  Wn(null), ln(null), Bi(null);
}
// @__NO_SIDE_EFFECTS__
function Ra(t) {
  var e = nn | gn, n = Be !== null && Be.f & nn ? (
    /** @type {Derived} */
    Be
  ) : null;
  return Ve === null || n !== null && n.f & Cn ? e |= Cn : Ve.f |= Yi, {
    ctx: st,
    deps: null,
    effects: null,
    equals: Ou,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Ht
    ),
    wv: 0,
    parent: n ?? Ve,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function yf(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ve
  );
  n === null && zd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = si(
    /** @type {V} */
    Ht
  ), s = !Be, u = /* @__PURE__ */ new Map();
  return Rf(() => {
    var f;
    var l = xu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(mo);
    } catch (m) {
      l.reject(m), mo();
    }
    var c = (
      /** @type {Batch} */
      it
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(xi), u.delete(c), u.set(c, l)));
    const h = (m, v = void 0) => {
      if (d || c.activate(), v)
        v !== xi && (a.f |= ei, Gi(a, v));
      else {
        a.f & ei && (a.f ^= ei), Gi(a, m);
        for (const [p, b] of u) {
          if (u.delete(p), p === c) break;
          b.reject(xi);
        }
      }
      s && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (m) => h(null, m || "unknown"));
  }), Ds(() => {
    for (const l of u.values())
      l.reject(xi);
  }), new Promise((l) => {
    function c(d) {
      function h() {
        d === i ? l(a) : c(i);
      }
      d.then(h, h);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function be(t) {
  const e = /* @__PURE__ */ Ra(t);
  return ec(e), e;
}
// @__NO_SIDE_EFFECTS__
function Bo(t) {
  const e = /* @__PURE__ */ Ra(t);
  return e.equals = Lu, e;
}
function ku(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Vt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function If(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & nn))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Vo(t) {
  var e, n = Ve;
  Wn(If(t));
  try {
    ku(t), e = ic(t);
  } finally {
    Wn(n);
  }
  return e;
}
function Bu(t) {
  var e = Vo(t);
  if (t.equals(e) || (t.v = e, t.wv = nc()), !di)
    if (Bt !== null)
      Bt.set(t, t.v);
    else {
      var n = (Sr || t.f & Cn) && t.deps !== null ? Lr : Xt;
      en(t, n);
    }
}
const xr = /* @__PURE__ */ new Map();
function si(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ou,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ie(t, e) {
  const n = si(t);
  return ec(n), n;
}
// @__NO_SIDE_EFFECTS__
function Vu(t, e = !1, n = !0) {
  var i;
  const r = si(t);
  return e || (r.equals = Lu), Qi && n && st !== null && st.l !== null && ((i = st.l).s ?? (i.s = [])).push(r), r;
}
function K(t, e, n = !1) {
  Be !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Dn || Be.f & fl) && La() && Be.f & (nn | Or | Ls | fl) && !($t != null && $t.includes(t)) && $d();
  let r = n ? Ce(e) : e;
  return Gi(t, r);
}
function Gi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    di ? xr.set(t, e) : xr.set(t, n), t.v = e;
    var r = or.ensure();
    r.capture(t, n), t.f & nn && (t.f & gn && Vo(
      /** @type {Derived} */
      t
    ), en(t, t.f & Cn ? Lr : Xt)), t.wv = nc(), Gu(t, gn), La() && Ve !== null && Ve.f & Xt && !(Ve.f & (dr | li)) && (En === null ? Hf([t]) : En.push(t));
  }
  return e;
}
function _a(t) {
  K(t, t.v + 1);
}
function Gu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = La(), i = n.length, a = 0; a < i; a++) {
      var s = n[a], u = s.f;
      if (!(!r && s === Ve)) {
        var l = (u & gn) === 0;
        l && en(s, e), u & nn ? Gu(
          /** @type {Derived} */
          s,
          Lr
        ) : l && (u & Or && nr !== null && nr.push(
          /** @type {Effect} */
          s
        ), ai(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ce(t) {
  if (typeof t != "object" || t === null || zn in t)
    return t;
  const e = Po(t);
  if (e !== Bd && e !== Vd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Ts(t), i = /* @__PURE__ */ Ie(0), a = ti, s = (u) => {
    if (ti === a)
      return u();
    var l = Be, c = ti;
    ln(null), bl(a);
    var d = u();
    return ln(l), bl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ie(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Qd();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ Ie(c.value);
          return n.set(l, h), h;
        }) : K(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = s(() => /* @__PURE__ */ Ie(Ht));
            n.set(l, d), _a(i);
          }
        } else
          K(c, Ht), _a(i);
        return !0;
      },
      get(u, l, c) {
        var m;
        if (l === zn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (m = Cr(u, l)) != null && m.writable) && (d = s(() => {
          var v = Ce(h ? u[l] : Ht), p = /* @__PURE__ */ Ie(v);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === Ht ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = o(d));
        } else if (c === void 0) {
          var h = n.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== Ht)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(u, l) {
        var f;
        if (l === zn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Ht || Reflect.has(u, l);
        if (c !== void 0 || Ve !== null && (!d || (f = Cr(u, l)) != null && f.writable)) {
          c === void 0 && (c = s(() => {
            var m = d ? Ce(u[l]) : Ht, v = /* @__PURE__ */ Ie(m);
            return v;
          }), n.set(l, c));
          var h = o(c);
          if (h === Ht)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var A;
        var h = n.get(l), f = l in u;
        if (r && l === "length")
          for (var m = c; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var v = n.get(m + "");
            v !== void 0 ? K(v, Ht) : m in u && (v = s(() => /* @__PURE__ */ Ie(Ht)), n.set(m + "", v));
          }
        if (h === void 0)
          (!f || (A = Cr(u, l)) != null && A.writable) && (h = s(() => /* @__PURE__ */ Ie(void 0)), K(h, Ce(c)), n.set(l, h));
        else {
          f = h.v !== Ht;
          var p = s(() => Ce(c));
          K(h, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(u, l);
        if (b != null && b.set && b.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var I = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= I.v && K(I, E + 1);
          }
          _a(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Ht;
        });
        for (var [c, d] of n)
          d.v !== Ht && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        Jd();
      }
    }
  );
}
function vl(t) {
  try {
    if (t !== null && typeof t == "object" && zn in t)
      return t[zn];
  } catch {
  }
  return t;
}
function Ef(t, e) {
  return Object.is(vl(t), vl(e));
}
var os, Go, ju, qu, zu;
function Sf() {
  if (os === void 0) {
    os = window, Go = document, ju = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    qu = Cr(e, "firstChild").get, zu = Cr(e, "nextSibling").get, dl(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), dl(n) && (n.__t = void 0);
  }
}
function Dr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function ji(t) {
  return qu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Da(t) {
  return zu.call(t);
}
function ce(t, e) {
  return /* @__PURE__ */ ji(t);
}
function z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ji(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Da(n) : n;
  }
}
function me(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Da(r);
  return r;
}
function Af(t) {
  t.textContent = "";
}
function jo() {
  return !1;
}
function Cf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, cr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let ml = !1;
function xf() {
  ml || (ml = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = n.__on_r) == null || e.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Ji(t) {
  var e = Be, n = Ve;
  ln(null), Wn(null);
  try {
    return t();
  } finally {
    ln(e), Wn(n);
  }
}
function Wu(t, e, n, r = n) {
  t.addEventListener(e, () => Ji(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), xf();
}
function Xu(t) {
  Ve === null && Be === null && Kd(), Be !== null && Be.f & Cn && Ve === null && Xd(), di && Wd();
}
function Tf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Xn(t, e, n, r = !0) {
  var i = Ve;
  i !== null && i.f & Hn && (t |= Hn);
  var a = {
    ctx: st,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | gn,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Ia(a), a.f |= Os;
    } catch (l) {
      throw Vt(a), l;
    }
  else e !== null && ai(a);
  if (r) {
    var s = a;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Yi) && (s = s.first), s !== null && (s.parent = i, i !== null && Tf(s, i), Be !== null && Be.f & nn && !(t & li))) {
      var u = (
        /** @type {Derived} */
        Be
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function wf() {
  return Be !== null && !Dn;
}
function Ds(t) {
  const e = Xn(ws, null, !1);
  return en(e, Xt), e.teardown = t, e;
}
function we(t) {
  Xu();
  var e = (
    /** @type {Effect} */
    Ve.f
  ), n = !Be && (e & dr) !== 0 && (e & Os) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      st
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Ku(t);
}
function Ku(t) {
  return Xn(No | Tu, t, !1);
}
function Of(t) {
  return Xu(), Xn(ws | Tu, t, !0);
}
function Lf(t) {
  or.ensure();
  const e = Xn(li | Yi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Tr(e, () => {
      Vt(e), r(void 0);
    }) : (Vt(e), r(void 0));
  });
}
function ci(t) {
  return Xn(No, t, !1);
}
function Rf(t) {
  return Xn(Ls | Yi, t, !0);
}
function Ma(t, e = 0) {
  return Xn(ws | e, t, !0);
}
function Le(t, e = [], n = []) {
  Fu(e, n, (r) => {
    Xn(ws, () => t(...r.map(o)), !0);
  });
}
function Mr(t, e = 0) {
  var n = Xn(Or | e, t, !0);
  return n;
}
function Wt(t, e = !0) {
  return Xn(dr | Yi, t, !0, e);
}
function Zu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = di, r = Be;
    pl(!0), ln(null);
    try {
      e.call(null);
    } finally {
      pl(n), ln(r);
    }
  }
}
function Yu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ji(() => {
      i.abort(xi);
    });
    var r = n.next;
    n.f & li ? n.parent = null : Vt(n, e), n = r;
  }
}
function Df(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & dr || Vt(e), e = n;
  }
}
function Vt(t, e = !0) {
  var n = !1;
  (e || t.f & jd) && t.nodes_start !== null && t.nodes_end !== null && (Mf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Yu(t, e && !n), ls(t, 0), en(t, ui);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Zu(t);
  var i = t.parent;
  i !== null && i.first !== null && Qu(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Mf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Da(t)
    );
    t.remove(), t = n;
  }
}
function Qu(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Tr(t, e) {
  var n = [];
  qo(t, n, !0), Ju(n, () => {
    Vt(t), e && e();
  });
}
function Ju(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function qo(t, e, n) {
  if (!(t.f & Hn)) {
    if (t.f ^= Hn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Rr) !== 0 || (r.f & dr) !== 0;
      qo(r, e, a ? n : !1), r = i;
    }
  }
}
function Ms(t) {
  $u(t, !0);
}
function $u(t, e) {
  if (t.f & Hn) {
    t.f ^= Hn, t.f & Xt || (en(t, gn), ai(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Rr) !== 0 || (n.f & dr) !== 0;
      $u(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Ri = !1;
function gl(t) {
  Ri = t;
}
let di = !1;
function pl(t) {
  di = t;
}
let Be = null, Dn = !1;
function ln(t) {
  Be = t;
}
let Ve = null;
function Wn(t) {
  Ve = t;
}
let $t = null;
function ec(t) {
  Be !== null && ($t === null ? $t = [t] : $t.push(t));
}
let Qt = null, vn = 0, En = null;
function Hf(t) {
  En = t;
}
let tc = 1, ya = 0, ti = ya;
function bl(t) {
  ti = t;
}
let Sr = !1;
function nc() {
  return ++tc;
}
function Hs(t) {
  var h;
  var e = t.f;
  if (e & gn)
    return !0;
  if (e & Lr) {
    var n = t.deps, r = (e & Cn) !== 0;
    if (n !== null) {
      var i, a, s = (e & ss) !== 0, u = r && Ve !== null && !Sr, l = n.length;
      if ((s || u) && (Ve === null || !(Ve.f & ui))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= ss), u && d !== null && !(d.f & Cn) && (c.f ^= Cn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Hs(
          /** @type {Derived} */
          a
        ) && Bu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ve !== null && !Sr) && en(t, Xt);
  }
  return !1;
}
function rc(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !($t != null && $t.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & nn ? rc(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? en(a, gn) : a.f & Xt && en(a, Lr), ai(
        /** @type {Effect} */
        a
      ));
    }
}
function ic(t) {
  var p;
  var e = Qt, n = vn, r = En, i = Be, a = Sr, s = $t, u = st, l = Dn, c = ti, d = t.f;
  Qt = /** @type {null | Value[]} */
  null, vn = 0, En = null, Sr = (d & Cn) !== 0 && (Dn || !Ri || Be === null), Be = d & (dr | li) ? null : t, $t = null, Bi(t.ctx), Dn = !1, ti = ++ya, t.ac !== null && (Ji(() => {
    t.ac.abort(xi);
  }), t.ac = null);
  try {
    t.f |= lo;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), m = t.deps;
    if (Qt !== null) {
      var v;
      if (ls(t, vn), m !== null && vn > 0)
        for (m.length = vn + Qt.length, v = 0; v < Qt.length; v++)
          m[vn + v] = Qt[v];
      else
        t.deps = m = Qt;
      if (!Sr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & nn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = vn; v < m.length; v++)
          ((p = m[v]).reactions ?? (p.reactions = [])).push(t);
    } else m !== null && vn < m.length && (ls(t, vn), m.length = vn);
    if (La() && En !== null && !Dn && m !== null && !(t.f & (nn | Lr | gn)))
      for (v = 0; v < /** @type {Source[]} */
      En.length; v++)
        rc(
          En[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ya++, En !== null && (r === null ? r = En : r.push(.../** @type {Source[]} */
    En))), t.f & ei && (t.f ^= ei), f;
  } catch (b) {
    return Mu(b);
  } finally {
    t.f ^= lo, Qt = e, vn = n, En = r, Be = i, Sr = a, $t = s, Bi(u), Dn = l, ti = c;
  }
}
function Pf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = kd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & nn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Qt === null || !Qt.includes(e)) && (en(e, Lr), e.f & (Cn | ss) || (e.f ^= ss), ku(
    /** @type {Derived} **/
    e
  ), ls(
    /** @type {Derived} **/
    e,
    0
  ));
}
function ls(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Pf(t, n[r]);
}
function Ia(t) {
  var e = t.f;
  if (!(e & ui)) {
    en(t, Xt);
    var n = Ve, r = Ri;
    Ve = t, Ri = !0;
    try {
      e & Or ? Df(t) : Yu(t), Zu(t);
      var i = ic(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = tc;
      var a;
      Au && af && t.f & gn && t.deps;
    } finally {
      Ri = r, Ve = n;
    }
  }
}
async function ac() {
  await Promise.resolve(), cf();
}
function o(t) {
  var e = t.f, n = (e & nn) !== 0;
  if (Be !== null && !Dn) {
    var r = Ve !== null && (Ve.f & ui) !== 0;
    if (!r && !($t != null && $t.includes(t))) {
      var i = Be.deps;
      if (Be.f & lo)
        t.rv < ya && (t.rv = ya, Qt === null && i !== null && i[vn] === t ? vn++ : Qt === null ? Qt = [t] : (!Sr || !Qt.includes(t)) && Qt.push(t));
      else {
        (Be.deps ?? (Be.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Be] : a.includes(Be) || a.push(Be);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), u = s.parent;
    u !== null && !(u.f & Cn) && (s.f ^= Cn);
  }
  if (di) {
    if (xr.has(t))
      return xr.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var l = s.v;
      return (!(s.f & Xt) && s.reactions !== null || sc(s)) && (l = Vo(s)), xr.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, Bt != null && Bt.has(s))
      return Bt.get(s);
    Hs(s) && Bu(s);
  }
  if (Bt != null && Bt.has(t))
    return Bt.get(t);
  if (t.f & ei)
    throw t.v;
  return t.v;
}
function sc(t) {
  if (t.v === Ht) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (xr.has(e) || e.f & nn && sc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Nn(t) {
  var e = Dn;
  try {
    return Dn = !0, t();
  } finally {
    Dn = e;
  }
}
const Nf = -7169;
function en(t, e) {
  t.f = t.f & Nf | e;
}
function oc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (zn in t)
      go(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && zn in n && go(n);
      }
  }
}
function go(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        go(t[r], e);
      } catch {
      }
    const n = Po(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Cu(n);
      for (let i in r) {
        const a = r[i].get;
        if (a)
          try {
            a.call(t);
          } catch {
          }
      }
    }
  }
}
const lc = /* @__PURE__ */ new Set(), po = /* @__PURE__ */ new Set();
function zo(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || ga.call(e, a), !a.cancelBubble)
      return Ji(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? cr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Uf(t, e, n, r = {}) {
  var i = zo(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function lr(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = zo(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ds(() => {
    e.removeEventListener(t, s, a);
  });
}
function wn(t) {
  for (var e = 0; e < t.length; e++)
    lc.add(t[e]);
  for (var n of po)
    n(t);
}
let _l = null;
function ga(t) {
  var E;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((E = t.composedPath) == null ? void 0 : E.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  _l = t;
  var s = 0, u = _l === t && t.__root;
  if (u) {
    var l = i.indexOf(u);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || t.target, a !== e) {
    is(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Be, h = Ve;
    ln(null), Wn(null);
    try {
      for (var f, m = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Ts(p)) {
              var [b, ...I] = p;
              b.apply(a, [t, ...I]);
            } else
              p.call(a, t);
        } catch (A) {
          f ? m.push(A) : f = A;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        a = v;
      }
      if (f) {
        for (let A of m)
          queueMicrotask(() => {
            throw A;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ln(d), Wn(h);
    }
  }
}
function uc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function qi(t, e) {
  var n = (
    /** @type {Effect} */
    Ve
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function de(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = uc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ ji(i)));
    var s = (
      /** @type {TemplateNode} */
      r || ju ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ji(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      qi(u, l);
    } else
      qi(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ff(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        uc(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ ji(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ ji(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return qi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ct(t, e) {
  return /* @__PURE__ */ Ff(t, e, "svg");
}
function Et(t = "") {
  {
    var e = Dr(t + "");
    return qi(e, e), e;
  }
}
function J() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Dr();
  return t.append(e, n), qi(e, n), t;
}
function w(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function kf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Bf = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Vf(t) {
  return Bf.includes(t);
}
const Gf = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function jf(t) {
  return t = t.toLowerCase(), Gf[t] ?? t;
}
const qf = ["touchstart", "touchmove"];
function zf(t) {
  return qf.includes(t);
}
let us = !0;
function yl(t) {
  us = t;
}
function Ze(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Wf(t, e) {
  return Xf(t, e);
}
const _i = /* @__PURE__ */ new Map();
function Xf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0 }) {
  Sf();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var m = h[f];
      if (!u.has(m)) {
        u.add(m);
        var v = zf(m);
        e.addEventListener(m, ga, { passive: v });
        var p = _i.get(m);
        p === void 0 ? (document.addEventListener(m, ga, { passive: v }), _i.set(m, 1)) : _i.set(m, p + 1);
      }
    }
  };
  l(Ho(lc)), po.add(l);
  var c = void 0, d = Lf(() => {
    var h = n ?? e.appendChild(Dr());
    return vf(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          xe({});
          var m = (
            /** @type {ComponentContext} */
            st
          );
          m.c = a;
        }
        i && (r.$$events = i), us = s, c = t(f, r) || {}, us = !0, a && Te();
      }
    ), () => {
      var v;
      for (var f of u) {
        e.removeEventListener(f, ga);
        var m = (
          /** @type {number} */
          _i.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, ga), _i.delete(f)) : _i.set(f, m);
      }
      po.delete(l), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Kf.set(c, d), c;
}
let Kf = /* @__PURE__ */ new WeakMap();
function Se(t, e, ...n) {
  var r = t, i = fe, a;
  Mr(() => {
    i !== (i = e()) && (a && (Vt(a), a = null), a = Wt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Rr);
}
function ot(t) {
  st === null && Fo(), Qi && st.l !== null ? Zf(st).m.push(t) : we(() => {
    const e = Nn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function pn(t) {
  st === null && Fo(), ot(() => () => Nn(t));
}
function Zf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ae(t, e, n = !1) {
  var r = t, i = null, a = null, s = Ht, u = n ? Rr : 0, l = !1;
  const c = (m, v = !0) => {
    l = !0, f(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? i : a, v = s ? a : i;
    m && Ms(m), v && Tr(v, () => {
      s ? a = null : i = null;
    });
  }
  const f = (m, v) => {
    if (s !== (s = m)) {
      var p = jo(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Dr())), s ? i ?? (i = v && Wt(() => v(b))) : a ?? (a = v && Wt(() => v(b))), p) {
        var I = (
          /** @type {Batch} */
          it
        ), E = s ? i : a, A = s ? a : i;
        E && I.skipped_effects.delete(E), A && I.skipped_effects.add(A), I.add_callback(h);
      } else
        h();
    }
  };
  Mr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
let ni = null;
function Il(t) {
  ni = t;
}
function Ti(t, e) {
  return e;
}
function Yf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, s = 0; s < a; s++)
    qo(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Af(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(t, e[0].prev, e[a - 1].next);
  }
  Ju(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Bn(t, d.prev, d.next)), Vt(d.e, !u);
    }
  });
}
function rr(t, e, n, r, i, a = null) {
  var s = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    s = c.appendChild(Dr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Bo(() => {
    var I = n();
    return Ts(I) ? I : I == null ? [] : Ho(I);
  }), v, p;
  function b() {
    Qf(
      p,
      v,
      u,
      f,
      s,
      i,
      e,
      r,
      n
    ), a !== null && (v.length === 0 ? d ? Ms(d) : d = Wt(() => a(s)) : d !== null && Tr(d, () => {
      d = null;
    }));
  }
  Mr(() => {
    p ?? (p = /** @type {Effect} */
    Ve), v = /** @type {V[]} */
    o(m);
    var I = v.length;
    if (!(h && I === 0)) {
      h = I === 0;
      var E, A, _, S;
      if (jo()) {
        var y = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          it
        );
        for (A = 0; A < I; A += 1) {
          _ = v[A], S = r(_, A);
          var x = u.items.get(S) ?? f.get(S);
          x ? e & 3 && cc(x, _, A, e) : (E = dc(
            null,
            u,
            null,
            null,
            _,
            S,
            A,
            i,
            e,
            n,
            !0
          ), f.set(S, E)), y.add(S);
        }
        for (const [C, N] of u.items)
          y.has(C) || T.skipped_effects.add(N.e);
        T.add_callback(b);
      } else
        b();
      o(m);
    }
  });
}
function Qf(t, e, n, r, i, a, s, u, l) {
  var te, P, L, O;
  var c = (s & 8) !== 0, d = (s & 3) !== 0, h = e.length, f = n.items, m = n.first, v = m, p, b = null, I, E = [], A = [], _, S, y, T;
  if (c)
    for (T = 0; T < h; T += 1)
      _ = e[T], S = u(_, T), y = f.get(S), y !== void 0 && ((te = y.a) == null || te.measure(), (I ?? (I = /* @__PURE__ */ new Set())).add(y));
  for (T = 0; T < h; T += 1) {
    if (_ = e[T], S = u(_, T), y = f.get(S), y === void 0) {
      var x = r.get(S);
      if (x !== void 0) {
        r.delete(S), f.set(S, x);
        var C = b ? b.next : v;
        Bn(n, b, x), Bn(n, x, C), Vs(x, C, i), b = x;
      } else {
        var N = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        b = dc(
          N,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          S,
          T,
          a,
          s,
          l
        );
      }
      f.set(S, b), E = [], A = [], v = b.next;
      continue;
    }
    if (d && cc(y, _, T, s), y.e.f & Hn && (Ms(y.e), c && ((P = y.a) == null || P.unfix(), (I ?? (I = /* @__PURE__ */ new Set())).delete(y))), y !== v) {
      if (p !== void 0 && p.has(y)) {
        if (E.length < A.length) {
          var W = A[0], k;
          b = W.prev;
          var F = E[0], ue = E[E.length - 1];
          for (k = 0; k < E.length; k += 1)
            Vs(E[k], W, i);
          for (k = 0; k < A.length; k += 1)
            p.delete(A[k]);
          Bn(n, F.prev, ue.next), Bn(n, b, F), Bn(n, ue, W), v = W, b = ue, T -= 1, E = [], A = [];
        } else
          p.delete(y), Vs(y, v, i), Bn(n, y.prev, y.next), Bn(n, y, b === null ? n.first : b.next), Bn(n, b, y), b = y;
        continue;
      }
      for (E = [], A = []; v !== null && v.k !== S; )
        v.e.f & Hn || (p ?? (p = /* @__PURE__ */ new Set())).add(v), A.push(v), v = v.next;
      if (v === null)
        continue;
      y = v;
    }
    E.push(y), b = y, v = y.next;
  }
  if (v !== null || p !== void 0) {
    for (var G = p === void 0 ? [] : Ho(p); v !== null; )
      v.e.f & Hn || G.push(v), v = v.next;
    var V = G.length;
    if (V > 0) {
      var U = s & 4 && h === 0 ? i : null;
      if (c) {
        for (T = 0; T < V; T += 1)
          (L = G[T].a) == null || L.measure();
        for (T = 0; T < V; T += 1)
          (O = G[T].a) == null || O.fix();
      }
      Yf(n, G, U);
    }
  }
  c && cr(() => {
    var re;
    if (I !== void 0)
      for (y of I)
        (re = y.a) == null || re.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var X of r.values())
    Vt(X.e);
  r.clear();
}
function cc(t, e, n, r) {
  r & 1 && Gi(t.v, e), r & 2 ? Gi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function dc(t, e, n, r, i, a, s, u, l, c, d) {
  var h = ni, f = (l & 1) !== 0, m = (l & 16) === 0, v = f ? m ? /* @__PURE__ */ Vu(i, !1, !1) : si(i) : i, p = l & 2 ? si(s) : s, b = {
    i: p,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  ni = b;
  try {
    if (t === null) {
      var I = document.createDocumentFragment();
      I.append(t = Dr());
    }
    return b.e = Wt(() => u(
      /** @type {Node} */
      t,
      v,
      p,
      c
    ), rf), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    ni = h;
  }
}
function Vs(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, a = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); a !== null && a !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Da(a)
    );
    i.before(a), a = s;
  }
}
function Bn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function fr(t, e, n) {
  var r = t, i, a, s = null, u = null;
  function l() {
    a && (Tr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Mr(() => {
    if (i !== (i = e())) {
      var c = jo();
      if (i) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = Dr()), a && it.skipped_effects.add(a)), u = Wt(() => n(d, i));
      }
      c ? it.add_callback(l) : l();
    }
  }, Rr);
}
function El(t, e, n, r, i, a) {
  var s, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, h = ni;
  Mr(() => {
    const f = e() || null;
    var m = f === "svg" ? Ud : null;
    if (f !== s) {
      var v = ni;
      Il(h), d && (f === null ? Tr(d, () => {
        d = null, u = null;
      }) : f === u ? Ms(d) : (Vt(d), yl(!1))), f && f !== u && (d = Wt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), qi(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Dr())
          );
          r(l, p);
        }
        Ve.nodes_end = l, c.before(l);
      })), s = f, s && (u = s), yl(!0), Il(v);
    }
  }, Rr);
}
function Fe(t, e, n) {
  ci(() => {
    var r = Nn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ma(() => {
        var s = n();
        oc(s), i && ko(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Jf(t, e) {
  var n = void 0, r;
  Mr(() => {
    n !== (n = e()) && (r && (Vt(r), r = null), n && (r = Wt(() => {
      ci(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function fc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = fc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function $f() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = fc(t)) && (r && (r += " "), r += e);
  return r;
}
function hc(t) {
  return typeof t == "object" ? $f(t) : t ?? "";
}
const Sl = [...` 	
\r\f \v\uFEFF`];
function eh(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || Sl.includes(r[s - 1])) && (u === r.length || Sl.includes(r[u])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1) : s = u;
        }
  }
  return r === "" ? null : r;
}
function Al(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Gs(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function th(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Gs)), i && l.push(...Object.keys(i).map(Gs));
      var c = 0, d = -1;
      const p = t.length;
      for (var h = 0; h < p; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var m = Gs(t.substring(c, d).trim());
              if (!l.includes(m)) {
                f !== ";" && h++;
                var v = t.substring(c, h).trim();
                n += " " + v + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Al(r)), i && (n += Al(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Wo(t, e, n, r, i, a) {
  var s = t.__className;
  if (s !== n || s === void 0) {
    var u = eh(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function js(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function vt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = th(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (js(t, n == null ? void 0 : n[0], r[0]), js(t, n == null ? void 0 : n[1], r[1], "important")) : js(t, n, r));
  return r;
}
function bo(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Ts(e))
      return tf();
    for (var r of t.options)
      r.selected = e.includes(Cl(r));
    return;
  }
  for (r of t.options) {
    var i = Cl(r);
    if (Ef(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function nh(t) {
  var e = new MutationObserver(() => {
    bo(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Ds(() => {
    e.disconnect();
  });
}
function Cl(t) {
  return "__value" in t ? t.__value : t.value;
}
const oa = Symbol("class"), la = Symbol("style"), vc = Symbol("is custom element"), mc = Symbol("is html");
function xl(t, e) {
  var n = Xo(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function rh(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function ur(t, e, n, r) {
  var i = Xo(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[qd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && gc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function ih(t, e, n, r, i = !1, a = !1) {
  var s = Xo(t), u = s[vc], l = !s[mc], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = hc(n.class) : n[oa] && (n.class = null), n[la] && (n.style ?? (n.style = null));
  var f = gc(t);
  for (const A in n) {
    let _ = n[A];
    if (d && A === "value" && _ == null) {
      t.value = t.__value = "", c[A] = _;
      continue;
    }
    if (A === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Wo(t, m, _, r, e == null ? void 0 : e[oa], n[oa]), c[A] = _, c[oa] = n[oa];
      continue;
    }
    if (A === "style") {
      vt(t, _, e == null ? void 0 : e[la], n[la]), c[A] = _, c[la] = n[la];
      continue;
    }
    var v = c[A];
    if (!(_ === v && !(_ === void 0 && t.hasAttribute(A)))) {
      c[A] = _;
      var p = A[0] + A[1];
      if (p !== "$$")
        if (p === "on") {
          const S = {}, y = "$$" + A;
          let T = A.slice(2);
          var b = Vf(T);
          if (kf(T) && (T = T.slice(0, -7), S.capture = !0), !b && v) {
            if (_ != null) continue;
            t.removeEventListener(T, c[y], S), c[y] = null;
          }
          if (_ != null)
            if (b)
              t[`__${T}`] = _, wn([T]);
            else {
              let x = function(C) {
                c[A].call(this, C);
              };
              c[y] = zo(T, t, x, S);
            }
          else b && (t[`__${T}`] = void 0);
        } else if (A === "style")
          ur(t, A, _);
        else if (A === "autofocus")
          Cf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (A === "__value" || A === "value" && _ != null))
          t.value = t.__value = _;
        else if (A === "selected" && d)
          rh(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var I = A;
          l || (I = jf(I));
          var E = I === "defaultValue" || I === "defaultChecked";
          if (_ == null && !u && !E)
            if (s[A] = null, I === "value" || I === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                t
              );
              const y = e === void 0;
              if (I === "value") {
                let T = S.defaultValue;
                S.removeAttribute(I), S.defaultValue = T, S.value = S.__value = y ? T : null;
              } else {
                let T = S.defaultChecked;
                S.removeAttribute(I), S.defaultChecked = T, S.checked = y ? T : !1;
              }
            } else
              t.removeAttribute(A);
          else E || f.includes(I) && (u || typeof _ != "string") ? (t[I] = _, I in s && (s[I] = Ht)) : typeof _ != "function" && ur(t, I, _);
        }
    }
  }
  return c;
}
function Ge(t, e, n = [], r = [], i, a = !1, s = !1) {
  Fu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Mr(() => {
      var m = e(...u.map(o)), v = ih(
        t,
        l,
        m,
        i,
        a,
        s
      );
      h && d && "value" in m && bo(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        m[b] || Vt(c[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var p = m[b];
        b.description === Fd && (!l || p !== l[b]) && (c[b] && Vt(c[b]), c[b] = Wt(() => Jf(t, () => p))), v[b] = p;
      }
      l = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      ci(() => {
        bo(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), nh(f);
      });
    }
    h = !0;
  });
}
function Xo(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [vc]: t.nodeName.includes("-"),
      [mc]: t.namespaceURI === Nd
    })
  );
}
var Tl = /* @__PURE__ */ new Map();
function gc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = Tl.get(e);
  if (n) return n;
  Tl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = Cu(i);
    for (var s in r)
      r[s].set && n.push(s);
    i = Po(i);
  }
  return n;
}
const ah = () => performance.now(), ir = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => ah(),
  tasks: /* @__PURE__ */ new Set()
};
function pc() {
  const t = ir.now();
  ir.tasks.forEach((e) => {
    e.c(t) || (ir.tasks.delete(e), e.f());
  }), ir.tasks.size !== 0 && ir.tick(pc);
}
function sh(t) {
  let e;
  return ir.tasks.size === 0 && ir.tick(pc), {
    promise: new Promise((n) => {
      ir.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      ir.tasks.delete(e);
    }
  };
}
function Va(t, e) {
  Ji(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function oh(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function wl(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = oh(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const lh = (t) => t;
function uh(t, e, n) {
  var r = (
    /** @type {EachItem} */
    ni
  ), i, a, s, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        s = ds(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: l, width: c, height: d } = getComputedStyle(t);
        if (l !== "absolute" && l !== "fixed") {
          var h = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          u = {
            position: h.position,
            width: h.width,
            height: h.height,
            transform: h.transform
          }, h.position = "absolute", h.width = c, h.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var m = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            h.transform = h.transform ? `${h.transform} ${m}` : m;
          }
        }
      }
    },
    unfix() {
      if (u) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        l.position = u.position, l.width = u.width, l.height = u.height, l.transform = u.transform;
      }
    }
  }), r.a.element = t;
}
function cs(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, u = (t & 4) !== 0, l = s ? "both" : i ? "in" : "out", c, d = e.inert, h = e.style.overflow, f, m;
  function v() {
    return Ji(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var p = {
    is_global: u,
    in() {
      var A;
      if (e.inert = d, !i) {
        m == null || m.abort(), (A = m == null ? void 0 : m.reset) == null || A.call(m);
        return;
      }
      a || f == null || f.abort(), Va(e, "introstart"), f = ds(e, v(), m, 1, () => {
        Va(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = h;
      });
    },
    out(A) {
      if (!a) {
        A == null || A(), c = void 0;
        return;
      }
      e.inert = !0, Va(e, "outrostart"), m = ds(e, v(), f, 0, () => {
        Va(e, "outroend"), A == null || A();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    Ve
  );
  if ((b.transitions ?? (b.transitions = [])).push(p), i && us) {
    var I = u;
    if (!I) {
      for (var E = (
        /** @type {Effect | null} */
        b.parent
      ); E && E.f & Rr; )
        for (; (E = E.parent) && !(E.f & Or); )
          ;
      I = !E || (E.f & Os) !== 0;
    }
    I && ci(() => {
      Nn(() => p.in());
    });
  }
}
function ds(t, e, n, r, i) {
  var a = r === 1;
  if (Ci(e)) {
    var s, u = !1;
    return cr(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        s = ds(t, b, n, r, i);
      }
    }), {
      abort: () => {
        u = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: fe,
      deactivate: fe,
      reset: fe,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: d, easing: h = lh } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var m = wl(c(0, 1));
    f.push(m, m);
  }
  var v = () => 1 - r, p = t.animate(f, { duration: l, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var I = r - b, E = (
      /** @type {number} */
      e.duration * Math.abs(I)
    ), A = [];
    if (E > 0) {
      var _ = !1;
      if (c)
        for (var S = Math.ceil(E / 16.666666666666668), y = 0; y <= S; y += 1) {
          var T = b + I * h(y / S), x = wl(c(T, 1 - T));
          A.push(x), _ || (_ = x.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), v = () => {
        var C = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + I * h(C / E);
      }, d && sh(() => {
        if (p.playState !== "running") return !1;
        var C = v();
        return d(C, 1 - C), !0;
      });
    }
    p = t.animate(A, { duration: E, fill: "forwards" }), p.onfinish = () => {
      v = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = fe);
    },
    deactivate: () => {
      i = fe;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => v()
  };
}
function Ea(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Wu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = qs(t) ? zs(a) : a, n(a), it !== null && r.add(it), await ac(), a !== (a = e())) {
      var s = t.selectionStart, u = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", u !== null) {
        var c = t.value.length;
        s === u && u === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = s, t.selectionEnd = Math.min(u, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Nn(e) == null && t.value && (n(qs(t) ? zs(t.value) : t.value), it !== null && r.add(it)), Ma(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Qa ?? it
      );
      if (r.has(a))
        return;
    }
    qs(t) && i === zs(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function ch(t, e, n = e) {
  Wu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Nn(e) == null && n(t.checked), Ma(() => {
    var r = e();
    t.checked = !!r;
  });
}
function qs(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function zs(t) {
  return t === "" ? null : +t;
}
function Ol(t, e) {
  return t === e || (t == null ? void 0 : t[zn]) === e;
}
function Oe(t = {}, e, n, r) {
  return ci(() => {
    var i, a;
    return Ma(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Nn(() => {
        t !== n(...a) && (e(t, ...a), i && Ol(n(...i), t) && e(null, ...i));
      });
    }), () => {
      cr(() => {
        a && Ol(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function dh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    st
  ), n = e.l.u;
  if (!n) return;
  let r = () => oc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ra(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => o(s);
  }
  n.b.length && Of(() => {
    Ll(e, r), as(n.b);
  }), we(() => {
    const i = Nn(() => n.m.map(Gd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && we(() => {
    Ll(e, r), as(n.a);
  });
}
function Ll(t, e) {
  if (t.l.s)
    for (const n of t.l.s) o(n);
  e();
}
function Ko(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), fe;
  const r = Nn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const yi = [];
function fh(t, e) {
  return {
    subscribe: Ut(t, e).subscribe
  };
}
function Ut(t, e = fe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (ko(t, u) && (t = u, n)) {
      const l = !yi.length;
      for (const c of r)
        c[1](), yi.push(c, t);
      if (l) {
        for (let c = 0; c < yi.length; c += 2)
          yi[c][0](yi[c + 1]);
        yi.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      t
    ));
  }
  function s(u, l = fe) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || fe), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function $i(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return fh(n, (s, u) => {
    let l = !1;
    const c = [];
    let d = 0, h = fe;
    const f = () => {
      if (d)
        return;
      h();
      const v = e(r ? c[0] : c, s, u);
      a ? s(v) : h = typeof v == "function" ? v : fe;
    }, m = i.map(
      (v, p) => Ko(
        v,
        (b) => {
          c[p] = b, d &= ~(1 << p), l && f();
        },
        () => {
          d |= 1 << p;
        }
      )
    );
    return l = !0, f(), function() {
      as(m), h(), l = !1;
    };
  });
}
function bc(t) {
  let e;
  return Ko(t, (n) => e = n)(), e;
}
let Ga = !1, _o = Symbol();
function Pn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Vu(void 0),
    unsubscribe: fe
  });
  if (r.store !== t && !(_o in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = fe;
    else {
      var i = !0;
      r.unsubscribe = Ko(t, (a) => {
        i ? r.source.v = a : K(r.source, a);
      }), i = !1;
    }
  return t && _o in n ? bc(t) : o(r.source);
}
function Mn(t, e) {
  return t.set(e), e;
}
function Kn() {
  const t = {};
  function e() {
    Ds(() => {
      for (var n in t)
        t[n].unsubscribe();
      is(t, _o, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function hh(t) {
  var e = Ga;
  try {
    return Ga = !1, [t(), Ga];
  } finally {
    Ga = e;
  }
}
const vh = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return t.props[e];
  },
  set(t, e) {
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function qe(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    vh
  );
}
const mh = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Ci(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      Ci(i) && (i = i());
      const a = Cr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Ci(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Cr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === zn || e === wu) return !1;
    for (let n of t.props)
      if (Ci(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Ci(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function $e(...t) {
  return new Proxy({ props: t }, mh);
}
function g(t, e, n, r) {
  var A;
  var i = !Qi || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = s ? Nn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = zn in t || wu in t;
    d = ((A = Cr(t, e)) == null ? void 0 : A.set) ?? (h && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = hh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Yd(), d(f)));
  var v;
  if (i ? v = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? c() : (l = !0, _);
  } : v = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ !== void 0 && (u = /** @type {V} */
    void 0), _ === void 0 ? u : _;
  }, i && !(n & 4))
    return v;
  if (d) {
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, S) {
        return arguments.length > 0 ? ((!i || !S || p || m) && d(S ? v() : _), _) : v();
      }
    );
  }
  var b = !1, I = (n & 1 ? Ra : Bo)(() => (b = !1, v()));
  a && o(I);
  var E = (
    /** @type {Effect} */
    Ve
  );
  return (
    /** @type {() => V} */
    function(_, S) {
      if (arguments.length > 0) {
        const y = S ? o(I) : i && a ? Ce(_) : _;
        return K(I, y), b = !0, u !== void 0 && (u = y), _;
      }
      return di && b || E.f & ui ? I.v : o(I);
    }
  );
}
const gh = "5";
var Su;
typeof window < "u" && ((Su = window.__svelte ?? (window.__svelte = {})).v ?? (Su.v = /* @__PURE__ */ new Set())).add(gh);
function ph(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var bh = function(e) {
  return _h(e) && !yh(e);
};
function _h(t) {
  return !!t && typeof t == "object";
}
function yh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Sh(t);
}
var Ih = typeof Symbol == "function" && Symbol.for, Eh = Ih ? Symbol.for("react.element") : 60103;
function Sh(t) {
  return t.$$typeof === Eh;
}
function Ah(t) {
  return Array.isArray(t) ? [] : {};
}
function Sa(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? zi(Ah(t), t, e) : t;
}
function Ch(t, e, n) {
  return t.concat(e).map(function(r) {
    return Sa(r, n);
  });
}
function xh(t, e) {
  if (!e.customMerge)
    return zi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : zi;
}
function Th(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Rl(t) {
  return Object.keys(t).concat(Th(t));
}
function _c(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function wh(t, e) {
  return _c(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Oh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Rl(t).forEach(function(i) {
    r[i] = Sa(t[i], n);
  }), Rl(e).forEach(function(i) {
    wh(t, i) || (_c(t, i) && n.isMergeableObject(e[i]) ? r[i] = xh(i, n)(t[i], e[i], n) : r[i] = Sa(e[i], n));
  }), r;
}
function zi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Ch, n.isMergeableObject = n.isMergeableObject || bh, n.cloneUnlessOtherwiseSpecified = Sa;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Oh(t, e, n) : Sa(e, n);
}
zi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return zi(r, i, n);
  }, {});
};
var Lh = zi, Rh = Lh;
const Dh = /* @__PURE__ */ ph(Rh);
var yo = function(t, e) {
  return yo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, yo(t, e);
};
function nt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  yo(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var pe = function() {
  return pe = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, pe.apply(this, arguments);
};
function Mh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function yc(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (h) {
        s(h);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (h) {
        s(h);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function Zo(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = u(0), s.throw = u(1), s.return = u(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(c) {
    return function(d) {
      return l([c, d]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
      switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return n.label++, { value: c[1], done: !1 };
        case 5:
          n.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            n = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            n.label = c[1];
            break;
          }
          if (c[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = c;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(c);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      c = e.call(t, n);
    } catch (d) {
      c = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Pt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Wi(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function wr(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Di(t) {
  return this instanceof Di ? (this.v = t, this) : new Di(t);
}
function Hh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", s), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(m) {
    return function(v) {
      return Promise.resolve(v).then(m, h);
    };
  }
  function u(m, v) {
    r[m] && (i[m] = function(p) {
      return new Promise(function(b, I) {
        a.push([m, p, b, I]) > 1 || l(m, p);
      });
    }, v && (i[m] = v(i[m])));
  }
  function l(m, v) {
    try {
      c(r[m](v));
    } catch (p) {
      f(a[0][3], p);
    }
  }
  function c(m) {
    m.value instanceof Di ? Promise.resolve(m.value.v).then(d, h) : f(a[0][2], m);
  }
  function d(m) {
    l("next", m);
  }
  function h(m) {
    l("throw", m);
  }
  function f(m, v) {
    m(v), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Ph(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Pt == "function" ? Pt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(s) {
      return new Promise(function(u, l) {
        s = t[a](s), i(u, l, s.done, s.value);
      });
    };
  }
  function i(a, s, u, l) {
    Promise.resolve(l).then(function(c) {
      a({ value: c, done: u });
    }, s);
  }
}
function Ws(t, e) {
  var n = e && e.cache ? e.cache : Gh, r = e && e.serializer ? e.serializer : Bh, i = e && e.strategy ? e.strategy : Fh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Nh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Uh(t, e, n, r) {
  var i = Nh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function Ic(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function Ec(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Fh(t, e) {
  var n = t.length === 1 ? Uh : Ic;
  return Ec(t, this, n, e.cache.create(), e.serializer);
}
function kh(t, e) {
  return Ec(t, this, Ic, e.cache.create(), e.serializer);
}
var Bh = function() {
  return JSON.stringify(arguments);
}, Vh = (
  /** @class */
  function() {
    function t() {
      this.cache = /* @__PURE__ */ Object.create(null);
    }
    return t.prototype.get = function(e) {
      return this.cache[e];
    }, t.prototype.set = function(e, n) {
      this.cache[e] = n;
    }, t;
  }()
), Gh = {
  create: function() {
    return new Vh();
  }
}, Xs = {
  variadic: kh
}, ze;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ze || (ze = {}));
var ht;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ht || (ht = {}));
var Xi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Xi || (Xi = {}));
function Dl(t) {
  return t.type === ht.literal;
}
function jh(t) {
  return t.type === ht.argument;
}
function Sc(t) {
  return t.type === ht.number;
}
function Ac(t) {
  return t.type === ht.date;
}
function Cc(t) {
  return t.type === ht.time;
}
function xc(t) {
  return t.type === ht.select;
}
function Tc(t) {
  return t.type === ht.plural;
}
function qh(t) {
  return t.type === ht.pound;
}
function wc(t) {
  return t.type === ht.tag;
}
function Oc(t) {
  return !!(t && typeof t == "object" && t.type === Xi.number);
}
function Io(t) {
  return !!(t && typeof t == "object" && t.type === Xi.dateTime);
}
var Lc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, zh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Wh(t) {
  var e = {};
  return t.replace(zh, function(n) {
    var r = n.length;
    switch (n[0]) {
      case "G":
        e.era = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "y":
        e.year = r === 2 ? "2-digit" : "numeric";
        break;
      case "Y":
      case "u":
      case "U":
      case "r":
        throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
      case "q":
      case "Q":
        throw new RangeError("`q/Q` (quarter) patterns are not supported");
      case "M":
      case "L":
        e.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
        break;
      case "w":
      case "W":
        throw new RangeError("`w/W` (week) patterns are not supported");
      case "d":
        e.day = ["numeric", "2-digit"][r - 1];
        break;
      case "D":
      case "F":
      case "g":
        throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
      case "E":
        e.weekday = r === 4 ? "long" : r === 5 ? "narrow" : "short";
        break;
      case "e":
        if (r < 4)
          throw new RangeError("`e..eee` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "c":
        if (r < 4)
          throw new RangeError("`c..ccc` (weekday) patterns are not supported");
        e.weekday = ["short", "long", "narrow", "short"][r - 4];
        break;
      case "a":
        e.hour12 = !0;
        break;
      case "b":
      case "B":
        throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
      case "h":
        e.hourCycle = "h12", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "H":
        e.hourCycle = "h23", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "K":
        e.hourCycle = "h11", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "k":
        e.hourCycle = "h24", e.hour = ["numeric", "2-digit"][r - 1];
        break;
      case "j":
      case "J":
      case "C":
        throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
      case "m":
        e.minute = ["numeric", "2-digit"][r - 1];
        break;
      case "s":
        e.second = ["numeric", "2-digit"][r - 1];
        break;
      case "S":
      case "A":
        throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
      case "z":
        e.timeZoneName = r < 4 ? "short" : "long";
        break;
      case "Z":
      case "O":
      case "v":
      case "V":
      case "X":
      case "x":
        throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
    }
    return "";
  }), e;
}
var Xh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Kh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Xh).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], s = a.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = s[0], l = s.slice(1), c = 0, d = l; c < d.length; c++) {
      var h = d[c];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function Zh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Ml = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Rc = /^(@+)?(\+|#+)?[rs]?$/g, Yh = /(\*)(0+)|(#+)(0+)|(0+)/g, Dc = /^(0+)$/;
function Hl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Rc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function Mc(t) {
  switch (t) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function Qh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Dc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function Pl(t) {
  var e = {}, n = Mc(t);
  return n || e;
}
function Jh(t) {
  for (var e = {}, n = 0, r = t; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case "percent":
      case "%":
        e.style = "percent";
        continue;
      case "%x100":
        e.style = "percent", e.scale = 100;
        continue;
      case "currency":
        e.style = "currency", e.currency = i.options[0];
        continue;
      case "group-off":
      case ",_":
        e.useGrouping = !1;
        continue;
      case "precision-integer":
      case ".":
        e.maximumFractionDigits = 0;
        continue;
      case "measure-unit":
      case "unit":
        e.style = "unit", e.unit = Zh(i.options[0]);
        continue;
      case "compact-short":
      case "K":
        e.notation = "compact", e.compactDisplay = "short";
        continue;
      case "compact-long":
      case "KK":
        e.notation = "compact", e.compactDisplay = "long";
        continue;
      case "scientific":
        e = pe(pe(pe({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return pe(pe({}, l), Pl(c));
        }, {}));
        continue;
      case "engineering":
        e = pe(pe(pe({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return pe(pe({}, l), Pl(c));
        }, {}));
        continue;
      case "notation-simple":
        e.notation = "standard";
        continue;
      case "unit-width-narrow":
        e.currencyDisplay = "narrowSymbol", e.unitDisplay = "narrow";
        continue;
      case "unit-width-short":
        e.currencyDisplay = "code", e.unitDisplay = "short";
        continue;
      case "unit-width-full-name":
        e.currencyDisplay = "name", e.unitDisplay = "long";
        continue;
      case "unit-width-iso-code":
        e.currencyDisplay = "symbol";
        continue;
      case "scale":
        e.scale = parseFloat(i.options[0]);
        continue;
      case "rounding-mode-floor":
        e.roundingMode = "floor";
        continue;
      case "rounding-mode-ceiling":
        e.roundingMode = "ceil";
        continue;
      case "rounding-mode-down":
        e.roundingMode = "trunc";
        continue;
      case "rounding-mode-up":
        e.roundingMode = "expand";
        continue;
      case "rounding-mode-half-even":
        e.roundingMode = "halfEven";
        continue;
      case "rounding-mode-half-down":
        e.roundingMode = "halfTrunc";
        continue;
      case "rounding-mode-half-up":
        e.roundingMode = "halfExpand";
        continue;
      case "integer-width":
        if (i.options.length > 1)
          throw new RangeError("integer-width stems only accept a single optional option");
        i.options[0].replace(Yh, function(l, c, d, h, f, m) {
          if (c)
            e.minimumIntegerDigits = d.length;
          else {
            if (h && f)
              throw new Error("We currently do not support maximum integer digits");
            if (m)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (Dc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Ml.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Ml, function(l, c, d, h, f, m) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = pe(pe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = pe(pe({}, e), Hl(a)));
      continue;
    }
    if (Rc.test(i.stem)) {
      e = pe(pe({}, e), Hl(i.stem));
      continue;
    }
    var s = Mc(i.stem);
    s && (e = pe(pe({}, e), s));
    var u = Qh(i.stem);
    u && (e = pe(pe({}, e), u));
  }
  return e;
}
var ja = {
  "001": [
    "H",
    "h"
  ],
  419: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AD: [
    "H",
    "hB"
  ],
  AE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  AF: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  AG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  AL: [
    "h",
    "H",
    "hB"
  ],
  AM: [
    "H",
    "hB"
  ],
  AO: [
    "H",
    "hB"
  ],
  AR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  AS: [
    "h",
    "H"
  ],
  AT: [
    "H",
    "hB"
  ],
  AU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  AW: [
    "H",
    "hB"
  ],
  AX: [
    "H"
  ],
  AZ: [
    "H",
    "hB",
    "h"
  ],
  BA: [
    "H",
    "hB",
    "h"
  ],
  BB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BD: [
    "h",
    "hB",
    "H"
  ],
  BE: [
    "H",
    "hB"
  ],
  BF: [
    "H",
    "hB"
  ],
  BG: [
    "H",
    "hB",
    "h"
  ],
  BH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  BI: [
    "H",
    "h"
  ],
  BJ: [
    "H",
    "hB"
  ],
  BL: [
    "H",
    "hB"
  ],
  BM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BN: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  BO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  BQ: [
    "H"
  ],
  BR: [
    "H",
    "hB"
  ],
  BS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  BT: [
    "h",
    "H"
  ],
  BW: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  BY: [
    "H",
    "h"
  ],
  BZ: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CA: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  CC: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CD: [
    "hB",
    "H"
  ],
  CF: [
    "H",
    "h",
    "hB"
  ],
  CG: [
    "H",
    "hB"
  ],
  CH: [
    "H",
    "hB",
    "h"
  ],
  CI: [
    "H",
    "hB"
  ],
  CK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CL: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CM: [
    "H",
    "h",
    "hB"
  ],
  CN: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  CO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CP: [
    "H"
  ],
  CR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CU: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  CV: [
    "H",
    "hB"
  ],
  CW: [
    "H",
    "hB"
  ],
  CX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  CY: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  CZ: [
    "H"
  ],
  DE: [
    "H",
    "hB"
  ],
  DG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  DJ: [
    "h",
    "H"
  ],
  DK: [
    "H"
  ],
  DM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  DO: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  DZ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  EC: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  EE: [
    "H",
    "hB"
  ],
  EG: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  EH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  ER: [
    "h",
    "H"
  ],
  ES: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  ET: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  FI: [
    "H"
  ],
  FJ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  FM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  FO: [
    "H",
    "h"
  ],
  FR: [
    "H",
    "hB"
  ],
  GA: [
    "H",
    "hB"
  ],
  GB: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GD: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GE: [
    "H",
    "hB",
    "h"
  ],
  GF: [
    "H",
    "hB"
  ],
  GG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GH: [
    "h",
    "H"
  ],
  GI: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  GL: [
    "H",
    "h"
  ],
  GM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GN: [
    "H",
    "hB"
  ],
  GP: [
    "H",
    "hB"
  ],
  GQ: [
    "H",
    "hB",
    "h",
    "hb"
  ],
  GR: [
    "h",
    "H",
    "hb",
    "hB"
  ],
  GT: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  GU: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  GW: [
    "H",
    "hB"
  ],
  GY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  HK: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  HN: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  HR: [
    "H",
    "hB"
  ],
  HU: [
    "H",
    "h"
  ],
  IC: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  ID: [
    "H"
  ],
  IE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IL: [
    "H",
    "hB"
  ],
  IM: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IN: [
    "h",
    "H"
  ],
  IO: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  IQ: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  IR: [
    "hB",
    "H"
  ],
  IS: [
    "H"
  ],
  IT: [
    "H",
    "hB"
  ],
  JE: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  JM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  JO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  JP: [
    "H",
    "K",
    "h"
  ],
  KE: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  KG: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KH: [
    "hB",
    "h",
    "H",
    "hb"
  ],
  KI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KM: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  KN: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KP: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  KW: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  KY: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  KZ: [
    "H",
    "hB"
  ],
  LA: [
    "H",
    "hb",
    "hB",
    "h"
  ],
  LB: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  LC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LI: [
    "H",
    "hB",
    "h"
  ],
  LK: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  LR: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  LS: [
    "h",
    "H"
  ],
  LT: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  LU: [
    "H",
    "h",
    "hB"
  ],
  LV: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  LY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MA: [
    "H",
    "h",
    "hB",
    "hb"
  ],
  MC: [
    "H",
    "hB"
  ],
  MD: [
    "H",
    "hB"
  ],
  ME: [
    "H",
    "hB",
    "h"
  ],
  MF: [
    "H",
    "hB"
  ],
  MG: [
    "H",
    "h"
  ],
  MH: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MK: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ML: [
    "H"
  ],
  MM: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  MN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MO: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MP: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MQ: [
    "H",
    "hB"
  ],
  MR: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  MS: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  MT: [
    "H",
    "h"
  ],
  MU: [
    "H",
    "h"
  ],
  MV: [
    "H",
    "h"
  ],
  MW: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  MX: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  MY: [
    "hb",
    "hB",
    "h",
    "H"
  ],
  MZ: [
    "H",
    "hB"
  ],
  NA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NC: [
    "H",
    "hB"
  ],
  NE: [
    "H"
  ],
  NF: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NG: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NI: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  NL: [
    "H",
    "hB"
  ],
  NO: [
    "H",
    "h"
  ],
  NP: [
    "H",
    "h",
    "hB"
  ],
  NR: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NU: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  NZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  OM: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PA: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PF: [
    "H",
    "h",
    "hB"
  ],
  PG: [
    "h",
    "H"
  ],
  PH: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PK: [
    "h",
    "hB",
    "H"
  ],
  PL: [
    "H",
    "h"
  ],
  PM: [
    "H",
    "hB"
  ],
  PN: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  PR: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  PS: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  PT: [
    "H",
    "hB"
  ],
  PW: [
    "h",
    "H"
  ],
  PY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  QA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  RE: [
    "H",
    "hB"
  ],
  RO: [
    "H",
    "hB"
  ],
  RS: [
    "H",
    "hB",
    "h"
  ],
  RU: [
    "H"
  ],
  RW: [
    "H",
    "h"
  ],
  SA: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SB: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SC: [
    "H",
    "h",
    "hB"
  ],
  SD: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SE: [
    "H"
  ],
  SG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SH: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SI: [
    "H",
    "hB"
  ],
  SJ: [
    "H"
  ],
  SK: [
    "H"
  ],
  SL: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  SM: [
    "H",
    "h",
    "hB"
  ],
  SN: [
    "H",
    "h",
    "hB"
  ],
  SO: [
    "h",
    "H"
  ],
  SR: [
    "H",
    "hB"
  ],
  SS: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ST: [
    "H",
    "hB"
  ],
  SV: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  SX: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  SY: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  SZ: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  TC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TD: [
    "h",
    "H",
    "hB"
  ],
  TF: [
    "H",
    "h",
    "hB"
  ],
  TG: [
    "H",
    "hB"
  ],
  TH: [
    "H",
    "h"
  ],
  TJ: [
    "H",
    "h"
  ],
  TL: [
    "H",
    "hB",
    "hb",
    "h"
  ],
  TM: [
    "H",
    "h"
  ],
  TN: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  TO: [
    "h",
    "H"
  ],
  TR: [
    "H",
    "hB"
  ],
  TT: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  TW: [
    "hB",
    "hb",
    "h",
    "H"
  ],
  TZ: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UA: [
    "H",
    "hB",
    "h"
  ],
  UG: [
    "hB",
    "hb",
    "H",
    "h"
  ],
  UM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  US: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  UY: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  UZ: [
    "H",
    "hB",
    "h"
  ],
  VA: [
    "H",
    "h",
    "hB"
  ],
  VC: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VE: [
    "h",
    "H",
    "hB",
    "hb"
  ],
  VG: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VI: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  VN: [
    "H",
    "h"
  ],
  VU: [
    "h",
    "H"
  ],
  WF: [
    "H",
    "hB"
  ],
  WS: [
    "h",
    "H"
  ],
  XK: [
    "H",
    "hB",
    "h"
  ],
  YE: [
    "h",
    "hB",
    "hb",
    "H"
  ],
  YT: [
    "H",
    "hB"
  ],
  ZA: [
    "H",
    "h",
    "hb",
    "hB"
  ],
  ZM: [
    "h",
    "hb",
    "H",
    "hB"
  ],
  ZW: [
    "H",
    "h"
  ],
  "af-ZA": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "ar-001": [
    "h",
    "hB",
    "hb",
    "H"
  ],
  "ca-ES": [
    "H",
    "h",
    "hB"
  ],
  "en-001": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-HK": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "en-IL": [
    "H",
    "h",
    "hb",
    "hB"
  ],
  "en-MY": [
    "h",
    "hb",
    "H",
    "hB"
  ],
  "es-BR": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-ES": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "es-GQ": [
    "H",
    "h",
    "hB",
    "hb"
  ],
  "fr-CA": [
    "H",
    "h",
    "hB"
  ],
  "gl-ES": [
    "H",
    "h",
    "hB"
  ],
  "gu-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "hi-IN": [
    "hB",
    "h",
    "H"
  ],
  "it-CH": [
    "H",
    "h",
    "hB"
  ],
  "it-IT": [
    "H",
    "h",
    "hB"
  ],
  "kn-IN": [
    "hB",
    "h",
    "H"
  ],
  "ml-IN": [
    "hB",
    "h",
    "H"
  ],
  "mr-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "pa-IN": [
    "hB",
    "hb",
    "h",
    "H"
  ],
  "ta-IN": [
    "hB",
    "h",
    "hb",
    "H"
  ],
  "te-IN": [
    "hB",
    "h",
    "H"
  ],
  "zu-ZA": [
    "H",
    "hB",
    "hb",
    "h"
  ]
};
function $h(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var s = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = ev(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function ev(t) {
  var e = t.hourCycle;
  if (e === void 0 && // @ts-ignore hourCycle(s) is not identified yet
  t.hourCycles && // @ts-ignore
  t.hourCycles.length && (e = t.hourCycles[0]), e)
    switch (e) {
      case "h24":
        return "k";
      case "h23":
        return "H";
      case "h12":
        return "h";
      case "h11":
        return "K";
      default:
        throw new Error("Invalid hourCycle");
    }
  var n = t.language, r;
  n !== "root" && (r = t.maximize().region);
  var i = ja[r || ""] || ja[n || ""] || ja["".concat(n, "-001")] || ja["001"];
  return i[0];
}
var Ks, tv = new RegExp("^".concat(Lc.source, "*")), nv = new RegExp("".concat(Lc.source, "*$"));
function Xe(t, e) {
  return { start: t, end: e };
}
var rv = !!String.prototype.startsWith && "_a".startsWith("a", 1), iv = !!String.fromCodePoint, av = !!Object.fromEntries, sv = !!String.prototype.codePointAt, ov = !!String.prototype.trimStart, lv = !!String.prototype.trimEnd, uv = !!Number.isSafeInteger, cv = uv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, Eo = !0;
try {
  var dv = Pc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Eo = ((Ks = dv.exec("a")) === null || Ks === void 0 ? void 0 : Ks[0]) === "a";
} catch {
  Eo = !1;
}
var Nl = rv ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), So = iv ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", i = e.length, a = 0, s; i > a; ) {
      if (s = e[a++], s > 1114111)
        throw RangeError(s + " is not a valid code point");
      r += s < 65536 ? String.fromCharCode(s) : String.fromCharCode(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
    }
    return r;
  }
), Ul = (
  // native
  av ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], s = a[0], u = a[1];
        n[s] = u;
      }
      return n;
    }
  )
), Hc = sv ? (
  // Native
  function(e, n) {
    return e.codePointAt(n);
  }
) : (
  // IE 11
  function(e, n) {
    var r = e.length;
    if (!(n < 0 || n >= r)) {
      var i = e.charCodeAt(n), a;
      return i < 55296 || i > 56319 || n + 1 === r || (a = e.charCodeAt(n + 1)) < 56320 || a > 57343 ? i : (i - 55296 << 10) + (a - 56320) + 65536;
    }
  }
), fv = ov ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(tv, "");
  }
), hv = lv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(nv, "");
  }
);
function Pc(t, e) {
  return new RegExp(t, e);
}
var Ao;
if (Eo) {
  var Fl = Pc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  Ao = function(e, n) {
    var r;
    Fl.lastIndex = n;
    var i = Fl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  Ao = function(e, n) {
    for (var r = []; ; ) {
      var i = Hc(e, n);
      if (i === void 0 || Nc(i) || pv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return So.apply(void 0, r);
  };
var vv = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.message = e, this.position = { offset: 0, line: 1, column: 1 }, this.ignoreTag = !!n.ignoreTag, this.locale = n.locale, this.requiresOtherClause = !!n.requiresOtherClause, this.shouldParseSkeletons = !!n.shouldParseSkeletons;
    }
    return t.prototype.parse = function() {
      if (this.offset() !== 0)
        throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1);
    }, t.prototype.parseMessage = function(e, n, r) {
      for (var i = []; !this.isEOF(); ) {
        var a = this.char();
        if (a === 123) {
          var s = this.parseArgument(e, r);
          if (s.err)
            return s;
          i.push(s.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: ht.pound,
              location: Xe(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(ze.UNMATCHED_CLOSING_TAG, Xe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && Co(this.peek() || 0)) {
            var s = this.parseTag(e, n);
            if (s.err)
              return s;
            i.push(s.val);
          } else {
            var s = this.parseLiteral(e, n);
            if (s.err)
              return s;
            i.push(s.val);
          }
        }
      }
      return { val: i, err: null };
    }, t.prototype.parseTag = function(e, n) {
      var r = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>"))
        return {
          val: {
            type: ht.literal,
            value: "<".concat(i, "/>"),
            location: Xe(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var s = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Co(this.char()))
            return this.error(ze.INVALID_TAG, Xe(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(ze.UNMATCHED_CLOSING_TAG, Xe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ht.tag,
              value: i,
              children: s,
              location: Xe(r, this.clonePosition())
            },
            err: null
          } : this.error(ze.INVALID_TAG, Xe(u, this.clonePosition())));
        } else
          return this.error(ze.UNCLOSED_TAG, Xe(r, this.clonePosition()));
      } else
        return this.error(ze.INVALID_TAG, Xe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && gv(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var s = this.tryParseUnquoted(e, n);
        if (s) {
          i += s;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var l = Xe(r, this.clonePosition());
      return {
        val: { type: ht.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !mv(this.peek() || 0)) ? (this.bump(), "<") : null;
    }, t.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || this.char() !== 39)
        return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if (e === "plural" || e === "selectordinal")
            break;
          return null;
        default:
          return null;
      }
      this.bump();
      var n = [this.char()];
      for (this.bump(); !this.isEOF(); ) {
        var r = this.char();
        if (r === 39)
          if (this.peek() === 39)
            n.push(39), this.bump();
          else {
            this.bump();
            break;
          }
        else
          n.push(r);
        this.bump();
      }
      return So.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), So(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(ze.EMPTY_ARGUMENT, Xe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(ze.MALFORMED_ARGUMENT, Xe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ht.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Xe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(ze.MALFORMED_ARGUMENT, Xe(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = Ao(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = Xe(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(ze.EXPECT_ARGUMENT_TYPE, Xe(s, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var c = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = hv(h.val);
            if (f.length === 0)
              return this.error(ze.EXPECT_ARGUMENT_STYLE, Xe(this.clonePosition(), this.clonePosition()));
            var m = Xe(d, this.clonePosition());
            c = { style: f, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var p = Xe(i, this.clonePosition());
          if (c && Nl(c == null ? void 0 : c.style, "::", 0)) {
            var b = fv(c.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(b, c.styleLocation);
              return h.err ? h : {
                val: { type: ht.number, value: r, location: p, style: h.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(ze.EXPECT_DATE_TIME_SKELETON, p);
              var I = b;
              this.locale && (I = $h(b, this.locale));
              var f = {
                type: Xi.dateTime,
                pattern: I,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Wh(I) : {}
              }, E = u === "date" ? ht.date : ht.time;
              return {
                val: { type: E, value: r, location: p, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? ht.number : u === "date" ? ht.date : ht.time,
              value: r,
              location: p,
              style: (a = c == null ? void 0 : c.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var A = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(ze.EXPECT_SELECT_ARGUMENT_OPTIONS, Xe(A, pe({}, A)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), S = 0;
          if (u !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Xe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(ze.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ze.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), S = h.val;
          }
          var y = this.tryParsePluralOrSelectOptions(e, u, n, _);
          if (y.err)
            return y;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var T = Xe(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: ht.select,
              value: r,
              options: Ul(y.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ht.plural,
              value: r,
              options: Ul(y.val),
              offset: S,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(ze.INVALID_ARGUMENT_TYPE, Xe(s, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(ze.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(ze.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Xe(i, this.clonePosition()));
            this.bump();
            break;
          }
          case 123: {
            e += 1, this.bump();
            break;
          }
          case 125: {
            if (e > 0)
              e -= 1;
            else
              return {
                val: this.message.slice(n.offset, this.offset()),
                err: null
              };
            break;
          }
          default:
            this.bump();
            break;
        }
      }
      return {
        val: this.message.slice(n.offset, this.offset()),
        err: null
      };
    }, t.prototype.parseNumberSkeletonFromString = function(e, n) {
      var r = [];
      try {
        r = Kh(e);
      } catch {
        return this.error(ze.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Xi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Jh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, s = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, ze.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Xe(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? ze.DUPLICATE_SELECT_ARGUMENT_SELECTOR : ze.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (s = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? ze.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : ze.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Xe(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(e + 1, n, r);
        if (v.err)
          return v;
        var p = this.tryParseArgumentClose(m);
        if (p.err)
          return p;
        u.push([
          c,
          {
            value: v.val,
            location: Xe(m, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? ze.EXPECT_SELECT_ARGUMENT_SELECTOR : ze.EXPECT_PLURAL_ARGUMENT_SELECTOR, Xe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(ze.MISSING_OTHER_CLAUSE, Xe(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          a = !0, s = s * 10 + (u - 48), this.bump();
        else
          break;
      }
      var l = Xe(i, this.clonePosition());
      return a ? (s *= r, cv(s) ? { val: s, err: null } : this.error(n, l)) : this.error(e, l);
    }, t.prototype.offset = function() {
      return this.position.offset;
    }, t.prototype.isEOF = function() {
      return this.offset() === this.message.length;
    }, t.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      };
    }, t.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length)
        throw Error("out of bound");
      var n = Hc(this.message, e);
      if (n === void 0)
        throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      return n;
    }, t.prototype.error = function(e, n) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: n
        }
      };
    }, t.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        e === 10 ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
      }
    }, t.prototype.bumpIf = function(e) {
      if (Nl(this.message, e, this.offset())) {
        for (var n = 0; n < e.length; n++)
          this.bump();
        return !0;
      }
      return !1;
    }, t.prototype.bumpUntil = function(e) {
      var n = this.offset(), r = this.message.indexOf(e, n);
      return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1);
    }, t.prototype.bumpTo = function(e) {
      if (this.offset() > e)
        throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
      for (e = Math.min(e, this.message.length); ; ) {
        var n = this.offset();
        if (n === e)
          break;
        if (n > e)
          throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
        if (this.bump(), this.isEOF())
          break;
      }
    }, t.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Nc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function Co(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function mv(t) {
  return Co(t) || t === 47;
}
function gv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Nc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function pv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function xo(t) {
  t.forEach(function(e) {
    if (delete e.location, xc(e) || Tc(e))
      for (var n in e.options)
        delete e.options[n].location, xo(e.options[n].value);
    else Sc(e) && Oc(e.style) || (Ac(e) || Cc(e)) && Io(e.style) ? delete e.style.location : wc(e) && xo(e.children);
  });
}
function bv(t, e) {
  e === void 0 && (e = {}), e = pe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new vv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(ze[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || xo(n.val), n.val;
}
var Ki;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Ki || (Ki = {}));
var Ps = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), kl = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Ki.INVALID_VALUE, a) || this;
    }
    return e;
  }(Ps)
), _v = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Ki.INVALID_VALUE, i) || this;
    }
    return e;
  }(Ps)
), yv = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Ki.MISSING_VALUE, r) || this;
    }
    return e;
  }(Ps)
), Yt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Yt || (Yt = {}));
function Iv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Yt.literal || n.type !== Yt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Ev(t) {
  return typeof t == "function";
}
function ts(t, e, n, r, i, a, s) {
  if (t.length === 1 && Dl(t[0]))
    return [
      {
        type: Yt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Dl(d)) {
      u.push({
        type: Yt.literal,
        value: d.value
      });
      continue;
    }
    if (qh(d)) {
      typeof a == "number" && u.push({
        type: Yt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new yv(h, s);
    var f = i[h];
    if (jh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Yt.literal : Yt.object,
        value: f
      });
      continue;
    }
    if (Ac(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : Io(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Yt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (Cc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : Io(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Yt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (Sc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Oc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), u.push({
        type: Yt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (wc(d)) {
      var v = d.children, p = d.value, b = i[p];
      if (!Ev(b))
        throw new _v(p, "function", s);
      var I = ts(v, e, n, r, i, a), E = b(I.map(function(S) {
        return S.value;
      }));
      Array.isArray(E) || (E = [E]), u.push.apply(u, E.map(function(S) {
        return {
          type: typeof S == "string" ? Yt.literal : Yt.object,
          value: S
        };
      }));
    }
    if (xc(d)) {
      var A = d.options[f] || d.options.other;
      if (!A)
        throw new kl(d.value, f, Object.keys(d.options), s);
      u.push.apply(u, ts(A.value, e, n, r, i));
      continue;
    }
    if (Tc(d)) {
      var A = d.options["=".concat(f)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new Ps(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Ki.MISSING_INTL_API, s);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        A = d.options[_] || d.options.other;
      }
      if (!A)
        throw new kl(d.value, f, Object.keys(d.options), s);
      u.push.apply(u, ts(A.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Iv(u);
}
function Sv(t, e) {
  return e ? pe(pe(pe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = pe(pe({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Av(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Sv(t[r], e[r]), n;
  }, pe({}, t)) : t;
}
function Zs(t) {
  return {
    create: function() {
      return {
        get: function(e) {
          return t[e];
        },
        set: function(e, n) {
          t[e] = n;
        }
      };
    }
  };
}
function Cv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ws(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, wr([void 0], n, !1)))();
    }, {
      cache: Zs(t.number),
      strategy: Xs.variadic
    }),
    getDateTimeFormat: Ws(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, wr([void 0], n, !1)))();
    }, {
      cache: Zs(t.dateTime),
      strategy: Xs.variadic
    }),
    getPluralRules: Ws(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, wr([void 0], n, !1)))();
    }, {
      cache: Zs(t.pluralRules),
      strategy: Xs.variadic
    })
  };
}
var Uc = (
  /** @class */
  function() {
    function t(e, n, r, i) {
      n === void 0 && (n = t.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(l) {
        var c = a.formatToParts(l);
        if (c.length === 1)
          return c[0].value;
        var d = c.reduce(function(h, f) {
          return !h.length || f.type !== Yt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return ts(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
      }, this.resolvedOptions = function() {
        var l;
        return {
          locale: ((l = a.resolvedLocale) === null || l === void 0 ? void 0 : l.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var s = i || {};
        s.formatters;
        var u = Mh(s, ["formatters"]);
        this.ast = t.__parse(e, pe(pe({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Av(t.formats, r), this.formatters = i && i.formatters || Cv(this.formatterCache);
    }
    return Object.defineProperty(t, "defaultLocale", {
      get: function() {
        return t.memoizedDefaultLocale || (t.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), t.memoizedDefaultLocale;
      },
      enumerable: !1,
      configurable: !0
    }), t.memoizedDefaultLocale = null, t.resolveLocale = function(e) {
      if (!(typeof Intl.Locale > "u")) {
        var n = Intl.NumberFormat.supportedLocalesOf(e);
        return n.length > 0 ? new Intl.Locale(n[0]) : new Intl.Locale(typeof e == "string" ? e : e[0]);
      }
    }, t.__parse = bv, t.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, t;
  }()
);
function xv(t, e) {
  if (e == null)
    return;
  if (e in t)
    return t[e];
  const n = e.split(".");
  let r = t;
  for (let i = 0; i < n.length; i++)
    if (typeof r == "object") {
      if (i > 0) {
        const a = n.slice(i, n.length).join(".");
        if (a in r) {
          r = r[a];
          break;
        }
      }
      r = r[n[i]];
    } else
      r = void 0;
  return r;
}
const Ar = {}, Tv = (t, e, n) => n && (e in Ar || (Ar[e] = {}), t in Ar[e] || (Ar[e][t] = n), n), Fc = (t, e) => {
  if (e == null)
    return;
  if (e in Ar && t in Ar[e])
    return Ar[e][t];
  const n = Pa(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Ov(i, t);
    if (a)
      return Tv(t, e, a);
  }
};
let Yo;
const Ha = Ut({});
function wv(t) {
  return Yo[t] || null;
}
function kc(t) {
  return t in Yo;
}
function Ov(t, e) {
  if (!kc(t))
    return null;
  const n = wv(t);
  return xv(n, e);
}
function Lv(t) {
  if (t == null)
    return;
  const e = Pa(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (kc(r))
      return r;
  }
}
function Bc(t, ...e) {
  delete Ar[t], Ha.update((n) => (n[t] = Dh.all([n[t] || {}, ...e]), n));
}
$i(
  [Ha],
  ([t]) => Object.keys(t)
);
Ha.subscribe((t) => Yo = t);
const ns = {};
function Rv(t, e) {
  ns[t].delete(e), ns[t].size === 0 && delete ns[t];
}
function Vc(t) {
  return ns[t];
}
function Dv(t) {
  return Pa(t).map((e) => {
    const n = Vc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function fs(t) {
  return t == null ? !1 : Pa(t).some(
    (e) => {
      var n;
      return (n = Vc(e)) == null ? void 0 : n.size;
    }
  );
}
function Mv(t, e) {
  return Promise.all(
    e.map((r) => (Rv(t, r), r().then((i) => i.default || i)))
  ).then((r) => Bc(t, ...r));
}
const ua = {};
function Gc(t) {
  if (!fs(t))
    return t in ua ? ua[t] : Promise.resolve();
  const e = Dv(t);
  return ua[t] = Promise.all(
    e.map(
      ([n, r]) => Mv(n, r)
    )
  ).then(() => {
    if (fs(t))
      return Gc(t);
    delete ua[t];
  }), ua[t];
}
var Bl = Object.getOwnPropertySymbols, Hv = Object.prototype.hasOwnProperty, Pv = Object.prototype.propertyIsEnumerable, Nv = (t, e) => {
  var n = {};
  for (var r in t)
    Hv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Bl)
    for (var r of Bl(t))
      e.indexOf(r) < 0 && Pv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Uv = {
  number: {
    scientific: { notation: "scientific" },
    engineering: { notation: "engineering" },
    compactLong: { notation: "compact", compactDisplay: "long" },
    compactShort: { notation: "compact", compactDisplay: "short" }
  },
  date: {
    short: { month: "numeric", day: "numeric", year: "2-digit" },
    medium: { month: "short", day: "numeric", year: "numeric" },
    long: { month: "long", day: "numeric", year: "numeric" },
    full: { weekday: "long", month: "long", day: "numeric", year: "numeric" }
  },
  time: {
    short: { hour: "numeric", minute: "numeric" },
    medium: { hour: "numeric", minute: "numeric", second: "numeric" },
    long: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    },
    full: {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short"
    }
  }
};
function Fv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Pa(
      t
    ).join('", "')}".${fs(Hr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const kv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Uv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, pa = kv;
function Zi() {
  return pa;
}
function Bv(t) {
  const e = t, { formats: n } = e, r = Nv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Uc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Fv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(pa, r, { initialLocale: i }), n && ("number" in n && Object.assign(pa.formats.number, n.number), "date" in n && Object.assign(pa.formats.date, n.date), "time" in n && Object.assign(pa.formats.time, n.time)), fi.set(i);
}
const Ys = Ut(!1);
var Vv = Object.defineProperty, Gv = Object.defineProperties, jv = Object.getOwnPropertyDescriptors, Vl = Object.getOwnPropertySymbols, qv = Object.prototype.hasOwnProperty, zv = Object.prototype.propertyIsEnumerable, Gl = (t, e, n) => e in t ? Vv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Wv = (t, e) => {
  for (var n in e || (e = {}))
    qv.call(e, n) && Gl(t, n, e[n]);
  if (Vl)
    for (var n of Vl(e))
      zv.call(e, n) && Gl(t, n, e[n]);
  return t;
}, Xv = (t, e) => Gv(t, jv(e));
let To;
const hs = Ut(null);
function jl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Pa(t, e = Zi().fallbackLocale) {
  const n = jl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...jl(e)])] : n;
}
function Hr() {
  return To ?? void 0;
}
hs.subscribe((t) => {
  To = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Kv = (t) => {
  if (t && Lv(t) && fs(t)) {
    const { loadingDelay: e } = Zi();
    let n;
    return typeof window < "u" && Hr() != null && e ? n = window.setTimeout(
      () => Ys.set(!0),
      e
    ) : Ys.set(!0), Gc(t).then(() => {
      hs.set(t);
    }).finally(() => {
      clearTimeout(n), Ys.set(!1);
    });
  }
  return hs.set(t);
}, fi = Xv(Wv({}, hs), {
  set: Kv
}), Zv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ns = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Yv = Object.defineProperty, vs = Object.getOwnPropertySymbols, jc = Object.prototype.hasOwnProperty, qc = Object.prototype.propertyIsEnumerable, ql = (t, e, n) => e in t ? Yv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Qo = (t, e) => {
  for (var n in e || (e = {}))
    jc.call(e, n) && ql(t, n, e[n]);
  if (vs)
    for (var n of vs(e))
      qc.call(e, n) && ql(t, n, e[n]);
  return t;
}, ea = (t, e) => {
  var n = {};
  for (var r in t)
    jc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && vs)
    for (var r of vs(t))
      e.indexOf(r) < 0 && qc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Aa = (t, e) => {
  const { formats: n } = Zi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Qv = Ns(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ea(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Aa("number", r)), new Intl.NumberFormat(n, i);
  }
), Jv = Ns(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ea(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Aa("date", r) : Object.keys(i).length === 0 && (i = Aa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), $v = Ns(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = ea(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Aa("time", r) : Object.keys(i).length === 0 && (i = Aa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), em = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = ea(e, [
    "locale"
  ]);
  return Qv(Qo({ locale: n }, r));
}, tm = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = ea(e, [
    "locale"
  ]);
  return Jv(Qo({ locale: n }, r));
}, nm = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = ea(e, [
    "locale"
  ]);
  return $v(Qo({ locale: n }, r));
}, rm = Ns(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Hr()) => new Uc(t, e, Zi().formats, {
    ignoreTag: Zi().ignoreTag
  })
), im = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: u,
    locale: l = Hr(),
    default: c
  } = s;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Fc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Zi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = rm(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, am = (t, e) => nm(e).format(t), sm = (t, e) => tm(e).format(t), om = (t, e) => em(e).format(t), lm = (t, e = Hr()) => Fc(t, e), um = $i([fi, Ha], () => im);
$i([fi], () => am);
$i([fi], () => sm);
$i([fi], () => om);
$i([fi, Ha], () => lm);
function cm(t, e) {
  Object.entries(t).forEach(([a, s]) => {
    Bc(a, s);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Zv();
  console.log("Initial: Setting the language to", i), Bv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const s = a;
    if (!s.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", s.detail.language), fi.set(s.detail.language);
  });
}
const dm = "Ort", fm = "Suche", hm = "UUID", vm = "File Name", mm = "Autor", gm = "Typ", pm = "Version", bm = "Datum", _m = "Fertig", ym = "Filtertypen", Im = "Filter Hinzufügen", Em = {
  location: dm,
  search: fm,
  uuid: hm,
  filename: vm,
  author: mm,
  type: gm,
  version: pm,
  date: bm,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: _m,
  filter_types: ym,
  add_filter: Im
}, Sm = "Location", Am = "Search", Cm = "UUID", xm = "Filename", Tm = "Author", wm = "Type", Om = "Version", Lm = "Date", Rm = "Done", Dm = "Filter Types", Mm = "Add Filter", Hm = {
  location: Sm,
  search: Am,
  uuid: Cm,
  filename: xm,
  author: Tm,
  type: wm,
  version: Om,
  date: Lm,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: Rm,
  filter_types: Dm,
  add_filter: Mm
};
function Ue(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function We(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function oi(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function ct(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class hi {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(e, n, r, i) {
    this.elementMap.has(e) || this.elementMap.set(e, {});
    const a = this.elementMap.get(e);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Uf(e, n, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, n, r) {
    const i = this.elementMap.get(e);
    if (i == null || !(n in i))
      return;
    const a = i[n], s = a.get(r);
    s != null && (s(), a.delete(r), a.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, n) => {
      for (let [r, i] of Object.entries(e))
        i.forEach((a, s) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function Z(t, e) {
  let n = [];
  if (e)
    for (let r = 0; r < e.length; r++) {
      const i = e[r], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? n.push(a(t, i[1])) : n.push(a(t));
    }
  return {
    update(r) {
      if ((r && r.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (r)
        for (let i = 0; i < r.length; i++) {
          const a = n[i];
          if (a && a.update) {
            const s = r[i];
            Array.isArray(s) && s.length > 1 ? a.update(s[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let r = 0; r < n.length; r++) {
        const i = n[r];
        i && i.destroy && i.destroy();
      }
    }
  };
}
var qa;
function Pm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = qa;
  if (typeof qa == "boolean" && !e)
    return qa;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (qa = r), r;
}
function Nm(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, s = i + n.top, u, l;
  if (t.type === "touchstart") {
    var c = t;
    u = c.changedTouches[0].pageX - a, l = c.changedTouches[0].pageY - s;
  } else {
    var d = t;
    u = d.pageX - a, l = d.pageY - s;
  }
  return { x: u, y: l };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Gt = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.init = function() {
    }, t.prototype.destroy = function() {
    }, t;
  }()
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Um(t) {
  return t === void 0 && (t = window), Fm(t) ? { passive: !0 } : !1;
}
function Fm(t) {
  t === void 0 && (t = window);
  var e = !1;
  try {
    var n = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, r = function() {
    };
    t.document.addEventListener("test", r, n), t.document.removeEventListener("test", r, n);
  } catch {
    e = !1;
  }
  return e;
}
const zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Um
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function km(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Wc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Wc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Bm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Na = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: km,
  estimateScrollWidth: Bm,
  matches: Wc
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Vm = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Gm = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, zl = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Wl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Xl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], za = [], jm = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(i) {
        r.activateImpl(i);
      }, r.deactivateHandler = function() {
        r.deactivateImpl();
      }, r.focusHandler = function() {
        r.handleFocus();
      }, r.blurHandler = function() {
        r.handleBlur();
      }, r.resizeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          browserSupportsCssVars: function() {
            return !0;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return !0;
          },
          deregisterDocumentInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          deregisterResizeHandler: function() {
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return !0;
          },
          isSurfaceDisabled: function() {
            return !0;
          },
          isUnbounded: function() {
            return !0;
          },
          registerDocumentInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          },
          registerResizeHandler: function() {
          },
          removeClass: function() {
          },
          updateCssVariable: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var i = e.cssClasses, a = i.ROOT, s = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(s), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, i = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(i), n.adapter.removeClass(a), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(n) {
      this.activateImpl(n);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(n) {
      var r = e.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, e.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, e.prototype.registerRootHandlers = function(n) {
      var r, i;
      if (n) {
        try {
          for (var a = Pt(Wl), s = a.next(); !s.done; s = a.next()) {
            var u = s.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            s && !s.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(n) {
      var r, i;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Pt(Xl), s = a.next(); !s.done; s = a.next()) {
            var u = s.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            s && !s.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var i = Pt(Wl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Pt(Xl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, r = e.strings, i = Object.keys(r);
      i.forEach(function(a) {
        a.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(r[a], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var a = this.previousActivationEvent, s = a && n !== void 0 && a.type !== n.type;
          if (!s) {
            i.isActivated = !0, i.isProgrammatic = n === void 0, i.activationEvent = n, i.wasActivatedByPointer = i.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var u = n !== void 0 && za.length > 0 && za.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (za.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              za = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, u = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, v = f.endPoint;
        d = m.x + "px, " + m.y + "px", h = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Nm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, s = i.isActivated, u = a || !s;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, zl.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var n = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var n = this, r = this.activationState;
      if (r.isActivated) {
        var i = pe({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(i), n.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(n) {
      var r = n.wasActivatedByPointer, i = n.wasElementMadeActive;
      (r || i) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), i = function() {
        var s = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, r = n.VAR_FG_SIZE, i = n.VAR_LEFT, a = n.VAR_TOP, s = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Qs = "mdc-dom-focus-sentinel", qm = (
  /** @class */
  function() {
    function t(e, n) {
      n === void 0 && (n = {}), this.root = e, this.options = n, this.elFocusedBeforeTrapFocus = null;
    }
    return t.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, t.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + Qs)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, t.prototype.wrapTabFocus = function(e) {
      var n = this, r = this.createSentinel(), i = this.createSentinel();
      r.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[a.length - 1].focus();
      }), i.addEventListener("focus", function() {
        var a = n.getFocusableElements(e);
        a.length > 0 && a[0].focus();
      }), e.insertBefore(r, e.children[0]), e.appendChild(i);
    }, t.prototype.focusInitialElement = function(e, n) {
      var r = 0;
      n && (r = Math.max(e.indexOf(n), 0)), e[r].focus();
    }, t.prototype.getFocusableElements = function(e) {
      var n = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return n.filter(function(r) {
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Qs) && !i, s = !1;
        if (a) {
          var u = getComputedStyle(r);
          s = u.display === "none" || u.visibility === "hidden";
        }
        return a && !s;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(Qs), e;
    }, t;
  }()
);
const zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: qm
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Pe = {
  UNKNOWN: "Unknown",
  BACKSPACE: "Backspace",
  ENTER: "Enter",
  SPACEBAR: "Spacebar",
  PAGE_UP: "PageUp",
  PAGE_DOWN: "PageDown",
  END: "End",
  HOME: "Home",
  ARROW_LEFT: "ArrowLeft",
  ARROW_UP: "ArrowUp",
  ARROW_RIGHT: "ArrowRight",
  ARROW_DOWN: "ArrowDown",
  DELETE: "Delete",
  ESCAPE: "Escape",
  TAB: "Tab"
}, rn = /* @__PURE__ */ new Set();
rn.add(Pe.BACKSPACE);
rn.add(Pe.ENTER);
rn.add(Pe.SPACEBAR);
rn.add(Pe.PAGE_UP);
rn.add(Pe.PAGE_DOWN);
rn.add(Pe.END);
rn.add(Pe.HOME);
rn.add(Pe.ARROW_LEFT);
rn.add(Pe.ARROW_UP);
rn.add(Pe.ARROW_RIGHT);
rn.add(Pe.ARROW_DOWN);
rn.add(Pe.DELETE);
rn.add(Pe.ESCAPE);
rn.add(Pe.TAB);
var cn = {
  BACKSPACE: 8,
  ENTER: 13,
  SPACEBAR: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46,
  ESCAPE: 27,
  TAB: 9
}, an = /* @__PURE__ */ new Map();
an.set(cn.BACKSPACE, Pe.BACKSPACE);
an.set(cn.ENTER, Pe.ENTER);
an.set(cn.SPACEBAR, Pe.SPACEBAR);
an.set(cn.PAGE_UP, Pe.PAGE_UP);
an.set(cn.PAGE_DOWN, Pe.PAGE_DOWN);
an.set(cn.END, Pe.END);
an.set(cn.HOME, Pe.HOME);
an.set(cn.ARROW_LEFT, Pe.ARROW_LEFT);
an.set(cn.ARROW_UP, Pe.ARROW_UP);
an.set(cn.ARROW_RIGHT, Pe.ARROW_RIGHT);
an.set(cn.ARROW_DOWN, Pe.ARROW_DOWN);
an.set(cn.DELETE, Pe.DELETE);
an.set(cn.ESCAPE, Pe.ESCAPE);
an.set(cn.TAB, Pe.TAB);
var Pr = /* @__PURE__ */ new Set();
Pr.add(Pe.PAGE_UP);
Pr.add(Pe.PAGE_DOWN);
Pr.add(Pe.END);
Pr.add(Pe.HOME);
Pr.add(Pe.ARROW_LEFT);
Pr.add(Pe.ARROW_UP);
Pr.add(Pe.ARROW_RIGHT);
Pr.add(Pe.ARROW_DOWN);
function At(t) {
  var e = t.key;
  if (rn.has(e))
    return e;
  var n = an.get(t.keyCode);
  return n || Pe.UNKNOWN;
}
const { applyPassive: Kl } = zc, { matches: Wm } = Na;
function Jt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (v) => t.classList.add(v), removeClass: h = (v) => t.classList.remove(v), addStyle: f = (v, p) => t.style.setProperty(v, p), initPromise: m = Promise.resolve() } = {}) {
  let v, p = new hi(), b = he("SMUI:addLayoutListener"), I, E = s, A = l, _ = c;
  function S() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && E !== s && (E = s, s ? v.activate() : s === !1 && v.deactivate()), e && !v ? (v = new jm({
      addClass: d,
      browserSupportsCssVars: () => Pm(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, x) => p.off(document.documentElement, T, x),
      deregisterInteractionHandler: (T, x) => p.off(l || t, T, x),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, x;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (x = window.pageYOffset) !== null && x !== void 0 ? x : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Wm(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, x) => {
        const C = Kl();
        p.on(document.documentElement, T, x, typeof C == "boolean" ? { capture: C } : C);
      },
      registerInteractionHandler: (T, x) => {
        const C = Kl();
        p.on(l || t, T, x, typeof C == "boolean" ? { capture: C } : C);
      },
      registerResizeHandler: (T) => p.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), m.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && m.then(() => {
      v && (v.destroy(), v = void 0, p.clear());
    }), v && (A !== l || _ !== c) && (A = l, _ = c, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  S(), b && (I = b(y));
  function y() {
    v && v.layout();
  }
  return {
    update(T) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: s,
        rippleElement: u,
        eventTarget: l,
        activeTarget: c,
        addClass: d,
        removeClass: h,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (x) => t.classList.add(x), removeClass: (x) => t.classList.remove(x), addStyle: (x, C) => t.style.setProperty(x, C), initPromise: Promise.resolve() }, T)), S();
    },
    destroy() {
      v && (v.destroy(), v = void 0, p.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), I && I();
    }
  };
}
function Xm(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, vi), a = g(e, "tag", 3, "span"), s = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = he("SMUI:label:context"), c = he("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var h = { getElement: d }, f = J(), m = z(f);
  {
    let v = /* @__PURE__ */ be(() => Ue({
      "mdc-button__label": l === "button",
      "mdc-fab__label": l === "fab",
      "mdc-tab__text-label": l === "tab",
      "mdc-image-list__label": l === "image-list",
      "mdc-snackbar__label": l === "snackbar",
      "mdc-banner__text": l === "banner",
      "mdc-segmented-button__label": l === "segmented-button",
      "mdc-data-table__pagination-rows-per-page-label": l === "data-table:pagination",
      "mdc-data-table__header-cell-label": l === "data-table:sortable-header-cell",
      [r()]: !0
    }));
    fr(m, i, (p, b) => {
      Oe(
        b(p, $e(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return o(v);
            }
          },
          () => l === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return c;
            }
          },
          () => s,
          {
            children: (I, E) => {
              var A = J(), _ = z(A);
              Se(_, () => e.children ?? fe), w(I, A);
            },
            $$slots: { default: !0 }
          }
        )),
        (I) => u = I,
        () => u
      );
    });
  }
  return w(t, f), Te(h);
}
function wo(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "on", 3, !1), a = g(e, "component", 3, vi), s = g(e, "tag", 3, "i"), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "on",
    "component",
    "tag",
    "children"
  ]), l;
  const c = /* @__PURE__ */ be(() => s() === "svg" || a() === Ym), d = he("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, m = J(), v = z(m);
  {
    let p = /* @__PURE__ */ be(() => Ue({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    fr(v, a, (b, I) => {
      Oe(
        I(b, $e(
          {
            get tag() {
              return s();
            },
            get use() {
              return n();
            },
            get class() {
              return o(p);
            },
            "aria-hidden": "true"
          },
          () => o(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (E, A) => {
              var _ = J(), S = z(_);
              Se(S, () => e.children ?? fe), w(E, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => l = E,
        () => l
      );
    });
  }
  return w(t, m), Te(f);
}
var Km = /* @__PURE__ */ Ct("<svg><!></svg>");
function vi(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "tag", 3, "div"), i = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ be(() => [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ].indexOf(r()) > -1);
  let s;
  function u() {
    return s;
  }
  var l = { getElement: u }, c = J(), d = z(c);
  {
    var h = (m) => {
      var v = Km();
      Ge(v, () => ({ ...i }));
      var p = ce(v);
      Se(p, () => e.children ?? fe), Oe(v, (b) => s = b, () => s), Fe(v, (b, I) => Z == null ? void 0 : Z(b, I), n), w(m, v);
    }, f = (m) => {
      var v = J(), p = z(v);
      {
        var b = (E) => {
          var A = J(), _ = z(A);
          El(_, r, !1, (S, y) => {
            Oe(S, (T) => s = T, () => s), Fe(S, (T, x) => Z == null ? void 0 : Z(T, x), n), Ge(S, () => ({ ...i }));
          }), w(E, A);
        }, I = (E) => {
          var A = J(), _ = z(A);
          El(_, r, !1, (S, y) => {
            Oe(S, (C) => s = C, () => s), Fe(S, (C, N) => Z == null ? void 0 : Z(C, N), n), Ge(S, () => ({ ...i }));
            var T = J(), x = z(T);
            Se(x, () => e.children ?? fe), w(y, T);
          }), w(E, A);
        };
        ae(
          p,
          (E) => {
            o(a) ? E(b) : E(I, !1);
          },
          !0
        );
      }
      w(m, v);
    };
    ae(d, (m) => {
      r() === "svg" ? m(h) : m(f, !1);
    });
  }
  return w(t, c), Te(l);
}
var Zm = /* @__PURE__ */ Ct("<svg><!></svg>");
function Ym(t, e) {
  xe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, u = Zm();
  Ge(u, () => ({ ...r }));
  var l = ce(u);
  return Se(l, () => e.children ?? fe), Oe(u, (c) => i = c, () => i), Fe(u, (c, d) => Z == null ? void 0 : Z(c, d), n), w(t, u), Te(s);
}
function Wa(t, e) {
  xe(e, !0);
  const [n, r] = Kn(), i = Ut(e.value);
  oe(e.key, i), we(() => {
    Mn(i, e.value);
  }), pn(() => {
    i.set(void 0);
  });
  var a = J(), s = z(a);
  Se(s, () => e.children ?? fe), w(t, a), Te(), r();
}
var Qm = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), Jm = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function ms(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "ripple", 3, !0), s = g(e, "color", 3, "primary"), u = g(e, "variant", 3, "text"), l = g(e, "touch", 3, !1), c = g(e, "action", 3, "close"), d = g(e, "defaultAction", 3, !1), h = g(e, "secondary", 3, !1), f = g(e, "component", 3, vi), m = g(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "tag",
    "children"
  ]), p, b = Ce({}), I = Ce({}), E = he("SMUI:button:context");
  const A = /* @__PURE__ */ be(() => E === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), _ = /* @__PURE__ */ be(() => E === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ be(() => E === "banner" ? {} : { secondary: h() });
  let y = e.disabled;
  we(() => {
    if (y !== e.disabled) {
      if (p) {
        const G = W();
        "blur" in G && G.blur();
      }
      y = v.disabled;
    }
  }), oe("SMUI:label:context", "button"), oe("SMUI:icon:context", "button");
  function T(G) {
    b[G] || (b[G] = !0);
  }
  function x(G) {
    (!(G in b) || b[G]) && (b[G] = !1);
  }
  function C(G, V) {
    I[G] != V && (V === "" || V == null ? delete I[G] : I[G] = V);
  }
  function N() {
    E === "banner" && We(W(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function W() {
    return p.getElement();
  }
  var k = { getElement: W }, F = J(), ue = z(F);
  {
    let G = /* @__PURE__ */ be(() => [
      [
        Jt,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: x,
          addStyle: C
        }
      ],
      ...n()
    ]), V = /* @__PURE__ */ be(() => Ue({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": E === "card:action",
      "mdc-card__action--button": E === "card:action",
      "mdc-dialog__button": E === "dialog:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__action": E === "snackbar:actions",
      "mdc-banner__secondary-action": E === "banner" && h(),
      "mdc-banner__primary-action": E === "banner" && !h(),
      "mdc-tooltip__action": E === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), U = /* @__PURE__ */ be(() => Object.entries(I).map(([X, te]) => `${X}: ${te};`).concat([i()]).join(" "));
    fr(ue, f, (X, te) => {
      Oe(
        te(X, $e(
          {
            get tag() {
              return m();
            },
            get use() {
              return o(G);
            },
            get class() {
              return o(V);
            },
            get style() {
              return o(U);
            }
          },
          () => o(A),
          () => o(_),
          () => o(S),
          {
            get href() {
              return e.href;
            }
          },
          () => v,
          {
            onclick: (P) => {
              var L;
              N(), (L = e.onclick) == null || L.call(e, P);
            },
            children: (P, L) => {
              var O = Jm(), re = me(z(O), 2);
              Se(re, () => e.children ?? fe);
              var ee = me(re);
              {
                var $ = (ye) => {
                  var B = Qm();
                  w(ye, B);
                };
                ae(ee, (ye) => {
                  l() && ye($);
                });
              }
              w(P, O);
            },
            $$slots: { default: !0 }
          }
        )),
        (P) => p = P,
        () => p
      );
    });
  }
  return w(t, F), Te(k);
}
function Xc(t, e) {
  xe(e, !0);
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "disabled", 3, !1), i = g(e, "variant", 3, "default"), a = g(e, "isAbortAction", 3, !1), s = g(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ be(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    ms(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return o(u);
      },
      children: (l, c) => {
        var d = J(), h = z(d);
        Se(h, () => e.children ?? fe), w(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  Te();
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Xa = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Jn = {
  ARIA_LABEL: "aria-label",
  ARIA_PRESSED: "aria-pressed",
  DATA_ARIA_LABEL_OFF: "data-aria-label-off",
  DATA_ARIA_LABEL_ON: "data-aria-label-on",
  CHANGE_EVENT: "MDCIconButtonToggle:change"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var $m = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Jn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          notifyChange: function() {
          },
          removeClass: function() {
          },
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this.adapter.getAttr(Jn.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(Jn.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(Jn.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Jn.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Xa.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Xa.ICON_BUTTON_ON) : this.adapter.removeClass(Xa.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(Jn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Jn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Jn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(Jn.ARIA_PRESSED, "" + n);
    }, e;
  }(Gt)
), eg = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), tg = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function ng(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(L) {
    return L === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), u = g(e, "ripple", 3, !0), l = g(e, "toggle", 3, !1), c = g(e, "pressed", 15, n), d = g(e, "touch", 3, !1), h = g(e, "displayFlex", 3, !0), f = g(e, "size", 3, "normal"), m = g(e, "component", 3, vi), v = g(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "tag",
    "children"
  ]), b, I, E = /* @__PURE__ */ Ie(Ce({})), A = Ce({}), _ = /* @__PURE__ */ Ie(Ce({})), S = he("SMUI:icon-button:context"), y = he("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ be(() => {
    if (S === "data-table:pagination")
      switch (e.action) {
        case "first-page":
          return { "data-first-page": "true" };
        case "prev-page":
          return { "data-prev-page": "true" };
        case "next-page":
          return { "data-next-page": "true" };
        case "last-page":
          return { "data-last-page": "true" };
        default:
          return { "data-action": "true" };
      }
    else return S === "dialog:header" || S === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let x = !!e.disabled;
  we(() => {
    if (x != !!e.disabled) {
      if (b) {
        const L = U();
        "blur" in L && L.blur();
      }
      x = !!e.disabled;
    }
  }), oe("SMUI:icon:context", "icon-button");
  let C = null;
  we(() => {
    b && U() && l() !== C && (l() && !I ? (I = new $m({
      addClass: W,
      hasClass: N,
      notifyChange: (L) => {
        V(L), We(U(), "SMUIIconButtonToggleChange", L);
      },
      removeClass: k,
      getAttr: ue,
      setAttr: G
    }), I.init()) : !l() && I && (I.destroy(), I = void 0, K(E, {}, !0), K(_, {}, !0)), C = l());
  }), we(() => {
    I && !r(c()) && I.isOn() !== c() && I.toggle(c());
  }), pn(() => {
    I && I.destroy();
  });
  function N(L) {
    return L in o(E) ? o(E)[L] : U().classList.contains(L);
  }
  function W(L) {
    o(E)[L] || (o(E)[L] = !0);
  }
  function k(L) {
    (!(L in o(E)) || o(E)[L]) && (o(E)[L] = !1);
  }
  function F(L, O) {
    A[L] != O && (O === "" || O == null ? delete A[L] : A[L] = O);
  }
  function ue(L) {
    return L in o(_) ? o(_)[L] ?? null : U().getAttribute(L);
  }
  function G(L, O) {
    o(_)[L] !== O && (o(_)[L] = O);
  }
  function V(L) {
    c(L.isOn);
  }
  function U() {
    return b.getElement();
  }
  var X = { getElement: U }, te = J(), P = z(te);
  {
    let L = /* @__PURE__ */ be(() => [
      [
        Jt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: W,
          removeClass: k,
          addStyle: F
        }
      ],
      ...i()
    ]), O = /* @__PURE__ */ be(() => Ue({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": h(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": S === "card:action",
      "mdc-card__action--icon": S === "card:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__dismiss": S === "snackbar:actions",
      "mdc-data-table__pagination-button": S === "data-table:pagination",
      "mdc-data-table__sort-icon-button": S === "data-table:sortable-header-cell",
      "mdc-dialog__close": (S === "dialog:header" || S === "dialog:sheet") && e.action === "close",
      ...o(E),
      [a()]: !0
    })), re = /* @__PURE__ */ be(() => Object.entries(A).map(([ye, B]) => `${ye}: ${B};`).concat([s()]).join(" ")), ee = /* @__PURE__ */ be(() => r(c()) ? null : c() ? "true" : "false"), $ = /* @__PURE__ */ be(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    fr(P, m, (ye, B) => {
      Oe(
        B(ye, $e(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(L);
            },
            get class() {
              return o(O);
            },
            get style() {
              return o(re);
            },
            get "aria-pressed"() {
              return o(ee);
            },
            get "aria-label"() {
              return o($);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return y;
            },
            get href() {
              return e.href;
            }
          },
          () => o(T),
          () => o(_),
          () => p,
          {
            onclick: (ie) => {
              var Y;
              I && I.handleClick(), S === "top-app-bar:navigation" && We(U(), "SMUITopAppBarIconButtonNav"), (Y = e.onclick) == null || Y.call(e, ie);
            },
            children: (ie, Y) => {
              var le = tg(), Ee = me(z(le), 2);
              Se(Ee, () => e.children ?? fe);
              var q = me(Ee);
              {
                var se = (Re) => {
                  var Ae = eg();
                  w(Re, Ae);
                };
                ae(q, (Re) => {
                  d() && Re(se);
                });
              }
              w(ie, le);
            },
            $$slots: { default: !0 }
          }
        )),
        (ie) => b = ie,
        () => b
      );
    });
  }
  return w(t, te), Te(X);
}
function rg(t, e) {
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "icon", 3, ""), i = g(e, "disabled", 3, !1);
  ng(t, {
    get disabled() {
      return i();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click(...a) {
        var s;
        (s = n()) == null || s.apply(this, a);
      }
    },
    children: (a, s) => {
      wo(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = Et();
          Le(() => Ze(c, r())), w(u, c);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ig = {
  LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
  LABEL_REQUIRED: "mdc-floating-label--required",
  LABEL_SHAKE: "mdc-floating-label--shake",
  ROOT: "mdc-floating-label"
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ag = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ig;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    }, e.prototype.getWidth = function() {
      return this.adapter.getWidth();
    }, e.prototype.shake = function(n) {
      var r = e.cssClasses.LABEL_SHAKE;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.float = function(n) {
      var r = e.cssClasses, i = r.LABEL_FLOAT_ABOVE, a = r.LABEL_SHAKE;
      n ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(n) {
      var r = e.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var n = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var jr = {
  LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
  LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var sg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return jr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setStyle: function() {
          },
          registerEventHandler: function() {
          },
          deregisterEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    }, e.prototype.activate = function() {
      this.adapter.removeClass(jr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(jr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(jr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(jr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(jr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(jr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var og = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Zl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, lg = {
  NO_LABEL: "mdc-notched-outline--no-label",
  OUTLINE_NOTCHED: "mdc-notched-outline--notched",
  OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ug = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return og;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Zl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          setNotchWidthProperty: function() {
          },
          removeNotchWidthProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.notch = function(n) {
      var r = e.cssClasses.OUTLINE_NOTCHED;
      n > 0 && (n += Zl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Js = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  INPUT_SELECTOR: ".mdc-text-field__input",
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-text-field__icon--leading",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  PREFIX_SELECTOR: ".mdc-text-field__affix--prefix",
  SUFFIX_SELECTOR: ".mdc-text-field__affix--suffix",
  TRAILING_ICON_SELECTOR: ".mdc-text-field__icon--trailing"
}, cg = {
  DISABLED: "mdc-text-field--disabled",
  FOCUSED: "mdc-text-field--focused",
  HELPER_LINE: "mdc-text-field-helper-line",
  INVALID: "mdc-text-field--invalid",
  LABEL_FLOATING: "mdc-text-field--label-floating",
  NO_LABEL: "mdc-text-field--no-label",
  OUTLINED: "mdc-text-field--outlined",
  ROOT: "mdc-text-field",
  TEXTAREA: "mdc-text-field--textarea",
  WITH_LEADING_ICON: "mdc-text-field--with-leading-icon",
  WITH_TRAILING_ICON: "mdc-text-field--with-trailing-icon",
  WITH_INTERNAL_COUNTER: "mdc-text-field--with-internal-counter"
}, Yl = {
  LABEL_SCALE: 0.75
}, dg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], fg = [
  "color",
  "date",
  "datetime-local",
  "month",
  "range",
  "time",
  "week"
];
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ql = ["mousedown", "touchstart"], Jl = ["click", "keydown"], hg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return i.isFocused = !1, i.receivedUserInput = !1, i.valid = !0, i.useNativeValidation = !0, i.validateOnValueChange = !0, i.helperText = r.helperText, i.characterCounter = r.characterCounter, i.leadingIcon = r.leadingIcon, i.trailingIcon = r.trailingIcon, i.inputFocusHandler = function() {
        i.activateFocus();
      }, i.inputBlurHandler = function() {
        i.deactivateFocus();
      }, i.inputInputHandler = function() {
        i.handleInput();
      }, i.setPointerXOffset = function(a) {
        i.setTransformOrigin(a);
      }, i.textFieldInteractionHandler = function() {
        i.handleTextFieldInteraction();
      }, i.validationAttributeChangeHandler = function(a) {
        i.handleValidationAttributeChange(a);
      }, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Js;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Yl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return fg.indexOf(n) >= 0;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldFloat", {
      get: function() {
        return this.shouldAlwaysFloat || this.isFocused || !!this.getValue() || this.isBadInput();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldShake", {
      get: function() {
        return !this.isFocused && !this.isValid() && !!this.getValue();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldAdapter} for typing information on parameters and
       * return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !0;
          },
          setInputAttr: function() {
          },
          removeInputAttr: function() {
          },
          registerTextFieldInteractionHandler: function() {
          },
          deregisterTextFieldInteractionHandler: function() {
          },
          registerInputInteractionHandler: function() {
          },
          deregisterInputInteractionHandler: function() {
          },
          registerValidationAttributeChangeHandler: function() {
            return new MutationObserver(function() {
            });
          },
          deregisterValidationAttributeChangeHandler: function() {
          },
          getNativeInput: function() {
            return null;
          },
          isFocused: function() {
            return !1;
          },
          activateLineRipple: function() {
          },
          deactivateLineRipple: function() {
          },
          setLineRippleTransformOrigin: function() {
          },
          shakeLabel: function() {
          },
          floatLabel: function() {
          },
          setLabelRequired: function() {
          },
          hasLabel: function() {
            return !1;
          },
          getLabelWidth: function() {
            return 0;
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n, r, i, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Pt(Ql), u = s.next(); !u.done; u = s.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Pt(Jl), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Pt(Ql), u = s.next(); !u.done; u = s.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Pt(Jl), d = c.next(); !d.done; d = c.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var n = this.adapter.getNativeInput();
      n && n.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(n) {
      var r = this;
      n.some(function(i) {
        return dg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Yl.LABEL_SCALE;
          this.adapter.notchOutline(r);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var r = n.touches, i = r ? r[0] : n, a = i.target.getBoundingClientRect(), s = i.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(s);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var n = this.isValid();
      this.styleValidity(n), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(n) {
      if (this.getValue() !== n && (this.getNativeInput().value = n), this.setcharacterCounter(n.length), this.validateOnValueChange) {
        var r = this.isValid();
        this.styleValidity(r);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(n) {
      this.valid = n, this.styleValidity(n);
      var r = !n && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(r);
    }, e.prototype.setValidateOnValueChange = function(n) {
      this.validateOnValueChange = n;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(n) {
      this.useNativeValidation = n;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(n) {
      this.getNativeInput().disabled = n, this.styleDisabled(n);
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.setTrailingIconAriaLabel = function(n) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(n);
    }, e.prototype.setTrailingIconContent = function(n) {
      this.trailingIcon && this.trailingIcon.setContent(n);
    }, e.prototype.setcharacterCounter = function(n) {
      if (this.characterCounter) {
        var r = this.getNativeInput().maxLength;
        if (r === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(n, r);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(n) {
      var r = e.cssClasses.INVALID;
      if (n ? this.adapter.removeClass(r) : this.adapter.addClass(r), this.helperText) {
        this.helperText.setValidity(n);
        var i = this.helperText.isValidation();
        if (!i)
          return;
        var a = this.helperText.isVisible(), s = this.helperText.getId();
        a && s ? this.adapter.setInputAttr(Js.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Js.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(n) {
      var r = e.cssClasses.FOCUSED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.styleDisabled = function(n) {
      var r = e.cssClasses, i = r.DISABLED, a = r.INVALID;
      n ? (this.adapter.addClass(i), this.adapter.removeClass(a)) : this.adapter.removeClass(i), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
    }, e.prototype.styleFloating = function(n) {
      var r = e.cssClasses.LABEL_FLOATING;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.getNativeInput = function() {
      var n = this.adapter ? this.adapter.getNativeInput() : null;
      return n || {
        disabled: !1,
        maxLength: -1,
        required: !1,
        type: "input",
        validity: {
          badInput: !1,
          valid: !0
        },
        value: ""
      };
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var $l = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, vg = {
  ROOT: "mdc-text-field__icon"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var eu = ["click", "keydown"], mg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return $l;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          getAttr: function() {
            return null;
          },
          setAttr: function() {
          },
          removeAttr: function() {
          },
          setContent: function() {
          },
          registerInteractionHandler: function() {
          },
          deregisterInteractionHandler: function() {
          },
          notifyIconAction: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n, r;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var i = Pt(eu), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.registerInteractionHandler(s, this.interactionHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = Pt(eu), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.interactionHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", $l.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Gt)
), gg = /* @__PURE__ */ de("<span><!></span>"), pg = /* @__PURE__ */ de("<label><!></label>");
function gs(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "floatAbove", 15, !1), s = g(e, "required", 15, !1), u = g(e, "wrapped", 3, !1), l = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "for",
    "floatAbove",
    "required",
    "wrapped",
    "children"
  ]), c, d = /* @__PURE__ */ Ie(void 0), h = new hi(), f = Ce({}), m = Ce({}), v = he("SMUI:generic:input:props") ?? {}, p = a();
  we(() => {
    o(d) && p !== a() && (p = a(), o(d).float(a()));
  });
  let b = s();
  we(() => {
    o(d) && b !== s() && (b = s(), o(d).setRequired(s()));
  });
  const I = he("SMUI:floating-label:mount"), E = he("SMUI:floating-label:unmount");
  ot(() => {
    K(
      d,
      new ag({
        addClass: A,
        removeClass: _,
        getWidth: () => {
          var L, O;
          const X = W(), te = X.cloneNode(!0);
          (L = X.parentNode) == null || L.appendChild(te), te.classList.add("smui-floating-label--remove-transition"), te.classList.add("smui-floating-label--force-size"), te.classList.remove("mdc-floating-label--float-above");
          const P = te.scrollWidth;
          return (O = X.parentNode) == null || O.removeChild(te), P;
        },
        registerInteractionHandler: (X, te) => h.on(W(), X, te),
        deregisterInteractionHandler: (X, te) => h.off(W(), X, te)
      }),
      !0
    );
    const U = {
      get element() {
        return W();
      },
      addStyle: S,
      removeStyle: y
    };
    return I && I(U), o(d).init(), () => {
      var X;
      E && E(U), (X = o(d)) == null || X.destroy(), h.clear();
    };
  });
  function A(U) {
    f[U] || (f[U] = !0);
  }
  function _(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function S(U, X) {
    m[U] != X && (X === "" || X == null ? delete m[U] : m[U] = X);
  }
  function y(U) {
    U in m && delete m[U];
  }
  function T(U) {
    var X;
    (X = o(d)) == null || X.shake(U);
  }
  function x(U) {
    a(U);
  }
  function C(U) {
    s(U);
  }
  function N() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function W() {
    return c;
  }
  var k = { shake: T, float: x, setRequired: C, getWidth: N, getElement: W }, F = J(), ue = z(F);
  {
    var G = (U) => {
      var X = gg();
      Ge(X, (P, L) => ({ class: P, style: L, ...l }), [
        () => Ue({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([P, L]) => `${P}: ${L};`).concat([i()]).join(" ")
      ]);
      var te = ce(X);
      Se(te, () => e.children ?? fe), Oe(X, (P) => c = P, () => c), Fe(X, (P, L) => Z == null ? void 0 : Z(P, L), n), w(U, X);
    }, V = (U) => {
      var X = pg();
      Ge(
        X,
        (P, L) => ({
          class: P,
          style: L,
          for: e.for || (v ? v.id : void 0),
          ...l
        }),
        [
          () => Ue({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([P, L]) => `${P}: ${L};`).concat([i()]).join(" ")
        ]
      );
      var te = ce(X);
      Se(te, () => e.children ?? fe), Oe(X, (P) => c = P, () => c), Fe(X, (P, L) => Z == null ? void 0 : Z(P, L), n), w(U, X);
    };
    ae(ue, (U) => {
      u() ? U(G) : U(V, !1);
    });
  }
  return w(t, F), Te(k);
}
var bg = /* @__PURE__ */ de("<div></div>");
function Kc(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "active", 3, !1), s = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ Ie(void 0), c = new hi(), d = Ce({}), h = Ce({});
  ot(() => (K(
    l,
    new sg({
      addClass: m,
      removeClass: v,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (y, T) => c.on(A(), y, T),
      deregisterEventHandler: (y, T) => c.off(A(), y, T)
    }),
    !0
  ), o(l).init(), () => {
    var y;
    (y = o(l)) == null || y.destroy(), c.clear();
  }));
  function f(y) {
    return y in d ? d[y] : A().classList.contains(y);
  }
  function m(y) {
    d[y] || (d[y] = !0);
  }
  function v(y) {
    (!(y in d) || d[y]) && (d[y] = !1);
  }
  function p(y, T) {
    h[y] != T && (T === "" || T == null ? delete h[y] : h[y] = T);
  }
  function b() {
    var y;
    (y = o(l)) == null || y.activate();
  }
  function I() {
    var y;
    (y = o(l)) == null || y.deactivate();
  }
  function E(y) {
    var T;
    (T = o(l)) == null || T.setRippleCenter(y);
  }
  function A() {
    return u;
  }
  var _ = { activate: b, deactivate: I, setRippleCenter: E, getElement: A }, S = bg();
  return Ge(S, (y, T) => ({ class: y, style: T, ...s }), [
    () => Ue({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([y, T]) => `${y}: ${T};`).concat([i()]).join(" ")
  ]), Oe(S, (y) => u = y, () => u), Fe(S, (y, T) => Z == null ? void 0 : Z(y, T), n), w(t, S), Te(_);
}
var _g = /* @__PURE__ */ de('<div class="mdc-notched-outline__notch"><!></div>'), yg = /* @__PURE__ */ de('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Zc(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "notched", 3, !1), a = g(e, "noLabel", 3, !1), s = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ Ie(void 0), c = /* @__PURE__ */ Ie(void 0), d = Ce({}), h = Ce({}), f;
  we(() => {
    o(c) !== f && (o(c) ? (o(c).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(c) && o(c).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = o(c));
  }), oe("SMUI:floating-label:mount", (x) => {
    K(c, x, !0);
  }), oe("SMUI:floating-label:unmount", () => {
    K(c, void 0);
  }), ot(() => (K(
    l,
    new ug({
      addClass: m,
      removeClass: v,
      setNotchWidthProperty: (x) => p("width", x + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), o(l).init(), () => {
    var x;
    (x = o(l)) == null || x.destroy();
  }));
  function m(x) {
    d[x] || (d[x] = !0);
  }
  function v(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function p(x, C) {
    h[x] != C && (C === "" || C == null ? delete h[x] : h[x] = C);
  }
  function b(x) {
    x in h && delete h[x];
  }
  function I(x) {
    var C;
    (C = o(l)) == null || C.notch(x);
  }
  function E() {
    var x;
    (x = o(l)) == null || x.closeNotch();
  }
  function A() {
    return u;
  }
  var _ = { notch: I, closeNotch: E, getElement: A }, S = yg();
  Ge(S, (x) => ({ class: x, ...s }), [
    () => Ue({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var y = me(ce(S), 2);
  {
    var T = (x) => {
      var C = _g(), N = ce(C);
      Se(N, () => e.children ?? fe), Le((W) => vt(C, W), [
        () => Object.entries(h).map(([W, k]) => `${W}: ${k};`).join(" ")
      ]), w(x, C);
    };
    ae(y, (x) => {
      a() || x(T);
    });
  }
  return Oe(S, (x) => u = x, () => u), Fe(S, (x, C) => Z == null ? void 0 : Z(x, C), n), w(t, S), Te(_);
}
function ta(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, vi), a = g(e, "tag", 3, "div"), s = g(e, "_smuiClass", 3, ""), u = g(e, "_smuiClassMap", 23, () => ({})), l = g(e, "_smuiContexts", 19, () => ({})), c = g(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "_smuiClass",
    "_smuiClassMap",
    "_smuiContexts",
    "_smuiProps",
    "children"
  ]), h;
  const f = [];
  Object.entries(u()).forEach(([I, E]) => {
    const A = he(E);
    A && "subscribe" in A && f.push(A.subscribe((_) => {
      u()[I] = _;
    }));
  });
  for (let I in l())
    l().hasOwnProperty(I) && oe(I, l()[I]);
  pn(() => {
    for (const I of f)
      I();
  });
  function m() {
    return h.getElement();
  }
  var v = { getElement: m }, p = J(), b = z(p);
  {
    let I = /* @__PURE__ */ be(() => Ue({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    fr(b, i, (E, A) => {
      Oe(
        A(E, $e(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return o(I);
            }
          },
          c,
          () => d,
          {
            children: (_, S) => {
              var y = J(), T = z(y);
              Se(T, () => e.children ?? fe), w(_, y);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => h = _,
        () => h
      );
    });
  }
  return w(t, p), Te(v);
}
function Ig(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, u) => {
        var l = J(), c = z(l);
        Se(c, () => e.children ?? fe), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
function Eg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, u) => {
          var l = J(), c = z(l);
          Se(c, () => e.children ?? fe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
function Sg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, u) => {
          var l = J(), c = z(l);
          Se(c, () => e.children ?? fe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var Ag = /* @__PURE__ */ de("<input/>");
function Cg(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "type", 3, "text"), a = g(e, "placeholder", 3, " "), s = g(e, "value", 15), u = g(e, "files", 15, null), l = g(e, "dirty", 15, !1), c = g(e, "invalid", 15, !1), d = g(e, "updateInvalid", 3, !0), h = g(e, "initialInvalid", 3, !1), f = g(e, "emptyValueNull", 19, () => s() === null), m = g(e, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "emptyValueNull",
    "emptyValueUndefined"
  ]), p, b = Ce({}), I = Ce({});
  we(() => {
    i() === "file" ? delete I.value : I.value = s() == null ? "" : s();
  }), ot(() => {
    d() && h() && c(N().matches(":invalid"));
  });
  function E(G) {
    return G === "" ? Number.NaN : +G;
  }
  function A(G) {
    if (i() === "file") {
      u(G.currentTarget.files);
      return;
    }
    if (G.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (G.currentTarget.value === "" && m()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(E(G.currentTarget.value));
        break;
      default:
        s(G.currentTarget.value);
        break;
    }
  }
  function _(G) {
    (i() === "file" || i() === "range") && A(G), l(!0), d() && c(N().matches(":invalid"));
  }
  function S(G) {
    return G in b ? b[G] ?? null : N().getAttribute(G);
  }
  function y(G, V) {
    b[G] !== V && (b[G] = V);
  }
  function T(G) {
    (!(G in b) || b[G] != null) && (b[G] = void 0);
  }
  function x() {
    N().focus();
  }
  function C() {
    N().blur();
  }
  function N() {
    return p;
  }
  var W = { getAttr: S, addAttr: y, removeAttr: T, focus: x, blur: C, getElement: N }, k = Ag(), F = (G) => {
    var V;
    i() !== "file" && A(G), (V = e.oninput) == null || V.call(e, G);
  }, ue = (G) => {
    var V;
    _(G), (V = e.onchange) == null || V.call(e, G);
  };
  return Ge(
    k,
    (G) => ({
      class: G,
      type: i(),
      placeholder: a(),
      ...I,
      ...b,
      ...v,
      oninput: F,
      onchange: ue
    }),
    [
      () => Ue({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Oe(k, (G) => p = G, () => p), Fe(k, (G, V) => Z == null ? void 0 : Z(G, V), n), w(t, k), Te(W);
}
var xg = /* @__PURE__ */ de("<textarea></textarea>");
function Tg(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "value", 15, ""), s = g(e, "dirty", 15, !1), u = g(e, "invalid", 15, !1), l = g(e, "updateInvalid", 3, !0), c = g(e, "initialInvalid", 3, !1), d = g(e, "resizable", 3, !0), h = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "value",
    "dirty",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "resizable"
  ]), f, m = Ce({});
  ot(() => {
    l() && c() && u(_().matches(":invalid"));
  });
  function v() {
    s(!0), l() && u(_().matches(":invalid"));
  }
  function p(x) {
    return x in m ? m[x] ?? null : _().getAttribute(x);
  }
  function b(x, C) {
    m[x] !== C && (m[x] = C);
  }
  function I(x) {
    (!(x in m) || m[x] != null) && (m[x] = void 0);
  }
  function E() {
    _().focus();
  }
  function A() {
    _().blur();
  }
  function _() {
    return f;
  }
  var S = { getAttr: p, addAttr: b, removeAttr: I, focus: E, blur: A, getElement: _ }, y = xg(), T = (x) => {
    var C;
    v(), (C = e.onchange) == null || C.call(e, x);
  };
  return Ge(
    y,
    (x) => ({
      class: x,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...h,
      onchange: T
    }),
    [
      () => Ue({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Oe(y, (x) => f = x, () => f), Fe(y, (x, C) => Z == null ? void 0 : Z(x, C), n), ci(() => Ea(y, a)), w(t, y), Te(S);
}
var wg = /* @__PURE__ */ de('<span class="mdc-text-field__ripple"></span>'), Og = /* @__PURE__ */ de("<!> <!>", 1), Lg = /* @__PURE__ */ de("<span><!> <!></span>"), Rg = /* @__PURE__ */ de("<!> <!> <!>", 1), Dg = /* @__PURE__ */ de("<label><!> <!> <!> <!> <!> <!> <!></label>"), Mg = /* @__PURE__ */ de("<div><!> <!> <!> <!> <!></div>"), Hg = /* @__PURE__ */ de("<!> <!>", 1);
function Oo(t, e) {
  xe(e, !0);
  const { applyPassive: n } = zc;
  let r = () => {
  };
  function i(M) {
    return M === r;
  }
  let a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), u = g(e, "style", 3, ""), l = g(e, "ripple", 3, !0), c = g(e, "disabled", 3, !1), d = g(e, "required", 3, !1), h = g(e, "textarea", 3, !1), f = g(e, "variant", 19, () => h() ? "outlined" : "standard"), m = g(e, "noLabel", 3, !1), v = g(e, "type", 3, "text"), p = g(e, "value", 15), b = g(e, "files", 15, r), I = g(e, "invalid", 15, r), E = g(e, "updateInvalid", 19, () => i(I())), A = g(e, "initialInvalid", 3, !1), _ = g(e, "dirty", 15, !1), S = g(e, "validateOnValueChange", 19, E), y = g(e, "useNativeValidation", 19, E), T = g(e, "withLeadingIcon", 3, r), x = g(e, "withTrailingIcon", 3, r), C = g(e, "input", 7), N = g(e, "floatingLabel", 7), W = g(e, "lineRipple", 7), k = g(e, "notchedOutline", 7), F = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "required",
    "textarea",
    "variant",
    "noLabel",
    "label",
    "type",
    "value",
    "files",
    "invalid",
    "updateInvalid",
    "initialInvalid",
    "dirty",
    "prefix",
    "suffix",
    "validateOnValueChange",
    "useNativeValidation",
    "withLeadingIcon",
    "withTrailingIcon",
    "input",
    "floatingLabel",
    "lineRipple",
    "notchedOutline",
    "children",
    "leadingIcon",
    "trailingIcon",
    "internalCounter",
    "line",
    "helper"
  ]);
  const ue = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(I()) && I(!1);
  let G, V = /* @__PURE__ */ Ie(void 0), U = new hi(), X = Ce({}), te = Ce({}), P = /* @__PURE__ */ Ie(void 0), L = /* @__PURE__ */ Ie(!1), O = /* @__PURE__ */ Ie(Ce(A())), re = he("SMUI:addLayoutListener"), ee, $, ye = new Promise((M) => $ = M), B, ie, Y, le;
  const Ee = /* @__PURE__ */ be(() => C() && C().getElement());
  we(() => {
    (_() || o(O) || !E()) && o(V) && o(V).isValid() !== !I() && (E() ? I(!o(V).isValid()) : o(V).setValid(!I()));
  }), we(() => {
    o(V) && o(V).getValidateOnValueChange() !== S() && o(V).setValidateOnValueChange(i(S()) ? !1 : S());
  }), we(() => {
    o(V) && o(V).setUseNativeValidation(i(y()) ? !0 : y());
  }), we(() => {
    o(V) && o(V).setDisabled(c());
  });
  let q = p();
  we(() => {
    if (o(V) && ue && q !== p()) {
      q = p();
      const M = `${p() == null ? "" : p()}`;
      o(V).getValue() !== M && o(V).setValue(M);
    }
  }), re && (ee = re(D)), oe("SMUI:textfield:leading-icon:mount", (M) => {
    B = M;
  }), oe("SMUI:textfield:leading-icon:unmount", () => {
    B = void 0;
  }), oe("SMUI:textfield:trailing-icon:mount", (M) => {
    ie = M;
  }), oe("SMUI:textfield:trailing-icon:unmount", () => {
    ie = void 0;
  }), oe("SMUI:textfield:helper-text:id", (M) => {
    K(P, M, !0);
  }), oe("SMUI:textfield:helper-text:mount", (M) => {
    Y = M;
  }), oe("SMUI:textfield:helper-text:unmount", () => {
    K(P, void 0), Y = void 0;
  }), oe("SMUI:textfield:character-counter:mount", (M) => {
    le = M;
  }), oe("SMUI:textfield:character-counter:unmount", () => {
    le = void 0;
  }), ot(() => {
    var M;
    if (K(
      V,
      new hg(
        {
          // getRootAdapterMethods_
          addClass: Re,
          removeClass: Ae,
          hasClass: se,
          registerTextFieldInteractionHandler: (Q, De) => U.on(j(), Q, De),
          deregisterTextFieldInteractionHandler: (Q, De) => U.off(j(), Q, De),
          registerValidationAttributeChangeHandler: (Q) => {
            const De = (wt) => wt.map((jt) => jt.attributeName).filter((jt) => jt), lt = new MutationObserver((wt) => {
              y() && Q(De(wt));
            }), at = { attributes: !0 };
            return C() && lt.observe(C().getElement(), at), lt;
          },
          deregisterValidationAttributeChangeHandler: (Q) => {
            Q.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Q;
            return ((Q = C()) == null ? void 0 : Q.getElement()) ?? null;
          },
          setInputAttr: (Q, De) => {
            var lt;
            (lt = C()) == null || lt.addAttr(Q, De);
          },
          removeInputAttr: (Q) => {
            var De;
            (De = C()) == null || De.removeAttr(Q);
          },
          isFocused: () => {
            var Q;
            return document.activeElement === ((Q = C()) == null ? void 0 : Q.getElement());
          },
          registerInputInteractionHandler: (Q, De) => {
            var at;
            const lt = (at = C()) == null ? void 0 : at.getElement();
            if (lt) {
              const wt = n();
              U.on(lt, Q, De, typeof wt == "boolean" ? { capture: wt } : wt);
            }
          },
          deregisterInputInteractionHandler: (Q, De) => {
            var at;
            const lt = (at = C()) == null ? void 0 : at.getElement();
            lt && U.off(lt, Q, De);
          },
          // getLabelAdapterMethods_
          floatLabel: (Q) => N() && N().float(Q),
          getLabelWidth: () => N() ? N().getWidth() : 0,
          hasLabel: () => !!N(),
          shakeLabel: (Q) => N() && N().shake(Q),
          setLabelRequired: (Q) => N() && N().setRequired(Q),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => W() && W().activate(),
          deactivateLineRipple: () => W() && W().deactivate(),
          setLineRippleTransformOrigin: (Q) => W() && W().setRippleCenter(Q),
          // getOutlineAdapterMethods_
          closeOutline: () => k() && k().closeNotch(),
          hasOutline: () => !!k(),
          notchOutline: (Q) => k() && k().notch(Q)
        },
        {
          get helperText() {
            return Y;
          },
          get characterCounter() {
            return le;
          },
          get leadingIcon() {
            return B;
          },
          get trailingIcon() {
            return ie;
          }
        }
      ),
      !0
    ), ue) {
      if (C() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (M = o(V)) == null || M.init();
    } else
      ac().then(() => {
        var Q;
        if (C() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Q = o(V)) == null || Q.init();
      });
    return $(), () => {
      var Q;
      (Q = o(V)) == null || Q.destroy(), U.clear();
    };
  }), pn(() => {
    ee && ee();
  });
  function se(M) {
    return M in X ? X[M] ?? null : j().classList.contains(M);
  }
  function Re(M) {
    X[M] || (X[M] = !0);
  }
  function Ae(M) {
    (!(M in X) || X[M]) && (X[M] = !1);
  }
  function Ne(M, Q) {
    te[M] != Q && (Q === "" || Q == null ? delete te[M] : te[M] = Q);
  }
  function Ye() {
    var M;
    (M = C()) == null || M.focus();
  }
  function dt() {
    var M;
    (M = C()) == null || M.blur();
  }
  function D() {
    if (o(V)) {
      const M = o(V).shouldFloat;
      o(V).notchOutline(M);
    }
  }
  function j() {
    return G;
  }
  var ve = { focus: Ye, blur: dt, layout: D, getElement: j }, ke = Hg(), xt = z(ke);
  {
    var Tt = (M) => {
      var Q = Dg();
      Ge(Q, (He, tt, et) => ({ class: He, style: tt, for: void 0, ...et }), [
        () => Ue({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": o(L) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(x()) ? e.trailingIcon : x(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": I(),
          ...X,
          [s()]: !0
        }),
        () => Object.entries(te).map(([He, tt]) => `${He}: ${tt};`).concat([u()]).join(" "),
        () => oi(F, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = ce(Q);
      {
        var lt = (He) => {
          var tt = Og(), et = z(tt);
          {
            var Dt = (pt) => {
              var Ot = wg();
              w(pt, Ot);
            };
            ae(et, (pt) => {
              f() === "filled" && pt(Dt);
            });
          }
          var fn = me(et, 2);
          {
            var Ke = (pt) => {
              {
                let Ot = /* @__PURE__ */ be(() => o(L) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Qe = /* @__PURE__ */ be(() => ct(F, "label$"));
                Oe(
                  gs(pt, $e(
                    {
                      get floatAbove() {
                        return o(Ot);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(Qe),
                    {
                      children: (Lt, qt) => {
                        var Zt = J(), _t = z(Zt);
                        {
                          var Mt = (bt) => {
                          }, sn = (bt) => {
                            var Fr = J(), bn = z(Fr);
                            {
                              var vr = (_n) => {
                                var Zn = Et();
                                Le(() => Ze(Zn, e.label)), w(_n, Zn);
                              }, na = (_n) => {
                                var Zn = J(), kn = z(Zn);
                                Se(kn, () => e.label), w(_n, Zn);
                              };
                              ae(
                                bn,
                                (_n) => {
                                  typeof e.label == "string" ? _n(vr) : _n(na, !1);
                                },
                                !0
                              );
                            }
                            w(bt, Fr);
                          };
                          ae(_t, (bt) => {
                            e.label == null ? bt(Mt) : bt(sn, !1);
                          });
                        }
                        w(Lt, Zt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Lt) => N(Lt),
                  () => N()
                );
              }
            };
            ae(fn, (pt) => {
              !m() && e.label != null && pt(Ke);
            });
          }
          w(He, tt);
        };
        ae(De, (He) => {
          !h() && f() !== "outlined" && He(lt);
        });
      }
      var at = me(De, 2);
      {
        var wt = (He) => {
          {
            let tt = /* @__PURE__ */ be(() => m() || e.label == null), et = /* @__PURE__ */ be(() => ct(F, "outline$"));
            Oe(
              Zc(He, $e(
                {
                  get noLabel() {
                    return o(tt);
                  }
                },
                () => o(et),
                {
                  children: (Dt, fn) => {
                    var Ke = J(), pt = z(Ke);
                    {
                      var Ot = (Qe) => {
                        {
                          let Lt = /* @__PURE__ */ be(() => o(L) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), qt = /* @__PURE__ */ be(() => ct(F, "label$"));
                          Oe(
                            gs(Qe, $e(
                              {
                                get floatAbove() {
                                  return o(Lt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(qt),
                              {
                                children: (Zt, _t) => {
                                  var Mt = J(), sn = z(Mt);
                                  {
                                    var bt = (bn) => {
                                    }, Fr = (bn) => {
                                      var vr = J(), na = z(vr);
                                      {
                                        var _n = (kn) => {
                                          var kr = Et();
                                          Le(() => Ze(kr, e.label)), w(kn, kr);
                                        }, Zn = (kn) => {
                                          var kr = J(), Us = z(kr);
                                          Se(Us, () => e.label), w(kn, kr);
                                        };
                                        ae(
                                          na,
                                          (kn) => {
                                            typeof e.label == "string" ? kn(_n) : kn(Zn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(bn, vr);
                                    };
                                    ae(sn, (bn) => {
                                      e.label == null ? bn(bt) : bn(Fr, !1);
                                    });
                                  }
                                  w(Zt, Mt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Zt) => N(Zt),
                            () => N()
                          );
                        }
                      };
                      ae(pt, (Qe) => {
                        !m() && e.label != null && Qe(Ot);
                      });
                    }
                    w(Dt, Ke);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Dt) => k(Dt),
              () => k()
            );
          }
        };
        ae(at, (He) => {
          (h() || f() === "outlined") && He(wt);
        });
      }
      var jt = me(at, 2);
      Wa(jt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (He, tt) => {
          var et = J(), Dt = z(et);
          Se(Dt, () => e.leadingIcon ?? fe), w(He, et);
        },
        $$slots: { default: !0 }
      });
      var hr = me(jt, 2);
      Se(hr, () => e.children ?? fe);
      var ft = me(hr, 2);
      {
        var mt = (He) => {
          var tt = Lg(), et = ce(tt);
          {
            let fn = /* @__PURE__ */ be(() => ct(F, "input$"));
            Oe(
              Tg(et, $e(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(O);
                  },
                  get "aria-controls"() {
                    return o(P);
                  },
                  get "aria-describedby"() {
                    return o(P);
                  }
                },
                () => o(fn),
                {
                  onblur: (Ke) => {
                    var pt;
                    K(L, !1), K(O, !0), We(j(), "blur", Ke), (pt = e.input$onblur) == null || pt.call(e, Ke);
                  },
                  onfocus: (Ke) => {
                    var pt;
                    K(L, !0), We(j(), "focus", Ke), (pt = e.input$onfocus) == null || pt.call(e, Ke);
                  },
                  get value() {
                    return p();
                  },
                  set value(Ke) {
                    p(Ke);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(Ke) {
                    _(Ke);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(Ke) {
                    I(Ke);
                  }
                }
              )),
              (Ke) => C(Ke),
              () => C()
            );
          }
          var Dt = me(et, 2);
          Se(Dt, () => e.internalCounter ?? fe), Le((fn) => Wo(tt, 1, fn), [
            () => hc(Ue({
              "mdc-text-field__resizer": !("input$resizable" in F) || e.input$resizable
            }))
          ]), w(He, tt);
        }, Ft = (He) => {
          var tt = Rg(), et = z(tt);
          {
            var Dt = (Ot) => {
              var Qe = J(), Lt = z(Qe);
              {
                var qt = (_t) => {
                  Eg(_t, {
                    children: (Mt, sn) => {
                      var bt = Et();
                      Le(() => Ze(bt, e.prefix)), w(Mt, bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Zt = (_t) => {
                  var Mt = J(), sn = z(Mt);
                  Se(sn, () => e.prefix ?? fe), w(_t, Mt);
                };
                ae(Lt, (_t) => {
                  typeof e.prefix == "string" ? _t(qt) : _t(Zt, !1);
                });
              }
              w(Ot, Qe);
            };
            ae(et, (Ot) => {
              e.prefix != null && Ot(Dt);
            });
          }
          var fn = me(et, 2);
          {
            let Ot = /* @__PURE__ */ be(() => ct(F, "input$"));
            Oe(
              Cg(fn, $e(
                {
                  get type() {
                    return v();
                  },
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(O);
                  },
                  get "aria-controls"() {
                    return o(P);
                  },
                  get "aria-describedby"() {
                    return o(P);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Ot),
                {
                  onblur: (Qe) => {
                    var Lt;
                    K(L, !1), K(O, !0), We(j(), "blur", Qe), (Lt = e.input$onblur) == null || Lt.call(e, Qe);
                  },
                  onfocus: (Qe) => {
                    var Lt;
                    K(L, !0), We(j(), "focus", Qe), (Lt = e.input$onfocus) == null || Lt.call(e, Qe);
                  },
                  get value() {
                    return p();
                  },
                  set value(Qe) {
                    p(Qe);
                  },
                  get files() {
                    return b();
                  },
                  set files(Qe) {
                    b(Qe);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(Qe) {
                    _(Qe);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(Qe) {
                    I(Qe);
                  }
                }
              )),
              (Qe) => C(Qe),
              () => C()
            );
          }
          var Ke = me(fn, 2);
          {
            var pt = (Ot) => {
              var Qe = J(), Lt = z(Qe);
              {
                var qt = (_t) => {
                  Sg(_t, {
                    children: (Mt, sn) => {
                      var bt = Et();
                      Le(() => Ze(bt, e.suffix)), w(Mt, bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Zt = (_t) => {
                  var Mt = J(), sn = z(Mt);
                  Se(sn, () => e.suffix ?? fe), w(_t, Mt);
                };
                ae(Lt, (_t) => {
                  typeof e.suffix == "string" ? _t(qt) : _t(Zt, !1);
                });
              }
              w(Ot, Qe);
            };
            ae(Ke, (Ot) => {
              e.suffix != null && Ot(pt);
            });
          }
          w(He, tt);
        };
        ae(ft, (He) => {
          h() && typeof p() == "string" ? He(mt) : He(Ft, !1);
        });
      }
      var Un = me(ft, 2);
      Wa(Un, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (He, tt) => {
          var et = J(), Dt = z(et);
          Se(Dt, () => e.trailingIcon ?? fe), w(He, et);
        },
        $$slots: { default: !0 }
      });
      var mi = me(Un, 2);
      {
        var Fn = (He) => {
          {
            let tt = /* @__PURE__ */ be(() => ct(F, "ripple$"));
            Oe(Kc(He, $e(() => o(tt))), (et) => W(et), () => W());
          }
        };
        ae(mi, (He) => {
          !h() && f() !== "outlined" && l() && He(Fn);
        });
      }
      Oe(Q, (He) => G = He, () => G), Fe(Q, (He, tt) => Jt == null ? void 0 : Jt(He, tt), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Re,
        removeClass: Ae,
        addStyle: Ne,
        eventTarget: o(Ee),
        activeTarget: o(Ee),
        initPromise: ye
      })), Fe(Q, (He, tt) => Z == null ? void 0 : Z(He, tt), a), w(M, Q);
    }, dn = (M) => {
      var Q = Mg();
      Ge(Q, (ft, mt, Ft) => ({ class: ft, style: mt, ...Ft }), [
        () => Ue({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": I(),
          ...X,
          [s()]: !0
        }),
        () => Object.entries(te).map(([ft, mt]) => `${ft}: ${mt};`).concat([u()]).join(" "),
        () => oi(F, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = ce(Q);
      {
        var lt = (ft) => {
          var mt = J(), Ft = z(mt);
          Se(Ft, () => e.label ?? fe), w(ft, mt);
        };
        ae(De, (ft) => {
          typeof e.label != "string" && ft(lt);
        });
      }
      var at = me(De, 2);
      Wa(at, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ft, mt) => {
          var Ft = J(), Un = z(Ft);
          Se(Un, () => e.leadingIcon ?? fe), w(ft, Ft);
        },
        $$slots: { default: !0 }
      });
      var wt = me(at, 2);
      Se(wt, () => e.children ?? fe);
      var jt = me(wt, 2);
      Wa(jt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ft, mt) => {
          var Ft = J(), Un = z(Ft);
          Se(Un, () => e.trailingIcon ?? fe), w(ft, Ft);
        },
        $$slots: { default: !0 }
      });
      var hr = me(jt, 2);
      Se(hr, () => e.line ?? fe), Oe(Q, (ft) => G = ft, () => G), Fe(Q, (ft, mt) => Jt == null ? void 0 : Jt(ft, mt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Re,
        removeClass: Ae,
        addStyle: Ne
      })), Fe(Q, (ft, mt) => Z == null ? void 0 : Z(ft, mt), a), w(M, Q);
    };
    ae(xt, (M) => {
      ue ? M(Tt) : M(dn, !1);
    });
  }
  var _e = me(xt, 2);
  {
    var H = (M) => {
      {
        let Q = /* @__PURE__ */ be(() => ct(F, "helperLine$"));
        Ig(M, $e(() => o(Q), {
          children: (De, lt) => {
            var at = J(), wt = z(at);
            Se(wt, () => e.helper ?? fe), w(De, at);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(_e, (M) => {
      e.helper && M(H);
    });
  }
  return w(t, ke), Te(ve);
}
var Pg = /* @__PURE__ */ de("<i><!></i>");
function Ng(t, e) {
  xe(e, !0);
  const n = () => Pn(v, "$leadingStore", r), [r, i] = Kn();
  let a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), u = g(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = g(e, "disabled", 3, !1), c = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ Ie(void 0), f = new hi(), m = Ce({});
  const v = he("SMUI:textfield:icon:leading"), p = n();
  let b = /* @__PURE__ */ Ie(void 0);
  const I = /* @__PURE__ */ be(() => ({ role: e.role, tabindex: u() })), E = he("SMUI:textfield:leading-icon:mount"), A = he("SMUI:textfield:leading-icon:unmount"), _ = he("SMUI:textfield:trailing-icon:mount"), S = he("SMUI:textfield:trailing-icon:unmount");
  ot(() => (K(
    h,
    new mg({
      getAttr: y,
      setAttr: T,
      removeAttr: x,
      setContent: (V) => {
        K(b, V, !0);
      },
      registerInteractionHandler: (V, U) => f.on(C(), V, U),
      deregisterInteractionHandler: (V, U) => f.off(C(), V, U),
      notifyIconAction: () => We(C(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? E && E(o(h)) : _ && _(o(h)), o(h).init(), () => {
    var V;
    o(h) && (p ? A && A(o(h)) : S && S(o(h))), (V = o(h)) == null || V.destroy(), f.clear();
  }));
  function y(V) {
    return V in m ? m[V] ?? null : C().getAttribute(V);
  }
  function T(V, U) {
    m[V] !== U && (m[V] = U);
  }
  function x(V) {
    (!(V in m) || m[V] != null) && (m[V] = void 0);
  }
  function C() {
    return d;
  }
  var N = { getElement: C }, W = Pg();
  Ge(
    W,
    (V) => ({
      class: V,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(I),
      ...m,
      ...c
    }),
    [
      () => Ue({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [s()]: !0
      })
    ]
  );
  var k = ce(W);
  {
    var F = (V) => {
      var U = J(), X = z(U);
      Se(X, () => e.children ?? fe), w(V, U);
    }, ue = (V) => {
      var U = Et();
      Le(() => Ze(U, o(b))), w(V, U);
    };
    ae(k, (V) => {
      o(b) == null ? V(F) : V(ue, !1);
    });
  }
  Oe(W, (V) => d = V, () => d), Fe(W, (V, U) => Z == null ? void 0 : Z(V, U), a), w(t, W);
  var G = Te(N);
  return i(), G;
}
function Ug(t, e) {
  xe(e, !0);
  let n = g(e, "placeholder", 3, ""), r = g(e, "label", 3, ""), i = g(e, "icon", 3, ""), a = g(e, "value", 15, ""), s = g(e, "variant", 3, "standard"), u = g(e, "styles", 3, ""), l = g(e, "required", 3, !1), c = g(e, "oninput", 3, () => {
  });
  var d = J(), h = z(d);
  {
    var f = (v) => {
      {
        const p = (I) => {
          Ng(I, {
            class: "material-icons",
            children: (E, A) => {
              var _ = Et();
              Le(() => Ze(_, i())), w(E, _);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ be(() => `width: 100%; ${u()}`);
        Oo(v, {
          get label() {
            return r();
          },
          get required() {
            return l();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return o(b);
          },
          get variant() {
            return s();
          },
          get oninput() {
            return c();
          },
          get value() {
            return a();
          },
          set value(I) {
            a(I);
          },
          leadingIcon: p,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, m = (v) => {
      Oo(v, {
        get label() {
          return r();
        },
        get placeholder() {
          return n();
        },
        style: "width: 100%",
        get variant() {
          return s();
        },
        get required() {
          return l();
        },
        get oninput() {
          return c();
        },
        get value() {
          return a();
        },
        set value(p) {
          a(p);
        }
      });
    };
    ae(h, (v) => {
      i() ? v(f) : v(m, !1);
    });
  }
  w(t, d), Te();
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Fg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, kg = {
  CLOSED_EVENT: "MDCMenuSurface:closed",
  CLOSING_EVENT: "MDCMenuSurface:closing",
  OPENED_EVENT: "MDCMenuSurface:opened",
  OPENING_EVENT: "MDCMenuSurface:opening",
  FOCUSABLE_ELEMENTS: [
    "button:not(:disabled)",
    '[href]:not([aria-disabled="true"])',
    "input:not(:disabled)",
    "select:not(:disabled)",
    "textarea:not(:disabled)",
    '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
  ].join(", ")
}, ca = {
  /** Total duration of menu-surface open animation. */
  TRANSITION_OPEN_DURATION: 120,
  /** Total duration of menu-surface close animation. */
  TRANSITION_CLOSE_DURATION: 75,
  /**
   * Margin left to the edge of the viewport when menu-surface is at maximum
   * possible height. Also used as a viewport margin.
   */
  MARGIN_TO_EDGE: 32,
  /**
   * Ratio of anchor width to menu-surface width for switching from corner
   * positioning to center positioning.
   */
  ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
  /**
   * Amount of time to wait before restoring focus when closing the menu
   * surface. This is important because if a touch event triggered the menu
   * close, and the subsequent mouse event occurs after focus is restored, then
   * the restored focus would be lost.
   */
  TOUCH_EVENT_WAIT_MS: 30
}, It;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(It || (It = {}));
var ri;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ri || (ri = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var gr, $n, je = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
gr = {}, gr["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", gr["" + je.LIST_ITEM_CLASS] = "mdc-list-item", gr["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", gr["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", gr["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", gr["" + je.ROOT] = "mdc-list";
var Ii = ($n = {}, $n["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", $n["" + je.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", $n["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", $n["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", $n["" + je.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", $n["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", $n["" + je.ROOT] = "mdc-deprecated-list", $n), pr = {
  ACTION_EVENT: "MDCList:action",
  SELECTION_CHANGE_EVENT: "MDCList:selectionChange",
  ARIA_CHECKED: "aria-checked",
  ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
  ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
  ARIA_CURRENT: "aria-current",
  ARIA_DISABLED: "aria-disabled",
  ARIA_ORIENTATION: "aria-orientation",
  ARIA_ORIENTATION_HORIZONTAL: "horizontal",
  ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
  ARIA_SELECTED: "aria-selected",
  ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
  ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
  CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: `
    .` + je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` a,
    .` + Ii[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ii[je.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` a,
    .` + je.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + Ii[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + Ii[je.LIST_ITEM_CLASS] + ` a,
    .` + Ii[je.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + Ii[je.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, yt = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Bg = ["input", "button", "textarea", "select"], In = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Bg.indexOf(n) === -1 && t.preventDefault();
  }
};
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Vg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Gg(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(s) {
    s.sort(function(u, l) {
      return u.index - l.index;
    });
  }), n;
}
function Lo(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, s = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Qc(e);
  }, yt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = jg(i, a, u, e) : l = qg(i, u, e), l !== -1 && !s && r(l), l;
}
function jg(t, e, n, r) {
  var i = r.typeaheadBuffer[0], a = t.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    var s = a[r.sortedIndexCursor].index;
    if (!n(s))
      return s;
  }
  r.currentFirstChar = i;
  var u = -1, l;
  for (l = 0; l < a.length; l++)
    if (!n(a[l].index)) {
      u = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !n(a[l].index)) {
      u = l;
      break;
    }
  return u !== -1 ? (r.sortedIndexCursor = u, a[r.sortedIndexCursor].index) : -1;
}
function qg(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (n.sortedIndexCursor + 1) % i.length, u = -1; s !== n.sortedIndexCursor; ) {
    var l = i[s], c = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (c && d) {
      u = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return u !== -1 ? (n.sortedIndexCursor = u, i[n.sortedIndexCursor].index) : -1;
}
function Yc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Qc(t) {
  t.typeaheadBuffer = "";
}
function tu(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, s = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = At(n) === "ArrowLeft", c = At(n) === "ArrowUp", d = At(n) === "ArrowRight", h = At(n) === "ArrowDown", f = At(n) === "Home", m = At(n) === "End", v = At(n) === "Enter", p = At(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || h || f || m || v)
    return -1;
  var b = !p && n.key.length === 1;
  if (b) {
    In(n);
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Lo(I, e);
  }
  if (!p)
    return -1;
  r && In(n);
  var E = r && Yc(e);
  if (E) {
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Lo(I, e);
  }
  return -1;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function zg(t) {
  return t instanceof Array;
}
var Wg = ["Alt", "Control", "Meta", "Shift"];
function nu(t) {
  var e = new Set(t ? Wg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Xg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = yt.UNSET_INDEX, r.focusedItemIndex = yt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Vg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return pr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return je;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return yt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
          },
          focusItemAtIndex: function() {
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return !1;
          },
          hasRadioAtIndex: function() {
            return !1;
          },
          isCheckboxCheckedAtIndex: function() {
            return !1;
          },
          isFocusInsideList: function() {
            return !1;
          },
          isRootFocused: function() {
            return !1;
          },
          listItemAtIndexHasClass: function() {
            return !1;
          },
          notifyAction: function() {
          },
          notifySelectionChange: function() {
          },
          removeClassForElementIndex: function() {
          },
          setAttributeForElementIndex: function() {
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
          },
          setTabIndexForListItemChildren: function() {
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.getListItemCount() !== 0 && (this.adapter.hasCheckboxAtIndex(0) ? this.isCheckboxList = !0 : this.adapter.hasRadioAtIndex(0) ? this.isRadioList = !0 : this.maybeInitializeSingleSelection(), this.hasTypeahead && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
    }, e.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    }, e.prototype.setWrapFocus = function(n) {
      this.wrapFocus = n;
    }, e.prototype.setVerticalOrientation = function(n) {
      this.isVertical = n;
    }, e.prototype.setSingleSelection = function(n) {
      this.isSingleSelectionList = n, n && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(n) {
      this.areDisabledItemsFocusable = n;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var n = this.getSelectedIndexFromDOM();
      if (n !== yt.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, je.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = yt.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, je.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, je.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Yc(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(n) {
      this.useActivatedClass = n;
    }, e.prototype.setUseSelectedAttribute = function(n) {
      this.useSelectedAttr = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n, r) {
      r === void 0 && (r = {}), this.isIndexValid(n) && (this.isCheckboxList ? this.setCheckboxAtIndex(n, r) : this.isRadioList ? this.setRadioAtIndex(n, r) : this.setSingleSelectionAtIndex(n, r));
    }, e.prototype.handleFocusIn = function(n) {
      n >= 0 && (this.focusedItemIndex = n, this.adapter.setAttributeForElementIndex(n, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(n, "0"));
    }, e.prototype.handleFocusOut = function(n) {
      var r = this;
      n >= 0 && (this.adapter.setAttributeForElementIndex(n, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(n, "-1")), setTimeout(function() {
        r.adapter.isFocusInsideList() || r.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(n) {
      return this.adapter.listItemAtIndexHasClass(n, je.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, s, u = At(n) === "ArrowLeft", l = At(n) === "ArrowUp", c = At(n) === "ArrowRight", d = At(n) === "ArrowDown", h = At(n) === "Home", f = At(n) === "End", m = At(n) === "Enter", v = At(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, I = n.key === "A" || n.key === "a", E = nu(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && E([]))
          n.preventDefault(), this.focusLastElement();
        else if ((p || h) && E([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var A = this.focusLastElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (p && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var A = this.focusFirstElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(T) {
              a.focusItemAtIndex(T);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(T) {
              return a.isIndexDisabled(T);
            }
          };
          tu(_, this.typeaheadState);
        }
        return;
      }
      var S = this.adapter.getFocusedElementIndex();
      if (!(S === -1 && (S = i, S < 0))) {
        if (p && E([]))
          In(n), this.focusNextElement(S);
        else if (b && E([]))
          In(n), this.focusPrevElement(S);
        else if (p && E(["Shift"]) && this.isCheckboxList) {
          In(n);
          var A = this.focusNextElement(S);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (b && E(["Shift"]) && this.isCheckboxList) {
          In(n);
          var A = this.focusPrevElement(S);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (h && E([]))
          In(n), this.focusFirstElement();
        else if (f && E([]))
          In(n), this.focusLastElement();
        else if (h && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (In(n), this.isIndexDisabled(S))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, S, S);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (In(n), this.isIndexDisabled(S))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(S, this.adapter.getListItemCount() - 1, S);
        } else if (I && E(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || v) && E([])) {
          if (r) {
            var y = n.target;
            if (y && y.tagName === "A" && m || (In(n), this.isIndexDisabled(S)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(S, !1), this.adapter.notifyAction(S));
          }
        } else if ((m || v) && E(["Shift"]) && this.isCheckboxList) {
          var y = n.target;
          if (y && y.tagName === "A" && m || (In(n), this.isIndexDisabled(S)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : S, S, S), this.adapter.notifyAction(S));
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(x) {
              a.focusItemAtIndex(x);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(x) {
              return a.isIndexDisabled(x);
            }
          };
          tu(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, s = nu(i);
      n !== yt.UNSET_INDEX && (this.isIndexDisabled(n) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
    }, e.prototype.focusNextElement = function(n) {
      var r = this.adapter.getListItemCount(), i = n, a = null;
      do {
        if (i++, i >= r)
          if (this.wrapFocus)
            i = 0;
          else
            return n;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusPrevElement = function(n) {
      var r = this.adapter.getListItemCount(), i = n, a = null;
      do {
        if (i--, i < 0)
          if (this.wrapFocus)
            i = r - 1;
          else
            return n;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusFirstElement = function() {
      return this.focusNextElement(-1);
    }, e.prototype.focusLastElement = function() {
      return this.focusPrevElement(this.adapter.getListItemCount());
    }, e.prototype.focusInitialElement = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(n), n;
    }, e.prototype.setEnabled = function(n, r) {
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, pr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, pr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = je.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = je.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== yt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== yt.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === yt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, pr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? pr.ARIA_CURRENT : pr.ARIA_SELECTED;
      if (this.selectedIndex !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== yt.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? pr.ARIA_SELECTED : pr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === yt.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, s, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = Wi([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          s !== m && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = wr([], Wi(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === yt.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== yt.UNSET_INDEX ? this.selectedIndex : zg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
        return Math.min(n, r);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(n, r) {
      var i = this;
      if (r === void 0 && (r = !0), n instanceof Array) {
        if (!this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return n.length === 0 ? !0 : n.some(function(a) {
          return i.isIndexInRange(a);
        });
      } else if (typeof n == "number") {
        if (this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + n);
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === yt.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(n) {
      var r = this.adapter.getListItemCount();
      return n >= 0 && n < r;
    }, e.prototype.setSelectedIndexOnAction = function(n, r) {
      this.lastSelectedIndex = n, this.isCheckboxList ? (this.toggleCheckboxAtIndex(n, r), this.adapter.notifySelectionChange([n])) : this.setSelectedIndex(n, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(n, r) {
      var i = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(n), s;
      r ? s = a : (s = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(n, s)), this.adapter.setAttributeForElementIndex(n, i, s ? "true" : "false");
      var u = this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? u.push(n) : u = u.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(n) {
      this.adapter.focusItemAtIndex(n), this.focusedItemIndex = n;
    }, e.prototype.checkboxListToggleAll = function(n, r) {
      var i = this.adapter.getListItemCount();
      if (n.length === i)
        this.setCheckboxAtIndex([], { isUserInteraction: r });
      else {
        for (var a = [], s = 0; s < i; s++)
          (!this.isIndexDisabled(s) || n.indexOf(s) > -1) && a.push(s);
        this.setCheckboxAtIndex(a, { isUserInteraction: r });
      }
    }, e.prototype.typeaheadMatchItem = function(n, r, i) {
      var a = this;
      i === void 0 && (i = !1);
      var s = {
        focusItemAtIndex: function(u) {
          a.focusItemAtIndex(u);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: n,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(u) {
          return a.isIndexDisabled(u);
        }
      };
      return Lo(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Gg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Qc(this.typeaheadState);
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Jc = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ri.TOP_START, r.originCorner = ri.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Fg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return kg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ca;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return ri;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          hasAnchor: function() {
            return !1;
          },
          isElementInContainer: function() {
            return !1;
          },
          isFocused: function() {
            return !1;
          },
          isRtl: function() {
            return !1;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
          },
          setMaxHeight: function() {
          },
          setTransformOrigin: function() {
          },
          saveFocus: function() {
          },
          restoreFocus: function() {
          },
          notifyClose: function() {
          },
          notifyClosing: function() {
          },
          notifyOpen: function() {
          },
          notifyOpening: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = e.cssClasses, r = n.ROOT, i = n.OPEN;
      if (!this.adapter.hasClass(r))
        throw new Error(r + " class required in root element.");
      this.adapter.hasClass(i) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(n) {
      this.anchorCorner = n;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ It.RIGHT;
    }, e.prototype.setAnchorMargin = function(n) {
      this.anchorMargin.top = n.top || 0, this.anchorMargin.right = n.right || 0, this.anchorMargin.bottom = n.bottom || 0, this.anchorMargin.left = n.left || 0;
    }, e.prototype.setIsHoisted = function(n) {
      this.isHoistedElement = n;
    }, e.prototype.setFixedPosition = function(n) {
      this.isFixedPosition = n;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(n, r) {
      this.position.x = this.isFinite(n) ? n : 0, this.position.y = this.isFinite(r) ? r : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(n) {
      this.isHorizontallyCenteredOnViewport = n;
    }, e.prototype.setQuickOpen = function(n) {
      this.isQuickOpen = n;
    }, e.prototype.setMaxHeight = function(n) {
      this.maxHeight = n;
    }, e.prototype.setOpenBottomBias = function(n) {
      this.openBottomBias = n;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var n = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        n.dimensions = n.adapter.getInnerDimensions(), n.autoposition(), n.adapter.addClass(e.cssClasses.OPEN), n.openAnimationEndTimerId = setTimeout(function() {
          n.openAnimationEndTimerId = 0, n.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), n.adapter.notifyOpen();
        }, ca.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(n) {
      var r = this;
      if (n === void 0 && (n = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, n || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          r.adapter.removeClass(e.cssClasses.OPEN), r.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), r.closeAnimationEndTimerId = setTimeout(function() {
            r.closeAnimationEndTimerId = 0, r.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), r.adapter.notifyClose();
          }, ca.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, n || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(n) {
      var r = n.target;
      this.adapter.isElementInContainer(r) || this.close();
    }, e.prototype.handleKeydown = function(n) {
      var r = n.keyCode, i = n.key, a = i === "Escape" || r === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var n;
      this.measurements = this.getAutoLayoutmeasurements();
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, It.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, It.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (n = {}, n[s] = u, n[a] = l, n);
      d.width / h.width > ca.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, It.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var n = this.adapter.getAnchorDimensions(), r = this.adapter.getBodyDimensions(), i = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return n || (n = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: n,
        bodySize: r,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: n.top,
          right: i.width - n.right,
          bottom: i.height - n.bottom,
          left: n.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: i,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, It.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var h = d - s.height > 0;
      !h && c > d + this.openBottomBias && (n = this.setBit(n, It.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, It.FLIP_RTL), v = this.hasBit(this.anchorCorner, It.RIGHT) || this.hasBit(n, It.RIGHT), p = !1;
      f && m ? p = !v : p = v;
      var b, I;
      p ? (b = i.left + a.width + this.anchorMargin.right, I = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, I = i.right + a.width - this.anchorMargin.left);
      var E = b - s.width > 0, A = I - s.width > 0, _ = this.hasBit(n, It.FLIP_RTL) && this.hasBit(n, It.RIGHT);
      return A && _ && f || !E && _ ? n = this.unsetBit(n, It.RIGHT) : (E && p && f || E && !p && v || !A && b >= I) && (n = this.setBit(n, It.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, It.BOTTOM), s = this.hasBit(this.anchorCorner, It.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, It.RIGHT), a = this.hasBit(this.anchorCorner, It.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, It.BOTTOM), a = this.hasBit(this.anchorCorner, It.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, s = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Pt(d), f = h.next(); !f.done; f = h.next()) {
          var m = f.value, v = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (c.width - l.width) / 2;
            continue;
          }
          v += u[m], this.isFixedPosition || (m === "top" ? v += s.y : m === "bottom" ? v -= s.y : m === "left" ? v += s.x : v -= s.x), n[m] = v;
        }
      } catch (p) {
        r = { error: p };
      } finally {
        try {
          f && !f.done && (i = h.return) && i.call(h);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var n = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        n.adapter.restoreFocus();
      }, ca.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ru = {
  animation: {
    prefixed: "-webkit-animation",
    standard: "animation"
  },
  transform: {
    prefixed: "-webkit-transform",
    standard: "transform"
  },
  transition: {
    prefixed: "-webkit-transition",
    standard: "transition"
  }
};
function Kg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Zg(t, e) {
  if (Kg(t) && e in ru) {
    var n = t.document.createElement("div"), r = ru[e], i = r.standard, a = r.prefixed, s = i in n.style;
    return s ? i : a;
  }
  return e;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Mi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ei = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Yg = {
  FOCUS_ROOT_INDEX: -1
}, wi;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(wi || (wi = {}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Qg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = wi.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Mi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ei;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Yg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClassToElementAtIndex: function() {
          },
          removeClassFromElementAtIndex: function() {
          },
          addAttributeToElementAtIndex: function() {
          },
          removeAttributeFromElementAtIndex: function() {
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return !1;
          },
          closeSurface: function() {
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
          },
          focusListRoot: function() {
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return !1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.destroy = function() {
      this.closeAnimationEndTimerId && clearTimeout(this.closeAnimationEndTimerId), this.adapter.closeSurface();
    }, e.prototype.handleKeydown = function(n) {
      var r = n.key, i = n.keyCode, a = r === "Tab" || i === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(n) {
      var r = this, i = this.adapter.getElementIndex(n);
      if (!(i < 0)) {
        this.adapter.notifySelected({ index: i });
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ei.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(n);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, Jc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case wi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case wi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case wi.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(n) {
      this.defaultFocusState = n;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(n) {
      if (this.validatedIndex(n), !this.adapter.isSelectableItemAtIndex(n))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var r = this.adapter.getSelectedSiblingOfItemAtIndex(n);
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ei.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Mi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Mi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ei.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ei.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ei.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var gt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, $s = {
  ARIA_CONTROLS: "aria-controls",
  ARIA_DESCRIBEDBY: "aria-describedby",
  ARIA_SELECTED_ATTR: "aria-selected",
  CHANGE_EVENT: "MDCSelect:change",
  HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
  LABEL_SELECTOR: ".mdc-floating-label",
  LEADING_ICON_SELECTOR: ".mdc-select__icon",
  LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
  MENU_SELECTOR: ".mdc-select__menu",
  OUTLINE_SELECTOR: ".mdc-notched-outline",
  SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
  SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
  VALUE_ATTR: "data-value"
}, qr = {
  LABEL_SCALE: 0.75,
  UNSET_INDEX: -1,
  CLICK_DEBOUNCE_TIMEOUT_MS: 330
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Jg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = qr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return qr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $s;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          activateBottomLine: function() {
          },
          deactivateBottomLine: function() {
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
          },
          hasLabel: function() {
            return !1;
          },
          floatLabel: function() {
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
          },
          hasOutline: function() {
            return !1;
          },
          notchOutline: function() {
          },
          closeOutline: function() {
          },
          setRippleCenter: function() {
          },
          notifyChange: function() {
          },
          setSelectedText: function() {
          },
          isSelectAnchorFocused: function() {
            return !1;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
          },
          removeSelectAnchorAttr: function() {
          },
          addMenuClass: function() {
          },
          removeMenuClass: function() {
          },
          openMenu: function() {
          },
          closeMenu: function() {
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
          },
          setMenuAnchorCorner: function() {
          },
          setMenuWrapFocus: function() {
          },
          focusMenuItemAtIndex: function() {
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return !1;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    }, e.prototype.setSelectedIndex = function(n, r, i) {
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === qr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
    }, e.prototype.setValue = function(n, r) {
      r === void 0 && (r = !1);
      var i = this.adapter.getMenuItemValues().indexOf(n);
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        r
      );
    }, e.prototype.getValue = function() {
      var n = this.adapter.getSelectedIndex(), r = this.adapter.getMenuItemValues();
      return n !== qr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(gt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(gt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(gt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(gt.FOCUSED), i = n || r, a = this.adapter.hasClass(gt.REQUIRED);
        this.notchOutline(i), this.adapter.floatLabel(i), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var n = this.adapter.getMenuItemValues(), r = n.indexOf(this.getValue());
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var n = this.getSelectedIndex(), r = n >= 0 ? n : 0;
        this.adapter.focusMenuItemAtIndex(r);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(gt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(gt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(n) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(n), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(n) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(gt.FOCUSED))) {
        var r = At(n) === Pe.ENTER, i = At(n) === Pe.SPACEBAR, a = At(n) === Pe.ARROW_UP, s = At(n) === Pe.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(gt.FOCUSED);
        if (n) {
          var i = qr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
          this.adapter.notchOutline(a);
        } else r || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(n) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(n);
    }, e.prototype.setLeadingIconContent = function(n) {
      this.leadingIcon && this.leadingIcon.setContent(n);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(n) {
      this.useDefaultValidation = n;
    }, e.prototype.setValid = function(n) {
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(gt.INVALID), this.adapter.removeMenuClass(gt.MENU_INVALID)) : (this.adapter.addClass(gt.INVALID), this.adapter.addMenuClass(gt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(gt.REQUIRED) && !this.adapter.hasClass(gt.DISABLED) ? this.getSelectedIndex() !== qr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(gt.REQUIRED) : this.adapter.removeClass(gt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ri.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(gt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(gt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(gt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr($s.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr($s.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, qr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var zr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, er = {
  HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
  HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var $g = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return er;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return zr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
       */
      get: function() {
        return {
          addClass: function() {
          },
          removeClass: function() {
          },
          hasClass: function() {
            return !1;
          },
          setAttr: function() {
          },
          getAttr: function() {
            return null;
          },
          removeAttr: function() {
          },
          setContent: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getId = function() {
      return this.adapter.getAttr("id");
    }, e.prototype.isVisible = function() {
      return this.adapter.getAttr(zr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(er.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(er.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(er.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(zr.ROLE) : this.adapter.setAttr(zr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(zr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(zr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(zr.ARIA_HIDDEN, "true");
    }, e;
  }(Gt)
), ep = /* @__PURE__ */ de("<div><!></div>");
function tp(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "static", 3, !1), s = g(e, "anchor", 3, !0), u = g(e, "fixed", 3, !1), l = g(e, "open", 31, () => Ce(a())), c = g(e, "managed", 3, !1), d = g(e, "fullWidth", 3, !1), h = g(e, "quickOpen", 3, !1), f = g(e, "anchorElement", 15), m = g(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = g(e, "maxHeight", 3, 0), p = g(e, "horizontallyCenteredOnViewport", 3, !1), b = g(e, "openBottomBias", 3, 0), I = g(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "static",
    "anchor",
    "fixed",
    "open",
    "managed",
    "fullWidth",
    "quickOpen",
    "anchorElement",
    "anchorCorner",
    "anchorMargin",
    "maxHeight",
    "horizontallyCenteredOnViewport",
    "openBottomBias",
    "neverRestoreFocus",
    "children"
  ]), A, _ = /* @__PURE__ */ Ie(void 0), S = Ce({}), y = Ce({}), T = /* @__PURE__ */ Ie(void 0);
  oe("SMUI:list:role", "menu"), oe("SMUI:list:item:role", "menuitem"), we(() => {
    var B, ie;
    A && s() && !((B = A.parentElement) != null && B.classList.contains("mdc-menu-surface--anchor")) && ((ie = A.parentElement) == null || ie.classList.add("mdc-menu-surface--anchor"), f(A.parentElement ?? void 0));
  }), we(() => {
    o(_) && o(_).isOpen() !== l() && (l() ? o(_).open() : o(_).close());
  }), we(() => {
    o(_) && o(_).setQuickOpen(h());
  }), we(() => {
    o(_) && o(_).setFixedPosition(u());
  }), we(() => {
    o(_) && o(_).setMaxHeight(v());
  }), we(() => {
    o(_) && o(_).setIsHorizontallyCenteredOnViewport(p());
  });
  const x = ri;
  we(() => {
    o(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(_).setAnchorCorner(x[e.anchorCorner]) : o(_).setAnchorCorner(e.anchorCorner));
  }), we(() => {
    o(_) && o(_).setAnchorMargin(m());
  }), we(() => {
    o(_) && o(_).setOpenBottomBias(b());
  });
  const C = he("SMUI:menu-surface:mount"), N = he("SMUI:menu-surface:unmount");
  ot(() => {
    K(
      _,
      new Jc({
        addClass: k,
        removeClass: F,
        hasClass: W,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || We(O(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || We(O(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && We(O(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || We(O(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ie) => O().contains(ie),
        isRtl: () => getComputedStyle(O()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ie) => {
          y["transform-origin"] = ie;
        },
        isFocused: () => document.activeElement === O(),
        saveFocus: () => {
          K(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !I() && (!A || O().contains(document.activeElement)) && o(T) && document.contains(o(T)) && "focus" in o(T) && o(T).focus();
        },
        getInnerDimensions: () => ({
          width: O().offsetWidth,
          height: O().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (ie) => {
          y.left = "left" in ie ? `${ie.left}px` : "", y.right = "right" in ie ? `${ie.right}px` : "", y.top = "top" in ie ? `${ie.top}px` : "", y.bottom = "bottom" in ie ? `${ie.bottom}px` : "";
        },
        setMaxHeight: (ie) => {
          y["max-height"] = ie;
        }
      }),
      !0
    );
    const B = {
      get open() {
        return l();
      },
      set open(ie) {
        l(ie);
      },
      closeProgrammatic: ue
    };
    return C && C(B), o(_).init(), () => {
      var Y, le;
      N && N(B);
      const ie = o(_).isHoistedElement;
      (Y = o(_)) == null || Y.destroy(), ie && ((le = O().parentNode) == null || le.removeChild(O()));
    };
  }), pn(() => {
    var B;
    s() && O() && ((B = O().parentElement) == null || B.classList.remove("mdc-menu-surface--anchor"));
  });
  function W(B) {
    return B in S ? S[B] : O().classList.contains(B);
  }
  function k(B) {
    S[B] || (S[B] = !0);
  }
  function F(B) {
    (!(B in S) || S[B]) && (S[B] = !1);
  }
  function ue(B) {
    var ie;
    (ie = o(_)) == null || ie.close(B), l(!1);
  }
  function G(B) {
    o(_) && l() && !c() && o(_).handleBodyClick(B);
  }
  function V() {
    return l();
  }
  function U(B) {
    l(B);
  }
  function X(B, ie) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setAbsolutePosition(B, ie);
  }
  function te(B) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setIsHoisted(B);
  }
  function P() {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).isFixed();
  }
  function L() {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).flipCornerHorizontally();
  }
  function O() {
    return A;
  }
  var re = {
    isOpen: V,
    setOpen: U,
    setAbsolutePosition: X,
    setIsHoisted: te,
    isFixed: P,
    flipCornerHorizontally: L,
    getElement: O
  }, ee = ep();
  lr("click", Go.body, G, !0);
  var $ = (B) => {
    var ie;
    o(_) && !c() && o(_).handleKeydown(B), (ie = e.onkeydown) == null || ie.call(e, B);
  };
  Ge(
    ee,
    (B, ie) => ({
      class: B,
      style: ie,
      role: "dialog",
      ...E,
      onkeydown: $
    }),
    [
      () => Ue({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...S,
        [r()]: !0
      }),
      () => Object.entries(y).map(([B, ie]) => `${B}: ${ie};`).concat([i()]).join(" ")
    ]
  );
  var ye = ce(ee);
  return Se(ye, () => e.children ?? fe), Oe(ee, (B) => A = B, () => A), Fe(ee, (B, ie) => Z == null ? void 0 : Z(B, ie), n), w(t, ee), Te(re);
}
function eo(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function np(t, e) {
  xe(e, !0);
  const { closest: n } = Na;
  let r = g(e, "use", 19, () => []), i = g(e, "class", 3, ""), a = g(e, "open", 15, !1), s = g(e, "anchorElement", 15), u = g(e, "managed", 3, !1), l = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ Ie(void 0), h = /* @__PURE__ */ Ie(void 0), f = /* @__PURE__ */ Ie(void 0);
  oe("SMUI:menu-surface:mount", (x) => {
    o(h) || K(h, x, !0);
  });
  const m = he("SMUI:list:mount");
  oe("SMUI:list:mount", (x) => {
    o(f) || K(f, x, !0), m && m(x);
  });
  const v = he("SMUI:menu:mount"), p = he("SMUI:menu:unmount");
  ot(() => (K(
    d,
    new Qg({
      addClassToElementAtIndex: (x, C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(x, C);
      },
      removeClassFromElementAtIndex: (x, C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(x, C);
      },
      addAttributeToElementAtIndex: (x, C, N) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(x, C, N);
      },
      removeAttributeFromElementAtIndex: (x, C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(x, C);
      },
      getAttributeFromElementAtIndex: (x, C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(x, C);
      },
      elementContainsClass: (x, C) => x.classList.contains(C),
      closeSurface: (x) => {
        var C;
        u() || ((C = o(h)) == null || C.closeProgrammatic(x), We(y(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((C) => C.element).indexOf(x);
      },
      notifySelected: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        We(y(), "SMUIMenuSelected", {
          index: x.index,
          item: o(f).getOrderedList()[x.index].element
        });
      },
      getMenuItemCount: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).items.length;
      },
      focusItemAtIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).focusItemAtIndex(x);
      },
      focusListRoot: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in o(f).element && o(f).element.focus();
      },
      isSelectableItemAtIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(o(f).getOrderedList()[x].element, `.${Mi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const C = o(f).getOrderedList(), N = n(C[x].element, `.${Mi.MENU_SELECTION_GROUP}`), W = N == null ? void 0 : N.querySelector(`.${Mi.MENU_SELECTED_LIST_ITEM}`);
        return W ? C.map((k) => k.element).indexOf(W) : -1;
      }
    }),
    !0
  ), v && v(o(d)), o(d).init(), () => {
    var x;
    p && o(d) && p(o(d)), (x = o(d)) == null || x.destroy();
  }));
  function b(x) {
    o(d) && o(d).handleKeydown(x);
  }
  function I() {
    return a();
  }
  function E(x) {
    a(x);
  }
  function A(x) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(x);
  }
  function _() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function S() {
    return c;
  }
  function y() {
    return c.getElement();
  }
  var T = {
    isOpen: I,
    setOpen: E,
    setDefaultFocusState: A,
    getSelectedIndex: _,
    getMenuSurface: S,
    getElement: y
  };
  {
    let x = /* @__PURE__ */ be(() => Ue({ "mdc-menu": !0, [i()]: !0 }));
    Oe(
      tp(t, $e(
        {
          get use() {
            return r();
          },
          get class() {
            return o(x);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (C) => {
            var N;
            b(C), (N = e.onkeydown) == null || N.call(e, C);
          },
          onSMUIMenuSurfaceOpened: (C) => {
            var N;
            o(d) && o(d).handleMenuSurfaceOpened(), (N = e.onSMUIMenuSurfaceOpened) == null || N.call(e, C);
          },
          onSMUIListAction: (C) => {
            var N;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[C.detail.index].element), (N = e.onSMUIListAction) == null || N.call(e, C);
          },
          get open() {
            return a();
          },
          set open(C) {
            a(C);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(C) {
            s(C);
          },
          children: (C, N) => {
            var W = J(), k = z(W);
            Se(k, () => e.children ?? fe), w(C, W);
          },
          $$slots: { default: !0 }
        }
      )),
      (C) => c = C,
      () => c
    );
  }
  return Te(T);
}
function rp(t, e) {
  xe(e, !0);
  const { closest: n, matches: r } = Na;
  let i = he("SMUI:list:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), u = g(e, "nonInteractive", 3, !1), l = g(e, "dense", 3, !1), c = g(e, "textualList", 3, !1), d = g(e, "avatarList", 3, !1), h = g(e, "iconList", 3, !1), f = g(e, "imageList", 3, !1), m = g(e, "thumbnailList", 3, !1), v = g(e, "videoList", 3, !1), p = g(e, "twoLine", 3, !1), b = g(e, "threeLine", 3, !1), I = g(e, "vertical", 3, !0), E = g(e, "wrapFocus", 19, () => he("SMUI:list:wrapFocus") ?? !1), A = g(e, "singleSelection", 3, !1), _ = g(e, "disabledItemsFocusable", 3, !1), S = g(e, "selectedIndex", 31, () => -1), y = g(e, "radioList", 3, !1), T = g(e, "checkList", 3, !1), x = g(e, "hasTypeahead", 3, !1), C = g(e, "component", 3, vi), N = g(e, "tag", 3, i ? "nav" : "ul"), W = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "disabledItemsFocusable",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "tag",
    "children"
  ]), k, F = /* @__PURE__ */ Ie(void 0), ue = [], G = he("SMUI:list:role");
  const V = /* @__PURE__ */ new WeakMap();
  let U = he("SMUI:dialog:selection"), X = he("SMUI:addLayoutListener"), te;
  oe("SMUI:list:nonInteractive", u()), oe("SMUI:separator:context", "list"), G || (A() ? (G = "listbox", oe("SMUI:list:item:role", "option")) : y() ? (G = "radiogroup", oe("SMUI:list:item:role", "radio")) : T() ? (G = "group", oe("SMUI:list:item:role", "checkbox")) : (G = "list", oe("SMUI:list:item:role", void 0))), we(() => {
    o(F) && o(F).setVerticalOrientation(I());
  }), we(() => {
    o(F) && o(F).setWrapFocus(E());
  }), we(() => {
    o(F) && o(F).setHasTypeahead(x());
  }), we(() => {
    o(F) && o(F).setSingleSelection(A());
  }), we(() => {
    o(F) && o(F).setDisabledItemsFocusable(_());
  }), we(() => {
    o(F) && A() && D() !== S() && o(F).setSelectedIndex(S());
  }), X && (te = X(Ne)), oe("SMUI:list:item:mount", (_e) => {
    ue.push(_e), V.set(_e.element, _e), A() && _e.selected && S(Ae(_e.element));
  }), oe("SMUI:list:item:unmount", (_e) => {
    const H = (_e && ue.findIndex((M) => M === _e)) ?? -1;
    H !== -1 && (ue.splice(H, 1), V.delete(_e.element));
  });
  const P = he("SMUI:list:mount"), L = he("SMUI:list:unmount");
  ot(() => {
    K(
      F,
      new Xg({
        addClassForElementIndex: Y,
        focusItemAtIndex: ve,
        getAttributeForElementIndex: (H, M) => {
          var Q;
          return ((Q = B()[H]) == null ? void 0 : Q.getAttr(M)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? B().map((H) => H.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => ue.length,
        getPrimaryTextAtIndex: Re,
        hasCheckboxAtIndex: (H) => {
          var M;
          return ((M = B()[H]) == null ? void 0 : M.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (H) => {
          var M;
          return ((M = B()[H]) == null ? void 0 : M.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (H) => {
          const M = B()[H];
          return ((M == null ? void 0 : M.hasCheckbox) && M.checked) ?? !1;
        },
        isFocusInsideList: () => k != null && ke() !== document.activeElement && ke().contains(document.activeElement),
        isRootFocused: () => k != null && document.activeElement === ke(),
        listItemAtIndexHasClass: ie,
        notifyAction: (H) => {
          S(H), k != null && We(ke(), "SMUIListAction", { index: H });
        },
        notifySelectionChange: (H) => {
          k != null && We(ke(), "SMUIListSelectionChange", { changedIndices: H });
        },
        removeClassForElementIndex: le,
        setAttributeForElementIndex: Ee,
        setCheckedCheckboxOrRadioAtIndex: (H, M) => {
          B()[H].checked = M;
        },
        setTabIndexForListItemChildren: (H, M) => {
          const Q = B()[H];
          Array.prototype.forEach.call(Q.element.querySelectorAll("button:not(:disabled), a"), (lt) => {
            lt.setAttribute("tabindex", M);
          });
        }
      }),
      !0
    );
    const _e = {
      get element() {
        return ke();
      },
      get items() {
        return ue;
      },
      get typeaheadInProgress() {
        if (!o(F))
          throw new Error("Instance is undefined.");
        return o(F).isTypeaheadInProgress();
      },
      typeaheadMatchItem(H, M) {
        if (!o(F))
          throw new Error("Instance is undefined.");
        return o(F).typeaheadMatchItem(
          H,
          M,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: B,
      focusItemAtIndex: ve,
      addClassForElementIndex: Y,
      removeClassForElementIndex: le,
      setAttributeForElementIndex: Ee,
      removeAttributeForElementIndex: q,
      getAttributeFromElementIndex: se,
      getPrimaryTextAtIndex: Re
    };
    return P && P(_e), o(F).init(), o(F).layout(), () => {
      var H;
      L && L(_e), (H = o(F)) == null || H.destroy();
    };
  }), pn(() => {
    te && te();
  });
  function O(_e) {
    o(F) && _e.target && o(F).handleKeydown(_e, _e.target.classList.contains("mdc-deprecated-list-item"), Ae(_e.target));
  }
  function re(_e) {
    o(F) && _e.target && o(F).handleFocusIn(Ae(_e.target));
  }
  function ee(_e) {
    o(F) && _e.target && o(F).handleFocusOut(Ae(_e.target));
  }
  function $(_e) {
    o(F) && _e.target && o(F).handleClick(Ae(_e.target), !r(_e.target, 'input[type="checkbox"], input[type="radio"]'), _e);
  }
  function ye(_e) {
    if (y() || T()) {
      const H = Ae(_e.target);
      if (H !== -1) {
        const M = B()[H];
        M && (y() && !M.checked || T()) && (r(_e.detail.target, 'input[type="checkbox"], input[type="radio"]') || (M.checked = !M.checked), M.activateRipple(), window.requestAnimationFrame(() => {
          M.deactivateRipple();
        }));
      }
    }
  }
  function B() {
    return k == null ? [] : [...ke().children].map((_e) => V.get(_e)).filter((_e) => _e && _e._smui_list_item_accessor);
  }
  function ie(_e, H) {
    const M = B()[_e];
    return (M && M.hasClass(H)) ?? !1;
  }
  function Y(_e, H) {
    const M = B()[_e];
    M && M.addClass(H);
  }
  function le(_e, H) {
    const M = B()[_e];
    M && M.removeClass(H);
  }
  function Ee(_e, H, M) {
    const Q = B()[_e];
    Q && Q.addAttr(H, M);
  }
  function q(_e, H) {
    const M = B()[_e];
    M && M.removeAttr(H);
  }
  function se(_e, H) {
    const M = B()[_e];
    return M ? M.getAttr(H) : null;
  }
  function Re(_e) {
    const H = B()[_e];
    return (H && H.getPrimaryText()) ?? "";
  }
  function Ae(_e) {
    const H = n(_e, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return H && r(H, ".mdc-deprecated-list-item") ? B().map((M) => M == null ? void 0 : M.element).indexOf(H) : -1;
  }
  function Ne() {
    if (!o(F))
      throw new Error("Instance is undefined.");
    return o(F).layout();
  }
  function Ye(_e, H) {
    if (!o(F))
      throw new Error("Instance is undefined.");
    return o(F).setEnabled(_e, H);
  }
  function dt() {
    if (!o(F))
      throw new Error("Instance is undefined.");
    return o(F).isTypeaheadInProgress();
  }
  function D() {
    if (!o(F))
      throw new Error("Instance is undefined.");
    return o(F).getSelectedIndex();
  }
  function j() {
    if (!o(F))
      throw new Error("Instance is undefined.");
    return o(F).getFocusedItemIndex();
  }
  function ve(_e) {
    const H = B()[_e];
    H && "focus" in H.element && H.element.focus();
  }
  function ke() {
    return k.getElement();
  }
  var xt = {
    layout: Ne,
    setEnabled: Ye,
    getTypeaheadInProgress: dt,
    getSelectedIndex: D,
    getFocusedItemIndex: j,
    focusItemAtIndex: ve,
    getElement: ke
  }, Tt = J(), dn = z(Tt);
  {
    let _e = /* @__PURE__ */ be(() => Ue({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || U,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": b() && !p(),
      [s()]: !0
    }));
    fr(dn, C, (H, M) => {
      Oe(
        M(H, $e(
          {
            get tag() {
              return N();
            },
            get use() {
              return a();
            },
            get class() {
              return o(_e);
            },
            get role() {
              return G;
            }
          },
          () => W,
          {
            onkeydown: (Q) => {
              var De;
              O(Q), (De = e.onkeydown) == null || De.call(e, Q);
            },
            onfocusin: (Q) => {
              var De;
              re(Q), (De = e.onfocusin) == null || De.call(e, Q);
            },
            onfocusout: (Q) => {
              var De;
              ee(Q), (De = e.onfocusout) == null || De.call(e, Q);
            },
            onclick: (Q) => {
              var De;
              $(Q), (De = e.onclick) == null || De.call(e, Q);
            },
            onSMUIAction: (Q) => {
              var De;
              ye(Q), (De = e.onSMUIAction) == null || De.call(e, Q);
            },
            children: (Q, De) => {
              var lt = J(), at = z(lt);
              Se(at, () => e.children ?? fe), w(Q, lt);
            },
            $$slots: { default: !0 }
          }
        )),
        (Q) => k = Q,
        () => k
      );
    });
  }
  return w(t, Tt), Te(xt);
}
let ip = 0;
var ap = /* @__PURE__ */ de('<span class="mdc-deprecated-list-item__ripple"></span>'), sp = /* @__PURE__ */ de("<!><!>", 1);
function op(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(Y) {
    return Y === n;
  }
  let i = he("SMUI:list:item:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), u = g(e, "style", 3, ""), l = g(e, "nonInteractive", 19, () => he("SMUI:list:nonInteractive") ?? !1), c = g(e, "ripple", 19, () => !l()), d = g(e, "wrapper", 3, !1), h = g(e, "activated", 15, !1), f = g(e, "role", 19, () => d() ? "presentation" : he("SMUI:list:item:role")), m = g(e, "selected", 15, !1), v = g(e, "disabled", 3, !1), p = g(e, "skipRestoreFocus", 3, !1), b = g(e, "tabindex", 15, n), I = g(e, "inputId", 19, () => "SMUI-form-field-list-" + ip++), E = g(e, "component", 3, vi), A = g(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "wrapper",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "tag",
    "children"
  ]);
  oe("SMUI:list:nonInteractive", void 0), oe("SMUI:list:item:role", void 0);
  let S, y = Ce({}), T = Ce({}), x = Ce({}), C = /* @__PURE__ */ Ie(void 0), N = /* @__PURE__ */ Ie(void 0);
  const W = /* @__PURE__ */ be(() => r(b()) ? !l() && !v() && (m() || o(C) && o(C).checked) ? 0 : -1 : b());
  oe("SMUI:generic:input:props", { id: I() }), oe("SMUI:separator:context", void 0), oe("SMUI:generic:input:mount", (Y) => {
    ("_smui_checkbox_accessor" in Y || "_smui_radio_accessor" in Y) && K(C, Y, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    K(C, void 0);
  });
  const k = he("SMUI:list:item:mount"), F = he("SMUI:list:item:unmount");
  ot(() => {
    if (!m() && !l()) {
      let le = !0, Ee = S.getElement();
      for (; Ee.previousElementSibling; )
        if (Ee = Ee.previousElementSibling, Ee.nodeType === 1 && Ee.classList.contains("mdc-deprecated-list-item") && !Ee.classList.contains("mdc-deprecated-list-item--disabled")) {
          le = !1;
          break;
        }
      le && K(N, window.requestAnimationFrame(() => L(Ee)), !0);
    }
    const Y = {
      _smui_list_item_accessor: !0,
      get element() {
        return $();
      },
      get selected() {
        return m();
      },
      set selected(le) {
        m(le);
      },
      hasClass: ue,
      addClass: G,
      removeClass: V,
      getAttr: X,
      addAttr: te,
      removeAttr: P,
      getPrimaryText: ee,
      // For inputs within item.
      get checked() {
        return (o(C) && o(C).checked) ?? !1;
      },
      set checked(le) {
        o(C) && (o(C).checked = !!le);
      },
      get hasCheckbox() {
        return !!(o(C) && "_smui_checkbox_accessor" in o(C));
      },
      get hasRadio() {
        return !!(o(C) && "_smui_radio_accessor" in o(C));
      },
      activateRipple() {
        o(C) && o(C).activateRipple();
      },
      deactivateRipple() {
        o(C) && o(C).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: re,
      get tabindex() {
        return o(W);
      },
      set tabindex(le) {
        b(le);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(le) {
        h(le);
      }
    };
    return k && k(Y), () => {
      F && F(Y);
    };
  }), pn(() => {
    o(N) && window.cancelAnimationFrame(o(N));
  });
  function ue(Y) {
    return Y in y ? y[Y] : $().classList.contains(Y);
  }
  function G(Y) {
    y[Y] || (y[Y] = !0);
  }
  function V(Y) {
    (!(Y in y) || y[Y]) && (y[Y] = !1);
  }
  function U(Y, le) {
    T[Y] != le && (le === "" || le == null ? delete T[Y] : T[Y] = le);
  }
  function X(Y) {
    return Y in x ? x[Y] ?? null : $().getAttribute(Y);
  }
  function te(Y, le) {
    x[Y] !== le && (x[Y] = le);
  }
  function P(Y) {
    (!(Y in x) || x[Y] != null) && (x[Y] = void 0);
  }
  function L(Y) {
    let le = !0;
    for (; Y.nextElementSibling; )
      if (Y = Y.nextElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item")) {
        const Ee = Y.attributes.getNamedItem("tabindex");
        if (Ee && Ee.value === "0") {
          le = !1;
          break;
        }
      }
    le && b(0);
  }
  function O(Y) {
    const le = Y.key === "Enter", Ee = Y.key === "Space";
    (le || Ee) && re(Y);
  }
  function re(Y) {
    v() || We($(), "SMUIAction", Y);
  }
  function ee() {
    const Y = $(), le = Y.querySelector(".mdc-deprecated-list-item__primary-text");
    if (le)
      return le.textContent ?? "";
    const Ee = Y.querySelector(".mdc-deprecated-list-item__text");
    return Ee ? Ee.textContent ?? "" : Y.textContent ?? "";
  }
  function $() {
    return S.getElement();
  }
  var ye = { action: re, getPrimaryText: ee, getElement: $ }, B = J(), ie = z(B);
  {
    let Y = /* @__PURE__ */ be(() => [
      ...l() ? [] : [
        [
          Jt,
          {
            ripple: !o(C),
            unbounded: !1,
            color: (h() || m()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: G,
            removeClass: V,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), le = /* @__PURE__ */ be(() => Ue({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...y,
      [s()]: !0
    })), Ee = /* @__PURE__ */ be(() => Object.entries(T).map(([se, Re]) => `${se}: ${Re};`).concat([u()]).join(" ")), q = /* @__PURE__ */ be(() => p() || void 0);
    fr(ie, E, (se, Re) => {
      Oe(
        Re(se, $e(
          {
            get tag() {
              return A();
            },
            get use() {
              return o(Y);
            },
            get class() {
              return o(le);
            },
            get style() {
              return o(Ee);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(C) && o(C).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(q);
            },
            get tabindex() {
              return o(W);
            },
            get href() {
              return e.href;
            }
          },
          () => x,
          () => _,
          {
            onclick: (Ae) => {
              var Ne;
              re(Ae), (Ne = e.onclick) == null || Ne.call(e, Ae);
            },
            onkeydown: (Ae) => {
              var Ne;
              O(Ae), (Ne = e.onkeydown) == null || Ne.call(e, Ae);
            },
            children: (Ae, Ne) => {
              var Ye = sp(), dt = z(Ye);
              {
                var D = (ve) => {
                  var ke = ap();
                  w(ve, ke);
                };
                ae(dt, (ve) => {
                  c() && ve(D);
                });
              }
              var j = me(dt);
              Se(j, () => e.children ?? fe), w(Ae, Ye);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ae) => S = Ae,
        () => S
      );
    });
  }
  return w(t, B), Te(ye);
}
let lp = 0;
var up = /* @__PURE__ */ de("<div><!></div>");
function cp(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "id", 19, () => "SMUI-select-helper-text-" + lp++), a = g(e, "persistent", 3, !1), s = g(e, "validationMsg", 3, !1), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ Ie(void 0), d = Ce({}), h = Ce({}), f = /* @__PURE__ */ Ie(void 0);
  const m = he("SMUI:select:helper-text:id"), v = he("SMUI:select:helper-text:mount"), p = he("SMUI:select:helper-text:unmount");
  ot(() => (K(
    c,
    new $g({
      addClass: I,
      removeClass: E,
      hasClass: b,
      getAttr: A,
      setAttr: _,
      removeAttr: S,
      setContent: (k) => {
        K(f, k, !0);
      }
    }),
    !0
  ), m && m(i()), v && v(o(c)), o(c).init(), () => {
    var k;
    p && o(c) && p(o(c)), (k = o(c)) == null || k.destroy();
  }));
  function b(k) {
    return k in d ? d[k] : y().classList.contains(k);
  }
  function I(k) {
    d[k] || (d[k] = !0);
  }
  function E(k) {
    (!(k in d) || d[k]) && (d[k] = !1);
  }
  function A(k) {
    return k in h ? h[k] ?? null : y().getAttribute(k);
  }
  function _(k, F) {
    h[k] !== F && (h[k] = F);
  }
  function S(k) {
    (!(k in h) || h[k] != null) && (h[k] = void 0);
  }
  function y() {
    return l;
  }
  var T = { getElement: y }, x = up();
  Ge(
    x,
    (k) => ({
      class: k,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...u
    }),
    [
      () => Ue({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var C = ce(x);
  {
    var N = (k) => {
      var F = J(), ue = z(F);
      Se(ue, () => e.children ?? fe), w(k, F);
    }, W = (k) => {
      var F = Et();
      Le(() => Ze(F, o(f))), w(k, F);
    };
    ae(C, (k) => {
      o(f) == null ? k(N) : k(W, !1);
    });
  }
  return Oe(x, (k) => l = k, () => l), Fe(x, (k, F) => Z == null ? void 0 : Z(k, F), n), w(t, x), Te(T);
}
let dp = 0;
var fp = /* @__PURE__ */ de("<input/>"), hp = /* @__PURE__ */ de('<span class="mdc-select__ripple"></span>'), vp = /* @__PURE__ */ de('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function mp(t, e) {
  xe(e, !0);
  const n = () => Pn(ke, "$selectedTextStore", r), [r, i] = Kn();
  let a = () => {
  };
  function s(R) {
    return R === a;
  }
  let u = g(e, "use", 19, () => []), l = g(e, "class", 3, ""), c = g(e, "style", 3, ""), d = g(e, "ripple", 3, !0), h = g(e, "disabled", 3, !1), f = g(e, "variant", 3, "standard"), m = g(e, "noLabel", 3, !1), v = g(e, "label", 3, void 0), p = g(e, "value", 15), b = g(e, "key", 3, (R) => R), I = g(e, "dirty", 15, !1), E = g(e, "invalid", 15, a), A = g(e, "updateInvalid", 19, () => s(E())), _ = g(e, "required", 3, !1), S = g(e, "inputId", 19, () => "SMUI-select-" + dp++), y = g(e, "hiddenInput", 3, !1), T = g(e, "withLeadingIcon", 3, a), x = g(e, "anchor$use", 19, () => []), C = g(e, "anchor$class", 3, ""), N = g(e, "selectedTextContainer$use", 19, () => []), W = g(e, "selectedTextContainer$class", 3, ""), k = g(e, "selectedText$use", 19, () => []), F = g(e, "selectedText$class", 3, ""), ue = g(e, "dropdownIcon$use", 19, () => []), G = g(e, "dropdownIcon$class", 3, ""), V = g(e, "menu$class", 3, ""), U = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "disabled",
    "variant",
    "noLabel",
    "label",
    "value",
    "key",
    "dirty",
    "invalid",
    "updateInvalid",
    "required",
    "inputId",
    "hiddenInput",
    "withLeadingIcon",
    "anchor$use",
    "anchor$class",
    "selectedTextContainer$use",
    "selectedTextContainer$class",
    "selectedText$use",
    "selectedText$class",
    "dropdownIcon$use",
    "dropdownIcon$class",
    "menu$class",
    "children",
    "leadingIcon",
    "helperText"
  ]);
  const X = s(E());
  s(E()) && E(!1);
  let te, P = /* @__PURE__ */ Ie(void 0), L = Ce({}), O = Ce({}), re, ee = Ce({}), $ = /* @__PURE__ */ Ie(-1);
  const ye = /* @__PURE__ */ be(() => U.menu$id ?? S() + "-menu");
  let B = /* @__PURE__ */ Ie(void 0), ie = he("SMUI:addLayoutListener"), Y, le = /* @__PURE__ */ Ie(!1), Ee = Ce({}), q = /* @__PURE__ */ Ie(void 0), se = /* @__PURE__ */ Ie(void 0), Re = /* @__PURE__ */ Ie(!1), Ae, Ne = he("SMUI:select:context"), Ye, dt, D, j, ve;
  oe("SMUI:list:role", ""), oe("SMUI:list:nav", !1);
  const ke = Ut("");
  oe("SMUI:select:selectedText", ke);
  const xt = Ut(p());
  we(() => {
    Mn(xt, p());
  }), oe("SMUI:select:value", xt), we(() => {
    o(P) && o(P).getValue() !== b()(p()) && o(P).setValue(b()(p()));
  });
  let Tt = o($);
  we(() => {
    if (Tt !== o($))
      if (Tt = o($), o(P))
        o(P).setSelectedIndex(
          o($),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = jt();
        p() !== R[o($)] && p(R[o($)]);
      }
  }), we(() => {
    o(P) && o(P).getDisabled() !== h() && o(P).setDisabled(h());
  }), we(() => {
    o(P) && I() && o(P).isValid() !== !E() && (A() ? E(!o(P).isValid()) : o(P).setValid(!E()));
  }), we(() => {
    o(P) && o(P).getRequired() !== _() && o(P).setRequired(_());
  }), ie && (Y = ie(mi)), oe("SMUI:select:leading-icon:mount", (R) => {
    Ye = R;
  }), oe("SMUI:select:leading-icon:unmount", () => {
    Ye = void 0;
  }), oe("SMUI:list:mount", (R) => {
    Ae = R;
  }), oe("SMUI:select:helper-text:id", (R) => {
    K(B, R, !0);
  }), oe("SMUI:select:helper-text:mount", (R) => {
    dt = R;
  }), oe("SMUI:select:helper-text:unmount", () => {
    K(B, void 0), dt = void 0;
  }), ot(() => (K(
    P,
    new Jg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          Mn(ke, R);
        },
        isSelectAnchorFocused: () => document.activeElement === re,
        getSelectAnchorAttr: lt,
        setSelectAnchorAttr: at,
        removeSelectAnchorAttr: wt,
        addMenuClass: Q,
        removeMenuClass: De,
        openMenu: () => {
          K(le, !0);
        },
        closeMenu: () => {
          K(le, !1);
        },
        getAnchorElement: () => re,
        setMenuAnchorElement: (R) => {
          K(q, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          K(se, R, !0);
        },
        setMenuWrapFocus: (R) => {
          K(Re, R, !0);
        },
        getSelectedIndex: () => o($),
        setSelectedIndex: (R) => {
          Tt = R, K($, R, !0), p(jt()[o($)]);
        },
        focusMenuItemAtIndex: (R) => {
          Ae.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Ae.items.length,
        getMenuItemValues: () => jt().map(b()),
        getMenuItemTextAtIndex: (R) => Ae.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Ae.typeaheadInProgress,
        typeaheadMatchItem: (R, ge) => Ae.typeaheadMatchItem(R, ge),
        // getCommonAdapterMethods
        addClass: _e,
        removeClass: H,
        hasClass: dn,
        setRippleCenter: (R) => j && j.setRippleCenter(R),
        activateBottomLine: () => j && j.activate(),
        deactivateBottomLine: () => j && j.deactivate(),
        notifyChange: (R) => {
          var ge;
          I(!0), A() && E(!((ge = o(P)) != null && ge.isValid())), We(Fn(), "SMUISelectChange", { value: p(), index: o($) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ve,
        notchOutline: (R) => ve && ve.notch(R),
        closeOutline: () => ve && ve.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!D,
        floatLabel: (R) => D && D.float(R),
        getLabelWidth: () => D ? D.getWidth() : 0,
        setLabelRequired: (R) => D && D.setRequired(R)
      },
      {
        get helperText() {
          return dt;
        },
        get leadingIcon() {
          return Ye;
        }
      }
    ),
    !0
  ), K($, jt().indexOf(p()), !0), o(P).init(), Ft(X), () => {
    var R;
    (R = o(P)) == null || R.destroy();
  })), pn(() => {
    Y && Y();
  });
  function dn(R) {
    return R in L ? L[R] : Fn().classList.contains(R);
  }
  function _e(R) {
    L[R] || (L[R] = !0);
  }
  function H(R) {
    (!(R in L) || L[R]) && (L[R] = !1);
  }
  function M(R, ge) {
    O[R] != ge && (ge === "" || ge == null ? delete O[R] : O[R] = ge);
  }
  function Q(R) {
    Ee[R] || (Ee[R] = !0);
  }
  function De(R) {
    (!(R in Ee) || Ee[R]) && (Ee[R] = !1);
  }
  function lt(R) {
    return R in ee ? ee[R] ?? null : Fn().getAttribute(R);
  }
  function at(R, ge) {
    ee[R] !== ge && (ee[R] = ge);
  }
  function wt(R) {
    (!(R in ee) || ee[R] != null) && (ee[R] = void 0);
  }
  function jt() {
    return Ae.getOrderedList().map((R) => R.getValue());
  }
  function hr(R) {
    const ge = R.currentTarget.getBoundingClientRect();
    return (ft(R) ? R.touches[0].clientX : R.clientX) - ge.left;
  }
  function ft(R) {
    return "touches" in R;
  }
  function mt() {
    if (o(P) == null)
      throw new Error("Instance is undefined.");
    return o(P).getUseDefaultValidation();
  }
  function Ft(R) {
    var ge;
    (ge = o(P)) == null || ge.setUseDefaultValidation(R);
  }
  function Un() {
    re.focus();
  }
  function mi() {
    var R;
    (R = o(P)) == null || R.layout();
  }
  function Fn() {
    return te;
  }
  var He = {
    getUseDefaultValidation: mt,
    setUseDefaultValidation: Ft,
    focus: Un,
    layout: mi,
    getElement: Fn
  }, tt = vp(), et = z(tt);
  Ge(et, (R, ge, ut) => ({ class: R, style: ge, ...ut }), [
    () => Ue({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": m() || v() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": o(le),
      "mdc-data-table__pagination-rows-per-page-select": Ne === "data-table:pagination",
      ...L,
      [l()]: !0
    }),
    () => Object.entries(O).map(([R, ge]) => `${R}: ${ge};`).concat([c()]).join(" "),
    () => oi(U, [
      "input$",
      "anchor$",
      "label$",
      "outline$",
      "selectedTextContainer$",
      "selectedText$",
      "dropdownIcon$",
      "ripple$",
      "menu$",
      "list$",
      "helperText$"
    ])
  ]);
  var Dt = ce(et);
  {
    var fn = (R) => {
      var ge = fp();
      Ge(
        ge,
        (ut) => ({
          type: "hidden",
          required: _(),
          disabled: h(),
          value: p(),
          ...ut
        }),
        [() => ct(U, "input$")],
        void 0,
        void 0,
        !0
      ), w(R, ge);
    };
    ae(Dt, (R) => {
      y() && R(fn);
    });
  }
  var Ke = me(Dt, 2), pt = (R) => {
    var ge;
    re.focus(), o(P) && o(P).handleClick(hr(R)), (ge = e.anchor$onclick) == null || ge.call(e, R);
  }, Ot = (R) => {
    var ge;
    o(P) && o(P).handleKeydown(R), (ge = e.onkeydown) == null || ge.call(e, R);
  }, Qe = (R) => {
    var ge;
    o(P) && o(P).handleBlur(), We(Fn(), "blur", R), (ge = e.anchor$onblur) == null || ge.call(e, R);
  }, Lt = (R) => {
    var ge;
    o(P) && o(P).handleFocus(), We(Fn(), "focus", R), (ge = e.anchor$onfocus) == null || ge.call(e, R);
  };
  Ge(
    Ke,
    (R, ge) => ({
      class: R,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(ye),
      "aria-expanded": o(le) ? "true" : "false",
      "aria-describedby": o(B),
      role: "combobox",
      tabindex: "0",
      ...ee,
      ...ge,
      onclick: pt,
      onkeydown: Ot,
      onblur: Qe,
      onfocus: Lt
    }),
    [
      () => Ue({ "mdc-select__anchor": !0, [C()]: !0 }),
      () => ct(U, "anchor$")
    ]
  );
  var qt = ce(Ke);
  {
    var Zt = (R) => {
      var ge = hp();
      w(R, ge);
    };
    ae(qt, (R) => {
      f() === "filled" && R(Zt);
    });
  }
  var _t = me(qt, 2);
  {
    var Mt = (R) => {
      {
        let ge = /* @__PURE__ */ be(() => S() + "-smui-label"), ut = /* @__PURE__ */ be(() => n() !== ""), Rt = /* @__PURE__ */ be(() => ct(U, "label$"));
        Oe(
          gs(R, $e(
            {
              get id() {
                return o(ge);
              },
              get floatAbove() {
                return o(ut);
              },
              get required() {
                return _();
              }
            },
            () => o(Rt),
            {
              children: (Yn, Qn) => {
                var ra = J(), gi = z(ra);
                {
                  var Br = (Vr) => {
                  }, Fs = (Vr) => {
                    var Fa = J(), ia = z(Fa);
                    {
                      var ll = (mr) => {
                        var Gr = Et();
                        Le(() => Ze(Gr, v())), w(mr, Gr);
                      }, ka = (mr) => {
                        var Gr = J(), ks = z(Gr);
                        Se(ks, v), w(mr, Gr);
                      };
                      ae(
                        ia,
                        (mr) => {
                          typeof v() == "string" ? mr(ll) : mr(ka, !1);
                        },
                        !0
                      );
                    }
                    w(Vr, Fa);
                  };
                  ae(gi, (Vr) => {
                    v() == null ? Vr(Br) : Vr(Fs, !1);
                  });
                }
                w(Yn, ra);
              },
              $$slots: { default: !0 }
            }
          )),
          (Yn) => D = Yn,
          () => D
        );
      }
    };
    ae(_t, (R) => {
      f() !== "outlined" && !m() && v() != null && R(Mt);
    });
  }
  var sn = me(_t, 2);
  {
    var bt = (R) => {
      {
        let ge = /* @__PURE__ */ be(() => m() || v() == null), ut = /* @__PURE__ */ be(() => ct(U, "outline$"));
        Oe(
          Zc(R, $e(
            {
              get noLabel() {
                return o(ge);
              }
            },
            () => o(ut),
            {
              children: (Rt, Yn) => {
                var Qn = J(), ra = z(Qn);
                {
                  var gi = (Br) => {
                    {
                      let Fs = /* @__PURE__ */ be(() => S() + "-smui-label"), Vr = /* @__PURE__ */ be(() => n() !== ""), Fa = /* @__PURE__ */ be(() => ct(U, "label$"));
                      Oe(
                        gs(Br, $e(
                          {
                            get id() {
                              return o(Fs);
                            },
                            get floatAbove() {
                              return o(Vr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => o(Fa),
                          {
                            children: (ia, ll) => {
                              var ka = J(), mr = z(ka);
                              {
                                var Gr = (aa) => {
                                }, ks = (aa) => {
                                  var ul = J(), Ld = z(ul);
                                  {
                                    var Rd = (pi) => {
                                      var sa = Et();
                                      Le(() => Ze(sa, v())), w(pi, sa);
                                    }, Dd = (pi) => {
                                      var sa = J(), Md = z(sa);
                                      Se(Md, v), w(pi, sa);
                                    };
                                    ae(
                                      Ld,
                                      (pi) => {
                                        typeof v() == "string" ? pi(Rd) : pi(Dd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(aa, ul);
                                };
                                ae(mr, (aa) => {
                                  v() == null ? aa(Gr) : aa(ks, !1);
                                });
                              }
                              w(ia, ka);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ia) => D = ia,
                        () => D
                      );
                    }
                  };
                  ae(ra, (Br) => {
                    !m() && v() != null && Br(gi);
                  });
                }
                w(Rt, Qn);
              },
              $$slots: { default: !0 }
            }
          )),
          (Rt) => ve = Rt,
          () => ve
        );
      }
    };
    ae(sn, (R) => {
      f() === "outlined" && R(bt);
    });
  }
  var Fr = me(sn, 2);
  Se(Fr, () => e.leadingIcon ?? fe);
  var bn = me(Fr, 2);
  Ge(bn, (R, ge) => ({ class: R, ...ge }), [
    () => Ue({
      "mdc-select__selected-text-container": !0,
      [W()]: !0
    }),
    () => ct(U, "selectedTextContainer$")
  ]);
  var vr = ce(bn);
  Ge(
    vr,
    (R, ge) => ({
      id: S() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": S() + "-smui-label",
      ...ge
    }),
    [
      () => Ue({
        "mdc-select__selected-text": !0,
        [F()]: !0
      }),
      () => ct(U, "selectedText$")
    ]
  );
  var na = ce(vr);
  Fe(vr, (R, ge) => Z == null ? void 0 : Z(R, ge), k), Fe(bn, (R, ge) => Z == null ? void 0 : Z(R, ge), N);
  var _n = me(bn, 2);
  Ge(_n, (R, ge) => ({ class: R, ...ge }), [
    () => Ue({
      "mdc-select__dropdown-icon": !0,
      [G()]: !0
    }),
    () => ct(U, "dropdownIcon$")
  ]), Fe(_n, (R, ge) => Z == null ? void 0 : Z(R, ge), ue);
  var Zn = me(_n, 2);
  {
    var kn = (R) => {
      {
        let ge = /* @__PURE__ */ be(() => ct(U, "ripple$"));
        Oe(Kc(R, $e(() => o(ge))), (ut) => j = ut, () => j);
      }
    };
    ae(Zn, (R) => {
      f() !== "outlined" && d() && R(kn);
    });
  }
  Oe(Ke, (R) => re = R, () => re), Fe(Ke, (R, ge) => Z == null ? void 0 : Z(R, ge), x);
  var kr = me(Ke, 2);
  {
    let R = /* @__PURE__ */ be(() => Ue({
      "mdc-select__menu": !0,
      ...Ee,
      [V()]: !0
    })), ge = /* @__PURE__ */ be(() => ct(U, "menu$"));
    np(kr, $e(
      {
        get class() {
          return o(R);
        },
        get id() {
          return o(ye);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(q);
        },
        get anchorCorner() {
          return o(se);
        }
      },
      () => o(ge),
      {
        onSMUIMenuSelected: (ut) => {
          var Rt;
          o(P) && o(P).handleMenuItemAction(ut.detail.index), (Rt = e.onSMUIMenuSelected) == null || Rt.call(e, ut);
        },
        onSMUIMenuSurfaceClosing: (ut) => {
          var Rt;
          o(P) && o(P).handleMenuClosing(), (Rt = e.onSMUIMenuSurfaceClosing) == null || Rt.call(e, ut);
        },
        onSMUIMenuSurfaceClosed: (ut) => {
          var Rt;
          o(P) && o(P).handleMenuClosed(), (Rt = e.onSMUIMenuSurfaceClosed) == null || Rt.call(e, ut);
        },
        onSMUIMenuSurfaceOpened: (ut) => {
          var Rt;
          o(P) && o(P).handleMenuOpened(), (Rt = e.onSMUIMenuSurfaceOpened) == null || Rt.call(e, ut);
        },
        get open() {
          return o(le);
        },
        set open(ut) {
          K(le, ut, !0);
        },
        children: (ut, Rt) => {
          {
            let Yn = /* @__PURE__ */ be(() => ct(U, "list$"));
            rp(ut, $e(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Re);
                }
              },
              () => o(Yn),
              {
                get selectedIndex() {
                  return o($);
                },
                set selectedIndex(Qn) {
                  K($, Qn, !0);
                },
                children: (Qn, ra) => {
                  var gi = J(), Br = z(gi);
                  Se(Br, () => e.children ?? fe), w(Qn, gi);
                },
                $$slots: { default: !0 }
              }
            ));
          }
        },
        $$slots: { default: !0 }
      }
    ));
  }
  Oe(et, (R) => te = R, () => te), Fe(et, (R, ge) => Jt == null ? void 0 : Jt(R, ge), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: _e,
    removeClass: H,
    addStyle: M
  })), Fe(et, (R, ge) => eo == null ? void 0 : eo(R, ge), () => ({ addClass: _e, removeClass: H })), Fe(et, (R, ge) => Z == null ? void 0 : Z(R, ge), u);
  var Us = me(et, 2);
  {
    var wd = (R) => {
      {
        let ge = /* @__PURE__ */ be(() => ct(U, "helperText$"));
        cp(R, $e(() => o(ge), {
          children: (ut, Rt) => {
            var Yn = J(), Qn = z(Yn);
            Se(Qn, () => e.helperText ?? fe), w(ut, Yn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(Us, (R) => {
      e.helperText && R(wd);
    });
  }
  Le(() => Ze(na, n())), w(t, tt);
  var Od = Te(He);
  return i(), Od;
}
function gp(t, e) {
  xe(e, !0);
  const n = () => Pn(d, "$selectedValue", r), [r, i] = Kn();
  let a = g(e, "use", 19, () => []);
  g(e, "class", 3, "");
  let s = g(e, "value", 3, ""), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = he("SMUI:select:selectedText"), d = he("SMUI:select:value");
  oe("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ be(() => s() != null && s() !== "" && n() === s());
  ot(f), pn(f);
  function f() {
    o(h) && l && Mn(c, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var v = { getElement: m };
  Oe(
    op(t, $e(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return s();
        },
        get value() {
          return s();
        },
        get selected() {
          return o(h);
        }
      },
      () => u,
      {
        children: (b, I) => {
          var E = J(), A = z(E);
          Se(A, () => e.children ?? fe), w(b, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var p = Te(v);
  return i(), p;
}
function pp(t, e) {
  xe(e, !0);
  let n = g(e, "data", 19, () => []);
  g(e, "placeholder", 3, "");
  let r = g(e, "label", 3, "");
  g(e, "description", 3, "");
  let i = g(e, "value", 15), a = g(e, "required", 3, !1);
  g(e, "size", 3, "sm");
  let s = g(e, "variant", 3, "standard"), u = g(e, "selectedOptionIndex", 31, () => -1), l = g(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
  }
  mp(t, {
    get disabled() {
      return l();
    },
    key: (d) => `${d ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get variant() {
      return s();
    },
    get required() {
      return a();
    },
    get value() {
      return i();
    },
    set value(d) {
      i(d);
    },
    children: (d, h) => {
      var f = J(), m = z(f);
      rr(m, 17, n, Ti, (v, p, b) => {
        {
          let I = /* @__PURE__ */ be(() => c(b));
          gp(v, {
            get onclick() {
              return o(I);
            },
            get value() {
              return o(p).value;
            },
            children: (E, A) => {
              var _ = Et();
              Le(() => Ze(_, o(p).label)), w(E, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(d, f);
    },
    $$slots: { default: !0 }
  }), Te();
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function bp(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function _p(t) {
  return t ? t.scrollTop === 0 : !1;
}
function yp(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function Ip(t) {
  var e = /* @__PURE__ */ new Set();
  return [].forEach.call(t, function(n) {
    return e.add(n.offsetTop);
  }), e.size > 1;
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ep = (
  /** @class */
  function() {
    function t() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return t.prototype.request = function(e, n) {
      var r = this;
      this.cancel(e);
      var i = requestAnimationFrame(function(a) {
        r.rafIDs.delete(e), n(a);
      });
      this.rafIDs.set(e, i);
    }, t.prototype.cancel = function(e) {
      var n = this.rafIDs.get(e);
      n && (cancelAnimationFrame(n), this.rafIDs.delete(e));
    }, t.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(n, r) {
        e.cancel(r);
      });
    }, t.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(n, r) {
        e.push(r);
      }), e;
    }, t;
  }()
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var rt = {
  CLOSING: "mdc-dialog--closing",
  OPEN: "mdc-dialog--open",
  OPENING: "mdc-dialog--opening",
  SCROLLABLE: "mdc-dialog--scrollable",
  SCROLL_LOCK: "mdc-dialog-scroll-lock",
  STACKED: "mdc-dialog--stacked",
  FULLSCREEN: "mdc-dialog--fullscreen",
  // Class for showing a scroll divider on full-screen dialog header element.
  // Should only be displayed on scrollable content, when the dialog content is
  // scrolled "underneath" the header.
  SCROLL_DIVIDER_HEADER: "mdc-dialog-scroll-divider-header",
  // Class for showing a scroll divider on a full-screen dialog footer element.
  // Should only be displayed on scrolalble content, when the dialog content is
  // obscured "underneath" the footer.
  SCROLL_DIVIDER_FOOTER: "mdc-dialog-scroll-divider-footer",
  // The "surface scrim" is a scrim covering only the surface of a dialog. This
  // is used in situations where a confirmation dialog is shown over an already
  // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
  // is sized as a modal and so in these situations we display a "surface scrim"
  // to prevent a "double scrim" (where the scrim from the secondary
  // confirmation dialog would overlap with the scrim from the full-screen
  // dialog).
  SURFACE_SCRIM_SHOWN: "mdc-dialog__surface-scrim--shown",
  // "Showing" animating class for the surface-scrim.
  SURFACE_SCRIM_SHOWING: "mdc-dialog__surface-scrim--showing",
  // "Hiding" animating class for the surface-scrim.
  SURFACE_SCRIM_HIDING: "mdc-dialog__surface-scrim--hiding",
  // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
  // Note that we only hide the original scrim rather than removing it entirely
  // to prevent interactions with the content behind this scrim, and to capture
  // scrim clicks.
  SCRIM_HIDDEN: "mdc-dialog__scrim--hidden"
}, da = {
  ACTION_ATTRIBUTE: "data-mdc-dialog-action",
  BUTTON_DEFAULT_ATTRIBUTE: "data-mdc-dialog-button-default",
  BUTTON_SELECTOR: ".mdc-dialog__button",
  CLOSED_EVENT: "MDCDialog:closed",
  CLOSE_ACTION: "close",
  CLOSING_EVENT: "MDCDialog:closing",
  CONTAINER_SELECTOR: ".mdc-dialog__container",
  CONTENT_SELECTOR: ".mdc-dialog__content",
  DESTROY_ACTION: "destroy",
  INITIAL_FOCUS_ATTRIBUTE: "data-mdc-dialog-initial-focus",
  OPENED_EVENT: "MDCDialog:opened",
  OPENING_EVENT: "MDCDialog:opening",
  SCRIM_SELECTOR: ".mdc-dialog__scrim",
  SUPPRESS_DEFAULT_PRESS_SELECTOR: [
    "textarea",
    ".mdc-menu .mdc-list-item",
    ".mdc-menu .mdc-deprecated-list-item"
  ].join(", "),
  SURFACE_SELECTOR: ".mdc-dialog__surface"
}, to = {
  DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
  DIALOG_ANIMATION_OPEN_TIME_MS: 150
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ps;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(ps || (ps = {}));
var Sp = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = da.CLOSE_ACTION, r.scrimClickAction = da.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = da.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Ep(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return da;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return to;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addBodyClass: function() {
          },
          addClass: function() {
          },
          areButtonsStacked: function() {
            return !1;
          },
          clickDefaultButton: function() {
          },
          eventTargetMatches: function() {
            return !1;
          },
          getActionFromEvent: function() {
            return "";
          },
          getInitialFocusEl: function() {
            return null;
          },
          hasClass: function() {
            return !1;
          },
          isContentScrollable: function() {
            return !1;
          },
          notifyClosed: function() {
          },
          notifyClosing: function() {
          },
          notifyOpened: function() {
          },
          notifyOpening: function() {
          },
          releaseFocus: function() {
          },
          removeBodyClass: function() {
          },
          removeClass: function() {
          },
          reverseButtons: function() {
          },
          trapFocus: function() {
          },
          registerContentEventHandler: function() {
          },
          deregisterContentEventHandler: function() {
          },
          isScrollableContentAtTop: function() {
            return !1;
          },
          isScrollableContentAtBottom: function() {
            return !1;
          },
          registerWindowEventHandler: function() {
          },
          deregisterWindowEventHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.hasClass(rt.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(rt.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(rt.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(rt.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(rt.OPEN), r.adapter.addBodyClass(rt.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, to.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(rt.CLOSING), this.adapter.removeClass(rt.OPEN), this.adapter.removeBodyClass(rt.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, to.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(rt.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(rt.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(rt.SURFACE_SCRIM_SHOWN), this.adapter.addClass(rt.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(rt.SURFACE_SCRIM_HIDING), this.adapter.removeClass(rt.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(n) {
      this.escapeKeyAction = n;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(n) {
      this.scrimClickAction = n;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(n) {
      this.autoStackButtons = n;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(n) {
      this.suppressDefaultPressSelector = n;
    }, e.prototype.layout = function() {
      var n = this;
      this.animFrame.request(ps.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, da.SCRIM_SELECTOR);
      if (r && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var i = this.adapter.getActionFromEvent(n);
        i && this.close(i);
      }
    }, e.prototype.handleKeydown = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      if (r) {
        var i = this.adapter.getActionFromEvent(n);
        if (!i) {
          var a = n.composedPath ? n.composedPath()[0] : n.target, s = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          r && s && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(n) {
      var r = n.key === "Escape" || n.keyCode === 27;
      r && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var n = this;
      this.animFrame.request(ps.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(rt.OPENING), this.adapter.removeClass(rt.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(rt.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(rt.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(rt.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(rt.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(rt.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(rt.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(rt.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(rt.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(rt.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(rt.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(Gt)
), Ap = /* @__PURE__ */ de('<div class="mdc-dialog__surface-scrim"></div>'), Cp = /* @__PURE__ */ de('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function $c(t, e) {
  xe(e, !0);
  const n = () => Pn(k, "$aboveFullscreenShown", r), [r, i] = Kn(), { FocusTrap: a } = zm, { closest: s, matches: u } = Na;
  let l = g(e, "use", 19, () => []), c = g(e, "class", 3, ""), d = g(e, "open", 15, !1), h = g(e, "selection", 3, !1), f = g(e, "escapeKeyAction", 3, "close"), m = g(e, "scrimClickAction", 3, "close"), v = g(e, "autoStackButtons", 3, !0), p = g(e, "fullscreen", 3, !1), b = g(e, "sheet", 3, !1), I = g(e, "noContentPadding", 3, !1), E = g(e, "container$class", 3, ""), A = g(e, "surface$class", 3, ""), _ = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "selection",
    "escapeKeyAction",
    "scrimClickAction",
    "autoStackButtons",
    "fullscreen",
    "sheet",
    "noContentPadding",
    "container$class",
    "surface$class",
    "children",
    "over"
  ]), S, y = /* @__PURE__ */ Ie(void 0), T = new hi(), x = Ce({}), C, N = Ut(!1), W = he("SMUI:dialog:aboveFullscreen"), k = he("SMUI:dialog:aboveFullscreenShown") ?? Ut(!1), F = he("SMUI:addLayoutListener"), ue, G = [], V = (H) => (G.push(H), () => {
    const M = G.indexOf(H);
    M >= 0 && G.splice(M, 1);
  });
  oe("SMUI:dialog:actions:reversed", N), oe("SMUI:addLayoutListener", V), oe("SMUI:dialog:selection", h()), oe("SMUI:dialog:aboveFullscreen", W || p()), oe("SMUI:dialog:aboveFullscreenShown", k), b() && oe("SMUI:icon-button:context", "dialog:sheet"), we(() => {
    o(y) && o(y).getEscapeKeyAction() !== f() && o(y).setEscapeKeyAction(f());
  }), we(() => {
    o(y) && o(y).getScrimClickAction() !== m() && o(y).setScrimClickAction(m());
  }), we(() => {
    o(y) && o(y).getAutoStackButtons() !== v() && o(y).setAutoStackButtons(v());
  }), we(() => {
    v() || Mn(N, !0);
  }), F && (ue = F(le)), we(() => {
    o(y) && o(y).isOpen() !== d() && (d() ? o(y).open({ isAboveFullscreenDialog: !!W }) : o(y).close());
  });
  let U = n();
  we(() => {
    p() && o(y) && U !== n() && (U = n(), n() ? o(y).showSurfaceScrim() : o(y).hideSurfaceScrim());
  }), ot(() => (C = new a(S, { initialFocusEl: ee() ?? void 0 }), K(
    y,
    new Sp({
      addBodyClass: (H) => document.body.classList.add(H),
      addClass: te,
      areButtonsStacked: () => Ip(L()),
      clickDefaultButton: () => {
        const H = O();
        H && H.click();
      },
      eventTargetMatches: (H, M) => H ? u(H, M) : !1,
      getActionFromEvent: (H) => {
        if (!H.target)
          return "";
        const M = s(H.target, "[data-mdc-dialog-action]");
        return M && M.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: ee,
      hasClass: X,
      isContentScrollable: () => bp(re()),
      notifyClosed: (H) => {
        d(!1), We(Ee(), "SMUIDialogClosed", H ? { action: H } : {});
      },
      notifyClosing: (H) => We(Ee(), "SMUIDialogClosing", H ? { action: H } : {}),
      notifyOpened: () => We(Ee(), "SMUIDialogOpened", {}),
      notifyOpening: () => We(Ee(), "SMUIDialogOpening", {}),
      releaseFocus: () => C.releaseFocus(),
      removeBodyClass: (H) => document.body.classList.remove(H),
      removeClass: P,
      reverseButtons: () => {
        Mn(N, !0);
      },
      trapFocus: () => C.trapFocus(),
      registerContentEventHandler: (H, M) => {
        const Q = re();
        Q instanceof HTMLElement && T.on(Q, H, M);
      },
      deregisterContentEventHandler: (H, M) => {
        const Q = re();
        Q instanceof HTMLElement && T.off(Q, H, M);
      },
      isScrollableContentAtTop: () => _p(re()),
      isScrollableContentAtBottom: () => yp(re()),
      registerWindowEventHandler: (H, M) => T.on(window, H, M),
      deregisterWindowEventHandler: (H, M) => T.off(window, H, M)
    }),
    !0
  ), o(y).init(), () => {
    var H;
    (H = o(y)) == null || H.destroy(), T.clear();
  })), pn(() => {
    ue && ue();
  });
  function X(H) {
    return H in x ? x[H] : Ee().classList.contains(H);
  }
  function te(H) {
    x[H] || (x[H] = !0);
  }
  function P(H) {
    (!(H in x) || x[H]) && (x[H] = !1);
  }
  function L() {
    return [].slice.call(Ee().querySelectorAll(".mdc-dialog__button"));
  }
  function O() {
    return Ee().querySelector("[data-mdc-dialog-button-default]");
  }
  function re() {
    return Ee().querySelector(".mdc-dialog__content");
  }
  function ee() {
    return Ee().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function $() {
    W && Mn(k, !0), requestAnimationFrame(() => {
      G.forEach((H) => H());
    });
  }
  function ye() {
    G.forEach((H) => H());
  }
  function B() {
    W && Mn(k, !1);
  }
  function ie() {
    return d();
  }
  function Y(H) {
    d(H);
  }
  function le() {
    var H;
    return (H = o(y)) == null ? void 0 : H.layout();
  }
  function Ee() {
    return S;
  }
  var q = { isOpen: ie, setOpen: Y, layout: le, getElement: Ee }, se = Cp();
  lr("resize", os, () => d() && o(y) && o(y).layout()), lr("orientationchange", os, () => d() && o(y) && o(y).layout()), lr("keydown", Go.body, (H) => o(y) && o(y).handleDocumentKeydown(H));
  var Re = z(se), Ae = (H) => {
    var M;
    $(), (M = e.onSMUIDialogOpening) == null || M.call(e, H);
  }, Ne = (H) => {
    var M;
    ye(), (M = e.onSMUIDialogOpened) == null || M.call(e, H);
  }, Ye = (H) => {
    var M;
    B(), (M = e.onSMUIDialogClosed) == null || M.call(e, H);
  }, dt = (H) => {
    var M;
    o(y) && o(y).handleClick(H), (M = e.onclick) == null || M.call(e, H);
  }, D = (H) => {
    var M;
    o(y) && o(y).handleKeydown(H), (M = e.onkeydown) == null || M.call(e, H);
  };
  Ge(
    Re,
    (H, M) => ({
      class: H,
      role: "alertdialog",
      "aria-modal": "true",
      ...M,
      onSMUIDialogOpening: Ae,
      onSMUIDialogOpened: Ne,
      onSMUIDialogClosed: Ye,
      onclick: dt,
      onkeydown: D
    }),
    [
      () => Ue({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !v(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": b(),
        "mdc-dialog--no-content-padding": I(),
        "smui-dialog--selection": h(),
        ...x,
        [c()]: !0
      }),
      () => oi(_, ["container$", "surface$"])
    ]
  );
  var j = ce(Re);
  Ge(j, (H, M) => ({ class: H, ...M }), [
    () => Ue({ "mdc-dialog__container": !0, [E()]: !0 }),
    () => ct(_, "container$")
  ]);
  var ve = ce(j);
  Ge(ve, (H, M) => ({ class: H, role: "alertdialog", "aria-modal": "true", ...M }), [
    () => Ue({ "mdc-dialog__surface": !0, [A()]: !0 }),
    () => ct(_, "surface$")
  ]);
  var ke = ce(ve);
  Se(ke, () => e.children ?? fe);
  var xt = me(ke, 2);
  {
    var Tt = (H) => {
      var M = Ap();
      lr("transitionend", M, () => o(y) && o(y).handleSurfaceScrimTransitionEnd()), w(H, M);
    };
    ae(xt, (H) => {
      p() && H(Tt);
    });
  }
  Oe(Re, (H) => S = H, () => S), Fe(Re, (H, M) => Z == null ? void 0 : Z(H, M), l);
  var dn = me(Re, 2);
  Se(dn, () => e.over ?? fe), w(t, se);
  var _e = Te(q);
  return i(), _e;
}
function xp(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => n,
      {
        children: (s, u) => {
          var l = J(), c = z(l);
          Se(c, () => e.children ?? fe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
function Jo(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (s, u) => {
        var l = J(), c = z(l);
        Se(c, () => e.children ?? fe), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
function ed(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    ta(t, $e(
      {
        _smuiClass: "mdc-dialog__actions",
        _smuiClassMap: {
          "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
        },
        _smuiContexts: { "SMUI:button:context": "dialog:action" },
        tag: "div"
      },
      () => n,
      {
        children: (s, u) => {
          var l = J(), c = z(l);
          Se(c, () => e.children ?? fe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var Tp = /* @__PURE__ */ de('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function wp(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "onClose", 3, () => {
  });
  $c(t, {
    "aria-labelledby": "large-scroll-title",
    "aria-describedby": "large-scroll-content",
    onSMUIDialogClosed: (i) => {
      n(!1), r()();
    },
    surface$style: "width: 1080px; max-width: calc(100vw - 32px);",
    get open() {
      return n();
    },
    set open(i) {
      n(i);
    },
    children: (i, a) => {
      var s = Tp(), u = z(s), l = ce(u);
      Se(l, () => e.title ?? fe);
      var c = me(u, 2);
      Jo(c, {
        id: "large-scroll-content",
        children: (h, f) => {
          var m = J(), v = z(m);
          Se(v, () => e.content ?? fe), w(h, m);
        },
        $$slots: { default: !0 }
      });
      var d = me(c, 2);
      ed(d, {
        children: (h, f) => {
          var m = J(), v = z(m);
          Se(v, () => e.actions ?? fe), w(h, m);
        },
        $$slots: { default: !0 }
      }), w(i, s);
    },
    $$slots: { default: !0 }
  }), Te();
}
const $o = Ut({
  component: null,
  props: {},
  isOpen: !1
}), Op = Ut([]);
Op.subscribe;
const iu = Ce({ freeze: !1 });
function Lp(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ie(void 0), r = /* @__PURE__ */ Ie(!1);
  const i = $o.subscribe((l) => {
    K(n, l, !0), K(r, l.isOpen, !0), iu.freeze = !1;
  });
  ot(() => () => i()), we(() => {
    iu.freeze = o(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = J(), s = z(a);
  {
    var u = (l) => {
      var c = J(), d = z(c);
      fr(d, () => o(n).component, (h, f) => {
        f(h, $e(() => o(n).props, {
          get open() {
            return o(r);
          },
          set open(m) {
            K(r, m, !0);
          }
        }));
      }), w(l, c);
    };
    ae(s, (l) => {
      o(n).isOpen && o(n).component && l(u);
    });
  }
  w(t, a), Te();
}
function Rp(t, e = {}) {
  return new Promise((n) => {
    $o.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function no(t, e) {
  $o.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
var Dp = /* @__PURE__ */ de('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function Mp(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "title", 3, ""), i = g(e, "message", 3, ""), a = g(e, "confirmActionText", 3, "OK"), s = g(e, "confirmActionColor", 3, "primary"), u = g(e, "cancelActionText", 3, "Cancel"), l = g(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    no("confirm");
  }
  function d() {
    no("cancel");
  }
  Up(t, {
    get title() {
      return r();
    },
    get confirmActionText() {
      return a();
    },
    get confirmActionColor() {
      return s();
    },
    get cancelActionText() {
      return u();
    },
    get color() {
      return l();
    },
    onConfirm: () => c(),
    onCancel: () => d(),
    onClose: () => no("cancel"),
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    maxHeight: "auto",
    get open() {
      return n();
    },
    set open(f) {
      n(f);
    },
    content: (f) => {
      Jo(f, {
        children: (m, v) => {
          var p = Dp(), b = ce(p);
          Le(() => Ze(b, i())), w(m, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Te();
}
var Hp = /* @__PURE__ */ de('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), Pp = /* @__PURE__ */ de("<!> <!>", 1), Np = /* @__PURE__ */ de('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function Up(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "title", 3, ""), i = g(e, "confirmActionText", 3, "Confirm"), a = g(e, "confirmActionColor", 3, "primary"), s = g(e, "cancelActionText", 3, "Cancel"), u = g(e, "width", 3, "80vw"), l = g(e, "maxWidth", 3, "85vw"), c = g(e, "height", 3, "85vh"), d = g(e, "maxHeight", 3, "85vh"), h = g(e, "confirmDisabled", 3, !1), f = g(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), m = g(e, "showCloseButton", 3, !0), v = g(e, "onClose", 3, () => {
  }), p = g(e, "onCancel", 3, () => {
  }), b = g(e, "onConfirm", 3, () => {
  });
  function I(A) {
    A.detail.action === "cancel" ? p()() : A.detail.action === "confirm" ? b()() : (A.detail.action, v()());
  }
  let E = /* @__PURE__ */ be(() => {
    let A;
    return a() === "primary" ? A = f() : A = "#FF203A", h() ? "" : `background-color: ${A}; color: white;`;
  });
  {
    let A = /* @__PURE__ */ be(() => `width: ${u()}; max-width: ${l()}; height: ${c()}; max-height: ${d()};`);
    $c(t, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: I,
      get surface$style() {
        return o(A);
      },
      get open() {
        return n();
      },
      set open(_) {
        n(_);
      },
      children: (_, S) => {
        var y = Np(), T = z(y);
        xp(T, {
          children: (W, k) => {
            var F = Hp(), ue = ce(F), G = ce(ue), V = me(ue, 2);
            {
              var U = (X) => {
                Yb(X, {
                  tabindex: "-1",
                  onClick: () => {
                    n(!1), v()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              ae(V, (X) => {
                m() && X(U);
              });
            }
            Le(() => {
              vt(F, `background-color: ${f()};`), Ze(G, r());
            }), w(W, F);
          },
          $$slots: { default: !0 }
        });
        var x = me(T, 2);
        Jo(x, {
          id: "dialog__content",
          children: (W, k) => {
            var F = J(), ue = z(F);
            Se(ue, () => e.content ?? fe), w(W, F);
          },
          $$slots: { default: !0 }
        });
        var C = me(x, 2), N = ce(C);
        ed(N, {
          class: "oscd-dialog__actions",
          children: (W, k) => {
            var F = Pp(), ue = z(F);
            {
              var G = (U) => {
                ms(U, {
                  type: "button",
                  action: "cancel",
                  color: "secondary",
                  children: (X, te) => {
                    var P = Et();
                    Le(() => Ze(P, s())), w(X, P);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(ue, (U) => {
                s() && U(G);
              });
            }
            var V = me(ue, 2);
            ms(V, {
              type: "button",
              action: "confirm",
              get disabled() {
                return h();
              },
              get style() {
                return o(E);
              },
              children: (U, X) => {
                var te = Et();
                Le(() => Ze(te, i())), w(U, te);
              },
              $$slots: { default: !0 }
            }), w(W, F);
          },
          $$slots: { default: !0 }
        }), w(_, y);
      },
      $$slots: { default: !0 }
    });
  }
  Te();
}
const kt = [];
for (let t = 0; t < 256; ++t)
  kt.push((t + 256).toString(16).slice(1));
function Fp(t, e = 0) {
  return (kt[t[e + 0]] + kt[t[e + 1]] + kt[t[e + 2]] + kt[t[e + 3]] + "-" + kt[t[e + 4]] + kt[t[e + 5]] + "-" + kt[t[e + 6]] + kt[t[e + 7]] + "-" + kt[t[e + 8]] + kt[t[e + 9]] + "-" + kt[t[e + 10]] + kt[t[e + 11]] + kt[t[e + 12]] + kt[t[e + 13]] + kt[t[e + 14]] + kt[t[e + 15]]).toLowerCase();
}
let ro;
const kp = new Uint8Array(16);
function Bp() {
  if (!ro) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    ro = crypto.getRandomValues.bind(crypto);
  }
  return ro(kp);
}
const Vp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), au = { randomUUID: Vp };
function Xr(t, e, n) {
  var i;
  if (au.randomUUID && !e && !t)
    return au.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Bp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return Fp(r);
}
var Gp = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function Kt(t, e) {
  var n = Gp(), r = ce(n);
  Se(r, () => e.children ?? fe), w(t, n);
}
var jp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function qp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = jp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var zp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function el(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = zp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Wp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Xp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Wp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Kp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function Zp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Kp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Yp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function Qp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Yp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Jp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function $p(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = Jp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var eb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function td(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = eb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var tb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function nd(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = tb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var nb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function rb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = nb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var ib = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function ab(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = ib();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
sf();
var sb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function ob(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = sb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var lb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function ub(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = lb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var cb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function db(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = cb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var fb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function hb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Kt(t, {
    children: (r, i) => {
      var a = fb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var vb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function mb(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Kt(t, {
    children: (r, i) => {
      var a = vb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var gb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function pb(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Kt(t, {
    children: (r, i) => {
      var a = gb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
function bb(t, e) {
  e(t.target.value);
}
var _b = /* @__PURE__ */ de('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function yb(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = _b(), a = ce(i);
  a.__change = [bb, r];
  var s = me(a, 2), u = ce(s);
  Le(() => Ze(u, n())), Ea(a, r), w(t, i), Te();
}
wn(["change"]);
function Ib(t, e) {
  e(t.target.value);
}
var Eb = /* @__PURE__ */ de('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Sb(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = Eb(), a = ce(i);
  a.__change = [Ib, r];
  var s = me(a, 2), u = ce(s);
  Le(() => Ze(u, n())), Ea(a, r), w(t, i), Te();
}
wn(["change"]);
function Ab(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Cb = /* @__PURE__ */ de('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Ca(t, e) {
  xe(e, !0);
  let n = g(e, "content", 3, ""), r = g(e, "side", 3, "top"), i = g(e, "hoverDelay", 3, 0), a = g(e, "transitionDuration", 3, 80), s = g(e, "disabled", 3, !1);
  const u = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ Ie(null), c = /* @__PURE__ */ Ie(null), d = /* @__PURE__ */ Ie(null), h = /* @__PURE__ */ Ie(null), f = /* @__PURE__ */ Ie(!1), m = /* @__PURE__ */ Ie(null), v = /* @__PURE__ */ Ie(null);
  function p() {
    !n() || s() || (o(m) && clearTimeout(o(m)), i() > 0 ? K(m, setTimeout(() => K(f, !0), i()), !0) : K(f, !0));
  }
  function b() {
    o(m) && clearTimeout(o(m)), K(f, !1);
  }
  function I() {
    p();
  }
  function E() {
    b();
  }
  function A() {
    p();
  }
  function _() {
    b();
  }
  function S() {
    if (!o(c) || !o(h) || !o(l) || s()) return;
    const C = o(l).getBoundingClientRect(), N = o(h).getBoundingClientRect();
    let W = 0, k = 0;
    const F = 8;
    switch (r()) {
      case "top":
        W = C.top - N.height - F, k = C.left + C.width / 2 - N.width / 2;
        break;
      case "bottom":
        W = C.bottom + F, k = C.left + C.width / 2 - N.width / 2;
        break;
      case "left":
        W = C.top + C.height / 2 - N.height / 2, k = C.left - N.width - F;
        break;
      case "right":
        W = C.top + C.height / 2 - N.height / 2, k = C.right + F;
        break;
    }
    o(c).style.top = `${W + window.scrollY}px`, o(c).style.left = `${k + window.scrollX}px`;
  }
  function y() {
    var C;
    (C = o(v)) == null || C.disconnect(), K(v, null), o(c) && o(c).parentNode && o(c).parentNode.removeChild(o(c)), K(c, null), K(h, null), K(d, null), o(m) && clearTimeout(o(m));
  }
  pn(y), we(() => {
    if (!(!o(f) || !n() || s())) {
      if (!o(c)) {
        K(c, document.createElement("div"), !0), o(c).style.position = "absolute", o(c).style.zIndex = "9999", o(c).style.pointerEvents = "none", o(c).style.opacity = "0", o(c).style.transition = `opacity ${a()}ms ease`, o(c).id = u, o(c).setAttribute("role", "tooltip"), document.body.appendChild(o(c)), K(d, o(c).attachShadow({ mode: "open" }), !0);
        const C = document.createElement("style");
        C.textContent = `
        .bubble {
          --pad-y: 6px;
          --pad-x: 10px;
          --radius: 4px;
          background: #000;
          color: #fff;
          font-size: 0.85rem;
          line-height: 1.2;
          padding: var(--pad-y) var(--pad-x);
          border-radius: var(--radius);
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(0,0,0,.25);
          pointer-events: none;
          position: relative;
          transition: none;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        }
        .bubble::after {
          content: "";
          position: absolute;
          background: #000;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
        }
        .bubble.top::after {
          left: 50%;
          bottom: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.bottom::after {
          left: 50%;
          top: -4px;
          transform: translateX(-50%) rotate(45deg);
        }
        .bubble.left::after {
          top: 50%;
          right: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
        .bubble.right::after {
          top: 50%;
          left: -4px;
          transform: translateY(-50%) rotate(45deg);
        }
      `, o(d).appendChild(C), K(h, document.createElement("div"), !0), o(d).appendChild(o(h)), K(
          v,
          new MutationObserver(() => {
            o(f) && S();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = n()), o(c) && (o(c).style.opacity = "1", S());
    }
  }), we(() => {
    if (o(f) || !o(c))
      return;
    o(c).style.opacity = "0";
    const C = o(c), N = setTimeout(
      () => {
        C && C.parentNode && C.parentNode.removeChild(C), o(c) === C && y();
      },
      a()
    );
    return () => clearTimeout(N);
  });
  var T = Cb();
  T.__keydown = [Ab, n, p, b];
  var x = ce(T);
  Se(x, () => e.children ?? fe), Oe(T, (C) => K(l, C), () => o(l)), Le(() => {
    ur(T, "aria-describedby", n() && !s() ? u : void 0), ur(T, "aria-haspopup", n() ? "true" : void 0), ur(T, "aria-expanded", n() ? o(f) ? "true" : "false" : void 0);
  }), lr("mouseenter", T, I), lr("mouseleave", T, E), lr("focus", T, A), lr("blur", T, _), w(t, T), Te();
}
wn(["keydown"]);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var fa = {
  ANIM_CHECKED_INDETERMINATE: "mdc-checkbox--anim-checked-indeterminate",
  ANIM_CHECKED_UNCHECKED: "mdc-checkbox--anim-checked-unchecked",
  ANIM_INDETERMINATE_CHECKED: "mdc-checkbox--anim-indeterminate-checked",
  ANIM_INDETERMINATE_UNCHECKED: "mdc-checkbox--anim-indeterminate-unchecked",
  ANIM_UNCHECKED_CHECKED: "mdc-checkbox--anim-unchecked-checked",
  ANIM_UNCHECKED_INDETERMINATE: "mdc-checkbox--anim-unchecked-indeterminate",
  BACKGROUND: "mdc-checkbox__background",
  CHECKED: "mdc-checkbox--checked",
  CHECKMARK: "mdc-checkbox__checkmark",
  CHECKMARK_PATH: "mdc-checkbox__checkmark-path",
  DISABLED: "mdc-checkbox--disabled",
  INDETERMINATE: "mdc-checkbox--indeterminate",
  MIXEDMARK: "mdc-checkbox__mixedmark",
  NATIVE_CONTROL: "mdc-checkbox__native-control",
  ROOT: "mdc-checkbox",
  SELECTED: "mdc-checkbox--selected",
  UPGRADED: "mdc-checkbox--upgraded"
}, yn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, su = {
  ANIM_END_LATCH_MS: 250
};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var xb = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = yn.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return yn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return su;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          forceLayout: function() {
          },
          hasNativeControl: function() {
            return !1;
          },
          isAttachedToDOM: function() {
            return !1;
          },
          isChecked: function() {
            return !1;
          },
          isIndeterminate: function() {
            return !1;
          },
          removeClass: function() {
          },
          removeNativeControlAttr: function() {
          },
          setNativeControlAttr: function() {
          },
          setNativeControlDisabled: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(fa.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(fa.DISABLED) : this.adapter.removeClass(fa.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, su.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = yn.TRANSITION_STATE_UNCHECKED, a = fa.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = yn.TRANSITION_STATE_INDETERMINATE, r = yn.TRANSITION_STATE_CHECKED, i = yn.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = yn.TRANSITION_STATE_INIT, a = yn.TRANSITION_STATE_CHECKED, s = yn.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, h = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, m = u.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === s ? "" : r === a ? f : m;
        case s:
          return r === a ? l : c;
        case a:
          return r === s ? d : h;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(yn.ARIA_CHECKED_ATTR, yn.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(yn.ARIA_CHECKED_ATTR);
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var hn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Ln = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ha = {
  PRIMARY_HALF: 0.8367142,
  PRIMARY_FULL: 2.00611057,
  SECONDARY_QUARTER: 0.37651913,
  SECONDARY_HALF: 0.84386165,
  SECONDARY_FULL: 1.60277782
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Tb = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return hn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ln;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          attachResizeObserver: function() {
            return null;
          },
          forceLayout: function() {
          },
          getWidth: function() {
            return 0;
          },
          hasClass: function() {
            return !1;
          },
          setBufferBarStyle: function() {
            return null;
          },
          setPrimaryBarStyle: function() {
            return null;
          },
          setStyle: function() {
          },
          removeAttribute: function() {
          },
          removeClass: function() {
          },
          setAttribute: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      var n = this;
      this.determinate = !this.adapter.hasClass(hn.INDETERMINATE_CLASS), this.adapter.addClass(hn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var s = Pt(r), u = s.next(); !u.done; u = s.next()) {
              var l = u.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              u && !u.done && (a = s.return) && a.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(hn.INDETERMINATE_CLASS), this.adapter.setAttribute(Ln.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Ln.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Ln.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(hn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Ln.ARIA_VALUENOW), this.adapter.removeAttribute(Ln.ARIA_VALUEMAX), this.adapter.removeAttribute(Ln.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Ln.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(hn.CLOSED_CLASS), this.adapter.removeClass(hn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Ln.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(hn.CLOSED_CLASS), this.adapter.setAttribute(Ln.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(hn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(hn.CLOSED_CLASS) && this.adapter.addClass(hn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(hn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(hn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Zg(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Ln.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ha.PRIMARY_HALF, i = n * ha.PRIMARY_FULL, a = n * ha.SECONDARY_QUARTER, s = n * ha.SECONDARY_HALF, u = n * ha.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Gt)
);
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var tr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, ou = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Wr = {
  ARIA_SELECTED: ou.ARIA_SELECTED,
  ARIA_SORT: ou.ARIA_SORT
}, mn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(mn || (mn = {}));
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var wb = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          addClassAtRowIndex: function() {
          },
          getAttributeByHeaderCellIndex: function() {
            return "";
          },
          getHeaderCellCount: function() {
            return 0;
          },
          getHeaderCellElements: function() {
            return [];
          },
          getRowCount: function() {
            return 0;
          },
          getRowElements: function() {
            return [];
          },
          getRowIdAtIndex: function() {
            return "";
          },
          getRowIndexByChildElement: function() {
            return 0;
          },
          getSelectedRowCount: function() {
            return 0;
          },
          getTableContainerHeight: function() {
            return 0;
          },
          getTableHeaderHeight: function() {
            return 0;
          },
          isCheckboxAtRowIndexChecked: function() {
            return !1;
          },
          isHeaderRowCheckboxChecked: function() {
            return !1;
          },
          isRowsSelectable: function() {
            return !1;
          },
          notifyRowSelectionChanged: function() {
          },
          notifySelectedAll: function() {
          },
          notifySortAction: function() {
          },
          notifyUnselectedAll: function() {
          },
          notifyRowClick: function() {
          },
          registerHeaderRowCheckbox: function() {
          },
          registerRowCheckboxes: function() {
          },
          removeClass: function() {
          },
          removeClassAtRowIndex: function() {
          },
          removeClassNameByHeaderCellIndex: function() {
          },
          setAttributeAtRowIndex: function() {
          },
          setAttributeByHeaderCellIndex: function() {
          },
          setClassNameByHeaderCellIndex: function() {
          },
          setHeaderRowCheckboxChecked: function() {
          },
          setHeaderRowCheckboxIndeterminate: function() {
          },
          setProgressIndicatorStyles: function() {
          },
          setRowCheckboxCheckedAtIndex: function() {
          },
          setSortStatusLabelByHeaderCellIndex: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.layout = function() {
      this.adapter.isRowsSelectable() && (this.adapter.registerHeaderRowCheckbox(), this.adapter.registerRowCheckboxes(), this.setHeaderRowCheckboxState());
    }, e.prototype.layoutAsync = function() {
      return yc(this, void 0, void 0, function() {
        return Zo(this, function(n) {
          switch (n.label) {
            case 0:
              return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
            case 1:
              return n.sent(), [4, this.adapter.registerRowCheckboxes()];
            case 2:
              n.sent(), this.setHeaderRowCheckboxState(), n.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.getRows = function() {
      return this.adapter.getRowElements();
    }, e.prototype.getHeaderCells = function() {
      return this.adapter.getHeaderCellElements();
    }, e.prototype.setSelectedRowIds = function(n) {
      for (var r = 0; r < this.adapter.getRowCount(); r++) {
        var i = this.adapter.getRowIdAtIndex(r), a = !1;
        i && n.indexOf(i) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(r, a), this.selectRowAtIndex(r, a);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var n = [], r = 0; r < this.adapter.getRowCount(); r++)
        n.push(this.adapter.getRowIdAtIndex(r));
      return n;
    }, e.prototype.getSelectedRowIds = function() {
      for (var n = [], r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.isCheckboxAtRowIndexChecked(r) && n.push(this.adapter.getRowIdAtIndex(r));
      return n;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var n = this.adapter.isHeaderRowCheckboxChecked(), r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.setRowCheckboxCheckedAtIndex(r, n), this.selectRowAtIndex(r, n);
      n ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(n) {
      var r = this.adapter.getRowIndexByChildElement(n.target);
      if (r !== -1) {
        var i = this.adapter.isCheckboxAtRowIndexChecked(r);
        this.selectRowAtIndex(r, i), this.setHeaderRowCheckboxState();
        var a = this.adapter.getRowIdAtIndex(r);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: r, selected: i });
      }
    }, e.prototype.handleSortAction = function(n) {
      for (var r = n.columnId, i = n.columnIndex, a = n.headerCell, s = 0; s < this.adapter.getHeaderCellCount(); s++)
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, tr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, Wr.ARIA_SORT, mn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, mn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Wr.ARIA_SORT), l = mn.NONE;
      u === mn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Wr.ARIA_SORT, mn.DESCENDING), l = mn.DESCENDING) : u === mn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Wr.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Wr.ARIA_SORT, mn.ASCENDING), l = mn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: i,
        headerCell: a,
        sortValue: l
      });
    }, e.prototype.handleRowClick = function(n) {
      var r = n.rowId, i = n.row;
      this.adapter.notifyRowClick({
        rowId: r,
        row: i
      });
    }, e.prototype.showProgress = function() {
      var n = this.adapter.getTableHeaderHeight(), r = this.adapter.getTableContainerHeight() - n, i = n;
      this.adapter.setProgressIndicatorStyles({
        height: r + "px",
        top: i + "px"
      }), this.adapter.addClass(tr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(tr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Wr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Wr.ARIA_SELECTED, "false"));
    }, e;
  }(Gt)
), Ob = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Lb = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function Rb(t, e) {
  xe(e, !0);
  const n = () => Pn(F, "$progressClosed", r), [r, i] = Kn(), { closest: a } = Na;
  let s = g(e, "use", 19, () => []), u = g(e, "class", 3, ""), l = g(e, "stickyHeader", 3, !1), c = g(e, "sortable", 3, !1), d = g(e, "sort", 15, null), h = g(e, "sortDirection", 15, "ascending"), f = g(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = g(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = g(e, "container$use", 19, () => []), p = g(e, "container$class", 3, ""), b = g(e, "table$use", 19, () => []), I = g(e, "table$class", 3, ""), E = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "stickyHeader",
    "sortable",
    "sort",
    "sortDirection",
    "sortAscendingAriaLabel",
    "sortDescendingAriaLabel",
    "container$use",
    "container$class",
    "table$use",
    "table$class",
    "children",
    "progress",
    "paginate"
  ]), A, _ = /* @__PURE__ */ Ie(void 0), S, y = /* @__PURE__ */ Ie(void 0), T = /* @__PURE__ */ Ie(void 0), x = Ce({}), C = /* @__PURE__ */ Ie(Ce({ height: "auto", top: "initial" })), N = he("SMUI:addLayoutListener"), W, k = !1, F = Ut(!1), ue = Ut(d());
  we(() => {
    Mn(ue, d());
  });
  let G = Ut(h());
  we(() => {
    Mn(G, h());
  }), oe("SMUI:checkbox:context", "data-table"), oe("SMUI:linear-progress:context", "data-table"), oe("SMUI:linear-progress:closed", F), oe("SMUI:data-table:sortable", c()), oe("SMUI:data-table:sort", ue), oe("SMUI:data-table:sortDirection", G), oe("SMUI:data-table:sortAscendingAriaLabel", f()), oe("SMUI:data-table:sortDescendingAriaLabel", m()), N && (W = N(ee));
  let V;
  we(() => {
    e.progress && o(_) && V !== n() && (V = n(), n() ? o(_).hideProgress() : o(_).showProgress());
  }), oe("SMUI:checkbox:mount", () => {
    o(_) && k && o(_).layout();
  }), oe("SMUI:data-table:header:mount", (D) => {
    K(y, D, !0);
  }), oe("SMUI:data-table:header:unmount", () => {
    K(y, void 0);
  }), oe("SMUI:data-table:body:mount", (D) => {
    K(T, D, !0);
  }), oe("SMUI:data-table:body:unmount", () => {
    K(T, void 0);
  }), ot(() => (K(
    _,
    new wb({
      addClass: X,
      removeClass: te,
      getHeaderCellElements: () => {
        var D;
        return ((D = o(y)) == null ? void 0 : D.cells.map((j) => j.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var D;
        return ((D = o(y)) == null ? void 0 : D.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (D, j) => {
        var ve;
        return ((ve = o(y)) == null ? void 0 : ve.orderedCells[D].getAttr(j)) ?? null;
      },
      setAttributeByHeaderCellIndex: (D, j, ve) => {
        var ke;
        (ke = o(y)) == null || ke.orderedCells[D].addAttr(j, ve);
      },
      setClassNameByHeaderCellIndex: (D, j) => {
        var ve;
        (ve = o(y)) == null || ve.orderedCells[D].addClass(j);
      },
      removeClassNameByHeaderCellIndex: (D, j) => {
        var ve;
        (ve = o(y)) == null || ve.orderedCells[D].removeClass(j);
      },
      notifySortAction: (D) => {
        d(D.columnId), h(D.sortValue), We($(), "SMUIDataTableSorted", D);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const D = $().querySelector(".mdc-data-table__header-row");
        if (!D)
          throw new Error("MDCDataTable: Table header element not found.");
        return D.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (D) => {
        K(C, D, !0);
      },
      addClassAtRowIndex: (D, j) => {
        var ve;
        (ve = o(T)) == null || ve.orderedRows[D].addClass(j);
      },
      getRowCount: () => {
        var D;
        return ((D = o(T)) == null ? void 0 : D.rows.length) ?? 0;
      },
      getRowElements: () => {
        var D;
        return ((D = o(T)) == null ? void 0 : D.rows.map((j) => j.element)) ?? [];
      },
      getRowIdAtIndex: (D) => {
        var j;
        return ((j = o(T)) == null ? void 0 : j.orderedRows[D].rowId) ?? null;
      },
      getRowIndexByChildElement: (D) => {
        var j;
        return ((j = o(T)) == null ? void 0 : j.orderedRows.map((ve) => ve.element).indexOf(a(D, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var D;
        return ((D = o(T)) == null ? void 0 : D.rows.filter((j) => j.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (D) => {
        var ve;
        const j = (ve = o(T)) == null ? void 0 : ve.orderedRows[D].checkbox;
        return j ? j.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var j;
        const D = (j = o(y)) == null ? void 0 : j.checkbox;
        return D ? D.checked : !1;
      },
      isRowsSelectable: () => !!$().querySelector(".mdc-data-table__row-checkbox") || !!$().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (D) => {
        var ve;
        const j = (ve = o(T)) == null ? void 0 : ve.orderedRows[D.rowIndex];
        j && We($(), "SMUIDataTableSelectionChanged", {
          row: j.element,
          rowId: j.rowId,
          rowIndex: D.rowIndex,
          selected: D.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), We($(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), We($(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (D) => We($(), "SMUIDataTableClickRow", D),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (D, j) => {
        var ve;
        (ve = o(T)) == null || ve.orderedRows[D].removeClass(j);
      },
      setAttributeAtRowIndex: (D, j, ve) => {
        var ke;
        (ke = o(T)) == null || ke.orderedRows[D].addAttr(j, ve);
      },
      setHeaderRowCheckboxChecked: (D) => {
        var ve;
        const j = (ve = o(y)) == null ? void 0 : ve.checkbox;
        j && (j.checked = D);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (D, j) => {
        var ke;
        const ve = (ke = o(T)) == null ? void 0 : ke.orderedRows[D].checkbox;
        ve && (ve.checked = j);
      },
      setSortStatusLabelByHeaderCellIndex: (D, j) => {
      }
    }),
    !0
  ), o(_).init(), o(_).layout(), k = !0, () => {
    var D;
    (D = o(_)) == null || D.destroy();
  })), pn(() => {
    W && W();
  });
  function U(D) {
    o(_) && o(_).handleRowCheckboxChange(D);
  }
  function X(D) {
    x[D] || (x[D] = !0);
  }
  function te(D) {
    (!(D in x) || x[D]) && (x[D] = !1);
  }
  function P(D) {
    var ve;
    const j = (ve = o(y)) == null ? void 0 : ve.checkbox;
    j && (j.indeterminate = D);
  }
  function L(D) {
    if (!o(_) || !D.detail.target)
      return;
    const j = a(D.detail.target, ".mdc-data-table__header-cell--with-sort");
    j && re(j);
  }
  function O(D) {
    if (!o(_) || !D.detail.target)
      return;
    const j = a(D.detail.target, ".mdc-data-table__row");
    j && o(_) && o(_).handleRowClick({ rowId: D.detail.rowId, row: j });
  }
  function re(D) {
    var xt, Tt;
    const j = ((xt = o(y)) == null ? void 0 : xt.orderedCells) ?? [], ve = j.map((dn) => dn.element).indexOf(D);
    if (ve === -1)
      return;
    const ke = j[ve].columnId ?? null;
    (Tt = o(_)) == null || Tt.handleSortAction({ columnId: ke, columnIndex: ve, headerCell: D });
  }
  function ee() {
    var D;
    return (D = o(_)) == null ? void 0 : D.layout();
  }
  function $() {
    return A;
  }
  var ye = { layout: ee, getElement: $ }, B = Lb(), ie = (D) => {
    var j;
    o(_) && o(_).handleHeaderRowCheckboxChange(), (j = e.onSMUIDataTableHeaderCheckboxChange) == null || j.call(e, D);
  }, Y = (D) => {
    var j;
    L(D), (j = e.onSMUIDataTableHeaderClick) == null || j.call(e, D);
  }, le = (D) => {
    var j;
    O(D), (j = e.onSMUIDataTableRowClick) == null || j.call(e, D);
  }, Ee = (D) => {
    var j;
    U(D), (j = e.onSMUIDataTableBodyCheckboxChange) == null || j.call(e, D);
  };
  Ge(
    B,
    (D, j) => ({
      class: D,
      ...j,
      onSMUIDataTableHeaderCheckboxChange: ie,
      onSMUIDataTableHeaderClick: Y,
      onSMUIDataTableRowClick: le,
      onSMUIDataTableBodyCheckboxChange: Ee
    }),
    [
      () => Ue({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...x,
        [u()]: !0
      }),
      () => oi(E, ["container$", "table$"])
    ]
  );
  var q = ce(B);
  Ge(q, (D, j) => ({ class: D, ...j }), [
    () => Ue({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => ct(E, "container$")
  ]);
  var se = ce(q);
  Ge(se, (D, j) => ({ class: D, ...j }), [
    () => Ue({ "mdc-data-table__table": !0, [I()]: !0 }),
    () => ct(E, "table$")
  ]);
  var Re = ce(se);
  Se(Re, () => e.children ?? fe), Fe(se, (D, j) => Z == null ? void 0 : Z(D, j), b), Oe(q, (D) => S = D, () => S), Fe(q, (D, j) => Z == null ? void 0 : Z(D, j), v);
  var Ae = me(q, 2);
  {
    var Ne = (D) => {
      var j = Ob(), ve = me(ce(j), 2);
      Se(ve, () => e.progress ?? fe), Le((ke) => vt(j, ke), [
        () => Object.entries(o(C)).map(([ke, xt]) => `${ke}: ${xt};`).join(" ")
      ]), w(D, j);
    };
    ae(Ae, (D) => {
      e.progress && D(Ne);
    });
  }
  var Ye = me(Ae, 2);
  Se(Ye, () => e.paginate ?? fe), Oe(B, (D) => A = D, () => A), Fe(B, (D, j) => Z == null ? void 0 : Z(D, j), s), w(t, B);
  var dt = Te(ye);
  return i(), dt;
}
var Db = /* @__PURE__ */ de("<thead><!></thead>");
function Mb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ Ie(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  oe("SMUI:data-table:row:header", !0);
  const l = he("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (I) => {
    K(a, I, !0), l && l(I);
  });
  const c = he("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (I) => {
    K(a, void 0), c && c(I);
  }), oe("SMUI:data-table:cell:mount", (I) => {
    s.push(I), u.set(I.element, I);
  }), oe("SMUI:data-table:cell:unmount", (I) => {
    const E = s.findIndex((A) => A === I);
    E !== -1 && s.splice(E, 1), u.delete(I.element);
  });
  const d = he("SMUI:data-table:header:mount"), h = he("SMUI:data-table:header:unmount");
  ot(() => {
    const I = {
      get cells() {
        return s;
      },
      get orderedCells() {
        return f();
      },
      get checkbox() {
        return o(a);
      }
    };
    return d && d(I), () => {
      h && h(I);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((I) => u.get(I)).filter((I) => I && I._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var v = { getElement: m }, p = Db();
  Ge(p, () => ({ ...r }));
  var b = ce(p);
  return Se(b, () => e.children ?? fe), Oe(p, (I) => i = I, () => i), Fe(p, (I, E) => Z == null ? void 0 : Z(I, E), n), w(t, p), Te(v);
}
var Hb = /* @__PURE__ */ de("<tbody><!></tbody>");
function Pb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const u = /* @__PURE__ */ new WeakMap();
  oe("SMUI:data-table:row:header", !1), oe("SMUI:data-table:row:mount", (p) => {
    s.push(p), u.set(p.element, p);
  }), oe("SMUI:data-table:row:unmount", (p) => {
    const b = s.findIndex((I) => I === p);
    b !== -1 && s.splice(b, 1), u.delete(p.element);
  });
  const l = he("SMUI:data-table:body:mount"), c = he("SMUI:data-table:body:unmount");
  ot(() => {
    const p = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(p), () => {
      c && c(p);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((p) => u.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, m = Hb();
  Ge(m, (p) => ({ class: p, ...i }), [
    () => Ue({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = ce(m);
  return Se(v, () => e.children ?? fe), Oe(m, (p) => a = p, () => a), Fe(m, (p, b) => Z == null ? void 0 : Z(p, b), n), w(t, m), Te(f);
}
let Nb = 0;
var Ub = /* @__PURE__ */ de("<tr><!></tr>");
function io(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "rowId", 19, () => "SMUI-data-table-row-" + Nb++), a = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ Ie(void 0), l = Ce({}), c = Ce({}), d = he("SMUI:data-table:row:header");
  const h = he("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (N) => {
    K(u, N, !0), h && h(N);
  });
  const f = he("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (N) => {
    K(u, void 0), f && f(N);
  });
  const m = he("SMUI:data-table:row:mount"), v = he("SMUI:data-table:row:unmount");
  ot(() => {
    const N = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return S();
      },
      get checkbox() {
        return o(u);
      },
      get rowId() {
      },
      get selected() {
        return (o(u) && o(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: b,
      getAttr: I,
      addAttr: E
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return S();
      },
      get checkbox() {
        return o(u);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (o(u) && o(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: b,
      getAttr: I,
      addAttr: E
    };
    return m && m(N), () => {
      v && v(N);
    };
  });
  function p(N) {
    l[N] || (l[N] = !0);
  }
  function b(N) {
    (!(N in l) || l[N]) && (l[N] = !1);
  }
  function I(N) {
    return N in c ? c[N] ?? null : S().getAttribute(N);
  }
  function E(N, W) {
    c[N] !== W && (c[N] = W);
  }
  function A(N) {
    We(S(), "SMUIDataTableHeaderClick", N);
  }
  function _(N) {
    We(S(), "SMUIDataTableRowClick", { rowId: i(), target: N.target });
  }
  function S() {
    return s;
  }
  var y = { getElement: S }, T = Ub(), x = (N) => {
    var W;
    d ? A(N) : _(N), (W = e.onclick) == null || W.call(e, N);
  };
  Ge(
    T,
    (N) => ({
      class: N,
      "aria-selected": o(u) ? o(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: x
    }),
    [
      () => Ue({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(u) && o(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var C = ce(T);
  return Se(C, () => e.children ?? fe), Oe(T, (N) => s = N, () => s), Fe(T, (N, W) => Z == null ? void 0 : Z(N, W), n), w(t, T), Te(y);
}
let Fb = 0;
var kb = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Bb = /* @__PURE__ */ de("<th><!></th>"), Vb = /* @__PURE__ */ de("<td><!></td>");
function Ka(t, e) {
  xe(e, !0);
  const n = () => Pn(I, "$sort", i), r = () => Pn(E, "$sortDirection", i), [i, a] = Kn();
  let s = he("SMUI:data-table:row:header"), u = g(e, "use", 19, () => []), l = g(e, "class", 3, ""), c = g(e, "numeric", 3, !1), d = g(e, "checkbox", 3, !1), h = g(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Fb++ : "SMUI-data-table-unused"), f = g(e, "sortable", 19, () => he("SMUI:data-table:sortable")), m = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "numeric",
    "checkbox",
    "columnId",
    "sortable",
    "children"
  ]), v, p = Ce({}), b = Ce({}), I = he("SMUI:data-table:sort"), E = he("SMUI:data-table:sortDirection"), A = he("SMUI:data-table:sortAscendingAriaLabel"), _ = he("SMUI:data-table:sortDescendingAriaLabel");
  f() && (oe("SMUI:label:context", "data-table:sortable-header-cell"), oe("SMUI:icon-button:context", "data-table:sortable-header-cell"), oe("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const S = he("SMUI:data-table:cell:mount"), y = he("SMUI:data-table:cell:unmount");
  ot(() => {
    const P = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return F();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: x,
      getAttr: C,
      addAttr: N
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return F();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: x,
      getAttr: C,
      addAttr: N
    };
    return S && S(P), () => {
      y && y(P);
    };
  });
  function T(P) {
    p[P] || (p[P] = !0);
  }
  function x(P) {
    (!(P in p) || p[P]) && (p[P] = !1);
  }
  function C(P) {
    return P in b ? b[P] ?? null : F().getAttribute(P);
  }
  function N(P, L) {
    b[P] !== L && (b[P] = L);
  }
  function W(P) {
    We(F(), "SMUIDataTableHeaderCheckboxChange", P);
  }
  function k(P) {
    We(F(), "SMUIDataTableBodyCheckboxChange", P);
  }
  function F() {
    return v;
  }
  var ue = { getElement: F }, G = J(), V = z(G);
  {
    var U = (P) => {
      var L = Bb(), O = (ye) => {
        var B;
        d() && W(ye), (B = e.onchange) == null || B.call(e, ye);
      };
      Ge(
        L,
        (ye) => ({
          class: ye,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: O
        }),
        [
          () => Ue({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var re = ce(L);
      {
        var ee = (ye) => {
          var B = kb(), ie = ce(B);
          Se(ie, () => e.children ?? fe);
          var Y = me(ie, 2), le = ce(Y);
          Le(() => {
            ur(Y, "id", `${h() ?? ""}-status-label`), Ze(le, n() === h() ? r() === "ascending" ? A : _ : "");
          }), w(ye, B);
        }, $ = (ye) => {
          var B = J(), ie = z(B);
          Se(ie, () => e.children ?? fe), w(ye, B);
        };
        ae(re, (ye) => {
          f() ? ye(ee) : ye($, !1);
        });
      }
      Oe(L, (ye) => v = ye, () => v), Fe(L, (ye, B) => Z == null ? void 0 : Z(ye, B), u), w(P, L);
    }, X = (P) => {
      var L = Vb(), O = (ee) => {
        var $;
        d() && k(ee), ($ = e.onchange) == null || $.call(e, ee);
      };
      Ge(
        L,
        (ee) => ({
          class: ee,
          ...b,
          ...m,
          onchange: O
        }),
        [
          () => Ue({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var re = ce(L);
      Se(re, () => e.children ?? fe), Oe(L, (ee) => v = ee, () => v), Fe(L, (ee, $) => Z == null ? void 0 : Z(ee, $), u), w(P, L);
    };
    ae(V, (P) => {
      s ? P(U) : P(X, !1);
    });
  }
  w(t, G);
  var te = Te(ue);
  return a(), te;
}
wn(["click"]);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Gb = {
  ROOT: "mdc-form-field"
}, jb = {
  LABEL_SELECTOR: ".mdc-form-field > label"
};
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var qb = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return jb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          activateInputRipple: function() {
          },
          deactivateInputRipple: function() {
          },
          deregisterInteractionHandler: function() {
          },
          registerInteractionHandler: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
      this.adapter.registerInteractionHandler("click", this.click);
    }, e.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("click", this.click);
    }, e.prototype.handleClick = function() {
      var n = this;
      this.adapter.activateInputRipple(), requestAnimationFrame(function() {
        n.adapter.deactivateInputRipple();
      });
    }, e;
  }(Gt)
);
let zb = 0;
var Wb = /* @__PURE__ */ de("<div><!> <label><!></label></div>");
function Xb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "align", 3, "start"), a = g(e, "noWrap", 3, !1), s = g(e, "inputId", 19, () => "SMUI-form-field-" + zb++), u = g(e, "label$use", 19, () => []), l = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "align",
    "noWrap",
    "inputId",
    "label$use",
    "children",
    "label"
  ]), c, d = /* @__PURE__ */ Ie(void 0), h = new hi(), f, m = /* @__PURE__ */ Ie(void 0);
  oe("SMUI:generic:input:props", { id: s() }), oe("SMUI:generic:input:mount", (_) => {
    K(m, _, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    K(m, void 0);
  }), ot(() => (K(
    d,
    new qb({
      activateInputRipple: () => {
        o(m) && o(m).activateRipple();
      },
      deactivateInputRipple: () => {
        o(m) && o(m).deactivateRipple();
      },
      deregisterInteractionHandler: (_, S) => h.off(f, _, S),
      registerInteractionHandler: (_, S) => h.on(f, _, S)
    }),
    !0
  ), o(d).init(), () => {
    var _;
    (_ = o(d)) == null || _.destroy(), h.clear();
  }));
  function v() {
    return c;
  }
  var p = { getElement: v }, b = Wb();
  Ge(b, (_, S) => ({ class: _, ...S }), [
    () => Ue({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => oi(l, ["label$"])
  ]);
  var I = ce(b);
  Se(I, () => e.children ?? fe);
  var E = me(I, 2);
  Ge(E, (_) => ({ for: s(), ..._ }), [() => ct(l, "label$")]);
  var A = ce(E);
  return Se(A, () => e.label ?? fe), Oe(E, (_) => f = _, () => f), Fe(E, (_, S) => Z == null ? void 0 : Z(_, S), u), Oe(b, (_) => c = _, () => c), Fe(b, (_, S) => Z == null ? void 0 : Z(_, S), n), w(t, b), Te(p);
}
var Kb = (t, e) => {
  var n;
  t.stopPropagation(), (n = e.onClick) == null || n.call(e, t);
}, Zb = /* @__PURE__ */ de('<button class="icon-button svelte-jv2py4"><!></button>');
function Yb(t, e) {
  xe(e, !0);
  let n = g(e, "tooltipSide", 3, "top"), r = g(e, "showDelay", 3, 1e3), i = g(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = g(e, "size", 3, "25px"), s = /* @__PURE__ */ be(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Ca(t, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return n();
    },
    children: (u, l) => {
      var c = Zb();
      c.__click = [Kb, e];
      var d = ce(c);
      {
        var h = (m) => {
          nd(m, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (m) => {
          var v = J(), p = z(v);
          {
            var b = (E) => {
              ab(E, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, I = (E) => {
              var A = J(), _ = z(A);
              {
                var S = (T) => {
                  td(T, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, y = (T) => {
                  var x = J(), C = z(x);
                  {
                    var N = (k) => {
                      rb(k, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, W = (k) => {
                      var F = J(), ue = z(F);
                      {
                        var G = (U) => {
                          ub(U, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, V = (U) => {
                          var X = J(), te = z(X);
                          {
                            var P = (O) => {
                              db(O, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, L = (O) => {
                              var re = J(), ee = z(re);
                              {
                                var $ = (B) => {
                                  hb(B, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, ye = (B) => {
                                  var ie = J(), Y = z(ie);
                                  {
                                    var le = (q) => {
                                      mb(q, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, Ee = (q) => {
                                      var se = Et();
                                      Le(() => Ze(se, `Unsupported supported type: ${e.type ?? ""}`)), w(q, se);
                                    };
                                    ae(
                                      Y,
                                      (q) => {
                                        e.type === "star" ? q(le) : q(Ee, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(B, ie);
                                };
                                ae(
                                  ee,
                                  (B) => {
                                    e.type === "close" ? B($) : B(ye, !1);
                                  },
                                  !0
                                );
                              }
                              w(O, re);
                            };
                            ae(
                              te,
                              (O) => {
                                e.type === "link-off" ? O(P) : O(L, !1);
                              },
                              !0
                            );
                          }
                          w(U, X);
                        };
                        ae(
                          ue,
                          (U) => {
                            e.type === "wand-stars" ? U(G) : U(V, !1);
                          },
                          !0
                        );
                      }
                      w(k, F);
                    };
                    ae(
                      C,
                      (k) => {
                        e.type === "visibility" ? k(N) : k(W, !1);
                      },
                      !0
                    );
                  }
                  w(T, x);
                };
                ae(
                  _,
                  (T) => {
                    e.type === "edit" ? T(S) : T(y, !1);
                  },
                  !0
                );
              }
              w(E, A);
            };
            ae(
              p,
              (E) => {
                e.type === "duplicate" ? E(b) : E(I, !1);
              },
              !0
            );
          }
          w(m, v);
        };
        ae(d, (m) => {
          e.type === "delete" ? m(h) : m(f, !1);
        });
      }
      Le(() => ur(c, "aria-label", e.tooltip)), w(u, c);
    },
    $$slots: { default: !0 }
  }), Te();
}
wn(["click"]);
function Ro(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var Qb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Ro({}, Qb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Za, lu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Za = {}, Ro(Za, lu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ro(Za, lu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function Jb(t) {
  return t * t * t;
}
function rd(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function $b(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (y) => Math.sqrt(y) * 120, easing: s = rd } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var h = e_(t), f = t.clientWidth / n.width / h, m = t.clientHeight / n.height / h, v = e.left + e.width * c, p = e.top + e.height * d, b = n.left + n.width * c, I = n.top + n.height * d, E = (v - b) * f, A = (p - I) * m, _ = e.width / n.width, S = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(E * E + A * A)) : a,
    easing: s,
    css: (y, T) => {
      var x = T * E, C = T * A, N = y + T * _, W = y + T * S;
      return `transform: ${l} translate(${x}px, ${C}px) scale(${N}, ${W});`;
    }
  };
}
function e_(t) {
  if ("currentCSSZoom" in t)
    return (
      /** @type {number} */
      t.currentCSSZoom
    );
  for (var e = t, n = 1; e !== null; )
    n *= +getComputedStyle(e).zoom, e = /** @type {Element | null} */
    e.parentElement;
  return n;
}
function t_(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function uu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function bs(t, { delay: e = 0, duration: n = 400, easing: r = t_, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - s), [h, f] = uu(i), [m, v] = uu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, b) => `
			transform: ${c} translate(${(1 - p) * h}${f}, ${(1 - p) * m}${v});
			opacity: ${l - d * b}`
  };
}
wn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function n_(t, e) {
  var n;
  (n = e()) == null || n();
}
var r_ = /* @__PURE__ */ de('<div class="detail svelte-4xu36c"> </div>'), i_ = /* @__PURE__ */ de('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function a_(t, e) {
  xe(e, !0);
  let n = g(e, "onClose", 3, () => {
  });
  const r = {
    success: "check_circle",
    error: "error",
    info: "info",
    warn: "warning"
  }, i = {
    success: "#4CAF50",
    error: "#F44336",
    info: "#2196F3",
    warn: "#FF9800"
  };
  var a = i_(), s = ce(a), u = ce(s);
  wo(u, {
    class: "material-icons",
    children: (p, b) => {
      var I = Et();
      Le(() => Ze(I, r[e.type])), w(p, I);
    },
    $$slots: { default: !0 }
  });
  var l = me(s, 2), c = ce(l), d = ce(c), h = me(c, 2);
  {
    var f = (p) => {
      var b = r_(), I = ce(b);
      Le(() => Ze(I, e.detail)), w(p, b);
    };
    ae(h, (p) => {
      e.detail && p(f);
    });
  }
  var m = me(l, 2);
  m.__click = [n_, n];
  var v = ce(m);
  wo(v, {
    class: "material-icons",
    children: (p, b) => {
      var I = Et("close");
      w(p, I);
    },
    $$slots: { default: !0 }
  }), Le(() => {
    vt(a, `--color:${i[e.type] ?? ""}`), Ze(d, e.summary);
  }), cs(1, a, () => bs, () => ({ x: 0, y: 30, duration: 150, easing: Jb })), cs(2, a, () => bs, () => ({ x: 50, y: 0, duration: 150, easing: rd })), w(t, a), Te();
}
wn(["click"]);
const s_ = 4e3;
function o_() {
  let t = Ce({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = s_) => {
    const l = e++, c = { id: l, summary: a, detail: s, type: i };
    return t.items = [...t.items, c], setTimeout(
      () => {
        n(l);
      },
      u
    ), l;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return t;
    },
    success: (i, a, s) => r("success", i, a, s),
    error: (i, a, s) => r("error", i, a, s),
    info: (i, a, s) => r("info", i, a, s),
    warn: (i, a, s) => r("warn", i, a, s),
    remove: n
  };
}
const _s = o_();
var l_ = /* @__PURE__ */ de("<div><!></div>"), u_ = /* @__PURE__ */ de('<div class="toast-host svelte-11vwiay"></div>');
function c_(t, e) {
  xe(e, !1);
  const n = _s.toasts;
  dh();
  var r = u_();
  rr(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var s = l_(), u = ce(s);
    a_(u, {
      get summary() {
        return o(a).summary;
      },
      get detail() {
        return o(a).detail;
      },
      get type() {
        return o(a).type;
      },
      onClose: () => _s.remove(o(a).id)
    }), uh(s, () => $b, null), w(i, s);
  }), w(t, r), Te();
}
var d_ = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, f_ = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, h_ = /* @__PURE__ */ de('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), v_ = /* @__PURE__ */ de('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), m_ = /* @__PURE__ */ de('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function g_(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ be(() => !!e.value);
  var r = m_();
  r.__click = [d_, e];
  var i = ce(r), a = ce(i);
  {
    var s = (f) => {
      Ca(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, v) => {
          var p = h_();
          p.__click = [f_, e];
          var b = ce(p);
          el(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), w(m, p);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      Ca(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, v) => {
          pb(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    ae(a, (f) => {
      o(n) ? f(s) : f(u, !1);
    });
  }
  var l = me(i, 2), c = ce(l), d = me(l, 2);
  {
    var h = (f) => {
      var m = v_(), v = me(z(m), 2), p = ce(v), b = me(v, 2), I = ce(b);
      ob(I, { svgStyles: "fill: gray;" }), Le(() => Ze(p, e.value)), w(f, m);
    };
    ae(d, (f) => {
      o(n) && f(h);
    });
  }
  Le(() => {
    Wo(r, 1, `filter-badge ${o(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), Ze(c, e.label);
  }), w(t, r), Te();
}
wn(["click"]);
var p_ = /* @__PURE__ */ de('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function b_(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(q) {
    return q === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), u = g(e, "disabled", 15, !1), l = g(e, "touch", 3, !1), c = g(e, "indeterminate", 15, n), d = g(e, "group", 11, n), h = g(e, "checked", 15, n), f = g(e, "value", 3, null), m = g(e, "valueKey", 3, n), v = g(e, "input$use", 19, () => []), p = g(e, "input$class", 3, ""), b = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "indeterminate",
    "group",
    "checked",
    "value",
    "valueKey",
    "input$use",
    "input$class"
  ]), I, E = /* @__PURE__ */ Ie(void 0), A = /* @__PURE__ */ Ie(void 0), _ = Ce({}), S = Ce({}), y = Ce({}), T = /* @__PURE__ */ Ie(!1), x = Ce(he("SMUI:generic:input:props") ?? {}), C = /* @__PURE__ */ Ie(Ce(r(d()) ? r(h()) ? !1 : !!h() : d().findIndex((q) => q === f()) !== -1)), N = he("SMUI:checkbox:context"), W = he("SMUI:data-table:row:header"), k = h(), F = r(d()) ? [] : [...d()], ue = o(C);
  we(() => {
    let q = !1;
    if (!r(d()))
      if (ue !== o(C)) {
        const se = d().findIndex((Re) => Re === f());
        o(C) && se === -1 ? d().push(f()) : !o(C) && se !== -1 && d().splice(se, 1), q = !0;
      } else {
        const se = F.findIndex((Ae) => Ae === f()), Re = d().findIndex((Ae) => Ae === f());
        se > -1 && Re === -1 ? (K(C, !1), q = !0) : Re > -1 && se === -1 && (K(C, !0), q = !0);
      }
    r(h()) ? ue !== o(C) && (q = !0) : (h() !== (c() ? null : o(C)) || o(C) !== ue) && (h() === k && o(C) !== ue ? (h(o(C)), r(c()) || c(!1)) : K(C, !!h()), q = !0), o(A) && (r(c()) ? o(A).indeterminate && (o(A).indeterminate = !1, q = !0) : !c() && o(A).indeterminate ? (o(A).indeterminate = !1, q = !0) : c() && !o(A).indeterminate && (o(A).indeterminate = !0, K(C, !1), q = !0)), k = h(), F = r(d()) ? [] : [...d()], ue = o(C), q && o(E) && o(E).handleChange();
  });
  const G = he("SMUI:generic:input:mount"), V = he("SMUI:generic:input:unmount"), U = he("SMUI:checkbox:mount"), X = he("SMUI:checkbox:unmount");
  ot(() => {
    if (o(A) == null)
      throw new Error("Checkbox is not defined.");
    o(A).indeterminate = !r(c()) && c(), K(
      E,
      new xb({
        addClass: te,
        forceLayout: () => $().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!$().parentNode,
        isChecked: () => o(C),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: P,
        removeNativeControlAttr: re,
        setNativeControlAttr: O,
        setNativeControlDisabled: (se) => u(se)
      }),
      !0
    );
    const q = {
      _smui_checkbox_accessor: !0,
      get element() {
        return $();
      },
      get checked() {
        return o(C);
      },
      set checked(se) {
        o(C) !== se && K(C, se, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(se) {
        c(se);
      },
      activateRipple() {
        u() || K(T, !0);
      },
      deactivateRipple() {
        K(T, !1);
      }
    };
    return G && G(q), U && U(q), o(E).init(), () => {
      var se;
      V && V(q), X && X(q), (se = o(E)) == null || se.destroy();
    };
  });
  function te(q) {
    _[q] || (_[q] = !0);
  }
  function P(q) {
    (!(q in _) || _[q]) && (_[q] = !1);
  }
  function L(q, se) {
    S[q] != se && (se === "" || se == null ? delete S[q] : S[q] = se);
  }
  function O(q, se) {
    y[q] !== se && (y[q] = se);
  }
  function re(q) {
    (!(q in y) || y[q] != null) && (y[q] = void 0);
  }
  function ee() {
    return x && x.id;
  }
  function $() {
    return I;
  }
  var ye = { getId: ee, getElement: $ }, B = p_(), ie = (q) => {
    var se;
    o(E) && o(E).handleAnimationEnd(), (se = e.onanimationend) == null || se.call(e, q);
  };
  Ge(B, (q, se, Re) => ({ class: q, style: se, ...Re, onanimationend: ie }), [
    () => Ue({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": N === "data-table" && W,
      "mdc-data-table__row-checkbox": N === "data-table" && !W,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(S).map(([q, se]) => `${q}: ${se};`).concat([s()]).join(" "),
    () => oi(b, ["input$"])
  ]);
  var Y = ce(B), le = (q) => {
    var se;
    We($(), "blur", q), (se = e.input$onblur) == null || se.call(e, q);
  }, Ee = (q) => {
    var se;
    We($(), "focus", q), (se = e.input$onfocus) == null || se.call(e, q);
  };
  return Ge(
    Y,
    (q, se, Re, Ae) => ({
      class: q,
      type: "checkbox",
      ...x,
      disabled: u(),
      value: se,
      "data-indeterminate": Re,
      ...y,
      ...Ae,
      onblur: le,
      onfocus: Ee
    }),
    [
      () => Ue({ "mdc-checkbox__native-control": !0, [p()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(c()) && c() ? "true" : void 0,
      () => ct(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Oe(Y, (q) => K(A, q), () => o(A)), Fe(Y, (q, se) => Z == null ? void 0 : Z(q, se), v), ci(() => ch(Y, () => o(C), (q) => K(C, q))), Oe(B, (q) => I = q, () => I), Fe(B, (q, se) => Z == null ? void 0 : Z(q, se), i), Fe(B, (q, se) => Jt == null ? void 0 : Jt(q, se), () => ({
    unbounded: !0,
    addClass: te,
    removeClass: P,
    addStyle: L,
    active: o(T),
    eventTarget: o(A)
  })), w(t, B), Te(ye);
}
var __ = /* @__PURE__ */ de('<div style="display: flex; flex-direction: column;"></div>');
function y_(t, e) {
  xe(e, !0);
  let n = g(e, "data", 19, () => []), r = g(e, "values", 31, () => Ce([]));
  var i = __();
  rr(i, 21, n, Ti, (a, s) => {
    Xb(a, {
      label: (l) => {
        var c = Et();
        Le(() => Ze(c, o(s).label)), w(l, c);
      },
      children: (l, c) => {
        b_(l, {
          get value() {
            return o(s).value;
          },
          get group() {
            return r();
          },
          set group(d) {
            r(d);
          }
        });
      },
      $$slots: { label: !0, default: !0 }
    });
  }), w(t, i), Te();
}
var I_ = (t) => t.stopPropagation(), E_ = /* @__PURE__ */ de('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), S_ = /* @__PURE__ */ de('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), A_ = /* @__PURE__ */ de('<div class="oscd-filters svelte-58jwwf"></div>');
function C_(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 15), r = /* @__PURE__ */ Ie(null), i = [], a = [];
  function s(v) {
    var p;
    if (!(v.value === void 0 || v.value === null || v.value === ""))
      switch (v.type) {
        case "text":
          return String(v.value);
        case "number":
          return String(v.value);
        case "select":
          const b = (p = v.options) == null ? void 0 : p.find((A) => A.value === v.value);
          return b ? b.label : String(v.value);
        case "multiselect":
          if (!Array.isArray(v.value) || v.value.length === 0) return;
          const I = v.value.map((A) => {
            var S;
            const _ = (S = v.options) == null ? void 0 : S.find((y) => y.value === A);
            return _ ? _.label : String(A);
          }), E = 1;
          return I.length <= E ? I.join(", ") : `${I.slice(0, E).join(", ")} +${I.length - E} more`;
        case "date":
          try {
            const A = new Date(v.value);
            return isNaN(A.getTime()) ? String(v.value) : A.toLocaleDateString();
          } catch {
            return String(v.value);
          }
        case "datetime":
          try {
            const A = new Date(v.value);
            return isNaN(A.getTime()) ? String(v.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(A);
          } catch {
            return String(v.value);
          }
        default:
          return String(v.value);
      }
  }
  function u(v) {
    switch (v.type) {
      case "text":
      case "date":
      case "datetime":
        return v.value ?? "";
      case "number":
        return v.value ?? 0;
      case "select":
        return v.value ?? null;
      case "multiselect":
        return Array.isArray(v.value) ? [...v.value] : [];
      default:
        return v.value ?? "";
    }
  }
  function l(v) {
    o(r) === v ? K(r, null) : (K(r, v, !0), a[v] = u(n()[v]));
  }
  function c() {
    K(r, null), a[o(r)] = void 0;
  }
  function d(v) {
    var p;
    n(n().map((b, I) => I === v ? { ...b, value: a[v] } : b)), (p = e.onfiltersChanged) == null || p.call(e, [...n()]), K(r, null);
  }
  function h(v) {
    var p;
    n(n().map((b, I) => I === v ? { ...b, value: void 0 } : b)), a[v] = void 0, (p = e.onfiltersChanged) == null || p.call(e, [...n()]), c();
  }
  function f(v) {
    i.some((b) => b && b.contains(v.target)) || c();
  }
  ot(() => {
    document.addEventListener("click", f);
  }), pn(() => {
    document.removeEventListener("click", f);
  }), we(() => {
  });
  var m = A_();
  rr(m, 23, n, (v) => v.key, (v, p, b) => {
    var I = S_(), E = ce(I);
    {
      let S = /* @__PURE__ */ be(() => s(o(p)));
      g_(E, {
        get label() {
          return o(p).label;
        },
        get value() {
          return o(S);
        },
        onOpen: () => l(o(b)),
        onRemove: () => h(o(b))
      });
    }
    var A = me(E, 2);
    {
      var _ = (S) => {
        var y = E_();
        y.__click = [I_];
        var T = me(ce(y), 2), x = ce(T), C = me(T, 2), N = ce(C);
        {
          var W = (ue) => {
            Oo(ue, {
              get label() {
                return o(p).label;
              },
              get placeholder() {
                return o(p).placeholder;
              },
              get type() {
                return o(p).type;
              },
              style: "width: 100%;",
              get value() {
                return a[o(b)];
              },
              set value(G) {
                a[o(b)] = G;
              }
            });
          }, k = (ue) => {
            var G = J(), V = z(G);
            {
              var U = (te) => {
                {
                  let P = /* @__PURE__ */ be(() => {
                    var L;
                    return (L = o(p)) == null ? void 0 : L.options;
                  });
                  pp(te, {
                    get label() {
                      return o(p).label;
                    },
                    get data() {
                      return o(P);
                    },
                    get value() {
                      return a[o(b)];
                    },
                    set value(L) {
                      a[o(b)] = L;
                    }
                  });
                }
              }, X = (te) => {
                var P = J(), L = z(P);
                {
                  var O = (ee) => {
                    {
                      let $ = /* @__PURE__ */ be(() => {
                        var ye;
                        return (ye = o(p)) == null ? void 0 : ye.options;
                      });
                      y_(ee, {
                        get data() {
                          return o($);
                        },
                        get values() {
                          return a[o(b)];
                        },
                        set values(ye) {
                          a[o(b)] = ye;
                        }
                      });
                    }
                  }, re = (ee) => {
                    var $ = J(), ye = z($);
                    {
                      var B = (Y) => {
                        yb(Y, {
                          get value() {
                            return a[o(b)];
                          },
                          set value(le) {
                            a[o(b)] = le;
                          }
                        });
                      }, ie = (Y) => {
                        var le = J(), Ee = z(le);
                        {
                          var q = (se) => {
                            Sb(se, {
                              get value() {
                                return a[o(b)];
                              },
                              set value(Re) {
                                a[o(b)] = Re;
                              }
                            });
                          };
                          ae(
                            Ee,
                            (se) => {
                              o(p).type === "datetime" && se(q);
                            },
                            !0
                          );
                        }
                        w(Y, le);
                      };
                      ae(
                        ye,
                        (Y) => {
                          o(p).type === "date" ? Y(B) : Y(ie, !1);
                        },
                        !0
                      );
                    }
                    w(ee, $);
                  };
                  ae(
                    L,
                    (ee) => {
                      o(p).type === "multiselect" ? ee(O) : ee(re, !1);
                    },
                    !0
                  );
                }
                w(te, P);
              };
              ae(
                V,
                (te) => {
                  o(p).type === "select" ? te(U) : te(X, !1);
                },
                !0
              );
            }
            w(ue, G);
          };
          ae(N, (ue) => {
            o(p).type === "text" || o(p).type === "number" ? ue(W) : ue(k, !1);
          });
        }
        var F = me(C, 2);
        ms(F, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(o(b)),
          children: (ue, G) => {
            var V = Et("Apply");
            w(ue, V);
          },
          $$slots: { default: !0 }
        }), Le(() => Ze(x, `Filter by ${o(p).label ?? ""}`)), cs(2, y, () => bs, () => ({ y: 5, duration: 120 })), cs(1, y, () => bs, () => ({ y: -5, duration: 120 })), w(S, y);
      };
      ae(A, (S) => {
        o(r) === o(b) && S(_);
      });
    }
    Oe(I, (S, y) => i[y] = S, (S) => i == null ? void 0 : i[S], () => [o(b)]), w(v, I);
  }), w(t, m), Te();
}
wn(["click"]);
var x_ = (t, e) => e(), T_ = /* @__PURE__ */ de('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), w_ = /* @__PURE__ */ de('<div class="filter-tab svelte-nj6sif"><!> <div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div></div>');
function O_(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 15), r = g(e, "onFilterChange", 3, (E) => {
  }), i = g(e, "searchText", 15, ""), a = g(e, "searchLabel", 3, "Search"), s = g(e, "searchPlaceholder", 3, "Type to search..."), u = g(e, "onSearchInput", 3, () => {
  }), l = g(e, "searchDisabled", 3, !1), c = /* @__PURE__ */ be(() => n().some((E) => E.value !== void 0 && E.value !== null && E.value !== "")), d = () => {
    n(n().map((E) => ({ ...E, value: void 0 }))), r()(n());
  };
  var h = w_(), f = ce(h);
  {
    var m = (E) => {
      Ug(E, {
        oninput: () => u()(),
        icon: "search",
        get label() {
          return a();
        },
        get placeholder() {
          return s();
        },
        variant: "outlined",
        styles: "background: var(--oscd-base2,#fff); max-width: 650px;",
        get value() {
          return i();
        },
        set value(A) {
          i(A);
        }
      });
    };
    ae(f, (E) => {
      l() || E(m);
    });
  }
  var v = me(f, 2), p = me(ce(v), 2);
  C_(p, {
    onfiltersChanged: (E) => r()(E),
    get filters() {
      return n();
    },
    set filters(E) {
      n(E);
    }
  });
  var b = me(p, 2);
  {
    var I = (E) => {
      var A = T_();
      A.__click = [x_, d], w(E, A);
    };
    ae(b, (E) => {
      o(c) && E(I);
    });
  }
  w(t, h), Te();
}
wn(["click"]);
var L_ = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function R_(t, e) {
  xe(e, !0);
  const [n, r] = Kn();
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), u = g(e, "indeterminate", 3, !1), l = g(e, "closed", 3, !1), c = g(e, "progress", 3, 0), d = g(e, "buffer", 3, void 0), h = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "indeterminate",
    "closed",
    "progress",
    "buffer"
  ]), f, m = /* @__PURE__ */ Ie(void 0), v = Ce({}), p = Ce({}), b = Ce({}), I = Ce({}), E = Ce({}), A = he("SMUI:linear-progress:context"), _ = he("SMUI:linear-progress:closed");
  we(() => {
    _ && Mn(_, l());
  }), we(() => {
    o(m) && o(m).isDeterminate() !== !u() && o(m).setDeterminate(!u());
  }), we(() => {
    o(m) && o(m).getProgress() !== c() && o(m).setProgress(c());
  }), we(() => {
    o(m) && (d() == null ? o(m).setBuffer(1) : o(m).setBuffer(d()));
  }), we(() => {
    o(m) && (l() ? o(m).close() : o(m).open());
  }), ot(() => (K(
    m,
    new Tb({
      addClass: y,
      forceLayout: () => {
        F().getBoundingClientRect();
      },
      setBufferBarStyle: W,
      setPrimaryBarStyle: k,
      hasClass: S,
      removeAttribute: C,
      removeClass: T,
      setAttribute: x,
      setStyle: N,
      attachResizeObserver: (L) => {
        const O = window.ResizeObserver;
        if (O) {
          const re = new O(L);
          return re.observe(F()), re;
        }
        return null;
      },
      getWidth: () => F().offsetWidth
    }),
    !0
  ), o(m).init(), () => {
    var L;
    (L = o(m)) == null || L.destroy();
  }));
  function S(L) {
    return L in v ? v[L] : F().classList.contains(L);
  }
  function y(L) {
    v[L] || (v[L] = !0);
  }
  function T(L) {
    (!(L in v) || v[L]) && (v[L] = !1);
  }
  function x(L, O) {
    p[L] !== O && (p[L] = O);
  }
  function C(L) {
    (!(L in p) || p[L] != null) && (p[L] = void 0);
  }
  function N(L, O) {
    b[L] != O && (O === "" || O == null ? delete b[L] : b[L] = O);
  }
  function W(L, O) {
    I[L] != O && (O === "" || O == null ? delete I[L] : I[L] = O);
  }
  function k(L, O) {
    E[L] != O && (O === "" || O == null ? delete E[L] : E[L] = O);
  }
  function F() {
    return f;
  }
  var ue = { getElement: F }, G = L_(), V = (L) => {
    var O;
    o(m) && o(m).handleTransitionEnd(), (O = e.ontransitionend) == null || O.call(e, L);
  };
  Ge(
    G,
    (L, O) => ({
      class: L,
      style: O,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...p,
      ...h,
      ontransitionend: V
    }),
    [
      () => Ue({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": A === "data-table",
        ...v,
        [a()]: !0
      }),
      () => Object.entries(b).map(([L, O]) => `${L}: ${O};`).concat([s()]).join(" ")
    ]
  );
  var U = ce(G), X = ce(U), te = me(U, 2);
  Oe(G, (L) => f = L, () => f), Fe(G, (L, O) => Z == null ? void 0 : Z(L, O), i), Le(
    (L, O) => {
      vt(X, L), vt(te, O);
    },
    [
      () => Object.entries(I).map(([L, O]) => `${L}: ${O};`).join(" "),
      () => Object.entries(E).map(([L, O]) => `${L}: ${O};`).join(" ")
    ]
  ), w(t, G);
  var P = Te(ue);
  return r(), P;
}
var D_ = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), M_ = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), H_ = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), P_ = (t, e) => e(), N_ = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), U_ = (t, e) => e(), F_ = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), k_ = /* @__PURE__ */ de("<!> <!>", 1), B_ = /* @__PURE__ */ de("<!> <!>", 1), V_ = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>'), G_ = /* @__PURE__ */ de("<!> <!>", 1);
function cu(t, e) {
  xe(e, !0);
  const n = () => Pn(p, "$sortColumn", a), r = () => Pn(b, "$sortDirection", a), i = () => Pn(v, "$filteredData", a), [a, s] = Kn();
  let u = g(e, "loadingDone", 15, !0), l = g(e, "label", 19, Xr), c = g(e, "columnDefs", 19, () => []), d = g(e, "rowData", 31, () => Ce([])), h = g(e, "rowActions", 19, () => []), f = g(e, "searchInputLabel", 3, "Search"), m = Ce({ name: "", color: "", number: "" }), v = Ut([]), p = Ut(null), b = Ut(null), I = /* @__PURE__ */ be(() => c().some((S) => S.filter));
  e.store.store.subscribe((S) => {
    d([...S]), E();
  });
  function E() {
    let S = d().filter((y) => c().every((T) => {
      const x = m[T.field], C = T.filterValueGetter ? T.filterValueGetter(y) : y[T.field];
      return x ? T.filterType === "number" ? C == x : C.toString().toLowerCase().includes(x.toLowerCase()) : !0;
    }));
    S = A(S), v.set(S);
  }
  function A(S) {
    let y, T;
    return p.subscribe((x) => y = x), b.subscribe((x) => T = x), !y || !T ? S : S.sort((x, C) => {
      let N = x[y], W = C[y];
      return N == null && (N = ""), W == null && (W = ""), T === "asc" ? N.toString().localeCompare(W.toString()) : W.toString().localeCompare(N.toString());
    });
  }
  function _(S) {
    p.update((y) => {
      if (y === S)
        b.update((T) => T === "asc" ? "desc" : T === "desc" ? null : "asc");
      else
        return b.set("asc"), S;
      return S;
    }), E();
  }
  v.set(d()), Rb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (y) => {
      R_(y, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(T) {
          u(T);
        }
      });
    },
    children: (y, T) => {
      var x = G_(), C = z(x);
      Mb(C, {
        children: (W, k) => {
          var F = B_(), ue = z(F);
          io(ue, {
            class: "header-title-row",
            children: (U, X) => {
              var te = J(), P = z(te);
              rr(P, 17, c, Ti, (L, O) => {
                Ka(L, {
                  onclick: () => o(O).sortable && _(o(O).field),
                  get style() {
                    return o(O).headerStyle;
                  },
                  children: (re, ee) => {
                    var $ = H_(), ye = ce($), B = ce(ye), ie = ce(B), Y = me(B, 2);
                    {
                      var le = (Ee) => {
                        var q = J(), se = z(q);
                        {
                          var Re = (Ae) => {
                            var Ne = J(), Ye = z(Ne);
                            {
                              var dt = (j) => {
                                var ve = D_();
                                w(j, ve);
                              }, D = (j) => {
                                var ve = J(), ke = z(ve);
                                {
                                  var xt = (Tt) => {
                                    var dn = M_();
                                    w(Tt, dn);
                                  };
                                  ae(
                                    ke,
                                    (Tt) => {
                                      r() === "desc" && Tt(xt);
                                    },
                                    !0
                                  );
                                }
                                w(j, ve);
                              };
                              ae(Ye, (j) => {
                                r() === "asc" ? j(dt) : j(D, !1);
                              });
                            }
                            w(Ae, Ne);
                          };
                          ae(se, (Ae) => {
                            n() === o(O).field && r() !== null && Ae(Re);
                          });
                        }
                        w(Ee, q);
                      };
                      ae(Y, (Ee) => {
                        o(O).sortable && Ee(le);
                      });
                    }
                    Le(() => {
                      vt($, `min-width: ${o(O).minWidth ?? 0 ?? ""}`), Ze(ie, o(O).headerName);
                    }), w(re, $);
                  },
                  $$slots: { default: !0 }
                });
              }), w(U, te);
            },
            $$slots: { default: !0 }
          });
          var G = me(ue, 2);
          {
            var V = (U) => {
              io(U, {
                class: "header-filter-row",
                children: (X, te) => {
                  var P = J(), L = z(P);
                  rr(L, 17, c, Ti, (O, re) => {
                    Ka(O, {
                      children: (ee, $) => {
                        var ye = J(), B = z(ye);
                        {
                          var ie = (Y) => {
                            var le = k_(), Ee = z(le);
                            {
                              var q = (Ae) => {
                                var Ne = N_();
                                Ne.__input = [P_, E], Le(() => ur(Ne, "placeholder", `${f()} ${o(re).headerName}`)), Ea(Ne, () => m[o(re).field], (Ye) => m[o(re).field] = Ye), w(Ae, Ne);
                              };
                              ae(Ee, (Ae) => {
                                o(re).filterType === "text" && Ae(q);
                              });
                            }
                            var se = me(Ee, 2);
                            {
                              var Re = (Ae) => {
                                var Ne = F_();
                                Ne.__input = [U_, E], Le(() => ur(Ne, "placeholder", `${f()} ${o(re).headerName}`)), Ea(Ne, () => m[o(re).field], (Ye) => m[o(re).field] = Ye), w(Ae, Ne);
                              };
                              ae(se, (Ae) => {
                                o(re).filterType === "number" && Ae(Re);
                              });
                            }
                            w(Y, le);
                          };
                          ae(B, (Y) => {
                            o(re).filter && Y(ie);
                          });
                        }
                        w(ee, ye);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w(X, P);
                },
                $$slots: { default: !0 }
              });
            };
            ae(G, (U) => {
              o(I) && U(V);
            });
          }
          w(W, F);
        },
        $$slots: { default: !0 }
      });
      var N = me(C, 2);
      Pb(N, {
        children: (W, k) => {
          var F = J(), ue = z(F);
          rr(ue, 1, i, Ti, (G, V) => {
            io(G, {
              children: (U, X) => {
                var te = J(), P = z(te);
                rr(P, 17, c, (L) => L.field, (L, O) => {
                  var re = J(), ee = z(re);
                  {
                    var $ = (B) => {
                      Ka(B, {
                        children: (ie, Y) => {
                          var le = V_();
                          rr(le, 21, h, Ti, (Ee, q) => {
                            var se = J(), Re = z(se);
                            {
                              var Ae = (Ye) => {
                                Ca(Ye, {
                                  get content() {
                                    return o(q).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (dt, D) => {
                                    {
                                      let j = /* @__PURE__ */ be(() => o(q).disabled(o(V)));
                                      rg(dt, {
                                        get iconComponent() {
                                          return o(q).iconComponent;
                                        },
                                        get iconStyles() {
                                          return o(q).iconStyles;
                                        },
                                        callback: () => o(q).callback(o(V)),
                                        get disabled() {
                                          return o(j);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, Ne = (Ye) => {
                                Ca(Ye, {
                                  get content() {
                                    return o(q).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (dt, D) => {
                                    {
                                      let j = /* @__PURE__ */ be(() => o(q).disabled(o(V)));
                                      Xc(dt, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => o(q).callback(o(V)),
                                        get disabled() {
                                          return o(j);
                                        },
                                        children: (ve, ke) => {
                                          var xt = J(), Tt = z(xt);
                                          {
                                            var dn = (H) => {
                                              qp(H, { svgStyles: "margin: unset" });
                                            }, _e = (H) => {
                                              var M = J(), Q = z(M);
                                              {
                                                var De = (at) => {
                                                  el(at, { svgStyles: "margin: unset" });
                                                }, lt = (at) => {
                                                  var wt = J(), jt = z(wt);
                                                  {
                                                    var hr = (mt) => {
                                                      Xp(mt, { svgStyles: "margin: unset" });
                                                    }, ft = (mt) => {
                                                      var Ft = J(), Un = z(Ft);
                                                      {
                                                        var mi = (He) => {
                                                          Zp(He, { svgStyles: "margin: unset" });
                                                        }, Fn = (He) => {
                                                          var tt = J(), et = z(tt);
                                                          {
                                                            var Dt = (Ke) => {
                                                              $p(Ke, { svgStyles: "margin: unset" });
                                                            }, fn = (Ke) => {
                                                              var pt = J(), Ot = z(pt);
                                                              {
                                                                var Qe = (qt) => {
                                                                  td(qt, { svgStyles: "margin: unset" });
                                                                }, Lt = (qt) => {
                                                                  var Zt = J(), _t = z(Zt);
                                                                  {
                                                                    var Mt = (bt) => {
                                                                      nd(bt, { svgStyles: "margin: unset" });
                                                                    }, sn = (bt) => {
                                                                      Qp(bt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    ae(
                                                                      _t,
                                                                      (bt) => {
                                                                        o(q).icon === "delete" ? bt(Mt) : bt(sn, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(qt, Zt);
                                                                };
                                                                ae(
                                                                  Ot,
                                                                  (qt) => {
                                                                    o(q).icon === "edit" ? qt(Qe) : qt(Lt, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(Ke, pt);
                                                            };
                                                            ae(
                                                              et,
                                                              (Ke) => {
                                                                o(q).icon === "remove" ? Ke(Dt) : Ke(fn, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(He, tt);
                                                        };
                                                        ae(
                                                          Un,
                                                          (He) => {
                                                            o(q).icon === "find-in-page" ? He(mi) : He(Fn, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(mt, Ft);
                                                    };
                                                    ae(
                                                      jt,
                                                      (mt) => {
                                                        o(q).icon === "download" ? mt(hr) : mt(ft, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(at, wt);
                                                };
                                                ae(
                                                  Q,
                                                  (at) => {
                                                    o(q).icon === "cancel" ? at(De) : at(lt, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              w(H, M);
                                            };
                                            ae(Tt, (H) => {
                                              o(q).icon === "add" ? H(dn) : H(_e, !1);
                                            });
                                          }
                                          w(ve, xt);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              ae(Re, (Ye) => {
                                o(q).iconComponent ? Ye(Ae) : Ye(Ne, !1);
                              });
                            }
                            w(Ee, se);
                          }), w(ie, le);
                        },
                        $$slots: { default: !0 }
                      });
                    }, ye = (B) => {
                      Ka(B, {
                        get numeric() {
                          return o(O).numeric;
                        },
                        get style() {
                          return o(O).cellStyle;
                        },
                        children: (ie, Y) => {
                          var le = J(), Ee = z(le);
                          {
                            var q = (Re) => {
                              const Ae = /* @__PURE__ */ be(() => o(O).cellRenderer);
                              var Ne = J(), Ye = z(Ne);
                              fr(Ye, () => o(Ae), (dt, D) => {
                                D(dt, $e(
                                  {
                                    get row() {
                                      return o(V);
                                    },
                                    get value() {
                                      return o(V)[o(O).field];
                                    },
                                    get col() {
                                      return o(O);
                                    }
                                  },
                                  () => o(O).cellRendererProps ?? {}
                                ));
                              }), w(Re, Ne);
                            }, se = (Re) => {
                              var Ae = J(), Ne = z(Ae);
                              {
                                var Ye = (D) => {
                                  var j = Et();
                                  Le((ve) => Ze(j, ve), [
                                    () => o(O).valueFormatter(o(V)[o(O).field])
                                  ]), w(D, j);
                                }, dt = (D) => {
                                  var j = Et();
                                  Le(() => Ze(j, o(V)[o(O).field] ?? "")), w(D, j);
                                };
                                ae(
                                  Ne,
                                  (D) => {
                                    o(O).valueFormatter ? D(Ye) : D(dt, !1);
                                  },
                                  !0
                                );
                              }
                              w(Re, Ae);
                            };
                            ae(Ee, (Re) => {
                              o(O).cellRenderer ? Re(q) : Re(se, !1);
                            });
                          }
                          w(ie, le);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ae(ee, (B) => {
                      o(O).field === "actions" ? B($) : B(ye, !1);
                    });
                  }
                  w(L, re);
                }), w(U, te);
              },
              $$slots: { default: !0 }
            });
          }), w(W, F);
        },
        $$slots: { default: !0 }
      }), w(y, x);
    },
    $$slots: { progress: !0, default: !0 }
  }), Te(), s();
}
wn(["input"]);
function St(t) {
  return typeof t == "function";
}
function tl(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var ao = tl(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function ys(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Ua = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var u = Pt(s), l = u.next(); !l.done; l = u.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (p) {
            e = { error: p };
          } finally {
            try {
              l && !l.done && (n = u.return) && n.call(u);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          s.remove(this);
      var d = this.initialTeardown;
      if (St(d))
        try {
          d();
        } catch (p) {
          a = p instanceof ao ? p.errors : [p];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Pt(h), m = f.next(); !m.done; m = f.next()) {
            var v = m.value;
            try {
              du(v);
            } catch (p) {
              a = a ?? [], p instanceof ao ? a = wr(wr([], Wi(a)), Wi(p.errors)) : a.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            m && !m.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new ao(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        du(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0 ? n : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var n = this._parentage;
    return n === e || Array.isArray(n) && n.includes(e);
  }, t.prototype._addParent = function(e) {
    var n = this._parentage;
    this._parentage = Array.isArray(n) ? (n.push(e), n) : n ? [n, e] : e;
  }, t.prototype._removeParent = function(e) {
    var n = this._parentage;
    n === e ? this._parentage = null : Array.isArray(n) && ys(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && ys(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), id = Ua.EMPTY;
function ad(t) {
  return t instanceof Ua || t && "closed" in t && St(t.remove) && St(t.add) && St(t.unsubscribe);
}
function du(t) {
  St(t) ? t() : t.unsubscribe();
}
var j_ = {
  Promise: void 0
}, q_ = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, wr([t, e], Wi(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function sd(t) {
  q_.setTimeout(function() {
    throw t;
  });
}
function fu() {
}
function rs(t) {
  t();
}
var nl = function(t) {
  nt(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, ad(n) && n.add(r)) : r.destination = X_, r;
  }
  return e.create = function(n, r, i) {
    return new Do(n, r, i);
  }, e.prototype.next = function(n) {
    this.isStopped || this._next(n);
  }, e.prototype.error = function(n) {
    this.isStopped || (this.isStopped = !0, this._error(n));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(n) {
    this.destination.next(n);
  }, e.prototype._error = function(n) {
    try {
      this.destination.error(n);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(Ua), z_ = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Ya(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Ya(r);
      }
    else
      Ya(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Ya(n);
      }
  }, t;
}(), Do = function(t) {
  nt(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return St(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new z_(s), a;
  }
  return e;
}(nl);
function Ya(t) {
  sd(t);
}
function W_(t) {
  throw t;
}
var X_ = {
  closed: !0,
  next: fu,
  error: W_,
  complete: fu
}, rl = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function il(t) {
  return t;
}
function K_(t) {
  return t.length === 0 ? il : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var un = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Y_(e) ? e : new Do(e, n, r);
    return rs(function() {
      var s = i, u = s.operator, l = s.source;
      a.add(u ? u.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = hu(n), new n(function(i, a) {
      var s = new Do({
        next: function(u) {
          try {
            e(u);
          } catch (l) {
            a(l), s.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(s);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[rl] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return K_(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = hu(e), new e(function(r, i) {
      var a;
      n.subscribe(function(s) {
        return a = s;
      }, function(s) {
        return i(s);
      }, function() {
        return r(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function hu(t) {
  var e;
  return (e = t ?? j_.Promise) !== null && e !== void 0 ? e : Promise;
}
function Z_(t) {
  return t && St(t.next) && St(t.error) && St(t.complete);
}
function Y_(t) {
  return t && t instanceof nl || Z_(t) && ad(t);
}
function Q_(t) {
  return St(t == null ? void 0 : t.lift);
}
function On(t) {
  return function(e) {
    if (Q_(e))
      return e.lift(function(n) {
        try {
          return t(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Tn(t, e, n, r, i) {
  return new J_(t, e, n, r, i);
}
var J_ = function(t) {
  nt(e, t);
  function e(n, r, i, a, s, u) {
    var l = t.call(this, n) || this;
    return l.onFinalize = s, l.shouldUnsubscribe = u, l._next = r ? function(c) {
      try {
        r(c);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, l._error = a ? function(c) {
      try {
        a(c);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (c) {
        n.error(c);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, l;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(nl), $_ = tl(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), od = function(t) {
  nt(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new vu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new $_();
  }, e.prototype.next = function(n) {
    var r = this;
    rs(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Pt(r.currentObservers), u = s.next(); !u.done; u = s.next()) {
            var l = u.value;
            l.next(n);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            u && !u.done && (a = s.return) && a.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    rs(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    rs(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.isStopped = !0;
        for (var r = n.observers; r.length; )
          r.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var n;
      return ((n = this.observers) === null || n === void 0 ? void 0 : n.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(n) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, n);
  }, e.prototype._subscribe = function(n) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(n), this._innerSubscribe(n);
  }, e.prototype._innerSubscribe = function(n) {
    var r = this, i = this, a = i.hasError, s = i.isStopped, u = i.observers;
    return a || s ? id : (this.currentObservers = null, u.push(n), new Ua(function() {
      r.currentObservers = null, ys(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new un();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new vu(n, r);
  }, e;
}(un), vu = function(t) {
  nt(e, t);
  function e(n, r) {
    var i = t.call(this) || this;
    return i.destination = n, i.source = r, i;
  }
  return e.prototype.next = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.next) === null || i === void 0 || i.call(r, n);
  }, e.prototype.error = function(n) {
    var r, i;
    (i = (r = this.destination) === null || r === void 0 ? void 0 : r.error) === null || i === void 0 || i.call(r, n);
  }, e.prototype.complete = function() {
    var n, r;
    (r = (n = this.destination) === null || n === void 0 ? void 0 : n.complete) === null || r === void 0 || r.call(n);
  }, e.prototype._subscribe = function(n) {
    var r, i;
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : id;
  }, e;
}(od), ey = {
  now: function() {
    return Date.now();
  }
}, ty = function(t) {
  nt(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Ua), mu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, wr([t, e], Wi(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, ny = function(t) {
  nt(e, t);
  function e(n, r) {
    var i = t.call(this, n, r) || this;
    return i.scheduler = n, i.work = r, i.pending = !1, i;
  }
  return e.prototype.schedule = function(n, r) {
    var i;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = n;
    var a = this.id, s = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(s, a, r)), this.pending = !0, this.delay = r, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(s, this.id, r), this;
  }, e.prototype.requestAsyncId = function(n, r, i) {
    return i === void 0 && (i = 0), mu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && mu.clearInterval(r);
  }, e.prototype.execute = function(n, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(n, r);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(n, r) {
    var i = !1, a;
    try {
      this.work(n);
    } catch (s) {
      i = !0, a = s || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var n = this, r = n.id, i = n.scheduler, a = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, ys(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(ty), gu = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = ey.now, t;
}(), ry = function(t) {
  nt(e, t);
  function e(n, r) {
    r === void 0 && (r = gu.now);
    var i = t.call(this, n, r) || this;
    return i.actions = [], i._active = !1, i;
  }
  return e.prototype.flush = function(n) {
    var r = this.actions;
    if (this._active) {
      r.push(n);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = n.execute(n.state, n.delay))
        break;
    while (n = r.shift());
    if (this._active = !1, i) {
      for (; n = r.shift(); )
        n.unsubscribe();
      throw i;
    }
  }, e;
}(gu), al = new ry(ny), iy = al, ay = new un(function(t) {
  return t.complete();
});
function ld(t) {
  return t && St(t.schedule);
}
function sy(t) {
  return t[t.length - 1];
}
function oy(t) {
  return ld(sy(t)) ? t.pop() : void 0;
}
var ud = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function cd(t) {
  return St(t == null ? void 0 : t.then);
}
function dd(t) {
  return St(t[rl]);
}
function fd(t) {
  return Symbol.asyncIterator && St(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function hd(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function ly() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var vd = ly();
function md(t) {
  return St(t == null ? void 0 : t[vd]);
}
function gd(t) {
  return Hh(this, arguments, function() {
    var n, r, i, a;
    return Zo(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Di(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, Di(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Di(i)];
        case 6:
          return [4, s.sent()];
        case 7:
          return s.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return n.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function pd(t) {
  return St(t == null ? void 0 : t.getReader);
}
function Nr(t) {
  if (t instanceof un)
    return t;
  if (t != null) {
    if (dd(t))
      return uy(t);
    if (ud(t))
      return cy(t);
    if (cd(t))
      return dy(t);
    if (fd(t))
      return bd(t);
    if (md(t))
      return fy(t);
    if (pd(t))
      return hy(t);
  }
  throw hd(t);
}
function uy(t) {
  return new un(function(e) {
    var n = t[rl]();
    if (St(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function cy(t) {
  return new un(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function dy(t) {
  return new un(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, sd);
  });
}
function fy(t) {
  return new un(function(e) {
    var n, r;
    try {
      for (var i = Pt(t), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        if (e.next(s), e.closed)
          return;
      }
    } catch (u) {
      n = { error: u };
    } finally {
      try {
        a && !a.done && (r = i.return) && r.call(i);
      } finally {
        if (n) throw n.error;
      }
    }
    e.complete();
  });
}
function bd(t) {
  return new un(function(e) {
    vy(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function hy(t) {
  return bd(gd(t));
}
function vy(t, e) {
  var n, r, i, a;
  return yc(this, void 0, void 0, function() {
    var s, u;
    return Zo(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Ph(t), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done) return [3, 4];
          if (s = r.value, e.next(s), e.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return u = l.sent(), i = { error: u }, [3, 11];
        case 6:
          return l.trys.push([6, , 9, 10]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
        case 7:
          l.sent(), l.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function ii(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function _d(t, e) {
  return e === void 0 && (e = 0), On(function(n, r) {
    n.subscribe(Tn(r, function(i) {
      return ii(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ii(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ii(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function yd(t, e) {
  return e === void 0 && (e = 0), On(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function my(t, e) {
  return Nr(t).pipe(yd(e), _d(e));
}
function gy(t, e) {
  return Nr(t).pipe(yd(e), _d(e));
}
function py(t, e) {
  return new un(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function by(t, e) {
  return new un(function(n) {
    var r;
    return ii(n, e, function() {
      r = t[vd](), ii(n, e, function() {
        var i, a, s;
        try {
          i = r.next(), a = i.value, s = i.done;
        } catch (u) {
          n.error(u);
          return;
        }
        s ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return St(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Id(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new un(function(n) {
    ii(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ii(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function _y(t, e) {
  return Id(gd(t), e);
}
function yy(t, e) {
  if (t != null) {
    if (dd(t))
      return my(t, e);
    if (ud(t))
      return py(t, e);
    if (cd(t))
      return gy(t, e);
    if (fd(t))
      return Id(t, e);
    if (md(t))
      return by(t, e);
    if (pd(t))
      return _y(t, e);
  }
  throw hd(t);
}
function sl(t, e) {
  return e ? yy(t, e) : Nr(t);
}
function xa() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = oy(t);
  return sl(t, n);
}
function Iy(t) {
  return t instanceof Date && !isNaN(t);
}
function Nt(t, e) {
  return On(function(n, r) {
    var i = 0;
    n.subscribe(Tn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function Ey(t, e, n, r, i, a, s, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, m = function(p) {
    return c < r ? v(p) : l.push(p);
  }, v = function(p) {
    c++;
    var b = !1;
    Nr(n(p, d++)).subscribe(Tn(e, function(I) {
      e.next(I);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          c--;
          for (var I = function() {
            var E = l.shift();
            s || v(E);
          }; l.length && c < r; )
            I();
          f();
        } catch (E) {
          e.error(E);
        }
    }));
  };
  return t.subscribe(Tn(e, m, function() {
    h = !0, f();
  })), function() {
  };
}
function Is(t, e, n) {
  return n === void 0 && (n = 1 / 0), St(e) ? Is(function(r, i) {
    return Nt(function(a, s) {
      return e(r, a, i, s);
    })(Nr(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), On(function(r, i) {
    return Ey(r, i, t, n);
  }));
}
function Sy(t, e, n) {
  n === void 0 && (n = iy);
  var r = -1;
  return e != null && (ld(e) ? n = e : r = e), new un(function(i) {
    var a = Iy(t) ? +t - n.now() : t;
    a < 0 && (a = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, a);
  });
}
function pu(t, e) {
  return On(function(n, r) {
    var i = 0;
    n.subscribe(Tn(r, function(a) {
      return t.call(e, a, i++) && r.next(a);
    }));
  });
}
function Es(t) {
  return On(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Tn(n, void 0, void 0, function(s) {
      a = Nr(t(s, Es(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function Ed(t, e) {
  return St(e) ? Is(t, e, 1) : Is(t, 1);
}
function Ay(t, e) {
  return e === void 0 && (e = al), On(function(n, r) {
    var i = null, a = null, s = null, u = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var c = a;
        a = null, r.next(c);
      }
    };
    function l() {
      var c = s + t, d = e.now();
      if (d < c) {
        i = this.schedule(void 0, c - d), r.add(i);
        return;
      }
      u();
    }
    n.subscribe(Tn(r, function(c) {
      a = c, s = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function br(t) {
  return t <= 0 ? function() {
    return ay;
  } : On(function(e, n) {
    var r = 0;
    e.subscribe(Tn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function Cy(t) {
  return Nt(function() {
    return t;
  });
}
function xy(t, e) {
  return Is(function(n, r) {
    return Nr(t(n, r)).pipe(br(1), Cy(n));
  });
}
function Ty(t, e) {
  e === void 0 && (e = al);
  var n = Sy(t, e);
  return xy(function() {
    return n;
  });
}
function wy(t, e) {
  return e === void 0 && (e = il), t = t ?? Oy, On(function(n, r) {
    var i, a = !0;
    n.subscribe(Tn(r, function(s) {
      var u = e(s);
      (a || !t(i, u)) && (a = !1, i = u, r.next(s));
    }));
  });
}
function Oy(t, e) {
  return t === e;
}
function bu(t) {
  return On(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function _u(t, e) {
  return On(function(n, r) {
    var i = null, a = 0, s = !1, u = function() {
      return s && !i && r.complete();
    };
    n.subscribe(Tn(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      Nr(t(l, d)).subscribe(i = Tn(r, function(h) {
        return r.next(e ? e(l, h, d, c++) : h);
      }, function() {
        i = null, u();
      }));
    }, function() {
      s = !0, u();
    }));
  });
}
function Si(t, e, n) {
  var r = St(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? On(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var u = !0;
    i.subscribe(Tn(a, function(l) {
      var c;
      (c = r.next) === null || c === void 0 || c.call(r, l), a.next(l);
    }, function() {
      var l;
      u = !1, (l = r.complete) === null || l === void 0 || l.call(r), a.complete();
    }, function(l) {
      var c;
      u = !1, (c = r.error) === null || c === void 0 || c.call(r, l), a.error(l);
    }, function() {
      var l, c;
      u && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (c = r.finalize) === null || c === void 0 || c.call(r);
    }));
  }) : il;
}
class Ly {
  constructor(e, n, r, i, a, s, u, l, c) {
    this._uuid = e, this._filename = n, this._author = r, this._type = i, this._date = a, this._version = s, this._comment = u, this._archived = l, this._available = c;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._filename;
  }
  get author() {
    return this._author;
  }
  get type() {
    return this._type;
  }
  get date() {
    return this._date;
  }
  get version() {
    return this._version;
  }
  get comment() {
    return this._comment;
  }
  get archived() {
    return this._archived;
  }
  get available() {
    return this._available;
  }
}
function Sd(t) {
  switch (t.responseType) {
    case "json": {
      if ("response" in t)
        return t.response;
      var e = t;
      return JSON.parse(e.responseText);
    }
    case "document":
      return t.responseXML;
    case "text":
    default: {
      if ("response" in t)
        return t.response;
      var e = t;
      return e.responseText;
    }
  }
}
var Ry = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, s = n.responseType;
    this.status = a ?? 0, this.responseType = s ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = Sd(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), Ss = tl(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Sd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), Dy = function() {
  function t(e, n) {
    return Ss.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Ss.prototype), t;
}();
function My(t, e) {
  return Ur({ method: "GET", url: t, headers: e });
}
function Hy(t, e, n) {
  return Ur({ method: "POST", url: t, body: e, headers: n });
}
function Py(t, e) {
  return Ur({ method: "DELETE", url: t, headers: e });
}
function Ny(t, e, n) {
  return Ur({ method: "PUT", url: t, body: e, headers: n });
}
function Uy(t, e, n) {
  return Ur({ method: "PATCH", url: t, body: e, headers: n });
}
var Fy = Nt(function(t) {
  return t.response;
});
function ky(t, e) {
  return Fy(Ur({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Ur = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Vy(n);
  };
  return t.get = My, t.post = Hy, t.delete = Py, t.put = Ny, t.patch = Uy, t.getJSON = ky, t;
}(), By = "upload", yu = "download", so = "loadstart", oo = "progress", Iu = "load";
function Vy(t) {
  return new un(function(e) {
    var n, r, i = pe({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, s = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(U, X) {
          return c.set(X, U);
        }), l = d[0] + "?" + c;
      } else
        c = new URLSearchParams(a), l = l + "?" + c;
    }
    var h = {};
    if (u)
      for (var f in u)
        u.hasOwnProperty(f) && (h[f.toLowerCase()] = u[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var v = i.withCredentials, p = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((v || !m) && p && b) {
      var I = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      I && (h[b] = I);
    }
    var E = Gy(s, h), A = pe(pe({}, i), {
      url: l,
      headers: h,
      body: E
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var S = t.progressSubscriber, y = t.includeDownloadProgress, T = y === void 0 ? !1 : y, x = t.includeUploadProgress, C = x === void 0 ? !1 : x, N = function(U, X) {
        _.addEventListener(U, function() {
          var te, P = X();
          (te = S == null ? void 0 : S.error) === null || te === void 0 || te.call(S, P), e.error(P);
        });
      };
      N("timeout", function() {
        return new Dy(_, A);
      }), N("abort", function() {
        return new Ss("aborted", _, A);
      });
      var W = function(U, X) {
        return new Ry(X, _, A, U + "_" + X.type);
      }, k = function(U, X, te) {
        U.addEventListener(X, function(P) {
          e.next(W(te, P));
        });
      };
      C && [so, oo, Iu].forEach(function(U) {
        return k(_.upload, U, By);
      }), S && [so, oo].forEach(function(U) {
        return _.upload.addEventListener(U, function(X) {
          var te;
          return (te = S == null ? void 0 : S.next) === null || te === void 0 ? void 0 : te.call(S, X);
        });
      }), T && [so, oo].forEach(function(U) {
        return k(_, U, yu);
      });
      var F = function(U) {
        var X = "ajax error" + (U ? " " + U : "");
        e.error(new Ss(X, _, A));
      };
      _.addEventListener("error", function(U) {
        var X;
        (X = S == null ? void 0 : S.error) === null || X === void 0 || X.call(S, U), F();
      }), _.addEventListener(Iu, function(U) {
        var X, te, P = _.status;
        if (P < 400) {
          (X = S == null ? void 0 : S.complete) === null || X === void 0 || X.call(S);
          var L = void 0;
          try {
            L = W(yu, U);
          } catch (O) {
            e.error(O);
            return;
          }
          e.next(L), e.complete();
        } else
          (te = S == null ? void 0 : S.error) === null || te === void 0 || te.call(S, U), F(P);
      });
    }
    var ue = A.user, G = A.method, V = A.async;
    ue ? _.open(G, l, V, ue, A.password) : _.open(G, l, V), V && (_.timeout = A.timeout, _.responseType = A.responseType), "withCredentials" in _ && (_.withCredentials = A.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && _.setRequestHeader(f, h[f]);
    return E ? _.send(E) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function Gy(t, e) {
  var n;
  if (!t || typeof t == "string" || Ky(t) || Zy(t) || qy(t) || zy(t) || Wy(t) || Yy(t))
    return t;
  if (Xy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var jy = Object.prototype.toString;
function ol(t, e) {
  return jy.call(t) === "[object " + e + "]";
}
function qy(t) {
  return ol(t, "ArrayBuffer");
}
function zy(t) {
  return ol(t, "File");
}
function Wy(t) {
  return ol(t, "Blob");
}
function Xy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Ky(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Zy(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Yy(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let Qy = class {
  constructor(e, n, r) {
    this.url = e, this.variableConfiguration = n, this.description = r;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(e) {
    Object.assign(this.variableConfiguration, e);
  }
  getConfiguration() {
    return this.variableConfiguration;
  }
  getDescription() {
    return this.description;
  }
  /**
   * Constructions the URL this server using the url with variables
   * replaced with their respective values
   */
  getUrl() {
    let e = this.url;
    for (const n in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(n)) {
        const r = new RegExp("{" + n + "}", "g");
        e = e.replace(r, this.variableConfiguration[n]);
      }
    return e;
  }
};
const Jy = new Qy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), $y = [Jy], eI = $y[0].getUrl();
let Ad = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? eI;
  }
  get middleware() {
    return this.configuration.middleware ?? [];
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const { apiKey: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
  get accessToken() {
    const { accessToken: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
}, tI = class {
  constructor(e = new Ad()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${nI(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => xa(n).pipe(
      Nt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Ed(
        (r) => Ur(r).pipe(
          Nt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Nt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const ar = (t) => encodeURIComponent(`${t}`), nI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${ar(e)}=${ar(r)}`).join("&") : `${ar(e)}=${ar(n)}`
).join("&"), Ai = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class rI extends tI {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    Ai(e, "id", "deleteAllSclFileVersions"), Ai(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/api/scl/{type}/{id}".replace("{id}", ar(e)).replace("{type}", ar(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Ai(e, "id", "retrieveDataResourceByVersion"), Ai(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", ar(e)).replace("{version}", ar(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Ai(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", ar(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Ai(e, "dataResourceSearch", "searchForResources");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/scl/search",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
class Oi {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return Oi.instance || (Oi.instance = new Oi()), Oi.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      pu((r) => !!r || !!r.results),
      Nt((r) => r.results),
      Nt(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      pu((r) => !!r || !!r.versions),
      Nt((r) => r.versions),
      Nt(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  /**
   * Delete all versions of a resource
   * @param type scl file type (e.g., SSD, SCL, etc.)
   * @param uuid uuid of the resource
   */
  deleteResource(e, n) {
    return this.generateApiClient(this.endpoint).deleteAllSclFileVersions({ id: n, type: e });
  }
  downloadSclData(e, n, r) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceByVersion({
      id: e,
      version: r
    });
  }
  mapToFileSearchResult(e) {
    return new Ly(
      e.uuid,
      e.name,
      e.author,
      e.type,
      new Date(e.changedAt),
      e.version,
      e.comment,
      e.archived,
      e.available
    );
  }
  mapToDataResourceSearch(e) {
    return {
      uuid: e.uuid || null,
      type: e.type || null,
      name: e.filename || null,
      author: e.author || null,
      from: e.from || null,
      to: e.to || null
    };
  }
  generateApiClient(e) {
    const n = new Ad({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new rI(n);
  }
}
var Er;
class Eu {
  constructor() {
    Je(this, Er, Ut([]));
  }
  get store() {
    return ne(this, Er);
  }
  updateData(e) {
    ne(this, Er).set(e);
  }
  addData(e) {
    ne(this, Er).update((n) => [...n, e]);
  }
  removeData(e) {
    ne(this, Er).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return bc(ne(this, Er)).find((n) => n.uuid === e);
  }
}
Er = new WeakMap();
class iI {
  constructor(e, n, r) {
    this.url = e, this.variableConfiguration = n, this.description = r;
  }
  /**
   * Sets the value of the variables of this server.
   *
   * @param variableConfiguration a partial variable configuration for the variables contained in the url
   */
  setVariables(e) {
    Object.assign(this.variableConfiguration, e);
  }
  getConfiguration() {
    return this.variableConfiguration;
  }
  getDescription() {
    return this.description;
  }
  /**
   * Constructions the URL this server using the url with variables
   * replaced with their respective values
   */
  getUrl() {
    let e = this.url;
    for (const n in this.variableConfiguration)
      if (this.variableConfiguration.hasOwnProperty(n)) {
        const r = new RegExp("{" + n + "}", "g");
        e = e.replace(r, this.variableConfiguration[n]);
      }
    return e;
  }
}
const aI = new iI("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), sI = [aI], oI = sI[0].getUrl();
class Cd {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? oI;
  }
  get middleware() {
    return this.configuration.middleware ?? [];
  }
  get username() {
    return this.configuration.username;
  }
  get password() {
    return this.configuration.password;
  }
  get apiKey() {
    const { apiKey: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
  get accessToken() {
    const { accessToken: e } = this.configuration;
    return e ? typeof e == "string" ? () => e : e : void 0;
  }
}
class lI {
  constructor(e = new Cd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${uI(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => xa(n).pipe(
      Nt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      Ed(
        (r) => Ur(r).pipe(
          Nt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Nt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const sr = (t) => encodeURIComponent(`${t}`), uI = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${sr(e)}=${sr(r)}`).join("&") : `${sr(e)}=${sr(n)}`
).join("&"), va = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class cI extends lI {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: s, body: u }, l) {
    va(e, "id", "archiveResource"), va(n, "version", "archiveResource");
    const c = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...s != null ? { "X-filename": String(s) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", sr(e)).replace("{version}", sr(n)),
      method: "POST",
      headers: c,
      body: u
    }, l == null ? void 0 : l.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    va(e, "id", "archiveSclResource"), va(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", sr(e)).replace("{version}", sr(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    va(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", sr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchArchivedResources({ archivedResourcesSearch: e }, n) {
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/archive/resources/search",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
}
class ma {
  constructor(e, n, r, i, a, s, u, l, c, d, h, f, m) {
    this._uuid = e, this._name = n, this._location = r, this._note = i, this._author = a, this._approver = s, this._type = u, this._voltage = l, this._modifiedAt = c, this._archivedAt = d, this._contentType = h, this._version = f, this._fields = m;
  }
  get uuid() {
    return this._uuid;
  }
  get filename() {
    return this._name;
  }
  get location() {
    return this._location;
  }
  get author() {
    return this._author;
  }
  get version() {
    return this._version;
  }
  get type() {
    return this._type;
  }
  get name() {
    return this._name;
  }
  get note() {
    return this._note;
  }
  get approver() {
    return this._approver;
  }
  get voltage() {
    return this._voltage;
  }
  get modifiedAt() {
    return this._modifiedAt;
  }
  get archivedAt() {
    return this._archivedAt;
  }
  get contentType() {
    return this._contentType;
  }
  get fields() {
    return this._fields;
  }
}
class Li {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new ma(
        Xr(),
        "Dummy name",
        "z1b2c3d4-e5f6-7890-1234-56789abcdef1",
        "My Note",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "1.0.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID_FROM_FIELD :)" }]
      ),
      new ma(
        Xr(),
        "Dummy name 2",
        "e1b2c3d4-e5f6-7890-1234-56789abcdef1",
        "My Note 2",
        "Jane Doe",
        "John Doe",
        "SCD",
        "220",
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        this.formatDate((/* @__PURE__ */ new Date()).toISOString()),
        "application/xml",
        "4.1.0",
        [{ key: "SOURCE_RESOURCE_ID", value: "GUID2_FROM_FIELD :)" }]
      )
    ];
  }
  static getInstance() {
    return Li.instance || (Li.instance = new Li()), Li.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      br(1),
      Nt((n) => n.resources),
      Nt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Es(() => xa(this.dummySearchResults)),
      Ty(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      br(1),
      Nt((n) => n.versions),
      Nt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      Es(() => xa([
        new ma(
          Xr(),
          "Dummy name",
          "e1b2c3d4-e5f6-7890-1234-56789abcdef1",
          "My Note",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "2.0.0",
          [{ key: "SOURCE_RESOURCE_ID", value: Xr() }]
        ),
        new ma(
          Xr(),
          "Dummy name",
          "3c4b2a7e-4c8b-49da-9627-5b783d85745f",
          "My Note 2",
          "Jane Doe",
          "John Doe",
          "SCD",
          "220",
          (/* @__PURE__ */ new Date()).toDateString(),
          (/* @__PURE__ */ new Date()).toDateString(),
          "application/xml",
          "5.1.0",
          [{ key: "SOURCE_RESOURCE_ID", value: Xr() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return sl(
      fetch(`${this.baseUrl}/scl/v1/${n}/${e}/${r}`).then((i) => {
        if (i.status >= 200 && i.status < 300)
          return i.blob();
        throw new Error(
          "Unable to download resource: " + i.status + " " + i.statusText
        );
      })
    );
  }
  archiveSclFile(e, n) {
    return this.generateApiClient().archiveSclResource({ id: e, version: n });
  }
  mapToArchiveSearchResult(e) {
    return new ma(
      e.uuid,
      e.name,
      e.location,
      e.note,
      e.author,
      e.approver,
      e.type,
      e.voltage,
      new Date(e.modifiedAt).toDateString(),
      new Date(e.archivedAt).toDateString(),
      e.contentType,
      e.version,
      e.fields
    );
  }
  formatDate(e) {
    if (!e)
      return "";
    const n = new Date(e);
    return isNaN(n.getTime()) ? "" : Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(n);
  }
  generateApiClient() {
    const e = new Cd({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new cI(e);
  }
}
cm({ en: Hm, de: Em });
var dI = /* @__PURE__ */ de("<h3> </h3>"), fI = /* @__PURE__ */ de("<div><!></div>"), hI = /* @__PURE__ */ de("<!> <!>", 1), vI = /* @__PURE__ */ de("<div><!></div>"), mI = /* @__PURE__ */ de('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div> <!> <!>', 1);
function gI(t, e) {
  xe(e, !0);
  const n = () => Pn(um, "$_", r), [r, i] = Kn(), a = Oi.getInstance(), s = Li.getInstance();
  let u = /* @__PURE__ */ Ie(void 0);
  const l = new od(), c = l.pipe(
    Ay(150),
    Nt(() => x(o(S))),
    wy((O, re) => JSON.stringify(O) === JSON.stringify(re)),
    Si(() => {
      K(f, !1);
    }),
    _u((O) => a.searchFiles(O).pipe(
      Si((re) => {
        [...re], d().updateData(re);
      }),
      bu(() => {
        K(f, !0);
      })
    ))
  );
  let d = g(e, "dataStore", 19, () => new Eu()), h = g(e, "historyStore", 19, () => new Eu()), f = /* @__PURE__ */ Ie(!0), m = /* @__PURE__ */ Ie(!1), v = /* @__PURE__ */ Ie("");
  ot(() => {
    const O = c.subscribe();
    return l.next(), () => O.unsubscribe();
  });
  function p(O) {
    return new Date(O).toLocaleDateString();
  }
  const b = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  };
  let I = /* @__PURE__ */ be(() => [
    {
      headerName: n()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: n()("filename"),
      field: "filename",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("type"),
      field: "type",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("author"),
      field: "author",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("date"),
      field: "date",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0,
      valueFormatter: p
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    b
  ]), E = /* @__PURE__ */ be(() => [
    ...o(I),
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    }
  ]);
  const A = [
    {
      icon: "edit",
      tooltip: "Edit",
      callback: (O) => W(O),
      disabled: (O) => !O.available
    },
    {
      icon: "find-in-page",
      tooltip: "View History",
      callback: (O) => C(O),
      disabled: () => !1
    },
    {
      icon: "download",
      tooltip: "Download",
      callback: (O) => T(O),
      disabled: (O) => !O.available
    },
    {
      icon: "delete",
      tooltip: "Delete",
      callback: (O) => y(O),
      disabled: () => !1
    }
  ], _ = [
    {
      icon: "download",
      tooltip: "Download",
      callback: (O) => T(O),
      disabled: (O) => !O.available
    }
  ];
  let S = /* @__PURE__ */ Ie(Ce([
    { key: "uuid", label: "UUID", type: "text" },
    {
      key: "type",
      label: "Type",
      type: "select",
      options: [
        { value: "SSD", label: "SSD" },
        { value: "IID", label: "IID" },
        { value: "ICD", label: "ICD" },
        { value: "SCD", label: "SCD" },
        { value: "CID", label: "CID" },
        { value: "SED", label: "SED" },
        { value: "ISD", label: "ISD" },
        { value: "STD", label: "STD" }
      ]
    },
    { key: "author", label: "Author", type: "text" },
    { key: "from", label: "Date from", type: "date" },
    { key: "to", label: "Date to", type: "date" }
  ]));
  async function y(O) {
    console.debug("deleteResource: ", O), (await Rp(Mp, {
      title: "Confirm Deletion",
      message: `Are you sure you want to delete the resource "${O.filename} (${O.uuid})"? This action cannot be undone.`,
      confirmActionText: "Delete",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && s.archiveSclFile(O.uuid, O.version).pipe(br(1)).subscribe({
      next: () => {
        l.next(null), _s.success("Deleted successfully", `Resource "${O.filename} (${O.uuid})" has been deleted.`);
      },
      error: (ee) => {
        console.error(`Failed to delete resource "${O.filename} (${O.uuid})":`, ee), _s.error("Deletion failed", `Failed to delete resource "${O.filename} (${O.uuid})".`);
      }
    });
  }
  function T(O) {
    console.log("Download file: ", O), a.downloadSclData(O.uuid, O.type, O.version).pipe(br(1), Si((re) => {
      const ee = window.URL.createObjectURL(re), $ = document.createElement("a");
      $.href = ee, $.download = `${O.filename}.${O.type.toLowerCase()}`, $.style.display = "none", document.body.appendChild($), $.click(), document.body.removeChild($), window.URL.revokeObjectURL(ee);
    })).subscribe();
  }
  function x(O) {
    const re = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    return O.forEach((ee) => {
      if (ee.key in re && ee.type !== "date" && ee.value)
        re[ee.key] = ee.value;
      else if (ee.type === "date" && ee.value) {
        const $ = new Date(ee.value);
        ee.key === "from" ? re.from = $.toISOString() : ee.key === "to" && ($.setHours(23, 59, 59, 999), re.to = $.toISOString());
      }
    }), o(v) && o(v).trim() !== "" && (re.filename = o(v).trim()), re;
  }
  function C(O) {
    K(u, O, !0), a.getHistoryFiles(O.uuid).pipe(br(1), Si((re) => {
      K(m, !0), [...re], h().updateData(re);
    })).subscribe();
  }
  function N(O) {
    console.log("Dialog closed with result: ", O), K(m, !1);
  }
  function W(O) {
    if (!confirm(`Open the selected file?

 Please make sure you save all changes on your current project.`))
      return;
    let re = "";
    a.downloadSclData(O.uuid, O.type, O.version).pipe(
      br(1),
      Si((ee) => {
        re = window.URL.createObjectURL(ee);
      }),
      _u(() => sl(fetch(re).then((ee) => {
        if (ee.status === 200)
          return ee.text();
        throw new Error(`Failed to load ${O.filename}: ${ee.status} ${ee.statusText}`);
      }))),
      br(1),
      Es((ee) => (alert(ee), console.error(ee), xa(void 0))),
      Si((ee) => {
        var B;
        if (!ee)
          return;
        const $ = O.filename, ye = new DOMParser().parseFromString(ee, "application/xml");
        (B = window.document.getElementsByTagName("open-scd")[0]) == null || B.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: ye, docName: $ }
        }));
      }),
      bu(() => re && window.URL.revokeObjectURL(re))
    ).subscribe();
  }
  var k = mI(), F = z(k), ue = ce(F), G = ce(ue);
  wp(G, {
    onClose: N,
    get open() {
      return o(m);
    },
    set open($) {
      K(m, $, !0);
    },
    title: ($) => {
      var ye = dI(), B = ce(ye);
      Le((ie) => Ze(B, ie), [
        () => {
          var ie;
          return n()("versionHistory.title", { values: { filename: (ie = o(u)) == null ? void 0 : ie.filename } });
        }
      ]), w($, ye);
    },
    content: ($) => {
      var ye = fI(), B = ce(ye);
      {
        let ie = /* @__PURE__ */ be(() => n()("search"));
        cu(B, {
          get columnDefs() {
            return o(E);
          },
          get store() {
            return h();
          },
          get loadingDone() {
            return o(f);
          },
          get rowActions() {
            return _;
          },
          get searchInputLabel() {
            return o(ie);
          }
        });
      }
      w($, ye);
    },
    actions: ($) => {
      var ye = vI(), B = ce(ye);
      Xc(B, {
        callback: N,
        variant: "raised",
        children: (ie, Y) => {
          var le = hI(), Ee = z(le);
          el(Ee, {});
          var q = me(Ee, 2);
          Xm(q, {
            children: (se, Re) => {
              var Ae = Et();
              Le((Ne) => Ze(Ae, Ne), [() => n()("done")]), w(se, Ae);
            },
            $$slots: { default: !0 }
          }), w(ie, le);
        },
        $$slots: { default: !0 }
      }), w($, ye);
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var V = me(G, 2), U = ce(V);
  O_(U, {
    searchLabel: "Search file name...",
    onFilterChange: () => l.next(null),
    onSearchInput: () => l.next(null),
    get filters() {
      return o(S);
    },
    set filters(O) {
      K(S, O, !0);
    },
    get searchText() {
      return o(v);
    },
    set searchText(O) {
      K(v, O, !0);
    }
  });
  var X = me(V, 2), te = ce(X);
  {
    let O = /* @__PURE__ */ be(() => n()("search"));
    cu(te, {
      get columnDefs() {
        return o(I);
      },
      get store() {
        return d();
      },
      get loadingDone() {
        return o(f);
      },
      get rowActions() {
        return A;
      },
      get searchInputLabel() {
        return o(O);
      }
    });
  }
  var P = me(F, 2);
  c_(P, {});
  var L = me(P, 2);
  Lp(L, {}), w(t, k), Te(), i();
}
const xd = "version-editor", Td = "0.0.1";
var pI = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function bI(t, e) {
  xe(e, !0);
  let n = g(e, "dev", 3, !1);
  var r = pI(), i = z(r);
  {
    var a = (l) => {
      gI(l, {});
    };
    ae(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var s = me(i, 2), u = me(s, 2);
  Le(() => {
    xl(s, xd), xl(u, Td);
  }), w(t, r), Te();
}
var ki;
class xI extends HTMLElement {
  constructor() {
    super();
    Je(this, ki);
    Me(this, ki, /* @__PURE__ */ Ie(Ce({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return o(ne(this, ki));
  }
  set props(n) {
    K(ne(this, ki), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Wf(bI, { target: this.shadowRoot, props: this.props });
    const n = _I();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
ki = new WeakMap();
function _I() {
  const t = `${xd}-v${Td}-style`, e = yI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function yI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  xI as default
};
