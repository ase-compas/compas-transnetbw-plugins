var Ad = Object.defineProperty;
var $o = (t) => {
  throw TypeError(t);
};
var Sd = (t, e, n) => e in t ? Ad(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var mi = (t, e, n) => Sd(t, typeof e != "symbol" ? e + "" : e, n), Hs = (t, e, n) => e.has(t) || $o("Cannot " + n);
var J = (t, e, n) => (Hs(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Qe = (t, e, n) => e.has(t) ? $o("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), De = (t, e, n, r) => (Hs(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Ft = (t, e, n) => (Hs(t, e, "access private method"), n);
const wt = Symbol(), xd = "http://www.w3.org/1999/xhtml", Cd = "http://www.w3.org/2000/svg", Td = "@attach", pu = !1;
var _s = Array.isArray, wd = Array.prototype.indexOf, Co = Array.from, ts = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, gu = Object.getOwnPropertyDescriptors, Ld = Object.prototype, Od = Array.prototype, To = Object.getPrototypeOf, el = Object.isExtensible;
function yi(t) {
  return typeof t == "function";
}
const me = () => {
};
function Rd(t) {
  return t();
}
function ns(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function bu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const en = 2, wo = 4, ys = 8, Cr = 16, lr = 32, ai = 64, Lo = 128, An = 256, rs = 512, jt = 1024, mn = 2048, Tr = 4096, Pn = 8192, si = 16384, Is = 32768, wr = 65536, tl = 1 << 17, Md = 1 << 18, zi = 1 << 19, _u = 1 << 20, to = 1 << 21, Es = 1 << 22, Yr = 1 << 23, qn = Symbol("$state"), yu = Symbol("legacy props"), Dd = Symbol(""), Ii = new class extends Error {
  constructor() {
    super(...arguments);
    mi(this, "name", "StaleReactionError");
    mi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Oo(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Pd() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Hd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Nd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ud(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function kd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Bd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Fd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function jd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function qd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function zd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Wd = !1;
function Iu(t) {
  return t === this.v;
}
function Ro(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Eu(t) {
  return !Ro(t, this.v);
}
let Wi = !1, Xd = !1;
function Kd() {
  Wi = !0;
}
let rt = null;
function Pi(t) {
  rt = t;
}
function he(t) {
  return (
    /** @type {T} */
    Au().get(t)
  );
}
function re(t, e) {
  return Au().set(t, e), e;
}
function Ce(t, e = !1, n) {
  rt = {
    p: rt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Wi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Te(t) {
  var e = (
    /** @type {ComponentContext} */
    rt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Vu(r);
  }
  return t !== void 0 && (e.x = t), rt = e.p, t ?? /** @type {T} */
  {};
}
function Ta() {
  return !Wi || rt !== null && rt.l === null;
}
function Au(t) {
  return rt === null && Oo(), rt.c ?? (rt.c = new Map(Zd(rt) || void 0));
}
function Zd(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let jr = [];
function Su() {
  var t = jr;
  jr = [], ns(t);
}
function or(t) {
  if (jr.length === 0 && !va) {
    var e = jr;
    queueMicrotask(() => {
      e === jr && Su();
    });
  }
  jr.push(t);
}
function Yd() {
  for (; jr.length > 0; )
    Su();
}
const Qd = /* @__PURE__ */ new WeakMap();
function xu(t) {
  var e = ke;
  if (e === null)
    return Ue.f |= Yr, t;
  if (e.f & Is)
    Hi(t, e);
  else {
    if (!(e.f & Lo))
      throw !e.parent && t instanceof Error && Cu(t), t;
    e.b.error(t);
  }
}
function Hi(t, e) {
  for (; e !== null; ) {
    if (e.f & Lo)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Cu(t), t;
}
function Cu(t) {
  const e = Qd.get(t);
  e && (ts(t, "message", {
    value: e.message
  }), ts(t, "stack", {
    value: e.stack
  }));
}
const Ua = /* @__PURE__ */ new Set();
let tt = null, Ka = null, Pt = null, no = /* @__PURE__ */ new Set(), jn = [], As = null, ro = !1, va = !1;
var wi, Li, zr, Sa, Oi, Ri, Wr, Mi, xa, Ca, Sn, io, Za, ao;
const ps = class ps {
  constructor() {
    Qe(this, Sn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    mi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Qe(this, wi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Qe(this, Li, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Qe(this, zr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Qe(this, Sa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Qe(this, Oi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Qe(this, Ri, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Qe(this, Wr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Qe(this, Mi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Qe(this, xa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Qe(this, Ca, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    mi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    jn = [], Ka = null, this.apply();
    for (const s of e)
      Ft(this, Sn, io).call(this, s);
    if (J(this, zr) === 0) {
      var n = Pt;
      Ft(this, Sn, ao).call(this);
      var r = J(this, Ri), i = J(this, Wr);
      De(this, Ri, []), De(this, Wr, []), De(this, Mi, []), Ka = this, tt = null, Pt = n, nl(r), nl(i), Ka = null, (a = J(this, Sa)) == null || a.resolve();
    } else
      Ft(this, Sn, Za).call(this, J(this, Ri)), Ft(this, Sn, Za).call(this, J(this, Wr)), Ft(this, Sn, Za).call(this, J(this, Mi));
    Pt = null;
    for (const s of J(this, Oi))
      ga(s);
    De(this, Oi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    J(this, wi).has(e) || J(this, wi).set(e, n), this.current.set(e, e.v), Pt == null || Pt.set(e, e.v);
  }
  activate() {
    tt = this;
  }
  deactivate() {
    tt = null, Pt = null;
  }
  flush() {
    if (jn.length > 0) {
      if (this.activate(), Tu(), tt !== null && tt !== this)
        return;
    } else J(this, zr) === 0 && Ft(this, Sn, ao).call(this);
    this.deactivate();
    for (const e of no)
      if (no.delete(e), e(), tt !== null)
        break;
  }
  increment() {
    De(this, zr, J(this, zr) + 1);
  }
  decrement() {
    De(this, zr, J(this, zr) - 1);
    for (const e of J(this, xa))
      Qt(e, mn), ei(e);
    for (const e of J(this, Ca))
      Qt(e, Tr), ei(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    J(this, Li).add(e);
  }
  settled() {
    return (J(this, Sa) ?? De(this, Sa, bu())).promise;
  }
  static ensure() {
    if (tt === null) {
      const e = tt = new ps();
      Ua.add(tt), va || ps.enqueue(() => {
        tt === e && e.flush();
      });
    }
    return tt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    or(e);
  }
  apply() {
  }
};
wi = new WeakMap(), Li = new WeakMap(), zr = new WeakMap(), Sa = new WeakMap(), Oi = new WeakMap(), Ri = new WeakMap(), Wr = new WeakMap(), Mi = new WeakMap(), xa = new WeakMap(), Ca = new WeakMap(), Sn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
io = function(e) {
  var l;
  e.f ^= jt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (lr | ai)) !== 0, a = i && (r & jt) !== 0, s = a || (r & Pn) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      i ? n.f ^= jt : r & wo ? J(this, Wr).push(n) : r & jt || (r & Es && ((l = n.b) != null && l.is_pending()) ? J(this, Oi).push(n) : Cs(n) && (n.f & Cr && J(this, Mi).push(n), ga(n)));
      var c = n.first;
      if (c !== null) {
        n = c;
        continue;
      }
    }
    var u = n.parent;
    for (n = n.next; n === null && u !== null; )
      n = u.next, u = u.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
Za = function(e) {
  for (const n of e)
    (n.f & mn ? J(this, xa) : J(this, Ca)).push(n), Qt(n, jt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ao = function() {
  var e;
  for (const n of J(this, Li))
    n();
  if (J(this, Li).clear(), Ua.size > 1) {
    J(this, wi).clear();
    let n = !0;
    for (const r of Ua) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [s, c] of this.current) {
        if (r.current.has(s))
          if (n && c !== r.current.get(s))
            r.current.set(s, c);
          else
            continue;
        i.push(s);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((s) => !this.current.has(s));
      if (a.length > 0) {
        for (const s of i)
          wu(s, a);
        if (jn.length > 0) {
          tt = r, r.apply();
          for (const s of jn)
            Ft(e = r, Sn, io).call(e, s);
          jn = [], r.deactivate();
        }
      }
    }
    tt = null;
  }
  Ua.delete(this);
};
let sr = ps;
function Jd(t) {
  var e = va;
  va = !0;
  try {
    for (var n; ; ) {
      if (Yd(), jn.length === 0 && (tt == null || tt.flush(), jn.length === 0))
        return As = null, /** @type {T} */
        n;
      Tu();
    }
  } finally {
    va = e;
  }
}
function Tu() {
  var t = xi;
  ro = !0;
  try {
    var e = 0;
    for (sl(!0); jn.length > 0; ) {
      var n = sr.ensure();
      if (e++ > 1e3) {
        var r, i;
        $d();
      }
      n.process(jn), Ir.clear();
    }
  } finally {
    ro = !1, sl(t), As = null;
  }
}
function $d() {
  try {
    kd();
  } catch (t) {
    Hi(t, As);
  }
}
let ir = null;
function nl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (si | Pn)) && Cs(r) && (ir = [], ga(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? qu(r) : r.fn = null), (ir == null ? void 0 : ir.length) > 0)) {
        Ir.clear();
        for (const i of ir)
          ga(i);
        ir = [];
      }
    }
    ir = null;
  }
}
function wu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & en ? wu(
        /** @type {Derived} */
        n,
        e
      ) : r & (Es | Cr) && Lu(n, e) && (Qt(n, mn), ei(
        /** @type {Effect} */
        n
      ));
    }
}
function Lu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & en && Lu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ei(t) {
  for (var e = As = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ro && e === ke && n & Cr)
      return;
    if (n & (ai | lr)) {
      if (!(n & jt)) return;
      e.f ^= jt;
    }
  }
  jn.push(e);
}
function ef(t) {
  let e = 0, n = ti(0), r;
  return () => {
    gf() && (o(n), Oa(() => (e === 0 && (r = Hn(() => t(() => ma(n)))), e += 1, () => {
      or(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, ma(n));
      });
    })));
  };
}
var tf = wr | zi | Lo;
function nf(t, e, n) {
  new rf(t, e, n);
}
var Rn, In, xo, Fn, Xr, Vn, En, sn, Gn, mr, Kr, pr, Zr, gr, gs, bs, $t, af, sf, Ya, Qa, so;
class rf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Qe(this, $t);
    /** @type {Boundary | null} */
    mi(this, "parent");
    Qe(this, Rn, !1);
    /** @type {TemplateNode} */
    Qe(this, In);
    /** @type {TemplateNode | null} */
    Qe(this, xo, null);
    /** @type {BoundaryProps} */
    Qe(this, Fn);
    /** @type {((anchor: Node) => void)} */
    Qe(this, Xr);
    /** @type {Effect} */
    Qe(this, Vn);
    /** @type {Effect | null} */
    Qe(this, En, null);
    /** @type {Effect | null} */
    Qe(this, sn, null);
    /** @type {Effect | null} */
    Qe(this, Gn, null);
    /** @type {DocumentFragment | null} */
    Qe(this, mr, null);
    Qe(this, Kr, 0);
    Qe(this, pr, 0);
    Qe(this, Zr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Qe(this, gr, null);
    Qe(this, gs, () => {
      J(this, gr) && Ni(J(this, gr), J(this, Kr));
    });
    Qe(this, bs, ef(() => (De(this, gr, ti(J(this, Kr))), () => {
      De(this, gr, null);
    })));
    De(this, In, e), De(this, Fn, n), De(this, Xr, r), this.parent = /** @type {Effect} */
    ke.b, De(this, Rn, !!J(this, Fn).pending), De(this, Vn, Or(() => {
      ke.b = this;
      {
        try {
          De(this, En, Vt(() => r(J(this, In))));
        } catch (i) {
          this.error(i);
        }
        J(this, pr) > 0 ? Ft(this, $t, Qa).call(this) : De(this, Rn, !1);
      }
    }, tf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return J(this, Rn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!J(this, Fn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Ft(this, $t, so).call(this, e), De(this, Kr, J(this, Kr) + e), no.add(J(this, gs));
  }
  get_effect_pending() {
    return J(this, bs).call(this), o(
      /** @type {Source<number>} */
      J(this, gr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = J(this, Fn).onerror;
    let r = J(this, Fn).failed;
    if (J(this, Zr) || !n && !r)
      throw e;
    J(this, En) && (Nt(J(this, En)), De(this, En, null)), J(this, sn) && (Nt(J(this, sn)), De(this, sn, null)), J(this, Gn) && (Nt(J(this, Gn)), De(this, Gn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        zd();
        return;
      }
      i = !0, a && jd(), sr.ensure(), De(this, Kr, 0), J(this, Gn) !== null && Er(J(this, Gn), () => {
        De(this, Gn, null);
      }), De(this, Rn, this.has_pending_snippet()), De(this, En, Ft(this, $t, Ya).call(this, () => (De(this, Zr, !1), Vt(() => J(this, Xr).call(this, J(this, In)))))), J(this, pr) > 0 ? Ft(this, $t, Qa).call(this) : De(this, Rn, !1);
    };
    var c = Ue;
    try {
      ln(null), a = !0, n == null || n(e, s), a = !1;
    } catch (u) {
      Hi(u, J(this, Vn) && J(this, Vn).parent);
    } finally {
      ln(c);
    }
    r && or(() => {
      De(this, Gn, Ft(this, $t, Ya).call(this, () => {
        De(this, Zr, !0);
        try {
          return Vt(() => {
            r(
              J(this, In),
              () => e,
              () => s
            );
          });
        } catch (u) {
          return Hi(
            u,
            /** @type {Effect} */
            J(this, Vn).parent
          ), null;
        } finally {
          De(this, Zr, !1);
        }
      }));
    });
  }
}
Rn = new WeakMap(), In = new WeakMap(), xo = new WeakMap(), Fn = new WeakMap(), Xr = new WeakMap(), Vn = new WeakMap(), En = new WeakMap(), sn = new WeakMap(), Gn = new WeakMap(), mr = new WeakMap(), Kr = new WeakMap(), pr = new WeakMap(), Zr = new WeakMap(), gr = new WeakMap(), gs = new WeakMap(), bs = new WeakMap(), $t = new WeakSet(), af = function() {
  try {
    De(this, En, Vt(() => J(this, Xr).call(this, J(this, In))));
  } catch (e) {
    this.error(e);
  }
  De(this, Rn, !1);
}, sf = function() {
  const e = J(this, Fn).pending;
  e && (De(this, sn, Vt(() => e(J(this, In)))), sr.enqueue(() => {
    De(this, En, Ft(this, $t, Ya).call(this, () => (sr.ensure(), Vt(() => J(this, Xr).call(this, J(this, In)))))), J(this, pr) > 0 ? Ft(this, $t, Qa).call(this) : (Er(
      /** @type {Effect} */
      J(this, sn),
      () => {
        De(this, sn, null);
      }
    ), De(this, Rn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Ya = function(e) {
  var n = ke, r = Ue, i = rt;
  Xn(J(this, Vn)), ln(J(this, Vn)), Pi(J(this, Vn).ctx);
  try {
    return e();
  } catch (a) {
    return xu(a), null;
  } finally {
    Xn(n), ln(r), Pi(i);
  }
}, Qa = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    J(this, Fn).pending
  );
  J(this, En) !== null && (De(this, mr, document.createDocumentFragment()), of(J(this, En), J(this, mr))), J(this, sn) === null && De(this, sn, Vt(() => e(J(this, In))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
so = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Ft(n = this.parent, $t, so).call(n, e);
    return;
  }
  De(this, pr, J(this, pr) + e), J(this, pr) === 0 && (De(this, Rn, !1), J(this, sn) && Er(J(this, sn), () => {
    De(this, sn, null);
  }), J(this, mr) && (J(this, In).before(J(this, mr)), De(this, mr, null)), or(() => {
    sr.ensure().flush();
  }));
};
function of(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ La(n)
    );
    e.append(n), n = i;
  }
}
function Ou(t, e, n) {
  const r = Ta() ? wa : Mo;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = tt, a = (
    /** @type {Effect} */
    ke
  ), s = lf();
  Promise.all(e.map((c) => /* @__PURE__ */ uf(c))).then((c) => {
    s();
    try {
      n([...t.map(r), ...c]);
    } catch (u) {
      a.f & si || Hi(u, a);
    }
    i == null || i.deactivate(), oo();
  }).catch((c) => {
    Hi(c, a);
  });
}
function lf() {
  var t = ke, e = Ue, n = rt, r = tt;
  return function() {
    Xn(t), ln(e), Pi(n), r == null || r.activate();
  };
}
function oo() {
  Xn(null), ln(null), Pi(null);
}
// @__NO_SIDE_EFFECTS__
function wa(t) {
  var e = en | mn, n = Ue !== null && Ue.f & en ? (
    /** @type {Derived} */
    Ue
  ) : null;
  return ke === null || n !== null && n.f & An ? e |= An : ke.f |= zi, {
    ctx: rt,
    deps: null,
    effects: null,
    equals: Iu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      wt
    ),
    wv: 0,
    parent: n ?? ke,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function uf(t, e) {
  let n = (
    /** @type {Effect | null} */
    ke
  );
  n === null && Pd();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ti(
    /** @type {V} */
    wt
  ), s = !Ue, c = /* @__PURE__ */ new Map();
  return yf(() => {
    var f;
    var u = bu();
    i = u.promise;
    try {
      Promise.resolve(t()).then(u.resolve, u.reject).then(oo);
    } catch (m) {
      u.reject(m), oo();
    }
    var l = (
      /** @type {Batch} */
      tt
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (l.increment(), (f = c.get(l)) == null || f.reject(Ii), c.delete(l), c.set(l, u)));
    const h = (m, v = void 0) => {
      if (d || l.activate(), v)
        v !== Ii && (a.f |= Yr, Ni(a, v));
      else {
        a.f & Yr && (a.f ^= Yr), Ni(a, m);
        for (const [p, b] of c) {
          if (c.delete(p), p === l) break;
          b.reject(Ii);
        }
      }
      s && (r.update_pending_count(-1), d || l.decrement());
    };
    u.promise.then(h, (m) => h(null, m || "unknown"));
  }), Ss(() => {
    for (const u of c.values())
      u.reject(Ii);
  }), new Promise((u) => {
    function l(d) {
      function h() {
        d === i ? u(a) : l(i);
      }
      d.then(h, h);
    }
    l(i);
  });
}
// @__NO_SIDE_EFFECTS__
function ge(t) {
  const e = /* @__PURE__ */ wa(t);
  return Xu(e), e;
}
// @__NO_SIDE_EFFECTS__
function Mo(t) {
  const e = /* @__PURE__ */ wa(t);
  return e.equals = Eu, e;
}
function Ru(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Nt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function cf(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & en))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Do(t) {
  var e, n = ke;
  Xn(cf(t));
  try {
    Ru(t), e = Qu(t);
  } finally {
    Xn(n);
  }
  return e;
}
function Mu(t) {
  var e = Do(t);
  if (t.equals(e) || (t.v = e, t.wv = Zu()), !li)
    if (Pt !== null)
      Pt.set(t, t.v);
    else {
      var n = (br || t.f & An) && t.deps !== null ? Tr : jt;
      Qt(t, n);
    }
}
const Ir = /* @__PURE__ */ new Map();
function ti(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Iu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function pe(t, e) {
  const n = ti(t);
  return Xu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Du(t, e = !1, n = !0) {
  var i;
  const r = ti(t);
  return e || (r.equals = Eu), Wi && n && rt !== null && rt.l !== null && ((i = rt.l).s ?? (i.s = [])).push(r), r;
}
function z(t, e, n = !1) {
  Ue !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mn || Ue.f & tl) && Ta() && Ue.f & (en | Cr | Es | tl) && !(Yt != null && Yt.includes(t)) && Gd();
  let r = n ? _e(e) : e;
  return Ni(t, r);
}
function Ni(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    li ? Ir.set(t, e) : Ir.set(t, n), t.v = e;
    var r = sr.ensure();
    r.capture(t, n), t.f & en && (t.f & mn && Do(
      /** @type {Derived} */
      t
    ), Qt(t, t.f & An ? Tr : jt)), t.wv = Zu(), Pu(t, mn), Ta() && ke !== null && ke.f & jt && !(ke.f & (lr | ai)) && (yn === null ? Af([t]) : yn.push(t));
  }
  return e;
}
function ma(t) {
  z(t, t.v + 1);
}
function Pu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ta(), i = n.length, a = 0; a < i; a++) {
      var s = n[a], c = s.f;
      if (!(!r && s === ke)) {
        var u = (c & mn) === 0;
        u && Qt(s, e), c & en ? Pu(
          /** @type {Derived} */
          s,
          Tr
        ) : u && (c & Cr && ir !== null && ir.push(
          /** @type {Effect} */
          s
        ), ei(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function _e(t) {
  if (typeof t != "object" || t === null || qn in t)
    return t;
  const e = To(t);
  if (e !== Ld && e !== Od)
    return t;
  var n = /* @__PURE__ */ new Map(), r = _s(t), i = /* @__PURE__ */ pe(0), a = Qr, s = (c) => {
    if (Qr === a)
      return c();
    var u = Ue, l = Qr;
    ln(null), ll(a);
    var d = c();
    return ln(u), ll(l), d;
  };
  return r && n.set("length", /* @__PURE__ */ pe(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, u, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && Fd();
        var d = n.get(u);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ pe(l.value);
          return n.set(u, h), h;
        }) : z(d, l.value, !0), !0;
      },
      deleteProperty(c, u) {
        var l = n.get(u);
        if (l === void 0) {
          if (u in c) {
            const d = s(() => /* @__PURE__ */ pe(wt));
            n.set(u, d), ma(i);
          }
        } else
          z(l, wt), ma(i);
        return !0;
      },
      get(c, u, l) {
        var m;
        if (u === qn)
          return t;
        var d = n.get(u), h = u in c;
        if (d === void 0 && (!h || (m = yr(c, u)) != null && m.writable) && (d = s(() => {
          var v = _e(h ? c[u] : wt), p = /* @__PURE__ */ pe(v);
          return p;
        }), n.set(u, d)), d !== void 0) {
          var f = o(d);
          return f === wt ? void 0 : f;
        }
        return Reflect.get(c, u, l);
      },
      getOwnPropertyDescriptor(c, u) {
        var l = Reflect.getOwnPropertyDescriptor(c, u);
        if (l && "value" in l) {
          var d = n.get(u);
          d && (l.value = o(d));
        } else if (l === void 0) {
          var h = n.get(u), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== wt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return l;
      },
      has(c, u) {
        var f;
        if (u === qn)
          return !0;
        var l = n.get(u), d = l !== void 0 && l.v !== wt || Reflect.has(c, u);
        if (l !== void 0 || ke !== null && (!d || (f = yr(c, u)) != null && f.writable)) {
          l === void 0 && (l = s(() => {
            var m = d ? _e(c[u]) : wt, v = /* @__PURE__ */ pe(m);
            return v;
          }), n.set(u, l));
          var h = o(l);
          if (h === wt)
            return !1;
        }
        return d;
      },
      set(c, u, l, d) {
        var A;
        var h = n.get(u), f = u in c;
        if (r && u === "length")
          for (var m = l; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var v = n.get(m + "");
            v !== void 0 ? z(v, wt) : m in c && (v = s(() => /* @__PURE__ */ pe(wt)), n.set(m + "", v));
          }
        if (h === void 0)
          (!f || (A = yr(c, u)) != null && A.writable) && (h = s(() => /* @__PURE__ */ pe(void 0)), z(h, _e(l)), n.set(u, h));
        else {
          f = h.v !== wt;
          var p = s(() => _e(l));
          z(h, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(c, u);
        if (b != null && b.set && b.set.call(d, l), !f) {
          if (r && typeof u == "string") {
            var y = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(u);
            Number.isInteger(E) && E >= y.v && z(y, E + 1);
          }
          ma(i);
        }
        return !0;
      },
      ownKeys(c) {
        o(i);
        var u = Reflect.ownKeys(c).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== wt;
        });
        for (var [l, d] of n)
          d.v !== wt && !(l in c) && u.push(l);
        return u;
      },
      setPrototypeOf() {
        Vd();
      }
    }
  );
}
function rl(t) {
  try {
    if (t !== null && typeof t == "object" && qn in t)
      return t[qn];
  } catch {
  }
  return t;
}
function df(t, e) {
  return Object.is(rl(t), rl(e));
}
var il, Hu, Nu, Uu, ku;
function ff() {
  if (il === void 0) {
    il = window, Hu = document, Nu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Uu = yr(e, "firstChild").get, ku = yr(e, "nextSibling").get, el(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), el(n) && (n.__t = void 0);
  }
}
function Lr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ui(t) {
  return Uu.call(t);
}
// @__NO_SIDE_EFFECTS__
function La(t) {
  return ku.call(t);
}
function ae(t, e) {
  return /* @__PURE__ */ Ui(t);
}
function Z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ui(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ La(n) : n;
  }
}
function be(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ La(r);
  return r;
}
function hf(t) {
  t.textContent = "";
}
function Po() {
  return !1;
}
function vf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, or(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let al = !1;
function mf() {
  al || (al = !0, document.addEventListener(
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
function Xi(t) {
  var e = Ue, n = ke;
  ln(null), Xn(null);
  try {
    return t();
  } finally {
    ln(e), Xn(n);
  }
}
function Bu(t, e, n, r = n) {
  t.addEventListener(e, () => Xi(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), mf();
}
function Fu(t) {
  ke === null && Ue === null && Ud(), Ue !== null && Ue.f & An && ke === null && Nd(), li && Hd();
}
function pf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Kn(t, e, n, r = !0) {
  var i = ke;
  i !== null && i.f & Pn && (t |= Pn);
  var a = {
    ctx: rt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | mn,
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
      ga(a), a.f |= Is;
    } catch (u) {
      throw Nt(a), u;
    }
  else e !== null && ei(a);
  if (r) {
    var s = a;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & zi) && (s = s.first), s !== null && (s.parent = i, i !== null && pf(s, i), Ue !== null && Ue.f & en && !(t & ai))) {
      var c = (
        /** @type {Derived} */
        Ue
      );
      (c.effects ?? (c.effects = [])).push(s);
    }
  }
  return a;
}
function gf() {
  return Ue !== null && !Mn;
}
function Ss(t) {
  const e = Kn(ys, null, !1);
  return Qt(e, jt), e.teardown = t, e;
}
function Le(t) {
  Fu();
  var e = (
    /** @type {Effect} */
    ke.f
  ), n = !Ue && (e & lr) !== 0 && (e & Is) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      rt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Vu(t);
}
function Vu(t) {
  return Kn(wo | _u, t, !1);
}
function bf(t) {
  return Fu(), Kn(ys | _u, t, !0);
}
function _f(t) {
  sr.ensure();
  const e = Kn(ai | zi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Er(e, () => {
      Nt(e), r(void 0);
    }) : (Nt(e), r(void 0));
  });
}
function oi(t) {
  return Kn(wo, t, !1);
}
function yf(t) {
  return Kn(Es | zi, t, !0);
}
function Oa(t, e = 0) {
  return Kn(ys | e, t, !0);
}
function Oe(t, e = [], n = []) {
  Ou(e, n, (r) => {
    Kn(ys, () => t(...r.map(o)), !0);
  });
}
function Or(t, e = 0) {
  var n = Kn(Cr | e, t, !0);
  return n;
}
function Vt(t, e = !0) {
  return Kn(lr | zi, t, !0, e);
}
function Gu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = li, r = Ue;
    ol(!0), ln(null);
    try {
      e.call(null);
    } finally {
      ol(n), ln(r);
    }
  }
}
function ju(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Xi(() => {
      i.abort(Ii);
    });
    var r = n.next;
    n.f & ai ? n.parent = null : Nt(n, e), n = r;
  }
}
function If(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & lr || Nt(e), e = n;
  }
}
function Nt(t, e = !0) {
  var n = !1;
  (e || t.f & Md) && t.nodes_start !== null && t.nodes_end !== null && (Ef(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), ju(t, e && !n), is(t, 0), Qt(t, si);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Gu(t);
  var i = t.parent;
  i !== null && i.first !== null && qu(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Ef(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ La(t)
    );
    t.remove(), t = n;
  }
}
function qu(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Er(t, e) {
  var n = [];
  Ho(t, n, !0), zu(n, () => {
    Nt(t), e && e();
  });
}
function zu(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Ho(t, e, n) {
  if (!(t.f & Pn)) {
    if (t.f ^= Pn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & wr) !== 0 || (r.f & lr) !== 0;
      Ho(r, e, a ? n : !1), r = i;
    }
  }
}
function xs(t) {
  Wu(t, !0);
}
function Wu(t, e) {
  if (t.f & Pn) {
    t.f ^= Pn, t.f & jt || (Qt(t, mn), ei(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & wr) !== 0 || (n.f & lr) !== 0;
      Wu(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let xi = !1;
function sl(t) {
  xi = t;
}
let li = !1;
function ol(t) {
  li = t;
}
let Ue = null, Mn = !1;
function ln(t) {
  Ue = t;
}
let ke = null;
function Xn(t) {
  ke = t;
}
let Yt = null;
function Xu(t) {
  Ue !== null && (Yt === null ? Yt = [t] : Yt.push(t));
}
let Xt = null, hn = 0, yn = null;
function Af(t) {
  yn = t;
}
let Ku = 1, pa = 0, Qr = pa;
function ll(t) {
  Qr = t;
}
let br = !1;
function Zu() {
  return ++Ku;
}
function Cs(t) {
  var h;
  var e = t.f;
  if (e & mn)
    return !0;
  if (e & Tr) {
    var n = t.deps, r = (e & An) !== 0;
    if (n !== null) {
      var i, a, s = (e & rs) !== 0, c = r && ke !== null && !br, u = n.length;
      if ((s || c) && (ke === null || !(ke.f & si))) {
        var l = (
          /** @type {Derived} */
          t
        ), d = l.parent;
        for (i = 0; i < u; i++)
          a = n[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(l))) && (a.reactions ?? (a.reactions = [])).push(l);
        s && (l.f ^= rs), c && d !== null && !(d.f & An) && (l.f ^= An);
      }
      for (i = 0; i < u; i++)
        if (a = n[i], Cs(
          /** @type {Derived} */
          a
        ) && Mu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || ke !== null && !br) && Qt(t, jt);
  }
  return !1;
}
function Yu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Yt != null && Yt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & en ? Yu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? Qt(a, mn) : a.f & jt && Qt(a, Tr), ei(
        /** @type {Effect} */
        a
      ));
    }
}
function Qu(t) {
  var p;
  var e = Xt, n = hn, r = yn, i = Ue, a = br, s = Yt, c = rt, u = Mn, l = Qr, d = t.f;
  Xt = /** @type {null | Value[]} */
  null, hn = 0, yn = null, br = (d & An) !== 0 && (Mn || !xi || Ue === null), Ue = d & (lr | ai) ? null : t, Yt = null, Pi(t.ctx), Mn = !1, Qr = ++pa, t.ac !== null && (Xi(() => {
    t.ac.abort(Ii);
  }), t.ac = null);
  try {
    t.f |= to;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), m = t.deps;
    if (Xt !== null) {
      var v;
      if (is(t, hn), m !== null && hn > 0)
        for (m.length = hn + Xt.length, v = 0; v < Xt.length; v++)
          m[hn + v] = Xt[v];
      else
        t.deps = m = Xt;
      if (!br || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & en && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = hn; v < m.length; v++)
          ((p = m[v]).reactions ?? (p.reactions = [])).push(t);
    } else m !== null && hn < m.length && (is(t, hn), m.length = hn);
    if (Ta() && yn !== null && !Mn && m !== null && !(t.f & (en | Tr | mn)))
      for (v = 0; v < /** @type {Source[]} */
      yn.length; v++)
        Yu(
          yn[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (pa++, yn !== null && (r === null ? r = yn : r.push(.../** @type {Source[]} */
    yn))), t.f & Yr && (t.f ^= Yr), f;
  } catch (b) {
    return xu(b);
  } finally {
    t.f ^= to, Xt = e, hn = n, yn = r, Ue = i, br = a, Yt = s, Pi(c), Mn = u, Qr = l;
  }
}
function Sf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = wd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & en && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Xt === null || !Xt.includes(e)) && (Qt(e, Tr), e.f & (An | rs) || (e.f ^= rs), Ru(
    /** @type {Derived} **/
    e
  ), is(
    /** @type {Derived} **/
    e,
    0
  ));
}
function is(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Sf(t, n[r]);
}
function ga(t) {
  var e = t.f;
  if (!(e & si)) {
    Qt(t, jt);
    var n = ke, r = xi;
    ke = t, xi = !0;
    try {
      e & Cr ? If(t) : ju(t), Gu(t);
      var i = Qu(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Ku;
      var a;
      pu && Xd && t.f & mn && t.deps;
    } finally {
      xi = r, ke = n;
    }
  }
}
async function Ju() {
  await Promise.resolve(), Jd();
}
function o(t) {
  var e = t.f, n = (e & en) !== 0;
  if (Ue !== null && !Mn) {
    var r = ke !== null && (ke.f & si) !== 0;
    if (!r && !(Yt != null && Yt.includes(t))) {
      var i = Ue.deps;
      if (Ue.f & to)
        t.rv < pa && (t.rv = pa, Xt === null && i !== null && i[hn] === t ? hn++ : Xt === null ? Xt = [t] : (!br || !Xt.includes(t)) && Xt.push(t));
      else {
        (Ue.deps ?? (Ue.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [Ue] : a.includes(Ue) || a.push(Ue);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var s = (
      /** @type {Derived} */
      t
    ), c = s.parent;
    c !== null && !(c.f & An) && (s.f ^= An);
  }
  if (li) {
    if (Ir.has(t))
      return Ir.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var u = s.v;
      return (!(s.f & jt) && s.reactions !== null || $u(s)) && (u = Do(s)), Ir.set(s, u), u;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, Pt != null && Pt.has(s))
      return Pt.get(s);
    Cs(s) && Mu(s);
  }
  if (Pt != null && Pt.has(t))
    return Pt.get(t);
  if (t.f & Yr)
    throw t.v;
  return t.v;
}
function $u(t) {
  if (t.v === wt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Ir.has(e) || e.f & en && $u(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Hn(t) {
  var e = Mn;
  try {
    return Mn = !0, t();
  } finally {
    Mn = e;
  }
}
const xf = -7169;
function Qt(t, e) {
  t.f = t.f & xf | e;
}
function ec(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (qn in t)
      lo(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && qn in n && lo(n);
      }
  }
}
function lo(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        lo(t[r], e);
      } catch {
      }
    const n = To(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = gu(n);
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
const tc = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set();
function No(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || fa.call(e, a), !a.cancelBubble)
      return Xi(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? or(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Cf(t, e, n, r = {}) {
  var i = No(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function da(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = No(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ss(() => {
    e.removeEventListener(t, s, a);
  });
}
function Cn(t) {
  for (var e = 0; e < t.length; e++)
    tc.add(t[e]);
  for (var n of uo)
    n(t);
}
let ul = null;
function fa(t) {
  var E;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((E = t.composedPath) == null ? void 0 : E.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  ul = t;
  var s = 0, c = ul === t && t.__root;
  if (c) {
    var u = i.indexOf(c);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var l = i.indexOf(e);
    if (l === -1)
      return;
    u <= l && (s = u);
  }
  if (a = /** @type {Element} */
  i[s] || t.target, a !== e) {
    ts(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ue, h = ke;
    ln(null), Xn(null);
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
            if (_s(p)) {
              var [b, ...y] = p;
              b.apply(a, [t, ...y]);
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
      t.__root = e, delete t.currentTarget, ln(d), Xn(h);
    }
  }
}
function nc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function ki(t, e) {
  var n = (
    /** @type {Effect} */
    ke
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function se(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = nc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Ui(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Nu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ui(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ki(c, u);
    } else
      ki(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Tf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        nc(i)
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Ui(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ui(c);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ki(u, u), u;
  };
}
// @__NO_SIDE_EFFECTS__
function un(t, e) {
  return /* @__PURE__ */ Tf(t, e, "svg");
}
function Ht(t = "") {
  {
    var e = Lr(t + "");
    return ki(e, e), e;
  }
}
function $() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Lr();
  return t.append(e, n), ki(e, n), t;
}
function w(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function wf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Lf = [
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
function Of(t) {
  return Lf.includes(t);
}
const Rf = {
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
function Mf(t) {
  return t = t.toLowerCase(), Rf[t] ?? t;
}
const Df = ["touchstart", "touchmove"];
function Pf(t) {
  return Df.includes(t);
}
let as = !0;
function cl(t) {
  as = t;
}
function it(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Hf(t, e) {
  return Nf(t, e);
}
const pi = /* @__PURE__ */ new Map();
function Nf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0 }) {
  ff();
  var c = /* @__PURE__ */ new Set(), u = (h) => {
    for (var f = 0; f < h.length; f++) {
      var m = h[f];
      if (!c.has(m)) {
        c.add(m);
        var v = Pf(m);
        e.addEventListener(m, fa, { passive: v });
        var p = pi.get(m);
        p === void 0 ? (document.addEventListener(m, fa, { passive: v }), pi.set(m, 1)) : pi.set(m, p + 1);
      }
    }
  };
  u(Co(tc)), uo.add(u);
  var l = void 0, d = _f(() => {
    var h = n ?? e.appendChild(Lr());
    return nf(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Ce({});
          var m = (
            /** @type {ComponentContext} */
            rt
          );
          m.c = a;
        }
        i && (r.$$events = i), as = s, l = t(f, r) || {}, as = !0, a && Te();
      }
    ), () => {
      var v;
      for (var f of c) {
        e.removeEventListener(f, fa);
        var m = (
          /** @type {number} */
          pi.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, fa), pi.delete(f)) : pi.set(f, m);
      }
      uo.delete(u), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Uf.set(l, d), l;
}
let Uf = /* @__PURE__ */ new WeakMap();
function Ae(t, e, ...n) {
  var r = t, i = me, a;
  Or(() => {
    i !== (i = e()) && (a && (Nt(a), a = null), a = Vt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, wr);
}
function st(t) {
  rt === null && Oo(), Wi && rt.l !== null ? kf(rt).m.push(t) : Le(() => {
    const e = Hn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Tn(t) {
  rt === null && Oo(), st(() => () => Hn(t));
}
function kf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ee(t, e, n = !1) {
  var r = t, i = null, a = null, s = wt, c = n ? wr : 0, u = !1;
  const l = (m, v = !0) => {
    u = !0, f(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? i : a, v = s ? a : i;
    m && xs(m), v && Er(v, () => {
      s ? a = null : i = null;
    });
  }
  const f = (m, v) => {
    if (s !== (s = m)) {
      var p = Po(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Lr())), s ? i ?? (i = v && Vt(() => v(b))) : a ?? (a = v && Vt(() => v(b))), p) {
        var y = (
          /** @type {Batch} */
          tt
        ), E = s ? i : a, A = s ? a : i;
        E && y.skipped_effects.delete(E), A && y.skipped_effects.add(A), y.add_callback(h);
      } else
        h();
    }
  };
  Or(() => {
    u = !1, e(l), u || f(null, null);
  }, c);
}
let Jr = null;
function dl(t) {
  Jr = t;
}
function Ei(t, e) {
  return e;
}
function Bf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, s = 0; s < a; s++)
    Ho(e[s].e, i, !0);
  var c = a > 0 && i.length === 0 && n !== null;
  if (c) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    hf(u), u.append(
      /** @type {Element} */
      n
    ), r.clear(), Bn(t, e[0].prev, e[a - 1].next);
  }
  zu(i, () => {
    for (var l = 0; l < a; l++) {
      var d = e[l];
      c || (r.delete(d.k), Bn(t, d.prev, d.next)), Nt(d.e, !c);
    }
  });
}
function Dn(t, e, n, r, i, a = null) {
  var s = t, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, u = (e & 4) !== 0;
  if (u) {
    var l = (
      /** @type {Element} */
      t
    );
    s = l.appendChild(Lr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Mo(() => {
    var y = n();
    return _s(y) ? y : y == null ? [] : Co(y);
  }), v, p;
  function b() {
    Ff(
      p,
      v,
      c,
      f,
      s,
      i,
      e,
      r,
      n
    ), a !== null && (v.length === 0 ? d ? xs(d) : d = Vt(() => a(s)) : d !== null && Er(d, () => {
      d = null;
    }));
  }
  Or(() => {
    p ?? (p = /** @type {Effect} */
    ke), v = /** @type {V[]} */
    o(m);
    var y = v.length;
    if (!(h && y === 0)) {
      h = y === 0;
      var E, A, _, I;
      if (Po()) {
        var S = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          tt
        );
        for (A = 0; A < y; A += 1) {
          _ = v[A], I = r(_, A);
          var C = c.items.get(I) ?? f.get(I);
          C ? e & 3 && rc(C, _, A, e) : (E = ic(
            null,
            c,
            null,
            null,
            _,
            I,
            A,
            i,
            e,
            n,
            !0
          ), f.set(I, E)), S.add(I);
        }
        for (const [x, H] of c.items)
          S.has(x) || T.skipped_effects.add(H.e);
        T.add_callback(b);
      } else
        b();
      o(m);
    }
  });
}
function Ff(t, e, n, r, i, a, s, c, u) {
  var Q, P, L, B;
  var l = (s & 8) !== 0, d = (s & 3) !== 0, h = e.length, f = n.items, m = n.first, v = m, p, b = null, y, E = [], A = [], _, I, S, T;
  if (l)
    for (T = 0; T < h; T += 1)
      _ = e[T], I = c(_, T), S = f.get(I), S !== void 0 && ((Q = S.a) == null || Q.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(S));
  for (T = 0; T < h; T += 1) {
    if (_ = e[T], I = c(_, T), S = f.get(I), S === void 0) {
      var C = r.get(I);
      if (C !== void 0) {
        r.delete(I), f.set(I, C);
        var x = b ? b.next : v;
        Bn(n, b, C), Bn(n, C, x), Ns(C, x, i), b = C;
      } else {
        var H = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        b = ic(
          H,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          I,
          T,
          a,
          s,
          u
        );
      }
      f.set(I, b), E = [], A = [], v = b.next;
      continue;
    }
    if (d && rc(S, _, T, s), S.e.f & Pn && (xs(S.e), l && ((P = S.a) == null || P.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(S))), S !== v) {
      if (p !== void 0 && p.has(S)) {
        if (E.length < A.length) {
          var W = A[0], D;
          b = W.prev;
          var M = E[0], te = E[E.length - 1];
          for (D = 0; D < E.length; D += 1)
            Ns(E[D], W, i);
          for (D = 0; D < A.length; D += 1)
            p.delete(A[D]);
          Bn(n, M.prev, te.next), Bn(n, b, M), Bn(n, te, W), v = W, b = te, T -= 1, E = [], A = [];
        } else
          p.delete(S), Ns(S, v, i), Bn(n, S.prev, S.next), Bn(n, S, b === null ? n.first : b.next), Bn(n, b, S), b = S;
        continue;
      }
      for (E = [], A = []; v !== null && v.k !== I; )
        v.e.f & Pn || (p ?? (p = /* @__PURE__ */ new Set())).add(v), A.push(v), v = v.next;
      if (v === null)
        continue;
      S = v;
    }
    E.push(S), b = S, v = S.next;
  }
  if (v !== null || p !== void 0) {
    for (var N = p === void 0 ? [] : Co(p); v !== null; )
      v.e.f & Pn || N.push(v), v = v.next;
    var k = N.length;
    if (k > 0) {
      var U = s & 4 && h === 0 ? i : null;
      if (l) {
        for (T = 0; T < k; T += 1)
          (L = N[T].a) == null || L.measure();
        for (T = 0; T < k; T += 1)
          (B = N[T].a) == null || B.fix();
      }
      Bf(n, N, U);
    }
  }
  l && or(() => {
    var Ee;
    if (y !== void 0)
      for (S of y)
        (Ee = S.a) == null || Ee.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var X of r.values())
    Nt(X.e);
  r.clear();
}
function rc(t, e, n, r) {
  r & 1 && Ni(t.v, e), r & 2 ? Ni(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function ic(t, e, n, r, i, a, s, c, u, l, d) {
  var h = Jr, f = (u & 1) !== 0, m = (u & 16) === 0, v = f ? m ? /* @__PURE__ */ Du(i, !1, !1) : ti(i) : i, p = u & 2 ? ti(s) : s, b = {
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
      var y = document.createDocumentFragment();
      y.append(t = Lr());
    }
    return b.e = Vt(() => c(
      /** @type {Node} */
      t,
      v,
      p,
      l
    ), Wd), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    Jr = h;
  }
}
function Ns(t, e, n) {
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
      /* @__PURE__ */ La(a)
    );
    i.before(a), a = s;
  }
}
function Bn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function ui(t, e, n) {
  var r = t, i, a, s = null, c = null;
  function u() {
    a && (Er(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = c, c = null;
  }
  Or(() => {
    if (i !== (i = e())) {
      var l = Po();
      if (i) {
        var d = r;
        l && (s = document.createDocumentFragment(), s.append(d = Lr()), a && tt.skipped_effects.add(a)), c = Vt(() => n(d, i));
      }
      l ? tt.add_callback(u) : u();
    }
  }, wr);
}
function fl(t, e, n, r, i, a) {
  var s, c, u = null, l = (
    /** @type {TemplateNode} */
    t
  ), d, h = Jr;
  Or(() => {
    const f = e() || null;
    var m = f === "svg" ? Cd : null;
    if (f !== s) {
      var v = Jr;
      dl(h), d && (f === null ? Er(d, () => {
        d = null, c = null;
      }) : f === c ? xs(d) : (Nt(d), cl(!1))), f && f !== c && (d = Vt(() => {
        if (u = m ? document.createElementNS(m, f) : document.createElement(f), ki(u, u), r) {
          var p = (
            /** @type {TemplateNode} */
            u.appendChild(Lr())
          );
          r(u, p);
        }
        ke.nodes_end = u, l.before(u);
      })), s = f, s && (c = s), cl(!0), dl(v);
    }
  }, wr);
}
function Ne(t, e, n) {
  oi(() => {
    var r = Hn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Oa(() => {
        var s = n();
        ec(s), i && Ro(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Vf(t, e) {
  var n = void 0, r;
  Or(() => {
    n !== (n = e()) && (r && (Nt(r), r = null), n && (r = Vt(() => {
      oi(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function ac(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = ac(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Gf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = ac(t)) && (r && (r += " "), r += e);
  return r;
}
function sc(t) {
  return typeof t == "object" ? Gf(t) : t ?? "";
}
const hl = [...` 	
\r\f \v\uFEFF`];
function jf(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var c = s + a;
          (s === 0 || hl.includes(r[s - 1])) && (c === r.length || hl.includes(r[c])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(c + 1) : s = c;
        }
  }
  return r === "" ? null : r;
}
function vl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function Us(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function qf(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, c = !1, u = [];
      r && u.push(...Object.keys(r).map(Us)), i && u.push(...Object.keys(i).map(Us));
      var l = 0, d = -1;
      const p = t.length;
      for (var h = 0; h < p; h++) {
        var f = t[h];
        if (c ? f === "/" && t[h - 1] === "*" && (c = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? c = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !c && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var m = Us(t.substring(l, d).trim());
              if (!u.includes(m)) {
                f !== ";" && h++;
                var v = t.substring(l, h).trim();
                n += " " + v + ";";
              }
            }
            l = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += vl(r)), i && (n += vl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Uo(t, e, n, r, i, a) {
  var s = t.__className;
  if (s !== n || s === void 0) {
    var c = jf(n, r, a);
    c == null ? t.removeAttribute("class") : e ? t.className = c : t.setAttribute("class", c), t.__className = n;
  } else if (a && i !== a)
    for (var u in a) {
      var l = !!a[u];
      (i == null || l !== !!i[u]) && t.classList.toggle(u, l);
    }
  return a;
}
function ks(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function Ut(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = qf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (ks(t, n == null ? void 0 : n[0], r[0]), ks(t, n == null ? void 0 : n[1], r[1], "important")) : ks(t, n, r));
  return r;
}
function co(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!_s(e))
      return qd();
    for (var r of t.options)
      r.selected = e.includes(ml(r));
    return;
  }
  for (r of t.options) {
    var i = ml(r);
    if (df(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function zf(t) {
  var e = new MutationObserver(() => {
    co(t, t.__value);
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
  }), Ss(() => {
    e.disconnect();
  });
}
function ml(t) {
  return "__value" in t ? t.__value : t.value;
}
const ia = Symbol("class"), aa = Symbol("style"), oc = Symbol("is custom element"), lc = Symbol("is html");
function pl(t, e) {
  var n = ko(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Wf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ar(t, e, n, r) {
  var i = ko(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Dd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && uc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Xf(t, e, n, r, i = !1, a = !1) {
  var s = ko(t), c = s[oc], u = !s[lc], l = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = sc(n.class) : n[ia] && (n.class = null), n[aa] && (n.style ?? (n.style = null));
  var f = uc(t);
  for (const A in n) {
    let _ = n[A];
    if (d && A === "value" && _ == null) {
      t.value = t.__value = "", l[A] = _;
      continue;
    }
    if (A === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Uo(t, m, _, r, e == null ? void 0 : e[ia], n[ia]), l[A] = _, l[ia] = n[ia];
      continue;
    }
    if (A === "style") {
      Ut(t, _, e == null ? void 0 : e[aa], n[aa]), l[A] = _, l[aa] = n[aa];
      continue;
    }
    var v = l[A];
    if (!(_ === v && !(_ === void 0 && t.hasAttribute(A)))) {
      l[A] = _;
      var p = A[0] + A[1];
      if (p !== "$$")
        if (p === "on") {
          const I = {}, S = "$$" + A;
          let T = A.slice(2);
          var b = Of(T);
          if (wf(T) && (T = T.slice(0, -7), I.capture = !0), !b && v) {
            if (_ != null) continue;
            t.removeEventListener(T, l[S], I), l[S] = null;
          }
          if (_ != null)
            if (b)
              t[`__${T}`] = _, Cn([T]);
            else {
              let C = function(x) {
                l[A].call(this, x);
              };
              l[S] = No(T, t, C, I);
            }
          else b && (t[`__${T}`] = void 0);
        } else if (A === "style")
          Ar(t, A, _);
        else if (A === "autofocus")
          vf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!c && (A === "__value" || A === "value" && _ != null))
          t.value = t.__value = _;
        else if (A === "selected" && d)
          Wf(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = A;
          u || (y = Mf(y));
          var E = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !c && !E)
            if (s[A] = null, y === "value" || y === "checked") {
              let I = (
                /** @type {HTMLInputElement} */
                t
              );
              const S = e === void 0;
              if (y === "value") {
                let T = I.defaultValue;
                I.removeAttribute(y), I.defaultValue = T, I.value = I.__value = S ? T : null;
              } else {
                let T = I.defaultChecked;
                I.removeAttribute(y), I.defaultChecked = T, I.checked = S ? T : !1;
              }
            } else
              t.removeAttribute(A);
          else E || f.includes(y) && (c || typeof _ != "string") ? (t[y] = _, y in s && (s[y] = wt)) : typeof _ != "function" && Ar(t, y, _);
        }
    }
  }
  return l;
}
function qe(t, e, n = [], r = [], i, a = !1, s = !1) {
  Ou(n, r, (c) => {
    var u = void 0, l = {}, d = t.nodeName === "SELECT", h = !1;
    if (Or(() => {
      var m = e(...c.map(o)), v = Xf(
        t,
        u,
        m,
        i,
        a,
        s
      );
      h && d && "value" in m && co(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(l))
        m[b] || Nt(l[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var p = m[b];
        b.description === Td && (!u || p !== u[b]) && (l[b] && Nt(l[b]), l[b] = Vt(() => Vf(t, () => p))), v[b] = p;
      }
      u = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      oi(() => {
        co(
          f,
          /** @type {Record<string | symbol, any>} */
          u.value,
          !0
        ), zf(f);
      });
    }
    h = !0;
  });
}
function ko(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [oc]: t.nodeName.includes("-"),
      [lc]: t.namespaceURI === xd
    })
  );
}
var gl = /* @__PURE__ */ new Map();
function uc(t) {
  var e = t.getAttribute("is") || t.nodeName, n = gl.get(e);
  if (n) return n;
  gl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = gu(i);
    for (var s in r)
      r[s].set && n.push(s);
    i = To(i);
  }
  return n;
}
const Kf = () => performance.now(), ar = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Kf(),
  tasks: /* @__PURE__ */ new Set()
};
function cc() {
  const t = ar.now();
  ar.tasks.forEach((e) => {
    e.c(t) || (ar.tasks.delete(e), e.f());
  }), ar.tasks.size !== 0 && ar.tick(cc);
}
function Zf(t) {
  let e;
  return ar.tasks.size === 0 && ar.tick(cc), {
    promise: new Promise((n) => {
      ar.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      ar.tasks.delete(e);
    }
  };
}
function ka(t, e) {
  Xi(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Yf(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function bl(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = Yf(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Qf = (t) => t;
function Jf(t, e, n) {
  var r = (
    /** @type {EachItem} */
    Jr
  ), i, a, s, c = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const u = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        s = os(this.element, u, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: u, width: l, height: d } = getComputedStyle(t);
        if (u !== "absolute" && u !== "fixed") {
          var h = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          c = {
            position: h.position,
            width: h.width,
            height: h.height,
            transform: h.transform
          }, h.position = "absolute", h.width = l, h.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var m = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            h.transform = h.transform ? `${h.transform} ${m}` : m;
          }
        }
      }
    },
    unfix() {
      if (c) {
        var u = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        u.position = c.position, u.width = c.width, u.height = c.height, u.transform = c.transform;
      }
    }
  }), r.a.element = t;
}
function ss(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, c = (t & 4) !== 0, u = s ? "both" : i ? "in" : "out", l, d = e.inert, h = e.style.overflow, f, m;
  function v() {
    return Xi(() => l ?? (l = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: u
    })));
  }
  var p = {
    is_global: c,
    in() {
      var A;
      if (e.inert = d, !i) {
        m == null || m.abort(), (A = m == null ? void 0 : m.reset) == null || A.call(m);
        return;
      }
      a || f == null || f.abort(), ka(e, "introstart"), f = os(e, v(), m, 1, () => {
        ka(e, "introend"), f == null || f.abort(), f = l = void 0, e.style.overflow = h;
      });
    },
    out(A) {
      if (!a) {
        A == null || A(), l = void 0;
        return;
      }
      e.inert = !0, ka(e, "outrostart"), m = os(e, v(), f, 0, () => {
        ka(e, "outroend"), A == null || A();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    ke
  );
  if ((b.transitions ?? (b.transitions = [])).push(p), i && as) {
    var y = c;
    if (!y) {
      for (var E = (
        /** @type {Effect | null} */
        b.parent
      ); E && E.f & wr; )
        for (; (E = E.parent) && !(E.f & Cr); )
          ;
      y = !E || (E.f & Is) !== 0;
    }
    y && oi(() => {
      Hn(() => p.in());
    });
  }
}
function os(t, e, n, r, i) {
  var a = r === 1;
  if (yi(e)) {
    var s, c = !1;
    return or(() => {
      if (!c) {
        var b = e({ direction: a ? "in" : "out" });
        s = os(t, b, n, r, i);
      }
    }), {
      abort: () => {
        c = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: me,
      deactivate: me,
      reset: me,
      t: () => r
    };
  const { delay: u = 0, css: l, tick: d, easing: h = Qf } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), l)) {
    var m = bl(l(0, 1));
    f.push(m, m);
  }
  var v = () => 1 - r, p = t.animate(f, { duration: u, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - b, E = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), A = [];
    if (E > 0) {
      var _ = !1;
      if (l)
        for (var I = Math.ceil(E / 16.666666666666668), S = 0; S <= I; S += 1) {
          var T = b + y * h(S / I), C = bl(l(T, 1 - T));
          A.push(C), _ || (_ = C.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), v = () => {
        var x = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + y * h(x / E);
      }, d && Zf(() => {
        if (p.playState !== "running") return !1;
        var x = v();
        return d(x, 1 - x), !0;
      });
    }
    p = t.animate(A, { duration: E, fill: "forwards" }), p.onfinish = () => {
      v = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = me);
    },
    deactivate: () => {
      i = me;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => v()
  };
}
function ba(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Bu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Bs(t) ? Fs(a) : a, n(a), tt !== null && r.add(tt), await Ju(), a !== (a = e())) {
      var s = t.selectionStart, c = t.selectionEnd, u = t.value.length;
      if (t.value = a ?? "", c !== null) {
        var l = t.value.length;
        s === c && c === u && l > u ? (t.selectionStart = l, t.selectionEnd = l) : (t.selectionStart = s, t.selectionEnd = Math.min(c, l));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Hn(e) == null && t.value && (n(Bs(t) ? Fs(t.value) : t.value), tt !== null && r.add(tt)), Oa(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Ka ?? tt
      );
      if (r.has(a))
        return;
    }
    Bs(t) && i === Fs(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function $f(t, e, n = e) {
  Bu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Hn(e) == null && n(t.checked), Oa(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Bs(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Fs(t) {
  return t === "" ? null : +t;
}
function _l(t, e) {
  return t === e || (t == null ? void 0 : t[qn]) === e;
}
function xe(t = {}, e, n, r) {
  return oi(() => {
    var i, a;
    return Oa(() => {
      i = a, a = (r == null ? void 0 : r()) || [], Hn(() => {
        t !== n(...a) && (e(t, ...a), i && _l(n(...i), t) && e(null, ...i));
      });
    }), () => {
      or(() => {
        a && _l(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function eh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    rt
  ), n = e.l.u;
  if (!n) return;
  let r = () => ec(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ wa(() => {
      let c = !1;
      const u = e.s;
      for (const l in u)
        u[l] !== a[l] && (a[l] = u[l], c = !0);
      return c && i++, i;
    });
    r = () => o(s);
  }
  n.b.length && bf(() => {
    yl(e, r), ns(n.b);
  }), Le(() => {
    const i = Hn(() => n.m.map(Rd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Le(() => {
    yl(e, r), ns(n.a);
  });
}
function yl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) o(n);
  e();
}
function Bo(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), me;
  const r = Hn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const gi = [];
function th(t, e) {
  return {
    subscribe: Jt(t, e).subscribe
  };
}
function Jt(t, e = me) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(c) {
    if (Ro(t, c) && (t = c, n)) {
      const u = !gi.length;
      for (const l of r)
        l[1](), gi.push(l, t);
      if (u) {
        for (let l = 0; l < gi.length; l += 2)
          gi[l][0](gi[l + 1]);
        gi.length = 0;
      }
    }
  }
  function a(c) {
    i(c(
      /** @type {T} */
      t
    ));
  }
  function s(c, u = me) {
    const l = [c, u];
    return r.add(l), r.size === 1 && (n = e(i, a) || me), c(
      /** @type {T} */
      t
    ), () => {
      r.delete(l), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Ki(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return th(n, (s, c) => {
    let u = !1;
    const l = [];
    let d = 0, h = me;
    const f = () => {
      if (d)
        return;
      h();
      const v = e(r ? l[0] : l, s, c);
      a ? s(v) : h = typeof v == "function" ? v : me;
    }, m = i.map(
      (v, p) => Bo(
        v,
        (b) => {
          l[p] = b, d &= ~(1 << p), u && f();
        },
        () => {
          d |= 1 << p;
        }
      )
    );
    return u = !0, f(), function() {
      ns(m), h(), u = !1;
    };
  });
}
function nh(t) {
  let e;
  return Bo(t, (n) => e = n)(), e;
}
let Ba = !1, fo = Symbol();
function zn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Du(void 0),
    unsubscribe: me
  });
  if (r.store !== t && !(fo in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = me;
    else {
      var i = !0;
      r.unsubscribe = Bo(t, (a) => {
        i ? r.source.v = a : z(r.source, a);
      }), i = !1;
    }
  return t && fo in n ? nh(t) : o(r.source);
}
function ni(t, e) {
  return t.set(e), e;
}
function ur() {
  const t = {};
  function e() {
    Ss(() => {
      for (var n in t)
        t[n].unsubscribe();
      ts(t, fo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function rh(t) {
  var e = Ba;
  try {
    return Ba = !1, [t(), Ba];
  } finally {
    Ba = e;
  }
}
const ih = {
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
function Xe(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    ih
  );
}
const ah = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (yi(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      yi(i) && (i = i());
      const a = yr(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (yi(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = yr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === qn || e === yu) return !1;
    for (let n of t.props)
      if (yi(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (yi(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function at(...t) {
  return new Proxy({ props: t }, ah);
}
function g(t, e, n, r) {
  var A;
  var i = !Wi || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, c = (
    /** @type {V} */
    r
  ), u = !0, l = () => (u && (u = !1, c = s ? Hn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), c), d;
  if (a) {
    var h = qn in t || yu in t;
    d = ((A = yr(t, e)) == null ? void 0 : A.set) ?? (h && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = rh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = l(), d && (i && Bd(), d(f)));
  var v;
  if (i ? v = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? l() : (u = !0, _);
  } : v = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ !== void 0 && (c = /** @type {V} */
    void 0), _ === void 0 ? c : _;
  }, i && !(n & 4))
    return v;
  if (d) {
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, I) {
        return arguments.length > 0 ? ((!i || !I || p || m) && d(I ? v() : _), _) : v();
      }
    );
  }
  var b = !1, y = (n & 1 ? wa : Mo)(() => (b = !1, v()));
  a && o(y);
  var E = (
    /** @type {Effect} */
    ke
  );
  return (
    /** @type {() => V} */
    function(_, I) {
      if (arguments.length > 0) {
        const S = I ? o(y) : i && a ? _e(_) : _;
        return z(y, S), b = !0, c !== void 0 && (c = S), _;
      }
      return li && b || E.f & si ? y.v : o(y);
    }
  );
}
const sh = "5";
var mu;
typeof window < "u" && ((mu = window.__svelte ?? (window.__svelte = {})).v ?? (mu.v = /* @__PURE__ */ new Set())).add(sh);
function oh(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var lh = function(e) {
  return uh(e) && !ch(e);
};
function uh(t) {
  return !!t && typeof t == "object";
}
function ch(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || hh(t);
}
var dh = typeof Symbol == "function" && Symbol.for, fh = dh ? Symbol.for("react.element") : 60103;
function hh(t) {
  return t.$$typeof === fh;
}
function vh(t) {
  return Array.isArray(t) ? [] : {};
}
function _a(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Bi(vh(t), t, e) : t;
}
function mh(t, e, n) {
  return t.concat(e).map(function(r) {
    return _a(r, n);
  });
}
function ph(t, e) {
  if (!e.customMerge)
    return Bi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Bi;
}
function gh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Il(t) {
  return Object.keys(t).concat(gh(t));
}
function dc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function bh(t, e) {
  return dc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function _h(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && Il(t).forEach(function(i) {
    r[i] = _a(t[i], n);
  }), Il(e).forEach(function(i) {
    bh(t, i) || (dc(t, i) && n.isMergeableObject(e[i]) ? r[i] = ph(i, n)(t[i], e[i], n) : r[i] = _a(e[i], n));
  }), r;
}
function Bi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || mh, n.isMergeableObject = n.isMergeableObject || lh, n.cloneUnlessOtherwiseSpecified = _a;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : _h(t, e, n) : _a(e, n);
}
Bi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Bi(r, i, n);
  }, {});
};
var yh = Bi, Ih = yh;
const Eh = /* @__PURE__ */ oh(Ih);
var ho = function(t, e) {
  return ho = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ho(t, e);
};
function Je(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ho(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var fe = function() {
  return fe = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fe.apply(this, arguments);
};
function Ah(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function fc(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function c(d) {
      try {
        l(r.next(d));
      } catch (h) {
        s(h);
      }
    }
    function u(d) {
      try {
        l(r.throw(d));
      } catch (h) {
        s(h);
      }
    }
    function l(d) {
      d.done ? a(d.value) : i(d.value).then(c, u);
    }
    l((r = r.apply(t, e || [])).next());
  });
}
function Fo(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = c(0), s.throw = c(1), s.return = c(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function c(l) {
    return function(d) {
      return u([l, d]);
    };
  }
  function u(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done) return a;
      switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
        case 0:
        case 1:
          a = l;
          break;
        case 4:
          return n.label++, { value: l[1], done: !1 };
        case 5:
          n.label++, i = l[1], l = [0];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = l;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(l);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = e.call(t, n);
    } catch (d) {
      l = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Lt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function xr(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (c) {
    s = { error: c };
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
function Ci(t) {
  return this instanceof Ci ? (this.v = t, this) : new Ci(t);
}
function Sh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", s), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(m) {
    return function(v) {
      return Promise.resolve(v).then(m, h);
    };
  }
  function c(m, v) {
    r[m] && (i[m] = function(p) {
      return new Promise(function(b, y) {
        a.push([m, p, b, y]) > 1 || u(m, p);
      });
    }, v && (i[m] = v(i[m])));
  }
  function u(m, v) {
    try {
      l(r[m](v));
    } catch (p) {
      f(a[0][3], p);
    }
  }
  function l(m) {
    m.value instanceof Ci ? Promise.resolve(m.value.v).then(d, h) : f(a[0][2], m);
  }
  function d(m) {
    u("next", m);
  }
  function h(m) {
    u("throw", m);
  }
  function f(m, v) {
    m(v), a.shift(), a.length && u(a[0][0], a[0][1]);
  }
}
function xh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Lt == "function" ? Lt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(s) {
      return new Promise(function(c, u) {
        s = t[a](s), i(c, u, s.done, s.value);
      });
    };
  }
  function i(a, s, c, u) {
    Promise.resolve(u).then(function(l) {
      a({ value: l, done: c });
    }, s);
  }
}
function Vs(t, e) {
  var n = e && e.cache ? e.cache : Mh, r = e && e.serializer ? e.serializer : Oh, i = e && e.strategy ? e.strategy : wh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Ch(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Th(t, e, n, r) {
  var i = Ch(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function hc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function vc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function wh(t, e) {
  var n = t.length === 1 ? Th : hc;
  return vc(t, this, n, e.cache.create(), e.serializer);
}
function Lh(t, e) {
  return vc(t, this, hc, e.cache.create(), e.serializer);
}
var Oh = function() {
  return JSON.stringify(arguments);
}, Rh = (
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
), Mh = {
  create: function() {
    return new Rh();
  }
}, Gs = {
  variadic: Lh
}, je;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(je || (je = {}));
var ct;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ct || (ct = {}));
var Fi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Fi || (Fi = {}));
function El(t) {
  return t.type === ct.literal;
}
function Dh(t) {
  return t.type === ct.argument;
}
function mc(t) {
  return t.type === ct.number;
}
function pc(t) {
  return t.type === ct.date;
}
function gc(t) {
  return t.type === ct.time;
}
function bc(t) {
  return t.type === ct.select;
}
function _c(t) {
  return t.type === ct.plural;
}
function Ph(t) {
  return t.type === ct.pound;
}
function yc(t) {
  return t.type === ct.tag;
}
function Ic(t) {
  return !!(t && typeof t == "object" && t.type === Fi.number);
}
function vo(t) {
  return !!(t && typeof t == "object" && t.type === Fi.dateTime);
}
var Ec = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Hh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Nh(t) {
  var e = {};
  return t.replace(Hh, function(n) {
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
var Uh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function kh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Uh).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], s = a.split("/");
    if (s.length === 0)
      throw new Error("Invalid number skeleton");
    for (var c = s[0], u = s.slice(1), l = 0, d = u; l < d.length; l++) {
      var h = d[l];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: c, options: u });
  }
  return n;
}
function Bh(t) {
  return t.replace(/^(.*?)-/, "");
}
var Al = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Ac = /^(@+)?(\+|#+)?[rs]?$/g, Fh = /(\*)(0+)|(#+)(0+)|(0+)/g, Sc = /^(0+)$/;
function Sl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(Ac, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function xc(t) {
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
function Vh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !Sc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function xl(t) {
  var e = {}, n = xc(t);
  return n || e;
}
function Gh(t) {
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
        e.style = "unit", e.unit = Bh(i.options[0]);
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
        e = fe(fe(fe({}, e), { notation: "scientific" }), i.options.reduce(function(u, l) {
          return fe(fe({}, u), xl(l));
        }, {}));
        continue;
      case "engineering":
        e = fe(fe(fe({}, e), { notation: "engineering" }), i.options.reduce(function(u, l) {
          return fe(fe({}, u), xl(l));
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
        i.options[0].replace(Fh, function(u, l, d, h, f, m) {
          if (l)
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
    if (Sc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Al.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(Al, function(u, l, d, h, f, m) {
        return d === "*" ? e.minimumFractionDigits = l.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = l.length, e.maximumFractionDigits = l.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = fe(fe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = fe(fe({}, e), Sl(a)));
      continue;
    }
    if (Ac.test(i.stem)) {
      e = fe(fe({}, e), Sl(i.stem));
      continue;
    }
    var s = xc(i.stem);
    s && (e = fe(fe({}, e), s));
    var c = Vh(i.stem);
    c && (e = fe(fe({}, e), c));
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
function jh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var s = 1 + (a & 1), c = a < 2 ? 1 : 3 + (a >> 1), u = "a", l = qh(e);
      for ((l == "H" || l == "k") && (c = 0); c-- > 0; )
        n += u;
      for (; s-- > 0; )
        n = l + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function qh(t) {
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
var js, zh = new RegExp("^".concat(Ec.source, "*")), Wh = new RegExp("".concat(Ec.source, "*$"));
function ze(t, e) {
  return { start: t, end: e };
}
var Xh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Kh = !!String.fromCodePoint, Zh = !!Object.fromEntries, Yh = !!String.prototype.codePointAt, Qh = !!String.prototype.trimStart, Jh = !!String.prototype.trimEnd, $h = !!Number.isSafeInteger, ev = $h ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, mo = !0;
try {
  var tv = Tc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  mo = ((js = tv.exec("a")) === null || js === void 0 ? void 0 : js[0]) === "a";
} catch {
  mo = !1;
}
var Cl = Xh ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), po = Kh ? String.fromCodePoint : (
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
), Tl = (
  // native
  Zh ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], s = a[0], c = a[1];
        n[s] = c;
      }
      return n;
    }
  )
), Cc = Yh ? (
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
), nv = Qh ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(zh, "");
  }
), rv = Jh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Wh, "");
  }
);
function Tc(t, e) {
  return new RegExp(t, e);
}
var go;
if (mo) {
  var wl = Tc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  go = function(e, n) {
    var r;
    wl.lastIndex = n;
    var i = wl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  go = function(e, n) {
    for (var r = []; ; ) {
      var i = Cc(e, n);
      if (i === void 0 || wc(i) || ov(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return po.apply(void 0, r);
  };
var iv = (
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
            var c = this.clonePosition();
            this.bump(), i.push({
              type: ct.pound,
              location: ze(c, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(je.UNMATCHED_CLOSING_TAG, ze(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && bo(this.peek() || 0)) {
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
            type: ct.literal,
            value: "<".concat(i, "/>"),
            location: ze(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var s = a.val, c = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !bo(this.char()))
            return this.error(je.INVALID_TAG, ze(c, this.clonePosition()));
          var u = this.clonePosition(), l = this.parseTagName();
          return i !== l ? this.error(je.UNMATCHED_CLOSING_TAG, ze(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ct.tag,
              value: i,
              children: s,
              location: ze(r, this.clonePosition())
            },
            err: null
          } : this.error(je.INVALID_TAG, ze(c, this.clonePosition())));
        } else
          return this.error(je.UNCLOSED_TAG, ze(r, this.clonePosition()));
      } else
        return this.error(je.INVALID_TAG, ze(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && sv(this.char()); )
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
        var c = this.tryParseLeftAngleBracket();
        if (c) {
          i += c;
          continue;
        }
        break;
      }
      var u = ze(r, this.clonePosition());
      return {
        val: { type: ct.literal, value: i, location: u },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !av(this.peek() || 0)) ? (this.bump(), "<") : null;
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
        return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, ze(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(je.EMPTY_ARGUMENT, ze(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(je.MALFORMED_ARGUMENT, ze(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, ze(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ct.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: ze(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, ze(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(je.MALFORMED_ARGUMENT, ze(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = go(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = ze(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), c = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (c) {
        case "":
          return this.error(je.EXPECT_ARGUMENT_TYPE, ze(s, u));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var l = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), h = this.parseSimpleArgStyleIfPossible();
            if (h.err)
              return h;
            var f = rv(h.val);
            if (f.length === 0)
              return this.error(je.EXPECT_ARGUMENT_STYLE, ze(this.clonePosition(), this.clonePosition()));
            var m = ze(d, this.clonePosition());
            l = { style: f, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var p = ze(i, this.clonePosition());
          if (l && Cl(l == null ? void 0 : l.style, "::", 0)) {
            var b = nv(l.style.slice(2));
            if (c === "number") {
              var h = this.parseNumberSkeletonFromString(b, l.styleLocation);
              return h.err ? h : {
                val: { type: ct.number, value: r, location: p, style: h.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(je.EXPECT_DATE_TIME_SKELETON, p);
              var y = b;
              this.locale && (y = jh(b, this.locale));
              var f = {
                type: Fi.dateTime,
                pattern: y,
                location: l.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Nh(y) : {}
              }, E = c === "date" ? ct.date : ct.time;
              return {
                val: { type: E, value: r, location: p, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? ct.number : c === "date" ? ct.date : ct.time,
              value: r,
              location: p,
              style: (a = l == null ? void 0 : l.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var A = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(je.EXPECT_SELECT_ARGUMENT_OPTIONS, ze(A, fe({}, A)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), I = 0;
          if (c !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, ze(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, je.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), I = h.val;
          }
          var S = this.tryParsePluralOrSelectOptions(e, c, n, _);
          if (S.err)
            return S;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var T = ze(i, this.clonePosition());
          return c === "select" ? {
            val: {
              type: ct.select,
              value: r,
              options: Tl(S.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ct.plural,
              value: r,
              options: Tl(S.val),
              offset: I,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(je.INVALID_ARGUMENT_TYPE, ze(s, u));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, ze(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(je.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, ze(i, this.clonePosition()));
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
        r = kh(e);
      } catch {
        return this.error(je.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Fi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Gh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, s = !1, c = [], u = /* @__PURE__ */ new Set(), l = i.value, d = i.location; ; ) {
        if (l.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_SELECTOR, je.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = ze(h, this.clonePosition()), l = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (u.has(l))
          return this.error(n === "select" ? je.DUPLICATE_SELECT_ARGUMENT_SELECTOR : je.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        l === "other" && (s = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? je.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : je.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, ze(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(e + 1, n, r);
        if (v.err)
          return v;
        var p = this.tryParseArgumentClose(m);
        if (p.err)
          return p;
        c.push([
          l,
          {
            value: v.val,
            location: ze(m, this.clonePosition())
          }
        ]), u.add(l), this.bumpSpace(), a = this.parseIdentifierIfPossible(), l = a.value, d = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? je.EXPECT_SELECT_ARGUMENT_SELECTOR : je.EXPECT_PLURAL_ARGUMENT_SELECTOR, ze(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(je.MISSING_OTHER_CLAUSE, ze(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, s = 0; !this.isEOF(); ) {
        var c = this.char();
        if (c >= 48 && c <= 57)
          a = !0, s = s * 10 + (c - 48), this.bump();
        else
          break;
      }
      var u = ze(i, this.clonePosition());
      return a ? (s *= r, ev(s) ? { val: s, err: null } : this.error(n, u)) : this.error(e, u);
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
      var n = Cc(this.message, e);
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
      if (Cl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && wc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function bo(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function av(t) {
  return bo(t) || t === 47;
}
function sv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function wc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function ov(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function _o(t) {
  t.forEach(function(e) {
    if (delete e.location, bc(e) || _c(e))
      for (var n in e.options)
        delete e.options[n].location, _o(e.options[n].value);
    else mc(e) && Ic(e.style) || (pc(e) || gc(e)) && vo(e.style) ? delete e.style.location : yc(e) && _o(e.children);
  });
}
function lv(t, e) {
  e === void 0 && (e = {}), e = fe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new iv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(je[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || _o(n.val), n.val;
}
var Vi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Vi || (Vi = {}));
var Ts = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Ll = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Vi.INVALID_VALUE, a) || this;
    }
    return e;
  }(Ts)
), uv = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Vi.INVALID_VALUE, i) || this;
    }
    return e;
  }(Ts)
), cv = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Vi.MISSING_VALUE, r) || this;
    }
    return e;
  }(Ts)
), Wt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Wt || (Wt = {}));
function dv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Wt.literal || n.type !== Wt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function fv(t) {
  return typeof t == "function";
}
function Ja(t, e, n, r, i, a, s) {
  if (t.length === 1 && El(t[0]))
    return [
      {
        type: Wt.literal,
        value: t[0].value
      }
    ];
  for (var c = [], u = 0, l = t; u < l.length; u++) {
    var d = l[u];
    if (El(d)) {
      c.push({
        type: Wt.literal,
        value: d.value
      });
      continue;
    }
    if (Ph(d)) {
      typeof a == "number" && c.push({
        type: Wt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new cv(h, s);
    var f = i[h];
    if (Dh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), c.push({
        type: typeof f == "string" ? Wt.literal : Wt.object,
        value: f
      });
      continue;
    }
    if (pc(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : vo(d.style) ? d.style.parsedOptions : void 0;
      c.push({
        type: Wt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (gc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : vo(d.style) ? d.style.parsedOptions : r.time.medium;
      c.push({
        type: Wt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (mc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Ic(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), c.push({
        type: Wt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (yc(d)) {
      var v = d.children, p = d.value, b = i[p];
      if (!fv(b))
        throw new uv(p, "function", s);
      var y = Ja(v, e, n, r, i, a), E = b(y.map(function(I) {
        return I.value;
      }));
      Array.isArray(E) || (E = [E]), c.push.apply(c, E.map(function(I) {
        return {
          type: typeof I == "string" ? Wt.literal : Wt.object,
          value: I
        };
      }));
    }
    if (bc(d)) {
      var A = d.options[f] || d.options.other;
      if (!A)
        throw new Ll(d.value, f, Object.keys(d.options), s);
      c.push.apply(c, Ja(A.value, e, n, r, i));
      continue;
    }
    if (_c(d)) {
      var A = d.options["=".concat(f)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new Ts(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Vi.MISSING_INTL_API, s);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        A = d.options[_] || d.options.other;
      }
      if (!A)
        throw new Ll(d.value, f, Object.keys(d.options), s);
      c.push.apply(c, Ja(A.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return dv(c);
}
function hv(t, e) {
  return e ? fe(fe(fe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = fe(fe({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function vv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = hv(t[r], e[r]), n;
  }, fe({}, t)) : t;
}
function qs(t) {
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
function mv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Vs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: qs(t.number),
      strategy: Gs.variadic
    }),
    getDateTimeFormat: Vs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: qs(t.dateTime),
      strategy: Gs.variadic
    }),
    getPluralRules: Vs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Wn([void 0], n, !1)))();
    }, {
      cache: qs(t.pluralRules),
      strategy: Gs.variadic
    })
  };
}
var Lc = (
  /** @class */
  function() {
    function t(e, n, r, i) {
      n === void 0 && (n = t.defaultLocale);
      var a = this;
      if (this.formatterCache = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }, this.format = function(u) {
        var l = a.formatToParts(u);
        if (l.length === 1)
          return l[0].value;
        var d = l.reduce(function(h, f) {
          return !h.length || f.type !== Wt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(u) {
        return Ja(a.ast, a.locales, a.formatters, a.formats, u, void 0, a.message);
      }, this.resolvedOptions = function() {
        var u;
        return {
          locale: ((u = a.resolvedLocale) === null || u === void 0 ? void 0 : u.toString()) || Intl.NumberFormat.supportedLocalesOf(a.locales)[0]
        };
      }, this.getAst = function() {
        return a.ast;
      }, this.locales = n, this.resolvedLocale = t.resolveLocale(n), typeof e == "string") {
        if (this.message = e, !t.__parse)
          throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        var s = i || {};
        s.formatters;
        var c = Ah(s, ["formatters"]);
        this.ast = t.__parse(e, fe(fe({}, c), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = vv(t.formats, r), this.formatters = i && i.formatters || mv(this.formatterCache);
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
    }, t.__parse = lv, t.formats = {
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
function pv(t, e) {
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
const _r = {}, gv = (t, e, n) => n && (e in _r || (_r[e] = {}), t in _r[e] || (_r[e][t] = n), n), Oc = (t, e) => {
  if (e == null)
    return;
  if (e in _r && t in _r[e])
    return _r[e][t];
  const n = Ma(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = _v(i, t);
    if (a)
      return gv(t, e, a);
  }
};
let Vo;
const Ra = Jt({});
function bv(t) {
  return Vo[t] || null;
}
function Rc(t) {
  return t in Vo;
}
function _v(t, e) {
  if (!Rc(t))
    return null;
  const n = bv(t);
  return pv(n, e);
}
function yv(t) {
  if (t == null)
    return;
  const e = Ma(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Rc(r))
      return r;
  }
}
function Mc(t, ...e) {
  delete _r[t], Ra.update((n) => (n[t] = Eh.all([n[t] || {}, ...e]), n));
}
Ki(
  [Ra],
  ([t]) => Object.keys(t)
);
Ra.subscribe((t) => Vo = t);
const $a = {};
function Iv(t, e) {
  $a[t].delete(e), $a[t].size === 0 && delete $a[t];
}
function Dc(t) {
  return $a[t];
}
function Ev(t) {
  return Ma(t).map((e) => {
    const n = Dc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function ls(t) {
  return t == null ? !1 : Ma(t).some(
    (e) => {
      var n;
      return (n = Dc(e)) == null ? void 0 : n.size;
    }
  );
}
function Av(t, e) {
  return Promise.all(
    e.map((r) => (Iv(t, r), r().then((i) => i.default || i)))
  ).then((r) => Mc(t, ...r));
}
const sa = {};
function Pc(t) {
  if (!ls(t))
    return t in sa ? sa[t] : Promise.resolve();
  const e = Ev(t);
  return sa[t] = Promise.all(
    e.map(
      ([n, r]) => Av(n, r)
    )
  ).then(() => {
    if (ls(t))
      return Pc(t);
    delete sa[t];
  }), sa[t];
}
var Ol = Object.getOwnPropertySymbols, Sv = Object.prototype.hasOwnProperty, xv = Object.prototype.propertyIsEnumerable, Cv = (t, e) => {
  var n = {};
  for (var r in t)
    Sv.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Ol)
    for (var r of Ol(t))
      e.indexOf(r) < 0 && xv.call(t, r) && (n[r] = t[r]);
  return n;
};
const Tv = {
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
function wv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ma(
      t
    ).join('", "')}".${ls(Rr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const Lv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Tv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, ha = Lv;
function Gi() {
  return ha;
}
function Ov(t) {
  const e = t, { formats: n } = e, r = Cv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      Lc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = wv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(ha, r, { initialLocale: i }), n && ("number" in n && Object.assign(ha.formats.number, n.number), "date" in n && Object.assign(ha.formats.date, n.date), "time" in n && Object.assign(ha.formats.time, n.time)), ci.set(i);
}
const zs = Jt(!1);
var Rv = Object.defineProperty, Mv = Object.defineProperties, Dv = Object.getOwnPropertyDescriptors, Rl = Object.getOwnPropertySymbols, Pv = Object.prototype.hasOwnProperty, Hv = Object.prototype.propertyIsEnumerable, Ml = (t, e, n) => e in t ? Rv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Nv = (t, e) => {
  for (var n in e || (e = {}))
    Pv.call(e, n) && Ml(t, n, e[n]);
  if (Rl)
    for (var n of Rl(e))
      Hv.call(e, n) && Ml(t, n, e[n]);
  return t;
}, Uv = (t, e) => Mv(t, Dv(e));
let yo;
const us = Jt(null);
function Dl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ma(t, e = Gi().fallbackLocale) {
  const n = Dl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Dl(e)])] : n;
}
function Rr() {
  return yo ?? void 0;
}
us.subscribe((t) => {
  yo = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const kv = (t) => {
  if (t && yv(t) && ls(t)) {
    const { loadingDelay: e } = Gi();
    let n;
    return typeof window < "u" && Rr() != null && e ? n = window.setTimeout(
      () => zs.set(!0),
      e
    ) : zs.set(!0), Pc(t).then(() => {
      us.set(t);
    }).finally(() => {
      clearTimeout(n), zs.set(!1);
    });
  }
  return us.set(t);
}, ci = Uv(Nv({}, us), {
  set: kv
}), Bv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], ws = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Fv = Object.defineProperty, cs = Object.getOwnPropertySymbols, Hc = Object.prototype.hasOwnProperty, Nc = Object.prototype.propertyIsEnumerable, Pl = (t, e, n) => e in t ? Fv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Go = (t, e) => {
  for (var n in e || (e = {}))
    Hc.call(e, n) && Pl(t, n, e[n]);
  if (cs)
    for (var n of cs(e))
      Nc.call(e, n) && Pl(t, n, e[n]);
  return t;
}, Zi = (t, e) => {
  var n = {};
  for (var r in t)
    Hc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && cs)
    for (var r of cs(t))
      e.indexOf(r) < 0 && Nc.call(t, r) && (n[r] = t[r]);
  return n;
};
const ya = (t, e) => {
  const { formats: n } = Gi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Vv = ws(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = ya("number", r)), new Intl.NumberFormat(n, i);
  }
), Gv = ws(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = ya("date", r) : Object.keys(i).length === 0 && (i = ya("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), jv = ws(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Zi(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = ya("time", r) : Object.keys(i).length === 0 && (i = ya("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), qv = (t = {}) => {
  var e = t, {
    locale: n = Rr()
  } = e, r = Zi(e, [
    "locale"
  ]);
  return Vv(Go({ locale: n }, r));
}, zv = (t = {}) => {
  var e = t, {
    locale: n = Rr()
  } = e, r = Zi(e, [
    "locale"
  ]);
  return Gv(Go({ locale: n }, r));
}, Wv = (t = {}) => {
  var e = t, {
    locale: n = Rr()
  } = e, r = Zi(e, [
    "locale"
  ]);
  return jv(Go({ locale: n }, r));
}, Xv = ws(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Rr()) => new Lc(t, e, Gi().formats, {
    ignoreTag: Gi().ignoreTag
  })
), Kv = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: c,
    locale: u = Rr(),
    default: l
  } = s;
  if (u == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Oc(t, u);
  if (!d)
    d = (a = (i = (r = (n = Gi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: u, id: t, defaultValue: l })) != null ? i : l) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!c)
    return d;
  let h = d;
  try {
    h = Xv(d, u).format(c);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, Zv = (t, e) => Wv(e).format(t), Yv = (t, e) => zv(e).format(t), Qv = (t, e) => qv(e).format(t), Jv = (t, e = Rr()) => Oc(t, e), $v = Ki([ci, Ra], () => Kv);
Ki([ci], () => Zv);
Ki([ci], () => Yv);
Ki([ci], () => Qv);
Ki([ci, Ra], () => Jv);
function em(t, e) {
  Object.entries(t).forEach(([a, s]) => {
    Mc(a, s);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Bv();
  console.log("Initial: Setting the language to", i), Ov({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const s = a;
    if (!s.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", s.detail.language), ci.set(s.detail.language);
  });
}
const tm = "Suche", nm = "Filtertypen", rm = "Filter hinzufügen", im = "Keine Ressourcen gefunden.", am = "Loading...", sm = {
  search: tm,
  filter_types: nm,
  add_filter: rm,
  no_resources_found: im,
  loading: am
}, om = "Search", lm = "Filter Types", um = "Add Filter", cm = "No resources found.", dm = "Loading...", fm = {
  search: om,
  filter_types: lm,
  add_filter: um,
  no_resources_found: cm,
  loading: dm
};
function Be(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Ze(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function ji(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function ht(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class Yi {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Cf(e, n, r, i));
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
function q(t, e) {
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
var Va;
function hm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Va;
  if (typeof Va == "boolean" && !e)
    return Va;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (Va = r), r;
}
function vm(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, s = i + n.top, c, u;
  if (t.type === "touchstart") {
    var l = t;
    c = l.changedTouches[0].pageX - a, u = l.changedTouches[0].pageY - s;
  } else {
    var d = t;
    c = d.pageX - a, u = d.pageY - s;
  }
  return { x: c, y: u };
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
var qt = (
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
function mm(t) {
  return t === void 0 && (t = window), pm(t) ? { passive: !0 } : !1;
}
function pm(t) {
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
const Uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: mm
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
function gm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (kc(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function kc(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function bm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: gm,
  estimateScrollWidth: bm,
  matches: kc
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
var _m = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ym = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Hl = {
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
var Nl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ul = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ga = [], Im = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
        return _m;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ym;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Hl;
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
          for (var a = Lt(Nl), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
          }
        } catch (u) {
          r = { error: u };
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
          for (var a = Lt(Ul), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
          }
        } catch (u) {
          r = { error: u };
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
        for (var i = Lt(Nl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (c) {
        n = { error: c };
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
        for (var i = Lt(Ul), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (c) {
        n = { error: c };
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
            var c = n !== void 0 && Ga.length > 0 && Ga.some(function(u) {
              return r.adapter.containsEventTarget(u);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ga.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ga = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, c = s.FG_DEACTIVATION, u = s.FG_ACTIVATION, l = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, v = f.endPoint;
        d = m.x + "px, " + m.y + "px", h = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(u), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, l);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = vm(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, s = i.isActivated, c = a || !s;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, Hl.FG_DEACTIVATION_MS));
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
        var i = fe({}, r);
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
  }(qt)
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
var He = {
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
nn.add(He.BACKSPACE);
nn.add(He.ENTER);
nn.add(He.SPACEBAR);
nn.add(He.PAGE_UP);
nn.add(He.PAGE_DOWN);
nn.add(He.END);
nn.add(He.HOME);
nn.add(He.ARROW_LEFT);
nn.add(He.ARROW_UP);
nn.add(He.ARROW_RIGHT);
nn.add(He.ARROW_DOWN);
nn.add(He.DELETE);
nn.add(He.ESCAPE);
nn.add(He.TAB);
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
}, rn = /* @__PURE__ */ new Map();
rn.set(cn.BACKSPACE, He.BACKSPACE);
rn.set(cn.ENTER, He.ENTER);
rn.set(cn.SPACEBAR, He.SPACEBAR);
rn.set(cn.PAGE_UP, He.PAGE_UP);
rn.set(cn.PAGE_DOWN, He.PAGE_DOWN);
rn.set(cn.END, He.END);
rn.set(cn.HOME, He.HOME);
rn.set(cn.ARROW_LEFT, He.ARROW_LEFT);
rn.set(cn.ARROW_UP, He.ARROW_UP);
rn.set(cn.ARROW_RIGHT, He.ARROW_RIGHT);
rn.set(cn.ARROW_DOWN, He.ARROW_DOWN);
rn.set(cn.DELETE, He.DELETE);
rn.set(cn.ESCAPE, He.ESCAPE);
rn.set(cn.TAB, He.TAB);
var Mr = /* @__PURE__ */ new Set();
Mr.add(He.PAGE_UP);
Mr.add(He.PAGE_DOWN);
Mr.add(He.END);
Mr.add(He.HOME);
Mr.add(He.ARROW_LEFT);
Mr.add(He.ARROW_UP);
Mr.add(He.ARROW_RIGHT);
Mr.add(He.ARROW_DOWN);
function It(t) {
  var e = t.key;
  if (nn.has(e))
    return e;
  var n = rn.get(t.keyCode);
  return n || He.UNKNOWN;
}
const { applyPassive: kl } = Uc, { matches: Em } = Ls;
function Kt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: c, eventTarget: u, activeTarget: l, addClass: d = (v) => t.classList.add(v), removeClass: h = (v) => t.classList.remove(v), addStyle: f = (v, p) => t.style.setProperty(v, p), initPromise: m = Promise.resolve() } = {}) {
  let v, p = new Yi(), b = he("SMUI:addLayoutListener"), y, E = s, A = u, _ = l;
  function I() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && E !== s && (E = s, s ? v.activate() : s === !1 && v.deactivate()), e && !v ? (v = new Im({
      addClass: d,
      browserSupportsCssVars: () => hm(window),
      computeBoundingRect: () => (c || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, C) => p.off(document.documentElement, T, C),
      deregisterInteractionHandler: (T, C) => p.off(u || t, T, C),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, C;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Em(l || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, C) => {
        const x = kl();
        p.on(document.documentElement, T, C, typeof x == "boolean" ? { capture: x } : x);
      },
      registerInteractionHandler: (T, C) => {
        const x = kl();
        p.on(u || t, T, C, typeof x == "boolean" ? { capture: x } : x);
      },
      registerResizeHandler: (T) => p.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), m.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && m.then(() => {
      v && (v.destroy(), v = void 0, p.clear());
    }), v && (A !== u || _ !== l) && (A = u, _ = l, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  I(), b && (y = b(S));
  function S() {
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
        rippleElement: c,
        eventTarget: u,
        activeTarget: l,
        addClass: d,
        removeClass: h,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, x) => t.style.setProperty(C, x), initPromise: Promise.resolve() }, T)), I();
    },
    destroy() {
      v && (v.destroy(), v = void 0, p.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Io(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "on", 3, !1), a = g(e, "component", 3, Qi), s = g(e, "tag", 3, "i"), c = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "on",
    "component",
    "tag",
    "children"
  ]), u;
  const l = /* @__PURE__ */ ge(() => s() === "svg" || a() === xm), d = he("SMUI:icon:context");
  function h() {
    return u.getElement();
  }
  var f = { getElement: h }, m = $(), v = Z(m);
  {
    let p = /* @__PURE__ */ ge(() => Be({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    ui(v, a, (b, y) => {
      xe(
        y(b, at(
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
          () => o(l) ? { focusable: "false", tabindex: "-1" } : {},
          () => c,
          {
            children: (E, A) => {
              var _ = $(), I = Z(_);
              Ae(I, () => e.children ?? me), w(E, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => u = E,
        () => u
      );
    });
  }
  return w(t, m), Te(f);
}
var Am = /* @__PURE__ */ un("<svg><!></svg>");
function Qi(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "tag", 3, "div"), i = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ge(() => [
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
  function c() {
    return s;
  }
  var u = { getElement: c }, l = $(), d = Z(l);
  {
    var h = (m) => {
      var v = Am();
      qe(v, () => ({ ...i }));
      var p = ae(v);
      Ae(p, () => e.children ?? me), xe(v, (b) => s = b, () => s), Ne(v, (b, y) => q == null ? void 0 : q(b, y), n), w(m, v);
    }, f = (m) => {
      var v = $(), p = Z(v);
      {
        var b = (E) => {
          var A = $(), _ = Z(A);
          fl(_, r, !1, (I, S) => {
            xe(I, (T) => s = T, () => s), Ne(I, (T, C) => q == null ? void 0 : q(T, C), n), qe(I, () => ({ ...i }));
          }), w(E, A);
        }, y = (E) => {
          var A = $(), _ = Z(A);
          fl(_, r, !1, (I, S) => {
            xe(I, (x) => s = x, () => s), Ne(I, (x, H) => q == null ? void 0 : q(x, H), n), qe(I, () => ({ ...i }));
            var T = $(), C = Z(T);
            Ae(C, () => e.children ?? me), w(S, T);
          }), w(E, A);
        };
        ee(
          p,
          (E) => {
            o(a) ? E(b) : E(y, !1);
          },
          !0
        );
      }
      w(m, v);
    };
    ee(d, (m) => {
      r() === "svg" ? m(h) : m(f, !1);
    });
  }
  return w(t, l), Te(u);
}
var Sm = /* @__PURE__ */ un("<svg><!></svg>");
function xm(t, e) {
  Ce(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, c = Sm();
  qe(c, () => ({ ...r }));
  var u = ae(c);
  return Ae(u, () => e.children ?? me), xe(c, (l) => i = l, () => i), Ne(c, (l, d) => q == null ? void 0 : q(l, d), n), w(t, c), Te(s);
}
function ja(t, e) {
  Ce(e, !0);
  const [n, r] = ur(), i = Jt(e.value);
  re(e.key, i), Le(() => {
    ni(i, e.value);
  }), Tn(() => {
    i.set(void 0);
  });
  var a = $(), s = Z(a);
  Ae(s, () => e.children ?? me), w(t, a), Te(), r();
}
var Cm = /* @__PURE__ */ se('<div class="mdc-button__touch"></div>'), Tm = /* @__PURE__ */ se('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Bc(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "ripple", 3, !0), s = g(e, "color", 3, "primary"), c = g(e, "variant", 3, "text"), u = g(e, "touch", 3, !1), l = g(e, "action", 3, "close"), d = g(e, "defaultAction", 3, !1), h = g(e, "secondary", 3, !1), f = g(e, "component", 3, Qi), m = g(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ Xe(e, [
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
  ]), p, b = _e({}), y = _e({}), E = he("SMUI:button:context");
  const A = /* @__PURE__ */ ge(() => E === "dialog:action" && l() != null ? { "data-mdc-dialog-action": l() } : { action: l() }), _ = /* @__PURE__ */ ge(() => E === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), I = /* @__PURE__ */ ge(() => E === "banner" ? {} : { secondary: h() });
  let S = e.disabled;
  Le(() => {
    if (S !== e.disabled) {
      if (p) {
        const N = W();
        "blur" in N && N.blur();
      }
      S = v.disabled;
    }
  }), re("SMUI:label:context", "button"), re("SMUI:icon:context", "button");
  function T(N) {
    b[N] || (b[N] = !0);
  }
  function C(N) {
    (!(N in b) || b[N]) && (b[N] = !1);
  }
  function x(N, k) {
    y[N] != k && (k === "" || k == null ? delete y[N] : y[N] = k);
  }
  function H() {
    E === "banner" && Ze(W(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function W() {
    return p.getElement();
  }
  var D = { getElement: W }, M = $(), te = Z(M);
  {
    let N = /* @__PURE__ */ ge(() => [
      [
        Kt,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: C,
          addStyle: x
        }
      ],
      ...n()
    ]), k = /* @__PURE__ */ ge(() => Be({
      "mdc-button": !0,
      "mdc-button--raised": c() === "raised",
      "mdc-button--unelevated": c() === "unelevated",
      "mdc-button--outlined": c() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": u(),
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
    })), U = /* @__PURE__ */ ge(() => Object.entries(y).map(([X, Q]) => `${X}: ${Q};`).concat([i()]).join(" "));
    ui(te, f, (X, Q) => {
      xe(
        Q(X, at(
          {
            get tag() {
              return m();
            },
            get use() {
              return o(N);
            },
            get class() {
              return o(k);
            },
            get style() {
              return o(U);
            }
          },
          () => o(A),
          () => o(_),
          () => o(I),
          {
            get href() {
              return e.href;
            }
          },
          () => v,
          {
            onclick: (P) => {
              var L;
              H(), (L = e.onclick) == null || L.call(e, P);
            },
            children: (P, L) => {
              var B = Tm(), Ee = be(Z(B), 2);
              Ae(Ee, () => e.children ?? me);
              var Ie = be(Ee);
              {
                var ue = (Se) => {
                  var V = Cm();
                  w(Se, V);
                };
                ee(Ie, (Se) => {
                  u() && Se(ue);
                });
              }
              w(P, B);
            },
            $$slots: { default: !0 }
          }
        )),
        (P) => p = P,
        () => p
      );
    });
  }
  return w(t, M), Te(D);
}
function wm(t, e) {
  Ce(e, !0);
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "disabled", 3, !1), i = g(e, "variant", 3, "default"), a = g(e, "isAbortAction", 3, !1), s = g(e, "backgroundColor", 3, void 0);
  {
    let c = /* @__PURE__ */ ge(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    Bc(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return o(c);
      },
      children: (u, l) => {
        var d = $(), h = Z(d);
        Ae(h, () => e.children ?? me), w(u, d);
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
var qa = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, er = {
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
var Lm = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return er;
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
      var n = this.adapter.getAttr(er.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(er.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(er.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(er.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(qa.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(qa.ICON_BUTTON_ON) : this.adapter.removeClass(qa.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(er.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(er.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(er.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(er.ARIA_PRESSED, "" + n);
    }, e;
  }(qt)
), Om = /* @__PURE__ */ se('<div class="mdc-icon-button__touch"></div>'), Rm = /* @__PURE__ */ se('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Mm(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(L) {
    return L === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), c = g(e, "ripple", 3, !0), u = g(e, "toggle", 3, !1), l = g(e, "pressed", 15, n), d = g(e, "touch", 3, !1), h = g(e, "displayFlex", 3, !0), f = g(e, "size", 3, "normal"), m = g(e, "component", 3, Qi), v = g(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ Xe(e, [
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
  ]), b, y, E = /* @__PURE__ */ pe(_e({})), A = _e({}), _ = /* @__PURE__ */ pe(_e({})), I = he("SMUI:icon-button:context"), S = he("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ ge(() => {
    if (I === "data-table:pagination")
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
    else return I === "dialog:header" || I === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let C = !!e.disabled;
  Le(() => {
    if (C != !!e.disabled) {
      if (b) {
        const L = U();
        "blur" in L && L.blur();
      }
      C = !!e.disabled;
    }
  }), re("SMUI:icon:context", "icon-button");
  let x = null;
  Le(() => {
    b && U() && u() !== x && (u() && !y ? (y = new Lm({
      addClass: W,
      hasClass: H,
      notifyChange: (L) => {
        k(L), Ze(U(), "SMUIIconButtonToggleChange", L);
      },
      removeClass: D,
      getAttr: te,
      setAttr: N
    }), y.init()) : !u() && y && (y.destroy(), y = void 0, z(E, {}, !0), z(_, {}, !0)), x = u());
  }), Le(() => {
    y && !r(l()) && y.isOn() !== l() && y.toggle(l());
  }), Tn(() => {
    y && y.destroy();
  });
  function H(L) {
    return L in o(E) ? o(E)[L] : U().classList.contains(L);
  }
  function W(L) {
    o(E)[L] || (o(E)[L] = !0);
  }
  function D(L) {
    (!(L in o(E)) || o(E)[L]) && (o(E)[L] = !1);
  }
  function M(L, B) {
    A[L] != B && (B === "" || B == null ? delete A[L] : A[L] = B);
  }
  function te(L) {
    return L in o(_) ? o(_)[L] ?? null : U().getAttribute(L);
  }
  function N(L, B) {
    o(_)[L] !== B && (o(_)[L] = B);
  }
  function k(L) {
    l(L.isOn);
  }
  function U() {
    return b.getElement();
  }
  var X = { getElement: U }, Q = $(), P = Z(Q);
  {
    let L = /* @__PURE__ */ ge(() => [
      [
        Kt,
        {
          ripple: c(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: W,
          removeClass: D,
          addStyle: M
        }
      ],
      ...i()
    ]), B = /* @__PURE__ */ ge(() => Be({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(l()) && l(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": h(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": I === "card:action",
      "mdc-card__action--icon": I === "card:action",
      "mdc-top-app-bar__navigation-icon": I === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": I === "top-app-bar:action",
      "mdc-snackbar__dismiss": I === "snackbar:actions",
      "mdc-data-table__pagination-button": I === "data-table:pagination",
      "mdc-data-table__sort-icon-button": I === "data-table:sortable-header-cell",
      "mdc-dialog__close": (I === "dialog:header" || I === "dialog:sheet") && e.action === "close",
      ...o(E),
      [a()]: !0
    })), Ee = /* @__PURE__ */ ge(() => Object.entries(A).map(([Se, V]) => `${Se}: ${V};`).concat([s()]).join(" ")), Ie = /* @__PURE__ */ ge(() => r(l()) ? null : l() ? "true" : "false"), ue = /* @__PURE__ */ ge(() => l() ? e.ariaLabelOn : e.ariaLabelOff);
    ui(P, m, (Se, V) => {
      xe(
        V(Se, at(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(L);
            },
            get class() {
              return o(B);
            },
            get style() {
              return o(Ee);
            },
            get "aria-pressed"() {
              return o(Ie);
            },
            get "aria-label"() {
              return o(ue);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return S;
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
              var K;
              y && y.handleClick(), I === "top-app-bar:navigation" && Ze(U(), "SMUITopAppBarIconButtonNav"), (K = e.onclick) == null || K.call(e, ie);
            },
            children: (ie, K) => {
              var oe = Rm(), we = be(Z(oe), 2);
              Ae(we, () => e.children ?? me);
              var j = be(we);
              {
                var ne = (Re) => {
                  var ye = Om();
                  w(Re, ye);
                };
                ee(j, (Re) => {
                  d() && Re(ne);
                });
              }
              w(ie, oe);
            },
            $$slots: { default: !0 }
          }
        )),
        (ie) => b = ie,
        () => b
      );
    });
  }
  return w(t, Q), Te(X);
}
function Dm(t, e) {
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "icon", 3, ""), i = g(e, "disabled", 3, !1);
  Mm(t, {
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
      Io(a, {
        class: "material-icons",
        children: (c, u) => {
          var l = Ht();
          Oe(() => it(l, r())), w(c, l);
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
var Pm = {
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
var Hm = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pm;
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
  }(qt)
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
var kr = {
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
var Nm = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return kr;
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
      this.adapter.removeClass(kr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(kr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(kr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(kr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(kr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(kr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(qt)
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
var Um = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Bl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, km = {
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
var Bm = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Um;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return km;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Bl;
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
      n > 0 && (n += Bl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(qt)
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
}, Fm = {
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
}, Fl = {
  LABEL_SCALE: 0.75
}, Vm = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Gm = [
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
var Vl = ["mousedown", "touchstart"], Gl = ["click", "keydown"], jm = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
        return Fm;
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
        return Fl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Gm.indexOf(n) >= 0;
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
        for (var s = Lt(Vl), c = s.next(); !c.done; c = s.next()) {
          var u = c.value;
          this.adapter.registerInputInteractionHandler(u, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          c && !c.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var l = Lt(Gl), d = l.next(); !d.done; d = l.next()) {
          var u = d.value;
          this.adapter.registerTextFieldInteractionHandler(u, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = l.return) && a.call(l);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Lt(Vl), c = s.next(); !c.done; c = s.next()) {
          var u = c.value;
          this.adapter.deregisterInputInteractionHandler(u, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          c && !c.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var l = Lt(Gl), d = l.next(); !d.done; d = l.next()) {
          var u = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(u, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          d && !d.done && (a = l.return) && a.call(l);
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
        return Vm.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Fl.LABEL_SCALE;
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
  }(qt)
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
var jl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, qm = {
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
var ql = ["click", "keydown"], zm = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return jl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qm;
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
        for (var i = Lt(ql), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.registerInteractionHandler(s, this.interactionHandler);
        }
      } catch (c) {
        n = { error: c };
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
        for (var i = Lt(ql), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.interactionHandler);
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.setDisabled = function(n) {
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", jl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(qt)
), Wm = /* @__PURE__ */ se("<span><!></span>"), Xm = /* @__PURE__ */ se("<label><!></label>");
function ds(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "floatAbove", 15, !1), s = g(e, "required", 15, !1), c = g(e, "wrapped", 3, !1), u = /* @__PURE__ */ Xe(e, [
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
  ]), l, d = /* @__PURE__ */ pe(void 0), h = new Yi(), f = _e({}), m = _e({}), v = he("SMUI:generic:input:props") ?? {}, p = a();
  Le(() => {
    o(d) && p !== a() && (p = a(), o(d).float(a()));
  });
  let b = s();
  Le(() => {
    o(d) && b !== s() && (b = s(), o(d).setRequired(s()));
  });
  const y = he("SMUI:floating-label:mount"), E = he("SMUI:floating-label:unmount");
  st(() => {
    z(
      d,
      new Hm({
        addClass: A,
        removeClass: _,
        getWidth: () => {
          var L, B;
          const X = W(), Q = X.cloneNode(!0);
          (L = X.parentNode) == null || L.appendChild(Q), Q.classList.add("smui-floating-label--remove-transition"), Q.classList.add("smui-floating-label--force-size"), Q.classList.remove("mdc-floating-label--float-above");
          const P = Q.scrollWidth;
          return (B = X.parentNode) == null || B.removeChild(Q), P;
        },
        registerInteractionHandler: (X, Q) => h.on(W(), X, Q),
        deregisterInteractionHandler: (X, Q) => h.off(W(), X, Q)
      }),
      !0
    );
    const U = {
      get element() {
        return W();
      },
      addStyle: I,
      removeStyle: S
    };
    return y && y(U), o(d).init(), () => {
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
  function I(U, X) {
    m[U] != X && (X === "" || X == null ? delete m[U] : m[U] = X);
  }
  function S(U) {
    U in m && delete m[U];
  }
  function T(U) {
    var X;
    (X = o(d)) == null || X.shake(U);
  }
  function C(U) {
    a(U);
  }
  function x(U) {
    s(U);
  }
  function H() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function W() {
    return l;
  }
  var D = { shake: T, float: C, setRequired: x, getWidth: H, getElement: W }, M = $(), te = Z(M);
  {
    var N = (U) => {
      var X = Wm();
      qe(X, (P, L) => ({ class: P, style: L, ...u }), [
        () => Be({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([P, L]) => `${P}: ${L};`).concat([i()]).join(" ")
      ]);
      var Q = ae(X);
      Ae(Q, () => e.children ?? me), xe(X, (P) => l = P, () => l), Ne(X, (P, L) => q == null ? void 0 : q(P, L), n), w(U, X);
    }, k = (U) => {
      var X = Xm();
      qe(
        X,
        (P, L) => ({
          class: P,
          style: L,
          for: e.for || (v ? v.id : void 0),
          ...u
        }),
        [
          () => Be({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([P, L]) => `${P}: ${L};`).concat([i()]).join(" ")
        ]
      );
      var Q = ae(X);
      Ae(Q, () => e.children ?? me), xe(X, (P) => l = P, () => l), Ne(X, (P, L) => q == null ? void 0 : q(P, L), n), w(U, X);
    };
    ee(te, (U) => {
      c() ? U(N) : U(k, !1);
    });
  }
  return w(t, M), Te(D);
}
var Km = /* @__PURE__ */ se("<div></div>");
function Fc(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "active", 3, !1), s = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), c, u = /* @__PURE__ */ pe(void 0), l = new Yi(), d = _e({}), h = _e({});
  st(() => (z(
    u,
    new Nm({
      addClass: m,
      removeClass: v,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (S, T) => l.on(A(), S, T),
      deregisterEventHandler: (S, T) => l.off(A(), S, T)
    }),
    !0
  ), o(u).init(), () => {
    var S;
    (S = o(u)) == null || S.destroy(), l.clear();
  }));
  function f(S) {
    return S in d ? d[S] : A().classList.contains(S);
  }
  function m(S) {
    d[S] || (d[S] = !0);
  }
  function v(S) {
    (!(S in d) || d[S]) && (d[S] = !1);
  }
  function p(S, T) {
    h[S] != T && (T === "" || T == null ? delete h[S] : h[S] = T);
  }
  function b() {
    var S;
    (S = o(u)) == null || S.activate();
  }
  function y() {
    var S;
    (S = o(u)) == null || S.deactivate();
  }
  function E(S) {
    var T;
    (T = o(u)) == null || T.setRippleCenter(S);
  }
  function A() {
    return c;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: E, getElement: A }, I = Km();
  return qe(I, (S, T) => ({ class: S, style: T, ...s }), [
    () => Be({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([S, T]) => `${S}: ${T};`).concat([i()]).join(" ")
  ]), xe(I, (S) => c = S, () => c), Ne(I, (S, T) => q == null ? void 0 : q(S, T), n), w(t, I), Te(_);
}
var Zm = /* @__PURE__ */ se('<div class="mdc-notched-outline__notch"><!></div>'), Ym = /* @__PURE__ */ se('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Vc(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "notched", 3, !1), a = g(e, "noLabel", 3, !1), s = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), c, u = /* @__PURE__ */ pe(void 0), l = /* @__PURE__ */ pe(void 0), d = _e({}), h = _e({}), f;
  Le(() => {
    o(l) !== f && (o(l) ? (o(l).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(l) && o(l).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = o(l));
  }), re("SMUI:floating-label:mount", (C) => {
    z(l, C, !0);
  }), re("SMUI:floating-label:unmount", () => {
    z(l, void 0);
  }), st(() => (z(
    u,
    new Bm({
      addClass: m,
      removeClass: v,
      setNotchWidthProperty: (C) => p("width", C + "px"),
      removeNotchWidthProperty: () => b("width")
    }),
    !0
  ), o(u).init(), () => {
    var C;
    (C = o(u)) == null || C.destroy();
  }));
  function m(C) {
    d[C] || (d[C] = !0);
  }
  function v(C) {
    (!(C in d) || d[C]) && (d[C] = !1);
  }
  function p(C, x) {
    h[C] != x && (x === "" || x == null ? delete h[C] : h[C] = x);
  }
  function b(C) {
    C in h && delete h[C];
  }
  function y(C) {
    var x;
    (x = o(u)) == null || x.notch(C);
  }
  function E() {
    var C;
    (C = o(u)) == null || C.closeNotch();
  }
  function A() {
    return c;
  }
  var _ = { notch: y, closeNotch: E, getElement: A }, I = Ym();
  qe(I, (C) => ({ class: C, ...s }), [
    () => Be({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var S = be(ae(I), 2);
  {
    var T = (C) => {
      var x = Zm(), H = ae(x);
      Ae(H, () => e.children ?? me), Oe((W) => Ut(x, W), [
        () => Object.entries(h).map(([W, D]) => `${W}: ${D};`).join(" ")
      ]), w(C, x);
    };
    ee(S, (C) => {
      a() || C(T);
    });
  }
  return xe(I, (C) => c = C, () => c), Ne(I, (C, x) => q == null ? void 0 : q(C, x), n), w(t, I), Te(_);
}
function jo(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, Qi), a = g(e, "tag", 3, "div"), s = g(e, "_smuiClass", 3, ""), c = g(e, "_smuiClassMap", 23, () => ({})), u = g(e, "_smuiContexts", 19, () => ({})), l = g(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Xe(e, [
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
  Object.entries(c()).forEach(([y, E]) => {
    const A = he(E);
    A && "subscribe" in A && f.push(A.subscribe((_) => {
      c()[y] = _;
    }));
  });
  for (let y in u())
    u().hasOwnProperty(y) && re(y, u()[y]);
  Tn(() => {
    for (const y of f)
      y();
  });
  function m() {
    return h.getElement();
  }
  var v = { getElement: m }, p = $(), b = Z(p);
  {
    let y = /* @__PURE__ */ ge(() => Be({
      [s()]: !0,
      ...c(),
      [r()]: !0
    }));
    ui(b, i, (E, A) => {
      xe(
        A(E, at(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return o(y);
            }
          },
          l,
          () => d,
          {
            children: (_, I) => {
              var S = $(), T = Z(S);
              Ae(T, () => e.children ?? me), w(_, S);
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
function Qm(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    jo(t, at({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, c) => {
        var u = $(), l = Z(u);
        Ae(l, () => e.children ?? me), w(s, u);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
function Jm(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    jo(t, at(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, c) => {
          var u = $(), l = Z(u);
          Ae(l, () => e.children ?? me), w(s, u);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
function $m(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    jo(t, at(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, c) => {
          var u = $(), l = Z(u);
          Ae(l, () => e.children ?? me), w(s, u);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var ep = /* @__PURE__ */ se("<input/>");
function tp(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "type", 3, "text"), a = g(e, "placeholder", 3, " "), s = g(e, "value", 15), c = g(e, "files", 15, null), u = g(e, "dirty", 15, !1), l = g(e, "invalid", 15, !1), d = g(e, "updateInvalid", 3, !0), h = g(e, "initialInvalid", 3, !1), f = g(e, "emptyValueNull", 19, () => s() === null), m = g(e, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ Xe(e, [
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
  ]), p, b = _e({}), y = _e({});
  Le(() => {
    i() === "file" ? delete y.value : y.value = s() == null ? "" : s();
  }), st(() => {
    d() && h() && l(H().matches(":invalid"));
  });
  function E(N) {
    return N === "" ? Number.NaN : +N;
  }
  function A(N) {
    if (i() === "file") {
      c(N.currentTarget.files);
      return;
    }
    if (N.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (N.currentTarget.value === "" && m()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(E(N.currentTarget.value));
        break;
      default:
        s(N.currentTarget.value);
        break;
    }
  }
  function _(N) {
    (i() === "file" || i() === "range") && A(N), u(!0), d() && l(H().matches(":invalid"));
  }
  function I(N) {
    return N in b ? b[N] ?? null : H().getAttribute(N);
  }
  function S(N, k) {
    b[N] !== k && (b[N] = k);
  }
  function T(N) {
    (!(N in b) || b[N] != null) && (b[N] = void 0);
  }
  function C() {
    H().focus();
  }
  function x() {
    H().blur();
  }
  function H() {
    return p;
  }
  var W = { getAttr: I, addAttr: S, removeAttr: T, focus: C, blur: x, getElement: H }, D = ep(), M = (N) => {
    var k;
    i() !== "file" && A(N), (k = e.oninput) == null || k.call(e, N);
  }, te = (N) => {
    var k;
    _(N), (k = e.onchange) == null || k.call(e, N);
  };
  return qe(
    D,
    (N) => ({
      class: N,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...v,
      oninput: M,
      onchange: te
    }),
    [
      () => Be({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), xe(D, (N) => p = N, () => p), Ne(D, (N, k) => q == null ? void 0 : q(N, k), n), w(t, D), Te(W);
}
var np = /* @__PURE__ */ se("<textarea></textarea>");
function rp(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "value", 15, ""), s = g(e, "dirty", 15, !1), c = g(e, "invalid", 15, !1), u = g(e, "updateInvalid", 3, !0), l = g(e, "initialInvalid", 3, !1), d = g(e, "resizable", 3, !0), h = /* @__PURE__ */ Xe(e, [
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
  ]), f, m = _e({});
  st(() => {
    u() && l() && c(_().matches(":invalid"));
  });
  function v() {
    s(!0), u() && c(_().matches(":invalid"));
  }
  function p(C) {
    return C in m ? m[C] ?? null : _().getAttribute(C);
  }
  function b(C, x) {
    m[C] !== x && (m[C] = x);
  }
  function y(C) {
    (!(C in m) || m[C] != null) && (m[C] = void 0);
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
  var I = { getAttr: p, addAttr: b, removeAttr: y, focus: E, blur: A, getElement: _ }, S = np(), T = (C) => {
    var x;
    v(), (x = e.onchange) == null || x.call(e, C);
  };
  return qe(
    S,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...h,
      onchange: T
    }),
    [
      () => Be({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), xe(S, (C) => f = C, () => f), Ne(S, (C, x) => q == null ? void 0 : q(C, x), n), oi(() => ba(S, a)), w(t, S), Te(I);
}
var ip = /* @__PURE__ */ se('<span class="mdc-text-field__ripple"></span>'), ap = /* @__PURE__ */ se("<!> <!>", 1), sp = /* @__PURE__ */ se("<span><!> <!></span>"), op = /* @__PURE__ */ se("<!> <!> <!>", 1), lp = /* @__PURE__ */ se("<label><!> <!> <!> <!> <!> <!> <!></label>"), up = /* @__PURE__ */ se("<div><!> <!> <!> <!> <!></div>"), cp = /* @__PURE__ */ se("<!> <!>", 1);
function Eo(t, e) {
  Ce(e, !0);
  const { applyPassive: n } = Uc;
  let r = () => {
  };
  function i(G) {
    return G === r;
  }
  let a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "style", 3, ""), u = g(e, "ripple", 3, !0), l = g(e, "disabled", 3, !1), d = g(e, "required", 3, !1), h = g(e, "textarea", 3, !1), f = g(e, "variant", 19, () => h() ? "outlined" : "standard"), m = g(e, "noLabel", 3, !1), v = g(e, "type", 3, "text"), p = g(e, "value", 15), b = g(e, "files", 15, r), y = g(e, "invalid", 15, r), E = g(e, "updateInvalid", 19, () => i(y())), A = g(e, "initialInvalid", 3, !1), _ = g(e, "dirty", 15, !1), I = g(e, "validateOnValueChange", 19, E), S = g(e, "useNativeValidation", 19, E), T = g(e, "withLeadingIcon", 3, r), C = g(e, "withTrailingIcon", 3, r), x = g(e, "input", 7), H = g(e, "floatingLabel", 7), W = g(e, "lineRipple", 7), D = g(e, "notchedOutline", 7), M = /* @__PURE__ */ Xe(e, [
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
  const te = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(y()) && y(!1);
  let N, k = /* @__PURE__ */ pe(void 0), U = new Yi(), X = _e({}), Q = _e({}), P = /* @__PURE__ */ pe(void 0), L = /* @__PURE__ */ pe(!1), B = /* @__PURE__ */ pe(_e(A())), Ee = he("SMUI:addLayoutListener"), Ie, ue, Se = new Promise((G) => ue = G), V, ie, K, oe;
  const we = /* @__PURE__ */ ge(() => x() && x().getElement());
  Le(() => {
    (_() || o(B) || !E()) && o(k) && o(k).isValid() !== !y() && (E() ? y(!o(k).isValid()) : o(k).setValid(!y()));
  }), Le(() => {
    o(k) && o(k).getValidateOnValueChange() !== I() && o(k).setValidateOnValueChange(i(I()) ? !1 : I());
  }), Le(() => {
    o(k) && o(k).setUseNativeValidation(i(S()) ? !0 : S());
  }), Le(() => {
    o(k) && o(k).setDisabled(l());
  });
  let j = p();
  Le(() => {
    if (o(k) && te && j !== p()) {
      j = p();
      const G = `${p() == null ? "" : p()}`;
      o(k).getValue() !== G && o(k).setValue(G);
    }
  }), Ee && (Ie = Ee(R)), re("SMUI:textfield:leading-icon:mount", (G) => {
    V = G;
  }), re("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), re("SMUI:textfield:trailing-icon:mount", (G) => {
    ie = G;
  }), re("SMUI:textfield:trailing-icon:unmount", () => {
    ie = void 0;
  }), re("SMUI:textfield:helper-text:id", (G) => {
    z(P, G, !0);
  }), re("SMUI:textfield:helper-text:mount", (G) => {
    K = G;
  }), re("SMUI:textfield:helper-text:unmount", () => {
    z(P, void 0), K = void 0;
  }), re("SMUI:textfield:character-counter:mount", (G) => {
    oe = G;
  }), re("SMUI:textfield:character-counter:unmount", () => {
    oe = void 0;
  }), st(() => {
    var G;
    if (z(
      k,
      new jm(
        {
          // getRootAdapterMethods_
          addClass: Re,
          removeClass: ye,
          hasClass: ne,
          registerTextFieldInteractionHandler: (Y, Me) => U.on(F(), Y, Me),
          deregisterTextFieldInteractionHandler: (Y, Me) => U.off(F(), Y, Me),
          registerValidationAttributeChangeHandler: (Y) => {
            const Me = (Et) => Et.map((kt) => kt.attributeName).filter((kt) => kt), ot = new MutationObserver((Et) => {
              S() && Y(Me(Et));
            }), nt = { attributes: !0 };
            return x() && ot.observe(x().getElement(), nt), ot;
          },
          deregisterValidationAttributeChangeHandler: (Y) => {
            Y.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Y;
            return ((Y = x()) == null ? void 0 : Y.getElement()) ?? null;
          },
          setInputAttr: (Y, Me) => {
            var ot;
            (ot = x()) == null || ot.addAttr(Y, Me);
          },
          removeInputAttr: (Y) => {
            var Me;
            (Me = x()) == null || Me.removeAttr(Y);
          },
          isFocused: () => {
            var Y;
            return document.activeElement === ((Y = x()) == null ? void 0 : Y.getElement());
          },
          registerInputInteractionHandler: (Y, Me) => {
            var nt;
            const ot = (nt = x()) == null ? void 0 : nt.getElement();
            if (ot) {
              const Et = n();
              U.on(ot, Y, Me, typeof Et == "boolean" ? { capture: Et } : Et);
            }
          },
          deregisterInputInteractionHandler: (Y, Me) => {
            var nt;
            const ot = (nt = x()) == null ? void 0 : nt.getElement();
            ot && U.off(ot, Y, Me);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => H() && H().float(Y),
          getLabelWidth: () => H() ? H().getWidth() : 0,
          hasLabel: () => !!H(),
          shakeLabel: (Y) => H() && H().shake(Y),
          setLabelRequired: (Y) => H() && H().setRequired(Y),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => W() && W().activate(),
          deactivateLineRipple: () => W() && W().deactivate(),
          setLineRippleTransformOrigin: (Y) => W() && W().setRippleCenter(Y),
          // getOutlineAdapterMethods_
          closeOutline: () => D() && D().closeNotch(),
          hasOutline: () => !!D(),
          notchOutline: (Y) => D() && D().notch(Y)
        },
        {
          get helperText() {
            return K;
          },
          get characterCounter() {
            return oe;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return ie;
          }
        }
      ),
      !0
    ), te) {
      if (x() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (G = o(k)) == null || G.init();
    } else
      Ju().then(() => {
        var Y;
        if (x() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = o(k)) == null || Y.init();
      });
    return ue(), () => {
      var Y;
      (Y = o(k)) == null || Y.destroy(), U.clear();
    };
  }), Tn(() => {
    Ie && Ie();
  });
  function ne(G) {
    return G in X ? X[G] ?? null : F().classList.contains(G);
  }
  function Re(G) {
    X[G] || (X[G] = !0);
  }
  function ye(G) {
    (!(G in X) || X[G]) && (X[G] = !1);
  }
  function Fe(G, Y) {
    Q[G] != Y && (Y === "" || Y == null ? delete Q[G] : Q[G] = Y);
  }
  function $e() {
    var G;
    (G = x()) == null || G.focus();
  }
  function vt() {
    var G;
    (G = x()) == null || G.blur();
  }
  function R() {
    if (o(k)) {
      const G = o(k).shouldFloat;
      o(k).notchOutline(G);
    }
  }
  function F() {
    return N;
  }
  var de = { focus: $e, blur: vt, layout: R, getElement: F }, Ge = cp(), Ot = Z(Ge);
  {
    var Rt = (G) => {
      var Y = lp();
      qe(Y, (Pe, et, Ye) => ({ class: Pe, style: et, for: void 0, ...Ye }), [
        () => Be({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": l(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": o(L) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": y(),
          ...X,
          [s()]: !0
        }),
        () => Object.entries(Q).map(([Pe, et]) => `${Pe}: ${et};`).concat([c()]).join(" "),
        () => ji(M, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = ae(Y);
      {
        var ot = (Pe) => {
          var et = ap(), Ye = Z(et);
          {
            var Ct = (mt) => {
              var At = ip();
              w(mt, At);
            };
            ee(Ye, (mt) => {
              f() === "filled" && mt(Ct);
            });
          }
          var dn = be(Ye, 2);
          {
            var We = (mt) => {
              {
                let At = /* @__PURE__ */ ge(() => o(L) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Ke = /* @__PURE__ */ ge(() => ht(M, "label$"));
                xe(
                  ds(mt, at(
                    {
                      get floatAbove() {
                        return o(At);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(Ke),
                    {
                      children: (St, Bt) => {
                        var zt = $(), bt = Z(zt);
                        {
                          var Tt = (pt) => {
                          }, an = (pt) => {
                            var Dr = $(), pn = Z(Dr);
                            {
                              var dr = (gn) => {
                                var Qn = Ht();
                                Oe(() => it(Qn, e.label)), w(gn, Qn);
                              }, $i = (gn) => {
                                var Qn = $(), kn = Z(Qn);
                                Ae(kn, () => e.label), w(gn, Qn);
                              };
                              ee(
                                pn,
                                (gn) => {
                                  typeof e.label == "string" ? gn(dr) : gn($i, !1);
                                },
                                !0
                              );
                            }
                            w(pt, Dr);
                          };
                          ee(bt, (pt) => {
                            e.label == null ? pt(Tt) : pt(an, !1);
                          });
                        }
                        w(St, zt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (St) => H(St),
                  () => H()
                );
              }
            };
            ee(dn, (mt) => {
              !m() && e.label != null && mt(We);
            });
          }
          w(Pe, et);
        };
        ee(Me, (Pe) => {
          !h() && f() !== "outlined" && Pe(ot);
        });
      }
      var nt = be(Me, 2);
      {
        var Et = (Pe) => {
          {
            let et = /* @__PURE__ */ ge(() => m() || e.label == null), Ye = /* @__PURE__ */ ge(() => ht(M, "outline$"));
            xe(
              Vc(Pe, at(
                {
                  get noLabel() {
                    return o(et);
                  }
                },
                () => o(Ye),
                {
                  children: (Ct, dn) => {
                    var We = $(), mt = Z(We);
                    {
                      var At = (Ke) => {
                        {
                          let St = /* @__PURE__ */ ge(() => o(L) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Bt = /* @__PURE__ */ ge(() => ht(M, "label$"));
                          xe(
                            ds(Ke, at(
                              {
                                get floatAbove() {
                                  return o(St);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(Bt),
                              {
                                children: (zt, bt) => {
                                  var Tt = $(), an = Z(Tt);
                                  {
                                    var pt = (pn) => {
                                    }, Dr = (pn) => {
                                      var dr = $(), $i = Z(dr);
                                      {
                                        var gn = (kn) => {
                                          var Pr = Ht();
                                          Oe(() => it(Pr, e.label)), w(kn, Pr);
                                        }, Qn = (kn) => {
                                          var Pr = $(), Ms = Z(Pr);
                                          Ae(Ms, () => e.label), w(kn, Pr);
                                        };
                                        ee(
                                          $i,
                                          (kn) => {
                                            typeof e.label == "string" ? kn(gn) : kn(Qn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(pn, dr);
                                    };
                                    ee(an, (pn) => {
                                      e.label == null ? pn(pt) : pn(Dr, !1);
                                    });
                                  }
                                  w(zt, Tt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (zt) => H(zt),
                            () => H()
                          );
                        }
                      };
                      ee(mt, (Ke) => {
                        !m() && e.label != null && Ke(At);
                      });
                    }
                    w(Ct, We);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ct) => D(Ct),
              () => D()
            );
          }
        };
        ee(nt, (Pe) => {
          (h() || f() === "outlined") && Pe(Et);
        });
      }
      var kt = be(nt, 2);
      ja(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Pe, et) => {
          var Ye = $(), Ct = Z(Ye);
          Ae(Ct, () => e.leadingIcon ?? me), w(Pe, Ye);
        },
        $$slots: { default: !0 }
      });
      var cr = be(kt, 2);
      Ae(cr, () => e.children ?? me);
      var ut = be(cr, 2);
      {
        var dt = (Pe) => {
          var et = sp(), Ye = ae(et);
          {
            let dn = /* @__PURE__ */ ge(() => ht(M, "input$"));
            xe(
              rp(Ye, at(
                {
                  get disabled() {
                    return l();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(B);
                  },
                  get "aria-controls"() {
                    return o(P);
                  },
                  get "aria-describedby"() {
                    return o(P);
                  }
                },
                () => o(dn),
                {
                  onblur: (We) => {
                    var mt;
                    z(L, !1), z(B, !0), Ze(F(), "blur", We), (mt = e.input$onblur) == null || mt.call(e, We);
                  },
                  onfocus: (We) => {
                    var mt;
                    z(L, !0), Ze(F(), "focus", We), (mt = e.input$onfocus) == null || mt.call(e, We);
                  },
                  get value() {
                    return p();
                  },
                  set value(We) {
                    p(We);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(We) {
                    _(We);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(We) {
                    y(We);
                  }
                }
              )),
              (We) => x(We),
              () => x()
            );
          }
          var Ct = be(Ye, 2);
          Ae(Ct, () => e.internalCounter ?? me), Oe((dn) => Uo(et, 1, dn), [
            () => sc(Be({
              "mdc-text-field__resizer": !("input$resizable" in M) || e.input$resizable
            }))
          ]), w(Pe, et);
        }, Mt = (Pe) => {
          var et = op(), Ye = Z(et);
          {
            var Ct = (At) => {
              var Ke = $(), St = Z(Ke);
              {
                var Bt = (bt) => {
                  Jm(bt, {
                    children: (Tt, an) => {
                      var pt = Ht();
                      Oe(() => it(pt, e.prefix)), w(Tt, pt);
                    },
                    $$slots: { default: !0 }
                  });
                }, zt = (bt) => {
                  var Tt = $(), an = Z(Tt);
                  Ae(an, () => e.prefix ?? me), w(bt, Tt);
                };
                ee(St, (bt) => {
                  typeof e.prefix == "string" ? bt(Bt) : bt(zt, !1);
                });
              }
              w(At, Ke);
            };
            ee(Ye, (At) => {
              e.prefix != null && At(Ct);
            });
          }
          var dn = be(Ye, 2);
          {
            let At = /* @__PURE__ */ ge(() => ht(M, "input$"));
            xe(
              tp(dn, at(
                {
                  get type() {
                    return v();
                  },
                  get disabled() {
                    return l();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(B);
                  },
                  get "aria-controls"() {
                    return o(P);
                  },
                  get "aria-describedby"() {
                    return o(P);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(At),
                {
                  onblur: (Ke) => {
                    var St;
                    z(L, !1), z(B, !0), Ze(F(), "blur", Ke), (St = e.input$onblur) == null || St.call(e, Ke);
                  },
                  onfocus: (Ke) => {
                    var St;
                    z(L, !0), Ze(F(), "focus", Ke), (St = e.input$onfocus) == null || St.call(e, Ke);
                  },
                  get value() {
                    return p();
                  },
                  set value(Ke) {
                    p(Ke);
                  },
                  get files() {
                    return b();
                  },
                  set files(Ke) {
                    b(Ke);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(Ke) {
                    _(Ke);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(Ke) {
                    y(Ke);
                  }
                }
              )),
              (Ke) => x(Ke),
              () => x()
            );
          }
          var We = be(dn, 2);
          {
            var mt = (At) => {
              var Ke = $(), St = Z(Ke);
              {
                var Bt = (bt) => {
                  $m(bt, {
                    children: (Tt, an) => {
                      var pt = Ht();
                      Oe(() => it(pt, e.suffix)), w(Tt, pt);
                    },
                    $$slots: { default: !0 }
                  });
                }, zt = (bt) => {
                  var Tt = $(), an = Z(Tt);
                  Ae(an, () => e.suffix ?? me), w(bt, Tt);
                };
                ee(St, (bt) => {
                  typeof e.suffix == "string" ? bt(Bt) : bt(zt, !1);
                });
              }
              w(At, Ke);
            };
            ee(We, (At) => {
              e.suffix != null && At(mt);
            });
          }
          w(Pe, et);
        };
        ee(ut, (Pe) => {
          h() && typeof p() == "string" ? Pe(dt) : Pe(Mt, !1);
        });
      }
      var Nn = be(ut, 2);
      ja(Nn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Pe, et) => {
          var Ye = $(), Ct = Z(Ye);
          Ae(Ct, () => e.trailingIcon ?? me), w(Pe, Ye);
        },
        $$slots: { default: !0 }
      });
      var fi = be(Nn, 2);
      {
        var Un = (Pe) => {
          {
            let et = /* @__PURE__ */ ge(() => ht(M, "ripple$"));
            xe(Fc(Pe, at(() => o(et))), (Ye) => W(Ye), () => W());
          }
        };
        ee(fi, (Pe) => {
          !h() && f() !== "outlined" && u() && Pe(Un);
        });
      }
      xe(Y, (Pe) => N = Pe, () => N), Ne(Y, (Pe, et) => Kt == null ? void 0 : Kt(Pe, et), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Re,
        removeClass: ye,
        addStyle: Fe,
        eventTarget: o(we),
        activeTarget: o(we),
        initPromise: Se
      })), Ne(Y, (Pe, et) => q == null ? void 0 : q(Pe, et), a), w(G, Y);
    }, Ln = (G) => {
      var Y = up();
      qe(Y, (ut, dt, Mt) => ({ class: ut, style: dt, ...Mt }), [
        () => Be({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": l(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": y(),
          ...X,
          [s()]: !0
        }),
        () => Object.entries(Q).map(([ut, dt]) => `${ut}: ${dt};`).concat([c()]).join(" "),
        () => ji(M, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = ae(Y);
      {
        var ot = (ut) => {
          var dt = $(), Mt = Z(dt);
          Ae(Mt, () => e.label ?? me), w(ut, dt);
        };
        ee(Me, (ut) => {
          typeof e.label != "string" && ut(ot);
        });
      }
      var nt = be(Me, 2);
      ja(nt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ut, dt) => {
          var Mt = $(), Nn = Z(Mt);
          Ae(Nn, () => e.leadingIcon ?? me), w(ut, Mt);
        },
        $$slots: { default: !0 }
      });
      var Et = be(nt, 2);
      Ae(Et, () => e.children ?? me);
      var kt = be(Et, 2);
      ja(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ut, dt) => {
          var Mt = $(), Nn = Z(Mt);
          Ae(Nn, () => e.trailingIcon ?? me), w(ut, Mt);
        },
        $$slots: { default: !0 }
      });
      var cr = be(kt, 2);
      Ae(cr, () => e.line ?? me), xe(Y, (ut) => N = ut, () => N), Ne(Y, (ut, dt) => Kt == null ? void 0 : Kt(ut, dt), () => ({
        ripple: u(),
        unbounded: !1,
        addClass: Re,
        removeClass: ye,
        addStyle: Fe
      })), Ne(Y, (ut, dt) => q == null ? void 0 : q(ut, dt), a), w(G, Y);
    };
    ee(Ot, (G) => {
      te ? G(Rt) : G(Ln, !1);
    });
  }
  var ve = be(Ot, 2);
  {
    var ce = (G) => {
      {
        let Y = /* @__PURE__ */ ge(() => ht(M, "helperLine$"));
        Qm(G, at(() => o(Y), {
          children: (Me, ot) => {
            var nt = $(), Et = Z(nt);
            Ae(Et, () => e.helper ?? me), w(Me, nt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ee(ve, (G) => {
      e.helper && G(ce);
    });
  }
  return w(t, Ge), Te(de);
}
var dp = /* @__PURE__ */ se("<i><!></i>");
function fp(t, e) {
  Ce(e, !0);
  const n = () => zn(v, "$leadingStore", r), [r, i] = ur();
  let a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), u = g(e, "disabled", 3, !1), l = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ pe(void 0), f = new Yi(), m = _e({});
  const v = he("SMUI:textfield:icon:leading"), p = n();
  let b = /* @__PURE__ */ pe(void 0);
  const y = /* @__PURE__ */ ge(() => ({ role: e.role, tabindex: c() })), E = he("SMUI:textfield:leading-icon:mount"), A = he("SMUI:textfield:leading-icon:unmount"), _ = he("SMUI:textfield:trailing-icon:mount"), I = he("SMUI:textfield:trailing-icon:unmount");
  st(() => (z(
    h,
    new zm({
      getAttr: S,
      setAttr: T,
      removeAttr: C,
      setContent: (k) => {
        z(b, k, !0);
      },
      registerInteractionHandler: (k, U) => f.on(x(), k, U),
      deregisterInteractionHandler: (k, U) => f.off(x(), k, U),
      notifyIconAction: () => Ze(x(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? E && E(o(h)) : _ && _(o(h)), o(h).init(), () => {
    var k;
    o(h) && (p ? A && A(o(h)) : I && I(o(h))), (k = o(h)) == null || k.destroy(), f.clear();
  }));
  function S(k) {
    return k in m ? m[k] ?? null : x().getAttribute(k);
  }
  function T(k, U) {
    m[k] !== U && (m[k] = U);
  }
  function C(k) {
    (!(k in m) || m[k] != null) && (m[k] = void 0);
  }
  function x() {
    return d;
  }
  var H = { getElement: x }, W = dp();
  qe(
    W,
    (k) => ({
      class: k,
      "aria-hidden": c() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? u() ? "true" : "false" : void 0,
      ...o(y),
      ...m,
      ...l
    }),
    [
      () => Be({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [s()]: !0
      })
    ]
  );
  var D = ae(W);
  {
    var M = (k) => {
      var U = $(), X = Z(U);
      Ae(X, () => e.children ?? me), w(k, U);
    }, te = (k) => {
      var U = Ht();
      Oe(() => it(U, o(b))), w(k, U);
    };
    ee(D, (k) => {
      o(b) == null ? k(M) : k(te, !1);
    });
  }
  xe(W, (k) => d = k, () => d), Ne(W, (k, U) => q == null ? void 0 : q(k, U), a), w(t, W);
  var N = Te(H);
  return i(), N;
}
function hp(t, e) {
  Ce(e, !0);
  let n = g(e, "placeholder", 3, ""), r = g(e, "label", 3, ""), i = g(e, "icon", 3, ""), a = g(e, "value", 15, ""), s = g(e, "variant", 3, "standard"), c = g(e, "styles", 3, ""), u = g(e, "required", 3, !1), l = g(e, "oninput", 3, () => {
  });
  var d = $(), h = Z(d);
  {
    var f = (v) => {
      {
        const p = (y) => {
          fp(y, {
            class: "material-icons",
            children: (E, A) => {
              var _ = Ht();
              Oe(() => it(_, i())), w(E, _);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ ge(() => `width: 100%; ${c()}`);
        Eo(v, {
          get label() {
            return r();
          },
          get required() {
            return u();
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
            return l();
          },
          get value() {
            return a();
          },
          set value(y) {
            a(y);
          },
          leadingIcon: p,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, m = (v) => {
      Eo(v, {
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
          return u();
        },
        get oninput() {
          return l();
        },
        get value() {
          return a();
        },
        set value(p) {
          a(p);
        }
      });
    };
    ee(h, (v) => {
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
var vp = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, mp = {
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
}, oa = {
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
}, yt;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(yt || (yt = {}));
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
var hr, tr, Ve = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
hr = {}, hr["" + Ve.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", hr["" + Ve.LIST_ITEM_CLASS] = "mdc-list-item", hr["" + Ve.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", hr["" + Ve.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", hr["" + Ve.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", hr["" + Ve.ROOT] = "mdc-list";
var bi = (tr = {}, tr["" + Ve.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", tr["" + Ve.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", tr["" + Ve.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", tr["" + Ve.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", tr["" + Ve.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", tr["" + Ve.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", tr["" + Ve.ROOT] = "mdc-deprecated-list", tr), vr = {
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
    .` + Ve.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ve.LIST_ITEM_CLASS + ` a,
    .` + bi[Ve.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + bi[Ve.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ve.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ve.LIST_ITEM_CLASS + ` a,
    .` + Ve.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ve.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + bi[Ve.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + bi[Ve.LIST_ITEM_CLASS] + ` a,
    .` + bi[Ve.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + bi[Ve.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, _t = {
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
var pp = ["input", "button", "textarea", "select"], _n = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    pp.indexOf(n) === -1 && t.preventDefault();
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
function gp() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function bp(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(s) {
    s.sort(function(c, u) {
      return c.index - u.index;
    });
  }), n;
}
function Ao(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, s = t.skipFocus, c = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    jc(e);
  }, _t.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var u;
  return e.typeaheadBuffer.length === 1 ? u = _p(i, a, c, e) : u = yp(i, c, e), u !== -1 && !s && r(u), u;
}
function _p(t, e, n, r) {
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
  var c = -1, u;
  for (u = 0; u < a.length; u++)
    if (!n(a[u].index)) {
      c = u;
      break;
    }
  for (; u < a.length; u++)
    if (a[u].index > e && !n(a[u].index)) {
      c = u;
      break;
    }
  return c !== -1 ? (r.sortedIndexCursor = c, a[r.sortedIndexCursor].index) : -1;
}
function yp(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (n.sortedIndexCursor + 1) % i.length, c = -1; s !== n.sortedIndexCursor; ) {
    var u = i[s], l = u.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(u.index);
    if (l && d) {
      c = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return c !== -1 ? (n.sortedIndexCursor = c, i[n.sortedIndexCursor].index) : -1;
}
function Gc(t) {
  return t.typeaheadBuffer.length > 0;
}
function jc(t) {
  t.typeaheadBuffer = "";
}
function zl(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, s = t.sortedIndexByFirstChar, c = t.isItemAtIndexDisabled, u = It(n) === "ArrowLeft", l = It(n) === "ArrowUp", d = It(n) === "ArrowRight", h = It(n) === "ArrowDown", f = It(n) === "Home", m = It(n) === "End", v = It(n) === "Enter", p = It(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || u || l || d || h || f || m || v)
    return -1;
  var b = !p && n.key.length === 1;
  if (b) {
    _n(n);
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return Ao(y, e);
  }
  if (!p)
    return -1;
  r && _n(n);
  var E = r && Gc(e);
  if (E) {
    var y = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return Ao(y, e);
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
function Ip(t) {
  return t instanceof Array;
}
var Ep = ["Alt", "Control", "Meta", "Shift"];
function Wl(t) {
  var e = new Set(t ? Ep.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Ap = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = _t.UNSET_INDEX, r.focusedItemIndex = _t.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = gp(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return vr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ve;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return _t;
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
      if (n !== _t.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Ve.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = _t.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Ve.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, Ve.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Gc(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, Ve.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, s, c = It(n) === "ArrowLeft", u = It(n) === "ArrowUp", l = It(n) === "ArrowRight", d = It(n) === "ArrowDown", h = It(n) === "Home", f = It(n) === "End", m = It(n) === "Enter", v = It(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && l, b = this.isVertical && u || !this.isVertical && c, y = n.key === "A" || n.key === "a", E = Wl(n);
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
          zl(_, this.typeaheadState);
        }
        return;
      }
      var I = this.adapter.getFocusedElementIndex();
      if (!(I === -1 && (I = i, I < 0))) {
        if (p && E([]))
          _n(n), this.focusNextElement(I);
        else if (b && E([]))
          _n(n), this.focusPrevElement(I);
        else if (p && E(["Shift"]) && this.isCheckboxList) {
          _n(n);
          var A = this.focusNextElement(I);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (b && E(["Shift"]) && this.isCheckboxList) {
          _n(n);
          var A = this.focusPrevElement(I);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (h && E([]))
          _n(n), this.focusFirstElement();
        else if (f && E([]))
          _n(n), this.focusLastElement();
        else if (h && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (_n(n), this.isIndexDisabled(I))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, I, I);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (_n(n), this.isIndexDisabled(I))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(I, this.adapter.getListItemCount() - 1, I);
        } else if (y && E(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || v) && E([])) {
          if (r) {
            var S = n.target;
            if (S && S.tagName === "A" && m || (_n(n), this.isIndexDisabled(I)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(I, !1), this.adapter.notifyAction(I));
          }
        } else if ((m || v) && E(["Shift"]) && this.isCheckboxList) {
          var S = n.target;
          if (S && S.tagName === "A" && m || (_n(n), this.isIndexDisabled(I)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : I, I, I), this.adapter.notifyAction(I));
        }
        if (this.hasTypeahead) {
          var _ = {
            event: n,
            focusItemAtIndex: function(C) {
              a.focusItemAtIndex(C);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(C) {
              return a.isIndexDisabled(C);
            }
          };
          zl(_, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, s = Wl(i);
      n !== _t.UNSET_INDEX && (this.isIndexDisabled(n) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Ve.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, vr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Ve.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, vr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Ve.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ve.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== _t.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== _t.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === _t.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, vr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? vr.ARIA_CURRENT : vr.ARIA_SELECTED;
      if (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== _t.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? vr.ARIA_SELECTED : vr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === _t.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), c = [], u = 0; u < this.adapter.getListItemCount(); u++) {
        var l = a == null ? void 0 : a.has(u), d = n.indexOf(u) >= 0;
        d !== l && c.push(u), this.adapter.setCheckedCheckboxOrRadioAtIndex(u, d), this.adapter.setAttributeForElementIndex(u, s, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && c.length && this.adapter.notifySelectionChange(c);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), c = xr([n, r].sort(), 2), u = c[0], l = c[1], d = this.getSelectionAttribute(), h = [], f = u; f <= l; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          s !== m && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Wn([], xr(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === _t.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== _t.UNSET_INDEX ? this.selectedIndex : Ip(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === _t.UNSET_INDEX;
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
      var c = this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? c.push(n) : c = c.filter(function(u) {
        return u !== n;
      }), this.selectedIndex = c;
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
        focusItemAtIndex: function(c) {
          a.focusItemAtIndex(c);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: n,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(c) {
          return a.isIndexDisabled(c);
        }
      };
      return Ao(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return bp(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      jc(this.typeaheadState);
    }, e;
  }(qt)
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
var qc = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = $r.TOP_START, r.originCorner = $r.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return mp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return oa;
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
      this.originCorner = this.originCorner ^ yt.RIGHT;
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
        }, oa.TRANSITION_OPEN_DURATION);
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
          }, oa.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, yt.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, yt.RIGHT) ? "right" : "left", c = this.getHorizontalOriginOffset(r), u = this.getVerticalOriginOffset(r), l = this.measurements, d = l.anchorSize, h = l.surfaceSize, f = (n = {}, n[s] = c, n[a] = u, n);
      d.width / h.width > oa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, yt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, c = e.numbers.MARGIN_TO_EDGE, u = this.hasBit(this.anchorCorner, yt.BOTTOM), l, d;
      u ? (l = i.top - c + this.anchorMargin.bottom, d = i.bottom - c - this.anchorMargin.bottom) : (l = i.top - c + this.anchorMargin.top, d = i.bottom - c + a.height - this.anchorMargin.top);
      var h = d - s.height > 0;
      !h && l > d + this.openBottomBias && (n = this.setBit(n, yt.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, yt.FLIP_RTL), v = this.hasBit(this.anchorCorner, yt.RIGHT) || this.hasBit(n, yt.RIGHT), p = !1;
      f && m ? p = !v : p = v;
      var b, y;
      p ? (b = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var E = b - s.width > 0, A = y - s.width > 0, _ = this.hasBit(n, yt.FLIP_RTL) && this.hasBit(n, yt.RIGHT);
      return A && _ && f || !E && _ ? n = this.unsetBit(n, yt.RIGHT) : (E && p && f || E && !p && v || !A && b >= y) && (n = this.setBit(n, yt.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, yt.BOTTOM), s = this.hasBit(this.anchorCorner, yt.BOTTOM), c = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - c, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - c, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, yt.RIGHT), a = this.hasBit(this.anchorCorner, yt.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, yt.BOTTOM), a = this.hasBit(this.anchorCorner, yt.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, s = a.windowScroll, c = a.viewportDistance, u = a.surfaceSize, l = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Lt(d), f = h.next(); !f.done; f = h.next()) {
          var m = f.value, v = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (l.width - u.width) / 2;
            continue;
          }
          v += c[m], this.isFixedPosition || (m === "top" ? v += s.y : m === "bottom" ? v -= s.y : m === "left" ? v += s.x : v -= s.x), n[m] = v;
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
      }, oa.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(qt)
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
var Xl = {
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
function Sp(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function xp(t, e) {
  if (Sp(t) && e in Xl) {
    var n = t.document.createElement("div"), r = Xl[e], i = r.standard, a = r.prefixed, s = i in n.style;
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
var Ti = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, _i = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Cp = {
  FOCUS_ROOT_INDEX: -1
}, Ai;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Ai || (Ai = {}));
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
var Tp = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Ai.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ti;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return _i;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Cp;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, _i.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(n);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, qc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Ai.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Ai.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Ai.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, _i.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ti.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ti.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, _i.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Ve.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, _i.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Ve.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, _i.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(qt)
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
var ft = {
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
}, Br = {
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
var wp = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Br.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ft;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Br;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Br.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Br.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(ft.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(ft.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(ft.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(ft.FOCUSED), i = n || r, a = this.adapter.hasClass(ft.REQUIRED);
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
      this.adapter.removeClass(ft.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(ft.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(ft.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(ft.FOCUSED))) {
        var r = It(n) === He.ENTER, i = It(n) === He.SPACEBAR, a = It(n) === He.ARROW_UP, s = It(n) === He.ARROW_DOWN, c = n.ctrlKey || n.metaKey;
        if (!c && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var u = i ? " " : n.key, l = this.adapter.typeaheadMatchItem(u, this.getSelectedIndex());
          l >= 0 && this.setSelectedIndex(l), n.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(ft.FOCUSED);
        if (n) {
          var i = Br.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(ft.INVALID), this.adapter.removeMenuClass(ft.MENU_INVALID)) : (this.adapter.addClass(ft.INVALID), this.adapter.addMenuClass(ft.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(ft.REQUIRED) && !this.adapter.hasClass(ft.DISABLED) ? this.getSelectedIndex() !== Br.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(ft.REQUIRED) : this.adapter.removeClass(ft.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner($r.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(ft.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(ft.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(ft.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(ft.REQUIRED);
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
      }, Br.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(qt)
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
var Fr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, nr = {
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
var Lp = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return nr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Fr;
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
      return this.adapter.getAttr(Fr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(nr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(nr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(nr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(nr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(nr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(nr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(nr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(nr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Fr.ROLE) : this.adapter.setAttr(Fr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Fr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Fr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Fr.ARIA_HIDDEN, "true");
    }, e;
  }(qt)
), Op = /* @__PURE__ */ se("<div><!></div>");
function Rp(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "static", 3, !1), s = g(e, "anchor", 3, !0), c = g(e, "fixed", 3, !1), u = g(e, "open", 31, () => _e(a())), l = g(e, "managed", 3, !1), d = g(e, "fullWidth", 3, !1), h = g(e, "quickOpen", 3, !1), f = g(e, "anchorElement", 15), m = g(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = g(e, "maxHeight", 3, 0), p = g(e, "horizontallyCenteredOnViewport", 3, !1), b = g(e, "openBottomBias", 3, 0), y = g(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ Xe(e, [
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
  ]), A, _ = /* @__PURE__ */ pe(void 0), I = _e({}), S = _e({}), T = /* @__PURE__ */ pe(void 0);
  re("SMUI:list:role", "menu"), re("SMUI:list:item:role", "menuitem"), Le(() => {
    var V, ie;
    A && s() && !((V = A.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((ie = A.parentElement) == null || ie.classList.add("mdc-menu-surface--anchor"), f(A.parentElement ?? void 0));
  }), Le(() => {
    o(_) && o(_).isOpen() !== u() && (u() ? o(_).open() : o(_).close());
  }), Le(() => {
    o(_) && o(_).setQuickOpen(h());
  }), Le(() => {
    o(_) && o(_).setFixedPosition(c());
  }), Le(() => {
    o(_) && o(_).setMaxHeight(v());
  }), Le(() => {
    o(_) && o(_).setIsHorizontallyCenteredOnViewport(p());
  });
  const C = $r;
  Le(() => {
    o(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(_).setAnchorCorner(C[e.anchorCorner]) : o(_).setAnchorCorner(e.anchorCorner));
  }), Le(() => {
    o(_) && o(_).setAnchorMargin(m());
  }), Le(() => {
    o(_) && o(_).setOpenBottomBias(b());
  });
  const x = he("SMUI:menu-surface:mount"), H = he("SMUI:menu-surface:unmount");
  st(() => {
    z(
      _,
      new qc({
        addClass: D,
        removeClass: M,
        hasClass: W,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          l() || u(a()), u() || Ze(B(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          l() || u(a()), u() || Ze(B(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          l() || u(!0), u() && Ze(B(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          u() || Ze(B(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ie) => B().contains(ie),
        isRtl: () => getComputedStyle(B()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ie) => {
          S["transform-origin"] = ie;
        },
        isFocused: () => document.activeElement === B(),
        saveFocus: () => {
          z(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!A || B().contains(document.activeElement)) && o(T) && document.contains(o(T)) && "focus" in o(T) && o(T).focus();
        },
        getInnerDimensions: () => ({
          width: B().offsetWidth,
          height: B().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (ie) => {
          S.left = "left" in ie ? `${ie.left}px` : "", S.right = "right" in ie ? `${ie.right}px` : "", S.top = "top" in ie ? `${ie.top}px` : "", S.bottom = "bottom" in ie ? `${ie.bottom}px` : "";
        },
        setMaxHeight: (ie) => {
          S["max-height"] = ie;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return u();
      },
      set open(ie) {
        u(ie);
      },
      closeProgrammatic: te
    };
    return x && x(V), o(_).init(), () => {
      var K, oe;
      H && H(V);
      const ie = o(_).isHoistedElement;
      (K = o(_)) == null || K.destroy(), ie && ((oe = B().parentNode) == null || oe.removeChild(B()));
    };
  }), Tn(() => {
    var V;
    s() && B() && ((V = B().parentElement) == null || V.classList.remove("mdc-menu-surface--anchor"));
  });
  function W(V) {
    return V in I ? I[V] : B().classList.contains(V);
  }
  function D(V) {
    I[V] || (I[V] = !0);
  }
  function M(V) {
    (!(V in I) || I[V]) && (I[V] = !1);
  }
  function te(V) {
    var ie;
    (ie = o(_)) == null || ie.close(V), u(!1);
  }
  function N(V) {
    o(_) && u() && !l() && o(_).handleBodyClick(V);
  }
  function k() {
    return u();
  }
  function U(V) {
    u(V);
  }
  function X(V, ie) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setAbsolutePosition(V, ie);
  }
  function Q(V) {
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
  function B() {
    return A;
  }
  var Ee = {
    isOpen: k,
    setOpen: U,
    setAbsolutePosition: X,
    setIsHoisted: Q,
    isFixed: P,
    flipCornerHorizontally: L,
    getElement: B
  }, Ie = Op();
  da("click", Hu.body, N, !0);
  var ue = (V) => {
    var ie;
    o(_) && !l() && o(_).handleKeydown(V), (ie = e.onkeydown) == null || ie.call(e, V);
  };
  qe(
    Ie,
    (V, ie) => ({
      class: V,
      style: ie,
      role: "dialog",
      ...E,
      onkeydown: ue
    }),
    [
      () => Be({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": c(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...I,
        [r()]: !0
      }),
      () => Object.entries(S).map(([V, ie]) => `${V}: ${ie};`).concat([i()]).join(" ")
    ]
  );
  var Se = ae(Ie);
  return Ae(Se, () => e.children ?? me), xe(Ie, (V) => A = V, () => A), Ne(Ie, (V, ie) => q == null ? void 0 : q(V, ie), n), w(t, Ie), Te(Ee);
}
function Ks(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Mp(t, e) {
  Ce(e, !0);
  const { closest: n } = Ls;
  let r = g(e, "use", 19, () => []), i = g(e, "class", 3, ""), a = g(e, "open", 15, !1), s = g(e, "anchorElement", 15), c = g(e, "managed", 3, !1), u = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), l, d = /* @__PURE__ */ pe(void 0), h = /* @__PURE__ */ pe(void 0), f = /* @__PURE__ */ pe(void 0);
  re("SMUI:menu-surface:mount", (C) => {
    o(h) || z(h, C, !0);
  });
  const m = he("SMUI:list:mount");
  re("SMUI:list:mount", (C) => {
    o(f) || z(f, C, !0), m && m(C);
  });
  const v = he("SMUI:menu:mount"), p = he("SMUI:menu:unmount");
  st(() => (z(
    d,
    new Tp({
      addClassToElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(C, x);
      },
      removeClassFromElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(C, x);
      },
      addAttributeToElementAtIndex: (C, x, H) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(C, x, H);
      },
      removeAttributeFromElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(C, x);
      },
      getAttributeFromElementAtIndex: (C, x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(C, x);
      },
      elementContainsClass: (C, x) => C.classList.contains(x),
      closeSurface: (C) => {
        var x;
        c() || ((x = o(h)) == null || x.closeProgrammatic(C), Ze(S(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((x) => x.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Ze(S(), "SMUIMenuSelected", {
          index: C.index,
          item: o(f).getOrderedList()[C.index].element
        });
      },
      getMenuItemCount: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).items.length;
      },
      focusItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).focusItemAtIndex(C);
      },
      focusListRoot: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in o(f).element && o(f).element.focus();
      },
      isSelectableItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(o(f).getOrderedList()[C].element, `.${Ti.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const x = o(f).getOrderedList(), H = n(x[C].element, `.${Ti.MENU_SELECTION_GROUP}`), W = H == null ? void 0 : H.querySelector(`.${Ti.MENU_SELECTED_LIST_ITEM}`);
        return W ? x.map((D) => D.element).indexOf(W) : -1;
      }
    }),
    !0
  ), v && v(o(d)), o(d).init(), () => {
    var C;
    p && o(d) && p(o(d)), (C = o(d)) == null || C.destroy();
  }));
  function b(C) {
    o(d) && o(d).handleKeydown(C);
  }
  function y() {
    return a();
  }
  function E(C) {
    a(C);
  }
  function A(C) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(C);
  }
  function _() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function I() {
    return l;
  }
  function S() {
    return l.getElement();
  }
  var T = {
    isOpen: y,
    setOpen: E,
    setDefaultFocusState: A,
    getSelectedIndex: _,
    getMenuSurface: I,
    getElement: S
  };
  {
    let C = /* @__PURE__ */ ge(() => Be({ "mdc-menu": !0, [i()]: !0 }));
    xe(
      Rp(t, at(
        {
          get use() {
            return r();
          },
          get class() {
            return o(C);
          },
          get managed() {
            return c();
          }
        },
        () => u,
        {
          onkeydown: (x) => {
            var H;
            b(x), (H = e.onkeydown) == null || H.call(e, x);
          },
          onSMUIMenuSurfaceOpened: (x) => {
            var H;
            o(d) && o(d).handleMenuSurfaceOpened(), (H = e.onSMUIMenuSurfaceOpened) == null || H.call(e, x);
          },
          onSMUIListAction: (x) => {
            var H;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[x.detail.index].element), (H = e.onSMUIListAction) == null || H.call(e, x);
          },
          get open() {
            return a();
          },
          set open(x) {
            a(x);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(x) {
            s(x);
          },
          children: (x, H) => {
            var W = $(), D = Z(W);
            Ae(D, () => e.children ?? me), w(x, W);
          },
          $$slots: { default: !0 }
        }
      )),
      (x) => l = x,
      () => l
    );
  }
  return Te(T);
}
function Dp(t, e) {
  Ce(e, !0);
  const { closest: n, matches: r } = Ls;
  let i = he("SMUI:list:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "nonInteractive", 3, !1), u = g(e, "dense", 3, !1), l = g(e, "textualList", 3, !1), d = g(e, "avatarList", 3, !1), h = g(e, "iconList", 3, !1), f = g(e, "imageList", 3, !1), m = g(e, "thumbnailList", 3, !1), v = g(e, "videoList", 3, !1), p = g(e, "twoLine", 3, !1), b = g(e, "threeLine", 3, !1), y = g(e, "vertical", 3, !0), E = g(e, "wrapFocus", 19, () => he("SMUI:list:wrapFocus") ?? !1), A = g(e, "singleSelection", 3, !1), _ = g(e, "disabledItemsFocusable", 3, !1), I = g(e, "selectedIndex", 31, () => -1), S = g(e, "radioList", 3, !1), T = g(e, "checkList", 3, !1), C = g(e, "hasTypeahead", 3, !1), x = g(e, "component", 3, Qi), H = g(e, "tag", 3, i ? "nav" : "ul"), W = /* @__PURE__ */ Xe(e, [
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
  ]), D, M = /* @__PURE__ */ pe(void 0), te = [], N = he("SMUI:list:role");
  const k = /* @__PURE__ */ new WeakMap();
  let U = he("SMUI:dialog:selection"), X = he("SMUI:addLayoutListener"), Q;
  re("SMUI:list:nonInteractive", c()), re("SMUI:separator:context", "list"), N || (A() ? (N = "listbox", re("SMUI:list:item:role", "option")) : S() ? (N = "radiogroup", re("SMUI:list:item:role", "radio")) : T() ? (N = "group", re("SMUI:list:item:role", "checkbox")) : (N = "list", re("SMUI:list:item:role", void 0))), Le(() => {
    o(M) && o(M).setVerticalOrientation(y());
  }), Le(() => {
    o(M) && o(M).setWrapFocus(E());
  }), Le(() => {
    o(M) && o(M).setHasTypeahead(C());
  }), Le(() => {
    o(M) && o(M).setSingleSelection(A());
  }), Le(() => {
    o(M) && o(M).setDisabledItemsFocusable(_());
  }), Le(() => {
    o(M) && A() && R() !== I() && o(M).setSelectedIndex(I());
  }), X && (Q = X(Fe)), re("SMUI:list:item:mount", (ve) => {
    te.push(ve), k.set(ve.element, ve), A() && ve.selected && I(ye(ve.element));
  }), re("SMUI:list:item:unmount", (ve) => {
    const ce = (ve && te.findIndex((G) => G === ve)) ?? -1;
    ce !== -1 && (te.splice(ce, 1), k.delete(ve.element));
  });
  const P = he("SMUI:list:mount"), L = he("SMUI:list:unmount");
  st(() => {
    z(
      M,
      new Ap({
        addClassForElementIndex: K,
        focusItemAtIndex: de,
        getAttributeForElementIndex: (ce, G) => {
          var Y;
          return ((Y = V()[ce]) == null ? void 0 : Y.getAttr(G)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((ce) => ce.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => te.length,
        getPrimaryTextAtIndex: Re,
        hasCheckboxAtIndex: (ce) => {
          var G;
          return ((G = V()[ce]) == null ? void 0 : G.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (ce) => {
          var G;
          return ((G = V()[ce]) == null ? void 0 : G.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (ce) => {
          const G = V()[ce];
          return ((G == null ? void 0 : G.hasCheckbox) && G.checked) ?? !1;
        },
        isFocusInsideList: () => D != null && Ge() !== document.activeElement && Ge().contains(document.activeElement),
        isRootFocused: () => D != null && document.activeElement === Ge(),
        listItemAtIndexHasClass: ie,
        notifyAction: (ce) => {
          I(ce), D != null && Ze(Ge(), "SMUIListAction", { index: ce });
        },
        notifySelectionChange: (ce) => {
          D != null && Ze(Ge(), "SMUIListSelectionChange", { changedIndices: ce });
        },
        removeClassForElementIndex: oe,
        setAttributeForElementIndex: we,
        setCheckedCheckboxOrRadioAtIndex: (ce, G) => {
          V()[ce].checked = G;
        },
        setTabIndexForListItemChildren: (ce, G) => {
          const Y = V()[ce];
          Array.prototype.forEach.call(Y.element.querySelectorAll("button:not(:disabled), a"), (ot) => {
            ot.setAttribute("tabindex", G);
          });
        }
      }),
      !0
    );
    const ve = {
      get element() {
        return Ge();
      },
      get items() {
        return te;
      },
      get typeaheadInProgress() {
        if (!o(M))
          throw new Error("Instance is undefined.");
        return o(M).isTypeaheadInProgress();
      },
      typeaheadMatchItem(ce, G) {
        if (!o(M))
          throw new Error("Instance is undefined.");
        return o(M).typeaheadMatchItem(
          ce,
          G,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: de,
      addClassForElementIndex: K,
      removeClassForElementIndex: oe,
      setAttributeForElementIndex: we,
      removeAttributeForElementIndex: j,
      getAttributeFromElementIndex: ne,
      getPrimaryTextAtIndex: Re
    };
    return P && P(ve), o(M).init(), o(M).layout(), () => {
      var ce;
      L && L(ve), (ce = o(M)) == null || ce.destroy();
    };
  }), Tn(() => {
    Q && Q();
  });
  function B(ve) {
    o(M) && ve.target && o(M).handleKeydown(ve, ve.target.classList.contains("mdc-deprecated-list-item"), ye(ve.target));
  }
  function Ee(ve) {
    o(M) && ve.target && o(M).handleFocusIn(ye(ve.target));
  }
  function Ie(ve) {
    o(M) && ve.target && o(M).handleFocusOut(ye(ve.target));
  }
  function ue(ve) {
    o(M) && ve.target && o(M).handleClick(ye(ve.target), !r(ve.target, 'input[type="checkbox"], input[type="radio"]'), ve);
  }
  function Se(ve) {
    if (S() || T()) {
      const ce = ye(ve.target);
      if (ce !== -1) {
        const G = V()[ce];
        G && (S() && !G.checked || T()) && (r(ve.detail.target, 'input[type="checkbox"], input[type="radio"]') || (G.checked = !G.checked), G.activateRipple(), window.requestAnimationFrame(() => {
          G.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return D == null ? [] : [...Ge().children].map((ve) => k.get(ve)).filter((ve) => ve && ve._smui_list_item_accessor);
  }
  function ie(ve, ce) {
    const G = V()[ve];
    return (G && G.hasClass(ce)) ?? !1;
  }
  function K(ve, ce) {
    const G = V()[ve];
    G && G.addClass(ce);
  }
  function oe(ve, ce) {
    const G = V()[ve];
    G && G.removeClass(ce);
  }
  function we(ve, ce, G) {
    const Y = V()[ve];
    Y && Y.addAttr(ce, G);
  }
  function j(ve, ce) {
    const G = V()[ve];
    G && G.removeAttr(ce);
  }
  function ne(ve, ce) {
    const G = V()[ve];
    return G ? G.getAttr(ce) : null;
  }
  function Re(ve) {
    const ce = V()[ve];
    return (ce && ce.getPrimaryText()) ?? "";
  }
  function ye(ve) {
    const ce = n(ve, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ce && r(ce, ".mdc-deprecated-list-item") ? V().map((G) => G == null ? void 0 : G.element).indexOf(ce) : -1;
  }
  function Fe() {
    if (!o(M))
      throw new Error("Instance is undefined.");
    return o(M).layout();
  }
  function $e(ve, ce) {
    if (!o(M))
      throw new Error("Instance is undefined.");
    return o(M).setEnabled(ve, ce);
  }
  function vt() {
    if (!o(M))
      throw new Error("Instance is undefined.");
    return o(M).isTypeaheadInProgress();
  }
  function R() {
    if (!o(M))
      throw new Error("Instance is undefined.");
    return o(M).getSelectedIndex();
  }
  function F() {
    if (!o(M))
      throw new Error("Instance is undefined.");
    return o(M).getFocusedItemIndex();
  }
  function de(ve) {
    const ce = V()[ve];
    ce && "focus" in ce.element && ce.element.focus();
  }
  function Ge() {
    return D.getElement();
  }
  var Ot = {
    layout: Fe,
    setEnabled: $e,
    getTypeaheadInProgress: vt,
    getSelectedIndex: R,
    getFocusedItemIndex: F,
    focusItemAtIndex: de,
    getElement: Ge
  }, Rt = $(), Ln = Z(Rt);
  {
    let ve = /* @__PURE__ */ ge(() => Be({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": c(),
      "mdc-deprecated-list--dense": u(),
      "mdc-deprecated-list--textual-list": l(),
      "mdc-deprecated-list--avatar-list": d() || U,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": b() && !p(),
      [s()]: !0
    }));
    ui(Ln, x, (ce, G) => {
      xe(
        G(ce, at(
          {
            get tag() {
              return H();
            },
            get use() {
              return a();
            },
            get class() {
              return o(ve);
            },
            get role() {
              return N;
            }
          },
          () => W,
          {
            onkeydown: (Y) => {
              var Me;
              B(Y), (Me = e.onkeydown) == null || Me.call(e, Y);
            },
            onfocusin: (Y) => {
              var Me;
              Ee(Y), (Me = e.onfocusin) == null || Me.call(e, Y);
            },
            onfocusout: (Y) => {
              var Me;
              Ie(Y), (Me = e.onfocusout) == null || Me.call(e, Y);
            },
            onclick: (Y) => {
              var Me;
              ue(Y), (Me = e.onclick) == null || Me.call(e, Y);
            },
            onSMUIAction: (Y) => {
              var Me;
              Se(Y), (Me = e.onSMUIAction) == null || Me.call(e, Y);
            },
            children: (Y, Me) => {
              var ot = $(), nt = Z(ot);
              Ae(nt, () => e.children ?? me), w(Y, ot);
            },
            $$slots: { default: !0 }
          }
        )),
        (Y) => D = Y,
        () => D
      );
    });
  }
  return w(t, Rt), Te(Ot);
}
let Pp = 0;
var Hp = /* @__PURE__ */ se('<span class="mdc-deprecated-list-item__ripple"></span>'), Np = /* @__PURE__ */ se("<!><!>", 1);
function Up(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(K) {
    return K === n;
  }
  let i = he("SMUI:list:item:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "style", 3, ""), u = g(e, "nonInteractive", 19, () => he("SMUI:list:nonInteractive") ?? !1), l = g(e, "ripple", 19, () => !u()), d = g(e, "wrapper", 3, !1), h = g(e, "activated", 15, !1), f = g(e, "role", 19, () => d() ? "presentation" : he("SMUI:list:item:role")), m = g(e, "selected", 15, !1), v = g(e, "disabled", 3, !1), p = g(e, "skipRestoreFocus", 3, !1), b = g(e, "tabindex", 15, n), y = g(e, "inputId", 19, () => "SMUI-form-field-list-" + Pp++), E = g(e, "component", 3, Qi), A = g(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ Xe(e, [
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
  re("SMUI:list:nonInteractive", void 0), re("SMUI:list:item:role", void 0);
  let I, S = _e({}), T = _e({}), C = _e({}), x = /* @__PURE__ */ pe(void 0), H = /* @__PURE__ */ pe(void 0);
  const W = /* @__PURE__ */ ge(() => r(b()) ? !u() && !v() && (m() || o(x) && o(x).checked) ? 0 : -1 : b());
  re("SMUI:generic:input:props", { id: y() }), re("SMUI:separator:context", void 0), re("SMUI:generic:input:mount", (K) => {
    ("_smui_checkbox_accessor" in K || "_smui_radio_accessor" in K) && z(x, K, !0);
  }), re("SMUI:generic:input:unmount", () => {
    z(x, void 0);
  });
  const D = he("SMUI:list:item:mount"), M = he("SMUI:list:item:unmount");
  st(() => {
    if (!m() && !u()) {
      let oe = !0, we = I.getElement();
      for (; we.previousElementSibling; )
        if (we = we.previousElementSibling, we.nodeType === 1 && we.classList.contains("mdc-deprecated-list-item") && !we.classList.contains("mdc-deprecated-list-item--disabled")) {
          oe = !1;
          break;
        }
      oe && z(H, window.requestAnimationFrame(() => L(we)), !0);
    }
    const K = {
      _smui_list_item_accessor: !0,
      get element() {
        return ue();
      },
      get selected() {
        return m();
      },
      set selected(oe) {
        m(oe);
      },
      hasClass: te,
      addClass: N,
      removeClass: k,
      getAttr: X,
      addAttr: Q,
      removeAttr: P,
      getPrimaryText: Ie,
      // For inputs within item.
      get checked() {
        return (o(x) && o(x).checked) ?? !1;
      },
      set checked(oe) {
        o(x) && (o(x).checked = !!oe);
      },
      get hasCheckbox() {
        return !!(o(x) && "_smui_checkbox_accessor" in o(x));
      },
      get hasRadio() {
        return !!(o(x) && "_smui_radio_accessor" in o(x));
      },
      activateRipple() {
        o(x) && o(x).activateRipple();
      },
      deactivateRipple() {
        o(x) && o(x).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ee,
      get tabindex() {
        return o(W);
      },
      set tabindex(oe) {
        b(oe);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(oe) {
        h(oe);
      }
    };
    return D && D(K), () => {
      M && M(K);
    };
  }), Tn(() => {
    o(H) && window.cancelAnimationFrame(o(H));
  });
  function te(K) {
    return K in S ? S[K] : ue().classList.contains(K);
  }
  function N(K) {
    S[K] || (S[K] = !0);
  }
  function k(K) {
    (!(K in S) || S[K]) && (S[K] = !1);
  }
  function U(K, oe) {
    T[K] != oe && (oe === "" || oe == null ? delete T[K] : T[K] = oe);
  }
  function X(K) {
    return K in C ? C[K] ?? null : ue().getAttribute(K);
  }
  function Q(K, oe) {
    C[K] !== oe && (C[K] = oe);
  }
  function P(K) {
    (!(K in C) || C[K] != null) && (C[K] = void 0);
  }
  function L(K) {
    let oe = !0;
    for (; K.nextElementSibling; )
      if (K = K.nextElementSibling, K.nodeType === 1 && K.classList.contains("mdc-deprecated-list-item")) {
        const we = K.attributes.getNamedItem("tabindex");
        if (we && we.value === "0") {
          oe = !1;
          break;
        }
      }
    oe && b(0);
  }
  function B(K) {
    const oe = K.key === "Enter", we = K.key === "Space";
    (oe || we) && Ee(K);
  }
  function Ee(K) {
    v() || Ze(ue(), "SMUIAction", K);
  }
  function Ie() {
    const K = ue(), oe = K.querySelector(".mdc-deprecated-list-item__primary-text");
    if (oe)
      return oe.textContent ?? "";
    const we = K.querySelector(".mdc-deprecated-list-item__text");
    return we ? we.textContent ?? "" : K.textContent ?? "";
  }
  function ue() {
    return I.getElement();
  }
  var Se = { action: Ee, getPrimaryText: Ie, getElement: ue }, V = $(), ie = Z(V);
  {
    let K = /* @__PURE__ */ ge(() => [
      ...u() ? [] : [
        [
          Kt,
          {
            ripple: !o(x),
            unbounded: !1,
            color: (h() || m()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: N,
            removeClass: k,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), oe = /* @__PURE__ */ ge(() => Be({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": u(),
      ...S,
      [s()]: !0
    })), we = /* @__PURE__ */ ge(() => Object.entries(T).map(([ne, Re]) => `${ne}: ${Re};`).concat([c()]).join(" ")), j = /* @__PURE__ */ ge(() => p() || void 0);
    ui(ie, E, (ne, Re) => {
      xe(
        Re(ne, at(
          {
            get tag() {
              return A();
            },
            get use() {
              return o(K);
            },
            get class() {
              return o(oe);
            },
            get style() {
              return o(we);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(x) && o(x).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(j);
            },
            get tabindex() {
              return o(W);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => _,
          {
            onclick: (ye) => {
              var Fe;
              Ee(ye), (Fe = e.onclick) == null || Fe.call(e, ye);
            },
            onkeydown: (ye) => {
              var Fe;
              B(ye), (Fe = e.onkeydown) == null || Fe.call(e, ye);
            },
            children: (ye, Fe) => {
              var $e = Np(), vt = Z($e);
              {
                var R = (de) => {
                  var Ge = Hp();
                  w(de, Ge);
                };
                ee(vt, (de) => {
                  l() && de(R);
                });
              }
              var F = be(vt);
              Ae(F, () => e.children ?? me), w(ye, $e);
            },
            $$slots: { default: !0 }
          }
        )),
        (ye) => I = ye,
        () => I
      );
    });
  }
  return w(t, V), Te(Se);
}
let kp = 0;
var Bp = /* @__PURE__ */ se("<div><!></div>");
function Fp(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "id", 19, () => "SMUI-select-helper-text-" + kp++), a = g(e, "persistent", 3, !1), s = g(e, "validationMsg", 3, !1), c = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), u, l = /* @__PURE__ */ pe(void 0), d = _e({}), h = _e({}), f = /* @__PURE__ */ pe(void 0);
  const m = he("SMUI:select:helper-text:id"), v = he("SMUI:select:helper-text:mount"), p = he("SMUI:select:helper-text:unmount");
  st(() => (z(
    l,
    new Lp({
      addClass: y,
      removeClass: E,
      hasClass: b,
      getAttr: A,
      setAttr: _,
      removeAttr: I,
      setContent: (D) => {
        z(f, D, !0);
      }
    }),
    !0
  ), m && m(i()), v && v(o(l)), o(l).init(), () => {
    var D;
    p && o(l) && p(o(l)), (D = o(l)) == null || D.destroy();
  }));
  function b(D) {
    return D in d ? d[D] : S().classList.contains(D);
  }
  function y(D) {
    d[D] || (d[D] = !0);
  }
  function E(D) {
    (!(D in d) || d[D]) && (d[D] = !1);
  }
  function A(D) {
    return D in h ? h[D] ?? null : S().getAttribute(D);
  }
  function _(D, M) {
    h[D] !== M && (h[D] = M);
  }
  function I(D) {
    (!(D in h) || h[D] != null) && (h[D] = void 0);
  }
  function S() {
    return u;
  }
  var T = { getElement: S }, C = Bp();
  qe(
    C,
    (D) => ({
      class: D,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...c
    }),
    [
      () => Be({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var x = ae(C);
  {
    var H = (D) => {
      var M = $(), te = Z(M);
      Ae(te, () => e.children ?? me), w(D, M);
    }, W = (D) => {
      var M = Ht();
      Oe(() => it(M, o(f))), w(D, M);
    };
    ee(x, (D) => {
      o(f) == null ? D(H) : D(W, !1);
    });
  }
  return xe(C, (D) => u = D, () => u), Ne(C, (D, M) => q == null ? void 0 : q(D, M), n), w(t, C), Te(T);
}
let Vp = 0;
var Gp = /* @__PURE__ */ se("<input/>"), jp = /* @__PURE__ */ se('<span class="mdc-select__ripple"></span>'), qp = /* @__PURE__ */ se('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function zp(t, e) {
  Ce(e, !0);
  const n = () => zn(Ge, "$selectedTextStore", r), [r, i] = ur();
  let a = () => {
  };
  function s(O) {
    return O === a;
  }
  let c = g(e, "use", 19, () => []), u = g(e, "class", 3, ""), l = g(e, "style", 3, ""), d = g(e, "ripple", 3, !0), h = g(e, "disabled", 3, !1), f = g(e, "variant", 3, "standard"), m = g(e, "noLabel", 3, !1), v = g(e, "label", 3, void 0), p = g(e, "value", 15), b = g(e, "key", 3, (O) => O), y = g(e, "dirty", 15, !1), E = g(e, "invalid", 15, a), A = g(e, "updateInvalid", 19, () => s(E())), _ = g(e, "required", 3, !1), I = g(e, "inputId", 19, () => "SMUI-select-" + Vp++), S = g(e, "hiddenInput", 3, !1), T = g(e, "withLeadingIcon", 3, a), C = g(e, "anchor$use", 19, () => []), x = g(e, "anchor$class", 3, ""), H = g(e, "selectedTextContainer$use", 19, () => []), W = g(e, "selectedTextContainer$class", 3, ""), D = g(e, "selectedText$use", 19, () => []), M = g(e, "selectedText$class", 3, ""), te = g(e, "dropdownIcon$use", 19, () => []), N = g(e, "dropdownIcon$class", 3, ""), k = g(e, "menu$class", 3, ""), U = /* @__PURE__ */ Xe(e, [
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
  let Q, P = /* @__PURE__ */ pe(void 0), L = _e({}), B = _e({}), Ee, Ie = _e({}), ue = /* @__PURE__ */ pe(-1);
  const Se = /* @__PURE__ */ ge(() => U.menu$id ?? I() + "-menu");
  let V = /* @__PURE__ */ pe(void 0), ie = he("SMUI:addLayoutListener"), K, oe = /* @__PURE__ */ pe(!1), we = _e({}), j = /* @__PURE__ */ pe(void 0), ne = /* @__PURE__ */ pe(void 0), Re = /* @__PURE__ */ pe(!1), ye, Fe = he("SMUI:select:context"), $e, vt, R, F, de;
  re("SMUI:list:role", ""), re("SMUI:list:nav", !1);
  const Ge = Jt("");
  re("SMUI:select:selectedText", Ge);
  const Ot = Jt(p());
  Le(() => {
    ni(Ot, p());
  }), re("SMUI:select:value", Ot), Le(() => {
    o(P) && o(P).getValue() !== b()(p()) && o(P).setValue(b()(p()));
  });
  let Rt = o(ue);
  Le(() => {
    if (Rt !== o(ue))
      if (Rt = o(ue), o(P))
        o(P).setSelectedIndex(
          o(ue),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const O = kt();
        p() !== O[o(ue)] && p(O[o(ue)]);
      }
  }), Le(() => {
    o(P) && o(P).getDisabled() !== h() && o(P).setDisabled(h());
  }), Le(() => {
    o(P) && y() && o(P).isValid() !== !E() && (A() ? E(!o(P).isValid()) : o(P).setValid(!E()));
  }), Le(() => {
    o(P) && o(P).getRequired() !== _() && o(P).setRequired(_());
  }), ie && (K = ie(fi)), re("SMUI:select:leading-icon:mount", (O) => {
    $e = O;
  }), re("SMUI:select:leading-icon:unmount", () => {
    $e = void 0;
  }), re("SMUI:list:mount", (O) => {
    ye = O;
  }), re("SMUI:select:helper-text:id", (O) => {
    z(V, O, !0);
  }), re("SMUI:select:helper-text:mount", (O) => {
    vt = O;
  }), re("SMUI:select:helper-text:unmount", () => {
    z(V, void 0), vt = void 0;
  }), st(() => (z(
    P,
    new wp(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (O) => {
          ni(Ge, O);
        },
        isSelectAnchorFocused: () => document.activeElement === Ee,
        getSelectAnchorAttr: ot,
        setSelectAnchorAttr: nt,
        removeSelectAnchorAttr: Et,
        addMenuClass: Y,
        removeMenuClass: Me,
        openMenu: () => {
          z(oe, !0);
        },
        closeMenu: () => {
          z(oe, !1);
        },
        getAnchorElement: () => Ee,
        setMenuAnchorElement: (O) => {
          z(j, O, !0);
        },
        setMenuAnchorCorner: (O) => {
          z(ne, O, !0);
        },
        setMenuWrapFocus: (O) => {
          z(Re, O, !0);
        },
        getSelectedIndex: () => o(ue),
        setSelectedIndex: (O) => {
          Rt = O, z(ue, O, !0), p(kt()[o(ue)]);
        },
        focusMenuItemAtIndex: (O) => {
          ye.focusItemAtIndex(O);
        },
        getMenuItemCount: () => ye.items.length,
        getMenuItemValues: () => kt().map(b()),
        getMenuItemTextAtIndex: (O) => ye.getPrimaryTextAtIndex(O),
        isTypeaheadInProgress: () => ye.typeaheadInProgress,
        typeaheadMatchItem: (O, le) => ye.typeaheadMatchItem(O, le),
        // getCommonAdapterMethods
        addClass: ve,
        removeClass: ce,
        hasClass: Ln,
        setRippleCenter: (O) => F && F.setRippleCenter(O),
        activateBottomLine: () => F && F.activate(),
        deactivateBottomLine: () => F && F.deactivate(),
        notifyChange: (O) => {
          var le;
          y(!0), A() && E(!((le = o(P)) != null && le.isValid())), Ze(Un(), "SMUISelectChange", { value: p(), index: o(ue) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!de,
        notchOutline: (O) => de && de.notch(O),
        closeOutline: () => de && de.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!R,
        floatLabel: (O) => R && R.float(O),
        getLabelWidth: () => R ? R.getWidth() : 0,
        setLabelRequired: (O) => R && R.setRequired(O)
      },
      {
        get helperText() {
          return vt;
        },
        get leadingIcon() {
          return $e;
        }
      }
    ),
    !0
  ), z(ue, kt().indexOf(p()), !0), o(P).init(), Mt(X), () => {
    var O;
    (O = o(P)) == null || O.destroy();
  })), Tn(() => {
    K && K();
  });
  function Ln(O) {
    return O in L ? L[O] : Un().classList.contains(O);
  }
  function ve(O) {
    L[O] || (L[O] = !0);
  }
  function ce(O) {
    (!(O in L) || L[O]) && (L[O] = !1);
  }
  function G(O, le) {
    B[O] != le && (le === "" || le == null ? delete B[O] : B[O] = le);
  }
  function Y(O) {
    we[O] || (we[O] = !0);
  }
  function Me(O) {
    (!(O in we) || we[O]) && (we[O] = !1);
  }
  function ot(O) {
    return O in Ie ? Ie[O] ?? null : Un().getAttribute(O);
  }
  function nt(O, le) {
    Ie[O] !== le && (Ie[O] = le);
  }
  function Et(O) {
    (!(O in Ie) || Ie[O] != null) && (Ie[O] = void 0);
  }
  function kt() {
    return ye.getOrderedList().map((O) => O.getValue());
  }
  function cr(O) {
    const le = O.currentTarget.getBoundingClientRect();
    return (ut(O) ? O.touches[0].clientX : O.clientX) - le.left;
  }
  function ut(O) {
    return "touches" in O;
  }
  function dt() {
    if (o(P) == null)
      throw new Error("Instance is undefined.");
    return o(P).getUseDefaultValidation();
  }
  function Mt(O) {
    var le;
    (le = o(P)) == null || le.setUseDefaultValidation(O);
  }
  function Nn() {
    Ee.focus();
  }
  function fi() {
    var O;
    (O = o(P)) == null || O.layout();
  }
  function Un() {
    return Q;
  }
  var Pe = {
    getUseDefaultValidation: dt,
    setUseDefaultValidation: Mt,
    focus: Nn,
    layout: fi,
    getElement: Un
  }, et = qp(), Ye = Z(et);
  qe(Ye, (O, le, lt) => ({ class: O, style: le, ...lt }), [
    () => Be({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": m() || v() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": o(oe),
      "mdc-data-table__pagination-rows-per-page-select": Fe === "data-table:pagination",
      ...L,
      [u()]: !0
    }),
    () => Object.entries(B).map(([O, le]) => `${O}: ${le};`).concat([l()]).join(" "),
    () => ji(U, [
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
  var Ct = ae(Ye);
  {
    var dn = (O) => {
      var le = Gp();
      qe(
        le,
        (lt) => ({
          type: "hidden",
          required: _(),
          disabled: h(),
          value: p(),
          ...lt
        }),
        [() => ht(U, "input$")],
        void 0,
        void 0,
        !0
      ), w(O, le);
    };
    ee(Ct, (O) => {
      S() && O(dn);
    });
  }
  var We = be(Ct, 2), mt = (O) => {
    var le;
    Ee.focus(), o(P) && o(P).handleClick(cr(O)), (le = e.anchor$onclick) == null || le.call(e, O);
  }, At = (O) => {
    var le;
    o(P) && o(P).handleKeydown(O), (le = e.onkeydown) == null || le.call(e, O);
  }, Ke = (O) => {
    var le;
    o(P) && o(P).handleBlur(), Ze(Un(), "blur", O), (le = e.anchor$onblur) == null || le.call(e, O);
  }, St = (O) => {
    var le;
    o(P) && o(P).handleFocus(), Ze(Un(), "focus", O), (le = e.anchor$onfocus) == null || le.call(e, O);
  };
  qe(
    We,
    (O, le) => ({
      class: O,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(Se),
      "aria-expanded": o(oe) ? "true" : "false",
      "aria-describedby": o(V),
      role: "combobox",
      tabindex: "0",
      ...Ie,
      ...le,
      onclick: mt,
      onkeydown: At,
      onblur: Ke,
      onfocus: St
    }),
    [
      () => Be({ "mdc-select__anchor": !0, [x()]: !0 }),
      () => ht(U, "anchor$")
    ]
  );
  var Bt = ae(We);
  {
    var zt = (O) => {
      var le = jp();
      w(O, le);
    };
    ee(Bt, (O) => {
      f() === "filled" && O(zt);
    });
  }
  var bt = be(Bt, 2);
  {
    var Tt = (O) => {
      {
        let le = /* @__PURE__ */ ge(() => I() + "-smui-label"), lt = /* @__PURE__ */ ge(() => n() !== ""), xt = /* @__PURE__ */ ge(() => ht(U, "label$"));
        xe(
          ds(O, at(
            {
              get id() {
                return o(le);
              },
              get floatAbove() {
                return o(lt);
              },
              get required() {
                return _();
              }
            },
            () => o(xt),
            {
              children: (Jn, $n) => {
                var ea = $(), hi = Z(ea);
                {
                  var Hr = (Nr) => {
                  }, Ds = (Nr) => {
                    var Ha = $(), ta = Z(Ha);
                    {
                      var Qo = (fr) => {
                        var Ur = Ht();
                        Oe(() => it(Ur, v())), w(fr, Ur);
                      }, Na = (fr) => {
                        var Ur = $(), Ps = Z(Ur);
                        Ae(Ps, v), w(fr, Ur);
                      };
                      ee(
                        ta,
                        (fr) => {
                          typeof v() == "string" ? fr(Qo) : fr(Na, !1);
                        },
                        !0
                      );
                    }
                    w(Nr, Ha);
                  };
                  ee(hi, (Nr) => {
                    v() == null ? Nr(Hr) : Nr(Ds, !1);
                  });
                }
                w(Jn, ea);
              },
              $$slots: { default: !0 }
            }
          )),
          (Jn) => R = Jn,
          () => R
        );
      }
    };
    ee(bt, (O) => {
      f() !== "outlined" && !m() && v() != null && O(Tt);
    });
  }
  var an = be(bt, 2);
  {
    var pt = (O) => {
      {
        let le = /* @__PURE__ */ ge(() => m() || v() == null), lt = /* @__PURE__ */ ge(() => ht(U, "outline$"));
        xe(
          Vc(O, at(
            {
              get noLabel() {
                return o(le);
              }
            },
            () => o(lt),
            {
              children: (xt, Jn) => {
                var $n = $(), ea = Z($n);
                {
                  var hi = (Hr) => {
                    {
                      let Ds = /* @__PURE__ */ ge(() => I() + "-smui-label"), Nr = /* @__PURE__ */ ge(() => n() !== ""), Ha = /* @__PURE__ */ ge(() => ht(U, "label$"));
                      xe(
                        ds(Hr, at(
                          {
                            get id() {
                              return o(Ds);
                            },
                            get floatAbove() {
                              return o(Nr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => o(Ha),
                          {
                            children: (ta, Qo) => {
                              var Na = $(), fr = Z(Na);
                              {
                                var Ur = (na) => {
                                }, Ps = (na) => {
                                  var Jo = $(), _d = Z(Jo);
                                  {
                                    var yd = (vi) => {
                                      var ra = Ht();
                                      Oe(() => it(ra, v())), w(vi, ra);
                                    }, Id = (vi) => {
                                      var ra = $(), Ed = Z(ra);
                                      Ae(Ed, v), w(vi, ra);
                                    };
                                    ee(
                                      _d,
                                      (vi) => {
                                        typeof v() == "string" ? vi(yd) : vi(Id, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(na, Jo);
                                };
                                ee(fr, (na) => {
                                  v() == null ? na(Ur) : na(Ps, !1);
                                });
                              }
                              w(ta, Na);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ta) => R = ta,
                        () => R
                      );
                    }
                  };
                  ee(ea, (Hr) => {
                    !m() && v() != null && Hr(hi);
                  });
                }
                w(xt, $n);
              },
              $$slots: { default: !0 }
            }
          )),
          (xt) => de = xt,
          () => de
        );
      }
    };
    ee(an, (O) => {
      f() === "outlined" && O(pt);
    });
  }
  var Dr = be(an, 2);
  Ae(Dr, () => e.leadingIcon ?? me);
  var pn = be(Dr, 2);
  qe(pn, (O, le) => ({ class: O, ...le }), [
    () => Be({
      "mdc-select__selected-text-container": !0,
      [W()]: !0
    }),
    () => ht(U, "selectedTextContainer$")
  ]);
  var dr = ae(pn);
  qe(
    dr,
    (O, le) => ({
      id: I() + "-smui-selected-text",
      class: O,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": I() + "-smui-label",
      ...le
    }),
    [
      () => Be({
        "mdc-select__selected-text": !0,
        [M()]: !0
      }),
      () => ht(U, "selectedText$")
    ]
  );
  var $i = ae(dr);
  Ne(dr, (O, le) => q == null ? void 0 : q(O, le), D), Ne(pn, (O, le) => q == null ? void 0 : q(O, le), H);
  var gn = be(pn, 2);
  qe(gn, (O, le) => ({ class: O, ...le }), [
    () => Be({
      "mdc-select__dropdown-icon": !0,
      [N()]: !0
    }),
    () => ht(U, "dropdownIcon$")
  ]), Ne(gn, (O, le) => q == null ? void 0 : q(O, le), te);
  var Qn = be(gn, 2);
  {
    var kn = (O) => {
      {
        let le = /* @__PURE__ */ ge(() => ht(U, "ripple$"));
        xe(Fc(O, at(() => o(le))), (lt) => F = lt, () => F);
      }
    };
    ee(Qn, (O) => {
      f() !== "outlined" && d() && O(kn);
    });
  }
  xe(We, (O) => Ee = O, () => Ee), Ne(We, (O, le) => q == null ? void 0 : q(O, le), C);
  var Pr = be(We, 2);
  {
    let O = /* @__PURE__ */ ge(() => Be({
      "mdc-select__menu": !0,
      ...we,
      [k()]: !0
    })), le = /* @__PURE__ */ ge(() => ht(U, "menu$"));
    Mp(Pr, at(
      {
        get class() {
          return o(O);
        },
        get id() {
          return o(Se);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(j);
        },
        get anchorCorner() {
          return o(ne);
        }
      },
      () => o(le),
      {
        onSMUIMenuSelected: (lt) => {
          var xt;
          o(P) && o(P).handleMenuItemAction(lt.detail.index), (xt = e.onSMUIMenuSelected) == null || xt.call(e, lt);
        },
        onSMUIMenuSurfaceClosing: (lt) => {
          var xt;
          o(P) && o(P).handleMenuClosing(), (xt = e.onSMUIMenuSurfaceClosing) == null || xt.call(e, lt);
        },
        onSMUIMenuSurfaceClosed: (lt) => {
          var xt;
          o(P) && o(P).handleMenuClosed(), (xt = e.onSMUIMenuSurfaceClosed) == null || xt.call(e, lt);
        },
        onSMUIMenuSurfaceOpened: (lt) => {
          var xt;
          o(P) && o(P).handleMenuOpened(), (xt = e.onSMUIMenuSurfaceOpened) == null || xt.call(e, lt);
        },
        get open() {
          return o(oe);
        },
        set open(lt) {
          z(oe, lt, !0);
        },
        children: (lt, xt) => {
          {
            let Jn = /* @__PURE__ */ ge(() => ht(U, "list$"));
            Dp(lt, at(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Re);
                }
              },
              () => o(Jn),
              {
                get selectedIndex() {
                  return o(ue);
                },
                set selectedIndex($n) {
                  z(ue, $n, !0);
                },
                children: ($n, ea) => {
                  var hi = $(), Hr = Z(hi);
                  Ae(Hr, () => e.children ?? me), w($n, hi);
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
  xe(Ye, (O) => Q = O, () => Q), Ne(Ye, (O, le) => Kt == null ? void 0 : Kt(O, le), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ve,
    removeClass: ce,
    addStyle: G
  })), Ne(Ye, (O, le) => Ks == null ? void 0 : Ks(O, le), () => ({ addClass: ve, removeClass: ce })), Ne(Ye, (O, le) => q == null ? void 0 : q(O, le), c);
  var Ms = be(Ye, 2);
  {
    var gd = (O) => {
      {
        let le = /* @__PURE__ */ ge(() => ht(U, "helperText$"));
        Fp(O, at(() => o(le), {
          children: (lt, xt) => {
            var Jn = $(), $n = Z(Jn);
            Ae($n, () => e.helperText ?? me), w(lt, Jn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ee(Ms, (O) => {
      e.helperText && O(gd);
    });
  }
  Oe(() => it($i, n())), w(t, et);
  var bd = Te(Pe);
  return i(), bd;
}
function Wp(t, e) {
  Ce(e, !0);
  const n = () => zn(d, "$selectedValue", r), [r, i] = ur();
  let a = g(e, "use", 19, () => []);
  g(e, "class", 3, "");
  let s = g(e, "value", 3, ""), c = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), u;
  const l = he("SMUI:select:selectedText"), d = he("SMUI:select:value");
  re("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ ge(() => s() != null && s() !== "" && n() === s());
  st(f), Tn(f);
  function f() {
    o(h) && u && ni(l, u.getPrimaryText());
  }
  function m() {
    return u.getElement();
  }
  var v = { getElement: m };
  xe(
    Up(t, at(
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
      () => c,
      {
        children: (b, y) => {
          var E = $(), A = Z(E);
          Ae(A, () => e.children ?? me), w(b, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => u = b,
    () => u
  );
  var p = Te(v);
  return i(), p;
}
function Xp(t, e) {
  Ce(e, !0);
  let n = g(e, "data", 19, () => []);
  g(e, "placeholder", 3, "");
  let r = g(e, "label", 3, "");
  g(e, "description", 3, "");
  let i = g(e, "value", 15), a = g(e, "required", 3, !1);
  g(e, "size", 3, "sm");
  let s = g(e, "variant", 3, "standard"), c = g(e, "selectedOptionIndex", 31, () => -1), u = g(e, "disabled", 3, !1);
  function l(d) {
    return () => c(d);
  }
  zp(t, {
    get disabled() {
      return u();
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
      var f = $(), m = Z(f);
      Dn(m, 17, n, Ei, (v, p, b) => {
        {
          let y = /* @__PURE__ */ ge(() => l(b));
          Wp(v, {
            get onclick() {
              return o(y);
            },
            get value() {
              return o(p).value;
            },
            children: (E, A) => {
              var _ = Ht();
              Oe(() => it(_, o(p).label)), w(E, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(d, f);
    },
    $$slots: { default: !0 }
  }), Te();
}
const Kp = Jt([]);
Kp.subscribe;
_e({ freeze: !1 });
var Zp = /* @__PURE__ */ se("<div><!></div>");
function Yp(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "variant", 3, "raised"), a = g(e, "square", 3, !1), s = g(e, "color", 3, "default"), c = g(e, "elevation", 3, 1), u = g(e, "transition", 3, !1), l = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "variant",
    "square",
    "color",
    "elevation",
    "transition",
    "children"
  ]), d;
  function h() {
    return d;
  }
  var f = { getElement: h }, m = Zp();
  qe(m, (p) => ({ class: p, ...l }), [
    () => Be({
      "smui-paper": !0,
      "smui-paper--raised": i() === "raised",
      "smui-paper--unelevated": i() === "unelevated",
      "smui-paper--outlined": i() === "outlined",
      ["smui-paper--elevation-z" + c()]: c() !== 0 && i() === "raised",
      "smui-paper--rounded": !a(),
      ["smui-paper--color-" + s()]: s() !== "default",
      "smui-paper-transition": u(),
      [r()]: !0
    })
  ]);
  var v = ae(m);
  return Ae(v, () => e.children ?? me), xe(m, (p) => d = p, () => d), Ne(m, (p, b) => q == null ? void 0 : q(p, b), n), w(t, m), Te(f);
}
const Dt = [];
for (let t = 0; t < 256; ++t)
  Dt.push((t + 256).toString(16).slice(1));
function Qp(t, e = 0) {
  return (Dt[t[e + 0]] + Dt[t[e + 1]] + Dt[t[e + 2]] + Dt[t[e + 3]] + "-" + Dt[t[e + 4]] + Dt[t[e + 5]] + "-" + Dt[t[e + 6]] + Dt[t[e + 7]] + "-" + Dt[t[e + 8]] + Dt[t[e + 9]] + "-" + Dt[t[e + 10]] + Dt[t[e + 11]] + Dt[t[e + 12]] + Dt[t[e + 13]] + Dt[t[e + 14]] + Dt[t[e + 15]]).toLowerCase();
}
let Zs;
const Jp = new Uint8Array(16);
function $p() {
  if (!Zs) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Zs = crypto.getRandomValues.bind(crypto);
  }
  return Zs(Jp);
}
const eg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Kl = { randomUUID: eg };
function Gr(t, e, n) {
  var i;
  if (Kl.randomUUID && !e && !t)
    return Kl.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? $p();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return Qp(r);
}
var tg = /* @__PURE__ */ se('<span class="oscd-icon"><!></span>');
function Zn(t, e) {
  var n = tg(), r = ae(n);
  Ae(r, () => e.children ?? me), w(t, n);
}
var ng = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function rg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = ng();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var ig = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function zc(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = ig();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var ag = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function sg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = ag();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var og = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function lg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = og();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var ug = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function cg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = ug();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var dg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function fg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = dg();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var hg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function vg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = hg();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var mg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function pg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = mg();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
Kd();
var gg = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function bg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zn(t, {
    children: (r, i) => {
      var a = gg();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
var _g = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function yg(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Zn(t, {
    children: (r, i) => {
      var a = _g();
      Oe(() => Ut(a, n())), w(r, a);
    }
  });
}
function Ig(t, e) {
  e(t.target.value);
}
var Eg = /* @__PURE__ */ se('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Ag(t, e) {
  Ce(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = Eg(), a = ae(i);
  a.__change = [Ig, r];
  var s = be(a, 2), c = ae(s);
  Oe(() => it(c, n())), ba(a, r), w(t, i), Te();
}
Cn(["change"]);
function Sg(t, e) {
  e(t.target.value);
}
var xg = /* @__PURE__ */ se('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Cg(t, e) {
  Ce(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = xg(), a = ae(i);
  a.__change = [Sg, r];
  var s = be(a, 2), c = ae(s);
  Oe(() => it(c, n())), ba(a, r), w(t, i), Te();
}
Cn(["change"]);
var Tg = /* @__PURE__ */ se('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function Wc(t, e) {
  Ce(e, !0);
  let n = g(e, "title", 3, ""), r = g(e, "open", 11, !1);
  Yp(t, {
    children: (i, a) => {
      var s = Tg(), c = ae(s), u = ae(c), l = be(c, 2), d = ae(l);
      Ae(d, () => e.content ?? me), Oe(() => {
        s.open = r(), it(u, n());
      }), w(i, s);
    },
    $$slots: { default: !0 }
  }), Te();
}
function wg(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Lg = /* @__PURE__ */ se('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function fs(t, e) {
  Ce(e, !0);
  let n = g(e, "content", 3, ""), r = g(e, "side", 3, "top"), i = g(e, "hoverDelay", 3, 0), a = g(e, "transitionDuration", 3, 80), s = g(e, "disabled", 3, !1);
  const c = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ pe(null), l = /* @__PURE__ */ pe(null), d = /* @__PURE__ */ pe(null), h = /* @__PURE__ */ pe(null), f = /* @__PURE__ */ pe(!1), m = /* @__PURE__ */ pe(null), v = /* @__PURE__ */ pe(null);
  function p() {
    !n() || s() || (o(m) && clearTimeout(o(m)), i() > 0 ? z(m, setTimeout(() => z(f, !0), i()), !0) : z(f, !0));
  }
  function b() {
    o(m) && clearTimeout(o(m)), z(f, !1);
  }
  function y() {
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
  function I() {
    if (!o(l) || !o(h) || !o(u) || s()) return;
    const x = o(u).getBoundingClientRect(), H = o(h).getBoundingClientRect();
    let W = 0, D = 0;
    const M = 8;
    switch (r()) {
      case "top":
        W = x.top - H.height - M, D = x.left + x.width / 2 - H.width / 2;
        break;
      case "bottom":
        W = x.bottom + M, D = x.left + x.width / 2 - H.width / 2;
        break;
      case "left":
        W = x.top + x.height / 2 - H.height / 2, D = x.left - H.width - M;
        break;
      case "right":
        W = x.top + x.height / 2 - H.height / 2, D = x.right + M;
        break;
    }
    o(l).style.top = `${W + window.scrollY}px`, o(l).style.left = `${D + window.scrollX}px`;
  }
  function S() {
    var x;
    (x = o(v)) == null || x.disconnect(), z(v, null), o(l) && o(l).parentNode && o(l).parentNode.removeChild(o(l)), z(l, null), z(h, null), z(d, null), o(m) && clearTimeout(o(m));
  }
  Tn(S), Le(() => {
    if (!(!o(f) || !n() || s())) {
      if (!o(l)) {
        z(l, document.createElement("div"), !0), o(l).style.position = "absolute", o(l).style.zIndex = "9999", o(l).style.pointerEvents = "none", o(l).style.opacity = "0", o(l).style.transition = `opacity ${a()}ms ease`, o(l).id = c, o(l).setAttribute("role", "tooltip"), document.body.appendChild(o(l)), z(d, o(l).attachShadow({ mode: "open" }), !0);
        const x = document.createElement("style");
        x.textContent = `
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
      `, o(d).appendChild(x), z(h, document.createElement("div"), !0), o(d).appendChild(o(h)), z(
          v,
          new MutationObserver(() => {
            o(f) && I();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = n()), o(l) && (o(l).style.opacity = "1", I());
    }
  }), Le(() => {
    if (o(f) || !o(l))
      return;
    o(l).style.opacity = "0";
    const x = o(l), H = setTimeout(
      () => {
        x && x.parentNode && x.parentNode.removeChild(x), o(l) === x && S();
      },
      a()
    );
    return () => clearTimeout(H);
  });
  var T = Lg();
  T.__keydown = [wg, n, p, b];
  var C = ae(T);
  Ae(C, () => e.children ?? me), xe(T, (x) => z(u, x), () => o(u)), Oe(() => {
    Ar(T, "aria-describedby", n() && !s() ? c : void 0), Ar(T, "aria-haspopup", n() ? "true" : void 0), Ar(T, "aria-expanded", n() ? o(f) ? "true" : "false" : void 0);
  }), da("mouseenter", T, y), da("mouseleave", T, E), da("focus", T, A), da("blur", T, _), w(t, T), Te();
}
Cn(["keydown"]);
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
}, bn = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_CHECKED_INDETERMINATE_VALUE: "mixed",
  DATA_INDETERMINATE_ATTR: "data-indeterminate",
  NATIVE_CONTROL_SELECTOR: ".mdc-checkbox__native-control",
  TRANSITION_STATE_CHECKED: "checked",
  TRANSITION_STATE_INDETERMINATE: "indeterminate",
  TRANSITION_STATE_INIT: "init",
  TRANSITION_STATE_UNCHECKED: "unchecked"
}, Zl = {
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
var Og = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = bn.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return la;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return bn;
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
      }, Zl.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = bn.TRANSITION_STATE_UNCHECKED, a = la.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = bn.TRANSITION_STATE_INDETERMINATE, r = bn.TRANSITION_STATE_CHECKED, i = bn.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = bn.TRANSITION_STATE_INIT, a = bn.TRANSITION_STATE_CHECKED, s = bn.TRANSITION_STATE_UNCHECKED, c = e.cssClasses, u = c.ANIM_UNCHECKED_CHECKED, l = c.ANIM_UNCHECKED_INDETERMINATE, d = c.ANIM_CHECKED_UNCHECKED, h = c.ANIM_CHECKED_INDETERMINATE, f = c.ANIM_INDETERMINATE_CHECKED, m = c.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === s ? "" : r === a ? f : m;
        case s:
          return r === a ? u : l;
        case a:
          return r === s ? d : h;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(bn.ARIA_CHECKED_ATTR, bn.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(bn.ARIA_CHECKED_ATTR);
    }, e;
  }(qt)
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
var fn = {
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
var Rg = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fn;
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
      this.determinate = !this.adapter.hasClass(fn.INDETERMINATE_CLASS), this.adapter.addClass(fn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var s = Lt(r), c = s.next(); !c.done; c = s.next()) {
              var u = c.value;
              u.contentRect && n.calculateAndSetDimensions(u.contentRect.width);
            }
          } catch (l) {
            i = { error: l };
          } finally {
            try {
              c && !c.done && (a = s.return) && a.call(s);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(fn.INDETERMINATE_CLASS), this.adapter.setAttribute(On.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(On.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(On.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(fn.INDETERMINATE_CLASS), this.adapter.removeAttribute(On.ARIA_VALUENOW), this.adapter.removeAttribute(On.ARIA_VALUEMAX), this.adapter.removeAttribute(On.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
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
      this.adapter.removeClass(fn.CLOSED_CLASS), this.adapter.removeClass(fn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(On.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(fn.CLOSED_CLASS), this.adapter.setAttribute(On.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(fn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(fn.CLOSED_CLASS) && this.adapter.addClass(fn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(fn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(fn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? xp(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(On.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ua.PRIMARY_HALF, i = n * ua.PRIMARY_FULL, a = n * ua.SECONDARY_QUARTER, s = n * ua.SECONDARY_HALF, c = n * ua.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", c + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -c + "px"), this.restartAnimation();
    }, e;
  }(qt)
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
var rr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Yl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Vr = {
  ARIA_SELECTED: Yl.ARIA_SELECTED,
  ARIA_SORT: Yl.ARIA_SORT
}, vn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(vn || (vn = {}));
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
var Mg = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
      return fc(this, void 0, void 0, function() {
        return Fo(this, function(n) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, rr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, rr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, Vr.ARIA_SORT, vn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, vn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, rr.HEADER_CELL_SORTED);
      var c = this.adapter.getAttributeByHeaderCellIndex(i, Vr.ARIA_SORT), u = vn.NONE;
      c === vn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, rr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Vr.ARIA_SORT, vn.DESCENDING), u = vn.DESCENDING) : c === vn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, rr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Vr.ARIA_SORT, vn.ASCENDING), u = vn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Vr.ARIA_SORT, vn.ASCENDING), u = vn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, u), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: i,
        headerCell: a,
        sortValue: u
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
      }), this.adapter.addClass(rr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(rr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, rr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Vr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, rr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Vr.ARIA_SELECTED, "false"));
    }, e;
  }(qt)
), Dg = /* @__PURE__ */ se('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Pg = /* @__PURE__ */ se("<div><div><table><!></table></div> <!> <!></div>");
function Hg(t, e) {
  Ce(e, !0);
  const n = () => zn(M, "$progressClosed", r), [r, i] = ur(), { closest: a } = Ls;
  let s = g(e, "use", 19, () => []), c = g(e, "class", 3, ""), u = g(e, "stickyHeader", 3, !1), l = g(e, "sortable", 3, !1), d = g(e, "sort", 15, null), h = g(e, "sortDirection", 15, "ascending"), f = g(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = g(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = g(e, "container$use", 19, () => []), p = g(e, "container$class", 3, ""), b = g(e, "table$use", 19, () => []), y = g(e, "table$class", 3, ""), E = /* @__PURE__ */ Xe(e, [
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
  ]), A, _ = /* @__PURE__ */ pe(void 0), I, S = /* @__PURE__ */ pe(void 0), T = /* @__PURE__ */ pe(void 0), C = _e({}), x = /* @__PURE__ */ pe(_e({ height: "auto", top: "initial" })), H = he("SMUI:addLayoutListener"), W, D = !1, M = Jt(!1), te = Jt(d());
  Le(() => {
    ni(te, d());
  });
  let N = Jt(h());
  Le(() => {
    ni(N, h());
  }), re("SMUI:checkbox:context", "data-table"), re("SMUI:linear-progress:context", "data-table"), re("SMUI:linear-progress:closed", M), re("SMUI:data-table:sortable", l()), re("SMUI:data-table:sort", te), re("SMUI:data-table:sortDirection", N), re("SMUI:data-table:sortAscendingAriaLabel", f()), re("SMUI:data-table:sortDescendingAriaLabel", m()), H && (W = H(Ie));
  let k;
  Le(() => {
    e.progress && o(_) && k !== n() && (k = n(), n() ? o(_).hideProgress() : o(_).showProgress());
  }), re("SMUI:checkbox:mount", () => {
    o(_) && D && o(_).layout();
  }), re("SMUI:data-table:header:mount", (R) => {
    z(S, R, !0);
  }), re("SMUI:data-table:header:unmount", () => {
    z(S, void 0);
  }), re("SMUI:data-table:body:mount", (R) => {
    z(T, R, !0);
  }), re("SMUI:data-table:body:unmount", () => {
    z(T, void 0);
  }), st(() => (z(
    _,
    new Mg({
      addClass: X,
      removeClass: Q,
      getHeaderCellElements: () => {
        var R;
        return ((R = o(S)) == null ? void 0 : R.cells.map((F) => F.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var R;
        return ((R = o(S)) == null ? void 0 : R.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (R, F) => {
        var de;
        return ((de = o(S)) == null ? void 0 : de.orderedCells[R].getAttr(F)) ?? null;
      },
      setAttributeByHeaderCellIndex: (R, F, de) => {
        var Ge;
        (Ge = o(S)) == null || Ge.orderedCells[R].addAttr(F, de);
      },
      setClassNameByHeaderCellIndex: (R, F) => {
        var de;
        (de = o(S)) == null || de.orderedCells[R].addClass(F);
      },
      removeClassNameByHeaderCellIndex: (R, F) => {
        var de;
        (de = o(S)) == null || de.orderedCells[R].removeClass(F);
      },
      notifySortAction: (R) => {
        d(R.columnId), h(R.sortValue), Ze(ue(), "SMUIDataTableSorted", R);
      },
      getTableContainerHeight: () => I.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const R = ue().querySelector(".mdc-data-table__header-row");
        if (!R)
          throw new Error("MDCDataTable: Table header element not found.");
        return R.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (R) => {
        z(x, R, !0);
      },
      addClassAtRowIndex: (R, F) => {
        var de;
        (de = o(T)) == null || de.orderedRows[R].addClass(F);
      },
      getRowCount: () => {
        var R;
        return ((R = o(T)) == null ? void 0 : R.rows.length) ?? 0;
      },
      getRowElements: () => {
        var R;
        return ((R = o(T)) == null ? void 0 : R.rows.map((F) => F.element)) ?? [];
      },
      getRowIdAtIndex: (R) => {
        var F;
        return ((F = o(T)) == null ? void 0 : F.orderedRows[R].rowId) ?? null;
      },
      getRowIndexByChildElement: (R) => {
        var F;
        return ((F = o(T)) == null ? void 0 : F.orderedRows.map((de) => de.element).indexOf(a(R, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var R;
        return ((R = o(T)) == null ? void 0 : R.rows.filter((F) => F.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (R) => {
        var de;
        const F = (de = o(T)) == null ? void 0 : de.orderedRows[R].checkbox;
        return F ? F.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var F;
        const R = (F = o(S)) == null ? void 0 : F.checkbox;
        return R ? R.checked : !1;
      },
      isRowsSelectable: () => !!ue().querySelector(".mdc-data-table__row-checkbox") || !!ue().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (R) => {
        var de;
        const F = (de = o(T)) == null ? void 0 : de.orderedRows[R.rowIndex];
        F && Ze(ue(), "SMUIDataTableSelectionChanged", {
          row: F.element,
          rowId: F.rowId,
          rowIndex: R.rowIndex,
          selected: R.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), Ze(ue(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), Ze(ue(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (R) => Ze(ue(), "SMUIDataTableClickRow", R),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (R, F) => {
        var de;
        (de = o(T)) == null || de.orderedRows[R].removeClass(F);
      },
      setAttributeAtRowIndex: (R, F, de) => {
        var Ge;
        (Ge = o(T)) == null || Ge.orderedRows[R].addAttr(F, de);
      },
      setHeaderRowCheckboxChecked: (R) => {
        var de;
        const F = (de = o(S)) == null ? void 0 : de.checkbox;
        F && (F.checked = R);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (R, F) => {
        var Ge;
        const de = (Ge = o(T)) == null ? void 0 : Ge.orderedRows[R].checkbox;
        de && (de.checked = F);
      },
      setSortStatusLabelByHeaderCellIndex: (R, F) => {
      }
    }),
    !0
  ), o(_).init(), o(_).layout(), D = !0, () => {
    var R;
    (R = o(_)) == null || R.destroy();
  })), Tn(() => {
    W && W();
  });
  function U(R) {
    o(_) && o(_).handleRowCheckboxChange(R);
  }
  function X(R) {
    C[R] || (C[R] = !0);
  }
  function Q(R) {
    (!(R in C) || C[R]) && (C[R] = !1);
  }
  function P(R) {
    var de;
    const F = (de = o(S)) == null ? void 0 : de.checkbox;
    F && (F.indeterminate = R);
  }
  function L(R) {
    if (!o(_) || !R.detail.target)
      return;
    const F = a(R.detail.target, ".mdc-data-table__header-cell--with-sort");
    F && Ee(F);
  }
  function B(R) {
    if (!o(_) || !R.detail.target)
      return;
    const F = a(R.detail.target, ".mdc-data-table__row");
    F && o(_) && o(_).handleRowClick({ rowId: R.detail.rowId, row: F });
  }
  function Ee(R) {
    var Ot, Rt;
    const F = ((Ot = o(S)) == null ? void 0 : Ot.orderedCells) ?? [], de = F.map((Ln) => Ln.element).indexOf(R);
    if (de === -1)
      return;
    const Ge = F[de].columnId ?? null;
    (Rt = o(_)) == null || Rt.handleSortAction({ columnId: Ge, columnIndex: de, headerCell: R });
  }
  function Ie() {
    var R;
    return (R = o(_)) == null ? void 0 : R.layout();
  }
  function ue() {
    return A;
  }
  var Se = { layout: Ie, getElement: ue }, V = Pg(), ie = (R) => {
    var F;
    o(_) && o(_).handleHeaderRowCheckboxChange(), (F = e.onSMUIDataTableHeaderCheckboxChange) == null || F.call(e, R);
  }, K = (R) => {
    var F;
    L(R), (F = e.onSMUIDataTableHeaderClick) == null || F.call(e, R);
  }, oe = (R) => {
    var F;
    B(R), (F = e.onSMUIDataTableRowClick) == null || F.call(e, R);
  }, we = (R) => {
    var F;
    U(R), (F = e.onSMUIDataTableBodyCheckboxChange) == null || F.call(e, R);
  };
  qe(
    V,
    (R, F) => ({
      class: R,
      ...F,
      onSMUIDataTableHeaderCheckboxChange: ie,
      onSMUIDataTableHeaderClick: K,
      onSMUIDataTableRowClick: oe,
      onSMUIDataTableBodyCheckboxChange: we
    }),
    [
      () => Be({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": u(),
        ...C,
        [c()]: !0
      }),
      () => ji(E, ["container$", "table$"])
    ]
  );
  var j = ae(V);
  qe(j, (R, F) => ({ class: R, ...F }), [
    () => Be({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => ht(E, "container$")
  ]);
  var ne = ae(j);
  qe(ne, (R, F) => ({ class: R, ...F }), [
    () => Be({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => ht(E, "table$")
  ]);
  var Re = ae(ne);
  Ae(Re, () => e.children ?? me), Ne(ne, (R, F) => q == null ? void 0 : q(R, F), b), xe(j, (R) => I = R, () => I), Ne(j, (R, F) => q == null ? void 0 : q(R, F), v);
  var ye = be(j, 2);
  {
    var Fe = (R) => {
      var F = Dg(), de = be(ae(F), 2);
      Ae(de, () => e.progress ?? me), Oe((Ge) => Ut(F, Ge), [
        () => Object.entries(o(x)).map(([Ge, Ot]) => `${Ge}: ${Ot};`).join(" ")
      ]), w(R, F);
    };
    ee(ye, (R) => {
      e.progress && R(Fe);
    });
  }
  var $e = be(ye, 2);
  Ae($e, () => e.paginate ?? me), xe(V, (R) => A = R, () => A), Ne(V, (R, F) => q == null ? void 0 : q(R, F), s), w(t, V);
  var vt = Te(Se);
  return i(), vt;
}
var Ng = /* @__PURE__ */ se("<thead><!></thead>");
function Ug(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ pe(void 0), s = [];
  const c = /* @__PURE__ */ new WeakMap();
  re("SMUI:data-table:row:header", !0);
  const u = he("SMUI:checkbox:mount");
  re("SMUI:checkbox:mount", (y) => {
    z(a, y, !0), u && u(y);
  });
  const l = he("SMUI:checkbox:unmount");
  re("SMUI:checkbox:unmount", (y) => {
    z(a, void 0), l && l(y);
  }), re("SMUI:data-table:cell:mount", (y) => {
    s.push(y), c.set(y.element, y);
  }), re("SMUI:data-table:cell:unmount", (y) => {
    const E = s.findIndex((A) => A === y);
    E !== -1 && s.splice(E, 1), c.delete(y.element);
  });
  const d = he("SMUI:data-table:header:mount"), h = he("SMUI:data-table:header:unmount");
  st(() => {
    const y = {
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
    return d && d(y), () => {
      h && h(y);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((y) => c.get(y)).filter((y) => y && y._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var v = { getElement: m }, p = Ng();
  qe(p, () => ({ ...r }));
  var b = ae(p);
  return Ae(b, () => e.children ?? me), xe(p, (y) => i = y, () => i), Ne(p, (y, E) => q == null ? void 0 : q(y, E), n), w(t, p), Te(v);
}
var kg = /* @__PURE__ */ se("<tbody><!></tbody>");
function Bg(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const c = /* @__PURE__ */ new WeakMap();
  re("SMUI:data-table:row:header", !1), re("SMUI:data-table:row:mount", (p) => {
    s.push(p), c.set(p.element, p);
  }), re("SMUI:data-table:row:unmount", (p) => {
    const b = s.findIndex((y) => y === p);
    b !== -1 && s.splice(b, 1), c.delete(p.element);
  });
  const u = he("SMUI:data-table:body:mount"), l = he("SMUI:data-table:body:unmount");
  st(() => {
    const p = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return u && u(p), () => {
      l && l(p);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((p) => c.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, m = kg();
  qe(m, (p) => ({ class: p, ...i }), [
    () => Be({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = ae(m);
  return Ae(v, () => e.children ?? me), xe(m, (p) => a = p, () => a), Ne(m, (p, b) => q == null ? void 0 : q(p, b), n), w(t, m), Te(f);
}
let Fg = 0;
var Vg = /* @__PURE__ */ se("<tr><!></tr>");
function Ys(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "rowId", 19, () => "SMUI-data-table-row-" + Fg++), a = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, c = /* @__PURE__ */ pe(void 0), u = _e({}), l = _e({}), d = he("SMUI:data-table:row:header");
  const h = he("SMUI:checkbox:mount");
  re("SMUI:checkbox:mount", (H) => {
    z(c, H, !0), h && h(H);
  });
  const f = he("SMUI:checkbox:unmount");
  re("SMUI:checkbox:unmount", (H) => {
    z(c, void 0), f && f(H);
  });
  const m = he("SMUI:data-table:row:mount"), v = he("SMUI:data-table:row:unmount");
  st(() => {
    const H = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return I();
      },
      get checkbox() {
        return o(c);
      },
      get rowId() {
      },
      get selected() {
        return (o(c) && o(c).checked) ?? !1;
      },
      addClass: p,
      removeClass: b,
      getAttr: y,
      addAttr: E
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return I();
      },
      get checkbox() {
        return o(c);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (o(c) && o(c).checked) ?? !1;
      },
      addClass: p,
      removeClass: b,
      getAttr: y,
      addAttr: E
    };
    return m && m(H), () => {
      v && v(H);
    };
  });
  function p(H) {
    u[H] || (u[H] = !0);
  }
  function b(H) {
    (!(H in u) || u[H]) && (u[H] = !1);
  }
  function y(H) {
    return H in l ? l[H] ?? null : I().getAttribute(H);
  }
  function E(H, W) {
    l[H] !== W && (l[H] = W);
  }
  function A(H) {
    Ze(I(), "SMUIDataTableHeaderClick", H);
  }
  function _(H) {
    Ze(I(), "SMUIDataTableRowClick", { rowId: i(), target: H.target });
  }
  function I() {
    return s;
  }
  var S = { getElement: I }, T = Vg(), C = (H) => {
    var W;
    d ? A(H) : _(H), (W = e.onclick) == null || W.call(e, H);
  };
  qe(
    T,
    (H) => ({
      class: H,
      "aria-selected": o(c) ? o(c).checked ? "true" : "false" : void 0,
      ...l,
      ...a,
      onclick: C
    }),
    [
      () => Be({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(c) && o(c).checked,
        ...u,
        [r()]: !0
      })
    ]
  );
  var x = ae(T);
  return Ae(x, () => e.children ?? me), xe(T, (H) => s = H, () => s), Ne(T, (H, W) => q == null ? void 0 : q(H, W), n), w(t, T), Te(S);
}
let Gg = 0;
var jg = /* @__PURE__ */ se('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), qg = /* @__PURE__ */ se("<th><!></th>"), zg = /* @__PURE__ */ se("<td><!></td>");
function za(t, e) {
  Ce(e, !0);
  const n = () => zn(y, "$sort", i), r = () => zn(E, "$sortDirection", i), [i, a] = ur();
  let s = he("SMUI:data-table:row:header"), c = g(e, "use", 19, () => []), u = g(e, "class", 3, ""), l = g(e, "numeric", 3, !1), d = g(e, "checkbox", 3, !1), h = g(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Gg++ : "SMUI-data-table-unused"), f = g(e, "sortable", 19, () => he("SMUI:data-table:sortable")), m = /* @__PURE__ */ Xe(e, [
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
  ]), v, p = _e({}), b = _e({}), y = he("SMUI:data-table:sort"), E = he("SMUI:data-table:sortDirection"), A = he("SMUI:data-table:sortAscendingAriaLabel"), _ = he("SMUI:data-table:sortDescendingAriaLabel");
  f() && (re("SMUI:label:context", "data-table:sortable-header-cell"), re("SMUI:icon-button:context", "data-table:sortable-header-cell"), re("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const I = he("SMUI:data-table:cell:mount"), S = he("SMUI:data-table:cell:unmount");
  st(() => {
    const P = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return M();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: C,
      getAttr: x,
      addAttr: H
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return M();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: C,
      getAttr: x,
      addAttr: H
    };
    return I && I(P), () => {
      S && S(P);
    };
  });
  function T(P) {
    p[P] || (p[P] = !0);
  }
  function C(P) {
    (!(P in p) || p[P]) && (p[P] = !1);
  }
  function x(P) {
    return P in b ? b[P] ?? null : M().getAttribute(P);
  }
  function H(P, L) {
    b[P] !== L && (b[P] = L);
  }
  function W(P) {
    Ze(M(), "SMUIDataTableHeaderCheckboxChange", P);
  }
  function D(P) {
    Ze(M(), "SMUIDataTableBodyCheckboxChange", P);
  }
  function M() {
    return v;
  }
  var te = { getElement: M }, N = $(), k = Z(N);
  {
    var U = (P) => {
      var L = qg(), B = (Se) => {
        var V;
        d() && W(Se), (V = e.onchange) == null || V.call(e, Se);
      };
      qe(
        L,
        (Se) => ({
          class: Se,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: B
        }),
        [
          () => Be({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": l(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...p,
            [u()]: !0
          })
        ]
      );
      var Ee = ae(L);
      {
        var Ie = (Se) => {
          var V = jg(), ie = ae(V);
          Ae(ie, () => e.children ?? me);
          var K = be(ie, 2), oe = ae(K);
          Oe(() => {
            Ar(K, "id", `${h() ?? ""}-status-label`), it(oe, n() === h() ? r() === "ascending" ? A : _ : "");
          }), w(Se, V);
        }, ue = (Se) => {
          var V = $(), ie = Z(V);
          Ae(ie, () => e.children ?? me), w(Se, V);
        };
        ee(Ee, (Se) => {
          f() ? Se(Ie) : Se(ue, !1);
        });
      }
      xe(L, (Se) => v = Se, () => v), Ne(L, (Se, V) => q == null ? void 0 : q(Se, V), c), w(P, L);
    }, X = (P) => {
      var L = zg(), B = (Ie) => {
        var ue;
        d() && D(Ie), (ue = e.onchange) == null || ue.call(e, Ie);
      };
      qe(
        L,
        (Ie) => ({
          class: Ie,
          ...b,
          ...m,
          onchange: B
        }),
        [
          () => Be({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": l(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [u()]: !0
          })
        ]
      );
      var Ee = ae(L);
      Ae(Ee, () => e.children ?? me), xe(L, (Ie) => v = Ie, () => v), Ne(L, (Ie, ue) => q == null ? void 0 : q(Ie, ue), c), w(P, L);
    };
    ee(k, (P) => {
      s ? P(U) : P(X, !1);
    });
  }
  w(t, N);
  var Q = Te(te);
  return a(), Q;
}
Cn(["click"]);
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
var Wg = {
  ROOT: "mdc-form-field"
}, Xg = {
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
var Kg = (
  /** @class */
  function(t) {
    Je(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Wg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Xg;
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
  }(qt)
);
let Zg = 0;
var Yg = /* @__PURE__ */ se("<div><!> <label><!></label></div>");
function Qg(t, e) {
  Ce(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "align", 3, "start"), a = g(e, "noWrap", 3, !1), s = g(e, "inputId", 19, () => "SMUI-form-field-" + Zg++), c = g(e, "label$use", 19, () => []), u = /* @__PURE__ */ Xe(e, [
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
  ]), l, d = /* @__PURE__ */ pe(void 0), h = new Yi(), f, m = /* @__PURE__ */ pe(void 0);
  re("SMUI:generic:input:props", { id: s() }), re("SMUI:generic:input:mount", (_) => {
    z(m, _, !0);
  }), re("SMUI:generic:input:unmount", () => {
    z(m, void 0);
  }), st(() => (z(
    d,
    new Kg({
      activateInputRipple: () => {
        o(m) && o(m).activateRipple();
      },
      deactivateInputRipple: () => {
        o(m) && o(m).deactivateRipple();
      },
      deregisterInteractionHandler: (_, I) => h.off(f, _, I),
      registerInteractionHandler: (_, I) => h.on(f, _, I)
    }),
    !0
  ), o(d).init(), () => {
    var _;
    (_ = o(d)) == null || _.destroy(), h.clear();
  }));
  function v() {
    return l;
  }
  var p = { getElement: v }, b = Yg();
  qe(b, (_, I) => ({ class: _, ...I }), [
    () => Be({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => ji(u, ["label$"])
  ]);
  var y = ae(b);
  Ae(y, () => e.children ?? me);
  var E = be(y, 2);
  qe(E, (_) => ({ for: s(), ..._ }), [() => ht(u, "label$")]);
  var A = ae(E);
  return Ae(A, () => e.label ?? me), xe(E, (_) => f = _, () => f), Ne(E, (_, I) => q == null ? void 0 : q(_, I), c), xe(b, (_) => l = _, () => l), Ne(b, (_, I) => q == null ? void 0 : q(_, I), n), w(t, b), Te(p);
}
Cn(["click"]);
function So(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var Jg = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
So({}, Jg.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Wa, Ql = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Wa = {}, So(Wa, Ql.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), So(Wa, Ql.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function $g(t) {
  return t * t * t;
}
function Xc(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function eb(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (S) => Math.sqrt(S) * 120, easing: s = Xc } = r, c = getComputedStyle(t), u = c.transform === "none" ? "" : c.transform, [l, d] = c.transformOrigin.split(" ").map(parseFloat);
  l /= t.clientWidth, d /= t.clientHeight;
  var h = tb(t), f = t.clientWidth / n.width / h, m = t.clientHeight / n.height / h, v = e.left + e.width * l, p = e.top + e.height * d, b = n.left + n.width * l, y = n.top + n.height * d, E = (v - b) * f, A = (p - y) * m, _ = e.width / n.width, I = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(E * E + A * A)) : a,
    easing: s,
    css: (S, T) => {
      var C = T * E, x = T * A, H = S + T * _, W = S + T * I;
      return `transform: ${u} translate(${C}px, ${x}px) scale(${H}, ${W});`;
    }
  };
}
function tb(t) {
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
function nb(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Jl(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function hs(t, { delay: e = 0, duration: n = 400, easing: r = nb, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const c = getComputedStyle(t), u = +c.opacity, l = c.transform === "none" ? "" : c.transform, d = u * (1 - s), [h, f] = Jl(i), [m, v] = Jl(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, b) => `
			transform: ${l} translate(${(1 - p) * h}${f}, ${(1 - p) * m}${v});
			opacity: ${u - d * b}`
  };
}
Cn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
function rb(t, e) {
  var n;
  (n = e()) == null || n();
}
var ib = /* @__PURE__ */ se('<div class="detail svelte-4xu36c"> </div>'), ab = /* @__PURE__ */ se('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function sb(t, e) {
  Ce(e, !0);
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
  var a = ab(), s = ae(a), c = ae(s);
  Io(c, {
    class: "material-icons",
    children: (p, b) => {
      var y = Ht();
      Oe(() => it(y, r[e.type])), w(p, y);
    },
    $$slots: { default: !0 }
  });
  var u = be(s, 2), l = ae(u), d = ae(l), h = be(l, 2);
  {
    var f = (p) => {
      var b = ib(), y = ae(b);
      Oe(() => it(y, e.detail)), w(p, b);
    };
    ee(h, (p) => {
      e.detail && p(f);
    });
  }
  var m = be(u, 2);
  m.__click = [rb, n];
  var v = ae(m);
  Io(v, {
    class: "material-icons",
    children: (p, b) => {
      var y = Ht("close");
      w(p, y);
    },
    $$slots: { default: !0 }
  }), Oe(() => {
    Ut(a, `--color:${i[e.type] ?? ""}`), it(d, e.summary);
  }), ss(1, a, () => hs, () => ({ x: 0, y: 30, duration: 150, easing: $g })), ss(2, a, () => hs, () => ({ x: 50, y: 0, duration: 150, easing: Xc })), w(t, a), Te();
}
Cn(["click"]);
const ob = 4e3;
function lb() {
  let t = _e({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, s, c = ob) => {
    const u = e++, l = { id: u, summary: a, detail: s, type: i };
    return t.items = [...t.items, l], setTimeout(
      () => {
        n(u);
      },
      c
    ), u;
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
const Ia = lb();
var ub = /* @__PURE__ */ se("<div><!></div>"), cb = /* @__PURE__ */ se('<div class="toast-host svelte-11vwiay"></div>');
function db(t, e) {
  Ce(e, !1);
  const n = Ia.toasts;
  eh();
  var r = cb();
  Dn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var s = ub(), c = ae(s);
    sb(c, {
      get summary() {
        return o(a).summary;
      },
      get detail() {
        return o(a).detail;
      },
      get type() {
        return o(a).type;
      },
      onClose: () => Ia.remove(o(a).id)
    }), Jf(s, () => eb, null), w(i, s);
  }), w(t, r), Te();
}
var fb = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, hb = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, vb = /* @__PURE__ */ se('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), mb = /* @__PURE__ */ se('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), pb = /* @__PURE__ */ se('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function gb(t, e) {
  Ce(e, !0);
  let n = /* @__PURE__ */ ge(() => !!e.value);
  var r = pb();
  r.__click = [fb, e];
  var i = ae(r), a = ae(i);
  {
    var s = (f) => {
      fs(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, v) => {
          var p = vb();
          p.__click = [hb, e];
          var b = ae(p);
          zc(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), w(m, p);
        },
        $$slots: { default: !0 }
      });
    }, c = (f) => {
      fs(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, v) => {
          yg(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    ee(a, (f) => {
      o(n) ? f(s) : f(c, !1);
    });
  }
  var u = be(i, 2), l = ae(u), d = be(u, 2);
  {
    var h = (f) => {
      var m = mb(), v = be(Z(m), 2), p = ae(v), b = be(v, 2), y = ae(b);
      bg(y, { svgStyles: "fill: gray;" }), Oe(() => it(p, e.value)), w(f, m);
    };
    ee(d, (f) => {
      o(n) && f(h);
    });
  }
  Oe(() => {
    Uo(r, 1, `filter-badge ${o(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), it(l, e.label);
  }), w(t, r), Te();
}
Cn(["click"]);
var bb = /* @__PURE__ */ se('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function _b(t, e) {
  Ce(e, !0);
  let n = () => {
  };
  function r(j) {
    return j === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), c = g(e, "disabled", 15, !1), u = g(e, "touch", 3, !1), l = g(e, "indeterminate", 15, n), d = g(e, "group", 11, n), h = g(e, "checked", 15, n), f = g(e, "value", 3, null), m = g(e, "valueKey", 3, n), v = g(e, "input$use", 19, () => []), p = g(e, "input$class", 3, ""), b = /* @__PURE__ */ Xe(e, [
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
  ]), y, E = /* @__PURE__ */ pe(void 0), A = /* @__PURE__ */ pe(void 0), _ = _e({}), I = _e({}), S = _e({}), T = /* @__PURE__ */ pe(!1), C = _e(he("SMUI:generic:input:props") ?? {}), x = /* @__PURE__ */ pe(_e(r(d()) ? r(h()) ? !1 : !!h() : d().findIndex((j) => j === f()) !== -1)), H = he("SMUI:checkbox:context"), W = he("SMUI:data-table:row:header"), D = h(), M = r(d()) ? [] : [...d()], te = o(x);
  Le(() => {
    let j = !1;
    if (!r(d()))
      if (te !== o(x)) {
        const ne = d().findIndex((Re) => Re === f());
        o(x) && ne === -1 ? d().push(f()) : !o(x) && ne !== -1 && d().splice(ne, 1), j = !0;
      } else {
        const ne = M.findIndex((ye) => ye === f()), Re = d().findIndex((ye) => ye === f());
        ne > -1 && Re === -1 ? (z(x, !1), j = !0) : Re > -1 && ne === -1 && (z(x, !0), j = !0);
      }
    r(h()) ? te !== o(x) && (j = !0) : (h() !== (l() ? null : o(x)) || o(x) !== te) && (h() === D && o(x) !== te ? (h(o(x)), r(l()) || l(!1)) : z(x, !!h()), j = !0), o(A) && (r(l()) ? o(A).indeterminate && (o(A).indeterminate = !1, j = !0) : !l() && o(A).indeterminate ? (o(A).indeterminate = !1, j = !0) : l() && !o(A).indeterminate && (o(A).indeterminate = !0, z(x, !1), j = !0)), D = h(), M = r(d()) ? [] : [...d()], te = o(x), j && o(E) && o(E).handleChange();
  });
  const N = he("SMUI:generic:input:mount"), k = he("SMUI:generic:input:unmount"), U = he("SMUI:checkbox:mount"), X = he("SMUI:checkbox:unmount");
  st(() => {
    if (o(A) == null)
      throw new Error("Checkbox is not defined.");
    o(A).indeterminate = !r(l()) && l(), z(
      E,
      new Og({
        addClass: Q,
        forceLayout: () => ue().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!ue().parentNode,
        isChecked: () => o(x),
        isIndeterminate: () => r(l()) ? !1 : l(),
        removeClass: P,
        removeNativeControlAttr: Ee,
        setNativeControlAttr: B,
        setNativeControlDisabled: (ne) => c(ne)
      }),
      !0
    );
    const j = {
      _smui_checkbox_accessor: !0,
      get element() {
        return ue();
      },
      get checked() {
        return o(x);
      },
      set checked(ne) {
        o(x) !== ne && z(x, ne, !0);
      },
      get indeterminate() {
        return r(l()) ? !1 : l();
      },
      set indeterminate(ne) {
        l(ne);
      },
      activateRipple() {
        c() || z(T, !0);
      },
      deactivateRipple() {
        z(T, !1);
      }
    };
    return N && N(j), U && U(j), o(E).init(), () => {
      var ne;
      k && k(j), X && X(j), (ne = o(E)) == null || ne.destroy();
    };
  });
  function Q(j) {
    _[j] || (_[j] = !0);
  }
  function P(j) {
    (!(j in _) || _[j]) && (_[j] = !1);
  }
  function L(j, ne) {
    I[j] != ne && (ne === "" || ne == null ? delete I[j] : I[j] = ne);
  }
  function B(j, ne) {
    S[j] !== ne && (S[j] = ne);
  }
  function Ee(j) {
    (!(j in S) || S[j] != null) && (S[j] = void 0);
  }
  function Ie() {
    return C && C.id;
  }
  function ue() {
    return y;
  }
  var Se = { getId: Ie, getElement: ue }, V = bb(), ie = (j) => {
    var ne;
    o(E) && o(E).handleAnimationEnd(), (ne = e.onanimationend) == null || ne.call(e, j);
  };
  qe(V, (j, ne, Re) => ({ class: j, style: ne, ...Re, onanimationend: ie }), [
    () => Be({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": c(),
      "mdc-checkbox--touch": u(),
      "mdc-data-table__header-row-checkbox": H === "data-table" && W,
      "mdc-data-table__row-checkbox": H === "data-table" && !W,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(I).map(([j, ne]) => `${j}: ${ne};`).concat([s()]).join(" "),
    () => ji(b, ["input$"])
  ]);
  var K = ae(V), oe = (j) => {
    var ne;
    Ze(ue(), "blur", j), (ne = e.input$onblur) == null || ne.call(e, j);
  }, we = (j) => {
    var ne;
    Ze(ue(), "focus", j), (ne = e.input$onfocus) == null || ne.call(e, j);
  };
  return qe(
    K,
    (j, ne, Re, ye) => ({
      class: j,
      type: "checkbox",
      ...C,
      disabled: c(),
      value: ne,
      "data-indeterminate": Re,
      ...S,
      ...ye,
      onblur: oe,
      onfocus: we
    }),
    [
      () => Be({ "mdc-checkbox__native-control": !0, [p()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(l()) && l() ? "true" : void 0,
      () => ht(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), xe(K, (j) => z(A, j), () => o(A)), Ne(K, (j, ne) => q == null ? void 0 : q(j, ne), v), oi(() => $f(K, () => o(x), (j) => z(x, j))), xe(V, (j) => y = j, () => y), Ne(V, (j, ne) => q == null ? void 0 : q(j, ne), i), Ne(V, (j, ne) => Kt == null ? void 0 : Kt(j, ne), () => ({
    unbounded: !0,
    addClass: Q,
    removeClass: P,
    addStyle: L,
    active: o(T),
    eventTarget: o(A)
  })), w(t, V), Te(Se);
}
var yb = /* @__PURE__ */ se('<div style="display: flex; flex-direction: column;"></div>');
function Ib(t, e) {
  Ce(e, !0);
  let n = g(e, "data", 19, () => []), r = g(e, "values", 31, () => _e([]));
  var i = yb();
  Dn(i, 21, n, Ei, (a, s) => {
    Qg(a, {
      label: (u) => {
        var l = Ht();
        Oe(() => it(l, o(s).label)), w(u, l);
      },
      children: (u, l) => {
        _b(u, {
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
var Eb = (t) => t.stopPropagation(), Ab = /* @__PURE__ */ se('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), Sb = /* @__PURE__ */ se('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), xb = /* @__PURE__ */ se('<div class="oscd-filters svelte-58jwwf"></div>');
function Cb(t, e) {
  Ce(e, !0);
  let n = g(e, "filters", 15), r = /* @__PURE__ */ pe(null), i = [], a = [];
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
          const y = v.value.map((A) => {
            var I;
            const _ = (I = v.options) == null ? void 0 : I.find((S) => S.value === A);
            return _ ? _.label : String(A);
          }), E = 1;
          return y.length <= E ? y.join(", ") : `${y.slice(0, E).join(", ")} +${y.length - E} more`;
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
  function c(v) {
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
  function u(v) {
    o(r) === v ? z(r, null) : (z(r, v, !0), a[v] = c(n()[v]));
  }
  function l() {
    z(r, null), a[o(r)] = void 0;
  }
  function d(v) {
    var p;
    n(n().map((b, y) => y === v ? { ...b, value: a[v] } : b)), (p = e.onfiltersChanged) == null || p.call(e, [...n()]), z(r, null);
  }
  function h(v) {
    var p;
    n(n().map((b, y) => y === v ? { ...b, value: void 0 } : b)), a[v] = void 0, (p = e.onfiltersChanged) == null || p.call(e, [...n()]), l();
  }
  function f(v) {
    i.some((b) => b && b.contains(v.target)) || l();
  }
  st(() => {
    document.addEventListener("click", f);
  }), Tn(() => {
    document.removeEventListener("click", f);
  }), Le(() => {
  });
  var m = xb();
  Dn(m, 23, n, (v) => v.key, (v, p, b) => {
    var y = Sb(), E = ae(y);
    {
      let I = /* @__PURE__ */ ge(() => s(o(p)));
      gb(E, {
        get label() {
          return o(p).label;
        },
        get value() {
          return o(I);
        },
        onOpen: () => u(o(b)),
        onRemove: () => h(o(b))
      });
    }
    var A = be(E, 2);
    {
      var _ = (I) => {
        var S = Ab();
        S.__click = [Eb];
        var T = be(ae(S), 2), C = ae(T), x = be(T, 2), H = ae(x);
        {
          var W = (te) => {
            Eo(te, {
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
              set value(N) {
                a[o(b)] = N;
              }
            });
          }, D = (te) => {
            var N = $(), k = Z(N);
            {
              var U = (Q) => {
                {
                  let P = /* @__PURE__ */ ge(() => {
                    var L;
                    return (L = o(p)) == null ? void 0 : L.options;
                  });
                  Xp(Q, {
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
              }, X = (Q) => {
                var P = $(), L = Z(P);
                {
                  var B = (Ie) => {
                    {
                      let ue = /* @__PURE__ */ ge(() => {
                        var Se;
                        return (Se = o(p)) == null ? void 0 : Se.options;
                      });
                      Ib(Ie, {
                        get data() {
                          return o(ue);
                        },
                        get values() {
                          return a[o(b)];
                        },
                        set values(Se) {
                          a[o(b)] = Se;
                        }
                      });
                    }
                  }, Ee = (Ie) => {
                    var ue = $(), Se = Z(ue);
                    {
                      var V = (K) => {
                        Ag(K, {
                          get value() {
                            return a[o(b)];
                          },
                          set value(oe) {
                            a[o(b)] = oe;
                          }
                        });
                      }, ie = (K) => {
                        var oe = $(), we = Z(oe);
                        {
                          var j = (ne) => {
                            Cg(ne, {
                              get value() {
                                return a[o(b)];
                              },
                              set value(Re) {
                                a[o(b)] = Re;
                              }
                            });
                          };
                          ee(
                            we,
                            (ne) => {
                              o(p).type === "datetime" && ne(j);
                            },
                            !0
                          );
                        }
                        w(K, oe);
                      };
                      ee(
                        Se,
                        (K) => {
                          o(p).type === "date" ? K(V) : K(ie, !1);
                        },
                        !0
                      );
                    }
                    w(Ie, ue);
                  };
                  ee(
                    L,
                    (Ie) => {
                      o(p).type === "multiselect" ? Ie(B) : Ie(Ee, !1);
                    },
                    !0
                  );
                }
                w(Q, P);
              };
              ee(
                k,
                (Q) => {
                  o(p).type === "select" ? Q(U) : Q(X, !1);
                },
                !0
              );
            }
            w(te, N);
          };
          ee(H, (te) => {
            o(p).type === "text" || o(p).type === "number" ? te(W) : te(D, !1);
          });
        }
        var M = be(x, 2);
        Bc(M, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(o(b)),
          children: (te, N) => {
            var k = Ht("Apply");
            w(te, k);
          },
          $$slots: { default: !0 }
        }), Oe(() => it(C, `Filter by ${o(p).label ?? ""}`)), ss(2, S, () => hs, () => ({ y: 5, duration: 120 })), ss(1, S, () => hs, () => ({ y: -5, duration: 120 })), w(I, S);
      };
      ee(A, (I) => {
        o(r) === o(b) && I(_);
      });
    }
    xe(y, (I, S) => i[S] = I, (I) => i == null ? void 0 : i[I], () => [o(b)]), w(v, y);
  }), w(t, m), Te();
}
Cn(["click"]);
var Tb = (t, e) => e(), wb = /* @__PURE__ */ se('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), Lb = /* @__PURE__ */ se('<div class="filter-tab svelte-nj6sif"><!> <div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div></div>');
function Ob(t, e) {
  Ce(e, !0);
  let n = g(e, "filters", 15), r = g(e, "onFilterChange", 3, (E) => {
  }), i = g(e, "searchText", 15, ""), a = g(e, "searchLabel", 3, "Search"), s = g(e, "searchPlaceholder", 3, "Type to search..."), c = g(e, "onSearchInput", 3, () => {
  }), u = g(e, "searchDisabled", 3, !1), l = /* @__PURE__ */ ge(() => n().some((E) => E.value !== void 0 && E.value !== null && E.value !== "")), d = () => {
    n(n().map((E) => ({ ...E, value: void 0 }))), r()(n());
  };
  var h = Lb(), f = ae(h);
  {
    var m = (E) => {
      hp(E, {
        oninput: () => c()(),
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
    ee(f, (E) => {
      u() || E(m);
    });
  }
  var v = be(f, 2), p = be(ae(v), 2);
  Cb(p, {
    onfiltersChanged: (E) => r()(E),
    get filters() {
      return n();
    },
    set filters(E) {
      n(E);
    }
  });
  var b = be(p, 2);
  {
    var y = (E) => {
      var A = wb();
      A.__click = [Tb, d], w(E, A);
    };
    ee(b, (E) => {
      o(l) && E(y);
    });
  }
  w(t, h), Te();
}
Cn(["click"]);
var Rb = /* @__PURE__ */ se('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Kc(t, e) {
  Ce(e, !0);
  const [n, r] = ur();
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), c = g(e, "indeterminate", 3, !1), u = g(e, "closed", 3, !1), l = g(e, "progress", 3, 0), d = g(e, "buffer", 3, void 0), h = /* @__PURE__ */ Xe(e, [
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
  ]), f, m = /* @__PURE__ */ pe(void 0), v = _e({}), p = _e({}), b = _e({}), y = _e({}), E = _e({}), A = he("SMUI:linear-progress:context"), _ = he("SMUI:linear-progress:closed");
  Le(() => {
    _ && ni(_, u());
  }), Le(() => {
    o(m) && o(m).isDeterminate() !== !c() && o(m).setDeterminate(!c());
  }), Le(() => {
    o(m) && o(m).getProgress() !== l() && o(m).setProgress(l());
  }), Le(() => {
    o(m) && (d() == null ? o(m).setBuffer(1) : o(m).setBuffer(d()));
  }), Le(() => {
    o(m) && (u() ? o(m).close() : o(m).open());
  }), st(() => (z(
    m,
    new Rg({
      addClass: S,
      forceLayout: () => {
        M().getBoundingClientRect();
      },
      setBufferBarStyle: W,
      setPrimaryBarStyle: D,
      hasClass: I,
      removeAttribute: x,
      removeClass: T,
      setAttribute: C,
      setStyle: H,
      attachResizeObserver: (L) => {
        const B = window.ResizeObserver;
        if (B) {
          const Ee = new B(L);
          return Ee.observe(M()), Ee;
        }
        return null;
      },
      getWidth: () => M().offsetWidth
    }),
    !0
  ), o(m).init(), () => {
    var L;
    (L = o(m)) == null || L.destroy();
  }));
  function I(L) {
    return L in v ? v[L] : M().classList.contains(L);
  }
  function S(L) {
    v[L] || (v[L] = !0);
  }
  function T(L) {
    (!(L in v) || v[L]) && (v[L] = !1);
  }
  function C(L, B) {
    p[L] !== B && (p[L] = B);
  }
  function x(L) {
    (!(L in p) || p[L] != null) && (p[L] = void 0);
  }
  function H(L, B) {
    b[L] != B && (B === "" || B == null ? delete b[L] : b[L] = B);
  }
  function W(L, B) {
    y[L] != B && (B === "" || B == null ? delete y[L] : y[L] = B);
  }
  function D(L, B) {
    E[L] != B && (B === "" || B == null ? delete E[L] : E[L] = B);
  }
  function M() {
    return f;
  }
  var te = { getElement: M }, N = Rb(), k = (L) => {
    var B;
    o(m) && o(m).handleTransitionEnd(), (B = e.ontransitionend) == null || B.call(e, L);
  };
  qe(
    N,
    (L, B) => ({
      class: L,
      style: B,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": c() ? void 0 : l(),
      ...p,
      ...h,
      ontransitionend: k
    }),
    [
      () => Be({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": c(),
        "mdc-linear-progress--closed": u(),
        "mdc-data-table__linear-progress": A === "data-table",
        ...v,
        [a()]: !0
      }),
      () => Object.entries(b).map(([L, B]) => `${L}: ${B};`).concat([s()]).join(" ")
    ]
  );
  var U = ae(N), X = ae(U), Q = be(U, 2);
  xe(N, (L) => f = L, () => f), Ne(N, (L, B) => q == null ? void 0 : q(L, B), i), Oe(
    (L, B) => {
      Ut(X, L), Ut(Q, B);
    },
    [
      () => Object.entries(y).map(([L, B]) => `${L}: ${B};`).join(" "),
      () => Object.entries(E).map(([L, B]) => `${L}: ${B};`).join(" ")
    ]
  ), w(t, N);
  var P = Te(te);
  return r(), P;
}
var Mb = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Db = /* @__PURE__ */ un('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Pb = /* @__PURE__ */ se('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Hb = (t, e) => e(), Nb = /* @__PURE__ */ se('<input type="text" class="svelte-1mj71p3"/>'), Ub = (t, e) => e(), kb = /* @__PURE__ */ se('<input type="number" class="svelte-1mj71p3"/>'), Bb = /* @__PURE__ */ se("<!> <!>", 1), Fb = /* @__PURE__ */ se("<!> <!>", 1), Vb = /* @__PURE__ */ se('<div class="cell-actions svelte-1mj71p3"></div>'), Gb = /* @__PURE__ */ se("<!> <!>", 1);
function jb(t, e) {
  Ce(e, !0);
  const n = () => zn(p, "$sortColumn", a), r = () => zn(b, "$sortDirection", a), i = () => zn(v, "$filteredData", a), [a, s] = ur();
  let c = g(e, "loadingDone", 15, !0), u = g(e, "label", 19, Gr), l = g(e, "columnDefs", 19, () => []), d = g(e, "rowData", 31, () => _e([])), h = g(e, "rowActions", 19, () => []), f = g(e, "searchInputLabel", 3, "Search"), m = _e({ name: "", color: "", number: "" }), v = Jt([]), p = Jt(null), b = Jt(null), y = /* @__PURE__ */ ge(() => l().some((I) => I.filter));
  e.store.store.subscribe((I) => {
    d([...I]), E();
  });
  function E() {
    let I = d().filter((S) => l().every((T) => {
      const C = m[T.field], x = T.filterValueGetter ? T.filterValueGetter(S) : S[T.field];
      return C ? T.filterType === "number" ? x == C : x.toString().toLowerCase().includes(C.toLowerCase()) : !0;
    }));
    I = A(I), v.set(I);
  }
  function A(I) {
    let S, T;
    return p.subscribe((C) => S = C), b.subscribe((C) => T = C), !S || !T ? I : I.sort((C, x) => {
      let H = C[S], W = x[S];
      return H == null && (H = ""), W == null && (W = ""), T === "asc" ? H.toString().localeCompare(W.toString()) : W.toString().localeCompare(H.toString());
    });
  }
  function _(I) {
    p.update((S) => {
      if (S === I)
        b.update((T) => T === "asc" ? "desc" : T === "desc" ? null : "asc");
      else
        return b.set("asc"), I;
      return I;
    }), E();
  }
  v.set(d()), Hg(t, {
    get "table$aria-label"() {
      return u();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (S) => {
      Kc(S, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return c();
        },
        set closed(T) {
          c(T);
        }
      });
    },
    children: (S, T) => {
      var C = Gb(), x = Z(C);
      Ug(x, {
        children: (W, D) => {
          var M = Fb(), te = Z(M);
          Ys(te, {
            class: "header-title-row",
            children: (U, X) => {
              var Q = $(), P = Z(Q);
              Dn(P, 17, l, Ei, (L, B) => {
                za(L, {
                  onclick: () => o(B).sortable && _(o(B).field),
                  get style() {
                    return o(B).headerStyle;
                  },
                  children: (Ee, Ie) => {
                    var ue = Pb(), Se = ae(ue), V = ae(Se), ie = ae(V), K = be(V, 2);
                    {
                      var oe = (we) => {
                        var j = $(), ne = Z(j);
                        {
                          var Re = (ye) => {
                            var Fe = $(), $e = Z(Fe);
                            {
                              var vt = (F) => {
                                var de = Mb();
                                w(F, de);
                              }, R = (F) => {
                                var de = $(), Ge = Z(de);
                                {
                                  var Ot = (Rt) => {
                                    var Ln = Db();
                                    w(Rt, Ln);
                                  };
                                  ee(
                                    Ge,
                                    (Rt) => {
                                      r() === "desc" && Rt(Ot);
                                    },
                                    !0
                                  );
                                }
                                w(F, de);
                              };
                              ee($e, (F) => {
                                r() === "asc" ? F(vt) : F(R, !1);
                              });
                            }
                            w(ye, Fe);
                          };
                          ee(ne, (ye) => {
                            n() === o(B).field && r() !== null && ye(Re);
                          });
                        }
                        w(we, j);
                      };
                      ee(K, (we) => {
                        o(B).sortable && we(oe);
                      });
                    }
                    Oe(() => {
                      Ut(ue, `min-width: ${o(B).minWidth ?? 0 ?? ""}`), it(ie, o(B).headerName);
                    }), w(Ee, ue);
                  },
                  $$slots: { default: !0 }
                });
              }), w(U, Q);
            },
            $$slots: { default: !0 }
          });
          var N = be(te, 2);
          {
            var k = (U) => {
              Ys(U, {
                class: "header-filter-row",
                children: (X, Q) => {
                  var P = $(), L = Z(P);
                  Dn(L, 17, l, Ei, (B, Ee) => {
                    za(B, {
                      children: (Ie, ue) => {
                        var Se = $(), V = Z(Se);
                        {
                          var ie = (K) => {
                            var oe = Bb(), we = Z(oe);
                            {
                              var j = (ye) => {
                                var Fe = Nb();
                                Fe.__input = [Hb, E], Oe(() => Ar(Fe, "placeholder", `${f()} ${o(Ee).headerName}`)), ba(Fe, () => m[o(Ee).field], ($e) => m[o(Ee).field] = $e), w(ye, Fe);
                              };
                              ee(we, (ye) => {
                                o(Ee).filterType === "text" && ye(j);
                              });
                            }
                            var ne = be(we, 2);
                            {
                              var Re = (ye) => {
                                var Fe = kb();
                                Fe.__input = [Ub, E], Oe(() => Ar(Fe, "placeholder", `${f()} ${o(Ee).headerName}`)), ba(Fe, () => m[o(Ee).field], ($e) => m[o(Ee).field] = $e), w(ye, Fe);
                              };
                              ee(ne, (ye) => {
                                o(Ee).filterType === "number" && ye(Re);
                              });
                            }
                            w(K, oe);
                          };
                          ee(V, (K) => {
                            o(Ee).filter && K(ie);
                          });
                        }
                        w(Ie, Se);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w(X, P);
                },
                $$slots: { default: !0 }
              });
            };
            ee(N, (U) => {
              o(y) && U(k);
            });
          }
          w(W, M);
        },
        $$slots: { default: !0 }
      });
      var H = be(x, 2);
      Bg(H, {
        children: (W, D) => {
          var M = $(), te = Z(M);
          Dn(te, 1, i, Ei, (N, k) => {
            Ys(N, {
              children: (U, X) => {
                var Q = $(), P = Z(Q);
                Dn(P, 17, l, (L) => L.field, (L, B) => {
                  var Ee = $(), Ie = Z(Ee);
                  {
                    var ue = (V) => {
                      za(V, {
                        children: (ie, K) => {
                          var oe = Vb();
                          Dn(oe, 21, h, Ei, (we, j) => {
                            var ne = $(), Re = Z(ne);
                            {
                              var ye = ($e) => {
                                fs($e, {
                                  get content() {
                                    return o(j).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (vt, R) => {
                                    {
                                      let F = /* @__PURE__ */ ge(() => o(j).disabled(o(k)));
                                      Dm(vt, {
                                        get iconComponent() {
                                          return o(j).iconComponent;
                                        },
                                        get iconStyles() {
                                          return o(j).iconStyles;
                                        },
                                        callback: () => o(j).callback(o(k)),
                                        get disabled() {
                                          return o(F);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, Fe = ($e) => {
                                fs($e, {
                                  get content() {
                                    return o(j).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (vt, R) => {
                                    {
                                      let F = /* @__PURE__ */ ge(() => o(j).disabled(o(k)));
                                      wm(vt, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => o(j).callback(o(k)),
                                        get disabled() {
                                          return o(F);
                                        },
                                        children: (de, Ge) => {
                                          var Ot = $(), Rt = Z(Ot);
                                          {
                                            var Ln = (ce) => {
                                              rg(ce, { svgStyles: "margin: unset" });
                                            }, ve = (ce) => {
                                              var G = $(), Y = Z(G);
                                              {
                                                var Me = (nt) => {
                                                  zc(nt, { svgStyles: "margin: unset" });
                                                }, ot = (nt) => {
                                                  var Et = $(), kt = Z(Et);
                                                  {
                                                    var cr = (dt) => {
                                                      sg(dt, { svgStyles: "margin: unset" });
                                                    }, ut = (dt) => {
                                                      var Mt = $(), Nn = Z(Mt);
                                                      {
                                                        var fi = (Pe) => {
                                                          lg(Pe, { svgStyles: "margin: unset" });
                                                        }, Un = (Pe) => {
                                                          var et = $(), Ye = Z(et);
                                                          {
                                                            var Ct = (We) => {
                                                              fg(We, { svgStyles: "margin: unset" });
                                                            }, dn = (We) => {
                                                              var mt = $(), At = Z(mt);
                                                              {
                                                                var Ke = (Bt) => {
                                                                  vg(Bt, { svgStyles: "margin: unset" });
                                                                }, St = (Bt) => {
                                                                  var zt = $(), bt = Z(zt);
                                                                  {
                                                                    var Tt = (pt) => {
                                                                      pg(pt, { svgStyles: "margin: unset" });
                                                                    }, an = (pt) => {
                                                                      cg(pt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    ee(
                                                                      bt,
                                                                      (pt) => {
                                                                        o(j).icon === "delete" ? pt(Tt) : pt(an, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(Bt, zt);
                                                                };
                                                                ee(
                                                                  At,
                                                                  (Bt) => {
                                                                    o(j).icon === "edit" ? Bt(Ke) : Bt(St, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(We, mt);
                                                            };
                                                            ee(
                                                              Ye,
                                                              (We) => {
                                                                o(j).icon === "remove" ? We(Ct) : We(dn, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(Pe, et);
                                                        };
                                                        ee(
                                                          Nn,
                                                          (Pe) => {
                                                            o(j).icon === "find-in-page" ? Pe(fi) : Pe(Un, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(dt, Mt);
                                                    };
                                                    ee(
                                                      kt,
                                                      (dt) => {
                                                        o(j).icon === "download" ? dt(cr) : dt(ut, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(nt, Et);
                                                };
                                                ee(
                                                  Y,
                                                  (nt) => {
                                                    o(j).icon === "cancel" ? nt(Me) : nt(ot, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              w(ce, G);
                                            };
                                            ee(Rt, (ce) => {
                                              o(j).icon === "add" ? ce(Ln) : ce(ve, !1);
                                            });
                                          }
                                          w(de, Ot);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              ee(Re, ($e) => {
                                o(j).iconComponent ? $e(ye) : $e(Fe, !1);
                              });
                            }
                            w(we, ne);
                          }), w(ie, oe);
                        },
                        $$slots: { default: !0 }
                      });
                    }, Se = (V) => {
                      za(V, {
                        get numeric() {
                          return o(B).numeric;
                        },
                        get style() {
                          return o(B).cellStyle;
                        },
                        children: (ie, K) => {
                          var oe = $(), we = Z(oe);
                          {
                            var j = (Re) => {
                              const ye = /* @__PURE__ */ ge(() => o(B).cellRenderer);
                              var Fe = $(), $e = Z(Fe);
                              ui($e, () => o(ye), (vt, R) => {
                                R(vt, at(
                                  {
                                    get row() {
                                      return o(k);
                                    },
                                    get value() {
                                      return o(k)[o(B).field];
                                    },
                                    get col() {
                                      return o(B);
                                    }
                                  },
                                  () => o(B).cellRendererProps ?? {}
                                ));
                              }), w(Re, Fe);
                            }, ne = (Re) => {
                              var ye = $(), Fe = Z(ye);
                              {
                                var $e = (R) => {
                                  var F = Ht();
                                  Oe((de) => it(F, de), [
                                    () => o(B).valueFormatter(o(k)[o(B).field])
                                  ]), w(R, F);
                                }, vt = (R) => {
                                  var F = Ht();
                                  Oe(() => it(F, o(k)[o(B).field] ?? "")), w(R, F);
                                };
                                ee(
                                  Fe,
                                  (R) => {
                                    o(B).valueFormatter ? R($e) : R(vt, !1);
                                  },
                                  !0
                                );
                              }
                              w(Re, ye);
                            };
                            ee(we, (Re) => {
                              o(B).cellRenderer ? Re(j) : Re(ne, !1);
                            });
                          }
                          w(ie, oe);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ee(Ie, (V) => {
                      o(B).field === "actions" ? V(ue) : V(Se, !1);
                    });
                  }
                  w(L, Ee);
                }), w(U, Q);
              },
              $$slots: { default: !0 }
            });
          }), w(W, M);
        },
        $$slots: { default: !0 }
      }), w(S, C);
    },
    $$slots: { progress: !0, default: !0 }
  }), Te(), s();
}
Cn(["input"]);
function gt(t) {
  return typeof t == "function";
}
function qo(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Qs = qo(function(t) {
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
var Da = function() {
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
            for (var c = Lt(s), u = c.next(); !u.done; u = c.next()) {
              var l = u.value;
              l.remove(this);
            }
          } catch (p) {
            e = { error: p };
          } finally {
            try {
              u && !u.done && (n = c.return) && n.call(c);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          s.remove(this);
      var d = this.initialTeardown;
      if (gt(d))
        try {
          d();
        } catch (p) {
          a = p instanceof Qs ? p.errors : [p];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Lt(h), m = f.next(); !m.done; m = f.next()) {
            var v = m.value;
            try {
              $l(v);
            } catch (p) {
              a = a ?? [], p instanceof Qs ? a = Wn(Wn([], xr(a)), xr(p.errors)) : a.push(p);
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
        throw new Qs(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        $l(e);
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
}(), Zc = Da.EMPTY;
function Yc(t) {
  return t instanceof Da || t && "closed" in t && gt(t.remove) && gt(t.add) && gt(t.unsubscribe);
}
function $l(t) {
  gt(t) ? t() : t.unsubscribe();
}
var qb = {
  Promise: void 0
}, zb = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Wn([t, e], xr(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Qc(t) {
  zb.setTimeout(function() {
    throw t;
  });
}
function eu() {
}
function es(t) {
  t();
}
var zo = function(t) {
  Je(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Yc(n) && n.add(r)) : r.destination = Kb, r;
  }
  return e.create = function(n, r, i) {
    return new Ea(n, r, i);
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
}(Da), Wb = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Xa(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Xa(r);
      }
    else
      Xa(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Xa(n);
      }
  }, t;
}(), Ea = function(t) {
  Je(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return gt(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new Wb(s), a;
  }
  return e;
}(zo);
function Xa(t) {
  Qc(t);
}
function Xb(t) {
  throw t;
}
var Kb = {
  closed: !0,
  next: eu,
  error: Xb,
  complete: eu
}, Wo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Ji(t) {
  return t;
}
function Zb(t) {
  return t.length === 0 ? Ji : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var tn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Qb(e) ? e : new Ea(e, n, r);
    return es(function() {
      var s = i, c = s.operator, u = s.source;
      a.add(c ? c.call(a, u) : u ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (n) {
      e.error(n);
    }
  }, t.prototype.forEach = function(e, n) {
    var r = this;
    return n = tu(n), new n(function(i, a) {
      var s = new Ea({
        next: function(c) {
          try {
            e(c);
          } catch (u) {
            a(u), s.unsubscribe();
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
  }, t.prototype[Wo] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Zb(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = tu(e), new e(function(r, i) {
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
function tu(t) {
  var e;
  return (e = t ?? qb.Promise) !== null && e !== void 0 ? e : Promise;
}
function Yb(t) {
  return t && gt(t.next) && gt(t.error) && gt(t.complete);
}
function Qb(t) {
  return t && t instanceof zo || Yb(t) && Yc(t);
}
function Jb(t) {
  return gt(t == null ? void 0 : t.lift);
}
function wn(t) {
  return function(e) {
    if (Jb(e))
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
function xn(t, e, n, r, i) {
  return new $b(t, e, n, r, i);
}
var $b = function(t) {
  Je(e, t);
  function e(n, r, i, a, s, c) {
    var u = t.call(this, n) || this;
    return u.onFinalize = s, u.shouldUnsubscribe = c, u._next = r ? function(l) {
      try {
        r(l);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, u._error = a ? function(l) {
      try {
        a(l);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, u._complete = i ? function() {
      try {
        i();
      } catch (l) {
        n.error(l);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, u;
  }
  return e.prototype.unsubscribe = function() {
    var n;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var r = this.closed;
      t.prototype.unsubscribe.call(this), !r && ((n = this.onFinalize) === null || n === void 0 || n.call(this));
    }
  }, e;
}(zo), e_ = qo(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Os = function(t) {
  Je(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new nu(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new e_();
  }, e.prototype.next = function(n) {
    var r = this;
    es(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Lt(r.currentObservers), c = s.next(); !c.done; c = s.next()) {
            var u = c.value;
            u.next(n);
          }
        } catch (l) {
          i = { error: l };
        } finally {
          try {
            c && !c.done && (a = s.return) && a.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(n) {
    var r = this;
    es(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    es(function() {
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
    var r = this, i = this, a = i.hasError, s = i.isStopped, c = i.observers;
    return a || s ? Zc : (this.currentObservers = null, c.push(n), new Da(function() {
      r.currentObservers = null, vs(c, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new tn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new nu(n, r);
  }, e;
}(tn), nu = function(t) {
  Je(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Zc;
  }, e;
}(Os), ru = function(t) {
  Je(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r._value = n, r;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._subscribe = function(n) {
    var r = t.prototype._subscribe.call(this, n);
    return !r.closed && n.next(this._value), r;
  }, e.prototype.getValue = function() {
    var n = this, r = n.hasError, i = n.thrownError, a = n._value;
    if (r)
      throw i;
    return this._throwIfClosed(), a;
  }, e.prototype.next = function(n) {
    t.prototype.next.call(this, this._value = n);
  }, e;
}(Os), Xo = {
  now: function() {
    return (Xo.delegate || Date).now();
  },
  delegate: void 0
}, t_ = function(t) {
  Je(e, t);
  function e(n, r, i) {
    n === void 0 && (n = 1 / 0), r === void 0 && (r = 1 / 0), i === void 0 && (i = Xo);
    var a = t.call(this) || this;
    return a._bufferSize = n, a._windowTime = r, a._timestampProvider = i, a._buffer = [], a._infiniteTimeWindow = !0, a._infiniteTimeWindow = r === 1 / 0, a._bufferSize = Math.max(1, n), a._windowTime = Math.max(1, r), a;
  }
  return e.prototype.next = function(n) {
    var r = this, i = r.isStopped, a = r._buffer, s = r._infiniteTimeWindow, c = r._timestampProvider, u = r._windowTime;
    i || (a.push(n), !s && a.push(c.now() + u)), this._trimBuffer(), t.prototype.next.call(this, n);
  }, e.prototype._subscribe = function(n) {
    this._throwIfClosed(), this._trimBuffer();
    for (var r = this._innerSubscribe(n), i = this, a = i._infiniteTimeWindow, s = i._buffer, c = s.slice(), u = 0; u < c.length && !n.closed; u += a ? 1 : 2)
      n.next(c[u]);
    return this._checkFinalizedStatuses(n), r;
  }, e.prototype._trimBuffer = function() {
    var n = this, r = n._bufferSize, i = n._timestampProvider, a = n._buffer, s = n._infiniteTimeWindow, c = (s ? 1 : 2) * r;
    if (r < 1 / 0 && c < a.length && a.splice(0, a.length - c), !s) {
      for (var u = i.now(), l = 0, d = 1; d < a.length && a[d] <= u; d += 2)
        l = d;
      l && a.splice(0, l + 1);
    }
  }, e;
}(Os), n_ = function(t) {
  Je(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Da), iu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Wn([t, e], xr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, r_ = function(t) {
  Je(e, t);
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
    return i === void 0 && (i = 0), iu.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && iu.clearInterval(r);
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
}(n_), au = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = Xo.now, t;
}(), i_ = function(t) {
  Je(e, t);
  function e(n, r) {
    r === void 0 && (r = au.now);
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
}(au), Ko = new i_(r_), a_ = Ko, s_ = new tn(function(t) {
  return t.complete();
});
function Jc(t) {
  return t && gt(t.schedule);
}
function $c(t) {
  return t[t.length - 1];
}
function o_(t) {
  return gt($c(t)) ? t.pop() : void 0;
}
function Rs(t) {
  return Jc($c(t)) ? t.pop() : void 0;
}
var ed = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function td(t) {
  return gt(t == null ? void 0 : t.then);
}
function nd(t) {
  return gt(t[Wo]);
}
function rd(t) {
  return Symbol.asyncIterator && gt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function id(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function l_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var ad = l_();
function sd(t) {
  return gt(t == null ? void 0 : t[ad]);
}
function od(t) {
  return Sh(this, arguments, function() {
    var n, r, i, a;
    return Fo(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Ci(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, Ci(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Ci(i)];
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
function ld(t) {
  return gt(t == null ? void 0 : t.getReader);
}
function Yn(t) {
  if (t instanceof tn)
    return t;
  if (t != null) {
    if (nd(t))
      return u_(t);
    if (ed(t))
      return c_(t);
    if (td(t))
      return d_(t);
    if (rd(t))
      return ud(t);
    if (sd(t))
      return f_(t);
    if (ld(t))
      return h_(t);
  }
  throw id(t);
}
function u_(t) {
  return new tn(function(e) {
    var n = t[Wo]();
    if (gt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function c_(t) {
  return new tn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function d_(t) {
  return new tn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Qc);
  });
}
function f_(t) {
  return new tn(function(e) {
    var n, r;
    try {
      for (var i = Lt(t), a = i.next(); !a.done; a = i.next()) {
        var s = a.value;
        if (e.next(s), e.closed)
          return;
      }
    } catch (c) {
      n = { error: c };
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
function ud(t) {
  return new tn(function(e) {
    v_(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function h_(t) {
  return ud(od(t));
}
function v_(t, e) {
  var n, r, i, a;
  return fc(this, void 0, void 0, function() {
    var s, c;
    return Fo(this, function(u) {
      switch (u.label) {
        case 0:
          u.trys.push([0, 5, 6, 11]), n = xh(t), u.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = u.sent(), !!r.done) return [3, 4];
          if (s = r.value, e.next(s), e.closed)
            return [2];
          u.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return c = u.sent(), i = { error: c }, [3, 11];
        case 6:
          return u.trys.push([6, , 9, 10]), r && !r.done && (a = n.return) ? [4, a.call(n)] : [3, 8];
        case 7:
          u.sent(), u.label = 8;
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
function Sr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function cd(t, e) {
  return e === void 0 && (e = 0), wn(function(n, r) {
    n.subscribe(xn(r, function(i) {
      return Sr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return Sr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return Sr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function dd(t, e) {
  return e === void 0 && (e = 0), wn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function m_(t, e) {
  return Yn(t).pipe(dd(e), cd(e));
}
function p_(t, e) {
  return Yn(t).pipe(dd(e), cd(e));
}
function g_(t, e) {
  return new tn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function b_(t, e) {
  return new tn(function(n) {
    var r;
    return Sr(n, e, function() {
      r = t[ad](), Sr(n, e, function() {
        var i, a, s;
        try {
          i = r.next(), a = i.value, s = i.done;
        } catch (c) {
          n.error(c);
          return;
        }
        s ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return gt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function fd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new tn(function(n) {
    Sr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      Sr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function __(t, e) {
  return fd(od(t), e);
}
function y_(t, e) {
  if (t != null) {
    if (nd(t))
      return m_(t, e);
    if (ed(t))
      return g_(t, e);
    if (td(t))
      return p_(t, e);
    if (rd(t))
      return fd(t, e);
    if (sd(t))
      return b_(t, e);
    if (ld(t))
      return __(t, e);
  }
  throw id(t);
}
function Pa(t, e) {
  return e ? y_(t, e) : Yn(t);
}
function ri() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Rs(t);
  return Pa(t, n);
}
function I_(t) {
  return t instanceof Date && !isNaN(t);
}
function Zt(t, e) {
  return wn(function(n, r) {
    var i = 0;
    n.subscribe(xn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
var E_ = Array.isArray;
function A_(t, e) {
  return E_(e) ? t.apply(void 0, Wn([], xr(e))) : t(e);
}
function S_(t) {
  return Zt(function(e) {
    return A_(t, e);
  });
}
var x_ = Array.isArray, C_ = Object.getPrototypeOf, T_ = Object.prototype, w_ = Object.keys;
function L_(t) {
  if (t.length === 1) {
    var e = t[0];
    if (x_(e))
      return { args: e, keys: null };
    if (O_(e)) {
      var n = w_(e);
      return {
        args: n.map(function(r) {
          return e[r];
        }),
        keys: n
      };
    }
  }
  return { args: t, keys: null };
}
function O_(t) {
  return t && typeof t == "object" && C_(t) === T_;
}
function R_(t, e) {
  return t.reduce(function(n, r, i) {
    return n[r] = e[i], n;
  }, {});
}
function su() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Rs(t), r = o_(t), i = L_(t), a = i.args, s = i.keys;
  if (a.length === 0)
    return Pa([], n);
  var c = new tn(M_(a, n, s ? function(u) {
    return R_(s, u);
  } : Ji));
  return r ? c.pipe(S_(r)) : c;
}
function M_(t, e, n) {
  return n === void 0 && (n = Ji), function(r) {
    ou(e, function() {
      for (var i = t.length, a = new Array(i), s = i, c = i, u = function(d) {
        ou(e, function() {
          var h = Pa(t[d], e), f = !1;
          h.subscribe(xn(r, function(m) {
            a[d] = m, f || (f = !0, c--), c || r.next(n(a.slice()));
          }, function() {
            --s || r.complete();
          }));
        }, r);
      }, l = 0; l < i; l++)
        u(l);
    }, r);
  };
}
function ou(t, e, n) {
  t ? Sr(n, t, e) : e();
}
function D_(t, e, n, r, i, a, s, c) {
  var u = [], l = 0, d = 0, h = !1, f = function() {
    h && !u.length && !l && e.complete();
  }, m = function(p) {
    return l < r ? v(p) : u.push(p);
  }, v = function(p) {
    l++;
    var b = !1;
    Yn(n(p, d++)).subscribe(xn(e, function(y) {
      e.next(y);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          l--;
          for (var y = function() {
            var E = u.shift();
            s || v(E);
          }; u.length && l < r; )
            y();
          f();
        } catch (E) {
          e.error(E);
        }
    }));
  };
  return t.subscribe(xn(e, m, function() {
    h = !0, f();
  })), function() {
  };
}
function Aa(t, e, n) {
  return n === void 0 && (n = 1 / 0), gt(e) ? Aa(function(r, i) {
    return Zt(function(a, s) {
      return e(r, a, i, s);
    })(Yn(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), wn(function(r, i) {
    return D_(r, i, t, n);
  }));
}
function P_(t) {
  return Aa(Ji, t);
}
function H_() {
  return P_(1);
}
function lu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return H_()(Pa(t, Rs(t)));
}
function N_(t, e, n) {
  n === void 0 && (n = a_);
  var r = -1;
  return e != null && (Jc(e) ? n = e : r = e), new tn(function(i) {
    var a = I_(t) ? +t - n.now() : t;
    a < 0 && (a = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, a);
  });
}
function ii(t) {
  return wn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(xn(n, void 0, void 0, function(s) {
      a = Yn(t(s, ii(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function U_(t, e) {
  return gt(e) ? Aa(t, e, 1) : Aa(t, 1);
}
function k_(t, e) {
  return e === void 0 && (e = Ko), wn(function(n, r) {
    var i = null, a = null, s = null, c = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var l = a;
        a = null, r.next(l);
      }
    };
    function u() {
      var l = s + t, d = e.now();
      if (d < l) {
        i = this.schedule(void 0, l - d), r.add(i);
        return;
      }
      c();
    }
    n.subscribe(xn(r, function(l) {
      a = l, s = e.now(), i || (i = e.schedule(u, t), r.add(i));
    }, function() {
      c(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function qi(t) {
  return t <= 0 ? function() {
    return s_;
  } : wn(function(e, n) {
    var r = 0;
    e.subscribe(xn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function B_(t) {
  return Zt(function() {
    return t;
  });
}
function F_(t, e) {
  return Aa(function(n, r) {
    return Yn(t(n, r)).pipe(qi(1), B_(n));
  });
}
function V_(t, e) {
  e === void 0 && (e = Ko);
  var n = N_(t, e);
  return F_(function() {
    return n;
  });
}
function G_(t, e) {
  return e === void 0 && (e = Ji), t = t ?? j_, wn(function(n, r) {
    var i, a = !0;
    n.subscribe(xn(r, function(s) {
      var c = e(s);
      (a || !t(i, c)) && (a = !1, i = c, r.next(s));
    }));
  });
}
function j_(t, e) {
  return t === e;
}
function q_(t) {
  t === void 0 && (t = {});
  var e = t.connector, n = e === void 0 ? function() {
    return new Os();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, a = t.resetOnComplete, s = a === void 0 ? !0 : a, c = t.resetOnRefCountZero, u = c === void 0 ? !0 : c;
  return function(l) {
    var d, h, f, m = 0, v = !1, p = !1, b = function() {
      h == null || h.unsubscribe(), h = void 0;
    }, y = function() {
      b(), d = f = void 0, v = p = !1;
    }, E = function() {
      var A = d;
      y(), A == null || A.unsubscribe();
    };
    return wn(function(A, _) {
      m++, !p && !v && b();
      var I = f = f ?? n();
      _.add(function() {
        m--, m === 0 && !p && !v && (h = Js(E, u));
      }), I.subscribe(_), !d && m > 0 && (d = new Ea({
        next: function(S) {
          return I.next(S);
        },
        error: function(S) {
          p = !0, b(), h = Js(y, i, S), I.error(S);
        },
        complete: function() {
          v = !0, b(), h = Js(y, s), I.complete();
        }
      }), Yn(A).subscribe(d));
    })(l);
  };
}
function Js(t, e) {
  for (var n = [], r = 2; r < arguments.length; r++)
    n[r - 2] = arguments[r];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new Ea({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return Yn(e.apply(void 0, Wn([], xr(n)))).subscribe(i);
  }
}
function uu(t, e, n) {
  var r, i = !1;
  return r = t, q_({
    connector: function() {
      return new t_(r, e, n);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: i
  });
}
function cu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Rs(t);
  return wn(function(r, i) {
    (n ? lu(t, r, n) : lu(t, r)).subscribe(i);
  });
}
function du(t, e) {
  return wn(function(n, r) {
    var i = null, a = 0, s = !1, c = function() {
      return s && !i && r.complete();
    };
    n.subscribe(xn(r, function(u) {
      i == null || i.unsubscribe();
      var l = 0, d = a++;
      Yn(t(u, d)).subscribe(i = xn(r, function(h) {
        return r.next(e ? e(u, h, d, l++) : h);
      }, function() {
        i = null, c();
      }));
    }, function() {
      s = !0, c();
    }));
  });
}
function fu(t, e, n) {
  var r = gt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? wn(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var c = !0;
    i.subscribe(xn(a, function(u) {
      var l;
      (l = r.next) === null || l === void 0 || l.call(r, u), a.next(u);
    }, function() {
      var u;
      c = !1, (u = r.complete) === null || u === void 0 || u.call(r), a.complete();
    }, function(u) {
      var l;
      c = !1, (l = r.error) === null || l === void 0 || l.call(r, u), a.error(u);
    }, function() {
      var u, l;
      c && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)), (l = r.finalize) === null || l === void 0 || l.call(r);
    }));
  }) : Ji;
}
function hd(t) {
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
var z_ = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, s = n.responseType;
    this.status = a ?? 0, this.responseType = s ?? "";
    var c = n.getAllResponseHeaders();
    this.responseHeaders = c ? c.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = hd(n);
    var u = e.loaded, l = e.total;
    this.loaded = u, this.total = l;
  }
  return t;
}(), ms = qo(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = hd(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), W_ = function() {
  function t(e, n) {
    return ms.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(ms.prototype), t;
}();
function X_(t, e) {
  return di({ method: "GET", url: t, headers: e });
}
function K_(t, e, n) {
  return di({ method: "POST", url: t, body: e, headers: n });
}
function Z_(t, e) {
  return di({ method: "DELETE", url: t, headers: e });
}
function Y_(t, e, n) {
  return di({ method: "PUT", url: t, body: e, headers: n });
}
function Q_(t, e, n) {
  return di({ method: "PATCH", url: t, body: e, headers: n });
}
var J_ = Zt(function(t) {
  return t.response;
});
function $_(t, e) {
  return J_(di({
    method: "GET",
    url: t,
    headers: e
  }));
}
var di = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return ty(n);
  };
  return t.get = X_, t.post = K_, t.delete = Z_, t.put = Y_, t.patch = Q_, t.getJSON = $_, t;
}(), ey = "upload", hu = "download", $s = "loadstart", eo = "progress", vu = "load";
function ty(t) {
  return new tn(function(e) {
    var n, r, i = fe({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, s = i.body, c = i.headers, u = i.url;
    if (!u)
      throw new TypeError("url is required");
    if (a) {
      var l;
      if (u.includes("?")) {
        var d = u.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        l = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(U, X) {
          return l.set(X, U);
        }), u = d[0] + "?" + l;
      } else
        l = new URLSearchParams(a), u = u + "?" + l;
    }
    var h = {};
    if (c)
      for (var f in c)
        c.hasOwnProperty(f) && (h[f.toLowerCase()] = c[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var v = i.withCredentials, p = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((v || !m) && p && b) {
      var y = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      y && (h[b] = y);
    }
    var E = ny(s, h), A = fe(fe({}, i), {
      url: u,
      headers: h,
      body: E
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var I = t.progressSubscriber, S = t.includeDownloadProgress, T = S === void 0 ? !1 : S, C = t.includeUploadProgress, x = C === void 0 ? !1 : C, H = function(U, X) {
        _.addEventListener(U, function() {
          var Q, P = X();
          (Q = I == null ? void 0 : I.error) === null || Q === void 0 || Q.call(I, P), e.error(P);
        });
      };
      H("timeout", function() {
        return new W_(_, A);
      }), H("abort", function() {
        return new ms("aborted", _, A);
      });
      var W = function(U, X) {
        return new z_(X, _, A, U + "_" + X.type);
      }, D = function(U, X, Q) {
        U.addEventListener(X, function(P) {
          e.next(W(Q, P));
        });
      };
      x && [$s, eo, vu].forEach(function(U) {
        return D(_.upload, U, ey);
      }), I && [$s, eo].forEach(function(U) {
        return _.upload.addEventListener(U, function(X) {
          var Q;
          return (Q = I == null ? void 0 : I.next) === null || Q === void 0 ? void 0 : Q.call(I, X);
        });
      }), T && [$s, eo].forEach(function(U) {
        return D(_, U, hu);
      });
      var M = function(U) {
        var X = "ajax error" + (U ? " " + U : "");
        e.error(new ms(X, _, A));
      };
      _.addEventListener("error", function(U) {
        var X;
        (X = I == null ? void 0 : I.error) === null || X === void 0 || X.call(I, U), M();
      }), _.addEventListener(vu, function(U) {
        var X, Q, P = _.status;
        if (P < 400) {
          (X = I == null ? void 0 : I.complete) === null || X === void 0 || X.call(I);
          var L = void 0;
          try {
            L = W(hu, U);
          } catch (B) {
            e.error(B);
            return;
          }
          e.next(L), e.complete();
        } else
          (Q = I == null ? void 0 : I.error) === null || Q === void 0 || Q.call(I, U), M(P);
      });
    }
    var te = A.user, N = A.method, k = A.async;
    te ? _.open(N, u, k, te, A.password) : _.open(N, u, k), k && (_.timeout = A.timeout, _.responseType = A.responseType), "withCredentials" in _ && (_.withCredentials = A.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && _.setRequestHeader(f, h[f]);
    return E ? _.send(E) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function ny(t, e) {
  var n;
  if (!t || typeof t == "string" || ly(t) || uy(t) || iy(t) || ay(t) || sy(t) || cy(t))
    return t;
  if (oy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var ry = Object.prototype.toString;
function Zo(t, e) {
  return ry.call(t) === "[object " + e + "]";
}
function iy(t) {
  return Zo(t, "ArrayBuffer");
}
function ay(t) {
  return Zo(t, "File");
}
function sy(t) {
  return Zo(t, "Blob");
}
function oy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function ly(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function uy(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function cy(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class dy {
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
const fy = new dy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), hy = [fy], vy = hy[0].getUrl();
class Yo {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? vy;
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
class vd {
  constructor(e = new Yo()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${my(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => ri(n).pipe(
      Zt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      U_(
        (r) => di(r).pipe(
          Zt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Zt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Gt = (t) => encodeURIComponent(`${t}`), my = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Gt(e)}=${Gt(r)}`).join("&") : `${Gt(e)}=${Gt(n)}`
).join("&"), on = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class py extends vd {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: s, body: c }, u) {
    on(e, "id", "archiveResource"), on(n, "version", "archiveResource");
    const l = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...s != null ? { "X-filename": String(s) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", Gt(e)).replace("{version}", Gt(n)),
      method: "POST",
      headers: l,
      body: c
    }, u == null ? void 0 : u.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    on(e, "id", "archiveSclResource"), on(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", Gt(e)).replace("{version}", Gt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    on(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", Gt(e)),
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
class gy extends vd {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    on(e, "locationId", "assignResourceToLocation"), on(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Gt(e)).replace("{uuid}", Gt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    on(e, "location", "createLocation");
    const r = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations",
      method: "POST",
      headers: r,
      body: e
    }, n == null ? void 0 : n.responseOpts);
  }
  deleteLocation({ locationId: e }, n) {
    on(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Gt(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    on(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Gt(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocations({ page: e, pageSize: n }, r) {
    const i = {}, a = {};
    return e != null && (a.page = e), n != null && (a.pageSize = n), this.request({
      url: "/api/locations",
      method: "GET",
      headers: i,
      query: a
    }, r == null ? void 0 : r.responseOpts);
  }
  unassignResourceFromLocation({ locationId: e, uuid: n }, r) {
    on(e, "locationId", "unassignResourceFromLocation"), on(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Gt(e)).replace("{uuid}", Gt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    on(e, "locationId", "updateLocation"), on(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Gt(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class ca {
  constructor(e, n, r, i, a, s, c, u, l, d, h, f, m) {
    this._uuid = e, this._name = n, this._location = r, this._note = i, this._author = a, this._approver = s, this._type = c, this._voltage = u, this._modifiedAt = l, this._archivedAt = d, this._contentType = h, this._version = f, this._fields = m;
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
class qr {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new ca(
        Gr(),
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
      new ca(
        Gr(),
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
    return qr.instance || (qr.instance = new qr()), qr.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      qi(1),
      Zt((n) => n.resources),
      Zt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      ii(() => ri(this.dummySearchResults)),
      V_(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      qi(1),
      Zt((n) => n.versions),
      Zt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      ii(() => ri([
        new ca(
          Gr(),
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
          [{ key: "SOURCE_RESOURCE_ID", value: Gr() }]
        ),
        new ca(
          Gr(),
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
          [{ key: "SOURCE_RESOURCE_ID", value: Gr() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Pa(
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
    return new ca(
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
    const e = new Yo({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new py(e);
  }
}
class Si {
  constructor() {
    this.baseUrl = "/compas-scl-data-service";
  }
  static getInstance() {
    return Si.instance || (Si.instance = new Si()), Si.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      qi(1),
      ii(() => ri([
        {
          uuid: "912e83a1-f84e-4d0d-9432-b5381e2b9e0d",
          name: "Location 1",
          description: "",
          key: ""
        },
        {
          uuid: "b9d01044-7bc7-4430-93b3-86ff093319e6",
          name: "Location 2",
          description: "",
          key: ""
        },
        {
          uuid: "f8435ba3-0c92-4ea3-ade0-5d72458c95c7",
          name: "Location 3",
          description: "",
          key: ""
        }
      ]))
    );
  }
  generateApiClient() {
    const e = new Yo({
      basePath: this.baseUrl
      // accessToken: authInfo.token,
    });
    return new gy(e);
  }
}
function by(t, e) {
  Ce(e, !0);
  const n = qr.getInstance(), r = { store: Jt([]) };
  let i = /* @__PURE__ */ pe(!1);
  const a = [
    {
      headerName: "Type",
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Content type",
      field: "contentType",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Approver",
      field: "approver",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Author",
      field: "author",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Modifed",
      field: "modifiedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: c
    },
    {
      headerName: "Note",
      field: "note",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "Version",
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: "UUID",
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1,
      cellStyle: "font-weight: bold;",
      headerStyle: "font-weight: bold;"
    },
    {
      headerName: "",
      field: "actions",
      numeric: !1,
      filter: !1,
      filterType: "text",
      minWidth: "100px",
      sortable: !1
    }
  ], s = [
    {
      icon: "download",
      callback: (l) => u(l),
      disabled: () => !1
    }
  ];
  function c(l) {
    return new Date(l).toLocaleDateString();
  }
  st(() => {
    e.searchResult && n.retrieveArchivedResourceHistory(e.searchResult.uuid).pipe(qi(1), fu((l) => {
      r.store.set(l), z(i, !0);
    })).subscribe();
  });
  function u(l) {
    var h;
    let d;
    l.fields && l.fields.length && (d = (h = l.fields.find((f) => f.key === "SOURCE_RESOURCE_ID")) == null ? void 0 : h.value), n.findByUUIDAndVersion(d, l.type, l.version).pipe(
      qi(1),
      fu((f) => {
        const m = window.URL.createObjectURL(f), v = document.createElement("a");
        v.href = m, v.download = l.filename, v.style.display = "none", document.body.appendChild(v), v.click(), document.body.removeChild(v), window.URL.revokeObjectURL(m);
      }),
      ii((f) => (console.error(f), Ia.error("Download failed", "An error occurred while trying to download the resource.", 5e3), ri(void 0)))
    ).subscribe();
  }
  jb(t, {
    get columnDefs() {
      return a;
    },
    get store() {
      return r;
    },
    get loadingDone() {
      return o(i);
    },
    get rowActions() {
      return s;
    }
  }), Te();
}
var _y = /* @__PURE__ */ se("<span><!></span>"), yy = /* @__PURE__ */ se("<!> <br/>", 1), Iy = /* @__PURE__ */ se("<i> </i>"), Ey = /* @__PURE__ */ se('<div class="result-container"><div class="content"><!></div></div>');
function Ay(t, e) {
  Ce(e, !0);
  let n = g(e, "searchResults", 19, () => []), r = g(e, "noResourcesLabel", 3, "No resources found.");
  var i = Ey(), a = ae(i), s = ae(a);
  {
    var c = (l) => {
      var d = $(), h = Z(d);
      Dn(h, 17, n, (f) => f.uuid, (f, m) => {
        var v = yy(), p = Z(v);
        Wc(p, {
          get title() {
            return o(m).name;
          },
          open: !0,
          content: (y) => {
            var E = _y(), A = ae(E);
            by(A, {
              get searchResult() {
                return o(m);
              }
            }), w(y, E);
          },
          $$slots: { content: !0 }
        }), w(f, v);
      }), w(l, d);
    }, u = (l) => {
      var d = Iy(), h = ae(d);
      Oe(() => it(h, r())), w(l, d);
    };
    ee(s, (l) => {
      n().length ? l(c) : l(u, !1);
    });
  }
  w(t, i), Te();
}
em({ en: fm, de: sm });
var Sy = /* @__PURE__ */ se("<span><!></span>"), xy = /* @__PURE__ */ se('<!> <div class="separator svelte-1gp5xzm"></div>', 1), Cy = /* @__PURE__ */ se('<div class="oscd-app"><div class="search-filter svelte-1gp5xzm"><!></div> <div class="content-container svelte-1gp5xzm"><!></div></div> <!>', 1);
function Ty(t, e) {
  Ce(e, !0);
  const n = () => zn($v, "$_", r), [r, i] = ur(), a = qr.getInstance(), s = Si.getInstance();
  let c = /* @__PURE__ */ pe(_e(/* @__PURE__ */ new Map())), u = /* @__PURE__ */ pe(!0), l = /* @__PURE__ */ pe(_e(/* @__PURE__ */ new Map())), d = /* @__PURE__ */ pe(_e([
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
    { key: "to", label: "Date to", type: "date" },
    { key: "location", label: "Location", type: "select" }
  ])), h = /* @__PURE__ */ pe("");
  const f = new ru([]), m = new ru(""), v = m.pipe(
    cu(),
    // emit the initial value immediately
    du((D, M) => M === 0 ? [D] : m.pipe(k_(300)))
  ), p = s.listLocations().pipe(
    Zt((D) => {
      const M = new Map(D.map((N) => [N.uuid, N.name])), te = o(d).find((N) => N.key === "location");
      return te && (te.options = D.map((N) => ({ value: N.uuid, label: N.name }))), z(l, M, !0), M;
    }),
    ii((D) => (console.error("Error fetching locations:", D), Ia.error("Failed to load locations."), ri(/* @__PURE__ */ new Map()))),
    uu(1)
  );
  function b(D, M) {
    const te = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      from: null,
      to: null
    };
    return D.forEach((N) => {
      if (N.value) {
        if (N.type === "date") {
          const k = new Date(N.value);
          N.key === "from" && (te.from = k.toISOString()), N.key === "to" && (k.setHours(23, 59, 59, 999), te.to = k.toISOString());
          return;
        }
        N.key in te && (te[N.key] = N.value);
      }
    }), M && M.trim() !== "" && (te.name = M.trim()), te;
  }
  const E = su([f, v]).pipe(G_((D, M) => JSON.stringify(D) === JSON.stringify(M)), Zt(([D, M]) => b(D, M))).pipe(
    du((D) => su({
      results: a.searchArchive(D).pipe(ii((M) => (console.error("Search error:", M), Ia.error("Search failed. Please try again later."), ri([])))),
      locations: p
    }).pipe(
      Zt(({ results: M, locations: te }) => {
        const N = /* @__PURE__ */ new Map();
        for (const k of M) {
          const U = k.location ?? "Default";
          N.has(U) || N.set(U, []), N.get(U).push(k);
        }
        return { grouped: N, locations: te };
      }),
      Zt((M) => ({ loading: !1, ...M })),
      cu({ loading: !0 })
      // loading state at start of each search
    )),
    uu(1)
  );
  st(() => {
    const D = E.subscribe((M) => {
      z(u, M.loading, !0), M.loading || (z(c, M.grouped, !0), z(l, M.locations, !0));
    });
    return () => D.unsubscribe();
  });
  var A = Cy(), _ = Z(A), I = ae(_), S = ae(I);
  Ob(S, {
    searchLabel: "Search file name...",
    onFilterChange: () => f.next(o(d)),
    onSearchInput: () => m.next(o(h)),
    get filters() {
      return o(d);
    },
    set filters(D) {
      z(d, D, !0);
    },
    get searchText() {
      return o(h);
    },
    set searchText(D) {
      z(h, D, !0);
    }
  });
  var T = be(I, 2), C = ae(T);
  {
    var x = (D) => {
      Kc(D, { indeterminate: !0 });
    }, H = (D) => {
      var M = $(), te = Z(M);
      {
        var N = (k) => {
          var U = $(), X = Z(U);
          Dn(X, 18, () => o(c), (Q) => Q, (Q, P) => {
            var L = xy(), B = Z(L);
            {
              const Ee = (ue) => {
                var Se = Sy(), V = ae(Se);
                {
                  let ie = /* @__PURE__ */ ge(() => n()("no_resources_found"));
                  Ay(V, {
                    get searchResults() {
                      return P[1];
                    },
                    get noResourcesLabel() {
                      return o(ie);
                    }
                  });
                }
                w(ue, Se);
              };
              let Ie = /* @__PURE__ */ ge(() => o(l).get(P[0]) ?? "Unknown");
              Wc(B, {
                open: !0,
                get title() {
                  return o(Ie);
                },
                content: Ee,
                $$slots: { content: !0 }
              });
            }
            w(Q, L);
          }), w(k, U);
        };
        ee(te, (k) => {
          o(c).size && k(N);
        });
      }
      w(D, M);
    };
    ee(C, (D) => {
      o(u) ? D(x) : D(H, !1);
    });
  }
  var W = be(_, 2);
  db(W, {}), w(t, A), Te(), i();
}
const md = "archive-explorer", pd = "0.0.1";
var wy = /* @__PURE__ */ se('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Ly(t, e) {
  Ce(e, !0);
  let n = g(e, "dev", 3, !1);
  var r = wy(), i = Z(r);
  {
    var a = (u) => {
      Ty(u, {});
    };
    ee(i, (u) => {
      (e.doc || n()) && u(a);
    });
  }
  var s = be(i, 2), c = be(s, 2);
  Oe(() => {
    pl(s, md), pl(c, pd);
  }), w(t, r), Te();
}
var Di;
class Py extends HTMLElement {
  constructor() {
    super();
    Qe(this, Di);
    De(this, Di, /* @__PURE__ */ pe(_e({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return o(J(this, Di));
  }
  set props(n) {
    z(J(this, Di), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Hf(Ly, { target: this.shadowRoot, props: this.props });
    const n = Oy();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this._editCount = n, this.props.editCount = n;
  }
}
Di = new WeakMap();
function Oy() {
  const t = `${md}-v${pd}-style`, e = Ry(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function Ry() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  Py as default
};
