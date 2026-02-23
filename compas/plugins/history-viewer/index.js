var Od = Object.defineProperty;
var rl = (t) => {
  throw TypeError(t);
};
var Ld = (t, e, n) => e in t ? Od(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var pi = (t, e, n) => Ld(t, typeof e != "symbol" ? e + "" : e, n), Hs = (t, e, n) => e.has(t) || rl("Cannot " + n);
var re = (t, e, n) => (Hs(t, e, "read from private field"), n ? n.call(t) : e.get(t)), et = (t, e, n) => e.has(t) ? rl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), He = (t, e, n, r) => (Hs(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Wt = (t, e, n) => (Hs(t, e, "access private method"), n);
const Nt = Symbol(), Rd = "http://www.w3.org/1999/xhtml", Md = "http://www.w3.org/2000/svg", Dd = "@attach", _u = !1;
var Is = Array.isArray, Hd = Array.prototype.indexOf, wo = Array.from, es = Object.defineProperty, Cr = Object.getOwnPropertyDescriptor, yu = Object.getOwnPropertyDescriptors, Pd = Object.prototype, Nd = Array.prototype, Oo = Object.getPrototypeOf, il = Object.isExtensible;
function Ai(t) {
  return typeof t == "function";
}
const ve = () => {
};
function Ud(t) {
  return t();
}
function ts(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Iu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const rn = 2, Lo = 4, Es = 8, Or = 16, hr = 32, ai = 64, Ro = 128, Cn = 256, ns = 512, Kt = 1024, pn = 2048, Lr = 4096, Nn = 8192, si = 16384, Ss = 32768, Rr = 65536, al = 1 << 17, Fd = 1 << 18, Xi = 1 << 19, Eu = 1 << 20, to = 1 << 21, As = 1 << 22, Qr = 1 << 23, Kn = Symbol("$state"), Su = Symbol("legacy props"), kd = Symbol(""), Ci = new class extends Error {
  constructor() {
    super(...arguments);
    pi(this, "name", "StaleReactionError");
    pi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Mo(t) {
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
function Do(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Cu(t) {
  return !Do(t, this.v);
}
let Ki = !1, $d = !1;
function ef() {
  Ki = !0;
}
let ot = null;
function Fi(t) {
  ot = t;
}
function me(t) {
  return (
    /** @type {T} */
    xu().get(t)
  );
}
function oe(t, e) {
  return xu().set(t, e), e;
}
function xe(t, e = !1, n) {
  ot = {
    p: ot,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Ki && !e ? { s: null, u: null, $: [] } : null
  };
}
function Te(t) {
  var e = (
    /** @type {ComponentContext} */
    ot
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      ju(r);
  }
  return t !== void 0 && (e.x = t), ot = e.p, t ?? /** @type {T} */
  {};
}
function xa() {
  return !Ki || ot !== null && ot.l === null;
}
function xu(t) {
  return ot === null && Mo(), ot.c ?? (ot.c = new Map(tf(ot) || void 0));
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
let zr = [];
function Tu() {
  var t = zr;
  zr = [], ts(t);
}
function fr(t) {
  if (zr.length === 0 && !va) {
    var e = zr;
    queueMicrotask(() => {
      e === zr && Tu();
    });
  }
  zr.push(t);
}
function nf() {
  for (; zr.length > 0; )
    Tu();
}
const rf = /* @__PURE__ */ new WeakMap();
function wu(t) {
  var e = Ve;
  if (e === null)
    return Be.f |= Qr, t;
  if (e.f & Ss)
    ki(t, e);
  else {
    if (!(e.f & Ro))
      throw !e.parent && t instanceof Error && Ou(t), t;
    e.b.error(t);
  }
}
function ki(t, e) {
  for (; e !== null; ) {
    if (e.f & Ro)
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
  e && (es(t, "message", {
    value: e.message
  }), es(t, "stack", {
    value: e.stack
  }));
}
const Na = /* @__PURE__ */ new Set();
let at = null, Xa = null, Gt = null, no = /* @__PURE__ */ new Set(), Xn = [], Cs = null, ro = !1, va = !1;
var Mi, Di, Wr, Sa, Hi, Pi, Xr, Ni, Aa, Ca, xn, io, Ka, ao;
const bs = class bs {
  constructor() {
    et(this, xn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    pi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    et(this, Mi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    et(this, Di, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    et(this, Wr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    et(this, Sa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    et(this, Hi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    et(this, Pi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    et(this, Xr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    et(this, Ni, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    et(this, Aa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    et(this, Ca, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    pi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Xn = [], Xa = null, this.apply();
    for (const s of e)
      Wt(this, xn, io).call(this, s);
    if (re(this, Wr) === 0) {
      var n = Gt;
      Wt(this, xn, ao).call(this);
      var r = re(this, Pi), i = re(this, Xr);
      He(this, Pi, []), He(this, Xr, []), He(this, Ni, []), Xa = this, at = null, Gt = n, sl(r), sl(i), Xa = null, (a = re(this, Sa)) == null || a.resolve();
    } else
      Wt(this, xn, Ka).call(this, re(this, Pi)), Wt(this, xn, Ka).call(this, re(this, Xr)), Wt(this, xn, Ka).call(this, re(this, Ni));
    Gt = null;
    for (const s of re(this, Hi))
      ba(s);
    He(this, Hi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    re(this, Mi).has(e) || re(this, Mi).set(e, n), this.current.set(e, e.v), Gt == null || Gt.set(e, e.v);
  }
  activate() {
    at = this;
  }
  deactivate() {
    at = null, Gt = null;
  }
  flush() {
    if (Xn.length > 0) {
      if (this.activate(), Lu(), at !== null && at !== this)
        return;
    } else re(this, Wr) === 0 && Wt(this, xn, ao).call(this);
    this.deactivate();
    for (const e of no)
      if (no.delete(e), e(), at !== null)
        break;
  }
  increment() {
    He(this, Wr, re(this, Wr) + 1);
  }
  decrement() {
    He(this, Wr, re(this, Wr) - 1);
    for (const e of re(this, Aa))
      tn(e, pn), ni(e);
    for (const e of re(this, Ca))
      tn(e, Lr), ni(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    re(this, Di).add(e);
  }
  settled() {
    return (re(this, Sa) ?? He(this, Sa, Iu())).promise;
  }
  static ensure() {
    if (at === null) {
      const e = at = new bs();
      Na.add(at), va || bs.enqueue(() => {
        at === e && e.flush();
      });
    }
    return at;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    fr(e);
  }
  apply() {
  }
};
Mi = new WeakMap(), Di = new WeakMap(), Wr = new WeakMap(), Sa = new WeakMap(), Hi = new WeakMap(), Pi = new WeakMap(), Xr = new WeakMap(), Ni = new WeakMap(), Aa = new WeakMap(), Ca = new WeakMap(), xn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
io = function(e) {
  var u;
  e.f ^= Kt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (hr | ai)) !== 0, a = i && (r & Kt) !== 0, s = a || (r & Nn) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      i ? n.f ^= Kt : r & Lo ? re(this, Xr).push(n) : r & Kt || (r & As && ((u = n.b) != null && u.is_pending()) ? re(this, Hi).push(n) : ws(n) && (n.f & Or && re(this, Ni).push(n), ba(n)));
      var c = n.first;
      if (c !== null) {
        n = c;
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
Ka = function(e) {
  for (const n of e)
    (n.f & pn ? re(this, Aa) : re(this, Ca)).push(n), tn(n, Kt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ao = function() {
  var e;
  for (const n of re(this, Di))
    n();
  if (re(this, Di).clear(), Na.size > 1) {
    re(this, Mi).clear();
    let n = !0;
    for (const r of Na) {
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
          Ru(s, a);
        if (Xn.length > 0) {
          at = r, r.apply();
          for (const s of Xn)
            Wt(e = r, xn, io).call(e, s);
          Xn = [], r.deactivate();
        }
      }
    }
    at = null;
  }
  Na.delete(this);
};
let ur = bs;
function af(t) {
  var e = va;
  va = !0;
  try {
    for (var n; ; ) {
      if (nf(), Xn.length === 0 && (at == null || at.flush(), Xn.length === 0))
        return Cs = null, /** @type {T} */
        n;
      Lu();
    }
  } finally {
    va = e;
  }
}
function Lu() {
  var t = Oi;
  ro = !0;
  try {
    var e = 0;
    for (ul(!0); Xn.length > 0; ) {
      var n = ur.ensure();
      if (e++ > 1e3) {
        var r, i;
        sf();
      }
      n.process(Xn), xr.clear();
    }
  } finally {
    ro = !1, ul(t), Cs = null;
  }
}
function sf() {
  try {
    qd();
  } catch (t) {
    ki(t, Cs);
  }
}
let ar = null;
function sl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (si | Nn)) && ws(r) && (ar = [], ba(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Wu(r) : r.fn = null), (ar == null ? void 0 : ar.length) > 0)) {
        xr.clear();
        for (const i of ar)
          ba(i);
        ar = [];
      }
    }
    ar = null;
  }
}
function Ru(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & rn ? Ru(
        /** @type {Derived} */
        n,
        e
      ) : r & (As | Or) && Mu(n, e) && (tn(n, pn), ni(
        /** @type {Effect} */
        n
      ));
    }
}
function Mu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & rn && Mu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ni(t) {
  for (var e = Cs = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ro && e === Ve && n & Or)
      return;
    if (n & (ai | hr)) {
      if (!(n & Kt)) return;
      e.f ^= Kt;
    }
  }
  Xn.push(e);
}
function of(t) {
  let e = 0, n = ri(0), r;
  return () => {
    Sf() && (o(n), Oa(() => (e === 0 && (r = kn(() => t(() => ma(n)))), e += 1, () => {
      fr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, ma(n));
      });
    })));
  };
}
var lf = Rr | Xi | Ro;
function uf(t, e, n) {
  new cf(t, e, n);
}
var Mn, Sn, To, qn, Kr, zn, An, cn, Wn, _r, Zr, yr, Yr, Ir, _s, ys, nn, df, ff, Za, Ya, so;
class cf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    et(this, nn);
    /** @type {Boundary | null} */
    pi(this, "parent");
    et(this, Mn, !1);
    /** @type {TemplateNode} */
    et(this, Sn);
    /** @type {TemplateNode | null} */
    et(this, To, null);
    /** @type {BoundaryProps} */
    et(this, qn);
    /** @type {((anchor: Node) => void)} */
    et(this, Kr);
    /** @type {Effect} */
    et(this, zn);
    /** @type {Effect | null} */
    et(this, An, null);
    /** @type {Effect | null} */
    et(this, cn, null);
    /** @type {Effect | null} */
    et(this, Wn, null);
    /** @type {DocumentFragment | null} */
    et(this, _r, null);
    et(this, Zr, 0);
    et(this, yr, 0);
    et(this, Yr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    et(this, Ir, null);
    et(this, _s, () => {
      re(this, Ir) && Bi(re(this, Ir), re(this, Zr));
    });
    et(this, ys, of(() => (He(this, Ir, ri(re(this, Zr))), () => {
      He(this, Ir, null);
    })));
    He(this, Sn, e), He(this, qn, n), He(this, Kr, r), this.parent = /** @type {Effect} */
    Ve.b, He(this, Mn, !!re(this, qn).pending), He(this, zn, Dr(() => {
      Ve.b = this;
      {
        try {
          He(this, An, Xt(() => r(re(this, Sn))));
        } catch (i) {
          this.error(i);
        }
        re(this, yr) > 0 ? Wt(this, nn, Ya).call(this) : He(this, Mn, !1);
      }
    }, lf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return re(this, Mn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!re(this, qn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Wt(this, nn, so).call(this, e), He(this, Zr, re(this, Zr) + e), no.add(re(this, _s));
  }
  get_effect_pending() {
    return re(this, ys).call(this), o(
      /** @type {Source<number>} */
      re(this, Ir)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = re(this, qn).onerror;
    let r = re(this, qn).failed;
    if (re(this, Yr) || !n && !r)
      throw e;
    re(this, An) && (jt(re(this, An)), He(this, An, null)), re(this, cn) && (jt(re(this, cn)), He(this, cn, null)), re(this, Wn) && (jt(re(this, Wn)), He(this, Wn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        Qd();
        return;
      }
      i = !0, a && Zd(), ur.ensure(), He(this, Zr, 0), re(this, Wn) !== null && Tr(re(this, Wn), () => {
        He(this, Wn, null);
      }), He(this, Mn, this.has_pending_snippet()), He(this, An, Wt(this, nn, Za).call(this, () => (He(this, Yr, !1), Xt(() => re(this, Kr).call(this, re(this, Sn)))))), re(this, yr) > 0 ? Wt(this, nn, Ya).call(this) : He(this, Mn, !1);
    };
    var c = Be;
    try {
      dn(null), a = !0, n == null || n(e, s), a = !1;
    } catch (l) {
      ki(l, re(this, zn) && re(this, zn).parent);
    } finally {
      dn(c);
    }
    r && fr(() => {
      He(this, Wn, Wt(this, nn, Za).call(this, () => {
        He(this, Yr, !0);
        try {
          return Xt(() => {
            r(
              re(this, Sn),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return ki(
            l,
            /** @type {Effect} */
            re(this, zn).parent
          ), null;
        } finally {
          He(this, Yr, !1);
        }
      }));
    });
  }
}
Mn = new WeakMap(), Sn = new WeakMap(), To = new WeakMap(), qn = new WeakMap(), Kr = new WeakMap(), zn = new WeakMap(), An = new WeakMap(), cn = new WeakMap(), Wn = new WeakMap(), _r = new WeakMap(), Zr = new WeakMap(), yr = new WeakMap(), Yr = new WeakMap(), Ir = new WeakMap(), _s = new WeakMap(), ys = new WeakMap(), nn = new WeakSet(), df = function() {
  try {
    He(this, An, Xt(() => re(this, Kr).call(this, re(this, Sn))));
  } catch (e) {
    this.error(e);
  }
  He(this, Mn, !1);
}, ff = function() {
  const e = re(this, qn).pending;
  e && (He(this, cn, Xt(() => e(re(this, Sn)))), ur.enqueue(() => {
    He(this, An, Wt(this, nn, Za).call(this, () => (ur.ensure(), Xt(() => re(this, Kr).call(this, re(this, Sn)))))), re(this, yr) > 0 ? Wt(this, nn, Ya).call(this) : (Tr(
      /** @type {Effect} */
      re(this, cn),
      () => {
        He(this, cn, null);
      }
    ), He(this, Mn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Za = function(e) {
  var n = Ve, r = Be, i = ot;
  Yn(re(this, zn)), dn(re(this, zn)), Fi(re(this, zn).ctx);
  try {
    return e();
  } catch (a) {
    return wu(a), null;
  } finally {
    Yn(n), dn(r), Fi(i);
  }
}, Ya = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    re(this, qn).pending
  );
  re(this, An) !== null && (He(this, _r, document.createDocumentFragment()), hf(re(this, An), re(this, _r))), re(this, cn) === null && He(this, cn, Xt(() => e(re(this, Sn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
so = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Wt(n = this.parent, nn, so).call(n, e);
    return;
  }
  He(this, yr, re(this, yr) + e), re(this, yr) === 0 && (He(this, Mn, !1), re(this, cn) && Tr(re(this, cn), () => {
    He(this, cn, null);
  }), re(this, _r) && (re(this, Sn).before(re(this, _r)), He(this, _r, null)), fr(() => {
    ur.ensure().flush();
  }));
};
function hf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ wa(n)
    );
    e.append(n), n = i;
  }
}
function Du(t, e, n) {
  const r = xa() ? Ta : Ho;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = at, a = (
    /** @type {Effect} */
    Ve
  ), s = vf();
  Promise.all(e.map((c) => /* @__PURE__ */ mf(c))).then((c) => {
    s();
    try {
      n([...t.map(r), ...c]);
    } catch (l) {
      a.f & si || ki(l, a);
    }
    i == null || i.deactivate(), oo();
  }).catch((c) => {
    ki(c, a);
  });
}
function vf() {
  var t = Ve, e = Be, n = ot, r = at;
  return function() {
    Yn(t), dn(e), Fi(n), r == null || r.activate();
  };
}
function oo() {
  Yn(null), dn(null), Fi(null);
}
// @__NO_SIDE_EFFECTS__
function Ta(t) {
  var e = rn | pn, n = Be !== null && Be.f & rn ? (
    /** @type {Derived} */
    Be
  ) : null;
  return Ve === null || n !== null && n.f & Cn ? e |= Cn : Ve.f |= Xi, {
    ctx: ot,
    deps: null,
    effects: null,
    equals: Au,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Nt
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
  ), a = ri(
    /** @type {V} */
    Nt
  ), s = !Be, c = /* @__PURE__ */ new Map();
  return xf(() => {
    var f;
    var l = Iu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(oo);
    } catch (m) {
      l.reject(m), oo();
    }
    var u = (
      /** @type {Batch} */
      at
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (u.increment(), (f = c.get(u)) == null || f.reject(Ci), c.delete(u), c.set(u, l)));
    const v = (m, h = void 0) => {
      if (d || u.activate(), h)
        h !== Ci && (a.f |= Qr, Bi(a, h));
      else {
        a.f & Qr && (a.f ^= Qr), Bi(a, m);
        for (const [p, b] of c) {
          if (c.delete(p), p === u) break;
          b.reject(Ci);
        }
      }
      s && (r.update_pending_count(-1), d || u.decrement());
    };
    l.promise.then(v, (m) => v(null, m || "unknown"));
  }), xs(() => {
    for (const l of c.values())
      l.reject(Ci);
  }), new Promise((l) => {
    function u(d) {
      function v() {
        d === i ? l(a) : u(i);
      }
      d.then(v, v);
    }
    u(i);
  });
}
// @__NO_SIDE_EFFECTS__
function _e(t) {
  const e = /* @__PURE__ */ Ta(t);
  return Zu(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ho(t) {
  const e = /* @__PURE__ */ Ta(t);
  return e.equals = Cu, e;
}
function Hu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      jt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function gf(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & rn))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Po(t) {
  var e, n = Ve;
  Yn(gf(t));
  try {
    Hu(t), e = $u(t);
  } finally {
    Yn(n);
  }
  return e;
}
function Pu(t) {
  var e = Po(t);
  if (t.equals(e) || (t.v = e, t.wv = Qu()), !li)
    if (Gt !== null)
      Gt.set(t, t.v);
    else {
      var n = (Sr || t.f & Cn) && t.deps !== null ? Lr : Kt;
      tn(t, n);
    }
}
const xr = /* @__PURE__ */ new Map();
function ri(t, e) {
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
  const n = ri(t);
  return Zu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Nu(t, e = !1, n = !0) {
  var i;
  const r = ri(t);
  return e || (r.equals = Cu), Ki && n && ot !== null && ot.l !== null && ((i = ot.l).s ?? (i.s = [])).push(r), r;
}
function X(t, e, n = !1) {
  Be !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Dn || Be.f & al) && xa() && Be.f & (rn | Or | As | al) && !(en != null && en.includes(t)) && Kd();
  let r = n ? Ae(e) : e;
  return Bi(t, r);
}
function Bi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    li ? xr.set(t, e) : xr.set(t, n), t.v = e;
    var r = ur.ensure();
    r.capture(t, n), t.f & rn && (t.f & pn && Po(
      /** @type {Derived} */
      t
    ), tn(t, t.f & Cn ? Lr : Kt)), t.wv = Qu(), Uu(t, pn), xa() && Ve !== null && Ve.f & Kt && !(Ve.f & (hr | ai)) && (En === null ? Of([t]) : En.push(t));
  }
  return e;
}
function ma(t) {
  X(t, t.v + 1);
}
function Uu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = xa(), i = n.length, a = 0; a < i; a++) {
      var s = n[a], c = s.f;
      if (!(!r && s === Ve)) {
        var l = (c & pn) === 0;
        l && tn(s, e), c & rn ? Uu(
          /** @type {Derived} */
          s,
          Lr
        ) : l && (c & Or && ar !== null && ar.push(
          /** @type {Effect} */
          s
        ), ni(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ae(t) {
  if (typeof t != "object" || t === null || Kn in t)
    return t;
  const e = Oo(t);
  if (e !== Pd && e !== Nd)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Is(t), i = /* @__PURE__ */ Ie(0), a = Jr, s = (c) => {
    if (Jr === a)
      return c();
    var l = Be, u = Jr;
    dn(null), dl(a);
    var d = c();
    return dn(l), dl(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ Ie(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Wd();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var v = /* @__PURE__ */ Ie(u.value);
          return n.set(l, v), v;
        }) : X(d, u.value, !0), !0;
      },
      deleteProperty(c, l) {
        var u = n.get(l);
        if (u === void 0) {
          if (l in c) {
            const d = s(() => /* @__PURE__ */ Ie(Nt));
            n.set(l, d), ma(i);
          }
        } else
          X(u, Nt), ma(i);
        return !0;
      },
      get(c, l, u) {
        var m;
        if (l === Kn)
          return t;
        var d = n.get(l), v = l in c;
        if (d === void 0 && (!v || (m = Cr(c, l)) != null && m.writable) && (d = s(() => {
          var h = Ae(v ? c[l] : Nt), p = /* @__PURE__ */ Ie(h);
          return p;
        }), n.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === Nt ? void 0 : f;
        }
        return Reflect.get(c, l, u);
      },
      getOwnPropertyDescriptor(c, l) {
        var u = Reflect.getOwnPropertyDescriptor(c, l);
        if (u && "value" in u) {
          var d = n.get(l);
          d && (u.value = o(d));
        } else if (u === void 0) {
          var v = n.get(l), f = v == null ? void 0 : v.v;
          if (v !== void 0 && f !== Nt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(c, l) {
        var f;
        if (l === Kn)
          return !0;
        var u = n.get(l), d = u !== void 0 && u.v !== Nt || Reflect.has(c, l);
        if (u !== void 0 || Ve !== null && (!d || (f = Cr(c, l)) != null && f.writable)) {
          u === void 0 && (u = s(() => {
            var m = d ? Ae(c[l]) : Nt, h = /* @__PURE__ */ Ie(m);
            return h;
          }), n.set(l, u));
          var v = o(u);
          if (v === Nt)
            return !1;
        }
        return d;
      },
      set(c, l, u, d) {
        var E;
        var v = n.get(l), f = l in c;
        if (r && l === "length")
          for (var m = u; m < /** @type {Source<number>} */
          v.v; m += 1) {
            var h = n.get(m + "");
            h !== void 0 ? X(h, Nt) : m in c && (h = s(() => /* @__PURE__ */ Ie(Nt)), n.set(m + "", h));
          }
        if (v === void 0)
          (!f || (E = Cr(c, l)) != null && E.writable) && (v = s(() => /* @__PURE__ */ Ie(void 0)), X(v, Ae(u)), n.set(l, v));
        else {
          f = v.v !== Nt;
          var p = s(() => Ae(u));
          X(v, p);
        }
        var b = Reflect.getOwnPropertyDescriptor(c, l);
        if (b != null && b.set && b.set.call(d, u), !f) {
          if (r && typeof l == "string") {
            var I = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= I.v && X(I, S + 1);
          }
          ma(i);
        }
        return !0;
      },
      ownKeys(c) {
        o(i);
        var l = Reflect.ownKeys(c).filter((v) => {
          var f = n.get(v);
          return f === void 0 || f.v !== Nt;
        });
        for (var [u, d] of n)
          d.v !== Nt && !(u in c) && l.push(u);
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
    if (t !== null && typeof t == "object" && Kn in t)
      return t[Kn];
  } catch {
  }
  return t;
}
function pf(t, e) {
  return Object.is(ol(t), ol(e));
}
var rs, No, Fu, ku, Bu;
function bf() {
  if (rs === void 0) {
    rs = window, No = document, Fu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    ku = Cr(e, "firstChild").get, Bu = Cr(e, "nextSibling").get, il(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), il(n) && (n.__t = void 0);
  }
}
function Mr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Vi(t) {
  return ku.call(t);
}
// @__NO_SIDE_EFFECTS__
function wa(t) {
  return Bu.call(t);
}
function de(t, e) {
  return /* @__PURE__ */ Vi(t);
}
function z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Vi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ wa(n) : n;
  }
}
function ge(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ wa(r);
  return r;
}
function _f(t) {
  t.textContent = "";
}
function Uo() {
  return !1;
}
function yf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, fr(() => {
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
function Zi(t) {
  var e = Be, n = Ve;
  dn(null), Yn(null);
  try {
    return t();
  } finally {
    dn(e), Yn(n);
  }
}
function Vu(t, e, n, r = n) {
  t.addEventListener(e, () => Zi(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), If();
}
function Gu(t) {
  Ve === null && Be === null && jd(), Be !== null && Be.f & Cn && Ve === null && Gd(), li && Vd();
}
function Ef(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Qn(t, e, n, r = !0) {
  var i = Ve;
  i !== null && i.f & Nn && (t |= Nn);
  var a = {
    ctx: ot,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | pn,
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
      ba(a), a.f |= Ss;
    } catch (l) {
      throw jt(a), l;
    }
  else e !== null && ni(a);
  if (r) {
    var s = a;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Xi) && (s = s.first), s !== null && (s.parent = i, i !== null && Ef(s, i), Be !== null && Be.f & rn && !(t & ai))) {
      var c = (
        /** @type {Derived} */
        Be
      );
      (c.effects ?? (c.effects = [])).push(s);
    }
  }
  return a;
}
function Sf() {
  return Be !== null && !Dn;
}
function xs(t) {
  const e = Qn(Es, null, !1);
  return tn(e, Kt), e.teardown = t, e;
}
function we(t) {
  Gu();
  var e = (
    /** @type {Effect} */
    Ve.f
  ), n = !Be && (e & hr) !== 0 && (e & Ss) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      ot
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return ju(t);
}
function ju(t) {
  return Qn(Lo | Eu, t, !1);
}
function Af(t) {
  return Gu(), Qn(Es | Eu, t, !0);
}
function Cf(t) {
  ur.ensure();
  const e = Qn(ai | Xi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Tr(e, () => {
      jt(e), r(void 0);
    }) : (jt(e), r(void 0));
  });
}
function oi(t) {
  return Qn(Lo, t, !1);
}
function xf(t) {
  return Qn(As | Xi, t, !0);
}
function Oa(t, e = 0) {
  return Qn(Es | e, t, !0);
}
function Ce(t, e = [], n = []) {
  Du(e, n, (r) => {
    Qn(Es, () => t(...r.map(o)), !0);
  });
}
function Dr(t, e = 0) {
  var n = Qn(Or | e, t, !0);
  return n;
}
function Xt(t, e = !0) {
  return Qn(hr | Xi, t, !0, e);
}
function qu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = li, r = Be;
    cl(!0), dn(null);
    try {
      e.call(null);
    } finally {
      cl(n), dn(r);
    }
  }
}
function zu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Zi(() => {
      i.abort(Ci);
    });
    var r = n.next;
    n.f & ai ? n.parent = null : jt(n, e), n = r;
  }
}
function Tf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & hr || jt(e), e = n;
  }
}
function jt(t, e = !0) {
  var n = !1;
  (e || t.f & Fd) && t.nodes_start !== null && t.nodes_end !== null && (wf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), zu(t, e && !n), is(t, 0), tn(t, si);
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
      /* @__PURE__ */ wa(t)
    );
    t.remove(), t = n;
  }
}
function Wu(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Tr(t, e) {
  var n = [];
  Fo(t, n, !0), Xu(n, () => {
    jt(t), e && e();
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
function Fo(t, e, n) {
  if (!(t.f & Nn)) {
    if (t.f ^= Nn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Rr) !== 0 || (r.f & hr) !== 0;
      Fo(r, e, a ? n : !1), r = i;
    }
  }
}
function Ts(t) {
  Ku(t, !0);
}
function Ku(t, e) {
  if (t.f & Nn) {
    t.f ^= Nn, t.f & Kt || (tn(t, pn), ni(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Rr) !== 0 || (n.f & hr) !== 0;
      Ku(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Oi = !1;
function ul(t) {
  Oi = t;
}
let li = !1;
function cl(t) {
  li = t;
}
let Be = null, Dn = !1;
function dn(t) {
  Be = t;
}
let Ve = null;
function Yn(t) {
  Ve = t;
}
let en = null;
function Zu(t) {
  Be !== null && (en === null ? en = [t] : en.push(t));
}
let Jt = null, mn = 0, En = null;
function Of(t) {
  En = t;
}
let Yu = 1, pa = 0, Jr = pa;
function dl(t) {
  Jr = t;
}
let Sr = !1;
function Qu() {
  return ++Yu;
}
function ws(t) {
  var v;
  var e = t.f;
  if (e & pn)
    return !0;
  if (e & Lr) {
    var n = t.deps, r = (e & Cn) !== 0;
    if (n !== null) {
      var i, a, s = (e & ns) !== 0, c = r && Ve !== null && !Sr, l = n.length;
      if ((s || c) && (Ve === null || !(Ve.f & si))) {
        var u = (
          /** @type {Derived} */
          t
        ), d = u.parent;
        for (i = 0; i < l; i++)
          a = n[i], (s || !((v = a == null ? void 0 : a.reactions) != null && v.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        s && (u.f ^= ns), c && d !== null && !(d.f & Cn) && (u.f ^= Cn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], ws(
          /** @type {Derived} */
          a
        ) && Pu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ve !== null && !Sr) && tn(t, Kt);
  }
  return !1;
}
function Ju(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(en != null && en.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & rn ? Ju(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? tn(a, pn) : a.f & Kt && tn(a, Lr), ni(
        /** @type {Effect} */
        a
      ));
    }
}
function $u(t) {
  var p;
  var e = Jt, n = mn, r = En, i = Be, a = Sr, s = en, c = ot, l = Dn, u = Jr, d = t.f;
  Jt = /** @type {null | Value[]} */
  null, mn = 0, En = null, Sr = (d & Cn) !== 0 && (Dn || !Oi || Be === null), Be = d & (hr | ai) ? null : t, en = null, Fi(t.ctx), Dn = !1, Jr = ++pa, t.ac !== null && (Zi(() => {
    t.ac.abort(Ci);
  }), t.ac = null);
  try {
    t.f |= to;
    var v = (
      /** @type {Function} */
      t.fn
    ), f = v(), m = t.deps;
    if (Jt !== null) {
      var h;
      if (is(t, mn), m !== null && mn > 0)
        for (m.length = mn + Jt.length, h = 0; h < Jt.length; h++)
          m[mn + h] = Jt[h];
      else
        t.deps = m = Jt;
      if (!Sr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & rn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (h = mn; h < m.length; h++)
          ((p = m[h]).reactions ?? (p.reactions = [])).push(t);
    } else m !== null && mn < m.length && (is(t, mn), m.length = mn);
    if (xa() && En !== null && !Dn && m !== null && !(t.f & (rn | Lr | pn)))
      for (h = 0; h < /** @type {Source[]} */
      En.length; h++)
        Ju(
          En[h],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (pa++, En !== null && (r === null ? r = En : r.push(.../** @type {Source[]} */
    En))), t.f & Qr && (t.f ^= Qr), f;
  } catch (b) {
    return wu(b);
  } finally {
    t.f ^= to, Jt = e, mn = n, En = r, Be = i, Sr = a, en = s, Fi(c), Dn = l, Jr = u;
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
  n === null && e.f & rn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Jt === null || !Jt.includes(e)) && (tn(e, Lr), e.f & (Cn | ns) || (e.f ^= ns), Hu(
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
      Lf(t, n[r]);
}
function ba(t) {
  var e = t.f;
  if (!(e & si)) {
    tn(t, Kt);
    var n = Ve, r = Oi;
    Ve = t, Oi = !0;
    try {
      e & Or ? Tf(t) : zu(t), qu(t);
      var i = $u(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Yu;
      var a;
      _u && $d && t.f & pn && t.deps;
    } finally {
      Oi = r, Ve = n;
    }
  }
}
async function ec() {
  await Promise.resolve(), af();
}
function o(t) {
  var e = t.f, n = (e & rn) !== 0;
  if (Be !== null && !Dn) {
    var r = Ve !== null && (Ve.f & si) !== 0;
    if (!r && !(en != null && en.includes(t))) {
      var i = Be.deps;
      if (Be.f & to)
        t.rv < pa && (t.rv = pa, Jt === null && i !== null && i[mn] === t ? mn++ : Jt === null ? Jt = [t] : (!Sr || !Jt.includes(t)) && Jt.push(t));
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
    ), c = s.parent;
    c !== null && !(c.f & Cn) && (s.f ^= Cn);
  }
  if (li) {
    if (xr.has(t))
      return xr.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var l = s.v;
      return (!(s.f & Kt) && s.reactions !== null || tc(s)) && (l = Po(s)), xr.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, Gt != null && Gt.has(s))
      return Gt.get(s);
    ws(s) && Pu(s);
  }
  if (Gt != null && Gt.has(t))
    return Gt.get(t);
  if (t.f & Qr)
    throw t.v;
  return t.v;
}
function tc(t) {
  if (t.v === Nt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (xr.has(e) || e.f & rn && tc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function kn(t) {
  var e = Dn;
  try {
    return Dn = !0, t();
  } finally {
    Dn = e;
  }
}
const Rf = -7169;
function tn(t, e) {
  t.f = t.f & Rf | e;
}
function nc(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Kn in t)
      lo(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Kn in n && lo(n);
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
    const n = Oo(t);
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
const rc = /* @__PURE__ */ new Set(), uo = /* @__PURE__ */ new Set();
function ko(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || fa.call(e, a), !a.cancelBubble)
      return Zi(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? fr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Mf(t, e, n, r = {}) {
  var i = ko(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function cr(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = ko(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && xs(() => {
    e.removeEventListener(t, s, a);
  });
}
function Tn(t) {
  for (var e = 0; e < t.length; e++)
    rc.add(t[e]);
  for (var n of uo)
    n(t);
}
let fl = null;
function fa(t) {
  var S;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((S = t.composedPath) == null ? void 0 : S.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  fl = t;
  var s = 0, c = fl === t && t.__root;
  if (c) {
    var l = i.indexOf(c);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || t.target, a !== e) {
    es(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Be, v = Ve;
    dn(null), Yn(null);
    try {
      for (var f, m = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (Is(p)) {
              var [b, ...I] = p;
              b.apply(a, [t, ...I]);
            } else
              p.call(a, t);
        } catch (E) {
          f ? m.push(E) : f = E;
        }
        if (t.cancelBubble || h === e || h === null)
          break;
        a = h;
      }
      if (f) {
        for (let E of m)
          queueMicrotask(() => {
            throw E;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, dn(d), Yn(v);
    }
  }
}
function ic(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Gi(t, e) {
  var n = (
    /** @type {Effect} */
    Ve
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function he(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = ic(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Vi(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Fu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Vi(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Gi(c, l);
    } else
      Gi(s, s);
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
      ), c = (
        /** @type {Element} */
        /* @__PURE__ */ Vi(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Vi(c);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Gi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function Ot(t, e) {
  return /* @__PURE__ */ Df(t, e, "svg");
}
function Et(t = "") {
  {
    var e = Mr(t + "");
    return Gi(e, e), e;
  }
}
function ee() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Mr();
  return t.append(e, n), Gi(e, n), t;
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
let as = !0;
function hl(t) {
  as = t;
}
function Ye(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Vf(t, e) {
  return Gf(t, e);
}
const bi = /* @__PURE__ */ new Map();
function Gf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0 }) {
  bf();
  var c = /* @__PURE__ */ new Set(), l = (v) => {
    for (var f = 0; f < v.length; f++) {
      var m = v[f];
      if (!c.has(m)) {
        c.add(m);
        var h = Bf(m);
        e.addEventListener(m, fa, { passive: h });
        var p = bi.get(m);
        p === void 0 ? (document.addEventListener(m, fa, { passive: h }), bi.set(m, 1)) : bi.set(m, p + 1);
      }
    }
  };
  l(wo(rc)), uo.add(l);
  var u = void 0, d = Cf(() => {
    var v = n ?? e.appendChild(Mr());
    return uf(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          xe({});
          var m = (
            /** @type {ComponentContext} */
            ot
          );
          m.c = a;
        }
        i && (r.$$events = i), as = s, u = t(f, r) || {}, as = !0, a && Te();
      }
    ), () => {
      var h;
      for (var f of c) {
        e.removeEventListener(f, fa);
        var m = (
          /** @type {number} */
          bi.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, fa), bi.delete(f)) : bi.set(f, m);
      }
      uo.delete(l), v !== n && ((h = v.parentNode) == null || h.removeChild(v));
    };
  });
  return jf.set(u, d), u;
}
let jf = /* @__PURE__ */ new WeakMap();
function Ee(t, e, ...n) {
  var r = t, i = ve, a;
  Dr(() => {
    i !== (i = e()) && (a && (jt(a), a = null), a = Xt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Rr);
}
function lt(t) {
  ot === null && Mo(), Ki && ot.l !== null ? qf(ot).m.push(t) : we(() => {
    const e = kn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function _n(t) {
  ot === null && Mo(), lt(() => () => kn(t));
}
function qf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ae(t, e, n = !1) {
  var r = t, i = null, a = null, s = Nt, c = n ? Rr : 0, l = !1;
  const u = (m, h = !0) => {
    l = !0, f(h, m);
  };
  var d = null;
  function v() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? i : a, h = s ? a : i;
    m && Ts(m), h && Tr(h, () => {
      s ? a = null : i = null;
    });
  }
  const f = (m, h) => {
    if (s !== (s = m)) {
      var p = Uo(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Mr())), s ? i ?? (i = h && Xt(() => h(b))) : a ?? (a = h && Xt(() => h(b))), p) {
        var I = (
          /** @type {Batch} */
          at
        ), S = s ? i : a, E = s ? a : i;
        S && I.skipped_effects.delete(S), E && I.skipped_effects.add(E), I.add_callback(v);
      } else
        v();
    }
  };
  Dr(() => {
    l = !1, e(u), l || f(null, null);
  }, c);
}
let $r = null;
function vl(t) {
  $r = t;
}
function xi(t, e) {
  return e;
}
function zf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, s = 0; s < a; s++)
    Fo(e[s].e, i, !0);
  var c = a > 0 && i.length === 0 && n !== null;
  if (c) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    _f(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), jn(t, e[0].prev, e[a - 1].next);
  }
  Xu(i, () => {
    for (var u = 0; u < a; u++) {
      var d = e[u];
      c || (r.delete(d.k), jn(t, d.prev, d.next)), jt(d.e, !c);
    }
  });
}
function sr(t, e, n, r, i, a = null) {
  var s = t, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      t
    );
    s = u.appendChild(Mr());
  }
  var d = null, v = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Ho(() => {
    var I = n();
    return Is(I) ? I : I == null ? [] : wo(I);
  }), h, p;
  function b() {
    Wf(
      p,
      h,
      c,
      f,
      s,
      i,
      e,
      r,
      n
    ), a !== null && (h.length === 0 ? d ? Ts(d) : d = Xt(() => a(s)) : d !== null && Tr(d, () => {
      d = null;
    }));
  }
  Dr(() => {
    p ?? (p = /** @type {Effect} */
    Ve), h = /** @type {V[]} */
    o(m);
    var I = h.length;
    if (!(v && I === 0)) {
      v = I === 0;
      var S, E, _, A;
      if (Uo()) {
        var y = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          at
        );
        for (E = 0; E < I; E += 1) {
          _ = h[E], A = r(_, E);
          var x = c.items.get(A) ?? f.get(A);
          x ? e & 3 && ac(x, _, E, e) : (S = sc(
            null,
            c,
            null,
            null,
            _,
            A,
            E,
            i,
            e,
            n,
            !0
          ), f.set(A, S)), y.add(A);
        }
        for (const [C, P] of c.items)
          y.has(C) || T.skipped_effects.add(P.e);
        T.add_callback(b);
      } else
        b();
      o(m);
    }
  });
}
function Wf(t, e, n, r, i, a, s, c, l) {
  var ne, M, L, O;
  var u = (s & 8) !== 0, d = (s & 3) !== 0, v = e.length, f = n.items, m = n.first, h = m, p, b = null, I, S = [], E = [], _, A, y, T;
  if (u)
    for (T = 0; T < v; T += 1)
      _ = e[T], A = c(_, T), y = f.get(A), y !== void 0 && ((ne = y.a) == null || ne.measure(), (I ?? (I = /* @__PURE__ */ new Set())).add(y));
  for (T = 0; T < v; T += 1) {
    if (_ = e[T], A = c(_, T), y = f.get(A), y === void 0) {
      var x = r.get(A);
      if (x !== void 0) {
        r.delete(A), f.set(A, x);
        var C = b ? b.next : h;
        jn(n, b, x), jn(n, x, C), Ps(x, C, i), b = x;
      } else {
        var P = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        b = sc(
          P,
          n,
          b,
          b === null ? n.first : b.next,
          _,
          A,
          T,
          a,
          s,
          l
        );
      }
      f.set(A, b), S = [], E = [], h = b.next;
      continue;
    }
    if (d && ac(y, _, T, s), y.e.f & Nn && (Ts(y.e), u && ((M = y.a) == null || M.unfix(), (I ?? (I = /* @__PURE__ */ new Set())).delete(y))), y !== h) {
      if (p !== void 0 && p.has(y)) {
        if (S.length < E.length) {
          var W = E[0], F;
          b = W.prev;
          var k = S[0], le = S[S.length - 1];
          for (F = 0; F < S.length; F += 1)
            Ps(S[F], W, i);
          for (F = 0; F < E.length; F += 1)
            p.delete(E[F]);
          jn(n, k.prev, le.next), jn(n, b, k), jn(n, le, W), h = W, b = le, T -= 1, S = [], E = [];
        } else
          p.delete(y), Ps(y, h, i), jn(n, y.prev, y.next), jn(n, y, b === null ? n.first : b.next), jn(n, b, y), b = y;
        continue;
      }
      for (S = [], E = []; h !== null && h.k !== A; )
        h.e.f & Nn || (p ?? (p = /* @__PURE__ */ new Set())).add(h), E.push(h), h = h.next;
      if (h === null)
        continue;
      y = h;
    }
    S.push(y), b = y, h = y.next;
  }
  if (h !== null || p !== void 0) {
    for (var V = p === void 0 ? [] : wo(p); h !== null; )
      h.e.f & Nn || V.push(h), h = h.next;
    var G = V.length;
    if (G > 0) {
      var U = s & 4 && v === 0 ? i : null;
      if (u) {
        for (T = 0; T < G; T += 1)
          (L = V[T].a) == null || L.measure();
        for (T = 0; T < G; T += 1)
          (O = V[T].a) == null || O.fix();
      }
      zf(n, V, U);
    }
  }
  u && fr(() => {
    var se;
    if (I !== void 0)
      for (y of I)
        (se = y.a) == null || se.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var j of r.values())
    jt(j.e);
  r.clear();
}
function ac(t, e, n, r) {
  r & 1 && Bi(t.v, e), r & 2 ? Bi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function sc(t, e, n, r, i, a, s, c, l, u, d) {
  var v = $r, f = (l & 1) !== 0, m = (l & 16) === 0, h = f ? m ? /* @__PURE__ */ Nu(i, !1, !1) : ri(i) : i, p = l & 2 ? ri(s) : s, b = {
    i: p,
    v: h,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  $r = b;
  try {
    if (t === null) {
      var I = document.createDocumentFragment();
      I.append(t = Mr());
    }
    return b.e = Xt(() => c(
      /** @type {Node} */
      t,
      h,
      p,
      u
    ), Jd), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    $r = v;
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
      /* @__PURE__ */ wa(a)
    );
    i.before(a), a = s;
  }
}
function jn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function vr(t, e, n) {
  var r = t, i, a, s = null, c = null;
  function l() {
    a && (Tr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = c, c = null;
  }
  Dr(() => {
    if (i !== (i = e())) {
      var u = Uo();
      if (i) {
        var d = r;
        u && (s = document.createDocumentFragment(), s.append(d = Mr()), a && at.skipped_effects.add(a)), c = Xt(() => n(d, i));
      }
      u ? at.add_callback(l) : l();
    }
  }, Rr);
}
function ml(t, e, n, r, i, a) {
  var s, c, l = null, u = (
    /** @type {TemplateNode} */
    t
  ), d, v = $r;
  Dr(() => {
    const f = e() || null;
    var m = f === "svg" ? Md : null;
    if (f !== s) {
      var h = $r;
      vl(v), d && (f === null ? Tr(d, () => {
        d = null, c = null;
      }) : f === c ? Ts(d) : (jt(d), hl(!1))), f && f !== c && (d = Xt(() => {
        if (l = m ? document.createElementNS(m, f) : document.createElement(f), Gi(l, l), r) {
          var p = (
            /** @type {TemplateNode} */
            l.appendChild(Mr())
          );
          r(l, p);
        }
        Ve.nodes_end = l, u.before(l);
      })), s = f, s && (c = s), hl(!0), vl(h);
    }
  }, Rr);
}
function Fe(t, e, n) {
  oi(() => {
    var r = kn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Oa(() => {
        var s = n();
        nc(s), i && Do(a, s) && (a = s, r.update(s));
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
  Dr(() => {
    n !== (n = e()) && (r && (jt(r), r = null), n && (r = Xt(() => {
      oi(() => (
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
          var c = s + a;
          (s === 0 || gl.includes(r[s - 1])) && (c === r.length || gl.includes(r[c])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(c + 1) : s = c;
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
      var a = !1, s = 0, c = !1, l = [];
      r && l.push(...Object.keys(r).map(Ns)), i && l.push(...Object.keys(i).map(Ns));
      var u = 0, d = -1;
      const p = t.length;
      for (var v = 0; v < p; v++) {
        var f = t[v];
        if (c ? f === "/" && t[v - 1] === "*" && (c = !1) : a ? a === f && (a = !1) : f === "/" && t[v + 1] === "*" ? c = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !c && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = v;
          else if (f === ";" || v === p - 1) {
            if (d !== -1) {
              var m = Ns(t.substring(u, d).trim());
              if (!l.includes(m)) {
                f !== ";" && v++;
                var h = t.substring(u, v).trim();
                n += " " + h + ";";
              }
            }
            u = v + 1, d = -1;
          }
        }
      }
    }
    return r && (n += pl(r)), i && (n += pl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Bo(t, e, n, r, i, a) {
  var s = t.__className;
  if (s !== n || s === void 0) {
    var c = Zf(n, r, a);
    c == null ? t.removeAttribute("class") : e ? t.className = c : t.setAttribute("class", c), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var u = !!a[l];
      (i == null || u !== !!i[l]) && t.classList.toggle(l, u);
    }
  return a;
}
function Us(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function gt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = Yf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Us(t, n == null ? void 0 : n[0], r[0]), Us(t, n == null ? void 0 : n[1], r[1], "important")) : Us(t, n, r));
  return r;
}
function co(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Is(e))
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
  }), xs(() => {
    e.disconnect();
  });
}
function bl(t) {
  return "__value" in t ? t.__value : t.value;
}
const ra = Symbol("class"), ia = Symbol("style"), uc = Symbol("is custom element"), cc = Symbol("is html");
function _l(t, e) {
  var n = Vo(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Jf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function dr(t, e, n, r) {
  var i = Vo(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[kd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && dc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function $f(t, e, n, r, i = !1, a = !1) {
  var s = Vo(t), c = s[uc], l = !s[cc], u = e || {}, d = t.tagName === "OPTION";
  for (var v in e)
    v in n || (n[v] = null);
  n.class ? n.class = lc(n.class) : n[ra] && (n.class = null), n[ia] && (n.style ?? (n.style = null));
  var f = dc(t);
  for (const E in n) {
    let _ = n[E];
    if (d && E === "value" && _ == null) {
      t.value = t.__value = "", u[E] = _;
      continue;
    }
    if (E === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Bo(t, m, _, r, e == null ? void 0 : e[ra], n[ra]), u[E] = _, u[ra] = n[ra];
      continue;
    }
    if (E === "style") {
      gt(t, _, e == null ? void 0 : e[ia], n[ia]), u[E] = _, u[ia] = n[ia];
      continue;
    }
    var h = u[E];
    if (!(_ === h && !(_ === void 0 && t.hasAttribute(E)))) {
      u[E] = _;
      var p = E[0] + E[1];
      if (p !== "$$")
        if (p === "on") {
          const A = {}, y = "$$" + E;
          let T = E.slice(2);
          var b = Nf(T);
          if (Hf(T) && (T = T.slice(0, -7), A.capture = !0), !b && h) {
            if (_ != null) continue;
            t.removeEventListener(T, u[y], A), u[y] = null;
          }
          if (_ != null)
            if (b)
              t[`__${T}`] = _, Tn([T]);
            else {
              let x = function(C) {
                u[E].call(this, C);
              };
              u[y] = ko(T, t, x, A);
            }
          else b && (t[`__${T}`] = void 0);
        } else if (E === "style")
          dr(t, E, _);
        else if (E === "autofocus")
          yf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!c && (E === "__value" || E === "value" && _ != null))
          t.value = t.__value = _;
        else if (E === "selected" && d)
          Jf(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var I = E;
          l || (I = Ff(I));
          var S = I === "defaultValue" || I === "defaultChecked";
          if (_ == null && !c && !S)
            if (s[E] = null, I === "value" || I === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                t
              );
              const y = e === void 0;
              if (I === "value") {
                let T = A.defaultValue;
                A.removeAttribute(I), A.defaultValue = T, A.value = A.__value = y ? T : null;
              } else {
                let T = A.defaultChecked;
                A.removeAttribute(I), A.defaultChecked = T, A.checked = y ? T : !1;
              }
            } else
              t.removeAttribute(E);
          else S || f.includes(I) && (c || typeof _ != "string") ? (t[I] = _, I in s && (s[I] = Nt)) : typeof _ != "function" && dr(t, I, _);
        }
    }
  }
  return u;
}
function Ge(t, e, n = [], r = [], i, a = !1, s = !1) {
  Du(n, r, (c) => {
    var l = void 0, u = {}, d = t.nodeName === "SELECT", v = !1;
    if (Dr(() => {
      var m = e(...c.map(o)), h = $f(
        t,
        l,
        m,
        i,
        a,
        s
      );
      v && d && "value" in m && co(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let b of Object.getOwnPropertySymbols(u))
        m[b] || jt(u[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var p = m[b];
        b.description === Dd && (!l || p !== l[b]) && (u[b] && jt(u[b]), u[b] = Xt(() => Xf(t, () => p))), h[b] = p;
      }
      l = h;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      oi(() => {
        co(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Qf(f);
      });
    }
    v = !0;
  });
}
function Vo(t) {
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
    i = Oo(i);
  }
  return n;
}
const eh = () => performance.now(), or = {
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
  const t = or.now();
  or.tasks.forEach((e) => {
    e.c(t) || (or.tasks.delete(e), e.f());
  }), or.tasks.size !== 0 && or.tick(fc);
}
function th(t) {
  let e;
  return or.tasks.size === 0 && or.tick(fc), {
    promise: new Promise((n) => {
      or.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      or.tasks.delete(e);
    }
  };
}
function Ua(t, e) {
  Zi(() => {
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
    $r
  ), i, a, s, c = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        s = os(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var { position: l, width: u, height: d } = getComputedStyle(t);
        if (l !== "absolute" && l !== "fixed") {
          var v = (
            /** @type {HTMLElement | SVGElement} */
            t.style
          );
          c = {
            position: v.position,
            width: v.width,
            height: v.height,
            transform: v.transform
          }, v.position = "absolute", v.width = u, v.height = d;
          var f = t.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var m = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            v.transform = v.transform ? `${v.transform} ${m}` : m;
          }
        }
      }
    },
    unfix() {
      if (c) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          t.style
        );
        l.position = c.position, l.width = c.width, l.height = c.height, l.transform = c.transform;
      }
    }
  }), r.a.element = t;
}
function ss(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, c = (t & 4) !== 0, l = s ? "both" : i ? "in" : "out", u, d = e.inert, v = e.style.overflow, f, m;
  function h() {
    return Zi(() => u ?? (u = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var p = {
    is_global: c,
    in() {
      var E;
      if (e.inert = d, !i) {
        m == null || m.abort(), (E = m == null ? void 0 : m.reset) == null || E.call(m);
        return;
      }
      a || f == null || f.abort(), Ua(e, "introstart"), f = os(e, h(), m, 1, () => {
        Ua(e, "introend"), f == null || f.abort(), f = u = void 0, e.style.overflow = v;
      });
    },
    out(E) {
      if (!a) {
        E == null || E(), u = void 0;
        return;
      }
      e.inert = !0, Ua(e, "outrostart"), m = os(e, h(), f, 0, () => {
        Ua(e, "outroend"), E == null || E();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    Ve
  );
  if ((b.transitions ?? (b.transitions = [])).push(p), i && as) {
    var I = c;
    if (!I) {
      for (var S = (
        /** @type {Effect | null} */
        b.parent
      ); S && S.f & Rr; )
        for (; (S = S.parent) && !(S.f & Or); )
          ;
      I = !S || (S.f & Ss) !== 0;
    }
    I && oi(() => {
      kn(() => p.in());
    });
  }
}
function os(t, e, n, r, i) {
  var a = r === 1;
  if (Ai(e)) {
    var s, c = !1;
    return fr(() => {
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
      abort: ve,
      deactivate: ve,
      reset: ve,
      t: () => r
    };
  const { delay: l = 0, css: u, tick: d, easing: v = rh } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), u)) {
    var m = Il(u(0, 1));
    f.push(m, m);
  }
  var h = () => 1 - r, p = t.animate(f, { duration: l, fill: "forwards" });
  return p.onfinish = () => {
    p.cancel();
    var b = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var I = r - b, S = (
      /** @type {number} */
      e.duration * Math.abs(I)
    ), E = [];
    if (S > 0) {
      var _ = !1;
      if (u)
        for (var A = Math.ceil(S / 16.666666666666668), y = 0; y <= A; y += 1) {
          var T = b + I * v(y / A), x = Il(u(T, 1 - T));
          E.push(x), _ || (_ = x.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), h = () => {
        var C = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + I * v(C / S);
      }, d && th(() => {
        if (p.playState !== "running") return !1;
        var C = h();
        return d(C, 1 - C), !0;
      });
    }
    p = t.animate(E, { duration: S, fill: "forwards" }), p.onfinish = () => {
      h = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = ve);
    },
    deactivate: () => {
      i = ve;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => h()
  };
}
function _a(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Vu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Fs(t) ? ks(a) : a, n(a), at !== null && r.add(at), await ec(), a !== (a = e())) {
      var s = t.selectionStart, c = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", c !== null) {
        var u = t.value.length;
        s === c && c === l && u > l ? (t.selectionStart = u, t.selectionEnd = u) : (t.selectionStart = s, t.selectionEnd = Math.min(c, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  kn(e) == null && t.value && (n(Fs(t) ? ks(t.value) : t.value), at !== null && r.add(at)), Oa(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Xa ?? at
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
  kn(e) == null && n(t.checked), Oa(() => {
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
  return t === e || (t == null ? void 0 : t[Kn]) === e;
}
function Oe(t = {}, e, n, r) {
  return oi(() => {
    var i, a;
    return Oa(() => {
      i = a, a = (r == null ? void 0 : r()) || [], kn(() => {
        t !== n(...a) && (e(t, ...a), i && El(n(...i), t) && e(null, ...i));
      });
    }), () => {
      fr(() => {
        a && El(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function sh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    ot
  ), n = e.l.u;
  if (!n) return;
  let r = () => nc(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ta(() => {
      let c = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== a[u] && (a[u] = l[u], c = !0);
      return c && i++, i;
    });
    r = () => o(s);
  }
  n.b.length && Af(() => {
    Sl(e, r), ts(n.b);
  }), we(() => {
    const i = kn(() => n.m.map(Ud));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && we(() => {
    Sl(e, r), ts(n.a);
  });
}
function Sl(t, e) {
  if (t.l.s)
    for (const n of t.l.s) o(n);
  e();
}
function Go(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ve;
  const r = kn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const _i = [];
function oh(t, e) {
  return {
    subscribe: Ft(t, e).subscribe
  };
}
function Ft(t, e = ve) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(c) {
    if (Do(t, c) && (t = c, n)) {
      const l = !_i.length;
      for (const u of r)
        u[1](), _i.push(u, t);
      if (l) {
        for (let u = 0; u < _i.length; u += 2)
          _i[u][0](_i[u + 1]);
        _i.length = 0;
      }
    }
  }
  function a(c) {
    i(c(
      /** @type {T} */
      t
    ));
  }
  function s(c, l = ve) {
    const u = [c, l];
    return r.add(u), r.size === 1 && (n = e(i, a) || ve), c(
      /** @type {T} */
      t
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Yi(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return oh(n, (s, c) => {
    let l = !1;
    const u = [];
    let d = 0, v = ve;
    const f = () => {
      if (d)
        return;
      v();
      const h = e(r ? u[0] : u, s, c);
      a ? s(h) : v = typeof h == "function" ? h : ve;
    }, m = i.map(
      (h, p) => Go(
        h,
        (b) => {
          u[p] = b, d &= ~(1 << p), l && f();
        },
        () => {
          d |= 1 << p;
        }
      )
    );
    return l = !0, f(), function() {
      ts(m), v(), l = !1;
    };
  });
}
function hc(t) {
  let e;
  return Go(t, (n) => e = n)(), e;
}
let Fa = !1, fo = Symbol();
function Un(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Nu(void 0),
    unsubscribe: ve
  });
  if (r.store !== t && !(fo in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ve;
    else {
      var i = !0;
      r.unsubscribe = Go(t, (a) => {
        i ? r.source.v = a : X(r.source, a);
      }), i = !1;
    }
  return t && fo in n ? hc(t) : o(r.source);
}
function Hn(t, e) {
  return t.set(e), e;
}
function Jn() {
  const t = {};
  function e() {
    xs(() => {
      for (var n in t)
        t[n].unsubscribe();
      es(t, fo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function lh(t) {
  var e = Fa;
  try {
    return Fa = !1, [t(), Fa];
  } finally {
    Fa = e;
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
function ze(t, e, n) {
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
      if (Ai(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      Ai(i) && (i = i());
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
      if (Ai(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Cr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Kn || e === Su) return !1;
    for (let n of t.props)
      if (Ai(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Ai(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function tt(...t) {
  return new Proxy({ props: t }, ch);
}
function g(t, e, n, r) {
  var E;
  var i = !Ki || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, c = (
    /** @type {V} */
    r
  ), l = !0, u = () => (l && (l = !1, c = s ? kn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), c), d;
  if (a) {
    var v = Kn in t || Su in t;
    d = ((E = Cr(t, e)) == null ? void 0 : E.set) ?? (v && e in t ? (_) => t[e] = _ : void 0);
  }
  var f, m = !1;
  a ? [f, m] = lh(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = u(), d && (i && zd(), d(f)));
  var h;
  if (i ? h = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? u() : (l = !0, _);
  } : h = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ !== void 0 && (c = /** @type {V} */
    void 0), _ === void 0 ? c : _;
  }, i && !(n & 4))
    return h;
  if (d) {
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      function(_, A) {
        return arguments.length > 0 ? ((!i || !A || p || m) && d(A ? h() : _), _) : h();
      }
    );
  }
  var b = !1, I = (n & 1 ? Ta : Ho)(() => (b = !1, h()));
  a && o(I);
  var S = (
    /** @type {Effect} */
    Ve
  );
  return (
    /** @type {() => V} */
    function(_, A) {
      if (arguments.length > 0) {
        const y = A ? o(I) : i && a ? Ae(_) : _;
        return X(I, y), b = !0, c !== void 0 && (c = y), _;
      }
      return li && b || S.f & si ? I.v : o(I);
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
function ya(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? ji(_h(t), t, e) : t;
}
function yh(t, e, n) {
  return t.concat(e).map(function(r) {
    return ya(r, n);
  });
}
function Ih(t, e) {
  if (!e.customMerge)
    return ji;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : ji;
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
    r[i] = ya(t[i], n);
  }), Al(e).forEach(function(i) {
    Sh(t, i) || (vc(t, i) && n.isMergeableObject(e[i]) ? r[i] = Ih(i, n)(t[i], e[i], n) : r[i] = ya(e[i], n));
  }), r;
}
function ji(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || yh, n.isMergeableObject = n.isMergeableObject || hh, n.cloneUnlessOtherwiseSpecified = ya;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : Ah(t, e, n) : ya(e, n);
}
ji.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return ji(r, i, n);
  }, {});
};
var Ch = ji, xh = Ch;
const Th = /* @__PURE__ */ fh(xh);
var ho = function(t, e) {
  return ho = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ho(t, e);
};
function nt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ho(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var be = function() {
  return be = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, be.apply(this, arguments);
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
    function c(d) {
      try {
        u(r.next(d));
      } catch (v) {
        s(v);
      }
    }
    function l(d) {
      try {
        u(r.throw(d));
      } catch (v) {
        s(v);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(c, l);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
function jo(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = c(0), s.throw = c(1), s.return = c(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function c(u) {
    return function(d) {
      return l([u, d]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, u[0] && (n = 0)), n; ) try {
      if (r = 1, i && (a = u[0] & 2 ? i.return : u[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, u[1])).done) return a;
      switch (i = 0, a && (u = [u[0] & 2, a.value]), u[0]) {
        case 0:
        case 1:
          a = u;
          break;
        case 4:
          return n.label++, { value: u[1], done: !1 };
        case 5:
          n.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            n = 0;
            continue;
          }
          if (u[0] === 3 && (!a || u[1] > a[0] && u[1] < a[3])) {
            n.label = u[1];
            break;
          }
          if (u[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = u;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(u);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      u = e.call(t, n);
    } catch (d) {
      u = [6, d], i = 0;
    } finally {
      r = a = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
function Ut(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function wr(t, e) {
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
function Zn(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Li(t) {
  return this instanceof Li ? (this.v = t, this) : new Li(t);
}
function Oh(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", s), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function s(m) {
    return function(h) {
      return Promise.resolve(h).then(m, v);
    };
  }
  function c(m, h) {
    r[m] && (i[m] = function(p) {
      return new Promise(function(b, I) {
        a.push([m, p, b, I]) > 1 || l(m, p);
      });
    }, h && (i[m] = h(i[m])));
  }
  function l(m, h) {
    try {
      u(r[m](h));
    } catch (p) {
      f(a[0][3], p);
    }
  }
  function u(m) {
    m.value instanceof Li ? Promise.resolve(m.value.v).then(d, v) : f(a[0][2], m);
  }
  function d(m) {
    l("next", m);
  }
  function v(m) {
    l("throw", m);
  }
  function f(m, h) {
    m(h), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Lh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Ut == "function" ? Ut(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(s) {
      return new Promise(function(c, l) {
        s = t[a](s), i(c, l, s.done, s.value);
      });
    };
  }
  function i(a, s, c, l) {
    Promise.resolve(l).then(function(u) {
      a({ value: u, done: c });
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
}, We;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(We || (We = {}));
var mt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(mt || (mt = {}));
var qi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(qi || (qi = {}));
function Cl(t) {
  return t.type === mt.literal;
}
function Fh(t) {
  return t.type === mt.argument;
}
function bc(t) {
  return t.type === mt.number;
}
function _c(t) {
  return t.type === mt.date;
}
function yc(t) {
  return t.type === mt.time;
}
function Ic(t) {
  return t.type === mt.select;
}
function Ec(t) {
  return t.type === mt.plural;
}
function kh(t) {
  return t.type === mt.pound;
}
function Sc(t) {
  return t.type === mt.tag;
}
function Ac(t) {
  return !!(t && typeof t == "object" && t.type === qi.number);
}
function vo(t) {
  return !!(t && typeof t == "object" && t.type === qi.dateTime);
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
    for (var c = s[0], l = s.slice(1), u = 0, d = l; u < d.length; u++) {
      var v = d[u];
      if (v.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: c, options: l });
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
        e = be(be(be({}, e), { notation: "scientific" }), i.options.reduce(function(l, u) {
          return be(be({}, l), wl(u));
        }, {}));
        continue;
      case "engineering":
        e = be(be(be({}, e), { notation: "engineering" }), i.options.reduce(function(l, u) {
          return be(be({}, l), wl(u));
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
        i.options[0].replace(zh, function(l, u, d, v, f, m) {
          if (u)
            e.minimumIntegerDigits = d.length;
          else {
            if (v && f)
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
      i.stem.replace(xl, function(l, u, d, v, f, m) {
        return d === "*" ? e.minimumFractionDigits = u.length : v && v[0] === "#" ? e.maximumFractionDigits = v.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = u.length, e.maximumFractionDigits = u.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = be(be({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = be(be({}, e), Tl(a)));
      continue;
    }
    if (xc.test(i.stem)) {
      e = be(be({}, e), Tl(i.stem));
      continue;
    }
    var s = wc(i.stem);
    s && (e = be(be({}, e), s));
    var c = Wh(i.stem);
    c && (e = be(be({}, e), c));
  }
  return e;
}
var ka = {
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
      var s = 1 + (a & 1), c = a < 2 ? 1 : 3 + (a >> 1), l = "a", u = Zh(e);
      for ((u == "H" || u == "k") && (c = 0); c-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = u + n;
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
  var i = ka[r || ""] || ka[n || ""] || ka["".concat(n, "-001")] || ka["001"];
  return i[0];
}
var Gs, Yh = new RegExp("^".concat(Cc.source, "*")), Qh = new RegExp("".concat(Cc.source, "*$"));
function Ke(t, e) {
  return { start: t, end: e };
}
var Jh = !!String.prototype.startsWith && "_a".startsWith("a", 1), $h = !!String.fromCodePoint, ev = !!Object.fromEntries, tv = !!String.prototype.codePointAt, nv = !!String.prototype.trimStart, rv = !!String.prototype.trimEnd, iv = !!Number.isSafeInteger, av = iv ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, mo = !0;
try {
  var sv = Lc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  mo = ((Gs = sv.exec("a")) === null || Gs === void 0 ? void 0 : Gs[0]) === "a";
} catch {
  mo = !1;
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
), go = $h ? String.fromCodePoint : (
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
        var a = i[r], s = a[0], c = a[1];
        n[s] = c;
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
var po;
if (mo) {
  var Rl = Lc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  po = function(e, n) {
    var r;
    Rl.lastIndex = n;
    var i = Rl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  po = function(e, n) {
    for (var r = []; ; ) {
      var i = Oc(e, n);
      if (i === void 0 || Rc(i) || fv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return go.apply(void 0, r);
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
            var c = this.clonePosition();
            this.bump(), i.push({
              type: mt.pound,
              location: Ke(c, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(We.UNMATCHED_CLOSING_TAG, Ke(this.clonePosition(), this.clonePosition()));
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
            type: mt.literal,
            value: "<".concat(i, "/>"),
            location: Ke(r, this.clonePosition())
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
            return this.error(We.INVALID_TAG, Ke(c, this.clonePosition()));
          var l = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(We.UNMATCHED_CLOSING_TAG, Ke(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: mt.tag,
              value: i,
              children: s,
              location: Ke(r, this.clonePosition())
            },
            err: null
          } : this.error(We.INVALID_TAG, Ke(c, this.clonePosition())));
        } else
          return this.error(We.UNCLOSED_TAG, Ke(r, this.clonePosition()));
      } else
        return this.error(We.INVALID_TAG, Ke(r, this.clonePosition()));
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
        var c = this.tryParseLeftAngleBracket();
        if (c) {
          i += c;
          continue;
        }
        break;
      }
      var l = Ke(r, this.clonePosition());
      return {
        val: { type: mt.literal, value: i, location: l },
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
      return go.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), go(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(We.EXPECT_ARGUMENT_CLOSING_BRACE, Ke(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(We.EMPTY_ARGUMENT, Ke(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(We.MALFORMED_ARGUMENT, Ke(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(We.EXPECT_ARGUMENT_CLOSING_BRACE, Ke(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: mt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Ke(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(We.EXPECT_ARGUMENT_CLOSING_BRACE, Ke(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(We.MALFORMED_ARGUMENT, Ke(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = po(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = Ke(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), c = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (c) {
        case "":
          return this.error(We.EXPECT_ARGUMENT_TYPE, Ke(s, l));
        case "number":
        case "date":
        case "time": {
          this.bumpSpace();
          var u = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var d = this.clonePosition(), v = this.parseSimpleArgStyleIfPossible();
            if (v.err)
              return v;
            var f = lv(v.val);
            if (f.length === 0)
              return this.error(We.EXPECT_ARGUMENT_STYLE, Ke(this.clonePosition(), this.clonePosition()));
            var m = Ke(d, this.clonePosition());
            u = { style: f, styleLocation: m };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var p = Ke(i, this.clonePosition());
          if (u && Ol(u == null ? void 0 : u.style, "::", 0)) {
            var b = ov(u.style.slice(2));
            if (c === "number") {
              var v = this.parseNumberSkeletonFromString(b, u.styleLocation);
              return v.err ? v : {
                val: { type: mt.number, value: r, location: p, style: v.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(We.EXPECT_DATE_TIME_SKELETON, p);
              var I = b;
              this.locale && (I = Kh(b, this.locale));
              var f = {
                type: qi.dateTime,
                pattern: I,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Vh(I) : {}
              }, S = c === "date" ? mt.date : mt.time;
              return {
                val: { type: S, value: r, location: p, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? mt.number : c === "date" ? mt.date : mt.time,
              value: r,
              location: p,
              style: (a = u == null ? void 0 : u.style) !== null && a !== void 0 ? a : null
            },
            err: null
          };
        }
        case "plural":
        case "selectordinal":
        case "select": {
          var E = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(We.EXPECT_SELECT_ARGUMENT_OPTIONS, Ke(E, be({}, E)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), A = 0;
          if (c !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(We.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ke(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var v = this.tryParseDecimalInteger(We.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, We.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (v.err)
              return v;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), A = v.val;
          }
          var y = this.tryParsePluralOrSelectOptions(e, c, n, _);
          if (y.err)
            return y;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var T = Ke(i, this.clonePosition());
          return c === "select" ? {
            val: {
              type: mt.select,
              value: r,
              options: Ll(y.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: mt.plural,
              value: r,
              options: Ll(y.val),
              offset: A,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(We.INVALID_ARGUMENT_TYPE, Ke(s, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(We.EXPECT_ARGUMENT_CLOSING_BRACE, Ke(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(We.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ke(i, this.clonePosition()));
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
        return this.error(We.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: qi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Xh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, s = !1, c = [], l = /* @__PURE__ */ new Set(), u = i.value, d = i.location; ; ) {
        if (u.length === 0) {
          var v = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(We.EXPECT_PLURAL_ARGUMENT_SELECTOR, We.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Ke(v, this.clonePosition()), u = this.message.slice(v.offset, this.offset());
          } else
            break;
        }
        if (l.has(u))
          return this.error(n === "select" ? We.DUPLICATE_SELECT_ARGUMENT_SELECTOR : We.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (s = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? We.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : We.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ke(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(e + 1, n, r);
        if (h.err)
          return h;
        var p = this.tryParseArgumentClose(m);
        if (p.err)
          return p;
        c.push([
          u,
          {
            value: h.val,
            location: Ke(m, this.clonePosition())
          }
        ]), l.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? We.EXPECT_SELECT_ARGUMENT_SELECTOR : We.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ke(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(We.MISSING_OTHER_CLAUSE, Ke(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
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
      var l = Ke(i, this.clonePosition());
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
function bo(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function cv(t) {
  return bo(t) || t === 47;
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
function _o(t) {
  t.forEach(function(e) {
    if (delete e.location, Ic(e) || Ec(e))
      for (var n in e.options)
        delete e.options[n].location, _o(e.options[n].value);
    else bc(e) && Ac(e.style) || (_c(e) || yc(e)) && vo(e.style) ? delete e.style.location : Sc(e) && _o(e.children);
  });
}
function hv(t, e) {
  e === void 0 && (e = {}), e = be({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new uv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(We[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || _o(n.val), n.val;
}
var zi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(zi || (zi = {}));
var Os = (
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
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), zi.INVALID_VALUE, a) || this;
    }
    return e;
  }(Os)
), vv = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), zi.INVALID_VALUE, i) || this;
    }
    return e;
  }(Os)
), mv = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), zi.MISSING_VALUE, r) || this;
    }
    return e;
  }(Os)
), Qt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Qt || (Qt = {}));
function gv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Qt.literal || n.type !== Qt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function pv(t) {
  return typeof t == "function";
}
function Qa(t, e, n, r, i, a, s) {
  if (t.length === 1 && Cl(t[0]))
    return [
      {
        type: Qt.literal,
        value: t[0].value
      }
    ];
  for (var c = [], l = 0, u = t; l < u.length; l++) {
    var d = u[l];
    if (Cl(d)) {
      c.push({
        type: Qt.literal,
        value: d.value
      });
      continue;
    }
    if (kh(d)) {
      typeof a == "number" && c.push({
        type: Qt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var v = d.value;
    if (!(i && v in i))
      throw new mv(v, s);
    var f = i[v];
    if (Fh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), c.push({
        type: typeof f == "string" ? Qt.literal : Qt.object,
        value: f
      });
      continue;
    }
    if (_c(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : vo(d.style) ? d.style.parsedOptions : void 0;
      c.push({
        type: Qt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (yc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : vo(d.style) ? d.style.parsedOptions : r.time.medium;
      c.push({
        type: Qt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (bc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Ac(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), c.push({
        type: Qt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (Sc(d)) {
      var h = d.children, p = d.value, b = i[p];
      if (!pv(b))
        throw new vv(p, "function", s);
      var I = Qa(h, e, n, r, i, a), S = b(I.map(function(A) {
        return A.value;
      }));
      Array.isArray(S) || (S = [S]), c.push.apply(c, S.map(function(A) {
        return {
          type: typeof A == "string" ? Qt.literal : Qt.object,
          value: A
        };
      }));
    }
    if (Ic(d)) {
      var E = d.options[f] || d.options.other;
      if (!E)
        throw new Ml(d.value, f, Object.keys(d.options), s);
      c.push.apply(c, Qa(E.value, e, n, r, i));
      continue;
    }
    if (Ec(d)) {
      var E = d.options["=".concat(f)];
      if (!E) {
        if (!Intl.PluralRules)
          throw new Os(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, zi.MISSING_INTL_API, s);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        E = d.options[_] || d.options.other;
      }
      if (!E)
        throw new Ml(d.value, f, Object.keys(d.options), s);
      c.push.apply(c, Qa(E.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return gv(c);
}
function bv(t, e) {
  return e ? be(be(be({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = be(be({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function _v(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = bv(t[r], e[r]), n;
  }, be({}, t)) : t;
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
      return new ((e = Intl.NumberFormat).bind.apply(e, Zn([void 0], n, !1)))();
    }, {
      cache: js(t.number),
      strategy: Vs.variadic
    }),
    getDateTimeFormat: Bs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Zn([void 0], n, !1)))();
    }, {
      cache: js(t.dateTime),
      strategy: Vs.variadic
    }),
    getPluralRules: Bs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Zn([void 0], n, !1)))();
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
        var u = a.formatToParts(l);
        if (u.length === 1)
          return u[0].value;
        var d = u.reduce(function(v, f) {
          return !v.length || f.type !== Qt.literal || typeof v[v.length - 1] != "string" ? v.push(f.value) : v[v.length - 1] += f.value, v;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return Qa(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var c = wh(s, ["formatters"]);
        this.ast = t.__parse(e, be(be({}, c), { locale: this.resolvedLocale }));
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
const Ar = {}, Ev = (t, e, n) => n && (e in Ar || (Ar[e] = {}), t in Ar[e] || (Ar[e][t] = n), n), Dc = (t, e) => {
  if (e == null)
    return;
  if (e in Ar && t in Ar[e])
    return Ar[e][t];
  const n = Ra(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = Av(i, t);
    if (a)
      return Ev(t, e, a);
  }
};
let qo;
const La = Ft({});
function Sv(t) {
  return qo[t] || null;
}
function Hc(t) {
  return t in qo;
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
  const e = Ra(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Hc(r))
      return r;
  }
}
function Pc(t, ...e) {
  delete Ar[t], La.update((n) => (n[t] = Th.all([n[t] || {}, ...e]), n));
}
Yi(
  [La],
  ([t]) => Object.keys(t)
);
La.subscribe((t) => qo = t);
const Ja = {};
function xv(t, e) {
  Ja[t].delete(e), Ja[t].size === 0 && delete Ja[t];
}
function Nc(t) {
  return Ja[t];
}
function Tv(t) {
  return Ra(t).map((e) => {
    const n = Nc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function ls(t) {
  return t == null ? !1 : Ra(t).some(
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
  if (!ls(t))
    return t in aa ? aa[t] : Promise.resolve();
  const e = Tv(t);
  return aa[t] = Promise.all(
    e.map(
      ([n, r]) => wv(n, r)
    )
  ).then(() => {
    if (ls(t))
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
    `[svelte-i18n] The message "${e}" was not found in "${Ra(
      t
    ).join('", "')}".${ls(Hr()) ? `

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
}, ha = Hv;
function Wi() {
  return ha;
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
  )), Object.assign(ha, r, { initialLocale: i }), n && ("number" in n && Object.assign(ha.formats.number, n.number), "date" in n && Object.assign(ha.formats.date, n.date), "time" in n && Object.assign(ha.formats.time, n.time)), ui.set(i);
}
const qs = Ft(!1);
var Nv = Object.defineProperty, Uv = Object.defineProperties, Fv = Object.getOwnPropertyDescriptors, Hl = Object.getOwnPropertySymbols, kv = Object.prototype.hasOwnProperty, Bv = Object.prototype.propertyIsEnumerable, Pl = (t, e, n) => e in t ? Nv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Vv = (t, e) => {
  for (var n in e || (e = {}))
    kv.call(e, n) && Pl(t, n, e[n]);
  if (Hl)
    for (var n of Hl(e))
      Bv.call(e, n) && Pl(t, n, e[n]);
  return t;
}, Gv = (t, e) => Uv(t, Fv(e));
let yo;
const us = Ft(null);
function Nl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ra(t, e = Wi().fallbackLocale) {
  const n = Nl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Nl(e)])] : n;
}
function Hr() {
  return yo ?? void 0;
}
us.subscribe((t) => {
  yo = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const jv = (t) => {
  if (t && Cv(t) && ls(t)) {
    const { loadingDelay: e } = Wi();
    let n;
    return typeof window < "u" && Hr() != null && e ? n = window.setTimeout(
      () => qs.set(!0),
      e
    ) : qs.set(!0), Uc(t).then(() => {
      us.set(t);
    }).finally(() => {
      clearTimeout(n), qs.set(!1);
    });
  }
  return us.set(t);
}, ui = Gv(Vv({}, us), {
  set: jv
}), qv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ls = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var zv = Object.defineProperty, cs = Object.getOwnPropertySymbols, Fc = Object.prototype.hasOwnProperty, kc = Object.prototype.propertyIsEnumerable, Ul = (t, e, n) => e in t ? zv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, zo = (t, e) => {
  for (var n in e || (e = {}))
    Fc.call(e, n) && Ul(t, n, e[n]);
  if (cs)
    for (var n of cs(e))
      kc.call(e, n) && Ul(t, n, e[n]);
  return t;
}, Qi = (t, e) => {
  var n = {};
  for (var r in t)
    Fc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && cs)
    for (var r of cs(t))
      e.indexOf(r) < 0 && kc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Ia = (t, e) => {
  const { formats: n } = Wi();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Wv = Ls(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Qi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ia("number", r)), new Intl.NumberFormat(n, i);
  }
), Xv = Ls(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Qi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ia("date", r) : Object.keys(i).length === 0 && (i = Ia("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Kv = Ls(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Qi(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ia("time", r) : Object.keys(i).length === 0 && (i = Ia("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Zv = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = Qi(e, [
    "locale"
  ]);
  return Wv(zo({ locale: n }, r));
}, Yv = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = Qi(e, [
    "locale"
  ]);
  return Xv(zo({ locale: n }, r));
}, Qv = (t = {}) => {
  var e = t, {
    locale: n = Hr()
  } = e, r = Qi(e, [
    "locale"
  ]);
  return Kv(zo({ locale: n }, r));
}, Jv = Ls(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Hr()) => new Mc(t, e, Wi().formats, {
    ignoreTag: Wi().ignoreTag
  })
), $v = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: c,
    locale: l = Hr(),
    default: u
  } = s;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Dc(t, l);
  if (!d)
    d = (a = (i = (r = (n = Wi()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: u })) != null ? i : u) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!c)
    return d;
  let v = d;
  try {
    v = Jv(d, l).format(c);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return v;
}, em = (t, e) => Qv(e).format(t), tm = (t, e) => Yv(e).format(t), nm = (t, e) => Zv(e).format(t), rm = (t, e = Hr()) => Dc(t, e), im = Yi([ui, La], () => $v);
Yi([ui], () => em);
Yi([ui], () => tm);
Yi([ui], () => nm);
Yi([ui, La], () => rm);
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
    console.log("Updating the language to", s.detail.language), ui.set(s.detail.language);
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
function Ne(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Xe(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function ii(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function ft(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class ci {
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
var Ba;
function Lm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Ba;
  if (typeof Ba == "boolean" && !e)
    return Ba;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (Ba = r), r;
}
function Rm(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, s = i + n.top, c, l;
  if (t.type === "touchstart") {
    var u = t;
    c = u.changedTouches[0].pageX - a, l = u.changedTouches[0].pageY - s;
  } else {
    var d = t;
    c = d.pageX - a, l = d.pageY - s;
  }
  return { x: c, y: l };
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
const Ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
], Va = [], Fm = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
          for (var a = Ut(kl), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            this.adapter.registerInteractionHandler(c, this.activateHandler);
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
          for (var a = Ut(Bl), s = a.next(); !s.done; s = a.next()) {
            var c = s.value;
            this.adapter.registerDocumentInteractionHandler(c, this.deactivateHandler);
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
        for (var i = Ut(kl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Ut(Bl), a = i.next(); !a.done; a = i.next()) {
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
            var c = n !== void 0 && Va.length > 0 && Va.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Va.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Va = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, c = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, u = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", v = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), m = f.startPoint, h = f.endPoint;
        d = m.x + "px, " + m.y + "px", v = h.x + "px, " + h.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, v), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(c), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
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
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, s = i.isActivated, c = a || !s;
      c && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
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
        var i = be({}, r);
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
          var c = getComputedStyle(r);
          s = c.display === "none" || c.visibility === "hidden";
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
}, an = /* @__PURE__ */ new Set();
an.add(Pe.BACKSPACE);
an.add(Pe.ENTER);
an.add(Pe.SPACEBAR);
an.add(Pe.PAGE_UP);
an.add(Pe.PAGE_DOWN);
an.add(Pe.END);
an.add(Pe.HOME);
an.add(Pe.ARROW_LEFT);
an.add(Pe.ARROW_UP);
an.add(Pe.ARROW_RIGHT);
an.add(Pe.ARROW_DOWN);
an.add(Pe.DELETE);
an.add(Pe.ESCAPE);
an.add(Pe.TAB);
var fn = {
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
}, sn = /* @__PURE__ */ new Map();
sn.set(fn.BACKSPACE, Pe.BACKSPACE);
sn.set(fn.ENTER, Pe.ENTER);
sn.set(fn.SPACEBAR, Pe.SPACEBAR);
sn.set(fn.PAGE_UP, Pe.PAGE_UP);
sn.set(fn.PAGE_DOWN, Pe.PAGE_DOWN);
sn.set(fn.END, Pe.END);
sn.set(fn.HOME, Pe.HOME);
sn.set(fn.ARROW_LEFT, Pe.ARROW_LEFT);
sn.set(fn.ARROW_UP, Pe.ARROW_UP);
sn.set(fn.ARROW_RIGHT, Pe.ARROW_RIGHT);
sn.set(fn.ARROW_DOWN, Pe.ARROW_DOWN);
sn.set(fn.DELETE, Pe.DELETE);
sn.set(fn.ESCAPE, Pe.ESCAPE);
sn.set(fn.TAB, Pe.TAB);
var Pr = /* @__PURE__ */ new Set();
Pr.add(Pe.PAGE_UP);
Pr.add(Pe.PAGE_DOWN);
Pr.add(Pe.END);
Pr.add(Pe.HOME);
Pr.add(Pe.ARROW_LEFT);
Pr.add(Pe.ARROW_UP);
Pr.add(Pe.ARROW_RIGHT);
Pr.add(Pe.ARROW_DOWN);
function wt(t) {
  var e = t.key;
  if (an.has(e))
    return e;
  var n = sn.get(t.keyCode);
  return n || Pe.UNKNOWN;
}
const { applyPassive: Vl } = Bc, { matches: Vm } = Ma;
function $t(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: c, eventTarget: l, activeTarget: u, addClass: d = (h) => t.classList.add(h), removeClass: v = (h) => t.classList.remove(h), addStyle: f = (h, p) => t.style.setProperty(h, p), initPromise: m = Promise.resolve() } = {}) {
  let h, p = new ci(), b = me("SMUI:addLayoutListener"), I, S = s, E = l, _ = u;
  function A() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")) : a === "secondary" ? (v("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary"))) : (v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), h && S !== s && (S = s, s ? h.activate() : s === !1 && h.deactivate()), e && !h ? (h = new Fm({
      addClass: d,
      browserSupportsCssVars: () => Lm(window),
      computeBoundingRect: () => (c || t).getBoundingClientRect(),
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
      isSurfaceActive: () => s ?? Vm(u || t, ":active"),
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
      removeClass: v,
      updateCssVariable: f
    }), m.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !e && m.then(() => {
      h && (h.destroy(), h = void 0, p.clear());
    }), h && (E !== l || _ !== u) && (E = l, _ = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  A(), b && (I = b(y));
  function y() {
    h && h.layout();
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
        eventTarget: l,
        activeTarget: u,
        addClass: d,
        removeClass: v,
        addStyle: f,
        initPromise: m
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (x) => t.classList.add(x), removeClass: (x) => t.classList.remove(x), addStyle: (x, C) => t.style.setProperty(x, C), initPromise: Promise.resolve() }, T)), A();
    },
    destroy() {
      h && (h.destroy(), h = void 0, p.clear(), v("mdc-ripple-surface"), v("smui-ripple-surface--primary"), v("smui-ripple-surface--secondary")), I && I();
    }
  };
}
function Gm(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, di), a = g(e, "tag", 3, "span"), s = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), c;
  const l = me("SMUI:label:context"), u = me("SMUI:label:tabindex");
  function d() {
    return c.getElement();
  }
  var v = { getElement: d }, f = ee(), m = z(f);
  {
    let h = /* @__PURE__ */ _e(() => Ne({
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
    vr(m, i, (p, b) => {
      Oe(
        b(p, tt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return o(h);
            }
          },
          () => l === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return u;
            }
          },
          () => s,
          {
            children: (I, S) => {
              var E = ee(), _ = z(E);
              Ee(_, () => e.children ?? ve), w(I, E);
            },
            $$slots: { default: !0 }
          }
        )),
        (I) => c = I,
        () => c
      );
    });
  }
  return w(t, f), Te(v);
}
function Io(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "on", 3, !1), a = g(e, "component", 3, di), s = g(e, "tag", 3, "i"), c = /* @__PURE__ */ ze(e, [
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
  const u = /* @__PURE__ */ _e(() => s() === "svg" || a() === zm), d = me("SMUI:icon:context");
  function v() {
    return l.getElement();
  }
  var f = { getElement: v }, m = ee(), h = z(m);
  {
    let p = /* @__PURE__ */ _e(() => Ne({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    vr(h, a, (b, I) => {
      Oe(
        I(b, tt(
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
          () => o(u) ? { focusable: "false", tabindex: "-1" } : {},
          () => c,
          {
            children: (S, E) => {
              var _ = ee(), A = z(_);
              Ee(A, () => e.children ?? ve), w(S, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => l = S,
        () => l
      );
    });
  }
  return w(t, m), Te(f);
}
var jm = /* @__PURE__ */ Ot("<svg><!></svg>");
function di(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "tag", 3, "div"), i = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ _e(() => [
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
  var l = { getElement: c }, u = ee(), d = z(u);
  {
    var v = (m) => {
      var h = jm();
      Ge(h, () => ({ ...i }));
      var p = de(h);
      Ee(p, () => e.children ?? ve), Oe(h, (b) => s = b, () => s), Fe(h, (b, I) => Z == null ? void 0 : Z(b, I), n), w(m, h);
    }, f = (m) => {
      var h = ee(), p = z(h);
      {
        var b = (S) => {
          var E = ee(), _ = z(E);
          ml(_, r, !1, (A, y) => {
            Oe(A, (T) => s = T, () => s), Fe(A, (T, x) => Z == null ? void 0 : Z(T, x), n), Ge(A, () => ({ ...i }));
          }), w(S, E);
        }, I = (S) => {
          var E = ee(), _ = z(E);
          ml(_, r, !1, (A, y) => {
            Oe(A, (C) => s = C, () => s), Fe(A, (C, P) => Z == null ? void 0 : Z(C, P), n), Ge(A, () => ({ ...i }));
            var T = ee(), x = z(T);
            Ee(x, () => e.children ?? ve), w(y, T);
          }), w(S, E);
        };
        ae(
          p,
          (S) => {
            o(a) ? S(b) : S(I, !1);
          },
          !0
        );
      }
      w(m, h);
    };
    ae(d, (m) => {
      r() === "svg" ? m(v) : m(f, !1);
    });
  }
  return w(t, u), Te(l);
}
var qm = /* @__PURE__ */ Ot("<svg><!></svg>");
function zm(t, e) {
  xe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, c = qm();
  Ge(c, () => ({ ...r }));
  var l = de(c);
  return Ee(l, () => e.children ?? ve), Oe(c, (u) => i = u, () => i), Fe(c, (u, d) => Z == null ? void 0 : Z(u, d), n), w(t, c), Te(s);
}
function Ga(t, e) {
  xe(e, !0);
  const [n, r] = Jn(), i = Ft(e.value);
  oe(e.key, i), we(() => {
    Hn(i, e.value);
  }), _n(() => {
    i.set(void 0);
  });
  var a = ee(), s = z(a);
  Ee(s, () => e.children ?? ve), w(t, a), Te(), r();
}
var Wm = /* @__PURE__ */ he('<div class="mdc-button__touch"></div>'), Xm = /* @__PURE__ */ he('<div class="mdc-button__ripple"></div> <!><!>', 1);
function ds(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "ripple", 3, !0), s = g(e, "color", 3, "primary"), c = g(e, "variant", 3, "text"), l = g(e, "touch", 3, !1), u = g(e, "action", 3, "close"), d = g(e, "defaultAction", 3, !1), v = g(e, "secondary", 3, !1), f = g(e, "component", 3, di), m = g(e, "tag", 19, () => e.href == null ? "button" : "a"), h = /* @__PURE__ */ ze(e, [
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
  ]), p, b = Ae({}), I = Ae({}), S = me("SMUI:button:context");
  const E = /* @__PURE__ */ _e(() => S === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), _ = /* @__PURE__ */ _e(() => S === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), A = /* @__PURE__ */ _e(() => S === "banner" ? {} : { secondary: v() });
  let y = e.disabled;
  we(() => {
    if (y !== e.disabled) {
      if (p) {
        const V = W();
        "blur" in V && V.blur();
      }
      y = h.disabled;
    }
  }), oe("SMUI:label:context", "button"), oe("SMUI:icon:context", "button");
  function T(V) {
    b[V] || (b[V] = !0);
  }
  function x(V) {
    (!(V in b) || b[V]) && (b[V] = !1);
  }
  function C(V, G) {
    I[V] != G && (G === "" || G == null ? delete I[V] : I[V] = G);
  }
  function P() {
    S === "banner" && Xe(W(), v() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function W() {
    return p.getElement();
  }
  var F = { getElement: W }, k = ee(), le = z(k);
  {
    let V = /* @__PURE__ */ _e(() => [
      [
        $t,
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
    ]), G = /* @__PURE__ */ _e(() => Ne({
      "mdc-button": !0,
      "mdc-button--raised": c() === "raised",
      "mdc-button--unelevated": c() === "unelevated",
      "mdc-button--outlined": c() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": S === "card:action",
      "mdc-card__action--button": S === "card:action",
      "mdc-dialog__button": S === "dialog:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__action": S === "snackbar:actions",
      "mdc-banner__secondary-action": S === "banner" && v(),
      "mdc-banner__primary-action": S === "banner" && !v(),
      "mdc-tooltip__action": S === "tooltip:rich-actions",
      ...b,
      [r()]: !0
    })), U = /* @__PURE__ */ _e(() => Object.entries(I).map(([j, ne]) => `${j}: ${ne};`).concat([i()]).join(" "));
    vr(le, f, (j, ne) => {
      Oe(
        ne(j, tt(
          {
            get tag() {
              return m();
            },
            get use() {
              return o(V);
            },
            get class() {
              return o(G);
            },
            get style() {
              return o(U);
            }
          },
          () => o(E),
          () => o(_),
          () => o(A),
          {
            get href() {
              return e.href;
            }
          },
          () => h,
          {
            onclick: (M) => {
              var L;
              P(), (L = e.onclick) == null || L.call(e, M);
            },
            children: (M, L) => {
              var O = Xm(), se = ge(z(O), 2);
              Ee(se, () => e.children ?? ve);
              var te = ge(se);
              {
                var Y = (ye) => {
                  var B = Wm();
                  w(ye, B);
                };
                ae(te, (ye) => {
                  l() && ye(Y);
                });
              }
              w(M, O);
            },
            $$slots: { default: !0 }
          }
        )),
        (M) => p = M,
        () => p
      );
    });
  }
  return w(t, k), Te(F);
}
function Gc(t, e) {
  xe(e, !0);
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "disabled", 3, !1), i = g(e, "variant", 3, "default"), a = g(e, "isAbortAction", 3, !1), s = g(e, "backgroundColor", 3, void 0);
  {
    let c = /* @__PURE__ */ _e(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    ds(t, {
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
      children: (l, u) => {
        var d = ee(), v = z(d);
        Ee(v, () => e.children ?? ve), w(l, d);
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
var ja = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, tr = {
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
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ja;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return tr;
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
      var n = this.adapter.getAttr(tr.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(tr.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(tr.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(tr.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(ja.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(ja.ICON_BUTTON_ON) : this.adapter.removeClass(ja.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(tr.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(tr.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(tr.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(tr.ARIA_PRESSED, "" + n);
    }, e;
  }(qt)
), Zm = /* @__PURE__ */ he('<div class="mdc-icon-button__touch"></div>'), Ym = /* @__PURE__ */ he('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Qm(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(L) {
    return L === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), c = g(e, "ripple", 3, !0), l = g(e, "toggle", 3, !1), u = g(e, "pressed", 15, n), d = g(e, "touch", 3, !1), v = g(e, "displayFlex", 3, !0), f = g(e, "size", 3, "normal"), m = g(e, "component", 3, di), h = g(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ ze(e, [
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
  ]), b, I, S = /* @__PURE__ */ Ie(Ae({})), E = Ae({}), _ = /* @__PURE__ */ Ie(Ae({})), A = me("SMUI:icon-button:context"), y = me("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ _e(() => {
    if (A === "data-table:pagination")
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
    else return A === "dialog:header" || A === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
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
      hasClass: P,
      notifyChange: (L) => {
        G(L), Xe(U(), "SMUIIconButtonToggleChange", L);
      },
      removeClass: F,
      getAttr: le,
      setAttr: V
    }), I.init()) : !l() && I && (I.destroy(), I = void 0, X(S, {}, !0), X(_, {}, !0)), C = l());
  }), we(() => {
    I && !r(u()) && I.isOn() !== u() && I.toggle(u());
  }), _n(() => {
    I && I.destroy();
  });
  function P(L) {
    return L in o(S) ? o(S)[L] : U().classList.contains(L);
  }
  function W(L) {
    o(S)[L] || (o(S)[L] = !0);
  }
  function F(L) {
    (!(L in o(S)) || o(S)[L]) && (o(S)[L] = !1);
  }
  function k(L, O) {
    E[L] != O && (O === "" || O == null ? delete E[L] : E[L] = O);
  }
  function le(L) {
    return L in o(_) ? o(_)[L] ?? null : U().getAttribute(L);
  }
  function V(L, O) {
    o(_)[L] !== O && (o(_)[L] = O);
  }
  function G(L) {
    u(L.isOn);
  }
  function U() {
    return b.getElement();
  }
  var j = { getElement: U }, ne = ee(), M = z(ne);
  {
    let L = /* @__PURE__ */ _e(() => [
      [
        $t,
        {
          ripple: c(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: W,
          removeClass: F,
          addStyle: k
        }
      ],
      ...i()
    ]), O = /* @__PURE__ */ _e(() => Ne({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": v(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": A === "card:action",
      "mdc-card__action--icon": A === "card:action",
      "mdc-top-app-bar__navigation-icon": A === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": A === "top-app-bar:action",
      "mdc-snackbar__dismiss": A === "snackbar:actions",
      "mdc-data-table__pagination-button": A === "data-table:pagination",
      "mdc-data-table__sort-icon-button": A === "data-table:sortable-header-cell",
      "mdc-dialog__close": (A === "dialog:header" || A === "dialog:sheet") && e.action === "close",
      ...o(S),
      [a()]: !0
    })), se = /* @__PURE__ */ _e(() => Object.entries(E).map(([ye, B]) => `${ye}: ${B};`).concat([s()]).join(" ")), te = /* @__PURE__ */ _e(() => r(u()) ? null : u() ? "true" : "false"), Y = /* @__PURE__ */ _e(() => u() ? e.ariaLabelOn : e.ariaLabelOff);
    vr(M, m, (ye, B) => {
      Oe(
        B(ye, tt(
          {
            get tag() {
              return h();
            },
            get use() {
              return o(L);
            },
            get class() {
              return o(O);
            },
            get style() {
              return o(se);
            },
            get "aria-pressed"() {
              return o(te);
            },
            get "aria-label"() {
              return o(Y);
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
            onclick: (J) => {
              var Q;
              I && I.handleClick(), A === "top-app-bar:navigation" && Xe(U(), "SMUITopAppBarIconButtonNav"), (Q = e.onclick) == null || Q.call(e, J);
            },
            children: (J, Q) => {
              var fe = Ym(), Se = ge(z(fe), 2);
              Ee(Se, () => e.children ?? ve);
              var K = ge(Se);
              {
                var ie = (Me) => {
                  var Le = Zm();
                  w(Me, Le);
                };
                ae(K, (Me) => {
                  d() && Me(ie);
                });
              }
              w(J, fe);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => b = J,
        () => b
      );
    });
  }
  return w(t, ne), Te(j);
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
      Io(a, {
        class: "material-icons",
        children: (c, l) => {
          var u = Et();
          Ce(() => Ye(u, r())), w(c, u);
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
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
var Vr = {
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
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Vr;
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
      this.adapter.removeClass(Vr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Vr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Vr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Vr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Vr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Vr.LINE_RIPPLE_DEACTIVATING));
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
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
      var i = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
        for (var s = Ut(ql), c = s.next(); !c.done; c = s.next()) {
          var l = c.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          c && !c.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Ut(zl), d = u.next(); !d.done; d = u.next()) {
          var l = d.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (v) {
        i = { error: v };
      } finally {
        try {
          d && !d.done && (a = u.return) && a.call(u);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Ut(ql), c = s.next(); !c.done; c = s.next()) {
          var l = c.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          c && !c.done && (r = s.return) && r.call(s);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var u = Ut(zl), d = u.next(); !d.done; d = u.next()) {
          var l = d.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (v) {
        i = { error: v };
      } finally {
        try {
          d && !d.done && (a = u.return) && a.call(u);
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
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
        for (var i = Ut(Xl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Ut(Xl), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Wl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(qt)
), dg = /* @__PURE__ */ he("<span><!></span>"), fg = /* @__PURE__ */ he("<label><!></label>");
function fs(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "floatAbove", 15, !1), s = g(e, "required", 15, !1), c = g(e, "wrapped", 3, !1), l = /* @__PURE__ */ ze(e, [
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
  ]), u, d = /* @__PURE__ */ Ie(void 0), v = new ci(), f = Ae({}), m = Ae({}), h = me("SMUI:generic:input:props") ?? {}, p = a();
  we(() => {
    o(d) && p !== a() && (p = a(), o(d).float(a()));
  });
  let b = s();
  we(() => {
    o(d) && b !== s() && (b = s(), o(d).setRequired(s()));
  });
  const I = me("SMUI:floating-label:mount"), S = me("SMUI:floating-label:unmount");
  lt(() => {
    X(
      d,
      new eg({
        addClass: E,
        removeClass: _,
        getWidth: () => {
          var L, O;
          const j = W(), ne = j.cloneNode(!0);
          (L = j.parentNode) == null || L.appendChild(ne), ne.classList.add("smui-floating-label--remove-transition"), ne.classList.add("smui-floating-label--force-size"), ne.classList.remove("mdc-floating-label--float-above");
          const M = ne.scrollWidth;
          return (O = j.parentNode) == null || O.removeChild(ne), M;
        },
        registerInteractionHandler: (j, ne) => v.on(W(), j, ne),
        deregisterInteractionHandler: (j, ne) => v.off(W(), j, ne)
      }),
      !0
    );
    const U = {
      get element() {
        return W();
      },
      addStyle: A,
      removeStyle: y
    };
    return I && I(U), o(d).init(), () => {
      var j;
      S && S(U), (j = o(d)) == null || j.destroy(), v.clear();
    };
  });
  function E(U) {
    f[U] || (f[U] = !0);
  }
  function _(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function A(U, j) {
    m[U] != j && (j === "" || j == null ? delete m[U] : m[U] = j);
  }
  function y(U) {
    U in m && delete m[U];
  }
  function T(U) {
    var j;
    (j = o(d)) == null || j.shake(U);
  }
  function x(U) {
    a(U);
  }
  function C(U) {
    s(U);
  }
  function P() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function W() {
    return u;
  }
  var F = { shake: T, float: x, setRequired: C, getWidth: P, getElement: W }, k = ee(), le = z(k);
  {
    var V = (U) => {
      var j = dg();
      Ge(j, (M, L) => ({ class: M, style: L, ...l }), [
        () => Ne({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([M, L]) => `${M}: ${L};`).concat([i()]).join(" ")
      ]);
      var ne = de(j);
      Ee(ne, () => e.children ?? ve), Oe(j, (M) => u = M, () => u), Fe(j, (M, L) => Z == null ? void 0 : Z(M, L), n), w(U, j);
    }, G = (U) => {
      var j = fg();
      Ge(
        j,
        (M, L) => ({
          class: M,
          style: L,
          for: e.for || (h ? h.id : void 0),
          ...l
        }),
        [
          () => Ne({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([M, L]) => `${M}: ${L};`).concat([i()]).join(" ")
        ]
      );
      var ne = de(j);
      Ee(ne, () => e.children ?? ve), Oe(j, (M) => u = M, () => u), Fe(j, (M, L) => Z == null ? void 0 : Z(M, L), n), w(U, j);
    };
    ae(le, (U) => {
      c() ? U(V) : U(G, !1);
    });
  }
  return w(t, k), Te(F);
}
var hg = /* @__PURE__ */ he("<div></div>");
function jc(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "active", 3, !1), s = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), c, l = /* @__PURE__ */ Ie(void 0), u = new ci(), d = Ae({}), v = Ae({});
  lt(() => (X(
    l,
    new tg({
      addClass: m,
      removeClass: h,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (y, T) => u.on(E(), y, T),
      deregisterEventHandler: (y, T) => u.off(E(), y, T)
    }),
    !0
  ), o(l).init(), () => {
    var y;
    (y = o(l)) == null || y.destroy(), u.clear();
  }));
  function f(y) {
    return y in d ? d[y] : E().classList.contains(y);
  }
  function m(y) {
    d[y] || (d[y] = !0);
  }
  function h(y) {
    (!(y in d) || d[y]) && (d[y] = !1);
  }
  function p(y, T) {
    v[y] != T && (T === "" || T == null ? delete v[y] : v[y] = T);
  }
  function b() {
    var y;
    (y = o(l)) == null || y.activate();
  }
  function I() {
    var y;
    (y = o(l)) == null || y.deactivate();
  }
  function S(y) {
    var T;
    (T = o(l)) == null || T.setRippleCenter(y);
  }
  function E() {
    return c;
  }
  var _ = { activate: b, deactivate: I, setRippleCenter: S, getElement: E }, A = hg();
  return Ge(A, (y, T) => ({ class: y, style: T, ...s }), [
    () => Ne({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(v).map(([y, T]) => `${y}: ${T};`).concat([i()]).join(" ")
  ]), Oe(A, (y) => c = y, () => c), Fe(A, (y, T) => Z == null ? void 0 : Z(y, T), n), w(t, A), Te(_);
}
var vg = /* @__PURE__ */ he('<div class="mdc-notched-outline__notch"><!></div>'), mg = /* @__PURE__ */ he('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function qc(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "notched", 3, !1), a = g(e, "noLabel", 3, !1), s = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), c, l = /* @__PURE__ */ Ie(void 0), u = /* @__PURE__ */ Ie(void 0), d = Ae({}), v = Ae({}), f;
  we(() => {
    o(u) !== f && (o(u) ? (o(u).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(u) && o(u).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), f = o(u));
  }), oe("SMUI:floating-label:mount", (x) => {
    X(u, x, !0);
  }), oe("SMUI:floating-label:unmount", () => {
    X(u, void 0);
  }), lt(() => (X(
    l,
    new ig({
      addClass: m,
      removeClass: h,
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
  function h(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function p(x, C) {
    v[x] != C && (C === "" || C == null ? delete v[x] : v[x] = C);
  }
  function b(x) {
    x in v && delete v[x];
  }
  function I(x) {
    var C;
    (C = o(l)) == null || C.notch(x);
  }
  function S() {
    var x;
    (x = o(l)) == null || x.closeNotch();
  }
  function E() {
    return c;
  }
  var _ = { notch: I, closeNotch: S, getElement: E }, A = mg();
  Ge(A, (x) => ({ class: x, ...s }), [
    () => Ne({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var y = ge(de(A), 2);
  {
    var T = (x) => {
      var C = vg(), P = de(C);
      Ee(P, () => e.children ?? ve), Ce((W) => gt(C, W), [
        () => Object.entries(v).map(([W, F]) => `${W}: ${F};`).join(" ")
      ]), w(x, C);
    };
    ae(y, (x) => {
      a() || x(T);
    });
  }
  return Oe(A, (x) => c = x, () => c), Fe(A, (x, C) => Z == null ? void 0 : Z(x, C), n), w(t, A), Te(_);
}
function Ji(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, di), a = g(e, "tag", 3, "div"), s = g(e, "_smuiClass", 3, ""), c = g(e, "_smuiClassMap", 23, () => ({})), l = g(e, "_smuiContexts", 19, () => ({})), u = g(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ ze(e, [
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
  ]), v;
  const f = [];
  Object.entries(c()).forEach(([I, S]) => {
    const E = me(S);
    E && "subscribe" in E && f.push(E.subscribe((_) => {
      c()[I] = _;
    }));
  });
  for (let I in l())
    l().hasOwnProperty(I) && oe(I, l()[I]);
  _n(() => {
    for (const I of f)
      I();
  });
  function m() {
    return v.getElement();
  }
  var h = { getElement: m }, p = ee(), b = z(p);
  {
    let I = /* @__PURE__ */ _e(() => Ne({
      [s()]: !0,
      ...c(),
      [r()]: !0
    }));
    vr(b, i, (S, E) => {
      Oe(
        E(S, tt(
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
          u,
          () => d,
          {
            children: (_, A) => {
              var y = ee(), T = z(y);
              Ee(T, () => e.children ?? ve), w(_, y);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => v = _,
        () => v
      );
    });
  }
  return w(t, p), Te(h);
}
function gg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Ji(t, tt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, c) => {
        var l = ee(), u = z(l);
        Ee(u, () => e.children ?? ve), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
function pg(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Ji(t, tt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, c) => {
          var l = ee(), u = z(l);
          Ee(u, () => e.children ?? ve), w(s, l);
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
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Ji(t, tt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, c) => {
          var l = ee(), u = z(l);
          Ee(u, () => e.children ?? ve), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var _g = /* @__PURE__ */ he("<input/>");
function yg(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "type", 3, "text"), a = g(e, "placeholder", 3, " "), s = g(e, "value", 15), c = g(e, "files", 15, null), l = g(e, "dirty", 15, !1), u = g(e, "invalid", 15, !1), d = g(e, "updateInvalid", 3, !0), v = g(e, "initialInvalid", 3, !1), f = g(e, "emptyValueNull", 19, () => s() === null), m = g(e, "emptyValueUndefined", 19, () => s() === void 0), h = /* @__PURE__ */ ze(e, [
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
  ]), p, b = Ae({}), I = Ae({});
  we(() => {
    i() === "file" ? delete I.value : I.value = s() == null ? "" : s();
  }), lt(() => {
    d() && v() && u(P().matches(":invalid"));
  });
  function S(V) {
    return V === "" ? Number.NaN : +V;
  }
  function E(V) {
    if (i() === "file") {
      c(V.currentTarget.files);
      return;
    }
    if (V.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (V.currentTarget.value === "" && m()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(S(V.currentTarget.value));
        break;
      default:
        s(V.currentTarget.value);
        break;
    }
  }
  function _(V) {
    (i() === "file" || i() === "range") && E(V), l(!0), d() && u(P().matches(":invalid"));
  }
  function A(V) {
    return V in b ? b[V] ?? null : P().getAttribute(V);
  }
  function y(V, G) {
    b[V] !== G && (b[V] = G);
  }
  function T(V) {
    (!(V in b) || b[V] != null) && (b[V] = void 0);
  }
  function x() {
    P().focus();
  }
  function C() {
    P().blur();
  }
  function P() {
    return p;
  }
  var W = { getAttr: A, addAttr: y, removeAttr: T, focus: x, blur: C, getElement: P }, F = _g(), k = (V) => {
    var G;
    i() !== "file" && E(V), (G = e.oninput) == null || G.call(e, V);
  }, le = (V) => {
    var G;
    _(V), (G = e.onchange) == null || G.call(e, V);
  };
  return Ge(
    F,
    (V) => ({
      class: V,
      type: i(),
      placeholder: a(),
      ...I,
      ...b,
      ...h,
      oninput: k,
      onchange: le
    }),
    [
      () => Ne({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Oe(F, (V) => p = V, () => p), Fe(F, (V, G) => Z == null ? void 0 : Z(V, G), n), w(t, F), Te(W);
}
var Ig = /* @__PURE__ */ he("<textarea></textarea>");
function Eg(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "value", 15, ""), s = g(e, "dirty", 15, !1), c = g(e, "invalid", 15, !1), l = g(e, "updateInvalid", 3, !0), u = g(e, "initialInvalid", 3, !1), d = g(e, "resizable", 3, !0), v = /* @__PURE__ */ ze(e, [
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
  ]), f, m = Ae({});
  lt(() => {
    l() && u() && c(_().matches(":invalid"));
  });
  function h() {
    s(!0), l() && c(_().matches(":invalid"));
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
  function S() {
    _().focus();
  }
  function E() {
    _().blur();
  }
  function _() {
    return f;
  }
  var A = { getAttr: p, addAttr: b, removeAttr: I, focus: S, blur: E, getElement: _ }, y = Ig(), T = (x) => {
    var C;
    h(), (C = e.onchange) == null || C.call(e, x);
  };
  return Ge(
    y,
    (x) => ({
      class: x,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...v,
      onchange: T
    }),
    [
      () => Ne({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Oe(y, (x) => f = x, () => f), Fe(y, (x, C) => Z == null ? void 0 : Z(x, C), n), oi(() => _a(y, a)), w(t, y), Te(A);
}
var Sg = /* @__PURE__ */ he('<span class="mdc-text-field__ripple"></span>'), Ag = /* @__PURE__ */ he("<!> <!>", 1), Cg = /* @__PURE__ */ he("<span><!> <!></span>"), xg = /* @__PURE__ */ he("<!> <!> <!>", 1), Tg = /* @__PURE__ */ he("<label><!> <!> <!> <!> <!> <!> <!></label>"), wg = /* @__PURE__ */ he("<div><!> <!> <!> <!> <!></div>"), Og = /* @__PURE__ */ he("<!> <!>", 1);
function Eo(t, e) {
  xe(e, !0);
  const { applyPassive: n } = Bc;
  let r = () => {
  };
  function i(D) {
    return D === r;
  }
  let a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "style", 3, ""), l = g(e, "ripple", 3, !0), u = g(e, "disabled", 3, !1), d = g(e, "required", 3, !1), v = g(e, "textarea", 3, !1), f = g(e, "variant", 19, () => v() ? "outlined" : "standard"), m = g(e, "noLabel", 3, !1), h = g(e, "type", 3, "text"), p = g(e, "value", 15), b = g(e, "files", 15, r), I = g(e, "invalid", 15, r), S = g(e, "updateInvalid", 19, () => i(I())), E = g(e, "initialInvalid", 3, !1), _ = g(e, "dirty", 15, !1), A = g(e, "validateOnValueChange", 19, S), y = g(e, "useNativeValidation", 19, S), T = g(e, "withLeadingIcon", 3, r), x = g(e, "withTrailingIcon", 3, r), C = g(e, "input", 7), P = g(e, "floatingLabel", 7), W = g(e, "lineRipple", 7), F = g(e, "notchedOutline", 7), k = /* @__PURE__ */ ze(e, [
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
  const le = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(I()) && I(!1);
  let V, G = /* @__PURE__ */ Ie(void 0), U = new ci(), j = Ae({}), ne = Ae({}), M = /* @__PURE__ */ Ie(void 0), L = /* @__PURE__ */ Ie(!1), O = /* @__PURE__ */ Ie(Ae(E())), se = me("SMUI:addLayoutListener"), te, Y, ye = new Promise((D) => Y = D), B, J, Q, fe;
  const Se = /* @__PURE__ */ _e(() => C() && C().getElement());
  we(() => {
    (_() || o(O) || !S()) && o(G) && o(G).isValid() !== !I() && (S() ? I(!o(G).isValid()) : o(G).setValid(!I()));
  }), we(() => {
    o(G) && o(G).getValidateOnValueChange() !== A() && o(G).setValidateOnValueChange(i(A()) ? !1 : A());
  }), we(() => {
    o(G) && o(G).setUseNativeValidation(i(y()) ? !0 : y());
  }), we(() => {
    o(G) && o(G).setDisabled(u());
  });
  let K = p();
  we(() => {
    if (o(G) && le && K !== p()) {
      K = p();
      const D = `${p() == null ? "" : p()}`;
      o(G).getValue() !== D && o(G).setValue(D);
    }
  }), se && (te = se(H)), oe("SMUI:textfield:leading-icon:mount", (D) => {
    B = D;
  }), oe("SMUI:textfield:leading-icon:unmount", () => {
    B = void 0;
  }), oe("SMUI:textfield:trailing-icon:mount", (D) => {
    J = D;
  }), oe("SMUI:textfield:trailing-icon:unmount", () => {
    J = void 0;
  }), oe("SMUI:textfield:helper-text:id", (D) => {
    X(M, D, !0);
  }), oe("SMUI:textfield:helper-text:mount", (D) => {
    Q = D;
  }), oe("SMUI:textfield:helper-text:unmount", () => {
    X(M, void 0), Q = void 0;
  }), oe("SMUI:textfield:character-counter:mount", (D) => {
    fe = D;
  }), oe("SMUI:textfield:character-counter:unmount", () => {
    fe = void 0;
  }), lt(() => {
    var D;
    if (X(
      G,
      new lg(
        {
          // getRootAdapterMethods_
          addClass: Me,
          removeClass: Le,
          hasClass: ie,
          registerTextFieldInteractionHandler: ($, De) => U.on(q(), $, De),
          deregisterTextFieldInteractionHandler: ($, De) => U.off(q(), $, De),
          registerValidationAttributeChangeHandler: ($) => {
            const De = (bt) => bt.map((kt) => kt.attributeName).filter((kt) => kt), ct = new MutationObserver((bt) => {
              y() && $(De(bt));
            }), yt = { attributes: !0 };
            return C() && ct.observe(C().getElement(), yt), ct;
          },
          deregisterValidationAttributeChangeHandler: ($) => {
            $.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var $;
            return (($ = C()) == null ? void 0 : $.getElement()) ?? null;
          },
          setInputAttr: ($, De) => {
            var ct;
            (ct = C()) == null || ct.addAttr($, De);
          },
          removeInputAttr: ($) => {
            var De;
            (De = C()) == null || De.removeAttr($);
          },
          isFocused: () => {
            var $;
            return document.activeElement === (($ = C()) == null ? void 0 : $.getElement());
          },
          registerInputInteractionHandler: ($, De) => {
            var yt;
            const ct = (yt = C()) == null ? void 0 : yt.getElement();
            if (ct) {
              const bt = n();
              U.on(ct, $, De, typeof bt == "boolean" ? { capture: bt } : bt);
            }
          },
          deregisterInputInteractionHandler: ($, De) => {
            var yt;
            const ct = (yt = C()) == null ? void 0 : yt.getElement();
            ct && U.off(ct, $, De);
          },
          // getLabelAdapterMethods_
          floatLabel: ($) => P() && P().float($),
          getLabelWidth: () => P() ? P().getWidth() : 0,
          hasLabel: () => !!P(),
          shakeLabel: ($) => P() && P().shake($),
          setLabelRequired: ($) => P() && P().setRequired($),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => W() && W().activate(),
          deactivateLineRipple: () => W() && W().deactivate(),
          setLineRippleTransformOrigin: ($) => W() && W().setRippleCenter($),
          // getOutlineAdapterMethods_
          closeOutline: () => F() && F().closeNotch(),
          hasOutline: () => !!F(),
          notchOutline: ($) => F() && F().notch($)
        },
        {
          get helperText() {
            return Q;
          },
          get characterCounter() {
            return fe;
          },
          get leadingIcon() {
            return B;
          },
          get trailingIcon() {
            return J;
          }
        }
      ),
      !0
    ), le) {
      if (C() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (D = o(G)) == null || D.init();
    } else
      ec().then(() => {
        var $;
        if (C() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        ($ = o(G)) == null || $.init();
      });
    return Y(), () => {
      var $;
      ($ = o(G)) == null || $.destroy(), U.clear();
    };
  }), _n(() => {
    te && te();
  });
  function ie(D) {
    return D in j ? j[D] ?? null : q().classList.contains(D);
  }
  function Me(D) {
    j[D] || (j[D] = !0);
  }
  function Le(D) {
    (!(D in j) || j[D]) && (j[D] = !1);
  }
  function ke(D, $) {
    ne[D] != $ && ($ === "" || $ == null ? delete ne[D] : ne[D] = $);
  }
  function Qe() {
    var D;
    (D = C()) == null || D.focus();
  }
  function Ue() {
    var D;
    (D = C()) == null || D.blur();
  }
  function H() {
    if (o(G)) {
      const D = o(G).shouldFloat;
      o(G).notchOutline(D);
    }
  }
  function q() {
    return V;
  }
  var ce = { focus: Qe, blur: Ue, layout: H, getElement: q }, Re = Og(), st = z(Re);
  {
    var pt = (D) => {
      var $ = Tg();
      Ge($, (je, Ze, Je) => ({ class: je, style: Ze, for: void 0, ...Je }), [
        () => Ne({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": o(L) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(x()) ? e.trailingIcon : x(),
          "mdc-text-field--with-internal-counter": v() && e.internalCounter,
          "mdc-text-field--invalid": I(),
          ...j,
          [s()]: !0
        }),
        () => Object.entries(ne).map(([je, Ze]) => `${je}: ${Ze};`).concat([c()]).join(" "),
        () => ii(k, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = de($);
      {
        var ct = (je) => {
          var Ze = Ag(), Je = z(Ze);
          {
            var Ht = (ut) => {
              var Tt = Sg();
              w(ut, Tt);
            };
            ae(Je, (ut) => {
              f() === "filled" && ut(Ht);
            });
          }
          var hn = ge(Je, 2);
          {
            var rt = (ut) => {
              {
                let Tt = /* @__PURE__ */ _e(() => o(L) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), $e = /* @__PURE__ */ _e(() => ft(k, "label$"));
                Oe(
                  fs(ut, tt(
                    {
                      get floatAbove() {
                        return o(Tt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o($e),
                    {
                      children: (Lt, Ln) => {
                        var Rt = ee(), It = z(Rt);
                        {
                          var Pt = (Bt) => {
                          }, on = (Bt) => {
                            var ln = ee(), Yt = z(ln);
                            {
                              var Vn = (un) => {
                                var zt = Et();
                                Ce(() => Ye(zt, e.label)), w(un, zt);
                              }, Nr = (un) => {
                                var zt = ee(), Gn = z(zt);
                                Ee(Gn, () => e.label), w(un, zt);
                              };
                              ae(
                                Yt,
                                (un) => {
                                  typeof e.label == "string" ? un(Vn) : un(Nr, !1);
                                },
                                !0
                              );
                            }
                            w(Bt, ln);
                          };
                          ae(It, (Bt) => {
                            e.label == null ? Bt(Pt) : Bt(on, !1);
                          });
                        }
                        w(Lt, Rt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Lt) => P(Lt),
                  () => P()
                );
              }
            };
            ae(hn, (ut) => {
              !m() && e.label != null && ut(rt);
            });
          }
          w(je, Ze);
        };
        ae(De, (je) => {
          !v() && f() !== "outlined" && je(ct);
        });
      }
      var yt = ge(De, 2);
      {
        var bt = (je) => {
          {
            let Ze = /* @__PURE__ */ _e(() => m() || e.label == null), Je = /* @__PURE__ */ _e(() => ft(k, "outline$"));
            Oe(
              qc(je, tt(
                {
                  get noLabel() {
                    return o(Ze);
                  }
                },
                () => o(Je),
                {
                  children: (Ht, hn) => {
                    var rt = ee(), ut = z(rt);
                    {
                      var Tt = ($e) => {
                        {
                          let Lt = /* @__PURE__ */ _e(() => o(L) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Ln = /* @__PURE__ */ _e(() => ft(k, "label$"));
                          Oe(
                            fs($e, tt(
                              {
                                get floatAbove() {
                                  return o(Lt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(Ln),
                              {
                                children: (Rt, It) => {
                                  var Pt = ee(), on = z(Pt);
                                  {
                                    var Bt = (Yt) => {
                                    }, ln = (Yt) => {
                                      var Vn = ee(), Nr = z(Vn);
                                      {
                                        var un = (Gn) => {
                                          var Ur = Et();
                                          Ce(() => Ye(Ur, e.label)), w(Gn, Ur);
                                        }, zt = (Gn) => {
                                          var Ur = ee(), Rs = z(Ur);
                                          Ee(Rs, () => e.label), w(Gn, Ur);
                                        };
                                        ae(
                                          Nr,
                                          (Gn) => {
                                            typeof e.label == "string" ? Gn(un) : Gn(zt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(Yt, Vn);
                                    };
                                    ae(on, (Yt) => {
                                      e.label == null ? Yt(Bt) : Yt(ln, !1);
                                    });
                                  }
                                  w(Rt, Pt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Rt) => P(Rt),
                            () => P()
                          );
                        }
                      };
                      ae(ut, ($e) => {
                        !m() && e.label != null && $e(Tt);
                      });
                    }
                    w(Ht, rt);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ht) => F(Ht),
              () => F()
            );
          }
        };
        ae(yt, (je) => {
          (v() || f() === "outlined") && je(bt);
        });
      }
      var kt = ge(yt, 2);
      Ga(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (je, Ze) => {
          var Je = ee(), Ht = z(Je);
          Ee(Ht, () => e.leadingIcon ?? ve), w(je, Je);
        },
        $$slots: { default: !0 }
      });
      var mr = ge(kt, 2);
      Ee(mr, () => e.children ?? ve);
      var vt = ge(mr, 2);
      {
        var Dt = (je) => {
          var Ze = Cg(), Je = de(Ze);
          {
            let hn = /* @__PURE__ */ _e(() => ft(k, "input$"));
            Oe(
              Eg(Je, tt(
                {
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return o(O);
                  },
                  get "aria-controls"() {
                    return o(M);
                  },
                  get "aria-describedby"() {
                    return o(M);
                  }
                },
                () => o(hn),
                {
                  onblur: (rt) => {
                    var ut;
                    X(L, !1), X(O, !0), Xe(q(), "blur", rt), (ut = e.input$onblur) == null || ut.call(e, rt);
                  },
                  onfocus: (rt) => {
                    var ut;
                    X(L, !0), Xe(q(), "focus", rt), (ut = e.input$onfocus) == null || ut.call(e, rt);
                  },
                  get value() {
                    return p();
                  },
                  set value(rt) {
                    p(rt);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(rt) {
                    _(rt);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(rt) {
                    I(rt);
                  }
                }
              )),
              (rt) => C(rt),
              () => C()
            );
          }
          var Ht = ge(Je, 2);
          Ee(Ht, () => e.internalCounter ?? ve), Ce((hn) => Bo(Ze, 1, hn), [
            () => lc(Ne({
              "mdc-text-field__resizer": !("input$resizable" in k) || e.input$resizable
            }))
          ]), w(je, Ze);
        }, St = (je) => {
          var Ze = xg(), Je = z(Ze);
          {
            var Ht = (Tt) => {
              var $e = ee(), Lt = z($e);
              {
                var Ln = (It) => {
                  pg(It, {
                    children: (Pt, on) => {
                      var Bt = Et();
                      Ce(() => Ye(Bt, e.prefix)), w(Pt, Bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Rt = (It) => {
                  var Pt = ee(), on = z(Pt);
                  Ee(on, () => e.prefix ?? ve), w(It, Pt);
                };
                ae(Lt, (It) => {
                  typeof e.prefix == "string" ? It(Ln) : It(Rt, !1);
                });
              }
              w(Tt, $e);
            };
            ae(Je, (Tt) => {
              e.prefix != null && Tt(Ht);
            });
          }
          var hn = ge(Je, 2);
          {
            let Tt = /* @__PURE__ */ _e(() => ft(k, "input$"));
            Oe(
              yg(hn, tt(
                {
                  get type() {
                    return h();
                  },
                  get disabled() {
                    return u();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return o(O);
                  },
                  get "aria-controls"() {
                    return o(M);
                  },
                  get "aria-describedby"() {
                    return o(M);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Tt),
                {
                  onblur: ($e) => {
                    var Lt;
                    X(L, !1), X(O, !0), Xe(q(), "blur", $e), (Lt = e.input$onblur) == null || Lt.call(e, $e);
                  },
                  onfocus: ($e) => {
                    var Lt;
                    X(L, !0), Xe(q(), "focus", $e), (Lt = e.input$onfocus) == null || Lt.call(e, $e);
                  },
                  get value() {
                    return p();
                  },
                  set value($e) {
                    p($e);
                  },
                  get files() {
                    return b();
                  },
                  set files($e) {
                    b($e);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty($e) {
                    _($e);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid($e) {
                    I($e);
                  }
                }
              )),
              ($e) => C($e),
              () => C()
            );
          }
          var rt = ge(hn, 2);
          {
            var ut = (Tt) => {
              var $e = ee(), Lt = z($e);
              {
                var Ln = (It) => {
                  bg(It, {
                    children: (Pt, on) => {
                      var Bt = Et();
                      Ce(() => Ye(Bt, e.suffix)), w(Pt, Bt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Rt = (It) => {
                  var Pt = ee(), on = z(Pt);
                  Ee(on, () => e.suffix ?? ve), w(It, Pt);
                };
                ae(Lt, (It) => {
                  typeof e.suffix == "string" ? It(Ln) : It(Rt, !1);
                });
              }
              w(Tt, $e);
            };
            ae(rt, (Tt) => {
              e.suffix != null && Tt(ut);
            });
          }
          w(je, Ze);
        };
        ae(vt, (je) => {
          v() && typeof p() == "string" ? je(Dt) : je(St, !1);
        });
      }
      var On = ge(vt, 2);
      Ga(On, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (je, Ze) => {
          var Je = ee(), Ht = z(Je);
          Ee(Ht, () => e.trailingIcon ?? ve), w(je, Je);
        },
        $$slots: { default: !0 }
      });
      var vi = ge(On, 2);
      {
        var Bn = (je) => {
          {
            let Ze = /* @__PURE__ */ _e(() => ft(k, "ripple$"));
            Oe(jc(je, tt(() => o(Ze))), (Je) => W(Je), () => W());
          }
        };
        ae(vi, (je) => {
          !v() && f() !== "outlined" && l() && je(Bn);
        });
      }
      Oe($, (je) => V = je, () => V), Fe($, (je, Ze) => $t == null ? void 0 : $t(je, Ze), () => ({
        ripple: !v() && f() === "filled",
        unbounded: !1,
        addClass: Me,
        removeClass: Le,
        addStyle: ke,
        eventTarget: o(Se),
        activeTarget: o(Se),
        initPromise: ye
      })), Fe($, (je, Ze) => Z == null ? void 0 : Z(je, Ze), a), w(D, $);
    }, ht = (D) => {
      var $ = wg();
      Ge($, (vt, Dt, St) => ({ class: vt, style: Dt, ...St }), [
        () => Ne({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": v(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !v(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": I(),
          ...j,
          [s()]: !0
        }),
        () => Object.entries(ne).map(([vt, Dt]) => `${vt}: ${Dt};`).concat([c()]).join(" "),
        () => ii(k, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var De = de($);
      {
        var ct = (vt) => {
          var Dt = ee(), St = z(Dt);
          Ee(St, () => e.label ?? ve), w(vt, Dt);
        };
        ae(De, (vt) => {
          typeof e.label != "string" && vt(ct);
        });
      }
      var yt = ge(De, 2);
      Ga(yt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (vt, Dt) => {
          var St = ee(), On = z(St);
          Ee(On, () => e.leadingIcon ?? ve), w(vt, St);
        },
        $$slots: { default: !0 }
      });
      var bt = ge(yt, 2);
      Ee(bt, () => e.children ?? ve);
      var kt = ge(bt, 2);
      Ga(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (vt, Dt) => {
          var St = ee(), On = z(St);
          Ee(On, () => e.trailingIcon ?? ve), w(vt, St);
        },
        $$slots: { default: !0 }
      });
      var mr = ge(kt, 2);
      Ee(mr, () => e.line ?? ve), Oe($, (vt) => V = vt, () => V), Fe($, (vt, Dt) => $t == null ? void 0 : $t(vt, Dt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Me,
        removeClass: Le,
        addStyle: ke
      })), Fe($, (vt, Dt) => Z == null ? void 0 : Z(vt, Dt), a), w(D, $);
    };
    ae(st, (D) => {
      le ? D(pt) : D(ht, !1);
    });
  }
  var ue = ge(st, 2);
  {
    var N = (D) => {
      {
        let $ = /* @__PURE__ */ _e(() => ft(k, "helperLine$"));
        gg(D, tt(() => o($), {
          children: (De, ct) => {
            var yt = ee(), bt = z(yt);
            Ee(bt, () => e.helper ?? ve), w(De, yt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(ue, (D) => {
      e.helper && D(N);
    });
  }
  return w(t, Re), Te(ce);
}
var Lg = /* @__PURE__ */ he("<i><!></i>");
function Rg(t, e) {
  xe(e, !0);
  const n = () => Un(h, "$leadingStore", r), [r, i] = Jn();
  let a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = g(e, "disabled", 3, !1), u = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, v = /* @__PURE__ */ Ie(void 0), f = new ci(), m = Ae({});
  const h = me("SMUI:textfield:icon:leading"), p = n();
  let b = /* @__PURE__ */ Ie(void 0);
  const I = /* @__PURE__ */ _e(() => ({ role: e.role, tabindex: c() })), S = me("SMUI:textfield:leading-icon:mount"), E = me("SMUI:textfield:leading-icon:unmount"), _ = me("SMUI:textfield:trailing-icon:mount"), A = me("SMUI:textfield:trailing-icon:unmount");
  lt(() => (X(
    v,
    new cg({
      getAttr: y,
      setAttr: T,
      removeAttr: x,
      setContent: (G) => {
        X(b, G, !0);
      },
      registerInteractionHandler: (G, U) => f.on(C(), G, U),
      deregisterInteractionHandler: (G, U) => f.off(C(), G, U),
      notifyIconAction: () => Xe(C(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? S && S(o(v)) : _ && _(o(v)), o(v).init(), () => {
    var G;
    o(v) && (p ? E && E(o(v)) : A && A(o(v))), (G = o(v)) == null || G.destroy(), f.clear();
  }));
  function y(G) {
    return G in m ? m[G] ?? null : C().getAttribute(G);
  }
  function T(G, U) {
    m[G] !== U && (m[G] = U);
  }
  function x(G) {
    (!(G in m) || m[G] != null) && (m[G] = void 0);
  }
  function C() {
    return d;
  }
  var P = { getElement: C }, W = Lg();
  Ge(
    W,
    (G) => ({
      class: G,
      "aria-hidden": c() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(I),
      ...m,
      ...u
    }),
    [
      () => Ne({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [s()]: !0
      })
    ]
  );
  var F = de(W);
  {
    var k = (G) => {
      var U = ee(), j = z(U);
      Ee(j, () => e.children ?? ve), w(G, U);
    }, le = (G) => {
      var U = Et();
      Ce(() => Ye(U, o(b))), w(G, U);
    };
    ae(F, (G) => {
      o(b) == null ? G(k) : G(le, !1);
    });
  }
  Oe(W, (G) => d = G, () => d), Fe(W, (G, U) => Z == null ? void 0 : Z(G, U), a), w(t, W);
  var V = Te(P);
  return i(), V;
}
function Mg(t, e) {
  xe(e, !0);
  let n = g(e, "placeholder", 3, ""), r = g(e, "label", 3, ""), i = g(e, "icon", 3, ""), a = g(e, "value", 15, ""), s = g(e, "variant", 3, "standard"), c = g(e, "styles", 3, ""), l = g(e, "required", 3, !1), u = g(e, "oninput", 3, () => {
  });
  var d = ee(), v = z(d);
  {
    var f = (h) => {
      {
        const p = (I) => {
          Rg(I, {
            class: "material-icons",
            children: (S, E) => {
              var _ = Et();
              Ce(() => Ye(_, i())), w(S, _);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ _e(() => `width: 100%; ${c()}`);
        Eo(h, {
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
            return u();
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
    }, m = (h) => {
      Eo(h, {
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
          return u();
        },
        get value() {
          return a();
        },
        set value(p) {
          a(p);
        }
      });
    };
    ae(v, (h) => {
      i() ? h(f) : h(m, !1);
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
}, Ct;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(Ct || (Ct = {}));
var ei;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(ei || (ei = {}));
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
var pr, nr, qe = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
pr = {}, pr["" + qe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", pr["" + qe.LIST_ITEM_CLASS] = "mdc-list-item", pr["" + qe.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", pr["" + qe.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", pr["" + qe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", pr["" + qe.ROOT] = "mdc-list";
var yi = (nr = {}, nr["" + qe.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", nr["" + qe.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", nr["" + qe.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", nr["" + qe.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", nr["" + qe.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", nr["" + qe.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", nr["" + qe.ROOT] = "mdc-deprecated-list", nr), br = {
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
    .` + qe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + qe.LIST_ITEM_CLASS + ` a,
    .` + yi[qe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + yi[qe.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + qe.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + qe.LIST_ITEM_CLASS + ` a,
    .` + qe.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + qe.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + yi[qe.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + yi[qe.LIST_ITEM_CLASS] + ` a,
    .` + yi[qe.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + yi[qe.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, At = {
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
    s.sort(function(c, l) {
      return c.index - l.index;
    });
  }), n;
}
function So(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, s = t.skipFocus, c = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Wc(e);
  }, At.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = Fg(i, a, c, e) : l = kg(i, c, e), l !== -1 && !s && r(l), l;
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
  var c = -1, l;
  for (l = 0; l < a.length; l++)
    if (!n(a[l].index)) {
      c = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !n(a[l].index)) {
      c = l;
      break;
    }
  return c !== -1 ? (r.sortedIndexCursor = c, a[r.sortedIndexCursor].index) : -1;
}
function kg(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (n.sortedIndexCursor + 1) % i.length, c = -1; s !== n.sortedIndexCursor; ) {
    var l = i[s], u = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (u && d) {
      c = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return c !== -1 ? (n.sortedIndexCursor = c, i[n.sortedIndexCursor].index) : -1;
}
function zc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Wc(t) {
  t.typeaheadBuffer = "";
}
function Kl(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, s = t.sortedIndexByFirstChar, c = t.isItemAtIndexDisabled, l = wt(n) === "ArrowLeft", u = wt(n) === "ArrowUp", d = wt(n) === "ArrowRight", v = wt(n) === "ArrowDown", f = wt(n) === "Home", m = wt(n) === "End", h = wt(n) === "Enter", p = wt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || u || d || v || f || m || h)
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
      isItemAtIndexDisabled: c
    };
    return So(I, e);
  }
  if (!p)
    return -1;
  r && In(n);
  var S = r && zc(e);
  if (S) {
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: c
    };
    return So(I, e);
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
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = At.UNSET_INDEX, r.focusedItemIndex = At.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Ng(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return br;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qe;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return At;
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
      if (n !== At.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, qe.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = At.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, qe.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, qe.LIST_ITEM_ACTIVATED_CLASS);
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
      return this.adapter.listItemAtIndexHasClass(n, qe.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, s, c = wt(n) === "ArrowLeft", l = wt(n) === "ArrowUp", u = wt(n) === "ArrowRight", d = wt(n) === "ArrowDown", v = wt(n) === "Home", f = wt(n) === "End", m = wt(n) === "Enter", h = wt(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && u, b = this.isVertical && l || !this.isVertical && c, I = n.key === "A" || n.key === "a", S = Zl(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && S([]))
          n.preventDefault(), this.focusLastElement();
        else if ((p || v) && S([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var E = this.focusLastElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (p && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var E = this.focusFirstElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
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
      var A = this.adapter.getFocusedElementIndex();
      if (!(A === -1 && (A = i, A < 0))) {
        if (p && S([]))
          In(n), this.focusNextElement(A);
        else if (b && S([]))
          In(n), this.focusPrevElement(A);
        else if (p && S(["Shift"]) && this.isCheckboxList) {
          In(n);
          var E = this.focusNextElement(A);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (b && S(["Shift"]) && this.isCheckboxList) {
          In(n);
          var E = this.focusPrevElement(A);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (v && S([]))
          In(n), this.focusFirstElement();
        else if (f && S([]))
          In(n), this.focusLastElement();
        else if (v && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (In(n), this.isIndexDisabled(A))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, A, A);
        } else if (f && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (In(n), this.isIndexDisabled(A))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(A, this.adapter.getListItemCount() - 1, A);
        } else if (I && S(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || h) && S([])) {
          if (r) {
            var y = n.target;
            if (y && y.tagName === "A" && m || (In(n), this.isIndexDisabled(A)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(A, !1), this.adapter.notifyAction(A));
          }
        } else if ((m || h) && S(["Shift"]) && this.isCheckboxList) {
          var y = n.target;
          if (y && y.tagName === "A" && m || (In(n), this.isIndexDisabled(A)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : A, A, A), this.adapter.notifyAction(A));
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
      n !== At.UNSET_INDEX && (this.isIndexDisabled(n) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, qe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, br.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, qe.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, br.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = qe.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = qe.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== At.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== At.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === At.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, br.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? br.ARIA_CURRENT : br.ARIA_SELECTED;
      if (this.selectedIndex !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== At.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? br.ARIA_SELECTED : br.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === At.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), c = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var u = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== u && c.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, s, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && c.length && this.adapter.notifySelectionChange(c);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), c = wr([n, r].sort(), 2), l = c[0], u = c[1], d = this.getSelectionAttribute(), v = [], f = l; f <= u; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          s !== m && (v.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      v.length && (this.selectedIndex = Zn([], wr(a)), this.adapter.notifySelectionChange(v));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === At.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== At.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== At.UNSET_INDEX ? this.selectedIndex : Bg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === At.UNSET_INDEX;
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
      var c = this.selectedIndex === At.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? c.push(n) : c = c.filter(function(l) {
        return l !== n;
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
      return So(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Ug(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Wc(this.typeaheadState);
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
var Xc = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ei.TOP_START, r.originCorner = ei.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
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
        return ei;
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
      this.originCorner = this.originCorner ^ Ct.RIGHT;
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, Ct.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, Ct.RIGHT) ? "right" : "left", c = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), u = this.measurements, d = u.anchorSize, v = u.surfaceSize, f = (n = {}, n[s] = c, n[a] = l, n);
      d.width / v.width > sa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, Ct.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, c = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, Ct.BOTTOM), u, d;
      l ? (u = i.top - c + this.anchorMargin.bottom, d = i.bottom - c - this.anchorMargin.bottom) : (u = i.top - c + this.anchorMargin.top, d = i.bottom - c + a.height - this.anchorMargin.top);
      var v = d - s.height > 0;
      !v && u > d + this.openBottomBias && (n = this.setBit(n, Ct.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, Ct.FLIP_RTL), h = this.hasBit(this.anchorCorner, Ct.RIGHT) || this.hasBit(n, Ct.RIGHT), p = !1;
      f && m ? p = !h : p = h;
      var b, I;
      p ? (b = i.left + a.width + this.anchorMargin.right, I = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, I = i.right + a.width - this.anchorMargin.left);
      var S = b - s.width > 0, E = I - s.width > 0, _ = this.hasBit(n, Ct.FLIP_RTL) && this.hasBit(n, Ct.RIGHT);
      return E && _ && f || !S && _ ? n = this.unsetBit(n, Ct.RIGHT) : (S && p && f || S && !p && h || !E && b >= I) && (n = this.setBit(n, Ct.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, Ct.BOTTOM), s = this.hasBit(this.anchorCorner, Ct.BOTTOM), c = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - c, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - c, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Ct.RIGHT), a = this.hasBit(this.anchorCorner, Ct.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, Ct.BOTTOM), a = this.hasBit(this.anchorCorner, Ct.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, s = a.windowScroll, c = a.viewportDistance, l = a.surfaceSize, u = a.viewportSize, d = Object.keys(n);
      try {
        for (var v = Ut(d), f = v.next(); !f.done; f = v.next()) {
          var m = f.value, h = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (u.width - l.width) / 2;
            continue;
          }
          h += c[m], this.isFixedPosition || (m === "top" ? h += s.y : m === "bottom" ? h -= s.y : m === "left" ? h += s.x : h -= s.x), n[m] = h;
        }
      } catch (p) {
        r = { error: p };
      } finally {
        try {
          f && !f.done && (i = v.return) && i.call(v);
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
var Ri = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Ii = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, zg = {
  FOCUS_ROOT_INDEX: -1
}, Ti;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Ti || (Ti = {}));
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
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Ti.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ri;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ii;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, Ii.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(n);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, Xc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Ti.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Ti.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Ti.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Ii.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ri.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ri.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, Ii.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, qe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ii.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, qe.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, Ii.ARIA_DISABLED_ATTR, "true"));
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
var _t = {
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
}, Gr = {
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
      var i = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Gr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return _t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Gr;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Gr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Gr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(_t.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(_t.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(_t.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(_t.FOCUSED), i = n || r, a = this.adapter.hasClass(_t.REQUIRED);
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
      this.adapter.removeClass(_t.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(_t.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(_t.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(_t.FOCUSED))) {
        var r = wt(n) === Pe.ENTER, i = wt(n) === Pe.SPACEBAR, a = wt(n) === Pe.ARROW_UP, s = wt(n) === Pe.ARROW_DOWN, c = n.ctrlKey || n.metaKey;
        if (!c && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, u = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          u >= 0 && this.setSelectedIndex(u), n.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(_t.FOCUSED);
        if (n) {
          var i = Gr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(_t.INVALID), this.adapter.removeMenuClass(_t.MENU_INVALID)) : (this.adapter.addClass(_t.INVALID), this.adapter.addMenuClass(_t.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(_t.REQUIRED) && !this.adapter.hasClass(_t.DISABLED) ? this.getSelectedIndex() !== Gr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(_t.REQUIRED) : this.adapter.removeClass(_t.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ei.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(_t.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(_t.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(_t.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(_t.REQUIRED);
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
      }, Gr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
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
var jr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, rr = {
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
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return rr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return jr;
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
      return this.adapter.getAttr(jr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(rr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(rr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(rr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(rr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(rr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(rr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(rr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(rr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(jr.ROLE) : this.adapter.setAttr(jr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(jr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(jr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(jr.ARIA_HIDDEN, "true");
    }, e;
  }(qt)
), Zg = /* @__PURE__ */ he("<div><!></div>");
function Yg(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "static", 3, !1), s = g(e, "anchor", 3, !0), c = g(e, "fixed", 3, !1), l = g(e, "open", 31, () => Ae(a())), u = g(e, "managed", 3, !1), d = g(e, "fullWidth", 3, !1), v = g(e, "quickOpen", 3, !1), f = g(e, "anchorElement", 15), m = g(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), h = g(e, "maxHeight", 3, 0), p = g(e, "horizontallyCenteredOnViewport", 3, !1), b = g(e, "openBottomBias", 3, 0), I = g(e, "neverRestoreFocus", 3, !1), S = /* @__PURE__ */ ze(e, [
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
  ]), E, _ = /* @__PURE__ */ Ie(void 0), A = Ae({}), y = Ae({}), T = /* @__PURE__ */ Ie(void 0);
  oe("SMUI:list:role", "menu"), oe("SMUI:list:item:role", "menuitem"), we(() => {
    var B, J;
    E && s() && !((B = E.parentElement) != null && B.classList.contains("mdc-menu-surface--anchor")) && ((J = E.parentElement) == null || J.classList.add("mdc-menu-surface--anchor"), f(E.parentElement ?? void 0));
  }), we(() => {
    o(_) && o(_).isOpen() !== l() && (l() ? o(_).open() : o(_).close());
  }), we(() => {
    o(_) && o(_).setQuickOpen(v());
  }), we(() => {
    o(_) && o(_).setFixedPosition(c());
  }), we(() => {
    o(_) && o(_).setMaxHeight(h());
  }), we(() => {
    o(_) && o(_).setIsHorizontallyCenteredOnViewport(p());
  });
  const x = ei;
  we(() => {
    o(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(_).setAnchorCorner(x[e.anchorCorner]) : o(_).setAnchorCorner(e.anchorCorner));
  }), we(() => {
    o(_) && o(_).setAnchorMargin(m());
  }), we(() => {
    o(_) && o(_).setOpenBottomBias(b());
  });
  const C = me("SMUI:menu-surface:mount"), P = me("SMUI:menu-surface:unmount");
  lt(() => {
    X(
      _,
      new Xc({
        addClass: F,
        removeClass: k,
        hasClass: W,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          u() || l(a()), l() || Xe(O(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          u() || l(a()), l() || Xe(O(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          u() || l(!0), l() && Xe(O(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || Xe(O(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (J) => O().contains(J),
        isRtl: () => getComputedStyle(O()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (J) => {
          y["transform-origin"] = J;
        },
        isFocused: () => document.activeElement === O(),
        saveFocus: () => {
          X(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !I() && (!E || O().contains(document.activeElement)) && o(T) && document.contains(o(T)) && "focus" in o(T) && o(T).focus();
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
        setPosition: (J) => {
          y.left = "left" in J ? `${J.left}px` : "", y.right = "right" in J ? `${J.right}px` : "", y.top = "top" in J ? `${J.top}px` : "", y.bottom = "bottom" in J ? `${J.bottom}px` : "";
        },
        setMaxHeight: (J) => {
          y["max-height"] = J;
        }
      }),
      !0
    );
    const B = {
      get open() {
        return l();
      },
      set open(J) {
        l(J);
      },
      closeProgrammatic: le
    };
    return C && C(B), o(_).init(), () => {
      var Q, fe;
      P && P(B);
      const J = o(_).isHoistedElement;
      (Q = o(_)) == null || Q.destroy(), J && ((fe = O().parentNode) == null || fe.removeChild(O()));
    };
  }), _n(() => {
    var B;
    s() && O() && ((B = O().parentElement) == null || B.classList.remove("mdc-menu-surface--anchor"));
  });
  function W(B) {
    return B in A ? A[B] : O().classList.contains(B);
  }
  function F(B) {
    A[B] || (A[B] = !0);
  }
  function k(B) {
    (!(B in A) || A[B]) && (A[B] = !1);
  }
  function le(B) {
    var J;
    (J = o(_)) == null || J.close(B), l(!1);
  }
  function V(B) {
    o(_) && l() && !u() && o(_).handleBodyClick(B);
  }
  function G() {
    return l();
  }
  function U(B) {
    l(B);
  }
  function j(B, J) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setAbsolutePosition(B, J);
  }
  function ne(B) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setIsHoisted(B);
  }
  function M() {
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
    return E;
  }
  var se = {
    isOpen: G,
    setOpen: U,
    setAbsolutePosition: j,
    setIsHoisted: ne,
    isFixed: M,
    flipCornerHorizontally: L,
    getElement: O
  }, te = Zg();
  cr("click", No.body, V, !0);
  var Y = (B) => {
    var J;
    o(_) && !u() && o(_).handleKeydown(B), (J = e.onkeydown) == null || J.call(e, B);
  };
  Ge(
    te,
    (B, J) => ({
      class: B,
      style: J,
      role: "dialog",
      ...S,
      onkeydown: Y
    }),
    [
      () => Ne({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": c(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...A,
        [r()]: !0
      }),
      () => Object.entries(y).map(([B, J]) => `${B}: ${J};`).concat([i()]).join(" ")
    ]
  );
  var ye = de(te);
  return Ee(ye, () => e.children ?? ve), Oe(te, (B) => E = B, () => E), Fe(te, (B, J) => Z == null ? void 0 : Z(B, J), n), w(t, te), Te(se);
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
  const { closest: n } = Ma;
  let r = g(e, "use", 19, () => []), i = g(e, "class", 3, ""), a = g(e, "open", 15, !1), s = g(e, "anchorElement", 15), c = g(e, "managed", 3, !1), l = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), u, d = /* @__PURE__ */ Ie(void 0), v = /* @__PURE__ */ Ie(void 0), f = /* @__PURE__ */ Ie(void 0);
  oe("SMUI:menu-surface:mount", (x) => {
    o(v) || X(v, x, !0);
  });
  const m = me("SMUI:list:mount");
  oe("SMUI:list:mount", (x) => {
    o(f) || X(f, x, !0), m && m(x);
  });
  const h = me("SMUI:menu:mount"), p = me("SMUI:menu:unmount");
  lt(() => (X(
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
      addAttributeToElementAtIndex: (x, C, P) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(x, C, P);
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
        c() || ((C = o(v)) == null || C.closeProgrammatic(x), Xe(y(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((C) => C.element).indexOf(x);
      },
      notifySelected: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Xe(y(), "SMUIMenuSelected", {
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
        return !!n(o(f).getOrderedList()[x].element, `.${Ri.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const C = o(f).getOrderedList(), P = n(C[x].element, `.${Ri.MENU_SELECTION_GROUP}`), W = P == null ? void 0 : P.querySelector(`.${Ri.MENU_SELECTED_LIST_ITEM}`);
        return W ? C.map((F) => F.element).indexOf(W) : -1;
      }
    }),
    !0
  ), h && h(o(d)), o(d).init(), () => {
    var x;
    p && o(d) && p(o(d)), (x = o(d)) == null || x.destroy();
  }));
  function b(x) {
    o(d) && o(d).handleKeydown(x);
  }
  function I() {
    return a();
  }
  function S(x) {
    a(x);
  }
  function E(x) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(x);
  }
  function _() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function A() {
    return u;
  }
  function y() {
    return u.getElement();
  }
  var T = {
    isOpen: I,
    setOpen: S,
    setDefaultFocusState: E,
    getSelectedIndex: _,
    getMenuSurface: A,
    getElement: y
  };
  {
    let x = /* @__PURE__ */ _e(() => Ne({ "mdc-menu": !0, [i()]: !0 }));
    Oe(
      Yg(t, tt(
        {
          get use() {
            return r();
          },
          get class() {
            return o(x);
          },
          get managed() {
            return c();
          }
        },
        () => l,
        {
          onkeydown: (C) => {
            var P;
            b(C), (P = e.onkeydown) == null || P.call(e, C);
          },
          onSMUIMenuSurfaceOpened: (C) => {
            var P;
            o(d) && o(d).handleMenuSurfaceOpened(), (P = e.onSMUIMenuSurfaceOpened) == null || P.call(e, C);
          },
          onSMUIListAction: (C) => {
            var P;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[C.detail.index].element), (P = e.onSMUIListAction) == null || P.call(e, C);
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
          children: (C, P) => {
            var W = ee(), F = z(W);
            Ee(F, () => e.children ?? ve), w(C, W);
          },
          $$slots: { default: !0 }
        }
      )),
      (C) => u = C,
      () => u
    );
  }
  return Te(T);
}
function Jg(t, e) {
  xe(e, !0);
  const { closest: n, matches: r } = Ma;
  let i = me("SMUI:list:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "nonInteractive", 3, !1), l = g(e, "dense", 3, !1), u = g(e, "textualList", 3, !1), d = g(e, "avatarList", 3, !1), v = g(e, "iconList", 3, !1), f = g(e, "imageList", 3, !1), m = g(e, "thumbnailList", 3, !1), h = g(e, "videoList", 3, !1), p = g(e, "twoLine", 3, !1), b = g(e, "threeLine", 3, !1), I = g(e, "vertical", 3, !0), S = g(e, "wrapFocus", 19, () => me("SMUI:list:wrapFocus") ?? !1), E = g(e, "singleSelection", 3, !1), _ = g(e, "disabledItemsFocusable", 3, !1), A = g(e, "selectedIndex", 31, () => -1), y = g(e, "radioList", 3, !1), T = g(e, "checkList", 3, !1), x = g(e, "hasTypeahead", 3, !1), C = g(e, "component", 3, di), P = g(e, "tag", 3, i ? "nav" : "ul"), W = /* @__PURE__ */ ze(e, [
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
  ]), F, k = /* @__PURE__ */ Ie(void 0), le = [], V = me("SMUI:list:role");
  const G = /* @__PURE__ */ new WeakMap();
  let U = me("SMUI:dialog:selection"), j = me("SMUI:addLayoutListener"), ne;
  oe("SMUI:list:nonInteractive", c()), oe("SMUI:separator:context", "list"), V || (E() ? (V = "listbox", oe("SMUI:list:item:role", "option")) : y() ? (V = "radiogroup", oe("SMUI:list:item:role", "radio")) : T() ? (V = "group", oe("SMUI:list:item:role", "checkbox")) : (V = "list", oe("SMUI:list:item:role", void 0))), we(() => {
    o(k) && o(k).setVerticalOrientation(I());
  }), we(() => {
    o(k) && o(k).setWrapFocus(S());
  }), we(() => {
    o(k) && o(k).setHasTypeahead(x());
  }), we(() => {
    o(k) && o(k).setSingleSelection(E());
  }), we(() => {
    o(k) && o(k).setDisabledItemsFocusable(_());
  }), we(() => {
    o(k) && E() && H() !== A() && o(k).setSelectedIndex(A());
  }), j && (ne = j(ke)), oe("SMUI:list:item:mount", (ue) => {
    le.push(ue), G.set(ue.element, ue), E() && ue.selected && A(Le(ue.element));
  }), oe("SMUI:list:item:unmount", (ue) => {
    const N = (ue && le.findIndex((D) => D === ue)) ?? -1;
    N !== -1 && (le.splice(N, 1), G.delete(ue.element));
  });
  const M = me("SMUI:list:mount"), L = me("SMUI:list:unmount");
  lt(() => {
    X(
      k,
      new Gg({
        addClassForElementIndex: Q,
        focusItemAtIndex: ce,
        getAttributeForElementIndex: (N, D) => {
          var $;
          return (($ = B()[N]) == null ? void 0 : $.getAttr(D)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? B().map((N) => N.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => le.length,
        getPrimaryTextAtIndex: Me,
        hasCheckboxAtIndex: (N) => {
          var D;
          return ((D = B()[N]) == null ? void 0 : D.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (N) => {
          var D;
          return ((D = B()[N]) == null ? void 0 : D.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (N) => {
          const D = B()[N];
          return ((D == null ? void 0 : D.hasCheckbox) && D.checked) ?? !1;
        },
        isFocusInsideList: () => F != null && Re() !== document.activeElement && Re().contains(document.activeElement),
        isRootFocused: () => F != null && document.activeElement === Re(),
        listItemAtIndexHasClass: J,
        notifyAction: (N) => {
          A(N), F != null && Xe(Re(), "SMUIListAction", { index: N });
        },
        notifySelectionChange: (N) => {
          F != null && Xe(Re(), "SMUIListSelectionChange", { changedIndices: N });
        },
        removeClassForElementIndex: fe,
        setAttributeForElementIndex: Se,
        setCheckedCheckboxOrRadioAtIndex: (N, D) => {
          B()[N].checked = D;
        },
        setTabIndexForListItemChildren: (N, D) => {
          const $ = B()[N];
          Array.prototype.forEach.call($.element.querySelectorAll("button:not(:disabled), a"), (ct) => {
            ct.setAttribute("tabindex", D);
          });
        }
      }),
      !0
    );
    const ue = {
      get element() {
        return Re();
      },
      get items() {
        return le;
      },
      get typeaheadInProgress() {
        if (!o(k))
          throw new Error("Instance is undefined.");
        return o(k).isTypeaheadInProgress();
      },
      typeaheadMatchItem(N, D) {
        if (!o(k))
          throw new Error("Instance is undefined.");
        return o(k).typeaheadMatchItem(
          N,
          D,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: B,
      focusItemAtIndex: ce,
      addClassForElementIndex: Q,
      removeClassForElementIndex: fe,
      setAttributeForElementIndex: Se,
      removeAttributeForElementIndex: K,
      getAttributeFromElementIndex: ie,
      getPrimaryTextAtIndex: Me
    };
    return M && M(ue), o(k).init(), o(k).layout(), () => {
      var N;
      L && L(ue), (N = o(k)) == null || N.destroy();
    };
  }), _n(() => {
    ne && ne();
  });
  function O(ue) {
    o(k) && ue.target && o(k).handleKeydown(ue, ue.target.classList.contains("mdc-deprecated-list-item"), Le(ue.target));
  }
  function se(ue) {
    o(k) && ue.target && o(k).handleFocusIn(Le(ue.target));
  }
  function te(ue) {
    o(k) && ue.target && o(k).handleFocusOut(Le(ue.target));
  }
  function Y(ue) {
    o(k) && ue.target && o(k).handleClick(Le(ue.target), !r(ue.target, 'input[type="checkbox"], input[type="radio"]'), ue);
  }
  function ye(ue) {
    if (y() || T()) {
      const N = Le(ue.target);
      if (N !== -1) {
        const D = B()[N];
        D && (y() && !D.checked || T()) && (r(ue.detail.target, 'input[type="checkbox"], input[type="radio"]') || (D.checked = !D.checked), D.activateRipple(), window.requestAnimationFrame(() => {
          D.deactivateRipple();
        }));
      }
    }
  }
  function B() {
    return F == null ? [] : [...Re().children].map((ue) => G.get(ue)).filter((ue) => ue && ue._smui_list_item_accessor);
  }
  function J(ue, N) {
    const D = B()[ue];
    return (D && D.hasClass(N)) ?? !1;
  }
  function Q(ue, N) {
    const D = B()[ue];
    D && D.addClass(N);
  }
  function fe(ue, N) {
    const D = B()[ue];
    D && D.removeClass(N);
  }
  function Se(ue, N, D) {
    const $ = B()[ue];
    $ && $.addAttr(N, D);
  }
  function K(ue, N) {
    const D = B()[ue];
    D && D.removeAttr(N);
  }
  function ie(ue, N) {
    const D = B()[ue];
    return D ? D.getAttr(N) : null;
  }
  function Me(ue) {
    const N = B()[ue];
    return (N && N.getPrimaryText()) ?? "";
  }
  function Le(ue) {
    const N = n(ue, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return N && r(N, ".mdc-deprecated-list-item") ? B().map((D) => D == null ? void 0 : D.element).indexOf(N) : -1;
  }
  function ke() {
    if (!o(k))
      throw new Error("Instance is undefined.");
    return o(k).layout();
  }
  function Qe(ue, N) {
    if (!o(k))
      throw new Error("Instance is undefined.");
    return o(k).setEnabled(ue, N);
  }
  function Ue() {
    if (!o(k))
      throw new Error("Instance is undefined.");
    return o(k).isTypeaheadInProgress();
  }
  function H() {
    if (!o(k))
      throw new Error("Instance is undefined.");
    return o(k).getSelectedIndex();
  }
  function q() {
    if (!o(k))
      throw new Error("Instance is undefined.");
    return o(k).getFocusedItemIndex();
  }
  function ce(ue) {
    const N = B()[ue];
    N && "focus" in N.element && N.element.focus();
  }
  function Re() {
    return F.getElement();
  }
  var st = {
    layout: ke,
    setEnabled: Qe,
    getTypeaheadInProgress: Ue,
    getSelectedIndex: H,
    getFocusedItemIndex: q,
    focusItemAtIndex: ce,
    getElement: Re
  }, pt = ee(), ht = z(pt);
  {
    let ue = /* @__PURE__ */ _e(() => Ne({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": c(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": u(),
      "mdc-deprecated-list--avatar-list": d() || U,
      "mdc-deprecated-list--icon-list": v(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": h(),
      "mdc-deprecated-list--two-line": p(),
      "smui-list--three-line": b() && !p(),
      [s()]: !0
    }));
    vr(ht, C, (N, D) => {
      Oe(
        D(N, tt(
          {
            get tag() {
              return P();
            },
            get use() {
              return a();
            },
            get class() {
              return o(ue);
            },
            get role() {
              return V;
            }
          },
          () => W,
          {
            onkeydown: ($) => {
              var De;
              O($), (De = e.onkeydown) == null || De.call(e, $);
            },
            onfocusin: ($) => {
              var De;
              se($), (De = e.onfocusin) == null || De.call(e, $);
            },
            onfocusout: ($) => {
              var De;
              te($), (De = e.onfocusout) == null || De.call(e, $);
            },
            onclick: ($) => {
              var De;
              Y($), (De = e.onclick) == null || De.call(e, $);
            },
            onSMUIAction: ($) => {
              var De;
              ye($), (De = e.onSMUIAction) == null || De.call(e, $);
            },
            children: ($, De) => {
              var ct = ee(), yt = z(ct);
              Ee(yt, () => e.children ?? ve), w($, ct);
            },
            $$slots: { default: !0 }
          }
        )),
        ($) => F = $,
        () => F
      );
    });
  }
  return w(t, pt), Te(st);
}
let $g = 0;
var ep = /* @__PURE__ */ he('<span class="mdc-deprecated-list-item__ripple"></span>'), tp = /* @__PURE__ */ he("<!><!>", 1);
function np(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(Q) {
    return Q === n;
  }
  let i = me("SMUI:list:item:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "style", 3, ""), l = g(e, "nonInteractive", 19, () => me("SMUI:list:nonInteractive") ?? !1), u = g(e, "ripple", 19, () => !l()), d = g(e, "wrapper", 3, !1), v = g(e, "activated", 15, !1), f = g(e, "role", 19, () => d() ? "presentation" : me("SMUI:list:item:role")), m = g(e, "selected", 15, !1), h = g(e, "disabled", 3, !1), p = g(e, "skipRestoreFocus", 3, !1), b = g(e, "tabindex", 15, n), I = g(e, "inputId", 19, () => "SMUI-form-field-list-" + $g++), S = g(e, "component", 3, di), E = g(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ ze(e, [
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
  let A, y = Ae({}), T = Ae({}), x = Ae({}), C = /* @__PURE__ */ Ie(void 0), P = /* @__PURE__ */ Ie(void 0);
  const W = /* @__PURE__ */ _e(() => r(b()) ? !l() && !h() && (m() || o(C) && o(C).checked) ? 0 : -1 : b());
  oe("SMUI:generic:input:props", { id: I() }), oe("SMUI:separator:context", void 0), oe("SMUI:generic:input:mount", (Q) => {
    ("_smui_checkbox_accessor" in Q || "_smui_radio_accessor" in Q) && X(C, Q, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    X(C, void 0);
  });
  const F = me("SMUI:list:item:mount"), k = me("SMUI:list:item:unmount");
  lt(() => {
    if (!m() && !l()) {
      let fe = !0, Se = A.getElement();
      for (; Se.previousElementSibling; )
        if (Se = Se.previousElementSibling, Se.nodeType === 1 && Se.classList.contains("mdc-deprecated-list-item") && !Se.classList.contains("mdc-deprecated-list-item--disabled")) {
          fe = !1;
          break;
        }
      fe && X(P, window.requestAnimationFrame(() => L(Se)), !0);
    }
    const Q = {
      _smui_list_item_accessor: !0,
      get element() {
        return Y();
      },
      get selected() {
        return m();
      },
      set selected(fe) {
        m(fe);
      },
      hasClass: le,
      addClass: V,
      removeClass: G,
      getAttr: j,
      addAttr: ne,
      removeAttr: M,
      getPrimaryText: te,
      // For inputs within item.
      get checked() {
        return (o(C) && o(C).checked) ?? !1;
      },
      set checked(fe) {
        o(C) && (o(C).checked = !!fe);
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
      action: se,
      get tabindex() {
        return o(W);
      },
      set tabindex(fe) {
        b(fe);
      },
      get disabled() {
        return h();
      },
      get activated() {
        return v();
      },
      set activated(fe) {
        v(fe);
      }
    };
    return F && F(Q), () => {
      k && k(Q);
    };
  }), _n(() => {
    o(P) && window.cancelAnimationFrame(o(P));
  });
  function le(Q) {
    return Q in y ? y[Q] : Y().classList.contains(Q);
  }
  function V(Q) {
    y[Q] || (y[Q] = !0);
  }
  function G(Q) {
    (!(Q in y) || y[Q]) && (y[Q] = !1);
  }
  function U(Q, fe) {
    T[Q] != fe && (fe === "" || fe == null ? delete T[Q] : T[Q] = fe);
  }
  function j(Q) {
    return Q in x ? x[Q] ?? null : Y().getAttribute(Q);
  }
  function ne(Q, fe) {
    x[Q] !== fe && (x[Q] = fe);
  }
  function M(Q) {
    (!(Q in x) || x[Q] != null) && (x[Q] = void 0);
  }
  function L(Q) {
    let fe = !0;
    for (; Q.nextElementSibling; )
      if (Q = Q.nextElementSibling, Q.nodeType === 1 && Q.classList.contains("mdc-deprecated-list-item")) {
        const Se = Q.attributes.getNamedItem("tabindex");
        if (Se && Se.value === "0") {
          fe = !1;
          break;
        }
      }
    fe && b(0);
  }
  function O(Q) {
    const fe = Q.key === "Enter", Se = Q.key === "Space";
    (fe || Se) && se(Q);
  }
  function se(Q) {
    h() || Xe(Y(), "SMUIAction", Q);
  }
  function te() {
    const Q = Y(), fe = Q.querySelector(".mdc-deprecated-list-item__primary-text");
    if (fe)
      return fe.textContent ?? "";
    const Se = Q.querySelector(".mdc-deprecated-list-item__text");
    return Se ? Se.textContent ?? "" : Q.textContent ?? "";
  }
  function Y() {
    return A.getElement();
  }
  var ye = { action: se, getPrimaryText: te, getElement: Y }, B = ee(), J = z(B);
  {
    let Q = /* @__PURE__ */ _e(() => [
      ...l() ? [] : [
        [
          $t,
          {
            ripple: !o(C),
            unbounded: !1,
            color: (v() || m()) && e.color == null ? "primary" : e.color,
            disabled: h(),
            addClass: V,
            removeClass: G,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), fe = /* @__PURE__ */ _e(() => Ne({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": v(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": h(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...y,
      [s()]: !0
    })), Se = /* @__PURE__ */ _e(() => Object.entries(T).map(([ie, Me]) => `${ie}: ${Me};`).concat([c()]).join(" ")), K = /* @__PURE__ */ _e(() => p() || void 0);
    vr(J, S, (ie, Me) => {
      Oe(
        Me(ie, tt(
          {
            get tag() {
              return E();
            },
            get use() {
              return o(Q);
            },
            get class() {
              return o(fe);
            },
            get style() {
              return o(Se);
            }
          },
          () => i && v() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(C) && o(C).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": h() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(K);
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
            onclick: (Le) => {
              var ke;
              se(Le), (ke = e.onclick) == null || ke.call(e, Le);
            },
            onkeydown: (Le) => {
              var ke;
              O(Le), (ke = e.onkeydown) == null || ke.call(e, Le);
            },
            children: (Le, ke) => {
              var Qe = tp(), Ue = z(Qe);
              {
                var H = (ce) => {
                  var Re = ep();
                  w(ce, Re);
                };
                ae(Ue, (ce) => {
                  u() && ce(H);
                });
              }
              var q = ge(Ue);
              Ee(q, () => e.children ?? ve), w(Le, Qe);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => A = Le,
        () => A
      );
    });
  }
  return w(t, B), Te(ye);
}
let rp = 0;
var ip = /* @__PURE__ */ he("<div><!></div>");
function ap(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "id", 19, () => "SMUI-select-helper-text-" + rp++), a = g(e, "persistent", 3, !1), s = g(e, "validationMsg", 3, !1), c = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, u = /* @__PURE__ */ Ie(void 0), d = Ae({}), v = Ae({}), f = /* @__PURE__ */ Ie(void 0);
  const m = me("SMUI:select:helper-text:id"), h = me("SMUI:select:helper-text:mount"), p = me("SMUI:select:helper-text:unmount");
  lt(() => (X(
    u,
    new Kg({
      addClass: I,
      removeClass: S,
      hasClass: b,
      getAttr: E,
      setAttr: _,
      removeAttr: A,
      setContent: (F) => {
        X(f, F, !0);
      }
    }),
    !0
  ), m && m(i()), h && h(o(u)), o(u).init(), () => {
    var F;
    p && o(u) && p(o(u)), (F = o(u)) == null || F.destroy();
  }));
  function b(F) {
    return F in d ? d[F] : y().classList.contains(F);
  }
  function I(F) {
    d[F] || (d[F] = !0);
  }
  function S(F) {
    (!(F in d) || d[F]) && (d[F] = !1);
  }
  function E(F) {
    return F in v ? v[F] ?? null : y().getAttribute(F);
  }
  function _(F, k) {
    v[F] !== k && (v[F] = k);
  }
  function A(F) {
    (!(F in v) || v[F] != null) && (v[F] = void 0);
  }
  function y() {
    return l;
  }
  var T = { getElement: y }, x = ip();
  Ge(
    x,
    (F) => ({
      class: F,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...v,
      ...c
    }),
    [
      () => Ne({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var C = de(x);
  {
    var P = (F) => {
      var k = ee(), le = z(k);
      Ee(le, () => e.children ?? ve), w(F, k);
    }, W = (F) => {
      var k = Et();
      Ce(() => Ye(k, o(f))), w(F, k);
    };
    ae(C, (F) => {
      o(f) == null ? F(P) : F(W, !1);
    });
  }
  return Oe(x, (F) => l = F, () => l), Fe(x, (F, k) => Z == null ? void 0 : Z(F, k), n), w(t, x), Te(T);
}
let sp = 0;
var op = /* @__PURE__ */ he("<input/>"), lp = /* @__PURE__ */ he('<span class="mdc-select__ripple"></span>'), up = /* @__PURE__ */ he('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function cp(t, e) {
  xe(e, !0);
  const n = () => Un(Re, "$selectedTextStore", r), [r, i] = Jn();
  let a = () => {
  };
  function s(R) {
    return R === a;
  }
  let c = g(e, "use", 19, () => []), l = g(e, "class", 3, ""), u = g(e, "style", 3, ""), d = g(e, "ripple", 3, !0), v = g(e, "disabled", 3, !1), f = g(e, "variant", 3, "standard"), m = g(e, "noLabel", 3, !1), h = g(e, "label", 3, void 0), p = g(e, "value", 15), b = g(e, "key", 3, (R) => R), I = g(e, "dirty", 15, !1), S = g(e, "invalid", 15, a), E = g(e, "updateInvalid", 19, () => s(S())), _ = g(e, "required", 3, !1), A = g(e, "inputId", 19, () => "SMUI-select-" + sp++), y = g(e, "hiddenInput", 3, !1), T = g(e, "withLeadingIcon", 3, a), x = g(e, "anchor$use", 19, () => []), C = g(e, "anchor$class", 3, ""), P = g(e, "selectedTextContainer$use", 19, () => []), W = g(e, "selectedTextContainer$class", 3, ""), F = g(e, "selectedText$use", 19, () => []), k = g(e, "selectedText$class", 3, ""), le = g(e, "dropdownIcon$use", 19, () => []), V = g(e, "dropdownIcon$class", 3, ""), G = g(e, "menu$class", 3, ""), U = /* @__PURE__ */ ze(e, [
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
  const j = s(S());
  s(S()) && S(!1);
  let ne, M = /* @__PURE__ */ Ie(void 0), L = Ae({}), O = Ae({}), se, te = Ae({}), Y = /* @__PURE__ */ Ie(-1);
  const ye = /* @__PURE__ */ _e(() => U.menu$id ?? A() + "-menu");
  let B = /* @__PURE__ */ Ie(void 0), J = me("SMUI:addLayoutListener"), Q, fe = /* @__PURE__ */ Ie(!1), Se = Ae({}), K = /* @__PURE__ */ Ie(void 0), ie = /* @__PURE__ */ Ie(void 0), Me = /* @__PURE__ */ Ie(!1), Le, ke = me("SMUI:select:context"), Qe, Ue, H, q, ce;
  oe("SMUI:list:role", ""), oe("SMUI:list:nav", !1);
  const Re = Ft("");
  oe("SMUI:select:selectedText", Re);
  const st = Ft(p());
  we(() => {
    Hn(st, p());
  }), oe("SMUI:select:value", st), we(() => {
    o(M) && o(M).getValue() !== b()(p()) && o(M).setValue(b()(p()));
  });
  let pt = o(Y);
  we(() => {
    if (pt !== o(Y))
      if (pt = o(Y), o(M))
        o(M).setSelectedIndex(
          o(Y),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = kt();
        p() !== R[o(Y)] && p(R[o(Y)]);
      }
  }), we(() => {
    o(M) && o(M).getDisabled() !== v() && o(M).setDisabled(v());
  }), we(() => {
    o(M) && I() && o(M).isValid() !== !S() && (E() ? S(!o(M).isValid()) : o(M).setValid(!S()));
  }), we(() => {
    o(M) && o(M).getRequired() !== _() && o(M).setRequired(_());
  }), J && (Q = J(vi)), oe("SMUI:select:leading-icon:mount", (R) => {
    Qe = R;
  }), oe("SMUI:select:leading-icon:unmount", () => {
    Qe = void 0;
  }), oe("SMUI:list:mount", (R) => {
    Le = R;
  }), oe("SMUI:select:helper-text:id", (R) => {
    X(B, R, !0);
  }), oe("SMUI:select:helper-text:mount", (R) => {
    Ue = R;
  }), oe("SMUI:select:helper-text:unmount", () => {
    X(B, void 0), Ue = void 0;
  }), lt(() => (X(
    M,
    new Xg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          Hn(Re, R);
        },
        isSelectAnchorFocused: () => document.activeElement === se,
        getSelectAnchorAttr: ct,
        setSelectAnchorAttr: yt,
        removeSelectAnchorAttr: bt,
        addMenuClass: $,
        removeMenuClass: De,
        openMenu: () => {
          X(fe, !0);
        },
        closeMenu: () => {
          X(fe, !1);
        },
        getAnchorElement: () => se,
        setMenuAnchorElement: (R) => {
          X(K, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          X(ie, R, !0);
        },
        setMenuWrapFocus: (R) => {
          X(Me, R, !0);
        },
        getSelectedIndex: () => o(Y),
        setSelectedIndex: (R) => {
          pt = R, X(Y, R, !0), p(kt()[o(Y)]);
        },
        focusMenuItemAtIndex: (R) => {
          Le.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => kt().map(b()),
        getMenuItemTextAtIndex: (R) => Le.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (R, pe) => Le.typeaheadMatchItem(R, pe),
        // getCommonAdapterMethods
        addClass: ue,
        removeClass: N,
        hasClass: ht,
        setRippleCenter: (R) => q && q.setRippleCenter(R),
        activateBottomLine: () => q && q.activate(),
        deactivateBottomLine: () => q && q.deactivate(),
        notifyChange: (R) => {
          var pe;
          I(!0), E() && S(!((pe = o(M)) != null && pe.isValid())), Xe(Bn(), "SMUISelectChange", { value: p(), index: o(Y) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ce,
        notchOutline: (R) => ce && ce.notch(R),
        closeOutline: () => ce && ce.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!H,
        floatLabel: (R) => H && H.float(R),
        getLabelWidth: () => H ? H.getWidth() : 0,
        setLabelRequired: (R) => H && H.setRequired(R)
      },
      {
        get helperText() {
          return Ue;
        },
        get leadingIcon() {
          return Qe;
        }
      }
    ),
    !0
  ), X(Y, kt().indexOf(p()), !0), o(M).init(), St(j), () => {
    var R;
    (R = o(M)) == null || R.destroy();
  })), _n(() => {
    Q && Q();
  });
  function ht(R) {
    return R in L ? L[R] : Bn().classList.contains(R);
  }
  function ue(R) {
    L[R] || (L[R] = !0);
  }
  function N(R) {
    (!(R in L) || L[R]) && (L[R] = !1);
  }
  function D(R, pe) {
    O[R] != pe && (pe === "" || pe == null ? delete O[R] : O[R] = pe);
  }
  function $(R) {
    Se[R] || (Se[R] = !0);
  }
  function De(R) {
    (!(R in Se) || Se[R]) && (Se[R] = !1);
  }
  function ct(R) {
    return R in te ? te[R] ?? null : Bn().getAttribute(R);
  }
  function yt(R, pe) {
    te[R] !== pe && (te[R] = pe);
  }
  function bt(R) {
    (!(R in te) || te[R] != null) && (te[R] = void 0);
  }
  function kt() {
    return Le.getOrderedList().map((R) => R.getValue());
  }
  function mr(R) {
    const pe = R.currentTarget.getBoundingClientRect();
    return (vt(R) ? R.touches[0].clientX : R.clientX) - pe.left;
  }
  function vt(R) {
    return "touches" in R;
  }
  function Dt() {
    if (o(M) == null)
      throw new Error("Instance is undefined.");
    return o(M).getUseDefaultValidation();
  }
  function St(R) {
    var pe;
    (pe = o(M)) == null || pe.setUseDefaultValidation(R);
  }
  function On() {
    se.focus();
  }
  function vi() {
    var R;
    (R = o(M)) == null || R.layout();
  }
  function Bn() {
    return ne;
  }
  var je = {
    getUseDefaultValidation: Dt,
    setUseDefaultValidation: St,
    focus: On,
    layout: vi,
    getElement: Bn
  }, Ze = up(), Je = z(Ze);
  Ge(Je, (R, pe, dt) => ({ class: R, style: pe, ...dt }), [
    () => Ne({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": v(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": m() || h() == null,
      "mdc-select--invalid": S(),
      "mdc-select--activated": o(fe),
      "mdc-data-table__pagination-rows-per-page-select": ke === "data-table:pagination",
      ...L,
      [l()]: !0
    }),
    () => Object.entries(O).map(([R, pe]) => `${R}: ${pe};`).concat([u()]).join(" "),
    () => ii(U, [
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
  var Ht = de(Je);
  {
    var hn = (R) => {
      var pe = op();
      Ge(
        pe,
        (dt) => ({
          type: "hidden",
          required: _(),
          disabled: v(),
          value: p(),
          ...dt
        }),
        [() => ft(U, "input$")],
        void 0,
        void 0,
        !0
      ), w(R, pe);
    };
    ae(Ht, (R) => {
      y() && R(hn);
    });
  }
  var rt = ge(Ht, 2), ut = (R) => {
    var pe;
    se.focus(), o(M) && o(M).handleClick(mr(R)), (pe = e.anchor$onclick) == null || pe.call(e, R);
  }, Tt = (R) => {
    var pe;
    o(M) && o(M).handleKeydown(R), (pe = e.onkeydown) == null || pe.call(e, R);
  }, $e = (R) => {
    var pe;
    o(M) && o(M).handleBlur(), Xe(Bn(), "blur", R), (pe = e.anchor$onblur) == null || pe.call(e, R);
  }, Lt = (R) => {
    var pe;
    o(M) && o(M).handleFocus(), Xe(Bn(), "focus", R), (pe = e.anchor$onfocus) == null || pe.call(e, R);
  };
  Ge(
    rt,
    (R, pe) => ({
      class: R,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": v() ? "true" : void 0,
      "aria-controls": o(ye),
      "aria-expanded": o(fe) ? "true" : "false",
      "aria-describedby": o(B),
      role: "combobox",
      tabindex: "0",
      ...te,
      ...pe,
      onclick: ut,
      onkeydown: Tt,
      onblur: $e,
      onfocus: Lt
    }),
    [
      () => Ne({ "mdc-select__anchor": !0, [C()]: !0 }),
      () => ft(U, "anchor$")
    ]
  );
  var Ln = de(rt);
  {
    var Rt = (R) => {
      var pe = lp();
      w(R, pe);
    };
    ae(Ln, (R) => {
      f() === "filled" && R(Rt);
    });
  }
  var It = ge(Ln, 2);
  {
    var Pt = (R) => {
      {
        let pe = /* @__PURE__ */ _e(() => A() + "-smui-label"), dt = /* @__PURE__ */ _e(() => n() !== ""), Mt = /* @__PURE__ */ _e(() => ft(U, "label$"));
        Oe(
          fs(R, tt(
            {
              get id() {
                return o(pe);
              },
              get floatAbove() {
                return o(dt);
              },
              get required() {
                return _();
              }
            },
            () => o(Mt),
            {
              children: ($n, er) => {
                var $i = ee(), mi = z($i);
                {
                  var Fr = (kr) => {
                  }, Ms = (kr) => {
                    var Ha = ee(), ea = z(Ha);
                    {
                      var tl = (gr) => {
                        var Br = Et();
                        Ce(() => Ye(Br, h())), w(gr, Br);
                      }, Pa = (gr) => {
                        var Br = ee(), Ds = z(Br);
                        Ee(Ds, h), w(gr, Br);
                      };
                      ae(
                        ea,
                        (gr) => {
                          typeof h() == "string" ? gr(tl) : gr(Pa, !1);
                        },
                        !0
                      );
                    }
                    w(kr, Ha);
                  };
                  ae(mi, (kr) => {
                    h() == null ? kr(Fr) : kr(Ms, !1);
                  });
                }
                w($n, $i);
              },
              $$slots: { default: !0 }
            }
          )),
          ($n) => H = $n,
          () => H
        );
      }
    };
    ae(It, (R) => {
      f() !== "outlined" && !m() && h() != null && R(Pt);
    });
  }
  var on = ge(It, 2);
  {
    var Bt = (R) => {
      {
        let pe = /* @__PURE__ */ _e(() => m() || h() == null), dt = /* @__PURE__ */ _e(() => ft(U, "outline$"));
        Oe(
          qc(R, tt(
            {
              get noLabel() {
                return o(pe);
              }
            },
            () => o(dt),
            {
              children: (Mt, $n) => {
                var er = ee(), $i = z(er);
                {
                  var mi = (Fr) => {
                    {
                      let Ms = /* @__PURE__ */ _e(() => A() + "-smui-label"), kr = /* @__PURE__ */ _e(() => n() !== ""), Ha = /* @__PURE__ */ _e(() => ft(U, "label$"));
                      Oe(
                        fs(Fr, tt(
                          {
                            get id() {
                              return o(Ms);
                            },
                            get floatAbove() {
                              return o(kr);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => o(Ha),
                          {
                            children: (ea, tl) => {
                              var Pa = ee(), gr = z(Pa);
                              {
                                var Br = (ta) => {
                                }, Ds = (ta) => {
                                  var nl = ee(), Cd = z(nl);
                                  {
                                    var xd = (gi) => {
                                      var na = Et();
                                      Ce(() => Ye(na, h())), w(gi, na);
                                    }, Td = (gi) => {
                                      var na = ee(), wd = z(na);
                                      Ee(wd, h), w(gi, na);
                                    };
                                    ae(
                                      Cd,
                                      (gi) => {
                                        typeof h() == "string" ? gi(xd) : gi(Td, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(ta, nl);
                                };
                                ae(gr, (ta) => {
                                  h() == null ? ta(Br) : ta(Ds, !1);
                                });
                              }
                              w(ea, Pa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ea) => H = ea,
                        () => H
                      );
                    }
                  };
                  ae($i, (Fr) => {
                    !m() && h() != null && Fr(mi);
                  });
                }
                w(Mt, er);
              },
              $$slots: { default: !0 }
            }
          )),
          (Mt) => ce = Mt,
          () => ce
        );
      }
    };
    ae(on, (R) => {
      f() === "outlined" && R(Bt);
    });
  }
  var ln = ge(on, 2);
  Ee(ln, () => e.leadingIcon ?? ve);
  var Yt = ge(ln, 2);
  Ge(Yt, (R, pe) => ({ class: R, ...pe }), [
    () => Ne({
      "mdc-select__selected-text-container": !0,
      [W()]: !0
    }),
    () => ft(U, "selectedTextContainer$")
  ]);
  var Vn = de(Yt);
  Ge(
    Vn,
    (R, pe) => ({
      id: A() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": A() + "-smui-label",
      ...pe
    }),
    [
      () => Ne({
        "mdc-select__selected-text": !0,
        [k()]: !0
      }),
      () => ft(U, "selectedText$")
    ]
  );
  var Nr = de(Vn);
  Fe(Vn, (R, pe) => Z == null ? void 0 : Z(R, pe), F), Fe(Yt, (R, pe) => Z == null ? void 0 : Z(R, pe), P);
  var un = ge(Yt, 2);
  Ge(un, (R, pe) => ({ class: R, ...pe }), [
    () => Ne({
      "mdc-select__dropdown-icon": !0,
      [V()]: !0
    }),
    () => ft(U, "dropdownIcon$")
  ]), Fe(un, (R, pe) => Z == null ? void 0 : Z(R, pe), le);
  var zt = ge(un, 2);
  {
    var Gn = (R) => {
      {
        let pe = /* @__PURE__ */ _e(() => ft(U, "ripple$"));
        Oe(jc(R, tt(() => o(pe))), (dt) => q = dt, () => q);
      }
    };
    ae(zt, (R) => {
      f() !== "outlined" && d() && R(Gn);
    });
  }
  Oe(rt, (R) => se = R, () => se), Fe(rt, (R, pe) => Z == null ? void 0 : Z(R, pe), x);
  var Ur = ge(rt, 2);
  {
    let R = /* @__PURE__ */ _e(() => Ne({
      "mdc-select__menu": !0,
      ...Se,
      [G()]: !0
    })), pe = /* @__PURE__ */ _e(() => ft(U, "menu$"));
    Qg(Ur, tt(
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
          return o(K);
        },
        get anchorCorner() {
          return o(ie);
        }
      },
      () => o(pe),
      {
        onSMUIMenuSelected: (dt) => {
          var Mt;
          o(M) && o(M).handleMenuItemAction(dt.detail.index), (Mt = e.onSMUIMenuSelected) == null || Mt.call(e, dt);
        },
        onSMUIMenuSurfaceClosing: (dt) => {
          var Mt;
          o(M) && o(M).handleMenuClosing(), (Mt = e.onSMUIMenuSurfaceClosing) == null || Mt.call(e, dt);
        },
        onSMUIMenuSurfaceClosed: (dt) => {
          var Mt;
          o(M) && o(M).handleMenuClosed(), (Mt = e.onSMUIMenuSurfaceClosed) == null || Mt.call(e, dt);
        },
        onSMUIMenuSurfaceOpened: (dt) => {
          var Mt;
          o(M) && o(M).handleMenuOpened(), (Mt = e.onSMUIMenuSurfaceOpened) == null || Mt.call(e, dt);
        },
        get open() {
          return o(fe);
        },
        set open(dt) {
          X(fe, dt, !0);
        },
        children: (dt, Mt) => {
          {
            let $n = /* @__PURE__ */ _e(() => ft(U, "list$"));
            Jg(dt, tt(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Me);
                }
              },
              () => o($n),
              {
                get selectedIndex() {
                  return o(Y);
                },
                set selectedIndex(er) {
                  X(Y, er, !0);
                },
                children: (er, $i) => {
                  var mi = ee(), Fr = z(mi);
                  Ee(Fr, () => e.children ?? ve), w(er, mi);
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
  Oe(Je, (R) => ne = R, () => ne), Fe(Je, (R, pe) => $t == null ? void 0 : $t(R, pe), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ue,
    removeClass: N,
    addStyle: D
  })), Fe(Je, (R, pe) => Ks == null ? void 0 : Ks(R, pe), () => ({ addClass: ue, removeClass: N })), Fe(Je, (R, pe) => Z == null ? void 0 : Z(R, pe), c);
  var Rs = ge(Je, 2);
  {
    var Sd = (R) => {
      {
        let pe = /* @__PURE__ */ _e(() => ft(U, "helperText$"));
        ap(R, tt(() => o(pe), {
          children: (dt, Mt) => {
            var $n = ee(), er = z($n);
            Ee(er, () => e.helperText ?? ve), w(dt, $n);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(Rs, (R) => {
      e.helperText && R(Sd);
    });
  }
  Ce(() => Ye(Nr, n())), w(t, Ze);
  var Ad = Te(je);
  return i(), Ad;
}
function dp(t, e) {
  xe(e, !0);
  const n = () => Un(d, "$selectedValue", r), [r, i] = Jn();
  let a = g(e, "use", 19, () => []);
  g(e, "class", 3, "");
  let s = g(e, "value", 3, ""), c = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const u = me("SMUI:select:selectedText"), d = me("SMUI:select:value");
  oe("SMUI:list:item:role", "option");
  const v = /* @__PURE__ */ _e(() => s() != null && s() !== "" && n() === s());
  lt(f), _n(f);
  function f() {
    o(v) && l && Hn(u, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var h = { getElement: m };
  Oe(
    np(t, tt(
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
          return o(v);
        }
      },
      () => c,
      {
        children: (b, I) => {
          var S = ee(), E = z(S);
          Ee(E, () => e.children ?? ve), w(b, S);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => l = b,
    () => l
  );
  var p = Te(h);
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
  let s = g(e, "variant", 3, "standard"), c = g(e, "selectedOptionIndex", 31, () => -1), l = g(e, "disabled", 3, !1);
  function u(d) {
    return () => c(d);
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
    children: (d, v) => {
      var f = ee(), m = z(f);
      sr(m, 17, n, xi, (h, p, b) => {
        {
          let I = /* @__PURE__ */ _e(() => u(b));
          dp(h, {
            get onclick() {
              return o(I);
            },
            get value() {
              return o(p).value;
            },
            children: (S, E) => {
              var _ = Et();
              Ce(() => Ye(_, o(p).label)), w(S, _);
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
var it = {
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
var hs;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(hs || (hs = {}));
var bp = (
  /** @class */
  function(t) {
    nt(e, t);
    function e(n) {
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
        return it;
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
      this.adapter.hasClass(it.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(it.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(it.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(it.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(it.OPEN), r.adapter.addBodyClass(it.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, Zs.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(it.CLOSING), this.adapter.removeClass(it.OPEN), this.adapter.removeBodyClass(it.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, Zs.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(it.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(it.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(it.SURFACE_SCRIM_SHOWN), this.adapter.addClass(it.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(it.SURFACE_SCRIM_HIDING), this.adapter.removeClass(it.SURFACE_SCRIM_SHOWING);
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
      this.animFrame.request(hs.POLL_LAYOUT_CHANGE, function() {
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
      this.animFrame.request(hs.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(it.OPENING), this.adapter.removeClass(it.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(it.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(it.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(it.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(it.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(it.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(it.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(it.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(it.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(it.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(it.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(qt)
), _p = /* @__PURE__ */ he('<div class="mdc-dialog__surface-scrim"></div>'), yp = /* @__PURE__ */ he('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function Kc(t, e) {
  xe(e, !0);
  const n = () => Un(F, "$aboveFullscreenShown", r), [r, i] = Jn(), { FocusTrap: a } = Bm, { closest: s, matches: c } = Ma;
  let l = g(e, "use", 19, () => []), u = g(e, "class", 3, ""), d = g(e, "open", 15, !1), v = g(e, "selection", 3, !1), f = g(e, "escapeKeyAction", 3, "close"), m = g(e, "scrimClickAction", 3, "close"), h = g(e, "autoStackButtons", 3, !0), p = g(e, "fullscreen", 3, !1), b = g(e, "sheet", 3, !1), I = g(e, "noContentPadding", 3, !1), S = g(e, "container$class", 3, ""), E = g(e, "surface$class", 3, ""), _ = /* @__PURE__ */ ze(e, [
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
  ]), A, y = /* @__PURE__ */ Ie(void 0), T = new ci(), x = Ae({}), C, P = Ft(!1), W = me("SMUI:dialog:aboveFullscreen"), F = me("SMUI:dialog:aboveFullscreenShown") ?? Ft(!1), k = me("SMUI:addLayoutListener"), le, V = [], G = (N) => (V.push(N), () => {
    const D = V.indexOf(N);
    D >= 0 && V.splice(D, 1);
  });
  oe("SMUI:dialog:actions:reversed", P), oe("SMUI:addLayoutListener", G), oe("SMUI:dialog:selection", v()), oe("SMUI:dialog:aboveFullscreen", W || p()), oe("SMUI:dialog:aboveFullscreenShown", F), b() && oe("SMUI:icon-button:context", "dialog:sheet"), we(() => {
    o(y) && o(y).getEscapeKeyAction() !== f() && o(y).setEscapeKeyAction(f());
  }), we(() => {
    o(y) && o(y).getScrimClickAction() !== m() && o(y).setScrimClickAction(m());
  }), we(() => {
    o(y) && o(y).getAutoStackButtons() !== h() && o(y).setAutoStackButtons(h());
  }), we(() => {
    h() || Hn(P, !0);
  }), k && (le = k(fe)), we(() => {
    o(y) && o(y).isOpen() !== d() && (d() ? o(y).open({ isAboveFullscreenDialog: !!W }) : o(y).close());
  });
  let U = n();
  we(() => {
    p() && o(y) && U !== n() && (U = n(), n() ? o(y).showSurfaceScrim() : o(y).hideSurfaceScrim());
  }), lt(() => (C = new a(A, { initialFocusEl: te() ?? void 0 }), X(
    y,
    new bp({
      addBodyClass: (N) => document.body.classList.add(N),
      addClass: ne,
      areButtonsStacked: () => gp(L()),
      clickDefaultButton: () => {
        const N = O();
        N && N.click();
      },
      eventTargetMatches: (N, D) => N ? c(N, D) : !1,
      getActionFromEvent: (N) => {
        if (!N.target)
          return "";
        const D = s(N.target, "[data-mdc-dialog-action]");
        return D && D.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: te,
      hasClass: j,
      isContentScrollable: () => hp(se()),
      notifyClosed: (N) => {
        d(!1), Xe(Se(), "SMUIDialogClosed", N ? { action: N } : {});
      },
      notifyClosing: (N) => Xe(Se(), "SMUIDialogClosing", N ? { action: N } : {}),
      notifyOpened: () => Xe(Se(), "SMUIDialogOpened", {}),
      notifyOpening: () => Xe(Se(), "SMUIDialogOpening", {}),
      releaseFocus: () => C.releaseFocus(),
      removeBodyClass: (N) => document.body.classList.remove(N),
      removeClass: M,
      reverseButtons: () => {
        Hn(P, !0);
      },
      trapFocus: () => C.trapFocus(),
      registerContentEventHandler: (N, D) => {
        const $ = se();
        $ instanceof HTMLElement && T.on($, N, D);
      },
      deregisterContentEventHandler: (N, D) => {
        const $ = se();
        $ instanceof HTMLElement && T.off($, N, D);
      },
      isScrollableContentAtTop: () => vp(se()),
      isScrollableContentAtBottom: () => mp(se()),
      registerWindowEventHandler: (N, D) => T.on(window, N, D),
      deregisterWindowEventHandler: (N, D) => T.off(window, N, D)
    }),
    !0
  ), o(y).init(), () => {
    var N;
    (N = o(y)) == null || N.destroy(), T.clear();
  })), _n(() => {
    le && le();
  });
  function j(N) {
    return N in x ? x[N] : Se().classList.contains(N);
  }
  function ne(N) {
    x[N] || (x[N] = !0);
  }
  function M(N) {
    (!(N in x) || x[N]) && (x[N] = !1);
  }
  function L() {
    return [].slice.call(Se().querySelectorAll(".mdc-dialog__button"));
  }
  function O() {
    return Se().querySelector("[data-mdc-dialog-button-default]");
  }
  function se() {
    return Se().querySelector(".mdc-dialog__content");
  }
  function te() {
    return Se().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function Y() {
    W && Hn(F, !0), requestAnimationFrame(() => {
      V.forEach((N) => N());
    });
  }
  function ye() {
    V.forEach((N) => N());
  }
  function B() {
    W && Hn(F, !1);
  }
  function J() {
    return d();
  }
  function Q(N) {
    d(N);
  }
  function fe() {
    var N;
    return (N = o(y)) == null ? void 0 : N.layout();
  }
  function Se() {
    return A;
  }
  var K = { isOpen: J, setOpen: Q, layout: fe, getElement: Se }, ie = yp();
  cr("resize", rs, () => d() && o(y) && o(y).layout()), cr("orientationchange", rs, () => d() && o(y) && o(y).layout()), cr("keydown", No.body, (N) => o(y) && o(y).handleDocumentKeydown(N));
  var Me = z(ie), Le = (N) => {
    var D;
    Y(), (D = e.onSMUIDialogOpening) == null || D.call(e, N);
  }, ke = (N) => {
    var D;
    ye(), (D = e.onSMUIDialogOpened) == null || D.call(e, N);
  }, Qe = (N) => {
    var D;
    B(), (D = e.onSMUIDialogClosed) == null || D.call(e, N);
  }, Ue = (N) => {
    var D;
    o(y) && o(y).handleClick(N), (D = e.onclick) == null || D.call(e, N);
  }, H = (N) => {
    var D;
    o(y) && o(y).handleKeydown(N), (D = e.onkeydown) == null || D.call(e, N);
  };
  Ge(
    Me,
    (N, D) => ({
      class: N,
      role: "alertdialog",
      "aria-modal": "true",
      ...D,
      onSMUIDialogOpening: Le,
      onSMUIDialogOpened: ke,
      onSMUIDialogClosed: Qe,
      onclick: Ue,
      onkeydown: H
    }),
    [
      () => Ne({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !h(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": b(),
        "mdc-dialog--no-content-padding": I(),
        "smui-dialog--selection": v(),
        ...x,
        [u()]: !0
      }),
      () => ii(_, ["container$", "surface$"])
    ]
  );
  var q = de(Me);
  Ge(q, (N, D) => ({ class: N, ...D }), [
    () => Ne({ "mdc-dialog__container": !0, [S()]: !0 }),
    () => ft(_, "container$")
  ]);
  var ce = de(q);
  Ge(ce, (N, D) => ({ class: N, role: "alertdialog", "aria-modal": "true", ...D }), [
    () => Ne({ "mdc-dialog__surface": !0, [E()]: !0 }),
    () => ft(_, "surface$")
  ]);
  var Re = de(ce);
  Ee(Re, () => e.children ?? ve);
  var st = ge(Re, 2);
  {
    var pt = (N) => {
      var D = _p();
      cr("transitionend", D, () => o(y) && o(y).handleSurfaceScrimTransitionEnd()), w(N, D);
    };
    ae(st, (N) => {
      p() && N(pt);
    });
  }
  Oe(Me, (N) => A = N, () => A), Fe(Me, (N, D) => Z == null ? void 0 : Z(N, D), l);
  var ht = ge(Me, 2);
  Ee(ht, () => e.over ?? ve), w(t, ie);
  var ue = Te(K);
  return i(), ue;
}
function Ip(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Ji(t, tt(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => n,
      {
        children: (s, c) => {
          var l = ee(), u = z(l);
          Ee(u, () => e.children ?? ve), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
function Wo(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Ji(t, tt({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (s, c) => {
        var l = ee(), u = z(l);
        Ee(u, () => e.children ?? ve), w(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Te(a);
}
function Zc(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Oe(
    Ji(t, tt(
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
        children: (s, c) => {
          var l = ee(), u = z(l);
          Ee(u, () => e.children ?? ve), w(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Te(a);
}
var Ep = /* @__PURE__ */ he('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
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
      var s = Ep(), c = z(s), l = de(c);
      Ee(l, () => e.title ?? ve);
      var u = ge(c, 2);
      Wo(u, {
        id: "large-scroll-content",
        children: (v, f) => {
          var m = ee(), h = z(m);
          Ee(h, () => e.content ?? ve), w(v, m);
        },
        $$slots: { default: !0 }
      });
      var d = ge(u, 2);
      Zc(d, {
        children: (v, f) => {
          var m = ee(), h = z(m);
          Ee(h, () => e.actions ?? ve), w(v, m);
        },
        $$slots: { default: !0 }
      }), w(i, s);
    },
    $$slots: { default: !0 }
  }), Te();
}
const Xo = Ft({
  component: null,
  props: {},
  isOpen: !1
}), Ap = Ft([]);
Ap.subscribe;
const Ql = Ae({ freeze: !1 });
function Cp(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ie(void 0), r = /* @__PURE__ */ Ie(!1);
  const i = Xo.subscribe((l) => {
    X(n, l, !0), X(r, l.isOpen, !0), Ql.freeze = !1;
  });
  lt(() => () => i()), we(() => {
    Ql.freeze = o(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = ee(), s = z(a);
  {
    var c = (l) => {
      var u = ee(), d = z(u);
      vr(d, () => o(n).component, (v, f) => {
        f(v, tt(() => o(n).props, {
          get open() {
            return o(r);
          },
          set open(m) {
            X(r, m, !0);
          }
        }));
      }), w(l, u);
    };
    ae(s, (l) => {
      o(n).isOpen && o(n).component && l(c);
    });
  }
  w(t, a), Te();
}
function Jl(t, e = {}) {
  return new Promise((n) => {
    Xo.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function Ys(t, e) {
  Xo.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
var xp = /* @__PURE__ */ he('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function $l(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "title", 3, ""), i = g(e, "message", 3, ""), a = g(e, "confirmActionText", 3, "OK"), s = g(e, "confirmActionColor", 3, "primary"), c = g(e, "cancelActionText", 3, "Cancel"), l = g(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function u() {
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
      return c();
    },
    get color() {
      return l();
    },
    onConfirm: () => u(),
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
      Wo(f, {
        children: (m, h) => {
          var p = xp(), b = de(p);
          Ce(() => Ye(b, i())), w(m, p);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Te();
}
var Tp = /* @__PURE__ */ he('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), wp = /* @__PURE__ */ he("<!> <!>", 1), Op = /* @__PURE__ */ he('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function Lp(t, e) {
  xe(e, !0);
  let n = g(e, "open", 15, !1), r = g(e, "title", 3, ""), i = g(e, "confirmActionText", 3, "Confirm"), a = g(e, "confirmActionColor", 3, "primary"), s = g(e, "cancelActionText", 3, "Cancel"), c = g(e, "width", 3, "80vw"), l = g(e, "maxWidth", 3, "85vw"), u = g(e, "height", 3, "85vh"), d = g(e, "maxHeight", 3, "85vh"), v = g(e, "confirmDisabled", 3, !1), f = g(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), m = g(e, "showCloseButton", 3, !0), h = g(e, "onClose", 3, () => {
  }), p = g(e, "onCancel", 3, () => {
  }), b = g(e, "onConfirm", 3, () => {
  });
  function I(E) {
    E.detail.action === "cancel" ? p()() : E.detail.action === "confirm" ? b()() : (E.detail.action, h()());
  }
  let S = /* @__PURE__ */ _e(() => {
    let E;
    return a() === "primary" ? E = f() : E = "#FF203A", v() ? "" : `background-color: ${E}; color: white;`;
  });
  {
    let E = /* @__PURE__ */ _e(() => `width: ${c()}; max-width: ${l()}; height: ${u()}; max-height: ${d()};`);
    Kc(t, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: I,
      get surface$style() {
        return o(E);
      },
      get open() {
        return n();
      },
      set open(_) {
        n(_);
      },
      children: (_, A) => {
        var y = Op(), T = z(y);
        Ip(T, {
          children: (W, F) => {
            var k = Tp(), le = de(k), V = de(le), G = ge(le, 2);
            {
              var U = (j) => {
                qb(j, {
                  tabindex: "-1",
                  onClick: () => {
                    n(!1), h()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              ae(G, (j) => {
                m() && j(U);
              });
            }
            Ce(() => {
              gt(k, `background-color: ${f()};`), Ye(V, r());
            }), w(W, k);
          },
          $$slots: { default: !0 }
        });
        var x = ge(T, 2);
        Wo(x, {
          id: "dialog__content",
          children: (W, F) => {
            var k = ee(), le = z(k);
            Ee(le, () => e.content ?? ve), w(W, k);
          },
          $$slots: { default: !0 }
        });
        var C = ge(x, 2), P = de(C);
        Zc(P, {
          class: "oscd-dialog__actions",
          children: (W, F) => {
            var k = wp(), le = z(k);
            {
              var V = (U) => {
                ds(U, {
                  type: "button",
                  action: "cancel",
                  color: "secondary",
                  children: (j, ne) => {
                    var M = Et();
                    Ce(() => Ye(M, s())), w(j, M);
                  },
                  $$slots: { default: !0 }
                });
              };
              ae(le, (U) => {
                s() && U(V);
              });
            }
            var G = ge(le, 2);
            ds(G, {
              type: "button",
              action: "confirm",
              get disabled() {
                return v();
              },
              get style() {
                return o(S);
              },
              children: (U, j) => {
                var ne = Et();
                Ce(() => Ye(ne, i())), w(U, ne);
              },
              $$slots: { default: !0 }
            }), w(W, k);
          },
          $$slots: { default: !0 }
        }), w(_, y);
      },
      $$slots: { default: !0 }
    });
  }
  Te();
}
const Vt = [];
for (let t = 0; t < 256; ++t)
  Vt.push((t + 256).toString(16).slice(1));
function Rp(t, e = 0) {
  return (Vt[t[e + 0]] + Vt[t[e + 1]] + Vt[t[e + 2]] + Vt[t[e + 3]] + "-" + Vt[t[e + 4]] + Vt[t[e + 5]] + "-" + Vt[t[e + 6]] + Vt[t[e + 7]] + "-" + Vt[t[e + 8]] + Vt[t[e + 9]] + "-" + Vt[t[e + 10]] + Vt[t[e + 11]] + Vt[t[e + 12]] + Vt[t[e + 13]] + Vt[t[e + 14]] + Vt[t[e + 15]]).toLowerCase();
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
var Np = /* @__PURE__ */ he('<span class="oscd-icon"><!></span>');
function Zt(t, e) {
  var n = Np(), r = de(n);
  Ee(r, () => e.children ?? ve), w(t, n);
}
var Up = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Fp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = Up();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var kp = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Ko(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = kp();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var Bp = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Vp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = Bp();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var Gp = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function jp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = Gp();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var qp = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function zp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = qp();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var Wp = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Xp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = Wp();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var Kp = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Yc(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = Kp();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var Zp = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Qc(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = Zp();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var Yp = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function Qp(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = Yp();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var Jp = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function $p(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = Jp();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
ef();
var eb = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function tb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = eb();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var nb = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function rb(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = nb();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var ib = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function ab(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = ib();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var sb = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function ob(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Zt(t, {
    children: (r, i) => {
      var a = sb();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var lb = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function ub(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Zt(t, {
    children: (r, i) => {
      var a = lb();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
var cb = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function db(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Zt(t, {
    children: (r, i) => {
      var a = cb();
      Ce(() => gt(a, n())), w(r, a);
    }
  });
}
function fb(t, e) {
  e(t.target.value);
}
var hb = /* @__PURE__ */ he('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function vb(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = hb(), a = de(i);
  a.__change = [fb, r];
  var s = ge(a, 2), c = de(s);
  Ce(() => Ye(c, n())), _a(a, r), w(t, i), Te();
}
Tn(["change"]);
function mb(t, e) {
  e(t.target.value);
}
var gb = /* @__PURE__ */ he('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function pb(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = gb(), a = de(i);
  a.__change = [mb, r];
  var s = ge(a, 2), c = de(s);
  Ce(() => Ye(c, n())), _a(a, r), w(t, i), Te();
}
Tn(["change"]);
function bb(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var _b = /* @__PURE__ */ he('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Ea(t, e) {
  xe(e, !0);
  let n = g(e, "content", 3, ""), r = g(e, "side", 3, "top"), i = g(e, "hoverDelay", 3, 0), a = g(e, "transitionDuration", 3, 80), s = g(e, "disabled", 3, !1);
  const c = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ Ie(null), u = /* @__PURE__ */ Ie(null), d = /* @__PURE__ */ Ie(null), v = /* @__PURE__ */ Ie(null), f = /* @__PURE__ */ Ie(!1), m = /* @__PURE__ */ Ie(null), h = /* @__PURE__ */ Ie(null);
  function p() {
    !n() || s() || (o(m) && clearTimeout(o(m)), i() > 0 ? X(m, setTimeout(() => X(f, !0), i()), !0) : X(f, !0));
  }
  function b() {
    o(m) && clearTimeout(o(m)), X(f, !1);
  }
  function I() {
    p();
  }
  function S() {
    b();
  }
  function E() {
    p();
  }
  function _() {
    b();
  }
  function A() {
    if (!o(u) || !o(v) || !o(l) || s()) return;
    const C = o(l).getBoundingClientRect(), P = o(v).getBoundingClientRect();
    let W = 0, F = 0;
    const k = 8;
    switch (r()) {
      case "top":
        W = C.top - P.height - k, F = C.left + C.width / 2 - P.width / 2;
        break;
      case "bottom":
        W = C.bottom + k, F = C.left + C.width / 2 - P.width / 2;
        break;
      case "left":
        W = C.top + C.height / 2 - P.height / 2, F = C.left - P.width - k;
        break;
      case "right":
        W = C.top + C.height / 2 - P.height / 2, F = C.right + k;
        break;
    }
    o(u).style.top = `${W + window.scrollY}px`, o(u).style.left = `${F + window.scrollX}px`;
  }
  function y() {
    var C;
    (C = o(h)) == null || C.disconnect(), X(h, null), o(u) && o(u).parentNode && o(u).parentNode.removeChild(o(u)), X(u, null), X(v, null), X(d, null), o(m) && clearTimeout(o(m));
  }
  _n(y), we(() => {
    if (!(!o(f) || !n() || s())) {
      if (!o(u)) {
        X(u, document.createElement("div"), !0), o(u).style.position = "absolute", o(u).style.zIndex = "9999", o(u).style.pointerEvents = "none", o(u).style.opacity = "0", o(u).style.transition = `opacity ${a()}ms ease`, o(u).id = c, o(u).setAttribute("role", "tooltip"), document.body.appendChild(o(u)), X(d, o(u).attachShadow({ mode: "open" }), !0);
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
      `, o(d).appendChild(C), X(v, document.createElement("div"), !0), o(d).appendChild(o(v)), X(
          h,
          new MutationObserver(() => {
            o(f) && A();
          }),
          !0
        ), o(h).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(v) && (o(v).className = `bubble ${r()}`, o(v).innerHTML = n()), o(u) && (o(u).style.opacity = "1", A());
    }
  }), we(() => {
    if (o(f) || !o(u))
      return;
    o(u).style.opacity = "0";
    const C = o(u), P = setTimeout(
      () => {
        C && C.parentNode && C.parentNode.removeChild(C), o(u) === C && y();
      },
      a()
    );
    return () => clearTimeout(P);
  });
  var T = _b();
  T.__keydown = [bb, n, p, b];
  var x = de(T);
  Ee(x, () => e.children ?? ve), Oe(T, (C) => X(l, C), () => o(l)), Ce(() => {
    dr(T, "aria-describedby", n() && !s() ? c : void 0), dr(T, "aria-haspopup", n() ? "true" : void 0), dr(T, "aria-expanded", n() ? o(f) ? "true" : "false" : void 0);
  }), cr("mouseenter", T, I), cr("mouseleave", T, S), cr("focus", T, E), cr("blur", T, _), w(t, T), Te();
}
Tn(["keydown"]);
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
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
      var i = yn.TRANSITION_STATE_INIT, a = yn.TRANSITION_STATE_CHECKED, s = yn.TRANSITION_STATE_UNCHECKED, c = e.cssClasses, l = c.ANIM_UNCHECKED_CHECKED, u = c.ANIM_UNCHECKED_INDETERMINATE, d = c.ANIM_CHECKED_UNCHECKED, v = c.ANIM_CHECKED_INDETERMINATE, f = c.ANIM_INDETERMINATE_CHECKED, m = c.ANIM_INDETERMINATE_UNCHECKED;
      switch (n) {
        case i:
          return r === s ? "" : r === a ? f : m;
        case s:
          return r === a ? l : u;
        case a:
          return r === s ? d : v;
        default:
          return r === a ? f : m;
      }
    }, e.prototype.updateAriaChecked = function() {
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(yn.ARIA_CHECKED_ATTR, yn.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(yn.ARIA_CHECKED_ATTR);
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
var vn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Rn = {
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
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Rn;
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
      this.determinate = !this.adapter.hasClass(vn.INDETERMINATE_CLASS), this.adapter.addClass(vn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var s = Ut(r), c = s.next(); !c.done; c = s.next()) {
              var l = c.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (u) {
            i = { error: u };
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
        this.adapter.removeClass(vn.INDETERMINATE_CLASS), this.adapter.setAttribute(Rn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Rn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Rn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(vn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Rn.ARIA_VALUENOW), this.adapter.removeAttribute(Rn.ARIA_VALUEMAX), this.adapter.removeAttribute(Rn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Rn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(vn.CLOSED_CLASS), this.adapter.removeClass(vn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Rn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(vn.CLOSED_CLASS), this.adapter.setAttribute(Rn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(vn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(vn.CLOSED_CLASS) && this.adapter.addClass(vn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(vn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(vn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? qg(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Rn.FLEX_BASIS, r);
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
var ir = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, nu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, qr = {
  ARIA_SELECTED: nu.ARIA_SELECTED,
  ARIA_SORT: nu.ARIA_SORT
}, gn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(gn || (gn = {}));
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
      return t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
        return jo(this, function(n) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, ir.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, ir.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, qr.ARIA_SORT, gn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, gn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, ir.HEADER_CELL_SORTED);
      var c = this.adapter.getAttributeByHeaderCellIndex(i, qr.ARIA_SORT), l = gn.NONE;
      c === gn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, ir.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, qr.ARIA_SORT, gn.DESCENDING), l = gn.DESCENDING) : c === gn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, ir.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, qr.ARIA_SORT, gn.ASCENDING), l = gn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, qr.ARIA_SORT, gn.ASCENDING), l = gn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(ir.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(ir.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, ir.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, qr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, ir.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, qr.ARIA_SELECTED, "false"));
    }, e;
  }(qt)
), Sb = /* @__PURE__ */ he('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Ab = /* @__PURE__ */ he("<div><div><table><!></table></div> <!> <!></div>");
function Cb(t, e) {
  xe(e, !0);
  const n = () => Un(k, "$progressClosed", r), [r, i] = Jn(), { closest: a } = Ma;
  let s = g(e, "use", 19, () => []), c = g(e, "class", 3, ""), l = g(e, "stickyHeader", 3, !1), u = g(e, "sortable", 3, !1), d = g(e, "sort", 15, null), v = g(e, "sortDirection", 15, "ascending"), f = g(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = g(e, "sortDescendingAriaLabel", 3, "sorted, descending"), h = g(e, "container$use", 19, () => []), p = g(e, "container$class", 3, ""), b = g(e, "table$use", 19, () => []), I = g(e, "table$class", 3, ""), S = /* @__PURE__ */ ze(e, [
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
  ]), E, _ = /* @__PURE__ */ Ie(void 0), A, y = /* @__PURE__ */ Ie(void 0), T = /* @__PURE__ */ Ie(void 0), x = Ae({}), C = /* @__PURE__ */ Ie(Ae({ height: "auto", top: "initial" })), P = me("SMUI:addLayoutListener"), W, F = !1, k = Ft(!1), le = Ft(d());
  we(() => {
    Hn(le, d());
  });
  let V = Ft(v());
  we(() => {
    Hn(V, v());
  }), oe("SMUI:checkbox:context", "data-table"), oe("SMUI:linear-progress:context", "data-table"), oe("SMUI:linear-progress:closed", k), oe("SMUI:data-table:sortable", u()), oe("SMUI:data-table:sort", le), oe("SMUI:data-table:sortDirection", V), oe("SMUI:data-table:sortAscendingAriaLabel", f()), oe("SMUI:data-table:sortDescendingAriaLabel", m()), P && (W = P(te));
  let G;
  we(() => {
    e.progress && o(_) && G !== n() && (G = n(), n() ? o(_).hideProgress() : o(_).showProgress());
  }), oe("SMUI:checkbox:mount", () => {
    o(_) && F && o(_).layout();
  }), oe("SMUI:data-table:header:mount", (H) => {
    X(y, H, !0);
  }), oe("SMUI:data-table:header:unmount", () => {
    X(y, void 0);
  }), oe("SMUI:data-table:body:mount", (H) => {
    X(T, H, !0);
  }), oe("SMUI:data-table:body:unmount", () => {
    X(T, void 0);
  }), lt(() => (X(
    _,
    new Eb({
      addClass: j,
      removeClass: ne,
      getHeaderCellElements: () => {
        var H;
        return ((H = o(y)) == null ? void 0 : H.cells.map((q) => q.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var H;
        return ((H = o(y)) == null ? void 0 : H.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (H, q) => {
        var ce;
        return ((ce = o(y)) == null ? void 0 : ce.orderedCells[H].getAttr(q)) ?? null;
      },
      setAttributeByHeaderCellIndex: (H, q, ce) => {
        var Re;
        (Re = o(y)) == null || Re.orderedCells[H].addAttr(q, ce);
      },
      setClassNameByHeaderCellIndex: (H, q) => {
        var ce;
        (ce = o(y)) == null || ce.orderedCells[H].addClass(q);
      },
      removeClassNameByHeaderCellIndex: (H, q) => {
        var ce;
        (ce = o(y)) == null || ce.orderedCells[H].removeClass(q);
      },
      notifySortAction: (H) => {
        d(H.columnId), v(H.sortValue), Xe(Y(), "SMUIDataTableSorted", H);
      },
      getTableContainerHeight: () => A.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const H = Y().querySelector(".mdc-data-table__header-row");
        if (!H)
          throw new Error("MDCDataTable: Table header element not found.");
        return H.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (H) => {
        X(C, H, !0);
      },
      addClassAtRowIndex: (H, q) => {
        var ce;
        (ce = o(T)) == null || ce.orderedRows[H].addClass(q);
      },
      getRowCount: () => {
        var H;
        return ((H = o(T)) == null ? void 0 : H.rows.length) ?? 0;
      },
      getRowElements: () => {
        var H;
        return ((H = o(T)) == null ? void 0 : H.rows.map((q) => q.element)) ?? [];
      },
      getRowIdAtIndex: (H) => {
        var q;
        return ((q = o(T)) == null ? void 0 : q.orderedRows[H].rowId) ?? null;
      },
      getRowIndexByChildElement: (H) => {
        var q;
        return ((q = o(T)) == null ? void 0 : q.orderedRows.map((ce) => ce.element).indexOf(a(H, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var H;
        return ((H = o(T)) == null ? void 0 : H.rows.filter((q) => q.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (H) => {
        var ce;
        const q = (ce = o(T)) == null ? void 0 : ce.orderedRows[H].checkbox;
        return q ? q.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var q;
        const H = (q = o(y)) == null ? void 0 : q.checkbox;
        return H ? H.checked : !1;
      },
      isRowsSelectable: () => !!Y().querySelector(".mdc-data-table__row-checkbox") || !!Y().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (H) => {
        var ce;
        const q = (ce = o(T)) == null ? void 0 : ce.orderedRows[H.rowIndex];
        q && Xe(Y(), "SMUIDataTableSelectionChanged", {
          row: q.element,
          rowId: q.rowId,
          rowIndex: H.rowIndex,
          selected: H.selected
        });
      },
      notifySelectedAll: () => {
        M(!1), Xe(Y(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        M(!1), Xe(Y(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (H) => Xe(Y(), "SMUIDataTableClickRow", H),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (H, q) => {
        var ce;
        (ce = o(T)) == null || ce.orderedRows[H].removeClass(q);
      },
      setAttributeAtRowIndex: (H, q, ce) => {
        var Re;
        (Re = o(T)) == null || Re.orderedRows[H].addAttr(q, ce);
      },
      setHeaderRowCheckboxChecked: (H) => {
        var ce;
        const q = (ce = o(y)) == null ? void 0 : ce.checkbox;
        q && (q.checked = H);
      },
      setHeaderRowCheckboxIndeterminate: M,
      setRowCheckboxCheckedAtIndex: (H, q) => {
        var Re;
        const ce = (Re = o(T)) == null ? void 0 : Re.orderedRows[H].checkbox;
        ce && (ce.checked = q);
      },
      setSortStatusLabelByHeaderCellIndex: (H, q) => {
      }
    }),
    !0
  ), o(_).init(), o(_).layout(), F = !0, () => {
    var H;
    (H = o(_)) == null || H.destroy();
  })), _n(() => {
    W && W();
  });
  function U(H) {
    o(_) && o(_).handleRowCheckboxChange(H);
  }
  function j(H) {
    x[H] || (x[H] = !0);
  }
  function ne(H) {
    (!(H in x) || x[H]) && (x[H] = !1);
  }
  function M(H) {
    var ce;
    const q = (ce = o(y)) == null ? void 0 : ce.checkbox;
    q && (q.indeterminate = H);
  }
  function L(H) {
    if (!o(_) || !H.detail.target)
      return;
    const q = a(H.detail.target, ".mdc-data-table__header-cell--with-sort");
    q && se(q);
  }
  function O(H) {
    if (!o(_) || !H.detail.target)
      return;
    const q = a(H.detail.target, ".mdc-data-table__row");
    q && o(_) && o(_).handleRowClick({ rowId: H.detail.rowId, row: q });
  }
  function se(H) {
    var st, pt;
    const q = ((st = o(y)) == null ? void 0 : st.orderedCells) ?? [], ce = q.map((ht) => ht.element).indexOf(H);
    if (ce === -1)
      return;
    const Re = q[ce].columnId ?? null;
    (pt = o(_)) == null || pt.handleSortAction({ columnId: Re, columnIndex: ce, headerCell: H });
  }
  function te() {
    var H;
    return (H = o(_)) == null ? void 0 : H.layout();
  }
  function Y() {
    return E;
  }
  var ye = { layout: te, getElement: Y }, B = Ab(), J = (H) => {
    var q;
    o(_) && o(_).handleHeaderRowCheckboxChange(), (q = e.onSMUIDataTableHeaderCheckboxChange) == null || q.call(e, H);
  }, Q = (H) => {
    var q;
    L(H), (q = e.onSMUIDataTableHeaderClick) == null || q.call(e, H);
  }, fe = (H) => {
    var q;
    O(H), (q = e.onSMUIDataTableRowClick) == null || q.call(e, H);
  }, Se = (H) => {
    var q;
    U(H), (q = e.onSMUIDataTableBodyCheckboxChange) == null || q.call(e, H);
  };
  Ge(
    B,
    (H, q) => ({
      class: H,
      ...q,
      onSMUIDataTableHeaderCheckboxChange: J,
      onSMUIDataTableHeaderClick: Q,
      onSMUIDataTableRowClick: fe,
      onSMUIDataTableBodyCheckboxChange: Se
    }),
    [
      () => Ne({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...x,
        [c()]: !0
      }),
      () => ii(S, ["container$", "table$"])
    ]
  );
  var K = de(B);
  Ge(K, (H, q) => ({ class: H, ...q }), [
    () => Ne({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => ft(S, "container$")
  ]);
  var ie = de(K);
  Ge(ie, (H, q) => ({ class: H, ...q }), [
    () => Ne({ "mdc-data-table__table": !0, [I()]: !0 }),
    () => ft(S, "table$")
  ]);
  var Me = de(ie);
  Ee(Me, () => e.children ?? ve), Fe(ie, (H, q) => Z == null ? void 0 : Z(H, q), b), Oe(K, (H) => A = H, () => A), Fe(K, (H, q) => Z == null ? void 0 : Z(H, q), h);
  var Le = ge(K, 2);
  {
    var ke = (H) => {
      var q = Sb(), ce = ge(de(q), 2);
      Ee(ce, () => e.progress ?? ve), Ce((Re) => gt(q, Re), [
        () => Object.entries(o(C)).map(([Re, st]) => `${Re}: ${st};`).join(" ")
      ]), w(H, q);
    };
    ae(Le, (H) => {
      e.progress && H(ke);
    });
  }
  var Qe = ge(Le, 2);
  Ee(Qe, () => e.paginate ?? ve), Oe(B, (H) => E = H, () => E), Fe(B, (H, q) => Z == null ? void 0 : Z(H, q), s), w(t, B);
  var Ue = Te(ye);
  return i(), Ue;
}
var xb = /* @__PURE__ */ he("<thead><!></thead>");
function Tb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ Ie(void 0), s = [];
  const c = /* @__PURE__ */ new WeakMap();
  oe("SMUI:data-table:row:header", !0);
  const l = me("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (I) => {
    X(a, I, !0), l && l(I);
  });
  const u = me("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (I) => {
    X(a, void 0), u && u(I);
  }), oe("SMUI:data-table:cell:mount", (I) => {
    s.push(I), c.set(I.element, I);
  }), oe("SMUI:data-table:cell:unmount", (I) => {
    const S = s.findIndex((E) => E === I);
    S !== -1 && s.splice(S, 1), c.delete(I.element);
  });
  const d = me("SMUI:data-table:header:mount"), v = me("SMUI:data-table:header:unmount");
  lt(() => {
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
      v && v(I);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((I) => c.get(I)).filter((I) => I && I._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var h = { getElement: m }, p = xb();
  Ge(p, () => ({ ...r }));
  var b = de(p);
  return Ee(b, () => e.children ?? ve), Oe(p, (I) => i = I, () => i), Fe(p, (I, S) => Z == null ? void 0 : Z(I, S), n), w(t, p), Te(h);
}
var wb = /* @__PURE__ */ he("<tbody><!></tbody>");
function Ob(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const c = /* @__PURE__ */ new WeakMap();
  oe("SMUI:data-table:row:header", !1), oe("SMUI:data-table:row:mount", (p) => {
    s.push(p), c.set(p.element, p);
  }), oe("SMUI:data-table:row:unmount", (p) => {
    const b = s.findIndex((I) => I === p);
    b !== -1 && s.splice(b, 1), c.delete(p.element);
  });
  const l = me("SMUI:data-table:body:mount"), u = me("SMUI:data-table:body:unmount");
  lt(() => {
    const p = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(p), () => {
      u && u(p);
    };
  });
  function d() {
    return [...v().querySelectorAll(".mdc-data-table__row")].map((p) => c.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function v() {
    return a;
  }
  var f = { getElement: v }, m = wb();
  Ge(m, (p) => ({ class: p, ...i }), [
    () => Ne({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = de(m);
  return Ee(h, () => e.children ?? ve), Oe(m, (p) => a = p, () => a), Fe(m, (p, b) => Z == null ? void 0 : Z(p, b), n), w(t, m), Te(f);
}
let Lb = 0;
var Rb = /* @__PURE__ */ he("<tr><!></tr>");
function qa(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "rowId", 19, () => "SMUI-data-table-row-" + Lb++), a = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, c = /* @__PURE__ */ Ie(void 0), l = Ae({}), u = Ae({}), d = me("SMUI:data-table:row:header");
  const v = me("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (P) => {
    X(c, P, !0), v && v(P);
  });
  const f = me("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (P) => {
    X(c, void 0), f && f(P);
  });
  const m = me("SMUI:data-table:row:mount"), h = me("SMUI:data-table:row:unmount");
  lt(() => {
    const P = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return A();
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
      getAttr: I,
      addAttr: S
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return A();
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
      getAttr: I,
      addAttr: S
    };
    return m && m(P), () => {
      h && h(P);
    };
  });
  function p(P) {
    l[P] || (l[P] = !0);
  }
  function b(P) {
    (!(P in l) || l[P]) && (l[P] = !1);
  }
  function I(P) {
    return P in u ? u[P] ?? null : A().getAttribute(P);
  }
  function S(P, W) {
    u[P] !== W && (u[P] = W);
  }
  function E(P) {
    Xe(A(), "SMUIDataTableHeaderClick", P);
  }
  function _(P) {
    Xe(A(), "SMUIDataTableRowClick", { rowId: i(), target: P.target });
  }
  function A() {
    return s;
  }
  var y = { getElement: A }, T = Rb(), x = (P) => {
    var W;
    d ? E(P) : _(P), (W = e.onclick) == null || W.call(e, P);
  };
  Ge(
    T,
    (P) => ({
      class: P,
      "aria-selected": o(c) ? o(c).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: x
    }),
    [
      () => Ne({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(c) && o(c).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var C = de(T);
  return Ee(C, () => e.children ?? ve), Oe(T, (P) => s = P, () => s), Fe(T, (P, W) => Z == null ? void 0 : Z(P, W), n), w(t, T), Te(y);
}
let Mb = 0;
var Db = /* @__PURE__ */ he('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Hb = /* @__PURE__ */ he("<th><!></th>"), Pb = /* @__PURE__ */ he("<td><!></td>");
function ca(t, e) {
  xe(e, !0);
  const n = () => Un(I, "$sort", i), r = () => Un(S, "$sortDirection", i), [i, a] = Jn();
  let s = me("SMUI:data-table:row:header"), c = g(e, "use", 19, () => []), l = g(e, "class", 3, ""), u = g(e, "numeric", 3, !1), d = g(e, "checkbox", 3, !1), v = g(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Mb++ : "SMUI-data-table-unused"), f = g(e, "sortable", 19, () => me("SMUI:data-table:sortable")), m = /* @__PURE__ */ ze(e, [
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
  ]), h, p = Ae({}), b = Ae({}), I = me("SMUI:data-table:sort"), S = me("SMUI:data-table:sortDirection"), E = me("SMUI:data-table:sortAscendingAriaLabel"), _ = me("SMUI:data-table:sortDescendingAriaLabel");
  f() && (oe("SMUI:label:context", "data-table:sortable-header-cell"), oe("SMUI:icon-button:context", "data-table:sortable-header-cell"), oe("SMUI:icon-button:aria-describedby", v() + "-status-label"));
  const A = me("SMUI:data-table:cell:mount"), y = me("SMUI:data-table:cell:unmount");
  lt(() => {
    const M = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return k();
      },
      get columnId() {
        return v();
      },
      addClass: T,
      removeClass: x,
      getAttr: C,
      addAttr: P
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return k();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: x,
      getAttr: C,
      addAttr: P
    };
    return A && A(M), () => {
      y && y(M);
    };
  });
  function T(M) {
    p[M] || (p[M] = !0);
  }
  function x(M) {
    (!(M in p) || p[M]) && (p[M] = !1);
  }
  function C(M) {
    return M in b ? b[M] ?? null : k().getAttribute(M);
  }
  function P(M, L) {
    b[M] !== L && (b[M] = L);
  }
  function W(M) {
    Xe(k(), "SMUIDataTableHeaderCheckboxChange", M);
  }
  function F(M) {
    Xe(k(), "SMUIDataTableBodyCheckboxChange", M);
  }
  function k() {
    return h;
  }
  var le = { getElement: k }, V = ee(), G = z(V);
  {
    var U = (M) => {
      var L = Hb(), O = (ye) => {
        var B;
        d() && W(ye), (B = e.onchange) == null || B.call(e, ye);
      };
      Ge(
        L,
        (ye) => ({
          class: ye,
          role: "columnheader",
          scope: "col",
          "data-column-id": v(),
          "aria-sort": f() ? n() === v() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: O
        }),
        [
          () => Ne({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === v(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var se = de(L);
      {
        var te = (ye) => {
          var B = Db(), J = de(B);
          Ee(J, () => e.children ?? ve);
          var Q = ge(J, 2), fe = de(Q);
          Ce(() => {
            dr(Q, "id", `${v() ?? ""}-status-label`), Ye(fe, n() === v() ? r() === "ascending" ? E : _ : "");
          }), w(ye, B);
        }, Y = (ye) => {
          var B = ee(), J = z(B);
          Ee(J, () => e.children ?? ve), w(ye, B);
        };
        ae(se, (ye) => {
          f() ? ye(te) : ye(Y, !1);
        });
      }
      Oe(L, (ye) => h = ye, () => h), Fe(L, (ye, B) => Z == null ? void 0 : Z(ye, B), c), w(M, L);
    }, j = (M) => {
      var L = Pb(), O = (te) => {
        var Y;
        d() && F(te), (Y = e.onchange) == null || Y.call(e, te);
      };
      Ge(
        L,
        (te) => ({
          class: te,
          ...b,
          ...m,
          onchange: O
        }),
        [
          () => Ne({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": u(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [l()]: !0
          })
        ]
      );
      var se = de(L);
      Ee(se, () => e.children ?? ve), Oe(L, (te) => h = te, () => h), Fe(L, (te, Y) => Z == null ? void 0 : Z(te, Y), c), w(M, L);
    };
    ae(G, (M) => {
      s ? M(U) : M(j, !1);
    });
  }
  w(t, V);
  var ne = Te(le);
  return a(), ne;
}
Tn(["click"]);
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
      var r = t.call(this, be(be({}, e.defaultAdapter), n)) || this;
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
  }(qt)
);
let kb = 0;
var Bb = /* @__PURE__ */ he("<div><!> <label><!></label></div>");
function Vb(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "align", 3, "start"), a = g(e, "noWrap", 3, !1), s = g(e, "inputId", 19, () => "SMUI-form-field-" + kb++), c = g(e, "label$use", 19, () => []), l = /* @__PURE__ */ ze(e, [
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
  ]), u, d = /* @__PURE__ */ Ie(void 0), v = new ci(), f, m = /* @__PURE__ */ Ie(void 0);
  oe("SMUI:generic:input:props", { id: s() }), oe("SMUI:generic:input:mount", (_) => {
    X(m, _, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    X(m, void 0);
  }), lt(() => (X(
    d,
    new Fb({
      activateInputRipple: () => {
        o(m) && o(m).activateRipple();
      },
      deactivateInputRipple: () => {
        o(m) && o(m).deactivateRipple();
      },
      deregisterInteractionHandler: (_, A) => v.off(f, _, A),
      registerInteractionHandler: (_, A) => v.on(f, _, A)
    }),
    !0
  ), o(d).init(), () => {
    var _;
    (_ = o(d)) == null || _.destroy(), v.clear();
  }));
  function h() {
    return u;
  }
  var p = { getElement: h }, b = Bb();
  Ge(b, (_, A) => ({ class: _, ...A }), [
    () => Ne({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => ii(l, ["label$"])
  ]);
  var I = de(b);
  Ee(I, () => e.children ?? ve);
  var S = ge(I, 2);
  Ge(S, (_) => ({ for: s(), ..._ }), [() => ft(l, "label$")]);
  var E = de(S);
  return Ee(E, () => e.label ?? ve), Oe(S, (_) => f = _, () => f), Fe(S, (_, A) => Z == null ? void 0 : Z(_, A), c), Oe(b, (_) => u = _, () => u), Fe(b, (_, A) => Z == null ? void 0 : Z(_, A), n), w(t, b), Te(p);
}
var Gb = (t, e) => {
  var n;
  t.stopPropagation(), (n = e.onClick) == null || n.call(e, t);
}, jb = /* @__PURE__ */ he('<button class="icon-button svelte-jv2py4"><!></button>');
function qb(t, e) {
  xe(e, !0);
  let n = g(e, "tooltipSide", 3, "top"), r = g(e, "showDelay", 3, 1e3), i = g(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = g(e, "size", 3, "25px"), s = /* @__PURE__ */ _e(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Ea(t, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return n();
    },
    children: (c, l) => {
      var u = jb();
      u.__click = [Gb, e];
      var d = de(u);
      {
        var v = (m) => {
          Qc(m, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (m) => {
          var h = ee(), p = z(h);
          {
            var b = (S) => {
              $p(S, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, I = (S) => {
              var E = ee(), _ = z(E);
              {
                var A = (T) => {
                  Yc(T, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, y = (T) => {
                  var x = ee(), C = z(x);
                  {
                    var P = (F) => {
                      Qp(F, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, W = (F) => {
                      var k = ee(), le = z(k);
                      {
                        var V = (U) => {
                          rb(U, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, G = (U) => {
                          var j = ee(), ne = z(j);
                          {
                            var M = (O) => {
                              ab(O, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, L = (O) => {
                              var se = ee(), te = z(se);
                              {
                                var Y = (B) => {
                                  ob(B, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, ye = (B) => {
                                  var J = ee(), Q = z(J);
                                  {
                                    var fe = (K) => {
                                      ub(K, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, Se = (K) => {
                                      var ie = Et();
                                      Ce(() => Ye(ie, `Unsupported supported type: ${e.type ?? ""}`)), w(K, ie);
                                    };
                                    ae(
                                      Q,
                                      (K) => {
                                        e.type === "star" ? K(fe) : K(Se, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(B, J);
                                };
                                ae(
                                  te,
                                  (B) => {
                                    e.type === "close" ? B(Y) : B(ye, !1);
                                  },
                                  !0
                                );
                              }
                              w(O, se);
                            };
                            ae(
                              ne,
                              (O) => {
                                e.type === "link-off" ? O(M) : O(L, !1);
                              },
                              !0
                            );
                          }
                          w(U, j);
                        };
                        ae(
                          le,
                          (U) => {
                            e.type === "wand-stars" ? U(V) : U(G, !1);
                          },
                          !0
                        );
                      }
                      w(F, k);
                    };
                    ae(
                      C,
                      (F) => {
                        e.type === "visibility" ? F(P) : F(W, !1);
                      },
                      !0
                    );
                  }
                  w(T, x);
                };
                ae(
                  _,
                  (T) => {
                    e.type === "edit" ? T(A) : T(y, !1);
                  },
                  !0
                );
              }
              w(S, E);
            };
            ae(
              p,
              (S) => {
                e.type === "duplicate" ? S(b) : S(I, !1);
              },
              !0
            );
          }
          w(m, h);
        };
        ae(d, (m) => {
          e.type === "delete" ? m(v) : m(f, !1);
        });
      }
      Ce(() => dr(u, "aria-label", e.tooltip)), w(c, u);
    },
    $$slots: { default: !0 }
  }), Te();
}
Tn(["click"]);
function Ao(t, e, n) {
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
Ao({}, zb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var za, ru = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
za = {}, Ao(za, ru.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ao(za, ru.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function Wb(t) {
  return t * t * t;
}
function Jc(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Xb(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (y) => Math.sqrt(y) * 120, easing: s = Jc } = r, c = getComputedStyle(t), l = c.transform === "none" ? "" : c.transform, [u, d] = c.transformOrigin.split(" ").map(parseFloat);
  u /= t.clientWidth, d /= t.clientHeight;
  var v = Kb(t), f = t.clientWidth / n.width / v, m = t.clientHeight / n.height / v, h = e.left + e.width * u, p = e.top + e.height * d, b = n.left + n.width * u, I = n.top + n.height * d, S = (h - b) * f, E = (p - I) * m, _ = e.width / n.width, A = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(S * S + E * E)) : a,
    easing: s,
    css: (y, T) => {
      var x = T * S, C = T * E, P = y + T * _, W = y + T * A;
      return `transform: ${l} translate(${x}px, ${C}px) scale(${P}, ${W});`;
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
function vs(t, { delay: e = 0, duration: n = 400, easing: r = Zb, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const c = getComputedStyle(t), l = +c.opacity, u = c.transform === "none" ? "" : c.transform, d = l * (1 - s), [v, f] = iu(i), [m, h] = iu(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (p, b) => `
			transform: ${u} translate(${(1 - p) * v}${f}, ${(1 - p) * m}${h});
			opacity: ${l - d * b}`
  };
}
Tn([
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
var Qb = /* @__PURE__ */ he('<div class="detail svelte-4xu36c"> </div>'), Jb = /* @__PURE__ */ he('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
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
  var a = Jb(), s = de(a), c = de(s);
  Io(c, {
    class: "material-icons",
    children: (p, b) => {
      var I = Et();
      Ce(() => Ye(I, r[e.type])), w(p, I);
    },
    $$slots: { default: !0 }
  });
  var l = ge(s, 2), u = de(l), d = de(u), v = ge(u, 2);
  {
    var f = (p) => {
      var b = Qb(), I = de(b);
      Ce(() => Ye(I, e.detail)), w(p, b);
    };
    ae(v, (p) => {
      e.detail && p(f);
    });
  }
  var m = ge(l, 2);
  m.__click = [Yb, n];
  var h = de(m);
  Io(h, {
    class: "material-icons",
    children: (p, b) => {
      var I = Et("close");
      w(p, I);
    },
    $$slots: { default: !0 }
  }), Ce(() => {
    gt(a, `--color:${i[e.type] ?? ""}`), Ye(d, e.summary);
  }), ss(1, a, () => vs, () => ({ x: 0, y: 30, duration: 150, easing: Wb })), ss(2, a, () => vs, () => ({ x: 50, y: 0, duration: 150, easing: Jc })), w(t, a), Te();
}
Tn(["click"]);
const e_ = 4e3;
function t_() {
  let t = Ae({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, s, c = e_) => {
    const l = e++, u = { id: l, summary: a, detail: s, type: i };
    return t.items = [...t.items, u], setTimeout(
      () => {
        n(l);
      },
      c
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
const ga = t_();
var n_ = /* @__PURE__ */ he("<div><!></div>"), r_ = /* @__PURE__ */ he('<div class="toast-host svelte-11vwiay"></div>');
function i_(t, e) {
  xe(e, !1);
  const n = ga.toasts;
  sh();
  var r = r_();
  sr(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var s = n_(), c = de(s);
    $b(c, {
      get summary() {
        return o(a).summary;
      },
      get detail() {
        return o(a).detail;
      },
      get type() {
        return o(a).type;
      },
      onClose: () => ga.remove(o(a).id)
    }), ih(s, () => Xb, null), w(i, s);
  }), w(t, r), Te();
}
var a_ = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, s_ = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, o_ = /* @__PURE__ */ he('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), l_ = /* @__PURE__ */ he('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), u_ = /* @__PURE__ */ he('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function c_(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ _e(() => !!e.value);
  var r = u_();
  r.__click = [a_, e];
  var i = de(r), a = de(i);
  {
    var s = (f) => {
      Ea(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, h) => {
          var p = o_();
          p.__click = [s_, e];
          var b = de(p);
          Ko(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), w(m, p);
        },
        $$slots: { default: !0 }
      });
    }, c = (f) => {
      Ea(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, h) => {
          db(m, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          });
        },
        $$slots: { default: !0 }
      });
    };
    ae(a, (f) => {
      o(n) ? f(s) : f(c, !1);
    });
  }
  var l = ge(i, 2), u = de(l), d = ge(l, 2);
  {
    var v = (f) => {
      var m = l_(), h = ge(z(m), 2), p = de(h), b = ge(h, 2), I = de(b);
      tb(I, { svgStyles: "fill: gray;" }), Ce(() => Ye(p, e.value)), w(f, m);
    };
    ae(d, (f) => {
      o(n) && f(v);
    });
  }
  Ce(() => {
    Bo(r, 1, `filter-badge ${o(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), Ye(u, e.label);
  }), w(t, r), Te();
}
Tn(["click"]);
var d_ = /* @__PURE__ */ he('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function f_(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(K) {
    return K === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), c = g(e, "disabled", 15, !1), l = g(e, "touch", 3, !1), u = g(e, "indeterminate", 15, n), d = g(e, "group", 11, n), v = g(e, "checked", 15, n), f = g(e, "value", 3, null), m = g(e, "valueKey", 3, n), h = g(e, "input$use", 19, () => []), p = g(e, "input$class", 3, ""), b = /* @__PURE__ */ ze(e, [
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
  ]), I, S = /* @__PURE__ */ Ie(void 0), E = /* @__PURE__ */ Ie(void 0), _ = Ae({}), A = Ae({}), y = Ae({}), T = /* @__PURE__ */ Ie(!1), x = Ae(me("SMUI:generic:input:props") ?? {}), C = /* @__PURE__ */ Ie(Ae(r(d()) ? r(v()) ? !1 : !!v() : d().findIndex((K) => K === f()) !== -1)), P = me("SMUI:checkbox:context"), W = me("SMUI:data-table:row:header"), F = v(), k = r(d()) ? [] : [...d()], le = o(C);
  we(() => {
    let K = !1;
    if (!r(d()))
      if (le !== o(C)) {
        const ie = d().findIndex((Me) => Me === f());
        o(C) && ie === -1 ? d().push(f()) : !o(C) && ie !== -1 && d().splice(ie, 1), K = !0;
      } else {
        const ie = k.findIndex((Le) => Le === f()), Me = d().findIndex((Le) => Le === f());
        ie > -1 && Me === -1 ? (X(C, !1), K = !0) : Me > -1 && ie === -1 && (X(C, !0), K = !0);
      }
    r(v()) ? le !== o(C) && (K = !0) : (v() !== (u() ? null : o(C)) || o(C) !== le) && (v() === F && o(C) !== le ? (v(o(C)), r(u()) || u(!1)) : X(C, !!v()), K = !0), o(E) && (r(u()) ? o(E).indeterminate && (o(E).indeterminate = !1, K = !0) : !u() && o(E).indeterminate ? (o(E).indeterminate = !1, K = !0) : u() && !o(E).indeterminate && (o(E).indeterminate = !0, X(C, !1), K = !0)), F = v(), k = r(d()) ? [] : [...d()], le = o(C), K && o(S) && o(S).handleChange();
  });
  const V = me("SMUI:generic:input:mount"), G = me("SMUI:generic:input:unmount"), U = me("SMUI:checkbox:mount"), j = me("SMUI:checkbox:unmount");
  lt(() => {
    if (o(E) == null)
      throw new Error("Checkbox is not defined.");
    o(E).indeterminate = !r(u()) && u(), X(
      S,
      new yb({
        addClass: ne,
        forceLayout: () => Y().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!Y().parentNode,
        isChecked: () => o(C),
        isIndeterminate: () => r(u()) ? !1 : u(),
        removeClass: M,
        removeNativeControlAttr: se,
        setNativeControlAttr: O,
        setNativeControlDisabled: (ie) => c(ie)
      }),
      !0
    );
    const K = {
      _smui_checkbox_accessor: !0,
      get element() {
        return Y();
      },
      get checked() {
        return o(C);
      },
      set checked(ie) {
        o(C) !== ie && X(C, ie, !0);
      },
      get indeterminate() {
        return r(u()) ? !1 : u();
      },
      set indeterminate(ie) {
        u(ie);
      },
      activateRipple() {
        c() || X(T, !0);
      },
      deactivateRipple() {
        X(T, !1);
      }
    };
    return V && V(K), U && U(K), o(S).init(), () => {
      var ie;
      G && G(K), j && j(K), (ie = o(S)) == null || ie.destroy();
    };
  });
  function ne(K) {
    _[K] || (_[K] = !0);
  }
  function M(K) {
    (!(K in _) || _[K]) && (_[K] = !1);
  }
  function L(K, ie) {
    A[K] != ie && (ie === "" || ie == null ? delete A[K] : A[K] = ie);
  }
  function O(K, ie) {
    y[K] !== ie && (y[K] = ie);
  }
  function se(K) {
    (!(K in y) || y[K] != null) && (y[K] = void 0);
  }
  function te() {
    return x && x.id;
  }
  function Y() {
    return I;
  }
  var ye = { getId: te, getElement: Y }, B = d_(), J = (K) => {
    var ie;
    o(S) && o(S).handleAnimationEnd(), (ie = e.onanimationend) == null || ie.call(e, K);
  };
  Ge(B, (K, ie, Me) => ({ class: K, style: ie, ...Me, onanimationend: J }), [
    () => Ne({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": c(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": P === "data-table" && W,
      "mdc-data-table__row-checkbox": P === "data-table" && !W,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(A).map(([K, ie]) => `${K}: ${ie};`).concat([s()]).join(" "),
    () => ii(b, ["input$"])
  ]);
  var Q = de(B), fe = (K) => {
    var ie;
    Xe(Y(), "blur", K), (ie = e.input$onblur) == null || ie.call(e, K);
  }, Se = (K) => {
    var ie;
    Xe(Y(), "focus", K), (ie = e.input$onfocus) == null || ie.call(e, K);
  };
  return Ge(
    Q,
    (K, ie, Me, Le) => ({
      class: K,
      type: "checkbox",
      ...x,
      disabled: c(),
      value: ie,
      "data-indeterminate": Me,
      ...y,
      ...Le,
      onblur: fe,
      onfocus: Se
    }),
    [
      () => Ne({ "mdc-checkbox__native-control": !0, [p()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(u()) && u() ? "true" : void 0,
      () => ft(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Oe(Q, (K) => X(E, K), () => o(E)), Fe(Q, (K, ie) => Z == null ? void 0 : Z(K, ie), h), oi(() => ah(Q, () => o(C), (K) => X(C, K))), Oe(B, (K) => I = K, () => I), Fe(B, (K, ie) => Z == null ? void 0 : Z(K, ie), i), Fe(B, (K, ie) => $t == null ? void 0 : $t(K, ie), () => ({
    unbounded: !0,
    addClass: ne,
    removeClass: M,
    addStyle: L,
    active: o(T),
    eventTarget: o(E)
  })), w(t, B), Te(ye);
}
var h_ = /* @__PURE__ */ he('<div style="display: flex; flex-direction: column;"></div>');
function v_(t, e) {
  xe(e, !0);
  let n = g(e, "data", 19, () => []), r = g(e, "values", 31, () => Ae([]));
  var i = h_();
  sr(i, 21, n, xi, (a, s) => {
    Vb(a, {
      label: (l) => {
        var u = Et();
        Ce(() => Ye(u, o(s).label)), w(l, u);
      },
      children: (l, u) => {
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
var m_ = (t) => t.stopPropagation(), g_ = /* @__PURE__ */ he('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), p_ = /* @__PURE__ */ he('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), b_ = /* @__PURE__ */ he('<div class="oscd-filters svelte-58jwwf"></div>');
function __(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 15), r = /* @__PURE__ */ Ie(null), i = [], a = [];
  function s(h) {
    var p;
    if (!(h.value === void 0 || h.value === null || h.value === ""))
      switch (h.type) {
        case "text":
          return String(h.value);
        case "number":
          return String(h.value);
        case "select":
          const b = (p = h.options) == null ? void 0 : p.find((E) => E.value === h.value);
          return b ? b.label : String(h.value);
        case "multiselect":
          if (!Array.isArray(h.value) || h.value.length === 0) return;
          const I = h.value.map((E) => {
            var A;
            const _ = (A = h.options) == null ? void 0 : A.find((y) => y.value === E);
            return _ ? _.label : String(E);
          }), S = 1;
          return I.length <= S ? I.join(", ") : `${I.slice(0, S).join(", ")} +${I.length - S} more`;
        case "date":
          try {
            const E = new Date(h.value);
            return isNaN(E.getTime()) ? String(h.value) : E.toLocaleDateString();
          } catch {
            return String(h.value);
          }
        case "datetime":
          try {
            const E = new Date(h.value);
            return isNaN(E.getTime()) ? String(h.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(E);
          } catch {
            return String(h.value);
          }
        default:
          return String(h.value);
      }
  }
  function c(h) {
    switch (h.type) {
      case "text":
      case "date":
      case "datetime":
        return h.value ?? "";
      case "number":
        return h.value ?? 0;
      case "select":
        return h.value ?? null;
      case "multiselect":
        return Array.isArray(h.value) ? [...h.value] : [];
      default:
        return h.value ?? "";
    }
  }
  function l(h) {
    o(r) === h ? X(r, null) : (X(r, h, !0), a[h] = c(n()[h]));
  }
  function u() {
    X(r, null), a[o(r)] = void 0;
  }
  function d(h) {
    var p;
    n(n().map((b, I) => I === h ? { ...b, value: a[h] } : b)), (p = e.onfiltersChanged) == null || p.call(e, [...n()]), X(r, null);
  }
  function v(h) {
    var p;
    n(n().map((b, I) => I === h ? { ...b, value: void 0 } : b)), a[h] = void 0, (p = e.onfiltersChanged) == null || p.call(e, [...n()]), u();
  }
  function f(h) {
    i.some((b) => b && b.contains(h.target)) || u();
  }
  lt(() => {
    document.addEventListener("click", f);
  }), _n(() => {
    document.removeEventListener("click", f);
  }), we(() => {
  });
  var m = b_();
  sr(m, 23, n, (h) => h.key, (h, p, b) => {
    var I = p_(), S = de(I);
    {
      let A = /* @__PURE__ */ _e(() => s(o(p)));
      c_(S, {
        get label() {
          return o(p).label;
        },
        get value() {
          return o(A);
        },
        onOpen: () => l(o(b)),
        onRemove: () => v(o(b))
      });
    }
    var E = ge(S, 2);
    {
      var _ = (A) => {
        var y = g_();
        y.__click = [m_];
        var T = ge(de(y), 2), x = de(T), C = ge(T, 2), P = de(C);
        {
          var W = (le) => {
            Eo(le, {
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
              set value(V) {
                a[o(b)] = V;
              }
            });
          }, F = (le) => {
            var V = ee(), G = z(V);
            {
              var U = (ne) => {
                {
                  let M = /* @__PURE__ */ _e(() => {
                    var L;
                    return (L = o(p)) == null ? void 0 : L.options;
                  });
                  fp(ne, {
                    get label() {
                      return o(p).label;
                    },
                    get data() {
                      return o(M);
                    },
                    get value() {
                      return a[o(b)];
                    },
                    set value(L) {
                      a[o(b)] = L;
                    }
                  });
                }
              }, j = (ne) => {
                var M = ee(), L = z(M);
                {
                  var O = (te) => {
                    {
                      let Y = /* @__PURE__ */ _e(() => {
                        var ye;
                        return (ye = o(p)) == null ? void 0 : ye.options;
                      });
                      v_(te, {
                        get data() {
                          return o(Y);
                        },
                        get values() {
                          return a[o(b)];
                        },
                        set values(ye) {
                          a[o(b)] = ye;
                        }
                      });
                    }
                  }, se = (te) => {
                    var Y = ee(), ye = z(Y);
                    {
                      var B = (Q) => {
                        vb(Q, {
                          get value() {
                            return a[o(b)];
                          },
                          set value(fe) {
                            a[o(b)] = fe;
                          }
                        });
                      }, J = (Q) => {
                        var fe = ee(), Se = z(fe);
                        {
                          var K = (ie) => {
                            pb(ie, {
                              get value() {
                                return a[o(b)];
                              },
                              set value(Me) {
                                a[o(b)] = Me;
                              }
                            });
                          };
                          ae(
                            Se,
                            (ie) => {
                              o(p).type === "datetime" && ie(K);
                            },
                            !0
                          );
                        }
                        w(Q, fe);
                      };
                      ae(
                        ye,
                        (Q) => {
                          o(p).type === "date" ? Q(B) : Q(J, !1);
                        },
                        !0
                      );
                    }
                    w(te, Y);
                  };
                  ae(
                    L,
                    (te) => {
                      o(p).type === "multiselect" ? te(O) : te(se, !1);
                    },
                    !0
                  );
                }
                w(ne, M);
              };
              ae(
                G,
                (ne) => {
                  o(p).type === "select" ? ne(U) : ne(j, !1);
                },
                !0
              );
            }
            w(le, V);
          };
          ae(P, (le) => {
            o(p).type === "text" || o(p).type === "number" ? le(W) : le(F, !1);
          });
        }
        var k = ge(C, 2);
        ds(k, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(o(b)),
          children: (le, V) => {
            var G = Et("Apply");
            w(le, G);
          },
          $$slots: { default: !0 }
        }), Ce(() => Ye(x, `Filter by ${o(p).label ?? ""}`)), ss(2, y, () => vs, () => ({ y: 5, duration: 120 })), ss(1, y, () => vs, () => ({ y: -5, duration: 120 })), w(A, y);
      };
      ae(E, (A) => {
        o(r) === o(b) && A(_);
      });
    }
    Oe(I, (A, y) => i[y] = A, (A) => i == null ? void 0 : i[A], () => [o(b)]), w(h, I);
  }), w(t, m), Te();
}
Tn(["click"]);
var y_ = (t, e) => e(), I_ = /* @__PURE__ */ he('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), E_ = /* @__PURE__ */ he('<div class="filter-tab svelte-nj6sif"><!> <div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div></div>');
function S_(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 31, () => Ae([])), r = g(e, "onFilterChange", 3, (S) => {
  }), i = g(e, "searchText", 15, ""), a = g(e, "searchLabel", 3, "Search"), s = g(e, "searchPlaceholder", 3, "Type to search..."), c = g(e, "onSearchInput", 3, () => {
  }), l = g(e, "searchDisabled", 3, !1), u = /* @__PURE__ */ _e(() => n().some((S) => S.value !== void 0 && S.value !== null && S.value !== "")), d = () => {
    n(n().map((S) => ({ ...S, value: void 0 }))), r()(n());
  };
  var v = E_(), f = de(v);
  {
    var m = (S) => {
      Mg(S, {
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
        set value(E) {
          i(E);
        }
      });
    };
    ae(f, (S) => {
      l() || S(m);
    });
  }
  var h = ge(f, 2), p = ge(de(h), 2);
  __(p, {
    onfiltersChanged: (S) => r()(S),
    get filters() {
      return n();
    },
    set filters(S) {
      n(S);
    }
  });
  var b = ge(p, 2);
  {
    var I = (S) => {
      var E = I_();
      E.__click = [y_, d], w(S, E);
    };
    ae(b, (S) => {
      o(u) && S(I);
    });
  }
  w(t, v), Te();
}
Tn(["click"]);
var A_ = /* @__PURE__ */ he('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function C_(t, e) {
  xe(e, !0);
  const [n, r] = Jn();
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), c = g(e, "indeterminate", 3, !1), l = g(e, "closed", 3, !1), u = g(e, "progress", 3, 0), d = g(e, "buffer", 3, void 0), v = /* @__PURE__ */ ze(e, [
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
  ]), f, m = /* @__PURE__ */ Ie(void 0), h = Ae({}), p = Ae({}), b = Ae({}), I = Ae({}), S = Ae({}), E = me("SMUI:linear-progress:context"), _ = me("SMUI:linear-progress:closed");
  we(() => {
    _ && Hn(_, l());
  }), we(() => {
    o(m) && o(m).isDeterminate() !== !c() && o(m).setDeterminate(!c());
  }), we(() => {
    o(m) && o(m).getProgress() !== u() && o(m).setProgress(u());
  }), we(() => {
    o(m) && (d() == null ? o(m).setBuffer(1) : o(m).setBuffer(d()));
  }), we(() => {
    o(m) && (l() ? o(m).close() : o(m).open());
  }), lt(() => (X(
    m,
    new Ib({
      addClass: y,
      forceLayout: () => {
        k().getBoundingClientRect();
      },
      setBufferBarStyle: W,
      setPrimaryBarStyle: F,
      hasClass: A,
      removeAttribute: C,
      removeClass: T,
      setAttribute: x,
      setStyle: P,
      attachResizeObserver: (L) => {
        const O = window.ResizeObserver;
        if (O) {
          const se = new O(L);
          return se.observe(k()), se;
        }
        return null;
      },
      getWidth: () => k().offsetWidth
    }),
    !0
  ), o(m).init(), () => {
    var L;
    (L = o(m)) == null || L.destroy();
  }));
  function A(L) {
    return L in h ? h[L] : k().classList.contains(L);
  }
  function y(L) {
    h[L] || (h[L] = !0);
  }
  function T(L) {
    (!(L in h) || h[L]) && (h[L] = !1);
  }
  function x(L, O) {
    p[L] !== O && (p[L] = O);
  }
  function C(L) {
    (!(L in p) || p[L] != null) && (p[L] = void 0);
  }
  function P(L, O) {
    b[L] != O && (O === "" || O == null ? delete b[L] : b[L] = O);
  }
  function W(L, O) {
    I[L] != O && (O === "" || O == null ? delete I[L] : I[L] = O);
  }
  function F(L, O) {
    S[L] != O && (O === "" || O == null ? delete S[L] : S[L] = O);
  }
  function k() {
    return f;
  }
  var le = { getElement: k }, V = A_(), G = (L) => {
    var O;
    o(m) && o(m).handleTransitionEnd(), (O = e.ontransitionend) == null || O.call(e, L);
  };
  Ge(
    V,
    (L, O) => ({
      class: L,
      style: O,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": c() ? void 0 : u(),
      ...p,
      ...v,
      ontransitionend: G
    }),
    [
      () => Ne({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": c(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": E === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(b).map(([L, O]) => `${L}: ${O};`).concat([s()]).join(" ")
    ]
  );
  var U = de(V), j = de(U), ne = ge(U, 2);
  Oe(V, (L) => f = L, () => f), Fe(V, (L, O) => Z == null ? void 0 : Z(L, O), i), Ce(
    (L, O) => {
      gt(j, L), gt(ne, O);
    },
    [
      () => Object.entries(I).map(([L, O]) => `${L}: ${O};`).join(" "),
      () => Object.entries(S).map(([L, O]) => `${L}: ${O};`).join(" ")
    ]
  ), w(t, V);
  var M = Te(le);
  return r(), M;
}
var x_ = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), T_ = /* @__PURE__ */ Ot('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), w_ = /* @__PURE__ */ he('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), O_ = (t, e) => e(), L_ = /* @__PURE__ */ he('<input type="text" class="svelte-1mj71p3"/>'), R_ = (t, e) => e(), M_ = /* @__PURE__ */ he('<input type="number" class="svelte-1mj71p3"/>'), D_ = /* @__PURE__ */ he("<!> <!>", 1), H_ = /* @__PURE__ */ he("<!> <!>", 1), P_ = /* @__PURE__ */ he('<div class="cell-actions svelte-1mj71p3"></div>'), N_ = /* @__PURE__ */ he("<!> <!>", 1);
function au(t, e) {
  xe(e, !0);
  const n = () => Un(b, "$sortColumn", a), r = () => Un(I, "$sortDirection", a), i = () => Un(p, "$filteredData", a), [a, s] = Jn();
  let c = g(e, "loadingDone", 15, !0), l = g(e, "label", 19, Pp), u = g(e, "columnDefs", 19, () => []), d = g(e, "rowData", 31, () => Ae([])), v = g(e, "rowActions", 19, () => []), f = g(e, "searchInputLabel", 3, "Search"), m = g(e, "emptyText", 3, "No data available"), h = Ae({ name: "", color: "", number: "" }), p = Ft([]), b = Ft(null), I = Ft(null), S = /* @__PURE__ */ _e(() => u().some((y) => y.filter));
  e.store.store.subscribe((y) => {
    d([...y]), E();
  });
  function E() {
    let y = d().filter((T) => u().every((x) => {
      const C = h[x.field], P = x.filterValueGetter ? x.filterValueGetter(T) : T[x.field];
      return C ? x.filterType === "number" ? P == C : P.toString().toLowerCase().includes(C.toLowerCase()) : !0;
    }));
    y = _(y), p.set(y);
  }
  function _(y) {
    let T, x;
    return b.subscribe((C) => T = C), I.subscribe((C) => x = C), !T || !x ? y : y.sort((C, P) => {
      let W = C[T], F = P[T];
      return W == null && (W = ""), F == null && (F = ""), x === "asc" ? W.toString().localeCompare(F.toString()) : F.toString().localeCompare(W.toString());
    });
  }
  function A(y) {
    b.update((T) => {
      if (T === y)
        I.update((x) => x === "asc" ? "desc" : x === "desc" ? null : "asc");
      else
        return I.set("asc"), y;
      return y;
    }), E();
  }
  p.set(d()), Cb(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (T) => {
      C_(T, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return c();
        },
        set closed(x) {
          c(x);
        }
      });
    },
    children: (T, x) => {
      var C = N_(), P = z(C);
      Tb(P, {
        children: (F, k) => {
          var le = H_(), V = z(le);
          qa(V, {
            class: "header-title-row",
            children: (j, ne) => {
              var M = ee(), L = z(M);
              sr(L, 17, u, xi, (O, se) => {
                ca(O, {
                  onclick: () => o(se).sortable && A(o(se).field),
                  get style() {
                    return o(se).headerStyle;
                  },
                  children: (te, Y) => {
                    var ye = w_(), B = de(ye), J = de(B), Q = de(J), fe = ge(J, 2);
                    {
                      var Se = (K) => {
                        var ie = ee(), Me = z(ie);
                        {
                          var Le = (ke) => {
                            var Qe = ee(), Ue = z(Qe);
                            {
                              var H = (ce) => {
                                var Re = x_();
                                w(ce, Re);
                              }, q = (ce) => {
                                var Re = ee(), st = z(Re);
                                {
                                  var pt = (ht) => {
                                    var ue = T_();
                                    w(ht, ue);
                                  };
                                  ae(
                                    st,
                                    (ht) => {
                                      r() === "desc" && ht(pt);
                                    },
                                    !0
                                  );
                                }
                                w(ce, Re);
                              };
                              ae(Ue, (ce) => {
                                r() === "asc" ? ce(H) : ce(q, !1);
                              });
                            }
                            w(ke, Qe);
                          };
                          ae(Me, (ke) => {
                            n() === o(se).field && r() !== null && ke(Le);
                          });
                        }
                        w(K, ie);
                      };
                      ae(fe, (K) => {
                        o(se).sortable && K(Se);
                      });
                    }
                    Ce(() => {
                      gt(ye, `min-width: ${o(se).minWidth ?? 0 ?? ""}`), Ye(Q, o(se).headerName);
                    }), w(te, ye);
                  },
                  $$slots: { default: !0 }
                });
              }), w(j, M);
            },
            $$slots: { default: !0 }
          });
          var G = ge(V, 2);
          {
            var U = (j) => {
              qa(j, {
                class: "header-filter-row",
                children: (ne, M) => {
                  var L = ee(), O = z(L);
                  sr(O, 17, u, xi, (se, te) => {
                    ca(se, {
                      children: (Y, ye) => {
                        var B = ee(), J = z(B);
                        {
                          var Q = (fe) => {
                            var Se = D_(), K = z(Se);
                            {
                              var ie = (ke) => {
                                var Qe = L_();
                                Qe.__input = [O_, E], Ce(() => dr(Qe, "placeholder", `${f()} ${o(te).headerName}`)), _a(Qe, () => h[o(te).field], (Ue) => h[o(te).field] = Ue), w(ke, Qe);
                              };
                              ae(K, (ke) => {
                                o(te).filterType === "text" && ke(ie);
                              });
                            }
                            var Me = ge(K, 2);
                            {
                              var Le = (ke) => {
                                var Qe = M_();
                                Qe.__input = [R_, E], Ce(() => dr(Qe, "placeholder", `${f()} ${o(te).headerName}`)), _a(Qe, () => h[o(te).field], (Ue) => h[o(te).field] = Ue), w(ke, Qe);
                              };
                              ae(Me, (ke) => {
                                o(te).filterType === "number" && ke(Le);
                              });
                            }
                            w(fe, Se);
                          };
                          ae(J, (fe) => {
                            o(te).filter && fe(Q);
                          });
                        }
                        w(Y, B);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w(ne, L);
                },
                $$slots: { default: !0 }
              });
            };
            ae(G, (j) => {
              o(S) && j(U);
            });
          }
          w(F, le);
        },
        $$slots: { default: !0 }
      });
      var W = ge(P, 2);
      Ob(W, {
        children: (F, k) => {
          var le = ee(), V = z(le);
          {
            var G = (j) => {
              qa(j, {
                children: (ne, M) => {
                  ca(ne, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return u().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (L, O) => {
                      var se = Et();
                      Ce(() => Ye(se, m())), w(L, se);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, U = (j) => {
              var ne = ee(), M = z(ne);
              sr(M, 1, i, xi, (L, O) => {
                qa(L, {
                  children: (se, te) => {
                    var Y = ee(), ye = z(Y);
                    sr(ye, 17, u, (B) => B.field, (B, J) => {
                      var Q = ee(), fe = z(Q);
                      {
                        var Se = (ie) => {
                          ca(ie, {
                            children: (Me, Le) => {
                              var ke = P_();
                              sr(ke, 21, v, xi, (Qe, Ue) => {
                                var H = ee(), q = z(H);
                                {
                                  var ce = (st) => {
                                    Ea(st, {
                                      get content() {
                                        return o(Ue).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (pt, ht) => {
                                        {
                                          let ue = /* @__PURE__ */ _e(() => o(Ue).disabled(o(O)));
                                          Jm(pt, {
                                            get iconComponent() {
                                              return o(Ue).iconComponent;
                                            },
                                            get iconStyles() {
                                              return o(Ue).iconStyles;
                                            },
                                            callback: () => o(Ue).callback(o(O)),
                                            get disabled() {
                                              return o(ue);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Re = (st) => {
                                    Ea(st, {
                                      get content() {
                                        return o(Ue).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (pt, ht) => {
                                        {
                                          let ue = /* @__PURE__ */ _e(() => o(Ue).disabled(o(O)));
                                          Gc(pt, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => o(Ue).callback(o(O)),
                                            get disabled() {
                                              return o(ue);
                                            },
                                            children: (N, D) => {
                                              var $ = ee(), De = z($);
                                              {
                                                var ct = (bt) => {
                                                  Fp(bt, { svgStyles: "margin: unset" });
                                                }, yt = (bt) => {
                                                  var kt = ee(), mr = z(kt);
                                                  {
                                                    var vt = (St) => {
                                                      Ko(St, { svgStyles: "margin: unset" });
                                                    }, Dt = (St) => {
                                                      var On = ee(), vi = z(On);
                                                      {
                                                        var Bn = (Ze) => {
                                                          Vp(Ze, { svgStyles: "margin: unset" });
                                                        }, je = (Ze) => {
                                                          var Je = ee(), Ht = z(Je);
                                                          {
                                                            var hn = (ut) => {
                                                              jp(ut, { svgStyles: "margin: unset" });
                                                            }, rt = (ut) => {
                                                              var Tt = ee(), $e = z(Tt);
                                                              {
                                                                var Lt = (Rt) => {
                                                                  Xp(Rt, { svgStyles: "margin: unset" });
                                                                }, Ln = (Rt) => {
                                                                  var It = ee(), Pt = z(It);
                                                                  {
                                                                    var on = (ln) => {
                                                                      Yc(ln, { svgStyles: "margin: unset" });
                                                                    }, Bt = (ln) => {
                                                                      var Yt = ee(), Vn = z(Yt);
                                                                      {
                                                                        var Nr = (zt) => {
                                                                          Qc(zt, { svgStyles: "margin: unset" });
                                                                        }, un = (zt) => {
                                                                          zp(zt, { svgStyles: "margin: unset" });
                                                                        };
                                                                        ae(
                                                                          Vn,
                                                                          (zt) => {
                                                                            o(Ue).icon === "delete" ? zt(Nr) : zt(un, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      w(ln, Yt);
                                                                    };
                                                                    ae(
                                                                      Pt,
                                                                      (ln) => {
                                                                        o(Ue).icon === "edit" ? ln(on) : ln(Bt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(Rt, It);
                                                                };
                                                                ae(
                                                                  $e,
                                                                  (Rt) => {
                                                                    o(Ue).icon === "remove" ? Rt(Lt) : Rt(Ln, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(ut, Tt);
                                                            };
                                                            ae(
                                                              Ht,
                                                              (ut) => {
                                                                o(Ue).icon === "find-in-page" ? ut(hn) : ut(rt, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(Ze, Je);
                                                        };
                                                        ae(
                                                          vi,
                                                          (Ze) => {
                                                            o(Ue).icon === "download" ? Ze(Bn) : Ze(je, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(St, On);
                                                    };
                                                    ae(
                                                      mr,
                                                      (St) => {
                                                        o(Ue).icon === "cancel" ? St(vt) : St(Dt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(bt, kt);
                                                };
                                                ae(De, (bt) => {
                                                  o(Ue).icon === "add" ? bt(ct) : bt(yt, !1);
                                                });
                                              }
                                              w(N, $);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  ae(q, (st) => {
                                    o(Ue).iconComponent ? st(ce) : st(Re, !1);
                                  });
                                }
                                w(Qe, H);
                              }), w(Me, ke);
                            },
                            $$slots: { default: !0 }
                          });
                        }, K = (ie) => {
                          ca(ie, {
                            get numeric() {
                              return o(J).numeric;
                            },
                            get style() {
                              return o(J).cellStyle;
                            },
                            children: (Me, Le) => {
                              var ke = ee(), Qe = z(ke);
                              {
                                var Ue = (q) => {
                                  const ce = /* @__PURE__ */ _e(() => o(J).cellRenderer);
                                  var Re = ee(), st = z(Re);
                                  vr(st, () => o(ce), (pt, ht) => {
                                    ht(pt, tt(
                                      {
                                        get row() {
                                          return o(O);
                                        },
                                        get value() {
                                          return o(O)[o(J).field];
                                        },
                                        get col() {
                                          return o(J);
                                        }
                                      },
                                      () => o(J).cellRendererProps ?? {}
                                    ));
                                  }), w(q, Re);
                                }, H = (q) => {
                                  var ce = ee(), Re = z(ce);
                                  {
                                    var st = (ht) => {
                                      var ue = Et();
                                      Ce((N) => Ye(ue, N), [
                                        () => o(J).valueFormatter(o(O)[o(J).field])
                                      ]), w(ht, ue);
                                    }, pt = (ht) => {
                                      var ue = Et();
                                      Ce(() => Ye(ue, o(O)[o(J).field] ?? "")), w(ht, ue);
                                    };
                                    ae(
                                      Re,
                                      (ht) => {
                                        o(J).valueFormatter ? ht(st) : ht(pt, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(q, ce);
                                };
                                ae(Qe, (q) => {
                                  o(J).cellRenderer ? q(Ue) : q(H, !1);
                                });
                              }
                              w(Me, ke);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        ae(fe, (ie) => {
                          o(J).field === "actions" ? ie(Se) : ie(K, !1);
                        });
                      }
                      w(B, Q);
                    }), w(se, Y);
                  },
                  $$slots: { default: !0 }
                });
              }), w(j, ne);
            };
            ae(V, (j) => {
              i().length === 0 ? j(G) : j(U, !1);
            });
          }
          w(F, le);
        },
        $$slots: { default: !0 }
      }), w(T, C);
    },
    $$slots: { progress: !0, default: !0 }
  }), Te(), s();
}
Tn(["input"]);
function xt(t) {
  return typeof t == "function";
}
function Zo(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Js = Zo(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function ms(t, e) {
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
            for (var c = Ut(s), l = c.next(); !l.done; l = c.next()) {
              var u = l.value;
              u.remove(this);
            }
          } catch (p) {
            e = { error: p };
          } finally {
            try {
              l && !l.done && (n = c.return) && n.call(c);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          s.remove(this);
      var d = this.initialTeardown;
      if (xt(d))
        try {
          d();
        } catch (p) {
          a = p instanceof Js ? p.errors : [p];
        }
      var v = this._finalizers;
      if (v) {
        this._finalizers = null;
        try {
          for (var f = Ut(v), m = f.next(); !m.done; m = f.next()) {
            var h = m.value;
            try {
              su(h);
            } catch (p) {
              a = a ?? [], p instanceof Js ? a = Zn(Zn([], wr(a)), wr(p.errors)) : a.push(p);
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
        throw new Js(a);
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
    n === e ? this._parentage = null : Array.isArray(n) && ms(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && ms(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), $c = Da.EMPTY;
function ed(t) {
  return t instanceof Da || t && "closed" in t && xt(t.remove) && xt(t.add) && xt(t.unsubscribe);
}
function su(t) {
  xt(t) ? t() : t.unsubscribe();
}
var U_ = {
  Promise: void 0
}, F_ = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Zn([t, e], wr(n)));
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
function $a(t) {
  t();
}
var Yo = function(t) {
  nt(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, ed(n) && n.add(r)) : r.destination = V_, r;
  }
  return e.create = function(n, r, i) {
    return new Co(n, r, i);
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
}(Da), k_ = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Wa(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Wa(r);
      }
    else
      Wa(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Wa(n);
      }
  }, t;
}(), Co = function(t) {
  nt(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return xt(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new k_(s), a;
  }
  return e;
}(Yo);
function Wa(t) {
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
}, Qo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Jo(t) {
  return t;
}
function G_(t) {
  return t.length === 0 ? Jo : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var bn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = q_(e) ? e : new Co(e, n, r);
    return $a(function() {
      var s = i, c = s.operator, l = s.source;
      a.add(c ? c.call(a, l) : l ? i._subscribe(a) : i._trySubscribe(a));
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
      var s = new Co({
        next: function(c) {
          try {
            e(c);
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
  }, t.prototype[Qo] = function() {
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
  return t && xt(t.next) && xt(t.error) && xt(t.complete);
}
function q_(t) {
  return t && t instanceof Yo || j_(t) && ed(t);
}
function z_(t) {
  return xt(t == null ? void 0 : t.lift);
}
function wn(t) {
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
function Fn(t, e, n, r, i) {
  return new W_(t, e, n, r, i);
}
var W_ = function(t) {
  nt(e, t);
  function e(n, r, i, a, s, c) {
    var l = t.call(this, n) || this;
    return l.onFinalize = s, l.shouldUnsubscribe = c, l._next = r ? function(u) {
      try {
        r(u);
      } catch (d) {
        n.error(d);
      }
    } : t.prototype._next, l._error = a ? function(u) {
      try {
        a(u);
      } catch (d) {
        n.error(d);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (u) {
        n.error(u);
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
}(Yo), X_ = Zo(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), xo = function(t) {
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
    $a(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Ut(r.currentObservers), c = s.next(); !c.done; c = s.next()) {
            var l = c.value;
            l.next(n);
          }
        } catch (u) {
          i = { error: u };
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
    $a(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    $a(function() {
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
    return a || s ? $c : (this.currentObservers = null, c.push(n), new Da(function() {
      r.currentObservers = null, ms(c, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new bn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new uu(n, r);
  }, e;
}(bn), uu = function(t) {
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
}(xo), K_ = {
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
}(Da), cu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Zn([t, e], wr(n)));
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
      this.work = this.state = this.scheduler = null, this.pending = !1, ms(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
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
}(du), J_ = new Q_(Y_), $_ = new bn(function(t) {
  return t.complete();
});
function ey(t) {
  return t && xt(t.schedule);
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
  return xt(t == null ? void 0 : t.then);
}
function sd(t) {
  return xt(t[Qo]);
}
function od(t) {
  return Symbol.asyncIterator && xt(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function ld(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function ny() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var ud = ny();
function cd(t) {
  return xt(t == null ? void 0 : t[ud]);
}
function dd(t) {
  return Oh(this, arguments, function() {
    var n, r, i, a;
    return jo(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, Li(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, Li(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Li(i)];
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
  return xt(t == null ? void 0 : t.getReader);
}
function fi(t) {
  if (t instanceof bn)
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
  return new bn(function(e) {
    var n = t[Qo]();
    if (xt(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function iy(t) {
  return new bn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function ay(t) {
  return new bn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, td);
  });
}
function sy(t) {
  return new bn(function(e) {
    var n, r;
    try {
      for (var i = Ut(t), a = i.next(); !a.done; a = i.next()) {
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
function hd(t) {
  return new bn(function(e) {
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
    var s, c;
    return jo(this, function(l) {
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
          return c = l.sent(), i = { error: c }, [3, 11];
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
function ti(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function vd(t, e) {
  return e === void 0 && (e = 0), wn(function(n, r) {
    n.subscribe(Fn(r, function(i) {
      return ti(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return ti(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return ti(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function md(t, e) {
  return e === void 0 && (e = 0), wn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function uy(t, e) {
  return fi(t).pipe(md(e), vd(e));
}
function cy(t, e) {
  return fi(t).pipe(md(e), vd(e));
}
function dy(t, e) {
  return new bn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function fy(t, e) {
  return new bn(function(n) {
    var r;
    return ti(n, e, function() {
      r = t[ud](), ti(n, e, function() {
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
      return xt(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function gd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new bn(function(n) {
    ti(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      ti(n, e, function() {
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
  return e ? vy(t, e) : fi(t);
}
function pd() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = rd(t);
  return $o(t, n);
}
function Pn(t, e) {
  return wn(function(n, r) {
    var i = 0;
    n.subscribe(Fn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function my(t, e, n, r, i, a, s, c) {
  var l = [], u = 0, d = 0, v = !1, f = function() {
    v && !l.length && !u && e.complete();
  }, m = function(p) {
    return u < r ? h(p) : l.push(p);
  }, h = function(p) {
    u++;
    var b = !1;
    fi(n(p, d++)).subscribe(Fn(e, function(I) {
      e.next(I);
    }, function() {
      b = !0;
    }, void 0, function() {
      if (b)
        try {
          u--;
          for (var I = function() {
            var S = l.shift();
            s || h(S);
          }; l.length && u < r; )
            I();
          f();
        } catch (S) {
          e.error(S);
        }
    }));
  };
  return t.subscribe(Fn(e, m, function() {
    v = !0, f();
  })), function() {
  };
}
function gs(t, e, n) {
  return n === void 0 && (n = 1 / 0), xt(e) ? gs(function(r, i) {
    return Pn(function(a, s) {
      return e(r, a, i, s);
    })(fi(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), wn(function(r, i) {
    return my(r, i, t, n);
  }));
}
function gy(t) {
  return t === void 0 && (t = 1 / 0), gs(Jo, t);
}
function fu(t, e) {
  return wn(function(n, r) {
    var i = 0;
    n.subscribe(Fn(r, function(a) {
      return t.call(e, a, i++) && r.next(a);
    }));
  });
}
function bd(t) {
  return wn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Fn(n, void 0, void 0, function(s) {
      a = fi(t(s, bd(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function py(t, e) {
  return xt(e) ? gs(t, e, 1) : gs(t, 1);
}
function by(t, e) {
  return e === void 0 && (e = J_), wn(function(n, r) {
    var i = null, a = null, s = null, c = function() {
      if (i) {
        i.unsubscribe(), i = null;
        var u = a;
        a = null, r.next(u);
      }
    };
    function l() {
      var u = s + t, d = e.now();
      if (d < u) {
        i = this.schedule(void 0, u - d), r.add(i);
        return;
      }
      c();
    }
    n.subscribe(Fn(r, function(u) {
      a = u, s = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      c(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function da(t) {
  return t <= 0 ? function() {
    return $_;
  } : wn(function(e, n) {
    var r = 0;
    e.subscribe(Fn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function hu(t) {
  return wn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function _y() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = rd(t), r = ty(t, 1 / 0);
  return wn(function(i, a) {
    gy(r)($o(Zn([i], wr(t)), n)).subscribe(a);
  });
}
function yy() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return _y.apply(void 0, Zn([], wr(t)));
}
function vu(t, e) {
  return wn(function(n, r) {
    var i = null, a = 0, s = !1, c = function() {
      return s && !i && r.complete();
    };
    n.subscribe(Fn(r, function(l) {
      i == null || i.unsubscribe();
      var u = 0, d = a++;
      fi(t(l, d)).subscribe(i = Fn(r, function(v) {
        return r.next(e ? e(l, v, d, u++) : v);
      }, function() {
        i = null, c();
      }));
    }, function() {
      s = !0, c();
    }));
  });
}
function Ei(t, e, n) {
  var r = xt(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? wn(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var c = !0;
    i.subscribe(Fn(a, function(l) {
      var u;
      (u = r.next) === null || u === void 0 || u.call(r, l), a.next(l);
    }, function() {
      var l;
      c = !1, (l = r.complete) === null || l === void 0 || l.call(r), a.complete();
    }, function(l) {
      var u;
      c = !1, (u = r.error) === null || u === void 0 || u.call(r, l), a.error(l);
    }, function() {
      var l, u;
      c && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)), (u = r.finalize) === null || u === void 0 || u.call(r);
    }));
  }) : Jo;
}
class Iy {
  constructor(e, n, r, i, a, s, c, l, u, d) {
    this._uuid = e, this._filename = n, this._author = r, this._type = i, this._date = a, this._version = s, this._comment = c, this._archived = l, this._available = u, this._deleted = d;
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
  get deleted() {
    return this._deleted;
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
var Ey = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, s = n.responseType;
    this.status = a ?? 0, this.responseType = s ?? "";
    var c = n.getAllResponseHeaders();
    this.responseHeaders = c ? c.split(`
`).reduce(function(d, v) {
      var f = v.indexOf(": ");
      return d[v.slice(0, f)] = v.slice(f + 2), d;
    }, {}) : {}, this.response = _d(n);
    var l = e.loaded, u = e.total;
    this.loaded = l, this.total = u;
  }
  return t;
}(), ps = Zo(function(t) {
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
}), Sy = function() {
  function t(e, n) {
    return ps.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(ps.prototype), t;
}();
function Ay(t, e) {
  return hi({ method: "GET", url: t, headers: e });
}
function Cy(t, e, n) {
  return hi({ method: "POST", url: t, body: e, headers: n });
}
function xy(t, e) {
  return hi({ method: "DELETE", url: t, headers: e });
}
function Ty(t, e, n) {
  return hi({ method: "PUT", url: t, body: e, headers: n });
}
function wy(t, e, n) {
  return hi({ method: "PATCH", url: t, body: e, headers: n });
}
var Oy = Pn(function(t) {
  return t.response;
});
function Ly(t, e) {
  return Oy(hi({
    method: "GET",
    url: t,
    headers: e
  }));
}
var hi = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return My(n);
  };
  return t.get = Ay, t.post = Cy, t.delete = xy, t.put = Ty, t.patch = wy, t.getJSON = Ly, t;
}(), Ry = "upload", mu = "download", $s = "loadstart", eo = "progress", gu = "load";
function My(t) {
  return new bn(function(e) {
    var n, r, i = be({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, s = i.body, c = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(U, j) {
          return u.set(j, U);
        }), l = d[0] + "?" + u;
      } else
        u = new URLSearchParams(a), l = l + "?" + u;
    }
    var v = {};
    if (c)
      for (var f in c)
        c.hasOwnProperty(f) && (v[f.toLowerCase()] = c[f]);
    var m = i.crossDomain;
    !m && !("x-requested-with" in v) && (v["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, p = i.xsrfCookieName, b = i.xsrfHeaderName;
    if ((h || !m) && p && b) {
      var I = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      I && (v[b] = I);
    }
    var S = Dy(s, v), E = be(be({}, i), {
      url: l,
      headers: v,
      body: S
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var A = t.progressSubscriber, y = t.includeDownloadProgress, T = y === void 0 ? !1 : y, x = t.includeUploadProgress, C = x === void 0 ? !1 : x, P = function(U, j) {
        _.addEventListener(U, function() {
          var ne, M = j();
          (ne = A == null ? void 0 : A.error) === null || ne === void 0 || ne.call(A, M), e.error(M);
        });
      };
      P("timeout", function() {
        return new Sy(_, E);
      }), P("abort", function() {
        return new ps("aborted", _, E);
      });
      var W = function(U, j) {
        return new Ey(j, _, E, U + "_" + j.type);
      }, F = function(U, j, ne) {
        U.addEventListener(j, function(M) {
          e.next(W(ne, M));
        });
      };
      C && [$s, eo, gu].forEach(function(U) {
        return F(_.upload, U, Ry);
      }), A && [$s, eo].forEach(function(U) {
        return _.upload.addEventListener(U, function(j) {
          var ne;
          return (ne = A == null ? void 0 : A.next) === null || ne === void 0 ? void 0 : ne.call(A, j);
        });
      }), T && [$s, eo].forEach(function(U) {
        return F(_, U, mu);
      });
      var k = function(U) {
        var j = "ajax error" + (U ? " " + U : "");
        e.error(new ps(j, _, E));
      };
      _.addEventListener("error", function(U) {
        var j;
        (j = A == null ? void 0 : A.error) === null || j === void 0 || j.call(A, U), k();
      }), _.addEventListener(gu, function(U) {
        var j, ne, M = _.status;
        if (M < 400) {
          (j = A == null ? void 0 : A.complete) === null || j === void 0 || j.call(A);
          var L = void 0;
          try {
            L = W(mu, U);
          } catch (O) {
            e.error(O);
            return;
          }
          e.next(L), e.complete();
        } else
          (ne = A == null ? void 0 : A.error) === null || ne === void 0 || ne.call(A, U), k(M);
      });
    }
    var le = E.user, V = E.method, G = E.async;
    le ? _.open(V, l, G, le, E.password) : _.open(V, l, G), G && (_.timeout = E.timeout, _.responseType = E.responseType), "withCredentials" in _ && (_.withCredentials = E.withCredentials);
    for (var f in v)
      v.hasOwnProperty(f) && _.setRequestHeader(f, v[f]);
    return S ? _.send(S) : _.send(), function() {
      _ && _.readyState !== 4 && _.abort();
    };
  });
}
function Dy(t, e) {
  var n;
  if (!t || typeof t == "string" || ky(t) || By(t) || Py(t) || Ny(t) || Uy(t) || Vy(t))
    return t;
  if (Fy(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var Hy = Object.prototype.toString;
function el(t, e) {
  return Hy.call(t) === "[object " + e + "]";
}
function Py(t) {
  return el(t, "ArrayBuffer");
}
function Ny(t) {
  return el(t, "File");
}
function Uy(t) {
  return el(t, "Blob");
}
function Fy(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function ky(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function By(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Vy(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class Gy {
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
const jy = new Gy("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), qy = [jy], zy = qy[0].getUrl();
class yd {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? zy;
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
class Wy {
  constructor(e = new yd()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: c }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Xy(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: c ?? "json"
    }), this.rxjsRequest = (n) => pd(n).pipe(
      Pn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      py(
        (r) => hi(r).pipe(
          Pn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Pn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const lr = (t) => encodeURIComponent(`${t}`), Xy = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${lr(e)}=${lr(r)}`).join("&") : `${lr(e)}=${lr(n)}`
).join("&"), Si = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Ky extends Wy {
  deleteAllSclFileVersions({ id: e, type: n }, r) {
    Si(e, "id", "deleteAllSclFileVersions"), Si(n, "type", "deleteAllSclFileVersions");
    const i = {};
    return this.request({
      url: "/scl/v1/{type}/{id}".replace("{id}", lr(e)).replace("{type}", lr(n)),
      method: "DELETE",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Si(e, "id", "retrieveDataResourceByVersion"), Si(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", lr(e)).replace("{version}", lr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Si(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", lr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Si(e, "dataResourceSearch", "searchForResources");
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
class wi {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return wi.instance || (wi.instance = new wi()), wi.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      fu((r) => !!r || !!r.results),
      Pn((r) => r.results),
      Pn(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      fu((r) => !!r || !!r.versions),
      Pn((r) => r.versions),
      Pn(
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
    return new Iy(
      e.uuid,
      e.name,
      e.author,
      e.type,
      new Date(e.changedAt),
      e.version,
      e.comment,
      e.archived,
      e.available,
      e.deleted
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
    return new Ky(n);
  }
}
var Er;
class pu {
  constructor() {
    et(this, Er, Ft([]));
  }
  get store() {
    return re(this, Er);
  }
  updateData(e) {
    re(this, Er).set(e);
  }
  addData(e) {
    re(this, Er).update((n) => [...n, e]);
  }
  removeData(e) {
    re(this, Er).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return hc(re(this, Er)).find((n) => n.uuid === e);
  }
}
Er = new WeakMap();
am({ en: Om, de: pm });
var Zy = /* @__PURE__ */ he("<h3> </h3>"), Yy = /* @__PURE__ */ he("<div><!></div>"), Qy = /* @__PURE__ */ he("<!> <!>", 1), Jy = /* @__PURE__ */ he("<div><!></div>"), $y = /* @__PURE__ */ he('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div> <!> <!>', 1);
function eI(t, e) {
  xe(e, !0);
  const n = () => Un(im, "$_", r), [r, i] = Jn(), a = wi.getInstance();
  let s = /* @__PURE__ */ Ie(void 0);
  const c = new xo(), l = new xo(), u = l.pipe(
    yy(c.pipe(by(200))),
    Pn(() => x(o(A))),
    Ei(() => {
      X(f, !1);
    }),
    vu((O) => a.searchFiles(O).pipe(
      Pn((se) => se.filter((te) => !te.deleted)),
      Ei((se) => {
        [...se], d().updateData(se);
      }),
      hu(() => {
        X(f, !0);
      })
    ))
  );
  let d = g(e, "dataStore", 19, () => new pu()), v = g(e, "historyStore", 19, () => new pu()), f = /* @__PURE__ */ Ie(!0), m = /* @__PURE__ */ Ie(!1), h = /* @__PURE__ */ Ie("");
  lt(() => {
    const O = u.subscribe();
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
  let I = /* @__PURE__ */ _e(() => [
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
  ]), S = /* @__PURE__ */ _e(() => [
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
  const E = [
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
  let A = /* @__PURE__ */ Ie(Ae([
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
    })).type === "confirm" && a.deleteResource(O.type, O.uuid).pipe(da(1)).subscribe({
      next: () => {
        c.next(null), ga.success("Deleted resource", `Resource "${O.filename} (${O.uuid})" has been deleted.`);
      },
      error: (te) => {
        console.error(`Failed to delete resource "${O.filename} (${O.uuid})":`, te), ga.error("Deletion failed", `Failed to delete resource "${O.filename} (${O.uuid})".`);
      }
    });
  }
  function T(O) {
    console.log("Download file: ", O), a.downloadSclData(O.uuid, O.type, O.version).pipe(da(1), Ei((se) => {
      const te = window.URL.createObjectURL(se), Y = document.createElement("a");
      Y.href = te, Y.download = `${O.filename}.${O.type.toLowerCase()}`, Y.style.display = "none", document.body.appendChild(Y), Y.click(), document.body.removeChild(Y), window.URL.revokeObjectURL(te);
    })).subscribe();
  }
  function x(O) {
    const se = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    return O.forEach((te) => {
      if (te.key in se && te.type !== "date" && te.value)
        se[te.key] = te.value;
      else if (te.type === "date" && te.value) {
        const Y = new Date(te.value);
        te.key === "from" ? se.from = Y.toISOString() : te.key === "to" && (Y.setHours(23, 59, 59, 999), se.to = Y.toISOString());
      }
    }), o(h) && o(h).trim() !== "" && (se.filename = o(h).trim()), se;
  }
  function C(O) {
    X(s, O, !0), a.getHistoryFiles(O.uuid).pipe(da(1), Ei((se) => {
      X(m, !0), [...se], v().updateData(se);
    })).subscribe();
  }
  function P(O) {
    console.log("Dialog closed with result: ", O), X(m, !1);
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
    let te = "";
    a.downloadSclData(O.uuid, O.type, O.version).pipe(
      da(1),
      Ei((Y) => {
        te = window.URL.createObjectURL(Y);
      }),
      vu(() => $o(fetch(te).then((Y) => {
        if (Y.status === 200)
          return Y.text();
        throw new Error(`Failed to load ${O.filename}: ${Y.status} ${Y.statusText}`);
      }))),
      da(1),
      bd((Y) => (ga.error("Open Document Failed", `Failed to open document "${O.filename}".`), console.error(Y), pd(void 0))),
      Ei((Y) => {
        var J;
        if (!Y)
          return;
        const ye = O.filename, B = new DOMParser().parseFromString(Y, "application/xml");
        (J = window.document.getElementsByTagName("open-scd")[0]) == null || J.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: B, docName: ye }
        }));
      }),
      hu(() => te && window.URL.revokeObjectURL(te))
    ).subscribe();
  }
  var F = $y(), k = z(F), le = de(k), V = de(le);
  Sp(V, {
    onClose: P,
    get open() {
      return o(m);
    },
    set open(Y) {
      X(m, Y, !0);
    },
    title: (Y) => {
      var ye = Zy(), B = de(ye);
      Ce((J) => Ye(B, J), [
        () => {
          var J;
          return n()("versionHistory.title", { values: { filename: (J = o(s)) == null ? void 0 : J.filename } });
        }
      ]), w(Y, ye);
    },
    content: (Y) => {
      var ye = Yy(), B = de(ye);
      {
        let J = /* @__PURE__ */ _e(() => n()("search"));
        au(B, {
          get columnDefs() {
            return o(S);
          },
          get store() {
            return v();
          },
          get loadingDone() {
            return o(f);
          },
          get rowActions() {
            return _;
          },
          get searchInputLabel() {
            return o(J);
          }
        });
      }
      w(Y, ye);
    },
    actions: (Y) => {
      var ye = Jy(), B = de(ye);
      Gc(B, {
        callback: P,
        variant: "raised",
        children: (J, Q) => {
          var fe = Qy(), Se = z(fe);
          Ko(Se, {});
          var K = ge(Se, 2);
          Gm(K, {
            children: (ie, Me) => {
              var Le = Et();
              Ce((ke) => Ye(Le, ke), [() => n()("done")]), w(ie, Le);
            },
            $$slots: { default: !0 }
          }), w(J, fe);
        },
        $$slots: { default: !0 }
      }), w(Y, ye);
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var G = ge(V, 2), U = de(G);
  S_(U, {
    searchLabel: "Search file name...",
    onFilterChange: () => c.next(null),
    onSearchInput: () => c.next(null),
    get filters() {
      return o(A);
    },
    set filters(O) {
      X(A, O, !0);
    },
    get searchText() {
      return o(h);
    },
    set searchText(O) {
      X(h, O, !0);
    }
  });
  var j = ge(G, 2), ne = de(j);
  {
    let O = /* @__PURE__ */ _e(() => n()("search"));
    au(ne, {
      emptyText: "No resources found.",
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
        return E;
      },
      get searchInputLabel() {
        return o(O);
      }
    });
  }
  var M = ge(k, 2);
  i_(M, {});
  var L = ge(M, 2);
  Cp(L, {}), w(t, F), Te(), i();
}
const Id = "version-editor", Ed = "0.0.1";
var tI = /* @__PURE__ */ he('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function nI(t, e) {
  xe(e, !0);
  let n = g(e, "dev", 3, !1);
  var r = tI(), i = z(r);
  {
    var a = (l) => {
      eI(l, {});
    };
    ae(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var s = ge(i, 2), c = ge(s, 2);
  Ce(() => {
    _l(s, Id), _l(c, Ed);
  }), w(t, r), Te();
}
var Ui;
class oI extends HTMLElement {
  constructor() {
    super();
    et(this, Ui);
    He(this, Ui, /* @__PURE__ */ Ie(Ae({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return o(re(this, Ui));
  }
  set props(n) {
    X(re(this, Ui), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, Vf(nI, { target: this.shadowRoot, props: this.props });
    const n = rI();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Ui = new WeakMap();
function rI() {
  const t = `${Id}-v${Ed}-style`, e = iI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function iI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  oI as default
};
