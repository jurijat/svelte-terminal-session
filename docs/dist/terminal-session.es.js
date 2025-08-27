var Ha = Object.defineProperty;
var fr = (e) => {
  throw TypeError(e);
};
var za = (e, t, n) => t in e ? Ha(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ve = (e, t, n) => za(e, typeof t != "symbol" ? t + "" : t, n), xn = (e, t, n) => t.has(e) || fr("Cannot " + n);
var $ = (e, t, n) => (xn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ue = (e, t, n) => t.has(e) ? fr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ge = (e, t, n, r) => (xn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), st = (e, t, n) => (xn(e, t, "access private method"), n);
const ja = "5";
var kr;
typeof window < "u" && ((kr = window.__svelte ?? (window.__svelte = {})).v ?? (kr.v = /* @__PURE__ */ new Set())).add(ja);
const Ua = 1, Va = 2, Wa = 16, Ya = 1, Ka = 4, Ga = 8, Ja = 16, Xa = 2, Er = "[", Hn = "[!", zn = "]", ct = {}, le = Symbol(), xr = !1;
var jn = Array.isArray, Za = Array.prototype.indexOf, Un = Array.from, vn = Object.keys, Ct = Object.defineProperty, vt = Object.getOwnPropertyDescriptor, Qa = Object.prototype, ei = Array.prototype, ti = Object.getPrototypeOf, cr = Object.isExtensible;
function Sr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ni() {
  var e, t, n = new Promise((r, a) => {
    e = r, t = a;
  });
  return { promise: n, resolve: e, reject: t };
}
const $e = 2, Vn = 4, Cr = 8, Ot = 16, We = 32, nt = 64, Pr = 128, Ee = 256, dn = 512, pe = 1024, xe = 2048, rt = 4096, Ne = 8192, _t = 16384, Wn = 32768, Yn = 65536, vr = 1 << 17, ri = 1 << 18, Bt = 1 << 19, ai = 1 << 20, Nn = 1 << 21, Kn = 1 << 22, dt = 1 << 23, Lt = Symbol("$state"), Ar = Symbol("legacy props"), Gn = new class extends Error {
  constructor() {
    super(...arguments);
    ve(this, "name", "StaleReactionError");
    ve(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Jn = 3, Pt = 8;
function ii() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function li() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function si(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function oi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ui(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ci() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function vi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function di() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function pi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Yt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let I = !1;
function ze(e) {
  I = e;
}
let O;
function Se(e) {
  if (e === null)
    throw Yt(), ct;
  return O = e;
}
function At() {
  return Se(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ye(O)
  );
}
function Y(e) {
  if (I) {
    if (/* @__PURE__ */ Ye(O) !== null)
      throw Yt(), ct;
    O = e;
  }
}
function In() {
  for (var e = 0, t = O; ; ) {
    if (t.nodeType === Pt) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === zn) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Er || n === Hn) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(t)
    );
    t.remove(), t = r;
  }
}
function Rr(e) {
  if (!e || e.nodeType !== Pt)
    throw Yt(), ct;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Nr(e) {
  return e === this.v;
}
function _i(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ir(e) {
  return !_i(e, this.v);
}
let bi = !1, Oe = null;
function hn(e) {
  Oe = e;
}
function Or(e, t = !1, n) {
  Oe = {
    p: Oe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Br(e) {
  var t = (
    /** @type {ComponentContext} */
    Oe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ea(r);
  }
  return e !== void 0 && (t.x = e), Oe = t.p, e ?? /** @type {T} */
  {};
}
function Dr() {
  return !0;
}
const yi = /* @__PURE__ */ new WeakMap();
function gi(e) {
  var t = E;
  if (t === null)
    return x.f |= dt, e;
  if (t.f & Wn)
    Xn(e, t);
  else {
    if (!(t.f & Pr))
      throw !t.parent && e instanceof Error && Mr(e), e;
    t.b.error(e);
  }
}
function Xn(e, t) {
  for (; t !== null; ) {
    if (t.f & Pr)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && Mr(e), e;
}
function Mr(e) {
  const t = yi.get(e);
  t && (Ct(e, "message", {
    value: t.message
  }), Ct(e, "stack", {
    value: t.stack
  }));
}
let qt = [], On = [];
function Fr() {
  var e = qt;
  qt = [], Sr(e);
}
function mi() {
  var e = On;
  On = [], Sr(e);
}
function wi(e) {
  qt.length === 0 && queueMicrotask(Fr), qt.push(e);
}
function $i() {
  qt.length > 0 && Fr(), On.length > 0 && mi();
}
function Ti() {
  for (var e = (
    /** @type {Effect} */
    E.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && ii(), e;
}
// @__NO_SIDE_EFFECTS__
function gn(e) {
  var t = $e | xe, n = x !== null && x.f & $e ? (
    /** @type {Derived} */
    x
  ) : null;
  return E === null || n !== null && n.f & Ee ? t |= Ee : E.f |= Bt, {
    ctx: Oe,
    deps: null,
    effects: null,
    equals: Nr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      le
    ),
    wv: 0,
    parent: n ?? E,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ki(e, t) {
  let n = (
    /** @type {Effect | null} */
    E
  );
  n === null && li();
  var r = (
    /** @type {Boundary} */
    n.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Ht(
    /** @type {V} */
    le
  ), l = null, o = !x;
  return Ii(() => {
    try {
      var u = e();
    } catch (b) {
      u = Promise.reject(b);
    }
    var c = () => u;
    a = (l == null ? void 0 : l.then(c, c)) ?? Promise.resolve(u), l = a;
    var v = (
      /** @type {Batch} */
      X
    ), _ = r.pending;
    o && (r.update_pending_count(1), _ || v.increment());
    const h = (b, p = void 0) => {
      l = null, _ || v.activate(), p ? p !== Gn && (i.f |= dt, _n(i, p)) : (i.f & dt && (i.f ^= dt), _n(i, b)), o && (r.update_pending_count(-1), _ || v.decrement()), zr();
    };
    if (a.then(h, (b) => h(null, b || "unknown")), v)
      return () => {
        queueMicrotask(() => v.neuter());
      };
  }), new Promise((u) => {
    function c(v) {
      function _() {
        v === a ? u(i) : c(a);
      }
      v.then(_, _);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  const t = /* @__PURE__ */ gn(e);
  return fa(t), t;
}
// @__NO_SIDE_EFFECTS__
function Lr(e) {
  const t = /* @__PURE__ */ gn(e);
  return t.equals = Ir, t;
}
function qr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Le(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ei(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & $e))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Zn(e) {
  var t, n = E;
  tt(Ei(e));
  try {
    qr(e), t = ha(e);
  } finally {
    tt(n);
  }
  return t;
}
function Hr(e) {
  var t = Zn(e);
  if (e.equals(t) || (e.v = t, e.wv = va()), !bt)
    if (Ze !== null)
      Ze.set(e, e.v);
    else {
      var n = (Qe || e.f & Ee) && e.deps !== null ? rt : pe;
      we(e, n);
    }
}
function xi(e, t, n) {
  const r = gn;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var a = X, i = (
    /** @type {Effect} */
    E
  ), l = Si(), o = Ti();
  Promise.all(t.map((u) => /* @__PURE__ */ ki(u))).then((u) => {
    a == null || a.activate(), l();
    try {
      n([...e.map(r), ...u]);
    } catch (c) {
      i.f & _t || Xn(c, i);
    }
    a == null || a.deactivate(), zr();
  }).catch((u) => {
    o.error(u);
  });
}
function Si() {
  var e = E, t = x, n = Oe;
  return function() {
    tt(e), qe(t), hn(n);
  };
}
function zr() {
  tt(null), qe(null), hn(null);
}
const Ft = /* @__PURE__ */ new Set();
let X = null, Ze = null, dr = /* @__PURE__ */ new Set(), pn = [];
function jr() {
  const e = (
    /** @type {() => void} */
    pn.shift()
  );
  pn.length > 0 && queueMicrotask(jr), e();
}
let pt = [], mn = null, Bn = !1, un = !1;
var kt, Et, Je, jt, Ut, ut, xt, ft, Xe, St, Vt, Wt, Ie, Ur, fn, Dn;
const yn = class yn {
  constructor() {
    ue(this, Ie);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    ve(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ue(this, kt, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    ue(this, Et, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    ue(this, Je, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    ue(this, jt, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    ue(this, Ut, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    ue(this, ut, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    ue(this, xt, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    ue(this, ft, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    ue(this, Xe, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    ue(this, St, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    ue(this, Vt, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    ue(this, Wt, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    ve(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    pt = [];
    var n = null;
    if (Ft.size > 1) {
      n = /* @__PURE__ */ new Map(), Ze = /* @__PURE__ */ new Map();
      for (const [l, o] of this.current)
        n.set(l, { v: l.v, wv: l.wv }), l.v = o;
      for (const l of Ft)
        if (l !== this)
          for (const [o, u] of $(l, kt))
            n.has(o) || (n.set(o, { v: o.v, wv: o.wv }), o.v = u);
    }
    for (const l of t)
      st(this, Ie, Ur).call(this, l);
    if ($(this, ut).length === 0 && $(this, Je) === 0) {
      st(this, Ie, Dn).call(this);
      var r = $(this, ft), a = $(this, Xe);
      ge(this, ft, []), ge(this, Xe, []), ge(this, St, []), X = null, hr(r), hr(a), X === null ? X = this : Ft.delete(this), (i = $(this, jt)) == null || i.resolve();
    } else
      st(this, Ie, fn).call(this, $(this, ft)), st(this, Ie, fn).call(this, $(this, Xe)), st(this, Ie, fn).call(this, $(this, St));
    if (n) {
      for (const [l, { v: o, wv: u }] of n)
        l.wv <= u && (l.v = o);
      Ze = null;
    }
    for (const l of $(this, ut))
      Tt(l);
    for (const l of $(this, xt))
      Tt(l);
    ge(this, ut, []), ge(this, xt, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    $(this, kt).has(t) || $(this, kt).set(t, n), this.current.set(t, t.v);
  }
  activate() {
    X = this;
  }
  deactivate() {
    X = null;
    for (const t of dr)
      if (dr.delete(t), t(), X !== null)
        break;
  }
  neuter() {
    ge(this, Ut, !0);
  }
  flush() {
    pt.length > 0 ? Vr() : st(this, Ie, Dn).call(this), X === this && ($(this, Je) === 0 && Ft.delete(this), this.deactivate());
  }
  increment() {
    ge(this, Je, $(this, Je) + 1);
  }
  decrement() {
    if (ge(this, Je, $(this, Je) - 1), $(this, Je) === 0) {
      for (const t of $(this, Vt))
        we(t, xe), Nt(t);
      for (const t of $(this, Wt))
        we(t, rt), Nt(t);
      ge(this, ft, []), ge(this, Xe, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    $(this, Et).add(t);
  }
  settled() {
    return ($(this, jt) ?? ge(this, jt, ni())).promise;
  }
  static ensure() {
    if (X === null) {
      const t = X = new yn();
      Ft.add(X), un || yn.enqueue(() => {
        X === t && t.flush();
      });
    }
    return X;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    pn.length === 0 && queueMicrotask(jr), pn.unshift(t);
  }
};
kt = new WeakMap(), Et = new WeakMap(), Je = new WeakMap(), jt = new WeakMap(), Ut = new WeakMap(), ut = new WeakMap(), xt = new WeakMap(), ft = new WeakMap(), Xe = new WeakMap(), St = new WeakMap(), Vt = new WeakMap(), Wt = new WeakMap(), Ie = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Ur = function(t) {
  var v;
  t.f ^= pe;
  for (var n = t.first; n !== null; ) {
    var r = n.f, a = (r & (We | nt)) !== 0, i = a && (r & pe) !== 0, l = i || (r & Ne) !== 0 || this.skipped_effects.has(n);
    if (!l && n.fn !== null) {
      if (a)
        n.f ^= pe;
      else if (r & Vn)
        $(this, Xe).push(n);
      else if (!(r & pe))
        if (r & Kn) {
          var o = (v = n.b) != null && v.pending ? $(this, xt) : $(this, ut);
          o.push(n);
        } else wn(n) && (n.f & Ot && $(this, St).push(n), Tt(n));
      var u = n.first;
      if (u !== null) {
        n = u;
        continue;
      }
    }
    var c = n.parent;
    for (n = n.next; n === null && c !== null; )
      n = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
fn = function(t) {
  for (const n of t)
    (n.f & xe ? $(this, Vt) : $(this, Wt)).push(n), we(n, pe);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Dn = function() {
  if (!$(this, Ut))
    for (const t of $(this, Et))
      t();
  $(this, Et).clear();
};
let Rt = yn;
function U(e) {
  var t = un;
  un = !0;
  try {
    for (var n; ; ) {
      if ($i(), pt.length === 0 && (X == null || X.flush(), pt.length === 0))
        return mn = null, /** @type {T} */
        n;
      Vr();
    }
  } finally {
    un = t;
  }
}
function Vr() {
  var e = $t;
  Bn = !0;
  try {
    var t = 0;
    for (_r(!0); pt.length > 0; ) {
      var n = Rt.ensure();
      if (t++ > 1e3) {
        var r, a;
        Ci();
      }
      n.process(pt), et.clear();
    }
  } finally {
    Bn = !1, _r(e), mn = null;
  }
}
function Ci() {
  try {
    fi();
  } catch (e) {
    Xn(e, mn);
  }
}
let ot = null;
function hr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (_t | Ne)) && wn(r) && (ot = [], Tt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? sa(r) : r.fn = null), ot.length > 0)) {
        et.clear();
        for (const a of ot)
          Tt(a);
        ot = [];
      }
    }
    ot = null;
  }
}
function Nt(e) {
  for (var t = mn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Bn && t === E && n & Ot)
      return;
    if (n & (nt | We)) {
      if (!(n & pe)) return;
      t.f ^= pe;
    }
  }
  pt.push(t);
}
const et = /* @__PURE__ */ new Map();
function Ht(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Nr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function re(e, t) {
  const n = Ht(e);
  return fa(n), n;
}
// @__NO_SIDE_EFFECTS__
function Wr(e, t = !1, n = !0) {
  const r = Ht(e);
  return t || (r.equals = Ir), r;
}
function m(e, t, n = !1) {
  x !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Me || x.f & vr) && Dr() && x.f & ($e | Ot | Kn | vr) && !(_e != null && _e.includes(e)) && pi();
  let r = n ? Fe(t) : t;
  return _n(e, r);
}
function _n(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    bt ? et.set(e, t) : et.set(e, n), e.v = t;
    var r = Rt.ensure();
    r.capture(e, n), e.f & $e && (e.f & xe && Zn(
      /** @type {Derived} */
      e
    ), we(e, e.f & Ee ? rt : pe)), e.wv = va(), Yr(e, xe), E !== null && E.f & pe && !(E.f & (We | nt)) && (Te === null ? Bi([e]) : Te.push(e));
  }
  return t;
}
function rn(e, t = 1) {
  var n = s(e), r = t === 1 ? n++ : n--;
  return m(e, n), r;
}
function Sn(e) {
  m(e, e.v + 1);
}
function Yr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, a = 0; a < r; a++) {
      var i = n[a], l = i.f, o = (l & xe) === 0;
      o && we(i, t), l & $e ? Yr(
        /** @type {Derived} */
        i,
        rt
      ) : o && (l & Ot && ot !== null && ot.push(
        /** @type {Effect} */
        i
      ), Nt(
        /** @type {Effect} */
        i
      ));
    }
}
function Fe(e) {
  if (typeof e != "object" || e === null || Lt in e)
    return e;
  const t = ti(e);
  if (t !== Qa && t !== ei)
    return e;
  var n = /* @__PURE__ */ new Map(), r = jn(e), a = /* @__PURE__ */ re(0), i = ht, l = (o) => {
    if (ht === i)
      return o();
    var u = x, c = ht;
    qe(null), yr(i);
    var v = o();
    return qe(u), yr(c), v;
  };
  return r && n.set("length", /* @__PURE__ */ re(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && di();
        var v = n.get(u);
        return v === void 0 ? v = l(() => {
          var _ = /* @__PURE__ */ re(c.value);
          return n.set(u, _), _;
        }) : m(v, c.value, !0), !0;
      },
      deleteProperty(o, u) {
        var c = n.get(u);
        if (c === void 0) {
          if (u in o) {
            const v = l(() => /* @__PURE__ */ re(le));
            n.set(u, v), Sn(a);
          }
        } else
          m(c, le), Sn(a);
        return !0;
      },
      get(o, u, c) {
        var b;
        if (u === Lt)
          return e;
        var v = n.get(u), _ = u in o;
        if (v === void 0 && (!_ || (b = vt(o, u)) != null && b.writable) && (v = l(() => {
          var p = Fe(_ ? o[u] : le), d = /* @__PURE__ */ re(p);
          return d;
        }), n.set(u, v)), v !== void 0) {
          var h = s(v);
          return h === le ? void 0 : h;
        }
        return Reflect.get(o, u, c);
      },
      getOwnPropertyDescriptor(o, u) {
        var c = Reflect.getOwnPropertyDescriptor(o, u);
        if (c && "value" in c) {
          var v = n.get(u);
          v && (c.value = s(v));
        } else if (c === void 0) {
          var _ = n.get(u), h = _ == null ? void 0 : _.v;
          if (_ !== void 0 && h !== le)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return c;
      },
      has(o, u) {
        var h;
        if (u === Lt)
          return !0;
        var c = n.get(u), v = c !== void 0 && c.v !== le || Reflect.has(o, u);
        if (c !== void 0 || E !== null && (!v || (h = vt(o, u)) != null && h.writable)) {
          c === void 0 && (c = l(() => {
            var b = v ? Fe(o[u]) : le, p = /* @__PURE__ */ re(b);
            return p;
          }), n.set(u, c));
          var _ = s(c);
          if (_ === le)
            return !1;
        }
        return v;
      },
      set(o, u, c, v) {
        var g;
        var _ = n.get(u), h = u in o;
        if (r && u === "length")
          for (var b = c; b < /** @type {Source<number>} */
          _.v; b += 1) {
            var p = n.get(b + "");
            p !== void 0 ? m(p, le) : b in o && (p = l(() => /* @__PURE__ */ re(le)), n.set(b + "", p));
          }
        if (_ === void 0)
          (!h || (g = vt(o, u)) != null && g.writable) && (_ = l(() => /* @__PURE__ */ re(void 0)), m(_, Fe(c)), n.set(u, _));
        else {
          h = _.v !== le;
          var d = l(() => Fe(c));
          m(_, d);
        }
        var k = Reflect.getOwnPropertyDescriptor(o, u);
        if (k != null && k.set && k.set.call(v, c), !h) {
          if (r && typeof u == "string") {
            var B = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(u);
            Number.isInteger(P) && P >= B.v && m(B, P + 1);
          }
          Sn(a);
        }
        return !0;
      },
      ownKeys(o) {
        s(a);
        var u = Reflect.ownKeys(o).filter((_) => {
          var h = n.get(_);
          return h === void 0 || h.v !== le;
        });
        for (var [c, v] of n)
          v.v !== le && !(c in o) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        hi();
      }
    }
  );
}
var pr, Kr, Gr, Jr;
function Mn() {
  if (pr === void 0) {
    pr = window, Kr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Gr = vt(t, "firstChild").get, Jr = vt(t, "nextSibling").get, cr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), cr(n) && (n.__t = void 0);
  }
}
function Ue(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  return Gr.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return Jr.call(e);
}
function K(e, t) {
  if (!I)
    return /* @__PURE__ */ je(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ je(O)
  );
  if (n === null)
    n = O.appendChild(Ue());
  else if (t && n.nodeType !== Jn) {
    var r = Ue();
    return n == null || n.before(r), Se(r), r;
  }
  return Se(n), n;
}
function Cn(e, t) {
  if (!I) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ je(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ye(n) : n;
  }
  return O;
}
function ne(e, t = 1, n = !1) {
  let r = I ? O : e;
  for (var a; t--; )
    a = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ye(r);
  if (!I)
    return r;
  if (n && (r == null ? void 0 : r.nodeType) !== Jn) {
    var i = Ue();
    return r === null ? a == null || a.after(i) : r.before(i), Se(i), i;
  }
  return Se(r), /** @type {TemplateNode} */
  r;
}
function Xr(e) {
  e.textContent = "";
}
function Zr() {
  return !1;
}
function Qr(e) {
  var t = x, n = E;
  qe(null), tt(null);
  try {
    return e();
  } finally {
    qe(t), tt(n);
  }
}
function Pi(e) {
  E === null && x === null && ui(), x !== null && x.f & Ee && E === null && oi(), bt && si();
}
function Ai(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ke(e, t, n, r = !0) {
  var a = E;
  a !== null && a.f & Ne && (e |= Ne);
  var i = {
    ctx: Oe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | xe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Tt(i), i.f |= Wn;
    } catch (u) {
      throw Le(i), u;
    }
  else t !== null && Nt(i);
  if (r) {
    var l = i;
    if (n && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && // either `null`, or a singular child
    !(l.f & Bt) && (l = l.first), l !== null && (l.parent = a, a !== null && Ai(l, a), x !== null && x.f & $e && !(e & nt))) {
      var o = (
        /** @type {Derived} */
        x
      );
      (o.effects ?? (o.effects = [])).push(l);
    }
  }
  return i;
}
function mt(e) {
  Pi();
  var t = (
    /** @type {Effect} */
    E.f
  ), n = !x && (t & We) !== 0 && (t & Wn) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Oe
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return ea(e);
}
function ea(e) {
  return Ke(Vn | ai, e, !1);
}
function Ri(e) {
  Rt.ensure();
  const t = Ke(nt | Bt, e, !0);
  return () => {
    Le(t);
  };
}
function Ni(e) {
  Rt.ensure();
  const t = Ke(nt | Bt, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Qn(t, () => {
      Le(t), r(void 0);
    }) : (Le(t), r(void 0));
  });
}
function ta(e) {
  return Ke(Vn, e, !1);
}
function Ii(e) {
  return Ke(Kn | Bt, e, !0);
}
function na(e, t = 0) {
  return Ke(Cr | t, e, !0);
}
function de(e, t = [], n = []) {
  xi(t, n, (r) => {
    Ke(Cr, () => e(...r.map(s)), !0);
  });
}
function ra(e, t = 0) {
  var n = Ke(Ot | t, e, !0);
  return n;
}
function It(e, t = !0) {
  return Ke(We | Bt, e, !0, t);
}
function aa(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = bt, r = x;
    br(!0), qe(null);
    try {
      t.call(null);
    } finally {
      br(n), qe(r);
    }
  }
}
function ia(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const a = n.ac;
    a !== null && Qr(() => {
      a.abort(Gn);
    });
    var r = n.next;
    n.f & nt ? n.parent = null : Le(n, t), n = r;
  }
}
function Oi(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & We || Le(t), t = n;
  }
}
function Le(e, t = !0) {
  var n = !1;
  (t || e.f & ri) && e.nodes_start !== null && e.nodes_end !== null && (la(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), ia(e, t && !n), bn(e, 0), we(e, _t);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  aa(e);
  var a = e.parent;
  a !== null && a.first !== null && sa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function la(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(e)
    );
    e.remove(), e = n;
  }
}
function sa(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Qn(e, t) {
  var n = [];
  er(e, n, !0), oa(n, () => {
    Le(e), t && t();
  });
}
function oa(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var a of e)
      a.out(r);
  } else
    t();
}
function er(e, t, n) {
  if (!(e.f & Ne)) {
    if (e.f ^= Ne, e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || n) && t.push(l);
    for (var r = e.first; r !== null; ) {
      var a = r.next, i = (r.f & Yn) !== 0 || (r.f & We) !== 0;
      er(r, t, i ? n : !1), r = a;
    }
  }
}
function tr(e) {
  ua(e, !0);
}
function ua(e, t) {
  if (e.f & Ne) {
    e.f ^= Ne, e.f & pe || (we(e, xe), Nt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & Yn) !== 0 || (n.f & We) !== 0;
      ua(n, a ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let $t = !1;
function _r(e) {
  $t = e;
}
let bt = !1;
function br(e) {
  bt = e;
}
let x = null, Me = !1;
function qe(e) {
  x = e;
}
let E = null;
function tt(e) {
  E = e;
}
let _e = null;
function fa(e) {
  x !== null && (_e === null ? _e = [e] : _e.push(e));
}
let he = null, me = 0, Te = null;
function Bi(e) {
  Te = e;
}
let ca = 1, zt = 0, ht = zt;
function yr(e) {
  ht = e;
}
let Qe = !1;
function va() {
  return ++ca;
}
function wn(e) {
  var _;
  var t = e.f;
  if (t & xe)
    return !0;
  if (t & rt) {
    var n = e.deps, r = (t & Ee) !== 0;
    if (n !== null) {
      var a, i, l = (t & dn) !== 0, o = r && E !== null && !Qe, u = n.length;
      if ((l || o) && (E === null || !(E.f & _t))) {
        var c = (
          /** @type {Derived} */
          e
        ), v = c.parent;
        for (a = 0; a < u; a++)
          i = n[a], (l || !((_ = i == null ? void 0 : i.reactions) != null && _.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        l && (c.f ^= dn), o && v !== null && !(v.f & Ee) && (c.f ^= Ee);
      }
      for (a = 0; a < u; a++)
        if (i = n[a], wn(
          /** @type {Derived} */
          i
        ) && Hr(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || E !== null && !Qe) && we(e, pe);
  }
  return !1;
}
function da(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(_e != null && _e.includes(e)))
    for (var a = 0; a < r.length; a++) {
      var i = r[a];
      i.f & $e ? da(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? we(i, xe) : i.f & pe && we(i, rt), Nt(
        /** @type {Effect} */
        i
      ));
    }
}
function ha(e) {
  var d;
  var t = he, n = me, r = Te, a = x, i = Qe, l = _e, o = Oe, u = Me, c = ht, v = e.f;
  he = /** @type {null | Value[]} */
  null, me = 0, Te = null, Qe = (v & Ee) !== 0 && (Me || !$t || x === null), x = v & (We | nt) ? null : e, _e = null, hn(e.ctx), Me = !1, ht = ++zt, e.ac !== null && (Qr(() => {
    e.ac.abort(Gn);
  }), e.ac = null);
  try {
    e.f |= Nn;
    var _ = (
      /** @type {Function} */
      e.fn
    ), h = _(), b = e.deps;
    if (he !== null) {
      var p;
      if (bn(e, me), b !== null && me > 0)
        for (b.length = me + he.length, p = 0; p < he.length; p++)
          b[me + p] = he[p];
      else
        e.deps = b = he;
      if (!Qe || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      v & $e && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (p = me; p < b.length; p++)
          ((d = b[p]).reactions ?? (d.reactions = [])).push(e);
    } else b !== null && me < b.length && (bn(e, me), b.length = me);
    if (Dr() && Te !== null && !Me && b !== null && !(e.f & ($e | rt | xe)))
      for (p = 0; p < /** @type {Source[]} */
      Te.length; p++)
        da(
          Te[p],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (zt++, Te !== null && (r === null ? r = Te : r.push(.../** @type {Source[]} */
    Te))), e.f & dt && (e.f ^= dt), h;
  } catch (k) {
    return gi(k);
  } finally {
    e.f ^= Nn, he = t, me = n, Te = r, x = a, Qe = i, _e = l, hn(o), Me = u, ht = c;
  }
}
function Di(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Za.call(n, e);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = t.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  n === null && t.f & $e && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (he === null || !he.includes(t)) && (we(t, rt), t.f & (Ee | dn) || (t.f ^= dn), qr(
    /** @type {Derived} **/
    t
  ), bn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function bn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Di(e, n[r]);
}
function Tt(e) {
  var t = e.f;
  if (!(t & _t)) {
    we(e, pe);
    var n = E, r = $t;
    E = e, $t = !0;
    try {
      t & Ot ? Oi(e) : ia(e), aa(e);
      var a = ha(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = ca;
      var i;
      xr && bi && e.f & xe && e.deps;
    } finally {
      $t = r, E = n;
    }
  }
}
async function Mi() {
  await Promise.resolve(), U();
}
function s(e) {
  var t = e.f, n = (t & $e) !== 0;
  if (x !== null && !Me) {
    var r = E !== null && (E.f & _t) !== 0;
    if (!r && !(_e != null && _e.includes(e))) {
      var a = x.deps;
      if (x.f & Nn)
        e.rv < zt && (e.rv = zt, he === null && a !== null && a[me] === e ? me++ : he === null ? he = [e] : (!Qe || !he.includes(e)) && he.push(e));
      else {
        (x.deps ?? (x.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [x] : i.includes(x) || i.push(x);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var l = (
      /** @type {Derived} */
      e
    ), o = l.parent;
    o !== null && !(o.f & Ee) && (l.f ^= Ee);
  }
  if (bt) {
    if (et.has(e))
      return et.get(e);
    if (n) {
      l = /** @type {Derived} */
      e;
      var u = l.v;
      return (!(l.f & pe) && l.reactions !== null || pa(l)) && (u = Zn(l)), et.set(l, u), u;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    e, Ze != null && Ze.has(l))
      return Ze.get(l);
    wn(l) && Hr(l);
  }
  if (e.f & dt)
    throw e.v;
  return e.v;
}
function pa(e) {
  if (e.v === le) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (et.has(t) || t.f & $e && pa(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function _a(e) {
  var t = Me;
  try {
    return Me = !0, e();
  } finally {
    Me = t;
  }
}
const Fi = -7169;
function we(e, t) {
  e.f = e.f & Fi | t;
}
const ba = /* @__PURE__ */ new Set(), Fn = /* @__PURE__ */ new Set();
function Li(e) {
  for (var t = 0; t < e.length; t++)
    ba.add(e[t]);
  for (var n of Fn)
    n(e);
}
let gr = null;
function an(e) {
  var P;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, a = ((P = e.composedPath) == null ? void 0 : P.call(e)) || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  gr = e;
  var l = 0, o = gr === e && e.__root;
  if (o) {
    var u = a.indexOf(o);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = a.indexOf(t);
    if (c === -1)
      return;
    u <= c && (l = u);
  }
  if (i = /** @type {Element} */
  a[l] || e.target, i !== t) {
    Ct(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var v = x, _ = E;
    qe(null), tt(null);
    try {
      for (var h, b = []; i !== null; ) {
        var p = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var d = i["__" + r];
          if (d != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (jn(d)) {
              var [k, ...B] = d;
              k.apply(i, [e, ...B]);
            } else
              d.call(i, e);
        } catch (g) {
          h ? b.push(g) : h = g;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        i = p;
      }
      if (h) {
        for (let g of b)
          queueMicrotask(() => {
            throw g;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, qe(v), tt(_);
    }
  }
}
function ya(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ve(e, t) {
  var n = (
    /** @type {Effect} */
    E
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  var n = (t & Xa) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    if (I)
      return Ve(O, null), O;
    r === void 0 && (r = ya(a ? e : "<!>" + e), r = /** @type {Node} */
    /* @__PURE__ */ je(r));
    var i = (
      /** @type {TemplateNode} */
      n || Kr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Ve(i, i), i;
  };
}
function mr(e = "") {
  if (!I) {
    var t = Ue(e + "");
    return Ve(t, t), t;
  }
  var n = O;
  return n.nodeType !== Jn && (n.before(n = Ue()), Se(n)), Ve(n, n), n;
}
function Pn() {
  if (I)
    return Ve(O, null), O;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ue();
  return e.append(t, n), Ve(t, n), e;
}
function N(e, t) {
  if (I) {
    E.nodes_end = O, At();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const qi = ["touchstart", "touchmove"];
function Hi(e) {
  return qi.includes(e);
}
function Re(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function ga(e, t) {
  return ma(e, t);
}
function zi(e, t) {
  Mn(), t.intro = t.intro ?? !1;
  const n = t.target, r = I, a = O;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ je(n)
    ); i && (i.nodeType !== Pt || /** @type {Comment} */
    i.data !== Er); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(i);
    if (!i)
      throw ct;
    ze(!0), Se(
      /** @type {Comment} */
      i
    ), At();
    const l = ma(e, { ...t, anchor: i });
    if (O === null || O.nodeType !== Pt || /** @type {Comment} */
    O.data !== zn)
      throw Yt(), ct;
    return ze(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l instanceof Error && l.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw l;
    return l !== ct && console.warn("Failed to hydrate: ", l), t.recover === !1 && ci(), Mn(), Xr(n), ze(!1), ga(e, t);
  } finally {
    ze(r), Se(a);
  }
}
const wt = /* @__PURE__ */ new Map();
function ma(e, { target: t, anchor: n, props: r = {}, events: a, context: i, intro: l = !0 }) {
  Mn();
  var o = /* @__PURE__ */ new Set(), u = (_) => {
    for (var h = 0; h < _.length; h++) {
      var b = _[h];
      if (!o.has(b)) {
        o.add(b);
        var p = Hi(b);
        t.addEventListener(b, an, { passive: p });
        var d = wt.get(b);
        d === void 0 ? (document.addEventListener(b, an, { passive: p }), wt.set(b, 1)) : wt.set(b, d + 1);
      }
    }
  };
  u(Un(ba)), Fn.add(u);
  var c = void 0, v = Ni(() => {
    var _ = n ?? t.appendChild(Ue());
    return It(() => {
      if (i) {
        Or({});
        var h = (
          /** @type {ComponentContext} */
          Oe
        );
        h.c = i;
      }
      a && (r.$$events = a), I && Ve(
        /** @type {TemplateNode} */
        _,
        null
      ), c = e(_, r) || {}, I && (E.nodes_end = O), i && Br();
    }), () => {
      var p;
      for (var h of o) {
        t.removeEventListener(h, an);
        var b = (
          /** @type {number} */
          wt.get(h)
        );
        --b === 0 ? (document.removeEventListener(h, an), wt.delete(h)) : wt.set(h, b);
      }
      Fn.delete(u), _ !== n && ((p = _.parentNode) == null || p.removeChild(_));
    };
  });
  return Ln.set(c, v), c;
}
let Ln = /* @__PURE__ */ new WeakMap();
function ji(e, t) {
  const n = Ln.get(e);
  return n ? (Ln.delete(e), n(t)) : Promise.resolve();
}
function j(e, t, n = !1) {
  I && At();
  var r = e, a = null, i = null, l = le, o = n ? Yn : 0, u = !1;
  const c = (b, p = !0) => {
    u = !0, h(p, b);
  };
  var v = null;
  function _() {
    v !== null && (v.lastChild.remove(), r.before(v), v = null);
    var b = l ? a : i, p = l ? i : a;
    b && tr(b), p && Qn(p, () => {
      l ? i = null : a = null;
    });
  }
  const h = (b, p) => {
    if (l === (l = b)) return;
    let d = !1;
    if (I) {
      const T = Rr(r) === Hn;
      !!l === T && (r = In(), Se(r), ze(!1), d = !0);
    }
    var k = Zr(), B = r;
    if (k && (v = document.createDocumentFragment(), v.append(B = Ue())), l ? a ?? (a = p && It(() => p(B))) : i ?? (i = p && It(() => p(B))), k) {
      var P = (
        /** @type {Batch} */
        X
      ), g = l ? a : i, S = l ? i : a;
      g && P.skipped_effects.delete(g), S && P.skipped_effects.add(S), P.add_callback(_);
    } else
      _();
    d && ze(!0);
  };
  ra(() => {
    u = !1, t(c), u || h(null, null);
  }, o), I && (r = O);
}
function ln(e, t) {
  return t;
}
function Ui(e, t, n) {
  for (var r = e.items, a = [], i = t.length, l = 0; l < i; l++)
    er(t[l].e, a, !0);
  var o = i > 0 && a.length === 0 && n !== null;
  if (o) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Xr(u), u.append(
      /** @type {Element} */
      n
    ), r.clear(), De(e, t[0].prev, t[i - 1].next);
  }
  oa(a, () => {
    for (var c = 0; c < i; c++) {
      var v = t[c];
      o || (r.delete(v.k), De(e, v.prev, v.next)), Le(v.e, !o);
    }
  });
}
function sn(e, t, n, r, a, i = null) {
  var l = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  I && At();
  var u = null, c = !1, v = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ Lr(() => {
    var d = n();
    return jn(d) ? d : d == null ? [] : Un(d);
  }), h, b;
  function p() {
    Vi(
      b,
      h,
      o,
      v,
      l,
      a,
      t,
      r,
      n
    ), i !== null && (h.length === 0 ? u ? tr(u) : u = It(() => i(l)) : u !== null && Qn(u, () => {
      u = null;
    }));
  }
  ra(() => {
    b ?? (b = /** @type {Effect} */
    E), h = /** @type {V[]} */
    s(_);
    var d = h.length;
    if (c && d === 0)
      return;
    c = d === 0;
    let k = !1;
    if (I) {
      var B = Rr(l) === Hn;
      B !== (d === 0) && (l = In(), Se(l), ze(!1), k = !0);
    }
    if (I) {
      for (var P = null, g, S = 0; S < d; S++) {
        if (O.nodeType === Pt && /** @type {Comment} */
        O.data === zn) {
          l = /** @type {Comment} */
          O, k = !0, ze(!1);
          break;
        }
        var T = h[S], Z = r(T, S);
        g = qn(
          O,
          o,
          P,
          null,
          T,
          Z,
          S,
          a,
          t,
          n
        ), o.items.set(Z, g), P = g;
      }
      d > 0 && Se(In());
    }
    if (I)
      d === 0 && i && (u = It(() => i(l)));
    else if (Zr()) {
      var be = /* @__PURE__ */ new Set(), ye = (
        /** @type {Batch} */
        X
      );
      for (S = 0; S < d; S += 1) {
        T = h[S], Z = r(T, S);
        var M = o.items.get(Z) ?? v.get(Z);
        M ? wa(M, T, S) : (g = qn(
          null,
          o,
          null,
          null,
          T,
          Z,
          S,
          a,
          t,
          n,
          !0
        ), v.set(Z, g)), be.add(Z);
      }
      for (const [A, at] of o.items)
        be.has(A) || ye.skipped_effects.add(at.e);
      ye.add_callback(p);
    } else
      p();
    k && ze(!0), s(_);
  }), I && (l = O);
}
function Vi(e, t, n, r, a, i, l, o, u) {
  var c = t.length, v = n.items, _ = n.first, h = _, b, p = null, d = [], k = [], B, P, g, S;
  for (S = 0; S < c; S += 1) {
    if (B = t[S], P = o(B, S), g = v.get(P), g === void 0) {
      var T = r.get(P);
      if (T !== void 0) {
        r.delete(P), v.set(P, T);
        var Z = p ? p.next : h;
        De(n, p, T), De(n, T, Z), An(T, Z, a), p = T;
      } else {
        var be = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : a;
        p = qn(
          be,
          n,
          p,
          p === null ? n.first : p.next,
          B,
          P,
          S,
          i,
          l,
          u
        );
      }
      v.set(P, p), d = [], k = [], h = p.next;
      continue;
    }
    if (wa(g, B, S), g.e.f & Ne && tr(g.e), g !== h) {
      if (b !== void 0 && b.has(g)) {
        if (d.length < k.length) {
          var ye = k[0], M;
          p = ye.prev;
          var A = d[0], at = d[d.length - 1];
          for (M = 0; M < d.length; M += 1)
            An(d[M], ye, a);
          for (M = 0; M < k.length; M += 1)
            b.delete(k[M]);
          De(n, A.prev, at.next), De(n, p, A), De(n, at, ye), h = ye, p = at, S -= 1, d = [], k = [];
        } else
          b.delete(g), An(g, h, a), De(n, g.prev, g.next), De(n, g, p === null ? n.first : p.next), De(n, p, g), p = g;
        continue;
      }
      for (d = [], k = []; h !== null && h.k !== P; )
        h.e.f & Ne || (b ?? (b = /* @__PURE__ */ new Set())).add(h), k.push(h), h = h.next;
      if (h === null)
        continue;
      g = h;
    }
    d.push(g), p = g, h = g.next;
  }
  if (h !== null || b !== void 0) {
    for (var yt = b === void 0 ? [] : Un(b); h !== null; )
      h.e.f & Ne || yt.push(h), h = h.next;
    var Kt = yt.length;
    if (Kt > 0) {
      var Gt = null;
      Ui(n, yt, Gt);
    }
  }
  e.first = n.first && n.first.e, e.last = p && p.e;
  for (var $n of r.values())
    Le($n.e);
  r.clear();
}
function wa(e, t, n, r) {
  _n(e.v, t), e.i = n;
}
function qn(e, t, n, r, a, i, l, o, u, c, v) {
  var _ = (u & Ua) !== 0, h = (u & Wa) === 0, b = _ ? h ? /* @__PURE__ */ Wr(a, !1, !1) : Ht(a) : a, p = u & Va ? Ht(l) : l, d = {
    i: p,
    v: b,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (e === null) {
      var k = document.createDocumentFragment();
      k.append(e = Ue());
    }
    return d.e = It(() => o(
      /** @type {Node} */
      e,
      b,
      p,
      c
    ), I), d.e.prev = n && n.e, d.e.next = r && r.e, n === null ? v || (t.first = d) : (n.next = d, n.e.next = d.e), r !== null && (r.prev = d, r.e.prev = d.e), d;
  } finally {
  }
}
function An(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, a = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== null && i !== r; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ye(i)
    );
    a.before(i), i = l;
  }
}
function De(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function wr(e, t, n = !1, r = !1, a = !1) {
  var i = e, l = "";
  de(() => {
    var o = (
      /** @type {Effect} */
      E
    );
    if (l === (l = t() ?? "")) {
      I && At();
      return;
    }
    if (o.nodes_start !== null && (la(
      o.nodes_start,
      /** @type {TemplateNode} */
      o.nodes_end
    ), o.nodes_start = o.nodes_end = null), l !== "") {
      if (I) {
        O.data;
        for (var u = At(), c = u; u !== null && (u.nodeType !== Pt || /** @type {Comment} */
        u.data !== ""); )
          c = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ Ye(u);
        if (u === null)
          throw Yt(), ct;
        Ve(O, c), i = Se(u);
        return;
      }
      var v = l + "";
      n ? v = `<svg>${v}</svg>` : r && (v = `<math>${v}</math>`);
      var _ = ya(v);
      if ((n || r) && (_ = /** @type {Element} */
      /* @__PURE__ */ je(_)), Ve(
        /** @type {TemplateNode} */
        /* @__PURE__ */ je(_),
        /** @type {TemplateNode} */
        _.lastChild
      ), n || r)
        for (; /* @__PURE__ */ je(_); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ je(_)
          );
      else
        i.before(_);
    }
  });
}
function Wi(e, t) {
  ta(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const a = document.createElement("style");
      a.id = t.hash, a.textContent = t.code, r.appendChild(a);
    }
  });
}
function Yi(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r = r ? r + " " + t : t, r === "" ? null : r;
}
function Ki(e, t) {
  return e == null ? null : String(e);
}
function Rn(e, t, n, r, a, i) {
  var l = e.__className;
  if (I || l !== n || l === void 0) {
    var o = Yi(n, r);
    (!I || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = n;
  }
  return i;
}
function Gi(e, t, n, r) {
  var a = e.__style;
  if (I || a !== t) {
    var i = Ki(t);
    (!I || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  }
  return r;
}
function $r(e, t) {
  return e === t || (e == null ? void 0 : e[Lt]) === t;
}
function Tr(e = {}, t, n, r) {
  return ta(() => {
    var a, i;
    return na(() => {
      a = i, i = [], _a(() => {
        e !== n(...i) && (t(e, ...i), a && $r(n(...a), e) && t(null, ...a));
      });
    }), () => {
      wi(() => {
        i && $r(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
let on = !1;
function Ji(e) {
  var t = on;
  try {
    return on = !1, [e(), on];
  } finally {
    on = t;
  }
}
function J(e, t, n, r) {
  var P;
  var a = (n & Ga) !== 0, i = (n & Ja) !== 0, l = (
    /** @type {V} */
    r
  ), o = !0, u = () => (o && (o = !1, l = i ? _a(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), l), c;
  if (a) {
    var v = Lt in e || Ar in e;
    c = ((P = vt(e, t)) == null ? void 0 : P.set) ?? (v && t in e ? (g) => e[t] = g : void 0);
  }
  var _, h = !1;
  a ? [_, h] = Ji(() => (
    /** @type {V} */
    e[t]
  )) : _ = /** @type {V} */
  e[t], _ === void 0 && r !== void 0 && (_ = u(), c && (vi(), c(_)));
  var b;
  if (b = () => {
    var g = (
      /** @type {V} */
      e[t]
    );
    return g === void 0 ? u() : (o = !0, g);
  }, !(n & Ka))
    return b;
  if (c) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      function(g, S) {
        return arguments.length > 0 ? ((!S || p || h) && c(S ? b() : g), g) : b();
      }
    );
  }
  var d = !1, k = (n & Ya ? gn : Lr)(() => (d = !1, b()));
  a && s(k);
  var B = (
    /** @type {Effect} */
    E
  );
  return (
    /** @type {() => V} */
    function(g, S) {
      if (arguments.length > 0) {
        const T = S ? s(k) : a ? Fe(g) : g;
        return m(k, T), d = !0, l !== void 0 && (l = T), g;
      }
      return bt && d || B.f & _t ? k.v : s(k);
    }
  );
}
function Xi(e) {
  return new Zi(e);
}
var He, ke;
class Zi {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    ue(this, He);
    /** @type {Record<string, any>} */
    ue(this, ke);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (l, o) => {
      var u = /* @__PURE__ */ Wr(o, !1, !1);
      return n.set(l, u), u;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(l, o) {
          return s(n.get(o) ?? r(o, Reflect.get(l, o)));
        },
        has(l, o) {
          return o === Ar ? !0 : (s(n.get(o) ?? r(o, Reflect.get(l, o))), Reflect.has(l, o));
        },
        set(l, o, u) {
          return m(n.get(o) ?? r(o, u), u), Reflect.set(l, o, u);
        }
      }
    );
    ge(this, ke, (t.hydrate ? zi : ga)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && U(), ge(this, He, a.$$events);
    for (const l of Object.keys($(this, ke)))
      l === "$set" || l === "$destroy" || l === "$on" || Ct(this, l, {
        get() {
          return $(this, ke)[l];
        },
        /** @param {any} value */
        set(o) {
          $(this, ke)[l] = o;
        },
        enumerable: !0
      });
    $(this, ke).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(a, l);
    }, $(this, ke).$destroy = () => {
      ji($(this, ke));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    $(this, ke).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    $(this, He)[t] = $(this, He)[t] || [];
    const r = (...a) => n.call(this, ...a);
    return $(this, He)[t].push(r), () => {
      $(this, He)[t] = $(this, He)[t].filter(
        /** @param {any} fn */
        (a) => a !== r
      );
    };
  }
  $destroy() {
    $(this, ke).$destroy();
  }
}
He = new WeakMap(), ke = new WeakMap();
let $a;
typeof HTMLElement == "function" && ($a = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    ve(this, "$$ctor");
    /** Slots */
    ve(this, "$$s");
    /** @type {any} The Svelte component instance */
    ve(this, "$$c");
    /** Whether or not the custom element is connected */
    ve(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ve(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ve(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ve(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ve(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ve(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ve(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const a = this.$$c.$on(t, n);
      this.$$l_u.set(n, a);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const a = this.$$l_u.get(n);
      a && (a(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(a) {
        return (i) => {
          const l = document.createElement("slot");
          a !== "default" && (l.name = a), N(i, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Qi(this);
      for (const a of this.$$s)
        a in r && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), n.default = !0) : n[a] = t(a));
      for (const a of this.attributes) {
        const i = this.$$g_p(a.name);
        i in this.$$d || (this.$$d[i] = cn(i, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = Xi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Ri(() => {
        na(() => {
          var a;
          this.$$r = !0;
          for (const i of vn(this.$$c)) {
            if (!((a = this.$$p_d[i]) != null && a.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const l = cn(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, l);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const i of this.$$l[a]) {
          const l = this.$$c.$on(a, i);
          this.$$l_u.set(i, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, r) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = cn(t, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return vn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function cn(e, t, n, r) {
  var i;
  const a = (i = n[e]) == null ? void 0 : i.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (a) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (a) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Qi(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function el(e, t, n, r, a, i) {
  let l = class extends $a {
    constructor() {
      super(e, n, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return vn(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return vn(t).forEach((o) => {
    Ct(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var _;
        u = cn(o, u, t), this.$$d[o] = u;
        var c = this.$$c;
        if (c) {
          var v = (_ = vt(c, o)) == null ? void 0 : _.get;
          v ? c[o] = u : c.$set({ [o]: u });
        }
      }
    });
  }), r.forEach((o) => {
    Ct(l.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), e.element = /** @type {any} */
  l, l;
}
const tl = {
  background: "#0d1117",
  foreground: "#c9d1d9",
  border: "#30363d",
  headerBg: "#161b22",
  headerFg: "#8b949e",
  prompt: "#58a6ff",
  command: "#79c0ff",
  output: "#c9d1d9",
  error: "#ff7b72",
  warning: "#ffa657",
  info: "#58a6ff",
  success: "#56d364",
  selection: "#264f78",
  cursor: "#58a6ff"
}, nl = {
  background: "#ffffff",
  foreground: "#24292f",
  border: "#d0d7de",
  headerBg: "#f6f8fa",
  headerFg: "#57606a",
  prompt: "#0969da",
  command: "#0550ae",
  output: "#24292f",
  error: "#cf222e",
  warning: "#9a6700",
  info: "#0969da",
  success: "#1a7f37",
  selection: "#b6e3ff",
  cursor: "#0969da"
};
function rl(e, t) {
  const n = t.style;
  n.setProperty("--terminal-bg", e.background), n.setProperty("--terminal-fg", e.foreground), n.setProperty("--terminal-border", e.border), n.setProperty("--terminal-header-bg", e.headerBg), n.setProperty("--terminal-header-fg", e.headerFg), n.setProperty("--terminal-prompt", e.prompt), n.setProperty("--terminal-command", e.command), n.setProperty("--terminal-output", e.output), n.setProperty("--terminal-error", e.error), n.setProperty("--terminal-warning", e.warning), n.setProperty("--terminal-info", e.info), n.setProperty("--terminal-success", e.success), n.setProperty("--terminal-selection", e.selection), n.setProperty("--terminal-cursor", e.cursor);
}
function al(e, t) {
  return { ...e, ...t };
}
var il = /* @__PURE__ */ q('<div class="terminal-buttons svelte-1p7uhy"><span class="terminal-button close svelte-1p7uhy"></span> <span class="terminal-button minimize svelte-1p7uhy"></span> <span class="terminal-button maximize svelte-1p7uhy"></span></div>'), ll = /* @__PURE__ */ q('<button class="control-button svelte-1p7uhy"> </button>'), sl = /* @__PURE__ */ q('<button class="control-button svelte-1p7uhy">↺</button>'), ol = /* @__PURE__ */ q('<button class="control-button svelte-1p7uhy"> </button>'), ul = /* @__PURE__ */ q('<div class="terminal-controls svelte-1p7uhy"><!> <!> <!></div>'), fl = /* @__PURE__ */ q('<div class="terminal-header svelte-1p7uhy"><!> <div class="terminal-title svelte-1p7uhy"> </div> <!></div>'), cl = /* @__PURE__ */ q('<span class="tab-icon svelte-1p7uhy"> </span>'), vl = /* @__PURE__ */ q('<span class="tab-badge svelte-1p7uhy"> </span>'), dl = /* @__PURE__ */ q('<span class="tab-close svelte-1p7uhy" role="button" tabindex="0">×</span>'), hl = /* @__PURE__ */ q('<button><!> <span class="tab-title svelte-1p7uhy"> </span> <!> <!></button>'), pl = /* @__PURE__ */ q('<button class="terminal-tab tab-add svelte-1p7uhy">+</button>'), _l = /* @__PURE__ */ q('<div class="terminal-tabs svelte-1p7uhy"><!> <!></div>'), bl = (e, t) => {
  (e.key === "Enter" || e.key === " ") && t();
}, yl = /* @__PURE__ */ q('<span class="rich-text-segment svelte-1p7uhy"><!></span>'), gl = /* @__PURE__ */ q('<span class="typing-cursor svelte-1p7uhy">▊</span>'), ml = /* @__PURE__ */ q('<div><pre class="svelte-1p7uhy"><!><!><!></pre></div>'), wl = /* @__PURE__ */ q('<div class="terminal-cursor svelte-1p7uhy">▊</div>'), $l = /* @__PURE__ */ q('<span class="tab-icon svelte-1p7uhy"> </span>'), Tl = /* @__PURE__ */ q('<span class="tab-badge svelte-1p7uhy"> </span>'), kl = /* @__PURE__ */ q('<span class="tab-close svelte-1p7uhy" role="button" tabindex="0">×</span>'), El = /* @__PURE__ */ q('<button><!> <span class="tab-title svelte-1p7uhy"> </span> <!> <!></button>'), xl = /* @__PURE__ */ q('<button class="terminal-tab tab-add svelte-1p7uhy">+</button>'), Sl = /* @__PURE__ */ q('<div class="terminal-tabs terminal-tabs-bottom svelte-1p7uhy"><!> <!></div>'), Cl = /* @__PURE__ */ q('<div class="terminal svelte-1p7uhy"><!> <!> <div class="terminal-content svelte-1p7uhy" role="button" aria-label="Terminal output - click to skip typing animation" tabindex="0"><!> <!></div> <!></div>');
const Pl = {
  hash: "svelte-1p7uhy",
  code: `:host {display:block;font-family:'Cascadia Code', 'Fira Code', 'Monaco', 'Consolas', monospace;font-size:14px;line-height:1.5;}.terminal.svelte-1p7uhy {width:100%;height:100%;min-height:300px;background:var(--terminal-bg);color:var(--terminal-fg);border:1px solid var(--terminal-border);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;transition:all 0.3s ease;}.terminal-header.svelte-1p7uhy {background:var(--terminal-header-bg);color:var(--terminal-header-fg);padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--terminal-border);}.terminal-buttons.svelte-1p7uhy {display:flex;gap:8px;}.terminal-button.svelte-1p7uhy {width:12px;height:12px;border-radius:50%;display:inline-block;}.terminal-button.close.svelte-1p7uhy {background:#ff5f56;}.terminal-button.minimize.svelte-1p7uhy {background:#ffbd2e;}.terminal-button.maximize.svelte-1p7uhy {background:#27c93f;}.terminal-title.svelte-1p7uhy {flex:1;text-align:center;font-weight:500;}.terminal-controls.svelte-1p7uhy {display:flex;gap:8px;}.control-button.svelte-1p7uhy {background:transparent;color:var(--terminal-header-fg);border:1px solid var(--terminal-border);padding:4px 8px;border-radius:4px;cursor:pointer;font-size:12px;transition:all 0.2s;}.control-button.svelte-1p7uhy:hover:not(:disabled) {background:var(--terminal-border);color:var(--terminal-fg);}.control-button.svelte-1p7uhy:disabled {opacity:0.5;cursor:not-allowed;}.terminal-content.svelte-1p7uhy {flex:1;padding:16px;overflow-y:auto;font-family:inherit;}.terminal-line.svelte-1p7uhy {margin:4px 0;white-space:pre-wrap;word-break:break-word;}.terminal-line.svelte-1p7uhy pre:where(.svelte-1p7uhy) {margin:0;font-family:inherit;}.step-command.svelte-1p7uhy {color:var(--terminal-command);font-weight:bold;}.step-output.svelte-1p7uhy {color:var(--terminal-output);}.step-error.svelte-1p7uhy {color:var(--terminal-error);}.step-warning.svelte-1p7uhy {color:var(--terminal-warning);}.step-info.svelte-1p7uhy {color:var(--terminal-info);}.step-success.svelte-1p7uhy {color:var(--terminal-success);}.terminal-cursor.svelte-1p7uhy {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-1p7uhy-blink 1s infinite;}.typing-cursor.svelte-1p7uhy {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-1p7uhy-blink 1s infinite;margin-left:2px;}

  @keyframes svelte-1p7uhy-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }.terminal-content.svelte-1p7uhy::-webkit-scrollbar {width:8px;}.terminal-content.svelte-1p7uhy::-webkit-scrollbar-track {background:var(--terminal-bg);}.terminal-content.svelte-1p7uhy::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:4px;}.terminal-content.svelte-1p7uhy::-webkit-scrollbar-thumb:hover {background:var(--terminal-header-fg);}

  /* Tab styles */.terminal-tabs.svelte-1p7uhy {display:flex;background:var(--terminal-header-bg);border-bottom:1px solid var(--terminal-border);gap:4px;overflow-x:auto;align-items:center;}.terminal-tabs-bottom.svelte-1p7uhy {border-bottom:none;border-top:1px solid var(--terminal-border);}.terminal-tab.svelte-1p7uhy {display:flex;align-items:center;gap:6px;padding:8px 12px;background:transparent;color:var(--terminal-header-fg);border:none;border-top:2px solid transparent;cursor:pointer;font-family:inherit;font-size:13px;transition:all 0.2s;white-space:nowrap;position:relative;}.terminal-tabs-bottom.svelte-1p7uhy .terminal-tab:where(.svelte-1p7uhy) {border-top:none;border-bottom:2px solid transparent;}.terminal-tab.svelte-1p7uhy:hover {background:rgba(255, 255, 255, 0.05);}.terminal-tab.active.svelte-1p7uhy {background:var(--terminal-bg);border-top-color:var(--terminal-command);}.terminal-tabs-bottom.svelte-1p7uhy .terminal-tab.active:where(.svelte-1p7uhy) {border-top-color:transparent;border-bottom-color:var(--terminal-command);}.tab-icon.svelte-1p7uhy {font-size:14px;}.tab-title.svelte-1p7uhy {flex:1;}.tab-badge.svelte-1p7uhy {padding:2px 6px;background:var(--terminal-command);color:var(--terminal-bg);border-radius:10px;font-size:11px;font-weight:bold;min-width:18px;text-align:center;}.tab-close.svelte-1p7uhy {margin-left:4px;padding:0 4px;background:transparent;border:none;color:var(--terminal-header-fg);cursor:pointer;font-size:18px;line-height:1;opacity:0.6;transition:opacity 0.2s;}.tab-close.svelte-1p7uhy:hover {opacity:1;color:var(--terminal-error);}.tab-add.svelte-1p7uhy {padding:8px 16px;font-weight:bold;opacity:0.7;}.tab-add.svelte-1p7uhy:hover {opacity:1;background:rgba(255, 255, 255, 0.1);}

  /* Tab status indicators */.tab-status-running.svelte-1p7uhy .tab-icon:where(.svelte-1p7uhy)::after {content:'●';color:var(--terminal-warning);position:absolute;top:6px;left:8px;font-size:8px;
    animation: svelte-1p7uhy-pulse 1.5s infinite;}.tab-status-error.svelte-1p7uhy .tab-icon:where(.svelte-1p7uhy)::after {content:'●';color:var(--terminal-error);position:absolute;top:6px;left:8px;font-size:8px;}.tab-status-success.svelte-1p7uhy .tab-icon:where(.svelte-1p7uhy)::after {content:'●';color:var(--terminal-success);position:absolute;top:6px;left:8px;font-size:8px;}

  @keyframes svelte-1p7uhy-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Scrollbar for tabs */.terminal-tabs.svelte-1p7uhy::-webkit-scrollbar {height:4px;}.terminal-tabs.svelte-1p7uhy::-webkit-scrollbar-track {background:transparent;}.terminal-tabs.svelte-1p7uhy::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:2px;}

  /* Rich text segment styling */.rich-text-segment.svelte-1p7uhy {display:inline;}

  /* Ensure rich text inherits terminal font properties */.terminal-line.svelte-1p7uhy .rich-text-segment:where(.svelte-1p7uhy) {font-family:inherit;font-size:inherit;line-height:inherit;}`
};
function Al(e, t) {
  Or(t, !0), Wi(e, Pl);
  let n = J(t, "theme", 7, "dark"), r = J(t, "session", 23, () => []), a = J(t, "autoplay", 7, !1), i = J(t, "playbackSpeed", 7, 1), l = J(t, "showHeader", 7), o = J(t, "title", 7, "Terminal"), u = J(t, "colors", 23, () => ({})), c = J(t, "typingSpeed", 7, 40), v = J(t, "enableTyping", 7, !0), _ = J(t, "showPlayButton", 7), h = J(t, "showResetButton", 7), b = J(t, "showThemeToggle", 7), p = J(t, "showWindowButtons", 7), d = J(t, "tabs", 23, () => []), k = J(t, "activeTab", 7, 0), B = J(t, "showTabs", 7, !1), P = J(t, "allowTabClose", 7, !0), g = J(t, "allowTabAdd", 7, !1), S = J(t, "tabBarPosition", 7, "top"), T, Z, be = /* @__PURE__ */ re(Fe(k() || 0)), ye = /* @__PURE__ */ re(Fe(/* @__PURE__ */ new Map())), M = /* @__PURE__ */ Be(() => B() && d() && d().length > 0 ? d()[s(be)] || d()[0] : null), A = /* @__PURE__ */ Be(() => s(M) ? s(M).session : r()), at = /* @__PURE__ */ Be(() => s(M) ? s(M).title : o()), yt = /* @__PURE__ */ Be(() => _() ?? !0), Kt = /* @__PURE__ */ Be(() => h() ?? !0), Gt = /* @__PURE__ */ Be(() => b() ?? !0), $n = /* @__PURE__ */ Be(() => p() ?? !0), Ta = /* @__PURE__ */ Be(() => s(yt) || s(Kt) || s(Gt)), ka = /* @__PURE__ */ Be(() => l() ?? !0), V = /* @__PURE__ */ re(0), W = /* @__PURE__ */ re(!1), G = /* @__PURE__ */ re(Fe([])), fe = /* @__PURE__ */ re(-1), Ce = /* @__PURE__ */ re(""), Dt = /* @__PURE__ */ re(!1), Tn = /* @__PURE__ */ re(!1), kn = /* @__PURE__ */ re(Fe(a())), se = null, Q = null, nr = -1, Jt = "", rr = /* @__PURE__ */ Be(() => al(n() === "dark" ? tl : nl, u()));
  mt(() => {
    T && s(rr) && rl(s(rr), T);
  }), mt(() => {
    const f = s(G).length;
    Z && f > 0 && Mi().then(() => {
      Z && (Z.scrollTop = Z.scrollHeight);
    });
  });
  function Xt() {
    s(W) || !s(A) || s(V) >= s(A).length || (m(W, !0), Mt());
  }
  function Mt() {
    if (!s(A) || s(V) >= s(A).length) {
      m(W, !1), se = null;
      return;
    }
    const f = s(A)[s(V)], y = (f.delay || 1e3) / i();
    se = setTimeout(
      () => {
        if (!s(A)) {
          m(W, !1), se = null;
          return;
        }
        f.type === "command" && v() && !f.skipTyping ? Ea(f) : (m(G, [...s(G), f], !0), rn(V), s(V) < s(A).length && s(W) ? Mt() : (m(W, !1), se = null));
      },
      y
    );
  }
  function Ea(f) {
    m(fe, s(G).length, !0), m(Ce, ""), m(G, [...s(G), { ...f, content: "" }], !0);
    const y = Pa(f.content);
    let z = 0;
    const ae = 1e3 / (f.typingSpeed || c());
    function H() {
      if (!s(W) || !s(A) || s(fe) < 0) {
        Q = null, m(fe, -1), m(Ce, "");
        return;
      }
      if (z < y.length) {
        m(Ce, s(Ce) + y[z]), m(G, s(G).map((F, ce) => ce === s(fe) ? { ...f, content: s(Ce) } : F), !0), z++;
        const R = ae * 0.2, oe = ae + (Math.random() - 0.5) * R;
        Q = setTimeout(
          () => {
            requestAnimationFrame(() => H());
          },
          oe
        );
      } else
        m(fe, -1), m(Ce, ""), Q = null, rn(V), s(V) < s(A).length && s(W) ? Mt() : m(W, !1);
    }
    requestAnimationFrame(() => H());
  }
  function Zt() {
    se && (clearTimeout(se), se = null), Q && (clearTimeout(Q), Q = null), m(V, 0), m(G, [], !0), m(W, !1), m(fe, -1), m(Ce, "");
  }
  function xa() {
    if (s(W))
      m(W, !1), se && (clearTimeout(se), se = null), Q && (clearTimeout(Q), Q = null);
    else {
      if (!s(A) || s(A).length === 0)
        return;
      s(V) >= s(A).length ? (Zt(), setTimeout(() => Xt(), 10)) : Xt();
    }
  }
  function Sa(f) {
    return `step-${f}`;
  }
  function Ca(f) {
    return Array.isArray(f);
  }
  function Pa(f) {
    return typeof f == "string" ? f : f.map((y) => y.text).join("");
  }
  function ar() {
    s(fe) >= 0 && s(fe) < s(G).length && (Q && (clearTimeout(Q), Q = null), m(
      G,
      s(G).map((f, y) => y === s(fe) ? {
        ...f,
        content: s(A)[s(V)].content
      } : f),
      !0
    ), m(fe, -1), m(Ce, ""), rn(V), s(V) < s(A).length && s(W) ? Mt() : m(W, !1));
  }
  let Qt = null;
  mt(() => {
    if (T && typeof IntersectionObserver < "u") {
      const f = new IntersectionObserver(
        (y) => {
          y.forEach((z) => {
            m(Tn, z.isIntersecting, !0);
          });
        },
        { threshold: 0.1 }
        // Trigger when 10% visible
      );
      return f.observe(T), () => {
        f && f.disconnect();
      };
    }
  }), mt(() => {
    a() !== s(kn) && (!s(kn) && a() && m(Dt, !1), m(kn, a()));
  }), mt(() => {
    a() && s(Tn) && !s(Dt) && !s(W) && s(A) && s(A).length > 0 && s(V) === 0 && (m(Dt, !0), setTimeout(() => Xt(), 300));
  }), mt(() => {
    if (T) {
      if (B() && d() && d().length > 0) {
        const y = d()[s(be)] || d()[0];
        y && (Jt = y.id);
      }
      const f = () => {
        const y = s(A);
        !B() && y && y.length !== nr && (nr = y.length, (s(G).length > 0 || s(V) > 0) && (Zt(), m(
          Dt,
          !1
          // Reset autoplay flag for new session
        ))), B() && s(M) && s(M).id !== Jt && !s(ye).has(s(M).id) && (Jt = s(M).id, s(ye).has(s(M).id) || m(Dt, !1));
      };
      f(), Qt = setInterval(f, 500);
    }
    return () => {
      Qt !== null && (clearInterval(Qt), Qt = null), se && (clearTimeout(se), se = null), Q && (clearTimeout(Q), Q = null);
    };
  });
  function Aa() {
    const f = n() === "dark" ? "light" : "dark";
    T == null || T.dispatchEvent(new CustomEvent("theme-change", { detail: f }));
  }
  function Ra() {
    s(M) && s(ye).set(s(M).id, {
      currentStepIndex: s(V),
      isPlaying: s(W),
      displayedSteps: [...s(G)],
      typingStepIndex: s(fe),
      typedContent: s(Ce),
      lastUpdateTime: Date.now()
    });
  }
  function Na(f) {
    const y = s(ye).get(f);
    if (y) {
      const z = Date.now() - y.lastUpdateTime;
      if (m(V, y.currentStepIndex, !0), m(W, y.isPlaying, !0), m(G, [...y.displayedSteps], !0), m(fe, y.typingStepIndex, !0), m(Ce, y.typedContent, !0), y.isPlaying && s(A) && s(V) < s(A).length) {
        let ee = s(V), ae = 0;
        for (; ee < s(A).length && ae < z; ) {
          const H = s(A)[ee], R = (H.delay || 1e3) / i();
          if (ae + R <= z)
            m(G, [...s(G), H], !0), ee++, ae += R;
          else
            break;
        }
        m(V, ee, !0), s(V) < s(A).length ? Mt() : m(W, !1);
      }
    } else
      s(ye).has(f) || (Zt(), a() && s(Tn) && s(A) && s(A).length > 0 && setTimeout(() => Xt(), 300));
  }
  function En(f) {
    if (f === s(be) || !d() || f < 0 || f >= d().length) return;
    Ra(), se && (clearTimeout(se), se = null), Q && (clearTimeout(Q), Q = null), m(be, f, !0);
    const y = d()[f];
    y && (Na(y.id), Jt = y.id), T == null || T.dispatchEvent(new CustomEvent("tab-change", { detail: { index: f, tab: y } }));
  }
  function en(f) {
    if (!d() || d().length <= 1) return;
    const y = d()[f];
    if (y.closable !== !1 && P())
      if (y && s(ye).delete(y.id), T == null || T.dispatchEvent(new CustomEvent("tab-close", { detail: { index: f, tab: y } })), f === s(be)) {
        const ee = f > 0 ? f - 1 : 0;
        d().length > 1 && En(ee);
      } else f < s(be) && rn(be, -1);
  }
  function ir() {
    g() && (T == null || T.dispatchEvent(new CustomEvent("tab-add", { detail: {} })));
  }
  function lr(f) {
    return f ? `tab-status-${f}` : "";
  }
  var tn = Cl(), sr = K(tn);
  {
    var Ia = (f) => {
      var y = fl(), z = K(y);
      {
        var ee = (F) => {
          var ce = il();
          N(F, ce);
        };
        j(z, (F) => {
          s($n) && F(ee);
        });
      }
      var ae = ne(z, 2), H = K(ae, !0);
      Y(ae);
      var R = ne(ae, 2);
      {
        var oe = (F) => {
          var ce = ul(), Ge = K(ce);
          {
            var Pe = (ie) => {
              var w = ll();
              w.__click = xa;
              var C = K(w, !0);
              Y(w), de(() => {
                w.disabled = !s(A) || s(A).length === 0, Re(C, s(W) ? "⏸" : "▶");
              }), N(ie, w);
            };
            j(Ge, (ie) => {
              s(yt) && ie(Pe);
            });
          }
          var L = ne(Ge, 2);
          {
            var te = (ie) => {
              var w = sl();
              w.__click = Zt, de(() => w.disabled = s(G).length === 0), N(ie, w);
            };
            j(L, (ie) => {
              s(Kt) && ie(te);
            });
          }
          var it = ne(L, 2);
          {
            var lt = (ie) => {
              var w = ol();
              w.__click = Aa;
              var C = K(w, !0);
              Y(w), de(() => Re(C, n() === "dark" ? "☀" : "🌙")), N(ie, w);
            };
            j(it, (ie) => {
              s(Gt) && ie(lt);
            });
          }
          Y(ce), N(F, ce);
        };
        j(R, (F) => {
          s(Ta) && F(oe);
        });
      }
      Y(y), de(() => Re(H, s(at))), N(f, y);
    };
    j(sr, (f) => {
      s(ka) && f(Ia);
    });
  }
  var or = ne(sr, 2);
  {
    var Oa = (f) => {
      var y = _l(), z = K(y);
      sn(z, 17, d, ln, (H, R, oe) => {
        var F = hl();
        F.__click = () => En(oe);
        var ce = K(F);
        {
          var Ge = (w) => {
            var C = cl(), D = K(C, !0);
            Y(C), de(() => Re(D, s(R).icon)), N(w, C);
          };
          j(ce, (w) => {
            s(R).icon && w(Ge);
          });
        }
        var Pe = ne(ce, 2), L = K(Pe, !0);
        Y(Pe);
        var te = ne(Pe, 2);
        {
          var it = (w) => {
            var C = vl(), D = K(C, !0);
            Y(C), de(() => Re(D, s(R).badge)), N(w, C);
          };
          j(te, (w) => {
            s(R).badge !== void 0 && w(it);
          });
        }
        var lt = ne(te, 2);
        {
          var ie = (w) => {
            var C = dl();
            C.__click = (D) => {
              D.stopPropagation(), en(oe);
            }, C.__keydown = (D) => {
              (D.key === "Enter" || D.key === " ") && (D.stopPropagation(), D.preventDefault(), en(oe));
            }, N(w, C);
          };
          j(lt, (w) => {
            s(R).closable !== !1 && P() && d().length > 1 && w(ie);
          });
        }
        Y(F), de(
          (w) => {
            Rn(F, 1, `terminal-tab ${oe === s(be) ? "active" : ""} ${w ?? ""}`, "svelte-1p7uhy"), Re(L, s(R).title);
          },
          [() => lr(s(R).status)]
        ), N(H, F);
      });
      var ee = ne(z, 2);
      {
        var ae = (H) => {
          var R = pl();
          R.__click = ir, N(H, R);
        };
        j(ee, (H) => {
          g() && H(ae);
        });
      }
      Y(y), N(f, y);
    };
    j(or, (f) => {
      B() && d() && d().length > 0 && S() === "top" && f(Oa);
    });
  }
  var gt = ne(or, 2);
  gt.__click = ar, gt.__keydown = [bl, ar];
  var ur = K(gt);
  sn(ur, 17, () => s(G), ln, (f, y, z) => {
    var ee = ml(), ae = K(ee), H = K(ae);
    {
      var R = (L) => {
        var te = mr();
        de(() => Re(te, `${s(y).prompt || "$"} `)), N(L, te);
      };
      j(H, (L) => {
        s(y).type === "command" && L(R);
      });
    }
    var oe = ne(H);
    {
      var F = (L) => {
        var te = mr();
        de(() => Re(te, s(Ce))), N(L, te);
      }, ce = (L) => {
        var te = Pn(), it = Cn(te);
        {
          var lt = (w) => {
            var C = Pn(), D = Cn(C);
            sn(D, 17, () => s(y).content, ln, (La, Ae) => {
              var nn = yl(), qa = K(nn);
              wr(qa, () => s(Ae).text.replace(/\n/g, "<br>")), Y(nn), de(() => Gi(nn, `${s(Ae).color ? `color: ${s(Ae).color};` : ""}${s(Ae).backgroundColor ? `background-color: ${s(Ae).backgroundColor};` : ""}${s(Ae).fontWeight ? `font-weight: ${s(Ae).fontWeight};` : ""}${s(Ae).textDecoration ? `text-decoration: ${s(Ae).textDecoration};` : ""}${s(Ae).fontStyle ? `font-style: ${s(Ae).fontStyle};` : ""}`)), N(La, nn);
            }), N(w, C);
          }, ie = (w) => {
            var C = Pn(), D = Cn(C);
            wr(D, () => s(y).content.replace(/\n/g, "<br>")), N(w, C);
          };
          j(
            it,
            (w) => {
              Ca(s(y).content) ? w(lt) : w(ie, !1);
            },
            !0
          );
        }
        N(L, te);
      };
      j(oe, (L) => {
        z === s(fe) ? L(F) : L(ce, !1);
      });
    }
    var Ge = ne(oe);
    {
      var Pe = (L) => {
        var te = gl();
        N(L, te);
      };
      j(Ge, (L) => {
        z === s(fe) && L(Pe);
      });
    }
    Y(ae), Y(ee), de((L) => Rn(ee, 1, `terminal-line ${L ?? ""}`, "svelte-1p7uhy"), [() => Sa(s(y).type)]), N(f, ee);
  });
  var Ba = ne(ur, 2);
  {
    var Da = (f) => {
      var y = wl();
      N(f, y);
    };
    j(Ba, (f) => {
      s(W) && s(fe) === -1 && f(Da);
    });
  }
  Y(gt), Tr(gt, (f) => Z = f, () => Z);
  var Ma = ne(gt, 2);
  {
    var Fa = (f) => {
      var y = Sl(), z = K(y);
      sn(z, 17, d, ln, (H, R, oe) => {
        var F = El();
        F.__click = () => En(oe);
        var ce = K(F);
        {
          var Ge = (w) => {
            var C = $l(), D = K(C, !0);
            Y(C), de(() => Re(D, s(R).icon)), N(w, C);
          };
          j(ce, (w) => {
            s(R).icon && w(Ge);
          });
        }
        var Pe = ne(ce, 2), L = K(Pe, !0);
        Y(Pe);
        var te = ne(Pe, 2);
        {
          var it = (w) => {
            var C = Tl(), D = K(C, !0);
            Y(C), de(() => Re(D, s(R).badge)), N(w, C);
          };
          j(te, (w) => {
            s(R).badge !== void 0 && w(it);
          });
        }
        var lt = ne(te, 2);
        {
          var ie = (w) => {
            var C = kl();
            C.__click = (D) => {
              D.stopPropagation(), en(oe);
            }, C.__keydown = (D) => {
              (D.key === "Enter" || D.key === " ") && (D.stopPropagation(), D.preventDefault(), en(oe));
            }, N(w, C);
          };
          j(lt, (w) => {
            s(R).closable !== !1 && P() && d().length > 1 && w(ie);
          });
        }
        Y(F), de(
          (w) => {
            Rn(F, 1, `terminal-tab ${oe === s(be) ? "active" : ""} ${w ?? ""}`, "svelte-1p7uhy"), Re(L, s(R).title);
          },
          [() => lr(s(R).status)]
        ), N(H, F);
      });
      var ee = ne(z, 2);
      {
        var ae = (H) => {
          var R = xl();
          R.__click = ir, N(H, R);
        };
        j(ee, (H) => {
          g() && H(ae);
        });
      }
      Y(y), N(f, y);
    };
    j(Ma, (f) => {
      B() && d() && d().length > 0 && S() === "bottom" && f(Fa);
    });
  }
  return Y(tn), Tr(tn, (f) => T = f, () => T), N(e, tn), Br({
    get theme() {
      return n();
    },
    set theme(f = "dark") {
      n(f), U();
    },
    get session() {
      return r();
    },
    set session(f = []) {
      r(f), U();
    },
    get autoplay() {
      return a();
    },
    set autoplay(f = !1) {
      a(f), U();
    },
    get playbackSpeed() {
      return i();
    },
    set playbackSpeed(f = 1) {
      i(f), U();
    },
    get showHeader() {
      return l();
    },
    set showHeader(f) {
      l(f), U();
    },
    get title() {
      return o();
    },
    set title(f = "Terminal") {
      o(f), U();
    },
    get colors() {
      return u();
    },
    set colors(f = {}) {
      u(f), U();
    },
    get typingSpeed() {
      return c();
    },
    set typingSpeed(f = 40) {
      c(f), U();
    },
    get enableTyping() {
      return v();
    },
    set enableTyping(f = !0) {
      v(f), U();
    },
    get showPlayButton() {
      return _();
    },
    set showPlayButton(f) {
      _(f), U();
    },
    get showResetButton() {
      return h();
    },
    set showResetButton(f) {
      h(f), U();
    },
    get showThemeToggle() {
      return b();
    },
    set showThemeToggle(f) {
      b(f), U();
    },
    get showWindowButtons() {
      return p();
    },
    set showWindowButtons(f) {
      p(f), U();
    },
    get tabs() {
      return d();
    },
    set tabs(f = []) {
      d(f), U();
    },
    get activeTab() {
      return k();
    },
    set activeTab(f = 0) {
      k(f), U();
    },
    get showTabs() {
      return B();
    },
    set showTabs(f = !1) {
      B(f), U();
    },
    get allowTabClose() {
      return P();
    },
    set allowTabClose(f = !0) {
      P(f), U();
    },
    get allowTabAdd() {
      return g();
    },
    set allowTabAdd(f = !1) {
      g(f), U();
    },
    get tabBarPosition() {
      return S();
    },
    set tabBarPosition(f = "top") {
      S(f), U();
    }
  });
}
Li(["click", "keydown"]);
customElements.define("terminal-session", el(
  Al,
  {
    showPlayButton: { attribute: "show-play-button", type: "Boolean" },
    showResetButton: { attribute: "show-reset-button", type: "Boolean" },
    showThemeToggle: { attribute: "show-theme-toggle", type: "Boolean" },
    showWindowButtons: { attribute: "show-window-buttons", type: "Boolean" },
    showTabs: { attribute: "show-tabs", type: "Boolean" },
    allowTabClose: { attribute: "allow-tab-close", type: "Boolean" },
    allowTabAdd: { attribute: "allow-tab-add", type: "Boolean" },
    autoplay: { attribute: "autoplay", type: "Boolean" },
    enableTyping: { attribute: "enable-typing", type: "Boolean" },
    showHeader: { attribute: "show-header", type: "Boolean" },
    playbackSpeed: { attribute: "playback-speed", type: "Number" },
    typingSpeed: { attribute: "typing-speed", type: "Number" },
    activeTab: { attribute: "active-tab", type: "Number" },
    theme: { attribute: "theme" },
    title: { attribute: "title" },
    tabBarPosition: { attribute: "tab-bar-position" },
    session: {},
    colors: {},
    tabs: {}
  },
  [],
  [],
  !0
));
export {
  Al as default
};
