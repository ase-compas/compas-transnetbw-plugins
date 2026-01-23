var ld = Object.defineProperty;
var zo = (t) => {
  throw TypeError(t);
};
var ud = (t, e, n) => e in t ? ld(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var vi = (t, e, n) => ud(t, typeof e != "symbol" ? e + "" : e, n), As = (t, e, n) => e.has(t) || zo("Cannot " + n);
var $ = (t, e, n) => (As(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Qe = (t, e, n) => e.has(t) ? zo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Me = (t, e, n, r) => (As(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Vt = (t, e, n) => (As(t, e, "access private method"), n);
const Rt = Symbol(), cd = "http://www.w3.org/1999/xhtml", dd = "http://www.w3.org/2000/svg", fd = "@attach", iu = !1;
var ds = Array.isArray, hd = Array.prototype.indexOf, bo = Array.from, Za = Object.defineProperty, yr = Object.getOwnPropertyDescriptor, au = Object.getOwnPropertyDescriptors, vd = Object.prototype, md = Array.prototype, _o = Object.getPrototypeOf, Wo = Object.isExtensible;
function yi(t) {
  return typeof t == "function";
}
const le = () => {
};
function su(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function ou() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const $t = 2, yo = 4, Io = 8, Cr = 16, sr = 32, ni = 64, Eo = 128, Sn = 256, Ya = 512, jt = 1024, hn = 2048, xr = 4096, Mn = 8192, ri = 16384, fs = 32768, Tr = 65536, Xo = 1 << 17, gd = 1 << 18, qi = 1 << 19, pd = 1 << 20, zs = 1 << 21, hs = 1 << 22, Zr = 1 << 23, jn = Symbol("$state"), lu = Symbol("legacy props"), bd = Symbol(""), Ii = new class extends Error {
  constructor() {
    super(...arguments);
    vi(this, "name", "StaleReactionError");
    vi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function So(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function _d() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function yd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Id() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ed(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Sd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ad(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Cd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function xd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Td() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function wd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ld() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Od() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Rd = !1;
function uu(t) {
  return t === this.v;
}
function Ao(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function cu(t) {
  return !Ao(t, this.v);
}
let zi = !1, Md = !1;
function Dd() {
  zi = !0;
}
let at = null;
function Hi(t) {
  at = t;
}
function se(t) {
  return (
    /** @type {T} */
    du().get(t)
  );
}
function te(t, e) {
  return du().set(t, e), e;
}
function we(t, e = !1, n) {
  at = {
    p: at,
    c: null,
    e: null,
    s: t,
    x: null,
    l: zi && !e ? { s: null, u: null, $: [] } : null
  };
}
function Le(t) {
  var e = (
    /** @type {ComponentContext} */
    at
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Tu(r);
  }
  return t !== void 0 && (e.x = t), at = e.p, t ?? /** @type {T} */
  {};
}
function _a() {
  return !zi || at !== null && at.l === null;
}
function du(t) {
  return at === null && So(), at.c ?? (at.c = new Map(Hd(at) || void 0));
}
function Hd(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Gr = [];
function fu() {
  var t = Gr;
  Gr = [], su(t);
}
function ar(t) {
  if (Gr.length === 0 && !ua) {
    var e = Gr;
    queueMicrotask(() => {
      e === Gr && fu();
    });
  }
  Gr.push(t);
}
function Nd() {
  for (; Gr.length > 0; )
    fu();
}
const Pd = /* @__PURE__ */ new WeakMap();
function hu(t) {
  var e = Ve;
  if (e === null)
    return Be.f |= Zr, t;
  if (e.f & fs)
    Ni(t, e);
  else {
    if (!(e.f & Eo))
      throw !e.parent && t instanceof Error && vu(t), t;
    e.b.error(t);
  }
}
function Ni(t, e) {
  for (; e !== null; ) {
    if (e.f & Eo)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && vu(t), t;
}
function vu(t) {
  const e = Pd.get(t);
  e && (Za(t, "message", {
    value: e.message
  }), Za(t, "stack", {
    value: e.stack
  }));
}
const La = /* @__PURE__ */ new Set();
let rt = null, Ga = null, Nt = null, Ws = /* @__PURE__ */ new Set(), Vn = [], vs = null, Xs = !1, ua = !1;
var wi, Li, qr, ga, Oi, Ri, zr, Mi, pa, ba, An, Ks, ja, Zs;
const ls = class ls {
  constructor() {
    Qe(this, An);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    vi(this, "current", /* @__PURE__ */ new Map());
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
    Qe(this, qr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Qe(this, ga, null);
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
    Qe(this, zr, []);
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
    Qe(this, pa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Qe(this, ba, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    vi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Vn = [], Ga = null, this.apply();
    for (const s of e)
      Vt(this, An, Ks).call(this, s);
    if ($(this, qr) === 0) {
      var n = Nt;
      Vt(this, An, Zs).call(this);
      var r = $(this, Ri), i = $(this, zr);
      Me(this, Ri, []), Me(this, zr, []), Me(this, Mi, []), Ga = this, rt = null, Nt = n, Ko(r), Ko(i), Ga = null, (a = $(this, ga)) == null || a.resolve();
    } else
      Vt(this, An, ja).call(this, $(this, Ri)), Vt(this, An, ja).call(this, $(this, zr)), Vt(this, An, ja).call(this, $(this, Mi));
    Nt = null;
    for (const s of $(this, Oi))
      fa(s);
    Me(this, Oi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    $(this, wi).has(e) || $(this, wi).set(e, n), this.current.set(e, e.v), Nt == null || Nt.set(e, e.v);
  }
  activate() {
    rt = this;
  }
  deactivate() {
    rt = null, Nt = null;
  }
  flush() {
    if (Vn.length > 0) {
      if (this.activate(), mu(), rt !== null && rt !== this)
        return;
    } else $(this, qr) === 0 && Vt(this, An, Zs).call(this);
    this.deactivate();
    for (const e of Ws)
      if (Ws.delete(e), e(), rt !== null)
        break;
  }
  increment() {
    Me(this, qr, $(this, qr) + 1);
  }
  decrement() {
    Me(this, qr, $(this, qr) - 1);
    for (const e of $(this, pa))
      Qt(e, hn), $r(e);
    for (const e of $(this, ba))
      Qt(e, xr), $r(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    $(this, Li).add(e);
  }
  settled() {
    return ($(this, ga) ?? Me(this, ga, ou())).promise;
  }
  static ensure() {
    if (rt === null) {
      const e = rt = new ls();
      La.add(rt), ua || ls.enqueue(() => {
        rt === e && e.flush();
      });
    }
    return rt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    ar(e);
  }
  apply() {
  }
};
wi = new WeakMap(), Li = new WeakMap(), qr = new WeakMap(), ga = new WeakMap(), Oi = new WeakMap(), Ri = new WeakMap(), zr = new WeakMap(), Mi = new WeakMap(), pa = new WeakMap(), ba = new WeakMap(), An = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Ks = function(e) {
  var c;
  e.f ^= jt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (sr | ni)) !== 0, a = i && (r & jt) !== 0, s = a || (r & Mn) !== 0 || this.skipped_effects.has(n);
    if (!s && n.fn !== null) {
      i ? n.f ^= jt : r & yo ? $(this, zr).push(n) : r & jt || (r & hs && ((c = n.b) != null && c.is_pending()) ? $(this, Oi).push(n) : bs(n) && (n.f & Cr && $(this, Mi).push(n), fa(n)));
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
ja = function(e) {
  for (const n of e)
    (n.f & hn ? $(this, pa) : $(this, ba)).push(n), Qt(n, jt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Zs = function() {
  var e;
  for (const n of $(this, Li))
    n();
  if ($(this, Li).clear(), La.size > 1) {
    $(this, wi).clear();
    let n = !0;
    for (const r of La) {
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
          gu(s, a);
        if (Vn.length > 0) {
          rt = r, r.apply();
          for (const s of Vn)
            Vt(e = r, An, Ks).call(e, s);
          Vn = [], r.deactivate();
        }
      }
    }
    rt = null;
  }
  La.delete(this);
};
let rr = ls;
function Ud(t) {
  var e = ua;
  ua = !0;
  try {
    for (var n; ; ) {
      if (Nd(), Vn.length === 0 && (rt == null || rt.flush(), Vn.length === 0))
        return vs = null, /** @type {T} */
        n;
      mu();
    }
  } finally {
    ua = e;
  }
}
function mu() {
  var t = Ci;
  Xs = !0;
  try {
    var e = 0;
    for (Qo(!0); Vn.length > 0; ) {
      var n = rr.ensure();
      if (e++ > 1e3) {
        var r, i;
        Fd();
      }
      n.process(Vn), Ir.clear();
    }
  } finally {
    Xs = !1, Qo(t), vs = null;
  }
}
function Fd() {
  try {
    Sd();
  } catch (t) {
    Ni(t, vs);
  }
}
let tr = null;
function Ko(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ri | Mn)) && bs(r) && (tr = [], fa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Ou(r) : r.fn = null), (tr == null ? void 0 : tr.length) > 0)) {
        Ir.clear();
        for (const i of tr)
          fa(i);
        tr = [];
      }
    }
    tr = null;
  }
}
function gu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & $t ? gu(
        /** @type {Derived} */
        n,
        e
      ) : r & (hs | Cr) && pu(n, e) && (Qt(n, hn), $r(
        /** @type {Effect} */
        n
      ));
    }
}
function pu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & $t && pu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function $r(t) {
  for (var e = vs = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Xs && e === Ve && n & Cr)
      return;
    if (n & (ni | sr)) {
      if (!(n & jt)) return;
      e.f ^= jt;
    }
  }
  Vn.push(e);
}
function kd(t) {
  let e = 0, n = ei(0), r;
  return () => {
    nf() && (o(n), Ia(() => (e === 0 && (r = zn(() => t(() => ca(n)))), e += 1, () => {
      ar(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, ca(n));
      });
    })));
  };
}
var Bd = Tr | qi | Eo;
function Vd(t, e, n) {
  new Gd(t, e, n);
}
var Ln, In, po, Fn, Wr, kn, En, rn, Bn, vr, Xr, mr, Kr, gr, us, cs, Jt, jd, qd, qa, za, Ys;
class Gd {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Qe(this, Jt);
    /** @type {Boundary | null} */
    vi(this, "parent");
    Qe(this, Ln, !1);
    /** @type {TemplateNode} */
    Qe(this, In);
    /** @type {TemplateNode | null} */
    Qe(this, po, null);
    /** @type {BoundaryProps} */
    Qe(this, Fn);
    /** @type {((anchor: Node) => void)} */
    Qe(this, Wr);
    /** @type {Effect} */
    Qe(this, kn);
    /** @type {Effect | null} */
    Qe(this, En, null);
    /** @type {Effect | null} */
    Qe(this, rn, null);
    /** @type {Effect | null} */
    Qe(this, Bn, null);
    /** @type {DocumentFragment | null} */
    Qe(this, vr, null);
    Qe(this, Xr, 0);
    Qe(this, mr, 0);
    Qe(this, Kr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Qe(this, gr, null);
    Qe(this, us, () => {
      $(this, gr) && Pi($(this, gr), $(this, Xr));
    });
    Qe(this, cs, kd(() => (Me(this, gr, ei($(this, Xr))), () => {
      Me(this, gr, null);
    })));
    Me(this, In, e), Me(this, Fn, n), Me(this, Wr, r), this.parent = /** @type {Effect} */
    Ve.b, Me(this, Ln, !!$(this, Fn).pending), Me(this, kn, Lr(() => {
      Ve.b = this;
      {
        try {
          Me(this, En, Gt(() => r($(this, In))));
        } catch (i) {
          this.error(i);
        }
        $(this, mr) > 0 ? Vt(this, Jt, za).call(this) : Me(this, Ln, !1);
      }
    }, Bd));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return $(this, Ln) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!$(this, Fn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Vt(this, Jt, Ys).call(this, e), Me(this, Xr, $(this, Xr) + e), Ws.add($(this, us));
  }
  get_effect_pending() {
    return $(this, cs).call(this), o(
      /** @type {Source<number>} */
      $(this, gr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = $(this, Fn).onerror;
    let r = $(this, Fn).failed;
    if ($(this, Kr) || !n && !r)
      throw e;
    $(this, En) && (Pt($(this, En)), Me(this, En, null)), $(this, rn) && (Pt($(this, rn)), Me(this, rn, null)), $(this, Bn) && (Pt($(this, Bn)), Me(this, Bn, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        Od();
        return;
      }
      i = !0, a && wd(), rr.ensure(), Me(this, Xr, 0), $(this, Bn) !== null && Er($(this, Bn), () => {
        Me(this, Bn, null);
      }), Me(this, Ln, this.has_pending_snippet()), Me(this, En, Vt(this, Jt, qa).call(this, () => (Me(this, Kr, !1), Gt(() => $(this, Wr).call(this, $(this, In)))))), $(this, mr) > 0 ? Vt(this, Jt, za).call(this) : Me(this, Ln, !1);
    };
    var u = Be;
    try {
      an(null), a = !0, n == null || n(e, s), a = !1;
    } catch (l) {
      Ni(l, $(this, kn) && $(this, kn).parent);
    } finally {
      an(u);
    }
    r && ar(() => {
      Me(this, Bn, Vt(this, Jt, qa).call(this, () => {
        Me(this, Kr, !0);
        try {
          return Gt(() => {
            r(
              $(this, In),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return Ni(
            l,
            /** @type {Effect} */
            $(this, kn).parent
          ), null;
        } finally {
          Me(this, Kr, !1);
        }
      }));
    });
  }
}
Ln = new WeakMap(), In = new WeakMap(), po = new WeakMap(), Fn = new WeakMap(), Wr = new WeakMap(), kn = new WeakMap(), En = new WeakMap(), rn = new WeakMap(), Bn = new WeakMap(), vr = new WeakMap(), Xr = new WeakMap(), mr = new WeakMap(), Kr = new WeakMap(), gr = new WeakMap(), us = new WeakMap(), cs = new WeakMap(), Jt = new WeakSet(), jd = function() {
  try {
    Me(this, En, Gt(() => $(this, Wr).call(this, $(this, In))));
  } catch (e) {
    this.error(e);
  }
  Me(this, Ln, !1);
}, qd = function() {
  const e = $(this, Fn).pending;
  e && (Me(this, rn, Gt(() => e($(this, In)))), rr.enqueue(() => {
    Me(this, En, Vt(this, Jt, qa).call(this, () => (rr.ensure(), Gt(() => $(this, Wr).call(this, $(this, In)))))), $(this, mr) > 0 ? Vt(this, Jt, za).call(this) : (Er(
      /** @type {Effect} */
      $(this, rn),
      () => {
        Me(this, rn, null);
      }
    ), Me(this, Ln, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
qa = function(e) {
  var n = Ve, r = Be, i = at;
  qn($(this, kn)), an($(this, kn)), Hi($(this, kn).ctx);
  try {
    return e();
  } catch (a) {
    return hu(a), null;
  } finally {
    qn(n), an(r), Hi(i);
  }
}, za = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    $(this, Fn).pending
  );
  $(this, En) !== null && (Me(this, vr, document.createDocumentFragment()), zd($(this, En), $(this, vr))), $(this, rn) === null && Me(this, rn, Gt(() => e($(this, In))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Ys = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Vt(n = this.parent, Jt, Ys).call(n, e);
    return;
  }
  Me(this, mr, $(this, mr) + e), $(this, mr) === 0 && (Me(this, Ln, !1), $(this, rn) && Er($(this, rn), () => {
    Me(this, rn, null);
  }), $(this, vr) && ($(this, In).before($(this, vr)), Me(this, vr, null)), ar(() => {
    rr.ensure().flush();
  }));
};
function zd(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ya(n)
    );
    e.append(n), n = i;
  }
}
function bu(t, e, n) {
  const r = _a() ? ms : Co;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = rt, a = (
    /** @type {Effect} */
    Ve
  ), s = Wd();
  Promise.all(e.map((u) => /* @__PURE__ */ Xd(u))).then((u) => {
    s();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & ri || Ni(l, a);
    }
    i == null || i.deactivate(), Qs();
  }).catch((u) => {
    Ni(u, a);
  });
}
function Wd() {
  var t = Ve, e = Be, n = at, r = rt;
  return function() {
    qn(t), an(e), Hi(n), r == null || r.activate();
  };
}
function Qs() {
  qn(null), an(null), Hi(null);
}
// @__NO_SIDE_EFFECTS__
function ms(t) {
  var e = $t | hn, n = Be !== null && Be.f & $t ? (
    /** @type {Derived} */
    Be
  ) : null;
  return Ve === null || n !== null && n.f & Sn ? e |= Sn : Ve.f |= qi, {
    ctx: at,
    deps: null,
    effects: null,
    equals: uu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Rt
    ),
    wv: 0,
    parent: n ?? Ve,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Xd(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ve
  );
  n === null && _d();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ei(
    /** @type {V} */
    Rt
  ), s = !Be, u = /* @__PURE__ */ new Map();
  return af(() => {
    var f;
    var l = ou();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(Qs);
    } catch (m) {
      l.reject(m), Qs();
    }
    var c = (
      /** @type {Batch} */
      rt
    ), d = r.is_pending();
    s && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(Ii), u.delete(c), u.set(c, l)));
    const h = (m, v = void 0) => {
      if (d || c.activate(), v)
        v !== Ii && (a.f |= Zr, Pi(a, v));
      else {
        a.f & Zr && (a.f ^= Zr), Pi(a, m);
        for (const [g, _] of u) {
          if (u.delete(g), g === c) break;
          _.reject(Ii);
        }
      }
      s && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (m) => h(null, m || "unknown"));
  }), gs(() => {
    for (const l of u.values())
      l.reject(Ii);
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
function me(t) {
  const e = /* @__PURE__ */ ms(t);
  return Du(e), e;
}
// @__NO_SIDE_EFFECTS__
function Co(t) {
  const e = /* @__PURE__ */ ms(t);
  return e.equals = cu, e;
}
function _u(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Pt(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Kd(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & $t))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function xo(t) {
  var e, n = Ve;
  qn(Kd(t));
  try {
    _u(t), e = Uu(t);
  } finally {
    qn(n);
  }
  return e;
}
function yu(t) {
  var e = xo(t);
  if (t.equals(e) || (t.v = e, t.wv = Nu()), !ai)
    if (Nt !== null)
      Nt.set(t, t.v);
    else {
      var n = (br || t.f & Sn) && t.deps !== null ? xr : jt;
      Qt(t, n);
    }
}
const Ir = /* @__PURE__ */ new Map();
function ei(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: uu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function pe(t, e) {
  const n = ei(t);
  return Du(n), n;
}
// @__NO_SIDE_EFFECTS__
function Iu(t, e = !1, n = !0) {
  var i;
  const r = ei(t);
  return e || (r.equals = cu), zi && n && at !== null && at.l !== null && ((i = at.l).s ?? (i.s = [])).push(r), r;
}
function Z(t, e, n = !1) {
  Be !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!On || Be.f & Xo) && _a() && Be.f & ($t | Cr | hs | Xo) && !(Yt != null && Yt.includes(t)) && Td();
  let r = n ? Ae(e) : e;
  return Pi(t, r);
}
function Pi(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    ai ? Ir.set(t, e) : Ir.set(t, n), t.v = e;
    var r = rr.ensure();
    r.capture(t, n), t.f & $t && (t.f & hn && xo(
      /** @type {Derived} */
      t
    ), Qt(t, t.f & Sn ? xr : jt)), t.wv = Nu(), Eu(t, hn), _a() && Ve !== null && Ve.f & jt && !(Ve.f & (sr | ni)) && (yn === null ? lf([t]) : yn.push(t));
  }
  return e;
}
function ca(t) {
  Z(t, t.v + 1);
}
function Eu(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = _a(), i = n.length, a = 0; a < i; a++) {
      var s = n[a], u = s.f;
      if (!(!r && s === Ve)) {
        var l = (u & hn) === 0;
        l && Qt(s, e), u & $t ? Eu(
          /** @type {Derived} */
          s,
          xr
        ) : l && (u & Cr && tr !== null && tr.push(
          /** @type {Effect} */
          s
        ), $r(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ae(t) {
  if (typeof t != "object" || t === null || jn in t)
    return t;
  const e = _o(t);
  if (e !== vd && e !== md)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ds(t), i = /* @__PURE__ */ pe(0), a = Yr, s = (u) => {
    if (Yr === a)
      return u();
    var l = Be, c = Yr;
    an(null), $o(a);
    var d = u();
    return an(l), $o(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ pe(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Cd();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var h = /* @__PURE__ */ pe(c.value);
          return n.set(l, h), h;
        }) : Z(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = s(() => /* @__PURE__ */ pe(Rt));
            n.set(l, d), ca(i);
          }
        } else
          Z(c, Rt), ca(i);
        return !0;
      },
      get(u, l, c) {
        var m;
        if (l === jn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (m = yr(u, l)) != null && m.writable) && (d = s(() => {
          var v = Ae(h ? u[l] : Rt), g = /* @__PURE__ */ pe(v);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = o(d);
          return f === Rt ? void 0 : f;
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
          if (h !== void 0 && f !== Rt)
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
        if (l === jn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Rt || Reflect.has(u, l);
        if (c !== void 0 || Ve !== null && (!d || (f = yr(u, l)) != null && f.writable)) {
          c === void 0 && (c = s(() => {
            var m = d ? Ae(u[l]) : Rt, v = /* @__PURE__ */ pe(m);
            return v;
          }), n.set(l, c));
          var h = o(c);
          if (h === Rt)
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
            v !== void 0 ? Z(v, Rt) : m in u && (v = s(() => /* @__PURE__ */ pe(Rt)), n.set(m + "", v));
          }
        if (h === void 0)
          (!f || (A = yr(u, l)) != null && A.writable) && (h = s(() => /* @__PURE__ */ pe(void 0)), Z(h, Ae(c)), n.set(l, h));
        else {
          f = h.v !== Rt;
          var g = s(() => Ae(c));
          Z(h, g);
        }
        var _ = Reflect.getOwnPropertyDescriptor(u, l);
        if (_ != null && _.set && _.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), S = Number(l);
            Number.isInteger(S) && S >= E.v && Z(E, S + 1);
          }
          ca(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Rt;
        });
        for (var [c, d] of n)
          d.v !== Rt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        xd();
      }
    }
  );
}
function Zo(t) {
  try {
    if (t !== null && typeof t == "object" && jn in t)
      return t[jn];
  } catch {
  }
  return t;
}
function Zd(t, e) {
  return Object.is(Zo(t), Zo(e));
}
var Qa, To, Su, Au, Cu;
function Yd() {
  if (Qa === void 0) {
    Qa = window, To = document, Su = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    Au = yr(e, "firstChild").get, Cu = yr(e, "nextSibling").get, Wo(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Wo(n) && (n.__t = void 0);
  }
}
function wr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ui(t) {
  return Au.call(t);
}
// @__NO_SIDE_EFFECTS__
function ya(t) {
  return Cu.call(t);
}
function be(t, e) {
  return /* @__PURE__ */ Ui(t);
}
function Q(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ui(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ya(n) : n;
  }
}
function ye(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ ya(r);
  return r;
}
function Qd(t) {
  t.textContent = "";
}
function wo() {
  return !1;
}
function Jd(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, ar(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let Yo = !1;
function $d() {
  Yo || (Yo = !0, document.addEventListener(
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
function Wi(t) {
  var e = Be, n = Ve;
  an(null), qn(null);
  try {
    return t();
  } finally {
    an(e), qn(n);
  }
}
function xu(t, e, n, r = n) {
  t.addEventListener(e, () => Wi(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), $d();
}
function ef(t) {
  Ve === null && Be === null && Ed(), Be !== null && Be.f & Sn && Ve === null && Id(), ai && yd();
}
function tf(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function or(t, e, n, r = !0) {
  var i = Ve;
  i !== null && i.f & Mn && (t |= Mn);
  var a = {
    ctx: at,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | hn,
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
      fa(a), a.f |= fs;
    } catch (l) {
      throw Pt(a), l;
    }
  else e !== null && $r(a);
  if (r) {
    var s = a;
    if (n && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & qi) && (s = s.first), s !== null && (s.parent = i, i !== null && tf(s, i), Be !== null && Be.f & $t && !(t & ni))) {
      var u = (
        /** @type {Derived} */
        Be
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function nf() {
  return Be !== null && !On;
}
function gs(t) {
  const e = or(Io, null, !1);
  return Qt(e, jt), e.teardown = t, e;
}
function Te(t) {
  ef();
  var e = (
    /** @type {Effect} */
    Ve.f
  ), n = !Be && (e & sr) !== 0 && (e & fs) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      at
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Tu(t);
}
function Tu(t) {
  return or(yo | pd, t, !1);
}
function rf(t) {
  rr.ensure();
  const e = or(ni | qi, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Er(e, () => {
      Pt(e), r(void 0);
    }) : (Pt(e), r(void 0));
  });
}
function ii(t) {
  return or(yo, t, !1);
}
function af(t) {
  return or(hs | qi, t, !0);
}
function Ia(t, e = 0) {
  return or(Io | e, t, !0);
}
function De(t, e = [], n = []) {
  bu(e, n, (r) => {
    or(Io, () => t(...r.map(o)), !0);
  });
}
function Lr(t, e = 0) {
  var n = or(Cr | e, t, !0);
  return n;
}
function Gt(t, e = !0) {
  return or(sr | qi, t, !0, e);
}
function wu(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ai, r = Be;
    Jo(!0), an(null);
    try {
      e.call(null);
    } finally {
      Jo(n), an(r);
    }
  }
}
function Lu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && Wi(() => {
      i.abort(Ii);
    });
    var r = n.next;
    n.f & ni ? n.parent = null : Pt(n, e), n = r;
  }
}
function sf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & sr || Pt(e), e = n;
  }
}
function Pt(t, e = !0) {
  var n = !1;
  (e || t.f & gd) && t.nodes_start !== null && t.nodes_end !== null && (of(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Lu(t, e && !n), Ja(t, 0), Qt(t, ri);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  wu(t);
  var i = t.parent;
  i !== null && i.first !== null && Ou(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function of(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ya(t)
    );
    t.remove(), t = n;
  }
}
function Ou(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Er(t, e) {
  var n = [];
  Lo(t, n, !0), Ru(n, () => {
    Pt(t), e && e();
  });
}
function Ru(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Lo(t, e, n) {
  if (!(t.f & Mn)) {
    if (t.f ^= Mn, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & Tr) !== 0 || (r.f & sr) !== 0;
      Lo(r, e, a ? n : !1), r = i;
    }
  }
}
function ps(t) {
  Mu(t, !0);
}
function Mu(t, e) {
  if (t.f & Mn) {
    t.f ^= Mn, t.f & jt || (Qt(t, hn), $r(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & Tr) !== 0 || (n.f & sr) !== 0;
      Mu(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Ci = !1;
function Qo(t) {
  Ci = t;
}
let ai = !1;
function Jo(t) {
  ai = t;
}
let Be = null, On = !1;
function an(t) {
  Be = t;
}
let Ve = null;
function qn(t) {
  Ve = t;
}
let Yt = null;
function Du(t) {
  Be !== null && (Yt === null ? Yt = [t] : Yt.push(t));
}
let Kt = null, dn = 0, yn = null;
function lf(t) {
  yn = t;
}
let Hu = 1, da = 0, Yr = da;
function $o(t) {
  Yr = t;
}
let br = !1;
function Nu() {
  return ++Hu;
}
function bs(t) {
  var h;
  var e = t.f;
  if (e & hn)
    return !0;
  if (e & xr) {
    var n = t.deps, r = (e & Sn) !== 0;
    if (n !== null) {
      var i, a, s = (e & Ya) !== 0, u = r && Ve !== null && !br, l = n.length;
      if ((s || u) && (Ve === null || !(Ve.f & ri))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= Ya), u && d !== null && !(d.f & Sn) && (c.f ^= Sn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], bs(
          /** @type {Derived} */
          a
        ) && yu(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ve !== null && !br) && Qt(t, jt);
  }
  return !1;
}
function Pu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Yt != null && Yt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & $t ? Pu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? Qt(a, hn) : a.f & jt && Qt(a, xr), $r(
        /** @type {Effect} */
        a
      ));
    }
}
function Uu(t) {
  var g;
  var e = Kt, n = dn, r = yn, i = Be, a = br, s = Yt, u = at, l = On, c = Yr, d = t.f;
  Kt = /** @type {null | Value[]} */
  null, dn = 0, yn = null, br = (d & Sn) !== 0 && (On || !Ci || Be === null), Be = d & (sr | ni) ? null : t, Yt = null, Hi(t.ctx), On = !1, Yr = ++da, t.ac !== null && (Wi(() => {
    t.ac.abort(Ii);
  }), t.ac = null);
  try {
    t.f |= zs;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), m = t.deps;
    if (Kt !== null) {
      var v;
      if (Ja(t, dn), m !== null && dn > 0)
        for (m.length = dn + Kt.length, v = 0; v < Kt.length; v++)
          m[dn + v] = Kt[v];
      else
        t.deps = m = Kt;
      if (!br || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & $t && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = dn; v < m.length; v++)
          ((g = m[v]).reactions ?? (g.reactions = [])).push(t);
    } else m !== null && dn < m.length && (Ja(t, dn), m.length = dn);
    if (_a() && yn !== null && !On && m !== null && !(t.f & ($t | xr | hn)))
      for (v = 0; v < /** @type {Source[]} */
      yn.length; v++)
        Pu(
          yn[v],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (da++, yn !== null && (r === null ? r = yn : r.push(.../** @type {Source[]} */
    yn))), t.f & Zr && (t.f ^= Zr), f;
  } catch (_) {
    return hu(_);
  } finally {
    t.f ^= zs, Kt = e, dn = n, yn = r, Be = i, br = a, Yt = s, Hi(u), On = l, Yr = c;
  }
}
function uf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = hd.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & $t && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Kt === null || !Kt.includes(e)) && (Qt(e, xr), e.f & (Sn | Ya) || (e.f ^= Ya), _u(
    /** @type {Derived} **/
    e
  ), Ja(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Ja(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      uf(t, n[r]);
}
function fa(t) {
  var e = t.f;
  if (!(e & ri)) {
    Qt(t, jt);
    var n = Ve, r = Ci;
    Ve = t, Ci = !0;
    try {
      e & Cr ? sf(t) : Lu(t), wu(t);
      var i = Uu(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Hu;
      var a;
      iu && Md && t.f & hn && t.deps;
    } finally {
      Ci = r, Ve = n;
    }
  }
}
async function Fu() {
  await Promise.resolve(), Ud();
}
function o(t) {
  var e = t.f, n = (e & $t) !== 0;
  if (Be !== null && !On) {
    var r = Ve !== null && (Ve.f & ri) !== 0;
    if (!r && !(Yt != null && Yt.includes(t))) {
      var i = Be.deps;
      if (Be.f & zs)
        t.rv < da && (t.rv = da, Kt === null && i !== null && i[dn] === t ? dn++ : Kt === null ? Kt = [t] : (!br || !Kt.includes(t)) && Kt.push(t));
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
    u !== null && !(u.f & Sn) && (s.f ^= Sn);
  }
  if (ai) {
    if (Ir.has(t))
      return Ir.get(t);
    if (n) {
      s = /** @type {Derived} */
      t;
      var l = s.v;
      return (!(s.f & jt) && s.reactions !== null || ku(s)) && (l = xo(s)), Ir.set(s, l), l;
    }
  } else if (n) {
    if (s = /** @type {Derived} */
    t, Nt != null && Nt.has(s))
      return Nt.get(s);
    bs(s) && yu(s);
  }
  if (Nt != null && Nt.has(t))
    return Nt.get(t);
  if (t.f & Zr)
    throw t.v;
  return t.v;
}
function ku(t) {
  if (t.v === Rt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (Ir.has(e) || e.f & $t && ku(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function zn(t) {
  var e = On;
  try {
    return On = !0, t();
  } finally {
    On = e;
  }
}
const cf = -7169;
function Qt(t, e) {
  t.f = t.f & cf | e;
}
function df(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (jn in t)
      Js(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && jn in n && Js(n);
      }
  }
}
function Js(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Js(t[r], e);
      } catch {
      }
    const n = _o(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = au(n);
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
const Bu = /* @__PURE__ */ new Set(), $s = /* @__PURE__ */ new Set();
function Oo(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || oa.call(e, a), !a.cancelBubble)
      return Wi(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? ar(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function ff(t, e, n, r = {}) {
  var i = Oo(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function ir(t, e, n, r, i) {
  var a = { capture: r, passive: i }, s = Oo(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && gs(() => {
    e.removeEventListener(t, s, a);
  });
}
function xn(t) {
  for (var e = 0; e < t.length; e++)
    Bu.add(t[e]);
  for (var n of $s)
    n(t);
}
let el = null;
function oa(t) {
  var S;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((S = t.composedPath) == null ? void 0 : S.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  el = t;
  var s = 0, u = el === t && t.__root;
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
    Za(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Be, h = Ve;
    an(null), qn(null);
    try {
      for (var f, m = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + r];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (ds(g)) {
              var [_, ...E] = g;
              _.apply(a, [t, ...E]);
            } else
              g.call(a, t);
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
      t.__root = e, delete t.currentTarget, an(d), qn(h);
    }
  }
}
function Vu(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Fi(t, e) {
  var n = (
    /** @type {Effect} */
    Ve
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function ge(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Vu(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Ui(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Su ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ui(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Fi(u, l);
    } else
      Fi(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function hf(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        Vu(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Ui(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ui(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Fi(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function sn(t, e) {
  return /* @__PURE__ */ hf(t, e, "svg");
}
function qt(t = "") {
  {
    var e = wr(t + "");
    return Fi(e, e), e;
  }
}
function ee() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = wr();
  return t.append(e, n), Fi(e, n), t;
}
function L(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function vf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const mf = [
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
function gf(t) {
  return mf.includes(t);
}
const pf = {
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
function bf(t) {
  return t = t.toLowerCase(), pf[t] ?? t;
}
const _f = ["touchstart", "touchmove"];
function yf(t) {
  return _f.includes(t);
}
let $a = !0;
function tl(t) {
  $a = t;
}
function ht(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function If(t, e) {
  return Ef(t, e);
}
const mi = /* @__PURE__ */ new Map();
function Ef(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: s = !0 }) {
  Yd();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var m = h[f];
      if (!u.has(m)) {
        u.add(m);
        var v = yf(m);
        e.addEventListener(m, oa, { passive: v });
        var g = mi.get(m);
        g === void 0 ? (document.addEventListener(m, oa, { passive: v }), mi.set(m, 1)) : mi.set(m, g + 1);
      }
    }
  };
  l(bo(Bu)), $s.add(l);
  var c = void 0, d = rf(() => {
    var h = n ?? e.appendChild(wr());
    return Vd(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          we({});
          var m = (
            /** @type {ComponentContext} */
            at
          );
          m.c = a;
        }
        i && (r.$$events = i), $a = s, c = t(f, r) || {}, $a = !0, a && Le();
      }
    ), () => {
      var v;
      for (var f of u) {
        e.removeEventListener(f, oa);
        var m = (
          /** @type {number} */
          mi.get(f)
        );
        --m === 0 ? (document.removeEventListener(f, oa), mi.delete(f)) : mi.set(f, m);
      }
      $s.delete(l), h !== n && ((v = h.parentNode) == null || v.removeChild(h));
    };
  });
  return Sf.set(c, d), c;
}
let Sf = /* @__PURE__ */ new WeakMap();
function Ie(t, e, ...n) {
  var r = t, i = le, a;
  Lr(() => {
    i !== (i = e()) && (a && (Pt(a), a = null), a = Gt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, Tr);
}
function st(t) {
  at === null && So(), zi && at.l !== null ? Af(at).m.push(t) : Te(() => {
    const e = zn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function mn(t) {
  at === null && So(), st(() => () => zn(t));
}
function Af(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ae(t, e, n = !1) {
  var r = t, i = null, a = null, s = Rt, u = n ? Tr : 0, l = !1;
  const c = (m, v = !0) => {
    l = !0, f(v, m);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var m = s ? i : a, v = s ? a : i;
    m && ps(m), v && Er(v, () => {
      s ? a = null : i = null;
    });
  }
  const f = (m, v) => {
    if (s !== (s = m)) {
      var g = wo(), _ = r;
      if (g && (d = document.createDocumentFragment(), d.append(_ = wr())), s ? i ?? (i = v && Gt(() => v(_))) : a ?? (a = v && Gt(() => v(_))), g) {
        var E = (
          /** @type {Batch} */
          rt
        ), S = s ? i : a, A = s ? a : i;
        S && E.skipped_effects.delete(S), A && E.skipped_effects.add(A), E.add_callback(h);
      } else
        h();
    }
  };
  Lr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
function Ei(t, e) {
  return e;
}
function Cf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, s = 0; s < a; s++)
    Lo(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Qd(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Un(t, e[0].prev, e[a - 1].next);
  }
  Ru(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Un(t, d.prev, d.next)), Pt(d.e, !u);
    }
  });
}
function hr(t, e, n, r, i, a = null) {
  var s = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    s = c.appendChild(wr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ Co(() => {
    var E = n();
    return ds(E) ? E : E == null ? [] : bo(E);
  }), v, g;
  function _() {
    xf(
      g,
      v,
      u,
      f,
      s,
      i,
      e,
      r,
      n
    ), a !== null && (v.length === 0 ? d ? ps(d) : d = Gt(() => a(s)) : d !== null && Er(d, () => {
      d = null;
    }));
  }
  Lr(() => {
    g ?? (g = /** @type {Effect} */
    Ve), v = /** @type {V[]} */
    o(m);
    var E = v.length;
    if (!(h && E === 0)) {
      h = E === 0;
      var S, A, b, I;
      if (wo()) {
        var y = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          rt
        );
        for (A = 0; A < E; A += 1) {
          b = v[A], I = r(b, A);
          var x = u.items.get(I) ?? f.get(I);
          x ? e & 3 && Gu(x, b, A, e) : (S = ju(
            null,
            u,
            null,
            null,
            b,
            I,
            A,
            i,
            e,
            n,
            !0
          ), f.set(I, S)), y.add(I);
        }
        for (const [C, P] of u.items)
          y.has(C) || T.skipped_effects.add(P.e);
        T.add_callback(_);
      } else
        _();
      o(m);
    }
  });
}
function xf(t, e, n, r, i, a, s, u, l) {
  var z, R, w, U;
  var c = (s & 8) !== 0, d = (s & 3) !== 0, h = e.length, f = n.items, m = n.first, v = m, g, _ = null, E, S = [], A = [], b, I, y, T;
  if (c)
    for (T = 0; T < h; T += 1)
      b = e[T], I = u(b, T), y = f.get(I), y !== void 0 && ((z = y.a) == null || z.measure(), (E ?? (E = /* @__PURE__ */ new Set())).add(y));
  for (T = 0; T < h; T += 1) {
    if (b = e[T], I = u(b, T), y = f.get(I), y === void 0) {
      var x = r.get(I);
      if (x !== void 0) {
        r.delete(I), f.set(I, x);
        var C = _ ? _.next : v;
        Un(n, _, x), Un(n, x, C), Cs(x, C, i), _ = x;
      } else {
        var P = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : i;
        _ = ju(
          P,
          n,
          _,
          _ === null ? n.first : _.next,
          b,
          I,
          T,
          a,
          s,
          l
        );
      }
      f.set(I, _), S = [], A = [], v = _.next;
      continue;
    }
    if (d && Gu(y, b, T, s), y.e.f & Mn && (ps(y.e), c && ((R = y.a) == null || R.unfix(), (E ?? (E = /* @__PURE__ */ new Set())).delete(y))), y !== v) {
      if (g !== void 0 && g.has(y)) {
        if (S.length < A.length) {
          var K = A[0], k;
          _ = K.prev;
          var B = S[0], ve = S[S.length - 1];
          for (k = 0; k < S.length; k += 1)
            Cs(S[k], K, i);
          for (k = 0; k < A.length; k += 1)
            g.delete(A[k]);
          Un(n, B.prev, ve.next), Un(n, _, B), Un(n, ve, K), v = K, _ = ve, T -= 1, S = [], A = [];
        } else
          g.delete(y), Cs(y, v, i), Un(n, y.prev, y.next), Un(n, y, _ === null ? n.first : _.next), Un(n, _, y), _ = y;
        continue;
      }
      for (S = [], A = []; v !== null && v.k !== I; )
        v.e.f & Mn || (g ?? (g = /* @__PURE__ */ new Set())).add(v), A.push(v), v = v.next;
      if (v === null)
        continue;
      y = v;
    }
    S.push(y), _ = y, v = y.next;
  }
  if (v !== null || g !== void 0) {
    for (var q = g === void 0 ? [] : bo(g); v !== null; )
      v.e.f & Mn || q.push(v), v = v.next;
    var F = q.length;
    if (F > 0) {
      var O = s & 4 && h === 0 ? i : null;
      if (c) {
        for (T = 0; T < F; T += 1)
          (w = q[T].a) == null || w.measure();
        for (T = 0; T < F; T += 1)
          (U = q[T].a) == null || U.fix();
      }
      Cf(n, q, O);
    }
  }
  c && ar(() => {
    var fe;
    if (E !== void 0)
      for (y of E)
        (fe = y.a) == null || fe.apply();
  }), t.first = n.first && n.first.e, t.last = _ && _.e;
  for (var G of r.values())
    Pt(G.e);
  r.clear();
}
function Gu(t, e, n, r) {
  r & 1 && Pi(t.v, e), r & 2 ? Pi(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function ju(t, e, n, r, i, a, s, u, l, c, d) {
  var h = (l & 1) !== 0, f = (l & 16) === 0, m = h ? f ? /* @__PURE__ */ Iu(i, !1, !1) : ei(i) : i, v = l & 2 ? ei(s) : s, g = {
    i: v,
    v: m,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (t === null) {
      var _ = document.createDocumentFragment();
      _.append(t = wr());
    }
    return g.e = Gt(() => u(
      /** @type {Node} */
      t,
      m,
      v,
      c
    ), Rd), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
  }
}
function Cs(t, e, n) {
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
      /* @__PURE__ */ ya(a)
    );
    i.before(a), a = s;
  }
}
function Un(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function Or(t, e, n) {
  var r = t, i, a, s = null, u = null;
  function l() {
    a && (Er(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Lr(() => {
    if (i !== (i = e())) {
      var c = wo();
      if (i) {
        var d = r;
        c && (s = document.createDocumentFragment(), s.append(d = wr()), a && rt.skipped_effects.add(a)), u = Gt(() => n(d, i));
      }
      c ? rt.add_callback(l) : l();
    }
  }, Tr);
}
function nl(t, e, n, r, i, a) {
  var s, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d;
  Lr(() => {
    const h = e() || null;
    var f = h === "svg" ? dd : null;
    h !== s && (d && (h === null ? Er(d, () => {
      d = null, u = null;
    }) : h === u ? ps(d) : (Pt(d), tl(!1))), h && h !== u && (d = Gt(() => {
      if (l = f ? document.createElementNS(f, h) : document.createElement(h), Fi(l, l), r) {
        var m = (
          /** @type {TemplateNode} */
          l.appendChild(wr())
        );
        r(l, m);
      }
      Ve.nodes_end = l, c.before(l);
    })), s = h, s && (u = s), tl(!0));
  }, Tr);
}
function Ue(t, e, n) {
  ii(() => {
    var r = zn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Ia(() => {
        var s = n();
        df(s), i && Ao(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Tf(t, e) {
  var n = void 0, r;
  Lr(() => {
    n !== (n = e()) && (r && (Pt(r), r = null), n && (r = Gt(() => {
      ii(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function qu(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = qu(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function wf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = qu(t)) && (r && (r += " "), r += e);
  return r;
}
function zu(t) {
  return typeof t == "object" ? wf(t) : t ?? "";
}
const rl = [...` 	
\r\f \v\uFEFF`];
function Lf(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || rl.includes(r[s - 1])) && (u === r.length || rl.includes(r[u])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1) : s = u;
        }
  }
  return r === "" ? null : r;
}
function il(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function xs(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Of(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(xs)), i && l.push(...Object.keys(i).map(xs));
      var c = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var m = xs(t.substring(c, d).trim());
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
    return r && (n += il(r)), i && (n += il(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Ro(t, e, n, r, i, a) {
  var s = t.__className;
  if (s !== n || s === void 0) {
    var u = Lf(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function Ts(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function zt(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = Of(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (Ts(t, n == null ? void 0 : n[0], r[0]), Ts(t, n == null ? void 0 : n[1], r[1], "important")) : Ts(t, n, r));
  return r;
}
function eo(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ds(e))
      return Ld();
    for (var r of t.options)
      r.selected = e.includes(al(r));
    return;
  }
  for (r of t.options) {
    var i = al(r);
    if (Zd(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Rf(t) {
  var e = new MutationObserver(() => {
    eo(t, t.__value);
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
  }), gs(() => {
    e.disconnect();
  });
}
function al(t) {
  return "__value" in t ? t.__value : t.value;
}
const ea = Symbol("class"), ta = Symbol("style"), Wu = Symbol("is custom element"), Xu = Symbol("is html");
function sl(t, e) {
  var n = Mo(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Mf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Sr(t, e, n, r) {
  var i = Mo(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[bd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Ku(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Df(t, e, n, r, i = !1, a = !1) {
  var s = Mo(t), u = s[Wu], l = !s[Xu], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = zu(n.class) : n[ea] && (n.class = null), n[ta] && (n.style ?? (n.style = null));
  var f = Ku(t);
  for (const A in n) {
    let b = n[A];
    if (d && A === "value" && b == null) {
      t.value = t.__value = "", c[A] = b;
      continue;
    }
    if (A === "class") {
      var m = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ro(t, m, b, r, e == null ? void 0 : e[ea], n[ea]), c[A] = b, c[ea] = n[ea];
      continue;
    }
    if (A === "style") {
      zt(t, b, e == null ? void 0 : e[ta], n[ta]), c[A] = b, c[ta] = n[ta];
      continue;
    }
    var v = c[A];
    if (!(b === v && !(b === void 0 && t.hasAttribute(A)))) {
      c[A] = b;
      var g = A[0] + A[1];
      if (g !== "$$")
        if (g === "on") {
          const I = {}, y = "$$" + A;
          let T = A.slice(2);
          var _ = gf(T);
          if (vf(T) && (T = T.slice(0, -7), I.capture = !0), !_ && v) {
            if (b != null) continue;
            t.removeEventListener(T, c[y], I), c[y] = null;
          }
          if (b != null)
            if (_)
              t[`__${T}`] = b, xn([T]);
            else {
              let x = function(C) {
                c[A].call(this, C);
              };
              c[y] = Oo(T, t, x, I);
            }
          else _ && (t[`__${T}`] = void 0);
        } else if (A === "style")
          Sr(t, A, b);
        else if (A === "autofocus")
          Jd(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!u && (A === "__value" || A === "value" && b != null))
          t.value = t.__value = b;
        else if (A === "selected" && d)
          Mf(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var E = A;
          l || (E = bf(E));
          var S = E === "defaultValue" || E === "defaultChecked";
          if (b == null && !u && !S)
            if (s[A] = null, E === "value" || E === "checked") {
              let I = (
                /** @type {HTMLInputElement} */
                t
              );
              const y = e === void 0;
              if (E === "value") {
                let T = I.defaultValue;
                I.removeAttribute(E), I.defaultValue = T, I.value = I.__value = y ? T : null;
              } else {
                let T = I.defaultChecked;
                I.removeAttribute(E), I.defaultChecked = T, I.checked = y ? T : !1;
              }
            } else
              t.removeAttribute(A);
          else S || f.includes(E) && (u || typeof b != "string") ? (t[E] = b, E in s && (s[E] = Rt)) : typeof b != "function" && Sr(t, E, b);
        }
    }
  }
  return c;
}
function Ge(t, e, n = [], r = [], i, a = !1, s = !1) {
  bu(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Lr(() => {
      var m = e(...u.map(o)), v = Df(
        t,
        l,
        m,
        i,
        a,
        s
      );
      h && d && "value" in m && eo(
        /** @type {HTMLSelectElement} */
        t,
        m.value
      );
      for (let _ of Object.getOwnPropertySymbols(c))
        m[_] || Pt(c[_]);
      for (let _ of Object.getOwnPropertySymbols(m)) {
        var g = m[_];
        _.description === fd && (!l || g !== l[_]) && (c[_] && Pt(c[_]), c[_] = Gt(() => Tf(t, () => g))), v[_] = g;
      }
      l = v;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      ii(() => {
        eo(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Rf(f);
      });
    }
    h = !0;
  });
}
function Mo(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Wu]: t.nodeName.includes("-"),
      [Xu]: t.namespaceURI === cd
    })
  );
}
var ol = /* @__PURE__ */ new Map();
function Ku(t) {
  var e = t.getAttribute("is") || t.nodeName, n = ol.get(e);
  if (n) return n;
  ol.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = au(i);
    for (var s in r)
      r[s].set && n.push(s);
    i = _o(i);
  }
  return n;
}
const Hf = () => performance.now(), nr = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Hf(),
  tasks: /* @__PURE__ */ new Set()
};
function Zu() {
  const t = nr.now();
  nr.tasks.forEach((e) => {
    e.c(t) || (nr.tasks.delete(e), e.f());
  }), nr.tasks.size !== 0 && nr.tick(Zu);
}
function Nf(t) {
  let e;
  return nr.tasks.size === 0 && nr.tick(Zu), {
    promise: new Promise((n) => {
      nr.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      nr.tasks.delete(e);
    }
  };
}
function Oa(t, e) {
  Wi(() => {
    t.dispatchEvent(new CustomEvent(e));
  });
}
function Pf(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function ll(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = Pf(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Uf = (t) => t;
function ul(t, e, n, r) {
  var i = (t & 1) !== 0, a = (t & 2) !== 0, s = i && a, u = (t & 4) !== 0, l = s ? "both" : i ? "in" : "out", c, d = e.inert, h = e.style.overflow, f, m;
  function v() {
    return Wi(() => c ?? (c = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var g = {
    is_global: u,
    in() {
      var A;
      if (e.inert = d, !i) {
        m == null || m.abort(), (A = m == null ? void 0 : m.reset) == null || A.call(m);
        return;
      }
      a || f == null || f.abort(), Oa(e, "introstart"), f = to(e, v(), m, 1, () => {
        Oa(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = h;
      });
    },
    out(A) {
      if (!a) {
        A == null || A(), c = void 0;
        return;
      }
      e.inert = !0, Oa(e, "outrostart"), m = to(e, v(), f, 0, () => {
        Oa(e, "outroend"), A == null || A();
      });
    },
    stop: () => {
      f == null || f.abort(), m == null || m.abort();
    }
  }, _ = (
    /** @type {Effect} */
    Ve
  );
  if ((_.transitions ?? (_.transitions = [])).push(g), i && $a) {
    var E = u;
    if (!E) {
      for (var S = (
        /** @type {Effect | null} */
        _.parent
      ); S && S.f & Tr; )
        for (; (S = S.parent) && !(S.f & Cr); )
          ;
      E = !S || (S.f & fs) !== 0;
    }
    E && ii(() => {
      zn(() => g.in());
    });
  }
}
function to(t, e, n, r, i) {
  var a = r === 1;
  if (yi(e)) {
    var s, u = !1;
    return ar(() => {
      if (!u) {
        var _ = e({ direction: a ? "in" : "out" });
        s = to(t, _, n, r, i);
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
      abort: le,
      deactivate: le,
      reset: le,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: d, easing: h = Uf } = e;
  var f = [];
  if (a && n === void 0 && (d && d(0, 1), c)) {
    var m = ll(c(0, 1));
    f.push(m, m);
  }
  var v = () => 1 - r, g = t.animate(f, { duration: l, fill: "forwards" });
  return g.onfinish = () => {
    g.cancel();
    var _ = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var E = r - _, S = (
      /** @type {number} */
      e.duration * Math.abs(E)
    ), A = [];
    if (S > 0) {
      var b = !1;
      if (c)
        for (var I = Math.ceil(S / 16.666666666666668), y = 0; y <= I; y += 1) {
          var T = _ + E * h(y / I), x = ll(c(T, 1 - T));
          A.push(x), b || (b = x.overflow === "hidden");
        }
      b && (t.style.overflow = "hidden"), v = () => {
        var C = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return _ + E * h(C / S);
      }, d && Nf(() => {
        if (g.playState !== "running") return !1;
        var C = v();
        return d(C, 1 - C), !0;
      });
    }
    g = t.animate(A, { duration: S, fill: "forwards" }), g.onfinish = () => {
      v = () => r, d == null || d(r, 1 - r), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = le);
    },
    deactivate: () => {
      i = le;
    },
    reset: () => {
      r === 0 && (d == null || d(1, 0));
    },
    t: () => v()
  };
}
function ha(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  xu(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = ws(t) ? Ls(a) : a, n(a), rt !== null && r.add(rt), await Fu(), a !== (a = e())) {
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
  zn(e) == null && t.value && (n(ws(t) ? Ls(t.value) : t.value), rt !== null && r.add(rt)), Ia(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Ga ?? rt
      );
      if (r.has(a))
        return;
    }
    ws(t) && i === Ls(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Ff(t, e, n = e) {
  xu(t, "change", (r) => {
    var i = r ? t.defaultChecked : t.checked;
    n(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  zn(e) == null && n(t.checked), Ia(() => {
    var r = e();
    t.checked = !!r;
  });
}
function ws(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Ls(t) {
  return t === "" ? null : +t;
}
function cl(t, e) {
  return t === e || (t == null ? void 0 : t[jn]) === e;
}
function xe(t = {}, e, n, r) {
  return ii(() => {
    var i, a;
    return Ia(() => {
      i = a, a = (r == null ? void 0 : r()) || [], zn(() => {
        t !== n(...a) && (e(t, ...a), i && cl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      ar(() => {
        a && cl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function Do(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), le;
  const r = zn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const gi = [];
function kf(t, e) {
  return {
    subscribe: Ut(t, e).subscribe
  };
}
function Ut(t, e = le) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (Ao(t, u) && (t = u, n)) {
      const l = !gi.length;
      for (const c of r)
        c[1](), gi.push(c, t);
      if (l) {
        for (let c = 0; c < gi.length; c += 2)
          gi[c][0](gi[c + 1]);
        gi.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      t
    ));
  }
  function s(u, l = le) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || le), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Xi(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return kf(n, (s, u) => {
    let l = !1;
    const c = [];
    let d = 0, h = le;
    const f = () => {
      if (d)
        return;
      h();
      const v = e(r ? c[0] : c, s, u);
      a ? s(v) : h = typeof v == "function" ? v : le;
    }, m = i.map(
      (v, g) => Do(
        v,
        (_) => {
          c[g] = _, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      su(m), h(), l = !1;
    };
  });
}
function Yu(t) {
  let e;
  return Do(t, (n) => e = n)(), e;
}
let Ra = !1, no = Symbol();
function Dn(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Iu(void 0),
    unsubscribe: le
  });
  if (r.store !== t && !(no in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = le;
    else {
      var i = !0;
      r.unsubscribe = Do(t, (a) => {
        i ? r.source.v = a : Z(r.source, a);
      }), i = !1;
    }
  return t && no in n ? Yu(t) : o(r.source);
}
function Rn(t, e) {
  return t.set(e), e;
}
function Wn() {
  const t = {};
  function e() {
    gs(() => {
      for (var n in t)
        t[n].unsubscribe();
      Za(t, no, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Bf(t) {
  var e = Ra;
  try {
    return Ra = !1, [t(), Ra];
  } finally {
    Ra = e;
  }
}
const Vf = {
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
function We(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    Vf
  );
}
const Gf = {
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
    if (e === jn || e === lu) return !1;
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
function et(...t) {
  return new Proxy({ props: t }, Gf);
}
function p(t, e, n, r) {
  var A;
  var i = !zi || (n & 2) !== 0, a = (n & 8) !== 0, s = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = s ? zn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = jn in t || lu in t;
    d = ((A = yr(t, e)) == null ? void 0 : A.set) ?? (h && e in t ? (b) => t[e] = b : void 0);
  }
  var f, m = !1;
  a ? [f, m] = Bf(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Ad(), d(f)));
  var v;
  if (i ? v = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? c() : (l = !0, b);
  } : v = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b !== void 0 && (u = /** @type {V} */
    void 0), b === void 0 ? u : b;
  }, i && !(n & 4))
    return v;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(b, I) {
        return arguments.length > 0 ? ((!i || !I || g || m) && d(I ? v() : b), b) : v();
      }
    );
  }
  var _ = !1, E = (n & 1 ? ms : Co)(() => (_ = !1, v()));
  a && o(E);
  var S = (
    /** @type {Effect} */
    Ve
  );
  return (
    /** @type {() => V} */
    function(b, I) {
      if (arguments.length > 0) {
        const y = I ? o(E) : i && a ? Ae(b) : b;
        return Z(E, y), _ = !0, u !== void 0 && (u = y), b;
      }
      return ai && _ || S.f & ri ? E.v : o(E);
    }
  );
}
const jf = "5";
var ru;
typeof window < "u" && ((ru = window.__svelte ?? (window.__svelte = {})).v ?? (ru.v = /* @__PURE__ */ new Set())).add(jf);
function qf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var zf = function(e) {
  return Wf(e) && !Xf(e);
};
function Wf(t) {
  return !!t && typeof t == "object";
}
function Xf(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Yf(t);
}
var Kf = typeof Symbol == "function" && Symbol.for, Zf = Kf ? Symbol.for("react.element") : 60103;
function Yf(t) {
  return t.$$typeof === Zf;
}
function Qf(t) {
  return Array.isArray(t) ? [] : {};
}
function va(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? ki(Qf(t), t, e) : t;
}
function Jf(t, e, n) {
  return t.concat(e).map(function(r) {
    return va(r, n);
  });
}
function $f(t, e) {
  if (!e.customMerge)
    return ki;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : ki;
}
function eh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function dl(t) {
  return Object.keys(t).concat(eh(t));
}
function Qu(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function th(t, e) {
  return Qu(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function nh(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && dl(t).forEach(function(i) {
    r[i] = va(t[i], n);
  }), dl(e).forEach(function(i) {
    th(t, i) || (Qu(t, i) && n.isMergeableObject(e[i]) ? r[i] = $f(i, n)(t[i], e[i], n) : r[i] = va(e[i], n));
  }), r;
}
function ki(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || Jf, n.isMergeableObject = n.isMergeableObject || zf, n.cloneUnlessOtherwiseSpecified = va;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : nh(t, e, n) : va(e, n);
}
ki.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return ki(r, i, n);
  }, {});
};
var rh = ki, ih = rh;
const ah = /* @__PURE__ */ qf(ih);
var ro = function(t, e) {
  return ro = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ro(t, e);
};
function tt(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ro(t, e);
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
function sh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Ju(t, e, n, r) {
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
function Ho(t, e) {
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
function Mt(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Bi(t, e) {
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
function Ar(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function xi(t) {
  return this instanceof xi ? (this.v = t, this) : new xi(t);
}
function oh(t, e, n) {
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
    r[m] && (i[m] = function(g) {
      return new Promise(function(_, E) {
        a.push([m, g, _, E]) > 1 || l(m, g);
      });
    }, v && (i[m] = v(i[m])));
  }
  function l(m, v) {
    try {
      c(r[m](v));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function c(m) {
    m.value instanceof xi ? Promise.resolve(m.value.v).then(d, h) : f(a[0][2], m);
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
function lh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Mt == "function" ? Mt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function Os(t, e) {
  var n = e && e.cache ? e.cache : mh, r = e && e.serializer ? e.serializer : hh, i = e && e.strategy ? e.strategy : dh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function uh(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function ch(t, e, n, r) {
  var i = uh(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function $u(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function ec(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function dh(t, e) {
  var n = t.length === 1 ? ch : $u;
  return ec(t, this, n, e.cache.create(), e.serializer);
}
function fh(t, e) {
  return ec(t, this, $u, e.cache.create(), e.serializer);
}
var hh = function() {
  return JSON.stringify(arguments);
}, vh = (
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
), mh = {
  create: function() {
    return new vh();
  }
}, Rs = {
  variadic: fh
}, qe;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(qe || (qe = {}));
var ft;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(ft || (ft = {}));
var Vi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Vi || (Vi = {}));
function fl(t) {
  return t.type === ft.literal;
}
function gh(t) {
  return t.type === ft.argument;
}
function tc(t) {
  return t.type === ft.number;
}
function nc(t) {
  return t.type === ft.date;
}
function rc(t) {
  return t.type === ft.time;
}
function ic(t) {
  return t.type === ft.select;
}
function ac(t) {
  return t.type === ft.plural;
}
function ph(t) {
  return t.type === ft.pound;
}
function sc(t) {
  return t.type === ft.tag;
}
function oc(t) {
  return !!(t && typeof t == "object" && t.type === Vi.number);
}
function io(t) {
  return !!(t && typeof t == "object" && t.type === Vi.dateTime);
}
var lc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, bh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function _h(t) {
  var e = {};
  return t.replace(bh, function(n) {
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
var yh = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Ih(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(yh).filter(function(f) {
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
function Eh(t) {
  return t.replace(/^(.*?)-/, "");
}
var hl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, uc = /^(@+)?(\+|#+)?[rs]?$/g, Sh = /(\*)(0+)|(#+)(0+)|(0+)/g, cc = /^(0+)$/;
function vl(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(uc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function dc(t) {
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
function Ah(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !cc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function ml(t) {
  var e = {}, n = dc(t);
  return n || e;
}
function Ch(t) {
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
        e.style = "unit", e.unit = Eh(i.options[0]);
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
        e = de(de(de({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return de(de({}, l), ml(c));
        }, {}));
        continue;
      case "engineering":
        e = de(de(de({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return de(de({}, l), ml(c));
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
        i.options[0].replace(Sh, function(l, c, d, h, f, m) {
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
    if (cc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (hl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(hl, function(l, c, d, h, f, m) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && m ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + m.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = de(de({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = de(de({}, e), vl(a)));
      continue;
    }
    if (uc.test(i.stem)) {
      e = de(de({}, e), vl(i.stem));
      continue;
    }
    var s = dc(i.stem);
    s && (e = de(de({}, e), s));
    var u = Ah(i.stem);
    u && (e = de(de({}, e), u));
  }
  return e;
}
var Ma = {
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
function xh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var s = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = Th(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; s-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Th(t) {
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
  var i = Ma[r || ""] || Ma[n || ""] || Ma["".concat(n, "-001")] || Ma["001"];
  return i[0];
}
var Ms, wh = new RegExp("^".concat(lc.source, "*")), Lh = new RegExp("".concat(lc.source, "*$"));
function Xe(t, e) {
  return { start: t, end: e };
}
var Oh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Rh = !!String.fromCodePoint, Mh = !!Object.fromEntries, Dh = !!String.prototype.codePointAt, Hh = !!String.prototype.trimStart, Nh = !!String.prototype.trimEnd, Ph = !!Number.isSafeInteger, Uh = Ph ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, ao = !0;
try {
  var Fh = hc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  ao = ((Ms = Fh.exec("a")) === null || Ms === void 0 ? void 0 : Ms[0]) === "a";
} catch {
  ao = !1;
}
var gl = Oh ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), so = Rh ? String.fromCodePoint : (
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
), pl = (
  // native
  Mh ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], s = a[0], u = a[1];
        n[s] = u;
      }
      return n;
    }
  )
), fc = Dh ? (
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
), kh = Hh ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(wh, "");
  }
), Bh = Nh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Lh, "");
  }
);
function hc(t, e) {
  return new RegExp(t, e);
}
var oo;
if (ao) {
  var bl = hc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  oo = function(e, n) {
    var r;
    bl.lastIndex = n;
    var i = bl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  oo = function(e, n) {
    for (var r = []; ; ) {
      var i = fc(e, n);
      if (i === void 0 || vc(i) || qh(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return so.apply(void 0, r);
  };
var Vh = (
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
              type: ft.pound,
              location: Xe(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(qe.UNMATCHED_CLOSING_TAG, Xe(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && lo(this.peek() || 0)) {
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
          if (this.isEOF() || !lo(this.char()))
            return this.error(qe.INVALID_TAG, Xe(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(qe.UNMATCHED_CLOSING_TAG, Xe(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: ft.tag,
              value: i,
              children: s,
              location: Xe(r, this.clonePosition())
            },
            err: null
          } : this.error(qe.INVALID_TAG, Xe(u, this.clonePosition())));
        } else
          return this.error(qe.UNCLOSED_TAG, Xe(r, this.clonePosition()));
      } else
        return this.error(qe.INVALID_TAG, Xe(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && jh(this.char()); )
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
        val: { type: ft.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !Gh(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return so.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), so(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(qe.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(qe.EMPTY_ARGUMENT, Xe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(qe.MALFORMED_ARGUMENT, Xe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(qe.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: ft.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Xe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(qe.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(qe.MALFORMED_ARGUMENT, Xe(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = oo(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), s = Xe(e, a);
      return { value: r, location: s };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, s = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(qe.EXPECT_ARGUMENT_TYPE, Xe(s, l));
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
            var f = Bh(h.val);
            if (f.length === 0)
              return this.error(qe.EXPECT_ARGUMENT_STYLE, Xe(this.clonePosition(), this.clonePosition()));
            var m = Xe(d, this.clonePosition());
            c = { style: f, styleLocation: m };
          }
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var g = Xe(i, this.clonePosition());
          if (c && gl(c == null ? void 0 : c.style, "::", 0)) {
            var _ = kh(c.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(_, c.styleLocation);
              return h.err ? h : {
                val: { type: ft.number, value: r, location: g, style: h.val },
                err: null
              };
            } else {
              if (_.length === 0)
                return this.error(qe.EXPECT_DATE_TIME_SKELETON, g);
              var E = _;
              this.locale && (E = xh(_, this.locale));
              var f = {
                type: Vi.dateTime,
                pattern: E,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? _h(E) : {}
              }, S = u === "date" ? ft.date : ft.time;
              return {
                val: { type: S, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? ft.number : u === "date" ? ft.date : ft.time,
              value: r,
              location: g,
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
            return this.error(qe.EXPECT_SELECT_ARGUMENT_OPTIONS, Xe(A, de({}, A)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), I = 0;
          if (u !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(qe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Xe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(qe.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, qe.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), I = h.val;
          }
          var y = this.tryParsePluralOrSelectOptions(e, u, n, b);
          if (y.err)
            return y;
          var v = this.tryParseArgumentClose(i);
          if (v.err)
            return v;
          var T = Xe(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: ft.select,
              value: r,
              options: pl(y.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: ft.plural,
              value: r,
              options: pl(y.val),
              offset: I,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(qe.INVALID_ARGUMENT_TYPE, Xe(s, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(qe.EXPECT_ARGUMENT_CLOSING_BRACE, Xe(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(qe.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Xe(i, this.clonePosition()));
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
        r = Ih(e);
      } catch {
        return this.error(qe.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Vi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Ch(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, s = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(qe.EXPECT_PLURAL_ARGUMENT_SELECTOR, qe.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Xe(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? qe.DUPLICATE_SELECT_ARGUMENT_SELECTOR : qe.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (s = !0), this.bumpSpace();
        var m = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? qe.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : qe.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Xe(this.clonePosition(), this.clonePosition()));
        var v = this.parseMessage(e + 1, n, r);
        if (v.err)
          return v;
        var g = this.tryParseArgumentClose(m);
        if (g.err)
          return g;
        u.push([
          c,
          {
            value: v.val,
            location: Xe(m, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? qe.EXPECT_SELECT_ARGUMENT_SELECTOR : qe.EXPECT_PLURAL_ARGUMENT_SELECTOR, Xe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !s ? this.error(qe.MISSING_OTHER_CLAUSE, Xe(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
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
      return a ? (s *= r, Uh(s) ? { val: s, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = fc(this.message, e);
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
      if (gl(this.message, e, this.offset())) {
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
      for (; !this.isEOF() && vc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function lo(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function Gh(t) {
  return lo(t) || t === 47;
}
function jh(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function vc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function qh(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function uo(t) {
  t.forEach(function(e) {
    if (delete e.location, ic(e) || ac(e))
      for (var n in e.options)
        delete e.options[n].location, uo(e.options[n].value);
    else tc(e) && oc(e.style) || (nc(e) || rc(e)) && io(e.style) ? delete e.style.location : sc(e) && uo(e.children);
  });
}
function zh(t, e) {
  e === void 0 && (e = {}), e = de({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new Vh(t, e).parse();
  if (n.err) {
    var r = SyntaxError(qe[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || uo(n.val), n.val;
}
var Gi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Gi || (Gi = {}));
var _s = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), _l = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Gi.INVALID_VALUE, a) || this;
    }
    return e;
  }(_s)
), Wh = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Gi.INVALID_VALUE, i) || this;
    }
    return e;
  }(_s)
), Xh = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Gi.MISSING_VALUE, r) || this;
    }
    return e;
  }(_s)
), Xt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Xt || (Xt = {}));
function Kh(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Xt.literal || n.type !== Xt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function Zh(t) {
  return typeof t == "function";
}
function Wa(t, e, n, r, i, a, s) {
  if (t.length === 1 && fl(t[0]))
    return [
      {
        type: Xt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (fl(d)) {
      u.push({
        type: Xt.literal,
        value: d.value
      });
      continue;
    }
    if (ph(d)) {
      typeof a == "number" && u.push({
        type: Xt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new Xh(h, s);
    var f = i[h];
    if (gh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Xt.literal : Xt.object,
        value: f
      });
      continue;
    }
    if (nc(d)) {
      var m = typeof d.style == "string" ? r.date[d.style] : io(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Xt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (rc(d)) {
      var m = typeof d.style == "string" ? r.time[d.style] : io(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Xt.literal,
        value: n.getDateTimeFormat(e, m).format(f)
      });
      continue;
    }
    if (tc(d)) {
      var m = typeof d.style == "string" ? r.number[d.style] : oc(d.style) ? d.style.parsedOptions : void 0;
      m && m.scale && (f = f * (m.scale || 1)), u.push({
        type: Xt.literal,
        value: n.getNumberFormat(e, m).format(f)
      });
      continue;
    }
    if (sc(d)) {
      var v = d.children, g = d.value, _ = i[g];
      if (!Zh(_))
        throw new Wh(g, "function", s);
      var E = Wa(v, e, n, r, i, a), S = _(E.map(function(I) {
        return I.value;
      }));
      Array.isArray(S) || (S = [S]), u.push.apply(u, S.map(function(I) {
        return {
          type: typeof I == "string" ? Xt.literal : Xt.object,
          value: I
        };
      }));
    }
    if (ic(d)) {
      var A = d.options[f] || d.options.other;
      if (!A)
        throw new _l(d.value, f, Object.keys(d.options), s);
      u.push.apply(u, Wa(A.value, e, n, r, i));
      continue;
    }
    if (ac(d)) {
      var A = d.options["=".concat(f)];
      if (!A) {
        if (!Intl.PluralRules)
          throw new _s(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Gi.MISSING_INTL_API, s);
        var b = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        A = d.options[b] || d.options.other;
      }
      if (!A)
        throw new _l(d.value, f, Object.keys(d.options), s);
      u.push.apply(u, Wa(A.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return Kh(u);
}
function Yh(t, e) {
  return e ? de(de(de({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = de(de({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function Qh(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = Yh(t[r], e[r]), n;
  }, de({}, t)) : t;
}
function Ds(t) {
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
function Jh(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Os(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Ar([void 0], n, !1)))();
    }, {
      cache: Ds(t.number),
      strategy: Rs.variadic
    }),
    getDateTimeFormat: Os(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Ar([void 0], n, !1)))();
    }, {
      cache: Ds(t.dateTime),
      strategy: Rs.variadic
    }),
    getPluralRules: Os(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Ar([void 0], n, !1)))();
    }, {
      cache: Ds(t.pluralRules),
      strategy: Rs.variadic
    })
  };
}
var mc = (
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
          return !h.length || f.type !== Xt.literal || typeof h[h.length - 1] != "string" ? h.push(f.value) : h[h.length - 1] += f.value, h;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(l) {
        return Wa(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var u = sh(s, ["formatters"]);
        this.ast = t.__parse(e, de(de({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = Qh(t.formats, r), this.formatters = i && i.formatters || Jh(this.formatterCache);
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
    }, t.__parse = zh, t.formats = {
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
function $h(t, e) {
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
const _r = {}, ev = (t, e, n) => n && (e in _r || (_r[e] = {}), t in _r[e] || (_r[e][t] = n), n), gc = (t, e) => {
  if (e == null)
    return;
  if (e in _r && t in _r[e])
    return _r[e][t];
  const n = Sa(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = nv(i, t);
    if (a)
      return ev(t, e, a);
  }
};
let No;
const Ea = Ut({});
function tv(t) {
  return No[t] || null;
}
function pc(t) {
  return t in No;
}
function nv(t, e) {
  if (!pc(t))
    return null;
  const n = tv(t);
  return $h(n, e);
}
function rv(t) {
  if (t == null)
    return;
  const e = Sa(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (pc(r))
      return r;
  }
}
function bc(t, ...e) {
  delete _r[t], Ea.update((n) => (n[t] = ah.all([n[t] || {}, ...e]), n));
}
Xi(
  [Ea],
  ([t]) => Object.keys(t)
);
Ea.subscribe((t) => No = t);
const Xa = {};
function iv(t, e) {
  Xa[t].delete(e), Xa[t].size === 0 && delete Xa[t];
}
function _c(t) {
  return Xa[t];
}
function av(t) {
  return Sa(t).map((e) => {
    const n = _c(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function es(t) {
  return t == null ? !1 : Sa(t).some(
    (e) => {
      var n;
      return (n = _c(e)) == null ? void 0 : n.size;
    }
  );
}
function sv(t, e) {
  return Promise.all(
    e.map((r) => (iv(t, r), r().then((i) => i.default || i)))
  ).then((r) => bc(t, ...r));
}
const na = {};
function yc(t) {
  if (!es(t))
    return t in na ? na[t] : Promise.resolve();
  const e = av(t);
  return na[t] = Promise.all(
    e.map(
      ([n, r]) => sv(n, r)
    )
  ).then(() => {
    if (es(t))
      return yc(t);
    delete na[t];
  }), na[t];
}
var yl = Object.getOwnPropertySymbols, ov = Object.prototype.hasOwnProperty, lv = Object.prototype.propertyIsEnumerable, uv = (t, e) => {
  var n = {};
  for (var r in t)
    ov.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && yl)
    for (var r of yl(t))
      e.indexOf(r) < 0 && lv.call(t, r) && (n[r] = t[r]);
  return n;
};
const cv = {
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
function dv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Sa(
      t
    ).join('", "')}".${es(Rr()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const fv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: cv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, la = fv;
function ji() {
  return la;
}
function hv(t) {
  const e = t, { formats: n } = e, r = uv(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      mc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = dv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(la, r, { initialLocale: i }), n && ("number" in n && Object.assign(la.formats.number, n.number), "date" in n && Object.assign(la.formats.date, n.date), "time" in n && Object.assign(la.formats.time, n.time)), si.set(i);
}
const Hs = Ut(!1);
var vv = Object.defineProperty, mv = Object.defineProperties, gv = Object.getOwnPropertyDescriptors, Il = Object.getOwnPropertySymbols, pv = Object.prototype.hasOwnProperty, bv = Object.prototype.propertyIsEnumerable, El = (t, e, n) => e in t ? vv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, _v = (t, e) => {
  for (var n in e || (e = {}))
    pv.call(e, n) && El(t, n, e[n]);
  if (Il)
    for (var n of Il(e))
      bv.call(e, n) && El(t, n, e[n]);
  return t;
}, yv = (t, e) => mv(t, gv(e));
let co;
const ts = Ut(null);
function Sl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Sa(t, e = ji().fallbackLocale) {
  const n = Sl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Sl(e)])] : n;
}
function Rr() {
  return co ?? void 0;
}
ts.subscribe((t) => {
  co = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Iv = (t) => {
  if (t && rv(t) && es(t)) {
    const { loadingDelay: e } = ji();
    let n;
    return typeof window < "u" && Rr() != null && e ? n = window.setTimeout(
      () => Hs.set(!0),
      e
    ) : Hs.set(!0), yc(t).then(() => {
      ts.set(t);
    }).finally(() => {
      clearTimeout(n), Hs.set(!1);
    });
  }
  return ts.set(t);
}, si = yv(_v({}, ts), {
  set: Iv
}), Ev = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], ys = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Sv = Object.defineProperty, ns = Object.getOwnPropertySymbols, Ic = Object.prototype.hasOwnProperty, Ec = Object.prototype.propertyIsEnumerable, Al = (t, e, n) => e in t ? Sv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Po = (t, e) => {
  for (var n in e || (e = {}))
    Ic.call(e, n) && Al(t, n, e[n]);
  if (ns)
    for (var n of ns(e))
      Ec.call(e, n) && Al(t, n, e[n]);
  return t;
}, Ki = (t, e) => {
  var n = {};
  for (var r in t)
    Ic.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && ns)
    for (var r of ns(t))
      e.indexOf(r) < 0 && Ec.call(t, r) && (n[r] = t[r]);
  return n;
};
const ma = (t, e) => {
  const { formats: n } = ji();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Av = ys(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Ki(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = ma("number", r)), new Intl.NumberFormat(n, i);
  }
), Cv = ys(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Ki(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = ma("date", r) : Object.keys(i).length === 0 && (i = ma("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), xv = ys(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Ki(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = ma("time", r) : Object.keys(i).length === 0 && (i = ma("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Tv = (t = {}) => {
  var e = t, {
    locale: n = Rr()
  } = e, r = Ki(e, [
    "locale"
  ]);
  return Av(Po({ locale: n }, r));
}, wv = (t = {}) => {
  var e = t, {
    locale: n = Rr()
  } = e, r = Ki(e, [
    "locale"
  ]);
  return Cv(Po({ locale: n }, r));
}, Lv = (t = {}) => {
  var e = t, {
    locale: n = Rr()
  } = e, r = Ki(e, [
    "locale"
  ]);
  return xv(Po({ locale: n }, r));
}, Ov = ys(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Rr()) => new mc(t, e, ji().formats, {
    ignoreTag: ji().ignoreTag
  })
), Rv = (t, e = {}) => {
  var n, r, i, a;
  let s = e;
  typeof t == "object" && (s = t, t = s.id);
  const {
    values: u,
    locale: l = Rr(),
    default: c
  } = s;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = gc(t, l);
  if (!d)
    d = (a = (i = (r = (n = ji()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = Ov(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, Mv = (t, e) => Lv(e).format(t), Dv = (t, e) => wv(e).format(t), Hv = (t, e) => Tv(e).format(t), Nv = (t, e = Rr()) => gc(t, e), Pv = Xi([si, Ea], () => Rv);
Xi([si], () => Mv);
Xi([si], () => Dv);
Xi([si], () => Hv);
Xi([si, Ea], () => Nv);
function Uv(t, e) {
  Object.entries(t).forEach(([a, s]) => {
    bc(a, s);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Ev();
  console.log("Initial: Setting the language to", i), hv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const s = a;
    if (!s.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", s.detail.language), si.set(s.detail.language);
  });
}
const Fv = "Ort", kv = "Suche", Bv = "UUID", Vv = "File Name", Gv = "Autor", jv = "Typ", qv = "Version", zv = "Datum", Wv = "Fertig", Xv = "Filtertypen", Kv = "Filter Hinzufügen", Zv = {
  location: Fv,
  search: kv,
  uuid: Bv,
  filename: Vv,
  author: Gv,
  type: jv,
  version: qv,
  date: zv,
  "versionHistory.title": "Versionsverlauf der Datei {filename}",
  "versionTable.heading": "Versionstabelle",
  done: Wv,
  filter_types: Xv,
  add_filter: Kv
}, Yv = "Location", Qv = "Search", Jv = "UUID", $v = "Filename", em = "Author", tm = "Type", nm = "Version", rm = "Date", im = "Done", am = "Filter Types", sm = "Add Filter", om = {
  location: Yv,
  search: Qv,
  uuid: Jv,
  filename: $v,
  author: em,
  type: tm,
  version: nm,
  date: rm,
  "versionHistory.title": "Version History of file {filename}",
  "versionTable.heading": "Version Table",
  done: im,
  filter_types: am,
  add_filter: sm
};
function Pe(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function ze(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(i), i;
}
function ti(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function ut(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class oi {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, ff(e, n, r, i));
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
function X(t, e) {
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
var Da;
function lm(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Da;
  if (typeof Da == "boolean" && !e)
    return Da;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), s = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || s, e || (Da = r), r;
}
function um(t, e, n) {
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
var Ft = (
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
function cm(t) {
  return t === void 0 && (t = window), dm(t) ? { passive: !0 } : !1;
}
function dm(t) {
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
const Sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: cm
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
function fm(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Ac(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Ac(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function hm(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: fm,
  estimateScrollWidth: hm,
  matches: Ac
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
var vm = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, mm = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Cl = {
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
var xl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Tl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ha = [], gm = (
  /** @class */
  function(t) {
    tt(e, t);
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
        return vm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return mm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Cl;
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
          for (var a = Mt(xl), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = Mt(Tl), s = a.next(); !s.done; s = a.next()) {
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
        for (var i = Mt(xl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Mt(Tl), a = i.next(); !a.done; a = i.next()) {
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
            var u = n !== void 0 && Ha.length > 0 && Ha.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ha.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ha = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
      i ? a = um(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Cl.FG_DEACTIVATION_MS));
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
  }(Ft)
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
var Ns = "mdc-dom-focus-sentinel", pm = (
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
      [].slice.call(this.root.querySelectorAll("." + Ns)).forEach(function(e) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Ns) && !i, s = !1;
        if (a) {
          var u = getComputedStyle(r);
          s = u.display === "none" || u.visibility === "hidden";
        }
        return a && !s;
      });
    }, t.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(Ns), e;
    }, t;
  }()
);
const bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: pm
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
var Ne = {
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
}, en = /* @__PURE__ */ new Set();
en.add(Ne.BACKSPACE);
en.add(Ne.ENTER);
en.add(Ne.SPACEBAR);
en.add(Ne.PAGE_UP);
en.add(Ne.PAGE_DOWN);
en.add(Ne.END);
en.add(Ne.HOME);
en.add(Ne.ARROW_LEFT);
en.add(Ne.ARROW_UP);
en.add(Ne.ARROW_RIGHT);
en.add(Ne.ARROW_DOWN);
en.add(Ne.DELETE);
en.add(Ne.ESCAPE);
en.add(Ne.TAB);
var on = {
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
}, tn = /* @__PURE__ */ new Map();
tn.set(on.BACKSPACE, Ne.BACKSPACE);
tn.set(on.ENTER, Ne.ENTER);
tn.set(on.SPACEBAR, Ne.SPACEBAR);
tn.set(on.PAGE_UP, Ne.PAGE_UP);
tn.set(on.PAGE_DOWN, Ne.PAGE_DOWN);
tn.set(on.END, Ne.END);
tn.set(on.HOME, Ne.HOME);
tn.set(on.ARROW_LEFT, Ne.ARROW_LEFT);
tn.set(on.ARROW_UP, Ne.ARROW_UP);
tn.set(on.ARROW_RIGHT, Ne.ARROW_RIGHT);
tn.set(on.ARROW_DOWN, Ne.ARROW_DOWN);
tn.set(on.DELETE, Ne.DELETE);
tn.set(on.ESCAPE, Ne.ESCAPE);
tn.set(on.TAB, Ne.TAB);
var Mr = /* @__PURE__ */ new Set();
Mr.add(Ne.PAGE_UP);
Mr.add(Ne.PAGE_DOWN);
Mr.add(Ne.END);
Mr.add(Ne.HOME);
Mr.add(Ne.ARROW_LEFT);
Mr.add(Ne.ARROW_UP);
Mr.add(Ne.ARROW_RIGHT);
Mr.add(Ne.ARROW_DOWN);
function Et(t) {
  var e = t.key;
  if (en.has(e))
    return e;
  var n = tn.get(t.keyCode);
  return n || Ne.UNKNOWN;
}
const { applyPassive: wl } = Sc, { matches: _m } = Aa;
function Zt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (v) => t.classList.add(v), removeClass: h = (v) => t.classList.remove(v), addStyle: f = (v, g) => t.style.setProperty(v, g), initPromise: m = Promise.resolve() } = {}) {
  let v, g = new oi(), _ = se("SMUI:addLayoutListener"), E, S = s, A = l, b = c;
  function I() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), v && S !== s && (S = s, s ? v.activate() : s === !1 && v.deactivate()), e && !v ? (v = new gm({
      addClass: d,
      browserSupportsCssVars: () => lm(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (T) => t.contains(T),
      deregisterDocumentInteractionHandler: (T, x) => g.off(document.documentElement, T, x),
      deregisterInteractionHandler: (T, x) => g.off(l || t, T, x),
      deregisterResizeHandler: (T) => window.removeEventListener("resize", T),
      getWindowPageOffset: () => {
        var T, x;
        return {
          x: (T = window.pageXOffset) !== null && T !== void 0 ? T : window.scrollX,
          y: (x = window.pageYOffset) !== null && x !== void 0 ? x : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? _m(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, x) => {
        const C = wl();
        g.on(document.documentElement, T, x, typeof C == "boolean" ? { capture: C } : C);
      },
      registerInteractionHandler: (T, x) => {
        const C = wl();
        g.on(l || t, T, x, typeof C == "boolean" ? { capture: C } : C);
      },
      registerResizeHandler: (T) => g.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), m.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && m.then(() => {
      v && (v.destroy(), v = void 0, g.clear());
    }), v && (A !== l || b !== c) && (A = l, b = c, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  I(), _ && (E = _(y));
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (x) => t.classList.add(x), removeClass: (x) => t.classList.remove(x), addStyle: (x, C) => t.style.setProperty(x, C), initPromise: Promise.resolve() }, T)), I();
    },
    destroy() {
      v && (v.destroy(), v = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), E && E();
    }
  };
}
function ym(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, li), a = p(e, "tag", 3, "span"), s = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = se("SMUI:label:context"), c = se("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var h = { getElement: d }, f = ee(), m = Q(f);
  {
    let v = /* @__PURE__ */ me(() => Pe({
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
    Or(m, i, (g, _) => {
      xe(
        _(g, et(
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
            children: (E, S) => {
              var A = ee(), b = Q(A);
              Ie(b, () => e.children ?? le), L(E, A);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => u = E,
        () => u
      );
    });
  }
  return L(t, f), Le(h);
}
function Im(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, li), s = p(e, "tag", 3, "i"), u = /* @__PURE__ */ We(e, [
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
  const c = /* @__PURE__ */ me(() => s() === "svg" || a() === Am), d = se("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, m = ee(), v = Q(m);
  {
    let g = /* @__PURE__ */ me(() => Pe({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    Or(v, a, (_, E) => {
      xe(
        E(_, et(
          {
            get tag() {
              return s();
            },
            get use() {
              return n();
            },
            get class() {
              return o(g);
            },
            "aria-hidden": "true"
          },
          () => o(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (S, A) => {
              var b = ee(), I = Q(b);
              Ie(I, () => e.children ?? le), L(S, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (S) => l = S,
        () => l
      );
    });
  }
  return L(t, m), Le(f);
}
var Em = /* @__PURE__ */ sn("<svg><!></svg>");
function li(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ me(() => [
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
  var l = { getElement: u }, c = ee(), d = Q(c);
  {
    var h = (m) => {
      var v = Em();
      Ge(v, () => ({ ...i }));
      var g = be(v);
      Ie(g, () => e.children ?? le), xe(v, (_) => s = _, () => s), Ue(v, (_, E) => X == null ? void 0 : X(_, E), n), L(m, v);
    }, f = (m) => {
      var v = ee(), g = Q(v);
      {
        var _ = (S) => {
          var A = ee(), b = Q(A);
          nl(b, r, !1, (I, y) => {
            xe(I, (T) => s = T, () => s), Ue(I, (T, x) => X == null ? void 0 : X(T, x), n), Ge(I, () => ({ ...i }));
          }), L(S, A);
        }, E = (S) => {
          var A = ee(), b = Q(A);
          nl(b, r, !1, (I, y) => {
            xe(I, (C) => s = C, () => s), Ue(I, (C, P) => X == null ? void 0 : X(C, P), n), Ge(I, () => ({ ...i }));
            var T = ee(), x = Q(T);
            Ie(x, () => e.children ?? le), L(y, T);
          }), L(S, A);
        };
        ae(
          g,
          (S) => {
            o(a) ? S(_) : S(E, !1);
          },
          !0
        );
      }
      L(m, v);
    };
    ae(d, (m) => {
      r() === "svg" ? m(h) : m(f, !1);
    });
  }
  return L(t, c), Le(l);
}
var Sm = /* @__PURE__ */ sn("<svg><!></svg>");
function Am(t, e) {
  we(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, u = Sm();
  Ge(u, () => ({ ...r }));
  var l = be(u);
  return Ie(l, () => e.children ?? le), xe(u, (c) => i = c, () => i), Ue(u, (c, d) => X == null ? void 0 : X(c, d), n), L(t, u), Le(s);
}
function Na(t, e) {
  we(e, !0);
  const [n, r] = Wn(), i = Ut(e.value);
  te(e.key, i), Te(() => {
    Rn(i, e.value);
  }), mn(() => {
    i.set(void 0);
  });
  var a = ee(), s = Q(a);
  Ie(s, () => e.children ?? le), L(t, a), Le(), r();
}
var Cm = /* @__PURE__ */ ge('<div class="mdc-button__touch"></div>'), xm = /* @__PURE__ */ ge('<div class="mdc-button__ripple"></div> <!><!>', 1);
function Cc(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), s = p(e, "color", 3, "primary"), u = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), c = p(e, "action", 3, "close"), d = p(e, "defaultAction", 3, !1), h = p(e, "secondary", 3, !1), f = p(e, "component", 3, li), m = p(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ We(e, [
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
  ]), g, _ = Ae({}), E = Ae({}), S = se("SMUI:button:context");
  const A = /* @__PURE__ */ me(() => S === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), b = /* @__PURE__ */ me(() => S === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), I = /* @__PURE__ */ me(() => S === "banner" ? {} : { secondary: h() });
  let y = e.disabled;
  Te(() => {
    if (y !== e.disabled) {
      if (g) {
        const q = K();
        "blur" in q && q.blur();
      }
      y = v.disabled;
    }
  }), te("SMUI:label:context", "button"), te("SMUI:icon:context", "button");
  function T(q) {
    _[q] || (_[q] = !0);
  }
  function x(q) {
    (!(q in _) || _[q]) && (_[q] = !1);
  }
  function C(q, F) {
    E[q] != F && (F === "" || F == null ? delete E[q] : E[q] = F);
  }
  function P() {
    S === "banner" && ze(K(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function K() {
    return g.getElement();
  }
  var k = { getElement: K }, B = ee(), ve = Q(B);
  {
    let q = /* @__PURE__ */ me(() => [
      [
        Zt,
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
    ]), F = /* @__PURE__ */ me(() => Pe({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": S === "card:action",
      "mdc-card__action--button": S === "card:action",
      "mdc-dialog__button": S === "dialog:action",
      "mdc-top-app-bar__navigation-icon": S === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": S === "top-app-bar:action",
      "mdc-snackbar__action": S === "snackbar:actions",
      "mdc-banner__secondary-action": S === "banner" && h(),
      "mdc-banner__primary-action": S === "banner" && !h(),
      "mdc-tooltip__action": S === "tooltip:rich-actions",
      ..._,
      [r()]: !0
    })), O = /* @__PURE__ */ me(() => Object.entries(E).map(([G, z]) => `${G}: ${z};`).concat([i()]).join(" "));
    Or(ve, f, (G, z) => {
      xe(
        z(G, et(
          {
            get tag() {
              return m();
            },
            get use() {
              return o(q);
            },
            get class() {
              return o(F);
            },
            get style() {
              return o(O);
            }
          },
          () => o(A),
          () => o(b),
          () => o(I),
          {
            get href() {
              return e.href;
            }
          },
          () => v,
          {
            onclick: (R) => {
              var w;
              P(), (w = e.onclick) == null || w.call(e, R);
            },
            children: (R, w) => {
              var U = xm(), fe = ye(Q(U), 2);
              Ie(fe, () => e.children ?? le);
              var Se = ye(fe);
              {
                var oe = (Ce) => {
                  var j = Cm();
                  L(Ce, j);
                };
                ae(Se, (Ce) => {
                  l() && Ce(oe);
                });
              }
              L(R, U);
            },
            $$slots: { default: !0 }
          }
        )),
        (R) => g = R,
        () => g
      );
    });
  }
  return L(t, B), Le(k);
}
function xc(t, e) {
  we(e, !0);
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "disabled", 3, !1), i = p(e, "variant", 3, "default"), a = p(e, "isAbortAction", 3, !1), s = p(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ me(() => a() ? "background-color: #ff3e00;" : "background-color: " + s());
    Cc(t, {
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
        var d = ee(), h = Q(d);
        Ie(h, () => e.children ?? le), L(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  Le();
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
var Pa = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, Qn = {
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
var Tm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Qn;
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
      var n = this.adapter.getAttr(Qn.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(Qn.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(Qn.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(Qn.ARIA_PRESSED, String(this.isOn()));
    }, e.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, e.prototype.isOn = function() {
      return this.adapter.hasClass(Pa.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Pa.ICON_BUTTON_ON) : this.adapter.removeClass(Pa.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(Qn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Qn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Qn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(Qn.ARIA_PRESSED, "" + n);
    }, e;
  }(Ft)
), wm = /* @__PURE__ */ ge('<div class="mdc-icon-button__touch"></div>'), Lm = /* @__PURE__ */ ge('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function Om(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(w) {
    return w === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), u = p(e, "ripple", 3, !0), l = p(e, "toggle", 3, !1), c = p(e, "pressed", 15, n), d = p(e, "touch", 3, !1), h = p(e, "displayFlex", 3, !0), f = p(e, "size", 3, "normal"), m = p(e, "component", 3, li), v = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ We(e, [
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
  ]), _, E, S = /* @__PURE__ */ pe(Ae({})), A = Ae({}), b = /* @__PURE__ */ pe(Ae({})), I = se("SMUI:icon-button:context"), y = se("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ me(() => {
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
  let x = !!e.disabled;
  Te(() => {
    if (x != !!e.disabled) {
      if (_) {
        const w = O();
        "blur" in w && w.blur();
      }
      x = !!e.disabled;
    }
  }), te("SMUI:icon:context", "icon-button");
  let C = null;
  Te(() => {
    _ && O() && l() !== C && (l() && !E ? (E = new Tm({
      addClass: K,
      hasClass: P,
      notifyChange: (w) => {
        F(w), ze(O(), "SMUIIconButtonToggleChange", w);
      },
      removeClass: k,
      getAttr: ve,
      setAttr: q
    }), E.init()) : !l() && E && (E.destroy(), E = void 0, Z(S, {}, !0), Z(b, {}, !0)), C = l());
  }), Te(() => {
    E && !r(c()) && E.isOn() !== c() && E.toggle(c());
  }), mn(() => {
    E && E.destroy();
  });
  function P(w) {
    return w in o(S) ? o(S)[w] : O().classList.contains(w);
  }
  function K(w) {
    o(S)[w] || (o(S)[w] = !0);
  }
  function k(w) {
    (!(w in o(S)) || o(S)[w]) && (o(S)[w] = !1);
  }
  function B(w, U) {
    A[w] != U && (U === "" || U == null ? delete A[w] : A[w] = U);
  }
  function ve(w) {
    return w in o(b) ? o(b)[w] ?? null : O().getAttribute(w);
  }
  function q(w, U) {
    o(b)[w] !== U && (o(b)[w] = U);
  }
  function F(w) {
    c(w.isOn);
  }
  function O() {
    return _.getElement();
  }
  var G = { getElement: O }, z = ee(), R = Q(z);
  {
    let w = /* @__PURE__ */ me(() => [
      [
        Zt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: K,
          removeClass: k,
          addStyle: B
        }
      ],
      ...i()
    ]), U = /* @__PURE__ */ me(() => Pe({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
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
      ...o(S),
      [a()]: !0
    })), fe = /* @__PURE__ */ me(() => Object.entries(A).map(([Ce, j]) => `${Ce}: ${j};`).concat([s()]).join(" ")), Se = /* @__PURE__ */ me(() => r(c()) ? null : c() ? "true" : "false"), oe = /* @__PURE__ */ me(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    Or(R, m, (Ce, j) => {
      xe(
        j(Ce, et(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(w);
            },
            get class() {
              return o(U);
            },
            get style() {
              return o(fe);
            },
            get "aria-pressed"() {
              return o(Se);
            },
            get "aria-label"() {
              return o(oe);
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
          () => o(b),
          () => g,
          {
            onclick: (ie) => {
              var Y;
              E && E.handleClick(), I === "top-app-bar:navigation" && ze(O(), "SMUITopAppBarIconButtonNav"), (Y = e.onclick) == null || Y.call(e, ie);
            },
            children: (ie, Y) => {
              var re = Lm(), _e = ye(Q(re), 2);
              Ie(_e, () => e.children ?? le);
              var W = ye(_e);
              {
                var ne = (Oe) => {
                  var Ee = wm();
                  L(Oe, Ee);
                };
                ae(W, (Oe) => {
                  d() && Oe(ne);
                });
              }
              L(ie, re);
            },
            $$slots: { default: !0 }
          }
        )),
        (ie) => _ = ie,
        () => _
      );
    });
  }
  return L(t, z), Le(G);
}
function Rm(t, e) {
  let n = p(e, "callback", 3, () => {
  }), r = p(e, "icon", 3, ""), i = p(e, "disabled", 3, !1);
  Om(t, {
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
      Im(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = qt();
          De(() => ht(c, r())), L(u, c);
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
var Mm = {
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
var Dm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Mm;
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
  }(Ft)
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
var Hm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Fr;
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
      this.adapter.removeClass(Fr.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Fr.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Fr.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Fr.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Fr.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Fr.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(Ft)
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
var Nm = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ll = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Pm = {
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
var Um = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Nm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Pm;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ll;
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
      n > 0 && (n += Ll.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Ft)
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
var Ps = {
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
}, Ol = {
  LABEL_SCALE: 0.75
}, km = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Bm = [
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
var Rl = ["mousedown", "touchstart"], Ml = ["click", "keydown"], Vm = (
  /** @class */
  function(t) {
    tt(e, t);
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
        return Ps;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ol;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return Bm.indexOf(n) >= 0;
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
        for (var s = Mt(Rl), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = Mt(Ml), d = c.next(); !d.done; d = c.next()) {
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
        for (var s = Mt(Rl), u = s.next(); !u.done; u = s.next()) {
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
        for (var c = Mt(Ml), d = c.next(); !d.done; d = c.next()) {
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
        return km.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * Ol.LABEL_SCALE;
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
        a && s ? this.adapter.setInputAttr(Ps.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(Ps.ARIA_DESCRIBEDBY);
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
  }(Ft)
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
var Dl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Gm = {
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
var Hl = ["click", "keydown"], jm = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Dl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gm;
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
        for (var i = Mt(Hl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Mt(Hl), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Dl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Ft)
), qm = /* @__PURE__ */ ge("<span><!></span>"), zm = /* @__PURE__ */ ge("<label><!></label>");
function rs(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), s = p(e, "required", 15, !1), u = p(e, "wrapped", 3, !1), l = /* @__PURE__ */ We(e, [
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
  ]), c, d = /* @__PURE__ */ pe(void 0), h = new oi(), f = Ae({}), m = Ae({}), v = se("SMUI:generic:input:props") ?? {}, g = a();
  Te(() => {
    o(d) && g !== a() && (g = a(), o(d).float(a()));
  });
  let _ = s();
  Te(() => {
    o(d) && _ !== s() && (_ = s(), o(d).setRequired(s()));
  });
  const E = se("SMUI:floating-label:mount"), S = se("SMUI:floating-label:unmount");
  st(() => {
    Z(
      d,
      new Dm({
        addClass: A,
        removeClass: b,
        getWidth: () => {
          var w, U;
          const G = K(), z = G.cloneNode(!0);
          (w = G.parentNode) == null || w.appendChild(z), z.classList.add("smui-floating-label--remove-transition"), z.classList.add("smui-floating-label--force-size"), z.classList.remove("mdc-floating-label--float-above");
          const R = z.scrollWidth;
          return (U = G.parentNode) == null || U.removeChild(z), R;
        },
        registerInteractionHandler: (G, z) => h.on(K(), G, z),
        deregisterInteractionHandler: (G, z) => h.off(K(), G, z)
      }),
      !0
    );
    const O = {
      get element() {
        return K();
      },
      addStyle: I,
      removeStyle: y
    };
    return E && E(O), o(d).init(), () => {
      var G;
      S && S(O), (G = o(d)) == null || G.destroy(), h.clear();
    };
  });
  function A(O) {
    f[O] || (f[O] = !0);
  }
  function b(O) {
    (!(O in f) || f[O]) && (f[O] = !1);
  }
  function I(O, G) {
    m[O] != G && (G === "" || G == null ? delete m[O] : m[O] = G);
  }
  function y(O) {
    O in m && delete m[O];
  }
  function T(O) {
    var G;
    (G = o(d)) == null || G.shake(O);
  }
  function x(O) {
    a(O);
  }
  function C(O) {
    s(O);
  }
  function P() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getWidth();
  }
  function K() {
    return c;
  }
  var k = { shake: T, float: x, setRequired: C, getWidth: P, getElement: K }, B = ee(), ve = Q(B);
  {
    var q = (O) => {
      var G = qm();
      Ge(G, (R, w) => ({ class: R, style: w, ...l }), [
        () => Pe({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(m).map(([R, w]) => `${R}: ${w};`).concat([i()]).join(" ")
      ]);
      var z = be(G);
      Ie(z, () => e.children ?? le), xe(G, (R) => c = R, () => c), Ue(G, (R, w) => X == null ? void 0 : X(R, w), n), L(O, G);
    }, F = (O) => {
      var G = zm();
      Ge(
        G,
        (R, w) => ({
          class: R,
          style: w,
          for: e.for || (v ? v.id : void 0),
          ...l
        }),
        [
          () => Pe({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(m).map(([R, w]) => `${R}: ${w};`).concat([i()]).join(" ")
        ]
      );
      var z = be(G);
      Ie(z, () => e.children ?? le), xe(G, (R) => c = R, () => c), Ue(G, (R, w) => X == null ? void 0 : X(R, w), n), L(O, G);
    };
    ae(ve, (O) => {
      u() ? O(q) : O(F, !1);
    });
  }
  return L(t, B), Le(k);
}
var Wm = /* @__PURE__ */ ge("<div></div>");
function Tc(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), s = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ pe(void 0), c = new oi(), d = Ae({}), h = Ae({});
  st(() => (Z(
    l,
    new Hm({
      addClass: m,
      removeClass: v,
      hasClass: f,
      setStyle: g,
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
  function g(y, T) {
    h[y] != T && (T === "" || T == null ? delete h[y] : h[y] = T);
  }
  function _() {
    var y;
    (y = o(l)) == null || y.activate();
  }
  function E() {
    var y;
    (y = o(l)) == null || y.deactivate();
  }
  function S(y) {
    var T;
    (T = o(l)) == null || T.setRippleCenter(y);
  }
  function A() {
    return u;
  }
  var b = { activate: _, deactivate: E, setRippleCenter: S, getElement: A }, I = Wm();
  return Ge(I, (y, T) => ({ class: y, style: T, ...s }), [
    () => Pe({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([y, T]) => `${y}: ${T};`).concat([i()]).join(" ")
  ]), xe(I, (y) => u = y, () => u), Ue(I, (y, T) => X == null ? void 0 : X(y, T), n), L(t, I), Le(b);
}
var Xm = /* @__PURE__ */ ge('<div class="mdc-notched-outline__notch"><!></div>'), Km = /* @__PURE__ */ ge('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function wc(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), s = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ pe(void 0), c = /* @__PURE__ */ pe(void 0), d = Ae({}), h = Ae({}), f;
  Te(() => {
    o(c) !== f && (o(c) ? (o(c).addStyle("transition-duration", "0s"), m("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(c) && o(c).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), f = o(c));
  }), te("SMUI:floating-label:mount", (x) => {
    Z(c, x, !0);
  }), te("SMUI:floating-label:unmount", () => {
    Z(c, void 0);
  }), st(() => (Z(
    l,
    new Um({
      addClass: m,
      removeClass: v,
      setNotchWidthProperty: (x) => g("width", x + "px"),
      removeNotchWidthProperty: () => _("width")
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
  function g(x, C) {
    h[x] != C && (C === "" || C == null ? delete h[x] : h[x] = C);
  }
  function _(x) {
    x in h && delete h[x];
  }
  function E(x) {
    var C;
    (C = o(l)) == null || C.notch(x);
  }
  function S() {
    var x;
    (x = o(l)) == null || x.closeNotch();
  }
  function A() {
    return u;
  }
  var b = { notch: E, closeNotch: S, getElement: A }, I = Km();
  Ge(I, (x) => ({ class: x, ...s }), [
    () => Pe({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var y = ye(be(I), 2);
  {
    var T = (x) => {
      var C = Xm(), P = be(C);
      Ie(P, () => e.children ?? le), De((K) => zt(C, K), [
        () => Object.entries(h).map(([K, k]) => `${K}: ${k};`).join(" ")
      ]), L(x, C);
    };
    ae(y, (x) => {
      a() || x(T);
    });
  }
  return xe(I, (x) => u = x, () => u), Ue(I, (x, C) => X == null ? void 0 : X(x, C), n), L(t, I), Le(b);
}
function Ca(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, li), a = p(e, "tag", 3, "div"), s = p(e, "_smuiClass", 3, ""), u = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), c = p(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ We(e, [
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
  Object.entries(u()).forEach(([E, S]) => {
    const A = se(S);
    A && "subscribe" in A && f.push(A.subscribe((b) => {
      u()[E] = b;
    }));
  });
  for (let E in l())
    l().hasOwnProperty(E) && te(E, l()[E]);
  mn(() => {
    for (const E of f)
      E();
  });
  function m() {
    return h.getElement();
  }
  var v = { getElement: m }, g = ee(), _ = Q(g);
  {
    let E = /* @__PURE__ */ me(() => Pe({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    Or(_, i, (S, A) => {
      xe(
        A(S, et(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return o(E);
            }
          },
          c,
          () => d,
          {
            children: (b, I) => {
              var y = ee(), T = Q(y);
              Ie(T, () => e.children ?? le), L(b, y);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => h = b,
        () => h
      );
    });
  }
  return L(t, g), Le(v);
}
function Zm(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Ca(t, et({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (s, u) => {
        var l = ee(), c = Q(l);
        Ie(c, () => e.children ?? le), L(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Le(a);
}
function Ym(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Ca(t, et(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (s, u) => {
          var l = ee(), c = Q(l);
          Ie(c, () => e.children ?? le), L(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Le(a);
}
function Qm(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Ca(t, et(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (s, u) => {
          var l = ee(), c = Q(l);
          Ie(c, () => e.children ?? le), L(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Le(a);
}
var Jm = /* @__PURE__ */ ge("<input/>");
function $m(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), s = p(e, "value", 15), u = p(e, "files", 15, null), l = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), d = p(e, "updateInvalid", 3, !0), h = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => s() === null), m = p(e, "emptyValueUndefined", 19, () => s() === void 0), v = /* @__PURE__ */ We(e, [
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
  ]), g, _ = Ae({}), E = Ae({});
  Te(() => {
    i() === "file" ? delete E.value : E.value = s() == null ? "" : s();
  }), st(() => {
    d() && h() && c(P().matches(":invalid"));
  });
  function S(q) {
    return q === "" ? Number.NaN : +q;
  }
  function A(q) {
    if (i() === "file") {
      u(q.currentTarget.files);
      return;
    }
    if (q.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (q.currentTarget.value === "" && m()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(S(q.currentTarget.value));
        break;
      default:
        s(q.currentTarget.value);
        break;
    }
  }
  function b(q) {
    (i() === "file" || i() === "range") && A(q), l(!0), d() && c(P().matches(":invalid"));
  }
  function I(q) {
    return q in _ ? _[q] ?? null : P().getAttribute(q);
  }
  function y(q, F) {
    _[q] !== F && (_[q] = F);
  }
  function T(q) {
    (!(q in _) || _[q] != null) && (_[q] = void 0);
  }
  function x() {
    P().focus();
  }
  function C() {
    P().blur();
  }
  function P() {
    return g;
  }
  var K = { getAttr: I, addAttr: y, removeAttr: T, focus: x, blur: C, getElement: P }, k = Jm(), B = (q) => {
    var F;
    i() !== "file" && A(q), (F = e.oninput) == null || F.call(e, q);
  }, ve = (q) => {
    var F;
    b(q), (F = e.onchange) == null || F.call(e, q);
  };
  return Ge(
    k,
    (q) => ({
      class: q,
      type: i(),
      placeholder: a(),
      ...E,
      ..._,
      ...v,
      oninput: B,
      onchange: ve
    }),
    [
      () => Pe({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), xe(k, (q) => g = q, () => g), Ue(k, (q, F) => X == null ? void 0 : X(q, F), n), L(t, k), Le(K);
}
var eg = /* @__PURE__ */ ge("<textarea></textarea>");
function tg(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), s = p(e, "dirty", 15, !1), u = p(e, "invalid", 15, !1), l = p(e, "updateInvalid", 3, !0), c = p(e, "initialInvalid", 3, !1), d = p(e, "resizable", 3, !0), h = /* @__PURE__ */ We(e, [
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
  st(() => {
    l() && c() && u(b().matches(":invalid"));
  });
  function v() {
    s(!0), l() && u(b().matches(":invalid"));
  }
  function g(x) {
    return x in m ? m[x] ?? null : b().getAttribute(x);
  }
  function _(x, C) {
    m[x] !== C && (m[x] = C);
  }
  function E(x) {
    (!(x in m) || m[x] != null) && (m[x] = void 0);
  }
  function S() {
    b().focus();
  }
  function A() {
    b().blur();
  }
  function b() {
    return f;
  }
  var I = { getAttr: g, addAttr: _, removeAttr: E, focus: S, blur: A, getElement: b }, y = eg(), T = (x) => {
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
      () => Pe({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), xe(y, (x) => f = x, () => f), Ue(y, (x, C) => X == null ? void 0 : X(x, C), n), ii(() => ha(y, a)), L(t, y), Le(I);
}
var ng = /* @__PURE__ */ ge('<span class="mdc-text-field__ripple"></span>'), rg = /* @__PURE__ */ ge("<!> <!>", 1), ig = /* @__PURE__ */ ge("<span><!> <!></span>"), ag = /* @__PURE__ */ ge("<!> <!> <!>", 1), sg = /* @__PURE__ */ ge("<label><!> <!> <!> <!> <!> <!> <!></label>"), og = /* @__PURE__ */ ge("<div><!> <!> <!> <!> <!></div>"), lg = /* @__PURE__ */ ge("<!> <!>", 1);
function fo(t, e) {
  we(e, !0);
  const { applyPassive: n } = Sc;
  let r = () => {
  };
  function i(H) {
    return H === r;
  }
  let a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), c = p(e, "disabled", 3, !1), d = p(e, "required", 3, !1), h = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => h() ? "outlined" : "standard"), m = p(e, "noLabel", 3, !1), v = p(e, "type", 3, "text"), g = p(e, "value", 15), _ = p(e, "files", 15, r), E = p(e, "invalid", 15, r), S = p(e, "updateInvalid", 19, () => i(E())), A = p(e, "initialInvalid", 3, !1), b = p(e, "dirty", 15, !1), I = p(e, "validateOnValueChange", 19, S), y = p(e, "useNativeValidation", 19, S), T = p(e, "withLeadingIcon", 3, r), x = p(e, "withTrailingIcon", 3, r), C = p(e, "input", 7), P = p(e, "floatingLabel", 7), K = p(e, "lineRipple", 7), k = p(e, "notchedOutline", 7), B = /* @__PURE__ */ We(e, [
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
  const ve = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(_());
  i(_()) && _(null), i(E()) && E(!1);
  let q, F = /* @__PURE__ */ pe(void 0), O = new oi(), G = Ae({}), z = Ae({}), R = /* @__PURE__ */ pe(void 0), w = /* @__PURE__ */ pe(!1), U = /* @__PURE__ */ pe(Ae(A())), fe = se("SMUI:addLayoutListener"), Se, oe, Ce = new Promise((H) => oe = H), j, ie, Y, re;
  const _e = /* @__PURE__ */ me(() => C() && C().getElement());
  Te(() => {
    (b() || o(U) || !S()) && o(F) && o(F).isValid() !== !E() && (S() ? E(!o(F).isValid()) : o(F).setValid(!E()));
  }), Te(() => {
    o(F) && o(F).getValidateOnValueChange() !== I() && o(F).setValidateOnValueChange(i(I()) ? !1 : I());
  }), Te(() => {
    o(F) && o(F).setUseNativeValidation(i(y()) ? !0 : y());
  }), Te(() => {
    o(F) && o(F).setDisabled(c());
  });
  let W = g();
  Te(() => {
    if (o(F) && ve && W !== g()) {
      W = g();
      const H = `${g() == null ? "" : g()}`;
      o(F).getValue() !== H && o(F).setValue(H);
    }
  }), fe && (Se = fe(D)), te("SMUI:textfield:leading-icon:mount", (H) => {
    j = H;
  }), te("SMUI:textfield:leading-icon:unmount", () => {
    j = void 0;
  }), te("SMUI:textfield:trailing-icon:mount", (H) => {
    ie = H;
  }), te("SMUI:textfield:trailing-icon:unmount", () => {
    ie = void 0;
  }), te("SMUI:textfield:helper-text:id", (H) => {
    Z(R, H, !0);
  }), te("SMUI:textfield:helper-text:mount", (H) => {
    Y = H;
  }), te("SMUI:textfield:helper-text:unmount", () => {
    Z(R, void 0), Y = void 0;
  }), te("SMUI:textfield:character-counter:mount", (H) => {
    re = H;
  }), te("SMUI:textfield:character-counter:unmount", () => {
    re = void 0;
  }), st(() => {
    var H;
    if (Z(
      F,
      new Vm(
        {
          // getRootAdapterMethods_
          addClass: Oe,
          removeClass: Ee,
          hasClass: ne,
          registerTextFieldInteractionHandler: (J, Re) => O.on(V(), J, Re),
          deregisterTextFieldInteractionHandler: (J, Re) => O.off(V(), J, Re),
          registerValidationAttributeChangeHandler: (J) => {
            const Re = (Ct) => Ct.map((kt) => kt.attributeName).filter((kt) => kt), ot = new MutationObserver((Ct) => {
              y() && J(Re(Ct));
            }), it = { attributes: !0 };
            return C() && ot.observe(C().getElement(), it), ot;
          },
          deregisterValidationAttributeChangeHandler: (J) => {
            J.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var J;
            return ((J = C()) == null ? void 0 : J.getElement()) ?? null;
          },
          setInputAttr: (J, Re) => {
            var ot;
            (ot = C()) == null || ot.addAttr(J, Re);
          },
          removeInputAttr: (J) => {
            var Re;
            (Re = C()) == null || Re.removeAttr(J);
          },
          isFocused: () => {
            var J;
            return document.activeElement === ((J = C()) == null ? void 0 : J.getElement());
          },
          registerInputInteractionHandler: (J, Re) => {
            var it;
            const ot = (it = C()) == null ? void 0 : it.getElement();
            if (ot) {
              const Ct = n();
              O.on(ot, J, Re, typeof Ct == "boolean" ? { capture: Ct } : Ct);
            }
          },
          deregisterInputInteractionHandler: (J, Re) => {
            var it;
            const ot = (it = C()) == null ? void 0 : it.getElement();
            ot && O.off(ot, J, Re);
          },
          // getLabelAdapterMethods_
          floatLabel: (J) => P() && P().float(J),
          getLabelWidth: () => P() ? P().getWidth() : 0,
          hasLabel: () => !!P(),
          shakeLabel: (J) => P() && P().shake(J),
          setLabelRequired: (J) => P() && P().setRequired(J),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => K() && K().activate(),
          deactivateLineRipple: () => K() && K().deactivate(),
          setLineRippleTransformOrigin: (J) => K() && K().setRippleCenter(J),
          // getOutlineAdapterMethods_
          closeOutline: () => k() && k().closeNotch(),
          hasOutline: () => !!k(),
          notchOutline: (J) => k() && k().notch(J)
        },
        {
          get helperText() {
            return Y;
          },
          get characterCounter() {
            return re;
          },
          get leadingIcon() {
            return j;
          },
          get trailingIcon() {
            return ie;
          }
        }
      ),
      !0
    ), ve) {
      if (C() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (H = o(F)) == null || H.init();
    } else
      Fu().then(() => {
        var J;
        if (C() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (J = o(F)) == null || J.init();
      });
    return oe(), () => {
      var J;
      (J = o(F)) == null || J.destroy(), O.clear();
    };
  }), mn(() => {
    Se && Se();
  });
  function ne(H) {
    return H in G ? G[H] ?? null : V().classList.contains(H);
  }
  function Oe(H) {
    G[H] || (G[H] = !0);
  }
  function Ee(H) {
    (!(H in G) || G[H]) && (G[H] = !1);
  }
  function Fe(H, J) {
    z[H] != J && (J === "" || J == null ? delete z[H] : z[H] = J);
  }
  function Ze() {
    var H;
    (H = C()) == null || H.focus();
  }
  function ct() {
    var H;
    (H = C()) == null || H.blur();
  }
  function D() {
    if (o(F)) {
      const H = o(F).shouldFloat;
      o(F).notchOutline(H);
    }
  }
  function V() {
    return q;
  }
  var ue = { focus: Ze, blur: ct, layout: D, getElement: V }, ke = lg(), St = Q(ke);
  {
    var At = (H) => {
      var J = sg();
      Ge(J, (He, $e, Je) => ({ class: He, style: $e, for: void 0, ...Je }), [
        () => Pe({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--label-floating": o(w) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(x()) ? e.trailingIcon : x(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...G,
          [s()]: !0
        }),
        () => Object.entries(z).map(([He, $e]) => `${He}: ${$e};`).concat([u()]).join(" "),
        () => ti(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Re = be(J);
      {
        var ot = (He) => {
          var $e = rg(), Je = Q($e);
          {
            var Lt = (gt) => {
              var xt = ng();
              L(gt, xt);
            };
            ae(Je, (gt) => {
              f() === "filled" && gt(Lt);
            });
          }
          var un = ye(Je, 2);
          {
            var Ke = (gt) => {
              {
                let xt = /* @__PURE__ */ me(() => o(w) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Ye = /* @__PURE__ */ me(() => ut(B, "label$"));
                xe(
                  rs(gt, et(
                    {
                      get floatAbove() {
                        return o(xt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => o(Ye),
                    {
                      children: (Tt, Bt) => {
                        var Wt = ee(), bt = Q(Wt);
                        {
                          var Ot = (pt) => {
                          }, nn = (pt) => {
                            var Dr = ee(), gn = Q(Dr);
                            {
                              var ur = (pn) => {
                                var Kn = qt();
                                De(() => ht(Kn, e.label)), L(pn, Kn);
                              }, Zi = (pn) => {
                                var Kn = ee(), Pn = Q(Kn);
                                Ie(Pn, () => e.label), L(pn, Kn);
                              };
                              ae(
                                gn,
                                (pn) => {
                                  typeof e.label == "string" ? pn(ur) : pn(Zi, !1);
                                },
                                !0
                              );
                            }
                            L(pt, Dr);
                          };
                          ae(bt, (pt) => {
                            e.label == null ? pt(Ot) : pt(nn, !1);
                          });
                        }
                        L(Tt, Wt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Tt) => P(Tt),
                  () => P()
                );
              }
            };
            ae(un, (gt) => {
              !m() && e.label != null && gt(Ke);
            });
          }
          L(He, $e);
        };
        ae(Re, (He) => {
          !h() && f() !== "outlined" && He(ot);
        });
      }
      var it = ye(Re, 2);
      {
        var Ct = (He) => {
          {
            let $e = /* @__PURE__ */ me(() => m() || e.label == null), Je = /* @__PURE__ */ me(() => ut(B, "outline$"));
            xe(
              wc(He, et(
                {
                  get noLabel() {
                    return o($e);
                  }
                },
                () => o(Je),
                {
                  children: (Lt, un) => {
                    var Ke = ee(), gt = Q(Ke);
                    {
                      var xt = (Ye) => {
                        {
                          let Tt = /* @__PURE__ */ me(() => o(w) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Bt = /* @__PURE__ */ me(() => ut(B, "label$"));
                          xe(
                            rs(Ye, et(
                              {
                                get floatAbove() {
                                  return o(Tt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => o(Bt),
                              {
                                children: (Wt, bt) => {
                                  var Ot = ee(), nn = Q(Ot);
                                  {
                                    var pt = (gn) => {
                                    }, Dr = (gn) => {
                                      var ur = ee(), Zi = Q(ur);
                                      {
                                        var pn = (Pn) => {
                                          var Hr = qt();
                                          De(() => ht(Hr, e.label)), L(Pn, Hr);
                                        }, Kn = (Pn) => {
                                          var Hr = ee(), Is = Q(Hr);
                                          Ie(Is, () => e.label), L(Pn, Hr);
                                        };
                                        ae(
                                          Zi,
                                          (Pn) => {
                                            typeof e.label == "string" ? Pn(pn) : Pn(Kn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      L(gn, ur);
                                    };
                                    ae(nn, (gn) => {
                                      e.label == null ? gn(pt) : gn(Dr, !1);
                                    });
                                  }
                                  L(Wt, Ot);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Wt) => P(Wt),
                            () => P()
                          );
                        }
                      };
                      ae(gt, (Ye) => {
                        !m() && e.label != null && Ye(xt);
                      });
                    }
                    L(Lt, Ke);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Lt) => k(Lt),
              () => k()
            );
          }
        };
        ae(it, (He) => {
          (h() || f() === "outlined") && He(Ct);
        });
      }
      var kt = ye(it, 2);
      Na(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (He, $e) => {
          var Je = ee(), Lt = Q(Je);
          Ie(Lt, () => e.leadingIcon ?? le), L(He, Je);
        },
        $$slots: { default: !0 }
      });
      var lr = ye(kt, 2);
      Ie(lr, () => e.children ?? le);
      var dt = ye(lr, 2);
      {
        var vt = (He) => {
          var $e = ig(), Je = be($e);
          {
            let un = /* @__PURE__ */ me(() => ut(B, "input$"));
            xe(
              tg(Je, et(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return S();
                  },
                  get initialInvalid() {
                    return o(U);
                  },
                  get "aria-controls"() {
                    return o(R);
                  },
                  get "aria-describedby"() {
                    return o(R);
                  }
                },
                () => o(un),
                {
                  onblur: (Ke) => {
                    var gt;
                    Z(w, !1), Z(U, !0), ze(V(), "blur", Ke), (gt = e.input$onblur) == null || gt.call(e, Ke);
                  },
                  onfocus: (Ke) => {
                    var gt;
                    Z(w, !0), ze(V(), "focus", Ke), (gt = e.input$onfocus) == null || gt.call(e, Ke);
                  },
                  get value() {
                    return g();
                  },
                  set value(Ke) {
                    g(Ke);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(Ke) {
                    b(Ke);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Ke) {
                    E(Ke);
                  }
                }
              )),
              (Ke) => C(Ke),
              () => C()
            );
          }
          var Lt = ye(Je, 2);
          Ie(Lt, () => e.internalCounter ?? le), De((un) => Ro($e, 1, un), [
            () => zu(Pe({
              "mdc-text-field__resizer": !("input$resizable" in B) || e.input$resizable
            }))
          ]), L(He, $e);
        }, Dt = (He) => {
          var $e = ag(), Je = Q($e);
          {
            var Lt = (xt) => {
              var Ye = ee(), Tt = Q(Ye);
              {
                var Bt = (bt) => {
                  Ym(bt, {
                    children: (Ot, nn) => {
                      var pt = qt();
                      De(() => ht(pt, e.prefix)), L(Ot, pt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Wt = (bt) => {
                  var Ot = ee(), nn = Q(Ot);
                  Ie(nn, () => e.prefix ?? le), L(bt, Ot);
                };
                ae(Tt, (bt) => {
                  typeof e.prefix == "string" ? bt(Bt) : bt(Wt, !1);
                });
              }
              L(xt, Ye);
            };
            ae(Je, (xt) => {
              e.prefix != null && xt(Lt);
            });
          }
          var un = ye(Je, 2);
          {
            let xt = /* @__PURE__ */ me(() => ut(B, "input$"));
            xe(
              $m(un, et(
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
                    return S();
                  },
                  get initialInvalid() {
                    return o(U);
                  },
                  get "aria-controls"() {
                    return o(R);
                  },
                  get "aria-describedby"() {
                    return o(R);
                  }
                },
                () => m() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(xt),
                {
                  onblur: (Ye) => {
                    var Tt;
                    Z(w, !1), Z(U, !0), ze(V(), "blur", Ye), (Tt = e.input$onblur) == null || Tt.call(e, Ye);
                  },
                  onfocus: (Ye) => {
                    var Tt;
                    Z(w, !0), ze(V(), "focus", Ye), (Tt = e.input$onfocus) == null || Tt.call(e, Ye);
                  },
                  get value() {
                    return g();
                  },
                  set value(Ye) {
                    g(Ye);
                  },
                  get files() {
                    return _();
                  },
                  set files(Ye) {
                    _(Ye);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(Ye) {
                    b(Ye);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Ye) {
                    E(Ye);
                  }
                }
              )),
              (Ye) => C(Ye),
              () => C()
            );
          }
          var Ke = ye(un, 2);
          {
            var gt = (xt) => {
              var Ye = ee(), Tt = Q(Ye);
              {
                var Bt = (bt) => {
                  Qm(bt, {
                    children: (Ot, nn) => {
                      var pt = qt();
                      De(() => ht(pt, e.suffix)), L(Ot, pt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Wt = (bt) => {
                  var Ot = ee(), nn = Q(Ot);
                  Ie(nn, () => e.suffix ?? le), L(bt, Ot);
                };
                ae(Tt, (bt) => {
                  typeof e.suffix == "string" ? bt(Bt) : bt(Wt, !1);
                });
              }
              L(xt, Ye);
            };
            ae(Ke, (xt) => {
              e.suffix != null && xt(gt);
            });
          }
          L(He, $e);
        };
        ae(dt, (He) => {
          h() && typeof g() == "string" ? He(vt) : He(Dt, !1);
        });
      }
      var Hn = ye(dt, 2);
      Na(Hn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (He, $e) => {
          var Je = ee(), Lt = Q(Je);
          Ie(Lt, () => e.trailingIcon ?? le), L(He, Je);
        },
        $$slots: { default: !0 }
      });
      var di = ye(Hn, 2);
      {
        var Nn = (He) => {
          {
            let $e = /* @__PURE__ */ me(() => ut(B, "ripple$"));
            xe(Tc(He, et(() => o($e))), (Je) => K(Je), () => K());
          }
        };
        ae(di, (He) => {
          !h() && f() !== "outlined" && l() && He(Nn);
        });
      }
      xe(J, (He) => q = He, () => q), Ue(J, (He, $e) => Zt == null ? void 0 : Zt(He, $e), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Oe,
        removeClass: Ee,
        addStyle: Fe,
        eventTarget: o(_e),
        activeTarget: o(_e),
        initPromise: Ce
      })), Ue(J, (He, $e) => X == null ? void 0 : X(He, $e), a), L(H, J);
    }, ln = (H) => {
      var J = og();
      Ge(J, (dt, vt, Dt) => ({ class: dt, style: vt, ...Dt }), [
        () => Pe({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": m() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": E(),
          ...G,
          [s()]: !0
        }),
        () => Object.entries(z).map(([dt, vt]) => `${dt}: ${vt};`).concat([u()]).join(" "),
        () => ti(B, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Re = be(J);
      {
        var ot = (dt) => {
          var vt = ee(), Dt = Q(vt);
          Ie(Dt, () => e.label ?? le), L(dt, vt);
        };
        ae(Re, (dt) => {
          typeof e.label != "string" && dt(ot);
        });
      }
      var it = ye(Re, 2);
      Na(it, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (dt, vt) => {
          var Dt = ee(), Hn = Q(Dt);
          Ie(Hn, () => e.leadingIcon ?? le), L(dt, Dt);
        },
        $$slots: { default: !0 }
      });
      var Ct = ye(it, 2);
      Ie(Ct, () => e.children ?? le);
      var kt = ye(Ct, 2);
      Na(kt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (dt, vt) => {
          var Dt = ee(), Hn = Q(Dt);
          Ie(Hn, () => e.trailingIcon ?? le), L(dt, Dt);
        },
        $$slots: { default: !0 }
      });
      var lr = ye(kt, 2);
      Ie(lr, () => e.line ?? le), xe(J, (dt) => q = dt, () => q), Ue(J, (dt, vt) => Zt == null ? void 0 : Zt(dt, vt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Oe,
        removeClass: Ee,
        addStyle: Fe
      })), Ue(J, (dt, vt) => X == null ? void 0 : X(dt, vt), a), L(H, J);
    };
    ae(St, (H) => {
      ve ? H(At) : H(ln, !1);
    });
  }
  var he = ye(St, 2);
  {
    var N = (H) => {
      {
        let J = /* @__PURE__ */ me(() => ut(B, "helperLine$"));
        Zm(H, et(() => o(J), {
          children: (Re, ot) => {
            var it = ee(), Ct = Q(it);
            Ie(Ct, () => e.helper ?? le), L(Re, it);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(he, (H) => {
      e.helper && H(N);
    });
  }
  return L(t, ke), Le(ue);
}
var ug = /* @__PURE__ */ ge("<i><!></i>");
function cg(t, e) {
  we(e, !0);
  const n = () => Dn(v, "$leadingStore", r), [r, i] = Wn();
  let a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), u = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = p(e, "disabled", 3, !1), c = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ pe(void 0), f = new oi(), m = Ae({});
  const v = se("SMUI:textfield:icon:leading"), g = n();
  let _ = /* @__PURE__ */ pe(void 0);
  const E = /* @__PURE__ */ me(() => ({ role: e.role, tabindex: u() })), S = se("SMUI:textfield:leading-icon:mount"), A = se("SMUI:textfield:leading-icon:unmount"), b = se("SMUI:textfield:trailing-icon:mount"), I = se("SMUI:textfield:trailing-icon:unmount");
  st(() => (Z(
    h,
    new jm({
      getAttr: y,
      setAttr: T,
      removeAttr: x,
      setContent: (F) => {
        Z(_, F, !0);
      },
      registerInteractionHandler: (F, O) => f.on(C(), F, O),
      deregisterInteractionHandler: (F, O) => f.off(C(), F, O),
      notifyIconAction: () => ze(C(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? S && S(o(h)) : b && b(o(h)), o(h).init(), () => {
    var F;
    o(h) && (g ? A && A(o(h)) : I && I(o(h))), (F = o(h)) == null || F.destroy(), f.clear();
  }));
  function y(F) {
    return F in m ? m[F] ?? null : C().getAttribute(F);
  }
  function T(F, O) {
    m[F] !== O && (m[F] = O);
  }
  function x(F) {
    (!(F in m) || m[F] != null) && (m[F] = void 0);
  }
  function C() {
    return d;
  }
  var P = { getElement: C }, K = ug();
  Ge(
    K,
    (F) => ({
      class: F,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(E),
      ...m,
      ...c
    }),
    [
      () => Pe({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [s()]: !0
      })
    ]
  );
  var k = be(K);
  {
    var B = (F) => {
      var O = ee(), G = Q(O);
      Ie(G, () => e.children ?? le), L(F, O);
    }, ve = (F) => {
      var O = qt();
      De(() => ht(O, o(_))), L(F, O);
    };
    ae(k, (F) => {
      o(_) == null ? F(B) : F(ve, !1);
    });
  }
  xe(K, (F) => d = F, () => d), Ue(K, (F, O) => X == null ? void 0 : X(F, O), a), L(t, K);
  var q = Le(P);
  return i(), q;
}
function dg(t, e) {
  we(e, !0);
  let n = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), s = p(e, "variant", 3, "standard"), u = p(e, "styles", 3, ""), l = p(e, "required", 3, !1), c = p(e, "oninput", 3, () => {
  });
  var d = ee(), h = Q(d);
  {
    var f = (v) => {
      {
        const g = (E) => {
          cg(E, {
            class: "material-icons",
            children: (S, A) => {
              var b = qt();
              De(() => ht(b, i())), L(S, b);
            },
            $$slots: { default: !0 }
          });
        };
        let _ = /* @__PURE__ */ me(() => `width: 100%; ${u()}`);
        fo(v, {
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
            return o(_);
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
          set value(E) {
            a(E);
          },
          leadingIcon: g,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, m = (v) => {
      fo(v, {
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
        set value(g) {
          a(g);
        }
      });
    };
    ae(h, (v) => {
      i() ? v(f) : v(m, !1);
    });
  }
  L(t, d), Le();
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
var fg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, hg = {
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
}, ra = {
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
var Qr;
(function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 4] = "TOP_RIGHT", t[t.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", t[t.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", t[t.TOP_START = 8] = "TOP_START", t[t.TOP_END = 12] = "TOP_END", t[t.BOTTOM_START = 9] = "BOTTOM_START", t[t.BOTTOM_END = 13] = "BOTTOM_END";
})(Qr || (Qr = {}));
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
var dr, Jn, je = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
dr = {}, dr["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", dr["" + je.LIST_ITEM_CLASS] = "mdc-list-item", dr["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", dr["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", dr["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", dr["" + je.ROOT] = "mdc-list";
var pi = (Jn = {}, Jn["" + je.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Jn["" + je.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Jn["" + je.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Jn["" + je.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Jn["" + je.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Jn["" + je.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Jn["" + je.ROOT] = "mdc-deprecated-list", Jn), fr = {
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
    .` + pi[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + pi[je.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + je.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` a,
    .` + je.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + je.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + pi[je.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + pi[je.LIST_ITEM_CLASS] + ` a,
    .` + pi[je.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + pi[je.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var vg = ["input", "button", "textarea", "select"], _n = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    vg.indexOf(n) === -1 && t.preventDefault();
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
function mg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function gg(t, e) {
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
function ho(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, s = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Oc(e);
  }, _t.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = pg(i, a, u, e) : l = bg(i, u, e), l !== -1 && !s && r(l), l;
}
function pg(t, e, n, r) {
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
function bg(t, e, n) {
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
function Lc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Oc(t) {
  t.typeaheadBuffer = "";
}
function Nl(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, s = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = Et(n) === "ArrowLeft", c = Et(n) === "ArrowUp", d = Et(n) === "ArrowRight", h = Et(n) === "ArrowDown", f = Et(n) === "Home", m = Et(n) === "End", v = Et(n) === "Enter", g = Et(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || h || f || m || v)
    return -1;
  var _ = !g && n.key.length === 1;
  if (_) {
    _n(n);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return ho(E, e);
  }
  if (!g)
    return -1;
  r && _n(n);
  var S = r && Lc(e);
  if (S) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return ho(E, e);
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
function _g(t) {
  return t instanceof Array;
}
var yg = ["Alt", "Control", "Meta", "Shift"];
function Pl(t) {
  var e = new Set(t ? yg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Ig = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = _t.UNSET_INDEX, r.focusedItemIndex = _t.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = mg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return fr;
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
        var r = this.adapter.listItemAtIndexHasClass(n, je.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = _t.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
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
      return this.hasTypeahead && Lc(this.typeaheadState);
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
      var a = this, s, u = Et(n) === "ArrowLeft", l = Et(n) === "ArrowUp", c = Et(n) === "ArrowRight", d = Et(n) === "ArrowDown", h = Et(n) === "Home", f = Et(n) === "End", m = Et(n) === "Enter", v = Et(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && c, _ = this.isVertical && l || !this.isVertical && u, E = n.key === "A" || n.key === "a", S = Pl(n);
      if (this.adapter.isRootFocused()) {
        if ((_ || f) && S([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && S([]))
          n.preventDefault(), this.focusFirstElement();
        else if (_ && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var A = this.focusLastElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (g && S(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var A = this.focusFirstElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        }
        if (this.hasTypeahead) {
          var b = {
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
          Nl(b, this.typeaheadState);
        }
        return;
      }
      var I = this.adapter.getFocusedElementIndex();
      if (!(I === -1 && (I = i, I < 0))) {
        if (g && S([]))
          _n(n), this.focusNextElement(I);
        else if (_ && S([]))
          _n(n), this.focusPrevElement(I);
        else if (g && S(["Shift"]) && this.isCheckboxList) {
          _n(n);
          var A = this.focusNextElement(I);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (_ && S(["Shift"]) && this.isCheckboxList) {
          _n(n);
          var A = this.focusPrevElement(I);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (h && S([]))
          _n(n), this.focusFirstElement();
        else if (f && S([]))
          _n(n), this.focusLastElement();
        else if (h && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (_n(n), this.isIndexDisabled(I))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, I, I);
        } else if (f && S(["Control", "Shift"]) && this.isCheckboxList) {
          if (_n(n), this.isIndexDisabled(I))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(I, this.adapter.getListItemCount() - 1, I);
        } else if (E && S(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((m || v) && S([])) {
          if (r) {
            var y = n.target;
            if (y && y.tagName === "A" && m || (_n(n), this.isIndexDisabled(I)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(I, !1), this.adapter.notifyAction(I));
          }
        } else if ((m || v) && S(["Shift"]) && this.isCheckboxList) {
          var y = n.target;
          if (y && y.tagName === "A" && m || (_n(n), this.isIndexDisabled(I)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : I, I, I), this.adapter.notifyAction(I));
        }
        if (this.hasTypeahead) {
          var b = {
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
          Nl(b, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, s = Pl(i);
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, fr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, fr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = je.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = je.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== _t.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== _t.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === _t.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, fr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? fr.ARIA_CURRENT : fr.ARIA_SELECTED;
      if (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== _t.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? fr.ARIA_SELECTED : fr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === _t.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, s, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = Bi([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var m = a.has(f);
          s !== m && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, d, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Ar([], Bi(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === _t.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== _t.UNSET_INDEX ? this.selectedIndex : _g(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      var u = this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex.slice();
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
      return ho(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return gg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Oc(this.typeaheadState);
    }, e;
  }(Ft)
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
var Rc = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = Qr.TOP_START, r.originCorner = Qr.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return hg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ra;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return Qr;
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
        }, ra.TRANSITION_OPEN_DURATION);
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
          }, ra.TRANSITION_CLOSE_DURATION);
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, yt.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, yt.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (n = {}, n[s] = u, n[a] = l, n);
      d.width / h.width > ra.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, yt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, yt.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var h = d - s.height > 0;
      !h && c > d + this.openBottomBias && (n = this.setBit(n, yt.BOTTOM));
      var f = this.adapter.isRtl(), m = this.hasBit(this.anchorCorner, yt.FLIP_RTL), v = this.hasBit(this.anchorCorner, yt.RIGHT) || this.hasBit(n, yt.RIGHT), g = !1;
      f && m ? g = !v : g = v;
      var _, E;
      g ? (_ = i.left + a.width + this.anchorMargin.right, E = i.right - this.anchorMargin.right) : (_ = i.left + this.anchorMargin.left, E = i.right + a.width - this.anchorMargin.left);
      var S = _ - s.width > 0, A = E - s.width > 0, b = this.hasBit(n, yt.FLIP_RTL) && this.hasBit(n, yt.RIGHT);
      return A && b && f || !S && b ? n = this.unsetBit(n, yt.RIGHT) : (S && g && f || S && !g && v || !A && _ >= E) && (n = this.setBit(n, yt.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, yt.BOTTOM), s = this.hasBit(this.anchorCorner, yt.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, s && (i -= this.measurements.anchorSize.height)), i;
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
      var r, i, a = this.measurements, s = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Mt(d), f = h.next(); !f.done; f = h.next()) {
          var m = f.value, v = n[m] || 0;
          if (this.isHorizontallyCenteredOnViewport && (m === "left" || m === "right")) {
            n[m] = (c.width - l.width) / 2;
            continue;
          }
          v += u[m], this.isFixedPosition || (m === "top" ? v += s.y : m === "bottom" ? v -= s.y : m === "left" ? v += s.x : v -= s.x), n[m] = v;
        }
      } catch (g) {
        r = { error: g };
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
      }, ra.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(n, r) {
      return !!(n & r);
    }, e.prototype.setBit = function(n, r) {
      return n | r;
    }, e.prototype.unsetBit = function(n, r) {
      return n ^ r;
    }, e.prototype.isFinite = function(n) {
      return typeof n == "number" && isFinite(n);
    }, e;
  }(Ft)
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
var Ul = {
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
function Eg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function Sg(t, e) {
  if (Eg(t) && e in Ul) {
    var n = t.document.createElement("div"), r = Ul[e], i = r.standard, a = r.prefixed, s = i in n.style;
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
}, bi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, Ag = {
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
var Cg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Si.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ti;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return bi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ag;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, bi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(n);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, Rc.numbers.TRANSITION_CLOSE_DURATION);
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, bi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Ti.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Ti.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, bi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, bi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, je.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, bi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Ft)
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
var mt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, Us = {
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
}, kr = {
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
var xg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = kr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return kr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Us;
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
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(n >= this.adapter.getMenuItemCount()) && (n === kr.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(n).trim()), this.adapter.setSelectedIndex(n), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== n && this.handleChange(), this.lastSelectedIndex = n);
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
      return n !== kr.UNSET_INDEX ? r[n] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(n) {
      this.disabled = n, this.disabled ? (this.adapter.addClass(mt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(mt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(mt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(n) {
      this.helperText && this.helperText.setContent(n);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var n = this.getValue().length > 0, r = this.adapter.hasClass(mt.FOCUSED), i = n || r, a = this.adapter.hasClass(mt.REQUIRED);
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
      this.adapter.removeClass(mt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var n = this.adapter.hasClass(mt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(n) {
      this.setSelectedIndex(
        n,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(mt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(mt.FOCUSED))) {
        var r = Et(n) === Ne.ENTER, i = Et(n) === Ne.SPACEBAR, a = Et(n) === Ne.ARROW_UP, s = Et(n) === Ne.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(mt.FOCUSED);
        if (n) {
          var i = kr.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(mt.INVALID), this.adapter.removeMenuClass(mt.MENU_INVALID)) : (this.adapter.addClass(mt.INVALID), this.adapter.addMenuClass(mt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(mt.REQUIRED) && !this.adapter.hasClass(mt.DISABLED) ? this.getSelectedIndex() !== kr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(mt.REQUIRED) : this.adapter.removeClass(mt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(Qr.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(mt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(mt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(mt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(mt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(Us.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(Us.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, kr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Ft)
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
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, $n = {
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
var Tg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      return t.call(this, de(de({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return $n;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Br;
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
      return this.adapter.getAttr(Br.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.setValidation = function(n) {
      n ? this.adapter.addClass($n.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass($n.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(n) {
      n ? this.adapter.addClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(n) {
      var r = this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass($n.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !n || i;
        if (a) {
          this.showToScreenReader(), n ? this.adapter.removeAttr(Br.ROLE) : this.adapter.setAttr(Br.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(Br.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(Br.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(Br.ARIA_HIDDEN, "true");
    }, e;
  }(Ft)
), wg = /* @__PURE__ */ ge("<div><!></div>");
function Lg(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), s = p(e, "anchor", 3, !0), u = p(e, "fixed", 3, !1), l = p(e, "open", 31, () => Ae(a())), c = p(e, "managed", 3, !1), d = p(e, "fullWidth", 3, !1), h = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), m = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), v = p(e, "maxHeight", 3, 0), g = p(e, "horizontallyCenteredOnViewport", 3, !1), _ = p(e, "openBottomBias", 3, 0), E = p(e, "neverRestoreFocus", 3, !1), S = /* @__PURE__ */ We(e, [
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
  ]), A, b = /* @__PURE__ */ pe(void 0), I = Ae({}), y = Ae({}), T = /* @__PURE__ */ pe(void 0);
  te("SMUI:list:role", "menu"), te("SMUI:list:item:role", "menuitem"), Te(() => {
    var j, ie;
    A && s() && !((j = A.parentElement) != null && j.classList.contains("mdc-menu-surface--anchor")) && ((ie = A.parentElement) == null || ie.classList.add("mdc-menu-surface--anchor"), f(A.parentElement ?? void 0));
  }), Te(() => {
    o(b) && o(b).isOpen() !== l() && (l() ? o(b).open() : o(b).close());
  }), Te(() => {
    o(b) && o(b).setQuickOpen(h());
  }), Te(() => {
    o(b) && o(b).setFixedPosition(u());
  }), Te(() => {
    o(b) && o(b).setMaxHeight(v());
  }), Te(() => {
    o(b) && o(b).setIsHorizontallyCenteredOnViewport(g());
  });
  const x = Qr;
  Te(() => {
    o(b) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(b).setAnchorCorner(x[e.anchorCorner]) : o(b).setAnchorCorner(e.anchorCorner));
  }), Te(() => {
    o(b) && o(b).setAnchorMargin(m());
  }), Te(() => {
    o(b) && o(b).setOpenBottomBias(_());
  });
  const C = se("SMUI:menu-surface:mount"), P = se("SMUI:menu-surface:unmount");
  st(() => {
    Z(
      b,
      new Rc({
        addClass: k,
        removeClass: B,
        hasClass: K,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || ze(U(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || ze(U(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && ze(U(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || ze(U(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ie) => U().contains(ie),
        isRtl: () => getComputedStyle(U()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ie) => {
          y["transform-origin"] = ie;
        },
        isFocused: () => document.activeElement === U(),
        saveFocus: () => {
          Z(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !E() && (!A || U().contains(document.activeElement)) && o(T) && document.contains(o(T)) && "focus" in o(T) && o(T).focus();
        },
        getInnerDimensions: () => ({
          width: U().offsetWidth,
          height: U().offsetHeight
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
    const j = {
      get open() {
        return l();
      },
      set open(ie) {
        l(ie);
      },
      closeProgrammatic: ve
    };
    return C && C(j), o(b).init(), () => {
      var Y, re;
      P && P(j);
      const ie = o(b).isHoistedElement;
      (Y = o(b)) == null || Y.destroy(), ie && ((re = U().parentNode) == null || re.removeChild(U()));
    };
  }), mn(() => {
    var j;
    s() && U() && ((j = U().parentElement) == null || j.classList.remove("mdc-menu-surface--anchor"));
  });
  function K(j) {
    return j in I ? I[j] : U().classList.contains(j);
  }
  function k(j) {
    I[j] || (I[j] = !0);
  }
  function B(j) {
    (!(j in I) || I[j]) && (I[j] = !1);
  }
  function ve(j) {
    var ie;
    (ie = o(b)) == null || ie.close(j), l(!1);
  }
  function q(j) {
    o(b) && l() && !c() && o(b).handleBodyClick(j);
  }
  function F() {
    return l();
  }
  function O(j) {
    l(j);
  }
  function G(j, ie) {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).setAbsolutePosition(j, ie);
  }
  function z(j) {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).setIsHoisted(j);
  }
  function R() {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).isFixed();
  }
  function w() {
    if (o(b) == null)
      throw new Error("Instance is not defined.");
    return o(b).flipCornerHorizontally();
  }
  function U() {
    return A;
  }
  var fe = {
    isOpen: F,
    setOpen: O,
    setAbsolutePosition: G,
    setIsHoisted: z,
    isFixed: R,
    flipCornerHorizontally: w,
    getElement: U
  }, Se = wg();
  ir("click", To.body, q, !0);
  var oe = (j) => {
    var ie;
    o(b) && !c() && o(b).handleKeydown(j), (ie = e.onkeydown) == null || ie.call(e, j);
  };
  Ge(
    Se,
    (j, ie) => ({
      class: j,
      style: ie,
      role: "dialog",
      ...S,
      onkeydown: oe
    }),
    [
      () => Pe({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ...I,
        [r()]: !0
      }),
      () => Object.entries(y).map(([j, ie]) => `${j}: ${ie};`).concat([i()]).join(" ")
    ]
  );
  var Ce = be(Se);
  return Ie(Ce, () => e.children ?? le), xe(Se, (j) => A = j, () => A), Ue(Se, (j, ie) => X == null ? void 0 : X(j, ie), n), L(t, Se), Le(fe);
}
function Fs(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function Og(t, e) {
  we(e, !0);
  const { closest: n } = Aa;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), s = p(e, "anchorElement", 15), u = p(e, "managed", 3, !1), l = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ pe(void 0), h = /* @__PURE__ */ pe(void 0), f = /* @__PURE__ */ pe(void 0);
  te("SMUI:menu-surface:mount", (x) => {
    o(h) || Z(h, x, !0);
  });
  const m = se("SMUI:list:mount");
  te("SMUI:list:mount", (x) => {
    o(f) || Z(f, x, !0), m && m(x);
  });
  const v = se("SMUI:menu:mount"), g = se("SMUI:menu:unmount");
  st(() => (Z(
    d,
    new Cg({
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
        u() || ((C = o(h)) == null || C.closeProgrammatic(x), ze(y(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((C) => C.element).indexOf(x);
      },
      notifySelected: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        ze(y(), "SMUIMenuSelected", {
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
        return !!n(o(f).getOrderedList()[x].element, `.${Ti.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (x) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const C = o(f).getOrderedList(), P = n(C[x].element, `.${Ti.MENU_SELECTION_GROUP}`), K = P == null ? void 0 : P.querySelector(`.${Ti.MENU_SELECTED_LIST_ITEM}`);
        return K ? C.map((k) => k.element).indexOf(K) : -1;
      }
    }),
    !0
  ), v && v(o(d)), o(d).init(), () => {
    var x;
    g && o(d) && g(o(d)), (x = o(d)) == null || x.destroy();
  }));
  function _(x) {
    o(d) && o(d).handleKeydown(x);
  }
  function E() {
    return a();
  }
  function S(x) {
    a(x);
  }
  function A(x) {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    o(d).setDefaultFocusState(x);
  }
  function b() {
    if (o(d) == null)
      throw new Error("Instance is undefined.");
    return o(d).getSelectedIndex();
  }
  function I() {
    return c;
  }
  function y() {
    return c.getElement();
  }
  var T = {
    isOpen: E,
    setOpen: S,
    setDefaultFocusState: A,
    getSelectedIndex: b,
    getMenuSurface: I,
    getElement: y
  };
  {
    let x = /* @__PURE__ */ me(() => Pe({ "mdc-menu": !0, [i()]: !0 }));
    xe(
      Lg(t, et(
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
            var P;
            _(C), (P = e.onkeydown) == null || P.call(e, C);
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
            var K = ee(), k = Q(K);
            Ie(k, () => e.children ?? le), L(C, K);
          },
          $$slots: { default: !0 }
        }
      )),
      (C) => c = C,
      () => c
    );
  }
  return Le(T);
}
function Rg(t, e) {
  we(e, !0);
  const { closest: n, matches: r } = Aa;
  let i = se("SMUI:list:nav"), a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), u = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), c = p(e, "textualList", 3, !1), d = p(e, "avatarList", 3, !1), h = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), m = p(e, "thumbnailList", 3, !1), v = p(e, "videoList", 3, !1), g = p(e, "twoLine", 3, !1), _ = p(e, "threeLine", 3, !1), E = p(e, "vertical", 3, !0), S = p(e, "wrapFocus", 19, () => se("SMUI:list:wrapFocus") ?? !1), A = p(e, "singleSelection", 3, !1), b = p(e, "disabledItemsFocusable", 3, !1), I = p(e, "selectedIndex", 31, () => -1), y = p(e, "radioList", 3, !1), T = p(e, "checkList", 3, !1), x = p(e, "hasTypeahead", 3, !1), C = p(e, "component", 3, li), P = p(e, "tag", 3, i ? "nav" : "ul"), K = /* @__PURE__ */ We(e, [
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
  ]), k, B = /* @__PURE__ */ pe(void 0), ve = [], q = se("SMUI:list:role");
  const F = /* @__PURE__ */ new WeakMap();
  let O = se("SMUI:dialog:selection"), G = se("SMUI:addLayoutListener"), z;
  te("SMUI:list:nonInteractive", u()), te("SMUI:separator:context", "list"), q || (A() ? (q = "listbox", te("SMUI:list:item:role", "option")) : y() ? (q = "radiogroup", te("SMUI:list:item:role", "radio")) : T() ? (q = "group", te("SMUI:list:item:role", "checkbox")) : (q = "list", te("SMUI:list:item:role", void 0))), Te(() => {
    o(B) && o(B).setVerticalOrientation(E());
  }), Te(() => {
    o(B) && o(B).setWrapFocus(S());
  }), Te(() => {
    o(B) && o(B).setHasTypeahead(x());
  }), Te(() => {
    o(B) && o(B).setSingleSelection(A());
  }), Te(() => {
    o(B) && o(B).setDisabledItemsFocusable(b());
  }), Te(() => {
    o(B) && A() && D() !== I() && o(B).setSelectedIndex(I());
  }), G && (z = G(Fe)), te("SMUI:list:item:mount", (he) => {
    ve.push(he), F.set(he.element, he), A() && he.selected && I(Ee(he.element));
  }), te("SMUI:list:item:unmount", (he) => {
    const N = (he && ve.findIndex((H) => H === he)) ?? -1;
    N !== -1 && (ve.splice(N, 1), F.delete(he.element));
  });
  const R = se("SMUI:list:mount"), w = se("SMUI:list:unmount");
  st(() => {
    Z(
      B,
      new Ig({
        addClassForElementIndex: Y,
        focusItemAtIndex: ue,
        getAttributeForElementIndex: (N, H) => {
          var J;
          return ((J = j()[N]) == null ? void 0 : J.getAttr(H)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? j().map((N) => N.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => ve.length,
        getPrimaryTextAtIndex: Oe,
        hasCheckboxAtIndex: (N) => {
          var H;
          return ((H = j()[N]) == null ? void 0 : H.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (N) => {
          var H;
          return ((H = j()[N]) == null ? void 0 : H.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (N) => {
          const H = j()[N];
          return ((H == null ? void 0 : H.hasCheckbox) && H.checked) ?? !1;
        },
        isFocusInsideList: () => k != null && ke() !== document.activeElement && ke().contains(document.activeElement),
        isRootFocused: () => k != null && document.activeElement === ke(),
        listItemAtIndexHasClass: ie,
        notifyAction: (N) => {
          I(N), k != null && ze(ke(), "SMUIListAction", { index: N });
        },
        notifySelectionChange: (N) => {
          k != null && ze(ke(), "SMUIListSelectionChange", { changedIndices: N });
        },
        removeClassForElementIndex: re,
        setAttributeForElementIndex: _e,
        setCheckedCheckboxOrRadioAtIndex: (N, H) => {
          j()[N].checked = H;
        },
        setTabIndexForListItemChildren: (N, H) => {
          const J = j()[N];
          Array.prototype.forEach.call(J.element.querySelectorAll("button:not(:disabled), a"), (ot) => {
            ot.setAttribute("tabindex", H);
          });
        }
      }),
      !0
    );
    const he = {
      get element() {
        return ke();
      },
      get items() {
        return ve;
      },
      get typeaheadInProgress() {
        if (!o(B))
          throw new Error("Instance is undefined.");
        return o(B).isTypeaheadInProgress();
      },
      typeaheadMatchItem(N, H) {
        if (!o(B))
          throw new Error("Instance is undefined.");
        return o(B).typeaheadMatchItem(
          N,
          H,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: j,
      focusItemAtIndex: ue,
      addClassForElementIndex: Y,
      removeClassForElementIndex: re,
      setAttributeForElementIndex: _e,
      removeAttributeForElementIndex: W,
      getAttributeFromElementIndex: ne,
      getPrimaryTextAtIndex: Oe
    };
    return R && R(he), o(B).init(), o(B).layout(), () => {
      var N;
      w && w(he), (N = o(B)) == null || N.destroy();
    };
  }), mn(() => {
    z && z();
  });
  function U(he) {
    o(B) && he.target && o(B).handleKeydown(he, he.target.classList.contains("mdc-deprecated-list-item"), Ee(he.target));
  }
  function fe(he) {
    o(B) && he.target && o(B).handleFocusIn(Ee(he.target));
  }
  function Se(he) {
    o(B) && he.target && o(B).handleFocusOut(Ee(he.target));
  }
  function oe(he) {
    o(B) && he.target && o(B).handleClick(Ee(he.target), !r(he.target, 'input[type="checkbox"], input[type="radio"]'), he);
  }
  function Ce(he) {
    if (y() || T()) {
      const N = Ee(he.target);
      if (N !== -1) {
        const H = j()[N];
        H && (y() && !H.checked || T()) && (r(he.detail.target, 'input[type="checkbox"], input[type="radio"]') || (H.checked = !H.checked), H.activateRipple(), window.requestAnimationFrame(() => {
          H.deactivateRipple();
        }));
      }
    }
  }
  function j() {
    return k == null ? [] : [...ke().children].map((he) => F.get(he)).filter((he) => he && he._smui_list_item_accessor);
  }
  function ie(he, N) {
    const H = j()[he];
    return (H && H.hasClass(N)) ?? !1;
  }
  function Y(he, N) {
    const H = j()[he];
    H && H.addClass(N);
  }
  function re(he, N) {
    const H = j()[he];
    H && H.removeClass(N);
  }
  function _e(he, N, H) {
    const J = j()[he];
    J && J.addAttr(N, H);
  }
  function W(he, N) {
    const H = j()[he];
    H && H.removeAttr(N);
  }
  function ne(he, N) {
    const H = j()[he];
    return H ? H.getAttr(N) : null;
  }
  function Oe(he) {
    const N = j()[he];
    return (N && N.getPrimaryText()) ?? "";
  }
  function Ee(he) {
    const N = n(he, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return N && r(N, ".mdc-deprecated-list-item") ? j().map((H) => H == null ? void 0 : H.element).indexOf(N) : -1;
  }
  function Fe() {
    if (!o(B))
      throw new Error("Instance is undefined.");
    return o(B).layout();
  }
  function Ze(he, N) {
    if (!o(B))
      throw new Error("Instance is undefined.");
    return o(B).setEnabled(he, N);
  }
  function ct() {
    if (!o(B))
      throw new Error("Instance is undefined.");
    return o(B).isTypeaheadInProgress();
  }
  function D() {
    if (!o(B))
      throw new Error("Instance is undefined.");
    return o(B).getSelectedIndex();
  }
  function V() {
    if (!o(B))
      throw new Error("Instance is undefined.");
    return o(B).getFocusedItemIndex();
  }
  function ue(he) {
    const N = j()[he];
    N && "focus" in N.element && N.element.focus();
  }
  function ke() {
    return k.getElement();
  }
  var St = {
    layout: Fe,
    setEnabled: Ze,
    getTypeaheadInProgress: ct,
    getSelectedIndex: D,
    getFocusedItemIndex: V,
    focusItemAtIndex: ue,
    getElement: ke
  }, At = ee(), ln = Q(At);
  {
    let he = /* @__PURE__ */ me(() => Pe({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || O,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": m(),
      "mdc-deprecated-list--video-list": v(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": _() && !g(),
      [s()]: !0
    }));
    Or(ln, C, (N, H) => {
      xe(
        H(N, et(
          {
            get tag() {
              return P();
            },
            get use() {
              return a();
            },
            get class() {
              return o(he);
            },
            get role() {
              return q;
            }
          },
          () => K,
          {
            onkeydown: (J) => {
              var Re;
              U(J), (Re = e.onkeydown) == null || Re.call(e, J);
            },
            onfocusin: (J) => {
              var Re;
              fe(J), (Re = e.onfocusin) == null || Re.call(e, J);
            },
            onfocusout: (J) => {
              var Re;
              Se(J), (Re = e.onfocusout) == null || Re.call(e, J);
            },
            onclick: (J) => {
              var Re;
              oe(J), (Re = e.onclick) == null || Re.call(e, J);
            },
            onSMUIAction: (J) => {
              var Re;
              Ce(J), (Re = e.onSMUIAction) == null || Re.call(e, J);
            },
            children: (J, Re) => {
              var ot = ee(), it = Q(ot);
              Ie(it, () => e.children ?? le), L(J, ot);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => k = J,
        () => k
      );
    });
  }
  return L(t, At), Le(St);
}
let Mg = 0;
var Dg = /* @__PURE__ */ ge('<span class="mdc-deprecated-list-item__ripple"></span>'), Hg = /* @__PURE__ */ ge("<!><!>", 1);
function Ng(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(Y) {
    return Y === n;
  }
  let i = se("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), u = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => se("SMUI:list:nonInteractive") ?? !1), c = p(e, "ripple", 19, () => !l()), d = p(e, "wrapper", 3, !1), h = p(e, "activated", 15, !1), f = p(e, "role", 19, () => d() ? "presentation" : se("SMUI:list:item:role")), m = p(e, "selected", 15, !1), v = p(e, "disabled", 3, !1), g = p(e, "skipRestoreFocus", 3, !1), _ = p(e, "tabindex", 15, n), E = p(e, "inputId", 19, () => "SMUI-form-field-list-" + Mg++), S = p(e, "component", 3, li), A = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), b = /* @__PURE__ */ We(e, [
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
  te("SMUI:list:nonInteractive", void 0), te("SMUI:list:item:role", void 0);
  let I, y = Ae({}), T = Ae({}), x = Ae({}), C = /* @__PURE__ */ pe(void 0), P = /* @__PURE__ */ pe(void 0);
  const K = /* @__PURE__ */ me(() => r(_()) ? !l() && !v() && (m() || o(C) && o(C).checked) ? 0 : -1 : _());
  te("SMUI:generic:input:props", { id: E() }), te("SMUI:separator:context", void 0), te("SMUI:generic:input:mount", (Y) => {
    ("_smui_checkbox_accessor" in Y || "_smui_radio_accessor" in Y) && Z(C, Y, !0);
  }), te("SMUI:generic:input:unmount", () => {
    Z(C, void 0);
  });
  const k = se("SMUI:list:item:mount"), B = se("SMUI:list:item:unmount");
  st(() => {
    if (!m() && !l()) {
      let re = !0, _e = I.getElement();
      for (; _e.previousElementSibling; )
        if (_e = _e.previousElementSibling, _e.nodeType === 1 && _e.classList.contains("mdc-deprecated-list-item") && !_e.classList.contains("mdc-deprecated-list-item--disabled")) {
          re = !1;
          break;
        }
      re && Z(P, window.requestAnimationFrame(() => w(_e)), !0);
    }
    const Y = {
      _smui_list_item_accessor: !0,
      get element() {
        return oe();
      },
      get selected() {
        return m();
      },
      set selected(re) {
        m(re);
      },
      hasClass: ve,
      addClass: q,
      removeClass: F,
      getAttr: G,
      addAttr: z,
      removeAttr: R,
      getPrimaryText: Se,
      // For inputs within item.
      get checked() {
        return (o(C) && o(C).checked) ?? !1;
      },
      set checked(re) {
        o(C) && (o(C).checked = !!re);
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
      action: fe,
      get tabindex() {
        return o(K);
      },
      set tabindex(re) {
        _(re);
      },
      get disabled() {
        return v();
      },
      get activated() {
        return h();
      },
      set activated(re) {
        h(re);
      }
    };
    return k && k(Y), () => {
      B && B(Y);
    };
  }), mn(() => {
    o(P) && window.cancelAnimationFrame(o(P));
  });
  function ve(Y) {
    return Y in y ? y[Y] : oe().classList.contains(Y);
  }
  function q(Y) {
    y[Y] || (y[Y] = !0);
  }
  function F(Y) {
    (!(Y in y) || y[Y]) && (y[Y] = !1);
  }
  function O(Y, re) {
    T[Y] != re && (re === "" || re == null ? delete T[Y] : T[Y] = re);
  }
  function G(Y) {
    return Y in x ? x[Y] ?? null : oe().getAttribute(Y);
  }
  function z(Y, re) {
    x[Y] !== re && (x[Y] = re);
  }
  function R(Y) {
    (!(Y in x) || x[Y] != null) && (x[Y] = void 0);
  }
  function w(Y) {
    let re = !0;
    for (; Y.nextElementSibling; )
      if (Y = Y.nextElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item")) {
        const _e = Y.attributes.getNamedItem("tabindex");
        if (_e && _e.value === "0") {
          re = !1;
          break;
        }
      }
    re && _(0);
  }
  function U(Y) {
    const re = Y.key === "Enter", _e = Y.key === "Space";
    (re || _e) && fe(Y);
  }
  function fe(Y) {
    v() || ze(oe(), "SMUIAction", Y);
  }
  function Se() {
    const Y = oe(), re = Y.querySelector(".mdc-deprecated-list-item__primary-text");
    if (re)
      return re.textContent ?? "";
    const _e = Y.querySelector(".mdc-deprecated-list-item__text");
    return _e ? _e.textContent ?? "" : Y.textContent ?? "";
  }
  function oe() {
    return I.getElement();
  }
  var Ce = { action: fe, getPrimaryText: Se, getElement: oe }, j = ee(), ie = Q(j);
  {
    let Y = /* @__PURE__ */ me(() => [
      ...l() ? [] : [
        [
          Zt,
          {
            ripple: !o(C),
            unbounded: !1,
            color: (h() || m()) && e.color == null ? "primary" : e.color,
            disabled: v(),
            addClass: q,
            removeClass: F,
            addStyle: O
          }
        ]
      ],
      ...a()
    ]), re = /* @__PURE__ */ me(() => Pe({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": m(),
      "mdc-deprecated-list-item--disabled": v(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && m(),
      "smui-menu-item--non-interactive": l(),
      ...y,
      [s()]: !0
    })), _e = /* @__PURE__ */ me(() => Object.entries(T).map(([ne, Oe]) => `${ne}: ${Oe};`).concat([u()]).join(" ")), W = /* @__PURE__ */ me(() => g() || void 0);
    Or(ie, S, (ne, Oe) => {
      xe(
        Oe(ne, et(
          {
            get tag() {
              return A();
            },
            get use() {
              return o(Y);
            },
            get class() {
              return o(re);
            },
            get style() {
              return o(_e);
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
              return o(W);
            },
            get tabindex() {
              return o(K);
            },
            get href() {
              return e.href;
            }
          },
          () => x,
          () => b,
          {
            onclick: (Ee) => {
              var Fe;
              fe(Ee), (Fe = e.onclick) == null || Fe.call(e, Ee);
            },
            onkeydown: (Ee) => {
              var Fe;
              U(Ee), (Fe = e.onkeydown) == null || Fe.call(e, Ee);
            },
            children: (Ee, Fe) => {
              var Ze = Hg(), ct = Q(Ze);
              {
                var D = (ue) => {
                  var ke = Dg();
                  L(ue, ke);
                };
                ae(ct, (ue) => {
                  c() && ue(D);
                });
              }
              var V = ye(ct);
              Ie(V, () => e.children ?? le), L(Ee, Ze);
            },
            $$slots: { default: !0 }
          }
        )),
        (Ee) => I = Ee,
        () => I
      );
    });
  }
  return L(t, j), Le(Ce);
}
let Pg = 0;
var Ug = /* @__PURE__ */ ge("<div><!></div>");
function Fg(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + Pg++), a = p(e, "persistent", 3, !1), s = p(e, "validationMsg", 3, !1), u = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ pe(void 0), d = Ae({}), h = Ae({}), f = /* @__PURE__ */ pe(void 0);
  const m = se("SMUI:select:helper-text:id"), v = se("SMUI:select:helper-text:mount"), g = se("SMUI:select:helper-text:unmount");
  st(() => (Z(
    c,
    new Tg({
      addClass: E,
      removeClass: S,
      hasClass: _,
      getAttr: A,
      setAttr: b,
      removeAttr: I,
      setContent: (k) => {
        Z(f, k, !0);
      }
    }),
    !0
  ), m && m(i()), v && v(o(c)), o(c).init(), () => {
    var k;
    g && o(c) && g(o(c)), (k = o(c)) == null || k.destroy();
  }));
  function _(k) {
    return k in d ? d[k] : y().classList.contains(k);
  }
  function E(k) {
    d[k] || (d[k] = !0);
  }
  function S(k) {
    (!(k in d) || d[k]) && (d[k] = !1);
  }
  function A(k) {
    return k in h ? h[k] ?? null : y().getAttribute(k);
  }
  function b(k, B) {
    h[k] !== B && (h[k] = B);
  }
  function I(k) {
    (!(k in h) || h[k] != null) && (h[k] = void 0);
  }
  function y() {
    return l;
  }
  var T = { getElement: y }, x = Ug();
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
      () => Pe({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var C = be(x);
  {
    var P = (k) => {
      var B = ee(), ve = Q(B);
      Ie(ve, () => e.children ?? le), L(k, B);
    }, K = (k) => {
      var B = qt();
      De(() => ht(B, o(f))), L(k, B);
    };
    ae(C, (k) => {
      o(f) == null ? k(P) : k(K, !1);
    });
  }
  return xe(x, (k) => l = k, () => l), Ue(x, (k, B) => X == null ? void 0 : X(k, B), n), L(t, x), Le(T);
}
let kg = 0;
var Bg = /* @__PURE__ */ ge("<input/>"), Vg = /* @__PURE__ */ ge('<span class="mdc-select__ripple"></span>'), Gg = /* @__PURE__ */ ge('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function jg(t, e) {
  we(e, !0);
  const n = () => Dn(ke, "$selectedTextStore", r), [r, i] = Wn();
  let a = () => {
  };
  function s(M) {
    return M === a;
  }
  let u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "style", 3, ""), d = p(e, "ripple", 3, !0), h = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), m = p(e, "noLabel", 3, !1), v = p(e, "label", 3, void 0), g = p(e, "value", 15), _ = p(e, "key", 3, (M) => M), E = p(e, "dirty", 15, !1), S = p(e, "invalid", 15, a), A = p(e, "updateInvalid", 19, () => s(S())), b = p(e, "required", 3, !1), I = p(e, "inputId", 19, () => "SMUI-select-" + kg++), y = p(e, "hiddenInput", 3, !1), T = p(e, "withLeadingIcon", 3, a), x = p(e, "anchor$use", 19, () => []), C = p(e, "anchor$class", 3, ""), P = p(e, "selectedTextContainer$use", 19, () => []), K = p(e, "selectedTextContainer$class", 3, ""), k = p(e, "selectedText$use", 19, () => []), B = p(e, "selectedText$class", 3, ""), ve = p(e, "dropdownIcon$use", 19, () => []), q = p(e, "dropdownIcon$class", 3, ""), F = p(e, "menu$class", 3, ""), O = /* @__PURE__ */ We(e, [
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
  const G = s(S());
  s(S()) && S(!1);
  let z, R = /* @__PURE__ */ pe(void 0), w = Ae({}), U = Ae({}), fe, Se = Ae({}), oe = /* @__PURE__ */ pe(-1);
  const Ce = /* @__PURE__ */ me(() => O.menu$id ?? I() + "-menu");
  let j = /* @__PURE__ */ pe(void 0), ie = se("SMUI:addLayoutListener"), Y, re = /* @__PURE__ */ pe(!1), _e = Ae({}), W = /* @__PURE__ */ pe(void 0), ne = /* @__PURE__ */ pe(void 0), Oe = /* @__PURE__ */ pe(!1), Ee, Fe = se("SMUI:select:context"), Ze, ct, D, V, ue;
  te("SMUI:list:role", ""), te("SMUI:list:nav", !1);
  const ke = Ut("");
  te("SMUI:select:selectedText", ke);
  const St = Ut(g());
  Te(() => {
    Rn(St, g());
  }), te("SMUI:select:value", St), Te(() => {
    o(R) && o(R).getValue() !== _()(g()) && o(R).setValue(_()(g()));
  });
  let At = o(oe);
  Te(() => {
    if (At !== o(oe))
      if (At = o(oe), o(R))
        o(R).setSelectedIndex(
          o(oe),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const M = kt();
        g() !== M[o(oe)] && g(M[o(oe)]);
      }
  }), Te(() => {
    o(R) && o(R).getDisabled() !== h() && o(R).setDisabled(h());
  }), Te(() => {
    o(R) && E() && o(R).isValid() !== !S() && (A() ? S(!o(R).isValid()) : o(R).setValid(!S()));
  }), Te(() => {
    o(R) && o(R).getRequired() !== b() && o(R).setRequired(b());
  }), ie && (Y = ie(di)), te("SMUI:select:leading-icon:mount", (M) => {
    Ze = M;
  }), te("SMUI:select:leading-icon:unmount", () => {
    Ze = void 0;
  }), te("SMUI:list:mount", (M) => {
    Ee = M;
  }), te("SMUI:select:helper-text:id", (M) => {
    Z(j, M, !0);
  }), te("SMUI:select:helper-text:mount", (M) => {
    ct = M;
  }), te("SMUI:select:helper-text:unmount", () => {
    Z(j, void 0), ct = void 0;
  }), st(() => (Z(
    R,
    new xg(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (M) => {
          Rn(ke, M);
        },
        isSelectAnchorFocused: () => document.activeElement === fe,
        getSelectAnchorAttr: ot,
        setSelectAnchorAttr: it,
        removeSelectAnchorAttr: Ct,
        addMenuClass: J,
        removeMenuClass: Re,
        openMenu: () => {
          Z(re, !0);
        },
        closeMenu: () => {
          Z(re, !1);
        },
        getAnchorElement: () => fe,
        setMenuAnchorElement: (M) => {
          Z(W, M, !0);
        },
        setMenuAnchorCorner: (M) => {
          Z(ne, M, !0);
        },
        setMenuWrapFocus: (M) => {
          Z(Oe, M, !0);
        },
        getSelectedIndex: () => o(oe),
        setSelectedIndex: (M) => {
          At = M, Z(oe, M, !0), g(kt()[o(oe)]);
        },
        focusMenuItemAtIndex: (M) => {
          Ee.focusItemAtIndex(M);
        },
        getMenuItemCount: () => Ee.items.length,
        getMenuItemValues: () => kt().map(_()),
        getMenuItemTextAtIndex: (M) => Ee.getPrimaryTextAtIndex(M),
        isTypeaheadInProgress: () => Ee.typeaheadInProgress,
        typeaheadMatchItem: (M, ce) => Ee.typeaheadMatchItem(M, ce),
        // getCommonAdapterMethods
        addClass: he,
        removeClass: N,
        hasClass: ln,
        setRippleCenter: (M) => V && V.setRippleCenter(M),
        activateBottomLine: () => V && V.activate(),
        deactivateBottomLine: () => V && V.deactivate(),
        notifyChange: (M) => {
          var ce;
          E(!0), A() && S(!((ce = o(R)) != null && ce.isValid())), ze(Nn(), "SMUISelectChange", { value: g(), index: o(oe) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ue,
        notchOutline: (M) => ue && ue.notch(M),
        closeOutline: () => ue && ue.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!D,
        floatLabel: (M) => D && D.float(M),
        getLabelWidth: () => D ? D.getWidth() : 0,
        setLabelRequired: (M) => D && D.setRequired(M)
      },
      {
        get helperText() {
          return ct;
        },
        get leadingIcon() {
          return Ze;
        }
      }
    ),
    !0
  ), Z(oe, kt().indexOf(g()), !0), o(R).init(), Dt(G), () => {
    var M;
    (M = o(R)) == null || M.destroy();
  })), mn(() => {
    Y && Y();
  });
  function ln(M) {
    return M in w ? w[M] : Nn().classList.contains(M);
  }
  function he(M) {
    w[M] || (w[M] = !0);
  }
  function N(M) {
    (!(M in w) || w[M]) && (w[M] = !1);
  }
  function H(M, ce) {
    U[M] != ce && (ce === "" || ce == null ? delete U[M] : U[M] = ce);
  }
  function J(M) {
    _e[M] || (_e[M] = !0);
  }
  function Re(M) {
    (!(M in _e) || _e[M]) && (_e[M] = !1);
  }
  function ot(M) {
    return M in Se ? Se[M] ?? null : Nn().getAttribute(M);
  }
  function it(M, ce) {
    Se[M] !== ce && (Se[M] = ce);
  }
  function Ct(M) {
    (!(M in Se) || Se[M] != null) && (Se[M] = void 0);
  }
  function kt() {
    return Ee.getOrderedList().map((M) => M.getValue());
  }
  function lr(M) {
    const ce = M.currentTarget.getBoundingClientRect();
    return (dt(M) ? M.touches[0].clientX : M.clientX) - ce.left;
  }
  function dt(M) {
    return "touches" in M;
  }
  function vt() {
    if (o(R) == null)
      throw new Error("Instance is undefined.");
    return o(R).getUseDefaultValidation();
  }
  function Dt(M) {
    var ce;
    (ce = o(R)) == null || ce.setUseDefaultValidation(M);
  }
  function Hn() {
    fe.focus();
  }
  function di() {
    var M;
    (M = o(R)) == null || M.layout();
  }
  function Nn() {
    return z;
  }
  var He = {
    getUseDefaultValidation: vt,
    setUseDefaultValidation: Dt,
    focus: Hn,
    layout: di,
    getElement: Nn
  }, $e = Gg(), Je = Q($e);
  Ge(Je, (M, ce, lt) => ({ class: M, style: ce, ...lt }), [
    () => Pe({
      "mdc-select": !0,
      "mdc-select--required": b(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": m() || v() == null,
      "mdc-select--invalid": S(),
      "mdc-select--activated": o(re),
      "mdc-data-table__pagination-rows-per-page-select": Fe === "data-table:pagination",
      ...w,
      [l()]: !0
    }),
    () => Object.entries(U).map(([M, ce]) => `${M}: ${ce};`).concat([c()]).join(" "),
    () => ti(O, [
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
  var Lt = be(Je);
  {
    var un = (M) => {
      var ce = Bg();
      Ge(
        ce,
        (lt) => ({
          type: "hidden",
          required: b(),
          disabled: h(),
          value: g(),
          ...lt
        }),
        [() => ut(O, "input$")],
        void 0,
        void 0,
        !0
      ), L(M, ce);
    };
    ae(Lt, (M) => {
      y() && M(un);
    });
  }
  var Ke = ye(Lt, 2), gt = (M) => {
    var ce;
    fe.focus(), o(R) && o(R).handleClick(lr(M)), (ce = e.anchor$onclick) == null || ce.call(e, M);
  }, xt = (M) => {
    var ce;
    o(R) && o(R).handleKeydown(M), (ce = e.onkeydown) == null || ce.call(e, M);
  }, Ye = (M) => {
    var ce;
    o(R) && o(R).handleBlur(), ze(Nn(), "blur", M), (ce = e.anchor$onblur) == null || ce.call(e, M);
  }, Tt = (M) => {
    var ce;
    o(R) && o(R).handleFocus(), ze(Nn(), "focus", M), (ce = e.anchor$onfocus) == null || ce.call(e, M);
  };
  Ge(
    Ke,
    (M, ce) => ({
      class: M,
      "aria-required": b() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(Ce),
      "aria-expanded": o(re) ? "true" : "false",
      "aria-describedby": o(j),
      role: "combobox",
      tabindex: "0",
      ...Se,
      ...ce,
      onclick: gt,
      onkeydown: xt,
      onblur: Ye,
      onfocus: Tt
    }),
    [
      () => Pe({ "mdc-select__anchor": !0, [C()]: !0 }),
      () => ut(O, "anchor$")
    ]
  );
  var Bt = be(Ke);
  {
    var Wt = (M) => {
      var ce = Vg();
      L(M, ce);
    };
    ae(Bt, (M) => {
      f() === "filled" && M(Wt);
    });
  }
  var bt = ye(Bt, 2);
  {
    var Ot = (M) => {
      {
        let ce = /* @__PURE__ */ me(() => I() + "-smui-label"), lt = /* @__PURE__ */ me(() => n() !== ""), wt = /* @__PURE__ */ me(() => ut(O, "label$"));
        xe(
          rs(M, et(
            {
              get id() {
                return o(ce);
              },
              get floatAbove() {
                return o(lt);
              },
              get required() {
                return b();
              }
            },
            () => o(wt),
            {
              children: (Zn, Yn) => {
                var Yi = ee(), fi = Q(Yi);
                {
                  var Nr = (Pr) => {
                  }, Es = (Pr) => {
                    var Ta = ee(), Qi = Q(Ta);
                    {
                      var jo = (cr) => {
                        var Ur = qt();
                        De(() => ht(Ur, v())), L(cr, Ur);
                      }, wa = (cr) => {
                        var Ur = ee(), Ss = Q(Ur);
                        Ie(Ss, v), L(cr, Ur);
                      };
                      ae(
                        Qi,
                        (cr) => {
                          typeof v() == "string" ? cr(jo) : cr(wa, !1);
                        },
                        !0
                      );
                    }
                    L(Pr, Ta);
                  };
                  ae(fi, (Pr) => {
                    v() == null ? Pr(Nr) : Pr(Es, !1);
                  });
                }
                L(Zn, Yi);
              },
              $$slots: { default: !0 }
            }
          )),
          (Zn) => D = Zn,
          () => D
        );
      }
    };
    ae(bt, (M) => {
      f() !== "outlined" && !m() && v() != null && M(Ot);
    });
  }
  var nn = ye(bt, 2);
  {
    var pt = (M) => {
      {
        let ce = /* @__PURE__ */ me(() => m() || v() == null), lt = /* @__PURE__ */ me(() => ut(O, "outline$"));
        xe(
          wc(M, et(
            {
              get noLabel() {
                return o(ce);
              }
            },
            () => o(lt),
            {
              children: (wt, Zn) => {
                var Yn = ee(), Yi = Q(Yn);
                {
                  var fi = (Nr) => {
                    {
                      let Es = /* @__PURE__ */ me(() => I() + "-smui-label"), Pr = /* @__PURE__ */ me(() => n() !== ""), Ta = /* @__PURE__ */ me(() => ut(O, "label$"));
                      xe(
                        rs(Nr, et(
                          {
                            get id() {
                              return o(Es);
                            },
                            get floatAbove() {
                              return o(Pr);
                            },
                            get required() {
                              return b();
                            }
                          },
                          () => o(Ta),
                          {
                            children: (Qi, jo) => {
                              var wa = ee(), cr = Q(wa);
                              {
                                var Ur = (Ji) => {
                                }, Ss = (Ji) => {
                                  var qo = ee(), id = Q(qo);
                                  {
                                    var ad = (hi) => {
                                      var $i = qt();
                                      De(() => ht($i, v())), L(hi, $i);
                                    }, sd = (hi) => {
                                      var $i = ee(), od = Q($i);
                                      Ie(od, v), L(hi, $i);
                                    };
                                    ae(
                                      id,
                                      (hi) => {
                                        typeof v() == "string" ? hi(ad) : hi(sd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  L(Ji, qo);
                                };
                                ae(cr, (Ji) => {
                                  v() == null ? Ji(Ur) : Ji(Ss, !1);
                                });
                              }
                              L(Qi, wa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Qi) => D = Qi,
                        () => D
                      );
                    }
                  };
                  ae(Yi, (Nr) => {
                    !m() && v() != null && Nr(fi);
                  });
                }
                L(wt, Yn);
              },
              $$slots: { default: !0 }
            }
          )),
          (wt) => ue = wt,
          () => ue
        );
      }
    };
    ae(nn, (M) => {
      f() === "outlined" && M(pt);
    });
  }
  var Dr = ye(nn, 2);
  Ie(Dr, () => e.leadingIcon ?? le);
  var gn = ye(Dr, 2);
  Ge(gn, (M, ce) => ({ class: M, ...ce }), [
    () => Pe({
      "mdc-select__selected-text-container": !0,
      [K()]: !0
    }),
    () => ut(O, "selectedTextContainer$")
  ]);
  var ur = be(gn);
  Ge(
    ur,
    (M, ce) => ({
      id: I() + "-smui-selected-text",
      class: M,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": I() + "-smui-label",
      ...ce
    }),
    [
      () => Pe({
        "mdc-select__selected-text": !0,
        [B()]: !0
      }),
      () => ut(O, "selectedText$")
    ]
  );
  var Zi = be(ur);
  Ue(ur, (M, ce) => X == null ? void 0 : X(M, ce), k), Ue(gn, (M, ce) => X == null ? void 0 : X(M, ce), P);
  var pn = ye(gn, 2);
  Ge(pn, (M, ce) => ({ class: M, ...ce }), [
    () => Pe({
      "mdc-select__dropdown-icon": !0,
      [q()]: !0
    }),
    () => ut(O, "dropdownIcon$")
  ]), Ue(pn, (M, ce) => X == null ? void 0 : X(M, ce), ve);
  var Kn = ye(pn, 2);
  {
    var Pn = (M) => {
      {
        let ce = /* @__PURE__ */ me(() => ut(O, "ripple$"));
        xe(Tc(M, et(() => o(ce))), (lt) => V = lt, () => V);
      }
    };
    ae(Kn, (M) => {
      f() !== "outlined" && d() && M(Pn);
    });
  }
  xe(Ke, (M) => fe = M, () => fe), Ue(Ke, (M, ce) => X == null ? void 0 : X(M, ce), x);
  var Hr = ye(Ke, 2);
  {
    let M = /* @__PURE__ */ me(() => Pe({
      "mdc-select__menu": !0,
      ..._e,
      [F()]: !0
    })), ce = /* @__PURE__ */ me(() => ut(O, "menu$"));
    Og(Hr, et(
      {
        get class() {
          return o(M);
        },
        get id() {
          return o(Ce);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(W);
        },
        get anchorCorner() {
          return o(ne);
        }
      },
      () => o(ce),
      {
        onSMUIMenuSelected: (lt) => {
          var wt;
          o(R) && o(R).handleMenuItemAction(lt.detail.index), (wt = e.onSMUIMenuSelected) == null || wt.call(e, lt);
        },
        onSMUIMenuSurfaceClosing: (lt) => {
          var wt;
          o(R) && o(R).handleMenuClosing(), (wt = e.onSMUIMenuSurfaceClosing) == null || wt.call(e, lt);
        },
        onSMUIMenuSurfaceClosed: (lt) => {
          var wt;
          o(R) && o(R).handleMenuClosed(), (wt = e.onSMUIMenuSurfaceClosed) == null || wt.call(e, lt);
        },
        onSMUIMenuSurfaceOpened: (lt) => {
          var wt;
          o(R) && o(R).handleMenuOpened(), (wt = e.onSMUIMenuSurfaceOpened) == null || wt.call(e, lt);
        },
        get open() {
          return o(re);
        },
        set open(lt) {
          Z(re, lt, !0);
        },
        children: (lt, wt) => {
          {
            let Zn = /* @__PURE__ */ me(() => ut(O, "list$"));
            Rg(lt, et(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(Oe);
                }
              },
              () => o(Zn),
              {
                get selectedIndex() {
                  return o(oe);
                },
                set selectedIndex(Yn) {
                  Z(oe, Yn, !0);
                },
                children: (Yn, Yi) => {
                  var fi = ee(), Nr = Q(fi);
                  Ie(Nr, () => e.children ?? le), L(Yn, fi);
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
  xe(Je, (M) => z = M, () => z), Ue(Je, (M, ce) => Zt == null ? void 0 : Zt(M, ce), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: he,
    removeClass: N,
    addStyle: H
  })), Ue(Je, (M, ce) => Fs == null ? void 0 : Fs(M, ce), () => ({ addClass: he, removeClass: N })), Ue(Je, (M, ce) => X == null ? void 0 : X(M, ce), u);
  var Is = ye(Je, 2);
  {
    var nd = (M) => {
      {
        let ce = /* @__PURE__ */ me(() => ut(O, "helperText$"));
        Fg(M, et(() => o(ce), {
          children: (lt, wt) => {
            var Zn = ee(), Yn = Q(Zn);
            Ie(Yn, () => e.helperText ?? le), L(lt, Zn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ae(Is, (M) => {
      e.helperText && M(nd);
    });
  }
  De(() => ht(Zi, n())), L(t, $e);
  var rd = Le(He);
  return i(), rd;
}
function qg(t, e) {
  we(e, !0);
  const n = () => Dn(d, "$selectedValue", r), [r, i] = Wn();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let s = p(e, "value", 3, ""), u = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = se("SMUI:select:selectedText"), d = se("SMUI:select:value");
  te("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ me(() => s() != null && s() !== "" && n() === s());
  st(f), mn(f);
  function f() {
    o(h) && l && Rn(c, l.getPrimaryText());
  }
  function m() {
    return l.getElement();
  }
  var v = { getElement: m };
  xe(
    Ng(t, et(
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
        children: (_, E) => {
          var S = ee(), A = Q(S);
          Ie(A, () => e.children ?? le), L(_, S);
        },
        $$slots: { default: !0 }
      }
    )),
    (_) => l = _,
    () => l
  );
  var g = Le(v);
  return i(), g;
}
function zg(t, e) {
  we(e, !0);
  let n = p(e, "data", 19, () => []);
  p(e, "placeholder", 3, "");
  let r = p(e, "label", 3, "");
  p(e, "description", 3, "");
  let i = p(e, "value", 15), a = p(e, "required", 3, !1);
  p(e, "size", 3, "sm");
  let s = p(e, "variant", 3, "standard"), u = p(e, "selectedOptionIndex", 31, () => -1), l = p(e, "disabled", 3, !1);
  function c(d) {
    return () => u(d);
  }
  jg(t, {
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
      var f = ee(), m = Q(f);
      hr(m, 17, n, Ei, (v, g, _) => {
        {
          let E = /* @__PURE__ */ me(() => c(_));
          qg(v, {
            get onclick() {
              return o(E);
            },
            get value() {
              return o(g).value;
            },
            children: (S, A) => {
              var b = qt();
              De(() => ht(b, o(g).label)), L(S, b);
            },
            $$slots: { default: !0 }
          });
        }
      }), L(d, f);
    },
    $$slots: { default: !0 }
  }), Le();
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
function Wg(t) {
  return t ? t.scrollHeight > t.offsetHeight : !1;
}
function Xg(t) {
  return t ? t.scrollTop === 0 : !1;
}
function Kg(t) {
  return t ? Math.ceil(t.scrollHeight - t.scrollTop) === t.clientHeight : !1;
}
function Zg(t) {
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
var Yg = (
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
var nt = {
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
}, ia = {
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
}, ks = {
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
var is;
(function(t) {
  t.POLL_SCROLL_POS = "poll_scroll_position", t.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(is || (is = {}));
var Qg = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ia.CLOSE_ACTION, r.scrimClickAction = ia.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ia.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Yg(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return nt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ia;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ks;
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
      this.adapter.hasClass(nt.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(nt.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(nt.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(nt.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(nt.OPEN), r.adapter.addBodyClass(nt.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, ks.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(nt.CLOSING), this.adapter.removeClass(nt.OPEN), this.adapter.removeBodyClass(nt.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, ks.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(nt.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(nt.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(nt.SURFACE_SCRIM_SHOWN), this.adapter.addClass(nt.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(nt.SURFACE_SCRIM_HIDING), this.adapter.removeClass(nt.SURFACE_SCRIM_SHOWING);
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
      this.animFrame.request(is.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, e.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, ia.SCRIM_SELECTOR);
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
      this.animFrame.request(is.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(nt.OPENING), this.adapter.removeClass(nt.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(nt.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(nt.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(nt.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(nt.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(nt.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(nt.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(nt.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(nt.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(nt.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(nt.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(Ft)
), Jg = /* @__PURE__ */ ge('<div class="mdc-dialog__surface-scrim"></div>'), $g = /* @__PURE__ */ ge('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function ep(t, e) {
  we(e, !0);
  const n = () => Dn(k, "$aboveFullscreenShown", r), [r, i] = Wn(), { FocusTrap: a } = bm, { closest: s, matches: u } = Aa;
  let l = p(e, "use", 19, () => []), c = p(e, "class", 3, ""), d = p(e, "open", 15, !1), h = p(e, "selection", 3, !1), f = p(e, "escapeKeyAction", 3, "close"), m = p(e, "scrimClickAction", 3, "close"), v = p(e, "autoStackButtons", 3, !0), g = p(e, "fullscreen", 3, !1), _ = p(e, "sheet", 3, !1), E = p(e, "noContentPadding", 3, !1), S = p(e, "container$class", 3, ""), A = p(e, "surface$class", 3, ""), b = /* @__PURE__ */ We(e, [
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
  ]), I, y = /* @__PURE__ */ pe(void 0), T = new oi(), x = Ae({}), C, P = Ut(!1), K = se("SMUI:dialog:aboveFullscreen"), k = se("SMUI:dialog:aboveFullscreenShown") ?? Ut(!1), B = se("SMUI:addLayoutListener"), ve, q = [], F = (N) => (q.push(N), () => {
    const H = q.indexOf(N);
    H >= 0 && q.splice(H, 1);
  });
  te("SMUI:dialog:actions:reversed", P), te("SMUI:addLayoutListener", F), te("SMUI:dialog:selection", h()), te("SMUI:dialog:aboveFullscreen", K || g()), te("SMUI:dialog:aboveFullscreenShown", k), _() && te("SMUI:icon-button:context", "dialog:sheet"), Te(() => {
    o(y) && o(y).getEscapeKeyAction() !== f() && o(y).setEscapeKeyAction(f());
  }), Te(() => {
    o(y) && o(y).getScrimClickAction() !== m() && o(y).setScrimClickAction(m());
  }), Te(() => {
    o(y) && o(y).getAutoStackButtons() !== v() && o(y).setAutoStackButtons(v());
  }), Te(() => {
    v() || Rn(P, !0);
  }), B && (ve = B(re)), Te(() => {
    o(y) && o(y).isOpen() !== d() && (d() ? o(y).open({ isAboveFullscreenDialog: !!K }) : o(y).close());
  });
  let O = n();
  Te(() => {
    g() && o(y) && O !== n() && (O = n(), n() ? o(y).showSurfaceScrim() : o(y).hideSurfaceScrim());
  }), st(() => (C = new a(I, { initialFocusEl: Se() ?? void 0 }), Z(
    y,
    new Qg({
      addBodyClass: (N) => document.body.classList.add(N),
      addClass: z,
      areButtonsStacked: () => Zg(w()),
      clickDefaultButton: () => {
        const N = U();
        N && N.click();
      },
      eventTargetMatches: (N, H) => N ? u(N, H) : !1,
      getActionFromEvent: (N) => {
        if (!N.target)
          return "";
        const H = s(N.target, "[data-mdc-dialog-action]");
        return H && H.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: Se,
      hasClass: G,
      isContentScrollable: () => Wg(fe()),
      notifyClosed: (N) => {
        d(!1), ze(_e(), "SMUIDialogClosed", N ? { action: N } : {});
      },
      notifyClosing: (N) => ze(_e(), "SMUIDialogClosing", N ? { action: N } : {}),
      notifyOpened: () => ze(_e(), "SMUIDialogOpened", {}),
      notifyOpening: () => ze(_e(), "SMUIDialogOpening", {}),
      releaseFocus: () => C.releaseFocus(),
      removeBodyClass: (N) => document.body.classList.remove(N),
      removeClass: R,
      reverseButtons: () => {
        Rn(P, !0);
      },
      trapFocus: () => C.trapFocus(),
      registerContentEventHandler: (N, H) => {
        const J = fe();
        J instanceof HTMLElement && T.on(J, N, H);
      },
      deregisterContentEventHandler: (N, H) => {
        const J = fe();
        J instanceof HTMLElement && T.off(J, N, H);
      },
      isScrollableContentAtTop: () => Xg(fe()),
      isScrollableContentAtBottom: () => Kg(fe()),
      registerWindowEventHandler: (N, H) => T.on(window, N, H),
      deregisterWindowEventHandler: (N, H) => T.off(window, N, H)
    }),
    !0
  ), o(y).init(), () => {
    var N;
    (N = o(y)) == null || N.destroy(), T.clear();
  })), mn(() => {
    ve && ve();
  });
  function G(N) {
    return N in x ? x[N] : _e().classList.contains(N);
  }
  function z(N) {
    x[N] || (x[N] = !0);
  }
  function R(N) {
    (!(N in x) || x[N]) && (x[N] = !1);
  }
  function w() {
    return [].slice.call(_e().querySelectorAll(".mdc-dialog__button"));
  }
  function U() {
    return _e().querySelector("[data-mdc-dialog-button-default]");
  }
  function fe() {
    return _e().querySelector(".mdc-dialog__content");
  }
  function Se() {
    return _e().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function oe() {
    K && Rn(k, !0), requestAnimationFrame(() => {
      q.forEach((N) => N());
    });
  }
  function Ce() {
    q.forEach((N) => N());
  }
  function j() {
    K && Rn(k, !1);
  }
  function ie() {
    return d();
  }
  function Y(N) {
    d(N);
  }
  function re() {
    var N;
    return (N = o(y)) == null ? void 0 : N.layout();
  }
  function _e() {
    return I;
  }
  var W = { isOpen: ie, setOpen: Y, layout: re, getElement: _e }, ne = $g();
  ir("resize", Qa, () => d() && o(y) && o(y).layout()), ir("orientationchange", Qa, () => d() && o(y) && o(y).layout()), ir("keydown", To.body, (N) => o(y) && o(y).handleDocumentKeydown(N));
  var Oe = Q(ne), Ee = (N) => {
    var H;
    oe(), (H = e.onSMUIDialogOpening) == null || H.call(e, N);
  }, Fe = (N) => {
    var H;
    Ce(), (H = e.onSMUIDialogOpened) == null || H.call(e, N);
  }, Ze = (N) => {
    var H;
    j(), (H = e.onSMUIDialogClosed) == null || H.call(e, N);
  }, ct = (N) => {
    var H;
    o(y) && o(y).handleClick(N), (H = e.onclick) == null || H.call(e, N);
  }, D = (N) => {
    var H;
    o(y) && o(y).handleKeydown(N), (H = e.onkeydown) == null || H.call(e, N);
  };
  Ge(
    Oe,
    (N, H) => ({
      class: N,
      role: "alertdialog",
      "aria-modal": "true",
      ...H,
      onSMUIDialogOpening: Ee,
      onSMUIDialogOpened: Fe,
      onSMUIDialogClosed: Ze,
      onclick: ct,
      onkeydown: D
    }),
    [
      () => Pe({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !v(),
        "mdc-dialog--fullscreen": g(),
        "mdc-dialog--sheet": _(),
        "mdc-dialog--no-content-padding": E(),
        "smui-dialog--selection": h(),
        ...x,
        [c()]: !0
      }),
      () => ti(b, ["container$", "surface$"])
    ]
  );
  var V = be(Oe);
  Ge(V, (N, H) => ({ class: N, ...H }), [
    () => Pe({ "mdc-dialog__container": !0, [S()]: !0 }),
    () => ut(b, "container$")
  ]);
  var ue = be(V);
  Ge(ue, (N, H) => ({ class: N, role: "alertdialog", "aria-modal": "true", ...H }), [
    () => Pe({ "mdc-dialog__surface": !0, [A()]: !0 }),
    () => ut(b, "surface$")
  ]);
  var ke = be(ue);
  Ie(ke, () => e.children ?? le);
  var St = ye(ke, 2);
  {
    var At = (N) => {
      var H = Jg();
      ir("transitionend", H, () => o(y) && o(y).handleSurfaceScrimTransitionEnd()), L(N, H);
    };
    ae(St, (N) => {
      g() && N(At);
    });
  }
  xe(Oe, (N) => I = N, () => I), Ue(Oe, (N, H) => X == null ? void 0 : X(N, H), l);
  var ln = ye(Oe, 2);
  Ie(ln, () => e.over ?? le), L(t, ne);
  var he = Le(W);
  return i(), he;
}
function tp(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Ca(t, et({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (s, u) => {
        var l = ee(), c = Q(l);
        Ie(c, () => e.children ?? le), L(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Le(a);
}
function np(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    Ca(t, et(
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
          var l = ee(), c = Q(l);
          Ie(c, () => e.children ?? le), L(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Le(a);
}
var rp = /* @__PURE__ */ ge('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function ip(t, e) {
  we(e, !0);
  let n = p(e, "open", 15, !1), r = p(e, "onClose", 3, () => {
  });
  ep(t, {
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
      var s = rp(), u = Q(s), l = be(u);
      Ie(l, () => e.title ?? le);
      var c = ye(u, 2);
      tp(c, {
        id: "large-scroll-content",
        children: (h, f) => {
          var m = ee(), v = Q(m);
          Ie(v, () => e.content ?? le), L(h, m);
        },
        $$slots: { default: !0 }
      });
      var d = ye(c, 2);
      np(d, {
        children: (h, f) => {
          var m = ee(), v = Q(m);
          Ie(v, () => e.actions ?? le), L(h, m);
        },
        $$slots: { default: !0 }
      }), L(i, s);
    },
    $$slots: { default: !0 }
  }), Le();
}
const Ht = [];
for (let t = 0; t < 256; ++t)
  Ht.push((t + 256).toString(16).slice(1));
function ap(t, e = 0) {
  return (Ht[t[e + 0]] + Ht[t[e + 1]] + Ht[t[e + 2]] + Ht[t[e + 3]] + "-" + Ht[t[e + 4]] + Ht[t[e + 5]] + "-" + Ht[t[e + 6]] + Ht[t[e + 7]] + "-" + Ht[t[e + 8]] + Ht[t[e + 9]] + "-" + Ht[t[e + 10]] + Ht[t[e + 11]] + Ht[t[e + 12]] + Ht[t[e + 13]] + Ht[t[e + 14]] + Ht[t[e + 15]]).toLowerCase();
}
let Bs;
const sp = new Uint8Array(16);
function op() {
  if (!Bs) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Bs = crypto.getRandomValues.bind(crypto);
  }
  return Bs(sp);
}
const lp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Fl = { randomUUID: lp };
function up(t, e, n) {
  var i;
  if (Fl.randomUUID && !e && !t)
    return Fl.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? op();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return ap(r);
}
var cp = /* @__PURE__ */ ge('<span class="oscd-icon"><!></span>');
function Xn(t, e) {
  var n = cp(), r = be(n);
  Ie(r, () => e.children ?? le), L(t, n);
}
var dp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function fp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Xn(t, {
    children: (r, i) => {
      var a = dp();
      De(() => zt(a, n())), L(r, a);
    }
  });
}
var hp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Uo(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Xn(t, {
    children: (r, i) => {
      var a = hp();
      De(() => zt(a, n())), L(r, a);
    }
  });
}
var vp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function mp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Xn(t, {
    children: (r, i) => {
      var a = vp();
      De(() => zt(a, n())), L(r, a);
    }
  });
}
var gp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function pp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Xn(t, {
    children: (r, i) => {
      var a = gp();
      De(() => zt(a, n())), L(r, a);
    }
  });
}
var bp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function _p(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Xn(t, {
    children: (r, i) => {
      var a = bp();
      De(() => zt(a, n())), L(r, a);
    }
  });
}
var yp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Ip(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Xn(t, {
    children: (r, i) => {
      var a = yp();
      De(() => zt(a, n())), L(r, a);
    }
  });
}
var Ep = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Sp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Xn(t, {
    children: (r, i) => {
      var a = Ep();
      De(() => zt(a, n())), L(r, a);
    }
  });
}
var Ap = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Cp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Xn(t, {
    children: (r, i) => {
      var a = Ap();
      De(() => zt(a, n())), L(r, a);
    }
  });
}
Dd();
var xp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Tp(t, e) {
  let n = p(e, "svgStyles", 3, "");
  Xn(t, {
    children: (r, i) => {
      var a = xp();
      De(() => zt(a, n())), L(r, a);
    }
  });
}
var wp = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Lp(t, e) {
  let n = p(e, "svgStyles", 8, "");
  Xn(t, {
    children: (r, i) => {
      var a = wp();
      De(() => zt(a, n())), L(r, a);
    }
  });
}
function Op(t, e) {
  e(t.target.value);
}
var Rp = /* @__PURE__ */ ge('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function Mp(t, e) {
  we(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Rp(), a = be(i);
  a.__change = [Op, r];
  var s = ye(a, 2), u = be(s);
  De(() => ht(u, n())), ha(a, r), L(t, i), Le();
}
xn(["change"]);
function Dp(t, e) {
  e(t.target.value);
}
var Hp = /* @__PURE__ */ ge('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Np(t, e) {
  we(e, !0);
  let n = p(e, "label", 3, ""), r = p(e, "value", 15, "");
  var i = Hp(), a = be(i);
  a.__change = [Dp, r];
  var s = ye(a, 2), u = be(s);
  De(() => ht(u, n())), ha(a, r), L(t, i), Le();
}
xn(["change"]);
function Pp(t, e, n, r) {
  e() && ((t.key === "Enter" || t.key === " ") && (t.preventDefault(), n()), t.key === "Escape" && (t.preventDefault(), r()));
}
var Up = /* @__PURE__ */ ge('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function as(t, e) {
  we(e, !0);
  let n = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), s = p(e, "disabled", 3, !1);
  const u = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ pe(null), c = /* @__PURE__ */ pe(null), d = /* @__PURE__ */ pe(null), h = /* @__PURE__ */ pe(null), f = /* @__PURE__ */ pe(!1), m = /* @__PURE__ */ pe(null), v = /* @__PURE__ */ pe(null);
  function g() {
    !n() || s() || (o(m) && clearTimeout(o(m)), i() > 0 ? Z(m, setTimeout(() => Z(f, !0), i()), !0) : Z(f, !0));
  }
  function _() {
    o(m) && clearTimeout(o(m)), Z(f, !1);
  }
  function E() {
    g();
  }
  function S() {
    _();
  }
  function A() {
    g();
  }
  function b() {
    _();
  }
  function I() {
    if (!o(c) || !o(h) || !o(l) || s()) return;
    const C = o(l).getBoundingClientRect(), P = o(h).getBoundingClientRect();
    let K = 0, k = 0;
    const B = 8;
    switch (r()) {
      case "top":
        K = C.top - P.height - B, k = C.left + C.width / 2 - P.width / 2;
        break;
      case "bottom":
        K = C.bottom + B, k = C.left + C.width / 2 - P.width / 2;
        break;
      case "left":
        K = C.top + C.height / 2 - P.height / 2, k = C.left - P.width - B;
        break;
      case "right":
        K = C.top + C.height / 2 - P.height / 2, k = C.right + B;
        break;
    }
    o(c).style.top = `${K + window.scrollY}px`, o(c).style.left = `${k + window.scrollX}px`;
  }
  function y() {
    var C;
    (C = o(v)) == null || C.disconnect(), Z(v, null), o(c) && o(c).parentNode && o(c).parentNode.removeChild(o(c)), Z(c, null), Z(h, null), Z(d, null), o(m) && clearTimeout(o(m));
  }
  mn(y), Te(() => {
    if (!(!o(f) || !n() || s())) {
      if (!o(c)) {
        Z(c, document.createElement("div"), !0), o(c).style.position = "absolute", o(c).style.zIndex = "9999", o(c).style.pointerEvents = "none", o(c).style.opacity = "0", o(c).style.transition = `opacity ${a()}ms ease`, o(c).id = u, o(c).setAttribute("role", "tooltip"), document.body.appendChild(o(c)), Z(d, o(c).attachShadow({ mode: "open" }), !0);
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
      `, o(d).appendChild(C), Z(h, document.createElement("div"), !0), o(d).appendChild(o(h)), Z(
          v,
          new MutationObserver(() => {
            o(f) && I();
          }),
          !0
        ), o(v).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = n()), o(c) && (o(c).style.opacity = "1", I());
    }
  }), Te(() => {
    if (o(f) || !o(c))
      return;
    o(c).style.opacity = "0";
    const C = o(c), P = setTimeout(
      () => {
        C && C.parentNode && C.parentNode.removeChild(C), o(c) === C && y();
      },
      a()
    );
    return () => clearTimeout(P);
  });
  var T = Up();
  T.__keydown = [Pp, n, g, _];
  var x = be(T);
  Ie(x, () => e.children ?? le), xe(T, (C) => Z(l, C), () => o(l)), De(() => {
    Sr(T, "aria-describedby", n() && !s() ? u : void 0), Sr(T, "aria-haspopup", n() ? "true" : void 0), Sr(T, "aria-expanded", n() ? o(f) ? "true" : "false" : void 0);
  }), ir("mouseenter", T, E), ir("mouseleave", T, S), ir("focus", T, A), ir("blur", T, b), L(t, T), Le();
}
xn(["keydown"]);
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
var aa = {
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
}, kl = {
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
var Fp = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.currentCheckState = bn.TRANSITION_STATE_INIT, r.currentAnimationClass = "", r.animEndLatchTimer = 0, r.enableAnimationEndHandler = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return aa;
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
        return kl;
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
      this.currentCheckState = this.determineCheckState(), this.updateAriaChecked(), this.adapter.addClass(aa.UPGRADED);
    }, e.prototype.destroy = function() {
      clearTimeout(this.animEndLatchTimer);
    }, e.prototype.setDisabled = function(n) {
      this.adapter.setNativeControlDisabled(n), n ? this.adapter.addClass(aa.DISABLED) : this.adapter.removeClass(aa.DISABLED);
    }, e.prototype.handleAnimationEnd = function() {
      var n = this;
      this.enableAnimationEndHandler && (clearTimeout(this.animEndLatchTimer), this.animEndLatchTimer = setTimeout(function() {
        n.adapter.removeClass(n.currentAnimationClass), n.enableAnimationEndHandler = !1;
      }, kl.ANIM_END_LATCH_MS));
    }, e.prototype.handleChange = function() {
      this.transitionCheckState();
    }, e.prototype.transitionCheckState = function() {
      if (this.adapter.hasNativeControl()) {
        var n = this.currentCheckState, r = this.determineCheckState();
        if (n !== r) {
          this.updateAriaChecked();
          var i = bn.TRANSITION_STATE_UNCHECKED, a = aa.SELECTED;
          r === i ? this.adapter.removeClass(a) : this.adapter.addClass(a), this.currentAnimationClass.length > 0 && (clearTimeout(this.animEndLatchTimer), this.adapter.forceLayout(), this.adapter.removeClass(this.currentAnimationClass)), this.currentAnimationClass = this.getTransitionAnimationClass(n, r), this.currentCheckState = r, this.adapter.isAttachedToDOM() && this.currentAnimationClass.length > 0 && (this.adapter.addClass(this.currentAnimationClass), this.enableAnimationEndHandler = !0);
        }
      }
    }, e.prototype.determineCheckState = function() {
      var n = bn.TRANSITION_STATE_INDETERMINATE, r = bn.TRANSITION_STATE_CHECKED, i = bn.TRANSITION_STATE_UNCHECKED;
      return this.adapter.isIndeterminate() ? n : this.adapter.isChecked() ? r : i;
    }, e.prototype.getTransitionAnimationClass = function(n, r) {
      var i = bn.TRANSITION_STATE_INIT, a = bn.TRANSITION_STATE_CHECKED, s = bn.TRANSITION_STATE_UNCHECKED, u = e.cssClasses, l = u.ANIM_UNCHECKED_CHECKED, c = u.ANIM_UNCHECKED_INDETERMINATE, d = u.ANIM_CHECKED_UNCHECKED, h = u.ANIM_CHECKED_INDETERMINATE, f = u.ANIM_INDETERMINATE_CHECKED, m = u.ANIM_INDETERMINATE_UNCHECKED;
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
      this.adapter.isIndeterminate() ? this.adapter.setNativeControlAttr(bn.ARIA_CHECKED_ATTR, bn.ARIA_CHECKED_INDETERMINATE_VALUE) : this.adapter.removeNativeControlAttr(bn.ARIA_CHECKED_ATTR);
    }, e;
  }(Ft)
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
var cn = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, wn = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, sa = {
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
var kp = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return cn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return wn;
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
      this.determinate = !this.adapter.hasClass(cn.INDETERMINATE_CLASS), this.adapter.addClass(cn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var s = Mt(r), u = s.next(); !u.done; u = s.next()) {
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
        this.adapter.removeClass(cn.INDETERMINATE_CLASS), this.adapter.setAttribute(wn.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(wn.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(wn.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(cn.INDETERMINATE_CLASS), this.adapter.removeAttribute(wn.ARIA_VALUENOW), this.adapter.removeAttribute(wn.ARIA_VALUEMAX), this.adapter.removeAttribute(wn.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, e.prototype.isDeterminate = function() {
      return this.determinate;
    }, e.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(wn.ARIA_VALUENOW, n.toString()));
    }, e.prototype.getProgress = function() {
      return this.progress;
    }, e.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, e.prototype.getBuffer = function() {
      return this.buffer;
    }, e.prototype.open = function() {
      this.adapter.removeClass(cn.CLOSED_CLASS), this.adapter.removeClass(cn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(wn.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(cn.CLOSED_CLASS), this.adapter.setAttribute(wn.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(cn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(cn.CLOSED_CLASS) && this.adapter.addClass(cn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(cn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(cn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? Sg(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(wn.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * sa.PRIMARY_HALF, i = n * sa.PRIMARY_FULL, a = n * sa.SECONDARY_QUARTER, s = n * sa.SECONDARY_HALF, u = n * sa.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -s + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Ft)
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
var er = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Bl = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Vr = {
  ARIA_SELECTED: Bl.ARIA_SELECTED,
  ARIA_SORT: Bl.ARIA_SORT
}, fn;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(fn || (fn = {}));
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
var Bp = (
  /** @class */
  function(t) {
    tt(e, t);
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
      return Ju(this, void 0, void 0, function() {
        return Ho(this, function(n) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, er.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, Vr.ARIA_SORT, fn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, fn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, er.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, Vr.ARIA_SORT), l = fn.NONE;
      u === fn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Vr.ARIA_SORT, fn.DESCENDING), l = fn.DESCENDING) : u === fn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, er.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, Vr.ARIA_SORT, fn.ASCENDING), l = fn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, Vr.ARIA_SORT, fn.ASCENDING), l = fn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(er.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(er.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, er.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Vr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, er.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Vr.ARIA_SELECTED, "false"));
    }, e;
  }(Ft)
), Vp = /* @__PURE__ */ ge('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Gp = /* @__PURE__ */ ge("<div><div><table><!></table></div> <!> <!></div>");
function jp(t, e) {
  we(e, !0);
  const n = () => Dn(B, "$progressClosed", r), [r, i] = Wn(), { closest: a } = Aa;
  let s = p(e, "use", 19, () => []), u = p(e, "class", 3, ""), l = p(e, "stickyHeader", 3, !1), c = p(e, "sortable", 3, !1), d = p(e, "sort", 15, null), h = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), m = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = p(e, "container$use", 19, () => []), g = p(e, "container$class", 3, ""), _ = p(e, "table$use", 19, () => []), E = p(e, "table$class", 3, ""), S = /* @__PURE__ */ We(e, [
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
  ]), A, b = /* @__PURE__ */ pe(void 0), I, y = /* @__PURE__ */ pe(void 0), T = /* @__PURE__ */ pe(void 0), x = Ae({}), C = /* @__PURE__ */ pe(Ae({ height: "auto", top: "initial" })), P = se("SMUI:addLayoutListener"), K, k = !1, B = Ut(!1), ve = Ut(d());
  Te(() => {
    Rn(ve, d());
  });
  let q = Ut(h());
  Te(() => {
    Rn(q, h());
  }), te("SMUI:checkbox:context", "data-table"), te("SMUI:linear-progress:context", "data-table"), te("SMUI:linear-progress:closed", B), te("SMUI:data-table:sortable", c()), te("SMUI:data-table:sort", ve), te("SMUI:data-table:sortDirection", q), te("SMUI:data-table:sortAscendingAriaLabel", f()), te("SMUI:data-table:sortDescendingAriaLabel", m()), P && (K = P(Se));
  let F;
  Te(() => {
    e.progress && o(b) && F !== n() && (F = n(), n() ? o(b).hideProgress() : o(b).showProgress());
  }), te("SMUI:checkbox:mount", () => {
    o(b) && k && o(b).layout();
  }), te("SMUI:data-table:header:mount", (D) => {
    Z(y, D, !0);
  }), te("SMUI:data-table:header:unmount", () => {
    Z(y, void 0);
  }), te("SMUI:data-table:body:mount", (D) => {
    Z(T, D, !0);
  }), te("SMUI:data-table:body:unmount", () => {
    Z(T, void 0);
  }), st(() => (Z(
    b,
    new Bp({
      addClass: G,
      removeClass: z,
      getHeaderCellElements: () => {
        var D;
        return ((D = o(y)) == null ? void 0 : D.cells.map((V) => V.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var D;
        return ((D = o(y)) == null ? void 0 : D.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (D, V) => {
        var ue;
        return ((ue = o(y)) == null ? void 0 : ue.orderedCells[D].getAttr(V)) ?? null;
      },
      setAttributeByHeaderCellIndex: (D, V, ue) => {
        var ke;
        (ke = o(y)) == null || ke.orderedCells[D].addAttr(V, ue);
      },
      setClassNameByHeaderCellIndex: (D, V) => {
        var ue;
        (ue = o(y)) == null || ue.orderedCells[D].addClass(V);
      },
      removeClassNameByHeaderCellIndex: (D, V) => {
        var ue;
        (ue = o(y)) == null || ue.orderedCells[D].removeClass(V);
      },
      notifySortAction: (D) => {
        d(D.columnId), h(D.sortValue), ze(oe(), "SMUIDataTableSorted", D);
      },
      getTableContainerHeight: () => I.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const D = oe().querySelector(".mdc-data-table__header-row");
        if (!D)
          throw new Error("MDCDataTable: Table header element not found.");
        return D.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (D) => {
        Z(C, D, !0);
      },
      addClassAtRowIndex: (D, V) => {
        var ue;
        (ue = o(T)) == null || ue.orderedRows[D].addClass(V);
      },
      getRowCount: () => {
        var D;
        return ((D = o(T)) == null ? void 0 : D.rows.length) ?? 0;
      },
      getRowElements: () => {
        var D;
        return ((D = o(T)) == null ? void 0 : D.rows.map((V) => V.element)) ?? [];
      },
      getRowIdAtIndex: (D) => {
        var V;
        return ((V = o(T)) == null ? void 0 : V.orderedRows[D].rowId) ?? null;
      },
      getRowIndexByChildElement: (D) => {
        var V;
        return ((V = o(T)) == null ? void 0 : V.orderedRows.map((ue) => ue.element).indexOf(a(D, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var D;
        return ((D = o(T)) == null ? void 0 : D.rows.filter((V) => V.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (D) => {
        var ue;
        const V = (ue = o(T)) == null ? void 0 : ue.orderedRows[D].checkbox;
        return V ? V.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var V;
        const D = (V = o(y)) == null ? void 0 : V.checkbox;
        return D ? D.checked : !1;
      },
      isRowsSelectable: () => !!oe().querySelector(".mdc-data-table__row-checkbox") || !!oe().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (D) => {
        var ue;
        const V = (ue = o(T)) == null ? void 0 : ue.orderedRows[D.rowIndex];
        V && ze(oe(), "SMUIDataTableSelectionChanged", {
          row: V.element,
          rowId: V.rowId,
          rowIndex: D.rowIndex,
          selected: D.selected
        });
      },
      notifySelectedAll: () => {
        R(!1), ze(oe(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        R(!1), ze(oe(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (D) => ze(oe(), "SMUIDataTableClickRow", D),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (D, V) => {
        var ue;
        (ue = o(T)) == null || ue.orderedRows[D].removeClass(V);
      },
      setAttributeAtRowIndex: (D, V, ue) => {
        var ke;
        (ke = o(T)) == null || ke.orderedRows[D].addAttr(V, ue);
      },
      setHeaderRowCheckboxChecked: (D) => {
        var ue;
        const V = (ue = o(y)) == null ? void 0 : ue.checkbox;
        V && (V.checked = D);
      },
      setHeaderRowCheckboxIndeterminate: R,
      setRowCheckboxCheckedAtIndex: (D, V) => {
        var ke;
        const ue = (ke = o(T)) == null ? void 0 : ke.orderedRows[D].checkbox;
        ue && (ue.checked = V);
      },
      setSortStatusLabelByHeaderCellIndex: (D, V) => {
      }
    }),
    !0
  ), o(b).init(), o(b).layout(), k = !0, () => {
    var D;
    (D = o(b)) == null || D.destroy();
  })), mn(() => {
    K && K();
  });
  function O(D) {
    o(b) && o(b).handleRowCheckboxChange(D);
  }
  function G(D) {
    x[D] || (x[D] = !0);
  }
  function z(D) {
    (!(D in x) || x[D]) && (x[D] = !1);
  }
  function R(D) {
    var ue;
    const V = (ue = o(y)) == null ? void 0 : ue.checkbox;
    V && (V.indeterminate = D);
  }
  function w(D) {
    if (!o(b) || !D.detail.target)
      return;
    const V = a(D.detail.target, ".mdc-data-table__header-cell--with-sort");
    V && fe(V);
  }
  function U(D) {
    if (!o(b) || !D.detail.target)
      return;
    const V = a(D.detail.target, ".mdc-data-table__row");
    V && o(b) && o(b).handleRowClick({ rowId: D.detail.rowId, row: V });
  }
  function fe(D) {
    var St, At;
    const V = ((St = o(y)) == null ? void 0 : St.orderedCells) ?? [], ue = V.map((ln) => ln.element).indexOf(D);
    if (ue === -1)
      return;
    const ke = V[ue].columnId ?? null;
    (At = o(b)) == null || At.handleSortAction({ columnId: ke, columnIndex: ue, headerCell: D });
  }
  function Se() {
    var D;
    return (D = o(b)) == null ? void 0 : D.layout();
  }
  function oe() {
    return A;
  }
  var Ce = { layout: Se, getElement: oe }, j = Gp(), ie = (D) => {
    var V;
    o(b) && o(b).handleHeaderRowCheckboxChange(), (V = e.onSMUIDataTableHeaderCheckboxChange) == null || V.call(e, D);
  }, Y = (D) => {
    var V;
    w(D), (V = e.onSMUIDataTableHeaderClick) == null || V.call(e, D);
  }, re = (D) => {
    var V;
    U(D), (V = e.onSMUIDataTableRowClick) == null || V.call(e, D);
  }, _e = (D) => {
    var V;
    O(D), (V = e.onSMUIDataTableBodyCheckboxChange) == null || V.call(e, D);
  };
  Ge(
    j,
    (D, V) => ({
      class: D,
      ...V,
      onSMUIDataTableHeaderCheckboxChange: ie,
      onSMUIDataTableHeaderClick: Y,
      onSMUIDataTableRowClick: re,
      onSMUIDataTableBodyCheckboxChange: _e
    }),
    [
      () => Pe({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...x,
        [u()]: !0
      }),
      () => ti(S, ["container$", "table$"])
    ]
  );
  var W = be(j);
  Ge(W, (D, V) => ({ class: D, ...V }), [
    () => Pe({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => ut(S, "container$")
  ]);
  var ne = be(W);
  Ge(ne, (D, V) => ({ class: D, ...V }), [
    () => Pe({ "mdc-data-table__table": !0, [E()]: !0 }),
    () => ut(S, "table$")
  ]);
  var Oe = be(ne);
  Ie(Oe, () => e.children ?? le), Ue(ne, (D, V) => X == null ? void 0 : X(D, V), _), xe(W, (D) => I = D, () => I), Ue(W, (D, V) => X == null ? void 0 : X(D, V), v);
  var Ee = ye(W, 2);
  {
    var Fe = (D) => {
      var V = Vp(), ue = ye(be(V), 2);
      Ie(ue, () => e.progress ?? le), De((ke) => zt(V, ke), [
        () => Object.entries(o(C)).map(([ke, St]) => `${ke}: ${St};`).join(" ")
      ]), L(D, V);
    };
    ae(Ee, (D) => {
      e.progress && D(Fe);
    });
  }
  var Ze = ye(Ee, 2);
  Ie(Ze, () => e.paginate ?? le), xe(j, (D) => A = D, () => A), Ue(j, (D, V) => X == null ? void 0 : X(D, V), s), L(t, j);
  var ct = Le(Ce);
  return i(), ct;
}
var qp = /* @__PURE__ */ ge("<thead><!></thead>");
function zp(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = /* @__PURE__ */ We(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ pe(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !0);
  const l = se("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (E) => {
    Z(a, E, !0), l && l(E);
  });
  const c = se("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (E) => {
    Z(a, void 0), c && c(E);
  }), te("SMUI:data-table:cell:mount", (E) => {
    s.push(E), u.set(E.element, E);
  }), te("SMUI:data-table:cell:unmount", (E) => {
    const S = s.findIndex((A) => A === E);
    S !== -1 && s.splice(S, 1), u.delete(E.element);
  });
  const d = se("SMUI:data-table:header:mount"), h = se("SMUI:data-table:header:unmount");
  st(() => {
    const E = {
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
    return d && d(E), () => {
      h && h(E);
    };
  });
  function f() {
    return [
      ...m().querySelectorAll(".mdc-data-table__header-cell")
    ].map((E) => u.get(E)).filter((E) => E && E._smui_data_table_header_cell_accessor);
  }
  function m() {
    return i;
  }
  var v = { getElement: m }, g = qp();
  Ge(g, () => ({ ...r }));
  var _ = be(g);
  return Ie(_, () => e.children ?? le), xe(g, (E) => i = E, () => i), Ue(g, (E, S) => X == null ? void 0 : X(E, S), n), L(t, g), Le(v);
}
var Wp = /* @__PURE__ */ ge("<tbody><!></tbody>");
function Xp(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const u = /* @__PURE__ */ new WeakMap();
  te("SMUI:data-table:row:header", !1), te("SMUI:data-table:row:mount", (g) => {
    s.push(g), u.set(g.element, g);
  }), te("SMUI:data-table:row:unmount", (g) => {
    const _ = s.findIndex((E) => E === g);
    _ !== -1 && s.splice(_, 1), u.delete(g.element);
  });
  const l = se("SMUI:data-table:body:mount"), c = se("SMUI:data-table:body:unmount");
  st(() => {
    const g = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return d();
      }
    };
    return l && l(g), () => {
      c && c(g);
    };
  });
  function d() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((g) => u.get(g)).filter((g) => g && g._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, m = Wp();
  Ge(m, (g) => ({ class: g, ...i }), [
    () => Pe({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = be(m);
  return Ie(v, () => e.children ?? le), xe(m, (g) => a = g, () => a), Ue(m, (g, _) => X == null ? void 0 : X(g, _), n), L(t, m), Le(f);
}
let Kp = 0;
var Zp = /* @__PURE__ */ ge("<tr><!></tr>");
function Vs(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + Kp++), a = /* @__PURE__ */ We(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ pe(void 0), l = Ae({}), c = Ae({}), d = se("SMUI:data-table:row:header");
  const h = se("SMUI:checkbox:mount");
  te("SMUI:checkbox:mount", (P) => {
    Z(u, P, !0), h && h(P);
  });
  const f = se("SMUI:checkbox:unmount");
  te("SMUI:checkbox:unmount", (P) => {
    Z(u, void 0), f && f(P);
  });
  const m = se("SMUI:data-table:row:mount"), v = se("SMUI:data-table:row:unmount");
  st(() => {
    const P = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return I();
      },
      get checkbox() {
        return o(u);
      },
      get rowId() {
      },
      get selected() {
        return (o(u) && o(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: _,
      getAttr: E,
      addAttr: S
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return I();
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
      addClass: g,
      removeClass: _,
      getAttr: E,
      addAttr: S
    };
    return m && m(P), () => {
      v && v(P);
    };
  });
  function g(P) {
    l[P] || (l[P] = !0);
  }
  function _(P) {
    (!(P in l) || l[P]) && (l[P] = !1);
  }
  function E(P) {
    return P in c ? c[P] ?? null : I().getAttribute(P);
  }
  function S(P, K) {
    c[P] !== K && (c[P] = K);
  }
  function A(P) {
    ze(I(), "SMUIDataTableHeaderClick", P);
  }
  function b(P) {
    ze(I(), "SMUIDataTableRowClick", { rowId: i(), target: P.target });
  }
  function I() {
    return s;
  }
  var y = { getElement: I }, T = Zp(), x = (P) => {
    var K;
    d ? A(P) : b(P), (K = e.onclick) == null || K.call(e, P);
  };
  Ge(
    T,
    (P) => ({
      class: P,
      "aria-selected": o(u) ? o(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: x
    }),
    [
      () => Pe({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && o(u) && o(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var C = be(T);
  return Ie(C, () => e.children ?? le), xe(T, (P) => s = P, () => s), Ue(T, (P, K) => X == null ? void 0 : X(P, K), n), L(t, T), Le(y);
}
let Yp = 0;
var Qp = /* @__PURE__ */ ge('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Jp = /* @__PURE__ */ ge("<th><!></th>"), $p = /* @__PURE__ */ ge("<td><!></td>");
function Ua(t, e) {
  we(e, !0);
  const n = () => Dn(E, "$sort", i), r = () => Dn(S, "$sortDirection", i), [i, a] = Wn();
  let s = se("SMUI:data-table:row:header"), u = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "numeric", 3, !1), d = p(e, "checkbox", 3, !1), h = p(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Yp++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => se("SMUI:data-table:sortable")), m = /* @__PURE__ */ We(e, [
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
  ]), v, g = Ae({}), _ = Ae({}), E = se("SMUI:data-table:sort"), S = se("SMUI:data-table:sortDirection"), A = se("SMUI:data-table:sortAscendingAriaLabel"), b = se("SMUI:data-table:sortDescendingAriaLabel");
  f() && (te("SMUI:label:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:context", "data-table:sortable-header-cell"), te("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const I = se("SMUI:data-table:cell:mount"), y = se("SMUI:data-table:cell:unmount");
  st(() => {
    const R = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return B();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: x,
      getAttr: C,
      addAttr: P
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return B();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: x,
      getAttr: C,
      addAttr: P
    };
    return I && I(R), () => {
      y && y(R);
    };
  });
  function T(R) {
    g[R] || (g[R] = !0);
  }
  function x(R) {
    (!(R in g) || g[R]) && (g[R] = !1);
  }
  function C(R) {
    return R in _ ? _[R] ?? null : B().getAttribute(R);
  }
  function P(R, w) {
    _[R] !== w && (_[R] = w);
  }
  function K(R) {
    ze(B(), "SMUIDataTableHeaderCheckboxChange", R);
  }
  function k(R) {
    ze(B(), "SMUIDataTableBodyCheckboxChange", R);
  }
  function B() {
    return v;
  }
  var ve = { getElement: B }, q = ee(), F = Q(q);
  {
    var O = (R) => {
      var w = Jp(), U = (Ce) => {
        var j;
        d() && K(Ce), (j = e.onchange) == null || j.call(e, Ce);
      };
      Ge(
        w,
        (Ce) => ({
          class: Ce,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ..._,
          ...m,
          onchange: U
        }),
        [
          () => Pe({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && n() === h(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var fe = be(w);
      {
        var Se = (Ce) => {
          var j = Qp(), ie = be(j);
          Ie(ie, () => e.children ?? le);
          var Y = ye(ie, 2), re = be(Y);
          De(() => {
            Sr(Y, "id", `${h() ?? ""}-status-label`), ht(re, n() === h() ? r() === "ascending" ? A : b : "");
          }), L(Ce, j);
        }, oe = (Ce) => {
          var j = ee(), ie = Q(j);
          Ie(ie, () => e.children ?? le), L(Ce, j);
        };
        ae(fe, (Ce) => {
          f() ? Ce(Se) : Ce(oe, !1);
        });
      }
      xe(w, (Ce) => v = Ce, () => v), Ue(w, (Ce, j) => X == null ? void 0 : X(Ce, j), u), L(R, w);
    }, G = (R) => {
      var w = $p(), U = (Se) => {
        var oe;
        d() && k(Se), (oe = e.onchange) == null || oe.call(e, Se);
      };
      Ge(
        w,
        (Se) => ({
          class: Se,
          ..._,
          ...m,
          onchange: U
        }),
        [
          () => Pe({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var fe = be(w);
      Ie(fe, () => e.children ?? le), xe(w, (Se) => v = Se, () => v), Ue(w, (Se, oe) => X == null ? void 0 : X(Se, oe), u), L(R, w);
    };
    ae(F, (R) => {
      s ? R(O) : R(G, !1);
    });
  }
  L(t, q);
  var z = Le(ve);
  return a(), z;
}
xn(["click"]);
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
var eb = {
  ROOT: "mdc-form-field"
}, tb = {
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
var nb = (
  /** @class */
  function(t) {
    tt(e, t);
    function e(n) {
      var r = t.call(this, de(de({}, e.defaultAdapter), n)) || this;
      return r.click = function() {
        r.handleClick();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return eb;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return tb;
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
  }(Ft)
);
let rb = 0;
var ib = /* @__PURE__ */ ge("<div><!> <label><!></label></div>");
function ab(t, e) {
  we(e, !0);
  let n = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "align", 3, "start"), a = p(e, "noWrap", 3, !1), s = p(e, "inputId", 19, () => "SMUI-form-field-" + rb++), u = p(e, "label$use", 19, () => []), l = /* @__PURE__ */ We(e, [
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
  ]), c, d = /* @__PURE__ */ pe(void 0), h = new oi(), f, m = /* @__PURE__ */ pe(void 0);
  te("SMUI:generic:input:props", { id: s() }), te("SMUI:generic:input:mount", (b) => {
    Z(m, b, !0);
  }), te("SMUI:generic:input:unmount", () => {
    Z(m, void 0);
  }), st(() => (Z(
    d,
    new nb({
      activateInputRipple: () => {
        o(m) && o(m).activateRipple();
      },
      deactivateInputRipple: () => {
        o(m) && o(m).deactivateRipple();
      },
      deregisterInteractionHandler: (b, I) => h.off(f, b, I),
      registerInteractionHandler: (b, I) => h.on(f, b, I)
    }),
    !0
  ), o(d).init(), () => {
    var b;
    (b = o(d)) == null || b.destroy(), h.clear();
  }));
  function v() {
    return c;
  }
  var g = { getElement: v }, _ = ib();
  Ge(_, (b, I) => ({ class: b, ...I }), [
    () => Pe({
      "mdc-form-field": !0,
      "mdc-form-field--align-end": i() === "end",
      "mdc-form-field--nowrap": a(),
      [r()]: !0
    }),
    () => ti(l, ["label$"])
  ]);
  var E = be(_);
  Ie(E, () => e.children ?? le);
  var S = ye(E, 2);
  Ge(S, (b) => ({ for: s(), ...b }), [() => ut(l, "label$")]);
  var A = be(S);
  return Ie(A, () => e.label ?? le), xe(S, (b) => f = b, () => f), Ue(S, (b, I) => X == null ? void 0 : X(b, I), u), xe(_, (b) => c = b, () => c), Ue(_, (b, I) => X == null ? void 0 : X(b, I), n), L(t, _), Le(g);
}
xn(["click"]);
function vo(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var sb = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
vo({}, sb.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Fa, Vl = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Fa = {}, vo(Fa, Vl.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), vo(Fa, Vl.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const ob = Ut([]);
ob.subscribe;
function lb(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Gl(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
function jl(t, { delay: e = 0, duration: n = 400, easing: r = lb, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const u = getComputedStyle(t), l = +u.opacity, c = u.transform === "none" ? "" : u.transform, d = l * (1 - s), [h, f] = Gl(i), [m, v] = Gl(a);
  return {
    delay: e,
    duration: n,
    easing: r,
    css: (g, _) => `
			transform: ${c} translate(${(1 - g) * h}${f}, ${(1 - g) * m}${v});
			opacity: ${l - d * _}`
  };
}
xn([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
xn(["click"]);
const ub = 4e3;
function cb() {
  let t = Ae({ items: [] }), e = 0;
  const n = (i) => {
    t.items = t.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = ub) => {
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
cb();
var db = (t, e) => {
  t.stopPropagation(), e.onOpen();
}, fb = (t, e) => {
  t.stopPropagation(), e.onRemove();
}, hb = /* @__PURE__ */ ge('<button type="button" style="all: unset; display: flex; align-items: center; justify-content: center;" class="svelte-1mybgc7"><!></button>'), vb = /* @__PURE__ */ ge('<span class="filter-badge__seperator svelte-1mybgc7">|</span> <span class="filter-badge__value svelte-1mybgc7"> </span> <span class="filter-badge__arrow-down"><!></span>', 1), mb = /* @__PURE__ */ ge('<button type="button"><div class="filter-badge__icon svelte-1mybgc7"><!></div> <span class="filter-badge__label svelte-1mybgc7"> </span> <!></button>');
function gb(t, e) {
  we(e, !0);
  let n = /* @__PURE__ */ me(() => !!e.value);
  var r = mb();
  r.__click = [db, e];
  var i = be(r), a = be(i);
  {
    var s = (f) => {
      as(f, {
        content: "Remove Filter",
        hoverDelay: 500,
        side: "top",
        children: (m, v) => {
          var g = hb();
          g.__click = [fb, e];
          var _ = be(g);
          Uo(_, {
            svgStyles: "fill: grey; height: filt-content; width: fit-content;"
          }), L(m, g);
        },
        $$slots: { default: !0 }
      });
    }, u = (f) => {
      as(f, {
        content: "Add Filter",
        hoverDelay: 501,
        side: "top",
        children: (m, v) => {
          Lp(m, {
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
  var l = ye(i, 2), c = be(l), d = ye(l, 2);
  {
    var h = (f) => {
      var m = vb(), v = ye(Q(m), 2), g = be(v), _ = ye(v, 2), E = be(_);
      Tp(E, { svgStyles: "fill: gray;" }), De(() => ht(g, e.value)), L(f, m);
    };
    ae(d, (f) => {
      o(n) && f(h);
    });
  }
  De(() => {
    Ro(r, 1, `filter-badge ${o(n) ? "filter-badge--active" : "filter-badge--inactive"}`, "svelte-1mybgc7"), ht(c, e.label);
  }), L(t, r), Le();
}
xn(["click"]);
var pb = /* @__PURE__ */ ge('<div><input/> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg> <div class="mdc-checkbox__mixedmark"></div></div> <div class="mdc-checkbox__ripple"></div></div>');
function bb(t, e) {
  we(e, !0);
  let n = () => {
  };
  function r(W) {
    return W === n;
  }
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), u = p(e, "disabled", 15, !1), l = p(e, "touch", 3, !1), c = p(e, "indeterminate", 15, n), d = p(e, "group", 11, n), h = p(e, "checked", 15, n), f = p(e, "value", 3, null), m = p(e, "valueKey", 3, n), v = p(e, "input$use", 19, () => []), g = p(e, "input$class", 3, ""), _ = /* @__PURE__ */ We(e, [
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
  ]), E, S = /* @__PURE__ */ pe(void 0), A = /* @__PURE__ */ pe(void 0), b = Ae({}), I = Ae({}), y = Ae({}), T = /* @__PURE__ */ pe(!1), x = Ae(se("SMUI:generic:input:props") ?? {}), C = /* @__PURE__ */ pe(Ae(r(d()) ? r(h()) ? !1 : !!h() : d().findIndex((W) => W === f()) !== -1)), P = se("SMUI:checkbox:context"), K = se("SMUI:data-table:row:header"), k = h(), B = r(d()) ? [] : [...d()], ve = o(C);
  Te(() => {
    let W = !1;
    if (!r(d()))
      if (ve !== o(C)) {
        const ne = d().findIndex((Oe) => Oe === f());
        o(C) && ne === -1 ? d().push(f()) : !o(C) && ne !== -1 && d().splice(ne, 1), W = !0;
      } else {
        const ne = B.findIndex((Ee) => Ee === f()), Oe = d().findIndex((Ee) => Ee === f());
        ne > -1 && Oe === -1 ? (Z(C, !1), W = !0) : Oe > -1 && ne === -1 && (Z(C, !0), W = !0);
      }
    r(h()) ? ve !== o(C) && (W = !0) : (h() !== (c() ? null : o(C)) || o(C) !== ve) && (h() === k && o(C) !== ve ? (h(o(C)), r(c()) || c(!1)) : Z(C, !!h()), W = !0), o(A) && (r(c()) ? o(A).indeterminate && (o(A).indeterminate = !1, W = !0) : !c() && o(A).indeterminate ? (o(A).indeterminate = !1, W = !0) : c() && !o(A).indeterminate && (o(A).indeterminate = !0, Z(C, !1), W = !0)), k = h(), B = r(d()) ? [] : [...d()], ve = o(C), W && o(S) && o(S).handleChange();
  });
  const q = se("SMUI:generic:input:mount"), F = se("SMUI:generic:input:unmount"), O = se("SMUI:checkbox:mount"), G = se("SMUI:checkbox:unmount");
  st(() => {
    if (o(A) == null)
      throw new Error("Checkbox is not defined.");
    o(A).indeterminate = !r(c()) && c(), Z(
      S,
      new Fp({
        addClass: z,
        forceLayout: () => oe().offsetWidth,
        hasNativeControl: () => !0,
        isAttachedToDOM: () => !!oe().parentNode,
        isChecked: () => o(C),
        isIndeterminate: () => r(c()) ? !1 : c(),
        removeClass: R,
        removeNativeControlAttr: fe,
        setNativeControlAttr: U,
        setNativeControlDisabled: (ne) => u(ne)
      }),
      !0
    );
    const W = {
      _smui_checkbox_accessor: !0,
      get element() {
        return oe();
      },
      get checked() {
        return o(C);
      },
      set checked(ne) {
        o(C) !== ne && Z(C, ne, !0);
      },
      get indeterminate() {
        return r(c()) ? !1 : c();
      },
      set indeterminate(ne) {
        c(ne);
      },
      activateRipple() {
        u() || Z(T, !0);
      },
      deactivateRipple() {
        Z(T, !1);
      }
    };
    return q && q(W), O && O(W), o(S).init(), () => {
      var ne;
      F && F(W), G && G(W), (ne = o(S)) == null || ne.destroy();
    };
  });
  function z(W) {
    b[W] || (b[W] = !0);
  }
  function R(W) {
    (!(W in b) || b[W]) && (b[W] = !1);
  }
  function w(W, ne) {
    I[W] != ne && (ne === "" || ne == null ? delete I[W] : I[W] = ne);
  }
  function U(W, ne) {
    y[W] !== ne && (y[W] = ne);
  }
  function fe(W) {
    (!(W in y) || y[W] != null) && (y[W] = void 0);
  }
  function Se() {
    return x && x.id;
  }
  function oe() {
    return E;
  }
  var Ce = { getId: Se, getElement: oe }, j = pb(), ie = (W) => {
    var ne;
    o(S) && o(S).handleAnimationEnd(), (ne = e.onanimationend) == null || ne.call(e, W);
  };
  Ge(j, (W, ne, Oe) => ({ class: W, style: ne, ...Oe, onanimationend: ie }), [
    () => Pe({
      "mdc-checkbox": !0,
      "mdc-checkbox--disabled": u(),
      "mdc-checkbox--touch": l(),
      "mdc-data-table__header-row-checkbox": P === "data-table" && K,
      "mdc-data-table__row-checkbox": P === "data-table" && !K,
      ...b,
      [a()]: !0
    }),
    () => Object.entries(I).map(([W, ne]) => `${W}: ${ne};`).concat([s()]).join(" "),
    () => ti(_, ["input$"])
  ]);
  var Y = be(j), re = (W) => {
    var ne;
    ze(oe(), "blur", W), (ne = e.input$onblur) == null || ne.call(e, W);
  }, _e = (W) => {
    var ne;
    ze(oe(), "focus", W), (ne = e.input$onfocus) == null || ne.call(e, W);
  };
  return Ge(
    Y,
    (W, ne, Oe, Ee) => ({
      class: W,
      type: "checkbox",
      ...x,
      disabled: u(),
      value: ne,
      "data-indeterminate": Oe,
      ...y,
      ...Ee,
      onblur: re,
      onfocus: _e
    }),
    [
      () => Pe({ "mdc-checkbox__native-control": !0, [g()]: !0 }),
      () => r(m()) ? f() : m(),
      () => !r(c()) && c() ? "true" : void 0,
      () => ut(_, "input$")
    ],
    void 0,
    void 0,
    !0
  ), xe(Y, (W) => Z(A, W), () => o(A)), Ue(Y, (W, ne) => X == null ? void 0 : X(W, ne), v), ii(() => Ff(Y, () => o(C), (W) => Z(C, W))), xe(j, (W) => E = W, () => E), Ue(j, (W, ne) => X == null ? void 0 : X(W, ne), i), Ue(j, (W, ne) => Zt == null ? void 0 : Zt(W, ne), () => ({
    unbounded: !0,
    addClass: z,
    removeClass: R,
    addStyle: w,
    active: o(T),
    eventTarget: o(A)
  })), L(t, j), Le(Ce);
}
var _b = /* @__PURE__ */ ge('<div style="display: flex; flex-direction: column;"></div>');
function yb(t, e) {
  we(e, !0);
  let n = p(e, "data", 19, () => []), r = p(e, "values", 31, () => Ae([]));
  var i = _b();
  hr(i, 21, n, Ei, (a, s) => {
    ab(a, {
      label: (l) => {
        var c = qt();
        De(() => ht(c, o(s).label)), L(l, c);
      },
      children: (l, c) => {
        bb(l, {
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
  }), L(t, i), Le();
}
var Ib = (t) => t.stopPropagation(), Eb = /* @__PURE__ */ ge('<div class="custom-menu svelte-58jwwf"><div class="menu-arrow svelte-58jwwf"></div> <h4 class="svelte-58jwwf"> </h4> <div class="custom-menu__content"><!></div> <!></div>'), Sb = /* @__PURE__ */ ge('<div class="filter-wrapper svelte-58jwwf"><!> <!></div>'), Ab = /* @__PURE__ */ ge('<div class="oscd-filters svelte-58jwwf"></div>');
function Cb(t, e) {
  we(e, !0);
  let n = p(e, "filters", 15), r = /* @__PURE__ */ pe(null), i = [], a = [];
  function s(v) {
    var g;
    if (!(v.value === void 0 || v.value === null || v.value === ""))
      switch (v.type) {
        case "text":
          return String(v.value);
        case "number":
          return String(v.value);
        case "select":
          const _ = (g = v.options) == null ? void 0 : g.find((A) => A.value === v.value);
          return _ ? _.label : String(v.value);
        case "multiselect":
          if (!Array.isArray(v.value) || v.value.length === 0) return;
          const E = v.value.map((A) => {
            var I;
            const b = (I = v.options) == null ? void 0 : I.find((y) => y.value === A);
            return b ? b.label : String(A);
          }), S = 1;
          return E.length <= S ? E.join(", ") : `${E.slice(0, S).join(", ")} +${E.length - S} more`;
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
    o(r) === v ? Z(r, null) : (Z(r, v, !0), a[v] = u(n()[v]));
  }
  function c() {
    Z(r, null), a[o(r)] = void 0;
  }
  function d(v) {
    var g;
    n(n().map((_, E) => E === v ? { ..._, value: a[v] } : _)), (g = e.onfiltersChanged) == null || g.call(e, [...n()]), Z(r, null);
  }
  function h(v) {
    var g;
    n(n().map((_, E) => E === v ? { ..._, value: void 0 } : _)), a[v] = void 0, (g = e.onfiltersChanged) == null || g.call(e, [...n()]), c();
  }
  function f(v) {
    i.some((_) => _ && _.contains(v.target)) || c();
  }
  st(() => {
    document.addEventListener("click", f);
  }), mn(() => {
    document.removeEventListener("click", f);
  }), Te(() => {
  });
  var m = Ab();
  hr(m, 23, n, (v) => v.key, (v, g, _) => {
    var E = Sb(), S = be(E);
    {
      let I = /* @__PURE__ */ me(() => s(o(g)));
      gb(S, {
        get label() {
          return o(g).label;
        },
        get value() {
          return o(I);
        },
        onOpen: () => l(o(_)),
        onRemove: () => h(o(_))
      });
    }
    var A = ye(S, 2);
    {
      var b = (I) => {
        var y = Eb();
        y.__click = [Ib];
        var T = ye(be(y), 2), x = be(T), C = ye(T, 2), P = be(C);
        {
          var K = (ve) => {
            fo(ve, {
              get label() {
                return o(g).label;
              },
              get placeholder() {
                return o(g).placeholder;
              },
              get type() {
                return o(g).type;
              },
              style: "width: 100%;",
              get value() {
                return a[o(_)];
              },
              set value(q) {
                a[o(_)] = q;
              }
            });
          }, k = (ve) => {
            var q = ee(), F = Q(q);
            {
              var O = (z) => {
                {
                  let R = /* @__PURE__ */ me(() => {
                    var w;
                    return (w = o(g)) == null ? void 0 : w.options;
                  });
                  zg(z, {
                    get label() {
                      return o(g).label;
                    },
                    get data() {
                      return o(R);
                    },
                    get value() {
                      return a[o(_)];
                    },
                    set value(w) {
                      a[o(_)] = w;
                    }
                  });
                }
              }, G = (z) => {
                var R = ee(), w = Q(R);
                {
                  var U = (Se) => {
                    {
                      let oe = /* @__PURE__ */ me(() => {
                        var Ce;
                        return (Ce = o(g)) == null ? void 0 : Ce.options;
                      });
                      yb(Se, {
                        get data() {
                          return o(oe);
                        },
                        get values() {
                          return a[o(_)];
                        },
                        set values(Ce) {
                          a[o(_)] = Ce;
                        }
                      });
                    }
                  }, fe = (Se) => {
                    var oe = ee(), Ce = Q(oe);
                    {
                      var j = (Y) => {
                        Mp(Y, {
                          get value() {
                            return a[o(_)];
                          },
                          set value(re) {
                            a[o(_)] = re;
                          }
                        });
                      }, ie = (Y) => {
                        var re = ee(), _e = Q(re);
                        {
                          var W = (ne) => {
                            Np(ne, {
                              get value() {
                                return a[o(_)];
                              },
                              set value(Oe) {
                                a[o(_)] = Oe;
                              }
                            });
                          };
                          ae(
                            _e,
                            (ne) => {
                              o(g).type === "datetime" && ne(W);
                            },
                            !0
                          );
                        }
                        L(Y, re);
                      };
                      ae(
                        Ce,
                        (Y) => {
                          o(g).type === "date" ? Y(j) : Y(ie, !1);
                        },
                        !0
                      );
                    }
                    L(Se, oe);
                  };
                  ae(
                    w,
                    (Se) => {
                      o(g).type === "multiselect" ? Se(U) : Se(fe, !1);
                    },
                    !0
                  );
                }
                L(z, R);
              };
              ae(
                F,
                (z) => {
                  o(g).type === "select" ? z(O) : z(G, !1);
                },
                !0
              );
            }
            L(ve, q);
          };
          ae(P, (ve) => {
            o(g).type === "text" || o(g).type === "number" ? ve(K) : ve(k, !1);
          });
        }
        var B = ye(C, 2);
        Cc(B, {
          variant: "unelevated",
          style: "background: var(--secondary); color: white; width: 100%;",
          onclick: () => d(o(_)),
          children: (ve, q) => {
            var F = qt("Apply");
            L(ve, F);
          },
          $$slots: { default: !0 }
        }), De(() => ht(x, `Filter by ${o(g).label ?? ""}`)), ul(2, y, () => jl, () => ({ y: 5, duration: 120 })), ul(1, y, () => jl, () => ({ y: -5, duration: 120 })), L(I, y);
      };
      ae(A, (I) => {
        o(r) === o(_) && I(b);
      });
    }
    xe(E, (I, y) => i[y] = I, (I) => i == null ? void 0 : i[I], () => [o(_)]), L(v, E);
  }), L(t, m), Le();
}
xn(["click"]);
var xb = (t, e) => e(), Tb = /* @__PURE__ */ ge('<button class="filter-tab__tabs__clear svelte-nj6sif">Clear Filters</button>'), wb = /* @__PURE__ */ ge('<div class="filter-tab svelte-nj6sif"><!> <div class="filter-tab__tabs svelte-nj6sif"><h4 style="all:unset; font-weight: bold; font-size: 1rem;">Filter by</h4> <!> <!></div></div>');
function Lb(t, e) {
  we(e, !0);
  let n = p(e, "filters", 15), r = p(e, "onFilterChange", 3, (S) => {
  }), i = p(e, "searchText", 15, ""), a = p(e, "searchLabel", 3, "Search"), s = p(e, "searchPlaceholder", 3, "Type to search..."), u = p(e, "onSearchInput", 3, () => {
  }), l = p(e, "searchDisabled", 3, !1), c = /* @__PURE__ */ me(() => n().some((S) => S.value !== void 0 && S.value !== null && S.value !== "")), d = () => {
    n(n().map((S) => ({ ...S, value: void 0 }))), r()(n());
  };
  var h = wb(), f = be(h);
  {
    var m = (S) => {
      dg(S, {
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
    ae(f, (S) => {
      l() || S(m);
    });
  }
  var v = ye(f, 2), g = ye(be(v), 2);
  Cb(g, {
    onfiltersChanged: (S) => r()(S),
    get filters() {
      return n();
    },
    set filters(S) {
      n(S);
    }
  });
  var _ = ye(g, 2);
  {
    var E = (S) => {
      var A = Tb();
      A.__click = [xb, d], L(S, A);
    };
    ae(_, (S) => {
      o(c) && S(E);
    });
  }
  L(t, h), Le();
}
xn(["click"]);
var Ob = /* @__PURE__ */ ge('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Rb(t, e) {
  we(e, !0);
  const [n, r] = Wn();
  let i = p(e, "use", 19, () => []), a = p(e, "class", 3, ""), s = p(e, "style", 3, ""), u = p(e, "indeterminate", 3, !1), l = p(e, "closed", 3, !1), c = p(e, "progress", 3, 0), d = p(e, "buffer", 3, void 0), h = /* @__PURE__ */ We(e, [
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
  ]), f, m = /* @__PURE__ */ pe(void 0), v = Ae({}), g = Ae({}), _ = Ae({}), E = Ae({}), S = Ae({}), A = se("SMUI:linear-progress:context"), b = se("SMUI:linear-progress:closed");
  Te(() => {
    b && Rn(b, l());
  }), Te(() => {
    o(m) && o(m).isDeterminate() !== !u() && o(m).setDeterminate(!u());
  }), Te(() => {
    o(m) && o(m).getProgress() !== c() && o(m).setProgress(c());
  }), Te(() => {
    o(m) && (d() == null ? o(m).setBuffer(1) : o(m).setBuffer(d()));
  }), Te(() => {
    o(m) && (l() ? o(m).close() : o(m).open());
  }), st(() => (Z(
    m,
    new kp({
      addClass: y,
      forceLayout: () => {
        B().getBoundingClientRect();
      },
      setBufferBarStyle: K,
      setPrimaryBarStyle: k,
      hasClass: I,
      removeAttribute: C,
      removeClass: T,
      setAttribute: x,
      setStyle: P,
      attachResizeObserver: (w) => {
        const U = window.ResizeObserver;
        if (U) {
          const fe = new U(w);
          return fe.observe(B()), fe;
        }
        return null;
      },
      getWidth: () => B().offsetWidth
    }),
    !0
  ), o(m).init(), () => {
    var w;
    (w = o(m)) == null || w.destroy();
  }));
  function I(w) {
    return w in v ? v[w] : B().classList.contains(w);
  }
  function y(w) {
    v[w] || (v[w] = !0);
  }
  function T(w) {
    (!(w in v) || v[w]) && (v[w] = !1);
  }
  function x(w, U) {
    g[w] !== U && (g[w] = U);
  }
  function C(w) {
    (!(w in g) || g[w] != null) && (g[w] = void 0);
  }
  function P(w, U) {
    _[w] != U && (U === "" || U == null ? delete _[w] : _[w] = U);
  }
  function K(w, U) {
    E[w] != U && (U === "" || U == null ? delete E[w] : E[w] = U);
  }
  function k(w, U) {
    S[w] != U && (U === "" || U == null ? delete S[w] : S[w] = U);
  }
  function B() {
    return f;
  }
  var ve = { getElement: B }, q = Ob(), F = (w) => {
    var U;
    o(m) && o(m).handleTransitionEnd(), (U = e.ontransitionend) == null || U.call(e, w);
  };
  Ge(
    q,
    (w, U) => ({
      class: w,
      style: U,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...g,
      ...h,
      ontransitionend: F
    }),
    [
      () => Pe({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": A === "data-table",
        ...v,
        [a()]: !0
      }),
      () => Object.entries(_).map(([w, U]) => `${w}: ${U};`).concat([s()]).join(" ")
    ]
  );
  var O = be(q), G = be(O), z = ye(O, 2);
  xe(q, (w) => f = w, () => f), Ue(q, (w, U) => X == null ? void 0 : X(w, U), i), De(
    (w, U) => {
      zt(G, w), zt(z, U);
    },
    [
      () => Object.entries(E).map(([w, U]) => `${w}: ${U};`).join(" "),
      () => Object.entries(S).map(([w, U]) => `${w}: ${U};`).join(" ")
    ]
  ), L(t, q);
  var R = Le(ve);
  return r(), R;
}
var Mb = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Db = /* @__PURE__ */ sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Hb = /* @__PURE__ */ ge('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Nb = (t, e) => e(), Pb = /* @__PURE__ */ ge('<input type="text" class="svelte-1mj71p3"/>'), Ub = (t, e) => e(), Fb = /* @__PURE__ */ ge('<input type="number" class="svelte-1mj71p3"/>'), kb = /* @__PURE__ */ ge("<!> <!>", 1), Bb = /* @__PURE__ */ ge("<!> <!>", 1), Vb = /* @__PURE__ */ ge('<div class="cell-actions svelte-1mj71p3"></div>'), Gb = /* @__PURE__ */ ge("<!> <!>", 1);
function ql(t, e) {
  we(e, !0);
  const n = () => Dn(g, "$sortColumn", a), r = () => Dn(_, "$sortDirection", a), i = () => Dn(v, "$filteredData", a), [a, s] = Wn();
  let u = p(e, "loadingDone", 15, !0), l = p(e, "label", 19, up), c = p(e, "columnDefs", 19, () => []), d = p(e, "rowData", 31, () => Ae([])), h = p(e, "rowActions", 19, () => []), f = p(e, "searchInputLabel", 3, "Search"), m = Ae({ name: "", color: "", number: "" }), v = Ut([]), g = Ut(null), _ = Ut(null), E = /* @__PURE__ */ me(() => c().some((I) => I.filter));
  e.store.store.subscribe((I) => {
    d([...I]), S();
  });
  function S() {
    let I = d().filter((y) => c().every((T) => {
      const x = m[T.field], C = T.filterValueGetter ? T.filterValueGetter(y) : y[T.field];
      return x ? T.filterType === "number" ? C == x : C.toString().toLowerCase().includes(x.toLowerCase()) : !0;
    }));
    I = A(I), v.set(I);
  }
  function A(I) {
    let y, T;
    return g.subscribe((x) => y = x), _.subscribe((x) => T = x), !y || !T ? I : I.sort((x, C) => {
      let P = x[y], K = C[y];
      return P == null && (P = ""), K == null && (K = ""), T === "asc" ? P.toString().localeCompare(K.toString()) : K.toString().localeCompare(P.toString());
    });
  }
  function b(I) {
    g.update((y) => {
      if (y === I)
        _.update((T) => T === "asc" ? "desc" : T === "desc" ? null : "asc");
      else
        return _.set("asc"), I;
      return I;
    }), S();
  }
  v.set(d()), jp(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (y) => {
      Rb(y, {
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
      var x = Gb(), C = Q(x);
      zp(C, {
        children: (K, k) => {
          var B = Bb(), ve = Q(B);
          Vs(ve, {
            class: "header-title-row",
            children: (O, G) => {
              var z = ee(), R = Q(z);
              hr(R, 17, c, Ei, (w, U) => {
                Ua(w, {
                  onclick: () => o(U).sortable && b(o(U).field),
                  get style() {
                    return o(U).headerStyle;
                  },
                  children: (fe, Se) => {
                    var oe = Hb(), Ce = be(oe), j = be(Ce), ie = be(j), Y = ye(j, 2);
                    {
                      var re = (_e) => {
                        var W = ee(), ne = Q(W);
                        {
                          var Oe = (Ee) => {
                            var Fe = ee(), Ze = Q(Fe);
                            {
                              var ct = (V) => {
                                var ue = Mb();
                                L(V, ue);
                              }, D = (V) => {
                                var ue = ee(), ke = Q(ue);
                                {
                                  var St = (At) => {
                                    var ln = Db();
                                    L(At, ln);
                                  };
                                  ae(
                                    ke,
                                    (At) => {
                                      r() === "desc" && At(St);
                                    },
                                    !0
                                  );
                                }
                                L(V, ue);
                              };
                              ae(Ze, (V) => {
                                r() === "asc" ? V(ct) : V(D, !1);
                              });
                            }
                            L(Ee, Fe);
                          };
                          ae(ne, (Ee) => {
                            n() === o(U).field && r() !== null && Ee(Oe);
                          });
                        }
                        L(_e, W);
                      };
                      ae(Y, (_e) => {
                        o(U).sortable && _e(re);
                      });
                    }
                    De(() => {
                      zt(oe, `min-width: ${o(U).minWidth ?? 0 ?? ""}`), ht(ie, o(U).headerName);
                    }), L(fe, oe);
                  },
                  $$slots: { default: !0 }
                });
              }), L(O, z);
            },
            $$slots: { default: !0 }
          });
          var q = ye(ve, 2);
          {
            var F = (O) => {
              Vs(O, {
                class: "header-filter-row",
                children: (G, z) => {
                  var R = ee(), w = Q(R);
                  hr(w, 17, c, Ei, (U, fe) => {
                    Ua(U, {
                      children: (Se, oe) => {
                        var Ce = ee(), j = Q(Ce);
                        {
                          var ie = (Y) => {
                            var re = kb(), _e = Q(re);
                            {
                              var W = (Ee) => {
                                var Fe = Pb();
                                Fe.__input = [Nb, S], De(() => Sr(Fe, "placeholder", `${f()} ${o(fe).headerName}`)), ha(Fe, () => m[o(fe).field], (Ze) => m[o(fe).field] = Ze), L(Ee, Fe);
                              };
                              ae(_e, (Ee) => {
                                o(fe).filterType === "text" && Ee(W);
                              });
                            }
                            var ne = ye(_e, 2);
                            {
                              var Oe = (Ee) => {
                                var Fe = Fb();
                                Fe.__input = [Ub, S], De(() => Sr(Fe, "placeholder", `${f()} ${o(fe).headerName}`)), ha(Fe, () => m[o(fe).field], (Ze) => m[o(fe).field] = Ze), L(Ee, Fe);
                              };
                              ae(ne, (Ee) => {
                                o(fe).filterType === "number" && Ee(Oe);
                              });
                            }
                            L(Y, re);
                          };
                          ae(j, (Y) => {
                            o(fe).filter && Y(ie);
                          });
                        }
                        L(Se, Ce);
                      },
                      $$slots: { default: !0 }
                    });
                  }), L(G, R);
                },
                $$slots: { default: !0 }
              });
            };
            ae(q, (O) => {
              o(E) && O(F);
            });
          }
          L(K, B);
        },
        $$slots: { default: !0 }
      });
      var P = ye(C, 2);
      Xp(P, {
        children: (K, k) => {
          var B = ee(), ve = Q(B);
          hr(ve, 1, i, Ei, (q, F) => {
            Vs(q, {
              children: (O, G) => {
                var z = ee(), R = Q(z);
                hr(R, 17, c, (w) => w.field, (w, U) => {
                  var fe = ee(), Se = Q(fe);
                  {
                    var oe = (j) => {
                      Ua(j, {
                        children: (ie, Y) => {
                          var re = Vb();
                          hr(re, 21, h, Ei, (_e, W) => {
                            var ne = ee(), Oe = Q(ne);
                            {
                              var Ee = (Ze) => {
                                as(Ze, {
                                  get content() {
                                    return o(W).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (ct, D) => {
                                    {
                                      let V = /* @__PURE__ */ me(() => o(W).disabled(o(F)));
                                      Rm(ct, {
                                        get iconComponent() {
                                          return o(W).iconComponent;
                                        },
                                        get iconStyles() {
                                          return o(W).iconStyles;
                                        },
                                        callback: () => o(W).callback(o(F)),
                                        get disabled() {
                                          return o(V);
                                        }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              }, Fe = (Ze) => {
                                as(Ze, {
                                  get content() {
                                    return o(W).tooltip;
                                  },
                                  hoverDelay: 500,
                                  children: (ct, D) => {
                                    {
                                      let V = /* @__PURE__ */ me(() => o(W).disabled(o(F)));
                                      xc(ct, {
                                        class: "button",
                                        variant: "raised",
                                        callback: () => o(W).callback(o(F)),
                                        get disabled() {
                                          return o(V);
                                        },
                                        children: (ue, ke) => {
                                          var St = ee(), At = Q(St);
                                          {
                                            var ln = (N) => {
                                              fp(N, { svgStyles: "margin: unset" });
                                            }, he = (N) => {
                                              var H = ee(), J = Q(H);
                                              {
                                                var Re = (it) => {
                                                  Uo(it, { svgStyles: "margin: unset" });
                                                }, ot = (it) => {
                                                  var Ct = ee(), kt = Q(Ct);
                                                  {
                                                    var lr = (vt) => {
                                                      mp(vt, { svgStyles: "margin: unset" });
                                                    }, dt = (vt) => {
                                                      var Dt = ee(), Hn = Q(Dt);
                                                      {
                                                        var di = (He) => {
                                                          pp(He, { svgStyles: "margin: unset" });
                                                        }, Nn = (He) => {
                                                          var $e = ee(), Je = Q($e);
                                                          {
                                                            var Lt = (Ke) => {
                                                              Ip(Ke, { svgStyles: "margin: unset" });
                                                            }, un = (Ke) => {
                                                              var gt = ee(), xt = Q(gt);
                                                              {
                                                                var Ye = (Bt) => {
                                                                  Sp(Bt, { svgStyles: "margin: unset" });
                                                                }, Tt = (Bt) => {
                                                                  var Wt = ee(), bt = Q(Wt);
                                                                  {
                                                                    var Ot = (pt) => {
                                                                      Cp(pt, { svgStyles: "margin: unset" });
                                                                    }, nn = (pt) => {
                                                                      _p(pt, { svgStyles: "margin: unset" });
                                                                    };
                                                                    ae(
                                                                      bt,
                                                                      (pt) => {
                                                                        o(W).icon === "delete" ? pt(Ot) : pt(nn, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  L(Bt, Wt);
                                                                };
                                                                ae(
                                                                  xt,
                                                                  (Bt) => {
                                                                    o(W).icon === "edit" ? Bt(Ye) : Bt(Tt, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              L(Ke, gt);
                                                            };
                                                            ae(
                                                              Je,
                                                              (Ke) => {
                                                                o(W).icon === "remove" ? Ke(Lt) : Ke(un, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          L(He, $e);
                                                        };
                                                        ae(
                                                          Hn,
                                                          (He) => {
                                                            o(W).icon === "find-in-page" ? He(di) : He(Nn, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      L(vt, Dt);
                                                    };
                                                    ae(
                                                      kt,
                                                      (vt) => {
                                                        o(W).icon === "download" ? vt(lr) : vt(dt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  L(it, Ct);
                                                };
                                                ae(
                                                  J,
                                                  (it) => {
                                                    o(W).icon === "cancel" ? it(Re) : it(ot, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              L(N, H);
                                            };
                                            ae(At, (N) => {
                                              o(W).icon === "add" ? N(ln) : N(he, !1);
                                            });
                                          }
                                          L(ue, St);
                                        },
                                        $$slots: { default: !0 }
                                      });
                                    }
                                  },
                                  $$slots: { default: !0 }
                                });
                              };
                              ae(Oe, (Ze) => {
                                o(W).iconComponent ? Ze(Ee) : Ze(Fe, !1);
                              });
                            }
                            L(_e, ne);
                          }), L(ie, re);
                        },
                        $$slots: { default: !0 }
                      });
                    }, Ce = (j) => {
                      Ua(j, {
                        get numeric() {
                          return o(U).numeric;
                        },
                        get style() {
                          return o(U).cellStyle;
                        },
                        children: (ie, Y) => {
                          var re = ee(), _e = Q(re);
                          {
                            var W = (Oe) => {
                              const Ee = /* @__PURE__ */ me(() => o(U).cellRenderer);
                              var Fe = ee(), Ze = Q(Fe);
                              Or(Ze, () => o(Ee), (ct, D) => {
                                D(ct, et(
                                  {
                                    get row() {
                                      return o(F);
                                    },
                                    get value() {
                                      return o(F)[o(U).field];
                                    },
                                    get col() {
                                      return o(U);
                                    }
                                  },
                                  () => o(U).cellRendererProps ?? {}
                                ));
                              }), L(Oe, Fe);
                            }, ne = (Oe) => {
                              var Ee = ee(), Fe = Q(Ee);
                              {
                                var Ze = (D) => {
                                  var V = qt();
                                  De((ue) => ht(V, ue), [
                                    () => o(U).valueFormatter(o(F)[o(U).field])
                                  ]), L(D, V);
                                }, ct = (D) => {
                                  var V = qt();
                                  De(() => ht(V, o(F)[o(U).field] ?? "")), L(D, V);
                                };
                                ae(
                                  Fe,
                                  (D) => {
                                    o(U).valueFormatter ? D(Ze) : D(ct, !1);
                                  },
                                  !0
                                );
                              }
                              L(Oe, Ee);
                            };
                            ae(_e, (Oe) => {
                              o(U).cellRenderer ? Oe(W) : Oe(ne, !1);
                            });
                          }
                          L(ie, re);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ae(Se, (j) => {
                      o(U).field === "actions" ? j(oe) : j(Ce, !1);
                    });
                  }
                  L(w, fe);
                }), L(O, z);
              },
              $$slots: { default: !0 }
            });
          }), L(K, B);
        },
        $$slots: { default: !0 }
      }), L(y, x);
    },
    $$slots: { progress: !0, default: !0 }
  }), Le(), s();
}
xn(["input"]);
function It(t) {
  return typeof t == "function";
}
function Fo(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Gs = Fo(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function ss(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var xa = function() {
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
            for (var u = Mt(s), l = u.next(); !l.done; l = u.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (g) {
            e = { error: g };
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
      if (It(d))
        try {
          d();
        } catch (g) {
          a = g instanceof Gs ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Mt(h), m = f.next(); !m.done; m = f.next()) {
            var v = m.value;
            try {
              zl(v);
            } catch (g) {
              a = a ?? [], g instanceof Gs ? a = Ar(Ar([], Bi(a)), Bi(g.errors)) : a.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            m && !m.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new Gs(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        zl(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && ss(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && ss(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Mc = xa.EMPTY;
function Dc(t) {
  return t instanceof xa || t && "closed" in t && It(t.remove) && It(t.add) && It(t.unsubscribe);
}
function zl(t) {
  It(t) ? t() : t.unsubscribe();
}
var jb = {
  Promise: void 0
}, qb = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Ar([t, e], Bi(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Hc(t) {
  qb.setTimeout(function() {
    throw t;
  });
}
function Wl() {
}
function Ka(t) {
  t();
}
var ko = function(t) {
  tt(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, Dc(n) && n.add(r)) : r.destination = Xb, r;
  }
  return e.create = function(n, r, i) {
    return new mo(n, r, i);
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
}(xa), zb = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        ka(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        ka(r);
      }
    else
      ka(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        ka(n);
      }
  }, t;
}(), mo = function(t) {
  tt(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, s;
    return It(n) || !n ? s = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : s = n, a.destination = new zb(s), a;
  }
  return e;
}(ko);
function ka(t) {
  Hc(t);
}
function Wb(t) {
  throw t;
}
var Xb = {
  closed: !0,
  next: Wl,
  error: Wb,
  complete: Wl
}, Bo = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Vo(t) {
  return t;
}
function Kb(t) {
  return t.length === 0 ? Vo : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var vn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Yb(e) ? e : new mo(e, n, r);
    return Ka(function() {
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
    return n = Xl(n), new n(function(i, a) {
      var s = new mo({
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
  }, t.prototype[Bo] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Kb(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Xl(e), new e(function(r, i) {
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
function Xl(t) {
  var e;
  return (e = t ?? jb.Promise) !== null && e !== void 0 ? e : Promise;
}
function Zb(t) {
  return t && It(t.next) && It(t.error) && It(t.complete);
}
function Yb(t) {
  return t && t instanceof ko || Zb(t) && Dc(t);
}
function Qb(t) {
  return It(t == null ? void 0 : t.lift);
}
function Tn(t) {
  return function(e) {
    if (Qb(e))
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
function Cn(t, e, n, r, i) {
  return new Jb(t, e, n, r, i);
}
var Jb = function(t) {
  tt(e, t);
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
}(ko), $b = Fo(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Nc = function(t) {
  tt(e, t);
  function e() {
    var n = t.call(this) || this;
    return n.closed = !1, n.currentObservers = null, n.observers = [], n.isStopped = !1, n.hasError = !1, n.thrownError = null, n;
  }
  return e.prototype.lift = function(n) {
    var r = new Kl(this, this);
    return r.operator = n, r;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new $b();
  }, e.prototype.next = function(n) {
    var r = this;
    Ka(function() {
      var i, a;
      if (r._throwIfClosed(), !r.isStopped) {
        r.currentObservers || (r.currentObservers = Array.from(r.observers));
        try {
          for (var s = Mt(r.currentObservers), u = s.next(); !u.done; u = s.next()) {
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
    Ka(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.hasError = r.isStopped = !0, r.thrownError = n;
        for (var i = r.observers; i.length; )
          i.shift().error(n);
      }
    });
  }, e.prototype.complete = function() {
    var n = this;
    Ka(function() {
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
    return a || s ? Mc : (this.currentObservers = null, u.push(n), new xa(function() {
      r.currentObservers = null, ss(u, n);
    }));
  }, e.prototype._checkFinalizedStatuses = function(n) {
    var r = this, i = r.hasError, a = r.thrownError, s = r.isStopped;
    i ? n.error(a) : s && n.complete();
  }, e.prototype.asObservable = function() {
    var n = new vn();
    return n.source = this, n;
  }, e.create = function(n, r) {
    return new Kl(n, r);
  }, e;
}(vn), Kl = function(t) {
  tt(e, t);
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
    return (i = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(n)) !== null && i !== void 0 ? i : Mc;
  }, e;
}(Nc), e_ = {
  now: function() {
    return Date.now();
  }
}, t_ = function(t) {
  tt(e, t);
  function e(n, r) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(n, r) {
    return this;
  }, e;
}(xa), Zl = {
  setInterval: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setInterval.apply(void 0, Ar([t, e], Bi(n)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, n_ = function(t) {
  tt(e, t);
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
    return i === void 0 && (i = 0), Zl.setInterval(n.flush.bind(n, this), i);
  }, e.prototype.recycleAsyncId = function(n, r, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return r;
    r != null && Zl.clearInterval(r);
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
      this.work = this.state = this.scheduler = null, this.pending = !1, ss(a, this), r != null && (this.id = this.recycleAsyncId(i, r, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(t_), Yl = function() {
  function t(e, n) {
    n === void 0 && (n = t.now), this.schedulerActionCtor = e, this.now = n;
  }
  return t.prototype.schedule = function(e, n, r) {
    return n === void 0 && (n = 0), new this.schedulerActionCtor(this, e).schedule(r, n);
  }, t.now = e_.now, t;
}(), r_ = function(t) {
  tt(e, t);
  function e(n, r) {
    r === void 0 && (r = Yl.now);
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
}(Yl), i_ = new r_(n_), a_ = new vn(function(t) {
  return t.complete();
});
function s_(t) {
  return t && It(t.schedule);
}
function o_(t) {
  return t[t.length - 1];
}
function l_(t) {
  return s_(o_(t)) ? t.pop() : void 0;
}
var Pc = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Uc(t) {
  return It(t == null ? void 0 : t.then);
}
function Fc(t) {
  return It(t[Bo]);
}
function kc(t) {
  return Symbol.asyncIterator && It(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Bc(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function u_() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Vc = u_();
function Gc(t) {
  return It(t == null ? void 0 : t[Vc]);
}
function jc(t) {
  return oh(this, arguments, function() {
    var n, r, i, a;
    return Ho(this, function(s) {
      switch (s.label) {
        case 0:
          n = t.getReader(), s.label = 1;
        case 1:
          s.trys.push([1, , 9, 10]), s.label = 2;
        case 2:
          return [4, xi(n.read())];
        case 3:
          return r = s.sent(), i = r.value, a = r.done, a ? [4, xi(void 0)] : [3, 5];
        case 4:
          return [2, s.sent()];
        case 5:
          return [4, xi(i)];
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
function qc(t) {
  return It(t == null ? void 0 : t.getReader);
}
function ui(t) {
  if (t instanceof vn)
    return t;
  if (t != null) {
    if (Fc(t))
      return c_(t);
    if (Pc(t))
      return d_(t);
    if (Uc(t))
      return f_(t);
    if (kc(t))
      return zc(t);
    if (Gc(t))
      return h_(t);
    if (qc(t))
      return v_(t);
  }
  throw Bc(t);
}
function c_(t) {
  return new vn(function(e) {
    var n = t[Bo]();
    if (It(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function d_(t) {
  return new vn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function f_(t) {
  return new vn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Hc);
  });
}
function h_(t) {
  return new vn(function(e) {
    var n, r;
    try {
      for (var i = Mt(t), a = i.next(); !a.done; a = i.next()) {
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
function zc(t) {
  return new vn(function(e) {
    m_(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function v_(t) {
  return zc(jc(t));
}
function m_(t, e) {
  var n, r, i, a;
  return Ju(this, void 0, void 0, function() {
    var s, u;
    return Ho(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = lh(t), l.label = 1;
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
function Jr(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Wc(t, e) {
  return e === void 0 && (e = 0), Tn(function(n, r) {
    n.subscribe(Cn(r, function(i) {
      return Jr(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return Jr(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return Jr(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function Xc(t, e) {
  return e === void 0 && (e = 0), Tn(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function g_(t, e) {
  return ui(t).pipe(Xc(e), Wc(e));
}
function p_(t, e) {
  return ui(t).pipe(Xc(e), Wc(e));
}
function b_(t, e) {
  return new vn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function __(t, e) {
  return new vn(function(n) {
    var r;
    return Jr(n, e, function() {
      r = t[Vc](), Jr(n, e, function() {
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
      return It(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Kc(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new vn(function(n) {
    Jr(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      Jr(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function y_(t, e) {
  return Kc(jc(t), e);
}
function I_(t, e) {
  if (t != null) {
    if (Fc(t))
      return g_(t, e);
    if (Pc(t))
      return b_(t, e);
    if (Uc(t))
      return p_(t, e);
    if (kc(t))
      return Kc(t, e);
    if (Gc(t))
      return __(t, e);
    if (qc(t))
      return y_(t, e);
  }
  throw Bc(t);
}
function Zc(t, e) {
  return e ? I_(t, e) : ui(t);
}
function Yc() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = l_(t);
  return Zc(t, n);
}
function Gn(t, e) {
  return Tn(function(n, r) {
    var i = 0;
    n.subscribe(Cn(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function E_(t, e, n, r, i, a, s, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, m = function(g) {
    return c < r ? v(g) : l.push(g);
  }, v = function(g) {
    c++;
    var _ = !1;
    ui(n(g, d++)).subscribe(Cn(e, function(E) {
      e.next(E);
    }, function() {
      _ = !0;
    }, void 0, function() {
      if (_)
        try {
          c--;
          for (var E = function() {
            var S = l.shift();
            s || v(S);
          }; l.length && c < r; )
            E();
          f();
        } catch (S) {
          e.error(S);
        }
    }));
  };
  return t.subscribe(Cn(e, m, function() {
    h = !0, f();
  })), function() {
  };
}
function go(t, e, n) {
  return n === void 0 && (n = 1 / 0), It(e) ? go(function(r, i) {
    return Gn(function(a, s) {
      return e(r, a, i, s);
    })(ui(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), Tn(function(r, i) {
    return E_(r, i, t, n);
  }));
}
function Ql(t, e) {
  return Tn(function(n, r) {
    var i = 0;
    n.subscribe(Cn(r, function(a) {
      return t.call(e, a, i++) && r.next(a);
    }));
  });
}
function Qc(t) {
  return Tn(function(e, n) {
    var r = null, i = !1, a;
    r = e.subscribe(Cn(n, void 0, void 0, function(s) {
      a = ui(t(s, Qc(t)(e))), r ? (r.unsubscribe(), r = null, a.subscribe(n)) : i = !0;
    })), i && (r.unsubscribe(), r = null, a.subscribe(n));
  });
}
function S_(t, e) {
  return It(e) ? go(t, e, 1) : go(t, 1);
}
function A_(t, e) {
  return e === void 0 && (e = i_), Tn(function(n, r) {
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
    n.subscribe(Cn(r, function(c) {
      a = c, s = e.now(), i || (i = e.schedule(l, t), r.add(i));
    }, function() {
      u(), r.complete();
    }, void 0, function() {
      a = i = null;
    }));
  });
}
function Ba(t) {
  return t <= 0 ? function() {
    return a_;
  } : Tn(function(e, n) {
    var r = 0;
    e.subscribe(Cn(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function C_(t, e) {
  return e === void 0 && (e = Vo), t = t ?? x_, Tn(function(n, r) {
    var i, a = !0;
    n.subscribe(Cn(r, function(s) {
      var u = e(s);
      (a || !t(i, u)) && (a = !1, i = u, r.next(s));
    }));
  });
}
function x_(t, e) {
  return t === e;
}
function Jl(t) {
  return Tn(function(e, n) {
    try {
      e.subscribe(n);
    } finally {
      n.add(t);
    }
  });
}
function $l(t, e) {
  return Tn(function(n, r) {
    var i = null, a = 0, s = !1, u = function() {
      return s && !i && r.complete();
    };
    n.subscribe(Cn(r, function(l) {
      i == null || i.unsubscribe();
      var c = 0, d = a++;
      ui(t(l, d)).subscribe(i = Cn(r, function(h) {
        return r.next(e ? e(l, h, d, c++) : h);
      }, function() {
        i = null, u();
      }));
    }, function() {
      s = !0, u();
    }));
  });
}
function _i(t, e, n) {
  var r = It(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? Tn(function(i, a) {
    var s;
    (s = r.subscribe) === null || s === void 0 || s.call(r);
    var u = !0;
    i.subscribe(Cn(a, function(l) {
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
  }) : Vo;
}
class T_ {
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
function Jc(t) {
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
var w_ = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, s = n.responseType;
    this.status = a ?? 0, this.responseType = s ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = Jc(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), os = Fo(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = Jc(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), L_ = function() {
  function t(e, n) {
    return os.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(os.prototype), t;
}();
function O_(t, e) {
  return ci({ method: "GET", url: t, headers: e });
}
function R_(t, e, n) {
  return ci({ method: "POST", url: t, body: e, headers: n });
}
function M_(t, e) {
  return ci({ method: "DELETE", url: t, headers: e });
}
function D_(t, e, n) {
  return ci({ method: "PUT", url: t, body: e, headers: n });
}
function H_(t, e, n) {
  return ci({ method: "PATCH", url: t, body: e, headers: n });
}
var N_ = Gn(function(t) {
  return t.response;
});
function P_(t, e) {
  return N_(ci({
    method: "GET",
    url: t,
    headers: e
  }));
}
var ci = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return F_(n);
  };
  return t.get = O_, t.post = R_, t.delete = M_, t.put = D_, t.patch = H_, t.getJSON = P_, t;
}(), U_ = "upload", eu = "download", js = "loadstart", qs = "progress", tu = "load";
function F_(t) {
  return new vn(function(e) {
    var n, r, i = de({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, s = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(O, G) {
          return c.set(G, O);
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
    var v = i.withCredentials, g = i.xsrfCookieName, _ = i.xsrfHeaderName;
    if ((v || !m) && g && _) {
      var E = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      E && (h[_] = E);
    }
    var S = k_(s, h), A = de(de({}, i), {
      url: l,
      headers: h,
      body: S
    }), b;
    b = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var I = t.progressSubscriber, y = t.includeDownloadProgress, T = y === void 0 ? !1 : y, x = t.includeUploadProgress, C = x === void 0 ? !1 : x, P = function(O, G) {
        b.addEventListener(O, function() {
          var z, R = G();
          (z = I == null ? void 0 : I.error) === null || z === void 0 || z.call(I, R), e.error(R);
        });
      };
      P("timeout", function() {
        return new L_(b, A);
      }), P("abort", function() {
        return new os("aborted", b, A);
      });
      var K = function(O, G) {
        return new w_(G, b, A, O + "_" + G.type);
      }, k = function(O, G, z) {
        O.addEventListener(G, function(R) {
          e.next(K(z, R));
        });
      };
      C && [js, qs, tu].forEach(function(O) {
        return k(b.upload, O, U_);
      }), I && [js, qs].forEach(function(O) {
        return b.upload.addEventListener(O, function(G) {
          var z;
          return (z = I == null ? void 0 : I.next) === null || z === void 0 ? void 0 : z.call(I, G);
        });
      }), T && [js, qs].forEach(function(O) {
        return k(b, O, eu);
      });
      var B = function(O) {
        var G = "ajax error" + (O ? " " + O : "");
        e.error(new os(G, b, A));
      };
      b.addEventListener("error", function(O) {
        var G;
        (G = I == null ? void 0 : I.error) === null || G === void 0 || G.call(I, O), B();
      }), b.addEventListener(tu, function(O) {
        var G, z, R = b.status;
        if (R < 400) {
          (G = I == null ? void 0 : I.complete) === null || G === void 0 || G.call(I);
          var w = void 0;
          try {
            w = K(eu, O);
          } catch (U) {
            e.error(U);
            return;
          }
          e.next(w), e.complete();
        } else
          (z = I == null ? void 0 : I.error) === null || z === void 0 || z.call(I, O), B(R);
      });
    }
    var ve = A.user, q = A.method, F = A.async;
    ve ? b.open(q, l, F, ve, A.password) : b.open(q, l, F), F && (b.timeout = A.timeout, b.responseType = A.responseType), "withCredentials" in b && (b.withCredentials = A.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && b.setRequestHeader(f, h[f]);
    return S ? b.send(S) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function k_(t, e) {
  var n;
  if (!t || typeof t == "string" || z_(t) || W_(t) || V_(t) || G_(t) || j_(t) || X_(t))
    return t;
  if (q_(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var B_ = Object.prototype.toString;
function Go(t, e) {
  return B_.call(t) === "[object " + e + "]";
}
function V_(t) {
  return Go(t, "ArrayBuffer");
}
function G_(t) {
  return Go(t, "File");
}
function j_(t) {
  return Go(t, "Blob");
}
function q_(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function z_(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function W_(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function X_(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
class K_ {
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
const Z_ = new K_("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Y_ = [Z_], Q_ = Y_[0].getUrl();
class $c {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Q_;
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
class J_ {
  constructor(e = new $c()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: s, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${$_(r)}` : ""}`,
      method: i,
      headers: a,
      body: s instanceof FormData ? s : JSON.stringify(s),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => Yc(n).pipe(
      Gn((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      S_(
        (r) => ci(r).pipe(
          Gn((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      Gn((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const jr = (t) => encodeURIComponent(`${t}`), $_ = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${jr(e)}=${jr(r)}`).join("&") : `${jr(e)}=${jr(n)}`
).join("&"), Va = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class ey extends J_ {
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Va(e, "id", "retrieveDataResourceByVersion"), Va(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", jr(e)).replace("{version}", jr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Va(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", jr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Va(e, "dataResourceSearch", "searchForResources");
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
class Ai {
  constructor() {
    this.endpoint = "/compas-scl-data-service";
  }
  static getInstance() {
    return Ai.instance || (Ai.instance = new Ai()), Ai.instance;
  }
  searchFiles(e) {
    return this.generateApiClient(this.endpoint).searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      Ql((r) => !!r || !!r.results),
      Gn((r) => r.results),
      Gn(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  getHistoryFiles(e) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceHistory({
      id: e
    }).pipe(
      Ql((r) => !!r || !!r.versions),
      Gn((r) => r.versions),
      Gn(
        (r) => r.map((i) => this.mapToFileSearchResult(i))
      )
    );
  }
  downloadSclData(e, n, r) {
    return this.generateApiClient(this.endpoint).retrieveDataResourceByVersion({
      id: e,
      version: r
    });
  }
  mapToFileSearchResult(e) {
    return new T_(
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
    const n = new $c({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new ey(n);
  }
}
var pr;
class nu {
  constructor() {
    Qe(this, pr, Ut([]));
  }
  get store() {
    return $(this, pr);
  }
  updateData(e) {
    $(this, pr).set(e);
  }
  addData(e) {
    $(this, pr).update((n) => [...n, e]);
  }
  removeData(e) {
    $(this, pr).update((n) => n.filter((r) => r.uuid !== e));
  }
  getData(e) {
    return Yu($(this, pr)).find((n) => n.uuid === e);
  }
}
pr = new WeakMap();
Uv({ en: om, de: Zv });
var ty = /* @__PURE__ */ ge("<h3> </h3>"), ny = /* @__PURE__ */ ge("<div><!></div>"), ry = /* @__PURE__ */ ge("<!> <!>", 1), iy = /* @__PURE__ */ ge("<div><!></div>"), ay = /* @__PURE__ */ ge('<div class="oscd-app"><div class="version-editor-container svelte-vqh57v"><!> <div class="search-filter svelte-vqh57v"><!></div> <div class="table-container svelte-vqh57v"><!></div></div></div>');
function sy(t, e) {
  we(e, !0);
  const n = () => Dn(Pv, "$_", r), [r, i] = Wn(), a = Ai.getInstance();
  let s = /* @__PURE__ */ pe(void 0);
  const u = new Nc(), l = u.pipe(
    A_(150),
    Gn(() => y(o(b))),
    C_((O, G) => JSON.stringify(O) === JSON.stringify(G)),
    _i(() => {
      Z(h, !1);
    }),
    $l((O) => a.searchFiles(O).pipe(
      _i((G) => {
        [...G], c().updateData(G);
      }),
      Jl(() => {
        Z(h, !0);
      })
    ))
  );
  let c = p(e, "dataStore", 19, () => new nu()), d = p(e, "historyStore", 19, () => new nu()), h = /* @__PURE__ */ pe(!0), f = /* @__PURE__ */ pe(!1), m = /* @__PURE__ */ pe("");
  st(() => {
    const O = l.subscribe();
    return u.next(), () => O.unsubscribe();
  });
  function v(O) {
    return new Date(O).toLocaleDateString();
  }
  const g = {
    headerName: "",
    field: "actions",
    numeric: !1,
    filter: !1,
    filterType: "text",
    minWidth: "100px",
    sortable: !1
  };
  let _ = /* @__PURE__ */ me(() => [
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
      valueFormatter: v
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    },
    g
  ]), E = /* @__PURE__ */ me(() => [
    ...o(_),
    {
      headerName: "Comment",
      field: "comment",
      numeric: !1,
      filter: !1,
      filterType: "text",
      sortable: !0
    }
  ]);
  const S = [
    {
      icon: "edit",
      tooltip: "Edit",
      callback: (O) => C(O),
      disabled: (O) => !O.available
    },
    {
      icon: "find-in-page",
      tooltip: "Find in page",
      callback: (O) => T(O),
      disabled: () => !1
    },
    {
      icon: "download",
      tooltip: "Download",
      callback: (O) => I(O),
      disabled: (O) => !O.available
    }
  ], A = [
    {
      icon: "download",
      tooltip: "Download",
      callback: (O) => I(O),
      disabled: (O) => !O.available
    }
  ];
  let b = /* @__PURE__ */ pe(Ae([
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
  function I(O) {
    console.log("Download file: ", O), a.downloadSclData(O.uuid, O.type, O.version).pipe(Ba(1), _i((G) => {
      const z = window.URL.createObjectURL(G), R = document.createElement("a");
      R.href = z, R.download = `${O.filename}.${O.type.toLowerCase()}`, R.style.display = "none", document.body.appendChild(R), R.click(), document.body.removeChild(R), window.URL.revokeObjectURL(z);
    })).subscribe();
  }
  function y(O) {
    const G = {
      uuid: null,
      filename: null,
      author: null,
      type: null,
      name: null,
      from: null,
      to: null
    };
    return O.forEach((z) => {
      if (z.key in G && z.type !== "date" && z.value)
        G[z.key] = z.value;
      else if (z.type === "date" && z.value) {
        const R = new Date(z.value);
        z.key === "from" ? G.from = R.toISOString() : z.key === "to" && (R.setHours(23, 59, 59, 999), G.to = R.toISOString());
      }
    }), o(m) && o(m).trim() !== "" && (G.filename = o(m).trim()), G;
  }
  function T(O) {
    Z(s, O, !0), a.getHistoryFiles(O.uuid).pipe(Ba(1), _i((G) => {
      Z(f, !0), [...G], d().updateData(G);
    })).subscribe();
  }
  function x(O) {
    console.log("Dialog closed with result: ", O), Z(f, !1);
  }
  function C(O) {
    if (!confirm(`Open the selected file?

 Please make sure you save all changes on your current project.`))
      return;
    let G = "";
    a.downloadSclData(O.uuid, O.type, O.version).pipe(
      Ba(1),
      _i((z) => {
        G = window.URL.createObjectURL(z);
      }),
      $l(() => Zc(fetch(G).then((z) => {
        if (z.status === 200)
          return z.text();
        throw new Error(`Failed to load ${O.filename}: ${z.status} ${z.statusText}`);
      }))),
      Ba(1),
      Qc((z) => (alert(z), console.error(z), Yc(void 0))),
      _i((z) => {
        var U;
        if (!z)
          return;
        const R = O.filename, w = new DOMParser().parseFromString(z, "application/xml");
        (U = window.document.getElementsByTagName("open-scd")[0]) == null || U.dispatchEvent(new CustomEvent("open-doc", {
          bubbles: !0,
          composed: !0,
          detail: { localFile: !1, doc: w, docName: R }
        }));
      }),
      Jl(() => G && window.URL.revokeObjectURL(G))
    ).subscribe();
  }
  var P = ay(), K = be(P), k = be(K);
  ip(k, {
    onClose: x,
    get open() {
      return o(f);
    },
    set open(R) {
      Z(f, R, !0);
    },
    title: (R) => {
      var w = ty(), U = be(w);
      De((fe) => ht(U, fe), [
        () => {
          var fe;
          return n()("versionHistory.title", { values: { filename: (fe = o(s)) == null ? void 0 : fe.filename } });
        }
      ]), L(R, w);
    },
    content: (R) => {
      var w = ny(), U = be(w);
      {
        let fe = /* @__PURE__ */ me(() => n()("search"));
        ql(U, {
          get columnDefs() {
            return o(E);
          },
          get store() {
            return d();
          },
          get loadingDone() {
            return o(h);
          },
          get rowActions() {
            return A;
          },
          get searchInputLabel() {
            return o(fe);
          }
        });
      }
      L(R, w);
    },
    actions: (R) => {
      var w = iy(), U = be(w);
      xc(U, {
        callback: x,
        variant: "raised",
        children: (fe, Se) => {
          var oe = ry(), Ce = Q(oe);
          Uo(Ce, {});
          var j = ye(Ce, 2);
          ym(j, {
            children: (ie, Y) => {
              var re = qt();
              De((_e) => ht(re, _e), [() => n()("done")]), L(ie, re);
            },
            $$slots: { default: !0 }
          }), L(fe, oe);
        },
        $$slots: { default: !0 }
      }), L(R, w);
    },
    $$slots: { title: !0, content: !0, actions: !0 }
  });
  var B = ye(k, 2), ve = be(B);
  Lb(ve, {
    searchLabel: "Search file name...",
    onFilterChange: () => u.next(null),
    onSearchInput: () => u.next(null),
    get filters() {
      return o(b);
    },
    set filters(O) {
      Z(b, O, !0);
    },
    get searchText() {
      return o(m);
    },
    set searchText(O) {
      Z(m, O, !0);
    }
  });
  var q = ye(B, 2), F = be(q);
  {
    let O = /* @__PURE__ */ me(() => n()("search"));
    ql(F, {
      get columnDefs() {
        return o(_);
      },
      get store() {
        return c();
      },
      get loadingDone() {
        return o(h);
      },
      get rowActions() {
        return S;
      },
      get searchInputLabel() {
        return o(O);
      }
    });
  }
  L(t, P), Le(), i();
}
const ed = "version-editor", td = "0.0.1";
var oy = /* @__PURE__ */ ge('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function ly(t, e) {
  we(e, !0);
  let n = p(e, "dev", 3, !1);
  var r = oy(), i = Q(r);
  {
    var a = (l) => {
      sy(l, {});
    };
    ae(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var s = ye(i, 2), u = ye(s, 2);
  De(() => {
    sl(s, ed), sl(u, td);
  }), L(t, r), Le();
}
var Di;
class hy extends HTMLElement {
  constructor() {
    super();
    Qe(this, Di);
    Me(this, Di, /* @__PURE__ */ pe(Ae({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return o($(this, Di));
  }
  set props(n) {
    Z($(this, Di), n, !0);
  }
  connectedCallback() {
    var r;
    this.attachShadow({ mode: "open" }), this.props.doc = this._doc, this.props.editCount = this.editCount, If(ly, { target: this.shadowRoot, props: this.props });
    const n = uy();
    (r = this.shadowRoot) == null || r.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.props.doc = n;
  }
  set editCount(n) {
    this.props.editCount = n;
  }
}
Di = new WeakMap();
function uy() {
  const t = `${ed}-v${td}-style`, e = cy(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function cy() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  hy as default
};
