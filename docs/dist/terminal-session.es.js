var ui = Object.defineProperty;
var Sr = (e) => {
  throw TypeError(e);
};
var fi = (e, t, n) => t in e ? ui(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var he = (e, t, n) => fi(e, typeof t != "symbol" ? t + "" : t, n), zn = (e, t, n) => t.has(e) || Sr("Cannot " + n);
var q = (e, t, n) => (zn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), de = (e, t, n) => t.has(e) ? Sr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), we = (e, t, n, r) => (zn(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), ct = (e, t, n) => (zn(e, t, "access private method"), n);
const ci = "5";
var Hr;
typeof window < "u" && ((Hr = window.__svelte ?? (window.__svelte = {})).v ?? (Hr.v = /* @__PURE__ */ new Set())).add(ci);
const Pn = 1, An = 2, Wr = 4, vi = 8, di = 16, hi = 1, pi = 4, _i = 8, bi = 16, mi = 2, jr = "[", rr = "[!", ar = "]", _t = {}, fe = Symbol(), Ur = !1;
var ir = Array.isArray, gi = Array.prototype.indexOf, lr = Array.from, kn = Object.keys, Dt = Object.defineProperty, bt = Object.getOwnPropertyDescriptor, wi = Object.prototype, yi = Array.prototype, $i = Object.getPrototypeOf, Cr = Object.isExtensible;
function zr(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ti() {
  var e, t, n = new Promise((r, a) => {
    e = r, t = a;
  });
  return { promise: n, resolve: e, reject: t };
}
const xe = 2, or = 4, Yr = 8, jt = 16, Ze = 32, st = 64, Vr = 128, Ae = 256, qn = 512, _e = 1024, Re = 2048, ut = 4096, Ie = 8192, yt = 16384, sr = 32768, ur = 65536, Pr = 1 << 17, ki = 1 << 18, Ut = 1 << 19, qi = 1 << 20, Gn = 1 << 21, fr = 1 << 22, mt = 1 << 23, Qt = Symbol("$state"), Gr = Symbol("legacy props"), cr = new class extends Error {
  constructor() {
    super(...arguments);
    he(this, "name", "StaleReactionError");
    he(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), vr = 3, Mt = 8;
function xi() {
  throw new Error("https://svelte.dev/e/await_outside_boundary");
}
function Ei() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Si(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ci() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Pi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ai() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ri() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Bi(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ni() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ii() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function un(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let D = !1;
function Je(e) {
  D = e;
}
let M;
function ke(e) {
  if (e === null)
    throw un(), _t;
  return M = e;
}
function Lt() {
  return ke(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(M)
  );
}
function j(e) {
  if (D) {
    if (/* @__PURE__ */ Qe(M) !== null)
      throw un(), _t;
    M = e;
  }
}
function Kn() {
  for (var e = 0, t = M; ; ) {
    if (t.nodeType === Mt) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === ar) {
        if (e === 0) return t;
        e -= 1;
      } else (n === jr || n === rr) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(t)
    );
    t.remove(), t = r;
  }
}
function Kr(e) {
  if (!e || e.nodeType !== Mt)
    throw un(), _t;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Jr(e) {
  return e === this.v;
}
function Di(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Xr(e) {
  return !Di(e, this.v);
}
let Mi = !1, De = null;
function xn(e) {
  De = e;
}
function Zr(e, t = !1, n) {
  De = {
    p: De,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function Qr(e) {
  var t = (
    /** @type {ComponentContext} */
    De
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ga(r);
  }
  return e !== void 0 && (t.x = e), De = t.p, e ?? /** @type {T} */
  {};
}
function ea() {
  return !0;
}
const Li = /* @__PURE__ */ new WeakMap();
function Fi(e) {
  var t = P;
  if (t === null)
    return R.f |= mt, e;
  if (t.f & sr)
    dr(e, t);
  else {
    if (!(t.f & Vr))
      throw !t.parent && e instanceof Error && ta(e), e;
    t.b.error(e);
  }
}
function dr(e, t) {
  for (; t !== null; ) {
    if (t.f & Vr)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e instanceof Error && ta(e), e;
}
function ta(e) {
  const t = Li.get(e);
  t && (Dt(e, "message", {
    value: t.message
  }), Dt(e, "stack", {
    value: t.stack
  }));
}
let en = [], Jn = [];
function na() {
  var e = en;
  en = [], zr(e);
}
function Hi() {
  var e = Jn;
  Jn = [], zr(e);
}
function ra(e) {
  en.length === 0 && queueMicrotask(na), en.push(e);
}
function Wi() {
  en.length > 0 && na(), Jn.length > 0 && Hi();
}
function ji() {
  for (var e = (
    /** @type {Effect} */
    P.b
  ); e !== null && !e.has_pending_snippet(); )
    e = e.parent;
  return e === null && xi(), e;
}
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  var t = xe | Re, n = R !== null && R.f & xe ? (
    /** @type {Derived} */
    R
  ) : null;
  return P === null || n !== null && n.f & Ae ? t |= Ae : P.f |= Ut, {
    ctx: De,
    deps: null,
    effects: null,
    equals: Jr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      fe
    ),
    wv: 0,
    parent: n ?? P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ui(e, t) {
  let n = (
    /** @type {Effect | null} */
    P
  );
  n === null && Ei();
  var r = (
    /** @type {Boundary} */
    n.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = tn(
    /** @type {V} */
    fe
  ), o = null, u = !R;
  return Qi(() => {
    try {
      var f = e();
    } catch (m) {
      f = Promise.reject(m);
    }
    var c = () => f;
    a = (o == null ? void 0 : o.then(c, c)) ?? Promise.resolve(f), o = a;
    var h = (
      /** @type {Batch} */
      ae
    ), p = r.pending;
    u && (r.update_pending_count(1), p || h.increment());
    const g = (m, v = void 0) => {
      o = null, p || h.activate(), v ? v !== cr && (l.f |= mt, nn(l, v)) : (l.f & mt && (l.f ^= mt), nn(l, m)), u && (r.update_pending_count(-1), p || h.decrement()), oa();
    };
    if (a.then(g, (m) => g(null, m || "unknown")), h)
      return () => {
        queueMicrotask(() => h.neuter());
      };
  }), new Promise((f) => {
    function c(h) {
      function p() {
        h === a ? f(l) : c(a);
      }
      h.then(p, p);
    }
    c(a);
  });
}
// @__NO_SIDE_EFFECTS__
function $e(e) {
  const t = /* @__PURE__ */ Rn(e);
  return Ca(t), t;
}
// @__NO_SIDE_EFFECTS__
function aa(e) {
  const t = /* @__PURE__ */ Rn(e);
  return t.equals = Xr, t;
}
function ia(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      je(
        /** @type {Effect} */
        t[n]
      );
  }
}
function zi(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & xe))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function hr(e) {
  var t, n = P;
  ot(zi(e));
  try {
    ia(e), t = Ba(e);
  } finally {
    ot(n);
  }
  return t;
}
function la(e) {
  var t = hr(e);
  if (e.equals(t) || (e.v = t, e.wv = Aa()), !$t)
    if (at !== null)
      at.set(e, e.v);
    else {
      var n = (it || e.f & Ae) && e.deps !== null ? ut : _e;
      qe(e, n);
    }
}
function Yi(e, t, n) {
  const r = Rn;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var a = ae, l = (
    /** @type {Effect} */
    P
  ), o = Vi(), u = ji();
  Promise.all(t.map((f) => /* @__PURE__ */ Ui(f))).then((f) => {
    a == null || a.activate(), o();
    try {
      n([...e.map(r), ...f]);
    } catch (c) {
      l.f & yt || dr(c, l);
    }
    a == null || a.deactivate(), oa();
  }).catch((f) => {
    u.error(f);
  });
}
function Vi() {
  var e = P, t = R, n = De;
  return function() {
    ot(e), Ue(t), xn(n);
  };
}
function oa() {
  ot(null), Ue(null), xn(null);
}
const Kt = /* @__PURE__ */ new Set();
let ae = null, at = null, Ar = /* @__PURE__ */ new Set(), En = [];
function sa() {
  const e = (
    /** @type {() => void} */
    En.shift()
  );
  En.length > 0 && queueMicrotask(sa), e();
}
let wt = [], Bn = null, Xn = !1, yn = !1;
var Bt, Nt, nt, an, ln, ht, It, pt, rt, Ot, on, sn, Oe, ua, $n, Zn;
const Cn = class Cn {
  constructor() {
    de(this, Oe);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    he(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    de(this, Bt, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    de(this, Nt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    de(this, nt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    de(this, an, null);
    /**
     * True if an async effect inside this batch resolved and
     * its parent branch was already deleted
     */
    de(this, ln, !1);
    /**
     * Async effects (created inside `async_derived`) encountered during processing.
     * These run after the rest of the batch has updated, since they should
     * always have the latest values
     * @type {Effect[]}
     */
    de(this, ht, []);
    /**
     * The same as `#async_effects`, but for effects inside a newly-created
     * `<svelte:boundary>` — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    de(this, It, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    de(this, pt, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    de(this, rt, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    de(this, Ot, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    de(this, on, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    de(this, sn, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    he(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var l;
    wt = [];
    var n = null;
    if (Kt.size > 1) {
      n = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map();
      for (const [o, u] of this.current)
        n.set(o, { v: o.v, wv: o.wv }), o.v = u;
      for (const o of Kt)
        if (o !== this)
          for (const [u, f] of q(o, Bt))
            n.has(u) || (n.set(u, { v: u.v, wv: u.wv }), u.v = f);
    }
    for (const o of t)
      ct(this, Oe, ua).call(this, o);
    if (q(this, ht).length === 0 && q(this, nt) === 0) {
      ct(this, Oe, Zn).call(this);
      var r = q(this, pt), a = q(this, rt);
      we(this, pt, []), we(this, rt, []), we(this, Ot, []), ae = null, Rr(r), Rr(a), ae === null ? ae = this : Kt.delete(this), (l = q(this, an)) == null || l.resolve();
    } else
      ct(this, Oe, $n).call(this, q(this, pt)), ct(this, Oe, $n).call(this, q(this, rt)), ct(this, Oe, $n).call(this, q(this, Ot));
    if (n) {
      for (const [o, { v: u, wv: f }] of n)
        o.wv <= f && (o.v = u);
      at = null;
    }
    for (const o of q(this, ht))
      Rt(o);
    for (const o of q(this, It))
      Rt(o);
    we(this, ht, []), we(this, It, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    q(this, Bt).has(t) || q(this, Bt).set(t, n), this.current.set(t, t.v);
  }
  activate() {
    ae = this;
  }
  deactivate() {
    ae = null;
    for (const t of Ar)
      if (Ar.delete(t), t(), ae !== null)
        break;
  }
  neuter() {
    we(this, ln, !0);
  }
  flush() {
    wt.length > 0 ? fa() : ct(this, Oe, Zn).call(this), ae === this && (q(this, nt) === 0 && Kt.delete(this), this.deactivate());
  }
  increment() {
    we(this, nt, q(this, nt) + 1);
  }
  decrement() {
    if (we(this, nt, q(this, nt) - 1), q(this, nt) === 0) {
      for (const t of q(this, on))
        qe(t, Re), Ht(t);
      for (const t of q(this, sn))
        qe(t, ut), Ht(t);
      we(this, pt, []), we(this, rt, []), this.flush();
    } else
      this.deactivate();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    q(this, Nt).add(t);
  }
  settled() {
    return (q(this, an) ?? we(this, an, Ti())).promise;
  }
  static ensure() {
    if (ae === null) {
      const t = ae = new Cn();
      Kt.add(ae), yn || Cn.enqueue(() => {
        ae === t && t.flush();
      });
    }
    return ae;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    En.length === 0 && queueMicrotask(sa), En.unshift(t);
  }
};
Bt = new WeakMap(), Nt = new WeakMap(), nt = new WeakMap(), an = new WeakMap(), ln = new WeakMap(), ht = new WeakMap(), It = new WeakMap(), pt = new WeakMap(), rt = new WeakMap(), Ot = new WeakMap(), on = new WeakMap(), sn = new WeakMap(), Oe = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
ua = function(t) {
  var h;
  t.f ^= _e;
  for (var n = t.first; n !== null; ) {
    var r = n.f, a = (r & (Ze | st)) !== 0, l = a && (r & _e) !== 0, o = l || (r & Ie) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      if (a)
        n.f ^= _e;
      else if (r & or)
        q(this, rt).push(n);
      else if (!(r & _e))
        if (r & fr) {
          var u = (h = n.b) != null && h.pending ? q(this, It) : q(this, ht);
          u.push(n);
        } else Nn(n) && (n.f & jt && q(this, Ot).push(n), Rt(n));
      var f = n.first;
      if (f !== null) {
        n = f;
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
$n = function(t) {
  for (const n of t)
    (n.f & Re ? q(this, on) : q(this, sn)).push(n), qe(n, _e);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
Zn = function() {
  if (!q(this, ln))
    for (const t of q(this, Nt))
      t();
  q(this, Nt).clear();
};
let Ft = Cn;
function Q(e) {
  var t = yn;
  yn = !0;
  try {
    for (var n; ; ) {
      if (Wi(), wt.length === 0 && (ae == null || ae.flush(), wt.length === 0))
        return Bn = null, /** @type {T} */
        n;
      fa();
    }
  } finally {
    yn = t;
  }
}
function fa() {
  var e = At;
  Xn = !0;
  try {
    var t = 0;
    for (Nr(!0); wt.length > 0; ) {
      var n = Ft.ensure();
      if (t++ > 1e3) {
        var r, a;
        Gi();
      }
      n.process(wt), lt.clear();
    }
  } finally {
    Xn = !1, Nr(e), Bn = null;
  }
}
function Gi() {
  try {
    Ai();
  } catch (e) {
    dr(e, Bn);
  }
}
let dt = null;
function Rr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (yt | Ie)) && Nn(r) && (dt = [], Rt(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? xa(r) : r.fn = null), dt.length > 0)) {
        lt.clear();
        for (const a of dt)
          Rt(a);
        dt = [];
      }
    }
    dt = null;
  }
}
function Ht(e) {
  for (var t = Bn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Xn && t === P && n & jt)
      return;
    if (n & (st | Ze)) {
      if (!(n & _e)) return;
      t.f ^= _e;
    }
  }
  wt.push(t);
}
const lt = /* @__PURE__ */ new Map();
function tn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Jr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function se(e, t) {
  const n = tn(e);
  return Ca(n), n;
}
// @__NO_SIDE_EFFECTS__
function ca(e, t = !1, n = !0) {
  const r = tn(e);
  return t || (r.equals = Xr), r;
}
function w(e, t, n = !1) {
  R !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Le || R.f & Pr) && ea() && R.f & (xe | jt | fr | Pr) && !(be != null && be.includes(e)) && Oi();
  let r = n ? Fe(t) : t;
  return nn(e, r);
}
function nn(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    $t ? lt.set(e, t) : lt.set(e, n), e.v = t;
    var r = Ft.ensure();
    r.capture(e, n), e.f & xe && (e.f & Re && hr(
      /** @type {Derived} */
      e
    ), qe(e, e.f & Ae ? ut : _e)), e.wv = Aa(), va(e, Re), P !== null && P.f & _e && !(P.f & (Ze | st)) && (Ce === null ? tl([e]) : Ce.push(e));
  }
  return t;
}
function bn(e, t = 1) {
  var n = i(e), r = t === 1 ? n++ : n--;
  return w(e, n), r;
}
function Yn(e) {
  w(e, e.v + 1);
}
function va(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = n.length, a = 0; a < r; a++) {
      var l = n[a], o = l.f, u = (o & Re) === 0;
      u && qe(l, t), o & xe ? va(
        /** @type {Derived} */
        l,
        ut
      ) : u && (o & jt && dt !== null && dt.push(
        /** @type {Effect} */
        l
      ), Ht(
        /** @type {Effect} */
        l
      ));
    }
}
function Fe(e) {
  if (typeof e != "object" || e === null || Qt in e)
    return e;
  const t = $i(e);
  if (t !== wi && t !== yi)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ir(e), a = /* @__PURE__ */ se(0), l = gt, o = (u) => {
    if (gt === l)
      return u();
    var f = R, c = gt;
    Ue(null), Or(l);
    var h = u();
    return Ue(f), Or(c), h;
  };
  return r && n.set("length", /* @__PURE__ */ se(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ni();
        var h = n.get(f);
        return h === void 0 ? h = o(() => {
          var p = /* @__PURE__ */ se(c.value);
          return n.set(f, p), p;
        }) : w(h, c.value, !0), !0;
      },
      deleteProperty(u, f) {
        var c = n.get(f);
        if (c === void 0) {
          if (f in u) {
            const h = o(() => /* @__PURE__ */ se(fe));
            n.set(f, h), Yn(a);
          }
        } else
          w(c, fe), Yn(a);
        return !0;
      },
      get(u, f, c) {
        var m;
        if (f === Qt)
          return e;
        var h = n.get(f), p = f in u;
        if (h === void 0 && (!p || (m = bt(u, f)) != null && m.writable) && (h = o(() => {
          var v = Fe(p ? u[f] : fe), b = /* @__PURE__ */ se(v);
          return b;
        }), n.set(f, h)), h !== void 0) {
          var g = i(h);
          return g === fe ? void 0 : g;
        }
        return Reflect.get(u, f, c);
      },
      getOwnPropertyDescriptor(u, f) {
        var c = Reflect.getOwnPropertyDescriptor(u, f);
        if (c && "value" in c) {
          var h = n.get(f);
          h && (c.value = i(h));
        } else if (c === void 0) {
          var p = n.get(f), g = p == null ? void 0 : p.v;
          if (p !== void 0 && g !== fe)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return c;
      },
      has(u, f) {
        var g;
        if (f === Qt)
          return !0;
        var c = n.get(f), h = c !== void 0 && c.v !== fe || Reflect.has(u, f);
        if (c !== void 0 || P !== null && (!h || (g = bt(u, f)) != null && g.writable)) {
          c === void 0 && (c = o(() => {
            var m = h ? Fe(u[f]) : fe, v = /* @__PURE__ */ se(m);
            return v;
          }), n.set(f, c));
          var p = i(c);
          if (p === fe)
            return !1;
        }
        return h;
      },
      set(u, f, c, h) {
        var E;
        var p = n.get(f), g = f in u;
        if (r && f === "length")
          for (var m = c; m < /** @type {Source<number>} */
          p.v; m += 1) {
            var v = n.get(m + "");
            v !== void 0 ? w(v, fe) : m in u && (v = o(() => /* @__PURE__ */ se(fe)), n.set(m + "", v));
          }
        if (p === void 0)
          (!g || (E = bt(u, f)) != null && E.writable) && (p = o(() => /* @__PURE__ */ se(void 0)), w(p, Fe(c)), n.set(f, p));
        else {
          g = p.v !== fe;
          var b = o(() => Fe(c));
          w(p, b);
        }
        var $ = Reflect.getOwnPropertyDescriptor(u, f);
        if ($ != null && $.set && $.set.call(h, c), !g) {
          if (r && typeof f == "string") {
            var C = (
              /** @type {Source<number>} */
              n.get("length")
            ), B = Number(f);
            Number.isInteger(B) && B >= C.v && w(C, B + 1);
          }
          Yn(a);
        }
        return !0;
      },
      ownKeys(u) {
        i(a);
        var f = Reflect.ownKeys(u).filter((p) => {
          var g = n.get(p);
          return g === void 0 || g.v !== fe;
        });
        for (var [c, h] of n)
          h.v !== fe && !(c in u) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        Ii();
      }
    }
  );
}
var Br, da, ha, pa;
function Qn() {
  if (Br === void 0) {
    Br = window, da = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ha = bt(t, "firstChild").get, pa = bt(t, "nextSibling").get, Cr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Cr(n) && (n.__t = void 0);
  }
}
function We(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return ha.call(e);
}
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return pa.call(e);
}
function G(e, t) {
  if (!D)
    return /* @__PURE__ */ He(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ He(M)
  );
  if (n === null)
    n = M.appendChild(We());
  else if (t && n.nodeType !== vr) {
    var r = We();
    return n == null || n.before(r), ke(r), r;
  }
  return ke(n), n;
}
function Jt(e, t) {
  if (!D) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ He(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Qe(n) : n;
  }
  return M;
}
function oe(e, t = 1, n = !1) {
  let r = D ? M : e;
  for (var a; t--; )
    a = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Qe(r);
  if (!D)
    return r;
  if (n && (r == null ? void 0 : r.nodeType) !== vr) {
    var l = We();
    return r === null ? a == null || a.after(l) : r.before(l), ke(l), l;
  }
  return ke(r), /** @type {TemplateNode} */
  r;
}
function _a(e) {
  e.textContent = "";
}
function ba() {
  return !1;
}
function ma(e) {
  var t = R, n = P;
  Ue(null), ot(null);
  try {
    return e();
  } finally {
    Ue(t), ot(n);
  }
}
function Ki(e) {
  P === null && R === null && Pi(), R !== null && R.f & Ae && P === null && Ci(), $t && Si();
}
function Ji(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function et(e, t, n, r = !0) {
  var a = P;
  a !== null && a.f & Ie && (e |= Ie);
  var l = {
    ctx: De,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Re,
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
      Rt(l), l.f |= sr;
    } catch (f) {
      throw je(l), f;
    }
  else t !== null && Ht(l);
  if (r) {
    var o = l;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Ut) && (o = o.first), o !== null && (o.parent = a, a !== null && Ji(o, a), R !== null && R.f & xe && !(e & st))) {
      var u = (
        /** @type {Derived} */
        R
      );
      (u.effects ?? (u.effects = [])).push(o);
    }
  }
  return l;
}
function vt(e) {
  Ki();
  var t = (
    /** @type {Effect} */
    P.f
  ), n = !R && (t & Ze) !== 0 && (t & sr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      De
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return ga(e);
}
function ga(e) {
  return et(or | qi, e, !1);
}
function Xi(e) {
  Ft.ensure();
  const t = et(st | Ut, e, !0);
  return () => {
    je(t);
  };
}
function Zi(e) {
  Ft.ensure();
  const t = et(st | Ut, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? pr(t, () => {
      je(t), r(void 0);
    }) : (je(t), r(void 0));
  });
}
function wa(e) {
  return et(or, e, !1);
}
function Qi(e) {
  return et(fr | Ut, e, !0);
}
function ya(e, t = 0) {
  return et(Yr | t, e, !0);
}
function re(e, t = [], n = []) {
  Yi(t, n, (r) => {
    et(Yr, () => e(...r.map(i)), !0);
  });
}
function $a(e, t = 0) {
  var n = et(jt | t, e, !0);
  return n;
}
function Wt(e, t = !0) {
  return et(Ze | Ut, e, !0, t);
}
function Ta(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = $t, r = R;
    Ir(!0), Ue(null);
    try {
      t.call(null);
    } finally {
      Ir(n), Ue(r);
    }
  }
}
function ka(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const a = n.ac;
    a !== null && ma(() => {
      a.abort(cr);
    });
    var r = n.next;
    n.f & st ? n.parent = null : je(n, t), n = r;
  }
}
function el(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Ze || je(t), t = n;
  }
}
function je(e, t = !0) {
  var n = !1;
  (t || e.f & ki) && e.nodes_start !== null && e.nodes_end !== null && (qa(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), ka(e, t && !n), Sn(e, 0), qe(e, yt);
  var r = e.transitions;
  if (r !== null)
    for (const l of r)
      l.stop();
  Ta(e);
  var a = e.parent;
  a !== null && a.first !== null && xa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function qa(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(e)
    );
    e.remove(), e = n;
  }
}
function xa(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function pr(e, t) {
  var n = [];
  _r(e, n, !0), Ea(n, () => {
    je(e), t && t();
  });
}
function Ea(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var a of e)
      a.out(r);
  } else
    t();
}
function _r(e, t, n) {
  if (!(e.f & Ie)) {
    if (e.f ^= Ie, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var a = r.next, l = (r.f & ur) !== 0 || (r.f & Ze) !== 0;
      _r(r, t, l ? n : !1), r = a;
    }
  }
}
function br(e) {
  Sa(e, !0);
}
function Sa(e, t) {
  if (e.f & Ie) {
    e.f ^= Ie, e.f & _e || (qe(e, Re), Ht(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, a = (n.f & ur) !== 0 || (n.f & Ze) !== 0;
      Sa(n, a ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
let At = !1;
function Nr(e) {
  At = e;
}
let $t = !1;
function Ir(e) {
  $t = e;
}
let R = null, Le = !1;
function Ue(e) {
  R = e;
}
let P = null;
function ot(e) {
  P = e;
}
let be = null;
function Ca(e) {
  R !== null && (be === null ? be = [e] : be.push(e));
}
let pe = null, Te = 0, Ce = null;
function tl(e) {
  Ce = e;
}
let Pa = 1, rn = 0, gt = rn;
function Or(e) {
  gt = e;
}
let it = !1;
function Aa() {
  return ++Pa;
}
function Nn(e) {
  var p;
  var t = e.f;
  if (t & Re)
    return !0;
  if (t & ut) {
    var n = e.deps, r = (t & Ae) !== 0;
    if (n !== null) {
      var a, l, o = (t & qn) !== 0, u = r && P !== null && !it, f = n.length;
      if ((o || u) && (P === null || !(P.f & yt))) {
        var c = (
          /** @type {Derived} */
          e
        ), h = c.parent;
        for (a = 0; a < f; a++)
          l = n[a], (o || !((p = l == null ? void 0 : l.reactions) != null && p.includes(c))) && (l.reactions ?? (l.reactions = [])).push(c);
        o && (c.f ^= qn), u && h !== null && !(h.f & Ae) && (c.f ^= Ae);
      }
      for (a = 0; a < f; a++)
        if (l = n[a], Nn(
          /** @type {Derived} */
          l
        ) && la(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!r || P !== null && !it) && qe(e, _e);
  }
  return !1;
}
function Ra(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(be != null && be.includes(e)))
    for (var a = 0; a < r.length; a++) {
      var l = r[a];
      l.f & xe ? Ra(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (n ? qe(l, Re) : l.f & _e && qe(l, ut), Ht(
        /** @type {Effect} */
        l
      ));
    }
}
function Ba(e) {
  var b;
  var t = pe, n = Te, r = Ce, a = R, l = it, o = be, u = De, f = Le, c = gt, h = e.f;
  pe = /** @type {null | Value[]} */
  null, Te = 0, Ce = null, it = (h & Ae) !== 0 && (Le || !At || R === null), R = h & (Ze | st) ? null : e, be = null, xn(e.ctx), Le = !1, gt = ++rn, e.ac !== null && (ma(() => {
    e.ac.abort(cr);
  }), e.ac = null);
  try {
    e.f |= Gn;
    var p = (
      /** @type {Function} */
      e.fn
    ), g = p(), m = e.deps;
    if (pe !== null) {
      var v;
      if (Sn(e, Te), m !== null && Te > 0)
        for (m.length = Te + pe.length, v = 0; v < pe.length; v++)
          m[Te + v] = pe[v];
      else
        e.deps = m = pe;
      if (!it || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      h & xe && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (v = Te; v < m.length; v++)
          ((b = m[v]).reactions ?? (b.reactions = [])).push(e);
    } else m !== null && Te < m.length && (Sn(e, Te), m.length = Te);
    if (ea() && Ce !== null && !Le && m !== null && !(e.f & (xe | ut | Re)))
      for (v = 0; v < /** @type {Source[]} */
      Ce.length; v++)
        Ra(
          Ce[v],
          /** @type {Effect} */
          e
        );
    return a !== null && a !== e && (rn++, Ce !== null && (r === null ? r = Ce : r.push(.../** @type {Source[]} */
    Ce))), e.f & mt && (e.f ^= mt), g;
  } catch ($) {
    return Fi($);
  } finally {
    e.f ^= Gn, pe = t, Te = n, Ce = r, R = a, it = l, be = o, xn(u), Le = f, gt = c;
  }
}
function nl(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = gi.call(n, e);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = t.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  n === null && t.f & xe && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (pe === null || !pe.includes(t)) && (qe(t, ut), t.f & (Ae | qn) || (t.f ^= qn), ia(
    /** @type {Derived} **/
    t
  ), Sn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Sn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      nl(e, n[r]);
}
function Rt(e) {
  var t = e.f;
  if (!(t & yt)) {
    qe(e, _e);
    var n = P, r = At;
    P = e, At = !0;
    try {
      t & jt ? el(e) : ka(e), Ta(e);
      var a = Ba(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = Pa;
      var l;
      Ur && Mi && e.f & Re && e.deps;
    } finally {
      At = r, P = n;
    }
  }
}
async function rl() {
  await Promise.resolve(), Q();
}
function i(e) {
  var t = e.f, n = (t & xe) !== 0;
  if (R !== null && !Le) {
    var r = P !== null && (P.f & yt) !== 0;
    if (!r && !(be != null && be.includes(e))) {
      var a = R.deps;
      if (R.f & Gn)
        e.rv < rn && (e.rv = rn, pe === null && a !== null && a[Te] === e ? Te++ : pe === null ? pe = [e] : (!it || !pe.includes(e)) && pe.push(e));
      else {
        (R.deps ?? (R.deps = [])).push(e);
        var l = e.reactions;
        l === null ? e.reactions = [R] : l.includes(R) || l.push(R);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), u = o.parent;
    u !== null && !(u.f & Ae) && (o.f ^= Ae);
  }
  if ($t) {
    if (lt.has(e))
      return lt.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var f = o.v;
      return (!(o.f & _e) && o.reactions !== null || Na(o)) && (f = hr(o)), lt.set(o, f), f;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, at != null && at.has(o))
      return at.get(o);
    Nn(o) && la(o);
  }
  if (e.f & mt)
    throw e.v;
  return e.v;
}
function Na(e) {
  if (e.v === fe) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (lt.has(t) || t.f & xe && Na(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ia(e) {
  var t = Le;
  try {
    return Le = !0, e();
  } finally {
    Le = t;
  }
}
const al = -7169;
function qe(e, t) {
  e.f = e.f & al | t;
}
const Oa = /* @__PURE__ */ new Set(), er = /* @__PURE__ */ new Set();
function il(e) {
  for (var t = 0; t < e.length; t++)
    Oa.add(e[t]);
  for (var n of er)
    n(e);
}
let Dr = null;
function mn(e) {
  var B;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, a = ((B = e.composedPath) == null ? void 0 : B.call(e)) || [], l = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  Dr = e;
  var o = 0, u = Dr === e && e.__root;
  if (u) {
    var f = a.indexOf(u);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = a.indexOf(t);
    if (c === -1)
      return;
    f <= c && (o = f);
  }
  if (l = /** @type {Element} */
  a[o] || e.target, l !== t) {
    Dt(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || n;
      }
    });
    var h = R, p = P;
    Ue(null), ot(null);
    try {
      for (var g, m = []; l !== null; ) {
        var v = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var b = l["__" + r];
          if (b != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (ir(b)) {
              var [$, ...C] = b;
              $.apply(l, [e, ...C]);
            } else
              b.call(l, e);
        } catch (E) {
          g ? m.push(E) : g = E;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        l = v;
      }
      if (g) {
        for (let E of m)
          queueMicrotask(() => {
            throw E;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ue(h), ot(p);
    }
  }
}
function Da(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Xe(e, t) {
  var n = (
    /** @type {Effect} */
    P
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function L(e, t) {
  var n = (t & mi) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    if (D)
      return Xe(M, null), M;
    r === void 0 && (r = Da(a ? e : "<!>" + e), r = /** @type {Node} */
    /* @__PURE__ */ He(r));
    var l = (
      /** @type {TemplateNode} */
      n || da ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return Xe(l, l), l;
  };
}
function Mr(e = "") {
  if (!D) {
    var t = We(e + "");
    return Xe(t, t), t;
  }
  var n = M;
  return n.nodeType !== vr && (n.before(n = We()), ke(n)), Xe(n, n), n;
}
function Xt() {
  if (D)
    return Xe(M, null), M;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = We();
  return e.append(t, n), Xe(t, n), e;
}
function A(e, t) {
  if (D) {
    P.nodes_end = M, Lt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ll = ["touchstart", "touchmove"];
function ol(e) {
  return ll.includes(e);
}
function Ne(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Ma(e, t) {
  return La(e, t);
}
function sl(e, t) {
  Qn(), t.intro = t.intro ?? !1;
  const n = t.target, r = D, a = M;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ He(n)
    ); l && (l.nodeType !== Mt || /** @type {Comment} */
    l.data !== jr); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(l);
    if (!l)
      throw _t;
    Je(!0), ke(
      /** @type {Comment} */
      l
    ), Lt();
    const o = La(e, { ...t, anchor: l });
    if (M === null || M.nodeType !== Mt || /** @type {Comment} */
    M.data !== ar)
      throw un(), _t;
    return Je(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((u) => u.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== _t && console.warn("Failed to hydrate: ", o), t.recover === !1 && Ri(), Qn(), _a(n), Je(!1), Ma(e, t);
  } finally {
    Je(r), ke(a);
  }
}
const Et = /* @__PURE__ */ new Map();
function La(e, { target: t, anchor: n, props: r = {}, events: a, context: l, intro: o = !0 }) {
  Qn();
  var u = /* @__PURE__ */ new Set(), f = (p) => {
    for (var g = 0; g < p.length; g++) {
      var m = p[g];
      if (!u.has(m)) {
        u.add(m);
        var v = ol(m);
        t.addEventListener(m, mn, { passive: v });
        var b = Et.get(m);
        b === void 0 ? (document.addEventListener(m, mn, { passive: v }), Et.set(m, 1)) : Et.set(m, b + 1);
      }
    }
  };
  f(lr(Oa)), er.add(f);
  var c = void 0, h = Zi(() => {
    var p = n ?? t.appendChild(We());
    return Wt(() => {
      if (l) {
        Zr({});
        var g = (
          /** @type {ComponentContext} */
          De
        );
        g.c = l;
      }
      a && (r.$$events = a), D && Xe(
        /** @type {TemplateNode} */
        p,
        null
      ), c = e(p, r) || {}, D && (P.nodes_end = M), l && Qr();
    }), () => {
      var v;
      for (var g of u) {
        t.removeEventListener(g, mn);
        var m = (
          /** @type {number} */
          Et.get(g)
        );
        --m === 0 ? (document.removeEventListener(g, mn), Et.delete(g)) : Et.set(g, m);
      }
      er.delete(f), p !== n && ((v = p.parentNode) == null || v.removeChild(p));
    };
  });
  return tr.set(c, h), c;
}
let tr = /* @__PURE__ */ new WeakMap();
function ul(e, t) {
  const n = tr.get(e);
  return n ? (tr.delete(e), n(t)) : Promise.resolve();
}
function K(e, t, n = !1) {
  D && Lt();
  var r = e, a = null, l = null, o = fe, u = n ? ur : 0, f = !1;
  const c = (m, v = !0) => {
    f = !0, g(v, m);
  };
  var h = null;
  function p() {
    h !== null && (h.lastChild.remove(), r.before(h), h = null);
    var m = o ? a : l, v = o ? l : a;
    m && br(m), v && pr(v, () => {
      o ? l = null : a = null;
    });
  }
  const g = (m, v) => {
    if (o === (o = m)) return;
    let b = !1;
    if (D) {
      const x = Kr(r) === rr;
      !!o === x && (r = Kn(), ke(r), Je(!1), b = !0);
    }
    var $ = ba(), C = r;
    if ($ && (h = document.createDocumentFragment(), h.append(C = We())), o ? a ?? (a = v && Wt(() => v(C))) : l ?? (l = v && Wt(() => v(C))), $) {
      var B = (
        /** @type {Batch} */
        ae
      ), E = o ? a : l, J = o ? l : a;
      E && B.skipped_effects.delete(E), J && B.skipped_effects.add(J), B.add_callback(p);
    } else
      p();
    b && Je(!0);
  };
  $a(() => {
    f = !1, t(c), f || g(null, null);
  }, u), D && (r = M);
}
function St(e, t) {
  return t;
}
function fl(e, t, n) {
  for (var r = e.items, a = [], l = t.length, o = 0; o < l; o++)
    _r(t[o].e, a, !0);
  var u = l > 0 && a.length === 0 && n !== null;
  if (u) {
    var f = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    _a(f), f.append(
      /** @type {Element} */
      n
    ), r.clear(), Me(e, t[0].prev, t[l - 1].next);
  }
  Ea(a, () => {
    for (var c = 0; c < l; c++) {
      var h = t[c];
      u || (r.delete(h.k), Me(e, h.prev, h.next)), je(h.e, !u);
    }
  });
}
function Ct(e, t, n, r, a, l = null) {
  var o = e, u = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, f = (t & Wr) !== 0;
  if (f) {
    var c = (
      /** @type {Element} */
      e
    );
    o = D ? ke(
      /** @type {Comment | Text} */
      /* @__PURE__ */ He(c)
    ) : c.appendChild(We());
  }
  D && Lt();
  var h = null, p = !1, g = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ aa(() => {
    var C = n();
    return ir(C) ? C : C == null ? [] : lr(C);
  }), v, b;
  function $() {
    cl(
      b,
      v,
      u,
      g,
      o,
      a,
      t,
      r,
      n
    ), l !== null && (v.length === 0 ? h ? br(h) : h = Wt(() => l(o)) : h !== null && pr(h, () => {
      h = null;
    }));
  }
  $a(() => {
    b ?? (b = /** @type {Effect} */
    P), v = /** @type {V[]} */
    i(m);
    var C = v.length;
    if (p && C === 0)
      return;
    p = C === 0;
    let B = !1;
    if (D) {
      var E = Kr(o) === rr;
      E !== (C === 0) && (o = Kn(), ke(o), Je(!1), B = !0);
    }
    if (D) {
      for (var J = null, x, T = 0; T < C; T++) {
        if (M.nodeType === Mt && /** @type {Comment} */
        M.data === ar) {
          o = /** @type {Comment} */
          M, B = !0, Je(!1);
          break;
        }
        var S = v[T], X = r(S, T);
        x = nr(
          M,
          u,
          J,
          null,
          S,
          X,
          T,
          a,
          t,
          n
        ), u.items.set(X, x), J = x;
      }
      C > 0 && ke(Kn());
    }
    if (D)
      C === 0 && l && (h = Wt(() => l(o)));
    else if (ba()) {
      var ue = /* @__PURE__ */ new Set(), O = (
        /** @type {Batch} */
        ae
      );
      for (T = 0; T < C; T += 1) {
        S = v[T], X = r(S, T);
        var ze = u.items.get(X) ?? g.get(X);
        ze ? t & (Pn | An) && Fa(ze, S, T, t) : (x = nr(
          null,
          u,
          null,
          null,
          S,
          X,
          T,
          a,
          t,
          n,
          !0
        ), g.set(X, x)), ue.add(X);
      }
      for (const [ce, tt] of u.items)
        ue.has(ce) || O.skipped_effects.add(tt.e);
      O.add_callback($);
    } else
      $();
    B && Je(!0), i(m);
  }), D && (o = M);
}
function cl(e, t, n, r, a, l, o, u, f) {
  var U, z, Z, ie;
  var c = (o & vi) !== 0, h = (o & (Pn | An)) !== 0, p = t.length, g = n.items, m = n.first, v = m, b, $ = null, C, B = [], E = [], J, x, T, S;
  if (c)
    for (S = 0; S < p; S += 1)
      J = t[S], x = u(J, S), T = g.get(x), T !== void 0 && ((U = T.a) == null || U.measure(), (C ?? (C = /* @__PURE__ */ new Set())).add(T));
  for (S = 0; S < p; S += 1) {
    if (J = t[S], x = u(J, S), T = g.get(x), T === void 0) {
      var X = r.get(x);
      if (X !== void 0) {
        r.delete(x), g.set(x, X);
        var ue = $ ? $.next : v;
        Me(n, $, X), Me(n, X, ue), Vn(X, ue, a), $ = X;
      } else {
        var O = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : a;
        $ = nr(
          O,
          n,
          $,
          $ === null ? n.first : $.next,
          J,
          x,
          S,
          l,
          o,
          f
        );
      }
      g.set(x, $), B = [], E = [], v = $.next;
      continue;
    }
    if (h && Fa(T, J, S, o), T.e.f & Ie && (br(T.e), c && ((z = T.a) == null || z.unfix(), (C ?? (C = /* @__PURE__ */ new Set())).delete(T))), T !== v) {
      if (b !== void 0 && b.has(T)) {
        if (B.length < E.length) {
          var ze = E[0], ce;
          $ = ze.prev;
          var tt = B[0], ft = B[B.length - 1];
          for (ce = 0; ce < B.length; ce += 1)
            Vn(B[ce], ze, a);
          for (ce = 0; ce < E.length; ce += 1)
            b.delete(E[ce]);
          Me(n, tt.prev, ft.next), Me(n, $, tt), Me(n, ft, ze), v = ze, $ = ft, S -= 1, B = [], E = [];
        } else
          b.delete(T), Vn(T, v, a), Me(n, T.prev, T.next), Me(n, T, $ === null ? n.first : $.next), Me(n, $, T), $ = T;
        continue;
      }
      for (B = [], E = []; v !== null && v.k !== x; )
        v.e.f & Ie || (b ?? (b = /* @__PURE__ */ new Set())).add(v), E.push(v), v = v.next;
      if (v === null)
        continue;
      T = v;
    }
    B.push(T), $ = T, v = T.next;
  }
  if (v !== null || b !== void 0) {
    for (var Ye = b === void 0 ? [] : lr(b); v !== null; )
      v.e.f & Ie || Ye.push(v), v = v.next;
    var Tt = Ye.length;
    if (Tt > 0) {
      var fn = o & Wr && p === 0 ? a : null;
      if (c) {
        for (S = 0; S < Tt; S += 1)
          (Z = Ye[S].a) == null || Z.measure();
        for (S = 0; S < Tt; S += 1)
          (ie = Ye[S].a) == null || ie.fix();
      }
      fl(n, Ye, fn);
    }
  }
  c && ra(() => {
    var me;
    if (C !== void 0)
      for (T of C)
        (me = T.a) == null || me.apply();
  }), e.first = n.first && n.first.e, e.last = $ && $.e;
  for (var In of r.values())
    je(In.e);
  r.clear();
}
function Fa(e, t, n, r) {
  r & Pn && nn(e.v, t), r & An ? nn(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function nr(e, t, n, r, a, l, o, u, f, c, h) {
  var p = (f & Pn) !== 0, g = (f & di) === 0, m = p ? g ? /* @__PURE__ */ ca(a, !1, !1) : tn(a) : a, v = f & An ? tn(o) : o, b = {
    i: v,
    v: m,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (e === null) {
      var $ = document.createDocumentFragment();
      $.append(e = We());
    }
    return b.e = Wt(() => u(
      /** @type {Node} */
      e,
      m,
      v,
      c
    ), D), b.e.prev = n && n.e, b.e.next = r && r.e, n === null ? h || (t.first = b) : (n.next = b, n.e.next = b.e), r !== null && (r.prev = b, r.e.prev = b.e), b;
  } finally {
  }
}
function Vn(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, a = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== null && l !== r; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Qe(l)
    );
    a.before(l), l = o;
  }
}
function Me(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function gn(e, t, n = !1, r = !1, a = !1) {
  var l = e, o = "";
  re(() => {
    var u = (
      /** @type {Effect} */
      P
    );
    if (o === (o = t() ?? "")) {
      D && Lt();
      return;
    }
    if (u.nodes_start !== null && (qa(
      u.nodes_start,
      /** @type {TemplateNode} */
      u.nodes_end
    ), u.nodes_start = u.nodes_end = null), o !== "") {
      if (D) {
        M.data;
        for (var f = Lt(), c = f; f !== null && (f.nodeType !== Mt || /** @type {Comment} */
        f.data !== ""); )
          c = f, f = /** @type {TemplateNode} */
          /* @__PURE__ */ Qe(f);
        if (f === null)
          throw un(), _t;
        Xe(M, c), l = ke(f);
        return;
      }
      var h = o + "";
      n ? h = `<svg>${h}</svg>` : r && (h = `<math>${h}</math>`);
      var p = Da(h);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ He(p)), Xe(
        /** @type {TemplateNode} */
        /* @__PURE__ */ He(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ He(p); )
          l.before(
            /** @type {Node} */
            /* @__PURE__ */ He(p)
          );
      else
        l.before(p);
    }
  });
}
function vl(e, t) {
  wa(() => {
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
function dl(e, t, n) {
  var r = e == null ? "" : "" + e;
  return r = r ? r + " " + t : t, r === "" ? null : r;
}
function hl(e, t) {
  return e == null ? null : String(e);
}
function Zt(e, t, n, r, a, l) {
  var o = e.__className;
  if (D || o !== n || o === void 0) {
    var u = dl(n, r);
    (!D || u !== e.getAttribute("class")) && (u == null ? e.removeAttribute("class") : e.className = u), e.__className = n;
  }
  return l;
}
function Pt(e, t, n, r) {
  var a = e.__style;
  if (D || a !== t) {
    var l = hl(t);
    (!D || l !== e.getAttribute("style")) && (l == null ? e.removeAttribute("style") : e.style.cssText = l), e.__style = t;
  }
  return r;
}
function Lr(e, t) {
  return e === t || (e == null ? void 0 : e[Qt]) === t;
}
function Fr(e = {}, t, n, r) {
  return wa(() => {
    var a, l;
    return ya(() => {
      a = l, l = [], Ia(() => {
        e !== n(...l) && (t(e, ...l), a && Lr(n(...a), e) && t(null, ...a));
      });
    }), () => {
      ra(() => {
        l && Lr(n(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
let wn = !1;
function pl(e) {
  var t = wn;
  try {
    return wn = !1, [e(), wn];
  } finally {
    wn = t;
  }
}
function ne(e, t, n, r) {
  var B;
  var a = (n & _i) !== 0, l = (n & bi) !== 0, o = (
    /** @type {V} */
    r
  ), u = !0, f = () => (u && (u = !1, o = l ? Ia(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), o), c;
  if (a) {
    var h = Qt in e || Gr in e;
    c = ((B = bt(e, t)) == null ? void 0 : B.set) ?? (h && t in e ? (E) => e[t] = E : void 0);
  }
  var p, g = !1;
  a ? [p, g] = pl(() => (
    /** @type {V} */
    e[t]
  )) : p = /** @type {V} */
  e[t], p === void 0 && r !== void 0 && (p = f(), c && (Bi(), c(p)));
  var m;
  if (m = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? f() : (u = !0, E);
  }, !(n & pi))
    return m;
  if (c) {
    var v = e.$$legacy;
    return (
      /** @type {() => V} */
      function(E, J) {
        return arguments.length > 0 ? ((!J || v || g) && c(J ? m() : E), E) : m();
      }
    );
  }
  var b = !1, $ = (n & hi ? Rn : aa)(() => (b = !1, m()));
  a && i($);
  var C = (
    /** @type {Effect} */
    P
  );
  return (
    /** @type {() => V} */
    function(E, J) {
      if (arguments.length > 0) {
        const x = J ? i($) : a ? Fe(E) : E;
        return w($, x), b = !0, o !== void 0 && (o = x), E;
      }
      return $t && b || C.f & yt ? $.v : i($);
    }
  );
}
function _l(e) {
  return new bl(e);
}
var Ke, Pe;
class bl {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    de(this, Ke);
    /** @type {Record<string, any>} */
    de(this, Pe);
    var l;
    var n = /* @__PURE__ */ new Map(), r = (o, u) => {
      var f = /* @__PURE__ */ ca(u, !1, !1);
      return n.set(o, f), f;
    };
    const a = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, u) {
          return i(n.get(u) ?? r(u, Reflect.get(o, u)));
        },
        has(o, u) {
          return u === Gr ? !0 : (i(n.get(u) ?? r(u, Reflect.get(o, u))), Reflect.has(o, u));
        },
        set(o, u, f) {
          return w(n.get(u) ?? r(u, f), f), Reflect.set(o, u, f);
        }
      }
    );
    we(this, Pe, (t.hydrate ? sl : Ma)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: a,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((l = t == null ? void 0 : t.props) != null && l.$$host) || t.sync === !1) && Q(), we(this, Ke, a.$$events);
    for (const o of Object.keys(q(this, Pe)))
      o === "$set" || o === "$destroy" || o === "$on" || Dt(this, o, {
        get() {
          return q(this, Pe)[o];
        },
        /** @param {any} value */
        set(u) {
          q(this, Pe)[o] = u;
        },
        enumerable: !0
      });
    q(this, Pe).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(a, o);
    }, q(this, Pe).$destroy = () => {
      ul(q(this, Pe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    q(this, Pe).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    q(this, Ke)[t] = q(this, Ke)[t] || [];
    const r = (...a) => n.call(this, ...a);
    return q(this, Ke)[t].push(r), () => {
      q(this, Ke)[t] = q(this, Ke)[t].filter(
        /** @param {any} fn */
        (a) => a !== r
      );
    };
  }
  $destroy() {
    q(this, Pe).$destroy();
  }
}
Ke = new WeakMap(), Pe = new WeakMap();
let Ha;
typeof HTMLElement == "function" && (Ha = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    he(this, "$$ctor");
    /** Slots */
    he(this, "$$s");
    /** @type {any} The Svelte component instance */
    he(this, "$$c");
    /** Whether or not the custom element is connected */
    he(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    he(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    he(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    he(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    he(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    he(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    he(this, "$$me");
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
        return (l) => {
          const o = document.createElement("slot");
          a !== "default" && (o.name = a), A(l, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = ml(this);
      for (const a of this.$$s)
        a in r && (a === "default" && !this.$$d.children ? (this.$$d.children = t(a), n.default = !0) : n[a] = t(a));
      for (const a of this.attributes) {
        const l = this.$$g_p(a.name);
        l in this.$$d || (this.$$d[l] = Tn(l, a.value, this.$$p_d, "toProp"));
      }
      for (const a in this.$$p_d)
        !(a in this.$$d) && this[a] !== void 0 && (this.$$d[a] = this[a], delete this[a]);
      this.$$c = _l({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Xi(() => {
        ya(() => {
          var a;
          this.$$r = !0;
          for (const l of kn(this.$$c)) {
            if (!((a = this.$$p_d[l]) != null && a.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const o = Tn(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, o);
          }
          this.$$r = !1;
        });
      });
      for (const a in this.$$l)
        for (const l of this.$$l[a]) {
          const o = this.$$c.$on(a, l);
          this.$$l_u.set(l, o);
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Tn(t, r, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({ [t]: this.$$d[t] }));
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
    return kn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function Tn(e, t, n, r) {
  var l;
  const a = (l = n[e]) == null ? void 0 : l.type;
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
function ml(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function gl(e, t, n, r, a, l) {
  let o = class extends Ha {
    constructor() {
      super(e, n, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return kn(t).map(
        (u) => (t[u].attribute || u).toLowerCase()
      );
    }
  };
  return kn(t).forEach((u) => {
    Dt(o.prototype, u, {
      get() {
        return this.$$c && u in this.$$c ? this.$$c[u] : this.$$d[u];
      },
      set(f) {
        var p;
        f = Tn(u, f, t), this.$$d[u] = f;
        var c = this.$$c;
        if (c) {
          var h = (p = bt(c, u)) == null ? void 0 : p.get;
          h ? c[u] = f : c.$set({ [u]: f });
        }
      }
    });
  }), r.forEach((u) => {
    Dt(o.prototype, u, {
      get() {
        var f;
        return (f = this.$$c) == null ? void 0 : f[u];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
const wl = {
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
}, yl = {
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
function $l(e, t) {
  const n = t.style;
  n.setProperty("--terminal-bg", e.background), n.setProperty("--terminal-fg", e.foreground), n.setProperty("--terminal-border", e.border), n.setProperty("--terminal-header-bg", e.headerBg), n.setProperty("--terminal-header-fg", e.headerFg), n.setProperty("--terminal-prompt", e.prompt), n.setProperty("--terminal-command", e.command), n.setProperty("--terminal-output", e.output), n.setProperty("--terminal-error", e.error), n.setProperty("--terminal-warning", e.warning), n.setProperty("--terminal-info", e.info), n.setProperty("--terminal-success", e.success), n.setProperty("--terminal-selection", e.selection), n.setProperty("--terminal-cursor", e.cursor);
}
function Tl(e, t) {
  return { ...e, ...t };
}
var kl = /* @__PURE__ */ L('<div class="terminal-buttons svelte-1oe4pqn"><span class="terminal-button close svelte-1oe4pqn"></span> <span class="terminal-button minimize svelte-1oe4pqn"></span> <span class="terminal-button maximize svelte-1oe4pqn"></span></div>'), ql = /* @__PURE__ */ L('<button class="control-button svelte-1oe4pqn"> </button>'), xl = /* @__PURE__ */ L('<button class="control-button svelte-1oe4pqn">↺</button>'), El = /* @__PURE__ */ L('<button class="control-button svelte-1oe4pqn"> </button>'), Sl = /* @__PURE__ */ L('<div class="terminal-controls svelte-1oe4pqn"><!> <!> <!></div>'), Cl = /* @__PURE__ */ L('<div class="terminal-header svelte-1oe4pqn"><!> <div class="terminal-title svelte-1oe4pqn"> </div> <!></div>'), Pl = /* @__PURE__ */ L('<span class="tab-icon svelte-1oe4pqn"> </span>'), Al = /* @__PURE__ */ L('<span class="tab-badge svelte-1oe4pqn"> </span>'), Rl = /* @__PURE__ */ L('<span class="tab-close svelte-1oe4pqn" role="button" tabindex="0">×</span>'), Bl = /* @__PURE__ */ L('<button><!> <span class="tab-title svelte-1oe4pqn"> </span> <!> <!></button>'), Nl = /* @__PURE__ */ L('<button class="terminal-tab tab-add svelte-1oe4pqn">+</button>'), Il = /* @__PURE__ */ L('<div class="terminal-tabs svelte-1oe4pqn"><!> <!></div>'), Ol = (e, t) => {
  (e.key === "Enter" || e.key === " ") && t();
}, Dl = /* @__PURE__ */ L("<div><!></div>"), Ml = /* @__PURE__ */ L('<div class="terminal-table-row svelte-1oe4pqn"></div>'), Ll = /* @__PURE__ */ L('<div><div class="terminal-table svelte-1oe4pqn"></div></div>'), Fl = /* @__PURE__ */ L('<div class="rich-text-segment svelte-1oe4pqn"><!></div>'), Hl = /* @__PURE__ */ L('<span class="rich-text-segment svelte-1oe4pqn"><!></span>'), Wl = /* @__PURE__ */ L('<span class="typing-cursor svelte-1oe4pqn">▊</span>'), jl = /* @__PURE__ */ L('<div><pre class="svelte-1oe4pqn"><!><!><!></pre></div>'), Ul = /* @__PURE__ */ L('<div class="terminal-cursor svelte-1oe4pqn">▊</div>'), zl = /* @__PURE__ */ L('<span class="tab-icon svelte-1oe4pqn"> </span>'), Yl = /* @__PURE__ */ L('<span class="tab-badge svelte-1oe4pqn"> </span>'), Vl = /* @__PURE__ */ L('<span class="tab-close svelte-1oe4pqn" role="button" tabindex="0">×</span>'), Gl = /* @__PURE__ */ L('<button><!> <span class="tab-title svelte-1oe4pqn"> </span> <!> <!></button>'), Kl = /* @__PURE__ */ L('<button class="terminal-tab tab-add svelte-1oe4pqn">+</button>'), Jl = /* @__PURE__ */ L('<div class="terminal-tabs terminal-tabs-bottom svelte-1oe4pqn"><!> <!></div>'), Xl = /* @__PURE__ */ L('<div class="terminal svelte-1oe4pqn"><!> <!> <div class="terminal-content svelte-1oe4pqn" role="button" aria-label="Terminal output - click to skip typing animation" tabindex="0"><!> <!></div> <!></div>');
const Zl = {
  hash: "svelte-1oe4pqn",
  code: `:host {display:block;font-family:'Cascadia Code', 'Fira Code', 'Monaco', 'Consolas', monospace;font-size:14px;line-height:1.5;}.terminal.svelte-1oe4pqn {width:100%;height:100%;min-height:300px;background:var(--terminal-bg);color:var(--terminal-fg);border:1px solid var(--terminal-border);border-radius:8px;overflow:hidden;display:flex;flex-direction:column;transition:all 0.3s ease;}.terminal-header.svelte-1oe4pqn {background:var(--terminal-header-bg);color:var(--terminal-header-fg);padding:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--terminal-border);}.terminal-buttons.svelte-1oe4pqn {display:flex;gap:8px;}.terminal-button.svelte-1oe4pqn {width:12px;height:12px;border-radius:50%;display:inline-block;}.terminal-button.close.svelte-1oe4pqn {background:#ff5f56;}.terminal-button.minimize.svelte-1oe4pqn {background:#ffbd2e;}.terminal-button.maximize.svelte-1oe4pqn {background:#27c93f;}.terminal-title.svelte-1oe4pqn {flex:1;text-align:center;font-weight:500;}.terminal-controls.svelte-1oe4pqn {display:flex;gap:8px;}.control-button.svelte-1oe4pqn {background:transparent;color:var(--terminal-header-fg);border:1px solid var(--terminal-border);padding:4px 8px;border-radius:4px;cursor:pointer;font-size:12px;transition:all 0.2s;}.control-button.svelte-1oe4pqn:hover:not(:disabled) {background:var(--terminal-border);color:var(--terminal-fg);}.control-button.svelte-1oe4pqn:disabled {opacity:0.5;cursor:not-allowed;}.terminal-content.svelte-1oe4pqn {flex:1;padding:16px;overflow-y:auto;font-family:inherit;}.terminal-line.svelte-1oe4pqn {margin:4px 0;white-space:pre-wrap;word-break:break-word;}.terminal-line.svelte-1oe4pqn pre:where(.svelte-1oe4pqn) {margin:0;font-family:inherit;display:block;white-space:pre-wrap;}.step-command.svelte-1oe4pqn {color:var(--terminal-command);font-weight:bold;}.step-output.svelte-1oe4pqn {color:var(--terminal-output);}.step-error.svelte-1oe4pqn {color:var(--terminal-error);}.step-warning.svelte-1oe4pqn {color:var(--terminal-warning);}.step-info.svelte-1oe4pqn {color:var(--terminal-info);}.step-success.svelte-1oe4pqn {color:var(--terminal-success);}.terminal-cursor.svelte-1oe4pqn {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-1oe4pqn-blink 1s infinite;}.typing-cursor.svelte-1oe4pqn {display:inline-block;color:var(--terminal-cursor);
    animation: svelte-1oe4pqn-blink 1s infinite;margin-left:2px;}

  @keyframes svelte-1oe4pqn-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Link styles */.terminal-link.svelte-1oe4pqn {color:inherit;text-decoration:none !important; /* Remove default underline */border-bottom:1px dashed currentColor !important;transition:border-bottom-style 0.2s ease;cursor:pointer;display:inline-block; /* Ensure the element is interactive */}.terminal-link.svelte-1oe4pqn:hover {border-bottom-style:solid !important;}.terminal-link.svelte-1oe4pqn:active {opacity:0.8;}

  /* Override link colors for different step types */.step-output.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-output);}.step-error.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-error);}.step-warning.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-warning);}.step-info.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-info);}.step-success.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-success);}.step-command.svelte-1oe4pqn .terminal-link:where(.svelte-1oe4pqn) {color:var(--terminal-command);}.terminal-content.svelte-1oe4pqn::-webkit-scrollbar {width:8px;}.terminal-content.svelte-1oe4pqn::-webkit-scrollbar-track {background:var(--terminal-bg);}.terminal-content.svelte-1oe4pqn::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:4px;}.terminal-content.svelte-1oe4pqn::-webkit-scrollbar-thumb:hover {background:var(--terminal-header-fg);}

  /* Tab styles */.terminal-tabs.svelte-1oe4pqn {display:flex;background:var(--terminal-header-bg);border-bottom:1px solid var(--terminal-border);gap:4px;overflow-x:auto;align-items:center;}.terminal-tabs-bottom.svelte-1oe4pqn {border-bottom:none;border-top:1px solid var(--terminal-border);}.terminal-tab.svelte-1oe4pqn {display:flex;align-items:center;gap:6px;padding:8px 12px;background:transparent;color:var(--terminal-header-fg);border:none;border-top:2px solid transparent;cursor:pointer;font-family:inherit;font-size:13px;transition:all 0.2s;white-space:nowrap;position:relative;}.terminal-tabs-bottom.svelte-1oe4pqn .terminal-tab:where(.svelte-1oe4pqn) {border-top:none;border-bottom:2px solid transparent;}.terminal-tab.svelte-1oe4pqn:hover {background:rgba(255, 255, 255, 0.05);}.terminal-tab.active.svelte-1oe4pqn {background:var(--terminal-bg);border-top-color:var(--terminal-command);}.terminal-tabs-bottom.svelte-1oe4pqn .terminal-tab.active:where(.svelte-1oe4pqn) {border-top-color:transparent;border-bottom-color:var(--terminal-command);}.tab-icon.svelte-1oe4pqn {font-size:14px;}.tab-title.svelte-1oe4pqn {flex:1;}.tab-badge.svelte-1oe4pqn {padding:2px 6px;background:var(--terminal-command);color:var(--terminal-bg);border-radius:10px;font-size:11px;font-weight:bold;min-width:18px;text-align:center;}.tab-close.svelte-1oe4pqn {margin-left:4px;padding:0 4px;background:transparent;border:none;color:var(--terminal-header-fg);cursor:pointer;font-size:18px;line-height:1;opacity:0.6;transition:opacity 0.2s;}.tab-close.svelte-1oe4pqn:hover {opacity:1;color:var(--terminal-error);}.tab-add.svelte-1oe4pqn {padding:8px 16px;font-weight:bold;opacity:0.7;}.tab-add.svelte-1oe4pqn:hover {opacity:1;background:rgba(255, 255, 255, 0.1);}

  /* Tab status indicators */.tab-status-running.svelte-1oe4pqn .tab-icon:where(.svelte-1oe4pqn)::after {content:'●';color:var(--terminal-warning);position:absolute;top:6px;left:8px;font-size:8px;
    animation: svelte-1oe4pqn-pulse 1.5s infinite;}.tab-status-error.svelte-1oe4pqn .tab-icon:where(.svelte-1oe4pqn)::after {content:'●';color:var(--terminal-error);position:absolute;top:6px;left:8px;font-size:8px;}.tab-status-success.svelte-1oe4pqn .tab-icon:where(.svelte-1oe4pqn)::after {content:'●';color:var(--terminal-success);position:absolute;top:6px;left:8px;font-size:8px;}

  @keyframes svelte-1oe4pqn-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* Scrollbar for tabs */.terminal-tabs.svelte-1oe4pqn::-webkit-scrollbar {height:4px;}.terminal-tabs.svelte-1oe4pqn::-webkit-scrollbar-track {background:transparent;}.terminal-tabs.svelte-1oe4pqn::-webkit-scrollbar-thumb {background:var(--terminal-border);border-radius:2px;}

  /* Rich text segment styling */.rich-text-segment.svelte-1oe4pqn {display:inline;}

  /* Ensure rich text inherits terminal font properties */.terminal-line.svelte-1oe4pqn .rich-text-segment:where(.svelte-1oe4pqn) {font-family:inherit;font-size:inherit;line-height:inherit;}

  /* Table layout styling */.terminal-table.svelte-1oe4pqn {display:block;width:100%;font-family:inherit;margin:0;padding:0;}.terminal-table-row.svelte-1oe4pqn {display:grid !important;grid-template-columns:60px 100px 180px 1fr !important;gap:16px;min-height:1.5em;align-items:baseline;font-family:inherit;}.terminal-table-cell.svelte-1oe4pqn {overflow:visible;}

  /* Semantic column styling with fixed positioning */.terminal-table-row.svelte-1oe4pqn .terminal-table-cell.col-position:where(.svelte-1oe4pqn) {grid-column:1;text-align:right;white-space:nowrap;}.terminal-table-row.svelte-1oe4pqn .terminal-table-cell.col-type:where(.svelte-1oe4pqn) {grid-column:2;text-align:right;white-space:nowrap;}.terminal-table-row.svelte-1oe4pqn .terminal-table-cell.col-rule:where(.svelte-1oe4pqn) {grid-column:3;white-space:nowrap;}.terminal-table-row.svelte-1oe4pqn .terminal-table-cell.col-message:where(.svelte-1oe4pqn) {grid-column:4;white-space:normal;word-break:break-word;}`
};
function Ql(e, t) {
  Zr(t, !0), vl(e, Zl);
  let n = ne(t, "theme", 7, "dark"), r = ne(t, "session", 23, () => []), a = ne(t, "autoplay", 7, !1), l = ne(t, "playbackSpeed", 7, 1), o = ne(t, "showHeader", 7), u = ne(t, "title", 7, "Terminal"), f = ne(t, "colors", 23, () => ({})), c = ne(t, "typingSpeed", 7, 40), h = ne(t, "enableTyping", 7, !0), p = ne(t, "showPlayButton", 7), g = ne(t, "showResetButton", 7), m = ne(t, "showThemeToggle", 7), v = ne(t, "showWindowButtons", 7), b = ne(t, "tabs", 23, () => []), $ = ne(t, "activeTab", 7, 0), C = ne(t, "showTabs", 7, !1), B = ne(t, "allowTabClose", 7, !0), E = ne(t, "allowTabAdd", 7, !1), J = ne(t, "tabBarPosition", 7, "top"), x, T, S = /* @__PURE__ */ se(Fe($() || 0)), X = /* @__PURE__ */ se(Fe(/* @__PURE__ */ new Map())), ue = /* @__PURE__ */ $e(() => C() && b() && b().length > 0 ? b()[i(S)] || b()[0] : null), O = /* @__PURE__ */ $e(() => i(ue) ? i(ue).session : r()), ze = /* @__PURE__ */ $e(() => i(ue) ? i(ue).title : u());
  function ce(s, d = !0, y = "") {
    return console.log(`[parseBooleanProp] ${y}:`, {
      raw: s,
      type: typeof s,
      isUndefined: s === void 0,
      isNull: s === null,
      defaultValue: d
    }), s == null ? d : typeof s == "boolean" ? s : typeof s == "string" ? s.toLowerCase() === "false" ? !1 : (s.toLowerCase() === "true", !0) : d;
  }
  console.log("[Terminal Props] Raw values:", {
    showPlayButton: p(),
    showResetButton: g(),
    showThemeToggle: m(),
    showWindowButtons: v(),
    showHeader: o()
  });
  let tt = /* @__PURE__ */ $e(() => ce(p(), !0, "showPlayButton")), ft = /* @__PURE__ */ $e(() => ce(g(), !0, "showResetButton")), Ye = /* @__PURE__ */ $e(() => ce(m(), !0, "showThemeToggle")), Tt = /* @__PURE__ */ $e(() => ce(v(), !0, "showWindowButtons")), fn = /* @__PURE__ */ $e(() => i(tt) || i(ft) || i(Ye));
  vt(() => {
    console.log("[Terminal Computed] Button visibility:", {
      showPlayButtonComputed: i(tt),
      showResetButtonComputed: i(ft),
      showThemeToggleComputed: i(Ye),
      showWindowButtonsComputed: i(Tt),
      hasControlButtons: i(fn)
    });
  });
  let In = /* @__PURE__ */ $e(() => ce(o(), !0)), U = /* @__PURE__ */ se(0), z = /* @__PURE__ */ se(!1), Z = /* @__PURE__ */ se(Fe([])), ie = /* @__PURE__ */ se(-1), me = /* @__PURE__ */ se(""), zt = /* @__PURE__ */ se(!1), On = /* @__PURE__ */ se(!1), Dn = /* @__PURE__ */ se(Fe(a())), ve = null, le = null, mr = -1, cn = "", gr = /* @__PURE__ */ $e(() => Tl(n() === "dark" ? wl : yl, f()));
  vt(() => {
    x && i(gr) && $l(i(gr), x);
  }), vt(() => {
    const s = i(Z).length;
    T && s > 0 && rl().then(() => {
      T && (T.scrollTop = T.scrollHeight);
    });
  });
  function vn() {
    i(z) || !i(O) || i(U) >= i(O).length || (w(z, !0), Yt());
  }
  function Yt() {
    if (!i(O) || i(U) >= i(O).length) {
      w(z, !1), ve = null;
      return;
    }
    const s = i(O)[i(U)], d = (s.delay || 1e3) / l();
    ve = setTimeout(
      () => {
        if (!i(O)) {
          w(z, !1), ve = null;
          return;
        }
        s.type === "command" && h() && !s.skipTyping ? Wa(s) : (w(Z, [...i(Z), s], !0), bn(U), i(U) < i(O).length && i(z) ? Yt() : (w(z, !1), ve = null));
      },
      d
    );
  }
  function Wa(s) {
    w(ie, i(Z).length, !0), w(me, ""), w(Z, [...i(Z), { ...s, content: "" }], !0);
    const d = Ua(s.content);
    let y = 0;
    const V = 1e3 / (s.typingSpeed || c());
    function F() {
      if (!i(z) || !i(O) || i(ie) < 0) {
        le = null, w(ie, -1), w(me, "");
        return;
      }
      if (y < d.length) {
        w(me, i(me) + d[y]), w(Z, i(Z).map((I, te) => te === i(ie) ? { ...s, content: i(me) } : I), !0), y++;
        const N = V * 0.2, ee = V + (Math.random() - 0.5) * N;
        le = setTimeout(
          () => {
            requestAnimationFrame(() => F());
          },
          ee
        );
      } else
        w(ie, -1), w(me, ""), le = null, bn(U), i(U) < i(O).length && i(z) ? Yt() : w(z, !1);
    }
    requestAnimationFrame(() => F());
  }
  function dn() {
    ve && (clearTimeout(ve), ve = null), le && (clearTimeout(le), le = null), w(U, 0), w(Z, [], !0), w(z, !1), w(ie, -1), w(me, "");
  }
  function ja() {
    if (i(z))
      w(z, !1), ve && (clearTimeout(ve), ve = null), le && (clearTimeout(le), le = null);
    else {
      if (!i(O) || i(O).length === 0)
        return;
      i(U) >= i(O).length ? (dn(), setTimeout(() => vn(), 10)) : vn();
    }
  }
  function wr(s) {
    return `step-${s}`;
  }
  function Mn(s) {
    return Array.isArray(s);
  }
  function Ua(s) {
    return typeof s == "string" ? s : s.map((d) => d.text).join("");
  }
  function za(s) {
    return Mn(s) ? s.some((d) => d.isTableRow || d.tableColumn) : !1;
  }
  function Ya(s) {
    const d = [];
    let y = [];
    for (const Y of s)
      Y.isTableRow && y.length > 0 ? (d.push([...y]), y = [Y]) : y.push(Y);
    return y.length > 0 && d.push([...y]), d;
  }
  function Va(s) {
    if (!s) return !1;
    const d = ["javascript:", "data:", "vbscript:"], y = s.toLowerCase().trim();
    if (d.some((N) => y.startsWith(N)))
      return !1;
    const V = ["http://", "https://", "mailto:", "tel:", "//", "/"].some((N) => y.startsWith(N)), F = y.includes(":");
    return V || !F;
  }
  function Ln(s) {
    const d = s.text.replace(/\n/g, "<br>");
    if (s.url && Va(s.url)) {
      const y = s.target || "_blank", Y = y === "_blank" ? "noopener noreferrer" : "";
      let V = Fn(s, !0);
      const F = "color: white; text-decoration: none; border-bottom: 1px dashed white; cursor: pointer; display: inline-block; padding-bottom: 1px;";
      return V = V ? `${V}; ${F}` : F, `<a href="${s.url}" target="${y}" rel="${Y}" style="${V}" class="terminal-link" onmouseover="this.style.borderBottomStyle='solid'" onmouseout="this.style.borderBottomStyle='dashed'">${d}</a>`;
    }
    return d;
  }
  function Fn(s, d = !1) {
    const y = [];
    return s.color && y.push(`color: ${s.color}`), s.backgroundColor && y.push(`background-color: ${s.backgroundColor}`), s.fontWeight && y.push(`font-weight: ${s.fontWeight}`), !d && s.textDecoration && y.push(`text-decoration: ${s.textDecoration}`), s.fontStyle && y.push(`font-style: ${s.fontStyle}`), s.marginTop && y.push(`margin-top: ${s.marginTop}`), s.marginBottom && y.push(`margin-bottom: ${s.marginBottom}`), s.marginLeft && y.push(`margin-left: ${s.marginLeft}`), s.marginRight && y.push(`margin-right: ${s.marginRight}`), y.join("; ");
  }
  function yr() {
    i(ie) >= 0 && i(ie) < i(Z).length && (le && (clearTimeout(le), le = null), w(
      Z,
      i(Z).map((s, d) => d === i(ie) ? {
        ...s,
        content: i(O)[i(U)].content
      } : s),
      !0
    ), w(ie, -1), w(me, ""), bn(U), i(U) < i(O).length && i(z) ? Yt() : w(z, !1));
  }
  let hn = null;
  vt(() => {
    if (x && typeof IntersectionObserver < "u") {
      const s = new IntersectionObserver(
        (d) => {
          d.forEach((y) => {
            w(On, y.isIntersecting, !0);
          });
        },
        { threshold: 0.1 }
        // Trigger when 10% visible
      );
      return s.observe(x), () => {
        s && s.disconnect();
      };
    }
  }), vt(() => {
    a() !== i(Dn) && (!i(Dn) && a() && w(zt, !1), w(Dn, a()));
  }), vt(() => {
    a() && i(On) && !i(zt) && !i(z) && i(O) && i(O).length > 0 && i(U) === 0 && (w(zt, !0), setTimeout(() => vn(), 300));
  }), vt(() => {
    if (x) {
      if (C() && b() && b().length > 0) {
        const d = b()[i(S)] || b()[0];
        d && (cn = d.id);
      }
      const s = () => {
        const d = i(O);
        !C() && d && d.length !== mr && (mr = d.length, (i(Z).length > 0 || i(U) > 0) && (dn(), w(
          zt,
          !1
          // Reset autoplay flag for new session
        ))), C() && i(ue) && i(ue).id !== cn && !i(X).has(i(ue).id) && (cn = i(ue).id, i(X).has(i(ue).id) || w(zt, !1));
      };
      s(), hn = setInterval(s, 500);
    }
    return () => {
      hn !== null && (clearInterval(hn), hn = null), ve && (clearTimeout(ve), ve = null), le && (clearTimeout(le), le = null);
    };
  });
  function Ga() {
    const s = n() === "dark" ? "light" : "dark";
    x == null || x.dispatchEvent(new CustomEvent("theme-change", { detail: s }));
  }
  function Ka() {
    i(ue) && i(X).set(i(ue).id, {
      currentStepIndex: i(U),
      isPlaying: i(z),
      displayedSteps: [...i(Z)],
      typingStepIndex: i(ie),
      typedContent: i(me),
      lastUpdateTime: Date.now()
    });
  }
  function Ja(s) {
    const d = i(X).get(s);
    if (d) {
      const y = Date.now() - d.lastUpdateTime;
      if (w(U, d.currentStepIndex, !0), w(z, d.isPlaying, !0), w(Z, [...d.displayedSteps], !0), w(ie, d.typingStepIndex, !0), w(me, d.typedContent, !0), d.isPlaying && i(O) && i(U) < i(O).length) {
        let Y = i(U), V = 0;
        for (; Y < i(O).length && V < y; ) {
          const F = i(O)[Y], N = (F.delay || 1e3) / l();
          if (V + N <= y)
            w(Z, [...i(Z), F], !0), Y++, V += N;
          else
            break;
        }
        w(U, Y, !0), i(U) < i(O).length ? Yt() : w(z, !1);
      }
    } else
      i(X).has(s) || (dn(), a() && i(On) && i(O) && i(O).length > 0 && setTimeout(() => vn(), 300));
  }
  function Hn(s) {
    if (s === i(S) || !b() || s < 0 || s >= b().length) return;
    Ka(), ve && (clearTimeout(ve), ve = null), le && (clearTimeout(le), le = null), w(S, s, !0);
    const d = b()[s];
    d && (Ja(d.id), cn = d.id), x == null || x.dispatchEvent(new CustomEvent("tab-change", { detail: { index: s, tab: d } }));
  }
  function pn(s) {
    if (!b() || b().length <= 1) return;
    const d = b()[s];
    if (d.closable !== !1 && B())
      if (d && i(X).delete(d.id), x == null || x.dispatchEvent(new CustomEvent("tab-close", { detail: { index: s, tab: d } })), s === i(S)) {
        const Y = s > 0 ? s - 1 : 0;
        b().length > 1 && Hn(Y);
      } else s < i(S) && bn(S, -1);
  }
  function $r() {
    E() && (x == null || x.dispatchEvent(new CustomEvent("tab-add", { detail: {} })));
  }
  function Tr(s) {
    return s ? `tab-status-${s}` : "";
  }
  var _n = Xl(), kr = G(_n);
  {
    var Xa = (s) => {
      var d = Cl(), y = G(d);
      {
        var Y = (I) => {
          var te = kl();
          A(I, te);
        };
        K(y, (I) => {
          i(Tt) && I(Y);
        });
      }
      var V = oe(y, 2), F = G(V, !0);
      j(V);
      var N = oe(V, 2);
      {
        var ee = (I) => {
          var te = Sl(), ye = G(te);
          {
            var ge = (H) => {
              var _ = ql();
              _.__click = ja;
              var k = G(_, !0);
              j(_), re(() => {
                _.disabled = !i(O) || i(O).length === 0, Ne(k, i(z) ? "⏸" : "▶");
              }), A(H, _);
            };
            K(ye, (H) => {
              i(tt) && H(ge);
            });
          }
          var Ee = oe(ye, 2);
          {
            var Be = (H) => {
              var _ = xl();
              _.__click = dn, re(() => _.disabled = i(Z).length === 0), A(H, _);
            };
            K(Ee, (H) => {
              i(ft) && H(Be);
            });
          }
          var Ve = oe(Ee, 2);
          {
            var Se = (H) => {
              var _ = El();
              _.__click = Ga;
              var k = G(_, !0);
              j(_), re(() => Ne(k, n() === "dark" ? "☀" : "🌙")), A(H, _);
            };
            K(Ve, (H) => {
              i(Ye) && H(Se);
            });
          }
          j(te), A(I, te);
        };
        K(N, (I) => {
          i(fn) && I(ee);
        });
      }
      j(d), re(() => Ne(F, i(ze))), A(s, d);
    };
    K(kr, (s) => {
      i(In) && s(Xa);
    });
  }
  var qr = oe(kr, 2);
  {
    var Za = (s) => {
      var d = Il(), y = G(d);
      Ct(y, 17, b, St, (F, N, ee) => {
        var I = Bl();
        I.__click = () => Hn(ee);
        var te = G(I);
        {
          var ye = (_) => {
            var k = Pl(), W = G(k, !0);
            j(k), re(() => Ne(W, i(N).icon)), A(_, k);
          };
          K(te, (_) => {
            i(N).icon && _(ye);
          });
        }
        var ge = oe(te, 2), Ee = G(ge, !0);
        j(ge);
        var Be = oe(ge, 2);
        {
          var Ve = (_) => {
            var k = Al(), W = G(k, !0);
            j(k), re(() => Ne(W, i(N).badge)), A(_, k);
          };
          K(Be, (_) => {
            i(N).badge !== void 0 && _(Ve);
          });
        }
        var Se = oe(Be, 2);
        {
          var H = (_) => {
            var k = Rl();
            k.__click = (W) => {
              W.stopPropagation(), pn(ee);
            }, k.__keydown = (W) => {
              (W.key === "Enter" || W.key === " ") && (W.stopPropagation(), W.preventDefault(), pn(ee));
            }, A(_, k);
          };
          K(Se, (_) => {
            i(N).closable !== !1 && B() && b().length > 1 && _(H);
          });
        }
        j(I), re(
          (_) => {
            Zt(I, 1, `terminal-tab ${ee === i(S) ? "active" : ""} ${_ ?? ""}`, "svelte-1oe4pqn"), Ne(Ee, i(N).title);
          },
          [() => Tr(i(N).status)]
        ), A(F, I);
      });
      var Y = oe(y, 2);
      {
        var V = (F) => {
          var N = Nl();
          N.__click = $r, A(F, N);
        };
        K(Y, (F) => {
          E() && F(V);
        });
      }
      j(d), A(s, d);
    };
    K(qr, (s) => {
      C() && b() && b().length > 0 && J() === "top" && s(Za);
    });
  }
  var kt = oe(qr, 2);
  kt.__click = yr, kt.__keydown = [Ol, yr];
  var xr = G(kt);
  Ct(xr, 17, () => i(Z), St, (s, d, y) => {
    var Y = Xt(), V = Jt(Y);
    {
      var F = (ee) => {
        var I = Ll(), te = G(I);
        Ct(te, 21, () => Ya(i(d).content), St, (ye, ge) => {
          const Ee = /* @__PURE__ */ $e(() => i(ge)[0]), Be = /* @__PURE__ */ $e(() => {
            var H;
            return ((H = i(Ee)) == null ? void 0 : H.columnGap) || "16px";
          }), Ve = /* @__PURE__ */ $e(() => {
            var H;
            return ((H = i(Ee)) == null ? void 0 : H.rowGap) || "4px";
          });
          var Se = Ml();
          Ct(Se, 21, () => i(ge), St, (H, _) => {
            var k = Dl(), W = G(k);
            gn(W, () => Ln(i(_))), j(k), re(() => {
              Zt(k, 1, `terminal-table-cell ${i(_).tableColumn ? `col-${i(_).tableColumn}` : ""}`, "svelte-1oe4pqn"), Pt(k, `${i(_).color ? `color: ${i(_).color};` : ""}${i(_).backgroundColor ? `background-color: ${i(_).backgroundColor};` : ""}${i(_).fontWeight ? `font-weight: ${i(_).fontWeight};` : ""}${i(_).fontStyle ? `font-style: ${i(_).fontStyle};` : ""}${i(_).width ? `width: ${i(_).width};` : ""}${i(_).align ? `text-align: ${i(_).align};` : ""}`);
            }), A(H, k);
          }), j(Se), re(() => Pt(Se, `gap: ${i(Be) ?? ""}; margin-bottom: ${i(Ve) ?? ""};`)), A(ye, Se);
        }), j(te), j(I), re(
          (ye) => {
            Zt(I, 1, `terminal-line ${ye ?? ""}`, "svelte-1oe4pqn"), Pt(I, `${i(d).marginTop ? `margin-top: ${i(d).marginTop};` : ""}${i(d).marginBottom ? `margin-bottom: ${i(d).marginBottom};` : ""}`);
          },
          [() => wr(i(d).type)]
        ), A(ee, I);
      }, N = (ee) => {
        var I = jl(), te = G(I), ye = G(te);
        {
          var ge = (_) => {
            var k = Mr();
            re(() => Ne(k, `${i(d).prompt || "$"} `)), A(_, k);
          };
          K(ye, (_) => {
            i(d).type === "command" && _(ge);
          });
        }
        var Ee = oe(ye);
        {
          var Be = (_) => {
            var k = Mr();
            re(() => Ne(k, i(me))), A(_, k);
          }, Ve = (_) => {
            var k = Xt(), W = Jt(k);
            {
              var ri = (qt) => {
                var Vt = Xt(), Wn = Jt(Vt);
                Ct(Wn, 17, () => i(d).content, St, (ii, Gt) => {
                  var Er = Xt(), li = Jt(Er);
                  {
                    var oi = (xt) => {
                      var Ge = Fl(), jn = G(Ge);
                      gn(jn, () => Ln(i(Gt))), j(Ge), re((Un) => Pt(Ge, Un), [() => Fn(i(Gt))]), A(xt, Ge);
                    }, si = (xt) => {
                      var Ge = Hl(), jn = G(Ge);
                      gn(jn, () => Ln(i(Gt))), j(Ge), re((Un) => Pt(Ge, Un), [() => Fn(i(Gt))]), A(xt, Ge);
                    };
                    K(li, (xt) => {
                      i(Gt).display === "block" ? xt(oi) : xt(si, !1);
                    });
                  }
                  A(ii, Er);
                }), A(qt, Vt);
              }, ai = (qt) => {
                var Vt = Xt(), Wn = Jt(Vt);
                gn(Wn, () => i(d).content.replace(/\n/g, "<br>")), A(qt, Vt);
              };
              K(
                W,
                (qt) => {
                  Mn(i(d).content) ? qt(ri) : qt(ai, !1);
                },
                !0
              );
            }
            A(_, k);
          };
          K(Ee, (_) => {
            y === i(ie) ? _(Be) : _(Ve, !1);
          });
        }
        var Se = oe(Ee);
        {
          var H = (_) => {
            var k = Wl();
            A(_, k);
          };
          K(Se, (_) => {
            y === i(ie) && _(H);
          });
        }
        j(te), j(I), re(
          (_) => {
            Zt(I, 1, `terminal-line ${_ ?? ""}`, "svelte-1oe4pqn"), Pt(I, `${i(d).marginTop ? `margin-top: ${i(d).marginTop};` : ""}${i(d).marginBottom ? `margin-bottom: ${i(d).marginBottom};` : ""}`);
          },
          [() => wr(i(d).type)]
        ), A(ee, I);
      };
      K(V, (ee) => {
        Mn(i(d).content) && za(i(d).content) ? ee(F) : ee(N, !1);
      });
    }
    A(s, Y);
  });
  var Qa = oe(xr, 2);
  {
    var ei = (s) => {
      var d = Ul();
      A(s, d);
    };
    K(Qa, (s) => {
      i(z) && i(ie) === -1 && s(ei);
    });
  }
  j(kt), Fr(kt, (s) => T = s, () => T);
  var ti = oe(kt, 2);
  {
    var ni = (s) => {
      var d = Jl(), y = G(d);
      Ct(y, 17, b, St, (F, N, ee) => {
        var I = Gl();
        I.__click = () => Hn(ee);
        var te = G(I);
        {
          var ye = (_) => {
            var k = zl(), W = G(k, !0);
            j(k), re(() => Ne(W, i(N).icon)), A(_, k);
          };
          K(te, (_) => {
            i(N).icon && _(ye);
          });
        }
        var ge = oe(te, 2), Ee = G(ge, !0);
        j(ge);
        var Be = oe(ge, 2);
        {
          var Ve = (_) => {
            var k = Yl(), W = G(k, !0);
            j(k), re(() => Ne(W, i(N).badge)), A(_, k);
          };
          K(Be, (_) => {
            i(N).badge !== void 0 && _(Ve);
          });
        }
        var Se = oe(Be, 2);
        {
          var H = (_) => {
            var k = Vl();
            k.__click = (W) => {
              W.stopPropagation(), pn(ee);
            }, k.__keydown = (W) => {
              (W.key === "Enter" || W.key === " ") && (W.stopPropagation(), W.preventDefault(), pn(ee));
            }, A(_, k);
          };
          K(Se, (_) => {
            i(N).closable !== !1 && B() && b().length > 1 && _(H);
          });
        }
        j(I), re(
          (_) => {
            Zt(I, 1, `terminal-tab ${ee === i(S) ? "active" : ""} ${_ ?? ""}`, "svelte-1oe4pqn"), Ne(Ee, i(N).title);
          },
          [() => Tr(i(N).status)]
        ), A(F, I);
      });
      var Y = oe(y, 2);
      {
        var V = (F) => {
          var N = Kl();
          N.__click = $r, A(F, N);
        };
        K(Y, (F) => {
          E() && F(V);
        });
      }
      j(d), A(s, d);
    };
    K(ti, (s) => {
      C() && b() && b().length > 0 && J() === "bottom" && s(ni);
    });
  }
  return j(_n), Fr(_n, (s) => x = s, () => x), A(e, _n), Qr({
    get theme() {
      return n();
    },
    set theme(s = "dark") {
      n(s), Q();
    },
    get session() {
      return r();
    },
    set session(s = []) {
      r(s), Q();
    },
    get autoplay() {
      return a();
    },
    set autoplay(s = !1) {
      a(s), Q();
    },
    get playbackSpeed() {
      return l();
    },
    set playbackSpeed(s = 1) {
      l(s), Q();
    },
    get showHeader() {
      return o();
    },
    set showHeader(s) {
      o(s), Q();
    },
    get title() {
      return u();
    },
    set title(s = "Terminal") {
      u(s), Q();
    },
    get colors() {
      return f();
    },
    set colors(s = {}) {
      f(s), Q();
    },
    get typingSpeed() {
      return c();
    },
    set typingSpeed(s = 40) {
      c(s), Q();
    },
    get enableTyping() {
      return h();
    },
    set enableTyping(s = !0) {
      h(s), Q();
    },
    get showPlayButton() {
      return p();
    },
    set showPlayButton(s) {
      p(s), Q();
    },
    get showResetButton() {
      return g();
    },
    set showResetButton(s) {
      g(s), Q();
    },
    get showThemeToggle() {
      return m();
    },
    set showThemeToggle(s) {
      m(s), Q();
    },
    get showWindowButtons() {
      return v();
    },
    set showWindowButtons(s) {
      v(s), Q();
    },
    get tabs() {
      return b();
    },
    set tabs(s = []) {
      b(s), Q();
    },
    get activeTab() {
      return $();
    },
    set activeTab(s = 0) {
      $(s), Q();
    },
    get showTabs() {
      return C();
    },
    set showTabs(s = !1) {
      C(s), Q();
    },
    get allowTabClose() {
      return B();
    },
    set allowTabClose(s = !0) {
      B(s), Q();
    },
    get allowTabAdd() {
      return E();
    },
    set allowTabAdd(s = !1) {
      E(s), Q();
    },
    get tabBarPosition() {
      return J();
    },
    set tabBarPosition(s = "top") {
      J(s), Q();
    }
  });
}
il(["click", "keydown"]);
customElements.define("terminal-session", gl(
  Ql,
  {
    showPlayButton: { attribute: "show-play-button" },
    showResetButton: { attribute: "show-reset-button" },
    showThemeToggle: { attribute: "show-theme-toggle" },
    showWindowButtons: { attribute: "show-window-buttons" },
    showTabs: { attribute: "show-tabs", type: "Boolean" },
    allowTabClose: { attribute: "allow-tab-close", type: "Boolean" },
    allowTabAdd: { attribute: "allow-tab-add", type: "Boolean" },
    autoplay: { attribute: "autoplay", type: "Boolean" },
    enableTyping: { attribute: "enable-typing", type: "Boolean" },
    showHeader: { attribute: "show-header" },
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
  Ql as default
};
