var Ad = Object.defineProperty;
var $o = (t) => {
  throw TypeError(t);
};
var Sd = (t, e, n) => e in t ? Ad(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var pi = (t, e, n) => Sd(t, typeof e != "symbol" ? e + "" : e, n), Ns = (t, e, n) => e.has(t) || $o("Cannot " + n);
var $ = (t, e, n) => (Ns(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Je = (t, e, n) => e.has(t) ? $o("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), De = (t, e, n, r) => (Ns(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Gt = (t, e, n) => (Ns(t, e, "access private method"), n);
const Mt = Symbol(), xd = "http://www.w3.org/1999/xhtml", Cd = "http://www.w3.org/2000/svg", Td = "@attach", pu = !1;
var ys = Array.isArray, wd = Array.prototype.indexOf, Co = Array.from, ns = Object.defineProperty, Ir = Object.getOwnPropertyDescriptor, gu = Object.getOwnPropertyDescriptors, Ld = Object.prototype, Od = Array.prototype, To = Object.getPrototypeOf, el = Object.isExtensible;
function Ii(t) {
  return typeof t == "function";
}
const me = () => {
};
function Rd(t) {
  return t();
}
function rs(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function bu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const nn = 2, wo = 4, Is = 8, Tr = 16, cr = 32, si = 64, Lo = 128, xn = 256, is = 512, zt = 1024, _n = 2048, wr = 4096, Un = 8192, oi = 16384, Es = 32768, Lr = 65536, tl = 1 << 17, Md = 1 << 18, Wi = 1 << 19, _u = 1 << 20, to = 1 << 21, As = 1 << 22, Qr = 1 << 23, Xn = Symbol("$state"), yu = Symbol("legacy props"), Dd = Symbol(""), Ei = new class extends Error {
  constructor() {
    super(...arguments);
    pi(this, "name", "StaleReactionError");
    pi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
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
let Xi = !1, Xd = !1;
function Kd() {
  Xi = !0;
}
let it = null;
function Hi(t) {
  it = t;
}
function fe(t) {
  return (
    /** @type {T} */
    Au().get(t)
  );
}
function ae(t, e) {
  return Au().set(t, e), e;
}
function xe(t, e = !1, n) {
  it = {
    p: it,
    c: null,
    e: null,
    s: t,
    x: null,
    l: Xi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Ce(t) {
  var e = (
    /** @type {ComponentContext} */
    it
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Vu(r);
  }
  return t !== void 0 && (e.x = t), it = e.p, t ?? /** @type {T} */
  {};
}
function wa() {
  return !Xi || it !== null && it.l === null;
}
function Au(t) {
  return it === null && Oo(), it.c ?? (it.c = new Map(Zd(it) || void 0));
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
let qr = [];
function Su() {
  var t = qr;
  qr = [], rs(t);
}
function ur(t) {
  if (qr.length === 0 && !ma) {
    var e = qr;
    queueMicrotask(() => {
      e === qr && Su();
    });
  }
  qr.push(t);
}
function Yd() {
  for (; qr.length > 0; )
    Su();
}
const Qd = /* @__PURE__ */ new WeakMap();
function xu(t) {
  var e = ke;
  if (e === null)
    return Ue.f |= Qr, t;
  if (e.f & Es)
    Ni(t, e);
  else {
    if (!(e.f & Lo))
      throw !e.parent && t instanceof Error && Cu(t), t;
    e.b.error(t);
  }
}
function Ni(t, e) {
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
  e && (ns(t, "message", {
    value: e.message
  }), ns(t, "stack", {
    value: e.stack
  }));
}
const ka = /* @__PURE__ */ new Set();
let nt = null, Za = null, kt = null, no = /* @__PURE__ */ new Set(), Wn = [], Ss = null, ro = !1, ma = !1;
var Li, Oi, Wr, xa, Ri, Mi, Xr, Di, Ca, Ta, Cn, io, Ya, ao;
const gs = class gs {
  constructor() {
    Je(this, Cn);
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
    Je(this, Li, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Je(this, Oi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Je(this, Wr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Je(this, xa, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Je(this, Ri, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Je(this, Mi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Je(this, Xr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Je(this, Di, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Je(this, Ca, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Je(this, Ta, []);
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
    Wn = [], Za = null, this.apply();
    for (const s of e)
      Gt(this, Cn, io).call(this, s);
    if ($(this, Wr) === 0) {
      var n = kt;
      Gt(this, Cn, ao).call(this);
      var r = $(this, Mi), i = $(this, Xr);
      De(this, Mi, []), De(this, Xr, []), De(this, Di, []), Za = this, nt = null, kt = n, nl(r), nl(i), Za = null, (a = $(this, xa)) == null || a.resolve();
    } else
      Gt(this, Cn, Ya).call(this, $(this, Mi)), Gt(this, Cn, Ya).call(this, $(this, Xr)), Gt(this, Cn, Ya).call(this, $(this, Di));
    kt = null;
    for (const s of $(this, Ri))
      ba(s);
    De(this, Ri, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    $(this, Li).has(e) || $(this, Li).set(e, n), this.current.set(e, e.v), kt == null || kt.set(e, e.v);
  }
  activate() {
    nt = this;
  }
  deactivate() {
    nt = null, kt = null;
  }
  flush() {
    if (Wn.length > 0) {
      if (this.activate(), Tu(), nt !== null && nt !== this)
        return;
    } else $(this, Wr) === 0 && Gt(this, Cn, ao).call(this);
    this.deactivate();
    for (const e of no)
      if (no.delete(e), e(), nt !== null)
        break;
  }
  increment() {
    De(this, Wr, $(this, Wr) + 1);
  }
  decrement() {
    De(this, Wr, $(this, Wr) - 1);
    for (const e of $(this, Ca))
      $t(e, _n), ti(e);
    for (const e of $(this, Ta))
      $t(e, wr), ti(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    $(this, Oi).add(e);
  }
  settled() {
    return ($(this, xa) ?? De(this, xa, bu())).promise;
  }
  static ensure() {
    if (nt === null) {
      const e = nt = new gs();
      ka.add(nt), ma || gs.enqueue(() => {
        nt === e && e.flush();
      });
    }
    return nt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ur(e);
  }
  apply() {
  }
};
Li = new WeakMap(), Oi = new WeakMap(), Wr = new WeakMap(), xa = new WeakMap(), Ri = new WeakMap(), Mi = new WeakMap(), Xr = new WeakMap(), Di = new WeakMap(), Ca = new WeakMap(), Ta = new WeakMap(), Cn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
io = function(e) {
  var l;
  e.f ^= zt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (cr | si)) !== 0, a = i && (r & zt) !== 0, s = a || (r & Un) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      i ? n.f ^= zt : r & wo ? $(this, Xr).push(n) : r & zt || (r & As && ((l = n.b) != null && l.is_pending()) ? $(this, Ri).push(n) : Ts(n) && (n.f & Tr && $(this, Di).push(n), ba(n)));
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
Ya = function(e) {
  for (const n of e)
    (n.f & _n ? $(this, Ca) : $(this, Ta)).push(n), $t(n, zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
ao = function() {
  var e;
  for (const n of $(this, Oi))
    n();
  if ($(this, Oi).clear(), ka.size > 1) {
    $(this, Li).clear();
    let n = !0;
    for (const r of ka) {
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
        if (Wn.length > 0) {
          nt = r, r.apply();
          for (const s of Wn)
            Gt(e = r, Cn, io).call(e, s);
          Wn = [], r.deactivate();
        }
      }
    }
    nt = null;
  }
  ka.delete(this);
};
let lr = gs;
function Jd(t) {
  var e = ma;
  ma = !0;
  try {
    for (var n; ; ) {
      if (Yd(), Wn.length === 0 && (nt == null || nt.flush(), Wn.length === 0))
        return Ss = null, /** @type {T} */
        n;
      Tu();
    }
  } finally {
    ma = e;
  }
}
function Tu() {
  var t = Ci;
  ro = !0;
  try {
    var e = 0;
    for (sl(!0); Wn.length > 0; ) {
      var n = lr.ensure();
      if (e++ > 1e3) {
        var r, i;
        $d();
      }
      n.process(Wn), Er.clear();
    }
  } finally {
    ro = !1, sl(t), Ss = null;
  }
}
function $d() {
  try {
    kd();
  } catch (t) {
    Ni(t, Ss);
  }
}
let sr = null;
function nl(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (oi | Un)) && Ts(r) && (sr = [], ba(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? qu(r) : r.fn = null), (sr == null ? void 0 : sr.length) > 0)) {
        Er.clear();
        for (const i of sr)
          ba(i);
        sr = [];
      }
    }
    sr = null;
  }
}
function wu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & nn ? wu(
        /** @type {Derived} */
        n,
        e
      ) : r & (As | Tr) && Lu(n, e) && ($t(n, _n), ti(
        /** @type {Effect} */
        n
      ));
    }
}
function Lu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & nn && Lu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ti(t) {
  for (var e = Ss = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ro && e === ke && n & Tr)
      return;
    if (n & (si | cr)) {
      if (!(n & zt)) return;
      e.f ^= zt;
    }
  }
  Wn.push(e);
}
function ef(t) {
  let e = 0, n = ni(0), r;
  return () => {
    gf() && (o(n), Ra(() => (e === 0 && (r = kn(() => t(() => pa(n)))), e += 1, () => {
      ur(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, pa(n));
      });
    })));
  };
}
var tf = Lr | Wi | Lo;
function nf(t, e, n) {
  new rf(t, e, n);
}
var Pn, An, xo, jn, Kr, qn, Sn, cn, zn, pr, Zr, gr, Yr, br, bs, _s, tn, af, sf, Qa, Ja, so;
class rf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Je(this, tn);
    /** @type {Boundary | null} */
    pi(this, "parent");
    Je(this, Pn, !1);
    /** @type {TemplateNode} */
    Je(this, An);
    /** @type {TemplateNode | null} */
    Je(this, xo, null);
    /** @type {BoundaryProps} */
    Je(this, jn);
    /** @type {((anchor: Node) => void)} */
    Je(this, Kr);
    /** @type {Effect} */
    Je(this, qn);
    /** @type {Effect | null} */
    Je(this, Sn, null);
    /** @type {Effect | null} */
    Je(this, cn, null);
    /** @type {Effect | null} */
    Je(this, zn, null);
    /** @type {DocumentFragment | null} */
    Je(this, pr, null);
    Je(this, Zr, 0);
    Je(this, gr, 0);
    Je(this, Yr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Je(this, br, null);
    Je(this, bs, () => {
      $(this, br) && Ui($(this, br), $(this, Zr));
    });
    Je(this, _s, ef(() => (De(this, br, ni($(this, Zr))), () => {
      De(this, br, null);
    })));
    De(this, An, e), De(this, jn, n), De(this, Kr, r), this.parent = /** @type {Effect} */
    ke.b, De(this, Pn, !!$(this, jn).pending), De(this, qn, Rr(() => {
      ke.b = this;
      {
        try {
          De(this, Sn, jt(() => r($(this, An))));
        } catch (i) {
          this.error(i);
        }
        $(this, gr) > 0 ? Gt(this, tn, Ja).call(this) : De(this, Pn, !1);
      }
    }, tf));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return $(this, Pn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!$(this, jn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Gt(this, tn, so).call(this, e), De(this, Zr, $(this, Zr) + e), no.add($(this, bs));
  }
  get_effect_pending() {
    return $(this, _s).call(this), o(
      /** @type {Source<number>} */
      $(this, br)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = $(this, jn).onerror;
    let r = $(this, jn).failed;
    if ($(this, Yr) || !n && !r)
      throw e;
    $(this, Sn) && (Bt($(this, Sn)), De(this, Sn, null)), $(this, cn) && (Bt($(this, cn)), De(this, cn, null)), $(this, zn) && (Bt($(this, zn)), De(this, zn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        zd();
        return;
      }
      i = !0, a && jd(), lr.ensure(), De(this, Zr, 0), $(this, zn) !== null && Ar($(this, zn), () => {
        De(this, zn, null);
      }), De(this, Pn, this.has_pending_snippet()), De(this, Sn, Gt(this, tn, Qa).call(this, () => (De(this, Yr, !1), jt(() => $(this, Kr).call(this, $(this, An)))))), $(this, gr) > 0 ? Gt(this, tn, Ja).call(this) : De(this, Pn, !1);
    };
    var c = Ue;
    try {
      fn(null), a = !0, n == null || n(e, s), a = !1;
    } catch (u) {
      Ni(u, $(this, qn) && $(this, qn).parent);
    } finally {
      fn(c);
    }
    r && ur(() => {
      De(this, zn, Gt(this, tn, Qa).call(this, () => {
        De(this, Yr, !0);
        try {
          return jt(() => {
            r(
              $(this, An),
              () => e,
              () => s
            );
          });
        } catch (u) {
          return Ni(
            u,
            /** @type {Effect} */
            $(this, qn).parent
          ), null;
        } finally {
          De(this, Yr, !1);
        }
      }));
    });
  }
}
Pn = new WeakMap(), An = new WeakMap(), xo = new WeakMap(), jn = new WeakMap(), Kr = new WeakMap(), qn = new WeakMap(), Sn = new WeakMap(), cn = new WeakMap(), zn = new WeakMap(), pr = new WeakMap(), Zr = new WeakMap(), gr = new WeakMap(), Yr = new WeakMap(), br = new WeakMap(), bs = new WeakMap(), _s = new WeakMap(), tn = new WeakSet(), af = function() {
  try {
    De(this, Sn, jt(() => $(this, Kr).call(this, $(this, An))));
  } catch (e) {
    this.error(e);
  }
  De(this, Pn, !1);
}, sf = function() {
  const e = $(this, jn).pending;
  e && (De(this, cn, jt(() => e($(this, An)))), lr.enqueue(() => {
    De(this, Sn, Gt(this, tn, Qa).call(this, () => (lr.ensure(), jt(() => $(this, Kr).call(this, $(this, An)))))), $(this, gr) > 0 ? Gt(this, tn, Ja).call(this) : (Ar(
      /** @type {Effect} */
      $(this, cn),
      () => {
        De(this, cn, null);
      }
    ), De(this, Pn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Qa = function(e) {
  var n = ke, r = Ue, i = it;
  Yn($(this, qn)), fn($(this, qn)), Hi($(this, qn).ctx);
  try {
    return e();
  } catch (a) {
    return xu(a), null;
  } finally {
    Yn(n), fn(r), Hi(i);
  }
}, Ja = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    $(this, jn).pending
  );
  $(this, Sn) !== null && (De(this, pr, document.createDocumentFragment()), of($(this, Sn), $(this, pr))), $(this, cn) === null && De(this, cn, jt(() => e($(this, An))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
so = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Gt(n = this.parent, tn, so).call(n, e);
    return;
  }
  De(this, gr, $(this, gr) + e), $(this, gr) === 0 && (De(this, Pn, !1), $(this, cn) && Ar($(this, cn), () => {
    De(this, cn, null);
  }), $(this, pr) && ($(this, An).before($(this, pr)), De(this, pr, null)), ur(() => {
    lr.ensure().flush();
  }));
};
function of(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Oa(n)
    );
    e.append(n), n = i;
  }
}
function Ou(t, e, n) {
  const r = wa() ? La : Mo;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = nt, a = (
    /** @type {Effect} */
    ke
  ), s = lf();
  Promise.all(e.map((c) => /* @__PURE__ */ uf(c))).then((c) => {
    s();
    try {
      n([...t.map(r), ...c]);
    } catch (u) {
      a.f & oi || Ni(u, a);
    }
    i == null || i.deactivate(), oo();
  }).catch((c) => {
    Ni(c, a);
  });
}
function lf() {
  var t = ke, e = Ue, n = it, r = nt;
  return function() {
    Yn(t), fn(e), Hi(n), r == null || r.activate();
  };
}
function oo() {
  Yn(null), fn(null), Hi(null);
}
// @__NO_SIDE_EFFECTS__
function La(t) {
  var e = nn | _n, n = Ue !== null && Ue.f & nn ? (
    /** @type {Derived} */
    Ue
  ) : null;
  return ke === null || n !== null && n.f & xn ? e |= xn : ke.f |= Wi, {
    ctx: it,
    deps: null,
    effects: null,
    equals: Iu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Mt
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
  ), a = ni(
    /** @type {V} */
    Mt
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
      nt
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (l.increment(), (f = c.get(l)) == null || f.reject(Ei), c.delete(l), c.set(l, u)));
    const h = (m, v = void 0) => {
      if (d || l.activate(), v)
        v !== Ei && (a.f |= Qr, Ui(a, v));
      else {
        a.f & Qr && (a.f ^= Qr), Ui(a, m);
        for (const [p, b] of c) {
          if (c.delete(p), p === l) break;
          b.reject(Ei);
        }
      }
      s && (r.update_pending_count(-1), d || l.decrement());
    };
    u.promise.then(h, (m) => h(null, m || "unknown"));
  }), xs(() => {
    for (const u of c.values())
      u.reject(Ei);
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
function be(t) {
  const e = /* @__PURE__ */ La(t);
  return Xu(e), e;
}
// @__NO_SIDE_EFFECTS__
function Mo(t) {
  const e = /* @__PURE__ */ La(t);
  return e.equals = Eu, e;
}
function Ru(t) {
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
function cf(t) {
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
function Do(t) {
  var e, n = ke;
  Yn(cf(t));
  try {
    Ru(t), e = Qu(t);
  } finally {
    Yn(n);
  }
  return e;
}
function Mu(t) {
  var e = Do(t);
  if (t.equals(e) || (t.v = e, t.wv = Zu()), !ui)
    if (kt !== null)
      kt.set(t, t.v);
    else {
      var n = (_r || t.f & xn) && t.deps !== null ? wr : zt;
      $t(t, n);
    }
}
const Er = /* @__PURE__ */ new Map();
function ni(t, e) {
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
function ge(t, e) {
  const n = ni(t);
  return Xu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Du(t, e = !1, n = !0) {
  var i;
  const r = ni(t);
  return e || (r.equals = Eu), Xi && n && it !== null && it.l !== null && ((i = it.l).s ?? (i.s = [])).push(r), r;
}
function z(t, e, n = !1) {
  Ue !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Hn || Ue.f & tl) && wa() && Ue.f & (nn | Tr | As | tl) && !(Jt != null && Jt.includes(t)) && Gd();
  let r = n ? _e(e) : e;
  return Ui(t, r);
}
function Ui(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ui ? Er.set(t, e) : Er.set(t, n), t.v = e;
    var r = lr.ensure();
    r.capture(t, n), t.f & nn && (t.f & _n && Do(
      /** @type {Derived} */
      t
    ), $t(t, t.f & xn ? wr : zt)), t.wv = Zu(), Pu(t, _n), wa() && ke !== null && ke.f & zt && !(ke.f & (cr | si)) && (En === null ? Af([t]) : En.push(t));
  }
  return e;
}
function pa(t) {
  z(t, t.v + 1);
}
function Pu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = wa(), i = n.length, a = 0; a < i; a++) {
      var s = n[a], c = s.f;
      if (!(!r && s === ke)) {
        var u = (c & _n) === 0;
        u && $t(s, e), c & nn ? Pu(
          /** @type {Derived} */
          s,
          wr
        ) : u && (c & Tr && sr !== null && sr.push(
          /** @type {Effect} */
          s
        ), ti(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function _e(t) {
  if (typeof t != "object" || t === null || Xn in t)
    return t;
  const e = To(t);
  if (e !== Ld && e !== Od)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ys(t), i = /* @__PURE__ */ ge(0), a = Jr, s = (c) => {
    if (Jr === a)
      return c();
    var u = Ue, l = Jr;
    fn(null), ll(a);
    var d = c();
    return fn(u), ll(l), d;
  };
  return r && n.set("length", /* @__PURE__ */ ge(
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
          var h = /* @__PURE__ */ ge(l.value);
          return n.set(u, h), h;
        }) : z(d, l.value, !0), !0;
      },
      deleteProperty(c, u) {
        var l = n.get(u);
        if (l === void 0) {
          if (u in c) {
            const d = s(() => /* @__PURE__ */ ge(Mt));
            n.set(u, d), pa(i);
          }
        } else
          z(l, Mt), pa(i);
        return !0;
      },
      get(c, u, l) {
        var m;
        if (u === Xn)
          return t;
        var d = n.get(u), h = u in c;
        if (d === void 0 && (!h || (m = Ir(c, u)) != null && m.writable) && (d = s(() => {
          var v = _e(h ? c[u] : Mt), p = /* @__PURE__ */ ge(v);
          return p;
        }), n.set(u, d)), d !== void 0) {
          var f = o(d);
          return f === Mt ? void 0 : f;
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
          if (h !== void 0 && f !== Mt)
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
        if (u === Xn)
          return !0;
        var l = n.get(u), d = l !== void 0 && l.v !== Mt || Reflect.has(c, u);
        if (l !== void 0 || ke !== null && (!d || (f = Ir(c, u)) != null && f.writable)) {
          l === void 0 && (l = s(() => {
            var m = d ? _e(c[u]) : Mt, v = /* @__PURE__ */ ge(m);
            return v;
          }), n.set(u, l));
          var h = o(l);
          if (h === Mt)
            return !1;
        }
        return d;
      },
      set(c, u, l, d) {
        var I;
        var h = n.get(u), f = u in c;
        if (r && u === "length")
          for (var m = l; m < /** @type {Source<number>} */
          h.v; m += 1) {
            var v = n.get(m + "");
            v !== void 0 ? z(v, Mt) : m in c && (v = s(() => /* @__PURE__ */ ge(Mt)), n.set(m + "", v));
          }
        if (h === void 0)
          (!f || (I = Ir(c, u)) != null && I.writable) && (h = s(() => /* @__PURE__ */ ge(void 0)), z(h, _e(l)), n.set(u, h));
        else {
          f = h.v !== Mt;
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
          pa(i);
        }
        return !0;
      },
      ownKeys(c) {
        o(i);
        var u = Reflect.ownKeys(c).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Mt;
        });
        for (var [l, d] of n)
          d.v !== Mt && !(l in c) && u.push(l);
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
    if (t !== null && typeof t == "object" && Xn in t)
      return t[Xn];
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
    Uu = Ir(e, "firstChild").get, ku = Ir(e, "nextSibling").get, el(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), el(n) && (n.__t = void 0);
  }
}
function Or(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function ki(t) {
  return Uu.call(t);
}
// @__NO_SIDE_EFFECTS__
function Oa(t) {
  return ku.call(t);
}
function oe(t, e) {
  return /* @__PURE__ */ ki(t);
}
function W(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ki(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Oa(n) : n;
  }
}
function ye(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Oa(r);
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
    t.autofocus = !0, ur(() => {
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
function Ki(t) {
  var e = Ue, n = ke;
  fn(null), Yn(null);
  try {
    return t();
  } finally {
    fn(e), Yn(n);
  }
}
function Bu(t, e, n, r = n) {
  t.addEventListener(e, () => Ki(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), mf();
}
function Fu(t) {
  ke === null && Ue === null && Ud(), Ue !== null && Ue.f & xn && ke === null && Nd(), ui && Hd();
}
function pf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Qn(t, e, n, r = !0) {
  var i = ke;
  i !== null && i.f & Un && (t |= Un);
  var a = {
    ctx: it,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | _n,
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
      ba(a), a.f |= Es;
    } catch (u) {
      throw Bt(a), u;
    }
  else e !== null && ti(a);
  if (r) {
    var s = a;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & Wi) && (s = s.first), s !== null && (s.parent = i, i !== null && pf(s, i), Ue !== null && Ue.f & nn && !(t & si))) {
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
  return Ue !== null && !Hn;
}
function xs(t) {
  const e = Qn(Is, null, !1);
  return $t(e, zt), e.teardown = t, e;
}
function Te(t) {
  Fu();
  var e = (
    /** @type {Effect} */
    ke.f
  ), n = !Ue && (e & cr) !== 0 && (e & Es) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      it
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Vu(t);
}
function Vu(t) {
  return Qn(wo | _u, t, !1);
}
function bf(t) {
  return Fu(), Qn(Is | _u, t, !0);
}
function _f(t) {
  lr.ensure();
  const e = Qn(si | Wi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ar(e, () => {
      Bt(e), r(void 0);
    }) : (Bt(e), r(void 0));
  });
}
function li(t) {
  return Qn(wo, t, !1);
}
function yf(t) {
  return Qn(As | Wi, t, !0);
}
function Ra(t, e = 0) {
  return Qn(Is | e, t, !0);
}
function Le(t, e = [], n = []) {
  Ou(e, n, (r) => {
    Qn(Is, () => t(...r.map(o)), !0);
  });
}
function Rr(t, e = 0) {
  var n = Qn(Tr | e, t, !0);
  return n;
}
function jt(t, e = !0) {
  return Qn(cr | Wi, t, !0, e);
}
function Gu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ui, r = Ue;
    ol(!0), fn(null);
    try {
      e.call(null);
    } finally {
      ol(n), fn(r);
    }
  }
}
function ju(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Ki(() => {
      i.abort(Ei);
    });
    var r = n.next;
    n.f & si ? n.parent = null : Bt(n, e), n = r;
  }
}
function If(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & cr || Bt(e), e = n;
  }
}
function Bt(t, e = !0) {
  var n = !1;
  (e || t.f & Md) && t.nodes_start !== null && t.nodes_end !== null && (Ef(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), ju(t, e && !n), as(t, 0), $t(t, oi);
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
      /* @__PURE__ */ Oa(t)
    );
    t.remove(), t = n;
  }
}
function qu(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Ar(t, e) {
  var n = [];
  Ho(t, n, !0), zu(n, () => {
    Bt(t), e && e();
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
  if (!(t.f & Un)) {
    if (t.f ^= Un, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Lr) !== 0 || (r.f & cr) !== 0;
      Ho(r, e, a ? n : !1), r = i;
    }
  }
}
function Cs(t) {
  Wu(t, !0);
}
function Wu(t, e) {
  if (t.f & Un) {
    t.f ^= Un, t.f & zt || ($t(t, _n), ti(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Lr) !== 0 || (n.f & cr) !== 0;
      Wu(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Ci = !1;
function sl(t) {
  Ci = t;
}
let ui = !1;
function ol(t) {
  ui = t;
}
let Ue = null, Hn = !1;
function fn(t) {
  Ue = t;
}
let ke = null;
function Yn(t) {
  ke = t;
}
let Jt = null;
function Xu(t) {
  Ue !== null && (Jt === null ? Jt = [t] : Jt.push(t));
}
let Zt = null, gn = 0, En = null;
function Af(t) {
  En = t;
}
let Ku = 1, ga = 0, Jr = ga;
function ll(t) {
  Jr = t;
}
let _r = !1;
function Zu() {
  return ++Ku;
}
function Ts(t) {
  var h;
  var e = t.f;
  if (e & _n)
    return !0;
  if (e & wr) {
    var n = t.deps, r = (e & xn) !== 0;
    if (n !== null) {
      var i, a, s = (e & is) !== 0, c = r && ke !== null && !_r, u = n.length;
      if ((s || c) && (ke === null || !(ke.f & oi))) {
        var l = (
          /** @type {Derived} */
          t
        ), d = l.parent;
        for (i = 0; i < u; i++)
          a = n[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(l))) && (a.reactions ?? (a.reactions = [])).push(l);
        s && (l.f ^= is), c && d !== null && !(d.f & xn) && (l.f ^= xn);
      }
      for (i = 0; i < u; i++)
        if (a = n[i], Ts(
          /** @type {Derived} */
          a
        ) && Mu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || ke !== null && !_r) && $t(t, zt);
  }
  return !1;
}
function Yu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Jt != null && Jt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & nn ? Yu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? $t(a, _n) : a.f & zt && $t(a, wr), ti(
        /** @type {Effect} */
        a
      ));
    }
}
function Qu(t) {
  var p;
  var e = Zt, n = gn, r = En, i = Ue, a = _r, s = Jt, c = it, u = Hn, l = Jr, d = t.f;
  Zt = /** @type {null | Value[]} */
  null, gn = 0, En = null, _r = (d & xn) !== 0 && (Hn || !Ci || Ue === null), Ue = d & (cr | si) ? null : t, Jt = null, Hi(t.ctx), Hn = !1, Jr = ++ga, t.ac !== null && (Ki(() => {
    t.ac.abort(Ei);
  }), t.ac = null);
  try {
    t.f |= to;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), m = t.deps;
    if (Zt !== null) {
      var v;
      if (as(t, gn), m !== null && gn > 0)
        for (m.length = gn + Zt.length, v = 0; v < Zt.length; v++)
          m[gn + v] = Zt[v];
      else
        t.deps = m = Zt;
      if (!_r || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & nn && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = gn; v < m.length; v++)
          ((p = m[v]).reactions ?? (p.reactions = [])).push(t);
    } else m !== null && gn < m.length && (as(t, gn), m.length = gn);
    if (wa() && En !== null && !Hn && m !== null && !(t.f & (nn | wr | _n)))
      for (v = 0; v < /** @type {Source[]} */
      En.length; v++)
        Yu(
          En[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (ga++, En !== null && (r === null ? r = En : r.push(.../** @type {Source[]} */
    En))), t.f & Qr && (t.f ^= Qr), f;
  } catch (b) {
    return xu(b);
  } finally {
    t.f ^= to, Zt = e, gn = n, En = r, Ue = i, _r = a, Jt = s, Hi(c), Hn = u, Jr = l;
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
  n === null && e.f & nn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Zt === null || !Zt.includes(e)) && ($t(e, wr), e.f & (xn | is) || (e.f ^= is), Ru(
    /** @type {Derived} **/
    e
  ), as(
    /** @type {Derived} **/
    e,
    0
  ));
}
function as(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Sf(t, n[r]);
}
function ba(t) {
  var e = t.f;
  if (!(e & oi)) {
    $t(t, zt);
    var n = ke, r = Ci;
    ke = t, Ci = !0;
    try {
      e & Tr ? If(t) : ju(t), Gu(t);
      var i = Qu(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Ku;
      var a;
      pu && Xd && t.f & _n && t.deps;
    } finally {
      Ci = r, ke = n;
    }
  }
}
async function Ju() {
  await Promise.resolve(), Jd();
}
function o(t) {
  var e = t.f, n = (e & nn) !== 0;
  if (Ue !== null && !Hn) {
    var r = ke !== null && (ke.f & oi) !== 0;
    if (!r && !(Jt != null && Jt.includes(t))) {
      var i = Ue.deps;
      if (Ue.f & to)
        t.rv < ga && (t.rv = ga, Zt === null && i !== null && i[gn] === t ? gn++ : Zt === null ? Zt = [t] : (!_r || !Zt.includes(t)) && Zt.push(t));
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
    c !== null && !(c.f & xn) && (s.f ^= xn);
  }
  if (ui) {
    if (Er.has(t))
      return Er.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var u = s.v;
      return (!(s.f & zt) && s.reactions !== null || $u(s)) && (u = Do(s)), Er.set(s, u), u;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, kt != null && kt.has(s))
      return kt.get(s);
    Ts(s) && Mu(s);
  }
  if (kt != null && kt.has(t))
    return kt.get(t);
  if (t.f & Qr)
    throw t.v;
  return t.v;
}
function $u(t) {
  if (t.v === Mt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Er.has(e) || e.f & nn && $u(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function kn(t) {
  var e = Hn;
  try {
    return Hn = !0, t();
  } finally {
    Hn = e;
  }
}
const xf = -7169;
function $t(t, e) {
  t.f = t.f & xf | e;
}
function ec(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Xn in t)
      lo(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Xn in n && lo(n);
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
    if (r.capture || ha.call(e, a), !a.cancelBubble)
      return Ki(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? ur(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Cf(t, e, n, r = {}) {
  var i = No(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function fa(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = No(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && xs(() => {
    e.removeEventListener(t, s, a);
  });
}
function wn(t) {
  for (var e = 0; e < t.length; e++)
    tc.add(t[e]);
  for (var n of uo)
    n(t);
}
let ul = null;
function ha(t) {
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
    ns(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Ue, h = ke;
    fn(null), Yn(null);
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
              var [b, ...y] = p;
              b.apply(a, [t, ...y]);
            } else
              p.call(a, t);
        } catch (I) {
          f ? m.push(I) : f = I;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        a = v;
      }
      if (f) {
        for (let I of m)
          queueMicrotask(() => {
            throw I;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, fn(d), Yn(h);
    }
  }
}
function nc(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Bi(t, e) {
  var n = (
    /** @type {Effect} */
    ke
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function le(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = nc(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ ki(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Nu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ki(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Bi(c, u);
    } else
      Bi(s, s);
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
        /* @__PURE__ */ ki(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ ki(c);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Bi(u, u), u;
  };
}
// @__NO_SIDE_EFFECTS__
function hn(t, e) {
  return /* @__PURE__ */ Tf(t, e, "svg");
}
function Dt(t = "") {
  {
    var e = Or(t + "");
    return Bi(e, e), e;
  }
}
function ee() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Or();
  return t.append(e, n), Bi(e, n), t;
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
let ss = !0;
function cl(t) {
  ss = t;
}
function rt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Hf(t, e) {
  return Nf(t, e);
}
const gi = /* @__PURE__ */ new Map();
function Nf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0 }) {
  ff();
  var c = /* @__PURE__ */ new Set(), u = (h) => {
    for (var f = 0; f < h.length; f++) {
      var m = h[f];
      if (!c.has(m)) {
        c.add(m);
        var v = Pf(m);
        e.addEventListener(m, ha, { passive: v });
        var p = gi.get(m);
        p === void 0 ? (document.addEventListener(m, ha, { passive: v }), gi.set(m, 1)) : gi.set(m, p + 1);
      }
    }
  };
  u(Co(tc)), uo.add(u);
  var l = void 0, d = _f(() => {
    var h = n ?? e.appendChild(Or());
    return nf(
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
            it
          );
          m.c = a;
        }
        i && (r.$$events = i), ss = s, l = t(f, r) || {}, ss = !0, a && Ce();
      }
    ), () => {
      var v;
      for (var f of c) {
        e.removeEventListener(f, ha);
        var m = (
          /** @type {number} */
          gi.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, ha), gi.delete(f)) : gi.set(f, m);
      }
      uo.delete(u), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Uf.set(l, d), l;
}
let Uf = /* @__PURE__ */ new WeakMap();
function Ee(t, e, ...n) {
  var r = t, i = me, a;
  Rr(() => {
    i !== (i = e()) && (a && (Bt(a), a = null), a = jt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Lr);
}
function ot(t) {
  it === null && Oo(), Xi && it.l !== null ? kf(it).m.push(t) : Te(() => {
    const e = kn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Ln(t) {
  it === null && Oo(), ot(() => () => kn(t));
}
function kf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ne(t, e, n = !1) {
  var r = t, i = null, a = null, s = Mt, c = n ? Lr : 0, u = !1;
  const l = (m, v = !0) => {
    u = !0, f(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? i : a, v = s ? a : i;
    m && Cs(m), v && Ar(v, () => {
      s ? a = null : i = null;
    });
  }
  const f = (m, v) => {
    if (s !== (s = m)) {
      var p = Po(), b = r;
      if (p && (d = document.createDocumentFragment(), d.append(b = Or())), s ? i ?? (i = v && jt(() => v(b))) : a ?? (a = v && jt(() => v(b))), p) {
        var y = (
          /** @type {Batch} */
          nt
        ), E = s ? i : a, I = s ? a : i;
        E && y.skipped_effects.delete(E), I && y.skipped_effects.add(I), y.add_callback(h);
      } else
        h();
    }
  };
  Rr(() => {
    u = !1, e(l), u || f(null, null);
  }, c);
}
let $r = null;
function dl(t) {
  $r = t;
}
function Ai(t, e) {
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
    ), r.clear(), Gn(t, e[0].prev, e[a - 1].next);
  }
  zu(i, () => {
    for (var l = 0; l < a; l++) {
      var d = e[l];
      c || (r.delete(d.k), Gn(t, d.prev, d.next)), Bt(d.e, !c);
    }
  });
}
function Nn(t, e, n, r, i, a = null) {
  var s = t, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, u = (e & 4) !== 0;
  if (u) {
    var l = (
      /** @type {Element} */
      t
    );
    s = l.appendChild(Or());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Mo(() => {
    var y = n();
    return ys(y) ? y : y == null ? [] : Co(y);
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
    ), a !== null && (v.length === 0 ? d ? Cs(d) : d = jt(() => a(s)) : d !== null && Ar(d, () => {
      d = null;
    }));
  }
  Rr(() => {
    p ?? (p = /** @type {Effect} */
    ke), v = /** @type {V[]} */
    o(m);
    var y = v.length;
    if (!(h && y === 0)) {
      h = y === 0;
      var E, I, _, A;
      if (Po()) {
        var x = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          nt
        );
        for (I = 0; I < y; I += 1) {
          _ = v[I], A = r(_, I);
          var C = c.items.get(A) ?? f.get(A);
          C ? e & 3 && rc(C, _, I, e) : (E = ic(
            null,
            c,
            null,
            null,
            _,
            A,
            I,
            i,
            e,
            n,
            !0
          ), f.set(A, E)), x.add(A);
        }
        for (const [S, H] of c.items)
          x.has(S) || T.skipped_effects.add(H.e);
        T.add_callback(b);
      } else
        b();
      o(m);
    }
  });
}
function Ff(t, e, n, r, i, a, s, c, u) {
  var Q, D, L, B;
  var l = (s & 8) !== 0, d = (s & 3) !== 0, h = e.length, f = n.items, m = n.first, v = m, p, b = null, y, E = [], I = [], _, A, x, T;
  if (l)
    for (T = 0; T < h; T += 1)
      _ = e[T], A = c(_, T), x = f.get(A), x !== void 0 && ((Q = x.a) == null || Q.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(x));
  for (T = 0; T < h; T += 1) {
    if (_ = e[T], A = c(_, T), x = f.get(A), x === void 0) {
      var C = r.get(A);
      if (C !== void 0) {
        r.delete(A), f.set(A, C);
        var S = b ? b.next : v;
        Gn(n, b, C), Gn(n, C, S), Us(C, S, i), b = C;
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
          A,
          T,
          a,
          s,
          u
        );
      }
      f.set(A, b), E = [], I = [], v = b.next;
      continue;
    }
    if (d && rc(x, _, T, s), x.e.f & Un && (Cs(x.e), l && ((D = x.a) == null || D.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(x))), x !== v) {
      if (p !== void 0 && p.has(x)) {
        if (E.length < I.length) {
          var X = I[0], R;
          b = X.prev;
          var P = E[0], re = E[E.length - 1];
          for (R = 0; R < E.length; R += 1)
            Us(E[R], X, i);
          for (R = 0; R < I.length; R += 1)
            p.delete(I[R]);
          Gn(n, P.prev, re.next), Gn(n, b, P), Gn(n, re, X), v = X, b = re, T -= 1, E = [], I = [];
        } else
          p.delete(x), Us(x, v, i), Gn(n, x.prev, x.next), Gn(n, x, b === null ? n.first : b.next), Gn(n, b, x), b = x;
        continue;
      }
      for (E = [], I = []; v !== null && v.k !== A; )
        v.e.f & Un || (p ?? (p = /* @__PURE__ */ new Set())).add(v), I.push(v), v = v.next;
      if (v === null)
        continue;
      x = v;
    }
    E.push(x), b = x, v = x.next;
  }
  if (v !== null || p !== void 0) {
    for (var N = p === void 0 ? [] : Co(p); v !== null; )
      v.e.f & Un || N.push(v), v = v.next;
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
  l && ur(() => {
    var Ie;
    if (y !== void 0)
      for (x of y)
        (Ie = x.a) == null || Ie.apply();
  }), t.first = n.first && n.first.e, t.last = b && b.e;
  for (var j of r.values())
    Bt(j.e);
  r.clear();
}
function rc(t, e, n, r) {
  r & 1 && Ui(t.v, e), r & 2 ? Ui(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function ic(t, e, n, r, i, a, s, c, u, l, d) {
  var h = $r, f = (u & 1) !== 0, m = (u & 16) === 0, v = f ? m ? /* @__PURE__ */ Du(i, !1, !1) : ni(i) : i, p = u & 2 ? ni(s) : s, b = {
    i: p,
    v,
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
      var y = document.createDocumentFragment();
      y.append(t = Or());
    }
    return b.e = jt(() => c(
      /** @type {Node} */
      t,
      v,
      p,
      l
    ), Wd), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? d || (e.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
    $r = h;
  }
}
function Us(t, e, n) {
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
      /* @__PURE__ */ Oa(a)
    );
    i.before(a), a = s;
  }
}
function Gn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function ci(t, e, n) {
  var r = t, i, a, s = null, c = null;
  function u() {
    a && (Ar(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = c, c = null;
  }
  Rr(() => {
    if (i !== (i = e())) {
      var l = Po();
      if (i) {
        var d = r;
        l && (s = document.createDocumentFragment(), s.append(d = Or()), a && nt.skipped_effects.add(a)), c = jt(() => n(d, i));
      }
      l ? nt.add_callback(u) : u();
    }
  }, Lr);
}
function fl(t, e, n, r, i, a) {
  var s, c, u = null, l = (
    /** @type {TemplateNode} */
    t
  ), d, h = $r;
  Rr(() => {
    const f = e() || null;
    var m = f === "svg" ? Cd : null;
    if (f !== s) {
      var v = $r;
      dl(h), d && (f === null ? Ar(d, () => {
        d = null, c = null;
      }) : f === c ? Cs(d) : (Bt(d), cl(!1))), f && f !== c && (d = jt(() => {
        if (u = m ? document.createElementNS(m, f) : document.createElement(f), Bi(u, u), r) {
          var p = (
            /** @type {TemplateNode} */
            u.appendChild(Or())
          );
          r(u, p);
        }
        ke.nodes_end = u, l.before(u);
      })), s = f, s && (c = s), cl(!0), dl(v);
    }
  }, Lr);
}
function He(t, e, n) {
  li(() => {
    var r = kn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ra(() => {
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
  Rr(() => {
    n !== (n = e()) && (r && (Bt(r), r = null), n && (r = jt(() => {
      li(() => (
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
function ks(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function qf(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, c = !1, u = [];
      r && u.push(...Object.keys(r).map(ks)), i && u.push(...Object.keys(i).map(ks));
      var l = 0, d = -1;
      const p = t.length;
      for (var h = 0; h < p; h++) {
        var f = t[h];
        if (c ? f === "/" && t[h - 1] === "*" && (c = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? c = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !c && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === p - 1) {
            if (d !== -1) {
              var m = ks(t.substring(l, d).trim());
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
function Bs(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function Ft(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = qf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Bs(t, n == null ? void 0 : n[0], r[0]), Bs(t, n == null ? void 0 : n[1], r[1], "important")) : Bs(t, n, r));
  return r;
}
function co(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ys(e))
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
  }), xs(() => {
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
function Sr(t, e, n, r) {
  var i = ko(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Dd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && uc(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Xf(t, e, n, r, i = !1, a = !1) {
  var s = ko(t), c = s[oc], u = !s[lc], l = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = sc(n.class) : n[ia] && (n.class = null), n[aa] && (n.style ?? (n.style = null));
  var f = uc(t);
  for (const I in n) {
    let _ = n[I];
    if (d && I === "value" && _ == null) {
      t.value = t.__value = "", l[I] = _;
      continue;
    }
    if (I === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Uo(t, m, _, r, e == null ? void 0 : e[ia], n[ia]), l[I] = _, l[ia] = n[ia];
      continue;
    }
    if (I === "style") {
      Ft(t, _, e == null ? void 0 : e[aa], n[aa]), l[I] = _, l[aa] = n[aa];
      continue;
    }
    var v = l[I];
    if (!(_ === v && !(_ === void 0 && t.hasAttribute(I)))) {
      l[I] = _;
      var p = I[0] + I[1];
      if (p !== "$$")
        if (p === "on") {
          const A = {}, x = "$$" + I;
          let T = I.slice(2);
          var b = Of(T);
          if (wf(T) && (T = T.slice(0, -7), A.capture = !0), !b && v) {
            if (_ != null) continue;
            t.removeEventListener(T, l[x], A), l[x] = null;
          }
          if (_ != null)
            if (b)
              t[`__${T}`] = _, wn([T]);
            else {
              let C = function(S) {
                l[I].call(this, S);
              };
              l[x] = No(T, t, C, A);
            }
          else b && (t[`__${T}`] = void 0);
        } else if (I === "style")
          Sr(t, I, _);
        else if (I === "autofocus")
          vf(
            /** @type {HTMLElement} */
            t,
            !!_
          );
        else if (!c && (I === "__value" || I === "value" && _ != null))
          t.value = t.__value = _;
        else if (I === "selected" && d)
          Wf(
            /** @type {HTMLOptionElement} */
            t,
            _
          );
        else {
          var y = I;
          u || (y = Mf(y));
          var E = y === "defaultValue" || y === "defaultChecked";
          if (_ == null && !c && !E)
            if (s[I] = null, y === "value" || y === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                t
              );
              const x = e === void 0;
              if (y === "value") {
                let T = A.defaultValue;
                A.removeAttribute(y), A.defaultValue = T, A.value = A.__value = x ? T : null;
              } else {
                let T = A.defaultChecked;
                A.removeAttribute(y), A.defaultChecked = T, A.checked = x ? T : !1;
              }
            } else
              t.removeAttribute(I);
          else E || f.includes(y) && (c || typeof _ != "string") ? (t[y] = _, y in s && (s[y] = Mt)) : typeof _ != "function" && Sr(t, y, _);
        }
    }
  }
  return l;
}
function qe(t, e, n = [], r = [], i, a = !1, s = !1) {
  Ou(n, r, (c) => {
    var u = void 0, l = {}, d = t.nodeName === "SELECT", h = !1;
    if (Rr(() => {
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
        m[b] || Bt(l[b]);
      for (let b of Object.getOwnPropertySymbols(m)) {
        var p = m[b];
        b.description === Td && (!u || p !== u[b]) && (l[b] && Bt(l[b]), l[b] = jt(() => Vf(t, () => p))), v[b] = p;
      }
      u = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      li(() => {
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
const Kf = () => performance.now(), or = {
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
  const t = or.now();
  or.tasks.forEach((e) => {
    e.c(t) || (or.tasks.delete(e), e.f());
  }), or.tasks.size !== 0 && or.tick(cc);
}
function Zf(t) {
  let e;
  return or.tasks.size === 0 && or.tick(cc), {
    promise: new Promise((n) => {
      or.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      or.tasks.delete(e);
    }
  };
}
function Ba(t, e) {
  Ki(() => {
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
    $r
  ), i, a, s, c = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const u = e()(this.element, { from: i, to: a }, n == null ? void 0 : n());
        s = ls(this.element, u, void 0, 1, () => {
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
function os(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, c = (t & 4) !== 0, u = s ? "both" : i ? "in" : "out", l, d = e.inert, h = e.style.overflow, f, m;
  function v() {
    return Ki(() => l ?? (l = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: u
    })));
  }
  var p = {
    is_global: c,
    in() {
      var I;
      if (e.inert = d, !i) {
        m == null || m.abort(), (I = m == null ? void 0 : m.reset) == null || I.call(m);
        return;
      }
      a || f == null || f.abort(), Ba(e, "introstart"), f = ls(e, v(), m, 1, () => {
        Ba(e, "introend"), f == null || f.abort(), f = l = void 0, e.style.overflow = h;
      });
    },
    out(I) {
      if (!a) {
        I == null || I(), l = void 0;
        return;
      }
      e.inert = !0, Ba(e, "outrostart"), m = ls(e, v(), f, 0, () => {
        Ba(e, "outroend"), I == null || I();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, b = (
    /** @type {Effect} */
    ke
  );
  if ((b.transitions ?? (b.transitions = [])).push(p), i && ss) {
    var y = c;
    if (!y) {
      for (var E = (
        /** @type {Effect | null} */
        b.parent
      ); E && E.f & Lr; )
        for (; (E = E.parent) && !(E.f & Tr); )
          ;
      y = !E || (E.f & Es) !== 0;
    }
    y && li(() => {
      kn(() => p.in());
    });
  }
}
function ls(t, e, n, r, i) {
  var a = r === 1;
  if (Ii(e)) {
    var s, c = !1;
    return ur(() => {
      if (!c) {
        var b = e({ direction: a ? "in" : "out" });
        s = ls(t, b, n, r, i);
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
    ), I = [];
    if (E > 0) {
      var _ = !1;
      if (l)
        for (var A = Math.ceil(E / 16.666666666666668), x = 0; x <= A; x += 1) {
          var T = b + y * h(x / A), C = bl(l(T, 1 - T));
          I.push(C), _ || (_ = C.overflow === "hidden");
        }
      _ && (t.style.overflow = "hidden"), v = () => {
        var S = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return b + y * h(S / E);
      }, d && Zf(() => {
        if (p.playState !== "running") return !1;
        var S = v();
        return d(S, 1 - S), !0;
      });
    }
    p = t.animate(I, { duration: E, fill: "forwards" }), p.onfinish = () => {
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
function _a(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Bu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Fs(t) ? Vs(a) : a, n(a), nt !== null && r.add(nt), await Ju(), a !== (a = e())) {
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
  kn(e) == null && t.value && (n(Fs(t) ? Vs(t.value) : t.value), nt !== null && r.add(nt)), Ra(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Za ?? nt
      );
      if (r.has(a))
        return;
    }
    Fs(t) && i === Vs(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function $f(t, e, n = e) {
  Bu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  kn(e) == null && n(t.checked), Ra(() => {
    var r = e();
    t.checked = !!r;
  });
}
function Fs(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Vs(t) {
  return t === "" ? null : +t;
}
function _l(t, e) {
  return t === e || (t == null ? void 0 : t[Xn]) === e;
}
function Se(t = {}, e, n, r) {
  return li(() => {
    var i, a;
    return Ra(() => {
      i = a, a = (r == null ? void 0 : r()) || [], kn(() => {
        t !== n(...a) && (e(t, ...a), i && _l(n(...i), t) && e(null, ...i));
      });
    }), () => {
      ur(() => {
        a && _l(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function eh(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    it
  ), n = e.l.u;
  if (!n) return;
  let r = () => ec(e.s);
  if (t) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ La(() => {
      let c = !1;
      const u = e.s;
      for (const l in u)
        u[l] !== a[l] && (a[l] = u[l], c = !0);
      return c && i++, i;
    });
    r = () => o(s);
  }
  n.b.length && bf(() => {
    yl(e, r), rs(n.b);
  }), Te(() => {
    const i = kn(() => n.m.map(Rd));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), n.a.length && Te(() => {
    yl(e, r), rs(n.a);
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
  const r = kn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const bi = [];
function th(t, e) {
  return {
    subscribe: en(t, e).subscribe
  };
}
function en(t, e = me) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(c) {
    if (Ro(t, c) && (t = c, n)) {
      const u = !bi.length;
      for (const l of r)
        l[1](), bi.push(l, t);
      if (u) {
        for (let l = 0; l < bi.length; l += 2)
          bi[l][0](bi[l + 1]);
        bi.length = 0;
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
function Zi(t, e, n) {
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
      rs(m), h(), u = !1;
    };
  });
}
function nh(t) {
  let e;
  return Bo(t, (n) => e = n)(), e;
}
let Fa = !1, fo = Symbol();
function Kn(t, e, n) {
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
function ri(t, e) {
  return t.set(e), e;
}
function dr() {
  const t = {};
  function e() {
    xs(() => {
      for (var n in t)
        t[n].unsubscribe();
      ns(t, fo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function rh(t) {
  var e = Fa;
  try {
    return Fa = !1, [t(), Fa];
  } finally {
    Fa = e;
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
function Ke(t, e, n) {
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
      if (Ii(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      Ii(i) && (i = i());
      const a = Ir(i, e);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Ii(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Ir(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === Xn || e === yu) return !1;
    for (let n of t.props)
      if (Ii(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Ii(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function st(...t) {
  return new Proxy({ props: t }, ah);
}
function g(t, e, n, r) {
  var I;
  var i = !Xi || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, c = (
    /** @type {V} */
    r
  ), u = !0, l = () => (u && (u = !1, c = s ? kn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), c), d;
  if (a) {
    var h = Xn in t || yu in t;
    d = ((I = Ir(t, e)) == null ? void 0 : I.set) ?? (h && e in t ? (_) => t[e] = _ : void 0);
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
      function(_, A) {
        return arguments.length > 0 ? ((!i || !A || p || m) && d(A ? v() : _), _) : v();
      }
    );
  }
  var b = !1, y = (n & 1 ? La : Mo)(() => (b = !1, v()));
  a && o(y);
  var E = (
    /** @type {Effect} */
    ke
  );
  return (
    /** @type {() => V} */
    function(_, A) {
      if (arguments.length > 0) {
        const x = A ? o(y) : i && a ? _e(_) : _;
        return z(y, x), b = !0, c !== void 0 && (c = x), _;
      }
      return ui && b || E.f & oi ? y.v : o(y);
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
function ya(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Fi(vh(t), t, e) : t;
}
function mh(t, e, n) {
  return t.concat(e).map(function(r) {
    return ya(r, n);
  });
}
function ph(t, e) {
  if (!e.customMerge)
    return Fi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Fi;
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
    r[i] = ya(t[i], n);
  }), Il(e).forEach(function(i) {
    bh(t, i) || (dc(t, i) && n.isMergeableObject(e[i]) ? r[i] = ph(i, n)(t[i], e[i], n) : r[i] = ya(e[i], n));
  }), r;
}
function Fi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || mh, n.isMergeableObject = n.isMergeableObject || lh, n.cloneUnlessOtherwiseSpecified = ya;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : _h(t, e, n) : ya(e, n);
}
Fi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Fi(r, i, n);
  }, {});
};
var yh = Fi, Ih = yh;
const Eh = /* @__PURE__ */ oh(Ih);
var ho = function(t, e) {
  return ho = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ho(t, e);
};
function $e(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ho(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var de = function() {
  return de = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, de.apply(this, arguments);
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
function Cr(t, e) {
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
function Ti(t) {
  return this instanceof Ti ? (this.v = t, this) : new Ti(t);
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
    m.value instanceof Ti ? Promise.resolve(m.value.v).then(d, h) : f(a[0][2], m);
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
  return e ? e.call(t) : (t = typeof Pt == "function" ? Pt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Gs(t, e) {
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
}, js = {
  variadic: Lh
}, je;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(je || (je = {}));
var ft;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ft || (ft = {}));
var Vi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Vi || (Vi = {}));
function El(t) {
  return t.type === ft.literal;
}
function Dh(t) {
  return t.type === ft.argument;
}
function mc(t) {
  return t.type === ft.number;
}
function pc(t) {
  return t.type === ft.date;
}
function gc(t) {
  return t.type === ft.time;
}
function bc(t) {
  return t.type === ft.select;
}
function _c(t) {
  return t.type === ft.plural;
}
function Ph(t) {
  return t.type === ft.pound;
}
function yc(t) {
  return t.type === ft.tag;
}
function Ic(t) {
  return !!(t && typeof t == "object" && t.type === Vi.number);
}
function vo(t) {
  return !!(t && typeof t == "object" && t.type === Vi.dateTime);
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
        e = de(de(de({}, e), { notation: "scientific" }), i.options.reduce(function(u, l) {
          return de(de({}, u), xl(l));
        }, {}));
        continue;
      case "engineering":
        e = de(de(de({}, e), { notation: "engineering" }), i.options.reduce(function(u, l) {
          return de(de({}, u), xl(l));
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
      a === "w" ? e = de(de({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = de(de({}, e), Sl(a)));
      continue;
    }
    if (Ac.test(i.stem)) {
      e = de(de({}, e), Sl(i.stem));
      continue;
    }
    var s = xc(i.stem);
    s && (e = de(de({}, e), s));
    var c = Vh(i.stem);
    c && (e = de(de({}, e), c));
  }
  return e;
}
var Va = {
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
  var i = Va[r || ""] || Va[n || ""] || Va["".concat(n, "-001")] || Va["001"];
  return i[0];
}
var qs, zh = new RegExp("^".concat(Ec.source, "*")), Wh = new RegExp("".concat(Ec.source, "*$"));
function We(t, e) {
  return { start: t, end: e };
}
var Xh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Kh = !!String.fromCodePoint, Zh = !!Object.fromEntries, Yh = !!String.prototype.codePointAt, Qh = !!String.prototype.trimStart, Jh = !!String.prototype.trimEnd, $h = !!Number.isSafeInteger, ev = $h ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, mo = !0;
try {
  var tv = Tc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  mo = ((qs = tv.exec("a")) === null || qs === void 0 ? void 0 : qs[0]) === "a";
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
              type: ft.pound,
              location: We(c, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(je.UNMATCHED_CLOSING_TAG, We(this.clonePosition(), this.clonePosition()));
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
            type: ft.literal,
            value: "<".concat(i, "/>"),
            location: We(r, this.clonePosition())
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
            return this.error(je.INVALID_TAG, We(c, this.clonePosition()));
          var u = this.clonePosition(), l = this.parseTagName();
          return i !== l ? this.error(je.UNMATCHED_CLOSING_TAG, We(u, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ft.tag,
              value: i,
              children: s,
              location: We(r, this.clonePosition())
            },
            err: null
          } : this.error(je.INVALID_TAG, We(c, this.clonePosition())));
        } else
          return this.error(je.UNCLOSED_TAG, We(r, this.clonePosition()));
      } else
        return this.error(je.INVALID_TAG, We(r, this.clonePosition()));
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
      var u = We(r, this.clonePosition());
      return {
        val: { type: ft.literal, value: i, location: u },
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
        return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, We(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(je.EMPTY_ARGUMENT, We(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(je.MALFORMED_ARGUMENT, We(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, We(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ft.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: We(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, We(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(je.MALFORMED_ARGUMENT, We(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = go(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = We(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), c = this.parseIdentifierIfPossible().value, u = this.clonePosition();
      switch (c) {
        case "":
          return this.error(je.EXPECT_ARGUMENT_TYPE, We(s, u));
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
              return this.error(je.EXPECT_ARGUMENT_STYLE, We(this.clonePosition(), this.clonePosition()));
            var m = We(d, this.clonePosition());
            l = { style: f, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var p = We(i, this.clonePosition());
          if (l && Cl(l == null ? void 0 : l.style, "::", 0)) {
            var b = nv(l.style.slice(2));
            if (c === "number") {
              var h = this.parseNumberSkeletonFromString(b, l.styleLocation);
              return h.err ? h : {
                val: { type: ft.number, value: r, location: p, style: h.val },
                err: null
              };
            } else {
              if (b.length === 0)
                return this.error(je.EXPECT_DATE_TIME_SKELETON, p);
              var y = b;
              this.locale && (y = jh(b, this.locale));
              var f = {
                type: Vi.dateTime,
                pattern: y,
                location: l.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Nh(y) : {}
              }, E = c === "date" ? ft.date : ft.time;
              return {
                val: { type: E, value: r, location: p, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: c === "number" ? ft.number : c === "date" ? ft.date : ft.time,
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
          var I = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(je.EXPECT_SELECT_ARGUMENT_OPTIONS, We(I, de({}, I)));
          this.bumpSpace();
          var _ = this.parseIdentifierIfPossible(), A = 0;
          if (c !== "select" && _.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, We(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(je.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, je.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), _ = this.parseIdentifierIfPossible(), A = h.val;
          }
          var x = this.tryParsePluralOrSelectOptions(e, c, n, _);
          if (x.err)
            return x;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var T = We(i, this.clonePosition());
          return c === "select" ? {
            val: {
              type: ft.select,
              value: r,
              options: Tl(x.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ft.plural,
              value: r,
              options: Tl(x.val),
              offset: A,
              pluralType: c === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(je.INVALID_ARGUMENT_TYPE, We(s, u));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(je.EXPECT_ARGUMENT_CLOSING_BRACE, We(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(je.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, We(i, this.clonePosition()));
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
          type: Vi.number,
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
            d = We(h, this.clonePosition()), l = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (u.has(l))
          return this.error(n === "select" ? je.DUPLICATE_SELECT_ARGUMENT_SELECTOR : je.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        l === "other" && (s = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? je.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : je.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, We(this.clonePosition(), this.clonePosition()));
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
            location: We(m, this.clonePosition())
          }
        ]), u.add(l), this.bumpSpace(), a = this.parseIdentifierIfPossible(), l = a.value, d = a.location;
      }
      return c.length === 0 ? this.error(n === "select" ? je.EXPECT_SELECT_ARGUMENT_SELECTOR : je.EXPECT_PLURAL_ARGUMENT_SELECTOR, We(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(je.MISSING_OTHER_CLAUSE, We(this.clonePosition(), this.clonePosition())) : { val: c, err: null };
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
      var u = We(i, this.clonePosition());
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
  e === void 0 && (e = {}), e = de({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new iv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(je[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || _o(n.val), n.val;
}
var Gi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Gi || (Gi = {}));
var ws = (
  /** @class */
  function(t) {
    $e(e, t);
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
    $e(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Gi.INVALID_VALUE, a) || this;
    }
    return e;
  }(ws)
), uv = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Gi.INVALID_VALUE, i) || this;
    }
    return e;
  }(ws)
), cv = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Gi.MISSING_VALUE, r) || this;
    }
    return e;
  }(ws)
), Kt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Kt || (Kt = {}));
function dv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Kt.literal || n.type !== Kt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function fv(t) {
  return typeof t == "function";
}
function $a(t, e, n, r, i, a, s) {
  if (t.length === 1 && El(t[0]))
    return [
      {
        type: Kt.literal,
        value: t[0].value
      }
    ];
  for (var c = [], u = 0, l = t; u < l.length; u++) {
    var d = l[u];
    if (El(d)) {
      c.push({
        type: Kt.literal,
        value: d.value
      });
      continue;
    }
    if (Ph(d)) {
      typeof a == "number" && c.push({
        type: Kt.literal,
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
        type: typeof f == "string" ? Kt.literal : Kt.object,
        value: f
      });
      continue;
    }
    if (pc(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : vo(d.style) ? d.style.parsedOptions : void 0;
      c.push({
        type: Kt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (gc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : vo(d.style) ? d.style.parsedOptions : r.time.medium;
      c.push({
        type: Kt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (mc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : Ic(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), c.push({
        type: Kt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (yc(d)) {
      var v = d.children, p = d.value, b = i[p];
      if (!fv(b))
        throw new uv(p, "function", s);
      var y = $a(v, e, n, r, i, a), E = b(y.map(function(A) {
        return A.value;
      }));
      Array.isArray(E) || (E = [E]), c.push.apply(c, E.map(function(A) {
        return {
          type: typeof A == "string" ? Kt.literal : Kt.object,
          value: A
        };
      }));
    }
    if (bc(d)) {
      var I = d.options[f] || d.options.other;
      if (!I)
        throw new Ll(d.value, f, Object.keys(d.options), s);
      c.push.apply(c, $a(I.value, e, n, r, i));
      continue;
    }
    if (_c(d)) {
      var I = d.options["=".concat(f)];
      if (!I) {
        if (!Intl.PluralRules)
          throw new ws(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Gi.MISSING_INTL_API, s);
        var _ = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        I = d.options[_] || d.options.other;
      }
      if (!I)
        throw new Ll(d.value, f, Object.keys(d.options), s);
      c.push.apply(c, $a(I.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return dv(c);
}
function hv(t, e) {
  return e ? de(de(de({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = de(de({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function vv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = hv(t[r], e[r]), n;
  }, de({}, t)) : t;
}
function zs(t) {
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
    getNumberFormat: Gs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Zn([void 0], n, !1)))();
    }, {
      cache: zs(t.number),
      strategy: js.variadic
    }),
    getDateTimeFormat: Gs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Zn([void 0], n, !1)))();
    }, {
      cache: zs(t.dateTime),
      strategy: js.variadic
    }),
    getPluralRules: Gs(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Zn([void 0], n, !1)))();
    }, {
      cache: zs(t.pluralRules),
      strategy: js.variadic
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
          return !h.length || f.type !== Kt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(u) {
        return $a(a.ast, a.locales, a.formatters, a.formats, u, void 0, a.message);
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
        this.ast = t.__parse(e, de(de({}, c), { locale: this.resolvedLocale }));
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
const yr = {}, gv = (t, e, n) => n && (e in yr || (yr[e] = {}), t in yr[e] || (yr[e][t] = n), n), Oc = (t, e) => {
  if (e == null)
    return;
  if (e in yr && t in yr[e])
    return yr[e][t];
  const n = Da(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = _v(i, t);
    if (a)
      return gv(t, e, a);
  }
};
let Vo;
const Ma = en({});
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
  const e = Da(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (Rc(r))
      return r;
  }
}
function Mc(t, ...e) {
  delete yr[t], Ma.update((n) => (n[t] = Eh.all([n[t] || {}, ...e]), n));
}
Zi(
  [Ma],
  ([t]) => Object.keys(t)
);
Ma.subscribe((t) => Vo = t);
const es = {};
function Iv(t, e) {
  es[t].delete(e), es[t].size === 0 && delete es[t];
}
function Dc(t) {
  return es[t];
}
function Ev(t) {
  return Da(t).map((e) => {
    const n = Dc(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function us(t) {
  return t == null ? !1 : Da(t).some(
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
  if (!us(t))
    return t in sa ? sa[t] : Promise.resolve();
  const e = Ev(t);
  return sa[t] = Promise.all(
    e.map(
      ([n, r]) => Av(n, r)
    )
  ).then(() => {
    if (us(t))
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
    `[svelte-i18n] The message "${e}" was not found in "${Da(
      t
    ).join('", "')}".${us(Mr()) ? `

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
}, va = Lv;
function ji() {
  return va;
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
  )), Object.assign(va, r, { initialLocale: i }), n && ("number" in n && Object.assign(va.formats.number, n.number), "date" in n && Object.assign(va.formats.date, n.date), "time" in n && Object.assign(va.formats.time, n.time)), di.set(i);
}
const Ws = en(!1);
var Rv = Object.defineProperty, Mv = Object.defineProperties, Dv = Object.getOwnPropertyDescriptors, Rl = Object.getOwnPropertySymbols, Pv = Object.prototype.hasOwnProperty, Hv = Object.prototype.propertyIsEnumerable, Ml = (t, e, n) => e in t ? Rv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Nv = (t, e) => {
  for (var n in e || (e = {}))
    Pv.call(e, n) && Ml(t, n, e[n]);
  if (Rl)
    for (var n of Rl(e))
      Hv.call(e, n) && Ml(t, n, e[n]);
  return t;
}, Uv = (t, e) => Mv(t, Dv(e));
let yo;
const cs = en(null);
function Dl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Da(t, e = ji().fallbackLocale) {
  const n = Dl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Dl(e)])] : n;
}
function Mr() {
  return yo ?? void 0;
}
cs.subscribe((t) => {
  yo = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const kv = (t) => {
  if (t && yv(t) && us(t)) {
    const { loadingDelay: e } = ji();
    let n;
    return typeof window < "u" && Mr() != null && e ? n = window.setTimeout(
      () => Ws.set(!0),
      e
    ) : Ws.set(!0), Pc(t).then(() => {
      cs.set(t);
    }).finally(() => {
      clearTimeout(n), Ws.set(!1);
    });
  }
  return cs.set(t);
}, di = Uv(Nv({}, cs), {
  set: kv
}), Bv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], Ls = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Fv = Object.defineProperty, ds = Object.getOwnPropertySymbols, Hc = Object.prototype.hasOwnProperty, Nc = Object.prototype.propertyIsEnumerable, Pl = (t, e, n) => e in t ? Fv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Go = (t, e) => {
  for (var n in e || (e = {}))
    Hc.call(e, n) && Pl(t, n, e[n]);
  if (ds)
    for (var n of ds(e))
      Nc.call(e, n) && Pl(t, n, e[n]);
  return t;
}, Yi = (t, e) => {
  var n = {};
  for (var r in t)
    Hc.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && ds)
    for (var r of ds(t))
      e.indexOf(r) < 0 && Nc.call(t, r) && (n[r] = t[r]);
  return n;
};
const Ia = (t, e) => {
  const { formats: n } = ji();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Vv = Ls(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Yi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ia("number", r)), new Intl.NumberFormat(n, i);
  }
), Gv = Ls(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Yi(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ia("date", r) : Object.keys(i).length === 0 && (i = Ia("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), jv = Ls(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Yi(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ia("time", r) : Object.keys(i).length === 0 && (i = Ia("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), qv = (t = {}) => {
  var e = t, {
    locale: n = Mr()
  } = e, r = Yi(e, [
    "locale"
  ]);
  return Vv(Go({ locale: n }, r));
}, zv = (t = {}) => {
  var e = t, {
    locale: n = Mr()
  } = e, r = Yi(e, [
    "locale"
  ]);
  return Gv(Go({ locale: n }, r));
}, Wv = (t = {}) => {
  var e = t, {
    locale: n = Mr()
  } = e, r = Yi(e, [
    "locale"
  ]);
  return jv(Go({ locale: n }, r));
}, Xv = Ls(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Mr()) => new Lc(t, e, ji().formats, {
    ignoreTag: ji().ignoreTag
  })
), Kv = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: c,
    locale: u = Mr(),
    default: l
  } = s;
  if (u == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = Oc(t, u);
  if (!d)
    d = (a = (i = (r = (n = ji()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: u, id: t, defaultValue: l })) != null ? i : l) != null ? a : t;
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
}, Zv = (t, e) => Wv(e).format(t), Yv = (t, e) => zv(e).format(t), Qv = (t, e) => qv(e).format(t), Jv = (t, e = Mr()) => Oc(t, e), $v = Zi([di, Ma], () => Kv);
Zi([di], () => Zv);
Zi([di], () => Yv);
Zi([di], () => Qv);
Zi([di, Ma], () => Jv);
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
    console.log("Updating the language to", s.detail.language), di.set(s.detail.language);
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
function Fe(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function Qe(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function qi(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function mt(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class Qi {
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
var Ga;
function hm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Ga;
  if (typeof Ga == "boolean" && !e)
    return Ga;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (Ga = r), r;
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
var Wt = (
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
const Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
], ja = [], Im = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
          for (var a = Pt(Nl), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = Pt(Ul), s = a.next(); !s.done; s = a.next()) {
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
        for (var i = Pt(Nl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Pt(Ul), a = i.next(); !a.done; a = i.next()) {
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
            var c = n !== void 0 && ja.length > 0 && ja.some(function(u) {
              return r.adapter.containsEventTarget(u);
            });
            if (c) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (ja.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ja = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
        var i = de({}, r);
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
  }(Wt)
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
var vn = {
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
sn.set(vn.BACKSPACE, Pe.BACKSPACE);
sn.set(vn.ENTER, Pe.ENTER);
sn.set(vn.SPACEBAR, Pe.SPACEBAR);
sn.set(vn.PAGE_UP, Pe.PAGE_UP);
sn.set(vn.PAGE_DOWN, Pe.PAGE_DOWN);
sn.set(vn.END, Pe.END);
sn.set(vn.HOME, Pe.HOME);
sn.set(vn.ARROW_LEFT, Pe.ARROW_LEFT);
sn.set(vn.ARROW_UP, Pe.ARROW_UP);
sn.set(vn.ARROW_RIGHT, Pe.ARROW_RIGHT);
sn.set(vn.ARROW_DOWN, Pe.ARROW_DOWN);
sn.set(vn.DELETE, Pe.DELETE);
sn.set(vn.ESCAPE, Pe.ESCAPE);
sn.set(vn.TAB, Pe.TAB);
var Dr = /* @__PURE__ */ new Set();
Dr.add(Pe.PAGE_UP);
Dr.add(Pe.PAGE_DOWN);
Dr.add(Pe.END);
Dr.add(Pe.HOME);
Dr.add(Pe.ARROW_LEFT);
Dr.add(Pe.ARROW_UP);
Dr.add(Pe.ARROW_RIGHT);
Dr.add(Pe.ARROW_DOWN);
function xt(t) {
  var e = t.key;
  if (an.has(e))
    return e;
  var n = sn.get(t.keyCode);
  return n || Pe.UNKNOWN;
}
const { applyPassive: kl } = Uc, { matches: Em } = Os;
function Yt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: c, eventTarget: u, activeTarget: l, addClass: d = (v) => t.classList.add(v), removeClass: h = (v) => t.classList.remove(v), addStyle: f = (v, p) => t.style.setProperty(v, p), initPromise: m = Promise.resolve() } = {}) {
  let v, p = new Qi(), b = fe("SMUI:addLayoutListener"), y, E = s, I = u, _ = l;
  function A() {
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
        const S = kl();
        p.on(document.documentElement, T, C, typeof S == "boolean" ? { capture: S } : S);
      },
      registerInteractionHandler: (T, C) => {
        const S = kl();
        p.on(u || t, T, C, typeof S == "boolean" ? { capture: S } : S);
      },
      registerResizeHandler: (T) => p.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), m.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && m.then(() => {
      v && (v.destroy(), v = void 0, p.clear());
    }), v && (I !== u || _ !== l) && (I = u, _ = l, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  A(), b && (y = b(x));
  function x() {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, S) => t.style.setProperty(C, S), initPromise: Promise.resolve() }, T)), A();
    },
    destroy() {
      v && (v.destroy(), v = void 0, p.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), y && y();
    }
  };
}
function Io(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "on", 3, !1), a = g(e, "component", 3, Ji), s = g(e, "tag", 3, "i"), c = /* @__PURE__ */ Ke(e, [
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
  const l = /* @__PURE__ */ be(() => s() === "svg" || a() === xm), d = fe("SMUI:icon:context");
  function h() {
    return u.getElement();
  }
  var f = { getElement: h }, m = ee(), v = W(m);
  {
    let p = /* @__PURE__ */ be(() => Fe({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    ci(v, a, (b, y) => {
      Se(
        y(b, st(
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
            children: (E, I) => {
              var _ = ee(), A = W(_);
              Ee(A, () => e.children ?? me), w(E, _);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => u = E,
        () => u
      );
    });
  }
  return w(t, m), Ce(f);
}
var Am = /* @__PURE__ */ hn("<svg><!></svg>");
function Ji(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "tag", 3, "div"), i = /* @__PURE__ */ Ke(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  function c() {
    return s;
  }
  var u = { getElement: c }, l = ee(), d = W(l);
  {
    var h = (m) => {
      var v = Am();
      qe(v, () => ({ ...i }));
      var p = oe(v);
      Ee(p, () => e.children ?? me), Se(v, (b) => s = b, () => s), He(v, (b, y) => q == null ? void 0 : q(b, y), n), w(m, v);
    }, f = (m) => {
      var v = ee(), p = W(v);
      {
        var b = (E) => {
          var I = ee(), _ = W(I);
          fl(_, r, !1, (A, x) => {
            Se(A, (T) => s = T, () => s), He(A, (T, C) => q == null ? void 0 : q(T, C), n), qe(A, () => ({ ...i }));
          }), w(E, I);
        }, y = (E) => {
          var I = ee(), _ = W(I);
          fl(_, r, !1, (A, x) => {
            Se(A, (S) => s = S, () => s), He(A, (S, H) => q == null ? void 0 : q(S, H), n), qe(A, () => ({ ...i }));
            var T = ee(), C = W(T);
            Ee(C, () => e.children ?? me), w(x, T);
          }), w(E, I);
        };
        ne(
          p,
          (E) => {
            o(a) ? E(b) : E(y, !1);
          },
          !0
        );
      }
      w(m, v);
    };
    ne(d, (m) => {
      r() === "svg" ? m(h) : m(f, !1);
    });
  }
  return w(t, l), Ce(u);
}
var Sm = /* @__PURE__ */ hn("<svg><!></svg>");
function xm(t, e) {
  xe(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ Ke(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, c = Sm();
  qe(c, () => ({ ...r }));
  var u = oe(c);
  return Ee(u, () => e.children ?? me), Se(c, (l) => i = l, () => i), He(c, (l, d) => q == null ? void 0 : q(l, d), n), w(t, c), Ce(s);
}
function qa(t, e) {
  xe(e, !0);
  const [n, r] = dr(), i = en(e.value);
  ae(e.key, i), Te(() => {
    ri(i, e.value);
  }), Ln(() => {
    i.set(void 0);
  });
  var a = ee(), s = W(a);
  Ee(s, () => e.children ?? me), w(t, a), Ce(), r();
}
var Cm = /* @__PURE__ */ le('<div class="mdc-button__touch"></div>'), Tm = /* @__PURE__ */ le('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Bc(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "ripple", 3, !0), s = g(e, "color", 3, "primary"), c = g(e, "variant", 3, "text"), u = g(e, "touch", 3, !1), l = g(e, "action", 3, "close"), d = g(e, "defaultAction", 3, !1), h = g(e, "secondary", 3, !1), f = g(e, "component", 3, Ji), m = g(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ Ke(e, [
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
  ]), p, b = _e({}), y = _e({}), E = fe("SMUI:button:context");
  const I = /* @__PURE__ */ be(() => E === "dialog:action" && l() != null ? { "data-mdc-dialog-action": l() } : { action: l() }), _ = /* @__PURE__ */ be(() => E === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), A = /* @__PURE__ */ be(() => E === "banner" ? {} : { secondary: h() });
  let x = e.disabled;
  Te(() => {
    if (x !== e.disabled) {
      if (p) {
        const N = X();
        "blur" in N && N.blur();
      }
      x = v.disabled;
    }
  }), ae("SMUI:label:context", "button"), ae("SMUI:icon:context", "button");
  function T(N) {
    b[N] || (b[N] = !0);
  }
  function C(N) {
    (!(N in b) || b[N]) && (b[N] = !1);
  }
  function S(N, k) {
    y[N] != k && (k === "" || k == null ? delete y[N] : y[N] = k);
  }
  function H() {
    E === "banner" && Qe(X(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function X() {
    return p.getElement();
  }
  var R = { getElement: X }, P = ee(), re = W(P);
  {
    let N = /* @__PURE__ */ be(() => [
      [
        Yt,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: C,
          addStyle: S
        }
      ],
      ...n()
    ]), k = /* @__PURE__ */ be(() => Fe({
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
    })), U = /* @__PURE__ */ be(() => Object.entries(y).map(([j, Q]) => `${j}: ${Q};`).concat([i()]).join(" "));
    ci(re, f, (j, Q) => {
      Se(
        Q(j, st(
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
          () => o(I),
          () => o(_),
          () => o(A),
          {
            get href() {
              return e.href;
            }
          },
          () => v,
          {
            onclick: (D) => {
              var L;
              H(), (L = e.onclick) == null || L.call(e, D);
            },
            children: (D, L) => {
              var B = Tm(), Ie = ye(W(B), 2);
              Ee(Ie, () => e.children ?? me);
              var pe = ye(Ie);
              {
                var ce = (Ae) => {
                  var V = Cm();
                  w(Ae, V);
                };
                ne(pe, (Ae) => {
                  u() && Ae(ce);
                });
              }
              w(D, B);
            },
            $$slots: { default: !0 }
          }
        )),
        (D) => p = D,
        () => p
      );
    });
  }
  return w(t, P), Ce(R);
}
function wm(t, e) {
  xe(e, !0);
  let n = g(e, "callback", 3, () => {
  }), r = g(e, "disabled", 3, !1), i = g(e, "variant", 3, "default"), a = g(e, "isAbortAction", 3, !1), s = g(e, "backgroundColor", 3, void 0);
  {
    let c = /* @__PURE__ */ be(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
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
        var d = ee(), h = W(d);
        Ee(h, () => e.children ?? me), w(u, d);
      },
      $$slots: { default: !0 }
    });
  }
  Ce();
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
var za = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, nr = {
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
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return za;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return nr;
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
      var n = this.adapter.getAttr(nr.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(nr.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(nr.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(nr.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(za.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(za.ICON_BUTTON_ON) : this.adapter.removeClass(za.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(nr.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(nr.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(nr.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(nr.ARIA_PRESSED, "" + n);
    }, e;
  }(Wt)
), Om = /* @__PURE__ */ le('<div class="mdc-icon-button__touch"></div>'), Rm = /* @__PURE__ */ le('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Mm(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(L) {
    return L === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), c = g(e, "ripple", 3, !0), u = g(e, "toggle", 3, !1), l = g(e, "pressed", 15, n), d = g(e, "touch", 3, !1), h = g(e, "displayFlex", 3, !0), f = g(e, "size", 3, "normal"), m = g(e, "component", 3, Ji), v = g(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ Ke(e, [
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
  ]), b, y, E = /* @__PURE__ */ ge(_e({})), I = _e({}), _ = /* @__PURE__ */ ge(_e({})), A = fe("SMUI:icon-button:context"), x = fe("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ be(() => {
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
  let C = !!e.disabled;
  Te(() => {
    if (C != !!e.disabled) {
      if (b) {
        const L = U();
        "blur" in L && L.blur();
      }
      C = !!e.disabled;
    }
  }), ae("SMUI:icon:context", "icon-button");
  let S = null;
  Te(() => {
    b && U() && u() !== S && (u() && !y ? (y = new Lm({
      addClass: X,
      hasClass: H,
      notifyChange: (L) => {
        k(L), Qe(U(), "SMUIIconButtonToggleChange", L);
      },
      removeClass: R,
      getAttr: re,
      setAttr: N
    }), y.init()) : !u() && y && (y.destroy(), y = void 0, z(E, {}, !0), z(_, {}, !0)), S = u());
  }), Te(() => {
    y && !r(l()) && y.isOn() !== l() && y.toggle(l());
  }), Ln(() => {
    y && y.destroy();
  });
  function H(L) {
    return L in o(E) ? o(E)[L] : U().classList.contains(L);
  }
  function X(L) {
    o(E)[L] || (o(E)[L] = !0);
  }
  function R(L) {
    (!(L in o(E)) || o(E)[L]) && (o(E)[L] = !1);
  }
  function P(L, B) {
    I[L] != B && (B === "" || B == null ? delete I[L] : I[L] = B);
  }
  function re(L) {
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
  var j = { getElement: U }, Q = ee(), D = W(Q);
  {
    let L = /* @__PURE__ */ be(() => [
      [
        Yt,
        {
          ripple: c(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: X,
          removeClass: R,
          addStyle: P
        }
      ],
      ...i()
    ]), B = /* @__PURE__ */ be(() => Fe({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(l()) && l(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": h(),
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
      ...o(E),
      [a()]: !0
    })), Ie = /* @__PURE__ */ be(() => Object.entries(I).map(([Ae, V]) => `${Ae}: ${V};`).concat([s()]).join(" ")), pe = /* @__PURE__ */ be(() => r(l()) ? null : l() ? "true" : "false"), ce = /* @__PURE__ */ be(() => l() ? e.ariaLabelOn : e.ariaLabelOff);
    ci(D, m, (Ae, V) => {
      Se(
        V(Ae, st(
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
              return o(Ie);
            },
            get "aria-pressed"() {
              return o(pe);
            },
            get "aria-label"() {
              return o(ce);
            },
            get "data-aria-label-on"() {
              return e.ariaLabelOn;
            },
            get "data-aria-label-off"() {
              return e.ariaLabelOff;
            },
            get "aria-describedby"() {
              return x;
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
              var K;
              y && y.handleClick(), A === "top-app-bar:navigation" && Qe(U(), "SMUITopAppBarIconButtonNav"), (K = e.onclick) == null || K.call(e, J);
            },
            children: (J, K) => {
              var he = Rm(), we = ye(W(he), 2);
              Ee(we, () => e.children ?? me);
              var Z = ye(we);
              {
                var te = (Ne) => {
                  var Oe = Om();
                  w(Ne, Oe);
                };
                ne(Z, (Ne) => {
                  d() && Ne(te);
                });
              }
              w(J, he);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => b = J,
        () => b
      );
    });
  }
  return w(t, Q), Ce(j);
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
          var l = Dt();
          Le(() => rt(l, r())), w(c, l);
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
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
  }(Wt)
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
var Nm = (
  /** @class */
  function(t) {
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
  }(Wt)
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
    $e(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
  }(Wt)
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
var Xs = {
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
    $e(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
        return Xs;
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
        for (var s = Pt(Vl), c = s.next(); !c.done; c = s.next()) {
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
        for (var l = Pt(Gl), d = l.next(); !d.done; d = l.next()) {
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
        for (var s = Pt(Vl), c = s.next(); !c.done; c = s.next()) {
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
        for (var l = Pt(Gl), d = l.next(); !d.done; d = l.next()) {
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
        a && s ? this.adapter.setInputAttr(Xs.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Xs.ARIA_DESCRIBEDBY);
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
  }(Wt)
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
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
        for (var i = Pt(ql), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Pt(ql), a = i.next(); !a.done; a = i.next()) {
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
  }(Wt)
), Wm = /* @__PURE__ */ le("<span><!></span>"), Xm = /* @__PURE__ */ le("<label><!></label>");
function fs(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "floatAbove", 15, !1), s = g(e, "required", 15, !1), c = g(e, "wrapped", 3, !1), u = /* @__PURE__ */ Ke(e, [
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
  ]), l, d = /* @__PURE__ */ ge(void 0), h = new Qi(), f = _e({}), m = _e({}), v = fe("SMUI:generic:input:props") ?? {}, p = a();
  Te(() => {
    o(d) && p !== a() && (p = a(), o(d).float(a()));
  });
  let b = s();
  Te(() => {
    o(d) && b !== s() && (b = s(), o(d).setRequired(s()));
  });
  const y = fe("SMUI:floating-label:mount"), E = fe("SMUI:floating-label:unmount");
  ot(() => {
    z(
      d,
      new Hm({
        addClass: I,
        removeClass: _,
        getWidth: () => {
          var L, B;
          const j = X(), Q = j.cloneNode(!0);
          (L = j.parentNode) == null || L.appendChild(Q), Q.classList.add("smui-floating-label--remove-transition"), Q.classList.add("smui-floating-label--force-size"), Q.classList.remove("mdc-floating-label--float-above");
          const D = Q.scrollWidth;
          return (B = j.parentNode) == null || B.removeChild(Q), D;
        },
        registerInteractionHandler: (j, Q) => h.on(X(), j, Q),
        deregisterInteractionHandler: (j, Q) => h.off(X(), j, Q)
      }),
      !0
    );
    const U = {
      get element() {
        return X();
      },
      addStyle: A,
      removeStyle: x
    };
    return y && y(U), o(d).init(), () => {
      var j;
      E && E(U), (j = o(d)) == null || j.destroy(), h.clear();
    };
  });
  function I(U) {
    f[U] || (f[U] = !0);
  }
  function _(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function A(U, j) {
    m[U] != j && (j === "" || j == null ? delete m[U] : m[U] = j);
  }
  function x(U) {
    U in m && delete m[U];
  }
  function T(U) {
    var j;
    (j = o(d)) == null || j.shake(U);
  }
  function C(U) {
    a(U);
  }
  function S(U) {
    s(U);
  }
  function H() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function X() {
    return l;
  }
  var R = { shake: T, float: C, setRequired: S, getWidth: H, getElement: X }, P = ee(), re = W(P);
  {
    var N = (U) => {
      var j = Wm();
      qe(j, (D, L) => ({ class: D, style: L, ...u }), [
        () => Fe({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([D, L]) => `${D}: ${L};`).concat([i()]).join(" ")
      ]);
      var Q = oe(j);
      Ee(Q, () => e.children ?? me), Se(j, (D) => l = D, () => l), He(j, (D, L) => q == null ? void 0 : q(D, L), n), w(U, j);
    }, k = (U) => {
      var j = Xm();
      qe(
        j,
        (D, L) => ({
          class: D,
          style: L,
          for: e.for || (v ? v.id : void 0),
          ...u
        }),
        [
          () => Fe({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([D, L]) => `${D}: ${L};`).concat([i()]).join(" ")
        ]
      );
      var Q = oe(j);
      Ee(Q, () => e.children ?? me), Se(j, (D) => l = D, () => l), He(j, (D, L) => q == null ? void 0 : q(D, L), n), w(U, j);
    };
    ne(re, (U) => {
      c() ? U(N) : U(k, !1);
    });
  }
  return w(t, P), Ce(R);
}
var Km = /* @__PURE__ */ le("<div></div>");
function Fc(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "active", 3, !1), s = /* @__PURE__ */ Ke(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), c, u = /* @__PURE__ */ ge(void 0), l = new Qi(), d = _e({}), h = _e({});
  ot(() => (z(
    u,
    new Nm({
      addClass: m,
      removeClass: v,
      hasClass: f,
      setStyle: p,
      registerEventHandler: (x, T) => l.on(I(), x, T),
      deregisterEventHandler: (x, T) => l.off(I(), x, T)
    }),
    !0
  ), o(u).init(), () => {
    var x;
    (x = o(u)) == null || x.destroy(), l.clear();
  }));
  function f(x) {
    return x in d ? d[x] : I().classList.contains(x);
  }
  function m(x) {
    d[x] || (d[x] = !0);
  }
  function v(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function p(x, T) {
    h[x] != T && (T === "" || T == null ? delete h[x] : h[x] = T);
  }
  function b() {
    var x;
    (x = o(u)) == null || x.activate();
  }
  function y() {
    var x;
    (x = o(u)) == null || x.deactivate();
  }
  function E(x) {
    var T;
    (T = o(u)) == null || T.setRippleCenter(x);
  }
  function I() {
    return c;
  }
  var _ = { activate: b, deactivate: y, setRippleCenter: E, getElement: I }, A = Km();
  return qe(A, (x, T) => ({ class: x, style: T, ...s }), [
    () => Fe({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([x, T]) => `${x}: ${T};`).concat([i()]).join(" ")
  ]), Se(A, (x) => c = x, () => c), He(A, (x, T) => q == null ? void 0 : q(x, T), n), w(t, A), Ce(_);
}
var Zm = /* @__PURE__ */ le('<div class="mdc-notched-outline__notch"><!></div>'), Ym = /* @__PURE__ */ le('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Vc(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "notched", 3, !1), a = g(e, "noLabel", 3, !1), s = /* @__PURE__ */ Ke(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), c, u = /* @__PURE__ */ ge(void 0), l = /* @__PURE__ */ ge(void 0), d = _e({}), h = _e({}), f;
  Te(() => {
    o(l) !== f && (o(l) ? (o(l).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(l) && o(l).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = o(l));
  }), ae("SMUI:floating-label:mount", (C) => {
    z(l, C, !0);
  }), ae("SMUI:floating-label:unmount", () => {
    z(l, void 0);
  }), ot(() => (z(
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
  function p(C, S) {
    h[C] != S && (S === "" || S == null ? delete h[C] : h[C] = S);
  }
  function b(C) {
    C in h && delete h[C];
  }
  function y(C) {
    var S;
    (S = o(u)) == null || S.notch(C);
  }
  function E() {
    var C;
    (C = o(u)) == null || C.closeNotch();
  }
  function I() {
    return c;
  }
  var _ = { notch: y, closeNotch: E, getElement: I }, A = Ym();
  qe(A, (C) => ({ class: C, ...s }), [
    () => Fe({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var x = ye(oe(A), 2);
  {
    var T = (C) => {
      var S = Zm(), H = oe(S);
      Ee(H, () => e.children ?? me), Le((X) => Ft(S, X), [
        () => Object.entries(h).map(([X, R]) => `${X}: ${R};`).join(" ")
      ]), w(C, S);
    };
    ne(x, (C) => {
      a() || C(T);
    });
  }
  return Se(A, (C) => c = C, () => c), He(A, (C, S) => q == null ? void 0 : q(C, S), n), w(t, A), Ce(_);
}
function jo(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "component", 3, Ji), a = g(e, "tag", 3, "div"), s = g(e, "_smuiClass", 3, ""), c = g(e, "_smuiClassMap", 23, () => ({})), u = g(e, "_smuiContexts", 19, () => ({})), l = g(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ke(e, [
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
    const I = fe(E);
    I && "subscribe" in I && f.push(I.subscribe((_) => {
      c()[y] = _;
    }));
  });
  for (let y in u())
    u().hasOwnProperty(y) && ae(y, u()[y]);
  Ln(() => {
    for (const y of f)
      y();
  });
  function m() {
    return h.getElement();
  }
  var v = { getElement: m }, p = ee(), b = W(p);
  {
    let y = /* @__PURE__ */ be(() => Fe({
      [s()]: !0,
      ...c(),
      [r()]: !0
    }));
    ci(b, i, (E, I) => {
      Se(
        I(E, st(
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
            children: (_, A) => {
              var x = ee(), T = W(x);
              Ee(T, () => e.children ?? me), w(_, x);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => h = _,
        () => h
      );
    });
  }
  return w(t, p), Ce(v);
}
function Qm(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ke(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    jo(t, st({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, c) => {
        var u = ee(), l = W(u);
        Ee(l, () => e.children ?? me), w(s, u);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ce(a);
}
function Jm(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ke(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    jo(t, st(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, c) => {
          var u = ee(), l = W(u);
          Ee(l, () => e.children ?? me), w(s, u);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ce(a);
}
function $m(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ Ke(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    jo(t, st(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, c) => {
          var u = ee(), l = W(u);
          Ee(l, () => e.children ?? me), w(s, u);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ce(a);
}
var ep = /* @__PURE__ */ le("<input/>");
function tp(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "type", 3, "text"), a = g(e, "placeholder", 3, " "), s = g(e, "value", 15), c = g(e, "files", 15, null), u = g(e, "dirty", 15, !1), l = g(e, "invalid", 15, !1), d = g(e, "updateInvalid", 3, !0), h = g(e, "initialInvalid", 3, !1), f = g(e, "emptyValueNull", 19, () => s() === null), m = g(e, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ Ke(e, [
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
  Te(() => {
    i() === "file" ? delete y.value : y.value = s() == null ? "" : s();
  }), ot(() => {
    d() && h() && l(H().matches(":invalid"));
  });
  function E(N) {
    return N === "" ? Number.NaN : +N;
  }
  function I(N) {
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
    (i() === "file" || i() === "range") && I(N), u(!0), d() && l(H().matches(":invalid"));
  }
  function A(N) {
    return N in b ? b[N] ?? null : H().getAttribute(N);
  }
  function x(N, k) {
    b[N] !== k && (b[N] = k);
  }
  function T(N) {
    (!(N in b) || b[N] != null) && (b[N] = void 0);
  }
  function C() {
    H().focus();
  }
  function S() {
    H().blur();
  }
  function H() {
    return p;
  }
  var X = { getAttr: A, addAttr: x, removeAttr: T, focus: C, blur: S, getElement: H }, R = ep(), P = (N) => {
    var k;
    i() !== "file" && I(N), (k = e.oninput) == null || k.call(e, N);
  }, re = (N) => {
    var k;
    _(N), (k = e.onchange) == null || k.call(e, N);
  };
  return qe(
    R,
    (N) => ({
      class: N,
      type: i(),
      placeholder: a(),
      ...y,
      ...b,
      ...v,
      oninput: P,
      onchange: re
    }),
    [
      () => Fe({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Se(R, (N) => p = N, () => p), He(R, (N, k) => q == null ? void 0 : q(N, k), n), w(t, R), Ce(X);
}
var np = /* @__PURE__ */ le("<textarea></textarea>");
function rp(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "value", 15, ""), s = g(e, "dirty", 15, !1), c = g(e, "invalid", 15, !1), u = g(e, "updateInvalid", 3, !0), l = g(e, "initialInvalid", 3, !1), d = g(e, "resizable", 3, !0), h = /* @__PURE__ */ Ke(e, [
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
  ot(() => {
    u() && l() && c(_().matches(":invalid"));
  });
  function v() {
    s(!0), u() && c(_().matches(":invalid"));
  }
  function p(C) {
    return C in m ? m[C] ?? null : _().getAttribute(C);
  }
  function b(C, S) {
    m[C] !== S && (m[C] = S);
  }
  function y(C) {
    (!(C in m) || m[C] != null) && (m[C] = void 0);
  }
  function E() {
    _().focus();
  }
  function I() {
    _().blur();
  }
  function _() {
    return f;
  }
  var A = { getAttr: p, addAttr: b, removeAttr: y, focus: E, blur: I, getElement: _ }, x = np(), T = (C) => {
    var S;
    v(), (S = e.onchange) == null || S.call(e, C);
  };
  return qe(
    x,
    (C) => ({
      class: C,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...m,
      ...h,
      onchange: T
    }),
    [
      () => Fe({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Se(x, (C) => f = C, () => f), He(x, (C, S) => q == null ? void 0 : q(C, S), n), li(() => _a(x, a)), w(t, x), Ce(A);
}
var ip = /* @__PURE__ */ le('<span class="mdc-text-field__ripple"></span>'), ap = /* @__PURE__ */ le("<!> <!>", 1), sp = /* @__PURE__ */ le("<span><!> <!></span>"), op = /* @__PURE__ */ le("<!> <!> <!>", 1), lp = /* @__PURE__ */ le("<label><!> <!> <!> <!> <!> <!> <!></label>"), up = /* @__PURE__ */ le("<div><!> <!> <!> <!> <!></div>"), cp = /* @__PURE__ */ le("<!> <!>", 1);
function Eo(t, e) {
  xe(e, !0);
  const { applyPassive: n } = Uc;
  let r = () => {
  };
  function i(G) {
    return G === r;
  }
  let a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "style", 3, ""), u = g(e, "ripple", 3, !0), l = g(e, "disabled", 3, !1), d = g(e, "required", 3, !1), h = g(e, "textarea", 3, !1), f = g(e, "variant", 19, () => h() ? "outlined" : "standard"), m = g(e, "noLabel", 3, !1), v = g(e, "type", 3, "text"), p = g(e, "value", 15), b = g(e, "files", 15, r), y = g(e, "invalid", 15, r), E = g(e, "updateInvalid", 19, () => i(y())), I = g(e, "initialInvalid", 3, !1), _ = g(e, "dirty", 15, !1), A = g(e, "validateOnValueChange", 19, E), x = g(e, "useNativeValidation", 19, E), T = g(e, "withLeadingIcon", 3, r), C = g(e, "withTrailingIcon", 3, r), S = g(e, "input", 7), H = g(e, "floatingLabel", 7), X = g(e, "lineRipple", 7), R = g(e, "notchedOutline", 7), P = /* @__PURE__ */ Ke(e, [
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
  const re = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !i(b());
  i(b()) && b(null), i(y()) && y(!1);
  let N, k = /* @__PURE__ */ ge(void 0), U = new Qi(), j = _e({}), Q = _e({}), D = /* @__PURE__ */ ge(void 0), L = /* @__PURE__ */ ge(!1), B = /* @__PURE__ */ ge(_e(I())), Ie = fe("SMUI:addLayoutListener"), pe, ce, Ae = new Promise((G) => ce = G), V, J, K, he;
  const we = /* @__PURE__ */ be(() => S() && S().getElement());
  Te(() => {
    (_() || o(B) || !E()) && o(k) && o(k).isValid() !== !y() && (E() ? y(!o(k).isValid()) : o(k).setValid(!y()));
  }), Te(() => {
    o(k) && o(k).getValidateOnValueChange() !== A() && o(k).setValidateOnValueChange(i(A()) ? !1 : A());
  }), Te(() => {
    o(k) && o(k).setUseNativeValidation(i(x()) ? !0 : x());
  }), Te(() => {
    o(k) && o(k).setDisabled(l());
  });
  let Z = p();
  Te(() => {
    if (o(k) && re && Z !== p()) {
      Z = p();
      const G = `${p() == null ? "" : p()}`;
      o(k).getValue() !== G && o(k).setValue(G);
    }
  }), Ie && (pe = Ie(M)), ae("SMUI:textfield:leading-icon:mount", (G) => {
    V = G;
  }), ae("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), ae("SMUI:textfield:trailing-icon:mount", (G) => {
    J = G;
  }), ae("SMUI:textfield:trailing-icon:unmount", () => {
    J = void 0;
  }), ae("SMUI:textfield:helper-text:id", (G) => {
    z(D, G, !0);
  }), ae("SMUI:textfield:helper-text:mount", (G) => {
    K = G;
  }), ae("SMUI:textfield:helper-text:unmount", () => {
    z(D, void 0), K = void 0;
  }), ae("SMUI:textfield:character-counter:mount", (G) => {
    he = G;
  }), ae("SMUI:textfield:character-counter:unmount", () => {
    he = void 0;
  }), ot(() => {
    var G;
    if (z(
      k,
      new jm(
        {
          // getRootAdapterMethods_
          addClass: Ne,
          removeClass: Oe,
          hasClass: te,
          registerTextFieldInteractionHandler: (Y, Me) => U.on(F(), Y, Me),
          deregisterTextFieldInteractionHandler: (Y, Me) => U.off(F(), Y, Me),
          registerValidationAttributeChangeHandler: (Y) => {
            const Me = (ht) => ht.map((Ht) => Ht.attributeName).filter((Ht) => Ht), ut = new MutationObserver((ht) => {
              x() && Y(Me(ht));
            }), gt = { attributes: !0 };
            return S() && ut.observe(S().getElement(), gt), ut;
          },
          deregisterValidationAttributeChangeHandler: (Y) => {
            Y.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Y;
            return ((Y = S()) == null ? void 0 : Y.getElement()) ?? null;
          },
          setInputAttr: (Y, Me) => {
            var ut;
            (ut = S()) == null || ut.addAttr(Y, Me);
          },
          removeInputAttr: (Y) => {
            var Me;
            (Me = S()) == null || Me.removeAttr(Y);
          },
          isFocused: () => {
            var Y;
            return document.activeElement === ((Y = S()) == null ? void 0 : Y.getElement());
          },
          registerInputInteractionHandler: (Y, Me) => {
            var gt;
            const ut = (gt = S()) == null ? void 0 : gt.getElement();
            if (ut) {
              const ht = n();
              U.on(ut, Y, Me, typeof ht == "boolean" ? { capture: ht } : ht);
            }
          },
          deregisterInputInteractionHandler: (Y, Me) => {
            var gt;
            const ut = (gt = S()) == null ? void 0 : gt.getElement();
            ut && U.off(ut, Y, Me);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => H() && H().float(Y),
          getLabelWidth: () => H() ? H().getWidth() : 0,
          hasLabel: () => !!H(),
          shakeLabel: (Y) => H() && H().shake(Y),
          setLabelRequired: (Y) => H() && H().setRequired(Y),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => X() && X().activate(),
          deactivateLineRipple: () => X() && X().deactivate(),
          setLineRippleTransformOrigin: (Y) => X() && X().setRippleCenter(Y),
          // getOutlineAdapterMethods_
          closeOutline: () => R() && R().closeNotch(),
          hasOutline: () => !!R(),
          notchOutline: (Y) => R() && R().notch(Y)
        },
        {
          get helperText() {
            return K;
          },
          get characterCounter() {
            return he;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return J;
          }
        }
      ),
      !0
    ), re) {
      if (S() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (G = o(k)) == null || G.init();
    } else
      Ju().then(() => {
        var Y;
        if (S() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = o(k)) == null || Y.init();
      });
    return ce(), () => {
      var Y;
      (Y = o(k)) == null || Y.destroy(), U.clear();
    };
  }), Ln(() => {
    pe && pe();
  });
  function te(G) {
    return G in j ? j[G] ?? null : F().classList.contains(G);
  }
  function Ne(G) {
    j[G] || (j[G] = !0);
  }
  function Oe(G) {
    (!(G in j) || j[G]) && (j[G] = !1);
  }
  function ze(G, Y) {
    Q[G] != Y && (Y === "" || Y == null ? delete Q[G] : Q[G] = Y);
  }
  function et() {
    var G;
    (G = S()) == null || G.focus();
  }
  function Be() {
    var G;
    (G = S()) == null || G.blur();
  }
  function M() {
    if (o(k)) {
      const G = o(k).shouldFloat;
      o(k).notchOutline(G);
    }
  }
  function F() {
    return N;
  }
  var se = { focus: et, blur: Be, layout: M, getElement: F }, Re = cp(), lt = W(Re);
  {
    var yt = (G) => {
      var Y = lp();
      qe(Y, (Ve, Xe, Ze) => ({ class: Ve, style: Xe, for: void 0, ...Ze }), [
        () => Fe({
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
          ...j,
          [s()]: !0
        }),
        () => Object.entries(Q).map(([Ve, Xe]) => `${Ve}: ${Xe};`).concat([c()]).join(" "),
        () => qi(P, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = oe(Y);
      {
        var ut = (Ve) => {
          var Xe = ap(), Ze = W(Xe);
          {
            var Ot = (at) => {
              var St = ip();
              w(at, St);
            };
            ne(Ze, (at) => {
              f() === "filled" && at(Ot);
            });
          }
          var mn = ye(Ze, 2);
          {
            var tt = (at) => {
              {
                let St = /* @__PURE__ */ be(() => o(L) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Ye = /* @__PURE__ */ be(() => mt(P, "label$"));
                Se(
                  fs(at, st(
                    {
                      get floatAbove() {
                        return o(St);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(Ye),
                    {
                      children: (Ct, Mn) => {
                        var Tt = ee(), bt = W(Tt);
                        {
                          var Rt = (Nt) => {
                          }, on = (Nt) => {
                            var ln = ee(), Xt = W(ln);
                            {
                              var Fn = (un) => {
                                var Vt = Dt();
                                Le(() => rt(Vt, e.label)), w(un, Vt);
                              }, Pr = (un) => {
                                var Vt = ee(), Vn = W(Vt);
                                Ee(Vn, () => e.label), w(un, Vt);
                              };
                              ne(
                                Xt,
                                (un) => {
                                  typeof e.label == "string" ? un(Fn) : un(Pr, !1);
                                },
                                !0
                              );
                            }
                            w(Nt, ln);
                          };
                          ne(bt, (Nt) => {
                            e.label == null ? Nt(Rt) : Nt(on, !1);
                          });
                        }
                        w(Ct, Tt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Ct) => H(Ct),
                  () => H()
                );
              }
            };
            ne(mn, (at) => {
              !m() && e.label != null && at(tt);
            });
          }
          w(Ve, Xe);
        };
        ne(Me, (Ve) => {
          !h() && f() !== "outlined" && Ve(ut);
        });
      }
      var gt = ye(Me, 2);
      {
        var ht = (Ve) => {
          {
            let Xe = /* @__PURE__ */ be(() => m() || e.label == null), Ze = /* @__PURE__ */ be(() => mt(P, "outline$"));
            Se(
              Vc(Ve, st(
                {
                  get noLabel() {
                    return o(Xe);
                  }
                },
                () => o(Ze),
                {
                  children: (Ot, mn) => {
                    var tt = ee(), at = W(tt);
                    {
                      var St = (Ye) => {
                        {
                          let Ct = /* @__PURE__ */ be(() => o(L) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Mn = /* @__PURE__ */ be(() => mt(P, "label$"));
                          Se(
                            fs(Ye, st(
                              {
                                get floatAbove() {
                                  return o(Ct);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(Mn),
                              {
                                children: (Tt, bt) => {
                                  var Rt = ee(), on = W(Rt);
                                  {
                                    var Nt = (Xt) => {
                                    }, ln = (Xt) => {
                                      var Fn = ee(), Pr = W(Fn);
                                      {
                                        var un = (Vn) => {
                                          var Hr = Dt();
                                          Le(() => rt(Hr, e.label)), w(Vn, Hr);
                                        }, Vt = (Vn) => {
                                          var Hr = ee(), Ds = W(Hr);
                                          Ee(Ds, () => e.label), w(Vn, Hr);
                                        };
                                        ne(
                                          Pr,
                                          (Vn) => {
                                            typeof e.label == "string" ? Vn(un) : Vn(Vt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      w(Xt, Fn);
                                    };
                                    ne(on, (Xt) => {
                                      e.label == null ? Xt(Nt) : Xt(ln, !1);
                                    });
                                  }
                                  w(Tt, Rt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Tt) => H(Tt),
                            () => H()
                          );
                        }
                      };
                      ne(at, (Ye) => {
                        !m() && e.label != null && Ye(St);
                      });
                    }
                    w(Ot, tt);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ot) => R(Ot),
              () => R()
            );
          }
        };
        ne(gt, (Ve) => {
          (h() || f() === "outlined") && Ve(ht);
        });
      }
      var Ht = ye(gt, 2);
      qa(Ht, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ve, Xe) => {
          var Ze = ee(), Ot = W(Ze);
          Ee(Ot, () => e.leadingIcon ?? me), w(Ve, Ze);
        },
        $$slots: { default: !0 }
      });
      var fr = ye(Ht, 2);
      Ee(fr, () => e.children ?? me);
      var dt = ye(fr, 2);
      {
        var Lt = (Ve) => {
          var Xe = sp(), Ze = oe(Xe);
          {
            let mn = /* @__PURE__ */ be(() => mt(P, "input$"));
            Se(
              rp(Ze, st(
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
                    return o(D);
                  },
                  get "aria-describedby"() {
                    return o(D);
                  }
                },
                () => o(mn),
                {
                  onblur: (tt) => {
                    var at;
                    z(L, !1), z(B, !0), Qe(F(), "blur", tt), (at = e.input$onblur) == null || at.call(e, tt);
                  },
                  onfocus: (tt) => {
                    var at;
                    z(L, !0), Qe(F(), "focus", tt), (at = e.input$onfocus) == null || at.call(e, tt);
                  },
                  get value() {
                    return p();
                  },
                  set value(tt) {
                    p(tt);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(tt) {
                    _(tt);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(tt) {
                    y(tt);
                  }
                }
              )),
              (tt) => S(tt),
              () => S()
            );
          }
          var Ot = ye(Ze, 2);
          Ee(Ot, () => e.internalCounter ?? me), Le((mn) => Uo(Xe, 1, mn), [
            () => sc(Fe({
              "mdc-text-field__resizer": !("input$resizable" in P) || e.input$resizable
            }))
          ]), w(Ve, Xe);
        }, It = (Ve) => {
          var Xe = op(), Ze = W(Xe);
          {
            var Ot = (St) => {
              var Ye = ee(), Ct = W(Ye);
              {
                var Mn = (bt) => {
                  Jm(bt, {
                    children: (Rt, on) => {
                      var Nt = Dt();
                      Le(() => rt(Nt, e.prefix)), w(Rt, Nt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Tt = (bt) => {
                  var Rt = ee(), on = W(Rt);
                  Ee(on, () => e.prefix ?? me), w(bt, Rt);
                };
                ne(Ct, (bt) => {
                  typeof e.prefix == "string" ? bt(Mn) : bt(Tt, !1);
                });
              }
              w(St, Ye);
            };
            ne(Ze, (St) => {
              e.prefix != null && St(Ot);
            });
          }
          var mn = ye(Ze, 2);
          {
            let St = /* @__PURE__ */ be(() => mt(P, "input$"));
            Se(
              tp(mn, st(
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
                    return o(D);
                  },
                  get "aria-describedby"() {
                    return o(D);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(St),
                {
                  onblur: (Ye) => {
                    var Ct;
                    z(L, !1), z(B, !0), Qe(F(), "blur", Ye), (Ct = e.input$onblur) == null || Ct.call(e, Ye);
                  },
                  onfocus: (Ye) => {
                    var Ct;
                    z(L, !0), Qe(F(), "focus", Ye), (Ct = e.input$onfocus) == null || Ct.call(e, Ye);
                  },
                  get value() {
                    return p();
                  },
                  set value(Ye) {
                    p(Ye);
                  },
                  get files() {
                    return b();
                  },
                  set files(Ye) {
                    b(Ye);
                  },
                  get dirty() {
                    return _();
                  },
                  set dirty(Ye) {
                    _(Ye);
                  },
                  get invalid() {
                    return y();
                  },
                  set invalid(Ye) {
                    y(Ye);
                  }
                }
              )),
              (Ye) => S(Ye),
              () => S()
            );
          }
          var tt = ye(mn, 2);
          {
            var at = (St) => {
              var Ye = ee(), Ct = W(Ye);
              {
                var Mn = (bt) => {
                  $m(bt, {
                    children: (Rt, on) => {
                      var Nt = Dt();
                      Le(() => rt(Nt, e.suffix)), w(Rt, Nt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Tt = (bt) => {
                  var Rt = ee(), on = W(Rt);
                  Ee(on, () => e.suffix ?? me), w(bt, Rt);
                };
                ne(Ct, (bt) => {
                  typeof e.suffix == "string" ? bt(Mn) : bt(Tt, !1);
                });
              }
              w(St, Ye);
            };
            ne(tt, (St) => {
              e.suffix != null && St(at);
            });
          }
          w(Ve, Xe);
        };
        ne(dt, (Ve) => {
          h() && typeof p() == "string" ? Ve(Lt) : Ve(It, !1);
        });
      }
      var Rn = ye(dt, 2);
      qa(Rn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ve, Xe) => {
          var Ze = ee(), Ot = W(Ze);
          Ee(Ot, () => e.trailingIcon ?? me), w(Ve, Ze);
        },
        $$slots: { default: !0 }
      });
      var hi = ye(Rn, 2);
      {
        var Bn = (Ve) => {
          {
            let Xe = /* @__PURE__ */ be(() => mt(P, "ripple$"));
            Se(Fc(Ve, st(() => o(Xe))), (Ze) => X(Ze), () => X());
          }
        };
        ne(hi, (Ve) => {
          !h() && f() !== "outlined" && u() && Ve(Bn);
        });
      }
      Se(Y, (Ve) => N = Ve, () => N), He(Y, (Ve, Xe) => Yt == null ? void 0 : Yt(Ve, Xe), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Ne,
        removeClass: Oe,
        addStyle: ze,
        eventTarget: o(we),
        activeTarget: o(we),
        initPromise: Ae
      })), He(Y, (Ve, Xe) => q == null ? void 0 : q(Ve, Xe), a), w(G, Y);
    }, pt = (G) => {
      var Y = up();
      qe(Y, (dt, Lt, It) => ({ class: dt, style: Lt, ...It }), [
        () => Fe({
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
          ...j,
          [s()]: !0
        }),
        () => Object.entries(Q).map(([dt, Lt]) => `${dt}: ${Lt};`).concat([c()]).join(" "),
        () => qi(P, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Me = oe(Y);
      {
        var ut = (dt) => {
          var Lt = ee(), It = W(Lt);
          Ee(It, () => e.label ?? me), w(dt, Lt);
        };
        ne(Me, (dt) => {
          typeof e.label != "string" && dt(ut);
        });
      }
      var gt = ye(Me, 2);
      qa(gt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (dt, Lt) => {
          var It = ee(), Rn = W(It);
          Ee(Rn, () => e.leadingIcon ?? me), w(dt, It);
        },
        $$slots: { default: !0 }
      });
      var ht = ye(gt, 2);
      Ee(ht, () => e.children ?? me);
      var Ht = ye(ht, 2);
      qa(Ht, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (dt, Lt) => {
          var It = ee(), Rn = W(It);
          Ee(Rn, () => e.trailingIcon ?? me), w(dt, It);
        },
        $$slots: { default: !0 }
      });
      var fr = ye(Ht, 2);
      Ee(fr, () => e.line ?? me), Se(Y, (dt) => N = dt, () => N), He(Y, (dt, Lt) => Yt == null ? void 0 : Yt(dt, Lt), () => ({
        ripple: u(),
        unbounded: !1,
        addClass: Ne,
        removeClass: Oe,
        addStyle: ze
      })), He(Y, (dt, Lt) => q == null ? void 0 : q(dt, Lt), a), w(G, Y);
    };
    ne(lt, (G) => {
      re ? G(yt) : G(pt, !1);
    });
  }
  var ie = ye(lt, 2);
  {
    var ve = (G) => {
      {
        let Y = /* @__PURE__ */ be(() => mt(P, "helperLine$"));
        Qm(G, st(() => o(Y), {
          children: (Me, ut) => {
            var gt = ee(), ht = W(gt);
            Ee(ht, () => e.helper ?? me), w(Me, gt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ne(ie, (G) => {
      e.helper && G(ve);
    });
  }
  return w(t, Re), Ce(se);
}
var dp = /* @__PURE__ */ le("<i><!></i>");
function fp(t, e) {
  xe(e, !0);
  const n = () => Kn(v, "$leadingStore", r), [r, i] = dr();
  let a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), u = g(e, "disabled", 3, !1), l = /* @__PURE__ */ Ke(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ ge(void 0), f = new Qi(), m = _e({});
  const v = fe("SMUI:textfield:icon:leading"), p = n();
  let b = /* @__PURE__ */ ge(void 0);
  const y = /* @__PURE__ */ be(() => ({ role: e.role, tabindex: c() })), E = fe("SMUI:textfield:leading-icon:mount"), I = fe("SMUI:textfield:leading-icon:unmount"), _ = fe("SMUI:textfield:trailing-icon:mount"), A = fe("SMUI:textfield:trailing-icon:unmount");
  ot(() => (z(
    h,
    new zm({
      getAttr: x,
      setAttr: T,
      removeAttr: C,
      setContent: (k) => {
        z(b, k, !0);
      },
      registerInteractionHandler: (k, U) => f.on(S(), k, U),
      deregisterInteractionHandler: (k, U) => f.off(S(), k, U),
      notifyIconAction: () => Qe(S(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? E && E(o(h)) : _ && _(o(h)), o(h).init(), () => {
    var k;
    o(h) && (p ? I && I(o(h)) : A && A(o(h))), (k = o(h)) == null || k.destroy(), f.clear();
  }));
  function x(k) {
    return k in m ? m[k] ?? null : S().getAttribute(k);
  }
  function T(k, U) {
    m[k] !== U && (m[k] = U);
  }
  function C(k) {
    (!(k in m) || m[k] != null) && (m[k] = void 0);
  }
  function S() {
    return d;
  }
  var H = { getElement: S }, X = dp();
  qe(
    X,
    (k) => ({
      class: k,
      "aria-hidden": c() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? u() ? "true" : "false" : void 0,
      ...o(y),
      ...m,
      ...l
    }),
    [
      () => Fe({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": p,
        "mdc-text-field__icon--trailing": !p,
        [s()]: !0
      })
    ]
  );
  var R = oe(X);
  {
    var P = (k) => {
      var U = ee(), j = W(U);
      Ee(j, () => e.children ?? me), w(k, U);
    }, re = (k) => {
      var U = Dt();
      Le(() => rt(U, o(b))), w(k, U);
    };
    ne(R, (k) => {
      o(b) == null ? k(P) : k(re, !1);
    });
  }
  Se(X, (k) => d = k, () => d), He(X, (k, U) => q == null ? void 0 : q(k, U), a), w(t, X);
  var N = Ce(H);
  return i(), N;
}
function hp(t, e) {
  xe(e, !0);
  let n = g(e, "placeholder", 3, ""), r = g(e, "label", 3, ""), i = g(e, "icon", 3, ""), a = g(e, "value", 15, ""), s = g(e, "variant", 3, "standard"), c = g(e, "styles", 3, ""), u = g(e, "required", 3, !1), l = g(e, "oninput", 3, () => {
  });
  var d = ee(), h = W(d);
  {
    var f = (v) => {
      {
        const p = (y) => {
          fp(y, {
            class: "material-icons",
            children: (E, I) => {
              var _ = Dt();
              Le(() => rt(_, i())), w(E, _);
            },
            $$slots: { default: !0 }
          });
        };
        let b = /* @__PURE__ */ be(() => `width: 100%; ${c()}`);
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
    ne(h, (v) => {
      i() ? v(f) : v(m, !1);
    });
  }
  w(t, d), Ce();
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
}, At;
(function(t) {
  t[t.BOTTOM = 1] = "BOTTOM", t[t.CENTER = 2] = "CENTER", t[t.RIGHT = 4] = "RIGHT", t[t.FLIP_RTL = 8] = "FLIP_RTL";
})(At || (At = {}));
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
var vr, rr, Ge = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
vr = {}, vr["" + Ge.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", vr["" + Ge.LIST_ITEM_CLASS] = "mdc-list-item", vr["" + Ge.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", vr["" + Ge.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", vr["" + Ge.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", vr["" + Ge.ROOT] = "mdc-list";
var _i = (rr = {}, rr["" + Ge.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", rr["" + Ge.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", rr["" + Ge.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", rr["" + Ge.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", rr["" + Ge.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", rr["" + Ge.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", rr["" + Ge.ROOT] = "mdc-deprecated-list", rr), mr = {
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
    .` + Ge.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ge.LIST_ITEM_CLASS + ` a,
    .` + _i[Ge.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _i[Ge.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ge.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ge.LIST_ITEM_CLASS + ` a,
    .` + Ge.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ge.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + _i[Ge.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + _i[Ge.LIST_ITEM_CLASS] + ` a,
    .` + _i[Ge.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + _i[Ge.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, Et = {
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
var pp = ["input", "button", "textarea", "select"], In = function(t) {
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
  }, Et.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
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
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, s = t.sortedIndexByFirstChar, c = t.isItemAtIndexDisabled, u = xt(n) === "ArrowLeft", l = xt(n) === "ArrowUp", d = xt(n) === "ArrowRight", h = xt(n) === "ArrowDown", f = xt(n) === "Home", m = xt(n) === "End", v = xt(n) === "Enter", p = xt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || u || l || d || h || f || m || v)
    return -1;
  var b = !p && n.key.length === 1;
  if (b) {
    In(n);
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
  r && In(n);
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
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = Et.UNSET_INDEX, r.focusedItemIndex = Et.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = gp(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ge;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Et;
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
      if (n !== Et.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(n, Ge.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = Et.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Ge.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, Ge.LIST_ITEM_ACTIVATED_CLASS);
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
      return this.adapter.listItemAtIndexHasClass(n, Ge.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, s, c = xt(n) === "ArrowLeft", u = xt(n) === "ArrowUp", l = xt(n) === "ArrowRight", d = xt(n) === "ArrowDown", h = xt(n) === "Home", f = xt(n) === "End", m = xt(n) === "Enter", v = xt(n) === "Spacebar", p = this.isVertical && d || !this.isVertical && l, b = this.isVertical && u || !this.isVertical && c, y = n.key === "A" || n.key === "a", E = Wl(n);
      if (this.adapter.isRootFocused()) {
        if ((b || f) && E([]))
          n.preventDefault(), this.focusLastElement();
        else if ((p || h) && E([]))
          n.preventDefault(), this.focusFirstElement();
        else if (b && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusLastElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (p && E(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var I = this.focusFirstElement();
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
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
      var A = this.adapter.getFocusedElementIndex();
      if (!(A === -1 && (A = i, A < 0))) {
        if (p && E([]))
          In(n), this.focusNextElement(A);
        else if (b && E([]))
          In(n), this.focusPrevElement(A);
        else if (p && E(["Shift"]) && this.isCheckboxList) {
          In(n);
          var I = this.focusNextElement(A);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (b && E(["Shift"]) && this.isCheckboxList) {
          In(n);
          var I = this.focusPrevElement(A);
          I !== -1 && this.setSelectedIndexOnAction(I, !1);
        } else if (h && E([]))
          In(n), this.focusFirstElement();
        else if (f && E([]))
          In(n), this.focusLastElement();
        else if (h && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (In(n), this.isIndexDisabled(A))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, A, A);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (In(n), this.isIndexDisabled(A))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(A, this.adapter.getListItemCount() - 1, A);
        } else if (y && E(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || v) && E([])) {
          if (r) {
            var x = n.target;
            if (x && x.tagName === "A" && m || (In(n), this.isIndexDisabled(A)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(A, !1), this.adapter.notifyAction(A));
          }
        } else if ((m || v) && E(["Shift"]) && this.isCheckboxList) {
          var x = n.target;
          if (x && x.tagName === "A" && m || (In(n), this.isIndexDisabled(A)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : A, A, A), this.adapter.notifyAction(A));
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
      n !== Et.UNSET_INDEX && (this.isIndexDisabled(n) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Ge.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Ge.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, mr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Ge.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ge.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== Et.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== Et.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === Et.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, mr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? mr.ARIA_CURRENT : mr.ARIA_SELECTED;
      if (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== Et.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? mr.ARIA_SELECTED : mr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === Et.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), c = [], u = 0; u < this.adapter.getListItemCount(); u++) {
        var l = a == null ? void 0 : a.has(u), d = n.indexOf(u) >= 0;
        d !== l && c.push(u), this.adapter.setCheckedCheckboxOrRadioAtIndex(u, d), this.adapter.setAttributeForElementIndex(u, s, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && c.length && this.adapter.notifySelectionChange(c);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), c = Cr([n, r].sort(), 2), u = c[0], l = c[1], d = this.getSelectionAttribute(), h = [], f = u; f <= l; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          s !== m && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Zn([], Cr(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === Et.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== Et.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== Et.UNSET_INDEX ? this.selectedIndex : Ip(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
        return this.isIndexInRange(n) || this.isSingleSelectionList && n === Et.UNSET_INDEX;
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
      var c = this.selectedIndex === Et.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
  }(Wt)
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
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ei.TOP_START, r.originCorner = ei.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
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
      this.originCorner = this.originCorner ^ At.RIGHT;
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, At.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, At.RIGHT) ? "right" : "left", c = this.getHorizontalOriginOffset(r), u = this.getVerticalOriginOffset(r), l = this.measurements, d = l.anchorSize, h = l.surfaceSize, f = (n = {}, n[s] = c, n[a] = u, n);
      d.width / h.width > oa.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, At.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, c = e.numbers.MARGIN_TO_EDGE, u = this.hasBit(this.anchorCorner, At.BOTTOM), l, d;
      u ? (l = i.top - c + this.anchorMargin.bottom, d = i.bottom - c - this.anchorMargin.bottom) : (l = i.top - c + this.anchorMargin.top, d = i.bottom - c + a.height - this.anchorMargin.top);
      var h = d - s.height > 0;
      !h && l > d + this.openBottomBias && (n = this.setBit(n, At.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, At.FLIP_RTL), v = this.hasBit(this.anchorCorner, At.RIGHT) || this.hasBit(n, At.RIGHT), p = !1;
      f && m ? p = !v : p = v;
      var b, y;
      p ? (b = i.left + a.width + this.anchorMargin.right, y = i.right - this.anchorMargin.right) : (b = i.left + this.anchorMargin.left, y = i.right + a.width - this.anchorMargin.left);
      var E = b - s.width > 0, I = y - s.width > 0, _ = this.hasBit(n, At.FLIP_RTL) && this.hasBit(n, At.RIGHT);
      return I && _ && f || !E && _ ? n = this.unsetBit(n, At.RIGHT) : (E && p && f || E && !p && v || !I && b >= y) && (n = this.setBit(n, At.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, At.BOTTOM), s = this.hasBit(this.anchorCorner, At.BOTTOM), c = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - c, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - c, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, At.RIGHT), a = this.hasBit(this.anchorCorner, At.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, At.BOTTOM), a = this.hasBit(this.anchorCorner, At.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, s = a.windowScroll, c = a.viewportDistance, u = a.surfaceSize, l = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Pt(d), f = h.next(); !f.done; f = h.next()) {
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
  }(Wt)
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
var wi = {
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
}, Cp = {
  FOCUS_ROOT_INDEX: -1
}, Si;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(Si || (Si = {}));
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
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Si.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return wi;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, yi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(n);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, qc.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Si.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Si.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Si.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, yi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, wi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, wi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, yi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Ge.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, yi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Ge.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, yi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Wt)
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
var vt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Ks = {
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
}, Fr = {
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
    $e(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Fr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return vt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Fr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Ks;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === Fr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== Fr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(vt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(vt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(vt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(vt.FOCUSED), i = n || r, a = this.adapter.hasClass(vt.REQUIRED);
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
      this.adapter.removeClass(vt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(vt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(vt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(vt.FOCUSED))) {
        var r = xt(n) === Pe.ENTER, i = xt(n) === Pe.SPACEBAR, a = xt(n) === Pe.ARROW_UP, s = xt(n) === Pe.ARROW_DOWN, c = n.ctrlKey || n.metaKey;
        if (!c && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var u = i ? " " : n.key, l = this.adapter.typeaheadMatchItem(u, this.getSelectedIndex());
          l >= 0 && this.setSelectedIndex(l), n.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(vt.FOCUSED);
        if (n) {
          var i = Fr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(vt.INVALID), this.adapter.removeMenuClass(vt.MENU_INVALID)) : (this.adapter.addClass(vt.INVALID), this.adapter.addMenuClass(vt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(vt.REQUIRED) && !this.adapter.hasClass(vt.DISABLED) ? this.getSelectedIndex() !== Fr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(vt.REQUIRED) : this.adapter.removeClass(vt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ei.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(vt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(vt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(vt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(vt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(Ks.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Ks.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Fr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Wt)
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
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, ir = {
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
    $e(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ir;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Vr;
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
      return this.adapter.getAttr(Vr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass(ir.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(ir.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass(ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(ir.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass(ir.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(ir.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Vr.ROLE) : this.adapter.setAttr(Vr.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Vr.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Vr.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Vr.ARIA_HIDDEN, "true");
    }, e;
  }(Wt)
), Op = /* @__PURE__ */ le("<div><!></div>");
function Rp(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "style", 3, ""), a = g(e, "static", 3, !1), s = g(e, "anchor", 3, !0), c = g(e, "fixed", 3, !1), u = g(e, "open", 31, () => _e(a())), l = g(e, "managed", 3, !1), d = g(e, "fullWidth", 3, !1), h = g(e, "quickOpen", 3, !1), f = g(e, "anchorElement", 15), m = g(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = g(e, "maxHeight", 3, 0), p = g(e, "horizontallyCenteredOnViewport", 3, !1), b = g(e, "openBottomBias", 3, 0), y = g(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ Ke(e, [
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
  ]), I, _ = /* @__PURE__ */ ge(void 0), A = _e({}), x = _e({}), T = /* @__PURE__ */ ge(void 0);
  ae("SMUI:list:role", "menu"), ae("SMUI:list:item:role", "menuitem"), Te(() => {
    var V, J;
    I && s() && !((V = I.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((J = I.parentElement) == null || J.classList.add("mdc-menu-surface--anchor"), f(I.parentElement ?? void 0));
  }), Te(() => {
    o(_) && o(_).isOpen() !== u() && (u() ? o(_).open() : o(_).close());
  }), Te(() => {
    o(_) && o(_).setQuickOpen(h());
  }), Te(() => {
    o(_) && o(_).setFixedPosition(c());
  }), Te(() => {
    o(_) && o(_).setMaxHeight(v());
  }), Te(() => {
    o(_) && o(_).setIsHorizontallyCenteredOnViewport(p());
  });
  const C = ei;
  Te(() => {
    o(_) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(_).setAnchorCorner(C[e.anchorCorner]) : o(_).setAnchorCorner(e.anchorCorner));
  }), Te(() => {
    o(_) && o(_).setAnchorMargin(m());
  }), Te(() => {
    o(_) && o(_).setOpenBottomBias(b());
  });
  const S = fe("SMUI:menu-surface:mount"), H = fe("SMUI:menu-surface:unmount");
  ot(() => {
    z(
      _,
      new qc({
        addClass: R,
        removeClass: P,
        hasClass: X,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          l() || u(a()), u() || Qe(B(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          l() || u(a()), u() || Qe(B(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          l() || u(!0), u() && Qe(B(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          u() || Qe(B(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (J) => B().contains(J),
        isRtl: () => getComputedStyle(B()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (J) => {
          x["transform-origin"] = J;
        },
        isFocused: () => document.activeElement === B(),
        saveFocus: () => {
          z(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !y() && (!I || B().contains(document.activeElement)) && o(T) && document.contains(o(T)) && "focus" in o(T) && o(T).focus();
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
        setPosition: (J) => {
          x.left = "left" in J ? `${J.left}px` : "", x.right = "right" in J ? `${J.right}px` : "", x.top = "top" in J ? `${J.top}px` : "", x.bottom = "bottom" in J ? `${J.bottom}px` : "";
        },
        setMaxHeight: (J) => {
          x["max-height"] = J;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return u();
      },
      set open(J) {
        u(J);
      },
      closeProgrammatic: re
    };
    return S && S(V), o(_).init(), () => {
      var K, he;
      H && H(V);
      const J = o(_).isHoistedElement;
      (K = o(_)) == null || K.destroy(), J && ((he = B().parentNode) == null || he.removeChild(B()));
    };
  }), Ln(() => {
    var V;
    s() && B() && ((V = B().parentElement) == null || V.classList.remove("mdc-menu-surface--anchor"));
  });
  function X(V) {
    return V in A ? A[V] : B().classList.contains(V);
  }
  function R(V) {
    A[V] || (A[V] = !0);
  }
  function P(V) {
    (!(V in A) || A[V]) && (A[V] = !1);
  }
  function re(V) {
    var J;
    (J = o(_)) == null || J.close(V), u(!1);
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
  function j(V, J) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setAbsolutePosition(V, J);
  }
  function Q(V) {
    if (o(_) == null)
      throw new Error("Instance is not defined.");
    return o(_).setIsHoisted(V);
  }
  function D() {
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
    return I;
  }
  var Ie = {
    isOpen: k,
    setOpen: U,
    setAbsolutePosition: j,
    setIsHoisted: Q,
    isFixed: D,
    flipCornerHorizontally: L,
    getElement: B
  }, pe = Op();
  fa("click", Hu.body, N, !0);
  var ce = (V) => {
    var J;
    o(_) && !l() && o(_).handleKeydown(V), (J = e.onkeydown) == null || J.call(e, V);
  };
  qe(
    pe,
    (V, J) => ({
      class: V,
      style: J,
      role: "dialog",
      ...E,
      onkeydown: ce
    }),
    [
      () => Fe({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": c(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...A,
        [r()]: !0
      }),
      () => Object.entries(x).map(([V, J]) => `${V}: ${J};`).concat([i()]).join(" ")
    ]
  );
  var Ae = oe(pe);
  return Ee(Ae, () => e.children ?? me), Se(pe, (V) => I = V, () => I), He(pe, (V, J) => q == null ? void 0 : q(V, J), n), w(t, pe), Ce(Ie);
}
function Zs(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Mp(t, e) {
  xe(e, !0);
  const { closest: n } = Os;
  let r = g(e, "use", 19, () => []), i = g(e, "class", 3, ""), a = g(e, "open", 15, !1), s = g(e, "anchorElement", 15), c = g(e, "managed", 3, !1), u = /* @__PURE__ */ Ke(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), l, d = /* @__PURE__ */ ge(void 0), h = /* @__PURE__ */ ge(void 0), f = /* @__PURE__ */ ge(void 0);
  ae("SMUI:menu-surface:mount", (C) => {
    o(h) || z(h, C, !0);
  });
  const m = fe("SMUI:list:mount");
  ae("SMUI:list:mount", (C) => {
    o(f) || z(f, C, !0), m && m(C);
  });
  const v = fe("SMUI:menu:mount"), p = fe("SMUI:menu:unmount");
  ot(() => (z(
    d,
    new Tp({
      addClassToElementAtIndex: (C, S) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(C, S);
      },
      removeClassFromElementAtIndex: (C, S) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(C, S);
      },
      addAttributeToElementAtIndex: (C, S, H) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(C, S, H);
      },
      removeAttributeFromElementAtIndex: (C, S) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(C, S);
      },
      getAttributeFromElementAtIndex: (C, S) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(C, S);
      },
      elementContainsClass: (C, S) => C.classList.contains(S),
      closeSurface: (C) => {
        var S;
        c() || ((S = o(h)) == null || S.closeProgrammatic(C), Qe(x(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((S) => S.element).indexOf(C);
      },
      notifySelected: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        Qe(x(), "SMUIMenuSelected", {
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
        return !!n(o(f).getOrderedList()[C].element, `.${wi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (C) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const S = o(f).getOrderedList(), H = n(S[C].element, `.${wi.MENU_SELECTION_GROUP}`), X = H == null ? void 0 : H.querySelector(`.${wi.MENU_SELECTED_LIST_ITEM}`);
        return X ? S.map((R) => R.element).indexOf(X) : -1;
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
  function I(C) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(C);
  }
  function _() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function A() {
    return l;
  }
  function x() {
    return l.getElement();
  }
  var T = {
    isOpen: y,
    setOpen: E,
    setDefaultFocusState: I,
    getSelectedIndex: _,
    getMenuSurface: A,
    getElement: x
  };
  {
    let C = /* @__PURE__ */ be(() => Fe({ "mdc-menu": !0, [i()]: !0 }));
    Se(
      Rp(t, st(
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
          onkeydown: (S) => {
            var H;
            b(S), (H = e.onkeydown) == null || H.call(e, S);
          },
          onSMUIMenuSurfaceOpened: (S) => {
            var H;
            o(d) && o(d).handleMenuSurfaceOpened(), (H = e.onSMUIMenuSurfaceOpened) == null || H.call(e, S);
          },
          onSMUIListAction: (S) => {
            var H;
            o(d) && o(f) && o(d).handleItemAction(o(f).getOrderedList()[S.detail.index].element), (H = e.onSMUIListAction) == null || H.call(e, S);
          },
          get open() {
            return a();
          },
          set open(S) {
            a(S);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(S) {
            s(S);
          },
          children: (S, H) => {
            var X = ee(), R = W(X);
            Ee(R, () => e.children ?? me), w(S, X);
          },
          $$slots: { default: !0 }
        }
      )),
      (S) => l = S,
      () => l
    );
  }
  return Ce(T);
}
function Dp(t, e) {
  xe(e, !0);
  const { closest: n, matches: r } = Os;
  let i = fe("SMUI:list:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "nonInteractive", 3, !1), u = g(e, "dense", 3, !1), l = g(e, "textualList", 3, !1), d = g(e, "avatarList", 3, !1), h = g(e, "iconList", 3, !1), f = g(e, "imageList", 3, !1), m = g(e, "thumbnailList", 3, !1), v = g(e, "videoList", 3, !1), p = g(e, "twoLine", 3, !1), b = g(e, "threeLine", 3, !1), y = g(e, "vertical", 3, !0), E = g(e, "wrapFocus", 19, () => fe("SMUI:list:wrapFocus") ?? !1), I = g(e, "singleSelection", 3, !1), _ = g(e, "disabledItemsFocusable", 3, !1), A = g(e, "selectedIndex", 31, () => -1), x = g(e, "radioList", 3, !1), T = g(e, "checkList", 3, !1), C = g(e, "hasTypeahead", 3, !1), S = g(e, "component", 3, Ji), H = g(e, "tag", 3, i ? "nav" : "ul"), X = /* @__PURE__ */ Ke(e, [
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
  ]), R, P = /* @__PURE__ */ ge(void 0), re = [], N = fe("SMUI:list:role");
  const k = /* @__PURE__ */ new WeakMap();
  let U = fe("SMUI:dialog:selection"), j = fe("SMUI:addLayoutListener"), Q;
  ae("SMUI:list:nonInteractive", c()), ae("SMUI:separator:context", "list"), N || (I() ? (N = "listbox", ae("SMUI:list:item:role", "option")) : x() ? (N = "radiogroup", ae("SMUI:list:item:role", "radio")) : T() ? (N = "group", ae("SMUI:list:item:role", "checkbox")) : (N = "list", ae("SMUI:list:item:role", void 0))), Te(() => {
    o(P) && o(P).setVerticalOrientation(y());
  }), Te(() => {
    o(P) && o(P).setWrapFocus(E());
  }), Te(() => {
    o(P) && o(P).setHasTypeahead(C());
  }), Te(() => {
    o(P) && o(P).setSingleSelection(I());
  }), Te(() => {
    o(P) && o(P).setDisabledItemsFocusable(_());
  }), Te(() => {
    o(P) && I() && M() !== A() && o(P).setSelectedIndex(A());
  }), j && (Q = j(ze)), ae("SMUI:list:item:mount", (ie) => {
    re.push(ie), k.set(ie.element, ie), I() && ie.selected && A(Oe(ie.element));
  }), ae("SMUI:list:item:unmount", (ie) => {
    const ve = (ie && re.findIndex((G) => G === ie)) ?? -1;
    ve !== -1 && (re.splice(ve, 1), k.delete(ie.element));
  });
  const D = fe("SMUI:list:mount"), L = fe("SMUI:list:unmount");
  ot(() => {
    z(
      P,
      new Ap({
        addClassForElementIndex: K,
        focusItemAtIndex: se,
        getAttributeForElementIndex: (ve, G) => {
          var Y;
          return ((Y = V()[ve]) == null ? void 0 : Y.getAttr(G)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((ve) => ve.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => re.length,
        getPrimaryTextAtIndex: Ne,
        hasCheckboxAtIndex: (ve) => {
          var G;
          return ((G = V()[ve]) == null ? void 0 : G.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (ve) => {
          var G;
          return ((G = V()[ve]) == null ? void 0 : G.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (ve) => {
          const G = V()[ve];
          return ((G == null ? void 0 : G.hasCheckbox) && G.checked) ?? !1;
        },
        isFocusInsideList: () => R != null && Re() !== document.activeElement && Re().contains(document.activeElement),
        isRootFocused: () => R != null && document.activeElement === Re(),
        listItemAtIndexHasClass: J,
        notifyAction: (ve) => {
          A(ve), R != null && Qe(Re(), "SMUIListAction", { index: ve });
        },
        notifySelectionChange: (ve) => {
          R != null && Qe(Re(), "SMUIListSelectionChange", { changedIndices: ve });
        },
        removeClassForElementIndex: he,
        setAttributeForElementIndex: we,
        setCheckedCheckboxOrRadioAtIndex: (ve, G) => {
          V()[ve].checked = G;
        },
        setTabIndexForListItemChildren: (ve, G) => {
          const Y = V()[ve];
          Array.prototype.forEach.call(Y.element.querySelectorAll("button:not(:disabled), a"), (ut) => {
            ut.setAttribute("tabindex", G);
          });
        }
      }),
      !0
    );
    const ie = {
      get element() {
        return Re();
      },
      get items() {
        return re;
      },
      get typeaheadInProgress() {
        if (!o(P))
          throw new Error("Instance is undefined.");
        return o(P).isTypeaheadInProgress();
      },
      typeaheadMatchItem(ve, G) {
        if (!o(P))
          throw new Error("Instance is undefined.");
        return o(P).typeaheadMatchItem(
          ve,
          G,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: se,
      addClassForElementIndex: K,
      removeClassForElementIndex: he,
      setAttributeForElementIndex: we,
      removeAttributeForElementIndex: Z,
      getAttributeFromElementIndex: te,
      getPrimaryTextAtIndex: Ne
    };
    return D && D(ie), o(P).init(), o(P).layout(), () => {
      var ve;
      L && L(ie), (ve = o(P)) == null || ve.destroy();
    };
  }), Ln(() => {
    Q && Q();
  });
  function B(ie) {
    o(P) && ie.target && o(P).handleKeydown(ie, ie.target.classList.contains("mdc-deprecated-list-item"), Oe(ie.target));
  }
  function Ie(ie) {
    o(P) && ie.target && o(P).handleFocusIn(Oe(ie.target));
  }
  function pe(ie) {
    o(P) && ie.target && o(P).handleFocusOut(Oe(ie.target));
  }
  function ce(ie) {
    o(P) && ie.target && o(P).handleClick(Oe(ie.target), !r(ie.target, 'input[type="checkbox"], input[type="radio"]'), ie);
  }
  function Ae(ie) {
    if (x() || T()) {
      const ve = Oe(ie.target);
      if (ve !== -1) {
        const G = V()[ve];
        G && (x() && !G.checked || T()) && (r(ie.detail.target, 'input[type="checkbox"], input[type="radio"]') || (G.checked = !G.checked), G.activateRipple(), window.requestAnimationFrame(() => {
          G.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return R == null ? [] : [...Re().children].map((ie) => k.get(ie)).filter((ie) => ie && ie._smui_list_item_accessor);
  }
  function J(ie, ve) {
    const G = V()[ie];
    return (G && G.hasClass(ve)) ?? !1;
  }
  function K(ie, ve) {
    const G = V()[ie];
    G && G.addClass(ve);
  }
  function he(ie, ve) {
    const G = V()[ie];
    G && G.removeClass(ve);
  }
  function we(ie, ve, G) {
    const Y = V()[ie];
    Y && Y.addAttr(ve, G);
  }
  function Z(ie, ve) {
    const G = V()[ie];
    G && G.removeAttr(ve);
  }
  function te(ie, ve) {
    const G = V()[ie];
    return G ? G.getAttr(ve) : null;
  }
  function Ne(ie) {
    const ve = V()[ie];
    return (ve && ve.getPrimaryText()) ?? "";
  }
  function Oe(ie) {
    const ve = n(ie, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ve && r(ve, ".mdc-deprecated-list-item") ? V().map((G) => G == null ? void 0 : G.element).indexOf(ve) : -1;
  }
  function ze() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).layout();
  }
  function et(ie, ve) {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).setEnabled(ie, ve);
  }
  function Be() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).isTypeaheadInProgress();
  }
  function M() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).getSelectedIndex();
  }
  function F() {
    if (!o(P))
      throw new Error("Instance is undefined.");
    return o(P).getFocusedItemIndex();
  }
  function se(ie) {
    const ve = V()[ie];
    ve && "focus" in ve.element && ve.element.focus();
  }
  function Re() {
    return R.getElement();
  }
  var lt = {
    layout: ze,
    setEnabled: et,
    getTypeaheadInProgress: Be,
    getSelectedIndex: M,
    getFocusedItemIndex: F,
    focusItemAtIndex: se,
    getElement: Re
  }, yt = ee(), pt = W(yt);
  {
    let ie = /* @__PURE__ */ be(() => Fe({
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
    ci(pt, S, (ve, G) => {
      Se(
        G(ve, st(
          {
            get tag() {
              return H();
            },
            get use() {
              return a();
            },
            get class() {
              return o(ie);
            },
            get role() {
              return N;
            }
          },
          () => X,
          {
            onkeydown: (Y) => {
              var Me;
              B(Y), (Me = e.onkeydown) == null || Me.call(e, Y);
            },
            onfocusin: (Y) => {
              var Me;
              Ie(Y), (Me = e.onfocusin) == null || Me.call(e, Y);
            },
            onfocusout: (Y) => {
              var Me;
              pe(Y), (Me = e.onfocusout) == null || Me.call(e, Y);
            },
            onclick: (Y) => {
              var Me;
              ce(Y), (Me = e.onclick) == null || Me.call(e, Y);
            },
            onSMUIAction: (Y) => {
              var Me;
              Ae(Y), (Me = e.onSMUIAction) == null || Me.call(e, Y);
            },
            children: (Y, Me) => {
              var ut = ee(), gt = W(ut);
              Ee(gt, () => e.children ?? me), w(Y, ut);
            },
            $$slots: { default: !0 }
          }
        )),
        (Y) => R = Y,
        () => R
      );
    });
  }
  return w(t, yt), Ce(lt);
}
let Pp = 0;
var Hp = /* @__PURE__ */ le('<span class="mdc-deprecated-list-item__ripple"></span>'), Np = /* @__PURE__ */ le("<!><!>", 1);
function Up(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(K) {
    return K === n;
  }
  let i = fe("SMUI:list:item:nav"), a = g(e, "use", 19, () => []), s = g(e, "class", 3, ""), c = g(e, "style", 3, ""), u = g(e, "nonInteractive", 19, () => fe("SMUI:list:nonInteractive") ?? !1), l = g(e, "ripple", 19, () => !u()), d = g(e, "wrapper", 3, !1), h = g(e, "activated", 15, !1), f = g(e, "role", 19, () => d() ? "presentation" : fe("SMUI:list:item:role")), m = g(e, "selected", 15, !1), v = g(e, "disabled", 3, !1), p = g(e, "skipRestoreFocus", 3, !1), b = g(e, "tabindex", 15, n), y = g(e, "inputId", 19, () => "SMUI-form-field-list-" + Pp++), E = g(e, "component", 3, Ji), I = g(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), _ = /* @__PURE__ */ Ke(e, [
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
  ae("SMUI:list:nonInteractive", void 0), ae("SMUI:list:item:role", void 0);
  let A, x = _e({}), T = _e({}), C = _e({}), S = /* @__PURE__ */ ge(void 0), H = /* @__PURE__ */ ge(void 0);
  const X = /* @__PURE__ */ be(() => r(b()) ? !u() && !v() && (m() || o(S) && o(S).checked) ? 0 : -1 : b());
  ae("SMUI:generic:input:props", { id: y() }), ae("SMUI:separator:context", void 0), ae("SMUI:generic:input:mount", (K) => {
    ("_smui_checkbox_accessor" in K || "_smui_radio_accessor" in K) && z(S, K, !0);
  }), ae("SMUI:generic:input:unmount", () => {
    z(S, void 0);
  });
  const R = fe("SMUI:list:item:mount"), P = fe("SMUI:list:item:unmount");
  ot(() => {
    if (!m() && !u()) {
      let he = !0, we = A.getElement();
      for (; we.previousElementSibling; )
        if (we = we.previousElementSibling, we.nodeType === 1 && we.classList.contains("mdc-deprecated-list-item") && !we.classList.contains("mdc-deprecated-list-item--disabled")) {
          he = !1;
          break;
        }
      he && z(H, window.requestAnimationFrame(() => L(we)), !0);
    }
    const K = {
      _smui_list_item_accessor: !0,
      get element() {
        return ce();
      },
      get selected() {
        return m();
      },
      set selected(he) {
        m(he);
      },
      hasClass: re,
      addClass: N,
      removeClass: k,
      getAttr: j,
      addAttr: Q,
      removeAttr: D,
      getPrimaryText: pe,
      // For inputs within item.
      get checked() {
        return (o(S) && o(S).checked) ?? !1;
      },
      set checked(he) {
        o(S) && (o(S).checked = !!he);
      },
      get hasCheckbox() {
        return !!(o(S) && "_smui_checkbox_accessor" in o(S));
      },
      get hasRadio() {
        return !!(o(S) && "_smui_radio_accessor" in o(S));
      },
      activateRipple() {
        o(S) && o(S).activateRipple();
      },
      deactivateRipple() {
        o(S) && o(S).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Ie,
      get tabindex() {
        return o(X);
      },
      set tabindex(he) {
        b(he);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(he) {
        h(he);
      }
    };
    return R && R(K), () => {
      P && P(K);
    };
  }), Ln(() => {
    o(H) && window.cancelAnimationFrame(o(H));
  });
  function re(K) {
    return K in x ? x[K] : ce().classList.contains(K);
  }
  function N(K) {
    x[K] || (x[K] = !0);
  }
  function k(K) {
    (!(K in x) || x[K]) && (x[K] = !1);
  }
  function U(K, he) {
    T[K] != he && (he === "" || he == null ? delete T[K] : T[K] = he);
  }
  function j(K) {
    return K in C ? C[K] ?? null : ce().getAttribute(K);
  }
  function Q(K, he) {
    C[K] !== he && (C[K] = he);
  }
  function D(K) {
    (!(K in C) || C[K] != null) && (C[K] = void 0);
  }
  function L(K) {
    let he = !0;
    for (; K.nextElementSibling; )
      if (K = K.nextElementSibling, K.nodeType === 1 && K.classList.contains("mdc-deprecated-list-item")) {
        const we = K.attributes.getNamedItem("tabindex");
        if (we && we.value === "0") {
          he = !1;
          break;
        }
      }
    he && b(0);
  }
  function B(K) {
    const he = K.key === "Enter", we = K.key === "Space";
    (he || we) && Ie(K);
  }
  function Ie(K) {
    v() || Qe(ce(), "SMUIAction", K);
  }
  function pe() {
    const K = ce(), he = K.querySelector(".mdc-deprecated-list-item__primary-text");
    if (he)
      return he.textContent ?? "";
    const we = K.querySelector(".mdc-deprecated-list-item__text");
    return we ? we.textContent ?? "" : K.textContent ?? "";
  }
  function ce() {
    return A.getElement();
  }
  var Ae = { action: Ie, getPrimaryText: pe, getElement: ce }, V = ee(), J = W(V);
  {
    let K = /* @__PURE__ */ be(() => [
      ...u() ? [] : [
        [
          Yt,
          {
            ripple: !o(S),
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
    ]), he = /* @__PURE__ */ be(() => Fe({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": u(),
      ...x,
      [s()]: !0
    })), we = /* @__PURE__ */ be(() => Object.entries(T).map(([te, Ne]) => `${te}: ${Ne};`).concat([c()]).join(" ")), Z = /* @__PURE__ */ be(() => p() || void 0);
    ci(J, E, (te, Ne) => {
      Se(
        Ne(te, st(
          {
            get tag() {
              return I();
            },
            get use() {
              return o(K);
            },
            get class() {
              return o(he);
            },
            get style() {
              return o(we);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": m() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(S) && o(S).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": v() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(Z);
            },
            get tabindex() {
              return o(X);
            },
            get href() {
              return e.href;
            }
          },
          () => C,
          () => _,
          {
            onclick: (Oe) => {
              var ze;
              Ie(Oe), (ze = e.onclick) == null || ze.call(e, Oe);
            },
            onkeydown: (Oe) => {
              var ze;
              B(Oe), (ze = e.onkeydown) == null || ze.call(e, Oe);
            },
            children: (Oe, ze) => {
              var et = Np(), Be = W(et);
              {
                var M = (se) => {
                  var Re = Hp();
                  w(se, Re);
                };
                ne(Be, (se) => {
                  l() && se(M);
                });
              }
              var F = ye(Be);
              Ee(F, () => e.children ?? me), w(Oe, et);
            },
            $$slots: { default: !0 }
          }
        )),
        (Oe) => A = Oe,
        () => A
      );
    });
  }
  return w(t, V), Ce(Ae);
}
let kp = 0;
var Bp = /* @__PURE__ */ le("<div><!></div>");
function Fp(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "id", 19, () => "SMUI-select-helper-text-" + kp++), a = g(e, "persistent", 3, !1), s = g(e, "validationMsg", 3, !1), c = /* @__PURE__ */ Ke(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), u, l = /* @__PURE__ */ ge(void 0), d = _e({}), h = _e({}), f = /* @__PURE__ */ ge(void 0);
  const m = fe("SMUI:select:helper-text:id"), v = fe("SMUI:select:helper-text:mount"), p = fe("SMUI:select:helper-text:unmount");
  ot(() => (z(
    l,
    new Lp({
      addClass: y,
      removeClass: E,
      hasClass: b,
      getAttr: I,
      setAttr: _,
      removeAttr: A,
      setContent: (R) => {
        z(f, R, !0);
      }
    }),
    !0
  ), m && m(i()), v && v(o(l)), o(l).init(), () => {
    var R;
    p && o(l) && p(o(l)), (R = o(l)) == null || R.destroy();
  }));
  function b(R) {
    return R in d ? d[R] : x().classList.contains(R);
  }
  function y(R) {
    d[R] || (d[R] = !0);
  }
  function E(R) {
    (!(R in d) || d[R]) && (d[R] = !1);
  }
  function I(R) {
    return R in h ? h[R] ?? null : x().getAttribute(R);
  }
  function _(R, P) {
    h[R] !== P && (h[R] = P);
  }
  function A(R) {
    (!(R in h) || h[R] != null) && (h[R] = void 0);
  }
  function x() {
    return u;
  }
  var T = { getElement: x }, C = Bp();
  qe(
    C,
    (R) => ({
      class: R,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...c
    }),
    [
      () => Fe({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var S = oe(C);
  {
    var H = (R) => {
      var P = ee(), re = W(P);
      Ee(re, () => e.children ?? me), w(R, P);
    }, X = (R) => {
      var P = Dt();
      Le(() => rt(P, o(f))), w(R, P);
    };
    ne(S, (R) => {
      o(f) == null ? R(H) : R(X, !1);
    });
  }
  return Se(C, (R) => u = R, () => u), He(C, (R, P) => q == null ? void 0 : q(R, P), n), w(t, C), Ce(T);
}
let Vp = 0;
var Gp = /* @__PURE__ */ le("<input/>"), jp = /* @__PURE__ */ le('<span class="mdc-select__ripple"></span>'), qp = /* @__PURE__ */ le('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function zp(t, e) {
  xe(e, !0);
  const n = () => Kn(Re, "$selectedTextStore", r), [r, i] = dr();
  let a = () => {
  };
  function s(O) {
    return O === a;
  }
  let c = g(e, "use", 19, () => []), u = g(e, "class", 3, ""), l = g(e, "style", 3, ""), d = g(e, "ripple", 3, !0), h = g(e, "disabled", 3, !1), f = g(e, "variant", 3, "standard"), m = g(e, "noLabel", 3, !1), v = g(e, "label", 3, void 0), p = g(e, "value", 15), b = g(e, "key", 3, (O) => O), y = g(e, "dirty", 15, !1), E = g(e, "invalid", 15, a), I = g(e, "updateInvalid", 19, () => s(E())), _ = g(e, "required", 3, !1), A = g(e, "inputId", 19, () => "SMUI-select-" + Vp++), x = g(e, "hiddenInput", 3, !1), T = g(e, "withLeadingIcon", 3, a), C = g(e, "anchor$use", 19, () => []), S = g(e, "anchor$class", 3, ""), H = g(e, "selectedTextContainer$use", 19, () => []), X = g(e, "selectedTextContainer$class", 3, ""), R = g(e, "selectedText$use", 19, () => []), P = g(e, "selectedText$class", 3, ""), re = g(e, "dropdownIcon$use", 19, () => []), N = g(e, "dropdownIcon$class", 3, ""), k = g(e, "menu$class", 3, ""), U = /* @__PURE__ */ Ke(e, [
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
  const j = s(E());
  s(E()) && E(!1);
  let Q, D = /* @__PURE__ */ ge(void 0), L = _e({}), B = _e({}), Ie, pe = _e({}), ce = /* @__PURE__ */ ge(-1);
  const Ae = /* @__PURE__ */ be(() => U.menu$id ?? A() + "-menu");
  let V = /* @__PURE__ */ ge(void 0), J = fe("SMUI:addLayoutListener"), K, he = /* @__PURE__ */ ge(!1), we = _e({}), Z = /* @__PURE__ */ ge(void 0), te = /* @__PURE__ */ ge(void 0), Ne = /* @__PURE__ */ ge(!1), Oe, ze = fe("SMUI:select:context"), et, Be, M, F, se;
  ae("SMUI:list:role", ""), ae("SMUI:list:nav", !1);
  const Re = en("");
  ae("SMUI:select:selectedText", Re);
  const lt = en(p());
  Te(() => {
    ri(lt, p());
  }), ae("SMUI:select:value", lt), Te(() => {
    o(D) && o(D).getValue() !== b()(p()) && o(D).setValue(b()(p()));
  });
  let yt = o(ce);
  Te(() => {
    if (yt !== o(ce))
      if (yt = o(ce), o(D))
        o(D).setSelectedIndex(
          o(ce),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const O = Ht();
        p() !== O[o(ce)] && p(O[o(ce)]);
      }
  }), Te(() => {
    o(D) && o(D).getDisabled() !== h() && o(D).setDisabled(h());
  }), Te(() => {
    o(D) && y() && o(D).isValid() !== !E() && (I() ? E(!o(D).isValid()) : o(D).setValid(!E()));
  }), Te(() => {
    o(D) && o(D).getRequired() !== _() && o(D).setRequired(_());
  }), J && (K = J(hi)), ae("SMUI:select:leading-icon:mount", (O) => {
    et = O;
  }), ae("SMUI:select:leading-icon:unmount", () => {
    et = void 0;
  }), ae("SMUI:list:mount", (O) => {
    Oe = O;
  }), ae("SMUI:select:helper-text:id", (O) => {
    z(V, O, !0);
  }), ae("SMUI:select:helper-text:mount", (O) => {
    Be = O;
  }), ae("SMUI:select:helper-text:unmount", () => {
    z(V, void 0), Be = void 0;
  }), ot(() => (z(
    D,
    new wp(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (O) => {
          ri(Re, O);
        },
        isSelectAnchorFocused: () => document.activeElement === Ie,
        getSelectAnchorAttr: ut,
        setSelectAnchorAttr: gt,
        removeSelectAnchorAttr: ht,
        addMenuClass: Y,
        removeMenuClass: Me,
        openMenu: () => {
          z(he, !0);
        },
        closeMenu: () => {
          z(he, !1);
        },
        getAnchorElement: () => Ie,
        setMenuAnchorElement: (O) => {
          z(Z, O, !0);
        },
        setMenuAnchorCorner: (O) => {
          z(te, O, !0);
        },
        setMenuWrapFocus: (O) => {
          z(Ne, O, !0);
        },
        getSelectedIndex: () => o(ce),
        setSelectedIndex: (O) => {
          yt = O, z(ce, O, !0), p(Ht()[o(ce)]);
        },
        focusMenuItemAtIndex: (O) => {
          Oe.focusItemAtIndex(O);
        },
        getMenuItemCount: () => Oe.items.length,
        getMenuItemValues: () => Ht().map(b()),
        getMenuItemTextAtIndex: (O) => Oe.getPrimaryTextAtIndex(O),
        isTypeaheadInProgress: () => Oe.typeaheadInProgress,
        typeaheadMatchItem: (O, ue) => Oe.typeaheadMatchItem(O, ue),
        // getCommonAdapterMethods
        addClass: ie,
        removeClass: ve,
        hasClass: pt,
        setRippleCenter: (O) => F && F.setRippleCenter(O),
        activateBottomLine: () => F && F.activate(),
        deactivateBottomLine: () => F && F.deactivate(),
        notifyChange: (O) => {
          var ue;
          y(!0), I() && E(!((ue = o(D)) != null && ue.isValid())), Qe(Bn(), "SMUISelectChange", { value: p(), index: o(ce) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!se,
        notchOutline: (O) => se && se.notch(O),
        closeOutline: () => se && se.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!M,
        floatLabel: (O) => M && M.float(O),
        getLabelWidth: () => M ? M.getWidth() : 0,
        setLabelRequired: (O) => M && M.setRequired(O)
      },
      {
        get helperText() {
          return Be;
        },
        get leadingIcon() {
          return et;
        }
      }
    ),
    !0
  ), z(ce, Ht().indexOf(p()), !0), o(D).init(), It(j), () => {
    var O;
    (O = o(D)) == null || O.destroy();
  })), Ln(() => {
    K && K();
  });
  function pt(O) {
    return O in L ? L[O] : Bn().classList.contains(O);
  }
  function ie(O) {
    L[O] || (L[O] = !0);
  }
  function ve(O) {
    (!(O in L) || L[O]) && (L[O] = !1);
  }
  function G(O, ue) {
    B[O] != ue && (ue === "" || ue == null ? delete B[O] : B[O] = ue);
  }
  function Y(O) {
    we[O] || (we[O] = !0);
  }
  function Me(O) {
    (!(O in we) || we[O]) && (we[O] = !1);
  }
  function ut(O) {
    return O in pe ? pe[O] ?? null : Bn().getAttribute(O);
  }
  function gt(O, ue) {
    pe[O] !== ue && (pe[O] = ue);
  }
  function ht(O) {
    (!(O in pe) || pe[O] != null) && (pe[O] = void 0);
  }
  function Ht() {
    return Oe.getOrderedList().map((O) => O.getValue());
  }
  function fr(O) {
    const ue = O.currentTarget.getBoundingClientRect();
    return (dt(O) ? O.touches[0].clientX : O.clientX) - ue.left;
  }
  function dt(O) {
    return "touches" in O;
  }
  function Lt() {
    if (o(D) == null)
      throw new Error("Instance is undefined.");
    return o(D).getUseDefaultValidation();
  }
  function It(O) {
    var ue;
    (ue = o(D)) == null || ue.setUseDefaultValidation(O);
  }
  function Rn() {
    Ie.focus();
  }
  function hi() {
    var O;
    (O = o(D)) == null || O.layout();
  }
  function Bn() {
    return Q;
  }
  var Ve = {
    getUseDefaultValidation: Lt,
    setUseDefaultValidation: It,
    focus: Rn,
    layout: hi,
    getElement: Bn
  }, Xe = qp(), Ze = W(Xe);
  qe(Ze, (O, ue, ct) => ({ class: O, style: ue, ...ct }), [
    () => Fe({
      "mdc-select": !0,
      "mdc-select--required": _(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": m() || v() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": o(he),
      "mdc-data-table__pagination-rows-per-page-select": ze === "data-table:pagination",
      ...L,
      [u()]: !0
    }),
    () => Object.entries(B).map(([O, ue]) => `${O}: ${ue};`).concat([l()]).join(" "),
    () => qi(U, [
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
  var Ot = oe(Ze);
  {
    var mn = (O) => {
      var ue = Gp();
      qe(
        ue,
        (ct) => ({
          type: "hidden",
          required: _(),
          disabled: h(),
          value: p(),
          ...ct
        }),
        [() => mt(U, "input$")],
        void 0,
        void 0,
        !0
      ), w(O, ue);
    };
    ne(Ot, (O) => {
      x() && O(mn);
    });
  }
  var tt = ye(Ot, 2), at = (O) => {
    var ue;
    Ie.focus(), o(D) && o(D).handleClick(fr(O)), (ue = e.anchor$onclick) == null || ue.call(e, O);
  }, St = (O) => {
    var ue;
    o(D) && o(D).handleKeydown(O), (ue = e.onkeydown) == null || ue.call(e, O);
  }, Ye = (O) => {
    var ue;
    o(D) && o(D).handleBlur(), Qe(Bn(), "blur", O), (ue = e.anchor$onblur) == null || ue.call(e, O);
  }, Ct = (O) => {
    var ue;
    o(D) && o(D).handleFocus(), Qe(Bn(), "focus", O), (ue = e.anchor$onfocus) == null || ue.call(e, O);
  };
  qe(
    tt,
    (O, ue) => ({
      class: O,
      "aria-required": _() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(Ae),
      "aria-expanded": o(he) ? "true" : "false",
      "aria-describedby": o(V),
      role: "combobox",
      tabindex: "0",
      ...pe,
      ...ue,
      onclick: at,
      onkeydown: St,
      onblur: Ye,
      onfocus: Ct
    }),
    [
      () => Fe({ "mdc-select__anchor": !0, [S()]: !0 }),
      () => mt(U, "anchor$")
    ]
  );
  var Mn = oe(tt);
  {
    var Tt = (O) => {
      var ue = jp();
      w(O, ue);
    };
    ne(Mn, (O) => {
      f() === "filled" && O(Tt);
    });
  }
  var bt = ye(Mn, 2);
  {
    var Rt = (O) => {
      {
        let ue = /* @__PURE__ */ be(() => A() + "-smui-label"), ct = /* @__PURE__ */ be(() => n() !== ""), wt = /* @__PURE__ */ be(() => mt(U, "label$"));
        Se(
          fs(O, st(
            {
              get id() {
                return o(ue);
              },
              get floatAbove() {
                return o(ct);
              },
              get required() {
                return _();
              }
            },
            () => o(wt),
            {
              children: (er, tr) => {
                var ea = ee(), vi = W(ea);
                {
                  var Nr = (Ur) => {
                  }, Ps = (Ur) => {
                    var Na = ee(), ta = W(Na);
                    {
                      var Qo = (hr) => {
                        var kr = Dt();
                        Le(() => rt(kr, v())), w(hr, kr);
                      }, Ua = (hr) => {
                        var kr = ee(), Hs = W(kr);
                        Ee(Hs, v), w(hr, kr);
                      };
                      ne(
                        ta,
                        (hr) => {
                          typeof v() == "string" ? hr(Qo) : hr(Ua, !1);
                        },
                        !0
                      );
                    }
                    w(Ur, Na);
                  };
                  ne(vi, (Ur) => {
                    v() == null ? Ur(Nr) : Ur(Ps, !1);
                  });
                }
                w(er, ea);
              },
              $$slots: { default: !0 }
            }
          )),
          (er) => M = er,
          () => M
        );
      }
    };
    ne(bt, (O) => {
      f() !== "outlined" && !m() && v() != null && O(Rt);
    });
  }
  var on = ye(bt, 2);
  {
    var Nt = (O) => {
      {
        let ue = /* @__PURE__ */ be(() => m() || v() == null), ct = /* @__PURE__ */ be(() => mt(U, "outline$"));
        Se(
          Vc(O, st(
            {
              get noLabel() {
                return o(ue);
              }
            },
            () => o(ct),
            {
              children: (wt, er) => {
                var tr = ee(), ea = W(tr);
                {
                  var vi = (Nr) => {
                    {
                      let Ps = /* @__PURE__ */ be(() => A() + "-smui-label"), Ur = /* @__PURE__ */ be(() => n() !== ""), Na = /* @__PURE__ */ be(() => mt(U, "label$"));
                      Se(
                        fs(Nr, st(
                          {
                            get id() {
                              return o(Ps);
                            },
                            get floatAbove() {
                              return o(Ur);
                            },
                            get required() {
                              return _();
                            }
                          },
                          () => o(Na),
                          {
                            children: (ta, Qo) => {
                              var Ua = ee(), hr = W(Ua);
                              {
                                var kr = (na) => {
                                }, Hs = (na) => {
                                  var Jo = ee(), _d = W(Jo);
                                  {
                                    var yd = (mi) => {
                                      var ra = Dt();
                                      Le(() => rt(ra, v())), w(mi, ra);
                                    }, Id = (mi) => {
                                      var ra = ee(), Ed = W(ra);
                                      Ee(Ed, v), w(mi, ra);
                                    };
                                    ne(
                                      _d,
                                      (mi) => {
                                        typeof v() == "string" ? mi(yd) : mi(Id, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(na, Jo);
                                };
                                ne(hr, (na) => {
                                  v() == null ? na(kr) : na(Hs, !1);
                                });
                              }
                              w(ta, Ua);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ta) => M = ta,
                        () => M
                      );
                    }
                  };
                  ne(ea, (Nr) => {
                    !m() && v() != null && Nr(vi);
                  });
                }
                w(wt, tr);
              },
              $$slots: { default: !0 }
            }
          )),
          (wt) => se = wt,
          () => se
        );
      }
    };
    ne(on, (O) => {
      f() === "outlined" && O(Nt);
    });
  }
  var ln = ye(on, 2);
  Ee(ln, () => e.leadingIcon ?? me);
  var Xt = ye(ln, 2);
  qe(Xt, (O, ue) => ({ class: O, ...ue }), [
    () => Fe({
      "mdc-select__selected-text-container": !0,
      [X()]: !0
    }),
    () => mt(U, "selectedTextContainer$")
  ]);
  var Fn = oe(Xt);
  qe(
    Fn,
    (O, ue) => ({
      id: A() + "-smui-selected-text",
      class: O,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": A() + "-smui-label",
      ...ue
    }),
    [
      () => Fe({
        "mdc-select__selected-text": !0,
        [P()]: !0
      }),
      () => mt(U, "selectedText$")
    ]
  );
  var Pr = oe(Fn);
  He(Fn, (O, ue) => q == null ? void 0 : q(O, ue), R), He(Xt, (O, ue) => q == null ? void 0 : q(O, ue), H);
  var un = ye(Xt, 2);
  qe(un, (O, ue) => ({ class: O, ...ue }), [
    () => Fe({
      "mdc-select__dropdown-icon": !0,
      [N()]: !0
    }),
    () => mt(U, "dropdownIcon$")
  ]), He(un, (O, ue) => q == null ? void 0 : q(O, ue), re);
  var Vt = ye(un, 2);
  {
    var Vn = (O) => {
      {
        let ue = /* @__PURE__ */ be(() => mt(U, "ripple$"));
        Se(Fc(O, st(() => o(ue))), (ct) => F = ct, () => F);
      }
    };
    ne(Vt, (O) => {
      f() !== "outlined" && d() && O(Vn);
    });
  }
  Se(tt, (O) => Ie = O, () => Ie), He(tt, (O, ue) => q == null ? void 0 : q(O, ue), C);
  var Hr = ye(tt, 2);
  {
    let O = /* @__PURE__ */ be(() => Fe({
      "mdc-select__menu": !0,
      ...we,
      [k()]: !0
    })), ue = /* @__PURE__ */ be(() => mt(U, "menu$"));
    Mp(Hr, st(
      {
        get class() {
          return o(O);
        },
        get id() {
          return o(Ae);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(Z);
        },
        get anchorCorner() {
          return o(te);
        }
      },
      () => o(ue),
      {
        onSMUIMenuSelected: (ct) => {
          var wt;
          o(D) && o(D).handleMenuItemAction(ct.detail.index), (wt = e.onSMUIMenuSelected) == null || wt.call(e, ct);
        },
        onSMUIMenuSurfaceClosing: (ct) => {
          var wt;
          o(D) && o(D).handleMenuClosing(), (wt = e.onSMUIMenuSurfaceClosing) == null || wt.call(e, ct);
        },
        onSMUIMenuSurfaceClosed: (ct) => {
          var wt;
          o(D) && o(D).handleMenuClosed(), (wt = e.onSMUIMenuSurfaceClosed) == null || wt.call(e, ct);
        },
        onSMUIMenuSurfaceOpened: (ct) => {
          var wt;
          o(D) && o(D).handleMenuOpened(), (wt = e.onSMUIMenuSurfaceOpened) == null || wt.call(e, ct);
        },
        get open() {
          return o(he);
        },
        set open(ct) {
          z(he, ct, !0);
        },
        children: (ct, wt) => {
          {
            let er = /* @__PURE__ */ be(() => mt(U, "list$"));
            Dp(ct, st(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Ne);
                }
              },
              () => o(er),
              {
                get selectedIndex() {
                  return o(ce);
                },
                set selectedIndex(tr) {
                  z(ce, tr, !0);
                },
                children: (tr, ea) => {
                  var vi = ee(), Nr = W(vi);
                  Ee(Nr, () => e.children ?? me), w(tr, vi);
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
  Se(Ze, (O) => Q = O, () => Q), He(Ze, (O, ue) => Yt == null ? void 0 : Yt(O, ue), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ie,
    removeClass: ve,
    addStyle: G
  })), He(Ze, (O, ue) => Zs == null ? void 0 : Zs(O, ue), () => ({ addClass: ie, removeClass: ve })), He(Ze, (O, ue) => q == null ? void 0 : q(O, ue), c);
  var Ds = ye(Ze, 2);
  {
    var gd = (O) => {
      {
        let ue = /* @__PURE__ */ be(() => mt(U, "helperText$"));
        Fp(O, st(() => o(ue), {
          children: (ct, wt) => {
            var er = ee(), tr = W(er);
            Ee(tr, () => e.helperText ?? me), w(ct, er);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ne(Ds, (O) => {
      e.helperText && O(gd);
    });
  }
  Le(() => rt(Pr, n())), w(t, Xe);
  var bd = Ce(Ve);
  return i(), bd;
}
function Wp(t, e) {
  xe(e, !0);
  const n = () => Kn(d, "$selectedValue", r), [r, i] = dr();
  let a = g(e, "use", 19, () => []);
  g(e, "class", 3, "");
  let s = g(e, "value", 3, ""), c = /* @__PURE__ */ Ke(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), u;
  const l = fe("SMUI:select:selectedText"), d = fe("SMUI:select:value");
  ae("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ be(() => s() != null && s() !== "" && n() === s());
  ot(f), Ln(f);
  function f() {
    o(h) && u && ri(l, u.getPrimaryText());
  }
  function m() {
    return u.getElement();
  }
  var v = { getElement: m };
  Se(
    Up(t, st(
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
          var E = ee(), I = W(E);
          Ee(I, () => e.children ?? me), w(b, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (b) => u = b,
    () => u
  );
  var p = Ce(v);
  return i(), p;
}
function Xp(t, e) {
  xe(e, !0);
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
      var f = ee(), m = W(f);
      Nn(m, 17, n, Ai, (v, p, b) => {
        {
          let y = /* @__PURE__ */ be(() => l(b));
          Wp(v, {
            get onclick() {
              return o(y);
            },
            get value() {
              return o(p).value;
            },
            children: (E, I) => {
              var _ = Dt();
              Le(() => rt(_, o(p).label)), w(E, _);
            },
            $$slots: { default: !0 }
          });
        }
      }), w(d, f);
    },
    $$slots: { default: !0 }
  }), Ce();
}
const Kp = en([]);
Kp.subscribe;
_e({ freeze: !1 });
var Zp = /* @__PURE__ */ le("<div><!></div>");
function Yp(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "variant", 3, "raised"), a = g(e, "square", 3, !1), s = g(e, "color", 3, "default"), c = g(e, "elevation", 3, 1), u = g(e, "transition", 3, !1), l = /* @__PURE__ */ Ke(e, [
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
    () => Fe({
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
  var v = oe(m);
  return Ee(v, () => e.children ?? me), Se(m, (p) => d = p, () => d), He(m, (p, b) => q == null ? void 0 : q(p, b), n), w(t, m), Ce(f);
}
const Ut = [];
for (let t = 0; t < 256; ++t)
  Ut.push((t + 256).toString(16).slice(1));
function Qp(t, e = 0) {
  return (Ut[t[e + 0]] + Ut[t[e + 1]] + Ut[t[e + 2]] + Ut[t[e + 3]] + "-" + Ut[t[e + 4]] + Ut[t[e + 5]] + "-" + Ut[t[e + 6]] + Ut[t[e + 7]] + "-" + Ut[t[e + 8]] + Ut[t[e + 9]] + "-" + Ut[t[e + 10]] + Ut[t[e + 11]] + Ut[t[e + 12]] + Ut[t[e + 13]] + Ut[t[e + 14]] + Ut[t[e + 15]]).toLowerCase();
}
let Ys;
const Jp = new Uint8Array(16);
function $p() {
  if (!Ys) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Ys = crypto.getRandomValues.bind(crypto);
  }
  return Ys(Jp);
}
const eg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Kl = { randomUUID: eg };
function jr(t, e, n) {
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
var tg = /* @__PURE__ */ le('<span class="oscd-icon"><!></span>');
function Jn(t, e) {
  var n = tg(), r = oe(n);
  Ee(r, () => e.children ?? me), w(t, n);
}
var ng = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function rg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = ng();
      Le(() => Ft(a, n())), w(r, a);
    }
  });
}
var ig = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function zc(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = ig();
      Le(() => Ft(a, n())), w(r, a);
    }
  });
}
var ag = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function sg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = ag();
      Le(() => Ft(a, n())), w(r, a);
    }
  });
}
var og = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function lg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = og();
      Le(() => Ft(a, n())), w(r, a);
    }
  });
}
var ug = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function cg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = ug();
      Le(() => Ft(a, n())), w(r, a);
    }
  });
}
var dg = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function fg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = dg();
      Le(() => Ft(a, n())), w(r, a);
    }
  });
}
var hg = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function vg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = hg();
      Le(() => Ft(a, n())), w(r, a);
    }
  });
}
var mg = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function pg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = mg();
      Le(() => Ft(a, n())), w(r, a);
    }
  });
}
Kd();
var gg = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function bg(t, e) {
  let n = g(e, "svgStyles", 3, "");
  Jn(t, {
    children: (r, i) => {
      var a = gg();
      Le(() => Ft(a, n())), w(r, a);
    }
  });
}
var _g = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function yg(t, e) {
  let n = g(e, "svgStyles", 8, "");
  Jn(t, {
    children: (r, i) => {
      var a = _g();
      Le(() => Ft(a, n())), w(r, a);
    }
  });
}
function Ig(t, e) {
  e(t.target.value);
}
var Eg = /* @__PURE__ */ le('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Ag(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = Eg(), a = oe(i);
  a.__change = [Ig, r];
  var s = ye(a, 2), c = oe(s);
  Le(() => rt(c, n())), _a(a, r), w(t, i), Ce();
}
wn(["change"]);
function Sg(t, e) {
  e(t.target.value);
}
var xg = /* @__PURE__ */ le('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Cg(t, e) {
  xe(e, !0);
  let n = g(e, "label", 3, ""), r = g(e, "value", 15, "");
  var i = xg(), a = oe(i);
  a.__change = [Sg, r];
  var s = ye(a, 2), c = oe(s);
  Le(() => rt(c, n())), _a(a, r), w(t, i), Ce();
}
wn(["change"]);
var Tg = /* @__PURE__ */ le('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function Wc(t, e) {
  xe(e, !0);
  let n = g(e, "title", 3, ""), r = g(e, "open", 11, !1);
  Yp(t, {
    children: (i, a) => {
      var s = Tg(), c = oe(s), u = oe(c), l = ye(c, 2), d = oe(l);
      Ee(d, () => e.content ?? me), Le(() => {
        s.open = r(), rt(u, n());
      }), w(i, s);
    },
    $$slots: { default: !0 }
  }), Ce();
}
function wg(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Lg = /* @__PURE__ */ le('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function hs(t, e) {
  xe(e, !0);
  let n = g(e, "content", 3, ""), r = g(e, "side", 3, "top"), i = g(e, "hoverDelay", 3, 0), a = g(e, "transitionDuration", 3, 80), s = g(e, "disabled", 3, !1);
  const c = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ ge(null), l = /* @__PURE__ */ ge(null), d = /* @__PURE__ */ ge(null), h = /* @__PURE__ */ ge(null), f = /* @__PURE__ */ ge(!1), m = /* @__PURE__ */ ge(null), v = /* @__PURE__ */ ge(null);
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
  function I() {
    p();
  }
  function _() {
    b();
  }
  function A() {
    if (!o(l) || !o(h) || !o(u) || s()) return;
    const S = o(u).getBoundingClientRect(), H = o(h).getBoundingClientRect();
    let X = 0, R = 0;
    const P = 8;
    switch (r()) {
      case "top":
        X = S.top - H.height - P, R = S.left + S.width / 2 - H.width / 2;
        break;
      case "bottom":
        X = S.bottom + P, R = S.left + S.width / 2 - H.width / 2;
        break;
      case "left":
        X = S.top + S.height / 2 - H.height / 2, R = S.left - H.width - P;
        break;
      case "right":
        X = S.top + S.height / 2 - H.height / 2, R = S.right + P;
        break;
    }
    o(l).style.top = `${X + window.scrollY}px`, o(l).style.left = `${R + window.scrollX}px`;
  }
  function x() {
    var S;
    (S = o(v)) == null || S.disconnect(), z(v, null), o(l) && o(l).parentNode && o(l).parentNode.removeChild(o(l)), z(l, null), z(h, null), z(d, null), o(m) && clearTimeout(o(m));
  }
  Ln(x), Te(() => {
    if (!(!o(f) || !n() || s())) {
      if (!o(l)) {
        z(l, document.createElement("div"), !0), o(l).style.position = "absolute", o(l).style.zIndex = "9999", o(l).style.pointerEvents = "none", o(l).style.opacity = "0", o(l).style.transition = `opacity ${a()}ms ease`, o(l).id = c, o(l).setAttribute("role", "tooltip"), document.body.appendChild(o(l)), z(d, o(l).attachShadow({ mode: "open" }), !0);
        const S = document.createElement("style");
        S.textContent = `
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
      `, o(d).appendChild(S), z(h, document.createElement("div"), !0), o(d).appendChild(o(h)), z(
          v,
          new MutationObserver(() => {
            o(f) && A();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = n()), o(l) && (o(l).style.opacity = "1", A());
    }
  }), Te(() => {
    if (o(f) || !o(l))
      return;
    o(l).style.opacity = "0";
    const S = o(l), H = setTimeout(
      () => {
        S && S.parentNode && S.parentNode.removeChild(S), o(l) === S && x();
      },
      a()
    );
    return () => clearTimeout(H);
  });
  var T = Lg();
  T.__keydown = [wg, n, p, b];
  var C = oe(T);
  Ee(C, () => e.children ?? me), Se(T, (S) => z(u, S), () => o(u)), Le(() => {
    Sr(T, "aria-describedby", n() && !s() ? c : void 0), Sr(T, "aria-haspopup", n() ? "true" : void 0), Sr(T, "aria-expanded", n() ? o(f) ? "true" : "false" : void 0);
  }), fa("mouseenter", T, y), fa("mouseleave", T, E), fa("focus", T, I), fa("blur", T, _), w(t, T), Ce();
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
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
          var i = yn.TRANSITION_STATE_UNCHECKED, a = la.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = yn.TRANSITION_STATE_INDETERMINATE, r = yn.TRANSITION_STATE_CHECKED, i = yn.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = yn.TRANSITION_STATE_INIT, a = yn.TRANSITION_STATE_CHECKED, s = yn.TRANSITION_STATE_UNCHECKED, c = e.cssClasses, u = c.ANIM_UNCHECKED_CHECKED, l = c.ANIM_UNCHECKED_INDETERMINATE, d = c.ANIM_CHECKED_UNCHECKED, h = c.ANIM_CHECKED_INDETERMINATE, f = c.ANIM_INDETERMINATE_CHECKED, m = c.ANIM_INDETERMINATE_UNCHECKED;
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
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(yn.ARIA_CHECKED_ATTR, yn.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(yn.ARIA_CHECKED_ATTR);
    }, e;
  }(Wt)
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
var pn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, Dn = {
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
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return pn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Dn;
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
      this.determinate = !this.adapter.hasClass(pn.INDETERMINATE_CLASS), this.adapter.addClass(pn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var s = Pt(r), c = s.next(); !c.done; c = s.next()) {
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
        this.adapter.removeClass(pn.INDETERMINATE_CLASS), this.adapter.setAttribute(Dn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Dn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Dn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(pn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Dn.ARIA_VALUENOW), this.adapter.removeAttribute(Dn.ARIA_VALUEMAX), this.adapter.removeAttribute(Dn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(Dn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(pn.CLOSED_CLASS), this.adapter.removeClass(pn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Dn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(pn.CLOSED_CLASS), this.adapter.setAttribute(Dn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(pn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(pn.CLOSED_CLASS) && this.adapter.addClass(pn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(pn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(pn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? xp(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Dn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ua.PRIMARY_HALF, i = n * ua.PRIMARY_FULL, a = n * ua.SECONDARY_QUARTER, s = n * ua.SECONDARY_HALF, c = n * ua.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", c + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -c + "px"), this.restartAnimation();
    }, e;
  }(Wt)
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
var ar = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Yl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Gr = {
  ARIA_SELECTED: Yl.ARIA_SELECTED,
  ARIA_SORT: Yl.ARIA_SORT
}, bn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(bn || (bn = {}));
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
    $e(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, ar.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, ar.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, Gr.ARIA_SORT, bn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, bn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, ar.HEADER_CELL_SORTED);
      var c = this.adapter.getAttributeByHeaderCellIndex(i, Gr.ARIA_SORT), u = bn.NONE;
      c === bn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, ar.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Gr.ARIA_SORT, bn.DESCENDING), u = bn.DESCENDING) : c === bn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, ar.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Gr.ARIA_SORT, bn.ASCENDING), u = bn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Gr.ARIA_SORT, bn.ASCENDING), u = bn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, u), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(ar.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(ar.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, ar.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Gr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, ar.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Gr.ARIA_SELECTED, "false"));
    }, e;
  }(Wt)
), Dg = /* @__PURE__ */ le('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Pg = /* @__PURE__ */ le("<div><div><table><!></table></div> <!> <!></div>");
function Hg(t, e) {
  xe(e, !0);
  const n = () => Kn(P, "$progressClosed", r), [r, i] = dr(), { closest: a } = Os;
  let s = g(e, "use", 19, () => []), c = g(e, "class", 3, ""), u = g(e, "stickyHeader", 3, !1), l = g(e, "sortable", 3, !1), d = g(e, "sort", 15, null), h = g(e, "sortDirection", 15, "ascending"), f = g(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = g(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = g(e, "container$use", 19, () => []), p = g(e, "container$class", 3, ""), b = g(e, "table$use", 19, () => []), y = g(e, "table$class", 3, ""), E = /* @__PURE__ */ Ke(e, [
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
  ]), I, _ = /* @__PURE__ */ ge(void 0), A, x = /* @__PURE__ */ ge(void 0), T = /* @__PURE__ */ ge(void 0), C = _e({}), S = /* @__PURE__ */ ge(_e({ height: "auto", top: "initial" })), H = fe("SMUI:addLayoutListener"), X, R = !1, P = en(!1), re = en(d());
  Te(() => {
    ri(re, d());
  });
  let N = en(h());
  Te(() => {
    ri(N, h());
  }), ae("SMUI:checkbox:context", "data-table"), ae("SMUI:linear-progress:context", "data-table"), ae("SMUI:linear-progress:closed", P), ae("SMUI:data-table:sortable", l()), ae("SMUI:data-table:sort", re), ae("SMUI:data-table:sortDirection", N), ae("SMUI:data-table:sortAscendingAriaLabel", f()), ae("SMUI:data-table:sortDescendingAriaLabel", m()), H && (X = H(pe));
  let k;
  Te(() => {
    e.progress && o(_) && k !== n() && (k = n(), n() ? o(_).hideProgress() : o(_).showProgress());
  }), ae("SMUI:checkbox:mount", () => {
    o(_) && R && o(_).layout();
  }), ae("SMUI:data-table:header:mount", (M) => {
    z(x, M, !0);
  }), ae("SMUI:data-table:header:unmount", () => {
    z(x, void 0);
  }), ae("SMUI:data-table:body:mount", (M) => {
    z(T, M, !0);
  }), ae("SMUI:data-table:body:unmount", () => {
    z(T, void 0);
  }), ot(() => (z(
    _,
    new Mg({
      addClass: j,
      removeClass: Q,
      getHeaderCellElements: () => {
        var M;
        return ((M = o(x)) == null ? void 0 : M.cells.map((F) => F.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var M;
        return ((M = o(x)) == null ? void 0 : M.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (M, F) => {
        var se;
        return ((se = o(x)) == null ? void 0 : se.orderedCells[M].getAttr(F)) ?? null;
      },
      setAttributeByHeaderCellIndex: (M, F, se) => {
        var Re;
        (Re = o(x)) == null || Re.orderedCells[M].addAttr(F, se);
      },
      setClassNameByHeaderCellIndex: (M, F) => {
        var se;
        (se = o(x)) == null || se.orderedCells[M].addClass(F);
      },
      removeClassNameByHeaderCellIndex: (M, F) => {
        var se;
        (se = o(x)) == null || se.orderedCells[M].removeClass(F);
      },
      notifySortAction: (M) => {
        d(M.columnId), h(M.sortValue), Qe(ce(), "SMUIDataTableSorted", M);
      },
      getTableContainerHeight: () => A.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const M = ce().querySelector(".mdc-data-table__header-row");
        if (!M)
          throw new Error("MDCDataTable: Table header element not found.");
        return M.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (M) => {
        z(S, M, !0);
      },
      addClassAtRowIndex: (M, F) => {
        var se;
        (se = o(T)) == null || se.orderedRows[M].addClass(F);
      },
      getRowCount: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.length) ?? 0;
      },
      getRowElements: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.map((F) => F.element)) ?? [];
      },
      getRowIdAtIndex: (M) => {
        var F;
        return ((F = o(T)) == null ? void 0 : F.orderedRows[M].rowId) ?? null;
      },
      getRowIndexByChildElement: (M) => {
        var F;
        return ((F = o(T)) == null ? void 0 : F.orderedRows.map((se) => se.element).indexOf(a(M, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var M;
        return ((M = o(T)) == null ? void 0 : M.rows.filter((F) => F.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (M) => {
        var se;
        const F = (se = o(T)) == null ? void 0 : se.orderedRows[M].checkbox;
        return F ? F.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var F;
        const M = (F = o(x)) == null ? void 0 : F.checkbox;
        return M ? M.checked : !1;
      },
      isRowsSelectable: () => !!ce().querySelector(".mdc-data-table__row-checkbox") || !!ce().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (M) => {
        var se;
        const F = (se = o(T)) == null ? void 0 : se.orderedRows[M.rowIndex];
        F && Qe(ce(), "SMUIDataTableSelectionChanged", {
          row: F.element,
          rowId: F.rowId,
          rowIndex: M.rowIndex,
          selected: M.selected
        });
      },
      notifySelectedAll: () => {
        D(!1), Qe(ce(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        D(!1), Qe(ce(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (M) => Qe(ce(), "SMUIDataTableClickRow", M),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (M, F) => {
        var se;
        (se = o(T)) == null || se.orderedRows[M].removeClass(F);
      },
      setAttributeAtRowIndex: (M, F, se) => {
        var Re;
        (Re = o(T)) == null || Re.orderedRows[M].addAttr(F, se);
      },
      setHeaderRowCheckboxChecked: (M) => {
        var se;
        const F = (se = o(x)) == null ? void 0 : se.checkbox;
        F && (F.checked = M);
      },
      setHeaderRowCheckboxIndeterminate: D,
      setRowCheckboxCheckedAtIndex: (M, F) => {
        var Re;
        const se = (Re = o(T)) == null ? void 0 : Re.orderedRows[M].checkbox;
        se && (se.checked = F);
      },
      setSortStatusLabelByHeaderCellIndex: (M, F) => {
      }
    }),
    !0
  ), o(_).init(), o(_).layout(), R = !0, () => {
    var M;
    (M = o(_)) == null || M.destroy();
  })), Ln(() => {
    X && X();
  });
  function U(M) {
    o(_) && o(_).handleRowCheckboxChange(M);
  }
  function j(M) {
    C[M] || (C[M] = !0);
  }
  function Q(M) {
    (!(M in C) || C[M]) && (C[M] = !1);
  }
  function D(M) {
    var se;
    const F = (se = o(x)) == null ? void 0 : se.checkbox;
    F && (F.indeterminate = M);
  }
  function L(M) {
    if (!o(_) || !M.detail.target)
      return;
    const F = a(M.detail.target, ".mdc-data-table__header-cell--with-sort");
    F && Ie(F);
  }
  function B(M) {
    if (!o(_) || !M.detail.target)
      return;
    const F = a(M.detail.target, ".mdc-data-table__row");
    F && o(_) && o(_).handleRowClick({ rowId: M.detail.rowId, row: F });
  }
  function Ie(M) {
    var lt, yt;
    const F = ((lt = o(x)) == null ? void 0 : lt.orderedCells) ?? [], se = F.map((pt) => pt.element).indexOf(M);
    if (se === -1)
      return;
    const Re = F[se].columnId ?? null;
    (yt = o(_)) == null || yt.handleSortAction({ columnId: Re, columnIndex: se, headerCell: M });
  }
  function pe() {
    var M;
    return (M = o(_)) == null ? void 0 : M.layout();
  }
  function ce() {
    return I;
  }
  var Ae = { layout: pe, getElement: ce }, V = Pg(), J = (M) => {
    var F;
    o(_) && o(_).handleHeaderRowCheckboxChange(), (F = e.onSMUIDataTableHeaderCheckboxChange) == null || F.call(e, M);
  }, K = (M) => {
    var F;
    L(M), (F = e.onSMUIDataTableHeaderClick) == null || F.call(e, M);
  }, he = (M) => {
    var F;
    B(M), (F = e.onSMUIDataTableRowClick) == null || F.call(e, M);
  }, we = (M) => {
    var F;
    U(M), (F = e.onSMUIDataTableBodyCheckboxChange) == null || F.call(e, M);
  };
  qe(
    V,
    (M, F) => ({
      class: M,
      ...F,
      onSMUIDataTableHeaderCheckboxChange: J,
      onSMUIDataTableHeaderClick: K,
      onSMUIDataTableRowClick: he,
      onSMUIDataTableBodyCheckboxChange: we
    }),
    [
      () => Fe({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": u(),
        ...C,
        [c()]: !0
      }),
      () => qi(E, ["container$", "table$"])
    ]
  );
  var Z = oe(V);
  qe(Z, (M, F) => ({ class: M, ...F }), [
    () => Fe({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => mt(E, "container$")
  ]);
  var te = oe(Z);
  qe(te, (M, F) => ({ class: M, ...F }), [
    () => Fe({ "mdc-data-table__table": !0, [y()]: !0 }),
    () => mt(E, "table$")
  ]);
  var Ne = oe(te);
  Ee(Ne, () => e.children ?? me), He(te, (M, F) => q == null ? void 0 : q(M, F), b), Se(Z, (M) => A = M, () => A), He(Z, (M, F) => q == null ? void 0 : q(M, F), v);
  var Oe = ye(Z, 2);
  {
    var ze = (M) => {
      var F = Dg(), se = ye(oe(F), 2);
      Ee(se, () => e.progress ?? me), Le((Re) => Ft(F, Re), [
        () => Object.entries(o(S)).map(([Re, lt]) => `${Re}: ${lt};`).join(" ")
      ]), w(M, F);
    };
    ne(Oe, (M) => {
      e.progress && M(ze);
    });
  }
  var et = ye(Oe, 2);
  Ee(et, () => e.paginate ?? me), Se(V, (M) => I = M, () => I), He(V, (M, F) => q == null ? void 0 : q(M, F), s), w(t, V);
  var Be = Ce(Ae);
  return i(), Be;
}
var Ng = /* @__PURE__ */ le("<thead><!></thead>");
function Ug(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = /* @__PURE__ */ Ke(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ ge(void 0), s = [];
  const c = /* @__PURE__ */ new WeakMap();
  ae("SMUI:data-table:row:header", !0);
  const u = fe("SMUI:checkbox:mount");
  ae("SMUI:checkbox:mount", (y) => {
    z(a, y, !0), u && u(y);
  });
  const l = fe("SMUI:checkbox:unmount");
  ae("SMUI:checkbox:unmount", (y) => {
    z(a, void 0), l && l(y);
  }), ae("SMUI:data-table:cell:mount", (y) => {
    s.push(y), c.set(y.element, y);
  }), ae("SMUI:data-table:cell:unmount", (y) => {
    const E = s.findIndex((I) => I === y);
    E !== -1 && s.splice(E, 1), c.delete(y.element);
  });
  const d = fe("SMUI:data-table:header:mount"), h = fe("SMUI:data-table:header:unmount");
  ot(() => {
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
  var b = oe(p);
  return Ee(b, () => e.children ?? me), Se(p, (y) => i = y, () => i), He(p, (y, E) => q == null ? void 0 : q(y, E), n), w(t, p), Ce(v);
}
var kg = /* @__PURE__ */ le("<tbody><!></tbody>");
function Bg(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = /* @__PURE__ */ Ke(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const c = /* @__PURE__ */ new WeakMap();
  ae("SMUI:data-table:row:header", !1), ae("SMUI:data-table:row:mount", (p) => {
    s.push(p), c.set(p.element, p);
  }), ae("SMUI:data-table:row:unmount", (p) => {
    const b = s.findIndex((y) => y === p);
    b !== -1 && s.splice(b, 1), c.delete(p.element);
  });
  const u = fe("SMUI:data-table:body:mount"), l = fe("SMUI:data-table:body:unmount");
  ot(() => {
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
    () => Fe({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = oe(m);
  return Ee(v, () => e.children ?? me), Se(m, (p) => a = p, () => a), He(m, (p, b) => q == null ? void 0 : q(p, b), n), w(t, m), Ce(f);
}
let Fg = 0;
var Vg = /* @__PURE__ */ le("<tr><!></tr>");
function Wa(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "rowId", 19, () => "SMUI-data-table-row-" + Fg++), a = /* @__PURE__ */ Ke(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, c = /* @__PURE__ */ ge(void 0), u = _e({}), l = _e({}), d = fe("SMUI:data-table:row:header");
  const h = fe("SMUI:checkbox:mount");
  ae("SMUI:checkbox:mount", (H) => {
    z(c, H, !0), h && h(H);
  });
  const f = fe("SMUI:checkbox:unmount");
  ae("SMUI:checkbox:unmount", (H) => {
    z(c, void 0), f && f(H);
  });
  const m = fe("SMUI:data-table:row:mount"), v = fe("SMUI:data-table:row:unmount");
  ot(() => {
    const H = d ? {
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
      getAttr: y,
      addAttr: E
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
    return H in l ? l[H] ?? null : A().getAttribute(H);
  }
  function E(H, X) {
    l[H] !== X && (l[H] = X);
  }
  function I(H) {
    Qe(A(), "SMUIDataTableHeaderClick", H);
  }
  function _(H) {
    Qe(A(), "SMUIDataTableRowClick", { rowId: i(), target: H.target });
  }
  function A() {
    return s;
  }
  var x = { getElement: A }, T = Vg(), C = (H) => {
    var X;
    d ? I(H) : _(H), (X = e.onclick) == null || X.call(e, H);
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
      () => Fe({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(c) && o(c).checked,
        ...u,
        [r()]: !0
      })
    ]
  );
  var S = oe(T);
  return Ee(S, () => e.children ?? me), Se(T, (H) => s = H, () => s), He(T, (H, X) => q == null ? void 0 : q(H, X), n), w(t, T), Ce(x);
}
let Gg = 0;
var jg = /* @__PURE__ */ le('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), qg = /* @__PURE__ */ le("<th><!></th>"), zg = /* @__PURE__ */ le("<td><!></td>");
function ca(t, e) {
  xe(e, !0);
  const n = () => Kn(y, "$sort", i), r = () => Kn(E, "$sortDirection", i), [i, a] = dr();
  let s = fe("SMUI:data-table:row:header"), c = g(e, "use", 19, () => []), u = g(e, "class", 3, ""), l = g(e, "numeric", 3, !1), d = g(e, "checkbox", 3, !1), h = g(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Gg++ : "SMUI-data-table-unused"), f = g(e, "sortable", 19, () => fe("SMUI:data-table:sortable")), m = /* @__PURE__ */ Ke(e, [
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
  ]), v, p = _e({}), b = _e({}), y = fe("SMUI:data-table:sort"), E = fe("SMUI:data-table:sortDirection"), I = fe("SMUI:data-table:sortAscendingAriaLabel"), _ = fe("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ae("SMUI:label:context", "data-table:sortable-header-cell"), ae("SMUI:icon-button:context", "data-table:sortable-header-cell"), ae("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const A = fe("SMUI:data-table:cell:mount"), x = fe("SMUI:data-table:cell:unmount");
  ot(() => {
    const D = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return P();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: C,
      getAttr: S,
      addAttr: H
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return P();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: C,
      getAttr: S,
      addAttr: H
    };
    return A && A(D), () => {
      x && x(D);
    };
  });
  function T(D) {
    p[D] || (p[D] = !0);
  }
  function C(D) {
    (!(D in p) || p[D]) && (p[D] = !1);
  }
  function S(D) {
    return D in b ? b[D] ?? null : P().getAttribute(D);
  }
  function H(D, L) {
    b[D] !== L && (b[D] = L);
  }
  function X(D) {
    Qe(P(), "SMUIDataTableHeaderCheckboxChange", D);
  }
  function R(D) {
    Qe(P(), "SMUIDataTableBodyCheckboxChange", D);
  }
  function P() {
    return v;
  }
  var re = { getElement: P }, N = ee(), k = W(N);
  {
    var U = (D) => {
      var L = qg(), B = (Ae) => {
        var V;
        d() && X(Ae), (V = e.onchange) == null || V.call(e, Ae);
      };
      qe(
        L,
        (Ae) => ({
          class: Ae,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...b,
          ...m,
          onchange: B
        }),
        [
          () => Fe({
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
      var Ie = oe(L);
      {
        var pe = (Ae) => {
          var V = jg(), J = oe(V);
          Ee(J, () => e.children ?? me);
          var K = ye(J, 2), he = oe(K);
          Le(() => {
            Sr(K, "id", `${h() ?? ""}-status-label`), rt(he, n() === h() ? r() === "ascending" ? I : _ : "");
          }), w(Ae, V);
        }, ce = (Ae) => {
          var V = ee(), J = W(V);
          Ee(J, () => e.children ?? me), w(Ae, V);
        };
        ne(Ie, (Ae) => {
          f() ? Ae(pe) : Ae(ce, !1);
        });
      }
      Se(L, (Ae) => v = Ae, () => v), He(L, (Ae, V) => q == null ? void 0 : q(Ae, V), c), w(D, L);
    }, j = (D) => {
      var L = zg(), B = (pe) => {
        var ce;
        d() && R(pe), (ce = e.onchange) == null || ce.call(e, pe);
      };
      qe(
        L,
        (pe) => ({
          class: pe,
          ...b,
          ...m,
          onchange: B
        }),
        [
          () => Fe({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": l(),
            "mdc-data-table__cell--checkbox": d(),
            ...p,
            [u()]: !0
          })
        ]
      );
      var Ie = oe(L);
      Ee(Ie, () => e.children ?? me), Se(L, (pe) => v = pe, () => v), He(L, (pe, ce) => q == null ? void 0 : q(pe, ce), c), w(D, L);
    };
    ne(k, (D) => {
      s ? D(U) : D(j, !1);
    });
  }
  w(t, N);
  var Q = Ce(re);
  return a(), Q;
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
    $e(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
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
  }(Wt)
);
let Zg = 0;
var Yg = /* @__PURE__ */ le("<div><!> <label><!></label></div>");
function Qg(t, e) {
  xe(e, !0);
  let n = g(e, "use", 19, () => []), r = g(e, "class", 3, ""), i = g(e, "align", 3, "start"), a = g(e, "noWrap", 3, !1), s = g(e, "inputId", 19, () => "SMUI-form-field-" + Zg++), c = g(e, "label$use", 19, () => []), u = /* @__PURE__ */ Ke(e, [
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
  ]), l, d = /* @__PURE__ */ ge(void 0), h = new Qi(), f, m = /* @__PURE__ */ ge(void 0);
  ae("SMUI:generic:input:props", { id: s() }), ae("SMUI:generic:input:mount", (_) => {
    z(m, _, !0);
  }), ae("SMUI:generic:input:unmount", () => {
    z(m, void 0);
  }), ot(() => (z(
    d,
    new Kg({
      activateInputRipple: () => {
        o(m) && o(m).activateRipple();
      },
      deactivateInputRipple: () => {
        o(m) && o(m).deactivateRipple();
      },
      deregisterInteractionHandler: (_, A) => h.off(f, _, A),
      registerInteractionHandler: (_, A) => h.on(f, _, A)
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
  qe(b, (_, A) => ({ class: _, ...A }), [
    () => Fe({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => qi(u, ["label$"])
  ]);
  var y = oe(b);
  Ee(y, () => e.children ?? me);
  var E = ye(y, 2);
  qe(E, (_) => ({ for: s(), ..._ }), [() => mt(u, "label$")]);
  var I = oe(E);
  return Ee(I, () => e.label ?? me), Se(E, (_) => f = _, () => f), He(E, (_, A) => q == null ? void 0 : q(_, A), c), Se(b, (_) => l = _, () => l), He(b, (_, A) => q == null ? void 0 : q(_, A), n), w(t, b), Ce(p);
}
wn(["click"]);
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
var Xa, Ql = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Xa = {}, So(Xa, Ql.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), So(Xa, Ql.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
function $g(t) {
  return t * t * t;
}
function Xc(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function eb(t, { from: e, to: n }, r = {}) {
  var { delay: i = 0, duration: a = (x) => Math.sqrt(x) * 120, easing: s = Xc } = r, c = getComputedStyle(t), u = c.transform === "none" ? "" : c.transform, [l, d] = c.transformOrigin.split(" ").map(parseFloat);
  l /= t.clientWidth, d /= t.clientHeight;
  var h = tb(t), f = t.clientWidth / n.width / h, m = t.clientHeight / n.height / h, v = e.left + e.width * l, p = e.top + e.height * d, b = n.left + n.width * l, y = n.top + n.height * d, E = (v - b) * f, I = (p - y) * m, _ = e.width / n.width, A = e.height / n.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(E * E + I * I)) : a,
    easing: s,
    css: (x, T) => {
      var C = T * E, S = T * I, H = x + T * _, X = x + T * A;
      return `transform: ${u} translate(${C}px, ${S}px) scale(${H}, ${X});`;
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
function vs(t, { delay: e = 0, duration: n = 400, easing: r = nb, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
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
wn([
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
var ib = /* @__PURE__ */ le('<div class="detail svelte-4xu36c"> </div>'), ab = /* @__PURE__ */ le('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function sb(t, e) {
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
  var a = ab(), s = oe(a), c = oe(s);
  Io(c, {
    class: "material-icons",
    children: (p, b) => {
      var y = Dt();
      Le(() => rt(y, r[e.type])), w(p, y);
    },
    $$slots: { default: !0 }
  });
  var u = ye(s, 2), l = oe(u), d = oe(l), h = ye(l, 2);
  {
    var f = (p) => {
      var b = ib(), y = oe(b);
      Le(() => rt(y, e.detail)), w(p, b);
    };
    ne(h, (p) => {
      e.detail && p(f);
    });
  }
  var m = ye(u, 2);
  m.__click = [rb, n];
  var v = oe(m);
  Io(v, {
    class: "material-icons",
    children: (p, b) => {
      var y = Dt("close");
      w(p, y);
    },
    $$slots: { default: !0 }
  }), Le(() => {
    Ft(a, `--color:${i[e.type] ?? ""}`), rt(d, e.summary);
  }), os(1, a, () => vs, () => ({ x: 0, y: 30, duration: 150, easing: $g })), os(2, a, () => vs, () => ({ x: 50, y: 0, duration: 150, easing: Xc })), w(t, a), Ce();
}
wn(["click"]);
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
const Ea = lb();
var ub = /* @__PURE__ */ le("<div><!></div>"), cb = /* @__PURE__ */ le('<div class="toast-host svelte-11vwiay"></div>');
function db(t, e) {
  xe(e, !1);
  const n = Ea.toasts;
  eh();
  var r = cb();
  Nn(r, 13, () => n.items, (i) => i.id, (i, a) => {
    var s = ub(), c = oe(s);
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
      onClose: () => Ea.remove(o(a).id)
    }), Jf(s, () => eb, null), w(i, s);
  }), w(t, r), Ce();
}
var fb = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, hb = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, vb = /* @__PURE__ */ le('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), mb = /* @__PURE__ */ le('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), pb = /* @__PURE__ */ le('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function gb(t, e) {
  xe(e, !0);
  let n = /* @__PURE__ */ be(() => !!e.value);
  var r = pb();
  r.__click = [fb, e];
  var i = oe(r), a = oe(i);
  {
    var s = (f) => {
      hs(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, v) => {
          var p = vb();
          p.__click = [hb, e];
          var b = oe(p);
          zc(b, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), w(m, p);
        },
        $$slots: { default: !0 }
      });
    }, c = (f) => {
      hs(f, {
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
    ne(a, (f) => {
      o(n) ? f(s) : f(c, !1);
    });
  }
  var u = ye(i, 2), l = oe(u), d = ye(u, 2);
  {
    var h = (f) => {
      var m = mb(), v = ye(W(m), 2), p = oe(v), b = ye(v, 2), y = oe(b);
      bg(y, { svgStyles: "fill: gray;" }), Le(() => rt(p, e.value)), w(f, m);
    };
    ne(d, (f) => {
      o(n) && f(h);
    });
  }
  Le(() => {
    Uo(r, 1, `filter-badge ${o(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), rt(l, e.label);
  }), w(t, r), Ce();
}
wn(["click"]);
var bb = /* @__PURE__ */ le('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function _b(t, e) {
  xe(e, !0);
  let n = () => {
  };
  function r(Z) {
    return Z === n;
  }
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), c = g(e, "disabled", 15, !1), u = g(e, "touch", 3, !1), l = g(e, "indeterminate", 15, n), d = g(e, "group", 11, n), h = g(e, "checked", 15, n), f = g(e, "value", 3, null), m = g(e, "valueKey", 3, n), v = g(e, "input$use", 19, () => []), p = g(e, "input$class", 3, ""), b = /* @__PURE__ */ Ke(e, [
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
  ]), y, E = /* @__PURE__ */ ge(void 0), I = /* @__PURE__ */ ge(void 0), _ = _e({}), A = _e({}), x = _e({}), T = /* @__PURE__ */ ge(!1), C = _e(fe("SMUI:generic:input:props") ?? {}), S = /* @__PURE__ */ ge(_e(r(d()) ? r(h()) ? !1 : !!h() : d().findIndex((Z) => Z === f()) !== -1)), H = fe("SMUI:checkbox:context"), X = fe("SMUI:data-table:row:header"), R = h(), P = r(d()) ? [] : [...d()], re = o(S);
  Te(() => {
    let Z = !1;
    if (!r(d()))
      if (re !== o(S)) {
        const te = d().findIndex((Ne) => Ne === f());
        o(S) && te === -1 ? d().push(f()) : !o(S) && te !== -1 && d().splice(te, 1), Z = !0;
      } else {
        const te = P.findIndex((Oe) => Oe === f()), Ne = d().findIndex((Oe) => Oe === f());
        te > -1 && Ne === -1 ? (z(S, !1), Z = !0) : Ne > -1 && te === -1 && (z(S, !0), Z = !0);
      }
    r(h()) ? re !== o(S) && (Z = !0) : (h() !== (l() ? null : o(S)) || o(S) !== re) && (h() === R && o(S) !== re ? (h(o(S)), r(l()) || l(!1)) : z(S, !!h()), Z = !0), o(I) && (r(l()) ? o(I).indeterminate && (o(I).indeterminate = !1, Z = !0) : !l() && o(I).indeterminate ? (o(I).indeterminate = !1, Z = !0) : l() && !o(I).indeterminate && (o(I).indeterminate = !0, z(S, !1), Z = !0)), R = h(), P = r(d()) ? [] : [...d()], re = o(S), Z && o(E) && o(E).handleChange();
  });
  const N = fe("SMUI:generic:input:mount"), k = fe("SMUI:generic:input:unmount"), U = fe("SMUI:checkbox:mount"), j = fe("SMUI:checkbox:unmount");
  ot(() => {
    if (o(I) == null)
      throw new Error("Checkbox is not defined.");
    o(I).indeterminate = !r(l()) && l(), z(
      E,
      new Og({
        addClass: Q,
        forceLayout: () => ce().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!ce().parentNode,
        isChecked: () => o(S),
        isIndeterminate: () => r(l()) ? !1 : l(),
        removeClass: D,
        removeNativeControlAttr: Ie,
        setNativeControlAttr: B,
        setNativeControlDisabled: (te) => c(te)
      }),
      !0
    );
    const Z = {
      _smui_checkbox_accessor: !0,
      get element() {
        return ce();
      },
      get checked() {
        return o(S);
      },
      set checked(te) {
        o(S) !== te && z(S, te, !0);
      },
      get indeterminate() {
        return r(l()) ? !1 : l();
      },
      set indeterminate(te) {
        l(te);
      },
      activateRipple() {
        c() || z(T, !0);
      },
      deactivateRipple() {
        z(T, !1);
      }
    };
    return N && N(Z), U && U(Z), o(E).init(), () => {
      var te;
      k && k(Z), j && j(Z), (te = o(E)) == null || te.destroy();
    };
  });
  function Q(Z) {
    _[Z] || (_[Z] = !0);
  }
  function D(Z) {
    (!(Z in _) || _[Z]) && (_[Z] = !1);
  }
  function L(Z, te) {
    A[Z] != te && (te === "" || te == null ? delete A[Z] : A[Z] = te);
  }
  function B(Z, te) {
    x[Z] !== te && (x[Z] = te);
  }
  function Ie(Z) {
    (!(Z in x) || x[Z] != null) && (x[Z] = void 0);
  }
  function pe() {
    return C && C.id;
  }
  function ce() {
    return y;
  }
  var Ae = { getId: pe, getElement: ce }, V = bb(), J = (Z) => {
    var te;
    o(E) && o(E).handleAnimationEnd(), (te = e.onanimationend) == null || te.call(e, Z);
  };
  qe(V, (Z, te, Ne) => ({ class: Z, style: te, ...Ne, onanimationend: J }), [
    () => Fe({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": c(),
      "mdc-checkbox--touch": u(),
      "mdc-data-table__header-row-checkbox": H === "data-table" && X,
      "mdc-data-table__row-checkbox": H === "data-table" && !X,
      ..._,
      [a()]: !0
    }),
    () => Object.entries(A).map(([Z, te]) => `${Z}: ${te};`).concat([s()]).join(" "),
    () => qi(b, ["input$"])
  ]);
  var K = oe(V), he = (Z) => {
    var te;
    Qe(ce(), "blur", Z), (te = e.input$onblur) == null || te.call(e, Z);
  }, we = (Z) => {
    var te;
    Qe(ce(), "focus", Z), (te = e.input$onfocus) == null || te.call(e, Z);
  };
  return qe(
    K,
    (Z, te, Ne, Oe) => ({
      class: Z,
      type: "checkbox",
      ...C,
      disabled: c(),
      value: te,
      "data-indeterminate": Ne,
      ...x,
      ...Oe,
      onblur: he,
      onfocus: we
    }),
    [
      () => Fe({ "mdc-checkbox__native-control": !0, [p()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(l()) && l() ? "true" : void 0,
      () => mt(b, "input$")
    ],
    void 0,
    void 0,
    !0
  ), Se(K, (Z) => z(I, Z), () => o(I)), He(K, (Z, te) => q == null ? void 0 : q(Z, te), v), li(() => $f(K, () => o(S), (Z) => z(S, Z))), Se(V, (Z) => y = Z, () => y), He(V, (Z, te) => q == null ? void 0 : q(Z, te), i), He(V, (Z, te) => Yt == null ? void 0 : Yt(Z, te), () => ({
    unbounded: !0,
    addClass: Q,
    removeClass: D,
    addStyle: L,
    active: o(T),
    eventTarget: o(I)
  })), w(t, V), Ce(Ae);
}
var yb = /* @__PURE__ */ le('<div style="display: flex; flex-direction: column;"></div>');
function Ib(t, e) {
  xe(e, !0);
  let n = g(e, "data", 19, () => []), r = g(e, "values", 31, () => _e([]));
  var i = yb();
  Nn(i, 21, n, Ai, (a, s) => {
    Qg(a, {
      label: (u) => {
        var l = Dt();
        Le(() => rt(l, o(s).label)), w(u, l);
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
  }), w(t, i), Ce();
}
var Eb = (t) => t.stopPropagation(), Ab = /* @__PURE__ */ le('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), Sb = /* @__PURE__ */ le('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), xb = /* @__PURE__ */ le('<div class="oscd-filters svelte-58jwwf"></div>');
function Cb(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 15), r = /* @__PURE__ */ ge(null), i = [], a = [];
  function s(v) {
    var p;
    if (!(v.value === void 0 || v.value === null || v.value === ""))
      switch (v.type) {
        case "text":
          return String(v.value);
        case "number":
          return String(v.value);
        case "select":
          const b = (p = v.options) == null ? void 0 : p.find((I) => I.value === v.value);
          return b ? b.label : String(v.value);
        case "multiselect":
          if (!Array.isArray(v.value) || v.value.length === 0) return;
          const y = v.value.map((I) => {
            var A;
            const _ = (A = v.options) == null ? void 0 : A.find((x) => x.value === I);
            return _ ? _.label : String(I);
          }), E = 1;
          return y.length <= E ? y.join(", ") : `${y.slice(0, E).join(", ")} +${y.length - E} more`;
        case "date":
          try {
            const I = new Date(v.value);
            return isNaN(I.getTime()) ? String(v.value) : I.toLocaleDateString();
          } catch {
            return String(v.value);
          }
        case "datetime":
          try {
            const I = new Date(v.value);
            return isNaN(I.getTime()) ? String(v.value) : new Intl.DateTimeFormat("default", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: !1
            }).format(I);
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
  ot(() => {
    document.addEventListener("click", f);
  }), Ln(() => {
    document.removeEventListener("click", f);
  }), Te(() => {
  });
  var m = xb();
  Nn(m, 23, n, (v) => v.key, (v, p, b) => {
    var y = Sb(), E = oe(y);
    {
      let A = /* @__PURE__ */ be(() => s(o(p)));
      gb(E, {
        get label() {
          return o(p).label;
        },
        get value() {
          return o(A);
        },
        onOpen: () => u(o(b)),
        onRemove: () => h(o(b))
      });
    }
    var I = ye(E, 2);
    {
      var _ = (A) => {
        var x = Ab();
        x.__click = [Eb];
        var T = ye(oe(x), 2), C = oe(T), S = ye(T, 2), H = oe(S);
        {
          var X = (re) => {
            Eo(re, {
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
          }, R = (re) => {
            var N = ee(), k = W(N);
            {
              var U = (Q) => {
                {
                  let D = /* @__PURE__ */ be(() => {
                    var L;
                    return (L = o(p)) == null ? void 0 : L.options;
                  });
                  Xp(Q, {
                    get label() {
                      return o(p).label;
                    },
                    get data() {
                      return o(D);
                    },
                    get value() {
                      return a[o(b)];
                    },
                    set value(L) {
                      a[o(b)] = L;
                    }
                  });
                }
              }, j = (Q) => {
                var D = ee(), L = W(D);
                {
                  var B = (pe) => {
                    {
                      let ce = /* @__PURE__ */ be(() => {
                        var Ae;
                        return (Ae = o(p)) == null ? void 0 : Ae.options;
                      });
                      Ib(pe, {
                        get data() {
                          return o(ce);
                        },
                        get values() {
                          return a[o(b)];
                        },
                        set values(Ae) {
                          a[o(b)] = Ae;
                        }
                      });
                    }
                  }, Ie = (pe) => {
                    var ce = ee(), Ae = W(ce);
                    {
                      var V = (K) => {
                        Ag(K, {
                          get value() {
                            return a[o(b)];
                          },
                          set value(he) {
                            a[o(b)] = he;
                          }
                        });
                      }, J = (K) => {
                        var he = ee(), we = W(he);
                        {
                          var Z = (te) => {
                            Cg(te, {
                              get value() {
                                return a[o(b)];
                              },
                              set value(Ne) {
                                a[o(b)] = Ne;
                              }
                            });
                          };
                          ne(
                            we,
                            (te) => {
                              o(p).type === "datetime" && te(Z);
                            },
                            !0
                          );
                        }
                        w(K, he);
                      };
                      ne(
                        Ae,
                        (K) => {
                          o(p).type === "date" ? K(V) : K(J, !1);
                        },
                        !0
                      );
                    }
                    w(pe, ce);
                  };
                  ne(
                    L,
                    (pe) => {
                      o(p).type === "multiselect" ? pe(B) : pe(Ie, !1);
                    },
                    !0
                  );
                }
                w(Q, D);
              };
              ne(
                k,
                (Q) => {
                  o(p).type === "select" ? Q(U) : Q(j, !1);
                },
                !0
              );
            }
            w(re, N);
          };
          ne(H, (re) => {
            o(p).type === "text" || o(p).type === "number" ? re(X) : re(R, !1);
          });
        }
        var P = ye(S, 2);
        Bc(P, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(o(b)),
          children: (re, N) => {
            var k = Dt("Apply");
            w(re, k);
          },
          $$slots: { default: !0 }
        }), Le(() => rt(C, `Filter by ${o(p).label ?? ""}`)), os(2, x, () => vs, () => ({ y: 5, duration: 120 })), os(1, x, () => vs, () => ({ y: -5, duration: 120 })), w(A, x);
      };
      ne(I, (A) => {
        o(r) === o(b) && A(_);
      });
    }
    Se(y, (A, x) => i[x] = A, (A) => i == null ? void 0 : i[A], () => [o(b)]), w(v, y);
  }), w(t, m), Ce();
}
wn(["click"]);
var Tb = (t, e) => e(), wb = /* @__PURE__ */ le('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), Lb = /* @__PURE__ */ le('<div class="filter-tab svelte-nj6sif"><!> <div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div></div>');
function Ob(t, e) {
  xe(e, !0);
  let n = g(e, "filters", 31, () => _e([])), r = g(e, "onFilterChange", 3, (E) => {
  }), i = g(e, "searchText", 15, ""), a = g(e, "searchLabel", 3, "Search"), s = g(e, "searchPlaceholder", 3, "Type to search..."), c = g(e, "onSearchInput", 3, () => {
  }), u = g(e, "searchDisabled", 3, !1), l = /* @__PURE__ */ be(() => n().some((E) => E.value !== void 0 && E.value !== null && E.value !== "")), d = () => {
    n(n().map((E) => ({ ...E, value: void 0 }))), r()(n());
  };
  var h = Lb(), f = oe(h);
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
        set value(I) {
          i(I);
        }
      });
    };
    ne(f, (E) => {
      u() || E(m);
    });
  }
  var v = ye(f, 2), p = ye(oe(v), 2);
  Cb(p, {
    onfiltersChanged: (E) => r()(E),
    get filters() {
      return n();
    },
    set filters(E) {
      n(E);
    }
  });
  var b = ye(p, 2);
  {
    var y = (E) => {
      var I = wb();
      I.__click = [Tb, d], w(E, I);
    };
    ne(b, (E) => {
      o(l) && E(y);
    });
  }
  w(t, h), Ce();
}
wn(["click"]);
var Rb = /* @__PURE__ */ le('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Kc(t, e) {
  xe(e, !0);
  const [n, r] = dr();
  let i = g(e, "use", 19, () => []), a = g(e, "class", 3, ""), s = g(e, "style", 3, ""), c = g(e, "indeterminate", 3, !1), u = g(e, "closed", 3, !1), l = g(e, "progress", 3, 0), d = g(e, "buffer", 3, void 0), h = /* @__PURE__ */ Ke(e, [
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
  ]), f, m = /* @__PURE__ */ ge(void 0), v = _e({}), p = _e({}), b = _e({}), y = _e({}), E = _e({}), I = fe("SMUI:linear-progress:context"), _ = fe("SMUI:linear-progress:closed");
  Te(() => {
    _ && ri(_, u());
  }), Te(() => {
    o(m) && o(m).isDeterminate() !== !c() && o(m).setDeterminate(!c());
  }), Te(() => {
    o(m) && o(m).getProgress() !== l() && o(m).setProgress(l());
  }), Te(() => {
    o(m) && (d() == null ? o(m).setBuffer(1) : o(m).setBuffer(d()));
  }), Te(() => {
    o(m) && (u() ? o(m).close() : o(m).open());
  }), ot(() => (z(
    m,
    new Rg({
      addClass: x,
      forceLayout: () => {
        P().getBoundingClientRect();
      },
      setBufferBarStyle: X,
      setPrimaryBarStyle: R,
      hasClass: A,
      removeAttribute: S,
      removeClass: T,
      setAttribute: C,
      setStyle: H,
      attachResizeObserver: (L) => {
        const B = window.ResizeObserver;
        if (B) {
          const Ie = new B(L);
          return Ie.observe(P()), Ie;
        }
        return null;
      },
      getWidth: () => P().offsetWidth
    }),
    !0
  ), o(m).init(), () => {
    var L;
    (L = o(m)) == null || L.destroy();
  }));
  function A(L) {
    return L in v ? v[L] : P().classList.contains(L);
  }
  function x(L) {
    v[L] || (v[L] = !0);
  }
  function T(L) {
    (!(L in v) || v[L]) && (v[L] = !1);
  }
  function C(L, B) {
    p[L] !== B && (p[L] = B);
  }
  function S(L) {
    (!(L in p) || p[L] != null) && (p[L] = void 0);
  }
  function H(L, B) {
    b[L] != B && (B === "" || B == null ? delete b[L] : b[L] = B);
  }
  function X(L, B) {
    y[L] != B && (B === "" || B == null ? delete y[L] : y[L] = B);
  }
  function R(L, B) {
    E[L] != B && (B === "" || B == null ? delete E[L] : E[L] = B);
  }
  function P() {
    return f;
  }
  var re = { getElement: P }, N = Rb(), k = (L) => {
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
      () => Fe({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": c(),
        "mdc-linear-progress--closed": u(),
        "mdc-data-table__linear-progress": I === "data-table",
        ...v,
        [a()]: !0
      }),
      () => Object.entries(b).map(([L, B]) => `${L}: ${B};`).concat([s()]).join(" ")
    ]
  );
  var U = oe(N), j = oe(U), Q = ye(U, 2);
  Se(N, (L) => f = L, () => f), He(N, (L, B) => q == null ? void 0 : q(L, B), i), Le(
    (L, B) => {
      Ft(j, L), Ft(Q, B);
    },
    [
      () => Object.entries(y).map(([L, B]) => `${L}: ${B};`).join(" "),
      () => Object.entries(E).map(([L, B]) => `${L}: ${B};`).join(" ")
    ]
  ), w(t, N);
  var D = Ce(re);
  return r(), D;
}
var Mb = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Db = /* @__PURE__ */ hn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Pb = /* @__PURE__ */ le('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Hb = (t, e) => e(), Nb = /* @__PURE__ */ le('<input type="text" class="svelte-1mj71p3"/>'), Ub = (t, e) => e(), kb = /* @__PURE__ */ le('<input type="number" class="svelte-1mj71p3"/>'), Bb = /* @__PURE__ */ le("<!> <!>", 1), Fb = /* @__PURE__ */ le("<!> <!>", 1), Vb = /* @__PURE__ */ le('<div class="cell-actions svelte-1mj71p3"></div>'), Gb = /* @__PURE__ */ le("<!> <!>", 1);
function jb(t, e) {
  xe(e, !0);
  const n = () => Kn(b, "$sortColumn", a), r = () => Kn(y, "$sortDirection", a), i = () => Kn(p, "$filteredData", a), [a, s] = dr();
  let c = g(e, "loadingDone", 15, !0), u = g(e, "label", 19, jr), l = g(e, "columnDefs", 19, () => []), d = g(e, "rowData", 31, () => _e([])), h = g(e, "rowActions", 19, () => []), f = g(e, "searchInputLabel", 3, "Search"), m = g(e, "emptyText", 3, "No data available"), v = _e({ name: "", color: "", number: "" }), p = en([]), b = en(null), y = en(null), E = /* @__PURE__ */ be(() => l().some((x) => x.filter));
  e.store.store.subscribe((x) => {
    d([...x]), I();
  });
  function I() {
    let x = d().filter((T) => l().every((C) => {
      const S = v[C.field], H = C.filterValueGetter ? C.filterValueGetter(T) : T[C.field];
      return S ? C.filterType === "number" ? H == S : H.toString().toLowerCase().includes(S.toLowerCase()) : !0;
    }));
    x = _(x), p.set(x);
  }
  function _(x) {
    let T, C;
    return b.subscribe((S) => T = S), y.subscribe((S) => C = S), !T || !C ? x : x.sort((S, H) => {
      let X = S[T], R = H[T];
      return X == null && (X = ""), R == null && (R = ""), C === "asc" ? X.toString().localeCompare(R.toString()) : R.toString().localeCompare(X.toString());
    });
  }
  function A(x) {
    b.update((T) => {
      if (T === x)
        y.update((C) => C === "asc" ? "desc" : C === "desc" ? null : "asc");
      else
        return y.set("asc"), x;
      return x;
    }), I();
  }
  p.set(d()), Hg(t, {
    get "table$aria-label"() {
      return u();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (T) => {
      Kc(T, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return c();
        },
        set closed(C) {
          c(C);
        }
      });
    },
    children: (T, C) => {
      var S = Gb(), H = W(S);
      Ug(H, {
        children: (R, P) => {
          var re = Fb(), N = W(re);
          Wa(N, {
            class: "header-title-row",
            children: (j, Q) => {
              var D = ee(), L = W(D);
              Nn(L, 17, l, Ai, (B, Ie) => {
                ca(B, {
                  onclick: () => o(Ie).sortable && A(o(Ie).field),
                  get style() {
                    return o(Ie).headerStyle;
                  },
                  children: (pe, ce) => {
                    var Ae = Pb(), V = oe(Ae), J = oe(V), K = oe(J), he = ye(J, 2);
                    {
                      var we = (Z) => {
                        var te = ee(), Ne = W(te);
                        {
                          var Oe = (ze) => {
                            var et = ee(), Be = W(et);
                            {
                              var M = (se) => {
                                var Re = Mb();
                                w(se, Re);
                              }, F = (se) => {
                                var Re = ee(), lt = W(Re);
                                {
                                  var yt = (pt) => {
                                    var ie = Db();
                                    w(pt, ie);
                                  };
                                  ne(
                                    lt,
                                    (pt) => {
                                      r() === "desc" && pt(yt);
                                    },
                                    !0
                                  );
                                }
                                w(se, Re);
                              };
                              ne(Be, (se) => {
                                r() === "asc" ? se(M) : se(F, !1);
                              });
                            }
                            w(ze, et);
                          };
                          ne(Ne, (ze) => {
                            n() === o(Ie).field && r() !== null && ze(Oe);
                          });
                        }
                        w(Z, te);
                      };
                      ne(he, (Z) => {
                        o(Ie).sortable && Z(we);
                      });
                    }
                    Le(() => {
                      Ft(Ae, `min-width: ${o(Ie).minWidth ?? 0 ?? ""}`), rt(K, o(Ie).headerName);
                    }), w(pe, Ae);
                  },
                  $$slots: { default: !0 }
                });
              }), w(j, D);
            },
            $$slots: { default: !0 }
          });
          var k = ye(N, 2);
          {
            var U = (j) => {
              Wa(j, {
                class: "header-filter-row",
                children: (Q, D) => {
                  var L = ee(), B = W(L);
                  Nn(B, 17, l, Ai, (Ie, pe) => {
                    ca(Ie, {
                      children: (ce, Ae) => {
                        var V = ee(), J = W(V);
                        {
                          var K = (he) => {
                            var we = Bb(), Z = W(we);
                            {
                              var te = (ze) => {
                                var et = Nb();
                                et.__input = [Hb, I], Le(() => Sr(et, "placeholder", `${f()} ${o(pe).headerName}`)), _a(et, () => v[o(pe).field], (Be) => v[o(pe).field] = Be), w(ze, et);
                              };
                              ne(Z, (ze) => {
                                o(pe).filterType === "text" && ze(te);
                              });
                            }
                            var Ne = ye(Z, 2);
                            {
                              var Oe = (ze) => {
                                var et = kb();
                                et.__input = [Ub, I], Le(() => Sr(et, "placeholder", `${f()} ${o(pe).headerName}`)), _a(et, () => v[o(pe).field], (Be) => v[o(pe).field] = Be), w(ze, et);
                              };
                              ne(Ne, (ze) => {
                                o(pe).filterType === "number" && ze(Oe);
                              });
                            }
                            w(he, we);
                          };
                          ne(J, (he) => {
                            o(pe).filter && he(K);
                          });
                        }
                        w(ce, V);
                      },
                      $$slots: { default: !0 }
                    });
                  }), w(Q, L);
                },
                $$slots: { default: !0 }
              });
            };
            ne(k, (j) => {
              o(E) && j(U);
            });
          }
          w(R, re);
        },
        $$slots: { default: !0 }
      });
      var X = ye(H, 2);
      Bg(X, {
        children: (R, P) => {
          var re = ee(), N = W(re);
          {
            var k = (j) => {
              Wa(j, {
                children: (Q, D) => {
                  ca(Q, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return l().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (L, B) => {
                      var Ie = Dt();
                      Le(() => rt(Ie, m())), w(L, Ie);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, U = (j) => {
              var Q = ee(), D = W(Q);
              Nn(D, 1, i, Ai, (L, B) => {
                Wa(L, {
                  children: (Ie, pe) => {
                    var ce = ee(), Ae = W(ce);
                    Nn(Ae, 17, l, (V) => V.field, (V, J) => {
                      var K = ee(), he = W(K);
                      {
                        var we = (te) => {
                          ca(te, {
                            children: (Ne, Oe) => {
                              var ze = Vb();
                              Nn(ze, 21, h, Ai, (et, Be) => {
                                var M = ee(), F = W(M);
                                {
                                  var se = (lt) => {
                                    hs(lt, {
                                      get content() {
                                        return o(Be).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (yt, pt) => {
                                        {
                                          let ie = /* @__PURE__ */ be(() => o(Be).disabled(o(B)));
                                          Dm(yt, {
                                            get iconComponent() {
                                              return o(Be).iconComponent;
                                            },
                                            get iconStyles() {
                                              return o(Be).iconStyles;
                                            },
                                            callback: () => o(Be).callback(o(B)),
                                            get disabled() {
                                              return o(ie);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Re = (lt) => {
                                    hs(lt, {
                                      get content() {
                                        return o(Be).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (yt, pt) => {
                                        {
                                          let ie = /* @__PURE__ */ be(() => o(Be).disabled(o(B)));
                                          wm(yt, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => o(Be).callback(o(B)),
                                            get disabled() {
                                              return o(ie);
                                            },
                                            children: (ve, G) => {
                                              var Y = ee(), Me = W(Y);
                                              {
                                                var ut = (ht) => {
                                                  rg(ht, { svgStyles: "margin: unset" });
                                                }, gt = (ht) => {
                                                  var Ht = ee(), fr = W(Ht);
                                                  {
                                                    var dt = (It) => {
                                                      zc(It, { svgStyles: "margin: unset" });
                                                    }, Lt = (It) => {
                                                      var Rn = ee(), hi = W(Rn);
                                                      {
                                                        var Bn = (Xe) => {
                                                          sg(Xe, { svgStyles: "margin: unset" });
                                                        }, Ve = (Xe) => {
                                                          var Ze = ee(), Ot = W(Ze);
                                                          {
                                                            var mn = (at) => {
                                                              lg(at, { svgStyles: "margin: unset" });
                                                            }, tt = (at) => {
                                                              var St = ee(), Ye = W(St);
                                                              {
                                                                var Ct = (Tt) => {
                                                                  fg(Tt, { svgStyles: "margin: unset" });
                                                                }, Mn = (Tt) => {
                                                                  var bt = ee(), Rt = W(bt);
                                                                  {
                                                                    var on = (ln) => {
                                                                      vg(ln, { svgStyles: "margin: unset" });
                                                                    }, Nt = (ln) => {
                                                                      var Xt = ee(), Fn = W(Xt);
                                                                      {
                                                                        var Pr = (Vt) => {
                                                                          pg(Vt, { svgStyles: "margin: unset" });
                                                                        }, un = (Vt) => {
                                                                          cg(Vt, { svgStyles: "margin: unset" });
                                                                        };
                                                                        ne(
                                                                          Fn,
                                                                          (Vt) => {
                                                                            o(Be).icon === "delete" ? Vt(Pr) : Vt(un, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      w(ln, Xt);
                                                                    };
                                                                    ne(
                                                                      Rt,
                                                                      (ln) => {
                                                                        o(Be).icon === "edit" ? ln(on) : ln(Nt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  w(Tt, bt);
                                                                };
                                                                ne(
                                                                  Ye,
                                                                  (Tt) => {
                                                                    o(Be).icon === "remove" ? Tt(Ct) : Tt(Mn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              w(at, St);
                                                            };
                                                            ne(
                                                              Ot,
                                                              (at) => {
                                                                o(Be).icon === "find-in-page" ? at(mn) : at(tt, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          w(Xe, Ze);
                                                        };
                                                        ne(
                                                          hi,
                                                          (Xe) => {
                                                            o(Be).icon === "download" ? Xe(Bn) : Xe(Ve, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      w(It, Rn);
                                                    };
                                                    ne(
                                                      fr,
                                                      (It) => {
                                                        o(Be).icon === "cancel" ? It(dt) : It(Lt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  w(ht, Ht);
                                                };
                                                ne(Me, (ht) => {
                                                  o(Be).icon === "add" ? ht(ut) : ht(gt, !1);
                                                });
                                              }
                                              w(ve, Y);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  ne(F, (lt) => {
                                    o(Be).iconComponent ? lt(se) : lt(Re, !1);
                                  });
                                }
                                w(et, M);
                              }), w(Ne, ze);
                            },
                            $$slots: { default: !0 }
                          });
                        }, Z = (te) => {
                          ca(te, {
                            get numeric() {
                              return o(J).numeric;
                            },
                            get style() {
                              return o(J).cellStyle;
                            },
                            children: (Ne, Oe) => {
                              var ze = ee(), et = W(ze);
                              {
                                var Be = (F) => {
                                  const se = /* @__PURE__ */ be(() => o(J).cellRenderer);
                                  var Re = ee(), lt = W(Re);
                                  ci(lt, () => o(se), (yt, pt) => {
                                    pt(yt, st(
                                      {
                                        get row() {
                                          return o(B);
                                        },
                                        get value() {
                                          return o(B)[o(J).field];
                                        },
                                        get col() {
                                          return o(J);
                                        }
                                      },
                                      () => o(J).cellRendererProps ?? {}
                                    ));
                                  }), w(F, Re);
                                }, M = (F) => {
                                  var se = ee(), Re = W(se);
                                  {
                                    var lt = (pt) => {
                                      var ie = Dt();
                                      Le((ve) => rt(ie, ve), [
                                        () => o(J).valueFormatter(o(B)[o(J).field])
                                      ]), w(pt, ie);
                                    }, yt = (pt) => {
                                      var ie = Dt();
                                      Le(() => rt(ie, o(B)[o(J).field] ?? "")), w(pt, ie);
                                    };
                                    ne(
                                      Re,
                                      (pt) => {
                                        o(J).valueFormatter ? pt(lt) : pt(yt, !1);
                                      },
                                      !0
                                    );
                                  }
                                  w(F, se);
                                };
                                ne(et, (F) => {
                                  o(J).cellRenderer ? F(Be) : F(M, !1);
                                });
                              }
                              w(Ne, ze);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        ne(he, (te) => {
                          o(J).field === "actions" ? te(we) : te(Z, !1);
                        });
                      }
                      w(V, K);
                    }), w(Ie, ce);
                  },
                  $$slots: { default: !0 }
                });
              }), w(j, Q);
            };
            ne(N, (j) => {
              i().length === 0 ? j(k) : j(U, !1);
            });
          }
          w(R, re);
        },
        $$slots: { default: !0 }
      }), w(T, S);
    },
    $$slots: { progress: !0, default: !0 }
  }), Ce(), s();
}
wn(["input"]);
function _t(t) {
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
function ms(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Pa = function() {
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
            for (var c = Pt(s), u = c.next(); !u.done; u = c.next()) {
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
      if (_t(d))
        try {
          d();
        } catch (p) {
          a = p instanceof Qs ? p.errors : [p];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Pt(h), m = f.next(); !m.done; m = f.next()) {
            var v = m.value;
            try {
              $l(v);
            } catch (p) {
              a = a ?? [], p instanceof Qs ? a = Zn(Zn([], Cr(a)), Cr(p.errors)) : a.push(p);
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
    n === e ? this._parentage = null : Array.isArray(n) && ms(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && ms(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Zc = Pa.EMPTY;
function Yc(t) {
  return t instanceof Pa || t && "closed" in t && _t(t.remove) && _t(t.add) && _t(t.unsubscribe);
}
function $l(t) {
  _t(t) ? t() : t.unsubscribe();
}
var qb = {
  Promise: void 0
}, zb = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Zn([t, e], Cr(n)));
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
function ts(t) {
  t();
}
var zo = function(t) {
  $e(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Yc(n) && n.add(r)) : r.destination = Kb, r;
  }
  return e.create = function(n, r, i) {
    return new Aa(n, r, i);
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
}(Pa), Wb = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Ka(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Ka(r);
      }
    else
      Ka(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Ka(n);
      }
  }, t;
}(), Aa = function(t) {
  $e(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return _t(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new Wb(s), a;
  }
  return e;
}(zo);
function Ka(t) {
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
function $i(t) {
  return t;
}
function Zb(t) {
  return t.length === 0 ? $i : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var rn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Qb(e) ? e : new Aa(e, n, r);
    return ts(function() {
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
      var s = new Aa({
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
  return t && _t(t.next) && _t(t.error) && _t(t.complete);
}
function Qb(t) {
  return t && t instanceof zo || Yb(t) && Yc(t);
}
function Jb(t) {
  return _t(t == null ? void 0 : t.lift);
}
function On(t) {
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
function Tn(t, e, n, r, i) {
  return new $b(t, e, n, r, i);
}
var $b = function(t) {
  $e(e, t);
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
}), Rs = function(t) {
  $e(e, t);
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
    ts(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Pt(r.currentObservers), c = s.next(); !c.done; c = s.next()) {
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
    ts(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    ts(function() {
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
    return a || s ? Zc : (this.currentObservers = null, c.push(n), new Pa(function() {
      r.currentObservers = null, ms(c, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new rn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new nu(n, r);
  }, e;
}(rn), nu = function(t) {
  $e(e, t);
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
}(Rs), ru = function(t) {
  $e(e, t);
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
}(Rs), Xo = {
  now: function() {
    return (Xo.delegate || Date).now();
  },
  delegate: void 0
}, t_ = function(t) {
  $e(e, t);
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
}(Rs), n_ = function(t) {
  $e(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(Pa), iu = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Zn([t, e], Cr(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, r_ = function(t) {
  $e(e, t);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, ms(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
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
  $e(e, t);
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
}(au), Ko = new i_(r_), a_ = Ko, s_ = new rn(function(t) {
  return t.complete();
});
function Jc(t) {
  return t && _t(t.schedule);
}
function $c(t) {
  return t[t.length - 1];
}
function o_(t) {
  return _t($c(t)) ? t.pop() : void 0;
}
function Ms(t) {
  return Jc($c(t)) ? t.pop() : void 0;
}
var ed = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function td(t) {
  return _t(t == null ? void 0 : t.then);
}
function nd(t) {
  return _t(t[Wo]);
}
function rd(t) {
  return Symbol.asyncIterator && _t(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function id(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function l_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var ad = l_();
function sd(t) {
  return _t(t == null ? void 0 : t[ad]);
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
          return [4, Ti(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, Ti(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, Ti(i)];
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
  return _t(t == null ? void 0 : t.getReader);
}
function $n(t) {
  if (t instanceof rn)
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
  return new rn(function(e) {
    var n = t[Wo]();
    if (_t(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function c_(t) {
  return new rn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function d_(t) {
  return new rn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Qc);
  });
}
function f_(t) {
  return new rn(function(e) {
    var n, r;
    try {
      for (var i = Pt(t), a = i.next(); !a.done; a = i.next()) {
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
  return new rn(function(e) {
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
function xr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function cd(t, e) {
  return e === void 0 && (e = 0), On(function(n, r) {
    n.subscribe(Tn(r, function(i) {
      return xr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return xr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return xr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function dd(t, e) {
  return e === void 0 && (e = 0), On(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function m_(t, e) {
  return $n(t).pipe(dd(e), cd(e));
}
function p_(t, e) {
  return $n(t).pipe(dd(e), cd(e));
}
function g_(t, e) {
  return new rn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function b_(t, e) {
  return new rn(function(n) {
    var r;
    return xr(n, e, function() {
      r = t[ad](), xr(n, e, function() {
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
      return _t(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function fd(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new rn(function(n) {
    xr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      xr(n, e, function() {
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
function Ha(t, e) {
  return e ? y_(t, e) : $n(t);
}
function ii() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Ms(t);
  return Ha(t, n);
}
function I_(t) {
  return t instanceof Date && !isNaN(t);
}
function Qt(t, e) {
  return On(function(n, r) {
    var i = 0;
    n.subscribe(Tn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
var E_ = Array.isArray;
function A_(t, e) {
  return E_(e) ? t.apply(void 0, Zn([], Cr(e))) : t(e);
}
function S_(t) {
  return Qt(function(e) {
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
  var n = Ms(t), r = o_(t), i = L_(t), a = i.args, s = i.keys;
  if (a.length === 0)
    return Ha([], n);
  var c = new rn(M_(a, n, s ? function(u) {
    return R_(s, u);
  } : $i));
  return r ? c.pipe(S_(r)) : c;
}
function M_(t, e, n) {
  return n === void 0 && (n = $i), function(r) {
    ou(e, function() {
      for (var i = t.length, a = new Array(i), s = i, c = i, u = function(d) {
        ou(e, function() {
          var h = Ha(t[d], e), f = !1;
          h.subscribe(Tn(r, function(m) {
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
  t ? xr(n, t, e) : e();
}
function D_(t, e, n, r, i, a, s, c) {
  var u = [], l = 0, d = 0, h = !1, f = function() {
    h && !u.length && !l && e.complete();
  }, m = function(p) {
    return l < r ? v(p) : u.push(p);
  }, v = function(p) {
    l++;
    var b = !1;
    $n(n(p, d++)).subscribe(Tn(e, function(y) {
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
  return t.subscribe(Tn(e, m, function() {
    h = !0, f();
  })), function() {
  };
}
function Sa(t, e, n) {
  return n === void 0 && (n = 1 / 0), _t(e) ? Sa(function(r, i) {
    return Qt(function(a, s) {
      return e(r, a, i, s);
    })($n(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), On(function(r, i) {
    return D_(r, i, t, n);
  }));
}
function P_(t) {
  return Sa($i, t);
}
function H_() {
  return P_(1);
}
function lu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return H_()(Ha(t, Ms(t)));
}
function N_(t, e, n) {
  n === void 0 && (n = a_);
  var r = -1;
  return e != null && (Jc(e) ? n = e : r = e), new rn(function(i) {
    var a = I_(t) ? +t - n.now() : t;
    a < 0 && (a = 0);
    var s = 0;
    return n.schedule(function() {
      i.closed || (i.next(s++), 0 <= r ? this.schedule(void 0, r) : i.complete());
    }, a);
  });
}
function ai(t) {
  return On(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Tn(n, void 0, void 0, function(s) {
      a = $n(t(s, ai(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function U_(t, e) {
  return _t(e) ? Sa(t, e, 1) : Sa(t, 1);
}
function k_(t, e) {
  return e === void 0 && (e = Ko), On(function(n, r) {
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
    n.subscribe(Tn(r, function(l) {
      a = l, s = e.now(), i || (i = e.schedule(u, t), r.add(i));
    }, function() {
      c(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function zi(t) {
  return t <= 0 ? function() {
    return s_;
  } : On(function(e, n) {
    var r = 0;
    e.subscribe(Tn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function B_(t) {
  return Qt(function() {
    return t;
  });
}
function F_(t, e) {
  return Sa(function(n, r) {
    return $n(t(n, r)).pipe(zi(1), B_(n));
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
  return e === void 0 && (e = $i), t = t ?? j_, On(function(n, r) {
    var i, a = !0;
    n.subscribe(Tn(r, function(s) {
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
    return new Rs();
  } : e, r = t.resetOnError, i = r === void 0 ? !0 : r, a = t.resetOnComplete, s = a === void 0 ? !0 : a, c = t.resetOnRefCountZero, u = c === void 0 ? !0 : c;
  return function(l) {
    var d, h, f, m = 0, v = !1, p = !1, b = function() {
      h == null || h.unsubscribe(), h = void 0;
    }, y = function() {
      b(), d = f = void 0, v = p = !1;
    }, E = function() {
      var I = d;
      y(), I == null || I.unsubscribe();
    };
    return On(function(I, _) {
      m++, !p && !v && b();
      var A = f = f ?? n();
      _.add(function() {
        m--, m === 0 && !p && !v && (h = Js(E, u));
      }), A.subscribe(_), !d && m > 0 && (d = new Aa({
        next: function(x) {
          return A.next(x);
        },
        error: function(x) {
          p = !0, b(), h = Js(y, i, x), A.error(x);
        },
        complete: function() {
          v = !0, b(), h = Js(y, s), A.complete();
        }
      }), $n(I).subscribe(d));
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
    var i = new Aa({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return $n(e.apply(void 0, Zn([], Cr(n)))).subscribe(i);
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
  var n = Ms(t);
  return On(function(r, i) {
    (n ? lu(t, r, n) : lu(t, r)).subscribe(i);
  });
}
function du(t, e) {
  return On(function(n, r) {
    var i = null, a = 0, s = !1, c = function() {
      return s && !i && r.complete();
    };
    n.subscribe(Tn(r, function(u) {
      i == null || i.unsubscribe();
      var l = 0, d = a++;
      $n(t(u, d)).subscribe(i = Tn(r, function(h) {
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
  var r = _t(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? On(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var c = !0;
    i.subscribe(Tn(a, function(u) {
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
  }) : $i;
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
}(), ps = qo(function(t) {
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
    return ps.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(ps.prototype), t;
}();
function X_(t, e) {
  return fi({ method: "GET", url: t, headers: e });
}
function K_(t, e, n) {
  return fi({ method: "POST", url: t, body: e, headers: n });
}
function Z_(t, e) {
  return fi({ method: "DELETE", url: t, headers: e });
}
function Y_(t, e, n) {
  return fi({ method: "PUT", url: t, body: e, headers: n });
}
function Q_(t, e, n) {
  return fi({ method: "PATCH", url: t, body: e, headers: n });
}
var J_ = Qt(function(t) {
  return t.response;
});
function $_(t, e) {
  return J_(fi({
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
    return ty(n);
  };
  return t.get = X_, t.post = K_, t.delete = Z_, t.put = Y_, t.patch = Q_, t.getJSON = $_, t;
}(), ey = "upload", hu = "download", $s = "loadstart", eo = "progress", vu = "load";
function ty(t) {
  return new rn(function(e) {
    var n, r, i = de({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, s = i.body, c = i.headers, u = i.url;
    if (!u)
      throw new TypeError("url is required");
    if (a) {
      var l;
      if (u.includes("?")) {
        var d = u.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        l = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(U, j) {
          return l.set(j, U);
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
    var E = ny(s, h), I = de(de({}, i), {
      url: u,
      headers: h,
      body: E
    }), _;
    _ = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var A = t.progressSubscriber, x = t.includeDownloadProgress, T = x === void 0 ? !1 : x, C = t.includeUploadProgress, S = C === void 0 ? !1 : C, H = function(U, j) {
        _.addEventListener(U, function() {
          var Q, D = j();
          (Q = A == null ? void 0 : A.error) === null || Q === void 0 || Q.call(A, D), e.error(D);
        });
      };
      H("timeout", function() {
        return new W_(_, I);
      }), H("abort", function() {
        return new ps("aborted", _, I);
      });
      var X = function(U, j) {
        return new z_(j, _, I, U + "_" + j.type);
      }, R = function(U, j, Q) {
        U.addEventListener(j, function(D) {
          e.next(X(Q, D));
        });
      };
      S && [$s, eo, vu].forEach(function(U) {
        return R(_.upload, U, ey);
      }), A && [$s, eo].forEach(function(U) {
        return _.upload.addEventListener(U, function(j) {
          var Q;
          return (Q = A == null ? void 0 : A.next) === null || Q === void 0 ? void 0 : Q.call(A, j);
        });
      }), T && [$s, eo].forEach(function(U) {
        return R(_, U, hu);
      });
      var P = function(U) {
        var j = "ajax error" + (U ? " " + U : "");
        e.error(new ps(j, _, I));
      };
      _.addEventListener("error", function(U) {
        var j;
        (j = A == null ? void 0 : A.error) === null || j === void 0 || j.call(A, U), P();
      }), _.addEventListener(vu, function(U) {
        var j, Q, D = _.status;
        if (D < 400) {
          (j = A == null ? void 0 : A.complete) === null || j === void 0 || j.call(A);
          var L = void 0;
          try {
            L = X(hu, U);
          } catch (B) {
            e.error(B);
            return;
          }
          e.next(L), e.complete();
        } else
          (Q = A == null ? void 0 : A.error) === null || Q === void 0 || Q.call(A, U), P(D);
      });
    }
    var re = I.user, N = I.method, k = I.async;
    re ? _.open(N, u, k, re, I.password) : _.open(N, u, k), k && (_.timeout = I.timeout, _.responseType = I.responseType), "withCredentials" in _ && (_.withCredentials = I.withCredentials);
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
    }), this.rxjsRequest = (n) => ii(n).pipe(
      Qt((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      U_(
        (r) => fi(r).pipe(
          Qt((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Qt((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const qt = (t) => encodeURIComponent(`${t}`), my = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${qt(e)}=${qt(r)}`).join("&") : `${qt(e)}=${qt(n)}`
).join("&"), dn = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class py extends vd {
  archiveResource({ id: e, version: n, xAuthor: r, xApprover: i, contentType: a, xFilename: s, body: c }, u) {
    dn(e, "id", "archiveResource"), dn(n, "version", "archiveResource");
    const l = {
      "Content-Type": "application/octet-stream",
      ...r != null ? { "X-author": String(r) } : void 0,
      ...i != null ? { "X-approver": String(i) } : void 0,
      ...a != null ? { "Content-Type": String(a) } : void 0,
      ...s != null ? { "X-filename": String(s) } : void 0
    };
    return this.request({
      url: "/api/archive/referenced-resource/{id}/versions/{version}".replace("{id}", qt(e)).replace("{version}", qt(n)),
      method: "POST",
      headers: l,
      body: c
    }, u == null ? void 0 : u.responseOpts);
  }
  archiveSclResource({ id: e, version: n }, r) {
    dn(e, "id", "archiveSclResource"), dn(n, "version", "archiveSclResource");
    const i = {};
    return this.request({
      url: "/api/archive/scl/{id}/versions/{version}".replace("{id}", qt(e)).replace("{version}", qt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveArchivedResourceHistory({ id: e }, n) {
    dn(e, "id", "retrieveArchivedResourceHistory");
    const r = {};
    return this.request({
      url: "/api/archive/resources/{id}/versions".replace("{id}", qt(e)),
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
    dn(e, "locationId", "assignResourceToLocation"), dn(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", qt(e)).replace("{uuid}", qt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    dn(e, "location", "createLocation");
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
    dn(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", qt(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    dn(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", qt(e)),
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
    dn(e, "locationId", "unassignResourceFromLocation"), dn(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", qt(e)).replace("{uuid}", qt(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    dn(e, "locationId", "updateLocation"), dn(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", qt(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class da {
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
class zr {
  constructor() {
    this.baseUrl = "/compas-scl-data-service", this.dummySearchResults = [
      new da(
        jr(),
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
      new da(
        jr(),
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
    return zr.instance || (zr.instance = new zr()), zr.instance;
  }
  searchArchive(e) {
    return this.generateApiClient().searchArchivedResources({ archivedResourcesSearch: e }).pipe(
      zi(1),
      Qt((n) => n.resources),
      Qt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      ai(() => ii(this.dummySearchResults)),
      V_(500)
    );
  }
  retrieveArchivedResourceHistory(e) {
    return this.generateApiClient().retrieveArchivedResourceHistory({ id: e }).pipe(
      zi(1),
      Qt((n) => n.versions),
      Qt(
        (n) => n.map((r) => this.mapToArchiveSearchResult(r))
      ),
      ai(() => ii([
        new da(
          jr(),
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
          [{ key: "SOURCE_RESOURCE_ID", value: jr() }]
        ),
        new da(
          jr(),
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
          [{ key: "SOURCE_RESOURCE_ID", value: jr() }]
        )
      ]))
    );
  }
  findByUUIDAndVersion(e, n, r) {
    return Ha(
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
    return new da(
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
class xi {
  constructor() {
    this.baseUrl = "/compas-scl-data-service";
  }
  static getInstance() {
    return xi.instance || (xi.instance = new xi()), xi.instance;
  }
  listLocations() {
    return this.generateApiClient().getLocations({}).pipe(
      zi(1),
      ai(() => ii([
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
  xe(e, !0);
  const n = zr.getInstance(), r = { store: en([]) };
  let i = /* @__PURE__ */ ge(!1);
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
  ot(() => {
    e.searchResult && n.retrieveArchivedResourceHistory(e.searchResult.uuid).pipe(zi(1), fu((l) => {
      r.store.set(l), z(i, !0);
    })).subscribe();
  });
  function u(l) {
    var h;
    let d;
    l.fields && l.fields.length && (d = (h = l.fields.find((f) => f.key === "SOURCE_RESOURCE_ID")) == null ? void 0 : h.value), n.findByUUIDAndVersion(d, l.type, l.version).pipe(
      zi(1),
      fu((f) => {
        const m = window.URL.createObjectURL(f), v = document.createElement("a");
        v.href = m, v.download = l.filename, v.style.display = "none", document.body.appendChild(v), v.click(), document.body.removeChild(v), window.URL.revokeObjectURL(m);
      }),
      ai((f) => (console.error(f), Ea.error("Download failed", "An error occurred while trying to download the resource.", 5e3), ii(void 0)))
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
  }), Ce();
}
var _y = /* @__PURE__ */ le("<span><!></span>"), yy = /* @__PURE__ */ le("<!> <br/>", 1), Iy = /* @__PURE__ */ le("<i> </i>"), Ey = /* @__PURE__ */ le('<div class="result-container"><div class="content"><!></div></div>');
function Ay(t, e) {
  xe(e, !0);
  let n = g(e, "searchResults", 19, () => []), r = g(e, "noResourcesLabel", 3, "No resources found.");
  var i = Ey(), a = oe(i), s = oe(a);
  {
    var c = (l) => {
      var d = ee(), h = W(d);
      Nn(h, 17, n, (f) => f.uuid, (f, m) => {
        var v = yy(), p = W(v);
        Wc(p, {
          get title() {
            return o(m).name;
          },
          open: !0,
          content: (y) => {
            var E = _y(), I = oe(E);
            by(I, {
              get searchResult() {
                return o(m);
              }
            }), w(y, E);
          },
          $$slots: { content: !0 }
        }), w(f, v);
      }), w(l, d);
    }, u = (l) => {
      var d = Iy(), h = oe(d);
      Le(() => rt(h, r())), w(l, d);
    };
    ne(s, (l) => {
      n().length ? l(c) : l(u, !1);
    });
  }
  w(t, i), Ce();
}
em({ en: fm, de: sm });
var Sy = /* @__PURE__ */ le("<span><!></span>"), xy = /* @__PURE__ */ le('<!> <div class="separator svelte-1gp5xzm"></div>', 1), Cy = /* @__PURE__ */ le('<div class="oscd-app"><div class="search-filter svelte-1gp5xzm"><!></div> <div class="content-container svelte-1gp5xzm"><!></div></div> <!>', 1);
function Ty(t, e) {
  xe(e, !0);
  const n = () => Kn($v, "$_", r), [r, i] = dr(), a = zr.getInstance(), s = xi.getInstance();
  let c = /* @__PURE__ */ ge(_e(/* @__PURE__ */ new Map())), u = /* @__PURE__ */ ge(!0), l = /* @__PURE__ */ ge(_e(/* @__PURE__ */ new Map())), d = /* @__PURE__ */ ge(_e([
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
  ])), h = /* @__PURE__ */ ge("");
  const f = new ru([]), m = new ru(""), v = m.pipe(
    cu(),
    // emit the initial value immediately
    du((R, P) => P === 0 ? [R] : m.pipe(k_(300)))
  ), p = s.listLocations().pipe(
    Qt((R) => {
      const P = new Map(R.map((N) => [N.uuid, N.name])), re = o(d).find((N) => N.key === "location");
      return re && (re.options = R.map((N) => ({ value: N.uuid, label: N.name }))), z(l, P, !0), P;
    }),
    ai((R) => (console.error("Error fetching locations:", R), Ea.error("Failed to load locations."), ii(/* @__PURE__ */ new Map()))),
    uu(1)
  );
  function b(R, P) {
    const re = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      from: null,
      to: null
    };
    return R.forEach((N) => {
      if (N.value) {
        if (N.type === "date") {
          const k = new Date(N.value);
          N.key === "from" && (re.from = k.toISOString()), N.key === "to" && (k.setHours(23, 59, 59, 999), re.to = k.toISOString());
          return;
        }
        N.key in re && (re[N.key] = N.value);
      }
    }), P && P.trim() !== "" && (re.name = P.trim()), re;
  }
  const E = su([f, v]).pipe(G_((R, P) => JSON.stringify(R) === JSON.stringify(P)), Qt(([R, P]) => b(R, P))).pipe(
    du((R) => su({
      results: a.searchArchive(R).pipe(ai((P) => (console.error("Search error:", P), Ea.error("Search failed. Please try again later."), ii([])))),
      locations: p
    }).pipe(
      Qt(({ results: P, locations: re }) => {
        const N = /* @__PURE__ */ new Map();
        for (const k of P) {
          const U = k.location ?? "Default";
          N.has(U) || N.set(U, []), N.get(U).push(k);
        }
        return { grouped: N, locations: re };
      }),
      Qt((P) => ({ loading: !1, ...P })),
      cu({ loading: !0 })
      // loading state at start of each search
    )),
    uu(1)
  );
  ot(() => {
    const R = E.subscribe((P) => {
      z(u, P.loading, !0), P.loading || (z(c, P.grouped, !0), z(l, P.locations, !0));
    });
    return () => R.unsubscribe();
  });
  var I = Cy(), _ = W(I), A = oe(_), x = oe(A);
  Ob(x, {
    searchLabel: "Search file name...",
    onFilterChange: () => f.next(o(d)),
    onSearchInput: () => m.next(o(h)),
    get filters() {
      return o(d);
    },
    set filters(R) {
      z(d, R, !0);
    },
    get searchText() {
      return o(h);
    },
    set searchText(R) {
      z(h, R, !0);
    }
  });
  var T = ye(A, 2), C = oe(T);
  {
    var S = (R) => {
      Kc(R, { indeterminate: !0 });
    }, H = (R) => {
      var P = ee(), re = W(P);
      {
        var N = (k) => {
          var U = ee(), j = W(U);
          Nn(j, 18, () => o(c), (Q) => Q, (Q, D) => {
            var L = xy(), B = W(L);
            {
              const Ie = (ce) => {
                var Ae = Sy(), V = oe(Ae);
                {
                  let J = /* @__PURE__ */ be(() => n()("no_resources_found"));
                  Ay(V, {
                    get searchResults() {
                      return D[1];
                    },
                    get noResourcesLabel() {
                      return o(J);
                    }
                  });
                }
                w(ce, Ae);
              };
              let pe = /* @__PURE__ */ be(() => o(l).get(D[0]) ?? "Unknown");
              Wc(B, {
                open: !0,
                get title() {
                  return o(pe);
                },
                content: Ie,
                $$slots: { content: !0 }
              });
            }
            w(Q, L);
          }), w(k, U);
        };
        ne(re, (k) => {
          o(c).size && k(N);
        });
      }
      w(R, P);
    };
    ne(C, (R) => {
      o(u) ? R(S) : R(H, !1);
    });
  }
  var X = ye(_, 2);
  db(X, {}), w(t, I), Ce(), i();
}
const md = "archive-explorer", pd = "0.0.1";
var wy = /* @__PURE__ */ le('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Ly(t, e) {
  xe(e, !0);
  let n = g(e, "dev", 3, !1);
  var r = wy(), i = W(r);
  {
    var a = (u) => {
      Ty(u, {});
    };
    ne(i, (u) => {
      (e.doc || n()) && u(a);
    });
  }
  var s = ye(i, 2), c = ye(s, 2);
  Le(() => {
    pl(s, md), pl(c, pd);
  }), w(t, r), Ce();
}
var Pi;
class Py extends HTMLElement {
  constructor() {
    super();
    Je(this, Pi);
    De(this, Pi, /* @__PURE__ */ ge(_e({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return o($(this, Pi));
  }
  set props(n) {
    z($(this, Pi), n, !0);
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
Pi = new WeakMap();
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
