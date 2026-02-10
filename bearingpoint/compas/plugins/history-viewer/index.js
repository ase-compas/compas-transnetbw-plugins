var Od = Object.defineProperty;
var rl = (t) => {
  throw TypeError(t);
};
var Ld = (t, e, n) => e in t ? Od(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var gi = (t, e, n) => Ld(t, typeof e != "symbol" ? e + "" : e, n), Hs = (t, e, n) => e.has(t) || rl("Cannot " + n);
var ne = (t, e, n) => (Hs(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Je = (t, e, n) => e.has(t) ? rl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), De = (t, e, n, r) => (Hs(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), qt = (t, e, n) => (Hs(t, e, "access private method"), n);
const Ht = Symbol(), Rd = "http://www.w3.org/1999/xhtml", Md = "http://www.w3.org/2000/svg", Dd = "@attach", _u = !1;
var ys = Array.isArray, Hd = Array.prototype.indexOf, Oo = Array.from, $a = Object.defineProperty, Ar = Object.getOwnPropertyDescriptor, yu = Object.getOwnPropertyDescriptors, Pd = Object.prototype, Nd = Array.prototype, Lo = Object.getPrototypeOf, il = Object.isExtensible;
function Si(t) {
  return typeof t == "function";
}
const fe = () => {
};
function Ud(t) {
  return t();
}
function es(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Iu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const tn = 2, Ro = 4, Is = 8, wr = 16, dr = 32, ii = 64, Mo = 128, Cn = 256, ts = 512, Wt = 1024, vn = 2048, Or = 4096, Dn = 8192, ai = 16384, Es = 32768, Lr = 65536, al = 1 << 17, Fd = 1 << 18, Wi = 1 << 19, Eu = 1 << 20, no = 1 << 21, Ss = 1 << 22, Yr = 1 << 23, zn = Symbol("$state"), Su = Symbol("legacy props"), kd = Symbol(""), Ai = new class extends Error {
  constructor() {
    super(...arguments);
    gi(this, "name", "StaleReactionError");
    gi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Do(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Bd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Vd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function jd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function qd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function zd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Wd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Kd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Zd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Yd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Qd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Jd = !1;
function Au(t) {
  return t === this.v;
}
function Ho(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Cu(t) {
  return !Ho(t, this.v);
}
let Xi = !1, $d = !1;
function ef() {
  Xi = !0;
}
let st = null;
function Ui(t) {
  st = t;
}
function he(t) {
  return (
    /** @type {T} */
    xu().get(t)
  );
}
function oe(t, e) {
  return xu().set(t, e), e;
}
function xe(t, e = !1, n) {
  st = {
    p: st,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Xi && !e ? { s: null, u: null, $: [] } : null
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
      ju(r);
  }
  return t !== void 0 && (e.x = t), st = e.p, t ?? /** @type {T} */
  {};
}
function Ca() {
  return !Xi || st !== null && st.l === null;
}
function xu(t) {
  return st === null && Do(), st.c ?? (st.c = new Map(tf(st) || void 0));
}
function tf(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let qr = [];
function Tu() {
  var t = qr;
  qr = [], es(t);
}
function cr(t) {
  if (qr.length === 0 && !ha) {
    var e = qr;
    queueMicrotask(() => {
      e === qr && Tu();
    });
  }
  qr.push(t);
}
function nf() {
  for (; qr.length > 0; )
    Tu();
}
const rf = /* @__PURE__ */ new WeakMap();
function wu(t) {
  var e = Ve;
  if (e === null)
    return Be.f |= Yr, t;
  if (e.f & Es)
    Fi(t, e);
  else {
    if (!(e.f & Mo))
      throw !e.parent && t instanceof Error && Ou(t), t;
    e.b.error(t);
  }
}
function Fi(t, e) {
  for (; e !== null; ) {
    if (e.f & Mo)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Ou(t), t;
}
function Ou(t) {
  const e = rf.get(t);
  e && ($a(t, "message", {
    value: e.message
  }), $a(t, "stack", {
    value: e.stack
  }));
}
const Pa = /* @__PURE__ */ new Set();
let it = null, Wa = null, kt = null, ro = /* @__PURE__ */ new Set(), jn = [], As = null, io = !1, ha = !1;
var Ri, Mi, zr, Ea, Di, Hi, Wr, Pi, Sa, Aa, xn, ao, Xa, so;
const ps = class ps {
  constructor() {
    Je(this, xn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    gi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Je(this, Ri, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Je(this, Mi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Je(this, zr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Je(this, Ea, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Je(this, Di, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Je(this, Hi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Je(this, Wr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Je(this, Pi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Je(this, Sa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Je(this, Aa, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    gi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    jn = [], Wa = null, this.apply();
    for (const s of e)
      qt(this, xn, ao).call(this, s);
    if (ne(this, zr) === 0) {
      var n = kt;
      qt(this, xn, so).call(this);
      var r = ne(this, Hi), i = ne(this, Wr);
      De(this, Hi, []), De(this, Wr, []), De(this, Pi, []), Wa = this, it = null, kt = n, sl(r), sl(i), Wa = null, (a = ne(this, Ea)) == null || a.resolve();
    } else
      qt(this, xn, Xa).call(this, ne(this, Hi)), qt(this, xn, Xa).call(this, ne(this, Wr)), qt(this, xn, Xa).call(this, ne(this, Pi));
    kt = null;
    for (const s of ne(this, Di))
      pa(s);
    De(this, Di, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    ne(this, Ri).has(e) || ne(this, Ri).set(e, n), this.current.set(e, e.v), kt == null || kt.set(e, e.v);
  }
  activate() {
    it = this;
  }
  deactivate() {
    it = null, kt = null;
  }
  flush() {
    if (jn.length > 0) {
      if (this.activate(), Lu(), it !== null && it !== this)
        return;
    } else ne(this, zr) === 0 && qt(this, xn, so).call(this);
    this.deactivate();
    for (const e of ro)
      if (ro.delete(e), e(), it !== null)
        break;
  }
  increment() {
    De(this, zr, ne(this, zr) + 1);
  }
  decrement() {
    De(this, zr, ne(this, zr) - 1);
    for (const e of ne(this, Sa))
      $t(e, vn), ti(e);
    for (const e of ne(this, Aa))
      $t(e, Or), ti(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ne(this, Mi).add(e);
  }
  settled() {
    return (ne(this, Ea) ?? De(this, Ea, Iu())).promise;
  }
  static ensure() {
    if (it === null) {
      const e = it = new ps();
      Pa.add(it), ha || ps.enqueue(() => {
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
Ri = new WeakMap(), Mi = new WeakMap(), zr = new WeakMap(), Ea = new WeakMap(), Di = new WeakMap(), Hi = new WeakMap(), Wr = new WeakMap(), Pi = new WeakMap(), Sa = new WeakMap(), Aa = new WeakMap(), xn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
ao = function(e) {
  var c;
  e.f ^= Wt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (dr | ii)) !== 0, a = i && (r & Wt) !== 0, s = a || (r & Dn) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      i ? n.f ^= Wt : r & Ro ? ne(this, Wr).push(n) : r & Wt || (r & Ss && ((c = n.b) != null && c.is_pending()) ? ne(this, Di).push(n) : Ts(n) && (n.f & wr && ne(this, Pi).push(n), pa(n)));
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
Xa = function(e) {
  for (const n of e)
    (n.f & vn ? ne(this, Sa) : ne(this, Aa)).push(n), $t(n, Wt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
so = function() {
  var e;
  for (const n of ne(this, Mi))
    n();
  if (ne(this, Mi).clear(), Pa.size > 1) {
    ne(this, Ri).clear();
    let n = !0;
    for (const r of Pa) {
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
          Ru(s, a);
        if (jn.length > 0) {
          it = r, r.apply();
          for (const s of jn)
            qt(e = r, xn, ao).call(e, s);
          jn = [], r.deactivate();
        }
      }
    }
    it = null;
  }
  Pa.delete(this);
};
let or = ps;
function af(t) {
  var e = ha;
  ha = !0;
  try {
    for (var n; ; ) {
      if (nf(), jn.length === 0 && (it == null || it.flush(), jn.length === 0))
        return As = null, /** @type {T} */
        n;
      Lu();
    }
  } finally {
    ha = e;
  }
}
function Lu() {
  var t = wi;
  io = !0;
  try {
    var e = 0;
    for (ul(!0); jn.length > 0; ) {
      var n = or.ensure();
      if (e++ > 1e3) {
        var r, i;
        sf();
      }
      n.process(jn), Cr.clear();
    }
  } finally {
    io = !1, ul(t), As = null;
  }
}
function sf() {
  try {
    qd();
  } catch (t) {
    Fi(t, As);
  }
}
let rr = null;
function sl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ai | Dn)) && Ts(r) && (rr = [], pa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Wu(r) : r.fn = null), (rr == null ? void 0 : rr.length) > 0)) {
        Cr.clear();
        for (const i of rr)
          pa(i);
        rr = [];
      }
    }
    rr = null;
  }
}
function Ru(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & tn ? Ru(
        /** @type {Derived} */
        n,
        e
      ) : r & (Ss | wr) && Mu(n, e) && ($t(n, vn), ti(
        /** @type {Effect} */
        n
      ));
    }
}
function Mu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & tn && Mu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ti(t) {
  for (var e = As = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (io && e === Ve && n & wr)
      return;
    if (n & (ii | dr)) {
      if (!(n & Wt)) return;
      e.f ^= Wt;
    }
  }
  jn.push(e);
}
function of(t) {
  let e = 0, n = ni(0), r;
  return () => {
    Sf() && (o(n), wa(() => (e === 0 && (r = Pn(() => t(() => va(n)))), e += 1, () => {
      cr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, va(n));
      });
    })));
  };
}
var lf = Lr | Wi | Mo;
function uf(t, e, n) {
  new cf(t, e, n);
}
var Ln, Sn, wo, Bn, Xr, Vn, An, sn, Gn, br, Kr, _r, Zr, yr, bs, _s, en, df, ff, Ka, Za, oo;
class cf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Je(this, en);
    /** @type {Boundary | null} */
    gi(this, "parent");
    Je(this, Ln, !1);
    /** @type {TemplateNode} */
    Je(this, Sn);
    /** @type {TemplateNode | null} */
    Je(this, wo, null);
    /** @type {BoundaryProps} */
    Je(this, Bn);
    /** @type {((anchor: Node) => void)} */
    Je(this, Xr);
    /** @type {Effect} */
    Je(this, Vn);
    /** @type {Effect | null} */
    Je(this, An, null);
    /** @type {Effect | null} */
    Je(this, sn, null);
    /** @type {Effect | null} */
    Je(this, Gn, null);
    /** @type {DocumentFragment | null} */
    Je(this, br, null);
    Je(this, Kr, 0);
    Je(this, _r, 0);
    Je(this, Zr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Je(this, yr, null);
    Je(this, bs, () => {
      ne(this, yr) && ki(ne(this, yr), ne(this, Kr));
    });
    Je(this, _s, of(() => (De(this, yr, ni(ne(this, Kr))), () => {
      De(this, yr, null);
    })));
    De(this, Sn, e), De(this, Bn, n), De(this, Xr, r), this.parent = /** @type {Effect} */
    Ve.b, De(this, Ln, !!ne(this, Bn).pending), De(this, Vn, Mr(() => {
      Ve.b = this;
      {
        try {
          De(this, An, zt(() => r(ne(this, Sn))));
        } catch (i) {
          this.error(i);
        }
        ne(this, _r) > 0 ? qt(this, en, Za).call(this) : De(this, Ln, !1);
      }
    }, lf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ne(this, Ln) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ne(this, Bn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    qt(this, en, oo).call(this, e), De(this, Kr, ne(this, Kr) + e), ro.add(ne(this, bs));
  }
  get_effect_pending() {
    return ne(this, _s).call(this), o(
      /** @type {Source<number>} */
      ne(this, yr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = ne(this, Bn).onerror;
    let r = ne(this, Bn).failed;
    if (ne(this, Zr) || !n && !r)
      throw e;
    ne(this, An) && (Bt(ne(this, An)), De(this, An, null)), ne(this, sn) && (Bt(ne(this, sn)), De(this, sn, null)), ne(this, Gn) && (Bt(ne(this, Gn)), De(this, Gn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        Qd();
        return;
      }
      i = !0, a && Zd(), or.ensure(), De(this, Kr, 0), ne(this, Gn) !== null && xr(ne(this, Gn), () => {
        De(this, Gn, null);
      }), De(this, Ln, this.has_pending_snippet()), De(this, An, qt(this, en, Ka).call(this, () => (De(this, Zr, !1), zt(() => ne(this, Xr).call(this, ne(this, Sn)))))), ne(this, _r) > 0 ? qt(this, en, Za).call(this) : De(this, Ln, !1);
    };
    var u = Be;
    try {
      on(null), a = !0, n == null || n(e, s), a = !1;
    } catch (l) {
      Fi(l, ne(this, Vn) && ne(this, Vn).parent);
    } finally {
      on(u);
    }
    r && cr(() => {
      De(this, Gn, qt(this, en, Ka).call(this, () => {
        De(this, Zr, !0);
        try {
          return zt(() => {
            r(
              ne(this, Sn),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Fi(
            l,
            /** @type {Effect} */
            ne(this, Vn).parent
          ), null;
        } finally {
          De(this, Zr, !1);
        }
      }));
    });
  }
}
Ln = new WeakMap(), Sn = new WeakMap(), wo = new WeakMap(), Bn = new WeakMap(), Xr = new WeakMap(), Vn = new WeakMap(), An = new WeakMap(), sn = new WeakMap(), Gn = new WeakMap(), br = new WeakMap(), Kr = new WeakMap(), _r = new WeakMap(), Zr = new WeakMap(), yr = new WeakMap(), bs = new WeakMap(), _s = new WeakMap(), en = new WeakSet(), df = function() {
  try {
    De(this, An, zt(() => ne(this, Xr).call(this, ne(this, Sn))));
  } catch (e) {
    this.error(e);
  }
  De(this, Ln, !1);
}, ff = function() {
  const e = ne(this, Bn).pending;
  e && (De(this, sn, zt(() => e(ne(this, Sn)))), or.enqueue(() => {
    De(this, An, qt(this, en, Ka).call(this, () => (or.ensure(), zt(() => ne(this, Xr).call(this, ne(this, Sn)))))), ne(this, _r) > 0 ? qt(this, en, Za).call(this) : (xr(
      /** @type {Effect} */
      ne(this, sn),
      () => {
        De(this, sn, null);
      }
    ), De(this, Ln, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Ka = function(e) {
  var n = Ve, r = Be, i = st;
  Xn(ne(this, Vn)), on(ne(this, Vn)), Ui(ne(this, Vn).ctx);
  try {
    return e();
  } catch (a) {
    return wu(a), null;
  } finally {
    Xn(n), on(r), Ui(i);
  }
}, Za = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ne(this, Bn).pending
  );
  ne(this, An) !== null && (De(this, br, document.createDocumentFragment()), hf(ne(this, An), ne(this, br))), ne(this, sn) === null && De(this, sn, zt(() => e(ne(this, Sn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
oo = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && qt(n = this.parent, en, oo).call(n, e);
    return;
  }
  De(this, _r, ne(this, _r) + e), ne(this, _r) === 0 && (De(this, Ln, !1), ne(this, sn) && xr(ne(this, sn), () => {
    De(this, sn, null);
  }), ne(this, br) && (ne(this, Sn).before(ne(this, br)), De(this, br, null)), cr(() => {
    or.ensure().flush();
  }));
};
function hf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(n)
    );
    e.append(n), n = i;
  }
}
function Du(t, e, n) {
  const r = Ca() ? xa : Po;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = it, a = (
    /** @type {Effect} */
    Ve
  ), s = vf();
  Promise.all(e.map((u) => /* @__PURE__ */ mf(u))).then((u) => {
    s();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & ai || Fi(l, a);
    }
    i == null || i.deactivate(), lo();
  }).catch((u) => {
    Fi(u, a);
  });
}
function vf() {
  var t = Ve, e = Be, n = st, r = it;
  return function() {
    Xn(t), on(e), Ui(n), r == null || r.activate();
  };
}
function lo() {
  Xn(null), on(null), Ui(null);
}
// @__NO_SIDE_EFFECTS__
function xa(t) {
  var e = tn | vn, n = Be !== null && Be.f & tn ? (
    /** @type {Derived} */
    Be
  ) : null;
  return Ve === null || n !== null && n.f & Cn ? e |= Cn : Ve.f |= Wi, {
    ctx: st,
    deps: null,
    effects: null,
    equals: Au,
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
function mf(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ve
  );
  n === null && Bd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ni(
    /** @type {V} */
    Ht
  ), s = !Be, u = /* @__PURE__ */ new Map();
  return xf(() => {
    var f;
    var l = Iu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(lo);
    } catch (m) {
      l.reject(m), lo();
    }
    var c = (
      /** @type {Batch} */
      it
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Ai), u.delete(c), u.set(c, l)));
    const h = (m, v = void 0) => {
      if (d || c.activate(), v)
        v !== Ai && (a.f |= Yr, ki(a, v));
      else {
        a.f & Yr && (a.f ^= Yr), ki(a, m);
        for (const [p, b] of u) {
          if (u.delete(p), p === c) break;
          b.reject(Ai);
        }
      }
      s && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (m) => h(null, m || "unknown"));
  }), Cs(() => {
    for (const l of u.values())
      l.reject(Ai);
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
  const e = /* @__PURE__ */ xa(t);
  return Zu(e), e;
}
// @__NO_SIDE_EFFECTS__
function Po(t) {
  const e = /* @__PURE__ */ xa(t);
  return e.equals = Cu, e;
}
function Hu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Bt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function gf(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & tn))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function No(t) {
  var e, n = Ve;
  Xn(gf(t));
  try {
    Hu(t), e = $u(t);
  } finally {
    Xn(n);
  }
  return e;
}
function Pu(t) {
  var e = No(t);
  if (t.equals(e) || (t.v = e, t.wv = Qu()), !oi)
    if (kt !== null)
      kt.set(t, t.v);
    else {
      var n = (Er || t.f & Cn) && t.deps !== null ? Or : Wt;
      $t(t, n);
    }
}
const Cr = /* @__PURE__ */ new Map();
function ni(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Au,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ie(t, e) {
  const n = ni(t);
  return Zu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Nu(t, e = !1, n = !0) {
  var i;
  const r = ni(t);
  return e || (r.equals = Cu), Xi && n && st !== null && st.l !== null && ((i = st.l).s ?? (i.s = [])).push(r), r;
}
function K(t, e, n = !1) {
  Be !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Rn || Be.f & al) && Ca() && Be.f & (tn | wr | Ss | al) && !(Jt != null && Jt.includes(t)) && Kd();
  let r = n ? Ce(e) : e;
  return ki(t, r);
}
function ki(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    oi ? Cr.set(t, e) : Cr.set(t, n), t.v = e;
    var r = or.ensure();
    r.capture(t, n), t.f & tn && (t.f & vn && No(
      /** @type {Derived} */
      t
    ), $t(t, t.f & Cn ? Or : Wt)), t.wv = Qu(), Uu(t, vn), Ca() && Ve !== null && Ve.f & Wt && !(Ve.f & (dr | ii)) && (En === null ? Of([t]) : En.push(t));
  }
  return e;
}
function va(t) {
  K(t, t.v + 1);
}
function Uu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ca(), i = n.length, a = 0; a < i; a++) {
      var s = n[a], u = s.f;
      if (!(!r && s === Ve)) {
        var l = (u & vn) === 0;
        l && $t(s, e), u & tn ? Uu(
          /** @type {Derived} */
          s,
          Or
        ) : l && (u & wr && rr !== null && rr.push(
          /** @type {Effect} */
          s
        ), ti(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ce(t) {
  if (typeof t != "object" || t === null || zn in t)
    return t;
  const e = Lo(t);
  if (e !== Pd && e !== Nd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ys(t), i = /* @__PURE__ */ Ie(0), a = Qr, s = (u) => {
    if (Qr === a)
      return u();
    var l = Be, c = Qr;
    on(null), dl(a);
    var d = u();
    return on(l), dl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ie(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Wd();
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
            n.set(l, d), va(i);
          }
        } else
          K(c, Ht), va(i);
        return !0;
      },
      get(u, l, c) {
        var m;
        if (l === zn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (m = Ar(u, l)) != null && m.writable) && (d = s(() => {
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
        if (c !== void 0 || Ve !== null && (!d || (f = Ar(u, l)) != null && f.writable)) {
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
          (!f || (A = Ar(u, l)) != null && A.writable) && (h = s(() => /* @__PURE__ */ Ie(void 0)), K(h, Ce(c)), n.set(l, h));
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
          va(i);
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
        Xd();
      }
    }
  );
}
function ol(t) {
  try {
    if (t !== null && typeof t == "object" && zn in t)
      return t[zn];
  } catch {
  }
  return t;
}
function pf(t, e) {
  return Object.is(ol(t), ol(e));
}
var ns, Uo, Fu, ku, Bu;
function bf() {
  if (ns === void 0) {
    ns = window, Uo = document, Fu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    ku = Ar(e, "firstChild").get, Bu = Ar(e, "nextSibling").get, il(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), il(n) && (n.__t = void 0);
  }
}
function Rr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Bi(t) {
  return ku.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ta(t) {
  return Bu.call(t);
}
function ce(t, e) {
  return /* @__PURE__ */ Bi(t);
}
function z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Bi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ta(n) : n;
  }
}
function me(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ta(r);
  return r;
}
function _f(t) {
  t.textContent = "";
}
function Fo() {
  return !1;
}
function yf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, cr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let ll = !1;
function If() {
  ll || (ll = !0, document.addEventListener(
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
function Ki(t) {
  var e = Be, n = Ve;
  on(null), Xn(null);
  try {
    return t();
  } finally {
    on(e), Xn(n);
  }
}
function Vu(t, e, n, r = n) {
  t.addEventListener(e, () => Ki(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), If();
}
function Gu(t) {
  Ve === null && Be === null && jd(), Be !== null && Be.f & Cn && Ve === null && Gd(), oi && Vd();
}
function Ef(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Kn(t, e, n, r = !0) {
  var i = Ve;
  i !== null && i.f & Dn && (t |= Dn);
  var a = {
    ctx: st,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | vn,
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
      pa(a), a.f |= Es;
    } catch (l) {
      throw Bt(a), l;
    }
  else e !== null && ti(a);
  if (r) {
    var s = a;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Wi) && (s = s.first), s !== null && (s.parent = i, i !== null && Ef(s, i), Be !== null && Be.f & tn && !(t & ii))) {
      var u = (
        /** @type {Derived} */
        Be
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function Sf() {
  return Be !== null && !Rn;
}
function Cs(t) {
  const e = Kn(Is, null, !1);
  return $t(e, Wt), e.teardown = t, e;
}
function we(t) {
  Gu();
  var e = (
    /** @type {Effect} */
    Ve.f
  ), n = !Be && (e & dr) !== 0 && (e & Es) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      st
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return ju(t);
}
function ju(t) {
  return Kn(Ro | Eu, t, !1);
}
function Af(t) {
  return Gu(), Kn(Is | Eu, t, !0);
}
function Cf(t) {
  or.ensure();
  const e = Kn(ii | Wi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? xr(e, () => {
      Bt(e), r(void 0);
    }) : (Bt(e), r(void 0));
  });
}
function si(t) {
  return Kn(Ro, t, !1);
}
function xf(t) {
  return Kn(Ss | Wi, t, !0);
}
function wa(t, e = 0) {
  return Kn(Is | e, t, !0);
}
function Le(t, e = [], n = []) {
  Du(e, n, (r) => {
    Kn(Is, () => t(...r.map(o)), !0);
  });
}
function Mr(t, e = 0) {
  var n = Kn(wr | e, t, !0);
  return n;
}
function zt(t, e = !0) {
  return Kn(dr | Wi, t, !0, e);
}
function qu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = oi, r = Be;
    cl(!0), on(null);
    try {
      e.call(null);
    } finally {
      cl(n), on(r);
    }
  }
}
function zu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ki(() => {
      i.abort(Ai);
    });
    var r = n.next;
    n.f & ii ? n.parent = null : Bt(n, e), n = r;
  }
}
function Tf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & dr || Bt(e), e = n;
  }
}
function Bt(t, e = !0) {
  var n = !1;
  (e || t.f & Fd) && t.nodes_start !== null && t.nodes_end !== null && (wf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), zu(t, e && !n), rs(t, 0), $t(t, ai);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  qu(t);
  var i = t.parent;
  i !== null && i.first !== null && Wu(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function wf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ta(t)
    );
    t.remove(), t = n;
  }
}
function Wu(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function xr(t, e) {
  var n = [];
  ko(t, n, !0), Xu(n, () => {
    Bt(t), e && e();
  });
}
function Xu(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function ko(t, e, n) {
  if (!(t.f & Dn)) {
    if (t.f ^= Dn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Lr) !== 0 || (r.f & dr) !== 0;
      ko(r, e, a ? n : !1), r = i;
    }
  }
}
function xs(t) {
  Ku(t, !0);
}
function Ku(t, e) {
  if (t.f & Dn) {
    t.f ^= Dn, t.f & Wt || ($t(t, vn), ti(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Lr) !== 0 || (n.f & dr) !== 0;
      Ku(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let wi = !1;
function ul(t) {
  wi = t;
}
let oi = !1;
function cl(t) {
  oi = t;
}
let Be = null, Rn = !1;
function on(t) {
  Be = t;
}
let Ve = null;
function Xn(t) {
  Ve = t;
}
let Jt = null;
function Zu(t) {
  Be !== null && (Jt === null ? Jt = [t] : Jt.push(t));
}
let Yt = null, fn = 0, En = null;
function Of(t) {
  En = t;
}
let Yu = 1, ga = 0, Qr = ga;
function dl(t) {
  Qr = t;
}
let Er = !1;
function Qu() {
  return ++Yu;
}
function Ts(t) {
  var h;
  var e = t.f;
  if (e & vn)
    return !0;
  if (e & Or) {
    var n = t.deps, r = (e & Cn) !== 0;
    if (n !== null) {
      var i, a, s = (e & ts) !== 0, u = r && Ve !== null && !Er, l = n.length;
      if ((s || u) && (Ve === null || !(Ve.f & ai))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= ts), u && d !== null && !(d.f & Cn) && (c.f ^= Cn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], Ts(
          /** @type {Derived} */
          a
        ) && Pu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ve !== null && !Er) && $t(t, Wt);
  }
  return !1;
}
function Ju(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Jt != null && Jt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & tn ? Ju(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? $t(a, vn) : a.f & Wt && $t(a, Or), ti(
        /** @type {Effect} */
        a
      ));
    }
}
function $u(t) {
  var p;
  var e = Yt, n = fn, r = En, i = Be, a = Er, s = Jt, u = st, l = Rn, c = Qr, d = t.f;
  Yt = /** @type {null | Value[]} */
  null, fn = 0, En = null, Er = (d & Cn) !== 0 && (Rn || !wi || Be === null), Be = d & (dr | ii) ? null : t, Jt = null, Ui(t.ctx), Rn = !1, Qr = ++ga, t.ac !== null && (Ki(() => {
    t.ac.abort(Ai);
  }), t.ac = null);
  try {
    t.f |= no;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), m = t.deps;
    if (Yt !== null) {
      var v;
      if (rs(t, fn), m !== null && fn > 0)
        for (m.length = fn + Yt.length, v = 0; v < Yt.length; v++)
          m[fn + v] = Yt[v];
      else
        t.deps = m = Yt;
      if (!Er || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & tn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = fn; v < m.length; v++)
          ((p = m[v]).reactions ?? (p.reactions = [])).push(t);
    } else m !== null && fn < m.length && (rs(t, fn), m.length = fn);
    if (Ca() && En !== null && !Rn && m !== null && !(t.f & (tn | Or | vn)))
      for (v = 0; v < /** @type {Source[]} */
      En.length; v++)
        Ju(
          En[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ga++, En !== null && (r === null ? r = En : r.push(.../** @type {Source[]} */
    En))), t.f & Yr && (t.f ^= Yr), f;
  } catch (b) {
    return wu(b);
  } finally {
    t.f ^= no, Yt = e, fn = n, En = r, Be = i, Er = a, Jt = s, Ui(u), Rn = l, Qr = c;
  }
}
function Lf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Hd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & tn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Yt === null || !Yt.includes(e)) && ($t(e, Or), e.f & (Cn | ts) || (e.f ^= ts), Hu(
    /** @type {Derived} **/
    e
  ), rs(
    /** @type {Derived} **/
    e,
    0
  ));
}
function rs(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Lf(t, n[r]);
}
function pa(t) {
  var e = t.f;
  if (!(e & ai)) {
    $t(t, Wt);
    var n = Ve, r = wi;
    Ve = t, wi = !0;
    try {
      e & wr ? Tf(t) : zu(t), qu(t);
      var i = $u(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Yu;
      var a;
      _u && $d && t.f & vn && t.deps;
    } finally {
      wi = r, Ve = n;
    }
  }
}
async function ec() {
  await Promise.resolve(), af();
}
function o(t) {
  var e = t.f, n = (e & tn) !== 0;
  if (Be !== null && !Rn) {
    var r = Ve !== null && (Ve.f & ai) !== 0;
    if (!r && !(Jt != null && Jt.includes(t))) {
      var i = Be.deps;
      if (Be.f & no)
        t.rv < ga && (t.rv = ga, Yt === null && i !== null && i[fn] === t ? fn++ : Yt === null ? Yt = [t] : (!Er || !Yt.includes(t)) && Yt.push(t));
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
  if (oi) {
    if (Cr.has(t))
      return Cr.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var l = s.v;
      return (!(s.f & Wt) && s.reactions !== null || tc(s)) && (l = No(s)), Cr.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, kt != null && kt.has(s))
      return kt.get(s);
    Ts(s) && Pu(s);
  }
  if (kt != null && kt.has(t))
    return kt.get(t);
  if (t.f & Yr)
    throw t.v;
  return t.v;
}
function tc(t) {
  if (t.v === Ht) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Cr.has(e) || e.f & tn && tc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Pn(t) {
  var e = Rn;
  try {
    return Rn = !0, t();
  } finally {
    Rn = e;
  }
}
const Rf = -7169;
function $t(t, e) {
  t.f = t.f & Rf | e;
}
function nc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (zn in t)
      uo(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && zn in n && uo(n);
      }
  }
}
function uo(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        uo(t[r], e);
      } catch {
      }
    const n = Lo(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = yu(n);
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
const rc = /* @__PURE__ */ new Set(), co = /* @__PURE__ */ new Set();
function Bo(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || da.call(e, a), !a.cancelBubble)
      return Ki(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? cr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Mf(t, e, n, r = {}) {
  var i = Bo(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function lr(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = Bo(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Cs(() => {
    e.removeEventListener(t, s, a);
  });
}
function wn(t) {
  for (var e = 0; e < t.length; e++)
    rc.add(t[e]);
  for (var n of co)
    n(t);
}
let fl = null;
function da(t) {
  var E;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((E = t.composedPath) == null ? void 0 : E.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  fl = t;
  var s = 0, u = fl === t && t.__root;
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
    $a(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Be, h = Ve;
    on(null), Xn(null);
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
            if (ys(p)) {
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
      t.__root = e, delete t.currentTarget, on(d), Xn(h);
    }
  }
}
function ic(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Vi(t, e) {
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
    i === void 0 && (i = ic(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Bi(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Fu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Bi(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Vi(u, l);
    } else
      Vi(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Df(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        ic(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Bi(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Bi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Vi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ct(t, e) {
  return /* @__PURE__ */ Df(t, e, "svg");
}
function Et(t = "") {
  {
    var e = Rr(t + "");
    return Vi(e, e), e;
  }
}
function $() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Rr();
  return t.append(e, n), Vi(e, n), t;
}
function w(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Hf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Pf = [
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
function Nf(t) {
  return Pf.includes(t);
}
const Uf = {
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
function Ff(t) {
  return t = t.toLowerCase(), Uf[t] ?? t;
}
const kf = ["touchstart", "touchmove"];
function Bf(t) {
  return kf.includes(t);
}
let is = !0;
function hl(t) {
  is = t;
}
function Ze(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Vf(t, e) {
  return Gf(t, e);
}
const pi = /* @__PURE__ */ new Map();
function Gf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0 }) {
  bf();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var m = h[f];
      if (!u.has(m)) {
        u.add(m);
        var v = Bf(m);
        e.addEventListener(m, da, { passive: v });
        var p = pi.get(m);
        p === void 0 ? (document.addEventListener(m, da, { passive: v }), pi.set(m, 1)) : pi.set(m, p + 1);
      }
    }
  };
  l(Oo(rc)), co.add(l);
  var c = void 0, d = Cf(() => {
    var h = n ?? e.appendChild(Rr());
    return uf(
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
        i && (r.$$events = i), is = s, c = t(f, r) || {}, is = !0, a && Te();
      }
    ), () => {
      var v;
      for (var f of u) {
        e.removeEventListener(f, da);
        var m = (
          /** @type {number} */
          pi.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, da), pi.delete(f)) : pi.set(f, m);
      }
      co.delete(l), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return jf.set(c, d), c;
}
let jf = /* @__PURE__ */ new WeakMap();
function Se(t, e, ...n) {
  var r = t, i = fe, a;
  Mr(() => {
    i !== (i = e()) && (a && (Bt(a), a = null), a = zt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Lr);
}
function ot(t) {
  st === null && Do(), Xi && st.l !== null ? qf(st).m.push(t) : we(() => {
    const e = Pn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function gn(t) {
  st === null && Do(), ot(() => () => Pn(t));
}
function qf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function re(t, e, n = !1) {
  var r = t, i = null, a = null, s = Ht, u = n ? Lr : 0, l = !1;
  const c = (m, v = !0) => {
    l = !0, f(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? i : a, v = s ? a : i;
    m && xs(m), v && xr(v, () => {
      s ? a = null : i = null;
    });
  }
  const f = (m, v) => {
    if (s !== (s = m)) {
      var p = Fo(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Rr())), s ? i ?? (i = v && zt(() => v(b))) : a ?? (a = v && zt(() => v(b))), p) {
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
let Jr = null;
function vl(t) {
  Jr = t;
}
function Ci(t, e) {
  return e;
}
function zf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, s = 0; s < a; s++)
    ko(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    _f(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), kn(t, e[0].prev, e[a - 1].next);
  }
  Xu(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), kn(t, d.prev, d.next)), Bt(d.e, !u);
    }
  });
}
function ir(t, e, n, r, i, a = null) {
  var s = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    s = c.appendChild(Rr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Po(() => {
    var I = n();
    return ys(I) ? I : I == null ? [] : Oo(I);
  }), v, p;
  function b() {
    Wf(
      p,
      v,
      u,
      f,
      s,
      i,
      e,
      r,
      n
    ), a !== null && (v.length === 0 ? d ? xs(d) : d = zt(() => a(s)) : d !== null && xr(d, () => {
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
      if (Fo()) {
        var y = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          it
        );
        for (A = 0; A < I; A += 1) {
          _ = v[A], S = r(_, A);
          var x = u.items.get(S) ?? f.get(S);
          x ? e & 3 && ac(x, _, A, e) : (E = sc(
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
function Wf(t, e, n, r, i, a, s, u, l) {
  var ee, P, L, O;
  var c = (s & 8) !== 0, d = (s & 3) !== 0, h = e.length, f = n.items, m = n.first, v = m, p, b = null, I, E = [], A = [], _, S, y, T;
  if (c)
    for (T = 0; T < h; T += 1)
      _ = e[T], S = u(_, T), y = f.get(S), y !== void 0 && ((ee = y.a) == null || ee.measure(), (I ?? (I = /* @__PURE__ */ new Set())).add(y));
  for (T = 0; T < h; T += 1) {
    if (_ = e[T], S = u(_, T), y = f.get(S), y === void 0) {
      var x = r.get(S);
      if (x !== void 0) {
        r.delete(S), f.set(S, x);
        var C = b ? b.next : v;
        kn(n, b, x), kn(n, x, C), Ps(x, C, i), b = x;
      } else {
        var N = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        b = sc(
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
    if (d && ac(y, _, T, s), y.e.f & Dn && (xs(y.e), c && ((P = y.a) == null || P.unfix(), (I ?? (I = /* @__PURE__ */ new Set())).delete(y))), y !== v) {
      if (p !== void 0 && p.has(y)) {
        if (E.length < A.length) {
          var W = A[0], k;
          b = W.prev;
          var F = E[0], ue = E[E.length - 1];
          for (k = 0; k < E.length; k += 1)
            Ps(E[k], W, i);
          for (k = 0; k < A.length; k += 1)
            p.delete(A[k]);
          kn(n, F.prev, ue.next), kn(n, b, F), kn(n, ue, W), v = W, b = ue, T -= 1, E = [], A = [];
        } else
          p.delete(y), Ps(y, v, i), kn(n, y.prev, y.next), kn(n, y, b === null ? n.first : b.next), kn(n, b, y), b = y;
        continue;
      }
      for (E = [], A = []; v !== null && v.k !== S; )
        v.e.f & Dn || (p ?? (p = /* @__PURE__ */ new Set())).add(v), A.push(v), v = v.next;
      if (v === null)
        continue;
      y = v;
    }
    E.push(y), b = y, v = y.next;
  }
  if (v !== null || p !== void 0) {
    for (var G = p === void 0 ? [] : Oo(p); v !== null; )
      v.e.f & Dn || G.push(v), v = v.next;
    var B = G.length;
    if (B > 0) {
      var U = s & 4 && h === 0 ? i : null;
      if (c) {
        for (T = 0; T < B; T += 1)
          (L = G[T].a) == null || L.measure();
        for (T = 0; T < B; T += 1)
          (O = G[T].a) == null || O.fix();
      }
      zf(n, G, U);
    }
  }
  c && cr(() => {
    var ie;
    if (I !== void 0)
      for (y of I)
        (ie = y.a) == null || ie.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var X of r.values())
    Bt(X.e);
  r.clear();
}
function ac(t, e, n, r) {
  r & 1 && ki(t.v, e), r & 2 ? ki(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function sc(t, e, n, r, i, a, s, u, l, c, d) {
  var h = Jr, f = (l & 1) !== 0, m = (l & 16) === 0, v = f ? m ? /* @__PURE__ */ Nu(i, !1, !1) : ni(i) : i, p = l & 2 ? ni(s) : s, b = {
    i: p,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  Jr = b;
  try {
    if (t === null) {
      var I = document.createDocumentFragment();
      I.append(t = Rr());
    }
    return b.e = zt(() => u(
      /** @type {Node} */
      t,
      v,
      p,
      c
    ), Jd), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    Jr = h;
  }
}
function Ps(t, e, n) {
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
      /* @__PURE__ */ Ta(a)
    );
    i.before(a), a = s;
  }
}
function kn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function fr(t, e, n) {
  var r = t, i, a, s = null, u = null;
  function l() {
    a && (xr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Mr(() => {
    if (i !== (i = e())) {
      var c = Fo();
      if (i) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = Rr()), a && it.skipped_effects.add(a)), u = zt(() => n(d, i));
      }
      c ? it.add_callback(l) : l();
    }
  }, Lr);
}
function ml(t, e, n, r, i, a) {
  var s, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d, h = Jr;
  Mr(() => {
    const f = e() || null;
    var m = f === "svg" ? Md : null;
    if (f !== s) {
      var v = Jr;
      vl(h), d && (f === null ? xr(d, () => {
        d = null, u = null;
      }) : f === u ? xs(d) : (Bt(d), hl(!1))), f && f !== u && (d = zt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), Vi(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Rr())
          );
          r(l, p);
        }
        Ve.nodes_end = l, c.before(l);
      })), s = f, s && (u = s), hl(!0), vl(v);
    }
  }, Lr);
}
function Fe(t, e, n) {
  si(() => {
    var r = Pn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      wa(() => {
        var s = n();
        nc(s), i && Ho(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Xf(t, e) {
  var n = void 0, r;
  Mr(() => {
    n !== (n = e()) && (r && (Bt(r), r = null), n && (r = zt(() => {
      si(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function oc(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = oc(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Kf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = oc(t)) && (r && (r += " "), r += e);
  return r;
}
function lc(t) {
  return typeof t == "object" ? Kf(t) : t ?? "";
}
const gl = [...` 	
\r\f \v\uFEFF`];
function Zf(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || gl.includes(r[s - 1])) && (u === r.length || gl.includes(r[u])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1) : s = u;
        }
  }
  return r === "" ? null : r;
}
function pl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Ns(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Yf(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(Ns)), i && l.push(...Object.keys(i).map(Ns));
      var c = 0, d = -1;
      const p = t.length;
      for (var h = 0; h < p; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var m = Ns(t.substring(c, d).trim());
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
    return r && (n += pl(r)), i && (n += pl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Vo(t, e, n, r, i, a) {
  var s = t.__className;
  if (s !== n || s === void 0) {
    var u = Zf(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function Us(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function vt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = Yf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Us(t, n == null ? void 0 : n[0], r[0]), Us(t, n == null ? void 0 : n[1], r[1], "important")) : Us(t, n, r));
  return r;
}
function fo(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ys(e))
      return Yd();
    for (var r of t.options)
      r.selected = e.includes(bl(r));
    return;
  }
  for (r of t.options) {
    var i = bl(r);
    if (pf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Qf(t) {
  var e = new MutationObserver(() => {
    fo(t, t.__value);
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
  }), Cs(() => {
    e.disconnect();
  });
}
function bl(t) {
  return "__value" in t ? t.__value : t.value;
}
const ra = Symbol("class"), ia = Symbol("style"), uc = Symbol("is custom element"), cc = Symbol("is html");
function _l(t, e) {
  var n = Go(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Jf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function ur(t, e, n, r) {
  var i = Go(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[kd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && dc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function $f(t, e, n, r, i = !1, a = !1) {
  var s = Go(t), u = s[uc], l = !s[cc], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = lc(n.class) : n[ra] && (n.class = null), n[ia] && (n.style ?? (n.style = null));
  var f = dc(t);
  for (const A in n) {
    let _ = n[A];
    if (d && A === "value" && _ == null) {
      t.value = t.__value = "", c[A] = _;
      continue;
    }
    if (A === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Vo(t, m, _, r, e == null ? void 0 : e[ra], n[ra]), c[A] = _, c[ra] = n[ra];
      continue;
    }
    if (A === "style") {
      vt(t, _, e == null ? void 0 : e[ia], n[ia]), c[A] = _, c[ia] = n[ia];
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
          var b = Nf(T);
          if (Hf(T) && (T = T.slice(0, -7), S.capture = !0), !b && v) {
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
              c[y] = Bo(T, t, x, S);
            }
          else b && (t[`__${T}`] = void 0);
        } else if (A === "style")
          ur(t, A, _);
        else if (A === "autofocus")
          yf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!u && (A === "__value" || A === "value" && _ != null))
          t.value = t.__value = _;
        else if (A === "selected" && d)
          Jf(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var I = A;
          l || (I = Ff(I));
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
  Du(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Mr(() => {
      var m = e(...u.map(o)), v = $f(
        t,
        l,
        m,
        i,
        a,
        s
      );
      h && d && "value" in m && fo(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(c))
        m[b] || Bt(c[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var p = m[b];
        b.description === Dd && (!l || p !== l[b]) && (c[b] && Bt(c[b]), c[b] = zt(() => Xf(t, () => p))), v[b] = p;
      }
      l = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      si(() => {
        fo(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Qf(f);
      });
    }
    h = !0;
  });
}
function Go(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [uc]: t.nodeName.includes("-"),
      [cc]: t.namespaceURI === Rd
    })
  );
}
var yl = /* @__PURE__ */ new Map();
function dc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = yl.get(e);
  if (n) return n;
  yl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = yu(i);
    for (var s in r)
      r[s].set && n.push(s);
    i = Lo(i);
  }
  return n;
}
const eh = () => performance.now(), ar = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => eh(),
  tasks: /* @__PURE__ */ new Set()
};
function fc() {
  const t = ar.now();
  ar.tasks.forEach((e) => {
    e.c(t) || (ar.tasks.delete(e), e.f());
  }), ar.tasks.size !== 0 && ar.tick(fc);
}
function th(t) {
  let e;
  return ar.tasks.size === 0 && ar.tick(fc), {
    promise: new Promise((n) => {
      ar.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      ar.tasks.delete(e);
    }
  };
}
function Na(t, e) {
  Ki(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function nh(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Il(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = nh(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const rh = (t) => t;
function ih(t, e, n) {
  var r = (
    /** @type {EachItem} */
    Jr
  ), i, a, s, u = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        s = ss(this.element, l, void 0, 1, () => {
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
function as(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, u = (t & 4) !== 0, l = s ? "both" : i ? "in" : "out", c, d = e.inert, h = e.style.overflow, f, m;
  function v() {
    return Ki(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
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
      a || f == null || f.abort(), Na(e, "introstart"), f = ss(e, v(), m, 1, () => {
        Na(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = h;
      });
    },
    out(A) {
      if (!a) {
        A == null || A(), c = void 0;
        return;
      }
      e.inert = !0, Na(e, "outrostart"), m = ss(e, v(), f, 0, () => {
        Na(e, "outroend"), A == null || A();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    Ve
  );
  if ((b.transitions ?? (b.transitions = [])).push(p), i && is) {
    var I = u;
    if (!I) {
      for (var E = (
        /** @type {Effect | null} */
        b.parent
      ); E && E.f & Lr; )
        for (; (E = E.parent) && !(E.f & wr); )
          ;
      I = !E || (E.f & Es) !== 0;
    }
    I && si(() => {
      Pn(() => p.in());
    });
  }
}
function ss(t, e, n, r, i) {
  var a = r === 1;
  if (Si(e)) {
    var s, u = !1;
    return cr(() => {
      if (!u) {
        var b = e({ direction: a ? "in" : "out" });
        s = ss(t, b, n, r, i);
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
  const { delay: l = 0, css: c, tick: d, easing: h = rh } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var m = Il(c(0, 1));
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
          var T = b + I * h(y / S), x = Il(c(T, 1 - T));
          A.push(x), _ || (_ = x.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), v = () => {
        var C = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + I * h(C / E);
      }, d && th(() => {
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
function ba(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Vu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Fs(t) ? ks(a) : a, n(a), it !== null && r.add(it), await ec(), a !== (a = e())) {
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
  Pn(e) == null && t.value && (n(Fs(t) ? ks(t.value) : t.value), it !== null && r.add(it)), wa(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Wa ?? it
      );
      if (r.has(a))
        return;
    }
    Fs(t) && i === ks(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function ah(t, e, n = e) {
  Vu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Pn(e) == null && n(t.checked), wa(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Fs(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function ks(t) {
  return t === "" ? null : +t;
}
function El(t, e) {
  return t === e || (t == null ? void 0 : t[zn]) === e;
}
function Oe(t = {}, e, n, r) {
  return si(() => {
    var i, a;
    return wa(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Pn(() => {
        t !== n(...a) && (e(t, ...a), i && El(n(...i), t) && e(null, ...i));
      });
    }), () => {
      cr(() => {
        a && El(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function sh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    st
  ), n = e.l.u;
  if (!n) return;
  let r = () => nc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ xa(() => {
      let u = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], u = !0);
      return u && i++, i;
    });
    r = () => o(s);
  }
  n.b.length && Af(() => {
    Sl(e, r), es(n.b);
  }), we(() => {
    const i = Pn(() => n.m.map(Ud));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && we(() => {
    Sl(e, r), es(n.a);
  });
}
function Sl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) o(n);
  e();
}
function jo(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), fe;
  const r = Pn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const bi = [];
function oh(t, e) {
  return {
    subscribe: Nt(t, e).subscribe
  };
}
function Nt(t, e = fe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Ho(t, u) && (t = u, n)) {
      const l = !bi.length;
      for (const c of r)
        c[1](), bi.push(c, t);
      if (l) {
        for (let c = 0; c < bi.length; c += 2)
          bi[c][0](bi[c + 1]);
        bi.length = 0;
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
function Zi(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return oh(n, (s, u) => {
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
      (v, p) => jo(
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
      es(m), h(), l = !1;
    };
  });
}
function hc(t) {
  let e;
  return jo(t, (n) => e = n)(), e;
}
let Ua = !1, ho = Symbol();
function Hn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Nu(void 0),
    unsubscribe: fe
  });
  if (r.store !== t && !(ho in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = fe;
    else {
      var i = !0;
      r.unsubscribe = jo(t, (a) => {
        i ? r.source.v = a : K(r.source, a);
      }), i = !1;
    }
  return t && ho in n ? hc(t) : o(r.source);
}
function Mn(t, e) {
  return t.set(e), e;
}
function Zn() {
  const t = {};
  function e() {
    Cs(() => {
      for (var n in t)
        t[n].unsubscribe();
      $a(t, ho, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function lh(t) {
  var e = Ua;
  try {
    return Ua = !1, [t(), Ua];
  } finally {
    Ua = e;
  }
}
const uh = {
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
    uh
  );
}
const ch = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Si(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      Si(i) && (i = i());
      const a = Ar(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Si(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Ar(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === zn || e === Su) return !1;
    for (let n of t.props)
      if (Si(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Si(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function $e(...t) {
  return new Proxy({ props: t }, ch);
}
function g(t, e, n, r) {
  var A;
  var i = !Xi || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = s ? Pn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = zn in t || Su in t;
    d = ((A = Ar(t, e)) == null ? void 0 : A.set) ?? (h && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = lh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && zd(), d(f)));
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
  var b = !1, I = (n & 1 ? xa : Po)(() => (b = !1, v()));
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
      return oi && b || E.f & ai ? I.v : o(I);
    }
  );
}
const dh = "5";
var bu;
typeof window < "u" && ((bu = window.__svelte ?? (window.__svelte = {})).v ?? (bu.v = /* @__PURE__ */ new Set())).add(dh);
function fh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var hh = function(e) {
  return vh(e) && !mh(e);
};
function vh(t) {
  return !!t && typeof t == "object";
}
function mh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || bh(t);
}
var gh = typeof Symbol == "function" && Symbol.for, ph = gh ? Symbol.for("react.element") : 60103;
function bh(t) {
  return t.$$typeof === ph;
}
function _h(t) {
  return Array.isArray(t) ? [] : {};
}
function _a(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Gi(_h(t), t, e) : t;
}
function yh(t, e, n) {
  return t.concat(e).map(function(r) {
    return _a(r, n);
  });
}
function Ih(t, e) {
  if (!e.customMerge)
    return Gi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Gi;
}
function Eh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Al(t) {
  return Object.keys(t).concat(Eh(t));
}
function vc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Sh(t, e) {
  return vc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function Ah(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Al(t).forEach(function(i) {
    r[i] = _a(t[i], n);
  }), Al(e).forEach(function(i) {
    Sh(t, i) || (vc(t, i) && n.isMergeableObject(e[i]) ? r[i] = Ih(i, n)(t[i], e[i], n) : r[i] = _a(e[i], n));
  }), r;
}
function Gi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || yh, n.isMergeableObject = n.isMergeableObject || hh, n.cloneUnlessOtherwiseSpecified = _a;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Ah(t, e, n) : _a(e, n);
}
Gi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Gi(r, i, n);
  }, {});
};
var Ch = Gi, xh = Ch;
const Th = /* @__PURE__ */ fh(xh);
var vo = function(t, e) {
  return vo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, vo(t, e);
};
function nt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  vo(t, e);
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
function wh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function mc(t, e, n, r) {
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
function qo(t, e) {
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
function Tr(t, e) {
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
function Wn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Oi(t) {
  return this instanceof Oi ? (this.v = t, this) : new Oi(t);
}
function Oh(t, e, n) {
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
    m.value instanceof Oi ? Promise.resolve(m.value.v).then(d, h) : f(a[0][2], m);
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
function Lh(t) {
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
function Bs(t, e) {
  var n = e && e.cache ? e.cache : Uh, r = e && e.serializer ? e.serializer : Ph, i = e && e.strategy ? e.strategy : Dh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Rh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Mh(t, e, n, r) {
  var i = Rh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function gc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function pc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Dh(t, e) {
  var n = t.length === 1 ? Mh : gc;
  return pc(t, this, n, e.cache.create(), e.serializer);
}
function Hh(t, e) {
  return pc(t, this, gc, e.cache.create(), e.serializer);
}
var Ph = function() {
  return JSON.stringify(arguments);
}, Nh = (
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
), Uh = {
  create: function() {
    return new Nh();
  }
}, Vs = {
  variadic: Hh
}, ze;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(ze || (ze = {}));
var ht;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ht || (ht = {}));
var ji;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(ji || (ji = {}));
function Cl(t) {
  return t.type === ht.literal;
}
function Fh(t) {
  return t.type === ht.argument;
}
function bc(t) {
  return t.type === ht.number;
}
function _c(t) {
  return t.type === ht.date;
}
function yc(t) {
  return t.type === ht.time;
}
function Ic(t) {
  return t.type === ht.select;
}
function Ec(t) {
  return t.type === ht.plural;
}
function kh(t) {
  return t.type === ht.pound;
}
function Sc(t) {
  return t.type === ht.tag;
}
function Ac(t) {
  return !!(t && typeof t == "object" && t.type === ji.number);
}
function mo(t) {
  return !!(t && typeof t == "object" && t.type === ji.dateTime);
}
var Cc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Bh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Vh(t) {
  var e = {};
  return t.replace(Bh, function(n) {
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
var Gh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function jh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Gh).filter(function(f) {
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
function qh(t) {
  return t.replace(/^(.*?)-/, "");
}
var xl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, xc = /^(@+)?(\+|#+)?[rs]?$/g, zh = /(\*)(0+)|(#+)(0+)|(0+)/g, Tc = /^(0+)$/;
function Tl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(xc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function wc(t) {
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
function Wh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Tc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function wl(t) {
  var e = {}, n = wc(t);
  return n || e;
}
function Xh(t) {
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
        e.style = "unit", e.unit = qh(i.options[0]);
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
          return pe(pe({}, l), wl(c));
        }, {}));
        continue;
      case "engineering":
        e = pe(pe(pe({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return pe(pe({}, l), wl(c));
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
        i.options[0].replace(zh, function(l, c, d, h, f, m) {
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
    if (Tc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (xl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(xl, function(l, c, d, h, f, m) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = pe(pe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = pe(pe({}, e), Tl(a)));
      continue;
    }
    if (xc.test(i.stem)) {
      e = pe(pe({}, e), Tl(i.stem));
      continue;
    }
    var s = wc(i.stem);
    s && (e = pe(pe({}, e), s));
    var u = Wh(i.stem);
    u && (e = pe(pe({}, e), u));
  }
  return e;
}
var Fa = {
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
function Kh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var s = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = Zh(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Zh(t) {
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
  var i = Fa[r || ""] || Fa[n || ""] || Fa["".concat(n, "-001")] || Fa["001"];
  return i[0];
}
var Gs, Yh = new RegExp("^".concat(Cc.source, "*")), Qh = new RegExp("".concat(Cc.source, "*$"));
function Xe(t, e) {
  return { start: t, end: e };
}
var Jh = !!String.prototype.startsWith && "_a".startsWith("a", 1), $h = !!String.fromCodePoint, ev = !!Object.fromEntries, tv = !!String.prototype.codePointAt, nv = !!String.prototype.trimStart, rv = !!String.prototype.trimEnd, iv = !!Number.isSafeInteger, av = iv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, go = !0;
try {
  var sv = Lc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  go = ((Gs = sv.exec("a")) === null || Gs === void 0 ? void 0 : Gs[0]) === "a";
} catch {
  go = !1;
}
var Ol = Jh ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), po = $h ? String.fromCodePoint : (
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
), Ll = (
  // native
  ev ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], s = a[0], u = a[1];
        n[s] = u;
      }
      return n;
    }
  )
), Oc = tv ? (
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
), ov = nv ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Yh, "");
  }
), lv = rv ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Qh, "");
  }
);
function Lc(t, e) {
  return new RegExp(t, e);
}
var bo;
if (go) {
  var Rl = Lc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  bo = function(e, n) {
    var r;
    Rl.lastIndex = n;
    var i = Rl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  bo = function(e, n) {
    for (var r = []; ; ) {
      var i = Oc(e, n);
      if (i === void 0 || Rc(i) || fv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return po.apply(void 0, r);
  };
var uv = (
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
          } else if (a === 60 && !this.ignoreTag && _o(this.peek() || 0)) {
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
          if (this.isEOF() || !_o(this.char()))
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
      for (this.bump(); !this.isEOF() && dv(this.char()); )
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
      !cv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return po.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), po(r));
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
      var e = this.clonePosition(), n = this.offset(), r = bo(this.message, n), i = n + r.length;
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
            var f = lv(h.val);
            if (f.length === 0)
              return this.error(ze.EXPECT_ARGUMENT_STYLE, Xe(this.clonePosition(), this.clonePosition()));
            var m = Xe(d, this.clonePosition());
            c = { style: f, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var p = Xe(i, this.clonePosition());
          if (c && Ol(c == null ? void 0 : c.style, "::", 0)) {
            var b = ov(c.style.slice(2));
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
              this.locale && (I = Kh(b, this.locale));
              var f = {
                type: ji.dateTime,
                pattern: I,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Vh(I) : {}
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
              options: Ll(y.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ht.plural,
              value: r,
              options: Ll(y.val),
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
        r = jh(e);
      } catch {
        return this.error(ze.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: ji.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Xh(r) : {}
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
      return a ? (s *= r, av(s) ? { val: s, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = Oc(this.message, e);
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
      if (Ol(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && Rc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function _o(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function cv(t) {
  return _o(t) || t === 47;
}
function dv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function Rc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function fv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function yo(t) {
  t.forEach(function(e) {
    if (delete e.location, Ic(e) || Ec(e))
      for (var n in e.options)
        delete e.options[n].location, yo(e.options[n].value);
    else bc(e) && Ac(e.style) || (_c(e) || yc(e)) && mo(e.style) ? delete e.style.location : Sc(e) && yo(e.children);
  });
}
function hv(t, e) {
  e === void 0 && (e = {}), e = pe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new uv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(ze[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || yo(n.val), n.val;
}
var qi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(qi || (qi = {}));
var ws = (
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
), Ml = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), qi.INVALID_VALUE, a) || this;
    }
    return e;
  }(ws)
), vv = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), qi.INVALID_VALUE, i) || this;
    }
    return e;
  }(ws)
), mv = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), qi.MISSING_VALUE, r) || this;
    }
    return e;
  }(ws)
), Zt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Zt || (Zt = {}));
function gv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Zt.literal || n.type !== Zt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function pv(t) {
  return typeof t == "function";
}
function Ya(t, e, n, r, i, a, s) {
  if (t.length === 1 && Cl(t[0]))
    return [
      {
        type: Zt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (Cl(d)) {
      u.push({
        type: Zt.literal,
        value: d.value
      });
      continue;
    }
    if (kh(d)) {
      typeof a == "number" && u.push({
        type: Zt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new mv(h, s);
    var f = i[h];
    if (Fh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Zt.literal : Zt.object,
        value: f
      });
      continue;
    }
    if (_c(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : mo(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (yc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : mo(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Zt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (bc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Ac(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), u.push({
        type: Zt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (Sc(d)) {
      var v = d.children, p = d.value, b = i[p];
      if (!pv(b))
        throw new vv(p, "function", s);
      var I = Ya(v, e, n, r, i, a), E = b(I.map(function(S) {
        return S.value;
      }));
      Array.isArray(E) || (E = [E]), u.push.apply(u, E.map(function(S) {
        return {
          type: typeof S == "string" ? Zt.literal : Zt.object,
          value: S
        };
      }));
    }
    if (Ic(d)) {
      var A = d.options[f] || d.options.other;
      if (!A)
        throw new Ml(d.value, f, Object.keys(d.options), s);
      u.push.apply(u, Ya(A.value, e, n, r, i));
      continue;
    }
    if (Ec(d)) {
      var A = d.options["=".concat(f)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new ws(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, qi.MISSING_INTL_API, s);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        A = d.options[_] || d.options.other;
      }
      if (!A)
        throw new Ml(d.value, f, Object.keys(d.options), s);
      u.push.apply(u, Ya(A.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return gv(u);
}
function bv(t, e) {
  return e ? pe(pe(pe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = pe(pe({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function _v(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = bv(t[r], e[r]), n;
  }, pe({}, t)) : t;
}
function js(t) {
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
function yv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Bs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: js(t.number),
      strategy: Vs.variadic
    }),
    getDateTimeFormat: Bs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: js(t.dateTime),
      strategy: Vs.variadic
    }),
    getPluralRules: Bs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: js(t.pluralRules),
      strategy: Vs.variadic
    })
  };
}
var Mc = (
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
          return !h.length || f.type !== Zt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return Ya(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var u = wh(s, ["formatters"]);
        this.ast = t.__parse(e, pe(pe({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = _v(t.formats, r), this.formatters = i && i.formatters || yv(this.formatterCache);
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
    }, t.__parse = hv, t.formats = {
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
function Iv(t, e) {
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
const Sr = {}, Ev = (t, e, n) => n && (e in Sr || (Sr[e] = {}), t in Sr[e] || (Sr[e][t] = n), n), Dc = (t, e) => {
  if (e == null)
    return;
  if (e in Sr && t in Sr[e])
    return Sr[e][t];
  const n = La(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Av(i, t);
    if (a)
      return Ev(t, e, a);
  }
};
let zo;
const Oa = Nt({});
function Sv(t) {
  return zo[t] || null;
}
function Hc(t) {
  return t in zo;
}
function Av(t, e) {
  if (!Hc(t))
    return null;
  const n = Sv(t);
  return Iv(n, e);
}
function Cv(t) {
  if (t == null)
    return;
  const e = La(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Hc(r))
      return r;
  }
}
function Pc(t, ...e) {
  delete Sr[t], Oa.update((n) => (n[t] = Th.all([n[t] || {}, ...e]), n));
}
Zi(
  [Oa],
  ([t]) => Object.keys(t)
);
Oa.subscribe((t) => zo = t);
const Qa = {};
function xv(t, e) {
  Qa[t].delete(e), Qa[t].size === 0 && delete Qa[t];
}
function Nc(t) {
  return Qa[t];
}
function Tv(t) {
  return La(t).map((e) => {
    const n = Nc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function os(t) {
  return t == null ? !1 : La(t).some(
    (e) => {
      var n;
      return (n = Nc(e)) == null ? void 0 : n.size;
    }
  );
}
function wv(t, e) {
  return Promise.all(
    e.map((r) => (xv(t, r), r().then((i) => i.default || i)))
  ).then((r) => Pc(t, ...r));
}
const aa = {};
function Uc(t) {
  if (!os(t))
    return t in aa ? aa[t] : Promise.resolve();
  const e = Tv(t);
  return aa[t] = Promise.all(
    e.map(
      ([n, r]) => wv(n, r)
    )
  ).then(() => {
    if (os(t))
      return Uc(t);
    delete aa[t];
  }), aa[t];
}
var Dl = Object.getOwnPropertySymbols, Ov = Object.prototype.hasOwnProperty, Lv = Object.prototype.propertyIsEnumerable, Rv = (t, e) => {
  var n = {};
  for (var r in t)
    Ov.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Dl)
    for (var r of Dl(t))
      e.indexOf(r) < 0 && Lv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Mv = {
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
function Dv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${La(
      t
    ).join('", "')}".${os(Dr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Hv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Mv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, fa = Hv;
function zi() {
  return fa;
}
function Pv(t) {
  const e = t, { formats: n } = e, r = Rv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Mc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Dv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(fa, r, { initialLocale: i }), n && ("number" in n && Object.assign(fa.formats.number, n.number), "date" in n && Object.assign(fa.formats.date, n.date), "time" in n && Object.assign(fa.formats.time, n.time)), li.set(i);
}
const qs = Nt(!1);
var Nv = Object.defineProperty, Uv = Object.defineProperties, Fv = Object.getOwnPropertyDescriptors, Hl = Object.getOwnPropertySymbols, kv = Object.prototype.hasOwnProperty, Bv = Object.prototype.propertyIsEnumerable, Pl = (t, e, n) => e in t ? Nv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Vv = (t, e) => {
  for (var n in e || (e = {}))
    kv.call(e, n) && Pl(t, n, e[n]);
  if (Hl)
    for (var n of Hl(e))
      Bv.call(e, n) && Pl(t, n, e[n]);
  return t;
}, Gv = (t, e) => Uv(t, Fv(e));
let Io;
const ls = Nt(null);
function Nl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function La(t, e = zi().fallbackLocale) {
  const n = Nl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Nl(e)])] : n;
}
function Dr() {
  return Io ?? void 0;
}
ls.subscribe((t) => {
  Io = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const jv = (t) => {
  if (t && Cv(t) && os(t)) {
    const { loadingDelay: e } = zi();
    let n;
    return typeof window < "u" && Dr() != null && e ? n = window.setTimeout(
      () => qs.set(!0),
      e
    ) : qs.set(!0), Uc(t).then(() => {
      ls.set(t);
    }).finally(() => {
      clearTimeout(n), qs.set(!1);
    });
  }
  return ls.set(t);
}, li = Gv(Vv({}, ls), {
  set: jv
}), qv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Os = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var zv = Object.defineProperty, us = Object.getOwnPropertySymbols, Fc = Object.prototype.hasOwnProperty, kc = Object.prototype.propertyIsEnumerable, Ul = (t, e, n) => e in t ? zv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Wo = (t, e) => {
  for (var n in e || (e = {}))
    Fc.call(e, n) && Ul(t, n, e[n]);
  if (us)
    for (var n of us(e))
      kc.call(e, n) && Ul(t, n, e[n]);
  return t;
}, Yi = (t, e) => {
  var n = {};
  for (var r in t)
    Fc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && us)
    for (var r of us(t))
      e.indexOf(r) < 0 && kc.call(t, r) && (n[r] = t[r]);
  return n;
};
const ya = (t, e) => {
  const { formats: n } = zi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Wv = Os(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Yi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = ya("number", r)), new Intl.NumberFormat(n, i);
  }
), Xv = Os(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Yi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = ya("date", r) : Object.keys(i).length === 0 && (i = ya("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Kv = Os(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Yi(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = ya("time", r) : Object.keys(i).length === 0 && (i = ya("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Zv = (t = {}) => {
  var e = t, {
    locale: n = Dr()
  } = e, r = Yi(e, [
    "locale"
  ]);
  return Wv(Wo({ locale: n }, r));
}, Yv = (t = {}) => {
  var e = t, {
    locale: n = Dr()
  } = e, r = Yi(e, [
    "locale"
  ]);
  return Xv(Wo({ locale: n }, r));
}, Qv = (t = {}) => {
  var e = t, {
    locale: n = Dr()
  } = e, r = Yi(e, [
    "locale"
  ]);
  return Kv(Wo({ locale: n }, r));
}, Jv = Os(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Dr()) => new Mc(t, e, zi().formats, {
    ignoreTag: zi().ignoreTag
  })
), $v = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: u,
    locale: l = Dr(),
    default: c
  } = s;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Dc(t, l);
  if (!d)
    d = (a = (i = (r = (n = zi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = Jv(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, em = (t, e) => Qv(e).format(t), tm = (t, e) => Yv(e).format(t), nm = (t, e) => Zv(e).format(t), rm = (t, e = Dr()) => Dc(t, e), im = Zi([li, Oa], () => $v);
Zi([li], () => em);
Zi([li], () => tm);
Zi([li], () => nm);
Zi([li, Oa], () => rm);
function am(t, e) {
  Object.entries(t).forEach(([a, s]) => {
    Pc(a, s);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? qv();
  console.log("Initial: Setting the language to", i), Pv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const s = a;
    if (!s.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", s.detail.language), li.set(s.detail.language);
  });
}
const sm = "Ort", om = "Suche", lm = "UUID", um = "File Name", cm = "Autor", dm = "Typ", fm = "Version", hm = "Datum", vm = "Fertig", mm = "Filtertypen", gm = "Filter Hinzufügen", pm = {
  location: sm,
  search: om,
  uuid: lm,
  filename: um,
  author: cm,
  type: dm,
  version: fm,
  date: hm,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: vm,
  filter_types: mm,
  add_filter: gm
}, bm = "Location", _m = "Search", ym = "UUID", Im = "Filename", Em = "Author", Sm = "Type", Am = "Version", Cm = "Date", xm = "Done", Tm = "Filter Types", wm = "Add Filter", Om = {
  location: bm,
  search: _m,
  uuid: ym,
  filename: Im,
  author: Em,
  type: Sm,
  version: Am,
  date: Cm,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: xm,
  filter_types: Tm,
  add_filter: wm
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
function ri(t, e) {
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
class ui {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Mf(e, n, r, i));
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
function Y(t, e) {
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
var ka;
function Lm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = ka;
  if (typeof ka == "boolean" && !e)
    return ka;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (ka = r), r;
}
function Rm(t, e, n) {
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
var Vt = (
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
function Mm(t) {
  return t === void 0 && (t = window), Dm(t) ? { passive: !0 } : !1;
}
function Dm(t) {
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
const Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Mm
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
function Hm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Vc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Vc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Pm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Hm,
  estimateScrollWidth: Pm,
  matches: Vc
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
var Nm = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Um = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Fl = {
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
var kl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Bl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ba = [], Fm = (
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
        return Nm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Um;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Fl;
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
          for (var a = Pt(kl), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = Pt(Bl), s = a.next(); !s.done; s = a.next()) {
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
        for (var i = Pt(kl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Pt(Bl), a = i.next(); !a.done; a = i.next()) {
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
            var u = n !== void 0 && Ba.length > 0 && Ba.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ba.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ba = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
      i ? a = Rm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Fl.FG_DEACTIVATION_MS));
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
  }(Vt)
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
var zs = "mdc-dom-focus-sentinel", km = (
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
      [].slice.call(this.root.querySelectorAll("." + zs)).forEach(function(e) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(zs) && !i, s = !1;
        if (a) {
          var u = getComputedStyle(r);
          s = u.display === "none" || u.visibility === "hidden";
        }
        return a && !s;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(zs), e;
    }, t;
  }()
);
const Bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: km
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
}, nn = /* @__PURE__ */ new Set();
nn.add(Pe.BACKSPACE);
nn.add(Pe.ENTER);
nn.add(Pe.SPACEBAR);
nn.add(Pe.PAGE_UP);
nn.add(Pe.PAGE_DOWN);
nn.add(Pe.END);
nn.add(Pe.HOME);
nn.add(Pe.ARROW_LEFT);
nn.add(Pe.ARROW_UP);
nn.add(Pe.ARROW_RIGHT);
nn.add(Pe.ARROW_DOWN);
nn.add(Pe.DELETE);
nn.add(Pe.ESCAPE);
nn.add(Pe.TAB);
var ln = {
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
}, rn = /* @__PURE__ */ new Map();
rn.set(ln.BACKSPACE, Pe.BACKSPACE);
rn.set(ln.ENTER, Pe.ENTER);
rn.set(ln.SPACEBAR, Pe.SPACEBAR);
rn.set(ln.PAGE_UP, Pe.PAGE_UP);
rn.set(ln.PAGE_DOWN, Pe.PAGE_DOWN);
rn.set(ln.END, Pe.END);
rn.set(ln.HOME, Pe.HOME);
rn.set(ln.ARROW_LEFT, Pe.ARROW_LEFT);
rn.set(ln.ARROW_UP, Pe.ARROW_UP);
rn.set(ln.ARROW_RIGHT, Pe.ARROW_RIGHT);
rn.set(ln.ARROW_DOWN, Pe.ARROW_DOWN);
rn.set(ln.DELETE, Pe.DELETE);
rn.set(ln.ESCAPE, Pe.ESCAPE);
rn.set(ln.TAB, Pe.TAB);
var Hr = /* @__PURE__ */ new Set();
Hr.add(Pe.PAGE_UP);
Hr.add(Pe.PAGE_DOWN);
Hr.add(Pe.END);
Hr.add(Pe.HOME);
Hr.add(Pe.ARROW_LEFT);
Hr.add(Pe.ARROW_UP);
Hr.add(Pe.ARROW_RIGHT);
Hr.add(Pe.ARROW_DOWN);
function At(t) {
  var e = t.key;
  if (nn.has(e))
    return e;
  var n = rn.get(t.keyCode);
  return n || Pe.UNKNOWN;
}
const { applyPassive: Vl } = Bc, { matches: Vm } = Ra;
function Qt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (v) => t.classList.add(v), removeClass: h = (v) => t.classList.remove(v), addStyle: f = (v, p) => t.style.setProperty(v, p), initPromise: m = Promise.resolve() } = {}) {
  let v, p = new ui(), b = he("SMUI:addLayoutListener"), I, E = s, A = l, _ = c;
  function S() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && E !== s && (E = s, s ? v.activate() : s === !1 && v.deactivate()), e && !v ? (v = new Fm({
      addClass: d,
      browserSupportsCssVars: () => Lm(window),
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
      isSurfaceActive: () => s ?? Vm(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, x) => {
        const C = Vl();
        p.on(document.documentElement, T, x, typeof C == "boolean" ? { capture: C } : C);
      },
      registerInteractionHandler: (T, x) => {
        const C = Vl();
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
function Gm(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, ci), a = g(e, "tag", 3, "span"), s = /* @__PURE__ */ qe(e, [
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
  var h = { getElement: d }, f = $(), m = z(f);
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
              var A = $(), _ = z(A);
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
function Eo(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "on", 3, !1), a = g(e, "component", 3, ci), s = g(e, "tag", 3, "i"), u = /* @__PURE__ */ qe(e, [
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
  const c = /* @__PURE__ */ be(() => s() === "svg" || a() === zm), d = he("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, m = $(), v = z(m);
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
              var _ = $(), S = z(_);
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
var jm = /* @__PURE__ */ Ct("<svg><!></svg>");
function ci(t, e) {
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
  var l = { getElement: u }, c = $(), d = z(c);
  {
    var h = (m) => {
      var v = jm();
      Ge(v, () => ({ ...i }));
      var p = ce(v);
      Se(p, () => e.children ?? fe), Oe(v, (b) => s = b, () => s), Fe(v, (b, I) => Y == null ? void 0 : Y(b, I), n), w(m, v);
    }, f = (m) => {
      var v = $(), p = z(v);
      {
        var b = (E) => {
          var A = $(), _ = z(A);
          ml(_, r, !1, (S, y) => {
            Oe(S, (T) => s = T, () => s), Fe(S, (T, x) => Y == null ? void 0 : Y(T, x), n), Ge(S, () => ({ ...i }));
          }), w(E, A);
        }, I = (E) => {
          var A = $(), _ = z(A);
          ml(_, r, !1, (S, y) => {
            Oe(S, (C) => s = C, () => s), Fe(S, (C, N) => Y == null ? void 0 : Y(C, N), n), Ge(S, () => ({ ...i }));
            var T = $(), x = z(T);
            Se(x, () => e.children ?? fe), w(y, T);
          }), w(E, A);
        };
        re(
          p,
          (E) => {
            o(a) ? E(b) : E(I, !1);
          },
          !0
        );
      }
      w(m, v);
    };
    re(d, (m) => {
      r() === "svg" ? m(h) : m(f, !1);
    });
  }
  return w(t, c), Te(l);
}
var qm = /* @__PURE__ */ Ct("<svg><!></svg>");
function zm(t, e) {
  xe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, u = qm();
  Ge(u, () => ({ ...r }));
  var l = ce(u);
  return Se(l, () => e.children ?? fe), Oe(u, (c) => i = c, () => i), Fe(u, (c, d) => Y == null ? void 0 : Y(c, d), n), w(t, u), Te(s);
}
function Va(t, e) {
  xe(e, !0);
  const [n, r] = Zn(), i = Nt(e.value);
  oe(e.key, i), we(() => {
    Mn(i, e.value);
  }), gn(() => {
    i.set(void 0);
  });
  var a = $(), s = z(a);
  Se(s, () => e.children ?? fe), w(t, a), Te(), r();
}
var Wm = /* @__PURE__ */ de('<div class="mdc-button__touch"></div>'), Xm = /* @__PURE__ */ de('<div class="mdc-button__ripple"></div> <!><!>', 1);
function cs(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "ripple", 3, !0), s = g(e, "color", 3, "primary"), u = g(e, "variant", 3, "text"), l = g(e, "touch", 3, !1), c = g(e, "action", 3, "close"), d = g(e, "defaultAction", 3, !1), h = g(e, "secondary", 3, !1), f = g(e, "component", 3, ci), m = g(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ qe(e, [
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
  function C(G, B) {
    I[G] != B && (B === "" || B == null ? delete I[G] : I[G] = B);
  }
  function N() {
    E === "banner" && We(W(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function W() {
    return p.getElement();
  }
  var k = { getElement: W }, F = $(), ue = z(F);
  {
    let G = /* @__PURE__ */ be(() => [
      [
        Qt,
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
    ]), B = /* @__PURE__ */ be(() => Ue({
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
    })), U = /* @__PURE__ */ be(() => Object.entries(I).map(([X, ee]) => `${X}: ${ee};`).concat([i()]).join(" "));
    fr(ue, f, (X, ee) => {
      Oe(
        ee(X, $e(
          {
            get tag() {
              return m();
            },
            get use() {
              return o(G);
            },
            get class() {
              return o(B);
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
              var O = Xm(), ie = me(z(O), 2);
              Se(ie, () => e.children ?? fe);
              var se = me(ie);
              {
                var Z = (ye) => {
                  var V = Wm();
                  w(ye, V);
                };
                re(se, (ye) => {
                  l() && ye(Z);
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
function Gc(t, e) {
  xe(e, !0);
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "disabled", 3, !1), i = g(e, "variant", 3, "default"), a = g(e, "isAbortAction", 3, !1), s = g(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ be(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    cs(t, {
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
        var d = $(), h = z(d);
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
var Ga = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, $n = {
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
var Km = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ga;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return $n;
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
      var n = this.adapter.getAttr($n.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr($n.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr($n.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr($n.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Ga.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ga.ICON_BUTTON_ON) : this.adapter.removeClass(Ga.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr($n.DATA_ARIA_LABEL_ON) : this.adapter.getAttr($n.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr($n.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr($n.ARIA_PRESSED, "" + n);
    }, e;
  }(Vt)
), Zm = /* @__PURE__ */ de('<div class="mdc-icon-button__touch"></div>'), Ym = /* @__PURE__ */ de('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Qm(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(L) {
    return L === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), u = g(e, "ripple", 3, !0), l = g(e, "toggle", 3, !1), c = g(e, "pressed", 15, n), d = g(e, "touch", 3, !1), h = g(e, "displayFlex", 3, !0), f = g(e, "size", 3, "normal"), m = g(e, "component", 3, ci), v = g(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ qe(e, [
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
    b && U() && l() !== C && (l() && !I ? (I = new Km({
      addClass: W,
      hasClass: N,
      notifyChange: (L) => {
        B(L), We(U(), "SMUIIconButtonToggleChange", L);
      },
      removeClass: k,
      getAttr: ue,
      setAttr: G
    }), I.init()) : !l() && I && (I.destroy(), I = void 0, K(E, {}, !0), K(_, {}, !0)), C = l());
  }), we(() => {
    I && !r(c()) && I.isOn() !== c() && I.toggle(c());
  }), gn(() => {
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
  function B(L) {
    c(L.isOn);
  }
  function U() {
    return b.getElement();
  }
  var X = { getElement: U }, ee = $(), P = z(ee);
  {
    let L = /* @__PURE__ */ be(() => [
      [
        Qt,
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
    })), ie = /* @__PURE__ */ be(() => Object.entries(A).map(([ye, V]) => `${ye}: ${V};`).concat([s()]).join(" ")), se = /* @__PURE__ */ be(() => r(c()) ? null : c() ? "true" : "false"), Z = /* @__PURE__ */ be(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    fr(P, m, (ye, V) => {
      Oe(
        V(ye, $e(
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
              return o(ie);
            },
            get "aria-pressed"() {
              return o(se);
            },
            get "aria-label"() {
              return o(Z);
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
            onclick: (te) => {
              var Q;
              I && I.handleClick(), S === "top-app-bar:navigation" && We(U(), "SMUITopAppBarIconButtonNav"), (Q = e.onclick) == null || Q.call(e, te);
            },
            children: (te, Q) => {
              var le = Ym(), Ee = me(z(le), 2);
              Se(Ee, () => e.children ?? fe);
              var q = me(Ee);
              {
                var ae = (Re) => {
                  var Ae = Zm();
                  w(Re, Ae);
                };
                re(q, (Re) => {
                  d() && Re(ae);
                });
              }
              w(te, le);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => b = te,
        () => b
      );
    });
  }
  return w(t, ee), Te(X);
}
function Jm(t, e) {
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "icon", 3, ""), i = g(e, "disabled", 3, !1);
  Qm(t, {
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
      Eo(a, {
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
var $m = {
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
var eg = (
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
        return $m;
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
  }(Vt)
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
var Br = {
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
var tg = (
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
        return Br;
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
      this.adapter.removeClass(Br.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Br.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Br.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Br.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Br.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Br.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Vt)
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
var ng = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Gl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, rg = {
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
var ig = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ng;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Gl;
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
      n > 0 && (n += Gl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Vt)
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
var Ws = {
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
}, ag = {
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
}, jl = {
  LABEL_SCALE: 0.75
}, sg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], og = [
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
var ql = ["mousedown", "touchstart"], zl = ["click", "keydown"], lg = (
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
        return ag;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ws;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return jl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return og.indexOf(n) >= 0;
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
        for (var s = Pt(ql), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = Pt(zl), d = c.next(); !d.done; d = c.next()) {
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
        for (var s = Pt(ql), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = Pt(zl), d = c.next(); !d.done; d = c.next()) {
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
        return sg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * jl.LABEL_SCALE;
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
        a && s ? this.adapter.setInputAttr(Ws.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Ws.ARIA_DESCRIBEDBY);
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
  }(Vt)
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
var Wl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, ug = {
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
var Xl = ["click", "keydown"], cg = (
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
        return Wl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ug;
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
        for (var i = Pt(Xl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Pt(Xl), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Wl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Vt)
), dg = /* @__PURE__ */ de("<span><!></span>"), fg = /* @__PURE__ */ de("<label><!></label>");
function ds(t, e) {
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
  ]), c, d = /* @__PURE__ */ Ie(void 0), h = new ui(), f = Ce({}), m = Ce({}), v = he("SMUI:generic:input:props") ?? {}, p = a();
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
      new eg({
        addClass: A,
        removeClass: _,
        getWidth: () => {
          var L, O;
          const X = W(), ee = X.cloneNode(!0);
          (L = X.parentNode) == null || L.appendChild(ee), ee.classList.add("smui-floating-label--remove-transition"), ee.classList.add("smui-floating-label--force-size"), ee.classList.remove("mdc-floating-label--float-above");
          const P = ee.scrollWidth;
          return (O = X.parentNode) == null || O.removeChild(ee), P;
        },
        registerInteractionHandler: (X, ee) => h.on(W(), X, ee),
        deregisterInteractionHandler: (X, ee) => h.off(W(), X, ee)
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
  var k = { shake: T, float: x, setRequired: C, getWidth: N, getElement: W }, F = $(), ue = z(F);
  {
    var G = (U) => {
      var X = dg();
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
      var ee = ce(X);
      Se(ee, () => e.children ?? fe), Oe(X, (P) => c = P, () => c), Fe(X, (P, L) => Y == null ? void 0 : Y(P, L), n), w(U, X);
    }, B = (U) => {
      var X = fg();
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
      var ee = ce(X);
      Se(ee, () => e.children ?? fe), Oe(X, (P) => c = P, () => c), Fe(X, (P, L) => Y == null ? void 0 : Y(P, L), n), w(U, X);
    };
    re(ue, (U) => {
      u() ? U(G) : U(B, !1);
    });
  }
  return w(t, F), Te(k);
}
var hg = /* @__PURE__ */ de("<div></div>");
function jc(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "active", 3, !1), s = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ Ie(void 0), c = new ui(), d = Ce({}), h = Ce({});
  ot(() => (K(
    l,
    new tg({
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
  var _ = { activate: b, deactivate: I, setRippleCenter: E, getElement: A }, S = hg();
  return Ge(S, (y, T) => ({ class: y, style: T, ...s }), [
    () => Ue({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([y, T]) => `${y}: ${T};`).concat([i()]).join(" ")
  ]), Oe(S, (y) => u = y, () => u), Fe(S, (y, T) => Y == null ? void 0 : Y(y, T), n), w(t, S), Te(_);
}
var vg = /* @__PURE__ */ de('<div class="mdc-notched-outline__notch"><!></div>'), mg = /* @__PURE__ */ de('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function qc(t, e) {
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
    new ig({
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
  var _ = { notch: I, closeNotch: E, getElement: A }, S = mg();
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
      var C = vg(), N = ce(C);
      Se(N, () => e.children ?? fe), Le((W) => vt(C, W), [
        () => Object.entries(h).map(([W, k]) => `${W}: ${k};`).join(" ")
      ]), w(x, C);
    };
    re(y, (x) => {
      a() || x(T);
    });
  }
  return Oe(S, (x) => u = x, () => u), Fe(S, (x, C) => Y == null ? void 0 : Y(x, C), n), w(t, S), Te(_);
}
function Qi(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, ci), a = g(e, "tag", 3, "div"), s = g(e, "_smuiClass", 3, ""), u = g(e, "_smuiClassMap", 23, () => ({})), l = g(e, "_smuiContexts", 19, () => ({})), c = g(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ qe(e, [
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
  gn(() => {
    for (const I of f)
      I();
  });
  function m() {
    return h.getElement();
  }
  var v = { getElement: m }, p = $(), b = z(p);
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
              var y = $(), T = z(y);
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
function gg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Qi(t, $e({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, u) => {
        var l = $(), c = z(l);
        Se(c, () => e.children ?? fe), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
function pg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Qi(t, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, u) => {
          var l = $(), c = z(l);
          Se(c, () => e.children ?? fe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
function bg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Qi(t, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, u) => {
          var l = $(), c = z(l);
          Se(c, () => e.children ?? fe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var _g = /* @__PURE__ */ de("<input/>");
function yg(t, e) {
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
  function y(G, B) {
    b[G] !== B && (b[G] = B);
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
  var W = { getAttr: S, addAttr: y, removeAttr: T, focus: x, blur: C, getElement: N }, k = _g(), F = (G) => {
    var B;
    i() !== "file" && A(G), (B = e.oninput) == null || B.call(e, G);
  }, ue = (G) => {
    var B;
    _(G), (B = e.onchange) == null || B.call(e, G);
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
  ), Oe(k, (G) => p = G, () => p), Fe(k, (G, B) => Y == null ? void 0 : Y(G, B), n), w(t, k), Te(W);
}
var Ig = /* @__PURE__ */ de("<textarea></textarea>");
function Eg(t, e) {
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
  var S = { getAttr: p, addAttr: b, removeAttr: I, focus: E, blur: A, getElement: _ }, y = Ig(), T = (x) => {
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
  ), Oe(y, (x) => f = x, () => f), Fe(y, (x, C) => Y == null ? void 0 : Y(x, C), n), si(() => ba(y, a)), w(t, y), Te(S);
}
var Sg = /* @__PURE__ */ de('<span class="mdc-text-field__ripple"></span>'), Ag = /* @__PURE__ */ de("<!> <!>", 1), Cg = /* @__PURE__ */ de("<span><!> <!></span>"), xg = /* @__PURE__ */ de("<!> <!> <!>", 1), Tg = /* @__PURE__ */ de("<label><!> <!> <!> <!> <!> <!> <!></label>"), wg = /* @__PURE__ */ de("<div><!> <!> <!> <!> <!></div>"), Og = /* @__PURE__ */ de("<!> <!>", 1);
function So(t, e) {
  xe(e, !0);
  const { applyPassive: n } = Bc;
  let r = () => {
  };
  function i(D) {
    return D === r;
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
  let G, B = /* @__PURE__ */ Ie(void 0), U = new ui(), X = Ce({}), ee = Ce({}), P = /* @__PURE__ */ Ie(void 0), L = /* @__PURE__ */ Ie(!1), O = /* @__PURE__ */ Ie(Ce(A())), ie = he("SMUI:addLayoutListener"), se, Z, ye = new Promise((D) => Z = D), V, te, Q, le;
  const Ee = /* @__PURE__ */ be(() => C() && C().getElement());
  we(() => {
    (_() || o(O) || !E()) && o(B) && o(B).isValid() !== !I() && (E() ? I(!o(B).isValid()) : o(B).setValid(!I()));
  }), we(() => {
    o(B) && o(B).getValidateOnValueChange() !== S() && o(B).setValidateOnValueChange(i(S()) ? !1 : S());
  }), we(() => {
    o(B) && o(B).setUseNativeValidation(i(y()) ? !0 : y());
  }), we(() => {
    o(B) && o(B).setDisabled(c());
  });
  let q = p();
  we(() => {
    if (o(B) && ue && q !== p()) {
      q = p();
      const D = `${p() == null ? "" : p()}`;
      o(B).getValue() !== D && o(B).setValue(D);
    }
  }), ie && (se = ie(M)), oe("SMUI:textfield:leading-icon:mount", (D) => {
    V = D;
  }), oe("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), oe("SMUI:textfield:trailing-icon:mount", (D) => {
    te = D;
  }), oe("SMUI:textfield:trailing-icon:unmount", () => {
    te = void 0;
  }), oe("SMUI:textfield:helper-text:id", (D) => {
    K(P, D, !0);
  }), oe("SMUI:textfield:helper-text:mount", (D) => {
    Q = D;
  }), oe("SMUI:textfield:helper-text:unmount", () => {
    K(P, void 0), Q = void 0;
  }), oe("SMUI:textfield:character-counter:mount", (D) => {
    le = D;
  }), oe("SMUI:textfield:character-counter:unmount", () => {
    le = void 0;
  }), ot(() => {
    var D;
    if (K(
      B,
      new lg(
        {
          // getRootAdapterMethods_
          addClass: Re,
          removeClass: Ae,
          hasClass: ae,
          registerTextFieldInteractionHandler: (J, Me) => U.on(j(), J, Me),
          deregisterTextFieldInteractionHandler: (J, Me) => U.off(j(), J, Me),
          registerValidationAttributeChangeHandler: (J) => {
            const Me = (wt) => wt.map((Gt) => Gt.attributeName).filter((Gt) => Gt), lt = new MutationObserver((wt) => {
              y() && J(Me(wt));
            }), at = { attributes: !0 };
            return C() && lt.observe(C().getElement(), at), lt;
          },
          deregisterValidationAttributeChangeHandler: (J) => {
            J.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var J;
            return ((J = C()) == null ? void 0 : J.getElement()) ?? null;
          },
          setInputAttr: (J, Me) => {
            var lt;
            (lt = C()) == null || lt.addAttr(J, Me);
          },
          removeInputAttr: (J) => {
            var Me;
            (Me = C()) == null || Me.removeAttr(J);
          },
          isFocused: () => {
            var J;
            return document.activeElement === ((J = C()) == null ? void 0 : J.getElement());
          },
          registerInputInteractionHandler: (J, Me) => {
            var at;
            const lt = (at = C()) == null ? void 0 : at.getElement();
            if (lt) {
              const wt = n();
              U.on(lt, J, Me, typeof wt == "boolean" ? { capture: wt } : wt);
            }
          },
          deregisterInputInteractionHandler: (J, Me) => {
            var at;
            const lt = (at = C()) == null ? void 0 : at.getElement();
            lt && U.off(lt, J, Me);
          },
          // getLabelAdapterMethods_
          floatLabel: (J) => N() && N().float(J),
          getLabelWidth: () => N() ? N().getWidth() : 0,
          hasLabel: () => !!N(),
          shakeLabel: (J) => N() && N().shake(J),
          setLabelRequired: (J) => N() && N().setRequired(J),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => W() && W().activate(),
          deactivateLineRipple: () => W() && W().deactivate(),
          setLineRippleTransformOrigin: (J) => W() && W().setRippleCenter(J),
          // getOutlineAdapterMethods_
          closeOutline: () => k() && k().closeNotch(),
          hasOutline: () => !!k(),
          notchOutline: (J) => k() && k().notch(J)
        },
        {
          get helperText() {
            return Q;
          },
          get characterCounter() {
            return le;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return te;
          }
        }
      ),
      !0
    ), ue) {
      if (C() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (D = o(B)) == null || D.init();
    } else
      ec().then(() => {
        var J;
        if (C() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (J = o(B)) == null || J.init();
      });
    return Z(), () => {
      var J;
      (J = o(B)) == null || J.destroy(), U.clear();
    };
  }), gn(() => {
    se && se();
  });
  function ae(D) {
    return D in X ? X[D] ?? null : j().classList.contains(D);
  }
  function Re(D) {
    X[D] || (X[D] = !0);
  }
  function Ae(D) {
    (!(D in X) || X[D]) && (X[D] = !1);
  }
  function Ne(D, J) {
    ee[D] != J && (J === "" || J == null ? delete ee[D] : ee[D] = J);
  }
  function Ye() {
    var D;
    (D = C()) == null || D.focus();
  }
  function dt() {
    var D;
    (D = C()) == null || D.blur();
  }
  function M() {
    if (o(B)) {
      const D = o(B).shouldFloat;
      o(B).notchOutline(D);
    }
  }
  function j() {
    return G;
  }
  var ve = { focus: Ye, blur: dt, layout: M, getElement: j }, ke = Og(), xt = z(ke);
  {
    var Tt = (D) => {
      var J = Tg();
      Ge(J, (He, tt, et) => ({ class: He, style: tt, for: void 0, ...et }), [
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
        () => Object.entries(ee).map(([He, tt]) => `${He}: ${tt};`).concat([u()]).join(" "),
        () => ri(F, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = ce(J);
      {
        var lt = (He) => {
          var tt = Ag(), et = z(tt);
          {
            var Mt = (pt) => {
              var Ot = Sg();
              w(pt, Ot);
            };
            re(et, (pt) => {
              f() === "filled" && pt(Mt);
            });
          }
          var cn = me(et, 2);
          {
            var Ke = (pt) => {
              {
                let Ot = /* @__PURE__ */ be(() => o(L) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Qe = /* @__PURE__ */ be(() => ct(F, "label$"));
                Oe(
                  ds(pt, $e(
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
                      children: (Lt, jt) => {
                        var Kt = $(), _t = z(Kt);
                        {
                          var Dt = (bt) => {
                          }, an = (bt) => {
                            var Pr = $(), bn = z(Pr);
                            {
                              var vr = (_n) => {
                                var Yn = Et();
                                Le(() => Ze(Yn, e.label)), w(_n, Yn);
                              }, Ji = (_n) => {
                                var Yn = $(), Fn = z(Yn);
                                Se(Fn, () => e.label), w(_n, Yn);
                              };
                              re(
                                bn,
                                (_n) => {
                                  typeof e.label == "string" ? _n(vr) : _n(Ji, !1);
                                },
                                !0
                              );
                            }
                            w(bt, Pr);
                          };
                          re(_t, (bt) => {
                            e.label == null ? bt(Dt) : bt(an, !1);
                          });
                        }
                        w(Lt, Kt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Lt) => N(Lt),
                  () => N()
                );
              }
            };
            re(cn, (pt) => {
              !m() && e.label != null && pt(Ke);
            });
          }
          w(He, tt);
        };
        re(Me, (He) => {
          !h() && f() !== "outlined" && He(lt);
        });
      }
      var at = me(Me, 2);
      {
        var wt = (He) => {
          {
            let tt = /* @__PURE__ */ be(() => m() || e.label == null), et = /* @__PURE__ */ be(() => ct(F, "outline$"));
            Oe(
              qc(He, $e(
                {
                  get noLabel() {
                    return o(tt);
                  }
                },
                () => o(et),
                {
                  children: (Mt, cn) => {
                    var Ke = $(), pt = z(Ke);
                    {
                      var Ot = (Qe) => {
                        {
                          let Lt = /* @__PURE__ */ be(() => o(L) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), jt = /* @__PURE__ */ be(() => ct(F, "label$"));
                          Oe(
                            ds(Qe, $e(
                              {
                                get floatAbove() {
                                  return o(Lt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(jt),
                              {
                                children: (Kt, _t) => {
                                  var Dt = $(), an = z(Dt);
                                  {
                                    var bt = (bn) => {
                                    }, Pr = (bn) => {
                                      var vr = $(), Ji = z(vr);
                                      {
                                        var _n = (Fn) => {
                                          var Nr = Et();
                                          Le(() => Ze(Nr, e.label)), w(Fn, Nr);
                                        }, Yn = (Fn) => {
                                          var Nr = $(), Rs = z(Nr);
                                          Se(Rs, () => e.label), w(Fn, Nr);
                                        };
                                        re(
                                          Ji,
                                          (Fn) => {
                                            typeof e.label == "string" ? Fn(_n) : Fn(Yn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(bn, vr);
                                    };
                                    re(an, (bn) => {
                                      e.label == null ? bn(bt) : bn(Pr, !1);
                                    });
                                  }
                                  w(Kt, Dt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Kt) => N(Kt),
                            () => N()
                          );
                        }
                      };
                      re(pt, (Qe) => {
                        !m() && e.label != null && Qe(Ot);
                      });
                    }
                    w(Mt, Ke);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Mt) => k(Mt),
              () => k()
            );
          }
        };
        re(at, (He) => {
          (h() || f() === "outlined") && He(wt);
        });
      }
      var Gt = me(at, 2);
      Va(Gt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (He, tt) => {
          var et = $(), Mt = z(et);
          Se(Mt, () => e.leadingIcon ?? fe), w(He, et);
        },
        $$slots: { default: !0 }
      });
      var hr = me(Gt, 2);
      Se(hr, () => e.children ?? fe);
      var ft = me(hr, 2);
      {
        var mt = (He) => {
          var tt = Cg(), et = ce(tt);
          {
            let cn = /* @__PURE__ */ be(() => ct(F, "input$"));
            Oe(
              Eg(et, $e(
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
                () => o(cn),
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
          var Mt = me(et, 2);
          Se(Mt, () => e.internalCounter ?? fe), Le((cn) => Vo(tt, 1, cn), [
            () => lc(Ue({
              "mdc-text-field__resizer": !("input$resizable" in F) || e.input$resizable
            }))
          ]), w(He, tt);
        }, Ut = (He) => {
          var tt = xg(), et = z(tt);
          {
            var Mt = (Ot) => {
              var Qe = $(), Lt = z(Qe);
              {
                var jt = (_t) => {
                  pg(_t, {
                    children: (Dt, an) => {
                      var bt = Et();
                      Le(() => Ze(bt, e.prefix)), w(Dt, bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Kt = (_t) => {
                  var Dt = $(), an = z(Dt);
                  Se(an, () => e.prefix ?? fe), w(_t, Dt);
                };
                re(Lt, (_t) => {
                  typeof e.prefix == "string" ? _t(jt) : _t(Kt, !1);
                });
              }
              w(Ot, Qe);
            };
            re(et, (Ot) => {
              e.prefix != null && Ot(Mt);
            });
          }
          var cn = me(et, 2);
          {
            let Ot = /* @__PURE__ */ be(() => ct(F, "input$"));
            Oe(
              yg(cn, $e(
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
          var Ke = me(cn, 2);
          {
            var pt = (Ot) => {
              var Qe = $(), Lt = z(Qe);
              {
                var jt = (_t) => {
                  bg(_t, {
                    children: (Dt, an) => {
                      var bt = Et();
                      Le(() => Ze(bt, e.suffix)), w(Dt, bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Kt = (_t) => {
                  var Dt = $(), an = z(Dt);
                  Se(an, () => e.suffix ?? fe), w(_t, Dt);
                };
                re(Lt, (_t) => {
                  typeof e.suffix == "string" ? _t(jt) : _t(Kt, !1);
                });
              }
              w(Ot, Qe);
            };
            re(Ke, (Ot) => {
              e.suffix != null && Ot(pt);
            });
          }
          w(He, tt);
        };
        re(ft, (He) => {
          h() && typeof p() == "string" ? He(mt) : He(Ut, !1);
        });
      }
      var Nn = me(ft, 2);
      Va(Nn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (He, tt) => {
          var et = $(), Mt = z(et);
          Se(Mt, () => e.trailingIcon ?? fe), w(He, et);
        },
        $$slots: { default: !0 }
      });
      var hi = me(Nn, 2);
      {
        var Un = (He) => {
          {
            let tt = /* @__PURE__ */ be(() => ct(F, "ripple$"));
            Oe(jc(He, $e(() => o(tt))), (et) => W(et), () => W());
          }
        };
        re(hi, (He) => {
          !h() && f() !== "outlined" && l() && He(Un);
        });
      }
      Oe(J, (He) => G = He, () => G), Fe(J, (He, tt) => Qt == null ? void 0 : Qt(He, tt), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Re,
        removeClass: Ae,
        addStyle: Ne,
        eventTarget: o(Ee),
        activeTarget: o(Ee),
        initPromise: ye
      })), Fe(J, (He, tt) => Y == null ? void 0 : Y(He, tt), a), w(D, J);
    }, un = (D) => {
      var J = wg();
      Ge(J, (ft, mt, Ut) => ({ class: ft, style: mt, ...Ut }), [
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
        () => Object.entries(ee).map(([ft, mt]) => `${ft}: ${mt};`).concat([u()]).join(" "),
        () => ri(F, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = ce(J);
      {
        var lt = (ft) => {
          var mt = $(), Ut = z(mt);
          Se(Ut, () => e.label ?? fe), w(ft, mt);
        };
        re(Me, (ft) => {
          typeof e.label != "string" && ft(lt);
        });
      }
      var at = me(Me, 2);
      Va(at, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ft, mt) => {
          var Ut = $(), Nn = z(Ut);
          Se(Nn, () => e.leadingIcon ?? fe), w(ft, Ut);
        },
        $$slots: { default: !0 }
      });
      var wt = me(at, 2);
      Se(wt, () => e.children ?? fe);
      var Gt = me(wt, 2);
      Va(Gt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ft, mt) => {
          var Ut = $(), Nn = z(Ut);
          Se(Nn, () => e.trailingIcon ?? fe), w(ft, Ut);
        },
        $$slots: { default: !0 }
      });
      var hr = me(Gt, 2);
      Se(hr, () => e.line ?? fe), Oe(J, (ft) => G = ft, () => G), Fe(J, (ft, mt) => Qt == null ? void 0 : Qt(ft, mt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Re,
        removeClass: Ae,
        addStyle: Ne
      })), Fe(J, (ft, mt) => Y == null ? void 0 : Y(ft, mt), a), w(D, J);
    };
    re(xt, (D) => {
      ue ? D(Tt) : D(un, !1);
    });
  }
  var _e = me(xt, 2);
  {
    var H = (D) => {
      {
        let J = /* @__PURE__ */ be(() => ct(F, "helperLine$"));
        gg(D, $e(() => o(J), {
          children: (Me, lt) => {
            var at = $(), wt = z(at);
            Se(wt, () => e.helper ?? fe), w(Me, at);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    re(_e, (D) => {
      e.helper && D(H);
    });
  }
  return w(t, ke), Te(ve);
}
var Lg = /* @__PURE__ */ de("<i><!></i>");
function Rg(t, e) {
  xe(e, !0);
  const n = () => Hn(v, "$leadingStore", r), [r, i] = Zn();
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
  ]), d, h = /* @__PURE__ */ Ie(void 0), f = new ui(), m = Ce({});
  const v = he("SMUI:textfield:icon:leading"), p = n();
  let b = /* @__PURE__ */ Ie(void 0);
  const I = /* @__PURE__ */ be(() => ({ role: e.role, tabindex: u() })), E = he("SMUI:textfield:leading-icon:mount"), A = he("SMUI:textfield:leading-icon:unmount"), _ = he("SMUI:textfield:trailing-icon:mount"), S = he("SMUI:textfield:trailing-icon:unmount");
  ot(() => (K(
    h,
    new cg({
      getAttr: y,
      setAttr: T,
      removeAttr: x,
      setContent: (B) => {
        K(b, B, !0);
      },
      registerInteractionHandler: (B, U) => f.on(C(), B, U),
      deregisterInteractionHandler: (B, U) => f.off(C(), B, U),
      notifyIconAction: () => We(C(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? E && E(o(h)) : _ && _(o(h)), o(h).init(), () => {
    var B;
    o(h) && (p ? A && A(o(h)) : S && S(o(h))), (B = o(h)) == null || B.destroy(), f.clear();
  }));
  function y(B) {
    return B in m ? m[B] ?? null : C().getAttribute(B);
  }
  function T(B, U) {
    m[B] !== U && (m[B] = U);
  }
  function x(B) {
    (!(B in m) || m[B] != null) && (m[B] = void 0);
  }
  function C() {
    return d;
  }
  var N = { getElement: C }, W = Lg();
  Ge(
    W,
    (B) => ({
      class: B,
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
    var F = (B) => {
      var U = $(), X = z(U);
      Se(X, () => e.children ?? fe), w(B, U);
    }, ue = (B) => {
      var U = Et();
      Le(() => Ze(U, o(b))), w(B, U);
    };
    re(k, (B) => {
      o(b) == null ? B(F) : B(ue, !1);
    });
  }
  Oe(W, (B) => d = B, () => d), Fe(W, (B, U) => Y == null ? void 0 : Y(B, U), a), w(t, W);
  var G = Te(N);
  return i(), G;
}
function Mg(t, e) {
  xe(e, !0);
  let n = g(e, "placeholder", 3, ""), r = g(e, "label", 3, ""), i = g(e, "icon", 3, ""), a = g(e, "value", 15, ""), s = g(e, "variant", 3, "standard"), u = g(e, "styles", 3, ""), l = g(e, "required", 3, !1), c = g(e, "oninput", 3, () => {
  });
  var d = $(), h = z(d);
  {
    var f = (v) => {
      {
        const p = (I) => {
          Rg(I, {
            class: "material-icons",
            children: (E, A) => {
              var _ = Et();
              Le(() => Ze(_, i())), w(E, _);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ be(() => `width: 100%; ${u()}`);
        So(v, {
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
      So(v, {
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
    re(h, (v) => {
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
var Dg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, Hg = {
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
}, sa = {
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
var $r;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})($r || ($r = {}));
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
var gr, er, je = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
gr = {}, gr["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", gr["" + je.LIST_ITEM_CLASS] = "mdc-list-item", gr["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", gr["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", gr["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", gr["" + je.ROOT] = "mdc-list";
var _i = (er = {}, er["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", er["" + je.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", er["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", er["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", er["" + je.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", er["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", er["" + je.ROOT] = "mdc-deprecated-list", er), pr = {
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
    .` + _i[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _i[je.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` a,
    .` + je.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + _i[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _i[je.LIST_ITEM_CLASS] + ` a,
    .` + _i[je.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + _i[je.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var Pg = ["input", "button", "textarea", "select"], In = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    Pg.indexOf(n) === -1 && t.preventDefault();
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
function Ng() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Ug(t, e) {
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
function Ao(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, s = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Wc(e);
  }, yt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Fg(i, a, u, e) : l = kg(i, u, e), l !== -1 && !s && r(l), l;
}
function Fg(t, e, n, r) {
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
function kg(t, e, n) {
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
function zc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Wc(t) {
  t.typeaheadBuffer = "";
}
function Kl(t, e) {
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
    return Ao(I, e);
  }
  if (!p)
    return -1;
  r && In(n);
  var E = r && zc(e);
  if (E) {
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Ao(I, e);
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
function Bg(t) {
  return t instanceof Array;
}
var Vg = ["Alt", "Control", "Meta", "Shift"];
function Zl(t) {
  var e = new Set(t ? Vg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Gg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = yt.UNSET_INDEX, r.focusedItemIndex = yt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Ng(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
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
      return this.hasTypeahead && zc(this.typeaheadState);
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
      var a = this, s, u = At(n) === "ArrowLeft", l = At(n) === "ArrowUp", c = At(n) === "ArrowRight", d = At(n) === "ArrowDown", h = At(n) === "Home", f = At(n) === "End", m = At(n) === "Enter", v = At(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && c, b = this.isVertical && l || !this.isVertical && u, I = n.key === "A" || n.key === "a", E = Zl(n);
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
          Kl(_, this.typeaheadState);
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
          Kl(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, s = Zl(i);
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
      for (var a = new Set(this.selectedIndex === yt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = Tr([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          s !== m && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Wn([], Tr(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === yt.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== yt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== yt.UNSET_INDEX ? this.selectedIndex : Bg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      return Ao(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Ug(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Wc(this.typeaheadState);
    }, e;
  }(Vt)
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
var Xc = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = $r.TOP_START, r.originCorner = $r.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Dg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Hg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return sa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return $r;
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
        }, sa.TRANSITION_OPEN_DURATION);
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
          }, sa.TRANSITION_CLOSE_DURATION);
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
      d.width / h.width > sa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, It.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      }, sa.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Vt)
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
var Yl = {
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
function jg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function qg(t, e) {
  if (jg(t) && e in Yl) {
    var n = t.document.createElement("div"), r = Yl[e], i = r.standard, a = r.prefixed, s = i in n.style;
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
var Li = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, yi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, zg = {
  FOCUS_ROOT_INDEX: -1
}, xi;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(xi || (xi = {}));
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
var Wg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = xi.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Li;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return yi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return zg;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, yi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(n);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, Xc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case xi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case xi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case xi.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, yi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Li.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Li.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, yi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, yi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, yi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Vt)
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
}, Xs = {
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
}, Vr = {
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
var Xg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Vr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return gt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Vr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xs;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Vr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Vr.UNSET_INDEX ? r[n] : "";
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
          var i = Vr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      return this.useDefaultValidation && this.adapter.hasClass(gt.REQUIRED) && !this.adapter.hasClass(gt.DISABLED) ? this.getSelectedIndex() !== Vr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(gt.REQUIRED) : this.adapter.removeClass(gt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner($r.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(gt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(gt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(gt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(gt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(Xs.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Xs.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Vr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Vt)
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
var Gr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, tr = {
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
var Kg = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      return t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Gr;
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
      return this.adapter.getAttr(Gr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(tr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(tr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(tr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Gr.ROLE) : this.adapter.setAttr(Gr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Gr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Gr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Gr.ARIA_HIDDEN, "true");
    }, e;
  }(Vt)
), Zg = /* @__PURE__ */ de("<div><!></div>");
function Yg(t, e) {
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
    var V, te;
    A && s() && !((V = A.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((te = A.parentElement) == null || te.classList.add("mdc-menu-surface--anchor"), f(A.parentElement ?? void 0));
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
  const x = $r;
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
      new Xc({
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
        isElementInContainer: (te) => O().contains(te),
        isRtl: () => getComputedStyle(O()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (te) => {
          y["transform-origin"] = te;
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
        setPosition: (te) => {
          y.left = "left" in te ? `${te.left}px` : "", y.right = "right" in te ? `${te.right}px` : "", y.top = "top" in te ? `${te.top}px` : "", y.bottom = "bottom" in te ? `${te.bottom}px` : "";
        },
        setMaxHeight: (te) => {
          y["max-height"] = te;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return l();
      },
      set open(te) {
        l(te);
      },
      closeProgrammatic: ue
    };
    return C && C(V), o(_).init(), () => {
      var Q, le;
      N && N(V);
      const te = o(_).isHoistedElement;
      (Q = o(_)) == null || Q.destroy(), te && ((le = O().parentNode) == null || le.removeChild(O()));
    };
  }), gn(() => {
    var V;
    s() && O() && ((V = O().parentElement) == null || V.classList.remove("mdc-menu-surface--anchor"));
  });
  function W(V) {
    return V in S ? S[V] : O().classList.contains(V);
  }
  function k(V) {
    S[V] || (S[V] = !0);
  }
  function F(V) {
    (!(V in S) || S[V]) && (S[V] = !1);
  }
  function ue(V) {
    var te;
    (te = o(_)) == null || te.close(V), l(!1);
  }
  function G(V) {
    o(_) && l() && !c() && o(_).handleBodyClick(V);
  }
  function B() {
    return l();
  }
  function U(V) {
    l(V);
  }
  function X(V, te) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setAbsolutePosition(V, te);
  }
  function ee(V) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setIsHoisted(V);
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
  var ie = {
    isOpen: B,
    setOpen: U,
    setAbsolutePosition: X,
    setIsHoisted: ee,
    isFixed: P,
    flipCornerHorizontally: L,
    getElement: O
  }, se = Zg();
  lr("click", Uo.body, G, !0);
  var Z = (V) => {
    var te;
    o(_) && !c() && o(_).handleKeydown(V), (te = e.onkeydown) == null || te.call(e, V);
  };
  Ge(
    se,
    (V, te) => ({
      class: V,
      style: te,
      role: "dialog",
      ...E,
      onkeydown: Z
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
      () => Object.entries(y).map(([V, te]) => `${V}: ${te};`).concat([i()]).join(" ")
    ]
  );
  var ye = ce(se);
  return Se(ye, () => e.children ?? fe), Oe(se, (V) => A = V, () => A), Fe(se, (V, te) => Y == null ? void 0 : Y(V, te), n), w(t, se), Te(ie);
}
function Ks(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Qg(t, e) {
  xe(e, !0);
  const { closest: n } = Ra;
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
    new Wg({
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
        return !!n(o(f).getOrderedList()[x].element, `.${Li.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const C = o(f).getOrderedList(), N = n(C[x].element, `.${Li.MENU_SELECTION_GROUP}`), W = N == null ? void 0 : N.querySelector(`.${Li.MENU_SELECTED_LIST_ITEM}`);
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
      Yg(t, $e(
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
            var W = $(), k = z(W);
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
function Jg(t, e) {
  xe(e, !0);
  const { closest: n, matches: r } = Ra;
  let i = he("SMUI:list:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), u = g(e, "nonInteractive", 3, !1), l = g(e, "dense", 3, !1), c = g(e, "textualList", 3, !1), d = g(e, "avatarList", 3, !1), h = g(e, "iconList", 3, !1), f = g(e, "imageList", 3, !1), m = g(e, "thumbnailList", 3, !1), v = g(e, "videoList", 3, !1), p = g(e, "twoLine", 3, !1), b = g(e, "threeLine", 3, !1), I = g(e, "vertical", 3, !0), E = g(e, "wrapFocus", 19, () => he("SMUI:list:wrapFocus") ?? !1), A = g(e, "singleSelection", 3, !1), _ = g(e, "disabledItemsFocusable", 3, !1), S = g(e, "selectedIndex", 31, () => -1), y = g(e, "radioList", 3, !1), T = g(e, "checkList", 3, !1), x = g(e, "hasTypeahead", 3, !1), C = g(e, "component", 3, ci), N = g(e, "tag", 3, i ? "nav" : "ul"), W = /* @__PURE__ */ qe(e, [
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
  const B = /* @__PURE__ */ new WeakMap();
  let U = he("SMUI:dialog:selection"), X = he("SMUI:addLayoutListener"), ee;
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
    o(F) && A() && M() !== S() && o(F).setSelectedIndex(S());
  }), X && (ee = X(Ne)), oe("SMUI:list:item:mount", (_e) => {
    ue.push(_e), B.set(_e.element, _e), A() && _e.selected && S(Ae(_e.element));
  }), oe("SMUI:list:item:unmount", (_e) => {
    const H = (_e && ue.findIndex((D) => D === _e)) ?? -1;
    H !== -1 && (ue.splice(H, 1), B.delete(_e.element));
  });
  const P = he("SMUI:list:mount"), L = he("SMUI:list:unmount");
  ot(() => {
    K(
      F,
      new Gg({
        addClassForElementIndex: Q,
        focusItemAtIndex: ve,
        getAttributeForElementIndex: (H, D) => {
          var J;
          return ((J = V()[H]) == null ? void 0 : J.getAttr(D)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((H) => H.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => ue.length,
        getPrimaryTextAtIndex: Re,
        hasCheckboxAtIndex: (H) => {
          var D;
          return ((D = V()[H]) == null ? void 0 : D.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (H) => {
          var D;
          return ((D = V()[H]) == null ? void 0 : D.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (H) => {
          const D = V()[H];
          return ((D == null ? void 0 : D.hasCheckbox) && D.checked) ?? !1;
        },
        isFocusInsideList: () => k != null && ke() !== document.activeElement && ke().contains(document.activeElement),
        isRootFocused: () => k != null && document.activeElement === ke(),
        listItemAtIndexHasClass: te,
        notifyAction: (H) => {
          S(H), k != null && We(ke(), "SMUIListAction", { index: H });
        },
        notifySelectionChange: (H) => {
          k != null && We(ke(), "SMUIListSelectionChange", { changedIndices: H });
        },
        removeClassForElementIndex: le,
        setAttributeForElementIndex: Ee,
        setCheckedCheckboxOrRadioAtIndex: (H, D) => {
          V()[H].checked = D;
        },
        setTabIndexForListItemChildren: (H, D) => {
          const J = V()[H];
          Array.prototype.forEach.call(J.element.querySelectorAll("button:not(:disabled), a"), (lt) => {
            lt.setAttribute("tabindex", D);
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
      typeaheadMatchItem(H, D) {
        if (!o(F))
          throw new Error("Instance is undefined.");
        return o(F).typeaheadMatchItem(
          H,
          D,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: ve,
      addClassForElementIndex: Q,
      removeClassForElementIndex: le,
      setAttributeForElementIndex: Ee,
      removeAttributeForElementIndex: q,
      getAttributeFromElementIndex: ae,
      getPrimaryTextAtIndex: Re
    };
    return P && P(_e), o(F).init(), o(F).layout(), () => {
      var H;
      L && L(_e), (H = o(F)) == null || H.destroy();
    };
  }), gn(() => {
    ee && ee();
  });
  function O(_e) {
    o(F) && _e.target && o(F).handleKeydown(_e, _e.target.classList.contains("mdc-deprecated-list-item"), Ae(_e.target));
  }
  function ie(_e) {
    o(F) && _e.target && o(F).handleFocusIn(Ae(_e.target));
  }
  function se(_e) {
    o(F) && _e.target && o(F).handleFocusOut(Ae(_e.target));
  }
  function Z(_e) {
    o(F) && _e.target && o(F).handleClick(Ae(_e.target), !r(_e.target, 'input[type="checkbox"], input[type="radio"]'), _e);
  }
  function ye(_e) {
    if (y() || T()) {
      const H = Ae(_e.target);
      if (H !== -1) {
        const D = V()[H];
        D && (y() && !D.checked || T()) && (r(_e.detail.target, 'input[type="checkbox"], input[type="radio"]') || (D.checked = !D.checked), D.activateRipple(), window.requestAnimationFrame(() => {
          D.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return k == null ? [] : [...ke().children].map((_e) => B.get(_e)).filter((_e) => _e && _e._smui_list_item_accessor);
  }
  function te(_e, H) {
    const D = V()[_e];
    return (D && D.hasClass(H)) ?? !1;
  }
  function Q(_e, H) {
    const D = V()[_e];
    D && D.addClass(H);
  }
  function le(_e, H) {
    const D = V()[_e];
    D && D.removeClass(H);
  }
  function Ee(_e, H, D) {
    const J = V()[_e];
    J && J.addAttr(H, D);
  }
  function q(_e, H) {
    const D = V()[_e];
    D && D.removeAttr(H);
  }
  function ae(_e, H) {
    const D = V()[_e];
    return D ? D.getAttr(H) : null;
  }
  function Re(_e) {
    const H = V()[_e];
    return (H && H.getPrimaryText()) ?? "";
  }
  function Ae(_e) {
    const H = n(_e, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return H && r(H, ".mdc-deprecated-list-item") ? V().map((D) => D == null ? void 0 : D.element).indexOf(H) : -1;
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
  function M() {
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
    const H = V()[_e];
    H && "focus" in H.element && H.element.focus();
  }
  function ke() {
    return k.getElement();
  }
  var xt = {
    layout: Ne,
    setEnabled: Ye,
    getTypeaheadInProgress: dt,
    getSelectedIndex: M,
    getFocusedItemIndex: j,
    focusItemAtIndex: ve,
    getElement: ke
  }, Tt = $(), un = z(Tt);
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
    fr(un, C, (H, D) => {
      Oe(
        D(H, $e(
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
            onkeydown: (J) => {
              var Me;
              O(J), (Me = e.onkeydown) == null || Me.call(e, J);
            },
            onfocusin: (J) => {
              var Me;
              ie(J), (Me = e.onfocusin) == null || Me.call(e, J);
            },
            onfocusout: (J) => {
              var Me;
              se(J), (Me = e.onfocusout) == null || Me.call(e, J);
            },
            onclick: (J) => {
              var Me;
              Z(J), (Me = e.onclick) == null || Me.call(e, J);
            },
            onSMUIAction: (J) => {
              var Me;
              ye(J), (Me = e.onSMUIAction) == null || Me.call(e, J);
            },
            children: (J, Me) => {
              var lt = $(), at = z(lt);
              Se(at, () => e.children ?? fe), w(J, lt);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => k = J,
        () => k
      );
    });
  }
  return w(t, Tt), Te(xt);
}
let $g = 0;
var ep = /* @__PURE__ */ de('<span class="mdc-deprecated-list-item__ripple"></span>'), tp = /* @__PURE__ */ de("<!><!>", 1);
function np(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(Q) {
    return Q === n;
  }
  let i = he("SMUI:list:item:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), u = g(e, "style", 3, ""), l = g(e, "nonInteractive", 19, () => he("SMUI:list:nonInteractive") ?? !1), c = g(e, "ripple", 19, () => !l()), d = g(e, "wrapper", 3, !1), h = g(e, "activated", 15, !1), f = g(e, "role", 19, () => d() ? "presentation" : he("SMUI:list:item:role")), m = g(e, "selected", 15, !1), v = g(e, "disabled", 3, !1), p = g(e, "skipRestoreFocus", 3, !1), b = g(e, "tabindex", 15, n), I = g(e, "inputId", 19, () => "SMUI-form-field-list-" + $g++), E = g(e, "component", 3, ci), A = g(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ qe(e, [
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
  oe("SMUI:generic:input:props", { id: I() }), oe("SMUI:separator:context", void 0), oe("SMUI:generic:input:mount", (Q) => {
    ("_smui_checkbox_accessor" in Q || "_smui_radio_accessor" in Q) && K(C, Q, !0);
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
    const Q = {
      _smui_list_item_accessor: !0,
      get element() {
        return Z();
      },
      get selected() {
        return m();
      },
      set selected(le) {
        m(le);
      },
      hasClass: ue,
      addClass: G,
      removeClass: B,
      getAttr: X,
      addAttr: ee,
      removeAttr: P,
      getPrimaryText: se,
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
      action: ie,
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
    return k && k(Q), () => {
      F && F(Q);
    };
  }), gn(() => {
    o(N) && window.cancelAnimationFrame(o(N));
  });
  function ue(Q) {
    return Q in y ? y[Q] : Z().classList.contains(Q);
  }
  function G(Q) {
    y[Q] || (y[Q] = !0);
  }
  function B(Q) {
    (!(Q in y) || y[Q]) && (y[Q] = !1);
  }
  function U(Q, le) {
    T[Q] != le && (le === "" || le == null ? delete T[Q] : T[Q] = le);
  }
  function X(Q) {
    return Q in x ? x[Q] ?? null : Z().getAttribute(Q);
  }
  function ee(Q, le) {
    x[Q] !== le && (x[Q] = le);
  }
  function P(Q) {
    (!(Q in x) || x[Q] != null) && (x[Q] = void 0);
  }
  function L(Q) {
    let le = !0;
    for (; Q.nextElementSibling; )
      if (Q = Q.nextElementSibling, Q.nodeType === 1 && Q.classList.contains("mdc-deprecated-list-item")) {
        const Ee = Q.attributes.getNamedItem("tabindex");
        if (Ee && Ee.value === "0") {
          le = !1;
          break;
        }
      }
    le && b(0);
  }
  function O(Q) {
    const le = Q.key === "Enter", Ee = Q.key === "Space";
    (le || Ee) && ie(Q);
  }
  function ie(Q) {
    v() || We(Z(), "SMUIAction", Q);
  }
  function se() {
    const Q = Z(), le = Q.querySelector(".mdc-deprecated-list-item__primary-text");
    if (le)
      return le.textContent ?? "";
    const Ee = Q.querySelector(".mdc-deprecated-list-item__text");
    return Ee ? Ee.textContent ?? "" : Q.textContent ?? "";
  }
  function Z() {
    return S.getElement();
  }
  var ye = { action: ie, getPrimaryText: se, getElement: Z }, V = $(), te = z(V);
  {
    let Q = /* @__PURE__ */ be(() => [
      ...l() ? [] : [
        [
          Qt,
          {
            ripple: !o(C),
            unbounded: !1,
            color: (h() || m()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: G,
            removeClass: B,
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
    })), Ee = /* @__PURE__ */ be(() => Object.entries(T).map(([ae, Re]) => `${ae}: ${Re};`).concat([u()]).join(" ")), q = /* @__PURE__ */ be(() => p() || void 0);
    fr(te, E, (ae, Re) => {
      Oe(
        Re(ae, $e(
          {
            get tag() {
              return A();
            },
            get use() {
              return o(Q);
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
              ie(Ae), (Ne = e.onclick) == null || Ne.call(e, Ae);
            },
            onkeydown: (Ae) => {
              var Ne;
              O(Ae), (Ne = e.onkeydown) == null || Ne.call(e, Ae);
            },
            children: (Ae, Ne) => {
              var Ye = tp(), dt = z(Ye);
              {
                var M = (ve) => {
                  var ke = ep();
                  w(ve, ke);
                };
                re(dt, (ve) => {
                  c() && ve(M);
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
  return w(t, V), Te(ye);
}
let rp = 0;
var ip = /* @__PURE__ */ de("<div><!></div>");
function ap(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "id", 19, () => "SMUI-select-helper-text-" + rp++), a = g(e, "persistent", 3, !1), s = g(e, "validationMsg", 3, !1), u = /* @__PURE__ */ qe(e, [
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
    new Kg({
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
  var T = { getElement: y }, x = ip();
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
      var F = $(), ue = z(F);
      Se(ue, () => e.children ?? fe), w(k, F);
    }, W = (k) => {
      var F = Et();
      Le(() => Ze(F, o(f))), w(k, F);
    };
    re(C, (k) => {
      o(f) == null ? k(N) : k(W, !1);
    });
  }
  return Oe(x, (k) => l = k, () => l), Fe(x, (k, F) => Y == null ? void 0 : Y(k, F), n), w(t, x), Te(T);
}
let sp = 0;
var op = /* @__PURE__ */ de("<input/>"), lp = /* @__PURE__ */ de('<span class="mdc-select__ripple"></span>'), up = /* @__PURE__ */ de('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function cp(t, e) {
  xe(e, !0);
  const n = () => Hn(ke, "$selectedTextStore", r), [r, i] = Zn();
  let a = () => {
  };
  function s(R) {
    return R === a;
  }
  let u = g(e, "use", 19, () => []), l = g(e, "class", 3, ""), c = g(e, "style", 3, ""), d = g(e, "ripple", 3, !0), h = g(e, "disabled", 3, !1), f = g(e, "variant", 3, "standard"), m = g(e, "noLabel", 3, !1), v = g(e, "label", 3, void 0), p = g(e, "value", 15), b = g(e, "key", 3, (R) => R), I = g(e, "dirty", 15, !1), E = g(e, "invalid", 15, a), A = g(e, "updateInvalid", 19, () => s(E())), _ = g(e, "required", 3, !1), S = g(e, "inputId", 19, () => "SMUI-select-" + sp++), y = g(e, "hiddenInput", 3, !1), T = g(e, "withLeadingIcon", 3, a), x = g(e, "anchor$use", 19, () => []), C = g(e, "anchor$class", 3, ""), N = g(e, "selectedTextContainer$use", 19, () => []), W = g(e, "selectedTextContainer$class", 3, ""), k = g(e, "selectedText$use", 19, () => []), F = g(e, "selectedText$class", 3, ""), ue = g(e, "dropdownIcon$use", 19, () => []), G = g(e, "dropdownIcon$class", 3, ""), B = g(e, "menu$class", 3, ""), U = /* @__PURE__ */ qe(e, [
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
  let ee, P = /* @__PURE__ */ Ie(void 0), L = Ce({}), O = Ce({}), ie, se = Ce({}), Z = /* @__PURE__ */ Ie(-1);
  const ye = /* @__PURE__ */ be(() => U.menu$id ?? S() + "-menu");
  let V = /* @__PURE__ */ Ie(void 0), te = he("SMUI:addLayoutListener"), Q, le = /* @__PURE__ */ Ie(!1), Ee = Ce({}), q = /* @__PURE__ */ Ie(void 0), ae = /* @__PURE__ */ Ie(void 0), Re = /* @__PURE__ */ Ie(!1), Ae, Ne = he("SMUI:select:context"), Ye, dt, M, j, ve;
  oe("SMUI:list:role", ""), oe("SMUI:list:nav", !1);
  const ke = Nt("");
  oe("SMUI:select:selectedText", ke);
  const xt = Nt(p());
  we(() => {
    Mn(xt, p());
  }), oe("SMUI:select:value", xt), we(() => {
    o(P) && o(P).getValue() !== b()(p()) && o(P).setValue(b()(p()));
  });
  let Tt = o(Z);
  we(() => {
    if (Tt !== o(Z))
      if (Tt = o(Z), o(P))
        o(P).setSelectedIndex(
          o(Z),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = Gt();
        p() !== R[o(Z)] && p(R[o(Z)]);
      }
  }), we(() => {
    o(P) && o(P).getDisabled() !== h() && o(P).setDisabled(h());
  }), we(() => {
    o(P) && I() && o(P).isValid() !== !E() && (A() ? E(!o(P).isValid()) : o(P).setValid(!E()));
  }), we(() => {
    o(P) && o(P).getRequired() !== _() && o(P).setRequired(_());
  }), te && (Q = te(hi)), oe("SMUI:select:leading-icon:mount", (R) => {
    Ye = R;
  }), oe("SMUI:select:leading-icon:unmount", () => {
    Ye = void 0;
  }), oe("SMUI:list:mount", (R) => {
    Ae = R;
  }), oe("SMUI:select:helper-text:id", (R) => {
    K(V, R, !0);
  }), oe("SMUI:select:helper-text:mount", (R) => {
    dt = R;
  }), oe("SMUI:select:helper-text:unmount", () => {
    K(V, void 0), dt = void 0;
  }), ot(() => (K(
    P,
    new Xg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          Mn(ke, R);
        },
        isSelectAnchorFocused: () => document.activeElement === ie,
        getSelectAnchorAttr: lt,
        setSelectAnchorAttr: at,
        removeSelectAnchorAttr: wt,
        addMenuClass: J,
        removeMenuClass: Me,
        openMenu: () => {
          K(le, !0);
        },
        closeMenu: () => {
          K(le, !1);
        },
        getAnchorElement: () => ie,
        setMenuAnchorElement: (R) => {
          K(q, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          K(ae, R, !0);
        },
        setMenuWrapFocus: (R) => {
          K(Re, R, !0);
        },
        getSelectedIndex: () => o(Z),
        setSelectedIndex: (R) => {
          Tt = R, K(Z, R, !0), p(Gt()[o(Z)]);
        },
        focusMenuItemAtIndex: (R) => {
          Ae.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Ae.items.length,
        getMenuItemValues: () => Gt().map(b()),
        getMenuItemTextAtIndex: (R) => Ae.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Ae.typeaheadInProgress,
        typeaheadMatchItem: (R, ge) => Ae.typeaheadMatchItem(R, ge),
        // getCommonAdapterMethods
        addClass: _e,
        removeClass: H,
        hasClass: un,
        setRippleCenter: (R) => j && j.setRippleCenter(R),
        activateBottomLine: () => j && j.activate(),
        deactivateBottomLine: () => j && j.deactivate(),
        notifyChange: (R) => {
          var ge;
          I(!0), A() && E(!((ge = o(P)) != null && ge.isValid())), We(Un(), "SMUISelectChange", { value: p(), index: o(Z) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ve,
        notchOutline: (R) => ve && ve.notch(R),
        closeOutline: () => ve && ve.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!M,
        floatLabel: (R) => M && M.float(R),
        getLabelWidth: () => M ? M.getWidth() : 0,
        setLabelRequired: (R) => M && M.setRequired(R)
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
  ), K(Z, Gt().indexOf(p()), !0), o(P).init(), Ut(X), () => {
    var R;
    (R = o(P)) == null || R.destroy();
  })), gn(() => {
    Q && Q();
  });
  function un(R) {
    return R in L ? L[R] : Un().classList.contains(R);
  }
  function _e(R) {
    L[R] || (L[R] = !0);
  }
  function H(R) {
    (!(R in L) || L[R]) && (L[R] = !1);
  }
  function D(R, ge) {
    O[R] != ge && (ge === "" || ge == null ? delete O[R] : O[R] = ge);
  }
  function J(R) {
    Ee[R] || (Ee[R] = !0);
  }
  function Me(R) {
    (!(R in Ee) || Ee[R]) && (Ee[R] = !1);
  }
  function lt(R) {
    return R in se ? se[R] ?? null : Un().getAttribute(R);
  }
  function at(R, ge) {
    se[R] !== ge && (se[R] = ge);
  }
  function wt(R) {
    (!(R in se) || se[R] != null) && (se[R] = void 0);
  }
  function Gt() {
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
  function Ut(R) {
    var ge;
    (ge = o(P)) == null || ge.setUseDefaultValidation(R);
  }
  function Nn() {
    ie.focus();
  }
  function hi() {
    var R;
    (R = o(P)) == null || R.layout();
  }
  function Un() {
    return ee;
  }
  var He = {
    getUseDefaultValidation: mt,
    setUseDefaultValidation: Ut,
    focus: Nn,
    layout: hi,
    getElement: Un
  }, tt = up(), et = z(tt);
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
    () => ri(U, [
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
  var Mt = ce(et);
  {
    var cn = (R) => {
      var ge = op();
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
    re(Mt, (R) => {
      y() && R(cn);
    });
  }
  var Ke = me(Mt, 2), pt = (R) => {
    var ge;
    ie.focus(), o(P) && o(P).handleClick(hr(R)), (ge = e.anchor$onclick) == null || ge.call(e, R);
  }, Ot = (R) => {
    var ge;
    o(P) && o(P).handleKeydown(R), (ge = e.onkeydown) == null || ge.call(e, R);
  }, Qe = (R) => {
    var ge;
    o(P) && o(P).handleBlur(), We(Un(), "blur", R), (ge = e.anchor$onblur) == null || ge.call(e, R);
  }, Lt = (R) => {
    var ge;
    o(P) && o(P).handleFocus(), We(Un(), "focus", R), (ge = e.anchor$onfocus) == null || ge.call(e, R);
  };
  Ge(
    Ke,
    (R, ge) => ({
      class: R,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(ye),
      "aria-expanded": o(le) ? "true" : "false",
      "aria-describedby": o(V),
      role: "combobox",
      tabindex: "0",
      ...se,
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
  var jt = ce(Ke);
  {
    var Kt = (R) => {
      var ge = lp();
      w(R, ge);
    };
    re(jt, (R) => {
      f() === "filled" && R(Kt);
    });
  }
  var _t = me(jt, 2);
  {
    var Dt = (R) => {
      {
        let ge = /* @__PURE__ */ be(() => S() + "-smui-label"), ut = /* @__PURE__ */ be(() => n() !== ""), Rt = /* @__PURE__ */ be(() => ct(U, "label$"));
        Oe(
          ds(R, $e(
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
              children: (Qn, Jn) => {
                var $i = $(), vi = z($i);
                {
                  var Ur = (Fr) => {
                  }, Ms = (Fr) => {
                    var Da = $(), ea = z(Da);
                    {
                      var tl = (mr) => {
                        var kr = Et();
                        Le(() => Ze(kr, v())), w(mr, kr);
                      }, Ha = (mr) => {
                        var kr = $(), Ds = z(kr);
                        Se(Ds, v), w(mr, kr);
                      };
                      re(
                        ea,
                        (mr) => {
                          typeof v() == "string" ? mr(tl) : mr(Ha, !1);
                        },
                        !0
                      );
                    }
                    w(Fr, Da);
                  };
                  re(vi, (Fr) => {
                    v() == null ? Fr(Ur) : Fr(Ms, !1);
                  });
                }
                w(Qn, $i);
              },
              $$slots: { default: !0 }
            }
          )),
          (Qn) => M = Qn,
          () => M
        );
      }
    };
    re(_t, (R) => {
      f() !== "outlined" && !m() && v() != null && R(Dt);
    });
  }
  var an = me(_t, 2);
  {
    var bt = (R) => {
      {
        let ge = /* @__PURE__ */ be(() => m() || v() == null), ut = /* @__PURE__ */ be(() => ct(U, "outline$"));
        Oe(
          qc(R, $e(
            {
              get noLabel() {
                return o(ge);
              }
            },
            () => o(ut),
            {
              children: (Rt, Qn) => {
                var Jn = $(), $i = z(Jn);
                {
                  var vi = (Ur) => {
                    {
                      let Ms = /* @__PURE__ */ be(() => S() + "-smui-label"), Fr = /* @__PURE__ */ be(() => n() !== ""), Da = /* @__PURE__ */ be(() => ct(U, "label$"));
                      Oe(
                        ds(Ur, $e(
                          {
                            get id() {
                              return o(Ms);
                            },
                            get floatAbove() {
                              return o(Fr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => o(Da),
                          {
                            children: (ea, tl) => {
                              var Ha = $(), mr = z(Ha);
                              {
                                var kr = (ta) => {
                                }, Ds = (ta) => {
                                  var nl = $(), Cd = z(nl);
                                  {
                                    var xd = (mi) => {
                                      var na = Et();
                                      Le(() => Ze(na, v())), w(mi, na);
                                    }, Td = (mi) => {
                                      var na = $(), wd = z(na);
                                      Se(wd, v), w(mi, na);
                                    };
                                    re(
                                      Cd,
                                      (mi) => {
                                        typeof v() == "string" ? mi(xd) : mi(Td, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(ta, nl);
                                };
                                re(mr, (ta) => {
                                  v() == null ? ta(kr) : ta(Ds, !1);
                                });
                              }
                              w(ea, Ha);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ea) => M = ea,
                        () => M
                      );
                    }
                  };
                  re($i, (Ur) => {
                    !m() && v() != null && Ur(vi);
                  });
                }
                w(Rt, Jn);
              },
              $$slots: { default: !0 }
            }
          )),
          (Rt) => ve = Rt,
          () => ve
        );
      }
    };
    re(an, (R) => {
      f() === "outlined" && R(bt);
    });
  }
  var Pr = me(an, 2);
  Se(Pr, () => e.leadingIcon ?? fe);
  var bn = me(Pr, 2);
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
  var Ji = ce(vr);
  Fe(vr, (R, ge) => Y == null ? void 0 : Y(R, ge), k), Fe(bn, (R, ge) => Y == null ? void 0 : Y(R, ge), N);
  var _n = me(bn, 2);
  Ge(_n, (R, ge) => ({ class: R, ...ge }), [
    () => Ue({
      "mdc-select__dropdown-icon": !0,
      [G()]: !0
    }),
    () => ct(U, "dropdownIcon$")
  ]), Fe(_n, (R, ge) => Y == null ? void 0 : Y(R, ge), ue);
  var Yn = me(_n, 2);
  {
    var Fn = (R) => {
      {
        let ge = /* @__PURE__ */ be(() => ct(U, "ripple$"));
        Oe(jc(R, $e(() => o(ge))), (ut) => j = ut, () => j);
      }
    };
    re(Yn, (R) => {
      f() !== "outlined" && d() && R(Fn);
    });
  }
  Oe(Ke, (R) => ie = R, () => ie), Fe(Ke, (R, ge) => Y == null ? void 0 : Y(R, ge), x);
  var Nr = me(Ke, 2);
  {
    let R = /* @__PURE__ */ be(() => Ue({
      "mdc-select__menu": !0,
      ...Ee,
      [B()]: !0
    })), ge = /* @__PURE__ */ be(() => ct(U, "menu$"));
    Qg(Nr, $e(
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
          return o(ae);
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
            let Qn = /* @__PURE__ */ be(() => ct(U, "list$"));
            Jg(ut, $e(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Re);
                }
              },
              () => o(Qn),
              {
                get selectedIndex() {
                  return o(Z);
                },
                set selectedIndex(Jn) {
                  K(Z, Jn, !0);
                },
                children: (Jn, $i) => {
                  var vi = $(), Ur = z(vi);
                  Se(Ur, () => e.children ?? fe), w(Jn, vi);
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
  Oe(et, (R) => ee = R, () => ee), Fe(et, (R, ge) => Qt == null ? void 0 : Qt(R, ge), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: _e,
    removeClass: H,
    addStyle: D
  })), Fe(et, (R, ge) => Ks == null ? void 0 : Ks(R, ge), () => ({ addClass: _e, removeClass: H })), Fe(et, (R, ge) => Y == null ? void 0 : Y(R, ge), u);
  var Rs = me(et, 2);
  {
    var Sd = (R) => {
      {
        let ge = /* @__PURE__ */ be(() => ct(U, "helperText$"));
        ap(R, $e(() => o(ge), {
          children: (ut, Rt) => {
            var Qn = $(), Jn = z(Qn);
            Se(Jn, () => e.helperText ?? fe), w(ut, Qn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    re(Rs, (R) => {
      e.helperText && R(Sd);
    });
  }
  Le(() => Ze(Ji, n())), w(t, tt);
  var Ad = Te(He);
  return i(), Ad;
}
function dp(t, e) {
  xe(e, !0);
  const n = () => Hn(d, "$selectedValue", r), [r, i] = Zn();
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
  ot(f), gn(f);
  function f() {
    o(h) && l && Mn(c, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var v = { getElement: m };
  Oe(
    np(t, $e(
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
          var E = $(), A = z(E);
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
function fp(t, e) {
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
  cp(t, {
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
      var f = $(), m = z(f);
      ir(m, 17, n, Ci, (v, p, b) => {
        {
          let I = /* @__PURE__ */ be(() => c(b));
          dp(v, {
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
function hp(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function vp(t) {
  return t ? t.scrollTop === 0 : !1;
}
function mp(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function gp(t) {
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
var pp = (
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
}, oa = {
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
}, Zs = {
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
var fs;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(fs || (fs = {}));
var bp = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = oa.CLOSE_ACTION, r.scrimClickAction = oa.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = oa.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new pp(), r.contentScrollHandler = function() {
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
        return oa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Zs;
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
        }, Zs.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(rt.CLOSING), this.adapter.removeClass(rt.OPEN), this.adapter.removeBodyClass(rt.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, Zs.DIALOG_ANIMATION_CLOSE_TIME_MS));
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
      this.animFrame.request(fs.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, oa.SCRIM_SELECTOR);
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
      this.animFrame.request(fs.POLL_SCROLL_POS, function() {
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
  }(Vt)
), _p = /* @__PURE__ */ de('<div class="mdc-dialog__surface-scrim"></div>'), yp = /* @__PURE__ */ de('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function Kc(t, e) {
  xe(e, !0);
  const n = () => Hn(k, "$aboveFullscreenShown", r), [r, i] = Zn(), { FocusTrap: a } = Bm, { closest: s, matches: u } = Ra;
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
  ]), S, y = /* @__PURE__ */ Ie(void 0), T = new ui(), x = Ce({}), C, N = Nt(!1), W = he("SMUI:dialog:aboveFullscreen"), k = he("SMUI:dialog:aboveFullscreenShown") ?? Nt(!1), F = he("SMUI:addLayoutListener"), ue, G = [], B = (H) => (G.push(H), () => {
    const D = G.indexOf(H);
    D >= 0 && G.splice(D, 1);
  });
  oe("SMUI:dialog:actions:reversed", N), oe("SMUI:addLayoutListener", B), oe("SMUI:dialog:selection", h()), oe("SMUI:dialog:aboveFullscreen", W || p()), oe("SMUI:dialog:aboveFullscreenShown", k), b() && oe("SMUI:icon-button:context", "dialog:sheet"), we(() => {
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
  }), ot(() => (C = new a(S, { initialFocusEl: se() ?? void 0 }), K(
    y,
    new bp({
      addBodyClass: (H) => document.body.classList.add(H),
      addClass: ee,
      areButtonsStacked: () => gp(L()),
      clickDefaultButton: () => {
        const H = O();
        H && H.click();
      },
      eventTargetMatches: (H, D) => H ? u(H, D) : !1,
      getActionFromEvent: (H) => {
        if (!H.target)
          return "";
        const D = s(H.target, "[data-mdc-dialog-action]");
        return D && D.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: se,
      hasClass: X,
      isContentScrollable: () => hp(ie()),
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
      registerContentEventHandler: (H, D) => {
        const J = ie();
        J instanceof HTMLElement && T.on(J, H, D);
      },
      deregisterContentEventHandler: (H, D) => {
        const J = ie();
        J instanceof HTMLElement && T.off(J, H, D);
      },
      isScrollableContentAtTop: () => vp(ie()),
      isScrollableContentAtBottom: () => mp(ie()),
      registerWindowEventHandler: (H, D) => T.on(window, H, D),
      deregisterWindowEventHandler: (H, D) => T.off(window, H, D)
    }),
    !0
  ), o(y).init(), () => {
    var H;
    (H = o(y)) == null || H.destroy(), T.clear();
  })), gn(() => {
    ue && ue();
  });
  function X(H) {
    return H in x ? x[H] : Ee().classList.contains(H);
  }
  function ee(H) {
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
  function ie() {
    return Ee().querySelector(".mdc-dialog__content");
  }
  function se() {
    return Ee().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function Z() {
    W && Mn(k, !0), requestAnimationFrame(() => {
      G.forEach((H) => H());
    });
  }
  function ye() {
    G.forEach((H) => H());
  }
  function V() {
    W && Mn(k, !1);
  }
  function te() {
    return d();
  }
  function Q(H) {
    d(H);
  }
  function le() {
    var H;
    return (H = o(y)) == null ? void 0 : H.layout();
  }
  function Ee() {
    return S;
  }
  var q = { isOpen: te, setOpen: Q, layout: le, getElement: Ee }, ae = yp();
  lr("resize", ns, () => d() && o(y) && o(y).layout()), lr("orientationchange", ns, () => d() && o(y) && o(y).layout()), lr("keydown", Uo.body, (H) => o(y) && o(y).handleDocumentKeydown(H));
  var Re = z(ae), Ae = (H) => {
    var D;
    Z(), (D = e.onSMUIDialogOpening) == null || D.call(e, H);
  }, Ne = (H) => {
    var D;
    ye(), (D = e.onSMUIDialogOpened) == null || D.call(e, H);
  }, Ye = (H) => {
    var D;
    V(), (D = e.onSMUIDialogClosed) == null || D.call(e, H);
  }, dt = (H) => {
    var D;
    o(y) && o(y).handleClick(H), (D = e.onclick) == null || D.call(e, H);
  }, M = (H) => {
    var D;
    o(y) && o(y).handleKeydown(H), (D = e.onkeydown) == null || D.call(e, H);
  };
  Ge(
    Re,
    (H, D) => ({
      class: H,
      role: "alertdialog",
      "aria-modal": "true",
      ...D,
      onSMUIDialogOpening: Ae,
      onSMUIDialogOpened: Ne,
      onSMUIDialogClosed: Ye,
      onclick: dt,
      onkeydown: M
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
      () => ri(_, ["container$", "surface$"])
    ]
  );
  var j = ce(Re);
  Ge(j, (H, D) => ({ class: H, ...D }), [
    () => Ue({ "mdc-dialog__container": !0, [E()]: !0 }),
    () => ct(_, "container$")
  ]);
  var ve = ce(j);
  Ge(ve, (H, D) => ({ class: H, role: "alertdialog", "aria-modal": "true", ...D }), [
    () => Ue({ "mdc-dialog__surface": !0, [A()]: !0 }),
    () => ct(_, "surface$")
  ]);
  var ke = ce(ve);
  Se(ke, () => e.children ?? fe);
  var xt = me(ke, 2);
  {
    var Tt = (H) => {
      var D = _p();
      lr("transitionend", D, () => o(y) && o(y).handleSurfaceScrimTransitionEnd()), w(H, D);
    };
    re(xt, (H) => {
      p() && H(Tt);
    });
  }
  Oe(Re, (H) => S = H, () => S), Fe(Re, (H, D) => Y == null ? void 0 : Y(H, D), l);
  var un = me(Re, 2);
  Se(un, () => e.over ?? fe), w(t, ae);
  var _e = Te(q);
  return i(), _e;
}
function Ip(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Qi(t, $e(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => n,
      {
        children: (s, u) => {
          var l = $(), c = z(l);
          Se(c, () => e.children ?? fe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
function Xo(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Qi(t, $e({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (s, u) => {
        var l = $(), c = z(l);
        Se(c, () => e.children ?? fe), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
function Zc(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Qi(t, $e(
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
          var l = $(), c = z(l);
          Se(c, () => e.children ?? fe), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var Ep = /* @__PURE__ */ de('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function Sp(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "onClose", 3, () => {
  });
  Kc(t, {
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
      var s = Ep(), u = z(s), l = ce(u);
      Se(l, () => e.title ?? fe);
      var c = me(u, 2);
      Xo(c, {
        id: "large-scroll-content",
        children: (h, f) => {
          var m = $(), v = z(m);
          Se(v, () => e.content ?? fe), w(h, m);
        },
        $$slots: { default: !0 }
      });
      var d = me(c, 2);
      Zc(d, {
        children: (h, f) => {
          var m = $(), v = z(m);
          Se(v, () => e.actions ?? fe), w(h, m);
        },
        $$slots: { default: !0 }
      }), w(i, s);
    },
    $$slots: { default: !0 }
  }), Te();
}
const Ko = Nt({
  component: null,
  props: {},
  isOpen: !1
}), Ap = Nt([]);
Ap.subscribe;
const Ql = Ce({ freeze: !1 });
function Cp(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ie(void 0), r = /* @__PURE__ */ Ie(!1);
  const i = Ko.subscribe((l) => {
    K(n, l, !0), K(r, l.isOpen, !0), Ql.freeze = !1;
  });
  ot(() => () => i()), we(() => {
    Ql.freeze = o(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = $(), s = z(a);
  {
    var u = (l) => {
      var c = $(), d = z(c);
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
    re(s, (l) => {
      o(n).isOpen && o(n).component && l(u);
    });
  }
  w(t, a), Te();
}
function Jl(t, e = {}) {
  return new Promise((n) => {
    Ko.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function Ys(t, e) {
  Ko.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
var xp = /* @__PURE__ */ de('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function $l(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "title", 3, ""), i = g(e, "message", 3, ""), a = g(e, "confirmActionText", 3, "OK"), s = g(e, "confirmActionColor", 3, "primary"), u = g(e, "cancelActionText", 3, "Cancel"), l = g(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    Ys("confirm");
  }
  function d() {
    Ys("cancel");
  }
  Lp(t, {
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
    onClose: () => Ys("cancel"),
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
      Xo(f, {
        children: (m, v) => {
          var p = xp(), b = ce(p);
          Le(() => Ze(b, i())), w(m, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Te();
}
var Tp = /* @__PURE__ */ de('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), wp = /* @__PURE__ */ de("<!> <!>", 1), Op = /* @__PURE__ */ de('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function Lp(t, e) {
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
    Kc(t, {
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
        var y = Op(), T = z(y);
        Ip(T, {
          children: (W, k) => {
            var F = Tp(), ue = ce(F), G = ce(ue), B = me(ue, 2);
            {
              var U = (X) => {
                qb(X, {
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
              re(B, (X) => {
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
        Xo(x, {
          id: "dialog__content",
          children: (W, k) => {
            var F = $(), ue = z(F);
            Se(ue, () => e.content ?? fe), w(W, F);
          },
          $$slots: { default: !0 }
        });
        var C = me(x, 2), N = ce(C);
        Zc(N, {
          class: "oscd-dialog__actions",
          children: (W, k) => {
            var F = wp(), ue = z(F);
            {
              var G = (U) => {
                cs(U, {
                  type: "button",
                  action: "cancel",
                  color: "secondary",
                  children: (X, ee) => {
                    var P = Et();
                    Le(() => Ze(P, s())), w(X, P);
                  },
                  $$slots: { default: !0 }
                });
              };
              re(ue, (U) => {
                s() && U(G);
              });
            }
            var B = me(ue, 2);
            cs(B, {
              type: "button",
              action: "confirm",
              get disabled() {
                return h();
              },
              get style() {
                return o(E);
              },
              children: (U, X) => {
                var ee = Et();
                Le(() => Ze(ee, i())), w(U, ee);
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
const Ft = [];
for (let t = 0; t < 256; ++t)
  Ft.push((t + 256).toString(16).slice(1));
function Rp(t, e = 0) {
  return (Ft[t[e + 0]] + Ft[t[e + 1]] + Ft[t[e + 2]] + Ft[t[e + 3]] + "-" + Ft[t[e + 4]] + Ft[t[e + 5]] + "-" + Ft[t[e + 6]] + Ft[t[e + 7]] + "-" + Ft[t[e + 8]] + Ft[t[e + 9]] + "-" + Ft[t[e + 10]] + Ft[t[e + 11]] + Ft[t[e + 12]] + Ft[t[e + 13]] + Ft[t[e + 14]] + Ft[t[e + 15]]).toLowerCase();
}
let Qs;
const Mp = new Uint8Array(16);
function Dp() {
  if (!Qs) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Qs = crypto.getRandomValues.bind(crypto);
  }
  return Qs(Mp);
}
const Hp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), eu = { randomUUID: Hp };
function Pp(t, e, n) {
  var i;
  if (eu.randomUUID && !e && !t)
    return eu.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Dp();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return Rp(r);
}
var Np = /* @__PURE__ */ de('<span class="oscd-icon"><!></span>');
function Xt(t, e) {
  var n = Np(), r = ce(n);
  Se(r, () => e.children ?? fe), w(t, n);
}
var Up = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Fp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = Up();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var kp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Zo(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = kp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Bp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Vp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = Bp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Gp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function jp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = Gp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var qp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function zp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = qp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Wp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Xp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = Wp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Kp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Yc(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = Kp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Zp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Qc(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = Zp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Yp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function Qp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = Yp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var Jp = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function $p(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = Jp();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
ef();
var eb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function tb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = eb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var nb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function rb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = nb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var ib = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function ab(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = ib();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var sb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function ob(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Xt(t, {
    children: (r, i) => {
      var a = sb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var lb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function ub(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Xt(t, {
    children: (r, i) => {
      var a = lb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
var cb = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function db(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Xt(t, {
    children: (r, i) => {
      var a = cb();
      Le(() => vt(a, n())), w(r, a);
    }
  });
}
function fb(t, e) {
  e(t.target.value);
}
var hb = /* @__PURE__ */ de('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function vb(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = hb(), a = ce(i);
  a.__change = [fb, r];
  var s = me(a, 2), u = ce(s);
  Le(() => Ze(u, n())), ba(a, r), w(t, i), Te();
}
wn(["change"]);
function mb(t, e) {
  e(t.target.value);
}
var gb = /* @__PURE__ */ de('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function pb(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = gb(), a = ce(i);
  a.__change = [mb, r];
  var s = me(a, 2), u = ce(s);
  Le(() => Ze(u, n())), ba(a, r), w(t, i), Te();
}
wn(["change"]);
function bb(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var _b = /* @__PURE__ */ de('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Ia(t, e) {
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
  gn(y), we(() => {
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
  var T = _b();
  T.__keydown = [bb, n, p, b];
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
var la = {
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
}, tu = {
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
var yb = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = yn.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return la;
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
        return tu;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(la.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(la.DISABLED) : this.adapter.removeClass(la.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, tu.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = yn.TRANSITION_STATE_UNCHECKED, a = la.SELECTED;
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
  }(Vt)
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
var dn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, On = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ua = {
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
var Ib = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, pe(pe({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return On;
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
      this.determinate = !this.adapter.hasClass(dn.INDETERMINATE_CLASS), this.adapter.addClass(dn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
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
        this.adapter.removeClass(dn.INDETERMINATE_CLASS), this.adapter.setAttribute(On.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(On.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(On.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(dn.INDETERMINATE_CLASS), this.adapter.removeAttribute(On.ARIA_VALUENOW), this.adapter.removeAttribute(On.ARIA_VALUEMAX), this.adapter.removeAttribute(On.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(On.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(dn.CLOSED_CLASS), this.adapter.removeClass(dn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(On.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(dn.CLOSED_CLASS), this.adapter.setAttribute(On.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(dn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(dn.CLOSED_CLASS) && this.adapter.addClass(dn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(dn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(dn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? qg(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(On.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ua.PRIMARY_HALF, i = n * ua.PRIMARY_FULL, a = n * ua.SECONDARY_QUARTER, s = n * ua.SECONDARY_HALF, u = n * ua.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Vt)
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
var nr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, nu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, jr = {
  ARIA_SELECTED: nu.ARIA_SELECTED,
  ARIA_SORT: nu.ARIA_SORT
}, hn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(hn || (hn = {}));
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
var Eb = (
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
      return mc(this, void 0, void 0, function() {
        return qo(this, function(n) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, nr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, jr.ARIA_SORT, hn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, hn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, jr.ARIA_SORT), l = hn.NONE;
      u === hn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, hn.DESCENDING), l = hn.DESCENDING) : u === hn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, nr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, hn.ASCENDING), l = hn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, hn.ASCENDING), l = hn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(nr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(nr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, nr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, jr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, nr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, jr.ARIA_SELECTED, "false"));
    }, e;
  }(Vt)
), Sb = /* @__PURE__ */ de('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Ab = /* @__PURE__ */ de("<div><div><table><!></table></div> <!> <!></div>");
function Cb(t, e) {
  xe(e, !0);
  const n = () => Hn(F, "$progressClosed", r), [r, i] = Zn(), { closest: a } = Ra;
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
  ]), A, _ = /* @__PURE__ */ Ie(void 0), S, y = /* @__PURE__ */ Ie(void 0), T = /* @__PURE__ */ Ie(void 0), x = Ce({}), C = /* @__PURE__ */ Ie(Ce({ height: "auto", top: "initial" })), N = he("SMUI:addLayoutListener"), W, k = !1, F = Nt(!1), ue = Nt(d());
  we(() => {
    Mn(ue, d());
  });
  let G = Nt(h());
  we(() => {
    Mn(G, h());
  }), oe("SMUI:checkbox:context", "data-table"), oe("SMUI:linear-progress:context", "data-table"), oe("SMUI:linear-progress:closed", F), oe("SMUI:data-table:sortable", c()), oe("SMUI:data-table:sort", ue), oe("SMUI:data-table:sortDirection", G), oe("SMUI:data-table:sortAscendingAriaLabel", f()), oe("SMUI:data-table:sortDescendingAriaLabel", m()), N && (W = N(se));
  let B;
  we(() => {
    e.progress && o(_) && B !== n() && (B = n(), n() ? o(_).hideProgress() : o(_).showProgress());
  }), oe("SMUI:checkbox:mount", () => {
    o(_) && k && o(_).layout();
  }), oe("SMUI:data-table:header:mount", (M) => {
    K(y, M, !0);
  }), oe("SMUI:data-table:header:unmount", () => {
    K(y, void 0);
  }), oe("SMUI:data-table:body:mount", (M) => {
    K(T, M, !0);
  }), oe("SMUI:data-table:body:unmount", () => {
    K(T, void 0);
  }), ot(() => (K(
    _,
    new Eb({
      addClass: X,
      removeClass: ee,
      getHeaderCellElements: () => {
        var M;
        return ((M = o(y)) == null ? void 0 : M.cells.map((j) => j.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var M;
        return ((M = o(y)) == null ? void 0 : M.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (M, j) => {
        var ve;
        return ((ve = o(y)) == null ? void 0 : ve.orderedCells[M].getAttr(j)) ?? null;
      },
      setAttributeByHeaderCellIndex: (M, j, ve) => {
        var ke;
        (ke = o(y)) == null || ke.orderedCells[M].addAttr(j, ve);
      },
      setClassNameByHeaderCellIndex: (M, j) => {
        var ve;
        (ve = o(y)) == null || ve.orderedCells[M].addClass(j);
      },
      removeClassNameByHeaderCellIndex: (M, j) => {
        var ve;
        (ve = o(y)) == null || ve.orderedCells[M].removeClass(j);
      },
      notifySortAction: (M) => {
        d(M.columnId), h(M.sortValue), We(Z(), "SMUIDataTableSorted", M);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const M = Z().querySelector(".mdc-data-table__header-row");
        if (!M)
          throw new Error("MDCDataTable: Table header element not found.");
        return M.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (M) => {
        K(C, M, !0);
      },
      addClassAtRowIndex: (M, j) => {
        var ve;
        (ve = o(T)) == null || ve.orderedRows[M].addClass(j);
      },
      getRowCount: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.length) ?? 0;
      },
      getRowElements: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.map((j) => j.element)) ?? [];
      },
      getRowIdAtIndex: (M) => {
        var j;
        return ((j = o(T)) == null ? void 0 : j.orderedRows[M].rowId) ?? null;
      },
      getRowIndexByChildElement: (M) => {
        var j;
        return ((j = o(T)) == null ? void 0 : j.orderedRows.map((ve) => ve.element).indexOf(a(M, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.filter((j) => j.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (M) => {
        var ve;
        const j = (ve = o(T)) == null ? void 0 : ve.orderedRows[M].checkbox;
        return j ? j.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var j;
        const M = (j = o(y)) == null ? void 0 : j.checkbox;
        return M ? M.checked : !1;
      },
      isRowsSelectable: () => !!Z().querySelector(".mdc-data-table__row-checkbox") || !!Z().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (M) => {
        var ve;
        const j = (ve = o(T)) == null ? void 0 : ve.orderedRows[M.rowIndex];
        j && We(Z(), "SMUIDataTableSelectionChanged", {
          row: j.element,
          rowId: j.rowId,
          rowIndex: M.rowIndex,
          selected: M.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), We(Z(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), We(Z(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (M) => We(Z(), "SMUIDataTableClickRow", M),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (M, j) => {
        var ve;
        (ve = o(T)) == null || ve.orderedRows[M].removeClass(j);
      },
      setAttributeAtRowIndex: (M, j, ve) => {
        var ke;
        (ke = o(T)) == null || ke.orderedRows[M].addAttr(j, ve);
      },
      setHeaderRowCheckboxChecked: (M) => {
        var ve;
        const j = (ve = o(y)) == null ? void 0 : ve.checkbox;
        j && (j.checked = M);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (M, j) => {
        var ke;
        const ve = (ke = o(T)) == null ? void 0 : ke.orderedRows[M].checkbox;
        ve && (ve.checked = j);
      },
      setSortStatusLabelByHeaderCellIndex: (M, j) => {
      }
    }),
    !0
  ), o(_).init(), o(_).layout(), k = !0, () => {
    var M;
    (M = o(_)) == null || M.destroy();
  })), gn(() => {
    W && W();
  });
  function U(M) {
    o(_) && o(_).handleRowCheckboxChange(M);
  }
  function X(M) {
    x[M] || (x[M] = !0);
  }
  function ee(M) {
    (!(M in x) || x[M]) && (x[M] = !1);
  }
  function P(M) {
    var ve;
    const j = (ve = o(y)) == null ? void 0 : ve.checkbox;
    j && (j.indeterminate = M);
  }
  function L(M) {
    if (!o(_) || !M.detail.target)
      return;
    const j = a(M.detail.target, ".mdc-data-table__header-cell--with-sort");
    j && ie(j);
  }
  function O(M) {
    if (!o(_) || !M.detail.target)
      return;
    const j = a(M.detail.target, ".mdc-data-table__row");
    j && o(_) && o(_).handleRowClick({ rowId: M.detail.rowId, row: j });
  }
  function ie(M) {
    var xt, Tt;
    const j = ((xt = o(y)) == null ? void 0 : xt.orderedCells) ?? [], ve = j.map((un) => un.element).indexOf(M);
    if (ve === -1)
      return;
    const ke = j[ve].columnId ?? null;
    (Tt = o(_)) == null || Tt.handleSortAction({ columnId: ke, columnIndex: ve, headerCell: M });
  }
  function se() {
    var M;
    return (M = o(_)) == null ? void 0 : M.layout();
  }
  function Z() {
    return A;
  }
  var ye = { layout: se, getElement: Z }, V = Ab(), te = (M) => {
    var j;
    o(_) && o(_).handleHeaderRowCheckboxChange(), (j = e.onSMUIDataTableHeaderCheckboxChange) == null || j.call(e, M);
  }, Q = (M) => {
    var j;
    L(M), (j = e.onSMUIDataTableHeaderClick) == null || j.call(e, M);
  }, le = (M) => {
    var j;
    O(M), (j = e.onSMUIDataTableRowClick) == null || j.call(e, M);
  }, Ee = (M) => {
    var j;
    U(M), (j = e.onSMUIDataTableBodyCheckboxChange) == null || j.call(e, M);
  };
  Ge(
    V,
    (M, j) => ({
      class: M,
      ...j,
      onSMUIDataTableHeaderCheckboxChange: te,
      onSMUIDataTableHeaderClick: Q,
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
      () => ri(E, ["container$", "table$"])
    ]
  );
  var q = ce(V);
  Ge(q, (M, j) => ({ class: M, ...j }), [
    () => Ue({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => ct(E, "container$")
  ]);
  var ae = ce(q);
  Ge(ae, (M, j) => ({ class: M, ...j }), [
    () => Ue({ "mdc-data-table__table": !0, [I()]: !0 }),
    () => ct(E, "table$")
  ]);
  var Re = ce(ae);
  Se(Re, () => e.children ?? fe), Fe(ae, (M, j) => Y == null ? void 0 : Y(M, j), b), Oe(q, (M) => S = M, () => S), Fe(q, (M, j) => Y == null ? void 0 : Y(M, j), v);
  var Ae = me(q, 2);
  {
    var Ne = (M) => {
      var j = Sb(), ve = me(ce(j), 2);
      Se(ve, () => e.progress ?? fe), Le((ke) => vt(j, ke), [
        () => Object.entries(o(C)).map(([ke, xt]) => `${ke}: ${xt};`).join(" ")
      ]), w(M, j);
    };
    re(Ae, (M) => {
      e.progress && M(Ne);
    });
  }
  var Ye = me(Ae, 2);
  Se(Ye, () => e.paginate ?? fe), Oe(V, (M) => A = M, () => A), Fe(V, (M, j) => Y == null ? void 0 : Y(M, j), s), w(t, V);
  var dt = Te(ye);
  return i(), dt;
}
var xb = /* @__PURE__ */ de("<thead><!></thead>");
function Tb(t, e) {
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
  var v = { getElement: m }, p = xb();
  Ge(p, () => ({ ...r }));
  var b = ce(p);
  return Se(b, () => e.children ?? fe), Oe(p, (I) => i = I, () => i), Fe(p, (I, E) => Y == null ? void 0 : Y(I, E), n), w(t, p), Te(v);
}
var wb = /* @__PURE__ */ de("<tbody><!></tbody>");
function Ob(t, e) {
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
  var f = { getElement: h }, m = wb();
  Ge(m, (p) => ({ class: p, ...i }), [
    () => Ue({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = ce(m);
  return Se(v, () => e.children ?? fe), Oe(m, (p) => a = p, () => a), Fe(m, (p, b) => Y == null ? void 0 : Y(p, b), n), w(t, m), Te(f);
}
let Lb = 0;
var Rb = /* @__PURE__ */ de("<tr><!></tr>");
function Js(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "rowId", 19, () => "SMUI-data-table-row-" + Lb++), a = /* @__PURE__ */ qe(e, [
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
  var y = { getElement: S }, T = Rb(), x = (N) => {
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
  return Se(C, () => e.children ?? fe), Oe(T, (N) => s = N, () => s), Fe(T, (N, W) => Y == null ? void 0 : Y(N, W), n), w(t, T), Te(y);
}
let Mb = 0;
var Db = /* @__PURE__ */ de('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Hb = /* @__PURE__ */ de("<th><!></th>"), Pb = /* @__PURE__ */ de("<td><!></td>");
function ja(t, e) {
  xe(e, !0);
  const n = () => Hn(I, "$sort", i), r = () => Hn(E, "$sortDirection", i), [i, a] = Zn();
  let s = he("SMUI:data-table:row:header"), u = g(e, "use", 19, () => []), l = g(e, "class", 3, ""), c = g(e, "numeric", 3, !1), d = g(e, "checkbox", 3, !1), h = g(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Mb++ : "SMUI-data-table-unused"), f = g(e, "sortable", 19, () => he("SMUI:data-table:sortable")), m = /* @__PURE__ */ qe(e, [
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
  var ue = { getElement: F }, G = $(), B = z(G);
  {
    var U = (P) => {
      var L = Hb(), O = (ye) => {
        var V;
        d() && W(ye), (V = e.onchange) == null || V.call(e, ye);
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
      var ie = ce(L);
      {
        var se = (ye) => {
          var V = Db(), te = ce(V);
          Se(te, () => e.children ?? fe);
          var Q = me(te, 2), le = ce(Q);
          Le(() => {
            ur(Q, "id", `${h() ?? ""}-status-label`), Ze(le, n() === h() ? r() === "ascending" ? A : _ : "");
          }), w(ye, V);
        }, Z = (ye) => {
          var V = $(), te = z(V);
          Se(te, () => e.children ?? fe), w(ye, V);
        };
        re(ie, (ye) => {
          f() ? ye(se) : ye(Z, !1);
        });
      }
      Oe(L, (ye) => v = ye, () => v), Fe(L, (ye, V) => Y == null ? void 0 : Y(ye, V), u), w(P, L);
    }, X = (P) => {
      var L = Pb(), O = (se) => {
        var Z;
        d() && k(se), (Z = e.onchange) == null || Z.call(e, se);
      };
      Ge(
        L,
        (se) => ({
          class: se,
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
      var ie = ce(L);
      Se(ie, () => e.children ?? fe), Oe(L, (se) => v = se, () => v), Fe(L, (se, Z) => Y == null ? void 0 : Y(se, Z), u), w(P, L);
    };
    re(B, (P) => {
      s ? P(U) : P(X, !1);
    });
  }
  w(t, G);
  var ee = Te(ue);
  return a(), ee;
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
var Nb = {
  ROOT: "mdc-form-field"
}, Ub = {
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
var Fb = (
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
        return Nb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ub;
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
  }(Vt)
);
let kb = 0;
var Bb = /* @__PURE__ */ de("<div><!> <label><!></label></div>");
function Vb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "align", 3, "start"), a = g(e, "noWrap", 3, !1), s = g(e, "inputId", 19, () => "SMUI-form-field-" + kb++), u = g(e, "label$use", 19, () => []), l = /* @__PURE__ */ qe(e, [
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
  ]), c, d = /* @__PURE__ */ Ie(void 0), h = new ui(), f, m = /* @__PURE__ */ Ie(void 0);
  oe("SMUI:generic:input:props", { id: s() }), oe("SMUI:generic:input:mount", (_) => {
    K(m, _, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    K(m, void 0);
  }), ot(() => (K(
    d,
    new Fb({
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
  var p = { getElement: v }, b = Bb();
  Ge(b, (_, S) => ({ class: _, ...S }), [
    () => Ue({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => ri(l, ["label$"])
  ]);
  var I = ce(b);
  Se(I, () => e.children ?? fe);
  var E = me(I, 2);
  Ge(E, (_) => ({ for: s(), ..._ }), [() => ct(l, "label$")]);
  var A = ce(E);
  return Se(A, () => e.label ?? fe), Oe(E, (_) => f = _, () => f), Fe(E, (_, S) => Y == null ? void 0 : Y(_, S), u), Oe(b, (_) => c = _, () => c), Fe(b, (_, S) => Y == null ? void 0 : Y(_, S), n), w(t, b), Te(p);
}
var Gb = (t, e) => {
  var n;
  t.stopPropagation(), (n = e.onClick) == null || n.call(e, t);
}, jb = /* @__PURE__ */ de('<button class="icon-button svelte-jv2py4"><!></button>');
function qb(t, e) {
  xe(e, !0);
  let n = g(e, "tooltipSide", 3, "top"), r = g(e, "showDelay", 3, 1e3), i = g(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = g(e, "size", 3, "25px"), s = /* @__PURE__ */ be(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Ia(t, {
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
      var c = jb();
      c.__click = [Gb, e];
      var d = ce(c);
      {
        var h = (m) => {
          Qc(m, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (m) => {
          var v = $(), p = z(v);
          {
            var b = (E) => {
              $p(E, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, I = (E) => {
              var A = $(), _ = z(A);
              {
                var S = (T) => {
                  Yc(T, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, y = (T) => {
                  var x = $(), C = z(x);
                  {
                    var N = (k) => {
                      Qp(k, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, W = (k) => {
                      var F = $(), ue = z(F);
                      {
                        var G = (U) => {
                          rb(U, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, B = (U) => {
                          var X = $(), ee = z(X);
                          {
                            var P = (O) => {
                              ab(O, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, L = (O) => {
                              var ie = $(), se = z(ie);
                              {
                                var Z = (V) => {
                                  ob(V, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, ye = (V) => {
                                  var te = $(), Q = z(te);
                                  {
                                    var le = (q) => {
                                      ub(q, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, Ee = (q) => {
                                      var ae = Et();
                                      Le(() => Ze(ae, `Unsupported supported type: ${e.type ?? ""}`)), w(q, ae);
                                    };
                                    re(
                                      Q,
                                      (q) => {
                                        e.type === "star" ? q(le) : q(Ee, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(V, te);
                                };
                                re(
                                  se,
                                  (V) => {
                                    e.type === "close" ? V(Z) : V(ye, !1);
                                  },
                                  !0
                                );
                              }
                              w(O, ie);
                            };
                            re(
                              ee,
                              (O) => {
                                e.type === "link-off" ? O(P) : O(L, !1);
                              },
                              !0
                            );
                          }
                          w(U, X);
                        };
                        re(
                          ue,
                          (U) => {
                            e.type === "wand-stars" ? U(G) : U(B, !1);
                          },
                          !0
                        );
                      }
                      w(k, F);
                    };
                    re(
                      C,
                      (k) => {
                        e.type === "visibility" ? k(N) : k(W, !1);
                      },
                      !0
                    );
                  }
                  w(T, x);
                };
                re(
                  _,
                  (T) => {
                    e.type === "edit" ? T(S) : T(y, !1);
                  },
                  !0
                );
              }
              w(E, A);
            };
            re(
              p,
              (E) => {
                e.type === "duplicate" ? E(b) : E(I, !1);
              },
              !0
            );
          }
          w(m, v);
        };
        re(d, (m) => {
          e.type === "delete" ? m(h) : m(f, !1);
        });
      }
      Le(() => ur(c, "aria-label", e.tooltip)), w(u, c);
    },
    $$slots: { default: !0 }
  }), Te();
}
wn(["click"]);
function Co(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var zb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Co({}, zb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var qa, ru = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
qa = {}, Co(qa, ru.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Co(qa, ru.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function Wb(t) {
  return t * t * t;
}
function Jc(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Xb(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (y) => Math.sqrt(y) * 120, easing: s = Jc } = r, u = getComputedStyle(t), l = u.transform === "none" ? "" : u.transform, [c, d] = u.transformOrigin.split(" ").map(parseFloat);
  c /= t.clientWidth, d /= t.clientHeight;
  var h = Kb(t), f = t.clientWidth / n.width / h, m = t.clientHeight / n.height / h, v = e.left + e.width * c, p = e.top + e.height * d, b = n.left + n.width * c, I = n.top + n.height * d, E = (v - b) * f, A = (p - I) * m, _ = e.width / n.width, S = e.height / n.height;
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
function Kb(t) {
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
function Zb(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function iu(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function hs(t, { delay: e = 0, duration: n = 400, easing: r = Zb, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - s), [h, f] = iu(i), [m, v] = iu(a);
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
function Yb(t, e) {
  var n;
  (n = e()) == null || n();
}
var Qb = /* @__PURE__ */ de('<div class="detail svelte-4xu36c"> </div>'), Jb = /* @__PURE__ */ de('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function $b(t, e) {
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
  var a = Jb(), s = ce(a), u = ce(s);
  Eo(u, {
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
      var b = Qb(), I = ce(b);
      Le(() => Ze(I, e.detail)), w(p, b);
    };
    re(h, (p) => {
      e.detail && p(f);
    });
  }
  var m = me(l, 2);
  m.__click = [Yb, n];
  var v = ce(m);
  Eo(v, {
    class: "material-icons",
    children: (p, b) => {
      var I = Et("close");
      w(p, I);
    },
    $$slots: { default: !0 }
  }), Le(() => {
    vt(a, `--color:${i[e.type] ?? ""}`), Ze(d, e.summary);
  }), as(1, a, () => hs, () => ({ x: 0, y: 30, duration: 150, easing: Wb })), as(2, a, () => hs, () => ({ x: 50, y: 0, duration: 150, easing: Jc })), w(t, a), Te();
}
wn(["click"]);
const e_ = 4e3;
function t_() {
  let t = Ce({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = e_) => {
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
const ma = t_();
var n_ = /* @__PURE__ */ de("<div><!></div>"), r_ = /* @__PURE__ */ de('<div class="toast-host svelte-11vwiay"></div>');
function i_(t, e) {
  xe(e, !1);
  const n = ma.toasts;
  sh();
  var r = r_();
  ir(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var s = n_(), u = ce(s);
    $b(u, {
      get summary() {
        return o(a).summary;
      },
      get detail() {
        return o(a).detail;
      },
      get type() {
        return o(a).type;
      },
      onClose: () => ma.remove(o(a).id)
    }), ih(s, () => Xb, null), w(i, s);
  }), w(t, r), Te();
}
var a_ = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, s_ = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, o_ = /* @__PURE__ */ de('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), l_ = /* @__PURE__ */ de('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), u_ = /* @__PURE__ */ de('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function c_(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ be(() => !!e.value);
  var r = u_();
  r.__click = [a_, e];
  var i = ce(r), a = ce(i);
  {
    var s = (f) => {
      Ia(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, v) => {
          var p = o_();
          p.__click = [s_, e];
          var b = ce(p);
          Zo(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), w(m, p);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      Ia(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, v) => {
          db(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    re(a, (f) => {
      o(n) ? f(s) : f(u, !1);
    });
  }
  var l = me(i, 2), c = ce(l), d = me(l, 2);
  {
    var h = (f) => {
      var m = l_(), v = me(z(m), 2), p = ce(v), b = me(v, 2), I = ce(b);
      tb(I, { svgStyles: "fill: gray;" }), Le(() => Ze(p, e.value)), w(f, m);
    };
    re(d, (f) => {
      o(n) && f(h);
    });
  }
  Le(() => {
    Vo(r, 1, `filter-badge ${o(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), Ze(c, e.label);
  }), w(t, r), Te();
}
wn(["click"]);
var d_ = /* @__PURE__ */ de('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function f_(t, e) {
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
        const ae = d().findIndex((Re) => Re === f());
        o(C) && ae === -1 ? d().push(f()) : !o(C) && ae !== -1 && d().splice(ae, 1), q = !0;
      } else {
        const ae = F.findIndex((Ae) => Ae === f()), Re = d().findIndex((Ae) => Ae === f());
        ae > -1 && Re === -1 ? (K(C, !1), q = !0) : Re > -1 && ae === -1 && (K(C, !0), q = !0);
      }
    r(h()) ? ue !== o(C) && (q = !0) : (h() !== (c() ? null : o(C)) || o(C) !== ue) && (h() === k && o(C) !== ue ? (h(o(C)), r(c()) || c(!1)) : K(C, !!h()), q = !0), o(A) && (r(c()) ? o(A).indeterminate && (o(A).indeterminate = !1, q = !0) : !c() && o(A).indeterminate ? (o(A).indeterminate = !1, q = !0) : c() && !o(A).indeterminate && (o(A).indeterminate = !0, K(C, !1), q = !0)), k = h(), F = r(d()) ? [] : [...d()], ue = o(C), q && o(E) && o(E).handleChange();
  });
  const G = he("SMUI:generic:input:mount"), B = he("SMUI:generic:input:unmount"), U = he("SMUI:checkbox:mount"), X = he("SMUI:checkbox:unmount");
  ot(() => {
    if (o(A) == null)
      throw new Error("Checkbox is not defined.");
    o(A).indeterminate = !r(c()) && c(), K(
      E,
      new yb({
        addClass: ee,
        forceLayout: () => Z().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!Z().parentNode,
        isChecked: () => o(C),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: P,
        removeNativeControlAttr: ie,
        setNativeControlAttr: O,
        setNativeControlDisabled: (ae) => u(ae)
      }),
      !0
    );
    const q = {
      _smui_checkbox_accessor: !0,
      get element() {
        return Z();
      },
      get checked() {
        return o(C);
      },
      set checked(ae) {
        o(C) !== ae && K(C, ae, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(ae) {
        c(ae);
      },
      activateRipple() {
        u() || K(T, !0);
      },
      deactivateRipple() {
        K(T, !1);
      }
    };
    return G && G(q), U && U(q), o(E).init(), () => {
      var ae;
      B && B(q), X && X(q), (ae = o(E)) == null || ae.destroy();
    };
  });
  function ee(q) {
    _[q] || (_[q] = !0);
  }
  function P(q) {
    (!(q in _) || _[q]) && (_[q] = !1);
  }
  function L(q, ae) {
    S[q] != ae && (ae === "" || ae == null ? delete S[q] : S[q] = ae);
  }
  function O(q, ae) {
    y[q] !== ae && (y[q] = ae);
  }
  function ie(q) {
    (!(q in y) || y[q] != null) && (y[q] = void 0);
  }
  function se() {
    return x && x.id;
  }
  function Z() {
    return I;
  }
  var ye = { getId: se, getElement: Z }, V = d_(), te = (q) => {
    var ae;
    o(E) && o(E).handleAnimationEnd(), (ae = e.onanimationend) == null || ae.call(e, q);
  };
  Ge(V, (q, ae, Re) => ({ class: q, style: ae, ...Re, onanimationend: te }), [
    () => Ue({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": N === "data-table" && W,
      "mdc-data-table__row-checkbox": N === "data-table" && !W,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(S).map(([q, ae]) => `${q}: ${ae};`).concat([s()]).join(" "),
    () => ri(b, ["input$"])
  ]);
  var Q = ce(V), le = (q) => {
    var ae;
    We(Z(), "blur", q), (ae = e.input$onblur) == null || ae.call(e, q);
  }, Ee = (q) => {
    var ae;
    We(Z(), "focus", q), (ae = e.input$onfocus) == null || ae.call(e, q);
  };
  return Ge(
    Q,
    (q, ae, Re, Ae) => ({
      class: q,
      type: "checkbox",
      ...x,
      disabled: u(),
      value: ae,
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
  ), Oe(Q, (q) => K(A, q), () => o(A)), Fe(Q, (q, ae) => Y == null ? void 0 : Y(q, ae), v), si(() => ah(Q, () => o(C), (q) => K(C, q))), Oe(V, (q) => I = q, () => I), Fe(V, (q, ae) => Y == null ? void 0 : Y(q, ae), i), Fe(V, (q, ae) => Qt == null ? void 0 : Qt(q, ae), () => ({
    unbounded: !0,
    addClass: ee,
    removeClass: P,
    addStyle: L,
    active: o(T),
    eventTarget: o(A)
  })), w(t, V), Te(ye);
}
var h_ = /* @__PURE__ */ de('<div style="display: flex; flex-direction: column;"></div>');
function v_(t, e) {
  xe(e, !0);
  let n = g(e, "data", 19, () => []), r = g(e, "values", 31, () => Ce([]));
  var i = h_();
  ir(i, 21, n, Ci, (a, s) => {
    Vb(a, {
      label: (l) => {
        var c = Et();
        Le(() => Ze(c, o(s).label)), w(l, c);
      },
      children: (l, c) => {
        f_(l, {
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
var m_ = (t) => t.stopPropagation(), g_ = /* @__PURE__ */ de('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), p_ = /* @__PURE__ */ de('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), b_ = /* @__PURE__ */ de('<div class="oscd-filters svelte-58jwwf"></div>');
function __(t, e) {
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
  }), gn(() => {
    document.removeEventListener("click", f);
  }), we(() => {
  });
  var m = b_();
  ir(m, 23, n, (v) => v.key, (v, p, b) => {
    var I = p_(), E = ce(I);
    {
      let S = /* @__PURE__ */ be(() => s(o(p)));
      c_(E, {
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
        var y = g_();
        y.__click = [m_];
        var T = me(ce(y), 2), x = ce(T), C = me(T, 2), N = ce(C);
        {
          var W = (ue) => {
            So(ue, {
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
            var G = $(), B = z(G);
            {
              var U = (ee) => {
                {
                  let P = /* @__PURE__ */ be(() => {
                    var L;
                    return (L = o(p)) == null ? void 0 : L.options;
                  });
                  fp(ee, {
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
              }, X = (ee) => {
                var P = $(), L = z(P);
                {
                  var O = (se) => {
                    {
                      let Z = /* @__PURE__ */ be(() => {
                        var ye;
                        return (ye = o(p)) == null ? void 0 : ye.options;
                      });
                      v_(se, {
                        get data() {
                          return o(Z);
                        },
                        get values() {
                          return a[o(b)];
                        },
                        set values(ye) {
                          a[o(b)] = ye;
                        }
                      });
                    }
                  }, ie = (se) => {
                    var Z = $(), ye = z(Z);
                    {
                      var V = (Q) => {
                        vb(Q, {
                          get value() {
                            return a[o(b)];
                          },
                          set value(le) {
                            a[o(b)] = le;
                          }
                        });
                      }, te = (Q) => {
                        var le = $(), Ee = z(le);
                        {
                          var q = (ae) => {
                            pb(ae, {
                              get value() {
                                return a[o(b)];
                              },
                              set value(Re) {
                                a[o(b)] = Re;
                              }
                            });
                          };
                          re(
                            Ee,
                            (ae) => {
                              o(p).type === "datetime" && ae(q);
                            },
                            !0
                          );
                        }
                        w(Q, le);
                      };
                      re(
                        ye,
                        (Q) => {
                          o(p).type === "date" ? Q(V) : Q(te, !1);
                        },
                        !0
                      );
                    }
                    w(se, Z);
                  };
                  re(
                    L,
                    (se) => {
                      o(p).type === "multiselect" ? se(O) : se(ie, !1);
                    },
                    !0
                  );
                }
                w(ee, P);
              };
              re(
                B,
                (ee) => {
                  o(p).type === "select" ? ee(U) : ee(X, !1);
                },
                !0
              );
            }
            w(ue, G);
          };
          re(N, (ue) => {
            o(p).type === "text" || o(p).type === "number" ? ue(W) : ue(k, !1);
          });
        }
        var F = me(C, 2);
        cs(F, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(o(b)),
          children: (ue, G) => {
            var B = Et("Apply");
            w(ue, B);
          },
          $$slots: { default: !0 }
        }), Le(() => Ze(x, `Filter by ${o(p).label ?? ""}`)), as(2, y, () => hs, () => ({ y: 5, duration: 120 })), as(1, y, () => hs, () => ({ y: -5, duration: 120 })), w(S, y);
      };
      re(A, (S) => {
        o(r) === o(b) && S(_);
      });
    }
    Oe(I, (S, y) => i[y] = S, (S) => i == null ? void 0 : i[S], () => [o(b)]), w(v, I);
  }), w(t, m), Te();
}
wn(["click"]);
var y_ = (t, e) => e(), I_ = /* @__PURE__ */ de('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), E_ = /* @__PURE__ */ de('<div class="filter-tab svelte-nj6sif"><!> <div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div></div>');
function S_(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 31, () => Ce([])), r = g(e, "onFilterChange", 3, (E) => {
  }), i = g(e, "searchText", 15, ""), a = g(e, "searchLabel", 3, "Search"), s = g(e, "searchPlaceholder", 3, "Type to search..."), u = g(e, "onSearchInput", 3, () => {
  }), l = g(e, "searchDisabled", 3, !1), c = /* @__PURE__ */ be(() => n().some((E) => E.value !== void 0 && E.value !== null && E.value !== "")), d = () => {
    n(n().map((E) => ({ ...E, value: void 0 }))), r()(n());
  };
  var h = E_(), f = ce(h);
  {
    var m = (E) => {
      Mg(E, {
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
    re(f, (E) => {
      l() || E(m);
    });
  }
  var v = me(f, 2), p = me(ce(v), 2);
  __(p, {
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
      var A = I_();
      A.__click = [y_, d], w(E, A);
    };
    re(b, (E) => {
      o(c) && E(I);
    });
  }
  w(t, h), Te();
}
wn(["click"]);
var A_ = /* @__PURE__ */ de('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function C_(t, e) {
  xe(e, !0);
  const [n, r] = Zn();
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
    new Ib({
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
          const ie = new O(L);
          return ie.observe(F()), ie;
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
  var ue = { getElement: F }, G = A_(), B = (L) => {
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
      ontransitionend: B
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
  var U = ce(G), X = ce(U), ee = me(U, 2);
  Oe(G, (L) => f = L, () => f), Fe(G, (L, O) => Y == null ? void 0 : Y(L, O), i), Le(
    (L, O) => {
      vt(X, L), vt(ee, O);
    },
    [
      () => Object.entries(I).map(([L, O]) => `${L}: ${O};`).join(" "),
      () => Object.entries(E).map(([L, O]) => `${L}: ${O};`).join(" ")
    ]
  ), w(t, G);
  var P = Te(ue);
  return r(), P;
}
var x_ = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), T_ = /* @__PURE__ */ Ct('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), w_ = /* @__PURE__ */ de('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), O_ = (t, e) => e(), L_ = /* @__PURE__ */ de('<input type="text" class="svelte-1mj71p3"/>'), R_ = (t, e) => e(), M_ = /* @__PURE__ */ de('<input type="number" class="svelte-1mj71p3"/>'), D_ = /* @__PURE__ */ de("<!> <!>", 1), H_ = /* @__PURE__ */ de("<!> <!>", 1), P_ = /* @__PURE__ */ de('<div class="cell-actions svelte-1mj71p3"></div>'), N_ = /* @__PURE__ */ de("<!> <!>", 1);
function au(t, e) {
  xe(e, !0);
  const n = () => Hn(p, "$sortColumn", a), r = () => Hn(b, "$sortDirection", a), i = () => Hn(v, "$filteredData", a), [a, s] = Zn();
  let u = g(e, "loadingDone", 15, !0), l = g(e, "label", 19, Pp), c = g(e, "columnDefs", 19, () => []), d = g(e, "rowData", 31, () => Ce([])), h = g(e, "rowActions", 19, () => []), f = g(e, "searchInputLabel", 3, "Search"), m = Ce({ name: "", color: "", number: "" }), v = Nt([]), p = Nt(null), b = Nt(null), I = /* @__PURE__ */ be(() => c().some((S) => S.filter));
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
  v.set(d()), Cb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (y) => {
      C_(y, {
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
      var x = N_(), C = z(x);
      Tb(C, {
        children: (W, k) => {
          var F = H_(), ue = z(F);
          Js(ue, {
            class: "header-title-row",
            children: (U, X) => {
              var ee = $(), P = z(ee);
              ir(P, 17, c, Ci, (L, O) => {
                ja(L, {
                  onclick: () => o(O).sortable && _(o(O).field),
                  get style() {
                    return o(O).headerStyle;
                  },
                  children: (ie, se) => {
                    var Z = w_(), ye = ce(Z), V = ce(ye), te = ce(V), Q = me(V, 2);
                    {
                      var le = (Ee) => {
                        var q = $(), ae = z(q);
                        {
                          var Re = (Ae) => {
                            var Ne = $(), Ye = z(Ne);
                            {
                              var dt = (j) => {
                                var ve = x_();
                                w(j, ve);
                              }, M = (j) => {
                                var ve = $(), ke = z(ve);
                                {
                                  var xt = (Tt) => {
                                    var un = T_();
                                    w(Tt, un);
                                  };
                                  re(
                                    ke,
                                    (Tt) => {
                                      r() === "desc" && Tt(xt);
                                    },
                                    !0
                                  );
                                }
                                w(j, ve);
                              };
                              re(Ye, (j) => {
                                r() === "asc" ? j(dt) : j(M, !1);
                              });
                            }
                            w(Ae, Ne);
                          };
                          re(ae, (Ae) => {
                            n() === o(O).field && r() !== null && Ae(Re);
                          });
                        }
                        w(Ee, q);
                      };
                      re(Q, (Ee) => {
                        o(O).sortable && Ee(le);
                      });
                    }
                    Le(() => {
                      vt(Z, `min-width: ${o(O).minWidth ?? 0 ?? ""}`), Ze(te, o(O).headerName);
                    }), w(ie, Z);
                  },
                  $$slots: { default: !0 }
                });
              }), w(U, ee);
            },
            $$slots: { default: !0 }
          });
          var G = me(ue, 2);
          {
            var B = (U) => {
              Js(U, {
                class: "header-filter-row",
                children: (X, ee) => {
                  var P = $(), L = z(P);
                  ir(L, 17, c, Ci, (O, ie) => {
                    ja(O, {
                      children: (se, Z) => {
                        var ye = $(), V = z(ye);
                        {
                          var te = (Q) => {
                            var le = D_(), Ee = z(le);
                            {
                              var q = (Ae) => {
                                var Ne = L_();
                                Ne.__input = [O_, E], Le(() => ur(Ne, "placeholder", `${f()} ${o(ie).headerName}`)), ba(Ne, () => m[o(ie).field], (Ye) => m[o(ie).field] = Ye), w(Ae, Ne);
                              };
                              re(Ee, (Ae) => {
                                o(ie).filterType === "text" && Ae(q);
                              });
                            }
                            var ae = me(Ee, 2);
                            {
                              var Re = (Ae) => {
                                var Ne = M_();
                                Ne.__input = [R_, E], Le(() => ur(Ne, "placeholder", `${f()} ${o(ie).headerName}`)), ba(Ne, () => m[o(ie).field], (Ye) => m[o(ie).field] = Ye), w(Ae, Ne);
                              };
                              re(ae, (Ae) => {
                                o(ie).filterType === "number" && Ae(Re);
                              });
                            }
                            w(Q, le);
                          };
                          re(V, (Q) => {
                            o(ie).filter && Q(te);
                          });
                        }
                        w(se, ye);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w(X, P);
                },
                $$slots: { default: !0 }
              });
            };
            re(G, (U) => {
              o(I) && U(B);
            });
          }
          w(W, F);
        },
        $$slots: { default: !0 }
      });
      var N = me(C, 2);
      Ob(N, {
        children: (W, k) => {
          var F = $(), ue = z(F);
          ir(ue, 1, i, Ci, (G, B) => {
            Js(G, {
              children: (U, X) => {
                var ee = $(), P = z(ee);
                ir(P, 17, c, (L) => L.field, (L, O) => {
                  var ie = $(), se = z(ie);
                  {
                    var Z = (V) => {
                      ja(V, {
                        children: (te, Q) => {
                          var le = P_();
                          ir(le, 21, h, Ci, (Ee, q) => {
                            var ae = $(), Re = z(ae);
                            {
                              var Ae = (Ye) => {
                                Ia(Ye, {
                                  get content() {
                                    return o(q).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (dt, M) => {
                                    {
                                      let j = /* @__PURE__ */ be(() => o(q).disabled(o(B)));
                                      Jm(dt, {
                                        get iconComponent() {
                                          return o(q).iconComponent;
                                        },
                                        get iconStyles() {
                                          return o(q).iconStyles;
                                        },
                                        callback: () => o(q).callback(o(B)),
                                        get disabled() {
                                          return o(j);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, Ne = (Ye) => {
                                Ia(Ye, {
                                  get content() {
                                    return o(q).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (dt, M) => {
                                    {
                                      let j = /* @__PURE__ */ be(() => o(q).disabled(o(B)));
                                      Gc(dt, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => o(q).callback(o(B)),
                                        get disabled() {
                                          return o(j);
                                        },
                                        children: (ve, ke) => {
                                          var xt = $(), Tt = z(xt);
                                          {
                                            var un = (H) => {
                                              Fp(H, { svgStyles: "margin: unset" });
                                            }, _e = (H) => {
                                              var D = $(), J = z(D);
                                              {
                                                var Me = (at) => {
                                                  Zo(at, { svgStyles: "margin: unset" });
                                                }, lt = (at) => {
                                                  var wt = $(), Gt = z(wt);
                                                  {
                                                    var hr = (mt) => {
                                                      Vp(mt, { svgStyles: "margin: unset" });
                                                    }, ft = (mt) => {
                                                      var Ut = $(), Nn = z(Ut);
                                                      {
                                                        var hi = (He) => {
                                                          jp(He, { svgStyles: "margin: unset" });
                                                        }, Un = (He) => {
                                                          var tt = $(), et = z(tt);
                                                          {
                                                            var Mt = (Ke) => {
                                                              Xp(Ke, { svgStyles: "margin: unset" });
                                                            }, cn = (Ke) => {
                                                              var pt = $(), Ot = z(pt);
                                                              {
                                                                var Qe = (jt) => {
                                                                  Yc(jt, { svgStyles: "margin: unset" });
                                                                }, Lt = (jt) => {
                                                                  var Kt = $(), _t = z(Kt);
                                                                  {
                                                                    var Dt = (bt) => {
                                                                      Qc(bt, { svgStyles: "margin: unset" });
                                                                    }, an = (bt) => {
                                                                      zp(bt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    re(
                                                                      _t,
                                                                      (bt) => {
                                                                        o(q).icon === "delete" ? bt(Dt) : bt(an, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(jt, Kt);
                                                                };
                                                                re(
                                                                  Ot,
                                                                  (jt) => {
                                                                    o(q).icon === "edit" ? jt(Qe) : jt(Lt, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(Ke, pt);
                                                            };
                                                            re(
                                                              et,
                                                              (Ke) => {
                                                                o(q).icon === "remove" ? Ke(Mt) : Ke(cn, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(He, tt);
                                                        };
                                                        re(
                                                          Nn,
                                                          (He) => {
                                                            o(q).icon === "find-in-page" ? He(hi) : He(Un, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(mt, Ut);
                                                    };
                                                    re(
                                                      Gt,
                                                      (mt) => {
                                                        o(q).icon === "download" ? mt(hr) : mt(ft, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(at, wt);
                                                };
                                                re(
                                                  J,
                                                  (at) => {
                                                    o(q).icon === "cancel" ? at(Me) : at(lt, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              w(H, D);
                                            };
                                            re(Tt, (H) => {
                                              o(q).icon === "add" ? H(un) : H(_e, !1);
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
                              re(Re, (Ye) => {
                                o(q).iconComponent ? Ye(Ae) : Ye(Ne, !1);
                              });
                            }
                            w(Ee, ae);
                          }), w(te, le);
                        },
                        $$slots: { default: !0 }
                      });
                    }, ye = (V) => {
                      ja(V, {
                        get numeric() {
                          return o(O).numeric;
                        },
                        get style() {
                          return o(O).cellStyle;
                        },
                        children: (te, Q) => {
                          var le = $(), Ee = z(le);
                          {
                            var q = (Re) => {
                              const Ae = /* @__PURE__ */ be(() => o(O).cellRenderer);
                              var Ne = $(), Ye = z(Ne);
                              fr(Ye, () => o(Ae), (dt, M) => {
                                M(dt, $e(
                                  {
                                    get row() {
                                      return o(B);
                                    },
                                    get value() {
                                      return o(B)[o(O).field];
                                    },
                                    get col() {
                                      return o(O);
                                    }
                                  },
                                  () => o(O).cellRendererProps ?? {}
                                ));
                              }), w(Re, Ne);
                            }, ae = (Re) => {
                              var Ae = $(), Ne = z(Ae);
                              {
                                var Ye = (M) => {
                                  var j = Et();
                                  Le((ve) => Ze(j, ve), [
                                    () => o(O).valueFormatter(o(B)[o(O).field])
                                  ]), w(M, j);
                                }, dt = (M) => {
                                  var j = Et();
                                  Le(() => Ze(j, o(B)[o(O).field] ?? "")), w(M, j);
                                };
                                re(
                                  Ne,
                                  (M) => {
                                    o(O).valueFormatter ? M(Ye) : M(dt, !1);
                                  },
                                  !0
                                );
                              }
                              w(Re, Ae);
                            };
                            re(Ee, (Re) => {
                              o(O).cellRenderer ? Re(q) : Re(ae, !1);
                            });
                          }
                          w(te, le);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    re(se, (V) => {
                      o(O).field === "actions" ? V(Z) : V(ye, !1);
                    });
                  }
                  w(L, ie);
                }), w(U, ee);
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
function Yo(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var $s = Yo(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function vs(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Ma = function() {
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
          a = p instanceof $s ? p.errors : [p];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Pt(h), m = f.next(); !m.done; m = f.next()) {
            var v = m.value;
            try {
              su(v);
            } catch (p) {
              a = a ?? [], p instanceof $s ? a = Wn(Wn([], Tr(a)), Tr(p.errors)) : a.push(p);
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
        throw new $s(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        su(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && vs(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && vs(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), $c = Ma.EMPTY;
function ed(t) {
  return t instanceof Ma || t && "closed" in t && St(t.remove) && St(t.add) && St(t.unsubscribe);
}
function su(t) {
  St(t) ? t() : t.unsubscribe();
}
var U_ = {
  Promise: void 0
}, F_ = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Wn([t, e], Tr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function td(t) {
  F_.setTimeout(function() {
    throw t;
  });
}
function ou() {
}
function Ja(t) {
  t();
}
var Qo = function(t) {
  nt(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, ed(n) && n.add(r)) : r.destination = V_, r;
  }
  return e.create = function(n, r, i) {
    return new xo(n, r, i);
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
}(Ma), k_ = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        za(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        za(r);
      }
    else
      za(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        za(n);
      }
  }, t;
}(), xo = function(t) {
  nt(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return St(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new k_(s), a;
  }
  return e;
}(Qo);
function za(t) {
  td(t);
}
function B_(t) {
  throw t;
}
var V_ = {
  closed: !0,
  next: ou,
  error: B_,
  complete: ou
}, Jo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Ls(t) {
  return t;
}
function G_(t) {
  return t.length === 0 ? Ls : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var mn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = q_(e) ? e : new xo(e, n, r);
    return Ja(function() {
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
    return n = lu(n), new n(function(i, a) {
      var s = new xo({
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
  }, t.prototype[Jo] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return G_(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = lu(e), new e(function(r, i) {
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
function lu(t) {
  var e;
  return (e = t ?? U_.Promise) !== null && e !== void 0 ? e : Promise;
}
function j_(t) {
  return t && St(t.next) && St(t.error) && St(t.complete);
}
function q_(t) {
  return t && t instanceof Qo || j_(t) && ed(t);
}
function z_(t) {
  return St(t == null ? void 0 : t.lift);
}
function pn(t) {
  return function(e) {
    if (z_(e))
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
  return new W_(t, e, n, r, i);
}
var W_ = function(t) {
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
}(Qo), X_ = Yo(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), To = function(t) {
  nt(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new uu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new X_();
  }, e.prototype.next = function(n) {
    var r = this;
    Ja(function() {
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
    Ja(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    Ja(function() {
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
    return a || s ? $c : (this.currentObservers = null, u.push(n), new Ma(function() {
      r.currentObservers = null, vs(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new mn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new uu(n, r);
  }, e;
}(mn), uu = function(t) {
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : $c;
  }, e;
}(To), K_ = {
  now: function() {
    return Date.now();
  }
}, Z_ = function(t) {
  nt(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Ma), cu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Wn([t, e], Tr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, Y_ = function(t) {
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
    return i === void 0 && (i = 0), cu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && cu.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, vs(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Z_), du = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = K_.now, t;
}(), Q_ = function(t) {
  nt(e, t);
  function e(n, r) {
    r === void 0 && (r = du.now);
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
}(du), J_ = new Q_(Y_), $_ = new mn(function(t) {
  return t.complete();
});
function ey(t) {
  return t && St(t.schedule);
}
function nd(t) {
  return t[t.length - 1];
}
function rd(t) {
  return ey(nd(t)) ? t.pop() : void 0;
}
function ty(t, e) {
  return typeof nd(t) == "number" ? t.pop() : e;
}
var id = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function ad(t) {
  return St(t == null ? void 0 : t.then);
}
function sd(t) {
  return St(t[Jo]);
}
function od(t) {
  return Symbol.asyncIterator && St(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function ld(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function ny() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var ud = ny();
function cd(t) {
  return St(t == null ? void 0 : t[ud]);
}
function dd(t) {
  return Oh(this, arguments, function() {
    var n, r, i, a;
    return qo(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Oi(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, Oi(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Oi(i)];
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
function fd(t) {
  return St(t == null ? void 0 : t.getReader);
}
function di(t) {
  if (t instanceof mn)
    return t;
  if (t != null) {
    if (sd(t))
      return ry(t);
    if (id(t))
      return iy(t);
    if (ad(t))
      return ay(t);
    if (od(t))
      return hd(t);
    if (cd(t))
      return sy(t);
    if (fd(t))
      return oy(t);
  }
  throw ld(t);
}
function ry(t) {
  return new mn(function(e) {
    var n = t[Jo]();
    if (St(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function iy(t) {
  return new mn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function ay(t) {
  return new mn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, td);
  });
}
function sy(t) {
  return new mn(function(e) {
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
function hd(t) {
  return new mn(function(e) {
    ly(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function oy(t) {
  return hd(dd(t));
}
function ly(t, e) {
  var n, r, i, a;
  return mc(this, void 0, void 0, function() {
    var s, u;
    return qo(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Lh(t), l.label = 1;
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
function ei(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function vd(t, e) {
  return e === void 0 && (e = 0), pn(function(n, r) {
    n.subscribe(Tn(r, function(i) {
      return ei(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ei(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ei(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function md(t, e) {
  return e === void 0 && (e = 0), pn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function uy(t, e) {
  return di(t).pipe(md(e), vd(e));
}
function cy(t, e) {
  return di(t).pipe(md(e), vd(e));
}
function dy(t, e) {
  return new mn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function fy(t, e) {
  return new mn(function(n) {
    var r;
    return ei(n, e, function() {
      r = t[ud](), ei(n, e, function() {
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
function gd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new mn(function(n) {
    ei(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ei(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function hy(t, e) {
  return gd(dd(t), e);
}
function vy(t, e) {
  if (t != null) {
    if (sd(t))
      return uy(t, e);
    if (id(t))
      return dy(t, e);
    if (ad(t))
      return cy(t, e);
    if (od(t))
      return gd(t, e);
    if (cd(t))
      return fy(t, e);
    if (fd(t))
      return hy(t, e);
  }
  throw ld(t);
}
function $o(t, e) {
  return e ? vy(t, e) : di(t);
}
function pd() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = rd(t);
  return $o(t, n);
}
function qn(t, e) {
  return pn(function(n, r) {
    var i = 0;
    n.subscribe(Tn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function my(t, e, n, r, i, a, s, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, m = function(p) {
    return c < r ? v(p) : l.push(p);
  }, v = function(p) {
    c++;
    var b = !1;
    di(n(p, d++)).subscribe(Tn(e, function(I) {
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
function ms(t, e, n) {
  return n === void 0 && (n = 1 / 0), St(e) ? ms(function(r, i) {
    return qn(function(a, s) {
      return e(r, a, i, s);
    })(di(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), pn(function(r, i) {
    return my(r, i, t, n);
  }));
}
function gy(t) {
  return t === void 0 && (t = 1 / 0), ms(Ls, t);
}
function fu(t, e) {
  return pn(function(n, r) {
    var i = 0;
    n.subscribe(Tn(r, function(a) {
      return t.call(e, a, i++) && r.next(a);
    }));
  });
}
function bd(t) {
  return pn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Tn(n, void 0, void 0, function(s) {
      a = di(t(s, bd(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function py(t, e) {
  return St(e) ? ms(t, e, 1) : ms(t, 1);
}
function by(t, e) {
  return e === void 0 && (e = J_), pn(function(n, r) {
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
function ca(t) {
  return t <= 0 ? function() {
    return $_;
  } : pn(function(e, n) {
    var r = 0;
    e.subscribe(Tn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function _y(t, e) {
  return e === void 0 && (e = Ls), t = t ?? yy, pn(function(n, r) {
    var i, a = !0;
    n.subscribe(Tn(r, function(s) {
      var u = e(s);
      (a || !t(i, u)) && (a = !1, i = u, r.next(s));
    }));
  });
}
function yy(t, e) {
  return t === e;
}
function hu(t) {
  return pn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function Iy() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = rd(t), r = ty(t, 1 / 0);
  return pn(function(i, a) {
    gy(r)($o(Wn([i], Tr(t)), n)).subscribe(a);
  });
}
function Ey() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Iy.apply(void 0, Wn([], Tr(t)));
}
function vu(t, e) {
  return pn(function(n, r) {
    var i = null, a = 0, s = !1, u = function() {
      return s && !i && r.complete();
    };
    n.subscribe(Tn(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      di(t(l, d)).subscribe(i = Tn(r, function(h) {
        return r.next(e ? e(l, h, d, c++) : h);
      }, function() {
        i = null, u();
      }));
    }, function() {
      s = !0, u();
    }));
  });
}
function Ii(t, e, n) {
  var r = St(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? pn(function(i, a) {
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
  }) : Ls;
}
class Sy {
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
function _d(t) {
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
var Ay = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, s = n.responseType;
    this.status = a ?? 0, this.responseType = s ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = _d(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), gs = Yo(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = _d(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), Cy = function() {
  function t(e, n) {
    return gs.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(gs.prototype), t;
}();
function xy(t, e) {
  return fi({ method: "GET", url: t, headers: e });
}
function Ty(t, e, n) {
  return fi({ method: "POST", url: t, body: e, headers: n });
}
function wy(t, e) {
  return fi({ method: "DELETE", url: t, headers: e });
}
function Oy(t, e, n) {
  return fi({ method: "PUT", url: t, body: e, headers: n });
}
function Ly(t, e, n) {
  return fi({ method: "PATCH", url: t, body: e, headers: n });
}
var Ry = qn(function(t) {
  return t.response;
});
function My(t, e) {
  return Ry(fi({
    method: "GET",
    url: t,
    headers: e
  }));
}
var fi = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return Hy(n);
  };
  return t.get = xy, t.post = Ty, t.delete = wy, t.put = Oy, t.patch = Ly, t.getJSON = My, t;
}(), Dy = "upload", mu = "download", eo = "loadstart", to = "progress", gu = "load";
function Hy(t) {
  return new mn(function(e) {
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
    var E = Py(s, h), A = pe(pe({}, i), {
      url: l,
      headers: h,
      body: E
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var S = t.progressSubscriber, y = t.includeDownloadProgress, T = y === void 0 ? !1 : y, x = t.includeUploadProgress, C = x === void 0 ? !1 : x, N = function(U, X) {
        _.addEventListener(U, function() {
          var ee, P = X();
          (ee = S == null ? void 0 : S.error) === null || ee === void 0 || ee.call(S, P), e.error(P);
        });
      };
      N("timeout", function() {
        return new Cy(_, A);
      }), N("abort", function() {
        return new gs("aborted", _, A);
      });
      var W = function(U, X) {
        return new Ay(X, _, A, U + "_" + X.type);
      }, k = function(U, X, ee) {
        U.addEventListener(X, function(P) {
          e.next(W(ee, P));
        });
      };
      C && [eo, to, gu].forEach(function(U) {
        return k(_.upload, U, Dy);
      }), S && [eo, to].forEach(function(U) {
        return _.upload.addEventListener(U, function(X) {
          var ee;
          return (ee = S == null ? void 0 : S.next) === null || ee === void 0 ? void 0 : ee.call(S, X);
        });
      }), T && [eo, to].forEach(function(U) {
        return k(_, U, mu);
      });
      var F = function(U) {
        var X = "ajax error" + (U ? " " + U : "");
        e.error(new gs(X, _, A));
      };
      _.addEventListener("error", function(U) {
        var X;
        (X = S == null ? void 0 : S.error) === null || X === void 0 || X.call(S, U), F();
      }), _.addEventListener(gu, function(U) {
        var X, ee, P = _.status;
        if (P < 400) {
          (X = S == null ? void 0 : S.complete) === null || X === void 0 || X.call(S);
          var L = void 0;
          try {
            L = W(mu, U);
          } catch (O) {
            e.error(O);
            return;
          }
          e.next(L), e.complete();
        } else
          (ee = S == null ? void 0 : S.error) === null || ee === void 0 || ee.call(S, U), F(P);
      });
    }
    var ue = A.user, G = A.method, B = A.async;
    ue ? _.open(G, l, B, ue, A.password) : _.open(G, l, B), B && (_.timeout = A.timeout, _.responseType = A.responseType), "withCredentials" in _ && (_.withCredentials = A.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && _.setRequestHeader(f, h[f]);
    return E ? _.send(E) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function Py(t, e) {
  var n;
  if (!t || typeof t == "string" || Vy(t) || Gy(t) || Uy(t) || Fy(t) || ky(t) || jy(t))
    return t;
  if (By(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Ny = Object.prototype.toString;
function el(t, e) {
  return Ny.call(t) === "[object " + e + "]";
}
function Uy(t) {
  return el(t, "ArrayBuffer");
}
function Fy(t) {
  return el(t, "File");
}
function ky(t) {
  return el(t, "Blob");
}
function By(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Vy(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Gy(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function jy(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class qy {
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
const zy = new qy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Wy = [zy], Xy = Wy[0].getUrl();
class yd {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Xy;
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
class Ky {
  constructor(e = new yd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Zy(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => pd(n).pipe(
      qn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      py(
        (r) => fi(r).pipe(
          qn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      qn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const sr = (t) => encodeURIComponent(`${t}`), Zy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${sr(e)}=${sr(r)}`).join("&") : `${sr(e)}=${sr(n)}`
).join("&"), Ei = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Yy extends Ky {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    Ei(e, "id", "deleteAllSclFileVersions"), Ei(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/api/scl/{type}/{id}".replace("{id}", sr(e)).replace("{type}", sr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Ei(e, "id", "retrieveDataResourceByVersion"), Ei(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", sr(e)).replace("{version}", sr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Ei(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", sr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Ei(e, "dataResourceSearch", "searchForResources");
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
class Ti {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return Ti.instance || (Ti.instance = new Ti()), Ti.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      fu((r) => !!r || !!r.results),
      qn((r) => r.results),
      qn(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      fu((r) => !!r || !!r.versions),
      qn((r) => r.versions),
      qn(
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
    return new Sy(
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
    const n = new yd({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Yy(n);
  }
}
var Ir;
class pu {
  constructor() {
    Je(this, Ir, Nt([]));
  }
  get store() {
    return ne(this, Ir);
  }
  updateData(e) {
    ne(this, Ir).set(e);
  }
  addData(e) {
    ne(this, Ir).update((n) => [...n, e]);
  }
  removeData(e) {
    ne(this, Ir).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return hc(ne(this, Ir)).find((n) => n.uuid === e);
  }
}
Ir = new WeakMap();
am({ en: Om, de: pm });
var Qy = /* @__PURE__ */ de("<h3> </h3>"), Jy = /* @__PURE__ */ de("<div><!></div>"), $y = /* @__PURE__ */ de("<!> <!>", 1), eI = /* @__PURE__ */ de("<div><!></div>"), tI = /* @__PURE__ */ de('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div> <!> <!>', 1);
function nI(t, e) {
  xe(e, !0);
  const n = () => Hn(im, "$_", r), [r, i] = Zn(), a = Ti.getInstance();
  let s = /* @__PURE__ */ Ie(void 0);
  const u = new To(), l = new To(), c = l.pipe(
    Ey(u.pipe(by(200))),
    qn(() => x(o(S))),
    _y((O, ie) => JSON.stringify(O) === JSON.stringify(ie)),
    Ii(() => {
      K(f, !1);
    }),
    vu((O) => a.searchFiles(O).pipe(
      Ii((ie) => {
        [...ie], d().updateData(ie);
      }),
      hu(() => {
        K(f, !0);
      })
    ))
  );
  let d = g(e, "dataStore", 19, () => new pu()), h = g(e, "historyStore", 19, () => new pu()), f = /* @__PURE__ */ Ie(!0), m = /* @__PURE__ */ Ie(!1), v = /* @__PURE__ */ Ie("");
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
      tooltip: "Open",
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
    console.debug("deleteResource: ", O), (await Jl($l, {
      title: "Confirm Deletion",
      message: `Are you sure you want to delete the resource "${O.filename} (${O.uuid})"? This action cannot be undone.`,
      confirmActionText: "Delete",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && a.deleteResource(O.type, O.uuid).pipe(ca(1)).subscribe({
      next: () => {
        u.next(null), ma.success("Deleted resource", `Resource "${O.filename} (${O.uuid})" has been deleted.`);
      },
      error: (se) => {
        console.error(`Failed to delete resource "${O.filename} (${O.uuid})":`, se), ma.error("Deletion failed", `Failed to delete resource "${O.filename} (${O.uuid})".`);
      }
    });
  }
  function T(O) {
    console.log("Download file: ", O), a.downloadSclData(O.uuid, O.type, O.version).pipe(ca(1), Ii((ie) => {
      const se = window.URL.createObjectURL(ie), Z = document.createElement("a");
      Z.href = se, Z.download = `${O.filename}.${O.type.toLowerCase()}`, Z.style.display = "none", document.body.appendChild(Z), Z.click(), document.body.removeChild(Z), window.URL.revokeObjectURL(se);
    })).subscribe();
  }
  function x(O) {
    const ie = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    return O.forEach((se) => {
      if (se.key in ie && se.type !== "date" && se.value)
        ie[se.key] = se.value;
      else if (se.type === "date" && se.value) {
        const Z = new Date(se.value);
        se.key === "from" ? ie.from = Z.toISOString() : se.key === "to" && (Z.setHours(23, 59, 59, 999), ie.to = Z.toISOString());
      }
    }), o(v) && o(v).trim() !== "" && (ie.filename = o(v).trim()), ie;
  }
  function C(O) {
    K(s, O, !0), a.getHistoryFiles(O.uuid).pipe(ca(1), Ii((ie) => {
      K(m, !0), [...ie], h().updateData(ie);
    })).subscribe();
  }
  function N(O) {
    console.log("Dialog closed with result: ", O), K(m, !1);
  }
  async function W(O) {
    if ((await Jl($l, {
      title: "Open File",
      message: `Do you want to open "${O.filename}"? 

Any unsaved changes in your current project will be lost.`,
      confirmActionText: "Open",
      cancelActionText: "Cancel"
    })).type !== "confirm")
      return;
    let se = "";
    a.downloadSclData(O.uuid, O.type, O.version).pipe(
      ca(1),
      Ii((Z) => {
        se = window.URL.createObjectURL(Z);
      }),
      vu(() => $o(fetch(se).then((Z) => {
        if (Z.status === 200)
          return Z.text();
        throw new Error(`Failed to load ${O.filename}: ${Z.status} ${Z.statusText}`);
      }))),
      ca(1),
      bd((Z) => (ma.error("Open Document Failed", `Failed to open document "${O.filename}".`), console.error(Z), pd(void 0))),
      Ii((Z) => {
        var te;
        if (!Z)
          return;
        const ye = O.filename, V = new DOMParser().parseFromString(Z, "application/xml");
        (te = window.document.getElementsByTagName("open-scd")[0]) == null || te.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: V, docName: ye }
        }));
      }),
      hu(() => se && window.URL.revokeObjectURL(se))
    ).subscribe();
  }
  var k = tI(), F = z(k), ue = ce(F), G = ce(ue);
  Sp(G, {
    onClose: N,
    get open() {
      return o(m);
    },
    set open(Z) {
      K(m, Z, !0);
    },
    title: (Z) => {
      var ye = Qy(), V = ce(ye);
      Le((te) => Ze(V, te), [
        () => {
          var te;
          return n()("versionHistory.title", { values: { filename: (te = o(s)) == null ? void 0 : te.filename } });
        }
      ]), w(Z, ye);
    },
    content: (Z) => {
      var ye = Jy(), V = ce(ye);
      {
        let te = /* @__PURE__ */ be(() => n()("search"));
        au(V, {
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
            return o(te);
          }
        });
      }
      w(Z, ye);
    },
    actions: (Z) => {
      var ye = eI(), V = ce(ye);
      Gc(V, {
        callback: N,
        variant: "raised",
        children: (te, Q) => {
          var le = $y(), Ee = z(le);
          Zo(Ee, {});
          var q = me(Ee, 2);
          Gm(q, {
            children: (ae, Re) => {
              var Ae = Et();
              Le((Ne) => Ze(Ae, Ne), [() => n()("done")]), w(ae, Ae);
            },
            $$slots: { default: !0 }
          }), w(te, le);
        },
        $$slots: { default: !0 }
      }), w(Z, ye);
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var B = me(G, 2), U = ce(B);
  S_(U, {
    searchLabel: "Search file name...",
    onFilterChange: () => u.next(null),
    onSearchInput: () => u.next(null),
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
  var X = me(B, 2), ee = ce(X);
  {
    let O = /* @__PURE__ */ be(() => n()("search"));
    au(ee, {
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
  i_(P, {});
  var L = me(P, 2);
  Cp(L, {}), w(t, k), Te(), i();
}
const Id = "version-editor", Ed = "0.0.1";
var rI = /* @__PURE__ */ de('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function iI(t, e) {
  xe(e, !0);
  let n = g(e, "dev", 3, !1);
  var r = rI(), i = z(r);
  {
    var a = (l) => {
      nI(l, {});
    };
    re(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var s = me(i, 2), u = me(s, 2);
  Le(() => {
    _l(s, Id), _l(u, Ed);
  }), w(t, r), Te();
}
var Ni;
class uI extends HTMLElement {
  constructor() {
    super();
    Je(this, Ni);
    De(this, Ni, /* @__PURE__ */ Ie(Ce({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return o(ne(this, Ni));
  }
  set props(n) {
    K(ne(this, Ni), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Vf(iI, { target: this.shadowRoot, props: this.props });
    const n = aI();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Ni = new WeakMap();
function aI() {
  const t = `${Id}-v${Ed}-style`, e = sI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function sI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  uI as default
};
