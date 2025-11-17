var md = Object.defineProperty;
var Xs = (t) => {
  throw TypeError(t);
};
var pd = (t, e, n) => e in t ? md(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var fi = (t, e, n) => pd(t, typeof e != "symbol" ? e + "" : e, n), So = (t, e, n) => e.has(t) || Xs("Cannot " + n);
var $ = (t, e, n) => (So(t, e, "read from private field"), n ? n.call(t) : e.get(t)), $e = (t, e, n) => e.has(t) ? Xs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), Ne = (t, e, n, r) => (So(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Vt = (t, e, n) => (So(t, e, "access private method"), n);
const gd = "5";
var au;
typeof window < "u" && ((au = window.__svelte ?? (window.__svelte = {})).v ?? (au.v = /* @__PURE__ */ new Set())).add(gd);
const ro = 1, io = 2, ou = 4, bd = 8, yd = 16, Id = 1, _d = 2, Ed = 4, Ad = 8, Cd = 16, Sd = 1, xd = 2, Mt = Symbol(), Td = "http://www.w3.org/1999/xhtml", wd = "http://www.w3.org/2000/svg", Ld = "@attach", su = !1;
var ao = Array.isArray, Od = Array.prototype.indexOf, ps = Array.from, Wa = Object.defineProperty, Ir = Object.getOwnPropertyDescriptor, lu = Object.getOwnPropertyDescriptors, Rd = Object.prototype, Md = Array.prototype, gs = Object.getPrototypeOf, Ys = Object.isExtensible;
function $i(t) {
  return typeof t == "function";
}
const be = () => {
};
function uu(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function cu() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const $t = 2, bs = 4, ys = 8, ri = 16, or = 32, ii = 64, Is = 128, Cn = 256, Ka = 512, qt = 1024, mn = 2048, Sr = 4096, Pn = 8192, ai = 16384, _s = 32768, oi = 65536, Zs = 1 << 17, Dd = 1 << 18, ji = 1 << 19, Pd = 1 << 20, qo = 1 << 21, oo = 1 << 22, Qr = 1 << 23, qn = Symbol("$state"), du = Symbol("legacy props"), Nd = Symbol(""), gi = new class extends Error {
  constructor() {
    super(...arguments);
    fi(this, "name", "StaleReactionError");
    fi(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Hd() {
  throw new Error("https://svelte.dev/e/invalid_default_snippet");
}
function Es(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ud() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Fd(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bd() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function kd(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vd() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gd(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function jd() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function qd() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Wd() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Kd() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function zd() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Xd() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Yd = !1;
function fu(t) {
  return t === this.v;
}
function As(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function hu(t) {
  return !As(t, this.v);
}
let qi = !1, Zd = !1;
function Qd() {
  qi = !0;
}
let lt = null;
function Ri(t) {
  lt = t;
}
function oe(t) {
  return (
    /** @type {T} */
    vu().get(t)
  );
}
function ee(t, e) {
  return vu().set(t, e), e;
}
function Me(t, e = !1, n) {
  lt = {
    p: lt,
    c: null,
    e: null,
    s: t,
    x: null,
    l: qi && !e ? { s: null, u: null, $: [] } : null
  };
}
function De(t) {
  var e = (
    /** @type {ComponentContext} */
    lt
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      Ou(r);
  }
  return t !== void 0 && (e.x = t), lt = e.p, t ?? /** @type {T} */
  {};
}
function Ia() {
  return !qi || lt !== null && lt.l === null;
}
function vu(t) {
  return lt === null && Es(), lt.c ?? (lt.c = new Map(Jd(lt) || void 0));
}
function Jd(t) {
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
function mu() {
  var t = qr;
  qr = [], uu(t);
}
function Cr(t) {
  if (qr.length === 0 && !ua) {
    var e = qr;
    queueMicrotask(() => {
      e === qr && mu();
    });
  }
  qr.push(t);
}
function $d() {
  for (; qr.length > 0; )
    mu();
}
const ef = /* @__PURE__ */ new WeakMap();
function pu(t) {
  var e = Ve;
  if (e === null)
    return ke.f |= Qr, t;
  if (e.f & _s)
    Mi(t, e);
  else {
    if (!(e.f & Is))
      throw !e.parent && t instanceof Error && gu(t), t;
    e.b.error(t);
  }
}
function Mi(t, e) {
  for (; e !== null; ) {
    if (e.f & Is)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && gu(t), t;
}
function gu(t) {
  const e = ef.get(t);
  e && (Wa(t, "message", {
    value: e.message
  }), Wa(t, "stack", {
    value: e.stack
  }));
}
const La = /* @__PURE__ */ new Set();
let nt = null, Fa = null, Ut = null, Wo = /* @__PURE__ */ new Set(), Gn = [], so = null, Ko = !1, ua = !1;
var xi, Ti, Kr, ga, wi, Li, zr, Oi, ba, ya, Sn, zo, Ba, Xo;
const eo = class eo {
  constructor() {
    $e(this, Sn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    fi(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    $e(this, xi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    $e(this, Ti, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    $e(this, Kr, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    $e(this, ga, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    $e(this, wi, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    $e(this, Li, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    $e(this, zr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    $e(this, Oi, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    $e(this, ba, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    $e(this, ya, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    fi(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    Gn = [], Fa = null, this.apply();
    for (const o of e)
      Vt(this, Sn, zo).call(this, o);
    if ($(this, Kr) === 0) {
      var n = Ut;
      Vt(this, Sn, Xo).call(this);
      var r = $(this, Li), i = $(this, zr);
      Ne(this, Li, []), Ne(this, zr, []), Ne(this, Oi, []), Fa = this, nt = null, Ut = n, Qs(r), Qs(i), Fa = null, (a = $(this, ga)) == null || a.resolve();
    } else
      Vt(this, Sn, Ba).call(this, $(this, Li)), Vt(this, Sn, Ba).call(this, $(this, zr)), Vt(this, Sn, Ba).call(this, $(this, Oi));
    Ut = null;
    for (const o of $(this, wi))
      fa(o);
    Ne(this, wi, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    $(this, xi).has(e) || $(this, xi).set(e, n), this.current.set(e, e.v), Ut == null || Ut.set(e, e.v);
  }
  activate() {
    nt = this;
  }
  deactivate() {
    nt = null, Ut = null;
  }
  flush() {
    if (Gn.length > 0) {
      if (this.activate(), bu(), nt !== null && nt !== this)
        return;
    } else $(this, Kr) === 0 && Vt(this, Sn, Xo).call(this);
    this.deactivate();
    for (const e of Wo)
      if (Wo.delete(e), e(), nt !== null)
        break;
  }
  increment() {
    Ne(this, Kr, $(this, Kr) + 1);
  }
  decrement() {
    Ne(this, Kr, $(this, Kr) - 1);
    for (const e of $(this, ba))
      Qt(e, mn), ti(e);
    for (const e of $(this, ya))
      Qt(e, Sr), ti(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    $(this, Ti).add(e);
  }
  settled() {
    return ($(this, ga) ?? Ne(this, ga, cu())).promise;
  }
  static ensure() {
    if (nt === null) {
      const e = nt = new eo();
      La.add(nt), ua || eo.enqueue(() => {
        nt === e && e.flush();
      });
    }
    return nt;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Cr(e);
  }
  apply() {
  }
};
xi = new WeakMap(), Ti = new WeakMap(), Kr = new WeakMap(), ga = new WeakMap(), wi = new WeakMap(), Li = new WeakMap(), zr = new WeakMap(), Oi = new WeakMap(), ba = new WeakMap(), ya = new WeakMap(), Sn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
zo = function(e) {
  var c;
  e.f ^= qt;
  for (var n = e.first; n !== null; ) {
    var r = n.f, i = (r & (or | ii)) !== 0, a = i && (r & qt) !== 0, o = a || (r & Pn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= qt : r & bs ? $(this, zr).push(n) : r & qt || (r & oo && ((c = n.b) != null && c.is_pending()) ? $(this, wi).push(n) : vo(n) && (n.f & ri && $(this, Oi).push(n), fa(n)));
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
Ba = function(e) {
  for (const n of e)
    (n.f & mn ? $(this, ba) : $(this, ya)).push(n), Qt(n, qt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Xo = function() {
  var e;
  for (const n of $(this, Ti))
    n();
  if ($(this, Ti).clear(), La.size > 1) {
    $(this, xi).clear();
    let n = !0;
    for (const r of La) {
      if (r === this) {
        n = !1;
        continue;
      }
      const i = [];
      for (const [o, u] of this.current) {
        if (r.current.has(o))
          if (n && u !== r.current.get(o))
            r.current.set(o, u);
          else
            continue;
        i.push(o);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((o) => !this.current.has(o));
      if (a.length > 0) {
        for (const o of i)
          yu(o, a);
        if (Gn.length > 0) {
          nt = r, r.apply();
          for (const o of Gn)
            Vt(e = r, Sn, zo).call(e, o);
          Gn = [], r.deactivate();
        }
      }
    }
    nt = null;
  }
  La.delete(this);
};
let ar = eo;
function tf(t) {
  var e = ua;
  ua = !0;
  try {
    for (var n; ; ) {
      if ($d(), Gn.length === 0 && (nt == null || nt.flush(), Gn.length === 0))
        return so = null, /** @type {T} */
        n;
      bu();
    }
  } finally {
    ua = e;
  }
}
function bu() {
  var t = Ai;
  Ko = !0;
  try {
    var e = 0;
    for (tl(!0); Gn.length > 0; ) {
      var n = ar.ensure();
      if (e++ > 1e3) {
        var r, i;
        nf();
      }
      n.process(Gn), _r.clear();
    }
  } finally {
    Ko = !1, tl(t), so = null;
  }
}
function nf() {
  try {
    Vd();
  } catch (t) {
    Mi(t, so);
  }
}
let nr = null;
function Qs(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (ai | Pn)) && vo(r) && (nr = [], fa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Du(r) : r.fn = null), (nr == null ? void 0 : nr.length) > 0)) {
        _r.clear();
        for (const i of nr)
          fa(i);
        nr = [];
      }
    }
    nr = null;
  }
}
function yu(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & $t ? yu(
        /** @type {Derived} */
        n,
        e
      ) : r & (oo | ri) && Iu(n, e) && (Qt(n, mn), ti(
        /** @type {Effect} */
        n
      ));
    }
}
function Iu(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & $t && Iu(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function ti(t) {
  for (var e = so = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Ko && e === Ve && n & ri)
      return;
    if (n & (ii | or)) {
      if (!(n & qt)) return;
      e.f ^= qt;
    }
  }
  Gn.push(e);
}
function rf(t) {
  let e = 0, n = ni(0), r;
  return () => {
    Ef() && (s(n), fo(() => (e === 0 && (r = wr(() => t(() => ca(n)))), e += 1, () => {
      Cr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, ca(n));
      });
    })));
  };
}
var af = oi | ji | Is;
function of(t, e, n) {
  new sf(t, e, n);
}
var On, En, ms, Bn, Xr, kn, An, an, Vn, mr, Yr, pr, Zr, gr, to, no, Jt, lf, uf, ka, Va, Yo;
class sf {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    $e(this, Jt);
    /** @type {Boundary | null} */
    fi(this, "parent");
    $e(this, On, !1);
    /** @type {TemplateNode} */
    $e(this, En);
    /** @type {TemplateNode | null} */
    $e(this, ms, null);
    /** @type {BoundaryProps} */
    $e(this, Bn);
    /** @type {((anchor: Node) => void)} */
    $e(this, Xr);
    /** @type {Effect} */
    $e(this, kn);
    /** @type {Effect | null} */
    $e(this, An, null);
    /** @type {Effect | null} */
    $e(this, an, null);
    /** @type {Effect | null} */
    $e(this, Vn, null);
    /** @type {DocumentFragment | null} */
    $e(this, mr, null);
    $e(this, Yr, 0);
    $e(this, pr, 0);
    $e(this, Zr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    $e(this, gr, null);
    $e(this, to, () => {
      $(this, gr) && Di($(this, gr), $(this, Yr));
    });
    $e(this, no, rf(() => (Ne(this, gr, ni($(this, Yr))), () => {
      Ne(this, gr, null);
    })));
    Ne(this, En, e), Ne(this, Bn, n), Ne(this, Xr, r), this.parent = /** @type {Effect} */
    Ve.b, Ne(this, On, !!$(this, Bn).pending), Ne(this, kn, Tr(() => {
      Ve.b = this;
      {
        try {
          Ne(this, An, Gt(() => r($(this, En))));
        } catch (i) {
          this.error(i);
        }
        $(this, pr) > 0 ? Vt(this, Jt, Va).call(this) : Ne(this, On, !1);
      }
    }, af));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return $(this, On) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!$(this, Bn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Vt(this, Jt, Yo).call(this, e), Ne(this, Yr, $(this, Yr) + e), Wo.add($(this, to));
  }
  get_effect_pending() {
    return $(this, no).call(this), s(
      /** @type {Source<number>} */
      $(this, gr)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = $(this, Bn).onerror;
    let r = $(this, Bn).failed;
    if ($(this, Zr) || !n && !r)
      throw e;
    $(this, An) && (Ft($(this, An)), Ne(this, An, null)), $(this, an) && (Ft($(this, an)), Ne(this, an, null)), $(this, Vn) && (Ft($(this, Vn)), Ne(this, Vn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        Xd();
        return;
      }
      i = !0, a && Kd(), ar.ensure(), Ne(this, Yr, 0), $(this, Vn) !== null && Er($(this, Vn), () => {
        Ne(this, Vn, null);
      }), Ne(this, On, this.has_pending_snippet()), Ne(this, An, Vt(this, Jt, ka).call(this, () => (Ne(this, Zr, !1), Gt(() => $(this, Xr).call(this, $(this, En)))))), $(this, pr) > 0 ? Vt(this, Jt, Va).call(this) : Ne(this, On, !1);
    };
    var u = ke;
    try {
      sn(null), a = !0, n == null || n(e, o), a = !1;
    } catch (l) {
      Mi(l, $(this, kn) && $(this, kn).parent);
    } finally {
      sn(u);
    }
    r && Cr(() => {
      Ne(this, Vn, Vt(this, Jt, ka).call(this, () => {
        Ne(this, Zr, !0);
        try {
          return Gt(() => {
            r(
              $(this, En),
              () => e,
              () => o
            );
          });
        } catch (l) {
          return Mi(
            l,
            /** @type {Effect} */
            $(this, kn).parent
          ), null;
        } finally {
          Ne(this, Zr, !1);
        }
      }));
    });
  }
}
On = new WeakMap(), En = new WeakMap(), ms = new WeakMap(), Bn = new WeakMap(), Xr = new WeakMap(), kn = new WeakMap(), An = new WeakMap(), an = new WeakMap(), Vn = new WeakMap(), mr = new WeakMap(), Yr = new WeakMap(), pr = new WeakMap(), Zr = new WeakMap(), gr = new WeakMap(), to = new WeakMap(), no = new WeakMap(), Jt = new WeakSet(), lf = function() {
  try {
    Ne(this, An, Gt(() => $(this, Xr).call(this, $(this, En))));
  } catch (e) {
    this.error(e);
  }
  Ne(this, On, !1);
}, uf = function() {
  const e = $(this, Bn).pending;
  e && (Ne(this, an, Gt(() => e($(this, En)))), ar.enqueue(() => {
    Ne(this, An, Vt(this, Jt, ka).call(this, () => (ar.ensure(), Gt(() => $(this, Xr).call(this, $(this, En)))))), $(this, pr) > 0 ? Vt(this, Jt, Va).call(this) : (Er(
      /** @type {Effect} */
      $(this, an),
      () => {
        Ne(this, an, null);
      }
    ), Ne(this, On, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
ka = function(e) {
  var n = Ve, r = ke, i = lt;
  Wn($(this, kn)), sn($(this, kn)), Ri($(this, kn).ctx);
  try {
    return e();
  } catch (a) {
    return pu(a), null;
  } finally {
    Wn(n), sn(r), Ri(i);
  }
}, Va = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    $(this, Bn).pending
  );
  $(this, An) !== null && (Ne(this, mr, document.createDocumentFragment()), cf($(this, An), $(this, mr))), $(this, an) === null && Ne(this, an, Gt(() => e($(this, En))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Yo = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Vt(n = this.parent, Jt, Yo).call(n, e);
    return;
  }
  Ne(this, pr, $(this, pr) + e), $(this, pr) === 0 && (Ne(this, On, !1), $(this, an) && Er($(this, an), () => {
    Ne(this, an, null);
  }), $(this, mr) && ($(this, En).before($(this, mr)), Ne(this, mr, null)), Cr(() => {
    ar.ensure().flush();
  }));
};
function cf(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _a(n)
    );
    e.append(n), n = i;
  }
}
function _u(t, e, n) {
  const r = Ia() ? lo : Cs;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var i = nt, a = (
    /** @type {Effect} */
    Ve
  ), o = df();
  Promise.all(e.map((u) => /* @__PURE__ */ ff(u))).then((u) => {
    o();
    try {
      n([...t.map(r), ...u]);
    } catch (l) {
      a.f & ai || Mi(l, a);
    }
    i == null || i.deactivate(), Zo();
  }).catch((u) => {
    Mi(u, a);
  });
}
function df() {
  var t = Ve, e = ke, n = lt, r = nt;
  return function() {
    Wn(t), sn(e), Ri(n), r == null || r.activate();
  };
}
function Zo() {
  Wn(null), sn(null), Ri(null);
}
// @__NO_SIDE_EFFECTS__
function lo(t) {
  var e = $t | mn, n = ke !== null && ke.f & $t ? (
    /** @type {Derived} */
    ke
  ) : null;
  return Ve === null || n !== null && n.f & Cn ? e |= Cn : Ve.f |= ji, {
    ctx: lt,
    deps: null,
    effects: null,
    equals: fu,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Mt
    ),
    wv: 0,
    parent: n ?? Ve,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ff(t, e) {
  let n = (
    /** @type {Effect | null} */
    Ve
  );
  n === null && Ud();
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
  ), o = !ke, u = /* @__PURE__ */ new Map();
  return Cf(() => {
    var f;
    var l = cu();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(Zo);
    } catch (v) {
      l.reject(v), Zo();
    }
    var c = (
      /** @type {Batch} */
      nt
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (c.increment(), (f = u.get(c)) == null || f.reject(gi), u.delete(c), u.set(c, l)));
    const h = (v, p = void 0) => {
      if (d || c.activate(), p)
        p !== gi && (a.f |= Qr, Di(a, p));
      else {
        a.f & Qr && (a.f ^= Qr), Di(a, v);
        for (const [g, I] of u) {
          if (u.delete(g), g === c) break;
          I.reject(gi);
        }
      }
      o && (r.update_pending_count(-1), d || c.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), co(() => {
    for (const l of u.values())
      l.reject(gi);
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
function ue(t) {
  const e = /* @__PURE__ */ lo(t);
  return Hu(e), e;
}
// @__NO_SIDE_EFFECTS__
function Cs(t) {
  const e = /* @__PURE__ */ lo(t);
  return e.equals = hu, e;
}
function Eu(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Ft(
        /** @type {Effect} */
        e[n]
      );
  }
}
function hf(t) {
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
function Ss(t) {
  var e, n = Ve;
  Wn(hf(t));
  try {
    Eu(t), e = ku(t);
  } finally {
    Wn(n);
  }
  return e;
}
function Au(t) {
  var e = Ss(t);
  if (t.equals(e) || (t.v = e, t.wv = Fu()), !si)
    if (Ut !== null)
      Ut.set(t, t.v);
    else {
      var n = (br || t.f & Cn) && t.deps !== null ? Sr : qt;
      Qt(t, n);
    }
}
const _r = /* @__PURE__ */ new Map();
function ni(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: fu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function we(t, e) {
  const n = ni(t);
  return Hu(n), n;
}
// @__NO_SIDE_EFFECTS__
function Cu(t, e = !1, n = !0) {
  var i;
  const r = ni(t);
  return e || (r.equals = hu), qi && n && lt !== null && lt.l !== null && ((i = lt.l).s ?? (i.s = [])).push(r), r;
}
function ae(t, e, n = !1) {
  ke !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Mn || ke.f & Zs) && Ia() && ke.f & ($t | ri | oo | Zs) && !(Zt != null && Zt.includes(t)) && Wd();
  let r = n ? Ee(e) : e;
  return Di(t, r);
}
function Di(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    si ? _r.set(t, e) : _r.set(t, n), t.v = e;
    var r = ar.ensure();
    r.capture(t, n), t.f & $t && (t.f & mn && Ss(
      /** @type {Derived} */
      t
    ), Qt(t, t.f & Cn ? Sr : qt)), t.wv = Fu(), Su(t, mn), Ia() && Ve !== null && Ve.f & qt && !(Ve.f & (or | ii)) && (_n === null ? Tf([t]) : _n.push(t));
  }
  return e;
}
function ca(t) {
  ae(t, t.v + 1);
}
function Su(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Ia(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], u = o.f;
      if (!(!r && o === Ve)) {
        var l = (u & mn) === 0;
        l && Qt(o, e), u & $t ? Su(
          /** @type {Derived} */
          o,
          Sr
        ) : l && (u & ri && nr !== null && nr.push(
          /** @type {Effect} */
          o
        ), ti(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function Ee(t) {
  if (typeof t != "object" || t === null || qn in t)
    return t;
  const e = gs(t);
  if (e !== Rd && e !== Md)
    return t;
  var n = /* @__PURE__ */ new Map(), r = ao(t), i = /* @__PURE__ */ we(0), a = Jr, o = (u) => {
    if (Jr === a)
      return u();
    var l = ke, c = Jr;
    sn(null), rl(a);
    var d = u();
    return sn(l), rl(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ we(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && jd();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ we(c.value);
          return n.set(l, h), h;
        }) : ae(d, c.value, !0), !0;
      },
      deleteProperty(u, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in u) {
            const d = o(() => /* @__PURE__ */ we(Mt));
            n.set(l, d), ca(i);
          }
        } else
          ae(c, Mt), ca(i);
        return !0;
      },
      get(u, l, c) {
        var v;
        if (l === qn)
          return t;
        var d = n.get(l), h = l in u;
        if (d === void 0 && (!h || (v = Ir(u, l)) != null && v.writable) && (d = o(() => {
          var p = Ee(h ? u[l] : Mt), g = /* @__PURE__ */ we(p);
          return g;
        }), n.set(l, d)), d !== void 0) {
          var f = s(d);
          return f === Mt ? void 0 : f;
        }
        return Reflect.get(u, l, c);
      },
      getOwnPropertyDescriptor(u, l) {
        var c = Reflect.getOwnPropertyDescriptor(u, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = s(d));
        } else if (c === void 0) {
          var h = n.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== Mt)
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
        if (l === qn)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== Mt || Reflect.has(u, l);
        if (c !== void 0 || Ve !== null && (!d || (f = Ir(u, l)) != null && f.writable)) {
          c === void 0 && (c = o(() => {
            var v = d ? Ee(u[l]) : Mt, p = /* @__PURE__ */ we(v);
            return p;
          }), n.set(l, c));
          var h = s(c);
          if (h === Mt)
            return !1;
        }
        return d;
      },
      set(u, l, c, d) {
        var C;
        var h = n.get(l), f = l in u;
        if (r && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var p = n.get(v + "");
            p !== void 0 ? ae(p, Mt) : v in u && (p = o(() => /* @__PURE__ */ we(Mt)), n.set(v + "", p));
          }
        if (h === void 0)
          (!f || (C = Ir(u, l)) != null && C.writable) && (h = o(() => /* @__PURE__ */ we(void 0)), ae(h, Ee(c)), n.set(l, h));
        else {
          f = h.v !== Mt;
          var g = o(() => Ee(c));
          ae(h, g);
        }
        var I = Reflect.getOwnPropertyDescriptor(u, l);
        if (I != null && I.set && I.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var E = (
              /** @type {Source<number>} */
              n.get("length")
            ), A = Number(l);
            Number.isInteger(A) && A >= E.v && ae(E, A + 1);
          }
          ca(i);
        }
        return !0;
      },
      ownKeys(u) {
        s(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== Mt;
        });
        for (var [c, d] of n)
          d.v !== Mt && !(c in u) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        qd();
      }
    }
  );
}
function Js(t) {
  try {
    if (t !== null && typeof t == "object" && qn in t)
      return t[qn];
  } catch {
  }
  return t;
}
function vf(t, e) {
  return Object.is(Js(t), Js(e));
}
var $s, xu, Tu, wu, Lu;
function mf() {
  if ($s === void 0) {
    $s = window, xu = document, Tu = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    wu = Ir(e, "firstChild").get, Lu = Ir(e, "nextSibling").get, Ys(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Ys(n) && (n.__t = void 0);
  }
}
function xr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Pi(t) {
  return wu.call(t);
}
// @__NO_SIDE_EFFECTS__
function _a(t) {
  return Lu.call(t);
}
function ye(t, e) {
  return /* @__PURE__ */ Pi(t);
}
function Z(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Pi(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ _a(n) : n;
  }
}
function Ie(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ _a(r);
  return r;
}
function pf(t) {
  t.textContent = "";
}
function xs() {
  return !1;
}
function gf(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Cr(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let el = !1;
function bf() {
  el || (el = !0, document.addEventListener(
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
function uo(t) {
  var e = ke, n = Ve;
  sn(null), Wn(null);
  try {
    return t();
  } finally {
    sn(e), Wn(n);
  }
}
function yf(t, e, n, r = n) {
  t.addEventListener(e, () => uo(n));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), r(!0);
  } : t.__on_r = () => r(!0), bf();
}
function If(t) {
  Ve === null && ke === null && kd(), ke !== null && ke.f & Cn && Ve === null && Bd(), si && Fd();
}
function _f(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function sr(t, e, n, r = !0) {
  var i = Ve;
  i !== null && i.f & Pn && (t |= Pn);
  var a = {
    ctx: lt,
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
      fa(a), a.f |= _s;
    } catch (l) {
      throw Ft(a), l;
    }
  else e !== null && ti(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & ji) && (o = o.first), o !== null && (o.parent = i, i !== null && _f(o, i), ke !== null && ke.f & $t && !(t & ii))) {
      var u = (
        /** @type {Derived} */
        ke
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return a;
}
function Ef() {
  return ke !== null && !Mn;
}
function co(t) {
  const e = sr(ys, null, !1);
  return Qt(e, qt), e.teardown = t, e;
}
function Te(t) {
  If();
  var e = (
    /** @type {Effect} */
    Ve.f
  ), n = !ke && (e & or) !== 0 && (e & _s) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      lt
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return Ou(t);
}
function Ou(t) {
  return sr(bs | Pd, t, !1);
}
function Af(t) {
  ar.ensure();
  const e = sr(ii | ji, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Er(e, () => {
      Ft(e), r(void 0);
    }) : (Ft(e), r(void 0));
  });
}
function Ea(t) {
  return sr(bs, t, !1);
}
function Cf(t) {
  return sr(oo | ji, t, !0);
}
function fo(t, e = 0) {
  return sr(ys | e, t, !0);
}
function Fe(t, e = [], n = []) {
  _u(e, n, (r) => {
    sr(ys, () => t(...r.map(s)), !0);
  });
}
function Tr(t, e = 0) {
  var n = sr(ri | e, t, !0);
  return n;
}
function Gt(t, e = !0) {
  return sr(or | ji, t, !0, e);
}
function Ru(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = si, r = ke;
    nl(!0), sn(null);
    try {
      e.call(null);
    } finally {
      nl(n), sn(r);
    }
  }
}
function Mu(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && uo(() => {
      i.abort(gi);
    });
    var r = n.next;
    n.f & ii ? n.parent = null : Ft(n, e), n = r;
  }
}
function Sf(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & or || Ft(e), e = n;
  }
}
function Ft(t, e = !0) {
  var n = !1;
  (e || t.f & Dd) && t.nodes_start !== null && t.nodes_end !== null && (xf(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), Mu(t, e && !n), za(t, 0), Qt(t, ai);
  var r = t.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Ru(t);
  var i = t.parent;
  i !== null && i.first !== null && Du(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function xf(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _a(t)
    );
    t.remove(), t = n;
  }
}
function Du(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Er(t, e) {
  var n = [];
  Ts(t, n, !0), Pu(n, () => {
    Ft(t), e && e();
  });
}
function Pu(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function Ts(t, e, n) {
  if (!(t.f & Pn)) {
    if (t.f ^= Pn, t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || n) && e.push(o);
    for (var r = t.first; r !== null; ) {
      var i = r.next, a = (r.f & oi) !== 0 || (r.f & or) !== 0;
      Ts(r, e, a ? n : !1), r = i;
    }
  }
}
function ho(t) {
  Nu(t, !0);
}
function Nu(t, e) {
  if (t.f & Pn) {
    t.f ^= Pn, t.f & qt || (Qt(t, mn), ti(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & oi) !== 0 || (n.f & or) !== 0;
      Nu(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
let Ai = !1;
function tl(t) {
  Ai = t;
}
let si = !1;
function nl(t) {
  si = t;
}
let ke = null, Mn = !1;
function sn(t) {
  ke = t;
}
let Ve = null;
function Wn(t) {
  Ve = t;
}
let Zt = null;
function Hu(t) {
  ke !== null && (Zt === null ? Zt = [t] : Zt.push(t));
}
let Yt = null, fn = 0, _n = null;
function Tf(t) {
  _n = t;
}
let Uu = 1, da = 0, Jr = da;
function rl(t) {
  Jr = t;
}
let br = !1;
function Fu() {
  return ++Uu;
}
function vo(t) {
  var h;
  var e = t.f;
  if (e & mn)
    return !0;
  if (e & Sr) {
    var n = t.deps, r = (e & Cn) !== 0;
    if (n !== null) {
      var i, a, o = (e & Ka) !== 0, u = r && Ve !== null && !br, l = n.length;
      if ((o || u) && (Ve === null || !(Ve.f & ai))) {
        var c = (
          /** @type {Derived} */
          t
        ), d = c.parent;
        for (i = 0; i < l; i++)
          a = n[i], (o || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        o && (c.f ^= Ka), u && d !== null && !(d.f & Cn) && (c.f ^= Cn);
      }
      for (i = 0; i < l; i++)
        if (a = n[i], vo(
          /** @type {Derived} */
          a
        ) && Au(
          /** @type {Derived} */
          a
        ), a.wv > t.wv)
          return !0;
    }
    (!r || Ve !== null && !br) && Qt(t, qt);
  }
  return !1;
}
function Bu(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(Zt != null && Zt.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & $t ? Bu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (n ? Qt(a, mn) : a.f & qt && Qt(a, Sr), ti(
        /** @type {Effect} */
        a
      ));
    }
}
function ku(t) {
  var g;
  var e = Yt, n = fn, r = _n, i = ke, a = br, o = Zt, u = lt, l = Mn, c = Jr, d = t.f;
  Yt = /** @type {null | Value[]} */
  null, fn = 0, _n = null, br = (d & Cn) !== 0 && (Mn || !Ai || ke === null), ke = d & (or | ii) ? null : t, Zt = null, Ri(t.ctx), Mn = !1, Jr = ++da, t.ac !== null && (uo(() => {
    t.ac.abort(gi);
  }), t.ac = null);
  try {
    t.f |= qo;
    var h = (
      /** @type {Function} */
      t.fn
    ), f = h(), v = t.deps;
    if (Yt !== null) {
      var p;
      if (za(t, fn), v !== null && fn > 0)
        for (v.length = fn + Yt.length, p = 0; p < Yt.length; p++)
          v[fn + p] = Yt[p];
      else
        t.deps = v = Yt;
      if (!br || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & $t && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (p = fn; p < v.length; p++)
          ((g = v[p]).reactions ?? (g.reactions = [])).push(t);
    } else v !== null && fn < v.length && (za(t, fn), v.length = fn);
    if (Ia() && _n !== null && !Mn && v !== null && !(t.f & ($t | Sr | mn)))
      for (p = 0; p < /** @type {Source[]} */
      _n.length; p++)
        Bu(
          _n[p],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (da++, _n !== null && (r === null ? r = _n : r.push(.../** @type {Source[]} */
    _n))), t.f & Qr && (t.f ^= Qr), f;
  } catch (I) {
    return pu(I);
  } finally {
    t.f ^= qo, Yt = e, fn = n, _n = r, ke = i, br = a, Zt = o, Ri(u), Mn = l, Jr = c;
  }
}
function wf(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = Od.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & $t && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Yt === null || !Yt.includes(e)) && (Qt(e, Sr), e.f & (Cn | Ka) || (e.f ^= Ka), Eu(
    /** @type {Derived} **/
    e
  ), za(
    /** @type {Derived} **/
    e,
    0
  ));
}
function za(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      wf(t, n[r]);
}
function fa(t) {
  var e = t.f;
  if (!(e & ai)) {
    Qt(t, qt);
    var n = Ve, r = Ai;
    Ve = t, Ai = !0;
    try {
      e & ri ? Sf(t) : Mu(t), Ru(t);
      var i = ku(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Uu;
      var a;
      su && Zd && t.f & mn && t.deps;
    } finally {
      Ai = r, Ve = n;
    }
  }
}
async function mo() {
  await Promise.resolve(), tf();
}
function s(t) {
  var e = t.f, n = (e & $t) !== 0;
  if (ke !== null && !Mn) {
    var r = Ve !== null && (Ve.f & ai) !== 0;
    if (!r && !(Zt != null && Zt.includes(t))) {
      var i = ke.deps;
      if (ke.f & qo)
        t.rv < da && (t.rv = da, Yt === null && i !== null && i[fn] === t ? fn++ : Yt === null ? Yt = [t] : (!br || !Yt.includes(t)) && Yt.push(t));
      else {
        (ke.deps ?? (ke.deps = [])).push(t);
        var a = t.reactions;
        a === null ? t.reactions = [ke] : a.includes(ke) || a.push(ke);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var o = (
      /** @type {Derived} */
      t
    ), u = o.parent;
    u !== null && !(u.f & Cn) && (o.f ^= Cn);
  }
  if (si) {
    if (_r.has(t))
      return _r.get(t);
    if (n) {
      o = /** @type {Derived} */
      t;
      var l = o.v;
      return (!(o.f & qt) && o.reactions !== null || Vu(o)) && (l = Ss(o)), _r.set(o, l), l;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    t, Ut != null && Ut.has(o))
      return Ut.get(o);
    vo(o) && Au(o);
  }
  if (Ut != null && Ut.has(t))
    return Ut.get(t);
  if (t.f & Qr)
    throw t.v;
  return t.v;
}
function Vu(t) {
  if (t.v === Mt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (_r.has(e) || e.f & $t && Vu(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function wr(t) {
  var e = Mn;
  try {
    return Mn = !0, t();
  } finally {
    Mn = e;
  }
}
const Lf = -7169;
function Qt(t, e) {
  t.f = t.f & Lf | e;
}
function Of(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (qn in t)
      Qo(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && qn in n && Qo(n);
      }
  }
}
function Qo(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Qo(t[r], e);
      } catch {
      }
    const n = gs(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = lu(n);
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
const Gu = /* @__PURE__ */ new Set(), Jo = /* @__PURE__ */ new Set();
function ws(t, e, n, r = {}) {
  function i(a) {
    if (r.capture || aa.call(e, a), !a.cancelBubble)
      return uo(() => n == null ? void 0 : n.call(this, a));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Cr(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function Rf(t, e, n, r = {}) {
  var i = ws(e, t, n, r);
  return () => {
    t.removeEventListener(e, i, r);
  };
}
function Mf(t, e, n, r, i) {
  var a = { capture: r, passive: i }, o = ws(t, e, n, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && co(() => {
    e.removeEventListener(t, o, a);
  });
}
function li(t) {
  for (var e = 0; e < t.length; e++)
    Gu.add(t[e]);
  for (var n of Jo)
    n(t);
}
let il = null;
function aa(t) {
  var A;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((A = t.composedPath) == null ? void 0 : A.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  il = t;
  var o = 0, u = il === t && t.__root;
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
    l <= c && (o = l);
  }
  if (a = /** @type {Element} */
  i[o] || t.target, a !== e) {
    Wa(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = ke, h = Ve;
    sn(null), Wn(null);
    try {
      for (var f, v = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + r];
          if (g != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === a))
            if (ao(g)) {
              var [I, ...E] = g;
              I.apply(a, [t, ...E]);
            } else
              g.call(a, t);
        } catch (C) {
          f ? v.push(C) : f = C;
        }
        if (t.cancelBubble || p === e || p === null)
          break;
        a = p;
      }
      if (f) {
        for (let C of v)
          queueMicrotask(() => {
            throw C;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, sn(d), Wn(h);
    }
  }
}
function ju(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function Ni(t, e) {
  var n = (
    /** @type {Effect} */
    Ve
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function pe(t, e) {
  var n = (e & Sd) !== 0, r = (e & xd) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = ju(a ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Pi(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Tu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pi(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      Ni(u, l);
    } else
      Ni(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function Df(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, a;
  return () => {
    if (!a) {
      var o = (
        /** @type {DocumentFragment} */
        ju(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ Pi(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Pi(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Ni(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function ln(t, e) {
  return /* @__PURE__ */ Df(t, e, "svg");
}
function Wt(t = "") {
  {
    var e = xr(t + "");
    return Ni(e, e), e;
  }
}
function le() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = xr();
  return t.append(e, n), Ni(e, n), t;
}
function O(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Pf(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Nf = [
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
function Hf(t) {
  return Nf.includes(t);
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
const Bf = ["touchstart", "touchmove"];
function kf(t) {
  return Bf.includes(t);
}
function dt(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Vf(t, e) {
  return Gf(t, e);
}
const hi = /* @__PURE__ */ new Map();
function Gf(t, { target: e, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  mf();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!u.has(v)) {
        u.add(v);
        var p = kf(v);
        e.addEventListener(v, aa, { passive: p });
        var g = hi.get(v);
        g === void 0 ? (document.addEventListener(v, aa, { passive: p }), hi.set(v, 1)) : hi.set(v, g + 1);
      }
    }
  };
  l(ps(Gu)), Jo.add(l);
  var c = void 0, d = Af(() => {
    var h = n ?? e.appendChild(xr());
    return of(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          Me({});
          var v = (
            /** @type {ComponentContext} */
            lt
          );
          v.c = a;
        }
        i && (r.$$events = i), c = t(f, r) || {}, a && De();
      }
    ), () => {
      var p;
      for (var f of u) {
        e.removeEventListener(f, aa);
        var v = (
          /** @type {number} */
          hi.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, aa), hi.delete(f)) : hi.set(f, v);
      }
      Jo.delete(l), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return jf.set(c, d), c;
}
let jf = /* @__PURE__ */ new WeakMap();
function _e(t, e, ...n) {
  var r = t, i = be, a;
  Tr(() => {
    i !== (i = e()) && (a && (Ft(a), a = null), a = Gt(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, oi);
}
function at(t) {
  lt === null && Es(), qi && lt.l !== null ? qf(lt).m.push(t) : Te(() => {
    const e = wr(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Kn(t) {
  lt === null && Es(), at(() => () => wr(t));
}
function qf(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ce(t, e, n = !1) {
  var r = t, i = null, a = null, o = Mt, u = n ? oi : 0, l = !1;
  const c = (v, p = !0) => {
    l = !0, f(p, v);
  };
  var d = null;
  function h() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var v = o ? i : a, p = o ? a : i;
    v && ho(v), p && Er(p, () => {
      o ? a = null : i = null;
    });
  }
  const f = (v, p) => {
    if (o !== (o = v)) {
      var g = xs(), I = r;
      if (g && (d = document.createDocumentFragment(), d.append(I = xr())), o ? i ?? (i = p && Gt(() => p(I))) : a ?? (a = p && Gt(() => p(I))), g) {
        var E = (
          /** @type {Batch} */
          nt
        ), A = o ? i : a, C = o ? a : i;
        A && E.skipped_effects.delete(A), C && E.skipped_effects.add(C), E.add_callback(h);
      } else
        h();
    }
  };
  Tr(() => {
    l = !1, e(c), l || f(null, null);
  }, u);
}
function Ga(t, e) {
  return e;
}
function Wf(t, e, n) {
  for (var r = t.items, i = [], a = e.length, o = 0; o < a; o++)
    Ts(e[o].e, i, !0);
  var u = a > 0 && i.length === 0 && n !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    pf(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Fn(t, e[0].prev, e[a - 1].next);
  }
  Pu(i, () => {
    for (var c = 0; c < a; c++) {
      var d = e[c];
      u || (r.delete(d.k), Fn(t, d.prev, d.next)), Ft(d.e, !u);
    }
  });
}
function bi(t, e, n, r, i, a = null) {
  var o = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & ou) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      t
    );
    o = c.appendChild(xr());
  }
  var d = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Cs(() => {
    var E = n();
    return ao(E) ? E : E == null ? [] : ps(E);
  }), p, g;
  function I() {
    Kf(
      g,
      p,
      u,
      f,
      o,
      i,
      e,
      r,
      n
    ), a !== null && (p.length === 0 ? d ? ho(d) : d = Gt(() => a(o)) : d !== null && Er(d, () => {
      d = null;
    }));
  }
  Tr(() => {
    g ?? (g = /** @type {Effect} */
    Ve), p = /** @type {V[]} */
    s(v);
    var E = p.length;
    if (!(h && E === 0)) {
      h = E === 0;
      var A, C, b, _;
      if (xs()) {
        var S = /* @__PURE__ */ new Set(), T = (
          /** @type {Batch} */
          nt
        );
        for (C = 0; C < E; C += 1) {
          b = p[C], _ = r(b, C);
          var x = u.items.get(_) ?? f.get(_);
          x ? e & (ro | io) && qu(x, b, C, e) : (A = Wu(
            null,
            u,
            null,
            null,
            b,
            _,
            C,
            i,
            e,
            n,
            !0
          ), f.set(_, A)), S.add(_);
        }
        for (const [L, U] of u.items)
          S.has(L) || T.skipped_effects.add(U.e);
        T.add_callback(I);
      } else
        I();
      s(v);
    }
  });
}
function Kf(t, e, n, r, i, a, o, u, l) {
  var ne, N, y, w;
  var c = (o & bd) !== 0, d = (o & (ro | io)) !== 0, h = e.length, f = n.items, v = n.first, p = v, g, I = null, E, A = [], C = [], b, _, S, T;
  if (c)
    for (T = 0; T < h; T += 1)
      b = e[T], _ = u(b, T), S = f.get(_), S !== void 0 && ((ne = S.a) == null || ne.measure(), (E ?? (E = /* @__PURE__ */ new Set())).add(S));
  for (T = 0; T < h; T += 1) {
    if (b = e[T], _ = u(b, T), S = f.get(_), S === void 0) {
      var x = r.get(_);
      if (x !== void 0) {
        r.delete(_), f.set(_, x);
        var L = I ? I.next : p;
        Fn(n, I, x), Fn(n, x, L), xo(x, L, i), I = x;
      } else {
        var U = p ? (
          /** @type {TemplateNode} */
          p.e.nodes_start
        ) : i;
        I = Wu(
          U,
          n,
          I,
          I === null ? n.first : I.next,
          b,
          _,
          T,
          a,
          o,
          l
        );
      }
      f.set(_, I), A = [], C = [], p = I.next;
      continue;
    }
    if (d && qu(S, b, T, o), S.e.f & Pn && (ho(S.e), c && ((N = S.a) == null || N.unfix(), (E ?? (E = /* @__PURE__ */ new Set())).delete(S))), S !== p) {
      if (g !== void 0 && g.has(S)) {
        if (A.length < C.length) {
          var Y = C[0], B;
          I = Y.prev;
          var M = A[0], Q = A[A.length - 1];
          for (B = 0; B < A.length; B += 1)
            xo(A[B], Y, i);
          for (B = 0; B < C.length; B += 1)
            g.delete(C[B]);
          Fn(n, M.prev, Q.next), Fn(n, I, M), Fn(n, Q, Y), p = Y, I = Q, T -= 1, A = [], C = [];
        } else
          g.delete(S), xo(S, p, i), Fn(n, S.prev, S.next), Fn(n, S, I === null ? n.first : I.next), Fn(n, I, S), I = S;
        continue;
      }
      for (A = [], C = []; p !== null && p.k !== _; )
        p.e.f & Pn || (g ?? (g = /* @__PURE__ */ new Set())).add(p), C.push(p), p = p.next;
      if (p === null)
        continue;
      S = p;
    }
    A.push(S), I = S, p = S.next;
  }
  if (p !== null || g !== void 0) {
    for (var F = g === void 0 ? [] : ps(g); p !== null; )
      p.e.f & Pn || F.push(p), p = p.next;
    var k = F.length;
    if (k > 0) {
      var H = o & ou && h === 0 ? i : null;
      if (c) {
        for (T = 0; T < k; T += 1)
          (y = F[T].a) == null || y.measure();
        for (T = 0; T < k; T += 1)
          (w = F[T].a) == null || w.fix();
      }
      Wf(n, F, H);
    }
  }
  c && Cr(() => {
    var te;
    if (E !== void 0)
      for (S of E)
        (te = S.a) == null || te.apply();
  }), t.first = n.first && n.first.e, t.last = I && I.e;
  for (var W of r.values())
    Ft(W.e);
  r.clear();
}
function qu(t, e, n, r) {
  r & ro && Di(t.v, e), r & io ? Di(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Wu(t, e, n, r, i, a, o, u, l, c, d) {
  var h = (l & ro) !== 0, f = (l & yd) === 0, v = h ? f ? /* @__PURE__ */ Cu(i, !1, !1) : ni(i) : i, p = l & io ? ni(o) : o, g = {
    i: p,
    v,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (t === null) {
      var I = document.createDocumentFragment();
      I.append(t = xr());
    }
    return g.e = Gt(() => u(
      /** @type {Node} */
      t,
      v,
      p,
      c
    ), Yd), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? d || (e.first = g) : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
  }
}
function xo(t, e, n) {
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
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ _a(a)
    );
    i.before(a), a = o;
  }
}
function Fn(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function Lr(t, e, n) {
  var r = t, i, a, o = null, u = null;
  function l() {
    a && (Er(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = u, u = null;
  }
  Tr(() => {
    if (i !== (i = e())) {
      var c = xs();
      if (i) {
        var d = r;
        c && (o = document.createDocumentFragment(), o.append(d = xr()), a && nt.skipped_effects.add(a)), u = Gt(() => n(d, i));
      }
      c ? nt.add_callback(l) : l();
    }
  }, oi);
}
function al(t, e, n, r, i, a) {
  var o, u, l = null, c = (
    /** @type {TemplateNode} */
    t
  ), d;
  Tr(() => {
    const h = e() || null;
    var f = h === "svg" ? wd : null;
    h !== o && (d && (h === null ? Er(d, () => {
      d = null, u = null;
    }) : h === u ? ho(d) : Ft(d)), h && h !== u && (d = Gt(() => {
      if (l = f ? document.createElementNS(f, h) : document.createElement(h), Ni(l, l), r) {
        var v = (
          /** @type {TemplateNode} */
          l.appendChild(xr())
        );
        r(l, v);
      }
      Ve.nodes_end = l, c.before(l);
    })), o = h, o && (u = o));
  }, oi);
}
function Ue(t, e, n) {
  Ea(() => {
    var r = wr(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      fo(() => {
        var o = n();
        Of(o), i && As(a, o) && (a = o, r.update(o));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function zf(t, e) {
  var n = void 0, r;
  Tr(() => {
    n !== (n = e()) && (r && (Ft(r), r = null), n && (r = Gt(() => {
      Ea(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function Ku(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = Ku(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Xf() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = Ku(t)) && (r && (r += " "), r += e);
  return r;
}
function zu(t) {
  return typeof t == "object" ? Xf(t) : t ?? "";
}
const ol = [...` 	
\r\f \v\uFEFF`];
function Yf(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var u = o + a;
          (o === 0 || ol.includes(r[o - 1])) && (u === r.length || ol.includes(r[u])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(u + 1) : o = u;
        }
  }
  return r === "" ? null : r;
}
function sl(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var i in t) {
    var a = t[i];
    a != null && a !== "" && (r += " " + i + ": " + a + n);
  }
  return r;
}
function To(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Zf(t, e) {
  if (e) {
    var n = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(To)), i && l.push(...Object.keys(i).map(To));
      var c = 0, d = -1;
      const g = t.length;
      for (var h = 0; h < g; h++) {
        var f = t[h];
        if (u ? f === "/" && t[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && t[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? o++ : f === ")" && o--, !u && a === !1 && o === 0) {
          if (f === ":" && d === -1)
            d = h;
          else if (f === ";" || h === g - 1) {
            if (d !== -1) {
              var v = To(t.substring(c, d).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var p = t.substring(c, h).trim();
                n += " " + p + ";";
              }
            }
            c = h + 1, d = -1;
          }
        }
      }
    }
    return r && (n += sl(r)), i && (n += sl(i, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Xu(t, e, n, r, i, a) {
  var o = t.__className;
  if (o !== n || o === void 0) {
    var u = Yf(n, r, a);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && t.classList.toggle(l, c);
    }
  return a;
}
function wo(t, e = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    e[i] !== a && (n[i] == null ? t.style.removeProperty(i) : t.style.setProperty(i, a, r));
  }
}
function en(t, e, n, r) {
  var i = t.__style;
  if (i !== e) {
    var a = Zf(e, r);
    a == null ? t.removeAttribute("style") : t.style.cssText = a, t.__style = e;
  } else r && (Array.isArray(r) ? (wo(t, n == null ? void 0 : n[0], r[0]), wo(t, n == null ? void 0 : n[1], r[1], "important")) : wo(t, n, r));
  return r;
}
function $o(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ao(e))
      return zd();
    for (var r of t.options)
      r.selected = e.includes(ll(r));
    return;
  }
  for (r of t.options) {
    var i = ll(r);
    if (vf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Qf(t) {
  var e = new MutationObserver(() => {
    $o(t, t.__value);
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
  }), co(() => {
    e.disconnect();
  });
}
function ll(t) {
  return "__value" in t ? t.__value : t.value;
}
const ea = Symbol("class"), ta = Symbol("style"), Yu = Symbol("is custom element"), Zu = Symbol("is html");
function ul(t, e) {
  var n = Ls(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function Jf(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function ha(t, e, n, r) {
  var i = Ls(t);
  i[e] !== (i[e] = n) && (e === "loading" && (t[Nd] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Qu(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function $f(t, e, n, r, i = !1, a = !1) {
  var o = Ls(t), u = o[Yu], l = !o[Zu], c = e || {}, d = t.tagName === "OPTION";
  for (var h in e)
    h in n || (n[h] = null);
  n.class ? n.class = zu(n.class) : n[ea] && (n.class = null), n[ta] && (n.style ?? (n.style = null));
  var f = Qu(t);
  for (const C in n) {
    let b = n[C];
    if (d && C === "value" && b == null) {
      t.value = t.__value = "", c[C] = b;
      continue;
    }
    if (C === "class") {
      var v = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Xu(t, v, b, r, e == null ? void 0 : e[ea], n[ea]), c[C] = b, c[ea] = n[ea];
      continue;
    }
    if (C === "style") {
      en(t, b, e == null ? void 0 : e[ta], n[ta]), c[C] = b, c[ta] = n[ta];
      continue;
    }
    var p = c[C];
    if (!(b === p && !(b === void 0 && t.hasAttribute(C)))) {
      c[C] = b;
      var g = C[0] + C[1];
      if (g !== "$$")
        if (g === "on") {
          const _ = {}, S = "$$" + C;
          let T = C.slice(2);
          var I = Hf(T);
          if (Pf(T) && (T = T.slice(0, -7), _.capture = !0), !I && p) {
            if (b != null) continue;
            t.removeEventListener(T, c[S], _), c[S] = null;
          }
          if (b != null)
            if (I)
              t[`__${T}`] = b, li([T]);
            else {
              let x = function(L) {
                c[C].call(this, L);
              };
              c[S] = ws(T, t, x, _);
            }
          else I && (t[`__${T}`] = void 0);
        } else if (C === "style")
          ha(t, C, b);
        else if (C === "autofocus")
          gf(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!u && (C === "__value" || C === "value" && b != null))
          t.value = t.__value = b;
        else if (C === "selected" && d)
          Jf(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var E = C;
          l || (E = Ff(E));
          var A = E === "defaultValue" || E === "defaultChecked";
          if (b == null && !u && !A)
            if (o[C] = null, E === "value" || E === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                t
              );
              const S = e === void 0;
              if (E === "value") {
                let T = _.defaultValue;
                _.removeAttribute(E), _.defaultValue = T, _.value = _.__value = S ? T : null;
              } else {
                let T = _.defaultChecked;
                _.removeAttribute(E), _.defaultChecked = T, _.checked = S ? T : !1;
              }
            } else
              t.removeAttribute(C);
          else A || f.includes(E) && (u || typeof b != "string") ? (t[E] = b, E in o && (o[E] = Mt)) : typeof b != "function" && ha(t, E, b);
        }
    }
  }
  return c;
}
function Be(t, e, n = [], r = [], i, a = !1, o = !1) {
  _u(n, r, (u) => {
    var l = void 0, c = {}, d = t.nodeName === "SELECT", h = !1;
    if (Tr(() => {
      var v = e(...u.map(s)), p = $f(
        t,
        l,
        v,
        i,
        a,
        o
      );
      h && d && "value" in v && $o(
        /** @type {HTMLSelectElement} */
        t,
        v.value
      );
      for (let I of Object.getOwnPropertySymbols(c))
        v[I] || Ft(c[I]);
      for (let I of Object.getOwnPropertySymbols(v)) {
        var g = v[I];
        I.description === Ld && (!l || g !== l[I]) && (c[I] && Ft(c[I]), c[I] = Gt(() => zf(t, () => g))), p[I] = g;
      }
      l = p;
    }), d) {
      var f = (
        /** @type {HTMLSelectElement} */
        t
      );
      Ea(() => {
        $o(
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
function Ls(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Yu]: t.nodeName.includes("-"),
      [Zu]: t.namespaceURI === Td
    })
  );
}
var cl = /* @__PURE__ */ new Map();
function Qu(t) {
  var e = t.getAttribute("is") || t.nodeName, n = cl.get(e);
  if (n) return n;
  cl.set(e, n = []);
  for (var r, i = t, a = Element.prototype; a !== i; ) {
    r = lu(i);
    for (var o in r)
      r[o].set && n.push(o);
    i = gs(i);
  }
  return n;
}
function va(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  yf(t, "input", async (i) => {
    var a = i ? t.defaultValue : t.value;
    if (a = Lo(t) ? Oo(a) : a, n(a), nt !== null && r.add(nt), await mo(), a !== (a = e())) {
      var o = t.selectionStart, u = t.selectionEnd, l = t.value.length;
      if (t.value = a ?? "", u !== null) {
        var c = t.value.length;
        o === u && u === l && c > l ? (t.selectionStart = c, t.selectionEnd = c) : (t.selectionStart = o, t.selectionEnd = Math.min(u, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  wr(e) == null && t.value && (n(Lo(t) ? Oo(t.value) : t.value), nt !== null && r.add(nt)), fo(() => {
    var i = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        Fa ?? nt
      );
      if (r.has(a))
        return;
    }
    Lo(t) && i === Oo(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function Lo(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Oo(t) {
  return t === "" ? null : +t;
}
function dl(t, e) {
  return t === e || (t == null ? void 0 : t[qn]) === e;
}
function Se(t = {}, e, n, r) {
  return Ea(() => {
    var i, a;
    return fo(() => {
      i = a, a = [], wr(() => {
        t !== n(...a) && (e(t, ...a), i && dl(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Cr(() => {
        a && dl(n(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
function Os(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), be;
  const r = wr(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const vi = [];
function eh(t, e) {
  return {
    subscribe: Ct(t, e).subscribe
  };
}
function Ct(t, e = be) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (As(t, u) && (t = u, n)) {
      const l = !vi.length;
      for (const c of r)
        c[1](), vi.push(c, t);
      if (l) {
        for (let c = 0; c < vi.length; c += 2)
          vi[c][0](vi[c + 1]);
        vi.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      t
    ));
  }
  function o(u, l = be) {
    const c = [u, l];
    return r.add(c), r.size === 1 && (n = e(i, a) || be), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function Wi(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return eh(n, (o, u) => {
    let l = !1;
    const c = [];
    let d = 0, h = be;
    const f = () => {
      if (d)
        return;
      h();
      const p = e(r ? c[0] : c, o, u);
      a ? o(p) : h = typeof p == "function" ? p : be;
    }, v = i.map(
      (p, g) => Os(
        p,
        (I) => {
          c[g] = I, d &= ~(1 << g), l && f();
        },
        () => {
          d |= 1 << g;
        }
      )
    );
    return l = !0, f(), function() {
      uu(v), h(), l = !1;
    };
  });
}
function Ju(t) {
  let e;
  return Os(t, (n) => e = n)(), e;
}
let Oa = !1, es = Symbol();
function Dt(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Cu(void 0),
    unsubscribe: be
  });
  if (r.store !== t && !(es in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = be;
    else {
      var i = !0;
      r.unsubscribe = Os(t, (a) => {
        i ? r.source.v = a : ae(r.source, a);
      }), i = !1;
    }
  return t && es in n ? Ju(t) : s(r.source);
}
function vn(t, e) {
  return t.set(e), e;
}
function xn() {
  const t = {};
  function e() {
    co(() => {
      for (var n in t)
        t[n].unsubscribe();
      Wa(t, es, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function th(t) {
  var e = Oa;
  try {
    return Oa = !1, [t(), Oa];
  } finally {
    Oa = e;
  }
}
const nh = {
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
function Ge(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    nh
  );
}
const rh = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if ($i(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let i = t.props[r];
      $i(i) && (i = i());
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
      if ($i(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Ir(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(t, e) {
    if (e === qn || e === du) return !1;
    for (let n of t.props)
      if ($i(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if ($i(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function rt(...t) {
  return new Proxy({ props: t }, rh);
}
function m(t, e, n, r) {
  var C;
  var i = !qi || (n & _d) !== 0, a = (n & Ad) !== 0, o = (n & Cd) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, u = o ? wr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), d;
  if (a) {
    var h = qn in t || du in t;
    d = ((C = Ir(t, e)) == null ? void 0 : C.set) ?? (h && e in t ? (b) => t[e] = b : void 0);
  }
  var f, v = !1;
  a ? [f, v] = th(() => (
    /** @type {V} */
    t[e]
  )) : f = /** @type {V} */
  t[e], f === void 0 && r !== void 0 && (f = c(), d && (i && Gd(), d(f)));
  var p;
  if (i ? p = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? c() : (l = !0, b);
  } : p = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b !== void 0 && (u = /** @type {V} */
    void 0), b === void 0 ? u : b;
  }, i && !(n & Ed))
    return p;
  if (d) {
    var g = t.$$legacy;
    return (
      /** @type {() => V} */
      function(b, _) {
        return arguments.length > 0 ? ((!i || !_ || g || v) && d(_ ? p() : b), b) : p();
      }
    );
  }
  var I = !1, E = (n & Id ? lo : Cs)(() => (I = !1, p()));
  a && s(E);
  var A = (
    /** @type {Effect} */
    Ve
  );
  return (
    /** @type {() => V} */
    function(b, _) {
      if (arguments.length > 0) {
        const S = _ ? s(E) : i && a ? Ee(b) : b;
        return ae(E, S), I = !0, u !== void 0 && (u = S), b;
      }
      return si && I || A.f & ai ? E.v : s(E);
    }
  );
}
function ih(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ah = function(e) {
  return oh(e) && !sh(e);
};
function oh(t) {
  return !!t && typeof t == "object";
}
function sh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || ch(t);
}
var lh = typeof Symbol == "function" && Symbol.for, uh = lh ? Symbol.for("react.element") : 60103;
function ch(t) {
  return t.$$typeof === uh;
}
function dh(t) {
  return Array.isArray(t) ? [] : {};
}
function ma(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Hi(dh(t), t, e) : t;
}
function fh(t, e, n) {
  return t.concat(e).map(function(r) {
    return ma(r, n);
  });
}
function hh(t, e) {
  if (!e.customMerge)
    return Hi;
  var n = e.customMerge(t);
  return typeof n == "function" ? n : Hi;
}
function vh(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function fl(t) {
  return Object.keys(t).concat(vh(t));
}
function $u(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function mh(t, e) {
  return $u(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function ph(t, e, n) {
  var r = {};
  return n.isMergeableObject(t) && fl(t).forEach(function(i) {
    r[i] = ma(t[i], n);
  }), fl(e).forEach(function(i) {
    mh(t, i) || ($u(t, i) && n.isMergeableObject(e[i]) ? r[i] = hh(i, n)(t[i], e[i], n) : r[i] = ma(e[i], n));
  }), r;
}
function Hi(t, e, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || fh, n.isMergeableObject = n.isMergeableObject || ah, n.cloneUnlessOtherwiseSpecified = ma;
  var r = Array.isArray(e), i = Array.isArray(t), a = r === i;
  return a ? r ? n.arrayMerge(t, e, n) : ph(t, e, n) : ma(e, n);
}
Hi.all = function(e, n) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(r, i) {
    return Hi(r, i, n);
  }, {});
};
var gh = Hi, bh = gh;
const yh = /* @__PURE__ */ ih(bh);
var ts = function(t, e) {
  return ts = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, ts(t, e);
};
function it(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ts(t, e);
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
function Ih(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function ec(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function u(d) {
      try {
        c(r.next(d));
      } catch (h) {
        o(h);
      }
    }
    function l(d) {
      try {
        c(r.throw(d));
      } catch (h) {
        o(h);
      }
    }
    function c(d) {
      d.done ? a(d.value) : i(d.value).then(u, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
}
function Rs(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = u(0), o.throw = u(1), o.return = u(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(c) {
    return function(d) {
      return l([c, d]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (n = 0)), n; ) try {
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
function Ui(t, e) {
  var n = typeof Symbol == "function" && t[Symbol.iterator];
  if (!n) return t;
  var r = n.call(t), i, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Ar(t, e, n) {
  if (n || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return t.concat(a || Array.prototype.slice.call(e));
}
function Ci(t) {
  return this instanceof Ci ? (this.v = t, this) : new Ci(t);
}
function _h(t, e, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(t, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), u("next"), u("throw"), u("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    return function(p) {
      return Promise.resolve(p).then(v, h);
    };
  }
  function u(v, p) {
    r[v] && (i[v] = function(g) {
      return new Promise(function(I, E) {
        a.push([v, g, I, E]) > 1 || l(v, g);
      });
    }, p && (i[v] = p(i[v])));
  }
  function l(v, p) {
    try {
      c(r[v](p));
    } catch (g) {
      f(a[0][3], g);
    }
  }
  function c(v) {
    v.value instanceof Ci ? Promise.resolve(v.value.v).then(d, h) : f(a[0][2], v);
  }
  function d(v) {
    l("next", v);
  }
  function h(v) {
    l("throw", v);
  }
  function f(v, p) {
    v(p), a.shift(), a.length && l(a[0][0], a[0][1]);
  }
}
function Eh(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], n;
  return e ? e.call(t) : (t = typeof Lt == "function" ? Lt(t) : t[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n);
  function r(a) {
    n[a] = t[a] && function(o) {
      return new Promise(function(u, l) {
        o = t[a](o), i(u, l, o.done, o.value);
      });
    };
  }
  function i(a, o, u, l) {
    Promise.resolve(l).then(function(c) {
      a({ value: c, done: u });
    }, o);
  }
}
function Ro(t, e) {
  var n = e && e.cache ? e.cache : Lh, r = e && e.serializer ? e.serializer : Th, i = e && e.strategy ? e.strategy : Sh;
  return i(t, {
    cache: n,
    serializer: r
  });
}
function Ah(t) {
  return t == null || typeof t == "number" || typeof t == "boolean";
}
function Ch(t, e, n, r) {
  var i = Ah(r) ? r : n(r), a = e.get(i);
  return typeof a > "u" && (a = t.call(this, r), e.set(i, a)), a;
}
function tc(t, e, n) {
  var r = Array.prototype.slice.call(arguments, 3), i = n(r), a = e.get(i);
  return typeof a > "u" && (a = t.apply(this, r), e.set(i, a)), a;
}
function nc(t, e, n, r, i) {
  return n.bind(e, t, r, i);
}
function Sh(t, e) {
  var n = t.length === 1 ? Ch : tc;
  return nc(t, this, n, e.cache.create(), e.serializer);
}
function xh(t, e) {
  return nc(t, this, tc, e.cache.create(), e.serializer);
}
var Th = function() {
  return JSON.stringify(arguments);
}, wh = (
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
), Lh = {
  create: function() {
    return new wh();
  }
}, Mo = {
  variadic: xh
}, Ye;
(function(t) {
  t[t.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", t[t.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", t[t.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", t[t.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", t[t.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", t[t.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", t[t.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", t[t.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", t[t.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", t[t.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", t[t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", t[t.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", t[t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", t[t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", t[t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", t[t.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", t[t.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", t[t.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", t[t.INVALID_TAG = 23] = "INVALID_TAG", t[t.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", t[t.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", t[t.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(Ye || (Ye = {}));
var vt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.argument = 1] = "argument", t[t.number = 2] = "number", t[t.date = 3] = "date", t[t.time = 4] = "time", t[t.select = 5] = "select", t[t.plural = 6] = "plural", t[t.pound = 7] = "pound", t[t.tag = 8] = "tag";
})(vt || (vt = {}));
var Fi;
(function(t) {
  t[t.number = 0] = "number", t[t.dateTime = 1] = "dateTime";
})(Fi || (Fi = {}));
function hl(t) {
  return t.type === vt.literal;
}
function Oh(t) {
  return t.type === vt.argument;
}
function rc(t) {
  return t.type === vt.number;
}
function ic(t) {
  return t.type === vt.date;
}
function ac(t) {
  return t.type === vt.time;
}
function oc(t) {
  return t.type === vt.select;
}
function sc(t) {
  return t.type === vt.plural;
}
function Rh(t) {
  return t.type === vt.pound;
}
function lc(t) {
  return t.type === vt.tag;
}
function uc(t) {
  return !!(t && typeof t == "object" && t.type === Fi.number);
}
function ns(t) {
  return !!(t && typeof t == "object" && t.type === Fi.dateTime);
}
var cc = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/, Mh = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
function Dh(t) {
  var e = {};
  return t.replace(Mh, function(n) {
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
var Ph = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
function Nh(t) {
  if (t.length === 0)
    throw new Error("Number skeleton cannot be empty");
  for (var e = t.split(Ph).filter(function(f) {
    return f.length > 0;
  }), n = [], r = 0, i = e; r < i.length; r++) {
    var a = i[r], o = a.split("/");
    if (o.length === 0)
      throw new Error("Invalid number skeleton");
    for (var u = o[0], l = o.slice(1), c = 0, d = l; c < d.length; c++) {
      var h = d[c];
      if (h.length === 0)
        throw new Error("Invalid number skeleton");
    }
    n.push({ stem: u, options: l });
  }
  return n;
}
function Hh(t) {
  return t.replace(/^(.*?)-/, "");
}
var vl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, dc = /^(@+)?(\+|#+)?[rs]?$/g, Uh = /(\*)(0+)|(#+)(0+)|(0+)/g, fc = /^(0+)$/;
function ml(t) {
  var e = {};
  return t[t.length - 1] === "r" ? e.roundingPriority = "morePrecision" : t[t.length - 1] === "s" && (e.roundingPriority = "lessPrecision"), t.replace(dc, function(n, r, i) {
    return typeof i != "string" ? (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length) : i === "+" ? e.minimumSignificantDigits = r.length : r[0] === "#" ? e.maximumSignificantDigits = r.length : (e.minimumSignificantDigits = r.length, e.maximumSignificantDigits = r.length + (typeof i == "string" ? i.length : 0)), "";
  }), e;
}
function hc(t) {
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
function Fh(t) {
  var e;
  if (t[0] === "E" && t[1] === "E" ? (e = {
    notation: "engineering"
  }, t = t.slice(2)) : t[0] === "E" && (e = {
    notation: "scientific"
  }, t = t.slice(1)), e) {
    var n = t.slice(0, 2);
    if (n === "+!" ? (e.signDisplay = "always", t = t.slice(2)) : n === "+?" && (e.signDisplay = "exceptZero", t = t.slice(2)), !fc.test(t))
      throw new Error("Malformed concise eng/scientific notation");
    e.minimumIntegerDigits = t.length;
  }
  return e;
}
function pl(t) {
  var e = {}, n = hc(t);
  return n || e;
}
function Bh(t) {
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
        e.style = "unit", e.unit = Hh(i.options[0]);
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
        e = fe(fe(fe({}, e), { notation: "scientific" }), i.options.reduce(function(l, c) {
          return fe(fe({}, l), pl(c));
        }, {}));
        continue;
      case "engineering":
        e = fe(fe(fe({}, e), { notation: "engineering" }), i.options.reduce(function(l, c) {
          return fe(fe({}, l), pl(c));
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
        i.options[0].replace(Uh, function(l, c, d, h, f, v) {
          if (c)
            e.minimumIntegerDigits = d.length;
          else {
            if (h && f)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
              throw new Error("We currently do not support exact integer digits");
          }
          return "";
        });
        continue;
    }
    if (fc.test(i.stem)) {
      e.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (vl.test(i.stem)) {
      if (i.options.length > 1)
        throw new RangeError("Fraction-precision stems only accept a single optional option");
      i.stem.replace(vl, function(l, c, d, h, f, v) {
        return d === "*" ? e.minimumFractionDigits = c.length : h && h[0] === "#" ? e.maximumFractionDigits = h.length : f && v ? (e.minimumFractionDigits = f.length, e.maximumFractionDigits = f.length + v.length) : (e.minimumFractionDigits = c.length, e.maximumFractionDigits = c.length), "";
      });
      var a = i.options[0];
      a === "w" ? e = fe(fe({}, e), { trailingZeroDisplay: "stripIfInteger" }) : a && (e = fe(fe({}, e), ml(a)));
      continue;
    }
    if (dc.test(i.stem)) {
      e = fe(fe({}, e), ml(i.stem));
      continue;
    }
    var o = hc(i.stem);
    o && (e = fe(fe({}, e), o));
    var u = Fh(i.stem);
    u && (e = fe(fe({}, e), u));
  }
  return e;
}
var Ra = {
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
function kh(t, e) {
  for (var n = "", r = 0; r < t.length; r++) {
    var i = t.charAt(r);
    if (i === "j") {
      for (var a = 0; r + 1 < t.length && t.charAt(r + 1) === i; )
        a++, r++;
      var o = 1 + (a & 1), u = a < 2 ? 1 : 3 + (a >> 1), l = "a", c = Vh(e);
      for ((c == "H" || c == "k") && (u = 0); u-- > 0; )
        n += l;
      for (; o-- > 0; )
        n = c + n;
    } else i === "J" ? n += "H" : n += i;
  }
  return n;
}
function Vh(t) {
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
  var i = Ra[r || ""] || Ra[n || ""] || Ra["".concat(n, "-001")] || Ra["001"];
  return i[0];
}
var Do, Gh = new RegExp("^".concat(cc.source, "*")), jh = new RegExp("".concat(cc.source, "*$"));
function Ze(t, e) {
  return { start: t, end: e };
}
var qh = !!String.prototype.startsWith && "_a".startsWith("a", 1), Wh = !!String.fromCodePoint, Kh = !!Object.fromEntries, zh = !!String.prototype.codePointAt, Xh = !!String.prototype.trimStart, Yh = !!String.prototype.trimEnd, Zh = !!Number.isSafeInteger, Qh = Zh ? Number.isSafeInteger : function(t) {
  return typeof t == "number" && isFinite(t) && Math.floor(t) === t && Math.abs(t) <= 9007199254740991;
}, rs = !0;
try {
  var Jh = mc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  rs = ((Do = Jh.exec("a")) === null || Do === void 0 ? void 0 : Do[0]) === "a";
} catch {
  rs = !1;
}
var gl = qh ? (
  // Native
  function(e, n, r) {
    return e.startsWith(n, r);
  }
) : (
  // For IE11
  function(e, n, r) {
    return e.slice(r, r + n.length) === n;
  }
), is = Wh ? String.fromCodePoint : (
  // IE11
  function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    for (var r = "", i = e.length, a = 0, o; i > a; ) {
      if (o = e[a++], o > 1114111)
        throw RangeError(o + " is not a valid code point");
      r += o < 65536 ? String.fromCharCode(o) : String.fromCharCode(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
    }
    return r;
  }
), bl = (
  // native
  Kh ? Object.fromEntries : (
    // Ponyfill
    function(e) {
      for (var n = {}, r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a[0], u = a[1];
        n[o] = u;
      }
      return n;
    }
  )
), vc = zh ? (
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
), $h = Xh ? (
  // Native
  function(e) {
    return e.trimStart();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(Gh, "");
  }
), ev = Yh ? (
  // Native
  function(e) {
    return e.trimEnd();
  }
) : (
  // Ponyfill
  function(e) {
    return e.replace(jh, "");
  }
);
function mc(t, e) {
  return new RegExp(t, e);
}
var as;
if (rs) {
  var yl = mc("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  as = function(e, n) {
    var r;
    yl.lastIndex = n;
    var i = yl.exec(e);
    return (r = i[1]) !== null && r !== void 0 ? r : "";
  };
} else
  as = function(e, n) {
    for (var r = []; ; ) {
      var i = vc(e, n);
      if (i === void 0 || pc(i) || iv(i))
        break;
      r.push(i), n += i >= 65536 ? 2 : 1;
    }
    return is.apply(void 0, r);
  };
var tv = (
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
          var o = this.parseArgument(e, r);
          if (o.err)
            return o;
          i.push(o.val);
        } else {
          if (a === 125 && e > 0)
            break;
          if (a === 35 && (n === "plural" || n === "selectordinal")) {
            var u = this.clonePosition();
            this.bump(), i.push({
              type: vt.pound,
              location: Ze(u, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(this.clonePosition(), this.clonePosition()));
          } else if (a === 60 && !this.ignoreTag && os(this.peek() || 0)) {
            var o = this.parseTag(e, n);
            if (o.err)
              return o;
            i.push(o.val);
          } else {
            var o = this.parseLiteral(e, n);
            if (o.err)
              return o;
            i.push(o.val);
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
            type: vt.literal,
            value: "<".concat(i, "/>"),
            location: Ze(r, this.clonePosition())
          },
          err: null
        };
      if (this.bumpIf(">")) {
        var a = this.parseMessage(e + 1, n, !0);
        if (a.err)
          return a;
        var o = a.val, u = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !os(this.char()))
            return this.error(Ye.INVALID_TAG, Ze(u, this.clonePosition()));
          var l = this.clonePosition(), c = this.parseTagName();
          return i !== c ? this.error(Ye.UNMATCHED_CLOSING_TAG, Ze(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: vt.tag,
              value: i,
              children: o,
              location: Ze(r, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, Ze(u, this.clonePosition())));
        } else
          return this.error(Ye.UNCLOSED_TAG, Ze(r, this.clonePosition()));
      } else
        return this.error(Ye.INVALID_TAG, Ze(r, this.clonePosition()));
    }, t.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && rv(this.char()); )
        this.bump();
      return this.message.slice(e, this.offset());
    }, t.prototype.parseLiteral = function(e, n) {
      for (var r = this.clonePosition(), i = ""; ; ) {
        var a = this.tryParseQuote(n);
        if (a) {
          i += a;
          continue;
        }
        var o = this.tryParseUnquoted(e, n);
        if (o) {
          i += o;
          continue;
        }
        var u = this.tryParseLeftAngleBracket();
        if (u) {
          i += u;
          continue;
        }
        break;
      }
      var l = Ze(r, this.clonePosition());
      return {
        val: { type: vt.literal, value: i, location: l },
        err: null
      };
    }, t.prototype.tryParseLeftAngleBracket = function() {
      return !this.isEOF() && this.char() === 60 && (this.ignoreTag || // If at the opening tag or closing tag position, bail.
      !nv(this.peek() || 0)) ? (this.bump(), "<") : null;
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
      return is.apply(void 0, n);
    }, t.prototype.tryParseUnquoted = function(e, n) {
      if (this.isEOF())
        return null;
      var r = this.char();
      return r === 60 || r === 123 || r === 35 && (n === "plural" || n === "selectordinal") || r === 125 && e > 0 ? null : (this.bump(), is(r));
    }, t.prototype.parseArgument = function(e, n) {
      var r = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(Ye.EMPTY_ARGUMENT, Ze(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(Ye.MALFORMED_ARGUMENT, Ze(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: vt.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Ze(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(r, this.clonePosition())) : this.parseArgumentOptions(e, n, i, r);
        default:
          return this.error(Ye.MALFORMED_ARGUMENT, Ze(r, this.clonePosition()));
      }
    }, t.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(), n = this.offset(), r = as(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Ze(e, a);
      return { value: r, location: o };
    }, t.prototype.parseArgumentOptions = function(e, n, r, i) {
      var a, o = this.clonePosition(), u = this.parseIdentifierIfPossible().value, l = this.clonePosition();
      switch (u) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, Ze(o, l));
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
            var f = ev(h.val);
            if (f.length === 0)
              return this.error(Ye.EXPECT_ARGUMENT_STYLE, Ze(this.clonePosition(), this.clonePosition()));
            var v = Ze(d, this.clonePosition());
            c = { style: f, styleLocation: v };
          }
          var p = this.tryParseArgumentClose(i);
          if (p.err)
            return p;
          var g = Ze(i, this.clonePosition());
          if (c && gl(c == null ? void 0 : c.style, "::", 0)) {
            var I = $h(c.style.slice(2));
            if (u === "number") {
              var h = this.parseNumberSkeletonFromString(I, c.styleLocation);
              return h.err ? h : {
                val: { type: vt.number, value: r, location: g, style: h.val },
                err: null
              };
            } else {
              if (I.length === 0)
                return this.error(Ye.EXPECT_DATE_TIME_SKELETON, g);
              var E = I;
              this.locale && (E = kh(I, this.locale));
              var f = {
                type: Fi.dateTime,
                pattern: E,
                location: c.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Dh(E) : {}
              }, A = u === "date" ? vt.date : vt.time;
              return {
                val: { type: A, value: r, location: g, style: f },
                err: null
              };
            }
          }
          return {
            val: {
              type: u === "number" ? vt.number : u === "date" ? vt.date : vt.time,
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
          var C = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, Ze(C, fe({}, C)));
          this.bumpSpace();
          var b = this.parseIdentifierIfPossible(), _ = 0;
          if (u !== "select" && b.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ze(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var h = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (h.err)
              return h;
            this.bumpSpace(), b = this.parseIdentifierIfPossible(), _ = h.val;
          }
          var S = this.tryParsePluralOrSelectOptions(e, u, n, b);
          if (S.err)
            return S;
          var p = this.tryParseArgumentClose(i);
          if (p.err)
            return p;
          var T = Ze(i, this.clonePosition());
          return u === "select" ? {
            val: {
              type: vt.select,
              value: r,
              options: bl(S.val),
              location: T
            },
            err: null
          } : {
            val: {
              type: vt.plural,
              value: r,
              options: bl(S.val),
              offset: _,
              pluralType: u === "plural" ? "cardinal" : "ordinal",
              location: T
            },
            err: null
          };
        }
        default:
          return this.error(Ye.INVALID_ARGUMENT_TYPE, Ze(o, l));
      }
    }, t.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || this.char() !== 125 ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, Ze(e, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, t.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(Ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Ze(i, this.clonePosition()));
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
        r = Nh(e);
      } catch {
        return this.error(Ye.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Fi.number,
          tokens: r,
          location: n,
          parsedOptions: this.shouldParseSkeletons ? Bh(r) : {}
        },
        err: null
      };
    }, t.prototype.tryParsePluralOrSelectOptions = function(e, n, r, i) {
      for (var a, o = !1, u = [], l = /* @__PURE__ */ new Set(), c = i.value, d = i.location; ; ) {
        if (c.length === 0) {
          var h = this.clonePosition();
          if (n !== "select" && this.bumpIf("=")) {
            var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (f.err)
              return f;
            d = Ze(h, this.clonePosition()), c = this.message.slice(h.offset, this.offset());
          } else
            break;
        }
        if (l.has(c))
          return this.error(n === "select" ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        c === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Ze(this.clonePosition(), this.clonePosition()));
        var p = this.parseMessage(e + 1, n, r);
        if (p.err)
          return p;
        var g = this.tryParseArgumentClose(v);
        if (g.err)
          return g;
        u.push([
          c,
          {
            value: p.val,
            location: Ze(v, this.clonePosition())
          }
        ]), l.add(c), this.bumpSpace(), a = this.parseIdentifierIfPossible(), c = a.value, d = a.location;
      }
      return u.length === 0 ? this.error(n === "select" ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ze(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(Ye.MISSING_OTHER_CLAUSE, Ze(this.clonePosition(), this.clonePosition())) : { val: u, err: null };
    }, t.prototype.tryParseDecimalInteger = function(e, n) {
      var r = 1, i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (r = -1);
      for (var a = !1, o = 0; !this.isEOF(); ) {
        var u = this.char();
        if (u >= 48 && u <= 57)
          a = !0, o = o * 10 + (u - 48), this.bump();
        else
          break;
      }
      var l = Ze(i, this.clonePosition());
      return a ? (o *= r, Qh(o) ? { val: o, err: null } : this.error(n, l)) : this.error(e, l);
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
      var n = vc(this.message, e);
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
      for (; !this.isEOF() && pc(this.char()); )
        this.bump();
    }, t.prototype.peek = function() {
      if (this.isEOF())
        return null;
      var e = this.char(), n = this.offset(), r = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
      return r ?? null;
    }, t;
  }()
);
function os(t) {
  return t >= 97 && t <= 122 || t >= 65 && t <= 90;
}
function nv(t) {
  return os(t) || t === 47;
}
function rv(t) {
  return t === 45 || t === 46 || t >= 48 && t <= 57 || t === 95 || t >= 97 && t <= 122 || t >= 65 && t <= 90 || t == 183 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 893 || t >= 895 && t <= 8191 || t >= 8204 && t <= 8205 || t >= 8255 && t <= 8256 || t >= 8304 && t <= 8591 || t >= 11264 && t <= 12271 || t >= 12289 && t <= 55295 || t >= 63744 && t <= 64975 || t >= 65008 && t <= 65533 || t >= 65536 && t <= 983039;
}
function pc(t) {
  return t >= 9 && t <= 13 || t === 32 || t === 133 || t >= 8206 && t <= 8207 || t === 8232 || t === 8233;
}
function iv(t) {
  return t >= 33 && t <= 35 || t === 36 || t >= 37 && t <= 39 || t === 40 || t === 41 || t === 42 || t === 43 || t === 44 || t === 45 || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || t === 91 || t === 92 || t === 93 || t === 94 || t === 96 || t === 123 || t === 124 || t === 125 || t === 126 || t === 161 || t >= 162 && t <= 165 || t === 166 || t === 167 || t === 169 || t === 171 || t === 172 || t === 174 || t === 176 || t === 177 || t === 182 || t === 187 || t === 191 || t === 215 || t === 247 || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || t === 8216 || t === 8217 || t === 8218 || t >= 8219 && t <= 8220 || t === 8221 || t === 8222 || t === 8223 || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || t === 8249 || t === 8250 || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || t === 8260 || t === 8261 || t === 8262 || t >= 8263 && t <= 8273 || t === 8274 || t === 8275 || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || t === 8608 || t >= 8609 && t <= 8610 || t === 8611 || t >= 8612 && t <= 8613 || t === 8614 || t >= 8615 && t <= 8621 || t === 8622 || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || t === 8658 || t === 8659 || t === 8660 || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || t === 8968 || t === 8969 || t === 8970 || t === 8971 || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || t === 9001 || t === 9002 || t >= 9003 && t <= 9083 || t === 9084 || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || t === 9655 || t >= 9656 && t <= 9664 || t === 9665 || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || t === 9839 || t >= 9840 && t <= 10087 || t === 10088 || t === 10089 || t === 10090 || t === 10091 || t === 10092 || t === 10093 || t === 10094 || t === 10095 || t === 10096 || t === 10097 || t === 10098 || t === 10099 || t === 10100 || t === 10101 || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || t === 10181 || t === 10182 || t >= 10183 && t <= 10213 || t === 10214 || t === 10215 || t === 10216 || t === 10217 || t === 10218 || t === 10219 || t === 10220 || t === 10221 || t === 10222 || t === 10223 || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || t === 10627 || t === 10628 || t === 10629 || t === 10630 || t === 10631 || t === 10632 || t === 10633 || t === 10634 || t === 10635 || t === 10636 || t === 10637 || t === 10638 || t === 10639 || t === 10640 || t === 10641 || t === 10642 || t === 10643 || t === 10644 || t === 10645 || t === 10646 || t === 10647 || t === 10648 || t >= 10649 && t <= 10711 || t === 10712 || t === 10713 || t === 10714 || t === 10715 || t >= 10716 && t <= 10747 || t === 10748 || t === 10749 || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || t === 11158 || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || t === 11778 || t === 11779 || t === 11780 || t === 11781 || t >= 11782 && t <= 11784 || t === 11785 || t === 11786 || t === 11787 || t === 11788 || t === 11789 || t >= 11790 && t <= 11798 || t === 11799 || t >= 11800 && t <= 11801 || t === 11802 || t === 11803 || t === 11804 || t === 11805 || t >= 11806 && t <= 11807 || t === 11808 || t === 11809 || t === 11810 || t === 11811 || t === 11812 || t === 11813 || t === 11814 || t === 11815 || t === 11816 || t === 11817 || t >= 11818 && t <= 11822 || t === 11823 || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || t === 11840 || t === 11841 || t === 11842 || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || t === 11858 || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || t === 12296 || t === 12297 || t === 12298 || t === 12299 || t === 12300 || t === 12301 || t === 12302 || t === 12303 || t === 12304 || t === 12305 || t >= 12306 && t <= 12307 || t === 12308 || t === 12309 || t === 12310 || t === 12311 || t === 12312 || t === 12313 || t === 12314 || t === 12315 || t === 12316 || t === 12317 || t >= 12318 && t <= 12319 || t === 12320 || t === 12336 || t === 64830 || t === 64831 || t >= 65093 && t <= 65094;
}
function ss(t) {
  t.forEach(function(e) {
    if (delete e.location, oc(e) || sc(e))
      for (var n in e.options)
        delete e.options[n].location, ss(e.options[n].value);
    else rc(e) && uc(e.style) || (ic(e) || ac(e)) && ns(e.style) ? delete e.style.location : lc(e) && ss(e.children);
  });
}
function av(t, e) {
  e === void 0 && (e = {}), e = fe({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, e);
  var n = new tv(t, e).parse();
  if (n.err) {
    var r = SyntaxError(Ye[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return e != null && e.captureLocation || ss(n.val), n.val;
}
var Bi;
(function(t) {
  t.MISSING_VALUE = "MISSING_VALUE", t.INVALID_VALUE = "INVALID_VALUE", t.MISSING_INTL_API = "MISSING_INTL_API";
})(Bi || (Bi = {}));
var po = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r, i) {
      var a = t.call(this, n) || this;
      return a.code = r, a.originalMessage = i, a;
    }
    return e.prototype.toString = function() {
      return "[formatjs Error: ".concat(this.code, "] ").concat(this.message);
    }, e;
  }(Error)
), Il = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r, i, a) {
      return t.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Bi.INVALID_VALUE, a) || this;
    }
    return e;
  }(po)
), ov = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r, i) {
      return t.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Bi.INVALID_VALUE, i) || this;
    }
    return e;
  }(po)
), sv = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r) {
      return t.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Bi.MISSING_VALUE, r) || this;
    }
    return e;
  }(po)
), Xt;
(function(t) {
  t[t.literal = 0] = "literal", t[t.object = 1] = "object";
})(Xt || (Xt = {}));
function lv(t) {
  return t.length < 2 ? t : t.reduce(function(e, n) {
    var r = e[e.length - 1];
    return !r || r.type !== Xt.literal || n.type !== Xt.literal ? e.push(n) : r.value += n.value, e;
  }, []);
}
function uv(t) {
  return typeof t == "function";
}
function ja(t, e, n, r, i, a, o) {
  if (t.length === 1 && hl(t[0]))
    return [
      {
        type: Xt.literal,
        value: t[0].value
      }
    ];
  for (var u = [], l = 0, c = t; l < c.length; l++) {
    var d = c[l];
    if (hl(d)) {
      u.push({
        type: Xt.literal,
        value: d.value
      });
      continue;
    }
    if (Rh(d)) {
      typeof a == "number" && u.push({
        type: Xt.literal,
        value: n.getNumberFormat(e).format(a)
      });
      continue;
    }
    var h = d.value;
    if (!(i && h in i))
      throw new sv(h, o);
    var f = i[h];
    if (Oh(d)) {
      (!f || typeof f == "string" || typeof f == "number") && (f = typeof f == "string" || typeof f == "number" ? String(f) : ""), u.push({
        type: typeof f == "string" ? Xt.literal : Xt.object,
        value: f
      });
      continue;
    }
    if (ic(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : ns(d.style) ? d.style.parsedOptions : void 0;
      u.push({
        type: Xt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (ac(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : ns(d.style) ? d.style.parsedOptions : r.time.medium;
      u.push({
        type: Xt.literal,
        value: n.getDateTimeFormat(e, v).format(f)
      });
      continue;
    }
    if (rc(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : uc(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (f = f * (v.scale || 1)), u.push({
        type: Xt.literal,
        value: n.getNumberFormat(e, v).format(f)
      });
      continue;
    }
    if (lc(d)) {
      var p = d.children, g = d.value, I = i[g];
      if (!uv(I))
        throw new ov(g, "function", o);
      var E = ja(p, e, n, r, i, a), A = I(E.map(function(_) {
        return _.value;
      }));
      Array.isArray(A) || (A = [A]), u.push.apply(u, A.map(function(_) {
        return {
          type: typeof _ == "string" ? Xt.literal : Xt.object,
          value: _
        };
      }));
    }
    if (oc(d)) {
      var C = d.options[f] || d.options.other;
      if (!C)
        throw new Il(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, ja(C.value, e, n, r, i));
      continue;
    }
    if (sc(d)) {
      var C = d.options["=".concat(f)];
      if (!C) {
        if (!Intl.PluralRules)
          throw new po(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Bi.MISSING_INTL_API, o);
        var b = n.getPluralRules(e, { type: d.pluralType }).select(f - (d.offset || 0));
        C = d.options[b] || d.options.other;
      }
      if (!C)
        throw new Il(d.value, f, Object.keys(d.options), o);
      u.push.apply(u, ja(C.value, e, n, r, i, f - (d.offset || 0)));
      continue;
    }
  }
  return lv(u);
}
function cv(t, e) {
  return e ? fe(fe(fe({}, t || {}), e || {}), Object.keys(t).reduce(function(n, r) {
    return n[r] = fe(fe({}, t[r]), e[r] || {}), n;
  }, {})) : t;
}
function dv(t, e) {
  return e ? Object.keys(t).reduce(function(n, r) {
    return n[r] = cv(t[r], e[r]), n;
  }, fe({}, t)) : t;
}
function Po(t) {
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
function fv(t) {
  return t === void 0 && (t = {
    number: {},
    dateTime: {},
    pluralRules: {}
  }), {
    getNumberFormat: Ro(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.NumberFormat).bind.apply(e, Ar([void 0], n, !1)))();
    }, {
      cache: Po(t.number),
      strategy: Mo.variadic
    }),
    getDateTimeFormat: Ro(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.DateTimeFormat).bind.apply(e, Ar([void 0], n, !1)))();
    }, {
      cache: Po(t.dateTime),
      strategy: Mo.variadic
    }),
    getPluralRules: Ro(function() {
      for (var e, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((e = Intl.PluralRules).bind.apply(e, Ar([void 0], n, !1)))();
    }, {
      cache: Po(t.pluralRules),
      strategy: Mo.variadic
    })
  };
}
var gc = (
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
        return ja(a.ast, a.locales, a.formatters, a.formats, l, void 0, a.message);
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
        var o = i || {};
        o.formatters;
        var u = Ih(o, ["formatters"]);
        this.ast = t.__parse(e, fe(fe({}, u), { locale: this.resolvedLocale }));
      } else
        this.ast = e;
      if (!Array.isArray(this.ast))
        throw new TypeError("A message must be provided as a String or AST.");
      this.formats = dv(t.formats, r), this.formatters = i && i.formatters || fv(this.formatterCache);
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
    }, t.__parse = av, t.formats = {
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
function hv(t, e) {
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
const yr = {}, vv = (t, e, n) => n && (e in yr || (yr[e] = {}), t in yr[e] || (yr[e][t] = n), n), bc = (t, e) => {
  if (e == null)
    return;
  if (e in yr && t in yr[e])
    return yr[e][t];
  const n = Ca(e);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = pv(i, t);
    if (a)
      return vv(t, e, a);
  }
};
let Ms;
const Aa = Ct({});
function mv(t) {
  return Ms[t] || null;
}
function yc(t) {
  return t in Ms;
}
function pv(t, e) {
  if (!yc(t))
    return null;
  const n = mv(t);
  return hv(n, e);
}
function gv(t) {
  if (t == null)
    return;
  const e = Ca(t);
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (yc(r))
      return r;
  }
}
function Ic(t, ...e) {
  delete yr[t], Aa.update((n) => (n[t] = yh.all([n[t] || {}, ...e]), n));
}
Wi(
  [Aa],
  ([t]) => Object.keys(t)
);
Aa.subscribe((t) => Ms = t);
const qa = {};
function bv(t, e) {
  qa[t].delete(e), qa[t].size === 0 && delete qa[t];
}
function _c(t) {
  return qa[t];
}
function yv(t) {
  return Ca(t).map((e) => {
    const n = _c(e);
    return [e, n ? [...n] : []];
  }).filter(([, e]) => e.length > 0);
}
function Xa(t) {
  return t == null ? !1 : Ca(t).some(
    (e) => {
      var n;
      return (n = _c(e)) == null ? void 0 : n.size;
    }
  );
}
function Iv(t, e) {
  return Promise.all(
    e.map((r) => (bv(t, r), r().then((i) => i.default || i)))
  ).then((r) => Ic(t, ...r));
}
const na = {};
function Ec(t) {
  if (!Xa(t))
    return t in na ? na[t] : Promise.resolve();
  const e = yv(t);
  return na[t] = Promise.all(
    e.map(
      ([n, r]) => Iv(n, r)
    )
  ).then(() => {
    if (Xa(t))
      return Ec(t);
    delete na[t];
  }), na[t];
}
var _l = Object.getOwnPropertySymbols, _v = Object.prototype.hasOwnProperty, Ev = Object.prototype.propertyIsEnumerable, Av = (t, e) => {
  var n = {};
  for (var r in t)
    _v.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && _l)
    for (var r of _l(t))
      e.indexOf(r) < 0 && Ev.call(t, r) && (n[r] = t[r]);
  return n;
};
const Cv = {
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
function Sv({ locale: t, id: e }) {
  console.warn(
    `[svelte-i18n] The message "${e}" was not found in "${Ca(
      t
    ).join('", "')}".${Xa(Or()) ? `

Note: there are at least one loader still registered to this locale that wasn't executed.` : ""}`
  );
}
const xv = {
  fallbackLocale: null,
  loadingDelay: 200,
  formats: Cv,
  warnOnMissingMessages: !0,
  handleMissingMessage: void 0,
  ignoreTag: !0
}, oa = xv;
function ki() {
  return oa;
}
function Tv(t) {
  const e = t, { formats: n } = e, r = Av(e, ["formats"]);
  let i = t.fallbackLocale;
  if (t.initialLocale)
    try {
      gc.resolveLocale(t.initialLocale) && (i = t.initialLocale);
    } catch {
      console.warn(
        `[svelte-i18n] The initial locale "${t.initialLocale}" is not a valid locale.`
      );
    }
  return r.warnOnMissingMessages && (delete r.warnOnMissingMessages, r.handleMissingMessage == null ? r.handleMissingMessage = Sv : console.warn(
    '[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.'
  )), Object.assign(oa, r, { initialLocale: i }), n && ("number" in n && Object.assign(oa.formats.number, n.number), "date" in n && Object.assign(oa.formats.date, n.date), "time" in n && Object.assign(oa.formats.time, n.time)), ui.set(i);
}
const No = Ct(!1);
var wv = Object.defineProperty, Lv = Object.defineProperties, Ov = Object.getOwnPropertyDescriptors, El = Object.getOwnPropertySymbols, Rv = Object.prototype.hasOwnProperty, Mv = Object.prototype.propertyIsEnumerable, Al = (t, e, n) => e in t ? wv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Dv = (t, e) => {
  for (var n in e || (e = {}))
    Rv.call(e, n) && Al(t, n, e[n]);
  if (El)
    for (var n of El(e))
      Mv.call(e, n) && Al(t, n, e[n]);
  return t;
}, Pv = (t, e) => Lv(t, Ov(e));
let ls;
const Ya = Ct(null);
function Cl(t) {
  return t.split("-").map((e, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ca(t, e = ki().fallbackLocale) {
  const n = Cl(t);
  return e ? [.../* @__PURE__ */ new Set([...n, ...Cl(e)])] : n;
}
function Or() {
  return ls ?? void 0;
}
Ya.subscribe((t) => {
  ls = t ?? void 0, typeof window < "u" && t != null && document.documentElement.setAttribute("lang", t);
});
const Nv = (t) => {
  if (t && gv(t) && Xa(t)) {
    const { loadingDelay: e } = ki();
    let n;
    return typeof window < "u" && Or() != null && e ? n = window.setTimeout(
      () => No.set(!0),
      e
    ) : No.set(!0), Ec(t).then(() => {
      Ya.set(t);
    }).finally(() => {
      clearTimeout(n), No.set(!1);
    });
  }
  return Ya.set(t);
}, ui = Pv(Dv({}, Ya), {
  set: Nv
}), Hv = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], go = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in e ? e[i] : e[i] = t(r);
  };
};
var Uv = Object.defineProperty, Za = Object.getOwnPropertySymbols, Ac = Object.prototype.hasOwnProperty, Cc = Object.prototype.propertyIsEnumerable, Sl = (t, e, n) => e in t ? Uv(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Ds = (t, e) => {
  for (var n in e || (e = {}))
    Ac.call(e, n) && Sl(t, n, e[n]);
  if (Za)
    for (var n of Za(e))
      Cc.call(e, n) && Sl(t, n, e[n]);
  return t;
}, Ki = (t, e) => {
  var n = {};
  for (var r in t)
    Ac.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && Za)
    for (var r of Za(t))
      e.indexOf(r) < 0 && Cc.call(t, r) && (n[r] = t[r]);
  return n;
};
const pa = (t, e) => {
  const { formats: n } = ki();
  if (t in n && e in n[t])
    return n[t][e];
  throw new Error(`[svelte-i18n] Unknown "${e}" ${t} format.`);
}, Fv = go(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Ki(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = pa("number", r)), new Intl.NumberFormat(n, i);
  }
), Bv = go(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Ki(e, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = pa("date", r) : Object.keys(i).length === 0 && (i = pa("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), kv = go(
  (t) => {
    var e = t, { locale: n, format: r } = e, i = Ki(e, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = pa("time", r) : Object.keys(i).length === 0 && (i = pa("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Vv = (t = {}) => {
  var e = t, {
    locale: n = Or()
  } = e, r = Ki(e, [
    "locale"
  ]);
  return Fv(Ds({ locale: n }, r));
}, Gv = (t = {}) => {
  var e = t, {
    locale: n = Or()
  } = e, r = Ki(e, [
    "locale"
  ]);
  return Bv(Ds({ locale: n }, r));
}, jv = (t = {}) => {
  var e = t, {
    locale: n = Or()
  } = e, r = Ki(e, [
    "locale"
  ]);
  return kv(Ds({ locale: n }, r));
}, qv = go(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (t, e = Or()) => new gc(t, e, ki().formats, {
    ignoreTag: ki().ignoreTag
  })
), Wv = (t, e = {}) => {
  var n, r, i, a;
  let o = e;
  typeof t == "object" && (o = t, t = o.id);
  const {
    values: u,
    locale: l = Or(),
    default: c
  } = o;
  if (l == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = bc(t, l);
  if (!d)
    d = (a = (i = (r = (n = ki()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: l, id: t, defaultValue: c })) != null ? i : c) != null ? a : t;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${t}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!u)
    return d;
  let h = d;
  try {
    h = qv(d, l).format(u);
  } catch (f) {
    f instanceof Error && console.warn(
      `[svelte-i18n] Message "${t}" has syntax error:`,
      f.message
    );
  }
  return h;
}, Kv = (t, e) => jv(e).format(t), zv = (t, e) => Gv(e).format(t), Xv = (t, e) => Vv(e).format(t), Yv = (t, e = Or()) => bc(t, e), Zv = Wi([ui, Aa], () => Wv);
Wi([ui], () => Kv);
Wi([ui], () => zv);
Wi([ui], () => Xv);
Wi([ui, Aa], () => Yv);
function Qv(t, e) {
  Object.entries(t).forEach(([a, o]) => {
    Ic(a, o);
  });
  const n = localStorage.getItem("language"), r = "en", i = n ?? Hv();
  console.log("Initial: Setting the language to", i), Tv({
    fallbackLocale: r,
    initialLocale: i
  }), window.addEventListener("oscd-language-changed", (a) => {
    const o = a;
    if (!o.detail.language) {
      console.error("No translations for language");
      return;
    }
    console.log("Updating the language to", o.detail.language), ui.set(o.detail.language);
  });
}
const Jv = "Ort", $v = "Suche", em = "UUID", tm = "Name", nm = "Autor", rm = "Typ", im = "Version", am = "Geändert am", om = "Von", sm = "Bis", lm = "Suchergebnis", um = "Ort auswählen", cm = "Filter Hinzufügen", dm = "Filtertypen", fm = {
  location: Jv,
  search: $v,
  uuid: em,
  name: tm,
  author: nm,
  type: rm,
  version: im,
  changed_at: am,
  from: om,
  to: sm,
  search_result: lm,
  select_location: um,
  add_filter: cm,
  filter_types: dm
}, hm = "Location", vm = "Search", mm = "UUID", pm = "Name", gm = "Author", bm = "Type", ym = "Version", Im = "Changed At", _m = "From", Em = "To", Am = "Search Result", Cm = "Select Location", Sm = "Add Filter", xm = "Filter Types", Tm = {
  location: hm,
  search: vm,
  uuid: mm,
  name: pm,
  author: gm,
  type: bm,
  version: ym,
  changed_at: Im,
  from: _m,
  to: Em,
  search_result: Am,
  select_location: Cm,
  add_filter: Sm,
  filter_types: xm
};
function St(t) {
  return typeof t == "function";
}
function Sc(t) {
  var e = function(r) {
    Error.call(r), r.stack = new Error().stack;
  }, n = t(e);
  return n.prototype = Object.create(Error.prototype), n.prototype.constructor = n, n;
}
var Ho = Sc(function(t) {
  return function(n) {
    t(this), this.message = n ? n.length + ` errors occurred during unsubscription:
` + n.map(function(r, i) {
      return i + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = n;
  };
});
function xl(t, e) {
  if (t) {
    var n = t.indexOf(e);
    0 <= n && t.splice(n, 1);
  }
}
var Ps = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, n, r, i, a;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var u = Lt(o), l = u.next(); !l.done; l = u.next()) {
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
          o.remove(this);
      var d = this.initialTeardown;
      if (St(d))
        try {
          d();
        } catch (g) {
          a = g instanceof Ho ? g.errors : [g];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var f = Lt(h), v = f.next(); !v.done; v = f.next()) {
            var p = v.value;
            try {
              Tl(p);
            } catch (g) {
              a = a ?? [], g instanceof Ho ? a = Ar(Ar([], Ui(a)), Ui(g.errors)) : a.push(g);
            }
          }
        } catch (g) {
          r = { error: g };
        } finally {
          try {
            v && !v.done && (i = f.return) && i.call(f);
          } finally {
            if (r) throw r.error;
          }
        }
      }
      if (a)
        throw new Ho(a);
    }
  }, t.prototype.add = function(e) {
    var n;
    if (e && e !== this)
      if (this.closed)
        Tl(e);
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
    n === e ? this._parentage = null : Array.isArray(n) && xl(n, e);
  }, t.prototype.remove = function(e) {
    var n = this._finalizers;
    n && xl(n, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
Ps.EMPTY;
function xc(t) {
  return t instanceof Ps || t && "closed" in t && St(t.remove) && St(t.add) && St(t.unsubscribe);
}
function Tl(t) {
  St(t) ? t() : t.unsubscribe();
}
var wm = {
  Promise: void 0
}, Lm = {
  setTimeout: function(t, e) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Ar([t, e], Ui(n)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Tc(t) {
  Lm.setTimeout(function() {
    throw t;
  });
}
function wl() {
}
function Om(t) {
  t();
}
var Ns = function(t) {
  it(e, t);
  function e(n) {
    var r = t.call(this) || this;
    return r.isStopped = !1, n ? (r.destination = n, xc(n) && n.add(r)) : r.destination = Dm, r;
  }
  return e.create = function(n, r, i) {
    return new us(n, r, i);
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
}(Ps), Rm = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var n = this.partialObserver;
    if (n.next)
      try {
        n.next(e);
      } catch (r) {
        Ma(r);
      }
  }, t.prototype.error = function(e) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(e);
      } catch (r) {
        Ma(r);
      }
    else
      Ma(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (n) {
        Ma(n);
      }
  }, t;
}(), us = function(t) {
  it(e, t);
  function e(n, r, i) {
    var a = t.call(this) || this, o;
    return St(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new Rm(o), a;
  }
  return e;
}(Ns);
function Ma(t) {
  Tc(t);
}
function Mm(t) {
  throw t;
}
var Dm = {
  closed: !0,
  next: wl,
  error: Mm,
  complete: wl
}, Hs = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function wc(t) {
  return t;
}
function Pm(t) {
  return t.length === 0 ? wc : t.length === 1 ? t[0] : function(n) {
    return t.reduce(function(r, i) {
      return i(r);
    }, n);
  };
}
var Nn = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var n = new t();
    return n.source = this, n.operator = e, n;
  }, t.prototype.subscribe = function(e, n, r) {
    var i = this, a = Hm(e) ? e : new us(e, n, r);
    return Om(function() {
      var o = i, u = o.operator, l = o.source;
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
    return n = Ll(n), new n(function(i, a) {
      var o = new us({
        next: function(u) {
          try {
            e(u);
          } catch (l) {
            a(l), o.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      r.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var n;
    return (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e);
  }, t.prototype[Hs] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], n = 0; n < arguments.length; n++)
      e[n] = arguments[n];
    return Pm(e)(this);
  }, t.prototype.toPromise = function(e) {
    var n = this;
    return e = Ll(e), new e(function(r, i) {
      var a;
      n.subscribe(function(o) {
        return a = o;
      }, function(o) {
        return i(o);
      }, function() {
        return r(a);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Ll(t) {
  var e;
  return (e = t ?? wm.Promise) !== null && e !== void 0 ? e : Promise;
}
function Nm(t) {
  return t && St(t.next) && St(t.error) && St(t.complete);
}
function Hm(t) {
  return t && t instanceof Ns || Nm(t) && xc(t);
}
function Um(t) {
  return St(t == null ? void 0 : t.lift);
}
function zi(t) {
  return function(e) {
    if (Um(e))
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
function Vi(t, e, n, r, i) {
  return new Fm(t, e, n, r, i);
}
var Fm = function(t) {
  it(e, t);
  function e(n, r, i, a, o, u) {
    var l = t.call(this, n) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = u, l._next = r ? function(c) {
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
}(Ns), Bm = new Nn(function(t) {
  return t.complete();
});
function km(t) {
  return t && St(t.schedule);
}
function Vm(t) {
  return t[t.length - 1];
}
function Gm(t) {
  return km(Vm(t)) ? t.pop() : void 0;
}
var Lc = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Oc(t) {
  return St(t == null ? void 0 : t.then);
}
function Rc(t) {
  return St(t[Hs]);
}
function Mc(t) {
  return Symbol.asyncIterator && St(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Dc(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function jm() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Pc = jm();
function Nc(t) {
  return St(t == null ? void 0 : t[Pc]);
}
function Hc(t) {
  return _h(this, arguments, function() {
    var n, r, i, a;
    return Rs(this, function(o) {
      switch (o.label) {
        case 0:
          n = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Ci(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Ci(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Ci(i)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
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
function Uc(t) {
  return St(t == null ? void 0 : t.getReader);
}
function Sa(t) {
  if (t instanceof Nn)
    return t;
  if (t != null) {
    if (Rc(t))
      return qm(t);
    if (Lc(t))
      return Wm(t);
    if (Oc(t))
      return Km(t);
    if (Mc(t))
      return Fc(t);
    if (Nc(t))
      return zm(t);
    if (Uc(t))
      return Xm(t);
  }
  throw Dc(t);
}
function qm(t) {
  return new Nn(function(e) {
    var n = t[Hs]();
    if (St(n.subscribe))
      return n.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Wm(t) {
  return new Nn(function(e) {
    for (var n = 0; n < t.length && !e.closed; n++)
      e.next(t[n]);
    e.complete();
  });
}
function Km(t) {
  return new Nn(function(e) {
    t.then(function(n) {
      e.closed || (e.next(n), e.complete());
    }, function(n) {
      return e.error(n);
    }).then(null, Tc);
  });
}
function zm(t) {
  return new Nn(function(e) {
    var n, r;
    try {
      for (var i = Lt(t), a = i.next(); !a.done; a = i.next()) {
        var o = a.value;
        if (e.next(o), e.closed)
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
function Fc(t) {
  return new Nn(function(e) {
    Ym(t, e).catch(function(n) {
      return e.error(n);
    });
  });
}
function Xm(t) {
  return Fc(Hc(t));
}
function Ym(t, e) {
  var n, r, i, a;
  return ec(this, void 0, void 0, function() {
    var o, u;
    return Rs(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), n = Eh(t), l.label = 1;
        case 1:
          return [4, n.next()];
        case 2:
          if (r = l.sent(), !!r.done) return [3, 4];
          if (o = r.value, e.next(o), e.closed)
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
function $r(t, e, n, r, i) {
  r === void 0 && (r = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    n(), i ? t.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (t.add(a), !i)
    return a;
}
function Bc(t, e) {
  return e === void 0 && (e = 0), zi(function(n, r) {
    n.subscribe(Vi(r, function(i) {
      return $r(r, t, function() {
        return r.next(i);
      }, e);
    }, function() {
      return $r(r, t, function() {
        return r.complete();
      }, e);
    }, function(i) {
      return $r(r, t, function() {
        return r.error(i);
      }, e);
    }));
  });
}
function kc(t, e) {
  return e === void 0 && (e = 0), zi(function(n, r) {
    r.add(t.schedule(function() {
      return n.subscribe(r);
    }, e));
  });
}
function Zm(t, e) {
  return Sa(t).pipe(kc(e), Bc(e));
}
function Qm(t, e) {
  return Sa(t).pipe(kc(e), Bc(e));
}
function Jm(t, e) {
  return new Nn(function(n) {
    var r = 0;
    return e.schedule(function() {
      r === t.length ? n.complete() : (n.next(t[r++]), n.closed || this.schedule());
    });
  });
}
function $m(t, e) {
  return new Nn(function(n) {
    var r;
    return $r(n, e, function() {
      r = t[Pc](), $r(n, e, function() {
        var i, a, o;
        try {
          i = r.next(), a = i.value, o = i.done;
        } catch (u) {
          n.error(u);
          return;
        }
        o ? n.complete() : n.next(a);
      }, 0, !0);
    }), function() {
      return St(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Vc(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new Nn(function(n) {
    $r(n, e, function() {
      var r = t[Symbol.asyncIterator]();
      $r(n, e, function() {
        r.next().then(function(i) {
          i.done ? n.complete() : n.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function ep(t, e) {
  return Vc(Hc(t), e);
}
function tp(t, e) {
  if (t != null) {
    if (Rc(t))
      return Zm(t, e);
    if (Lc(t))
      return Jm(t, e);
    if (Oc(t))
      return Qm(t, e);
    if (Mc(t))
      return Vc(t, e);
    if (Nc(t))
      return $m(t, e);
    if (Uc(t))
      return ep(t, e);
  }
  throw Dc(t);
}
function np(t, e) {
  return e ? tp(t, e) : Sa(t);
}
function Gc() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var n = Gm(t);
  return np(t, n);
}
function on(t, e) {
  return zi(function(n, r) {
    var i = 0;
    n.subscribe(Vi(r, function(a) {
      r.next(t.call(e, a, i++));
    }));
  });
}
function rp(t, e, n, r, i, a, o, u) {
  var l = [], c = 0, d = 0, h = !1, f = function() {
    h && !l.length && !c && e.complete();
  }, v = function(g) {
    return c < r ? p(g) : l.push(g);
  }, p = function(g) {
    c++;
    var I = !1;
    Sa(n(g, d++)).subscribe(Vi(e, function(E) {
      e.next(E);
    }, function() {
      I = !0;
    }, void 0, function() {
      if (I)
        try {
          c--;
          for (var E = function() {
            var A = l.shift();
            o || p(A);
          }; l.length && c < r; )
            E();
          f();
        } catch (A) {
          e.error(A);
        }
    }));
  };
  return t.subscribe(Vi(e, v, function() {
    h = !0, f();
  })), function() {
  };
}
function cs(t, e, n) {
  return n === void 0 && (n = 1 / 0), St(e) ? cs(function(r, i) {
    return on(function(a, o) {
      return e(r, a, i, o);
    })(Sa(t(r, i)));
  }, n) : (typeof e == "number" && (n = e), zi(function(r, i) {
    return rp(r, i, t, n);
  }));
}
function jc(t, e) {
  return St(e) ? cs(t, e, 1) : cs(t, 1);
}
function ip(t) {
  return t <= 0 ? function() {
    return Bm;
  } : zi(function(e, n) {
    var r = 0;
    e.subscribe(Vi(n, function(i) {
      ++r <= t && (n.next(i), t <= r && n.complete());
    }));
  });
}
function ap(t, e, n) {
  var r = St(t) || e || n ? { next: t, error: e, complete: n } : t;
  return r ? zi(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var u = !0;
    i.subscribe(Vi(a, function(l) {
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
  }) : wc;
}
function qc(t) {
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
var op = /* @__PURE__ */ function() {
  function t(e, n, r, i) {
    i === void 0 && (i = "download_load"), this.originalEvent = e, this.xhr = n, this.request = r, this.type = i;
    var a = n.status, o = n.responseType;
    this.status = a ?? 0, this.responseType = o ?? "";
    var u = n.getAllResponseHeaders();
    this.responseHeaders = u ? u.split(`
`).reduce(function(d, h) {
      var f = h.indexOf(": ");
      return d[h.slice(0, f)] = h.slice(f + 2), d;
    }, {}) : {}, this.response = qc(n);
    var l = e.loaded, c = e.total;
    this.loaded = l, this.total = c;
  }
  return t;
}(), Qa = Sc(function(t) {
  return function(n, r, i) {
    this.message = n, this.name = "AjaxError", this.xhr = r, this.request = i, this.status = r.status, this.responseType = r.responseType;
    var a;
    try {
      a = qc(r);
    } catch {
      a = r.responseText;
    }
    this.response = a;
  };
}), sp = function() {
  function t(e, n) {
    return Qa.call(this, "ajax timeout", e, n), this.name = "AjaxTimeoutError", this;
  }
  return t.prototype = Object.create(Qa.prototype), t;
}();
function lp(t, e) {
  return Rr({ method: "GET", url: t, headers: e });
}
function up(t, e, n) {
  return Rr({ method: "POST", url: t, body: e, headers: n });
}
function cp(t, e) {
  return Rr({ method: "DELETE", url: t, headers: e });
}
function dp(t, e, n) {
  return Rr({ method: "PUT", url: t, body: e, headers: n });
}
function fp(t, e, n) {
  return Rr({ method: "PATCH", url: t, body: e, headers: n });
}
var hp = on(function(t) {
  return t.response;
});
function vp(t, e) {
  return hp(Rr({
    method: "GET",
    url: t,
    headers: e
  }));
}
var Rr = function() {
  var t = function(e) {
    var n = typeof e == "string" ? {
      url: e
    } : e;
    return pp(n);
  };
  return t.get = lp, t.post = up, t.delete = cp, t.put = dp, t.patch = fp, t.getJSON = vp, t;
}(), mp = "upload", Ol = "download", Uo = "loadstart", Fo = "progress", Rl = "load";
function pp(t) {
  return new Nn(function(e) {
    var n, r, i = fe({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, t), a = i.queryParams, o = i.body, u = i.headers, l = i.url;
    if (!l)
      throw new TypeError("url is required");
    if (a) {
      var c;
      if (l.includes("?")) {
        var d = l.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        c = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(H, W) {
          return c.set(W, H);
        }), l = d[0] + "?" + c;
      } else
        c = new URLSearchParams(a), l = l + "?" + c;
    }
    var h = {};
    if (u)
      for (var f in u)
        u.hasOwnProperty(f) && (h[f.toLowerCase()] = u[f]);
    var v = i.crossDomain;
    !v && !("x-requested-with" in h) && (h["x-requested-with"] = "XMLHttpRequest");
    var p = i.withCredentials, g = i.xsrfCookieName, I = i.xsrfHeaderName;
    if ((p || !v) && g && I) {
      var E = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + g + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      E && (h[I] = E);
    }
    var A = gp(o, h), C = fe(fe({}, i), {
      url: l,
      headers: h,
      body: A
    }), b;
    b = t.createXHR ? t.createXHR() : new XMLHttpRequest();
    {
      var _ = t.progressSubscriber, S = t.includeDownloadProgress, T = S === void 0 ? !1 : S, x = t.includeUploadProgress, L = x === void 0 ? !1 : x, U = function(H, W) {
        b.addEventListener(H, function() {
          var ne, N = W();
          (ne = _ == null ? void 0 : _.error) === null || ne === void 0 || ne.call(_, N), e.error(N);
        });
      };
      U("timeout", function() {
        return new sp(b, C);
      }), U("abort", function() {
        return new Qa("aborted", b, C);
      });
      var Y = function(H, W) {
        return new op(W, b, C, H + "_" + W.type);
      }, B = function(H, W, ne) {
        H.addEventListener(W, function(N) {
          e.next(Y(ne, N));
        });
      };
      L && [Uo, Fo, Rl].forEach(function(H) {
        return B(b.upload, H, mp);
      }), _ && [Uo, Fo].forEach(function(H) {
        return b.upload.addEventListener(H, function(W) {
          var ne;
          return (ne = _ == null ? void 0 : _.next) === null || ne === void 0 ? void 0 : ne.call(_, W);
        });
      }), T && [Uo, Fo].forEach(function(H) {
        return B(b, H, Ol);
      });
      var M = function(H) {
        var W = "ajax error" + (H ? " " + H : "");
        e.error(new Qa(W, b, C));
      };
      b.addEventListener("error", function(H) {
        var W;
        (W = _ == null ? void 0 : _.error) === null || W === void 0 || W.call(_, H), M();
      }), b.addEventListener(Rl, function(H) {
        var W, ne, N = b.status;
        if (N < 400) {
          (W = _ == null ? void 0 : _.complete) === null || W === void 0 || W.call(_);
          var y = void 0;
          try {
            y = Y(Ol, H);
          } catch (w) {
            e.error(w);
            return;
          }
          e.next(y), e.complete();
        } else
          (ne = _ == null ? void 0 : _.error) === null || ne === void 0 || ne.call(_, H), M(N);
      });
    }
    var Q = C.user, F = C.method, k = C.async;
    Q ? b.open(F, l, k, Q, C.password) : b.open(F, l, k), k && (b.timeout = C.timeout, b.responseType = C.responseType), "withCredentials" in b && (b.withCredentials = C.withCredentials);
    for (var f in h)
      h.hasOwnProperty(f) && b.setRequestHeader(f, h[f]);
    return A ? b.send(A) : b.send(), function() {
      b && b.readyState !== 4 && b.abort();
    };
  });
}
function gp(t, e) {
  var n;
  if (!t || typeof t == "string" || Ap(t) || Cp(t) || yp(t) || Ip(t) || _p(t) || Sp(t))
    return t;
  if (Ep(t))
    return t.buffer;
  if (typeof t == "object")
    return e["content-type"] = (n = e["content-type"]) !== null && n !== void 0 ? n : "application/json;charset=utf-8", JSON.stringify(t);
  throw new TypeError("Unknown body type");
}
var bp = Object.prototype.toString;
function Us(t, e) {
  return bp.call(t) === "[object " + e + "]";
}
function yp(t) {
  return Us(t, "ArrayBuffer");
}
function Ip(t) {
  return Us(t, "File");
}
function _p(t) {
  return Us(t, "Blob");
}
function Ep(t) {
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView(t);
}
function Ap(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function Cp(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
function Sp(t) {
  return typeof ReadableStream < "u" && t instanceof ReadableStream;
}
let xp = class {
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
const Tp = new xp("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), wp = [Tp], Lp = wp[0].getUrl();
let Wc = class {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Lp;
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
}, Op = class {
  constructor(e = new Wc()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Rp(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => Gc(n).pipe(
      on((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      jc(
        (r) => Rr(r).pipe(
          on((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      on((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
};
const Wr = (t) => encodeURIComponent(`${t}`), Rp = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Wr(e)}=${Wr(r)}`).join("&") : `${Wr(e)}=${Wr(n)}`
).join("&"), Da = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Mp extends Op {
  retrieveDataResourceByVersion({ id: e, version: n }, r) {
    Da(e, "id", "retrieveDataResourceByVersion"), Da(n, "version", "retrieveDataResourceByVersion");
    const i = {};
    return this.request({
      url: "/api/scl/{id}/version/{version}".replace("{id}", Wr(e)).replace("{version}", Wr(n)),
      method: "GET",
      headers: i,
      responseType: "blob"
    }, r == null ? void 0 : r.responseOpts);
  }
  retrieveDataResourceHistory({ id: e }, n) {
    Da(e, "id", "retrieveDataResourceHistory");
    const r = {};
    return this.request({
      url: "/api/scl/{id}/versions".replace("{id}", Wr(e)),
      method: "GET",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  searchForResources({ dataResourceSearch: e }, n) {
    Da(e, "dataResourceSearch", "searchForResources");
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
class Fs {
  constructor(e, n, r, i, a, o, u, l, c) {
    this.uuid = e, this.name = n, this.author = r, this.type = i, this.changedAt = a, this.version = o, this.available = u, this.deleted = l, this.location = c;
  }
  static from(e) {
    return new Fs(
      e.uuid,
      e.name,
      e.author,
      e.type,
      e.changedAt,
      e.version,
      e.available,
      e.deleted,
      e.location
    );
  }
}
class Dp {
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
const Pp = new Dp("https://demo.compas.energy", {}, "DSOM Versatel Production URL"), Np = [Pp], Hp = Np[0].getUrl();
class Kc {
  constructor(e = {}) {
    this.configuration = e;
  }
  get basePath() {
    return this.configuration.basePath ?? Hp;
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
class Up {
  constructor(e = new Kc()) {
    this.configuration = e, this.middleware = [], this.withMiddleware = (n) => {
      const r = this.clone();
      return r.middleware = r.middleware.concat(n), r;
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: u }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${Fp(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: u ?? "json"
    }), this.rxjsRequest = (n) => Gc(n).pipe(
      on((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      jc(
        (r) => Rr(r).pipe(
          on((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = e.middleware;
  }
  request(e, n) {
    return this.rxjsRequest(this.createRequestArgs(e)).pipe(
      on((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const Rn = (t) => encodeURIComponent(`${t}`), Fp = (t) => Object.entries(t).map(
  ([e, n]) => n instanceof Array ? n.map((r) => `${Rn(e)}=${Rn(r)}`).join("&") : `${Rn(e)}=${Rn(n)}`
).join("&"), Qn = (t, e, n) => {
  if (t == null)
    throw new Error(`Parameter "${e}" was null or undefined when calling "${n}".`);
};
class Bp extends Up {
  assignResourceToLocation({ locationId: e, uuid: n }, r) {
    Qn(e, "locationId", "assignResourceToLocation"), Qn(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", Rn(e)).replace("{uuid}", Rn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: e }, n) {
    Qn(e, "location", "createLocation");
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
    Qn(e, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Rn(e)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: e }, n) {
    Qn(e, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Rn(e)),
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
    Qn(e, "locationId", "unassignResourceFromLocation"), Qn(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", Rn(e)).replace("{uuid}", Rn(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: e, location: n }, r) {
    Qn(e, "locationId", "updateLocation"), Qn(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", Rn(e)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class Bs {
  constructor(e, n, r, i, a) {
    this.uuid = a, this.key = e, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(e) {
    return new Bs(e.key, e.name, e.description, e.assignedResources, e.uuid);
  }
}
class yi {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createLocationsApiClient(this.endpoint), this.historyApiClient = this.createHistoryApiClient(this.endpoint);
  }
  static getInstance() {
    return yi.instance || (yi.instance = new yi()), yi.instance;
  }
  getLocations(e) {
    return this.locationsApiClient.getLocations({
      page: e == null ? void 0 : e.page,
      pageSize: e == null ? void 0 : e.pageSize
    }).pipe(
      on((n) => n || []),
      on((n) => n.map((r) => Bs.from(r)))
    );
  }
  assignResourceToLocation(e, n) {
    return this.locationsApiClient.assignResourceToLocation({ locationId: e, uuid: n }).pipe(on(() => {
    }));
  }
  unassignResourceFromLocation(e, n) {
    return this.locationsApiClient.unassignResourceFromLocation({ locationId: e, uuid: n }).pipe(on(() => {
    }));
  }
  searchResources(e) {
    return console.log(e), this.historyApiClient.searchForResources({
      dataResourceSearch: this.mapToDataResourceSearch(e)
    }).pipe(
      on((n) => (console.log(n), n.results)),
      on(
        (n) => n.map((r) => Fs.from(r))
      )
    );
  }
  mapToDataResourceSearch(e) {
    return {
      uuid: e.uuid || null,
      type: e.type || null,
      name: e.name || null,
      author: e.author || null,
      location: e.location || null,
      from: e.from || null,
      to: e.to || null
    };
  }
  createLocationsApiClient(e) {
    const n = new Kc({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Bp(n);
  }
  createHistoryApiClient(e) {
    const n = new Wc({
      basePath: e
      // accessToken: authInfo.token,
    });
    return new Mp(n);
  }
}
var rr;
class Ml {
  constructor() {
    $e(this, rr, Ct([]));
  }
  get store() {
    return $(this, rr);
  }
  set(e) {
    $(this, rr).set(e);
  }
  update(e) {
    $(this, rr).update((n) => n.map((r) => r.uuid === e.uuid ? e : r));
  }
  add(e) {
    $(this, rr).update((n) => [...n, e]);
  }
  remove(e) {
    $(this, rr).update((n) => n.filter((r) => r.uuid !== e));
  }
  findById(e) {
    return Ju($(this, rr)).find((n) => n.uuid === e);
  }
}
rr = new WeakMap();
function kp(t, e = {}) {
  const n = e.priority || "polite", r = e.ownerDocument || document, i = r.querySelectorAll("[data-smui-dom-announce]");
  i.length && i.forEach((o) => {
    var u;
    (u = o.parentNode) === null || u === void 0 || u.removeChild(o);
  });
  const a = r.createElement("div");
  a.style.position = "absolute", a.style.top = "-9999px", a.style.left = "-9999px", a.style.height = "1px", a.style.overflow = "hidden", a.setAttribute("aria-atomic", "true"), a.setAttribute("aria-live", n), a.setAttribute("data-mdc-dom-announce", "true"), a.setAttribute("data-smui-dom-announce", "true"), r.body.appendChild(a), window.setTimeout(() => {
    a.textContent = t;
    const o = () => {
      a.textContent = "", a.removeEventListener("click", o);
    };
    a.addEventListener("click", o, { once: !0 });
  }, 100);
}
function He(t) {
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
function Gi(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && e.indexOf(a.substring(0, o + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = t[a]);
  }
  return r;
}
function st(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = t[a]);
  }
  return r;
}
class xa {
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
    n in a || (a[n] = /* @__PURE__ */ new Map()), a[n].set(r, Rf(e, n, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, n, r) {
    const i = this.elementMap.get(e);
    if (i == null || !(n in i))
      return;
    const a = i[n], o = a.get(r);
    o != null && (o(), a.delete(r), a.size === 0 && (delete i[n], Object.keys(i).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, n) => {
      for (let [r, i] of Object.entries(e))
        i.forEach((a, o) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function K(t, e) {
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
            const o = r[i];
            Array.isArray(o) && o.length > 1 ? a.update(o[1]) : a.update();
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
var Pa;
function zc(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Pa;
  if (typeof Pa == "boolean" && !e)
    return Pa;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, e || (Pa = r), r;
}
function Vp(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + n.left, o = i + n.top, u, l;
  if (t.type === "touchstart") {
    var c = t;
    u = c.changedTouches[0].pageX - a, l = c.changedTouches[0].pageY - o;
  } else {
    var d = t;
    u = d.pageX - a, l = d.pageY - o;
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
var Pt = (
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
var bo = (
  /** @class */
  function() {
    function t(e, n) {
      for (var r = [], i = 2; i < arguments.length; i++)
        r[i - 2] = arguments[i];
      this.root = e, this.initialize.apply(this, Ar([], Ui(r))), this.foundation = n === void 0 ? this.getDefaultFoundation() : n, this.foundation.init(), this.initialSyncWithDOM();
    }
    return t.attachTo = function(e) {
      return new t(e, new Pt({}));
    }, t.prototype.initialize = function() {
    }, t.prototype.getDefaultFoundation = function() {
      throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    }, t.prototype.initialSyncWithDOM = function() {
    }, t.prototype.destroy = function() {
      this.foundation.destroy();
    }, t.prototype.listen = function(e, n, r) {
      this.root.addEventListener(e, n, r);
    }, t.prototype.unlisten = function(e, n, r) {
      this.root.removeEventListener(e, n, r);
    }, t.prototype.emit = function(e, n, r) {
      r === void 0 && (r = !1);
      var i;
      typeof CustomEvent == "function" ? i = new CustomEvent(e, {
        bubbles: r,
        detail: n
      }) : (i = document.createEvent("CustomEvent"), i.initCustomEvent(e, r, !1, n)), this.root.dispatchEvent(i);
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
function sa(t) {
  return t === void 0 && (t = window), Gp(t) ? { passive: !0 } : !1;
}
function Gp(t) {
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
const Xc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: sa
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
function jp(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (ks(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function ks(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function qp(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: jp,
  estimateScrollWidth: qp,
  matches: ks
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
var Wp = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Kp = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Dl = {
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
var Pl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Nl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Na = [], Io = (
  /** @class */
  function(t) {
    it(e, t);
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
        return Wp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Kp;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Dl;
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
        var i = e.cssClasses, a = i.ROOT, o = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(a), n.adapter.isUnbounded() && (n.adapter.addClass(o), n.layoutInternal());
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
          for (var a = Lt(Pl), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
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
          for (var a = Lt(Nl), o = a.next(); !o.done; o = a.next()) {
            var u = o.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            o && !o.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var i = Lt(Pl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.activateHandler);
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
        for (var i = Lt(Nl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterDocumentInteractionHandler(o, this.deactivateHandler);
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
          var a = this.previousActivationEvent, o = a && n !== void 0 && a.type !== n.type;
          if (!o) {
            i.isActivated = !0, i.isProgrammatic = n === void 0, i.activationEvent = n, i.wasActivatedByPointer = i.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var u = n !== void 0 && Na.length > 0 && Na.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Na.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Na = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, o = e.cssClasses, u = o.FG_DEACTIVATION, l = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var d = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, p = f.endPoint;
        d = v.x + "px, " + v.y + "px", h = p.x + "px, " + p.y + "px";
      }
      this.adapter.updateCssVariable(i, d), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, i = n.wasActivatedByPointer, a;
      i ? a = Vp(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var o = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: o };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, o = i.isActivated, u = a || !o;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, Dl.FG_DEACTIVATION_MS));
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
        var o = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return o + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, r = n.VAR_FG_SIZE, i = n.VAR_LEFT, a = n.VAR_TOP, o = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(o, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(Pt)
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
var Ja = (
  /** @class */
  function(t) {
    it(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.disabled = !1, n;
    }
    return e.attachTo = function(n, r) {
      r === void 0 && (r = {
        isUnbounded: void 0
      });
      var i = new e(n);
      return r.isUnbounded !== void 0 && (i.unbounded = r.isUnbounded), i;
    }, e.createAdapter = function(n) {
      return {
        addClass: function(r) {
          return n.root.classList.add(r);
        },
        browserSupportsCssVars: function() {
          return zc(window);
        },
        computeBoundingRect: function() {
          return n.root.getBoundingClientRect();
        },
        containsEventTarget: function(r) {
          return n.root.contains(r);
        },
        deregisterDocumentInteractionHandler: function(r, i) {
          return document.documentElement.removeEventListener(r, i, sa());
        },
        deregisterInteractionHandler: function(r, i) {
          return n.root.removeEventListener(r, i, sa());
        },
        deregisterResizeHandler: function(r) {
          return window.removeEventListener("resize", r);
        },
        getWindowPageOffset: function() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        },
        isSurfaceActive: function() {
          return ks(n.root, ":active");
        },
        isSurfaceDisabled: function() {
          return !!n.disabled;
        },
        isUnbounded: function() {
          return !!n.unbounded;
        },
        registerDocumentInteractionHandler: function(r, i) {
          return document.documentElement.addEventListener(r, i, sa());
        },
        registerInteractionHandler: function(r, i) {
          return n.root.addEventListener(r, i, sa());
        },
        registerResizeHandler: function(r) {
          return window.addEventListener("resize", r);
        },
        removeClass: function(r) {
          return n.root.classList.remove(r);
        },
        updateCssVariable: function(r, i) {
          return n.root.style.setProperty(r, i);
        }
      };
    }, Object.defineProperty(e.prototype, "unbounded", {
      get: function() {
        return !!this.isUnbounded;
      },
      set: function(n) {
        this.isUnbounded = !!n, this.setUnbounded();
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.activate = function() {
      this.foundation.activate();
    }, e.prototype.deactivate = function() {
      this.foundation.deactivate();
    }, e.prototype.layout = function() {
      this.foundation.layout();
    }, e.prototype.getDefaultFoundation = function() {
      return new Io(e.createAdapter(this));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in n.dataset;
    }, e.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(!!this.isUnbounded);
    }, e;
  }(bo)
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
var Oe = {
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
}, tn = /* @__PURE__ */ new Set();
tn.add(Oe.BACKSPACE);
tn.add(Oe.ENTER);
tn.add(Oe.SPACEBAR);
tn.add(Oe.PAGE_UP);
tn.add(Oe.PAGE_DOWN);
tn.add(Oe.END);
tn.add(Oe.HOME);
tn.add(Oe.ARROW_LEFT);
tn.add(Oe.ARROW_UP);
tn.add(Oe.ARROW_RIGHT);
tn.add(Oe.ARROW_DOWN);
tn.add(Oe.DELETE);
tn.add(Oe.ESCAPE);
tn.add(Oe.TAB);
var un = {
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
}, nn = /* @__PURE__ */ new Map();
nn.set(un.BACKSPACE, Oe.BACKSPACE);
nn.set(un.ENTER, Oe.ENTER);
nn.set(un.SPACEBAR, Oe.SPACEBAR);
nn.set(un.PAGE_UP, Oe.PAGE_UP);
nn.set(un.PAGE_DOWN, Oe.PAGE_DOWN);
nn.set(un.END, Oe.END);
nn.set(un.HOME, Oe.HOME);
nn.set(un.ARROW_LEFT, Oe.ARROW_LEFT);
nn.set(un.ARROW_UP, Oe.ARROW_UP);
nn.set(un.ARROW_RIGHT, Oe.ARROW_RIGHT);
nn.set(un.ARROW_DOWN, Oe.ARROW_DOWN);
nn.set(un.DELETE, Oe.DELETE);
nn.set(un.ESCAPE, Oe.ESCAPE);
nn.set(un.TAB, Oe.TAB);
var lr = /* @__PURE__ */ new Set();
lr.add(Oe.PAGE_UP);
lr.add(Oe.PAGE_DOWN);
lr.add(Oe.END);
lr.add(Oe.HOME);
lr.add(Oe.ARROW_LEFT);
lr.add(Oe.ARROW_UP);
lr.add(Oe.ARROW_RIGHT);
lr.add(Oe.ARROW_DOWN);
function gt(t) {
  var e = t.key;
  if (tn.has(e))
    return e;
  var n = nn.get(t.keyCode);
  return n || Oe.UNKNOWN;
}
function zp(t) {
  return lr.has(gt(t));
}
const { applyPassive: Hl } = Xc, { matches: Xp } = yo;
function jt(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: u, eventTarget: l, activeTarget: c, addClass: d = (p) => t.classList.add(p), removeClass: h = (p) => t.classList.remove(p), addStyle: f = (p, g) => t.style.setProperty(p, g), initPromise: v = Promise.resolve() } = {}) {
  let p, g = new xa(), I = oe("SMUI:addLayoutListener"), E, A = o, C = l, b = c;
  function _() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), p && A !== o && (A = o, o ? p.activate() : o === !1 && p.deactivate()), e && !p ? (p = new Io({
      addClass: d,
      browserSupportsCssVars: () => zc(window),
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
      isSurfaceActive: () => o ?? Xp(c || t, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (T, x) => {
        const L = Hl();
        g.on(document.documentElement, T, x, typeof L == "boolean" ? { capture: L } : L);
      },
      registerInteractionHandler: (T, x) => {
        const L = Hl();
        g.on(l || t, T, x, typeof L == "boolean" ? { capture: L } : L);
      },
      registerResizeHandler: (T) => g.on(window, "resize", T),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      p && (p.init(), p.setUnbounded(r));
    })) : p && !e && v.then(() => {
      p && (p.destroy(), p = void 0, g.clear());
    }), p && (C !== l || b !== c) && (C = l, b = c, p.destroy(), requestAnimationFrame(() => {
      p && (p.init(), p.setUnbounded(r));
    })), !e && r && d("mdc-ripple-upgraded--unbounded");
  }
  _(), I && (E = I(S));
  function S() {
    p && p.layout();
  }
  return {
    update(T) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: i,
        color: a,
        active: o,
        rippleElement: u,
        eventTarget: l,
        activeTarget: c,
        addClass: d,
        removeClass: h,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (x) => t.classList.add(x), removeClass: (x) => t.classList.remove(x), addStyle: (x, L) => t.style.setProperty(x, L), initPromise: Promise.resolve() }, T)), _();
    },
    destroy() {
      p && (p.destroy(), p = void 0, g.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), E && E();
    }
  };
}
function Yp(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Mr), a = m(e, "tag", 3, "span"), o = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "component",
    "tag",
    "children"
  ]), u;
  const l = oe("SMUI:label:context"), c = oe("SMUI:label:tabindex");
  function d() {
    return u.getElement();
  }
  var h = { getElement: d }, f = le(), v = Z(f);
  {
    let p = /* @__PURE__ */ ue(() => He({
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
    Lr(v, i, (g, I) => {
      Se(
        I(g, rt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(p);
            }
          },
          () => l === "snackbar" ? { "aria-atomic": "false" } : {},
          {
            get tabindex() {
              return c;
            }
          },
          () => o,
          {
            children: (E, A) => {
              var C = le(), b = Z(C);
              _e(b, () => e.children ?? be), O(E, C);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => u = E,
        () => u
      );
    });
  }
  return O(t, f), De(h);
}
function Zp(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "on", 3, !1), a = m(e, "component", 3, Mr), o = m(e, "tag", 3, "i"), u = /* @__PURE__ */ Ge(e, [
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
  const c = /* @__PURE__ */ ue(() => o() === "svg" || a() === $p), d = oe("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = le(), p = Z(v);
  {
    let g = /* @__PURE__ */ ue(() => He({
      "mdc-button__icon": d === "button",
      "mdc-fab__icon": d === "fab",
      "mdc-icon-button__icon": d === "icon-button",
      "mdc-icon-button__icon--on": d === "icon-button" && i(),
      "mdc-tab__icon": d === "tab",
      "mdc-banner__icon": d === "banner",
      "mdc-segmented-button__icon": d === "segmented-button",
      [r()]: !0
    }));
    Lr(p, a, (I, E) => {
      Se(
        E(I, rt(
          {
            get tag() {
              return o();
            },
            get use() {
              return n();
            },
            get class() {
              return s(g);
            },
            "aria-hidden": "true"
          },
          () => s(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (A, C) => {
              var b = le(), _ = Z(b);
              _e(_, () => e.children ?? be), O(A, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => l = A,
        () => l
      );
    });
  }
  return O(t, v), De(f);
}
var Qp = /* @__PURE__ */ ln("<svg><!></svg>");
function Mr(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "tag", 3, "div"), i = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ ue(() => [
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
  let o;
  function u() {
    return o;
  }
  var l = { getElement: u }, c = le(), d = Z(c);
  {
    var h = (v) => {
      var p = Qp();
      Be(p, () => ({ ...i }));
      var g = ye(p);
      _e(g, () => e.children ?? be), Se(p, (I) => o = I, () => o), Ue(p, (I, E) => K == null ? void 0 : K(I, E), n), O(v, p);
    }, f = (v) => {
      var p = le(), g = Z(p);
      {
        var I = (A) => {
          var C = le(), b = Z(C);
          al(b, r, !1, (_, S) => {
            Se(_, (T) => o = T, () => o), Ue(_, (T, x) => K == null ? void 0 : K(T, x), n), Be(_, () => ({ ...i }));
          }), O(A, C);
        }, E = (A) => {
          var C = le(), b = Z(C);
          al(b, r, !1, (_, S) => {
            Se(_, (L) => o = L, () => o), Ue(_, (L, U) => K == null ? void 0 : K(L, U), n), Be(_, () => ({ ...i }));
            var T = le(), x = Z(T);
            _e(x, () => e.children ?? be), O(S, T);
          }), O(A, C);
        };
        ce(
          g,
          (A) => {
            s(a) ? A(I) : A(E, !1);
          },
          !0
        );
      }
      O(v, p);
    };
    ce(d, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return O(t, c), De(l);
}
var Jp = /* @__PURE__ */ ln("<svg><!></svg>");
function $p(t, e) {
  Me(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = m(e, "use", 19, () => []), r = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, u = Jp();
  Be(u, () => ({ ...r }));
  var l = ye(u);
  return _e(l, () => e.children ?? be), Se(u, (c) => i = c, () => i), Ue(u, (c, d) => K == null ? void 0 : K(c, d), n), O(t, u), De(o);
}
function Ii(t, e) {
  Me(e, !0);
  const [n, r] = xn(), i = Ct(e.value);
  ee(e.key, i), Te(() => {
    vn(i, e.value);
  }), Kn(() => {
    i.set(void 0);
  });
  var a = le(), o = Z(a);
  _e(o, () => e.children ?? be), O(t, a), De(), r();
}
var eg = /* @__PURE__ */ pe('<div class="mdc-button__touch"></div>'), tg = /* @__PURE__ */ pe('<div class="mdc-button__ripple"></div> <!><!>', 1);
function ng(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "ripple", 3, !0), o = m(e, "color", 3, "primary"), u = m(e, "variant", 3, "text"), l = m(e, "touch", 3, !1), c = m(e, "action", 3, "close"), d = m(e, "defaultAction", 3, !1), h = m(e, "secondary", 3, !1), f = m(e, "component", 3, Mr), v = m(e, "tag", 19, () => e.href == null ? "button" : "a"), p = /* @__PURE__ */ Ge(e, [
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
  ]), g, I = Ee({}), E = Ee({}), A = oe("SMUI:button:context");
  const C = /* @__PURE__ */ ue(() => A === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), b = /* @__PURE__ */ ue(() => A === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), _ = /* @__PURE__ */ ue(() => A === "banner" ? {} : { secondary: h() });
  let S = e.disabled;
  Te(() => {
    if (S !== e.disabled) {
      if (g) {
        const F = Y();
        "blur" in F && F.blur();
      }
      S = p.disabled;
    }
  }), ee("SMUI:label:context", "button"), ee("SMUI:icon:context", "button");
  function T(F) {
    I[F] || (I[F] = !0);
  }
  function x(F) {
    (!(F in I) || I[F]) && (I[F] = !1);
  }
  function L(F, k) {
    E[F] != k && (k === "" || k == null ? delete E[F] : E[F] = k);
  }
  function U() {
    A === "banner" && ze(Y(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function Y() {
    return g.getElement();
  }
  var B = { getElement: Y }, M = le(), Q = Z(M);
  {
    let F = /* @__PURE__ */ ue(() => [
      [
        jt,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!e.disabled,
          addClass: T,
          removeClass: x,
          addStyle: L
        }
      ],
      ...n()
    ]), k = /* @__PURE__ */ ue(() => He({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": o() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": A === "card:action",
      "mdc-card__action--button": A === "card:action",
      "mdc-dialog__button": A === "dialog:action",
      "mdc-top-app-bar__navigation-icon": A === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": A === "top-app-bar:action",
      "mdc-snackbar__action": A === "snackbar:actions",
      "mdc-banner__secondary-action": A === "banner" && h(),
      "mdc-banner__primary-action": A === "banner" && !h(),
      "mdc-tooltip__action": A === "tooltip:rich-actions",
      ...I,
      [r()]: !0
    })), H = /* @__PURE__ */ ue(() => Object.entries(E).map(([W, ne]) => `${W}: ${ne};`).concat([i()]).join(" "));
    Lr(Q, f, (W, ne) => {
      Se(
        ne(W, rt(
          {
            get tag() {
              return v();
            },
            get use() {
              return s(F);
            },
            get class() {
              return s(k);
            },
            get style() {
              return s(H);
            }
          },
          () => s(C),
          () => s(b),
          () => s(_),
          {
            get href() {
              return e.href;
            }
          },
          () => p,
          {
            onclick: (N) => {
              var y;
              U(), (y = e.onclick) == null || y.call(e, N);
            },
            children: (N, y) => {
              var w = tg(), te = Ie(Z(w), 2);
              _e(te, () => e.children ?? be);
              var D = Ie(te);
              {
                var j = (de) => {
                  var V = eg();
                  O(de, V);
                };
                ce(D, (de) => {
                  l() && de(j);
                });
              }
              O(N, w);
            },
            $$slots: { default: !0 }
          }
        )),
        (N) => g = N,
        () => g
      );
    });
  }
  return O(t, M), De(B);
}
function Vs(t, e) {
  Me(e, !0);
  let n = m(e, "callback", 3, () => {
  }), r = m(e, "disabled", 3, !1), i = m(e, "variant", 3, "default"), a = m(e, "isAbortAction", 3, !1), o = m(e, "backgroundColor", 3, void 0);
  {
    let u = /* @__PURE__ */ ue(() => a() ? "background-color: #ff3e00;" : "background-color: " + o());
    ng(t, {
      onclick: () => n()(),
      get variant() {
        return i();
      },
      get disabled() {
        return r();
      },
      get style() {
        return s(u);
      },
      children: (l, c) => {
        var d = le(), h = Z(d);
        _e(h, () => e.children ?? be), O(l, d);
      },
      $$slots: { default: !0 }
    });
  }
  De();
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
var Ha = {
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
var rg = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ha;
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
      return this.adapter.hasClass(Ha.ICON_BUTTON_ON);
    }, e.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(Ha.ICON_BUTTON_ON) : this.adapter.removeClass(Ha.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(Jn.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(Jn.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(Jn.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(Jn.ARIA_PRESSED, "" + n);
    }, e;
  }(Pt)
), ig = /* @__PURE__ */ pe('<div class="mdc-icon-button__touch"></div>'), ag = /* @__PURE__ */ pe('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function og(t, e) {
  Me(e, !0);
  let n = () => {
  };
  function r(y) {
    return y === n;
  }
  let i = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), u = m(e, "ripple", 3, !0), l = m(e, "toggle", 3, !1), c = m(e, "pressed", 15, n), d = m(e, "touch", 3, !1), h = m(e, "displayFlex", 3, !0), f = m(e, "size", 3, "normal"), v = m(e, "component", 3, Mr), p = m(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ Ge(e, [
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
  ]), I, E, A = /* @__PURE__ */ we(Ee({})), C = Ee({}), b = /* @__PURE__ */ we(Ee({})), _ = oe("SMUI:icon-button:context"), S = oe("SMUI:icon-button:aria-describedby");
  const T = /* @__PURE__ */ ue(() => {
    if (_ === "data-table:pagination")
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
    else return _ === "dialog:header" || _ === "dialog:sheet" ? { "data-mdc-dialog-action": e.action } : { action: e.action };
  });
  let x = !!e.disabled;
  Te(() => {
    if (x != !!e.disabled) {
      if (I) {
        const y = H();
        "blur" in y && y.blur();
      }
      x = !!e.disabled;
    }
  }), ee("SMUI:icon:context", "icon-button");
  let L = null;
  Te(() => {
    I && H() && l() !== L && (l() && !E ? (E = new rg({
      addClass: Y,
      hasClass: U,
      notifyChange: (y) => {
        k(y), ze(H(), "SMUIIconButtonToggleChange", y);
      },
      removeClass: B,
      getAttr: Q,
      setAttr: F
    }), E.init()) : !l() && E && (E.destroy(), E = void 0, ae(A, {}, !0), ae(b, {}, !0)), L = l());
  }), Te(() => {
    E && !r(c()) && E.isOn() !== c() && E.toggle(c());
  }), Kn(() => {
    E && E.destroy();
  });
  function U(y) {
    return y in s(A) ? s(A)[y] : H().classList.contains(y);
  }
  function Y(y) {
    s(A)[y] || (s(A)[y] = !0);
  }
  function B(y) {
    (!(y in s(A)) || s(A)[y]) && (s(A)[y] = !1);
  }
  function M(y, w) {
    C[y] != w && (w === "" || w == null ? delete C[y] : C[y] = w);
  }
  function Q(y) {
    return y in s(b) ? s(b)[y] ?? null : H().getAttribute(y);
  }
  function F(y, w) {
    s(b)[y] !== w && (s(b)[y] = w);
  }
  function k(y) {
    c(y.isOn);
  }
  function H() {
    return I.getElement();
  }
  var W = { getElement: H }, ne = le(), N = Z(ne);
  {
    let y = /* @__PURE__ */ ue(() => [
      [
        jt,
        {
          ripple: u(),
          unbounded: !0,
          color: e.color,
          disabled: !!e.disabled,
          addClass: Y,
          removeClass: B,
          addStyle: M
        }
      ],
      ...i()
    ]), w = /* @__PURE__ */ ue(() => He({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(c()) && c(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": h(),
      "smui-icon-button--size-button": f() === "button",
      "smui-icon-button--size-mini": f() === "mini",
      "mdc-icon-button--reduced-size": f() === "mini" || f() === "button",
      "mdc-card__action": _ === "card:action",
      "mdc-card__action--icon": _ === "card:action",
      "mdc-top-app-bar__navigation-icon": _ === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": _ === "top-app-bar:action",
      "mdc-snackbar__dismiss": _ === "snackbar:actions",
      "mdc-data-table__pagination-button": _ === "data-table:pagination",
      "mdc-data-table__sort-icon-button": _ === "data-table:sortable-header-cell",
      "mdc-dialog__close": (_ === "dialog:header" || _ === "dialog:sheet") && e.action === "close",
      ...s(A),
      [a()]: !0
    })), te = /* @__PURE__ */ ue(() => Object.entries(C).map(([de, V]) => `${de}: ${V};`).concat([o()]).join(" ")), D = /* @__PURE__ */ ue(() => r(c()) ? null : c() ? "true" : "false"), j = /* @__PURE__ */ ue(() => c() ? e.ariaLabelOn : e.ariaLabelOff);
    Lr(N, v, (de, V) => {
      Se(
        V(de, rt(
          {
            get tag() {
              return p();
            },
            get use() {
              return s(y);
            },
            get class() {
              return s(w);
            },
            get style() {
              return s(te);
            },
            get "aria-pressed"() {
              return s(D);
            },
            get "aria-label"() {
              return s(j);
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
          () => s(T),
          () => s(b),
          () => g,
          {
            onclick: (re) => {
              var X;
              E && E.handleClick(), _ === "top-app-bar:navigation" && ze(H(), "SMUITopAppBarIconButtonNav"), (X = e.onclick) == null || X.call(e, re);
            },
            children: (re, X) => {
              var he = ag(), ie = Ie(Z(he), 2);
              _e(ie, () => e.children ?? be);
              var je = Ie(ie);
              {
                var qe = (Pe) => {
                  var Le = ig();
                  O(Pe, Le);
                };
                ce(je, (Pe) => {
                  d() && Pe(qe);
                });
              }
              O(re, he);
            },
            $$slots: { default: !0 }
          }
        )),
        (re) => I = re,
        () => I
      );
    });
  }
  return O(t, ne), De(W);
}
function sg(t, e) {
  let n = m(e, "callback", 3, () => {
  }), r = m(e, "icon", 3, ""), i = m(e, "disabled", 3, !1);
  og(t, {
    get disabled() {
      return i();
    },
    style: "margin-bottom: 0;",
    $$events: {
      click(...a) {
        var o;
        (o = n()) == null || o.apply(this, a);
      }
    },
    children: (a, o) => {
      Zp(a, {
        class: "material-icons",
        children: (u, l) => {
          var c = Wt();
          Fe(() => dt(c, r())), O(u, c);
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
var lg = {
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
var ug = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lg;
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
  }(Pt)
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
var cg = (
  /** @class */
  function(t) {
    it(e, t);
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
  }(Pt)
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
var dg = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Ul = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, fg = {
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
var hg = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return dg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ul;
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
      n > 0 && (n += Ul.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(Pt)
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
var Bo = {
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
}, vg = {
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
}, mg = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], pg = [
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
var Bl = ["mousedown", "touchstart"], kl = ["click", "keydown"], gg = (
  /** @class */
  function(t) {
    it(e, t);
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
        return vg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Bo;
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
        return pg.indexOf(n) >= 0;
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
        for (var o = Lt(Bl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Lt(kl), d = c.next(); !d.done; d = c.next()) {
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
        for (var o = Lt(Bl), u = o.next(); !u.done; u = o.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        n = { error: h };
      } finally {
        try {
          u && !u.done && (r = o.return) && r.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var c = Lt(kl), d = c.next(); !d.done; d = c.next()) {
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
        return mg.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
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
        var r = n.touches, i = r ? r[0] : n, a = i.target.getBoundingClientRect(), o = i.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(o);
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
        var a = this.helperText.isVisible(), o = this.helperText.getId();
        a && o ? this.adapter.setInputAttr(Bo.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Bo.ARIA_DESCRIBEDBY);
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
  }(Pt)
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
var Vl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, bg = {
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
var Gl = ["click", "keydown"], yg = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Vl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return bg;
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
        for (var i = Lt(Gl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.registerInteractionHandler(o, this.interactionHandler);
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
        for (var i = Lt(Gl), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          this.adapter.deregisterInteractionHandler(o, this.interactionHandler);
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
      this.savedTabIndex && (n ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Vl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(n) {
      this.adapter.setAttr("aria-label", n);
    }, e.prototype.setContent = function(n) {
      this.adapter.setContent(n);
    }, e.prototype.handleInteraction = function(n) {
      var r = n.key === "Enter" || n.keyCode === 13;
      (n.type === "click" || r) && (n.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(Pt)
), Ig = /* @__PURE__ */ pe("<span><!></span>"), _g = /* @__PURE__ */ pe("<label><!></label>");
function $a(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "floatAbove", 15, !1), o = m(e, "required", 15, !1), u = m(e, "wrapped", 3, !1), l = /* @__PURE__ */ Ge(e, [
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
  ]), c, d = /* @__PURE__ */ we(void 0), h = new xa(), f = Ee({}), v = Ee({}), p = oe("SMUI:generic:input:props") ?? {}, g = a();
  Te(() => {
    s(d) && g !== a() && (g = a(), s(d).float(a()));
  });
  let I = o();
  Te(() => {
    s(d) && I !== o() && (I = o(), s(d).setRequired(o()));
  });
  const E = oe("SMUI:floating-label:mount"), A = oe("SMUI:floating-label:unmount");
  at(() => {
    ae(
      d,
      new ug({
        addClass: C,
        removeClass: b,
        getWidth: () => {
          var y, w;
          const W = Y(), ne = W.cloneNode(!0);
          (y = W.parentNode) == null || y.appendChild(ne), ne.classList.add("smui-floating-label--remove-transition"), ne.classList.add("smui-floating-label--force-size"), ne.classList.remove("mdc-floating-label--float-above");
          const N = ne.scrollWidth;
          return (w = W.parentNode) == null || w.removeChild(ne), N;
        },
        registerInteractionHandler: (W, ne) => h.on(Y(), W, ne),
        deregisterInteractionHandler: (W, ne) => h.off(Y(), W, ne)
      }),
      !0
    );
    const H = {
      get element() {
        return Y();
      },
      addStyle: _,
      removeStyle: S
    };
    return E && E(H), s(d).init(), () => {
      var W;
      A && A(H), (W = s(d)) == null || W.destroy(), h.clear();
    };
  });
  function C(H) {
    f[H] || (f[H] = !0);
  }
  function b(H) {
    (!(H in f) || f[H]) && (f[H] = !1);
  }
  function _(H, W) {
    v[H] != W && (W === "" || W == null ? delete v[H] : v[H] = W);
  }
  function S(H) {
    H in v && delete v[H];
  }
  function T(H) {
    var W;
    (W = s(d)) == null || W.shake(H);
  }
  function x(H) {
    a(H);
  }
  function L(H) {
    o(H);
  }
  function U() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getWidth();
  }
  function Y() {
    return c;
  }
  var B = { shake: T, float: x, setRequired: L, getWidth: U, getElement: Y }, M = le(), Q = Z(M);
  {
    var F = (H) => {
      var W = Ig();
      Be(W, (N, y) => ({ class: N, style: y, ...l }), [
        () => He({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([N, y]) => `${N}: ${y};`).concat([i()]).join(" ")
      ]);
      var ne = ye(W);
      _e(ne, () => e.children ?? be), Se(W, (N) => c = N, () => c), Ue(W, (N, y) => K == null ? void 0 : K(N, y), n), O(H, W);
    }, k = (H) => {
      var W = _g();
      Be(
        W,
        (N, y) => ({
          class: N,
          style: y,
          for: e.for || (p ? p.id : void 0),
          ...l
        }),
        [
          () => He({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(v).map(([N, y]) => `${N}: ${y};`).concat([i()]).join(" ")
        ]
      );
      var ne = ye(W);
      _e(ne, () => e.children ?? be), Se(W, (N) => c = N, () => c), Ue(W, (N, y) => K == null ? void 0 : K(N, y), n), O(H, W);
    };
    ce(Q, (H) => {
      u() ? H(F) : H(k, !1);
    });
  }
  return O(t, M), De(B);
}
var Eg = /* @__PURE__ */ pe("<div></div>");
function Yc(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "active", 3, !1), o = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ we(void 0), c = new xa(), d = Ee({}), h = Ee({});
  at(() => (ae(
    l,
    new cg({
      addClass: v,
      removeClass: p,
      hasClass: f,
      setStyle: g,
      registerEventHandler: (S, T) => c.on(C(), S, T),
      deregisterEventHandler: (S, T) => c.off(C(), S, T)
    }),
    !0
  ), s(l).init(), () => {
    var S;
    (S = s(l)) == null || S.destroy(), c.clear();
  }));
  function f(S) {
    return S in d ? d[S] : C().classList.contains(S);
  }
  function v(S) {
    d[S] || (d[S] = !0);
  }
  function p(S) {
    (!(S in d) || d[S]) && (d[S] = !1);
  }
  function g(S, T) {
    h[S] != T && (T === "" || T == null ? delete h[S] : h[S] = T);
  }
  function I() {
    var S;
    (S = s(l)) == null || S.activate();
  }
  function E() {
    var S;
    (S = s(l)) == null || S.deactivate();
  }
  function A(S) {
    var T;
    (T = s(l)) == null || T.setRippleCenter(S);
  }
  function C() {
    return u;
  }
  var b = { activate: I, deactivate: E, setRippleCenter: A, getElement: C }, _ = Eg();
  return Be(_, (S, T) => ({ class: S, style: T, ...o }), [
    () => He({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(h).map(([S, T]) => `${S}: ${T};`).concat([i()]).join(" ")
  ]), Se(_, (S) => u = S, () => u), Ue(_, (S, T) => K == null ? void 0 : K(S, T), n), O(t, _), De(b);
}
var Ag = /* @__PURE__ */ pe('<div class="mdc-notched-outline__notch"><!></div>'), Cg = /* @__PURE__ */ pe('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Zc(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "notched", 3, !1), a = m(e, "noLabel", 3, !1), o = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ we(void 0), c = /* @__PURE__ */ we(void 0), d = Ee({}), h = Ee({}), f;
  Te(() => {
    s(c) !== f && (s(c) ? (s(c).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      s(c) && s(c).removeStyle("transition-duration");
    })) : p("mdc-notched-outline--upgraded"), f = s(c));
  }), ee("SMUI:floating-label:mount", (x) => {
    ae(c, x, !0);
  }), ee("SMUI:floating-label:unmount", () => {
    ae(c, void 0);
  }), at(() => (ae(
    l,
    new hg({
      addClass: v,
      removeClass: p,
      setNotchWidthProperty: (x) => g("width", x + "px"),
      removeNotchWidthProperty: () => I("width")
    }),
    !0
  ), s(l).init(), () => {
    var x;
    (x = s(l)) == null || x.destroy();
  }));
  function v(x) {
    d[x] || (d[x] = !0);
  }
  function p(x) {
    (!(x in d) || d[x]) && (d[x] = !1);
  }
  function g(x, L) {
    h[x] != L && (L === "" || L == null ? delete h[x] : h[x] = L);
  }
  function I(x) {
    x in h && delete h[x];
  }
  function E(x) {
    var L;
    (L = s(l)) == null || L.notch(x);
  }
  function A() {
    var x;
    (x = s(l)) == null || x.closeNotch();
  }
  function C() {
    return u;
  }
  var b = { notch: E, closeNotch: A, getElement: C }, _ = Cg();
  Be(_, (x) => ({ class: x, ...o }), [
    () => He({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var S = Ie(ye(_), 2);
  {
    var T = (x) => {
      var L = Ag(), U = ye(L);
      _e(U, () => e.children ?? be), Fe((Y) => en(L, Y), [
        () => Object.entries(h).map(([Y, B]) => `${Y}: ${B};`).join(" ")
      ]), O(x, L);
    };
    ce(S, (x) => {
      a() || x(T);
    });
  }
  return Se(_, (x) => u = x, () => u), Ue(_, (x, L) => K == null ? void 0 : K(x, L), n), O(t, _), De(b);
}
function Gs(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "component", 3, Mr), a = m(e, "tag", 3, "div"), o = m(e, "_smuiClass", 3, ""), u = m(e, "_smuiClassMap", 23, () => ({})), l = m(e, "_smuiContexts", 19, () => ({})), c = m(e, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ Ge(e, [
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
  Object.entries(u()).forEach(([E, A]) => {
    const C = oe(A);
    C && "subscribe" in C && f.push(C.subscribe((b) => {
      u()[E] = b;
    }));
  });
  for (let E in l())
    l().hasOwnProperty(E) && ee(E, l()[E]);
  Kn(() => {
    for (const E of f)
      E();
  });
  function v() {
    return h.getElement();
  }
  var p = { getElement: v }, g = le(), I = Z(g);
  {
    let E = /* @__PURE__ */ ue(() => He({
      [o()]: !0,
      ...u(),
      [r()]: !0
    }));
    Lr(I, i, (A, C) => {
      Se(
        C(A, rt(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return s(E);
            }
          },
          c,
          () => d,
          {
            children: (b, _) => {
              var S = le(), T = Z(S);
              _e(T, () => e.children ?? be), O(b, S);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => h = b,
        () => h
      );
    });
  }
  return O(t, g), De(p);
}
function Sg(t, e) {
  Me(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    Gs(t, rt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, u) => {
        var l = le(), c = Z(l);
        _e(c, () => e.children ?? be), O(o, l);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), De(a);
}
function xg(t, e) {
  Me(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    Gs(t, rt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = le(), c = Z(l);
          _e(c, () => e.children ?? be), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), De(a);
}
function Tg(t, e) {
  Me(e, !0);
  let n = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    Gs(t, rt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, u) => {
          var l = le(), c = Z(l);
          _e(c, () => e.children ?? be), O(o, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), De(a);
}
var wg = /* @__PURE__ */ pe("<input/>");
function Lg(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "type", 3, "text"), a = m(e, "placeholder", 3, " "), o = m(e, "value", 15), u = m(e, "files", 15, null), l = m(e, "dirty", 15, !1), c = m(e, "invalid", 15, !1), d = m(e, "updateInvalid", 3, !0), h = m(e, "initialInvalid", 3, !1), f = m(e, "emptyValueNull", 19, () => o() === null), v = m(e, "emptyValueUndefined", 19, () => o() === void 0), p = /* @__PURE__ */ Ge(e, [
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
  ]), g, I = Ee({}), E = Ee({});
  Te(() => {
    i() === "file" ? delete E.value : E.value = o() == null ? "" : o();
  }), at(() => {
    d() && h() && c(U().matches(":invalid"));
  });
  function A(F) {
    return F === "" ? Number.NaN : +F;
  }
  function C(F) {
    if (i() === "file") {
      u(F.currentTarget.files);
      return;
    }
    if (F.currentTarget.value === "" && f()) {
      o(null);
      return;
    }
    if (F.currentTarget.value === "" && v()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(A(F.currentTarget.value));
        break;
      default:
        o(F.currentTarget.value);
        break;
    }
  }
  function b(F) {
    (i() === "file" || i() === "range") && C(F), l(!0), d() && c(U().matches(":invalid"));
  }
  function _(F) {
    return F in I ? I[F] ?? null : U().getAttribute(F);
  }
  function S(F, k) {
    I[F] !== k && (I[F] = k);
  }
  function T(F) {
    (!(F in I) || I[F] != null) && (I[F] = void 0);
  }
  function x() {
    U().focus();
  }
  function L() {
    U().blur();
  }
  function U() {
    return g;
  }
  var Y = { getAttr: _, addAttr: S, removeAttr: T, focus: x, blur: L, getElement: U }, B = wg(), M = (F) => {
    var k;
    i() !== "file" && C(F), (k = e.oninput) == null || k.call(e, F);
  }, Q = (F) => {
    var k;
    b(F), (k = e.onchange) == null || k.call(e, F);
  };
  return Be(
    B,
    (F) => ({
      class: F,
      type: i(),
      placeholder: a(),
      ...E,
      ...I,
      ...p,
      oninput: M,
      onchange: Q
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Se(B, (F) => g = F, () => g), Ue(B, (F, k) => K == null ? void 0 : K(F, k), n), O(t, B), De(Y);
}
var Og = /* @__PURE__ */ pe("<textarea></textarea>");
function Rg(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "value", 15, ""), o = m(e, "dirty", 15, !1), u = m(e, "invalid", 15, !1), l = m(e, "updateInvalid", 3, !0), c = m(e, "initialInvalid", 3, !1), d = m(e, "resizable", 3, !0), h = /* @__PURE__ */ Ge(e, [
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
  ]), f, v = Ee({});
  at(() => {
    l() && c() && u(b().matches(":invalid"));
  });
  function p() {
    o(!0), l() && u(b().matches(":invalid"));
  }
  function g(x) {
    return x in v ? v[x] ?? null : b().getAttribute(x);
  }
  function I(x, L) {
    v[x] !== L && (v[x] = L);
  }
  function E(x) {
    (!(x in v) || v[x] != null) && (v[x] = void 0);
  }
  function A() {
    b().focus();
  }
  function C() {
    b().blur();
  }
  function b() {
    return f;
  }
  var _ = { getAttr: g, addAttr: I, removeAttr: E, focus: A, blur: C, getElement: b }, S = Og(), T = (x) => {
    var L;
    p(), (L = e.onchange) == null || L.call(e, x);
  };
  return Be(
    S,
    (x) => ({
      class: x,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: T
    }),
    [
      () => He({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Se(S, (x) => f = x, () => f), Ue(S, (x, L) => K == null ? void 0 : K(x, L), n), Ea(() => va(S, a)), O(t, S), De(_);
}
var Mg = /* @__PURE__ */ pe('<span class="mdc-text-field__ripple"></span>'), Dg = /* @__PURE__ */ pe("<!> <!>", 1), Pg = /* @__PURE__ */ pe("<span><!> <!></span>"), Ng = /* @__PURE__ */ pe("<!> <!> <!>", 1), Hg = /* @__PURE__ */ pe("<label><!> <!> <!> <!> <!> <!> <!></label>"), Ug = /* @__PURE__ */ pe("<div><!> <!> <!> <!> <!></div>"), Fg = /* @__PURE__ */ pe("<!> <!>", 1);
function jl(t, e) {
  Me(e, !0);
  const { applyPassive: n } = Xc;
  let r = () => {
  };
  function i(q) {
    return q === r;
  }
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "ripple", 3, !0), c = m(e, "disabled", 3, !1), d = m(e, "required", 3, !1), h = m(e, "textarea", 3, !1), f = m(e, "variant", 19, () => h() ? "outlined" : "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "type", 3, "text"), g = m(e, "value", 15), I = m(e, "files", 15, r), E = m(e, "invalid", 15, r), A = m(e, "updateInvalid", 19, () => i(E())), C = m(e, "initialInvalid", 3, !1), b = m(e, "dirty", 15, !1), _ = m(e, "validateOnValueChange", 19, A), S = m(e, "useNativeValidation", 19, A), T = m(e, "withLeadingIcon", 3, r), x = m(e, "withTrailingIcon", 3, r), L = m(e, "input", 7), U = m(e, "floatingLabel", 7), Y = m(e, "lineRipple", 7), B = m(e, "notchedOutline", 7), M = /* @__PURE__ */ Ge(e, [
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
  const Q = g() !== void 0 || g() === void 0 && e.input$emptyValueUndefined || !i(I());
  i(I()) && I(null), i(E()) && E(!1);
  let F, k = /* @__PURE__ */ we(void 0), H = new xa(), W = Ee({}), ne = Ee({}), N = /* @__PURE__ */ we(void 0), y = /* @__PURE__ */ we(!1), w = /* @__PURE__ */ we(Ee(C())), te = oe("SMUI:addLayoutListener"), D, j, de = new Promise((q) => j = q), V, re, X, he;
  const ie = /* @__PURE__ */ ue(() => L() && L().getElement());
  Te(() => {
    (b() || s(w) || !A()) && s(k) && s(k).isValid() !== !E() && (A() ? E(!s(k).isValid()) : s(k).setValid(!E()));
  }), Te(() => {
    s(k) && s(k).getValidateOnValueChange() !== _() && s(k).setValidateOnValueChange(i(_()) ? !1 : _());
  }), Te(() => {
    s(k) && s(k).setUseNativeValidation(i(S()) ? !0 : S());
  }), Te(() => {
    s(k) && s(k).setDisabled(c());
  });
  let je = g();
  Te(() => {
    if (s(k) && Q && je !== g()) {
      je = g();
      const q = `${g() == null ? "" : g()}`;
      s(k).getValue() !== q && s(k).setValue(q);
    }
  }), te && (D = te(P)), ee("SMUI:textfield:leading-icon:mount", (q) => {
    V = q;
  }), ee("SMUI:textfield:leading-icon:unmount", () => {
    V = void 0;
  }), ee("SMUI:textfield:trailing-icon:mount", (q) => {
    re = q;
  }), ee("SMUI:textfield:trailing-icon:unmount", () => {
    re = void 0;
  }), ee("SMUI:textfield:helper-text:id", (q) => {
    ae(N, q, !0);
  }), ee("SMUI:textfield:helper-text:mount", (q) => {
    X = q;
  }), ee("SMUI:textfield:helper-text:unmount", () => {
    ae(N, void 0), X = void 0;
  }), ee("SMUI:textfield:character-counter:mount", (q) => {
    he = q;
  }), ee("SMUI:textfield:character-counter:unmount", () => {
    he = void 0;
  }), at(() => {
    var q;
    if (ae(
      k,
      new gg(
        {
          // getRootAdapterMethods_
          addClass: Pe,
          removeClass: Le,
          hasClass: qe,
          registerTextFieldInteractionHandler: (z, Re) => H.on(G(), z, Re),
          deregisterTextFieldInteractionHandler: (z, Re) => H.off(G(), z, Re),
          registerValidationAttributeChangeHandler: (z) => {
            const Re = (Ot) => Ot.map((yt) => yt.attributeName).filter((yt) => yt), ut = new MutationObserver((Ot) => {
              S() && z(Re(Ot));
            }), pt = { attributes: !0 };
            return L() && ut.observe(L().getElement(), pt), ut;
          },
          deregisterValidationAttributeChangeHandler: (z) => {
            z.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var z;
            return ((z = L()) == null ? void 0 : z.getElement()) ?? null;
          },
          setInputAttr: (z, Re) => {
            var ut;
            (ut = L()) == null || ut.addAttr(z, Re);
          },
          removeInputAttr: (z) => {
            var Re;
            (Re = L()) == null || Re.removeAttr(z);
          },
          isFocused: () => {
            var z;
            return document.activeElement === ((z = L()) == null ? void 0 : z.getElement());
          },
          registerInputInteractionHandler: (z, Re) => {
            var pt;
            const ut = (pt = L()) == null ? void 0 : pt.getElement();
            if (ut) {
              const Ot = n();
              H.on(ut, z, Re, typeof Ot == "boolean" ? { capture: Ot } : Ot);
            }
          },
          deregisterInputInteractionHandler: (z, Re) => {
            var pt;
            const ut = (pt = L()) == null ? void 0 : pt.getElement();
            ut && H.off(ut, z, Re);
          },
          // getLabelAdapterMethods_
          floatLabel: (z) => U() && U().float(z),
          getLabelWidth: () => U() ? U().getWidth() : 0,
          hasLabel: () => !!U(),
          shakeLabel: (z) => U() && U().shake(z),
          setLabelRequired: (z) => U() && U().setRequired(z),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => Y() && Y().activate(),
          deactivateLineRipple: () => Y() && Y().deactivate(),
          setLineRippleTransformOrigin: (z) => Y() && Y().setRippleCenter(z),
          // getOutlineAdapterMethods_
          closeOutline: () => B() && B().closeNotch(),
          hasOutline: () => !!B(),
          notchOutline: (z) => B() && B().notch(z)
        },
        {
          get helperText() {
            return X;
          },
          get characterCounter() {
            return he;
          },
          get leadingIcon() {
            return V;
          },
          get trailingIcon() {
            return re;
          }
        }
      ),
      !0
    ), Q) {
      if (L() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (q = s(k)) == null || q.init();
    } else
      mo().then(() => {
        var z;
        if (L() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (z = s(k)) == null || z.init();
      });
    return j(), () => {
      var z;
      (z = s(k)) == null || z.destroy(), H.clear();
    };
  }), Kn(() => {
    D && D();
  });
  function qe(q) {
    return q in W ? W[q] ?? null : G().classList.contains(q);
  }
  function Pe(q) {
    W[q] || (W[q] = !0);
  }
  function Le(q) {
    (!(q in W) || W[q]) && (W[q] = !1);
  }
  function se(q, z) {
    ne[q] != z && (z === "" || z == null ? delete ne[q] : ne[q] = z);
  }
  function xe() {
    var q;
    (q = L()) == null || q.focus();
  }
  function Qe() {
    var q;
    (q = L()) == null || q.blur();
  }
  function P() {
    if (s(k)) {
      const q = s(k).shouldFloat;
      s(k).notchOutline(q);
    }
  }
  function G() {
    return F;
  }
  var J = { focus: xe, blur: Qe, layout: P, getElement: G }, Ae = Fg(), Nt = Z(Ae);
  {
    var bt = (q) => {
      var z = Hg();
      Be(z, (We, et, Xe) => ({ class: We, style: et, for: void 0, ...Xe }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": s(y) || g() != null && g() !== "",
          "mdc-text-field--with-leading-icon": i(T()) ? e.leadingIcon : T(),
          "mdc-text-field--with-trailing-icon": i(x()) ? e.trailingIcon : x(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": E(),
          ...W,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([We, et]) => `${We}: ${et};`).concat([u()]).join(" "),
        () => Gi(M, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Re = ye(z);
      {
        var ut = (We) => {
          var et = Dg(), Xe = Z(et);
          {
            var xt = (It) => {
              var ht = Mg();
              O(It, ht);
            };
            ce(Xe, (It) => {
              f() === "filled" && It(xt);
            });
          }
          var cn = Ie(Xe, 2);
          {
            var tt = (It) => {
              {
                let ht = /* @__PURE__ */ ue(() => s(y) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), Je = /* @__PURE__ */ ue(() => st(M, "label$"));
                Se(
                  $a(It, rt(
                    {
                      get floatAbove() {
                        return s(ht);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => s(Je),
                    {
                      children: (Tt, wn) => {
                        var rn = le(), ot = Z(rn);
                        {
                          var kt = (zt) => {
                          }, gn = (zt) => {
                            var Nr = le(), bn = Z(Nr);
                            {
                              var cr = (yn) => {
                                var Xn = Wt();
                                Fe(() => dt(Xn, e.label)), O(yn, Xn);
                              }, Xi = (yn) => {
                                var Xn = le(), Un = Z(Xn);
                                _e(Un, () => e.label), O(yn, Xn);
                              };
                              ce(
                                bn,
                                (yn) => {
                                  typeof e.label == "string" ? yn(cr) : yn(Xi, !1);
                                },
                                !0
                              );
                            }
                            O(zt, Nr);
                          };
                          ce(ot, (zt) => {
                            e.label == null ? zt(kt) : zt(gn, !1);
                          });
                        }
                        O(Tt, rn);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Tt) => U(Tt),
                  () => U()
                );
              }
            };
            ce(cn, (It) => {
              !v() && e.label != null && It(tt);
            });
          }
          O(We, et);
        };
        ce(Re, (We) => {
          !h() && f() !== "outlined" && We(ut);
        });
      }
      var pt = Ie(Re, 2);
      {
        var Ot = (We) => {
          {
            let et = /* @__PURE__ */ ue(() => v() || e.label == null), Xe = /* @__PURE__ */ ue(() => st(M, "outline$"));
            Se(
              Zc(We, rt(
                {
                  get noLabel() {
                    return s(et);
                  }
                },
                () => s(Xe),
                {
                  children: (xt, cn) => {
                    var tt = le(), It = Z(tt);
                    {
                      var ht = (Je) => {
                        {
                          let Tt = /* @__PURE__ */ ue(() => s(y) || g() != null && g() !== "" && (typeof g() != "number" || !isNaN(g()))), wn = /* @__PURE__ */ ue(() => st(M, "label$"));
                          Se(
                            $a(Je, rt(
                              {
                                get floatAbove() {
                                  return s(Tt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => s(wn),
                              {
                                children: (rn, ot) => {
                                  var kt = le(), gn = Z(kt);
                                  {
                                    var zt = (bn) => {
                                    }, Nr = (bn) => {
                                      var cr = le(), Xi = Z(cr);
                                      {
                                        var yn = (Un) => {
                                          var Hr = Wt();
                                          Fe(() => dt(Hr, e.label)), O(Un, Hr);
                                        }, Xn = (Un) => {
                                          var Hr = le(), Eo = Z(Hr);
                                          _e(Eo, () => e.label), O(Un, Hr);
                                        };
                                        ce(
                                          Xi,
                                          (Un) => {
                                            typeof e.label == "string" ? Un(yn) : Un(Xn, !1);
                                          },
                                          !0
                                        );
                                      }
                                      O(bn, cr);
                                    };
                                    ce(gn, (bn) => {
                                      e.label == null ? bn(zt) : bn(Nr, !1);
                                    });
                                  }
                                  O(rn, kt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (rn) => U(rn),
                            () => U()
                          );
                        }
                      };
                      ce(It, (Je) => {
                        !v() && e.label != null && Je(ht);
                      });
                    }
                    O(xt, tt);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (xt) => B(xt),
              () => B()
            );
          }
        };
        ce(pt, (We) => {
          (h() || f() === "outlined") && We(Ot);
        });
      }
      var yt = Ie(pt, 2);
      Ii(yt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (We, et) => {
          var Xe = le(), xt = Z(Xe);
          _e(xt, () => e.leadingIcon ?? be), O(We, Xe);
        },
        $$slots: { default: !0 }
      });
      var zn = Ie(yt, 2);
      _e(zn, () => e.children ?? be);
      var ft = Ie(zn, 2);
      {
        var Rt = (We) => {
          var et = Pg(), Xe = ye(et);
          {
            let cn = /* @__PURE__ */ ue(() => st(M, "input$"));
            Se(
              Rg(Xe, rt(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return A();
                  },
                  get initialInvalid() {
                    return s(w);
                  },
                  get "aria-controls"() {
                    return s(N);
                  },
                  get "aria-describedby"() {
                    return s(N);
                  }
                },
                () => s(cn),
                {
                  onblur: (tt) => {
                    var It;
                    ae(y, !1), ae(w, !0), ze(G(), "blur", tt), (It = e.input$onblur) == null || It.call(e, tt);
                  },
                  onfocus: (tt) => {
                    var It;
                    ae(y, !0), ze(G(), "focus", tt), (It = e.input$onfocus) == null || It.call(e, tt);
                  },
                  get value() {
                    return g();
                  },
                  set value(tt) {
                    g(tt);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(tt) {
                    b(tt);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(tt) {
                    E(tt);
                  }
                }
              )),
              (tt) => L(tt),
              () => L()
            );
          }
          var xt = Ie(Xe, 2);
          _e(xt, () => e.internalCounter ?? be), Fe((cn) => Xu(et, 1, cn), [
            () => zu(He({
              "mdc-text-field__resizer": !("input$resizable" in M) || e.input$resizable
            }))
          ]), O(We, et);
        }, Bt = (We) => {
          var et = Ng(), Xe = Z(et);
          {
            var xt = (ht) => {
              var Je = le(), Tt = Z(Je);
              {
                var wn = (ot) => {
                  xg(ot, {
                    children: (kt, gn) => {
                      var zt = Wt();
                      Fe(() => dt(zt, e.prefix)), O(kt, zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, rn = (ot) => {
                  var kt = le(), gn = Z(kt);
                  _e(gn, () => e.prefix ?? be), O(ot, kt);
                };
                ce(Tt, (ot) => {
                  typeof e.prefix == "string" ? ot(wn) : ot(rn, !1);
                });
              }
              O(ht, Je);
            };
            ce(Xe, (ht) => {
              e.prefix != null && ht(xt);
            });
          }
          var cn = Ie(Xe, 2);
          {
            let ht = /* @__PURE__ */ ue(() => st(M, "input$"));
            Se(
              Lg(cn, rt(
                {
                  get type() {
                    return p();
                  },
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return d();
                  },
                  get updateInvalid() {
                    return A();
                  },
                  get initialInvalid() {
                    return s(w);
                  },
                  get "aria-controls"() {
                    return s(N);
                  },
                  get "aria-describedby"() {
                    return s(N);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => s(ht),
                {
                  onblur: (Je) => {
                    var Tt;
                    ae(y, !1), ae(w, !0), ze(G(), "blur", Je), (Tt = e.input$onblur) == null || Tt.call(e, Je);
                  },
                  onfocus: (Je) => {
                    var Tt;
                    ae(y, !0), ze(G(), "focus", Je), (Tt = e.input$onfocus) == null || Tt.call(e, Je);
                  },
                  get value() {
                    return g();
                  },
                  set value(Je) {
                    g(Je);
                  },
                  get files() {
                    return I();
                  },
                  set files(Je) {
                    I(Je);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(Je) {
                    b(Je);
                  },
                  get invalid() {
                    return E();
                  },
                  set invalid(Je) {
                    E(Je);
                  }
                }
              )),
              (Je) => L(Je),
              () => L()
            );
          }
          var tt = Ie(cn, 2);
          {
            var It = (ht) => {
              var Je = le(), Tt = Z(Je);
              {
                var wn = (ot) => {
                  Tg(ot, {
                    children: (kt, gn) => {
                      var zt = Wt();
                      Fe(() => dt(zt, e.suffix)), O(kt, zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, rn = (ot) => {
                  var kt = le(), gn = Z(kt);
                  _e(gn, () => e.suffix ?? be), O(ot, kt);
                };
                ce(Tt, (ot) => {
                  typeof e.suffix == "string" ? ot(wn) : ot(rn, !1);
                });
              }
              O(ht, Je);
            };
            ce(tt, (ht) => {
              e.suffix != null && ht(It);
            });
          }
          O(We, et);
        };
        ce(ft, (We) => {
          h() && typeof g() == "string" ? We(Rt) : We(Bt, !1);
        });
      }
      var Kt = Ie(ft, 2);
      Ii(Kt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (We, et) => {
          var Xe = le(), xt = Z(Xe);
          _e(xt, () => e.trailingIcon ?? be), O(We, Xe);
        },
        $$slots: { default: !0 }
      });
      var Pr = Ie(Kt, 2);
      {
        var Hn = (We) => {
          {
            let et = /* @__PURE__ */ ue(() => st(M, "ripple$"));
            Se(Yc(We, rt(() => s(et))), (Xe) => Y(Xe), () => Y());
          }
        };
        ce(Pr, (We) => {
          !h() && f() !== "outlined" && l() && We(Hn);
        });
      }
      Se(z, (We) => F = We, () => F), Ue(z, (We, et) => jt == null ? void 0 : jt(We, et), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: Pe,
        removeClass: Le,
        addStyle: se,
        eventTarget: s(ie),
        activeTarget: s(ie),
        initPromise: de
      })), Ue(z, (We, et) => K == null ? void 0 : K(We, et), a), O(q, z);
    }, pn = (q) => {
      var z = Ug();
      Be(z, (ft, Rt, Bt) => ({ class: ft, style: Rt, ...Bt }), [
        () => He({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": E(),
          ...W,
          [o()]: !0
        }),
        () => Object.entries(ne).map(([ft, Rt]) => `${ft}: ${Rt};`).concat([u()]).join(" "),
        () => Gi(M, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Re = ye(z);
      {
        var ut = (ft) => {
          var Rt = le(), Bt = Z(Rt);
          _e(Bt, () => e.label ?? be), O(ft, Rt);
        };
        ce(Re, (ft) => {
          typeof e.label != "string" && ft(ut);
        });
      }
      var pt = Ie(Re, 2);
      Ii(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ft, Rt) => {
          var Bt = le(), Kt = Z(Bt);
          _e(Kt, () => e.leadingIcon ?? be), O(ft, Bt);
        },
        $$slots: { default: !0 }
      });
      var Ot = Ie(pt, 2);
      _e(Ot, () => e.children ?? be);
      var yt = Ie(Ot, 2);
      Ii(yt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ft, Rt) => {
          var Bt = le(), Kt = Z(Bt);
          _e(Kt, () => e.trailingIcon ?? be), O(ft, Bt);
        },
        $$slots: { default: !0 }
      });
      var zn = Ie(yt, 2);
      _e(zn, () => e.line ?? be), Se(z, (ft) => F = ft, () => F), Ue(z, (ft, Rt) => jt == null ? void 0 : jt(ft, Rt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: Pe,
        removeClass: Le,
        addStyle: se
      })), Ue(z, (ft, Rt) => K == null ? void 0 : K(ft, Rt), a), O(q, z);
    };
    ce(Nt, (q) => {
      Q ? q(bt) : q(pn, !1);
    });
  }
  var me = Ie(Nt, 2);
  {
    var ge = (q) => {
      {
        let z = /* @__PURE__ */ ue(() => st(M, "helperLine$"));
        Sg(q, rt(() => s(z), {
          children: (Re, ut) => {
            var pt = le(), Ot = Z(pt);
            _e(Ot, () => e.helper ?? be), O(Re, pt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ce(me, (q) => {
      e.helper && q(ge);
    });
  }
  return O(t, Ae), De(J);
}
var Bg = /* @__PURE__ */ pe("<i><!></i>");
function kg(t, e) {
  Me(e, !0);
  const n = () => Dt(p, "$leadingStore", r), [r, i] = xn();
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = m(e, "disabled", 3, !1), c = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, h = /* @__PURE__ */ we(void 0), f = new xa(), v = Ee({});
  const p = oe("SMUI:textfield:icon:leading"), g = n();
  let I = /* @__PURE__ */ we(void 0);
  const E = /* @__PURE__ */ ue(() => ({ role: e.role, tabindex: u() })), A = oe("SMUI:textfield:leading-icon:mount"), C = oe("SMUI:textfield:leading-icon:unmount"), b = oe("SMUI:textfield:trailing-icon:mount"), _ = oe("SMUI:textfield:trailing-icon:unmount");
  at(() => (ae(
    h,
    new yg({
      getAttr: S,
      setAttr: T,
      removeAttr: x,
      setContent: (k) => {
        ae(I, k, !0);
      },
      registerInteractionHandler: (k, H) => f.on(L(), k, H),
      deregisterInteractionHandler: (k, H) => f.off(L(), k, H),
      notifyIconAction: () => ze(L(), "SMUITextFieldIcon")
    }),
    !0
  ), g ? A && A(s(h)) : b && b(s(h)), s(h).init(), () => {
    var k;
    s(h) && (g ? C && C(s(h)) : _ && _(s(h))), (k = s(h)) == null || k.destroy(), f.clear();
  }));
  function S(k) {
    return k in v ? v[k] ?? null : L().getAttribute(k);
  }
  function T(k, H) {
    v[k] !== H && (v[k] = H);
  }
  function x(k) {
    (!(k in v) || v[k] != null) && (v[k] = void 0);
  }
  function L() {
    return d;
  }
  var U = { getElement: L }, Y = Bg();
  Be(
    Y,
    (k) => ({
      class: k,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...s(E),
      ...v,
      ...c
    }),
    [
      () => He({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": g,
        "mdc-text-field__icon--trailing": !g,
        [o()]: !0
      })
    ]
  );
  var B = ye(Y);
  {
    var M = (k) => {
      var H = le(), W = Z(H);
      _e(W, () => e.children ?? be), O(k, H);
    }, Q = (k) => {
      var H = Wt();
      Fe(() => dt(H, s(I))), O(k, H);
    };
    ce(B, (k) => {
      s(I) == null ? k(M) : k(Q, !1);
    });
  }
  Se(Y, (k) => d = k, () => d), Ue(Y, (k, H) => K == null ? void 0 : K(k, H), a), O(t, Y);
  var F = De(U);
  return i(), F;
}
function Vg(t, e) {
  Me(e, !0);
  let n = m(e, "placeholder", 3, ""), r = m(e, "label", 3, ""), i = m(e, "icon", 3, ""), a = m(e, "value", 15, ""), o = m(e, "variant", 3, "standard"), u = m(e, "styles", 3, "");
  var l = le(), c = Z(l);
  {
    var d = (f) => {
      {
        const v = (g) => {
          kg(g, {
            class: "material-icons",
            children: (I, E) => {
              var A = Wt();
              Fe(() => dt(A, i())), O(I, A);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ ue(() => `width: 100%; ${u()}`);
        jl(f, {
          get label() {
            return r();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return s(p);
          },
          get variant() {
            return o();
          },
          get value() {
            return a();
          },
          set value(g) {
            a(g);
          },
          leadingIcon: v,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (f) => {
      jl(f, {
        get label() {
          return r();
        },
        get placeholder() {
          return n();
        },
        style: "width: 100%",
        get variant() {
          return o();
        },
        get value() {
          return a();
        },
        set value(v) {
          a(v);
        }
      });
    };
    ce(c, (f) => {
      i() ? f(d) : f(h, !1);
    });
  }
  O(t, l), De();
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
var Gg = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, jg = {
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
var fr, $n, Ke = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
fr = {}, fr["" + Ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", fr["" + Ke.LIST_ITEM_CLASS] = "mdc-list-item", fr["" + Ke.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", fr["" + Ke.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", fr["" + Ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", fr["" + Ke.ROOT] = "mdc-list";
var mi = ($n = {}, $n["" + Ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", $n["" + Ke.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", $n["" + Ke.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", $n["" + Ke.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", $n["" + Ke.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", $n["" + Ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", $n["" + Ke.ROOT] = "mdc-deprecated-list", $n), hr = {
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
    .` + Ke.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ke.LIST_ITEM_CLASS + ` a,
    .` + mi[Ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + mi[Ke.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ke.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ke.LIST_ITEM_CLASS + ` a,
    .` + Ke.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ke.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + mi[Ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + mi[Ke.LIST_ITEM_CLASS] + ` a,
    .` + mi[Ke.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + mi[Ke.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
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
var qg = ["input", "button", "textarea", "select"], In = function(t) {
  var e = t.target;
  if (e) {
    var n = ("" + e.tagName).toLowerCase();
    qg.indexOf(n) === -1 && t.preventDefault();
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
function Wg() {
  var t = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return t;
}
function Kg(t, e) {
  for (var n = /* @__PURE__ */ new Map(), r = 0; r < t; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      n.has(a) || n.set(a, []), n.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return n.forEach(function(o) {
    o.sort(function(u, l) {
      return u.index - l.index;
    });
  }), n;
}
function ds(t, e) {
  var n = t.nextChar, r = t.focusItemAtIndex, i = t.sortedIndexByFirstChar, a = t.focusedItemIndex, o = t.skipFocus, u = t.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Jc(e);
  }, _t.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + n;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = zg(i, a, u, e) : l = Xg(i, u, e), l !== -1 && !o && r(l), l;
}
function zg(t, e, n, r) {
  var i = r.typeaheadBuffer[0], a = t.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    var o = a[r.sortedIndexCursor].index;
    if (!n(o))
      return o;
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
function Xg(t, e, n) {
  var r = n.typeaheadBuffer[0], i = t.get(r);
  if (!i)
    return -1;
  var a = i[n.sortedIndexCursor];
  if (a.text.lastIndexOf(n.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var o = (n.sortedIndexCursor + 1) % i.length, u = -1; o !== n.sortedIndexCursor; ) {
    var l = i[o], c = l.text.lastIndexOf(n.typeaheadBuffer, 0) === 0, d = !e(l.index);
    if (c && d) {
      u = o;
      break;
    }
    o = (o + 1) % i.length;
  }
  return u !== -1 ? (n.sortedIndexCursor = u, i[n.sortedIndexCursor].index) : -1;
}
function Qc(t) {
  return t.typeaheadBuffer.length > 0;
}
function Jc(t) {
  t.typeaheadBuffer = "";
}
function ql(t, e) {
  var n = t.event, r = t.isTargetListItem, i = t.focusedItemIndex, a = t.focusItemAtIndex, o = t.sortedIndexByFirstChar, u = t.isItemAtIndexDisabled, l = gt(n) === "ArrowLeft", c = gt(n) === "ArrowUp", d = gt(n) === "ArrowRight", h = gt(n) === "ArrowDown", f = gt(n) === "Home", v = gt(n) === "End", p = gt(n) === "Enter", g = gt(n) === "Spacebar";
  if (n.altKey || n.ctrlKey || n.metaKey || l || c || d || h || f || v || p)
    return -1;
  var I = !g && n.key.length === 1;
  if (I) {
    In(n);
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: n.key.toLowerCase(),
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return ds(E, e);
  }
  if (!g)
    return -1;
  r && In(n);
  var A = r && Qc(e);
  if (A) {
    var E = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: o,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return ds(E, e);
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
function Yg(t) {
  return t instanceof Array;
}
var Zg = ["Alt", "Control", "Meta", "Shift"];
function Wl(t) {
  var e = new Set(t ? Zg.filter(function(n) {
    return t.getModifierState(n);
  }) : []);
  return function(n) {
    return n.every(function(r) {
      return e.has(r);
    }) && n.length === e.size;
  };
}
var Qg = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = _t.UNSET_INDEX, r.focusedItemIndex = _t.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = Wg(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return hr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ke;
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
        var r = this.adapter.listItemAtIndexHasClass(n, Ke.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = n;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var n = _t.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Ke.LIST_ITEM_SELECTED_CLASS), o = this.adapter.listItemAtIndexHasClass(i, Ke.LIST_ITEM_ACTIVATED_CLASS);
        if (a || o) {
          n = i;
          break;
        }
      }
      return n;
    }, e.prototype.setHasTypeahead = function(n) {
      this.hasTypeahead = n, n && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && Qc(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(n, Ke.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(n, r, i) {
      var a = this, o, u = gt(n) === "ArrowLeft", l = gt(n) === "ArrowUp", c = gt(n) === "ArrowRight", d = gt(n) === "ArrowDown", h = gt(n) === "Home", f = gt(n) === "End", v = gt(n) === "Enter", p = gt(n) === "Spacebar", g = this.isVertical && d || !this.isVertical && c, I = this.isVertical && l || !this.isVertical && u, E = n.key === "A" || n.key === "a", A = Wl(n);
      if (this.adapter.isRootFocused()) {
        if ((I || f) && A([]))
          n.preventDefault(), this.focusLastElement();
        else if ((g || h) && A([]))
          n.preventDefault(), this.focusFirstElement();
        else if (I && A(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var C = this.focusLastElement();
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (g && A(["Shift"]) && this.isCheckboxList) {
          n.preventDefault();
          var C = this.focusFirstElement();
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
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
          ql(b, this.typeaheadState);
        }
        return;
      }
      var _ = this.adapter.getFocusedElementIndex();
      if (!(_ === -1 && (_ = i, _ < 0))) {
        if (g && A([]))
          In(n), this.focusNextElement(_);
        else if (I && A([]))
          In(n), this.focusPrevElement(_);
        else if (g && A(["Shift"]) && this.isCheckboxList) {
          In(n);
          var C = this.focusNextElement(_);
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (I && A(["Shift"]) && this.isCheckboxList) {
          In(n);
          var C = this.focusPrevElement(_);
          C !== -1 && this.setSelectedIndexOnAction(C, !1);
        } else if (h && A([]))
          In(n), this.focusFirstElement();
        else if (f && A([]))
          In(n), this.focusLastElement();
        else if (h && A(["Control", "Shift"]) && this.isCheckboxList) {
          if (In(n), this.isIndexDisabled(_))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, _, _);
        } else if (f && A(["Control", "Shift"]) && this.isCheckboxList) {
          if (In(n), this.isIndexDisabled(_))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(_, this.adapter.getListItemCount() - 1, _);
        } else if (E && A(["Control"]) && this.isCheckboxList)
          n.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || p) && A([])) {
          if (r) {
            var S = n.target;
            if (S && S.tagName === "A" && v || (In(n), this.isIndexDisabled(_)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(_, !1), this.adapter.notifyAction(_));
          }
        } else if ((v || p) && A(["Shift"]) && this.isCheckboxList) {
          var S = n.target;
          if (S && S.tagName === "A" && v || (In(n), this.isIndexDisabled(_)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((o = this.lastSelectedIndex) !== null && o !== void 0 ? o : _, _, _), this.adapter.notifyAction(_));
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
          ql(b, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(n, r, i) {
      var a, o = Wl(i);
      n !== _t.UNSET_INDEX && (this.isIndexDisabled(n) || (o([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(n, r), this.adapter.notifyAction(n)) : this.isCheckboxList && o(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : n, n, n), this.adapter.notifyAction(n))));
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
      this.isIndexValid(n, !1) && (r ? (this.adapter.removeClassForElementIndex(n, Ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, hr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(n, Ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(n, hr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(n, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === n && !r.forceUpdate)) {
        var i = Ke.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ke.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== _t.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(n), this.setTabindexAtIndex(n), n !== _t.UNSET_INDEX && this.adapter.addClassForElementIndex(n, i), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(n) {
      this.selectedIndex === _t.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(n, hr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? hr.ARIA_CURRENT : hr.ARIA_SELECTED;
      if (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), n !== _t.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(n, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? hr.ARIA_SELECTED : hr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(n, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(n, !0), !(this.selectedIndex === n && !r.forceUpdate) && (this.selectedIndex !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(n, i, "true"), this.selectedIndex = n, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([n]));
    }, e.prototype.setCheckboxAtIndex = function(n, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === _t.UNSET_INDEX ? [] : i) : null, o = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), d = n.indexOf(l) >= 0;
        d !== c && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, d), this.adapter.setAttributeForElementIndex(l, o, d ? "true" : "false");
      }
      this.selectedIndex = n, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(n, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex), o = !(a != null && a.has(i)), u = Ui([n, r].sort(), 2), l = u[0], c = u[1], d = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          o !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, o), this.adapter.setAttributeForElementIndex(f, d, "" + o), o ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = Ar([], Ui(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(n) {
      this.focusedItemIndex === _t.UNSET_INDEX && n !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== n && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== n && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), n !== _t.UNSET_INDEX && this.adapter.setAttributeForElementIndex(n, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var n = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(n);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== _t.UNSET_INDEX ? this.selectedIndex : Yg(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(n, r) {
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
      var i = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(n), o;
      r ? o = a : (o = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(n, o)), this.adapter.setAttributeForElementIndex(n, i, o ? "true" : "false");
      var u = this.selectedIndex === _t.UNSET_INDEX ? [] : this.selectedIndex.slice();
      o ? u.push(n) : u = u.filter(function(l) {
        return l !== n;
      }), this.selectedIndex = u;
    }, e.prototype.focusItemAtIndex = function(n) {
      this.adapter.focusItemAtIndex(n), this.focusedItemIndex = n;
    }, e.prototype.checkboxListToggleAll = function(n, r) {
      var i = this.adapter.getListItemCount();
      if (n.length === i)
        this.setCheckboxAtIndex([], { isUserInteraction: r });
      else {
        for (var a = [], o = 0; o < i; o++)
          (!this.isIndexDisabled(o) || n.indexOf(o) > -1) && a.push(o);
        this.setCheckboxAtIndex(a, { isUserInteraction: r });
      }
    }, e.prototype.typeaheadMatchItem = function(n, r, i) {
      var a = this;
      i === void 0 && (i = !1);
      var o = {
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
      return ds(o, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return Kg(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Jc(this.typeaheadState);
    }, e;
  }(Pt)
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
var $c = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = ei.TOP_START, r.originCorner = ei.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Gg;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return jg;
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, At.BOTTOM) ? "bottom" : "top", o = this.hasBit(r, At.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, d = c.anchorSize, h = c.surfaceSize, f = (n = {}, n[o] = u, n[a] = l, n);
      d.width / h.width > ra.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (o = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(o + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, At.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var n = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, o = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, At.BOTTOM), c, d;
      l ? (c = i.top - u + this.anchorMargin.bottom, d = i.bottom - u - this.anchorMargin.bottom) : (c = i.top - u + this.anchorMargin.top, d = i.bottom - u + a.height - this.anchorMargin.top);
      var h = d - o.height > 0;
      !h && c > d + this.openBottomBias && (n = this.setBit(n, At.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, At.FLIP_RTL), p = this.hasBit(this.anchorCorner, At.RIGHT) || this.hasBit(n, At.RIGHT), g = !1;
      f && v ? g = !p : g = p;
      var I, E;
      g ? (I = i.left + a.width + this.anchorMargin.right, E = i.right - this.anchorMargin.right) : (I = i.left + this.anchorMargin.left, E = i.right + a.width - this.anchorMargin.left);
      var A = I - o.width > 0, C = E - o.width > 0, b = this.hasBit(n, At.FLIP_RTL) && this.hasBit(n, At.RIGHT);
      return C && b && f || !A && b ? n = this.unsetBit(n, At.RIGHT) : (A && g && f || A && !g && p || !C && I >= E) && (n = this.setBit(n, At.RIGHT)), n;
    }, e.prototype.getMenuSurfaceMaxHeight = function(n) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(n, At.BOTTOM), o = this.hasBit(this.anchorCorner, At.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, o || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, o && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, At.RIGHT), a = this.hasBit(this.anchorCorner, At.RIGHT);
      if (i) {
        var o = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? o - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : o;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(n) {
      var r = this.measurements.anchorSize, i = this.hasBit(n, At.BOTTOM), a = this.hasBit(this.anchorCorner, At.BOTTOM), o = 0;
      return i ? o = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : o = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, o;
    }, e.prototype.adjustPositionForHoistedElement = function(n) {
      var r, i, a = this.measurements, o = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, d = Object.keys(n);
      try {
        for (var h = Lt(d), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, p = n[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            n[v] = (c.width - l.width) / 2;
            continue;
          }
          p += u[v], this.isFixedPosition || (v === "top" ? p += o.y : v === "bottom" ? p -= o.y : v === "left" ? p += o.x : p -= o.x), n[v] = p;
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
  }(Pt)
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
var Kl = {
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
function Jg(t) {
  return !!t.document && typeof t.document.createElement == "function";
}
function $g(t, e) {
  if (Jg(t) && e in Kl) {
    var n = t.document.createElement("div"), r = Kl[e], i = r.standard, a = r.prefixed, o = i in n.style;
    return o ? i : a;
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
var Si = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, pi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, eb = {
  FOCUS_ROOT_INDEX: -1
}, _i;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.LIST_ROOT = 1] = "LIST_ROOT", t[t.FIRST_ITEM = 2] = "FIRST_ITEM", t[t.LAST_ITEM = 3] = "LAST_ITEM";
})(_i || (_i = {}));
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
var tb = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = _i.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Si;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return pi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return eb;
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
        var a = this.adapter.getAttributeFromElementAtIndex(i, pi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var o = r.adapter.getElementIndex(n);
          o >= 0 && r.adapter.isSelectableItemAtIndex(o) && r.setSelectedIndex(o);
        }, $c.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case _i.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case _i.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case _i.NONE:
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
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, pi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, Si.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(n, Si.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(n, pi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = n;
    }, e.prototype.setEnabled = function(n, r) {
      this.validatedIndex(n), r ? (this.adapter.removeClassFromElementAtIndex(n, Ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, pi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(n, Ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(n, pi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(n) {
      var r = this.adapter.getMenuItemCount(), i = n >= 0 && n < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(Pt)
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
}, ko = {
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
var nb = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var i = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = Vr.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mt;
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
        return ko;
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
        var r = gt(n) === Oe.ENTER, i = gt(n) === Oe.SPACEBAR, a = gt(n) === Oe.ARROW_UP, o = gt(n) === Oe.ARROW_DOWN, u = n.ctrlKey || n.metaKey;
        if (!u && (!i && n.key && n.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : n.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), n.preventDefault();
          return;
        }
        !r && !i && !a && !o || (this.openMenu(), n.preventDefault());
      }
    }, e.prototype.notchOutline = function(n) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(mt.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = n), this.adapter.setSelectAnchorAttr("aria-invalid", (!n).toString()), n ? (this.adapter.removeClass(mt.INVALID), this.adapter.removeMenuClass(mt.MENU_INVALID)) : (this.adapter.addClass(mt.INVALID), this.adapter.addMenuClass(mt.MENU_INVALID)), this.syncHelperTextValidity(n);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(mt.REQUIRED) && !this.adapter.hasClass(mt.DISABLED) ? this.getSelectedIndex() !== Vr.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(n) {
      n ? this.adapter.addClass(mt.REQUIRED) : this.adapter.removeClass(mt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", n.toString()), this.adapter.setLabelRequired(n);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var n = this.adapter.getAnchorElement();
      n && (this.adapter.setMenuAnchorElement(n), this.adapter.setMenuAnchorCorner(ei.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(mt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(mt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(mt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var n = this.adapter.hasClass(mt.REQUIRED);
      n && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(n) {
      if (this.helperText) {
        this.helperText.setValidity(n);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(ko.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(ko.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var n = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        n.recentlyClicked = !1;
      }, Vr.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(Pt)
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
var rb = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return er;
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
  }(Pt)
), ib = /* @__PURE__ */ pe("<div><!></div>");
function ab(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "style", 3, ""), a = m(e, "static", 3, !1), o = m(e, "anchor", 3, !0), u = m(e, "fixed", 3, !1), l = m(e, "open", 31, () => Ee(a())), c = m(e, "managed", 3, !1), d = m(e, "fullWidth", 3, !1), h = m(e, "quickOpen", 3, !1), f = m(e, "anchorElement", 15), v = m(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), p = m(e, "maxHeight", 3, 0), g = m(e, "horizontallyCenteredOnViewport", 3, !1), I = m(e, "openBottomBias", 3, 0), E = m(e, "neverRestoreFocus", 3, !1), A = /* @__PURE__ */ Ge(e, [
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
  ]), C, b = /* @__PURE__ */ we(void 0), _ = Ee({}), S = Ee({}), T = /* @__PURE__ */ we(void 0);
  ee("SMUI:list:role", "menu"), ee("SMUI:list:item:role", "menuitem"), Te(() => {
    var V, re;
    C && o() && !((V = C.parentElement) != null && V.classList.contains("mdc-menu-surface--anchor")) && ((re = C.parentElement) == null || re.classList.add("mdc-menu-surface--anchor"), f(C.parentElement ?? void 0));
  }), Te(() => {
    s(b) && s(b).isOpen() !== l() && (l() ? s(b).open() : s(b).close());
  }), Te(() => {
    s(b) && s(b).setQuickOpen(h());
  }), Te(() => {
    s(b) && s(b).setFixedPosition(u());
  }), Te(() => {
    s(b) && s(b).setMaxHeight(p());
  }), Te(() => {
    s(b) && s(b).setIsHorizontallyCenteredOnViewport(g());
  });
  const x = ei;
  Te(() => {
    s(b) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? s(b).setAnchorCorner(x[e.anchorCorner]) : s(b).setAnchorCorner(e.anchorCorner));
  }), Te(() => {
    s(b) && s(b).setAnchorMargin(v());
  }), Te(() => {
    s(b) && s(b).setOpenBottomBias(I());
  });
  const L = oe("SMUI:menu-surface:mount"), U = oe("SMUI:menu-surface:unmount");
  at(() => {
    ae(
      b,
      new $c({
        addClass: B,
        removeClass: M,
        hasClass: Y,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || ze(w(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || ze(w(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && ze(w(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || ze(w(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (re) => w().contains(re),
        isRtl: () => getComputedStyle(w()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (re) => {
          S["transform-origin"] = re;
        },
        isFocused: () => document.activeElement === w(),
        saveFocus: () => {
          ae(T, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !E() && (!C || w().contains(document.activeElement)) && s(T) && document.contains(s(T)) && "focus" in s(T) && s(T).focus();
        },
        getInnerDimensions: () => ({
          width: w().offsetWidth,
          height: w().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (re) => {
          S.left = "left" in re ? `${re.left}px` : "", S.right = "right" in re ? `${re.right}px` : "", S.top = "top" in re ? `${re.top}px` : "", S.bottom = "bottom" in re ? `${re.bottom}px` : "";
        },
        setMaxHeight: (re) => {
          S["max-height"] = re;
        }
      }),
      !0
    );
    const V = {
      get open() {
        return l();
      },
      set open(re) {
        l(re);
      },
      closeProgrammatic: Q
    };
    return L && L(V), s(b).init(), () => {
      var X, he;
      U && U(V);
      const re = s(b).isHoistedElement;
      (X = s(b)) == null || X.destroy(), re && ((he = w().parentNode) == null || he.removeChild(w()));
    };
  }), Kn(() => {
    var V;
    o() && w() && ((V = w().parentElement) == null || V.classList.remove("mdc-menu-surface--anchor"));
  });
  function Y(V) {
    return V in _ ? _[V] : w().classList.contains(V);
  }
  function B(V) {
    _[V] || (_[V] = !0);
  }
  function M(V) {
    (!(V in _) || _[V]) && (_[V] = !1);
  }
  function Q(V) {
    var re;
    (re = s(b)) == null || re.close(V), l(!1);
  }
  function F(V) {
    s(b) && l() && !c() && s(b).handleBodyClick(V);
  }
  function k() {
    return l();
  }
  function H(V) {
    l(V);
  }
  function W(V, re) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setAbsolutePosition(V, re);
  }
  function ne(V) {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).setIsHoisted(V);
  }
  function N() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).isFixed();
  }
  function y() {
    if (s(b) == null)
      throw new Error("Instance is not defined.");
    return s(b).flipCornerHorizontally();
  }
  function w() {
    return C;
  }
  var te = {
    isOpen: k,
    setOpen: H,
    setAbsolutePosition: W,
    setIsHoisted: ne,
    isFixed: N,
    flipCornerHorizontally: y,
    getElement: w
  }, D = ib();
  Mf("click", xu.body, F, !0);
  var j = (V) => {
    var re;
    s(b) && !c() && s(b).handleKeydown(V), (re = e.onkeydown) == null || re.call(e, V);
  };
  Be(
    D,
    (V, re) => ({
      class: V,
      style: re,
      role: "dialog",
      ...A,
      onkeydown: j
    }),
    [
      () => He({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": d(),
        ..._,
        [r()]: !0
      }),
      () => Object.entries(S).map(([V, re]) => `${V}: ${re};`).concat([i()]).join(" ")
    ]
  );
  var de = ye(D);
  return _e(de, () => e.children ?? be), Se(D, (V) => C = V, () => C), Ue(D, (V, re) => K == null ? void 0 : K(V, re), n), O(t, D), De(te);
}
function Vo(t, { addClass: e = (r) => t.classList.add(r), removeClass: n = (r) => t.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      n("mdc-menu-surface--anchor");
    }
  };
}
function ob(t, e) {
  Me(e, !0);
  const { closest: n } = yo;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "open", 15, !1), o = m(e, "anchorElement", 15), u = m(e, "managed", 3, !1), l = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, d = /* @__PURE__ */ we(void 0), h = /* @__PURE__ */ we(void 0), f = /* @__PURE__ */ we(void 0);
  ee("SMUI:menu-surface:mount", (x) => {
    s(h) || ae(h, x, !0);
  });
  const v = oe("SMUI:list:mount");
  ee("SMUI:list:mount", (x) => {
    s(f) || ae(f, x, !0), v && v(x);
  });
  const p = oe("SMUI:menu:mount"), g = oe("SMUI:menu:unmount");
  at(() => (ae(
    d,
    new tb({
      addClassToElementAtIndex: (x, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).addClassForElementIndex(x, L);
      },
      removeClassFromElementAtIndex: (x, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeClassForElementIndex(x, L);
      },
      addAttributeToElementAtIndex: (x, L, U) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).setAttributeForElementIndex(x, L, U);
      },
      removeAttributeFromElementAtIndex: (x, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).removeAttributeForElementIndex(x, L);
      },
      getAttributeFromElementAtIndex: (x, L) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getAttributeFromElementIndex(x, L);
      },
      elementContainsClass: (x, L) => x.classList.contains(L),
      closeSurface: (x) => {
        var L;
        u() || ((L = s(h)) == null || L.closeProgrammatic(x), ze(S(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).getOrderedList().map((L) => L.element).indexOf(x);
      },
      notifySelected: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        ze(S(), "SMUIMenuSelected", {
          index: x.index,
          item: s(f).getOrderedList()[x.index].element
        });
      },
      getMenuItemCount: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return s(f).items.length;
      },
      focusItemAtIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        s(f).focusItemAtIndex(x);
      },
      focusListRoot: () => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in s(f).element && s(f).element.focus();
      },
      isSelectableItemAtIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        return !!n(s(f).getOrderedList()[x].element, `.${Si.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (x) => {
        if (s(f) == null)
          throw new Error("List accessor is undefined.");
        const L = s(f).getOrderedList(), U = n(L[x].element, `.${Si.MENU_SELECTION_GROUP}`), Y = U == null ? void 0 : U.querySelector(`.${Si.MENU_SELECTED_LIST_ITEM}`);
        return Y ? L.map((B) => B.element).indexOf(Y) : -1;
      }
    }),
    !0
  ), p && p(s(d)), s(d).init(), () => {
    var x;
    g && s(d) && g(s(d)), (x = s(d)) == null || x.destroy();
  }));
  function I(x) {
    s(d) && s(d).handleKeydown(x);
  }
  function E() {
    return a();
  }
  function A(x) {
    a(x);
  }
  function C(x) {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    s(d).setDefaultFocusState(x);
  }
  function b() {
    if (s(d) == null)
      throw new Error("Instance is undefined.");
    return s(d).getSelectedIndex();
  }
  function _() {
    return c;
  }
  function S() {
    return c.getElement();
  }
  var T = {
    isOpen: E,
    setOpen: A,
    setDefaultFocusState: C,
    getSelectedIndex: b,
    getMenuSurface: _,
    getElement: S
  };
  {
    let x = /* @__PURE__ */ ue(() => He({ "mdc-menu": !0, [i()]: !0 }));
    Se(
      ab(t, rt(
        {
          get use() {
            return r();
          },
          get class() {
            return s(x);
          },
          get managed() {
            return u();
          }
        },
        () => l,
        {
          onkeydown: (L) => {
            var U;
            I(L), (U = e.onkeydown) == null || U.call(e, L);
          },
          onSMUIMenuSurfaceOpened: (L) => {
            var U;
            s(d) && s(d).handleMenuSurfaceOpened(), (U = e.onSMUIMenuSurfaceOpened) == null || U.call(e, L);
          },
          onSMUIListAction: (L) => {
            var U;
            s(d) && s(f) && s(d).handleItemAction(s(f).getOrderedList()[L.detail.index].element), (U = e.onSMUIListAction) == null || U.call(e, L);
          },
          get open() {
            return a();
          },
          set open(L) {
            a(L);
          },
          get anchorElement() {
            return o();
          },
          set anchorElement(L) {
            o(L);
          },
          children: (L, U) => {
            var Y = le(), B = Z(Y);
            _e(B, () => e.children ?? be), O(L, Y);
          },
          $$slots: { default: !0 }
        }
      )),
      (L) => c = L,
      () => c
    );
  }
  return De(T);
}
function sb(t, e) {
  Me(e, !0);
  const { closest: n, matches: r } = yo;
  let i = oe("SMUI:list:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "nonInteractive", 3, !1), l = m(e, "dense", 3, !1), c = m(e, "textualList", 3, !1), d = m(e, "avatarList", 3, !1), h = m(e, "iconList", 3, !1), f = m(e, "imageList", 3, !1), v = m(e, "thumbnailList", 3, !1), p = m(e, "videoList", 3, !1), g = m(e, "twoLine", 3, !1), I = m(e, "threeLine", 3, !1), E = m(e, "vertical", 3, !0), A = m(e, "wrapFocus", 19, () => oe("SMUI:list:wrapFocus") ?? !1), C = m(e, "singleSelection", 3, !1), b = m(e, "disabledItemsFocusable", 3, !1), _ = m(e, "selectedIndex", 31, () => -1), S = m(e, "radioList", 3, !1), T = m(e, "checkList", 3, !1), x = m(e, "hasTypeahead", 3, !1), L = m(e, "component", 3, Mr), U = m(e, "tag", 3, i ? "nav" : "ul"), Y = /* @__PURE__ */ Ge(e, [
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
  ]), B, M = /* @__PURE__ */ we(void 0), Q = [], F = oe("SMUI:list:role");
  const k = /* @__PURE__ */ new WeakMap();
  let H = oe("SMUI:dialog:selection"), W = oe("SMUI:addLayoutListener"), ne;
  ee("SMUI:list:nonInteractive", u()), ee("SMUI:separator:context", "list"), F || (C() ? (F = "listbox", ee("SMUI:list:item:role", "option")) : S() ? (F = "radiogroup", ee("SMUI:list:item:role", "radio")) : T() ? (F = "group", ee("SMUI:list:item:role", "checkbox")) : (F = "list", ee("SMUI:list:item:role", void 0))), Te(() => {
    s(M) && s(M).setVerticalOrientation(E());
  }), Te(() => {
    s(M) && s(M).setWrapFocus(A());
  }), Te(() => {
    s(M) && s(M).setHasTypeahead(x());
  }), Te(() => {
    s(M) && s(M).setSingleSelection(C());
  }), Te(() => {
    s(M) && s(M).setDisabledItemsFocusable(b());
  }), Te(() => {
    s(M) && C() && P() !== _() && s(M).setSelectedIndex(_());
  }), W && (ne = W(se)), ee("SMUI:list:item:mount", (me) => {
    Q.push(me), k.set(me.element, me), C() && me.selected && _(Le(me.element));
  }), ee("SMUI:list:item:unmount", (me) => {
    const ge = (me && Q.findIndex((q) => q === me)) ?? -1;
    ge !== -1 && (Q.splice(ge, 1), k.delete(me.element));
  });
  const N = oe("SMUI:list:mount"), y = oe("SMUI:list:unmount");
  at(() => {
    ae(
      M,
      new Qg({
        addClassForElementIndex: X,
        focusItemAtIndex: J,
        getAttributeForElementIndex: (ge, q) => {
          var z;
          return ((z = V()[ge]) == null ? void 0 : z.getAttr(q)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? V().map((ge) => ge.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => Q.length,
        getPrimaryTextAtIndex: Pe,
        hasCheckboxAtIndex: (ge) => {
          var q;
          return ((q = V()[ge]) == null ? void 0 : q.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (ge) => {
          var q;
          return ((q = V()[ge]) == null ? void 0 : q.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (ge) => {
          const q = V()[ge];
          return ((q == null ? void 0 : q.hasCheckbox) && q.checked) ?? !1;
        },
        isFocusInsideList: () => B != null && Ae() !== document.activeElement && Ae().contains(document.activeElement),
        isRootFocused: () => B != null && document.activeElement === Ae(),
        listItemAtIndexHasClass: re,
        notifyAction: (ge) => {
          _(ge), B != null && ze(Ae(), "SMUIListAction", { index: ge });
        },
        notifySelectionChange: (ge) => {
          B != null && ze(Ae(), "SMUIListSelectionChange", { changedIndices: ge });
        },
        removeClassForElementIndex: he,
        setAttributeForElementIndex: ie,
        setCheckedCheckboxOrRadioAtIndex: (ge, q) => {
          V()[ge].checked = q;
        },
        setTabIndexForListItemChildren: (ge, q) => {
          const z = V()[ge];
          Array.prototype.forEach.call(z.element.querySelectorAll("button:not(:disabled), a"), (ut) => {
            ut.setAttribute("tabindex", q);
          });
        }
      }),
      !0
    );
    const me = {
      get element() {
        return Ae();
      },
      get items() {
        return Q;
      },
      get typeaheadInProgress() {
        if (!s(M))
          throw new Error("Instance is undefined.");
        return s(M).isTypeaheadInProgress();
      },
      typeaheadMatchItem(ge, q) {
        if (!s(M))
          throw new Error("Instance is undefined.");
        return s(M).typeaheadMatchItem(
          ge,
          q,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: V,
      focusItemAtIndex: J,
      addClassForElementIndex: X,
      removeClassForElementIndex: he,
      setAttributeForElementIndex: ie,
      removeAttributeForElementIndex: je,
      getAttributeFromElementIndex: qe,
      getPrimaryTextAtIndex: Pe
    };
    return N && N(me), s(M).init(), s(M).layout(), () => {
      var ge;
      y && y(me), (ge = s(M)) == null || ge.destroy();
    };
  }), Kn(() => {
    ne && ne();
  });
  function w(me) {
    s(M) && me.target && s(M).handleKeydown(me, me.target.classList.contains("mdc-deprecated-list-item"), Le(me.target));
  }
  function te(me) {
    s(M) && me.target && s(M).handleFocusIn(Le(me.target));
  }
  function D(me) {
    s(M) && me.target && s(M).handleFocusOut(Le(me.target));
  }
  function j(me) {
    s(M) && me.target && s(M).handleClick(Le(me.target), !r(me.target, 'input[type="checkbox"], input[type="radio"]'), me);
  }
  function de(me) {
    if (S() || T()) {
      const ge = Le(me.target);
      if (ge !== -1) {
        const q = V()[ge];
        q && (S() && !q.checked || T()) && (r(me.detail.target, 'input[type="checkbox"], input[type="radio"]') || (q.checked = !q.checked), q.activateRipple(), window.requestAnimationFrame(() => {
          q.deactivateRipple();
        }));
      }
    }
  }
  function V() {
    return B == null ? [] : [...Ae().children].map((me) => k.get(me)).filter((me) => me && me._smui_list_item_accessor);
  }
  function re(me, ge) {
    const q = V()[me];
    return (q && q.hasClass(ge)) ?? !1;
  }
  function X(me, ge) {
    const q = V()[me];
    q && q.addClass(ge);
  }
  function he(me, ge) {
    const q = V()[me];
    q && q.removeClass(ge);
  }
  function ie(me, ge, q) {
    const z = V()[me];
    z && z.addAttr(ge, q);
  }
  function je(me, ge) {
    const q = V()[me];
    q && q.removeAttr(ge);
  }
  function qe(me, ge) {
    const q = V()[me];
    return q ? q.getAttr(ge) : null;
  }
  function Pe(me) {
    const ge = V()[me];
    return (ge && ge.getPrimaryText()) ?? "";
  }
  function Le(me) {
    const ge = n(me, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return ge && r(ge, ".mdc-deprecated-list-item") ? V().map((q) => q == null ? void 0 : q.element).indexOf(ge) : -1;
  }
  function se() {
    if (!s(M))
      throw new Error("Instance is undefined.");
    return s(M).layout();
  }
  function xe(me, ge) {
    if (!s(M))
      throw new Error("Instance is undefined.");
    return s(M).setEnabled(me, ge);
  }
  function Qe() {
    if (!s(M))
      throw new Error("Instance is undefined.");
    return s(M).isTypeaheadInProgress();
  }
  function P() {
    if (!s(M))
      throw new Error("Instance is undefined.");
    return s(M).getSelectedIndex();
  }
  function G() {
    if (!s(M))
      throw new Error("Instance is undefined.");
    return s(M).getFocusedItemIndex();
  }
  function J(me) {
    const ge = V()[me];
    ge && "focus" in ge.element && ge.element.focus();
  }
  function Ae() {
    return B.getElement();
  }
  var Nt = {
    layout: se,
    setEnabled: xe,
    getTypeaheadInProgress: Qe,
    getSelectedIndex: P,
    getFocusedItemIndex: G,
    focusItemAtIndex: J,
    getElement: Ae
  }, bt = le(), pn = Z(bt);
  {
    let me = /* @__PURE__ */ ue(() => He({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": d() || H,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": p(),
      "mdc-deprecated-list--two-line": g(),
      "smui-list--three-line": I() && !g(),
      [o()]: !0
    }));
    Lr(pn, L, (ge, q) => {
      Se(
        q(ge, rt(
          {
            get tag() {
              return U();
            },
            get use() {
              return a();
            },
            get class() {
              return s(me);
            },
            get role() {
              return F;
            }
          },
          () => Y,
          {
            onkeydown: (z) => {
              var Re;
              w(z), (Re = e.onkeydown) == null || Re.call(e, z);
            },
            onfocusin: (z) => {
              var Re;
              te(z), (Re = e.onfocusin) == null || Re.call(e, z);
            },
            onfocusout: (z) => {
              var Re;
              D(z), (Re = e.onfocusout) == null || Re.call(e, z);
            },
            onclick: (z) => {
              var Re;
              j(z), (Re = e.onclick) == null || Re.call(e, z);
            },
            onSMUIAction: (z) => {
              var Re;
              de(z), (Re = e.onSMUIAction) == null || Re.call(e, z);
            },
            children: (z, Re) => {
              var ut = le(), pt = Z(ut);
              _e(pt, () => e.children ?? be), O(z, ut);
            },
            $$slots: { default: !0 }
          }
        )),
        (z) => B = z,
        () => B
      );
    });
  }
  return O(t, bt), De(Nt);
}
let lb = 0;
var ub = /* @__PURE__ */ pe('<span class="mdc-deprecated-list-item__ripple"></span>'), cb = /* @__PURE__ */ pe("<!><!>", 1);
function db(t, e) {
  Me(e, !0);
  let n = () => {
  };
  function r(X) {
    return X === n;
  }
  let i = oe("SMUI:list:item:nav"), a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "style", 3, ""), l = m(e, "nonInteractive", 19, () => oe("SMUI:list:nonInteractive") ?? !1), c = m(e, "ripple", 19, () => !l()), d = m(e, "wrapper", 3, !1), h = m(e, "activated", 15, !1), f = m(e, "role", 19, () => d() ? "presentation" : oe("SMUI:list:item:role")), v = m(e, "selected", 15, !1), p = m(e, "disabled", 3, !1), g = m(e, "skipRestoreFocus", 3, !1), I = m(e, "tabindex", 15, n), E = m(e, "inputId", 19, () => "SMUI-form-field-list-" + lb++), A = m(e, "component", 3, Mr), C = m(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), b = /* @__PURE__ */ Ge(e, [
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
  ee("SMUI:list:nonInteractive", void 0), ee("SMUI:list:item:role", void 0);
  let _, S = Ee({}), T = Ee({}), x = Ee({}), L = /* @__PURE__ */ we(void 0), U = /* @__PURE__ */ we(void 0);
  const Y = /* @__PURE__ */ ue(() => r(I()) ? !l() && !p() && (v() || s(L) && s(L).checked) ? 0 : -1 : I());
  ee("SMUI:generic:input:props", { id: E() }), ee("SMUI:separator:context", void 0), ee("SMUI:generic:input:mount", (X) => {
    ("_smui_checkbox_accessor" in X || "_smui_radio_accessor" in X) && ae(L, X, !0);
  }), ee("SMUI:generic:input:unmount", () => {
    ae(L, void 0);
  });
  const B = oe("SMUI:list:item:mount"), M = oe("SMUI:list:item:unmount");
  at(() => {
    if (!v() && !l()) {
      let he = !0, ie = _.getElement();
      for (; ie.previousElementSibling; )
        if (ie = ie.previousElementSibling, ie.nodeType === 1 && ie.classList.contains("mdc-deprecated-list-item") && !ie.classList.contains("mdc-deprecated-list-item--disabled")) {
          he = !1;
          break;
        }
      he && ae(U, window.requestAnimationFrame(() => y(ie)), !0);
    }
    const X = {
      _smui_list_item_accessor: !0,
      get element() {
        return j();
      },
      get selected() {
        return v();
      },
      set selected(he) {
        v(he);
      },
      hasClass: Q,
      addClass: F,
      removeClass: k,
      getAttr: W,
      addAttr: ne,
      removeAttr: N,
      getPrimaryText: D,
      // For inputs within item.
      get checked() {
        return (s(L) && s(L).checked) ?? !1;
      },
      set checked(he) {
        s(L) && (s(L).checked = !!he);
      },
      get hasCheckbox() {
        return !!(s(L) && "_smui_checkbox_accessor" in s(L));
      },
      get hasRadio() {
        return !!(s(L) && "_smui_radio_accessor" in s(L));
      },
      activateRipple() {
        s(L) && s(L).activateRipple();
      },
      deactivateRipple() {
        s(L) && s(L).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: te,
      get tabindex() {
        return s(Y);
      },
      set tabindex(he) {
        I(he);
      },
      get disabled() {
        return p();
      },
      get activated() {
        return h();
      },
      set activated(he) {
        h(he);
      }
    };
    return B && B(X), () => {
      M && M(X);
    };
  }), Kn(() => {
    s(U) && window.cancelAnimationFrame(s(U));
  });
  function Q(X) {
    return X in S ? S[X] : j().classList.contains(X);
  }
  function F(X) {
    S[X] || (S[X] = !0);
  }
  function k(X) {
    (!(X in S) || S[X]) && (S[X] = !1);
  }
  function H(X, he) {
    T[X] != he && (he === "" || he == null ? delete T[X] : T[X] = he);
  }
  function W(X) {
    return X in x ? x[X] ?? null : j().getAttribute(X);
  }
  function ne(X, he) {
    x[X] !== he && (x[X] = he);
  }
  function N(X) {
    (!(X in x) || x[X] != null) && (x[X] = void 0);
  }
  function y(X) {
    let he = !0;
    for (; X.nextElementSibling; )
      if (X = X.nextElementSibling, X.nodeType === 1 && X.classList.contains("mdc-deprecated-list-item")) {
        const ie = X.attributes.getNamedItem("tabindex");
        if (ie && ie.value === "0") {
          he = !1;
          break;
        }
      }
    he && I(0);
  }
  function w(X) {
    const he = X.key === "Enter", ie = X.key === "Space";
    (he || ie) && te(X);
  }
  function te(X) {
    p() || ze(j(), "SMUIAction", X);
  }
  function D() {
    const X = j(), he = X.querySelector(".mdc-deprecated-list-item__primary-text");
    if (he)
      return he.textContent ?? "";
    const ie = X.querySelector(".mdc-deprecated-list-item__text");
    return ie ? ie.textContent ?? "" : X.textContent ?? "";
  }
  function j() {
    return _.getElement();
  }
  var de = { action: te, getPrimaryText: D, getElement: j }, V = le(), re = Z(V);
  {
    let X = /* @__PURE__ */ ue(() => [
      ...l() ? [] : [
        [
          jt,
          {
            ripple: !s(L),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: p(),
            addClass: F,
            removeClass: k,
            addStyle: H
          }
        ]
      ],
      ...a()
    ]), he = /* @__PURE__ */ ue(() => He({
      "mdc-deprecated-list-item": !d(),
      "mdc-deprecated-list-item__wrapper": d(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": p(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...S,
      [o()]: !0
    })), ie = /* @__PURE__ */ ue(() => Object.entries(T).map(([qe, Pe]) => `${qe}: ${Pe};`).concat([u()]).join(" ")), je = /* @__PURE__ */ ue(() => g() || void 0);
    Lr(re, A, (qe, Pe) => {
      Se(
        Pe(qe, rt(
          {
            get tag() {
              return C();
            },
            get use() {
              return s(X);
            },
            get class() {
              return s(he);
            },
            get style() {
              return s(ie);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || d() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": s(L) && s(L).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": p() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return s(je);
            },
            get tabindex() {
              return s(Y);
            },
            get href() {
              return e.href;
            }
          },
          () => x,
          () => b,
          {
            onclick: (Le) => {
              var se;
              te(Le), (se = e.onclick) == null || se.call(e, Le);
            },
            onkeydown: (Le) => {
              var se;
              w(Le), (se = e.onkeydown) == null || se.call(e, Le);
            },
            children: (Le, se) => {
              var xe = cb(), Qe = Z(xe);
              {
                var P = (J) => {
                  var Ae = ub();
                  O(J, Ae);
                };
                ce(Qe, (J) => {
                  c() && J(P);
                });
              }
              var G = Ie(Qe);
              _e(G, () => e.children ?? be), O(Le, xe);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => _ = Le,
        () => _
      );
    });
  }
  return O(t, V), De(de);
}
let fb = 0;
var hb = /* @__PURE__ */ pe("<div><!></div>");
function vb(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "id", 19, () => "SMUI-select-helper-text-" + fb++), a = m(e, "persistent", 3, !1), o = m(e, "validationMsg", 3, !1), u = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ we(void 0), d = Ee({}), h = Ee({}), f = /* @__PURE__ */ we(void 0);
  const v = oe("SMUI:select:helper-text:id"), p = oe("SMUI:select:helper-text:mount"), g = oe("SMUI:select:helper-text:unmount");
  at(() => (ae(
    c,
    new rb({
      addClass: E,
      removeClass: A,
      hasClass: I,
      getAttr: C,
      setAttr: b,
      removeAttr: _,
      setContent: (B) => {
        ae(f, B, !0);
      }
    }),
    !0
  ), v && v(i()), p && p(s(c)), s(c).init(), () => {
    var B;
    g && s(c) && g(s(c)), (B = s(c)) == null || B.destroy();
  }));
  function I(B) {
    return B in d ? d[B] : S().classList.contains(B);
  }
  function E(B) {
    d[B] || (d[B] = !0);
  }
  function A(B) {
    (!(B in d) || d[B]) && (d[B] = !1);
  }
  function C(B) {
    return B in h ? h[B] ?? null : S().getAttribute(B);
  }
  function b(B, M) {
    h[B] !== M && (h[B] = M);
  }
  function _(B) {
    (!(B in h) || h[B] != null) && (h[B] = void 0);
  }
  function S() {
    return l;
  }
  var T = { getElement: S }, x = hb();
  Be(
    x,
    (B) => ({
      class: B,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...u
    }),
    [
      () => He({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": o(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...d,
        [r()]: !0
      })
    ]
  );
  var L = ye(x);
  {
    var U = (B) => {
      var M = le(), Q = Z(M);
      _e(Q, () => e.children ?? be), O(B, M);
    }, Y = (B) => {
      var M = Wt();
      Fe(() => dt(M, s(f))), O(B, M);
    };
    ce(L, (B) => {
      s(f) == null ? B(U) : B(Y, !1);
    });
  }
  return Se(x, (B) => l = B, () => l), Ue(x, (B, M) => K == null ? void 0 : K(B, M), n), O(t, x), De(T);
}
let mb = 0;
var pb = /* @__PURE__ */ pe("<input/>"), gb = /* @__PURE__ */ pe('<span class="mdc-select__ripple"></span>'), bb = /* @__PURE__ */ pe('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function yb(t, e) {
  Me(e, !0);
  const n = () => Dt(Ae, "$selectedTextStore", r), [r, i] = xn();
  let a = () => {
  };
  function o(R) {
    return R === a;
  }
  let u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "style", 3, ""), d = m(e, "ripple", 3, !0), h = m(e, "disabled", 3, !1), f = m(e, "variant", 3, "standard"), v = m(e, "noLabel", 3, !1), p = m(e, "label", 3, void 0), g = m(e, "value", 15), I = m(e, "key", 3, (R) => R), E = m(e, "dirty", 15, !1), A = m(e, "invalid", 15, a), C = m(e, "updateInvalid", 19, () => o(A())), b = m(e, "required", 3, !1), _ = m(e, "inputId", 19, () => "SMUI-select-" + mb++), S = m(e, "hiddenInput", 3, !1), T = m(e, "withLeadingIcon", 3, a), x = m(e, "anchor$use", 19, () => []), L = m(e, "anchor$class", 3, ""), U = m(e, "selectedTextContainer$use", 19, () => []), Y = m(e, "selectedTextContainer$class", 3, ""), B = m(e, "selectedText$use", 19, () => []), M = m(e, "selectedText$class", 3, ""), Q = m(e, "dropdownIcon$use", 19, () => []), F = m(e, "dropdownIcon$class", 3, ""), k = m(e, "menu$class", 3, ""), H = /* @__PURE__ */ Ge(e, [
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
  const W = o(A());
  o(A()) && A(!1);
  let ne, N = /* @__PURE__ */ we(void 0), y = Ee({}), w = Ee({}), te, D = Ee({}), j = /* @__PURE__ */ we(-1);
  const de = /* @__PURE__ */ ue(() => H.menu$id ?? _() + "-menu");
  let V = /* @__PURE__ */ we(void 0), re = oe("SMUI:addLayoutListener"), X, he = /* @__PURE__ */ we(!1), ie = Ee({}), je = /* @__PURE__ */ we(void 0), qe = /* @__PURE__ */ we(void 0), Pe = /* @__PURE__ */ we(!1), Le, se = oe("SMUI:select:context"), xe, Qe, P, G, J;
  ee("SMUI:list:role", ""), ee("SMUI:list:nav", !1);
  const Ae = Ct("");
  ee("SMUI:select:selectedText", Ae);
  const Nt = Ct(g());
  Te(() => {
    vn(Nt, g());
  }), ee("SMUI:select:value", Nt), Te(() => {
    s(N) && s(N).getValue() !== I()(g()) && s(N).setValue(I()(g()));
  });
  let bt = s(j);
  Te(() => {
    if (bt !== s(j))
      if (bt = s(j), s(N))
        s(N).setSelectedIndex(
          s(j),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = yt();
        g() !== R[s(j)] && g(R[s(j)]);
      }
  }), Te(() => {
    s(N) && s(N).getDisabled() !== h() && s(N).setDisabled(h());
  }), Te(() => {
    s(N) && E() && s(N).isValid() !== !A() && (C() ? A(!s(N).isValid()) : s(N).setValid(!A()));
  }), Te(() => {
    s(N) && s(N).getRequired() !== b() && s(N).setRequired(b());
  }), re && (X = re(Pr)), ee("SMUI:select:leading-icon:mount", (R) => {
    xe = R;
  }), ee("SMUI:select:leading-icon:unmount", () => {
    xe = void 0;
  }), ee("SMUI:list:mount", (R) => {
    Le = R;
  }), ee("SMUI:select:helper-text:id", (R) => {
    ae(V, R, !0);
  }), ee("SMUI:select:helper-text:mount", (R) => {
    Qe = R;
  }), ee("SMUI:select:helper-text:unmount", () => {
    ae(V, void 0), Qe = void 0;
  }), at(() => (ae(
    N,
    new nb(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          vn(Ae, R);
        },
        isSelectAnchorFocused: () => document.activeElement === te,
        getSelectAnchorAttr: ut,
        setSelectAnchorAttr: pt,
        removeSelectAnchorAttr: Ot,
        addMenuClass: z,
        removeMenuClass: Re,
        openMenu: () => {
          ae(he, !0);
        },
        closeMenu: () => {
          ae(he, !1);
        },
        getAnchorElement: () => te,
        setMenuAnchorElement: (R) => {
          ae(je, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          ae(qe, R, !0);
        },
        setMenuWrapFocus: (R) => {
          ae(Pe, R, !0);
        },
        getSelectedIndex: () => s(j),
        setSelectedIndex: (R) => {
          bt = R, ae(j, R, !0), g(yt()[s(j)]);
        },
        focusMenuItemAtIndex: (R) => {
          Le.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => yt().map(I()),
        getMenuItemTextAtIndex: (R) => Le.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (R, ve) => Le.typeaheadMatchItem(R, ve),
        // getCommonAdapterMethods
        addClass: me,
        removeClass: ge,
        hasClass: pn,
        setRippleCenter: (R) => G && G.setRippleCenter(R),
        activateBottomLine: () => G && G.activate(),
        deactivateBottomLine: () => G && G.deactivate(),
        notifyChange: (R) => {
          var ve;
          E(!0), C() && A(!((ve = s(N)) != null && ve.isValid())), ze(Hn(), "SMUISelectChange", { value: g(), index: s(j) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!J,
        notchOutline: (R) => J && J.notch(R),
        closeOutline: () => J && J.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!P,
        floatLabel: (R) => P && P.float(R),
        getLabelWidth: () => P ? P.getWidth() : 0,
        setLabelRequired: (R) => P && P.setRequired(R)
      },
      {
        get helperText() {
          return Qe;
        },
        get leadingIcon() {
          return xe;
        }
      }
    ),
    !0
  ), ae(j, yt().indexOf(g()), !0), s(N).init(), Bt(W), () => {
    var R;
    (R = s(N)) == null || R.destroy();
  })), Kn(() => {
    X && X();
  });
  function pn(R) {
    return R in y ? y[R] : Hn().classList.contains(R);
  }
  function me(R) {
    y[R] || (y[R] = !0);
  }
  function ge(R) {
    (!(R in y) || y[R]) && (y[R] = !1);
  }
  function q(R, ve) {
    w[R] != ve && (ve === "" || ve == null ? delete w[R] : w[R] = ve);
  }
  function z(R) {
    ie[R] || (ie[R] = !0);
  }
  function Re(R) {
    (!(R in ie) || ie[R]) && (ie[R] = !1);
  }
  function ut(R) {
    return R in D ? D[R] ?? null : Hn().getAttribute(R);
  }
  function pt(R, ve) {
    D[R] !== ve && (D[R] = ve);
  }
  function Ot(R) {
    (!(R in D) || D[R] != null) && (D[R] = void 0);
  }
  function yt() {
    return Le.getOrderedList().map((R) => R.getValue());
  }
  function zn(R) {
    const ve = R.currentTarget.getBoundingClientRect();
    return (ft(R) ? R.touches[0].clientX : R.clientX) - ve.left;
  }
  function ft(R) {
    return "touches" in R;
  }
  function Rt() {
    if (s(N) == null)
      throw new Error("Instance is undefined.");
    return s(N).getUseDefaultValidation();
  }
  function Bt(R) {
    var ve;
    (ve = s(N)) == null || ve.setUseDefaultValidation(R);
  }
  function Kt() {
    te.focus();
  }
  function Pr() {
    var R;
    (R = s(N)) == null || R.layout();
  }
  function Hn() {
    return ne;
  }
  var We = {
    getUseDefaultValidation: Rt,
    setUseDefaultValidation: Bt,
    focus: Kt,
    layout: Pr,
    getElement: Hn
  }, et = bb(), Xe = Z(et);
  Be(Xe, (R, ve, ct) => ({ class: R, style: ve, ...ct }), [
    () => He({
      "mdc-select": !0,
      "mdc-select--required": b(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": o(T()) ? e.leadingIcon : T(),
      "mdc-select--no-label": v() || p() == null,
      "mdc-select--invalid": A(),
      "mdc-select--activated": s(he),
      "mdc-data-table__pagination-rows-per-page-select": se === "data-table:pagination",
      ...y,
      [l()]: !0
    }),
    () => Object.entries(w).map(([R, ve]) => `${R}: ${ve};`).concat([c()]).join(" "),
    () => Gi(H, [
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
  var xt = ye(Xe);
  {
    var cn = (R) => {
      var ve = pb();
      Be(
        ve,
        (ct) => ({
          type: "hidden",
          required: b(),
          disabled: h(),
          value: g(),
          ...ct
        }),
        [() => st(H, "input$")],
        void 0,
        void 0,
        !0
      ), O(R, ve);
    };
    ce(xt, (R) => {
      S() && R(cn);
    });
  }
  var tt = Ie(xt, 2), It = (R) => {
    var ve;
    te.focus(), s(N) && s(N).handleClick(zn(R)), (ve = e.anchor$onclick) == null || ve.call(e, R);
  }, ht = (R) => {
    var ve;
    s(N) && s(N).handleKeydown(R), (ve = e.onkeydown) == null || ve.call(e, R);
  }, Je = (R) => {
    var ve;
    s(N) && s(N).handleBlur(), ze(Hn(), "blur", R), (ve = e.anchor$onblur) == null || ve.call(e, R);
  }, Tt = (R) => {
    var ve;
    s(N) && s(N).handleFocus(), ze(Hn(), "focus", R), (ve = e.anchor$onfocus) == null || ve.call(e, R);
  };
  Be(
    tt,
    (R, ve) => ({
      class: R,
      "aria-required": b() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": s(de),
      "aria-expanded": s(he) ? "true" : "false",
      "aria-describedby": s(V),
      role: "combobox",
      tabindex: "0",
      ...D,
      ...ve,
      onclick: It,
      onkeydown: ht,
      onblur: Je,
      onfocus: Tt
    }),
    [
      () => He({ "mdc-select__anchor": !0, [L()]: !0 }),
      () => st(H, "anchor$")
    ]
  );
  var wn = ye(tt);
  {
    var rn = (R) => {
      var ve = gb();
      O(R, ve);
    };
    ce(wn, (R) => {
      f() === "filled" && R(rn);
    });
  }
  var ot = Ie(wn, 2);
  {
    var kt = (R) => {
      {
        let ve = /* @__PURE__ */ ue(() => _() + "-smui-label"), ct = /* @__PURE__ */ ue(() => n() !== ""), wt = /* @__PURE__ */ ue(() => st(H, "label$"));
        Se(
          $a(R, rt(
            {
              get id() {
                return s(ve);
              },
              get floatAbove() {
                return s(ct);
              },
              get required() {
                return b();
              }
            },
            () => s(wt),
            {
              children: (Yn, Zn) => {
                var Yi = le(), ci = Z(Yi);
                {
                  var Ur = (Fr) => {
                  }, Ao = (Fr) => {
                    var Ta = le(), Zi = Z(Ta);
                    {
                      var Ks = (dr) => {
                        var Br = Wt();
                        Fe(() => dt(Br, p())), O(dr, Br);
                      }, wa = (dr) => {
                        var Br = le(), Co = Z(Br);
                        _e(Co, p), O(dr, Br);
                      };
                      ce(
                        Zi,
                        (dr) => {
                          typeof p() == "string" ? dr(Ks) : dr(wa, !1);
                        },
                        !0
                      );
                    }
                    O(Fr, Ta);
                  };
                  ce(ci, (Fr) => {
                    p() == null ? Fr(Ur) : Fr(Ao, !1);
                  });
                }
                O(Yn, Yi);
              },
              $$slots: { default: !0 }
            }
          )),
          (Yn) => P = Yn,
          () => P
        );
      }
    };
    ce(ot, (R) => {
      f() !== "outlined" && !v() && p() != null && R(kt);
    });
  }
  var gn = Ie(ot, 2);
  {
    var zt = (R) => {
      {
        let ve = /* @__PURE__ */ ue(() => v() || p() == null), ct = /* @__PURE__ */ ue(() => st(H, "outline$"));
        Se(
          Zc(R, rt(
            {
              get noLabel() {
                return s(ve);
              }
            },
            () => s(ct),
            {
              children: (wt, Yn) => {
                var Zn = le(), Yi = Z(Zn);
                {
                  var ci = (Ur) => {
                    {
                      let Ao = /* @__PURE__ */ ue(() => _() + "-smui-label"), Fr = /* @__PURE__ */ ue(() => n() !== ""), Ta = /* @__PURE__ */ ue(() => st(H, "label$"));
                      Se(
                        $a(Ur, rt(
                          {
                            get id() {
                              return s(Ao);
                            },
                            get floatAbove() {
                              return s(Fr);
                            },
                            get required() {
                              return b();
                            }
                          },
                          () => s(Ta),
                          {
                            children: (Zi, Ks) => {
                              var wa = le(), dr = Z(wa);
                              {
                                var Br = (Qi) => {
                                }, Co = (Qi) => {
                                  var zs = le(), dd = Z(zs);
                                  {
                                    var fd = (di) => {
                                      var Ji = Wt();
                                      Fe(() => dt(Ji, p())), O(di, Ji);
                                    }, hd = (di) => {
                                      var Ji = le(), vd = Z(Ji);
                                      _e(vd, p), O(di, Ji);
                                    };
                                    ce(
                                      dd,
                                      (di) => {
                                        typeof p() == "string" ? di(fd) : di(hd, !1);
                                      },
                                      !0
                                    );
                                  }
                                  O(Qi, zs);
                                };
                                ce(dr, (Qi) => {
                                  p() == null ? Qi(Br) : Qi(Co, !1);
                                });
                              }
                              O(Zi, wa);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (Zi) => P = Zi,
                        () => P
                      );
                    }
                  };
                  ce(Yi, (Ur) => {
                    !v() && p() != null && Ur(ci);
                  });
                }
                O(wt, Zn);
              },
              $$slots: { default: !0 }
            }
          )),
          (wt) => J = wt,
          () => J
        );
      }
    };
    ce(gn, (R) => {
      f() === "outlined" && R(zt);
    });
  }
  var Nr = Ie(gn, 2);
  _e(Nr, () => e.leadingIcon ?? be);
  var bn = Ie(Nr, 2);
  Be(bn, (R, ve) => ({ class: R, ...ve }), [
    () => He({
      "mdc-select__selected-text-container": !0,
      [Y()]: !0
    }),
    () => st(H, "selectedTextContainer$")
  ]);
  var cr = ye(bn);
  Be(
    cr,
    (R, ve) => ({
      id: _() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": _() + "-smui-label",
      ...ve
    }),
    [
      () => He({
        "mdc-select__selected-text": !0,
        [M()]: !0
      }),
      () => st(H, "selectedText$")
    ]
  );
  var Xi = ye(cr);
  Ue(cr, (R, ve) => K == null ? void 0 : K(R, ve), B), Ue(bn, (R, ve) => K == null ? void 0 : K(R, ve), U);
  var yn = Ie(bn, 2);
  Be(yn, (R, ve) => ({ class: R, ...ve }), [
    () => He({
      "mdc-select__dropdown-icon": !0,
      [F()]: !0
    }),
    () => st(H, "dropdownIcon$")
  ]), Ue(yn, (R, ve) => K == null ? void 0 : K(R, ve), Q);
  var Xn = Ie(yn, 2);
  {
    var Un = (R) => {
      {
        let ve = /* @__PURE__ */ ue(() => st(H, "ripple$"));
        Se(Yc(R, rt(() => s(ve))), (ct) => G = ct, () => G);
      }
    };
    ce(Xn, (R) => {
      f() !== "outlined" && d() && R(Un);
    });
  }
  Se(tt, (R) => te = R, () => te), Ue(tt, (R, ve) => K == null ? void 0 : K(R, ve), x);
  var Hr = Ie(tt, 2);
  {
    let R = /* @__PURE__ */ ue(() => He({
      "mdc-select__menu": !0,
      ...ie,
      [k()]: !0
    })), ve = /* @__PURE__ */ ue(() => st(H, "menu$"));
    ob(Hr, rt(
      {
        get class() {
          return s(R);
        },
        get id() {
          return s(de);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return s(je);
        },
        get anchorCorner() {
          return s(qe);
        }
      },
      () => s(ve),
      {
        onSMUIMenuSelected: (ct) => {
          var wt;
          s(N) && s(N).handleMenuItemAction(ct.detail.index), (wt = e.onSMUIMenuSelected) == null || wt.call(e, ct);
        },
        onSMUIMenuSurfaceClosing: (ct) => {
          var wt;
          s(N) && s(N).handleMenuClosing(), (wt = e.onSMUIMenuSurfaceClosing) == null || wt.call(e, ct);
        },
        onSMUIMenuSurfaceClosed: (ct) => {
          var wt;
          s(N) && s(N).handleMenuClosed(), (wt = e.onSMUIMenuSurfaceClosed) == null || wt.call(e, ct);
        },
        onSMUIMenuSurfaceOpened: (ct) => {
          var wt;
          s(N) && s(N).handleMenuOpened(), (wt = e.onSMUIMenuSurfaceOpened) == null || wt.call(e, ct);
        },
        get open() {
          return s(he);
        },
        set open(ct) {
          ae(he, ct, !0);
        },
        children: (ct, wt) => {
          {
            let Yn = /* @__PURE__ */ ue(() => st(H, "list$"));
            sb(ct, rt(
              {
                role: "listbox",
                get wrapFocus() {
                  return s(Pe);
                }
              },
              () => s(Yn),
              {
                get selectedIndex() {
                  return s(j);
                },
                set selectedIndex(Zn) {
                  ae(j, Zn, !0);
                },
                children: (Zn, Yi) => {
                  var ci = le(), Ur = Z(ci);
                  _e(Ur, () => e.children ?? be), O(Zn, ci);
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
  Se(Xe, (R) => ne = R, () => ne), Ue(Xe, (R, ve) => jt == null ? void 0 : jt(R, ve), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: me,
    removeClass: ge,
    addStyle: q
  })), Ue(Xe, (R, ve) => Vo == null ? void 0 : Vo(R, ve), () => ({ addClass: me, removeClass: ge })), Ue(Xe, (R, ve) => K == null ? void 0 : K(R, ve), u);
  var Eo = Ie(Xe, 2);
  {
    var ud = (R) => {
      {
        let ve = /* @__PURE__ */ ue(() => st(H, "helperText$"));
        vb(R, rt(() => s(ve), {
          children: (ct, wt) => {
            var Yn = le(), Zn = Z(Yn);
            _e(Zn, () => e.helperText ?? be), O(ct, Yn);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ce(Eo, (R) => {
      e.helperText && R(ud);
    });
  }
  Fe(() => dt(Xi, n())), O(t, et);
  var cd = De(We);
  return i(), cd;
}
function Ib(t, e) {
  Me(e, !0);
  const n = () => Dt(d, "$selectedValue", r), [r, i] = xn();
  let a = m(e, "use", 19, () => []);
  m(e, "class", 3, "");
  let o = m(e, "value", 3, ""), u = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = oe("SMUI:select:selectedText"), d = oe("SMUI:select:value");
  ee("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ ue(() => o() != null && o() !== "" && n() === o());
  at(f), Kn(f);
  function f() {
    s(h) && l && vn(c, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var p = { getElement: v };
  Se(
    db(t, rt(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return o();
        },
        get value() {
          return o();
        },
        get selected() {
          return s(h);
        }
      },
      () => u,
      {
        children: (I, E) => {
          var A = le(), C = Z(A);
          _e(C, () => e.children ?? be), O(I, A);
        },
        $$slots: { default: !0 }
      }
    )),
    (I) => l = I,
    () => l
  );
  var g = De(p);
  return i(), g;
}
function fs(t, e) {
  Me(e, !0);
  let n = m(e, "data", 19, () => []);
  m(e, "placeholder", 3, "");
  let r = m(e, "label", 3, "");
  m(e, "description", 3, "");
  let i = m(e, "value", 15, ""), a = m(e, "required", 3, !1);
  m(e, "size", 3, "sm");
  let o = m(e, "selectedOptionIndex", 31, () => -1), u = m(e, "disabled", 3, !1);
  function l(c) {
    return () => o(c);
  }
  yb(t, {
    get disabled() {
      return u();
    },
    key: (c) => `${c ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get required() {
      return a();
    },
    get value() {
      return i();
    },
    set value(c) {
      i(c);
    },
    children: (c, d) => {
      var h = le(), f = Z(h);
      bi(f, 17, n, Ga, (v, p, g) => {
        var I = /* @__PURE__ */ ue(() => l(g));
        Ib(v, {
          get value() {
            return s(p).value;
          },
          $$events: {
            click(...E) {
              var A;
              (A = s(I)) == null || A.apply(this, E);
            }
          },
          children: (E, A) => {
            var C = Wt();
            Fe(() => dt(C, s(p).label)), O(E, C);
          },
          $$slots: { default: !0 }
        });
      }), O(c, h);
    },
    $$slots: { default: !0 }
  }), De();
}
var _b = /* @__PURE__ */ pe("<div><!></div>");
function ed(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "variant", 3, "raised"), a = m(e, "square", 3, !1), o = m(e, "color", 3, "default"), u = m(e, "elevation", 3, 1), l = m(e, "transition", 3, !1), c = /* @__PURE__ */ Ge(e, [
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
  var f = { getElement: h }, v = _b();
  Be(v, (g) => ({ class: g, ...c }), [
    () => He({
      "smui-paper": !0,
      "smui-paper--raised": i() === "raised",
      "smui-paper--unelevated": i() === "unelevated",
      "smui-paper--outlined": i() === "outlined",
      ["smui-paper--elevation-z" + u()]: u() !== 0 && i() === "raised",
      "smui-paper--rounded": !a(),
      ["smui-paper--color-" + o()]: o() !== "default",
      "smui-paper-transition": l(),
      [r()]: !0
    })
  ]);
  var p = ye(v);
  return _e(p, () => e.children ?? be), Se(v, (g) => d = g, () => d), Ue(v, (g, I) => K == null ? void 0 : K(g, I), n), O(t, v), De(f);
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
var hs;
(function(t) {
  t.POLITE = "polite", t.ASSERTIVE = "assertive";
})(hs || (hs = {}));
var Eb = "data-mdc-dom-announce";
function Ab(t, e) {
  Cb.getInstance().say(t, e);
}
var Cb = (
  /** @class */
  function() {
    function t() {
      this.liveRegions = /* @__PURE__ */ new Map();
    }
    return t.getInstance = function() {
      return t.instance || (t.instance = new t()), t.instance;
    }, t.prototype.say = function(e, n) {
      var r, i, a = (r = n == null ? void 0 : n.priority) !== null && r !== void 0 ? r : hs.POLITE, o = (i = n == null ? void 0 : n.ownerDocument) !== null && i !== void 0 ? i : document, u = this.getLiveRegion(a, o);
      u.textContent = "", setTimeout(function() {
        u.textContent = e, o.addEventListener("click", l);
      }, 1);
      function l() {
        u.textContent = "", o.removeEventListener("click", l);
      }
    }, t.prototype.getLiveRegion = function(e, n) {
      var r = this.liveRegions.get(n);
      r || (r = /* @__PURE__ */ new Map(), this.liveRegions.set(n, r));
      var i = r.get(e);
      if (i && n.body.contains(i))
        return i;
      var a = this.createLiveRegion(e, n);
      return r.set(e, a), a;
    }, t.prototype.createLiveRegion = function(e, n) {
      var r = n.createElement("div");
      return r.style.position = "absolute", r.style.top = "-9999px", r.style.left = "-9999px", r.style.height = "1px", r.style.overflow = "hidden", r.setAttribute("aria-atomic", "true"), r.setAttribute("aria-live", e), r.setAttribute(Eb, "true"), n.body.appendChild(r), r;
    }, t;
  }()
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
var vr;
(function(t) {
  t[t.UNSPECIFIED = 0] = "UNSPECIFIED", t[t.CLICK = 1] = "CLICK", t[t.BACKSPACE_KEY = 2] = "BACKSPACE_KEY", t[t.DELETE_KEY = 3] = "DELETE_KEY", t[t.SPACEBAR_KEY = 4] = "SPACEBAR_KEY", t[t.ENTER_KEY = 5] = "ENTER_KEY";
})(vr || (vr = {}));
var Dn = {
  ARIA_HIDDEN: "aria-hidden",
  INTERACTION_EVENT: "MDCChipTrailingAction:interaction",
  NAVIGATION_EVENT: "MDCChipTrailingAction:navigation",
  TAB_INDEX: "tabindex"
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
var td = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      return t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Dn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          focus: function() {
          },
          getAttribute: function() {
            return null;
          },
          setAttribute: function() {
          },
          notifyInteraction: function() {
          },
          notifyNavigation: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.handleClick = function(n) {
      n.stopPropagation(), this.adapter.notifyInteraction(vr.CLICK);
    }, e.prototype.handleKeydown = function(n) {
      n.stopPropagation();
      var r = gt(n);
      if (this.shouldNotifyInteractionFromKey(r)) {
        var i = this.getTriggerFromKey(r);
        this.adapter.notifyInteraction(i);
        return;
      }
      if (zp(n)) {
        this.adapter.notifyNavigation(r);
        return;
      }
    }, e.prototype.removeFocus = function() {
      this.adapter.setAttribute(Dn.TAB_INDEX, "-1");
    }, e.prototype.focus = function() {
      this.adapter.setAttribute(Dn.TAB_INDEX, "0"), this.adapter.focus();
    }, e.prototype.isNavigable = function() {
      return this.adapter.getAttribute(Dn.ARIA_HIDDEN) !== "true";
    }, e.prototype.shouldNotifyInteractionFromKey = function(n) {
      var r = n === Oe.ENTER || n === Oe.SPACEBAR, i = n === Oe.BACKSPACE || n === Oe.DELETE;
      return r || i;
    }, e.prototype.getTriggerFromKey = function(n) {
      return n === Oe.SPACEBAR ? vr.SPACEBAR_KEY : n === Oe.ENTER ? vr.ENTER_KEY : n === Oe.DELETE ? vr.DELETE_KEY : n === Oe.BACKSPACE ? vr.BACKSPACE_KEY : vr.UNSPECIFIED;
    }, e;
  }(Pt)
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
var nd = (
  /** @class */
  function(t) {
    it(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return Object.defineProperty(e.prototype, "ripple", {
      get: function() {
        return this.rippleSurface;
      },
      enumerable: !1,
      configurable: !0
    }), e.attachTo = function(n) {
      return new e(n);
    }, e.prototype.initialize = function(n) {
      n === void 0 && (n = function(i, a) {
        return new Ja(i, a);
      });
      var r = Ja.createAdapter(this);
      this.rippleSurface = n(this.root, new Io(r));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this;
      this.handleClick = function(r) {
        n.foundation.handleClick(r);
      }, this.handleKeydown = function(r) {
        n.foundation.handleKeydown(r);
      }, this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown);
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("click", this.handleClick), this.unlisten("keydown", this.handleKeydown), t.prototype.destroy.call(this);
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        focus: function() {
          n.root.focus();
        },
        getAttribute: function(i) {
          return n.root.getAttribute(i);
        },
        notifyInteraction: function(i) {
          return n.emit(
            Dn.INTERACTION_EVENT,
            { trigger: i },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(i) {
          n.emit(
            Dn.NAVIGATION_EVENT,
            { key: i },
            !0
            /* shouldBubble */
          );
        },
        setAttribute: function(i, a) {
          n.root.setAttribute(i, a);
        }
      };
      return new td(r);
    }, e.prototype.isNavigable = function() {
      return this.foundation.isNavigable();
    }, e.prototype.focus = function() {
      this.foundation.focus();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e;
  }(bo)
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
var jn;
(function(t) {
  t.LEFT = "left", t.RIGHT = "right";
})(jn || (jn = {}));
var ir;
(function(t) {
  t.PRIMARY = "primary", t.TRAILING = "trailing", t.NONE = "none";
})(ir || (ir = {}));
var Ce = {
  ADDED_ANNOUNCEMENT_ATTRIBUTE: "data-mdc-chip-added-announcement",
  ARIA_CHECKED: "aria-checked",
  ARROW_DOWN_KEY: "ArrowDown",
  ARROW_LEFT_KEY: "ArrowLeft",
  ARROW_RIGHT_KEY: "ArrowRight",
  ARROW_UP_KEY: "ArrowUp",
  BACKSPACE_KEY: "Backspace",
  CHECKMARK_SELECTOR: ".mdc-chip__checkmark",
  DELETE_KEY: "Delete",
  END_KEY: "End",
  ENTER_KEY: "Enter",
  ENTRY_ANIMATION_NAME: "mdc-chip-entry",
  HOME_KEY: "Home",
  IE_ARROW_DOWN_KEY: "Down",
  IE_ARROW_LEFT_KEY: "Left",
  IE_ARROW_RIGHT_KEY: "Right",
  IE_ARROW_UP_KEY: "Up",
  IE_DELETE_KEY: "Del",
  INTERACTION_EVENT: "MDCChip:interaction",
  LEADING_ICON_SELECTOR: ".mdc-chip__icon--leading",
  NAVIGATION_EVENT: "MDCChip:navigation",
  PRIMARY_ACTION_SELECTOR: ".mdc-chip__primary-action",
  REMOVED_ANNOUNCEMENT_ATTRIBUTE: "data-mdc-chip-removed-announcement",
  REMOVAL_EVENT: "MDCChip:removal",
  SELECTION_EVENT: "MDCChip:selection",
  SPACEBAR_KEY: " ",
  TAB_INDEX: "tabindex",
  TRAILING_ACTION_SELECTOR: ".mdc-chip-trailing-action",
  TRAILING_ICON_INTERACTION_EVENT: "MDCChip:trailingIconInteraction",
  TRAILING_ICON_SELECTOR: ".mdc-chip__icon--trailing"
}, Et = {
  CHECKMARK: "mdc-chip__checkmark",
  CHIP_EXIT: "mdc-chip--exit",
  DELETABLE: "mdc-chip--deletable",
  EDITABLE: "mdc-chip--editable",
  EDITING: "mdc-chip--editing",
  HIDDEN_LEADING_ICON: "mdc-chip__icon--leading-hidden",
  LEADING_ICON: "mdc-chip__icon--leading",
  PRIMARY_ACTION: "mdc-chip__primary-action",
  PRIMARY_ACTION_FOCUSED: "mdc-chip--primary-action-focused",
  SELECTED: "mdc-chip--selected",
  TEXT: "mdc-chip__text",
  TRAILING_ACTION: "mdc-chip__trailing-action",
  TRAILING_ICON: "mdc-chip__icon--trailing"
}, Tn = /* @__PURE__ */ new Set();
Tn.add(Ce.ARROW_LEFT_KEY);
Tn.add(Ce.ARROW_RIGHT_KEY);
Tn.add(Ce.ARROW_DOWN_KEY);
Tn.add(Ce.ARROW_UP_KEY);
Tn.add(Ce.END_KEY);
Tn.add(Ce.HOME_KEY);
Tn.add(Ce.IE_ARROW_LEFT_KEY);
Tn.add(Ce.IE_ARROW_RIGHT_KEY);
Tn.add(Ce.IE_ARROW_DOWN_KEY);
Tn.add(Ce.IE_ARROW_UP_KEY);
var Dr = /* @__PURE__ */ new Set();
Dr.add(Ce.ARROW_UP_KEY);
Dr.add(Ce.ARROW_DOWN_KEY);
Dr.add(Ce.HOME_KEY);
Dr.add(Ce.END_KEY);
Dr.add(Ce.IE_ARROW_UP_KEY);
Dr.add(Ce.IE_ARROW_DOWN_KEY);
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
var zl = {
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
}, Ei;
(function(t) {
  t[t.SHOULD_FOCUS = 0] = "SHOULD_FOCUS", t[t.SHOULD_NOT_FOCUS = 1] = "SHOULD_NOT_FOCUS";
})(Ei || (Ei = {}));
var js = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.shouldRemoveOnTrailingIconClick = !0, r.shouldFocusPrimaryActionOnClick = !0, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ce;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Et;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
          },
          addClassToLeadingIcon: function() {
          },
          eventTargetHasClass: function() {
            return !1;
          },
          focusPrimaryAction: function() {
          },
          focusTrailingAction: function() {
          },
          getAttribute: function() {
            return null;
          },
          getCheckmarkBoundingClientRect: function() {
            return zl;
          },
          getComputedStyleValue: function() {
            return "";
          },
          getRootBoundingClientRect: function() {
            return zl;
          },
          hasClass: function() {
            return !1;
          },
          hasLeadingIcon: function() {
            return !1;
          },
          isRTL: function() {
            return !1;
          },
          isTrailingActionNavigable: function() {
            return !1;
          },
          notifyEditFinish: function() {
          },
          notifyEditStart: function() {
          },
          notifyInteraction: function() {
          },
          notifyNavigation: function() {
          },
          notifyRemoval: function() {
          },
          notifySelection: function() {
          },
          notifyTrailingIconInteraction: function() {
          },
          removeClass: function() {
          },
          removeClassFromLeadingIcon: function() {
          },
          removeTrailingActionFocus: function() {
          },
          setPrimaryActionAttr: function() {
          },
          setStyleProperty: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.isSelected = function() {
      return this.adapter.hasClass(Et.SELECTED);
    }, e.prototype.isEditable = function() {
      return this.adapter.hasClass(Et.EDITABLE);
    }, e.prototype.isEditing = function() {
      return this.adapter.hasClass(Et.EDITING);
    }, e.prototype.setSelected = function(n) {
      this.setSelectedImpl(n), this.notifySelection(n);
    }, e.prototype.setSelectedFromChipSet = function(n, r) {
      this.setSelectedImpl(n), r && this.notifyIgnoredSelection(n);
    }, e.prototype.getShouldRemoveOnTrailingIconClick = function() {
      return this.shouldRemoveOnTrailingIconClick;
    }, e.prototype.setShouldRemoveOnTrailingIconClick = function(n) {
      this.shouldRemoveOnTrailingIconClick = n;
    }, e.prototype.setShouldFocusPrimaryActionOnClick = function(n) {
      this.shouldFocusPrimaryActionOnClick = n;
    }, e.prototype.getDimensions = function() {
      var n = this, r = function() {
        return n.adapter.getRootBoundingClientRect();
      }, i = function() {
        return n.adapter.getCheckmarkBoundingClientRect();
      };
      if (!this.adapter.hasLeadingIcon()) {
        var a = i();
        if (a) {
          var o = r();
          return {
            bottom: o.bottom,
            height: o.height,
            left: o.left,
            right: o.right,
            top: o.top,
            width: o.width + a.height
          };
        }
      }
      return r();
    }, e.prototype.beginExit = function() {
      this.adapter.addClass(Et.CHIP_EXIT);
    }, e.prototype.handleClick = function() {
      this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
    }, e.prototype.handleDoubleClick = function() {
      this.isEditable() && this.startEditing();
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this, i = this.adapter.eventTargetHasClass(n.target, Et.CHIP_EXIT), a = n.propertyName === "width", o = n.propertyName === "opacity";
      if (i && o) {
        var u = this.adapter.getComputedStyleValue("width");
        requestAnimationFrame(function() {
          r.adapter.setStyleProperty("width", u), r.adapter.setStyleProperty("padding", "0"), r.adapter.setStyleProperty("margin", "0"), requestAnimationFrame(function() {
            r.adapter.setStyleProperty("width", "0");
          });
        });
        return;
      }
      if (i && a) {
        this.removeFocus();
        var l = this.adapter.getAttribute(Ce.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
        this.adapter.notifyRemoval(l);
      }
      if (o) {
        var c = this.adapter.eventTargetHasClass(n.target, Et.LEADING_ICON) && this.adapter.hasClass(Et.SELECTED), d = this.adapter.eventTargetHasClass(n.target, Et.CHECKMARK) && !this.adapter.hasClass(Et.SELECTED);
        if (c) {
          this.adapter.addClassToLeadingIcon(Et.HIDDEN_LEADING_ICON);
          return;
        }
        if (d) {
          this.adapter.removeClassFromLeadingIcon(Et.HIDDEN_LEADING_ICON);
          return;
        }
      }
    }, e.prototype.handleFocusIn = function(n) {
      this.eventFromPrimaryAction(n) && this.adapter.addClass(Et.PRIMARY_ACTION_FOCUSED);
    }, e.prototype.handleFocusOut = function(n) {
      this.eventFromPrimaryAction(n) && (this.isEditing() && this.finishEditing(), this.adapter.removeClass(Et.PRIMARY_ACTION_FOCUSED));
    }, e.prototype.handleTrailingActionInteraction = function() {
      this.adapter.notifyTrailingIconInteraction(), this.removeChip();
    }, e.prototype.handleKeydown = function(n) {
      if (this.isEditing()) {
        this.shouldFinishEditing(n) && (n.preventDefault(), this.finishEditing());
        return;
      }
      if (this.isEditable() && this.shouldStartEditing(n) && (n.preventDefault(), this.startEditing()), this.shouldNotifyInteraction(n)) {
        this.adapter.notifyInteraction(), this.setPrimaryActionFocusable(this.getFocusBehavior());
        return;
      }
      if (this.isDeleteAction(n)) {
        n.preventDefault(), this.removeChip();
        return;
      }
      Tn.has(n.key) && (n.preventDefault(), this.focusNextAction(n.key, ir.PRIMARY));
    }, e.prototype.handleTrailingActionNavigation = function(n) {
      this.focusNextAction(n.detail.key, ir.TRAILING);
    }, e.prototype.removeFocus = function() {
      this.adapter.setPrimaryActionAttr(Ce.TAB_INDEX, "-1"), this.adapter.removeTrailingActionFocus();
    }, e.prototype.focusPrimaryAction = function() {
      this.setPrimaryActionFocusable(Ei.SHOULD_FOCUS);
    }, e.prototype.focusTrailingAction = function() {
      var n = this.adapter.isTrailingActionNavigable();
      if (n) {
        this.adapter.setPrimaryActionAttr(Ce.TAB_INDEX, "-1"), this.adapter.focusTrailingAction();
        return;
      }
      this.focusPrimaryAction();
    }, e.prototype.setPrimaryActionFocusable = function(n) {
      this.adapter.setPrimaryActionAttr(Ce.TAB_INDEX, "0"), n === Ei.SHOULD_FOCUS && this.adapter.focusPrimaryAction(), this.adapter.removeTrailingActionFocus();
    }, e.prototype.getFocusBehavior = function() {
      return this.shouldFocusPrimaryActionOnClick ? Ei.SHOULD_FOCUS : Ei.SHOULD_NOT_FOCUS;
    }, e.prototype.focusNextAction = function(n, r) {
      var i = this.adapter.isTrailingActionNavigable(), a = this.getDirection(n);
      if (Dr.has(n) || !i) {
        this.adapter.notifyNavigation(n, r);
        return;
      }
      if (r === ir.PRIMARY && a === jn.RIGHT) {
        this.focusTrailingAction();
        return;
      }
      if (r === ir.TRAILING && a === jn.LEFT) {
        this.focusPrimaryAction();
        return;
      }
      this.adapter.notifyNavigation(n, ir.NONE);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === Ce.ARROW_LEFT_KEY || n === Ce.IE_ARROW_LEFT_KEY, a = n === Ce.ARROW_RIGHT_KEY || n === Ce.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? jn.LEFT : jn.RIGHT;
    }, e.prototype.removeChip = function() {
      this.shouldRemoveOnTrailingIconClick && this.beginExit();
    }, e.prototype.shouldStartEditing = function(n) {
      return this.eventFromPrimaryAction(n) && n.key === Ce.ENTER_KEY;
    }, e.prototype.shouldFinishEditing = function(n) {
      return n.key === Ce.ENTER_KEY;
    }, e.prototype.shouldNotifyInteraction = function(n) {
      return n.key === Ce.ENTER_KEY || n.key === Ce.SPACEBAR_KEY;
    }, e.prototype.isDeleteAction = function(n) {
      var r = this.adapter.hasClass(Et.DELETABLE);
      return r && (n.key === Ce.BACKSPACE_KEY || n.key === Ce.DELETE_KEY || n.key === Ce.IE_DELETE_KEY);
    }, e.prototype.setSelectedImpl = function(n) {
      n ? (this.adapter.addClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(Ce.ARIA_CHECKED, "true")) : (this.adapter.removeClass(Et.SELECTED), this.adapter.setPrimaryActionAttr(Ce.ARIA_CHECKED, "false"));
    }, e.prototype.notifySelection = function(n) {
      this.adapter.notifySelection(n, !1);
    }, e.prototype.notifyIgnoredSelection = function(n) {
      this.adapter.notifySelection(n, !0);
    }, e.prototype.eventFromPrimaryAction = function(n) {
      return this.adapter.eventTargetHasClass(n.target, Et.PRIMARY_ACTION);
    }, e.prototype.startEditing = function() {
      this.adapter.addClass(Et.EDITING), this.adapter.notifyEditStart();
    }, e.prototype.finishEditing = function() {
      this.adapter.removeClass(Et.EDITING), this.adapter.notifyEditFinish();
    }, e;
  }(Pt)
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
var rd = (
  /** @class */
  function(t) {
    it(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return Object.defineProperty(e.prototype, "selected", {
      /**
       * @return Whether the chip is selected.
       */
      get: function() {
        return this.foundation.isSelected();
      },
      /**
       * Sets selected state on the chip.
       */
      set: function(n) {
        this.foundation.setSelected(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldRemoveOnTrailingIconClick", {
      /**
       * @return Whether a trailing icon click should trigger exit/removal of the chip.
       */
      get: function() {
        return this.foundation.getShouldRemoveOnTrailingIconClick();
      },
      /**
       * Sets whether a trailing icon click should trigger exit/removal of the chip.
       */
      set: function(n) {
        this.foundation.setShouldRemoveOnTrailingIconClick(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "setShouldFocusPrimaryActionOnClick", {
      /**
       * Sets whether a clicking on the chip should focus the primary action.
       */
      set: function(n) {
        this.foundation.setShouldFocusPrimaryActionOnClick(n);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "ripple", {
      get: function() {
        return this.rippleSurface;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "id", {
      get: function() {
        return this.root.id;
      },
      enumerable: !1,
      configurable: !0
    }), e.attachTo = function(n) {
      return new e(n);
    }, e.prototype.initialize = function(n, r) {
      var i = this;
      n === void 0 && (n = function(u, l) {
        return new Ja(u, l);
      }), r === void 0 && (r = function(u) {
        return new nd(u);
      }), this.leadingIcon = this.root.querySelector(Ce.LEADING_ICON_SELECTOR), this.checkmark = this.root.querySelector(Ce.CHECKMARK_SELECTOR), this.primaryAction = this.root.querySelector(Ce.PRIMARY_ACTION_SELECTOR);
      var a = this.root.querySelector(Ce.TRAILING_ACTION_SELECTOR);
      a && (this.trailingAction = r(a));
      var o = fe(fe({}, Ja.createAdapter(this)), { computeBoundingRect: function() {
        return i.foundation.getDimensions();
      } });
      this.rippleSurface = n(this.root, new Io(o));
    }, e.prototype.initialSyncWithDOM = function() {
      var n = this;
      this.handleTrailingActionInteraction = function() {
        n.foundation.handleTrailingActionInteraction();
      }, this.handleTrailingActionNavigation = function(r) {
        n.foundation.handleTrailingActionNavigation(r);
      }, this.handleClick = function() {
        n.foundation.handleClick();
      }, this.handleKeydown = function(r) {
        n.foundation.handleKeydown(r);
      }, this.handleTransitionEnd = function(r) {
        n.foundation.handleTransitionEnd(r);
      }, this.handleFocusIn = function(r) {
        n.foundation.handleFocusIn(r);
      }, this.handleFocusOut = function(r) {
        n.foundation.handleFocusOut(r);
      }, this.listen("transitionend", this.handleTransitionEnd), this.listen("click", this.handleClick), this.listen("keydown", this.handleKeydown), this.listen("focusin", this.handleFocusIn), this.listen("focusout", this.handleFocusOut), this.trailingAction && (this.listen(Dn.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.listen(Dn.NAVIGATION_EVENT, this.handleTrailingActionNavigation));
    }, e.prototype.destroy = function() {
      this.rippleSurface.destroy(), this.unlisten("transitionend", this.handleTransitionEnd), this.unlisten("keydown", this.handleKeydown), this.unlisten("click", this.handleClick), this.unlisten("focusin", this.handleFocusIn), this.unlisten("focusout", this.handleFocusOut), this.trailingAction && (this.unlisten(Dn.INTERACTION_EVENT, this.handleTrailingActionInteraction), this.unlisten(Dn.NAVIGATION_EVENT, this.handleTrailingActionNavigation)), t.prototype.destroy.call(this);
    }, e.prototype.beginExit = function() {
      this.foundation.beginExit();
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        addClass: function(i) {
          return n.root.classList.add(i);
        },
        addClassToLeadingIcon: function(i) {
          n.leadingIcon && n.leadingIcon.classList.add(i);
        },
        eventTargetHasClass: function(i, a) {
          return i ? i.classList.contains(a) : !1;
        },
        focusPrimaryAction: function() {
          n.primaryAction && n.primaryAction.focus();
        },
        focusTrailingAction: function() {
          n.trailingAction && n.trailingAction.focus();
        },
        getAttribute: function(i) {
          return n.root.getAttribute(i);
        },
        getCheckmarkBoundingClientRect: function() {
          return n.checkmark ? n.checkmark.getBoundingClientRect() : null;
        },
        getComputedStyleValue: function(i) {
          return window.getComputedStyle(n.root).getPropertyValue(i);
        },
        getRootBoundingClientRect: function() {
          return n.root.getBoundingClientRect();
        },
        hasClass: function(i) {
          return n.root.classList.contains(i);
        },
        hasLeadingIcon: function() {
          return !!n.leadingIcon;
        },
        isRTL: function() {
          return window.getComputedStyle(n.root).getPropertyValue("direction") === "rtl";
        },
        isTrailingActionNavigable: function() {
          return n.trailingAction ? n.trailingAction.isNavigable() : !1;
        },
        notifyInteraction: function() {
          return n.emit(
            Ce.INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyNavigation: function(i, a) {
          return n.emit(
            Ce.NAVIGATION_EVENT,
            { chipId: n.id, key: i, source: a },
            !0
            /* shouldBubble */
          );
        },
        notifyRemoval: function(i) {
          n.emit(
            Ce.REMOVAL_EVENT,
            { chipId: n.id, removedAnnouncement: i },
            !0
            /* shouldBubble */
          );
        },
        notifySelection: function(i, a) {
          return n.emit(
            Ce.SELECTION_EVENT,
            { chipId: n.id, selected: i, shouldIgnore: a },
            !0
            /* shouldBubble */
          );
        },
        notifyTrailingIconInteraction: function() {
          return n.emit(
            Ce.TRAILING_ICON_INTERACTION_EVENT,
            { chipId: n.id },
            !0
            /* shouldBubble */
          );
        },
        notifyEditStart: function() {
        },
        notifyEditFinish: function() {
        },
        removeClass: function(i) {
          return n.root.classList.remove(i);
        },
        removeClassFromLeadingIcon: function(i) {
          n.leadingIcon && n.leadingIcon.classList.remove(i);
        },
        removeTrailingActionFocus: function() {
          n.trailingAction && n.trailingAction.removeFocus();
        },
        setPrimaryActionAttr: function(i, a) {
          n.primaryAction && n.primaryAction.setAttribute(i, a);
        },
        setStyleProperty: function(i, a) {
          return n.root.style.setProperty(i, a);
        }
      };
      return new js(r);
    }, e.prototype.setSelectedFromChipSet = function(n, r) {
      this.foundation.setSelectedFromChipSet(n, r);
    }, e.prototype.focusPrimaryAction = function() {
      this.foundation.focusPrimaryAction();
    }, e.prototype.focusTrailingAction = function() {
      this.foundation.focusTrailingAction();
    }, e.prototype.removeFocus = function() {
      this.foundation.removeFocus();
    }, e.prototype.remove = function() {
      var n = this.root.parentNode;
      n !== null && n.removeChild(this.root);
    }, e;
  }(bo)
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
var id = {
  CHIP_SELECTOR: ".mdc-chip"
}, la = {
  CHOICE: "mdc-chip-set--choice",
  FILTER: "mdc-chip-set--filter"
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
var qs = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
      return r.selectedChipIds = [], r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return id;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return la;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {
          announceMessage: function() {
          },
          focusChipPrimaryActionAtIndex: function() {
          },
          focusChipTrailingActionAtIndex: function() {
          },
          getChipListCount: function() {
            return -1;
          },
          getIndexOfChipById: function() {
            return -1;
          },
          hasClass: function() {
            return !1;
          },
          isRTL: function() {
            return !1;
          },
          removeChipAtIndex: function() {
          },
          removeFocusFromChipAtIndex: function() {
          },
          selectChipAtIndex: function() {
          }
        };
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.getSelectedChipIds = function() {
      return this.selectedChipIds.slice();
    }, e.prototype.select = function(n) {
      this.selectImpl(n, !1);
    }, e.prototype.handleChipInteraction = function(n) {
      var r = n.chipId, i = this.adapter.getIndexOfChipById(r);
      this.removeFocusFromChipsExcept(i), (this.adapter.hasClass(la.CHOICE) || this.adapter.hasClass(la.FILTER)) && this.toggleSelect(r);
    }, e.prototype.handleChipSelection = function(n) {
      var r = n.chipId, i = n.selected, a = n.shouldIgnore;
      if (!a) {
        var o = this.selectedChipIds.indexOf(r) >= 0;
        i && !o ? this.select(r) : !i && o && this.deselectImpl(r);
      }
    }, e.prototype.handleChipRemoval = function(n) {
      var r = n.chipId, i = n.removedAnnouncement;
      i && this.adapter.announceMessage(i);
      var a = this.adapter.getIndexOfChipById(r);
      this.deselectAndNotifyClients(r), this.adapter.removeChipAtIndex(a);
      var o = this.adapter.getChipListCount() - 1;
      if (!(o < 0)) {
        var u = Math.min(a, o);
        this.removeFocusFromChipsExcept(u), this.adapter.focusChipTrailingActionAtIndex(u);
      }
    }, e.prototype.handleChipNavigation = function(n) {
      var r = n.chipId, i = n.key, a = n.source, o = this.adapter.getChipListCount() - 1, u = this.adapter.getIndexOfChipById(r);
      if (!(u === -1 || !Tn.has(i))) {
        var l = this.adapter.isRTL(), c = i === Ce.ARROW_LEFT_KEY || i === Ce.IE_ARROW_LEFT_KEY, d = i === Ce.ARROW_RIGHT_KEY || i === Ce.IE_ARROW_RIGHT_KEY, h = i === Ce.ARROW_DOWN_KEY || i === Ce.IE_ARROW_DOWN_KEY, f = !l && d || l && c || h, v = i === Ce.HOME_KEY, p = i === Ce.END_KEY;
        f ? u++ : v ? u = 0 : p ? u = o : u--, !(u < 0 || u > o) && (this.removeFocusFromChipsExcept(u), this.focusChipAction(u, i, a));
      }
    }, e.prototype.focusChipAction = function(n, r, i) {
      var a = Dr.has(r);
      if (a && i === ir.PRIMARY)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
      if (a && i === ir.TRAILING)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      var o = this.getDirection(r);
      if (o === jn.LEFT)
        return this.adapter.focusChipTrailingActionAtIndex(n);
      if (o === jn.RIGHT)
        return this.adapter.focusChipPrimaryActionAtIndex(n);
    }, e.prototype.getDirection = function(n) {
      var r = this.adapter.isRTL(), i = n === Ce.ARROW_LEFT_KEY || n === Ce.IE_ARROW_LEFT_KEY, a = n === Ce.ARROW_RIGHT_KEY || n === Ce.IE_ARROW_RIGHT_KEY;
      return !r && i || r && a ? jn.LEFT : jn.RIGHT;
    }, e.prototype.deselectImpl = function(n, r) {
      r === void 0 && (r = !1);
      var i = this.selectedChipIds.indexOf(n);
      if (i >= 0) {
        this.selectedChipIds.splice(i, 1);
        var a = this.adapter.getIndexOfChipById(n);
        this.adapter.selectChipAtIndex(
          a,
          /** isSelected */
          !1,
          r
        );
      }
    }, e.prototype.deselectAndNotifyClients = function(n) {
      this.deselectImpl(n, !0);
    }, e.prototype.toggleSelect = function(n) {
      this.selectedChipIds.indexOf(n) >= 0 ? this.deselectAndNotifyClients(n) : this.selectAndNotifyClients(n);
    }, e.prototype.removeFocusFromChipsExcept = function(n) {
      for (var r = this.adapter.getChipListCount(), i = 0; i < r; i++)
        i !== n && this.adapter.removeFocusFromChipAtIndex(i);
    }, e.prototype.selectAndNotifyClients = function(n) {
      this.selectImpl(n, !0);
    }, e.prototype.selectImpl = function(n, r) {
      if (!(this.selectedChipIds.indexOf(n) >= 0)) {
        if (this.adapter.hasClass(la.CHOICE) && this.selectedChipIds.length > 0) {
          var i = this.selectedChipIds[0], a = this.adapter.getIndexOfChipById(i);
          this.selectedChipIds = [], this.adapter.selectChipAtIndex(
            a,
            /** isSelected */
            !1,
            r
          );
        }
        this.selectedChipIds.push(n);
        var o = this.adapter.getIndexOfChipById(n);
        this.adapter.selectChipAtIndex(
          o,
          /** isSelected */
          !0,
          r
        );
      }
    }, e;
  }(Pt)
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
var _o = js.strings, Xl = _o.INTERACTION_EVENT, Yl = _o.SELECTION_EVENT, Zl = _o.REMOVAL_EVENT, Ql = _o.NAVIGATION_EVENT, Sb = qs.strings.CHIP_SELECTOR, Jl = 0, xb = (
  /** @class */
  function(t) {
    it(e, t);
    function e() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return e.attachTo = function(n) {
      return new e(n);
    }, Object.defineProperty(e.prototype, "chips", {
      get: function() {
        return this.chipsList.slice();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "selectedChipIds", {
      /**
       * @return An array of the IDs of all selected chips.
       */
      get: function() {
        return this.foundation.getSelectedChipIds();
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.initialize = function(n) {
      n === void 0 && (n = function(r) {
        return new rd(r);
      }), this.chipFactory = n, this.chipsList = this.instantiateChips(this.chipFactory);
    }, e.prototype.initialSyncWithDOM = function() {
      var n, r, i = this;
      try {
        for (var a = Lt(this.chipsList), o = a.next(); !o.done; o = a.next()) {
          var u = o.value;
          u.id && u.selected && this.foundation.select(u.id);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          o && !o.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      this.handleChipInteraction = function(l) {
        return i.foundation.handleChipInteraction(l.detail);
      }, this.handleChipSelection = function(l) {
        return i.foundation.handleChipSelection(l.detail);
      }, this.handleChipRemoval = function(l) {
        return i.foundation.handleChipRemoval(l.detail);
      }, this.handleChipNavigation = function(l) {
        return i.foundation.handleChipNavigation(l.detail);
      }, this.listen(Xl, this.handleChipInteraction), this.listen(Yl, this.handleChipSelection), this.listen(Zl, this.handleChipRemoval), this.listen(Ql, this.handleChipNavigation);
    }, e.prototype.destroy = function() {
      var n, r;
      try {
        for (var i = Lt(this.chipsList), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o.destroy();
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
      this.unlisten(Xl, this.handleChipInteraction), this.unlisten(Yl, this.handleChipSelection), this.unlisten(Zl, this.handleChipRemoval), this.unlisten(Ql, this.handleChipNavigation), t.prototype.destroy.call(this);
    }, e.prototype.addChip = function(n) {
      n.id = n.id || "mdc-chip-" + ++Jl, this.chipsList.push(this.chipFactory(n));
    }, e.prototype.getDefaultFoundation = function() {
      var n = this, r = {
        announceMessage: function(i) {
          Ab(i);
        },
        focusChipPrimaryActionAtIndex: function(i) {
          n.chipsList[i].focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: function(i) {
          n.chipsList[i].focusTrailingAction();
        },
        getChipListCount: function() {
          return n.chips.length;
        },
        getIndexOfChipById: function(i) {
          return n.findChipIndex(i);
        },
        hasClass: function(i) {
          return n.root.classList.contains(i);
        },
        isRTL: function() {
          return window.getComputedStyle(n.root).getPropertyValue("direction") === "rtl";
        },
        removeChipAtIndex: function(i) {
          i >= 0 && i < n.chips.length && (n.chipsList[i].destroy(), n.chipsList[i].remove(), n.chipsList.splice(i, 1));
        },
        removeFocusFromChipAtIndex: function(i) {
          n.chipsList[i].removeFocus();
        },
        selectChipAtIndex: function(i, a, o) {
          i >= 0 && i < n.chips.length && n.chipsList[i].setSelectedFromChipSet(a, o);
        }
      };
      return new qs(r);
    }, e.prototype.instantiateChips = function(n) {
      var r = [].slice.call(this.root.querySelectorAll(Sb));
      return r.map(function(i) {
        return i.id = i.id || "mdc-chip-" + ++Jl, n(i);
      });
    }, e.prototype.findChipIndex = function(n) {
      for (var r = 0; r < this.chips.length; r++)
        if (this.chipsList[r].id === n)
          return r;
      return -1;
    }, e;
  }(bo)
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
const Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MDCChip: rd,
  MDCChipFoundation: js,
  MDCChipSet: xb,
  MDCChipSetFoundation: qs,
  MDCChipTrailingAction: nd,
  MDCChipTrailingActionFoundation: td,
  chipCssClasses: Et,
  chipSetCssClasses: la,
  chipSetStrings: id,
  chipStrings: Ce,
  trailingActionStrings: Dn
}, Symbol.toStringTag, { value: "Module" }));
var Tb = /* @__PURE__ */ pe('<div class="mdc-chip__ripple"></div>'), wb = /* @__PURE__ */ pe('<div class="mdc-chip__touch"></div>'), Lb = /* @__PURE__ */ pe("<!> <!> <!>", 1);
function Ob(t, e) {
  Me(e, !0);
  const n = () => Dt(x, "$initialSelectedStore", o), r = () => Dt(M, "$choice", o), i = () => Dt(Q, "$index", o), a = () => Dt(B, "$nonInteractive", o), [o, u] = xn(), { MDCChipFoundation: l } = Ws;
  let c = m(e, "use", 19, () => []), d = m(e, "class", 3, ""), h = m(e, "style", 3, ""), f = m(e, "ripple", 3, !0), v = m(e, "touch", 3, !1), p = m(e, "shouldRemoveOnTrailingIconClick", 3, !0), g = m(e, "shouldFocusPrimaryActionOnClick", 3, !0), I = m(e, "component", 3, Mr), E = m(e, "tag", 3, "div"), A = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "chip",
    "ripple",
    "touch",
    "shouldRemoveOnTrailingIconClick",
    "shouldFocusPrimaryActionOnClick",
    "component",
    "tag",
    "children"
  ]), C, b = /* @__PURE__ */ we(void 0), _ = Ee({}), S = Ee({}), T = Ee({});
  const x = oe("SMUI:chips:chip:initialSelected");
  let L = /* @__PURE__ */ we(Ee(n())), U, Y;
  const B = oe("SMUI:chips:nonInteractive"), M = oe("SMUI:chips:choice"), Q = oe("SMUI:chips:chip:index"), F = Ct(p());
  Te(() => {
    vn(F, p());
  }), ee("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", F);
  const k = Ct(s(L));
  Te(() => {
    vn(k, s(L));
  }), ee("SMUI:chips:chip:isSelected", k);
  const H = Ct(S);
  Te(() => {
    vn(H, S);
  }), ee("SMUI:chips:chip:leadingIconClasses", H), ee("SMUI:chips:chip:focusable", r() && s(L) || i() === 0), Te(() => {
    s(b) && s(b).getShouldRemoveOnTrailingIconClick() !== p() && s(b).setShouldRemoveOnTrailingIconClick(p());
  }), Te(() => {
    s(b) && s(b).setShouldFocusPrimaryActionOnClick(g());
  }), ee("SMUI:chips:primary-action:mount", (se) => {
    U = se;
  }), ee("SMUI:chips:primary-action:unmount", () => {
    U = void 0;
  }), ee("SMUI:chips:trailing-action:mount", (se) => {
    Y = se;
  }), ee("SMUI:chips:trailing-action:unmount", () => {
    Y = void 0;
  });
  const W = oe("SMUI:chips:chip:mount"), ne = oe("SMUI:chips:chip:unmount");
  at(() => {
    ae(
      b,
      new l({
        addClass: y,
        addClassToLeadingIcon: te,
        eventTargetHasClass: (xe, Qe) => xe && "classList" in xe ? xe.classList.contains(Qe) : !1,
        focusPrimaryAction: () => {
          U && U.focus();
        },
        focusTrailingAction: () => {
          Y && Y.focus();
        },
        getAttribute: (xe) => ie().getAttribute(xe),
        getCheckmarkBoundingClientRect: () => {
          const xe = ie().querySelector(".mdc-chip__checkmark");
          return xe ? xe.getBoundingClientRect() : null;
        },
        getComputedStyleValue: de,
        getRootBoundingClientRect: () => ie().getBoundingClientRect(),
        hasClass: N,
        hasLeadingIcon: () => !!ie().querySelector(".mdc-chip__icon--leading"),
        isRTL: () => getComputedStyle(ie()).getPropertyValue("direction") === "rtl",
        isTrailingActionNavigable: () => Y ? Y.isNavigable() : !1,
        notifyInteraction: () => ze(ie(), "SMUIChipInteraction", { chipId: e.chip }),
        notifyNavigation: (xe, Qe) => ze(ie(), "SMUIChipNavigation", { chipId: e.chip, key: xe, source: Qe }),
        notifyRemoval: (xe) => ze(ie(), "SMUIChipRemoval", { chipId: e.chip, removedAnnouncement: xe }),
        notifySelection: (xe, Qe) => ze(ie(), "SMUIChipSelection", { chipId: e.chip, selected: xe, shouldIgnore: Qe }),
        notifyTrailingIconInteraction: () => ze(ie(), "SMUIChipTrailingIconInteraction", { chipId: e.chip }),
        notifyEditStart: () => {
        },
        notifyEditFinish: () => {
        },
        removeClass: w,
        removeClassFromLeadingIcon: D,
        removeTrailingActionFocus: () => {
          Y && Y.removeFocus();
        },
        setPrimaryActionAttr: (xe, Qe) => {
          U && U.addAttr(xe, Qe);
        },
        setStyleProperty: j
      }),
      !0
    );
    const se = {
      chipId: e.chip,
      get selected() {
        return s(L);
      },
      focusPrimaryAction: re,
      focusTrailingAction: X,
      removeFocus: he,
      setSelectedFromChipSet: V
    };
    return W && W(se), s(b).init(), () => {
      var xe;
      ne && ne(se), (xe = s(b)) == null || xe.destroy();
    };
  });
  function N(se) {
    return se in _ ? _[se] : ie().classList.contains(se);
  }
  function y(se) {
    _[se] || (_[se] = !0);
  }
  function w(se) {
    (!(se in _) || _[se]) && (_[se] = !1);
  }
  function te(se) {
    S[se] || (S[se] = !0);
  }
  function D(se) {
    (!(se in S) || S[se]) && (S[se] = !1);
  }
  function j(se, xe) {
    T[se] != xe && (xe === "" || xe == null ? delete T[se] : T[se] = xe);
  }
  function de(se) {
    return se in T ? T[se] : getComputedStyle(ie()).getPropertyValue(se);
  }
  function V(se, xe) {
    var Qe;
    ae(L, se, !0), (Qe = s(b)) == null || Qe.setSelectedFromChipSet(s(L), xe);
  }
  function re() {
    var se;
    (se = s(b)) == null || se.focusPrimaryAction();
  }
  function X() {
    var se;
    (se = s(b)) == null || se.focusTrailingAction();
  }
  function he() {
    var se;
    (se = s(b)) == null || se.removeFocus();
  }
  function ie() {
    return C.getElement();
  }
  var je = { getElement: ie }, qe = le(), Pe = Z(qe);
  {
    let se = /* @__PURE__ */ ue(() => [
      [
        jt,
        {
          ripple: f() && !a(),
          unbounded: !1,
          addClass: y,
          removeClass: w,
          addStyle: j
        }
      ],
      ...c()
    ]), xe = /* @__PURE__ */ ue(() => He({
      "mdc-chip": !0,
      "mdc-chip--selected": s(L),
      "mdc-chip--touch": v(),
      ..._,
      [d()]: !0
    })), Qe = /* @__PURE__ */ ue(() => Object.entries(T).map(([P, G]) => `${P}: ${G};`).concat([h()]).join(" "));
    Lr(Pe, I, (P, G) => {
      Se(
        G(P, rt(
          {
            get tag() {
              return E();
            },
            get use() {
              return s(se);
            },
            get class() {
              return s(xe);
            },
            get style() {
              return s(Qe);
            },
            role: "row"
          },
          () => A,
          {
            ontransitionend: (J) => {
              var Ae;
              s(b) && s(b).handleTransitionEnd(J), (Ae = e.ontransitionend) == null || Ae.call(e, J);
            },
            onclick: (J) => {
              var Ae;
              s(b) && s(b).handleClick(), (Ae = e.onclick) == null || Ae.call(e, J);
            },
            onkeydown: (J) => {
              var Ae;
              s(b) && s(b).handleKeydown(J), (Ae = e.onkeydown) == null || Ae.call(e, J);
            },
            onfocusin: (J) => {
              var Ae;
              s(b) && s(b).handleFocusIn(J), (Ae = e.onfocusin) == null || Ae.call(e, J);
            },
            onfocusout: (J) => {
              var Ae;
              s(b) && s(b).handleFocusOut(J), (Ae = e.onfocusout) == null || Ae.call(e, J);
            },
            onSMUIChipTrailingActionInteraction: (J) => {
              var Ae;
              s(b) && s(b).handleTrailingActionInteraction(), (Ae = e.onSMUIChipTrailingActionInteraction) == null || Ae.call(e, J);
            },
            onSMUIChipTrailingActionNavigation: (J) => {
              var Ae;
              s(b) && s(b).handleTrailingActionNavigation(J), (Ae = e.onSMUIChipTrailingActionNavigation) == null || Ae.call(e, J);
            },
            children: (J, Ae) => {
              var Nt = Lb(), bt = Z(Nt);
              {
                var pn = (z) => {
                  var Re = Tb();
                  O(z, Re);
                };
                ce(bt, (z) => {
                  f() && !a() && z(pn);
                });
              }
              var me = Ie(bt, 2);
              _e(me, () => e.children ?? be);
              var ge = Ie(me, 2);
              {
                var q = (z) => {
                  var Re = wb();
                  O(z, Re);
                };
                ce(ge, (z) => {
                  v() && z(q);
                });
              }
              O(J, Nt);
            },
            $$slots: { default: !0 }
          }
        )),
        (J) => C = J,
        () => C
      );
    });
  }
  O(t, qe);
  var Le = De(je);
  return u(), Le;
}
var Rb = /* @__PURE__ */ pe("<div></div>");
function Mb(t, e) {
  Me(e, !0);
  const [n, r] = xn(), { MDCChipSetFoundation: i } = Ws;
  let a = m(e, "use", 19, () => []), o = m(e, "class", 3, ""), u = m(e, "chips", 27, () => Ee([])), l = m(e, "key", 3, (D) => `${D}`), c = m(e, "selected", 15), d = m(e, "nonInteractive", 3, !1), h = m(e, "choice", 3, !1), f = m(e, "filter", 3, !1), v = m(e, "input", 3, !1), p = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "chips",
    "key",
    "selected",
    "nonInteractive",
    "choice",
    "filter",
    "input",
    "chip"
  ]);
  if (f() && h())
    throw new Error("Chip sets can be either filter or choice, but not both.");
  if (h() && typeof c() == "object" && "findIndex" in c())
    throw new Error("Choice chips must not be given multiple selected chips.");
  if (f() && c() !== void 0 && (typeof c() != "object" || !("findIndex" in c())))
    throw new Error("Filter chips must be given an array of selected chips.");
  let g, I = /* @__PURE__ */ we(void 0), E = {}, A = /* @__PURE__ */ new WeakMap(), C = u().map((D) => h() && c() != null && l()(c()) === l()(D) || f() && c() != null && c().findIndex((j) => l()(j) === l()(D)) !== -1);
  ee("SMUI:chips:key", l());
  const b = Ct(d());
  Te(() => {
    vn(b, d());
  }), ee("SMUI:chips:nonInteractive", b);
  const _ = Ct(h());
  Te(() => {
    vn(_, h());
  }), ee("SMUI:chips:choice", _);
  const S = Ct(f());
  Te(() => {
    vn(S, f());
  }), ee("SMUI:chips:filter", S);
  let T = f() ? new Set(c() ?? []) : c();
  Te(() => {
    if (s(I) && h() && T !== c()) {
      const D = T;
      T = c(), c() != null ? s(I).select(l()(c())) : s(I).handleChipSelection({
        chipId: l()(D),
        selected: !1,
        shouldIgnore: !1
      });
    }
  }), Te(() => {
    if (s(I) && f()) {
      const D = new Set(c() ?? []), j = x(T, D), de = x(D, T);
      if (j.size || de.size) {
        T = D;
        for (let V of j)
          u().findIndex((re) => l()(re) === l()(V)) !== -1 && s(I).handleChipSelection({ chipId: l()(V), selected: !1, shouldIgnore: !1 });
        for (let V of de)
          s(I).handleChipSelection({ chipId: l()(V), selected: !0, shouldIgnore: !1 });
      }
    }
  });
  function x(D, j) {
    let de = new Set(D);
    for (let V of j)
      de.delete(V);
    return de;
  }
  ee("SMUI:chips:chip:mount", (D) => {
    Q(D.chipId, D);
  }), ee("SMUI:chips:chip:unmount", (D) => {
    F(D.chipId);
  }), at(() => {
    if (ae(
      I,
      new i({
        announceMessage: kp,
        focusChipPrimaryActionAtIndex: (D) => {
          var j;
          (j = M(u()[D])) == null || j.focusPrimaryAction();
        },
        focusChipTrailingActionAtIndex: (D) => {
          var j;
          (j = M(u()[D])) == null || j.focusTrailingAction();
        },
        getChipListCount: () => u().length,
        getIndexOfChipById: (D) => u().findIndex((j) => l()(j) === D),
        hasClass: (D) => k().classList.contains(D),
        isRTL: () => getComputedStyle(k()).getPropertyValue("direction") === "rtl",
        removeChipAtIndex: (D) => {
          if (D >= 0 && D < u().length) {
            const j = l()(u()[D]);
            if (h() && c() != null && l()(c()) === j)
              c(void 0);
            else if (f() && c() != null) {
              const de = c().findIndex((V) => l()(V) === j);
              de !== -1 && c().splice(de, 1);
            }
            u().splice(D, 1);
          }
        },
        removeFocusFromChipAtIndex: (D) => {
          var j;
          (j = M(u()[D])) == null || j.removeFocus();
        },
        selectChipAtIndex: (D, j, de) => {
          var V;
          if (D >= 0 && D < u().length) {
            if (f()) {
              c() == null && c([]);
              const re = l()(u()[D]), X = c().findIndex((he) => l()(he) === re);
              j && X === -1 ? c().push(u()[D]) : !j && X !== -1 && c().splice(X, 1);
            } else h() && (j || l()(c()) === l()(u()[D])) && c(j ? u()[D] : void 0);
            (V = M(u()[D])) == null || V.setSelectedFromChipSet(j, de);
          }
        }
      }),
      !0
    ), s(I).init(), h() && c() != null)
      s(I).select(l()(c()));
    else if (f() && c() != null && c().length)
      for (const D of c())
        s(I).select(l()(D));
    return () => {
      var D;
      (D = s(I)) == null || D.destroy();
    };
  });
  function L(D) {
    s(I) && s(I).handleChipInteraction({ chipId: l()(D.detail.chipId) });
  }
  function U(D) {
    s(I) && s(I).handleChipSelection({
      chipId: l()(D.detail.chipId),
      selected: D.detail.selected,
      shouldIgnore: D.detail.shouldIgnore
    });
  }
  function Y(D) {
    s(I) && s(I).handleChipRemoval({
      chipId: l()(D.detail.chipId),
      removedAnnouncement: D.detail.removedAnnouncement
    });
  }
  function B(D) {
    s(I) && s(I).handleChipNavigation({
      chipId: l()(D.detail.chipId),
      key: D.detail.key,
      source: D.detail.source
    });
  }
  function M(D) {
    return D instanceof Object ? A.get(D) : E[D];
  }
  function Q(D, j) {
    D instanceof Object ? A.set(D, j) : E[D] = j;
  }
  function F(D) {
    D instanceof Object ? A.delete(D) : delete E[D];
  }
  function k() {
    return g;
  }
  var H = { getElement: k }, W = Rb(), ne = (D) => {
    var j;
    L(D), (j = e.onSMUIChipInteraction) == null || j.call(e, D);
  }, N = (D) => {
    var j;
    U(D), (j = e.onSMUIChipSelection) == null || j.call(e, D);
  }, y = (D) => {
    var j;
    Y(D), (j = e.onSMUIChipRemoval) == null || j.call(e, D);
  }, w = (D) => {
    var j;
    B(D), (j = e.onSMUIChipNavigation) == null || j.call(e, D);
  };
  Be(
    W,
    (D) => ({
      class: D,
      role: "grid",
      ...p,
      onSMUIChipInteraction: ne,
      onSMUIChipSelection: N,
      onSMUIChipRemoval: y,
      onSMUIChipNavigation: w
    }),
    [
      () => He({
        "mdc-chip-set": !0,
        "smui-chip-set--non-interactive": d(),
        "mdc-chip-set--choice": h(),
        "mdc-chip-set--filter": f(),
        "mdc-chip-set--input": v(),
        [o()]: !0
      })
    ]
  ), bi(W, 23, u, (D) => l()(D), (D, j, de) => {
    Ii(D, {
      key: "SMUI:chips:chip:index",
      get value() {
        return s(de);
      },
      children: (V, re) => {
        Ii(V, {
          key: "SMUI:chips:chip:initialSelected",
          get value() {
            return C[s(de)];
          },
          children: (X, he) => {
            var ie = le(), je = Z(ie);
            _e(je, () => e.chip, () => s(j)), O(X, ie);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { default: !0 }
    });
  }), Se(W, (D) => g = D, () => g), Ue(W, (D, j) => K == null ? void 0 : K(D, j), a), O(t, W);
  var te = De(H);
  return r(), te;
}
var Db = /* @__PURE__ */ ln('<svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30"><path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path></svg>'), Pb = /* @__PURE__ */ pe("<span><!></span>");
function Nb(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a;
  function o() {
    return a;
  }
  var u = { getElement: o }, l = Pb();
  Be(l, (f) => ({ class: f, ...i }), [
    () => He({ "mdc-chip__checkmark": !0, [r()]: !0 })
  ]);
  var c = ye(l);
  {
    var d = (f) => {
      var v = le(), p = Z(v);
      _e(p, () => e.children ?? be), O(f, v);
    }, h = (f) => {
      var v = Db();
      O(f, v);
    };
    ce(c, (f) => {
      e.children ? f(d) : f(h, !1);
    });
  }
  return Se(l, (f) => a = f, () => a), Ue(l, (f, v) => K == null ? void 0 : K(f, v), n), O(t, l), De(u);
}
var Hb = /* @__PURE__ */ pe("<span><!></span>"), Ub = /* @__PURE__ */ pe("<span><span><!></span></span>"), Fb = /* @__PURE__ */ pe("<!> <span><!></span>", 1);
function Bb(t, e) {
  Me(e, !0);
  const n = () => Dt(A, "$filter", o), r = () => Dt(E, "$choice", o), i = () => Dt(I, "$nonInteractive", o), a = () => Dt(C, "$isSelected", o), [o, u] = xn();
  let l = m(e, "use", 19, () => []), c = m(e, "class", 3, ""), d = m(e, "tabindex", 19, () => oe("SMUI:chips:chip:focusable") ? 0 : -1), h = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "tabindex",
    "children",
    "checkbox"
  ]), f, v, p, g = Ee({});
  const I = oe("SMUI:chips:nonInteractive"), E = oe("SMUI:chips:choice"), A = oe("SMUI:chips:filter"), C = oe("SMUI:chips:chip:isSelected"), b = /* @__PURE__ */ ue(() => ({
    role: n() ? "checkbox" : r() ? "radio" : "button",
    tabindex: d()
  })), _ = oe("SMUI:chips:primary-action:mount"), S = oe("SMUI:chips:primary-action:unmount");
  at(() => {
    let y = { focus: L, addAttr: T };
    return _ && _(y), () => {
      S && S(y);
    };
  });
  function T(y, w) {
    g[y] !== w && (g[y] = w);
  }
  function x(y) {
    g.tabindex !== Y().getAttribute("tabindex") ? mo().then(y) : y();
  }
  function L() {
    x(() => {
      p && p.focus();
    });
  }
  function U() {
    return v && v.getElement();
  }
  function Y() {
    return f;
  }
  var B = { focus: L, getInput: U, getElement: Y }, M = Fb(), Q = Z(M);
  {
    var F = (y) => {
      {
        let w = /* @__PURE__ */ ue(() => st(h, "checkmark$"));
        Se(
          Nb(y, rt(
            {
              get children() {
                return e.checkbox;
              }
            },
            () => s(w)
          )),
          (te) => v = te,
          () => v
        );
      }
    };
    ce(Q, (y) => {
      n() && y(F);
    });
  }
  var k = Ie(Q, 2);
  Be(k, (y) => ({ role: "gridcell", ...y }), [() => st(h, "container$")]);
  var H = ye(k);
  {
    var W = (y) => {
      var w = Hb();
      Be(w, (D) => ({ class: "mdc-chip__text", ...D }), [() => st(h, "text$")]);
      var te = ye(w);
      _e(te, () => e.children ?? be), O(y, w);
    }, ne = (y) => {
      var w = Ub();
      Be(
        w,
        (j, de) => ({
          class: j,
          ...n() || r() ? { "aria-selected": a() ? "true" : "false" } : {},
          ...s(b),
          ...g,
          ...de
        }),
        [
          () => He({ "mdc-chip__primary-action": !0, [c()]: !0 }),
          () => Gi(h, ["checkmark$", "container$", "text$"])
        ]
      );
      var te = ye(w);
      Be(te, (j) => ({ class: "mdc-chip__text", ...j }), [() => st(h, "text$")]);
      var D = ye(te);
      _e(D, () => e.children ?? be), Se(w, (j) => p = j, () => p), O(y, w);
    };
    ce(H, (y) => {
      i() ? y(W) : y(ne, !1);
    });
  }
  Se(k, (y) => f = y, () => f), Ue(k, (y, w) => K == null ? void 0 : K(y, w), l), O(t, M);
  var N = De(B);
  return u(), N;
}
var kb = /* @__PURE__ */ pe('<span class="mdc-deprecated-chip-trailing-action__touch"></span>'), Vb = /* @__PURE__ */ pe('<button><span class="mdc-deprecated-chip-trailing-action__ripple"></span> <!> <span><!></span></button>');
function Gb(t, e) {
  Me(e, !0);
  const { MDCChipTrailingActionFoundation: n } = Ws;
  let r = m(e, "use", 19, () => []), i = m(e, "class", 3, ""), a = m(e, "style", 3, ""), o = m(e, "ripple", 3, !0), u = m(e, "touch", 3, !1), l = m(e, "nonNavigable", 3, !1), c = m(e, "icon$use", 19, () => []), d = m(e, "icon$class", 3, ""), h = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "ripple",
    "touch",
    "nonNavigable",
    "icon$use",
    "icon$class",
    "children"
  ]), f, v = /* @__PURE__ */ we(void 0), p = Ee({}), g = Ee({}), I = Ee({});
  const E = oe("SMUI:chips:trailing-action:mount"), A = oe("SMUI:chips:trailing-action:unmount");
  at(() => {
    ae(
      v,
      new n({
        focus: () => {
          const w = B();
          x(() => {
            w.focus();
          });
        },
        getAttribute: S,
        notifyInteraction: (w) => ze(B(), "SMUIChipTrailingActionInteraction", { trigger: w }),
        notifyNavigation: (w) => ze(B(), "SMUIChipTrailingActionNavigation", { key: w }),
        setAttribute: T
      }),
      !0
    );
    const y = { isNavigable: L, focus: U, removeFocus: Y };
    return E && E(y), s(v).init(), () => {
      var w;
      A && A(y), (w = s(v)) == null || w.destroy();
    };
  });
  function C(y) {
    p[y] || (p[y] = !0);
  }
  function b(y) {
    (!(y in p) || p[y]) && (p[y] = !1);
  }
  function _(y, w) {
    g[y] != w && (w === "" || w == null ? delete g[y] : g[y] = w);
  }
  function S(y) {
    return y in I ? I[y] ?? null : B().getAttribute(y);
  }
  function T(y, w) {
    I[y] !== w && (I[y] = w);
  }
  function x(y) {
    I.tabindex !== B().getAttribute("tabindex") ? mo().then(y) : y();
  }
  function L() {
    if (s(v) == null)
      throw new Error("Instance is undefined.");
    return s(v).isNavigable();
  }
  function U() {
    var y;
    (y = s(v)) == null || y.focus();
  }
  function Y() {
    var y;
    (y = s(v)) == null || y.removeFocus();
  }
  function B() {
    return f;
  }
  var M = { isNavigable: L, focus: U, removeFocus: Y, getElement: B }, Q = Vb(), F = (y) => {
    var w;
    s(v) && s(v).handleClick(y), (w = e.onclick) == null || w.call(e, y);
  }, k = (y) => {
    var w;
    s(v) && s(v).handleKeydown(y), (w = e.onkeydown) == null || w.call(e, y);
  };
  Be(
    Q,
    (y, w, te) => ({
      type: "button",
      class: y,
      style: w,
      "aria-hidden": l() ? "true" : void 0,
      tabindex: "-1",
      ...I,
      ...te,
      onclick: F,
      onkeydown: k
    }),
    [
      () => He({
        "mdc-deprecated-chip-trailing-action": !0,
        ...p,
        [i()]: !0
      }),
      () => Object.entries(g).map(([y, w]) => `${y}: ${w};`).concat([a()]).join(" "),
      () => Gi(h, ["icon$"])
    ]
  );
  var H = Ie(ye(Q), 2);
  {
    var W = (y) => {
      var w = kb();
      O(y, w);
    };
    ce(H, (y) => {
      u() && y(W);
    });
  }
  var ne = Ie(H, 2);
  Be(ne, (y, w) => ({ class: y, ...w }), [
    () => He({
      "mdc-deprecated-chip-trailing-action__icon": !0,
      [d()]: !0
    }),
    () => st(h, "icon$")
  ]);
  var N = ye(ne);
  return _e(N, () => e.children ?? be), Ue(ne, (y, w) => K == null ? void 0 : K(y, w), c), Se(Q, (y) => f = y, () => f), Ue(Q, (y, w) => jt == null ? void 0 : jt(y, w), () => ({
    ripple: o(),
    unbounded: !1,
    addClass: C,
    removeClass: b,
    addStyle: _
  })), Ue(Q, (y, w) => K == null ? void 0 : K(y, w), r), O(t, Q), De(M);
}
const Ht = [];
for (let t = 0; t < 256; ++t)
  Ht.push((t + 256).toString(16).slice(1));
function jb(t, e = 0) {
  return (Ht[t[e + 0]] + Ht[t[e + 1]] + Ht[t[e + 2]] + Ht[t[e + 3]] + "-" + Ht[t[e + 4]] + Ht[t[e + 5]] + "-" + Ht[t[e + 6]] + Ht[t[e + 7]] + "-" + Ht[t[e + 8]] + Ht[t[e + 9]] + "-" + Ht[t[e + 10]] + Ht[t[e + 11]] + Ht[t[e + 12]] + Ht[t[e + 13]] + Ht[t[e + 14]] + Ht[t[e + 15]]).toLowerCase();
}
let Go;
const qb = new Uint8Array(16);
function Wb() {
  if (!Go) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Go = crypto.getRandomValues.bind(crypto);
  }
  return Go(qb);
}
const Kb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), $l = { randomUUID: Kb };
function ad(t, e, n) {
  var i;
  if ($l.randomUUID && !e && !t)
    return $l.randomUUID();
  t = t || {};
  const r = t.random ?? ((i = t.rng) == null ? void 0 : i.call(t)) ?? Wb();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    if (n = n || 0, n < 0 || n + 16 > e.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      e[n + a] = r[a];
    return e;
  }
  return jb(r);
}
var zb = /* @__PURE__ */ pe('<span class="oscd-icon"><!></span>');
function ur(t, e) {
  var n = zb(), r = ye(n);
  _e(r, () => e.children ?? be), O(t, n);
}
var Xb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function Yb(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Xb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var Zb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function od(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Zb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var Qb = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function Jb(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = Qb();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var $b = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function ey(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = $b();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var ty = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function ny(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = ty();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var ry = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path></svg>');
function iy(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = ry();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var ay = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function oy(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = ay();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var sy = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function ly(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = sy();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
var uy = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function cy(t, e) {
  let n = m(e, "svgStyles", 3, "");
  ur(t, {
    children: (r, i) => {
      var a = uy();
      Fe(() => en(a, n())), O(r, a);
    }
  });
}
Qd();
var dy = /* @__PURE__ */ pe("<!> <!>", 1);
function fy(t, e) {
  let n = m(e, "title", 3, ""), r = m(e, "closeable", 3, !0), i = m(e, "disabled", 3, !1);
  {
    let a = /* @__PURE__ */ ue(() => i() ? "disabled" : "");
    Ob(t, {
      get chip() {
        return n();
      },
      nonInteractive: !0,
      disabled: !0,
      get class() {
        return s(a);
      },
      children: (o, u) => {
        var l = dy(), c = Z(l);
        Bb(c, {
          children: (f, v) => {
            var p = Wt();
            Fe(() => dt(p, n())), O(f, p);
          },
          $$slots: { default: !0 }
        });
        var d = Ie(c, 2);
        {
          var h = (f) => {
            Gb(f, {
              $$events: {
                click(...v) {
                  var p;
                  (p = e.callback) == null || p.apply(this, v);
                }
              },
              children: (v, p) => {
                od(v, { svgStyles: "margin-left: 0; fill: unset;" });
              },
              $$slots: { default: !0 }
            });
          };
          ce(d, (f) => {
            r() && !i() && f(h);
          });
        }
        O(o, l);
      },
      $$slots: { default: !0 }
    });
  }
}
function hy(t, e) {
  e(t.target.value);
}
var vy = /* @__PURE__ */ pe('<div class="custom-text-field svelte-1719vm0"><input type="date" id="datetime-picker" class="custom-text-field__input svelte-1719vm0" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-1719vm0"> </label> <span class="custom-line svelte-1719vm0"></span></div>');
function my(t, e) {
  Me(e, !0);
  let n = m(e, "label", 3, ""), r = m(e, "value", 15, "");
  var i = vy(), a = ye(i);
  a.__change = [hy, r];
  var o = Ie(a, 2), u = ye(o);
  Fe(() => dt(u, n())), va(a, r), O(t, i), De();
}
li(["change"]);
var py = /* @__PURE__ */ pe('<div class="filter-box-container"><div class="input-section"><div class="filter-input-controls"><!> <!> <!> <!> <!></div> <div class="filter-button-controls"><!> <!></div></div> <div class="separator"></div> <div class="chip-section"><!></div></div>');
function gy(t, e) {
  Me(e, !0);
  let n = m(e, "filterTypes", 19, () => []), r = m(e, "activeFilters", 31, () => Ee([])), i = m(e, "useOptionLabelInChipText", 3, !1), a = m(e, "selectedOptionIndex", 31, () => -1), o = m(e, "disabled", 3, !1), u = m(e, "addFilterLabel", 3, "Add Filter"), l = m(e, "selectFilterLabel", 3, "Filter Types"), c = /* @__PURE__ */ we(""), d = /* @__PURE__ */ we(void 0), h = /* @__PURE__ */ ue(() => () => n().map((A) => ({ value: A.label, label: A.label }))), f = /* @__PURE__ */ ue(() => () => !s(d) || !s(c)), v = /* @__PURE__ */ ue(() => () => n().find((A) => A.label === s(d)));
  function p() {
    var C, b;
    if (!s(d) || !s(c)) {
      console.warn("Filter type or input value is empty");
      return;
    }
    if (!s(v)) {
      console.warn("Filter type not found");
      return;
    }
    const A = [
      ...r(),
      {
        id: ad(),
        key: s(v).label.toLowerCase(),
        value: s(c),
        operation: "=",
        text: `${s(d)}: ${i() && ((C = s(v).inputType.options) != null && C.length) ? (b = s(v).inputType.options[a()]) == null ? void 0 : b.label : s(c)}`,
        disabled: !1
      }
    ];
    r(A), E(), I();
  }
  function g(A) {
    setTimeout(
      () => {
        r(r().filter((C) => C.id !== A)), E();
      },
      0
    );
  }
  function I() {
    ae(c, ""), ae(d, void 0);
  }
  function E() {
    const A = r().map((C) => ({ ...C }));
    A.find((C) => C.key === "uuid") ? A.filter((C) => C.key !== "uuid").forEach((C) => {
      C.disabled = !0;
    }) : A.forEach((C) => {
      C.disabled = !1;
    }), r(A);
  }
  ed(t, {
    children: (A, C) => {
      var b = py(), _ = ye(b), S = ye(_), T = ye(S);
      fs(T, {
        get disabled() {
          return o();
        },
        get label() {
          return l();
        },
        get data() {
          return s(h);
        },
        get value() {
          return s(d);
        },
        set value(y) {
          ae(d, y, !0);
        }
      });
      var x = Ie(T, 2);
      {
        var L = (y) => {
          Vg(y, {
            label: "Input",
            get value() {
              return s(c);
            },
            set value(w) {
              ae(c, w, !0);
            }
          });
        };
        ce(x, (y) => {
          var w, te;
          ((te = (w = s(v)) == null ? void 0 : w.inputType) == null ? void 0 : te.type) === "string" && y(L);
        });
      }
      var U = Ie(x, 2);
      {
        var Y = (y) => {
          {
            let w = /* @__PURE__ */ ue(() => {
              var te;
              return (te = s(v).inputType) == null ? void 0 : te.options;
            });
            fs(y, {
              label: "Input",
              get data() {
                return s(w);
              },
              get value() {
                return s(c);
              },
              set value(te) {
                ae(c, te, !0);
              },
              get selectedOptionIndex() {
                return a();
              },
              set selectedOptionIndex(te) {
                a(te);
              }
            });
          }
        };
        ce(U, (y) => {
          var w, te;
          ((te = (w = s(v)) == null ? void 0 : w.inputType) == null ? void 0 : te.type) === "select" && y(Y);
        });
      }
      var B = Ie(U, 2);
      {
        var M = (y) => {
          my(y, {
            get value() {
              return s(c);
            },
            set value(w) {
              ae(c, w, !0);
            }
          });
        };
        ce(B, (y) => {
          var w, te;
          ((te = (w = s(v)) == null ? void 0 : w.inputType) == null ? void 0 : te.type) === "datepicker" && y(M);
        });
      }
      var Q = Ie(B, 2);
      {
        var F = (y) => {
          Ay(y, {
            get value() {
              return s(c);
            },
            set value(w) {
              ae(c, w, !0);
            }
          });
        };
        ce(Q, (y) => {
          var w, te;
          ((te = (w = s(v)) == null ? void 0 : w.inputType) == null ? void 0 : te.type) === "timepicker" && y(F);
        });
      }
      var k = Ie(S, 2), H = ye(k);
      Vs(H, {
        callback: p,
        get disabled() {
          return s(f);
        },
        children: (y, w) => {
          var te = Wt();
          Fe(() => dt(te, u())), O(y, te);
        },
        $$slots: { default: !0 }
      });
      var W = Ie(H, 2);
      _e(W, () => e.filterControls ?? be);
      var ne = Ie(_, 4), N = ye(ne);
      Mb(N, {
        get chips() {
          return r();
        },
        children: Hd,
        $$slots: {
          default: (y, w) => {
            const te = /* @__PURE__ */ ue(() => w.chip);
            fy(y, {
              get title() {
                return s(te).text;
              },
              callback: () => g(s(te).id),
              get disabled() {
                return s(te).disabled;
              }
            });
          }
        }
      }), O(A, b);
    },
    $$slots: { default: !0 }
  }), De();
}
var by = /* @__PURE__ */ pe('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), yy = /* @__PURE__ */ pe('<div class="svelte-14uvd2z"><!></div>');
function Iy(t, e) {
  let n = m(e, "loadingDone", 3, !0), r = m(e, "message", 3, "Loading...");
  var i = yy(), a = ye(i);
  {
    var o = (u) => {
      var l = by(), c = ye(l), d = Ie(ye(c), 2), h = ye(d);
      Fe(() => dt(h, r())), O(u, l);
    };
    ce(a, (u) => {
      n() || u(o);
    });
  }
  O(t, i);
}
function _y(t, e) {
  e(t.target.value);
}
var Ey = /* @__PURE__ */ pe('<div class="custom-text-field svelte-6wdfbb"><input type="datetime-local" id="datetime-picker" class="custom-text-field__input svelte-6wdfbb" placeholder=""/> <label for="datetime-picker" class="custom-floating-label svelte-6wdfbb"> </label> <span class="custom-line svelte-6wdfbb"></span></div>');
function Ay(t, e) {
  Me(e, !0);
  let n = m(e, "label", 3, ""), r = m(e, "value", 15, "");
  var i = Ey(), a = ye(i);
  a.__change = [_y, r];
  var o = Ie(a, 2), u = ye(o);
  Fe(() => dt(u, n())), va(a, r), O(t, i), De();
}
li(["change"]);
var Cy = /* @__PURE__ */ pe('<details class="svelte-1sq8fnx"><summary class="svelte-1sq8fnx"> </summary> <div class="expandable-content svelte-1sq8fnx"><!></div></details>');
function Sy(t, e) {
  let n = m(e, "title", 3, ""), r = m(e, "open", 3, !1);
  ed(t, {
    children: (i, a) => {
      var o = Cy(), u = ye(o), l = ye(u), c = Ie(u, 2), d = ye(c);
      _e(d, () => e.content ?? be), Fe(() => {
        o.open = r(), dt(l, n());
      }), O(i, o);
    },
    $$slots: { default: !0 }
  });
}
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
}, Ln = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, ia = {
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
var xy = (
  /** @class */
  function(t) {
    it(e, t);
    function e(n) {
      var r = t.call(this, fe(fe({}, e.defaultAdapter), n)) || this;
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
      this.determinate = !this.adapter.hasClass(dn.INDETERMINATE_CLASS), this.adapter.addClass(dn.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Lt(r), u = o.next(); !u.done; u = o.next()) {
              var l = u.value;
              l.contentRect && n.calculateAndSetDimensions(l.contentRect.width);
            }
          } catch (c) {
            i = { error: c };
          } finally {
            try {
              u && !u.done && (a = o.return) && a.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
      }), !this.determinate && this.observer && this.calculateAndSetDimensions(this.adapter.getWidth());
    }, e.prototype.setDeterminate = function(n) {
      if (this.determinate = n, this.determinate) {
        this.adapter.removeClass(dn.INDETERMINATE_CLASS), this.adapter.setAttribute(Ln.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(Ln.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(Ln.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(dn.INDETERMINATE_CLASS), this.adapter.removeAttribute(Ln.ARIA_VALUENOW), this.adapter.removeAttribute(Ln.ARIA_VALUEMAX), this.adapter.removeAttribute(Ln.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
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
      this.adapter.removeClass(dn.CLOSED_CLASS), this.adapter.removeClass(dn.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(Ln.ARIA_HIDDEN);
    }, e.prototype.close = function() {
      this.adapter.addClass(dn.CLOSED_CLASS), this.adapter.setAttribute(Ln.ARIA_HIDDEN, "true");
    }, e.prototype.isClosed = function() {
      return this.adapter.hasClass(dn.CLOSED_CLASS);
    }, e.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(dn.CLOSED_CLASS) && this.adapter.addClass(dn.CLOSED_ANIMATION_OFF_CLASS);
    }, e.prototype.destroy = function() {
      t.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, e.prototype.restartAnimation = function() {
      this.adapter.removeClass(dn.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(dn.ANIMATION_READY_CLASS);
    }, e.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? $g(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, e.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(Ln.FLEX_BASIS, r);
    }, e.prototype.calculateAndSetDimensions = function(n) {
      var r = n * ia.PRIMARY_HALF, i = n * ia.PRIMARY_FULL, a = n * ia.SECONDARY_QUARTER, o = n * ia.SECONDARY_HALF, u = n * ia.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", u + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -u + "px"), this.restartAnimation();
    }, e;
  }(Pt)
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
}, eu = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, jr = {
  ARIA_SELECTED: eu.ARIA_SELECTED,
  ARIA_SORT: eu.ARIA_SORT
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
var Ty = (
  /** @class */
  function(t) {
    it(e, t);
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
      return ec(this, void 0, void 0, function() {
        return Rs(this, function(n) {
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
      for (var r = n.columnId, i = n.columnIndex, a = n.headerCell, o = 0; o < this.adapter.getHeaderCellCount(); o++)
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, tr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, jr.ARIA_SORT, hn.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, hn.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, jr.ARIA_SORT), l = hn.NONE;
      u === hn.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, hn.DESCENDING), l = hn.DESCENDING) : u === hn.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, tr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, hn.ASCENDING), l = hn.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, jr.ARIA_SORT, hn.ASCENDING), l = hn.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
      r ? (this.adapter.addClassAtRowIndex(n, tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, jr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, tr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, jr.ARIA_SELECTED, "false"));
    }, e;
  }(Pt)
), wy = /* @__PURE__ */ pe('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Ly = /* @__PURE__ */ pe("<div><div><table><!></table></div> <!> <!></div>");
function Oy(t, e) {
  Me(e, !0);
  const n = () => Dt(M, "$progressClosed", r), [r, i] = xn(), { closest: a } = yo;
  let o = m(e, "use", 19, () => []), u = m(e, "class", 3, ""), l = m(e, "stickyHeader", 3, !1), c = m(e, "sortable", 3, !1), d = m(e, "sort", 15, null), h = m(e, "sortDirection", 15, "ascending"), f = m(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = m(e, "sortDescendingAriaLabel", 3, "sorted, descending"), p = m(e, "container$use", 19, () => []), g = m(e, "container$class", 3, ""), I = m(e, "table$use", 19, () => []), E = m(e, "table$class", 3, ""), A = /* @__PURE__ */ Ge(e, [
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
  ]), C, b = /* @__PURE__ */ we(void 0), _, S = /* @__PURE__ */ we(void 0), T = /* @__PURE__ */ we(void 0), x = Ee({}), L = /* @__PURE__ */ we(Ee({ height: "auto", top: "initial" })), U = oe("SMUI:addLayoutListener"), Y, B = !1, M = Ct(!1), Q = Ct(d());
  Te(() => {
    vn(Q, d());
  });
  let F = Ct(h());
  Te(() => {
    vn(F, h());
  }), ee("SMUI:checkbox:context", "data-table"), ee("SMUI:linear-progress:context", "data-table"), ee("SMUI:linear-progress:closed", M), ee("SMUI:data-table:sortable", c()), ee("SMUI:data-table:sort", Q), ee("SMUI:data-table:sortDirection", F), ee("SMUI:data-table:sortAscendingAriaLabel", f()), ee("SMUI:data-table:sortDescendingAriaLabel", v()), U && (Y = U(D));
  let k;
  Te(() => {
    e.progress && s(b) && k !== n() && (k = n(), n() ? s(b).hideProgress() : s(b).showProgress());
  }), ee("SMUI:checkbox:mount", () => {
    s(b) && B && s(b).layout();
  }), ee("SMUI:data-table:header:mount", (P) => {
    ae(S, P, !0);
  }), ee("SMUI:data-table:header:unmount", () => {
    ae(S, void 0);
  }), ee("SMUI:data-table:body:mount", (P) => {
    ae(T, P, !0);
  }), ee("SMUI:data-table:body:unmount", () => {
    ae(T, void 0);
  }), at(() => (ae(
    b,
    new Ty({
      addClass: W,
      removeClass: ne,
      getHeaderCellElements: () => {
        var P;
        return ((P = s(S)) == null ? void 0 : P.cells.map((G) => G.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var P;
        return ((P = s(S)) == null ? void 0 : P.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (P, G) => {
        var J;
        return ((J = s(S)) == null ? void 0 : J.orderedCells[P].getAttr(G)) ?? null;
      },
      setAttributeByHeaderCellIndex: (P, G, J) => {
        var Ae;
        (Ae = s(S)) == null || Ae.orderedCells[P].addAttr(G, J);
      },
      setClassNameByHeaderCellIndex: (P, G) => {
        var J;
        (J = s(S)) == null || J.orderedCells[P].addClass(G);
      },
      removeClassNameByHeaderCellIndex: (P, G) => {
        var J;
        (J = s(S)) == null || J.orderedCells[P].removeClass(G);
      },
      notifySortAction: (P) => {
        d(P.columnId), h(P.sortValue), ze(j(), "SMUIDataTableSorted", P);
      },
      getTableContainerHeight: () => _.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const P = j().querySelector(".mdc-data-table__header-row");
        if (!P)
          throw new Error("MDCDataTable: Table header element not found.");
        return P.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (P) => {
        ae(L, P, !0);
      },
      addClassAtRowIndex: (P, G) => {
        var J;
        (J = s(T)) == null || J.orderedRows[P].addClass(G);
      },
      getRowCount: () => {
        var P;
        return ((P = s(T)) == null ? void 0 : P.rows.length) ?? 0;
      },
      getRowElements: () => {
        var P;
        return ((P = s(T)) == null ? void 0 : P.rows.map((G) => G.element)) ?? [];
      },
      getRowIdAtIndex: (P) => {
        var G;
        return ((G = s(T)) == null ? void 0 : G.orderedRows[P].rowId) ?? null;
      },
      getRowIndexByChildElement: (P) => {
        var G;
        return ((G = s(T)) == null ? void 0 : G.orderedRows.map((J) => J.element).indexOf(a(P, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var P;
        return ((P = s(T)) == null ? void 0 : P.rows.filter((G) => G.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (P) => {
        var J;
        const G = (J = s(T)) == null ? void 0 : J.orderedRows[P].checkbox;
        return G ? G.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var G;
        const P = (G = s(S)) == null ? void 0 : G.checkbox;
        return P ? P.checked : !1;
      },
      isRowsSelectable: () => !!j().querySelector(".mdc-data-table__row-checkbox") || !!j().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (P) => {
        var J;
        const G = (J = s(T)) == null ? void 0 : J.orderedRows[P.rowIndex];
        G && ze(j(), "SMUIDataTableSelectionChanged", {
          row: G.element,
          rowId: G.rowId,
          rowIndex: P.rowIndex,
          selected: P.selected
        });
      },
      notifySelectedAll: () => {
        N(!1), ze(j(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        N(!1), ze(j(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (P) => ze(j(), "SMUIDataTableClickRow", P),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (P, G) => {
        var J;
        (J = s(T)) == null || J.orderedRows[P].removeClass(G);
      },
      setAttributeAtRowIndex: (P, G, J) => {
        var Ae;
        (Ae = s(T)) == null || Ae.orderedRows[P].addAttr(G, J);
      },
      setHeaderRowCheckboxChecked: (P) => {
        var J;
        const G = (J = s(S)) == null ? void 0 : J.checkbox;
        G && (G.checked = P);
      },
      setHeaderRowCheckboxIndeterminate: N,
      setRowCheckboxCheckedAtIndex: (P, G) => {
        var Ae;
        const J = (Ae = s(T)) == null ? void 0 : Ae.orderedRows[P].checkbox;
        J && (J.checked = G);
      },
      setSortStatusLabelByHeaderCellIndex: (P, G) => {
      }
    }),
    !0
  ), s(b).init(), s(b).layout(), B = !0, () => {
    var P;
    (P = s(b)) == null || P.destroy();
  })), Kn(() => {
    Y && Y();
  });
  function H(P) {
    s(b) && s(b).handleRowCheckboxChange(P);
  }
  function W(P) {
    x[P] || (x[P] = !0);
  }
  function ne(P) {
    (!(P in x) || x[P]) && (x[P] = !1);
  }
  function N(P) {
    var J;
    const G = (J = s(S)) == null ? void 0 : J.checkbox;
    G && (G.indeterminate = P);
  }
  function y(P) {
    if (!s(b) || !P.detail.target)
      return;
    const G = a(P.detail.target, ".mdc-data-table__header-cell--with-sort");
    G && te(G);
  }
  function w(P) {
    if (!s(b) || !P.detail.target)
      return;
    const G = a(P.detail.target, ".mdc-data-table__row");
    G && s(b) && s(b).handleRowClick({ rowId: P.detail.rowId, row: G });
  }
  function te(P) {
    var Nt, bt;
    const G = ((Nt = s(S)) == null ? void 0 : Nt.orderedCells) ?? [], J = G.map((pn) => pn.element).indexOf(P);
    if (J === -1)
      return;
    const Ae = G[J].columnId ?? null;
    (bt = s(b)) == null || bt.handleSortAction({ columnId: Ae, columnIndex: J, headerCell: P });
  }
  function D() {
    var P;
    return (P = s(b)) == null ? void 0 : P.layout();
  }
  function j() {
    return C;
  }
  var de = { layout: D, getElement: j }, V = Ly(), re = (P) => {
    var G;
    s(b) && s(b).handleHeaderRowCheckboxChange(), (G = e.onSMUIDataTableHeaderCheckboxChange) == null || G.call(e, P);
  }, X = (P) => {
    var G;
    y(P), (G = e.onSMUIDataTableHeaderClick) == null || G.call(e, P);
  }, he = (P) => {
    var G;
    w(P), (G = e.onSMUIDataTableRowClick) == null || G.call(e, P);
  }, ie = (P) => {
    var G;
    H(P), (G = e.onSMUIDataTableBodyCheckboxChange) == null || G.call(e, P);
  };
  Be(
    V,
    (P, G) => ({
      class: P,
      ...G,
      onSMUIDataTableHeaderCheckboxChange: re,
      onSMUIDataTableHeaderClick: X,
      onSMUIDataTableRowClick: he,
      onSMUIDataTableBodyCheckboxChange: ie
    }),
    [
      () => He({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...x,
        [u()]: !0
      }),
      () => Gi(A, ["container$", "table$"])
    ]
  );
  var je = ye(V);
  Be(je, (P, G) => ({ class: P, ...G }), [
    () => He({
      "mdc-data-table__table-container": !0,
      [g()]: !0
    }),
    () => st(A, "container$")
  ]);
  var qe = ye(je);
  Be(qe, (P, G) => ({ class: P, ...G }), [
    () => He({ "mdc-data-table__table": !0, [E()]: !0 }),
    () => st(A, "table$")
  ]);
  var Pe = ye(qe);
  _e(Pe, () => e.children ?? be), Ue(qe, (P, G) => K == null ? void 0 : K(P, G), I), Se(je, (P) => _ = P, () => _), Ue(je, (P, G) => K == null ? void 0 : K(P, G), p);
  var Le = Ie(je, 2);
  {
    var se = (P) => {
      var G = wy(), J = Ie(ye(G), 2);
      _e(J, () => e.progress ?? be), Fe((Ae) => en(G, Ae), [
        () => Object.entries(s(L)).map(([Ae, Nt]) => `${Ae}: ${Nt};`).join(" ")
      ]), O(P, G);
    };
    ce(Le, (P) => {
      e.progress && P(se);
    });
  }
  var xe = Ie(Le, 2);
  _e(xe, () => e.paginate ?? be), Se(V, (P) => C = P, () => C), Ue(V, (P, G) => K == null ? void 0 : K(P, G), o), O(t, V);
  var Qe = De(de);
  return i(), Qe;
}
var Ry = /* @__PURE__ */ pe("<thead><!></thead>");
function My(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = /* @__PURE__ */ Ge(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ we(void 0), o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ee("SMUI:data-table:row:header", !0);
  const l = oe("SMUI:checkbox:mount");
  ee("SMUI:checkbox:mount", (E) => {
    ae(a, E, !0), l && l(E);
  });
  const c = oe("SMUI:checkbox:unmount");
  ee("SMUI:checkbox:unmount", (E) => {
    ae(a, void 0), c && c(E);
  }), ee("SMUI:data-table:cell:mount", (E) => {
    o.push(E), u.set(E.element, E);
  }), ee("SMUI:data-table:cell:unmount", (E) => {
    const A = o.findIndex((C) => C === E);
    A !== -1 && o.splice(A, 1), u.delete(E.element);
  });
  const d = oe("SMUI:data-table:header:mount"), h = oe("SMUI:data-table:header:unmount");
  at(() => {
    const E = {
      get cells() {
        return o;
      },
      get orderedCells() {
        return f();
      },
      get checkbox() {
        return s(a);
      }
    };
    return d && d(E), () => {
      h && h(E);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((E) => u.get(E)).filter((E) => E && E._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var p = { getElement: v }, g = Ry();
  Be(g, () => ({ ...r }));
  var I = ye(g);
  return _e(I, () => e.children ?? be), Se(g, (E) => i = E, () => i), Ue(g, (E, A) => K == null ? void 0 : K(E, A), n), O(t, g), De(p);
}
var Dy = /* @__PURE__ */ pe("<tbody><!></tbody>");
function Py(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const u = /* @__PURE__ */ new WeakMap();
  ee("SMUI:data-table:row:header", !1), ee("SMUI:data-table:row:mount", (g) => {
    o.push(g), u.set(g.element, g);
  }), ee("SMUI:data-table:row:unmount", (g) => {
    const I = o.findIndex((E) => E === g);
    I !== -1 && o.splice(I, 1), u.delete(g.element);
  });
  const l = oe("SMUI:data-table:body:mount"), c = oe("SMUI:data-table:body:unmount");
  at(() => {
    const g = {
      get rows() {
        return o;
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
  var f = { getElement: h }, v = Dy();
  Be(v, (g) => ({ class: g, ...i }), [
    () => He({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var p = ye(v);
  return _e(p, () => e.children ?? be), Se(v, (g) => a = g, () => a), Ue(v, (g, I) => K == null ? void 0 : K(g, I), n), O(t, v), De(f);
}
let Ny = 0;
var Hy = /* @__PURE__ */ pe("<tr><!></tr>");
function tu(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "rowId", 19, () => "SMUI-data-table-row-" + Ny++), a = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, u = /* @__PURE__ */ we(void 0), l = Ee({}), c = Ee({}), d = oe("SMUI:data-table:row:header");
  const h = oe("SMUI:checkbox:mount");
  ee("SMUI:checkbox:mount", (U) => {
    ae(u, U, !0), h && h(U);
  });
  const f = oe("SMUI:checkbox:unmount");
  ee("SMUI:checkbox:unmount", (U) => {
    ae(u, void 0), f && f(U);
  });
  const v = oe("SMUI:data-table:row:mount"), p = oe("SMUI:data-table:row:unmount");
  at(() => {
    const U = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return _();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: I,
      getAttr: E,
      addAttr: A
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return _();
      },
      get checkbox() {
        return s(u);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (s(u) && s(u).checked) ?? !1;
      },
      addClass: g,
      removeClass: I,
      getAttr: E,
      addAttr: A
    };
    return v && v(U), () => {
      p && p(U);
    };
  });
  function g(U) {
    l[U] || (l[U] = !0);
  }
  function I(U) {
    (!(U in l) || l[U]) && (l[U] = !1);
  }
  function E(U) {
    return U in c ? c[U] ?? null : _().getAttribute(U);
  }
  function A(U, Y) {
    c[U] !== Y && (c[U] = Y);
  }
  function C(U) {
    ze(_(), "SMUIDataTableHeaderClick", U);
  }
  function b(U) {
    ze(_(), "SMUIDataTableRowClick", { rowId: i(), target: U.target });
  }
  function _() {
    return o;
  }
  var S = { getElement: _ }, T = Hy(), x = (U) => {
    var Y;
    d ? C(U) : b(U), (Y = e.onclick) == null || Y.call(e, U);
  };
  Be(
    T,
    (U) => ({
      class: U,
      "aria-selected": s(u) ? s(u).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: x
    }),
    [
      () => He({
        "mdc-data-table__header-row": d,
        "mdc-data-table__row": !d,
        "mdc-data-table__row--selected": !d && s(u) && s(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var L = ye(T);
  return _e(L, () => e.children ?? be), Se(T, (U) => o = U, () => o), Ue(T, (U, Y) => K == null ? void 0 : K(U, Y), n), O(t, T), De(S);
}
let Uy = 0;
var Fy = /* @__PURE__ */ pe('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), By = /* @__PURE__ */ pe("<th><!></th>"), ky = /* @__PURE__ */ pe("<td><!></td>");
function jo(t, e) {
  Me(e, !0);
  const n = () => Dt(E, "$sort", i), r = () => Dt(A, "$sortDirection", i), [i, a] = xn();
  let o = oe("SMUI:data-table:row:header"), u = m(e, "use", 19, () => []), l = m(e, "class", 3, ""), c = m(e, "numeric", 3, !1), d = m(e, "checkbox", 3, !1), h = m(e, "columnId", 19, () => o ? "SMUI-data-table-column-" + Uy++ : "SMUI-data-table-unused"), f = m(e, "sortable", 19, () => oe("SMUI:data-table:sortable")), v = /* @__PURE__ */ Ge(e, [
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
  ]), p, g = Ee({}), I = Ee({}), E = oe("SMUI:data-table:sort"), A = oe("SMUI:data-table:sortDirection"), C = oe("SMUI:data-table:sortAscendingAriaLabel"), b = oe("SMUI:data-table:sortDescendingAriaLabel");
  f() && (ee("SMUI:label:context", "data-table:sortable-header-cell"), ee("SMUI:icon-button:context", "data-table:sortable-header-cell"), ee("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const _ = oe("SMUI:data-table:cell:mount"), S = oe("SMUI:data-table:cell:unmount");
  at(() => {
    const N = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return M();
      },
      get columnId() {
        return h();
      },
      addClass: T,
      removeClass: x,
      getAttr: L,
      addAttr: U
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return M();
      },
      get columnId() {
      },
      addClass: T,
      removeClass: x,
      getAttr: L,
      addAttr: U
    };
    return _ && _(N), () => {
      S && S(N);
    };
  });
  function T(N) {
    g[N] || (g[N] = !0);
  }
  function x(N) {
    (!(N in g) || g[N]) && (g[N] = !1);
  }
  function L(N) {
    return N in I ? I[N] ?? null : M().getAttribute(N);
  }
  function U(N, y) {
    I[N] !== y && (I[N] = y);
  }
  function Y(N) {
    ze(M(), "SMUIDataTableHeaderCheckboxChange", N);
  }
  function B(N) {
    ze(M(), "SMUIDataTableBodyCheckboxChange", N);
  }
  function M() {
    return p;
  }
  var Q = { getElement: M }, F = le(), k = Z(F);
  {
    var H = (N) => {
      var y = By(), w = (de) => {
        var V;
        d() && Y(de), (V = e.onchange) == null || V.call(e, de);
      };
      Be(
        y,
        (de) => ({
          class: de,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? n() === h() ? r() : "none" : void 0,
          ...I,
          ...v,
          onchange: w
        }),
        [
          () => He({
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
      var te = ye(y);
      {
        var D = (de) => {
          var V = Fy(), re = ye(V);
          _e(re, () => e.children ?? be);
          var X = Ie(re, 2), he = ye(X);
          Fe(() => {
            ha(X, "id", `${h() ?? ""}-status-label`), dt(he, n() === h() ? r() === "ascending" ? C : b : "");
          }), O(de, V);
        }, j = (de) => {
          var V = le(), re = Z(V);
          _e(re, () => e.children ?? be), O(de, V);
        };
        ce(te, (de) => {
          f() ? de(D) : de(j, !1);
        });
      }
      Se(y, (de) => p = de, () => p), Ue(y, (de, V) => K == null ? void 0 : K(de, V), u), O(N, y);
    }, W = (N) => {
      var y = ky(), w = (D) => {
        var j;
        d() && B(D), (j = e.onchange) == null || j.call(e, D);
      };
      Be(
        y,
        (D) => ({
          class: D,
          ...I,
          ...v,
          onchange: w
        }),
        [
          () => He({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": d(),
            ...g,
            [l()]: !0
          })
        ]
      );
      var te = ye(y);
      _e(te, () => e.children ?? be), Se(y, (D) => p = D, () => p), Ue(y, (D, j) => K == null ? void 0 : K(D, j), u), O(N, y);
    };
    ce(k, (N) => {
      o ? N(H) : N(W, !1);
    });
  }
  O(t, F);
  var ne = De(Q);
  return a(), ne;
}
li(["click"]);
li(["click"]);
function vs(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var Vy = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
vs({}, Vy.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Ua, nu = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Ua = {}, vs(Ua, nu.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), vs(Ua, nu.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Gy = Ct([]);
Gy.subscribe;
li(["click", "pointerdown", "pointerup", "pointermove"]);
var jy = /* @__PURE__ */ pe('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function qy(t, e) {
  Me(e, !0);
  const [n, r] = xn();
  let i = m(e, "use", 19, () => []), a = m(e, "class", 3, ""), o = m(e, "style", 3, ""), u = m(e, "indeterminate", 3, !1), l = m(e, "closed", 3, !1), c = m(e, "progress", 3, 0), d = m(e, "buffer", 3, void 0), h = /* @__PURE__ */ Ge(e, [
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
  ]), f, v = /* @__PURE__ */ we(void 0), p = Ee({}), g = Ee({}), I = Ee({}), E = Ee({}), A = Ee({}), C = oe("SMUI:linear-progress:context"), b = oe("SMUI:linear-progress:closed");
  Te(() => {
    b && vn(b, l());
  }), Te(() => {
    s(v) && s(v).isDeterminate() !== !u() && s(v).setDeterminate(!u());
  }), Te(() => {
    s(v) && s(v).getProgress() !== c() && s(v).setProgress(c());
  }), Te(() => {
    s(v) && (d() == null ? s(v).setBuffer(1) : s(v).setBuffer(d()));
  }), Te(() => {
    s(v) && (l() ? s(v).close() : s(v).open());
  }), at(() => (ae(
    v,
    new xy({
      addClass: S,
      forceLayout: () => {
        M().getBoundingClientRect();
      },
      setBufferBarStyle: Y,
      setPrimaryBarStyle: B,
      hasClass: _,
      removeAttribute: L,
      removeClass: T,
      setAttribute: x,
      setStyle: U,
      attachResizeObserver: (y) => {
        const w = window.ResizeObserver;
        if (w) {
          const te = new w(y);
          return te.observe(M()), te;
        }
        return null;
      },
      getWidth: () => M().offsetWidth
    }),
    !0
  ), s(v).init(), () => {
    var y;
    (y = s(v)) == null || y.destroy();
  }));
  function _(y) {
    return y in p ? p[y] : M().classList.contains(y);
  }
  function S(y) {
    p[y] || (p[y] = !0);
  }
  function T(y) {
    (!(y in p) || p[y]) && (p[y] = !1);
  }
  function x(y, w) {
    g[y] !== w && (g[y] = w);
  }
  function L(y) {
    (!(y in g) || g[y] != null) && (g[y] = void 0);
  }
  function U(y, w) {
    I[y] != w && (w === "" || w == null ? delete I[y] : I[y] = w);
  }
  function Y(y, w) {
    E[y] != w && (w === "" || w == null ? delete E[y] : E[y] = w);
  }
  function B(y, w) {
    A[y] != w && (w === "" || w == null ? delete A[y] : A[y] = w);
  }
  function M() {
    return f;
  }
  var Q = { getElement: M }, F = jy(), k = (y) => {
    var w;
    s(v) && s(v).handleTransitionEnd(), (w = e.ontransitionend) == null || w.call(e, y);
  };
  Be(
    F,
    (y, w) => ({
      class: y,
      style: w,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": u() ? void 0 : c(),
      ...g,
      ...h,
      ontransitionend: k
    }),
    [
      () => He({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": u(),
        "mdc-linear-progress--closed": l(),
        "mdc-data-table__linear-progress": C === "data-table",
        ...p,
        [a()]: !0
      }),
      () => Object.entries(I).map(([y, w]) => `${y}: ${w};`).concat([o()]).join(" ")
    ]
  );
  var H = ye(F), W = ye(H), ne = Ie(H, 2);
  Se(F, (y) => f = y, () => f), Ue(F, (y, w) => K == null ? void 0 : K(y, w), i), Fe(
    (y, w) => {
      en(W, y), en(ne, w);
    },
    [
      () => Object.entries(E).map(([y, w]) => `${y}: ${w};`).join(" "),
      () => Object.entries(A).map(([y, w]) => `${y}: ${w};`).join(" ")
    ]
  ), O(t, F);
  var N = De(Q);
  return r(), N;
}
var Wy = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Ky = /* @__PURE__ */ ln('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), zy = (t, e) => e(), Xy = /* @__PURE__ */ pe('<input type="text" class="svelte-1mj71p3"/>'), Yy = (t, e) => e(), Zy = /* @__PURE__ */ pe('<input type="number" class="svelte-1mj71p3"/>'), Qy = /* @__PURE__ */ pe("<!> <!>", 1), Jy = /* @__PURE__ */ pe('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div> <!></div>'), $y = /* @__PURE__ */ pe('<div class="cell-actions svelte-1mj71p3"></div>'), eI = /* @__PURE__ */ pe("<!> <!>", 1);
function ru(t, e) {
  Me(e, !0);
  const n = () => Dt(g, "$sortColumn", a), r = () => Dt(I, "$sortDirection", a), i = () => Dt(p, "$filteredData", a), [a, o] = xn();
  let u = m(e, "loadingDone", 15, !0), l = m(e, "label", 19, ad), c = m(e, "columnDefs", 19, () => []), d = m(e, "rowData", 31, () => Ee([])), h = m(e, "rowActions", 19, () => []), f = m(e, "searchInputLabel", 3, "Search"), v = Ee({ name: "", color: "", number: "" }), p = Ct([]), g = Ct(null), I = Ct(null);
  e.store.store.subscribe((b) => {
    d([...b]), E();
  });
  function E() {
    let b = d().filter((_) => c().every((S) => {
      const T = v[S.field], x = _[S.field];
      return T ? S.filterType === "number" ? x == T : x.toString().toLowerCase().includes(T.toLowerCase()) : !0;
    }));
    b = A(b), p.set(b);
  }
  function A(b) {
    let _, S;
    return g.subscribe((T) => _ = T), I.subscribe((T) => S = T), !_ || !S ? b : b.sort((T, x) => {
      let L = T[_], U = x[_];
      return L == null && (L = ""), U == null && (U = ""), S === "asc" ? L.toString().localeCompare(U.toString()) : U.toString().localeCompare(L.toString());
    });
  }
  function C(b) {
    g.update((_) => {
      if (_ === b)
        I.update((S) => S === "asc" ? "desc" : S === "desc" ? null : "asc");
      else
        return I.set("asc"), b;
      return b;
    }), E();
  }
  p.set(d()), Oy(t, {
    get "table$aria-label"() {
      return l();
    },
    style: "max-width: 100%; width: 100%;",
    progress: (_) => {
      qy(_, {
        indeterminate: !0,
        "aria-label": "Data is being loaded...",
        get closed() {
          return u();
        },
        set closed(S) {
          u(S);
        }
      });
    },
    children: (_, S) => {
      var T = eI(), x = Z(T);
      My(x, {
        children: (U, Y) => {
          tu(U, {
            class: "header-row",
            children: (B, M) => {
              var Q = le(), F = Z(Q);
              bi(F, 17, c, Ga, (k, H) => {
                jo(k, {
                  get style() {
                    return s(H).headerStyle;
                  },
                  $$events: {
                    click: () => s(H).sortable && C(s(H).field)
                  },
                  children: (W, ne) => {
                    var N = Jy(), y = ye(N), w = ye(y), te = ye(w), D = Ie(w, 2);
                    {
                      var j = (re) => {
                        var X = le(), he = Z(X);
                        {
                          var ie = (je) => {
                            var qe = le(), Pe = Z(qe);
                            {
                              var Le = (xe) => {
                                var Qe = Wy();
                                O(xe, Qe);
                              }, se = (xe) => {
                                var Qe = le(), P = Z(Qe);
                                {
                                  var G = (J) => {
                                    var Ae = Ky();
                                    O(J, Ae);
                                  };
                                  ce(
                                    P,
                                    (J) => {
                                      r() === "desc" && J(G);
                                    },
                                    !0
                                  );
                                }
                                O(xe, Qe);
                              };
                              ce(Pe, (xe) => {
                                r() === "asc" ? xe(Le) : xe(se, !1);
                              });
                            }
                            O(je, qe);
                          };
                          ce(he, (je) => {
                            n() === s(H).field && r() !== null && je(ie);
                          });
                        }
                        O(re, X);
                      };
                      ce(D, (re) => {
                        s(H).sortable && re(j);
                      });
                    }
                    var de = Ie(y, 2);
                    {
                      var V = (re) => {
                        var X = Qy(), he = Z(X);
                        {
                          var ie = (Pe) => {
                            var Le = Xy();
                            Le.__input = [zy, E], Fe(() => ha(Le, "placeholder", `${f()} ${s(H).headerName}`)), va(Le, () => v[s(H).field], (se) => v[s(H).field] = se), O(Pe, Le);
                          };
                          ce(he, (Pe) => {
                            s(H).filterType === "text" && Pe(ie);
                          });
                        }
                        var je = Ie(he, 2);
                        {
                          var qe = (Pe) => {
                            var Le = Zy();
                            Le.__input = [Yy, E], Fe(() => ha(Le, "placeholder", `${f()} ${s(H).headerName}`)), va(Le, () => v[s(H).field], (se) => v[s(H).field] = se), O(Pe, Le);
                          };
                          ce(je, (Pe) => {
                            s(H).filterType === "number" && Pe(qe);
                          });
                        }
                        O(re, X);
                      };
                      ce(de, (re) => {
                        s(H).filter && re(V);
                      });
                    }
                    Fe(() => {
                      en(N, `min-width: ${s(H).minWidth ?? 0 ?? ""}`), dt(te, s(H).headerName);
                    }), O(W, N);
                  },
                  $$slots: { default: !0 }
                });
              }), O(B, Q);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var L = Ie(x, 2);
      Py(L, {
        children: (U, Y) => {
          var B = le(), M = Z(B);
          bi(M, 1, i, Ga, (Q, F) => {
            tu(Q, {
              children: (k, H) => {
                var W = le(), ne = Z(W);
                bi(ne, 17, c, (N) => N.field, (N, y) => {
                  var w = le(), te = Z(w);
                  {
                    var D = (de) => {
                      jo(de, {
                        children: (V, re) => {
                          var X = $y();
                          bi(X, 21, h, Ga, (he, ie) => {
                            var je = le(), qe = Z(je);
                            {
                              var Pe = (se) => {
                                {
                                  let xe = /* @__PURE__ */ ue(() => s(ie).disabled(s(F)));
                                  sg(se, {
                                    get iconComponent() {
                                      return s(ie).iconComponent;
                                    },
                                    get iconStyles() {
                                      return s(ie).iconStyles;
                                    },
                                    callback: () => s(ie).callback(s(F)),
                                    get disabled() {
                                      return s(xe);
                                    }
                                  });
                                }
                              }, Le = (se) => {
                                {
                                  let xe = /* @__PURE__ */ ue(() => s(ie).disabled(s(F)));
                                  Vs(se, {
                                    class: "button",
                                    variant: "raised",
                                    callback: () => s(ie).callback(s(F)),
                                    get disabled() {
                                      return s(xe);
                                    },
                                    children: (Qe, P) => {
                                      var G = le(), J = Z(G);
                                      {
                                        var Ae = (bt) => {
                                          Yb(bt, { svgStyles: "margin: unset" });
                                        }, Nt = (bt) => {
                                          var pn = le(), me = Z(pn);
                                          {
                                            var ge = (z) => {
                                              od(z, { svgStyles: "margin: unset" });
                                            }, q = (z) => {
                                              var Re = le(), ut = Z(Re);
                                              {
                                                var pt = (yt) => {
                                                  Jb(yt, { svgStyles: "margin: unset" });
                                                }, Ot = (yt) => {
                                                  var zn = le(), ft = Z(zn);
                                                  {
                                                    var Rt = (Kt) => {
                                                      ey(Kt, { svgStyles: "margin: unset" });
                                                    }, Bt = (Kt) => {
                                                      var Pr = le(), Hn = Z(Pr);
                                                      {
                                                        var We = (Xe) => {
                                                          oy(Xe, { svgStyles: "margin: unset" });
                                                        }, et = (Xe) => {
                                                          var xt = le(), cn = Z(xt);
                                                          {
                                                            var tt = (ht) => {
                                                              ly(ht, { svgStyles: "margin: unset" });
                                                            }, It = (ht) => {
                                                              var Je = le(), Tt = Z(Je);
                                                              {
                                                                var wn = (ot) => {
                                                                  cy(ot, { svgStyles: "margin: unset" });
                                                                }, rn = (ot) => {
                                                                  ny(ot, { svgStyles: "margin: unset" });
                                                                };
                                                                ce(
                                                                  Tt,
                                                                  (ot) => {
                                                                    s(ie).icon === "delete" ? ot(wn) : ot(rn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              O(ht, Je);
                                                            };
                                                            ce(
                                                              cn,
                                                              (ht) => {
                                                                s(ie).icon === "edit" ? ht(tt) : ht(It, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          O(Xe, xt);
                                                        };
                                                        ce(
                                                          Hn,
                                                          (Xe) => {
                                                            s(ie).icon === "remove" ? Xe(We) : Xe(et, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      O(Kt, Pr);
                                                    };
                                                    ce(
                                                      ft,
                                                      (Kt) => {
                                                        s(ie).icon === "find-in-page" ? Kt(Rt) : Kt(Bt, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  O(yt, zn);
                                                };
                                                ce(
                                                  ut,
                                                  (yt) => {
                                                    s(ie).icon === "download" ? yt(pt) : yt(Ot, !1);
                                                  },
                                                  !0
                                                );
                                              }
                                              O(z, Re);
                                            };
                                            ce(
                                              me,
                                              (z) => {
                                                s(ie).icon === "cancel" ? z(ge) : z(q, !1);
                                              },
                                              !0
                                            );
                                          }
                                          O(bt, pn);
                                        };
                                        ce(J, (bt) => {
                                          s(ie).icon === "add" ? bt(Ae) : bt(Nt, !1);
                                        });
                                      }
                                      O(Qe, G);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                }
                              };
                              ce(qe, (se) => {
                                s(ie).iconComponent ? se(Pe) : se(Le, !1);
                              });
                            }
                            O(he, je);
                          }), O(V, X);
                        },
                        $$slots: { default: !0 }
                      });
                    }, j = (de) => {
                      jo(de, {
                        get numeric() {
                          return s(y).numeric;
                        },
                        get style() {
                          return s(y).cellStyle;
                        },
                        children: (V, re) => {
                          var X = le(), he = Z(X);
                          {
                            var ie = (qe) => {
                              var Pe = Wt();
                              Fe((Le) => dt(Pe, Le), [
                                () => s(y).valueFormatter(s(F)[s(y).field])
                              ]), O(qe, Pe);
                            }, je = (qe) => {
                              var Pe = Wt();
                              Fe(() => dt(Pe, s(F)[s(y).field] ?? "")), O(qe, Pe);
                            };
                            ce(he, (qe) => {
                              s(y).valueFormatter ? qe(ie) : qe(je, !1);
                            });
                          }
                          O(V, X);
                        },
                        $$slots: { default: !0 }
                      });
                    };
                    ce(te, (de) => {
                      s(y).field === "actions" ? de(D) : de(j, !1);
                    });
                  }
                  O(N, w);
                }), O(k, W);
              },
              $$slots: { default: !0 }
            });
          }), O(U, B);
        },
        $$slots: { default: !0 }
      }), O(_, T);
    },
    $$slots: { progress: !0, default: !0 }
  }), De(), o();
}
li(["input"]);
var tI = /* @__PURE__ */ pe("<div><!></div>");
function iu(t, e) {
  Me(e, !0);
  let n = m(e, "use", 19, () => []), r = m(e, "class", 3, ""), i = m(e, "variant", 3, "raised"), a = m(e, "padded", 3, !1), o = /* @__PURE__ */ Ge(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "variant",
    "padded",
    "children"
  ]), u;
  function l() {
    return u;
  }
  var c = { getElement: l }, d = tI();
  Be(d, (f) => ({ class: f, ...o }), [
    () => He({
      "mdc-card": !0,
      "mdc-card--outlined": i() === "outlined",
      "smui-card--padded": a(),
      [r()]: !0
    })
  ]);
  var h = ye(d);
  return _e(h, () => e.children ?? be), Se(d, (f) => u = f, () => u), Ue(d, (f, v) => K == null ? void 0 : K(f, v), n), O(t, d), De(c);
}
Qv({ en: Tm, de: fm });
var nI = /* @__PURE__ */ pe("<!> <!>", 1), rI = /* @__PURE__ */ pe('<h3 style="margin-bottom: 1rem;" class="svelte-1lw4l1e"> </h3> <!>', 1), iI = /* @__PURE__ */ pe('<div class="svelte-1lw4l1e"><div class="filter-box svelte-1lw4l1e"><!></div> <div class="table-container svelte-1lw4l1e"><!></div></div>'), aI = /* @__PURE__ */ pe('<h3 style="margin-bottom: 1rem;" class="svelte-1lw4l1e"> </h3> <!>', 1), oI = /* @__PURE__ */ pe('<div class="location-viewer-container svelte-1lw4l1e"><!> <div class="search-filter svelte-1lw4l1e"><!></div> <div class="table-container svelte-1lw4l1e"><!></div></div>');
function sI(t, e) {
  Me(e, !0);
  const n = () => Dt(Zv, "$_", r), [r, i] = xn(), a = yi.getInstance();
  let o = /* @__PURE__ */ we(Ee([])), u = /* @__PURE__ */ we(void 0), l = /* @__PURE__ */ we(!1), c = /* @__PURE__ */ we(!0);
  at(() => {
    setTimeout(
      () => {
        ae(c, !1);
      },
      1e3
    );
  }), at(() => {
    a.getLocations().subscribe({
      next: (M) => {
        ae(o, M.map((Q) => ({ label: Q.name, value: Q.uuid })), !0);
      }
    });
  });
  let d = m(e, "locationResourceStore", 19, () => new Ml()), h = m(e, "searchResourceStore", 19, () => new Ml());
  function f(M) {
    return new Date(M).toLocaleDateString();
  }
  function v(M) {
    if (!s(o) || !M)
      return M || "";
    const Q = s(o).find((F) => F.value === M);
    return console.log("foundlocation", { foundLocation: Q, bool: (Q == null ? void 0 : Q.label) !== void 0 }), Q != null && Q.label ? Q.label : M;
  }
  const p = [
    {
      id: 1,
      label: n()("uuid"),
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 2,
      label: n()("type"),
      inputType: {
        id: 2,
        type: "select",
        validatorFn: () => !0,
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
      allowedOperations: ["="]
    },
    {
      id: 3,
      label: n()("name"),
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 4,
      label: n()("location"),
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 5,
      label: n()("author"),
      inputType: { id: 1, type: "string", validatorFn: () => !0, options: [] },
      allowedOperations: ["="]
    },
    {
      id: 6,
      label: n()("from"),
      inputType: {
        id: 1,
        type: "datepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    },
    {
      id: 7,
      label: n()("to"),
      inputType: {
        id: 1,
        type: "datepicker",
        validatorFn: () => !0,
        options: []
      },
      allowedOperations: ["="]
    }
  ], g = [
    {
      icon: "remove",
      callback: (M) => C(M),
      disabled: () => !1
    }
  ], I = [
    {
      icon: "add",
      callback: (M) => A(M),
      disabled: () => !1
    }
  ];
  let E = /* @__PURE__ */ we(Ee([]));
  function A(M) {
    a.assignResourceToLocation(s(u), M.uuid).subscribe({
      next: () => {
        h().remove(M.uuid), d().add({ ...M, location: s(u) });
      }
    });
  }
  function C(M) {
    a.unassignResourceFromLocation(s(u), M.uuid).subscribe({
      next: () => {
        d().remove(M.uuid);
      }
    });
  }
  function b() {
    const M = _(s(E));
    a.searchResources(M).pipe(ip(1), ap((Q) => {
      h().set(Q.filter((F) => F.location !== s(u)));
    })).subscribe();
  }
  function _(M) {
    const Q = {
      uuid: null,
      type: null,
      name: null,
      location: null,
      author: null,
      from: null,
      to: null
    };
    return console.log("Convert filter to search params: ", M), M.forEach((F) => {
      console.log("KEY:", F.key), F.key === "from" || F.key === "to" ? Q[F.key] = new Date(F.value).toISOString() : Q[F.key] = F.value;
    }), Q;
  }
  function S() {
    ae(l, !s(l));
  }
  let T = /* @__PURE__ */ ue(() => [
    {
      headerName: n()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: n()("name"),
      field: "name",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("author"),
      field: "author",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("type"),
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("location"),
      field: "location",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: v
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("changed_at"),
      field: "changedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: f
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
  ]), x = /* @__PURE__ */ ue(() => [
    {
      headerName: n()("uuid"),
      field: "uuid",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !1
    },
    {
      headerName: n()("name"),
      field: "name",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("author"),
      field: "author",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("type"),
      field: "type",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("version"),
      field: "version",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0
    },
    {
      headerName: n()("changed_at"),
      field: "changedAt",
      numeric: !1,
      filter: !0,
      filterType: "text",
      sortable: !0,
      valueFormatter: f
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
  ]);
  Te(() => {
    if (!s(u))
      return;
    const M = a.searchResources({}).subscribe({
      next: (Q) => {
        console.log({ data: Q, selectedLocation: s(u) }), d().set(Q.filter((F) => F.location === s(u)));
      },
      error: (Q) => {
        console.error("Error loading resources:", Q);
      }
    });
    return () => M.unsubscribe();
  });
  var L = le(), U = Z(L);
  {
    var Y = (M) => {
      {
        let Q = /* @__PURE__ */ ue(() => !s(c));
        Iy(M, {
          get loadingDone() {
            return s(Q);
          }
        });
      }
    }, B = (M) => {
      var Q = oI(), F = ye(Q);
      {
        let N = /* @__PURE__ */ ue(() => n()("location"));
        fs(F, {
          get label() {
            return s(N);
          },
          get data() {
            return s(o);
          },
          set data(y) {
            ae(o, y, !0);
          },
          get value() {
            return s(u);
          },
          set value(y) {
            ae(u, y, !0);
          }
        });
      }
      var k = Ie(F, 2), H = ye(k);
      {
        const N = (w) => {
          var te = iI(), D = ye(te), j = ye(D);
          {
            const re = (ie) => {
              Vs(ie, {
                variant: "raised",
                callback: b,
                children: (je, qe) => {
                  var Pe = nI(), Le = Z(Pe);
                  iy(Le, {});
                  var se = Ie(Le, 2);
                  Yp(se, {
                    children: (xe, Qe) => {
                      var P = Wt();
                      Fe((G) => dt(P, G), [() => n()("search")]), O(xe, P);
                    },
                    $$slots: { default: !0 }
                  }), O(je, Pe);
                },
                $$slots: { default: !0 }
              });
            };
            let X = /* @__PURE__ */ ue(() => n()("add_filter")), he = /* @__PURE__ */ ue(() => n()("filter_types"));
            gy(j, {
              get filterTypes() {
                return p;
              },
              get addFilterLabel() {
                return s(X);
              },
              get selectFilterLabel() {
                return s(he);
              },
              get activeFilters() {
                return s(E);
              },
              set activeFilters(ie) {
                ae(E, ie, !0);
              },
              filterControls: re,
              $$slots: { filterControls: !0 }
            });
          }
          var de = Ie(D, 2), V = ye(de);
          iu(V, {
            style: "padding: 1rem; width: 100%; height: 100%;",
            children: (re, X) => {
              var he = rI(), ie = Z(he), je = ye(ie), qe = Ie(ie, 2);
              {
                let Pe = /* @__PURE__ */ ue(() => n()("search"));
                ru(qe, {
                  get columnDefs() {
                    return s(T);
                  },
                  get store() {
                    return h();
                  },
                  get rowActions() {
                    return I;
                  },
                  get searchInputLabel() {
                    return s(Pe);
                  }
                });
              }
              Fe((Pe) => dt(je, Pe), [() => n()("search_result")]), O(re, he);
            },
            $$slots: { default: !0 }
          }), O(w, te);
        };
        let y = /* @__PURE__ */ ue(() => n()("search"));
        Sy(H, {
          get title() {
            return s(y);
          },
          get open() {
            return s(l);
          },
          set open(w) {
            ae(l, w, !0);
          },
          $$events: { click: S },
          content: N,
          $$slots: { content: !0 }
        });
      }
      var W = Ie(k, 2), ne = ye(W);
      iu(ne, {
        style: "padding: 1rem; width: 100%; height: 100%;",
        children: (N, y) => {
          var w = aI(), te = Z(w), D = ye(te), j = Ie(te, 2);
          {
            let de = /* @__PURE__ */ ue(() => n()("search"));
            ru(j, {
              get columnDefs() {
                return s(x);
              },
              get store() {
                return d();
              },
              get rowActions() {
                return g;
              },
              get searchInputLabel() {
                return s(de);
              }
            });
          }
          Fe((de) => dt(D, de), [
            () => {
              var de;
              return s(u) ? `${n()("location")}: ${(de = s(o).find((V) => V.value === s(u))) == null ? void 0 : de.label}` : n()("select_location");
            }
          ]), O(N, w);
        },
        $$slots: { default: !0 }
      }), O(M, Q);
    };
    ce(U, (M) => {
      s(c) ? M(Y) : M(B, !1);
    });
  }
  O(t, L), De(), i();
}
const sd = "location-viewer", ld = "0.0.1";
var lI = /* @__PURE__ */ pe('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function uI(t, e) {
  Me(e, !0);
  let n = m(e, "dev", 3, !1);
  var r = lI(), i = Z(r);
  {
    var a = (l) => {
      sI(l, {});
    };
    ce(i, (l) => {
      (e.doc || n()) && l(a);
    });
  }
  var o = Ie(i, 2), u = Ie(o, 2);
  Fe(() => {
    ul(o, sd), ul(u, ld);
  }), O(t, r), De();
}
class gI extends HTMLElement {
  connectedCallback() {
    var n;
    this.attachShadow({ mode: "open" }), this.plugin = Vf(uI, {
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const e = cI();
    (n = this.shadowRoot) == null || n.appendChild(e);
  }
  set doc(e) {
    this._doc = e, this.plugin && this.plugin.$set({ doc: e });
  }
  set editCount(e) {
    this.plugin && this.plugin.$set({ editCount: e });
  }
}
function cI() {
  const t = `${sd}-v${ld}-style`, e = dI(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function dI() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  gI as default
};
